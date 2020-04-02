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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Home/home.js":
/*!*********************************!*\
  !*** ./components/Home/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./components/Home/service.js");
/* harmony import */ var _insights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insights */ "./components/Home/insights.js");
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\Home\\home.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Home = () => {
  return __jsx("div", {
    className: "jsx-1211302601",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1211302601" + " " + "box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1211302601" + " " + "box1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Design, Develop, Test & Delivered."), __jsx("div", {
    className: "jsx-1211302601" + " " + "box2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Bespoke products & platforms engineered to elevate your customers' experience, earn their loyalty & grow your business."), __jsx("div", {
    className: "jsx-1211302601" + " " + "box3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1211302601" + " " + "box4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Explore Services")), __jsx("div", {
    className: "jsx-1211302601" + " " + "backimg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1211302601" + " " + "box5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1211302601" + " " + "box6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "A PEOPLE-FIRST APPROACH"), __jsx("div", {
    className: "jsx-1211302601" + " " + "box7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Custom Digital Products & Platforms Created by People, for People. Transform your business with our user-centric approach.")), __jsx("div", {
    className: "jsx-1211302601" + " " + "box8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1211302601" + " " + "box9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "There are consultancies that focus on UX and UI. There are developers that design and build.", __jsx("br", {
    className: "jsx-1211302601",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-1211302601",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }), "We deliver the best of all worlds with our agile, end-to-end process. We get rid of your digital development headaches by maximizing efficiencies to deliver transformative solutions that delight users and drive revenue.", __jsx("br", {
    className: "jsx-1211302601",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-1211302601",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }), "Our mission is to help clients from startup to enterprise optimize their online businesses for unstoppable growth.")), __jsx("div", {
    className: "jsx-1211302601" + " " + "box10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1211302601" + " " + "box11",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Learn About Our Capabilities & Culture")))), __jsx(_service__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx(_insights__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1211302601",
    __self: undefined
  }, ".box.jsx-1211302601{position:absolute;width:1340px;height:630px;background:#FFFFFF;}.box1.jsx-1211302601{position:absolute;width:586px;height:345px;left:85px;top:205px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:90px;line-height:105px;color:#333333;}.box2.jsx-1211302601{position:absolute;width:411px;height:266px;left:754px;top:205px;font-family:Roboto;font-style:normal;font-weight:300;font-size:36px;line-height:42px;color:#222222;}.box3.jsx-1211302601{position:absolute;width:194px;height:50px;left:756px;top:504px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.box4.jsx-1211302601{position:absolute;width:118px;height:19px;left:39px;top:13px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}.backimg.jsx-1211302601{position:absolute;width:1340px;height:859px;left:0px;top:791px;background-color:gray;}.box5.jsx-1211302601{position:absolute;width:617px;height:399px;left:33px;top:460px;background:#184A88;}.box6.jsx-1211302601{position:absolute;width:540.85px;height:113px;left:37px;top:67px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#FFFFFF;}.box7.jsx-1211302601{position:absolute;width:525.23px;height:146px;left:41.03px;top:211px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;color:#FFFFFF;}.box8.jsx-1211302601{position:absolute;width:690px;height:243px;left:650px;top:616px;background:#FFFFFF;}.box9.jsx-1211302601{position:absolute;width:567px;height:287px;left:50px;top:91px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#333333;}.box10.jsx-1211302601{position:absolute;width:345px;height:50px;left:692px;top:950px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.box11.jsx-1211302601{position:absolute;width:272px;height:19px;left:43px;top:14px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXEhvbWVcXGhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RrQixBQUd1QixBQU1BLEFBYUEsQUFjQSxBQVlBLEFBY0EsQUFVQSxBQVNBLEFBY0EsQUFjQSxBQVNBLEFBY0EsQUFZQSxrQkE1SUwsQUFNRCxBQWFBLEFBY0EsQUFZQSxBQWNDLEFBVUQsQUFTRyxBQWNBLEFBY0gsQUFTQSxBQWNBLEFBWUEsWUF0SUMsQUFhQSxBQWNELEFBWUEsQUF3QkMsQUFxQ0EsQUFTQSxBQWNELEFBWUEsQ0E3SUMsQUEyREEsRUFtQkEsQUFjQSxTQTFERixBQVlELEFBb0ZDLEFBWUQsQ0F2SUEsQUFhQyxBQWtERCxBQXFDQyxBQVNELENBbkhTLEFBMkRWLEVBbUJDLEFBY0csTUE5Q0osQUFnR0EsQ0F2SUMsQUEyQkEsQUEwQkEsQUFVQSxBQThDRCxBQWNDLENBOUdBLEFBdUZBLEVBNUJELEdBY0MsRUE5Q1MsQUFnR0EsQ0ExQkEsQ0FwSHJCLEFBT3FCLEFBMkJBLEFBMEJHLEFBVUgsQUE0REEsQ0E5R0EsQUF1RkEsQ0E1QkEsSUFjQSxXQTlDRCxBQWdHQSxDQTFCQSxDQTdHQSxBQTJCTyxBQW9DN0IsQUE0RDZCLENBOUdQLEFBdUZ0QixDQTVCc0IsQ0FsQnBCLEdBZ0NvQixVQTlDQyxBQWdHQSxDQTFCSCxDQTdHQyxDQWFELENBMkRHLElBY0EsQ0EzREcsQUFnR0EsUUFiUCxFQTdHQSxBQWFBLEFBMEJBLEFBZ0dBLElBL0RBLElBY0EsSUEzREcsQUFnR0EsQ0FiRCxFQTdHQyxBQWFELEFBMEJBLEFBZ0dBLElBL0RBLElBY0EsT0EzRHJCLEFBbUZrQixBQWFsQixFQTdHa0IsQUEwQkEsQUFnR0EsQ0F2SUEsR0F3RUEsSUFjQSxJQXdCbEIsRUFoR0UsQUEwQkYsQUFnR0EsQ0F2SUUsR0F3RUYsSUFjQSIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXG5leHQtbGF0ZXN0XFxjb21wb25lbnRzXFxIb21lXFxob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZVwiO1xyXG5pbXBvcnQgSW5zaWdodHMgZnJvbSBcIi4vaW5zaWdodHNcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94MVwiPlxyXG4gICAgICAgICAgRGVzaWduLCBEZXZlbG9wLCBUZXN0ICYgRGVsaXZlcmVkLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94MlwiPlxyXG4gICAgICAgICAgQmVzcG9rZSBwcm9kdWN0cyAmIHBsYXRmb3JtcyBlbmdpbmVlcmVkIHRvIGVsZXZhdGUgeW91ciBjdXN0b21lcnMnIGV4cGVyaWVuY2UsIGVhcm4gdGhlaXIgbG95YWx0eSAmIGdyb3cgeW91ciBidXNpbmVzcy5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94NFwiPlxyXG4gICAgICAgICAgICBFeHBsb3JlIFNlcnZpY2VzXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2ltZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3g1XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94NlwiPlxyXG4gICAgICAgICAgICAgIEEgUEVPUExFLUZJUlNUIEFQUFJPQUNIXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94N1wiPlxyXG4gICAgICAgICAgICAgIEN1c3RvbSBEaWdpdGFsIFByb2R1Y3RzICYgUGxhdGZvcm1zIENyZWF0ZWQgYnkgUGVvcGxlLCBmb3IgUGVvcGxlLiBUcmFuc2Zvcm0geW91ciBidXNpbmVzcyB3aXRoIG91ciB1c2VyLWNlbnRyaWMgYXBwcm9hY2guXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94OFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDlcIj5cclxuICAgICAgICAgICAgICBUaGVyZSBhcmUgY29uc3VsdGFuY2llcyB0aGF0IGZvY3VzIG9uIFVYIGFuZCBVSS4gVGhlcmUgYXJlIGRldmVsb3BlcnMgdGhhdCBkZXNpZ24gYW5kIGJ1aWxkLlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBXZSBkZWxpdmVyIHRoZSBiZXN0IG9mIGFsbCB3b3JsZHMgd2l0aCBvdXIgYWdpbGUsIGVuZC10by1lbmQgcHJvY2Vzcy4gV2UgZ2V0IHJpZCBvZiB5b3VyIGRpZ2l0YWwgZGV2ZWxvcG1lbnQgaGVhZGFjaGVzIGJ5IG1heGltaXppbmcgZWZmaWNpZW5jaWVzIHRvIGRlbGl2ZXIgdHJhbnNmb3JtYXRpdmUgc29sdXRpb25zIHRoYXQgZGVsaWdodCB1c2VycyBhbmQgZHJpdmUgcmV2ZW51ZS5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgT3VyIG1pc3Npb24gaXMgdG8gaGVscCBjbGllbnRzIGZyb20gc3RhcnR1cCB0byBlbnRlcnByaXNlIG9wdGltaXplIHRoZWlyIG9ubGluZSBidXNpbmVzc2VzIGZvciB1bnN0b3BwYWJsZSBncm93dGguXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gxMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDExXCI+XHJcbiAgICAgICAgICAgICAgTGVhcm4gQWJvdXQgT3VyIENhcGFiaWxpdGllcyAmIEN1bHR1cmVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxTZXJ2aWNlLz5cclxuICAgICAgPEluc2lnaHRzLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAuYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMzQwcHg7XHJcbiAgICBoZWlnaHQ6IDYzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICB9XHJcbiAgLmJveDEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDU4NnB4O1xyXG4gICAgaGVpZ2h0OiAzNDVweDtcclxuICAgIGxlZnQ6IDg1cHg7XHJcbiAgICB0b3A6IDIwNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwNXB4OyAgIFxyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgfVxyXG4uYm94MiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDExcHg7XHJcbiAgICBoZWlnaHQ6IDI2NnB4O1xyXG4gICAgbGVmdDogNzU0cHg7XHJcbiAgICB0b3A6IDIwNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gIH1cclxuXHJcbi5ib3gzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxOTRweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxlZnQ6IDc1NnB4O1xyXG4gICAgdG9wOiA1MDRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTg0QTg4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSBcclxuXHJcbi5ib3g0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMThweDtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIGxlZnQ6IDM5cHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICMxODRBODg7XHJcbn1cclxuXHJcbi5iYWNraW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMzQwcHg7XHJcbiAgICBoZWlnaHQ6IDg1OXB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiA3OTFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBcclxuICB9XHJcblxyXG4uYm94NSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNjE3cHg7XHJcbiAgICBoZWlnaHQ6IDM5OXB4O1xyXG4gICAgbGVmdDogMzNweDtcclxuICAgIHRvcDogNDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTg0QTg4O1xyXG59ICBcclxuXHJcbi5ib3g2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1NDAuODVweDtcclxuICAgIGhlaWdodDogMTEzcHg7XHJcbiAgICBsZWZ0OiAzN3B4O1xyXG4gICAgdG9wOiA2N3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTZweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uYm94NyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTI1LjIzcHg7XHJcbiAgICBoZWlnaHQ6IDE0NnB4O1xyXG4gICAgbGVmdDogNDEuMDNweDtcclxuICAgIHRvcDogMjExcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5ib3g4IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2OTBweDtcclxuICAgIGhlaWdodDogMjQzcHg7XHJcbiAgICBsZWZ0OiA2NTBweDtcclxuICAgIHRvcDogNjE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uYm94OSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTY3cHg7XHJcbiAgICBoZWlnaHQ6IDI4N3B4O1xyXG4gICAgbGVmdDogNTBweDtcclxuICAgIHRvcDogOTFweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuLmJveDEwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzNDVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxlZnQ6IDY5MnB4O1xyXG4gICAgdG9wOiA5NTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTg0QTg4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJveDExIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyNzJweDtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIGxlZnQ6IDQzcHg7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICMxODRBODg7XHJcbn1cclxuXHJcbiAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il19 */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\next-latest\\\\components\\\\Home\\\\home.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/Home/insights.js":
/*!*************************************!*\
  !*** ./components/Home/insights.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\Home\\insights.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Insights = () => {
  return __jsx("div", {
    className: "jsx-584861060",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-584861060" + " " + "box1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-584861060" + " " + "box2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-584861060" + " " + "AI-header1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-584861060" + " " + "box3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-584861060" + " " + "box4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 29
    }
  }, "The Role Of Artificial Intelligence In Web Development"), __jsx("div", {
    className: "jsx-584861060" + " " + "box5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }, "Nowadays, Web development is growing at a rapid rate with a focus on enhancing user experience. We know that these days most people use mobile through access the web. Which indicates that websites with enhanced UI will remain at the...")))), __jsx("div", {
    className: "jsx-584861060" + " " + "box6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-584861060" + " " + "AI-header2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-584861060" + " " + "box7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-584861060" + " " + "box8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, "Python In the Field of ML and AI"), __jsx("div", {
    className: "jsx-584861060" + " " + "box9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, "Python language is one of the most popular programming languages in the world with its applications ranging from web development to scripting and process automation, Python is among one of the top choices among..."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "584861060",
    __self: undefined
  }, ".box1.jsx-584861060{position:absolute;width:1340px;height:677px;left:0px;top:3081px;background-color:gray;}.box2.jsx-584861060{position:absolute;width:500px;height:580px;left:94px;top:393px;background:#FFFFFF;box-shadow:0px 0px 10px rgba(0,0,0,0.15);}.AI-header1.jsx-584861060{position:absolute;width:500px;height:283px;left:0px;top:0px;background-color:red;}.box3.jsx-584861060{position:absolute;width:427px;height:117px;left:35px;top:207px;background:#FFFFFF;}.box4.jsx-584861060{position:absolute;width:339px;height:117px;left:25px;top:8px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:32px;line-height:37px;color:#222222;}.box5.jsx-584861060{position:absolute;width:374px;height:146px;left:30px;top:166px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:157.2%;color:#333333;}.box6.jsx-584861060{position:absolute;width:500px;height:580px;left:741px;top:393px;background:#FFFFFF;box-shadow:0px 0px 10px rgba(0,0,0,0.15);}.AI-header2.jsx-584861060{position:absolute;width:500px;height:283px;left:0px;top:0px;background-color:red;}.box7.jsx-584861060{position:absolute;width:427px;height:117px;left:37px;top:207px;background:#FFFFFF;}.box8.jsx-584861060{position:absolute;width:339px;height:117px;left:22px;top:8px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:32px;line-height:37px;color:#222222;}.box9.jsx-584861060{position:absolute;width:374px;height:146px;left:9px;top:166px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:157.2%;color:#333333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXEhvbWVcXGluc2lnaHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCd0IsQUFHbUMsQUFRQSxBQVNBLEFBUUEsQUFTQSxBQWNBLEFBY0EsQUFTQSxBQVFBLEFBU0EsQUFjQSxrQkFyR0wsQUFRRCxBQVNBLEFBUUEsQUFTQSxBQWNBLEFBY0EsQUFTQSxBQVFBLEFBU0EsQUFjQSxZQTdGQyxBQVNBLEFBUUEsQUFTQSxBQWNBLEFBY0EsQUFTQSxBQVFBLEFBU0EsQUFjQSxDQXRHQSxZQVNILEFBU0QsQUFRQyxBQVNBLEFBY0EsQUFjQyxBQVNGLEFBUUMsQUFTQSxBQWNELENBdEdBLFFBa0JELEFBc0RBLEFBK0JFLENBdEdDLEFBUUQsQUFpQkEsQUFTRixBQWNFLEFBK0JBLEFBU0YsQ0ExQkUsTUE1Q1csQUFzREEsQ0FyQ0YsQUFzREEsQ0FjQSxDQTlGQSxBQWlCQSxBQXVCQSxBQStCQSxDQS9FRyxBQThESCxnQkEzQkQsQUFzREEsQ0F2RXRCLEFBc0RBLEFBK0JzQixDQTlGMEIsQUFpQmhELEFBdUJzQixBQStCdEIsQ0FqQmdELEdBOURoRCxZQW1DdUIsQUFzREEsQ0FjSCxDQXREQSxlQXVERCxDQXREQSxDQWRBLEFBc0RBLE1BakZuQixDQXNEQSxNQTBDdUIsQ0F0REEsQ0FkRixBQXNEQSxpQkFyREgsQUFzREEsQUFjQSxDQXREQSxhQWJsQixBQXNEQSxBQWNBLENBdERBIiwiZmlsZSI6IkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXEhvbWVcXGluc2lnaHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSW5zaWdodHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94MVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBSS1oZWFkZXIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJveDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJveDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBSb2xlIE9mIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlIEluIFdlYiBEZXZlbG9wbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJib3g1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3dhZGF5cywgV2ViIGRldmVsb3BtZW50IGlzIGdyb3dpbmcgYXQgYSByYXBpZCByYXRlIHdpdGggYSBmb2N1cyBvbiBlbmhhbmNpbmcgdXNlciBleHBlcmllbmNlLiBXZSBrbm93IHRoYXQgdGhlc2UgZGF5cyBtb3N0IHBlb3BsZSB1c2UgbW9iaWxlIHRocm91Z2ggYWNjZXNzIHRoZSB3ZWIuIFdoaWNoIGluZGljYXRlcyB0aGF0IHdlYnNpdGVzIHdpdGggZW5oYW5jZWQgVUkgd2lsbCByZW1haW4gYXQgdGhlLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFJLWhlYWRlcjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiYm94N1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiYm94OFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHl0aG9uIEluIHRoZSBGaWVsZCBvZiBNTCBhbmQgQUlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiYm94OVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHl0aG9uIGxhbmd1YWdlIGlzIG9uZSBvZiB0aGUgbW9zdCBwb3B1bGFyIHByb2dyYW1taW5nIGxhbmd1YWdlcyBpbiB0aGUgd29ybGQgd2l0aCBpdHMgYXBwbGljYXRpb25zIHJhbmdpbmcgZnJvbSB3ZWIgZGV2ZWxvcG1lbnQgdG8gc2NyaXB0aW5nIGFuZCBwcm9jZXNzIGF1dG9tYXRpb24sIFB5dGhvbiBpcyBhbW9uZyBvbmUgb2YgdGhlIHRvcCBjaG9pY2VzIGFtb25nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmJveDEge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjc3cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDMwODFweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveDIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1ODBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDk0cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDM5M3B4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5BSS1oZWFkZXIxIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjgzcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94MyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDI3cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExN3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzVweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMjA3cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94NCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzM5cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExN3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94NSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzc0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0NnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMTY2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTcuMiU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJveDYge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1ODBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDc0MXB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzOTNweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuQUktaGVhZGVyMiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4M3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveDcge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQyN3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTdweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDM3cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIwN3B4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJveDgge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzOXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTdweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJveDkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM3NHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDZweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDlweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMTY2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTcuMiU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluc2lnaHRzIl19 */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\next-latest\\\\components\\\\Home\\\\insights.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Insights);

/***/ }),

