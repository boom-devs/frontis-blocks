/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/advanced-navigation/attributes.js":
/*!******************************************************!*\
  !*** ./src/blocks/advanced-navigation/attributes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var attributes = {
  blockId: {
    type: "string"
  },
  resOption: {
    type: "string",
    "default": "Desktop"
  },
  blockMeta: {
    type: "object"
  },
  blockRoot: {
    type: "string",
    "default": "frontis_block"
  },
  layout: {
    type: "string",
    "default": "is-horizontal"
  },
  preset: {
    type: "string",
    "default": "preset-1"
  },
  verticalPreset: {
    type: "string",
    "default": "vertical-preset-1"
  },
  navAlign: {
    type: "string",
    "default": "items-justified-left"
  },
  dropdownOpenOnClick: {
    type: "boolean",
    "default": false
  },
  showDropdownIcon: {
    type: "boolean",
    "default": true
  },
  navBtnType: {
    type: "boolean",
    "default": true
  },
  flexWrap: {
    type: "boolean",
    "default": false
  },
  hamburgerMenu: {
    type: "string",
    "default": "mobile"
  },
  navVerticalAlign: {
    type: "string",
    "default": "items-justified-left"
  },
  hamburgerCloseIconAlign: {
    type: "string",
    "default": "close-icon-right"
  },
  classHook: {
    type: "string",
    "default": ""
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/advanced-navigation/edit.js":
/*!************************************************!*\
  !*** ./src/blocks/advanced-navigation/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/advanced-navigation/inspector.js");






function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    className = _ref.className,
    clientId = _ref.clientId,
    isSelected = _ref.isSelected;
  var blockId = attributes.blockId,
    layout = attributes.layout,
    navAlign = attributes.navAlign,
    preset = attributes.preset,
    verticalPreset = attributes.verticalPreset,
    dropdownOpenOnClick = attributes.dropdownOpenOnClick,
    navBtnType = attributes.navBtnType,
    showDropdownIcon = attributes.showDropdownIcon,
    flexWrap = attributes.flexWrap,
    navVerticalAlign = attributes.navVerticalAlign,
    hamburgerMenu = attributes.hamburgerMenu,
    hamburgerCloseIconAlign = attributes.hamburgerCloseIconAlign,
    classHook = attributes.classHook;
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)("core/block-editor"),
    updateBlockAttributes = _useDispatch.updateBlockAttributes;
  var innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
    return select("core/block-editor").getBlocks(clientId);
  }, [clientId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!blockId) {
      setAttributes({
        blockId: clientId
      });
    }
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (innerBlocks.length > 0) {
      innerBlocks.forEach(function (block) {
        updateBlockAttributes(block.clientId, {
          className: "".concat(layout, " ").concat(layout === "is-horizontal" ? navAlign : navVerticalAlign, " ").concat(flexWrap ? "no-wrap" : ""),
          openSubmenusOnClick: dropdownOpenOnClick,
          showSubmenuIcon: showDropdownIcon,
          hasIcon: navBtnType,
          overlayMenu: hamburgerMenu
        });
      });
    }
  }, [layout, navAlign, flexWrap, navVerticalAlign, dropdownOpenOnClick, showDropdownIcon, navBtnType, hamburgerMenu]);
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, "frontis-guten-block-main-parent-wrapper")
  });
  var layoutPreset = layout === "is-horizontal" ? preset : verticalPreset;
  return /*#__PURE__*/React.createElement(React.Fragment, null, isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "frontis-parent-wrapper frontis-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " frontis-advanced-navigation-wrapper ").concat(layout, " ").concat(layoutPreset, " ").concat(layout === "is-horizontal" ? navAlign : navVerticalAlign, " ").concat(showDropdownIcon ? "" : "remove-dropdown-icon", " ").concat(navBtnType ? "responsive-icon" : "responsive-text", " ").concat(hamburgerCloseIconAlign)
  }, /*#__PURE__*/React.createElement("div", {
    className: "frontis-nav-contents"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    templateLock: false,
    template: [["core/navigation", {
      className: "".concat(layout, " ").concat(navAlign)
    }]],
    allowedBlocks: ["core/navigation"],
    renderAppender: innerBlocks.length < 1 ? _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.ButtonBlockAppender : false
  }))))));
}

/***/ }),

