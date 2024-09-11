/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/info-box/attributes.js":
/*!*******************************************!*\
  !*** ./src/blocks/info-box/attributes.js ***!
  \*******************************************/
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
  infoBoxBg: {
    type: 'string',
    "default": ''
  },
  infoMediaUrl: {
    type: 'string',
    "default": ''
  },
  height: {
    type: 'number',
    "default": 50
  },
  width: {
    type: 'number',
    "default": 50
  },
  boxBgColor: {
    type: 'string',
    "default": '#fff'
  },
  titleColor: {
    type: 'string',
    "default": '#000'
  },
  borderRadius: {
    type: 'number',
    "default": 0
  },
  titleText: {
    type: 'string',
    "default": 'Icon Box title'
  },
  wrapperAlignment: {
    type: "string",
    "default": "left"
  },
  descAlignment: {
    type: "string",
    "default": "left"
  },
  buttonAlignment: {
    type: "string",
    "default": "left"
  },
  Alignment: {
    type: "string",
    "default": "left"
  },
  Heading_Text: {
    type: "string",
    "default": "Info Title"
  },
  Heading_Tag: {
    type: "string",
    "default": "h2"
  },
  Heading_Font_Family: {
    type: "string",
    "default": "inherit"
  },
  Heading_Font_Size: {
    type: "number",
    "default": 35
  },
  Heading_Font_size_units: {
    type: "string",
    "default": "px"
  },
  Heading_Font_Weight: {
    type: "string",
    "default": "700"
  },
  Heading_Font_Style: {
    type: "string",
    "default": "normal"
  },
  Heading_Text_Transform: {
    type: "string",
    "default": "none"
  },
  Heading_Text_Decoration: {
    type: "string",
    "default": "none"
  },
  Heading_Letter_Spacing: {
    type: "number"
  },
  Heading_Letter_Spacing_units: {
    type: "string",
    "default": "px"
  },
  Heading_Line_Height: {
    type: "number"
  },
  Heading_Line_Height_units: {
    type: "string",
    "default": "px"
  },
  Heading_Color_Switcher: {
    type: "string",
    "default": "normal"
  },
  Heading_Color: {
    type: "string"
  },
  Heading_Hover_Color: {
    type: 'string'
  },
  Heading_Background_Color: {
    type: 'string'
  },
  Heading_Border: {
    type: 'string',
    "default": "none"
  },
  Heading_Border_Color: {
    type: 'string'
  },
  Heading_Border_Hover_Color: {
    type: 'string'
  },
  Heading_Border_Color_Switcher: {
    type: "string",
    "default": "normal"
  },
  Heading_Border_units: {
    type: "string",
    "default": "px"
  },
  Heading_Desktop_Border_Width: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  Heading_Tab_Border_Width: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  Heading_Mobile_Border_Width: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  activeBorderDevice: {
    type: "string",
    "default": "desktop"
  },
  borderLink: {
    type: "boolean",
    "default": true
  },
  Heading_Border_radius_units: {
    type: "string",
    "default": "px"
  },
  Heading_Desktop_Border_radius_Width: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  Heading_Tab_Border_radius_Width: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  Heading_Mobile_Border_radius_Width: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  activeBorderRadiusDevice: {
    type: "string",
    "default": "desktop"
  },
  borderRadiusLink: {
    type: "boolean",
    "default": true
  },
  Heading_padding_units: {
    type: "string",
    "default": "px"
  },
  Heading_Desktop_padding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  Heading_Tab_padding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  Heading_Mobile_padding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  activePaddingDevice: {
    type: "string",
    "default": "desktop"
  },
  paddingLink: {
    type: "boolean",
    "default": true
  },
  Heading_Margin_Units: {
    type: "string",
    "default": "px"
  },
  Heading_Desktop_Margin: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  Heading_Tab_Margin: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  Heading_Mobile_Margin: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  Heading_Active_Margin_Device: {
    type: "string",
    "default": "desktop"
  },
  Heading_Margin_Link: {
    type: "boolean",
    "default": true
  },
  //Sub Heading
  SubHeadingFontFamily: {
    type: "string",
    "default": "inherit"
  },
  SubHeadingFontSize: {
    type: "number",
    "default": 35
  },
  SubHeadingFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  SubHeadingFontWeight: {
    type: "string",
    "default": "700"
  },
  SubHeadingFontStyle: {
    type: "string",
    "default": "normal"
  },
  SubHeadingTextTransform: {
    type: "string",
    "default": "none"
  },
  SubHeadingTextDecoration: {
    type: "string",
    "default": "none"
  },
  SubHeadingLetterSpacing: {
    type: "number"
  },
  SubHeadingLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  SubHeadingLineHeight: {
    type: "number"
  },
  SubHeadingLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  SubHeadingColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  SubHeadingColor: {
    type: "string"
  },
  SubHeadingHoverColor: {
    type: "string"
  },
  Sub_Heading_Text: {
    type: "string",
    "default": "Info Description"
  },
  Sub_Heading_Tag: {
    type: "string",
    "default": "p"
  },
  Sub_Heading_Switcher: {
    type: "boolean",
    "default": false
  },
  Sub_Heading_Position: {
    type: "string",
    "default": "bottom"
  },
  SubHeadingPaddingUnits: {
    type: "string",
    "default": "px"
  },
  SubHeadingDesktopPadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  SubHeadingTabPadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  SubHeadingMobilePadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  //Info Button
  info_Button_Text: {
    type: "string",
    "default": "Button Text"
  },
  info_Button_Switcher: {
    type: "boolean",
    "default": false
  },
  info_Button_Link: {
    type: "string",
    "default": ""
  },
  //Info box padding
  infoBoxPaddingUnits: {
    type: "string",
    "default": "px"
  },
  infoBoxDesktopPadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  infoBoxTabPadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  infoBoxMobilePadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  // Info Box Border
  infoBoxBorder: {
    type: 'string',
    "default": "none"
  },
  infoBoxBorderColor: {
    type: 'string'
  },
  infoBoxBorderHoverColor: {
    type: 'string'
  },
  infoBoxBorderColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  infoBoxBorderUnits: {
    type: "string",
    "default": "px"
  },
  infoBoxDesktopBorderWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  infoBoxTabBorderWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  infoBoxMobileBorderWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  // 	Info Box Border Radius
  infoBoxBorderRadiusUnits: {
    type: "string",
    "default": "px"
  },
  infoBoxDesktopBorderRadiusWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  infoBoxTabBorderRadiusWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  infoBoxMobileBorderRadiusWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  // Button
  buttonFontFamily: {
    type: "string",
    "default": "inherit"
  },
  buttonFontSize: {
    type: "number",
    "default": 35
  },
  buttonFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  buttonFontWeight: {
    type: "string",
    "default": "700"
  },
  buttonFontStyle: {
    type: "string",
    "default": "normal"
  },
  buttonTextTransform: {
    type: "string",
    "default": "none"
  },
  buttonTextDecoration: {
    type: "string",
    "default": "none"
  },
  buttonLetterSpacing: {
    type: "number"
  },
  buttonLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  buttonLineHeight: {
    type: "number"
  },
  buttonLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  // Button Color
  buttonColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  buttonTextColor: {
    type: "string"
  },
  buttonTextHoverColor: {
    type: "string"
  },
  buttonBgColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  buttonBgColor: {
    type: "string"
  },
  buttonBgHoverColor: {
    type: "string"
  }
};
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/info-box/constants/constants.js":
/*!****************************************************!*\
  !*** ./src/blocks/info-box/constants/constants.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BORDER_STYLES: () => (/* binding */ BORDER_STYLES),
/* harmony export */   FONT_FAMILYS: () => (/* binding */ FONT_FAMILYS),
/* harmony export */   HEADING: () => (/* binding */ HEADING),
/* harmony export */   NORMAL_HOVER: () => (/* binding */ NORMAL_HOVER),
/* harmony export */   PRESETS: () => (/* binding */ PRESETS),
/* harmony export */   SEPERATOR_STYLES: () => (/* binding */ SEPERATOR_STYLES),
/* harmony export */   SUBTITLE_MARGIN: () => (/* binding */ SUBTITLE_MARGIN),
/* harmony export */   TEXT_ALIGN: () => (/* binding */ TEXT_ALIGN),
/* harmony export */   TITLE_MARGIN: () => (/* binding */ TITLE_MARGIN),
/* harmony export */   UNIT_TYPES: () => (/* binding */ UNIT_TYPES),
/* harmony export */   WRAPPER_BG: () => (/* binding */ WRAPPER_BG),
/* harmony export */   WRAPPER_BORDER_SHADOW: () => (/* binding */ WRAPPER_BORDER_SHADOW),
/* harmony export */   WRAPPER_MARGIN: () => (/* binding */ WRAPPER_MARGIN),
/* harmony export */   WRAPPER_PADDING: () => (/* binding */ WRAPPER_PADDING),
/* harmony export */   separator_ICON_SIZE: () => (/* binding */ separator_ICON_SIZE),
/* harmony export */   separator_LINE_SIZE: () => (/* binding */ separator_LINE_SIZE),
/* harmony export */   separator_MARGIN: () => (/* binding */ separator_MARGIN),
/* harmony export */   separator_POSITION: () => (/* binding */ separator_POSITION),
/* harmony export */   separator_TYPE: () => (/* binding */ separator_TYPE),
/* harmony export */   separator_UNIT_TYPES: () => (/* binding */ separator_UNIT_TYPES),
/* harmony export */   separator_WIDTH: () => (/* binding */ separator_WIDTH),
/* harmony export */   subheading_POSITION: () => (/* binding */ subheading_POSITION)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