/***/ "./components/Home/service.js":
/*!************************************!*\
  !*** ./components/Home/service.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\Home\\service.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Service = () => {
  return __jsx("div", {
    className: "jsx-221018569",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-221018569" + " " + "box12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-221018569" + " " + "box13",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-221018569" + " " + "box14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, "Java/Scala Programming"), __jsx("div", {
    className: "jsx-221018569" + " " + "box15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, "Java is a programming language and computing platform first released by Sun Microsystems in 1995."), __jsx("div", {
    className: "jsx-221018569" + " " + "box16",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-221018569" + " " + "box17",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "Hire our java developers We do help businesses in integrating your Java applications with databases, operating systems and third-party applications with our java outsourcing company services. We have experience of re-engineering and migration of applications built in Java. This would include technology migration, database migration, Java application upgrade, application porting, etc.", __jsx("br", {
    className: "jsx-221018569",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-221018569",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }), "Our team of Java professionals ranked top in providing Java application development services in below:"))), __jsx("div", {
    className: "jsx-221018569" + " " + "vector1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-221018569" + " " + "vector2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-221018569" + " " + "ellipse1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-221018569" + " " + "ellipse2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-221018569" + " " + "ellipse3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-221018569" + " " + "ellipse4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-221018569" + " " + "box22",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Java Development Services", __jsx("br", {
    className: "jsx-221018569",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), "Java Enterprise Application Development", __jsx("br", {
    className: "jsx-221018569",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), "Java Desktop Application Development", __jsx("br", {
    className: "jsx-221018569",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), "Java Mobile Application Development"), __jsx("div", {
    className: "jsx-221018569" + " " + "ellipse5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-221018569" + " " + "ellipse6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-221018569" + " " + "ellipse7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-221018569" + " " + "box23",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Java Web Services Development", __jsx("br", {
    className: "jsx-221018569",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), "Java Application Migration & Integration", __jsx("br", {
    className: "jsx-221018569",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), "Java Application Maintenance & Support"), __jsx("div", {
    className: "jsx-221018569" + " " + "box24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-221018569" + " " + "box25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "View Our JAVA/SCALA Programming Service In Details"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "221018569",
    __self: undefined
  }, ".box12.jsx-221018569{position:absolute;width:1340px;height:744px;left:0px;top:1962px;background-color:gray;}.box13.jsx-221018569{position:absolute;width:617px;height:399px;left:33px;top:390px;background:#184A88;}.box14.jsx-221018569{position:absolute;width:349px;height:113px;left:221px;top:105px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#FFFFFF;}.box15.jsx-221018569{position:absolute;width:525.23px;height:146px;left:64px;top:260px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;color:#FFFFFF;}.box16.jsx-221018569{position:absolute;width:693px;height:676px;left:614px;top:-70px;background:#FFFFFF;}.box17.jsx-221018569{position:absolute;width:548px;height:263px;left:73px;top:80px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:157.2%;color:#333333;}.ellipse1.jsx-221018569{position:absolute;width:11px;height:11px;left:728px;top:717px;background:#8E8E8E;}.ellipse2.jsx-221018569{position:absolute;width:11px;height:11px;left:728px;top:743px;background:#8E8E8E;}.ellipse3.jsx-221018569{position:absolute;width:11px;height:11px;left:728px;top:791px;background:#8E8E8E;}.ellipse4.jsx-221018569{position:absolute;width:11px;height:11px;left:728px;top:841px;background:#8E8E8E;}.box22.jsx-221018569{position:absolute;width:213px;height:206px;left:770px;top:710px;font-family:Roboto;font-style:normal;font-weight:300;font-size:16px;line-height:157.2%;color:#333333;}.box23.jsx-221018569{position:absolute;width:213px;height:206px;left:1017px;top:710px;font-family:Roboto;font-style:normal;font-weight:300;font-size:16px;line-height:157.2%;color:#333333;}.ellipse5.jsx-221018569{position:absolute;width:11px;height:11px;left:977px;top:717px;background:#8E8E8E;}.ellipse6.jsx-221018569{position:absolute;width:11px;height:11px;left:977px;top:743px;background:#8E8E8E;}.ellipse7.jsx-221018569{position:absolute;width:11px;height:11px;left:977px;top:791px;background:#8E8E8E;}.box24.jsx-221018569{position:absolute;width:457px;height:50px;left:740px;top:910px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.box25.jsx-221018569{position:absolute;width:390px;height:19px;left:40px;top:14px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}.vector1.jsx-221018569{position:absolute;left:38%;right:60%;top:109%;bottom:-15%;background:#87BBE5;}.vector2.jsx-221018569{position:absolute;left:43%;right:55%;top:109%;bottom:-15%;background:#184A88;-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXEhvbWVcXHNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUR3QixBQUcyQixBQVNBLEFBU0EsQUFjQSxBQWNBLEFBU0EsQUFjQSxBQVNBLEFBU0EsQUFTQSxBQVNBLEFBY0EsQUFjQSxBQVNBLEFBU0EsQUFTQSxBQVlBLEFBY0EsQUFTQSxrQkFsTUwsQUFTRCxBQVNBLEFBY0csQUFjSCxBQVNBLEFBY0QsQUFTQSxBQVNBLEFBU0EsQUFTQyxBQWNBLEFBY0QsQUFTQSxBQVNBLEFBU0MsQUFZQSxBQWNILEFBU0EsU0FSQyxBQVNBLEVBOUhFLEFBU0EsQUFTQSxBQVNBLEFBcUNBLEFBU0EsQUFTQSxDQTlJQyxBQVNBLEFBNEJBLEFBU0EsQUFrREEsQUFjQSxBQXlDRCxBQVlBLENBNUtDLEVBZ0NBLElBMkpKLEFBU0EsSUE5SEUsQUFTQSxBQVNBLEFBU0EsQUFxQ0EsQUFTQSxBQVNBLENBU0EsQUFZRCxDQW5LQSxBQVNDLEFBNEJBLEFBU0QsQUFrREMsQUFjQyxDQXZISCxFQWdDQyxBQTJKRSxBQVNBLE1BOUhGLEFBU0EsQUFTQSxBQVNBLEFBcUNBLEFBU0EsQUFTQSxBQXFCRCxDQTVLRSxBQVNELEFBOENELEFBeUdDLENBOUlBLEFBNEJBLEFBMkRBLENBY0EsQ0F2RkEsRUEySlMsQUFTQSxHQXZCQSxDQXJIQSxBQWNBLEFBU0EsQUFTQSxBQVNBLEFBcUNBLEFBU0EsQUFTQSxDQTlJQSxBQXVKQSxDQWhLRyxBQWtCSCxBQTRCQSxBQTJEQSxDQWNBLENBdkZBLFdBMkp2QixBQVM4QixHQXZCUixDQXJIQSxBQWN0QixBQVNBLEFBU0EsQUFTQSxBQXFDQSxBQVNBLEFBU0EsQ0E5SUEsQUF1SjZCLENBOUlQLEFBNEJ0QixBQTJEc0IsQ0FjQSxDQXZGQSxDQWhDdEIsWUE2S3VCLENBckhILEVBckNHLEFBdUZILENBY0EsQ0F2RkcsSUFnSUcsUUF4R1AsRUFrREEsQUFtRUEsQ0FyREEsRUFyR0EsRUFjQSxPQWdJRyxDQXhHQyxFQWtEQSxBQW1FRixDQXJERSxFQXJHRixFQWNBLFVBZ0lyQixFQXhHa0IsQUFxSEEsRUFuRUEsQ0F2RkEsQUFxR0EsRUF2RkEsU0F3QmxCLEFBcUhBLEVBbkVBLENBdkZBLEFBcUdBLENBd0VBLENBL0pBIiwiZmlsZSI6IkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXEhvbWVcXHNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IFNlcnZpY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94MTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94MTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDE0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEphdmEvU2NhbGEgUHJvZ3JhbW1pbmdcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94MTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSmF2YSBpcyBhIHByb2dyYW1taW5nIGxhbmd1YWdlIGFuZCBjb21wdXRpbmcgcGxhdGZvcm0gZmlyc3QgcmVsZWFzZWQgYnkgU3VuIE1pY3Jvc3lzdGVtcyBpbiAxOTk1LlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gxNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDE3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXJlIG91ciBqYXZhIGRldmVsb3BlcnMgV2UgZG8gaGVscCBidXNpbmVzc2VzIGluIGludGVncmF0aW5nIHlvdXIgSmF2YSBhcHBsaWNhdGlvbnMgd2l0aCBkYXRhYmFzZXMsIG9wZXJhdGluZyBzeXN0ZW1zIGFuZCB0aGlyZC1wYXJ0eSBhcHBsaWNhdGlvbnMgd2l0aCBvdXIgamF2YSBvdXRzb3VyY2luZyBjb21wYW55IHNlcnZpY2VzLiBXZSBoYXZlIGV4cGVyaWVuY2Ugb2YgcmUtZW5naW5lZXJpbmcgYW5kIG1pZ3JhdGlvbiBvZiBhcHBsaWNhdGlvbnMgYnVpbHQgaW4gSmF2YS4gVGhpcyB3b3VsZCBpbmNsdWRlIHRlY2hub2xvZ3kgbWlncmF0aW9uLCBkYXRhYmFzZSBtaWdyYXRpb24sIEphdmEgYXBwbGljYXRpb24gdXBncmFkZSwgYXBwbGljYXRpb24gcG9ydGluZywgZXRjLlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICBPdXIgdGVhbSBvZiBKYXZhIHByb2Zlc3Npb25hbHMgcmFua2VkIHRvcCBpbiBwcm92aWRpbmcgSmF2YSBhcHBsaWNhdGlvbiBkZXZlbG9wbWVudCBzZXJ2aWNlcyBpbiBiZWxvdzpcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInZlY3RvcjFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInZlY3RvcjJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImVsbGlwc2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJlbGxpcHNlMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiZWxsaXBzZTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImVsbGlwc2U0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJib3gyMlwiPlxyXG4gICAgICAgICAgICAgICAgSmF2YSBEZXZlbG9wbWVudCBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgPGJyLz4gXHJcbiAgICAgICAgICAgICAgICBKYXZhIEVudGVycHJpc2UgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnQgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgSmF2YSBEZXNrdG9wIEFwcGxpY2F0aW9uIERldmVsb3BtZW50IFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIEphdmEgTW9iaWxlIEFwcGxpY2F0aW9uIERldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImVsbGlwc2U1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJlbGxpcHNlNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiZWxsaXBzZTdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJveDIzXCI+XHJcbiAgICAgICAgICAgICAgICBKYXZhIFdlYiBTZXJ2aWNlcyBEZXZlbG9wbWVudFxyXG4gICAgICAgICAgICAgICAgPGJyLz4gXHJcbiAgICAgICAgICAgICAgICBKYXZhIEFwcGxpY2F0aW9uIE1pZ3JhdGlvbiAmIEludGVncmF0aW9uIFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIEphdmEgQXBwbGljYXRpb24gTWFpbnRlbmFuY2UgJiBTdXBwb3J0XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJveDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiYm94MjVcIj5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IE91ciBKQVZBL1NDQUxBIFByb2dyYW1taW5nIFNlcnZpY2UgSW4gRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAuYm94MTIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTM0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzQ0cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHRvcDogMTk2MnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ib3gxMyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA2MTdweDtcclxuICAgICAgICBoZWlnaHQ6IDM5OXB4O1xyXG4gICAgICAgIGxlZnQ6IDMzcHg7XHJcbiAgICAgICAgdG9wOiAzOTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTg0QTg4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm94MTQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMzQ5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTNweDtcclxuICAgICAgICBsZWZ0OiAyMjFweDtcclxuICAgICAgICB0b3A6IDEwNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm94MTUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNTI1LjIzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDZweDtcclxuICAgICAgICBsZWZ0OiA2NHB4O1xyXG4gICAgICAgIHRvcDogMjYwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ib3gxNiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA2OTNweDtcclxuICAgICAgICBoZWlnaHQ6IDY3NnB4O1xyXG4gICAgICAgIGxlZnQ6IDYxNHB4O1xyXG4gICAgICAgIHRvcDogLTcwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJveDE3IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDU0OHB4O1xyXG4gICAgICAgIGhlaWdodDogMjYzcHg7XHJcbiAgICAgICAgbGVmdDogNzNweDtcclxuICAgICAgICB0b3A6IDgwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1Ny4yJTtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZTEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgbGVmdDogNzI4cHg7XHJcbiAgICAgICAgdG9wOiA3MTdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOEU4RThFO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGxpcHNlMiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgIGhlaWdodDogMTFweDtcclxuICAgICAgICBsZWZ0OiA3MjhweDtcclxuICAgICAgICB0b3A6IDc0M3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4RThFOEU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsbGlwc2UzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgIGxlZnQ6IDcyOHB4O1xyXG4gICAgICAgIHRvcDogNzkxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFOEU4RTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZTQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgbGVmdDogNzI4cHg7XHJcbiAgICAgICAgdG9wOiA4NDFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOEU4RThFO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3gyMiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyMTNweDtcclxuICAgICAgICBoZWlnaHQ6IDIwNnB4O1xyXG4gICAgICAgIGxlZnQ6IDc3MHB4O1xyXG4gICAgICAgIHRvcDogNzEwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1Ny4yJTtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIH1cclxuXHJcbiAgICAuYm94MjMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjEzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDZweDtcclxuICAgICAgICBsZWZ0OiAxMDE3cHg7XHJcbiAgICAgICAgdG9wOiA3MTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTU3LjIlO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGxpcHNlNSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgIGhlaWdodDogMTFweDtcclxuICAgICAgICBsZWZ0OiA5NzdweDtcclxuICAgICAgICB0b3A6IDcxN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4RThFOEU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsbGlwc2U2IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgIGxlZnQ6IDk3N3B4O1xyXG4gICAgICAgIHRvcDogNzQzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFOEU4RTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZTcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgbGVmdDogOTc3cHg7XHJcbiAgICAgICAgdG9wOiA3OTFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOEU4RThFO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3gyNCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA0NTdweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgbGVmdDogNzQwcHg7XHJcbiAgICAgICAgdG9wOiA5MTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxODRBODg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJveDI1IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDM5MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgICAgIHRvcDogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICBjb2xvcjogIzE4NEE4ODtcclxuICAgIH1cclxuXHJcbiAgICAudmVjdG9yMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDM4JTtcclxuICAgICAgICByaWdodDogNjAlO1xyXG4gICAgICAgIHRvcDogMTA5JTtcclxuICAgICAgICBib3R0b206IC0xNSU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzg3QkJFNTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZlY3RvcjIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA0MyU7XHJcbiAgICAgICAgcmlnaHQ6IDU1JTtcclxuICAgICAgICB0b3A6IDEwOSU7XHJcbiAgICAgICAgYm90dG9tOiAtMTUlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxODRBODg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2UiXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\next-latest\\\\components\\\\Home\\\\service.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./components/banner.js":
/*!******************************!*\
  !*** ./components/banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _designLayouts_headings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./designLayouts/headings */ "./components/designLayouts/headings.js");
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\banner.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import Logo from './icons/zeit-white-full-logo';


