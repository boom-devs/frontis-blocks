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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./admin/components/index.js");
/* harmony import */ var _TabMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabMenu */ "./admin/TabMenu.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./admin/icons/index.js");
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
  }, /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.Logo, null)), /*#__PURE__*/React.createElement("div", {
    className: "fb-header-top-right"
  }, window.frontisBlocksAdmin.isProActive === 'false' && /*#__PURE__*/React.createElement("a", {
    href: window.frontisBlocksAdmin.pro_url,
    className: "fb-upgrade-button",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Upgrade to Pro ", /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.Crown, null)))), /*#__PURE__*/React.createElement("div", {
    className: "frontis-blocks-admin"
  }, /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "frontis-blocks-tab-panel",
    activeClass: "active-tab",
    onSelect: handleTabChange,
    initialTabName: currentTab,
    tabs: _TabMenu__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (tab) {
      return {
        name: tab.id,
        title: tab.label,
        icon: tab.icon,
        className: "frontis-".concat(tab.id, "-tab")
      };
    })
  }, function (tab) {
    var _TabMenus$find;
    var activeTabData = _TabMenu__WEBPACK_IMPORTED_MODULE_3__["default"].find(function (t) {
      return t.id === tab.name;
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "frontis-blocks-tab-content"
    }, (_TabMenus$find = _TabMenu__WEBPACK_IMPORTED_MODULE_3__["default"].find(function (tab) {
      return tab.id === activeTab;
    })) === null || _TabMenus$find === void 0 ? void 0 : _TabMenus$find.comp);
  })));
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
  id: 'options',
  icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.OptionsIcon, null),
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Settings", "frontis-blocks"),
  comp: /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Settings, null)
}, {
  id: 'integrations',
  icon: /*#__PURE__*/React.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.IntegrationsIcon, null),
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Integrations", "frontis-blocks"),
  comp: /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Integration, null)
}]);
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
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(block.status === 'true'),
    _useState2 = _slicedToArray(_useState, 2),
    isChecked = _useState2[0],
    setIsChecked = _useState2[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setIsChecked(block.status === 'true');
  }, [block.status]);
  var handleChange = function handleChange(checked) {
    onChange(block.slug, checked);
    setIsChecked(checked);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-block-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-block-card-icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: block.icon,
    alt: "".concat(block.title, " icon")
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-block-card-content"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "fb-block-card-title"
  }, block.title), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: isChecked,
    onChange: handleChange,
    className: "fb-block-card-switch-input",
    id: "switch-".concat(block.slug)
  }))));
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
/* harmony import */ var _assets_css_switch_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/css/switch.css */ "./assets/css/switch.css");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




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
    ajaxurl = _window$frontisBlocks.ajaxurl,
    nonce = _window$frontisBlocks.nonce;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var loadBlocks = function loadBlocks() {
      var _window$frontisBlocks2;
      var blocksData = (_window$frontisBlocks2 = window.frontisBlocksAdmin) === null || _window$frontisBlocks2 === void 0 ? void 0 : _window$frontisBlocks2.blocks;
      if (blocksData && _typeof(blocksData) === 'object') {
        var blocksArray = Object.values(blocksData);
        setBlocks(blocksArray);
      }
      setIsLoading(false);
    };
    loadBlocks();
  }, []);
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
  var filteredCategories = selectedCategory === 'all' ? Object.entries(categoryInfo).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      category = _ref2[0];
    return category !== 'all';
  }) : [[selectedCategory, categoryInfo[selectedCategory]]];
  var clearSearch = function clearSearch() {
    setSearchTerm('');
  };
  var handleEnableAll = function handleEnableAll() {
    setBlocks(function (prevBlocks) {
      return prevBlocks.map(function (block) {
        return _objectSpread(_objectSpread({}, block), {}, {
          status: 'true'
        });
      });
    });
  };
  var handleDisableAll = function handleDisableAll() {
    setBlocks(function (prevBlocks) {
      return prevBlocks.map(function (block) {
        return _objectSpread(_objectSpread({}, block), {}, {
          status: 'false'
        });
      });
    });
  };
  var handleBlockChange = function handleBlockChange(slug, enabled) {
    setBlocks(function (prevBlocks) {
      return prevBlocks.map(function (block) {
        return block.slug === slug ? _objectSpread(_objectSpread({}, block), {}, {
          status: enabled ? 'true' : 'false'
        }) : block;
      });
    });

    // Here you might want to add an AJAX call to update the server
    // updateBlockStatus(slug, enabled);
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
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search blocks...', 'frontis-blocks'),
    className: "fb-blocks-search-input",
    value: searchTerm,
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    }
  }), searchTerm && /*#__PURE__*/React.createElement("button", {
    className: "fb-blocks-search-clear",
    onClick: clearSearch
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-header-right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fb-blocks-button fb-blocks-enable-all",
    onClick: handleEnableAll
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable All', 'frontis-blocks')), /*#__PURE__*/React.createElement("button", {
    className: "fb-blocks-button fb-blocks-disable-all",
    onClick: handleDisableAll
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disable All', 'frontis-blocks')))), /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-category-filter"
  }, Object.entries(categoryInfo).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      category = _ref4[0],
      count = _ref4[1].count;
    return /*#__PURE__*/React.createElement("button", {
      key: category,
      onClick: function onClick() {
        return setSelectedCategory(category);
      },
      className: "fb-blocks-category-button ".concat(selectedCategory === category ? 'fb-blocks-category-button--active' : '')
    }, category === 'all' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All', 'frontis-blocks') : category.charAt(0).toUpperCase() + category.slice(1), " (", count, ")");
  })), filteredCategories.length > 0 ? filteredCategories.map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      category = _ref6[0],
      categoryBlocks = _ref6[1].blocks;
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var Dashboard = function Dashboard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "frontis-blocks-dashboard"
  }, /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dashboard', 'frontis-blocks')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Card, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardHeader, null, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Welcome to Frontis Blocks', 'frontis-blocks'))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Here you can manage your Frontis Blocks settings and view usage statistics.', 'frontis-blocks')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var Integration = function Integration() {
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-integration"
  }, /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Integration', 'frontis-blocks')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Card, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardHeader, null, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shortcode', 'frontis-blocks'))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use this shortcode to display Frontis Blocks in your posts or pages:', 'frontis-blocks')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    value: "[frontis_blocks]",
    readOnly: true
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSecondary: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Copy Shortcode', 'frontis-blocks')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Integration);

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
  }, /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'frontis-blocks')), /*#__PURE__*/React.createElement("div", {
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
    }, tab.label);
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





