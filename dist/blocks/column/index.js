/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/columns.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/columns.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const columns = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 7.5h-5v10h5v-10Zm1.5 0v10H19a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-2.5ZM6 7.5h2.5v10H6a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5ZM6 6h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (columns);
//# sourceMappingURL=columns.js.map

/***/ }),

/***/ "./src/blocks/column/attributes.js":
/*!*****************************************!*\
  !*** ./src/blocks/column/attributes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/column/constants.js");
var _attributes;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var attributes = (_attributes = {
  blockId: {
    type: "string"
  },
  blockMeta: {
    type: "object"
  },
  resOption: {
    type: "string",
    "default": "Desktop"
  },
  columns: {
    type: 'number',
    "default": 2
  }
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_attributes, "".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.wrapperWidth, "Range"), {
  type: "number"
}), "TAB".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.wrapperWidth, "Range"), {
  type: "number"
}), "MOB".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.wrapperWidth, "Range"), {
  type: "number"
}), "".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.columnOrderPrefix, "Range"), {
  type: "number"
}), "TAB".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.columnOrderPrefix, "Range"), {
  type: "number"
}), "MOB".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.columnOrderPrefix, "Range"), {
  type: "number"
}), "colAli", {
  type: "string",
  "default": "center"
}), "rowOverFlow", {
  type: "string",
  "default": "visible"
}), "classHook", {
  type: "string",
  "default": ""
}), "backgroundType", {
  type: "string",
  "default": "fill"
}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_attributes, "backgroundColor", {
  type: "string"
}), "backgroundGradient", {
  type: "string",
  "default": "linear-gradient(45deg,#00000000,#00000000)"
}), "borderStyle", {
  type: "string",
  "default": "none"
}), "borderWidth", {
  type: "number",
  "default": 1
}), "borderColor", {
  type: "string"
}), "borderRadius", {
  type: "number"
}), "paddingTop", {
  type: "number",
  "default": 0
}), "paddingRight", {
  type: "number",
  "default": 0
}), "paddingBottom", {
  type: "number",
  "default": 0
}), "paddingLeft", {
  type: "number",
  "default": 0
}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_attributes, "marginTop", {
  type: "number",
  "default": 0
}), "marginRight", {
  type: "number",
  "default": 0
}), "marginBottom", {
  type: "number",
  "default": 0
}), "marginLeft", {
  type: "number",
  "default": 0
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/column/constants.js":
/*!****************************************!*\
  !*** ./src/blocks/column/constants.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALIGNMENT_CONTROLS: () => (/* binding */ ALIGNMENT_CONTROLS),
/* harmony export */   COLUMN_HEIGHTS: () => (/* binding */ COLUMN_HEIGHTS),
/* harmony export */   COLUMN_HORIZONTAL_ALIGNMENTS: () => (/* binding */ COLUMN_HORIZONTAL_ALIGNMENTS),
/* harmony export */   COLUMN_OVERFLOW: () => (/* binding */ COLUMN_OVERFLOW),
/* harmony export */   COLUMN_VERTICAL_ALIGNMENTS: () => (/* binding */ COLUMN_VERTICAL_ALIGNMENTS),
/* harmony export */   columnOrderPrefix: () => (/* binding */ columnOrderPrefix),
/* harmony export */   wrapperWidth: () => (/* binding */ wrapperWidth)
/* harmony export */ });
// Column block-related constants

var wrapperWidth = "cw";
var columnOrderPrefix = "clOrder";
var COLUMN_HEIGHTS = [{
  label: "Fit Content",
  value: "h-auto"
}, {
  label: "Equal",
  value: "h-100"
}];
var COLUMN_VERTICAL_ALIGNMENTS = [{
  label: "Top",
  value: "top"
}, {
  label: "Middle",
  value: "middle"
}, {
  label: "Bottom",
  value: "bottom"
}];
var COLUMN_HORIZONTAL_ALIGNMENTS = [{
  label: "Left",
  value: "left"
}, {
  label: "Center",
  value: "center"
}, {
  label: "Right",
  value: "right"
}];
var COLUMN_OVERFLOW = [{
  label: "Visible",
  value: "visible"
}, {
  label: "Hidden",
  value: "hidden"
}];
var ALIGNMENT_CONTROLS = [{
  icon: "editor-alignleft",
  title: "Align left",
  align: "left"
}, {
  icon: "editor-aligncenter",
  title: "Align center",
  align: "center"
}, {
  icon: "editor-alignright",
  title: "Align right",
  align: "right"
}];