/***/ "./src/blocks/advanced-navigation/icon.js":
/*!************************************************!*\
  !*** ./src/blocks/advanced-navigation/icon.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var AdvancedNavigationIcon = function AdvancedNavigationIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "46",
    fill: "none",
    viewBox: "0 0 60 46"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "url(#a)",
    fillRule: "evenodd",
    d: "M44.042 10.95H15.957c-.896 0-1.63 0-2.23.047-.622.05-1.184.155-1.715.412-1.259.608-2.21 1.748-2.698 3.12-.2.562-.284 1.16-.325 1.855-.04.682-.04 1.523-.04 2.582v.066c0 1.06 0 1.9.04 2.582.04.695.126 1.293.325 1.856.487 1.371 1.44 2.511 2.698 3.12.531.256 1.093.362 1.715.412.6.047 1.334.047 2.23.047h28.085c.895 0 1.63 0 2.23-.047.622-.05 1.183-.156 1.715-.413 1.258-.608 2.21-1.748 2.697-3.12.2-.562.285-1.16.325-1.855.04-.682.04-1.522.04-2.582v-.066c0-1.06 0-1.9-.04-2.582-.04-.695-.125-1.293-.325-1.855-.487-1.371-1.439-2.512-2.697-3.12-.532-.257-1.093-.363-1.716-.412-.6-.048-1.334-.048-2.23-.048ZM12.925 13.3c.204-.098.476-.17.969-.21.506-.04 1.157-.04 2.105-.04h28c.949 0 1.599 0 2.105.04.494.04.766.112.97.21.7.339 1.306 1.016 1.631 1.931.105.296.172.67.208 1.276.036.613.036 1.393.036 2.492 0 1.1 0 1.88-.036 2.492-.035.607-.103.981-.208 1.276-.325.916-.93 1.593-1.632 1.932-.203.098-.475.17-.968.21-.507.04-1.157.04-2.106.04H16c-.948 0-1.599 0-2.105-.04-.493-.04-.765-.112-.969-.21-.701-.34-1.307-1.016-1.632-1.932-.105-.295-.172-.67-.207-1.276-.036-.613-.037-1.392-.037-2.492s0-1.879.037-2.492c.035-.606.102-.98.207-1.276.325-.915.93-1.592 1.632-1.931ZM16 17.95a1.05 1.05 0 1 0 0 2.1h12a1.05 1.05 0 1 0 0-2.1H16ZM14.95 33c0-.58.47-1.05 1.05-1.05h20a1.05 1.05 0 1 1 0 2.1H16c-.58 0-1.05-.47-1.05-1.05ZM16 38.95a1.05 1.05 0 1 0 0 2.1h20a1.05 1.05 0 1 0 0-2.1H16ZM14.95 47c0-.58.47-1.05 1.05-1.05h20a1.05 1.05 0 1 1 0 2.1H16c-.58 0-1.05-.47-1.05-1.05ZM44 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a",
    x1: 44.685,
    x2: 78.389,
    y1: 79.086,
    y2: 29.551,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F7A524"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.21,
    stopColor: "#F7A226"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.37,
    stopColor: "#F79830"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.51,
    stopColor: "#F8883F"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.64,
    stopColor: "#F97255"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.76,
    stopColor: "#FA5572"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.87,
    stopColor: "#FC3195"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.98,
    stopColor: "#FE08BE"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#FF00C6"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedNavigationIcon);

/***/ }),

