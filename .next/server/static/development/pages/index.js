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

/***/ "./Common/About/Company.js":
/*!*********************************!*\
  !*** ./Common/About/Company.js ***!
  \*********************************/
/*! exports provided: Company, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\Common\\About\\Company.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Company extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx("link", {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      className: "jsx-472927675",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      className: "jsx-472927675",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "jsx-472927675" + " " + "outer_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-472927675" + " " + "inner_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-472927675" + " " + "top_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, "READ MORE ABOUT US"), __jsx("div", {
      className: "jsx-472927675" + " " + "top_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, "Know more about our company"), __jsx("div", {
      className: "jsx-472927675" + " " + "inner_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "jsx-472927675",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, " Our people are our assets."), __jsx("p", {
      className: "jsx-472927675",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }, "Detailing, scoping not just for current but for future helps us plan", __jsx("br", {
      className: "jsx-472927675",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 97
      }
    }), "and build scalable solutions."), __jsx("p", {
      className: "jsx-472927675",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }
    }, " Respecting every person we work with, our commitment to our", __jsx("br", {
      className: "jsx-472927675",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 88
      }
    }), "work and to the society."), __jsx("p", {
      className: "jsx-472927675",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 25
      }
    }, " We face new challenges every day but our commitment remains", __jsx("br", {
      className: "jsx-472927675",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 88
      }
    }), "unchanged, and we continue to take determined steps into the ", __jsx("br", {
      className: "jsx-472927675",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 86
      }
    }), "future with every individual associated with us.")), __jsx("div", {
      className: "jsx-472927675" + " " + "button_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-472927675" + " " + "button_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "jsx-472927675",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "jsx-472927675" + " " + "fas fa-arrow-down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 27
      }
    })), " DownloadWhitepaper")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "472927675",
      __self: this
    }, ".inner_wrapper.jsx-472927675{position:absolute;width:987px;height:427px;left:111px;top:4146px;}.top_text.jsx-472927675{position:absolute;width:208px;height:21px;left:111px;top:4146px;font-family:Roboto;font-style:normal;font-weight:900;font-size:18px;line-height:21px;color:#184A88;}.top_header.jsx-472927675{position:absolute;width:384px;height:120px;left:111px;top:4181px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#333333;}.inner_text.jsx-472927675{position:absolute;width:513px;height:247px;left:111px;top:4326px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#333333;}.button_wrapper.jsx-472927675{position:absolute;width:254px;height:50px;left:844px;top:4503px;background:#184A88;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.button_text.jsx-472927675{position:absolute;width:157px;height:19px;left:902px;top:4518px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#FFFFFF;}.button_tag.jsx-472927675{position:absolute;left:46.09%;right:46.09%;top:0%;bottom:21.48%;background:#FFFFFF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXENvbW1vblxcQWJvdXRcXENvbXBhbnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUM0QixBQUcyQyxBQVFBLEFBYUEsQUFhQSxBQWNBLEFBV0EsQUFpQkEsa0JBM0VOLEFBUUEsQUFhQSxBQWFBLEFBY0EsQUFXQSxBQWlCQSxZQTNFQyxBQVFELEFBYUMsQUFhQSxBQWNELEFBV0EsQUFpQkMsWUFuRUYsQUF3Q0EsQUFXQSxDQTNEQSxBQXFCQSxBQWFBLEFBMENKLE9BQ08sR0FwRUgsQUF3Q0EsQUFXQSxDQTNEQSxBQXFCQSxBQWFBLFVBekJRLEFBd0NBLEFBV0EsQUFpQkEsQ0EzRXZCLEFBb0J1QixBQWFBLGtCQXpCRCxBQXdDTyxBQVdQLEFBaUJ0QixDQXZEc0IsQUFhQSxpQkF6QkYsQUFtREcsQ0F0Q0EsQUFhSCxNQWNNLFNBdkNQLENBMEJBLEVBeUJBLENBdENBLFNBMkJHLEVBdkNELENBMEJBLEVBeUJBLENBdENBLFlBMkJyQixDQXZDa0IsQ0EwQkEsRUF5QkQsQ0F0Q0MsVUFabEIsQ0EyQkEsR0FkQSwyREFzQ3VCLDZGQUNELGtCQUNKLGNBRWxCIiwiZmlsZSI6IkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXENvbW1vblxcQWJvdXRcXENvbXBhbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wYW55IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTIuMC9jc3MvYWxsLmNzc1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUkVBRCBNT1JFIEFCT1VUIFVTXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BfaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEtub3cgbW9yZSBhYm91dCBvdXIgY29tcGFueVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gT3VyIHBlb3BsZSBhcmUgb3VyIGFzc2V0cy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsaW5nLCBzY29waW5nIG5vdCBqdXN0IGZvciBjdXJyZW50IGJ1dCBmb3IgZnV0dXJlIGhlbHBzIHVzIHBsYW48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIGFuZCBidWlsZCBzY2FsYWJsZSBzb2x1dGlvbnMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gUmVzcGVjdGluZyBldmVyeSBwZXJzb24gd2Ugd29yayB3aXRoLCBvdXIgY29tbWl0bWVudCB0byBvdXI8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICB3b3JrIGFuZCB0byB0aGUgc29jaWV0eS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBXZSBmYWNlIG5ldyBjaGFsbGVuZ2VzIGV2ZXJ5IGRheSBidXQgb3VyIGNvbW1pdG1lbnQgcmVtYWluczxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmNoYW5nZWQsIGFuZCB3ZSBjb250aW51ZSB0byB0YWtlIGRldGVybWluZWQgc3RlcHMgaW50byB0aGUgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1dHVyZSB3aXRoIGV2ZXJ5IGluZGl2aWR1YWwgYXNzb2NpYXRlZCB3aXRoIHVzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25fd3JhcHBlclwiPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1kb3duXCI+PC9pPjwvc3Bhbj4gRG93bmxvYWRXaGl0ZXBhcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5pbm5lcl93cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5ODdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDE0NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRvcF90ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0MTQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50b3BfaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzODRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDE4MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW5uZXJfdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQ3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDExMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQzMjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5idXR0b25fd3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjU0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogODQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDUwM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5idXR0b25fdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTU3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogOTAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDUxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnV0dG9uX3RhZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0Ni4wOSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0Ni4wOSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMjEuNDglO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBhbnlcclxuIl19 */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\Common\\\\About\\\\Company.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Company);

/***/ }),

/***/ "./Common/About/Helpus.js":
/*!********************************!*\
  !*** ./Common/About/Helpus.js ***!
  \********************************/
/*! exports provided: Helpus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpus", function() { return Helpus; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\Common\\About\\Helpus.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Helpus extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-2556467046" + " " + "image_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "image_left_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "image_left_head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, "We Help You Grow Your  Business"), __jsx("div", {
      className: "jsx-2556467046" + " " + "image_left_head_bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, "Why are we in business?"), __jsx("div", {
      className: "jsx-2556467046" + " " + "image_left_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "jsx-2556467046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }
    }, " At Spineor, we think the website or mobile", __jsx("br", {
      className: "jsx-2556467046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 62
      }
    }), "application of your company is your brand and", __jsx("br", {
      className: "jsx-2556467046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 63
      }
    }), "your brand is vital for the results of your company.", __jsx("br", {
      className: "jsx-2556467046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 71
      }
    }), "Your website / app is a showcase of your ", __jsx("br", {
      className: "jsx-2556467046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 61
      }
    }), "company to your clients, whether you're looking to ", __jsx("br", {
      className: "jsx-2556467046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 71
      }
    }), "enter eCommerce, want to offer your restaurant", __jsx("br", {
      className: "jsx-2556467046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 67
      }
    }), "some additional panache on the internet, or have", __jsx("br", {
      className: "jsx-2556467046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 70
      }
    }), "the next excellent mobile app concept."), __jsx("p", {
      className: "jsx-2556467046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 24
      }
    }, "Building websites and mobile apps is our passion.", __jsx("br", {
      className: "jsx-2556467046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 72
      }
    }), "Helping people to grow their businesses is our", __jsx("br", {
      className: "jsx-2556467046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 70
      }
    }), "dream.")), __jsx("div", {
      className: "jsx-2556467046" + " " + "first_button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-2556467046" + " " + "first_button_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "first_button_inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, "Delivery on Time")), __jsx("div", {
      className: "jsx-2556467046" + " " + "second_button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-2556467046" + " " + "second_button_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "second_button_inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, "Clear Communications")), __jsx("div", {
      className: "jsx-2556467046" + " " + "third_button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-2556467046" + " " + "third_button_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "third_button_inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, "Upfront")), __jsx("div", {
      className: "jsx-2556467046" + " " + "fourth_button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-2556467046" + " " + "fourth_button_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "fourth_button_inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, "Innovative")), __jsx("div", {
      className: "jsx-2556467046" + " " + "fifth_button_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "fifth_button_inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, "Reliability"), __jsx("div", {
      className: "jsx-2556467046" + " " + "line3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "line8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "line7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "line10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "line9",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "line13",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2556467046" + " " + "testing",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, "Testing & Launch"), __jsx("div", {
      className: "jsx-2556467046" + " " + "maintain",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, "MAINTENANCE & ONGOING SUPPORT"), __jsx("div", {
      className: "jsx-2556467046" + " " + "strategy",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, "STRATEGY"), __jsx("div", {
      className: "jsx-2556467046" + " " + "design",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, "DESIGN"), __jsx("div", {
      className: "jsx-2556467046" + " " + "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, "CONTENT CREATION"), __jsx("div", {
      className: "jsx-2556467046" + " " + "devop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, "DEVELOPMENT"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2556467046",
      __self: this
    }, ".image_wrapper.jsx-2556467046{position:absolute;width:1299px;height:996px;left:1px;top:2918px;background-image:url('../resourses/images/img1.jpg');background-color:'grey';-webkit-transform:matrix(-1,0,0,1,0,0);-ms-transform:matrix(-1,0,0,1,0,0);transform:matrix(-1,0,0,1,0,0);border:2px solid black;}.image_left_wrapper.jsx-2556467046{position:absolute;width:617px;height:806px;left:34px;top:3140px;background:#184A88;}.image_left_head.jsx-2556467046{position:absolute;width:541px;height:110px;left:68px;top:3206px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:rgba(255,255,255,0.9);}.image_left_head_bottom.jsx-2556467046{position:absolute;width:200px;height:21px;left:74px;top:3333px;font-family:Roboto;font-style:normal;font-weight:900;font-size:18px;line-height:21px;color:#FFFFFF;}.image_left_text.jsx-2556467046{position:absolute;width:525.23px;height:308.1px;left:68px;top:3395px;font-family:Roboto;font-style:normal;font-weight:300;font-size:24px;line-height:28px;color:#FFFFFF;}.first_button_wrapper.jsx-2556467046{position:absolute;width:181px;height:42px;left:64px;top:3771px;background:#87BBE5;border:1px solid #184A88;box-sizing:border-box;border-radius:33px;}.first_button_inner.jsx-2556467046{position:absolute;width:118px;height:19px;left:96px;top:3783px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}.second_button_wrapper.jsx-2556467046{position:absolute;width:226px;height:42px;left:264px;top:3771px;background:#87BBE5;border:1px solid #184A88;box-sizing:border-box;border-radius:33px;}.second_button_inner.jsx-2556467046{position:absolute;width:163px;height:19px;left:296px;top:3783px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}.third_button_wrapper.jsx-2556467046{position:absolute;width:118px;height:42px;left:64px;top:3823px;background:#87BBE5;border:1px solid #184A88;box-sizing:border-box;border-radius:33px;}.third_button_inner.jsx-2556467046{position:absolute;width:54px;height:19px;left:96px;top:3835px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}.fourth_button_wrapper.jsx-2556467046{position:absolute;width:140px;height:42px;left:203px;top:3823px;background:#87BBE5;border:1px solid #184A88;box-sizing:border-box;border-radius:33px;}.fourth_button_inner.jsx-2556467046{position:absolute;width:73px;height:19px;left:235px;top:3835px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}.fifth_button_wrapper.jsx-2556467046{position:absolute;width:140px;height:42px;left:363px;top:3823px;background:#87BBE5;border:1px solid #184A88;box-sizing:border-box;border-radius:33px;}.fifth_button_wrapper.jsx-2556467046{position:absolute;width:69px;height:19px;left:395px;top:3835px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}.fifth_button_wrapper.jsx-2556467046{position:absolute;width:140px;height:42px;left:363px;top:3823px;background:#87BBE5;border:1px solid #184A88;box-sizing:border-box;border-radius:33px;}.fifth_button_inner.jsx-2556467046{position:absolute;width:69px;height:19px;left:395px;top:3835px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}.line3.jsx-2556467046{position:absolute;width:180px;height:0px;left:723px;top:3725px;border:1px solid Black;}.line8.jsx-2556467046{position:absolute;width:180px;height:0px;left:919px;top:3725px;border:1px solid black;}.line7.jsx-2556467046{position:absolute;width:180px;height:0px;left:1114px;top:3725px;border:1px solid black;}.line6.jsx-2556467046{position:absolute;width:180px;height:0px;left:1109px;top:3914px;border:1px solid black;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}.line9.jsx-2556467046{position:absolute;width:180px;height:0px;left:1114px;top:3525px;border:1px solid black;}.line10.jsx-2556467046{position:absolute;width:180px;height:0px;left:919px;top:3525px;border:1px solid black;}.line13.jsx-2556467046{position:absolute;width:180px;height:0px;left:1114px;top:3322px;border:1px solid black;}.testing.jsx-2556467046{position:absolute;width:78px;height:38px;left:1166px;top:3451px;font-family:Roboto;font-style:normal;font-weight:900;font-size:16px;line-height:19px;text-align:center;text-transform:uppercase;color:black;}.maintain.jsx-2556467046{position:absolute;width:148px;height:38px;left:938px;top:3655px;font-family:Roboto;font-style:normal;font-weight:900;font-size:16px;line-height:19px;text-align:center;text-transform:uppercase;color:black;}.strategy.jsx-2556467046{position:absolute;width:85px;height:19px;left:769px;top:3855px;font-family:Roboto;font-style:normal;font-weight:900;font-size:16px;line-height:19px;text-transform:uppercase;color:black;}.design.jsx-2556467046{position:absolute;width:61px;height:19px;left:982px;top:3855px;font-family:Roboto;font-style:normal;font-weight:900;font-size:16px;line-height:19px;text-transform:uppercase;color:black;}.content.jsx-2556467046{position:absolute;width:82px;height:38px;left:1164px;top:3845px;font-family:Roboto;font-style:normal;font-weight:900;font-size:16px;line-height:19px;text-align:center;text-transform:uppercase;color:black;}.devop.jsx-2556467046{position:absolute;width:117px;height:19px;left:1147px;top:3665px;font-family:Roboto;font-style:normal;font-weight:900;font-size:16px;line-height:19px;text-align:center;text-transform:uppercase;color:black;}.line14.jsx-2556467046{position:absolute;width:180px;height:0px;left:1109px;top:3511px;border:1px solid black;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXENvbW1vblxcQWJvdXRcXEhlbHB1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRzRCLEFBSXVDLEFBV0EsQUFRQSxBQWFBLEFBYUEsQUFhQSxBQVlBLEFBY0EsQUFXQSxBQWFBLEFBV0EsQUFjQSxBQVlBLEFBYUEsQUFXQSxBQWFBLEFBV0EsQUFhQSxBQVNBLEFBVUEsQUFVQSxBQVVBLEFBU0EsQUFTQSxBQVNDLEFBaUJELEFBaUJBLEFBZUEsQUFlQSxBQWlCQSxBQWdCQSxrQkFoWEwsQUFXRCxBQVFBLEFBYUEsQUFhRyxBQWFILEFBWUEsQUFjQSxBQVdBLEFBYUEsQUFXRCxBQWNDLEFBWUQsQUFhQyxBQVdELEFBYUMsQUFXRCxBQWFDLEFBU0EsQUFVQSxBQVVJLEFBVUosQUFTQSxBQVNBLEFBU0QsQUFpQkMsQUFpQkQsQUFlQSxBQWVBLEFBaUJDLEFBZ0JBLFdBelBBLEFBMEJBLEFBd0JBLEFBd0JBLEFBK0VBLEFBa0NBLEFBZUEsQUFlQSxDQXJVQyxBQVFBLEFBYUQsQUEwQkEsQUFZQSxBQWNBLEFBV0EsQUFhQSxBQXlCQSxBQXlCQSxBQXdCQSxBQXdCRCxBQVNBLEFBVUEsQUFVSSxBQVVKLEFBU0EsQUFTQSxBQTBCQyxBQWdFQSxBQWdCRCxDQWpYRSxFQTZDRSxRQTJFTCxBQTBCQyxBQXdCQSxBQXdCQSxBQWFBLEFBU0EsQUFVQyxBQVVJLEFBVUosQUFTRCxBQVNDLEFBU0EsQUFrQ0QsQUFlQSxBQWVDLEFBaUNBLENBalZGLEFBMEJBLEFBWUEsQUFjQyxBQVdBLEFBYUQsQUF5QkMsQUF5QkEsQUF3QkEsQUEyR0EsQUFnRUMsQ0F0VkYsQUFRQSxDQW5CRCxJQTZDQyxHQTJFQyxDQXZGQSxBQTBCQSxBQVlBLEFBc0NBLEFBcUNBLEFBd0JBLEFBd0JBLEFBYUEsQUFTQSxBQXVDQSxBQW9EQSxBQWVBLENBalVBLEFBV0EsQUFRQSxBQWlFQSxBQVdBLEFBc0NBLEFBeUJBLEFBd0JBLEFBMkNBLEFBVUksQUFVSixBQWtCQSxBQVNBLEFBaUJBLEFBK0NBLEFBaUNBLENBaEJBLElBcFRBLElBMkVRLENBdkZBLEFBMkJBLEFBV0EsQUFzQ0EsQUFxQ0EsQUF3QkEsQUF3QkEsQUFjSSxBQVNBLEFBdUNBLEFBbURKLEFBZ0JBLENBbFVrQyxBQVdsQyxBQVFBLEFBaUVBLEFBV0EsQUF1Q0EsQUF3QkEsQUF3QkEsQUE0Q0ksQUFVSSxBQVVKLEFBa0JBLEFBU0osQUFpQkEsQUErQ0EsQUFpQ0ksQ0FoQkosSUFyVEEsWUEyRUQsQ0F2RkEsQUEyQk8sQUFXUCxBQXNDTyxBQXFDUCxBQXdCQSxBQXdCQSxBQWlIQSxBQWdCQSxDQXZUdEIsQUFRc0IsQUFpRU8sQUFXUCxBQXVDTyxBQXdCQSxBQXdCQSxBQTJGUCxBQWlCQSxBQStDQSxDQWlCQSxFQW5KdEIsQUFVQSxBQXNDQSxDQTVCQSxBQVNpQyxBQVVqQyxBQWtCQSxBQTBHNkIsQ0FyVVAsV0EyRUMsQ0F2RkgsQUFzQ0csQUEyRUEsQUF3QkEsQUF3QkEsQUFpSEgsQUFnQkEsQ0EvU0csQUE0RUEsQUFrTEgsQUFpQkEsQUErQ0EsQ0FpQkEsSUFyVEEsQ0FjTSxBQWlEQSxDQXhCQSxBQWtEQSxBQXdCQSxBQXdCQSxRQXJKUCxBQWtSQSxBQWdCQSxDQXBVUSxBQW1SUixBQWlCQSxBQStDQSxDQTFOQSxBQTJPQSxDQTVSQSxBQTJFQSxBQXdCQSxBQXdCQSxDQTlLQSxBQTRFQSxFQWxEQSxPQWNJLEFBaURBLENBeEJBLEFBa0RBLEFBd0JBLEFBd0JBLENBckpGLEFBa1JBLEFBZ0JBLENBakRBLEFBaUJBLEFBK0NBLENBMU5BLEFBMk9BLENBNVJBLEFBMkVBLEFBd0JBLEFBd0JBLENBOUtBLEFBNEVBLEVBbERBLElBL0NtQixPQW1DdEIsQUEwQmxCLEFBaURBLEFBdU02QixBQWdCQSxDQS9PN0IsQUFrREEsQUF3QkEsQUF3QkEsQUE0RnNCLEFBaUJBLEFBK0NBLENBMU5KLEFBMk9JLENBNVJKLEFBMkVBLEFBd0JBLEFBd0JBLENBOUtpQixBQTRFakIsRUFsREEsUUFabEIsRUF1RkEsQ0FoREEsQUEwRUEsQUF3QkEsQUF3QkEsQ0FsR0EsQ0FrTDZCLEFBaUJBLEFBK0NBLENBcFM3QixBQXFUNkIsS0FoRGIsQUFnQkEsQ0ExRmhCLEFBc0lBLE1BM1ZBLEtBaVNBLEFBZUEsT0FoRGdCLEFBaUJBLEFBK0NBLENBZ0JBLFdBL0VoQixBQWlCQSxBQStDQSxDQWdCQSx5Q0F0V0QsdUJBQUMiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcQ29tbW9uXFxBYm91dFxcSGVscHVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBIZWxwdXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Vfd3JhcHBlclwiID5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VfbGVmdF93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VfbGVmdF9oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICBXZSBIZWxwIFlvdSBHcm93IFlvdXIgIEJ1c2luZXNzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VfbGVmdF9oZWFkX2JvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgV2h5IGFyZSB3ZSBpbiBidXNpbmVzcz9cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZV9sZWZ0X3RleHRcIj5cclxuICAgICAgICAgICAgICAgPHA+IEF0IFNwaW5lb3IsIHdlIHRoaW5rIHRoZSB3ZWJzaXRlIG9yIG1vYmlsZTxici8+XHJcbiAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24gb2YgeW91ciBjb21wYW55IGlzIHlvdXIgYnJhbmQgYW5kPGJyLz5cclxuICAgICAgICAgICAgICAgICAgeW91ciBicmFuZCBpcyB2aXRhbCBmb3IgdGhlIHJlc3VsdHMgb2YgeW91ciBjb21wYW55Ljxici8+XHJcbiAgICAgICAgICAgICAgICAgICBZb3VyIHdlYnNpdGUgLyBhcHAgaXMgYSBzaG93Y2FzZSBvZiB5b3VyIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICBjb21wYW55IHRvIHlvdXIgY2xpZW50cywgd2hldGhlciB5b3UncmUgbG9va2luZyB0byA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIGVudGVyIGVDb21tZXJjZSwgd2FudCB0byBvZmZlciB5b3VyIHJlc3RhdXJhbnQ8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICBzb21lIGFkZGl0aW9uYWwgcGFuYWNoZSBvbiB0aGUgaW50ZXJuZXQsIG9yIGhhdmU8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhlIG5leHQgZXhjZWxsZW50IG1vYmlsZSBhcHAgY29uY2VwdC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBCdWlsZGluZyB3ZWJzaXRlcyBhbmQgbW9iaWxlIGFwcHMgaXMgb3VyIHBhc3Npb24uPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICBIZWxwaW5nIHBlb3BsZSB0byBncm93IHRoZWlyIGJ1c2luZXNzZXMgaXMgb3VyPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJlYW0uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0X2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdF9idXR0b25fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RfYnV0dG9uX2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICBEZWxpdmVyeSBvbiBUaW1lIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vjb25kX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNvbmRfYnV0dG9uX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY29uZF9idXR0b25faW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIENsZWFyIENvbW11bmljYXRpb25zIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhpcmRfYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoaXJkX2J1dHRvbl93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGlyZF9idXR0b25faW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIFVwZnJvbnRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdXJ0aF9idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm91cnRoX2J1dHRvbl93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3VydGhfYnV0dG9uX2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICBJbm5vdmF0aXZlXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZnRoX2J1dHRvbl93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlmdGhfYnV0dG9uX2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICBSZWxpYWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lM1wiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lOFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lN1wiPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lMTBcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lOVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lMTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgVGVzdGluZyAmIExhdW5jaCBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWludGFpblwiPlxyXG4gICAgICAgICAgICAgICAgTUFJTlRFTkFOQ0UgJiBPTkdPSU5HIFNVUFBPUlQgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyYXRlZ3lcIj5cclxuICAgICAgICAgICAgICAgIFNUUkFURUdZXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduXCI+XHJcbiAgICAgICAgICAgICAgICBERVNJR05cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICBDT05URU5UIENSRUFUSU9OXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV2b3BcIj5cclxuICAgICAgICAgICAgICAgIERFVkVMT1BNRU5UXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5pbWFnZV93cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI5OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTk2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjkxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcmVzb3Vyc2VzL2ltYWdlcy9pbWcxLmpwZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6J2dyZXknO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbWF0cml4KC0xLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VfbGVmdF93cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MDZweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VfbGVmdF9oZWFke1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTQxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzIwNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VfbGVmdF9oZWFkX2JvdHRvbXtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzMzM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlX2xlZnRfdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUyNS4yM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzA4LjFweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzM5NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZpcnN0X2J1dHRvbl93cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTgxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzNzcxcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4N0JCRTU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE4NEE4ODtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmlyc3RfYnV0dG9uX2lubmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDk2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzNzgzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxODRBODg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNlY29uZF9idXR0b25fd3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNjRweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDM3NzFweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODdCQkU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNlY29uZF9idXR0b25faW5uZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjk2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzNzgzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGhpcmRfYnV0dG9uX3dyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNjRweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDM4MjNweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODdCQkU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRoaXJkX2J1dHRvbl9pbm5lcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDk2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzODM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5mb3VydGhfYnV0dG9uX3dyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzODIzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3QkJFNTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mb3VydGhfYnV0dG9uX2lubmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzODM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmlmdGhfYnV0dG9uX3dyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzYzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzODIzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3QkJFNTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5maWZ0aF9idXR0b25fd3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDM5NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzgzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZpZnRoX2J1dHRvbl93cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDM2M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzgyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4N0JCRTU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE4NEE4ODtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmlmdGhfYnV0dG9uX2lubmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjlweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzk1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzODM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluZTN7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3MjNweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDM3MjVweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIEJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmU4e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogOTE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzNzI1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5lN3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDExMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDM3MjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmU2e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTEwOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDM5MTRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmU5e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTExNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzUyNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5lMTB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MTlweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDM1MjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluZTEze1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTExNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzMyMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXN0aW5ne1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDExNjZweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDM0NTFweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tYWludGFpbntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MzhweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDM2NTVweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuc3RyYXRlZ3kge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNzY5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzODU1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRlc2lnbntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDk4MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzg1NXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTE2NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzg0NXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRldm9we1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDExNDdweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDM2NjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmUxNHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDExMDlweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDM1MTFweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlbHB1c1xyXG4iXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\Common\\\\About\\\\Helpus.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Helpus);

/***/ }),

