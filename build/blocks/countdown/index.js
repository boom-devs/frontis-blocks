/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/countdown/attributes.js":
/*!********************************************!*\
  !*** ./src/blocks/countdown/attributes.js ***!
  \********************************************/
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
  // Show Hide Label Attributes
  showDays: {
    type: 'boolean',
    "default": true
  },
  showHours: {
    type: 'boolean',
    "default": true
  },
  showMinutes: {
    type: 'boolean',
    "default": true
  },
  showSeconds: {
    type: 'boolean',
    "default": true
  },
  // Label Name Atrributes
  countDownLabelDay: {
    type: "string",
    "default": "Days"
  },
  countDownLabelHour: {
    type: "string",
    "default": "Hours"
  },
  countDownLabelMinute: {
    type: "string",
    "default": "Minutes"
  },
  countDownLabelSecond: {
    type: "string",
    "default": "Seconds"
  },
  countDownBgColor: {
    type: "string"
  },
  countDownLabelBgColorDay: {
    type: 'string',
    "default": '#6B4EFF'
  },
  countDownLabelBgColorHour: {
    type: 'string',
    "default": '#6B4EFF'
  },
  countDownLabelBgColorMinute: {
    type: 'string',
    "default": '#6B4EFF'
  },
  countDownLabelBgColorSecond: {
    type: 'string',
    "default": '#6B4EFF'
  },
  countDownTitleColor: {
    type: "string"
  },
  countDownTextColor: {
    type: "string"
  },
  countDownTitleFontSize: {
    type: "number"
  },
  countDown_Text_Font_Size: {
    type: "number"
  },
  targetDate: {
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/countdown/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/countdown/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/countdown/editor.scss");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    clientId = _ref.clientId;
  var blockID = attributes.blockID,
    countDownLabelDay = attributes.countDownLabelDay,
    countDownLabelHour = attributes.countDownLabelHour,
    countDownLabelMinute = attributes.countDownLabelMinute,
    countDownLabelSecond = attributes.countDownLabelSecond,
    countDownBgColor = attributes.countDownBgColor,
    countDownTitleColor = attributes.countDownTitleColor,
    countDownTextColor = attributes.countDownTextColor,
    countDownTitleFontSize = attributes.countDownTitleFontSize,
    countDown_Text_Font_Size = attributes.countDown_Text_Font_Size,
    targetDate = attributes.targetDate,
    showDays = attributes.showDays,
    showHours = attributes.showHours,
    showMinutes = attributes.showMinutes,
    showSeconds = attributes.showSeconds;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    timeRemaining = _useState2[0],
    setTimeRemaining = _useState2[1];

  // Set default date to one week from today
  var defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 7);
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(targetDate ? new Date(targetDate) : defaultDate),
    _useState4 = _slicedToArray(_useState3, 2),
    date = _useState4[0],
    setDate = _useState4[1];

  // Sync date with attributes if not already set
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!targetDate) {
      setAttributes({
        targetDate: defaultDate.toISOString()
      });
    }
  }, [targetDate, setAttributes, defaultDate]);

  // Update target date when date changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setAttributes({
      targetDate: date.toISOString()
    });
  }, [date, setAttributes]);

  // Generate unique block ID if not set
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!blockID) {
      setAttributes({
        blockID: "count-down-" + clientId.slice(0, 8)
      });
    }
  }, [blockID, clientId, setAttributes]);

  // Countdown Timer Logic
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    // Helper function to format time with leading zero
    var formatTime = function formatTime(time) {
      return time < 10 ? "0".concat(time) : time;
    };
    if (!targetDate || isNaN(new Date(targetDate).getTime())) return;
    var intervalId = setInterval(function () {
      var now = Date.now();
      var distance = new Date(targetDate).getTime() - now;
      var days = formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
      var hours = formatTime(Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      var minutes = formatTime(Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)));
      var seconds = formatTime(Math.floor(distance % (1000 * 60) / 1000));
      if (distance < 0) {
        clearInterval(intervalId);
        setTimeRemaining({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00"
        });
      } else {
        setTimeRemaining({
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        });
      }
    }, 1000);
    return function () {
      return clearInterval(intervalId);
    };
  }, [targetDate]);
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t#".concat(blockID, " .fb-count-down-wrapper {\n\t\t\t\t\tbackground-color: ").concat(countDownBgColor, ";\n\t\t\t\t}\n\t\t\t")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
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
      className: "fb-tab advance"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "fb-tab-controls" + tab.name
    }, tab.name === 'general' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General", "frontis-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DateTimePicker, {
      currentDate: date,
      onChange: function onChange(newDate) {
        return setDate(new Date(newDate));
      },
      is12Hour: true,
      style: {
        marginBottom: '20px'
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Days", "frontis-blocks"),
      checked: showDays,
      onChange: function onChange(value) {
        return setAttributes({
          showDays: value
        });
      },
      style: {
        marginTop: '20px'
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Hours", "frontis-blocks"),
      checked: showHours,
      onChange: function onChange(value) {
        return setAttributes({
          showHours: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Minutes", "frontis-blocks"),
      checked: showMinutes,
      onChange: function onChange(value) {
        return setAttributes({
          showMinutes: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Seconds", "frontis-blocks"),
      checked: showSeconds,
      onChange: function onChange(value) {
        return setAttributes({
          showSeconds: value
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Labels", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Days", "frontis-blocks"),
      value: countDownLabelDay,
      onChange: function onChange(value) {
        return setAttributes({
          countDownLabelDay: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hours", "frontis-blocks"),
      value: countDownLabelHour,
      onChange: function onChange(value) {
        return setAttributes({
          countDownLabelHour: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Minutes", "frontis-blocks"),
      value: countDownLabelMinute,
      onChange: function onChange(value) {
        return setAttributes({
          countDownLabelMinute: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Seconds", "frontis-blocks"),
      value: countDownLabelSecond,
      onChange: function onChange(value) {
        return setAttributes({
          countDownLabelSecond: value
        });
      }
    }))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Days", "frontis-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      className: "fb-setting-color-setting-icon-popup-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-normal-color"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: countDownBgColor,
      onChange: function onChange(value) {
        return setAttributes({
          countDownBgColor: value
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
      value: countDownBgColor,
      onChange: function onChange(value) {
        return setAttributes({
          countDownBgColor: value
        });
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title Color", "frontis-blocks"),
      className: "notic-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: countDownTitleColor,
      onChange: function onChange(value) {
        return setAttributes({
          countDownTitleColor: value
        });
      },
      enableAlpha: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Color", "frontis-blocks"),
      className: "notic-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: countDownTextColor,
      onChange: function onChange(value) {
        return setAttributes({
          countDownTextColor: value
        });
      },
      enableAlpha: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title Font Size", "frontis-blocks"),
      value: countDownTitleFontSize,
      onChange: function onChange(value) {
        return setAttributes({
          countDownTitleFontSize: value
        });
      },
      min: 1,
      max: 200
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Font Size", "frontis-blocks"),
      value: countDown_Text_Font_Size,
      onChange: function onChange(value) {
        return setAttributes({
          countDown_Text_Font_Size: value
        });
      },
      min: 1,
      max: 200
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Days Label Background Color", "frontis-blocks"),
      className: "notic-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: attributes.countDownLabelBgColorDay,
      onChange: function onChange(value) {
        return setAttributes({
          countDownLabelBgColorDay: value
        });
      },
      enableAlpha: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hours Label Background Color", "frontis-blocks"),
      className: "notic-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: attributes.countDownLabelBgColorHour,
      onChange: function onChange(value) {
        return setAttributes({
          countDownLabelBgColorHour: value
        });
      },
      enableAlpha: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Minutes Label Background Color", "frontis-blocks"),
      className: "notic-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: attributes.countDownLabelBgColorMinute,
      onChange: function onChange(value) {
        return setAttributes({
          countDownLabelBgColorMinute: value
        });
      },
      enableAlpha: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Seconds Label Background Color", "frontis-blocks"),
      className: "notic-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: attributes.countDownLabelBgColorSecond,
      onChange: function onChange(value) {
        return setAttributes({
          countDownLabelBgColorSecond: value
        });
      },
      enableAlpha: true
    })))), tab.name === "advanced" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-advanced-tab-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-z-index-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Z Index", "frontis-blocks"),
      initialOpen: true,
      className: "fb-setting-z-index-header"
    })))));
  }))), /*#__PURE__*/React.createElement("div", _extends({}, blockProps, {
    id: blockID
  }), /*#__PURE__*/React.createElement("div", {
    className: "fb-count-down-wrapper"
  }, showDays && /*#__PURE__*/React.createElement("div", {
    className: "fb-count-down-item",
    style: {
      backgroundColor: attributes.countDownLabelBgColorDay
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-time"
  }, timeRemaining.days || 0), /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-label"
  }, countDownLabelDay || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Days', 'frontis-blocks'))), showHours && /*#__PURE__*/React.createElement("div", {
    className: "fb-count-down-item",
    style: {
      backgroundColor: attributes.countDownLabelBgColorHour
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-time"
  }, timeRemaining.hours || 0), /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-label"
  }, countDownLabelHour || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hours', 'frontis-blocks'))), showMinutes && /*#__PURE__*/React.createElement("div", {
    className: "fb-count-down-item",
    style: {
      backgroundColor: attributes.countDownLabelBgColorMinute
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-time"
  }, timeRemaining.minutes || 0), /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-label"
  }, countDownLabelMinute || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Minutes', 'frontis-blocks'))), showSeconds && /*#__PURE__*/React.createElement("div", {
    className: "fb-count-down-item",
    style: {
      backgroundColor: attributes.countDownLabelBgColorSecond
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-time"
  }, timeRemaining.seconds || 0), /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-label"
  }, countDownLabelSecond || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Seconds', 'frontis-blocks'))))));
}

/***/ }),

