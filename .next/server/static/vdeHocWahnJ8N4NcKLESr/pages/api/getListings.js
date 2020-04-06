module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Azh/");


/***/ }),

/***/ "Azh/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getListings_getListingFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aPkV");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const resData = await Object(_getListings_getListingFunc__WEBPACK_IMPORTED_MODULE_0__["getListings"])();

    if (!!resData) {
      // res.statusCode = 200;
      // res.setHeader('Content-type', 'application/json');
      const result = {
        status: 200,
        data: resData
      };
      res.status(200).json(result); // res.end(JSON.stringify(result))
    }
  } catch (err) {
    console.log('err', err); // res.statusCode = 400;
    // res.setHeader('Content-type', 'application/json');

    const result = {
      status: 400,
      data: err
    }; // res.end(JSON.stringify(result))

    res.status(400).json(result);
  }
});

/***/ }),

/***/ "aPkV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getListings", function() { return /* binding */ getListings; });

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");

// CONCATENATED MODULE: ./lib/myFirebase.js

var config = {
  apiKey: 'AIzaSyC4hLufiryScLWZSW3YuVespdz0McXW6MQ',
  authDomain: 'rocket-agent-7e2b4.firebaseapp.com',
  databaseURL: 'https://rocket-agent-7e2b4.firebaseio.com',
  projectId: 'rocket-agent-7e2b4',
  storageBucket: 'rocket-agent-7e2b4.appspot.com'
};
let myFirebase;

if (external_firebase_["apps"].length) {
  myFirebase = external_firebase_["app"]();
} else {
  myFirebase = external_firebase_["initializeApp"](config);
}

/* harmony default export */ var lib_myFirebase = (myFirebase.firestore()); // let myFirebase = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
// firebase.initializeApp(config);
// let myFirebase =  firebase.database();
// export default myFirebase.database()
// CONCATENATED MODULE: ./pages/api/getListings/getListingFunc.js

const getListings = async () => {
  try {
    // let previous = false;
    // let w = await createWhereClauses({ appliedFilters });
    let query = lib_myFirebase.collection("listings"); // for (let i of w) {
    // 	query = query.where(...i);
    // }
    // //query = query.where("PropertyType","All");

    query = query.orderBy("LastChangeTimestamp", "desc"); //Matrix_Unique_ID
    // if (fetchPrevious) {
    // 	query = query.endBefore(firstListing);
    // }
    // if (startAfter) {
    // 	query = query.startAfter(lastListing);
    // 	previous = true;
    // }

    return await query.limit(10).get().then(async res => {
      // count = count + 1;
      // var circularObj = {};
      // circularObj.circularRef = res.docs[res.docs.length-1];
      // circularObj.list = [ circularObj, circularObj ];
      // lastListing = res.docs[res.docs.length - 1];
      // if(count%2 === 0 || count === 1){
      // 	if(count !== 2){
      // firstListing = res.docs[0];
      // 	}
      // }
      const data = res.docs.map(doc => {
        return doc.data();
      });
      return data; // dispatch(saveFirstListObj({ data: data[0] }));
      // dispatch(getListingSuccess({ data, previous }));
    });
  } catch (error) {
    console.error("error getListings =>", error);
    return error;
  }
};

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ })

/******/ });