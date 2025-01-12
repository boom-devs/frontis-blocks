/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/App.js":
/*!**********************!*\
  !*** ./admin/App.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./admin/components/index.js");
/* harmony import */ var _TabMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TabMenu */ "./admin/TabMenu.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons */ "./admin/icons/index.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var App = function App() {
  var getTabFromUrl = function getTabFromUrl() {
    var queryParams = new URLSearchParams(window.location.search);
    return queryParams.get("tab") || "general";
  };
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(getTabFromUrl),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handlePopState = function handlePopState() {
      setActiveTab(getTabFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return function () {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  var handleTabChange = function handleTabChange(tabName) {
    window.history.pushState(null, null, "?page=frontis-blocks&tab=".concat(tabName));
    setActiveTab(tabName);
  };

  // Get the current tab from URL every render
  var currentTab = getTabFromUrl();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fb-header-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-header-top-left"
  }, /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_6__.Logo, null))), /*#__PURE__*/React.createElement("div", {
    className: "frontis-blocks-admin"
  }, /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {
    className: "frontis-blocks-tab-panel",
    activeClass: "active-tab",
    onSelect: handleTabChange,
    initialTabName: currentTab,
    tabs: _TabMenu__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (tab) {
      return {
        name: tab.id,
        title: tab.label,
        icon: tab.icon,
        className: "frontis-".concat(tab.id, "-tab")
      };
    })
  }, function (tab) {
    var _TabMenus$find;
    // const activeTabData = TabMenus.find(t => t.id === tab.name);
    return /*#__PURE__*/React.createElement("div", {
      className: "frontis-blocks-tab-content"
    }, (_TabMenus$find = _TabMenu__WEBPACK_IMPORTED_MODULE_5__["default"].find(function (tab) {
      return tab.id === activeTab;
    })) === null || _TabMenus$find === void 0 ? void 0 : _TabMenus$find.comp);
  })), /*#__PURE__*/React.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./admin/TabMenu.js":
/*!**************************!*\
  !*** ./admin/TabMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./admin/components/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./admin/icons/index.js");




var TabMenus = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('frontisblocks/admin/tabs', [{
  id: 'general',
  icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.HomeIcon, null),
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dashboard", "frontis-blocks"),
  comp: /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Dashboard, null)
}, {
  id: 'blocks',
  icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.BlockIcon, null),
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Blocks", "frontis-blocks"),
  comp: /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Blocks, null)
}, {
  id: 'settings',
  icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.OptionsIcon, null),
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Settings", "frontis-blocks"),
  comp: /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Settings, null)
}, {
  id: 'integrations',
  icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.IntegrationsIcon, null),
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Integrations", "frontis-blocks"),
  comp: /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Integration, null)
}
// {
// 	id: 'custom_icons',
// 	icon: <IntegrationsIcon />,
// 	label: __("Custom icons", "frontis-blocks"),
// 	comp: <CustomIcons />
// }
]);
// Add pricing tab if not pro
// if (window.frontisBlocksAdmin.isProActive === 'false') {
//     TabMenus.push({
//       id: 'pricing',
//       icon: <PricingIcon />,
//       label: __("Pricing", "frontis-blocks"),
//       comp: <Pricing />
//     });
// }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabMenus);

/***/ }),

/***/ "./admin/components/BlockCard.js":
/*!***************************************!*\
  !*** ./admin/components/BlockCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-switch */ "./node_modules/rc-switch/es/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./admin/icons/index.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var BlockCard = function BlockCard(_ref) {
  var block = _ref.block,
    onChange = _ref.onChange;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(block.status === '1'),
    _useState2 = _slicedToArray(_useState, 2),
    isChecked = _useState2[0],
    setIsChecked = _useState2[1];
  var isProActive = window.frontisBlocksAdmin.isProActive;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setIsChecked(block.status === '1');
  }, [block.status]);
  var handleChange = function handleChange(checked) {
    onChange(block.slug, checked);
    setIsChecked(checked);
  };
  console.log(block);
  if (block.child === 'true') {
    return null; // You can return null if you don't want to render anything for child blocks
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-block-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-block-card-icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: block.icon,
    alt: "".concat(block.title, " icon")
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-block-card-content"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "fb-block-card-title"
  }, block.title, block.badge !== 'free' && /*#__PURE__*/React.createElement("span", {
    className: "fb-block-card-badge ".concat(block.badge)
  }, block.badge))), /*#__PURE__*/React.createElement("div", {
    className: "fb-block-card-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: block.doc ? block.doc : 'https://frontis.com',
    target: "_blank",
    rel: "noopener noreferrer",
    className: "fb-block-card-link fb-block-card-doc"
  }, /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Doc, null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Documentation', 'frontis-blocks')), /*#__PURE__*/React.createElement("a", {
    href: block.demo ? block.demo : 'https://frontis.com',
    target: "_blank",
    rel: "noopener noreferrer",
    className: "fb-block-card-link fb-block-card-demo"
  }, /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Link, null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Demo', 'frontis-blocks')))), /*#__PURE__*/React.createElement("div", {
    className: "fb-block-card-switch"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "switch-".concat(block.slug),
    className: "fb-block-card-switch-label"
  }, block.complete === 'true' ? /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: isChecked,
    onChange: handleChange,
    className: "fb-block-card-switch-input",
    id: "switch-".concat(block.slug),
    disabled: isProActive === 'false' && block["package"] === 'pro' ? true : false
  }) : /*#__PURE__*/React.createElement("span", {
    className: "fb-block-card-upcoming"
  }, "Upcoming"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockCard);

/***/ }),

/***/ "./admin/components/Blocks.js":
/*!************************************!*\
  !*** ./admin/components/Blocks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BlockCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockCard */ "./admin/components/BlockCard.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./admin/icons/index.js");
/* harmony import */ var _assets_css_switch_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/css/switch.css */ "./assets/css/switch.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







// Add this mapping object after the imports
var categoryIcons = {
  all: _icons__WEBPACK_IMPORTED_MODULE_4__.All,
  content: _icons__WEBPACK_IMPORTED_MODULE_4__.Content,
  creative: _icons__WEBPACK_IMPORTED_MODULE_4__.Creative
};
var Blocks = function Blocks() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    blocks = _useState2[0],
    setBlocks = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('all'),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedCategory = _useState6[0],
    setSelectedCategory = _useState6[1];
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    searchTerm = _useState8[0],
    setSearchTerm = _useState8[1];
  var _window$frontisBlocks = window.frontisBlocksAdmin,
    ajaxUrl = _window$frontisBlocks.ajaxUrl,
    nonce = _window$frontisBlocks.nonce,
    allBlocks = _window$frontisBlocks.blocks;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getBlocks();
  }, []);
  var getBlocks = function getBlocks() {
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_get_blocks',
        security: nonce
      },
      success: function success(response) {
        try {
          if (typeof response === 'string') {
            response = JSON.parse(response);
          }
          if (response.success) {
            var activeBlocks = response.data || {};
            var updatedBlocks = Object.entries(allBlocks).map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                slug = _ref2[0],
                blockData = _ref2[1];
              return _objectSpread(_objectSpread({}, blockData), {}, {
                slug: slug,
                status: activeBlocks[slug] ? '1' : '0'
              });
            });
            setBlocks(updatedBlocks);
          } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Failed to fetch blocks', 'frontis-blocks'));
          }
        } catch (error) {
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Error processing server response', 'frontis-blocks'));
        }
        setIsLoading(false);
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Error fetching blocks', 'frontis-blocks'));
        setIsLoading(false);
      }
    });
  };
  var saveBlocks = function saveBlocks(updatedBlocks) {
    var blocksToSave = updatedBlocks.reduce(function (acc, block) {
      acc[block.slug] = block.status === '1';
      return acc;
    }, {});
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_save_blocks',
        security: nonce,
        blocks: JSON.stringify(blocksToSave)
      },
      success: function success(response) {
        if (response.success) {
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blocks saved successfully', 'frontis-blocks'));
          setBlocks(updatedBlocks); // Update the local state with the saved blocks
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Failed to save blocks', 'frontis-blocks'));
        }
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Error saving blocks', 'frontis-blocks'));
      }
    });
  };
  var categoryInfo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var filteredBlocks = blocks.filter(function (block) {
      return block.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    var info = filteredBlocks.reduce(function (acc, block) {
      var category = block.category;
      if (!acc[category]) {
        acc[category] = {
          count: 0,
          blocks: []
        };
      }
      acc[category].count++;
      acc[category].blocks.push(block);
      return acc;
    }, {});
    var totalCount = filteredBlocks.length;
    return _objectSpread({
      all: {
        count: totalCount,
        blocks: filteredBlocks
      }
    }, info);
  }, [blocks, searchTerm]);
  var filteredCategories = selectedCategory === 'all' ? Object.entries(categoryInfo).filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
      category = _ref4[0];
    return category !== 'all';
  }) : [[selectedCategory, categoryInfo[selectedCategory]]];
  var clearSearch = function clearSearch() {
    setSearchTerm('');
  };
  var handleEnableAll = function handleEnableAll() {
    var updatedBlocks = blocks.map(function (block) {
      return _objectSpread(_objectSpread({}, block), {}, {
        status: '1'
      });
    });
    setBlocks(updatedBlocks);
    saveBlocks(updatedBlocks);
  };
  var handleDisableAll = function handleDisableAll() {
    var updatedBlocks = blocks.map(function (block) {
      return _objectSpread(_objectSpread({}, block), {}, {
        status: '0'
      });
    });
    setBlocks(updatedBlocks);
    saveBlocks(updatedBlocks);
  };
  var handleBlockChange = function handleBlockChange(slug, enabled) {
    var updatedBlocks = blocks.map(function (block) {
      return block.slug === slug ? _objectSpread(_objectSpread({}, block), {}, {
        status: enabled ? '1' : '0'
      }) : block;
    });
    setBlocks(updatedBlocks);
    saveBlocks(updatedBlocks);
  };
  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading blocks...', 'frontis-blocks'));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-header-left"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fb-blocks-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blocks', 'frontis-blocks')), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-search"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search Blocks', 'frontis-blocks'),
    className: "fb-blocks-search-input",
    value: searchTerm,
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "fb-blocks-search-icon"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    "clip-path": "url(#clip0_4834_1174)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8.625",
    cy: "8.625",
    r: "7.125",
    stroke: "#6A758E",
    "stroke-width": "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.875 13.875L16.5 16.5",
    stroke: "#6A758E",
    "stroke-width": "1.5",
    "stroke-linecap": "round"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_4834_1174"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "18",
    fill: "white"
  }))))), searchTerm && /*#__PURE__*/React.createElement("button", {
    className: "fb-blocks-search-clear",
    onClick: clearSearch
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-header-right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fb-blocks-button fb-blocks-disable-all",
    onClick: handleDisableAll
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disable All', 'frontis-blocks')), /*#__PURE__*/React.createElement("button", {
    className: "fb-blocks-button fb-blocks-enable-all",
    onClick: handleEnableAll
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable All', 'frontis-blocks')))), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-category-filter"
  }, Object.entries(categoryInfo).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      category = _ref6[0],
      count = _ref6[1].count;
    var IconComponent = categoryIcons[category] || _icons__WEBPACK_IMPORTED_MODULE_4__.All; // Use All as default
    return /*#__PURE__*/React.createElement("button", {
      key: category,
      onClick: function onClick() {
        return setSelectedCategory(category);
      },
      className: "fb-blocks-category-button ".concat(selectedCategory === category ? 'fb-blocks-category-button--active' : '')
    }, /*#__PURE__*/React.createElement("span", {
      className: "fb-blocks-category-button-icon"
    }, /*#__PURE__*/React.createElement(IconComponent, null)), /*#__PURE__*/React.createElement("span", {
      className: "fb-blocks-category-button-title"
    }, category === 'all' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All', 'frontis-blocks') : category.charAt(0).toUpperCase() + category.slice(1)), /*#__PURE__*/React.createElement("span", {
      className: "fb-blocks-category-button-count"
    }, count));
  })), filteredCategories.length > 0 ? filteredCategories.map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
      category = _ref8[0],
      categoryBlocks = _ref8[1].blocks;
    return /*#__PURE__*/React.createElement("div", {
      key: category,
      className: "fb-blocks-category-group fb-blocks-category-group--".concat(category)
    }, /*#__PURE__*/React.createElement("h3", {
      className: "fb-blocks-category-title"
    }, category.charAt(0).toUpperCase() + category.slice(1)), /*#__PURE__*/React.createElement("div", {
      className: "fb-blocks-category-content"
    }, categoryBlocks.map(function (block) {
      return /*#__PURE__*/React.createElement(_BlockCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: block.slug,
        block: block,
        onChange: handleBlockChange
      });
    })));
  }) : /*#__PURE__*/React.createElement("p", {
    className: "fb-blocks-no-results"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No blocks found.', 'frontis-blocks')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blocks);

/***/ }),

