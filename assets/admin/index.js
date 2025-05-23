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
/* harmony import */ var _assets_css_backend_switch_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/css/backend/switch.css */ "./assets/css/backend/switch.css");
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
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.875 13.875L16.5 16.5",
    stroke: "#6A758E",
    strokeWidth: "1.5",
    strokeLinecap: "round"
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
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./admin/icons/index.js");



var Dashboard = function Dashboard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard-left"
  }, /*#__PURE__*/React.createElement(_DashboardComponents__WEBPACK_IMPORTED_MODULE_1__.VideoBanner, null)), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard-right"
  }, /*#__PURE__*/React.createElement(_DashboardComponents__WEBPACK_IMPORTED_MODULE_1__.SystemRequirements, null), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard-right-bottom"
  }, /*#__PURE__*/React.createElement(_DashboardComponents__WEBPACK_IMPORTED_MODULE_1__.IconCard, {
    title: "Missing Any Feature?",
    desc: "We\u2019re continually working to enhance Frontis Blocks for your benefit. If you have any suggestions for features that could improve your experience or ideas for new blocks, we\u2019d love to hear from you!",
    btnText: "Request Feature",
    btnLink: "https://wordpress.org/plugins/frontis-blocks/"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard-icon-card-area"
  }, /*#__PURE__*/React.createElement(_DashboardComponents__WEBPACK_IMPORTED_MODULE_1__.IconCard, {
    icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.DocumentationIcon, null),
    title: "Documentation",
    desc: "Documentation provides a comprehensive guide that explains the structure and functionality.",
    btnText: "Read More",
    btnLink: "https://wordpress.org/plugins/frontis-blocks/",
    btnIcon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowRightIcon, null)
  }), /*#__PURE__*/React.createElement(_DashboardComponents__WEBPACK_IMPORTED_MODULE_1__.IconCard, {
    icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.RateIcon, null),
    title: "Rate Us",
    desc: "Frontis allows users to provide feedback on their experience with the site or its services.",
    btnText: "Read More",
    btnLink: "https://wordpress.org/support/plugin/frontis-blocks/reviews/",
    btnIcon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowRightIcon, null)
  }), /*#__PURE__*/React.createElement(_DashboardComponents__WEBPACK_IMPORTED_MODULE_1__.IconCard, {
    icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.CommunityIcon, null),
    title: "Join The Community",
    desc: "Frontis invites users to become part of an engaged and interactive group.",
    btnText: "Read More",
    btnLink: "https://discord.gg/wEVmDvRbad",
    btnIcon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowRightIcon, null)
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-dashboard-cta-area"
  }, /*#__PURE__*/React.createElement(_DashboardComponents__WEBPACK_IMPORTED_MODULE_1__.CallToAction, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./admin/components/DashboardComponents/CallToAction.js":
/*!**************************************************************!*\
  !*** ./admin/components/DashboardComponents/CallToAction.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons */ "./admin/icons/index.js");


function CallToAction() {
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-dashboard-cta-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-dashboard-cta-card-left"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.CtaIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: "fb-cta-card-content"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Get 24/7 Fastest Support', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("The Frontis Block is a modern content creation tool designed for WordPress for a demographic", 'frontis-blocks')))), /*#__PURE__*/React.createElement("div", {
    className: "fb-dashboard-cta-card-right"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wordpress.org/plugins/frontis-blocks/",
    className: "fb-cat-button bg-white",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Knowledge Base ", /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.DocLinkIcon, null)), /*#__PURE__*/React.createElement("a", {
    href: "https://wordpress.org/support/plugin/frontis-blocks/",
    className: "fb-cat-button",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Get Support ", /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.DocLinkIcon, null))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallToAction);

/***/ }),

