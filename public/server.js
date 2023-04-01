/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get('/user', function (req, res) {\n  res.json({\n    name: 'Hernan Correa',\n    email: 'hernan.correa@mercadolibre.com.co',\n    site: 'MLA'\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://nordic-clone/./api/index.js?");

/***/ }),

/***/ "./app/core/LinkTag.js":
/*!*****************************!*\
  !*** ./app/core/LinkTag.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-side-effect */ \"react-side-effect\");\n/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar LinkTag = react_side_effect__WEBPACK_IMPORTED_MODULE_1___default()(reducePropsToState, handleStateChangeOnClient, handleStateChangeOnServer)(function (_ref) {\n  var _ref$rel = _ref.rel,\n    rel = _ref$rel === void 0 ? 'stylesheet' : _ref$rel,\n    href = _ref.href;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"link\", {\n    rel: rel,\n    href: href\n  });\n});\nfunction reducePropsToState(propsList) {\n  return propsList.map(function (props) {\n    return props.href;\n  });\n}\nfunction handleStateChangeOnClient(state) {\n  if (state && !document.querySelector(\"link[href=\\\"\".concat(state, \"\\\"]\"))) {\n    var link = document.createElement('link');\n    link.rel = 'stylesheet';\n    link.href = state;\n    document.head.appendChild(link);\n  }\n}\nfunction handleStateChangeOnServer(state) {\n  return state ? \"<link rel=\\\"stylesheet\\\" href=\\\"\".concat(state, \"\\\" />\") : '';\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkTag);\n\n//# sourceURL=webpack://nordic-clone/./app/core/LinkTag.js?");

/***/ }),

/***/ "./app/core/Page.js":
/*!**************************!*\
  !*** ./app/core/Page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LinkTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkTag */ \"./app/core/LinkTag.js\");\n/* harmony import */ var _ScriptTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScriptTag */ \"./app/core/ScriptTag.js\");\n\n\n\nvar Page = function Page(_ref) {\n  var state = _ref.state,\n    module = _ref.module,\n    children = _ref.children;\n  var serializedProps = JSON.stringify(state).replace(/</g, \"\\\\u003c\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LinkTag__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    href: \"/static/\".concat(module, \".bundle.css\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ScriptTag__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, \"\\n          window.__INITIAL_PROPS__ = \".concat(serializedProps, \";\\n        \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ScriptTag__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    src: \"/static/\".concat(module, \".bundle.js\"),\n    async: true,\n    defer: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ScriptTag__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    src: \"/static/vendor.bundle.js\",\n    async: true,\n    defer: true\n  }), children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n//# sourceURL=webpack://nordic-clone/./app/core/Page.js?");

/***/ }),

/***/ "./app/core/ScriptTag.js":
/*!*******************************!*\
  !*** ./app/core/ScriptTag.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-side-effect */ \"react-side-effect\");\n/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar ScriptTag = react_side_effect__WEBPACK_IMPORTED_MODULE_1___default()(reducePropsToState, handleStateChangeOnClient, handleStateChangeOnServer)(function (_ref) {\n  var src = _ref.src,\n    children = _ref.children,\n    _ref$async = _ref.async,\n    async = _ref$async === void 0 ? false : _ref$async,\n    _ref$defer = _ref.defer,\n    defer = _ref$defer === void 0 ? false : _ref$defer;\n  if (src) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", {\n      src: src,\n      async: async,\n      defer: defer\n    });\n  } else if (children) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", {\n      dangerouslySetInnerHTML: {\n        __html: children\n      }\n    });\n  } else {\n    return null;\n  }\n});\nfunction reducePropsToState(propsList) {\n  var urls = [];\n  var children = null;\n  propsList.forEach(function (props) {\n    if (props.children) {\n      children = props.children;\n    } else if (props.src) {\n      urls.push(props.src);\n    }\n  });\n  return {\n    urls: urls,\n    children: children\n  };\n}\nfunction handleStateChangeOnClient(_ref2) {\n  var urls = _ref2.urls,\n    children = _ref2.children;\n  if (urls && urls.length > 0) {\n    urls.forEach(function (url) {\n      if (!document.querySelector(\"script[src=\\\"\".concat(url, \"\\\"]\"))) {\n        var script = document.createElement('script');\n        script.src = url;\n        script.async = true;\n        script.defer = true;\n        document.head.appendChild(script);\n      }\n    });\n  } else if (children) {\n    var script = document.createElement('script');\n    script.innerHTML = children;\n    document.head.appendChild(script);\n  }\n}\nfunction handleStateChangeOnServer(_ref3) {\n  var urls = _ref3.urls,\n    children = _ref3.children;\n  var scriptTags = '';\n  if (urls && urls.length > 0) {\n    urls.forEach(function (url) {\n      scriptTags += \"<script src=\\\"\".concat(url, \"\\\" async defer></script>\");\n    });\n  }\n  if (children) {\n    scriptTags += \"<script>\".concat(children, \"</script>\");\n  }\n  return scriptTags;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScriptTag);\n\n//# sourceURL=webpack://nordic-clone/./app/core/ScriptTag.js?");

