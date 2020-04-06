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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("AQdx");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XEPl");
/* harmony import */ var _Footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Sa42");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => {
  return __jsx("div", null, __jsx(_Header_header__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), props.children, __jsx(_Footer_footer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "AQdx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "About", function() { return /* binding */ About_About; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./Common/About/Whoarewe.js

var __jsx = external_react_default.a.createElement;


const Whoarewe = props => {
  return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: "jsx-40941606" + " " + "outer_wrapper"
  }, __jsx("div", {
    className: "jsx-40941606" + " " + "inner_header"
  }, props.name, "WHO ARE WE?"), __jsx("div", {
    className: "jsx-40941606" + " " + "inner_text"
  }, "All you need for digital", __jsx("br", {
    className: "jsx-40941606"
  }), "domination, under one expert ", __jsx("br", {
    className: "jsx-40941606"
  }), "roof. We are the right technology ", __jsx("br", {
    className: "jsx-40941606"
  }), "partner to drive."), __jsx("div", {
    className: "jsx-40941606" + " " + "button_outer"
  }), __jsx("div", {
    className: "jsx-40941606" + " " + "button_inner"
  }, "Get in touch")), __jsx(style_default.a, {
    id: "40941606"
  }, [".outer_wrapper.jsx-40941606{position:absolute;width:1300px;height:630px;left:0px;top:74px;background:#FFFFFF;}", ".inner_header.jsx-40941606{position:absolute;width:435px;height:186px;left:111px;top:264px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:90px;line-height:105px;color:#333333;}", ".inner_text.jsx-40941606{position:absolute;width:515px;height:223px;left:656px;top:246px;font-family:Roboto;font-style:normal;font-weight:300;font-size:36px;line-height:42px;color:#333333;}", ".button_outer.jsx-40941606{position:absolute;width:158px;height:50px;left:658px;top:448px;background:#FFFFFF;border:2px solid #184A88;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}", ".button_inner.jsx-40941606{position:absolute;width:86px;height:19px;left:692px;top:463px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#184A88;color:#184A88;}"]));
};

/* harmony default export */ var About_Whoarewe = (Whoarewe);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./Common/About/Methodology.js

var Methodology_jsx = external_react_default.a.createElement;


class Methodology_Methodology extends external_react_["Component"] {
  render() {
    return Methodology_jsx(external_react_default.a.Fragment, null, Methodology_jsx("img", {
      src: "images\\african4.png",
      className: "jsx-2229429152" + " " + "image_wrapper"
    }), Methodology_jsx("div", {
      className: "jsx-2229429152" + " " + "text_wrap"
    }), Methodology_jsx("div", {
      className: "jsx-2229429152" + " " + "image_right"
    }, Methodology_jsx("p", {
      className: "jsx-2229429152"
    }, " Lorem Ipsum is simply dummy text of the printing and typesetting ", Methodology_jsx("br", {
      className: "jsx-2229429152"
    }), "industry. Lorem Ipsum has been the industry's standard dummy text", Methodology_jsx("br", {
      className: "jsx-2229429152"
    }), "ever since the 1500s, when an unknown printer took a galley of type and", Methodology_jsx("br", {
      className: "jsx-2229429152"
    }), "scrambled it to make a type specimen book."), Methodology_jsx("p", {
      className: "jsx-2229429152"
    }, "It has survived not only five centuries, but also the leap into electronic", Methodology_jsx("br", {
      className: "jsx-2229429152"
    }), "typesetting, remaining essentially unchanged. It was popularised in the", Methodology_jsx("br", {
      className: "jsx-2229429152"
    }), "1960s with the release of Letraset sheets containing."), Methodology_jsx("p", {
      className: "jsx-2229429152"
    }, "Lorem Ipsum passages, and more recently with desktop publishing", Methodology_jsx("br", {
      className: "jsx-2229429152"
    }), "software like Aldus PageMaker including versions of Lorem Ipsum.", Methodology_jsx("br", {
      className: "jsx-2229429152"
    }))), Methodology_jsx("div", {
      className: "jsx-2229429152" + " " + "image_left"
    }), Methodology_jsx("div", {
      className: "jsx-2229429152" + " " + "image_left_header"
    }, "Our", Methodology_jsx("br", {
      className: "jsx-2229429152"
    }), " Methodology"), Methodology_jsx("div", {
      className: "jsx-2229429152" + " " + "image_left_text"
    }, "Spineor, we have  an  enormous  industry ", Methodology_jsx("br", {
      className: "jsx-2229429152"
    }), "experience in  developing a  methodology that ", Methodology_jsx("br", {
      className: "jsx-2229429152"
    }), "applies to all projects irrespective of size and  ", Methodology_jsx("br", {
      className: "jsx-2229429152"
    }), "duration."), Methodology_jsx(style_default.a, {
      id: "2229429152"
    }, [".text_wrap.jsx-2229429152{position:absolute;width:699px;height:243px;left:602px;top:1394px;background:#FFFFFF;}", ".image_wrapper.jsx-2229429152{position:absolute;width:1300px;height:859px;left:1px;top:778px;}", ".image_left.jsx-2229429152{position:absolute;width:617px;height:399px;left:34px;top:1238px;background:#184A88;}", ".image_left_header.jsx-2229429152{position:absolute;width:540.85px;height:113px;left:68.17px;top:1312px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#FFFFFF;}", ".image_left_text.jsx-2229429152{position:absolute;width:525.23px;height:146px;left:74.03px;top:1445px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;color:#FFFFFF;}", ".image_right.jsx-2229429152{position:absolute;width:567px;height:287px;left:693px;top:1466px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#333333;}"]));
  }

}
/* harmony default export */ var About_Methodology = (Methodology_Methodology);
// CONCATENATED MODULE: ./Common/About/Process.js

