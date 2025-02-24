/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/sidebar/components/SidebarTypography.js":
/*!*******************************************************!*\
  !*** ./admin/sidebar/components/SidebarTypography.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_fbConstants_fbConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/fbConstants/fbConstants */ "./src/fbConstants/fbConstants.js");
/* harmony import */ var _Components_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/range */ "./src/components/range/index.js");




var FB_SidebarTypography = function FB_SidebarTypography(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-blocks") : _ref$label,
    fontFamily = _ref.fontFamily,
    onChangeFontFamily = _ref.onChangeFontFamily,
    fontSize = _ref.fontSize,
    onChangeFontSize = _ref.onChangeFontSize,
    fontSizeUnits = _ref.fontSizeUnits,
    onChangeFontSizeUnit = _ref.onChangeFontSizeUnit,
    fontWeight = _ref.fontWeight,
    onChangeFontWeight = _ref.onChangeFontWeight,
    fontStyle = _ref.fontStyle,
    onChangeFontStyle = _ref.onChangeFontStyle,
    textTransform = _ref.textTransform,
    onChangeTextTransform = _ref.onChangeTextTransform,
    textDecoration = _ref.textDecoration,
    onChangeTextDecoration = _ref.onChangeTextDecoration,
    letterSpacing = _ref.letterSpacing,
    onChangeLetterSpacing = _ref.onChangeLetterSpacing,
    letterSpacingUnits = _ref.letterSpacingUnits,
    onChangeLetterSpacingUnit = _ref.onChangeLetterSpacingUnit,
    lineHeight = _ref.lineHeight,
    onChangeLineHeight = _ref.onChangeLineHeight,
    lineHeightUnits = _ref.lineHeightUnits,
    onChangeLineHeightUnit = _ref.onChangeLineHeightUnit,
    deviceType = _ref.deviceType,
    heading = _ref.heading;
  var handleFontFamilyChange = function handleFontFamilyChange(newFontFamily) {
    onChangeFontFamily(newFontFamily);
  };
  var handleFontSizeChange = function handleFontSizeChange(newFontSize) {
    onChangeFontSize(newFontSize);
  };
  var handleFontSizeUnitChange = function handleFontSizeUnitChange(newFontSizeUnit) {
    onChangeFontSizeUnit(newFontSizeUnit);
  };
  var handleFontWeightChange = function handleFontWeightChange(newFontWeight) {
    onChangeFontWeight(newFontWeight);
  };
  var handleFontStyleChange = function handleFontStyleChange(newFontStyle) {
    onChangeFontStyle(newFontStyle);
  };
  var handleTextTransformChange = function handleTextTransformChange(newTextTransform) {
    onChangeTextTransform(newTextTransform);
  };
  var handleTextDecorationChange = function handleTextDecorationChange(newTextDecoration) {
    onChangeTextDecoration(newTextDecoration);
  };
  var handleLetterSpacingChange = function handleLetterSpacingChange(newLetterSpacing) {
    onChangeLetterSpacing(newLetterSpacing);
  };
  var handleLetterSpacingUnitChange = function handleLetterSpacingUnitChange(newLetterSpacingUnit) {
    onChangeLetterSpacingUnit(newLetterSpacingUnit);
  };
  var handleLineHeightChange = function handleLineHeightChange(newLineHeight) {
    onChangeLineHeight(newLineHeight);
  };
  var handleLineHeightUnitChange = function handleLineHeightUnitChange(newLineHeightUnit) {
    onChangeLineHeightUnit(newLineHeightUnit);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-blocks"),
    options: _src_fbConstants_fbConstants__WEBPACK_IMPORTED_MODULE_2__.FONT_FAMILYS,
    value: fontFamily,
    onChange: handleFontFamilyChange
  }), heading !== 'all' && /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_3__["default"], {
    min: 1,
    max: 200,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-blocks"),
    rangeValue: fontSize,
    onChangeHandler: handleFontSizeChange,
    rangeUnitHandler: handleFontSizeUnitChange,
    deviceType: deviceType,
    units: fontSizeUnits,
    rangeStep: 1,
    resetFallbackValue: ''
  }), /*#__PURE__*/React.createElement("div", {
    className: "fb_global_typo_wrap"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Appearance", "frontis-blocks"),
    options: _src_fbConstants_fbConstants__WEBPACK_IMPORTED_MODULE_2__.FONT_WEIGHT,
    value: fontWeight,
    onChange: handleFontWeightChange
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-blocks"),
    options: _src_fbConstants_fbConstants__WEBPACK_IMPORTED_MODULE_2__.FONT_STYLE,
    value: fontStyle,
    onChange: handleFontStyleChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb_global_typo_wrap"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-blocks"),
    options: _src_fbConstants_fbConstants__WEBPACK_IMPORTED_MODULE_2__.TEXT_TRANSFORM,
    value: textTransform,
    onChange: handleTextTransformChange
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-blocks"),
    options: _src_fbConstants_fbConstants__WEBPACK_IMPORTED_MODULE_2__.TEXT_DECORATION,
    value: textDecoration,
    onChange: handleTextDecorationChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb_global_typo_wrap"
  }, letterSpacingUnits && /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_3__["default"], {
    min: 1,
    max: 100,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-blocks"),
    rangeValue: letterSpacing,
    onChangeHandler: handleLetterSpacingChange,
    rangeUnitHandler: handleLetterSpacingUnitChange,
    deviceType: deviceType,
    units: letterSpacingUnits,
    rangeStep: 1,
    resetFallbackValue: ''
  }), lineHeightUnits && /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_3__["default"], {
    min: 1,
    max: 200,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-blocks"),
    rangeValue: lineHeight,
    onChangeHandler: handleLineHeightChange,
    rangeUnitHandler: handleLineHeightUnitChange,
    deviceType: deviceType,
    units: lineHeightUnits,
    rangeStep: 1,
    resetFallbackValue: ''
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FB_SidebarTypography);

/***/ }),

/***/ "./admin/template-library/fullSiteTypography.js":
/*!******************************************************!*\
  !*** ./admin/template-library/fullSiteTypography.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar_components_SidebarTypography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/components/SidebarTypography */ "./admin/sidebar/components/SidebarTypography.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var TypographyPanel = function TypographyPanel() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('system'),
    _useState2 = _slicedToArray(_useState, 2),
    expandedSection = _useState2[0],
    setExpandedSection = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isTypographyOpen = _useState4[0],
    setIsTypographyOpen = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedItem = _useState6[0],
    setSelectedItem = _useState6[1];
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    activeTypographyItem = _useState8[0],
    setActiveTypographyItem = _useState8[1];

  // Default typography state values
  // Create separate typography states for each element
  var _useState9 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
      Text: {
        fontFamily: '',
        fontSize: '',
        fontSizeUnit: 'px',
        fontSizeUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: 'rem',
          value: 'rem'
        }],
        fontWeight: '',
        fontStyle: '',
        textTransform: '',
        textDecoration: '',
        letterSpacing: '',
        letterSpacingUnit: 'px',
        letterSpacingUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        lineHeight: '',
        lineHeightUnit: 'px',
        lineHeightUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        deviceType: 'desktop'
      },
      Link: {
        fontFamily: '',
        fontSize: '',
        fontSizeUnit: 'px',
        fontSizeUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: 'rem',
          value: 'rem'
        }],
        fontWeight: '',
        fontStyle: '',
        textTransform: '',
        textDecoration: '',
        letterSpacing: '',
        letterSpacingUnit: 'px',
        letterSpacingUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        lineHeight: '',
        lineHeightUnit: 'px',
        lineHeightUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        deviceType: 'desktop'
      },
      Button: {
        fontFamily: '',
        fontSize: '',
        fontSizeUnit: 'px',
        fontSizeUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: 'rem',
          value: 'rem'
        }],
        fontWeight: '',
        fontStyle: '',
        textTransform: '',
        textDecoration: '',
        letterSpacing: '',
        letterSpacingUnit: 'px',
        letterSpacingUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        lineHeight: '',
        lineHeightUnit: 'px',
        lineHeightUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        deviceType: 'desktop'
      },
      H1: {
        fontFamily: '',
        fontSize: '',
        fontSizeUnit: 'px',
        fontSizeUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: 'rem',
          value: 'rem'
        }],
        fontWeight: '',
        fontStyle: '',
        textTransform: '',
        textDecoration: '',
        letterSpacing: '',
        letterSpacingUnit: 'px',
        letterSpacingUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        lineHeight: '',
        lineHeightUnit: 'px',
        lineHeightUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        deviceType: 'desktop'
      },
      H2: {
        fontFamily: '',
        fontSize: '',
        fontSizeUnit: 'px',
        fontSizeUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: 'rem',
          value: 'rem'
        }],
        fontWeight: '',
        fontStyle: '',
        textTransform: '',
        textDecoration: '',
        letterSpacing: '',
        letterSpacingUnit: 'px',
        letterSpacingUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        lineHeight: '',
        lineHeightUnit: 'px',
        lineHeightUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        deviceType: 'desktop'
      },
      H3: {
        fontFamily: '',
        fontSize: '',
        fontSizeUnit: 'px',
        fontSizeUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: 'rem',
          value: 'rem'
        }],
        fontWeight: '',
        fontStyle: '',
        textTransform: '',
        textDecoration: '',
        letterSpacing: '',
        letterSpacingUnit: 'px',
        letterSpacingUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        lineHeight: '',
        lineHeightUnit: 'px',
        lineHeightUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        deviceType: 'desktop'
      },
      H4: {
        fontFamily: '',
        fontSize: '',
        fontSizeUnit: 'px',
        fontSizeUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: 'rem',
          value: 'rem'
        }],
        fontWeight: '',
        fontStyle: '',
        textTransform: '',
        textDecoration: '',
        letterSpacing: '',
        letterSpacingUnit: 'px',
        letterSpacingUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        lineHeight: '',
        lineHeightUnit: 'px',
        lineHeightUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        deviceType: 'desktop'
      },
      H5: {
        fontFamily: '',
        fontSize: '',
        fontSizeUnit: 'px',
        fontSizeUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: 'rem',
          value: 'rem'
        }],
        fontWeight: '',
        fontStyle: '',
        textTransform: '',
        textDecoration: '',
        letterSpacing: '',
        letterSpacingUnit: 'px',
        letterSpacingUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        lineHeight: '',
        lineHeightUnit: 'px',
        lineHeightUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        deviceType: 'desktop'
      },
      H6: {
        fontFamily: '',
        fontSize: '',
        fontSizeUnit: 'px',
        fontSizeUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: 'rem',
          value: 'rem'
        }],
        fontWeight: '',
        fontStyle: '',
        textTransform: '',
        textDecoration: '',
        letterSpacing: '',
        letterSpacingUnit: 'px',
        letterSpacingUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        lineHeight: '',
        lineHeightUnit: 'px',
        lineHeightUnits: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }],
        deviceType: 'desktop'
      }
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    typographyStates = _useState10[0],
    setTypographyStates = _useState10[1];
  var handleSectionClick = function handleSectionClick(section) {
    setExpandedSection(expandedSection === section ? null : section);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var loadSavedSettings = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return wp.apiFetch({
                path: '/wp/v2/settings'
              });
            case 3:
              response = _context.sent;
              // Load settings for each element type
              ['Text', 'Link', 'Button'].concat(headings).forEach(function (elementType) {
                var savedSettings = response["fb_typography_".concat(elementType.toLowerCase())];
                if (savedSettings) {
                  var parsedSettings = JSON.parse(savedSettings);
                  applyTypographyStyles(elementType, parsedSettings);
                }
              });
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error('Error loading typography settings:', _context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      return function loadSavedSettings() {
        return _ref.apply(this, arguments);
      };
    }();
    loadSavedSettings();
  }, []);
  var generateTypographyCSS = function generateTypographyCSS(element, styles) {
    return "\n      ".concat(element, " {\n        ").concat(styles.fontFamily ? "font-family: ".concat(styles.fontFamily, ";") : '', "\n        ").concat(styles.fontSize ? "font-size: ".concat(styles.fontSize).concat(styles.fontSizeUnit, ";") : '', "\n        ").concat(styles.fontWeight ? "font-weight: ".concat(styles.fontWeight, ";") : '', "\n        ").concat(styles.fontStyle ? "font-style: ".concat(styles.fontStyle, ";") : '', "\n        ").concat(styles.textTransform ? "text-transform: ".concat(styles.textTransform, ";") : '', "\n        ").concat(styles.textDecoration ? "text-decoration: ".concat(styles.textDecoration, ";") : '', "\n        ").concat(styles.letterSpacing ? "letter-spacing: ".concat(styles.letterSpacing).concat(styles.letterSpacingUnit, ";") : '', "\n        ").concat(styles.lineHeight ? "line-height: ".concat(styles.lineHeight).concat(styles.lineHeightUnit, ";") : '', "\n      }\n    ");
  };
  var applyTypographyStyles = function applyTypographyStyles(elementType, styles) {
    var selector;

    // Define selectors for different element types
    switch (elementType) {
      case 'Text':
        selector = 'body';
        break;
      case 'Link':
        selector = 'a';
        break;
      case 'Button':
        selector = 'button, .button';
        break;
      case 'H1':
        selector = 'h1';
        break;
      case 'H2':
        selector = 'h2';
        break;
      case 'H3':
        selector = 'h3';
        break;
      case 'H4':
        selector = 'h4';
        break;
      case 'H5':
        selector = 'h5';
        break;
      case 'H6':
        selector = 'h6';
        break;
      default:
        selector = elementType;
    }
    var css = generateTypographyCSS(selector, styles);

    // Create or update style element
    var styleElement = document.getElementById("fb-typography-".concat(elementType));
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = "fb-typography-".concat(elementType);
      document.head.appendChild(styleElement);
    }
    styleElement.textContent = css;
  };
  var handleEditClick = function handleEditClick(item) {
    // If the same item is clicked again, close the panel
    if (activeTypographyItem === item && isTypographyOpen) {
      setIsTypographyOpen(false);
      setActiveTypographyItem(null);
    } else {
      // Open panel for the new item
      setIsTypographyOpen(true);
      setActiveTypographyItem(item);
    }
  };
  var handleTypographyChange = function handleTypographyChange(property, value) {
    if (!activeTypographyItem) return;
    setTypographyStates(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, activeTypographyItem, _objectSpread(_objectSpread({}, prev[activeTypographyItem]), {}, _defineProperty({}, property, value))));
    });

    // Save only the active element's typography settings
    saveTypographySettings(activeTypographyItem, _objectSpread(_objectSpread({}, typographyStates[activeTypographyItem]), {}, _defineProperty({}, property, value)));
  };
  var saveTypographySettings = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(elementType, settings) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return wp.apiFetch({
              path: '/wp/v2/settings',
              method: 'POST',
              data: _defineProperty({}, "fb_typography_".concat(elementType.toLowerCase()), JSON.stringify(settings))
            });
          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return wp.apiFetch({
              path: '/wp/v2/settings',
              method: 'POST',
              data: {
                fb_global_styles: true // This will trigger regeneration of styles
              }
            });
          case 6:
            console.log('Typography settings saved:', response);
            _context2.next = 12;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.error('Error saving typography settings:', _context2.t0);
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return function saveTypographySettings(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var headings = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-typography-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-typography-header"
  }, /*#__PURE__*/React.createElement("h3", null, "Typography")), /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-panel-section"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fb-fsi-panel-header",
    onClick: function onClick() {
      return handleSectionClick('system');
    }
  }, /*#__PURE__*/React.createElement("span", null, "System Font"), /*#__PURE__*/React.createElement("span", {
    className: "dashicons ".concat(expandedSection === 'system' ? 'dashicons-arrow-up-alt2' : 'dashicons-arrow-down-alt2')
  })), expandedSection === 'system' && /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-panel-content"
  }, ['Text', 'Link', 'Button'].map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item,
      className: "fb-font-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-font-preview"
    }, "Ag"), /*#__PURE__*/React.createElement("div", {
      className: "fb-font-details"
    }, /*#__PURE__*/React.createElement("span", null, item), /*#__PURE__*/React.createElement("button", {
      className: "fb-edit-button dashicons dashicons-edit",
      onClick: function onClick() {
        return handleEditClick(item);
      }
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-panel-section"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fb-fsi-panel-header",
    onClick: function onClick() {
      return handleSectionClick('headings');
    }
  }, /*#__PURE__*/React.createElement("span", null, "Headings"), /*#__PURE__*/React.createElement("span", {
    className: "dashicons ".concat(expandedSection === 'headings' ? 'dashicons-arrow-up-alt2' : 'dashicons-arrow-down-alt2')
  })), expandedSection === 'headings' && /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-panel-content"
  }, headings.map(function (heading) {
    return /*#__PURE__*/React.createElement("div", {
      key: heading,
      className: "fb-font-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-font-preview"
    }, "Ag"), /*#__PURE__*/React.createElement("div", {
      className: "fb-font-details"
    }, /*#__PURE__*/React.createElement("span", null, heading), /*#__PURE__*/React.createElement("button", {
      className: "fb-edit-button dashicons dashicons-edit",
      onClick: function onClick() {
        return handleEditClick(heading);
      }
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-panel-section"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fb-fsi-panel-header",
    onClick: function onClick() {
      return handleSectionClick('custom');
    }
  }, /*#__PURE__*/React.createElement("span", null, "Custom"), /*#__PURE__*/React.createElement("span", {
    className: "dashicons ".concat(expandedSection === 'custom' ? 'dashicons-arrow-up-alt2' : 'dashicons-arrow-down-alt2')
  })), expandedSection === 'custom' && /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-panel-content"
  })), isTypographyOpen && activeTypographyItem && /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-typography-popup"
  }, /*#__PURE__*/React.createElement(_sidebar_components_SidebarTypography__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, typographyStates[activeTypographyItem], {
    heading: activeTypographyItem,
    onClose: function onClose() {
      setIsTypographyOpen(false);
      setActiveTypographyItem(null);
    },
    fontFamily: typographyStates[activeTypographyItem].fontFamily,
    onChangeFontFamily: function onChangeFontFamily(value) {
      return handleTypographyChange('fontFamily', value);
    },
    fontSize: typographyStates[activeTypographyItem].fontSize,
    onChangeFontSize: function onChangeFontSize(value) {
      return handleTypographyChange('fontSize', value);
    },
    fontSizeUnits: typographyStates[activeTypographyItem].fontSizeUnits,
    onChangeFontSizeUnit: function onChangeFontSizeUnit(value) {
      return handleTypographyChange('fontSizeUnit', value);
    },
    fontWeight: typographyStates[activeTypographyItem].fontWeight,
    onChangeFontWeight: function onChangeFontWeight(value) {
      return handleTypographyChange('fontWeight', value);
    },
    fontStyle: typographyStates[activeTypographyItem].fontStyle,
    onChangeFontStyle: function onChangeFontStyle(value) {
      return handleTypographyChange('fontStyle', value);
    },
    textTransform: typographyStates[activeTypographyItem].textTransform,
    onChangeTextTransform: function onChangeTextTransform(value) {
      return handleTypographyChange('textTransform', value);
    },
    textDecoration: typographyStates[activeTypographyItem].textDecoration,
    onChangeTextDecoration: function onChangeTextDecoration(value) {
      return handleTypographyChange('textDecoration', value);
    },
    letterSpacing: typographyStates[activeTypographyItem].letterSpacing,
    onChangeLetterSpacing: function onChangeLetterSpacing(value) {
      return handleTypographyChange('letterSpacing', value);
    },
    letterSpacingUnits: typographyStates[activeTypographyItem].letterSpacingUnits,
    onChangeLetterSpacingUnit: function onChangeLetterSpacingUnit(value) {
      return handleTypographyChange('letterSpacingUnit', value);
    },
    lineHeight: typographyStates[activeTypographyItem].lineHeight,
    onChangeLineHeight: function onChangeLineHeight(value) {
      return handleTypographyChange('lineHeight', value);
    },
    lineHeightUnits: typographyStates[activeTypographyItem].lineHeightUnits,
    onChangeLineHeightUnit: function onChangeLineHeightUnit(value) {
      return handleTypographyChange('lineHeightUnit', value);
    },
    deviceType: typographyStates[activeTypographyItem].deviceType
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypographyPanel);

/***/ }),

/***/ "./admin/template-library/fullsiteimport.js":
/*!**************************************************!*\
  !*** ./admin/template-library/fullsiteimport.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullSiteTypography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullSiteTypography */ "./admin/template-library/fullSiteTypography.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sitePreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sitePreview */ "./admin/template-library/sitePreview.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var SiteImportModal = function SiteImportModal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    onImport = _ref.onImport;
  var _window$frontisBlocks = window.frontisBlocksAdmin,
    nonce = _window$frontisBlocks.nonce,
    ajaxUrl = _window$frontisBlocks.ajaxUrl;
  var initialColors = [{
    hex: '#007bff',
    name: 'Primary Color',
    slug: 'fb-global-primary-color'
  }, {
    hex: '#6c757d',
    name: 'Secondary Color',
    slug: 'fb-global-secondary-color'
  }, {
    hex: '#ffc107',
    name: 'Warning Color',
    slug: 'fb-global-warning-color'
  }, {
    hex: '#212529',
    name: 'Dark Color',
    slug: 'fb-global-dark-color'
  }, {
    hex: '#ffffff',
    name: 'Light Color',
    slug: 'fb-global-light-color'
  }];
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialColors),
    _useState2 = _slicedToArray(_useState, 2),
    colors = _useState2[0],
    setColors = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
      headingFont: 'Inter',
      bodyFont: 'Open Sans',
      baseSize: '16px',
      scale: '1.2'
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    typography = _useState4[0],
    setTypography = _useState4[1];
  var handleImport = function handleImport() {
    var selectedBlock = window.wp.data.select('core/block-editor').getSelectedBlock();
    var postId = window.wp.data.select('core/editor').getCurrentPostId();
    if (!postId) {
      window.wp.data.dispatch('core/notices').createErrorNotice('Error: Unable to fetch current post ID.', {
        type: 'snackbar'
      });
      return;
    }

    // Combine color and typography data
    var configData = {
      colors: colors,
      typography: typography
    };

    // Send everything in one request
    window.jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_import_full_site',
        security: nonce,
        config: configData,
        post_id: postId,
        block_id: selectedBlock ? selectedBlock.clientId : ''
      },
      success: function success(response) {
        if (response.success) {
          window.wp.data.dispatch('core/notices').createSuccessNotice(response.data.message || 'Site imported with demo content and global settings!', {
            type: 'snackbar'
          });

          // Redirect after import
          var siteUrl = "".concat(window.location.origin).concat(window.location.pathname.replace(/wp-admin.*/, ''), "home/");
          window.location.href = siteUrl;
        } else {
          window.wp.data.dispatch('core/notices').createErrorNotice("Failed to import site: ".concat(response.data || 'Unknown error occurred.'), {
            type: 'snackbar'
          });
        }
      },
      error: function error() {
        window.wp.data.dispatch('core/notices').createErrorNotice('Error: AJAX request failed. Please try again.', {
          type: 'snackbar'
        });
      }
    });
    onClose();
  };
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-modal-header"
  }, /*#__PURE__*/React.createElement("h2", null, "Site Import Configuration"), /*#__PURE__*/React.createElement("button", {
    className: "fb-fsi-modal-close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-modal-content-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-modal-sidebar-content"
  }, /*#__PURE__*/React.createElement(FullSiteImportColorPicker, {
    colors: colors,
    setColors: setColors
  }), /*#__PURE__*/React.createElement(_fullSiteTypography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    typography: typography,
    setTypography: setTypography
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-modal-main-content"
  }, /*#__PURE__*/React.createElement(_sitePreview__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/React.createElement("div", {
    className: "fb-fsi-modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "button button-secondary",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "button button-primary",
    onClick: handleImport
  }, "Import Site"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteImportModal);
var FullSiteImportColorPicker = function FullSiteImportColorPicker(_ref2) {
  var colors = _ref2.colors,
    setColors = _ref2.setColors;
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    activeTooltip = _useState6[0],
    setActiveTooltip = _useState6[1];

  // Update iframe and main document styles dynamically
  var updateGlobalStyles = function updateGlobalStyles(updatedColors) {
    var iframe = document.querySelector('iframe.fb-preview-frame');
    var injectStyles = function injectStyles(targetDocument) {
      if (targetDocument) {
        var styleTag = targetDocument.getElementById('fb-global-styles');
        if (!styleTag) {
          styleTag = targetDocument.createElement('style');
          styleTag.id = 'fb-global-styles';
        }
        var css = "\n          :root {\n            ".concat(updatedColors.map(function (color) {
          return "--".concat(color.slug, ": ").concat(color.hex, ";");
        }).join('\n'), "\n          }\n          body p, body span, body h1, body h2, body h3, body h4, body h5, body h6 {\n            color: var(--fb-global-primary-color);\n          }\n          body a {\n            color: var(--fb-global-secondary-color);\n          }\n        ");
        styleTag.innerHTML = css;
      }
    };
    if (iframe && iframe.contentDocument) {
      injectStyles(iframe.contentDocument); // Inside iframe (block editor)
    }
  };

  // Apply styles on mount
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    updateGlobalStyles(colors);
  }, [colors]);

  // Handle color change
  var handleColorChange = function handleColorChange(newColor, index) {
    var updatedColors = _toConsumableArray(colors);
    updatedColors[index].hex = newColor;
    setColors(updatedColors);

    // Update styles live
    updateGlobalStyles(updatedColors);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-global-color-section"
  }, /*#__PURE__*/React.createElement("h3", null, "Global Colors"), /*#__PURE__*/React.createElement("div", {
    className: "fb-color-grid",
    style: {
      display: 'flex',
      gap: '20px'
    }
  }, colors.map(function (color, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "fb-color-item",
      onMouseEnter: function onMouseEnter() {
        return setActiveTooltip(index);
      },
      onMouseLeave: function onMouseLeave() {
        return setActiveTooltip(null);
      },
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      renderToggle: function renderToggle(_ref3) {
        var onToggle = _ref3.onToggle;
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-color-circle",
          style: {
            backgroundColor: color.hex,
            border: color.hex === '#ffffff' ? '1px solid #ddd' : 'none',
            transition: 'background-color 0.3s ease'
          },
          onClick: onToggle
        });
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-color-picker-content",
          style: {
            padding: '10px'
          }
        }, /*#__PURE__*/React.createElement("h4", null, color.name), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
          color: color.hex,
          onChangeComplete: function onChangeComplete(newColor) {
            return handleColorChange(newColor.hex, index);
          },
          disableAlpha: true
        }));
      }
    }), activeTooltip === index && /*#__PURE__*/React.createElement("div", {
      className: "fb-color-tooltip"
    }, color.name));
  })));
};