const Banner = () => {
  return __jsx("div", {
    className: "jsx-3949308642" + " " + "banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3949308642",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "jsx-3949308642" + " " + "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_designLayouts_headings__WEBPACK_IMPORTED_MODULE_2__["default"], {
    Tag: "h1",
    text: "Discover a place you'll love to live",
    className: "banner-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3949308642",
    __self: undefined
  }, ".banner.jsx-3949308642{width:100%;background-image:url(\"https://www.trulia.com/javascript/moana//_next/static/assets/hiDpiExtraLarge-e3d56c6337c994b49d5b40cdc7df5bd7.jpg\");color:#fff;height:580px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.banner-heading.jsx-3949308642{text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.inner.jsx-3949308642{width:100%;max-width:1024px;margin:0 auto;padding:0 1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}a.jsx-3949308642{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}p.jsx-3949308642{color:#fff;margin:0;-webkit-transition:color 0.15s ease;transition:color 0.15s ease;}.mobile.jsx-3949308642{display:none;}@media (max-width:640px){p.jsx-3949308642{font-size:14px;}p.jsx-3949308642{display:none;}.mobile.jsx-3949308642{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXGJhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmtCLEFBR3NCLEFBUU8sQUFJUCxBQVNTLEFBR1QsQUFLRSxBQUlJLEFBR0YsQUFHQyxXQXRDMEgsQUFZekgsQUFZUixFQUtYLEFBT0UsQ0FHQSxDQU5BLEdBekJ1QixFQWlCSyxRQVpkLGNBQ0MsZUFDRiwyQkFXZixrQkFMQSxlQVpBLGNBT3FCLGtCQWZSLFdBQ0UsYUFDQSxtREFjaUIsdUJBYlgsNEZBY3JCLENBYkEiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxuZXh0LWxhdGVzdFxcY29tcG9uZW50c1xcYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExvZ28gZnJvbSAnLi9pY29ucy96ZWl0LXdoaXRlLWZ1bGwtbG9nbyc7XG5cbmltcG9ydCBIZWFkaW5ncyBmcm9tIFwiLi9kZXNpZ25MYXlvdXRzL2hlYWRpbmdzXCI7XG5cbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxuICAgIDxkaXY+XG4gICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgIDxIZWFkaW5nc1xuICAgICAgICAgIFRhZz1cImgxXCJcbiAgICAgICAgICB0ZXh0PVwiRGlzY292ZXIgYSBwbGFjZSB5b3UnbGwgbG92ZSB0byBsaXZlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXItaGVhZGluZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy50cnVsaWEuY29tL2phdmFzY3JpcHQvbW9hbmEvL19uZXh0L3N0YXRpYy9hc3NldHMvaGlEcGlFeHRyYUxhcmdlLWUzZDU2YzYzMzdjOTk0YjQ5ZDViNDBjZGM3ZGY1YmQ3LmpwZ1wiKTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBoZWlnaHQ6IDU4MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyLWhlYWRpbmd7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pbm5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgLm1vYmlsZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyOyJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\next-latest\\\\components\\\\banner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\container.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Container(_ref) {
  let {
    center,
    vCenter,
    dark,
    gray,
    wide,
    small,
    padding,
    overflow,
    minHeight,
    dotBackground,
    children,
    mobileStyle,
    divider
  } = _ref,
      props = _objectWithoutProperties(_ref, ["center", "vCenter", "dark", "gray", "wide", "small", "padding", "overflow", "minHeight", "dotBackground", "children", "mobileStyle", "divider"]);

  return __jsx("div", _extends({}, props, {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["439667848", [padding ? '6.25rem' : '0', wide ? '0' : '1rem', wide && !small ? '' : 'max-width: 1024px;', small ? 'max-width: 682px;' : '', center ? 'text-align: center;' : '', dark ? 'background: #111;' : '', dark ? 'color: #f1f1f1;' : '', gray ? 'background-color: #fafafa;' : '', gray ? 'border-top: 1px solid #eaeaea;' : '', gray ? 'border-bottom: 1px solid #eaeaea;' : '', wide && !overflow ? 'overflow: hidden;' : '', minHeight ? `min-height: ${minHeight}px;` : '', vCenter ? 'display: flex; align-items: center;' : '', dotBackground ? `
            background-image: radial-gradient(#D7D7D7 1px, transparent 1px), radial-gradient(#d7d7d7 1px, transparent 1px);
            background-position: 0 0, 25px 25px;
            background-size: 50px 50px;
          ` : '', divider ? `border-top: 1px solid rgba(0,0,0,0.1);` : '', padding ? '4rem' : '0', wide ? '0' : '2rem', padding ? '4rem' : '0', wide ? '0' : '1rem', mobileStyle || '']]]) + " " + (props && props.className != null && props.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "439667848",
    dynamic: [padding ? '6.25rem' : '0', wide ? '0' : '1rem', wide && !small ? '' : 'max-width: 1024px;', small ? 'max-width: 682px;' : '', center ? 'text-align: center;' : '', dark ? 'background: #111;' : '', dark ? 'color: #f1f1f1;' : '', gray ? 'background-color: #fafafa;' : '', gray ? 'border-top: 1px solid #eaeaea;' : '', gray ? 'border-bottom: 1px solid #eaeaea;' : '', wide && !overflow ? 'overflow: hidden;' : '', minHeight ? `min-height: ${minHeight}px;` : '', vCenter ? 'display: flex; align-items: center;' : '', dotBackground ? `
            background-image: radial-gradient(#D7D7D7 1px, transparent 1px), radial-gradient(#d7d7d7 1px, transparent 1px);
            background-position: 0 0, 25px 25px;
            background-size: 50px 50px;
          ` : '', divider ? `border-top: 1px solid rgba(0,0,0,0.1);` : '', padding ? '4rem' : '0', wide ? '0' : '2rem', padding ? '4rem' : '0', wide ? '0' : '1rem', mobileStyle || ''],
    __self: this
  }, `.__jsx-style-dynamic-selector{width:100%;margin:0 auto;padding:${padding ? '6.25rem' : '0'} ${wide ? '0' : '1rem'};${wide && !small ? '' : 'max-width: 1024px;'} ${small ? 'max-width: 682px;' : ''} ${center ? 'text-align: center;' : ''} ${dark ? 'background: #111;' : ''} ${dark ? 'color: #f1f1f1;' : ''} ${gray ? 'background-color: #fafafa;' : ''} ${gray ? 'border-top: 1px solid #eaeaea;' : ''} ${gray ? 'border-bottom: 1px solid #eaeaea;' : ''} ${wide && !overflow ? 'overflow: hidden;' : ''} ${minHeight ? `min-height: ${minHeight}px;` : ''} ${vCenter ? 'display: flex; align-items: center;' : ''} ${dotBackground ? `
            background-image: radial-gradient(#D7D7D7 1px, transparent 1px), radial-gradient(#d7d7d7 1px, transparent 1px);
            background-position: 0 0, 25px 25px;
            background-size: 50px 50px;
          ` : ''} ${divider ? `border-top: 1px solid rgba(0,0,0,0.1);` : ''};}.__jsx-style-dynamic-selector:after{content:'';display:table;clear:both;}@media screen and (max-width:960px){div.__jsx-style-dynamic-selector{padding:${padding ? '4rem' : '0'} ${wide ? '0' : '2rem'};}}@media screen and (max-width:640px){div.__jsx-style-dynamic-selector{padding:${padding ? '4rem' : '0'} ${wide ? '0' : '1rem'};${mobileStyle || ''};}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXGNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQlcsQUFHc0IsQUFtQkEsQUFPMkQsQUFNQSxXQS9CeEQsQUFtQkEsY0FsQm9ELEFBbUJ2RCxXQUNiLGdDQUtFLEFBT0QsdUJBbEJGLE9Ba0JHLHVYQWxCRiIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXG5leHQtbGF0ZXN0XFxjb21wb25lbnRzXFxjb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoe1xuICAgIGNlbnRlcixcbiAgICB2Q2VudGVyLFxuICAgIGRhcmssXG4gICAgZ3JheSxcbiAgICB3aWRlLFxuICAgIHNtYWxsLFxuICAgIHBhZGRpbmcsXG4gICAgb3ZlcmZsb3csXG4gICAgbWluSGVpZ2h0LFxuICAgIGRvdEJhY2tncm91bmQsXG4gICAgY2hpbGRyZW4sXG4gICAgbW9iaWxlU3R5bGUsXG4gICAgZGl2aWRlcixcbiAgICAuLi5wcm9wc1xuICB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgey4uLnByb3BzfT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgcGFkZGluZzogJHtwYWRkaW5nID8gJzYuMjVyZW0nIDogJzAnfSAke3dpZGUgPyAnMCcgOiAnMXJlbSd9O1xuICAgICAgICAgICR7d2lkZSAmJiAhc21hbGwgPyAnJyA6ICdtYXgtd2lkdGg6IDEwMjRweDsnfVxuICAgICAgICAgICR7c21hbGwgPyAnbWF4LXdpZHRoOiA2ODJweDsnIDogJyd9XG4gICAgICAgICAgJHtjZW50ZXIgPyAndGV4dC1hbGlnbjogY2VudGVyOycgOiAnJ31cbiAgICAgICAgICAke2RhcmsgPyAnYmFja2dyb3VuZDogIzExMTsnIDogJyd9XG4gICAgICAgICAgJHtkYXJrID8gJ2NvbG9yOiAjZjFmMWYxOycgOiAnJ31cbiAgICAgICAgICAke2dyYXkgPyAnYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsnIDogJyd9XG4gICAgICAgICAgJHtncmF5ID8gJ2JvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhOycgOiAnJ31cbiAgICAgICAgICAke2dyYXkgPyAnYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7JyA6ICcnfVxuICAgICAgICAgICR7d2lkZSAmJiAhb3ZlcmZsb3cgPyAnb3ZlcmZsb3c6IGhpZGRlbjsnIDogJyd9XG4gICAgICAgICAgJHttaW5IZWlnaHQgPyBgbWluLWhlaWdodDogJHttaW5IZWlnaHR9cHg7YCA6ICcnfVxuICAgICAgICAgICR7dkNlbnRlciA/ICdkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOycgOiAnJ31cbiAgICAgICAgICAke1xuICAgICAgICAgICAgZG90QmFja2dyb3VuZFxuICAgICAgICAgICAgICA/IGBcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjRDdEN0Q3IDFweCwgdHJhbnNwYXJlbnQgMXB4KSwgcmFkaWFsLWdyYWRpZW50KCNkN2Q3ZDcgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAyNXB4IDI1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggNTBweDtcbiAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtkaXZpZGVyID8gYGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7YCA6ICcnfVxuICAgICAgICB9XG4gICAgICAgIDphZnRlciB7XG4gICAgICAgICAgLy8gQkZDXG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIHRhYmxldFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAke3BhZGRpbmcgPyAnNHJlbScgOiAnMCd9ICR7d2lkZSA/ICcwJyA6ICcycmVtJ307XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENTUyBvbmx5IG1lZGlhIHF1ZXJ5IGZvciBtb2JpbGVcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgcGFkZGluZzogJHtwYWRkaW5nID8gJzRyZW0nIDogJzAnfSAke3dpZGUgPyAnMCcgOiAnMXJlbSd9O1xuICAgICAgICAgICAgJHttb2JpbGVTdHlsZSB8fCAnJ31cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0iXX0= */
/*@ sourceURL=E:\\reactjs\\office-work\\next-latest\\components\\container.js */`), children);
}

/***/ }),