/***/ "./admin/components/DashboardComponents/IconCard.js":
/*!**********************************************************!*\
  !*** ./admin/components/DashboardComponents/IconCard.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

function IconCard(_ref) {
  var icon = _ref.icon,
    title = _ref.title,
    desc = _ref.desc,
    btnText = _ref.btnText,
    btnLink = _ref.btnLink,
    btnIcon = _ref.btnIcon;
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-dashboard-icon-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-icon-card-title-flex"
  }, icon && /*#__PURE__*/React.createElement("span", null, icon), /*#__PURE__*/React.createElement("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(title, 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-icon-card-content-flex"
  }, /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(desc, 'frontis-blocks')), btnText && /*#__PURE__*/React.createElement("a", {
    href: btnLink ? btnLink : '#',
    className: "fb-icon-card-button",
    target: "_blank",
    rel: "noopener noreferrer"
  }, btnText ? btnText : 'Read more', btnIcon && /*#__PURE__*/React.createElement("span", null, btnIcon))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCard);

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
    className: "fb-video-wrapper"
  }, /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "100%",
    src: "https://www.youtube.com/embed/8U0K_wMcUPg?si=xneqJlJjVI-8sWod",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })), /*#__PURE__*/React.createElement("div", {
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
/* harmony export */   CallToAction: () => (/* reexport safe */ _CallToAction__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   IconCard: () => (/* reexport safe */ _IconCard__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   ProBanner: () => (/* reexport safe */ _ProBanner__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   SystemRequirements: () => (/* reexport safe */ _SystemRequirements__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   VideoBanner: () => (/* reexport safe */ _VideoBanner__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _ProBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProBanner */ "./admin/components/DashboardComponents/ProBanner.js");
/* harmony import */ var _SystemRequirements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemRequirements */ "./admin/components/DashboardComponents/SystemRequirements.js");
/* harmony import */ var _VideoBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoBanner */ "./admin/components/DashboardComponents/VideoBanner.js");
/* harmony import */ var _IconCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconCard */ "./admin/components/DashboardComponents/IconCard.js");
/* harmony import */ var _CallToAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CallToAction */ "./admin/components/DashboardComponents/CallToAction.js");






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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_ConfirmationModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ConfirmationModal */ "./admin/components/common/ConfirmationModal.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
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
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)({
      file_generation: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isModalOpen = _useState4[0],
    setIsModalOpen = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var _window$frontisBlocks = window.frontisBlocksAdmin,
    nonce = _window$frontisBlocks.nonce,
    ajaxUrl = _window$frontisBlocks.ajaxUrl;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
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
  var handleAssetGeneration = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    setIsModalOpen(true);
  }, []);
  var confirmAssetGeneration = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    setIsLoading(true); // Start loading
    setIsModalOpen(false);
    window.jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_generate_assets',
        security: nonce
      },
      success: function success(response) {
        setIsLoading(false);
        if (response.success) {
          setIsLoading(false); // Stop loading
          react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(response.data.message, 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        } else {
          var _response$data4;
          setIsLoading(false); // Stop loading
          react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to regenerate files: ".concat(((_response$data4 = response.data) === null || _response$data4 === void 0 ? void 0 : _response$data4.message) || 'Unknown error'), 'frontis-blocks'), {
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
        setIsLoading(false); // Stop loading
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed to regenerate files: ".concat(status, " - ").concat(_error3), 'frontis-blocks'), {
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
  var closeModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
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
    className: "fb-option-input ".concat(isLoading ? 'fb-assets-generation-button-wrapper' : '')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "fb-button-primary ".concat(isLoading ? 'fb-assets-generation-button' : ''),
    onClick: handleAssetGeneration,
    disabled: isLoading
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Regenerate Asset', 'frontis-blocks')), isLoading && /*#__PURE__*/React.createElement("span", {
    className: "fb-loading-spinner"
  }))), /*#__PURE__*/React.createElement(_common_ConfirmationModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons */ "./admin/icons/index.js");
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
    className: "fb-blocks-tab-panel-header-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-tab-panel-logo"
  }, /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.Logo, null)), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-tab-list"
  }, tabs.map(function (tab) {
    return /*#__PURE__*/React.createElement("button", {
      key: tab.name,
      className: "fb-blocks-tab-button ".concat(initialTabName === tab.name ? "".concat(activeClass, " fb-blocks-active-tab") : ''),
      onClick: function onClick() {
        return handleTabChange(tab.name);
      }
    }, tab.icon, /*#__PURE__*/React.createElement("span", null, tab.title));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-version"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-version-icon"
  }, /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.VersionIcon, null)), " Free version: ", /*#__PURE__*/React.createElement("span", {
    className: "fb-version"
  }, version))), /*#__PURE__*/React.createElement("div", {
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
/* harmony export */   ArrowRightIcon: () => (/* binding */ ArrowRightIcon),
/* harmony export */   AssetGenerationIcon: () => (/* binding */ AssetGenerationIcon),
/* harmony export */   BlockIcon: () => (/* binding */ BlockIcon),
/* harmony export */   CheckIcon: () => (/* binding */ CheckIcon),
/* harmony export */   CommunityIcon: () => (/* binding */ CommunityIcon),
/* harmony export */   Content: () => (/* binding */ Content),
/* harmony export */   Creative: () => (/* binding */ Creative),
/* harmony export */   Crown: () => (/* binding */ Crown),
/* harmony export */   CtaIcon: () => (/* binding */ CtaIcon),
/* harmony export */   Doc: () => (/* binding */ Doc),
/* harmony export */   DocLinkIcon: () => (/* binding */ DocLinkIcon),
/* harmony export */   DocumentationIcon: () => (/* binding */ DocumentationIcon),
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
/* harmony export */   RateIcon: () => (/* binding */ RateIcon),
/* harmony export */   SiteVisibilityIcon: () => (/* binding */ SiteVisibilityIcon),
/* harmony export */   ThemeFontIcon: () => (/* binding */ ThemeFontIcon),
/* harmony export */   VersionControlIcon: () => (/* binding */ VersionControlIcon),
/* harmony export */   VersionIcon: () => (/* binding */ VersionIcon),
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
    width: "143",
    height: "48",
    viewBox: "0 0 143 48",
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    "clip-path": "url(#clip0_5725_6336)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M35.4765 23.992L40.2921 26.783C40.984 27.1845 41.5586 27.7621 41.9581 28.4576C42.3575 29.1531 42.5678 29.9421 42.5679 30.7453V33.701C42.5678 34.5041 42.3575 35.2931 41.9581 35.9886C41.5586 36.6841 40.984 37.2617 40.2921 37.6633L35.4765 40.4543L28.3578 44.5813L23.5332 47.3814C22.8413 47.783 22.0564 47.9944 21.2574 47.9944C20.4584 47.9944 19.6735 47.783 18.9816 47.3814L14.166 44.5813V36.3456L21.2574 40.4634L28.3578 36.3456L35.4492 32.2369L28.3578 28.119L21.2574 24.0011L28.3578 19.8741L35.4492 15.7654L28.3578 11.6475L21.2574 7.5388L14.166 3.42093L18.9816 0.620789C19.6735 0.219214 20.4584 0.0078125 21.2574 0.0078125C22.0564 0.0078125 22.8413 0.219214 23.5332 0.620789L28.3487 3.42093L35.431 7.5388L40.2466 10.3389C40.9385 10.7405 41.5131 11.3181 41.9126 12.0136C42.312 12.7091 42.5223 13.4981 42.5224 14.3013V17.2478C42.5223 18.051 42.312 18.8399 41.9126 19.5354C41.5131 20.231 40.9385 20.8085 40.2466 21.2101L35.4765 23.992Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.1736 11.6573L7.09137 15.7568V40.464L2.28487 37.673C1.59127 37.2726 1.01489 36.6955 0.613758 35.9999C0.21263 35.3043 0.000941756 34.5147 0 33.7107V14.2836C2.02965e-05 13.4804 0.210329 12.6914 0.609813 11.9959C1.0093 11.3004 1.58388 10.7228 2.27579 10.3213L4.80647 8.85712C5.4984 8.45554 6.28329 8.24414 7.08226 8.24414C7.88123 8.24414 8.66612 8.45554 9.35805 8.85712L14.1736 11.6573Z",
    fill: "#3991FF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28.3561 19.8747L21.2556 23.9926L16.44 26.7835C15.7481 27.1851 14.9632 27.3965 14.1643 27.3965C13.3653 27.3965 12.5804 27.1851 11.8885 26.7835L7.05469 23.9926L14.1461 19.8839L18.9707 17.0837C19.6627 16.6821 20.4475 16.4707 21.2465 16.4707C22.0455 16.4707 22.8304 16.6821 23.5223 17.0837L28.3561 19.8747Z",
    fill: "#3991FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M136.133 48.0008C134.755 48.0008 133.565 47.8037 132.565 47.4093C131.58 46.9986 130.834 46.4563 130.325 45.7827C129.817 45.109 129.562 44.386 129.562 43.6138C129.562 43.0551 129.702 42.6279 129.981 42.3322C130.276 42.02 130.711 41.8557 131.285 41.8392C131.285 43.3016 131.703 44.4107 132.54 45.1665C133.393 45.9223 134.615 46.3002 136.206 46.3002C137.699 46.3002 138.856 46.0373 139.676 45.5116C140.513 44.9693 140.931 44.2053 140.931 43.2194C140.931 42.6115 140.783 42.1103 140.488 41.716C140.193 41.3052 139.684 40.9602 138.962 40.6808C138.241 40.3851 137.223 40.0975 135.911 39.8182C133.729 39.3746 132.171 38.7749 131.236 38.019C130.317 37.2468 129.858 36.1952 129.858 34.8643C129.858 33.9441 130.112 33.139 130.621 32.4489C131.129 31.7588 131.851 31.233 132.786 30.8716C133.737 30.4936 134.837 30.3047 136.083 30.3047C137.232 30.3047 138.273 30.4772 139.208 30.8223C140.16 31.1673 140.898 31.652 141.423 32.2764C141.964 32.9008 142.235 33.6073 142.235 34.396C142.235 34.8396 142.096 35.2011 141.817 35.4804C141.554 35.7433 141.152 35.883 140.611 35.8994C140.496 34.5521 140.053 33.5662 139.282 32.9419C138.528 32.3011 137.445 31.9806 136.034 31.9806C134.689 31.9806 133.647 32.2271 132.909 32.72C132.187 33.213 131.826 33.9031 131.826 34.7903C131.826 35.3983 131.958 35.8994 132.22 36.2938C132.499 36.6881 132.958 37.025 133.598 37.3043C134.238 37.5836 135.132 37.8465 136.28 38.093C137.937 38.438 139.241 38.8324 140.193 39.276C141.161 39.7196 141.85 40.2536 142.26 40.878C142.686 41.5024 142.899 42.2829 142.899 43.2194C142.899 44.6982 142.284 45.8648 141.054 46.7192C139.84 47.5736 138.2 48.0008 136.133 48.0008Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M115.252 32.0299C115.252 31.4877 115.424 31.0687 115.769 30.773C116.13 30.4608 116.614 30.3047 117.221 30.3047V38.9802L126.473 30.3047C126.981 30.7648 127.236 31.1591 127.236 31.4877C127.236 31.8656 127.022 32.2518 126.596 32.6461L120.493 38.3887L128.171 47.5079C128.023 47.6558 127.842 47.7708 127.629 47.853C127.432 47.9516 127.244 48.0008 127.063 48.0008C126.489 48.0008 126.03 47.7955 125.685 47.3847L119.091 39.621L117.221 41.3709V46.3249C117.221 47.4422 116.564 48.0008 115.252 48.0008V32.0299Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M105.242 48.0008C103.881 48.0008 102.667 47.7544 101.6 47.2615C100.551 46.7521 99.7303 46.0456 99.1398 45.1419C98.5492 44.2382 98.2539 43.2112 98.2539 42.0611V36.1952C98.2539 35.045 98.5492 34.0263 99.1398 33.139C99.7303 32.2518 100.551 31.5617 101.6 31.0687C102.65 30.5594 103.848 30.3047 105.193 30.3047C106.538 30.3047 107.736 30.5265 108.786 30.9701C109.836 31.3973 110.656 31.9971 111.246 32.7693C111.837 33.5416 112.132 34.4206 112.132 35.4065C112.132 35.8501 111.985 36.2034 111.689 36.4663C111.394 36.7292 110.992 36.8606 110.484 36.8606L110.188 36.836C110.221 36.6717 110.237 36.3841 110.237 35.9734C110.237 35.2175 110.024 34.5439 109.598 33.9524C109.171 33.3444 108.572 32.8761 107.801 32.5475C107.047 32.2189 106.177 32.0546 105.193 32.0546C104.225 32.0546 103.364 32.2353 102.609 32.5968C101.855 32.9419 101.264 33.4266 100.838 34.0509C100.428 34.6753 100.222 35.3901 100.222 36.1952V42.0611C100.222 42.8662 100.436 43.5891 100.862 44.2299C101.289 44.8707 101.879 45.3719 102.634 45.7334C103.405 46.0784 104.274 46.2509 105.242 46.2509C106.243 46.2509 107.129 46.0866 107.9 45.758C108.671 45.4294 109.27 44.9693 109.696 44.3778C110.139 43.7699 110.361 43.0798 110.361 42.3075C110.361 42.0282 110.344 41.7406 110.311 41.4449L110.582 41.4202C111.091 41.4202 111.492 41.5681 111.788 41.8639C112.099 42.1596 112.255 42.554 112.255 43.0469C112.255 43.9999 111.96 44.8543 111.369 45.6101C110.779 46.366 109.95 46.9575 108.884 47.3847C107.818 47.7955 106.604 48.0008 105.242 48.0008Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88.3723 48.0008C87.0108 48.0008 85.7968 47.7297 84.7305 47.1875C83.6806 46.6453 82.8522 45.9059 82.2452 44.9693C81.6547 44.0163 81.3594 42.9565 81.3594 41.7899V36.4663C81.3594 35.2997 81.6547 34.2481 82.2452 33.3116C82.8358 32.375 83.656 31.6438 84.7059 31.118C85.7722 30.5758 86.9944 30.3047 88.3723 30.3047C89.7503 30.3047 90.9725 30.5758 92.0388 31.118C93.1051 31.6438 93.9335 32.375 94.5241 33.3116C95.1146 34.2317 95.4099 35.2833 95.4099 36.4663V41.7899C95.4099 42.973 95.1146 44.0328 94.5241 44.9693C93.9335 45.9059 93.0969 46.6453 92.0142 47.1875C90.9479 47.7297 89.7339 48.0008 88.3723 48.0008ZM88.3723 46.2756C89.9964 46.2756 91.2514 45.873 92.1372 45.0679C93.0395 44.2464 93.4906 43.1455 93.4906 41.7653V36.4909C93.4906 35.1272 93.0477 34.0427 92.1618 33.2376C91.276 32.4325 90.0128 32.0299 88.3723 32.0299C86.7647 32.0299 85.5097 32.4325 84.6075 33.2376C83.7216 34.0427 83.2787 35.1272 83.2787 36.4909V41.7653C83.2787 43.1455 83.7216 44.2464 84.6075 45.0679C85.5097 45.873 86.7647 46.2756 88.3723 46.2756Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M70.5569 47.779C70.2781 47.779 70.032 47.6804 69.8187 47.4833C69.6219 47.2861 69.5234 47.0479 69.5234 46.7685V32.0299C69.5234 30.8798 70.1796 30.3047 71.492 30.3047V46.0291H79.3662C79.8911 46.0291 80.2849 46.1852 80.5473 46.4974C80.8262 46.7932 80.9656 47.2204 80.9656 47.779H70.5569Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M54.4073 47.7779C54.1284 47.7779 53.8906 47.6875 53.6937 47.5068C53.4969 47.3261 53.3984 47.1042 53.3984 46.8413V31.462C53.3984 31.1991 53.4969 30.9772 53.6937 30.7965C53.8906 30.6158 54.1284 30.5254 54.4073 30.5254H61.3465C62.708 30.5254 63.7908 30.9526 64.5946 31.807C65.4148 32.645 65.8249 33.7787 65.8249 35.2082C65.8249 35.9969 65.6117 36.7445 65.1851 37.451C64.7586 38.1411 64.2173 38.6423 63.5611 38.9545V39.0038C64.5126 39.2831 65.2426 39.7678 65.7511 40.4579C66.2761 41.1316 66.5385 41.9696 66.5385 42.9719C66.5385 43.9084 66.3417 44.7464 65.948 45.4858C65.5707 46.2088 65.0375 46.7756 64.3485 47.1864C63.6595 47.5807 62.8721 47.7779 61.9862 47.7779H54.4073ZM61.2973 38.289C62.0191 38.289 62.6342 37.9933 63.1428 37.4018C63.6677 36.8102 63.9302 36.0873 63.9302 35.2329C63.9302 34.2799 63.6923 33.5405 63.2166 33.0147C62.7573 32.4889 62.1175 32.226 61.2973 32.226H55.3424V38.289H61.2973ZM61.7894 46.0773C62.6916 46.0773 63.3888 45.8062 63.881 45.264C64.3895 44.7218 64.6438 43.9659 64.6438 42.9965C64.6438 42.0435 64.3895 41.3041 63.881 40.7783C63.3888 40.2525 62.6916 39.9896 61.7894 39.9896H55.3424V46.0773H61.7894Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M136.068 22.031C133.973 22.031 132.32 21.6867 131.108 20.9983C129.896 20.2896 129.291 19.3479 129.291 18.1735C129.291 17.6469 129.517 17.2015 129.969 16.8369C130.44 16.4724 131.191 16.2902 132.218 16.2902C132.381 17.1002 132.792 17.7381 133.45 18.2038C134.107 18.6493 134.878 18.872 135.76 18.872C136.787 18.872 137.579 18.7506 138.133 18.5076C138.708 18.2645 138.996 17.9102 138.996 17.4444C138.996 17.0394 138.769 16.6851 138.317 16.3813C137.866 16.0775 136.962 15.7637 135.606 15.4397C134.025 15.0752 132.792 14.7107 131.91 14.3462C131.047 13.9614 130.41 13.4856 129.999 12.9186C129.588 12.3515 129.383 11.6023 129.383 10.6708C129.383 9.35455 129.937 8.30156 131.047 7.51184C132.176 6.70183 133.748 6.29688 135.76 6.29688C137.733 6.29688 139.334 6.63099 140.567 7.29922C141.799 7.96744 142.415 8.85845 142.415 9.97223C142.415 10.5392 142.199 10.9543 141.769 11.2175C141.337 11.4606 140.618 11.5922 139.612 11.6125C139.345 10.8429 138.934 10.276 138.379 9.91144C137.846 9.52668 137.075 9.33435 136.068 9.33435C135.349 9.33435 134.713 9.45584 134.159 9.69881C133.604 9.94178 133.327 10.2355 133.327 10.5797C133.327 10.9644 133.553 11.2682 134.005 11.491C134.476 11.7138 135.257 11.9364 136.346 12.1592C138.708 12.6654 140.402 13.3337 141.429 14.164C142.477 14.9942 143.001 16.118 143.001 17.5356C143.001 18.4063 142.724 19.186 142.169 19.8744C141.615 20.5629 140.813 21.0995 139.766 21.4843C138.718 21.8488 137.486 22.031 136.068 22.031Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M126.006 4.97392C125.234 4.97392 124.583 4.74901 124.055 4.29899C123.546 3.82857 123.293 3.22523 123.293 2.48893C123.293 1.75262 123.546 1.15949 124.055 0.709534C124.583 0.239116 125.234 0.00390625 126.006 0.00390625C126.778 0.00390625 127.419 0.239116 127.927 0.709534C128.456 1.15949 128.72 1.75262 128.72 2.48893C128.72 3.22523 128.456 3.82857 127.927 4.29899C127.419 4.74901 126.778 4.97392 126.006 4.97392ZM123.902 8.59405C123.902 7.71462 124.248 7.09085 124.939 6.72263C125.63 6.33402 126.676 6.13976 128.079 6.13976V19.5773C128.079 20.4567 127.733 21.0908 127.042 21.4794C126.351 21.8476 125.305 22.0317 123.902 22.0317V8.59405Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M118.825 22.0301C117.072 22.0301 115.783 21.5335 114.958 20.5401C114.133 19.5469 113.721 18.2698 113.721 16.709V9.62441H110.441C110.441 8.59055 110.637 7.82023 111.029 7.31346C111.421 6.80669 111.937 6.55331 112.576 6.55331H113.782V4.15124C113.782 3.27959 114.123 2.66134 114.803 2.29646C115.484 1.91132 116.515 1.71875 117.896 1.71875V6.55331H122.011C122.011 7.64792 121.805 8.43856 121.392 8.925C120.98 9.39124 120.299 9.62441 119.351 9.62441H117.958V16.557C117.958 17.2259 118.092 17.7124 118.361 18.0165C118.629 18.3002 119.093 18.4422 119.753 18.4422C120.475 18.4422 121.217 18.2395 121.98 17.834C122.207 18.0368 122.382 18.2902 122.506 18.5941C122.65 18.8982 122.723 19.2023 122.723 19.5064C122.723 19.9118 122.578 20.3071 122.29 20.6922C122.001 21.0774 121.558 21.4017 120.959 21.6652C120.382 21.9085 119.67 22.0301 118.825 22.0301Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M95.5898 9.45584C95.5898 8.44335 95.9284 7.66368 96.6055 7.11693C97.2826 6.57019 98.288 6.29688 99.6216 6.29688V8.08893C99.3139 8.413 99.0574 8.75727 98.8522 9.12172L99.0677 9.24321C99.6833 8.31171 100.463 7.59284 101.407 7.08659C102.371 6.56015 103.438 6.29688 104.608 6.29688C105.634 6.29688 106.536 6.5297 107.316 6.99545C108.116 7.4612 108.742 8.10923 109.194 8.93944C109.645 9.74946 109.871 10.6607 109.871 11.6731V19.6011C109.871 20.4718 109.522 21.0995 108.824 21.4843C108.127 21.8488 107.07 22.031 105.654 22.031V12.311C105.654 11.6226 105.428 11.0454 104.977 10.5797C104.546 10.1139 103.931 9.88109 103.13 9.88109C102.145 9.88109 101.345 10.1949 100.73 10.8227C100.114 11.4505 99.8063 12.2402 99.8063 13.192V19.6011C99.8063 20.4718 99.4575 21.0995 98.7599 21.4843C98.0828 21.8488 97.0261 22.031 95.5898 22.031V9.45584Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M87.0213 22.031C85.69 22.031 84.4798 21.788 83.3905 21.3021C82.3014 20.816 81.4441 20.1478 80.8188 19.2973C80.1935 18.4266 79.8809 17.4444 79.8809 16.351V12.311C79.8809 11.1974 80.1835 10.1849 80.7886 9.27356C81.3937 8.34205 82.2408 7.61314 83.3301 7.08659C84.4193 6.56015 85.6497 6.29688 87.0213 6.29688C88.3928 6.29688 89.6233 6.56015 90.7124 7.08659C91.8017 7.61314 92.6489 8.34205 93.254 9.27356C93.8591 10.1849 94.1617 11.1974 94.1617 12.311V16.351C94.1617 17.4444 93.849 18.4266 93.2237 19.2973C92.5984 20.1478 91.7412 20.816 90.652 21.3021C89.5628 21.788 88.3525 22.031 87.0213 22.031ZM87.0213 18.4468C87.9692 18.4468 88.7055 18.2342 89.2299 17.8089C89.7544 17.3836 90.0166 16.7964 90.0166 16.0472V12.5237C90.0166 11.7339 89.7443 11.0961 89.1997 10.6101C88.6753 10.1241 87.9491 9.88109 87.0213 9.88109C86.0934 9.88109 85.3572 10.1241 84.8126 10.6101C84.2881 11.0961 84.026 11.7339 84.026 12.5237V16.0472C84.026 16.7964 84.2881 17.3836 84.8126 17.8089C85.337 18.2342 86.0733 18.4468 87.0213 18.4468Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M76.6026 9.88109C75.4 9.88109 74.4279 10.1949 73.6864 10.8227C72.9447 11.4505 72.574 12.2402 72.574 13.192V19.6011C72.574 20.4718 72.2333 21.0995 71.5518 21.4843C70.8904 21.8488 69.8582 22.031 68.4551 22.031V9.45584C68.4551 8.44335 68.7858 7.66368 69.4473 7.11693C70.1087 6.57019 71.0908 6.29688 72.3936 6.29688V8.08893C72.0929 8.413 71.8424 8.75727 71.642 9.12172L71.8524 9.24321C73.1151 7.27902 74.6886 6.29688 76.5726 6.29688C77.4745 6.29688 78.156 6.53985 78.617 7.02579C79.078 7.51184 79.3085 8.12943 79.3085 8.87875C79.3085 9.44569 79.1581 9.94178 78.8575 10.367C78.2963 10.0431 77.5447 9.88109 76.6026 9.88109Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M54.1738 2.3417C54.1738 1.76927 54.3893 1.28885 54.8201 0.900425C55.2715 0.491544 55.8152 0.287109 56.4512 0.287109H70.4539C70.4539 1.63639 70.2282 2.61768 69.7769 3.23099C69.3255 3.84432 68.5972 4.151 67.5918 4.151H58.6978V8.8428H66.7609C66.7609 10.192 66.5352 11.1733 66.0839 11.7866C65.6325 12.3999 64.9041 12.7066 63.8988 12.7066H58.6978V18.9317C58.6978 20.0152 58.3387 20.8022 57.6206 21.2929C56.9231 21.7835 55.7742 22.0288 54.1738 22.0288V2.3417Z",
    fill: "#050607"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_5725_6336"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "42.5664",
    height: "47.996",
    fill: "white",
    transform: "translate(0 -0.00195312)"
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
var ArrowRightIcon = function ArrowRightIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "12",
    viewBox: "0 0 13 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.62406 0.347125L12.8014 5.52456C12.9338 5.65694 13 5.83044 13 6.00394C13 6.17744 12.9338 6.35094 12.8014 6.48331L7.62397 11.6608C7.35922 11.9256 6.92991 11.9256 6.66516 11.6608C6.40047 11.3961 6.40047 10.9668 6.66516 10.7021L10.6852 6.682L-2.32203 6.682C-2.69644 6.68197 -3 6.37844 -3 6.004C-3 5.62956 -2.69644 5.32603 -2.32203 5.32603L10.6854 5.32603L6.66522 1.30588C6.40053 1.04109 6.40066 0.611813 6.66522 0.347125C6.93 0.0823747 7.35928 0.0823747 7.62406 0.347125Z",
    fill: "#6A758E"
  }));
};
var CommunityIcon = function CommunityIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "8.83925",
    cy: "5.05214",
    rx: "5.05214",
    ry: "5.05214",
    fill: "white"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "8.84125",
    cy: "18.9486",
    rx: "8.84125",
    ry: "5.05214",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.9963 18.9536C23.9963 21.0463 21.4253 22.7427 18.2863 22.7427C19.2111 21.7319 19.847 20.463 19.847 18.9554C19.847 17.446 19.2097 16.176 18.2831 15.1646C21.4221 15.1646 23.9963 16.861 23.9963 18.9536Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.2072 5.06059C20.2072 7.15326 18.5108 8.8497 16.4181 8.8497C15.9618 8.8497 15.5243 8.76903 15.1191 8.62119C15.7167 7.57023 16.0579 6.35456 16.0579 5.05918C16.0579 3.76476 15.7172 2.54993 15.1205 1.49951C15.5253 1.35197 15.9623 1.27148 16.4181 1.27148C18.5108 1.27148 20.2072 2.96793 20.2072 5.06059Z",
    fill: "white"
  }));
};
var RateIcon = function RateIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13.304 23.2653L13.9546 22.1663C14.4591 21.3138 14.7114 20.8876 15.1167 20.6519C15.5219 20.4162 16.0321 20.4074 17.0525 20.3898C18.559 20.3639 19.5038 20.2716 20.2962 19.9434C21.7664 19.3344 22.9344 18.1663 23.5434 16.6962C24.0001 15.5935 24.0001 14.1957 24.0001 11.4V10.2C24.0001 6.27191 24.0001 4.30784 23.1159 2.86502C22.6212 2.05768 21.9424 1.3789 21.1351 0.884163C19.6923 0 17.7282 0 13.8001 0H10.2C6.27191 0 4.30784 0 2.86502 0.884163C2.05768 1.3789 1.3789 2.05768 0.884163 2.86502C0 4.30784 0 6.27191 0 10.2V11.4C0 14.1957 0 15.5935 0.456725 16.6962C1.06569 18.1663 2.23374 19.3344 3.70391 19.9434C4.49628 20.2716 5.44108 20.3639 6.94752 20.3898C7.96794 20.4074 8.47815 20.4162 8.88339 20.6519C9.28862 20.8876 9.54091 21.3138 10.0455 22.1663L10.696 23.2653C11.2758 24.2449 12.7242 24.2449 13.304 23.2653ZM6.60003 9.25774C6.60003 11.3609 9.196 13.5965 10.7881 14.7699C11.3331 15.1716 11.6056 15.3724 12.0001 15.3724C12.3945 15.3724 12.667 15.1716 13.212 14.7699C14.8041 13.5966 17.4001 11.3609 17.4001 9.25773C17.4001 6.04513 14.43 4.84569 12 7.3274C9.57013 4.84569 6.60003 6.04513 6.60003 9.25774Z",
    fill: "white"
  }));
};
var DocumentationIcon = function DocumentationIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 9.60003V14.4C0 17.7941 0 19.4912 1.05442 20.5456C1.31522 20.8064 1.61534 21.0027 1.97074 21.1505C1.96268 21.0971 1.95506 21.0436 1.94785 20.99C1.79983 19.889 1.79991 18.5141 1.8 16.9185L1.8 7.19997L1.8 7.08147C1.79991 5.4858 1.79983 4.11093 1.94785 3.00994C1.95505 2.95639 1.96266 2.90294 1.97072 2.84961C1.61533 2.99735 1.31522 3.19365 1.05442 3.45445C0 4.50886 0 6.20592 0 9.60003Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24 9.60003V14.4C24 17.7941 24 19.4912 22.9456 20.5456C22.6848 20.8064 22.3847 21.0027 22.0293 21.1505C22.0373 21.0971 22.0449 21.0436 22.0521 20.99C22.2002 19.889 22.2001 18.5141 22.2 16.9185V7.08148C22.2001 5.4858 22.2002 4.11093 22.0521 3.00994C22.0449 2.95639 22.0373 2.90294 22.0293 2.84961C22.3847 2.99735 22.6848 3.19365 22.9456 3.45445C24 4.50886 24 6.20592 24 9.60003Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M4.65402 1.05442C3.59961 2.10883 3.59961 3.80589 3.59961 7.2V16.8C3.59961 20.1941 3.59961 21.8912 4.65402 22.9456C5.70844 24 7.4055 24 10.7996 24H13.1996C16.5937 24 18.2908 24 19.3452 22.9456C20.3996 21.8912 20.3996 20.1941 20.3996 16.8V7.2C20.3996 3.80589 20.3996 2.10883 19.3452 1.05442C18.2908 0 16.5937 0 13.1996 0H10.7996C7.4055 0 5.70844 0 4.65402 1.05442ZM7.49961 18C7.49961 17.5029 7.90255 17.1 8.39961 17.1H11.9996C12.4967 17.1 12.8996 17.5029 12.8996 18C12.8996 18.4971 12.4967 18.9 11.9996 18.9H8.39961C7.90255 18.9 7.49961 18.4971 7.49961 18ZM8.39961 12.3C7.90255 12.3 7.49961 12.7029 7.49961 13.2C7.49961 13.6971 7.90255 14.1 8.39961 14.1H15.5996C16.0967 14.1 16.4996 13.6971 16.4996 13.2C16.4996 12.7029 16.0967 12.3 15.5996 12.3H8.39961ZM7.49961 8.4C7.49961 7.90294 7.90255 7.5 8.39961 7.5H15.5996C16.0967 7.5 16.4996 7.90294 16.4996 8.4C16.4996 8.89706 16.0967 9.3 15.5996 9.3H8.39961C7.90255 9.3 7.49961 8.89706 7.49961 8.4Z",
    fill: "white"
  }));
};
var DocLinkIcon = function DocLinkIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.666 9.33398L16.666 3.33399M16.666 3.33399H13.1035M16.666 3.33399V6.89648",
    stroke: "#050607",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.6673 10.0007C16.6673 13.1433 16.6673 14.7147 15.691 15.691C14.7147 16.6673 13.1433 16.6673 10.0007 16.6673C6.85796 16.6673 5.28661 16.6673 4.3103 15.691C3.33398 14.7147 3.33398 13.1433 3.33398 10.0007C3.33398 6.85796 3.33398 5.28661 4.3103 4.3103C5.28661 3.33398 6.85796 3.33398 10.0007 3.33398",
    stroke: "#050607",
    "stroke-width": "1.5",
    "stroke-linecap": "round"
  }));
};
var VersionIcon = function VersionIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    "clip-path": "url(#clip0_11997_406)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.83268 10H4.99935C3.428 10 2.64233 10 2.15417 10.4882C1.66602 10.9763 1.66602 11.762 1.66602 13.3333V15C1.66602 16.5713 1.66602 17.357 2.15417 17.8452C2.64233 18.3333 3.428 18.3333 4.99935 18.3333H6.66602C8.23736 18.3333 9.02304 18.3333 9.51119 17.8452C9.99935 17.357 9.99935 16.5713 9.99935 15V14.1667",
    stroke: "#8891A5",
    "stroke-width": "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.0007 5.83398H9.16732C7.59597 5.83398 6.8103 5.83398 6.32214 6.32214C5.83398 6.8103 5.83398 7.59597 5.83398 9.16732V10.834C5.83398 12.4053 5.83398 13.191 6.32214 13.6792C6.8103 14.1673 7.59597 14.1673 9.16732 14.1673H10.834C12.4053 14.1673 13.191 14.1673 13.6792 13.6792C14.1673 13.191 14.1673 12.4053 14.1673 10.834V10.0007",
    stroke: "#8891A5",
    "stroke-width": "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 4.99935C10 3.428 10 2.64233 10.4882 2.15417C10.9763 1.66602 11.762 1.66602 13.3333 1.66602H15C16.5713 1.66602 17.357 1.66602 17.8452 2.15417C18.3333 2.64233 18.3333 3.428 18.3333 4.99935V6.66602C18.3333 8.23736 18.3333 9.02304 17.8452 9.51119C17.357 9.99935 16.5713 9.99935 15 9.99935H13.3333C11.762 9.99935 10.9763 9.99935 10.4882 9.51119C10 9.02304 10 8.23736 10 6.66602V4.99935Z",
    stroke: "#8891A5",
    "stroke-width": "1.5"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_11997_406"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "20",
    rx: "5",
    fill: "white"
  }))));
};
var CtaIcon = function CtaIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "104",
    height: "104",
    viewBox: "0 0 104 104",
    fill: "none"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask0_4834_1071",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "104",
    height: "104"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M52 104C80.7188 104 104 80.7188 104 52C104 23.2812 80.7188 0 52 0C23.2812 0 0 23.2812 0 52C0 80.7188 23.2812 104 52 104Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#mask0_4834_1071)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M52 104C80.7188 104 104 80.7188 104 52C104 23.2812 80.7188 0 52 0C23.2812 0 0 23.2812 0 52C0 80.7188 23.2812 104 52 104Z",
    fill: "#FC3195",
    fillOpacity: "0.17"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M85.0882 109.217H58.82C55.79 109.217 53.5214 106.448 54.1141 103.474L63.4595 56.88C63.9091 54.6369 65.8763 53.0273 68.1654 53.0273H94.4336C97.4636 53.0273 99.7322 55.7967 99.1395 58.7705L89.7942 105.365C89.3445 107.608 87.3773 109.217 85.0882 109.217Z",
    fill: "#42195B"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M83.1124 109.217H47.0645L58.3361 53.0273H94.3841L83.1124 109.217Z",
    fill: "#592C70"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M80.8323 85.6544V97.2582C80.8323 97.2582 76.3768 104.447 66.4642 105.198C56.5517 105.944 29.9922 103.89 29.9922 103.89V61.9971L54.0684 55.4824L62.816 55.9167L76.1877 68.3534L80.8323 85.6544Z",
    fill: "#F7A524"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M62.817 55.9219V110.61H46.2109L50.9015 57L62.817 55.9219Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.4941 107.477L57.1345 110.094L72.5398 104.361L74.7216 100.702L79.075 93.3904C79.075 93.3904 78.8348 81.9808 67.9259 84.9137L63.828 91.6276L59.7148 98.3773L41.4941 107.483V107.477Z",
    fill: "#FFA9A9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M87.2503 79.7383L80.2707 91.3881L79.075 93.3859C79.075 93.3859 76.7757 85.4099 67.926 84.9091L68.7691 83.4069L72.1618 77.3827L61.6719 55.4883L79.0699 59.9132C87.746 62.1205 91.8438 72.0637 87.2452 79.7434L87.2503 79.7383Z",
    fill: "#F7A524"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63.8281 91.6225C69.9392 93.0736 73.7407 99.0007 74.7217 100.702L79.0751 93.3904C79.0751 93.3904 78.8349 81.9808 67.926 84.9137L63.8281 91.6276V91.6225Z",
    fill: "#F7A524"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63.8281 91.6213L74.9721 71.459",
    stroke: "#A83636",
    strokeWidth: "1.03",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M81.0412 90.0996L74.7207 100.702",
    stroke: "#A83636",
    strokeWidth: "1.03",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M45.8439 57.1434C51.8936 57.7054 57.8769 55.0842 62.082 55.4163C66.2923 55.7433 69.2405 59.2485 72.3267 55.3703C75.4129 51.4871 72.2807 45.9279 70.2216 42.6067C68.1624 39.2854 69.7566 33.0671 67.6055 29.051C65.6996 25.4896 62.9098 20.9574 55.5776 21.5297C54.6323 21.6012 53.6104 21.7596 52.5016 22.0151H52.4965C49.3235 21.7545 47.8059 24.6976 47.8059 24.6976C47.8059 24.6976 44.4132 23.4356 42.6402 28.8108C40.862 34.1912 42.7781 41.3855 41.0511 45.9023C39.319 50.4141 39.7993 56.5864 45.849 57.1485L45.8439 57.1434Z",
    fill: "#211A35"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63.8951 37.3607L66.0002 37.6928C66.0002 26.3802 59.4906 23.1203 57.1402 22.2568C56.5424 21.9605 56.0263 21.7254 55.5818 21.5312C54.6365 21.6028 53.6146 21.7612 52.5059 22.0167C64.2221 24.97 63.8951 37.3607 63.8951 37.3607Z",
    fill: "#D427F2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M49.2561 38.8408V44.4409C49.2561 45.565 48.4539 46.5051 47.3809 46.7095C47.2378 46.735 47.0947 46.7504 46.9465 46.7504H44.7392C43.4618 46.7504 42.4297 45.7182 42.4297 44.4409V38.8408C42.4297 37.5634 43.4618 36.5312 44.7392 36.5312H46.9465C47.0947 36.5312 47.2429 36.5466 47.3809 36.5721C48.4488 36.7765 49.2561 37.7167 49.2561 38.8408Z",
    fill: "#D427F2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M49.2551 38.839V44.439C49.2551 45.5631 48.4529 46.5033 47.3799 46.7077C46.3171 46.5033 45.5098 45.5631 45.5098 44.439V38.839C45.5098 37.7149 46.312 36.7747 47.3799 36.5703C48.4478 36.7747 49.2551 37.7149 49.2551 38.839Z",
    fill: "#5951CC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M62.8162 56.8134C62.7242 57.6565 58.8257 61.9536 55.0241 61.55C51.2226 61.1463 50.9365 58.3718 50.9365 58.3718L50.8905 56.6244L50.7832 52.5418L58.4986 47.514L63.0615 44.5352C62.4432 46.7118 62.9082 55.9755 62.8162 56.8134Z",
    fill: "#FFA9A9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60.8541 48.3306C60.5833 51.0898 57.4256 56.2096 50.8905 56.6183L50.7832 52.5358L58.4986 47.508C59.9702 47.3905 60.9257 47.5897 60.8541 48.3255V48.3306Z",
    fill: "#F28181"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M45.1645 32.8299C45.1441 32.881 45.1236 32.9372 45.1032 32.9883C44.3317 34.9248 44.8682 37.3263 45.0266 38.5066C45.1901 39.7227 44.3725 43.2074 44.9346 46.5746C45.4966 49.9367 47.6478 53.2783 52.277 53.5645C56.9114 53.8404 61.8421 48.8637 63.3852 45.7315C64.9283 42.5993 63.9473 39.6562 63.9473 39.6562L62.8538 36.4117L62.164 34.3729C56.1194 35.5635 48.7616 30.3262 48.7616 30.3262C48.7616 30.3262 47.1828 32.3393 45.1645 32.8299Z",
    fill: "#FFA9A9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M51.3154 41.3203L50.1555 44.3656C49.9715 44.8561 50.2117 45.4029 50.7022 45.5868L51.5351 45.9036",
    stroke: "#F25369",
    strokeWidth: "1.03",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M56.6656 41.0086C56.6656 41.356 56.3846 41.6422 56.032 41.6422C55.6795 41.6422 55.3984 41.3611 55.3984 41.0086C55.3984 40.656 55.6795 40.375 56.032 40.375C56.3846 40.375 56.6656 41.0086 56.6656 41.0086Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M48.439 41.0086C48.439 41.356 48.158 41.6422 47.8055 41.6422C47.4529 41.6422 47.1719 41.3611 47.1719 41.0086C47.1719 40.656 47.4529 40.375 47.8055 40.375C48.158 40.375 48.439 41.0086 48.439 41.0086Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M68.6623 38.8408V44.4409C68.6623 45.565 67.8601 46.5051 66.7871 46.7095C66.644 46.735 66.501 46.7504 66.3528 46.7504H64.1455C62.8681 46.7504 61.8359 45.7182 61.8359 44.4409V38.8408C61.8359 37.5634 62.8681 36.5312 64.1455 36.5312H66.3528C66.501 36.5312 66.6491 36.5466 66.7871 36.5721C67.855 36.7765 68.6623 37.7167 68.6623 38.8408Z",
    fill: "#D427F2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M68.6613 38.839V44.439C68.6613 45.5631 67.8591 46.5033 66.7861 46.7077C65.7233 46.5033 64.916 45.5631 64.916 44.439V38.839C64.916 37.7149 65.7182 36.7747 66.7861 36.5703C67.854 36.7747 68.6613 37.7149 68.6613 38.839Z",
    fill: "#E66CFF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63.5934 44.9375C62.689 46.5879 58.8262 47.7835 58.8262 47.7835",
    stroke: "#E66CFF",
    strokeWidth: "1.03",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M59.6654 47.9274C59.6654 48.4946 59.2055 48.9544 58.6384 48.9544C58.0712 48.9544 57.6113 48.4946 57.6113 47.9274C57.6113 47.3603 58.0712 46.9004 58.6384 46.9004C59.2055 46.9004 59.6654 47.3603 59.6654 47.9274Z",
    fill: "#592C70"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M49.0307 38.1822C49.0307 38.1822 47.7942 37.0735 46.5781 38.1822",
    stroke: "#211A35",
    strokeWidth: "1.03",
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M57.3706 38.1822C57.3706 38.1822 56.134 37.0735 54.918 38.1822",
    stroke: "#211A35",
    strokeWidth: "1.03",
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M54.309 48.1992C54.309 48.1992 53.1083 49.2262 51.6367 48.3883",
    stroke: "#F25369",
    strokeWidth: "1.03",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50.2407 96.6341H4.10141C3.03351 96.6341 2.00649 95.7655 1.80722 94.6976L-5.28485 56.2021C-5.48412 55.1343 -4.77389 54.2656 -3.706 54.2656H42.4333C43.5012 54.2656 44.5283 55.1343 44.7275 56.2021L51.8196 94.6976C52.0189 95.7655 51.3086 96.6341 50.2407 96.6341Z",
    fill: "#8E9AEA"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M47.6607 96.6341H1.52134C0.453437 96.6341 -0.573585 95.7655 -0.772858 94.6976L-7.86493 56.2021C-8.0642 55.1343 -7.35397 54.2656 -6.28607 54.2656H39.8533C40.9212 54.2656 41.9482 55.1343 42.1475 56.2021L49.2395 94.6976C49.4388 95.7655 48.7286 96.6341 47.6607 96.6341Z",
    fill: "#E1EBFF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40.8692 94.599H31.6413C31.1968 94.599 30.834 94.2362 30.834 93.7917C30.834 93.3472 31.1968 92.9844 31.6413 92.9844H40.8692C41.3137 92.9844 41.6765 93.3472 41.6765 93.7917C41.6765 94.2362 41.3137 94.599 40.8692 94.599Z",
    fill: "#211A35"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M33.0332 93.7871C31.6281 96.6331 32.2873 101.503 32.2873 101.503",
    stroke: "white",
    strokeWidth: "1.03",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36.0567 93.7871C34.6516 96.6331 35.3107 101.503 35.3107 101.503",
    stroke: "#FF3381",
    strokeWidth: "1.03",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M39.2247 93.7871C37.8195 96.6331 38.4787 101.503 38.4787 101.503",
    stroke: "#33B6FF",
    strokeWidth: "1.03",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38.1313 0.775391H16.2266V29.1641H38.1313V0.775391Z",
    fill: "#FC3195",
    fillOpacity: "0.07",
    stroke: "#FC3195",
    strokeOpacity: "0.07",
    strokeWidth: "0.77",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34.9784 3.75977H19.3789V26.1703H34.9784V3.75977Z",
    fill: "#FC3195",
    fillOpacity: "0.07"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34.4785 4.25977V25.6699H19.8789V4.25977H34.4785Z",
    stroke: "#FC3195",
    strokeOpacity: "0.07"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34.9784 3.75977H19.3789V26.1703H34.9784V3.75977Z",
    stroke: "#FC3195",
    strokeOpacity: "0.19",
    strokeWidth: "0.77",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M110.631 2.65625H76.8418V46.4452H110.631V2.65625Z",
    fill: "#FC3195",
    fillOpacity: "0.07",
    stroke: "#FC3195",
    strokeOpacity: "0.07",
    strokeWidth: "0.77",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M105.766 7.26562H81.7051V41.842H105.766V7.26562Z",
    fill: "#FC3195",
    fillOpacity: "0.07"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M105.266 7.76562V41.3418H82.2051V7.76562H105.266Z",
    stroke: "#FC3195",
    strokeOpacity: "0.07"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M105.766 7.26562H81.7051V41.842H105.766V7.26562Z",
    stroke: "#FC3195",
    strokeOpacity: "0.19",
    strokeWidth: "0.77",
    strokeMiterlimit: "10"
  })));
};

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

/***/ "./assets/css/backend/switch.css":
/*!***************************************!*\
  !*** ./assets/css/backend/switch.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

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