// the consts defined here should be unique from one another
var WRAPPER_BG = "wrprBg";
var WRAPPER_MARGIN = "wrpMargin";
var WRAPPER_PADDING = "wrpPadding";
var WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
var TITLE_MARGIN = "titleMargin";
var SUBTITLE_MARGIN = "subtitleMargin";
var separator_MARGIN = "separatorMargin";
var separator_LINE_SIZE = "separatorLineSize";
var separator_ICON_SIZE = "separatorIconSize";
var separator_WIDTH = "separatorWidth";
var UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];
var separator_UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var NORMAL_HOVER = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}];
var separator_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line", "advanced-heading"),
  value: "line"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon", "advanced-heading"),
  value: "icon"
}];
var separator_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "advanced-heading"),
  value: "top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "advanced-heading"),
  value: "bottom"
}];
var subheading_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "advanced-heading"),
  value: "top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "advanced-heading"),
  value: "bottom"
}];
var PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "advanced-heading"),
  value: "preset-0"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 1", "advanced-heading"),
  value: "preset-1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 2", "advanced-heading"),
  value: "preset-2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 3", "advanced-heading"),
  value: "preset-3"
}];
var TEXT_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignleft"
  })),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-aligncenter"
  })),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignright"
  })),
  value: "right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "menu"
  })),
  value: "justify"
}];
var HEADING = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H1", "advanced-heading"),
  value: "h1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H2", "advanced-heading"),
  value: "h2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H3", "advanced-heading"),
  value: "h3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H4", "advanced-heading"),
  value: "h4"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H5", "advanced-heading"),
  value: "h5"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H6", "advanced-heading"),
  value: "h6"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("P", "advanced-heading"),
  value: "p"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Div", "advanced-heading"),
  value: "span"
}];
var SEPERATOR_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "advanced-heading"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "advanced-heading"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "advanced-heading"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "advanced-heading"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "advanced-heading"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "advanced-heading"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "advanced-heading"),
  value: "ridge"
}];
var BORDER_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "advanced-heading"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "advanced-heading"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "advanced-heading"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "advanced-heading"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "advanced-heading"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "advanced-heading"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "advanced-heading"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "advanced-heading"),
  value: "ridge"
}];
var FONT_FAMILYS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "advanced-heading"),
  value: "Default"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ABeeZee", "advanced-heading"),
  value: "ABeeZee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abel", "advanced-heading"),
  value: "Abel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abhaya Libre", "advanced-heading"),
  value: "Abhaya Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abril Fatface", "advanced-heading"),
  value: "Abril Fatface"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abyssinica SIL", "advanced-heading"),
  value: "Abyssinica SIL"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aclonica", "advanced-heading"),
  value: "Aclonica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Acme", "advanced-heading"),
  value: "Acme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Actor", "advanced-heading"),
  value: "Actor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Adamina", "advanced-heading"),
  value: "Adamina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Adobe Blank", "advanced-heading"),
  value: "Adobe Blank"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Advent Pro", "advanced-heading"),
  value: "Advent Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aguafina Script", "advanced-heading"),
  value: "Aguafina Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Akronim", "advanced-heading"),
  value: "Akronim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("aksarabaligalang", "advanced-heading"),
  value: "aksarabaligalang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aladin", "advanced-heading"),
  value: "Aladin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aldrich", "advanced-heading"),
  value: "Aldrich"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alef", "advanced-heading"),
  value: "Alef"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("alefhebrew", "advanced-heading"),
  value: "alefhebrew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya", "advanced-heading"),
  value: "Alegreya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya Sans", "advanced-heading"),
  value: "Alegreya Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya Sans SC", "advanced-heading"),
  value: "Alegreya Sans SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya SC", "advanced-heading"),
  value: "Alegreya SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aleo", "advanced-heading"),
  value: "Aleo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alex Brush", "advanced-heading"),
  value: "Alex Brush"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alfa Slab One", "advanced-heading"),
  value: "Alfa Slab One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alice", "advanced-heading"),
  value: "Alice"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alike", "advanced-heading"),
  value: "Alike"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alike Angular", "advanced-heading"),
  value: "Alike Angular"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allan", "advanced-heading"),
  value: "Allan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allerta", "advanced-heading"),
  value: "Allerta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allerta Stencil", "advanced-heading"),
  value: "Allerta Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allura", "advanced-heading"),
  value: "Allura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Almendra", "advanced-heading"),
  value: "Almendra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Almendra Display", "advanced-heading"),
  value: "Almendra Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Almendra SC", "advanced-heading"),
  value: "Almendra SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amarante", "advanced-heading"),
  value: "Amarante"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amaranth", "advanced-heading"),
  value: "Amaranth"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amatic SC", "advanced-heading"),
  value: "Amatic SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amethysta", "advanced-heading"),
  value: "Amethysta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amiko", "advanced-heading"),
  value: "Amiko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amiri", "advanced-heading"),
  value: "Amiri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amita", "advanced-heading"),
  value: "Amita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("amstelvaralpha", "advanced-heading"),
  value: "amstelvaralpha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anaheim", "advanced-heading"),
  value: "Anaheim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Andada", "advanced-heading"),
  value: "Andada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Andada SC", "advanced-heading"),
  value: "Andada SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Andika", "advanced-heading"),
  value: "Andika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Angkor", "advanced-heading"),
  value: "Angkor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Annie Use Your Telescope", "advanced-heading"),
  value: "Annie Use Your Telescope"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anonymous Pro", "advanced-heading"),
  value: "Anonymous Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antic", "advanced-heading"),
  value: "Antic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antic Didone", "advanced-heading"),
  value: "Antic Didone"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antic Slab", "advanced-heading"),
  value: "Antic Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anton", "advanced-heading"),
  value: "Anton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antonio", "advanced-heading"),
  value: "Antonio"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arapey", "advanced-heading"),
  value: "Arapey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arbutus", "advanced-heading"),
  value: "Arbutus"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arbutus Slab", "advanced-heading"),
  value: "Arbutus Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Architects Daughter", "advanced-heading"),
  value: "Architects Daughter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Archivo", "advanced-heading"),
  value: "Archivo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Archivo Black", "advanced-heading"),
  value: "Archivo Black"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Archivo Narrow", "advanced-heading"),
  value: "Archivo Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("archivovfbeta", "advanced-heading"),
  value: "archivovfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aref Ruqaa", "advanced-heading"),
  value: "Aref Ruqaa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arima Madurai", "advanced-heading"),
  value: "Arima Madurai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arimo", "advanced-heading"),
  value: "Arimo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arizonia", "advanced-heading"),
  value: "Arizonia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Armata", "advanced-heading"),
  value: "Armata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arsenal", "advanced-heading"),
  value: "Arsenal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Artifika", "advanced-heading"),
  value: "Artifika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arvo", "advanced-heading"),
  value: "Arvo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arya", "advanced-heading"),
  value: "Arya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asap", "advanced-heading"),
  value: "Asap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asap Condensed", "advanced-heading"),
  value: "Asap Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("asapvfbeta", "advanced-heading"),
  value: "asapvfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asar", "advanced-heading"),
  value: "Asar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asset", "advanced-heading"),
  value: "Asset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Assistant", "advanced-heading"),
  value: "Assistant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Astloch", "advanced-heading"),
  value: "Astloch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asul", "advanced-heading"),
  value: "Asul"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Athiti", "advanced-heading"),
  value: "Athiti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Atomic Age", "advanced-heading"),
  value: "Atomic Age"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aubrey", "advanced-heading"),
  value: "Aubrey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Audiowide", "advanced-heading"),
  value: "Audiowide"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Autour One", "advanced-heading"),
  value: "Autour One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Average", "advanced-heading"),
  value: "Average"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Average Sans", "advanced-heading"),
  value: "Average Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Gruesa Libre", "advanced-heading"),
  value: "Averia Gruesa Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Libre", "advanced-heading"),
  value: "Averia Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Sans Libre", "advanced-heading"),
  value: "Averia Sans Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Serif Libre", "advanced-heading"),
  value: "Averia Serif Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("B612", "advanced-heading"),
  value: "B612"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("B612 Mono", "advanced-heading"),
  value: "B612 Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bad Script", "advanced-heading"),
  value: "Bad Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bahiana", "advanced-heading"),
  value: "Bahiana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bahianita", "advanced-heading"),
  value: "Bahianita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bai Jamjuree", "advanced-heading"),
  value: "Bai Jamjuree"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo", "advanced-heading"),
  value: "Baloo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Bhai", "advanced-heading"),
  value: "Baloo Bhai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Bhaijaan", "advanced-heading"),
  value: "Baloo Bhaijaan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Bhaina", "advanced-heading"),
  value: "Baloo Bhaina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Chettan", "advanced-heading"),
  value: "Baloo Chettan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Da", "advanced-heading"),
  value: "Baloo Da"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Paaji", "advanced-heading"),
  value: "Baloo Paaji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Tamma", "advanced-heading"),
  value: "Baloo Tamma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Tammudu", "advanced-heading"),
  value: "Baloo Tammudu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Thambi", "advanced-heading"),
  value: "Baloo Thambi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Balthazar", "advanced-heading"),
  value: "Balthazar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bangers", "advanced-heading"),
  value: "Bangers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barlow", "advanced-heading"),
  value: "Barlow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barlow Condensed", "advanced-heading"),
  value: "Barlow Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barlow Semi Condensed", "advanced-heading"),
  value: "Barlow Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barriecito", "advanced-heading"),
  value: "Barriecito"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barrio", "advanced-heading"),
  value: "Barrio"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Basic", "advanced-heading"),
  value: "Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Battambang", "advanced-heading"),
  value: "Battambang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baumans", "advanced-heading"),
  value: "Baumans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bayon", "advanced-heading"),
  value: "Bayon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Belgrano", "advanced-heading"),
  value: "Belgrano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bellefair", "advanced-heading"),
  value: "Bellefair"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Belleza", "advanced-heading"),
  value: "Belleza"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("BenchNine", "advanced-heading"),
  value: "BenchNine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bentham", "advanced-heading"),
  value: "Bentham"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Berkshire Swash", "advanced-heading"),
  value: "Berkshire Swash"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Beth Ellen", "advanced-heading"),
  value: "Beth Ellen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bevan", "advanced-heading"),
  value: "Bevan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bhavuka", "advanced-heading"),
  value: "Bhavuka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bigelow Rules", "advanced-heading"),
  value: "Bigelow Rules"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bigshot One", "advanced-heading"),
  value: "Bigshot One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bilbo", "advanced-heading"),
  value: "Bilbo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bilbo Swash Caps", "advanced-heading"),
  value: "Bilbo Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bio Rhyme", "advanced-heading"),
  value: "Bio Rhyme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bio Rhyme Expanded", "advanced-heading"),
  value: "Bio Rhyme Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Biryani", "advanced-heading"),
  value: "Biryani"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bitter", "advanced-heading"),
  value: "Bitter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black And White Picture", "advanced-heading"),
  value: "Black And White Picture"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black Han Sans", "advanced-heading"),
  value: "Black Han Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black Ops One", "advanced-heading"),
  value: "Black Ops One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bokor", "advanced-heading"),
  value: "Bokor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bonbon", "advanced-heading"),
  value: "Bonbon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Boogaloo", "advanced-heading"),
  value: "Boogaloo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bowlby One", "advanced-heading"),
  value: "Bowlby One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bowlby One SC", "advanced-heading"),
  value: "Bowlby One SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Brawler", "advanced-heading"),
  value: "Brawler"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bree Serif", "advanced-heading"),
  value: "Bree Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bruno Ace", "advanced-heading"),
  value: "Bruno Ace"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bruno Ace SC", "advanced-heading"),
  value: "Bruno Ace SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bubblegum Sans", "advanced-heading"),
  value: "Bubblegum Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bubbler One", "advanced-heading"),
  value: "Bubbler One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buda", "advanced-heading"),
  value: "Buda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buenard", "advanced-heading"),
  value: "Buenard"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee", "advanced-heading"),
  value: "Bungee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Hairline", "advanced-heading"),
  value: "Bungee Hairline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Inline", "advanced-heading"),
  value: "Bungee Inline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Outline", "advanced-heading"),
  value: "Bungee Outline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Shade", "advanced-heading"),
  value: "Bungee Shade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Butcherman", "advanced-heading"),
  value: "Butcherman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Butcherman Caps", "advanced-heading"),
  value: "Butcherman Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Butterfly Kids", "advanced-heading"),
  value: "Butterfly Kids"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cabin", "advanced-heading"),
  value: "Cabin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cabin Condensed", "advanced-heading"),
  value: "Cabin Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cabin Sketch", "advanced-heading"),
  value: "Cabin Sketch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("cabinvfbeta", "advanced-heading"),
  value: "cabinvfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caesar Dressing", "advanced-heading"),
  value: "Caesar Dressing"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cagliostro", "advanced-heading"),
  value: "Cagliostro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cairo", "advanced-heading"),
  value: "Cairo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Calligraffitti", "advanced-heading"),
  value: "Calligraffitti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cambay", "advanced-heading"),
  value: "Cambay"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cambo", "advanced-heading"),
  value: "Cambo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Candal", "advanced-heading"),
  value: "Candal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cantarell", "advanced-heading"),
  value: "Cantarell"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cantata One", "advanced-heading"),
  value: "Cantata One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cantora One", "advanced-heading"),
  value: "Cantora One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capriola", "advanced-heading"),
  value: "Capriola"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cardo", "advanced-heading"),
  value: "Cardo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carme", "advanced-heading"),
  value: "Carme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carrois Gothic", "advanced-heading"),
  value: "Carrois Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carrois Gothic SC", "advanced-heading"),
  value: "Carrois Gothic SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carter One", "advanced-heading"),
  value: "Carter One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Catamaran", "advanced-heading"),
  value: "Catamaran"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caudex", "advanced-heading"),
  value: "Caudex"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caveat", "advanced-heading"),
  value: "Caveat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caveat Brush", "advanced-heading"),
  value: "Caveat Brush"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cedarville Cursive", "advanced-heading"),
  value: "Cedarville Cursive"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ceviche One", "advanced-heading"),
  value: "Ceviche One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chakra Petch", "advanced-heading"),
  value: "Chakra Petch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Changa", "advanced-heading"),
  value: "Changa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Changa One", "advanced-heading"),
  value: "Changa One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chango", "advanced-heading"),
  value: "Chango"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Charm", "advanced-heading"),
  value: "Charm"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Charmonman", "advanced-heading"),
  value: "Charmonman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chau Philomene One", "advanced-heading"),
  value: "Chau Philomene One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chela One", "advanced-heading"),
  value: "Chela One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chelsea Market", "advanced-heading"),
  value: "Chelsea Market"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chenla", "advanced-heading"),
  value: "Chenla"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cherry Cream Soda", "advanced-heading"),
  value: "Cherry Cream Soda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cherry Swash", "advanced-heading"),
  value: "Cherry Swash"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chewy", "advanced-heading"),
  value: "Chewy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chicle", "advanced-heading"),
  value: "Chicle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chilanka", "advanced-heading"),
  value: "Chilanka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chivo", "advanced-heading"),
  value: "Chivo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chonburi", "advanced-heading"),
  value: "Chonburi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cinzel", "advanced-heading"),
  value: "Cinzel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cinzel Decorative", "advanced-heading"),
  value: "Cinzel Decorative"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Clicker Script", "advanced-heading"),
  value: "Clicker Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coda", "advanced-heading"),
  value: "Coda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coda Caption", "advanced-heading"),
  value: "Coda Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Codystar", "advanced-heading"),
  value: "Codystar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coiny", "advanced-heading"),
  value: "Coiny"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Combo", "advanced-heading"),
  value: "Combo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Comfortaa", "advanced-heading"),
  value: "Comfortaa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coming Soon", "advanced-heading"),
  value: "Coming Soon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Concert One", "advanced-heading"),
  value: "Concert One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Condiment", "advanced-heading"),
  value: "Condiment"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content", "advanced-heading"),
  value: "Content"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contrail One", "advanced-heading"),
  value: "Contrail One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Convergence", "advanced-heading"),
  value: "Convergence"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cookie", "advanced-heading"),
  value: "Cookie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Copse", "advanced-heading"),
  value: "Copse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Corben", "advanced-heading"),
  value: "Corben"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant", "advanced-heading"),
  value: "Cormorant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Garamond", "advanced-heading"),
  value: "Cormorant Garamond"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Infant", "advanced-heading"),
  value: "Cormorant Infant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant SC", "advanced-heading"),
  value: "Cormorant SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Unicase", "advanced-heading"),
  value: "Cormorant Unicase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Upright", "advanced-heading"),
  value: "Cormorant Upright"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Courgette", "advanced-heading"),
  value: "Courgette"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cousine", "advanced-heading"),
  value: "Cousine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coustard", "advanced-heading"),
  value: "Coustard"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Covered By Your Grace", "advanced-heading"),
  value: "Covered By Your Grace"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crafty Girls", "advanced-heading"),
  value: "Crafty Girls"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Creepster", "advanced-heading"),
  value: "Creepster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Creepster Caps", "advanced-heading"),
  value: "Creepster Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crete Round", "advanced-heading"),
  value: "Crete Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crimson Pro", "advanced-heading"),
  value: "Crimson Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crimson Text", "advanced-heading"),
  value: "Crimson Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Croissant One", "advanced-heading"),
  value: "Croissant One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crushed", "advanced-heading"),
  value: "Crushed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cuprum", "advanced-heading"),
  value: "Cuprum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cute Font", "advanced-heading"),
  value: "Cute Font"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cutive", "advanced-heading"),
  value: "Cutive"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cutive Mono", "advanced-heading"),
  value: "Cutive Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Damion", "advanced-heading"),
  value: "Damion"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dancing Script", "advanced-heading"),
  value: "Dancing Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dangrek", "advanced-heading"),
  value: "Dangrek"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Darker Grotesque", "advanced-heading"),
  value: "Darker Grotesque"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dawning of a New Day", "advanced-heading"),
  value: "Dawning of a New Day"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Days One", "advanced-heading"),
  value: "Days One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("decovaralpha", "advanced-heading"),
  value: "decovaralpha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dekko", "advanced-heading"),
  value: "Dekko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delius", "advanced-heading"),
  value: "Delius"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delius Swash Caps", "advanced-heading"),
  value: "Delius Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delius Unicase", "advanced-heading"),
  value: "Delius Unicase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Della Respira", "advanced-heading"),
  value: "Della Respira"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Denk One", "advanced-heading"),
  value: "Denk One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Devonshire", "advanced-heading"),
  value: "Devonshire"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dhurjati", "advanced-heading"),
  value: "Dhurjati"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dhyana", "advanced-heading"),
  value: "Dhyana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Didact Gothic", "advanced-heading"),
  value: "Didact Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Digital Numbers", "advanced-heading"),
  value: "Digital Numbers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diplomata", "advanced-heading"),
  value: "Diplomata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diplomata SC", "advanced-heading"),
  value: "Diplomata SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DM Sans", "advanced-heading"),
  value: "DM Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DM Serif Display", "advanced-heading"),
  value: "DM Serif Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DM Serif Text", "advanced-heading"),
  value: "DM Serif Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Do Hyeon", "advanced-heading"),
  value: "Do Hyeon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dokdo", "advanced-heading"),
  value: "Dokdo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Domine", "advanced-heading"),
  value: "Domine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Donegal One", "advanced-heading"),
  value: "Donegal One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Doppio One", "advanced-heading"),
  value: "Doppio One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dorsa", "advanced-heading"),
  value: "Dorsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dosis", "advanced-heading"),
  value: "Dosis"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dr Sugiyama", "advanced-heading"),
  value: "Dr Sugiyama"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duru Sans", "advanced-heading"),
  value: "Duru Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynalight", "advanced-heading"),
  value: "Dynalight"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eagle Lake", "advanced-heading"),
  value: "Eagle Lake"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("East Sea Dokdo", "advanced-heading"),
  value: "East Sea Dokdo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eater", "advanced-heading"),
  value: "Eater"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eater Caps", "advanced-heading"),
  value: "Eater Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("EB Garamond", "advanced-heading"),
  value: "EB Garamond"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Economica", "advanced-heading"),
  value: "Economica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eczar", "advanced-heading"),
  value: "Eczar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ek Mukta", "advanced-heading"),
  value: "Ek Mukta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("El Messiri", "advanced-heading"),
  value: "El Messiri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Electrolize", "advanced-heading"),
  value: "Electrolize"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Elsie", "advanced-heading"),
  value: "Elsie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Elsie Swash Caps", "advanced-heading"),
  value: "Elsie Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Emblema One", "advanced-heading"),
  value: "Emblema One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Emilys Candy", "advanced-heading"),
  value: "Emilys Candy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans", "advanced-heading"),
  value: "Encode Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Condensed", "advanced-heading"),
  value: "Encode Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Expanded", "advanced-heading"),
  value: "Encode Sans Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Semi Condensed", "advanced-heading"),
  value: "Encode Sans Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Semi Expanded", "advanced-heading"),
  value: "Encode Sans Semi Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Engagement", "advanced-heading"),
  value: "Engagement"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Englebert", "advanced-heading"),
  value: "Englebert"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enriqueta", "advanced-heading"),
  value: "Enriqueta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Erica One", "advanced-heading"),
  value: "Erica One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Esteban", "advanced-heading"),
  value: "Esteban"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Euphoria Script", "advanced-heading"),
  value: "Euphoria Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ewert", "advanced-heading"),
  value: "Ewert"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Exo", "advanced-heading"),
  value: "Exo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Exo 2", "advanced-heading"),
  value: "Exo 2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Expletus Sans", "advanced-heading"),
  value: "Expletus Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fahkwang", "advanced-heading"),
  value: "Fahkwang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fanwood Text", "advanced-heading"),
  value: "Fanwood Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Farro", "advanced-heading"),
  value: "Farro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Farsan", "advanced-heading"),
  value: "Farsan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fascinate", "advanced-heading"),
  value: "Fascinate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fascinate Inline", "advanced-heading"),
  value: "Fascinate Inline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Faster One", "advanced-heading"),
  value: "Faster One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fasthand", "advanced-heading"),
  value: "Fasthand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fauna One", "advanced-heading"),
  value: "Fauna One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Faustina", "advanced-heading"),
  value: "Faustina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("faustinavfbeta", "advanced-heading"),
  value: "faustinavfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Federant", "advanced-heading"),
  value: "Federant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Federo", "advanced-heading"),
  value: "Federo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Felipa", "advanced-heading"),
  value: "Felipa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fenix", "advanced-heading"),
  value: "Fenix"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Finger Paint", "advanced-heading"),
  value: "Finger Paint"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Code", "advanced-heading"),
  value: "Fira Code"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Mono", "advanced-heading"),
  value: "Fira Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Sans", "advanced-heading"),
  value: "Fira Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Sans Condensed", "advanced-heading"),
  value: "Fira Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Sans Extra Condensed", "advanced-heading"),
  value: "Fira Sans Extra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fjalla One", "advanced-heading"),
  value: "Fjalla One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fjord One", "advanced-heading"),
  value: "Fjord One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flamenco", "advanced-heading"),
  value: "Flamenco"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flavors", "advanced-heading"),
  value: "Flavors"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fondamento", "advanced-heading"),
  value: "Fondamento"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fontdiner Swanky", "advanced-heading"),
  value: "Fontdiner Swanky"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Forum", "advanced-heading"),
  value: "Forum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Francois One", "advanced-heading"),
  value: "Francois One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Frank Ruhl Libre", "advanced-heading"),
  value: "Frank Ruhl Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Freckle Face", "advanced-heading"),
  value: "Freckle Face"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fredericka the Great", "advanced-heading"),
  value: "Fredericka the Great"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fredoka One", "advanced-heading"),
  value: "Fredoka One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Freehand", "advanced-heading"),
  value: "Freehand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fresca", "advanced-heading"),
  value: "Fresca"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Frijole", "advanced-heading"),
  value: "Frijole"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fruktur", "advanced-heading"),
  value: "Fruktur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fugaz One", "advanced-heading"),
  value: "Fugaz One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gabriela", "advanced-heading"),
  value: "Gabriela"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gaegu", "advanced-heading"),
  value: "Gaegu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gafata", "advanced-heading"),
  value: "Gafata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Galada", "advanced-heading"),
  value: "Galada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Galdeano", "advanced-heading"),
  value: "Galdeano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Galindo", "advanced-heading"),
  value: "Galindo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gamja Flower", "advanced-heading"),
  value: "Gamja Flower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gayathri", "advanced-heading"),
  value: "Gayathri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gemunu Libre", "advanced-heading"),
  value: "Gemunu Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gentium Basic", "advanced-heading"),
  value: "Gentium Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gentium Book Basic", "advanced-heading"),
  value: "Gentium Book Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Geo", "advanced-heading"),
  value: "Geo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Geostar", "advanced-heading"),
  value: "Geostar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Geostar Fill", "advanced-heading"),
  value: "Geostar Fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Germania One", "advanced-heading"),
  value: "Germania One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("GFS Didot", "advanced-heading"),
  value: "GFS Didot"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("GFS Neohellenic", "advanced-heading"),
  value: "GFS Neohellenic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gidugu", "advanced-heading"),
  value: "Gidugu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gilda Display", "advanced-heading"),
  value: "Gilda Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Give You Glory", "advanced-heading"),
  value: "Give You Glory"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Glass Antiqua", "advanced-heading"),
  value: "Glass Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Glegoo", "advanced-heading"),
  value: "Glegoo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gloria Hallelujah", "advanced-heading"),
  value: "Gloria Hallelujah"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Goblin One", "advanced-heading"),
  value: "Goblin One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gochi Hand", "advanced-heading"),
  value: "Gochi Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gorditas", "advanced-heading"),
  value: "Gorditas"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gothic A1", "advanced-heading"),
  value: "Gothic A1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Goudy Bookletter 1911", "advanced-heading"),
  value: "Goudy Bookletter 1911"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Graduate", "advanced-heading"),
  value: "Graduate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grand Hotel", "advanced-heading"),
  value: "Grand Hotel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gravitas One", "advanced-heading"),
  value: "Gravitas One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Great Vibes", "advanced-heading"),
  value: "Great Vibes"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grenze", "advanced-heading"),
  value: "Grenze"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Griffy", "advanced-heading"),
  value: "Griffy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gruppo", "advanced-heading"),
  value: "Gruppo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gudea", "advanced-heading"),
  value: "Gudea"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gugi", "advanced-heading"),
  value: "Gugi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gurajada", "advanced-heading"),
  value: "Gurajada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Habibi", "advanced-heading"),
  value: "Habibi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Halant", "advanced-heading"),
  value: "Halant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hammersmith One", "advanced-heading"),
  value: "Hammersmith One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hanalei", "advanced-heading"),
  value: "Hanalei"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hanalei Fill", "advanced-heading"),
  value: "Hanalei Fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Handlee", "advanced-heading"),
  value: "Handlee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("hanna", "advanced-heading"),
  value: "hanna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("hannari", "advanced-heading"),
  value: "hannari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hanuman", "advanced-heading"),
  value: "Hanuman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Happy Monkey", "advanced-heading"),
  value: "Happy Monkey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Harmattan", "advanced-heading"),
  value: "Harmattan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Headland One", "advanced-heading"),
  value: "Headland One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heebo", "advanced-heading"),
  value: "Heebo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Henny Penny", "advanced-heading"),
  value: "Henny Penny"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hermeneus One", "advanced-heading"),
  value: "Hermeneus One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Herr Von Muellerhoff", "advanced-heading"),
  value: "Herr Von Muellerhoff"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hi Melody", "advanced-heading"),
  value: "Hi Melody"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind", "advanced-heading"),
  value: "Hind"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Colombo", "advanced-heading"),
  value: "Hind Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Guntur", "advanced-heading"),
  value: "Hind Guntur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Jalandhar", "advanced-heading"),
  value: "Hind Jalandhar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Kochi", "advanced-heading"),
  value: "Hind Kochi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Madurai", "advanced-heading"),
  value: "Hind Madurai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Mysuru", "advanced-heading"),
  value: "Hind Mysuru"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Siliguri", "advanced-heading"),
  value: "Hind Siliguri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Vadodara", "advanced-heading"),
  value: "Hind Vadodara"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Holtwood One SC", "advanced-heading"),
  value: "Holtwood One SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Homemade Apple", "advanced-heading"),
  value: "Homemade Apple"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Homenaje", "advanced-heading"),
  value: "Homenaje"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Mono", "advanced-heading"),
  value: "IBM Plex Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Sans", "advanced-heading"),
  value: "IBM Plex Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Sans Condensed", "advanced-heading"),
  value: "IBM Plex Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Serif", "advanced-heading"),
  value: "IBM Plex Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Iceberg", "advanced-heading"),
  value: "Iceberg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Iceland", "advanced-heading"),
  value: "Iceland"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Double Pica", "advanced-heading"),
  value: "IM Fell Double Pica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Double Pica SC", "advanced-heading"),
  value: "IM Fell Double Pica SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell DW Pica", "advanced-heading"),
  value: "IM Fell DW Pica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell DW Pica SC", "advanced-heading"),
  value: "IM Fell DW Pica SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell English", "advanced-heading"),
  value: "IM Fell English"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell English SC", "advanced-heading"),
  value: "IM Fell English SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell French Canon", "advanced-heading"),
  value: "IM Fell French Canon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell French Canon SC", "advanced-heading"),
  value: "IM Fell French Canon SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Great Primer", "advanced-heading"),
  value: "IM Fell Great Primer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Great Primer SC", "advanced-heading"),
  value: "IM Fell Great Primer SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Imprima", "advanced-heading"),
  value: "Imprima"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inconsolata", "advanced-heading"),
  value: "Inconsolata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inder", "advanced-heading"),
  value: "Inder"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Indie Flower", "advanced-heading"),
  value: "Indie Flower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inika", "advanced-heading"),
  value: "Inika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inknut Antiqua", "advanced-heading"),
  value: "Inknut Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Irish Grover", "advanced-heading"),
  value: "Irish Grover"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Istok Web", "advanced-heading"),
  value: "Istok Web"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italiana", "advanced-heading"),
  value: "Italiana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italianno", "advanced-heading"),
  value: "Italianno"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Itim", "advanced-heading"),
  value: "Itim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jacques Francois", "advanced-heading"),
  value: "Jacques Francois"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jacques Francois Shadow", "advanced-heading"),
  value: "Jacques Francois Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jaldi", "advanced-heading"),
  value: "Jaldi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jejugothic", "advanced-heading"),
  value: "jejugothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jejuhallasan", "advanced-heading"),
  value: "jejuhallasan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jejumyeongjo", "advanced-heading"),
  value: "jejumyeongjo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jim Nightshade", "advanced-heading"),
  value: "Jim Nightshade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jockey One", "advanced-heading"),
  value: "Jockey One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jolly Lodger", "advanced-heading"),
  value: "Jolly Lodger"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jomhuria", "advanced-heading"),
  value: "Jomhuria"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jomolhari", "advanced-heading"),
  value: "jomolhari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Josefin Sans", "advanced-heading"),
  value: "Josefin Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Josefin Sans Std Light", "advanced-heading"),
  value: "Josefin Sans Std Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Josefin Slab", "advanced-heading"),
  value: "Josefin Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Joti One", "advanced-heading"),
  value: "Joti One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jua", "advanced-heading"),
  value: "Jua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Judson", "advanced-heading"),
  value: "Judson"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Julee", "advanced-heading"),
  value: "Julee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Julius Sans One", "advanced-heading"),
  value: "Julius Sans One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Junge", "advanced-heading"),
  value: "Junge"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jura", "advanced-heading"),
  value: "Jura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Just Another Hand", "advanced-heading"),
  value: "Just Another Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Just Me Again Down Here", "advanced-heading"),
  value: "Just Me Again Down Here"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("K2D", "advanced-heading"),
  value: "K2D"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kadwa", "advanced-heading"),
  value: "Kadwa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kalam", "advanced-heading"),
  value: "Kalam"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kameron", "advanced-heading"),
  value: "Kameron"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kanit", "advanced-heading"),
  value: "Kanit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kantumruy", "advanced-heading"),
  value: "Kantumruy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karla", "advanced-heading"),
  value: "Karla"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karla Tamil Inclined", "advanced-heading"),
  value: "Karla Tamil Inclined"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karla Tamil Upright", "advanced-heading"),
  value: "Karla Tamil Upright"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karma", "advanced-heading"),
  value: "Karma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Katibeh", "advanced-heading"),
  value: "Katibeh"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kaushan Script", "advanced-heading"),
  value: "Kaushan Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kavivanar", "advanced-heading"),
  value: "Kavivanar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kavoon", "advanced-heading"),
  value: "Kavoon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kdam Thmor", "advanced-heading"),
  value: "Kdam Thmor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Keania One", "advanced-heading"),
  value: "Keania One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kelly Slab", "advanced-heading"),
  value: "Kelly Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kenia", "advanced-heading"),
  value: "Kenia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Khand", "advanced-heading"),
  value: "Khand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Khmer", "advanced-heading"),
  value: "Khmer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Khula", "advanced-heading"),
  value: "Khula"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("khyay", "advanced-heading"),
  value: "khyay"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kirang Haerang", "advanced-heading"),
  value: "Kirang Haerang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kite One", "advanced-heading"),
  value: "Kite One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Knewave", "advanced-heading"),
  value: "Knewave"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kodchasan", "advanced-heading"),
  value: "Kodchasan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("KoHo", "advanced-heading"),
  value: "KoHo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("kokoro", "advanced-heading"),
  value: "kokoro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("kopubbatang", "advanced-heading"),
  value: "kopubbatang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kotta One", "advanced-heading"),
  value: "Kotta One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Koulen", "advanced-heading"),
  value: "Koulen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kranky", "advanced-heading"),
  value: "Kranky"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kreon", "advanced-heading"),
  value: "Kreon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kristi", "advanced-heading"),
  value: "Kristi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Krona One", "advanced-heading"),
  value: "Krona One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Krub", "advanced-heading"),
  value: "Krub"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kumar One", "advanced-heading"),
  value: "Kumar One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kurale", "advanced-heading"),
  value: "Kurale"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("La Belle Aurore", "advanced-heading"),
  value: "La Belle Aurore"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lacquer", "advanced-heading"),
  value: "Lacquer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Laila", "advanced-heading"),
  value: "Laila"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lakki Reddy", "advanced-heading"),
  value: "Lakki Reddy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lalezar", "advanced-heading"),
  value: "Lalezar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lancelot", "advanced-heading"),
  value: "Lancelot"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("laomuangdon", "advanced-heading"),
  value: "laomuangdon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("laomuangkhong", "advanced-heading"),
  value: "laomuangkhong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("laosanspro", "advanced-heading"),
  value: "laosanspro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lateef", "advanced-heading"),
  value: "Lateef"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lato", "advanced-heading"),
  value: "Lato"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("League Script", "advanced-heading"),
  value: "League Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Leckerli One", "advanced-heading"),
  value: "Leckerli One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ledger", "advanced-heading"),
  value: "Ledger"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lekton", "advanced-heading"),
  value: "Lekton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lemon", "advanced-heading"),
  value: "Lemon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lemonada", "advanced-heading"),
  value: "Lemonada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 128", "advanced-heading"),
  value: "Libre Barcode 128"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 128 Text", "advanced-heading"),
  value: "Libre Barcode 128 Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39", "advanced-heading"),
  value: "Libre Barcode 39"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39 Extended", "advanced-heading"),
  value: "Libre Barcode 39 Extended"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39 Extended Text", "advanced-heading"),
  value: "Libre Barcode 39 Extended Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39 Text", "advanced-heading"),
  value: "Libre Barcode 39 Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Baskerville", "advanced-heading"),
  value: "Libre Baskerville"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Caslon Display", "advanced-heading"),
  value: "Libre Caslon Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Caslon Text", "advanced-heading"),
  value: "Libre Caslon Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Franklin", "advanced-heading"),
  value: "Libre Franklin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Life Savers", "advanced-heading"),
  value: "Life Savers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lilita One", "advanced-heading"),
  value: "Lilita One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lily Script One", "advanced-heading"),
  value: "Lily Script One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Limelight", "advanced-heading"),
  value: "Limelight"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Linden Hill", "advanced-heading"),
  value: "Linden Hill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Literata", "advanced-heading"),
  value: "Literata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Liu Jian Mao Cao", "advanced-heading"),
  value: "Liu Jian Mao Cao"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Livvic", "advanced-heading"),
  value: "Livvic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lobster", "advanced-heading"),
  value: "Lobster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lobster Two", "advanced-heading"),
  value: "Lobster Two"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lohit Bengali", "advanced-heading"),
  value: "Lohit Bengali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lohit Tamil", "advanced-heading"),
  value: "Lohit Tamil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("lohitdevanagari", "advanced-heading"),
  value: "lohitdevanagari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Outline", "advanced-heading"),
  value: "Londrina Outline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Shadow", "advanced-heading"),
  value: "Londrina Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Sketch", "advanced-heading"),
  value: "Londrina Sketch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Solid", "advanced-heading"),
  value: "Londrina Solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Long Cang", "advanced-heading"),
  value: "Long Cang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lora", "advanced-heading"),
  value: "Lora"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Love Ya Like A Sister", "advanced-heading"),
  value: "Love Ya Like A Sister"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loved by the King", "advanced-heading"),
  value: "Loved by the King"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lovers Quarrel", "advanced-heading"),
  value: "Lovers Quarrel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Luckiest Guy", "advanced-heading"),
  value: "Luckiest Guy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lusitana", "advanced-heading"),
  value: "Lusitana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lustria", "advanced-heading"),
  value: "Lustria"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ma Shan Zheng", "advanced-heading"),
  value: "Ma Shan Zheng"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Macondo", "advanced-heading"),
  value: "Macondo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Macondo Swash Caps", "advanced-heading"),
  value: "Macondo Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mada", "advanced-heading"),
  value: "Mada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Magra", "advanced-heading"),
  value: "Magra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maiden Orange", "advanced-heading"),
  value: "Maiden Orange"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maitree", "advanced-heading"),
  value: "Maitree"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Major Mono Display", "advanced-heading"),
  value: "Major Mono Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mako", "advanced-heading"),
  value: "Mako"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mali", "advanced-heading"),
  value: "Mali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mallanna", "advanced-heading"),
  value: "Mallanna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mandali", "advanced-heading"),
  value: "Mandali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Manjari", "advanced-heading"),
  value: "Manjari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Manuale", "advanced-heading"),
  value: "Manuale"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marcellus", "advanced-heading"),
  value: "Marcellus"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marcellus SC", "advanced-heading"),
  value: "Marcellus SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marck Script", "advanced-heading"),
  value: "Marck Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margarine", "advanced-heading"),
  value: "Margarine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marko One", "advanced-heading"),
  value: "Marko One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marmelad", "advanced-heading"),
  value: "Marmelad"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Martel", "advanced-heading"),
  value: "Martel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Martel Sans", "advanced-heading"),
  value: "Martel Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marvel", "advanced-heading"),
  value: "Marvel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mate", "advanced-heading"),
  value: "Mate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mate SC", "advanced-heading"),
  value: "Mate SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maven Pro", "advanced-heading"),
  value: "Maven Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("mavenprovfbeta", "advanced-heading"),
  value: "mavenprovfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("McLaren", "advanced-heading"),
  value: "McLaren"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Meddon", "advanced-heading"),
  value: "Meddon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("MedievalSharp", "advanced-heading"),
  value: "MedievalSharp"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Medula One", "advanced-heading"),
  value: "Medula One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Meera Inimai", "advanced-heading"),
  value: "Meera Inimai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Megrim", "advanced-heading"),
  value: "Megrim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Meie Script", "advanced-heading"),
  value: "Meie Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merge One", "advanced-heading"),
  value: "Merge One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merienda", "advanced-heading"),
  value: "Merienda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merienda One", "advanced-heading"),
  value: "Merienda One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merriweather", "advanced-heading"),
  value: "Merriweather"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merriweather Sans", "advanced-heading"),
  value: "Merriweather Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mervale Script", "advanced-heading"),
  value: "Mervale Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metal", "advanced-heading"),
  value: "Metal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metal Mania", "advanced-heading"),
  value: "Metal Mania"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metamorphous", "advanced-heading"),
  value: "Metamorphous"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metrophobic", "advanced-heading"),
  value: "Metrophobic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miama", "advanced-heading"),
  value: "Miama"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Michroma", "advanced-heading"),
  value: "Michroma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Milonga", "advanced-heading"),
  value: "Milonga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miltonian", "advanced-heading"),
  value: "Miltonian"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miltonian Tattoo", "advanced-heading"),
  value: "Miltonian Tattoo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mina", "advanced-heading"),
  value: "Mina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miniver", "advanced-heading"),
  value: "Miniver"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miriam Libre", "advanced-heading"),
  value: "Miriam Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miss Fajardose", "advanced-heading"),
  value: "Miss Fajardose"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miss Saint Delafield", "advanced-heading"),
  value: "Miss Saint Delafield"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Modak", "advanced-heading"),
  value: "Modak"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Modern Antiqua", "advanced-heading"),
  value: "Modern Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Molengo", "advanced-heading"),
  value: "Molengo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Molle", "advanced-heading"),
  value: "Molle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monda", "advanced-heading"),
  value: "Monda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monofett", "advanced-heading"),
  value: "Monofett"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monoton", "advanced-heading"),
  value: "Monoton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monsieur La Doulaise", "advanced-heading"),
  value: "Monsieur La Doulaise"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montaga", "advanced-heading"),
  value: "Montaga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montez", "advanced-heading"),
  value: "Montez"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montserrat", "advanced-heading"),
  value: "Montserrat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montserrat Alternates", "advanced-heading"),
  value: "Montserrat Alternates"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montserrat Subrayada", "advanced-heading"),
  value: "Montserrat Subrayada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Moul", "advanced-heading"),
  value: "Moul"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Moulpali", "advanced-heading"),
  value: "Moulpali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mountains of Christmas", "advanced-heading"),
  value: "Mountains of Christmas"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mouse Memoirs", "advanced-heading"),
  value: "Mouse Memoirs"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("mplus1p", "advanced-heading"),
  value: "mplus1p"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr Bedford", "advanced-heading"),
  value: "Mr Bedford"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr Bedfort", "advanced-heading"),
  value: "Mr Bedfort"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr Dafoe", "advanced-heading"),
  value: "Mr Dafoe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr De Haviland", "advanced-heading"),
  value: "Mr De Haviland"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mrs Saint Delafield", "advanced-heading"),
  value: "Mrs Saint Delafield"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mrs Sheppards", "advanced-heading"),
  value: "Mrs Sheppards"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta", "advanced-heading"),
  value: "Mukta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta Mahee", "advanced-heading"),
  value: "Mukta Mahee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta Malar", "advanced-heading"),
  value: "Mukta Malar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta Vaani", "advanced-heading"),
  value: "Mukta Vaani"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Muli", "advanced-heading"),
  value: "Muli"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("myanmarsanspro", "advanced-heading"),
  value: "myanmarsanspro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mystery Quest", "advanced-heading"),
  value: "Mystery Quest"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Brush Script", "advanced-heading"),
  value: "Nanum Brush Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Gothic", "advanced-heading"),
  value: "Nanum Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Gothic Coding", "advanced-heading"),
  value: "Nanum Gothic Coding"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Myeongjo", "advanced-heading"),
  value: "Nanum Myeongjo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Pen Script", "advanced-heading"),
  value: "Nanum Pen Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("NATS", "advanced-heading"),
  value: "NATS"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Neucha", "advanced-heading"),
  value: "Neucha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Neuton", "advanced-heading"),
  value: "Neuton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("New Rocker", "advanced-heading"),
  value: "New Rocker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("News Cycle", "advanced-heading"),
  value: "News Cycle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("nicomoji", "advanced-heading"),
  value: "nicomoji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Niconne", "advanced-heading"),
  value: "Niconne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("nikukyu", "advanced-heading"),
  value: "nikukyu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Niramit", "advanced-heading"),
  value: "Niramit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nixie One", "advanced-heading"),
  value: "Nixie One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nobile", "advanced-heading"),
  value: "Nobile"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nokora", "advanced-heading"),
  value: "Nokora"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Norican", "advanced-heading"),
  value: "Norican"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nosifer", "advanced-heading"),
  value: "Nosifer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nosifer Caps", "advanced-heading"),
  value: "Nosifer Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Notable", "advanced-heading"),
  value: "Notable"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nothing You Could Do", "advanced-heading"),
  value: "Nothing You Could Do"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Noticia Text", "advanced-heading"),
  value: "Noticia Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Noto Sans", "advanced-heading"),
  value: "Noto Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Noto Serif", "advanced-heading"),
  value: "Noto Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("notosanstamil", "advanced-heading"),
  value: "notosanstamil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Cut", "advanced-heading"),
  value: "Nova Cut"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Flat", "advanced-heading"),
  value: "Nova Flat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Mono", "advanced-heading"),
  value: "Nova Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Oval", "advanced-heading"),
  value: "Nova Oval"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Round", "advanced-heading"),
  value: "Nova Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Script", "advanced-heading"),
  value: "Nova Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Slim", "advanced-heading"),
  value: "Nova Slim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Square", "advanced-heading"),
  value: "Nova Square"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("NTR", "advanced-heading"),
  value: "NTR"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Numans", "advanced-heading"),
  value: "Numans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nunito", "advanced-heading"),
  value: "Nunito"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nunito Sans", "advanced-heading"),
  value: "Nunito Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Odor Mean Chey", "advanced-heading"),
  value: "Odor Mean Chey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Offside", "advanced-heading"),
  value: "Offside"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("OFL Sorts Mill Goudy TT", "advanced-heading"),
  value: "OFL Sorts Mill Goudy TT"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Old Standard TT", "advanced-heading"),
  value: "Old Standard TT"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oldenburg", "advanced-heading"),
  value: "Oldenburg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oleo Script", "advanced-heading"),
  value: "Oleo Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oleo Script Swash Caps", "advanced-heading"),
  value: "Oleo Script Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open Sans", "advanced-heading"),
  value: "Open Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open Sans Condensed", "advanced-heading"),
  value: "Open Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("opensanshebrew", "advanced-heading"),
  value: "opensanshebrew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("opensanshebrewcondensed", "advanced-heading"),
  value: "opensanshebrewcondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oranienbaum", "advanced-heading"),
  value: "Oranienbaum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Orbitron", "advanced-heading"),
  value: "Orbitron"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oregano", "advanced-heading"),
  value: "Oregano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Orienta", "advanced-heading"),
  value: "Orienta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Original Surfer", "advanced-heading"),
  value: "Original Surfer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oswald", "advanced-heading"),
  value: "Oswald"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Over the Rainbow", "advanced-heading"),
  value: "Over the Rainbow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlock", "advanced-heading"),
  value: "Overlock"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlock SC", "advanced-heading"),
  value: "Overlock SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overpass", "advanced-heading"),
  value: "Overpass"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overpass Mono", "advanced-heading"),
  value: "Overpass Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ovo", "advanced-heading"),
  value: "Ovo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oxygen", "advanced-heading"),
  value: "Oxygen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oxygen Mono", "advanced-heading"),
  value: "Oxygen Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pacifico", "advanced-heading"),
  value: "Pacifico"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padauk", "advanced-heading"),
  value: "Padauk"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Palanquin", "advanced-heading"),
  value: "Palanquin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Palanquin Dark", "advanced-heading"),
  value: "Palanquin Dark"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pangolin", "advanced-heading"),
  value: "Pangolin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Paprika", "advanced-heading"),
  value: "Paprika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Parisienne", "advanced-heading"),
  value: "Parisienne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Passero One", "advanced-heading"),
  value: "Passero One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Passion One", "advanced-heading"),
  value: "Passion One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pathway Gothic One", "advanced-heading"),
  value: "Pathway Gothic One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Patrick Hand", "advanced-heading"),
  value: "Patrick Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Patrick Hand SC", "advanced-heading"),
  value: "Patrick Hand SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pattaya", "advanced-heading"),
  value: "Pattaya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Patua One", "advanced-heading"),
  value: "Patua One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pavanam", "advanced-heading"),
  value: "Pavanam"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Paytone One", "advanced-heading"),
  value: "Paytone One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pecita", "advanced-heading"),
  value: "Pecita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Peddana", "advanced-heading"),
  value: "Peddana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Peralta", "advanced-heading"),
  value: "Peralta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Permanent Marker", "advanced-heading"),
  value: "Permanent Marker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Petit Formal Script", "advanced-heading"),
  value: "Petit Formal Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Petrona", "advanced-heading"),
  value: "Petrona"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Phetsarath", "advanced-heading"),
  value: "Phetsarath"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Philosopher", "advanced-heading"),
  value: "Philosopher"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Piedra", "advanced-heading"),
  value: "Piedra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pinyon Script", "advanced-heading"),
  value: "Pinyon Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pirata One", "advanced-heading"),
  value: "Pirata One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Plaster", "advanced-heading"),
  value: "Plaster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Play", "advanced-heading"),
  value: "Play"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Playball", "advanced-heading"),
  value: "Playball"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Playfair Display", "advanced-heading"),
  value: "Playfair Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Playfair Display SC", "advanced-heading"),
  value: "Playfair Display SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Podkova", "advanced-heading"),
  value: "Podkova"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("podkovavfbeta", "advanced-heading"),
  value: "podkovavfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poetsen One", "advanced-heading"),
  value: "Poetsen One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poiret One", "advanced-heading"),
  value: "Poiret One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poller One", "advanced-heading"),
  value: "Poller One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poly", "advanced-heading"),
  value: "Poly"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pompiere", "advanced-heading"),
  value: "Pompiere"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ponnala", "advanced-heading"),
  value: "Ponnala"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pontano Sans", "advanced-heading"),
  value: "Pontano Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poor Story", "advanced-heading"),
  value: "Poor Story"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poppins", "advanced-heading"),
  value: "Poppins"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Port Lligat Sans", "advanced-heading"),
  value: "Port Lligat Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Port Lligat Slab", "advanced-heading"),
  value: "Port Lligat Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Porter Sans Block", "advanced-heading"),
  value: "Porter Sans Block"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Post No Bills Colombo", "advanced-heading"),
  value: "Post No Bills Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Post No Bills Jaffna", "advanced-heading"),
  value: "Post No Bills Jaffna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pragati Narrow", "advanced-heading"),
  value: "Pragati Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preahvihear", "advanced-heading"),
  value: "Preahvihear"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Press Start 2P", "advanced-heading"),
  value: "Press Start 2P"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pridi", "advanced-heading"),
  value: "Pridi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Princess Sofia", "advanced-heading"),
  value: "Princess Sofia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prociono", "advanced-heading"),
  value: "Prociono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prompt", "advanced-heading"),
  value: "Prompt"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prosto One", "advanced-heading"),
  value: "Prosto One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Proza Libre", "advanced-heading"),
  value: "Proza Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Mono", "advanced-heading"),
  value: "PT Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Sans", "advanced-heading"),
  value: "PT Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Sans Caption", "advanced-heading"),
  value: "PT Sans Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Sans Narrow", "advanced-heading"),
  value: "PT Sans Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Serif", "advanced-heading"),
  value: "PT Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Serif Caption", "advanced-heading"),
  value: "PT Serif Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Puritan", "advanced-heading"),
  value: "Puritan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Purple Purse", "advanced-heading"),
  value: "Purple Purse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pushster", "advanced-heading"),
  value: "Pushster"
}, {
  label: "Quando",
  value: "Quando"
}, {
  label: "Quantico",
  value: "Quantico"
}, {
  label: "Quattrocento",
  value: "Quattrocento"
}, {
  label: "Quattrocento Sans",
  value: "Quattrocento Sans"
}, {
  label: "Questrial",
  value: "Questrial"
}, {
  label: "Quicksand",
  value: "Quicksand"
}, {
  label: "Quintessential",
  value: "Quintessential"
}, {
  label: "Qwigley",
  value: "Qwigley"
}, {
  label: "Racing Sans One",
  value: "Racing Sans One"
}, {
  label: "Radley",
  value: "Radley"
}, {
  label: "Rajdhani",
  value: "Rajdhani"
}, {
  label: "Rakkas",
  value: "Rakkas"
}, {
  label: "Raleway",
  value: "Raleway"
}, {
  label: "Raleway Dots",
  value: "Raleway Dots"
}, {
  label: "Ramabhadra",
  value: "Ramabhadra"
}, {
  label: "Ramaraja",
  value: "Ramaraja"
}, {
  label: "Rambla",
  value: "Rambla"
}, {
  label: "Rammetto One",
  value: "Rammetto One"
}, {
  label: "Ranchers",
  value: "Ranchers"
}, {
  label: "Rancho",
  value: "Rancho"
}, {
  label: "Ranga",
  value: "Ranga"
}, {
  label: "Rasa",
  value: "Rasa"
}, {
  label: "Rationale",
  value: "Rationale"
}, {
  label: "Ravi Prakash",
  value: "Ravi Prakash"
}, {
  label: "Red Hat Display",
  value: "Red Hat Display"
}, {
  label: "Red Hat Text",
  value: "Red Hat Text"
}, {
  label: "Redacted",
  value: "Redacted"
}, {
  label: "Redacted Script",
  value: "Redacted Script"
}, {
  label: "Redressed",
  value: "Redressed"
}, {
  label: "Reem Kufi",
  value: "Reem Kufi"
}, {
  label: "Reenie Beanie",
  value: "Reenie Beanie"
}, {
  label: "Revalia",
  value: "Revalia"
}, {
  label: "Rhodium Libre",
  value: "Rhodium Libre"
}, {
  label: "Ribeye",
  value: "Ribeye"
}, {
  label: "Ribeye Marrow",
  value: "Ribeye Marrow"
}, {
  label: "Righteous",
  value: "Righteous"
}, {
  label: "Risque",
  value: "Risque"
}, {
  label: "Roboto",
  value: "Roboto"
}, {
  label: "Roboto Condensed",
  value: "Roboto Condensed"
}, {
  label: "Roboto Mono",
  value: "Roboto Mono"
}, {
  label: "Roboto Slab",
  value: "Roboto Slab"
}, {
  label: "Rochester",
  value: "Rochester"
}, {
  label: "Rock Salt",
  value: "Rock Salt"
}, {
  label: "Rokkitt",
  value: "Rokkitt"
}, {
  label: "Romanesco",
  value: "Romanesco"
}, {
  label: "Ropa Sans",
  value: "Ropa Sans"
}, {
  label: "Rosario",
  value: "Rosario"
}, {
  label: "Rosarivo",
  value: "Rosarivo"
}, {
  label: "Rouge Script",
  value: "Rouge Script"
}, {
  label: "roundedmplus1c",
  value: "roundedmplus1c"
}, {
  label: "Rozha One",
  value: "Rozha One"
}, {
  label: "Rubik",
  value: "Rubik"
}, {
  label: "Rubik Mono One",
  value: "Rubik Mono One"
}, {
  label: "Rubik One",
  value: "Rubik One"
}, {
  label: "Ruda",
  value: "Ruda"
}, {
  label: "Rufina",
  value: "Rufina"
}, {
  label: "Ruge Boogie",
  value: "Ruge Boogie"
}, {
  label: "Ruluko",
  value: "Ruluko"
}, {
  label: "Rum Raisin",
  value: "Rum Raisin"
}, {
  label: "Ruslan Display",
  value: "Ruslan Display"
}, {
  label: "Russo One",
  value: "Russo One"
}, {
  label: "Ruthie",
  value: "Ruthie"
}, {
  label: "Rye",
  value: "Rye"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sacramento", "advanced-heading"),
  value: "Sacramento"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sahitya", "advanced-heading"),
  value: "Sahitya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sail", "advanced-heading"),
  value: "Sail"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira", "advanced-heading"),
  value: "Saira"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Condensed", "advanced-heading"),
  value: "Saira Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Extra Condensed", "advanced-heading"),
  value: "Saira Extra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Semi Condensed", "advanced-heading"),
  value: "Saira Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Stencil One", "advanced-heading"),
  value: "Saira Stencil One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Salsa", "advanced-heading"),
  value: "Salsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sanchez", "advanced-heading"),
  value: "Sanchez"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sancreek", "advanced-heading"),
  value: "Sancreek"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sansation", "advanced-heading"),
  value: "Sansation"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sansita", "advanced-heading"),
  value: "Sansita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sansita One", "advanced-heading"),
  value: "Sansita One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarabun", "advanced-heading"),
  value: "Sarabun"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarala", "advanced-heading"),
  value: "Sarala"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarina", "advanced-heading"),
  value: "Sarina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarpanch", "advanced-heading"),
  value: "Sarpanch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Satisfy", "advanced-heading"),
  value: "Satisfy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("sawarabigothic", "advanced-heading"),
  value: "sawarabigothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("sawarabimincho", "advanced-heading"),
  value: "sawarabimincho"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scada", "advanced-heading"),
  value: "Scada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scheherazade", "advanced-heading"),
  value: "Scheherazade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Schoolbell", "advanced-heading"),
  value: "Schoolbell"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scope One", "advanced-heading"),
  value: "Scope One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Seaweed Script", "advanced-heading"),
  value: "Seaweed Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Secular One", "advanced-heading"),
  value: "Secular One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedan", "advanced-heading"),
  value: "Sedan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedan SC", "advanced-heading"),
  value: "Sedan SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedgwick Ave", "advanced-heading"),
  value: "Sedgwick Ave"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedgwick Ave Display", "advanced-heading"),
  value: "Sedgwick Ave Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulhangang", "advanced-heading"),
  value: "seoulhangang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulhangangcondensed", "advanced-heading"),
  value: "seoulhangangcondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulnamsan", "advanced-heading"),
  value: "seoulnamsan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulnamsancondensed", "advanced-heading"),
  value: "seoulnamsancondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulnamsanvertical", "advanced-heading"),
  value: "seoulnamsanvertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sevillana", "advanced-heading"),
  value: "Sevillana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Seymour One", "advanced-heading"),
  value: "Seymour One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shadows Into Light", "advanced-heading"),
  value: "Shadows Into Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shadows Into Light Two", "advanced-heading"),
  value: "Shadows Into Light Two"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shanti", "advanced-heading"),
  value: "Shanti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share", "advanced-heading"),
  value: "Share"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share Tech", "advanced-heading"),
  value: "Share Tech"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share Tech Mono", "advanced-heading"),
  value: "Share Tech Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shojumaru", "advanced-heading"),
  value: "Shojumaru"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Short Stack", "advanced-heading"),
  value: "Short Stack"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shrikhand", "advanced-heading"),
  value: "Shrikhand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Siamreap", "advanced-heading"),
  value: "Siamreap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Siemreap", "advanced-heading"),
  value: "Siemreap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sigmar One", "advanced-heading"),
  value: "Sigmar One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Signika", "advanced-heading"),
  value: "Signika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Signika Negative", "advanced-heading"),
  value: "Signika Negative"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Simonetta", "advanced-heading"),
  value: "Simonetta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Single Day", "advanced-heading"),
  value: "Single Day"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sintony", "advanced-heading"),
  value: "Sintony"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sirin Stencil", "advanced-heading"),
  value: "Sirin Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sitara", "advanced-heading"),
  value: "Sitara"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Six Caps", "advanced-heading"),
  value: "Six Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skranji", "advanced-heading"),
  value: "Skranji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slabo 13px", "advanced-heading"),
  value: "Slabo 13px"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slabo 27px", "advanced-heading"),
  value: "Slabo 27px"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slackey", "advanced-heading"),
  value: "Slackey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Smokum", "advanced-heading"),
  value: "Smokum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Smythe", "advanced-heading"),
  value: "Smythe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sniglet", "advanced-heading"),
  value: "Sniglet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Snippet", "advanced-heading"),
  value: "Snippet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Snowburst One", "advanced-heading"),
  value: "Snowburst One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sofadi One", "advanced-heading"),
  value: "Sofadi One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sofia", "advanced-heading"),
  value: "Sofia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solway", "advanced-heading"),
  value: "Solway"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Song Myung", "advanced-heading"),
  value: "Song Myung"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sonsie One", "advanced-heading"),
  value: "Sonsie One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sorts Mill Goudy", "advanced-heading"),
  value: "Sorts Mill Goudy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("souliyo", "advanced-heading"),
  value: "souliyo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Source Code Pro", "advanced-heading"),
  value: "Source Code Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Source Sans Pro", "advanced-heading"),
  value: "Source Sans Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Source Serif Pro", "advanced-heading"),
  value: "Source Serif Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space Mono", "advanced-heading"),
  value: "Space Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Special Elite", "advanced-heading"),
  value: "Special Elite"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spectral", "advanced-heading"),
  value: "Spectral"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spicy Rice", "advanced-heading"),
  value: "Spicy Rice"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spinnaker", "advanced-heading"),
  value: "Spinnaker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spirax", "advanced-heading"),
  value: "Spirax"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Squada One", "advanced-heading"),
  value: "Squada One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sree Krushnadevaraya", "advanced-heading"),
  value: "Sree Krushnadevaraya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sriracha", "advanced-heading"),
  value: "Sriracha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Srisakdi", "advanced-heading"),
  value: "Srisakdi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Staatliches", "advanced-heading"),
  value: "Staatliches"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stalemate", "advanced-heading"),
  value: "Stalemate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stalin One", "advanced-heading"),
  value: "Stalin One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stalinist One", "advanced-heading"),
  value: "Stalinist One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stardos Stencil", "advanced-heading"),
  value: "Stardos Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stint Ultra Condensed", "advanced-heading"),
  value: "Stint Ultra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stint Ultra Expanded", "advanced-heading"),
  value: "Stint Ultra Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stoke", "advanced-heading"),
  value: "Stoke"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Strait", "advanced-heading"),
  value: "Strait"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Strong", "advanced-heading"),
  value: "Strong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stylish", "advanced-heading"),
  value: "Stylish"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sue Ellen Francisco", "advanced-heading"),
  value: "Sue Ellen Francisco"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suez One", "advanced-heading"),
  value: "Suez One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sumana", "advanced-heading"),
  value: "Sumana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sunflower", "advanced-heading"),
  value: "Sunflower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sunshiney", "advanced-heading"),
  value: "Sunshiney"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Supermercado One", "advanced-heading"),
  value: "Supermercado One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sura", "advanced-heading"),
  value: "Sura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suranna", "advanced-heading"),
  value: "Suranna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suravaram", "advanced-heading"),
  value: "Suravaram"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suwannaphum", "advanced-heading"),
  value: "Suwannaphum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Swanky and Moo Moo", "advanced-heading"),
  value: "Swanky and Moo Moo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Syncopate", "advanced-heading"),
  value: "Syncopate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tajawal", "advanced-heading"),
  value: "Tajawal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tangerine", "advanced-heading"),
  value: "Tangerine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Taprom", "advanced-heading"),
  value: "Taprom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tauri", "advanced-heading"),
  value: "Tauri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Taviraj", "advanced-heading"),
  value: "Taviraj"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Teko", "advanced-heading"),
  value: "Teko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Telex", "advanced-heading"),
  value: "Telex"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tenali Ramakrishna", "advanced-heading"),
  value: "Tenali Ramakrishna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tenor Sans", "advanced-heading"),
  value: "Tenor Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Terminal Dosis", "advanced-heading"),
  value: "Terminal Dosis"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Terminal Dosis Light", "advanced-heading"),
  value: "Terminal Dosis Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Me One", "advanced-heading"),
  value: "Text Me One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thabit", "advanced-heading"),
  value: "Thabit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("tharlon", "advanced-heading"),
  value: "tharlon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thasadith", "advanced-heading"),
  value: "Thasadith"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("The Girl Next Door", "advanced-heading"),
  value: "The Girl Next Door"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tienne", "advanced-heading"),
  value: "Tienne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tillana", "advanced-heading"),
  value: "Tillana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Timmana", "advanced-heading"),
  value: "Timmana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tinos", "advanced-heading"),
  value: "Tinos"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Titan One", "advanced-heading"),
  value: "Titan One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Titillium Web", "advanced-heading"),
  value: "Titillium Web"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trade Winds", "advanced-heading"),
  value: "Trade Winds"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trirong", "advanced-heading"),
  value: "Trirong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trocchi", "advanced-heading"),
  value: "Trocchi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trochut", "advanced-heading"),
  value: "Trochut"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trykker", "advanced-heading"),
  value: "Trykker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tuffy", "advanced-heading"),
  value: "Tuffy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tulpen One", "advanced-heading"),
  value: "Tulpen One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ubuntu", "advanced-heading"),
  value: "Ubuntu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ubuntu Condensed", "advanced-heading"),
  value: "Ubuntu Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ubuntu Mono", "advanced-heading"),
  value: "Ubuntu Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ultra", "advanced-heading"),
  value: "Ultra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uncial Antiqua", "advanced-heading"),
  value: "Uncial Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underdog", "advanced-heading"),
  value: "Underdog"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unica One", "advanced-heading"),
  value: "Unica One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("UnifrakturCook", "advanced-heading"),
  value: "UnifrakturCook"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("UnifrakturMaguntia", "advanced-heading"),
  value: "UnifrakturMaguntia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unkempt", "advanced-heading"),
  value: "Unkempt"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unlock", "advanced-heading"),
  value: "Unlock"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unna", "advanced-heading"),
  value: "Unna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vampiro One", "advanced-heading"),
  value: "Vampiro One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Varela", "advanced-heading"),
  value: "Varela"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Varela Round", "advanced-heading"),
  value: "Varela Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Varta", "advanced-heading"),
  value: "Varta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vast Shadow", "advanced-heading"),
  value: "Vast Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vesper Libre", "advanced-heading"),
  value: "Vesper Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vibur", "advanced-heading"),
  value: "Vibur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vidaloka", "advanced-heading"),
  value: "Vidaloka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viga", "advanced-heading"),
  value: "Viga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Voces", "advanced-heading"),
  value: "Voces"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Volkhov", "advanced-heading"),
  value: "Volkhov"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vollkorn", "advanced-heading"),
  value: "Vollkorn"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vollkorn SC", "advanced-heading"),
  value: "Vollkorn SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Voltaire", "advanced-heading"),
  value: "Voltaire"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("VT323", "advanced-heading"),
  value: "VT323"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Waiting for the Sunrise", "advanced-heading"),
  value: "Waiting for the Sunrise"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wallpoet", "advanced-heading"),
  value: "Wallpoet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Walter Turncoat", "advanced-heading"),
  value: "Walter Turncoat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Warnes", "advanced-heading"),
  value: "Warnes"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wellfleet", "advanced-heading"),
  value: "Wellfleet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wendy One", "advanced-heading"),
  value: "Wendy One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wire One", "advanced-heading"),
  value: "Wire One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Work Sans", "advanced-heading"),
  value: "Work Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yaldevi Colombo", "advanced-heading"),
  value: "Yaldevi Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yanone Kaffeesatz", "advanced-heading"),
  value: "Yanone Kaffeesatz"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yantramanav", "advanced-heading"),
  value: "Yantramanav"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yatra One", "advanced-heading"),
  value: "Yatra One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yellowtail", "advanced-heading"),
  value: "Yellowtail"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yeon Sung", "advanced-heading"),
  value: "Yeon Sung"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yeseva One", "advanced-heading"),
  value: "Yeseva One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yesteryear", "advanced-heading"),
  value: "Yesteryear"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yinmar", "advanced-heading"),
  value: "Yinmar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yrsa", "advanced-heading"),
  value: "Yrsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ZCOOL KuaiLe", "advanced-heading"),
  value: "ZCOOL KuaiLe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ZCOOL QingKe HuangYou", "advanced-heading"),
  value: "ZCOOL QingKe HuangYou"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ZCOOL XiaoWei", "advanced-heading"),
  value: "ZCOOL XiaoWei"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zeyada", "advanced-heading"),
  value: "Zeyada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zhi Mang Xing", "advanced-heading"),
  value: "Zhi Mang Xing"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zilla Slab Highlight", "advanced-heading"),
  value: "Zilla Slab Highlight"
}];