/***/ "./Common/About/Methodology.js":
/*!*************************************!*\
  !*** ./Common/About/Methodology.js ***!
  \*************************************/
/*! exports provided: Methodology, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Methodology", function() { return Methodology; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\Common\\About\\Methodology.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import img1 from "../resourses/images/img1.jpg";

class Methodology extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-2851192067" + " " + "image_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "jsx-2851192067" + " " + "image_left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "jsx-2851192067" + " " + "image_left_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, "Our", __jsx("br", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 18
      }
    }), " Methodology"), __jsx("div", {
      className: "jsx-2851192067" + " " + "image_left_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, "Spineor, we have  an  enormous  industry ", __jsx("br", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 60
      }
    }), "experience in  developing a  methodology that ", __jsx("br", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 63
      }
    }), "applies to all projects irrespective of size and  ", __jsx("br", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 67
      }
    }), "duration."), __jsx("div", {
      className: "jsx-2851192067" + " " + "image_right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, " Lorem Ipsum is simply dummy text of the printing and typesetting ", __jsx("br", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 86
      }
    }), "industry. Lorem Ipsum has been the industry's standard dummy text", __jsx("br", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 80
      }
    }), "ever since the 1500s, when an unknown printer took a galley of type and", __jsx("br", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 87
      }
    }), "scrambled it to make a type specimen book."), __jsx("p", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, "It has survived not only five centuries, but also the leap into electronic", __jsx("br", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 92
      }
    }), "typesetting, remaining essentially unchanged. It was popularised in the", __jsx("br", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 90
      }
    }), "1960s with the release of Letraset sheets containing."), __jsx("p", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 20
      }
    }, "Lorem Ipsum passages, and more recently with desktop publishing", __jsx("br", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 84
      }
    }), "software like Aldus PageMaker including versions of Lorem Ipsum.", __jsx("br", {
      className: "jsx-2851192067",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 86
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2851192067",
      __self: this
    }, ".image_wrapper.jsx-2851192067{position:absolute;width:1300px;height:859px;left:1px;top:778px;backgroundImage:url('/resourses/images/img1.jpg');border:2px solid black;}.image_left.jsx-2851192067{position:absolute;width:617px;height:399px;left:34px;top:1238px;background:#184A88;}.image_left_header.jsx-2851192067{position:absolute;width:540.85px;height:113px;left:68.17px;top:1312px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#FFFFFF;}.image_left_text.jsx-2851192067{position:absolute;width:525.23px;height:146px;left:74.03px;top:1445px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;color:#FFFFFF;}.image_right.jsx-2851192067{position:absolute;width:567px;height:287px;left:693px;top:1466px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#333333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXENvbW1vblxcQWJvdXRcXE1ldGhvZG9sb2d5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DMEIsQUFHdUMsQUFTQSxBQVFBLEFBZ0JBLEFBY0Esa0JBOUNMLEFBU0QsQUFRRyxBQWdCQSxBQWNILFlBckNDLEFBc0NBLENBL0NBLEVBaUJBLEFBZ0JBLFVBdkJILEFBc0NDLENBL0NGLEVBaUJJLEFBZ0JBLE9BaENILEFBU0MsQ0FzQ0EsS0E5QkEsQUFnQkEsSUFoQ3VDLENBUy9CLENBc0NBLEtBN0JBLEFBZUEsYUF2QnZCLENBc0NzQixLQTdCQSxBQWVBLGFBZUYsS0E3QkcsQUFlQSxNQWpDeEIsS0FnRG9CLFFBN0JBLEFBZUEsT0FlRSxHQWpEckIsS0FvQnFCLEFBZUEsU0FlSCxRQTVCQSxBQWNBLE1BZWxCLFFBM0JBLEFBY0EiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcQ29tbW9uXFxBYm91dFxcTWV0aG9kb2xvZ3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG4vL2ltcG9ydCBpbWcxIGZyb20gXCIuLi9yZXNvdXJzZXMvaW1hZ2VzL2ltZzEuanBnXCI7XHJcbmV4cG9ydCBjbGFzcyBNZXRob2RvbG9neSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Vfd3JhcHBlclwiIFxyXG4gICAgICAgICAgICAvL3N0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHtpbWcxfSlgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlX2xlZnRcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZV9sZWZ0X2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgIE91cjxici8+IE1ldGhvZG9sb2d5XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZV9sZWZ0X3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgU3BpbmVvciwgd2UgaGF2ZSAgYW4gIGVub3Jtb3VzICBpbmR1c3RyeSA8YnIvPlxyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZSBpbiAgZGV2ZWxvcGluZyBhICBtZXRob2RvbG9neSB0aGF0IDxici8+XHJcbiAgICAgICAgICAgICAgICBhcHBsaWVzIHRvIGFsbCBwcm9qZWN0cyBpcnJlc3BlY3RpdmUgb2Ygc2l6ZSBhbmQgIDxici8+XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbi5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD4gTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyA8YnIvPlxyXG4gICAgICAgICAgICAgIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0PGJyLz5cclxuICAgICAgICAgICAgICAgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQ8YnIvPlxyXG4gICAgICAgICAgICAgICAgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWM8YnIvPlxyXG4gICAgICAgICAgICAgICAgICB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nLjwvcD5cclxuICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZzxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmltYWdlX3dyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4NTlweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA3NzhweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHVybCgnL3Jlc291cnNlcy9pbWFnZXMvaW1nMS5qcGcnKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VfbGVmdHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzk5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzRweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEyMzhweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlX2xlZnRfaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTQwLjg1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2OC4xN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTMxMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlX2xlZnRfdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUyNS4yM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNzQuMDNweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDE0NDVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VfcmlnaHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NjdweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY5M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTQ2NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldGhvZG9sb2d5XHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\Common\\\\About\\\\Methodology.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Methodology);

/***/ }),

/***/ "./Common/About/Process.js":
/*!*********************************!*\
  !*** ./Common/About/Process.js ***!
  \*********************************/
/*! exports provided: Process, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process", function() { return Process; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\Common\\About\\Process.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Process extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-3531238115" + " " + "image_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-3531238115" + " " + "image_left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-3531238115" + " " + "image_left_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, "Our ", __jsx("br", {
      className: "jsx-3531238115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }), " Process"), __jsx("div", {
      className: "jsx-3531238115" + " " + "image_left_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, "Over the past few years, Spineor has constructed ", __jsx("br", {
      className: "jsx-3531238115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 67
      }
    }), "a key collection of development and design ", __jsx("br", {
      className: "jsx-3531238115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 60
      }
    }), "facilities that not only surpassed our customers'", __jsx("br", {
      className: "jsx-3531238115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 66
      }
    }), "expectations."), __jsx("div", {
      className: "jsx-3531238115" + " " + "image_right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "jsx-3531238115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, "Lorem Ipsum is simply dummy text of the printing and typesetting ", __jsx("br", {
      className: "jsx-3531238115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 85
      }
    }), "industry. Lorem Ipsum has been the industry's standard dummy text", __jsx("br", {
      className: "jsx-3531238115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 82
      }
    }), "ever since the 1500s, when an unknown printer took a galley of type and ", __jsx("br", {
      className: "jsx-3531238115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 90
      }
    }), "scrambled it to make a type specimen book. "), __jsx("p", {
      className: "jsx-3531238115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 18
      }
    }, "It has survived not only five centuries, but also the leap into electronic", __jsx("br", {
      className: "jsx-3531238115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 95
      }
    }), "typesetting, remaining essentially unchanged. It was popularised in the", __jsx("br", {
      className: "jsx-3531238115",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 90
      }
    }), "1960s with the release of Letraset sheets containing")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3531238115",
      __self: this
    }, ".image_wrapper.jsx-3531238115{position:absolute;width:1300px;height:859px;left:1px;top:1858px;background-image:url('african-american-american-asian-beautiful-black-brainstorming-1434033-pxhere.png');border:2px solid black;}.image_left.jsx-3531238115{position:absolute;width:617px;height:399px;left:34px;top:2318px;background:#184A88;}.image_left_header.jsx-3531238115{position:absolute;width:540.85px;height:113px;left:68.17px;top:2392px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#FFFFFF;}.image_left_text.jsx-3531238115{position:absolute;width:525.23px;height:146px;left:74.03px;top:2525px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;color:#FFFFFF;}.image_right.jsx-3531238115{position:absolute;width:567px;height:202px;left:693px;top:2546px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#333333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXENvbW1vblxcQWJvdXRcXFByb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEI0QixBQUd1QyxBQVNBLEFBUUEsQUFjQSxBQWFBLGtCQTNDTCxBQVNELEFBUUcsQUFjQSxBQWFILFlBbENDLEFBbUNBLENBNUNBLEVBaUJBLEFBY0EsVUFyQkgsQUFtQ0MsQ0E1Q0YsRUFpQkksQUFjQSxPQTlCRixBQVNBLENBbUNBLEtBM0JBLEFBY0EsS0E5QjhGLEFBU3JGLENBbUNELEtBM0JBLEFBY0EsYUFyQnZCLENBbUNzQixLQTNCQSxBQWNBLGFBY0YsS0EzQkcsQUFjQSxXQWNKLFFBM0JBLEFBY0EsT0FjRSxRQTNCQSxBQWNBLFNBY0gsUUEzQkEsQUFjQSxNQWNsQixLQWhERCxHQXNCQyxBQWFBLG9CQW5DQSIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXHNwaW5lb3ItbmV4dFxcc3BpbmVvci1uZXh0XFxDb21tb25cXEFib3V0XFxQcm9jZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2Nlc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Vfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlX2xlZnRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZV9sZWZ0X2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgT3VyIDxici8+IFByb2Nlc3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZV9sZWZ0X3RleHRcIj5cclxuICAgICAgICAgICAgICAgICBPdmVyIHRoZSBwYXN0IGZldyB5ZWFycywgU3BpbmVvciBoYXMgY29uc3RydWN0ZWQgPGJyLz5cclxuICAgICAgICAgICAgICAgIGEga2V5IGNvbGxlY3Rpb24gb2YgZGV2ZWxvcG1lbnQgYW5kIGRlc2lnbiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgZmFjaWxpdGllcyB0aGF0IG5vdCBvbmx5IHN1cnBhc3NlZCBvdXIgY3VzdG9tZXJzJzxici8+XHJcbiAgICAgICAgICAgICAgICAgZXhwZWN0YXRpb25zLiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZV9yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+TG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyA8YnIvPlxyXG4gICAgICAgICAgICAgICAgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQ8YnIvPlxyXG4gICAgICAgICAgICAgICAgIGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIDxici8+XHJcbiAgICAgICAgICAgICAgICAgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIDwvcD5cclxuICAgICAgICAgICAgICAgICA8cD5JdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYzxici8+XHJcbiAgICAgICAgICAgICAgICAgIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlPGJyLz5cclxuICAgICAgICAgICAgICAgICAgIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmc8L3A+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaW1hZ2Vfd3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDE4NThweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2FmcmljYW4tYW1lcmljYW4tYW1lcmljYW4tYXNpYW4tYmVhdXRpZnVsLWJsYWNrLWJyYWluc3Rvcm1pbmctMTQzNDAzMy1weGhlcmUucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCBibGFja1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlX2xlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MTdweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM5OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMzE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VfbGVmdF9oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NDAuODVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY4LjE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMzkycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlX2xlZnRfdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUyNS4yM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNzQuMDNweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDI1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZV9yaWdodHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU2N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNjkzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNTQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzXHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\Common\\\\About\\\\Process.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Process);

/***/ }),

/***/ "./Common/About/Whoarewe.js":
/*!**********************************!*\
  !*** ./Common/About/Whoarewe.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\Common\\About\\Whoarewe.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Whoarewe = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-40941606" + " " + "outer_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-40941606" + " " + "inner_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, props.name, "WHO ARE WE?"), __jsx("div", {
    className: "jsx-40941606" + " " + "inner_text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "All you need for digital", __jsx("br", {
    className: "jsx-40941606",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 41
    }
  }), "domination, under one expert ", __jsx("br", {
    className: "jsx-40941606",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 47
    }
  }), "roof. We are the right technology ", __jsx("br", {
    className: "jsx-40941606",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 52
    }
  }), "partner to drive."), __jsx("div", {
    className: "jsx-40941606" + " " + "button_outer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-40941606" + " " + "button_inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Get in touch")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "40941606",
    __self: undefined
  }, ".outer_wrapper.jsx-40941606{position:absolute;width:1300px;height:630px;left:0px;top:74px;background:#FFFFFF;}.inner_header.jsx-40941606{position:absolute;width:435px;height:186px;left:111px;top:264px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:90px;line-height:105px;color:#333333;}.inner_text.jsx-40941606{position:absolute;width:515px;height:223px;left:656px;top:246px;font-family:Roboto;font-style:normal;font-weight:300;font-size:36px;line-height:42px;color:#333333;}.button_outer.jsx-40941606{position:absolute;width:158px;height:50px;left:658px;top:448px;background:#FFFFFF;border:2px solid #184A88;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.button_inner.jsx-40941606{position:absolute;width:86px;height:19px;left:692px;top:463px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#184A88;color:#184A88;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXENvbW1vblxcQWJvdXRcXFdob2FyZXdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCd0IsQUFHdUMsQUFTQSxBQWFBLEFBYUEsQUFZQSxrQkE5Q0wsQUFTRCxBQWFBLEFBYUEsQUFZRCxXQUNDLENBdENDLEFBYUEsQUFhRCxDQW5DQyxVQWdERixDQVpBLENBMUJBLEFBYUEsQ0F0QkgsUUFnREUsQ0EvQ0QsQUFtQ0MsQ0ExQkEsQUFhQSxRQXJCUyxBQStDQSxDQVpBLENBMUJBLEFBYUEsaUJBcEJ2QixBQThDc0IsQ0FaTyxDQTFCUCxBQWFBLGdCQTBCQyxFQXRDRixBQWFELE1BYVMsVUFaVixDQWJBLEFBc0NBLGNBeEJFLEFBWUssQ0F6QkosQUFzQ0QsZ0JBeEJILENBeUJELENBdENDLEdBeUJJLFNBWHRCLEVBYkEsT0F5QkEsb0RBYXVCLDZGQUNELGtCQUNKLGNBQ0EsY0FDbEIiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcQ29tbW9uXFxBYm91dFxcV2hvYXJld2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5cclxuY29uc3QgIFdob2FyZXdlICA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICB7cHJvcHMubmFtZX1XSE8gQVJFIFdFP1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX3RleHRcIj5cclxuICAgICAgICAgICAgICAgIEFsbCB5b3UgbmVlZCBmb3IgZGlnaXRhbDxici8+XHJcbiAgICAgICAgICAgICAgICAgZG9taW5hdGlvbiwgdW5kZXIgb25lIGV4cGVydCA8YnIvPlxyXG4gICAgICAgICAgICAgICAgIHJvb2YuIFdlIGFyZSB0aGUgcmlnaHQgdGVjaG5vbG9neSA8YnIvPlxyXG4gICAgICAgICAgICAgICAgIHBhcnRuZXIgdG8gZHJpdmUuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uX291dGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uX2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICBHZXQgaW4gdG91Y2hcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm91dGVyX3dyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MzBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDc0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmlubmVyX2hlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTg2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmlubmVyX3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uX291dGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTU4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY1OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uX2lubmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODZweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNjkycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0NjNweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdob2FyZXdlXHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\Common\\\\About\\\\Whoarewe.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Whoarewe);

/***/ }),

/***/ "./Common/Services/Bestsolutions.js":
/*!******************************************!*\
  !*** ./Common/Services/Bestsolutions.js ***!
  \******************************************/
/*! exports provided: Bestsolutions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bestsolutions", function() { return Bestsolutions; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\Common\\Services\\Bestsolutions.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Bestsolutions extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx("link", {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      className: "jsx-1197300762",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      className: "jsx-1197300762",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "jsx-1197300762" + " " + "top_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }, "Why Spineor is the best solutions?"), __jsx("div", {
      className: "jsx-1197300762" + " " + "product_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, "Product Manager for your product"), __jsx("div", {
      className: "jsx-1197300762" + " " + "confidential",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, "100% Confidential Consultation including a signed NDA!"), __jsx("div", {
      className: "jsx-1197300762" + " " + "documentation",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, " Detailed Documentation ", __jsx("br", {
      className: "jsx-1197300762",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 72
      }
    }), " and Analysis of your project"), __jsx("div", {
      className: "jsx-1197300762" + " " + "deliver",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, "We always deliver the ", __jsx("br", {
      className: "jsx-1197300762",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 64
      }
    }), " source code with the project."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1197300762",
      __self: this
    }, ".top_header.jsx-1197300762{position:absolute;width:738px;height:56px;left:281px;top:3734px;font-family:Roboto;font-style:normal;font-weight:500;font-size:48px;line-height:56px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#333333;}.product_text.jsx-1197300762{position:absolute;width:183px;height:56px;left:267px;top:3873px;font-family:Roboto;font-style:normal;font-weight:300;font-size:24px;line-height:28px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:right;color:#444444;}.confidential.jsx-1197300762{position:absolute;width:337px;height:50px;left:113px;top:3982px;font-family:Roboto;font-style:normal;font-weight:300;font-size:24px;line-height:28px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:right;color:#444444;}.documentation.jsx-1197300762{position:absolute;width:291px;height:56px;left:850px;top:3874px;font-family:Roboto;font-style:normal;font-weight:300;font-size:24px;line-height:28px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#444444;}.deliver.jsx-1197300762{position:absolute;width:303px;height:56px;left:850px;top:3978px;font-family:Roboto;font-style:normal;font-weight:300;font-size:24px;line-height:28px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#444444;}.line1.jsx-1197300762{position:absolute;width:318.2px;height:0px;left:537px;top:3846px;border:1px solid #D3D3D3;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.line2.jsx-1197300762{position:absolute;width:318.2px;height:0px;left:537px;top:4071px;border:1px solid #D3D3D3;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.fas.jsx-1197300762 fa-check-circle.jsx-1197300762{position:absolute;left:0%;right:0%;top:0%;bottom:0%;background:#32BEA6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXENvbW1vblxcU2VydmljZXNcXEJlc3Rzb2x1dGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUI0QixBQUl1QyxBQWlCQSxBQWdCQSxBQWdCQSxBQWVBLEFBZUEsQUFTQSxBQVNBLGtCQWhHTixBQWlCQSxBQWdCSixBQWdCSSxBQWVBLEFBZUUsQUFTQSxBQVNOLFFBQ0MsSUFqR0csQUFpQkEsQUFnQkosQUFnQkksQUFlQSxFQWVELEFBU0EsR0FVSixPQWpHSSxBQWlCQSxBQWdCSixBQWdCSSxBQWVBLEFBa0NELENBbkJDLEFBU0EsU0FXUSxDQWxHUixBQWlCQSxBQWdCSixBQWdCSSxBQWVBLENBZUEsQUFTQSxVQXZGUSxBQWlCQSxBQWdCSixBQWdCSSxBQWVBLENBZU0sQUFTQSxNQVU3QixZQWpHc0IsQUFpQkEsQUFnQkosQUFnQkksQUFlQSxPQWVNLEFBU0MsV0F2RlQsQUFpQkEsQUFnQkosQUFnQkksQUFlQSxnQkEvREQsQUFpQkEsQUFnQkosQUFnQkksQUFlQSxlQS9ERSxBQWlCQSxBQWdCSixBQWdCSSxBQWVBLGlCQS9ESixBQWlCQSxBQWdCSixBQWdCSSxBQWVBLHlCQVlqQixHQVNBLDhDQXBGdUIsQUFpQkEsQUFnQkosQUFnQkksQUFlQSw2RkEvREQsQUFpQkQsQUFnQkosQUFnQkMsQUFlQSxjQWRsQixBQWVBLEdBL0NrQixBQWdCSixDQWpDSSxhQWtCbEIsQUFnQkEsQ0FoQ0EiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcQ29tbW9uXFxTZXJ2aWNlc1xcQmVzdHNvbHV0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJlc3Rzb2x1dGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjEyLjAvY3NzL2FsbC5jc3NcIi8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BfaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICBXaHkgU3BpbmVvciBpcyB0aGUgYmVzdCBzb2x1dGlvbnM/XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF90ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0IE1hbmFnZXIgZm9yIHlvdXIgcHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmZpZGVudGlhbFwiPjEwMCUgQ29uZmlkZW50aWFsIENvbnN1bHRhdGlvbiBpbmNsdWRpbmcgYSBzaWduZWQgTkRBITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N1bWVudGF0aW9uXCI+IERldGFpbGVkIERvY3VtZW50YXRpb24gPGJyLz4gYW5kIEFuYWx5c2lzIG9mIHlvdXIgcHJvamVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWxpdmVyXCI+V2UgYWx3YXlzIGRlbGl2ZXIgdGhlIDxici8+IHNvdXJjZSBjb2RlIHdpdGggdGhlIHByb2plY3QuPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwibGluZTFcIj4gIDwvZGl2PiAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlX3ZlY3RvclwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+PC9kaXY+ICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZTJcIj48L2Rpdj4qL31cclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC50b3BfaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzM4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI4MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzczNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0X3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjY3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzODczcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbmZpZGVudGlhbHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzM3cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMTNweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMzk4MnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kb2N1bWVudGF0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjkxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDg1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzg3NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZWxpdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDg1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzk3OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5lMXtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMxOC4ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTM3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzODQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0QzRDNEMztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluZTJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMTguMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUzN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDA3MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEM0QzRDM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mYXMgZmEtY2hlY2stY2lyY2xle1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMkJFQTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZXN0c29sdXRpb25zXHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\Common\\\\Services\\\\Bestsolutions.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Bestsolutions);

/***/ }),

