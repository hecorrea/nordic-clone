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

/***/ "./app/client/home.js":
/*!****************************!*\
  !*** ./app/client/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _home_view_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/view/index */ \"./app/home/view/index.js\");\n\n\n\nvar props = window.__INITIAL_PROPS__;\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_home_view_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], props), document.querySelector('#root'));\n\n//# sourceURL=webpack://nordic-clone/./app/client/home.js?");

/***/ }),

/***/ "./app/core/LinkTag.js":
/*!*****************************!*\
  !*** ./app/core/LinkTag.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-side-effect */ \"./node_modules/react-side-effect/lib/index.js\");\n/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar LinkTag = react_side_effect__WEBPACK_IMPORTED_MODULE_1___default()(reducePropsToState, handleStateChangeOnClient, handleStateChangeOnServer)(function (_ref) {\n  var _ref$rel = _ref.rel,\n    rel = _ref$rel === void 0 ? 'stylesheet' : _ref$rel,\n    href = _ref.href;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"link\", {\n    rel: rel,\n    href: href\n  });\n});\nfunction reducePropsToState(propsList) {\n  return propsList.map(function (props) {\n    return props.href;\n  });\n}\nfunction handleStateChangeOnClient(state) {\n  if (state && !document.querySelector(\"link[href=\\\"\".concat(state, \"\\\"]\"))) {\n    var link = document.createElement('link');\n    link.rel = 'stylesheet';\n    link.href = state;\n    document.head.appendChild(link);\n  }\n}\nfunction handleStateChangeOnServer(state) {\n  return state ? \"<link rel=\\\"stylesheet\\\" href=\\\"\".concat(state, \"\\\" />\") : '';\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkTag);\n\n//# sourceURL=webpack://nordic-clone/./app/core/LinkTag.js?");

/***/ }),

/***/ "./app/core/Page.js":
/*!**************************!*\
  !*** ./app/core/Page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _LinkTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkTag */ \"./app/core/LinkTag.js\");\n/* harmony import */ var _ScriptTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScriptTag */ \"./app/core/ScriptTag.js\");\n\n\n\nvar Page = function Page(_ref) {\n  var state = _ref.state,\n    module = _ref.module,\n    children = _ref.children;\n  var serializedProps = JSON.stringify(state).replace(/</g, \"\\\\u003c\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LinkTag__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    href: \"/static/\".concat(module, \".bundle.css\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScriptTag__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, \"\\n          window.__INITIAL_PROPS__ = \".concat(serializedProps, \";\\n        \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScriptTag__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    src: \"/static/\".concat(module, \".bundle.js\"),\n    async: true,\n    defer: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScriptTag__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    src: \"/static/vendor.bundle.js\",\n    async: true,\n    defer: true\n  }), children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n//# sourceURL=webpack://nordic-clone/./app/core/Page.js?");

/***/ }),

/***/ "./app/core/ScriptTag.js":
/*!*******************************!*\
  !*** ./app/core/ScriptTag.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-side-effect */ \"./node_modules/react-side-effect/lib/index.js\");\n/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar ScriptTag = react_side_effect__WEBPACK_IMPORTED_MODULE_1___default()(reducePropsToState, handleStateChangeOnClient, handleStateChangeOnServer)(function (_ref) {\n  var src = _ref.src,\n    children = _ref.children,\n    _ref$async = _ref.async,\n    async = _ref$async === void 0 ? false : _ref$async,\n    _ref$defer = _ref.defer,\n    defer = _ref$defer === void 0 ? false : _ref$defer;\n  if (src) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"script\", {\n      src: src,\n      async: async,\n      defer: defer\n    });\n  } else if (children) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"script\", {\n      dangerouslySetInnerHTML: {\n        __html: children\n      }\n    });\n  } else {\n    return null;\n  }\n});\nfunction reducePropsToState(propsList) {\n  var urls = [];\n  var children = null;\n  propsList.forEach(function (props) {\n    if (props.children) {\n      children = props.children;\n    } else if (props.src) {\n      urls.push(props.src);\n    }\n  });\n  return {\n    urls: urls,\n    children: children\n  };\n}\nfunction handleStateChangeOnClient(_ref2) {\n  var urls = _ref2.urls,\n    children = _ref2.children;\n  if (urls && urls.length > 0) {\n    urls.forEach(function (url) {\n      if (!document.querySelector(\"script[src=\\\"\".concat(url, \"\\\"]\"))) {\n        var script = document.createElement('script');\n        script.src = url;\n        script.async = true;\n        script.defer = true;\n        document.head.appendChild(script);\n      }\n    });\n  } else if (children) {\n    var script = document.createElement('script');\n    script.innerHTML = children;\n    document.head.appendChild(script);\n  }\n}\nfunction handleStateChangeOnServer(_ref3) {\n  var urls = _ref3.urls,\n    children = _ref3.children;\n  var scriptTags = '';\n  if (urls && urls.length > 0) {\n    urls.forEach(function (url) {\n      scriptTags += \"<script src=\\\"\".concat(url, \"\\\" async defer></script>\");\n    });\n  }\n  if (children) {\n    scriptTags += \"<script>\".concat(children, \"</script>\");\n  }\n  return scriptTags;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScriptTag);\n\n//# sourceURL=webpack://nordic-clone/./app/core/ScriptTag.js?");