/***/ }),

/***/ "./src/blocks/column/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/column/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/blocks/column/inspector.js");
/* harmony import */ var _variationPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./variationPicker */ "./src/blocks/column/variationPicker.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./src/blocks/column/constants.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */





// Define column variations
var variations = [{
  name: 'single-column',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Single Column', 'frontis-blocks'),
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H9V34H39Z"
  })),
  innerBlocks: [['frontis-blocks/column', {
    width: 100
  }]]
}, {
  name: 'two-columns',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Two Columns', 'frontis-blocks'),
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
  })),
  innerBlocks: [['frontis-blocks/column', {
    width: 50
  }], ['frontis-blocks/column', {
    width: 50
  }]]
}, {
  name: 'three-columns',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Three Columns', 'frontis-blocks'),
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H20V14H28V34ZM18 34H9V14H18V34Z"
  })),
  innerBlocks: [['frontis-blocks/column', {
    width: 33.33
  }], ['frontis-blocks/column', {
    width: 33.33
  }], ['frontis-blocks/column', {
    width: 33.33
  }]]
}];
function Edit(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    className = props.className,
    clientId = props.clientId,
    isSelected = props.isSelected;
  var blockId = attributes.blockId,
    blockMeta = attributes.blockMeta,
    resOption = attributes.resOption,
    desktopRange = attributes["".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.wrapperWidth, "Range")],
    tabWidthRange = attributes["TAB".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.wrapperWidth, "Range")],
    mobileWidthRange = attributes["MOB".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.wrapperWidth, "Range")],
    columnOrderDesktop = attributes["".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.columnOrderPrefix, "Range")],
    columnOrderTab = attributes["TAB".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.columnOrderPrefix, "Range")],
    columnOrderMobile = attributes["MOB".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.columnOrderPrefix, "Range")],
    colAli = attributes.colAli,
    rowOverFlow = attributes.rowOverFlow,
    classHook = attributes.classHook;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showWidthTooltip = _useState2[0],
    setShowWidthTooltip = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    nextColWDhByUseState = _useState4[0],
    setNextColWDhByUseState = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    initBlockInsertionPointIndex = _useState6[0],
    setInitBlockInsertionPointIndex = _useState6[1];
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    initColWidth = _useState8[0],
    setInitColWidth = _useState8[1];
  var _useState9 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    initNextColWidth = _useState10[0],
    setInitNextColWidth = _useState10[1];
  var _useState11 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    initPrevColWidth = _useState12[0],
    setInitPrevColWidth = _useState12[1];
  var _useState13 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    nextBlockClientId = _useState14[0],
    setNextBlockClientId = _useState14[1];
  var _useState15 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    prevBlockClientId = _useState16[0],
    setPrevBlockClientId = _useState16[1];
  var colWrap = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var draggerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var hasInnerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
    return select("core/block-editor").getBlocks(clientId).length > 0;
  }, [clientId]);
  var isParentColumn = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
    var _select = select("core/block-editor"),
      getBlockParents = _select.getBlockParents,
      getBlockName = _select.getBlockName;
    var parents = getBlockParents(clientId);
    return !parents.some(function (parentId) {
      return getBlockName(parentId) === 'frontis-blocks/column';
    });
  }, [clientId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var nextColClientId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getAdjacentBlockClientId(clientId) || false;
    var nextColumnDesktopWidth = nextColClientId ? (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlockAttributes(nextColClientId).cw_Range : 0;
    var prevColClientId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getPreviousBlockClientId(clientId) || false;
    var prevColumnDesktopWidth = prevColClientId ? (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlockAttributes(prevColClientId).cw_Range : 0;
    var blockInsertionPoint = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlockInsertionPoint(clientId);
    var insertionIndex = blockInsertionPoint.index;
    setNextColWDhByUseState(nextColumnDesktopWidth);
    setInitBlockInsertionPointIndex(insertionIndex);
    setInitColWidth(desktopRange);
    setNextBlockClientId(nextColClientId);
    setPrevBlockClientId(prevColClientId);
    setInitNextColWidth(nextColumnDesktopWidth);
    setInitPrevColWidth(prevColumnDesktopWidth);
  }, [initBlockInsertionPointIndex]);
  var blockInsertionIndex = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlockInsertionPoint(clientId).index;
  if (blockInsertionIndex !== initBlockInsertionPointIndex) {
    setInitBlockInsertionPointIndex(blockInsertionIndex);
  }
  var _useState17 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isColumnOrder_Custom_Desktop = _useState18[0],
    setIsParentColumnOrderDesktop = _useState18[1];
  var _useState19 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isColumnOrder_Custom_Tab = _useState20[0],
    setIsParentColumnOrderTab = _useState20[1];
  var _useState21 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isColumnOrder_Custom_Mobile = _useState22[0],
    setIsParentColumnOrderMobile = _useState22[1];
  var _useState23 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
      desktop: 0,
      tab: 0,
      mobile: 0
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    columnGap = _useState24[0],
    setColumnGap = _useState24[1];
  var _useState25 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
      desktop: 1,
      tab: 1,
      mobile: 1
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    columnNumber = _useState26[0],
    setColumnNumber = _useState26[1];
  var parentBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlockParents(clientId);
  var parentBlockData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
    return select("core/block-editor").getBlock(parentBlocks[parentBlocks.length - 1]);
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!parentBlockData || !parentBlockData.attributes) {
      return false;
    }
    var _parentBlockData$attr = parentBlockData.attributes,
      colOrder_Option = _parentBlockData$attr.colOrder_Option,
      TABcolOrder_Option = _parentBlockData$attr.TABcolOrder_Option,
      MOBcolOrder_Option = _parentBlockData$attr.MOBcolOrder_Option,
      clGp_Range = _parentBlockData$attr.clGp_Range,
      TABclGp_Range = _parentBlockData$attr.TABclGp_Range,
      MOBclGp_Range = _parentBlockData$attr.MOBclGp_Range,
      clNum_Range = _parentBlockData$attr.clNum_Range,
      TABclNum_Range = _parentBlockData$attr.TABclNum_Range,
      MOBclNum_Range = _parentBlockData$attr.MOBclNum_Range;
    setIsParentColumnOrderDesktop(colOrder_Option === 'custom' ? true : false);
    setIsParentColumnOrderTab(TABcolOrder_Option === 'custom' ? true : false);
    setIsParentColumnOrderMobile(MOBcolOrder_Option === 'custom' ? true : false);
    setColumnGap({
      desktop: clGp_Range,
      tab: TABclGp_Range,
      mobile: MOBclGp_Range
    });
    setColumnNumber({
      desktop: clNum_Range,
      tab: TABclNum_Range || 2,
      mobile: MOBclNum_Range || 1
    });
  }, [parentBlockData]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var BLOCK_PREFIX = "frontis-column";
    var uniqueId = clientId.slice(0, 8);
    if (!blockId) {
      setAttributes({
        blockId: uniqueId
      });
    } else if (blockId !== uniqueId) {
      var uniqueBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlocks().filter(function (block) {
        return block.name === "frontis-blocks/column" && block.attributes.blockId === blockId;
      });
      if (uniqueBlocks.length > 1) {
        setAttributes({
          blockId: uniqueId
        });
      }
    }
  }, []);
  var selectVariation = function selectVariation(variation) {
    var innerBlocks = variation.innerBlocks;
    var newBlocks = innerBlocks.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        attributes = _ref2[1];
      return wp.blocks.createBlock(name, attributes);
    });
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)("core/block-editor").replaceInnerBlocks(clientId, newBlocks, false);
  };
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, "frontis-block-main-parent-wrapper frontis-column-editor-wrap frontis-column-editor-wrap-".concat(blockId))
  });
  if (isParentColumn && !hasInnerBlocks) {
    return /*#__PURE__*/React.createElement(_variationPicker__WEBPACK_IMPORTED_MODULE_7__.VariationPicker, _extends({}, props, {
      variations: variations,
      onSelect: selectVariation
    }));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
    colWrap: colWrap,
    initColWidth: initColWidth,
    initNextColWidth: initNextColWidth,
    initPrevColWidth: initPrevColWidth,
    nextBlockClientId: nextBlockClientId,
    prevBlockClientId: prevBlockClientId,
    setInitColWidth: setInitColWidth,
    setInitNextColWidth: setInitNextColWidth,
    setInitPrevColWidth: setInitPrevColWidth
  })), /*#__PURE__*/React.createElement("div", blockProps, nextBlockClientId && /*#__PURE__*/React.createElement("div", {
    className: "width-dragger-change",
    ref: draggerRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "dragger-inner"
  }, showWidthTooltip ? /*#__PURE__*/React.createElement("div", {
    className: "cols-width-tooltip"
  }, /*#__PURE__*/React.createElement("span", null, Math.round(desktopRange * 100) / 100), /*#__PURE__*/React.createElement("span", {
    className: "dashicons dashicons-leftright"
  }), /*#__PURE__*/React.createElement("span", null, Math.round(nextColWDhByUseState * 100) / 100)) : /*#__PURE__*/React.createElement("span", {
    className: "dashicons dashicons-leftright"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "frontis-parent-wrapper frontis-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "frontis-column-wrapper ".concat(blockId),
    ref: colWrap
  }, /*#__PURE__*/React.createElement("div", {
    className: "frontis-column-inner"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
    orientation: "vertical",
    templateLock: false,
    renderAppender: hasInnerBlocks ? undefined : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.ButtonBlockAppender
  }))))));
}