/***/ "./Common/Services/Contact.js":
/*!************************************!*\
  !*** ./Common/Services/Contact.js ***!
  \************************************/
/*! exports provided: Contact, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\Common\\Services\\Contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Contact extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-2706244836" + " " + "outer_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    }, __jsx("form", {
      className: "jsx-2706244836",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-2706244836" + " " + "inner_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, "CONTACT US FOR A FREE & CONFIDENTIAL CONSULTATION"), __jsx("div", {
      className: "jsx-2706244836" + " " + "outer_textfield_name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "inner_textfield_name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "inner_textfield_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, " Name "), __jsx("div", {
      className: "jsx-2706244836" + " " + "outer_textfield_email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "inner_textfield_email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "inner_textfield_email_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, " Email "), __jsx("div", {
      className: "jsx-2706244836" + " " + "outer_textfield_phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "inner_textfield_phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "inner_textfield_phone_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, " phone "), __jsx("div", {
      className: "jsx-2706244836" + " " + "outer_textfield_select",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "inner_textfield_select",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "inner_textfield_select_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, " Select Budget"), __jsx("div", {
      className: "jsx-2706244836" + " " + "out_rect",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "in_rect",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "in_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, "Requirements"), __jsx("div", {
      className: "jsx-2706244836" + " " + "outer_res",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "inner_res",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }, __jsx("pre", {
      className: "jsx-2706244836",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 48
      }
    }, " 15   +   9   =")), __jsx("div", {
      className: "jsx-2706244836" + " " + "value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "value_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, "Value"), __jsx("div", {
      className: "jsx-2706244836" + " " + "button_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-2706244836" + " " + "button_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, "SUBMIT"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2706244836",
      __self: this
    }, ".button_wrapper.jsx-2706244836{position:absolute;width:370px;height:49px;left:661px;top:4515px;background:#184A88;border-radius:3px;}.button_text.jsx-2706244836{position:absolute;width:90px;height:23px;left:801px;top:4528px;font-family:Roboto;font-style:normal;font-weight:900;font-size:20px;line-height:23px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;color:#FFFFFF;}.outer_res.jsx-2706244836{position:absolute;width:370px;height:49px;left:271px;top:4515px;background:#C4C4C4;border-radius:3px;}.inner_res.jsx-2706244836{position:absolute;width:210px;height:28px;left:288px;top:4527px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#FFFFFF;}.value.jsx-2706244836{position:absolute;width:117px;height:43px;left:521px;top:4518px;background:#FFFFFF;border-radius:3px;}.value_text.jsx-2706244836{position:absolute;width:44px;height:21px;left:534px;top:4529px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#A6A6A6;}.out_rect.jsx-2706244836{position:absolute;width:760px;height:125px;left:271px;top:4373px;background:#C4C4C4;border-radius:3px;}.in_rect.jsx-2706244836{position:absolute;width:708px;height:119px;left:320px;top:4376px;background:#FFFFFF;border-radius:3px;}.in_text.jsx-2706244836{position:absolute;width:207.46px;height:21px;left:335.41px;top:4387px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#A6A6A6;}.outer_textfield_phone.jsx-2706244836{position:absolute;width:370px;height:49px;left:271px;top:4307px;background:#C4C4C4;border-radius:3px;}.inner_textfield_phone.jsx-2706244836{position:absolute;width:318px;height:43px;left:320px;top:4310px;background:#FFFFFF;border-radius:3px;}.inner_textfield_phone_text.jsx-2706244836{position:absolute;width:51px;height:21px;left:334px;top:4321px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#A6A6A6;}.outer_textfield_select.jsx-2706244836{position:absolute;width:370px;height:49px;left:661px;top:4307px;background:#C4C4C4;border-radius:3px;}.inner_textfield_select.jsx-2706244836{position:absolute;width:318px;height:43px;left:710px;top:4310px;background:#FFFFFF;border-radius:3px;}.inner_textfield_select_text.jsx-2706244836{position:absolute;width:109px;height:21px;left:724px;top:4321px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#484848;}.outer_textfield_email.jsx-2706244836{position:absolute;width:370px;height:49px;left:661px;top:4241px;background:#C4C4C4;border-radius:3px;}.inner_textfield_email.jsx-2706244836{position:absolute;width:318px;height:43px;left:710px;top:4244px;background:#FFFFFF;border-radius:3px;}.inner_textfield_email_text.jsx-2706244836{position:absolute;width:44px;height:21px;left:724px;top:4255px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#A6A6A6;}.inner_header.jsx-2706244836{position:absolute;width:623px;height:80px;left:339px;top:4155px;font-family:Roboto;font-style:normal;font-weight:500;font-size:20px;line-height:23px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#444444;}.inner_textfield_text.jsx-2706244836{position:absolute;width:48px;height:21px;left:334px;top:4255px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#A6A6A6;}.inner_textfield_name.jsx-2706244836{position:absolute;width:318px;height:43px;left:320px;top:4244px;background:#FFFFFF;border-radius:3px;}.outer_textfield_name.jsx-2706244836{position:absolute;width:370px;height:49px;left:271px;top:4241px;background:#C4C4C4;border-radius:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXENvbW1vblxcU2VydmljZXNcXENvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUM0QixBQUd1QyxBQVNBLEFBZ0JDLEFBU0QsQUFvQkUsQUFVRixBQWVBLEFBVUQsQUFTRCxBQWlCRSxBQVNBLEFBU0EsQUFlQSxBQVVBLEFBU0EsQUFlQSxBQVVBLEFBV0EsQUFlQSxBQWdCQSxBQWVBLEFBVUEsa0JBbFFOLEFBU0QsQUFnQkMsQUFTQSxBQW9CQSxBQVVELEFBZUMsQUFVQSxBQVNHLEFBaUJILEFBU0EsQUFTRCxBQWVDLEFBVUEsQUFTQSxBQWVBLEFBVUEsQUFXRCxBQWVDLEFBZ0JELEFBZUMsQUFVQSxXQXpQQSxBQXVEQSxBQXFFQSxBQXNFQSxBQStCQSxDQTFPQSxBQXlCQSxBQVNBLEFBb0JBLEFBeUJDLEFBVUEsQUEwQkQsQUFTQSxBQXdCQSxBQVVBLEFBU0EsQUFlQSxBQVVBLEFBMEJBLEFBK0JBLEFBVUEsR0FqS0EsUUF4RkQsQUF1REEsQUFxRUEsQUFzRUEsQUErQkEsQ0ExT0EsQUF5QkEsQUFTQSxBQW9CQSxBQTZEQSxBQVNBLEFBd0JBLEFBVUEsQUFTQSxBQWVBLEFBVUEsQUEwQkEsQUErQkEsQUFVQSxDQXBMQSxBQVVBLEVBU0csT0F4RkgsQUF1REEsQUFxRUEsQUFzRUEsQUErQkEsQ0ExT0EsQUF5QkEsQUFTQSxBQW9CQSxBQTZEQSxBQVNBLEFBd0JBLEFBVUEsQUFTQSxBQWVBLEFBVUEsQUEwQkEsQUErQkEsQUFVQSxDQXBMQSxBQVVBLEtBU0EsSUF4RlEsQUF1REEsQUFxRUEsQUFzRUEsQUErQkEsQ0ExT0EsQUF5QkEsQUFVQSxBQW9CQSxBQTREQSxBQVNBLEFBeUJBLEFBU0EsQUFTQSxBQWdCQSxBQVVBLEFBeUJBLEFBZ0NBLEFBVUEsQ0FwTEEsQUFTQSxLQVNELFlBeEZBLEFBdURBLEFBcUVBLEFBc0VBLEFBK0JBLENBMU9BLEFBeUJBLEFBVUEsQUFvQkEsQUE0REEsQUFVdkIsQUF3QnVCLEFBU0EsQUFTQSxBQWdCQSxBQVVBLEFBeUJBLEFBZ0NBLEFBVUEsQ0FwTEEsQUFTQSxLQVNBLFdBeEZGLEFBdURBLEFBcUVBLEFBc0VBLEFBK0JBLENBMU9wQixBQXlCQSxBQVV1QixBQW9CdkIsQUE0REEsQUFTQSxBQXlCQSxBQVNBLEFBU29CLEFBZ0JwQixBQVdBLEFBd0JvQixBQWdDcEIsQUFVQSxDQXBMQSxBQVNBLEtBU29CLFNBeEZELEFBdURBLEFBcUVBLEFBc0VBLEFBK0JBLENBbkVBLEFBbURBLEdBdkxBLEdBK0RBLFFBeEZFLEFBdURBLEFBcUVBLEFBc0VBLEFBK0JBLENBbkVBLEFBbURBLEdBdkxBLEdBK0RBLFVBeEZKLEFBdURBLEFBcUVBLEFBc0VBLEFBK0JBLENBbkVBLEFBbURBLEdBdkxBLEdBK0RBLG1FQXhGTSxBQXVEQSxBQXFFQSxBQXNFQSxBQStCQSxDQW5FQSxBQW1EQSxHQXZMQSxHQStEQSxzRkF4RkUsQUF1RFAsQUFxRUEsQUFzRUEsQUErQkEsQ0FuRUEsQUFtREksR0F0TEosR0ErREEsT0FsQ2xCLEFBcUVBLEFBc0VBLEFBK0JBLENBbkVBLEdBbklBLENBc0xrQixFQXZIbEIsWUF3SEEsb0VBbE5rQixjQUNsQiIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXHNwaW5lb3ItbmV4dFxcc3BpbmVvci1uZXh0XFxDb21tb25cXFNlcnZpY2VzXFxDb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgQ09OVEFDVCBVUyBGT1IgQSBGUkVFICYgQ09ORklERU5USUFMIENPTlNVTFRBVElPTiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlcl90ZXh0ZmllbGRfbmFtZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfdGV4dGZpZWxkX25hbWVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX3RleHRmaWVsZF90ZXh0XCI+IE5hbWUgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJfdGV4dGZpZWxkX2VtYWlsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl90ZXh0ZmllbGRfZW1haWxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX3RleHRmaWVsZF9lbWFpbF90ZXh0XCI+IEVtYWlsIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyX3RleHRmaWVsZF9waG9uZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfdGV4dGZpZWxkX3Bob25lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl90ZXh0ZmllbGRfcGhvbmVfdGV4dFwiPiBwaG9uZSA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlcl90ZXh0ZmllbGRfc2VsZWN0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl90ZXh0ZmllbGRfc2VsZWN0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl90ZXh0ZmllbGRfc2VsZWN0X3RleHRcIj4gU2VsZWN0IEJ1ZGdldDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dF9yZWN0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbl9yZWN0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbl90ZXh0XCI+UmVxdWlyZW1lbnRzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyX3Jlc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfcmVzXCI+PHByZT4gMTUgICArICAgOSAgID08L3ByZT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZV90ZXh0XCI+VmFsdWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbl93cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25fdGV4dFwiPlNVQk1JVDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uX3dyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNjYxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0NTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzE4NEE4ODtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uX3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA4MDFweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQ1MjhweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm91dGVyX3Jlc3tcclxuICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjcxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0NTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0M0QzRDNDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5uZXJfcmVze1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI4OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDUyN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmlubmVyX3RleHR7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnZhbHVle1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTdweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0NTE4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlX3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MzRweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQ1MjlweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDsgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQTZBNkE2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm91dF9yZWN0e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNzFweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQzNzNweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0M0QzRDNDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5fcmVjdHtcclxuICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTlweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQzNzZweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbl90ZXh0e1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwNy40NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzMzUuNDFweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQzODdweDtcclxuICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBNkE2QTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5vdXRlcl90ZXh0ZmllbGRfcGhvbmV7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjcxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0MzA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0M0QzRDNDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5uZXJfdGV4dGZpZWxkX3Bob25le1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDMyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDMxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5uZXJfdGV4dGZpZWxkX3Bob25lX3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzMzRweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQzMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBNkE2QTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAub3V0ZXJfdGV4dGZpZWxkX3NlbGVjdHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDlweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2NjFweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQzMDdweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0M0QzRDNDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5uZXJfdGV4dGZpZWxkX3NlbGVjdHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDNweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3MTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQzMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbm5lcl90ZXh0ZmllbGRfc2VsZWN0X3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDlweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNzI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0MzIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm91dGVyX3RleHRmaWVsZF9lbWFpbHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDlweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2NjFweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQyNDFweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0M0QzRDNDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5uZXJfdGV4dGZpZWxkX2VtYWlse1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDcxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDI0NHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5uZXJfdGV4dGZpZWxkX2VtYWlsX3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3MjRweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQyNTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBNkE2QTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5uZXJfaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjIzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDMzOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDE1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5uZXJfdGV4dGZpZWxkX3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzMzRweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQyNTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBNkE2QTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5uZXJfdGV4dGZpZWxkX25hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0MjQ0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm91dGVyX3RleHRmaWVsZF9uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI3MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDI0MXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQzRDNEM0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcclxuIl19 */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\Common\\\\Services\\\\Contact.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./Common/Services/Development.js":
/*!****************************************!*\
  !*** ./Common/Services/Development.js ***!
  \****************************************/
/*! exports provided: Development, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Development", function() { return Development; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\Common\\Services\\Development.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Development extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-200049093" + " " + "outer_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-200049093" + " " + "top_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, "OUR TOP-END JAVA DEVELOPMENT SERVICES"), __jsx("div", {
      className: "jsx-200049093" + " " + "java_development_image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-200049093" + " " + "inner_image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-200049093" + " " + "enterprise_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }, "Enterprise Java Development"), __jsx("div", {
      className: "jsx-200049093" + " " + "enterprise_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, "Enterprises face a sea of challenges in a ", __jsx("br", {
      className: "jsx-200049093",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 63
      }
    }), "quest to constantly expand and stay", __jsx("br", {
      className: "jsx-200049093",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 56
      }
    }), "competitive. Our Java enterprise", __jsx("br", {
      className: "jsx-200049093",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 54
      }
    }), "development services are specifically aimed", __jsx("br", {
      className: "jsx-200049093",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 66
      }
    }), "at boosting the enterprise growth in a well ", __jsx("br", {
      className: "jsx-200049093",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 67
      }
    }), "and sustained manner. Lorem ipsum, or ", __jsx("br", {
      className: "jsx-200049093",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 61
      }
    }), "lipsum as it is sometimes known, is dummy", __jsx("br", {
      className: "jsx-200049093",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 64
      }
    }), "text used in laying out print, graphic or web", __jsx("br", {
      className: "jsx-200049093",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 69
      }
    }), "designs."), __jsx("div", {
      className: "jsx-200049093" + " " + "outer_button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "jsx-200049093" + " " + "inner_button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }, "Request A Free Consultation"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "200049093",
      __self: this
    }, ".top_header.jsx-200049093{position:absolute;width:780px;height:42px;left:273px;top:1542px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:36px;line-height:42px;text-align:center;color:#000000;}.java_development_image.jsx-200049093{position:absolute;width:640px;height:503px;left:0px;top:1691px;background:url(java_developmet.png);border:2px solid black;}.inner_image.jsx-200049093{position:absolute;width:619px;height:527px;left:20px;top:1703px;border:2px solid grey;}.enterprise_header.jsx-200049093{position:absolute;width:302px;height:98px;left:650px;top:1721px;font-family:Roboto;font-style:normal;font-weight:500;font-size:42px;line-height:49px;color:#222222;}.enterprise_text.jsx-200049093{position:absolute;width:476px;height:259px;left:650px;top:1837px;font-family:Roboto;font-style:normal;font-weight:300;font-size:24px;line-height:28px;color:#444444;border:1px solid black;}.outer_button.jsx-200049093{position:absolute;width:284px;height:50px;left:650px;top:2140px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.inner_button.jsx-200049093{position:absolute;width:202px;height:19px;left:688px;top:2155px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#184A88;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXENvbW1vblxcU2VydmljZXNcXERldmVsb3BtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DNEIsQUFLdUMsQUFjQSxBQVNBLEFBUUEsQUFhQSxBQWNBLEFBV0Esa0JBcEVOLEFBY0EsQUFTQSxBQVFBLEFBYUEsQUFjQSxBQVdBLFlBcEVBLEFBY0MsQUFTQSxBQVFELEFBYUMsQUFjRCxBQVdBLFlBcEVELEFBK0JBLEFBMkJBLEFBV0EsQ0F2REYsQUFTQyxBQXFCQyxTQTdCQSxDQWRBLEFBdUJBLEFBUUEsQUEyQkEsQUFXQSxDQXpCQSxTQTdCeUIsQ0FkakIsQUF1QkUsQUFRRixBQTJCQSxBQVdBLENBekJBLGtCQTNDRCxBQStCQSxBQTJCTyxBQVdQLENBekJBLEVBckJ0QixhQVQwQixFQWJILEFBK0JILEFBc0NHLENBekJILE1BY00sU0ExQlAsQ0FhQSxFQTVDQSxBQXFFQSxFQXhEbkIsUUE2Q3NCLEVBMUJELENBYUEsRUE1Q0EsQUFxRUEsYUFYckIsQ0ExQmtCLENBYUEsRUE1Q0ksQUFxRUwsV0FyQ2pCLENBY0QsTUE3Q21CLGNBQ2xCLEdBNENBLHVDQXdCdUIsNkZBQ0Qsa0JBQ0osY0FDbEIiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcQ29tbW9uXFxTZXJ2aWNlc1xcRGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY2xhc3MgRGV2ZWxvcG1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcF9oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBPVVIgVE9QLUVORCBKQVZBIERFVkVMT1BNRU5UIFNFUlZJQ0VTXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqYXZhX2RldmVsb3BtZW50X2ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50ZXJwcmlzZV9oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbnRlcnByaXNlIEphdmEgRGV2ZWxvcG1lbnRcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudGVycHJpc2VfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVudGVycHJpc2VzIGZhY2UgYSBzZWEgb2YgY2hhbGxlbmdlcyBpbiBhIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3QgdG8gY29uc3RhbnRseSBleHBhbmQgYW5kIHN0YXk8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICBjb21wZXRpdGl2ZS4gT3VyIEphdmEgZW50ZXJwcmlzZTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXZlbG9wbWVudCBzZXJ2aWNlcyBhcmUgc3BlY2lmaWNhbGx5IGFpbWVkPGJyLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdCBib29zdGluZyB0aGUgZW50ZXJwcmlzZSBncm93dGggaW4gYSB3ZWxsIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmQgc3VzdGFpbmVkIG1hbm5lci4gTG9yZW0gaXBzdW0sIG9yIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaXBzdW0gYXMgaXQgaXMgc29tZXRpbWVzIGtub3duLCBpcyBkdW1teTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dCB1c2VkIGluIGxheWluZyBvdXQgcHJpbnQsIGdyYXBoaWMgb3Igd2ViPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzaWducy5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCBBIEZyZWUgQ29uc3VsdGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAub3V0ZXJfd3JhcHBlcnsgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudG9wX2hlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNzNweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDE1NDJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuamF2YV9kZXZlbG9wbWVudF9pbWFnZXtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTY5MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChqYXZhX2RldmVsb3BtZXQucG5nKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmlubmVyX2ltYWdle1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MjdweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTcwM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgZ3JleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5lbnRlcnByaXNlX2hlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOThweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2NTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDE3MjFweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDlweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5lbnRlcnByaXNlX3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NzZweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTgzN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2tcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5vdXRlcl9idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyODRweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmlubmVyX2J1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2ODhweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDIxNTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXZlbG9wbWVudFxyXG4iXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\Common\\\\Services\\\\Development.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Development);

/***/ }),

/***/ "./Common/Services/Javafactory.js":
/*!****************************************!*\
  !*** ./Common/Services/Javafactory.js ***!
  \****************************************/