/***/ }),

/***/ "./app/helper/constans/index.js":
/*!**************************************!*\
  !*** ./app/helper/constans/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MODULE\": () => (/* binding */ MODULE)\n/* harmony export */ });\nvar MODULE = {\n  HOME: 'home'\n};\n\n//# sourceURL=webpack://nordic-clone/./app/helper/constans/index.js?");

/***/ }),

/***/ "./app/home/controller.js":
/*!********************************!*\
  !*** ./app/home/controller.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHomeData\": () => (/* binding */ getHomeData),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_view_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/view/index */ \"./app/home/view/index.js\");\n\n\nvar getHomeData = function getHomeData(req, res, next) {\n  res.locals = {\n    name: 'Hernan Correa',\n    email: 'hernan.correa@mercadolibre.com.co',\n    site: 'MLA'\n  };\n  next();\n};\nvar render = function render(req, res, next) {\n  var _res$locals = res.locals,\n    name = _res$locals.name,\n    email = _res$locals.email,\n    site = _res$locals.site;\n  var renderProps = {\n    name: name,\n    email: email,\n    site: site\n  };\n  var View = function View(props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_home_view_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props);\n  };\n  res.render(View, renderProps, {\n    layout: {\n      title: 'Welcome'\n    }\n  });\n};\n\n//# sourceURL=webpack://nordic-clone/./app/home/controller.js?");

/***/ }),

/***/ "./app/home/index.js":
/*!***************************!*\
  !*** ./app/home/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./app/home/controller.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.use('/', _controller__WEBPACK_IMPORTED_MODULE_1__.getHomeData, _controller__WEBPACK_IMPORTED_MODULE_1__.render);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://nordic-clone/./app/home/index.js?");

/***/ }),

/***/ "./app/home/view/index.js":
/*!********************************!*\
  !*** ./app/home/view/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Page */ \"./app/core/Page.js\");\n/* harmony import */ var _helper_constans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/constans */ \"./app/helper/constans/index.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.scss */ \"./app/home/styles.scss\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Home = function Home(props) {\n  var name = props.name,\n    email = props.email,\n    site = props.site;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('light'),\n    _useState2 = _slicedToArray(_useState, 2),\n    theme = _useState2[0],\n    setTheme = _useState2[1];\n  var toggleTheme = function toggleTheme() {\n    var newTheme = theme === 'light' ? 'dark' : 'light';\n    setTheme(newTheme);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_core_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    state: props,\n    module: _helper_constans__WEBPACK_IMPORTED_MODULE_2__.MODULE.HOME\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card \".concat(theme)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: toggleTheme\n  }, \"Toggle Theme\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Email: \", email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Site: \", site))));\n};\nHome.defaultProps = {\n  name: 'John'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://nordic-clone/./app/home/view/index.js?");

/***/ }),