/***/ "./admin/components/CustomIcons.js":
/*!*****************************************!*\
  !*** ./admin/components/CustomIcons.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var CustomIcons = function CustomIcons() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)({
      coming_soon_mode: false,
      maintenance_mode: false,
      coming_soon_page_id: '',
      maintenance_page_id: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _window$frontisBlocks = window.frontisBlocksAdmin,
    nonce = _window$frontisBlocks.nonce,
    ajaxUrl = _window$frontisBlocks.ajaxUrl;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    fetchOptions();
  }, []);
  var fetchOptions = function fetchOptions() {
    var keys = Object.keys(options);
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_upload_custom_icons',
        security: nonce,
        keys: keys
      },
      success: function success(response) {
        if (response.success) {
          // setOptions(prevOptions => ({ ...prevOptions, ...response.data }));
        } else {
          // toast.error(__(`Failed to fetch options: ${response.data?.message || 'Unknown error'}`, 'frontis-blocks'), {
          // 	position: "top-right",
          // 	autoClose: 5000,
          // 	hideProgressBar: false,
          // 	closeOnClick: true,
          // 	pauseOnHover: true,
          // 	draggable: true,
          // });
        }
      },
      error: function error(xhr, status, _error) {
        // toast.error(__(`Failed to fetch options: ${status} - ${error}`, 'frontis-blocks'), {
        // 	position: "top-right",
        // 	autoClose: 5000,
        // 	hideProgressBar: false,
        // 	closeOnClick: true,
        // 	pauseOnHover: true,
        // 	draggable: true,
        // });
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Hello world");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomIcons);

/***/ }),

/***/ "./admin/components/Dashboard.js":
/*!***************************************!*\
  !*** ./admin/components/Dashboard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DashboardComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardComponents */ "./admin/components/DashboardComponents/index.js");


var Dashboard = function Dashboard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard-left"
  }, window.frontisBlocksAdmin.isProActive === 'false' && /*#__PURE__*/React.createElement(_DashboardComponents__WEBPACK_IMPORTED_MODULE_1__.ProBanner, null), /*#__PURE__*/React.createElement(_DashboardComponents__WEBPACK_IMPORTED_MODULE_1__.VideoBanner, null)), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard-right"
  }, /*#__PURE__*/React.createElement(_DashboardComponents__WEBPACK_IMPORTED_MODULE_1__.SystemRequirements, null))), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard-bottom"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./admin/components/DashboardComponents/ProBanner.js":
/*!***********************************************************!*\
  !*** ./admin/components/DashboardComponents/ProBanner.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons */ "./admin/icons/index.js");


function ProBanner() {
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-pro-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-pro-title-flex"
  }, /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Frontis Blocks – Design Smarter, Faster, and Better with Gutenberg', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Frontis Blocks is your ultimate companion for enhancing the WordPress Gutenberg editor. This plugin empowers users with a diverse set of advanced blocks, designed to elevate the functionality and design of your website. Whether you\u2019re a seasoned developer or a beginner exploring WordPress, Frontis Blocks offers an intuitive and flexible solution for crafting responsive, visually stunning, and performance-optimized websites. With a wide range of customizable blocks, Frontis Blocks enables you to add dynamic elements, create engaging layouts, and deliver a professional-grade user experience, all without writing a single line of code.", 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Built with performance and usability in mind, Frontis Blocks integrates seamlessly into the Gutenberg editor. The plugin boasts blocks tailored for every need\u2014from feature-rich text formats and media integrations to interactive components like sliders, tabs, and accordions. Each block is designed to simplify your workflow while ensuring that your site loads quickly and ranks higher in search engines. Whether you\u2019re building a personal blog, a business site, or an eCommerce platform, Frontis Blocks is the perfect toolkit to bring your vision to life. Dive into the world of limitless creativity with Frontis Blocks and take your WordPress site to the next level!", 'frontis-blocks')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProBanner);

/***/ }),

/***/ "./admin/components/DashboardComponents/SystemRequirements.js":
/*!********************************************************************!*\
  !*** ./admin/components/DashboardComponents/SystemRequirements.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons */ "./admin/icons/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var SystemRequirements = function SystemRequirements() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    healthInfo = _useState2[0],
    setHealthInfo = _useState2[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetchHealthInfo();
  }, []);
  var fetchHealthInfo = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
              path: '/wp/v2/frontis-blocks/system-health'
            });
          case 3:
            response = _context.sent;
            setHealthInfo(response);
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error('Error fetching system health info:', _context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function fetchHealthInfo() {
      return _ref.apply(this, arguments);
    };
  }();
  if (!healthInfo) {
    return /*#__PURE__*/React.createElement("div", null, "Loading...");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-system-requirements"
  }, /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('System Requirements', 'frontis-blocks')), /*#__PURE__*/React.createElement("div", {
    className: "fb-system-requirements-list"
  }, healthInfo.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "fb-system-requirement-item ".concat(item.status)
    }, item.status === 'good' ? /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.CheckIcon, null) : /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.XIcon, null), /*#__PURE__*/React.createElement("span", {
      className: "fb-requirement-label"
    }, item.label), /*#__PURE__*/React.createElement("span", {
      className: "fb-requirement-value"
    }, item.value));
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-system-requirements-note"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Note: ', 'frontis-blocks')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The Frontis Block is a modern content creation tool designed for WordPress, offering a flexible and intuitive way to build web pages.', 'frontis-blocks'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemRequirements);

/***/ }),

/***/ "./admin/components/DashboardComponents/VideoBanner.js":
/*!*************************************************************!*\
  !*** ./admin/components/DashboardComponents/VideoBanner.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var VideoBanner = function VideoBanner() {
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-video-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-video-banner-content"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Welcome to Frontis Blocks', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The Frontis Block is a modern content creation tool', 'frontis-blocks'))), /*#__PURE__*/React.createElement("a", {
    className: "fb-create-page-button",
    href: "/wp-admin/post-new.php?post_type=page"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Create New Page', 'frontis-blocks'), /*#__PURE__*/React.createElement("span", null, "+"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoBanner);

/***/ }),

/***/ "./admin/components/DashboardComponents/index.js":
/*!*******************************************************!*\
  !*** ./admin/components/DashboardComponents/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProBanner: () => (/* reexport safe */ _ProBanner__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   SystemRequirements: () => (/* reexport safe */ _SystemRequirements__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   VideoBanner: () => (/* reexport safe */ _VideoBanner__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _ProBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProBanner */ "./admin/components/DashboardComponents/ProBanner.js");
/* harmony import */ var _SystemRequirements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemRequirements */ "./admin/components/DashboardComponents/SystemRequirements.js");
/* harmony import */ var _VideoBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoBanner */ "./admin/components/DashboardComponents/VideoBanner.js");




/***/ }),

/***/ "./admin/components/Integration.js":
/*!*****************************************!*\
  !*** ./admin/components/Integration.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var Integration = function Integration() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
      recaptcha_v2_site_key: '',
      recaptcha_v2_secret_key: '',
      recaptcha_v3_site_key: '',
      recaptcha_v3_secret_key: '',
      google_maps_api_key: '',
      instagram_access_token: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    integrations = _useState2[0],
    setIntegrations = _useState2[1];
  var _window$frontisBlocks = window.frontisBlocksAdmin,
    nonce = _window$frontisBlocks.nonce,
    ajaxUrl = _window$frontisBlocks.ajaxUrl;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetchOptions();
  }, []);
  var fetchOptions = function fetchOptions() {
    var keys = Object.keys(integrations);
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_get_options',
        security: nonce,
        keys: keys
      },
      success: function success(response) {
        if (response.success) {
          setIntegrations(function (prevIntegrations) {
            return _objectSpread(_objectSpread({}, prevIntegrations), response.data);
          });
        } else {
          var _response$data;
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Unknown error'), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }
      },
      error: function error(xhr, status, _error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(status, " - ").concat(_error), 'frontis-blocks'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    });
  };
  var saveOption = function saveOption(key, value) {
    return new Promise(function (resolve, reject) {
      window.jQuery.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: {
          action: "fb_".concat(key),
          security: nonce,
          value: value
        },
        success: function success(response) {
          if (response.success) {
            setIntegrations(function (prevIntegrations) {
              return _objectSpread(_objectSpread({}, prevIntegrations), {}, _defineProperty({}, key, value));
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(response.data.message, 'frontis-blocks'), {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            resolve(true);
          } else {
            var _response$data2;
            var errorMessage = ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message) || 'Unknown error';
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage), 'frontis-blocks'), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            reject(new Error(errorMessage));
          }
        },
        error: function error(xhr, status, _error2) {
          var errorMessage = "".concat(status, " - ").concat(_error2);
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
          reject(new Error(errorMessage));
        }
      });
    });
  };
  var handleChange = function handleChange(value, name) {
    setIntegrations(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, value));
    });
  };
  var handleBlur = function handleBlur(name) {
    saveOption(name, integrations[name]);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-integration"
  }, /*#__PURE__*/React.createElement("div", {
    className: "integration-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-left"
  }, /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Google reCAPTCHA', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Google reCAPTCHA is a free service that protects your website from spam and abuse.', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "section-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-right-overlay"
  }), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks')), /*#__PURE__*/React.createElement("div", {
    className: "recaptcha-version"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('reCAPTCHA v2', 'frontis-blocks')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl
  // label={__('Site key', 'frontis-blocks')}
  , {
    value: integrations.recaptcha_v2_site_key,
    onChange: function onChange(value) {
      return handleChange(value, 'recaptcha_v2_site_key');
    },
    onBlur: function onBlur() {
      return handleBlur('recaptcha_v2_site_key');
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter reCAPTCHA v2 Site Key', 'frontis-blocks')
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl
  // label={ __('Secret key', 'frontis-blocks') }
  , {
    type: "password",
    value: integrations.recaptcha_v2_secret_key,
    onChange: function onChange(value) {
      return handleChange(value, 'recaptcha_v2_secret_key');
    },
    onBlur: function onBlur() {
      return handleBlur('recaptcha_v2_secret_key');
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter reCAPTCHA v2 Secret Key', 'frontis-blocks')
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "api-documentation"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('API Documentation', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "recaptcha-version"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('reCAPTCHA v3', 'frontis-blocks')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl
  // label={__('Site key', 'frontis-blocks')}
  , {
    value: integrations.recaptcha_v3_site_key,
    onChange: function onChange(value) {
      return handleChange(value, 'recaptcha_v3_site_key');
    },
    onBlur: function onBlur() {
      return handleBlur('recaptcha_v3_site_key');
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter reCAPTCHA v3 Site Key', 'frontis-blocks')
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl
  // label={ __('Secret key', 'frontis-blocks') }
  , {
    type: "password",
    value: integrations.recaptcha_v3_secret_key,
    onChange: function onChange(value) {
      return handleChange(value, 'recaptcha_v3_secret_key');
    },
    onBlur: function onBlur() {
      return handleBlur('recaptcha_v3_secret_key');
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter reCAPTCHA v3 Secret Key', 'frontis-blocks')
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "api-documentation"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('API Documentation', 'frontis-blocks')))))), /*#__PURE__*/React.createElement("div", {
    className: "integration-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-left"
  }, /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Google Maps', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Integrate Google Maps into your website to display interactive maps and location-based information.', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "section-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-right-overlay"
  }), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Google Maps API Key', 'frontis-blocks'),
    value: integrations.google_maps_api_key,
    onChange: function onChange(value) {
      return handleChange(value, 'google_maps_api_key');
    },
    onBlur: function onBlur() {
      return handleBlur('google_maps_api_key');
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter Google Maps API Key', 'frontis-blocks')
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "api-documentation"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('API Documentation', 'frontis-blocks'))))), /*#__PURE__*/React.createElement("div", {
    className: "integration-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-left"
  }, /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Instagram Feed', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display your latest Instagram posts on your website with this integration.', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "section-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-right-overlay"
  }), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Instagram Access Token', 'frontis-blocks'),
    type: "password",
    value: integrations.instagram_access_token,
    onChange: function onChange(value) {
      return handleChange(value, 'instagram_access_token');
    },
    onBlur: function onBlur() {
      return handleBlur('instagram_access_token');
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter Instagram Access Token', 'frontis-blocks')
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "api-documentation"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('API Documentation', 'frontis-blocks'))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Integration);