/***/ }),

/***/ "./admin/template-library/index.js":
/*!*****************************************!*\
  !*** ./admin/template-library/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates */ "./admin/template-library/templates.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./admin/template-library/style.scss");




document.addEventListener('DOMContentLoaded', function () {
  console.log("Hey there i am here");
  var buttonDiv = document.createElement('div');
  buttonDiv.classList.add('fb-template-library-button-wrapper');
  var root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(buttonDiv);
  root.render(/*#__PURE__*/React.createElement(_templates__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.subscribe)(function () {
    var toplbar = document.querySelector('.edit-post-header-toolbar');
    if (toplbar) {
      toplbar.appendChild(buttonDiv);
    }
  });
});

/***/ }),

/***/ "./admin/template-library/sitePreview.js":
/*!***********************************************!*\
  !*** ./admin/template-library/sitePreview.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var SitePreview = function SitePreview() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    previewUrl = _useState2[0],
    setPreviewUrl = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var siteUrl = window.location.origin + window.location.pathname.replace(/wp-admin.*/, '') + 'home/?hide_admin_bar=true&preview=true';
    setPreviewUrl(siteUrl);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-site-preview-container"
  }, isLoading && /*#__PURE__*/React.createElement("div", {
    className: "fb-preview-loader"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-loader-spinner"
  }), /*#__PURE__*/React.createElement("span", null, "Loading preview...")), /*#__PURE__*/React.createElement("iframe", {
    src: previewUrl,
    className: "fb-preview-frame",
    title: "Site Preview",
    onLoad: function onLoad() {
      return setIsLoading(false);
    },
    scrolling: "yes"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SitePreview);

/***/ }),

/***/ "./admin/template-library/template-content.js":
/*!****************************************************!*\
  !*** ./admin/template-library/template-content.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/esm/ClipLoader.js");
/* harmony import */ var _fullsiteimport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullsiteimport */ "./admin/template-library/fullsiteimport.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * WordPress dependencies
 */





var TemplateCard = function TemplateCard(_ref) {
  var imageUrl = _ref.imageUrl;
  var _window$frontisBlocks = window.frontisBlocksAdmin,
    nonce = _window$frontisBlocks.nonce,
    ajaxUrl = _window$frontisBlocks.ajaxUrl;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isModalOpen = _useState4[0],
    setIsModalOpen = _useState4[1];

  //Demo import for blocks
  // const handleDemoDataImport = useCallback(() => {
  //   const selectedBlock = window.wp.data
  //     .select('core/block-editor')
  //     .getSelectedBlock();

  //   if (!selectedBlock || !selectedBlock.clientId) {
  //     toast.warn('Please select a block first!');
  //     return;
  //   }

  //   const blockId = selectedBlock.clientId;
  //   setIsLoading(true);

  //   window.jQuery.ajax({
  //     url: ajaxUrl,
  //     type: 'POST',
  //     data: {
  //       action: 'fb_import_demo_data',
  //       security: nonce,
  //       block_id: blockId
  //     },
  //     success: function (response) {
  //       setIsLoading(false);

  //       if (response.success) {
  //         const { replaceBlocks } = wp.data.dispatch('core/block-editor');
  //         const blocks = wp.blocks.parse(response.data.content);
  //         replaceBlocks(blockId, blocks);
  //         toast.success(response.data.message || 'Demo data imported successfully!');
  //       } else {
  //         toast.error('Failed to import demo data: ' + response.data);
  //       }
  //     },
  //     error: function (xhr, status, error) {
  //       setIsLoading(false);
  //       toast.error('Failed to process request. Please try again.');
  //     }
  //   });
  // }, [ajaxUrl, nonce]);

  // demo import for pages
  // const handleDemoDataImport = useCallback(() => {
  //   const selectedBlock = window.wp.data
  //     .select('core/block-editor')
  //     .getSelectedBlock();

  //   const postId = window.wp.data.select('core/editor').getCurrentPostId(); // Get current post ID

  //   setIsLoading(true);

  //   window.jQuery.ajax({
  //     url: ajaxUrl,
  //     type: 'POST',
  //     data: {
  //       action: 'fb_import_demo_data',
  //       security: nonce,
  //       block_id: selectedBlock ? selectedBlock.clientId : '',
  //       post_id: postId  // Send post ID explicitly
  //     },
  //     success: function (response) {
  //       setIsLoading(false);

  //       if (response.success) {
  //         const { replaceBlocks } = wp.data.dispatch('core/block-editor');
  //         const { editPost } = wp.data.dispatch('core/editor');

  //         if (selectedBlock) {
  //           // Update selected block
  //           const blocks = wp.blocks.parse(response.data.content);
  //           replaceBlocks(selectedBlock.clientId, blocks);
  //         } else {
  //           // Update full page content
  //           editPost({ content: response.data.content });
  //         }

  //         toast.success(response.data.message || 'Demo data imported successfully!');
  //       } else {
  //         toast.error('Failed to import demo data: ' + response.data);
  //       }
  //     },
  //     error: function () {
  //       setIsLoading(false);
  //       toast.error('Failed to process request. Please try again.');
  //     }
  //   });
  // }, [ajaxUrl, nonce]);

  //demo import full site

  // const handleDemoDataImport = useCallback(() => {
  // const selectedBlock = window.wp.data
  //   .select('core/block-editor')
  //   .getSelectedBlock();

  // const postId = window.wp.data.select('core/editor').getCurrentPostId(); // Get current post ID

  //   setIsLoading(true);

  //   window.jQuery.ajax({
  //     url: ajaxUrl,
  //     type: 'POST',
  //     data: {
  //       action: 'fb_import_demo_data',
  //       security: nonce,
  //       block_id: selectedBlock ? selectedBlock.clientId : '',
  //       post_id: postId  // Send post ID explicitly
  //     },
  //     success: function (response) {
  //       setIsLoading(false);

  //       if (response.success) {
  //         const { replaceBlocks } = wp.data.dispatch('core/block-editor');
  //         const { editPost } = wp.data.dispatch('core/editor');

  //         if (selectedBlock) {
  //           // Update selected block
  //           const blocks = wp.blocks.parse(response.data.content);
  //           replaceBlocks(selectedBlock.clientId, blocks);
  //         } else {
  //           // Update full page content
  //           editPost({ content: response.data.content });
  //         }

  //         toast.success(response.data.message || 'Demo data imported successfully!');
  //       } else {
  //         toast.error('Failed to import demo data: ' + response.data);
  //       }
  //     },
  //     error: function () {
  //       setIsLoading(false);
  //       toast.error('Failed to process request. Please try again.');
  //     }
  //   });
  // }, [ajaxUrl, nonce]); 

  var handleFullSiteImport = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setIsModalOpen(true);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-card-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    alt: "Template preview"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-card-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-import ".concat(isLoading ? 'disabled' : ''),
    onClick: !isLoading ? handleFullSiteImport : null
  }, /*#__PURE__*/React.createElement("span", null, isLoading ? 'Importing...' : 'Import'), isLoading ? /*#__PURE__*/React.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "#fff",
    size: 18
  }) : /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9C3 12.3137 5.68629 15 9 15C12.3137 15 15 12.3137 15 9",
    stroke: "white",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 3V10.5M9 10.5L11.25 8.25M9 10.5L6.75 8.25",
    stroke: "white",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-save"
  }, /*#__PURE__*/React.createElement("div", {
    className: "save-wrapper"
  }, /*#__PURE__*/React.createElement("span", null, "Save library"), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.671 5.25C14.8426 4.27142 14.0895 3.375 13.096 3.375H4.90317C3.90968 3.375 3.15667 4.27142 3.32814 5.25",
    stroke: "#555E72",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.1249 3.375C13.1462 3.18069 13.1569 3.08351 13.157 3.00326C13.1587 2.23554 12.5804 1.59048 11.8171 1.50857C11.7373 1.5 11.6395 1.5 11.4441 1.5H6.55574C6.36026 1.5 6.26251 1.5 6.18271 1.50857C5.41938 1.59048 4.8411 2.23554 4.84278 3.00326C4.84295 3.08351 4.85359 3.18068 4.87487 3.375",
    stroke: "#555E72",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.25 13.5H6.75",
    stroke: "#555E72",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.78763 10.3448C1.45311 7.97205 1.28585 6.78574 1.99674 6.01787C2.70763 5.25 3.97319 5.25 6.50429 5.25H11.4957C14.0268 5.25 15.2923 5.25 16.0033 6.01787C16.7141 6.78574 16.5469 7.97205 16.2124 10.3448L15.8951 12.5947C15.6328 14.4554 15.5017 15.3857 14.8288 15.9429C14.1559 16.5 13.1634 16.5 11.1785 16.5H6.82152C4.83661 16.5 3.84415 16.5 3.17126 15.9429C2.49836 15.3857 2.3672 14.4554 2.10486 12.5947L1.78763 10.3448Z",
    stroke: "#555E72",
    strokeWidth: "1.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "favourite-wrapper"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 4.12547L8.5947 4.51554C8.59725 4.51815 8.5998 4.52073 8.60235 4.52329L9 4.12547ZM10.1024 6.02275C10.322 6.24238 10.6782 6.24231 10.8978 6.0226C11.1175 5.80289 11.1174 5.44673 10.8976 5.2271L10.1024 6.02275ZM7.06954 13.7414C5.93279 12.8453 4.6898 11.9702 3.70372 10.8598C2.73692 9.77114 2.0625 8.50087 2.0625 6.85282H0.9375C0.9375 8.85194 1.77038 10.3771 2.86254 11.6068C3.93542 12.8149 5.30308 13.7814 6.37306 14.6249L7.06954 13.7414ZM2.0625 6.85282C2.0625 5.23967 2.97403 3.88688 4.21827 3.31814C5.42705 2.7656 7.05125 2.91193 8.5947 4.51554L9.4053 3.73539C7.57387 1.83263 5.44807 1.51904 3.75057 2.29496C2.08853 3.05468 0.9375 4.81877 0.9375 6.85282H2.0625ZM6.37306 14.6249C6.75724 14.9278 7.16966 15.2507 7.5876 15.4949C8.00543 15.739 8.4822 15.9375 9 15.9375V14.8125C8.7678 14.8125 8.49458 14.722 8.1552 14.5236C7.81598 14.3254 7.46406 14.0524 7.06954 13.7414L6.37306 14.6249ZM11.6269 14.6249C12.6969 13.7814 14.0646 12.8149 15.1375 11.6068C16.2296 10.3771 17.0625 8.85194 17.0625 6.85282H15.9375C15.9375 8.50087 15.2631 9.77114 14.2963 10.8598C13.3102 11.9702 12.0672 12.8453 10.9305 13.7414L11.6269 14.6249ZM17.0625 6.85282C17.0625 4.81877 15.9115 3.05468 14.2494 2.29496C12.5519 1.51904 10.4261 1.83263 8.5947 3.73539L9.4053 4.51554C10.9487 2.91193 12.5729 2.7656 13.7817 3.31814C15.026 3.88688 15.9375 5.23967 15.9375 6.85282H17.0625ZM10.9305 13.7414C10.5359 14.0524 10.184 14.3254 9.8448 14.5236C9.50543 14.722 9.2322 14.8125 9 14.8125V15.9375C9.5178 15.9375 9.99457 15.739 10.4124 15.4949C10.8304 15.2507 11.2427 14.9278 11.6269 14.6249L10.9305 13.7414ZM8.60235 4.52329L10.1024 6.02275L10.8976 5.2271L9.39765 3.72765L8.60235 4.52329Z",
    fill: "#0B0C0E"
  })))))), /*#__PURE__*/React.createElement(_fullsiteimport__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isOpen: isModalOpen,
    onClose: function onClose() {
      return setIsModalOpen(false);
    }
  }), /*#__PURE__*/React.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false
  }));
};
var TemplateLibrary = function TemplateLibrary(_ref2) {
  var activeTab = _ref2.activeTab,
    activeCategory = _ref2.activeCategory,
    data = _ref2.data;
  var schema = (data === null || data === void 0 ? void 0 : data.$schema) || {};
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    filteredTemplates = _useState6[0],
    setFilteredTemplates = _useState6[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (activeTab && activeCategory) {
      var _tabData$categories;
      var tabData = schema[activeTab];
      var selectedCategory = tabData === null || tabData === void 0 || (_tabData$categories = tabData.categories) === null || _tabData$categories === void 0 ? void 0 : _tabData$categories.find(function (category) {
        return category.id === activeCategory;
      });
      if (selectedCategory && selectedCategory.items) {
        setFilteredTemplates(selectedCategory.items);
      } else {
        setFilteredTemplates([]);
      }
    }
  }, [activeTab, activeCategory]);
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-store-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-cards"
  }, filteredTemplates.map(function (template) {
    return /*#__PURE__*/React.createElement(TemplateCard, {
      key: template.id,
      imageUrl: template.image
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateLibrary);

/***/ }),

/***/ "./admin/template-library/template-header.js":
/*!***************************************************!*\
  !*** ./admin/template-library/template-header.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.json */ "./admin/template-library/data.json");
/**
 * WordPress dependencies
 */