/***/ "./app/server/index.js":
/*!*****************************!*\
  !*** ./app/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/index */ \"./app/home/index.js\");\n\nconsole.log('Server is running');\nvar express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\nrouter.get('/about', function (req, res) {\n  res.send('About app');\n});\nrouter.use('/home', _home_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://nordic-clone/./app/server/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./api/index.js\");\n/* harmony import */ var _app_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/server */ \"./app/server/index.js\");\n/* harmony import */ var _midlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./midlewares */ \"./midlewares/index.js\");\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar port = 3003;\napp.use('/api', _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.use(_midlewares__WEBPACK_IMPORTED_MODULE_3__.sharedReferences);\napp.use('/', _app_server__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('public'));\napp.use(_midlewares__WEBPACK_IMPORTED_MODULE_3__.errorMidleware);\napp.listen(port, function () {\n  console.log(\"Listening at http://localhost:\".concat(port));\n});\n\n//# sourceURL=webpack://nordic-clone/./index.js?");

/***/ }),

/***/ "./midlewares/errorMiddleware.js":
/*!***************************************!*\
  !*** ./midlewares/errorMiddleware.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorMidleware\": () => (/* binding */ errorMidleware)\n/* harmony export */ });\nvar errorMidleware = function errorMidleware(req, res, next) {\n  res.send('Error: rendering failed');\n};\n\n//# sourceURL=webpack://nordic-clone/./midlewares/errorMiddleware.js?");

/***/ }),

/***/ "./midlewares/index.js":
/*!*****************************!*\
  !*** ./midlewares/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorMidleware\": () => (/* reexport safe */ _errorMiddleware__WEBPACK_IMPORTED_MODULE_1__.errorMidleware),\n/* harmony export */   \"sharedReferences\": () => (/* binding */ sharedReferences)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./midlewares/render.js\");\n/* harmony import */ var _errorMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorMiddleware */ \"./midlewares/errorMiddleware.js\");\n\n\nvar sharedReferences = function sharedReferences(req, res, next) {\n  res.render = (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(req, res, next);\n  next();\n};\n\n//# sourceURL=webpack://nordic-clone/./midlewares/index.js?");

/***/ }),

/***/ "./midlewares/render.js":
/*!******************************!*\
  !*** ./midlewares/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar render = function render(req, res, next) {\n  return function (Component, props, options) {\n    var html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props));\n    var _options$layout$title = options.layout.title,\n      title = _options$layout$title === void 0 ? 'My App' : _options$layout$title;\n    var renderedHtml = \"\\n    <html>\\n      <head>\\n        <title>\".concat(title, \"</title>\\n        <link rel=\\\"icon\\\" href=\\\"/static/img/logo.png\\\"> \\n      </head>\\n      <body>\\n      <div id=\\\"root\\\">\").concat(html, \"</div>\\n      </body>\\n    </html>\\n  \");\n    res.send(renderedHtml);\n  };\n};\n\n//# sourceURL=webpack://nordic-clone/./midlewares/render.js?");

/***/ }),

/***/ "./app/home/styles.scss":
/*!******************************!*\
  !*** ./app/home/styles.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-weight: bold;\\n  font-style: italic;\\n  font-family: fantasy; }\\n\\nbody {\\n  background-color: #ebebeb; }\\n\\n.card {\\n  border-radius: 10px;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\n  margin: 50px auto;\\n  max-width: 500px;\\n  padding: 20px;\\n  transition: all 0.5s ease-in-out;\\n  position: relative;\\n  transform: translate(0px, 200%); }\\n\\n.card.light {\\n  background-color: #fff;\\n  color: #333; }\\n\\n.card.dark {\\n  background-color: #333;\\n  color: #fff; }\\n\\n.card-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.card-header h2 {\\n  margin: 0; }\\n\\n.card-header button {\\n  background-color: transparent;\\n  border: none;\\n  color: inherit;\\n  cursor: pointer;\\n  font-size: 16px; }\\n\\n.card-body p {\\n  margin: 10px 0; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://nordic-clone/./app/home/styles.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://nordic-clone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-side-effect":
/*!************************************!*\
  !*** external "react-side-effect" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react-side-effect");

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;