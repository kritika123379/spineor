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

/***/ "./components/FAQ/Icon.js":
/*!********************************!*\
  !*** ./components/FAQ/Icon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\FAQ\\Icon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("svg", {
  id: "Layer_1",
  version: "1.1",
  viewBox: "0 0 612 792",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 1
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 1
  }
}, __jsx("path", {
  class: "st0",
  d: "M562,396c0-141.4-114.6-256-256-256S50,254.6,50,396s114.6,256,256,256S562,537.4,562,396L562,396z    M501.7,296.3l-241,241l0,0l-17.2,17.2L110.3,421.3l58.8-58.8l74.5,74.5l199.4-199.4L501.7,296.3L501.7,296.3z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 4
  }
}))));

/***/ }),

/***/ "./components/FAQ/faqs.js":
/*!********************************!*\
  !*** ./components/FAQ/faqs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./components/FAQ/Icon.js");
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\FAQ\\faqs.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const FAQS = () => {
  return __jsx("div", {
    className: "jsx-3676495341",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3676495341" + " " + "faqs-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3676495341" + " " + "faqs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "FAQs"), __jsx("div", {
    className: "jsx-3676495341" + " " + "faqs-below",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "Got Questions? We have got answers!"), __jsx("div", {
    className: "jsx-3676495341" + " " + "faqs-des",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "We have compiled a short list of the questions we are asked most frequently by our clients, our FAQs. If you don\u2019t see the answer to your question here, please call us at (+91) 9163553305 ( Monday - Friday, 10AM - 9PM IST) or email us.")), __jsx("div", {
    className: "jsx-3676495341" + " " + "one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "01"), __jsx("div", {
    className: "jsx-3676495341" + " " + "line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3676495341" + " " + "one-quest",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "What are the services Spineor providing?"), __jsx("div", {
    className: "jsx-3676495341" + " " + "one-ans",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Spineor works with the organizations worldwide to provide them with software development and web development solutions and services. Broadly, we provide the following services :"), __jsx("div", {
    className: "jsx-3676495341" + " " + "point-table",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Mobile Application Development", __jsx("br", {
    className: "jsx-3676495341",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), "iPhone Application Development", __jsx("br", {
    className: "jsx-3676495341",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), "Web Development", __jsx("br", {
    className: "jsx-3676495341",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), "Web Redesign and Maintenance", __jsx("br", {
    className: "jsx-3676495341",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), "E-Commerce Solutions", __jsx("br", {
    className: "jsx-3676495341",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), "E-commerce Website Design"), __jsx("div", {
    className: "jsx-3676495341" + " " + "point-table2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "E-commerce Web Development", __jsx("br", {
    className: "jsx-3676495341",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), "Fullstack Web Development", __jsx("br", {
    className: "jsx-3676495341",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), "Internet Marketing and SEO", __jsx("br", {
    className: "jsx-3676495341",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), "Open Source Customization \u2013 Joomla, Drupal, Magento, OsCommerce etc"), __jsx("div", {
    className: "jsx-3676495341" + " " + "two",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "02"), __jsx("div", {
    className: "jsx-3676495341" + " " + "line2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3676495341" + " " + "two-quest",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "How can I communicate with Spineor?"), __jsx("div", {
    className: "jsx-3676495341" + " " + "03",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3676495341" + " " + "04",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3676495341" + " " + "05",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3676495341",
    __self: undefined
  }, ".faqs-box.jsx-3676495341{position:absolute;width:1340px;height:630px;left:0px;top:74px;background:#FFFFFF;}.faqs.jsx-3676495341{position:absolute;width:426px;height:100px;left:111px;top:288px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:90px;line-height:105px;color:#333333;}.faqs-below.jsx-3676495341{position:absolute;width:385px;height:168px;left:111px;top:394px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:37px;line-height:43px;color:#555555;}.faqs-des.jsx-3676495341{position:absolute;width:520px;height:398px;left:656px;top:236px;font-family:Roboto;font-style:normal;font-weight:300;font-size:36px;line-height:42px;color:#333333;}.one.jsx-3676495341{position:absolute;width:28px;height:28px;left:271px;top:814px;font-family:Roboto;font-style:normal;font-weight:900;font-size:24px;line-height:28px;color:#184A88;}.one-quest.jsx-3676495341{position:absolute;width:438px;height:28px;left:339px;top:814px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#184A88;}.one-ans.jsx-3676495341{position:absolute;width:688px;height:70px;left:345px;top:884px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#000000;}.point-table.jsx-3676495341{position:absolute;width:269px;height:201px;left:373px;top:981px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:180.7%;color:#000000;}.point-table2.jsx-3676495341{position:absolute;width:269px;height:201px;left:712px;top:981px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:184%;color:#000000;}.line.jsx-3676495341{position:absolute;width:60px;height:0px;left:286px;top:826px;border:1px solid rgba(0,0,0,0.26);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.two.jsx-3676495341{position:absolute;width:28px;height:28px;left:271px;top:1299px;font-family:Roboto;font-style:normal;font-weight:900;font-size:24px;line-height:28px;color:#184A88;}.line2.jsx-3676495341{position:absolute;width:60px;height:0px;left:286px;top:1310px;border:1px solid rgba(0,0,0,0.26);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.two-quest.jsx-3676495341{position:absolute;width:404px;height:28px;left:339px;top:1299px;font-family:Roboto;font-style:normal;font-weight:300;font-size:24px;line-height:28px;color:#000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEZBUVxcZmFxcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRHdCLEFBSTJCLEFBU0EsQUFjQSxBQWNBLEFBY0EsQUFjQSxBQWNBLEFBY0EsQUFjQSxBQWNBLEFBVUEsQUFjQSxBQVVBLGtCQTFKTCxBQVNELEFBY0EsQUFjQSxBQWNELEFBY0MsQUFjQSxBQWNBLEFBY0EsQUFjRCxBQVVBLEFBY0EsQUFVQyxXQXZHQSxBQXNFRCxBQVVDLEFBY0QsQ0F4SUUsQUFjQSxBQWNBLEFBNEJELEFBY0EsQUFjQyxBQWNBLEFBZ0RELENBM0pDLFNBMEhGLEFBd0JBLENBOUZBLEFBZ0ZBLENBbEVBLEFBY0EsQUE0RUEsQ0FsSkEsQUFjQSxBQWNBLEFBd0RBLEFBY0EsQ0EzR0YsT0EwSEMsQUF3QkMsQ0E5RkQsQUFnRkMsQ0FuSUYsQUFpRUMsQUFjQSxBQTRFQyxDQWxKRCxBQWNBLEFBY0EsQUF3REEsQUFjQSxPQWUyQixDQXpIbEIsQUFtREEsQUE4RmtCLENBaEZsQixBQWNBLEFBb0RBLENBMUhBLEFBY0EsQUFjQSxBQXdEQSxBQWNBLEFBZ0RBLGlCQTFKdkIsQUFtRHNCLENBY0EsQUFjQSxBQW9EQSxDQTFIQSxBQWNBLEFBY0EsQUF3REEsQUFjQSxBQWdEQSxZQWxDTSxDQXdCQSxHQTdGUixDQWNBLEFBY0EsQUFvREEsQ0ExSEMsQUFjQSxBQWNELEFBd0RBLEFBY0EsQUFnREEsY0F2R0QsQ0FjQSxBQWNBLEFBb0RBLENBOUZBLEFBd0RBLEFBY0EsQUFnREEsQ0FsSkEsQUFjQSxZQTZCRSxDQWNBLEFBY0EsQUFvREEsQ0E5RkEsQUF3REUsQUFjRixBQWdEQSxDQWxKQyxBQWNELGNBNkJILENBY0EsQUFjQSxBQW9EQSxDQTlGQSxBQXNFQSxBQWdEQSxDQXBJQSxDQWRBLEFBb0ZBLFVBekNsQixDQWNBLEFBY0EsQUFvREEsQ0E5RkEsQUFzRUEsQUFnREEsQ0FwSUEsQ0FkQSxBQW9GQSxjQXdCQSxDQXdCQSIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXHNwaW5lb3ItbmV4dFxcc3BpbmVvci1uZXh0XFxjb21wb25lbnRzXFxGQVFcXGZhcXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbiBmcm9tIFwiLi9JY29uXCJcclxuXHJcbmNvbnN0IEZBUVMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFxcy1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImZhcXNcIj5cclxuICAgICAgICAgICAgICAgIEZBUXNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiZmFxcy1iZWxvd1wiPlxyXG4gICAgICAgICAgICAgICAgR290IFF1ZXN0aW9ucz8gV2UgaGF2ZSBnb3QgYW5zd2VycyFcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiZmFxcy1kZXNcIj5cclxuICAgICAgICAgICAgICAgIFdlIGhhdmUgY29tcGlsZWQgYSBzaG9ydCBsaXN0IG9mIHRoZSBxdWVzdGlvbnMgd2UgYXJlIGFza2VkIG1vc3QgZnJlcXVlbnRseSBieSBvdXIgY2xpZW50cywgb3VyIEZBUXMuIElmIHlvdSBkb27igJl0IHNlZSB0aGUgYW5zd2VyIHRvIHlvdXIgcXVlc3Rpb24gaGVyZSwgcGxlYXNlIGNhbGwgdXMgYXQgKCs5MSkgOTE2MzU1MzMwNSAoIE1vbmRheSAtIEZyaWRheSwgMTBBTSAtIDlQTSBJU1QpIG9yIGVtYWlsIHVzLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJvbmVcIj4wMTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcIm9uZS1xdWVzdFwiPlxyXG4gICAgICAgICAgICBXaGF0IGFyZSB0aGUgc2VydmljZXMgU3BpbmVvciBwcm92aWRpbmc/XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJvbmUtYW5zXCI+XHJcbiAgICAgICAgICAgIFNwaW5lb3Igd29ya3Mgd2l0aCB0aGUgb3JnYW5pemF0aW9ucyB3b3JsZHdpZGUgdG8gcHJvdmlkZSB0aGVtIHdpdGggc29mdHdhcmUgZGV2ZWxvcG1lbnQgYW5kIHdlYiBkZXZlbG9wbWVudCBzb2x1dGlvbnMgYW5kIHNlcnZpY2VzLiBCcm9hZGx5LCB3ZSBwcm92aWRlIHRoZSBmb2xsb3dpbmcgc2VydmljZXMgOlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwicG9pbnQtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIE1vYmlsZSBBcHBsaWNhdGlvbiBEZXZlbG9wbWVudCBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBpUGhvbmUgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnQgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgV2ViIERldmVsb3BtZW50IFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFdlYiBSZWRlc2lnbiBhbmQgTWFpbnRlbmFuY2UgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgRS1Db21tZXJjZSBTb2x1dGlvbnMgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgRS1jb21tZXJjZSBXZWJzaXRlIERlc2lnblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInBvaW50LXRhYmxlMlwiPlxyXG4gICAgICAgICAgICBFLWNvbW1lcmNlIFdlYiBEZXZlbG9wbWVudCBcclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgRnVsbHN0YWNrIFdlYiBEZXZlbG9wbWVudCBcclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgSW50ZXJuZXQgTWFya2V0aW5nIGFuZCBTRU8gXHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIE9wZW4gU291cmNlIEN1c3RvbWl6YXRpb24g4oCTIEpvb21sYSwgRHJ1cGFsLCBNYWdlbnRvLCBPc0NvbW1lcmNlIGV0Y1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwidHdvXCI+MDI8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwibGluZTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwidHdvLXF1ZXN0XCI+XHJcbiAgICAgICAgICAgIEhvdyBjYW4gSSBjb21tdW5pY2F0ZSB3aXRoIFNwaW5lb3I/XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCIwM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCIwNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCIwNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgLmZhcXMtYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEzNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDYzMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDc0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuZmFxcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA0MjZweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGxlZnQ6IDExMXB4O1xyXG4gICAgICAgIHRvcDogMjg4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDVweDtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIH1cclxuXHJcbiAgICAuZmFxcy1iZWxvdyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAzODVweDtcclxuICAgICAgICBoZWlnaHQ6IDE2OHB4O1xyXG4gICAgICAgIGxlZnQ6IDExMXB4O1xyXG4gICAgICAgIHRvcDogMzk0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzN3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgfVxyXG5cclxuICAgIC5mYXFzLWRlcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA1MjBweDtcclxuICAgICAgICBoZWlnaHQ6IDM5OHB4O1xyXG4gICAgICAgIGxlZnQ6IDY1NnB4O1xyXG4gICAgICAgIHRvcDogMjM2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgLm9uZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBsZWZ0OiAyNzFweDtcclxuICAgICAgICB0b3A6IDgxNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTg0QTg4O1xyXG4gICAgfVxyXG5cclxuICAgIC5vbmUtcXVlc3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNDM4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGxlZnQ6IDMzOXB4O1xyXG4gICAgICAgIHRvcDogODE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgY29sb3I6ICMxODRBODg7XHJcbiAgICB9XHJcblxyXG4gICAgLm9uZS1hbnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNjg4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIGxlZnQ6IDM0NXB4O1xyXG4gICAgICAgIHRvcDogODg0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvaW50LXRhYmxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI2OXB4O1xyXG4gICAgICAgIGhlaWdodDogMjAxcHg7XHJcbiAgICAgICAgbGVmdDogMzczcHg7XHJcbiAgICAgICAgdG9wOiA5ODFweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTgwLjclO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wb2ludC10YWJsZTIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjY5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDFweDtcclxuICAgICAgICBsZWZ0OiA3MTJweDtcclxuICAgICAgICB0b3A6IDk4MXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxODQlO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5lIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgbGVmdDogMjg2cHg7XHJcbiAgICAgICAgdG9wOiA4MjZweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAudHdvIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGxlZnQ6IDI3MXB4O1xyXG4gICAgICAgIHRvcDogMTI5OXB4OyAgICAgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7ICAgICAgICBcclxuICAgICAgICBjb2xvcjogIzE4NEE4ODtcclxuICAgIH1cclxuXHJcbiAgICAubGluZTIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICBsZWZ0OiAyODZweDtcclxuICAgICAgICB0b3A6IDEzMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAudHdvLXF1ZXN0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDQwNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBsZWZ0OiAzMzlweDtcclxuICAgICAgICB0b3A6IDEyOTlweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDsgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRkFRUyJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\FAQ\\\\faqs.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FAQS);

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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Footer\\Facebook.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("svg", {
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 1
  }
}, __jsx("path", {
  d: "m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h236.574219v-198h-66.5v-77.5h66.5v-57.035156c0-66.140625 40.378906-102.140625 99.378906-102.140625 28.257813 0 52.542969 2.105469 59.621094 3.046875v69.128906h-40.683594c-32.101562 0-38.316406 15.253906-38.316406 37.640625v49.359375h76.75l-10 77.5h-66.75v198h121.574219c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm0 0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 64
  }
})));

/***/ }),