/***/ }),

/***/ "./src/blocks/info-box/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/info-box/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/blocks/info-box/inspector.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }



/**
 * Internal depencencies
 */

function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  var blockID = attributes.blockID,
    Heading_Text = attributes.Heading_Text,
    Heading_Tag = attributes.Heading_Tag,
    Alignment = attributes.Alignment,
    separator = attributes.separator,
    Sub_Heading_Switcher = attributes.Sub_Heading_Switcher,
    Show_Separator_Switcher = attributes.Show_Separator_Switcher,
    Sub_Heading_Text = attributes.Sub_Heading_Text,
    Sub_Heading_Tag = attributes.Sub_Heading_Tag,
    Seperator_Position = attributes.Seperator_Position,
    Sub_Heading_Position = attributes.Sub_Heading_Position,
    info_Button_Switcher = attributes.info_Button_Switcher,
    info_Button_Text = attributes.info_Button_Text,
    info_Button_Link = attributes.info_Button_Link,
    wrapperAlignment = attributes.wrapperAlignment,
    infoBoxBg = attributes.infoBoxBg,
    descAlignment = attributes.descAlignment,
    buttonAlignment = attributes.buttonAlignment;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement("div", _extends({}, blockProps, {
    id: blockID
  }), /*#__PURE__*/React.createElement("div", {
    className: "fb-info-box-content-wrapper ".concat(blockID),
    style: {
      backgroundColor: infoBoxBg
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-info-media-wrapper",
    style: {
      textAlign: wrapperAlignment
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: attributes.infoMediaUrl,
    style: {
      width: "".concat(attributes.width, "px"),
      height: "".concat(attributes.height, "px")
    }
  })), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: Heading_Tag,
    value: Heading_Text,
    onChange: function onChange(value) {
      return setAttributes({
        text: value
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Info Heading', 'frontis-block'),
    className: "fb-heading",
    style: {
      textAlign: Alignment
    }
  }), Sub_Heading_Switcher && Sub_Heading_Position === 'top' && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: Sub_Heading_Tag,
    value: Sub_Heading_Text,
    onChange: function onChange(value) {
      return setAttributes({
        Sub_Heading_Text: value
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Info description', 'frontis-block'),
    className: "fb-description",
    style: {
      textAlign: descAlignment
    }
  }), Sub_Heading_Switcher && Sub_Heading_Position === 'bottom' && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: Sub_Heading_Tag,
    value: Sub_Heading_Text,
    onChange: function onChange(value) {
      return setAttributes({
        Sub_Heading_Text: value
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Info description', 'frontis-block'),
    className: "fb-description",
    style: {
      textAlign: descAlignment
    }
  }), info_Button_Switcher && /*#__PURE__*/React.createElement("div", {
    className: "fb-info-btn-wrapper",
    style: {
      textAlign: buttonAlignment
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: info_Button_Link,
    className: "fb-info-button",
    target: "_blank",
    rel: "noopener noreferrer"
  }, info_Button_Text)))));
}

/***/ }),