/*! exports provided: Javafactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Javafactory", function() { return Javafactory; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\Common\\Services\\Javafactory.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Javafactory extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1061214595" + " " + "outer_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1061214595" + " " + "inner_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1061214595" + " " + "java_factory_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, "JAVA FACTORY PROCESS"), __jsx("div", {
      className: "jsx-1061214595" + " " + "java_image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1061214595",
      __self: this
    }, ".outer_wrapper.jsx-1061214595{position:absolute;width:1300px;height:703px;left:0px;top:785px;}.inner_wrapper.jsx-1061214595{position:absolute;width:1300px;height:703px;left:0px;top:785px;background:#221B26;}.java_factory_header.jsx-1061214595{position:absolute;width:420px;height:42px;left:443px;top:822px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:36px;line-height:42px;text-align:center;color:#FFFFFF;}.java_image.jsx-1061214595{position:absolute;width:1245px;height:626px;left:0px;top:844px;background:url('java.png');border:2px solid white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXENvbW1vblxcU2VydmljZXNcXEphdmFmYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCNEIsQUFHdUMsQUFRQSxBQVNBLEFBY0Esa0JBOUJULEFBUUksQUFTRCxBQWNDLFlBYkQsQ0FqQkgsQUFRSSxBQXVCQSxXQWJGLEVBakJOLEFBUUksQUF1QkEsU0E5QkgsQUFRSSxBQVNBLEFBY0EsVUE3QmQsQUFPdUIsQUFTQSxBQWNRLG1CQXRCL0IsQUFTc0IsUUFjSSxVQWJILGFBY3ZCLE1BYm1CLGVBQ0UsaUJBQ0Msa0JBQ0osY0FDbEIiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcQ29tbW9uXFxTZXJ2aWNlc1xcSmF2YWZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY2xhc3MgSmF2YWZhY3RvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImphdmFfZmFjdG9yeV9oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBKQVZBIEZBQ1RPUlkgUFJPQ0VTUyBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImphdmFfaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5vdXRlcl93cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMzAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwM3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA3ODVweDtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5uZXJfd3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDc4NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjFCMjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5qYXZhX2ZhY3RvcnlfaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQ0M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogODIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmphdmFfaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MjZweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4NDRweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2phdmEucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfSA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSmF2YWZhY3RvcnlcclxuIl19 */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\Common\\\\Services\\\\Javafactory.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Javafactory);

/***/ }),

/***/ "./Common/Services/Migration.js":
/*!**************************************!*\
  !*** ./Common/Services/Migration.js ***!
  \**************************************/
/*! exports provided: Migration, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Migration", function() { return Migration; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\Common\\Services\\Migration.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Migration extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-231071027" + " " + "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, "Java Migration Service"), __jsx("div", {
      className: "jsx-231071027" + " " + "inner_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }, "Looking to have your business platform", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 55
      }
    }), "migrated to the Java-based framework to", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 57
      }
    }), "become future-proof? We\u2019re listening! Spineor", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 64
      }
    }), "can assist you in migration services to ", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 60
      }
    }), "ensure a smooth and efficient workflow.", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 59
      }
    }), "Lorem ipsum, or lipsum as it is sometimes", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 62
      }
    }), "known, is dummy text used in laying out ", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 62
      }
    }), "print, graphic or web designs. The passage is", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 67
      }
    }), "attributed to an unknown"), __jsx("div", {
      className: "jsx-231071027" + " " + "button_outer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-231071027" + " " + "button_inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, "Request A Free Consultation"), __jsx("div", {
      className: "jsx-231071027" + " " + "javadev_image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-231071027" + " " + "lock_image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-231071027" + " " + "maintain_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, "Java Maintenance And Support"), __jsx("div", {
      className: "jsx-231071027" + " " + "maintain_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, "Apps run smoothly if they\u2019re maintained", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 56
      }
    }), "from time to time. Our Java application", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 57
      }
    }), "maintenance support ensures that your", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 56
      }
    }), "apps always run at their peak performance", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 61
      }
    }), "so your business won\u2019t have to suffer.", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 59
      }
    }), "Lorem ipsum, or lipsum as it is sometimes", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 63
      }
    }), "known, is dummy text used in laying out", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 62
      }
    }), "print, graphic or web designs. The passage", __jsx("br", {
      className: "jsx-231071027",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 65
      }
    }), "is attributed to an unknown"), __jsx("div", {
      className: "jsx-231071027" + " " + "maintain_outer_button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-231071027" + " " + "maintain_inner_button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, " Request A Free Consultation"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "231071027",
      __self: this
    }, ".header.jsx-231071027{position:absolute;width:430px;height:49px;left:101px;top:2419px;font-family:Roboto;font-style:normal;font-weight:500;font-size:42px;line-height:49px;color:#222222;}.inner_text.jsx-231071027{position:absolute;width:476px;height:244px;left:101px;top:2483px;font-family:Roboto;font-style:normal;font-weight:300;font-size:24px;line-height:28px;color:#444444;}.button_outer.jsx-231071027{position:absolute;width:284px;height:50px;left:101px;top:2778px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.button_inner.jsx-231071027{position:absolute;width:202px;height:19px;left:139px;top:2793px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#184A88;}.javadev_image.jsx-231071027{position:absolute;width:662px;height:510px;left:622px;top:2340px;background:url(javadev.png);border:2px solid black;}.lock_image.jsx-231071027{position:absolute;width:596px;height:343px;left:26px;top:3119px;background:url(Untitled-1.png);border:2px solid black;}.maintain_header.jsx-231071027{position:absolute;width:355px;height:98px;left:650px;top:3051px;font-family:Roboto;font-style:normal;font-weight:500;font-size:42px;line-height:49px;color:#222222;}.maintain_text.jsx-231071027{position:absolute;width:464px;height:260px;left:650px;top:3167px;font-family:Roboto;font-style:normal;font-weight:300;font-size:24px;line-height:28px;color:#444444;}.maintain_outer_button.jsx-231071027{position:absolute;width:284px;height:50px;left:650px;top:3453px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.maintain_inner_button.jsx-231071027{position:absolute;width:202px;height:19px;left:688px;top:3468px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#184A88;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXENvbW1vblxcU2VydmljZXNcXE1pZ3JhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QzRCLEFBR3VDLEFBYUEsQUFhQSxBQVdBLEFBZ0JBLEFBU0EsQUFTQSxBQWFBLEFBYUEsQUFXQSxrQkEzR04sQUFhQSxBQWFBLEFBV0EsQUFnQkEsQUFTQSxBQVNBLEFBYUEsQUFhQSxBQVdBLFlBM0dBLEFBYUMsQUFhRCxBQVdBLEFBZ0JDLEFBU0EsQUFTRCxBQWFDLEFBYUQsQUFXQSxZQTNHRCxBQTBCQSxBQVdBLEFBa0NBLEFBMEJBLEFBV0EsQ0EvRkEsQUF3Q0EsQUFTRCxBQXNCQyxVQW5GQSxBQTBCQSxBQVdBLEFBeUJBLEFBU0EsQUEwQkEsQUFXQSxDQS9GQSxBQXdDQSxBQStCQSxVQW5GUSxBQTBCQSxBQVdBLEFBeUJZLEFBU1osQUEwQkEsQUFXQSxDQS9GQSxBQXdDUyxBQStCVCxrQkFuRkQsQUEwQk8sQUFXUCxBQWtDQSxBQTBCTyxBQVdQLENBL0ZBLEFBdUVBLFNBOUJ2QixFQVNBLE1BOURxQixBQXFDRyxBQWtDSCxBQXFDRyxDQS9GSCxBQXVFQSxNQTFETSxBQXVFQSxRQTVDMUIsQ0FwRG1CLEFBdUVBLENBMURBLEFBZ0RuQixBQXVCbUIsRUEvQ0EsQUF1RUEsVUFsRkcsQUF1RUEsRUFoR0QsQUF1RUEsQ0ExREEsQUF1RUEsRUEvQ0EsQUF1RUEsYUFsRnJCLEFBdUVBLENBaEdrQixBQXVFQSxDQTFEQSxBQXVFQSxFQS9DRCxBQXVFQSxXQTNHakIsQUF1RUEsQ0ExREEsQUF1RUEsOERBL0N1QixBQXVFQSw2RkF0RUQsQUF1RUEsa0JBdEVKLEFBdUVBLGNBdEVsQixBQXVFQSIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXHNwaW5lb3ItbmV4dFxcc3BpbmVvci1uZXh0XFxDb21tb25cXFNlcnZpY2VzXFxNaWdyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1pZ3JhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIEphdmEgTWlncmF0aW9uIFNlcnZpY2UgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgTG9va2luZyB0byBoYXZlIHlvdXIgYnVzaW5lc3MgcGxhdGZvcm08YnIvPlxyXG4gICAgICAgICAgICAgICAgIG1pZ3JhdGVkIHRvIHRoZSBKYXZhLWJhc2VkIGZyYW1ld29yayB0bzxici8+XHJcbiAgICAgICAgICAgICAgICAgIGJlY29tZSBmdXR1cmUtcHJvb2Y/IFdl4oCZcmUgbGlzdGVuaW5nISBTcGluZW9yPGJyLz5cclxuICAgICAgICAgICAgICAgICAgIGNhbiBhc3Npc3QgeW91IGluIG1pZ3JhdGlvbiBzZXJ2aWNlcyB0byA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgZW5zdXJlIGEgc21vb3RoIGFuZCBlZmZpY2llbnQgd29ya2Zsb3cuPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgb3IgbGlwc3VtIGFzIGl0IGlzIHNvbWV0aW1lczxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgIGtub3duLCBpcyBkdW1teSB0ZXh0IHVzZWQgaW4gbGF5aW5nIG91dCA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICBwcmludCwgZ3JhcGhpYyBvciB3ZWIgZGVzaWducy4gVGhlIHBhc3NhZ2UgaXM8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlZCB0byBhbiB1bmtub3duIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbl9vdXRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25faW5uZXJcIj5SZXF1ZXN0IEEgRnJlZSBDb25zdWx0YXRpb248L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiamF2YWRldl9pbWFnZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NrX2ltYWdlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW50YWluX2hlYWRlclwiPkphdmEgTWFpbnRlbmFuY2UgQW5kIFN1cHBvcnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbnRhaW5fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgQXBwcyBydW4gc21vb3RobHkgaWYgdGhleeKAmXJlIG1haW50YWluZWQ8YnIvPlxyXG4gICAgICAgICAgICAgICAgIGZyb20gdGltZSB0byB0aW1lLiBPdXIgSmF2YSBhcHBsaWNhdGlvbjxici8+XHJcbiAgICAgICAgICAgICAgICAgIG1haW50ZW5hbmNlIHN1cHBvcnQgZW5zdXJlcyB0aGF0IHlvdXI8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgYXBwcyBhbHdheXMgcnVuIGF0IHRoZWlyIHBlYWsgcGVyZm9ybWFuY2U8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHNvIHlvdXIgYnVzaW5lc3Mgd29u4oCZdCBoYXZlIHRvIHN1ZmZlci48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgb3IgbGlwc3VtIGFzIGl0IGlzIHNvbWV0aW1lczxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBrbm93biwgaXMgZHVtbXkgdGV4dCB1c2VkIGluIGxheWluZyBvdXQ8YnIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgIHByaW50LCBncmFwaGljIG9yIHdlYiBkZXNpZ25zLiBUaGUgcGFzc2FnZTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaXMgYXR0cmlidXRlZCB0byBhbiB1bmtub3duIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW50YWluX291dGVyX2J1dHRvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWludGFpbl9pbm5lcl9idXR0b25cIj4gUmVxdWVzdCBBIEZyZWUgQ29uc3VsdGF0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjQxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmlubmVyX3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NzZweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjQ4M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbl9vdXRlcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI4NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDFweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDI3NzhweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uX2lubmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEzOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjc5M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuamF2YWRldl9pbWFnZXtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY2MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNjIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMzQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGphdmFkZXYucG5nKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICBibGFja1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxvY2tfaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1OTZweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzMTE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFVudGl0bGVkLTEucG5nKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWFpbnRhaW5faGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzU1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzA1MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyOyAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWFpbnRhaW5fdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzMTY3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWFpbnRhaW5fb3V0ZXJfYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjg0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzQ1M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzE4NEE4ODtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tYWludGFpbl9pbm5lcl9idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNjg4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzNDY4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE4NEE4ODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pZ3JhdGlvblxyXG4iXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\Common\\\\Services\\\\Migration.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Migration);

/***/ }),

/***/ "./Common/Services/Topbanner.js":
/*!**************************************!*\
  !*** ./Common/Services/Topbanner.js ***!
  \**************************************/