var TemplateLogo = function TemplateLogo() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "102",
    height: "40",
    viewBox: "0 0 102 40",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M29.5873 19.9924L33.6034 22.3188C34.1805 22.6536 34.6597 23.135 34.9929 23.7148C35.326 24.2946 35.5014 24.9522 35.5014 25.6217V28.0855C35.5014 28.7549 35.326 29.4126 34.9929 29.9924C34.6597 30.5721 34.1805 31.0536 33.6034 31.3883L29.5873 33.7148L23.6504 37.1549L19.6266 39.489C19.0496 39.8238 18.395 40 17.7286 40C17.0623 40 16.4077 39.8238 15.8306 39.489L11.8145 37.1549V30.2899L17.7286 33.7224L23.6504 30.2899L29.5645 26.865L23.6504 23.4325L17.7286 20L23.6504 16.5599L29.5645 13.135L23.6504 9.70248L17.7286 6.27758L11.8145 2.84506L15.8306 0.510957C16.4077 0.176217 17.0623 0 17.7286 0C18.395 0 19.0496 0.176217 19.6266 0.510957L23.6428 2.84506L29.5493 6.27758L33.5655 8.61168C34.1425 8.94641 34.6217 9.42786 34.9549 10.0076C35.2881 10.5874 35.4635 11.2451 35.4635 11.9145V14.3707C35.4635 15.0402 35.2881 15.6978 34.9549 16.2776C34.6217 16.8573 34.1425 17.3388 33.5655 17.6735L29.5873 19.9924Z",
    fill: "#399CFF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.8207 9.71249L5.91417 13.1298V33.7248L1.90557 31.3984C1.32711 31.0646 0.84641 30.5835 0.511871 30.0037C0.177332 29.4239 0.00078542 28.7657 0 28.0955V11.9017C1.69272e-05 11.2322 0.175414 10.5746 0.508581 9.99479C0.841749 9.41502 1.32095 8.93357 1.898 8.59884L4.00857 7.37839C4.58564 7.04365 5.24023 6.86743 5.90657 6.86743C6.57291 6.86743 7.2275 7.04365 7.80457 7.37839L11.8207 9.71249Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.6466 16.5723L17.7249 20.0048L13.7087 22.3313C13.1316 22.666 12.477 22.8423 11.8107 22.8423C11.1444 22.8423 10.4898 22.666 9.91269 22.3313L5.88135 20.0048L11.7955 16.5799L15.8193 14.2458C16.3963 13.9111 17.0509 13.7349 17.7173 13.7349C18.3836 13.7349 19.0382 13.9111 19.6153 14.2458L23.6466 16.5723Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M97.3639 36.3041C96.4334 36.3041 95.6304 36.1706 94.9547 35.9035C94.2901 35.6254 93.7862 35.2582 93.4428 34.8021C93.0994 34.3459 92.9277 33.8564 92.9277 33.3335C92.9277 32.9552 93.0219 32.6659 93.2102 32.4656C93.4096 32.2543 93.7031 32.143 94.0908 32.1319C94.0908 33.1221 94.3732 33.8731 94.9381 34.3849C95.5141 34.8966 96.3393 35.1525 97.4137 35.1525C98.4217 35.1525 99.2026 34.9745 99.7564 34.6185C100.321 34.2513 100.604 33.734 100.604 33.0664C100.604 32.6548 100.504 32.3155 100.305 32.0484C100.105 31.7703 99.7619 31.5366 99.2746 31.3475C98.7872 31.1472 98.1005 30.9525 97.2143 30.7634C95.7412 30.463 94.6889 30.0569 94.0575 29.5451C93.4373 29.0222 93.1271 28.3101 93.1271 27.409C93.1271 26.7859 93.2988 26.2407 93.6422 25.7735C93.9855 25.3062 94.4729 24.9501 95.1043 24.7054C95.7467 24.4495 96.4888 24.3215 97.3306 24.3215C98.106 24.3215 98.8094 24.4384 99.4407 24.672C100.083 24.9056 100.582 25.2339 100.936 25.6566C101.302 26.0794 101.484 26.5578 101.484 27.0919C101.484 27.3923 101.39 27.637 101.202 27.8262C101.025 28.0042 100.753 28.0988 100.388 28.1099C100.31 27.1976 100.011 26.53 99.4906 26.1072C98.9811 25.6733 98.25 25.4564 97.2974 25.4564C96.3891 25.4564 95.6858 25.6233 95.1873 25.957C94.7 26.2908 94.4563 26.7581 94.4563 27.3589C94.4563 27.7705 94.5449 28.1099 94.7221 28.3769C94.9104 28.6439 95.2206 28.872 95.6526 29.0611C96.0845 29.2503 96.6882 29.4283 97.4636 29.5952C98.5823 29.8288 99.4629 30.0958 100.105 30.3962C100.759 30.6966 101.224 31.0582 101.501 31.481C101.789 31.9038 101.933 32.4323 101.933 33.0664C101.933 34.0678 101.518 34.8577 100.687 35.4362C99.8672 36.0148 98.7595 36.3041 97.3639 36.3041Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M83.2627 25.4897C83.2627 25.1226 83.379 24.8389 83.6116 24.6386C83.8553 24.4272 84.182 24.3215 84.5919 24.3215V30.196L90.839 24.3215C91.1824 24.6331 91.3541 24.9001 91.3541 25.1226C91.3541 25.3785 91.2101 25.6399 90.9221 25.907L86.8016 29.7954L91.9855 35.9703C91.8858 36.0704 91.7639 36.1483 91.6199 36.2039C91.487 36.2707 91.3596 36.3041 91.2378 36.3041C90.8501 36.3041 90.54 36.165 90.3074 35.8868L85.8546 30.6299L84.5919 31.8148V35.1692C84.5919 35.9258 84.1488 36.3041 83.2627 36.3041V25.4897Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M76.5111 36.3041C75.5917 36.3041 74.7721 36.1372 74.0521 35.8034C73.3432 35.4585 72.7894 34.9801 72.3906 34.3682C71.9919 33.7562 71.7925 33.0609 71.7925 32.2821V28.3101C71.7925 27.5313 71.9919 26.8415 72.3906 26.2407C72.7894 25.6399 73.3432 25.1727 74.0521 24.8389C74.761 24.494 75.5696 24.3215 76.4779 24.3215C77.3861 24.3215 78.1947 24.4717 78.9036 24.7721C79.6125 25.0614 80.1663 25.4675 80.5651 25.9904C80.9638 26.5133 81.1632 27.1086 81.1632 27.7761C81.1632 28.0765 81.0635 28.3157 80.8642 28.4937C80.6648 28.6717 80.3934 28.7607 80.05 28.7607L79.8507 28.7441C79.8728 28.6328 79.8839 28.4381 79.8839 28.1599C79.8839 27.6482 79.7399 27.192 79.4519 26.7915C79.1639 26.3798 78.7596 26.0627 78.239 25.8402C77.7295 25.6177 77.1424 25.5064 76.4779 25.5064C75.8243 25.5064 75.2428 25.6288 74.7333 25.8736C74.2238 26.1072 73.825 26.4354 73.537 26.8582C73.2601 27.281 73.1217 27.765 73.1217 28.3101V32.2821C73.1217 32.8272 73.2657 33.3168 73.5536 33.7507C73.8416 34.1846 74.2404 34.5239 74.7499 34.7687C75.2705 35.0023 75.8576 35.1192 76.5111 35.1192C77.1867 35.1192 77.7849 35.0079 78.3055 34.7854C78.8261 34.5629 79.2304 34.2513 79.5184 33.8508C79.8174 33.4392 79.967 32.9719 79.967 32.449C79.967 32.2598 79.9559 32.0651 79.9337 31.8649L80.1165 31.8482C80.4599 31.8482 80.7312 31.9483 80.9306 32.1486C81.1411 32.3488 81.2463 32.6158 81.2463 32.9496C81.2463 33.5949 81.0469 34.1735 80.6482 34.6853C80.2494 35.197 79.69 35.5976 78.9701 35.8868C78.2501 36.165 77.4304 36.3041 76.5111 36.3041Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M65.1097 36.3041C64.1904 36.3041 63.3707 36.1205 62.6507 35.7533C61.9418 35.3862 61.3825 34.8855 60.9726 34.2513C60.5739 33.606 60.3745 32.8884 60.3745 32.0985V28.4937C60.3745 27.7038 60.5739 26.9917 60.9726 26.3576C61.3714 25.7234 61.9252 25.2283 62.6341 24.8723C63.3541 24.5051 64.1793 24.3215 65.1097 24.3215C66.0402 24.3215 66.8654 24.5051 67.5853 24.8723C68.3053 25.2283 68.8647 25.7234 69.2634 26.3576C69.6622 26.9806 69.8616 27.6927 69.8616 28.4937V32.0985C69.8616 32.8996 69.6622 33.6172 69.2634 34.2513C68.8647 34.8855 68.2998 35.3862 67.5687 35.7533C66.8487 36.1205 66.0291 36.3041 65.1097 36.3041ZM65.1097 35.1359C66.2063 35.1359 67.0537 34.8633 67.6518 34.3181C68.261 33.7618 68.5656 33.0164 68.5656 32.0818V28.5104C68.5656 27.587 68.2665 26.8527 67.6684 26.3075C67.0703 25.7623 66.2174 25.4897 65.1097 25.4897C64.0242 25.4897 63.1769 25.7623 62.5677 26.3075C61.9695 26.8527 61.6705 27.587 61.6705 28.5104V32.0818C61.6705 33.0164 61.9695 33.7618 62.5677 34.3181C63.1769 34.8633 64.0242 35.1359 65.1097 35.1359Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M53.0826 36.1539C52.8943 36.1539 52.7281 36.0871 52.5841 35.9536C52.4512 35.8201 52.3848 35.6588 52.3848 35.4696V25.4897C52.3848 24.7109 52.8278 24.3215 53.7139 24.3215V34.969H59.0307C59.3851 34.969 59.651 35.0747 59.8282 35.286C60.0165 35.4863 60.1106 35.7756 60.1106 36.1539H53.0826Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42.1832 36.0801C41.9949 36.0801 41.8342 36.0189 41.7013 35.8965C41.5684 35.7741 41.502 35.6239 41.502 35.4459V25.0321C41.502 24.8541 41.5684 24.7039 41.7013 24.5815C41.8342 24.4591 41.9949 24.3979 42.1832 24.3979H46.8685C47.7879 24.3979 48.5189 24.6872 49.0617 25.2658C49.6155 25.8332 49.8924 26.6009 49.8924 27.5688C49.8924 28.1029 49.7484 28.6091 49.4604 29.0875C49.1724 29.5548 48.8069 29.8941 48.3639 30.1055V30.1389C49.0063 30.328 49.4992 30.6562 49.8426 31.1235C50.197 31.5797 50.3743 32.1471 50.3743 32.8258C50.3743 33.4599 50.2413 34.0274 49.9755 34.528C49.7207 35.0176 49.3607 35.4014 48.8955 35.6795C48.4303 35.9466 47.8986 36.0801 47.3005 36.0801H42.1832ZM46.8353 29.6549C47.3227 29.6549 47.738 29.4546 48.0814 29.0541C48.4359 28.6536 48.6131 28.164 48.6131 27.5855C48.6131 26.9402 48.4525 26.4395 48.1313 26.0835C47.8211 25.7275 47.3891 25.5495 46.8353 25.5495H42.8145V29.6549H46.8353ZM47.1676 34.9286C47.7768 34.9286 48.2476 34.745 48.5799 34.3778C48.9232 34.0107 49.0949 33.4989 49.0949 32.8425C49.0949 32.1972 48.9232 31.6965 48.5799 31.3405C48.2476 30.9844 47.7768 30.8064 47.1676 30.8064H42.8145V34.9286H47.1676Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M97.3148 18.7255C95.9003 18.7255 94.7837 18.4924 93.9659 18.0263C93.1473 17.5464 92.7388 16.9087 92.7388 16.1135C92.7388 15.7569 92.8911 15.4553 93.1964 15.2085C93.5149 14.9617 94.0215 14.8382 94.7149 14.8382C94.8254 15.3867 95.1029 15.8187 95.5466 16.134C95.9903 16.4357 96.5109 16.5865 97.1069 16.5865C97.8002 16.5865 98.3347 16.5042 98.7089 16.3397C99.0969 16.1751 99.2917 15.9352 99.2917 15.6198C99.2917 15.3456 99.1387 15.1056 98.8333 14.9C98.5288 14.6943 97.9181 14.4818 97.0029 14.2623C95.9354 14.0156 95.1029 13.7688 94.507 13.5219C93.9241 13.2614 93.4944 12.9392 93.2169 12.5553C92.9394 12.1713 92.801 11.664 92.801 11.0332C92.801 10.142 93.1751 9.42896 93.9241 8.89422C94.6871 8.34574 95.748 8.07153 97.1069 8.07153C98.4387 8.07153 99.5201 8.29777 100.353 8.75024C101.184 9.20272 101.6 9.80604 101.6 10.5602C101.6 10.9441 101.455 11.2252 101.164 11.4034C100.872 11.568 100.387 11.6571 99.7076 11.6709C99.5274 11.1498 99.2499 10.7659 98.8751 10.519C98.5148 10.2585 97.9943 10.1283 97.3148 10.1283C96.8294 10.1283 96.3996 10.2105 96.0255 10.3751C95.6506 10.5396 95.4639 10.7385 95.4639 10.9715C95.4639 11.2321 95.6162 11.4377 95.9215 11.5886C96.24 11.7394 96.7672 11.8902 97.5023 12.0411C99.0969 12.3839 100.241 12.8363 100.935 13.3986C101.642 13.9607 101.996 14.7217 101.996 15.6816C101.996 16.2711 101.809 16.7991 101.434 17.2652C101.06 17.7314 100.519 18.0948 99.8115 18.3553C99.1042 18.6022 98.2718 18.7255 97.3148 18.7255Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90.5241 7.11532C90.0031 7.11532 89.5633 6.96303 89.2068 6.65831C88.8634 6.33978 88.6924 5.93124 88.6924 5.43268C88.6924 4.9341 88.8634 4.53248 89.2068 4.2278C89.5633 3.90927 90.0031 3.75 90.5241 3.75C91.0458 3.75 91.4784 3.90927 91.8211 4.2278C92.1783 4.53248 92.3565 4.9341 92.3565 5.43268C92.3565 5.93124 92.1783 6.33978 91.8211 6.65831C91.4784 6.96303 91.0458 7.11532 90.5241 7.11532ZM89.1039 9.56661C89.1039 8.97113 89.3373 8.54875 89.8039 8.29942C90.2705 8.03628 90.977 7.90475 91.924 7.90475V17.0036C91.924 17.5991 91.6907 18.0285 91.224 18.2916C90.7574 18.5409 90.051 18.6656 89.1039 18.6656V9.56661Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M85.6778 18.7077C84.4943 18.7077 83.6237 18.3714 83.0667 17.6988C82.5097 17.0263 82.2312 16.1615 82.2312 15.1046V10.3075H80.0171C80.0171 9.60741 80.1494 9.08581 80.414 8.74267C80.6786 8.39952 81.0267 8.22795 81.4583 8.22795H82.273V6.60145C82.273 6.01123 82.5027 5.5926 82.9622 5.34553C83.4218 5.08474 84.1179 4.95435 85.0508 4.95435V8.22795H87.8289C87.8289 8.96914 87.6899 9.5045 87.4113 9.83389C87.1327 10.1496 86.6732 10.3075 86.0329 10.3075H85.0927V15.0017C85.0927 15.4547 85.1831 15.784 85.3647 15.9899C85.5455 16.1821 85.8587 16.2782 86.3042 16.2782C86.7916 16.2782 87.2929 16.1409 87.8083 15.8664C87.9612 16.0037 88.0795 16.1753 88.1634 16.3811C88.2604 16.587 88.3097 16.7929 88.3097 16.9988C88.3097 17.2733 88.2119 17.541 88.0171 17.8018C87.8222 18.0626 87.523 18.2822 87.1187 18.4606C86.7291 18.6253 86.2483 18.7077 85.6778 18.7077Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M69.9839 10.2105C69.9839 9.52496 70.2125 8.99703 70.6697 8.62682C71.1269 8.2566 71.8057 8.07153 72.7062 8.07153V9.28498C72.4984 9.50442 72.3252 9.73753 72.1867 9.98431L72.3321 10.0666C72.7478 9.43583 73.2743 8.94906 73.9115 8.60627C74.5627 8.2498 75.2831 8.07153 76.0728 8.07153C76.7655 8.07153 77.3751 8.22918 77.9016 8.54455C78.4419 8.85993 78.8644 9.29873 79.1692 9.86088C79.474 10.4094 79.6264 11.0264 79.6264 11.7119V17.0801C79.6264 17.6697 79.3909 18.0948 78.9199 18.3553C78.4488 18.6022 77.7353 18.7255 76.7794 18.7255V12.1439C76.7794 11.6777 76.627 11.2869 76.3222 10.9715C76.0312 10.6561 75.6156 10.4985 75.0753 10.4985C74.4103 10.4985 73.87 10.711 73.4543 11.1361C73.0387 11.5612 72.8309 12.0959 72.8309 12.7404V17.0801C72.8309 17.6697 72.5954 18.0948 72.1244 18.3553C71.6671 18.6022 70.9537 18.7255 69.9839 18.7255V10.2105Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M64.1992 18.7255C63.3003 18.7255 62.4832 18.561 61.7477 18.2319C61.0123 17.9028 60.4334 17.4504 60.0112 16.8745C59.589 16.2849 59.3779 15.6198 59.3779 14.8794V12.1439C59.3779 11.3898 59.5823 10.7042 59.9908 10.0871C60.3994 9.45638 60.9714 8.96281 61.7069 8.60627C62.4423 8.2498 63.2731 8.07153 64.1992 8.07153C65.1253 8.07153 65.9561 8.2498 66.6915 8.60627C67.427 8.96281 67.999 9.45638 68.4076 10.0871C68.8162 10.7042 69.0204 11.3898 69.0204 12.1439V14.8794C69.0204 15.6198 68.8093 16.2849 68.3871 16.8745C67.9649 17.4504 67.3861 17.9028 66.6507 18.2319C65.9153 18.561 65.098 18.7255 64.1992 18.7255ZM64.1992 16.2985C64.8393 16.2985 65.3364 16.1546 65.6905 15.8666C66.0446 15.5787 66.2216 15.181 66.2216 14.6737V12.2878C66.2216 11.7531 66.0378 11.3212 65.6701 10.9921C65.316 10.663 64.8257 10.4985 64.1992 10.4985C63.5727 10.4985 63.0756 10.663 62.7079 10.9921C62.3538 11.3212 62.1767 11.7531 62.1767 12.2878V14.6737C62.1767 15.181 62.3538 15.5787 62.7079 15.8666C63.062 16.1546 63.5591 16.2985 64.1992 16.2985Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M57.1644 10.4985C56.3524 10.4985 55.696 10.711 55.1953 11.1361C54.6945 11.5612 54.4442 12.0959 54.4442 12.7404V17.0801C54.4442 17.6697 54.2141 18.0948 53.754 18.3553C53.3074 18.6022 52.6105 18.7255 51.6631 18.7255V10.2105C51.6631 9.52496 51.8864 8.99703 52.333 8.62682C52.7796 8.2566 53.4427 8.07153 54.3224 8.07153V9.28498C54.1194 9.50442 53.9502 9.73753 53.8149 9.98431L53.957 10.0666C54.8096 8.73657 55.872 8.07153 57.1441 8.07153C57.7531 8.07153 58.2132 8.23606 58.5245 8.5651C58.8358 8.89422 58.9914 9.3124 58.9914 9.81979C58.9914 10.2037 58.8899 10.5396 58.6869 10.8275C58.3079 10.6082 57.8005 10.4985 57.1644 10.4985Z",
    fill: "#0B2640"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42.0273 5.39268C42.0273 5.00508 42.1728 4.67977 42.4637 4.41676C42.7685 4.13989 43.1356 4.00146 43.5651 4.00146H53.0198C53.0198 4.9151 52.8674 5.57956 52.5626 5.99484C52.2579 6.41015 51.7661 6.6178 51.0873 6.6178H45.082V9.79474H50.5263C50.5263 10.7083 50.3739 11.3728 50.0691 11.788C49.7644 12.2034 49.2725 12.411 48.5938 12.411H45.082V16.6262C45.082 17.3599 44.8395 17.8928 44.3546 18.225C43.8837 18.5572 43.1079 18.7233 42.0273 18.7233V5.39268Z",
    fill: "#0B2640"
  }));
};
var TemplateLibraryIcon = function TemplateLibraryIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "64",
    height: "20",
    viewBox: "0 0 64 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    "clip-path": "url(#clip0_9014_403)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.2133 7.4297C19.2167 7.48684 19.2122 7.54398 19.1989 7.60113L17.9656 12.6766C17.9033 12.9326 17.6811 13.112 17.4244 13.1131L10.0222 13.152H2.61667C2.35889 13.152 2.13444 12.9714 2.07222 12.7143L0.838889 7.62056C0.824444 7.56227 0.821111 7.50284 0.824444 7.44455C0.585393 7.36723 0.376551 7.21349 0.228281 7.0057C0.0800105 6.7979 4.15036e-05 6.54688 0 6.28913C0 5.96784 0.124087 5.6597 0.344963 5.43252C0.565839 5.20533 0.865412 5.0777 1.17778 5.0777C1.49014 5.0777 1.78972 5.20533 2.01059 5.43252C2.23147 5.6597 2.35556 5.96784 2.35556 6.28913C2.3554 6.46794 2.31676 6.64449 2.24242 6.80612C2.16807 6.96776 2.05986 7.11046 1.92556 7.22398L3.47 8.82513C3.86 9.2297 4.40222 9.4617 4.95667 9.4617C5.61222 9.4617 6.23667 9.1417 6.63 8.6057L9.16778 5.14627C8.95444 4.92684 8.82222 4.62398 8.82222 4.29027C8.82208 4.13109 8.85243 3.97343 8.91156 3.82632C8.97068 3.67922 9.05741 3.54553 9.16679 3.43292C9.27617 3.32031 9.40606 3.23097 9.54903 3.17002C9.69199 3.10907 9.84524 3.0777 10 3.0777C10.1547 3.0777 10.3078 3.10903 10.4507 3.16991C10.5936 3.23079 10.7234 3.32003 10.8328 3.43252C10.9422 3.54501 11.0289 3.67856 11.0881 3.82553C11.1473 3.97251 11.1778 4.13004 11.1778 4.28913C11.1778 4.61256 11.0533 4.90741 10.8511 5.12456L13.3733 8.59656C13.7667 9.13827 14.3933 9.4617 15.0511 9.4617C15.3263 9.46267 15.5989 9.4074 15.8532 9.29911C16.1075 9.19081 16.3383 9.03164 16.5322 8.83084L18.0867 7.23198C17.8972 7.07473 17.7597 6.86092 17.6932 6.61999C17.6267 6.37907 17.6344 6.12286 17.7153 5.88664C17.7962 5.65041 17.9463 5.44578 18.1449 5.30092C18.3436 5.15605 18.581 5.07807 18.8244 5.0777C19.1014 5.07909 19.369 5.18082 19.5803 5.36501C19.7915 5.54921 19.9329 5.80409 19.9796 6.08488C20.0263 6.36566 19.9753 6.65439 19.8356 6.90034C19.6958 7.14628 19.4763 7.33371 19.2156 7.4297H19.2133ZM17.8444 14.96C17.8444 14.6411 17.5933 14.3828 17.2833 14.3828H2.77889C2.46889 14.3828 2.21778 14.6411 2.21778 14.96V16.344C2.21778 16.6628 2.46889 16.9211 2.77889 16.9211H17.2833C17.5933 16.9211 17.8444 16.6628 17.8444 16.344V14.96Z",
    fill: "#F89B2E"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M26 10C26 4.47715 30.4772 0 36 0H54C59.5228 0 64 4.47715 64 10C64 15.5228 59.5228 20 54 20H36C30.4772 20 26 15.5228 26 10Z",
    fill: "#F89B2E"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34.72 14V6.55H37.5C38.0067 6.55 38.4533 6.64333 38.84 6.83C39.2333 7.01 39.54 7.27667 39.76 7.63C39.98 7.97667 40.09 8.4 40.09 8.9C40.09 9.39333 39.9767 9.81667 39.75 10.17C39.53 10.5167 39.2267 10.7833 38.84 10.97C38.4533 11.1567 38.0067 11.25 37.5 11.25H36.08V14H34.72ZM36.08 10.05H37.52C37.7667 10.05 37.98 10.0033 38.16 9.91C38.34 9.81 38.48 9.67333 38.58 9.5C38.68 9.32667 38.73 9.12667 38.73 8.9C38.73 8.66667 38.68 8.46667 38.58 8.3C38.48 8.12667 38.34 7.99333 38.16 7.9C37.98 7.8 37.7667 7.75 37.52 7.75H36.08V10.05ZM41.2044 14V6.55H43.9744C44.481 6.55 44.9277 6.64333 45.3144 6.83C45.7077 7.01 46.0144 7.27667 46.2344 7.63C46.4544 7.97667 46.5644 8.4 46.5644 8.9C46.5644 9.41333 46.441 9.85 46.1944 10.21C45.9544 10.57 45.6277 10.8367 45.2144 11.01L46.9244 14H45.3844L43.5544 10.73L44.4344 11.25H42.5644V14H41.2044ZM42.5644 10.05H43.9944C44.241 10.05 44.4544 10.0033 44.6344 9.91C44.8144 9.81 44.9544 9.67333 45.0544 9.5C45.1544 9.32667 45.2044 9.12667 45.2044 8.9C45.2044 8.66667 45.1544 8.46667 45.0544 8.3C44.9544 8.12667 44.8144 7.99333 44.6344 7.9C44.4544 7.8 44.241 7.75 43.9944 7.75H42.5644V10.05ZM51.4857 14.12C50.939 14.12 50.429 14.0233 49.9557 13.83C49.4824 13.6367 49.069 13.3667 48.7157 13.02C48.3624 12.6733 48.0857 12.2667 47.8857 11.8C47.6924 11.3267 47.5957 10.8167 47.5957 10.27C47.5957 9.71667 47.6924 9.20667 47.8857 8.74C48.079 8.27333 48.3524 7.86667 48.7057 7.52C49.059 7.17333 49.4724 6.90667 49.9457 6.72C50.419 6.52667 50.9324 6.43 51.4857 6.43C52.039 6.43 52.5524 6.52667 53.0257 6.72C53.499 6.91333 53.9124 7.18333 54.2657 7.53C54.619 7.87 54.8924 8.27333 55.0857 8.74C55.2857 9.20667 55.3857 9.71667 55.3857 10.27C55.3857 10.8167 55.2857 11.3267 55.0857 11.8C54.8857 12.2667 54.609 12.6733 54.2557 13.02C53.9024 13.3667 53.489 13.6367 53.0157 13.83C52.549 14.0233 52.039 14.12 51.4857 14.12ZM51.4857 12.88C51.8524 12.88 52.189 12.8167 52.4957 12.69C52.8024 12.5567 53.069 12.3733 53.2957 12.14C53.529 11.9067 53.7057 11.63 53.8257 11.31C53.9524 10.99 54.0157 10.6433 54.0157 10.27C54.0157 9.89667 53.9524 9.55333 53.8257 9.24C53.7057 8.92 53.529 8.64333 53.2957 8.41C53.069 8.17 52.8024 7.98667 52.4957 7.86C52.189 7.73333 51.8524 7.67 51.4857 7.67C51.1257 7.67 50.7924 7.73333 50.4857 7.86C50.179 7.98667 49.909 8.17 49.6757 8.41C49.449 8.64333 49.2724 8.92 49.1457 9.24C49.019 9.55333 48.9557 9.89667 48.9557 10.27C48.9557 10.6433 49.019 10.99 49.1457 11.31C49.2724 11.63 49.449 11.9067 49.6757 12.14C49.909 12.3733 50.179 12.5567 50.4857 12.69C50.7924 12.8167 51.1257 12.88 51.4857 12.88Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_9014_403"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "16",
    fill: "white",
    transform: "translate(0 2)"
  }))));
};
var TemplateHeader = function TemplateHeader(_ref) {
  var activeTab = _ref.activeTab,
    setActiveTab = _ref.setActiveTab,
    data = _ref.data;
  // Extract tabs from the schema
  var schema = data.$schema;
  var tabs = Object.keys(schema).map(function (key) {
    return {
      id: key,
      label: schema[key].name,
      icon: key === 'template-library' ? /*#__PURE__*/React.createElement(TemplateLibraryIcon, null) : null
    };
  });

  // State for active tab

  return /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-store-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-store-header-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-logo"
  }, /*#__PURE__*/React.createElement(TemplateLogo, null)), /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-tabs"
  }, tabs.map(function (tab) {
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      className: "single-tab ".concat(activeTab === tab.id ? 'active' : ''),
      onClick: function onClick() {
        return setActiveTab(tab.id);
      }
    }, /*#__PURE__*/React.createElement("span", null, tab.label), tab.icon);
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateHeader);

/***/ }),

/***/ "./admin/template-library/template-sidebar.js":
/*!****************************************************!*\
  !*** ./admin/template-library/template-sidebar.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var TemplateSidebar = function TemplateSidebar(_ref) {
  var _schema$activeTab;
  var activeTab = _ref.activeTab,
    activeCategory = _ref.activeCategory,
    setActiveCategory = _ref.setActiveCategory,
    data = _ref.data;
  // Extract sections from the schema
  var schema = data.$schema;
  var categories = activeTab ? Object.values(((_schema$activeTab = schema[activeTab]) === null || _schema$activeTab === void 0 ? void 0 : _schema$activeTab.categories) || {}) : [];

  // const [activeCategory, setActiveCategory] = useState(null);
  // Set first category as active by default
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0].id);
    }
  }, [categories]);
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-store-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-store-sidebar-tabs"
  }, categories.map(function (category) {
    return /*#__PURE__*/React.createElement("button", {
      key: category.id,
      className: "fb-template-library-store-sidebar-tab ".concat(activeCategory === category.id ? 'active' : ''),
      onClick: function onClick() {
        return setActiveCategory(category.id);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "fb-template-library-store-sidebar-tab-name"
    }, category.name), /*#__PURE__*/React.createElement("span", {
      className: "fb-template-library-store-sidebar-tab-count"
    }, String(category.count).padStart(2, "0")));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateSidebar);

/***/ }),

/***/ "./admin/template-library/templates.js":
/*!*********************************************!*\
  !*** ./admin/template-library/templates.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _template_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template-header */ "./admin/template-library/template-header.js");
/* harmony import */ var _template_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template-sidebar */ "./admin/template-library/template-sidebar.js");
/* harmony import */ var _template_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template-content */ "./admin/template-library/template-content.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data.json */ "./admin/template-library/data.json");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * WordPress dependencies
 */