/***/ "./components/designLayouts/headings.js":
/*!**********************************************!*\
  !*** ./components/designLayouts/headings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\designLayouts\\headings.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  Tag,
  className,
  text
}) => __jsx(Tag, {
  className: className,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 5
  }
}, text));

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
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
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var _hoc_pure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hoc/pure */ "./components/hoc/pure.js");
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_pure__WEBPACK_IMPORTED_MODULE_4__["default"])(() => __jsx(_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
  wide: true,
  gray: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx(_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx("footer", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3205882112",
  __self: undefined
}, ".grid.jsx-3205882112{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-row-gap:2rem;}footer.jsx-3205882112{padding:2rem 0 4rem;min-height:400px;}a.jsx-3205882112,p.jsx-3205882112,.copyright.jsx-3205882112{color:#8c8c8c;}h4.jsx-3205882112 a.jsx-3205882112{color:inherit;}a.jsx-3205882112:hover{color:#111;}.copyright.jsx-3205882112{margin-top:3rem;}.copyright.jsx-3205882112 div.jsx-3205882112{margin-top:0.5rem;}h4.jsx-3205882112{margin-bottom:0.75rem;}p.jsx-3205882112{margin-top:0;margin-bottom:0.25rem;}@media screen and (max-width:700px){.grid.jsx-3205882112{grid-template-columns:1fr 1fr;}h4.jsx-3205882112,p.jsx-3205882112{margin:0;}a.jsx-3205882112{display:block;padding-top:15px;padding-bottom:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXGZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVVyxBQUc0QixBQUtPLEFBTU4sQUFHQSxBQUdILEFBR0ssQUFHRSxBQUdJLEFBR1QsQUFLbUIsQUFJckIsQUFHSyxTQUZoQixFQXJCRixFQWpCd0MsQUE2QmhCLENBbEJ4QixBQUdBLEFBMkJxQixFQXJCckIsRUFHQSxFQWxCbUIsRUFxQm5CLFFBUUUsQ0FRc0IsSUFaeEIsRUF4QkEsY0FMb0IsQUEwQ2xCLGtCQXpDRiIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXG5leHQtbGF0ZXN0XFxjb21wb25lbnRzXFxmb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJztcbmltcG9ydCB3aXRoUHVyZSBmcm9tICcuL2hvYy9wdXJlJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFB1cmUoKCkgPT4gKFxuICA8Q29udGFpbmVyIHdpZGUgZ3JheT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwIDRyZW07XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIHAsXG4gICAgICAgICAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgICAgICAgY29sb3I6ICM4YzhjOGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNCBhIHtcbiAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMxMTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb3B5cmlnaHQgZGl2IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGg0LFxuICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZjVcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3NVwiPkdlbmVyYWwgcmVzb3VyY2VzPC9oND5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2RvY3NcIj5Eb2NzPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGVhcm4vYmFzaWNzL2dldHRpbmctc3RhcnRlZFwiIHByZWZldGNoPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgPGE+TGVhcm48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3djYXNlXCIgcHJlZmV0Y2g9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICA8YT5TaG93Y2FzZTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiIHByZWZldGNoPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgPGE+QmxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnc1XCI+RmVhdHVyZXM8L2g0PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvZmVhdHVyZXMvc2VydmVyLXNpZGUtcmVuZGVyaW5nXCI+U1NSPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvZmVhdHVyZXMvc3RhdGljLWV4cG9ydGluZ1wiPlN0YXRpYyBFeHBvcnRpbmc8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9mZWF0dXJlcy9jc3MtaW4tanNcIj5DU1MtaW4tSlM8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9mZWF0dXJlcy9wcm9ncmVzc2l2ZS13ZWItYXBwc1wiPlBXQTwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3NVwiPk1vcmU8L2g0PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9yZWxlYXNlc1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlbGVhc2VzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RlbGVtZXRyeVwiIHByZWZldGNoPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgPGE+VGVsZW1ldHJ5PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdzVcIj5BYm91dCBaRUlUPC9oND5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3plaXQuY28vb3NzP3V0bV9zb3VyY2U9bmV4dC1zaXRlJnV0bV9tZWRpdW09Zm9vdGVyJnV0bV9jYW1wYWlnbj1uZXh0LXdlYnNpdGVcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBPcGVuIFNvdXJjZSBTb2Z0d2FyZVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vemVpdGhxXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIFR3aXR0ZXJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHQgZjZcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vemVpdC5jbz91dG1fc291cmNlPW5leHQtc2l0ZSZ1dG1fbWVkaXVtPWZvb3RlciZ1dG1fY2FtcGFpZ249bmV4dC13ZWJzaXRlXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJaRUlUXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXY+IENvcHlyaWdodCDCqSB7YCR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWB9IFpFSVQsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Db250YWluZXI+XG4pKTsiXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\next-latest\\\\components\\\\footer.js */"), __jsx("div", {
  className: "jsx-3205882112" + " " + "grid f5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 11
  }
}, __jsx("h4", {
  className: "jsx-3205882112" + " " + "fw5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 13
  }
}, "General resources"), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "/docs",
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 15
  }
}, "Docs")), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 13
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/learn/basics/getting-started",
  prefetch: false,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 15
  }
}, __jsx("a", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 17
  }
}, "Learn"))), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 13
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/showcase",
  prefetch: false,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 15
  }
}, __jsx("a", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 17
  }
}, "Showcase"))), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 13
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/blog",
  prefetch: false,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 15
  }
}, __jsx("a", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 17
  }
}, "Blog")))), __jsx("div", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 11
  }
}, __jsx("h4", {
  className: "jsx-3205882112" + " " + "fw5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 13
  }
}, "Features"), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "/features/server-side-rendering",
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 15
  }
}, "SSR")), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "/features/static-exporting",
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 15
  }
}, "Static Exporting")), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "/features/css-in-js",
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 15
  }
}, "CSS-in-JS")), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "/features/progressive-web-apps",
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 15
  }
}, "PWA"))), __jsx("div", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 11
  }
}, __jsx("h4", {
  className: "jsx-3205882112" + " " + "fw5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 13
  }
}, "More"), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "https://github.com/zeit/next.js",
  rel: "noopener noreferrer",
  target: "_blank",
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 15
  }
}, "GitHub")), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "https://github.com/zeit/next.js/releases",
  rel: "noopener noreferrer",
  target: "_blank",
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 15
  }
}, "Releases")), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 13
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/telemetry",
  prefetch: false,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 15
  }
}, __jsx("a", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 17
  }
}, "Telemetry")))), __jsx("div", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 11
  }
}, __jsx("h4", {
  className: "jsx-3205882112" + " " + "fw5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 13
  }
}, "About ZEIT"), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "https://zeit.co/oss?utm_source=next-site&utm_medium=footer&utm_campaign=next-website",
  rel: "noopener noreferrer",
  target: "_blank",
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 15
  }
}, "Open Source Software")), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "https://github.com/zeit",
  rel: "noopener noreferrer",
  target: "_blank",
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 15
  }
}, "GitHub")), __jsx("p", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "https://twitter.com/zeithq",
  rel: "noopener noreferrer",
  target: "_blank",
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 15
  }
}, "Twitter")))), __jsx("div", {
  className: "jsx-3205882112" + " " + "copyright f6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 9
  }
}, __jsx("a", {
  href: "https://zeit.co?utm_source=next-site&utm_medium=footer&utm_campaign=next-website",
  rel: "noopener noreferrer",
  target: "_blank",
  "aria-label": "ZEIT",
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 11
  }
}), __jsx("div", {
  className: "jsx-3205882112",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 11
  }
}, " Copyright \xA9 ", `${new Date().getFullYear()}`, " ZEIT, Inc. All rights reserved.")))))));

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner */ "./components/banner.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar */ "./components/navbar.js");
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Header = ({
  sticky = true
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    className: "jsx-1673863491" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      sticky
    }) || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })), __jsx(_banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1673863491",
    __self: undefined
  }, "header.jsx-1673863491{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;background:#fff;z-index:1000;border-bottom:1px solid #eaeaea;}header.sticky.jsx-1673863491{position:-webkit-sticky;position:sticky;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHd0IsQUFVRyx3Q0FDVixNQUNSLDRCQVh3Qiw4RUFDTywySEFDViw2RkFDUixXQUNLLGdCQUNILGFBQ21CLGdDQUNsQyIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXG5leHQtbGF0ZXN0XFxjb21wb25lbnRzXFxoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgQmFubmVyIGZyb20gJy4vYmFubmVyJztcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXZiYXInO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBzdGlja3kgPSB0cnVlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y24oeyBzdGlja3kgfSl9PlxuICAgICAgICA8TmF2IC8+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxCYW5uZXIgLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIuc3RpY2t5IHtcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhIZWFkZXIpOyJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\next-latest\\\\components\\\\header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Header));