/***/ "./components/Footer/Linkedin.js":
/*!***************************************!*\
  !*** ./components/Footer/Linkedin.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Footer\\Linkedin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => //<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/></svg>
__jsx("svg", {
  version: "1.1",
  id: "Capa_1",
  viewBox: "0 0 455.731 455.731",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 1
  }
}, __jsx("path", {
  d: "M0,0v455.731h455.731V0H0z M139.94,375.963c0,5.804-4.705,10.509-10.509,10.509H84.71c-5.804,0-10.509-4.705-10.509-10.509\r V185.18c0-5.804,4.705-10.509,10.509-10.509h44.721c5.804,0,10.509,4.705,10.509,10.509V375.963z M106.998,145.491\r c-20.308,0.411-38.155-16.551-38.151-38.188c0-20.985,17.282-38.105,38.408-38.088c20.873,0.017,38.088,17.257,38.043,38.234\r C145.248,129.413,127.02,145.969,106.998,145.491z M386.884,382.153c0,2.41-1.954,4.363-4.364,4.362l-57.152-0.014\r c-2.409-0.001-4.362-1.954-4.362-4.363V264.331c0-10.183-4.126-19.407-10.802-26.079c-6.764-6.768-16.149-10.916-26.501-10.799\r c-20.279,0.229-36.454,17.068-36.454,37.348v117.323c0,2.41-1.954,4.363-4.364,4.362l-57.011-0.014\r c-2.409-0.001-4.361-1.954-4.361-4.362V179.034c0-2.409,1.953-4.363,4.363-4.363h55.795c2.409,0,4.363,1.953,4.363,4.363v23.418\r c0.005-0.01,0.225,0.018,0.599,0.075c1.078-1.95,2.252-3.839,3.52-5.658c11.628-16.688,30.96-27.606,52.842-27.606h11.47\r c39.996,0,72.42,32.423,72.42,72.42V382.153z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 1
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
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Footer\\Youtubesvg.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => // <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 9.3808594 6.2226562 L 10.529297 6.2226562 L 10.988281 8.375 C 11.105281 8.905 11.192047 9.3564687 11.248047 9.7304688 L 11.283203 9.7304688 C 11.322203 9.4624687 11.407969 9.0138125 11.542969 8.3828125 L 12.019531 6.2226562 L 13.167969 6.2226562 L 11.835938 10.970703 L 11.835938 13.248047 L 10.695312 13.248047 L 10.695312 10.970703 L 9.3808594 6.2226562 z M 14.494141 8.015625 C 14.874141 8.015625 15.17725 8.093 15.40625 8.25 C 15.63525 8.406 15.802203 8.6514219 15.908203 8.9824219 C 16.014203 9.3144219 16.068359 9.7565937 16.068359 10.308594 L 16.068359 11.054688 C 16.068359 11.602688 16.015109 12.041047 15.912109 12.373047 C 15.809109 12.705047 15.641156 12.949516 15.410156 13.103516 C 15.179156 13.257516 14.86475 13.332031 14.46875 13.332031 C 14.06175 13.332031 13.741766 13.254656 13.509766 13.097656 C 13.277766 12.941656 13.113625 12.699141 13.015625 12.369141 C 12.917625 12.039141 12.869141 11.601687 12.869141 11.054688 L 12.869141 10.308594 C 12.869141 9.7555937 12.924156 9.3125625 13.035156 8.9765625 C 13.147156 8.6435625 13.323547 8.3971406 13.560547 8.2441406 C 13.797547 8.0901406 14.108141 8.015625 14.494141 8.015625 z M 16.669922 8.1152344 L 17.824219 8.1152344 L 17.824219 11.884766 C 17.824219 12.113766 17.849391 12.277 17.900391 12.375 C 17.951391 12.473 18.034344 12.521484 18.152344 12.521484 C 18.252344 12.521484 18.348406 12.491688 18.441406 12.429688 C 18.533406 12.368688 18.602484 12.290312 18.646484 12.195312 L 18.646484 8.1152344 L 19.802734 8.1152344 L 19.802734 13.25 L 18.896484 13.25 L 18.796875 12.621094 L 18.771484 12.621094 C 18.526484 13.096094 18.158969 13.333984 17.667969 13.333984 C 17.327969 13.333984 17.074109 13.221047 16.912109 12.998047 C 16.750109 12.775047 16.669922 12.426172 16.669922 11.951172 L 16.669922 8.1152344 z M 14.46875 8.8125 C 14.31275 8.8125 14.202672 8.8964063 14.138672 9.0664062 C 14.074672 9.2374062 14.042969 9.507 14.042969 9.875 L 14.042969 11.474609 C 14.042969 11.854609 14.072766 12.127922 14.134766 12.294922 C 14.196766 12.461922 14.308703 12.546875 14.470703 12.546875 C 14.631703 12.545875 14.744594 12.462922 14.808594 12.294922 C 14.872594 12.127922 14.904297 11.853609 14.904297 11.474609 L 14.904297 9.875 C 14.904297 9.506 14.872594 9.2364062 14.808594 9.0664062 C 14.744594 8.8954063 14.63075 8.8125 14.46875 8.8125 z M 8.7773438 14.222656 L 21.222656 14.222656 C 22.200656 14.222656 23 15.022 23 16 L 23 22.222656 C 23 23.200656 22.200656 24 21.222656 24 L 8.7773438 24 C 7.7993437 24 7 23.200656 7 22.222656 L 7 16 C 7 15.022 7.7993437 14.222656 8.7773438 14.222656 z M 15.044922 16 L 15.044922 22.150391 L 15.849609 22.150391 L 15.949219 21.740234 L 15.970703 21.740234 C 16.046703 21.887234 16.158547 22.002891 16.310547 22.087891 C 16.461547 22.171891 16.6285 22.214844 16.8125 22.214844 C 17.1425 22.214844 17.383063 22.063766 17.539062 21.759766 C 17.695062 21.455766 17.773438 20.979984 17.773438 20.333984 L 17.773438 19.648438 L 17.771484 19.648438 C 17.771484 19.163438 17.742594 18.783766 17.683594 18.509766 C 17.624594 18.236766 17.529438 18.039016 17.398438 17.916016 C 17.267437 17.793016 17.084516 17.732422 16.853516 17.732422 C 16.673516 17.732422 16.506562 17.783766 16.351562 17.884766 C 16.195563 17.985766 16.075234 18.118203 15.990234 18.283203 L 15.984375 18.283203 L 15.984375 16 L 15.044922 16 z M 9.2109375 16.220703 L 9.2109375 17.003906 L 10.179688 17.003906 L 10.179688 22.150391 L 11.132812 22.150391 L 11.132812 17.003906 L 12.101562 17.003906 L 12.101562 16.220703 L 9.2109375 16.220703 z M 19.529297 17.734375 C 19.044297 17.734375 18.701953 17.883594 18.501953 18.183594 C 18.301953 18.483594 18.201172 18.958375 18.201172 19.609375 L 18.201172 20.365234 C 18.201172 20.997234 18.298188 21.464625 18.492188 21.765625 C 18.686187 22.066625 19.022906 22.21875 19.503906 22.21875 C 19.904906 22.21875 20.213594 22.119875 20.433594 21.921875 C 20.653594 21.724875 20.763672 21.424437 20.763672 21.023438 C 20.763672 20.957438 20.759859 20.905187 20.755859 20.867188 L 19.914062 20.816406 C 19.910062 21.080406 19.880172 21.269812 19.826172 21.382812 C 19.772172 21.495812 19.670391 21.552734 19.525391 21.552734 C 19.417391 21.552734 19.337156 21.521031 19.285156 21.457031 C 19.233156 21.394031 19.200594 21.291344 19.183594 21.152344 C 19.166594 21.013344 19.158203 20.805344 19.158203 20.527344 L 19.158203 20.306641 L 20.789062 20.306641 L 20.789062 19.566406 C 20.789062 19.109406 20.752688 18.750234 20.679688 18.490234 C 20.605687 18.231234 20.479781 18.041922 20.300781 17.919922 C 20.120781 17.796922 19.864297 17.734375 19.529297 17.734375 z M 11.810547 17.816406 L 11.810547 21.054688 C 11.810547 21.454687 11.878625 21.750453 12.015625 21.939453 C 12.152625 22.127453 12.362391 22.222656 12.650391 22.222656 C 13.065391 22.222656 13.377938 22.021141 13.585938 21.619141 L 13.605469 21.619141 L 13.689453 22.150391 L 14.453125 22.150391 L 14.455078 22.150391 L 14.455078 17.816406 L 13.480469 17.816406 L 13.480469 21.259766 C 13.442469 21.339766 13.384641 21.406031 13.306641 21.457031 C 13.229641 21.509031 13.1475 21.535156 13.0625 21.535156 C 12.9625 21.535156 12.893563 21.495109 12.851562 21.412109 C 12.808563 21.330109 12.787109 21.191047 12.787109 20.998047 L 12.787109 17.816406 L 11.810547 17.816406 z M 19.509766 18.394531 C 19.613766 18.394531 19.690234 18.423422 19.740234 18.482422 C 19.790234 18.541422 19.824797 18.641156 19.841797 18.785156 C 19.860797 18.929156 19.869141 19.141922 19.869141 19.419922 L 19.869141 19.730469 L 19.15625 19.730469 L 19.15625 19.419922 C 19.15625 19.136922 19.164641 18.924156 19.181641 18.785156 C 19.197641 18.646156 19.229297 18.547328 19.279297 18.486328 C 19.329297 18.426328 19.405766 18.394531 19.509766 18.394531 z M 16.414062 18.425781 C 16.514063 18.425781 16.590531 18.464016 16.644531 18.541016 C 16.697531 18.618016 16.736812 18.749594 16.757812 18.933594 C 16.778813 19.117594 16.789063 19.37875 16.789062 19.71875 L 16.789062 20.277344 C 16.789062 20.593344 16.777953 20.841531 16.751953 21.019531 C 16.725953 21.199531 16.681141 21.327344 16.619141 21.402344 C 16.557141 21.477344 16.477047 21.515625 16.373047 21.515625 C 16.292047 21.515625 16.218391 21.494031 16.150391 21.457031 C 16.082391 21.419031 16.026375 21.363109 15.984375 21.287109 L 15.984375 18.828125 C 16.017375 18.711125 16.074297 18.613109 16.154297 18.537109 C 16.234297 18.461109 16.320062 18.425781 16.414062 18.425781 z"/></svg>
__jsx("svg", {
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 438.536 438.536",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 1
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 1
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 2
  }
}, __jsx("path", {
  d: "M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123\r C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126\r h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225\r C438.532,59.576,430.49,40.204,414.41,24.123z M258.958,63.378h19.13v77.654c0,4.57,0.089,7.045,0.28,7.426\r c0.192,3.046,1.719,4.567,4.572,4.567c3.806,0,7.807-2.948,11.991-8.848V63.378h19.13v105.637h-19.13h-0.007v-11.425\r c-7.803,8.563-15.129,12.85-21.98,12.85c-6.088,0-10.181-2.568-12.278-7.708c-1.144-3.424-1.708-8.66-1.708-15.704V63.378\r L258.958,63.378z M186.725,97.64c0-11.038,1.999-19.32,5.996-24.838c5.138-7.232,12.559-10.85,22.266-10.85\r c9.329,0,16.754,3.621,22.268,10.85c4,5.519,5.999,13.8,5.999,24.838v37.117c0,11.421-1.999,19.701-5.999,24.839\r c-5.514,7.236-12.939,10.852-22.268,10.852c-9.707,0-17.128-3.619-22.266-10.852c-3.997-5.52-5.996-13.8-5.996-24.839V97.64z\r M135.331,27.119l15.133,55.677l14.56-55.677h21.414l-25.697,84.51h0.004v57.386h-21.127v-57.386\r c-2.096-10.468-6.473-25.505-13.134-45.108c-4.377-13.134-6.567-19.701-6.567-19.701l-6.855-19.701H135.331L135.331,27.119z\r M370.593,371.729c-1.903,8.18-5.948,15.126-12.139,20.842c-6.181,5.708-13.363,9.041-21.55,9.996\r c-26.073,2.851-65.288,4.28-117.628,4.28c-52.344,0-91.553-1.43-117.628-4.28c-8.183-0.955-15.367-4.288-21.555-9.996\r c-6.186-5.716-10.229-12.662-12.133-20.842c-3.805-15.991-5.708-40.737-5.708-74.233c0-32.935,1.903-57.67,5.708-74.233\r c1.905-8.375,5.948-15.371,12.133-20.988c6.188-5.617,13.466-8.901,21.842-9.851c25.882-2.859,64.997-4.284,117.341-4.284\r c52.535,0,91.746,1.429,117.628,4.284c8.187,0.953,15.41,4.233,21.693,9.851c6.283,5.614,10.38,12.609,12.282,20.988\r c3.61,15.797,5.421,40.539,5.421,74.233C376.301,330.991,374.397,355.733,370.593,371.729z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}), __jsx("polygon", {
  points: "85.651,244.678 107.921,244.678 107.921,365.445 129.048,365.445 129.048,244.678 151.889,244.678 \r 151.889,224.692 85.651,224.692 \t\t",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M190.149,340.607c-4.187,5.896-8.186,8.847-11.991,8.847c-2.665,0-4.093-1.427-4.283-4.281\r c-0.191-0.38-0.287-2.854-0.287-7.426v-77.088h-18.843v82.796c0,7.234,0.572,12.374,1.715,15.413\r c1.712,5.332,5.711,7.994,11.991,7.994c7.042,0,14.275-4.281,21.698-12.847v11.424h19.126V260.666h-19.126V340.607z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M264.099,259.235c-6.852,0-13.326,3.806-19.411,11.423v-45.966h-19.13v140.753h19.13v-10.279\r c6.276,7.802,12.755,11.703,19.411,11.703c7.806,0,12.847-3.997,15.126-11.991c1.334-3.997,1.998-10.944,1.998-20.841v-41.682\r c0-10.089-0.671-17.132-1.998-21.129C276.945,263.232,271.904,259.235,264.099,259.235z M262.384,335.468\r c0,9.325-2.758,13.982-8.281,13.989c-3.23,0-6.376-1.525-9.422-4.571v-63.954c3.046-3.038,6.191-4.564,9.422-4.564\r c5.523,0,8.281,4.753,8.281,14.271V335.468z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M333.466,335.324c0,1.998-0.049,3.565-0.137,4.709c-0.093,1.143-0.145,1.81-0.145,1.998\r c-1.14,4.945-3.997,7.419-8.565,7.419c-6.472,0-9.709-4.853-9.709-14.558v-18.555h37.973v-21.703\r c0-11.037-1.995-19.219-5.995-24.551c-5.134-7.231-12.56-10.852-22.269-10.852s-17.319,3.62-22.843,10.852\r c-3.806,5.14-5.708,13.329-5.708,24.551v36.832c0,11.231,1.998,19.418,5.995,24.558c5.523,7.231,13.23,10.852,23.131,10.852\r c10.088,0,17.699-3.806,22.843-11.423c2.282-3.429,3.716-7.234,4.284-11.42c0.377-2.666,0.568-6.759,0.568-12.278v-2.563v-0.007\r h-19.417v6.14H333.466z M314.917,290.925c0-9.705,3.142-14.558,9.422-14.558c6.283,0,9.421,4.853,9.421,14.558v9.712h-18.843\r V290.925z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 3
  }
}), __jsx("path", {
  d: "M214.987,153.025c6.091,0,9.135-4.851,9.135-14.558v-44.54c0-9.895-3.044-14.847-9.135-14.847\r c-6.09,0-9.135,4.952-9.135,14.847v44.54C205.852,148.171,208.897,153.025,214.987,153.025z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 3
  }
})))));

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
/* harmony import */ var _Linkedin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Linkedin */ "./components/Footer/Linkedin.js");
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Footer\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Footer = () => {
  return __jsx("div", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-697616701" + " " + "footer-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-697616701" + " " + "quick-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Quick Links"), __jsx("div", {
    className: "jsx-697616701" + " " + "service-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Services"), __jsx("div", {
    className: "jsx-697616701" + " " + "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Contact"), __jsx("div", {
    className: "jsx-697616701" + " " + "quick-links-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Home", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), "About", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), "Success", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), "Stories", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), "Insights", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), "Career", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), "Contact"), __jsx("div", {
    className: "jsx-697616701" + " " + "service-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Open Source Implementation", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), "Scala Programming", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), "Restful API'S", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), "Automated Devops Deployment", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), "Big Data Analytics", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), "Native Apps Building"), __jsx("div", {
    className: "jsx-697616701" + " " + "service-inner2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Full/Mean Stack Development", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), "Third Party Integrations", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), "Crypto Currency Development", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), "Java Programming", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), "Us Staffing"), __jsx("div", {
    className: "jsx-697616701" + " " + "contact-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "+91(991)502-1146", __jsx("br", {
    className: "jsx-697616701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), "hr@spineor.com"), __jsx("div", {
    className: "jsx-697616701" + " " + "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "Copyright2020-Spineor.com"), __jsx("div", {
    className: "jsx-697616701" + " " + "facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx(_Facebook__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 44
    }
  })), __jsx("div", {
    className: "jsx-697616701" + " " + "linkedin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx(_Linkedin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 44
    }
  })), __jsx("div", {
    className: "jsx-697616701" + " " + "youtube",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx(_Youtubesvg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 43
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "697616701",
    __self: undefined
  }, ".footer-box.jsx-697616701{position:absolute;width:1344px;height:434px;left:0px;top:5415px;background:#000000;}.quick-links.jsx-697616701{position:absolute;width:125px;height:28px;left:94px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}.service-links.jsx-697616701{position:absolute;width:125px;height:28px;left:406px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}.contact.jsx-697616701{position:absolute;width:125px;height:28px;left:1044px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}.quick-links-inner.jsx-697616701{position:absolute;width:129px;height:186px;left:94px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}.service-inner.jsx-697616701{position:absolute;width:258px;height:186px;left:406px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}.service-inner2.jsx-697616701{position:absolute;width:245px;height:155px;left:723px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}.contact-inner.jsx-697616701{position:absolute;width:154px;height:62px;left:1044px;top:147px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}.linkedin.jsx-697616701{background-color:white;position:absolute;left:81.38%;right:15.54%;top:62.27%;bottom:28%;border:2px solid #F1F1F1;box-sizing:border-box;border-radius:4px;}.facebook.jsx-697616701{background-color:white;position:absolute;left:77.31%;right:19.61%;top:62.27%;bottom:28%;border:2px solid #F1F1F1;box-sizing:border-box;border-radius:4px;}.youtube.jsx-697616701{background-color:white;position:absolute;left:85.38%;right:11.54%;top:62.27%;bottom:28%;border:1px solid #F1F1F1;box-sizing:border-box;border-radius:4px;}.copyright.jsx-697616701{position:absolute;width:149px;height:14px;left:615px;top:393px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;color:#DCDCDC;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEZvb3RlclxcZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FZ0IsQUFJMkIsQUFTQSxBQWNBLEFBY0EsQUFjQSxBQWNBLEFBY0EsQUFjQSxBQWNLLEFBWUEsQUFZQSxBQVlMLGtCQTlJTCxBQVNELEFBY0EsQUFjQSxBQWNBLEFBY0EsQUFjQSxBQWNBLEFBa0RBLEtBcENNLEFBWUEsQUFZQSxPQXpITixBQWNBLEFBY0EsQUFjQyxBQWNBLEFBY0EsQUFjRCxBQWtEQSxDQS9JQyxVQTJHRCxBQVlBLEFBWUEsQ0F6SEYsQUFjQyxBQWNDLEFBd0RBLEFBa0RELENBNUZELEFBY0MsQUFjQSxDQS9FRixRQVVBLENBVEUsQUF1QkYsQUE0QkMsQUF1REcsQUFZQSxBQVlBLEFBYUgsQ0ExR0QsQUE0QkMsQUFjQSxBQWNBLE9BbkZTLENBY0EsQ0FjQSxBQWNBLEFBNEZBLENBL0lBLEFBaUVBLEFBY0EsQUFjQSxFQWFSLEFBWUEsQUFZQSxXQXZCQSxBQVlBLEFBWUEsR0F6SE8sQ0FjQSxDQWNBLEFBY0EsQUE0RkEsQ0EvSXRCLEFBaUVzQixBQWNBLEFBY0EsS0FjTyxBQVlBLEFBWUEsVUF6SFQsQ0FjQSxDQWNBLEFBY0csQUE0RkEsQ0E5RUEsQUFjQSxBQWNBLFlBY0csQUFZQSxBQVlBLENBekhQLENBY0EsQ0FjQSxHQWNBLEFBNEZBLENBOUVBLEFBY0EsQUFjQSxTQW5GRSxDQWNBLENBY0EsR0FjQSxBQTRGQSxDQTlFQSxBQWNBLEFBY0EsQUFhQyxBQVlBLEFBWUEsV0F4SEosQ0FjQSxDQWNBLEdBY0EsQUE0RkEsQ0E5RUEsQUFjQSxBQWNBLENBYWxCLEFBWUEsQUFZQSxPQXhIQSxDQWNBLENBY0EsR0FjQSxBQTRGQSxDQTlFQSxBQWNBLEFBY0EiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcY29tcG9uZW50c1xcRm9vdGVyXFxmb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWW91dHViZXN2ZyBmcm9tIFwiLi9Zb3V0dWJlc3ZnXCJcclxuaW1wb3J0IEZhY2Vib29rIGZyb20gXCIuL0ZhY2Vib29rXCJcclxuaW1wb3J0IExpbmtlZGluIGZyb20gXCIuL0xpbmtlZGluXCJcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJmb290ZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJxdWljay1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgUXVpY2sgTGlua3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwic2VydmljZS1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJxdWljay1saW5rcy1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgSG9tZSBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBBYm91dCBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBTdWNjZXNzXHJcbiAgICAgICAgICAgICAgICA8YnIvPiBcclxuICAgICAgICAgICAgICAgIFN0b3JpZXNcclxuICAgICAgICAgICAgICAgIDxici8+IFxyXG4gICAgICAgICAgICAgICAgSW5zaWdodHNcclxuICAgICAgICAgICAgICAgIDxici8+IFxyXG4gICAgICAgICAgICAgICAgQ2FyZWVyXHJcbiAgICAgICAgICAgICAgICA8YnIvPiBcclxuICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwic2VydmljZS1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgT3BlbiBTb3VyY2UgSW1wbGVtZW50YXRpb24gXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgU2NhbGEgUHJvZ3JhbW1pbmdcclxuICAgICAgICAgICAgICAgIDxici8+IFxyXG4gICAgICAgICAgICAgICAgUmVzdGZ1bCBBUEknUyBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBBdXRvbWF0ZWQgRGV2b3BzIERlcGxveW1lbnQgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgQmlnIERhdGEgQW5hbHl0aWNzIFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIE5hdGl2ZSBBcHBzIEJ1aWxkaW5nIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJzZXJ2aWNlLWlubmVyMlwiPlxyXG4gICAgICAgICAgICAgICAgRnVsbC9NZWFuIFN0YWNrIERldmVsb3BtZW50IFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFRoaXJkIFBhcnR5IEludGVncmF0aW9uc1xyXG4gICAgICAgICAgICAgICAgPGJyLz4gXHJcbiAgICAgICAgICAgICAgICBDcnlwdG8gQ3VycmVuY3kgRGV2ZWxvcG1lbnQgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgSmF2YSBQcm9ncmFtbWluZyBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBVcyBTdGFmZmluZyBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiY29udGFjdC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgKzkxKDk5MSk1MDItMTE0NiBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBockBzcGluZW9yLmNvbVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJjb3B5cmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIENvcHlyaWdodDIwMjAtU3BpbmVvci5jb21cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiZmFjZWJvb2tcIj48RmFjZWJvb2svPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwibGlua2VkaW5cIj48TGlua2VkaW4vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwieW91dHViZVwiPjxZb3V0dWJlc3ZnLz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICBcclxuICAgIC5mb290ZXItYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEzNDRweDtcclxuICAgICAgICBoZWlnaHQ6IDQzNHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDU0MTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5xdWljay1saW5rcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbGVmdDogOTRweDtcclxuICAgICAgICB0b3A6IDg4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2UtbGlua3Mge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGxlZnQ6IDQwNnB4O1xyXG4gICAgICAgIHRvcDogODhweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbGVmdDogMTA0NHB4O1xyXG4gICAgICAgIHRvcDogODhweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAucXVpY2stbGlua3MtaW5uZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTI5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODZweDtcclxuICAgICAgICBsZWZ0OiA5NHB4O1xyXG4gICAgICAgIHRvcDogMTQ2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3MCU7XHJcbiAgICAgICAgY29sb3I6ICNFQkVCRUI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2UtaW5uZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjU4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODZweDtcclxuICAgICAgICBsZWZ0OiA0MDZweDtcclxuICAgICAgICB0b3A6IDE0NnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNzAlO1xyXG4gICAgICAgIGNvbG9yOiAjRUJFQkVCO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlLWlubmVyMiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDE1NXB4O1xyXG4gICAgICAgIGxlZnQ6IDcyM3B4O1xyXG4gICAgICAgIHRvcDogMTQ2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3MCU7XHJcbiAgICAgICAgY29sb3I6ICNFQkVCRUI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtaW5uZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTU0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgICAgIGxlZnQ6IDEwNDRweDtcclxuICAgICAgICB0b3A6IDE0N3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNzAlO1xyXG4gICAgICAgIGNvbG9yOiAjRUJFQkVCO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5rZWRpbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDgxLjM4JTtcclxuICAgICAgICByaWdodDogMTUuNTQlO1xyXG4gICAgICAgIHRvcDogNjIuMjclO1xyXG4gICAgICAgIGJvdHRvbTogMjglOyAgIFxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGMUYxRjE7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhY2Vib29rIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNzcuMzElO1xyXG4gICAgICAgIHJpZ2h0OiAxOS42MSU7XHJcbiAgICAgICAgdG9wOiA2Mi4yNyU7XHJcbiAgICAgICAgYm90dG9tOiAyOCU7ICAgIFxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGMUYxRjE7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnlvdXR1YmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA4NS4zOCU7XHJcbiAgICAgICAgcmlnaHQ6IDExLjU0JTtcclxuICAgICAgICB0b3A6IDYyLjI3JTtcclxuICAgICAgICBib3R0b206IDI4JTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjFGMUYxO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3B5cmlnaHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTQ5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIGxlZnQ6IDYxNXB4O1xyXG4gICAgICAgIHRvcDogMzkzcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICNEQ0RDREM7XHJcbiAgICB9XHJcblxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Footer\\\\footer.js */"));
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
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "nav-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "\\images\\spineor-logo.png",
    className: "jsx-2554541966" + " " + "spineor-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-2554541966" + " " + "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, "ABOUT"), __jsx("div", {
    className: "jsx-2554541966" + " " + "service",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "SERVICES"), __jsx("div", {
    className: "jsx-2554541966" + " " + "success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "SUCCESS STORIES"), __jsx("div", {
    className: "jsx-2554541966" + " " + "insights",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "INSIGHTS"), __jsx("div", {
    className: "jsx-2554541966" + " " + "career",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "CAREER"), __jsx("div", {
    className: "jsx-2554541966" + " " + "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "CONTACT"), __jsx("div", {
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "jsx-2554541966" + " " + "quote-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 51
    }
  }, "GET A QUOTE")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2554541966",
    __self: undefined
  }, ".nav-box.jsx-2554541966{position:absolute;width:1344px;height:74px;left:0px;top:0px;position:fixed;background:#FFFFFF;}.spineor-logo.jsx-2554541966{position:absolute;width:140px;height:41px;left:19px;top:16px;}.about.jsx-2554541966{position:absolute;width:45px;height:16px;left:480px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.service.jsx-2554541966{position:absolute;width:45px;height:16px;left:572px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.success.jsx-2554541966{position:absolute;width:122px;height:16px;left:686px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.insights.jsx-2554541966{position:absolute;width:45px;height:16px;left:852px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.career.jsx-2554541966{position:absolute;width:45px;height:16px;left:961px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.contact.jsx-2554541966{position:absolute;width:45px;height:16px;left:1060px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.quote-button.jsx-2554541966{position:absolute;width:122px;height:40px;left:1158px;top:18px;background:#184A88;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;border-radius:2px;}a.jsx-2554541966{color:#FFFFFF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhlYWRlclxcaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFJMkIsQUFVQSxBQVFBLEFBY0EsQUFjQSxBQWNBLEFBY0EsQUFjQSxBQWNBLEFBZXZCLGNBQUMsSUFwSGlCLEFBVUQsQUFRRCxBQWNBLEFBY0MsQUFjRCxBQWNBLEFBY0EsQUFjQyxXQW5GQSxBQWNBLEFBNEJBLEFBY0EsQUFjQSxDQTlFQSxBQW9DQSxBQXdEQSxDQXRHQSxVQW1CRCxBQWNBLEFBNEJBLEFBY0EsQUFjQyxDQTlFRixBQW9DQyxBQXdEQyxDQXRHSCxTQUNELEFBVUMsQUFRQSxBQWNBLEFBNEJBLEFBY0EsQ0E1QkEsQUEwQ0EsQ0FjQSxNQXJHTSxDQVVuQixBQVF1QixBQWNBLEFBNEJBLEFBY0EsQ0E1QkEsQUEwQ0EsQ0FjQSxZQXJHQSxLQWtCRCxBQWNBLEFBNEJBLEFBY0EsQ0E1QkEsQUEwQ0EsQ0FjQyxZQXJHdkIsSUFrQnVCLEFBY0EsQUE0QkEsQUFjQSxDQTVCQSxBQTBDQSxFQWNELGdCQW5GSCxBQWNBLEFBNEJBLEFBY0EsQ0E1QkEsQUEwQ0EsQ0FjSSxhQW5GRixBQWNBLEFBNEJBLEFBY0EsQ0E1QkEsQUEwQ0EsS0FjRixXQW5GRCxBQWNBLEFBNEJBLEFBY0EsQ0E1QkEsQUEwQ0EsR0FjSSxVQW5GdEIsQUFjQSxBQTRCQSxBQWNBLENBNUJBLEFBMENBLE9BY0EiLCJmaWxlIjoiRTpcXHJlYWN0anNcXG9mZmljZS13b3JrXFxzcGluZW9yLW5leHRcXHNwaW5lb3ItbmV4dFxcY29tcG9uZW50c1xcSGVhZGVyXFxoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwibmF2LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9IFwic3BpbmVvci1sb2dvXCIgc3JjPSBcIlxcaW1hZ2VzXFxzcGluZW9yLWxvZ28ucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJhYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFCT1VUXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInNlcnZpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBTRVJWSUNFU1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU1VDQ0VTUyBTVE9SSUVTXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImluc2lnaHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSU5TSUdIVFNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiY2FyZWVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ0FSRUVSXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICBDT05UQUNUXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0gXCJxdW90ZS1idXR0b25cIj48YT5HRVQgQSBRVU9URTwvYT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIFxyXG4gICAgLm5hdi1ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTM0NHB4O1xyXG4gICAgICAgIGhlaWdodDogNzRweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwaW5lb3ItbG9nbyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgbGVmdDogMTlweDtcclxuICAgICAgICB0b3A6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDQ4MHB4O1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBsZWZ0OiA1NzJweDtcclxuICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Y2Nlc3Mge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTIycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDY4NnB4O1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5zaWdodHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbGVmdDogODUycHg7XHJcbiAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJlZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbGVmdDogOTYxcHg7XHJcbiAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDEwNjBweDtcclxuICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1b3RlLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMjJweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGVmdDogMTE1OHB4O1xyXG4gICAgICAgIHRvcDogMThweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTg0QTg4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4OyAgICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGXHJcbiAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Header\\\\header.js */"));
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
    className: "jsx-3748348608",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3748348608" + " " + "box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3748348608" + " " + "box1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Design, Develop, Test & Delivered."), __jsx("div", {
    className: "jsx-3748348608" + " " + "box2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Bespoke products & platforms engineered to elevate your customers' experience, earn their loyalty & grow your business."), __jsx("div", {
    className: "jsx-3748348608" + " " + "box3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3748348608" + " " + "box4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Explore Services")), __jsx("div", {
    className: "jsx-3748348608",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "images\\image1.png",
    className: "jsx-3748348608" + " " + "backimg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-3748348608" + " " + "box5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3748348608" + " " + "box6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "A PEOPLE-FIRST APPROACH"), __jsx("div", {
    className: "jsx-3748348608" + " " + "box7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Custom Digital Products & Platforms Created by People, for People. Transform your business with our user-centric approach.")), __jsx("div", {
    className: "jsx-3748348608" + " " + "box8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3748348608" + " " + "box9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "There are consultancies that focus on UX and UI. There are developers that design and build.", __jsx("br", {
    className: "jsx-3748348608",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-3748348608",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }), "We deliver the best of all worlds with our agile, end-to-end process. We get rid of your digital development headaches by maximizing efficiencies to deliver transformative solutions that delight users and drive revenue.", __jsx("br", {
    className: "jsx-3748348608",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-3748348608",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }), "Our mission is to help clients from startup to enterprise optimize their online businesses for unstoppable growth.")), __jsx("div", {
    className: "jsx-3748348608" + " " + "box10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3748348608" + " " + "box11",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Learn About Our Capabilities & Culture")))), __jsx(_service__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(_insights__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx(_testimonial__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx(_letstalk__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3748348608",
    __self: undefined
  }, ".box.jsx-3748348608{position:absolute;width:1340px;height:630px;top:73px;background:#FFFFFF;}.box1.jsx-3748348608{position:absolute;width:586px;height:345px;left:85px;top:205px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:90px;line-height:105px;color:#333333;}.box2.jsx-3748348608{position:absolute;width:411px;height:266px;left:754px;top:205px;font-family:Roboto;font-style:normal;font-weight:300;font-size:36px;line-height:42px;color:#222222;}.box3.jsx-3748348608{position:absolute;width:194px;height:50px;left:756px;top:504px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.box4.jsx-3748348608{position:absolute;width:118px;height:19px;left:39px;top:13px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}.backimg.jsx-3748348608{position:absolute;width:1340px;height:859px;left:0px;top:791px;}.box5.jsx-3748348608{position:absolute;width:617px;height:399px;left:33px;top:1252px;background:#184A88;}.box6.jsx-3748348608{position:absolute;width:540.85px;height:113px;left:37px;top:67px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#FFFFFF;}.box7.jsx-3748348608{position:absolute;width:525.23px;height:146px;left:41.03px;top:211px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;color:#FFFFFF;}.box8.jsx-3748348608{position:absolute;width:690px;height:243px;left:650px;top:1409px;background:#FFFFFF;}.box9.jsx-3748348608{position:absolute;width:567px;height:287px;left:50px;top:91px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#333333;}.box10.jsx-3748348608{position:absolute;width:345px;height:50px;left:692px;top:1750px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.box11.jsx-3748348608{position:absolute;width:272px;height:19px;left:43px;top:14px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhvbWVcXGhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURrQixBQUd1QixBQVFBLEFBY0EsQUFjQSxBQVlBLEFBY0YsQUFRQSxBQVNFLEFBY0EsQUFjRixBQVNBLEFBY0EsQUFZRSxrQkE3SUwsQUFRRCxBQWNBLEFBY0EsQUFZQSxBQWNELEFBUUQsQUFTSyxBQWNBLEFBY0wsQUFTQSxBQWNBLEFBWUUsWUFySUMsQUFjQSxBQWNELEFBWUEsQUFzQkQsQUFxQ0EsQUFTQSxBQWNELEFBWUUsQ0E5SUMsQUE4REYsRUFpQkUsQUFjQSxTQXhERixBQVlELEFBa0ZELEFBWUMsQ0F0SUEsQUFjQyxBQWdESCxBQXFDQyxBQVNELENBcEhDLEFBOERGLEVBaUJHLEFBY0csTUE1Q0osQUE4RkEsQ0E5SVUsQUFRVCxBQTRCQSxBQTBCRixBQVFDLEFBOENGLEFBY0UsQ0E1R0MsQUFxRkQsRUE1QkEsR0FjQyxFQTVDUyxBQThGQSxDQTFCRixDQTVHRSxBQTRCQSxBQTBCdkIsQ0F4Q3VCLEFBZ0RGLEFBNERBLENBbkRFLEFBNEJGLElBZEUsR0E3RnJCLFFBaURvQixBQThGQSxDQTFCRixDQTVHRSxBQTRCTyxDQWRQLEFBZ0R0QixBQTREMkIsQ0FuREwsQUE0QnRCLElBZHNCLFVBNUNDLEFBOEZBLENBMUJMLENBNUdHLENBY0QsQ0F5REcsSUFjQSxDQXpERyxDQThGRixPQWJQLEVBNUdFLEFBY0EsQUEwQkEsQUE4RkEsSUEvREEsSUFjQSxJQXpERyxDQWlGSCxBQWFDLEVBekhFLEFBY0QsQUEwQkEsQUE4RkEsSUEvREEsSUFjQSxPQXpEckIsQUFpRmdCLENBYWhCLENBM0drQixBQTBCQSxBQThGQSxDQXRJQSxHQXVFQSxJQWNBLElBd0JsQixFQTlGRSxBQTBCRixBQThGQSxDQXRJRSxHQXVFRixJQWNBIiwiZmlsZSI6IkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhvbWVcXGhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCBJbnNpZ2h0cyBmcm9tIFwiLi9pbnNpZ2h0c1wiO1xyXG5pbXBvcnQgVGVzdGltb25pYWwgZnJvbSBcIi4vdGVzdGltb25pYWxcIjtcclxuaW1wb3J0IExldHNUYWxrIGZyb20gXCIuL2xldHN0YWxrXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDFcIj5cclxuICAgICAgICAgIERlc2lnbiwgRGV2ZWxvcCwgVGVzdCAmIERlbGl2ZXJlZC5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDJcIj5cclxuICAgICAgICAgIEJlc3Bva2UgcHJvZHVjdHMgJiBwbGF0Zm9ybXMgZW5naW5lZXJlZCB0byBlbGV2YXRlIHlvdXIgY3VzdG9tZXJzJyBleHBlcmllbmNlLCBlYXJuIHRoZWlyIGxveWFsdHkgJiBncm93IHlvdXIgYnVzaW5lc3MuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDRcIj5cclxuICAgICAgICAgICAgRXhwbG9yZSBTZXJ2aWNlc1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmFja2ltZ1wiIHNyYz0gXCJpbWFnZXNcXGltYWdlMS5wbmdcIj48L2ltZz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94NVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDZcIj5cclxuICAgICAgICAgICAgICBBIFBFT1BMRS1GSVJTVCBBUFBST0FDSFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDdcIj5cclxuICAgICAgICAgICAgICBDdXN0b20gRGlnaXRhbCBQcm9kdWN0cyAmIFBsYXRmb3JtcyBDcmVhdGVkIGJ5IFBlb3BsZSwgZm9yIFBlb3BsZS4gVHJhbnNmb3JtIHlvdXIgYnVzaW5lc3Mgd2l0aCBvdXIgdXNlci1jZW50cmljIGFwcHJvYWNoLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3g5XCI+XHJcbiAgICAgICAgICAgICAgVGhlcmUgYXJlIGNvbnN1bHRhbmNpZXMgdGhhdCBmb2N1cyBvbiBVWCBhbmQgVUkuIFRoZXJlIGFyZSBkZXZlbG9wZXJzIHRoYXQgZGVzaWduIGFuZCBidWlsZC5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgV2UgZGVsaXZlciB0aGUgYmVzdCBvZiBhbGwgd29ybGRzIHdpdGggb3VyIGFnaWxlLCBlbmQtdG8tZW5kIHByb2Nlc3MuIFdlIGdldCByaWQgb2YgeW91ciBkaWdpdGFsIGRldmVsb3BtZW50IGhlYWRhY2hlcyBieSBtYXhpbWl6aW5nIGVmZmljaWVuY2llcyB0byBkZWxpdmVyIHRyYW5zZm9ybWF0aXZlIHNvbHV0aW9ucyB0aGF0IGRlbGlnaHQgdXNlcnMgYW5kIGRyaXZlIHJldmVudWUuXHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIE91ciBtaXNzaW9uIGlzIHRvIGhlbHAgY2xpZW50cyBmcm9tIHN0YXJ0dXAgdG8gZW50ZXJwcmlzZSBvcHRpbWl6ZSB0aGVpciBvbmxpbmUgYnVzaW5lc3NlcyBmb3IgdW5zdG9wcGFibGUgZ3Jvd3RoLlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94MTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gxMVwiPlxyXG4gICAgICAgICAgICAgIExlYXJuIEFib3V0IE91ciBDYXBhYmlsaXRpZXMgJiBDdWx0dXJlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U2VydmljZS8+XHJcbiAgICAgIDxJbnNpZ2h0cy8+XHJcbiAgICAgIDxUZXN0aW1vbmlhbC8+XHJcbiAgICAgIDxMZXRzVGFsay8+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgLmJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTM0MHB4O1xyXG4gICAgaGVpZ2h0OiA2MzBweDtcclxuICAgIHRvcDogNzNweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgfVxyXG5cclxuICAuYm94MSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTg2cHg7XHJcbiAgICBoZWlnaHQ6IDM0NXB4O1xyXG4gICAgbGVmdDogODVweDtcclxuICAgIHRvcDogMjA1cHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTA1cHg7ICAgXHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICB9XHJcblxyXG4uYm94MiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDExcHg7XHJcbiAgICBoZWlnaHQ6IDI2NnB4O1xyXG4gICAgbGVmdDogNzU0cHg7XHJcbiAgICB0b3A6IDIwNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gIH1cclxuXHJcbi5ib3gzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxOTRweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxlZnQ6IDc1NnB4O1xyXG4gICAgdG9wOiA1MDRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTg0QTg4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSBcclxuXHJcbi5ib3g0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMThweDtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIGxlZnQ6IDM5cHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICMxODRBODg7XHJcbn1cclxuXHJcbi5iYWNraW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEzNDBweDtcclxuICBoZWlnaHQ6IDg1OXB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB0b3A6IDc5MXB4O1xyXG59XHJcblxyXG4uYm94NSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2MTdweDtcclxuICBoZWlnaHQ6IDM5OXB4O1xyXG4gIGxlZnQ6IDMzcHg7XHJcbiAgdG9wOiAxMjUycHg7XHJcbiAgYmFja2dyb3VuZDogIzE4NEE4ODtcclxufSAgXHJcblxyXG4uYm94NiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTQwLjg1cHg7XHJcbiAgICBoZWlnaHQ6IDExM3B4O1xyXG4gICAgbGVmdDogMzdweDtcclxuICAgIHRvcDogNjdweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmJveDcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUyNS4yM3B4O1xyXG4gICAgaGVpZ2h0OiAxNDZweDtcclxuICAgIGxlZnQ6IDQxLjAzcHg7XHJcbiAgICB0b3A6IDIxMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uYm94OCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2OTBweDtcclxuICBoZWlnaHQ6IDI0M3B4O1xyXG4gIGxlZnQ6IDY1MHB4O1xyXG4gIHRvcDogMTQwOXB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5ib3g5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDU2N3B4O1xyXG4gIGhlaWdodDogMjg3cHg7XHJcbiAgbGVmdDogNTBweDtcclxuICB0b3A6IDkxcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuXHJcbi5ib3gxMCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzNDVweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGVmdDogNjkycHg7XHJcbiAgdG9wOiAxNzUwcHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMTg0QTg4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYm94MTEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgbGVmdDogNDNweDtcclxuICAgIHRvcDogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBjb2xvcjogIzE4NEE4ODtcclxufVxyXG5cclxuICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Home\\\\home.js */"));
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Home\\insights.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Insights = () => {
  return __jsx("div", {
    className: "jsx-826788515",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-826788515",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images\\insights.jpg",
    className: "jsx-826788515" + " " + "insights-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-826788515" + " " + "insights",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Insights"), __jsx("div", {
    className: "jsx-826788515" + " " + "box2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-826788515",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "images\\insignts-img.png",
    className: "jsx-826788515" + " " + "AI-header1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-826788515" + " " + "box3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-826788515" + " " + "box4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, "The Role Of Artificial Intelligence In Web Development"), __jsx("div", {
    className: "jsx-826788515" + " " + "box5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, "Nowadays, Web development is growing at a rapid rate with a focus on enhancing user experience. We know that these days most people use mobile through access the web. Which indicates that websites with enhanced UI will remain at the...")))), __jsx("div", {
    className: "jsx-826788515" + " " + "box6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-826788515",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "images\\insights-img2.jpg",
    className: "jsx-826788515" + " " + "AI-header2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-826788515" + " " + "box7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-826788515" + " " + "box8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, "Python In the Field of ML and AI"), __jsx("div", {
    className: "jsx-826788515" + " " + "box9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, "Python language is one of the most popular programming languages in the world with its applications ranging from web development to scripting and process automation, Python is among one of the top choices among..."))))), __jsx("div", {
    className: "jsx-826788515" + " " + "box10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Trusted by the world's leading", __jsx("br", {
    className: "jsx-826788515",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx("strong", {
    className: "jsx-826788515",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Startups and Enterprises"), " since 2012."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "826788515",
    __self: undefined
  }, ".insights-img.jsx-826788515{position:absolute;width:1344px;height:677px;left:0px;top:3081px;}.insights.jsx-826788515{position:absolute;width:255px;height:84px;left:89px;top:3165px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:72px;line-height:84px;color:rgba(255,255,255,0.8);}.box2.jsx-826788515{position:absolute;width:500px;height:580px;left:94px;top:3475px;background:#FFFFFF;box-shadow:0px 0px 10px rgba(0,0,0,0.15);}.AI-header1.jsx-826788515{position:absolute;width:500px;height:283px;left:0px;top:0px;}.box3.jsx-826788515{position:absolute;width:427px;height:117px;left:35px;top:207px;background:#FFFFFF;}.box4.jsx-826788515{position:absolute;width:339px;height:117px;left:25px;top:8px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:32px;line-height:37px;color:#222222;}.box5.jsx-826788515{position:absolute;width:374px;height:146px;left:30px;top:166px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:157.2%;color:#333333;}.box6.jsx-826788515{position:absolute;width:500px;height:580px;left:741px;top:3475px;background:#FFFFFF;box-shadow:0px 0px 10px rgba(0,0,0,0.15);}.AI-header2.jsx-826788515{position:absolute;width:500px;height:283px;left:0px;top:0px;}.box7.jsx-826788515{position:absolute;width:427px;height:117px;left:37px;top:207px;background:#FFFFFF;}.box8.jsx-826788515{position:absolute;width:339px;height:117px;left:22px;top:8px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:32px;line-height:37px;color:#222222;}.box9.jsx-826788515{position:absolute;width:374px;height:146px;left:9px;top:166px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:157.2%;color:#333333;}.vector1.jsx-826788515{position:absolute;border:solid blue;border-width:0 3px 3px 0;display:inline-block;padding:13px;left:623px;right:477px;top:3825px;bottom:-5px;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}.vector2.jsx-826788515{position:absolute;border:solid blue;border-width:0 3px 3px 0;display:inline-block;padding:13px;left:678px;right:520px;top:3905px;bottom:0px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.box10.jsx-826788515{position:absolute;width:925px;height:119px;left:93px;top:4270px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:46px;line-height:49px;color:#000000;}strong.jsx-826788515{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhvbWVcXGluc2lnaHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDd0IsQUFHbUMsQUFPQSxBQWFBLEFBU0EsQUFPQSxBQVNBLEFBY0EsQUFjQSxBQVNBLEFBT0EsQUFTQSxBQWNBLEFBY0EsQUFhQSxBQWFBLEFBYVAsV0FDZixPQXJLaUIsQUFPRCxBQWFBLEFBU0EsQUFPQSxBQVNBLEFBY0EsQUFjQSxBQVNBLEFBT0EsQUFTQSxBQWNBLEFBY00sQUFhQSxBQWFOLFlBaEpBLEFBYUMsQUFTQSxBQU9BLEFBU0EsQUFjQSxBQWNBLEFBU0EsQUFPQSxBQVNBLEFBY0EsQUF3Q0EsQ0F4SkEsS0E4SFksQUFhQSxNQW5JZixDQWFBLEFBU0QsQUFPQyxBQVNBLEFBY0EsQUFjQyxBQVNGLEFBT0MsQUFTQSxBQWNELEFBd0NDLENBeEpELFFBUUUsQUFzQkgsQUFxREEsQUE4QkUsQ0FoSEMsQUFvQkEsQUFnQkQsQUFTRixBQWNFLEFBOEJBLEFBU0YsQUFzREcsQ0EvRUEsTUEzQ2YsQUFxREEsQ0FyQ3VCLEFBcURBLEFBMEJFLEFBYUEsQ0F6QkYsQ0F6R0EsQUE2QkEsQUF1QkEsQUE4QkEsQ0F6RnZCLEFBb0J1QixBQW9JQSxDQS9FQSxlQTNCRCxBQXFEQSxDQWNBLENBekdBLEFBNkJ0QixBQXVCc0IsQUE4QnRCLEFBbUNpQixBQWFBLENBckgrQixBQW9JMUIsQ0EvRTBCLFdBb0RqQyxBQWFBLEdBNUZRLEFBcURBLENBY0gsQ0F6R0csQUFvREgsQ0E2RkcsS0EzQlAsQUFhQSxTQXpCRyxDQXJEQSxDQWRBLEFBcURBLENBMkJKLEFBYUEsQ0FuSUksQ0FpSkEsSUFySW5CLENBcURBLElBc0RnQixBQWFELENBMUJRLENBckRBLENBZEYsQUFxREEsRUEzRkEsQ0FpSkEsS0FiUSxDQWJBLFFBaEZYLEFBcURBLEFBY0EsQ0FyREEsQ0FwRGlCLENBaUpqQixXQTFHbEIsQUFxREEsQUFjQSxDQXJEQSxFQTZGQSxhQWpKQSxnREFtSUEsQ0FiQSIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXHNwaW5lb3ItbmV4dFxcc3BpbmVvci1uZXh0XFxjb21wb25lbnRzXFxIb21lXFxpbnNpZ2h0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IEluc2lnaHRzID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnNpZ2h0cy1pbWdcIiBzcmM9IFwiaW1hZ2VzXFxpbnNpZ2h0cy5qcGdcIj48L2ltZz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNpZ2h0c1wiPlxyXG4gICAgICAgICAgICAgICAgSW5zaWdodHNcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiQUktaGVhZGVyMVwiIHNyYz0gXCJpbWFnZXNcXGluc2lnbnRzLWltZy5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJveDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJveDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBSb2xlIE9mIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlIEluIFdlYiBEZXZlbG9wbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJib3g1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3dhZGF5cywgV2ViIGRldmVsb3BtZW50IGlzIGdyb3dpbmcgYXQgYSByYXBpZCByYXRlIHdpdGggYSBmb2N1cyBvbiBlbmhhbmNpbmcgdXNlciBleHBlcmllbmNlLiBXZSBrbm93IHRoYXQgdGhlc2UgZGF5cyBtb3N0IHBlb3BsZSB1c2UgbW9iaWxlIHRocm91Z2ggYWNjZXNzIHRoZSB3ZWIuIFdoaWNoIGluZGljYXRlcyB0aGF0IHdlYnNpdGVzIHdpdGggZW5oYW5jZWQgVUkgd2lsbCByZW1haW4gYXQgdGhlLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0gXCJ2ZWN0b3IxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJ2ZWN0b3IyXCI+PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3g2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIkFJLWhlYWRlcjJcIiBzcmM9IFwiaW1hZ2VzXFxpbnNpZ2h0cy1pbWcyLmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiYm94N1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiYm94OFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHl0aG9uIEluIHRoZSBGaWVsZCBvZiBNTCBhbmQgQUlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiYm94OVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHl0aG9uIGxhbmd1YWdlIGlzIG9uZSBvZiB0aGUgbW9zdCBwb3B1bGFyIHByb2dyYW1taW5nIGxhbmd1YWdlcyBpbiB0aGUgd29ybGQgd2l0aCBpdHMgYXBwbGljYXRpb25zIHJhbmdpbmcgZnJvbSB3ZWIgZGV2ZWxvcG1lbnQgdG8gc2NyaXB0aW5nIGFuZCBwcm9jZXNzIGF1dG9tYXRpb24sIFB5dGhvbiBpcyBhbW9uZyBvbmUgb2YgdGhlIHRvcCBjaG9pY2VzIGFtb25nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJveDEwXCI+XHJcbiAgICAgICAgICAgIFRydXN0ZWQgYnkgdGhlIHdvcmxkJ3MgbGVhZGluZyBcclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPHN0cm9uZz5TdGFydHVwcyBhbmQgRW50ZXJwcmlzZXM8L3N0cm9uZz4gc2luY2UgMjAxMi5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmluc2lnaHRzLWltZyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTM0NHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NzdweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMzA4MXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnNpZ2h0cyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjU1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDg0cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA4OXB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzMTY1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4NHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94MiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4MHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogOTRweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMzQ3NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5BSS1oZWFkZXIxIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjgzcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94MyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDI3cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExN3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzVweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMjA3cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94NCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzM5cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExN3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94NSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzc0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0NnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMTY2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTcuMiU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJveDYge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1ODBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDc0MXB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzNDc1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLkFJLWhlYWRlcjIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyODNweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3g3IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MjdweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTE3cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMDdweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3g4IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMzlweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTE3cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3g5IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNzRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTQ2cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA5cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE2NnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTU3LjIlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52ZWN0b3IxIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNjIzcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNDc3cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDM4MjVweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTVweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC52ZWN0b3IyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNjc4cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNTIwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDM5MDVweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJveDEwIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MjVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTE5cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA5M3B4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0MjcwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDZweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5zaWdodHMiXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Home\\\\insights.js */"));
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
    className: "jsx-1900063177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1900063177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images\\service.png",
    className: "jsx-1900063177" + " " + "service-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1900063177" + " " + "services",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "Services"), __jsx("div", {
    className: "jsx-1900063177" + " " + "java-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1900063177" + " " + "java-scala",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Java/Scala Programming"), __jsx("div", {
    className: "jsx-1900063177" + " " + "java-scala-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "Java is a programming language and computing platform first released by Sun Microsystems in 1995."), __jsx("div", {
    className: "jsx-1900063177" + " " + "service-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1900063177" + " " + "service-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "Hire our java developers We do help businesses in integrating your Java applications with databases, operating systems and third-party applications with our java outsourcing company services. We have experience of re-engineering and migration of applications built in Java. This would include technology migration, database migration, Java application upgrade, application porting, etc.", __jsx("br", {
    className: "jsx-1900063177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }), __jsx("br", {
    className: "jsx-1900063177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }), "Our team of Java professionals ranked top in providing Java application development services in below:"))), __jsx("div", {
    className: "jsx-1900063177" + " " + "vector1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1900063177" + " " + "vector2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1900063177" + " " + "ellipse1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1900063177" + " " + "ellipse2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1900063177" + " " + "ellipse3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1900063177" + " " + "ellipse4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1900063177" + " " + "service-points",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Java Development Services", __jsx("br", {
    className: "jsx-1900063177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), "Java Enterprise Application Development", __jsx("br", {
    className: "jsx-1900063177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), "Java Desktop Application Development", __jsx("br", {
    className: "jsx-1900063177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), "Java Mobile Application Development"), __jsx("div", {
    className: "jsx-1900063177" + " " + "ellipse5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1900063177" + " " + "ellipse6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1900063177" + " " + "ellipse7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1900063177" + " " + "service-points2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Java Web Services Development", __jsx("br", {
    className: "jsx-1900063177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), "Java Application Migration & Integration", __jsx("br", {
    className: "jsx-1900063177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), "Java Application Maintenance & Support"), __jsx("div", {
    className: "jsx-1900063177" + " " + "service-box2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1900063177" + " " + "service-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "View Our JAVA/SCALA Programming Service In Details"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1900063177",
    __self: undefined
  }, ".service-img.jsx-1900063177{position:absolute;width:1344px;height:744px;left:0px;top:1962px;background-color:gray;}.java-img.jsx-1900063177{position:absolute;width:617px;height:399px;left:33px;top:2365px;background:#184A88;}.services.jsx-1900063177{position:absolute;width:272px;height:84px;left:92px;top:2032px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:72px;line-height:84px;color:rgba(255,255,255,0.8);}.java-scala.jsx-1900063177{position:absolute;width:349px;height:113px;left:221px;top:105px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#FFFFFF;}.java-scala-content.jsx-1900063177{position:absolute;width:525.23px;height:146px;left:64px;top:260px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;color:#FFFFFF;}.service-box.jsx-1900063177{position:absolute;width:699px;height:676px;left:614px;top:-70px;background:#FFFFFF;}.service-content.jsx-1900063177{position:absolute;width:548px;height:263px;left:73px;top:80px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:157.2%;color:#333333;}.ellipse1.jsx-1900063177{position:absolute;width:11px;height:11px;left:728px;top:2717px;background:#8E8E8E;}.ellipse2.jsx-1900063177{position:absolute;width:11px;height:11px;left:728px;top:2743px;background:#8E8E8E;}.ellipse3.jsx-1900063177{position:absolute;width:11px;height:11px;left:728px;top:2791px;background:#8E8E8E;}.ellipse4.jsx-1900063177{position:absolute;width:11px;height:11px;left:728px;top:2841px;background:#8E8E8E;}.service-points.jsx-1900063177{position:absolute;width:213px;height:206px;left:770px;top:2710px;font-family:Roboto;font-style:normal;font-weight:300;font-size:16px;line-height:157.2%;color:#333333;}.service-points2.jsx-1900063177{position:absolute;width:213px;height:206px;left:1017px;top:2710px;font-family:Roboto;font-style:normal;font-weight:300;font-size:16px;line-height:157.2%;color:#333333;}.ellipse5.jsx-1900063177{position:absolute;width:11px;height:11px;left:977px;top:2717px;background:#8E8E8E;}.ellipse6.jsx-1900063177{position:absolute;width:11px;height:11px;left:977px;top:2743px;background:#8E8E8E;}.ellipse7.jsx-1900063177{position:absolute;width:11px;height:11px;left:977px;top:2791px;background:#8E8E8E;}.service-box2.jsx-1900063177{position:absolute;width:457px;height:50px;left:740px;top:2910px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.service-button.jsx-1900063177{position:absolute;width:390px;height:19px;left:40px;top:14px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}.vector1.jsx-1900063177{position:absolute;border:solid blue;border-width:0 3px 3px 0;display:inline-block;height:0px;left:515px;top:2800px;bottom:-17%;padding:13px;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);-webkit-transform:rotate(135deg);}.vector2.jsx-1900063177{position:absolute;border:solid blue;border-width:0 3px 3px 0;display:inline-block;height:0px;left:575px;top:2800px;bottom:-17%;padding:13px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform:rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhvbWVcXHNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUR3QixBQUcyQixBQVNBLEFBU0EsQUFjQSxBQWNBLEFBY0EsQUFTQSxBQWNBLEFBU0EsQUFTQSxBQVNBLEFBU0EsQUFjQSxBQWNBLEFBU0EsQUFTQSxBQVNBLEFBWUEsQUFjQSxBQWNBLGtCQXJOTCxBQVNELEFBU0EsQUFjQSxBQWNHLEFBY0gsQUFTQSxBQWNELEFBU0EsQUFTQSxBQVNBLEFBU0MsQUFjQSxBQWNELEFBU0EsQUFTQSxBQVNDLEFBWUEsQUFjTSxBQWNBLFdBbElOLEFBU0EsQUFTQSxBQVNBLEFBcUNBLEFBU0EsQUFTQSxDQTVKQyxBQVNELEFBY0MsQUE0QkEsQUFTQSxBQWtEQSxBQWNBLEFBeUNELEFBWUEsQ0ExTEMsRUE4Q0EsR0EwSlksQUFjQSxLQWxJZCxBQVNBLEFBU0EsQUFTQSxBQXFDQSxBQVNBLEFBU0EsQ0FuSkQsQUE0SkMsQUFZRCxDQWpMQSxBQXVCQyxBQTRCQSxBQVNELEFBa0RDLEFBY0MsQ0FySUgsRUE4Q0MsTUEzQkMsQUFpRUEsQUFTQSxBQVNBLEFBU0EsQUFxQ0EsQUFTQSxBQVNBLEFBcUJGLENBMUxFLEFBU0EsQUE0REYsQUF5R0UsQ0E5SUQsQUE0QkEsQUEyREMsQ0FjQSxDQXZGRCxLQTZJUyxBQVlFLEFBY0EsQ0EvSUYsQ0FuREEsQUFpRUEsQUFTQSxBQVNBLEFBU0EsQUFxQ0EsQUFTQSxBQVNBLENBcktHLEFBU0gsQUF1QkEsQUE0QkEsQUFrSEEsQ0F2REEsQ0F6RUEsQUF1RkEsY0FzREQsQ0FySEEsQ0FuREEsQUFpRXRCLEFBU0EsQUFTQSxBQVNBLEFBcUNBLEFBU0EsQUFTQSxBQWlDZSxBQWNBLENBM01mLEFBdUJzQixBQTRCdEIsQUFrSDZCLENBdkRQLENBekVBLEFBdUZBLENBckl0QixPQXVNZSxBQWNBLEtBMUJRLENBckhILENBbkRHLENBY0EsQ0F1RkgsQ0F6RUcsQUF1RkgsQ0FrRUwsQUFjQSxJQXZDVyxPQXhHUCxBQWtJSCxBQWNBLEVBM0JHLENBbkVBLENBckdBLEFBbUhBLENBckdBLEVBY0EsS0EwSkYsQUFjQSxHQWhKTSxBQXdHRCxFQWFELENBbkVFLENBckdGLEFBbUhFLENBckdGLEVBY0EsR0EwSlEsQUFjQSxRQXhDN0IsQ0F4R2tCLEFBcUhBLEVBeEtpQixDQWNqQixBQXVGQSxDQWNBLENBdkZBLFNBd0JsQixBQXFIQSxHQTFKQSxBQXVGQSxDQWNBLENBdkZBLFdBNUJBLGdEQXFMcUMsQUFjTixpQ0FiL0IsQUFjQSIsImZpbGUiOiJFOlxccmVhY3Rqc1xcb2ZmaWNlLXdvcmtcXHNwaW5lb3ItbmV4dFxcc3BpbmVvci1uZXh0XFxjb21wb25lbnRzXFxIb21lXFxzZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCBTZXJ2aWNlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlcnZpY2UtaW1nXCIgc3JjPSBcImltYWdlc1xcc2VydmljZS5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwic2VydmljZXNcIj5cclxuICAgICAgICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqYXZhLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiamF2YS1zY2FsYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKYXZhL1NjYWxhIFByb2dyYW1taW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqYXZhLXNjYWxhLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSmF2YSBpcyBhIHByb2dyYW1taW5nIGxhbmd1YWdlIGFuZCBjb21wdXRpbmcgcGxhdGZvcm0gZmlyc3QgcmVsZWFzZWQgYnkgU3VuIE1pY3Jvc3lzdGVtcyBpbiAxOTk1LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpcmUgb3VyIGphdmEgZGV2ZWxvcGVycyBXZSBkbyBoZWxwIGJ1c2luZXNzZXMgaW4gaW50ZWdyYXRpbmcgeW91ciBKYXZhIGFwcGxpY2F0aW9ucyB3aXRoIGRhdGFiYXNlcywgb3BlcmF0aW5nIHN5c3RlbXMgYW5kIHRoaXJkLXBhcnR5IGFwcGxpY2F0aW9ucyB3aXRoIG91ciBqYXZhIG91dHNvdXJjaW5nIGNvbXBhbnkgc2VydmljZXMuIFdlIGhhdmUgZXhwZXJpZW5jZSBvZiByZS1lbmdpbmVlcmluZyBhbmQgbWlncmF0aW9uIG9mIGFwcGxpY2F0aW9ucyBidWlsdCBpbiBKYXZhLiBUaGlzIHdvdWxkIGluY2x1ZGUgdGVjaG5vbG9neSBtaWdyYXRpb24sIGRhdGFiYXNlIG1pZ3JhdGlvbiwgSmF2YSBhcHBsaWNhdGlvbiB1cGdyYWRlLCBhcHBsaWNhdGlvbiBwb3J0aW5nLCBldGMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPdXIgdGVhbSBvZiBKYXZhIHByb2Zlc3Npb25hbHMgcmFua2VkIHRvcCBpbiBwcm92aWRpbmcgSmF2YSBhcHBsaWNhdGlvbiBkZXZlbG9wbWVudCBzZXJ2aWNlcyBpbiBiZWxvdzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVjdG9yMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZWN0b3IyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsbGlwc2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsbGlwc2UyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsbGlwc2UzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsbGlwc2U0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtcG9pbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSmF2YSBEZXZlbG9wbWVudCBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBKYXZhIEVudGVycHJpc2UgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnRcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgSmF2YSBEZXNrdG9wIEFwcGxpY2F0aW9uIERldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIEphdmEgTW9iaWxlIEFwcGxpY2F0aW9uIERldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxsaXBzZTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxsaXBzZTZcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxsaXBzZTdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1wb2ludHMyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSmF2YSBXZWIgU2VydmljZXMgRGV2ZWxvcG1lbnRcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgSmF2YSBBcHBsaWNhdGlvbiBNaWdyYXRpb24gJiBJbnRlZ3JhdGlvblxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBKYXZhIEFwcGxpY2F0aW9uIE1haW50ZW5hbmNlICYgU3VwcG9ydFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtYm94MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBPdXIgSkFWQS9TQ0FMQSBQcm9ncmFtbWluZyBTZXJ2aWNlIEluIERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgLnNlcnZpY2UtaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEzNDRweDtcclxuICAgICAgICBoZWlnaHQ6IDc0NHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDE5NjJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuamF2YS1pbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNjE3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzOTlweDtcclxuICAgICAgICBsZWZ0OiAzM3B4O1xyXG4gICAgICAgIHRvcDogMjM2NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxODRBODg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2VzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgICAgIGhlaWdodDogODRweDtcclxuICAgICAgICBsZWZ0OiA5MnB4O1xyXG4gICAgICAgIHRvcDogMjAzMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4NHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5qYXZhLXNjYWxhIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDM0OXB4O1xyXG4gICAgICAgIGhlaWdodDogMTEzcHg7XHJcbiAgICAgICAgbGVmdDogMjIxcHg7XHJcbiAgICAgICAgdG9wOiAxMDVweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmphdmEtc2NhbGEtY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA1MjUuMjNweDtcclxuICAgICAgICBoZWlnaHQ6IDE0NnB4O1xyXG4gICAgICAgIGxlZnQ6IDY0cHg7XHJcbiAgICAgICAgdG9wOiAyNjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlcnZpY2UtYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDY5OXB4O1xyXG4gICAgICAgIGhlaWdodDogNjc2cHg7XHJcbiAgICAgICAgbGVmdDogNjE0cHg7XHJcbiAgICAgICAgdG9wOiAtNzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VydmljZS1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDU0OHB4O1xyXG4gICAgICAgIGhlaWdodDogMjYzcHg7XHJcbiAgICAgICAgbGVmdDogNzNweDtcclxuICAgICAgICB0b3A6IDgwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1Ny4yJTtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZTEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgbGVmdDogNzI4cHg7XHJcbiAgICAgICAgdG9wOiAyNzE3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFOEU4RTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZTIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgbGVmdDogNzI4cHg7XHJcbiAgICAgICAgdG9wOiAyNzQzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFOEU4RTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZTMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgbGVmdDogNzI4cHg7XHJcbiAgICAgICAgdG9wOiAyNzkxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFOEU4RTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZTQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgbGVmdDogNzI4cHg7XHJcbiAgICAgICAgdG9wOiAyODQxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFOEU4RTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS1wb2ludHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjEzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDZweDtcclxuICAgICAgICBsZWZ0OiA3NzBweDtcclxuICAgICAgICB0b3A6IDI3MTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTU3LjIlO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlLXBvaW50czIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjEzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDZweDtcclxuICAgICAgICBsZWZ0OiAxMDE3cHg7XHJcbiAgICAgICAgdG9wOiAyNzEwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1Ny4yJTtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZTUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgbGVmdDogOTc3cHg7XHJcbiAgICAgICAgdG9wOiAyNzE3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFOEU4RTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZTYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgbGVmdDogOTc3cHg7XHJcbiAgICAgICAgdG9wOiAyNzQzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFOEU4RTtcclxuICAgIH1cclxuXHJcbiAgICAuZWxsaXBzZTcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgbGVmdDogOTc3cHg7XHJcbiAgICAgICAgdG9wOiAyNzkxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFOEU4RTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS1ib3gyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDQ1N3B4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBsZWZ0OiA3NDBweDtcclxuICAgICAgICB0b3A6IDI5MTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxODRBODg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2UtYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDM5MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgICAgIHRvcDogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICBjb2xvcjogIzE4NEE4ODtcclxuICAgIH1cclxuXHJcbiAgICAudmVjdG9yMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgYmx1ZTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICBsZWZ0OiA1MTVweDtcclxuICAgICAgICB0b3A6IDI4MDBweDs7XHJcbiAgICAgICAgYm90dG9tOiAtMTclO1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52ZWN0b3IyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBibHVlO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDU3NXB4O1xyXG4gICAgICAgIHRvcDogMjgwMHB4O1xyXG4gICAgICAgIGJvdHRvbTogLTE3JTtcclxuICAgICAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZSJdfQ== */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Home\\\\service.js */"));
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
    className: "jsx-3968816184",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3968816184",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images\\testimonial-img.png",
    className: "jsx-3968816184" + " " + "world-map",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3968816184" + " " + "vector",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-3968816184",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "images\\person1.jpg",
    className: "jsx-3968816184" + " " + "testimonial-img1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-3968816184",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "images\\person4.jpg",
    className: "jsx-3968816184" + " " + "testimonial-img2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-3968816184",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "images\\person2.jpg",
    className: "jsx-3968816184" + " " + "testimonial-img3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-3968816184",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "images\\person3.jpg",
    className: "jsx-3968816184" + " " + "testimonial-img4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-3968816184" + " " + "t-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Sean Devlin"), __jsx("div", {
    className: "jsx-3968816184" + " " + "t-position",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Director of an Australian Stealth Startup"), __jsx("div", {
    className: "jsx-3968816184" + " " + "testimonial-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "They've been extremely flexible in their process for delivering our project, just what our startup needed. It has been an extremely positive experience."), __jsx("div", {
    className: "jsx-3968816184" + " " + "quote",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "\u201C")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3968816184",
    __self: undefined
  }, ".world-map.jsx-3968816184{position:absolute;width:1344px;height:632px;left:0px;top:4409px;opacity:0.2;}.testimonial-box.jsx-3968816184{position:absolute;width:631px;height:170px;left:500px;top:4759px;font-family:Roboto;font-style:normal;font-weight:300;font-size:24px;line-height:28px;color:#555555;}.quote.jsx-3968816184{position:absolute;width:162px;height:275px;left:755px;top:4709px;font-family:Rochester;font-style:normal;font-weight:normal;font-size:300px;line-height:386px;color:rgba(0,0,0,0.1);-webkit-transform:rotate(-169.26deg);-ms-transform:rotate(-169.26deg);transform:rotate(-169.26deg);}.t-name.jsx-3968816184{position:absolute;width:125px;height:28px;left:500px;top:4672px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;color:#222222;}.t-position.jsx-3968816184{position:absolute;width:283px;height:19px;left:500px;top:4710px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#555555;}.testimonial-img1.jsx-3968816184{position:absolute;width:109.35px;height:110.81px;left:255.05px;top:0px;border-radius:50%;}.testimonial-img2.jsx-3968816184{position:absolute;width:86px;height:106px;left:32px;top:159px;border-radius:50%;opacity:0.6;}.testimonial-img3.jsx-3968816184{position:absolute;width:84px;height:90px;left:714px;top:13px;border-radius:50%;opacity:0.6;}.testimonial-img4.jsx-3968816184{position:absolute;width:105px;height:118px;left:1176px;top:152px;border-radius:50%;opacity:0.6;}.vector.jsx-3968816184{position:absolute;width:1330px;height:274.09px;left:7px;top:4420px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhvbWVcXHRlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDZ0IsQUFHMkIsQUFTQSxBQWNBLEFBZUEsQUFjQSxBQWNBLEFBU0EsQUFVQSxBQVVBLEFBVUEsa0JBeEdMLEFBU0QsQUFjQSxBQWVBLEFBY0EsQUFjRyxBQVNKLEFBVUEsQUFVQyxBQVVDLFdBN0JBLEFBVUQsQ0E1RUMsQUFjQSxBQWVELEFBY0EsQUEyQ0MsQ0EvRkEsQUF5R0csRUF2Q0EsUUFvQkwsQ0EvQ0EsQUFjQSxBQXVCRCxDQWxFQyxBQWNBLEFBd0VDLENBL0ZILEdBeUdBLEVBdkNLLEdBVUosQUFVRCxDQXJGRSxBQXNDQSxBQWNBLENBM0NBLEFBY0EsQ0F3RUQsQ0FVQyxLQW5CTyxDQVZBLENBVlYsQ0FqRUksQUFzQ08sQUFjQSxDQTNDQSxBQWNHLEFBd0VKLEVBVXRCLElBdkNzQixLQWpFdEIsR0FxRmdCLENBVkEsR0FyQ00sQUFjQSxBQTJDTixDQXRGTSxHQWNBLEVBMkN0QixFQW9CQSxDQVZBLEdBb0JBLE1BekR1QixBQWNBLENBM0NILEdBY0csYUFiSixFQTZCQSxBQWNBLElBN0JDLFNBYkMsRUE2QkEsQUFjQSxLQTdCQyxVQWJKLEVBNkJBLEFBY0EsTUE3QlcsTUFiN0IsRUE2QkEsQUFjQSxjQTdCaUMsbUdBQ2pDIiwiZmlsZSI6IkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXEhvbWVcXHRlc3RpbW9uaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVGVzdGltb25pYWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSBcIndvcmxkLW1hcFwiIHNyYz0gXCJpbWFnZXNcXHRlc3RpbW9uaWFsLWltZy5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJ2ZWN0b3JcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0gXCJ0ZXN0aW1vbmlhbC1pbWcxXCIgc3JjPSBcImltYWdlc1xccGVyc29uMS5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0gXCJ0ZXN0aW1vbmlhbC1pbWcyXCIgc3JjPSBcImltYWdlc1xccGVyc29uNC5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0gXCJ0ZXN0aW1vbmlhbC1pbWczXCIgc3JjPSBcImltYWdlc1xccGVyc29uMi5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0gXCJ0ZXN0aW1vbmlhbC1pbWc0XCIgc3JjPSBcImltYWdlc1xccGVyc29uMy5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwidC1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICBTZWFuIERldmxpblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJ0LXBvc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBEaXJlY3RvciBvZiBhbiBBdXN0cmFsaWFuIFN0ZWFsdGggU3RhcnR1cFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJ0ZXN0aW1vbmlhbC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIFRoZXkndmUgYmVlbiBleHRyZW1lbHkgZmxleGlibGUgaW4gdGhlaXIgcHJvY2VzcyBmb3IgZGVsaXZlcmluZyBvdXIgcHJvamVjdCwganVzdCB3aGF0IG91ciBzdGFydHVwIG5lZWRlZC4gSXQgaGFzIGJlZW4gYW4gZXh0cmVtZWx5IHBvc2l0aXZlIGV4cGVyaWVuY2UuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInF1b3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICDigJwgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAud29ybGQtbWFwIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEzNDRweDtcclxuICAgICAgICBoZWlnaHQ6IDYzMnB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDQ0MDlweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlc3RpbW9uaWFsLWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA2MzFweDtcclxuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgIGxlZnQ6IDUwMHB4O1xyXG4gICAgICAgIHRvcDogNDc1OXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgfVxyXG5cclxuICAgIC5xdW90ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNjJweDtcclxuICAgICAgICBoZWlnaHQ6IDI3NXB4O1xyXG4gICAgICAgIGxlZnQ6IDc1NXB4O1xyXG4gICAgICAgIHRvcDogNDcwOXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2NoZXN0ZXI7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzg2cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTY5LjI2ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAudC1uYW1lIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBsZWZ0OiA1MDBweDtcclxuICAgICAgICB0b3A6IDQ2NzJweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIH1cclxuXHJcbiAgICAudC1wb3NpdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyODNweDtcclxuICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgbGVmdDogNTAwcHg7XHJcbiAgICAgICAgdG9wOiA0NzEwcHg7ICAgICAgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlc3RpbW9uaWFsLWltZzEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTA5LjM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTAuODFweDtcclxuICAgICAgICBsZWZ0OiAyNTUuMDVweDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlc3RpbW9uaWFsLWltZzIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogODZweDtcclxuICAgICAgICBoZWlnaHQ6IDEwNnB4O1xyXG4gICAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgICAgdG9wOiAxNTlweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXN0aW1vbmlhbC1pbWczIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDg0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIGxlZnQ6IDcxNHB4O1xyXG4gICAgICAgIHRvcDogMTNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gICAgICAgIG9wYWNpdHk6IDAuNjsgIFxyXG4gICAgfVxyXG5cclxuICAgIC50ZXN0aW1vbmlhbC1pbWc0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTE4cHg7XHJcbiAgICAgICAgbGVmdDogMTE3NnB4O1xyXG4gICAgICAgIHRvcDogMTUycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxuICAgICBcclxuICAgIC52ZWN0b3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTMzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjc0LjA5cHg7XHJcbiAgICAgICAgbGVmdDogN3B4O1xyXG4gICAgICAgIHRvcDogNDQyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWwiXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Home\\\\testimonial.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ }),

/***/ "./components/Success/Outlink.js":
/*!***************************************!*\
  !*** ./components/Success/Outlink.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Success\\Outlink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 2
  }
}, __jsx("path", {
  d: "M38.288 10.297l1.414 1.415-14.99 14.99-1.414-1.414z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 62
  }
}), __jsx("path", {
  d: "M40 20h-2v-8h-8v-2h10z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 125
  }
}), __jsx("path", {
  d: "M35 38H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 159
  }
})));

/***/ }),

/***/ "./components/Success/Youtube.js":
/*!***************************************!*\
  !*** ./components/Success/Youtube.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Success\\Youtube.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("svg", {
  viewBox: "0 -77 512.00213 512",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 2
  }
}, __jsx("path", {
  d: "m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0",
  fill: "#f00",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 72
  }
}), __jsx("path", {
  d: "m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0",
  fill: "#fff",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 736
  }
})));

/***/ }),