var Process_jsx = external_react_default.a.createElement;

class Process_Process extends external_react_["Component"] {
  render() {
    return Process_jsx(external_react_default.a.Fragment, null, Process_jsx("img", {
      src: "/images/african4.png",
      className: "jsx-2168743011" + " " + "image_wrapper"
    }), Process_jsx("div", {
      className: "jsx-2168743011" + " " + "right_wrapper"
    }), Process_jsx("div", {
      className: "jsx-2168743011" + " " + "image_right"
    }, Process_jsx("p", {
      className: "jsx-2168743011"
    }, "Lorem Ipsum is simply dummy text of the printing and typesetting ", Process_jsx("br", {
      className: "jsx-2168743011"
    }), "industry. Lorem Ipsum has been the industry's standard dummy text", Process_jsx("br", {
      className: "jsx-2168743011"
    }), "ever since the 1500s, when an unknown printer took a galley of type and ", Process_jsx("br", {
      className: "jsx-2168743011"
    }), "scrambled it to make a type specimen book. "), Process_jsx("p", {
      className: "jsx-2168743011"
    }, "It has survived not only five centuries, but also the leap into electronic", Process_jsx("br", {
      className: "jsx-2168743011"
    }), "typesetting, remaining essentially unchanged. It was popularised in the", Process_jsx("br", {
      className: "jsx-2168743011"
    }), "1960s with the release of Letraset sheets containing")), Process_jsx("div", {
      className: "jsx-2168743011" + " " + "image_left"
    }), Process_jsx("div", {
      className: "jsx-2168743011" + " " + "image_left_header"
    }, "Our ", Process_jsx("br", {
      className: "jsx-2168743011"
    }), " Process"), Process_jsx("div", {
      className: "jsx-2168743011" + " " + "image_left_text"
    }, "Over the past few years, Spineor has constructed ", Process_jsx("br", {
      className: "jsx-2168743011"
    }), "a key collection of development and design ", Process_jsx("br", {
      className: "jsx-2168743011"
    }), "facilities that not only surpassed our customers'", Process_jsx("br", {
      className: "jsx-2168743011"
    }), "expectations."), Process_jsx(style_default.a, {
      id: "2168743011"
    }, [".right_wrapper.jsx-2168743011{position:absolute;width:699px;height:243px;left:602px;top:2474px;background:#FFFFFF;}", ".image_wrapper.jsx-2168743011{position:absolute;width:1300px;height:859px;left:1px;top:1858px;}", ".image_left.jsx-2168743011{position:absolute;width:617px;height:399px;left:34px;top:2318px;background:#184A88;}", ".image_left_header.jsx-2168743011{position:absolute;width:540.85px;height:113px;left:68.17px;top:2392px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#FFFFFF;}", ".image_left_text.jsx-2168743011{position:absolute;width:525.23px;height:146px;left:74.03px;top:2525px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:24px;line-height:28px;color:#FFFFFF;}", ".image_right.jsx-2168743011{position:absolute;width:567px;height:202px;left:693px;top:2546px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#333333;}"]));
  }

}
/* harmony default export */ var About_Process = (Process_Process);
// CONCATENATED MODULE: ./Common/About/Helpus.js

var Helpus_jsx = external_react_default.a.createElement;