/*! exports provided: Topbanner, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topbanner", function() { return Topbanner; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\Common\\Services\\Topbanner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Topbanner extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-3802556344" + " " + "outer_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 16
      }
    }), __jsx("div", {
      className: "jsx-3802556344" + " " + "heading_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 16
      }
    }, "EXPERIENCE THE BEST JAVA HAS TO OFFER WITH US"), __jsx("div", {
      className: "jsx-3802556344" + " " + "heading_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 16
      }
    }, "At Spineor we possess a ", __jsx("br", {
      className: "jsx-3802556344",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 40
      }
    }), "highly-skilled team of Java", __jsx("br", {
      className: "jsx-3802556344",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 43
      }
    }), "developers that has proven its", __jsx("br", {
      className: "jsx-3802556344",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 47
      }
    }), "abilities and competence by ", __jsx("br", {
      className: "jsx-3802556344",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 46
      }
    }), "delivering world-class", __jsx("br", {
      className: "jsx-3802556344",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 40
      }
    }), "Java-based web solutions. Work", __jsx("br", {
      className: "jsx-3802556344",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 49
      }
    }), "with us to feel the difference!"), __jsx("div", {
      className: "jsx-3802556344" + " " + "button_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }
    }), __jsx("div", {
      className: "jsx-3802556344" + " " + "button_inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 16
      }
    }, "Lets Starts"), __jsx("div", {
      className: "jsx-3802556344" + " " + "java_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 16
      }
    }, __jsx("div", {
      className: "jsx-3802556344" + " " + "java",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 16
      }
    }, "hello")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3802556344",
      __self: this
    }, ".outer_wrapper.jsx-3802556344{position:absolute;width:1300px;height:630px;left:0px;top:74px;background:#FFFFFF;border:2px solid black;}.heading_wrapper.jsx-3802556344{position:absolute;width:435px;height:277px;left:126px;top:253px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:56px;line-height:66px;color:#333333;}.heading_text.jsx-3802556344{position:absolute;width:515px;height:291px;left:650px;top:218px;font-family:Roboto;font-style:normal;font-weight:300;font-size:36px;line-height:42px;color:#333333;}.button_wrapper.jsx-3802556344{position:absolute;width:158px;height:50px;left:650px;top:554px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.button_inner.jsx-3802556344{position:absolute;width:78px;height:19px;left:688px;top:569px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#184A88;}.java.jsx-3802556344{position:absolute;left:12.92%;right:12.92%;top:0%;bottom:0%;}.java_wrapper.jsx-3802556344{position:absolute;width:564px;height:507px;left:-291px;top:174px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXENvbW1vblxcU2VydmljZXNcXFRvcGJhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjJCLEFBR21DLEFBU0EsQUFhQSxBQWFBLEFBV0EsQUFnQkssQUFPTCxrQkFwRUwsQUFTRCxBQWFBLEFBYUEsQUFXRCxBQWdCSyxBQU9KLFdBdEJBLENBckNDLEFBYUEsQUFhRCxBQTJCSyxBQU9KLENBckVBLFVBK0NGLENBWEEsQ0ExQkEsQUFhQSxBQXdDQSxBQU9DLENBckVILE1BK0RLLEVBaEJKLENBOUNELEFBbUNDLENBMUJBLEFBYUEsQ0ErQ0EsS0FOWCxFQTlEb0IsQUE4Q0EsQ0FYQSxDQTFCQSxBQWFBLENBK0NwQixnQkFuRUQsQUE2Q29CLENBWE8sQ0ExQlAsQUFhQSxnQkF5QkMsRUFyQ0YsQUFhRCxHQXRCakIsR0FtQ3VCLFVBWlAsQ0FiQSxBQXFDQSxXQVhHLEdBWkQsQ0FiQSxBQXFDQSxjQVhsQixFQVplLENBYkEsQUFxQ0QsYUF2QmQsQ0FiQSw0REFxQ29CLDZGQUNELGtCQUNKLGNBQ2YiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcQ29tbW9uXFxTZXJ2aWNlc1xcVG9wYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvcGJhbm5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgIEVYUEVSSUVOQ0UgVEhFIEJFU1QgSkFWQSBIQVMgVE8gT0ZGRVIgV0lUSCBVUyBcclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgIEF0IFNwaW5lb3Igd2UgcG9zc2VzcyBhIDxici8+XHJcbiAgICAgICAgICAgICAgIGhpZ2hseS1za2lsbGVkIHRlYW0gb2YgSmF2YTxici8+XHJcbiAgICAgICAgICAgICAgICBkZXZlbG9wZXJzIHRoYXQgaGFzIHByb3ZlbiBpdHM8YnIvPlxyXG4gICAgICAgICAgICAgICAgIGFiaWxpdGllcyBhbmQgY29tcGV0ZW5jZSBieSA8YnIvPlxyXG4gICAgICAgICAgICAgICAgIGRlbGl2ZXJpbmcgd29ybGQtY2xhc3M8YnIvPlxyXG4gICAgICAgICAgICAgICAgICBKYXZhLWJhc2VkIHdlYiBzb2x1dGlvbnMuIFdvcms8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgd2l0aCB1cyB0byBmZWVsIHRoZSBkaWZmZXJlbmNlIVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25faW5uZXJcIj5cclxuICAgICAgICAgICAgICAgTGV0cyBTdGFydHMgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImphdmFfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImphdmFcIj5cclxuICAgICAgICAgICAgICAgaGVsbG9cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgIC5vdXRlcl93cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjMwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDc0cHg7IFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgYmxhY2tcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuaGVhZGluZ193cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQzNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNzdweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEyNnB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyNTNweDsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2NnB4OyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmhlYWRpbmdfdGV4dHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MTVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjkxcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA2NTBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMjE4cHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDJweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMzsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuYnV0dG9uX3dyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTU4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA2NTBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogNTU0cHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5idXR0b25faW5uZXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDY4OHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1NjlweDsgIFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDsgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmphdmF7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMi45MiU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEyLjkyJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCU7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmphdmFfd3JhcHBlcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1NjRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTA3cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjkxcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE3NHB4O1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcGJhbm5lclxyXG4iXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\Common\\\\Services\\\\Topbanner.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Topbanner);

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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\common\\OurInfastructure\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Banner extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-4029196647" + " " + "inner_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 16
      }
    }, "Our Infrastructure"), __jsx("div", {
      className: "jsx-4029196647" + " " + "inner_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 16
      }
    }, "Our benefit is our team of skilled,", __jsx("br", {
      className: "jsx-4029196647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 51
      }
    }), "hard-working and devoted staff ", __jsx("br", {
      className: "jsx-4029196647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 48
      }
    }), "working to maintain the", __jsx("br", {
      className: "jsx-4029196647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 40
      }
    }), "corporate ideals of excellence of", __jsx("br", {
      className: "jsx-4029196647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 51
      }
    }), "Spineor Conceptions."), __jsx("div", {
      className: "jsx-4029196647" + " " + "button_outer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }
    }), __jsx("div", {
      className: "jsx-4029196647" + " " + "button-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    }, "Get in touch"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4029196647",
      __self: this
    }, ".inner_header.jsx-4029196647{position:absolute;width:435px;height:186px;left:111px;top:298px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:70px;line-height:82px;color:#333333;}.inner_text.jsx-4029196647{position:absolute;width:515px;height:223px;left:656px;top:246px;font-family:Roboto;font-style:normal;font-weight:300;font-size:36px;line-height:42px;color:#333333;}.button_outer.jsx-4029196647{position:absolute;width:158px;height:50px;left:658px;top:488px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.button_inner.jsx-4029196647{position:absolute;width:86px;height:19px;left:692px;top:503px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#184A88;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbW1vblxcT3VySW5mYXN0cnVjdHVyZVxcYmFubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCMkIsQUFHbUMsQUFhQSxBQWFBLEFBWUEsa0JBckNOLEFBYUEsQUFhQSxBQVlELFdBQ0MsQ0F0Q0MsQUFhQSxBQWFELFdBYUQsQ0FaQSxDQTFCQSxBQWFBLFNBMEJELENBWkEsQ0ExQkEsQUFhQSxRQTJCUyxDQVpBLENBM0JBLEFBYUEsaUJBMkJELENBWk8sQ0EzQlAsQUFhQSxnQkEyQkMsRUF2Q0YsQUFhRCxNQWNNLFVBYlAsQ0FiQSxBQXVDQSxXQVpHLEdBYkQsQ0FiQSxBQXVDQSxjQVpsQixFQWJlLENBYkEsQUF5Q0QsYUEzQmQsQ0FiQSw0REF5Q29CLDZGQUNELGtCQUVKLGNBQ2YiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcY29tbW9uXFxPdXJJbmZhc3RydWN0dXJlXFxiYW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY2xhc3MgQmFubmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgIE91ciBJbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICBPdXIgYmVuZWZpdCBpcyBvdXIgdGVhbSBvZiBza2lsbGVkLDxici8+XHJcbiAgICAgICAgICAgICAgICBoYXJkLXdvcmtpbmcgYW5kIGRldm90ZWQgc3RhZmYgPGJyLz5cclxuICAgICAgICAgICAgICAgIHdvcmtpbmcgdG8gbWFpbnRhaW4gdGhlPGJyLz5cclxuICAgICAgICAgICAgICAgICBjb3Jwb3JhdGUgaWRlYWxzIG9mIGV4Y2VsbGVuY2Ugb2Y8YnIvPlxyXG4gICAgICAgICAgICAgICAgICBTcGluZW9yIENvbmNlcHRpb25zLlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25fb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgIEdldCBpbiB0b3VjaFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAuaW5uZXJfaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQzNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxODZweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDExMXB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyOThweDsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MnB4OyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5pbm5lcl90ZXh0e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUxNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjNweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDY1NnB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyNDZweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4OyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5idXR0b25fb3V0ZXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTU4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA2NThweDtcclxuICAgICAgICAgICAgICAgIHRvcDogNDg4cHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuYnV0dG9uX2lubmVye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg2cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA2OTJweDtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAzcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE4NEE4ODtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJcclxuIl19 */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\common\\\\OurInfastructure\\\\banner.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Banner);

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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Footer\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Footer = () => {
  return __jsx("div", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3620001664" + " " + "footer-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3620001664" + " " + "quick-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, "Quick Links"), __jsx("div", {
    className: "jsx-3620001664" + " " + "service-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Services"), __jsx("div", {
    className: "jsx-3620001664" + " " + "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Contact"), __jsx("div", {
    className: "jsx-3620001664" + " " + "quick-links-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Home", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), "About", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), "Success", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), "Stories", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), "Insights", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), "Career", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), "Contact"), __jsx("div", {
    className: "jsx-3620001664" + " " + "service-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Open Source Implementation", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), "Scala Programming", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), "Restful API'S", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), "Automated Devops Deployment", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), "Big Data Analytics", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), "Native Apps Building"), __jsx("div", {
    className: "jsx-3620001664" + " " + "service-inner2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Full/Mean Stack Development", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), "Third Party Integrations", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), "Crypto Currency Development", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), "Java Programming", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), "Us Staffing"), __jsx("div", {
    className: "jsx-3620001664" + " " + "contact-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "+91(991)502-1146", __jsx("br", {
    className: "jsx-3620001664",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), "hr@spineor.com"), __jsx("div", {
    className: "jsx-3620001664" + " " + "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "Copyright2020-Spineor.com"), __jsx("div", {
    className: "jsx-3620001664" + " " + "facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3620001664" + " " + "linkedin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3620001664" + " " + "youtube",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3620001664",
    __self: undefined
  }, ".footer-box.jsx-3620001664{position:absolute;width:1344px;height:434px;left:0px;top:5415px;background:#000000;}.quick-links.jsx-3620001664{position:absolute;width:125px;height:28px;left:94px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}.service-links.jsx-3620001664{position:absolute;width:125px;height:28px;left:406px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}.contact.jsx-3620001664{position:absolute;width:125px;height:28px;left:1044px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}.quick-links-inner.jsx-3620001664{position:absolute;width:129px;height:186px;left:94px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}.service-inner.jsx-3620001664{position:absolute;width:258px;height:186px;left:406px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}.service-inner2.jsx-3620001664{position:absolute;width:245px;height:155px;left:723px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}.contact-inner.jsx-3620001664{position:absolute;width:154px;height:62px;left:1044px;top:147px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}.copyright.jsx-3620001664{position:absolute;width:149px;height:14px;left:615px;top:393px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;color:#DCDCDC;}.youtube.jsx-3620001664{position:absolute;left:110%;right:110%;top:110%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEZvb3RlclxcZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFZ0IsQUFJMkIsQUFTQSxBQWNBLEFBY0EsQUFjQSxBQWNBLEFBY0EsQUFjQSxBQWNBLEFBY0Esa0JBeEhMLEFBU0QsQUFjQSxBQWNBLEFBY0EsQUFjQSxBQWNBLEFBY0EsQUFjQSxBQWNGLFVBQ0MsRUFoSEMsQUFjQSxBQWNBLEFBY0MsQUFjQSxBQWNBLEFBY0QsQUFjQSxDQTNHQyxRQTBISixHQWhIQyxBQWNDLEFBY0MsQUF3REEsQUFjRCxDQXhERCxBQWNDLEFBY0EsQ0EvRUYsSUEwSGIsSUFoSGEsQ0FURSxBQXVCRixBQTRCQyxBQXdEQSxDQXRFRCxBQTRCQyxBQWNBLEFBY0EsT0FuRlMsQ0FjQSxDQWNBLEFBY0EsQUF3REEsQ0EzR0EsQUFpRUEsQUFjQSxBQWNBLGdCQW5GRCxDQWNBLENBY0EsQUFjQSxBQXdEQSxDQTNHdEIsQUFpRXNCLEFBY0EsQUFjQSxlQW5GRixDQWNBLENBY0EsQUFjRyxBQXdEQSxDQTFDQSxBQWNBLEFBY0EsYUFuRkosQ0FjQSxDQWNBLEdBY0EsQUF3REEsQ0ExQ0EsQUFjQSxBQWNBLFNBbkZFLENBY0EsQ0FjQSxHQWNBLEFBd0RBLENBMUNBLEFBY0EsQUFjQSxXQW5GSCxDQWNBLENBY0EsR0FjQSxBQXdEQSxDQTFDQSxBQWNBLEFBY0EsUUFuRmxCLENBY0EsQ0FjQSxHQWNBLEFBd0RBLENBMUNBLEFBY0EsQUFjQSIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXHNwaW5lb3ItbmV4dFxcc3BpbmVvci1uZXh0XFxjb21wb25lbnRzXFxGb290ZXJcXGZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiZm9vdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwicXVpY2stbGlua3NcIj5cclxuICAgICAgICAgICAgICAgIFF1aWNrIExpbmtzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInNlcnZpY2UtbGlua3NcIj5cclxuICAgICAgICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwicXVpY2stbGlua3MtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIEhvbWUgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgQWJvdXQgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgU3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgPGJyLz4gXHJcbiAgICAgICAgICAgICAgICBTdG9yaWVzXHJcbiAgICAgICAgICAgICAgICA8YnIvPiBcclxuICAgICAgICAgICAgICAgIEluc2lnaHRzXHJcbiAgICAgICAgICAgICAgICA8YnIvPiBcclxuICAgICAgICAgICAgICAgIENhcmVlclxyXG4gICAgICAgICAgICAgICAgPGJyLz4gXHJcbiAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInNlcnZpY2UtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIE9wZW4gU291cmNlIEltcGxlbWVudGF0aW9uIFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFNjYWxhIFByb2dyYW1taW5nXHJcbiAgICAgICAgICAgICAgICA8YnIvPiBcclxuICAgICAgICAgICAgICAgIFJlc3RmdWwgQVBJJ1MgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgQXV0b21hdGVkIERldm9wcyBEZXBsb3ltZW50IFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIEJpZyBEYXRhIEFuYWx5dGljcyBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBOYXRpdmUgQXBwcyBCdWlsZGluZyBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwic2VydmljZS1pbm5lcjJcIj5cclxuICAgICAgICAgICAgICAgIEZ1bGwvTWVhbiBTdGFjayBEZXZlbG9wbWVudCBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBUaGlyZCBQYXJ0eSBJbnRlZ3JhdGlvbnNcclxuICAgICAgICAgICAgICAgIDxici8+IFxyXG4gICAgICAgICAgICAgICAgQ3J5cHRvIEN1cnJlbmN5IERldmVsb3BtZW50IFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIEphdmEgUHJvZ3JhbW1pbmcgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgVXMgU3RhZmZpbmcgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImNvbnRhY3QtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICs5MSg5OTEpNTAyLTExNDYgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgaHJAc3BpbmVvci5jb21cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiY29weXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICBDb3B5cmlnaHQyMDIwLVNwaW5lb3IuY29tXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImZhY2Vib29rXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJsaW5rZWRpblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwieW91dHViZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIFxyXG4gICAgLmZvb3Rlci1ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTM0NHB4O1xyXG4gICAgICAgIGhlaWdodDogNDM0cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHRvcDogNTQxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1aWNrLWxpbmtzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBsZWZ0OiA5NHB4O1xyXG4gICAgICAgIHRvcDogODhweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS1saW5rcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbGVmdDogNDA2cHg7XHJcbiAgICAgICAgdG9wOiA4OHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBsZWZ0OiAxMDQ0cHg7XHJcbiAgICAgICAgdG9wOiA4OHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5xdWljay1saW5rcy1pbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMjlweDtcclxuICAgICAgICBoZWlnaHQ6IDE4NnB4O1xyXG4gICAgICAgIGxlZnQ6IDk0cHg7XHJcbiAgICAgICAgdG9wOiAxNDZweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTcwJTtcclxuICAgICAgICBjb2xvcjogI0VCRUJFQjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS1pbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyNThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4NnB4O1xyXG4gICAgICAgIGxlZnQ6IDQwNnB4O1xyXG4gICAgICAgIHRvcDogMTQ2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3MCU7XHJcbiAgICAgICAgY29sb3I6ICNFQkVCRUI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2UtaW5uZXIyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI0NXB4O1xyXG4gICAgICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICAgICAgbGVmdDogNzIzcHg7XHJcbiAgICAgICAgdG9wOiAxNDZweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTcwJTtcclxuICAgICAgICBjb2xvcjogI0VCRUJFQjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNTRweDtcclxuICAgICAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICAgICAgbGVmdDogMTA0NHB4O1xyXG4gICAgICAgIHRvcDogMTQ3cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3MCU7XHJcbiAgICAgICAgY29sb3I6ICNFQkVCRUI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvcHlyaWdodCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNDlweDtcclxuICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgbGVmdDogNjE1cHg7XHJcbiAgICAgICAgdG9wOiAzOTNweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICBjb2xvcjogI0RDRENEQztcclxuICAgIH1cclxuXHJcbiAgICAueW91dHViZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDExMCU7XHJcbiAgICAgICAgcmlnaHQ6IDExMCU7XHJcbiAgICAgICAgdG9wOiAxMTAlO1xyXG4gICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Footer\\\\footer.js */"));
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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Header\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Header = () => {
  return __jsx("div", {
    className: "jsx-282366502",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-282366502" + " " + "nav-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "\\images\\spineor-logo.png",
    className: "jsx-282366502" + " " + "spineor-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-282366502" + " " + "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, "ABOUT"), __jsx("div", {
    className: "jsx-282366502" + " " + "service",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "SEERVICES"), __jsx("div", {
    className: "jsx-282366502" + " " + "success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "SUCCESS STORIES"), __jsx("div", {
    className: "jsx-282366502" + " " + "insights",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "INSIGHTS"), __jsx("div", {
    className: "jsx-282366502" + " " + "career",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "CAREER"), __jsx("div", {
    className: "jsx-282366502" + " " + "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "CONTACT"), __jsx("div", {
    className: "jsx-282366502" + " " + "quote-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-282366502" + " " + "button-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "GET A QUOTE")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "282366502",
    __self: undefined
  }, ".nav-box.jsx-282366502{position:absolute;width:1344px;height:74px;left:0px;top:0px;position:fixed;background:#FFFFFF;}.spineor-logo.jsx-282366502{position:absolute;width:140px;height:41px;left:19px;top:16px;}.about.jsx-282366502{position:absolute;width:45px;height:16px;left:480px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.service.jsx-282366502{position:absolute;width:45px;height:16px;left:572px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.success.jsx-282366502{position:absolute;width:122px;height:16px;left:686px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.insights.jsx-282366502{position:absolute;width:45px;height:16px;left:852px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.career.jsx-282366502{position:absolute;width:45px;height:16px;left:961px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.contact.jsx-282366502{position:absolute;width:45px;height:16px;left:1060px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.quote-button.jsx-282366502{position:absolute;width:122px;height:40px;left:1158px;top:18px;background:#184A88;border-radius:2px;}.button-inner.jsx-282366502{position:absolute;width:90px;height:16px;left:1176px;top:31px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#FFFFFF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhlYWRlclxcaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCd0IsQUFJMkIsQUFVQSxBQVFBLEFBY0EsQUFjQSxBQWNBLEFBY0EsQUFjQSxBQWNBLEFBVUEsa0JBL0dMLEFBVUQsQUFRRCxBQWNBLEFBY0MsQUFjRCxBQWNBLEFBY0EsQUFjQyxBQVVELFdBN0ZDLEFBY0EsQUE0QkEsQUFjQSxBQWNBLEFBd0JBLENBdEdBLEFBb0NBLEFBd0RBLENBdEdBLFVBbUJELEFBY0EsQUE0QkEsQUFjQSxBQWNDLEFBd0JBLENBdEdGLEFBb0NDLEFBd0RDLENBdEdILFNBQ0QsQUFVQyxBQVFBLEFBY0EsQUE0QkEsQUFjQSxDQTVCQSxBQTBDQSxBQXdCQSxDQVZBLE1BckdNLENBVW5CLEFBUXVCLEFBY0EsQUE0QkEsQUFjQSxDQTVCQSxBQTBDQSxBQXdCQSxDQVZBLFlBckdBLEtBa0JELEFBY0EsQUE0QkEsQUFjQSxDQTVCQSxBQTBDQSxBQXdCQSxDQVZBLFlBckd0QixJQWtCdUIsQUFjQSxBQTRCQSxBQWNBLENBNUJBLEFBMENBLEFBd0JBLENBVnZCLGlCQW5GbUIsQUFjQSxBQTRCQSxBQWNBLENBNUJBLEFBMENBLEFBd0JBLGNBN0ZFLEFBY0EsQUE0QkEsQUFjQSxDQTVCQSxBQTBDQSxBQXdCQSxnQkE3RkgsQUFjQSxBQTRCQSxBQWNBLENBNUJBLEFBMENBLEFBd0JBLGFBN0ZsQixBQWNBLEFBNEJBLEFBY0EsQ0E1QkEsQUEwQ0EsQUF3QkEiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcY29tcG9uZW50c1xcSGVhZGVyXFxoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcGluZW9yLWxvZ29cIiBzcmM9XCJcXGltYWdlc1xcc3BpbmVvci1sb2dvLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFCT1VUXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNFRVJWSUNFU1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICBTVUNDRVNTIFNUT1JJRVNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNpZ2h0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIElOU0lHSFRTXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZWVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FSRUVSXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENPTlRBQ1RcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZS1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24taW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBHRVQgQSBRVU9URVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIFxyXG4gICAgLm5hdi1ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTM0NHB4O1xyXG4gICAgICAgIGhlaWdodDogNzRweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwaW5lb3ItbG9nbyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgbGVmdDogMTlweDtcclxuICAgICAgICB0b3A6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDQ4MHB4O1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBsZWZ0OiA1NzJweDtcclxuICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Y2Nlc3Mge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTIycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDY4NnB4O1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5zaWdodHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbGVmdDogODUycHg7XHJcbiAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJlZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbGVmdDogOTYxcHg7XHJcbiAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDEwNjBweDtcclxuICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1b3RlLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMjJweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGVmdDogMTE1OHB4O1xyXG4gICAgICAgIHRvcDogMThweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTg0QTg4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLWlubmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDExNzZweDtcclxuICAgICAgICB0b3A6IDMxcHg7ICAgICAgIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyAgICAgICBcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Header\\\\header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

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
/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonial */ "./components/Home/testimonial.js");
/* harmony import */ var _letstalk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./letstalk */ "./components/Home/letstalk.js");
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Home\\home.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Home = () => {
  return __jsx("div", {
    className: "jsx-160265767",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-160265767" + " " + "box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-160265767" + " " + "box1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Design, Develop, Test & Delivered."), __jsx("div", {
    className: "jsx-160265767" + " " + "box2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Bespoke products & platforms engineered to elevate your customers' experience, earn their loyalty & grow your business."), __jsx("div", {
    className: "jsx-160265767" + " " + "box3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-160265767" + " " + "box4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Explore Services")), __jsx("div", {
    className: "jsx-160265767" + " " + "backimg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-160265767" + " " + "box5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-160265767" + " " + "box6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "A PEOPLE-FIRST APPROACH"), __jsx("div", {
    className: "jsx-160265767" + " " + "box7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Custom Digital Products & Platforms Created by People, for People. Transform your business with our user-centric approach.")), __jsx("div", {
    className: "jsx-160265767" + " " + "box8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-160265767" + " " + "box9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "There are consultancies that focus on UX and UI. There are developers that design and build.", __jsx("br", {
    className: "jsx-160265767",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-160265767",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }), "We deliver the best of all worlds with our agile, end-to-end process. We get rid of your digital development headaches by maximizing efficiencies to deliver transformative solutions that delight users and drive revenue.", __jsx("br", {
    className: "jsx-160265767",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-160265767",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }), "Our mission is to help clients from startup to enterprise optimize their online businesses for unstoppable growth.")), __jsx("div", {
    className: "jsx-160265767" + " " + "box10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-160265767" + " " + "box11",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Learn About Our Capabilities & Culture")))), __jsx(_service__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx(_insights__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(_testimonial__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx(_letstalk__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "160265767",
    __self: undefined
  }, ".box.jsx-160265767{position:absolute;width:1340px;height:630px;top:73px;background:#FFFFFF;}.box1.jsx-160265767{position:absolute;width:586px;height:345px;left:85px;top:205px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:90px;line-height:105px;color:#333333;}.box2.jsx-160265767{position:absolute;width:411px;height:266px;left:754px;top:205px;font-family:Roboto;font-style:normal;font-weight:300;font-size:36px;line-height:42px;color:#222222;}.box3.jsx-160265767{position:absolute;width:194px;height:50px;left:756px;top:504px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.box4.jsx-160265767{position:absolute;width:118px;height:19px;left:39px;top:13px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}.backimg.jsx-160265767{position:absolute;width:1340px;height:859px;left:0px;top:791px;background-color:gray;}.box5.jsx-160265767{position:absolute;width:617px;height:399px;left:33px;top:460px;background:#184A88;}.box6.jsx-160265767{position:absolute;width:540.85px;height:113px;left:37px;top:67px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#FFFFFF;}.box7.jsx-160265767{position:absolute;width:525.23px;height:146px;left:41.03px;top:211px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;color:#FFFFFF;}.box8.jsx-160265767{position:absolute;width:690px;height:243px;left:650px;top:616px;background:#FFFFFF;}.box9.jsx-160265767{position:absolute;width:567px;height:287px;left:50px;top:91px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#333333;}.box10.jsx-160265767{position:absolute;width:345px;height:50px;left:692px;top:950px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.box11.jsx-160265767{position:absolute;width:272px;height:19px;left:43px;top:14px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhvbWVcXGhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RrQixBQUd1QixBQU9BLEFBYUEsQUFjQSxBQVlBLEFBY0EsQUFVQSxBQVNBLEFBY0EsQUFjQSxBQVNBLEFBY0EsQUFZQSxrQkE3SUwsQUFPRCxBQWFBLEFBY0EsQUFZQSxBQWNDLEFBVUQsQUFTRyxBQWNBLEFBY0gsQUFTQSxBQWNBLEFBWUEsWUF0SUMsQUFhQSxBQWNELEFBWUEsQUF3QkMsQUFxQ0EsQUFTQSxBQWNELEFBWUEsQ0E5SUMsQUE0REEsRUFtQkEsQUFjQSxTQTFERixBQVlELEFBb0ZDLEFBWUQsQ0F2SUEsQUFhQyxBQWtERCxBQXFDQyxBQVNELENBcEhELEFBNERBLEVBbUJDLEFBY0csTUE5Q0osQUFnR0EsQ0E5SVUsQUFPVCxBQTJCQSxBQTBCQSxBQVVBLEFBOENELEFBY0MsQ0E5R0EsQUF1RkEsRUE1QkQsR0FjQyxFQTlDUyxBQWdHQSxDQTFCQSxDQTdHQSxBQTJCQSxBQTBCRyxBQVVILEFBNERBLENBOUdBLEFBdUZBLENBNUJBLElBY0EsR0E3RnJCLFFBK0NvQixBQWdHQSxDQTFCQSxDQTdHQSxBQTJCTyxBQW9DN0IsQUE0RDZCLENBOUdQLEFBdUZ0QixDQTVCc0IsQ0FsQnBCLEdBZ0NvQixVQTlDQyxBQWdHQSxDQTFCSCxDQTdHQyxDQWFELENBMkRHLElBY0EsQ0EzREcsQUFnR0EsUUFiUCxFQTdHQSxBQWFBLEFBMEJBLEFBZ0dBLElBL0RBLElBY0EsSUEzREcsQUFnR0EsQ0FiRCxFQTdHQyxBQWFELEFBMEJBLEFBZ0dBLElBL0RBLElBY0EsT0EzRHJCLEFBbUZrQixBQWFsQixFQTdHa0IsQUEwQkEsQUFnR0EsQ0F2SUEsR0F3RUEsSUFjQSxJQXdCbEIsRUFoR0UsQUEwQkYsQUFnR0EsQ0F2SUUsR0F3RUYsSUFjQSIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXHNwaW5lb3ItbmV4dFxcc3BpbmVvci1uZXh0XFxjb21wb25lbnRzXFxIb21lXFxob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZVwiO1xyXG5pbXBvcnQgSW5zaWdodHMgZnJvbSBcIi4vaW5zaWdodHNcIjtcclxuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gXCIuL3Rlc3RpbW9uaWFsXCI7XHJcbmltcG9ydCBMZXRzVGFsayBmcm9tIFwiLi9sZXRzdGFsa1wiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gxXCI+XHJcbiAgICAgICAgICBEZXNpZ24sIERldmVsb3AsIFRlc3QgJiBEZWxpdmVyZWQuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gyXCI+XHJcbiAgICAgICAgICBCZXNwb2tlIHByb2R1Y3RzICYgcGxhdGZvcm1zIGVuZ2luZWVyZWQgdG8gZWxldmF0ZSB5b3VyIGN1c3RvbWVycycgZXhwZXJpZW5jZSwgZWFybiB0aGVpciBsb3lhbHR5ICYgZ3JvdyB5b3VyIGJ1c2luZXNzLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94M1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3g0XCI+XHJcbiAgICAgICAgICAgIEV4cGxvcmUgU2VydmljZXNcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNraW1nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3g2XCI+XHJcbiAgICAgICAgICAgICAgQSBQRU9QTEUtRklSU1QgQVBQUk9BQ0hcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3g3XCI+XHJcbiAgICAgICAgICAgICAgQ3VzdG9tIERpZ2l0YWwgUHJvZHVjdHMgJiBQbGF0Zm9ybXMgQ3JlYXRlZCBieSBQZW9wbGUsIGZvciBQZW9wbGUuIFRyYW5zZm9ybSB5b3VyIGJ1c2luZXNzIHdpdGggb3VyIHVzZXItY2VudHJpYyBhcHByb2FjaC5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3g4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94OVwiPlxyXG4gICAgICAgICAgICAgIFRoZXJlIGFyZSBjb25zdWx0YW5jaWVzIHRoYXQgZm9jdXMgb24gVVggYW5kIFVJLiBUaGVyZSBhcmUgZGV2ZWxvcGVycyB0aGF0IGRlc2lnbiBhbmQgYnVpbGQuXHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIFdlIGRlbGl2ZXIgdGhlIGJlc3Qgb2YgYWxsIHdvcmxkcyB3aXRoIG91ciBhZ2lsZSwgZW5kLXRvLWVuZCBwcm9jZXNzLiBXZSBnZXQgcmlkIG9mIHlvdXIgZGlnaXRhbCBkZXZlbG9wbWVudCBoZWFkYWNoZXMgYnkgbWF4aW1pemluZyBlZmZpY2llbmNpZXMgdG8gZGVsaXZlciB0cmFuc2Zvcm1hdGl2ZSBzb2x1dGlvbnMgdGhhdCBkZWxpZ2h0IHVzZXJzIGFuZCBkcml2ZSByZXZlbnVlLlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBPdXIgbWlzc2lvbiBpcyB0byBoZWxwIGNsaWVudHMgZnJvbSBzdGFydHVwIHRvIGVudGVycHJpc2Ugb3B0aW1pemUgdGhlaXIgb25saW5lIGJ1c2luZXNzZXMgZm9yIHVuc3RvcHBhYmxlIGdyb3d0aC5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDEwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94MTFcIj5cclxuICAgICAgICAgICAgICBMZWFybiBBYm91dCBPdXIgQ2FwYWJpbGl0aWVzICYgQ3VsdHVyZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNlcnZpY2UvPlxyXG4gICAgICA8SW5zaWdodHMvPlxyXG4gICAgICA8VGVzdGltb25pYWwvPlxyXG4gICAgICA8TGV0c1RhbGsvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gIC5ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEzNDBweDtcclxuICAgIGhlaWdodDogNjMwcHg7XHJcbiAgICB0b3A6IDczcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIH1cclxuICAuYm94MSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTg2cHg7XHJcbiAgICBoZWlnaHQ6IDM0NXB4O1xyXG4gICAgbGVmdDogODVweDtcclxuICAgIHRvcDogMjA1cHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTA1cHg7ICAgXHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICB9XHJcbi5ib3gyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0MTFweDtcclxuICAgIGhlaWdodDogMjY2cHg7XHJcbiAgICBsZWZ0OiA3NTRweDtcclxuICAgIHRvcDogMjA1cHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgfVxyXG5cclxuLmJveDMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE5NHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbGVmdDogNzU2cHg7XHJcbiAgICB0b3A6IDUwNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxODRBODg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59IFxyXG5cclxuLmJveDQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDExOHB4O1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgbGVmdDogMzlweDtcclxuICAgIHRvcDogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBjb2xvcjogIzE4NEE4ODtcclxufVxyXG5cclxuLmJhY2tpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEzNDBweDtcclxuICAgIGhlaWdodDogODU5cHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDc5MXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIFxyXG4gIH1cclxuXHJcbi5ib3g1IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2MTdweDtcclxuICAgIGhlaWdodDogMzk5cHg7XHJcbiAgICBsZWZ0OiAzM3B4O1xyXG4gICAgdG9wOiA0NjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxODRBODg7XHJcbn0gIFxyXG5cclxuLmJveDYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDU0MC44NXB4O1xyXG4gICAgaGVpZ2h0OiAxMTNweDtcclxuICAgIGxlZnQ6IDM3cHg7XHJcbiAgICB0b3A6IDY3cHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5ib3g3IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MjUuMjNweDtcclxuICAgIGhlaWdodDogMTQ2cHg7XHJcbiAgICBsZWZ0OiA0MS4wM3B4O1xyXG4gICAgdG9wOiAyMTFweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmJveDgge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDY5MHB4O1xyXG4gICAgaGVpZ2h0OiAyNDNweDtcclxuICAgIGxlZnQ6IDY1MHB4O1xyXG4gICAgdG9wOiA2MTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5ib3g5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1NjdweDtcclxuICAgIGhlaWdodDogMjg3cHg7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gICAgdG9wOiA5MXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uYm94MTAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDM0NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbGVmdDogNjkycHg7XHJcbiAgICB0b3A6IDk1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxODRBODg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYm94MTEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgbGVmdDogNDNweDtcclxuICAgIHRvcDogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBjb2xvcjogIzE4NEE4ODtcclxufVxyXG5cclxuICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Home\\\\home.js */"));
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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Home\\insights.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Insights = () => {
  return __jsx("div", {
    className: "jsx-2474283142",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2474283142" + " " + "box1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2474283142" + " " + "box2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2474283142" + " " + "AI-header1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-2474283142" + " " + "box3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-2474283142" + " " + "box4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 29
    }
  }, "The Role Of Artificial Intelligence In Web Development"), __jsx("div", {
    className: "jsx-2474283142" + " " + "box5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }, "Nowadays, Web development is growing at a rapid rate with a focus on enhancing user experience. We know that these days most people use mobile through access the web. Which indicates that websites with enhanced UI will remain at the...")))), __jsx("div", {
    className: "jsx-2474283142" + " " + "vector1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-2474283142" + " " + "vector2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-2474283142" + " " + "box6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2474283142" + " " + "AI-header2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-2474283142" + " " + "box7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-2474283142" + " " + "box8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, "Python In the Field of ML and AI"), __jsx("div", {
    className: "jsx-2474283142" + " " + "box9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }, "Python language is one of the most popular programming languages in the world with its applications ranging from web development to scripting and process automation, Python is among one of the top choices among..."))))), __jsx("div", {
    className: "jsx-2474283142" + " " + "box10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Trusted by the world's leading", __jsx("br", {
    className: "jsx-2474283142",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx("strong", {
    className: "jsx-2474283142",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Startups and Enterprises"), " since 2012."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2474283142",
    __self: undefined
  }, ".box1.jsx-2474283142{position:absolute;width:1344px;height:677px;left:0px;top:3081px;background-color:gray;}.box2.jsx-2474283142{position:absolute;width:500px;height:580px;left:94px;top:393px;background:#FFFFFF;box-shadow:0px 0px 10px rgba(0,0,0,0.15);}.AI-header1.jsx-2474283142{position:absolute;width:500px;height:283px;left:0px;top:0px;background-color:red;}.box3.jsx-2474283142{position:absolute;width:427px;height:117px;left:35px;top:207px;background:#FFFFFF;}.box4.jsx-2474283142{position:absolute;width:339px;height:117px;left:25px;top:8px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:32px;line-height:37px;color:#222222;}.box5.jsx-2474283142{position:absolute;width:374px;height:146px;left:30px;top:166px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:157.2%;color:#333333;}.box6.jsx-2474283142{position:absolute;width:500px;height:580px;left:741px;top:393px;background:#FFFFFF;box-shadow:0px 0px 10px rgba(0,0,0,0.15);}.AI-header2.jsx-2474283142{position:absolute;width:500px;height:283px;left:0px;top:0px;background-color:red;}.box7.jsx-2474283142{position:absolute;width:427px;height:117px;left:37px;top:207px;background:#FFFFFF;}.box8.jsx-2474283142{position:absolute;width:339px;height:117px;left:22px;top:8px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:32px;line-height:37px;color:#222222;}.box9.jsx-2474283142{position:absolute;width:374px;height:146px;left:9px;top:166px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:157.2%;color:#333333;}.vector1.jsx-2474283142{position:absolute;border:solid blue;border-width:0 3px 3px 0;display:inline-block;padding:13px;left:46%;right:51%;top:113%;bottom:-19%;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}.vector2.jsx-2474283142{position:absolute;border:solid blue;border-width:0 3px 3px 0;display:inline-block;padding:13px;left:51%;right:46%;top:125%;bottom:-31%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.box10.jsx-2474283142{position:absolute;width:925px;height:119px;left:93px;top:4270px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:46px;line-height:49px;color:#000000;}strong.jsx-2474283142{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhvbWVcXGluc2lnaHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Dd0IsQUFHbUMsQUFRQSxBQVNBLEFBUUEsQUFTQSxBQWNBLEFBY0EsQUFTQSxBQVFBLEFBU0EsQUFjQSxBQWNBLEFBYUEsQUFjQSxBQWFQLFdBQ2YsT0E1SmlCLEFBUUQsQUFTQSxBQVFBLEFBU0EsQUFjQSxBQWNBLEFBU0EsQUFRQSxBQVNBLEFBY0EsQUFjTSxBQWFBLEFBY04sWUF0SUMsQUFTQSxBQVFBLEFBU0EsQUFjQSxBQWNBLEFBU0EsQUFRQSxBQVNBLEFBY0EsQUF5Q0EsQ0EvSUEsS0FvSFksQUFhQSxPQXhIZixBQVNELEFBUUMsQUFTQSxBQWNBLEFBY0MsQUFTRixBQVFDLEFBU0EsQUFjRCxBQXlDQyxDQS9JRCxRQWtCRCxBQXNEQSxBQStCRSxDQXRHQyxBQVFELEFBaUJBLEFBU0YsQUFjRSxBQStCQSxBQVNGLEFBdURHLENBakZELE1BNUNXLEFBc0RBLENBckNGLEFBc0RBLEFBMEJFLEFBYUEsQ0F6QkYsQ0E5RkEsQUFpQkEsQUF1QkEsQUErQkEsQ0EvRUcsQUE4REgsQUFpRkEsZ0JBNUdELEFBc0RBLENBdkV0QixBQXNEQSxBQStCc0IsQ0E5RjBCLEFBaUJoRCxBQXVCc0IsQUErQnRCLEFBbUNpQixBQWFBLENBakUrQixBQWlGMUIsR0EvSXRCLFNBbUhhLEFBYUEsR0E3RlUsQUFzREEsQ0FjSCxDQXREQSxDQStGRyxHQTVCVCxBQWFBLFVBWkQsQUFhQSxDQTFCTSxDQXREQSxDQWRBLEFBc0RBLEdBdURBLEdBeEluQixBQTZHZ0IsQUFhQSxDQXBFaEIsTUEwQ3VCLENBdERBLENBZEYsQUFzREEsR0E0QlEsQUFhQSxBQWNSLGNBNUdILEFBc0RBLEFBY0EsQ0F0REEsRUErRkEsV0E1R2xCLEFBc0RBLEFBY0EsQ0F0REEsRUErRkEsd0RBNUJBLEFBY0EiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcY29tcG9uZW50c1xcSG9tZVxcaW5zaWdodHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJbnNpZ2h0cyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gxXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFJLWhlYWRlcjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiYm94M1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiYm94NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFJvbGUgT2YgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgSW4gV2ViIERldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJveDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vd2FkYXlzLCBXZWIgZGV2ZWxvcG1lbnQgaXMgZ3Jvd2luZyBhdCBhIHJhcGlkIHJhdGUgd2l0aCBhIGZvY3VzIG9uIGVuaGFuY2luZyB1c2VyIGV4cGVyaWVuY2UuIFdlIGtub3cgdGhhdCB0aGVzZSBkYXlzIG1vc3QgcGVvcGxlIHVzZSBtb2JpbGUgdGhyb3VnaCBhY2Nlc3MgdGhlIHdlYi4gV2hpY2ggaW5kaWNhdGVzIHRoYXQgd2Vic2l0ZXMgd2l0aCBlbmhhbmNlZCBVSSB3aWxsIHJlbWFpbiBhdCB0aGUuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwidmVjdG9yMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwidmVjdG9yMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3g2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBSS1oZWFkZXIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJveDdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJveDhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB5dGhvbiBJbiB0aGUgRmllbGQgb2YgTUwgYW5kIEFJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJveDlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB5dGhvbiBsYW5ndWFnZSBpcyBvbmUgb2YgdGhlIG1vc3QgcG9wdWxhciBwcm9ncmFtbWluZyBsYW5ndWFnZXMgaW4gdGhlIHdvcmxkIHdpdGggaXRzIGFwcGxpY2F0aW9ucyByYW5naW5nIGZyb20gd2ViIGRldmVsb3BtZW50IHRvIHNjcmlwdGluZyBhbmQgcHJvY2VzcyBhdXRvbWF0aW9uLCBQeXRob24gaXMgYW1vbmcgb25lIG9mIHRoZSB0b3AgY2hvaWNlcyBhbW9uZy4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJib3gxMFwiPlxyXG4gICAgICAgICAgICBUcnVzdGVkIGJ5IHRoZSB3b3JsZCdzIGxlYWRpbmcgXHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+U3RhcnR1cHMgYW5kIEVudGVycHJpc2VzPC9zdHJvbmc+IHNpbmNlIDIwMTIuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5ib3gxIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMzQ0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY3N3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzMDgxcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTgwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA5NHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzOTNweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuQUktaGVhZGVyMSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4M3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveDMge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQyN3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTdweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIwN3B4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJveDQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzOXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTdweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJveDUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM3NHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDZweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE2NnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTU3LjIlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3g2IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTgwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA3NDFweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMzkzcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLkFJLWhlYWRlcjIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyODNweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3g3IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MjdweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTE3cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMDdweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3g4IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMzlweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTE3cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3g5IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNzRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTQ2cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA5cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE2NnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTU3LjIlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52ZWN0b3IxIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNDYlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUxJTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTEzJTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTE5JTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC52ZWN0b3IyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTElO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQ2JTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTI1JTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTMxJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94MTAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTlweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDkzcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQyNzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ5cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbnNpZ2h0cyJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Home\\\\insights.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Insights);

/***/ }),

/***/ "./components/Home/letstalk.js":
/*!*************************************!*\
  !*** ./components/Home/letstalk.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Home\\letstalk.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const LetsTalk = () => {
  return __jsx("div", {
    className: "jsx-3375429063",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3375429063" + " " + "content-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3375429063" + " " + "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, "Got a project in mind? Get started now."), __jsx("div", {
    className: "jsx-3375429063" + " " + "button-outer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3375429063" + " " + "button-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Let\u2019s Talk"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3375429063",
    __self: undefined
  }, ".content.jsx-3375429063{position:absolute;width:552px;height:38px;left:25px;top:0px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:32px;line-height:37px;color:#333333;}.button-outer.jsx-3375429063{position:absolute;width:141px;height:50px;left:200px;top:81px;background:#184A88;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.button-inner.jsx-3375429063{position:absolute;width:66px;height:19px;left:36px;top:15px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;}.content-box.jsx-3375429063{position:absolute;width:552px;height:132px;left:374px;top:5199px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhvbWVcXGxldHN0YWxrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUcyQixBQWNBLEFBWUEsQUFhQSxrQkF0Q04sQUFjQSxBQVlELEFBYUMsV0FaQSxDQTFCQSxBQWNBLEFBeUJDLFdBWkgsQ0ExQkEsQUFjQyxDQXlCQSxRQVpGLENBMUJELENBY0MsQ0F5QkUsTUF0Q1EsQUEwQkEsRUFaQSxHQXlCdkIsY0F0Q3NCLEFBMEJBLEVBWk8sZ0JBYk4sQUEwQkEsU0FaRyxVQWJQLEFBMEJBLFlBWkcsR0FiRCxBQTBCQSxlQVpyQixFQWJrQixBQTBCbEIsY0F6QkEiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcY29tcG9uZW50c1xcSG9tZVxcbGV0c3RhbGsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMZXRzVGFsayA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJjb250ZW50LWJveFwiPiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgR290IGEgcHJvamVjdCBpbiBtaW5kPyBHZXQgc3RhcnRlZCBub3cuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJidXR0b24tb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJ1dHRvbi1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgTGV04oCZcyBUYWxrIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDU1MnB4O1xyXG4gICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tb3V0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTQxcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGxlZnQ6IDIwMHB4O1xyXG4gICAgICAgIHRvcDogODFweDsgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE4NEE4ODtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTg0QTg4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24taW5uZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNjZweDtcclxuICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgbGVmdDogMzZweDtcclxuICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDU1MnB4O1xyXG4gICAgICAgIGhlaWdodDogMTMycHg7XHJcbiAgICAgICAgbGVmdDogMzc0cHg7XHJcbiAgICAgICAgdG9wOiA1MTk5cHg7XHJcbiAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGV0c1RhbGsiXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Home\\\\letstalk.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (LetsTalk);

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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Home\\service.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Service = () => {
  return __jsx("div", {
    className: "jsx-3003750529",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3003750529" + " " + "box12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3003750529" + " " + "box13",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-3003750529" + " " + "box14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, "Java/Scala Programming"), __jsx("div", {
    className: "jsx-3003750529" + " " + "box15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, "Java is a programming language and computing platform first released by Sun Microsystems in 1995."), __jsx("div", {
    className: "jsx-3003750529" + " " + "box16",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-3003750529" + " " + "box17",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "Hire our java developers We do help businesses in integrating your Java applications with databases, operating systems and third-party applications with our java outsourcing company services. We have experience of re-engineering and migration of applications built in Java. This would include technology migration, database migration, Java application upgrade, application porting, etc.", __jsx("br", {
    className: "jsx-3003750529",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-3003750529",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }), "Our team of Java professionals ranked top in providing Java application development services in below:"))), __jsx("div", {
    className: "jsx-3003750529" + " " + "vector1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3003750529" + " " + "vector2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3003750529" + " " + "ellipse1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3003750529" + " " + "ellipse2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3003750529" + " " + "ellipse3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3003750529" + " " + "ellipse4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3003750529" + " " + "box22",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Java Development Services", __jsx("br", {
    className: "jsx-3003750529",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), "Java Enterprise Application Development", __jsx("br", {
    className: "jsx-3003750529",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), "Java Desktop Application Development", __jsx("br", {
    className: "jsx-3003750529",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), "Java Mobile Application Development"), __jsx("div", {
    className: "jsx-3003750529" + " " + "ellipse5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3003750529" + " " + "ellipse6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3003750529" + " " + "ellipse7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3003750529" + " " + "box23",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Java Web Services Development", __jsx("br", {
    className: "jsx-3003750529",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), "Java Application Migration & Integration", __jsx("br", {
    className: "jsx-3003750529",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), "Java Application Maintenance & Support"), __jsx("div", {
    className: "jsx-3003750529" + " " + "box24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-3003750529" + " " + "box25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "View Our JAVA/SCALA Programming Service In Details"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3003750529",
    __self: undefined
  }, ".box12.jsx-3003750529{position:absolute;width:1344px;height:744px;left:0px;top:1962px;background-color:gray;}.box13.jsx-3003750529{position:absolute;width:617px;height:399px;left:33px;top:390px;background:#184A88;}.box14.jsx-3003750529{position:absolute;width:349px;height:113px;left:221px;top:105px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#FFFFFF;}.box15.jsx-3003750529{position:absolute;width:525.23px;height:146px;left:64px;top:260px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;color:#FFFFFF;}.box16.jsx-3003750529{position:absolute;width:693px;height:676px;left:614px;top:-70px;background:#FFFFFF;}.box17.jsx-3003750529{position:absolute;width:548px;height:263px;left:73px;top:80px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:157.2%;color:#333333;}.ellipse1.jsx-3003750529{position:absolute;width:11px;height:11px;left:728px;top:717px;background:#8E8E8E;}.ellipse2.jsx-3003750529{position:absolute;width:11px;height:11px;left:728px;top:743px;background:#8E8E8E;}.ellipse3.jsx-3003750529{position:absolute;width:11px;height:11px;left:728px;top:791px;background:#8E8E8E;}.ellipse4.jsx-3003750529{position:absolute;width:11px;height:11px;left:728px;top:841px;background:#8E8E8E;}.box22.jsx-3003750529{position:absolute;width:213px;height:206px;left:770px;top:710px;font-family:Roboto;font-style:normal;font-weight:300;font-size:16px;line-height:157.2%;color:#333333;}.box23.jsx-3003750529{position:absolute;width:213px;height:206px;left:1017px;top:710px;font-family:Roboto;font-style:normal;font-weight:300;font-size:16px;line-height:157.2%;color:#333333;}.ellipse5.jsx-3003750529{position:absolute;width:11px;height:11px;left:977px;top:717px;background:#8E8E8E;}.ellipse6.jsx-3003750529{position:absolute;width:11px;height:11px;left:977px;top:743px;background:#8E8E8E;}.ellipse7.jsx-3003750529{position:absolute;width:11px;height:11px;left:977px;top:791px;background:#8E8E8E;}.box24.jsx-3003750529{position:absolute;width:457px;height:50px;left:740px;top:910px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.box25.jsx-3003750529{position:absolute;width:390px;height:19px;left:40px;top:14px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}.vector1.jsx-3003750529{position:absolute;border:solid blue;border-width:0 3px 3px 0;display:inline-block;left:38%;right:59%;top:111%;bottom:-17%;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);-webkit-transform:rotate(135deg);}.vector2.jsx-3003750529{position:absolute;border:solid blue;border-width:0 3px 3px 0;display:inline-block;left:43%;right:54%;top:111%;bottom:-17%;padding:13px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform:rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhvbWVcXHNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUR3QixBQUcyQixBQVNBLEFBU0EsQUFjQSxBQWNBLEFBU0EsQUFjQSxBQVNBLEFBU0EsQUFTQSxBQVNBLEFBY0EsQUFjQSxBQVNBLEFBU0EsQUFTQSxBQVlBLEFBY0EsQUFhQSxrQkF0TUwsQUFTRCxBQVNBLEFBY0csQUFjSCxBQVNBLEFBY0QsQUFTQSxBQVNBLEFBU0EsQUFTQyxBQWNBLEFBY0QsQUFTQSxBQVNBLEFBU0MsQUFZQSxBQWNNLEFBYUEsV0FqSU4sQUFTQSxBQVNBLEFBU0EsQUFxQ0EsQUFTQSxBQVNBLENBOUlDLEFBU0EsQUE0QkEsQUFTQSxBQWtEQSxBQWNBLEFBeUNELEFBWUEsQ0E1S0MsRUFnQ0EsR0EwSlksQUFhQSxLQWpJZCxBQVNBLEFBU0EsQUFTQSxBQXFDQSxBQVNBLEFBU0EsQ0FTQSxBQVlELENBbktBLEFBU0MsQUE0QkEsQUFTRCxBQWtEQyxBQWNDLENBdkhILEVBZ0NDLE1Bc0NBLEFBU0EsQUFTQSxBQVNBLEFBcUNBLEFBU0EsQUFTQSxBQXFCRCxDQTVLRSxBQVNELEFBOENELEFBeUdDLENBOUlBLEFBNEJBLEFBMkRBLENBY0EsQ0F2RkEsS0E2SVMsQUFZRSxBQWFBLENBOUlGLEFBY0EsQUFTQSxBQVNBLEFBU0EsQUFxQ0EsQUFTQSxBQVNBLENBOUlBLEFBdUpBLENBaEtHLEFBa0JILEFBNEJBLEFBMkRBLENBY0EsQ0F2RkEsY0E2SUQsQ0FySEEsQUFjdEIsQUFTQSxBQVNBLEFBU0EsQUFxQ0EsQUFTQSxBQVNBLENBOUlBLEFBdUo2QixBQXdCaEIsQUFhQSxDQW5MUyxBQTRCdEIsQUEyRHNCLENBY0EsQ0F2RkEsQ0FoQ3RCLEtBeUxjLEFBYUEsT0F6QlMsQ0FySEgsRUFyQ0csQUF1RkgsQUFnRlAsQUFhQSxDQS9FTyxDQXZGRyxJQWdJRyxHQTBCVixBQWFBLEtBL0lHLEVBa0RBLEFBbUVBLENBckRBLEVBckdBLEVBY0EsQUEwSlUsQUFhWixPQXZDSyxDQXhHQyxFQWtEQSxBQW1FRixDQXJERSxFQXJHRixBQXFMUSxFQXZLUixVQWdJckIsRUF4R2tCLEFBcUhBLEVBbkVBLENBdkZBLEFBcUdBLEVBdkZBLFNBd0JsQixBQXFIQSxFQW5FQSxDQXZGQSxBQXFHQSxFQXZGQSx5Q0F3SnFDLGFBY04sb0JBYi9CLGFBY0EiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcY29tcG9uZW50c1xcSG9tZVxcc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgU2VydmljZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gxMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gxM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94MTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSmF2YS9TY2FsYSBQcm9ncmFtbWluZ1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gxNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKYXZhIGlzIGEgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgYW5kIGNvbXB1dGluZyBwbGF0Zm9ybSBmaXJzdCByZWxlYXNlZCBieSBTdW4gTWljcm9zeXN0ZW1zIGluIDE5OTUuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94MTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpcmUgb3VyIGphdmEgZGV2ZWxvcGVycyBXZSBkbyBoZWxwIGJ1c2luZXNzZXMgaW4gaW50ZWdyYXRpbmcgeW91ciBKYXZhIGFwcGxpY2F0aW9ucyB3aXRoIGRhdGFiYXNlcywgb3BlcmF0aW5nIHN5c3RlbXMgYW5kIHRoaXJkLXBhcnR5IGFwcGxpY2F0aW9ucyB3aXRoIG91ciBqYXZhIG91dHNvdXJjaW5nIGNvbXBhbnkgc2VydmljZXMuIFdlIGhhdmUgZXhwZXJpZW5jZSBvZiByZS1lbmdpbmVlcmluZyBhbmQgbWlncmF0aW9uIG9mIGFwcGxpY2F0aW9ucyBidWlsdCBpbiBKYXZhLiBUaGlzIHdvdWxkIGluY2x1ZGUgdGVjaG5vbG9neSBtaWdyYXRpb24sIGRhdGFiYXNlIG1pZ3JhdGlvbiwgSmF2YSBhcHBsaWNhdGlvbiB1cGdyYWRlLCBhcHBsaWNhdGlvbiBwb3J0aW5nLCBldGMuXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIE91ciB0ZWFtIG9mIEphdmEgcHJvZmVzc2lvbmFscyByYW5rZWQgdG9wIGluIHByb3ZpZGluZyBKYXZhIGFwcGxpY2F0aW9uIGRldmVsb3BtZW50IHNlcnZpY2VzIGluIGJlbG93OlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZWN0b3IxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlY3RvcjJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxsaXBzZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxsaXBzZTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxsaXBzZTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxsaXBzZTRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94MjJcIj5cclxuICAgICAgICAgICAgICAgICAgICBKYXZhIERldmVsb3BtZW50IFNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIEphdmEgRW50ZXJwcmlzZSBBcHBsaWNhdGlvbiBEZXZlbG9wbWVudFxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBKYXZhIERlc2t0b3AgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnRcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgSmF2YSBNb2JpbGUgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGxpcHNlNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGxpcHNlNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGxpcHNlN1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gyM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEphdmEgV2ViIFNlcnZpY2VzIERldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIEphdmEgQXBwbGljYXRpb24gTWlncmF0aW9uICYgSW50ZWdyYXRpb25cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgSmF2YSBBcHBsaWNhdGlvbiBNYWludGVuYW5jZSAmIFN1cHBvcnRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94MjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBPdXIgSkFWQS9TQ0FMQSBQcm9ncmFtbWluZyBTZXJ2aWNlIEluIERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgLmJveDEyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEzNDRweDtcclxuICAgICAgICBoZWlnaHQ6IDc0NHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDE5NjJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm94MTMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNjE3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzOTlweDtcclxuICAgICAgICBsZWZ0OiAzM3B4O1xyXG4gICAgICAgIHRvcDogMzkwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE4NEE4ODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJveDE0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDM0OXB4O1xyXG4gICAgICAgIGhlaWdodDogMTEzcHg7XHJcbiAgICAgICAgbGVmdDogMjIxcHg7XHJcbiAgICAgICAgdG9wOiAxMDVweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJveDE1IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDUyNS4yM3B4O1xyXG4gICAgICAgIGhlaWdodDogMTQ2cHg7XHJcbiAgICAgICAgbGVmdDogNjRweDtcclxuICAgICAgICB0b3A6IDI2MHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm94MTYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNjkzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NzZweDtcclxuICAgICAgICBsZWZ0OiA2MTRweDtcclxuICAgICAgICB0b3A6IC03MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ib3gxNyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA1NDhweDtcclxuICAgICAgICBoZWlnaHQ6IDI2M3B4O1xyXG4gICAgICAgIGxlZnQ6IDczcHg7XHJcbiAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTcuMiU7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsbGlwc2UxIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgIGxlZnQ6IDcyOHB4O1xyXG4gICAgICAgIHRvcDogNzE3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFOEU4RTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZTIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgbGVmdDogNzI4cHg7XHJcbiAgICAgICAgdG9wOiA3NDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOEU4RThFO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGxpcHNlMyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgIGhlaWdodDogMTFweDtcclxuICAgICAgICBsZWZ0OiA3MjhweDtcclxuICAgICAgICB0b3A6IDc5MXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4RThFOEU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsbGlwc2U0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgIGxlZnQ6IDcyOHB4O1xyXG4gICAgICAgIHRvcDogODQxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFOEU4RTtcclxuICAgIH1cclxuXHJcbiAgICAuYm94MjIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjEzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDZweDtcclxuICAgICAgICBsZWZ0OiA3NzBweDtcclxuICAgICAgICB0b3A6IDcxMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTcuMiU7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgLmJveDIzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDIxM3B4O1xyXG4gICAgICAgIGhlaWdodDogMjA2cHg7XHJcbiAgICAgICAgbGVmdDogMTAxN3B4O1xyXG4gICAgICAgIHRvcDogNzEwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1Ny4yJTtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZTUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgbGVmdDogOTc3cHg7XHJcbiAgICAgICAgdG9wOiA3MTdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOEU4RThFO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGxpcHNlNiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgIGhlaWdodDogMTFweDtcclxuICAgICAgICBsZWZ0OiA5NzdweDtcclxuICAgICAgICB0b3A6IDc0M3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4RThFOEU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVsbGlwc2U3IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgIGxlZnQ6IDk3N3B4O1xyXG4gICAgICAgIHRvcDogNzkxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFOEU4RTtcclxuICAgIH1cclxuXHJcbiAgICAuYm94MjQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNDU3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGxlZnQ6IDc0MHB4O1xyXG4gICAgICAgIHRvcDogOTEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTg0QTg4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3gyNSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAzOTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICB0b3A6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgY29sb3I6ICMxODRBODg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlY3RvcjEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbGVmdDogMzglO1xyXG4gICAgICAgIHJpZ2h0OiA1OSU7XHJcbiAgICAgICAgdG9wOiAxMTElO1xyXG4gICAgICAgIGJvdHRvbTogLTE3JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZlY3RvcjIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbGVmdDogNDMlO1xyXG4gICAgICAgIHJpZ2h0OiA1NCU7XHJcbiAgICAgICAgdG9wOiAxMTElO1xyXG4gICAgICAgIGJvdHRvbTogLTE3JTtcclxuICAgICAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlIl19 */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Home\\\\service.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./components/Home/testimonial.js":
/*!****************************************!*\
  !*** ./components/Home/testimonial.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Home\\testimonial.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Testimonial = () => {
  return __jsx("div", {
    className: "jsx-2217205696",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2217205696" + " " + "world-map",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2217205696" + " " + "vector",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2217205696" + " " + "testimonial-img1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-2217205696" + " " + "testimonial-img2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-2217205696" + " " + "testimonial-img3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-2217205696" + " " + "testimonial-img4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-2217205696" + " " + "t-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "Sean Devlin"), __jsx("div", {
    className: "jsx-2217205696" + " " + "t-position",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Director of an Australian Stealth Startup"), __jsx("div", {
    className: "jsx-2217205696" + " " + "testimonial-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "They've been extremely flexible in their process for delivering our project, just what our startup needed. It has been an extremely positive experience."), __jsx("div", {
    className: "jsx-2217205696" + " " + "quote",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "\u201C")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2217205696",
    __self: undefined
  }, ".world-map.jsx-2217205696{position:absolute;width:1344px;height:632px;left:0px;top:4409px;background-color:gray;}.testimonial-box.jsx-2217205696{position:absolute;width:631px;height:170px;left:500px;top:435px;font-family:Roboto;font-style:normal;font-weight:300;font-size:24px;line-height:28px;color:#555555;}.quote.jsx-2217205696{position:absolute;width:162px;height:275px;left:755px;top:378px;font-family:Rochester;font-style:normal;font-weight:normal;font-size:300px;line-height:386px;color:rgba(0,0,0,0.1);-webkit-transform:rotate(-169.26deg);-ms-transform:rotate(-169.26deg);transform:rotate(-169.26deg);}.t-name.jsx-2217205696{position:absolute;width:125px;height:28px;left:500px;top:365px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;color:#222222;}.t-position.jsx-2217205696{position:absolute;width:283px;height:19px;left:500px;top:399px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#555555;}.testimonial-img1.jsx-2217205696{position:absolute;width:109.35px;height:110.81px;left:255.05px;top:0px;background-color:red;}.testimonial-img2.jsx-2217205696{position:absolute;width:86px;height:106px;left:32px;top:159px;background-color:red;}.testimonial-img3.jsx-2217205696{position:absolute;width:84px;height:90px;left:714px;top:13px;background-color:red;}.testimonial-img4.jsx-2217205696{position:absolute;width:105px;height:118px;left:1176px;top:152px;background-color:red;}.vector.jsx-2217205696{position:absolute;width:1330px;height:274.09px;left:7px;top:56px;border:1px solid rgba(0,0,0,0.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhvbWVcXHRlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCZ0IsQUFHMkIsQUFTQSxBQWNBLEFBZUEsQUFjQSxBQWNBLEFBU0EsQUFTQSxBQVNBLEFBU0Esa0JBckdMLEFBU0QsQUFjQSxBQWVBLEFBY0EsQUFjRyxBQVNKLEFBU0EsQUFTQyxBQVNDLFdBMUJBLEFBU0QsQ0EzRUMsQUFjQSxBQWVELEFBY0EsQUF5Q0MsQ0E3RkEsQUFzR0csRUFwQ0EsUUFtQkwsQ0E5Q0EsQUFjQSxBQXVCRCxDQWxFQyxBQWNBLEFBc0VDLENBN0ZILEdBc0dBLEVBcENLLEdBVUosQUFTRCxDQXBGRSxBQXNDRCxBQWNBLENBM0NBLEFBY0EsQ0FzRUEsQ0FTRCxLQWpCWSxDQVRBLENBckNGLEFBY0EsQUFhWCxDQWpFYyxBQVNILEFBY0csQ0FzRUQsQUFTZSxNQXBDZixXQTNCSCxBQWNBLEFBZ0N0QixDQTNFc0IsQUFrRXRCLEdBM0VBLEFBdUJzQixBQXNFdEIsTUEzQkEsTUFvQ0EsRUEvRHVCLEFBY0EsQ0EzQ0gsR0FjRyxhQWJKLEVBNkJBLEFBY0EsSUE3QkMsU0FiQyxFQTZCQSxBQWNBLEtBN0JDLFVBYkosRUE2QkEsQUFjQSxNQTdCVyxNQWI3QixFQTZCQSxBQWNBLGNBN0JpQyxtR0FDakMiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcY29tcG9uZW50c1xcSG9tZVxcdGVzdGltb25pYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUZXN0aW1vbmlhbCA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJ3b3JsZC1tYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInZlY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwidGVzdGltb25pYWwtaW1nMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwidGVzdGltb25pYWwtaW1nMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwidGVzdGltb25pYWwtaW1nM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwidGVzdGltb25pYWwtaW1nNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJ0LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgIFNlYW4gRGV2bGluXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInQtcG9zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgIERpcmVjdG9yIG9mIGFuIEF1c3RyYWxpYW4gU3RlYWx0aCBTdGFydHVwXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInRlc3RpbW9uaWFsLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgVGhleSd2ZSBiZWVuIGV4dHJlbWVseSBmbGV4aWJsZSBpbiB0aGVpciBwcm9jZXNzIGZvciBkZWxpdmVyaW5nIG91ciBwcm9qZWN0LCBqdXN0IHdoYXQgb3VyIHN0YXJ0dXAgbmVlZGVkLiBJdCBoYXMgYmVlbiBhbiBleHRyZW1lbHkgcG9zaXRpdmUgZXhwZXJpZW5jZS5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwicXVvdGVcIj5cclxuICAgICAgICAgICAgICAgICAgIOKAnCBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIC53b3JsZC1tYXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTM0NHB4O1xyXG4gICAgICAgIGhlaWdodDogNjMycHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHRvcDogNDQwOXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlc3RpbW9uaWFsLWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA2MzFweDtcclxuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgIGxlZnQ6IDUwMHB4O1xyXG4gICAgICAgIHRvcDogNDM1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1b3RlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDE2MnB4O1xyXG4gICAgICAgIGhlaWdodDogMjc1cHg7XHJcbiAgICAgICAgbGVmdDogNzU1cHg7XHJcbiAgICAgICAgdG9wOiAzNzhweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9jaGVzdGVyO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzAwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM4NnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE2OS4yNmRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLnQtbmFtZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbGVmdDogNTAwcHg7XHJcbiAgICAgICAgdG9wOiAzNjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIH1cclxuXHJcbiAgICAudC1wb3NpdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyODNweDtcclxuICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgbGVmdDogNTAwcHg7XHJcbiAgICAgICAgdG9wOiAzOTlweDsgICAgICBcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIH1cclxuXHJcbiAgICAudGVzdGltb25pYWwtaW1nMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDkuMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDExMC44MXB4O1xyXG4gICAgICAgIGxlZnQ6IDI1NS4wNXB4O1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAudGVzdGltb25pYWwtaW1nMiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA4NnB4O1xyXG4gICAgICAgIGhlaWdodDogMTA2cHg7XHJcbiAgICAgICAgbGVmdDogMzJweDtcclxuICAgICAgICB0b3A6IDE1OXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAudGVzdGltb25pYWwtaW1nMyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBsZWZ0OiA3MTRweDtcclxuICAgICAgICB0b3A6IDEzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXN0aW1vbmlhbC1pbWc0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTE4cHg7XHJcbiAgICAgICAgbGVmdDogMTE3NnB4O1xyXG4gICAgICAgIHRvcDogMTUycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgLnZlY3RvciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMzMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzQuMDlweDtcclxuICAgICAgICBsZWZ0OiA3cHg7XHJcbiAgICAgICAgdG9wOiA1NnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIH1cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsIl19 */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Home\\\\testimonial.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\banner.js";


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
  }, ".banner.jsx-3949308642{width:100%;background-image:url(\"https://www.trulia.com/javascript/moana//_next/static/assets/hiDpiExtraLarge-e3d56c6337c994b49d5b40cdc7df5bd7.jpg\");color:#fff;height:580px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.banner-heading.jsx-3949308642{text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.inner.jsx-3949308642{width:100%;max-width:1024px;margin:0 auto;padding:0 1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}a.jsx-3949308642{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}p.jsx-3949308642{color:#fff;margin:0;-webkit-transition:color 0.15s ease;transition:color 0.15s ease;}.mobile.jsx-3949308642{display:none;}@media (max-width:640px){p.jsx-3949308642{font-size:14px;}p.jsx-3949308642{display:none;}.mobile.jsx-3949308642{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXGJhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmtCLEFBR3NCLEFBUU8sQUFJUCxBQVNTLEFBR1QsQUFLRSxBQUlJLEFBR0YsQUFHQyxXQXRDMEgsQUFZekgsQUFZUixFQUtYLEFBT0UsQ0FHQSxDQU5BLEdBekJ1QixFQWlCSyxRQVpkLGNBQ0MsZUFDRiwyQkFXZixrQkFMQSxlQVpBLGNBT3FCLGtCQWZSLFdBQ0UsYUFDQSxtREFjaUIsdUJBYlgsNEZBY3JCLENBYkEiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcY29tcG9uZW50c1xcYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExvZ28gZnJvbSAnLi9pY29ucy96ZWl0LXdoaXRlLWZ1bGwtbG9nbyc7XHJcblxyXG5pbXBvcnQgSGVhZGluZ3MgZnJvbSBcIi4vZGVzaWduTGF5b3V0cy9oZWFkaW5nc1wiO1xyXG5cclxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxyXG4gICAgPGRpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPEhlYWRpbmdzXHJcbiAgICAgICAgICBUYWc9XCJoMVwiXHJcbiAgICAgICAgICB0ZXh0PVwiRGlzY292ZXIgYSBwbGFjZSB5b3UnbGwgbG92ZSB0byBsaXZlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lci1oZWFkaW5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYmFubmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cudHJ1bGlhLmNvbS9qYXZhc2NyaXB0L21vYW5hLy9fbmV4dC9zdGF0aWMvYXNzZXRzL2hpRHBpRXh0cmFMYXJnZS1lM2Q1NmM2MzM3Yzk5NGI0OWQ1YjQwY2RjN2RmNWJkNy5qcGdcIik7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGhlaWdodDogNTgwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJhbm5lci1oZWFkaW5ne1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbm5lciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2JpbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyOyJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\banner.js */"));
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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\container.js";


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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3569748255", [padding ? '6.25rem' : '0', wide ? '0' : '1rem', wide && !small ? '' : 'max-width: 1024px;', small ? 'max-width: 682px;' : '', center ? 'text-align: center;' : '', dark ? 'background: #111;' : '', dark ? 'color: #f1f1f1;' : '', gray ? 'background-color: #fafafa;' : '', gray ? 'border-top: 1px solid #eaeaea;' : '', gray ? 'border-bottom: 1px solid #eaeaea;' : '', wide && !overflow ? 'overflow: hidden;' : '', minHeight ? `min-height: ${minHeight}px;` : '', vCenter ? 'display: flex; align-items: center;' : '', dotBackground ? `
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
    id: "3569748255",
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXGNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQlcsQUFHc0IsQUFtQkEsQUFPMkQsQUFNQSxXQS9CeEQsQUFtQkEsY0FsQm9ELEFBbUJ2RCxXQUNiLGdDQUtFLEFBT0QsdUJBbEJGLE9Ba0JHLHVYQWxCRiIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXHNwaW5lb3ItbmV4dFxcc3BpbmVvci1uZXh0XFxjb21wb25lbnRzXFxjb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoe1xyXG4gICAgY2VudGVyLFxyXG4gICAgdkNlbnRlcixcclxuICAgIGRhcmssXHJcbiAgICBncmF5LFxyXG4gICAgd2lkZSxcclxuICAgIHNtYWxsLFxyXG4gICAgcGFkZGluZyxcclxuICAgIG92ZXJmbG93LFxyXG4gICAgbWluSGVpZ2h0LFxyXG4gICAgZG90QmFja2dyb3VuZCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgbW9iaWxlU3R5bGUsXHJcbiAgICBkaXZpZGVyLFxyXG4gICAgLi4ucHJvcHNcclxuICB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHsuLi5wcm9wc30+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6ICR7cGFkZGluZyA/ICc2LjI1cmVtJyA6ICcwJ30gJHt3aWRlID8gJzAnIDogJzFyZW0nfTtcclxuICAgICAgICAgICR7d2lkZSAmJiAhc21hbGwgPyAnJyA6ICdtYXgtd2lkdGg6IDEwMjRweDsnfVxyXG4gICAgICAgICAgJHtzbWFsbCA/ICdtYXgtd2lkdGg6IDY4MnB4OycgOiAnJ31cclxuICAgICAgICAgICR7Y2VudGVyID8gJ3RleHQtYWxpZ246IGNlbnRlcjsnIDogJyd9XHJcbiAgICAgICAgICAke2RhcmsgPyAnYmFja2dyb3VuZDogIzExMTsnIDogJyd9XHJcbiAgICAgICAgICAke2RhcmsgPyAnY29sb3I6ICNmMWYxZjE7JyA6ICcnfVxyXG4gICAgICAgICAgJHtncmF5ID8gJ2JhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7JyA6ICcnfVxyXG4gICAgICAgICAgJHtncmF5ID8gJ2JvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhOycgOiAnJ31cclxuICAgICAgICAgICR7Z3JheSA/ICdib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTsnIDogJyd9XHJcbiAgICAgICAgICAke3dpZGUgJiYgIW92ZXJmbG93ID8gJ292ZXJmbG93OiBoaWRkZW47JyA6ICcnfVxyXG4gICAgICAgICAgJHttaW5IZWlnaHQgPyBgbWluLWhlaWdodDogJHttaW5IZWlnaHR9cHg7YCA6ICcnfVxyXG4gICAgICAgICAgJHt2Q2VudGVyID8gJ2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7JyA6ICcnfVxyXG4gICAgICAgICAgJHtcclxuICAgICAgICAgICAgZG90QmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgID8gYFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoI0Q3RDdENyAxcHgsIHRyYW5zcGFyZW50IDFweCksIHJhZGlhbC1ncmFkaWVudCgjZDdkN2Q3IDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAyNXB4IDI1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xyXG4gICAgICAgICAgYFxyXG4gICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICR7ZGl2aWRlciA/IGBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO2AgOiAnJ31cclxuICAgICAgICB9XHJcbiAgICAgICAgOmFmdGVyIHtcclxuICAgICAgICAgIC8vIEJGQ1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICR7cGFkZGluZyA/ICc0cmVtJyA6ICcwJ30gJHt3aWRlID8gJzAnIDogJzJyZW0nfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIG1vYmlsZVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAke3BhZGRpbmcgPyAnNHJlbScgOiAnMCd9ICR7d2lkZSA/ICcwJyA6ICcxcmVtJ307XHJcbiAgICAgICAgICAgICR7bW9iaWxlU3R5bGUgfHwgJyd9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSJdfQ== */
/*@ sourceURL=E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\container.js */`), children);
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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\designLayouts\\headings.js";

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
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/About */ "./pages/About/index.js");
/* harmony import */ var _pages_OurInfa_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/OurInfa/index */ "./pages/OurInfa/index.js");
/* harmony import */ var _pages_Service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Service */ "./pages/Service/index.js");
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Header = ({
  sticky = true
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_pages_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1673863491",
    __self: undefined
  }, "header.jsx-1673863491{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;background:#fff;z-index:1000;border-bottom:1px solid #eaeaea;}header.sticky.jsx-1673863491{position:-webkit-sticky;position:sticky;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHd0IsQUFVRyx3Q0FDVixNQUNSLDRCQVh3Qiw4RUFDTywySEFDViw2RkFDUixXQUNLLGdCQUNILGFBQ21CLGdDQUNsQyIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXHNwaW5lb3ItbmV4dFxcc3BpbmVvci1uZXh0XFxjb21wb25lbnRzXFxoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4vYmFubmVyJztcclxuaW1wb3J0IE5hdiBmcm9tICcuL25hdmJhcic7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9wYWdlcy9BYm91dCc7XHJcbmltcG9ydCBPdXJJbmZhIGZyb20gXCIuLi9wYWdlcy9PdXJJbmZhL2luZGV4XCI7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4uL3BhZ2VzL1NlcnZpY2UnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgc3RpY2t5ID0gdHJ1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8QWJvdXQvPlxyXG4gICAgICBcclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlYWRlci5zdGlja3kge1xyXG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEhlYWRlcik7Il19 */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Header));

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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\listProperty\\index.js";

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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\listProperty\\propertyCard.js";

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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\navbar.js";


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
  }, "nav.jsx-3951959841{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.links.jsx-3951959841{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;z-index:1;}.links.jsx-3951959841 a.jsx-3951959841{-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}.links.jsx-3951959841 a.jsx-3951959841:hover{color:#000;}.links.jsx-3951959841 a.selected.jsx-3951959841{color:#0070f3;font-weight:600;}.links.jsx-3951959841 a.jsx-3951959841:first-child,.links.jsx-3951959841 a.jsx-3951959841:last-child{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.icon.jsx-3951959841,a.icon.jsx-3951959841>div.container{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.icon.jsx-3951959841>div.container{overflow:visible;}.mobile-logo.jsx-3951959841,.mobile-top.jsx-3951959841{display:none;}.header-feedback.jsx-3951959841{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}@media (max-width:640px){.mobile-logo.jsx-3951959841{display:block;}nav.jsx-3951959841{height:unset;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:1rem 0;}nav.jsx-3951959841 .links.jsx-3951959841 .logo.jsx-3951959841,nav.jsx-3951959841 .links.jsx-3951959841 .icon.jsx-3951959841{display:none;}nav.jsx-3951959841 .links.jsx-3951959841 a.jsx-3951959841{font-size:14px;}.mobile-top.jsx-3951959841{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:0.5rem;}.mobile-top.jsx-3951959841>.icons.jsx-3951959841{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.mobile-top.jsx-3951959841>.icons.jsx-3951959841 a.jsx-3951959841:nth-child(2){margin-left:2rem;}}@media (max-width:950px){.header-feedback.jsx-3951959841{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXG5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RGtCLEFBRzZCLEFBT1AsQUFPVSxBQUlWLEFBR0csQUFLRCxBQUtPLEFBSUgsQUFJSixBQUdPLEFBS0osQUFHRCxBQVFBLEFBR0UsQUFHSixBQU9FLEFBSUksQUFLSixXQXhFRixBQVdmLEFBOENpQixFQXpCakIsQUFXMEIsQUFReEIsQUFzQkEsQ0EzRGdCLEFBMEJoQixDQWNBLEVBMUJGLEFBd0NFLENBM0VPLFlBc0JULG9CQVI2QixDQWJmLFlBQ0MsV0F3QmYsQUE2Q3VCLFdBL0RGLEFBeURFLE1BZEksV0FwQkYsQUFXekIsVUEzQkEseUJBWnFCLDhCQXFFbkIsV0EvRDhCLEFBeURFLHNCQWRILENBcEIvQiw2QkE1QkEsK0RBTVksQUF5RGEsVUF4RHpCLEVBMENtQixTQWVqQixNQWRBIiwiZmlsZSI6IkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXG5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQW1wIH0gZnJvbSAnbmV4dC9hbXAnO1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IFNraXBOYXZMaW5rIH0gZnJvbSAnQHJlYWNoL3NraXAtbmF2JztcclxuXHJcbi8vIGltcG9ydCBOZXh0TG9nbyBmcm9tICcuL2xvZ28nO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJztcclxuXHJcbi8vIGltcG9ydCBHaXRIdWJMb2dvIGZyb20gJy4vaWNvbnMvZ2l0aHViJztcclxuLy8gaW1wb3J0IEhlYWRlckZlZWRiYWNrIGZyb20gJy4vaGVhZGVyLWZlZWRiYWNrJztcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCB7IHJvdXRlIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpc0FtcCA9IHVzZUFtcCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjZW50ZXI+XHJcbiAgICAgIDxTa2lwTmF2TGluayB0YWJJbmRleD1cIjBcIiAvPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgTmV4dC5qc1xyXG4gICAgICA8L2gxPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImYtcmVzZXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS10b3BcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1vYmlsZS1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgSG91c2VlYXN5XHJcbiAgICAgICAgICAgICAgey8qIDxOZXh0TG9nbyAvPiAqL31cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgSG91c2VlYXN5XHJcbiAgICAgICAgICAgICAgey8qIDxOZXh0TG9nbyAvPiAqL31cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKCdtdXRlJywge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHJvdXRlLnN0YXJ0c1dpdGgoJy9mZWF0dXJlcycpXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJIb21lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wXCIgYXM9XCIvcFwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ211dGUnLCB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogcm91dGUuc3RhcnRzV2l0aCgnL2xpc3QnKVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiTGlzdCBwcm9wZXJ0eVwiXHJcbiAgICAgICAgICAgID5MaXN0IFByb3BlcnR5PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBuYXYge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlua3Mge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5rcyBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmtzIGE6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5rcyBhLnNlbGVjdGVkIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmtzIGE6Zmlyc3QtY2hpbGQsXHJcbiAgICAgICAgLmxpbmtzIGE6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhLmljb24sXHJcbiAgICAgICAgYS5pY29uID4gOmdsb2JhbChkaXYuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAvKiBSZW1vdmUgYWRkaXRpb25hbCBzcGFjZSBmcm9tIFNWRyAqL1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYS5pY29uID4gOmdsb2JhbChkaXYuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vYmlsZS1sb2dvLFxyXG4gICAgICAgIC5tb2JpbGUtdG9wIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXItZmVlZGJhY2sge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIE1vYmlsZSAqL1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgICAgLm1vYmlsZS1sb2dvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IHVuc2V0O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuYXYgLmxpbmtzIC5sb2dvLFxyXG4gICAgICAgICAgbmF2IC5saW5rcyAuaWNvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuYXYgLmxpbmtzIGEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubW9iaWxlLXRvcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tb2JpbGUtdG9wID4gLmljb25zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tb2JpbGUtdG9wID4gLmljb25zIGE6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgLmhlYWRlci1mZWVkYmFjayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKE5hdmJhcik7Il19 */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\navbar.js */"));
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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\page-container.js";


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
  }, "html{line-height:1.15;-webkit-text-size-adjust:100%;height:100%;box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body{position:relative;min-height:100%;margin:0;line-height:1.65;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;font-size:16px;font-weight:400;min-width:320px;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}html,body{background-color:#fff;color:#111;}::selection{background-color:#0070f3;color:#fff;}[role='grid']:focus{outline:none;}svg{text-rendering:optimizeLegibility;}h1,h2,h3{margin:0;}a{color:#0074de;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}a:hover{color:#68b5fb;}code{font-size:0.9em;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono, Bitstream Vera Sans Mono,Courier New,monospace,serif;}code:before,code:after{content:'\\`';}pre code:before,pre code:after{content:none;}.demo-footer .note code{background:rgba(0,0,0,0.2);padding:0.2rem;margin:0 0.1rem;border-radius:2px;}iframe{width:100%;height:100%;border:none;}.f-reset{font-size:1rem;}.f0{font-size:1.802032470703125em;}.f1{font-size:1.601806640625em;}.f2{font-size:1.423828125em;}.f3{font-size:1.265625em;}.f4{font-size:1.125em;}.f5{font-size:0.8888888888888888em;}.f6{font-size:0.7901234567901234em;}.fw1{font-weight:100;}.fw2{font-weight:200;}.fw3{font-weight:300;}.fw4{font-weight:400;}.fw5{font-weight:500;}.fw6{font-weight:600;}.fw7{font-weight:700;}.fw8{font-weight:800;}.fw9{font-weight:900;}.subtitle{color:#696969;}.mute{color:#696969;}.tc{text-align:center;}.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 -1.5rem;}.column{-webkit-flex:1;-ms-flex:1;flex:1;padding:0 1.5rem;}.display-none{display:none;}.display-mobile{display:none;}.display-tablet{display:none;}@media screen and (max-width:640px){.display-mobile{display:unset;}.hide-mobile{display:none;}}@media screen and (max-width:960px){.display-tablet{display:unset;}.hide-tablet{display:none;}}a[role='button']{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.no-tap-highlight,a{-webkit-touch-callout:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent;}.no-tap-callout{-webkit-touch-callout:none;}.no-drag{-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-user-select:none;-webkit-user-drag:none;-webkit-user-select:none;-ms-user-select:none;}.visually-hidden{-webkit-clip:rect(0 0 0 0);clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;overflow:hidden;position:absolute;}code[class*='language-'],pre[class*='language-']{color:#f8f8f2;text-shadow:0 1px rgba(0,0,0,0.3);direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#999;}.token.punctuation{color:#c5c8c6;}.namespace{opacity:0.7;}.token.property,.token.keyword,.token.tag{color:#96cbfe;}.token.class-name{color:#ffffb6;}.token.boolean,.token.constant{color:#99cc99;}.token.symbol,.token.deleted{color:#f92672;}.token.number{color:#ff73fd;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#a8ff60;}.token.variable{color:#c6c5fe;}.token.operator{color:#ededed;}.token.entity{color:#ffffb6;cursor:help;}.token.url{color:#96cbfe;}.language-css .token.string,.style .token.string{color:#87c38a;}.token.atrule,.token.attr-value{color:#f9ee98;}.token.function{color:#dad085;}.token.regex{color:#e9c062;}.token.important{color:#fd971f;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}svg{shape-rendering:crispEdges;}svg path,svg circle{shape-rendering:geometricprecision;}[data-reach-skip-link]{border:0;-webkit-clip:rect(0 0 0 0);clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;overflow:hidden;position:absolute;}[data-reach-skip-link]:focus{padding:1rem;position:fixed;top:10px;left:10px;background:white;z-index:1;width:auto;height:auto;-webkit-clip:auto;clip:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXHBhZ2UtY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCUyxBQUc4QixBQVFFLEFBR0QsQUFrQkksQUFJRyxBQUlaLEFBR3FCLEFBS3pCLEFBR0ssQUFLQSxBQUdFLEFBTUgsQUFJQSxBQUdpQixBQU1uQixBQUtJLEFBR2UsQUFHSCxBQUdILEFBR0gsQUFHSCxBQUdhLEFBR0EsQUFHZixBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRixBQUdBLEFBR0ksQUFHTCxBQUtOLEFBSU0sQUFHQSxBQUdBLEFBSUcsQUFHRCxBQUtDLEFBR0QsQUFJVSxBQVFFLEFBTUEsQUFHWixBQVFJLEFBV0wsQUFlSCxBQUdHLEFBR0YsQUFLRSxBQUdBLEFBSUEsQUFJQSxBQUdBLEFBUUEsQUFHQSxBQUdBLEFBR0EsQUFJQSxBQUlBLEFBSUEsQUFHQSxBQUdBLEFBR0EsQUFJRyxBQUdDLEFBR1MsQUFJUSxBQUcxQixBQVVJLFNBN1FmLEFBb1FxQixFQXRPUCxBQXNKZCxDQU1BLENBbE1BLEFBeUJBLEFBSUEsQUFtRkEsQUFHQSxBQUdBLEFBT0UsQUFRQSxBQWlKZSxDQTNRTSxBQUt2QixBQThFQSxBQUdBLEFBeUJFLEFBUUEsQUEyQ3FDLEFBa0J2QyxBQVFBLEFBR0EsQUFJQSxBQUlBLEFBR0EsQUFRQSxBQUdBLEFBR0EsQUFHYyxBQUlkLEFBSUEsQUFJQSxBQUdBLEFBR0EsQUFHQSxDQWhOQSxDQXZCMkQsQUErQzNELEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxDQWhJZ0MsQUFvU2hDLENBelJrQixBQW9GbEIsQUEwQ0EsQUE4SkEsQ0EvUkEsRUFvRkEsQ0EvRGEsQ0ErQ0MsQ0FhZCxDQXhEYSxBQTZJVyxDQThGeEIsQ0F2TWlCLEFBaUJqQixBQWdHeUIsQUFNekIsQUE4R0EsQ0FrQlcsRUF6T1gsQ0FlQSxBQUdBLEVBdkVBLEFBbUhtQixDQXJJUixBQTRCWCxDQXFDQSxBQWlPQSxDQTVRQSxDQTJSWSxLQXZQTSxDQXpEQyxHQTBMTixDQXRNQyxBQThLUyxBQStJSixDQTNHSCxFQWpFaEIsQUFxQ3FCLEtBMkhSLEVBMUdELENBaklRLENBckVJLENBYWdELEVBcU10RCxFQW5LVyxBQThRakIsRUFaQSxDQTFHRSxDQXpCWSxDQVFnQixLQTVDckIsQUFvTFIsRUF4UGIsQUE0T2MsQ0FySEssQ0FzQkQsQ0FYTixFQXZNWixJQThUYyxHQVpGLENBMUdELEdBMUJRLEVBcUNHLEdBNEdWLENBdEhNLEFBMEdBLFdBN0hsQixLQW9Cb0IsQUFVQSxBQWdHQSxXQVlwQixDQWpSQSxNQTRKQSxBQVVrQixBQWdHbEIsV0E5UEEsS0ErSmEsV0FDRSxHQTFCUyxLQW5ETCxVQXFDbkIsT0FwQ0EsQUFtRHlCLHVCQUNFLEVBbExWLGVBQ0MsSUEwTWxCLElBeEJ1QixRQWpMTCxhQWtMbEIsR0FqTGdCLGNBQ2UsNkJBQ0ssa0NBQ0MsbUNBQ0Qsa0NBQ1gsNkdBQ3pCIiwiZmlsZSI6IkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXHBhZ2UtY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHRyYWNrUGFnZXZpZXcgfSBmcm9tICcuLi9saWIvYW5hbHl0aWNzJztcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCB1cmwgPT4ge1xyXG4gIHRyYWNrUGFnZXZpZXcodXJsKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlQ29udGFpbmVyKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGUgfHwgJ0hvdXNlYXN5IC0gVGhlIFJlYWxFc3RhdGUgc2l0ZSd9PC90aXRsZT5cclxuICAgICAgICB7ZGVzY3JpcHRpb24gIT09IGZhbHNlICYmIChcclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uIHx8ICdIb3VzZWFzeSAtIFRoZSBSZWFsRXN0YXRlIHNpdGUnfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAqLFxyXG4gICAgICAgICAgKjpiZWZvcmUsXHJcbiAgICAgICAgICAqOmFmdGVyIHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsXHJcbiAgICAgICAgICAgICAgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xyXG4gICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBodG1sLFxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTExO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgOjpzZWxlY3Rpb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFtyb2xlPSdncmlkJ106Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxLFxyXG4gICAgICAgICAgaDIsXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNzRkZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2OGI1ZmI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb2RlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sIERlamFWdSBTYW5zIE1vbm8sXHJcbiAgICAgICAgICAgICAgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlLCBzZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvZGU6YmVmb3JlLFxyXG4gICAgICAgICAgY29kZTphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJlIGNvZGU6YmVmb3JlLFxyXG4gICAgICAgICAgcHJlIGNvZGU6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlbW8tZm9vdGVyIC5ub3RlIGNvZGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAuMXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmYtcmVzZXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZjAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuODAyMDMyNDcwNzAzMTI1ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZjEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNjAxODA2NjQwNjI1ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZjIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNDIzODI4MTI1ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZjMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjY1NjI1ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZjQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZjUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuODg4ODg4ODg4ODg4ODg4OGVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmY2IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc5MDEyMzQ1Njc5MDEyMzRlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mdzEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZ3MiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZnczIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mdzQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZ3NSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZnc2IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mdzcge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZ3OCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZnc5IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjk2OTY5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm11dGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzY5Njk2OTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50YyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgLTEuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaXNwbGF5LW5vbmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpc3BsYXktbW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaXNwbGF5LXRhYmxldCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgICAgICAuZGlzcGxheS1tb2JpbGUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oaWRlLW1vYmlsZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAgICAgLmRpc3BsYXktdGFibGV0IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGlkZS10YWJsZXQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFbcm9sZT0nYnV0dG9uJ10ge1xyXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubm8tdGFwLWhpZ2hsaWdodCxcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gICAgICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5vLXRhcC1jYWxsb3V0IHtcclxuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5vLWRyYWcge1xyXG4gICAgICAgICAgICB1c2VyLWRyYWc6IG5vbmU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpc3VhbGx5LWhpZGRlbiB7XHJcbiAgICAgICAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IC0xcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddLFxyXG4gICAgICAgICAgcHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10ge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y4ZjhmMjtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgICAgICAgICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgIHRhYi1zaXplOiA0O1xyXG4gICAgICAgICAgICBoeXBoZW5zOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRva2VuLmNvbW1lbnQsXHJcbiAgICAgICAgICAudG9rZW4ucHJvbG9nLFxyXG4gICAgICAgICAgLnRva2VuLmRvY3R5cGUsXHJcbiAgICAgICAgICAudG9rZW4uY2RhdGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50b2tlbi5wdW5jdHVhdGlvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYzVjOGM2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hbWVzcGFjZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50b2tlbi5wcm9wZXJ0eSxcclxuICAgICAgICAgIC50b2tlbi5rZXl3b3JkLFxyXG4gICAgICAgICAgLnRva2VuLnRhZyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTZjYmZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRva2VuLmNsYXNzLW5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZiNjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50b2tlbi5ib29sZWFuLFxyXG4gICAgICAgICAgLnRva2VuLmNvbnN0YW50IHtcclxuICAgICAgICAgICAgY29sb3I6ICM5OWNjOTk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9rZW4uc3ltYm9sLFxyXG4gICAgICAgICAgLnRva2VuLmRlbGV0ZWQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y5MjY3MjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50b2tlbi5udW1iZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmNzNmZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50b2tlbi5zZWxlY3RvcixcclxuICAgICAgICAgIC50b2tlbi5hdHRyLW5hbWUsXHJcbiAgICAgICAgICAudG9rZW4uc3RyaW5nLFxyXG4gICAgICAgICAgLnRva2VuLmNoYXIsXHJcbiAgICAgICAgICAudG9rZW4uYnVpbHRpbixcclxuICAgICAgICAgIC50b2tlbi5pbnNlcnRlZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYThmZjYwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRva2VuLnZhcmlhYmxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNjNmM1ZmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9rZW4ub3BlcmF0b3Ige1xyXG4gICAgICAgICAgICBjb2xvcjogI2VkZWRlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50b2tlbi5lbnRpdHkge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZiNjtcclxuICAgICAgICAgICAgY3Vyc29yOiBoZWxwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRva2VuLnVybCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTZjYmZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nLFxyXG4gICAgICAgICAgLnN0eWxlIC50b2tlbi5zdHJpbmcge1xyXG4gICAgICAgICAgICBjb2xvcjogIzg3YzM4YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50b2tlbi5hdHJ1bGUsXHJcbiAgICAgICAgICAudG9rZW4uYXR0ci12YWx1ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjllZTk4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRva2VuLmZ1bmN0aW9uIHtcclxuICAgICAgICAgICAgY29sb3I6ICNkYWQwODU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9rZW4ucmVnZXgge1xyXG4gICAgICAgICAgICBjb2xvcjogI2U5YzA2MjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50b2tlbi5pbXBvcnRhbnQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZkOTcxZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50b2tlbi5pbXBvcnRhbnQsXHJcbiAgICAgICAgICAudG9rZW4uYm9sZCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRva2VuLml0YWxpYyB7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN2ZyBwYXRoLFxyXG4gICAgICAgICAgc3ZnIGNpcmNsZSB7XHJcbiAgICAgICAgICAgIHNoYXBlLXJlbmRlcmluZzogZ2VvbWV0cmljcHJlY2lzaW9uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgW2RhdGEtcmVhY2gtc2tpcC1saW5rXSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogLTFweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgW2RhdGEtcmVhY2gtc2tpcC1saW5rXTpmb2N1cyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgY2xpcDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\page-container.js */"));
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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\page.js";

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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\social-meta.js";

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

/***/ "./pages/About/index.js":
/*!******************************!*\
  !*** ./pages/About/index.js ***!
  \******************************/
/*! exports provided: About, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_About_Whoarewe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common/About/Whoarewe */ "./Common/About/Whoarewe.js");
/* harmony import */ var _Common_About_Methodology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/About/Methodology */ "./Common/About/Methodology.js");
/* harmony import */ var _Common_About_Process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/About/Process */ "./Common/About/Process.js");
/* harmony import */ var _Common_About_Helpus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/About/Helpus */ "./Common/About/Helpus.js");
/* harmony import */ var _Common_About_Company__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/About/Company */ "./Common/About/Company.js");
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\pages\\About\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class About extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx(_Common_About_Whoarewe__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 15
      }
    }), __jsx(_Common_About_Methodology__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }), __jsx(_Common_About_Process__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }), __jsx(_Common_About_Helpus__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }), __jsx(_Common_About_Company__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (About);

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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\pages\\OurInfa\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class OurInfa extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx(_common_OurInfastructure_banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (OurInfa);

/***/ }),