var PatternLibraryButton = function PatternLibraryButton() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    showPatternButton = _useState2[0],
    setShowPatternButton = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isVisible = _useState4[0],
    setIsVisible = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  var handleClick = function handleClick() {
    setIsVisible(!isVisible);
    console.log("isVisible:", !isVisible);
  };
  var importDemo = function importDemo() {
    // console.log(frontisBlocksAdmin.nonce)
    jQuery.ajax({
      url: frontisBlocksAdmin.ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_import_demo_data',
        nonce: frontisBlocksAdmin.nonce
      },
      success: function success(response) {
        // Access Gutenberg's block editor store
        var _select = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/block-editor'),
          getSelectedBlockClientId = _select.getSelectedBlockClientId,
          getBlockOrder = _select.getBlockOrder;
        var _dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/block-editor'),
          insertBlock = _dispatch.insertBlock;

        // Get the currently selected block's ID
        var selectedBlockClientId = getSelectedBlockClientId();
        if (!selectedBlockClientId) {
          console.warn('No block is currently selected');
          return;
        }
        try {
          // Get the current block order
          var blockOrder = getBlockOrder();
          var selectedBlockIndex = blockOrder.indexOf(selectedBlockClientId);
          if (selectedBlockIndex === -1) {
            throw new Error('Selected block not found in block order');
          }

          // Parse the HTML content into blocks
          // Note: You might want to use wp.blocks.rawHandler here for proper HTML parsing
          var newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.createBlock)('core/html', {
            content: response.data
          });

          // Insert the new block after the selected block
          insertBlock(newBlock, selectedBlockIndex + 1);
        } catch (error) {
          console.error('Error inserting blocks:', error);
        }
      },
      error: function error(xhr, status, _error) {
        console.log(xhr, status, _error);
      }
    });
  };

  // State for active tab
  var schema = _data_json__WEBPACK_IMPORTED_MODULE_9__.$schema;
  var _useState9 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(Object.keys(schema)[0]),
    _useState10 = _slicedToArray(_useState9, 2),
    activeTab = _useState10[0],
    setActiveTab = _useState10[1];
  var _useState11 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    activeCategory = _useState12[0],
    setActiveCategory = _useState12[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: function onClick() {
      return handleClick();
    },
    className: "fb-template-library-button"
  }, /*#__PURE__*/React.createElement("svg", {
    id: "fb-global-panel-icon",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "m19.455 11.997 2.408 1.396A2.282 2.282 0 0 1 23 15.373v1.479a2.297 2.297 0 0 1-1.138 1.981l-2.408 1.396-3.56 2.064-2.412 1.4a2.267 2.267 0 0 1-2.276 0l-2.408-1.4v-4.119l3.546 2.06 3.55-2.06 3.546-2.054-3.546-2.06-3.55-2.058 3.55-2.064 3.546-2.055-3.546-2.059-3.55-2.054-3.546-2.06 2.408-1.4a2.267 2.267 0 0 1 2.276 0l2.408 1.4 3.541 2.06 2.408 1.4a2.282 2.282 0 0 1 1.138 1.981v1.474a2.298 2.298 0 0 1-1.138 1.98l-2.385 1.392Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "m8.802 5.828-3.541 2.05v12.354l-2.404-1.395a2.282 2.282 0 0 1-1.142-1.982V7.141A2.297 2.297 0 0 1 2.853 5.16l1.265-.732a2.267 2.267 0 0 1 2.276 0l2.408 1.4Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "m15.896 9.938-3.55 2.06-2.409 1.395a2.267 2.267 0 0 1-2.276 0l-2.417-1.395L8.79 9.943l2.413-1.4a2.266 2.266 0 0 1 2.276 0l2.417 1.395Z"
  })), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Templates", "frontis-blocks")), isVisible && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    className: "fb-template-library-popover",
    onRequestClose: handleClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-store-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-store-inner-wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_template_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    activeTab: activeTab,
    setActiveTab: setActiveTab,
    data: _data_json__WEBPACK_IMPORTED_MODULE_9__
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-store-sidebar-wrapper"
  }, /*#__PURE__*/React.createElement(_template_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activeTab: activeTab,
    data: _data_json__WEBPACK_IMPORTED_MODULE_9__,
    activeCategory: activeCategory,
    setActiveCategory: setActiveCategory
  }), /*#__PURE__*/React.createElement(_template_content__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeTab: activeTab,
    activeCategory: activeCategory,
    data: _data_json__WEBPACK_IMPORTED_MODULE_9__
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternLibraryButton);

/***/ }),

/***/ "./src/components/range/index.js":
/*!***************************************!*\
  !*** ./src/components/range/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_responsive_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/responsive-control */ "./src/components/responsive-control/index.js");
/* harmony import */ var _Components_unit_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/unit-control */ "./src/components/unit-control/index.js");
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/range/editor.lazy.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var FB_Range = function FB_Range(_ref) {
  var min = _ref.min,
    max = _ref.max,
    label = _ref.label,
    rangeValue = _ref.rangeValue,
    onChangeHandler = _ref.onChangeHandler,
    rangeUnitHandler = _ref.rangeUnitHandler,
    deviceType = _ref.deviceType,
    units = _ref.units,
    rangeStep = _ref.rangeStep,
    resetFallbackValue = _ref.resetFallbackValue,
    _ref$units_types_arr = _ref.units_types_arr,
    units_types_arr = _ref$units_types_arr === void 0 ? null : _ref$units_types_arr,
    _ref$isRangeUnit = _ref.isRangeUnit,
    isRangeUnit = _ref$isRangeUnit === void 0 ? true : _ref$isRangeUnit,
    _ref$globalIcon = _ref.globalIcon,
    globalIcon = _ref$globalIcon === void 0 ? false : _ref$globalIcon,
    _ref$globalTypography = _ref.globalTypographyType,
    globalTypographyType = _ref$globalTypography === void 0 ? null : _ref$globalTypography,
    _ref$globalTypography2 = _ref.globalTypographyValue,
    globalTypographyValue = _ref$globalTypography2 === void 0 ? 'none' : _ref$globalTypography2,
    _ref$setGlobalTypogra = _ref.setGlobalTypographyValue,
    setGlobalTypographyValue = _ref$setGlobalTypogra === void 0 ? null : _ref$setGlobalTypogra,
    _ref$globalReset = _ref.globalReset,
    globalReset = _ref$globalReset === void 0 ? false : _ref$globalReset;
  // Ensure default/fallback value for the current deviceType
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (rangeValue[deviceType] === undefined) {
      var newRangeValue = _objectSpread(_objectSpread({}, rangeValue), {}, _defineProperty({}, deviceType, resetFallbackValue));
      onChangeHandler(newRangeValue);
    }
  }, [deviceType, rangeValue, onChangeHandler, resetFallbackValue]);

  // const setRangeValue = (value) => {
  // 	const newRangeValue = { ...rangeValue, [deviceType]: value || resetFallbackValue };
  // 	onChangeHandler(newRangeValue);
  // };

  var setRangeValue = function setRangeValue(value) {
    var newRangeValue = _objectSpread(_objectSpread({}, rangeValue), {}, _defineProperty({}, deviceType, value !== null ? String(value) : String(resetFallbackValue)));
    onChangeHandler(newRangeValue);
  };
  var setRangeUnit = function setRangeUnit(unit) {
    var newUnits = _objectSpread(_objectSpread({}, units), {}, _defineProperty({}, deviceType, unit));
    rangeUnitHandler(newUnits);
  };
  var resetRangeValue = function resetRangeValue() {
    setRangeValue(resetFallbackValue);
  };

  // if(globalReset === true) {
  // 	setRangeValue(resetFallbackValue);
  // }

  var handleGlobalTypographyValue = function handleGlobalTypographyValue(value) {
    setGlobalTypographyValue(value);
  };
  var globalTypo = FrontisBlocksData.global_typography;
  var GB_TYPO = [{
    label: 'None',
    value: 'none'
  }];
  var storedData = localStorage.getItem("fb_custom_typography");
  var customTypoData = storedData ? JSON.parse(storedData) : {};

  // Convert object to array
  var customTypoArray = Object.keys(customTypoData).map(function (key) {
    return {
      id: key,
      name: customTypoData[key].name
    };
  });
  Object.entries(globalTypo).forEach(function (_ref2) {
    var _properties$fontSize, _properties$lineHeigh, _properties$letterSpa;
    var _ref3 = _slicedToArray(_ref2, 2),
      label = _ref3[0],
      properties = _ref3[1];
    var updatedValue = null;
    if (globalTypographyType === 'fontSize' && (properties === null || properties === void 0 || (_properties$fontSize = properties.fontSize) === null || _properties$fontSize === void 0 ? void 0 : _properties$fontSize.variable) !== undefined) {
      var _properties$fontSize2;
      updatedValue = "var(".concat(properties === null || properties === void 0 || (_properties$fontSize2 = properties.fontSize) === null || _properties$fontSize2 === void 0 ? void 0 : _properties$fontSize2.variable, ")");
    }
    if (globalTypographyType === 'lineHeight' && (properties === null || properties === void 0 || (_properties$lineHeigh = properties.lineHeight) === null || _properties$lineHeigh === void 0 ? void 0 : _properties$lineHeigh.variable) !== undefined) {
      var _properties$lineHeigh2;
      updatedValue = "var(".concat(properties === null || properties === void 0 || (_properties$lineHeigh2 = properties.lineHeight) === null || _properties$lineHeigh2 === void 0 ? void 0 : _properties$lineHeigh2.variable, ")");
    }
    if (globalTypographyType === 'letterSpacing' && (properties === null || properties === void 0 || (_properties$letterSpa = properties.letterSpacing) === null || _properties$letterSpa === void 0 ? void 0 : _properties$letterSpa.variable) !== undefined) {
      var _properties$letterSpa2;
      updatedValue = "var(".concat(properties === null || properties === void 0 || (_properties$letterSpa2 = properties.letterSpacing) === null || _properties$letterSpa2 === void 0 ? void 0 : _properties$letterSpa2.variable, ")");
    }
    if (updatedValue !== null) {
      var newLabel = label === 'body' ? 'Body' : label === 'captions' ? 'Captions' : label === 'button' ? 'Button' : label === 'link' ? 'Link' : label === 'h1' ? 'Heading One' : label === 'h2' ? 'Heading Two' : label === 'h3' ? 'Heading Three' : label === 'h4' ? 'Heading Four' : label === 'h5' ? 'Heading Five' : label === 'h6' ? 'Heading Six' : label;
      GB_TYPO.push({
        label: newLabel,
        value: updatedValue
      });
    }
  });
  GB_TYPO.forEach(function (item) {
    var matchedTypo = customTypoArray.find(function (typo) {
      return typo.id === item.label;
    });
    if (matchedTypo) {
      item.label = matchedTypo.name;
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-spacing-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-spacing-inner-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-spacing-label-container"
  }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(label, 'frontis-blocks'),
    device: deviceType
  }), /*#__PURE__*/React.createElement("div", {
    className: "fb-unit-wrapper"
  }, rangeValue[deviceType] && /*#__PURE__*/React.createElement("div", {
    className: "fb-reset-control-container",
    onClick: resetRangeValue
  }, /*#__PURE__*/React.createElement("button", {
    className: "fb-reset-button fb-reset-has-value"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.6817 6.23162H14.0101V6.23044M1.98926 13.0956V9.76718M1.98926 9.76718L5.31768 9.76718M1.98926 9.76718L4.10985 11.8892C4.7702 12.5507 5.60824 13.0527 6.57607 13.312C9.51014 14.0982 12.526 12.357 13.3122 9.42292M2.68699 6.57591C3.47317 3.64184 6.48902 1.90064 9.42308 2.68682C10.3909 2.94615 11.229 3.4481 11.8893 4.10969L14.0101 6.23044M14.0101 2.90322V6.23044",
    stroke: "#555E72"
  })))), isRangeUnit && /*#__PURE__*/React.createElement(_Components_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentUnit: units[deviceType],
    unitTypes: units_types_arr,
    onUnitChange: setRangeUnit
  }), globalIcon === true && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "fb-setting-global-icon-wrapper",
    contentClassName: "fb-setting-global-icon-content",
    popoverProps: {
      placement: 'bottom-start'
    },
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
        onToggle = _ref4.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        onClick: onToggle,
        "aria-expanded": isOpen,
        className: "fb-setting-global-icon-btn ".concat(globalTypographyValue !== 'none' && 'global-active')
      }, /*#__PURE__*/React.createElement("svg", {
        width: "16px",
        height: "16px",
        viewBox: "0 0 25 25",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
        "class": "st0",
        d: "M12.5,21.8c-4.5,0-8.3-3-9.4-7.3c0,0,0,0,0,0c-0.2-0.8-0.3-1.6-0.3-2.4c0-1.7,0.4-3.3,1.2-4.8c0,0,0,0,0,0\r c1.7-3.1,5-5,8.5-5c3.5,0,6.8,1.9,8.5,5c0,0,0,0,0,0c0.8,1.4,1.2,3.1,1.2,4.8c0,0.8-0.1,1.6-0.3,2.4c0,0,0,0,0,0\r C20.8,18.7,17,21.8,12.5,21.8z M9.6,17c0.7,2,1.9,3.2,2.9,3.2s2.2-1.2,2.9-3.2C13.5,17.3,11.5,17.3,9.6,17z M17.1,16.7\r c-0.3,1.1-0.7,2.1-1.3,2.9c1.7-0.8,3.1-2.1,4-3.8C19,16.1,18.1,16.4,17.1,16.7z M5.1,15.8c0.9,1.7,2.3,3,4,3.8\r c-0.5-0.8-0.9-1.8-1.3-2.9C6.9,16.4,6,16.1,5.1,15.8z M9.1,15.4c2.2,0.4,4.6,0.4,6.8,0c0.2-1,0.4-2.2,0.4-3.4c0-0.4,0-0.9,0-1.3\r c-2.4,0.7-5,0.7-7.4,0c0,0.4,0,0.9,0,1.3C8.8,13.2,8.9,14.4,9.1,15.4z M17.7,10.2c0.1,0.6,0.1,1.2,0.1,1.8c0,1.1-0.1,2.1-0.2,3\r c1.1-0.3,2.1-0.7,3.1-1.3c0.1-0.6,0.2-1.2,0.2-1.8c0-1.1-0.2-2.2-0.7-3.3C19.3,9.3,18.5,9.8,17.7,10.2z M4.4,13.8\r c1,0.5,2,0.9,3.1,1.3c-0.2-0.9-0.2-2-0.2-3c0-0.6,0-1.2,0.1-1.8C6.5,9.8,5.7,9.3,4.9,8.8c-0.4,1-0.7,2.1-0.7,3.3\r C4.2,12.6,4.3,13.2,4.4,13.8z M9,9.2c2.3,0.7,4.8,0.7,7,0c-0.6-3.3-2.1-5.4-3.5-5.4S9.6,5.9,9,9.2z M5.6,7.4\r c0.6,0.5,1.2,0.9,1.9,1.2C7.9,7,8.4,5.6,9.1,4.5C7.7,5.1,6.5,6.1,5.6,7.4z M15.9,4.5c0.7,1.1,1.2,2.5,1.6,4.1\r c0.7-0.3,1.3-0.7,1.9-1.2C18.5,6.1,17.3,5.1,15.9,4.5z"
      }))));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-typography-popup"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        className: "fb-setting-typography-popup-inner"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Global Styles", "frontis-blocks"),
        className: "fb-setting-global-typo-select",
        options: GB_TYPO,
        value: globalTypographyValue,
        onChange: handleGlobalTypographyValue
      })));
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl
  // value={rangeValue[deviceType] !== "" ? parseInt(rangeValue[deviceType]) : undefined}
  , {
    value: rangeValue[deviceType] !== "" ? Number(rangeValue[deviceType]) : undefined,
    onChange: setRangeValue,
    min: min,
    max: max,
    step: rangeStep,
    resetFallbackValue: resetFallbackValue
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FB_Range);

/***/ }),

/***/ "./src/components/responsive-control/index.js":
/*!****************************************************!*\
  !*** ./src/components/responsive-control/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config_displayType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Config/displayType */ "./src/config/displayType.js");
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/responsive-control/editor.lazy.scss");



var FB_ResponsiveControl = function FB_ResponsiveControl(_ref) {
  var labelText = _ref.labelText,
    device = _ref.device;
  /**
  	* Handle the device type change
  	* @param {string} deviceType - The device type to set
  	*/
  var handleDevice = function handleDevice(deviceType) {
    if (!deviceType) {
      console.error('Invalid device type:', deviceType);
      return;
    }
    try {
      (0,_Config_displayType__WEBPACK_IMPORTED_MODULE_1__.setDeviceType)(deviceType, false);
    } catch (error) {
      console.error('Error setting device type:', error);
    }
  };

  /**
   * Toggle the device visibility
   * @param {Event} e - The event object
   */
  var toggleDeviceVisibility = function toggleDeviceVisibility(e) {
    var wrapper = e.currentTarget;
    wrapper.classList.toggle('fb-device-switchers-open');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-device-label-wrapper"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fb-setting-label-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(labelText, 'frontis-blocks')), /*#__PURE__*/React.createElement("div", {
    className: "fb-responsive-device-wrapper",
    onClick: toggleDeviceVisibility
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-responsive-device-inner-wrapper"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fb-device-switcher fb-responsive-desktop-device ".concat(device === 'Desktop' ? 'active' : ''),
    onClick: function onClick() {
      return handleDevice('Desktop');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5 3.5C1.5 2.39543 2.39543 1.5 3.5 1.5H12.5C13.6046 1.5 14.5 2.39543 14.5 3.5V10C14.5 11.1046 13.6046 12 12.5 12H10.5V12.1716C10.5 12.5694 10.658 12.9509 10.9393 13.2322L11.3536 13.6464C11.4966 13.7894 11.5393 14.0045 11.4619 14.1913C11.3845 14.3782 11.2022 14.5 11 14.5H5C4.79777 14.5 4.61545 14.3782 4.53806 14.1913C4.46067 14.0045 4.50345 13.7894 4.64645 13.6464L5.06066 13.2322C5.34196 12.9509 5.5 12.5694 5.5 12.1716V12H3.5C2.39543 12 1.5 11.1046 1.5 10V3.5ZM2.5 3.5V8.5C2.5 9.05228 2.94772 9.5 3.5 9.5H12.5C13.0523 9.5 13.5 9.05228 13.5 8.5V3.5C13.5 2.94772 13.0523 2.5 12.5 2.5H3.5C2.94772 2.5 2.5 2.94772 2.5 3.5Z",
    fill: "#555E72"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "fb-device-switcher fb-responsive-tablet-device ".concat(device === 'Tablet' ? 'active' : ''),
    onClick: function onClick() {
      return handleDevice('Tablet');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "6",
    height: "7",
    viewBox: "0 0 6 7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "fb-device-switcher fb-responsive-mobile-device ".concat(device === 'Mobile' ? 'active' : ''),
    onClick: function onClick() {
      return handleDevice('Mobile');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "4",
    height: "7",
    viewBox: "0 0 4 7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FB_ResponsiveControl);

/***/ }),

/***/ "./src/components/unit-control/index.js":
/*!**********************************************!*\
  !*** ./src/components/unit-control/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/unit-control/editor.lazy.scss");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var FB_RangeUnitsType = function FB_RangeUnitsType(_ref) {
  var currentUnit = _ref.currentUnit,
    _ref$unitTypes = _ref.unitTypes,
    unitTypes = _ref$unitTypes === void 0 ? null : _ref$unitTypes,
    onUnitChange = _ref.onUnitChange;
  /** Default unit types */
  var UNIT_TYPES = unitTypes || [{
    label: 'px',
    value: 'px'
  }, {
    label: '%',
    value: '%'
  }, {
    label: 'em',
    value: 'em'
  }, {
    label: 'rem',
    value: 'rem'
  }, {
    label: 'vh',
    value: 'vh'
  }, {
    label: 'vw',
    value: 'vw'
  }];

  /** State to manage dropdown visibility */
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDropdownOpen = _useState2[0],
    setDropdownOpen = _useState2[1];
  var toggleDropdown = function toggleDropdown() {
    setDropdownOpen(function (prevState) {
      return !prevState;
    });
  };
  var selectUnit = function selectUnit(unit) {
    onUnitChange(unit);
    setDropdownOpen(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-units-type"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-units-current",
    onClick: toggleDropdown
  }, currentUnit), isDropdownOpen && /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-units-dropdown"
  }, UNIT_TYPES.map(function (item, key) {
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: "fb-setting-units-option ".concat(currentUnit === item.value ? 'active' : ''),
      onClick: function onClick() {
        return selectUnit(item.value);
      }
    }, item.label);
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FB_RangeUnitsType);

/***/ }),

/***/ "./src/config/displayType.js":
/*!***********************************!*\
  !*** ./src/config/displayType.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setCustomizerPreview: () => (/* binding */ setCustomizerPreview),
/* harmony export */   setDeviceOnCustomizerAction: () => (/* binding */ setDeviceOnCustomizerAction),
/* harmony export */   setDeviceType: () => (/* binding */ setDeviceType),
/* harmony export */   useDeviceType: () => (/* binding */ useDeviceType)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Constants_fbConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Constants/fbConstants */ "./src/fbConstants/fbConstants.js");
/* harmony import */ var _Utils_customizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Utils/customizer */ "./src/utils/customizer.js");



var useDeviceType = function useDeviceType() {
  var deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
    var _select, _select2, _select3;
    var getDeviceFromStore = ((_select = select('core/edit-site')) === null || _select === void 0 ? void 0 : _select.__experimentalGetPreviewDeviceType()) || ((_select2 = select('core/edit-post')) === null || _select2 === void 0 ? void 0 : _select2.__experimentalGetPreviewDeviceType()) || ((_select3 = select(_Constants_fbConstants__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME)) === null || _select3 === void 0 ? void 0 : _select3.getDeviceType());
    return getDeviceFromStore || 'Desktop';
  }, []);
  return deviceType || '';
};

/**
 * Sets the preview device type for the Gutenberg editor.
 *
 * @param {string} device - The value representing the device type.
 * @param {boolean} updateInCustomizer - Whether to update the device type in the customizer preview.
 */
var setDeviceType = function setDeviceType(device) {
  var _dispatch, _dispatch2, _dispatch3;
  var updateInCustomizer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var setPreviewDeviceType = ((_dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-site')) === null || _dispatch === void 0 ? void 0 : _dispatch.__experimentalSetPreviewDeviceType) || ((_dispatch2 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-post')) === null || _dispatch2 === void 0 ? void 0 : _dispatch2.__experimentalSetPreviewDeviceType) || ((_dispatch3 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(frontisStore)) === null || _dispatch3 === void 0 ? void 0 : _dispatch3.setDeviceType);

  // Verify setPreviewDeviceType is available and setPreviewDeviceType should be function.
  if (!setPreviewDeviceType || typeof setPreviewDeviceType !== 'function') {
    return;
  }
  setPreviewDeviceType(device);

  // If we don't want to update the device type in the customizer preview, return.
  if (!updateInCustomizer) {
    return;
  }

  // This code sets the device type in the customizer preview. It's particularly useful when not using a Full Site Editing (FSE) theme.
  setCustomizerPreview(device);
};

/**
 * This function is used to set previewedDevice in customizer if it is customizer page.
 *
 * @param {string} deviceType deviceType should be string e.g. 'desktop', 'tablet', 'mobile' may be 'Desktop', 'Tablet', 'Mobile'.
 */
