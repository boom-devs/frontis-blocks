/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/advanced-image/attributes.js":
/*!*************************************************!*\
  !*** ./src/blocks/advanced-image/attributes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var attributes = {
  blockID: {
    type: "string",
    "default": ""
  },
  deviceType: {
    type: "string",
    "default": "desktop"
  },
  imageId: {
    "type": "number"
  },
  DeviceType: {
    type: "string",
    "default": "Desktop"
  },
  imageAlt: {
    "type": "string",
    "source": "attribute",
    "selector": "img",
    "attribute": "alt",
    "default": ""
  },
  imageStyle: {
    type: "string",
    "default": ""
  },
  image: {
    type: "object",
    "default": {
      id: "",
      url: "",
      alt: ""
    }
  },
  imageUrl: {
    type: "string"
  },
  imageAlter: {
    type: "string"
  },
  imageID: {
    type: "number"
  },
  mediaSize: {
    type: 'object',
    "default": {
      Desktop: 100,
      Tablet: 100,
      Mobile: 100
    }
  },
  mediaHeight: {
    type: 'object',
    "default": {
      Desktop: 100,
      Tablet: 100,
      Mobile: 100
    }
  },
  mediaSizeUnits: {
    type: 'object',
    "default": {
      Desktop: '%',
      Tablet: '%',
      Mobile: '%'
    }
  },
  mediaHeightUnits: {
    type: 'object',
    "default": {
      Desktop: '%',
      Tablet: '%',
      Mobile: '%'
    }
  },
  imageSize: {
    type: "string"
  },
  imageFit: {
    type: "string"
  },
  imageHover: {
    type: "string"
  },
  imageCaption: {
    type: "string"
  },
  captionPosition: {
    type: "string"
  },
  captionAlignment: {
    type: "string",
    "default": "left"
  },
  selectedImgIndex: {
    type: "number"
  },
  displayCaption: {
    type: "boolean",
    "default": false
  },
  displayTitle: {
    type: "boolean",
    "default": false
  },
  titleText: {
    type: "string",
    "default": "Fly in the sky"
  },
  titleTag: {
    type: "string",
    "default": "h2"
  },
  titlePosition: {
    type: "string",
    "default": "center"
  },
  titleHoverEffects: {
    type: "string",
    "default": "tilt"
  },
  HeadingFontFamily: {
    type: "string",
    "default": "inherit"
  },
  HeadingFontSize: {
    type: "number",
    "default": 35
  },
  HeadingFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  HeadingFontWeight: {
    type: "string",
    "default": "700"
  },
  HeadingFontStyle: {
    type: "string",
    "default": "normal"
  },
  HeadingTextTransform: {
    type: "string",
    "default": "none"
  },
  HeadingTextDecoration: {
    type: "string",
    "default": "none"
  },
  HeadingLetterSpacing: {
    type: "number"
  },
  HeadingLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  HeadingLineHeight: {
    type: "number"
  },
  HeadingLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  HeadingColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  HeadingColor: {
    type: "string",
    "default": "#ffffff"
  },
  HeadingHoverColor: {
    type: 'string'
  },
  HeadingBackgroundColor: {
    type: 'string'
  },
  HeadingBorder: {
    type: 'string',
    "default": "none"
  },
  HeadingBorderColor: {
    type: 'string'
  },
  HeadingBorderHoverColor: {
    type: 'string'
  },
  HeadingBorderColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  HeadingBorderUnits: {
    type: "string",
    "default": "px"
  },
  HeadingDesktopBorderWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  HeadingTabBorderWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  HeadingMobileBorderWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  HeadingBorderLink: {
    type: "boolean",
    "default": true
  },
  HeadingBorderRadiusUnits: {
    type: "string",
    "default": "px"
  },
  HeadingDesktopBorderRadiusWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  HeadingTabBorderRadiusWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  HeadingMobileBorderRadiusWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  HeadingBorderRadiusLink: {
    type: "boolean",
    "default": true
  },
  HeadingPaddingUnits: {
    type: "string",
    "default": "px"
  },
  HeadingDesktopPadding: {
    type: "object",
    "default": {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20
    }
  },
  HeadingTabPadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  HeadingMobilePadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  HeadingPaddingLink: {
    type: "boolean",
    "default": true
  },
  HeadingMarginUnits: {
    type: "string",
    "default": "px"
  },
  HeadingDesktopMargin: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  HeadingTabMargin: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  HeadingMobileMargin: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  HeadingMarginLink: {
    type: "boolean",
    "default": true
  },
  autoHeightSwitch: {
    type: "boolean",
    "default": false
  },
  autoFitSwitch: {
    type: "boolean",
    "default": false
  },
  linkSwitch: {
    type: "boolean",
    "default": false
  },
  linkUrl: {
    type: "string",
    "default": ""
  },
  linkTargetUrl: {
    type: "boolean"
  },
  captionColor: {
    type: "string",
    "default": "var(--eb-global-primary-color)"
  },
  captionBGColor: {
    type: "string",
    "default": "var(--eb-global-background-color)"
  },
  horizontalAlign: {
    type: "string",
    "default": "center"
  },
  verticalAlign: {
    type: "string",
    "default": "bottom"
  },
  verticalAlignCap2: {
    type: "string",
    "default": "bottom"
  },
  hoverEffect: {
    type: "string",
    "default": "no-effect"
  },
  stylePreset: {
    type: "string",
    "default": "rounded"
  },
  complexStyle: {
    type: "boolean",
    "default": false
  },
  captionStyle: {
    type: "string",
    "default": "caption-style-1"
  },
  autoFit: {
    type: "boolean",
    "default": true
  },
  fitStyles: {
    type: "string",
    "default": "cover"
  },
  enableLink: {
    type: "boolean",
    "default": false
  },
  imageLink: {
    type: "string",
    "default": ""
  },
  openInNewTab: {
    type: "boolean",
    "default": false
  },
  imgSquare: {
    type: "string",
    "default": ''
  },
  imgCircle: {
    type: "string",
    "default": ''
  },
  imgRounded: {
    type: "string",
    "default": ''
  },
  autoHeight: {
    type: "boolean",
    "default": true
  },
  borderType: {
    type: "string",
    "default": "normal"
  },
  borderStyle: {
    type: 'string',
    "default": "none"
  },
  normalBorderColor: {
    type: "string"
  },
  normalBorderRadUnit: {
    type: "string",
    "default": "px"
  },
  normalBorderRad: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  normalBorderRadiusLink: {
    type: "boolean",
    "default": true
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/advanced-image/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/advanced-image/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/blocks/advanced-image/inspector.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/advanced-image/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




/**
 * Internal dependencies
 */