/***/ }),

/***/ "./components/hoc/pure.js":
/*!********************************!*\
  !*** ./components/hoc/pure.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\hoc\\pure.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (function (Comp) {
  return class extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
      return __jsx(Comp, _extends({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 14
        }
      }));
    }

  };
});

/***/ }),

/***/ "./components/listProperty/index.js":
/*!******************************************!*\
  !*** ./components/listProperty/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container */ "./components/container.js");
/* harmony import */ var _propertyCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyCard */ "./components/listProperty/propertyCard.js");
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\listProperty\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  listing
}) => {
  return __jsx(_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, !!listing && listing.length > 0 && listing.map((prop, i) => __jsx(_propertyCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: prop,
    index: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }))));
});

/***/ }),

/***/ "./components/listProperty/propertyCard.js":
/*!*************************************************!*\
  !*** ./components/listProperty/propertyCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\listProperty\\propertyCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  data,
  index
}) => __jsx("div", {
  key: index,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: `/p/[state]/[city]/[address]`,
  as: `/p/nj/${data.City}/${data.Address}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
}, data.Address))));

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/amp */ "next/amp");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reach_skip_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reach/skip-nav */ "@reach/skip-nav");
/* harmony import */ var _reach_skip_nav__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_reach_skip_nav__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container */ "./components/container.js");
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





 // import NextLogo from './logo';

 // import GitHubLogo from './icons/github';