var setCustomizerPreview = function setCustomizerPreview(deviceType) {
  if (!(0,_Utils_customizer__WEBPACK_IMPORTED_MODULE_2__.isCustomizerPage)()) {
    return;
  }

  // deviceType should be string.
  if (typeof deviceType !== 'string') {
    return;
  }
  var deviceTypeLower = deviceType.toLowerCase();

  // Check deviceType is valid.
  if (!['desktop', 'tablet', 'mobile'].includes(deviceTypeLower)) {
    return;
  }
  wp.customize.previewedDevice.set(deviceTypeLower);
};

/**
 * This function is used to set deviceType in customizer get previewedDevice if it is customizer page and set deviceType gutenberg store.
 */
var setDeviceOnCustomizerAction = function setDeviceOnCustomizerAction() {
  if (!(0,_Utils_customizer__WEBPACK_IMPORTED_MODULE_2__.isCustomizerPage)()) {
    return;
  }
  window.wp.customize.bind('ready', function () {
    window.wp.customize.previewedDevice.bind(function (device) {
      if (!device) {
        return;
      }

      // Check device type only mobile, tablet and desktop.
      if (!['mobile', 'tablet', 'desktop'].includes(device)) {
        return;
      }
      var deviceTypeFirstLetterUpper = device.charAt(0).toUpperCase() + device.slice(1);
      setDeviceType(deviceTypeFirstLetterUpper, false);
    });
  });
};

/***/ }),

/***/ "./src/fbConstants/fbConstants.js":
/*!****************************************!*\
  !*** ./src/fbConstants/fbConstants.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BORDER_STYLES: () => (/* binding */ BORDER_STYLES),