function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    clientId = _ref.clientId;
  var blockID = attributes.blockID,
    image = attributes.image,
    imageId = attributes.imageId,
    imageLink = attributes.imageLink,
    imageAlt = attributes.imageAlt,
    imageCaption = attributes.imageCaption,
    imageWidth = attributes.imageWidth,
    imageUrl = attributes.imageUrl,
    imgRounded = attributes.imgRounded,
    imgSquare = attributes.imgSquare,
    imgCircle = attributes.imgCircle,
    imageStyle = attributes.imageStyle,
    displayCaption = attributes.displayCaption,
    captionAlignment = attributes.captionAlignment,
    imageSize = attributes.imageSize,
    linkSwitch = attributes.linkSwitch,
    linkTargetUrl = attributes.linkTargetUrl,
    linkUrl = attributes.linkUrl,
    imageHover = attributes.imageHover,
    imageFit = attributes.imageFit,
    displayTitle = attributes.displayTitle,
    titleText = attributes.titleText,
    titleTag = attributes.titleTag,
    titlePosition = attributes.titlePosition;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  var handleLinkClick = function handleLinkClick(event) {
    event.preventDefault();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    clientId: clientId
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, imageUrl && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    onClick: function onClick() {
      return setAttributes({
        imageId: '',
        imageUrl: '',
        imageAlt: ''
      });
    },
    icon: "trash"
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        imageId: media.id,
        imageUrl: media.url,
        imageAlt: media.alt
      });
    },
    allowedTypes: ['image'],
    value: imageId,
    render: function render(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
        onClick: open,
        icon: "edit"
      });
    }
  })))), /*#__PURE__*/React.createElement("div", _extends({}, blockProps, {
    id: blockID
  }), /*#__PURE__*/React.createElement("div", {
    className: "fb-advanced-image-wrapper ".concat(blockID)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-advanced-image ".concat(imageStyle, " ").concat(imageSize, " ").concat(imageHover, " ").concat(imageFit, " ").concat(titlePosition)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-advanced-image-inner"
  }, imageUrl ? /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    alt: imageAlt
  }) : /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
    onSelect: function onSelect(media) {
      return setAttributes({
        imageId: media.id,
        imageUrl: media.url,
        imageAlt: media.alt
      });
    },
    allowedTypes: ['image'],
    multiple: false,
    labels: {
      title: 'Add Author Image'
    }
  })), displayTitle && /*#__PURE__*/React.createElement("div", {
    className: "fb-advanced-image-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-advanced-image-title-inner"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: titleTag,
    value: titleText,
    onChange: function onChange(value) {
      return setAttributes({
        titleText: value
      });
    },
    placeholder: "Add your title here...",
    className: "fb-advanced-title"
  }))), displayCaption && /*#__PURE__*/React.createElement("div", {
    className: "fb-advanced-image-caption"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "figcaption",
    value: imageCaption,
    onChange: function onChange(value) {
      return setAttributes({
        imageCaption: value
      });
    },
    placeholder: "Add your caption here..."
  }))))));
}

/***/ }),

/***/ "./src/blocks/advanced-image/index.js":
/*!********************************************!*\
  !*** ./src/blocks/advanced-image/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/advanced-image/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/advanced-image/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/advanced-image/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/blocks/advanced-image/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/advanced-image/block.json");
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
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/advanced-image/inspector.js":
/*!************************************************!*\
  !*** ./src/blocks/advanced-image/inspector.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inspector)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_responsive_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/responsive-control */ "./src/components/responsive-control/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/advanced-image/editor.scss");
/* harmony import */ var _Components_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/range */ "./src/components/range/index.js");
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






// import {BORDER_STYLES, NORMAL_HOVER, UNIT_TYPES} from "../advanced-button/constants/constants";
// import {FONT_FAMILYS, HEADING, TEXT_ALIGN} from "@Blocks/advanced-heading/constants/constants";