/***/ }),

/***/ "./admin/components/Pricing.js":
/*!*************************************!*\
  !*** ./admin/components/Pricing.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


var pricingFeatures = [{
  feature: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Plugin updated', 'frontis-blocks'),
  free: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Free', 'frontis-blocks'),
  pro: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lifetime', 'frontis-blocks')
}, {
  feature: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Support', 'frontis-blocks'),
  free: 'WordPress.org',
  pro: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lifetime', 'frontis-blocks')
}, {
  feature: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Modules', 'frontis-blocks'),
  free: '10',
  pro: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('All', 'frontis-blocks')
}, {
  feature: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('More than 30 Custom Blocks', 'frontis-blocks'),
  free: true,
  pro: true
}, {
  feature: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Extra Function for all Blocks', 'frontis-blocks'),
  free: true,
  pro: true
}, {
  feature: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Premium Blocks', 'frontis-blocks'),
  free: false,
  pro: true
}, {
  feature: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dynamic Blocks', 'frontis-blocks'),
  free: false,
  pro: true
}, {
  feature: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Review Comparison Table', 'frontis-blocks'),
  free: false,
  pro: true
}, {
  feature: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Woocommerce Builder Blocks', 'frontis-blocks'),
  free: false,
  pro: true
}, {
  feature: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Extended Popups', 'frontis-blocks'),
  free: false,
  pro: true
}, {
  feature: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Priority Support', 'frontis-blocks'),
  free: false,
  pro: true
}];
var Pricing = function Pricing() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-blocks-pricing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-pricing-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-pricing-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-pricing-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Features Comparison', 'frontis-blocks')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Frontis Blocks is a powerful plugin that allows you to create stunning websites with ease.', 'frontis-blocks'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-pricing-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-pricing-column-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fb-pricing-type"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Free', 'frontis-blocks')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fb-pricing-price"
  }, "$00", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('/Forever', 'frontis-blocks')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "fb-button fb-button-green"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Download', 'frontis-blocks'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-pricing-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-pricing-column-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fb-pricing-type"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pro', 'frontis-blocks')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fb-pricing-price"
  }, "$999", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('/Years', 'frontis-blocks')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "fb-button fb-button-blue"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Buy Now', 'frontis-blocks')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-pricing-body"
  }, pricingFeatures.map(function (row, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: "fb-pricing-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fb-pricing-column"
    }, row.feature), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fb-pricing-column"
    }, typeof row.free === 'boolean' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fb-pricing-icon ".concat(row.free ? 'fb-pricing-icon-check' : 'fb-pricing-icon-cross')
    }) : row.free), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fb-pricing-column"
    }, typeof row.pro === 'boolean' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fb-pricing-icon ".concat(row.pro ? 'fb-pricing-icon-check' : 'fb-pricing-icon-cross')
    }) : row.pro));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pricing);

/***/ }),

/***/ "./admin/components/Settings.js":
/*!**************************************!*\
  !*** ./admin/components/Settings.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SettingsTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingsTabs */ "./admin/components/SettingsTabs.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var Settings = function Settings() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(_SettingsTabs__WEBPACK_IMPORTED_MODULE_2__["default"][0].id),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var handleTabClick = function handleTabClick(tabId) {
    setActiveTab(tabId);
  };
  var ActiveComponent = _SettingsTabs__WEBPACK_IMPORTED_MODULE_2__["default"].find(function (tab) {
    return tab.id === activeTab;
  }).component;
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-tabs"
  }, _SettingsTabs__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (tab) {
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      className: "fb-blocks-settings-tab ".concat(activeTab === tab.id ? 'active' : ''),
      onClick: function onClick() {
        return handleTabClick(tab.id);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "fb-blocks-settings-tab-icon"
    }, tab.icon), /*#__PURE__*/React.createElement("span", {
      className: "fb-blocks-settings-tab-label"
    }, tab.label));
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-content"
  }, /*#__PURE__*/React.createElement(ActiveComponent, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./admin/components/SettingsComponents/AssetsGeneration.js":
/*!*****************************************************************!*\
  !*** ./admin/components/SettingsComponents/AssetsGeneration.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-switch */ "./node_modules/rc-switch/es/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_ConfirmationModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/ConfirmationModal */ "./admin/components/common/ConfirmationModal.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var AssetsGeneration = function AssetsGeneration() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)({
      file_generation: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isModalOpen = _useState4[0],
    setIsModalOpen = _useState4[1];
  var _window$frontisBlocks = window.frontisBlocksAdmin,
    nonce = _window$frontisBlocks.nonce,
    ajaxUrl = _window$frontisBlocks.ajaxUrl;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    fetchOptions();
  }, []);
  var fetchOptions = function fetchOptions() {
    var keys = Object.keys(options);
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_get_options',
        security: nonce,
        keys: keys
      },
      success: function success(response) {
        if (response.success) {
          setOptions(function (prevOptions) {
            return _objectSpread(_objectSpread({}, prevOptions), response.data);
          });
        } else {
          var _response$data;
          react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Unknown error'), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }
      },
      error: function error(xhr, status, _error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(status, " - ").concat(_error), 'frontis-blocks'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    });
  };
  var saveOption = function saveOption(key, value) {
    return new Promise(function (resolve, reject) {
      window.jQuery.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: {
          action: "fb_".concat(key),
          security: nonce,
          value: value
        },
        success: function success(response) {
          if (response.success) {
            setOptions(function (prevOptions) {
              return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, key, value));
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(response.data.message, 'frontis-blocks'), {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            resolve(true);
          } else {
            var _response$data2, _response$data3;
            var errorMessage = ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message) || 'Unknown error';
            var errorDetails = ((_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : _response$data3.old_value) !== undefined ? " (Old value: ".concat(JSON.stringify(response.data.old_value), ", New value: ").concat(JSON.stringify(response.data.new_value), ", Option name: ").concat(response.data.option_name, ")") : '';
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage).concat(errorDetails), 'frontis-blocks'), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            reject(new Error(errorMessage));
          }
        },
        error: function error(xhr, status, _error2) {
          var errorMessage = "".concat(status, " - ").concat(_error2);
          react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
          reject(new Error(errorMessage));
        }
      });
    });
  };
  var handleSwitchChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(option) {
      var newValue;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            newValue = !options[option];
            _context.prev = 1;
            _context.next = 4;
            return saveOption(option, newValue ? '1' : '0');
          case 4:
            setOptions(function (prevOptions) {
              return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, option, newValue));
            });
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            // Revert the switch if saving failed
            setOptions(function (prevOptions) {
              return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, option, !newValue));
            });
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 7]]);
    }));
    return function handleSwitchChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleAssetGeneration = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    setIsModalOpen(true);
  }, []);
  var confirmAssetGeneration = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    setIsModalOpen(false);
    window.jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_generate_assets',
        security: nonce
      },
      success: function success(response) {
        if (response.success) {
          react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(response.data.message, 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        } else {
          var _response$data4;
          react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to regenerate files: ".concat(((_response$data4 = response.data) === null || _response$data4 === void 0 ? void 0 : _response$data4.message) || 'Unknown error'), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }
      },
      error: function error(xhr, status, _error3) {
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to regenerate files: ".concat(status, " - ").concat(_error3), 'frontis-blocks'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    });
  }, [ajaxUrl, nonce]);
  var closeModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    setIsModalOpen(false);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('File Generation', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable automatic file generation', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks')))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Asset Generation', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Generate assets for your blocks', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "fb-button-primary",
    onClick: handleAssetGeneration
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Regenerate Asset', 'frontis-blocks')))), /*#__PURE__*/React.createElement(_common_ConfirmationModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: isModalOpen,
    onClose: closeModal,
    onConfirm: confirmAssetGeneration,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Confirm Asset Generation', 'frontis-blocks'),
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Are you sure you want to generate assets? This process may take a few moments.', 'frontis-blocks')
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetsGeneration);

/***/ }),

/***/ "./admin/components/SettingsComponents/EditorEnhancements.js":
/*!*******************************************************************!*\
  !*** ./admin/components/SettingsComponents/EditorEnhancements.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-switch */ "./node_modules/rc-switch/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var EditorEnhancements = function EditorEnhancements() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
      enable_quick_action_bar: false,
      collapse_panel: false,
      enable_templates_button: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _window$frontisBlocks = window.frontisBlocksAdmin,
    nonce = _window$frontisBlocks.nonce,
    ajaxUrl = _window$frontisBlocks.ajaxUrl;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetchOptions();
  }, []);
  var fetchOptions = function fetchOptions() {
    var keys = Object.keys(options);
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_get_options',
        security: nonce,
        keys: keys
      },
      success: function success(response) {
        if (response.success) {
          setOptions(function (prevOptions) {
            return _objectSpread(_objectSpread({}, prevOptions), response.data);
          });
        } else {
          var _response$data;
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Unknown error'), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }
      },
      error: function error(xhr, status, _error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(status, " - ").concat(_error), 'frontis-blocks'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    });
  };
  var saveOption = function saveOption(key, value) {
    return new Promise(function (resolve, reject) {
      window.jQuery.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: {
          action: "fb_".concat(key),
          security: nonce,
          value: value
        },
        success: function success(response) {
          if (response.success) {
            setOptions(function (prevOptions) {
              return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, key, value));
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(response.data.message, 'frontis-blocks'), {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            resolve(true);
          } else {
            var _response$data2, _response$data3;
            var errorMessage = ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message) || 'Unknown error';
            var errorDetails = ((_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : _response$data3.old_value) !== undefined ? " (Old value: ".concat(JSON.stringify(response.data.old_value), ", New value: ").concat(JSON.stringify(response.data.new_value), ", Option name: ").concat(response.data.option_name, ")") : '';
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage).concat(errorDetails), 'frontis-blocks'), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            reject(new Error(errorMessage));
          }
        },
        error: function error(xhr, status, _error2) {
          var errorMessage = "".concat(status, " - ").concat(_error2);
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
          reject(new Error(errorMessage));
        }
      });
    });
  };
  var handleSwitchChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(option) {
      var newValue;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            newValue = !options[option];
            _context.prev = 1;
            _context.next = 4;
            return saveOption(option, newValue ? '1' : '0');
          case 4:
            setOptions(function (prevOptions) {
              return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, option, newValue));
            });
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            // Revert the switch if saving failed
            setOptions(function (prevOptions) {
              return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, option, !newValue));
            });
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 7]]);
    }));
    return function handleSwitchChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Quick Action Bar', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds a quick action bar to the editor', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Collapse Panel', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Allows collapsing of the editor panel', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Templates Button', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds a templates button to the editor', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorEnhancements);

