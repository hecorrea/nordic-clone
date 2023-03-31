/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get('/about', function (req, res) {\n  res.send('About api');\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://nordic-clone/./api/index.js?");

/***/ }),

/***/ "./app/core/Script.js":
/*!****************************!*\
  !*** ./app/core/Script.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var withSideEffect = __webpack_require__(/*! react-side-effect */ \"react-side-effect\");\nvar PropTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\nvar ALLOWED_PLACEMENTS = ['now', 'load'];\nvar Script = function Script() {\n  return null;\n};\nScript.propTypes = {\n  src: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),\n  priority: PropTypes.number,\n  on: PropTypes.string,\n  inline: PropTypes.bool,\n  preload: PropTypes.bool\n};\nfunction reducePropsToState(propsList) {\n  var scripts = {};\n  propsList.forEach(function (props) {\n    var src = props.src,\n      inline = props.inline,\n      preload = props.preload;\n    var priority = props.priority,\n      children = props.children,\n      on = props.on;\n    var sources = [];\n    priority = Number(priority);\n    if (priority < 0 || isNaN(priority)) {\n      // eslint-disable-line no-restricted-globals\n      priority = 100;\n    }\n    if (!on || ALLOWED_PLACEMENTS.indexOf(on) === -1) {\n      on = 'load';\n    }\n    if (src) {\n      if (Array.isArray(src)) {\n        sources = sources.concat(src);\n      } else {\n        sources.push(src);\n      }\n      sources.forEach(function (source) {\n        if (scripts[source]) {\n          if (scripts[source].priority > priority) {\n            scripts[source].priority = priority;\n          }\n        } else {\n          scripts[source] = {\n            src: source,\n            priority: priority,\n            on: on,\n            inline: inline,\n            preload: preload\n          };\n        }\n      });\n    }\n    if (children) {\n      if (typeof children === 'function') {\n        children = children.toString();\n      } else {\n        children = \"function(){\".concat(Array.isArray(children) ? children.join(';') : children, \"}\");\n      }\n      if (sources.length) {\n        var lastSource = sources[sources.length - 1];\n        if (scripts[lastSource].children) {\n          if (Array.isArray(scripts[lastSource].children)) {\n            scripts[lastSource].children.push(children);\n          } else {\n            scripts[lastSource].children = [scripts[lastSource].children];\n            scripts[lastSource].children.push(children);\n          }\n        } else {\n          scripts[lastSource].children = children;\n        }\n      } else {\n        scripts[children] = {\n          src: children,\n          priority: priority,\n          on: on,\n          type: 'function',\n          preload: false\n        };\n      }\n    }\n  });\n  var list = [];\n  var naturalIndex = 0;\n  for (var script in scripts) {\n    if (Object.prototype.hasOwnProperty.call(scripts, script)) {\n      scripts[script].index = naturalIndex;\n      list.push(scripts[script]);\n      naturalIndex += 1;\n    }\n  }\n  list.sort(function (a, b) {\n    var diff = a.priority - b.priority;\n    if (diff !== 0) {\n      return diff;\n    }\n    return a.index - b.index;\n  });\n  return list.map(function (script) {\n    return {\n      src: script.src,\n      on: script.on,\n      type: script.type,\n      inline: script.inline,\n      preload: script.preload,\n      children: script.children\n    };\n  });\n}\nfunction handleStateChangeOnClient() {\n  // Do nothing for now\n  return null;\n}\nfunction mapStateOnServer(scripts) {\n  return scripts;\n}\nmodule.exports = withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer)(Script);\n\n//# sourceURL=webpack://nordic-clone/./app/core/Script.js?");

/***/ }),

/***/ "./app/home/index.js":
/*!***************************!*\
  !*** ./app/home/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./app/home/styles.scss\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar Script = __webpack_require__(/*! ../core/Script */ \"./app/core/Script.js\");\n\nvar Home = function Home(_ref) {\n  var name = _ref.name;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState2 = _slicedToArray(_useState, 2),\n    count = _useState2[0],\n    setCount = _useState2[1];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"123123 webpack-react \", name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"You clicked \", count, \" times\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return setCount(function (prevCount) {\n        return prevCount + 1;\n      });\n    }\n  }, \"Click me\"));\n};\nHome.defaultProps = {\n  name: 'John'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://nordic-clone/./app/home/index.js?");

/***/ }),

/***/ "./app/server/index.js":
/*!*****************************!*\
  !*** ./app/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/index */ \"./app/home/index.js\");\n\n\nconsole.log('Server is running');\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar router = express.Router();\nrouter.get('/about', function (req, res) {\n  res.send('About app');\n});\nrouter.get('/home', function (req, res) {\n  var View = function View(props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_home_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props);\n  };\n  res.render(View, {\n    name: 'Pepito'\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://nordic-clone/./app/server/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./api/index.js\");\n/* harmony import */ var _app_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/server */ \"./app/server/index.js\");\n/* harmony import */ var _midlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./midlewares */ \"./midlewares/index.js\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n\n\nvar port = 3003;\napp.use('/api', _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.use(_midlewares__WEBPACK_IMPORTED_MODULE_3__.sharedReferences);\napp.use('/', _app_server__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('public'));\napp.listen(port, function () {\n  console.log(\"Listening at http://localhost:\".concat(port));\n});\n\n//# sourceURL=webpack://nordic-clone/./index.js?");

/***/ }),

/***/ "./midlewares/index.js":
/*!*****************************!*\
  !*** ./midlewares/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sharedReferences\": () => (/* binding */ sharedReferences)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./midlewares/render.js\");\n\nvar sharedReferences = function sharedReferences(req, res, next) {\n  res.render = (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(req, res, next);\n  next();\n};\n\n//# sourceURL=webpack://nordic-clone/./midlewares/index.js?");

/***/ }),

/***/ "./midlewares/render.js":
/*!******************************!*\
  !*** ./midlewares/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar render = function render(req, res, next) {\n  return function (Component, props) {\n    var html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props));\n    var serializedProps = JSON.stringify(props).replace(/</g, \"\\\\u003c\");\n    var renderedHtml = \"\\n    <html>\\n      <head>\\n        <title>My App</title>\\n        <link rel=\\\"icon\\\" href=\\\"/static/img/logo.jpg\\\"> \\n        <link rel=\\\"stylesheet\\\" href=\\\"/static/home.bundle.css\\\">\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\".concat(html, \"</div>\\n        <script>\\n          window.__INITIAL_PROPS__ = \").concat(serializedProps, \";\\n        </script>\\n        <script src=\\\"/static/home.bundle.js\\\"></script>\\n      </body>\\n    </html>\\n  \");\n    res.send(renderedHtml);\n  };\n};\n\n//# sourceURL=webpack://nordic-clone/./midlewares/render.js?");

/***/ }),

/***/ "./app/home/styles.scss":
/*!******************************!*\
  !*** ./app/home/styles.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #54d0e0; }\\n\\np {\\n  color: rgba(255, 0, 0, 0.959); }\\n\\n.Panel {\\n  color: #2bff00; }\\n\\n.Panel2 {\\n  color: #ff00d4; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://nordic-clone/./app/home/styles.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://nordic-clone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-side-effect":
/*!************************************!*\
  !*** external "react-side-effect" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-side-effect");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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