// import HeaderFeedback from './header-feedback';

function Navbar() {
  const {
    route
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_4__["useAmp"])();
  return __jsx(_container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    center: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_reach_skip_nav__WEBPACK_IMPORTED_MODULE_6__["SkipNavLink"], {
    tabIndex: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("h1", {
    "aria-hidden": "true",
    className: "jsx-3951959841" + " " + "visually-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "Next.js"), __jsx("nav", {
    className: "jsx-3951959841" + " " + "f-reset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3951959841" + " " + "mobile-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-3951959841" + " " + "mobile-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Houseeasy"))), __jsx("div", {
    className: "jsx-3951959841" + " " + "links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-3951959841" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Houseeasy")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("a", {
    title: "Home",
    className: "jsx-3951959841" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()('mute', {
      selected: route.startsWith('/features')
    }) || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/p",
    as: "/p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("a", {
    title: "List property",
    className: "jsx-3951959841" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()('mute', {
      selected: route.startsWith('/list')
    }) || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "List Property")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3951959841",
    __self: this
  }, "nav.jsx-3951959841{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.links.jsx-3951959841{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;z-index:1;}.links.jsx-3951959841 a.jsx-3951959841{-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}.links.jsx-3951959841 a.jsx-3951959841:hover{color:#000;}.links.jsx-3951959841 a.selected.jsx-3951959841{color:#0070f3;font-weight:600;}.links.jsx-3951959841 a.jsx-3951959841:first-child,.links.jsx-3951959841 a.jsx-3951959841:last-child{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.icon.jsx-3951959841,a.icon.jsx-3951959841>div.container{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.icon.jsx-3951959841>div.container{overflow:visible;}.mobile-logo.jsx-3951959841,.mobile-top.jsx-3951959841{display:none;}.header-feedback.jsx-3951959841{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}@media (max-width:640px){.mobile-logo.jsx-3951959841{display:block;}nav.jsx-3951959841{height:unset;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:1rem 0;}nav.jsx-3951959841 .links.jsx-3951959841 .logo.jsx-3951959841,nav.jsx-3951959841 .links.jsx-3951959841 .icon.jsx-3951959841{display:none;}nav.jsx-3951959841 .links.jsx-3951959841 a.jsx-3951959841{font-size:14px;}.mobile-top.jsx-3951959841{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:0.5rem;}.mobile-top.jsx-3951959841>.icons.jsx-3951959841{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.mobile-top.jsx-3951959841>.icons.jsx-3951959841 a.jsx-3951959841:nth-child(2){margin-left:2rem;}}@media (max-width:950px){.header-feedback.jsx-3951959841{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXG5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RGtCLEFBRzZCLEFBT1AsQUFPVSxBQUlWLEFBR0csQUFLRCxBQUtPLEFBSUgsQUFJSixBQUdPLEFBS0osQUFHRCxBQVFBLEFBR0UsQUFHSixBQU9FLEFBSUksQUFLSixXQXhFRixBQVdmLEFBOENpQixFQXpCakIsQUFXMEIsQUFReEIsQUFzQkEsQ0EzRGdCLEFBMEJoQixDQWNBLEVBMUJGLEFBd0NFLENBM0VPLFlBc0JULG9CQVI2QixDQWJmLFlBQ0MsV0F3QmYsQUE2Q3VCLFdBL0RGLEFBeURFLE1BZEksV0FwQkYsQUFXekIsVUEzQkEseUJBWnFCLDhCQXFFbkIsV0EvRDhCLEFBeURFLHNCQWRILENBcEIvQiw2QkE1QkEsK0RBTVksQUF5RGEsVUF4RHpCLEVBMENtQixTQWVqQixNQWRBIiwiZmlsZSI6IkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXG5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlQW1wIH0gZnJvbSAnbmV4dC9hbXAnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgU2tpcE5hdkxpbmsgfSBmcm9tICdAcmVhY2gvc2tpcC1uYXYnO1xuXG4vLyBpbXBvcnQgTmV4dExvZ28gZnJvbSAnLi9sb2dvJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xuXG4vLyBpbXBvcnQgR2l0SHViTG9nbyBmcm9tICcuL2ljb25zL2dpdGh1Yic7XG4vLyBpbXBvcnQgSGVhZGVyRmVlZGJhY2sgZnJvbSAnLi9oZWFkZXItZmVlZGJhY2snO1xuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IHsgcm91dGUgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpc0FtcCA9IHVzZUFtcCgpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjZW50ZXI+XG4gICAgICA8U2tpcE5hdkxpbmsgdGFiSW5kZXg9XCIwXCIgLz5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgTmV4dC5qc1xuICAgICAgPC9oMT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZi1yZXNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS10b3BcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibW9iaWxlLWxvZ29cIj5cbiAgICAgICAgICAgICAgSG91c2VlYXN5XG4gICAgICAgICAgICAgIHsvKiA8TmV4dExvZ28gLz4gKi99XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgSG91c2VlYXN5XG4gICAgICAgICAgICAgIHsvKiA8TmV4dExvZ28gLz4gKi99XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKCdtdXRlJywge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiByb3V0ZS5zdGFydHNXaXRoKCcvZmVhdHVyZXMnKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJIb21lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3BcIiBhcz1cIi9wXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKCdtdXRlJywge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiByb3V0ZS5zdGFydHNXaXRoKCcvbGlzdCcpXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB0aXRsZT1cIkxpc3QgcHJvcGVydHlcIlxuICAgICAgICAgICAgPkxpc3QgUHJvcGVydHk8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubGlua3Mge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICAubGlua3MgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICAubGlua3MgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmtzIGEuc2VsZWN0ZWQge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmtzIGE6Zmlyc3QtY2hpbGQsXG4gICAgICAgIC5saW5rcyBhOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgYS5pY29uLFxuICAgICAgICBhLmljb24gPiA6Z2xvYmFsKGRpdi5jb250YWluZXIpIHtcbiAgICAgICAgICAvKiBSZW1vdmUgYWRkaXRpb25hbCBzcGFjZSBmcm9tIFNWRyAqL1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGEuaWNvbiA+IDpnbG9iYWwoZGl2LmNvbnRhaW5lcikge1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgIC5tb2JpbGUtbG9nbyxcbiAgICAgICAgLm1vYmlsZS10b3Age1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlci1mZWVkYmFjayB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLyogTW9iaWxlICovXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgIC5tb2JpbGUtbG9nbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGhlaWdodDogdW5zZXQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5hdiAubGlua3MgLmxvZ28sXG4gICAgICAgICAgbmF2IC5saW5rcyAuaWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuYXYgLmxpbmtzIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLXRvcCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLXRvcCA+IC5pY29ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS10b3AgPiAuaWNvbnMgYTpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAgICAgICAgIC5oZWFkZXItZmVlZGJhY2sge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhOYXZiYXIpOyJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\next-latest\\\\components\\\\navbar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Navbar));

/***/ }),