function Inspector(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    clientId = _ref.clientId;
  var blockID = attributes.blockID,
    deviceType = attributes.deviceType,
    DeviceType = attributes.DeviceType,
    imageStyle = attributes.imageStyle,
    displayCaption = attributes.displayCaption,
    imageSize = attributes.imageSize,
    imageWidth = attributes.imageWidth,
    horizontalAlign = attributes.horizontalAlign,
    borderType = attributes.borderType,
    normalBorderColor = attributes.normalBorderColor,
    borderStyle = attributes.borderStyle,
    normalBorderRadUnit = attributes.normalBorderRadUnit,
    normalBorderRad = attributes.normalBorderRad,
    normalBorderRadiusLink = attributes.normalBorderRadiusLink,
    autoHeightSwitch = attributes.autoHeightSwitch,
    autoFitSwitch = attributes.autoFitSwitch,
    linkSwitch = attributes.linkSwitch,
    captionAlignment = attributes.captionAlignment,
    mediaHeight = attributes.mediaHeight,
    mediaSize = attributes.mediaSize,
    mediaSizeUnits = attributes.mediaSizeUnits,
    mediaHeightUnits = attributes.mediaHeightUnits,
    linkUrl = attributes.linkUrl,
    linkTargetUrl = attributes.linkTargetUrl,
    imageHover = attributes.imageHover,
    imageFit = attributes.imageFit,
    displayTitle = attributes.displayTitle,
    titleText = attributes.titleText,
    titleTag = attributes.titleTag,
    HeadingFontFamily = attributes.HeadingFontFamily,
    HeadingFontSize = attributes.HeadingFontSize,
    HeadingFontSizeUnits = attributes.HeadingFontSizeUnits,
    HeadingFontWeight = attributes.HeadingFontWeight,
    HeadingFontStyle = attributes.HeadingFontStyle,
    HeadingTextTransform = attributes.HeadingTextTransform,
    HeadingTextDecoration = attributes.HeadingTextDecoration,
    HeadingLetterSpacing = attributes.HeadingLetterSpacing,
    HeadingLetterSpacingUnits = attributes.HeadingLetterSpacingUnits,
    HeadingLineHeight = attributes.HeadingLineHeight,
    HeadingLineHeightUnits = attributes.HeadingLineHeightUnits,
    HeadingColorSwitcher = attributes.HeadingColorSwitcher,
    HeadingColor = attributes.HeadingColor,
    HeadingHoverColor = attributes.HeadingHoverColor,
    HeadingBackgroundColor = attributes.HeadingBackgroundColor,
    HeadingBorder = attributes.HeadingBorder,
    HeadingBorderColor = attributes.HeadingBorderColor,
    HeadingBorderHoverColor = attributes.HeadingBorderHoverColor,
    HeadingBorderColorSwitcher = attributes.HeadingBorderColorSwitcher,
    HeadingBorderUnits = attributes.HeadingBorderUnits,
    HeadingDesktopBorderWidth = attributes.HeadingDesktopBorderWidth,
    HeadingTabBorderWidth = attributes.HeadingTabBorderWidth,
    HeadingMobileBorderWidth = attributes.HeadingMobileBorderWidth,
    HeadingBorderLink = attributes.HeadingBorderLink,
    HeadingBorderRadiusUnits = attributes.HeadingBorderRadiusUnits,
    HeadingDesktopBorderRadiusWidth = attributes.HeadingDesktopBorderRadiusWidth,
    HeadingTabBorderRadiusWidth = attributes.HeadingTabBorderRadiusWidth,
    HeadingMobileBorderRadiusWidth = attributes.HeadingMobileBorderRadiusWidth,
    HeadingBorderRadiusLink = attributes.HeadingBorderRadiusLink,
    HeadingPaddingUnits = attributes.HeadingPaddingUnits,
    HeadingDesktopPadding = attributes.HeadingDesktopPadding,
    HeadingTabPadding = attributes.HeadingTabPadding,
    HeadingMobilePadding = attributes.HeadingMobilePadding,
    HeadingPaddingLink = attributes.HeadingPaddingLink,
    HeadingMarginUnits = attributes.HeadingMarginUnits,
    HeadingDesktopMargin = attributes.HeadingDesktopMargin,
    HeadingTabMargin = attributes.HeadingTabMargin,
    HeadingMobileMargin = attributes.HeadingMobileMargin,
    HeadingMarginLink = attributes.HeadingMarginLink,
    titlePosition = attributes.titlePosition,
    titleHoverEffects = attributes.titleHoverEffects;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (clientId && typeof clientId === 'string') {
      setAttributes({
        blockID: "fb-advanced-image-" + clientId.slice(0, 8)
      });
    }
  }, [clientId]);

  // Handle device
  var handleDevice = function handleDevice(device) {
    setAttributes({
      deviceType: device
    });
  };
  var mediaSizeHandler = function mediaSizeHandler(value) {
    setAttributes({
      mediaSize: value
    });
  };
  var mediaHeightHandler = function mediaHeightHandler(value) {
    setAttributes({
      mediaHeight: value
    });
  };
  var mediaSizeUnitsHandler = function mediaSizeUnitsHandler(value) {
    setAttributes({
      mediaSizeUnits: value
    });
  };
  var mediaHeightUnitsHandler = function mediaHeightUnitsHandler(value) {
    setAttributes({
      mediaHeightUnits: value
    });
  };

  /** Function to handle ButtonBorderRadiusLink toggle */
  var handleImageBorderRadiusWidthLinkToggle = function handleImageBorderRadiusWidthLinkToggle() {
    setAttributes({
      normalBorderRadiusLink: !normalBorderRadiusLink
    });
  };

  /** Function to handle input change */
  var handleBorderRadius = function handleBorderRadius(e, direction) {
    var value = e.target.value;
    switch (DeviceType) {
      case 'Desktop':
        setAttributes({
          normalBorderRad: _objectSpread(_objectSpread({}, normalBorderRad), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'Tablet':
        setAttributes({
          normalBorderRad: _objectSpread(_objectSpread({}, normalBorderRad), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'Mobile':
        setAttributes({
          normalBorderRad: _objectSpread(_objectSpread({}, normalBorderRad), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }

    /** if ButtonBorderRadiusLink is true */
    if (normalBorderRadiusLink) {
      updateAllBorderRadiusWidth(value, DeviceType);
    }
  };

  /** Function to update all Border Width values */
  var updateImageBorderRadiusWidth = function updateImageBorderRadiusWidth(value, device) {
    switch (device) {
      case 'Desktop':
        setAttributes({
          ButtonDesktopBorderRadiusWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'Tablet':
        setAttributes({
          ButtonTabBorderRadiusWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'Mobile':
        setAttributes({
          ButtonMobileBorderRadiusWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      default:
        break;
    }
  };

  /** Start Padding */
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(HeadingDesktopPadding),
    _useState2 = _slicedToArray(_useState, 2),
    previousPadding = _useState2[0],
    setPreviousPadding = _useState2[1];
  /** Function to update all padding values */
  var updateAllPadding = function updateAllPadding(value, device) {
    switch (device) {
      case 'Desktop':
        setAttributes({
          HeadingDesktopPadding: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'Tablet':
        setAttributes({
          HeadingTabPadding: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'Mobile':
        setAttributes({
          HeadingMobilePadding: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      default:
        break;
    }
  };

  /** Function to handle input change */
  var handlePaddingInputChange = function handlePaddingInputChange(e, direction) {
    var value = e.target.value;
    switch (DeviceType) {
      case 'Desktop':
        setAttributes({
          HeadingDesktopPadding: _objectSpread(_objectSpread({}, HeadingDesktopPadding), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'Tablet':
        setAttributes({
          HeadingTabPadding: _objectSpread(_objectSpread({}, HeadingTabPadding), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'Mobile':
        setAttributes({
          HeadingMobilePadding: _objectSpread(_objectSpread({}, HeadingMobilePadding), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }
    /** Update all padding values if HeadingPaddingLink is true */
    if (HeadingPaddingLink) {
      updateAllPadding(value, DeviceType);
    }
  };

  /** Function to handle HeadingPaddingLink toggle */
  var handleHeadingPaddingLinkToggle = function handleHeadingPaddingLinkToggle() {
    if (!HeadingPaddingLink) {
      setAttributes({
        HeadingDesktopPadding: previousPadding
      });
    }
    /** setHeadingPaddingLink(!HeadingPaddingLink) */
    setAttributes({
      HeadingPaddingLink: !HeadingPaddingLink
    });
  };

  /** Update previousPadding state when padding changes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setPreviousPadding(HeadingDesktopPadding);
  }, [HeadingDesktopPadding]);

  /** Function to handle device click for padding */
  var handlePaddingDeviceClick = function handlePaddingDeviceClick(device) {
    setAttributes({
      DeviceType: device
    });
  };

  /** Default padding for desktop (using desktop_padding) */
  var padding = "".concat(HeadingDesktopPadding.top).concat(HeadingPaddingUnits, " ").concat(HeadingDesktopPadding.right).concat(HeadingPaddingUnits, " ").concat(HeadingDesktopPadding.bottom).concat(HeadingPaddingUnits, " ").concat(HeadingDesktopPadding.left).concat(HeadingPaddingUnits);
  /** End Padding */

  /** Start Margin */
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(HeadingDesktopMargin),
    _useState4 = _slicedToArray(_useState3, 2),
    previousMargin = _useState4[0],
    setPreviousMargin = _useState4[1];
  /** Function to update all margin values */
  var updateAllMargin = function updateAllMargin(value, device) {
    switch (device) {
      case 'Desktop':
        setAttributes({
          HeadingDesktopMargin: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'Tablet':
        setAttributes({
          HeadingTabMargin: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'Mobile':
        setAttributes({
          HeadingMobileMargin: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      default:
        break;
    }
  };

  /** Function to handle input change */
  var handleMarginInputChange = function handleMarginInputChange(e, direction) {
    var value = e.target.value;
    switch (DeviceType) {
      case 'Desktop':
        setAttributes({
          HeadingDesktopMargin: _objectSpread(_objectSpread({}, HeadingDesktopMargin), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'Tablet':
        setAttributes({
          HeadingTabMargin: _objectSpread(_objectSpread({}, HeadingTabMargin), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'Mobile':
        setAttributes({
          HeadingMobileMargin: _objectSpread(_objectSpread({}, HeadingMobileMargin), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }
    /** Update all margin values if marginLink is true */
    if (HeadingMarginLink) {
      updateAllMargin(value, DeviceType);
    }
  };

  /** Function to handle marginLink toggle */
  var handleMarginLinkToggle = function handleMarginLinkToggle() {
    if (!HeadingMarginLink) {
      setAttributes({
        HeadingDesktopMargin: previousMargin
      });
    }
    /** setmarginLink(!marginLink) */
    setAttributes({
      HeadingMarginLink: !HeadingMarginLink
    });
  };

  /** Update previousMargin state when margin changes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setPreviousMargin(HeadingDesktopMargin);
  }, [HeadingDesktopMargin]);

  /** Function to handle device click for margin */
  var handleMarginDeviceClick = function handleMarginDeviceClick(device) {
    setAttributes({
      DeviceType: device
    });
  };

  /** Default margin for desktop (using desktop_margin) */
  var margin = "".concat(HeadingDesktopMargin.top).concat(HeadingPaddingUnits, " ").concat(HeadingDesktopMargin.right).concat(HeadingPaddingUnits, " ").concat(HeadingDesktopMargin.bottom).concat(HeadingPaddingUnits, " ").concat(HeadingDesktopMargin.left).concat(HeadingPaddingUnits);
  /** End Margin */

  /** Start Border Width */
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(HeadingDesktopBorderWidth),
    _useState6 = _slicedToArray(_useState5, 2),
    previousBorderWidth = _useState6[0],
    setPreviousBorderWidth = _useState6[1];
  /** Function to update all Border Width values */
  var updateAllBorderWidth = function updateAllBorderWidth(value, device) {
    switch (device) {
      case 'Desktop':
        setAttributes({
          HeadingDesktopBorderWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'Tablet':
        setAttributes({
          HeadingTabBorderWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'Mobile':
        setAttributes({
          HeadingMobileBorderWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      default:
        break;
    }
  };

  /** Function to handle input change */
  var handleBorderWidthInputChange = function handleBorderWidthInputChange(e, direction) {
    var value = e.target.value;
    switch (DeviceType) {
      case 'Desktop':
        setAttributes({
          HeadingDesktopBorderWidth: _objectSpread(_objectSpread({}, HeadingDesktopBorderWidth), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'Tablet':
        setAttributes({
          HeadingTabBorderWidth: _objectSpread(_objectSpread({}, HeadingTabBorderWidth), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'Mobile':
        setAttributes({
          HeadingMobileBorderWidth: _objectSpread(_objectSpread({}, HeadingMobileBorderWidth), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }
    /** Update all padding values if HeadingBorderLink is true */
    if (HeadingBorderLink) {
      updateAllBorderWidth(value, DeviceType);
    }
  };

  /** Function to handle HeadingBorderLink toggle */
  var handleBorderWidthLinkToggle = function handleBorderWidthLinkToggle() {
    if (!HeadingBorderLink) {
      setAttributes({
        HeadingDesktopBorderWidth: previousBorderWidth
      });
    }
    /** setHeadingBorderLinkLink(!HeadingBorderLink) */
    setAttributes({
      HeadingBorderLink: !HeadingBorderLink
    });
  };

  /** Update previousborderWidth state when Border Width changes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setPreviousBorderWidth(HeadingDesktopBorderWidth);
  }, [HeadingDesktopBorderWidth]);

  /** Function to handle device click for Border Width */
  var handleBorderWidthDeviceClick = function handleBorderWidthDeviceClick(device) {
    setAttributes({
      DeviceType: device
    });
  };

  /** Default Border Width for desktop (using HeadingDesktopBorderWidth) */
  var borderWidth = "".concat(HeadingDesktopBorderWidth.top).concat(HeadingBorderUnits, " ").concat(HeadingDesktopBorderWidth.right).concat(HeadingBorderUnits, " ").concat(HeadingDesktopBorderWidth.bottom).concat(HeadingBorderUnits, " ").concat(HeadingDesktopBorderWidth.left).concat(HeadingBorderUnits);
  /** End Border Width */

  /** Start Border Radius Width */
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(HeadingDesktopBorderRadiusWidth),
    _useState8 = _slicedToArray(_useState7, 2),
    previousBorderRadiusWidth = _useState8[0],
    setPreviousBorderRadiusWidth = _useState8[1];
  /** Function to update all Border Width values */
  var updateAllBorderRadiusWidth = function updateAllBorderRadiusWidth(value, device) {
    switch (device) {
      case 'Desktop':
        setAttributes({
          HeadingDesktopBorderRadiusWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'Tablet':
        setAttributes({
          HeadingTabBorderRadiusWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'Mobile':
        setAttributes({
          HeadingMobileBorderRadiusWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      default:
        break;
    }
  };

  /** Function to handle input change */
  var handleBorderRadiusWidthInputChange = function handleBorderRadiusWidthInputChange(e, direction) {
    var value = e.target.value;
    switch (DeviceType) {
      case 'Desktop':
        setAttributes({
          HeadingDesktopBorderRadiusWidth: _objectSpread(_objectSpread({}, HeadingDesktopBorderRadiusWidth), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'Tablet':
        setAttributes({
          HeadingTabBorderRadiusWidth: _objectSpread(_objectSpread({}, HeadingTabBorderRadiusWidth), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'Mobile':
        setAttributes({
          HeadingMobileBorderRadiusWidth: _objectSpread(_objectSpread({}, HeadingMobileBorderRadiusWidth), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }
    /** Update all padding values if HeadingBorderRadiusLink is true */
    if (HeadingBorderRadiusLink) {
      updateAllBorderRadiusWidth(value, DeviceType);
    }
  };

  /** Function to handle HeadingBorderRadiusLink toggle */
  var handleBorderRadiusWidthLinkToggle = function handleBorderRadiusWidthLinkToggle() {
    if (!HeadingBorderRadiusLink) {
      setAttributes({
        HeadingDesktopBorderRadiusWidth: previousBorderRadiusWidth
      });
    }
    /** setHeadingBorderRadiusLinkLink(!HeadingBorderRadiusLink) */
    setAttributes({
      HeadingBorderRadiusLink: !HeadingBorderRadiusLink
    });
  };

  /** Update previousBorderRadiusWidth state when Border Width changes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setPreviousBorderRadiusWidth(HeadingDesktopBorderRadiusWidth);
  }, [HeadingDesktopBorderRadiusWidth]);

  /** Function to handle device click for Border Width */
  var handleBorderRadiusWidthDeviceClick = function handleBorderRadiusWidthDeviceClick(device) {
    setAttributes({
      DeviceType: device
    });
  };

  /** Default Border Width for desktop (using HeadingDesktopBorderWidth) */
  var borderRadiusWidth = "".concat(HeadingDesktopBorderRadiusWidth.top).concat(HeadingBorderRadiusUnits, " ").concat(HeadingDesktopBorderRadiusWidth.right).concat(HeadingBorderRadiusUnits, " ").concat(HeadingDesktopBorderRadiusWidth.bottom).concat(HeadingBorderRadiusUnits, " ").concat(HeadingDesktopBorderRadiusWidth.left).concat(HeadingBorderRadiusUnits);
  /** End Border Radius Width */

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t.fb-advanced-image-wrapper.".concat(blockID, " .fb-advanced-image .fb-advanced-image-inner {\n                    width: ").concat(mediaSize.Desktop).concat(mediaSizeUnits.Desktop, ";\n                    ").concat(autoHeightSwitch ? "height: auto;" : "height: ".concat(mediaHeight.Desktop).concat(mediaHeightUnits.Desktop), ";\n                }\n                @media all and (max-width: 1024px){\n                .fb-advanced-image-wrapper.").concat(blockID, " .fb-advanced-image .fb-advanced-image-inner {\n                    width: ").concat(mediaSize.Tablet).concat(mediaSizeUnits.Tablet, ";\n                    ").concat(autoHeightSwitch ? "height: auto;" : "height: ".concat(mediaHeight.Tablet).concat(mediaHeightUnits.Tablet), ";\n                }\n                }\n                @media all and (max-width: 767px){\n                .fb-advanced-image-wrapper.").concat(blockID, " .fb-advanced-image .fb-advanced-image-inner {\n                    width: ").concat(mediaSize.Mobile).concat(mediaSizeUnits.Mobile, ";\n                    ").concat(autoHeightSwitch ? "height: auto;" : "height: ".concat(mediaHeight.Mobile).concat(mediaHeightUnits.Mobile), ";\n                }\n                }\n                .fb-advanced-image-wrapper.").concat(blockID, " .fb-advanced-image-caption figcaption {\n                    text-align: ").concat(captionAlignment, ";\n                }\n                .fb-advanced-image-wrapper.").concat(blockID, " .fb-advanced-image .fb-advanced-image-title .fb-advanced-title{\n                    ").concat(HeadingColor !== undefined ? "color: ".concat(HeadingColor, ";") : '', "\n                    ").concat(HeadingBackgroundColor !== undefined ? "background-color: ".concat(HeadingBackgroundColor, ";") : '', "\n                    font-family: ").concat(HeadingFontFamily !== 'default' ? HeadingFontFamily : HeadingFontFamily, ";\n                    font-size: ").concat(HeadingFontSize !== undefined ? "".concat(HeadingFontSize).concat(HeadingFontSizeUnits) : '', ";\n                    font-weight: ").concat(HeadingFontWeight, ";\n                    font-style: ").concat(HeadingFontStyle, ";\n                    text-transform: ").concat(HeadingTextTransform, ";\n                    text-decoration: ").concat(HeadingTextDecoration, ";\n                    ").concat(HeadingLetterSpacing !== undefined ? "letter-spacing: ".concat(HeadingLetterSpacing).concat(HeadingLetterSpacingUnits, ";") : '', "\n                    ").concat(HeadingLineHeight !== undefined ? "line-height: ".concat(HeadingLineHeight).concat(HeadingLineHeightUnits, ";") : '', "\n                    transition: all .3s ease-in-out;\n                    padding: ").concat(padding, ";\n                    margin: ").concat(margin, ";\n                    border: ").concat(HeadingBorder, ";\n                    border-width: ").concat(borderWidth, ";\n                    border-radius: ").concat(borderRadiusWidth, ";\n                    ").concat(HeadingBorderColor !== undefined ? "border-color: ".concat(HeadingBorderColor, ";") : '', "\n                }\n                @media all and (max-width: 1024px){\n                .fb-advanced-image-wrapper.").concat(blockID, " .fb-advanced-image .fb-advanced-image-title .fb-advanced-title{\n                    width: ").concat(mediaSize.Tablet).concat(mediaSizeUnits.Tablet, ";\n                    ").concat(autoHeightSwitch ? "height: auto;" : "height: ".concat(mediaHeight.Tablet).concat(mediaHeightUnits.Tablet), ";\n                }\n                }\n                @media all and (max-width: 767px){\n                .fb-advanced-image-wrapper.").concat(blockID, " .fb-advanced-image .fb-advanced-image-title .fb-advanced-title{\n                    width: ").concat(mediaSize.Mobile).concat(mediaSizeUnits.Mobile, ";\n                    ").concat(autoHeightSwitch ? "height: auto;" : "height: ".concat(mediaHeight.Mobile).concat(mediaHeightUnits.Mobile), ";\n                }\n                }\n\n            ")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-inspector-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "fb-parent-tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: "general",
      title: "General",
      className: "fb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "fb-tab styles"
    }, {
      name: "advanced",
      title: "Advanced",
      className: "fb-tab advanced"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "fb-tab-controls" + tab.name
    }, tab.name === 'general' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "fb-advanced-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General", "frontis-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Styles", "frontis-blocks"),
      value: imageStyle || 'square',
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Circle", "frontis-blocks"),
        value: "circle"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Square", "frontis-blocks"),
        value: "square"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded", "frontis-blocks"),
        value: "rounded"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Octagon", "frontis-blocks"),
        value: "octagon"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Triangle", "frontis-blocks"),
        value: "triangle"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rhombus", "frontis-blocks"),
        value: "rhombus"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hexagon", "frontis-blocks"),
        value: "hexagon"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bevel", "frontis-blocks"),
        value: "bevel"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abstract", "frontis-blocks"),
        value: "abstract"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Container", "frontis-blocks"),
        value: "container"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aesthetic Blob", "frontis-blocks"),
        value: "aesthetic-blob"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aesthetic Blob 2", "frontis-blocks"),
        value: "aesthetic-blob-2"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aesthetic Blob 3", "frontis-blocks"),
        value: "aesthetic-blob-3"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aesthetic Blob 4", "frontis-blocks"),
        value: "aesthetic-blob-4"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Irregular Blob", "frontis-blocks"),
        value: "irregular-blob"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Triangle Blob", "frontis-blocks"),
        value: "triangle-blob"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlaped Blob", "frontis-blocks"),
        value: "overlaped-blob"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Seperate Blob", "frontis-blocks"),
        value: "seperate-blob"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pattern", "frontis-blocks"),
        value: "pattern"
      }],
      onChange: function onChange(newStyle) {
        return setAttributes({
          imageStyle: newStyle
        });
      },
      __nextHasNoMarginBottom: true
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      __nextHasNoMarginBottom: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Caption', 'frontis-block'),
      checked: displayCaption,
      onChange: function onChange(newValue) {
        setAttributes({
          displayCaption: newValue
        });
      }
    }), displayCaption && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caption Alignment", "frontis-blocks"),
      id: "fb-setting-text-alignment",
      className: "fb-setting-text-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-text-alignment-group-btn"
    }, TEXT_ALIGN.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            captionAlignment: item.value
          });
        },
        className: "fb-setting-text-alignment-single-btn ".concat(captionAlignment === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      __nextHasNoMarginBottom: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Title', 'frontis-block'),
      checked: displayTitle,
      onChange: function onChange(newValue) {
        setAttributes({
          displayTitle: newValue
        });
      }
    }), displayTitle && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      value: titleText,
      onChange: function onChange(value) {
        return setAttributes({
          titleText: value
        });
      },
      className: "fb-advance-title",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter Title', 'frontis-blocks')
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title Tag", "frontis-blocks"),
      id: "fb-setting-text-alignment",
      className: "fb-setting-text-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-text-alignment-group-btn"
    }, HEADING.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            titleTag: item.value
          });
        },
        className: "fb-setting-text-alignment-single-btn ".concat(titleTag === item.value ? 'active' : '')
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title Position", "frontis-blocks"),
      value: titlePosition || 'center',
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "frontis-blocks"),
        value: "center"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center Left", "frontis-blocks"),
        value: "center-left"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center Right", "frontis-blocks"),
        value: "center-right"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top Left", "frontis-blocks"),
        value: "top-left"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top Center", "frontis-blocks"),
        value: "top-center"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top Right", "frontis-blocks"),
        value: "top-right"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom Left", "frontis-blocks"),
        value: "bottom-left"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom Center", "frontis-blocks"),
        value: "bottom-center"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom Right", "frontis-blocks"),
        value: "bottom-right"
      }],
      onChange: function onChange(value) {
        return setAttributes({
          titlePosition: value
        });
      },
      __nextHasNoMarginBottom: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Size", "frontis-blocks"),
      value: imageSize || 'default',
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
        value: "default"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail", "frontis-blocks"),
        value: "thumbnail"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Medium", "frontis-blocks"),
        value: "medium"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large", "frontis-blocks"),
        value: "large"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Full Size", "frontis-blocks"),
        value: "full-size"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom", "frontis-blocks"),
        value: "custom"
      }],
      onChange: function onChange(size) {
        return setAttributes({
          imageSize: size
        });
      },
      __nextHasNoMarginBottom: true
    }), imageSize === 'custom' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 1400,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "frontis-blocks"),
      rangeValue: mediaSize,
      onChangeHandler: mediaSizeHandler,
      rangeUnitHandler: mediaSizeUnitsHandler,
      DeviceType: DeviceType,
      units: mediaSizeUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: 200
    }), /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 1400,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "frontis-blocks"),
      rangeValue: mediaHeight,
      onChangeHandler: mediaHeightHandler,
      rangeUnitHandler: mediaHeightUnitsHandler,
      DeviceType: DeviceType,
      units: mediaHeightUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: 200
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      __nextHasNoMarginBottom: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Auto Height', 'frontis-block'),
      checked: autoHeightSwitch,
      onChange: function onChange(newValue) {
        setAttributes({
          autoHeightSwitch: newValue
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      __nextHasNoMarginBottom: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Auto Fit Image?', 'frontis-block'),
      checked: autoFitSwitch,
      onChange: function onChange(newValue) {
        setAttributes({
          autoFitSwitch: newValue
        });
      }
    }), autoFitSwitch && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Fit Options", "frontis-blocks"),
      value: imageFit || 'cover',
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cover", "frontis-blocks"),
        value: "cover"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill", "frontis-blocks"),
        value: "fill"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contain", "frontis-blocks"),
        value: "contain"
      }],
      onChange: function onChange(size) {
        return setAttributes({
          imageFit: size
        });
      },
      __nextHasNoMarginBottom: true
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      __nextHasNoMarginBottom: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Link?', 'frontis-block'),
      checked: linkSwitch,
      onChange: function onChange(newValue) {
        setAttributes({
          linkSwitch: newValue
        });
      }
    }), linkSwitch && /*#__PURE__*/React.createElement("div", {
      className: "fb-link-control-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("URL", "frontis-blocks")
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-link-control-inner-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      value: linkUrl,
      onChange: function onChange(value) {
        return setAttributes({
          linkUrl: value
        });
      },
      className: "fb-link-control-url",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('https://', 'frontis-blocks')
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-dropdown-icon-wrapper",
      contentClassName: "fb-setting-dropdown-icon-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref2) {
        var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-dropdown-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-dropdown-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-link-control-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          className: "fb-link-control-icon-popup-inner"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open in new tab", "frontis-blocks"),
          checked: linkTargetUrl,
          onChange: function onChange(value) {
            return setAttributes({
              linkTargetUrl: value
            });
          }
        })));
      }
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Effect", "frontis-blocks"),
      value: imageHover,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No Effect", "frontis-blocks"),
        value: "no-effect"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom In", "frontis-blocks"),
        value: "zoom-in"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom Out", "frontis-blocks"),
        value: "zoom-out"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide", "frontis-blocks"),
        value: "slide"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Blur", "frontis-blocks"),
        value: "blur"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlay", "frontis-blocks"),
        value: "overlay"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tilt", "frontis-blocks"),
        value: "tilt"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skew", "frontis-blocks"),
        value: "skew"
      }],
      onChange: function onChange(size) {
        return setAttributes({
          imageHover: size
        });
      },
      __nextHasNoMarginBottom: true
    })))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image", "frontis-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Align', 'frontis-block'),
      device: DeviceType,
      deviceHandler: handleDevice
    }), /*#__PURE__*/React.createElement("div", {
      className: 'fb-setting-color-panel-wrapper'
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: function onClick() {
        return setAttributes({
          horizontalAlign: 'left'
        });
      },
      className: "fb-setting-color-panel-btn-switchr ".concat(horizontalAlign === 'left' ? 'active' : '')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'frontis-block')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: function onClick() {
        return setAttributes({
          horizontalAlign: 'center'
        });
      },
      className: "fb-setting-color-panel-btn-switchr ".concat(horizontalAlign === 'center' ? 'active' : '')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'frontis-block')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: function onClick() {
        return setAttributes({
          horizontalAlign: 'right'
        });
      },
      className: "fb-setting-color-panel-btn-switchr ".concat(horizontalAlign === 'right' ? 'active' : '')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'frontis-block')), /*#__PURE__*/React.createElement("span", {
      className: "dashicons dashicons-image-rotate"
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border", "frontis-blocks"),
      className: "fb-setting-color-panel-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: function onClick() {
        return setAttributes({
          borderType: 'normal'
        });
      },
      className: "fb-setting-color-panel-btn-switchr ".concat(borderType === 'normal' ? 'active' : '')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'frontis-block')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: function onClick() {
        return setAttributes({
          borderType: 'hover'
        });
      },
      className: "fb-setting-color-panel-btn-switchr ".concat(borderType === 'hover' ? 'active' : '')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'frontis-block')), /*#__PURE__*/React.createElement("span", {
      className: "dashicons dashicons-image-rotate"
    }))), borderType === 'normal' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Style", "frontis-blocks"),
      value: borderStyle,
      options: BORDER_STYLES,
      onChange: function onChange(value) {
        return setAttributes({
          borderStyle: value
        });
      }
    }), borderStyle !== 'none' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref3) {
        var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "frontis-blocks"),
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
          color: normalBorderColor,
          onChange: function onChange(value) {
            return setAttributes({
              normalBorderColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
          colors: [{
            color: '#F72585'
          }, {
            color: '#7209B7'
          }, {
            color: '#3A0CA3'
          }, {
            color: '#4361EE'
          }, {
            color: '#4CC9F0'
          }],
          disableCustomColors: true,
          value: normalBorderColor,
          onChange: function onChange(value) {
            return setAttributes({
              normalBorderColor: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-inner-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-label-container"
    }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius', 'frontis-block'),
      device: DeviceType,
      deviceHandler: handleDevice
    }), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-units-type-wrap"
    }, UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            normalBorderRadUnit: item.value
          });
        },
        className: "fb-setting-units-type-switcher ".concat(normalBorderRadUnit === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-blocks")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: DeviceType === 'Desktop' ? normalBorderRad.top : DeviceType === 'Tablet' ? normalBorderRad.top : normalBorderRad.top,
      onChange: function onChange(e) {
        return handleBorderRadius(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-blocks")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: DeviceType === 'Desktop' ? normalBorderRad.right : DeviceType === 'Tablet' ? normalBorderRad.right : normalBorderRad.right,
      onChange: function onChange(e) {
        return handleBorderRadius(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-blocks")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: DeviceType === 'Desktop' ? normalBorderRad.bottom : DeviceType === 'Tablet' ? normalBorderRad.bottom : normalBorderRad.bottom,
      onChange: function onChange(e) {
        return handleBorderRadius(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-blocks")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: DeviceType === 'Desktop' ? normalBorderRad.left : DeviceType === 'Tablet' ? normalBorderRad.left : normalBorderRad.left,
      onChange: function onChange(e) {
        return handleBorderRadius(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(normalBorderRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(normalBorderRadiusLink ? 'is-checked' : ''),
      onClick: handleBorderRadiusWidthLinkToggle
    }))))))) : /*#__PURE__*/React.createElement("div", null, "HOver")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "frontis-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-blocks"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-dropdown-icon-wrapper",
      contentClassName: "fb-setting-dropdown-icon-content",
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
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-dropdown-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
          icon: "edit",
          className: "fb-setting-dropdown-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontfamily-wrapper"
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          className: "fb-setting-fontsize-units-wrap"
        }, UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                HeadingFontSizeUnits: item.value
              });
            },
            className: "fb-setting-fontsize-units-switcher ".concat(HeadingFontSizeUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          value: HeadingFontSize,
          onChange: function onChange(value) {
            return setAttributes({
              HeadingFontSize: value
            });
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: undefined
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-blocks"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-blocks"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-blocks"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-blocks"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-blocks"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-blocks"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-blocks"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-blocks"),
            value: "900"
          }],
          value: HeadingFontWeight,
          onChange: function onChange(value) {
            return setAttributes({
              HeadingFontWeight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-blocks"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-blocks"),
            value: "oblique"
          }],
          value: HeadingFontStyle,
          onChange: function onChange(value) {
            return setAttributes({
              HeadingFontStyle: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
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
          }],
          value: HeadingTextTransform,
          onChange: function onChange(value) {
            return setAttributes({
              HeadingTextTransform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
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
          }],
          value: HeadingTextDecoration,
          onChange: function onChange(value) {
            return setAttributes({
              HeadingTextDecoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          className: "fb-setting-letterspacing-units-wrap"
        }, UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                HeadingLetterSpacingUnits: item.value
              });
            },
            className: "fb-setting-letterspacing-units-switcher ".concat(HeadingLetterSpacingUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          value: HeadingLetterSpacing,
          onChange: function onChange(value) {
            return setAttributes({
              HeadingLetterSpacing: value === 0 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          className: "fb-setting-lineheight-units-wrap"
        }, UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                HeadingLineHeightUnits: item.value
              });
            },
            className: "fb-setting-lineheight-units-switcher ".concat(HeadingLineHeightUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          value: HeadingLineHeight,
          onChange: function onChange(value) {
            return setAttributes({
              HeadingLineHeight: value === 1 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Color", "frontis-blocks"),
      className: "fb-setting-color-panel-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, NORMAL_HOVER.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            HeadingColorSwitcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(HeadingColorSwitcher === item.value ? 'active' : '')
      }, item.label);
    }))), HeadingColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref5) {
        var isOpen = _ref5.isOpen,
          onToggle = _ref5.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
          color: HeadingColor,
          onChange: function onChange(value) {
            return setAttributes({
              HeadingColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
          colors: [{
            color: '#F72585'
          }, {
            color: '#7209B7'
          }, {
            color: '#3A0CA3'
          }, {
            color: '#4361EE'
          }, {
            color: '#4CC9F0'
          }],
          disableCustomColors: true,
          value: HeadingColor,
          onChange: function onChange(value) {
            return setAttributes({
              HeadingColor: value
            });
          }
        }))));
      }
    })), HeadingColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref6) {
        var isOpen = _ref6.isOpen,
          onToggle = _ref6.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-hover-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
          color: HeadingHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              HeadingHoverColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-hover-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
          colors: [{
            color: '#F72585'
          }, {
            color: '#7209B7'
          }, {
            color: '#3A0CA3'
          }, {
            color: '#4361EE'
          }, {
            color: '#4CC9F0'
          }],
          disableCustomColors: true,
          value: HeadingHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              HeadingHoverColor: value
            });
          }
        }))));
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: "Spacing",
      initialOpen: false
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-inner-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-label-container"
    }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding', 'frontis-block'),
      device: DeviceType,
      deviceHandler: handlePaddingDeviceClick
    }), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-units-type-wrap"
    }, UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            HeadingPaddingUnits: item.value
          });
        },
        className: "fb-setting-units-type-switcher ".concat(HeadingPaddingUnits === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-blocks")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: DeviceType === 'Desktop' ? HeadingDesktopPadding.top : DeviceType === 'Tablet' ? HeadingTabPadding.top : HeadingMobilePadding.top,
      onChange: function onChange(e) {
        return handlePaddingInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-blocks")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: DeviceType === 'Desktop' ? HeadingDesktopPadding.right : DeviceType === 'Tablet' ? HeadingTabPadding.right : HeadingMobilePadding.right,
      onChange: function onChange(e) {
        return handlePaddingInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-blocks")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: DeviceType === 'Desktop' ? HeadingDesktopPadding.bottom : DeviceType === 'Tablet' ? HeadingTabPadding.bottom : HeadingMobilePadding.bottom,
      onChange: function onChange(e) {
        return handlePaddingInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-blocks")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: DeviceType === 'Desktop' ? HeadingDesktopPadding.left : DeviceType === 'Tablet' ? HeadingTabPadding.left : HeadingMobilePadding.left,
      onChange: function onChange(e) {
        return handlePaddingInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(HeadingPaddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(HeadingPaddingLink ? 'is-checked' : ''),
      onClick: handleHeadingPaddingLinkToggle
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-inner-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-label-container"
    }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin', 'frontis-block'),
      device: DeviceType,
      deviceHandler: handleMarginDeviceClick
    }), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-units-type-wrap"
    }, UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            HeadingMarginUnits: item.value
          });
        },
        className: "fb-setting-units-type-switcher ".concat(HeadingMarginUnits === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-blocks")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: DeviceType === 'Desktop' ? HeadingDesktopMargin.top : DeviceType === 'Tablet' ? HeadingTabMargin.top : HeadingMobileMargin.top,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-blocks")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: DeviceType === 'Desktop' ? HeadingDesktopMargin.right : DeviceType === 'Tablet' ? HeadingTabMargin.right : HeadingMobileMargin.right,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-blocks")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: DeviceType === 'Desktop' ? HeadingDesktopMargin.bottom : DeviceType === 'Tablet' ? HeadingTabMargin.bottom : HeadingMobileMargin.bottom,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-blocks")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: DeviceType === 'Desktop' ? HeadingDesktopMargin.left : DeviceType === 'Tablet' ? HeadingTabMargin.left : HeadingMobileMargin.left,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-input-wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "fb-setting-spacing-input-label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(HeadingMarginLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(HeadingMarginLink ? 'is-checked' : ''),
      onClick: handleMarginLinkToggle
    }))))))), tab.name === "advanced" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-advanced-tab-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-z-index-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Z Index", "frontis-blocks"),
      initialOpen: true,
      className: "fb-setting-z-index-header"
    })))));
  }))));
}