/* harmony export */   FONT_FAMILYS: () => (/* binding */ FONT_FAMILYS),
/* harmony export */   FONT_STYLE: () => (/* binding */ FONT_STYLE),
/* harmony export */   FONT_WEIGHT: () => (/* binding */ FONT_WEIGHT),
/* harmony export */   HEADING: () => (/* binding */ HEADING),
/* harmony export */   ICON_ALIGN: () => (/* binding */ ICON_ALIGN),
/* harmony export */   NORMAL_HOVER: () => (/* binding */ NORMAL_HOVER),
/* harmony export */   SEPERATOR_STYLES: () => (/* binding */ SEPERATOR_STYLES),
/* harmony export */   STORE_NAME: () => (/* binding */ STORE_NAME),
/* harmony export */   TEXT_ALIGN: () => (/* binding */ TEXT_ALIGN),
/* harmony export */   TEXT_DECORATION: () => (/* binding */ TEXT_DECORATION),
/* harmony export */   TEXT_TRANSFORM: () => (/* binding */ TEXT_TRANSFORM),
/* harmony export */   UNIT_TYPES: () => (/* binding */ UNIT_TYPES)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var STORE_NAME = 'frontis';
var UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var NORMAL_HOVER = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}];
var ICON_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon"),
  value: "icon"
}];
var TEXT_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignleft"
  })),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-aligncenter"
  })),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignright"
  })),
  value: "right"
}];
var HEADING = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H1", "frontis-blocks"),
  value: "h1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H2", "frontis-blocks"),
  value: "h2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H3", "frontis-blocks"),
  value: "h3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H4", "frontis-blocks"),
  value: "h4"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H5", "frontis-blocks"),
  value: "h5"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H6", "frontis-blocks"),
  value: "h6"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("P", "frontis-blocks"),
  value: "p"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Div", "frontis-blocks"),
  value: "span"
}];
var SEPERATOR_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "frontis-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "frontis-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "frontis-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "frontis-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "frontis-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "frontis-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "frontis-blocks"),
  value: "ridge"
}];
var BORDER_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "frontis-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "frontis-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "frontis-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "frontis-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "frontis-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "frontis-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "frontis-blocks"),
  value: "ridge"
}];
var FONT_WEIGHT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
  value: 'inherit'
}, {
  label: '100',
  value: '100'
}, {
  label: '200',
  value: '200'
}, {
  label: '300',
  value: '300'
}, {
  label: '400',
  value: '400'
}, {
  label: '500',
  value: '500'
}, {
  label: '600',
  value: '600'
}, {
  label: '700',
  value: '700'
}, {
  label: '800',
  value: '800'
}, {
  label: '900',
  value: '900'
}];
var FONT_STYLE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
  value: "inherit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-blocks"),
  value: "normal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-blocks"),
  value: "italic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-blocks"),
  value: "oblique"
}];
var TEXT_TRANSFORM = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
  value: "inherit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-blocks"),
  value: "capitalize"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-blocks"),
  value: "uppercase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-blocks"),
  value: "lowercase"
}];
var TEXT_DECORATION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
  value: "inherit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-blocks"),
  value: "underline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-blocks"),
  value: "overline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-blocks"),
  value: "line-through"
}];
var FONT_FAMILYS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
  value: "Default"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ABeeZee", "frontis-blocks"),
  value: "ABeeZee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abel", "frontis-blocks"),
  value: "Abel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abhaya Libre", "frontis-blocks"),
  value: "Abhaya Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abril Fatface", "frontis-blocks"),
  value: "Abril Fatface"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abyssinica SIL", "frontis-blocks"),
  value: "Abyssinica SIL"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aclonica", "frontis-blocks"),
  value: "Aclonica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Acme", "frontis-blocks"),
  value: "Acme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Actor", "frontis-blocks"),
  value: "Actor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Adamina", "frontis-blocks"),
  value: "Adamina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Adobe Blank", "frontis-blocks"),
  value: "Adobe Blank"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Advent Pro", "frontis-blocks"),
  value: "Advent Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aguafina Script", "frontis-blocks"),
  value: "Aguafina Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Akronim", "frontis-blocks"),
  value: "Akronim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("aksarabaligalang", "frontis-blocks"),
  value: "aksarabaligalang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aladin", "frontis-blocks"),
  value: "Aladin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aldrich", "frontis-blocks"),
  value: "Aldrich"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alef", "frontis-blocks"),
  value: "Alef"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("alefhebrew", "frontis-blocks"),
  value: "alefhebrew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya", "frontis-blocks"),
  value: "Alegreya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya Sans", "frontis-blocks"),
  value: "Alegreya Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya Sans SC", "frontis-blocks"),
  value: "Alegreya Sans SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya SC", "frontis-blocks"),
  value: "Alegreya SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aleo", "frontis-blocks"),
  value: "Aleo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alex Brush", "frontis-blocks"),
  value: "Alex Brush"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alfa Slab One", "frontis-blocks"),
  value: "Alfa Slab One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alice", "frontis-blocks"),
  value: "Alice"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alike", "frontis-blocks"),
  value: "Alike"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alike Angular", "frontis-blocks"),
  value: "Alike Angular"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allan", "frontis-blocks"),
  value: "Allan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allerta", "frontis-blocks"),
  value: "Allerta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allerta Stencil", "frontis-blocks"),
  value: "Allerta Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allura", "frontis-blocks"),
  value: "Allura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Almendra", "frontis-blocks"),
  value: "Almendra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Almendra Display", "frontis-blocks"),
  value: "Almendra Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Almendra SC", "frontis-blocks"),
  value: "Almendra SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amarante", "frontis-blocks"),
  value: "Amarante"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amaranth", "frontis-blocks"),
  value: "Amaranth"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amatic SC", "frontis-blocks"),
  value: "Amatic SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amethysta", "frontis-blocks"),
  value: "Amethysta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amiko", "frontis-blocks"),
  value: "Amiko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amiri", "frontis-blocks"),
  value: "Amiri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amita", "frontis-blocks"),
  value: "Amita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("amstelvaralpha", "frontis-blocks"),
  value: "amstelvaralpha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anaheim", "frontis-blocks"),
  value: "Anaheim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Andada", "frontis-blocks"),
  value: "Andada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Andada SC", "frontis-blocks"),
  value: "Andada SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Andika", "frontis-blocks"),
  value: "Andika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Angkor", "frontis-blocks"),
  value: "Angkor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Annie Use Your Telescope", "frontis-blocks"),
  value: "Annie Use Your Telescope"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anonymous Pro", "frontis-blocks"),
  value: "Anonymous Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antic", "frontis-blocks"),
  value: "Antic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antic Didone", "frontis-blocks"),
  value: "Antic Didone"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antic Slab", "frontis-blocks"),
  value: "Antic Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anton", "frontis-blocks"),
  value: "Anton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antonio", "frontis-blocks"),
  value: "Antonio"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arapey", "frontis-blocks"),
  value: "Arapey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arbutus", "frontis-blocks"),
  value: "Arbutus"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arbutus Slab", "frontis-blocks"),
  value: "Arbutus Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Architects Daughter", "frontis-blocks"),
  value: "Architects Daughter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Archivo", "frontis-blocks"),
  value: "Archivo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Archivo Black", "frontis-blocks"),
  value: "Archivo Black"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Archivo Narrow", "frontis-blocks"),
  value: "Archivo Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("archivovfbeta", "frontis-blocks"),
  value: "archivovfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aref Ruqaa", "frontis-blocks"),
  value: "Aref Ruqaa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arima Madurai", "frontis-blocks"),
  value: "Arima Madurai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arimo", "frontis-blocks"),
  value: "Arimo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arizonia", "frontis-blocks"),
  value: "Arizonia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Armata", "frontis-blocks"),
  value: "Armata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arsenal", "frontis-blocks"),
  value: "Arsenal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Artifika", "frontis-blocks"),
  value: "Artifika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arvo", "frontis-blocks"),
  value: "Arvo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arya", "frontis-blocks"),
  value: "Arya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asap", "frontis-blocks"),
  value: "Asap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asap Condensed", "frontis-blocks"),
  value: "Asap Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("asapvfbeta", "frontis-blocks"),
  value: "asapvfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asar", "frontis-blocks"),
  value: "Asar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asset", "frontis-blocks"),
  value: "Asset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Assistant", "frontis-blocks"),
  value: "Assistant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Astloch", "frontis-blocks"),
  value: "Astloch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asul", "frontis-blocks"),
  value: "Asul"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Athiti", "frontis-blocks"),
  value: "Athiti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Atomic Age", "frontis-blocks"),
  value: "Atomic Age"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aubrey", "frontis-blocks"),
  value: "Aubrey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Audiowide", "frontis-blocks"),
  value: "Audiowide"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Autour One", "frontis-blocks"),
  value: "Autour One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Average", "frontis-blocks"),
  value: "Average"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Average Sans", "frontis-blocks"),
  value: "Average Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Gruesa Libre", "frontis-blocks"),
  value: "Averia Gruesa Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Libre", "frontis-blocks"),
  value: "Averia Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Sans Libre", "frontis-blocks"),
  value: "Averia Sans Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Serif Libre", "frontis-blocks"),
  value: "Averia Serif Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("B612", "frontis-blocks"),
  value: "B612"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("B612 Mono", "frontis-blocks"),
  value: "B612 Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bad Script", "frontis-blocks"),
  value: "Bad Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bahiana", "frontis-blocks"),
  value: "Bahiana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bahianita", "frontis-blocks"),
  value: "Bahianita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bai Jamjuree", "frontis-blocks"),
  value: "Bai Jamjuree"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo", "frontis-blocks"),
  value: "Baloo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Bhai", "frontis-blocks"),
  value: "Baloo Bhai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Bhaijaan", "frontis-blocks"),
  value: "Baloo Bhaijaan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Bhaina", "frontis-blocks"),
  value: "Baloo Bhaina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Chettan", "frontis-blocks"),
  value: "Baloo Chettan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Da", "frontis-blocks"),
  value: "Baloo Da"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Paaji", "frontis-blocks"),
  value: "Baloo Paaji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Tamma", "frontis-blocks"),
  value: "Baloo Tamma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Tammudu", "frontis-blocks"),
  value: "Baloo Tammudu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Thambi", "frontis-blocks"),
  value: "Baloo Thambi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Balthazar", "frontis-blocks"),
  value: "Balthazar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bangers", "frontis-blocks"),
  value: "Bangers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barlow", "frontis-blocks"),
  value: "Barlow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barlow Condensed", "frontis-blocks"),
  value: "Barlow Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barlow Semi Condensed", "frontis-blocks"),
  value: "Barlow Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barriecito", "frontis-blocks"),
  value: "Barriecito"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barrio", "frontis-blocks"),
  value: "Barrio"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Basic", "frontis-blocks"),
  value: "Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Battambang", "frontis-blocks"),
  value: "Battambang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baumans", "frontis-blocks"),
  value: "Baumans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bayon", "frontis-blocks"),
  value: "Bayon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Belgrano", "frontis-blocks"),
  value: "Belgrano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bellefair", "frontis-blocks"),
  value: "Bellefair"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Belleza", "frontis-blocks"),
  value: "Belleza"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("BenchNine", "frontis-blocks"),
  value: "BenchNine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bentham", "frontis-blocks"),
  value: "Bentham"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Berkshire Swash", "frontis-blocks"),
  value: "Berkshire Swash"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Beth Ellen", "frontis-blocks"),
  value: "Beth Ellen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bevan", "frontis-blocks"),
  value: "Bevan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bhavuka", "frontis-blocks"),
  value: "Bhavuka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bigelow Rules", "frontis-blocks"),
  value: "Bigelow Rules"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bigshot One", "frontis-blocks"),
  value: "Bigshot One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bilbo", "frontis-blocks"),
  value: "Bilbo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bilbo Swash Caps", "frontis-blocks"),
  value: "Bilbo Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bio Rhyme", "frontis-blocks"),
  value: "Bio Rhyme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bio Rhyme Expanded", "frontis-blocks"),
  value: "Bio Rhyme Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Biryani", "frontis-blocks"),
  value: "Biryani"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bitter", "frontis-blocks"),
  value: "Bitter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black And White Picture", "frontis-blocks"),
  value: "Black And White Picture"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black Han Sans", "frontis-blocks"),
  value: "Black Han Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black Ops One", "frontis-blocks"),
  value: "Black Ops One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bokor", "frontis-blocks"),
  value: "Bokor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bonbon", "frontis-blocks"),
  value: "Bonbon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Boogaloo", "frontis-blocks"),
  value: "Boogaloo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bowlby One", "frontis-blocks"),
  value: "Bowlby One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bowlby One SC", "frontis-blocks"),
  value: "Bowlby One SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Brawler", "frontis-blocks"),
  value: "Brawler"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bree Serif", "frontis-blocks"),
  value: "Bree Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bruno Ace", "frontis-blocks"),
  value: "Bruno Ace"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bruno Ace SC", "frontis-blocks"),
  value: "Bruno Ace SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bubblegum Sans", "frontis-blocks"),
  value: "Bubblegum Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bubbler One", "frontis-blocks"),
  value: "Bubbler One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buda", "frontis-blocks"),
  value: "Buda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buenard", "frontis-blocks"),
  value: "Buenard"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee", "frontis-blocks"),
  value: "Bungee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Hairline", "frontis-blocks"),
  value: "Bungee Hairline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Inline", "frontis-blocks"),
  value: "Bungee Inline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Outline", "frontis-blocks"),
  value: "Bungee Outline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Shade", "frontis-blocks"),
  value: "Bungee Shade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Butcherman", "frontis-blocks"),
  value: "Butcherman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Butcherman Caps", "frontis-blocks"),
  value: "Butcherman Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Butterfly Kids", "frontis-blocks"),
  value: "Butterfly Kids"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cabin", "frontis-blocks"),
  value: "Cabin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cabin Condensed", "frontis-blocks"),
  value: "Cabin Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cabin Sketch", "frontis-blocks"),
  value: "Cabin Sketch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("cabinvfbeta", "frontis-blocks"),
  value: "cabinvfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caesar Dressing", "frontis-blocks"),
  value: "Caesar Dressing"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cagliostro", "frontis-blocks"),
  value: "Cagliostro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cairo", "frontis-blocks"),
  value: "Cairo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Calligraffitti", "frontis-blocks"),
  value: "Calligraffitti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cambay", "frontis-blocks"),
  value: "Cambay"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cambo", "frontis-blocks"),
  value: "Cambo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Candal", "frontis-blocks"),
  value: "Candal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cantarell", "frontis-blocks"),
  value: "Cantarell"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cantata One", "frontis-blocks"),
  value: "Cantata One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cantora One", "frontis-blocks"),
  value: "Cantora One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capriola", "frontis-blocks"),
  value: "Capriola"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cardo", "frontis-blocks"),
  value: "Cardo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carme", "frontis-blocks"),
  value: "Carme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carrois Gothic", "frontis-blocks"),
  value: "Carrois Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carrois Gothic SC", "frontis-blocks"),
  value: "Carrois Gothic SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carter One", "frontis-blocks"),
  value: "Carter One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Catamaran", "frontis-blocks"),
  value: "Catamaran"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caudex", "frontis-blocks"),
  value: "Caudex"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caveat", "frontis-blocks"),
  value: "Caveat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caveat Brush", "frontis-blocks"),
  value: "Caveat Brush"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cedarville Cursive", "frontis-blocks"),
  value: "Cedarville Cursive"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ceviche One", "frontis-blocks"),
  value: "Ceviche One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chakra Petch", "frontis-blocks"),
  value: "Chakra Petch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Changa", "frontis-blocks"),
  value: "Changa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Changa One", "frontis-blocks"),
  value: "Changa One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chango", "frontis-blocks"),
  value: "Chango"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Charm", "frontis-blocks"),
  value: "Charm"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Charmonman", "frontis-blocks"),
  value: "Charmonman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chau Philomene One", "frontis-blocks"),
  value: "Chau Philomene One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chela One", "frontis-blocks"),
  value: "Chela One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chelsea Market", "frontis-blocks"),
  value: "Chelsea Market"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chenla", "frontis-blocks"),
  value: "Chenla"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cherry Cream Soda", "frontis-blocks"),
  value: "Cherry Cream Soda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cherry Swash", "frontis-blocks"),
  value: "Cherry Swash"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chewy", "frontis-blocks"),
  value: "Chewy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chicle", "frontis-blocks"),
  value: "Chicle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chilanka", "frontis-blocks"),
  value: "Chilanka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chivo", "frontis-blocks"),
  value: "Chivo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chonburi", "frontis-blocks"),
  value: "Chonburi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cinzel", "frontis-blocks"),
  value: "Cinzel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cinzel Decorative", "frontis-blocks"),
  value: "Cinzel Decorative"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Clicker Script", "frontis-blocks"),
  value: "Clicker Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coda", "frontis-blocks"),
  value: "Coda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coda Caption", "frontis-blocks"),
  value: "Coda Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Codystar", "frontis-blocks"),
  value: "Codystar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coiny", "frontis-blocks"),
  value: "Coiny"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Combo", "frontis-blocks"),
  value: "Combo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Comfortaa", "frontis-blocks"),
  value: "Comfortaa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coming Soon", "frontis-blocks"),
  value: "Coming Soon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Concert One", "frontis-blocks"),
  value: "Concert One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Condiment", "frontis-blocks"),
  value: "Condiment"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content", "frontis-blocks"),
  value: "Content"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contrail One", "frontis-blocks"),
  value: "Contrail One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Convergence", "frontis-blocks"),
  value: "Convergence"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cookie", "frontis-blocks"),
  value: "Cookie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Copse", "frontis-blocks"),
  value: "Copse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Corben", "frontis-blocks"),
  value: "Corben"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant", "frontis-blocks"),
  value: "Cormorant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Garamond", "frontis-blocks"),
  value: "Cormorant Garamond"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Infant", "frontis-blocks"),
  value: "Cormorant Infant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant SC", "frontis-blocks"),
  value: "Cormorant SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Unicase", "frontis-blocks"),
  value: "Cormorant Unicase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Upright", "frontis-blocks"),
  value: "Cormorant Upright"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Courgette", "frontis-blocks"),
  value: "Courgette"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cousine", "frontis-blocks"),
  value: "Cousine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coustard", "frontis-blocks"),
  value: "Coustard"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Covered By Your Grace", "frontis-blocks"),
  value: "Covered By Your Grace"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crafty Girls", "frontis-blocks"),
  value: "Crafty Girls"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Creepster", "frontis-blocks"),
  value: "Creepster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Creepster Caps", "frontis-blocks"),
  value: "Creepster Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crete Round", "frontis-blocks"),
  value: "Crete Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crimson Pro", "frontis-blocks"),
  value: "Crimson Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crimson Text", "frontis-blocks"),
  value: "Crimson Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Croissant One", "frontis-blocks"),
  value: "Croissant One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crushed", "frontis-blocks"),
  value: "Crushed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cuprum", "frontis-blocks"),
  value: "Cuprum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cute Font", "frontis-blocks"),
  value: "Cute Font"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cutive", "frontis-blocks"),
  value: "Cutive"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cutive Mono", "frontis-blocks"),
  value: "Cutive Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Damion", "frontis-blocks"),
  value: "Damion"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dancing Script", "frontis-blocks"),
  value: "Dancing Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dangrek", "frontis-blocks"),
  value: "Dangrek"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Darker Grotesque", "frontis-blocks"),
  value: "Darker Grotesque"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dawning of a New Day", "frontis-blocks"),
  value: "Dawning of a New Day"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Days One", "frontis-blocks"),
  value: "Days One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("decovaralpha", "frontis-blocks"),
  value: "decovaralpha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dekko", "frontis-blocks"),
  value: "Dekko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delius", "frontis-blocks"),
  value: "Delius"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delius Swash Caps", "frontis-blocks"),
  value: "Delius Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delius Unicase", "frontis-blocks"),
  value: "Delius Unicase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Della Respira", "frontis-blocks"),
  value: "Della Respira"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Denk One", "frontis-blocks"),
  value: "Denk One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Devonshire", "frontis-blocks"),
  value: "Devonshire"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dhurjati", "frontis-blocks"),
  value: "Dhurjati"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dhyana", "frontis-blocks"),
  value: "Dhyana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Didact Gothic", "frontis-blocks"),
  value: "Didact Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Digital Numbers", "frontis-blocks"),
  value: "Digital Numbers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diplomata", "frontis-blocks"),
  value: "Diplomata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diplomata SC", "frontis-blocks"),
  value: "Diplomata SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DM Sans", "frontis-blocks"),
  value: "DM Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DM Serif Display", "frontis-blocks"),
  value: "DM Serif Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DM Serif Text", "frontis-blocks"),
  value: "DM Serif Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Do Hyeon", "frontis-blocks"),
  value: "Do Hyeon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dokdo", "frontis-blocks"),
  value: "Dokdo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Domine", "frontis-blocks"),
  value: "Domine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Donegal One", "frontis-blocks"),
  value: "Donegal One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Doppio One", "frontis-blocks"),
  value: "Doppio One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dorsa", "frontis-blocks"),
  value: "Dorsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dosis", "frontis-blocks"),
  value: "Dosis"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dr Sugiyama", "frontis-blocks"),
  value: "Dr Sugiyama"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duru Sans", "frontis-blocks"),
  value: "Duru Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynalight", "frontis-blocks"),
  value: "Dynalight"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eagle Lake", "frontis-blocks"),
  value: "Eagle Lake"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("East Sea Dokdo", "frontis-blocks"),
  value: "East Sea Dokdo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eater", "frontis-blocks"),
  value: "Eater"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eater Caps", "frontis-blocks"),
  value: "Eater Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("EB Garamond", "frontis-blocks"),
  value: "EB Garamond"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Economica", "frontis-blocks"),
  value: "Economica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eczar", "frontis-blocks"),
  value: "Eczar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ek Mukta", "frontis-blocks"),
  value: "Ek Mukta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("El Messiri", "frontis-blocks"),
  value: "El Messiri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Electrolize", "frontis-blocks"),
  value: "Electrolize"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Elsie", "frontis-blocks"),
  value: "Elsie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Elsie Swash Caps", "frontis-blocks"),
  value: "Elsie Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Emblema One", "frontis-blocks"),
  value: "Emblema One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Emilys Candy", "frontis-blocks"),
  value: "Emilys Candy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans", "frontis-blocks"),
  value: "Encode Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Condensed", "frontis-blocks"),
  value: "Encode Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Expanded", "frontis-blocks"),
  value: "Encode Sans Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Semi Condensed", "frontis-blocks"),
  value: "Encode Sans Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Semi Expanded", "frontis-blocks"),
  value: "Encode Sans Semi Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Engagement", "frontis-blocks"),
  value: "Engagement"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Englebert", "frontis-blocks"),
  value: "Englebert"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enriqueta", "frontis-blocks"),
  value: "Enriqueta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Erica One", "frontis-blocks"),
  value: "Erica One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Esteban", "frontis-blocks"),
  value: "Esteban"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Euphoria Script", "frontis-blocks"),
  value: "Euphoria Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ewert", "frontis-blocks"),
  value: "Ewert"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Exo", "frontis-blocks"),
  value: "Exo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Exo 2", "frontis-blocks"),
  value: "Exo 2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Expletus Sans", "frontis-blocks"),
  value: "Expletus Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fahkwang", "frontis-blocks"),
  value: "Fahkwang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fanwood Text", "frontis-blocks"),
  value: "Fanwood Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Farro", "frontis-blocks"),
  value: "Farro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Farsan", "frontis-blocks"),
  value: "Farsan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fascinate", "frontis-blocks"),
  value: "Fascinate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fascinate Inline", "frontis-blocks"),
  value: "Fascinate Inline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Faster One", "frontis-blocks"),
  value: "Faster One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fasthand", "frontis-blocks"),
  value: "Fasthand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fauna One", "frontis-blocks"),
  value: "Fauna One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Faustina", "frontis-blocks"),
  value: "Faustina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("faustinavfbeta", "frontis-blocks"),
  value: "faustinavfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Federant", "frontis-blocks"),
  value: "Federant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Federo", "frontis-blocks"),
  value: "Federo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Felipa", "frontis-blocks"),
  value: "Felipa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fenix", "frontis-blocks"),
  value: "Fenix"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Finger Paint", "frontis-blocks"),
  value: "Finger Paint"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Code", "frontis-blocks"),
  value: "Fira Code"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Mono", "frontis-blocks"),
  value: "Fira Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Sans", "frontis-blocks"),
  value: "Fira Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Sans Condensed", "frontis-blocks"),
  value: "Fira Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Sans Extra Condensed", "frontis-blocks"),
  value: "Fira Sans Extra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fjalla One", "frontis-blocks"),
  value: "Fjalla One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fjord One", "frontis-blocks"),
  value: "Fjord One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flamenco", "frontis-blocks"),
  value: "Flamenco"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flavors", "frontis-blocks"),
  value: "Flavors"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fondamento", "frontis-blocks"),
  value: "Fondamento"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fontdiner Swanky", "frontis-blocks"),
  value: "Fontdiner Swanky"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Forum", "frontis-blocks"),
  value: "Forum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Francois One", "frontis-blocks"),
  value: "Francois One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Frank Ruhl Libre", "frontis-blocks"),
  value: "Frank Ruhl Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Freckle Face", "frontis-blocks"),
  value: "Freckle Face"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fredericka the Great", "frontis-blocks"),
  value: "Fredericka the Great"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fredoka One", "frontis-blocks"),
  value: "Fredoka One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Freehand", "frontis-blocks"),
  value: "Freehand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fresca", "frontis-blocks"),
  value: "Fresca"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Frijole", "frontis-blocks"),
  value: "Frijole"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fruktur", "frontis-blocks"),
  value: "Fruktur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fugaz One", "frontis-blocks"),
  value: "Fugaz One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gabriela", "frontis-blocks"),
  value: "Gabriela"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gaegu", "frontis-blocks"),
  value: "Gaegu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gafata", "frontis-blocks"),
  value: "Gafata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Galada", "frontis-blocks"),
  value: "Galada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Galdeano", "frontis-blocks"),
  value: "Galdeano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Galindo", "frontis-blocks"),
  value: "Galindo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gamja Flower", "frontis-blocks"),
  value: "Gamja Flower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gayathri", "frontis-blocks"),
  value: "Gayathri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gemunu Libre", "frontis-blocks"),
  value: "Gemunu Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gentium Basic", "frontis-blocks"),
  value: "Gentium Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gentium Book Basic", "frontis-blocks"),
  value: "Gentium Book Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Geo", "frontis-blocks"),
  value: "Geo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Geostar", "frontis-blocks"),
  value: "Geostar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Geostar Fill", "frontis-blocks"),
  value: "Geostar Fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Germania One", "frontis-blocks"),
  value: "Germania One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("GFS Didot", "frontis-blocks"),
  value: "GFS Didot"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("GFS Neohellenic", "frontis-blocks"),
  value: "GFS Neohellenic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gidugu", "frontis-blocks"),
  value: "Gidugu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gilda Display", "frontis-blocks"),
  value: "Gilda Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Give You Glory", "frontis-blocks"),
  value: "Give You Glory"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Glass Antiqua", "frontis-blocks"),
  value: "Glass Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Glegoo", "frontis-blocks"),
  value: "Glegoo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gloria Hallelujah", "frontis-blocks"),
  value: "Gloria Hallelujah"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Goblin One", "frontis-blocks"),
  value: "Goblin One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gochi Hand", "frontis-blocks"),
  value: "Gochi Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gorditas", "frontis-blocks"),
  value: "Gorditas"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gothic A1", "frontis-blocks"),
  value: "Gothic A1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Goudy Bookletter 1911", "frontis-blocks"),
  value: "Goudy Bookletter 1911"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Graduate", "frontis-blocks"),
  value: "Graduate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grand Hotel", "frontis-blocks"),
  value: "Grand Hotel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gravitas One", "frontis-blocks"),
  value: "Gravitas One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Great Vibes", "frontis-blocks"),
  value: "Great Vibes"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grenze", "frontis-blocks"),
  value: "Grenze"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Griffy", "frontis-blocks"),
  value: "Griffy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gruppo", "frontis-blocks"),
  value: "Gruppo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gudea", "frontis-blocks"),
  value: "Gudea"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gugi", "frontis-blocks"),
  value: "Gugi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gurajada", "frontis-blocks"),
  value: "Gurajada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Habibi", "frontis-blocks"),
  value: "Habibi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Halant", "frontis-blocks"),
  value: "Halant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hammersmith One", "frontis-blocks"),
  value: "Hammersmith One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hanalei", "frontis-blocks"),
  value: "Hanalei"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hanalei Fill", "frontis-blocks"),
  value: "Hanalei Fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Handlee", "frontis-blocks"),
  value: "Handlee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("hanna", "frontis-blocks"),
  value: "hanna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("hannari", "frontis-blocks"),
  value: "hannari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hanuman", "frontis-blocks"),
  value: "Hanuman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Happy Monkey", "frontis-blocks"),
  value: "Happy Monkey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Harmattan", "frontis-blocks"),
  value: "Harmattan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Headland One", "frontis-blocks"),
  value: "Headland One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heebo", "frontis-blocks"),
  value: "Heebo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Henny Penny", "frontis-blocks"),
  value: "Henny Penny"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hermeneus One", "frontis-blocks"),
  value: "Hermeneus One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Herr Von Muellerhoff", "frontis-blocks"),
  value: "Herr Von Muellerhoff"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hi Melody", "frontis-blocks"),
  value: "Hi Melody"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind", "frontis-blocks"),
  value: "Hind"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Colombo", "frontis-blocks"),
  value: "Hind Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Guntur", "frontis-blocks"),
  value: "Hind Guntur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Jalandhar", "frontis-blocks"),
  value: "Hind Jalandhar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Kochi", "frontis-blocks"),
  value: "Hind Kochi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Madurai", "frontis-blocks"),
  value: "Hind Madurai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Mysuru", "frontis-blocks"),
  value: "Hind Mysuru"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Siliguri", "frontis-blocks"),
  value: "Hind Siliguri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Vadodara", "frontis-blocks"),
  value: "Hind Vadodara"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Holtwood One SC", "frontis-blocks"),
  value: "Holtwood One SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Homemade Apple", "frontis-blocks"),
  value: "Homemade Apple"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Homenaje", "frontis-blocks"),
  value: "Homenaje"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Mono", "frontis-blocks"),
  value: "IBM Plex Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Sans", "frontis-blocks"),
  value: "IBM Plex Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Sans Condensed", "frontis-blocks"),
  value: "IBM Plex Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Serif", "frontis-blocks"),
  value: "IBM Plex Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Iceberg", "frontis-blocks"),
  value: "Iceberg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Iceland", "frontis-blocks"),
  value: "Iceland"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Double Pica", "frontis-blocks"),
  value: "IM Fell Double Pica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Double Pica SC", "frontis-blocks"),
  value: "IM Fell Double Pica SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell DW Pica", "frontis-blocks"),
  value: "IM Fell DW Pica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell DW Pica SC", "frontis-blocks"),
  value: "IM Fell DW Pica SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell English", "frontis-blocks"),
  value: "IM Fell English"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell English SC", "frontis-blocks"),
  value: "IM Fell English SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell French Canon", "frontis-blocks"),
  value: "IM Fell French Canon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell French Canon SC", "frontis-blocks"),
  value: "IM Fell French Canon SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Great Primer", "frontis-blocks"),
  value: "IM Fell Great Primer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Great Primer SC", "frontis-blocks"),
  value: "IM Fell Great Primer SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Imprima", "frontis-blocks"),
  value: "Imprima"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inconsolata", "frontis-blocks"),
  value: "Inconsolata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inder", "frontis-blocks"),
  value: "Inder"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Indie Flower", "frontis-blocks"),
  value: "Indie Flower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inika", "frontis-blocks"),
  value: "Inika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inknut Antiqua", "frontis-blocks"),
  value: "Inknut Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Irish Grover", "frontis-blocks"),
  value: "Irish Grover"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Istok Web", "frontis-blocks"),
  value: "Istok Web"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italiana", "frontis-blocks"),
  value: "Italiana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italianno", "frontis-blocks"),
  value: "Italianno"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Itim", "frontis-blocks"),
  value: "Itim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jacques Francois", "frontis-blocks"),
  value: "Jacques Francois"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jacques Francois Shadow", "frontis-blocks"),
  value: "Jacques Francois Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jaldi", "frontis-blocks"),
  value: "Jaldi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jejugothic", "frontis-blocks"),
  value: "jejugothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jejuhallasan", "frontis-blocks"),
  value: "jejuhallasan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jejumyeongjo", "frontis-blocks"),
  value: "jejumyeongjo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jim Nightshade", "frontis-blocks"),
  value: "Jim Nightshade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jockey One", "frontis-blocks"),
  value: "Jockey One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jolly Lodger", "frontis-blocks"),
  value: "Jolly Lodger"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jomhuria", "frontis-blocks"),
  value: "Jomhuria"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jomolhari", "frontis-blocks"),
  value: "jomolhari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Josefin Sans", "frontis-blocks"),
  value: "Josefin Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Josefin Sans Std Light", "frontis-blocks"),
  value: "Josefin Sans Std Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Josefin Slab", "frontis-blocks"),
  value: "Josefin Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Joti One", "frontis-blocks"),
  value: "Joti One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jua", "frontis-blocks"),
  value: "Jua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Judson", "frontis-blocks"),
  value: "Judson"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Julee", "frontis-blocks"),
  value: "Julee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Julius Sans One", "frontis-blocks"),
  value: "Julius Sans One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Junge", "frontis-blocks"),
  value: "Junge"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jura", "frontis-blocks"),
  value: "Jura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Just Another Hand", "frontis-blocks"),
  value: "Just Another Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Just Me Again Down Here", "frontis-blocks"),
  value: "Just Me Again Down Here"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("K2D", "frontis-blocks"),
  value: "K2D"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kadwa", "frontis-blocks"),
  value: "Kadwa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kalam", "frontis-blocks"),
  value: "Kalam"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kameron", "frontis-blocks"),
  value: "Kameron"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kanit", "frontis-blocks"),
  value: "Kanit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kantumruy", "frontis-blocks"),
  value: "Kantumruy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karla", "frontis-blocks"),
  value: "Karla"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karla Tamil Inclined", "frontis-blocks"),
  value: "Karla Tamil Inclined"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karla Tamil Upright", "frontis-blocks"),
  value: "Karla Tamil Upright"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karma", "frontis-blocks"),
  value: "Karma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Katibeh", "frontis-blocks"),
  value: "Katibeh"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kaushan Script", "frontis-blocks"),
  value: "Kaushan Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kavivanar", "frontis-blocks"),
  value: "Kavivanar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kavoon", "frontis-blocks"),
  value: "Kavoon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kdam Thmor", "frontis-blocks"),
  value: "Kdam Thmor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Keania One", "frontis-blocks"),
  value: "Keania One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kelly Slab", "frontis-blocks"),
  value: "Kelly Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kenia", "frontis-blocks"),
  value: "Kenia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Khand", "frontis-blocks"),
  value: "Khand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Khmer", "frontis-blocks"),
  value: "Khmer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Khula", "frontis-blocks"),
  value: "Khula"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("khyay", "frontis-blocks"),
  value: "khyay"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kirang Haerang", "frontis-blocks"),
  value: "Kirang Haerang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kite One", "frontis-blocks"),
  value: "Kite One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Knewave", "frontis-blocks"),
  value: "Knewave"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kodchasan", "frontis-blocks"),
  value: "Kodchasan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("KoHo", "frontis-blocks"),
  value: "KoHo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("kokoro", "frontis-blocks"),
  value: "kokoro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("kopubbatang", "frontis-blocks"),
  value: "kopubbatang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kotta One", "frontis-blocks"),
  value: "Kotta One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Koulen", "frontis-blocks"),
  value: "Koulen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kranky", "frontis-blocks"),
  value: "Kranky"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kreon", "frontis-blocks"),
  value: "Kreon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kristi", "frontis-blocks"),
  value: "Kristi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Krona One", "frontis-blocks"),
  value: "Krona One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Krub", "frontis-blocks"),
  value: "Krub"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kumar One", "frontis-blocks"),
  value: "Kumar One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kurale", "frontis-blocks"),
  value: "Kurale"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("La Belle Aurore", "frontis-blocks"),
  value: "La Belle Aurore"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lacquer", "frontis-blocks"),
  value: "Lacquer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Laila", "frontis-blocks"),
  value: "Laila"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lakki Reddy", "frontis-blocks"),
  value: "Lakki Reddy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lalezar", "frontis-blocks"),
  value: "Lalezar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lancelot", "frontis-blocks"),
  value: "Lancelot"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("laomuangdon", "frontis-blocks"),
  value: "laomuangdon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("laomuangkhong", "frontis-blocks"),
  value: "laomuangkhong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("laosanspro", "frontis-blocks"),
  value: "laosanspro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lateef", "frontis-blocks"),
  value: "Lateef"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lato", "frontis-blocks"),
  value: "Lato"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("League Script", "frontis-blocks"),
  value: "League Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Leckerli One", "frontis-blocks"),
  value: "Leckerli One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ledger", "frontis-blocks"),
  value: "Ledger"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lekton", "frontis-blocks"),
  value: "Lekton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lemon", "frontis-blocks"),
  value: "Lemon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lemonada", "frontis-blocks"),
  value: "Lemonada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 128", "frontis-blocks"),
  value: "Libre Barcode 128"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 128 Text", "frontis-blocks"),
  value: "Libre Barcode 128 Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39", "frontis-blocks"),
  value: "Libre Barcode 39"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39 Extended", "frontis-blocks"),
  value: "Libre Barcode 39 Extended"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39 Extended Text", "frontis-blocks"),
  value: "Libre Barcode 39 Extended Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39 Text", "frontis-blocks"),
  value: "Libre Barcode 39 Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Baskerville", "frontis-blocks"),
  value: "Libre Baskerville"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Caslon Display", "frontis-blocks"),
  value: "Libre Caslon Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Caslon Text", "frontis-blocks"),
  value: "Libre Caslon Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Franklin", "frontis-blocks"),
  value: "Libre Franklin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Life Savers", "frontis-blocks"),
  value: "Life Savers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lilita One", "frontis-blocks"),
  value: "Lilita One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lily Script One", "frontis-blocks"),
  value: "Lily Script One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Limelight", "frontis-blocks"),
  value: "Limelight"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Linden Hill", "frontis-blocks"),
  value: "Linden Hill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Literata", "frontis-blocks"),
  value: "Literata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Liu Jian Mao Cao", "frontis-blocks"),
  value: "Liu Jian Mao Cao"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Livvic", "frontis-blocks"),
  value: "Livvic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lobster", "frontis-blocks"),
  value: "Lobster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lobster Two", "frontis-blocks"),
  value: "Lobster Two"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lohit Bengali", "frontis-blocks"),
  value: "Lohit Bengali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lohit Tamil", "frontis-blocks"),
  value: "Lohit Tamil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("lohitdevanagari", "frontis-blocks"),
  value: "lohitdevanagari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Outline", "frontis-blocks"),
  value: "Londrina Outline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Shadow", "frontis-blocks"),
  value: "Londrina Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Sketch", "frontis-blocks"),
  value: "Londrina Sketch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Solid", "frontis-blocks"),
  value: "Londrina Solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Long Cang", "frontis-blocks"),
  value: "Long Cang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lora", "frontis-blocks"),
  value: "Lora"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Love Ya Like A Sister", "frontis-blocks"),
  value: "Love Ya Like A Sister"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loved by the King", "frontis-blocks"),
  value: "Loved by the King"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lovers Quarrel", "frontis-blocks"),
  value: "Lovers Quarrel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Luckiest Guy", "frontis-blocks"),
  value: "Luckiest Guy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lusitana", "frontis-blocks"),
  value: "Lusitana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lustria", "frontis-blocks"),
  value: "Lustria"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ma Shan Zheng", "frontis-blocks"),
  value: "Ma Shan Zheng"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Macondo", "frontis-blocks"),
  value: "Macondo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Macondo Swash Caps", "frontis-blocks"),
  value: "Macondo Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mada", "frontis-blocks"),
  value: "Mada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Magra", "frontis-blocks"),
  value: "Magra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maiden Orange", "frontis-blocks"),
  value: "Maiden Orange"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maitree", "frontis-blocks"),
  value: "Maitree"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Major Mono Display", "frontis-blocks"),
  value: "Major Mono Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mako", "frontis-blocks"),
  value: "Mako"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mali", "frontis-blocks"),
  value: "Mali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mallanna", "frontis-blocks"),
  value: "Mallanna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mandali", "frontis-blocks"),
  value: "Mandali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Manjari", "frontis-blocks"),
  value: "Manjari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Manuale", "frontis-blocks"),
  value: "Manuale"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marcellus", "frontis-blocks"),
  value: "Marcellus"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marcellus SC", "frontis-blocks"),
  value: "Marcellus SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marck Script", "frontis-blocks"),
  value: "Marck Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margarine", "frontis-blocks"),
  value: "Margarine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marko One", "frontis-blocks"),
  value: "Marko One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marmelad", "frontis-blocks"),
  value: "Marmelad"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Martel", "frontis-blocks"),
  value: "Martel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Martel Sans", "frontis-blocks"),
  value: "Martel Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marvel", "frontis-blocks"),
  value: "Marvel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mate", "frontis-blocks"),
  value: "Mate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mate SC", "frontis-blocks"),
  value: "Mate SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maven Pro", "frontis-blocks"),
  value: "Maven Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("mavenprovfbeta", "frontis-blocks"),
  value: "mavenprovfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("McLaren", "frontis-blocks"),
  value: "McLaren"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Meddon", "frontis-blocks"),
  value: "Meddon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("MedievalSharp", "frontis-blocks"),
  value: "MedievalSharp"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Medula One", "frontis-blocks"),
  value: "Medula One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Meera Inimai", "frontis-blocks"),
  value: "Meera Inimai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Megrim", "frontis-blocks"),
  value: "Megrim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Meie Script", "frontis-blocks"),
  value: "Meie Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merge One", "frontis-blocks"),
  value: "Merge One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merienda", "frontis-blocks"),
  value: "Merienda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merienda One", "frontis-blocks"),
  value: "Merienda One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merriweather", "frontis-blocks"),
  value: "Merriweather"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merriweather Sans", "frontis-blocks"),
  value: "Merriweather Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mervale Script", "frontis-blocks"),
  value: "Mervale Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metal", "frontis-blocks"),
  value: "Metal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metal Mania", "frontis-blocks"),
  value: "Metal Mania"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metamorphous", "frontis-blocks"),
  value: "Metamorphous"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metrophobic", "frontis-blocks"),
  value: "Metrophobic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miama", "frontis-blocks"),
  value: "Miama"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Michroma", "frontis-blocks"),
  value: "Michroma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Milonga", "frontis-blocks"),
  value: "Milonga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miltonian", "frontis-blocks"),
  value: "Miltonian"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miltonian Tattoo", "frontis-blocks"),
  value: "Miltonian Tattoo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mina", "frontis-blocks"),
  value: "Mina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miniver", "frontis-blocks"),
  value: "Miniver"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miriam Libre", "frontis-blocks"),
  value: "Miriam Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miss Fajardose", "frontis-blocks"),
  value: "Miss Fajardose"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miss Saint Delafield", "frontis-blocks"),
  value: "Miss Saint Delafield"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Modak", "frontis-blocks"),
  value: "Modak"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Modern Antiqua", "frontis-blocks"),
  value: "Modern Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Molengo", "frontis-blocks"),
  value: "Molengo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Molle", "frontis-blocks"),
  value: "Molle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monda", "frontis-blocks"),
  value: "Monda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monofett", "frontis-blocks"),
  value: "Monofett"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monoton", "frontis-blocks"),
  value: "Monoton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monsieur La Doulaise", "frontis-blocks"),
  value: "Monsieur La Doulaise"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montaga", "frontis-blocks"),
  value: "Montaga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montez", "frontis-blocks"),
  value: "Montez"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montserrat", "frontis-blocks"),
  value: "Montserrat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montserrat Alternates", "frontis-blocks"),
  value: "Montserrat Alternates"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montserrat Subrayada", "frontis-blocks"),
  value: "Montserrat Subrayada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Moul", "frontis-blocks"),
  value: "Moul"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Moulpali", "frontis-blocks"),
  value: "Moulpali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mountains of Christmas", "frontis-blocks"),
  value: "Mountains of Christmas"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mouse Memoirs", "frontis-blocks"),
  value: "Mouse Memoirs"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("mplus1p", "frontis-blocks"),
  value: "mplus1p"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr Bedford", "frontis-blocks"),
  value: "Mr Bedford"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr Bedfort", "frontis-blocks"),
  value: "Mr Bedfort"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr Dafoe", "frontis-blocks"),
  value: "Mr Dafoe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr De Haviland", "frontis-blocks"),
  value: "Mr De Haviland"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mrs Saint Delafield", "frontis-blocks"),
  value: "Mrs Saint Delafield"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mrs Sheppards", "frontis-blocks"),
  value: "Mrs Sheppards"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta", "frontis-blocks"),
  value: "Mukta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta Mahee", "frontis-blocks"),
  value: "Mukta Mahee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta Malar", "frontis-blocks"),
  value: "Mukta Malar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta Vaani", "frontis-blocks"),
  value: "Mukta Vaani"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Muli", "frontis-blocks"),
  value: "Muli"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("myanmarsanspro", "frontis-blocks"),
  value: "myanmarsanspro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mystery Quest", "frontis-blocks"),
  value: "Mystery Quest"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Brush Script", "frontis-blocks"),
  value: "Nanum Brush Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Gothic", "frontis-blocks"),
  value: "Nanum Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Gothic Coding", "frontis-blocks"),
  value: "Nanum Gothic Coding"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Myeongjo", "frontis-blocks"),
  value: "Nanum Myeongjo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Pen Script", "frontis-blocks"),
  value: "Nanum Pen Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("NATS", "frontis-blocks"),
  value: "NATS"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Neucha", "frontis-blocks"),
  value: "Neucha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Neuton", "frontis-blocks"),
  value: "Neuton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("New Rocker", "frontis-blocks"),
  value: "New Rocker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("News Cycle", "frontis-blocks"),
  value: "News Cycle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("nicomoji", "frontis-blocks"),
  value: "nicomoji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Niconne", "frontis-blocks"),
  value: "Niconne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("nikukyu", "frontis-blocks"),
  value: "nikukyu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Niramit", "frontis-blocks"),
  value: "Niramit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nixie One", "frontis-blocks"),
  value: "Nixie One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nobile", "frontis-blocks"),
  value: "Nobile"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nokora", "frontis-blocks"),
  value: "Nokora"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Norican", "frontis-blocks"),
  value: "Norican"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nosifer", "frontis-blocks"),
  value: "Nosifer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nosifer Caps", "frontis-blocks"),
  value: "Nosifer Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Notable", "frontis-blocks"),
  value: "Notable"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nothing You Could Do", "frontis-blocks"),
  value: "Nothing You Could Do"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Noticia Text", "frontis-blocks"),
  value: "Noticia Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Noto Sans", "frontis-blocks"),
  value: "Noto Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Noto Serif", "frontis-blocks"),
  value: "Noto Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("notosanstamil", "frontis-blocks"),
  value: "notosanstamil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Cut", "frontis-blocks"),
  value: "Nova Cut"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Flat", "frontis-blocks"),
  value: "Nova Flat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Mono", "frontis-blocks"),
  value: "Nova Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Oval", "frontis-blocks"),
  value: "Nova Oval"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Round", "frontis-blocks"),
  value: "Nova Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Script", "frontis-blocks"),
  value: "Nova Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Slim", "frontis-blocks"),
  value: "Nova Slim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Square", "frontis-blocks"),
  value: "Nova Square"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("NTR", "frontis-blocks"),
  value: "NTR"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Numans", "frontis-blocks"),
  value: "Numans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nunito", "frontis-blocks"),
  value: "Nunito"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nunito Sans", "frontis-blocks"),
  value: "Nunito Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Odor Mean Chey", "frontis-blocks"),
  value: "Odor Mean Chey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Offside", "frontis-blocks"),
  value: "Offside"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("OFL Sorts Mill Goudy TT", "frontis-blocks"),
  value: "OFL Sorts Mill Goudy TT"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Old Standard TT", "frontis-blocks"),
  value: "Old Standard TT"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oldenburg", "frontis-blocks"),
  value: "Oldenburg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oleo Script", "frontis-blocks"),
  value: "Oleo Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oleo Script Swash Caps", "frontis-blocks"),
  value: "Oleo Script Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open Sans", "frontis-blocks"),
  value: "Open Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open Sans Condensed", "frontis-blocks"),
  value: "Open Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("opensanshebrew", "frontis-blocks"),
  value: "opensanshebrew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("opensanshebrewcondensed", "frontis-blocks"),
  value: "opensanshebrewcondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oranienbaum", "frontis-blocks"),
  value: "Oranienbaum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Orbitron", "frontis-blocks"),
  value: "Orbitron"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oregano", "frontis-blocks"),
  value: "Oregano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Orienta", "frontis-blocks"),
  value: "Orienta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Original Surfer", "frontis-blocks"),
  value: "Original Surfer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oswald", "frontis-blocks"),
  value: "Oswald"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Over the Rainbow", "frontis-blocks"),
  value: "Over the Rainbow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlock", "frontis-blocks"),
  value: "Overlock"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlock SC", "frontis-blocks"),
  value: "Overlock SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overpass", "frontis-blocks"),
  value: "Overpass"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overpass Mono", "frontis-blocks"),
  value: "Overpass Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ovo", "frontis-blocks"),
  value: "Ovo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oxygen", "frontis-blocks"),
  value: "Oxygen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oxygen Mono", "frontis-blocks"),
  value: "Oxygen Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pacifico", "frontis-blocks"),
  value: "Pacifico"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padauk", "frontis-blocks"),
  value: "Padauk"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Palanquin", "frontis-blocks"),
  value: "Palanquin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Palanquin Dark", "frontis-blocks"),
  value: "Palanquin Dark"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pangolin", "frontis-blocks"),
  value: "Pangolin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Paprika", "frontis-blocks"),
  value: "Paprika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Parisienne", "frontis-blocks"),
  value: "Parisienne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Passero One", "frontis-blocks"),
  value: "Passero One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Passion One", "frontis-blocks"),
  value: "Passion One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pathway Gothic One", "frontis-blocks"),
  value: "Pathway Gothic One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Patrick Hand", "frontis-blocks"),
  value: "Patrick Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Patrick Hand SC", "frontis-blocks"),
  value: "Patrick Hand SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pattaya", "frontis-blocks"),
  value: "Pattaya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Patua One", "frontis-blocks"),
  value: "Patua One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pavanam", "frontis-blocks"),
  value: "Pavanam"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Paytone One", "frontis-blocks"),
  value: "Paytone One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pecita", "frontis-blocks"),
  value: "Pecita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Peddana", "frontis-blocks"),
  value: "Peddana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Peralta", "frontis-blocks"),
  value: "Peralta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Permanent Marker", "frontis-blocks"),
  value: "Permanent Marker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Petit Formal Script", "frontis-blocks"),
  value: "Petit Formal Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Petrona", "frontis-blocks"),
  value: "Petrona"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Phetsarath", "frontis-blocks"),
  value: "Phetsarath"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Philosopher", "frontis-blocks"),
  value: "Philosopher"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Piedra", "frontis-blocks"),
  value: "Piedra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pinyon Script", "frontis-blocks"),
  value: "Pinyon Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pirata One", "frontis-blocks"),
  value: "Pirata One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Plaster", "frontis-blocks"),
  value: "Plaster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Play", "frontis-blocks"),
  value: "Play"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Playball", "frontis-blocks"),
  value: "Playball"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Playfair Display", "frontis-blocks"),
  value: "Playfair Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Playfair Display SC", "frontis-blocks"),
  value: "Playfair Display SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Plus Jakarta Sans", "frontis-blocks"),
  value: "Plus Jakarta Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Podkova", "frontis-blocks"),
  value: "Podkova"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("podkovavfbeta", "frontis-blocks"),
  value: "podkovavfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poetsen One", "frontis-blocks"),
  value: "Poetsen One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poiret One", "frontis-blocks"),
  value: "Poiret One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poller One", "frontis-blocks"),
  value: "Poller One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poly", "frontis-blocks"),
  value: "Poly"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pompiere", "frontis-blocks"),
  value: "Pompiere"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ponnala", "frontis-blocks"),
  value: "Ponnala"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pontano Sans", "frontis-blocks"),
  value: "Pontano Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poor Story", "frontis-blocks"),
  value: "Poor Story"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poppins", "frontis-blocks"),
  value: "Poppins"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Port Lligat Sans", "frontis-blocks"),
  value: "Port Lligat Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Port Lligat Slab", "frontis-blocks"),
  value: "Port Lligat Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Porter Sans Block", "frontis-blocks"),
  value: "Porter Sans Block"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Post No Bills Colombo", "frontis-blocks"),
  value: "Post No Bills Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Post No Bills Jaffna", "frontis-blocks"),
  value: "Post No Bills Jaffna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pragati Narrow", "frontis-blocks"),
  value: "Pragati Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preahvihear", "frontis-blocks"),
  value: "Preahvihear"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Press Start 2P", "frontis-blocks"),
  value: "Press Start 2P"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pridi", "frontis-blocks"),
  value: "Pridi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Princess Sofia", "frontis-blocks"),
  value: "Princess Sofia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prociono", "frontis-blocks"),
  value: "Prociono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prompt", "frontis-blocks"),
  value: "Prompt"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prosto One", "frontis-blocks"),
  value: "Prosto One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Proza Libre", "frontis-blocks"),
  value: "Proza Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Mono", "frontis-blocks"),
  value: "PT Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Sans", "frontis-blocks"),
  value: "PT Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Sans Caption", "frontis-blocks"),
  value: "PT Sans Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Sans Narrow", "frontis-blocks"),
  value: "PT Sans Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Serif", "frontis-blocks"),
  value: "PT Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Serif Caption", "frontis-blocks"),
  value: "PT Serif Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Puritan", "frontis-blocks"),
  value: "Puritan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Purple Purse", "frontis-blocks"),
  value: "Purple Purse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pushster", "frontis-blocks"),
  value: "Pushster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Quando", "frontis-blocks"),
  value: "Quando"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Quantico", "frontis-blocks"),
  value: "Quantico"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Quattrocento", "frontis-blocks"),
  value: "Quattrocento"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Quattrocento Sans", "frontis-blocks"),
  value: "Quattrocento Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Questrial", "frontis-blocks"),
  value: "Questrial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Quicksand", "frontis-blocks"),
  value: "Quicksand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Quintessential", "frontis-blocks"),
  value: "Quintessential"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Qwigley", "frontis-blocks"),
  value: "Qwigley"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Racing Sans One", "frontis-blocks"),
  value: "Racing Sans One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radley", "frontis-blocks"),
  value: "Radley"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rajdhani", "frontis-blocks"),
  value: "Rajdhani"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rakkas", "frontis-blocks"),
  value: "Rakkas"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Raleway", "frontis-blocks"),
  value: "Raleway"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Raleway Dots", "frontis-blocks"),
  value: "Raleway Dots"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ramabhadra", "frontis-blocks"),
  value: "Ramabhadra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ramaraja", "frontis-blocks"),
  value: "Ramaraja"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rambla", "frontis-blocks"),
  value: "Rambla"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rammetto One", "frontis-blocks"),
  value: "Rammetto One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ranchers", "frontis-blocks"),
  value: "Ranchers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rancho", "frontis-blocks"),
  value: "Rancho"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ranga", "frontis-blocks"),
  value: "Ranga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rasa", "frontis-blocks"),
  value: "Rasa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rationale", "frontis-blocks"),
  value: "Rationale"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ravi Prakash", "frontis-blocks"),
  value: "Ravi Prakash"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Red Hat Display", "frontis-blocks"),
  value: "Red Hat Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Red Hat Text", "frontis-blocks"),
  value: "Red Hat Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Redacted", "frontis-blocks"),
  value: "Redacted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Redacted Script", "frontis-blocks"),
  value: "Redacted Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Redressed", "frontis-blocks"),
  value: "Redressed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reem Kufi", "frontis-blocks"),
  value: "Reem Kufi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reenie Beanie", "frontis-blocks"),
  value: "Reenie Beanie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Revalia", "frontis-blocks"),
  value: "Revalia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rhodium Libre", "frontis-blocks"),
  value: "Rhodium Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ribeye", "frontis-blocks"),
  value: "Ribeye"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ribeye Marrow", "frontis-blocks"),
  value: "Ribeye Marrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Righteous", "frontis-blocks"),
  value: "Righteous"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Risque", "frontis-blocks"),
  value: "Risque"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Roboto", "frontis-blocks"),
  value: "Roboto"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Roboto Condensed", "frontis-blocks"),
  value: "Roboto Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Roboto Mono", "frontis-blocks"),
  value: "Roboto Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Roboto Slab", "frontis-blocks"),
  value: "Roboto Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rochester", "frontis-blocks"),
  value: "Rochester"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rock Salt", "frontis-blocks"),
  value: "Rock Salt"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rokkitt", "frontis-blocks"),
  value: "Rokkitt"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Romanesco", "frontis-blocks"),
  value: "Romanesco"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ropa Sans", "frontis-blocks"),
  value: "Ropa Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rosario", "frontis-blocks"),
  value: "Rosario"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rosarivo", "frontis-blocks"),
  value: "Rosarivo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rouge Script", "frontis-blocks"),
  value: "Rouge Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("roundedmplus1c", "frontis-blocks"),
  value: "roundedmplus1c"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rozha One", "frontis-blocks"),
  value: "Rozha One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rubik", "frontis-blocks"),
  value: "Rubik"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rubik Mono One", "frontis-blocks"),
  value: "Rubik Mono One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rubik One", "frontis-blocks"),
  value: "Rubik One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ruda", "frontis-blocks"),
  value: "Ruda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rufina", "frontis-blocks"),
  value: "Rufina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ruge Boogie", "frontis-blocks"),
  value: "Ruge Boogie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ruluko", "frontis-blocks"),
  value: "Ruluko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rum Raisin", "frontis-blocks"),
  value: "Rum Raisin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ruslan Display", "frontis-blocks"),
  value: "Ruslan Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Russo One", "frontis-blocks"),
  value: "Russo One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ruthie", "frontis-blocks"),
  value: "Ruthie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rye", "frontis-blocks"),
  value: "Rye"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sacramento", "frontis-blocks"),
  value: "Sacramento"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sahitya", "frontis-blocks"),
  value: "Sahitya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sail", "frontis-blocks"),
  value: "Sail"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira", "frontis-blocks"),
  value: "Saira"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Condensed", "frontis-blocks"),
  value: "Saira Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Extra Condensed", "frontis-blocks"),
  value: "Saira Extra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Semi Condensed", "frontis-blocks"),
  value: "Saira Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Stencil One", "frontis-blocks"),
  value: "Saira Stencil One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Salsa", "frontis-blocks"),
  value: "Salsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sanchez", "frontis-blocks"),
  value: "Sanchez"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sancreek", "frontis-blocks"),
  value: "Sancreek"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sansation", "frontis-blocks"),
  value: "Sansation"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sansita", "frontis-blocks"),
  value: "Sansita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sansita One", "frontis-blocks"),
  value: "Sansita One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarabun", "frontis-blocks"),
  value: "Sarabun"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarala", "frontis-blocks"),
  value: "Sarala"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarina", "frontis-blocks"),
  value: "Sarina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarpanch", "frontis-blocks"),
  value: "Sarpanch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Satisfy", "frontis-blocks"),
  value: "Satisfy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("sawarabigothic", "frontis-blocks"),
  value: "sawarabigothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("sawarabimincho", "frontis-blocks"),
  value: "sawarabimincho"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scada", "frontis-blocks"),
  value: "Scada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scheherazade", "frontis-blocks"),
  value: "Scheherazade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Schoolbell", "frontis-blocks"),
  value: "Schoolbell"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scope One", "frontis-blocks"),
  value: "Scope One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Seaweed Script", "frontis-blocks"),
  value: "Seaweed Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Secular One", "frontis-blocks"),
  value: "Secular One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedan", "frontis-blocks"),
  value: "Sedan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedan SC", "frontis-blocks"),
  value: "Sedan SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedgwick Ave", "frontis-blocks"),
  value: "Sedgwick Ave"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedgwick Ave Display", "frontis-blocks"),
  value: "Sedgwick Ave Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulhangang", "frontis-blocks"),
  value: "seoulhangang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulhangangcondensed", "frontis-blocks"),
  value: "seoulhangangcondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulnamsan", "frontis-blocks"),
  value: "seoulnamsan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulnamsancondensed", "frontis-blocks"),
  value: "seoulnamsancondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulnamsanvertical", "frontis-blocks"),
  value: "seoulnamsanvertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sevillana", "frontis-blocks"),
  value: "Sevillana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Seymour One", "frontis-blocks"),
  value: "Seymour One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shadows Into Light", "frontis-blocks"),
  value: "Shadows Into Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shadows Into Light Two", "frontis-blocks"),
  value: "Shadows Into Light Two"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shanti", "frontis-blocks"),
  value: "Shanti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share", "frontis-blocks"),
  value: "Share"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share Tech", "frontis-blocks"),
  value: "Share Tech"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share Tech Mono", "frontis-blocks"),
  value: "Share Tech Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shojumaru", "frontis-blocks"),
  value: "Shojumaru"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Short Stack", "frontis-blocks"),
  value: "Short Stack"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shrikhand", "frontis-blocks"),
  value: "Shrikhand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Siamreap", "frontis-blocks"),
  value: "Siamreap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Siemreap", "frontis-blocks"),
  value: "Siemreap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sigmar One", "frontis-blocks"),
  value: "Sigmar One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Signika", "frontis-blocks"),
  value: "Signika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Signika Negative", "frontis-blocks"),
  value: "Signika Negative"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Simonetta", "frontis-blocks"),
  value: "Simonetta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Single Day", "frontis-blocks"),
  value: "Single Day"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sintony", "frontis-blocks"),
  value: "Sintony"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sirin Stencil", "frontis-blocks"),
  value: "Sirin Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sitara", "frontis-blocks"),
  value: "Sitara"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Six Caps", "frontis-blocks"),
  value: "Six Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skranji", "frontis-blocks"),
  value: "Skranji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slabo 13px", "frontis-blocks"),
  value: "Slabo 13px"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slabo 27px", "frontis-blocks"),
  value: "Slabo 27px"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slackey", "frontis-blocks"),
  value: "Slackey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Smokum", "frontis-blocks"),
  value: "Smokum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Smythe", "frontis-blocks"),
  value: "Smythe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sniglet", "frontis-blocks"),
  value: "Sniglet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Snippet", "frontis-blocks"),
  value: "Snippet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Snowburst One", "frontis-blocks"),
  value: "Snowburst One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sofadi One", "frontis-blocks"),
  value: "Sofadi One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sofia", "frontis-blocks"),
  value: "Sofia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solway", "frontis-blocks"),
  value: "Solway"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Song Myung", "frontis-blocks"),
  value: "Song Myung"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sonsie One", "frontis-blocks"),
  value: "Sonsie One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sorts Mill Goudy", "frontis-blocks"),
  value: "Sorts Mill Goudy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("souliyo", "frontis-blocks"),
  value: "souliyo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Source Code Pro", "frontis-blocks"),
  value: "Source Code Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Source Sans Pro", "frontis-blocks"),
  value: "Source Sans Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Source Serif Pro", "frontis-blocks"),
  value: "Source Serif Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space Mono", "frontis-blocks"),
  value: "Space Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Special Elite", "frontis-blocks"),
  value: "Special Elite"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spectral", "frontis-blocks"),
  value: "Spectral"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spicy Rice", "frontis-blocks"),
  value: "Spicy Rice"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spinnaker", "frontis-blocks"),
  value: "Spinnaker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spirax", "frontis-blocks"),
  value: "Spirax"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Squada One", "frontis-blocks"),
  value: "Squada One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sree Krushnadevaraya", "frontis-blocks"),
  value: "Sree Krushnadevaraya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sriracha", "frontis-blocks"),
  value: "Sriracha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Srisakdi", "frontis-blocks"),
  value: "Srisakdi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Staatliches", "frontis-blocks"),
  value: "Staatliches"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stalemate", "frontis-blocks"),
  value: "Stalemate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stalin One", "frontis-blocks"),
  value: "Stalin One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stalinist One", "frontis-blocks"),
  value: "Stalinist One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stardos Stencil", "frontis-blocks"),
  value: "Stardos Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stint Ultra Condensed", "frontis-blocks"),
  value: "Stint Ultra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stint Ultra Expanded", "frontis-blocks"),
  value: "Stint Ultra Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stoke", "frontis-blocks"),
  value: "Stoke"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Strait", "frontis-blocks"),
  value: "Strait"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Strong", "frontis-blocks"),
  value: "Strong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stylish", "frontis-blocks"),
  value: "Stylish"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sue Ellen Francisco", "frontis-blocks"),
  value: "Sue Ellen Francisco"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suez One", "frontis-blocks"),
  value: "Suez One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sumana", "frontis-blocks"),
  value: "Sumana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sunflower", "frontis-blocks"),
  value: "Sunflower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sunshiney", "frontis-blocks"),
  value: "Sunshiney"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Supermercado One", "frontis-blocks"),
  value: "Supermercado One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sura", "frontis-blocks"),
  value: "Sura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suranna", "frontis-blocks"),
  value: "Suranna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suravaram", "frontis-blocks"),
  value: "Suravaram"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suwannaphum", "frontis-blocks"),
  value: "Suwannaphum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Swanky and Moo Moo", "frontis-blocks"),
  value: "Swanky and Moo Moo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Syncopate", "frontis-blocks"),
  value: "Syncopate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tajawal", "frontis-blocks"),
  value: "Tajawal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tangerine", "frontis-blocks"),
  value: "Tangerine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Taprom", "frontis-blocks"),
  value: "Taprom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tauri", "frontis-blocks"),
  value: "Tauri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Taviraj", "frontis-blocks"),
  value: "Taviraj"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Teko", "frontis-blocks"),
  value: "Teko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Telex", "frontis-blocks"),
  value: "Telex"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tenali Ramakrishna", "frontis-blocks"),
  value: "Tenali Ramakrishna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tenor Sans", "frontis-blocks"),
  value: "Tenor Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Terminal Dosis", "frontis-blocks"),
  value: "Terminal Dosis"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Terminal Dosis Light", "frontis-blocks"),
  value: "Terminal Dosis Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Me One", "frontis-blocks"),
  value: "Text Me One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thabit", "frontis-blocks"),
  value: "Thabit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("tharlon", "frontis-blocks"),
  value: "tharlon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thasadith", "frontis-blocks"),
  value: "Thasadith"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("The Girl Next Door", "frontis-blocks"),
  value: "The Girl Next Door"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tienne", "frontis-blocks"),
  value: "Tienne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tillana", "frontis-blocks"),
  value: "Tillana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Timmana", "frontis-blocks"),
  value: "Timmana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tinos", "frontis-blocks"),
  value: "Tinos"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Titan One", "frontis-blocks"),
  value: "Titan One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Titillium Web", "frontis-blocks"),
  value: "Titillium Web"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trade Winds", "frontis-blocks"),
  value: "Trade Winds"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trirong", "frontis-blocks"),
  value: "Trirong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trocchi", "frontis-blocks"),
  value: "Trocchi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trochut", "frontis-blocks"),
  value: "Trochut"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trykker", "frontis-blocks"),
  value: "Trykker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tuffy", "frontis-blocks"),
  value: "Tuffy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tulpen One", "frontis-blocks"),
  value: "Tulpen One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ubuntu", "frontis-blocks"),
  value: "Ubuntu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ubuntu Condensed", "frontis-blocks"),
  value: "Ubuntu Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ubuntu Mono", "frontis-blocks"),
  value: "Ubuntu Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ultra", "frontis-blocks"),
  value: "Ultra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uncial Antiqua", "frontis-blocks"),
  value: "Uncial Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underdog", "frontis-blocks"),
  value: "Underdog"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unica One", "frontis-blocks"),
  value: "Unica One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("UnifrakturCook", "frontis-blocks"),
  value: "UnifrakturCook"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("UnifrakturMaguntia", "frontis-blocks"),
  value: "UnifrakturMaguntia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unkempt", "frontis-blocks"),
  value: "Unkempt"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unlock", "frontis-blocks"),
  value: "Unlock"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unna", "frontis-blocks"),
  value: "Unna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vampiro One", "frontis-blocks"),
  value: "Vampiro One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Varela", "frontis-blocks"),
  value: "Varela"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Varela Round", "frontis-blocks"),
  value: "Varela Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Varta", "frontis-blocks"),
  value: "Varta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vast Shadow", "frontis-blocks"),
  value: "Vast Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vesper Libre", "frontis-blocks"),
  value: "Vesper Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vibur", "frontis-blocks"),
  value: "Vibur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vidaloka", "frontis-blocks"),
  value: "Vidaloka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viga", "frontis-blocks"),
  value: "Viga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Voces", "frontis-blocks"),
  value: "Voces"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Volkhov", "frontis-blocks"),
  value: "Volkhov"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vollkorn", "frontis-blocks"),
  value: "Vollkorn"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vollkorn SC", "frontis-blocks"),
  value: "Vollkorn SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Voltaire", "frontis-blocks"),
  value: "Voltaire"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("VT323", "frontis-blocks"),
  value: "VT323"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Waiting for the Sunrise", "frontis-blocks"),
  value: "Waiting for the Sunrise"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wallpoet", "frontis-blocks"),
  value: "Wallpoet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Walter Turncoat", "frontis-blocks"),
  value: "Walter Turncoat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Warnes", "frontis-blocks"),
  value: "Warnes"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wellfleet", "frontis-blocks"),
  value: "Wellfleet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wendy One", "frontis-blocks"),
  value: "Wendy One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wire One", "frontis-blocks"),
  value: "Wire One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Work Sans", "frontis-blocks"),
  value: "Work Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yaldevi Colombo", "frontis-blocks"),
  value: "Yaldevi Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yanone Kaffeesatz", "frontis-blocks"),
  value: "Yanone Kaffeesatz"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yantramanav", "frontis-blocks"),
  value: "Yantramanav"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yatra One", "frontis-blocks"),
  value: "Yatra One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yellowtail", "frontis-blocks"),
  value: "Yellowtail"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yeon Sung", "frontis-blocks"),
  value: "Yeon Sung"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yeseva One", "frontis-blocks"),
  value: "Yeseva One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yesteryear", "frontis-blocks"),
  value: "Yesteryear"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yinmar", "frontis-blocks"),
  value: "Yinmar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yrsa", "frontis-blocks"),
  value: "Yrsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ZCOOL KuaiLe", "frontis-blocks"),
  value: "ZCOOL KuaiLe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ZCOOL QingKe HuangYou", "frontis-blocks"),
  value: "ZCOOL QingKe HuangYou"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ZCOOL XiaoWei", "frontis-blocks"),
  value: "ZCOOL XiaoWei"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zeyada", "frontis-blocks"),
  value: "Zeyada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zhi Mang Xing", "frontis-blocks"),
  value: "Zhi Mang Xing"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zilla Slab Highlight", "frontis-blocks"),
  value: "Zilla Slab Highlight"
}];

