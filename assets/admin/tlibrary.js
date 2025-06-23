/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/template-library/data.json":
/*!******************************************!*\
  !*** ./admin/template-library/data.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":{"patterns":{"name":"Patterns","categories":[{"id":"all","name":"All","count":30,"items":[{"id":"pattern1","title":"Pattern 1","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-3.webp","content":"Pattern 1 content here"},{"id":"pattern2","title":"Pattern 2","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-2.webp","content":"Pattern 2 content here"},{"id":"pattern3","title":"Pattern 3","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-3.webp","content":"Pattern 3 content here"},{"id":"pattern4","title":"Pattern 4","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-2.webp","content":"Pattern 4 content here"},{"id":"pattern5","title":"Pattern 5","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-3.webp","content":"Pattern 5 content here"},{"id":"pattern6","title":"Pattern 6","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-2.webp","content":"Pattern 6 content here"},{"id":"pattern15","title":"Pattern 15","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-3.webp","content":"Pattern 15 content here"}]},{"id":"content-blocks","name":"Content Blocks","count":14,"items":[{"id":"pattern1","title":"Pattern 1","image":"pattern1.jpg","content":"Pattern 1 content here"}]},{"id":"creative","name":"Creative","count":5,"items":[]},{"id":"dynamic","name":"Dynamic","count":30,"items":[]},{"id":"layout","name":"Layout","count":30,"items":[]},{"id":"form","name":"Form","count":30,"items":[]},{"id":"social","name":"Social","count":30,"items":[]}]},"pages":{"name":"Pages","categories":[{"id":"all","name":"All","count":30,"items":[{"id":"page1","title":"Page 1","image":"Page.jpg","content":"Page 1 content here"},{"id":"page2","title":"Page 2","image":"Page.jpg","content":"Page 2 content here"},{"id":"page3","title":"Pattern 3","image":"Page.jpg","content":"Page 3 content here"}]},{"id":"content-blocks","name":"Content Blocks","count":14,"items":[]},{"id":"creative","name":"Creative","count":5,"items":[]},{"id":"dynamic","name":"Dynamic","count":30,"items":[]},{"id":"layout","name":"Layout","count":30,"items":[]},{"id":"form","name":"Form","count":30,"items":[]},{"id":"social","name":"Social","count":30,"items":[]}]},"sites":{"name":"Sites","categories":[{"id":"all","name":"All","count":30,"items":[{"id":"item1","title":"Item 1","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/temp-1.svg","content":"Site 1 content here"},{"id":"item2","title":"Item 2","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-2.webp","content":"Site 2 content here"},{"id":"item3","title":"Item 3","image":"http://localhost/test-wp/wp-content/plugins/frontis-blocks/assets/images/blog-3.webp","content":"Site 3 content here"}]},{"id":"content-blocks","name":"Content Blocks","count":14,"items":[]},{"id":"creative","name":"Creative","count":5,"items":[]},{"id":"dynamic","name":"Dynamic","count":30,"items":[]},{"id":"layout","name":"Layout","count":30,"items":[]},{"id":"form","name":"Form","count":30,"items":[]},{"id":"social","name":"Social","count":30,"items":[]}]},"template-library":{"name":"Template Library","categories":[{"id":"all","name":"All","count":30,"items":[]},{"id":"content-blocks","name":"Content Blocks","count":14,"items":[]},{"id":"creative","name":"Creative","count":5,"items":[]}]}}}');

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
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/style.scss */ "./admin/template-library/scss/style.scss");




