/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/dynamic-content/index.js":
/*!****************************************!*\
  !*** ./admin/dynamic-content/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _toolbar_dynamicContentPopover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toolbar/dynamicContentPopover */ "./admin/dynamic-content/toolbar/dynamicContentPopover.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./admin/dynamic-content/style.scss");
/* harmony import */ var _wordpress_editor_build_types_store_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/editor/build-types/store/reducer */ "@wordpress/editor/build-types/store/reducer");
/* harmony import */ var _wordpress_editor_build_types_store_reducer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor_build_types_store_reducer__WEBPACK_IMPORTED_MODULE_9__);


function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }













// Higher-order component to add the toolbar to all blocks
var withGlobalToolbar = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(function (BlockEdit) {
  return function (props) {
    var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];
    var toolbarButtonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
    var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)('Current Post'),
      _useState4 = _slicedToArray(_useState3, 2),
      dataSource = _useState4[0],
      setDataSource = _useState4[1];
    var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      sourceField = _useState6[0],
      setSourceField = _useState6[1];
    var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      selectPost = _useState8[0],
      setSelectPost = _useState8[1];
    var _useState9 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState0 = _slicedToArray(_useState9, 2),
      enableLink = _useState0[0],
      setEnableLink = _useState0[1];
    var _useState1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState10 = _slicedToArray(_useState1, 2),
      linkSource = _useState10[0],
      setLinkSource = _useState10[1];
    var _useState11 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      replaceContent = _useState12[0],
      setReplaceContent = _useState12[1];
    var _useState13 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      beforeText = _useState14[0],
      setBeforeText = _useState14[1];
    var _useState15 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState16 = _slicedToArray(_useState15, 2),
      afterText = _useState16[0],
      setAfterText = _useState16[1];
    var _useState17 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState18 = _slicedToArray(_useState17, 2),
      fallbackText = _useState18[0],
      setFallbackText = _useState18[1];
    var _useState19 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState20 = _slicedToArray(_useState19, 2),
      charLength = _useState20[0],
      setCharLength = _useState20[1];
    var toggleVisible = function toggleVisible() {
      setIsVisible(function (state) {
        return !state;
      });
    };
    var removePopover = function removePopover() {
      setIsVisible(false);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "frontis-dynamic-content"
    }, /*#__PURE__*/React.createElement(BlockEdit, props), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
      className: "frontis-dynamic-content",
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M10 7.99988C14.4183 7.99988 18 6.65673 18 4.99988C18 3.34302 14.4183 1.99988 10 1.99988C5.58172 1.99988 2 3.34302 2 4.99988C2 6.65673 5.58172 7.99988 10 7.99988Z",
        stroke: "#090909",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2 19C2 20.5299 5.05369 21.7923 9 21.9768",
        stroke: "#090909",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 10.8419C5.60158 11.0227 6.27434 11.1716 7 11.2818",
        stroke: "#090909",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 17.8419C5.60158 18.0227 6.27434 18.1716 7 18.2818",
        stroke: "#090909",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M18 4.99988V11.0081M2 4.99988V19.0191",
        stroke: "#090909",
        strokeWidth: "1.5",
        "stroke-linecap": "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2 11.9998C2 13.5416 5.05369 14.8138 9 14.9998",
        stroke: "#090909",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 15.5L13.001 16.8336C13.0514 16.9006 13.158 16.8798 13.1831 16.7998C13.6929 15.1771 15.209 14 17 14C18.4914 14 19.7922 14.8162 20.48 16.0264",
        stroke: "#090909",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M21.48 20.5L20.4789 19.1664C20.4286 19.0994 20.322 19.1202 20.2968 19.2002C19.7871 20.8229 18.271 22 16.48 22C14.9886 22 13.6878 21.1838 13 19.9736",
        stroke: "#090909",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      })),
      onClick: toggleVisible,
      ref: toolbarButtonRef
    }), isVisible && toolbarButtonRef.current && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Popover, {
      anchor: toolbarButtonRef.current
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px'
      },
      className: "frontis-dynamic-content-popover"
    }, /*#__PURE__*/React.createElement(_toolbar_dynamicContentPopover__WEBPACK_IMPORTED_MODULE_7__["default"], {
      dataSource: dataSource,
      setDataSource: setDataSource,
      sourceField: sourceField,
      setSourceField: setSourceField,
      selectPost: selectPost,
      setSelectPost: setSelectPost,
      enableLink: enableLink,
      setEnableLink: setEnableLink,
      linkSource: linkSource,
      setLinkSource: setLinkSource,
      replaceContent: replaceContent,
      setReplaceContent: setReplaceContent,
      beforeText: beforeText,
      setBeforeText: setBeforeText,
      afterText: afterText,
      setAfterText: setAfterText,
      fallbackText: fallbackText,
      setFallbackText: setFallbackText,
      charLength: charLength,
      setCharLength: setCharLength
    }))))));
  };
}, 'withGlobalToolbar');