/***/ }),

/***/ "./admin/components/SettingsComponents/EditorOptions.js":
/*!**************************************************************!*\
  !*** ./admin/components/SettingsComponents/EditorOptions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-switch */ "./node_modules/rc-switch/es/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var EditorOptions = function EditorOptions() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)({
      default_content_width: '',
      button_inherit_from_theme: false,
      container_padding: '',
      container_elements_gap: '',
      custom_css: false,
      copy_paste_style: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _window$frontisBlocks = window.frontisBlocksAdmin,
    nonce = _window$frontisBlocks.nonce,
    ajaxUrl = _window$frontisBlocks.ajaxUrl;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    fetchOptions();
  }, []);
  var fetchOptions = function fetchOptions() {
    var keys = Object.keys(options);
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_get_options',
        security: nonce,
        keys: keys
      },
      success: function success(response) {
        if (response.success) {
          setOptions(function (prevOptions) {
            return _objectSpread(_objectSpread({}, prevOptions), response.data);
          });
        } else {
          var _response$data;
          react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Unknown error'), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }
      },
      error: function error(xhr, status, _error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(status, " - ").concat(_error), 'frontis-blocks'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    });
  };
  var saveOption = function saveOption(key, value) {
    return new Promise(function (resolve, reject) {
      window.jQuery.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: {
          action: "fb_".concat(key),
          security: nonce,
          value: value
        },
        success: function success(response) {
          if (response.success) {
            setOptions(function (prevOptions) {
              return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, key, value));
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(response.data.message, 'frontis-blocks'), {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            resolve(true);
          } else {
            var _response$data2, _response$data3;
            var errorMessage = ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message) || 'Unknown error';
            var errorDetails = ((_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : _response$data3.old_value) !== undefined ? " (Old value: ".concat(JSON.stringify(response.data.old_value), ", New value: ").concat(JSON.stringify(response.data.new_value), ", Option name: ").concat(response.data.option_name, ")") : '';
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage).concat(errorDetails), 'frontis-blocks'), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            reject(new Error(errorMessage));
          }
        },
        error: function error(xhr, status, _error2) {
          var errorMessage = "".concat(status, " - ").concat(_error2);
          react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
          reject(new Error(errorMessage));
        }
      });
    });
  };
  var handleNumberChange = function handleNumberChange(option, value) {
    setOptions(function (prevOptions) {
      return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, option, value));
    });
  };
  var handleNumberBlur = function handleNumberBlur(option, value) {
    saveOption(option, value);
  };
  var handleSwitchChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(option) {
      var newValue;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            newValue = !options[option];
            _context.prev = 1;
            _context.next = 4;
            return saveOption(option, newValue ? '1' : '0');
          case 4:
            setOptions(function (prevOptions) {
              return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, option, newValue));
            });
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            // Revert the switch if saving failed
            setOptions(function (prevOptions) {
              return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, option, !newValue));
            });
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 7]]);
    }));
    return function handleSwitchChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('Desktop'),
    _useState4 = _slicedToArray(_useState3, 2),
    device = _useState4[0],
    setDevice = _useState4[1];
  var handleDevice = function handleDevice(deviceName) {
    setDevice(deviceName);
  };
  var toggleDeviceVisibility = function toggleDeviceVisibility(e) {
    var wrapper = e.currentTarget;
    wrapper.classList.toggle('fb-device-switchers-open');
  };
  var NumberInputWithPx = function NumberInputWithPx(_ref2) {
    var value = _ref2.value,
      onChange = _ref2.onChange,
      onBlur = _ref2.onBlur,
      min = _ref2.min,
      max = _ref2.max;
    return /*#__PURE__*/React.createElement("div", {
      className: "fb-option-input-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-option-input-with-px"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      type: "number",
      min: min,
      max: max,
      value: value,
      onChange: onChange,
      onBlur: onBlur
    }), /*#__PURE__*/React.createElement("span", {
      className: "fb-option-input-px"
    }, "px")), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-device-label-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default Content Width', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set the default width for content in pixels', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button - Inherit From Theme', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use button styles from the current theme', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container Padding', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set the default padding for containers in pixels', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container Elements Gap', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set the default gap between container elements in pixels', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom CSS', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable custom CSS for blocks', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Copy Paste Style', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable copy and paste style functionality', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorOptions);

/***/ }),

/***/ "./admin/components/SettingsComponents/Performance.js":
/*!************************************************************!*\
  !*** ./admin/components/SettingsComponents/Performance.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-switch */ "./node_modules/rc-switch/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var Performance = function Performance() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
      google_fonts: false,
      preload_local_fonts: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _window$frontisBlocks = window.frontisBlocksAdmin,
    nonce = _window$frontisBlocks.nonce,
    ajaxUrl = _window$frontisBlocks.ajaxUrl;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetchOptions();
  }, []);
  var fetchOptions = function fetchOptions() {
    var keys = Object.keys(options);
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_get_options',
        security: nonce,
        keys: keys
      },
      success: function success(response) {
        if (response.success) {
          setOptions(function (prevOptions) {
            return _objectSpread(_objectSpread({}, prevOptions), response.data);
          });
        } else {
          var _response$data;
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Unknown error'), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }
      },
      error: function error(xhr, status, _error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(status, " - ").concat(_error), 'frontis-blocks'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    });
  };
  var saveOption = function saveOption(key, value) {
    return new Promise(function (resolve, reject) {
      window.jQuery.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: {
          action: "fb_".concat(key),
          security: nonce,
          value: value
        },
        success: function success(response) {
          if (response.success) {
            setOptions(function (prevOptions) {
              return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, key, value));
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(response.data.message, 'frontis-blocks'), {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            resolve(true);
          } else {
            var _response$data2;
            var errorMessage = ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message) || 'Unknown error';
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage), 'frontis-blocks'), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            reject(new Error(errorMessage));
          }
        },
        error: function error(xhr, status, _error2) {
          var errorMessage = "".concat(status, " - ").concat(_error2);
          react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
          reject(new Error(errorMessage));
        }
      });
    });
  };
  var handleSwitchChange = function handleSwitchChange(option) {
    setOptions(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, option, !prevState[option]));
    });
    saveOption(option, !prevState[option]);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Load Google Fonts Locally", "frontis-blocks")), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Load Google Fonts Locally for performance improvement", "frontis-blocks"))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preload Local Fonts", "frontis-blocks")), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preload Local Fonts for performance improvement", "frontis-blocks"))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Performance);

/***/ }),

/***/ "./admin/components/SettingsComponents/SiteVisibility.js":
/*!***************************************************************!*\
  !*** ./admin/components/SettingsComponents/SiteVisibility.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-switch */ "./node_modules/rc-switch/es/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var SiteVisibility = function SiteVisibility() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({
      coming_soon_mode: false,
      maintenance_mode: false,
      coming_soon_page_id: '',
      maintenance_page_id: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _window$frontisBlocks = window.frontisBlocksAdmin,
    nonce = _window$frontisBlocks.nonce,
    ajaxUrl = _window$frontisBlocks.ajaxUrl;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
      return {
        pages: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEntityRecords('postType', 'page', {
          per_page: -1
        }),
        hasResolved: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).hasFinishedResolution('getEntityRecords', ['postType', 'page', {
          per_page: -1
        }])
      };
    }, []),
    pages = _useSelect.pages,
    hasResolved = _useSelect.hasResolved;
  var pageOptions = hasResolved && pages ? pages.map(function (page) {
    return {
      value: page.id.toString(),
      label: page.title.rendered
    };
  }) : [];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    fetchOptions();
  }, []);
  var fetchOptions = function fetchOptions() {
    var keys = Object.keys(options);
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_get_options',
        security: nonce,
        keys: keys
      },
      success: function success(response) {
        if (response.success) {
          setOptions(function (prevOptions) {
            return _objectSpread(_objectSpread({}, prevOptions), response.data);
          });
        } else {
          var _response$data;
          react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Unknown error'), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }
      },
      error: function error(xhr, status, _error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(status, " - ").concat(_error), 'frontis-blocks'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    });
  };
  var saveOption = function saveOption(key, value) {
    return new Promise(function (resolve, reject) {
      window.jQuery.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: {
          action: "fb_".concat(key),
          security: nonce,
          value: value
        },
        success: function success(response) {
          if (response.success) {
            setOptions(function (prevOptions) {
              return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, key, value));
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(response.data.message, 'frontis-blocks'), {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            resolve(true);
          } else {
            var _response$data2;
            var errorMessage = ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message) || 'Unknown error';
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage), 'frontis-blocks'), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            reject(new Error(errorMessage));
          }
        },
        error: function error(xhr, status, _error2) {
          var errorMessage = "".concat(status, " - ").concat(_error2);
          react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
          reject(new Error(errorMessage));
        }
      });
    });
  };
  var handleChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(key, value) {
      var updatedOptions;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            updatedOptions = _objectSpread(_objectSpread({}, options), {}, _defineProperty({}, key, value));
            if (!(key === 'coming_soon_mode' && value === true)) {
              _context.next = 11;
              break;
            }
            updatedOptions.maintenance_mode = false;
            _context.next = 5;
            return saveOption('maintenance_mode', false);
          case 5:
            if (!(!options.coming_soon_page_id && pageOptions.length > 0)) {
              _context.next = 9;
              break;
            }
            updatedOptions.coming_soon_page_id = pageOptions[0].value;
            _context.next = 9;
            return saveOption('coming_soon_page_id', pageOptions[0].value);
          case 9:
            _context.next = 19;
            break;
          case 11:
            if (!(key === 'maintenance_mode' && value === true)) {
              _context.next = 19;
              break;
            }
            updatedOptions.coming_soon_mode = false;
            _context.next = 15;
            return saveOption('coming_soon_mode', false);
          case 15:
            if (!(!options.maintenance_page_id && pageOptions.length > 0)) {
              _context.next = 19;
              break;
            }
            updatedOptions.maintenance_page_id = pageOptions[0].value;
            _context.next = 19;
            return saveOption('maintenance_page_id', pageOptions[0].value);
          case 19:
            _context.next = 21;
            return saveOption(key, value);
          case 21:
            setOptions(updatedOptions);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleChange(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Coming Soon Mode', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Activate coming soon page for visitors', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), options.coming_soon_mode && /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Coming Soon Page', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Maintenance Mode', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Activate maintenance mode for visitors', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), options.maintenance_mode && /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Maintenance Page', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteVisibility);

/***/ }),