var AssetsGeneration = function AssetsGeneration() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)({
      fileGeneration: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isModalOpen = _useState4[0],
    setIsModalOpen = _useState4[1];
  var handleSwitchChange = function handleSwitchChange(option) {
    setOptions(function (prevOptions) {
      return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, option, !prevOptions[option]));
    });
  };
  var handleAssetGeneration = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    console.log('handleAssetGeneration called');
    setIsModalOpen(true);
    console.log('isModalOpen set to:', true);
  }, []);
  var confirmAssetGeneration = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    console.log('Asset generation confirmed and triggered');
    setIsModalOpen(false);
  }, []);
  var closeModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    setIsModalOpen(false);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-options"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Assets Generation', 'frontis-blocks')), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('File Generation', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable automatic file generation', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: options.fileGeneration,
    onChange: function onChange() {
      return handleSwitchChange('fileGeneration');
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Asset Generation', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Generate assets for your blocks', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "fb-button-primary",
    onClick: handleAssetGeneration
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Generate Assets', 'frontis-blocks')))), /*#__PURE__*/React.createElement(_common_ConfirmationModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
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



var EditorEnhancements = function EditorEnhancements() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
      enableQuickActionBar: false,
      collapsePanel: false,
      enableTemplatesButton: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var handleSwitchChange = function handleSwitchChange(option) {
    setOptions(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, option, !prevState[option]));
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Quick Action Bar', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds a quick action bar to the editor', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: options.enableQuickActionBar,
    onChange: function onChange() {
      return handleSwitchChange('enableQuickActionBar');
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Collapse Panel', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Allows collapsing of the editor panel', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: options.collapsePanel,
    onChange: function onChange() {
      return handleSwitchChange('collapsePanel');
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Templates Button', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds a templates button to the editor', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: options.enableTemplatesButton,
    onChange: function onChange() {
      return handleSwitchChange('enableTemplatesButton');
    }
  }))));
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
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
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