document.addEventListener('DOMContentLoaded', function () {
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

/***/ "./admin/template-library/scss/style.scss":
/*!************************************************!*\
  !*** ./admin/template-library/scss/style.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/esm/ClipLoader.js");
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
  }, /*#__PURE__*/React.createElement("span", null, isLoading ? 'Importing...' : 'Import'), isLoading ? /*#__PURE__*/React.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  })))))), /*#__PURE__*/React.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
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
    width: "65",
    height: "24",
    viewBox: "0 0 65 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.1347 9.1084C21.1383 9.17269 21.1334 9.23697 21.1188 9.30126L19.7621 15.0111C19.6937 15.2991 19.4492 15.501 19.1669 15.5023L11.0244 15.546H2.87833C2.59478 15.546 2.34789 15.3428 2.27944 15.0535L0.922778 9.32312C0.906889 9.25755 0.903222 9.19069 0.906889 9.12512C0.643932 9.03812 0.414206 8.86517 0.251109 8.6314C0.0880115 8.39763 4.5654e-05 8.11523 0 7.82526C0 7.46381 0.136496 7.11716 0.379459 6.86157C0.622423 6.60599 0.951953 6.4624 1.29556 6.4624C1.63916 6.4624 1.96869 6.60599 2.21165 6.86157C2.45462 7.11716 2.59111 7.46381 2.59111 7.82526C2.59094 8.02642 2.54844 8.22504 2.46666 8.40688C2.38488 8.58872 2.26585 8.74926 2.11811 8.87697L3.817 10.6783C4.246 11.1334 4.84244 11.3944 5.45233 11.3944C6.17344 11.3944 6.86033 11.0344 7.293 10.4314L10.0846 6.53955C9.84989 6.29269 9.70444 5.95197 9.70444 5.57655C9.70428 5.39746 9.73768 5.22011 9.80271 5.05461C9.86775 4.88911 9.96315 4.73872 10.0835 4.61203C10.2038 4.48534 10.3467 4.38484 10.5039 4.31627C10.6612 4.2477 10.8298 4.2124 11 4.2124C11.1701 4.2124 11.3386 4.24765 11.4958 4.31614C11.653 4.38463 11.7958 4.48502 11.9161 4.61157C12.0364 4.73813 12.1318 4.88837 12.1969 5.05372C12.262 5.21907 12.2956 5.39629 12.2956 5.57526C12.2956 5.93912 12.1587 6.27083 11.9362 6.51512L14.7107 10.4211C15.1433 11.0305 15.8327 11.3944 16.5562 11.3944C16.8589 11.3955 17.1588 11.3333 17.4385 11.2115C17.7182 11.0897 17.9721 10.9106 18.1854 10.6847L19.8953 8.88597C19.6869 8.70906 19.5357 8.46853 19.4625 8.19749C19.3893 7.92644 19.3978 7.63821 19.4868 7.37246C19.5758 7.1067 19.7409 6.8765 19.9594 6.71353C20.1779 6.55055 20.439 6.46282 20.7069 6.4624C21.0115 6.46397 21.3059 6.57841 21.5383 6.78563C21.7707 6.99285 21.9262 7.27959 21.9776 7.59548C22.0289 7.91136 21.9728 8.23618 21.8191 8.51287C21.6654 8.78956 21.4239 9.00042 21.1371 9.1084H21.1347ZM19.6289 17.58C19.6289 17.2213 19.3527 16.9307 19.0117 16.9307H3.05678C2.71578 16.9307 2.43956 17.2213 2.43956 17.58V19.137C2.43956 19.4957 2.71578 19.7863 3.05678 19.7863H19.0117C19.3527 19.7863 19.6289 19.4957 19.6289 19.137V17.58Z",
    fill: "#F89B2E"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 4.5C28 2.29086 29.7909 0.5 32 0.5H61C63.2091 0.5 65 2.29086 65 4.5V19.5C65 21.7091 63.2091 23.5 61 23.5H32C29.7909 23.5 28 21.7091 28 19.5V4.5Z",
    fill: "#F89B2E"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36.7 15.5V8.3H39.675C39.745 8.3 39.835 8.30333 39.945 8.31C40.055 8.31333 40.1567 8.32333 40.25 8.34C40.6667 8.40333 41.01 8.54167 41.28 8.755C41.5533 8.96833 41.755 9.23833 41.885 9.565C42.0183 9.88833 42.085 10.2483 42.085 10.645C42.085 11.0383 42.0183 11.3983 41.885 11.725C41.7517 12.0483 41.5483 12.3167 41.275 12.53C41.005 12.7433 40.6633 12.8817 40.25 12.945C40.1567 12.9583 40.0533 12.9683 39.94 12.975C39.83 12.9817 39.7417 12.985 39.675 12.985H37.905V15.5H36.7ZM37.905 11.86H39.625C39.6917 11.86 39.7667 11.8567 39.85 11.85C39.9333 11.8433 40.01 11.83 40.08 11.81C40.28 11.76 40.4367 11.6717 40.55 11.545C40.6667 11.4183 40.7483 11.275 40.795 11.115C40.845 10.955 40.87 10.7983 40.87 10.645C40.87 10.4917 40.845 10.335 40.795 10.175C40.7483 10.0117 40.6667 9.86667 40.55 9.74C40.4367 9.61333 40.28 9.525 40.08 9.475C40.01 9.455 39.9333 9.44333 39.85 9.44C39.7667 9.43333 39.6917 9.43 39.625 9.43H37.905V11.86ZM43.0867 15.5V8.3H46.0617C46.1317 8.3 46.2217 8.30333 46.3317 8.31C46.4417 8.31333 46.5434 8.32333 46.6367 8.34C47.0534 8.40333 47.3967 8.54167 47.6667 8.755C47.9401 8.96833 48.1417 9.23833 48.2717 9.565C48.4051 9.88833 48.4717 10.2483 48.4717 10.645C48.4717 11.2317 48.3234 11.7367 48.0267 12.16C47.7301 12.58 47.2751 12.84 46.6617 12.94L46.1467 12.985H44.2917V15.5H43.0867ZM47.2217 15.5L45.8017 12.57L47.0267 12.3L48.5867 15.5H47.2217ZM44.2917 11.86H46.0117C46.0784 11.86 46.1534 11.8567 46.2367 11.85C46.3201 11.8433 46.3967 11.83 46.4667 11.81C46.6667 11.76 46.8234 11.6717 46.9367 11.545C47.0534 11.4183 47.1351 11.275 47.1817 11.115C47.2317 10.955 47.2567 10.7983 47.2567 10.645C47.2567 10.4917 47.2317 10.335 47.1817 10.175C47.1351 10.0117 47.0534 9.86667 46.9367 9.74C46.8234 9.61333 46.6667 9.525 46.4667 9.475C46.3967 9.455 46.3201 9.44333 46.2367 9.44C46.1534 9.43333 46.0784 9.43 46.0117 9.43H44.2917V11.86ZM52.7333 15.65C52.0133 15.65 51.3966 15.4933 50.8833 15.18C50.3699 14.8633 49.9749 14.4233 49.6983 13.86C49.4249 13.2967 49.2883 12.6433 49.2883 11.9C49.2883 11.1567 49.4249 10.5033 49.6983 9.94C49.9749 9.37667 50.3699 8.93833 50.8833 8.625C51.3966 8.30833 52.0133 8.15 52.7333 8.15C53.4533 8.15 54.0699 8.30833 54.5833 8.625C55.0999 8.93833 55.4949 9.37667 55.7683 9.94C56.0449 10.5033 56.1833 11.1567 56.1833 11.9C56.1833 12.6433 56.0449 13.2967 55.7683 13.86C55.4949 14.4233 55.0999 14.8633 54.5833 15.18C54.0699 15.4933 53.4533 15.65 52.7333 15.65ZM52.7333 14.515C53.2166 14.5183 53.6183 14.4117 53.9383 14.195C54.2616 13.9783 54.5033 13.6733 54.6633 13.28C54.8266 12.8867 54.9083 12.4267 54.9083 11.9C54.9083 11.3733 54.8266 10.9167 54.6633 10.53C54.5033 10.14 54.2616 9.83667 53.9383 9.62C53.6183 9.40333 53.2166 9.29167 52.7333 9.285C52.2499 9.28167 51.8483 9.38833 51.5283 9.605C51.2083 9.82167 50.9666 10.1267 50.8033 10.52C50.6433 10.9133 50.5633 11.3733 50.5633 11.9C50.5633 12.4267 50.6433 12.885 50.8033 13.275C50.9633 13.6617 51.2033 13.9633 51.5233 14.18C51.8466 14.3967 52.2499 14.5083 52.7333 14.515Z",
    fill: "white"
  }));
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
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-header-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-search-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-search-input-wrapper"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    "clip-path": "url(#clip0_12579_13019)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7.66659",
    cy: "7.66665",
    r: "6.33333",
    stroke: "#6A758E",
    "stroke-width": "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.3333 12.3333L14.6666 14.6666",
    stroke: "#6A758E",
    "stroke-width": "1.5",
    "stroke-linecap": "round"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_12579_13019"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "16",
    height: "16",
    fill: "white"
  })))), /*#__PURE__*/React.createElement("input", {
    type: "search",
    placeholder: "Search Blocks"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-template-library-user-profile"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z",
    fill: "#3991FF"
  }))))));
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
    className: "fb-template-category-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-template-category-label"
  }, /*#__PURE__*/React.createElement("h2", null, "Categories")), /*#__PURE__*/React.createElement("div", {
    className: "fb-template-category"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-tl-free"
  }, "Free"), /*#__PURE__*/React.createElement("span", {
    className: "fb-tl-pro"
  }, "Pro"))), /*#__PURE__*/React.createElement("div", {
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

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

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