/***/ "./admin/components/SettingsComponents/VersionControl.js":
/*!***************************************************************!*\
  !*** ./admin/components/SettingsComponents/VersionControl.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-switch */ "./node_modules/rc-switch/es/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var VersionControl = function VersionControl() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)({
      selected_version: '',
      enable_beta: false,
      enable_legacy_block: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _window$frontisBlocks = window.frontisBlocksAdmin,
    ajaxUrl = _window$frontisBlocks.ajaxUrl,
    nonce = _window$frontisBlocks.nonce;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    fetchOptions();
  }, []);
  var fetchOptions = function fetchOptions() {
    var keys = Object.keys(options);
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_get_options',
        security: nonce,
        keys: keys
      },
      success: function success(response) {
        if (response.success) {
          setOptions(function (prevOptions) {
            return _objectSpread(_objectSpread({}, prevOptions), response.data);
          });
        } else {
          var _response$data;
          react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Unknown error'), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }
      },
      error: function error(xhr, status, _error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to fetch options: ".concat(status, " - ").concat(_error), 'frontis-blocks'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    });
  };
  var saveOption = function saveOption(key, value) {
    return new Promise(function (resolve, reject) {
      window.jQuery.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: {
          action: "fb_".concat(key),
          security: nonce,
          value: value
        },
        success: function success(response) {
          if (response.success) {
            setOptions(function (prevOptions) {
              return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, key, value));
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(response.data.message, 'frontis-blocks'), {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            resolve(true);
          } else {
            var _response$data2;
            var errorMessage = ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message) || 'Unknown error';
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage), 'frontis-blocks'), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
            reject(new Error(errorMessage));
          }
        },
        error: function error(xhr, status, _error2) {
          var errorMessage = "".concat(status, " - ").concat(_error2);
          react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to save option: ".concat(errorMessage), 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
          reject(new Error(errorMessage));
        }
      });
    });
  };
  var handleSwitchChange = function handleSwitchChange(option) {
    setOptions(function (prevOptions) {
      return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, option, !prevOptions[option]));
    });
    saveOption(option, !prevOptions[option]);
  };
  var handleVersionChange = function handleVersionChange(value) {
    setOptions(function (prevOptions) {
      return _objectSpread(_objectSpread({}, prevOptions), {}, {
        selected_version: value
      });
    });
    saveOption('selected_version', value);
  };
  var handleRollback = function handleRollback() {
    // I will Add rollback logic here
    saveOption('selected_version', options.selected_version);
  };

  // Mock versions for the select control, will replace from the API
  var versions = [{
    label: 'Version 1.0.0',
    value: '1.0.0'
  }, {
    label: 'Version 1.1.0',
    value: '1.1.0'
  }, {
    label: 'Version 1.2.0',
    value: '1.2.0'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rollback To Previous Version', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a version to rollback to', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Beta', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable beta features', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Legacy Block', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable support for legacy blocks', 'frontis-blocks'))), /*#__PURE__*/React.createElement("p", {
    className: "fb-button-upcoming"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coming Soon', 'frontis-blocks'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VersionControl);

/***/ }),

/***/ "./admin/components/SettingsComponents/index.js":
/*!******************************************************!*\
  !*** ./admin/components/SettingsComponents/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetsGeneration: () => (/* reexport safe */ _AssetsGeneration__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   EditorEnhancements: () => (/* reexport safe */ _EditorEnhancements__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   EditorOptions: () => (/* reexport safe */ _EditorOptions__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Performance: () => (/* reexport safe */ _Performance__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   SiteVisibility: () => (/* reexport safe */ _SiteVisibility__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   VersionControl: () => (/* reexport safe */ _VersionControl__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _EditorOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorOptions */ "./admin/components/SettingsComponents/EditorOptions.js");
/* harmony import */ var _AssetsGeneration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssetsGeneration */ "./admin/components/SettingsComponents/AssetsGeneration.js");
/* harmony import */ var _VersionControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VersionControl */ "./admin/components/SettingsComponents/VersionControl.js");
/* harmony import */ var _EditorEnhancements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorEnhancements */ "./admin/components/SettingsComponents/EditorEnhancements.js");
/* harmony import */ var _Performance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Performance */ "./admin/components/SettingsComponents/Performance.js");
/* harmony import */ var _SiteVisibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SiteVisibility */ "./admin/components/SettingsComponents/SiteVisibility.js");







/***/ }),

/***/ "./admin/components/SettingsTabs.js":
/*!******************************************!*\
  !*** ./admin/components/SettingsTabs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SettingsComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsComponents */ "./admin/components/SettingsComponents/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./admin/icons/index.js");



var SettingsTabs = [{
  id: "editor",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Editor Options", "frontis-blocks"),
  icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.EditorOptionIcon, null),
  component: _SettingsComponents__WEBPACK_IMPORTED_MODULE_1__.EditorOptions
}, {
  id: "assets",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Assets Generation", "frontis-blocks"),
  icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.AssetGenerationIcon, null),
  component: _SettingsComponents__WEBPACK_IMPORTED_MODULE_1__.AssetsGeneration
}, {
  id: "version",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Version Control", "frontis-blocks"),
  icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.VersionControlIcon, null),
  component: _SettingsComponents__WEBPACK_IMPORTED_MODULE_1__.VersionControl
}, {
  id: "editor-enhancements",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Editor Enhancements", "frontis-blocks"),
  icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.EditorEnhancementIcon, null),
  component: _SettingsComponents__WEBPACK_IMPORTED_MODULE_1__.EditorEnhancements
}, {
  id: "performance",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Performance", "frontis-blocks"),
  icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.PerformanceIcon, null),
  component: _SettingsComponents__WEBPACK_IMPORTED_MODULE_1__.Performance
}, {
  id: "site-visibility",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Site Visibility", "frontis-blocks"),
  icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.SiteVisibilityIcon, null),
  component: _SettingsComponents__WEBPACK_IMPORTED_MODULE_1__.SiteVisibility
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsTabs);

/***/ }),

/***/ "./admin/components/TabPanel.js":
/*!**************************************!*\
  !*** ./admin/components/TabPanel.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

var TabPanel = function TabPanel(_ref) {
  var _tabs$;
  var className = _ref.className,
    activeClass = _ref.activeClass,
    onSelect = _ref.onSelect,
    initialTabName = _ref.initialTabName,
    tabs = _ref.tabs,
    children = _ref.children;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.name),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var version = window.frontisBlocksAdmin.version;
  var handleTabChange = function handleTabChange(tabName) {
    setActiveTab(tabName);
    onSelect(tabName);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-tab-panel ".concat(className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-tab-panel-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-tab-list"
  }, tabs.map(function (tab) {
    return /*#__PURE__*/React.createElement("button", {
      key: tab.name,
      className: "fb-blocks-tab-button ".concat(initialTabName === tab.name ? "".concat(activeClass, " fb-blocks-active-tab") : ''),
      onClick: function onClick() {
        return handleTabChange(tab.name);
      }
    }, tab.icon, /*#__PURE__*/React.createElement("span", null, tab.title));
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-version"
  }, "Free version: ", version)), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-tab-content"
  }, children(tabs.find(function (tab) {
    return tab.name === activeTab;
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPanel);

/***/ }),

/***/ "./admin/components/common/ConfirmationModal.js":
/*!******************************************************!*\
  !*** ./admin/components/common/ConfirmationModal.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var ConfirmationModal = function ConfirmationModal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    onConfirm = _ref.onConfirm,
    title = _ref.title,
    message = _ref.message;
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-modal-content"
  }, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", null, message), /*#__PURE__*/React.createElement("div", {
    className: "fb-confirmation-modal-actions"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "fb-button-error",
    onClick: onClose
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cancel', 'frontis-blocks')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "fb-button-primary",
    onClick: function onClick() {
      onConfirm();
      onClose();
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Confirm', 'frontis-blocks')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmationModal);

/***/ }),

/***/ "./admin/components/index.js":
/*!***********************************!*\
  !*** ./admin/components/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blocks: () => (/* reexport safe */ _Blocks__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   CustomIcons: () => (/* reexport safe */ _CustomIcons__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Dashboard: () => (/* reexport safe */ _Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Integration: () => (/* reexport safe */ _Integration__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Pricing: () => (/* reexport safe */ _Pricing__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Settings: () => (/* reexport safe */ _Settings__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   TabPanel: () => (/* reexport safe */ _TabPanel__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard */ "./admin/components/Dashboard.js");
/* harmony import */ var _Blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blocks */ "./admin/components/Blocks.js");
/* harmony import */ var _Integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Integration */ "./admin/components/Integration.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Settings */ "./admin/components/Settings.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabPanel */ "./admin/components/TabPanel.js");
/* harmony import */ var _Pricing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pricing */ "./admin/components/Pricing.js");
/* harmony import */ var _CustomIcons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomIcons */ "./admin/components/CustomIcons.js");








/***/ }),

/***/ "./admin/icons/index.js":
/*!******************************!*\
  !*** ./admin/icons/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   All: () => (/* binding */ All),