/***/ }),

/***/ "./app/helper/constans/index.js":
/*!**************************************!*\
  !*** ./app/helper/constans/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MODULE\": () => (/* binding */ MODULE)\n/* harmony export */ });\nvar MODULE = {\n  HOME: 'home'\n};\n\n//# sourceURL=webpack://nordic-clone/./app/helper/constans/index.js?");

/***/ }),

/***/ "./app/home/view/index.js":
/*!********************************!*\
  !*** ./app/home/view/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _core_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Page */ \"./app/core/Page.js\");\n/* harmony import */ var _helper_constans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/constans */ \"./app/helper/constans/index.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.scss */ \"./app/home/styles.scss\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Home = function Home(props) {\n  var name = props.name,\n    email = props.email,\n    site = props.site;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('light'),\n    _useState2 = _slicedToArray(_useState, 2),\n    theme = _useState2[0],\n    setTheme = _useState2[1];\n  var toggleTheme = function toggleTheme() {\n    var newTheme = theme === 'light' ? 'dark' : 'light';\n    setTheme(newTheme);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    state: props,\n    module: _helper_constans__WEBPACK_IMPORTED_MODULE_2__.MODULE.HOME\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card \".concat(theme)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: toggleTheme\n  }, \"Toggle Theme\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Email: \", email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Site: \", site))));\n};\nHome.defaultProps = {\n  name: 'John'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://nordic-clone/./app/home/view/index.js?");

/***/ }),