/***/ "./src/blocks/info-box/index.js":
/*!**************************************!*\
  !*** ./src/blocks/info-box/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/info-box/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/info-box/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/info-box/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/info-box/block.json");
/* harmony import */ var _attributes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes.js */ "./src/blocks/info-box/attributes.js");



/**
 * Internal dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  attributes: _attributes_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/info-box/inspector.js":
/*!******************************************!*\
  !*** ./src/blocks/info-box/inspector.js ***!
  \******************************************/
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
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/constants */ "./src/blocks/info-box/constants/constants.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/info-box/editor.scss");
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




/**
 * Internal depencencies
 */



function Inspector(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    clientId = _ref.clientId;
  var blockID = attributes.blockID,
    Heading_Text = attributes.Heading_Text,
    Heading_Tag = attributes.Heading_Tag,
    Heading_Background_Color = attributes.Heading_Background_Color,
    Alignment = attributes.Alignment,
    Sub_Heading_Switcher = attributes.Sub_Heading_Switcher,
    Sub_Heading_Text = attributes.Sub_Heading_Text,
    Sub_Heading_Position = attributes.Sub_Heading_Position,
    Heading_Font_Family = attributes.Heading_Font_Family,
    Heading_Font_Size = attributes.Heading_Font_Size,
    Heading_Font_size_units = attributes.Heading_Font_size_units,
    Heading_Font_Weight = attributes.Heading_Font_Weight,
    Heading_Font_Style = attributes.Heading_Font_Style,
    Heading_Text_Transform = attributes.Heading_Text_Transform,
    Heading_Text_Decoration = attributes.Heading_Text_Decoration,
    Heading_Letter_Spacing = attributes.Heading_Letter_Spacing,
    Heading_Line_Height = attributes.Heading_Line_Height,
    Heading_Letter_Spacing_units = attributes.Heading_Letter_Spacing_units,
    Heading_Line_Height_units = attributes.Heading_Line_Height_units,
    Heading_Color_Switcher = attributes.Heading_Color_Switcher,
    Heading_Color = attributes.Heading_Color,
    Heading_Hover_Color = attributes.Heading_Hover_Color,
    Heading_Border = attributes.Heading_Border,
    Heading_Border_Color = attributes.Heading_Border_Color,
    Heading_Border_Hover_Color = attributes.Heading_Border_Hover_Color,
    Heading_Border_Color_Switcher = attributes.Heading_Border_Color_Switcher,
    Heading_Border_units = attributes.Heading_Border_units,
    Heading_Border_radius_units = attributes.Heading_Border_radius_units,
    Heading_Desktop_Border_Width = attributes.Heading_Desktop_Border_Width,
    Heading_Tab_Border_Width = attributes.Heading_Tab_Border_Width,
    Heading_Mobile_Border_Width = attributes.Heading_Mobile_Border_Width,
    activeBorderDevice = attributes.activeBorderDevice,
    Heading_Desktop_Border_radius_Width = attributes.Heading_Desktop_Border_radius_Width,
    Heading_Tab_Border_radius_Width = attributes.Heading_Tab_Border_radius_Width,
    Heading_Mobile_Border_radius_Width = attributes.Heading_Mobile_Border_radius_Width,
    activeBorderRadiusDevice = attributes.activeBorderRadiusDevice,
    borderRadiusLink = attributes.borderRadiusLink,
    borderLink = attributes.borderLink,
    Heading_padding_units = attributes.Heading_padding_units,
    Heading_Desktop_padding = attributes.Heading_Desktop_padding,
    Heading_Tab_padding = attributes.Heading_Tab_padding,
    Heading_Mobile_padding = attributes.Heading_Mobile_padding,
    activePaddingDevice = attributes.activePaddingDevice,
    paddingLink = attributes.paddingLink,
    Heading_Margin_Units = attributes.Heading_Margin_Units,
    Heading_Desktop_Margin = attributes.Heading_Desktop_Margin,
    Heading_Tab_Margin = attributes.Heading_Tab_Margin,
    Heading_Mobile_Margin = attributes.Heading_Mobile_Margin,
    Heading_Active_Margin_Device = attributes.Heading_Active_Margin_Device,
    Heading_Margin_Link = attributes.Heading_Margin_Link,
    info_Button_Switcher = attributes.info_Button_Switcher,
    info_Button_Text = attributes.info_Button_Text,
    info_Button_Link = attributes.info_Button_Link,
    wrapperAlignment = attributes.wrapperAlignment,
    descAlignment = attributes.descAlignment,
    buttonAlignment = attributes.buttonAlignment,
    infoBoxBg = attributes.infoBoxBg,
    SubHeadingPaddingUnits = attributes.SubHeadingPaddingUnits,
    SubHeadingDesktopPadding = attributes.SubHeadingDesktopPadding,
    SubHeadingTabPadding = attributes.SubHeadingTabPadding,
    SubHeadingMobilePadding = attributes.SubHeadingMobilePadding,
    SubHeadingTextDecoration = attributes.SubHeadingTextDecoration,
    SubHeadingTextTransform = attributes.SubHeadingTextTransform,
    SubHeadingFontStyle = attributes.SubHeadingFontStyle,
    SubHeadingFontWeight = attributes.SubHeadingFontWeight,
    SubHeadingFontSizeUnits = attributes.SubHeadingFontSizeUnits,
    SubHeadingFontSize = attributes.SubHeadingFontSize,
    SubHeadingFontFamily = attributes.SubHeadingFontFamily,
    SubHeadingColor = attributes.SubHeadingColor,
    SubHeadingColorSwitcher = attributes.SubHeadingColorSwitcher,
    SubHeadingHoverColor = attributes.SubHeadingHoverColor,
    infoBoxPaddingUnits = attributes.infoBoxPaddingUnits,
    infoBoxDesktopPadding = attributes.infoBoxDesktopPadding,
    infoBoxTabPadding = attributes.infoBoxTabPadding,
    infoBoxMobilePadding = attributes.infoBoxMobilePadding,
    infoBoxBorder = attributes.infoBoxBorder,
    infoBoxBorderColor = attributes.infoBoxBorderColor,
    infoBoxBorderHoverColor = attributes.infoBoxBorderHoverColor,
    infoBoxBorderColorSwitcher = attributes.infoBoxBorderColorSwitcher,
    infoBoxBorderUnits = attributes.infoBoxBorderUnits,
    infoBoxDesktopBorderWidth = attributes.infoBoxDesktopBorderWidth,
    infoBoxTabBorderWidth = attributes.infoBoxTabBorderWidth,
    infoBoxMobileBorderWidth = attributes.infoBoxMobileBorderWidth,
    infoBoxBorderRadiusUnits = attributes.infoBoxBorderRadiusUnits,
    infoBoxDesktopBorderRadiusWidth = attributes.infoBoxDesktopBorderRadiusWidth,
    infoBoxTabBorderRadiusWidth = attributes.infoBoxTabBorderRadiusWidth,
    infoBoxMobileBorderRadiusWidth = attributes.infoBoxMobileBorderRadiusWidth,
    buttonFontFamily = attributes.buttonFontFamily,
    buttonFontSize = attributes.buttonFontSize,
    buttonFontSizeUnits = attributes.buttonFontSizeUnits,
    buttonFontWeight = attributes.buttonFontWeight,
    buttonFontStyle = attributes.buttonFontStyle,
    buttonTextTransform = attributes.buttonTextTransform,
    buttonTextDecoration = attributes.buttonTextDecoration,
    buttonLetterSpacing = attributes.buttonLetterSpacing,
    buttonLetterSpacingUnits = attributes.buttonLetterSpacingUnits,
    buttonLineHeight = attributes.buttonLineHeight,
    buttonLineHeightUnits = attributes.buttonLineHeightUnits,
    buttonColorSwitcher = attributes.buttonColorSwitcher,
    buttonTextColor = attributes.buttonTextColor,
    buttonTextHoverColor = attributes.buttonTextHoverColor,
    buttonBgColorSwitcher = attributes.buttonBgColorSwitcher,
    buttonBgColor = attributes.buttonBgColor,
    buttonBgHoverColor = attributes.buttonBgHoverColor;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (clientId && typeof clientId === 'string') {
      setAttributes({
        blockID: "sh_headings-" + clientId.slice(0, 8)
      });
    }
  }, [clientId]);
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();

  // Info media remove handler
  var removeInfoMedia = function removeInfoMedia() {
    setAttributes({
      infoMediaId: '',
      infoMediaUrl: ''
    });
  };

  /** Start Padding */
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(Heading_Desktop_padding),
    _useState2 = _slicedToArray(_useState, 2),
    previousPadding = _useState2[0],
    setPreviousPadding = _useState2[1];
  /** Function to update all padding values */
  var updateAllPadding = function updateAllPadding(value, device) {
    switch (device) {
      case 'desktop':
        setAttributes({
          Heading_Desktop_padding: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'tab':
        setAttributes({
          Heading_Tab_padding: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'mobile':
        setAttributes({
          Heading_Mobile_padding: {
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
    switch (activePaddingDevice) {
      case 'desktop':
        setAttributes({
          Heading_Desktop_padding: _objectSpread(_objectSpread({}, Heading_Desktop_padding), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'tab':
        setAttributes({
          Heading_Tab_padding: _objectSpread(_objectSpread({}, Heading_Tab_padding), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'mobile':
        setAttributes({
          Heading_Mobile_padding: _objectSpread(_objectSpread({}, Heading_Mobile_padding), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }
    /** Update all padding values if paddingLink is true */
    if (paddingLink) {
      updateAllPadding(value, activePaddingDevice);
    }
  };

  /** Function to handle paddingLink toggle */
  var handlePaddingLinkToggle = function handlePaddingLinkToggle() {
    if (!paddingLink) {
      setAttributes({
        Heading_Desktop_padding: previousPadding
      });
    }
    /** setPaddingLink(!paddingLink) */
    setAttributes({
      paddingLink: !paddingLink
    });
  };

  /** Update previousPadding state when padding changes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setPreviousPadding(Heading_Desktop_padding);
  }, [Heading_Desktop_padding]);

  /** Function to handle device click for padding */
  var handlePaddingDeviceClick = function handlePaddingDeviceClick(device) {
    setAttributes({
      activePaddingDevice: device
    });
  };

  /** Default padding for desktop (using desktop_padding) */
  var padding = "".concat(Heading_Desktop_padding.top).concat(Heading_padding_units, " ").concat(Heading_Desktop_padding.right).concat(Heading_padding_units, " ").concat(Heading_Desktop_padding.bottom).concat(Heading_padding_units, " ").concat(Heading_Desktop_padding.left).concat(Heading_padding_units);
  /** End Padding */

  /** Start Padding */
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(infoBoxDesktopPadding),
    _useState4 = _slicedToArray(_useState3, 2),
    boxPreviousPadding = _useState4[0],
    setBoxPreviousPadding = _useState4[1];
  /** Function to update all padding values */
  var updateAllBoxPadding = function updateAllBoxPadding(value, device) {
    switch (device) {
      case 'desktop':
        setAttributes({
          infoBoxDesktopPadding: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'tab':
        setAttributes({
          infoBoxTabPadding: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'mobile':
        setAttributes({
          infoBoxMobilePadding: {
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
  var handleBoxPaddingInputChange = function handleBoxPaddingInputChange(e, direction) {
    var value = e.target.value;
    switch (activePaddingDevice) {
      case 'desktop':
        setAttributes({
          infoBoxDesktopPadding: _objectSpread(_objectSpread({}, infoBoxDesktopPadding), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'tab':
        setAttributes({
          infoBoxTabPadding: _objectSpread(_objectSpread({}, infoBoxTabPadding), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'mobile':
        setAttributes({
          infoBoxMobilePadding: _objectSpread(_objectSpread({}, infoBoxMobilePadding), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }
    /** Update all padding values if paddingLink is true */
    if (paddingLink) {
      updateAllBoxPadding(value, activePaddingDevice);
    }
  };

  /** Function to handle paddingLink toggle */
  var handleBoxPaddingLinkToggle = function handleBoxPaddingLinkToggle() {
    if (!paddingLink) {
      setAttributes({
        infoBoxDesktopPadding: boxPreviousPadding
      });
    }
    /** setPaddingLink(!paddingLink) */
    setAttributes({
      paddingLink: !paddingLink
    });
  };

  /** Update previousPadding state when padding changes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setBoxPreviousPadding(infoBoxDesktopPadding);
  }, [infoBoxDesktopPadding]);

  /** Function to handle device click for padding */
  var handleBoxPaddingDeviceClick = function handleBoxPaddingDeviceClick(device) {
    setAttributes({
      activePaddingDevice: device
    });
  };

  /** Default padding for desktop (using desktop_padding) */
  var boxPadding = "".concat(infoBoxDesktopPadding.top).concat(infoBoxPaddingUnits, " ").concat(infoBoxDesktopPadding.right).concat(infoBoxPaddingUnits, " ").concat(infoBoxDesktopPadding.bottom).concat(infoBoxPaddingUnits, " ").concat(infoBoxDesktopPadding.left).concat(infoBoxPaddingUnits);
  /** End Padding */

  /** Start Padding For Description*/
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(SubHeadingDesktopPadding),
    _useState6 = _slicedToArray(_useState5, 2),
    previousPaddingDescription = _useState6[0],
    setPreviousPaddingDescription = _useState6[1];
  /** Function to update all padding values */
  var updateAllDescPadding = function updateAllDescPadding(value, device) {
    switch (device) {
      case 'desktop':
        setAttributes({
          SubHeadingDesktopPadding: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'tab':
        setAttributes({
          SubHeadingTabPadding: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'mobile':
        setAttributes({
          SubHeadingMobilePadding: {
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
  var handleDescPaddingInputChange = function handleDescPaddingInputChange(e, direction) {
    var value = e.target.value;
    switch (activePaddingDevice) {
      case 'desktop':
        setAttributes({
          SubHeadingDesktopPadding: _objectSpread(_objectSpread({}, SubHeadingDesktopPadding), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'tab':
        setAttributes({
          SubHeadingTabPadding: _objectSpread(_objectSpread({}, SubHeadingTabPadding), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'mobile':
        setAttributes({
          SubHeadingMobilePadding: _objectSpread(_objectSpread({}, SubHeadingMobilePadding), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }
    /** Update all padding values if paddingLink is true */
    if (paddingLink) {
      updateAllDescPadding(value, activePaddingDevice);
    }
  };

  /** Function to handle paddingLink toggle */
  var handleDescPaddingLinkToggle = function handleDescPaddingLinkToggle() {
    if (!paddingLink) {
      setAttributes({
        SubHeadingDesktopPadding: previousPaddingDescription
      });
    }
    /** setPaddingLink(!paddingLink) */
    setAttributes({
      paddingLink: !paddingLink
    });
  };

  /** Update previousPadding state when padding changes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setPreviousPaddingDescription(SubHeadingDesktopPadding);
  }, [SubHeadingDesktopPadding]);

  /** Function to handle device click for padding */
  var handleDescPaddingDeviceClick = function handleDescPaddingDeviceClick(device) {
    setAttributes({
      activePaddingDevice: device
    });
  };

  /** Default padding for desktop (using desktop_padding) */
  var descPadding = "".concat(SubHeadingDesktopPadding.top).concat(SubHeadingPaddingUnits, " ").concat(SubHeadingDesktopPadding.right).concat(SubHeadingPaddingUnits, " ").concat(SubHeadingDesktopPadding.bottom).concat(SubHeadingPaddingUnits, " ").concat(SubHeadingDesktopPadding.left).concat(SubHeadingPaddingUnits);
  /** End Padding */

  /** Start Margin */
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(Heading_Desktop_Margin),
    _useState8 = _slicedToArray(_useState7, 2),
    previousMargin = _useState8[0],
    setPreviousMargin = _useState8[1];
  /** Function to update all margin values */
  var updateAllMargin = function updateAllMargin(value, device) {
    switch (device) {
      case 'desktop':
        setAttributes({
          Heading_Desktop_Margin: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'tab':
        setAttributes({
          Heading_Tab_Margin: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'mobile':
        setAttributes({
          Heading_Mobile_Margin: {
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
    switch (Heading_Active_Margin_Device) {
      case 'desktop':
        setAttributes({
          Heading_Desktop_Margin: _objectSpread(_objectSpread({}, Heading_Desktop_Margin), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'tab':
        setAttributes({
          Heading_Tab_Margin: _objectSpread(_objectSpread({}, Heading_Tab_Margin), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'mobile':
        setAttributes({
          Heading_Mobile_Margin: _objectSpread(_objectSpread({}, Heading_Mobile_Margin), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }
    /** Update all margin values if marginLink is true */
    if (Heading_Margin_Link) {
      updateAllMargin(value, Heading_Active_Margin_Device);
    }
  };

  /** Function to handle marginLink toggle */
  var handleMarginLinkToggle = function handleMarginLinkToggle() {
    if (!Heading_Margin_Link) {
      setAttributes({
        Heading_Desktop_Margin: previousMargin
      });
    }
    /** setmarginLink(!marginLink) */
    setAttributes({
      Heading_Margin_Link: !Heading_Margin_Link
    });
  };

  /** Update previousMargin state when margin changes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setPreviousMargin(Heading_Desktop_Margin);
  }, [Heading_Desktop_Margin]);

  /** Function to handle device click for margin */
  var handleMarginDeviceClick = function handleMarginDeviceClick(device) {
    setAttributes({
      Heading_Active_Margin_Device: device
    });
  };

  /** Default margin for desktop (using desktop_margin) */
  var margin = "".concat(Heading_Desktop_Margin.top).concat(Heading_padding_units, " ").concat(Heading_Desktop_Margin.right).concat(Heading_padding_units, " ").concat(Heading_Desktop_Margin.bottom).concat(Heading_padding_units, " ").concat(Heading_Desktop_Margin.left).concat(Heading_padding_units);
  /** End Margin */

  /** Start Border Width */
  var _useState9 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(Heading_Desktop_Border_Width),
    _useState10 = _slicedToArray(_useState9, 2),
    previousBorderWidth = _useState10[0],
    setPreviousBorderWidth = _useState10[1];
  /** Function to update all Border Width values */
  var updateAllBorderWidth = function updateAllBorderWidth(value, device) {
    switch (device) {
      case 'desktop':
        setAttributes({
          Heading_Desktop_Border_Width: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'tab':
        setAttributes({
          Heading_Tab_Border_Width: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'mobile':
        setAttributes({
          Heading_Mobile_Border_Width: {
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
    switch (activeBorderDevice) {
      case 'desktop':
        setAttributes({
          Heading_Desktop_Border_Width: _objectSpread(_objectSpread({}, Heading_Desktop_Border_Width), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'tab':
        setAttributes({
          Heading_Tab_Border_Width: _objectSpread(_objectSpread({}, Heading_Tab_Border_Width), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'mobile':
        setAttributes({
          Heading_Mobile_Border_Width: _objectSpread(_objectSpread({}, Heading_Mobile_Border_Width), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }
    /** Update all padding values if borderLink is true */
    if (borderLink) {
      updateAllBorderWidth(value, activeBorderDevice);
    }
  };

  /** Function to handle borderLink toggle */
  var handleBorderWidthLinkToggle = function handleBorderWidthLinkToggle() {
    if (!borderLink) {
      setAttributes({
        Heading_Desktop_Border_Width: previousBorderWidth
      });
    }
    /** setborderLinkLink(!borderLink) */
    setAttributes({
      borderLink: !borderLink
    });
  };

  /** Update previousborderWidth state when Border Width changes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setPreviousBorderWidth(Heading_Desktop_Border_Width);
  }, [Heading_Desktop_Border_Width]);

  /** Function to handle device click for Border Width */
  var handleBorderWidthDeviceClick = function handleBorderWidthDeviceClick(device) {
    setAttributes({
      activeBorderDevice: device
    });
  };

  /** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
  var borderWidth = "".concat(Heading_Desktop_Border_Width.top).concat(Heading_Border_units, " ").concat(Heading_Desktop_Border_Width.right).concat(Heading_Border_units, " ").concat(Heading_Desktop_Border_Width.bottom).concat(Heading_Border_units, " ").concat(Heading_Desktop_Border_Width.left).concat(Heading_Border_units);
  /** End Border Width */

  /** Start Border Radius Width */
  var _useState11 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(Heading_Desktop_Border_radius_Width),
    _useState12 = _slicedToArray(_useState11, 2),
    previousBorderRadiusWidth = _useState12[0],
    setPreviousBorderRadiusWidth = _useState12[1];
  /** Function to update all Border Width values */
  var updateAllBorderRadiusWidth = function updateAllBorderRadiusWidth(value, device) {
    switch (device) {
      case 'desktop':
        setAttributes({
          Heading_Desktop_Border_radius_Width: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'tab':
        setAttributes({
          Heading_Tab_Border_radius_Width: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'mobile':
        setAttributes({
          Heading_Mobile_Border_radius_Width: {
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
    switch (activeBorderRadiusDevice) {
      case 'desktop':
        setAttributes({
          Heading_Desktop_Border_radius_Width: _objectSpread(_objectSpread({}, Heading_Desktop_Border_radius_Width), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'tab':
        setAttributes({
          Heading_Tab_Border_radius_Width: _objectSpread(_objectSpread({}, Heading_Tab_Border_radius_Width), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'mobile':
        setAttributes({
          Heading_Mobile_Border_radius_Width: _objectSpread(_objectSpread({}, Heading_Mobile_Border_radius_Width), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }
    /** Update all padding values if borderRadiusLink is true */
    if (borderRadiusLink) {
      updateAllBorderRadiusWidth(value, activeBorderRadiusDevice);
    }
  };

  /** Function to handle borderRadiusLink toggle */
  var handleBorderRadiusWidthLinkToggle = function handleBorderRadiusWidthLinkToggle() {
    if (!borderRadiusLink) {
      setAttributes({
        Heading_Desktop_Border_radius_Width: previousBorderRadiusWidth
      });
    }
    /** setborderRadiusLinkLink(!borderRadiusLink) */
    setAttributes({
      borderRadiusLink: !borderRadiusLink
    });
  };

  /** Update previousBorderRadiusWidth state when Border Width changes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setPreviousBorderRadiusWidth(Heading_Desktop_Border_radius_Width);
  }, [Heading_Desktop_Border_radius_Width]);

  /** Function to handle device click for Border Width */
  var handleBorderRadiusWidthDeviceClick = function handleBorderRadiusWidthDeviceClick(device) {
    setAttributes({
      activeBorderRadiusDevice: device
    });
  };

  /** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
  var borderRadiusWidth = "".concat(Heading_Desktop_Border_radius_Width.top).concat(Heading_Border_radius_units, " ").concat(Heading_Desktop_Border_radius_Width.right).concat(Heading_Border_radius_units, " ").concat(Heading_Desktop_Border_radius_Width.bottom).concat(Heading_Border_radius_units, " ").concat(Heading_Desktop_Border_radius_Width.left).concat(Heading_Border_radius_units);
  /** End Border Radius Width */

  /** Start Box Border Width */
  var _useState13 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(infoBoxDesktopBorderWidth),
    _useState14 = _slicedToArray(_useState13, 2),
    boxPreviousBorderWidth = _useState14[0],
    setBoxPreviousBorderWidth = _useState14[1];
  /** Function to update all Border Width values */
  var updateBoxBorderWidth = function updateBoxBorderWidth(value, device) {
    switch (device) {
      case 'desktop':
        setAttributes({
          infoBoxDesktopBorderWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'tab':
        setAttributes({
          infoBoxTabBorderWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'mobile':
        setAttributes({
          infoBoxMobileBorderWidth: {
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
  var handleBoxBorderWidthInputChange = function handleBoxBorderWidthInputChange(e, direction) {
    var value = e.target.value;
    switch (activeBorderDevice) {
      case 'desktop':
        setAttributes({
          infoBoxDesktopBorderWidth: _objectSpread(_objectSpread({}, infoBoxDesktopBorderWidth), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'tab':
        setAttributes({
          infoBoxTabBorderWidth: _objectSpread(_objectSpread({}, infoBoxTabBorderWidth), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'mobile':
        setAttributes({
          infoBoxMobileBorderWidth: _objectSpread(_objectSpread({}, infoBoxMobileBorderWidth), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }
    /** Update all padding values if borderLink is true */
    if (borderLink) {
      updateBoxBorderWidth(value, activeBorderDevice);
    }
  };

  /** Function to handle borderLink toggle */
  var handleBoxBorderWidthLinkToggle = function handleBoxBorderWidthLinkToggle() {
    if (!borderLink) {
      setAttributes({
        infoBoxDesktopBorderWidth: boxPreviousBorderWidth
      });
    }
    /** setborderLinkLink(!borderLink) */
    setAttributes({
      borderLink: !borderLink
    });
  };

  /** Update previousborderWidth state when Border Width changes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setBoxPreviousBorderWidth(infoBoxDesktopBorderWidth);
  }, [infoBoxDesktopBorderWidth]);

  /** Function to handle device click for Border Width */
  var handleBoxBorderWidthDeviceClick = function handleBoxBorderWidthDeviceClick(device) {
    setAttributes({
      activeBorderDevice: device
    });
  };

  /** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
  var boxBorderWidth = "".concat(infoBoxDesktopBorderWidth.top).concat(infoBoxBorderUnits, " ").concat(infoBoxDesktopBorderWidth.right).concat(infoBoxBorderUnits, " ").concat(infoBoxDesktopBorderWidth.bottom).concat(infoBoxBorderUnits, " ").concat(infoBoxDesktopBorderWidth.left).concat(infoBoxBorderUnits);
  /** End Border Width */

  /** Start Border Radius Width */
  var _useState15 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(infoBoxDesktopBorderRadiusWidth),
    _useState16 = _slicedToArray(_useState15, 2),
    boxPreviousBorderRadiusWidth = _useState16[0],
    setBoxPreviousBorderRadiusWidth = _useState16[1];
  /** Function to update all Border Width values */
  var updateBoxBorderRadiusWidth = function updateBoxBorderRadiusWidth(value, device) {
    switch (device) {
      case 'desktop':
        setAttributes({
          infoBoxDesktopBorderRadiusWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'tab':
        setAttributes({
          infoBoxTabBorderRadiusWidth: {
            top: value,
            right: value,
            bottom: value,
            left: value
          }
        });
        break;
      case 'mobile':
        setAttributes({
          infoBoxMobileBorderRadiusWidth: {
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
  var handleBoxBorderRadiusWidthInputChange = function handleBoxBorderRadiusWidthInputChange(e, direction) {
    var value = e.target.value;
    switch (activeBorderRadiusDevice) {
      case 'desktop':
        setAttributes({
          infoBoxDesktopBorderRadiusWidth: _objectSpread(_objectSpread({}, infoBoxDesktopBorderRadiusWidth), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'tab':
        setAttributes({
          infoBoxTabBorderRadiusWidth: _objectSpread(_objectSpread({}, infoBoxTabBorderRadiusWidth), {}, _defineProperty({}, direction, value))
        });
        break;
      case 'mobile':
        setAttributes({
          infoBoxMobileBorderRadiusWidth: _objectSpread(_objectSpread({}, infoBoxMobileBorderRadiusWidth), {}, _defineProperty({}, direction, value))
        });
        break;
      default:
        break;
    }
    /** Update all padding values if borderRadiusLink is true */
    if (borderRadiusLink) {
      updateBoxBorderRadiusWidth(value, activeBorderRadiusDevice);
    }
  };

  /** Function to handle borderRadiusLink toggle */
  var handleBoxBorderRadiusWidthLinkToggle = function handleBoxBorderRadiusWidthLinkToggle() {
    if (!borderRadiusLink) {
      setAttributes({
        infoBoxDesktopBorderRadiusWidth: boxPreviousBorderRadiusWidth
      });
    }
    /** setborderRadiusLinkLink(!borderRadiusLink) */
    setAttributes({
      borderRadiusLink: !borderRadiusLink
    });
  };

  /** Update previousBorderRadiusWidth state when Border Width changes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setBoxPreviousBorderRadiusWidth(infoBoxDesktopBorderRadiusWidth);
  }, [infoBoxDesktopBorderRadiusWidth]);

  /** Function to handle device click for Border Width */
  var handleBoxBorderRadiusWidthDeviceClick = function handleBoxBorderRadiusWidthDeviceClick(device) {
    setAttributes({
      activeBorderRadiusDevice: device
    });
  };

  /** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
  var boxBorderRadiusWidth = "".concat(infoBoxDesktopBorderRadiusWidth.top).concat(infoBoxBorderRadiusUnits, " ").concat(infoBoxDesktopBorderRadiusWidth.right).concat(infoBoxBorderRadiusUnits, " ").concat(infoBoxDesktopBorderRadiusWidth.bottom).concat(infoBoxBorderRadiusUnits, " ").concat(infoBoxDesktopBorderRadiusWidth.left).concat(infoBoxBorderRadiusUnits);
  /** End Border Radius Width */
  /* set default values for the style attributes */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (Heading_Font_Family) {
      var fontUrl = "https://fonts.googleapis.com/css?family=".concat(Heading_Font_Family.replace(' ', '+'));
      var linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = fontUrl;
      document.head.appendChild(linkElement);
    }
  }, [Heading_Font_Family]);

  // Define the CSS as a string
  var css = "\n        #".concat(blockID, " {\n            padding: 20px;\n            border: 1px solid #ccc;\n            background-color: #f9f9f9;\n        }\n    ");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t.fb-info-box-content-wrapper {\n                    padding: ".concat(boxPadding, ";\n                    border: ").concat(infoBoxBorder, ";\n                    border-width: ").concat(boxBorderWidth, ";\n                    border-radius: ").concat(boxBorderRadiusWidth, ";\n                    ").concat(infoBoxBorderColor !== undefined ? "border-color: ".concat(infoBoxBorderColor, ";") : '', "\n                }\n                .fb-info-box-content-wrapper .fb-heading {\n                    ").concat(Heading_Color !== undefined ? "color: ".concat(Heading_Color, ";") : '', "\n                    ").concat(Heading_Background_Color !== undefined ? "background-color: ".concat(Heading_Background_Color, ";") : '', "\n                    font-family: ").concat(Heading_Font_Family !== 'default' ? Heading_Font_Family : Heading_Font_Family, ";\n                    font-size: ").concat(Heading_Font_Size !== undefined ? "".concat(Heading_Font_Size).concat(Heading_Font_size_units) : '', ";\n                    font-weight: ").concat(Heading_Font_Weight, ";\n                    font-style: ").concat(Heading_Font_Style, ";\n                    text-transform: ").concat(Heading_Text_Transform, ";\n                    text-decoration: ").concat(Heading_Text_Decoration, ";\n                    ").concat(Heading_Letter_Spacing !== undefined ? "letter-spacing: ".concat(Heading_Letter_Spacing).concat(Heading_Letter_Spacing_units, ";") : '', "\n                    ").concat(Heading_Line_Height !== undefined ? "line-height: ".concat(Heading_Line_Height).concat(Heading_Line_Height_units, ";") : '', "\n                    transition: all .3s ease-in-out;\n                    padding: ").concat(padding, ";\n                    margin: ").concat(margin, ";\n                    border: ").concat(Heading_Border, ";\n                    border-width: ").concat(borderWidth, ";\n                    border-radius: ").concat(borderRadiusWidth, ";\n                    ").concat(Heading_Border_Color !== undefined ? "border-color: ".concat(Heading_Border_Color, ";") : '', "\n                }\n                .fb-info-box-content-wrapper .fb-heading:hover {\n                    ").concat(Heading_Hover_Color !== undefined ? "color: ".concat(Heading_Hover_Color, ";") : '', "\n                    ").concat(Heading_Border_Hover_Color !== undefined ? "border-color: ".concat(Heading_Border_Hover_Color, ";") : '', "\n                }\n\n                @media only screen and (max-width: 1024px) {\n                    .fb-info-box-content-wrapper .fb-heading {\n                        padding: ").concat(Heading_Tab_padding.top).concat(Heading_padding_units, " ").concat(Heading_Tab_padding.right).concat(Heading_padding_units, " ").concat(Heading_Tab_padding.bottom).concat(Heading_padding_units, " ").concat(Heading_Tab_padding.left).concat(Heading_padding_units, " !important;\n                        margin: ").concat(Heading_Tab_Margin.top).concat(Heading_Margin_Units, " ").concat(Heading_Tab_Margin.right).concat(Heading_Margin_Units, " ").concat(Heading_Tab_Margin.bottom).concat(Heading_Margin_Units, " ").concat(Heading_Tab_Margin.left).concat(Heading_Margin_Units, " !important;\n                        border-width: ").concat(Heading_Tab_Border_Width.top).concat(Heading_Border_units, " ").concat(Heading_Tab_Border_Width.right).concat(Heading_Border_units, " ").concat(Heading_Tab_Border_Width.bottom).concat(Heading_Border_units, " ").concat(Heading_Tab_Border_Width.left).concat(Heading_Border_units, " !important;\n                        border-radius: ").concat(Heading_Tab_Border_radius_Width.top).concat(Heading_Border_radius_units, " ").concat(Heading_Tab_Border_radius_Width.right).concat(Heading_Border_radius_units, " ").concat(Heading_Tab_Border_radius_Width.bottom).concat(Heading_Border_radius_units, " ").concat(Heading_Tab_Border_radius_Width.left).concat(Heading_Border_radius_units, " !important;\n                    }\n                }\n\n                @media only screen and (max-width: 767px) {\n                    .fb-info-box-content-wrapper .fb-heading {\n                        padding: ").concat(Heading_Mobile_padding.top).concat(Heading_padding_units, " ").concat(Heading_Mobile_padding.right).concat(Heading_padding_units, " ").concat(Heading_Mobile_padding.bottom).concat(Heading_padding_units, " ").concat(Heading_Mobile_padding.left).concat(Heading_padding_units, " !important;\n                        margin: ").concat(Heading_Mobile_Margin.top).concat(Heading_Margin_Units, " ").concat(Heading_Mobile_Margin.right).concat(Heading_Margin_Units, " ").concat(Heading_Mobile_Margin.bottom).concat(Heading_Margin_Units, " ").concat(Heading_Mobile_Margin.left).concat(Heading_Margin_Units, " !important;\n                        border-width: ").concat(Heading_Mobile_Border_Width.top).concat(Heading_Border_units, " ").concat(Heading_Mobile_Border_Width.right).concat(Heading_Border_units, " ").concat(Heading_Mobile_Border_Width.bottom).concat(Heading_Border_units, " ").concat(Heading_Mobile_Border_Width.left).concat(Heading_Border_units, " !important;\n                        border-radius: ").concat(Heading_Mobile_Border_radius_Width.top).concat(Heading_Border_radius_units, " ").concat(Heading_Mobile_Border_radius_Width.right).concat(Heading_Border_radius_units, " ").concat(Heading_Mobile_Border_radius_Width.bottom).concat(Heading_Border_radius_units, " ").concat(Heading_Mobile_Border_radius_Width.left).concat(Heading_Border_radius_units, " !important;\n                    }\n                }\n\n                .fb-info-box-content-wrapper .fb-description {\n                \t").concat(SubHeadingColor !== undefined ? "color: ".concat(SubHeadingColor, ";") : '', "\n                \tfont-family: ").concat(SubHeadingFontFamily !== 'default' ? SubHeadingFontFamily : SubHeadingFontFamily, ";\n                    font-size: ").concat(SubHeadingFontSize !== undefined ? "".concat(SubHeadingFontSize).concat(SubHeadingFontSizeUnits) : '', ";\n                    font-weight: ").concat(SubHeadingFontWeight, ";\n                    font-style: ").concat(SubHeadingFontStyle, ";\n                    text-transform: ").concat(SubHeadingTextTransform, ";\n                    text-decoration: ").concat(SubHeadingTextDecoration, ";\n                    padding: ").concat(descPadding, ";\n\n                }\n                .fb-info-box-content-wrapper .fb-description:hover {\n                    ").concat(SubHeadingHoverColor !== undefined ? "color: ".concat(SubHeadingHoverColor, ";") : '', "\n                }\n\n                .fb-info-box-content-wrapper .fb-info-btn-wrapper .fb-info-button {\n                \t").concat(buttonTextColor !== undefined ? "color: ".concat(buttonTextColor, ";") : '', "\n                \t").concat(buttonBgColor !== undefined ? "background-color: ".concat(buttonBgColor, ";") : '', "\n                \tfont-family: ").concat(buttonFontFamily !== 'default' ? buttonFontFamily : buttonFontFamily, ";\n                    font-size: ").concat(buttonFontSize !== undefined ? "".concat(buttonFontSize).concat(buttonFontSizeUnits) : '', ";\n                    font-weight: ").concat(buttonFontWeight, ";\n                    font-style: ").concat(buttonFontStyle, ";\n                    text-transform: ").concat(buttonTextTransform, ";\n                    text-decoration: ").concat(buttonTextDecoration, ";\n                    padding: ").concat(padding, ";\n                }\n\n                .fb-info-box-content-wrapper .fb-info-btn-wrapper .fb-info-button:hover {\n                \t").concat(buttonTextHoverColor !== undefined ? "color: ".concat(buttonTextHoverColor, ";") : '', "\n                \t").concat(buttonBgHoverColor !== undefined ? "background-color: ".concat(buttonBgHoverColor, ";") : '', "\n                }\n            ")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
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
      name: "advance",
      title: "Advanced",
      className: "fb-tab advance"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "fb-tab-controls" + tab.name
    }, tab.name === 'general' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "fb-advanced-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon/Image", "frontis-block"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Media Alignment", "frontis-block"),
      id: "fb-media-alignment",
      className: "fb-advanced-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-advanced-alignment-group-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.TEXT_ALIGN.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            wrapperAlignment: item.value
          });
        },
        className: "fb-advanced-alignment-single-btn ".concat(Alignment === item.value ? 'active' : '')
      }, item.label);
    }))), /*#__PURE__*/React.createElement("div", {
      className: "fb-image-upload-field-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: function onSelect(media) {
        setAttributes({
          infoMediaId: media['id'],
          infoMediaUrl: media['url'],
          infoMediaWidth: media['width'],
          infoMediaHeight: media['height']
        });
      },
      type: "image",
      value: attributes.infoMediaId,
      render: function render(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: attributes.infoMediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, attributes.infoMediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Icon Image', 'ultimate-addons-for-gutenberg-blocks'), attributes.infoMediaId != 0 && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ResponsiveWrapper, {
          naturalWidth: attributes.infoMediaWidth,
          naturalHeight: attributes.infoMediaHeight
        }, /*#__PURE__*/React.createElement("img", {
          src: attributes.infoMediaUrl
        })));
      }
    })), attributes.infoMediaId != 0 && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
      className: "editor-post-featured-image__actions"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "editor-post-featured-image__action",
      onClick: function onClick() {
        return removeInfoMedia();
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'frontis-block')), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace image', 'frontis-block'),
      value: attributes.infoMediaId,
      onSelect: function onSelect(media) {
        setAttributes({
          infoMediaId: media['id'],
          infoMediaUrl: media['url'],
          infoMediaWidth: media['width'],
          infoMediaHeight: media['height']
        });
      },
      type: "image",
      render: function render(_ref3) {
        var open = _ref3.open;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "editor-post-featured-image__action",
          onClick: open
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace', 'frontis-block'));
      }
    })))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-advanced-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "frontis-block"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading Alignment", "frontis-block"),
      id: "fb-setting-alignment",
      className: "fb-advanced-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-advanced-alignment-group-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.TEXT_ALIGN.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Alignment: item.value
          });
        },
        className: "fb-advanced-alignment-single-btn ".concat(Alignment === item.value ? 'active' : '')
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading Tag", "frontis-block"),
      className: "fb-setting-tag-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-tag-inner-wrapper"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.HEADING.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Heading_Tag: item.value
          });
        },
        className: "fb-setting-tag-single-btn ".concat(Heading_Tag === item.value ? 'active' : '')
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading Text", "frontis-block"),
      value: Heading_Text,
      onChange: function onChange(value) {
        return setAttributes({
          Heading_Text: value
        });
      },
      className: "fb-setting-text"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "fb-advanced-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description", "frontis-block"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Description", "frontis-block"),
      checked: Sub_Heading_Switcher,
      onChange: function onChange(value) {
        return setAttributes({
          Sub_Heading_Switcher: value
        });
      }
    }), Sub_Heading_Switcher && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignment", "frontis-block"),
      id: "fb-media-alignment",
      className: "fb-advanced-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-advanced-alignment-group-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.TEXT_ALIGN.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            descAlignment: item.value
          });
        },
        className: "fb-advanced-alignment-single-btn ".concat(descAlignment === item.value ? 'active' : '')
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      className: "fb-sub-heading-position"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description Position", "frontis-block"),
      value: Sub_Heading_Position,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.subheading_POSITION,
      onChange: function onChange(value) {
        return setAttributes({
          Sub_Heading_Position: value
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sub Heading Text", "frontis-block"),
      value: Sub_Heading_Text,
      onChange: function onChange(value) {
        return setAttributes({
          Sub_Heading_Text: value
        });
      },
      className: "fb-sub-heading-text"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "fb-info-button-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button", "frontis-block"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Button", "frontis-block"),
      checked: info_Button_Switcher,
      onChange: function onChange(value) {
        return setAttributes({
          info_Button_Switcher: value
        });
      }
    }), info_Button_Switcher && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignment", "frontis-block"),
      id: "fb-media-alignment",
      className: "fb-advanced-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-advanced-alignment-group-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.TEXT_ALIGN.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            buttonAlignment: item.value
          });
        },
        className: "fb-advanced-alignment-single-btn ".concat(buttonAlignment === item.value ? 'active' : '')
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Text", "frontis-block"),
      value: info_Button_Text,
      onChange: function onChange(value) {
        return setAttributes({
          info_Button_Text: value
        });
      },
      className: "fb-info-button-text"
    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
      value: info_Button_Link,
      onChange: function onChange(value, post) {
        // Check if the URL has a protocol (http or https), otherwise prepend it
        var formattedLink = value.startsWith('http://') || value.startsWith('https://') ? value : "https://".concat(value);
        setAttributes({
          info_Button_Link: formattedLink,
          info_Button_Text: post && post.title || info_Button_Text
        });
      }
    }))))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Box", "frontis-block"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: infoBoxBg,
      onChange: function onChange(value) {
        return setAttributes({
          infoBoxBg: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHeading, null, "Spacing"), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_inner_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-label-wrapper"
    }, /*#__PURE__*/React.createElement("p", {
      className: "fb-setting-label-text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-block")), /*#__PURE__*/React.createElement("div", {
      className: "fb-responsive-device-wrapper"
    }, /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-desktop-device ".concat(activePaddingDevice === 'desktop' ? 'active' : ''),
      onClick: function onClick() {
        return handleBoxPaddingDeviceClick('desktop');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-tablet-device  ".concat(activePaddingDevice === 'tab' ? 'active' : ''),
      onClick: function onClick() {
        return handleBoxPaddingDeviceClick('tab');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-mobile-device ".concat(activePaddingDevice === 'mobile' ? 'active' : ''),
      onClick: function onClick() {
        return handleBoxPaddingDeviceClick('mobile');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            infoBoxPaddingUnits: item.value
          });
        },
        className: "fb-setting-units-type-switcher ".concat(infoBoxPaddingUnits === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: activePaddingDevice === 'desktop' ? infoBoxDesktopPadding.top : activePaddingDevice === 'tab' ? infoBoxTabPadding.top : infoBoxMobilePadding.top,
      onChange: function onChange(e) {
        return handleBoxPaddingInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: activePaddingDevice === 'desktop' ? infoBoxDesktopPadding.right : activePaddingDevice === 'tab' ? infoBoxTabPadding.right : infoBoxMobilePadding.right,
      onChange: function onChange(e) {
        return handleBoxPaddingInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: activePaddingDevice === 'desktop' ? infoBoxDesktopPadding.bottom : activePaddingDevice === 'tab' ? infoBoxTabPadding.bottom : infoBoxMobilePadding.bottom,
      onChange: function onChange(e) {
        return handleBoxPaddingInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: activePaddingDevice === 'desktop' ? infoBoxDesktopPadding.left : activePaddingDevice === 'tab' ? infoBoxTabPadding.left : infoBoxMobilePadding.left,
      onChange: function onChange(e) {
        return handleBoxPaddingInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(paddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(paddingLink ? 'is-checked' : ''),
      onClick: handleBoxPaddingLinkToggle
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_inner_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-label-wrapper"
    }, /*#__PURE__*/React.createElement("p", {
      className: "fb-setting-label-text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-block")), /*#__PURE__*/React.createElement("div", {
      className: "fb-responsive-device-wrapper"
    }, /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-desktop-device ".concat(Heading_Active_Margin_Device === 'desktop' ? 'active' : ''),
      onClick: function onClick() {
        return handleMarginDeviceClick('desktop');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-tablet-device ".concat(Heading_Active_Margin_Device === 'tab' ? 'active' : ''),
      onClick: function onClick() {
        return handleMarginDeviceClick('tab');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-mobile-device ".concat(Heading_Active_Margin_Device === 'mobile' ? 'active' : ''),
      onClick: function onClick() {
        return handleMarginDeviceClick('mobile');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Heading_Margin_Units: item.value
          });
        },
        className: "fb-setting-units-type-switcher ".concat(Heading_Margin_Units === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.top : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.top : Heading_Mobile_Margin.top,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.right : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.right : Heading_Mobile_Margin.right,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.bottom : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.bottom : Heading_Mobile_Margin.bottom,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.left : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.left : Heading_Mobile_Margin.left,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(Heading_Margin_Link ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(Heading_Margin_Link ? 'is-checked' : ''),
      onClick: handleMarginLinkToggle
    }))))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHeading, null, "Border"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Style", "frontis-block"),
      value: Heading_Border,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.BORDER_STYLES,
      onChange: function onChange(value) {
        return setAttributes({
          infoBoxBorder: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "frontis-block"),
      className: "fb-setting-color-panel-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.NORMAL_HOVER.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            infoBoxBorderColorSwitcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(infoBoxBorderColorSwitcher === item.value ? 'active' : '')
      }, item.label);
    }))), infoBoxBorderColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-block"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
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
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
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
          color: Heading_Border_Color,
          onChange: function onChange(value) {
            return setAttributes({
              infoBoxBorderColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-block")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
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
          value: Heading_Border_Color,
          onChange: function onChange(value) {
            return setAttributes({
              infoBoxBorderColor: value
            });
          }
        }))));
      }
    })), infoBoxBorderColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-block"),
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
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
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
          color: infoBoxBorderHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              infoBoxBorderHoverColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-hover-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-block")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
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
          value: Heading_Border_Hover_Color,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Border_Hover_Color: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_inner_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label"
    }, /*#__PURE__*/React.createElement("p", {
      className: "sh_heading_label_text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Width", "frontis-block")), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_responsive_devices"
    }, /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_desktop_device ".concat(activeBorderDevice === 'desktop' ? 'active' : ''),
      onClick: function onClick() {
        return handleBorderWidthDeviceClick('desktop');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_tab_device ".concat(activeBorderDevice === 'tab' ? 'active' : ''),
      onClick: function onClick() {
        return handleBorderWidthDeviceClick('tab');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_mobile_device ".concat(activeBorderDevice === 'mobile' ? 'active' : ''),
      onClick: function onClick() {
        return handleBorderWidthDeviceClick('mobile');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Heading_Border_units: item.value
          });
        },
        className: "fb-units-type-switcher ".concat(Heading_Border_units === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: activeBorderDevice === 'desktop' ? infoBoxDesktopBorderWidth.top : activeBorderDevice === 'tab' ? infoBoxTabBorderWidth.top : infoBoxMobileBorderWidth.top,
      onChange: function onChange(e) {
        return handleBoxBorderWidthInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: activeBorderDevice === 'desktop' ? infoBoxDesktopBorderWidth.right : activeBorderDevice === 'tab' ? infoBoxTabBorderWidth.right : infoBoxMobileBorderWidth.right,
      onChange: function onChange(e) {
        return handleBoxBorderWidthInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: activeBorderDevice === 'desktop' ? infoBoxDesktopBorderWidth.bottom : activeBorderDevice === 'tab' ? infoBoxTabBorderWidth.bottom : infoBoxMobileBorderWidth.bottom,
      onChange: function onChange(e) {
        return handleBoxBorderWidthInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: activeBorderDevice === 'desktop' ? infoBoxDesktopBorderWidth.left : activeBorderDevice === 'tab' ? infoBoxTabBorderWidth.left : infoBoxMobileBorderWidth.left,
      onChange: function onChange(e) {
        return handleBoxBorderWidthInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(borderLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(borderLink ? 'is-checked' : ''),
      onClick: handleBoxBorderWidthLinkToggle
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_inner_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label"
    }, /*#__PURE__*/React.createElement("p", {
      className: "sh_heading_label_text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius Width", "frontis-block")), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_responsive_devices"
    }, /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_desktop_device ".concat(activeBorderRadiusDevice === 'desktop' ? 'active' : ''),
      onClick: function onClick() {
        return handleBoxBorderRadiusWidthDeviceClick('desktop');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_tab_device ".concat(activeBorderRadiusDevice === 'tab' ? 'active' : ''),
      onClick: function onClick() {
        return handleBoxBorderRadiusWidthDeviceClick('tab');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_mobile_device ".concat(activeBorderRadiusDevice === 'mobile' ? 'active' : ''),
      onClick: function onClick() {
        return handleBoxBorderRadiusWidthDeviceClick('mobile');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            infoBoxBorderRadiusUnits: item.value
          });
        },
        className: "fb-units-type-switcher ".concat(infoBoxBorderRadiusUnits === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: activeBorderRadiusDevice === 'desktop' ? infoBoxDesktopBorderRadiusWidth.top : activeBorderRadiusDevice === 'tab' ? infoBoxTabBorderRadiusWidth.top : infoBoxMobileBorderRadiusWidth.top,
      onChange: function onChange(e) {
        return handleBoxBorderRadiusWidthInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: activeBorderRadiusDevice === 'desktop' ? infoBoxDesktopBorderRadiusWidth.right : activeBorderRadiusDevice === 'tab' ? infoBoxTabBorderRadiusWidth.right : infoBoxMobileBorderRadiusWidth.right,
      onChange: function onChange(e) {
        return handleBoxBorderRadiusWidthInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: activeBorderRadiusDevice === 'desktop' ? infoBoxDesktopBorderRadiusWidth.bottom : activeBorderRadiusDevice === 'tab' ? infoBoxTabBorderRadiusWidth.bottom : infoBoxMobileBorderRadiusWidth.bottom,
      onChange: function onChange(e) {
        return handleBoxBorderRadiusWidthInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: activeBorderRadiusDevice === 'desktop' ? infoBoxDesktopBorderRadiusWidth.left : activeBorderRadiusDevice === 'tab' ? infoBoxTabBorderRadiusWidth.left : infoBoxMobileBorderRadiusWidth.left,
      onChange: function onChange(e) {
        return handleBoxBorderRadiusWidthInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(borderRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(borderRadiusLink ? 'is-checked' : ''),
      onClick: handleBoxBorderRadiusWidthLinkToggle
    })))))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image/Icon", "frontis-block"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
      __nextHasNoMarginBottom: true,
      label: "Width",
      value: attributes.width,
      onChange: function onChange(value) {
        return setAttributes({
          width: value
        });
      },
      min: 0,
      max: 500
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
      __nextHasNoMarginBottom: true,
      label: "Height",
      value: attributes.height,
      onChange: function onChange(value) {
        return setAttributes({
          height: value
        });
      },
      min: 0,
      max: 500
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading", "frontis-block"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-block"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-typography-icon-dropdown",
      contentClassName: "fb-setting-typography-dropdown-content",
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
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
          className: "fb-setting-typography-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
          icon: "edit",
          className: "fb-setting-typography-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-fontfamily-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-block"),
          options: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FONT_FAMILYS,
          value: Heading_Font_Family,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Font_Family: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-block"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          className: "fb-fontsize-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                Heading_Font_size_units: item.value
              });
            },
            className: "fb-fontsize-units-switcher ".concat(Heading_Font_size_units === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          value: Heading_Font_Size,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Font_Size: value
            });
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: undefined
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-block"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-block"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-block"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-block"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-block"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-block"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-block"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-block"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-block"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-block"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-block"),
            value: "900"
          }],
          value: Heading_Font_Weight,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Font_Weight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-block"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-block"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-block"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-block"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-block"),
            value: "oblique"
          }],
          value: Heading_Font_Style,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Font_Style: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-block"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-block"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-block"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-block"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-block"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-block"),
            value: "lowercase"
          }],
          value: Heading_Text_Transform,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Text_Transform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-block"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-block"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-block"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-block"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-block"),
            value: "overline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-block"),
            value: "line-through"
          }],
          value: Heading_Text_Decoration,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Text_Decoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-letterspacing-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-letterspacing-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-block"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          className: "fb-letterspacing-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                Heading_Letter_Spacing_units: item.value
              });
            },
            className: "fb-letterspacing-units-switcher ".concat(Heading_Letter_Spacing_units === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          value: Heading_Letter_Spacing,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Letter_Spacing: value === 0 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-lineheight-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-lineheight-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-block"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          className: "fb-lineheight-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                Heading_Line_Height_units: item.value
              });
            },
            className: "fb-lineheight-units-switcher ".concat(Heading_Line_Height_units === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          value: Heading_Line_Height,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Line_Height: value === 1 ? undefined : value
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Color", "frontis-block"),
      className: "fb-setting-color-panel-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.NORMAL_HOVER.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Heading_Color_Switcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(Heading_Color_Switcher === item.value ? 'active' : '')
      }, item.label);
    }))), Heading_Color_Switcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-block"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref7) {
        var isOpen = _ref7.isOpen,
          onToggle = _ref7.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
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
          color: Heading_Color,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Color: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-block")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
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
          value: Heading_Color,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Color: value
            });
          }
        }))));
      }
    })), Heading_Color_Switcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-block"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref8) {
        var isOpen = _ref8.isOpen,
          onToggle = _ref8.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
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
          color: Heading_Hover_Color,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Hover_Color: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-hover-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-block")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
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
          value: Heading_Hover_Color,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Hover_Color: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHeading, null, "Spacing"), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_inner_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-label-wrapper"
    }, /*#__PURE__*/React.createElement("p", {
      className: "fb-setting-label-text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-block")), /*#__PURE__*/React.createElement("div", {
      className: "fb-responsive-device-wrapper"
    }, /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-desktop-device ".concat(activePaddingDevice === 'desktop' ? 'active' : ''),
      onClick: function onClick() {
        return handlePaddingDeviceClick('desktop');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-tablet-device  ".concat(activePaddingDevice === 'tab' ? 'active' : ''),
      onClick: function onClick() {
        return handlePaddingDeviceClick('tab');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-mobile-device ".concat(activePaddingDevice === 'mobile' ? 'active' : ''),
      onClick: function onClick() {
        return handlePaddingDeviceClick('mobile');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Heading_padding_units: item.value
          });
        },
        className: "fb-setting-units-type-switcher ".concat(Heading_padding_units === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: activePaddingDevice === 'desktop' ? Heading_Desktop_padding.top : activePaddingDevice === 'tab' ? Heading_Tab_padding.top : Heading_Mobile_padding.top,
      onChange: function onChange(e) {
        return handlePaddingInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: activePaddingDevice === 'desktop' ? Heading_Desktop_padding.right : activePaddingDevice === 'tab' ? Heading_Tab_padding.right : Heading_Mobile_padding.right,
      onChange: function onChange(e) {
        return handlePaddingInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: activePaddingDevice === 'desktop' ? Heading_Desktop_padding.bottom : activePaddingDevice === 'tab' ? Heading_Tab_padding.bottom : Heading_Mobile_padding.bottom,
      onChange: function onChange(e) {
        return handlePaddingInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: activePaddingDevice === 'desktop' ? Heading_Desktop_padding.left : activePaddingDevice === 'tab' ? Heading_Tab_padding.left : Heading_Mobile_padding.left,
      onChange: function onChange(e) {
        return handlePaddingInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(paddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(paddingLink ? 'is-checked' : ''),
      onClick: handlePaddingLinkToggle
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_inner_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-label-wrapper"
    }, /*#__PURE__*/React.createElement("p", {
      className: "fb-setting-label-text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-block")), /*#__PURE__*/React.createElement("div", {
      className: "fb-responsive-device-wrapper"
    }, /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-desktop-device ".concat(Heading_Active_Margin_Device === 'desktop' ? 'active' : ''),
      onClick: function onClick() {
        return handleMarginDeviceClick('desktop');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-tablet-device ".concat(Heading_Active_Margin_Device === 'tab' ? 'active' : ''),
      onClick: function onClick() {
        return handleMarginDeviceClick('tab');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-mobile-device ".concat(Heading_Active_Margin_Device === 'mobile' ? 'active' : ''),
      onClick: function onClick() {
        return handleMarginDeviceClick('mobile');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Heading_Margin_Units: item.value
          });
        },
        className: "fb-setting-units-type-switcher ".concat(Heading_Margin_Units === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.top : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.top : Heading_Mobile_Margin.top,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.right : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.right : Heading_Mobile_Margin.right,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.bottom : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.bottom : Heading_Mobile_Margin.bottom,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.left : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.left : Heading_Mobile_Margin.left,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(Heading_Margin_Link ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(Heading_Margin_Link ? 'is-checked' : ''),
      onClick: handleMarginLinkToggle
    }))))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHeading, null, "Border"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Style", "frontis-block"),
      value: Heading_Border,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.BORDER_STYLES,
      onChange: function onChange(value) {
        return setAttributes({
          Heading_Border: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "frontis-block"),
      className: "fb-setting-color-panel-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.NORMAL_HOVER.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Heading_Border_Color_Switcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(Heading_Border_Color_Switcher === item.value ? 'active' : '')
      }, item.label);
    }))), Heading_Border_Color_Switcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-block"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref9) {
        var isOpen = _ref9.isOpen,
          onToggle = _ref9.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
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
          color: Heading_Border_Color,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Border_Color: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-block")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
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
          value: Heading_Border_Color,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Border_Color: value
            });
          }
        }))));
      }
    })), Heading_Border_Color_Switcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-block"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref10) {
        var isOpen = _ref10.isOpen,
          onToggle = _ref10.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
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
          color: Heading_Border_Hover_Color,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Border_Hover_Color: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-hover-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-block")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
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
          value: Heading_Border_Hover_Color,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Border_Hover_Color: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_inner_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label"
    }, /*#__PURE__*/React.createElement("p", {
      className: "sh_heading_label_text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Width", "frontis-block")), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_responsive_devices"
    }, /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_desktop_device ".concat(activeBorderDevice === 'desktop' ? 'active' : ''),
      onClick: function onClick() {
        return handleBorderWidthDeviceClick('desktop');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_tab_device ".concat(activeBorderDevice === 'tab' ? 'active' : ''),
      onClick: function onClick() {
        return handleBorderWidthDeviceClick('tab');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_mobile_device ".concat(activeBorderDevice === 'mobile' ? 'active' : ''),
      onClick: function onClick() {
        return handleBorderWidthDeviceClick('mobile');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Heading_Border_units: item.value
          });
        },
        className: "fb-units-type-switcher ".concat(Heading_Border_units === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: activeBorderDevice === 'desktop' ? Heading_Desktop_Border_Width.top : activeBorderDevice === 'tab' ? Heading_Tab_Border_Width.top : Heading_Mobile_Border_Width.top,
      onChange: function onChange(e) {
        return handleBorderWidthInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: activeBorderDevice === 'desktop' ? Heading_Desktop_Border_Width.right : activeBorderDevice === 'tab' ? Heading_Tab_Border_Width.right : Heading_Mobile_Border_Width.right,
      onChange: function onChange(e) {
        return handleBorderWidthInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: activeBorderDevice === 'desktop' ? Heading_Desktop_Border_Width.bottom : activeBorderDevice === 'tab' ? Heading_Tab_Border_Width.bottom : Heading_Mobile_Border_Width.bottom,
      onChange: function onChange(e) {
        return handleBorderWidthInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: activeBorderDevice === 'desktop' ? Heading_Desktop_Border_Width.left : activeBorderDevice === 'tab' ? Heading_Tab_Border_Width.left : Heading_Mobile_Border_Width.left,
      onChange: function onChange(e) {
        return handleBorderWidthInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(borderLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(borderLink ? 'is-checked' : ''),
      onClick: handleBorderWidthLinkToggle
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_inner_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label"
    }, /*#__PURE__*/React.createElement("p", {
      className: "sh_heading_label_text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius Width", "frontis-block")), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_responsive_devices"
    }, /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_desktop_device ".concat(activeBorderRadiusDevice === 'desktop' ? 'active' : ''),
      onClick: function onClick() {
        return handleBorderRadiusWidthDeviceClick('desktop');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_tab_device ".concat(activeBorderRadiusDevice === 'tab' ? 'active' : ''),
      onClick: function onClick() {
        return handleBorderRadiusWidthDeviceClick('tab');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_mobile_device ".concat(activeBorderRadiusDevice === 'mobile' ? 'active' : ''),
      onClick: function onClick() {
        return handleBorderRadiusWidthDeviceClick('mobile');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Heading_Border_radius_units: item.value
          });
        },
        className: "fb-units-type-switcher ".concat(Heading_Border_radius_units === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: activeBorderRadiusDevice === 'desktop' ? Heading_Desktop_Border_radius_Width.top : activeBorderRadiusDevice === 'tab' ? Heading_Tab_Border_radius_Width.top : Heading_Mobile_Border_radius_Width.top,
      onChange: function onChange(e) {
        return handleBorderRadiusWidthInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: activeBorderRadiusDevice === 'desktop' ? Heading_Desktop_Border_radius_Width.right : activeBorderRadiusDevice === 'tab' ? Heading_Tab_Border_radius_Width.right : Heading_Mobile_Border_radius_Width.right,
      onChange: function onChange(e) {
        return handleBorderRadiusWidthInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: activeBorderRadiusDevice === 'desktop' ? Heading_Desktop_Border_radius_Width.bottom : activeBorderRadiusDevice === 'tab' ? Heading_Tab_Border_radius_Width.bottom : Heading_Mobile_Border_radius_Width.bottom,
      onChange: function onChange(e) {
        return handleBorderRadiusWidthInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: activeBorderRadiusDevice === 'desktop' ? Heading_Desktop_Border_radius_Width.left : activeBorderRadiusDevice === 'tab' ? Heading_Tab_Border_radius_Width.left : Heading_Mobile_Border_radius_Width.left,
      onChange: function onChange(e) {
        return handleBorderRadiusWidthInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(borderRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(borderRadiusLink ? 'is-checked' : ''),
      onClick: handleBorderRadiusWidthLinkToggle
    })))))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description", "frontis-block"),
      initialOpen: false,
      className: "fb-info-box-desc-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-block"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-typography-icon-dropdown",
      contentClassName: "fb-setting-typography-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref11) {
        var isOpen = _ref11.isOpen,
          onToggle = _ref11.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
          className: "fb-setting-typography-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
          icon: "edit",
          className: "fb-setting-typography-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-fontfamily-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-block"),
          options: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FONT_FAMILYS,
          value: SubHeadingFontFamily,
          onChange: function onChange(value) {
            return setAttributes({
              SubHeadingFontFamily: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-block"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          className: "fb-fontsize-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                SubHeadingFontSizeUnits: item.value
              });
            },
            className: "fb-fontsize-units-switcher ".concat(SubHeadingFontSizeUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          value: SubHeadingFontSize,
          onChange: function onChange(value) {
            return setAttributes({
              SubHeadingFontSize: value
            });
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: undefined
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-block"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-block"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-block"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-block"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-block"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-block"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-block"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-block"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-block"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-block"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-block"),
            value: "900"
          }],
          value: SubHeadingFontWeight,
          onChange: function onChange(value) {
            return setAttributes({
              SubHeadingFontWeight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-block"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-block"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-block"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-block"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-block"),
            value: "oblique"
          }],
          value: SubHeadingFontStyle,
          onChange: function onChange(value) {
            return setAttributes({
              SubHeadingFontStyle: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-block"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-block"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-block"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-block"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-block"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-block"),
            value: "lowercase"
          }],
          value: SubHeadingTextTransform,
          onChange: function onChange(value) {
            return setAttributes({
              SubHeadingTextTransform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-block"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-block"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-block"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-block"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-block"),
            value: "overline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-block"),
            value: "line-through"
          }],
          value: SubHeadingTextDecoration,
          onChange: function onChange(value) {
            return setAttributes({
              SubHeadingTextDecoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-letterspacing-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-letterspacing-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-block"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          className: "fb-letterspacing-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                Heading_Letter_Spacing_units: item.value
              });
            },
            className: "fb-letterspacing-units-switcher ".concat(Heading_Letter_Spacing_units === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          value: Heading_Letter_Spacing,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Letter_Spacing: value === 0 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-lineheight-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-lineheight-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-block"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          className: "fb-lineheight-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                Heading_Line_Height_units: item.value
              });
            },
            className: "fb-lineheight-units-switcher ".concat(Heading_Line_Height_units === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          value: Heading_Line_Height,
          onChange: function onChange(value) {
            return setAttributes({
              Heading_Line_Height: value === 1 ? undefined : value
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Color", "frontis-block"),
      className: "fb-setting-color-panel-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.NORMAL_HOVER.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            SubHeadingColorSwitcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(SubHeadingColorSwitcher === item.value ? 'active' : '')
      }, item.label);
    }))), SubHeadingColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-block"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref12) {
        var isOpen = _ref12.isOpen,
          onToggle = _ref12.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
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
          color: SubHeadingColor,
          onChange: function onChange(value) {
            return setAttributes({
              SubHeadingColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-block")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
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
          value: SubHeadingColor,
          onChange: function onChange(value) {
            return setAttributes({
              SubHeadingColor: value
            });
          }
        }))));
      }
    })), SubHeadingColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-block"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref13) {
        var isOpen = _ref13.isOpen,
          onToggle = _ref13.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
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
          color: SubHeadingHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              SubHeadingHoverColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-hover-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-block")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
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
          value: SubHeadingHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              SubHeadingHoverColor: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHeading, null, "Spacing"), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_inner_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label"
    }, /*#__PURE__*/React.createElement("p", {
      className: "sh_heading_label_text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-block")), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_responsive_devices"
    }, /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_desktop_device ".concat(activePaddingDevice === 'desktop' ? 'active' : ''),
      onClick: function onClick() {
        return handleDescPaddingDeviceClick('desktop');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_tab_device ".concat(activePaddingDevice === 'tab' ? 'active' : ''),
      onClick: function onClick() {
        return handleDescPaddingDeviceClick('tab');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_mobile_device ".concat(activePaddingDevice === 'mobile' ? 'active' : ''),
      onClick: function onClick() {
        return handleDescPaddingDeviceClick('mobile');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            SubHeadingPaddingUnits: item.value
          });
        },
        className: "fb-units-type-switcher ".concat(SubHeadingPaddingUnits === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: activePaddingDevice === 'desktop' ? SubHeadingDesktopPadding.top : activePaddingDevice === 'tab' ? SubHeadingTabPadding.top : SubHeadingMobilePadding.top,
      onChange: function onChange(e) {
        return handleDescPaddingInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: activePaddingDevice === 'desktop' ? SubHeadingDesktopPadding.right : activePaddingDevice === 'tab' ? SubHeadingTabPadding.right : SubHeadingMobilePadding.right,
      onChange: function onChange(e) {
        return handleDescPaddingInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: activePaddingDevice === 'desktop' ? SubHeadingDesktopPadding.bottom : activePaddingDevice === 'tab' ? SubHeadingTabPadding.bottom : SubHeadingMobilePadding.bottom,
      onChange: function onChange(e) {
        return handleDescPaddingInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: activePaddingDevice === 'desktop' ? SubHeadingDesktopPadding.left : activePaddingDevice === 'tab' ? SubHeadingTabPadding.left : SubHeadingMobilePadding.left,
      onChange: function onChange(e) {
        return handleDescPaddingInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(paddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(paddingLink ? 'is-checked' : ''),
      onClick: handleDescPaddingLinkToggle
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_inner_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label"
    }, /*#__PURE__*/React.createElement("p", {
      className: "sh_heading_label_text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-block")), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_responsive_devices"
    }, /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_desktop_device ".concat(Heading_Active_Margin_Device === 'desktop' ? 'active' : ''),
      onClick: function onClick() {
        return handleMarginDeviceClick('desktop');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_tab_device ".concat(Heading_Active_Margin_Device === 'tab' ? 'active' : ''),
      onClick: function onClick() {
        return handleMarginDeviceClick('tab');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "sh_heading_mobile_device ".concat(Heading_Active_Margin_Device === 'mobile' ? 'active' : ''),
      onClick: function onClick() {
        return handleMarginDeviceClick('mobile');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Heading_Margin_Units: item.value
          });
        },
        className: "fb-units-type-switcher ".concat(Heading_Margin_Units === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.top : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.top : Heading_Mobile_Margin.top,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.right : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.right : Heading_Mobile_Margin.right,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.bottom : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.bottom : Heading_Mobile_Margin.bottom,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.left : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.left : Heading_Mobile_Margin.left,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(Heading_Margin_Link ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(Heading_Margin_Link ? 'is-checked' : ''),
      onClick: handleMarginLinkToggle
    })))))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button", "frontis-block"),
      className: "fb-info-box-button-setting-wrapper",
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-block"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-typography-icon-dropdown",
      contentClassName: "fb-setting-typography-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref14) {
        var isOpen = _ref14.isOpen,
          onToggle = _ref14.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
          className: "fb-setting-typography-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
          icon: "edit",
          className: "fb-setting-typography-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-fontfamily-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-block"),
          options: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FONT_FAMILYS,
          value: Heading_Font_Family,
          onChange: function onChange(value) {
            return setAttributes({
              buttonFontFamily: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-block"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          className: "fb-fontsize-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                buttonFontSizeUnits: item.value
              });
            },
            className: "fb-fontsize-units-switcher ".concat(buttonFontSizeUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          value: Heading_Font_Size,
          onChange: function onChange(value) {
            return setAttributes({
              buttonFontSize: value
            });
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: undefined
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-block"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-block"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-block"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-block"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-block"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-block"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-block"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-block"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-block"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-block"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-block"),
            value: "900"
          }],
          value: buttonFontWeight,
          onChange: function onChange(value) {
            return setAttributes({
              buttonFontWeight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-block"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-block"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-block"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-block"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-block"),
            value: "oblique"
          }],
          value: buttonFontStyle,
          onChange: function onChange(value) {
            return setAttributes({
              buttonFontStyle: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-block"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-block"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-block"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-block"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-block"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-block"),
            value: "lowercase"
          }],
          value: buttonTextTransform,
          onChange: function onChange(value) {
            return setAttributes({
              buttonTextTransform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-block"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-block"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-block"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-block"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-block"),
            value: "overline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-block"),
            value: "line-through"
          }],
          value: buttonTextDecoration,
          onChange: function onChange(value) {
            return setAttributes({
              buttonTextDecoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-letterspacing-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-letterspacing-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-block"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          className: "fb-letterspacing-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                buttonLetterSpacingUnits: item.value
              });
            },
            className: "fb-letterspacing-units-switcher ".concat(buttonLetterSpacingUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          value: buttonLetterSpacing,
          onChange: function onChange(value) {
            return setAttributes({
              buttonLetterSpacing: value === 0 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-lineheight-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-lineheight-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-block"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          className: "fb-lineheight-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                buttonLineHeightUnits: item.value
              });
            },
            className: "fb-lineheight-units-switcher ".concat(buttonLineHeightUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          value: buttonLineHeight,
          onChange: function onChange(value) {
            return setAttributes({
              buttonLineHeight: value === 1 ? undefined : value
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Color", "frontis-block"),
      className: "fb-setting-color-panel-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.NORMAL_HOVER.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            buttonColorSwitcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(buttonColorSwitcher === item.value ? 'active' : '')
      }, item.label);
    }))), buttonColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-block"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref15) {
        var isOpen = _ref15.isOpen,
          onToggle = _ref15.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
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
          color: buttonTextColor,
          onChange: function onChange(value) {
            return setAttributes({
              buttonTextColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-block")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
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
          value: buttonTextColor,
          onChange: function onChange(value) {
            return setAttributes({
              buttonTextColor: value
            });
          }
        }))));
      }
    })), buttonColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-block"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref16) {
        var isOpen = _ref16.isOpen,
          onToggle = _ref16.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
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
          color: buttonTextHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              buttonTextHoverColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-hover-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-block")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
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
          value: buttonTextHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              buttonTextHoverColor: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "frontis-block"),
      className: "fb-setting-color-panel-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.NORMAL_HOVER.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            buttonBgColorSwitcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(buttonBgColorSwitcher === item.value ? 'active' : '')
      }, item.label);
    }))), buttonColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-block"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref17) {
        var isOpen = _ref17.isOpen,
          onToggle = _ref17.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
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
          color: buttonBgColor,
          onChange: function onChange(value) {
            return setAttributes({
              buttonBgColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-block")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
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
          value: buttonBgColor,
          onChange: function onChange(value) {
            return setAttributes({
              buttonBgColor: value
            });
          }
        }))));
      }
    })), buttonColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-block"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref18) {
        var isOpen = _ref18.isOpen,
          onToggle = _ref18.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-block"),
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
          color: buttonBgHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              buttonBgHoverColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-hover-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-block")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
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
          value: buttonBgHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              buttonBgHoverColor: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHeading, null, "Spacing"), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_inner_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-label-wrapper"
    }, /*#__PURE__*/React.createElement("p", {
      className: "fb-setting-label-text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-block")), /*#__PURE__*/React.createElement("div", {
      className: "fb-responsive-device-wrapper"
    }, /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-desktop-device ".concat(activePaddingDevice === 'desktop' ? 'active' : ''),
      onClick: function onClick() {
        return handlePaddingDeviceClick('desktop');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-tablet-device  ".concat(activePaddingDevice === 'tab' ? 'active' : ''),
      onClick: function onClick() {
        return handlePaddingDeviceClick('tab');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-mobile-device ".concat(activePaddingDevice === 'mobile' ? 'active' : ''),
      onClick: function onClick() {
        return handlePaddingDeviceClick('mobile');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Heading_padding_units: item.value
          });
        },
        className: "fb-setting-units-type-switcher ".concat(Heading_padding_units === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: activePaddingDevice === 'desktop' ? Heading_Desktop_padding.top : activePaddingDevice === 'tab' ? Heading_Tab_padding.top : Heading_Mobile_padding.top,
      onChange: function onChange(e) {
        return handlePaddingInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: activePaddingDevice === 'desktop' ? Heading_Desktop_padding.right : activePaddingDevice === 'tab' ? Heading_Tab_padding.right : Heading_Mobile_padding.right,
      onChange: function onChange(e) {
        return handlePaddingInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: activePaddingDevice === 'desktop' ? Heading_Desktop_padding.bottom : activePaddingDevice === 'tab' ? Heading_Tab_padding.bottom : Heading_Mobile_padding.bottom,
      onChange: function onChange(e) {
        return handlePaddingInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: activePaddingDevice === 'desktop' ? Heading_Desktop_padding.left : activePaddingDevice === 'tab' ? Heading_Tab_padding.left : Heading_Mobile_padding.left,
      onChange: function onChange(e) {
        return handlePaddingInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(paddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(paddingLink ? 'is-checked' : ''),
      onClick: handlePaddingLinkToggle
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_spacing_inner_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_label_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-label-wrapper"
    }, /*#__PURE__*/React.createElement("p", {
      className: "fb-setting-label-text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-block")), /*#__PURE__*/React.createElement("div", {
      className: "fb-responsive-device-wrapper"
    }, /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-desktop-device ".concat(Heading_Active_Margin_Device === 'desktop' ? 'active' : ''),
      onClick: function onClick() {
        return handleMarginDeviceClick('desktop');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-tablet-device ".concat(Heading_Active_Margin_Device === 'tab' ? 'active' : ''),
      onClick: function onClick() {
        return handleMarginDeviceClick('tab');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "fb-responsive-mobile-device ".concat(Heading_Active_Margin_Device === 'mobile' ? 'active' : ''),
      onClick: function onClick() {
        return handleMarginDeviceClick('mobile');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
      className: "fb-setting-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_3__.separator_UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            Heading_Margin_Units: item.value
          });
        },
        className: "fb-setting-units-type-switcher ".concat(Heading_Margin_Units === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "top",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.top : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.top : Heading_Mobile_Margin.top,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'top');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "right",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.right : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.right : Heading_Mobile_Margin.right,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'right');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "bottom",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.bottom : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.bottom : Heading_Mobile_Margin.bottom,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'bottom');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "frontis-block")), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "left",
      value: Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.left : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.left : Heading_Mobile_Margin.left,
      onChange: function onChange(e) {
        return handleMarginInputChange(e, 'left');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh_heading_input_wrapper"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sh_heading_spacing_input_label"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(Heading_Margin_Link ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(Heading_Margin_Link ? 'is-checked' : ''),
      onClick: handleMarginLinkToggle
    }))))))), tab.name === "advance" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Advanced settings")));
  }))));
}

