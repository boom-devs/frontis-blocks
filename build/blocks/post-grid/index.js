/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/post-grid/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/post-grid/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/range */ "./src/components/range/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/post-grid/editor.scss");
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes;
  var headLoadGoogleFonts = attributes.headLoadGoogleFonts,
    headFontFamily = attributes.headFontFamily,
    headFontWeight = attributes.headFontWeight,
    headFontStyle = attributes.headFontStyle,
    headFontSizeType = attributes.headFontSizeType,
    headFontSizeTypeMobile = attributes.headFontSizeTypeMobile,
    headFontSizeTypeTablet = attributes.headFontSizeTypeTablet,
    headFontSize = attributes.headFontSize,
    headFontSizeMobile = attributes.headFontSizeMobile,
    headFontSizeTablet = attributes.headFontSizeTablet,
    headLineHeightType = attributes.headLineHeightType,
    headLineHeight = attributes.headLineHeight,
    headLineHeightMobile = attributes.headLineHeightMobile,
    headLineHeightTablet = attributes.headLineHeightTablet,
    headLetterSpacing = attributes.headLetterSpacing,
    headLetterSpacingTablet = attributes.headLetterSpacingTablet,
    headLetterSpacingMobile = attributes.headLetterSpacingMobile,
    headLetterSpacingType = attributes.headLetterSpacingType,
    headTransform = attributes.headTransform,
    headDecoration = attributes.headDecoration,
    DeviceType = attributes.DeviceType,
    rangeValue = attributes.rangeValue,
    rangeUnit = attributes.rangeUnit,
    headSpace = attributes.headSpace,
    headSpaceTablet = attributes.headSpaceTablet,
    headSpaceMobile = attributes.headSpaceMobile,
    headSpaceType = attributes.headSpaceType;
  var boxShadowHandler = function boxShadowHandler(boxShadow) {
    console.log(boxShadow);

    // How to render boxshadow in div style

    // boxShadow: boxShadow.map(shadowArrayToString).join(" "),
    // const shadowArrayToString = (element) => {
    // 	if (typeof element === "number") {
    // 		return element + "px";
    // 	}
    // 	return element;
    // }

    // setAttributes({boxShadow: boxShadow});
  };
  var onChangeHandler = function onChangeHandler(value) {
    setAttributes(rangeValue[DeviceType] = value);
  };
  var rangeUnitHandler = function rangeUnitHandler(unit) {
    setAttributes(rangeUnit[DeviceType] = unit);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'text-domain')
  }, /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_3__["default"], {
    min: "-300",
    max: "300",
    label: "Width",
    rangeValue: rangeValue,
    onChangeHandler: onChangeHandler,
    rangeUnitHandler: rangeUnitHandler,
    DeviceType: DeviceType,
    units: rangeUnit,
    setAttributes: setAttributes
  }))), /*#__PURE__*/React.createElement("p", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This is post grid', 'text')));
}

/***/ }),

/***/ "./src/blocks/post-grid/index.js":
/*!***************************************!*\
  !*** ./src/blocks/post-grid/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-grid/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/post-grid/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/post-grid/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

var attributes = {
  DeviceType: {
    type: 'string',
    "default": 'Desktop'
  },
  rangeValue: {
    type: 'object',
    "default": {
      Desktop: 40,
      Tablet: 30,
      Mobile: 20
    }
  },
  rangeUnit: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'em',
      Mobile: '%'
    }
  }
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  attributes: attributes,
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



// eslint-disable-next-line import/no-unresolved

var Range = function Range(_ref) {
  var min = _ref.min,
    max = _ref.max,
    label = _ref.label,
    rangeValue = _ref.rangeValue,
    onChangeHandler = _ref.onChangeHandler,
    rangeUnitHandler = _ref.rangeUnitHandler,
    DeviceType = _ref.DeviceType,
    units = _ref.units,
    setAttributes = _ref.setAttributes;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rangeValue[DeviceType]),
    _useState2 = _slicedToArray(_useState, 2),
    rangeStateValue = _useState2[0],
    setRangeStateValue = _useState2[1];

  // Units
  var UNIT_TYPES = [{
    label: 'px',
    value: 'px'
  }, {
    label: '%',
    value: '%'
  }, {
    label: 'em',
    value: 'em'
  }];

  // Get range value
  var getRangeValue = function getRangeValue() {
    if (DeviceType === 'Desktop') {
      return rangeValue[DeviceType];
    } else if (DeviceType === 'Tablet') {
      return rangeValue[DeviceType];
    }
    return rangeValue[DeviceType];
  };
  var setRangeUnit = function setRangeUnit(unit) {
    rangeUnitHandler(unit);
  };
  var setRangeValue = function setRangeValue(value) {
    onChangeHandler(value);
    setRangeStateValue(value);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setRangeStateValue(rangeValue[DeviceType]);
  }, DeviceType);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-spacing-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-spacing-inner-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-spacing-label-container"
  }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(label, 'frontis-blocks'),
    device: DeviceType,
    deviceHandler: function deviceHandler(newDevice) {
      return setAttributes({
        DeviceType: newDevice
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-units-type"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: "fb-setting-units-type-wrap"
  }, UNIT_TYPES.map(function (item, key) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: key,
      onClick: function onClick() {
        return setRangeUnit(item.value);
      },
      className: "fb-setting-units-type-switcher ".concat(units[DeviceType] === item.value ? 'active' : '')
    }, item.label);
  })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    __nextHasNoMarginBottom: true,
    value: rangeStateValue,
    onChange: function onChange(value) {
      return setRangeValue(value);
    },
    min: min,
    max: max
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Range);

/***/ }),

/***/ "./src/components/responsive-control/index.js":
/*!****************************************************!*\
  !*** ./src/components/responsive-control/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FB_ResponsiveControl)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

function FB_ResponsiveControl(_ref) {
  var labelText = _ref.labelText,
    device = _ref.device,
    deviceHandler = _ref.deviceHandler;
  var handleDevice = function handleDevice(deviceName) {
    deviceHandler(deviceName);
    if (typeof wp !== 'undefined' && wp.data && wp.data.dispatch) {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType(deviceName);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-label-wrapper"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fb-setting-label-text"
  }, labelText), /*#__PURE__*/React.createElement("div", {
    className: "fb-responsive-device-wrapper"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fb-responsive-desktop-device ".concat(device === 'Desktop' ? 'active' : ''),
    onClick: function onClick() {
      return handleDevice('Desktop');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "7",
    viewBox: "0 0 8 7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "fb-responsive-tablet-device ".concat(device === 'Tablet' ? 'active' : ''),
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
    className: "fb-responsive-mobile-device ".concat(device === 'Mobile' ? 'active' : ''),
    onClick: function onClick() {
      return handleDevice('Mobile');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "4",
    height: "7",
    viewBox: "0 0 4 7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
  }))))));
}

/***/ }),

/***/ "./src/blocks/post-grid/editor.scss":
/*!******************************************!*\
  !*** ./src/blocks/post-grid/editor.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/post-grid/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/post-grid/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/post-grid/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/post-grid/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"frontis-blocks/post-grid","version":"0.1.0","title":"Post Grid ttt","category":"frontis-blocks","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"frontis-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
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
/******/ 			"blocks/post-grid/index": 0,
/******/ 			"blocks/post-grid/style-index": 0
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
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrontis_blocks"] = self["webpackChunkfrontis_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/post-grid/style-index"], () => (__webpack_require__("./src/blocks/post-grid/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map