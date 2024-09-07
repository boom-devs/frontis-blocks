/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/App.js":
/*!**********************!*\
  !*** ./admin/App.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./admin/components/index.js");
/* harmony import */ var _TabMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabMenu */ "./admin/TabMenu.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var App = function App() {
  var getInitialTab = function getInitialTab() {
    var queryParams = new URLSearchParams(window.location.search);
    return queryParams.get("tab") || "general";
  };
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialTab),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handlePopState = function handlePopState() {
      setActiveTab(getInitialTab());
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
  return /*#__PURE__*/React.createElement("div", {
    className: "frontis-blocks-admin"
  }, /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "frontis-blocks-tab-panel",
    activeClass: "active-tab",
    onSelect: handleTabChange,
    tabs: _TabMenu__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (tab) {
      return {
        name: tab.id,
        title: tab.label,
        icon: tab.icon,
        className: "frontis-".concat(tab.id, "-tab")
      };
    })
  }, function (tab) {
    var activeTabData = _TabMenu__WEBPACK_IMPORTED_MODULE_2__["default"].find(function (t) {
      return t.id === tab.name;
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "frontis-blocks-tab-content"
    }, activeTabData.comp);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./admin/TabMenu.js":
/*!**************************!*\
  !*** ./admin/TabMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




var TabMenus = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('frontis_blocks_settings_menu_list', [{
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

/***/ "./admin/components/Blocks.js":
/*!************************************!*\
  !*** ./admin/components/Blocks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);



var Blocks = function Blocks() {
  //   const blocks = useSelect((select) => select('frontis-blocks').getBlocks());

  //   const { toggleBlockStatus } = useDispatch('frontis-blocks');

  return /*#__PURE__*/React.createElement("div", {
    className: "frontis-blocks-blocks"
  }, /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blocks', 'frontis-blocks')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blocks);

/***/ }),

/***/ "./admin/components/Dashboard.js":
/*!***************************************!*\
  !*** ./admin/components/Dashboard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    className: "frontis-blocks-integration"
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);



var Settings = function Settings() {
  //   const settings = useSelect((select) => select('frontis-blocks').getSettings());
  //   const { updateSettings } = useDispatch('frontis-blocks');

  var handleSave = function handleSave() {
    // Implement save functionality
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "frontis-blocks-settings"
  }, /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'frontis-blocks')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Card, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardHeader, null, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Global Settings', 'frontis-blocks'))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./admin/components/TabPanel.js":
/*!**************************************!*\
  !*** ./admin/components/TabPanel.js ***!
  \**************************************/
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

/***/ "./admin/components/index.js":
/*!***********************************!*\
  !*** ./admin/components/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockIcon: () => (/* binding */ BlockIcon),
/* harmony export */   FrontisIcon: () => (/* binding */ FrontisIcon),
/* harmony export */   HomeIcon: () => (/* binding */ HomeIcon),
/* harmony export */   IntegrationsIcon: () => (/* binding */ IntegrationsIcon),
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

/***/ }),

/***/ "./admin/scss/admin.scss":
/*!*******************************!*\
  !*** ./admin/scss/admin.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
  }, /*#__PURE__*/React.createElement("h1", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Frontis Blocks', 'frontis-blocks')), /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)(/*#__PURE__*/React.createElement(FrontisBlocksAdmin, null), document.getElementById('frontis-blocks-admin'));
/******/ })()
;
//# sourceMappingURL=index.js.map