var EditorOptions = function EditorOptions() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)({
      fb_default_content_width: '',
      fb_button_inherit_from_theme: false,
      fb_container_padding: '',
      fb_container_elements_gap: '',
      fb_custom_css: false,
      fb_copy_paste_style: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var nonce = window.frontisBlocksAdmin.nonce;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    fetchOptions();
  }, []);
  var fetchOptions = function fetchOptions() {
    var keys = Object.keys(options);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: '/frontis-blocks/v1/get-options',
      method: 'POST',
      data: {
        nonce: nonce,
        keys: keys
      }
    }).then(function (response) {
      if (response.success) {
        setOptions(function (prevOptions) {
          return _objectSpread(_objectSpread({}, prevOptions), response.data);
        });
      } else {
        console.error('Failed to fetch options');
      }
    });
  };
  var saveOption = function saveOption(key, value) {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: '/frontis-blocks/v1/save-option',
      method: 'POST',
      data: {
        nonce: nonce,
        key: key,
        value: value
      }
    }).then(function (response) {
      if (response.success) {
        console.log("Option ".concat(key, " saved successfully"));
      } else {
        console.error("Failed to save option ".concat(key));
      }
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
  var handleSwitchChange = function handleSwitchChange(option) {
    var newValue = !options[option];
    setOptions(function (prevOptions) {
      return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, option, newValue));
    });
    saveOption(option, newValue);
  };
  var NumberInputWithPx = function NumberInputWithPx(_ref) {
    var value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      min = _ref.min,
      max = _ref.max;
    return /*#__PURE__*/React.createElement("div", {
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
    }, "px"));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-options"
  }, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Editor Options', 'frontis-blocks')), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default Content Width', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set the default width for content in pixels', 'frontis-blocks'))), /*#__PURE__*/React.createElement(NumberInputWithPx, {
    value: options.fb_default_content_width,
    onChange: function onChange(value) {
      return handleNumberChange('fb_default_content_width', value);
    },
    onBlur: function onBlur() {
      return handleNumberBlur('fb_default_content_width', options.fb_default_content_width);
    },
    min: 0,
    max: 2000
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button - Inherit From Theme', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use button styles from the current theme', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: options.fb_button_inherit_from_theme,
    onChange: function onChange() {
      return handleSwitchChange('fb_button_inherit_from_theme');
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container Padding', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set the default padding for containers in pixels', 'frontis-blocks'))), /*#__PURE__*/React.createElement(NumberInputWithPx, {
    value: options.fb_container_padding,
    onChange: function onChange(value) {
      return handleNumberChange('fb_container_padding', value);
    },
    onBlur: function onBlur() {
      return handleNumberBlur('fb_container_padding', options.fb_container_padding);
    },
    min: 0,
    max: 2000
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container Elements Gap', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set the default gap between container elements in pixels', 'frontis-blocks'))), /*#__PURE__*/React.createElement(NumberInputWithPx, {
    value: options.fb_container_elements_gap,
    onChange: function onChange(value) {
      return handleNumberChange('fb_container_elements_gap', value);
    },
    onBlur: function onBlur() {
      return handleNumberBlur('fb_container_elements_gap', options.fb_container_elements_gap);
    },
    min: 0,
    max: 2000
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom CSS', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable custom CSS for blocks', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: options.fb_custom_css,
    onChange: function onChange() {
      return handleSwitchChange('fb_custom_css');
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Copy Paste Style', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable copy and paste style functionality', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: options.fb_copy_paste_style,
    onChange: function onChange() {
      return handleSwitchChange('fb_copy_paste_style');
    }
  }))));
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
      googleFonts: false,
      preloadLocalFonts: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var handleSwitchChange = function handleSwitchChange(option) {
    setOptions(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, option, !prevState[option]));
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-blocks-settings-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Load Google Fonts Locally", "frontis-blocks")), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Load Google Fonts Locally for performance improvement", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: options.googleFonts,
    onChange: function onChange() {
      return handleSwitchChange("googleFonts");
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preload Local Fonts", "frontis-blocks")), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preload Local Fonts for performance improvement", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: options.preloadLocalFonts,
    onChange: function onChange() {
      return handleSwitchChange("preloadLocalFonts");
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Performance);

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
      selectedVersion: '',
      enableBeta: false,
      enableLegacyBlock: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var handleSwitchChange = function handleSwitchChange(option) {
    setOptions(function (prevOptions) {
      return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, option, !prevOptions[option]));
    });
  };
  var handleVersionChange = function handleVersionChange(value) {
    setOptions(function (prevOptions) {
      return _objectSpread(_objectSpread({}, prevOptions), {}, {
        selectedVersion: value
      });
    });
  };
  var handleRollback = function handleRollback() {
    // I will Add rollback logic here
    console.log('Rollback triggered for version:', options.selectedVersion);
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
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rollback To Previous Version', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a version to rollback to', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input fb-option-input-rollback"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    value: options.selectedVersion,
    options: versions,
    onChange: handleVersionChange
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    onClick: handleRollback,
    disabled: !options.selectedVersion
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rollback', 'frontis-blocks')))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Beta', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable beta features', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: options.enableBeta,
    onChange: function onChange() {
      return handleSwitchChange('enableBeta');
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-option-label"
  }, /*#__PURE__*/React.createElement("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Legacy Block', 'frontis-blocks')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable support for legacy blocks', 'frontis-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-option-input"
  }, /*#__PURE__*/React.createElement(rc_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: options.enableLegacyBlock,
    onChange: function onChange() {
      return handleSwitchChange('enableLegacyBlock');
    }
  }))));
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
/* harmony export */   VersionControl: () => (/* reexport safe */ _VersionControl__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _EditorOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorOptions */ "./admin/components/SettingsComponents/EditorOptions.js");
/* harmony import */ var _AssetsGeneration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssetsGeneration */ "./admin/components/SettingsComponents/AssetsGeneration.js");
/* harmony import */ var _VersionControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VersionControl */ "./admin/components/SettingsComponents/VersionControl.js");
/* harmony import */ var _EditorEnhancements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorEnhancements */ "./admin/components/SettingsComponents/EditorEnhancements.js");
/* harmony import */ var _Performance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Performance */ "./admin/components/SettingsComponents/Performance.js");






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