class Helpus_Helpus extends external_react_["Component"] {
  render() {
    return Helpus_jsx(external_react_default.a.Fragment, null, Helpus_jsx("img", {
      src: "/images/image2.png",
      className: "jsx-3431104864" + " " + "image_wrapper"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "image_wrapper"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "image_left_wrapper"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "image_left_head"
    }, "We Help You Grow Your  Business"), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "image_left_head_bottom"
    }, "Why are we in business?"), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "image_left_text"
    }, Helpus_jsx("p", {
      className: "jsx-3431104864"
    }, " At Spineor, we think the website or mobile", Helpus_jsx("br", {
      className: "jsx-3431104864"
    }), "application of your company is your brand and", Helpus_jsx("br", {
      className: "jsx-3431104864"
    }), "your brand is vital for the results of your company.", Helpus_jsx("br", {
      className: "jsx-3431104864"
    }), "Your website  app is a showcase of your ", Helpus_jsx("br", {
      className: "jsx-3431104864"
    }), "company to your clients, whether you're looking to ", Helpus_jsx("br", {
      className: "jsx-3431104864"
    }), "enter eCommerce, want to offer your restaurant", Helpus_jsx("br", {
      className: "jsx-3431104864"
    }), "some additional panache on the internet, or have", Helpus_jsx("br", {
      className: "jsx-3431104864"
    }), "the next excellent mobile app concept."), Helpus_jsx("p", {
      className: "jsx-3431104864"
    }, "Building websites and mobile apps is our passion.", Helpus_jsx("br", {
      className: "jsx-3431104864"
    }), "Helping people to grow their businesses is our", Helpus_jsx("br", {
      className: "jsx-3431104864"
    }), "dream.")), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "first_button"
    }, Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "first_button_wrapper"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "first_button_inner"
    }, "Delivery on Time")), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "second_button"
    }, Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "second_button_wrapper"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "second_button_inner"
    }, "Clear Communications")), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "third_button"
    }, Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "third_button_wrapper"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "third_button_inner"
    }, "Upfront")), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "fourth_button"
    }, Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "fourth_button_wrapper"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "fourth_button_inner"
    }, "Innovative")), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "fifth_button_wrapper"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "fifth_button_inner"
    }, "Reliability"), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "line8"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "line3"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "line7"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "line10"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "line9"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "line13"
    }), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "testing"
    }, "Testing & Launch"), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "maintain"
    }, "MAINTENANCE & ONGOING SUPPORT"), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "strategy"
    }, "STRATEGY"), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "design"
    }, "DESIGN"), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "content"
    }, "CONTENT CREATION"), Helpus_jsx("div", {
      className: "jsx-3431104864" + " " + "devop"
    }, "DEVELOPMENT"), Helpus_jsx(style_default.a, {
      id: "3431104864"
    }, [".image_wrapper.jsx-3431104864{position:absolute;width:1299px;height:996px;left:1px;top:2918px;background-image:url('../resourses/images/img1.jpg');background-color:'grey';-webkit-transform:matrix(-1,0,0,1,0,0);-ms-transform:matrix(-1,0,0,1,0,0);transform:matrix(-1,0,0,1,0,0);}", ".image_left_wrapper.jsx-3431104864{position:absolute;width:617px;height:806px;left:34px;top:3140px;background:#184A88;}", ".image_left_head.jsx-3431104864{position:absolute;width:541px;height:110px;left:68px;top:3206px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:rgba(255,255,255,0.9);}", ".image_left_head_bottom.jsx-3431104864{position:absolute;width:200px;height:21px;left:74px;top:3333px;font-family:Roboto;font-style:normal;font-weight:900;font-size:18px;line-height:21px;color:#FFFFFF;}", ".image_left_text.jsx-3431104864{position:absolute;width:525.23px;height:308.1px;left:68px;top:3395px;font-family:Roboto;font-style:normal;font-weight:300;font-size:24px;line-height:28px;color:#FFFFFF;}", ".first_button_wrapper.jsx-3431104864{position:absolute;width:181px;height:42px;left:64px;top:3771px;background:#87BBE5;border:1px solid #184A88;box-sizing:border-box;border-radius:33px;}", ".first_button_inner.jsx-3431104864{position:absolute;width:118px;height:19px;left:96px;top:3783px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}", ".second_button_wrapper.jsx-3431104864{position:absolute;width:226px;height:42px;left:264px;top:3771px;background:#87BBE5;border:1px solid #184A88;box-sizing:border-box;border-radius:33px;}", ".second_button_inner.jsx-3431104864{position:absolute;width:163px;height:19px;left:296px;top:3783px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}", ".third_button_wrapper.jsx-3431104864{position:absolute;width:118px;height:42px;left:64px;top:3823px;background:#87BBE5;border:1px solid #184A88;box-sizing:border-box;border-radius:33px;}", ".third_button_inner.jsx-3431104864{position:absolute;width:54px;height:19px;left:96px;top:3835px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}", ".fourth_button_wrapper.jsx-3431104864{position:absolute;width:140px;height:42px;left:203px;top:3823px;background:#87BBE5;border:1px solid #184A88;box-sizing:border-box;border-radius:33px;}", ".fourth_button_inner.jsx-3431104864{position:absolute;width:73px;height:19px;left:235px;top:3835px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}", ".fifth_button_wrapper.jsx-3431104864{position:absolute;width:140px;height:42px;left:363px;top:3823px;background:#87BBE5;border:1px solid #184A88;box-sizing:border-box;border-radius:33px;}", ".fifth_button_wrapper.jsx-3431104864{position:absolute;width:69px;height:19px;left:395px;top:3835px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}", ".fifth_button_wrapper.jsx-3431104864{position:absolute;width:140px;height:42px;left:363px;top:3823px;background:#87BBE5;border:1px solid #184A88;box-sizing:border-box;border-radius:33px;}", ".fifth_button_inner.jsx-3431104864{position:absolute;width:69px;height:19px;left:395px;top:3835px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;color:#184A88;}", ".line3.jsx-3431104864{position:absolute;width:180px;height:0px;left:723px;top:3725px;border:1px solid #ffffff;}", ".line8.jsx-3431104864{position:absolute;width:180px;height:0px;left:919px;top:3725px;border:1px solid #ffffff;}", ".line7.jsx-3431104864{position:absolute;width:180px;height:0px;left:1114px;top:3725px;border:1px solid #ffffff;}", ".line6.jsx-3431104864{position:absolute;width:180px;height:0px;left:1109px;top:3914px;border:1px solid #ffffff;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}", ".line3.jsx-3431104864{position:absolute;width:180px;height:0px;left:723px;top:3725px;border:1px solid #FFFFFF;}", ".line9.jsx-3431104864{position:absolute;width:180px;height:0px;left:1114px;top:3525px;border:1px solid #ffffff;}", ".line10.jsx-3431104864{position:absolute;width:180px;height:0px;left:919px;top:3525px;border:1px solid #ffffff;}", ".line13.jsx-3431104864{position:absolute;width:180px;height:0px;left:1114px;top:3322px;border:1px solid #ffffff;}", ".testing.jsx-3431104864{position:absolute;width:78px;height:38px;left:1166px;top:3451px;font-family:Roboto;font-style:normal;font-weight:900;font-size:16px;line-height:19px;text-align:center;text-transform:uppercase;color:#ffffff;}", ".maintain.jsx-3431104864{position:absolute;width:148px;height:38px;left:938px;top:3655px;font-family:Roboto;font-style:normal;font-weight:900;font-size:16px;line-height:19px;text-align:center;text-transform:uppercase;color:#ffffff;}", ".strategy.jsx-3431104864{position:absolute;width:85px;height:19px;left:769px;top:3855px;font-family:Roboto;font-style:normal;font-weight:900;font-size:16px;line-height:19px;text-transform:uppercase;color:#ffffff;}", ".design.jsx-3431104864{position:absolute;width:61px;height:19px;left:982px;top:3855px;font-family:Roboto;font-style:normal;font-weight:900;font-size:16px;line-height:19px;text-transform:uppercase;color:#ffffff;}", ".content.jsx-3431104864{position:absolute;width:82px;height:38px;left:1164px;top:3845px;font-family:Roboto;font-style:normal;font-weight:900;font-size:16px;line-height:19px;text-align:center;text-transform:uppercase;color:#ffffff;}", ".devop.jsx-3431104864{position:absolute;width:117px;height:19px;left:1147px;top:3665px;font-family:Roboto;font-style:normal;font-weight:900;font-size:16px;line-height:19px;text-align:center;text-transform:uppercase;color:#ffffff;}", ".line14.jsx-3431104864{position:absolute;width:180px;height:0px;left:1109px;top:3511px;border:1px solid #ffffff;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}"]));
  }

}
/* harmony default export */ var About_Helpus = (Helpus_Helpus);
// CONCATENATED MODULE: ./Common/About/Company.js