/***/ }),

/***/ "./src/blocks/info-box/save.js":
/*!*************************************!*\
  !*** ./src/blocks/info-box/save.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);

function save(_ref) {
  var attributes = _ref.attributes;
  var blockID = attributes.blockID,
    boxBgColor = attributes.boxBgColor,
    borderRadius = attributes.borderRadius,
    beforeMediaUrl = attributes.beforeMediaUrl,
    width = attributes.width,
    height = attributes.height,
    titleColor = attributes.titleColor,
    titleText = attributes.titleText;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    id: blockID
  });
  return /*#__PURE__*/React.createElement("div", {
    id: blockID,
    className: "wp-block-ultimate-addons-icon-box-".concat(blockID)
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-compare-block ".concat(blockID)
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      backgroundColor: boxBgColor,
      borderRadius: "".concat(borderRadius, "px")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-media"
  }, /*#__PURE__*/React.createElement("img", {
    src: beforeMediaUrl,
    style: {
      width: "".concat(width, "px"),
      height: "".concat(height, "px")
    },
    alt: "Comparison Image"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: titleColor
    }
  }, titleText)))));
}

/***/ }),

/***/ "./src/blocks/info-box/editor.scss":
/*!*****************************************!*\
  !*** ./src/blocks/info-box/editor.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/info-box/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/info-box/style.scss ***!
  \****************************************/
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

/***/ "./src/blocks/info-box/block.json":
/*!****************************************!*\
  !*** ./src/blocks/info-box/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Info Box","name":"frontis-blocks/info-box","version":"1.0.0","category":"frontis-blocks","icon":"info","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false,"spacing":{"margin":true,"padding":true}},"textdomain":"frontis-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/info-box/index": 0,
/******/ 			"blocks/info-box/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/info-box/style-index"], () => (__webpack_require__("./src/blocks/info-box/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map