var SettingsTabs = [{
  id: "editor",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Editor Options", "frontis-blocks"),
  component: _SettingsComponents__WEBPACK_IMPORTED_MODULE_1__.EditorOptions
}, {
  id: "assets",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Assets Generation", "frontis-blocks"),
  component: _SettingsComponents__WEBPACK_IMPORTED_MODULE_1__.AssetsGeneration
}, {
  id: "version",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Version Control", "frontis-blocks"),
  component: _SettingsComponents__WEBPACK_IMPORTED_MODULE_1__.VersionControl
}, {
  id: "editor-enhancements",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Editor Enhancements", "frontis-blocks"),
  component: _SettingsComponents__WEBPACK_IMPORTED_MODULE_1__.EditorEnhancements
}, {
  id: "performance",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Performance", "frontis-blocks"),
  component: _SettingsComponents__WEBPACK_IMPORTED_MODULE_1__.Performance
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
    tabs = _ref.tabs,
    children = _ref.children;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.name),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var handleTabChange = function handleTabChange(tabName) {
    setActiveTab(tabName);
    onSelect(tabName);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "frontis-tab-panel ".concat(className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "frontis-tab-list"
  }, tabs.map(function (tab) {
    return /*#__PURE__*/React.createElement("button", {
      key: tab.name,
      className: "frontis-tab-button ".concat(activeTab === tab.name ? activeClass : ''),
      onClick: function onClick() {
        return handleTabChange(tab.name);
      }
    }, tab.icon, /*#__PURE__*/React.createElement("span", null, tab.title));
  })), /*#__PURE__*/React.createElement("div", {
    className: "frontis-tab-content"
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
  //   console.log('ConfirmationModal rendered, isOpen:', isOpen);

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
/* harmony export */   Dashboard: () => (/* reexport safe */ _Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Integration: () => (/* reexport safe */ _Integration__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Settings: () => (/* reexport safe */ _Settings__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   TabPanel: () => (/* reexport safe */ _TabPanel__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard */ "./admin/components/Dashboard.js");
/* harmony import */ var _Blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blocks */ "./admin/components/Blocks.js");
/* harmony import */ var _Integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Integration */ "./admin/components/Integration.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Settings */ "./admin/components/Settings.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabPanel */ "./admin/components/TabPanel.js");






/***/ }),

/***/ "./admin/icons/index.js":
/*!******************************!*\
  !*** ./admin/icons/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockIcon: () => (/* binding */ BlockIcon),
/* harmony export */   Crown: () => (/* binding */ Crown),
/* harmony export */   Doc: () => (/* binding */ Doc),
/* harmony export */   FrontisIcon: () => (/* binding */ FrontisIcon),
/* harmony export */   Grid: () => (/* binding */ Grid),
/* harmony export */   HomeIcon: () => (/* binding */ HomeIcon),
/* harmony export */   IntegrationsIcon: () => (/* binding */ IntegrationsIcon),
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   Logo: () => (/* binding */ Logo),
/* harmony export */   OptionsIcon: () => (/* binding */ OptionsIcon)
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
    fill: "#1C2033",
    width: "52",
    height: "52",
    version: "1.1",
    id: "lni_lni-home",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 64 64",
    style: {
      enableBackground: "new 0 0 64 64"
    }
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M56.4,62.3H43.3c-3.2,0-5.9-2.6-5.9-5.9V45.8c0-0.8-0.6-1.4-1.4-1.4h-8c-0.8,0-1.4,0.6-1.4,1.4v10.6c0,3.3-2.6,5.9-5.9,5.9 H7.6c-3.2,0-5.9-2.6-5.9-5.9V22.7c0-1.7,0.8-3.2,2.2-4.1L29.4,2.5c1.6-1,3.6-1,5.1,0L60,18.7c1.4,0.9,2.2,2.4,2.2,4.1v33.6 C62.3,59.6,59.6,62.3,56.4,62.3z M28,39.9h8c3.3,0,5.9,2.6,5.9,5.9v10.6c0,0.8,0.6,1.4,1.4,1.4h13.1c0.8,0,1.4-0.6,1.4-1.4V22.7 c0-0.1-0.1-0.2-0.1-0.3L32.1,6.3c-0.1-0.1-0.2-0.1-0.3,0L6.4,22.4c-0.1,0.1-0.2,0.2-0.2,0.3v33.7c0,0.8,0.6,1.4,1.4,1.4h13.1 c0.8,0,1.4-0.6,1.4-1.4V45.8C22.1,42.6,24.7,39.9,28,39.9z"
  })));
};
var BlockIcon = function BlockIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "#1C2033",
    width: "52",
    height: "52",
    version: "1.1",
    id: "lni_lni-package",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 64 64",
    style: {
      enableBackground: "new 0 0 64 64"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M62,21.3l-4.5-14c-0.8-2.6-3.3-4.4-6-4.4H13.1c-2.7,0-5.1,1.7-6,4.2l-5,14.1c-0.2,0.6-0.3,1.2-0.3,1.9v30.3 c0,4.3,3.5,7.7,7.7,7.7h45.1c4.3,0,7.7-3.5,7.7-7.7V23C62.3,22.5,62.2,21.9,62,21.3z M53.2,8.7l3.7,11.6H34.3V7.4h17.2 C52.2,7.4,53,7.9,53.2,8.7z M11.3,8.6c0.3-0.7,1-1.2,1.7-1.2h16.7v12.9H7.2L11.3,8.6z M54.5,56.6H9.5c-1.8,0-3.2-1.4-3.2-3.2V24.8 h51.5v28.6C57.8,55.2,56.3,56.6,54.5,56.6z"
  }));
};
var OptionsIcon = function OptionsIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "#1C2033",
    width: "52",
    height: "52",
    version: "1.1",
    id: "lni_lni-cog",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 64 64",
    style: {
      enableBackground: "new 0 0 64 64"
    }
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M32.1,19.6c-6.8,0-12.4,5.6-12.4,12.4c0,6.9,5.6,12.4,12.4,12.4S44.5,38.9,44.5,32C44.5,25.2,38.9,19.6,32.1,19.6z M32.1,40c-4.4,0-7.9-3.6-7.9-7.9c0-4.4,3.5-7.9,7.9-7.9S40,27.7,40,32C40,36.4,36.4,40,32.1,40z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60.7,38.1l-5.6-3.1c0.2-1.1,0.3-2.2,0.3-3.3c0-1.2-0.1-2.3-0.2-3.4l5.7-3.2c1.3-0.7,1.8-2.3,1.2-3.7l-5.8-9.8 c-0.7-1.2-2.3-1.7-3.6-1.2l-6,3.3c-0.3-0.2-0.6-0.5-0.8-0.7c-1.1-0.9-2.1-1.8-3.7-2.6c-0.1,0-0.2-0.1-0.2-0.3V6.5 c0-2.6-2.1-4.8-4.8-4.8H26.9c-2.6,0-4.8,2.2-4.8,4.8l0,3.9c0,0.1-0.1,0.2-0.2,0.3c-1.5,0.7-2.6,1.7-3.8,2.6 c-0.2,0.2-0.5,0.4-0.7,0.6l-5.3-3c-2-1.1-3.7-0.4-4.4,0.8l-5.5,9.5C1.9,22,1.8,22.8,2,23.6c0.2,0.8,0.7,1.4,1.4,1.8L9,28.4 c-0.2,1-0.2,2.1-0.2,3.4c0,1.1,0.1,2.2,0.2,3.3l-5.8,3.2C1.9,39,1.4,40.6,2,42l5.8,9.8C8.5,53,10,53.5,11.4,53l6-3.3 c0.3,0.2,0.5,0.4,0.8,0.7c1.1,1,2.2,1.9,3.8,2.6c0.1,0,0.2,0.1,0.2,0.3v4.3c0,2.6,2.1,4.8,4.8,4.8h10.2c2.6,0,4.8-2.2,4.8-4.8V53 c0-0.1,0.1-0.2,0.2-0.3c1.5-0.7,2.5-1.6,3.7-2.6c0.3-0.2,0.5-0.4,0.8-0.7l5.3,3c2,1.1,3.6,0.4,4.4-0.8l5.6-9.5 c0.4-0.7,0.5-1.5,0.3-2.2S61.4,38.5,60.7,38.1z M53.1,48l-4.8-2.7c-1.4-0.8-3-0.6-4.2,0.4c-0.5,0.4-0.9,0.7-1.3,1.1 c-1,0.9-1.7,1.5-2.7,1.9c-1.6,0.8-2.7,2.5-2.7,4.3v4.4c0,0.2-0.1,0.3-0.3,0.3H26.9c-0.2,0-0.3-0.1-0.3-0.3v-4.3 c0-1.8-1.1-3.5-2.7-4.3c-1-0.5-1.8-1.1-2.8-2c-0.4-0.3-0.8-0.7-1.3-1c-0.7-0.5-1.5-0.8-2.4-0.8c-0.6,0-1.3,0.2-1.9,0.5l-4.8,2.7 l-4-6.8l4.7-2.6c1.4-0.8,2.2-2.3,2-4c-0.1-1-0.2-2-0.2-3c0-1.1,0.1-2.1,0.2-2.9c0.3-1.7-0.5-3.4-2-4.2L7,22.2l3.9-6.7l4.8,2.7 c1.4,0.8,3,0.6,4.2-0.4c0.4-0.3,0.8-0.7,1.2-1c1-0.9,1.8-1.5,2.8-2c1.7-0.8,2.7-2.5,2.7-4.3l0-3.9c0-0.2,0.1-0.3,0.3-0.3h10.2 c0.2,0,0.3,0.1,0.3,0.3v3.8c0,1.8,1.1,3.5,2.7,4.3c1,0.5,1.7,1.1,2.7,1.9c0.4,0.4,0.8,0.7,1.3,1.1c1.2,1,2.9,1.1,4.2,0.3l4.8-2.7 l4,6.8l-4.6,2.6c-1.4,0.8-2.2,2.5-1.9,4.2c0.1,0.9,0.2,1.9,0.2,2.9c0,1-0.1,2-0.3,3c-0.3,1.7,0.5,3.3,2,4.1l4.5,2.5L53.1,48z"
  })));
};
var IntegrationsIcon = function IntegrationsIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "#1C2033",
    width: "52",
    height: "52",
    version: "1.1",
    id: "lni_lni-circle-plus",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 64 64",
    style: {
      enableBackground: "new 0 0 64 64"
    }
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M42.2,29.7C42.2,29.7,42.2,29.7,42.2,29.7l-8,0l0-7.9c0-1.2-1-2.2-2.3-2.2c0,0,0,0,0,0c-1.2,0-2.2,1-2.2,2.3l0,7.9l-7.9,0 c-1.2,0-2.2,1-2.2,2.3c0,1.2,1,2.2,2.3,2.2c0,0,0,0,0,0l7.9,0l0,7.9c0,1.2,1,2.2,2.3,2.2c0,0,0,0,0,0c1.2,0,2.2-1,2.2-2.3l0-7.9 l7.9,0c1.2,0,2.2-1,2.2-2.3C44.4,30.7,43.4,29.7,42.2,29.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32,1.8C15.3,1.8,1.8,15.3,1.8,32c0,16.7,13.6,30.3,30.3,30.3c16.7,0,30.3-13.6,30.3-30.3C62.3,15.3,48.7,1.8,32,1.8z M32,57.8C17.8,57.8,6.3,46.2,6.3,32S17.8,6.3,32,6.3S57.8,17.8,57.8,32S46.2,57.8,32,57.8z"
  })));
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
    className: "wrap"
  }, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
var root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById('frontis-blocks-admin'));
root.render(/*#__PURE__*/React.createElement(FrontisBlocksAdmin, null));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map