/***/ }),

/***/ "./src/blocks/column/inspector.js":
/*!****************************************!*\
  !*** ./src/blocks/column/inspector.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/blocks/column/constants.js");




var Inspector = function Inspector(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    colWrap = props.colWrap,
    nextBlockClientId = props.nextBlockClientId,
    prevBlockClientId = props.prevBlockClientId;
  var cw_Range = attributes.cw_Range,
    colAli = attributes.colAli,
    rowOverFlow = attributes.rowOverFlow,
    classHook = attributes.classHook,
    backgroundType = attributes.backgroundType,
    backgroundColor = attributes.backgroundColor,
    backgroundGradient = attributes.backgroundGradient,
    borderStyle = attributes.borderStyle,
    borderWidth = attributes.borderWidth,
    borderColor = attributes.borderColor,
    borderRadius = attributes.borderRadius,
    paddingTop = attributes.paddingTop,
    paddingRight = attributes.paddingRight,
    paddingBottom = attributes.paddingBottom,
    paddingLeft = attributes.paddingLeft,
    marginTop = attributes.marginTop,
    marginRight = attributes.marginRight,
    marginBottom = attributes.marginBottom,
    marginLeft = attributes.marginLeft;
  var onChangeColumnWidth = function onChangeColumnWidth(newWidth) {
    setAttributes({
      cw_Range: newWidth
    });
  };
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "frontis-column-inspector-tabs",
    activeClass: "active-tab",
    tabs: [{
      name: 'general',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'frontis-blocks'),
      className: 'frontis-column-tab'
    }, {
      name: 'style',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'frontis-blocks'),
      className: 'frontis-column-tab'
    }, {
      name: 'advanced',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced', 'frontis-blocks'),
      className: 'frontis-column-tab'
    }]
  }, function (tab) {
    if (tab.name === 'general') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Column Settings', 'frontis-blocks')
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Column Width', 'frontis-blocks'),
        value: cw_Range,
        onChange: onChangeColumnWidth,
        min: 0,
        max: 100
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical Alignment', 'frontis-blocks'),
        value: colAli,
        options: _constants__WEBPACK_IMPORTED_MODULE_3__.COLUMN_VERTICAL_ALIGNMENTS,
        onChange: function onChange(value) {
          return setAttributes({
            colAli: value
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overflow', 'frontis-blocks'),
        value: rowOverFlow,
        options: _constants__WEBPACK_IMPORTED_MODULE_3__.COLUMN_OVERFLOW,
        onChange: function onChange(value) {
          return setAttributes({
            rowOverFlow: value
          });
        }
      })));
    } else if (tab.name === 'style') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background', 'frontis-blocks')
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Type', 'frontis-blocks'),
        value: backgroundType,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'frontis-blocks'),
          value: 'color'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gradient', 'frontis-blocks'),
          value: 'gradient'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            backgroundType: value
          });
        }
      }), backgroundType === 'color' && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color Settings', 'frontis-blocks'),
        colorSettings: [{
          value: backgroundColor,
          onChange: function onChange(value) {
            return setAttributes({
              backgroundColor: value
            });
          },
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'frontis-blocks')
        }]
      }), backgroundType === 'gradient' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gradient', 'frontis-blocks'),
        value: backgroundGradient,
        onChange: function onChange(value) {
          return setAttributes({
            backgroundGradient: value
          });
        }
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'frontis-blocks')
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Style', 'frontis-blocks'),
        value: borderStyle,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'frontis-blocks'),
          value: 'none'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Solid', 'frontis-blocks'),
          value: 'solid'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dashed', 'frontis-blocks'),
          value: 'dashed'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dotted', 'frontis-blocks'),
          value: 'dotted'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            borderStyle: value
          });
        }
      }), borderStyle !== 'none' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Width', 'frontis-blocks'),
        value: borderWidth,
        onChange: function onChange(value) {
          return setAttributes({
            borderWidth: value
          });
        },
        min: 1,
        max: 10
      }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Color', 'frontis-blocks'),
        colorSettings: [{
          value: borderColor,
          onChange: function onChange(value) {
            return setAttributes({
              borderColor: value
            });
          },
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Color', 'frontis-blocks')
        }]
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius', 'frontis-blocks'),
        value: borderRadius,
        onChange: function onChange(value) {
          return setAttributes({
            borderRadius: value
          });
        },
        min: 0,
        max: 50
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Spacing', 'frontis-blocks')
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding Top', 'frontis-blocks'),
        value: paddingTop,
        onChange: function onChange(value) {
          return setAttributes({
            paddingTop: value
          });
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding Right', 'frontis-blocks'),
        value: paddingRight,
        onChange: function onChange(value) {
          return setAttributes({
            paddingRight: value
          });
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding Bottom', 'frontis-blocks'),
        value: paddingBottom,
        onChange: function onChange(value) {
          return setAttributes({
            paddingBottom: value
          });
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding Left', 'frontis-blocks'),
        value: paddingLeft,
        onChange: function onChange(value) {
          return setAttributes({
            paddingLeft: value
          });
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin Top', 'frontis-blocks'),
        value: marginTop,
        onChange: function onChange(value) {
          return setAttributes({
            marginTop: value
          });
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin Right', 'frontis-blocks'),
        value: marginRight,
        onChange: function onChange(value) {
          return setAttributes({
            marginRight: value
          });
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin Bottom', 'frontis-blocks'),
        value: marginBottom,
        onChange: function onChange(value) {
          return setAttributes({
            marginBottom: value
          });
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin Left', 'frontis-blocks'),
        value: marginLeft,
        onChange: function onChange(value) {
          return setAttributes({
            marginLeft: value
          });
        },
        min: 0,
        max: 100
      })));
    } else if (tab.name === 'advanced') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Additional', 'frontis-blocks')
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Additional CSS Class', 'frontis-blocks'),
        value: classHook,
        onChange: function onChange(value) {
          return setAttributes({
            classHook: value
          });
        }
      })));
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/column/save.js":
/*!***********************************!*\
  !*** ./src/blocks/column/save.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);

var save = function save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
    classHook = attributes.classHook;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "frontis-parent-wrapper frontis-parent-".concat(blockId, " ").concat(classHook, " ").concat(blockProps.className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "frontis-column-wrapper ".concat(blockId)
  }, /*#__PURE__*/React.createElement("div", {
    className: "frontis-column-inner"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/blocks/column/variationPicker.js":
/*!**********************************************!*\
  !*** ./src/blocks/column/variationPicker.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariationPicker: () => (/* binding */ VariationPicker)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/columns.js");



var VariationPicker = function VariationPicker(_ref) {
  var variations = _ref.variations,
    onSelect = _ref.onSelect;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Column Layout', 'frontis-blocks'),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a column layout to start with.', 'frontis-blocks')
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-column-variation-picker"
  }, variations.map(function (variation) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: variation.name,
      icon: variation.icon,
      onClick: function onClick() {
        return onSelect(variation);
      },
      variant: "secondary"
    }, variation.title);
  })));
};

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

var didWarnAboutKeySpread = {};
function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    {
      if (hasOwnProperty.call(props, 'key')) {
        var componentName = getComponentNameFromType(type);
        var keys = Object.keys(props).filter(function (k) {
          return k !== 'key';
        });
        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

          didWarnAboutKeySpread[componentName + beforeExample] = true;
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/column/block.json":
/*!**************************************!*\
  !*** ./src/blocks/column/block.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"frontis-blocks/column","version":"0.1.0","title":"Frontis Column","category":"frontis-blocks","icon":"columns","description":"A flexible column block for creating custom layouts.","supports":{"html":false,"anchor":true},"textdomain":"frontis-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************!*\
  !*** ./src/blocks/column/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/column/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/column/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/column/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/blocks/column/attributes.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


// import { ColumnIcon } from "./icon";


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, _objectSpread(_objectSpread({}, _block_json__WEBPACK_IMPORTED_MODULE_3__), {}, {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
}));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map