/***/ }),

/***/ "./src/blocks/advanced-image/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/advanced-image/save.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }


function save(_ref) {
  var attributes = _ref.attributes;
  var blockID = attributes.blockID,
    imageUrl = attributes.imageUrl,
    imageAlt = attributes.imageAlt,
    linkSwitch = attributes.linkSwitch,
    linkTargetUrl = attributes.linkTargetUrl,
    linkUrl = attributes.linkUrl,
    imageCaption = attributes.imageCaption,
    displayCaption = attributes.displayCaption,
    imageStyle = attributes.imageStyle,
    imageSize = attributes.imageSize,
    mediaSize = attributes.mediaSize,
    mediaHeight = attributes.mediaHeight,
    mediaSizeUnits = attributes.mediaSizeUnits,
    mediaHeightUnits = attributes.mediaHeightUnits,
    captionAlignment = attributes.captionAlignment,
    imageHover = attributes.imageHover,
    autoHeightSwitch = attributes.autoHeightSwitch,
    imageFit = attributes.imageFit,
    titleText = attributes.titleText,
    titleTag = attributes.titleTag,
    displayTitle = attributes.displayTitle,
    titlePosition = attributes.titlePosition,
    HeadingColor = attributes.HeadingColor,
    HeadingBackgroundColor = attributes.HeadingBackgroundColor,
    HeadingFontFamily = attributes.HeadingFontFamily,
    HeadingFontSize = attributes.HeadingFontSize,
    HeadingFontSizeUnits = attributes.HeadingFontSizeUnits,
    HeadingFontWeight = attributes.HeadingFontWeight,
    HeadingFontStyle = attributes.HeadingFontStyle,
    HeadingTextTransform = attributes.HeadingTextTransform,
    HeadingTextDecoration = attributes.HeadingTextDecoration,
    HeadingLetterSpacing = attributes.HeadingLetterSpacing,
    HeadingLetterSpacingUnits = attributes.HeadingLetterSpacingUnits,
    HeadingLineHeight = attributes.HeadingLineHeight,
    HeadingLineHeightUnits = attributes.HeadingLineHeightUnits,
    padding = attributes.padding,
    margin = attributes.margin,
    HeadingBorder = attributes.HeadingBorder,
    borderWidth = attributes.borderWidth,
    borderRadiusWidth = attributes.borderRadiusWidth,
    HeadingBorderColor = attributes.HeadingBorderColor;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t.fb-advanced-image-wrapper.".concat(blockID, " .fb-advanced-image .fb-advanced-image-inner {\n                    width: ").concat(mediaSize.Desktop).concat(mediaSizeUnits.Desktop, ";\n                    ").concat(autoHeightSwitch ? "height: auto;" : "height: ".concat(mediaHeight.Desktop).concat(mediaHeightUnits.Desktop), ";\n                }\n                @media all and (max-width: 1024px){\n                .fb-advanced-image-wrapper.").concat(blockID, " .fb-advanced-image .fb-advanced-image-inner {\n                    width: ").concat(mediaSize.Tablet).concat(mediaSizeUnits.Tablet, ";\n                    ").concat(autoHeightSwitch ? "height: auto;" : "height: ".concat(mediaHeight.Tablet).concat(mediaHeightUnits.Tablet), ";\n                }\n                }\n                @media all and (max-width: 767px){\n                .fb-advanced-image-wrapper.").concat(blockID, " .fb-advanced-image .fb-advanced-image-inner {\n                    width: ").concat(mediaSize.Mobile).concat(mediaSizeUnits.Mobile, ";\n                    ").concat(autoHeightSwitch ? "height: auto;" : "height: ".concat(mediaHeight.Mobile).concat(mediaHeightUnits.Mobile), ";\n                }\n                }\n                .fb-advanced-image-wrapper.").concat(blockID, " .fb-advanced-image-caption figcaption {\n                    text-align: ").concat(captionAlignment, ";\n                }\n                .fb-advanced-image-wrapper.").concat(blockID, " .fb-advanced-image .fb-advanced-image-title .fb-advanced-title{\n                    ").concat(HeadingColor !== undefined ? "color: ".concat(HeadingColor, ";") : '', "\n                    ").concat(HeadingBackgroundColor !== undefined ? "background-color: ".concat(HeadingBackgroundColor, ";") : '', "\n                    font-family: ").concat(HeadingFontFamily !== 'default' ? HeadingFontFamily : HeadingFontFamily, ";\n                    font-size: ").concat(HeadingFontSize !== undefined ? "".concat(HeadingFontSize).concat(HeadingFontSizeUnits) : '', ";\n                    font-weight: ").concat(HeadingFontWeight, ";\n                    font-style: ").concat(HeadingFontStyle, ";\n                    text-transform: ").concat(HeadingTextTransform, ";\n                    text-decoration: ").concat(HeadingTextDecoration, ";\n                    ").concat(HeadingLetterSpacing !== undefined ? "letter-spacing: ".concat(HeadingLetterSpacing).concat(HeadingLetterSpacingUnits, ";") : '', "\n                    ").concat(HeadingLineHeight !== undefined ? "line-height: ".concat(HeadingLineHeight).concat(HeadingLineHeightUnits, ";") : '', "\n                    transition: all .3s ease-in-out;\n                    padding: ").concat(padding, ";\n                    margin: ").concat(margin, ";\n                    border: ").concat(HeadingBorder, ";\n                    border-width: ").concat(borderWidth, ";\n                    border-radius: ").concat(borderRadiusWidth, ";\n                    ").concat(HeadingBorderColor !== undefined ? "border-color: ".concat(HeadingBorderColor, ";") : '', "\n                }\n                @media all and (max-width: 1024px){\n                .fb-advanced-image-wrapper.").concat(blockID, " .fb-advanced-image .fb-advanced-image-title .fb-advanced-title{\n                    width: ").concat(mediaSize.Tablet).concat(mediaSizeUnits.Tablet, ";\n                    ").concat(autoHeightSwitch ? "height: auto;" : "height: ".concat(mediaHeight.Tablet).concat(mediaHeightUnits.Tablet), ";\n                }\n                }\n                @media all and (max-width: 767px){\n                .fb-advanced-image-wrapper.").concat(blockID, " .fb-advanced-image .fb-advanced-image-title .fb-advanced-title{\n                    width: ").concat(mediaSize.Mobile).concat(mediaSizeUnits.Mobile, ";\n                    ").concat(autoHeightSwitch ? "height: auto;" : "height: ".concat(mediaHeight.Mobile).concat(mediaHeightUnits.Mobile), ";\n                }\n                }\n            ")), /*#__PURE__*/React.createElement("div", _extends({}, blockProps, {
    id: blockID
  }), /*#__PURE__*/React.createElement("div", {
    className: "fb-advanced-image-wrapper ".concat(blockID)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-advanced-image ".concat(imageStyle, " ").concat(imageSize, " ").concat(imageHover, " ").concat(imageFit, " ").concat(titlePosition)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-advanced-image-inner"
  }, imageUrl ? linkSwitch ? /*#__PURE__*/React.createElement("a", {
    href: linkUrl,
    target: linkTargetUrl ? '_blank' : undefined,
    rel: linkTargetUrl ? 'noopener noreferrer' : undefined
  }, /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    alt: imageAlt
  })) : /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    alt: imageAlt
  }) : null), displayTitle && titleText && /*#__PURE__*/React.createElement("div", {
    className: "fb-advanced-image-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-advanced-image-title-inner"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: titleTag,
    value: titleText,
    className: "fb-advanced-title"
  }))), displayCaption && imageCaption && /*#__PURE__*/React.createElement("div", {
    className: "fb-advanced-image-caption"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    tagName: "figcaption",
    value: imageCaption
  }))))));
}

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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// eslint-disable-next-line import/no-unresolved