/***/ }),

/***/ "./src/utils/customizer.js":
/*!*********************************!*\
  !*** ./src/utils/customizer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCustomizerPage: () => (/* binding */ isCustomizerPage)
/* harmony export */ });
var isCustomizerPage = function isCustomizerPage() {
  var _window;
  // We need to run this script only on customizer page.
  if (!window.location.href.includes('/customize.php')) {
    return false;
  }
  if (!((_window = window) !== null && _window !== void 0 && (_window = _window.wp) !== null && _window !== void 0 && _window.customize)) {
    return false;
  }
  return true;
};

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./admin/template-library/style.scss":
/*!*******************************************!*\
  !*** ./admin/template-library/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/range/editor.lazy.scss":
/*!***********************************************!*\
  !*** ./src/components/range/editor.lazy.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/responsive-control/editor.lazy.scss":
/*!************************************************************!*\
  !*** ./src/components/responsive-control/editor.lazy.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/unit-control/editor.lazy.scss":
/*!******************************************************!*\
  !*** ./src/components/unit-control/editor.lazy.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-spinners/esm/ClipLoader.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-spinners/esm/ClipLoader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/unitConverter */ "./node_modules/react-spinners/esm/helpers/unitConverter.js");
/* harmony import */ var _helpers_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/animation */ "./node_modules/react-spinners/esm/helpers/animation.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var clip = (0,_helpers_animation__WEBPACK_IMPORTED_MODULE_1__.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
function ClipLoader(_a) {
    var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 35 : _f, additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
    var style = __assign({ background: "transparent !important", width: (0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.cssValue)(size), height: (0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.cssValue)(size), borderRadius: "100%", border: "2px solid", borderTopColor: color, borderBottomColor: "transparent", borderLeftColor: color, borderRightColor: color, display: "inline-block", animation: "".concat(clip, " ").concat(0.75 / speedMultiplier, "s 0s infinite linear"), animationFillMode: "both" }, cssOverride);
    if (!loading) {
        return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", __assign({ style: style }, additionalprops));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClipLoader);


/***/ }),