var Company_jsx = external_react_default.a.createElement;


class Company_Company extends external_react_["Component"] {
  render() {
    return Company_jsx(external_react_default.a.Fragment, null, Company_jsx(head_default.a, null, Company_jsx("link", {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      className: "jsx-472927675"
    }), Company_jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      className: "jsx-472927675"
    })), Company_jsx("div", {
      className: "jsx-472927675" + " " + "outer_wrapper"
    }, Company_jsx("div", {
      className: "jsx-472927675" + " " + "inner_wrapper"
    }), Company_jsx("div", {
      className: "jsx-472927675" + " " + "top_text"
    }, "READ MORE ABOUT US"), Company_jsx("div", {
      className: "jsx-472927675" + " " + "top_header"
    }, "Know more about our company"), Company_jsx("div", {
      className: "jsx-472927675" + " " + "inner_text"
    }, Company_jsx("p", {
      className: "jsx-472927675"
    }, " Our people are our assets."), Company_jsx("p", {
      className: "jsx-472927675"
    }, "Detailing, scoping not just for current but for future helps us plan", Company_jsx("br", {
      className: "jsx-472927675"
    }), "and build scalable solutions."), Company_jsx("p", {
      className: "jsx-472927675"
    }, " Respecting every person we work with, our commitment to our", Company_jsx("br", {
      className: "jsx-472927675"
    }), "work and to the society."), Company_jsx("p", {
      className: "jsx-472927675"
    }, " We face new challenges every day but our commitment remains", Company_jsx("br", {
      className: "jsx-472927675"
    }), "unchanged, and we continue to take determined steps into the ", Company_jsx("br", {
      className: "jsx-472927675"
    }), "future with every individual associated with us.")), Company_jsx("div", {
      className: "jsx-472927675" + " " + "button_wrapper"
    }), Company_jsx("div", {
      className: "jsx-472927675" + " " + "button_text"
    }, Company_jsx("span", {
      className: "jsx-472927675"
    }, Company_jsx("i", {
      className: "jsx-472927675" + " " + "fas fa-arrow-down"
    })), " DownloadWhitepaper")), Company_jsx(style_default.a, {
      id: "472927675"
    }, [".inner_wrapper.jsx-472927675{position:absolute;width:987px;height:427px;left:111px;top:4146px;}", ".top_text.jsx-472927675{position:absolute;width:208px;height:21px;left:111px;top:4146px;font-family:Roboto;font-style:normal;font-weight:900;font-size:18px;line-height:21px;color:#184A88;}", ".top_header.jsx-472927675{position:absolute;width:384px;height:120px;left:111px;top:4181px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#333333;}", ".inner_text.jsx-472927675{position:absolute;width:513px;height:247px;left:111px;top:4326px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#333333;}", ".button_wrapper.jsx-472927675{position:absolute;width:254px;height:50px;left:844px;top:4503px;background:#184A88;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}", ".button_text.jsx-472927675{position:absolute;width:157px;height:19px;left:902px;top:4518px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#FFFFFF;}", ".button_tag.jsx-472927675{position:absolute;left:46.09%;right:46.09%;top:0%;bottom:21.48%;background:#FFFFFF;}"]));
  }

}
/* harmony default export */ var About_Company = (Company_Company);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__("5Yp1");