/***/ "./components/Success/success-stories.js":
/*!***********************************************!*\
  !*** ./components/Success/success-stories.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Youtube */ "./components/Success/Youtube.js");
/* harmony import */ var _Outlink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Outlink */ "./components/Success/Outlink.js");
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\components\\Success\\success-stories.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Success = () => {
  return __jsx("div", {
    className: "jsx-720879395",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-720879395" + " " + "success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-720879395" + " " + "success-stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Success Stories"), __jsx("div", {
    className: "jsx-720879395" + " " + "success-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "We have built high impact solutions across Industries. Have a look! We\u2019ve handpicked some our finest work for you to view"), __jsx("button", {
    className: "jsx-720879395",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Get in touch")), __jsx("div", {
    className: "jsx-720879395",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images\\trello-logo.png",
    className: "jsx-720879395" + " " + "trello-logo1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-720879395" + " " + "out-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_Outlink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-720879395" + " " + "trello-content1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Trello is the easy, free, flexible, and visual way to manage your projects and organize anything, trusted by millions of people from all over the world."), __jsx("div", {
    className: "jsx-720879395",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images\\node-logo.png",
    className: "jsx-720879395" + " " + "node-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-720879395",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images\\react-logo.png",
    className: "jsx-720879395" + " " + "react-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-720879395",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images\\mongodb-logo.png",
    className: "jsx-720879395" + " " + "mongo-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-720879395" + " " + "youtube-link1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-720879395" + " " + "youtube-logo1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(_Youtube__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "jsx-720879395" + " " + "youtube-link2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-720879395" + " " + "youtube-logo2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(_Youtube__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-720879395",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images\\trello-logo.png",
    className: "jsx-720879395" + " " + "trello-logo2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-720879395" + " " + "out-link1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_Outlink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-720879395" + " " + "trello-content2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Trello is the easy, free, flexible, and visual way to manage your projects and organize anything, trusted by millions of people from all over the world."), __jsx("div", {
    className: "jsx-720879395",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images\\node-logo.png",
    className: "jsx-720879395" + " " + "node-logo1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-720879395",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images\\react-logo.png",
    className: "jsx-720879395" + " " + "react-logo1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-720879395",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images\\mongodb-logo.png",
    className: "jsx-720879395" + " " + "mongo-logo1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "720879395",
    __self: undefined
  }, ".success.jsx-720879395{position:absolute;width:1340px;height:630px;left:0px;top:0px;background:#FFFFFF;}.success-stories.jsx-720879395{position:absolute;width:435px;height:277px;left:111px;top:185px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:90px;line-height:105px;color:#333333;}@media (min-width:1024px) and (max-width:1024px){.out-link.jsx-720879395{position:absolute;left:37%;right:59%;top:54%;}}.out-link.jsx-720879395{position:absolute;left:28%;right:69%;top:111%;}.out-link1.jsx-720879395{position:absolute;left:93%;right:4%;top:190%;}.success-content.jsx-720879395{position:absolute;width:515px;height:223px;left:656px;top:190px;font-family:Roboto;font-style:normal;font-weight:300;font-size:36px;line-height:42px;color:#333333;}button.jsx-720879395{position:absolute;width:158px;height:50px;left:650px;top:416px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#184A88;font-family:Roboto;font-style:normal;font-weight:normal;}.trello-logo1.jsx-720879395{position:absolute;width:261px;height:63px;left:6px;top:743px;}.trello-content1.jsx-720879395{position:absolute;width:360px;height:287px;left:20px;top:835px;font-family:Roboto;font-style:normal;font-weight:300;font-size:30px;line-height:35px;color:#000000;}.node-logo.jsx-720879395{position:absolute;width:85px;height:85px;left:21px;top:1093px;}.react-logo.jsx-720879395{position:absolute;width:104px;height:35px;left:124px;top:1115px;}.mongo-logo.jsx-720879395{position:absolute;width:135px;height:37px;left:246px;top:1113px;}.youtube-link1.jsx-720879395{position:absolute;width:880px;height:480px;left:455px;top:706px;background:rgba(0,0,0,0.48);}.youtube-logo1.jsx-720879395{position:absolute;left:42%;right:42%;top:35%;}.youtube-logo2.jsx-720879395{position:absolute;left:42%;right:41%;top:36%;}.youtube-link2.jsx-720879395{position:absolute;width:880px;height:480px;left:0px;top:1236px;background:rgba(0,0,0,0.48);}.trello-logo2.jsx-720879395{position:absolute;width:261px;height:63px;left:930px;top:1273px;}.trello-content2.jsx-720879395{position:absolute;width:360px;height:287px;left:930px;top:1365px;font-family:Roboto;font-style:normal;font-weight:300;font-size:30px;line-height:35px;color:#000000;}.node-logo1.jsx-720879395{position:absolute;width:85px;height:85px;left:930px;top:1623px;}.react-logo1.jsx-720879395{position:absolute;width:104px;height:35px;left:1033px;top:1645px;}.mongo-logo1.jsx-720879395{position:absolute;width:135px;height:37px;left:1155px;top:1643px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXFN1Y2Nlc3NcXHN1Y2Nlc3Mtc3Rvcmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RHdCLEFBSTJCLEFBU0EsQUFlSSxBQU9KLEFBT0EsQUFPQSxBQWNBLEFBaUJBLEFBUUEsQUFjQSxBQVFBLEFBUUEsQUFRQSxBQVNBLEFBUUEsQUFRQSxBQVNBLEFBU0EsQUFjQSxBQVFBLEFBUUEsa0JBbE1MLEFBU0QsQUFlQyxBQU9KLEFBT0EsQUFPRyxBQWNBLEFBaUJBLEFBUUEsQUFjRCxBQVFDLEFBUUEsQUFRQSxBQVNILEFBUUEsQUFRRyxBQVNBLEFBU0EsQUFjRCxBQVFDLEFBUUEsU0ExS0UsQUFPSixBQU9ELEFBNkZDLEFBUUEsRUF6Q0UsQUFpRkEsQ0ExS0MsQUFvQ0EsQUFjRCxBQWlCQSxBQVFDLEFBc0JELEFBUUEsQUFRQyxBQXlCQSxBQVNELEFBU0MsQUFzQkQsQUFRQSxDQW5NQyxLQXVDSixDQWRHLEFBT0gsQUFvR0QsQUFRQSxJQXpDRSxBQWlGQyxDQXhIQSxBQWlCRixBQThCRSxBQVFBLEFBMENBLEFBK0JDLEFBUUEsQ0ExTEQsQUFvQ0EsQUF1Q0QsQUFzQ0MsQUF5QkYsQUFrQkUsQ0FyS0YsQ0F5QlQsQUFjSixBQThGQSxBQVFBLENBN0dBLEtBNkNjLEFBc0JDLENBaURBLEFBZ0NBLENBbkxILEFBMkRFLEFBeUJBLEFBc0JDLEFBUUEsQUEwQ0EsQ0FuSkQsQUFvQ0EsQUE2RUEsQUEyQ0MsQUFzQkEsQUFRQSxPQWxNUSxBQTRFdkIsQ0FzQkEsQ0F2Q3VCLEFBeUJBLEFBK0RZLEFBZ0NuQyxDQTFLdUIsQUFvQ0EsQUE2RHZCLEFBUUEsQUFRbUMsQUFtQ25DLENBUXVCLEFBc0J2QixBQVFBLGVBbE1BLEVBMkQ2QixBQXlCUCxDQTNFQSxBQW9DQSxDQXdIQSxPQWxCdEIsQ0F6QkEsUUFyQ29CLENBM0VDLEFBb0NELENBd0hBLEtBMUdNLFNBMEJQLENBdkNBLENBcENBLEFBNEpBLFdBMUdHLEVBMEJELENBdkNBLENBcENDLEFBNEpELGNBMUdFLENBMEJMLENBdkNBLENBd0hBLENBNUpBLFdBNEVsQixDQXZDQSxDQXdIQSxDQTVKQSwyRUFpRHNCLGtCQUNKLGNBQ0ssbUJBQ0Qsa0JBRXZCLG1CQUFDIiwiZmlsZSI6IkU6XFxyZWFjdGpzXFxvZmZpY2Utd29ya1xcc3BpbmVvci1uZXh0XFxzcGluZW9yLW5leHRcXGNvbXBvbmVudHNcXFN1Y2Nlc3NcXHN1Y2Nlc3Mtc3Rvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBZb3V0dWJlIGZyb20gXCIuL1lvdXR1YmVcIlxyXG5pbXBvcnQgT3V0bGluayBmcm9tIFwiLi9PdXRsaW5rXCJcclxuXHJcbmNvbnN0IFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWNjZXNzLXN0b3JpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICBTdWNjZXNzIFN0b3JpZXNcclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzcy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgV2UgaGF2ZSBidWlsdCBoaWdoIGltcGFjdCBzb2x1dGlvbnMgYWNyb3NzIEluZHVzdHJpZXMuIEhhdmUgYSBsb29rISBXZeKAmXZlIGhhbmRwaWNrZWQgc29tZSBvdXIgZmluZXN0IHdvcmsgZm9yIHlvdSB0byB2aWV3XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPkdldCBpbiB0b3VjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0cmVsbG8tbG9nbzFcIiBzcmM9IFwiaW1hZ2VzXFx0cmVsbG8tbG9nby5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgIDxPdXRsaW5rLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbGxvLWNvbnRlbnQxXCI+XHJcbiAgICAgICAgICAgICAgICBUcmVsbG8gaXMgdGhlIGVhc3ksIGZyZWUsIGZsZXhpYmxlLCBhbmQgdmlzdWFsIHdheSB0byBtYW5hZ2UgeW91ciBwcm9qZWN0cyBhbmQgb3JnYW5pemUgYW55dGhpbmcsIHRydXN0ZWQgYnkgbWlsbGlvbnMgb2YgcGVvcGxlIGZyb20gYWxsIG92ZXIgdGhlIHdvcmxkLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vZGUtbG9nb1wiIHNyYz0gXCJpbWFnZXNcXG5vZGUtbG9nby5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJlYWN0LWxvZ29cIiBzcmM9IFwiaW1hZ2VzXFxyZWFjdC1sb2dvLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9uZ28tbG9nb1wiIHNyYz0gXCJpbWFnZXNcXG1vbmdvZGItbG9nby5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieW91dHViZS1saW5rMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ5b3V0dWJlLWxvZ28xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFlvdXR1YmUvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInlvdXR1YmUtbGluazJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieW91dHViZS1sb2dvMlwiPlxyXG4gICAgICAgICAgICAgICAgPFlvdXR1YmUvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRyZWxsby1sb2dvMlwiIHNyYz0gXCJpbWFnZXNcXHRyZWxsby1sb2dvLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXQtbGluazFcIj5cclxuICAgICAgICAgICAgICAgIDxPdXRsaW5rLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbGxvLWNvbnRlbnQyXCI+XHJcbiAgICAgICAgICAgICAgICBUcmVsbG8gaXMgdGhlIGVhc3ksIGZyZWUsIGZsZXhpYmxlLCBhbmQgdmlzdWFsIHdheSB0byBtYW5hZ2UgeW91ciBwcm9qZWN0cyBhbmQgb3JnYW5pemUgYW55dGhpbmcsIHRydXN0ZWQgYnkgbWlsbGlvbnMgb2YgcGVvcGxlIGZyb20gYWxsIG92ZXIgdGhlIHdvcmxkLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm9kZS1sb2dvMVwiIHNyYz0gXCJpbWFnZXNcXG5vZGUtbG9nby5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicmVhY3QtbG9nbzFcIiBzcmM9IFwiaW1hZ2VzXFxyZWFjdC1sb2dvLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtb25nby1sb2dvMVwiIHNyYz0gXCJpbWFnZXNcXG1vbmdvZGItbG9nby5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICBcclxuICAgIC5zdWNjZXNzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEzNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDYzMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWNjZXNzLXN0b3JpZXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzdweDtcclxuICAgICAgICBsZWZ0OiAxMTFweDtcclxuICAgICAgICB0b3A6IDE4NXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIC5vdXQtbGluayB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMzclO1xyXG4gICAgICAgICAgICByaWdodDogNTklO1xyXG4gICAgICAgICAgICB0b3A6IDU0JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAub3V0LWxpbmsge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAyOCU7XHJcbiAgICAgICAgcmlnaHQ6IDY5JTtcclxuICAgICAgICB0b3A6IDExMSU7XHJcbiAgICB9XHJcblxyXG4gICAgLm91dC1saW5rMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDkzJTtcclxuICAgICAgICByaWdodDogNCU7XHJcbiAgICAgICAgdG9wOiAxOTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWNjZXNzLWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNTE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjNweDtcclxuICAgICAgICBsZWZ0OiA2NTZweDtcclxuICAgICAgICB0b3A6IDE5MHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNThweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgbGVmdDogNjUwcHg7XHJcbiAgICAgICAgdG9wOiA0MTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxODRBODg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMxODRBODg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbFxyXG4gICAgfVxyXG4gICAgLnRyZWxsby1sb2dvMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyNjFweDtcclxuICAgICAgICBoZWlnaHQ6IDYzcHg7XHJcbiAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgIHRvcDogNzQzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyZWxsby1jb250ZW50MSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDI4N3B4O1xyXG4gICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgdG9wOiA4MzVweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICAubm9kZS1sb2dvIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgICAgIGxlZnQ6IDIxcHg7XHJcbiAgICAgICAgdG9wOiAxMDkzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlYWN0LWxvZ28ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTA0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGxlZnQ6IDEyNHB4O1xyXG4gICAgICAgIHRvcDogMTExNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb25nby1sb2dvIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEzNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICBsZWZ0OiAyNDZweDtcclxuICAgICAgICB0b3A6IDExMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAueW91dHViZS1saW5rMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA4ODBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgICAgIGxlZnQ6IDQ1NXB4O1xyXG4gICAgICAgIHRvcDogNzA2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ4KTtcclxuICAgIH1cclxuXHJcbiAgICAueW91dHViZS1sb2dvMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDQyJTtcclxuICAgICAgICByaWdodDogNDIlO1xyXG4gICAgICAgIHRvcDogMzUlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC55b3V0dWJlLWxvZ28yIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNDIlO1xyXG4gICAgICAgIHJpZ2h0OiA0MSU7XHJcbiAgICAgICAgdG9wOiAzNiU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnlvdXR1YmUtbGluazIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogODgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0ODBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAxMjM2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ4KTtcclxuICAgIH1cclxuXHJcbiAgICAudHJlbGxvLWxvZ28yIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI2MXB4O1xyXG4gICAgICAgIGhlaWdodDogNjNweDtcclxuICAgICAgICBsZWZ0OiA5MzBweDtcclxuICAgICAgICB0b3A6IDEyNzNweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnRyZWxsby1jb250ZW50MiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDI4N3B4O1xyXG4gICAgICAgIGxlZnQ6IDkzMHB4O1xyXG4gICAgICAgIHRvcDogMTM2NXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ub2RlLWxvZ28xIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgICAgIGxlZnQ6IDkzMHB4O1xyXG4gICAgICAgIHRvcDogMTYyM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWFjdC1sb2dvMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgbGVmdDogMTAzM3B4O1xyXG4gICAgICAgIHRvcDogMTY0NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb25nby1sb2dvMSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgbGVmdDogMTE1NXB4O1xyXG4gICAgICAgIHRvcDogMTY0M3B4O1xyXG4gICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc3MiXX0= */\n/*@ sourceURL=E:\\\\reactjs\\\\office-work\\\\spineor-next\\\\spineor-next\\\\components\\\\Success\\\\success-stories.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Success);

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
/* harmony import */ var _components_Header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header/header */ "./components/Header/header.js");
/* harmony import */ var _components_listProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/listProperty */ "./components/listProperty/index.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_globalFunc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/globalFunc */ "./shared/globalFunc.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_social_meta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/social-meta */ "./components/social-meta.js");
/* harmony import */ var _reach_skip_nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @reach/skip-nav */ "@reach/skip-nav");
/* harmony import */ var _reach_skip_nav__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_reach_skip_nav__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Success_success_stories__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Success/success-stories */ "./components/Success/success-stories.js");
/* harmony import */ var _components_FAQ_faqs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/FAQ/faqs */ "./components/FAQ/faqs.js");
var _jsxFileName = "E:\\reactjs\\office-work\\spineor-next\\spineor-next\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













/* harmony default export */ __webpack_exports__["default"] = (props => {
  const isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_1__["useAmp"])();
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_components_Header_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), __jsx(_components_FAQ_faqs__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), __jsx(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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

/***/ 4:
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