/***/ "./node_modules/react-spinners/esm/helpers/animation.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-spinners/esm/helpers/animation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAnimation: () => (/* binding */ createAnimation)
/* harmony export */ });
var createAnimation = function (loaderName, frames, suffix) {
    var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
    if (typeof window == "undefined" || !window.document) {
        return animationName;
    }
    var styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    var styleSheet = styleEl.sheet;
    var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
    if (styleSheet) {
        styleSheet.insertRule(keyFrames, 0);
    }
    return animationName;
};


/***/ }),

/***/ "./node_modules/react-spinners/esm/helpers/unitConverter.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-spinners/esm/helpers/unitConverter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssValue: () => (/* binding */ cssValue),
/* harmony export */   parseLengthAndUnit: () => (/* binding */ parseLengthAndUnit)
/* harmony export */ });
var cssUnit = {
    cm: true,
    mm: true,
    in: true,
    px: true,
    pt: true,
    pc: true,
    em: true,
    ex: true,
    ch: true,
    rem: true,
    vw: true,
    vh: true,
    vmin: true,
    vmax: true,
    "%": true,
};
/**
 * If size is a number, append px to the value as default unit.
 * If size is a string, validate against list of valid units.
 * If unit is valid, return size as is.
 * If unit is invalid, console warn issue, replace with px as the unit.
 *
 * @param {(number | string)} size
 * @return {LengthObject} LengthObject
 */
function parseLengthAndUnit(size) {
    if (typeof size === "number") {
        return {
            value: size,
            unit: "px",
        };
    }
    var value;
    var valueString = (size.match(/^[0-9.]*/) || "").toString();
    if (valueString.includes(".")) {
        value = parseFloat(valueString);
    }
    else {
        value = parseInt(valueString, 10);
    }
    var unit = (size.match(/[^0-9]*$/) || "").toString();
    if (cssUnit[unit]) {
        return {
            value: value,
            unit: unit,
        };
    }
    console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
    return {
        value: value,
        unit: "px",
    };
}
/**
 * Take value as an input and return valid css value
 *
 * @param {(number | string)} value
 * @return {string} valid css value
 */
function cssValue(value) {
    var lengthWithunit = parseLengthAndUnit(value);
    return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./node_modules/react-toastify/dist/react-toastify.esm.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/react-toastify.esm.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bounce: () => (/* binding */ H),
/* harmony export */   Flip: () => (/* binding */ Y),
/* harmony export */   Icons: () => (/* binding */ z),
/* harmony export */   Slide: () => (/* binding */ F),
/* harmony export */   ToastContainer: () => (/* binding */ Q),
/* harmony export */   Zoom: () => (/* binding */ X),
/* harmony export */   collapseToast: () => (/* binding */ f),
/* harmony export */   cssTransition: () => (/* binding */ g),
/* harmony export */   toast: () => (/* binding */ B),
/* harmony export */   useToast: () => (/* binding */ N),
/* harmony export */   useToastContainer: () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
'use client';
const c=e=>"number"==typeof e&&!isNaN(e),d=e=>"string"==typeof e,u=e=>"function"==typeof e,p=e=>d(e)||u(e)?e:null,m=e=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(e)||d(e)||u(e)||c(e);function f(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}function g(t){let{enter:a,exit:r,appendPosition:i=!1,collapse:l=!0,collapseDuration:c=300}=t;return function(t){let{children:d,position:u,preventExitTransition:p,done:m,nodeRef:g,isIn:y,playToast:v}=t;const h=i?`${a}--${u}`:a,T=i?`${r}--${u}`:r,E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{const e=g.current,t=h.split(" "),n=o=>{o.target===g.current&&(v(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===E.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const e=g.current,t=()=>{e.removeEventListener("animationend",t),l?f(e,m,c):m()};y||(p?t():(E.current=1,e.className+=` ${T}`,e.addEventListener("animationend",t)))},[y]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,d)}}function y(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const v=new Map;let h=[];const T=new Set,E=e=>T.forEach(t=>t(e)),b=()=>v.size>0;function I(e,t){var n;if(t)return!(null==(n=v.get(t))||!n.isToastActive(e));let o=!1;return v.forEach(t=>{t.isToastActive(e)&&(o=!0)}),o}function _(e,t){m(e)&&(b()||h.push({content:e,options:t}),v.forEach(n=>{n.buildToast(e,t)}))}function C(e,t){v.forEach(n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)})}function L(e){const{subscribe:o,getSnapshot:s,setProps:i}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function(e){const n=e.containerId||1;return{subscribe(o){const s=function(e,n,o){let s=1,r=0,i=[],l=[],f=[],g=n;const v=new Map,h=new Set,T=()=>{f=Array.from(v.values()),h.forEach(e=>e())},E=e=>{l=null==e?[]:l.filter(t=>t!==e),T()},b=e=>{const{toastId:n,onOpen:s,updateId:a,children:r}=e.props,i=null==a;e.staleId&&v.delete(e.staleId),v.set(n,e),l=[...l,e.props.toastId].filter(t=>t!==e.staleId),T(),o(y(e,i?"added":"updated")),i&&u(s)&&s((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(r)&&r.props)};return{id:e,props:g,observe:e=>(h.add(e),()=>h.delete(e)),toggle:(e,t)=>{v.forEach(n=>{null!=t&&t!==n.props.toastId||u(n.toggle)&&n.toggle(e)})},removeToast:E,toasts:v,clearQueue:()=>{r-=i.length,i=[]},buildToast:(n,l)=>{if((t=>{let{containerId:n,toastId:o,updateId:s}=t;const a=n?n!==e:1!==e,r=v.has(o)&&null==s;return a||r})(l))return;const{toastId:f,updateId:h,data:I,staleId:_,delay:C}=l,L=()=>{E(f)},N=null==h;N&&r++;const $={...g,style:g.toastStyle,key:s++,...Object.fromEntries(Object.entries(l).filter(e=>{let[t,n]=e;return null!=n})),toastId:f,updateId:h,data:I,closeToast:L,isIn:!1,className:p(l.className||g.toastClassName),bodyClassName:p(l.bodyClassName||g.bodyClassName),progressClassName:p(l.progressClassName||g.progressClassName),autoClose:!l.isLoading&&(w=l.autoClose,k=g.autoClose,!1===w||c(w)&&w>0?w:k),deleteToast(){const e=v.get(f),{onClose:n,children:s}=e.props;u(n)&&n((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(s)&&s.props),o(y(e,"removed")),v.delete(f),r--,r<0&&(r=0),i.length>0?b(i.shift()):T()}};var w,k;$.closeButton=g.closeButton,!1===l.closeButton||m(l.closeButton)?$.closeButton=l.closeButton:!0===l.closeButton&&($.closeButton=!m(g.closeButton)||g.closeButton);let P=n;(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(n)&&!d(n.type)?P=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(n,{closeToast:L,toastProps:$,data:I}):u(n)&&(P=n({closeToast:L,toastProps:$,data:I}));const M={content:P,props:$,staleId:_};g.limit&&g.limit>0&&r>g.limit&&N?i.push(M):c(C)?setTimeout(()=>{b(M)},C):b(M)},setProps(e){g=e},setToggle:(e,t)=>{v.get(e).toggle=t},isToastActive:e=>l.some(t=>t===e),getSnapshot:()=>f}}(n,e,E);v.set(n,s);const r=s.observe(o);return h.forEach(e=>_(e.content,e.options)),h=[],()=>{r(),v.delete(n)}},setProps(e){var t;null==(t=v.get(n))||t.setProps(e)},getSnapshot(){var e;return null==(e=v.get(n))?void 0:e.getSnapshot()}}}(e)).current;i(e);const l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(o,s,s);return{getToastToRender:function(t){if(!l)return[];const n=new Map;return e.newestOnTop&&l.reverse(),l.forEach(e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},isToastActive:I,count:null==l?void 0:l.length}}function N(e){const[t,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[a,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:u,closeToast:p,onClick:m,closeOnClick:f}=e;var g,y;function h(){o(!0)}function T(){o(!1)}function E(n){const o=l.current;c.canDrag&&o&&(c.didMove=!0,t&&T(),c.delta="x"===e.draggableDirection?n.clientX-c.start:n.clientY-c.start,c.start!==n.clientX&&(c.canCloseOnClick=!1),o.style.transform=`translate3d(${"x"===e.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`},0)`,o.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function b(){document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",b);const t=l.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return r(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(y=v.get((g={id:e.toastId,containerId:e.containerId,fn:o}).containerId||1))||y.setToggle(g.id,g.fn),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||T(),window.addEventListener("focus",h),window.addEventListener("blur",T),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",T)}},[e.pauseOnFocusLoss]);const I={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",E),document.addEventListener("pointerup",b);const n=l.current;c.canCloseOnClick=!0,c.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){const{top:n,bottom:o,left:s,right:a}=l.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=s&&t.clientX<=a&&t.clientY>=n&&t.clientY<=o?T():h()}};return d&&u&&(I.onMouseEnter=T,e.stacked||(I.onMouseLeave=h)),f&&(I.onClick=e=>{m&&m(e),c.canCloseOnClick&&p()}),{playToast:h,pauseToast:T,isRunning:t,preventExitTransition:a,toastRef:l,eventHandlers:I}}function $(t){let{delay:n,isRunning:o,closeToast:s,type:a="default",hide:r,className:i,style:c,controlledProgress:d,progress:p,rtl:m,isIn:f,theme:g}=t;const y=r||d&&0===p,v={...c,animationDuration:`${n}ms`,animationPlayState:o?"running":"paused"};d&&(v.transform=`scaleX(${p})`);const h=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":m}),T=u(i)?i({rtl:m,type:a,defaultClassName:h}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(h,i),E={[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{f&&s()}};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${a}`}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:T,style:v,...E}))}let w=1;const k=()=>""+w++;function P(e){return e&&(d(e.toastId)||c(e.toastId))?e.toastId:k()}function M(e,t){return _(e,t),t.toastId}function x(e,t){return{...t,type:t&&t.type||e,toastId:P(t)}}function A(e){return(t,n)=>M(t,x(e,n))}function B(e,t){return M(e,x("default",t))}B.loading=(e,t)=>M(e,x("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),B.promise=function(e,t,n){let o,{pending:s,error:a,success:r}=t;s&&(o=d(s)?B.loading(s,n):B.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,s)=>{if(null==t)return void B.dismiss(o);const a={type:e,...i,...n,data:s},r=d(t)?{render:t}:t;return o?B.update(o,{...a,...r}):B(r.render,{...a,...r}),s},c=u(e)?e():e;return c.then(e=>l("success",r,e)).catch(e=>l("error",a,e)),c},B.success=A("success"),B.info=A("info"),B.error=A("error"),B.warning=A("warning"),B.warn=B.warning,B.dark=(e,t)=>M(e,x("default",{theme:"dark",...t})),B.dismiss=function(e){!function(e){var t;if(b()){if(null==e||d(t=e)||c(t))v.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const t=v.get(e.containerId);t?t.removeToast(e.id):v.forEach(t=>{t.removeToast(e.id)})}}else h=h.filter(t=>null!=e&&t.options.toastId!==e)}(e)},B.clearWaitingQueue=function(e){void 0===e&&(e={}),v.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},B.isActive=I,B.update=function(e,t){void 0===t&&(t={});const n=((e,t)=>{var n;let{containerId:o}=t;return null==(n=v.get(o||1))?void 0:n.toasts.get(e)})(e,t);if(n){const{props:o,content:s}=n,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:k()};a.toastId!==e&&(a.staleId=e);const r=a.render||s;delete a.render,M(r,a)}},B.done=e=>{B.update(e,{progress:1})},B.onChange=function(e){return T.add(e),()=>{T.delete(e)}},B.play=e=>C(!0,e),B.pause=e=>C(!1,e);const O="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect,D=t=>{let{theme:n,type:o,isLoading:s,...a}=t;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${o})`,...a})},z={info:function(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{...t},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{...t},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{...t},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{...t},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Toastify__spinner"})}},R=n=>{const{isRunning:o,preventExitTransition:s,toastRef:r,eventHandlers:i,playToast:c}=N(n),{closeButton:d,children:p,autoClose:m,onClick:f,type:g,hideProgressBar:y,closeToast:v,transition:h,position:T,className:E,style:b,bodyClassName:I,bodyStyle:_,progressClassName:C,progressStyle:L,updateId:w,role:k,progress:P,rtl:M,toastId:x,deleteToast:A,isIn:B,isLoading:O,closeOnClick:D,theme:R}=n,S=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${g}`,{"Toastify__toast--rtl":M},{"Toastify__toast--close-on-click":D}),H=u(E)?E({rtl:M,position:T,type:g,defaultClassName:S}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(S,E),F=function(e){let{theme:n,type:o,isLoading:s,icon:r}=e,i=null;const l={theme:n,type:o};return!1===r||(u(r)?i=r({...l,isLoading:s}):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(r)?i=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(r,l):s?i=z.spinner():(e=>e in z)(o)&&(i=z[o](l))),i}(n),X=!!P||!m,Y={closeToast:v,type:g,theme:R};let q=null;return!1===d||(q=u(d)?d(Y):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(d)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(d,Y):function(t){let{closeToast:n,theme:o,ariaLabel:s="close"}=t;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:e=>{e.stopPropagation(),n(e)},"aria-label":s},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(Y)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(h,{isIn:B,done:A,position:T,preventExitTransition:s,nodeRef:r,playToast:c},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:x,onClick:f,"data-in":B,className:H,...i,style:b,ref:r},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{...B&&{role:k},className:u(I)?I({type:g}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-body",I),style:_},null!=F&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},F),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,p)),q,react__WEBPACK_IMPORTED_MODULE_0__.createElement($,{...w&&!X?{key:`pb-${w}`}:{},rtl:M,theme:R,delay:m,isRunning:o,isIn:B,closeToast:v,hide:y,type:g,style:L,className:C,controlledProgress:X,progress:P||0})))},S=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},H=g(S("bounce",!0)),F=g(S("slide",!0)),X=g(S("zoom")),Y=g(S("flip")),q={position:"top-right",transition:H,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Q(t){let o={...q,...t};const s=t.stacked,[a,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),{getToastToRender:d,isToastActive:m,count:f}=L(o),{className:g,style:y,rtl:v,containerId:h}=o;function T(e){const t=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":v});return u(g)?g({position:e,rtl:v,defaultClassName:t}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(t,p(g))}function E(){s&&(r(!0),B.play())}return O(()=>{if(s){var e;const t=c.current.querySelectorAll('[data-in="true"]'),n=12,s=null==(e=o.position)?void 0:e.includes("top");let r=0,i=0;Array.from(t).reverse().forEach((e,t)=>{const o=e;o.classList.add("Toastify__toast--stacked"),t>0&&(o.dataset.collapsed=`${a}`),o.dataset.pos||(o.dataset.pos=s?"top":"bot");const l=r*(a?.2:1)+(a?0:n*t);o.style.setProperty("--y",`${s?l:-1*l}px`),o.style.setProperty("--g",`${n}`),o.style.setProperty("--s",""+(1-(a?i:0))),r+=o.offsetHeight,i+=.025})}},[a,f,s]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:c,className:"Toastify",id:h,onMouseEnter:()=>{s&&(r(!1),B.pause())},onMouseLeave:E},d((t,n)=>{const o=n.length?{...y}:{...y,pointerEvents:"none"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:T(t),style:o,key:`container-${t}`},n.map(t=>{let{content:n,props:o}=t;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(R,{...o,stacked:s,collapseAll:E,isIn:m(o.toastId,o.containerId),style:o.style,key:`toast-${o.key}`},n)}))}))}
//# sourceMappingURL=react-toastify.esm.mjs.map


/***/ }),

/***/ "./admin/template-library/data.json":
/*!******************************************!*\
  !*** ./admin/template-library/data.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":{"patterns":{"name":"Patterns","categories":[{"id":"all","name":"All","count":30,"items":[{"id":"pattern1","title":"Pattern 1","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-3.webp","content":"Pattern 1 content here"},{"id":"pattern2","title":"Pattern 2","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-2.webp","content":"Pattern 2 content here"},{"id":"pattern3","title":"Pattern 3","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-3.webp","content":"Pattern 3 content here"},{"id":"pattern4","title":"Pattern 4","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-2.webp","content":"Pattern 4 content here"},{"id":"pattern5","title":"Pattern 5","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-3.webp","content":"Pattern 5 content here"},{"id":"pattern6","title":"Pattern 6","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-2.webp","content":"Pattern 6 content here"},{"id":"pattern15","title":"Pattern 15","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-3.webp","content":"Pattern 15 content here"}]},{"id":"content-blocks","name":"Content Blocks","count":14,"items":[{"id":"pattern1","title":"Pattern 1","image":"pattern1.jpg","content":"Pattern 1 content here"}]},{"id":"creative","name":"Creative","count":5,"items":[]},{"id":"dynamic","name":"Dynamic","count":30,"items":[]},{"id":"layout","name":"Layout","count":30,"items":[]},{"id":"form","name":"Form","count":30,"items":[]},{"id":"social","name":"Social","count":30,"items":[]}]},"pages":{"name":"Pages","categories":[{"id":"all","name":"All","count":30,"items":[{"id":"page1","title":"Page 1","image":"Page.jpg","content":"Page 1 content here"},{"id":"page2","title":"Page 2","image":"Page.jpg","content":"Page 2 content here"},{"id":"page3","title":"Pattern 3","image":"Page.jpg","content":"Page 3 content here"}]},{"id":"content-blocks","name":"Content Blocks","count":14,"items":[]},{"id":"creative","name":"Creative","count":5,"items":[]},{"id":"dynamic","name":"Dynamic","count":30,"items":[]},{"id":"layout","name":"Layout","count":30,"items":[]},{"id":"form","name":"Form","count":30,"items":[]},{"id":"social","name":"Social","count":30,"items":[]}]},"sites":{"name":"Sites","categories":[{"id":"all","name":"All","count":30,"items":[{"id":"item1","title":"Item 1","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/temp-1.svg","content":"Site 1 content here"},{"id":"item2","title":"Item 2","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-2.webp","content":"Site 2 content here"},{"id":"item3","title":"Item 3","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-3.webp","content":"Site 3 content here"}]},{"id":"content-blocks","name":"Content Blocks","count":14,"items":[]},{"id":"creative","name":"Creative","count":5,"items":[]},{"id":"dynamic","name":"Dynamic","count":30,"items":[]},{"id":"layout","name":"Layout","count":30,"items":[]},{"id":"form","name":"Form","count":30,"items":[]},{"id":"social","name":"Social","count":30,"items":[]}]},"template-library":{"name":"Template Library","categories":[{"id":"all","name":"All","count":30,"items":[]},{"id":"content-blocks","name":"Content Blocks","count":14,"items":[]},{"id":"creative","name":"Creative","count":5,"items":[]}]}}}');

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
/******/ 			"tlibrary": 0,
/******/ 			"./style-tlibrary": 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkfrontis_blocks"] = globalThis["webpackChunkfrontis_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-tlibrary"], () => (__webpack_require__("./admin/template-library/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=tlibrary.js.map