/* harmony export */   AssetGenerationIcon: () => (/* binding */ AssetGenerationIcon),
/* harmony export */   BlockIcon: () => (/* binding */ BlockIcon),
/* harmony export */   CheckIcon: () => (/* binding */ CheckIcon),
/* harmony export */   Content: () => (/* binding */ Content),
/* harmony export */   Creative: () => (/* binding */ Creative),
/* harmony export */   Crown: () => (/* binding */ Crown),
/* harmony export */   Doc: () => (/* binding */ Doc),
/* harmony export */   EditorEnhancementIcon: () => (/* binding */ EditorEnhancementIcon),
/* harmony export */   EditorOptionIcon: () => (/* binding */ EditorOptionIcon),
/* harmony export */   FBIcon: () => (/* binding */ FBIcon),
/* harmony export */   FrontisIcon: () => (/* binding */ FrontisIcon),
/* harmony export */   Grid: () => (/* binding */ Grid),
/* harmony export */   HomeIcon: () => (/* binding */ HomeIcon),
/* harmony export */   IntegrationsIcon: () => (/* binding */ IntegrationsIcon),
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   Logo: () => (/* binding */ Logo),
/* harmony export */   OptionsIcon: () => (/* binding */ OptionsIcon),
/* harmony export */   PerformanceIcon: () => (/* binding */ PerformanceIcon),
/* harmony export */   PricingIcon: () => (/* binding */ PricingIcon),
/* harmony export */   SiteVisibilityIcon: () => (/* binding */ SiteVisibilityIcon),
/* harmony export */   ThemeFontIcon: () => (/* binding */ ThemeFontIcon),
/* harmony export */   VersionControlIcon: () => (/* binding */ VersionControlIcon),
/* harmony export */   XIcon: () => (/* binding */ XIcon)
/* harmony export */ });
var FrontisIcon = function FrontisIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.618L19 8.309V15.691L12 19.382L5 15.691V8.309L12 4.618Z",
    fill: "currentColor"
  }));
};
var HomeIcon = function HomeIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M8.335 16.667c-3.143 0-4.714 0-5.69-.976-.977-.976-.977-2.548-.977-5.69 0-3.143 0-4.714.976-5.69.977-.977 2.548-.977 5.69-.977h3.334c3.143 0 4.714 0 5.69.976.977.977.977 2.548.977 5.69 0 3.143 0 4.715-.977 5.691-.976.976-2.547.976-5.69.976H8.335Z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M12.5 14.166h-5"
  }));
};
var BlockIcon = function BlockIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M2.082 5.417c0-1.571 0-2.357.488-2.845s1.274-.488 2.845-.488c1.572 0 2.357 0 2.846.488.488.488.488 1.274.488 2.845 0 1.572 0 2.357-.488 2.845-.489.489-1.274.489-2.846.489-1.571 0-2.357 0-2.845-.489-.488-.488-.488-1.273-.488-2.845ZM11.25 14.583c0-1.571 0-2.357.488-2.845s1.274-.488 2.845-.488c1.572 0 2.357 0 2.845.488.489.488.489 1.274.489 2.845 0 1.572 0 2.357-.489 2.845-.488.489-1.273.489-2.845.489-1.571 0-2.357 0-2.845-.489-.488-.488-.488-1.273-.488-2.845ZM2.082 14.583c0-1.571 0-2.357.488-2.845s1.274-.488 2.845-.488c1.572 0 2.357 0 2.846.488.488.488.488 1.274.488 2.845 0 1.572 0 2.357-.488 2.845-.489.489-1.274.489-2.846.489-1.571 0-2.357 0-2.845-.489-.488-.488-.488-1.273-.488-2.845ZM11.25 5.417c0-1.571 0-2.357.488-2.845s1.274-.488 2.845-.488c1.572 0 2.357 0 2.845.488.489.488.489 1.274.489 2.845 0 1.572 0 2.357-.489 2.845-.488.489-1.273.489-2.845.489-1.571 0-2.357 0-2.845-.489-.488-.488-.488-1.273-.488-2.845Z"
  }));
};
var OptionsIcon = function OptionsIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 10,
    r: 2.5,
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M11.473 1.793c-.307-.127-.695-.127-1.472-.127-.776 0-1.164 0-1.47.127-.41.169-.734.494-.903.902-.077.186-.107.403-.119.72a1.347 1.347 0 0 1-.659 1.127 1.347 1.347 0 0 1-1.305.006c-.28-.148-.483-.23-.683-.256a1.667 1.667 0 0 0-1.232.33c-.263.202-.457.538-.845 1.21-.389.673-.583 1.01-.626 1.338-.058.438.06.882.33 1.232.123.16.295.295.563.463.394.248.648.67.648 1.134 0 .465-.254.887-.648 1.134-.268.169-.44.303-.563.463-.27.351-.388.794-.33 1.232.043.33.237.665.626 1.338.388.672.582 1.009.845 1.21.35.27.794.389 1.232.33.2-.026.403-.108.683-.256a1.347 1.347 0 0 1 1.305.007c.403.232.642.663.659 1.127.012.317.042.533.12.72.168.408.493.733.901.902.307.127.695.127 1.471.127.777 0 1.165 0 1.472-.127.408-.17.732-.494.901-.902.078-.187.108-.403.12-.72.017-.464.255-.895.658-1.127a1.347 1.347 0 0 1 1.306-.007c.28.148.482.23.683.257.438.057.881-.061 1.232-.33.263-.202.457-.539.845-1.211.389-.673.583-1.009.626-1.338a1.667 1.667 0 0 0-.33-1.232c-.123-.16-.296-.294-.564-.463A1.348 1.348 0 0 1 16.303 10c0-.465.254-.886.647-1.134.268-.168.441-.303.564-.463.269-.35.388-.794.33-1.232-.043-.329-.238-.665-.626-1.337-.388-.673-.582-1.01-.845-1.21a1.667 1.667 0 0 0-1.232-.331c-.2.026-.403.108-.683.256a1.347 1.347 0 0 1-1.306-.006 1.347 1.347 0 0 1-.658-1.128c-.012-.316-.042-.533-.12-.72a1.666 1.666 0 0 0-.902-.901Z"
  }));
};
var IntegrationsIcon = function IntegrationsIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M1.668 5c0-1.572 0-2.358.488-2.846s1.274-.488 2.845-.488c1.572 0 2.357 0 2.845.488.489.488.489 1.274.489 2.845v1.667c0 1.571 0 2.357-.489 2.845C7.358 10 6.573 10 5.001 10c-1.571 0-2.357 0-2.845-.488s-.488-1.274-.488-2.845V4.999ZM1.668 15.834c0-.777 0-1.165.127-1.471.169-.409.493-.733.902-.902.306-.127.694-.127 1.471-.127h1.667c.776 0 1.164 0 1.47.127.41.169.734.493.903.902.127.306.127.694.127 1.471 0 .777 0 1.165-.127 1.471-.17.409-.494.733-.902.902-.307.127-.695.127-1.471.127H4.168c-.777 0-1.165 0-1.471-.127a1.667 1.667 0 0 1-.902-.902c-.127-.306-.127-.694-.127-1.471ZM11.668 13.333c0-1.571 0-2.357.488-2.845S13.43 10 15.001 10c1.572 0 2.357 0 2.845.488.489.488.489 1.274.489 2.845V15c0 1.571 0 2.357-.489 2.845-.488.488-1.273.488-2.845.488-1.571 0-2.357 0-2.845-.488s-.488-1.274-.488-2.845v-1.667ZM11.668 4.166c0-.777 0-1.165.127-1.471.169-.408.494-.733.902-.902.306-.127.694-.127 1.471-.127h1.667c.776 0 1.165 0 1.47.127.41.169.734.494.903.902.127.306.127.694.127 1.471 0 .777 0 1.165-.127 1.471-.17.409-.494.733-.902.902-.306.127-.695.127-1.471.127h-1.667c-.777 0-1.165 0-1.471-.127a1.667 1.667 0 0 1-.902-.902c-.127-.306-.127-.694-.127-1.471Z"
  }));
};
var Crown = function Crown() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#fff",
    strokeWidth: 1.5,
    d: "m19.687 13.25.184-1.949c.144-1.53.216-2.295-.046-2.611a.794.794 0 0 0-.54-.294c-.38-.034-.859.51-1.814 1.598-.495.563-.742.845-1.018.888a.738.738 0 0 1-.45-.072c-.254-.128-.424-.476-.763-1.171l-1.79-3.667C12.81 4.657 12.489 4 12 4s-.809.657-1.45 1.972L8.76 9.639c-.34.696-.51 1.043-.764 1.171a.738.738 0 0 1-.45.072c-.275-.043-.522-.325-1.017-.888-.955-1.088-1.433-1.632-1.814-1.598a.794.794 0 0 0-.54.294c-.262.316-.19 1.081-.046 2.611l.184 1.948c.302 3.21.453 4.815 1.4 5.783.945.968 2.363.968 5.2.968h2.175c2.836 0 4.254 0 5.2-.968.946-.968 1.097-2.573 1.4-5.783Z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M9.602 16.797h4.8"
  }));
};
var Logo = function Logo() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#0B0C0E",
    d: "m45.838 30.994 6.222 3.605a5.896 5.896 0 0 1 2.153 2.164c.516.898.788 1.917.788 2.955v3.818a5.933 5.933 0 0 1-.788 2.955 5.896 5.896 0 0 1-2.153 2.163l-6.222 3.605-9.198 5.332-6.234 3.617a5.858 5.858 0 0 1-5.881 0l-6.222-3.617V46.95l9.162 5.32 9.175-5.32 9.163-5.307-9.163-5.319-9.175-5.32 9.175-5.33 9.163-5.308-9.163-5.32-9.175-5.307-9.162-5.32L24.525.805a5.859 5.859 0 0 1 5.881 0l6.222 3.617L45.78 9.74l6.222 3.617a5.896 5.896 0 0 1 2.153 2.164c.516.898.788 1.917.788 2.955v3.806a5.934 5.934 0 0 1-.788 2.955 5.896 5.896 0 0 1-2.153 2.163l-6.163 3.594Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#399CFF",
    d: "m18.314 15.06-9.151 5.295v31.916l-6.21-3.605a5.895 5.895 0 0 1-2.16-2.161A5.933 5.933 0 0 1 0 43.547V18.453c0-1.038.272-2.057.788-2.955a5.896 5.896 0 0 1 2.153-2.163l3.27-1.892a5.86 5.86 0 0 1 5.88 0l6.223 3.617Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#399CFF",
    d: "m36.639 25.674-9.175 5.32-6.222 3.605a5.858 5.858 0 0 1-5.881 0l-6.246-3.605 9.163-5.308 6.234-3.617a5.86 5.86 0 0 1 5.881 0l6.246 3.605Z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#0B0C0E",
    d: "M175.899 62c-1.78 0-3.317-.255-4.61-.764-1.272-.53-2.236-1.231-2.893-2.101-.657-.87-.986-1.804-.986-2.802 0-.722.18-1.273.541-1.656.381-.403.943-.615 1.685-.636 0 1.889.54 3.321 1.621 4.298 1.103.976 2.682 1.464 4.738 1.464 1.929 0 3.423-.34 4.483-1.018 1.081-.701 1.621-1.688 1.621-2.961 0-.786-.191-1.433-.572-1.942-.382-.531-1.039-.977-1.971-1.338-.933-.382-2.247-.753-3.943-1.114-2.819-.573-4.833-1.348-6.041-2.324-1.187-.998-1.78-2.356-1.78-4.075 0-1.189.328-2.229.985-3.12.657-.892 1.59-1.571 2.798-2.038 1.23-.488 2.65-.732 4.261-.732 1.483 0 2.829.223 4.038.668 1.229.446 2.183 1.072 2.861 1.879.7.806 1.049 1.719 1.049 2.738 0 .573-.18 1.04-.54 1.4-.339.34-.859.52-1.558.542-.148-1.74-.721-3.014-1.717-3.82-.975-.829-2.374-1.242-4.197-1.242-1.738 0-3.084.318-4.038.955-.932.636-1.399 1.528-1.399 2.674 0 .785.17 1.433.509 1.942.36.51.954.945 1.78 1.305.827.361 1.982.701 3.466 1.02 2.141.445 3.826.955 5.055 1.528 1.251.573 2.141 1.262 2.671 2.069.551.806.827 1.815.827 3.025 0 1.91-.795 3.417-2.385 4.52C180.69 61.448 178.57 62 175.899 62ZM148.922 41.37c0-.701.222-1.242.668-1.624.466-.404 1.091-.605 1.875-.605v11.206l11.955-11.206c.657.594.986 1.103.986 1.528 0 .488-.276.987-.827 1.496l-7.885 7.418 9.92 11.78c-.191.191-.424.34-.699.446a1.638 1.638 0 0 1-.732.191c-.742 0-1.335-.265-1.78-.796l-8.521-10.029-2.417 2.26v6.4c0 1.443-.847 2.165-2.543 2.165V41.37ZM135.991 62c-1.76 0-3.328-.318-4.706-.955-1.357-.658-2.416-1.57-3.179-2.738-.764-1.168-1.145-2.494-1.145-3.98V46.75c0-1.486.381-2.802 1.145-3.948.763-1.146 1.822-2.038 3.179-2.674 1.357-.658 2.904-.987 4.642-.987 1.738 0 3.285.286 4.642.86 1.357.551 2.416 1.326 3.179 2.323.764.998 1.145 2.134 1.145 3.407 0 .573-.191 1.03-.572 1.369-.382.34-.901.51-1.558.51l-.382-.032c.043-.213.064-.584.064-1.115 0-.976-.276-1.846-.827-2.61-.551-.786-1.325-1.39-2.321-1.815-.975-.425-2.098-.637-3.37-.637-1.251 0-2.363.234-3.338.7-.975.446-1.739 1.072-2.29 1.879-.53.806-.794 1.73-.794 2.77v7.577c0 1.04.275 1.974.826 2.802.551.828 1.314 1.475 2.289 1.942.997.446 2.12.669 3.371.669 1.293 0 2.437-.213 3.433-.637.997-.425 1.77-1.019 2.321-1.783a4.422 4.422 0 0 0 .859-2.674c0-.361-.021-.733-.064-1.115l.35-.032c.657 0 1.176.191 1.558.573.403.383.604.892.604 1.529a5.232 5.232 0 0 1-1.145 3.31c-.763.977-1.833 1.741-3.211 2.293-1.378.53-2.946.796-4.705.796ZM114.188 62c-1.759 0-3.327-.35-4.705-1.05-1.357-.701-2.427-1.656-3.211-2.866-.764-1.231-1.145-2.6-1.145-4.107V47.1c0-1.507.381-2.865 1.145-4.075.763-1.21 1.822-2.154 3.179-2.834 1.378-.7 2.957-1.05 4.737-1.05 1.781 0 3.36.35 4.738 1.05 1.378.68 2.448 1.624 3.211 2.834.763 1.188 1.145 2.547 1.145 4.075v6.877c0 1.528-.382 2.897-1.145 4.107-.763 1.21-1.844 2.165-3.243 2.865-1.378.7-2.946 1.051-4.706 1.051Zm0-2.229c2.099 0 3.72-.52 4.865-1.56 1.166-1.06 1.749-2.483 1.749-4.266v-6.813c0-1.762-.573-3.163-1.717-4.203-1.145-1.04-2.777-1.56-4.897-1.56-2.077 0-3.698.52-4.864 1.56-1.145 1.04-1.717 2.441-1.717 4.203v6.813c0 1.783.572 3.205 1.717 4.266 1.166 1.04 2.787 1.56 4.864 1.56ZM91.17 61.714c-.361 0-.679-.128-.954-.383a1.259 1.259 0 0 1-.382-.923V41.37c0-1.486.848-2.228 2.543-2.228v20.312h10.175c.678 0 1.187.202 1.526.605.36.382.54.934.54 1.656H91.169ZM70.304 61.712c-.36 0-.668-.117-.922-.35a1.122 1.122 0 0 1-.382-.86V40.636c0-.34.127-.627.382-.86.254-.234.561-.35.922-.35h8.966c1.759 0 3.158.552 4.197 1.655 1.06 1.083 1.59 2.547 1.59 4.394 0 1.019-.276 1.984-.827 2.897-.552.892-1.251 1.539-2.099 1.942v.064c1.23.36 2.173.987 2.83 1.878.678.87 1.017 1.953 1.017 3.248 0 1.21-.254 2.292-.763 3.247a5.43 5.43 0 0 1-2.066 2.197c-.89.51-1.908.764-3.053.764h-9.792Zm8.902-12.257c.933 0 1.728-.382 2.385-1.146.678-.765 1.017-1.698 1.017-2.802 0-1.231-.307-2.186-.922-2.866-.594-.679-1.42-1.018-2.48-1.018h-7.694v7.832h7.694Zm.636 10.06c1.166 0 2.067-.35 2.703-1.05.657-.7.985-1.677.985-2.93 0-1.23-.328-2.185-.986-2.865-.635-.679-1.536-1.019-2.702-1.019h-8.33v7.864h8.33ZM175.817 28.454c-2.707 0-4.843-.445-6.408-1.334-1.567-.916-2.348-2.132-2.348-3.65 0-.68.291-1.255.875-1.726.61-.47 1.579-.706 2.906-.706.212 1.046.743 1.87 1.592 2.472.849.575 1.845.863 2.986.863 1.326 0 2.349-.157 3.065-.47.743-.315 1.115-.772 1.115-1.374 0-.523-.292-.98-.877-1.373-.583-.393-1.751-.798-3.502-1.217-2.043-.47-3.636-.941-4.777-1.412-1.115-.497-1.938-1.112-2.469-1.844-.531-.733-.795-1.7-.795-2.904 0-1.7.716-3.06 2.149-4.08 1.46-1.047 3.49-1.57 6.091-1.57 2.548 0 4.618.432 6.211 1.295 1.591.863 2.387 2.014 2.387 3.453 0 .732-.279 1.268-.835 1.608-.558.314-1.487.484-2.787.51-.344-.994-.875-1.726-1.593-2.197-.689-.497-1.685-.745-2.986-.745-.929 0-1.751.157-2.467.47-.717.314-1.075.694-1.075 1.138 0 .497.292.89.876 1.178.61.287 1.618.575 3.025.863 3.052.654 5.242 1.517 6.568 2.59 1.354 1.072 2.031 2.524 2.031 4.355a4.685 4.685 0 0 1-1.075 3.021c-.716.89-1.751 1.583-3.105 2.08-1.353.47-2.946.706-4.778.706ZM162.816 6.42c-.997 0-1.839-.29-2.521-.872-.657-.607-.984-1.387-.984-2.338 0-.951.327-1.717.984-2.298.682-.608 1.524-.912 2.521-.912.998 0 1.826.304 2.482.912.683.58 1.024 1.347 1.024 2.298 0 .951-.341 1.73-1.024 2.338-.656.582-1.484.872-2.482.872Zm-2.718 4.677c0-1.136.447-1.942 1.34-2.418.892-.502 2.244-.753 4.057-.753v17.358c0 1.136-.447 1.956-1.34 2.457-.893.476-2.245.714-4.057.714V11.097ZM153.536 28.454c-2.265 0-3.931-.641-4.997-1.924-1.066-1.283-1.599-2.933-1.599-4.95v-9.15h-4.237c0-1.336.253-2.332.76-2.986.506-.655 1.172-.982 1.998-.982h1.559V5.359c0-1.126.44-1.925 1.319-2.396.879-.497 2.211-.746 3.997-.746v6.245h5.316c0 1.414-.266 2.435-.799 3.064-.533.602-1.412.903-2.638.903h-1.799v8.955c0 .865.173 1.493.52 1.886.346.366.946.55 1.798.55.933 0 1.892-.262 2.879-.786.292.262.519.59.679.982.186.393.28.786.28 1.178 0 .524-.187 1.035-.56 1.532-.373.498-.945.917-1.719 1.257-.746.314-1.666.471-2.757.471ZM123.514 12.21c0-1.308.437-2.316 1.312-3.022s2.174-1.06 3.897-1.06v2.316a6.76 6.76 0 0 0-.994 1.334l.278.157c.796-1.203 1.803-2.132 3.023-2.786 1.246-.68 2.624-1.02 4.136-1.02 1.325 0 2.492.3 3.499.902a6.36 6.36 0 0 1 2.426 2.511c.583 1.047.875 2.224.875 3.532v10.24c0 1.126-.451 1.937-1.352 2.434-.902.47-2.267.706-4.096.706V15.898c0-.89-.292-1.635-.875-2.237-.557-.601-1.352-.902-2.386-.902-1.273 0-2.307.405-3.102 1.216-.796.811-1.193 1.831-1.193 3.06v8.28c0 1.125-.451 1.936-1.352 2.433-.875.47-2.241.706-4.096.706V12.21ZM112.443 28.454c-1.72 0-3.284-.314-4.691-.942-1.408-.628-2.515-1.49-3.323-2.59-.808-1.124-1.212-2.393-1.212-3.806v-5.218c0-1.439.391-2.747 1.173-3.924.782-1.203 1.876-2.145 3.284-2.825 1.407-.68 2.997-1.02 4.769-1.02 1.772 0 3.362.34 4.769 1.02 1.408.68 2.502 1.622 3.284 2.825a6.938 6.938 0 0 1 1.173 3.924v5.218c0 1.413-.404 2.682-1.212 3.806-.808 1.1-1.915 1.962-3.323 2.59-1.407.628-2.971.942-4.691.942Zm0-4.63c1.225 0 2.176-.275 2.854-.824.677-.55 1.016-1.308 1.016-2.276v-4.552c0-1.02-.352-1.844-1.055-2.471-.678-.628-1.616-.942-2.815-.942-1.199 0-2.15.314-2.854.942-.678.627-1.016 1.451-1.016 2.471v4.552c0 .968.338 1.727 1.016 2.276.678.55 1.629.824 2.854.824ZM98.98 12.759c-1.553 0-2.81.405-3.767 1.216-.959.811-1.438 1.831-1.438 3.06v8.28c0 1.125-.44 1.936-1.32 2.433-.855.47-2.189.706-4.002.706V12.21c0-1.308.427-2.316 1.282-3.022s2.124-1.06 3.807-1.06v2.316a6.734 6.734 0 0 0-.971 1.334l.272.157c1.631-2.537 3.664-3.806 6.099-3.806 1.165 0 2.046.314 2.641.941.596.628.894 1.426.894 2.394 0 .732-.194 1.373-.583 1.923-.725-.419-1.696-.628-2.913-.628ZM70.002 3.023c0-.74.278-1.36.835-1.862C71.42.633 72.123.37 72.945.37h18.093c0 1.743-.292 3.01-.875 3.803-.584.792-1.525 1.188-2.824 1.188H75.847v6.061h10.419c0 1.743-.292 3.01-.875 3.803-.583.792-1.525 1.188-2.823 1.188h-6.72v8.042c0 1.4-.465 2.416-1.392 3.05-.902.634-2.386.95-4.454.95V3.024Z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h55v62H0z"
  }))));
};
var Doc = function Doc() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13 10V8.25A2.25 2.25 0 0 0 10.75 6h-1A.75.75 0 0 1 9 5.25v-1A2.25 2.25 0 0 0 6.75 2H5.5M7 2H3.75a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V8a6 6 0 0 0-6-6Z"
  }));
};
var Link = function Link() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.794 6.292a3 3 0 0 1 .828 4.829l-3 3A3 3 0 1 1 2.378 9.88L3.55 8.707m8.9-.414 1.171-1.172A3 3 0 1 0 9.38 2.88l-3 3a3 3 0 0 0 .827 4.829"
  }));
};
var Grid = function Grid() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M2.084 5.417c0-1.571 0-2.357.488-2.845s1.274-.488 2.845-.488c1.572 0 2.357 0 2.845.488.489.488.489 1.274.489 2.845 0 1.572 0 2.357-.489 2.845-.488.489-1.273.489-2.845.489-1.571 0-2.357 0-2.845-.489-.488-.488-.488-1.273-.488-2.845ZM11.25 14.583c0-1.571 0-2.357.488-2.845s1.274-.488 2.845-.488c1.572 0 2.357 0 2.845.488.489.488.489 1.274.489 2.845 0 1.572 0 2.357-.489 2.845-.488.489-1.273.489-2.845.489-1.571 0-2.357 0-2.845-.489-.488-.488-.488-1.273-.488-2.845ZM2.084 14.583c0-1.571 0-2.357.488-2.845s1.274-.488 2.845-.488c1.572 0 2.357 0 2.845.488.489.488.489 1.274.489 2.845 0 1.572 0 2.357-.489 2.845-.488.489-1.273.489-2.845.489-1.571 0-2.357 0-2.845-.489-.488-.488-.488-1.273-.488-2.845ZM11.25 5.417c0-1.571 0-2.357.488-2.845s1.274-.488 2.845-.488c1.572 0 2.357 0 2.845.488.489.488.489 1.274.489 2.845 0 1.572 0 2.357-.489 2.845-.488.489-1.273.489-2.845.489-1.571 0-2.357 0-2.845-.489-.488-.488-.488-1.273-.488-2.845Z"
  }));
};
var PricingIcon = function PricingIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M2.888 17.112c1.22 1.22 3.185 1.22 7.113 1.22 3.929 0 5.893 0 7.113-1.22 1.22-1.22 1.22-3.184 1.22-7.113 0-3.928 0-5.892-1.22-7.113M2.888 17.112c-1.22-1.22-1.22-3.184-1.22-7.113 0-3.928 0-5.892 1.22-7.113 1.22-1.22 3.185-1.22 7.113-1.22 3.929 0 5.893 0 7.113 1.22M2.888 17.112 17.114 2.886"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0z"
  }))));
};
var CheckIcon = function CheckIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#4CAF50",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.6,
    d: "m4 10.858 3.429 3.428L16 5.715"
  }));
};
var XIcon = function XIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#E43242",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "m14 6-8 8m0-8 8 8"
  }));
};
var All = function All() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M3.125 5c0-1.036.84-1.875 1.875-1.875h1.875c1.036 0 1.875.84 1.875 1.875v1.875c0 1.036-.84 1.875-1.875 1.875H5a1.875 1.875 0 0 1-1.875-1.875V5ZM3.125 13.125c0-1.036.84-1.875 1.875-1.875h1.875c1.036 0 1.875.84 1.875 1.875V15c0 1.035-.84 1.875-1.875 1.875H5A1.875 1.875 0 0 1 3.125 15v-1.875ZM11.25 5c0-1.036.84-1.875 1.875-1.875H15c1.035 0 1.875.84 1.875 1.875v1.875c0 1.036-.84 1.875-1.875 1.875h-1.875a1.875 1.875 0 0 1-1.875-1.875V5ZM11.25 13.125c0-1.036.84-1.875 1.875-1.875H15c1.035 0 1.875.84 1.875 1.875V15c0 1.035-.84 1.875-1.875 1.875h-1.875A1.875 1.875 0 0 1 11.25 15v-1.875Z"
  }));
};
var Content = function Content() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9.166 17.5h-.833c-3.143 0-4.714 0-5.69-.977-.977-.976-.977-2.548-.977-5.69v-2.5c0-3.143 0-4.714.976-5.69.977-.977 2.548-.977 5.69-.977H10c3.143 0 4.714 0 5.69.976.977.977.977 2.548.977 5.69v.417M14.505 12.002a.531.531 0 0 1 .989 0l.03.078a4.25 4.25 0 0 0 2.395 2.395l.077.03a.531.531 0 0 1 0 .989l-.077.03a4.25 4.25 0 0 0-2.395 2.395l-.03.077a.531.531 0 0 1-.989 0l-.03-.077a4.25 4.25 0 0 0-2.395-2.395l-.078-.03a.531.531 0 0 1 0-.989l.078-.03a4.25 4.25 0 0 0 2.395-2.395l.03-.078ZM5.834 5.834h6.667m-6.667 3.75h6.667m-6.667 3.75h3.333"
  }));
};
var Creative = function Creative() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M5.075 12.499a5.716 5.716 0 0 1-.491-2.329c0-3.086 2.425-5.588 5.417-5.588 2.991 0 5.416 2.502 5.416 5.588 0 .831-.175 1.62-.49 2.329"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M10 1.666v.833M18.333 10H17.5M2.5 10h-.834M15.892 4.107l-.59.59M4.697 4.697l-.59-.59M12.097 16.087c.842-.272 1.18-1.043 1.275-1.818.028-.231-.163-.423-.396-.423H7.063a.402.402 0 0 0-.406.444c.093.774.328 1.34 1.22 1.797m4.22 0h-4.22m4.22 0c-.101 1.621-.57 2.263-2.092 2.245-1.628.03-2.003-.763-2.128-2.245"
  }));
};
var FBIcon = function FBIcon() {
  return /*#__PURE__*/React.createElement("svg", {
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
  }));
};
var EditorOptionIcon = function EditorOptionIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 2,
    d: "M6.25 11a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5ZM17.75 22.5a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5ZM6.25 22.5a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m20.868 2.94.692.692a1.5 1.5 0 0 1 0 2.121l-3.627 3.696a2 2 0 0 1-1.047.552l-2.248.488a.5.5 0 0 1-.595-.594l.478-2.235a2 2 0 0 1 .552-1.047l3.674-3.674a1.5 1.5 0 0 1 2.12 0Z"
  }));
};
var AssetGenerationIcon = function AssetGenerationIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.5 6h-11C5.787 6 3 8.685 3 12.5M3.5 19h11c3.713 0 6.5-2.685 6.5-6.5"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18.5 3.5S21 5.341 21 6s-2.5 2.5-2.5 2.5M5.5 16.5S3 18.341 3 19s2.5 2.5 2.5 2.5"
  }));
};
var EditorEnhancementIcon = function EditorEnhancementIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m16.425 5.105.99-.99a2.1 2.1 0 0 1 2.97 2.97l-.99.99m-2.97-2.97-6.66 6.66a3.96 3.96 0 0 0-1.041 1.84L8 16.5l2.896-.724a3.96 3.96 0 0 0 1.84-1.042l6.659-6.659m-2.97-2.97 2.97 2.97"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 14c0 3.288 0 4.931-.908 6.038a3.996 3.996 0 0 1-.554.554c-1.107.908-2.75.908-6.038.908H11c-3.771 0-5.657 0-6.828-1.172C3 19.157 3 17.271 3 13.5V13c0-3.287 0-4.931.908-6.038.166-.202.352-.388.554-.554C5.57 5.5 7.212 5.5 10.5 5.5"
  }));
};
var VersionControlIcon = function VersionControlIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m8.643 3.646-1.705.788C4.313 5.647 3 6.254 3 7.25c0 .996 1.313 1.603 3.938 2.816l1.705.788C10.295 11.618 11.121 12 12 12s1.705-.382 3.357-1.146l1.705-.788C19.687 8.853 21 8.246 21 7.25c0-.996-1.313-1.603-3.938-2.816l-1.705-.788C13.705 2.882 12.879 2.5 12 2.5s-1.705.382-3.357 1.146Z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.788 11.598c.141.198.212.406.212.633 0 .982-1.313 1.58-3.938 2.777l-1.705.777c-1.652.752-2.478 1.129-3.357 1.129s-1.705-.377-3.357-1.13l-1.705-.776C4.313 13.81 3 13.213 3 12.23c0-.227.07-.435.212-.633"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.377 16.766c.415.33.623.66.623 1.051 0 .982-1.313 1.58-3.938 2.776l-1.705.777c-1.652.753-2.478 1.13-3.357 1.13s-1.705-.377-3.357-1.13l-1.705-.777C4.313 19.397 3 18.8 3 17.817c0-.39.208-.72.623-1.051"
  }));
};
var PerformanceIcon = function PerformanceIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m6.194 11.896 5.998-8.084c.47-.632 1.348-.239 1.348.603v6.258c0 .505.345.913.77.913h2.918c.663 0 1.016.927.578 1.518l-5.998 8.084c-.47.632-1.348.239-1.348-.603v-6.258c0-.505-.345-.913-.77-.913H6.771c-.663 0-1.016-.927-.578-1.518Z"
  }));
};
var SiteVisibilityIcon = function SiteVisibilityIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M2.5 8.687c.104-2.1.415-3.41 1.347-4.34.93-.932 2.24-1.243 4.34-1.347M21.5 8.687c-.104-2.1-.415-3.41-1.347-4.34-.93-.932-2.24-1.243-4.34-1.347m0 19c2.1-.104 3.41-.415 4.34-1.347.932-.93 1.243-2.24 1.347-4.34M8.187 22c-2.1-.104-3.41-.415-4.34-1.347-.932-.93-1.243-2.24-1.347-4.34"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 2,
    d: "M19.635 11.818c.243.304.365.457.365.682 0 .225-.122.378-.365.682C18.542 14.55 15.751 17.5 12 17.5s-6.542-2.95-7.635-4.318C4.122 12.878 4 12.725 4 12.5c0-.225.122-.378.365-.682C5.458 10.45 8.249 7.5 12 7.5s6.542 2.95 7.635 4.318Z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 2,
    d: "M14 12.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
  }));
};
var ThemeFontIcon = function ThemeFontIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6.999 10c-.24-1.995.916-2.403 5-2.5m0 0c4.123.1 5.341.598 5 2.5m-5-2.5v10m-2 0h4"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3.891 4.391C2.5 5.782 2.5 8.021 2.5 12.5c0 4.478 0 6.718 1.391 8.109S7.521 22 12 22c4.478 0 6.718 0 8.109-1.391C21.5 19.217 21.5 16.979 21.5 12.5c0-4.478 0-6.718-1.391-8.109C18.717 3 16.479 3 12 3 7.522 3 5.282 3 3.891 4.391Z"
  }));
};