/***/ "./pages/Service/index.js":
/*!********************************!*\
  !*** ./pages/Service/index.js ***!
  \********************************/
/*! exports provided: Service, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_Services_Topbanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common/Services/Topbanner */ "./Common/Services/Topbanner.js");
/* harmony import */ var _Common_Services_Javafactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/Services/Javafactory */ "./Common/Services/Javafactory.js");
/* harmony import */ var _Common_Services_Development__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/Services/Development */ "./Common/Services/Development.js");
/* harmony import */ var _Common_Services_Migration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/Services/Migration */ "./Common/Services/Migration.js");
/* harmony import */ var _Common_Services_Bestsolutions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/Services/Bestsolutions */ "./Common/Services/Bestsolutions.js");
/* harmony import */ var _Common_Services_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/Services/Contact */ "./Common/Services/Contact.js");
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\pages\\Service\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Service extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx(_Common_Services_Topbanner__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }), __jsx(_Common_Services_Javafactory__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }), __jsx(_Common_Services_Development__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }), __jsx(_Common_Services_Migration__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }), __jsx(_Common_Services_Bestsolutions__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }), __jsx(_Common_Services_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Service);

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
/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer/footer */ "./components/Footer/footer.js");
/* harmony import */ var _components_listProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/listProperty */ "./components/listProperty/index.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_globalFunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/globalFunc */ "./shared/globalFunc.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_social_meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/social-meta */ "./components/social-meta.js");
/* harmony import */ var _reach_skip_nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reach/skip-nav */ "@reach/skip-nav");
/* harmony import */ var _reach_skip_nav__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_reach_skip_nav__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Header_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header/header */ "./components/Header/header.js");
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











/* harmony default export */ __webpack_exports__["default"] = (props => {
  const isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_1__["useAmp"])();
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_components_Header_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), __jsx(_components_Home_home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), __jsx(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }));
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

module.exports = __webpack_require__(/*! E:\reactjs\office-work\spineor-next\spineor-next\pages\index.js */"./pages/index.js");


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