(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\auth.js"],{

/***/ "./components/User/User.js":
/*!*********************************!*\
  !*** ./components/User/User.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/User/style.js");
var _jsxFileName = "C:\\Users\\vasil.melnik\\Desktop\\Some-features\\next_js\\components\\User\\User.js";



var User = function User(_ref) {
  var name = _ref.name,
      age = _ref.age;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, age), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./components/User/style.js":
/*!**********************************!*\
  !*** ./components/User/style.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\vasil.melnik\\Desktop\\Some-features\\next_js\\components\\User\\style.js";


var Style = function Style() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "\n      .user {\n        border: 1px solid #eee;\n        box-shadow: 0 2px 3px #ccc;\n        padding: 20px;\n        text-align: center;\n      }\n    ");
};

/* harmony default export */ __webpack_exports__["default"] = (Style);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth&absolutePagePath=C%3A%5CUsers%5Cvasil.melnik%5CDesktop%5CSome-features%5Cnext_js%5Cpages%5Cauth%5Cindex.js!./":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth&absolutePagePath=C%3A%5CUsers%5Cvasil.melnik%5CDesktop%5CSome-features%5Cnext_js%5Cpages%5Cauth%5Cindex.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/auth", function() {
      var page = __webpack_require__(/*! ./pages/auth/index.js */ "./pages/auth/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/auth/index.js */ "./pages/auth/index.js", function() {
          if(!next.router.components["/auth"]) return
          var updatedPage = __webpack_require__(/*! ./pages/auth/index.js */ "./pages/auth/index.js")
          next.router.update("/auth", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_User_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/User/User */ "./components/User/User.js");
var _jsxFileName = "C:\\Users\\vasil.melnik\\Desktop\\Some-features\\next_js\\pages\\auth\\index.js";



var AuthPage = function AuthPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "The auth page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_User_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "Pit",
    age: "22",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AuthPage);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fauth&absolutePagePath=C%3A%5CUsers%5Cvasil.melnik%5CDesktop%5CSome-features%5Cnext_js%5Cpages%5Cauth%5Cindex.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fauth&absolutePagePath=C%3A%5CUsers%5Cvasil.melnik%5CDesktop%5CSome-features%5Cnext_js%5Cpages%5Cauth%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth&absolutePagePath=C%3A%5CUsers%5Cvasil.melnik%5CDesktop%5CSome-features%5Cnext_js%5Cpages%5Cauth%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_1aef2d0bbc0d334d831c":
/*!*******************************************!*\
  !*** external "dll_1aef2d0bbc0d334d831c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_1aef2d0bbc0d334d831c;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=auth.js.map