// Apply the filter to add the toolbar to all blocks
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockEdit', 'frontis-blocks/global-toolbar', withGlobalToolbar);

/***/ }),

/***/ "./admin/dynamic-content/style.scss":
/*!******************************************!*\
  !*** ./admin/dynamic-content/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./admin/dynamic-content/toolbar/dynamicContentPopover.js":
/*!****************************************************************!*\
  !*** ./admin/dynamic-content/toolbar/dynamicContentPopover.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var DynamicContentPopover = function DynamicContentPopover(_ref) {
  var dataSource = _ref.dataSource,
    setDataSource = _ref.setDataSource,
    sourceField = _ref.sourceField,
    setSourceField = _ref.setSourceField,
    selectPost = _ref.selectPost,
    setSelectPost = _ref.setSelectPost,
    enableLink = _ref.enableLink,
    setEnableLink = _ref.setEnableLink,
    linkSource = _ref.linkSource,
    setLinkSource = _ref.setLinkSource,
    replaceContent = _ref.replaceContent,
    setReplaceContent = _ref.setReplaceContent,
    beforeText = _ref.beforeText,
    setBeforeText = _ref.setBeforeText,
    afterText = _ref.afterText,
    setAfterText = _ref.setAfterText,
    fallbackText = _ref.fallbackText,
    setFallbackText = _ref.setFallbackText,
    charLength = _ref.charLength,
    setCharLength = _ref.setCharLength;
  var selectedBlockId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
    return select('core/block-editor').getSelectedBlockClientId();
  }, []);
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    posts = _useState2[0],
    setPosts = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(frontisBlocksAdmin.all_posts),
    _useState6 = _slicedToArray(_useState5, 2),
    allPosts = _useState6[0],
    setAllPosts = _useState6[1];

  // Get the dispatch function to update block attributes
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/block-editor'),
    updateBlockAttributes = _useDispatch.updateBlockAttributes;

  // useEffect(() => {
  // 	if (selectedBlockId) {
  // 		// Example: Update an attribute called 'customText' for the selected block
  // 		updateBlockAttributes(selectedBlockId, {
  // 			headingText: 'Updated via script',
  // 		});
  // 	}
  // }, [selectedBlockId, updateBlockAttributes]);

  // Get the selected block's client ID and attributes
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      var clientId = select('core/block-editor').getSelectedBlockClientId();
      return {
        selectedBlockId: clientId,
        selectedBlockAttributes: clientId ? select('core/block-editor').getBlockAttributes(clientId) : null
      };
    }, []),
    testSelectedBlockId = _useSelect.testSelectedBlockId,
    selectedBlockAttributes = _useSelect.selectedBlockAttributes;
  console.log(selectedBlockAttributes);
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    initialValues = _useState8[0],
    setInitialValues = _useState8[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setInitialValues({
      dataSource: dataSource,
      sourceField: sourceField,
      selectPost: selectPost,
      enableLink: enableLink,
      linkSource: linkSource,
      replaceContent: replaceContent,
      beforeText: beforeText,
      afterText: afterText,
      fallbackText: fallbackText,
      charLength: charLength
    });
  }, []);
  var hasChanges = dataSource !== initialValues.item || sourceField !== initialValues.sourceField || selectPost !== initialValues.selectPost || enableLink !== initialValues.enableLink || linkSource !== initialValues.linkSource || replaceContent !== initialValues.replaceContent || beforeText !== initialValues.beforeText || afterText !== initialValues.afterText || fallbackText !== initialValues.fallbackText || charLength !== initialValues.charLength;

  // Get all post types
  var postTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
    var types = select('core').getPostTypes({
      per_page: -1
    }) || [];
    // Filter out non-public post types or specific ones you don't want
    return types.filter(function (type) {
      return type.viewable &&
      // Only include viewable post types
      !['attachment', 'nav_menu_item', 'wp_block'].includes(type.slug);
    } // Exclude unwanted types
    );
  }, []);

  // Fetch posts using useSelect
  // const fetchedPosts = useSelect(
  // 	(select) => {
  // 		return select('core').getEntityRecords('postType', postType, {
  // 			per_page: -1, // Fetch all posts (up to REST API limit of 100)
  // 			status: 'publish',
  // 		});
  // 	},
  // 	[postType] // Re-run when postType changes
  // );
  //
  // // Update posts when fetchedPosts changes
  // useEffect(() => {
  // 	if (fetchedPosts !== null) {
  // 		setPosts(fetchedPosts);
  // 		setIsLoading(false);
  // 	}
  // }, [fetchedPosts]);

  // Attribute update functions
  // const updateDynamicContentAttrs = () => {
  // 	return {
  // 	};
  // };

  var updateBlockContent = function updateBlockContent(text) {
    // Update both headingText and dynamicContent in a single call
    updateBlockAttributes(selectedBlockId, {
      headingText: text,
      dynamicAttrs: {
        dataSource: dataSource,
        selectPost: selectPost,
        sourceField: sourceField
      }
    });
    // console.log('Updated attrs', attributes);
  };
  var updateBlockDynamicContent = function updateBlockDynamicContent() {
    if (dataSource === 'post_type' && selectPost) {

      // // Determine the REST API endpoint based on post type
      // const postTypeEndpoint = postType === 'page' ? 'pages' : postType === 'post' ? 'posts' : 'posts';
      // console.log(postTypeEndpoint);
      // // First fetch the post/page/custom post type data
      // apiFetch({
      // 	path: `/wp/v2/${postTypeEndpoint}/${selectPost}`
      // }).then(post => {
      // 	console.log('Fetched post data:', post);
      //
      // 	// Handle different field types
      // 	switch(sourceField) {
      // 		// Post fields
      // 		case 'post_title':
      // 			console.log(post.title?.rendered)
      // 			updateBlockContent(post.title?.rendered || '');
      // 			break;
      // 		case 'post_excerpt':
      // 			updateBlockContent(post.excerpt?.rendered || '');
      // 			break;
      // 		case 'post_date':
      // 			updateBlockContent(formatDate(post.date));
      // 			break;
      // 		case 'post_time':
      // 			updateBlockContent(formatTime(post.date));
      // 			break;
      // 		case 'post_id':
      // 			updateBlockContent(post.id.toString());
      // 			break;
      // 		case 'comments_number':
      // 			updateBlockContent(post.comment_count?.toString() || '0');
      // 			break;
      // 		case 'post_custom_field':
      // 		case 'post_terms':
      // 			// Handle these special cases separately
      // 			break;
      //
      // 		// Author fields - need additional API call
      // 		default:
      // 			if (sourceField.startsWith('author_')) {
      // 				return fetchAuthorData(post.author, sourceField);
      // 			}
      // 			break;
      // 	}
      // }).catch(error => {
      // 	console.error('Error fetching post data:', error);
      // });
    }
  };

  // Helper function to fetch author data
  var fetchAuthorData = function fetchAuthorData(authorId, field) {
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: "/wp/v2/users/".concat(authorId)
    }).then(function (user) {
      var content = '';
      switch (field) {
        case 'author_name':
          content = user.name;
          break;
        case 'author_first_name':
          content = user.first_name;
          break;
        case 'author_last_name':
          content = user.last_name;
          break;
        case 'author_nickname':
          content = user.nickname;
          break;
        case 'author_bio':
          content = user.description;
          break;
        case 'author_email':
          content = user.email;
          break;
        case 'author_website':
          content = user.url;
          break;
        case 'author_custom_field':
          // Handle custom fields
          break;
      }
      updateBlockContent(content);
      return content;
    })["catch"](function (error) {
      console.error('Error fetching author data:', error);
    });
  };
  console.log(allPosts);

  // Helper functions for date/time formatting
  var formatDate = function formatDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString();
  };
  var formatTime = function formatTime(dateString) {
    var date = new Date(dateString);
    return date.toLocaleTimeString();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "frontis-dynamic-content-wrap",
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "frontis-dynamic-content-fields"
  }, /*#__PURE__*/React.createElement("div", {
    className: "frontis-dynamic-content-text-control"
  }, /*#__PURE__*/React.createElement("label", {
    className: "frontis-dynamic-content-text-control__label",
    htmlFor: "data-source"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Data Source')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    id: "data-source",
    value: dataSource,
    onChange: function onChange(selection) {
      return setDataSource(selection);
    },
    className: "frontis-dynamic-content-popover-posttype"
  }, /*#__PURE__*/React.createElement("optgroup", {
    label: "Post"
  }, /*#__PURE__*/React.createElement("option", {
    value: "current_post"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Current Post')), /*#__PURE__*/React.createElement("option", {
    value: "post_type"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Type'))), /*#__PURE__*/React.createElement("optgroup", {
    label: "Archive"
  }, /*#__PURE__*/React.createElement("option", {
    value: "archive_description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Archive Description')), /*#__PURE__*/React.createElement("option", {
    value: "archive_custom_field"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Archive Custom Field')), /*#__PURE__*/React.createElement("option", {
    value: "archive_title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Archive Title'))), /*#__PURE__*/React.createElement("optgroup", {
    label: "Site"
  }, /*#__PURE__*/React.createElement("option", {
    value: "site_tagline"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Site Tagline')), /*#__PURE__*/React.createElement("option", {
    value: "site_title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Site Title')), /*#__PURE__*/React.createElement("option", {
    value: "request_parameter"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Request Parameter')), /*#__PURE__*/React.createElement("option", {
    value: "shortcode"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shortcode')), /*#__PURE__*/React.createElement("option", {
    value: "user_custom_field - Current User"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('User Custom Field - Current User'))))), dataSource === 'post_type' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "frontis-dynamic-content-text-control"
  }, /*#__PURE__*/React.createElement("label", {
    className: "frontis-dynamic-content-text-control__label",
    htmlFor: "select-post"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select post')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    id: "select-post",
    value: selectPost,
    onChange: function onChange(selection) {
      return setSelectPost(selection);
    },
    className: "frontis-dynamic-content-popover-posttype"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select post')), Object.entries(allPosts).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      postType = _ref3[0],
      posts = _ref3[1];
    return /*#__PURE__*/React.createElement("optgroup", {
      key: postType,
      label: postType
    }, posts.map(function (post) {
      return /*#__PURE__*/React.createElement("option", {
        key: post.ID,
        value: post.ID
      }, post.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Title'));
    }));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "frontis-dynamic-content-text-control"
  }, /*#__PURE__*/React.createElement("label", {
    className: "frontis-dynamic-content-text-control__label",
    htmlFor: "source-field"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Source field')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    id: "source-field",
    value: sourceField,
    onChange: function onChange(selection) {
      return setSourceField(selection);
    },
    className: "frontis-dynamic-content-popover-posttype"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select source field')), /*#__PURE__*/React.createElement("optgroup", {
    label: "Post"
  }, /*#__PURE__*/React.createElement("option", {
    value: "post_title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Title')), /*#__PURE__*/React.createElement("option", {
    value: "post_excerpt"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Excerpt')), /*#__PURE__*/React.createElement("option", {
    value: "featured_image"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Featured Image')), /*#__PURE__*/React.createElement("option", {
    value: "post_custom_field"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Custom Field')), /*#__PURE__*/React.createElement("option", {
    value: "post_date"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Date')), /*#__PURE__*/React.createElement("option", {
    value: "post_time"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Time')), /*#__PURE__*/React.createElement("option", {
    value: "post_terms"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Terms')), /*#__PURE__*/React.createElement("option", {
    value: "post_id"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post ID')), /*#__PURE__*/React.createElement("option", {
    value: "comments_number"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comments Number'))), /*#__PURE__*/React.createElement("optgroup", {
    label: "Author"
  }, /*#__PURE__*/React.createElement("option", {
    value: "author_name"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name')), /*#__PURE__*/React.createElement("option", {
    value: "author_first_name"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('First Name')), /*#__PURE__*/React.createElement("option", {
    value: "author_last_name"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Last Name')), /*#__PURE__*/React.createElement("option", {
    value: "author_nickname"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Nickname')), /*#__PURE__*/React.createElement("option", {
    value: "author_bio"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bio')), /*#__PURE__*/React.createElement("option", {
    value: "author_email"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email')), /*#__PURE__*/React.createElement("option", {
    value: "author_website"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Website')), /*#__PURE__*/React.createElement("option", {
    value: "author_avatar_image_url"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Avatar Image URL')), /*#__PURE__*/React.createElement("option", {
    value: "author_custom_field"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author Custom Field'))))), /*#__PURE__*/React.createElement("div", {
    className: "frontis-dynamic-content-text-control"
  }, /*#__PURE__*/React.createElement("label", {
    className: "frontis-dynamic-content-text-control__label",
    htmlFor: "data-source"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable link')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    checked: enableLink,
    onChange: function onChange(value) {
      return setEnableLink(value);
    },
    className: "frontis-dynamic-content-toggle"
  })), enableLink && /*#__PURE__*/React.createElement("div", {
    className: "frontis-dynamic-content-text-control"
  }, /*#__PURE__*/React.createElement("label", {
    className: "frontis-dynamic-content-text-control__label",
    htmlFor: "link-source"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Source')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    id: "link-source",
    value: linkSource,
    onChange: function onChange(selection) {
      return setLinkSource(selection);
    },
    className: "frontis-dynamic-content-popover-posttype"
  }, /*#__PURE__*/React.createElement("optgroup", {
    label: "Post"
  }, /*#__PURE__*/React.createElement("option", {
    value: "post_permalink"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Permalink')), /*#__PURE__*/React.createElement("option", {
    value: "comments_area"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comments Area')), /*#__PURE__*/React.createElement("option", {
    value: "featured_image"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Featured Image')), /*#__PURE__*/React.createElement("option", {
    value: "post_custom_field"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Custom Field'))), /*#__PURE__*/React.createElement("optgroup", {
    label: "Author"
  }, /*#__PURE__*/React.createElement("option", {
    value: "avatar_profile_url)"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Avatar (Profile URL)')), /*#__PURE__*/React.createElement("option", {
    value: "author_custom_field"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author Custom Field')), /*#__PURE__*/React.createElement("option", {
    value: "author_archive_url"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author Archive URL')), /*#__PURE__*/React.createElement("option", {
    value: "author_page_url"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author Page URL'))), /*#__PURE__*/React.createElement("option", {
    value: "custom_link"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom link')))), /*#__PURE__*/React.createElement("div", {
    className: "frontis-dynamic-content-text-control"
  }, /*#__PURE__*/React.createElement("label", {
    className: "frontis-dynamic-content-text-control__label",
    htmlFor: "replace-full"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace Full Content')), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    checked: replaceContent,
    onChange: function onChange(value) {
      return setReplaceContent(value);
    },
    className: "frontis-dynamic-content-toggle"
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    className: "frontis-dynamic-content-advance",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced'),
    initialOpen: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "components-base-control",
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Before'),
    value: beforeText,
    onChange: function onChange(value) {
      return setBeforeText(value);
    },
    className: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "components-base-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('After'),
    value: afterText,
    onChange: function onChange(value) {
      return setAfterText(value);
    },
    className: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "components-base-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fallback'),
    value: fallbackText,
    onChange: function onChange(value) {
      return setFallbackText(value);
    },
    className: "",
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show this text if no dynamic data is found.')
  })), /*#__PURE__*/React.createElement("div", {
    className: "components-base-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Character Length'),
    type: "number",
    value: charLength,
    onChange: function onChange(value) {
      return setCharLength(value);
    },
    className: ""
  }))), hasChanges && /*#__PURE__*/React.createElement("div", {
    className: 'frontis-dynamic-content-apply-btn',
    style: {
      textAlign: 'center',
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "primary",
    onClick: function onClick() {
      return updateBlockDynamicContent();
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Apply')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicContentPopover);

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/editor/build-types/store/reducer":
/*!*********************************************************!*\
  !*** external ["wp","editor/buildTypes/store/reducer"] ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = window["wp"]["editor/buildTypes/store/reducer"];

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
/******/ 			"dynamicContent": 0,
/******/ 			"./style-dynamicContent": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-dynamicContent"], () => (__webpack_require__("./admin/dynamic-content/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=dynamicContent.js.map