// CONCATENATED MODULE: ./pages/About/index.js
var About_jsx = external_react_default.a.createElement;







class About_About extends external_react_["Component"] {
  render() {
    return About_jsx(external_react_default.a.Fragment, null, About_jsx(Layout["a" /* default */], null, About_jsx(About_Whoarewe, null), About_jsx(About_Methodology, null), About_jsx(About_Process, null), About_jsx(About_Helpus, null), About_jsx(About_Company, null)));
  }

}
/* harmony default export */ var pages_About = __webpack_exports__["default"] = (About_About);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Sa42":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Footer/Youtubesvg.js
var __jsx = external_react_default.a.createElement;

/* harmony default export */ var Youtubesvg = (() => __jsx("svg", {
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 30 30",
  width: "30px",
  height: "30px"
}, "    ", __jsx("path", {
  d: "M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 9.3808594 6.2226562 L 10.529297 6.2226562 L 10.988281 8.375 C 11.105281 8.905 11.192047 9.3564687 11.248047 9.7304688 L 11.283203 9.7304688 C 11.322203 9.4624687 11.407969 9.0138125 11.542969 8.3828125 L 12.019531 6.2226562 L 13.167969 6.2226562 L 11.835938 10.970703 L 11.835938 13.248047 L 10.695312 13.248047 L 10.695312 10.970703 L 9.3808594 6.2226562 z M 14.494141 8.015625 C 14.874141 8.015625 15.17725 8.093 15.40625 8.25 C 15.63525 8.406 15.802203 8.6514219 15.908203 8.9824219 C 16.014203 9.3144219 16.068359 9.7565937 16.068359 10.308594 L 16.068359 11.054688 C 16.068359 11.602688 16.015109 12.041047 15.912109 12.373047 C 15.809109 12.705047 15.641156 12.949516 15.410156 13.103516 C 15.179156 13.257516 14.86475 13.332031 14.46875 13.332031 C 14.06175 13.332031 13.741766 13.254656 13.509766 13.097656 C 13.277766 12.941656 13.113625 12.699141 13.015625 12.369141 C 12.917625 12.039141 12.869141 11.601687 12.869141 11.054688 L 12.869141 10.308594 C 12.869141 9.7555937 12.924156 9.3125625 13.035156 8.9765625 C 13.147156 8.6435625 13.323547 8.3971406 13.560547 8.2441406 C 13.797547 8.0901406 14.108141 8.015625 14.494141 8.015625 z M 16.669922 8.1152344 L 17.824219 8.1152344 L 17.824219 11.884766 C 17.824219 12.113766 17.849391 12.277 17.900391 12.375 C 17.951391 12.473 18.034344 12.521484 18.152344 12.521484 C 18.252344 12.521484 18.348406 12.491688 18.441406 12.429688 C 18.533406 12.368688 18.602484 12.290312 18.646484 12.195312 L 18.646484 8.1152344 L 19.802734 8.1152344 L 19.802734 13.25 L 18.896484 13.25 L 18.796875 12.621094 L 18.771484 12.621094 C 18.526484 13.096094 18.158969 13.333984 17.667969 13.333984 C 17.327969 13.333984 17.074109 13.221047 16.912109 12.998047 C 16.750109 12.775047 16.669922 12.426172 16.669922 11.951172 L 16.669922 8.1152344 z M 14.46875 8.8125 C 14.31275 8.8125 14.202672 8.8964063 14.138672 9.0664062 C 14.074672 9.2374062 14.042969 9.507 14.042969 9.875 L 14.042969 11.474609 C 14.042969 11.854609 14.072766 12.127922 14.134766 12.294922 C 14.196766 12.461922 14.308703 12.546875 14.470703 12.546875 C 14.631703 12.545875 14.744594 12.462922 14.808594 12.294922 C 14.872594 12.127922 14.904297 11.853609 14.904297 11.474609 L 14.904297 9.875 C 14.904297 9.506 14.872594 9.2364062 14.808594 9.0664062 C 14.744594 8.8954063 14.63075 8.8125 14.46875 8.8125 z M 8.7773438 14.222656 L 21.222656 14.222656 C 22.200656 14.222656 23 15.022 23 16 L 23 22.222656 C 23 23.200656 22.200656 24 21.222656 24 L 8.7773438 24 C 7.7993437 24 7 23.200656 7 22.222656 L 7 16 C 7 15.022 7.7993437 14.222656 8.7773438 14.222656 z M 15.044922 16 L 15.044922 22.150391 L 15.849609 22.150391 L 15.949219 21.740234 L 15.970703 21.740234 C 16.046703 21.887234 16.158547 22.002891 16.310547 22.087891 C 16.461547 22.171891 16.6285 22.214844 16.8125 22.214844 C 17.1425 22.214844 17.383063 22.063766 17.539062 21.759766 C 17.695062 21.455766 17.773438 20.979984 17.773438 20.333984 L 17.773438 19.648438 L 17.771484 19.648438 C 17.771484 19.163438 17.742594 18.783766 17.683594 18.509766 C 17.624594 18.236766 17.529438 18.039016 17.398438 17.916016 C 17.267437 17.793016 17.084516 17.732422 16.853516 17.732422 C 16.673516 17.732422 16.506562 17.783766 16.351562 17.884766 C 16.195563 17.985766 16.075234 18.118203 15.990234 18.283203 L 15.984375 18.283203 L 15.984375 16 L 15.044922 16 z M 9.2109375 16.220703 L 9.2109375 17.003906 L 10.179688 17.003906 L 10.179688 22.150391 L 11.132812 22.150391 L 11.132812 17.003906 L 12.101562 17.003906 L 12.101562 16.220703 L 9.2109375 16.220703 z M 19.529297 17.734375 C 19.044297 17.734375 18.701953 17.883594 18.501953 18.183594 C 18.301953 18.483594 18.201172 18.958375 18.201172 19.609375 L 18.201172 20.365234 C 18.201172 20.997234 18.298188 21.464625 18.492188 21.765625 C 18.686187 22.066625 19.022906 22.21875 19.503906 22.21875 C 19.904906 22.21875 20.213594 22.119875 20.433594 21.921875 C 20.653594 21.724875 20.763672 21.424437 20.763672 21.023438 C 20.763672 20.957438 20.759859 20.905187 20.755859 20.867188 L 19.914062 20.816406 C 19.910062 21.080406 19.880172 21.269812 19.826172 21.382812 C 19.772172 21.495812 19.670391 21.552734 19.525391 21.552734 C 19.417391 21.552734 19.337156 21.521031 19.285156 21.457031 C 19.233156 21.394031 19.200594 21.291344 19.183594 21.152344 C 19.166594 21.013344 19.158203 20.805344 19.158203 20.527344 L 19.158203 20.306641 L 20.789062 20.306641 L 20.789062 19.566406 C 20.789062 19.109406 20.752688 18.750234 20.679688 18.490234 C 20.605687 18.231234 20.479781 18.041922 20.300781 17.919922 C 20.120781 17.796922 19.864297 17.734375 19.529297 17.734375 z M 11.810547 17.816406 L 11.810547 21.054688 C 11.810547 21.454687 11.878625 21.750453 12.015625 21.939453 C 12.152625 22.127453 12.362391 22.222656 12.650391 22.222656 C 13.065391 22.222656 13.377938 22.021141 13.585938 21.619141 L 13.605469 21.619141 L 13.689453 22.150391 L 14.453125 22.150391 L 14.455078 22.150391 L 14.455078 17.816406 L 13.480469 17.816406 L 13.480469 21.259766 C 13.442469 21.339766 13.384641 21.406031 13.306641 21.457031 C 13.229641 21.509031 13.1475 21.535156 13.0625 21.535156 C 12.9625 21.535156 12.893563 21.495109 12.851562 21.412109 C 12.808563 21.330109 12.787109 21.191047 12.787109 20.998047 L 12.787109 17.816406 L 11.810547 17.816406 z M 19.509766 18.394531 C 19.613766 18.394531 19.690234 18.423422 19.740234 18.482422 C 19.790234 18.541422 19.824797 18.641156 19.841797 18.785156 C 19.860797 18.929156 19.869141 19.141922 19.869141 19.419922 L 19.869141 19.730469 L 19.15625 19.730469 L 19.15625 19.419922 C 19.15625 19.136922 19.164641 18.924156 19.181641 18.785156 C 19.197641 18.646156 19.229297 18.547328 19.279297 18.486328 C 19.329297 18.426328 19.405766 18.394531 19.509766 18.394531 z M 16.414062 18.425781 C 16.514063 18.425781 16.590531 18.464016 16.644531 18.541016 C 16.697531 18.618016 16.736812 18.749594 16.757812 18.933594 C 16.778813 19.117594 16.789063 19.37875 16.789062 19.71875 L 16.789062 20.277344 C 16.789062 20.593344 16.777953 20.841531 16.751953 21.019531 C 16.725953 21.199531 16.681141 21.327344 16.619141 21.402344 C 16.557141 21.477344 16.477047 21.515625 16.373047 21.515625 C 16.292047 21.515625 16.218391 21.494031 16.150391 21.457031 C 16.082391 21.419031 16.026375 21.363109 15.984375 21.287109 L 15.984375 18.828125 C 16.017375 18.711125 16.074297 18.613109 16.154297 18.537109 C 16.234297 18.461109 16.320062 18.425781 16.414062 18.425781 z"
})));
// CONCATENATED MODULE: ./components/Footer/Facebook.js
var Facebook_jsx = external_react_default.a.createElement;