/***/ }),

/***/ "./assets/css/switch.css":
/*!*******************************!*\
  !*** ./assets/css/switch.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./admin/scss/admin.scss":
/*!*******************************!*\
  !*** ./admin/scss/admin.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/rc-switch/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-switch/es/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "./node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");




var _excluded = ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"];




var Switch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.forwardRef(function (_ref, ref) {
  var _classNames;
  var _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-switch' : _ref$prefixCls,
    className = _ref.className,
    checked = _ref.checked,
    defaultChecked = _ref.defaultChecked,
    disabled = _ref.disabled,
    loadingIcon = _ref.loadingIcon,
    checkedChildren = _ref.checkedChildren,
    unCheckedChildren = _ref.unCheckedChildren,
    onClick = _ref.onClick,
    onChange = _ref.onChange,
    onKeyDown = _ref.onKeyDown,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);
  var _useMergedState = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_6__["default"])(false, {
      value: checked,
      defaultValue: defaultChecked
    }),
    _useMergedState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMergedState, 2),
    innerChecked = _useMergedState2[0],
    setInnerChecked = _useMergedState2[1];
  function triggerChange(newChecked, event) {
    var mergedChecked = innerChecked;
    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
    }
    return mergedChecked;
  }
  function onInternalKeyDown(e) {
    if (e.which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].LEFT) {
      triggerChange(false, e);
    } else if (e.which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].RIGHT) {
      triggerChange(true, e);
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  }
  function onInternalClick(e) {
    var ret = triggerChange(!innerChecked, e);
    // [Legacy] trigger onClick with value
    onClick === null || onClick === void 0 ? void 0 : onClick(ret, e);
  }
  var switchClassName = classnames__WEBPACK_IMPORTED_MODULE_5___default()(prefixCls, className, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-checked"), innerChecked), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("button", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
    type: "button",
    role: "switch",
    "aria-checked": innerChecked,
    disabled: disabled,
    className: switchClassName,
    ref: ref,
    onKeyDown: onInternalKeyDown,
    onClick: onInternalClick
  }), loadingIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "".concat(prefixCls, "-inner")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "".concat(prefixCls, "-inner-checked")
  }, checkedChildren), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "".concat(prefixCls, "-inner-unchecked")
  }, unCheckedChildren)));
});
Switch.displayName = 'Switch';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Switch);

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/canUseDom.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/canUseDom.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ canUseDom)
/* harmony export */ });
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),