/***/ "./src/blocks/advanced-navigation/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/advanced-navigation/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/advanced-navigation/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/advanced-navigation/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/blocks/advanced-navigation/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/advanced-navigation/block.json");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./src/blocks/advanced-navigation/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/advanced-navigation/style.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, _objectSpread(_objectSpread({}, _block_json__WEBPACK_IMPORTED_MODULE_5__), {}, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_6__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/blocks/advanced-navigation/inspector.js":
/*!*****************************************************!*\
  !*** ./src/blocks/advanced-navigation/inspector.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



function Inspector(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  var layout = attributes.layout,
    preset = attributes.preset,
    verticalPreset = attributes.verticalPreset,
    navAlign = attributes.navAlign,
    dropdownOpenOnClick = attributes.dropdownOpenOnClick,
    showDropdownIcon = attributes.showDropdownIcon,
    navBtnType = attributes.navBtnType,
    flexWrap = attributes.flexWrap,
    navVerticalAlign = attributes.navVerticalAlign,
    hamburgerMenu = attributes.hamburgerMenu,
    hamburgerCloseIconAlign = attributes.hamburgerCloseIconAlign;
  var generalTab = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout', 'frontis-blocks'),
    value: layout,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal', 'frontis-blocks'),
      value: 'is-horizontal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical', 'frontis-blocks'),
      value: 'is-vertical'
    }],
    onChange: function onChange(value) {
      return setAttributes({
        layout: value
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'frontis-blocks'),
    value: layout === 'is-horizontal' ? navAlign : navVerticalAlign,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'frontis-blocks'),
      value: 'items-justified-left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'frontis-blocks'),
      value: 'items-justified-center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'frontis-blocks'),
      value: 'items-justified-right'
    }],
    onChange: function onChange(value) {
      return setAttributes(_defineProperty({}, layout === 'is-horizontal' ? 'navAlign' : 'navVerticalAlign', value));
    }
  }));
  var styleTab = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open dropdown on click', 'frontis-blocks'),
    checked: dropdownOpenOnClick,
    onChange: function onChange(value) {
      return setAttributes({
        dropdownOpenOnClick: value
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show dropdown icon', 'frontis-blocks'),
    checked: showDropdownIcon,
    onChange: function onChange(value) {
      return setAttributes({
        showDropdownIcon: value
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use icon for navigation button', 'frontis-blocks'),
    checked: navBtnType,
    onChange: function onChange(value) {
      return setAttributes({
        navBtnType: value
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable flex wrap', 'frontis-blocks'),
    checked: flexWrap,
    onChange: function onChange(value) {
      return setAttributes({
        flexWrap: value
      });
    }
  }));
  var advancedTab = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hamburger menu', 'frontis-blocks'),
    value: hamburgerMenu,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mobile', 'frontis-blocks'),
      value: 'mobile'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tablet', 'frontis-blocks'),
      value: 'tablet'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Desktop', 'frontis-blocks'),
      value: 'desktop'
    }],
    onChange: function onChange(value) {
      return setAttributes({
        hamburgerMenu: value
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hamburger close icon alignment', 'frontis-blocks'),
    value: hamburgerCloseIconAlign,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'frontis-blocks'),
      value: 'close-icon-left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'frontis-blocks'),
      value: 'close-icon-right'
    }],
    onChange: function onChange(value) {
      return setAttributes({
        hamburgerCloseIconAlign: value
      });
    }
  }));
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "frontis-advanced-navigation-inspector-tabs",
    activeClass: "active-tab",
    tabs: [{
      name: 'general',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'frontis-blocks'),
      className: 'frontis-tab general-tab'
    }, {
      name: 'style',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'frontis-blocks'),
      className: 'frontis-tab style-tab'
    }, {
      name: 'advanced',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced', 'frontis-blocks'),
      className: 'frontis-tab advanced-tab'
    }]
  }, function (tab) {
    switch (tab.name) {
      case 'general':
        return generalTab;
      case 'style':
        return styleTab;
      case 'advanced':
        return advancedTab;
      default:
        return null;
    }
  }));
}

/***/ }),

/***/ "./src/blocks/advanced-navigation/save.js":
/*!************************************************!*\
  !*** ./src/blocks/advanced-navigation/save.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


function save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
    layout = attributes.layout,
    navAlign = attributes.navAlign,
    preset = attributes.preset,
    verticalPreset = attributes.verticalPreset,
    showDropdownIcon = attributes.showDropdownIcon,
    navBtnType = attributes.navBtnType,
    navVerticalAlign = attributes.navVerticalAlign,
    hamburgerCloseIconAlign = attributes.hamburgerCloseIconAlign,
    classHook = attributes.classHook;
  var layoutPreset = layout === "is-horizontal" ? preset : verticalPreset;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("frontis-advanced-navigation-wrapper")
  });
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "frontis-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " frontis-advanced-navigation-inner ").concat(layout, " ").concat(layoutPreset, " ").concat(layout === "is-horizontal" ? navAlign : navVerticalAlign, " ").concat(showDropdownIcon ? "" : "remove-dropdown-icon", " ").concat(navBtnType ? "responsive-icon" : "responsive-text", " ").concat(hamburgerCloseIconAlign)
  }, /*#__PURE__*/React.createElement("div", {
    className: "frontis-nav-contents"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, null)))));
}

/***/ }),

/***/ "./src/blocks/advanced-navigation/style.scss":
/*!***************************************************!*\
  !*** ./src/blocks/advanced-navigation/style.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/blocks/advanced-navigation/block.json":
/*!***************************************************!*\
  !*** ./src/blocks/advanced-navigation/block.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"frontis/advanced-navigation","title":"Advanced Navigation","category":"frontis-blocks","description":"Create advanced navigation menus with customizable layouts and styles.","textdomain":"frontis-blocks","supports":{"html":false},"example":{"attributes":{"preview":true}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/advanced-navigation/index": 0,
/******/ 			"blocks/advanced-navigation/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/advanced-navigation/style-index"], () => (__webpack_require__("./src/blocks/advanced-navigation/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map