/***/ "./components/page-container.js":
/*!**************************************!*\
  !*** ./components/page-container.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageContainer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/analytics */ "./lib/analytics.js");
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\page-container.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeComplete', url => {
  Object(_lib_analytics__WEBPACK_IMPORTED_MODULE_4__["trackPageview"])(url);
});
function PageContainer({
  title,
  description,
  children
}) {
  return __jsx("div", {
    className: "jsx-2598554956",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2598554956",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, title || 'Houseasy - The RealEstate site'), description !== false && __jsx("meta", {
    name: "description",
    content: description || 'Houseasy - The RealEstate site',
    className: "jsx-2598554956",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  })), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2598554956",
    __self: this
  }, "html{line-height:1.15;-webkit-text-size-adjust:100%;height:100%;box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body{position:relative;min-height:100%;margin:0;line-height:1.65;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;font-size:16px;font-weight:400;min-width:320px;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}html,body{background-color:#fff;color:#111;}::selection{background-color:#0070f3;color:#fff;}[role='grid']:focus{outline:none;}svg{text-rendering:optimizeLegibility;}h1,h2,h3{margin:0;}a{color:#0074de;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}a:hover{color:#68b5fb;}code{font-size:0.9em;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono, Bitstream Vera Sans Mono,Courier New,monospace,serif;}code:before,code:after{content:'\\`';}pre code:before,pre code:after{content:none;}.demo-footer .note code{background:rgba(0,0,0,0.2);padding:0.2rem;margin:0 0.1rem;border-radius:2px;}iframe{width:100%;height:100%;border:none;}.f-reset{font-size:1rem;}.f0{font-size:1.802032470703125em;}.f1{font-size:1.601806640625em;}.f2{font-size:1.423828125em;}.f3{font-size:1.265625em;}.f4{font-size:1.125em;}.f5{font-size:0.8888888888888888em;}.f6{font-size:0.7901234567901234em;}.fw1{font-weight:100;}.fw2{font-weight:200;}.fw3{font-weight:300;}.fw4{font-weight:400;}.fw5{font-weight:500;}.fw6{font-weight:600;}.fw7{font-weight:700;}.fw8{font-weight:800;}.fw9{font-weight:900;}.subtitle{color:#696969;}.mute{color:#696969;}.tc{text-align:center;}.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 -1.5rem;}.column{-webkit-flex:1;-ms-flex:1;flex:1;padding:0 1.5rem;}.display-none{display:none;}.display-mobile{display:none;}.display-tablet{display:none;}@media screen and (max-width:640px){.display-mobile{display:unset;}.hide-mobile{display:none;}}@media screen and (max-width:960px){.display-tablet{display:unset;}.hide-tablet{display:none;}}a[role='button']{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.no-tap-highlight,a{-webkit-touch-callout:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent;}.no-tap-callout{-webkit-touch-callout:none;}.no-drag{-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-user-select:none;-webkit-user-drag:none;-webkit-user-select:none;-ms-user-select:none;}.visually-hidden{-webkit-clip:rect(0 0 0 0);clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;overflow:hidden;position:absolute;}code[class*='language-'],pre[class*='language-']{color:#f8f8f2;text-shadow:0 1px rgba(0,0,0,0.3);direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#999;}.token.punctuation{color:#c5c8c6;}.namespace{opacity:0.7;}.token.property,.token.keyword,.token.tag{color:#96cbfe;}.token.class-name{color:#ffffb6;}.token.boolean,.token.constant{color:#99cc99;}.token.symbol,.token.deleted{color:#f92672;}.token.number{color:#ff73fd;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#a8ff60;}.token.variable{color:#c6c5fe;}.token.operator{color:#ededed;}.token.entity{color:#ffffb6;cursor:help;}.token.url{color:#96cbfe;}.language-css .token.string,.style .token.string{color:#87c38a;}.token.atrule,.token.attr-value{color:#f9ee98;}.token.function{color:#dad085;}.token.regex{color:#e9c062;}.token.important{color:#fd971f;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}svg{shape-rendering:crispEdges;}svg path,svg circle{shape-rendering:geometricprecision;}[data-reach-skip-link]{border:0;-webkit-clip:rect(0 0 0 0);clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;overflow:hidden;position:absolute;}[data-reach-skip-link]:focus{padding:1rem;position:fixed;top:10px;left:10px;background:white;z-index:1;width:auto;height:auto;-webkit-clip:auto;clip:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXHBhZ2UtY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCUyxBQUc4QixBQVFFLEFBR0QsQUFrQkksQUFJRyxBQUlaLEFBR3FCLEFBS3pCLEFBR0ssQUFLQSxBQUdFLEFBTUgsQUFJQSxBQUdpQixBQU1uQixBQUtJLEFBR2UsQUFHSCxBQUdILEFBR0gsQUFHSCxBQUdhLEFBR0EsQUFHZixBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRixBQUdBLEFBR0ksQUFHTCxBQUtOLEFBSU0sQUFHQSxBQUdBLEFBSUcsQUFHRCxBQUtDLEFBR0QsQUFJVSxBQVFFLEFBTUEsQUFHWixBQVFJLEFBV0wsQUFlSCxBQUdHLEFBR0YsQUFLRSxBQUdBLEFBSUEsQUFJQSxBQUdBLEFBUUEsQUFHQSxBQUdBLEFBR0EsQUFJQSxBQUlBLEFBSUEsQUFHQSxBQUdBLEFBR0EsQUFJRyxBQUdDLEFBR1MsQUFJUSxBQUcxQixBQVVJLFNBN1FmLEFBb1FxQixFQXRPUCxBQXNKZCxDQU1BLENBbE1BLEFBeUJBLEFBSUEsQUFtRkEsQUFHQSxBQUdBLEFBT0UsQUFRQSxBQWlKZSxDQTNRTSxBQUt2QixBQThFQSxBQUdBLEFBeUJFLEFBUUEsQUEyQ3FDLEFBa0J2QyxBQVFBLEFBR0EsQUFJQSxBQUlBLEFBR0EsQUFRQSxBQUdBLEFBR0EsQUFHYyxBQUlkLEFBSUEsQUFJQSxBQUdBLEFBR0EsQUFHQSxDQWhOQSxDQXZCMkQsQUErQzNELEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxDQWhJZ0MsQUFvU2hDLENBelJrQixBQW9GbEIsQUEwQ0EsQUE4SkEsQ0EvUkEsRUFvRkEsQ0EvRGEsQ0ErQ0MsQ0FhZCxDQXhEYSxBQTZJVyxDQThGeEIsQ0F2TWlCLEFBaUJqQixBQWdHeUIsQUFNekIsQUE4R0EsQ0FrQlcsRUF6T1gsQ0FlQSxBQUdBLEVBdkVBLEFBbUhtQixDQXJJUixBQTRCWCxDQXFDQSxBQWlPQSxDQTVRQSxDQTJSWSxLQXZQTSxDQXpEQyxHQTBMTixDQXRNQyxBQThLUyxBQStJSixDQTNHSCxFQWpFaEIsQUFxQ3FCLEtBMkhSLEVBMUdELENBaklRLENBckVJLENBYWdELEVBcU10RCxFQW5LVyxBQThRakIsRUFaQSxDQTFHRSxDQXpCWSxDQVFnQixLQTVDckIsQUFvTFIsRUF4UGIsQUE0T2MsQ0FySEssQ0FzQkQsQ0FYTixFQXZNWixJQThUYyxHQVpGLENBMUdELEdBMUJRLEVBcUNHLEdBNEdWLENBdEhNLEFBMEdBLFdBN0hsQixLQW9Cb0IsQUFVQSxBQWdHQSxXQVlwQixDQWpSQSxNQTRKQSxBQVVrQixBQWdHbEIsV0E5UEEsS0ErSmEsV0FDRSxHQTFCUyxLQW5ETCxVQXFDbkIsT0FwQ0EsQUFtRHlCLHVCQUNFLEVBbExWLGVBQ0MsSUEwTWxCLElBeEJ1QixRQWpMTCxhQWtMbEIsR0FqTGdCLGNBQ2UsNkJBQ0ssa0NBQ0MsbUNBQ0Qsa0NBQ1gsNkdBQ3pCIiwiZmlsZSI6IkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcbmV4dC1sYXRlc3RcXGNvbXBvbmVudHNcXHBhZ2UtY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdHJhY2tQYWdldmlldyB9IGZyb20gJy4uL2xpYi9hbmFseXRpY3MnO1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgdXJsID0+IHtcbiAgdHJhY2tQYWdldmlldyh1cmwpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VDb250YWluZXIoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGUgfHwgJ0hvdXNlYXN5IC0gVGhlIFJlYWxFc3RhdGUgc2l0ZSd9PC90aXRsZT5cbiAgICAgICAge2Rlc2NyaXB0aW9uICE9PSBmYWxzZSAmJiAoXG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjb250ZW50PXtkZXNjcmlwdGlvbiB8fCAnSG91c2Vhc3kgLSBUaGUgUmVhbEVzdGF0ZSBzaXRlJ31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9IZWFkPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgICosXG4gICAgICAgICAgKjpiZWZvcmUsXG4gICAgICAgICAgKjphZnRlciB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS42NTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsXG4gICAgICAgICAgICAgICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6OnNlbGVjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIFtyb2xlPSdncmlkJ106Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxLFxuICAgICAgICAgIGgyLFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwNzRkZTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzY4YjVmYjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sIERlamFWdSBTYW5zIE1vbm8sXG4gICAgICAgICAgICAgIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZSwgc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvZGU6YmVmb3JlLFxuICAgICAgICAgIGNvZGU6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJ1xcYCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHByZSBjb2RlOmJlZm9yZSxcbiAgICAgICAgICBwcmUgY29kZTphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVtby1mb290ZXIgLm5vdGUgY29kZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjJyZW07XG4gICAgICAgICAgICBtYXJnaW46IDAgMC4xcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZnJhbWUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mLXJlc2V0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmYwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44MDIwMzI0NzA3MDMxMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmYxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42MDE4MDY2NDA2MjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmYyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40MjM4MjgxMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmYzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNjU2MjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmY0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmY1IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ODg4ODg4ODg4ODg4ODg4ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mNiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzkwMTIzNDU2NzkwMTIzNGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZncxIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mdzIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZ3MyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnc0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mdzUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZ3NiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnc3IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mdzgge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZ3OSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICM2OTY5Njk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tdXRlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjk2OTY5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGMge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC0xLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGlzcGxheS1ub25lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaXNwbGF5LW1vYmlsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGlzcGxheS10YWJsZXQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgIC5kaXNwbGF5LW1vYmlsZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhpZGUtbW9iaWxlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICAgICAgICAgIC5kaXNwbGF5LXRhYmxldCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhpZGUtdGFibGV0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYVtyb2xlPSdidXR0b24nXSB7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm8tdGFwLWhpZ2hsaWdodCxcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xuICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uby10YXAtY2FsbG91dCB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uby1kcmFnIHtcbiAgICAgICAgICAgIHVzZXItZHJhZzogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZpc3VhbGx5LWhpZGRlbiB7XG4gICAgICAgICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAtMXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXSxcbiAgICAgICAgICBwcmVbY2xhc3MqPSdsYW5ndWFnZS0nXSB7XG4gICAgICAgICAgICBjb2xvcjogI2Y4ZjhmMjtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgICAgICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgdGFiLXNpemU6IDQ7XG4gICAgICAgICAgICBoeXBoZW5zOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4uY29tbWVudCxcbiAgICAgICAgICAudG9rZW4ucHJvbG9nLFxuICAgICAgICAgIC50b2tlbi5kb2N0eXBlLFxuICAgICAgICAgIC50b2tlbi5jZGF0YSB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLnB1bmN0dWF0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYzVjOGM2O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZXNwYWNlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLnByb3BlcnR5LFxuICAgICAgICAgIC50b2tlbi5rZXl3b3JkLFxuICAgICAgICAgIC50b2tlbi50YWcge1xuICAgICAgICAgICAgY29sb3I6ICM5NmNiZmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5jbGFzcy1uYW1lIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmI2O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4uYm9vbGVhbixcbiAgICAgICAgICAudG9rZW4uY29uc3RhbnQge1xuICAgICAgICAgICAgY29sb3I6ICM5OWNjOTk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5zeW1ib2wsXG4gICAgICAgICAgLnRva2VuLmRlbGV0ZWQge1xuICAgICAgICAgICAgY29sb3I6ICNmOTI2NzI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5udW1iZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZjczZmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5zZWxlY3RvcixcbiAgICAgICAgICAudG9rZW4uYXR0ci1uYW1lLFxuICAgICAgICAgIC50b2tlbi5zdHJpbmcsXG4gICAgICAgICAgLnRva2VuLmNoYXIsXG4gICAgICAgICAgLnRva2VuLmJ1aWx0aW4sXG4gICAgICAgICAgLnRva2VuLmluc2VydGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYThmZjYwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4udmFyaWFibGUge1xuICAgICAgICAgICAgY29sb3I6ICNjNmM1ZmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5vcGVyYXRvciB7XG4gICAgICAgICAgICBjb2xvcjogI2VkZWRlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLmVudGl0eSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZiNjtcbiAgICAgICAgICAgIGN1cnNvcjogaGVscDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLnVybCB7XG4gICAgICAgICAgICBjb2xvcjogIzk2Y2JmZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nLFxuICAgICAgICAgIC5zdHlsZSAudG9rZW4uc3RyaW5nIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODdjMzhhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4uYXRydWxlLFxuICAgICAgICAgIC50b2tlbi5hdHRyLXZhbHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjllZTk4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4uZnVuY3Rpb24ge1xuICAgICAgICAgICAgY29sb3I6ICNkYWQwODU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5yZWdleCB7XG4gICAgICAgICAgICBjb2xvcjogI2U5YzA2MjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLmltcG9ydGFudCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZkOTcxZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLmltcG9ydGFudCxcbiAgICAgICAgICAudG9rZW4uYm9sZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLml0YWxpYyB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyBwYXRoLFxuICAgICAgICAgIHN2ZyBjaXJjbGUge1xuICAgICAgICAgICAgc2hhcGUtcmVuZGVyaW5nOiBnZW9tZXRyaWNwcmVjaXNpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIFtkYXRhLXJlYWNoLXNraXAtbGlua10ge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBbZGF0YS1yZWFjaC1za2lwLWxpbmtdOmZvY3VzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBjbGlwOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59Il19 */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\next-latest\\\\components\\\\page-container.js */"));
}