/* harmony default export */ var Facebook = (() => Facebook_jsx("svg", {
  viewBox: "-21 -21 682.66669 682.66669",
  xmlns: "http://www.w3.org/2000/svg"
}, Facebook_jsx("path", {
  d: "m604.671875 0h-569.375c-19.496094.0117188-35.30078125 15.824219-35.296875 35.328125v569.375c.0117188 19.496094 15.824219 35.300781 35.328125 35.296875h306.546875v-247.5h-83.125v-96.875h83.125v-71.292969c0-82.675781 50.472656-127.675781 124.222656-127.675781 35.324219 0 65.679688 2.632812 74.527344 3.808594v86.410156h-50.855469c-40.125 0-47.894531 19.066406-47.894531 47.050781v61.699219h95.9375l-12.5 96.875h-83.4375v247.5h162.796875c19.507813.003906 35.324219-15.804688 35.328125-35.3125 0-.003906 0-.007812 0-.015625v-569.375c-.007812-19.496094-15.824219-35.30078125-35.328125-35.296875zm0 0"
})));
// CONCATENATED MODULE: ./components/Footer/footer.js


var footer_jsx = external_react_default.a.createElement;



const Footer = () => {
  return footer_jsx("div", {
    className: "jsx-1446935878"
  }, footer_jsx("div", {
    className: "jsx-1446935878" + " " + "footer-box"
  }, footer_jsx("div", {
    className: "jsx-1446935878" + " " + "quick-links"
  }, "Quick Links"), footer_jsx("div", {
    className: "jsx-1446935878" + " " + "service-links"
  }, "Services"), footer_jsx("div", {
    className: "jsx-1446935878" + " " + "contact"
  }, "Contact"), footer_jsx("div", {
    className: "jsx-1446935878" + " " + "quick-links-inner"
  }, "Home", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "About", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Success", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Stories", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Insights", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Career", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Contact"), footer_jsx("div", {
    className: "jsx-1446935878" + " " + "service-inner"
  }, "Open Source Implementation", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Scala Programming", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Restful API'S", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Automated Devops Deployment", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Big Data Analytics", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Native Apps Building"), footer_jsx("div", {
    className: "jsx-1446935878" + " " + "service-inner2"
  }, "Full/Mean Stack Development", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Third Party Integrations", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Crypto Currency Development", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Java Programming", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "Us Staffing"), footer_jsx("div", {
    className: "jsx-1446935878" + " " + "contact-inner"
  }, "+91(991)502-1146", footer_jsx("br", {
    className: "jsx-1446935878"
  }), "hr@spineor.com"), footer_jsx("div", {
    className: "jsx-1446935878" + " " + "copyright"
  }, "Copyright2020-Spineor.com"), footer_jsx("div", {
    className: "jsx-1446935878" + " " + "facebook"
  }), footer_jsx("div", {
    className: "jsx-1446935878" + " " + "linkedin"
  }), footer_jsx("div", {
    className: "jsx-1446935878" + " " + "youtube"
  })), footer_jsx(style_default.a, {
    id: "1446935878"
  }, [".footer-box.jsx-1446935878{position:absolute;width:1344px;height:434px;left:0px;top:5415px;background:#000000;}", ".quick-links.jsx-1446935878{position:absolute;width:125px;height:28px;left:94px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}", ".service-links.jsx-1446935878{position:absolute;width:125px;height:28px;left:406px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}", ".contact.jsx-1446935878{position:absolute;width:125px;height:28px;left:1044px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}", ".quick-links-inner.jsx-1446935878{position:absolute;width:129px;height:186px;left:94px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}", ".service-inner.jsx-1446935878{position:absolute;width:258px;height:186px;left:406px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}", ".service-inner2.jsx-1446935878{position:absolute;width:245px;height:155px;left:723px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}", ".contact-inner.jsx-1446935878{position:absolute;width:154px;height:62px;left:1044px;top:147px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}", ".copyright.jsx-1446935878{position:absolute;width:149px;height:14px;left:615px;top:393px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;color:#DCDCDC;}"]));
};