var FB_Range = function FB_Range(_ref) {
  var min = _ref.min,
    max = _ref.max,
    label = _ref.label,
    rangeValue = _ref.rangeValue,
    onChangeHandler = _ref.onChangeHandler,
    rangeUnitHandler = _ref.rangeUnitHandler,
    deviceType = _ref.deviceType,
    units = _ref.units,
    setAttributes = _ref.setAttributes,
    rangeStep = _ref.rangeStep,
    resetFallbackValue = _ref.resetFallbackValue;
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

  // Ensure default/fallback value for the current deviceType
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (rangeValue[deviceType] === undefined) {
      var newRangeValue = _objectSpread(_objectSpread({}, rangeValue), {}, _defineProperty({}, deviceType, resetFallbackValue));
      onChangeHandler(newRangeValue);
    }
  }, [deviceType, rangeValue, onChangeHandler, resetFallbackValue]);
  var setRangeValue = function setRangeValue(value) {
    var newRangeValue = _objectSpread(_objectSpread({}, rangeValue), {}, _defineProperty({}, deviceType, value || resetFallbackValue));
    onChangeHandler(newRangeValue);
  };
  var setRangeUnit = function setRangeUnit(unit) {
    var newUnits = _objectSpread(_objectSpread({}, units), {}, _defineProperty({}, deviceType, unit));
    rangeUnitHandler(newUnits);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-spacing-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-spacing-inner-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-spacing-label-container"
  }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(label, 'frontis-blocks'),
    device: deviceType,
    deviceHandler: function deviceHandler(newDevice) {
      return setAttributes({
        deviceType: newDevice
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
      className: "fb-setting-units-type-switcher ".concat(units[deviceType] === item.value ? 'active' : '')
    }, item.label);
  })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    __nextHasNoMarginBottom: true,
    value: rangeValue[deviceType],
    onChange: setRangeValue,
    min: min,
    max: max,
    step: rangeStep,
    allowReset: true,
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
/* harmony export */   "default": () => (/* binding */ FB_ResponsiveControl)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);



function FB_ResponsiveControl(_ref) {
  var labelText = _ref.labelText,
    device = _ref.device,
    deviceHandler = _ref.deviceHandler;
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store),
    setDeviceType = _useDispatch.setDeviceType;
  var handleDevice = function handleDevice(deviceName) {
    deviceHandler(deviceName);
    setDeviceType(deviceName);
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

/***/ "./src/blocks/advanced-image/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/advanced-image/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/advanced-image/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/advanced-image/style.scss ***!
  \**********************************************/
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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

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

/***/ "./src/blocks/advanced-image/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/advanced-image/block.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"frontis-blocks/advanced-image","version":"0.1.0","title":"Advanced Image","category":"frontis-blocks","icon":"format-image","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false,"align":["wide","full"]},"textdomain":"frontis-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/advanced-image/index": 0,
/******/ 			"blocks/advanced-image/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/advanced-image/style-index"], () => (__webpack_require__("./src/blocks/advanced-image/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map