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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BlockEdit, props), /*#__PURE__*/React.createElement("div", {
      className: "frontis-dynamic-content"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
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
    })))))));
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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
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
      var ajaxUrl = window.frontisBlocksAdmin.ajaxUrl;
      jQuery.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: {
          action: 'fb_get_post',
          security: frontisBlocksAdmin.bolck_nonce,
          post_id: selectPost,
          data_source: dataSource,
          source_field: sourceField
        },
        success: function success(response) {
          if (response.success) {
            if (response.data) {
              if (response.data && response.data.post_title) {
                updateBlockContent(response.data.post_title);
              }
              if (response.data && response.data.post_excerpt) {
                updateBlockContent(response.data.post_excerpt);
              }
              if (response.data && response.data.post_date) {
                updateBlockContent(response.data.post_date);
              }
              if (response.data && response.data.post_time) {
                updateBlockContent(response.data.post_time);
              }
              if (response.data && response.data.author_name) {
                updateBlockContent(response.data.author_name);
              }
              if (response.data && response.data.author_first_name) {
                updateBlockContent(response.data.author_first_name);
              }
              if (response.data && response.data.author_last_name) {
                updateBlockContent(response.data.author_last_name);
              }
              if (response.data && response.data.author_nickname) {
                updateBlockContent(response.data.author_nickname);
              }
              if (response.data && response.data.author_bio) {
                updateBlockContent(response.data.author_bio);
              }
              if (response.data && response.data.author_email) {
                updateBlockContent(response.data.author_email);
              }
              if (response.data && response.data.author_website) {
                updateBlockContent(response.data.author_website);
              }
            }
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