/***/ "./node_modules/rc-util/es/KeyCode.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/KeyCode.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey ||
    // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }

    // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }

    // Safari sends zero key code for non-latin characters.
    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyCode);

/***/ }),

/***/ "./node_modules/rc-util/es/hooks/useEvent.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useEvent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useEvent(callback) {
  var fnRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  fnRef.current = callback;
  var memoFn = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

/***/ }),

/***/ "./node_modules/rc-util/es/hooks/useLayoutEffect.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useLayoutEffect.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useLayoutUpdateEffect: () => (/* binding */ useLayoutUpdateEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");



/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
var useInternalLayoutEffect =  true && (0,_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
var useLayoutEffect = function useLayoutEffect(callback, deps) {
  var firstMountRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  useInternalLayoutEffect(function () {
    return callback(firstMountRef.current);
  }, deps);

  // We tell react that first mount has passed
  useInternalLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  useLayoutEffect(function (firstMount) {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLayoutEffect);

/***/ }),

/***/ "./node_modules/rc-util/es/hooks/useMergedState.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useMergedState.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMergedState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _useEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEvent */ "./node_modules/rc-util/es/hooks/useEvent.js");
/* harmony import */ var _useLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useLayoutEffect */ "./node_modules/rc-util/es/hooks/useLayoutEffect.js");
/* harmony import */ var _useState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useState */ "./node_modules/rc-util/es/hooks/useState.js");




/** We only think `undefined` is empty */
function hasValue(value) {
  return value !== undefined;
}

/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;

  // ======================= Init =======================
  var _useState = (0,_useState__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
      }
    }),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    innerValue = _useState2[0],
    setInnerValue = _useState2[1];
  var mergedValue = value !== undefined ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;

  // ====================== Change ======================
  var onChangeFn = (0,_useEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(onChange);
  var _useState3 = (0,_useState__WEBPACK_IMPORTED_MODULE_3__["default"])([mergedValue]),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    prevValue = _useState4[0],
    setPrevValue = _useState4[1];
  (0,_useLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.useLayoutUpdateEffect)(function () {
    var prev = prevValue[0];
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev);
    }
  }, [prevValue]);

  // Sync value back to `undefined` when it from control to un-control
  (0,_useLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.useLayoutUpdateEffect)(function () {
    if (!hasValue(value)) {
      setInnerValue(value);
    }
  }, [value]);

  // ====================== Update ======================
  var triggerChange = (0,_useEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(function (updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}

/***/ }),

/***/ "./node_modules/rc-util/es/hooks/useState.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useState.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useSafeState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */
function useSafeState(defaultValue) {
  var destroyRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(defaultValue),
    _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
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

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./admin/index.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./admin/App.js");
/* harmony import */ var _scss_admin_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/admin.scss */ "./admin/scss/admin.scss");




var FrontisBlocksAdmin = function FrontisBlocksAdmin() {
  return /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
var root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById('frontis-blocks-admin'));
root.render(/*#__PURE__*/React.createElement(FrontisBlocksAdmin, null));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map