/***/ "./src/blocks/countdown/index.js":
/*!***************************************!*\
  !*** ./src/blocks/countdown/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/countdown/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/countdown/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/countdown/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/countdown/block.json");
/* harmony import */ var _attributes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes.js */ "./src/blocks/countdown/attributes.js");



/**
 * Internal dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  attributes: _attributes_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/countdown/save.js":
/*!**************************************!*\
  !*** ./src/blocks/countdown/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }


function save(_ref) {
  var attributes = _ref.attributes;
  var blockID = attributes.blockID,
    countDownLabelDay = attributes.countDownLabelDay,
    countDownLabelHour = attributes.countDownLabelHour,
    countDownLabelMinute = attributes.countDownLabelMinute,
    countDownLabelSecond = attributes.countDownLabelSecond,
    countDownBgColor = attributes.countDownBgColor,
    countDownTitleColor = attributes.countDownTitleColor,
    countDownTextColor = attributes.countDownTextColor,
    countDownTitleFontSize = attributes.countDownTitleFontSize,
    countDown_Text_Font_Size = attributes.countDown_Text_Font_Size,
    targetDate = attributes.targetDate,
    countDownLabelBgColorDay = attributes.countDownLabelBgColorDay,
    countDownLabelBgColorHour = attributes.countDownLabelBgColorHour,
    countDownLabelBgColorMinute = attributes.countDownLabelBgColorMinute,
    countDownLabelBgColorSecond = attributes.countDownLabelBgColorSecond;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    id: blockID
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({}, blockProps, {
    "data-target-date": targetDate
  }), /*#__PURE__*/React.createElement("div", {
    className: "fb-count-down-wrapper ".concat(blockID),
    style: {
      backgroundColor: countDownBgColor
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-count-down-item",
    style: {
      backgroundColor: countDownLabelBgColorDay
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-time days",
    style: {
      color: countDownTitleColor,
      fontSize: "".concat(countDownTitleFontSize, "px")
    }
  }, "0"), /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-label",
    style: {
      color: countDownTextColor,
      fontSize: "".concat(countDown_Text_Font_Size, "px")
    }
  }, countDownLabelDay || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Days', 'woomni-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-count-down-item",
    style: {
      backgroundColor: countDownLabelBgColorHour
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-time hours",
    style: {
      color: countDownTitleColor,
      fontSize: "".concat(countDownTitleFontSize, "px")
    }
  }, "0"), /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-label",
    style: {
      color: countDownTextColor,
      fontSize: "".concat(countDown_Text_Font_Size, "px")
    }
  }, countDownLabelHour || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hours', 'woomni-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-count-down-item",
    style: {
      backgroundColor: countDownLabelBgColorMinute
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-time minutes",
    style: {
      color: countDownTitleColor,
      fontSize: "".concat(countDownTitleFontSize, "px")
    }
  }, "0"), /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-label",
    style: {
      color: countDownTextColor,
      fontSize: "".concat(countDown_Text_Font_Size, "px")
    }
  }, countDownLabelMinute || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Minutes', 'woomni-blocks'))), /*#__PURE__*/React.createElement("div", {
    className: "fb-count-down-item",
    style: {
      backgroundColor: countDownLabelBgColorSecond
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-time seconds",
    style: {
      color: countDownTitleColor,
      fontSize: "".concat(countDownTitleFontSize, "px")
    }
  }, "0"), /*#__PURE__*/React.createElement("span", {
    className: "fb-count-down-label",
    style: {
      color: countDownTextColor,
      fontSize: "".concat(countDown_Text_Font_Size, "px")
    }
  }, countDownLabelSecond || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seconds', 'woomni-blocks'))))));
}

/***/ }),

/***/ "./src/blocks/countdown/editor.scss":
/*!******************************************!*\
  !*** ./src/blocks/countdown/editor.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/countdown/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/countdown/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/blocks/countdown/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/countdown/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"frontis-blocks/countdown","version":"1.0.0","title":"Countdown","category":"frontis-blocks","icon":"clock","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"anchor":false,"align":false,"customClassName":false},"textdomain":"frontis-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/countdown/index": 0,
/******/ 			"blocks/countdown/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/countdown/style-index"], () => (__webpack_require__("./src/blocks/countdown/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map