/***/ }),

/***/ "./components/page.js":
/*!****************************!*\
  !*** ./components/page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-container */ "./components/page-container.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/header.js");
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\page.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Page({
  title,
  description,
  sticky,
  isOldDocs,
  children
}) {
  return __jsx(_page_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    description: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sticky: sticky,
    isOldDocs: isOldDocs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children);
}

/***/ }),

/***/ "./components/social-meta.js":
/*!***********************************!*\
  !*** ./components/social-meta.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\components\\social-meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  description,
  image,
  url,
  keywords
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("meta", {
  name: "twitter:site",
  content: "@zeithq",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "twitter:card",
  content: image ? 'summary_large_image' : 'summary',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}), title && __jsx("meta", {
  name: "og:title",
  content: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 19
  }
}), url && __jsx("meta", {
  name: "og:url",
  content: url,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }
}), description && __jsx("meta", {
  name: "description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}), description && __jsx("meta", {
  name: "og:description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 25
  }
}), image && __jsx("meta", {
  name: "og:image",
  content: `https://nextjs.org${image}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 19
  }
}), keywords && __jsx("meta", {
  name: "keywords",
  content: keywords,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 22
  }
})));

/***/ }),

/***/ "./lib/analytics.js":
/*!**************************!*\
  !*** ./lib/analytics.js ***!
  \**************************/
/*! exports provided: GA_TRACKING_ID, trackPageview, trackEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_TRACKING_ID", function() { return GA_TRACKING_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackPageview", function() { return trackPageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackEvent", function() { return trackEvent; });
const GA_TRACKING_ID = 'UA-117491914-2';
const trackPageview = url => {
  try {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url
    });
  } catch (err) {
    console.error('Failed sending metrics', err);
  }
};
const trackEvent = ({
  action,
  category,
  label,
  value
}) => {
  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value
    });
  } catch (err) {
    console.error('Failed sending metrics', err);
  }
};

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/amp */ "next/amp");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/home */ "./components/Home/home.js");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page */ "./components/page.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_listProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/listProperty */ "./components/listProperty/index.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_globalFunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/globalFunc */ "./shared/globalFunc.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_social_meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/social-meta */ "./components/social-meta.js");
/* harmony import */ var _reach_skip_nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reach/skip-nav */ "@reach/skip-nav");
/* harmony import */ var _reach_skip_nav__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_reach_skip_nav__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "E:\\reactjs\\office-work\\next-latest\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










/* harmony default export */ __webpack_exports__["default"] = (props => {
  const isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_1__["useAmp"])();
  return __jsx(_components_Home_home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 1
    }
  }) // <Page title="Houseeasy - The Real estate site">
  //   <SocialMeta
  //     image="/static/twitter-cards/home.jpg"
  //     title="Houseeasy - The Real estate site"
  //     url="https://houseasy.co"
  //     description="Production grade React applications that scale. The world’s leading companies use Next.js to build static and dynamic websites and web applications."
  //   />
  //   <SkipNavContent />
  //   <Footer />
  // </Page>
  ;
});

/***/ }),

/***/ "./shared/globalFunc.js":
/*!******************************!*\
  !*** ./shared/globalFunc.js ***!
  \******************************/
/*! exports provided: fetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetcher", function() { return fetcher; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);

const fetcher = url => node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(r => r).catch(err => err);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\reactjs\office-work\next-latest\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@reach/skip-nav":
/*!**********************************!*\
  !*** external "@reach/skip-nav" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reach/skip-nav");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/amp":
/*!***************************!*\
  !*** external "next/amp" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/amp");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

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
//# sourceMappingURL=index.js.map