/***/ "./app/home/styles.scss":
/*!******************************!*\
  !*** ./app/home/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nordic-clone/./app/home/styles.scss?");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack://nordic-clone/./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nfunction _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar React__default = _interopDefault(React);\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  subClass.__proto__ = superClass;\n}\n\nvar canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);\nfunction withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {\n  if (typeof reducePropsToState !== 'function') {\n    throw new Error('Expected reducePropsToState to be a function.');\n  }\n\n  if (typeof handleStateChangeOnClient !== 'function') {\n    throw new Error('Expected handleStateChangeOnClient to be a function.');\n  }\n\n  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {\n    throw new Error('Expected mapStateOnServer to either be undefined or a function.');\n  }\n\n  function getDisplayName(WrappedComponent) {\n    return WrappedComponent.displayName || WrappedComponent.name || 'Component';\n  }\n\n  return function wrap(WrappedComponent) {\n    if (typeof WrappedComponent !== 'function') {\n      throw new Error('Expected WrappedComponent to be a React component.');\n    }\n\n    var mountedInstances = [];\n    var state;\n\n    function emitChange() {\n      state = reducePropsToState(mountedInstances.map(function (instance) {\n        return instance.props;\n      }));\n\n      if (SideEffect.canUseDOM) {\n        handleStateChangeOnClient(state);\n      } else if (mapStateOnServer) {\n        state = mapStateOnServer(state);\n      }\n    }\n\n    var SideEffect =\n    /*#__PURE__*/\n    function (_PureComponent) {\n      _inheritsLoose(SideEffect, _PureComponent);\n\n      function SideEffect() {\n        return _PureComponent.apply(this, arguments) || this;\n      }\n\n      // Try to use displayName of wrapped component\n      // Expose canUseDOM so tests can monkeypatch it\n      SideEffect.peek = function peek() {\n        return state;\n      };\n\n      SideEffect.rewind = function rewind() {\n        if (SideEffect.canUseDOM) {\n          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');\n        }\n\n        var recordedState = state;\n        state = undefined;\n        mountedInstances = [];\n        return recordedState;\n      };\n\n      var _proto = SideEffect.prototype;\n\n      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {\n        mountedInstances.push(this);\n        emitChange();\n      };\n\n      _proto.componentDidUpdate = function componentDidUpdate() {\n        emitChange();\n      };\n\n      _proto.componentWillUnmount = function componentWillUnmount() {\n        var index = mountedInstances.indexOf(this);\n        mountedInstances.splice(index, 1);\n        emitChange();\n      };\n\n      _proto.render = function render() {\n        return React__default.createElement(WrappedComponent, this.props);\n      };\n\n      return SideEffect;\n    }(React.PureComponent);\n\n    _defineProperty(SideEffect, \"displayName\", \"SideEffect(\" + getDisplayName(WrappedComponent) + \")\");\n\n    _defineProperty(SideEffect, \"canUseDOM\", canUseDOM);\n\n    return SideEffect;\n  };\n}\n\nmodule.exports = withSideEffect;\n\n\n//# sourceURL=webpack://nordic-clone/./node_modules/react-side-effect/lib/index.js?");

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler-tracing.development.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/** @license React v0.20.2\n * scheduler-tracing.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\nvar DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.\n\nvar interactionIDCounter = 0;\nvar threadIDCounter = 0; // Set of currently traced interactions.\n// Interactions \"stack\"–\n// Meaning that newly traced interactions are appended to the previously active set.\n// When an interaction goes out of scope, the previous set (if any) is restored.\n\nexports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.\n\nexports.__subscriberRef = null;\n\n{\n  exports.__interactionsRef = {\n    current: new Set()\n  };\n  exports.__subscriberRef = {\n    current: null\n  };\n}\nfunction unstable_clear(callback) {\n\n  var prevInteractions = exports.__interactionsRef.current;\n  exports.__interactionsRef.current = new Set();\n\n  try {\n    return callback();\n  } finally {\n    exports.__interactionsRef.current = prevInteractions;\n  }\n}\nfunction unstable_getCurrent() {\n  {\n    return exports.__interactionsRef.current;\n  }\n}\nfunction unstable_getThreadID() {\n  return ++threadIDCounter;\n}\nfunction unstable_trace(name, timestamp, callback) {\n  var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;\n\n  var interaction = {\n    __count: 1,\n    id: interactionIDCounter++,\n    name: name,\n    timestamp: timestamp\n  };\n  var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.\n  // To do that, clone the current interactions.\n  // The previous set will be restored upon completion.\n\n  var interactions = new Set(prevInteractions);\n  interactions.add(interaction);\n  exports.__interactionsRef.current = interactions;\n  var subscriber = exports.__subscriberRef.current;\n  var returnValue;\n\n  try {\n    if (subscriber !== null) {\n      subscriber.onInteractionTraced(interaction);\n    }\n  } finally {\n    try {\n      if (subscriber !== null) {\n        subscriber.onWorkStarted(interactions, threadID);\n      }\n    } finally {\n      try {\n        returnValue = callback();\n      } finally {\n        exports.__interactionsRef.current = prevInteractions;\n\n        try {\n          if (subscriber !== null) {\n            subscriber.onWorkStopped(interactions, threadID);\n          }\n        } finally {\n          interaction.__count--; // If no async work was scheduled for this interaction,\n          // Notify subscribers that it's completed.\n\n          if (subscriber !== null && interaction.__count === 0) {\n            subscriber.onInteractionScheduledWorkCompleted(interaction);\n          }\n        }\n      }\n    }\n  }\n\n  return returnValue;\n}\nfunction unstable_wrap(callback) {\n  var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;\n\n  var wrappedInteractions = exports.__interactionsRef.current;\n  var subscriber = exports.__subscriberRef.current;\n\n  if (subscriber !== null) {\n    subscriber.onWorkScheduled(wrappedInteractions, threadID);\n  } // Update the pending async work count for the current interactions.\n  // Update after calling subscribers in case of error.\n\n\n  wrappedInteractions.forEach(function (interaction) {\n    interaction.__count++;\n  });\n  var hasRun = false;\n\n  function wrapped() {\n    var prevInteractions = exports.__interactionsRef.current;\n    exports.__interactionsRef.current = wrappedInteractions;\n    subscriber = exports.__subscriberRef.current;\n\n    try {\n      var returnValue;\n\n      try {\n        if (subscriber !== null) {\n          subscriber.onWorkStarted(wrappedInteractions, threadID);\n        }\n      } finally {\n        try {\n          returnValue = callback.apply(undefined, arguments);\n        } finally {\n          exports.__interactionsRef.current = prevInteractions;\n\n          if (subscriber !== null) {\n            subscriber.onWorkStopped(wrappedInteractions, threadID);\n          }\n        }\n      }\n\n      return returnValue;\n    } finally {\n      if (!hasRun) {\n        // We only expect a wrapped function to be executed once,\n        // But in the event that it's executed more than once–\n        // Only decrement the outstanding interaction counts once.\n        hasRun = true; // Update pending async counts for all wrapped interactions.\n        // If this was the last scheduled async work for any of them,\n        // Mark them as completed.\n\n        wrappedInteractions.forEach(function (interaction) {\n          interaction.__count--;\n\n          if (subscriber !== null && interaction.__count === 0) {\n            subscriber.onInteractionScheduledWorkCompleted(interaction);\n          }\n        });\n      }\n    }\n  }\n\n  wrapped.cancel = function cancel() {\n    subscriber = exports.__subscriberRef.current;\n\n    try {\n      if (subscriber !== null) {\n        subscriber.onWorkCanceled(wrappedInteractions, threadID);\n      }\n    } finally {\n      // Update pending async counts for all wrapped interactions.\n      // If this was the last scheduled async work for any of them,\n      // Mark them as completed.\n      wrappedInteractions.forEach(function (interaction) {\n        interaction.__count--;\n\n        if (subscriber && interaction.__count === 0) {\n          subscriber.onInteractionScheduledWorkCompleted(interaction);\n        }\n      });\n    }\n  };\n\n  return wrapped;\n}\n\nvar subscribers = null;\n\n{\n  subscribers = new Set();\n}\n\nfunction unstable_subscribe(subscriber) {\n  {\n    subscribers.add(subscriber);\n\n    if (subscribers.size === 1) {\n      exports.__subscriberRef.current = {\n        onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,\n        onInteractionTraced: onInteractionTraced,\n        onWorkCanceled: onWorkCanceled,\n        onWorkScheduled: onWorkScheduled,\n        onWorkStarted: onWorkStarted,\n        onWorkStopped: onWorkStopped\n      };\n    }\n  }\n}\nfunction unstable_unsubscribe(subscriber) {\n  {\n    subscribers.delete(subscriber);\n\n    if (subscribers.size === 0) {\n      exports.__subscriberRef.current = null;\n    }\n  }\n}\n\nfunction onInteractionTraced(interaction) {\n  var didCatchError = false;\n  var caughtError = null;\n  subscribers.forEach(function (subscriber) {\n    try {\n      subscriber.onInteractionTraced(interaction);\n    } catch (error) {\n      if (!didCatchError) {\n        didCatchError = true;\n        caughtError = error;\n      }\n    }\n  });\n\n  if (didCatchError) {\n    throw caughtError;\n  }\n}\n\nfunction onInteractionScheduledWorkCompleted(interaction) {\n  var didCatchError = false;\n  var caughtError = null;\n  subscribers.forEach(function (subscriber) {\n    try {\n      subscriber.onInteractionScheduledWorkCompleted(interaction);\n    } catch (error) {\n      if (!didCatchError) {\n        didCatchError = true;\n        caughtError = error;\n      }\n    }\n  });\n\n  if (didCatchError) {\n    throw caughtError;\n  }\n}\n\nfunction onWorkScheduled(interactions, threadID) {\n  var didCatchError = false;\n  var caughtError = null;\n  subscribers.forEach(function (subscriber) {\n    try {\n      subscriber.onWorkScheduled(interactions, threadID);\n    } catch (error) {\n      if (!didCatchError) {\n        didCatchError = true;\n        caughtError = error;\n      }\n    }\n  });\n\n  if (didCatchError) {\n    throw caughtError;\n  }\n}\n\nfunction onWorkStarted(interactions, threadID) {\n  var didCatchError = false;\n  var caughtError = null;\n  subscribers.forEach(function (subscriber) {\n    try {\n      subscriber.onWorkStarted(interactions, threadID);\n    } catch (error) {\n      if (!didCatchError) {\n        didCatchError = true;\n        caughtError = error;\n      }\n    }\n  });\n\n  if (didCatchError) {\n    throw caughtError;\n  }\n}\n\nfunction onWorkStopped(interactions, threadID) {\n  var didCatchError = false;\n  var caughtError = null;\n  subscribers.forEach(function (subscriber) {\n    try {\n      subscriber.onWorkStopped(interactions, threadID);\n    } catch (error) {\n      if (!didCatchError) {\n        didCatchError = true;\n        caughtError = error;\n      }\n    }\n  });\n\n  if (didCatchError) {\n    throw caughtError;\n  }\n}\n\nfunction onWorkCanceled(interactions, threadID) {\n  var didCatchError = false;\n  var caughtError = null;\n  subscribers.forEach(function (subscriber) {\n    try {\n      subscriber.onWorkCanceled(interactions, threadID);\n    } catch (error) {\n      if (!didCatchError) {\n        didCatchError = true;\n        caughtError = error;\n      }\n    }\n  });\n\n  if (didCatchError) {\n    throw caughtError;\n  }\n}\n\nexports.unstable_clear = unstable_clear;\nexports.unstable_getCurrent = unstable_getCurrent;\nexports.unstable_getThreadID = unstable_getThreadID;\nexports.unstable_subscribe = unstable_subscribe;\nexports.unstable_trace = unstable_trace;\nexports.unstable_unsubscribe = unstable_unsubscribe;\nexports.unstable_wrap = unstable_wrap;\n  })();\n}\n\n\n//# sourceURL=webpack://nordic-clone/./node_modules/scheduler/cjs/scheduler-tracing.development.js?");

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/** @license React v0.20.2\n * scheduler.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\nvar enableSchedulerDebugging = false;\nvar enableProfiling = false;\n\nvar requestHostCallback;\nvar requestHostTimeout;\nvar cancelHostTimeout;\nvar requestPaint;\nvar hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';\n\nif (hasPerformanceNow) {\n  var localPerformance = performance;\n\n  exports.unstable_now = function () {\n    return localPerformance.now();\n  };\n} else {\n  var localDate = Date;\n  var initialTime = localDate.now();\n\n  exports.unstable_now = function () {\n    return localDate.now() - initialTime;\n  };\n}\n\nif ( // If Scheduler runs in a non-DOM environment, it falls back to a naive\n// implementation using setTimeout.\ntypeof window === 'undefined' || // Check if MessageChannel is supported, too.\ntypeof MessageChannel !== 'function') {\n  // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,\n  // fallback to a naive implementation.\n  var _callback = null;\n  var _timeoutID = null;\n\n  var _flushCallback = function () {\n    if (_callback !== null) {\n      try {\n        var currentTime = exports.unstable_now();\n        var hasRemainingTime = true;\n\n        _callback(hasRemainingTime, currentTime);\n\n        _callback = null;\n      } catch (e) {\n        setTimeout(_flushCallback, 0);\n        throw e;\n      }\n    }\n  };\n\n  requestHostCallback = function (cb) {\n    if (_callback !== null) {\n      // Protect against re-entrancy.\n      setTimeout(requestHostCallback, 0, cb);\n    } else {\n      _callback = cb;\n      setTimeout(_flushCallback, 0);\n    }\n  };\n\n  requestHostTimeout = function (cb, ms) {\n    _timeoutID = setTimeout(cb, ms);\n  };\n\n  cancelHostTimeout = function () {\n    clearTimeout(_timeoutID);\n  };\n\n  exports.unstable_shouldYield = function () {\n    return false;\n  };\n\n  requestPaint = exports.unstable_forceFrameRate = function () {};\n} else {\n  // Capture local references to native APIs, in case a polyfill overrides them.\n  var _setTimeout = window.setTimeout;\n  var _clearTimeout = window.clearTimeout;\n\n  if (typeof console !== 'undefined') {\n    // TODO: Scheduler no longer requires these methods to be polyfilled. But\n    // maybe we want to continue warning if they don't exist, to preserve the\n    // option to rely on it in the future?\n    var requestAnimationFrame = window.requestAnimationFrame;\n    var cancelAnimationFrame = window.cancelAnimationFrame;\n\n    if (typeof requestAnimationFrame !== 'function') {\n      // Using console['error'] to evade Babel and ESLint\n      console['error'](\"This browser doesn't support requestAnimationFrame. \" + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');\n    }\n\n    if (typeof cancelAnimationFrame !== 'function') {\n      // Using console['error'] to evade Babel and ESLint\n      console['error'](\"This browser doesn't support cancelAnimationFrame. \" + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');\n    }\n  }\n\n  var isMessageLoopRunning = false;\n  var scheduledHostCallback = null;\n  var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main\n  // thread, like user events. By default, it yields multiple times per frame.\n  // It does not attempt to align with frame boundaries, since most tasks don't\n  // need to be frame aligned; for those that do, use requestAnimationFrame.\n\n  var yieldInterval = 5;\n  var deadline = 0; // TODO: Make this configurable\n\n  {\n    // `isInputPending` is not available. Since we have no way of knowing if\n    // there's pending input, always yield at the end of the frame.\n    exports.unstable_shouldYield = function () {\n      return exports.unstable_now() >= deadline;\n    }; // Since we yield every frame regardless, `requestPaint` has no effect.\n\n\n    requestPaint = function () {};\n  }\n\n  exports.unstable_forceFrameRate = function (fps) {\n    if (fps < 0 || fps > 125) {\n      // Using console['error'] to evade Babel and ESLint\n      console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');\n      return;\n    }\n\n    if (fps > 0) {\n      yieldInterval = Math.floor(1000 / fps);\n    } else {\n      // reset the framerate\n      yieldInterval = 5;\n    }\n  };\n\n  var performWorkUntilDeadline = function () {\n    if (scheduledHostCallback !== null) {\n      var currentTime = exports.unstable_now(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync\n      // cycle. This means there's always time remaining at the beginning of\n      // the message event.\n\n      deadline = currentTime + yieldInterval;\n      var hasTimeRemaining = true;\n\n      try {\n        var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);\n\n        if (!hasMoreWork) {\n          isMessageLoopRunning = false;\n          scheduledHostCallback = null;\n        } else {\n          // If there's more work, schedule the next message event at the end\n          // of the preceding one.\n          port.postMessage(null);\n        }\n      } catch (error) {\n        // If a scheduler task throws, exit the current browser task so the\n        // error can be observed.\n        port.postMessage(null);\n        throw error;\n      }\n    } else {\n      isMessageLoopRunning = false;\n    } // Yielding to the browser will give it a chance to paint, so we can\n  };\n\n  var channel = new MessageChannel();\n  var port = channel.port2;\n  channel.port1.onmessage = performWorkUntilDeadline;\n\n  requestHostCallback = function (callback) {\n    scheduledHostCallback = callback;\n\n    if (!isMessageLoopRunning) {\n      isMessageLoopRunning = true;\n      port.postMessage(null);\n    }\n  };\n\n  requestHostTimeout = function (callback, ms) {\n    taskTimeoutID = _setTimeout(function () {\n      callback(exports.unstable_now());\n    }, ms);\n  };\n\n  cancelHostTimeout = function () {\n    _clearTimeout(taskTimeoutID);\n\n    taskTimeoutID = -1;\n  };\n}\n\nfunction push(heap, node) {\n  var index = heap.length;\n  heap.push(node);\n  siftUp(heap, node, index);\n}\nfunction peek(heap) {\n  var first = heap[0];\n  return first === undefined ? null : first;\n}\nfunction pop(heap) {\n  var first = heap[0];\n\n  if (first !== undefined) {\n    var last = heap.pop();\n\n    if (last !== first) {\n      heap[0] = last;\n      siftDown(heap, last, 0);\n    }\n\n    return first;\n  } else {\n    return null;\n  }\n}\n\nfunction siftUp(heap, node, i) {\n  var index = i;\n\n  while (true) {\n    var parentIndex = index - 1 >>> 1;\n    var parent = heap[parentIndex];\n\n    if (parent !== undefined && compare(parent, node) > 0) {\n      // The parent is larger. Swap positions.\n      heap[parentIndex] = node;\n      heap[index] = parent;\n      index = parentIndex;\n    } else {\n      // The parent is smaller. Exit.\n      return;\n    }\n  }\n}\n\nfunction siftDown(heap, node, i) {\n  var index = i;\n  var length = heap.length;\n\n  while (index < length) {\n    var leftIndex = (index + 1) * 2 - 1;\n    var left = heap[leftIndex];\n    var rightIndex = leftIndex + 1;\n    var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.\n\n    if (left !== undefined && compare(left, node) < 0) {\n      if (right !== undefined && compare(right, left) < 0) {\n        heap[index] = right;\n        heap[rightIndex] = node;\n        index = rightIndex;\n      } else {\n        heap[index] = left;\n        heap[leftIndex] = node;\n        index = leftIndex;\n      }\n    } else if (right !== undefined && compare(right, node) < 0) {\n      heap[index] = right;\n      heap[rightIndex] = node;\n      index = rightIndex;\n    } else {\n      // Neither child is smaller. Exit.\n      return;\n    }\n  }\n}\n\nfunction compare(a, b) {\n  // Compare sort index first, then task id.\n  var diff = a.sortIndex - b.sortIndex;\n  return diff !== 0 ? diff : a.id - b.id;\n}\n\n// TODO: Use symbols?\nvar ImmediatePriority = 1;\nvar UserBlockingPriority = 2;\nvar NormalPriority = 3;\nvar LowPriority = 4;\nvar IdlePriority = 5;\n\nfunction markTaskErrored(task, ms) {\n}\n\n/* eslint-disable no-var */\n// Math.pow(2, 30) - 1\n// 0b111111111111111111111111111111\n\nvar maxSigned31BitInt = 1073741823; // Times out immediately\n\nvar IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out\n\nvar USER_BLOCKING_PRIORITY_TIMEOUT = 250;\nvar NORMAL_PRIORITY_TIMEOUT = 5000;\nvar LOW_PRIORITY_TIMEOUT = 10000; // Never times out\n\nvar IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap\n\nvar taskQueue = [];\nvar timerQueue = []; // Incrementing id counter. Used to maintain insertion order.\n\nvar taskIdCounter = 1; // Pausing the scheduler is useful for debugging.\nvar currentTask = null;\nvar currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.\n\nvar isPerformingWork = false;\nvar isHostCallbackScheduled = false;\nvar isHostTimeoutScheduled = false;\n\nfunction advanceTimers(currentTime) {\n  // Check for tasks that are no longer delayed and add them to the queue.\n  var timer = peek(timerQueue);\n\n  while (timer !== null) {\n    if (timer.callback === null) {\n      // Timer was cancelled.\n      pop(timerQueue);\n    } else if (timer.startTime <= currentTime) {\n      // Timer fired. Transfer to the task queue.\n      pop(timerQueue);\n      timer.sortIndex = timer.expirationTime;\n      push(taskQueue, timer);\n    } else {\n      // Remaining timers are pending.\n      return;\n    }\n\n    timer = peek(timerQueue);\n  }\n}\n\nfunction handleTimeout(currentTime) {\n  isHostTimeoutScheduled = false;\n  advanceTimers(currentTime);\n\n  if (!isHostCallbackScheduled) {\n    if (peek(taskQueue) !== null) {\n      isHostCallbackScheduled = true;\n      requestHostCallback(flushWork);\n    } else {\n      var firstTimer = peek(timerQueue);\n\n      if (firstTimer !== null) {\n        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);\n      }\n    }\n  }\n}\n\nfunction flushWork(hasTimeRemaining, initialTime) {\n\n\n  isHostCallbackScheduled = false;\n\n  if (isHostTimeoutScheduled) {\n    // We scheduled a timeout but it's no longer needed. Cancel it.\n    isHostTimeoutScheduled = false;\n    cancelHostTimeout();\n  }\n\n  isPerformingWork = true;\n  var previousPriorityLevel = currentPriorityLevel;\n\n  try {\n    if (enableProfiling) {\n      try {\n        return workLoop(hasTimeRemaining, initialTime);\n      } catch (error) {\n        if (currentTask !== null) {\n          var currentTime = exports.unstable_now();\n          markTaskErrored(currentTask, currentTime);\n          currentTask.isQueued = false;\n        }\n\n        throw error;\n      }\n    } else {\n      // No catch in prod code path.\n      return workLoop(hasTimeRemaining, initialTime);\n    }\n  } finally {\n    currentTask = null;\n    currentPriorityLevel = previousPriorityLevel;\n    isPerformingWork = false;\n  }\n}\n\nfunction workLoop(hasTimeRemaining, initialTime) {\n  var currentTime = initialTime;\n  advanceTimers(currentTime);\n  currentTask = peek(taskQueue);\n\n  while (currentTask !== null && !(enableSchedulerDebugging )) {\n    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports.unstable_shouldYield())) {\n      // This currentTask hasn't expired, and we've reached the deadline.\n      break;\n    }\n\n    var callback = currentTask.callback;\n\n    if (typeof callback === 'function') {\n      currentTask.callback = null;\n      currentPriorityLevel = currentTask.priorityLevel;\n      var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;\n\n      var continuationCallback = callback(didUserCallbackTimeout);\n      currentTime = exports.unstable_now();\n\n      if (typeof continuationCallback === 'function') {\n        currentTask.callback = continuationCallback;\n      } else {\n\n        if (currentTask === peek(taskQueue)) {\n          pop(taskQueue);\n        }\n      }\n\n      advanceTimers(currentTime);\n    } else {\n      pop(taskQueue);\n    }\n\n    currentTask = peek(taskQueue);\n  } // Return whether there's additional work\n\n\n  if (currentTask !== null) {\n    return true;\n  } else {\n    var firstTimer = peek(timerQueue);\n\n    if (firstTimer !== null) {\n      requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);\n    }\n\n    return false;\n  }\n}\n\nfunction unstable_runWithPriority(priorityLevel, eventHandler) {\n  switch (priorityLevel) {\n    case ImmediatePriority:\n    case UserBlockingPriority:\n    case NormalPriority:\n    case LowPriority:\n    case IdlePriority:\n      break;\n\n    default:\n      priorityLevel = NormalPriority;\n  }\n\n  var previousPriorityLevel = currentPriorityLevel;\n  currentPriorityLevel = priorityLevel;\n\n  try {\n    return eventHandler();\n  } finally {\n    currentPriorityLevel = previousPriorityLevel;\n  }\n}\n\nfunction unstable_next(eventHandler) {\n  var priorityLevel;\n\n  switch (currentPriorityLevel) {\n    case ImmediatePriority:\n    case UserBlockingPriority:\n    case NormalPriority:\n      // Shift down to normal priority\n      priorityLevel = NormalPriority;\n      break;\n\n    default:\n      // Anything lower than normal priority should remain at the current level.\n      priorityLevel = currentPriorityLevel;\n      break;\n  }\n\n  var previousPriorityLevel = currentPriorityLevel;\n  currentPriorityLevel = priorityLevel;\n\n  try {\n    return eventHandler();\n  } finally {\n    currentPriorityLevel = previousPriorityLevel;\n  }\n}\n\nfunction unstable_wrapCallback(callback) {\n  var parentPriorityLevel = currentPriorityLevel;\n  return function () {\n    // This is a fork of runWithPriority, inlined for performance.\n    var previousPriorityLevel = currentPriorityLevel;\n    currentPriorityLevel = parentPriorityLevel;\n\n    try {\n      return callback.apply(this, arguments);\n    } finally {\n      currentPriorityLevel = previousPriorityLevel;\n    }\n  };\n}\n\nfunction unstable_scheduleCallback(priorityLevel, callback, options) {\n  var currentTime = exports.unstable_now();\n  var startTime;\n\n  if (typeof options === 'object' && options !== null) {\n    var delay = options.delay;\n\n    if (typeof delay === 'number' && delay > 0) {\n      startTime = currentTime + delay;\n    } else {\n      startTime = currentTime;\n    }\n  } else {\n    startTime = currentTime;\n  }\n\n  var timeout;\n\n  switch (priorityLevel) {\n    case ImmediatePriority:\n      timeout = IMMEDIATE_PRIORITY_TIMEOUT;\n      break;\n\n    case UserBlockingPriority:\n      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;\n      break;\n\n    case IdlePriority:\n      timeout = IDLE_PRIORITY_TIMEOUT;\n      break;\n\n    case LowPriority:\n      timeout = LOW_PRIORITY_TIMEOUT;\n      break;\n\n    case NormalPriority:\n    default:\n      timeout = NORMAL_PRIORITY_TIMEOUT;\n      break;\n  }\n\n  var expirationTime = startTime + timeout;\n  var newTask = {\n    id: taskIdCounter++,\n    callback: callback,\n    priorityLevel: priorityLevel,\n    startTime: startTime,\n    expirationTime: expirationTime,\n    sortIndex: -1\n  };\n\n  if (startTime > currentTime) {\n    // This is a delayed task.\n    newTask.sortIndex = startTime;\n    push(timerQueue, newTask);\n\n    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {\n      // All tasks are delayed, and this is the task with the earliest delay.\n      if (isHostTimeoutScheduled) {\n        // Cancel an existing timeout.\n        cancelHostTimeout();\n      } else {\n        isHostTimeoutScheduled = true;\n      } // Schedule a timeout.\n\n\n      requestHostTimeout(handleTimeout, startTime - currentTime);\n    }\n  } else {\n    newTask.sortIndex = expirationTime;\n    push(taskQueue, newTask);\n    // wait until the next time we yield.\n\n\n    if (!isHostCallbackScheduled && !isPerformingWork) {\n      isHostCallbackScheduled = true;\n      requestHostCallback(flushWork);\n    }\n  }\n\n  return newTask;\n}\n\nfunction unstable_pauseExecution() {\n}\n\nfunction unstable_continueExecution() {\n\n  if (!isHostCallbackScheduled && !isPerformingWork) {\n    isHostCallbackScheduled = true;\n    requestHostCallback(flushWork);\n  }\n}\n\nfunction unstable_getFirstCallbackNode() {\n  return peek(taskQueue);\n}\n\nfunction unstable_cancelCallback(task) {\n  // remove from the queue because you can't remove arbitrary nodes from an\n  // array based heap, only the first one.)\n\n\n  task.callback = null;\n}\n\nfunction unstable_getCurrentPriorityLevel() {\n  return currentPriorityLevel;\n}\n\nvar unstable_requestPaint = requestPaint;\nvar unstable_Profiling =  null;\n\nexports.unstable_IdlePriority = IdlePriority;\nexports.unstable_ImmediatePriority = ImmediatePriority;\nexports.unstable_LowPriority = LowPriority;\nexports.unstable_NormalPriority = NormalPriority;\nexports.unstable_Profiling = unstable_Profiling;\nexports.unstable_UserBlockingPriority = UserBlockingPriority;\nexports.unstable_cancelCallback = unstable_cancelCallback;\nexports.unstable_continueExecution = unstable_continueExecution;\nexports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;\nexports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;\nexports.unstable_next = unstable_next;\nexports.unstable_pauseExecution = unstable_pauseExecution;\nexports.unstable_requestPaint = unstable_requestPaint;\nexports.unstable_runWithPriority = unstable_runWithPriority;\nexports.unstable_scheduleCallback = unstable_scheduleCallback;\nexports.unstable_wrapCallback = unstable_wrapCallback;\n  })();\n}\n\n\n//# sourceURL=webpack://nordic-clone/./node_modules/scheduler/cjs/scheduler.development.js?");

/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ \"./node_modules/scheduler/cjs/scheduler.development.js\");\n}\n\n\n//# sourceURL=webpack://nordic-clone/./node_modules/scheduler/index.js?");

/***/ }),

/***/ "./node_modules/scheduler/tracing.js":
/*!*******************************************!*\
  !*** ./node_modules/scheduler/tracing.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/scheduler-tracing.development.js */ \"./node_modules/scheduler/cjs/scheduler-tracing.development.js\");\n}\n\n\n//# sourceURL=webpack://nordic-clone/./node_modules/scheduler/tracing.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"home": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknordic_clone"] = self["webpackChunknordic_clone"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./app/client/home.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;