/* harmony default export */ var footer = __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "XEPl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Header = () => {
  return __jsx("div", {
    className: "jsx-2554541966"
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "nav-box"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-2554541966"
  }, __jsx("img", {
    src: "\\images\\spineor-logo.png",
    className: "jsx-2554541966" + " " + "spineor-logo"
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/About"
  }, __jsx("a", {
    className: "jsx-2554541966"
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "about"
  }, "ABOUT"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/Service"
  }, __jsx("a", {
    className: "jsx-2554541966"
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "service"
  }, "SERVICES"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/success"
  }, __jsx("a", {
    className: "jsx-2554541966"
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "success"
  }, "SUCCESS STORIES"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/OurInfa"
  }, __jsx("a", {
    className: "jsx-2554541966"
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "insights"
  }, "INSIGHTS"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-2554541966"
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "career"
  }, "CAREER"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-2554541966"
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "contact"
  }, "CONTACT"))), __jsx("div", {
    className: "jsx-2554541966"
  }, __jsx("button", {
    className: "jsx-2554541966" + " " + "quote-button"
  }, __jsx("a", {
    className: "jsx-2554541966"
  }, "GET A QUOTE")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2554541966"
  }, [".nav-box.jsx-2554541966{position:absolute;width:1344px;height:74px;left:0px;top:0px;position:fixed;background:#FFFFFF;}", ".spineor-logo.jsx-2554541966{position:absolute;width:140px;height:41px;left:19px;top:16px;}", ".about.jsx-2554541966{position:absolute;width:45px;height:16px;left:480px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}", ".service.jsx-2554541966{position:absolute;width:45px;height:16px;left:572px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}", ".success.jsx-2554541966{position:absolute;width:122px;height:16px;left:686px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}", ".insights.jsx-2554541966{position:absolute;width:45px;height:16px;left:852px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}", ".career.jsx-2554541966{position:absolute;width:45px;height:16px;left:961px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}", ".contact.jsx-2554541966{position:absolute;width:45px;height:16px;left:1060px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}", ".quote-button.jsx-2554541966{position:absolute;width:122px;height:40px;left:1158px;top:18px;background:#184A88;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;border-radius:2px;}", "a.jsx-2554541966{color:#FFFFFF;}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

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

    if (false) {}

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
      if (false) {}
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

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
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

/***/ "elyg":
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

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

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

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
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
        if (false) {}

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
            if (false) {}

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

        if (false) {}

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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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

  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
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

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "qOIg":
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

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });