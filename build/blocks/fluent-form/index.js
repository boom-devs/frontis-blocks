/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/fluent-form/attributes.js":
/*!**********************************************!*\
  !*** ./src/blocks/fluent-form/attributes.js ***!
  \**********************************************/
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
  deviceType: {
    type: "string",
    "default": "Desktop"
  },
  fluentFormGlobalZIndex: {
    type: "number"
  },
  formId: {
    type: 'string'
  },
  showLabels: {
    type: "boolean",
    "default": true
  },
  showPlaceholder: {
    type: "boolean",
    "default": true
  },
  showErrorMessage: {
    type: "boolean",
    "default": true
  },
  /** Start Label */
  fluentFormLabelColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  fluentFormLabelColor: {
    type: 'string'
  },
  fluentFormLabelHoverColor: {
    type: 'string'
  },
  fluentFormLabelFontFamily: {
    type: "string",
    "default": "inherit"
  },
  fluentFormLabelFontSize: {
    type: "number"
  },
  fluentFormLabelFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormLabelFontWeight: {
    type: "string"
  },
  fluentFormLabelFontStyle: {
    type: "string",
    "default": "normal"
  },
  fluentFormLabelTextTransform: {
    type: "string",
    "default": "none"
  },
  fluentFormLabelTextDecoration: {
    type: "string",
    "default": "none"
  },
  fluentFormLabelLetterSpacing: {
    type: "number"
  },
  fluentFormLabelLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormLabelLineHeight: {
    type: "number"
  },
  fluentFormLabelLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  /** End Label */

  /** Start Input & Textarea */
  fluentFormInputBgColor: {
    type: 'string'
  },
  fluentFormInputColor: {
    type: 'string'
  },
  fluentFormInputFocusColor: {
    type: 'string',
    "default": "#1a7efb"
  },
  fluentFormInputFontFamily: {
    type: "string",
    "default": "inherit"
  },
  fluentFormInputFontSize: {
    type: "number"
  },
  fluentFormInputFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormInputFontWeight: {
    type: "string"
  },
  fluentFormInputFontStyle: {
    type: "string",
    "default": "normal"
  },
  fluentFormInputTextTransform: {
    type: "string",
    "default": "none"
  },
  fluentFormInputTextDecoration: {
    type: "string",
    "default": "none"
  },
  fluentFormInputLetterSpacing: {
    type: "number"
  },
  fluentFormInputLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormInputLineHeight: {
    type: "number"
  },
  fluentFormInputLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  /** End Input & Textarea */

  /** Start Text Indent */
  fluentFormTextIndentSize: {
    type: 'object',
    "default": {
      Desktop: "",
      Tablet: "",
      Mobile: ""
    }
  },
  fluentFormTextIndentSizeUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  /** End Text Indent */

  /** Start Input Width */
  fluentFormInputWidthSize: {
    type: 'object',
    "default": {
      Desktop: "",
      Tablet: "",
      Mobile: ""
    }
  },
  fluentFormInputWidthSizeUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  /** End Input Width */

  /** Start Input Height */
  fluentFormInputHeightSize: {
    type: 'object',
    "default": {
      Desktop: "",
      Tablet: "",
      Mobile: ""
    }
  },
  fluentFormInputHeightSizeUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  /** End Input Height */

  /** Start Textarea Width */
  fluentFormTextareaWidthSize: {
    type: 'object',
    "default": {
      Desktop: "",
      Tablet: "",
      Mobile: ""
    }
  },
  fluentFormTextareaWidthSizeUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  /** End Textarea Width */

  /** Start Textarea Height */
  fluentFormTextareaHeightSize: {
    type: 'object',
    "default": {
      Desktop: "",
      Tablet: "",
      Mobile: ""
    }
  },
  fluentFormTextareaHeightSizeUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  /** End Textarea Height */

  /** Start Spacing Height */
  fluentFormSpacingSize: {
    type: 'object',
    "default": {
      Desktop: "",
      Tablet: "",
      Mobile: ""
    }
  },
  fluentFormSpacingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  /** End Spacing Height */

  /** Start Style Setting */
  fluentFormPaddingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormPaddingDesktop: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormPaddingTablet: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormPaddingMobile: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormPaddingLink: {
    type: "boolean",
    "default": true
  },
  fluentFormBorder: {
    type: 'string',
    "default": "solid"
  },
  fluentFormBorderColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  fluentFormBorderColor: {
    type: 'string',
    "default": "#dadbdd"
  },
  fluentFormBorderHoverColor: {
    type: 'string'
  },
  fluentFormBorderUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormBorderDesktop: {
    type: "object",
    "default": {
      top: "1",
      bottom: "1",
      left: "1",
      right: "1"
    }
  },
  fluentFormBorderTablet: {
    type: "object",
    "default": {
      top: "1",
      bottom: "1",
      left: "1",
      right: "1"
    }
  },
  fluentFormBorderMobile: {
    type: "object",
    "default": {
      top: "1",
      bottom: "1",
      left: "1",
      right: "1"
    }
  },
  fluentFormBorderLink: {
    type: "boolean",
    "default": true
  },
  fluentFormBorderRadiusUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormBorderRadiusDesktop: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormBorderRadiusTablet: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormBorderRadiusMobile: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormBorderRadiusLink: {
    type: "boolean",
    "default": true
  },
  /** End Style Setting */

  /** Start Placeholder Setting */
  fluentFormPlaceholderColor: {
    type: 'string'
  },
  /** End Placeholder Setting */

  /** Start Radio & Checkbox Setting */
  fluentFormRadioFontSize: {
    type: 'object',
    "default": {
      Desktop: '',
      Tablet: '',
      Mobile: ''
    }
  },
  fluentFormRadioFontSizeUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormRadioColor: {
    type: 'string'
  },
  fluentFormRadioCheckedColor: {
    type: 'string'
  },
  fluentFormRadioBorderWidth: {
    type: 'object',
    "default": {
      Desktop: '',
      Tablet: '',
      Mobile: ''
    }
  },
  fluentFormRadioBorderWidthUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormRadioBorderColor: {
    type: 'string'
  },
  fluentFormRadioBorderRadiusUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormRadioBorderRadiusDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormRadioBorderRadiusTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormRadioBorderRadiusMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormRadioBorderRadiusLink: {
    type: "boolean",
    "default": true
  },
  fluentFormCheckBoxBorderRadiusUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormCheckBoxBorderRadiusDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormCheckBoxBorderRadiusTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormCheckBoxBorderRadiusMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormCheckBoxBorderRadiusLink: {
    type: "boolean",
    "default": true
  },
  fluentFormRadioCheckBoxItemSpacing: {
    type: 'object',
    "default": {
      Desktop: '',
      Tablet: '',
      Mobile: ''
    }
  },
  fluentFormRadioCheckBoxItemSpacingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  /** End Radio & Checkbox Setting */

  /** Start Section Break Title Setting */
  fluentFormSectionBreakAlignment: {
    type: "string",
    "default": "left"
  },
  fluentFormSectionBreakTitleColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  fluentFormSectionBreakTitleColor: {
    type: 'string'
  },
  fluentFormSectionBreakTitleHoverColor: {
    type: 'string'
  },
  fluentFormSectionBreakTitleFontFamily: {
    type: "string",
    "default": "inherit"
  },
  fluentFormSectionBreakTitleFontSize: {
    type: "number"
  },
  fluentFormSectionBreakTitleFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormSectionBreakTitleFontWeight: {
    type: "string"
  },
  fluentFormSectionBreakTitleFontStyle: {
    type: "string",
    "default": "normal"
  },
  fluentFormSectionBreakTitleTextTransform: {
    type: "string",
    "default": "none"
  },
  fluentFormSectionBreakTitleTextDecoration: {
    type: "string",
    "default": "none"
  },
  fluentFormSectionBreakTitleLetterSpacing: {
    type: "number"
  },
  fluentFormSectionBreakTitleLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormSectionBreakTitleLineHeight: {
    type: "number"
  },
  fluentFormSectionBreakTitleLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormSectionBreakTitlePaddingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormSectionBreakTitlePaddingDesktop: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormSectionBreakTitlePaddingTablet: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormSectionBreakTitlePaddingMobile: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormSectionBreakTitlePaddingLink: {
    type: "boolean",
    "default": true
  },
  fluentFormSectionBreakTitleMarginUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormSectionBreakTitleMarginDesktop: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormSectionBreakTitleMarginTablet: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormSectionBreakTitleMarginMobile: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormSectionBreakTitleMarginLink: {
    type: "boolean",
    "default": true
  },
  /** End Section Break Title Setting */

  /** Start Section Break Description Setting */
  fluentFormSectionBreakDescColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  fluentFormSectionBreakDescColor: {
    type: 'string'
  },
  fluentFormSectionBreakDescHoverColor: {
    type: 'string'
  },
  fluentFormSectionBreakDescFontFamily: {
    type: "string",
    "default": "inherit"
  },
  fluentFormSectionBreakDescFontSize: {
    type: "number"
  },
  fluentFormSectionBreakDescFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormSectionBreakDescFontWeight: {
    type: "string"
  },
  fluentFormSectionBreakDescFontStyle: {
    type: "string",
    "default": "normal"
  },
  fluentFormSectionBreakDescTextTransform: {
    type: "string",
    "default": "none"
  },
  fluentFormSectionBreakDescTextDecoration: {
    type: "string",
    "default": "none"
  },
  fluentFormSectionBreakDescLetterSpacing: {
    type: "number"
  },
  fluentFormSectionBreakDescLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormSectionBreakDescLineHeight: {
    type: "number"
  },
  fluentFormSectionBreakDescLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormSectionBreakDescPaddingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormSectionBreakDescPaddingDesktop: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormSectionBreakDescPaddingTablet: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormSectionBreakDescPaddingMobile: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormSectionBreakDescPaddingLink: {
    type: "boolean",
    "default": true
  },
  fluentFormSectionBreakDescMarginUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormSectionBreakDescMarginDesktop: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormSectionBreakDescMarginTablet: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormSectionBreakDescMarginMobile: {
    type: "object",
    "default": {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }
  },
  fluentFormSectionBreakDescMarginLink: {
    type: "boolean",
    "default": true
  },
  /** End Section Break Description Setting */

  /** Start HTML Setting */
  fluentFormHtmlAlignment: {
    type: "string",
    "default": "left"
  },
  fluentFormHtmlColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  fluentFormHtmlColor: {
    type: 'string'
  },
  fluentFormHtmlHoverColor: {
    type: 'string'
  },
  fluentFormHtmlFontFamily: {
    type: "string",
    "default": "inherit"
  },
  fluentFormHtmlFontSize: {
    type: "number"
  },
  fluentFormHtmlFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormHtmlFontWeight: {
    type: "string"
  },
  fluentFormHtmlFontStyle: {
    type: "string",
    "default": "normal"
  },
  fluentFormHtmlTextTransform: {
    type: "string",
    "default": "none"
  },
  fluentFormHtmlTextDecoration: {
    type: "string",
    "default": "none"
  },
  fluentFormHtmlLetterSpacing: {
    type: "number"
  },
  fluentFormHtmlLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormHtmlLineHeight: {
    type: "number"
  },
  fluentFormHtmlLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormHtmlPaddingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormHtmlPaddingDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormHtmlPaddingTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormHtmlPaddingMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormHtmlPaddingLink: {
    type: "boolean",
    "default": true
  },
  fluentFormHtmlMarginUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormHtmlMarginDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormHtmlMarginTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormHtmlMarginMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormHtmlMarginLink: {
    type: "boolean",
    "default": true
  },
  /** End HTML Setting */

  /** Start Submit Setting */
  fluentFormSubmitAlignment: {
    type: "string",
    "default": "left"
  },
  fluentFormSubmitHeight: {
    type: 'object',
    "default": {
      Desktop: '',
      Tablet: '',
      Mobile: ''
    }
  },
  fluentFormSubmitHeightUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormSubmitWidthSelect: {
    type: 'string',
    "default": 'custom'
  },
  fluentFormSubmitWidth: {
    type: 'object',
    "default": {
      Desktop: '',
      Tablet: '',
      Mobile: ''
    }
  },
  fluentFormSubmitWidthUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormSubmitColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  fluentFormSubmitColor: {
    type: 'string'
  },
  fluentFormSubmitHoverColor: {
    type: 'string'
  },
  fluentFormSubmitBgColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  fluentFormSubmitBgColor: {
    type: 'string'
  },
  fluentFormSubmitBgHoverColor: {
    type: 'string'
  },
  fluentFormSubmitFontFamily: {
    type: "string",
    "default": "inherit"
  },
  fluentFormSubmitFontSize: {
    type: "number"
  },
  fluentFormSubmitFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormSubmitFontWeight: {
    type: "string"
  },
  fluentFormSubmitFontStyle: {
    type: "string",
    "default": "normal"
  },
  fluentFormSubmitTextTransform: {
    type: "string",
    "default": "none"
  },
  fluentFormSubmitTextDecoration: {
    type: "string",
    "default": "none"
  },
  fluentFormSubmitLetterSpacing: {
    type: "number"
  },
  fluentFormSubmitLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormSubmitLineHeight: {
    type: "number"
  },
  fluentFormSubmitLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormSubmitPaddingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormSubmitPaddingDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSubmitPaddingTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSubmitPaddingMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSubmitPaddingLink: {
    type: "boolean",
    "default": true
  },
  fluentFormSubmitMarginUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormSubmitMarginDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSubmitMarginTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSubmitMarginMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSubmitMarginLink: {
    type: "boolean",
    "default": true
  },
  fluentFormSubmitBorder: {
    type: 'string',
    "default": "none"
  },
  fluentFormSubmitBorderColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  fluentFormSubmitBorderColor: {
    type: 'string'
  },
  fluentFormSubmitBorderHoverColor: {
    type: 'string'
  },
  fluentFormSubmitBorderUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormSubmitBorderDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSubmitBorderTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSubmitBorderMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSubmitBorderLink: {
    type: "boolean",
    "default": true
  },
  fluentFormSubmitBorderRadiusUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormSubmitBorderRadiusDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSubmitBorderRadiusTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSubmitBorderRadiusMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSubmitBorderRadiusLink: {
    type: "boolean",
    "default": true
  },
  /** End Submit Setting */

  /** Start Success Message Setting */
  fluentFormSuccessColor: {
    type: 'string'
  },
  fluentFormSuccessBgColor: {
    type: 'string'
  },
  fluentFormSuccessFontFamily: {
    type: "string",
    "default": "inherit"
  },
  fluentFormSuccessFontSize: {
    type: "number"
  },
  fluentFormSuccessFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormSuccessFontWeight: {
    type: "string"
  },
  fluentFormSuccessFontStyle: {
    type: "string",
    "default": "normal"
  },
  fluentFormSuccessTextTransform: {
    type: "string",
    "default": "none"
  },
  fluentFormSuccessTextDecoration: {
    type: "string",
    "default": "none"
  },
  fluentFormSuccessLetterSpacing: {
    type: "number"
  },
  fluentFormSuccessLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormSuccessLineHeight: {
    type: "number"
  },
  fluentFormSuccessLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormSuccessBorder: {
    type: 'string',
    "default": "none"
  },
  fluentFormSuccessBorderColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  fluentFormSuccessBorderColor: {
    type: 'string'
  },
  fluentFormSuccessBorderHoverColor: {
    type: 'string'
  },
  fluentFormSuccessBorderUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormSuccessBorderDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSuccessBorderTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSuccessBorderMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSuccessBorderLink: {
    type: "boolean",
    "default": true
  },
  fluentFormSuccessBorderRadiusUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormSuccessBorderRadiusDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSuccessBorderRadiusTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSuccessBorderRadiusMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormSuccessBorderRadiusLink: {
    type: "boolean",
    "default": true
  },
  /** End Success Message Setting */

  /** Start Error message Setting */
  fluentFormErrorColor: {
    type: 'string'
  },
  fluentFormErrorFontFamily: {
    type: "string",
    "default": "inherit"
  },
  fluentFormErrorFontSize: {
    type: "number"
  },
  fluentFormErrorFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormErrorFontWeight: {
    type: "string"
  },
  fluentFormErrorFontStyle: {
    type: "string",
    "default": "normal"
  },
  fluentFormErrorTextTransform: {
    type: "string",
    "default": "none"
  },
  fluentFormErrorTextDecoration: {
    type: "string",
    "default": "none"
  },
  fluentFormErrorLetterSpacing: {
    type: "number"
  },
  fluentFormErrorLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormErrorLineHeight: {
    type: "number"
  },
  fluentFormErrorLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  fluentFormErrorPaddingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormErrorPaddingDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormErrorPaddingTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormErrorPaddingMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormErrorPaddingLink: {
    type: "boolean",
    "default": true
  },
  fluentFormErrorMarginUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormErrorMarginDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormErrorMarginTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormErrorMarginMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormErrorMarginLink: {
    type: "boolean",
    "default": true
  },
  /** End Error Message Setting */

  /** Start Global Setting */
  fluentFormGlobalPaddingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormGlobalPaddingDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormGlobalPaddingTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormGlobalPaddingMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormGlobalPaddingLink: {
    type: "boolean",
    "default": true
  },
  fluentFormGlobalMarginUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormGlobalMarginDesktop: {
    type: "object",
    "default": {
      top: 30,
      bottom: 30,
      left: 0,
      right: 0
    }
  },
  fluentFormGlobalMarginTablet: {
    type: "object",
    "default": {
      top: 20,
      bottom: 20,
      left: 0,
      right: 0
    }
  },
  fluentFormGlobalMarginMobile: {
    type: "object",
    "default": {
      top: 20,
      bottom: 20,
      left: 0,
      right: 0
    }
  },
  fluentFormGlobalMarginLink: {
    type: "boolean",
    "default": true
  },
  fluentFormGlobalBgColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  fluentFormGlobalBgColor: {
    type: "string"
  },
  fluentFormGlobalBgHoverColor: {
    type: 'string'
  },
  fluentFormGlobalBorder: {
    type: 'string',
    "default": "none"
  },
  fluentFormGlobalBorderColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  fluentFormGlobalBorderColor: {
    type: 'string'
  },
  fluentFormGlobalBorderHoverColor: {
    type: 'string'
  },
  fluentFormGlobalBorderUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormGlobalBorderDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormGlobalBorderTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormGlobalBorderMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormGlobalBorderLink: {
    type: "boolean",
    "default": true
  },
  fluentFormGlobalBorderRadiusUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  fluentFormGlobalBorderRadiusDesktop: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormGlobalBorderRadiusTablet: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormGlobalBorderRadiusMobile: {
    type: "object",
    "default": {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  fluentFormGlobalBorderRadiusLink: {
    type: "boolean",
    "default": true
  }
  /** End Global Setting */
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/fluent-form/constants/constants.js":
/*!*******************************************************!*\
  !*** ./src/blocks/fluent-form/constants/constants.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BORDER_STYLES: () => (/* binding */ BORDER_STYLES),
/* harmony export */   FONT_FAMILYS: () => (/* binding */ FONT_FAMILYS),
/* harmony export */   FORM_FULL_LISTS: () => (/* binding */ FORM_FULL_LISTS),
/* harmony export */   FORM_LISTS: () => (/* binding */ FORM_LISTS),
/* harmony export */   HEADING: () => (/* binding */ HEADING),
/* harmony export */   NORMAL_HOVER: () => (/* binding */ NORMAL_HOVER),
/* harmony export */   PRESETS: () => (/* binding */ PRESETS),
/* harmony export */   SEPERATOR_STYLES: () => (/* binding */ SEPERATOR_STYLES),
/* harmony export */   TEXT_ALIGN: () => (/* binding */ TEXT_ALIGN),
/* harmony export */   UNIT_TYPES: () => (/* binding */ UNIT_TYPES),
/* harmony export */   WIDTH_STYLES: () => (/* binding */ WIDTH_STYLES),
/* harmony export */   separator_POSITION: () => (/* binding */ separator_POSITION),
/* harmony export */   separator_TYPE: () => (/* binding */ separator_TYPE),
/* harmony export */   subheading_POSITION: () => (/* binding */ subheading_POSITION)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var FORM_FULL_LISTS = FrontisBlocksData.fluent_form_lists && JSON.parse(FrontisBlocksData.fluent_form_lists);
var FORM_LISTS = FORM_FULL_LISTS && FORM_FULL_LISTS.map(function (obj) {
  return {
    label: obj.label,
    value: obj.value
  };
});
var UNIT_TYPES = [{
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
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line", "frontis-blocks"),
  value: "line"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon", "frontis-blocks"),
  value: "icon"
}];
var separator_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-blocks"),
  value: "top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-blocks"),
  value: "bottom"
}];
var subheading_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "frontis-blocks"),
  value: "top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "frontis-blocks"),
  value: "bottom"
}];
var PRESETS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
  value: "preset-0"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 1", "frontis-blocks"),
  value: "preset-1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 2", "frontis-blocks"),
  value: "preset-2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 3", "frontis-blocks"),
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
}];
var HEADING = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H1", "frontis-blocks"),
  value: "h1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H2", "frontis-blocks"),
  value: "h2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H3", "frontis-blocks"),
  value: "h3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H4", "frontis-blocks"),
  value: "h4"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H5", "frontis-blocks"),
  value: "h5"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H6", "frontis-blocks"),
  value: "h6"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("P", "frontis-blocks"),
  value: "p"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Div", "frontis-blocks"),
  value: "span"
}];
var SEPERATOR_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "frontis-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "frontis-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "frontis-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "frontis-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "frontis-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "frontis-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "frontis-blocks"),
  value: "ridge"
}];
var BORDER_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "frontis-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "frontis-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "frontis-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "frontis-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "frontis-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "frontis-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "frontis-blocks"),
  value: "ridge"
}];
var WIDTH_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom", "frontis-blocks"),
  value: "custom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Full Width", "frontis-blocks"),
  value: "full-width"
}];
var FONT_FAMILYS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
  value: "Default"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ABeeZee", "frontis-blocks"),
  value: "ABeeZee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abel", "frontis-blocks"),
  value: "Abel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abhaya Libre", "frontis-blocks"),
  value: "Abhaya Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abril Fatface", "frontis-blocks"),
  value: "Abril Fatface"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abyssinica SIL", "frontis-blocks"),
  value: "Abyssinica SIL"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aclonica", "frontis-blocks"),
  value: "Aclonica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Acme", "frontis-blocks"),
  value: "Acme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Actor", "frontis-blocks"),
  value: "Actor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Adamina", "frontis-blocks"),
  value: "Adamina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Adobe Blank", "frontis-blocks"),
  value: "Adobe Blank"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Advent Pro", "frontis-blocks"),
  value: "Advent Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aguafina Script", "frontis-blocks"),
  value: "Aguafina Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Akronim", "frontis-blocks"),
  value: "Akronim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("aksarabaligalang", "frontis-blocks"),
  value: "aksarabaligalang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aladin", "frontis-blocks"),
  value: "Aladin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aldrich", "frontis-blocks"),
  value: "Aldrich"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alef", "frontis-blocks"),
  value: "Alef"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("alefhebrew", "frontis-blocks"),
  value: "alefhebrew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya", "frontis-blocks"),
  value: "Alegreya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya Sans", "frontis-blocks"),
  value: "Alegreya Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya Sans SC", "frontis-blocks"),
  value: "Alegreya Sans SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya SC", "frontis-blocks"),
  value: "Alegreya SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aleo", "frontis-blocks"),
  value: "Aleo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alex Brush", "frontis-blocks"),
  value: "Alex Brush"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alfa Slab One", "frontis-blocks"),
  value: "Alfa Slab One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alice", "frontis-blocks"),
  value: "Alice"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alike", "frontis-blocks"),
  value: "Alike"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alike Angular", "frontis-blocks"),
  value: "Alike Angular"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allan", "frontis-blocks"),
  value: "Allan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allerta", "frontis-blocks"),
  value: "Allerta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allerta Stencil", "frontis-blocks"),
  value: "Allerta Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allura", "frontis-blocks"),
  value: "Allura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Almendra", "frontis-blocks"),
  value: "Almendra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Almendra Display", "frontis-blocks"),
  value: "Almendra Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Almendra SC", "frontis-blocks"),
  value: "Almendra SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amarante", "frontis-blocks"),
  value: "Amarante"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amaranth", "frontis-blocks"),
  value: "Amaranth"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amatic SC", "frontis-blocks"),
  value: "Amatic SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amethysta", "frontis-blocks"),
  value: "Amethysta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amiko", "frontis-blocks"),
  value: "Amiko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amiri", "frontis-blocks"),
  value: "Amiri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amita", "frontis-blocks"),
  value: "Amita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("amstelvaralpha", "frontis-blocks"),
  value: "amstelvaralpha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anaheim", "frontis-blocks"),
  value: "Anaheim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Andada", "frontis-blocks"),
  value: "Andada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Andada SC", "frontis-blocks"),
  value: "Andada SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Andika", "frontis-blocks"),
  value: "Andika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Angkor", "frontis-blocks"),
  value: "Angkor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Annie Use Your Telescope", "frontis-blocks"),
  value: "Annie Use Your Telescope"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anonymous Pro", "frontis-blocks"),
  value: "Anonymous Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antic", "frontis-blocks"),
  value: "Antic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antic Didone", "frontis-blocks"),
  value: "Antic Didone"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antic Slab", "frontis-blocks"),
  value: "Antic Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anton", "frontis-blocks"),
  value: "Anton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antonio", "frontis-blocks"),
  value: "Antonio"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arapey", "frontis-blocks"),
  value: "Arapey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arbutus", "frontis-blocks"),
  value: "Arbutus"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arbutus Slab", "frontis-blocks"),
  value: "Arbutus Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Architects Daughter", "frontis-blocks"),
  value: "Architects Daughter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Archivo", "frontis-blocks"),
  value: "Archivo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Archivo Black", "frontis-blocks"),
  value: "Archivo Black"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Archivo Narrow", "frontis-blocks"),
  value: "Archivo Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("archivovfbeta", "frontis-blocks"),
  value: "archivovfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aref Ruqaa", "frontis-blocks"),
  value: "Aref Ruqaa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arima Madurai", "frontis-blocks"),
  value: "Arima Madurai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arimo", "frontis-blocks"),
  value: "Arimo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arizonia", "frontis-blocks"),
  value: "Arizonia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Armata", "frontis-blocks"),
  value: "Armata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arsenal", "frontis-blocks"),
  value: "Arsenal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Artifika", "frontis-blocks"),
  value: "Artifika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arvo", "frontis-blocks"),
  value: "Arvo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arya", "frontis-blocks"),
  value: "Arya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asap", "frontis-blocks"),
  value: "Asap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asap Condensed", "frontis-blocks"),
  value: "Asap Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("asapvfbeta", "frontis-blocks"),
  value: "asapvfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asar", "frontis-blocks"),
  value: "Asar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asset", "frontis-blocks"),
  value: "Asset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Assistant", "frontis-blocks"),
  value: "Assistant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Astloch", "frontis-blocks"),
  value: "Astloch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asul", "frontis-blocks"),
  value: "Asul"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Athiti", "frontis-blocks"),
  value: "Athiti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Atomic Age", "frontis-blocks"),
  value: "Atomic Age"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aubrey", "frontis-blocks"),
  value: "Aubrey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Audiowide", "frontis-blocks"),
  value: "Audiowide"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Autour One", "frontis-blocks"),
  value: "Autour One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Average", "frontis-blocks"),
  value: "Average"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Average Sans", "frontis-blocks"),
  value: "Average Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Gruesa Libre", "frontis-blocks"),
  value: "Averia Gruesa Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Libre", "frontis-blocks"),
  value: "Averia Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Sans Libre", "frontis-blocks"),
  value: "Averia Sans Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Serif Libre", "frontis-blocks"),
  value: "Averia Serif Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("B612", "frontis-blocks"),
  value: "B612"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("B612 Mono", "frontis-blocks"),
  value: "B612 Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bad Script", "frontis-blocks"),
  value: "Bad Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bahiana", "frontis-blocks"),
  value: "Bahiana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bahianita", "frontis-blocks"),
  value: "Bahianita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bai Jamjuree", "frontis-blocks"),
  value: "Bai Jamjuree"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo", "frontis-blocks"),
  value: "Baloo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Bhai", "frontis-blocks"),
  value: "Baloo Bhai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Bhaijaan", "frontis-blocks"),
  value: "Baloo Bhaijaan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Bhaina", "frontis-blocks"),
  value: "Baloo Bhaina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Chettan", "frontis-blocks"),
  value: "Baloo Chettan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Da", "frontis-blocks"),
  value: "Baloo Da"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Paaji", "frontis-blocks"),
  value: "Baloo Paaji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Tamma", "frontis-blocks"),
  value: "Baloo Tamma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Tammudu", "frontis-blocks"),
  value: "Baloo Tammudu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Thambi", "frontis-blocks"),
  value: "Baloo Thambi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Balthazar", "frontis-blocks"),
  value: "Balthazar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bangers", "frontis-blocks"),
  value: "Bangers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barlow", "frontis-blocks"),
  value: "Barlow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barlow Condensed", "frontis-blocks"),
  value: "Barlow Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barlow Semi Condensed", "frontis-blocks"),
  value: "Barlow Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barriecito", "frontis-blocks"),
  value: "Barriecito"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barrio", "frontis-blocks"),
  value: "Barrio"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Basic", "frontis-blocks"),
  value: "Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Battambang", "frontis-blocks"),
  value: "Battambang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baumans", "frontis-blocks"),
  value: "Baumans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bayon", "frontis-blocks"),
  value: "Bayon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Belgrano", "frontis-blocks"),
  value: "Belgrano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bellefair", "frontis-blocks"),
  value: "Bellefair"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Belleza", "frontis-blocks"),
  value: "Belleza"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("BenchNine", "frontis-blocks"),
  value: "BenchNine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bentham", "frontis-blocks"),
  value: "Bentham"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Berkshire Swash", "frontis-blocks"),
  value: "Berkshire Swash"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Beth Ellen", "frontis-blocks"),
  value: "Beth Ellen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bevan", "frontis-blocks"),
  value: "Bevan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bhavuka", "frontis-blocks"),
  value: "Bhavuka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bigelow Rules", "frontis-blocks"),
  value: "Bigelow Rules"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bigshot One", "frontis-blocks"),
  value: "Bigshot One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bilbo", "frontis-blocks"),
  value: "Bilbo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bilbo Swash Caps", "frontis-blocks"),
  value: "Bilbo Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bio Rhyme", "frontis-blocks"),
  value: "Bio Rhyme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bio Rhyme Expanded", "frontis-blocks"),
  value: "Bio Rhyme Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Biryani", "frontis-blocks"),
  value: "Biryani"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bitter", "frontis-blocks"),
  value: "Bitter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black And White Picture", "frontis-blocks"),
  value: "Black And White Picture"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black Han Sans", "frontis-blocks"),
  value: "Black Han Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black Ops One", "frontis-blocks"),
  value: "Black Ops One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bokor", "frontis-blocks"),
  value: "Bokor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bonbon", "frontis-blocks"),
  value: "Bonbon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Boogaloo", "frontis-blocks"),
  value: "Boogaloo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bowlby One", "frontis-blocks"),
  value: "Bowlby One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bowlby One SC", "frontis-blocks"),
  value: "Bowlby One SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Brawler", "frontis-blocks"),
  value: "Brawler"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bree Serif", "frontis-blocks"),
  value: "Bree Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bruno Ace", "frontis-blocks"),
  value: "Bruno Ace"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bruno Ace SC", "frontis-blocks"),
  value: "Bruno Ace SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bubblegum Sans", "frontis-blocks"),
  value: "Bubblegum Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bubbler One", "frontis-blocks"),
  value: "Bubbler One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buda", "frontis-blocks"),
  value: "Buda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buenard", "frontis-blocks"),
  value: "Buenard"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee", "frontis-blocks"),
  value: "Bungee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Hairline", "frontis-blocks"),
  value: "Bungee Hairline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Inline", "frontis-blocks"),
  value: "Bungee Inline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Outline", "frontis-blocks"),
  value: "Bungee Outline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Shade", "frontis-blocks"),
  value: "Bungee Shade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Butcherman", "frontis-blocks"),
  value: "Butcherman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Butcherman Caps", "frontis-blocks"),
  value: "Butcherman Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Butterfly Kids", "frontis-blocks"),
  value: "Butterfly Kids"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cabin", "frontis-blocks"),
  value: "Cabin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cabin Condensed", "frontis-blocks"),
  value: "Cabin Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cabin Sketch", "frontis-blocks"),
  value: "Cabin Sketch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("cabinvfbeta", "frontis-blocks"),
  value: "cabinvfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caesar Dressing", "frontis-blocks"),
  value: "Caesar Dressing"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cagliostro", "frontis-blocks"),
  value: "Cagliostro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cairo", "frontis-blocks"),
  value: "Cairo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Calligraffitti", "frontis-blocks"),
  value: "Calligraffitti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cambay", "frontis-blocks"),
  value: "Cambay"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cambo", "frontis-blocks"),
  value: "Cambo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Candal", "frontis-blocks"),
  value: "Candal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cantarell", "frontis-blocks"),
  value: "Cantarell"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cantata One", "frontis-blocks"),
  value: "Cantata One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cantora One", "frontis-blocks"),
  value: "Cantora One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capriola", "frontis-blocks"),
  value: "Capriola"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cardo", "frontis-blocks"),
  value: "Cardo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carme", "frontis-blocks"),
  value: "Carme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carrois Gothic", "frontis-blocks"),
  value: "Carrois Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carrois Gothic SC", "frontis-blocks"),
  value: "Carrois Gothic SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carter One", "frontis-blocks"),
  value: "Carter One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Catamaran", "frontis-blocks"),
  value: "Catamaran"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caudex", "frontis-blocks"),
  value: "Caudex"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caveat", "frontis-blocks"),
  value: "Caveat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caveat Brush", "frontis-blocks"),
  value: "Caveat Brush"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cedarville Cursive", "frontis-blocks"),
  value: "Cedarville Cursive"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ceviche One", "frontis-blocks"),
  value: "Ceviche One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chakra Petch", "frontis-blocks"),
  value: "Chakra Petch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Changa", "frontis-blocks"),
  value: "Changa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Changa One", "frontis-blocks"),
  value: "Changa One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chango", "frontis-blocks"),
  value: "Chango"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Charm", "frontis-blocks"),
  value: "Charm"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Charmonman", "frontis-blocks"),
  value: "Charmonman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chau Philomene One", "frontis-blocks"),
  value: "Chau Philomene One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chela One", "frontis-blocks"),
  value: "Chela One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chelsea Market", "frontis-blocks"),
  value: "Chelsea Market"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chenla", "frontis-blocks"),
  value: "Chenla"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cherry Cream Soda", "frontis-blocks"),
  value: "Cherry Cream Soda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cherry Swash", "frontis-blocks"),
  value: "Cherry Swash"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chewy", "frontis-blocks"),
  value: "Chewy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chicle", "frontis-blocks"),
  value: "Chicle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chilanka", "frontis-blocks"),
  value: "Chilanka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chivo", "frontis-blocks"),
  value: "Chivo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chonburi", "frontis-blocks"),
  value: "Chonburi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cinzel", "frontis-blocks"),
  value: "Cinzel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cinzel Decorative", "frontis-blocks"),
  value: "Cinzel Decorative"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Clicker Script", "frontis-blocks"),
  value: "Clicker Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coda", "frontis-blocks"),
  value: "Coda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coda Caption", "frontis-blocks"),
  value: "Coda Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Codystar", "frontis-blocks"),
  value: "Codystar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coiny", "frontis-blocks"),
  value: "Coiny"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Combo", "frontis-blocks"),
  value: "Combo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Comfortaa", "frontis-blocks"),
  value: "Comfortaa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coming Soon", "frontis-blocks"),
  value: "Coming Soon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Concert One", "frontis-blocks"),
  value: "Concert One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Condiment", "frontis-blocks"),
  value: "Condiment"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content", "frontis-blocks"),
  value: "Content"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contrail One", "frontis-blocks"),
  value: "Contrail One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Convergence", "frontis-blocks"),
  value: "Convergence"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cookie", "frontis-blocks"),
  value: "Cookie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Copse", "frontis-blocks"),
  value: "Copse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Corben", "frontis-blocks"),
  value: "Corben"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant", "frontis-blocks"),
  value: "Cormorant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Garamond", "frontis-blocks"),
  value: "Cormorant Garamond"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Infant", "frontis-blocks"),
  value: "Cormorant Infant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant SC", "frontis-blocks"),
  value: "Cormorant SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Unicase", "frontis-blocks"),
  value: "Cormorant Unicase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Upright", "frontis-blocks"),
  value: "Cormorant Upright"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Courgette", "frontis-blocks"),
  value: "Courgette"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cousine", "frontis-blocks"),
  value: "Cousine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coustard", "frontis-blocks"),
  value: "Coustard"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Covered By Your Grace", "frontis-blocks"),
  value: "Covered By Your Grace"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crafty Girls", "frontis-blocks"),
  value: "Crafty Girls"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Creepster", "frontis-blocks"),
  value: "Creepster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Creepster Caps", "frontis-blocks"),
  value: "Creepster Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crete Round", "frontis-blocks"),
  value: "Crete Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crimson Pro", "frontis-blocks"),
  value: "Crimson Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crimson Text", "frontis-blocks"),
  value: "Crimson Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Croissant One", "frontis-blocks"),
  value: "Croissant One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crushed", "frontis-blocks"),
  value: "Crushed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cuprum", "frontis-blocks"),
  value: "Cuprum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cute Font", "frontis-blocks"),
  value: "Cute Font"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cutive", "frontis-blocks"),
  value: "Cutive"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cutive Mono", "frontis-blocks"),
  value: "Cutive Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Damion", "frontis-blocks"),
  value: "Damion"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dancing Script", "frontis-blocks"),
  value: "Dancing Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dangrek", "frontis-blocks"),
  value: "Dangrek"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Darker Grotesque", "frontis-blocks"),
  value: "Darker Grotesque"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dawning of a New Day", "frontis-blocks"),
  value: "Dawning of a New Day"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Days One", "frontis-blocks"),
  value: "Days One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("decovaralpha", "frontis-blocks"),
  value: "decovaralpha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dekko", "frontis-blocks"),
  value: "Dekko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delius", "frontis-blocks"),
  value: "Delius"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delius Swash Caps", "frontis-blocks"),
  value: "Delius Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delius Unicase", "frontis-blocks"),
  value: "Delius Unicase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Della Respira", "frontis-blocks"),
  value: "Della Respira"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Denk One", "frontis-blocks"),
  value: "Denk One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Devonshire", "frontis-blocks"),
  value: "Devonshire"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dhurjati", "frontis-blocks"),
  value: "Dhurjati"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dhyana", "frontis-blocks"),
  value: "Dhyana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Didact Gothic", "frontis-blocks"),
  value: "Didact Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Digital Numbers", "frontis-blocks"),
  value: "Digital Numbers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diplomata", "frontis-blocks"),
  value: "Diplomata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diplomata SC", "frontis-blocks"),
  value: "Diplomata SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DM Sans", "frontis-blocks"),
  value: "DM Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DM Serif Display", "frontis-blocks"),
  value: "DM Serif Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DM Serif Text", "frontis-blocks"),
  value: "DM Serif Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Do Hyeon", "frontis-blocks"),
  value: "Do Hyeon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dokdo", "frontis-blocks"),
  value: "Dokdo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Domine", "frontis-blocks"),
  value: "Domine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Donegal One", "frontis-blocks"),
  value: "Donegal One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Doppio One", "frontis-blocks"),
  value: "Doppio One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dorsa", "frontis-blocks"),
  value: "Dorsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dosis", "frontis-blocks"),
  value: "Dosis"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dr Sugiyama", "frontis-blocks"),
  value: "Dr Sugiyama"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duru Sans", "frontis-blocks"),
  value: "Duru Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynalight", "frontis-blocks"),
  value: "Dynalight"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eagle Lake", "frontis-blocks"),
  value: "Eagle Lake"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("East Sea Dokdo", "frontis-blocks"),
  value: "East Sea Dokdo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eater", "frontis-blocks"),
  value: "Eater"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eater Caps", "frontis-blocks"),
  value: "Eater Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("EB Garamond", "frontis-blocks"),
  value: "EB Garamond"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Economica", "frontis-blocks"),
  value: "Economica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eczar", "frontis-blocks"),
  value: "Eczar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ek Mukta", "frontis-blocks"),
  value: "Ek Mukta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("El Messiri", "frontis-blocks"),
  value: "El Messiri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Electrolize", "frontis-blocks"),
  value: "Electrolize"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Elsie", "frontis-blocks"),
  value: "Elsie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Elsie Swash Caps", "frontis-blocks"),
  value: "Elsie Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Emblema One", "frontis-blocks"),
  value: "Emblema One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Emilys Candy", "frontis-blocks"),
  value: "Emilys Candy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans", "frontis-blocks"),
  value: "Encode Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Condensed", "frontis-blocks"),
  value: "Encode Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Expanded", "frontis-blocks"),
  value: "Encode Sans Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Semi Condensed", "frontis-blocks"),
  value: "Encode Sans Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Semi Expanded", "frontis-blocks"),
  value: "Encode Sans Semi Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Engagement", "frontis-blocks"),
  value: "Engagement"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Englebert", "frontis-blocks"),
  value: "Englebert"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enriqueta", "frontis-blocks"),
  value: "Enriqueta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Erica One", "frontis-blocks"),
  value: "Erica One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Esteban", "frontis-blocks"),
  value: "Esteban"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Euphoria Script", "frontis-blocks"),
  value: "Euphoria Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ewert", "frontis-blocks"),
  value: "Ewert"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Exo", "frontis-blocks"),
  value: "Exo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Exo 2", "frontis-blocks"),
  value: "Exo 2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Expletus Sans", "frontis-blocks"),
  value: "Expletus Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fahkwang", "frontis-blocks"),
  value: "Fahkwang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fanwood Text", "frontis-blocks"),
  value: "Fanwood Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Farro", "frontis-blocks"),
  value: "Farro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Farsan", "frontis-blocks"),
  value: "Farsan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fascinate", "frontis-blocks"),
  value: "Fascinate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fascinate Inline", "frontis-blocks"),
  value: "Fascinate Inline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Faster One", "frontis-blocks"),
  value: "Faster One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fasthand", "frontis-blocks"),
  value: "Fasthand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fauna One", "frontis-blocks"),
  value: "Fauna One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Faustina", "frontis-blocks"),
  value: "Faustina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("faustinavfbeta", "frontis-blocks"),
  value: "faustinavfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Federant", "frontis-blocks"),
  value: "Federant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Federo", "frontis-blocks"),
  value: "Federo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Felipa", "frontis-blocks"),
  value: "Felipa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fenix", "frontis-blocks"),
  value: "Fenix"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Finger Paint", "frontis-blocks"),
  value: "Finger Paint"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Code", "frontis-blocks"),
  value: "Fira Code"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Mono", "frontis-blocks"),
  value: "Fira Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Sans", "frontis-blocks"),
  value: "Fira Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Sans Condensed", "frontis-blocks"),
  value: "Fira Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Sans Extra Condensed", "frontis-blocks"),
  value: "Fira Sans Extra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fjalla One", "frontis-blocks"),
  value: "Fjalla One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fjord One", "frontis-blocks"),
  value: "Fjord One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flamenco", "frontis-blocks"),
  value: "Flamenco"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flavors", "frontis-blocks"),
  value: "Flavors"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fondamento", "frontis-blocks"),
  value: "Fondamento"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fontdiner Swanky", "frontis-blocks"),
  value: "Fontdiner Swanky"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Forum", "frontis-blocks"),
  value: "Forum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Francois One", "frontis-blocks"),
  value: "Francois One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Frank Ruhl Libre", "frontis-blocks"),
  value: "Frank Ruhl Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Freckle Face", "frontis-blocks"),
  value: "Freckle Face"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fredericka the Great", "frontis-blocks"),
  value: "Fredericka the Great"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fredoka One", "frontis-blocks"),
  value: "Fredoka One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Freehand", "frontis-blocks"),
  value: "Freehand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fresca", "frontis-blocks"),
  value: "Fresca"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Frijole", "frontis-blocks"),
  value: "Frijole"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fruktur", "frontis-blocks"),
  value: "Fruktur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fugaz One", "frontis-blocks"),
  value: "Fugaz One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gabriela", "frontis-blocks"),
  value: "Gabriela"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gaegu", "frontis-blocks"),
  value: "Gaegu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gafata", "frontis-blocks"),
  value: "Gafata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Galada", "frontis-blocks"),
  value: "Galada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Galdeano", "frontis-blocks"),
  value: "Galdeano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Galindo", "frontis-blocks"),
  value: "Galindo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gamja Flower", "frontis-blocks"),
  value: "Gamja Flower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gayathri", "frontis-blocks"),
  value: "Gayathri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gemunu Libre", "frontis-blocks"),
  value: "Gemunu Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gentium Basic", "frontis-blocks"),
  value: "Gentium Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gentium Book Basic", "frontis-blocks"),
  value: "Gentium Book Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Geo", "frontis-blocks"),
  value: "Geo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Geostar", "frontis-blocks"),
  value: "Geostar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Geostar Fill", "frontis-blocks"),
  value: "Geostar Fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Germania One", "frontis-blocks"),
  value: "Germania One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("GFS Didot", "frontis-blocks"),
  value: "GFS Didot"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("GFS Neohellenic", "frontis-blocks"),
  value: "GFS Neohellenic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gidugu", "frontis-blocks"),
  value: "Gidugu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gilda Display", "frontis-blocks"),
  value: "Gilda Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Give You Glory", "frontis-blocks"),
  value: "Give You Glory"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Glass Antiqua", "frontis-blocks"),
  value: "Glass Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Glegoo", "frontis-blocks"),
  value: "Glegoo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gloria Hallelujah", "frontis-blocks"),
  value: "Gloria Hallelujah"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Goblin One", "frontis-blocks"),
  value: "Goblin One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gochi Hand", "frontis-blocks"),
  value: "Gochi Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gorditas", "frontis-blocks"),
  value: "Gorditas"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gothic A1", "frontis-blocks"),
  value: "Gothic A1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Goudy Bookletter 1911", "frontis-blocks"),
  value: "Goudy Bookletter 1911"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Graduate", "frontis-blocks"),
  value: "Graduate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grand Hotel", "frontis-blocks"),
  value: "Grand Hotel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gravitas One", "frontis-blocks"),
  value: "Gravitas One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Great Vibes", "frontis-blocks"),
  value: "Great Vibes"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grenze", "frontis-blocks"),
  value: "Grenze"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Griffy", "frontis-blocks"),
  value: "Griffy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gruppo", "frontis-blocks"),
  value: "Gruppo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gudea", "frontis-blocks"),
  value: "Gudea"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gugi", "frontis-blocks"),
  value: "Gugi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gurajada", "frontis-blocks"),
  value: "Gurajada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Habibi", "frontis-blocks"),
  value: "Habibi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Halant", "frontis-blocks"),
  value: "Halant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hammersmith One", "frontis-blocks"),
  value: "Hammersmith One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hanalei", "frontis-blocks"),
  value: "Hanalei"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hanalei Fill", "frontis-blocks"),
  value: "Hanalei Fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Handlee", "frontis-blocks"),
  value: "Handlee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("hanna", "frontis-blocks"),
  value: "hanna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("hannari", "frontis-blocks"),
  value: "hannari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hanuman", "frontis-blocks"),
  value: "Hanuman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Happy Monkey", "frontis-blocks"),
  value: "Happy Monkey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Harmattan", "frontis-blocks"),
  value: "Harmattan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Headland One", "frontis-blocks"),
  value: "Headland One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heebo", "frontis-blocks"),
  value: "Heebo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Henny Penny", "frontis-blocks"),
  value: "Henny Penny"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hermeneus One", "frontis-blocks"),
  value: "Hermeneus One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Herr Von Muellerhoff", "frontis-blocks"),
  value: "Herr Von Muellerhoff"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hi Melody", "frontis-blocks"),
  value: "Hi Melody"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind", "frontis-blocks"),
  value: "Hind"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Colombo", "frontis-blocks"),
  value: "Hind Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Guntur", "frontis-blocks"),
  value: "Hind Guntur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Jalandhar", "frontis-blocks"),
  value: "Hind Jalandhar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Kochi", "frontis-blocks"),
  value: "Hind Kochi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Madurai", "frontis-blocks"),
  value: "Hind Madurai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Mysuru", "frontis-blocks"),
  value: "Hind Mysuru"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Siliguri", "frontis-blocks"),
  value: "Hind Siliguri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Vadodara", "frontis-blocks"),
  value: "Hind Vadodara"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Holtwood One SC", "frontis-blocks"),
  value: "Holtwood One SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Homemade Apple", "frontis-blocks"),
  value: "Homemade Apple"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Homenaje", "frontis-blocks"),
  value: "Homenaje"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Mono", "frontis-blocks"),
  value: "IBM Plex Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Sans", "frontis-blocks"),
  value: "IBM Plex Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Sans Condensed", "frontis-blocks"),
  value: "IBM Plex Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Serif", "frontis-blocks"),
  value: "IBM Plex Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Iceberg", "frontis-blocks"),
  value: "Iceberg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Iceland", "frontis-blocks"),
  value: "Iceland"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Double Pica", "frontis-blocks"),
  value: "IM Fell Double Pica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Double Pica SC", "frontis-blocks"),
  value: "IM Fell Double Pica SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell DW Pica", "frontis-blocks"),
  value: "IM Fell DW Pica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell DW Pica SC", "frontis-blocks"),
  value: "IM Fell DW Pica SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell English", "frontis-blocks"),
  value: "IM Fell English"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell English SC", "frontis-blocks"),
  value: "IM Fell English SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell French Canon", "frontis-blocks"),
  value: "IM Fell French Canon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell French Canon SC", "frontis-blocks"),
  value: "IM Fell French Canon SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Great Primer", "frontis-blocks"),
  value: "IM Fell Great Primer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Great Primer SC", "frontis-blocks"),
  value: "IM Fell Great Primer SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Imprima", "frontis-blocks"),
  value: "Imprima"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inconsolata", "frontis-blocks"),
  value: "Inconsolata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inder", "frontis-blocks"),
  value: "Inder"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Indie Flower", "frontis-blocks"),
  value: "Indie Flower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inika", "frontis-blocks"),
  value: "Inika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inknut Antiqua", "frontis-blocks"),
  value: "Inknut Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Irish Grover", "frontis-blocks"),
  value: "Irish Grover"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Istok Web", "frontis-blocks"),
  value: "Istok Web"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italiana", "frontis-blocks"),
  value: "Italiana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italianno", "frontis-blocks"),
  value: "Italianno"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Itim", "frontis-blocks"),
  value: "Itim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jacques Francois", "frontis-blocks"),
  value: "Jacques Francois"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jacques Francois Shadow", "frontis-blocks"),
  value: "Jacques Francois Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jaldi", "frontis-blocks"),
  value: "Jaldi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jejugothic", "frontis-blocks"),
  value: "jejugothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jejuhallasan", "frontis-blocks"),
  value: "jejuhallasan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jejumyeongjo", "frontis-blocks"),
  value: "jejumyeongjo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jim Nightshade", "frontis-blocks"),
  value: "Jim Nightshade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jockey One", "frontis-blocks"),
  value: "Jockey One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jolly Lodger", "frontis-blocks"),
  value: "Jolly Lodger"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jomhuria", "frontis-blocks"),
  value: "Jomhuria"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jomolhari", "frontis-blocks"),
  value: "jomolhari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Josefin Sans", "frontis-blocks"),
  value: "Josefin Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Josefin Sans Std Light", "frontis-blocks"),
  value: "Josefin Sans Std Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Josefin Slab", "frontis-blocks"),
  value: "Josefin Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Joti One", "frontis-blocks"),
  value: "Joti One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jua", "frontis-blocks"),
  value: "Jua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Judson", "frontis-blocks"),
  value: "Judson"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Julee", "frontis-blocks"),
  value: "Julee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Julius Sans One", "frontis-blocks"),
  value: "Julius Sans One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Junge", "frontis-blocks"),
  value: "Junge"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jura", "frontis-blocks"),
  value: "Jura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Just Another Hand", "frontis-blocks"),
  value: "Just Another Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Just Me Again Down Here", "frontis-blocks"),
  value: "Just Me Again Down Here"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("K2D", "frontis-blocks"),
  value: "K2D"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kadwa", "frontis-blocks"),
  value: "Kadwa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kalam", "frontis-blocks"),
  value: "Kalam"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kameron", "frontis-blocks"),
  value: "Kameron"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kanit", "frontis-blocks"),
  value: "Kanit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kantumruy", "frontis-blocks"),
  value: "Kantumruy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karla", "frontis-blocks"),
  value: "Karla"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karla Tamil Inclined", "frontis-blocks"),
  value: "Karla Tamil Inclined"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karla Tamil Upright", "frontis-blocks"),
  value: "Karla Tamil Upright"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karma", "frontis-blocks"),
  value: "Karma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Katibeh", "frontis-blocks"),
  value: "Katibeh"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kaushan Script", "frontis-blocks"),
  value: "Kaushan Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kavivanar", "frontis-blocks"),
  value: "Kavivanar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kavoon", "frontis-blocks"),
  value: "Kavoon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kdam Thmor", "frontis-blocks"),
  value: "Kdam Thmor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Keania One", "frontis-blocks"),
  value: "Keania One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kelly Slab", "frontis-blocks"),
  value: "Kelly Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kenia", "frontis-blocks"),
  value: "Kenia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Khand", "frontis-blocks"),
  value: "Khand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Khmer", "frontis-blocks"),
  value: "Khmer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Khula", "frontis-blocks"),
  value: "Khula"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("khyay", "frontis-blocks"),
  value: "khyay"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kirang Haerang", "frontis-blocks"),
  value: "Kirang Haerang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kite One", "frontis-blocks"),
  value: "Kite One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Knewave", "frontis-blocks"),
  value: "Knewave"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kodchasan", "frontis-blocks"),
  value: "Kodchasan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("KoHo", "frontis-blocks"),
  value: "KoHo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("kokoro", "frontis-blocks"),
  value: "kokoro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("kopubbatang", "frontis-blocks"),
  value: "kopubbatang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kotta One", "frontis-blocks"),
  value: "Kotta One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Koulen", "frontis-blocks"),
  value: "Koulen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kranky", "frontis-blocks"),
  value: "Kranky"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kreon", "frontis-blocks"),
  value: "Kreon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kristi", "frontis-blocks"),
  value: "Kristi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Krona One", "frontis-blocks"),
  value: "Krona One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Krub", "frontis-blocks"),
  value: "Krub"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kumar One", "frontis-blocks"),
  value: "Kumar One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kurale", "frontis-blocks"),
  value: "Kurale"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("La Belle Aurore", "frontis-blocks"),
  value: "La Belle Aurore"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lacquer", "frontis-blocks"),
  value: "Lacquer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Laila", "frontis-blocks"),
  value: "Laila"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lakki Reddy", "frontis-blocks"),
  value: "Lakki Reddy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lalezar", "frontis-blocks"),
  value: "Lalezar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lancelot", "frontis-blocks"),
  value: "Lancelot"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("laomuangdon", "frontis-blocks"),
  value: "laomuangdon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("laomuangkhong", "frontis-blocks"),
  value: "laomuangkhong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("laosanspro", "frontis-blocks"),
  value: "laosanspro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lateef", "frontis-blocks"),
  value: "Lateef"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lato", "frontis-blocks"),
  value: "Lato"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("League Script", "frontis-blocks"),
  value: "League Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Leckerli One", "frontis-blocks"),
  value: "Leckerli One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ledger", "frontis-blocks"),
  value: "Ledger"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lekton", "frontis-blocks"),
  value: "Lekton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lemon", "frontis-blocks"),
  value: "Lemon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lemonada", "frontis-blocks"),
  value: "Lemonada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 128", "frontis-blocks"),
  value: "Libre Barcode 128"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 128 Text", "frontis-blocks"),
  value: "Libre Barcode 128 Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39", "frontis-blocks"),
  value: "Libre Barcode 39"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39 Extended", "frontis-blocks"),
  value: "Libre Barcode 39 Extended"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39 Extended Text", "frontis-blocks"),
  value: "Libre Barcode 39 Extended Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39 Text", "frontis-blocks"),
  value: "Libre Barcode 39 Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Baskerville", "frontis-blocks"),
  value: "Libre Baskerville"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Caslon Display", "frontis-blocks"),
  value: "Libre Caslon Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Caslon Text", "frontis-blocks"),
  value: "Libre Caslon Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Franklin", "frontis-blocks"),
  value: "Libre Franklin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Life Savers", "frontis-blocks"),
  value: "Life Savers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lilita One", "frontis-blocks"),
  value: "Lilita One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lily Script One", "frontis-blocks"),
  value: "Lily Script One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Limelight", "frontis-blocks"),
  value: "Limelight"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Linden Hill", "frontis-blocks"),
  value: "Linden Hill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Literata", "frontis-blocks"),
  value: "Literata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Liu Jian Mao Cao", "frontis-blocks"),
  value: "Liu Jian Mao Cao"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Livvic", "frontis-blocks"),
  value: "Livvic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lobster", "frontis-blocks"),
  value: "Lobster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lobster Two", "frontis-blocks"),
  value: "Lobster Two"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lohit Bengali", "frontis-blocks"),
  value: "Lohit Bengali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lohit Tamil", "frontis-blocks"),
  value: "Lohit Tamil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("lohitdevanagari", "frontis-blocks"),
  value: "lohitdevanagari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Outline", "frontis-blocks"),
  value: "Londrina Outline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Shadow", "frontis-blocks"),
  value: "Londrina Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Sketch", "frontis-blocks"),
  value: "Londrina Sketch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Solid", "frontis-blocks"),
  value: "Londrina Solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Long Cang", "frontis-blocks"),
  value: "Long Cang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lora", "frontis-blocks"),
  value: "Lora"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Love Ya Like A Sister", "frontis-blocks"),
  value: "Love Ya Like A Sister"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loved by the King", "frontis-blocks"),
  value: "Loved by the King"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lovers Quarrel", "frontis-blocks"),
  value: "Lovers Quarrel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Luckiest Guy", "frontis-blocks"),
  value: "Luckiest Guy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lusitana", "frontis-blocks"),
  value: "Lusitana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lustria", "frontis-blocks"),
  value: "Lustria"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ma Shan Zheng", "frontis-blocks"),
  value: "Ma Shan Zheng"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Macondo", "frontis-blocks"),
  value: "Macondo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Macondo Swash Caps", "frontis-blocks"),
  value: "Macondo Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mada", "frontis-blocks"),
  value: "Mada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Magra", "frontis-blocks"),
  value: "Magra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maiden Orange", "frontis-blocks"),
  value: "Maiden Orange"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maitree", "frontis-blocks"),
  value: "Maitree"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Major Mono Display", "frontis-blocks"),
  value: "Major Mono Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mako", "frontis-blocks"),
  value: "Mako"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mali", "frontis-blocks"),
  value: "Mali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mallanna", "frontis-blocks"),
  value: "Mallanna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mandali", "frontis-blocks"),
  value: "Mandali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Manjari", "frontis-blocks"),
  value: "Manjari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Manuale", "frontis-blocks"),
  value: "Manuale"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marcellus", "frontis-blocks"),
  value: "Marcellus"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marcellus SC", "frontis-blocks"),
  value: "Marcellus SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marck Script", "frontis-blocks"),
  value: "Marck Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margarine", "frontis-blocks"),
  value: "Margarine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marko One", "frontis-blocks"),
  value: "Marko One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marmelad", "frontis-blocks"),
  value: "Marmelad"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Martel", "frontis-blocks"),
  value: "Martel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Martel Sans", "frontis-blocks"),
  value: "Martel Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marvel", "frontis-blocks"),
  value: "Marvel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mate", "frontis-blocks"),
  value: "Mate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mate SC", "frontis-blocks"),
  value: "Mate SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maven Pro", "frontis-blocks"),
  value: "Maven Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("mavenprovfbeta", "frontis-blocks"),
  value: "mavenprovfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("McLaren", "frontis-blocks"),
  value: "McLaren"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Meddon", "frontis-blocks"),
  value: "Meddon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("MedievalSharp", "frontis-blocks"),
  value: "MedievalSharp"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Medula One", "frontis-blocks"),
  value: "Medula One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Meera Inimai", "frontis-blocks"),
  value: "Meera Inimai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Megrim", "frontis-blocks"),
  value: "Megrim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Meie Script", "frontis-blocks"),
  value: "Meie Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merge One", "frontis-blocks"),
  value: "Merge One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merienda", "frontis-blocks"),
  value: "Merienda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merienda One", "frontis-blocks"),
  value: "Merienda One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merriweather", "frontis-blocks"),
  value: "Merriweather"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merriweather Sans", "frontis-blocks"),
  value: "Merriweather Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mervale Script", "frontis-blocks"),
  value: "Mervale Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metal", "frontis-blocks"),
  value: "Metal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metal Mania", "frontis-blocks"),
  value: "Metal Mania"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metamorphous", "frontis-blocks"),
  value: "Metamorphous"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metrophobic", "frontis-blocks"),
  value: "Metrophobic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miama", "frontis-blocks"),
  value: "Miama"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Michroma", "frontis-blocks"),
  value: "Michroma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Milonga", "frontis-blocks"),
  value: "Milonga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miltonian", "frontis-blocks"),
  value: "Miltonian"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miltonian Tattoo", "frontis-blocks"),
  value: "Miltonian Tattoo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mina", "frontis-blocks"),
  value: "Mina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miniver", "frontis-blocks"),
  value: "Miniver"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miriam Libre", "frontis-blocks"),
  value: "Miriam Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miss Fajardose", "frontis-blocks"),
  value: "Miss Fajardose"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miss Saint Delafield", "frontis-blocks"),
  value: "Miss Saint Delafield"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Modak", "frontis-blocks"),
  value: "Modak"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Modern Antiqua", "frontis-blocks"),
  value: "Modern Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Molengo", "frontis-blocks"),
  value: "Molengo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Molle", "frontis-blocks"),
  value: "Molle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monda", "frontis-blocks"),
  value: "Monda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monofett", "frontis-blocks"),
  value: "Monofett"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monoton", "frontis-blocks"),
  value: "Monoton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monsieur La Doulaise", "frontis-blocks"),
  value: "Monsieur La Doulaise"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montaga", "frontis-blocks"),
  value: "Montaga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montez", "frontis-blocks"),
  value: "Montez"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montserrat", "frontis-blocks"),
  value: "Montserrat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montserrat Alternates", "frontis-blocks"),
  value: "Montserrat Alternates"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montserrat Subrayada", "frontis-blocks"),
  value: "Montserrat Subrayada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Moul", "frontis-blocks"),
  value: "Moul"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Moulpali", "frontis-blocks"),
  value: "Moulpali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mountains of Christmas", "frontis-blocks"),
  value: "Mountains of Christmas"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mouse Memoirs", "frontis-blocks"),
  value: "Mouse Memoirs"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("mplus1p", "frontis-blocks"),
  value: "mplus1p"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr Bedford", "frontis-blocks"),
  value: "Mr Bedford"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr Bedfort", "frontis-blocks"),
  value: "Mr Bedfort"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr Dafoe", "frontis-blocks"),
  value: "Mr Dafoe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr De Haviland", "frontis-blocks"),
  value: "Mr De Haviland"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mrs Saint Delafield", "frontis-blocks"),
  value: "Mrs Saint Delafield"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mrs Sheppards", "frontis-blocks"),
  value: "Mrs Sheppards"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta", "frontis-blocks"),
  value: "Mukta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta Mahee", "frontis-blocks"),
  value: "Mukta Mahee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta Malar", "frontis-blocks"),
  value: "Mukta Malar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta Vaani", "frontis-blocks"),
  value: "Mukta Vaani"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Muli", "frontis-blocks"),
  value: "Muli"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("myanmarsanspro", "frontis-blocks"),
  value: "myanmarsanspro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mystery Quest", "frontis-blocks"),
  value: "Mystery Quest"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Brush Script", "frontis-blocks"),
  value: "Nanum Brush Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Gothic", "frontis-blocks"),
  value: "Nanum Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Gothic Coding", "frontis-blocks"),
  value: "Nanum Gothic Coding"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Myeongjo", "frontis-blocks"),
  value: "Nanum Myeongjo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Pen Script", "frontis-blocks"),
  value: "Nanum Pen Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("NATS", "frontis-blocks"),
  value: "NATS"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Neucha", "frontis-blocks"),
  value: "Neucha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Neuton", "frontis-blocks"),
  value: "Neuton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("New Rocker", "frontis-blocks"),
  value: "New Rocker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("News Cycle", "frontis-blocks"),
  value: "News Cycle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("nicomoji", "frontis-blocks"),
  value: "nicomoji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Niconne", "frontis-blocks"),
  value: "Niconne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("nikukyu", "frontis-blocks"),
  value: "nikukyu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Niramit", "frontis-blocks"),
  value: "Niramit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nixie One", "frontis-blocks"),
  value: "Nixie One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nobile", "frontis-blocks"),
  value: "Nobile"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nokora", "frontis-blocks"),
  value: "Nokora"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Norican", "frontis-blocks"),
  value: "Norican"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nosifer", "frontis-blocks"),
  value: "Nosifer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nosifer Caps", "frontis-blocks"),
  value: "Nosifer Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Notable", "frontis-blocks"),
  value: "Notable"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nothing You Could Do", "frontis-blocks"),
  value: "Nothing You Could Do"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Noticia Text", "frontis-blocks"),
  value: "Noticia Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Noto Sans", "frontis-blocks"),
  value: "Noto Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Noto Serif", "frontis-blocks"),
  value: "Noto Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("notosanstamil", "frontis-blocks"),
  value: "notosanstamil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Cut", "frontis-blocks"),
  value: "Nova Cut"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Flat", "frontis-blocks"),
  value: "Nova Flat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Mono", "frontis-blocks"),
  value: "Nova Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Oval", "frontis-blocks"),
  value: "Nova Oval"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Round", "frontis-blocks"),
  value: "Nova Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Script", "frontis-blocks"),
  value: "Nova Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Slim", "frontis-blocks"),
  value: "Nova Slim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Square", "frontis-blocks"),
  value: "Nova Square"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("NTR", "frontis-blocks"),
  value: "NTR"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Numans", "frontis-blocks"),
  value: "Numans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nunito", "frontis-blocks"),
  value: "Nunito"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nunito Sans", "frontis-blocks"),
  value: "Nunito Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Odor Mean Chey", "frontis-blocks"),
  value: "Odor Mean Chey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Offside", "frontis-blocks"),
  value: "Offside"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("OFL Sorts Mill Goudy TT", "frontis-blocks"),
  value: "OFL Sorts Mill Goudy TT"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Old Standard TT", "frontis-blocks"),
  value: "Old Standard TT"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oldenburg", "frontis-blocks"),
  value: "Oldenburg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oleo Script", "frontis-blocks"),
  value: "Oleo Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oleo Script Swash Caps", "frontis-blocks"),
  value: "Oleo Script Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open Sans", "frontis-blocks"),
  value: "Open Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open Sans Condensed", "frontis-blocks"),
  value: "Open Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("opensanshebrew", "frontis-blocks"),
  value: "opensanshebrew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("opensanshebrewcondensed", "frontis-blocks"),
  value: "opensanshebrewcondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oranienbaum", "frontis-blocks"),
  value: "Oranienbaum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Orbitron", "frontis-blocks"),
  value: "Orbitron"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oregano", "frontis-blocks"),
  value: "Oregano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Orienta", "frontis-blocks"),
  value: "Orienta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Original Surfer", "frontis-blocks"),
  value: "Original Surfer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oswald", "frontis-blocks"),
  value: "Oswald"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Over the Rainbow", "frontis-blocks"),
  value: "Over the Rainbow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlock", "frontis-blocks"),
  value: "Overlock"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlock SC", "frontis-blocks"),
  value: "Overlock SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overpass", "frontis-blocks"),
  value: "Overpass"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overpass Mono", "frontis-blocks"),
  value: "Overpass Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ovo", "frontis-blocks"),
  value: "Ovo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oxygen", "frontis-blocks"),
  value: "Oxygen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oxygen Mono", "frontis-blocks"),
  value: "Oxygen Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pacifico", "frontis-blocks"),
  value: "Pacifico"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padauk", "frontis-blocks"),
  value: "Padauk"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Palanquin", "frontis-blocks"),
  value: "Palanquin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Palanquin Dark", "frontis-blocks"),
  value: "Palanquin Dark"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pangolin", "frontis-blocks"),
  value: "Pangolin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Paprika", "frontis-blocks"),
  value: "Paprika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Parisienne", "frontis-blocks"),
  value: "Parisienne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Passero One", "frontis-blocks"),
  value: "Passero One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Passion One", "frontis-blocks"),
  value: "Passion One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pathway Gothic One", "frontis-blocks"),
  value: "Pathway Gothic One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Patrick Hand", "frontis-blocks"),
  value: "Patrick Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Patrick Hand SC", "frontis-blocks"),
  value: "Patrick Hand SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pattaya", "frontis-blocks"),
  value: "Pattaya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Patua One", "frontis-blocks"),
  value: "Patua One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pavanam", "frontis-blocks"),
  value: "Pavanam"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Paytone One", "frontis-blocks"),
  value: "Paytone One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pecita", "frontis-blocks"),
  value: "Pecita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Peddana", "frontis-blocks"),
  value: "Peddana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Peralta", "frontis-blocks"),
  value: "Peralta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Permanent Marker", "frontis-blocks"),
  value: "Permanent Marker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Petit Formal Script", "frontis-blocks"),
  value: "Petit Formal Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Petrona", "frontis-blocks"),
  value: "Petrona"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Phetsarath", "frontis-blocks"),
  value: "Phetsarath"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Philosopher", "frontis-blocks"),
  value: "Philosopher"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Piedra", "frontis-blocks"),
  value: "Piedra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pinyon Script", "frontis-blocks"),
  value: "Pinyon Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pirata One", "frontis-blocks"),
  value: "Pirata One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Plaster", "frontis-blocks"),
  value: "Plaster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Play", "frontis-blocks"),
  value: "Play"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Playball", "frontis-blocks"),
  value: "Playball"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Playfair Display", "frontis-blocks"),
  value: "Playfair Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Playfair Display SC", "frontis-blocks"),
  value: "Playfair Display SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Podkova", "frontis-blocks"),
  value: "Podkova"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("podkovavfbeta", "frontis-blocks"),
  value: "podkovavfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poetsen One", "frontis-blocks"),
  value: "Poetsen One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poiret One", "frontis-blocks"),
  value: "Poiret One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poller One", "frontis-blocks"),
  value: "Poller One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poly", "frontis-blocks"),
  value: "Poly"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pompiere", "frontis-blocks"),
  value: "Pompiere"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ponnala", "frontis-blocks"),
  value: "Ponnala"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pontano Sans", "frontis-blocks"),
  value: "Pontano Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poor Story", "frontis-blocks"),
  value: "Poor Story"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poppins", "frontis-blocks"),
  value: "Poppins"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Port Lligat Sans", "frontis-blocks"),
  value: "Port Lligat Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Port Lligat Slab", "frontis-blocks"),
  value: "Port Lligat Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Porter Sans Block", "frontis-blocks"),
  value: "Porter Sans Block"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Post No Bills Colombo", "frontis-blocks"),
  value: "Post No Bills Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Post No Bills Jaffna", "frontis-blocks"),
  value: "Post No Bills Jaffna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pragati Narrow", "frontis-blocks"),
  value: "Pragati Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preahvihear", "frontis-blocks"),
  value: "Preahvihear"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Press Start 2P", "frontis-blocks"),
  value: "Press Start 2P"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pridi", "frontis-blocks"),
  value: "Pridi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Princess Sofia", "frontis-blocks"),
  value: "Princess Sofia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prociono", "frontis-blocks"),
  value: "Prociono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prompt", "frontis-blocks"),
  value: "Prompt"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prosto One", "frontis-blocks"),
  value: "Prosto One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Proza Libre", "frontis-blocks"),
  value: "Proza Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Mono", "frontis-blocks"),
  value: "PT Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Sans", "frontis-blocks"),
  value: "PT Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Sans Caption", "frontis-blocks"),
  value: "PT Sans Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Sans Narrow", "frontis-blocks"),
  value: "PT Sans Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Serif", "frontis-blocks"),
  value: "PT Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Serif Caption", "frontis-blocks"),
  value: "PT Serif Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Puritan", "frontis-blocks"),
  value: "Puritan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Purple Purse", "frontis-blocks"),
  value: "Purple Purse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pushster", "frontis-blocks"),
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
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sacramento", "frontis-blocks"),
  value: "Sacramento"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sahitya", "frontis-blocks"),
  value: "Sahitya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sail", "frontis-blocks"),
  value: "Sail"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira", "frontis-blocks"),
  value: "Saira"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Condensed", "frontis-blocks"),
  value: "Saira Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Extra Condensed", "frontis-blocks"),
  value: "Saira Extra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Semi Condensed", "frontis-blocks"),
  value: "Saira Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Stencil One", "frontis-blocks"),
  value: "Saira Stencil One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Salsa", "frontis-blocks"),
  value: "Salsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sanchez", "frontis-blocks"),
  value: "Sanchez"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sancreek", "frontis-blocks"),
  value: "Sancreek"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sansation", "frontis-blocks"),
  value: "Sansation"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sansita", "frontis-blocks"),
  value: "Sansita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sansita One", "frontis-blocks"),
  value: "Sansita One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarabun", "frontis-blocks"),
  value: "Sarabun"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarala", "frontis-blocks"),
  value: "Sarala"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarina", "frontis-blocks"),
  value: "Sarina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarpanch", "frontis-blocks"),
  value: "Sarpanch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Satisfy", "frontis-blocks"),
  value: "Satisfy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("sawarabigothic", "frontis-blocks"),
  value: "sawarabigothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("sawarabimincho", "frontis-blocks"),
  value: "sawarabimincho"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scada", "frontis-blocks"),
  value: "Scada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scheherazade", "frontis-blocks"),
  value: "Scheherazade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Schoolbell", "frontis-blocks"),
  value: "Schoolbell"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scope One", "frontis-blocks"),
  value: "Scope One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Seaweed Script", "frontis-blocks"),
  value: "Seaweed Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Secular One", "frontis-blocks"),
  value: "Secular One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedan", "frontis-blocks"),
  value: "Sedan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedan SC", "frontis-blocks"),
  value: "Sedan SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedgwick Ave", "frontis-blocks"),
  value: "Sedgwick Ave"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedgwick Ave Display", "frontis-blocks"),
  value: "Sedgwick Ave Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulhangang", "frontis-blocks"),
  value: "seoulhangang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulhangangcondensed", "frontis-blocks"),
  value: "seoulhangangcondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulnamsan", "frontis-blocks"),
  value: "seoulnamsan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulnamsancondensed", "frontis-blocks"),
  value: "seoulnamsancondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulnamsanvertical", "frontis-blocks"),
  value: "seoulnamsanvertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sevillana", "frontis-blocks"),
  value: "Sevillana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Seymour One", "frontis-blocks"),
  value: "Seymour One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shadows Into Light", "frontis-blocks"),
  value: "Shadows Into Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shadows Into Light Two", "frontis-blocks"),
  value: "Shadows Into Light Two"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shanti", "frontis-blocks"),
  value: "Shanti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share", "frontis-blocks"),
  value: "Share"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share Tech", "frontis-blocks"),
  value: "Share Tech"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share Tech Mono", "frontis-blocks"),
  value: "Share Tech Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shojumaru", "frontis-blocks"),
  value: "Shojumaru"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Short Stack", "frontis-blocks"),
  value: "Short Stack"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shrikhand", "frontis-blocks"),
  value: "Shrikhand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Siamreap", "frontis-blocks"),
  value: "Siamreap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Siemreap", "frontis-blocks"),
  value: "Siemreap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sigmar One", "frontis-blocks"),
  value: "Sigmar One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Signika", "frontis-blocks"),
  value: "Signika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Signika Negative", "frontis-blocks"),
  value: "Signika Negative"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Simonetta", "frontis-blocks"),
  value: "Simonetta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Single Day", "frontis-blocks"),
  value: "Single Day"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sintony", "frontis-blocks"),
  value: "Sintony"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sirin Stencil", "frontis-blocks"),
  value: "Sirin Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sitara", "frontis-blocks"),
  value: "Sitara"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Six Caps", "frontis-blocks"),
  value: "Six Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skranji", "frontis-blocks"),
  value: "Skranji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slabo 13px", "frontis-blocks"),
  value: "Slabo 13px"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slabo 27px", "frontis-blocks"),
  value: "Slabo 27px"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slackey", "frontis-blocks"),
  value: "Slackey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Smokum", "frontis-blocks"),
  value: "Smokum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Smythe", "frontis-blocks"),
  value: "Smythe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sniglet", "frontis-blocks"),
  value: "Sniglet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Snippet", "frontis-blocks"),
  value: "Snippet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Snowburst One", "frontis-blocks"),
  value: "Snowburst One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sofadi One", "frontis-blocks"),
  value: "Sofadi One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sofia", "frontis-blocks"),
  value: "Sofia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solway", "frontis-blocks"),
  value: "Solway"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Song Myung", "frontis-blocks"),
  value: "Song Myung"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sonsie One", "frontis-blocks"),
  value: "Sonsie One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sorts Mill Goudy", "frontis-blocks"),
  value: "Sorts Mill Goudy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("souliyo", "frontis-blocks"),
  value: "souliyo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Source Code Pro", "frontis-blocks"),
  value: "Source Code Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Source Sans Pro", "frontis-blocks"),
  value: "Source Sans Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Source Serif Pro", "frontis-blocks"),
  value: "Source Serif Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space Mono", "frontis-blocks"),
  value: "Space Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Special Elite", "frontis-blocks"),
  value: "Special Elite"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spectral", "frontis-blocks"),
  value: "Spectral"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spicy Rice", "frontis-blocks"),
  value: "Spicy Rice"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spinnaker", "frontis-blocks"),
  value: "Spinnaker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spirax", "frontis-blocks"),
  value: "Spirax"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Squada One", "frontis-blocks"),
  value: "Squada One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sree Krushnadevaraya", "frontis-blocks"),
  value: "Sree Krushnadevaraya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sriracha", "frontis-blocks"),
  value: "Sriracha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Srisakdi", "frontis-blocks"),
  value: "Srisakdi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Staatliches", "frontis-blocks"),
  value: "Staatliches"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stalemate", "frontis-blocks"),
  value: "Stalemate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stalin One", "frontis-blocks"),
  value: "Stalin One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stalinist One", "frontis-blocks"),
  value: "Stalinist One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stardos Stencil", "frontis-blocks"),
  value: "Stardos Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stint Ultra Condensed", "frontis-blocks"),
  value: "Stint Ultra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stint Ultra Expanded", "frontis-blocks"),
  value: "Stint Ultra Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stoke", "frontis-blocks"),
  value: "Stoke"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Strait", "frontis-blocks"),
  value: "Strait"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Strong", "frontis-blocks"),
  value: "Strong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stylish", "frontis-blocks"),
  value: "Stylish"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sue Ellen Francisco", "frontis-blocks"),
  value: "Sue Ellen Francisco"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suez One", "frontis-blocks"),
  value: "Suez One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sumana", "frontis-blocks"),
  value: "Sumana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sunflower", "frontis-blocks"),
  value: "Sunflower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sunshiney", "frontis-blocks"),
  value: "Sunshiney"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Supermercado One", "frontis-blocks"),
  value: "Supermercado One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sura", "frontis-blocks"),
  value: "Sura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suranna", "frontis-blocks"),
  value: "Suranna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suravaram", "frontis-blocks"),
  value: "Suravaram"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suwannaphum", "frontis-blocks"),
  value: "Suwannaphum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Swanky and Moo Moo", "frontis-blocks"),
  value: "Swanky and Moo Moo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Syncopate", "frontis-blocks"),
  value: "Syncopate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tajawal", "frontis-blocks"),
  value: "Tajawal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tangerine", "frontis-blocks"),
  value: "Tangerine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Taprom", "frontis-blocks"),
  value: "Taprom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tauri", "frontis-blocks"),
  value: "Tauri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Taviraj", "frontis-blocks"),
  value: "Taviraj"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Teko", "frontis-blocks"),
  value: "Teko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Telex", "frontis-blocks"),
  value: "Telex"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tenali Ramakrishna", "frontis-blocks"),
  value: "Tenali Ramakrishna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tenor Sans", "frontis-blocks"),
  value: "Tenor Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Terminal Dosis", "frontis-blocks"),
  value: "Terminal Dosis"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Terminal Dosis Light", "frontis-blocks"),
  value: "Terminal Dosis Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Me One", "frontis-blocks"),
  value: "Text Me One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thabit", "frontis-blocks"),
  value: "Thabit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("tharlon", "frontis-blocks"),
  value: "tharlon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thasadith", "frontis-blocks"),
  value: "Thasadith"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("The Girl Next Door", "frontis-blocks"),
  value: "The Girl Next Door"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tienne", "frontis-blocks"),
  value: "Tienne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tillana", "frontis-blocks"),
  value: "Tillana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Timmana", "frontis-blocks"),
  value: "Timmana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tinos", "frontis-blocks"),
  value: "Tinos"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Titan One", "frontis-blocks"),
  value: "Titan One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Titillium Web", "frontis-blocks"),
  value: "Titillium Web"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trade Winds", "frontis-blocks"),
  value: "Trade Winds"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trirong", "frontis-blocks"),
  value: "Trirong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trocchi", "frontis-blocks"),
  value: "Trocchi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trochut", "frontis-blocks"),
  value: "Trochut"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trykker", "frontis-blocks"),
  value: "Trykker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tuffy", "frontis-blocks"),
  value: "Tuffy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tulpen One", "frontis-blocks"),
  value: "Tulpen One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ubuntu", "frontis-blocks"),
  value: "Ubuntu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ubuntu Condensed", "frontis-blocks"),
  value: "Ubuntu Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ubuntu Mono", "frontis-blocks"),
  value: "Ubuntu Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ultra", "frontis-blocks"),
  value: "Ultra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uncial Antiqua", "frontis-blocks"),
  value: "Uncial Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underdog", "frontis-blocks"),
  value: "Underdog"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unica One", "frontis-blocks"),
  value: "Unica One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("UnifrakturCook", "frontis-blocks"),
  value: "UnifrakturCook"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("UnifrakturMaguntia", "frontis-blocks"),
  value: "UnifrakturMaguntia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unkempt", "frontis-blocks"),
  value: "Unkempt"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unlock", "frontis-blocks"),
  value: "Unlock"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unna", "frontis-blocks"),
  value: "Unna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vampiro One", "frontis-blocks"),
  value: "Vampiro One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Varela", "frontis-blocks"),
  value: "Varela"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Varela Round", "frontis-blocks"),
  value: "Varela Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Varta", "frontis-blocks"),
  value: "Varta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vast Shadow", "frontis-blocks"),
  value: "Vast Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vesper Libre", "frontis-blocks"),
  value: "Vesper Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vibur", "frontis-blocks"),
  value: "Vibur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vidaloka", "frontis-blocks"),
  value: "Vidaloka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viga", "frontis-blocks"),
  value: "Viga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Voces", "frontis-blocks"),
  value: "Voces"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Volkhov", "frontis-blocks"),
  value: "Volkhov"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vollkorn", "frontis-blocks"),
  value: "Vollkorn"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vollkorn SC", "frontis-blocks"),
  value: "Vollkorn SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Voltaire", "frontis-blocks"),
  value: "Voltaire"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("VT323", "frontis-blocks"),
  value: "VT323"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Waiting for the Sunrise", "frontis-blocks"),
  value: "Waiting for the Sunrise"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wallpoet", "frontis-blocks"),
  value: "Wallpoet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Walter Turncoat", "frontis-blocks"),
  value: "Walter Turncoat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Warnes", "frontis-blocks"),
  value: "Warnes"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wellfleet", "frontis-blocks"),
  value: "Wellfleet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wendy One", "frontis-blocks"),
  value: "Wendy One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wire One", "frontis-blocks"),
  value: "Wire One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Work Sans", "frontis-blocks"),
  value: "Work Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yaldevi Colombo", "frontis-blocks"),
  value: "Yaldevi Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yanone Kaffeesatz", "frontis-blocks"),
  value: "Yanone Kaffeesatz"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yantramanav", "frontis-blocks"),
  value: "Yantramanav"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yatra One", "frontis-blocks"),
  value: "Yatra One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yellowtail", "frontis-blocks"),
  value: "Yellowtail"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yeon Sung", "frontis-blocks"),
  value: "Yeon Sung"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yeseva One", "frontis-blocks"),
  value: "Yeseva One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yesteryear", "frontis-blocks"),
  value: "Yesteryear"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yinmar", "frontis-blocks"),
  value: "Yinmar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yrsa", "frontis-blocks"),
  value: "Yrsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ZCOOL KuaiLe", "frontis-blocks"),
  value: "ZCOOL KuaiLe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ZCOOL QingKe HuangYou", "frontis-blocks"),
  value: "ZCOOL QingKe HuangYou"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ZCOOL XiaoWei", "frontis-blocks"),
  value: "ZCOOL XiaoWei"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zeyada", "frontis-blocks"),
  value: "Zeyada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zhi Mang Xing", "frontis-blocks"),
  value: "Zhi Mang Xing"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zilla Slab Highlight", "frontis-blocks"),
  value: "Zilla Slab Highlight"
}];

/***/ }),

/***/ "./src/blocks/fluent-form/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/fluent-form/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/fluent-form/inspector.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/fluent-form/editor.scss");







function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    clientId = _ref.clientId;
  var blockID = attributes.blockID,
    deviceType = attributes.deviceType,
    formId = attributes.formId,
    showLabels = attributes.showLabels,
    showPlaceholder = attributes.showPlaceholder,
    showErrorMessage = attributes.showErrorMessage;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: ['fb-fluent-form-wrapper', blockID, !showLabels && 'fb-fluent-form-hide-label', !showPlaceholder && 'fb-fluent-form-hide-placeholder', !showErrorMessage && 'fb-fluent-form-hide-error-message'].filter(Boolean).join(' ')
  });
  var formLists = JSON.parse(FrontisBlocksData.fluent_form_lists);
  var modifiedFormLists = formLists.map(function (obj) {
    return {
      label: obj.label,
      value: obj.value
    };
  });
  var pluginInstallUrl = FrontisBlocksData.fluent_form_install_url;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    clientId: clientId
  }), /*#__PURE__*/React.createElement("div", blockProps, !FrontisBlocksData.fluent_plugin_active ? /*#__PURE__*/React.createElement("div", {
    className: "fb-reusable_notice"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "title"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "66",
    height: "70",
    fill: "none",
    viewBox: "0 0 66 70"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#399CFF",
    d: "M46.161 30H12.84c-1.15 0-1.839.91-1.839 1.818v11.364c0 1.136.92 1.818 1.838 1.818h33.323c1.15 0 1.839-.91 1.839-1.818V31.818C48 30.91 47.31 30 46.161 30zm0 13.41H12.84V32.045H46.16v11.363z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#399CFF",
    d: "M58.087 6H7.913C5.61 6 4 7.841 4 9.913v50.174C4 62.39 5.841 64 7.913 64h50.174C60.39 64 62 62.159 62 60.087V9.913C62 7.61 60.159 6 58.087 6zM6.071 13.595V9.913c0-.92.921-1.842 1.842-1.842h50.174c.92 0 1.842.921 1.842 1.842v3.682H6.07zm0 2.072H59.93v44.19c0 .92-.921 1.841-1.842 1.841H7.913c-.92 0-1.842-.92-1.842-1.84V15.666z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#399CFF",
    d: "M9.929 10H9.07C8.43 10 8 10.4 8 11s.429 1 1.071 1h.858C10.57 12 11 11.6 11 11s-.429-1-1.071-1zM14.929 10h-.858C13.43 10 13 10.4 13 11s.429 1 1.071 1h.858C15.57 12 16 11.6 16 11s-.429-1-1.071-1zM19.571 10H18.43C17.57 10 17 10.4 17 11s.571 1 1.429 1h1.142C20.43 12 21 11.6 21 11s-.571-1-1.429-1zM12.154 24h33.692C46.54 24 47 23.6 47 23s-.462-1-1.154-1H12.154C11.46 22 11 22.4 11 23s.692 1 1.154 1zM22.929 53H13.07C12.43 53 12 53.4 12 54s.429 1 1.071 1h9.858C23.57 55 24 54.6 24 54s-.429-1-1.071-1z"
  })), "Fluent Forms"), /*#__PURE__*/React.createElement("p", {
    className: "content"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "fb-reusable-notice-text"
  }, "Fluent Form"), " is not installed/activated on your site. Please install and activate", /*#__PURE__*/React.createElement("a", {
    href: pluginInstallUrl,
    target: "_blank"
  }, " Fluent Form"), " first.")) : /*#__PURE__*/React.createElement(React.Fragment, null, !formId && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fluent Form', 'frontis-blocks'),
    value: formId,
    options: modifiedFormLists,
    onChange: function onChange(newFormId) {
      return setAttributes({
        formId: newFormId
      });
    },
    className: "fb-fluent-form-select"
  }), formId && /*#__PURE__*/React.createElement((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default()), {
    className: "fb-fluent-form-rendered",
    block: "fluentfom/guten-block",
    attributes: {
      formId: formId
    }
  }))));
}

/***/ }),

/***/ "./src/blocks/fluent-form/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/fluent-form/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/fluent-form/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/fluent-form/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/fluent-form/block.json");
/* harmony import */ var _attributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes.js */ "./src/blocks/fluent-form/attributes.js");



/**
 * Internal dependencies
 */

// import save from './save';


var icon = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "66",
  height: "70",
  fill: "none",
  viewBox: "0 0 66 70"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#399CFF",
  d: "M46.161 30H12.84c-1.15 0-1.839.91-1.839 1.818v11.364c0 1.136.92 1.818 1.838 1.818h33.323c1.15 0 1.839-.91 1.839-1.818V31.818C48 30.91 47.31 30 46.161 30zm0 13.41H12.84V32.045H46.16v11.363z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#399CFF",
  d: "M58.087 6H7.913C5.61 6 4 7.841 4 9.913v50.174C4 62.39 5.841 64 7.913 64h50.174C60.39 64 62 62.159 62 60.087V9.913C62 7.61 60.159 6 58.087 6zM6.071 13.595V9.913c0-.92.921-1.842 1.842-1.842h50.174c.92 0 1.842.921 1.842 1.842v3.682H6.07zm0 2.072H59.93v44.19c0 .92-.921 1.841-1.842 1.841H7.913c-.92 0-1.842-.92-1.842-1.84V15.666z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#399CFF",
  d: "M9.929 10H9.07C8.43 10 8 10.4 8 11s.429 1 1.071 1h.858C10.57 12 11 11.6 11 11s-.429-1-1.071-1zM14.929 10h-.858C13.43 10 13 10.4 13 11s.429 1 1.071 1h.858C15.57 12 16 11.6 16 11s-.429-1-1.071-1zM19.571 10H18.43C17.57 10 17 10.4 17 11s.571 1 1.429 1h1.142C20.43 12 21 11.6 21 11s-.571-1-1.429-1zM12.154 24h33.692C46.54 24 47 23.6 47 23s-.462-1-1.154-1H12.154C11.46 22 11 22.4 11 23s.692 1 1.154 1zM22.929 53H13.07C12.43 53 12 53.4 12 54s.429 1 1.071 1h9.858C23.57 55 24 54.6 24 54s-.429-1-1.071-1z"
}));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  attributes: _attributes_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  icon: icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
  // save,
});

/***/ }),

/***/ "./src/blocks/fluent-form/inspector.js":
/*!*********************************************!*\
  !*** ./src/blocks/fluent-form/inspector.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inspector)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/constants */ "./src/blocks/fluent-form/constants/constants.js");
/* harmony import */ var _Components_spacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/spacing */ "./src/components/spacing/index.js");
/* harmony import */ var _Components_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/range */ "./src/components/range/index.js");
/* harmony import */ var _Components_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/color */ "./src/components/color/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/fluent-form/editor.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









function Inspector(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    clientId = _ref.clientId;
  var blockID = attributes.blockID,
    deviceType = attributes.deviceType,
    fluentFormGlobalZIndex = attributes.fluentFormGlobalZIndex,
    formId = attributes.formId,
    showLabels = attributes.showLabels,
    showPlaceholder = attributes.showPlaceholder,
    showErrorMessage = attributes.showErrorMessage,
    fluentFormLabelColorSwitcher = attributes.fluentFormLabelColorSwitcher,
    fluentFormLabelColor = attributes.fluentFormLabelColor,
    fluentFormLabelHoverColor = attributes.fluentFormLabelHoverColor,
    fluentFormLabelFontFamily = attributes.fluentFormLabelFontFamily,
    fluentFormLabelFontSize = attributes.fluentFormLabelFontSize,
    fluentFormLabelFontSizeUnits = attributes.fluentFormLabelFontSizeUnits,
    fluentFormLabelFontWeight = attributes.fluentFormLabelFontWeight,
    fluentFormLabelFontStyle = attributes.fluentFormLabelFontStyle,
    fluentFormLabelTextTransform = attributes.fluentFormLabelTextTransform,
    fluentFormLabelTextDecoration = attributes.fluentFormLabelTextDecoration,
    fluentFormLabelLetterSpacing = attributes.fluentFormLabelLetterSpacing,
    fluentFormLabelLineHeight = attributes.fluentFormLabelLineHeight,
    fluentFormLabelLetterSpacingUnits = attributes.fluentFormLabelLetterSpacingUnits,
    fluentFormLabelLineHeightUnits = attributes.fluentFormLabelLineHeightUnits,
    fluentFormInputBgColor = attributes.fluentFormInputBgColor,
    fluentFormInputColor = attributes.fluentFormInputColor,
    fluentFormInputFocusColor = attributes.fluentFormInputFocusColor,
    fluentFormInputFontFamily = attributes.fluentFormInputFontFamily,
    fluentFormInputFontSize = attributes.fluentFormInputFontSize,
    fluentFormInputFontSizeUnits = attributes.fluentFormInputFontSizeUnits,
    fluentFormInputFontWeight = attributes.fluentFormInputFontWeight,
    fluentFormInputFontStyle = attributes.fluentFormInputFontStyle,
    fluentFormInputTextTransform = attributes.fluentFormInputTextTransform,
    fluentFormInputTextDecoration = attributes.fluentFormInputTextDecoration,
    fluentFormInputLetterSpacing = attributes.fluentFormInputLetterSpacing,
    fluentFormInputLineHeight = attributes.fluentFormInputLineHeight,
    fluentFormInputLetterSpacingUnits = attributes.fluentFormInputLetterSpacingUnits,
    fluentFormInputLineHeightUnits = attributes.fluentFormInputLineHeightUnits,
    fluentFormTextIndentSize = attributes.fluentFormTextIndentSize,
    fluentFormTextIndentSizeUnits = attributes.fluentFormTextIndentSizeUnits,
    fluentFormInputWidthSize = attributes.fluentFormInputWidthSize,
    fluentFormInputWidthSizeUnits = attributes.fluentFormInputWidthSizeUnits,
    fluentFormInputHeightSize = attributes.fluentFormInputHeightSize,
    fluentFormInputHeightSizeUnits = attributes.fluentFormInputHeightSizeUnits,
    fluentFormTextareaWidthSize = attributes.fluentFormTextareaWidthSize,
    fluentFormTextareaWidthSizeUnits = attributes.fluentFormTextareaWidthSizeUnits,
    fluentFormTextareaHeightSize = attributes.fluentFormTextareaHeightSize,
    fluentFormTextareaHeightSizeUnits = attributes.fluentFormTextareaHeightSizeUnits,
    fluentFormSpacingSize = attributes.fluentFormSpacingSize,
    fluentFormSpacingUnits = attributes.fluentFormSpacingUnits,
    fluentFormPaddingUnits = attributes.fluentFormPaddingUnits,
    fluentFormPaddingDesktop = attributes.fluentFormPaddingDesktop,
    fluentFormPaddingTablet = attributes.fluentFormPaddingTablet,
    fluentFormPaddingMobile = attributes.fluentFormPaddingMobile,
    fluentFormPaddingLink = attributes.fluentFormPaddingLink,
    fluentFormBorder = attributes.fluentFormBorder,
    fluentFormBorderColorSwitcher = attributes.fluentFormBorderColorSwitcher,
    fluentFormBorderColor = attributes.fluentFormBorderColor,
    fluentFormBorderHoverColor = attributes.fluentFormBorderHoverColor,
    fluentFormBorderUnits = attributes.fluentFormBorderUnits,
    fluentFormBorderDesktop = attributes.fluentFormBorderDesktop,
    fluentFormBorderTablet = attributes.fluentFormBorderTablet,
    fluentFormBorderMobile = attributes.fluentFormBorderMobile,
    fluentFormBorderLink = attributes.fluentFormBorderLink,
    fluentFormBorderRadiusUnits = attributes.fluentFormBorderRadiusUnits,
    fluentFormBorderRadiusDesktop = attributes.fluentFormBorderRadiusDesktop,
    fluentFormBorderRadiusTablet = attributes.fluentFormBorderRadiusTablet,
    fluentFormBorderRadiusMobile = attributes.fluentFormBorderRadiusMobile,
    fluentFormBorderRadiusLink = attributes.fluentFormBorderRadiusLink,
    fluentFormPlaceholderColor = attributes.fluentFormPlaceholderColor,
    fluentFormRadioFontSize = attributes.fluentFormRadioFontSize,
    fluentFormRadioFontSizeUnits = attributes.fluentFormRadioFontSizeUnits,
    fluentFormRadioColor = attributes.fluentFormRadioColor,
    fluentFormRadioCheckedColor = attributes.fluentFormRadioCheckedColor,
    fluentFormRadioBorderWidth = attributes.fluentFormRadioBorderWidth,
    fluentFormRadioBorderWidthUnits = attributes.fluentFormRadioBorderWidthUnits,
    fluentFormRadioBorderColor = attributes.fluentFormRadioBorderColor,
    fluentFormRadioBorderRadiusUnits = attributes.fluentFormRadioBorderRadiusUnits,
    fluentFormRadioBorderRadiusDesktop = attributes.fluentFormRadioBorderRadiusDesktop,
    fluentFormRadioBorderRadiusTablet = attributes.fluentFormRadioBorderRadiusTablet,
    fluentFormRadioBorderRadiusMobile = attributes.fluentFormRadioBorderRadiusMobile,
    fluentFormRadioBorderRadiusLink = attributes.fluentFormRadioBorderRadiusLink,
    fluentFormCheckBoxBorderRadiusUnits = attributes.fluentFormCheckBoxBorderRadiusUnits,
    fluentFormCheckBoxBorderRadiusDesktop = attributes.fluentFormCheckBoxBorderRadiusDesktop,
    fluentFormCheckBoxBorderRadiusTablet = attributes.fluentFormCheckBoxBorderRadiusTablet,
    fluentFormCheckBoxBorderRadiusMobile = attributes.fluentFormCheckBoxBorderRadiusMobile,
    fluentFormCheckBoxBorderRadiusLink = attributes.fluentFormCheckBoxBorderRadiusLink,
    fluentFormRadioCheckBoxItemSpacing = attributes.fluentFormRadioCheckBoxItemSpacing,
    fluentFormRadioCheckBoxItemSpacingUnits = attributes.fluentFormRadioCheckBoxItemSpacingUnits,
    fluentFormSectionBreakAlignment = attributes.fluentFormSectionBreakAlignment,
    fluentFormSectionBreakTitleColorSwitcher = attributes.fluentFormSectionBreakTitleColorSwitcher,
    fluentFormSectionBreakTitleColor = attributes.fluentFormSectionBreakTitleColor,
    fluentFormSectionBreakTitleHoverColor = attributes.fluentFormSectionBreakTitleHoverColor,
    fluentFormSectionBreakTitleFontFamily = attributes.fluentFormSectionBreakTitleFontFamily,
    fluentFormSectionBreakTitleFontSize = attributes.fluentFormSectionBreakTitleFontSize,
    fluentFormSectionBreakTitleFontSizeUnits = attributes.fluentFormSectionBreakTitleFontSizeUnits,
    fluentFormSectionBreakTitleFontWeight = attributes.fluentFormSectionBreakTitleFontWeight,
    fluentFormSectionBreakTitleFontStyle = attributes.fluentFormSectionBreakTitleFontStyle,
    fluentFormSectionBreakTitleTextTransform = attributes.fluentFormSectionBreakTitleTextTransform,
    fluentFormSectionBreakTitleTextDecoration = attributes.fluentFormSectionBreakTitleTextDecoration,
    fluentFormSectionBreakTitleLetterSpacing = attributes.fluentFormSectionBreakTitleLetterSpacing,
    fluentFormSectionBreakTitleLetterSpacingUnits = attributes.fluentFormSectionBreakTitleLetterSpacingUnits,
    fluentFormSectionBreakTitleLineHeight = attributes.fluentFormSectionBreakTitleLineHeight,
    fluentFormSectionBreakTitleLineHeightUnits = attributes.fluentFormSectionBreakTitleLineHeightUnits,
    fluentFormSectionBreakTitlePaddingUnits = attributes.fluentFormSectionBreakTitlePaddingUnits,
    fluentFormSectionBreakTitlePaddingDesktop = attributes.fluentFormSectionBreakTitlePaddingDesktop,
    fluentFormSectionBreakTitlePaddingTablet = attributes.fluentFormSectionBreakTitlePaddingTablet,
    fluentFormSectionBreakTitlePaddingMobile = attributes.fluentFormSectionBreakTitlePaddingMobile,
    fluentFormSectionBreakTitlePaddingLink = attributes.fluentFormSectionBreakTitlePaddingLink,
    fluentFormSectionBreakTitleMarginUnits = attributes.fluentFormSectionBreakTitleMarginUnits,
    fluentFormSectionBreakTitleMarginDesktop = attributes.fluentFormSectionBreakTitleMarginDesktop,
    fluentFormSectionBreakTitleMarginTablet = attributes.fluentFormSectionBreakTitleMarginTablet,
    fluentFormSectionBreakTitleMarginMobile = attributes.fluentFormSectionBreakTitleMarginMobile,
    fluentFormSectionBreakTitleMarginLink = attributes.fluentFormSectionBreakTitleMarginLink,
    fluentFormSectionBreakDescColorSwitcher = attributes.fluentFormSectionBreakDescColorSwitcher,
    fluentFormSectionBreakDescColor = attributes.fluentFormSectionBreakDescColor,
    fluentFormSectionBreakDescHoverColor = attributes.fluentFormSectionBreakDescHoverColor,
    fluentFormSectionBreakDescFontFamily = attributes.fluentFormSectionBreakDescFontFamily,
    fluentFormSectionBreakDescFontSize = attributes.fluentFormSectionBreakDescFontSize,
    fluentFormSectionBreakDescFontSizeUnits = attributes.fluentFormSectionBreakDescFontSizeUnits,
    fluentFormSectionBreakDescFontWeight = attributes.fluentFormSectionBreakDescFontWeight,
    fluentFormSectionBreakDescFontStyle = attributes.fluentFormSectionBreakDescFontStyle,
    fluentFormSectionBreakDescTextTransform = attributes.fluentFormSectionBreakDescTextTransform,
    fluentFormSectionBreakDescTextDecoration = attributes.fluentFormSectionBreakDescTextDecoration,
    fluentFormSectionBreakDescLetterSpacing = attributes.fluentFormSectionBreakDescLetterSpacing,
    fluentFormSectionBreakDescLetterSpacingUnits = attributes.fluentFormSectionBreakDescLetterSpacingUnits,
    fluentFormSectionBreakDescLineHeight = attributes.fluentFormSectionBreakDescLineHeight,
    fluentFormSectionBreakDescLineHeightUnits = attributes.fluentFormSectionBreakDescLineHeightUnits,
    fluentFormSectionBreakDescPaddingUnits = attributes.fluentFormSectionBreakDescPaddingUnits,
    fluentFormSectionBreakDescPaddingDesktop = attributes.fluentFormSectionBreakDescPaddingDesktop,
    fluentFormSectionBreakDescPaddingTablet = attributes.fluentFormSectionBreakDescPaddingTablet,
    fluentFormSectionBreakDescPaddingMobile = attributes.fluentFormSectionBreakDescPaddingMobile,
    fluentFormSectionBreakDescPaddingLink = attributes.fluentFormSectionBreakDescPaddingLink,
    fluentFormSectionBreakDescMarginUnits = attributes.fluentFormSectionBreakDescMarginUnits,
    fluentFormSectionBreakDescMarginDesktop = attributes.fluentFormSectionBreakDescMarginDesktop,
    fluentFormSectionBreakDescMarginTablet = attributes.fluentFormSectionBreakDescMarginTablet,
    fluentFormSectionBreakDescMarginMobile = attributes.fluentFormSectionBreakDescMarginMobile,
    fluentFormSectionBreakDescMarginLink = attributes.fluentFormSectionBreakDescMarginLink,
    fluentFormHtmlAlignment = attributes.fluentFormHtmlAlignment,
    fluentFormHtmlColorSwitcher = attributes.fluentFormHtmlColorSwitcher,
    fluentFormHtmlColor = attributes.fluentFormHtmlColor,
    fluentFormHtmlHoverColor = attributes.fluentFormHtmlHoverColor,
    fluentFormHtmlFontFamily = attributes.fluentFormHtmlFontFamily,
    fluentFormHtmlFontSize = attributes.fluentFormHtmlFontSize,
    fluentFormHtmlFontSizeUnits = attributes.fluentFormHtmlFontSizeUnits,
    fluentFormHtmlFontWeight = attributes.fluentFormHtmlFontWeight,
    fluentFormHtmlFontStyle = attributes.fluentFormHtmlFontStyle,
    fluentFormHtmlTextTransform = attributes.fluentFormHtmlTextTransform,
    fluentFormHtmlTextDecoration = attributes.fluentFormHtmlTextDecoration,
    fluentFormHtmlLetterSpacing = attributes.fluentFormHtmlLetterSpacing,
    fluentFormHtmlLetterSpacingUnits = attributes.fluentFormHtmlLetterSpacingUnits,
    fluentFormHtmlLineHeight = attributes.fluentFormHtmlLineHeight,
    fluentFormHtmlLineHeightUnits = attributes.fluentFormHtmlLineHeightUnits,
    fluentFormHtmlPaddingUnits = attributes.fluentFormHtmlPaddingUnits,
    fluentFormHtmlPaddingDesktop = attributes.fluentFormHtmlPaddingDesktop,
    fluentFormHtmlPaddingTablet = attributes.fluentFormHtmlPaddingTablet,
    fluentFormHtmlPaddingMobile = attributes.fluentFormHtmlPaddingMobile,
    fluentFormHtmlPaddingLink = attributes.fluentFormHtmlPaddingLink,
    fluentFormHtmlMarginUnits = attributes.fluentFormHtmlMarginUnits,
    fluentFormHtmlMarginDesktop = attributes.fluentFormHtmlMarginDesktop,
    fluentFormHtmlMarginTablet = attributes.fluentFormHtmlMarginTablet,
    fluentFormHtmlMarginMobile = attributes.fluentFormHtmlMarginMobile,
    fluentFormHtmlMarginLink = attributes.fluentFormHtmlMarginLink,
    fluentFormSubmitAlignment = attributes.fluentFormSubmitAlignment,
    fluentFormSubmitHeight = attributes.fluentFormSubmitHeight,
    fluentFormSubmitHeightUnits = attributes.fluentFormSubmitHeightUnits,
    fluentFormSubmitWidthSelect = attributes.fluentFormSubmitWidthSelect,
    fluentFormSubmitWidth = attributes.fluentFormSubmitWidth,
    fluentFormSubmitWidthUnits = attributes.fluentFormSubmitWidthUnits,
    fluentFormSubmitColorSwitcher = attributes.fluentFormSubmitColorSwitcher,
    fluentFormSubmitColor = attributes.fluentFormSubmitColor,
    fluentFormSubmitHoverColor = attributes.fluentFormSubmitHoverColor,
    fluentFormSubmitBgColorSwitcher = attributes.fluentFormSubmitBgColorSwitcher,
    fluentFormSubmitBgColor = attributes.fluentFormSubmitBgColor,
    fluentFormSubmitBgHoverColor = attributes.fluentFormSubmitBgHoverColor,
    fluentFormSubmitFontFamily = attributes.fluentFormSubmitFontFamily,
    fluentFormSubmitFontSize = attributes.fluentFormSubmitFontSize,
    fluentFormSubmitFontSizeUnits = attributes.fluentFormSubmitFontSizeUnits,
    fluentFormSubmitFontWeight = attributes.fluentFormSubmitFontWeight,
    fluentFormSubmitFontStyle = attributes.fluentFormSubmitFontStyle,
    fluentFormSubmitTextTransform = attributes.fluentFormSubmitTextTransform,
    fluentFormSubmitTextDecoration = attributes.fluentFormSubmitTextDecoration,
    fluentFormSubmitLetterSpacing = attributes.fluentFormSubmitLetterSpacing,
    fluentFormSubmitLetterSpacingUnits = attributes.fluentFormSubmitLetterSpacingUnits,
    fluentFormSubmitLineHeight = attributes.fluentFormSubmitLineHeight,
    fluentFormSubmitLineHeightUnits = attributes.fluentFormSubmitLineHeightUnits,
    fluentFormSubmitPaddingUnits = attributes.fluentFormSubmitPaddingUnits,
    fluentFormSubmitPaddingDesktop = attributes.fluentFormSubmitPaddingDesktop,
    fluentFormSubmitPaddingTablet = attributes.fluentFormSubmitPaddingTablet,
    fluentFormSubmitPaddingMobile = attributes.fluentFormSubmitPaddingMobile,
    fluentFormSubmitPaddingLink = attributes.fluentFormSubmitPaddingLink,
    fluentFormSubmitMarginUnits = attributes.fluentFormSubmitMarginUnits,
    fluentFormSubmitMarginDesktop = attributes.fluentFormSubmitMarginDesktop,
    fluentFormSubmitMarginTablet = attributes.fluentFormSubmitMarginTablet,
    fluentFormSubmitMarginMobile = attributes.fluentFormSubmitMarginMobile,
    fluentFormSubmitMarginLink = attributes.fluentFormSubmitMarginLink,
    fluentFormSubmitBorder = attributes.fluentFormSubmitBorder,
    fluentFormSubmitBorderColorSwitcher = attributes.fluentFormSubmitBorderColorSwitcher,
    fluentFormSubmitBorderColor = attributes.fluentFormSubmitBorderColor,
    fluentFormSubmitBorderHoverColor = attributes.fluentFormSubmitBorderHoverColor,
    fluentFormSubmitBorderUnits = attributes.fluentFormSubmitBorderUnits,
    fluentFormSubmitBorderDesktop = attributes.fluentFormSubmitBorderDesktop,
    fluentFormSubmitBorderTablet = attributes.fluentFormSubmitBorderTablet,
    fluentFormSubmitBorderMobile = attributes.fluentFormSubmitBorderMobile,
    fluentFormSubmitBorderLink = attributes.fluentFormSubmitBorderLink,
    fluentFormSubmitBorderRadiusUnits = attributes.fluentFormSubmitBorderRadiusUnits,
    fluentFormSubmitBorderRadiusDesktop = attributes.fluentFormSubmitBorderRadiusDesktop,
    fluentFormSubmitBorderRadiusTablet = attributes.fluentFormSubmitBorderRadiusTablet,
    fluentFormSubmitBorderRadiusMobile = attributes.fluentFormSubmitBorderRadiusMobile,
    fluentFormSubmitBorderRadiusLink = attributes.fluentFormSubmitBorderRadiusLink,
    fluentFormSuccessColor = attributes.fluentFormSuccessColor,
    fluentFormSuccessBgColor = attributes.fluentFormSuccessBgColor,
    fluentFormSuccessFontFamily = attributes.fluentFormSuccessFontFamily,
    fluentFormSuccessFontSize = attributes.fluentFormSuccessFontSize,
    fluentFormSuccessFontSizeUnits = attributes.fluentFormSuccessFontSizeUnits,
    fluentFormSuccessFontWeight = attributes.fluentFormSuccessFontWeight,
    fluentFormSuccessFontStyle = attributes.fluentFormSuccessFontStyle,
    fluentFormSuccessTextTransform = attributes.fluentFormSuccessTextTransform,
    fluentFormSuccessTextDecoration = attributes.fluentFormSuccessTextDecoration,
    fluentFormSuccessLetterSpacing = attributes.fluentFormSuccessLetterSpacing,
    fluentFormSuccessLetterSpacingUnits = attributes.fluentFormSuccessLetterSpacingUnits,
    fluentFormSuccessLineHeight = attributes.fluentFormSuccessLineHeight,
    fluentFormSuccessLineHeightUnits = attributes.fluentFormSuccessLineHeightUnits,
    fluentFormSuccessBorder = attributes.fluentFormSuccessBorder,
    fluentFormSuccessBorderColorSwitcher = attributes.fluentFormSuccessBorderColorSwitcher,
    fluentFormSuccessBorderColor = attributes.fluentFormSuccessBorderColor,
    fluentFormSuccessBorderHoverColor = attributes.fluentFormSuccessBorderHoverColor,
    fluentFormSuccessBorderUnits = attributes.fluentFormSuccessBorderUnits,
    fluentFormSuccessBorderDesktop = attributes.fluentFormSuccessBorderDesktop,
    fluentFormSuccessBorderTablet = attributes.fluentFormSuccessBorderTablet,
    fluentFormSuccessBorderMobile = attributes.fluentFormSuccessBorderMobile,
    fluentFormSuccessBorderLink = attributes.fluentFormSuccessBorderLink,
    fluentFormSuccessBorderRadiusUnits = attributes.fluentFormSuccessBorderRadiusUnits,
    fluentFormSuccessBorderRadiusDesktop = attributes.fluentFormSuccessBorderRadiusDesktop,
    fluentFormSuccessBorderRadiusTablet = attributes.fluentFormSuccessBorderRadiusTablet,
    fluentFormSuccessBorderRadiusMobile = attributes.fluentFormSuccessBorderRadiusMobile,
    fluentFormSuccessBorderRadiusLink = attributes.fluentFormSuccessBorderRadiusLink,
    fluentFormErrorColor = attributes.fluentFormErrorColor,
    fluentFormErrorFontFamily = attributes.fluentFormErrorFontFamily,
    fluentFormErrorFontSize = attributes.fluentFormErrorFontSize,
    fluentFormErrorFontSizeUnits = attributes.fluentFormErrorFontSizeUnits,
    fluentFormErrorFontWeight = attributes.fluentFormErrorFontWeight,
    fluentFormErrorFontStyle = attributes.fluentFormErrorFontStyle,
    fluentFormErrorTextTransform = attributes.fluentFormErrorTextTransform,
    fluentFormErrorTextDecoration = attributes.fluentFormErrorTextDecoration,
    fluentFormErrorLetterSpacing = attributes.fluentFormErrorLetterSpacing,
    fluentFormErrorLetterSpacingUnits = attributes.fluentFormErrorLetterSpacingUnits,
    fluentFormErrorLineHeight = attributes.fluentFormErrorLineHeight,
    fluentFormErrorLineHeightUnits = attributes.fluentFormErrorLineHeightUnits,
    fluentFormErrorPaddingUnits = attributes.fluentFormErrorPaddingUnits,
    fluentFormErrorPaddingDesktop = attributes.fluentFormErrorPaddingDesktop,
    fluentFormErrorPaddingTablet = attributes.fluentFormErrorPaddingTablet,
    fluentFormErrorPaddingMobile = attributes.fluentFormErrorPaddingMobile,
    fluentFormErrorPaddingLink = attributes.fluentFormErrorPaddingLink,
    fluentFormErrorMarginUnits = attributes.fluentFormErrorMarginUnits,
    fluentFormErrorMarginDesktop = attributes.fluentFormErrorMarginDesktop,
    fluentFormErrorMarginTablet = attributes.fluentFormErrorMarginTablet,
    fluentFormErrorMarginMobile = attributes.fluentFormErrorMarginMobile,
    fluentFormErrorMarginLink = attributes.fluentFormErrorMarginLink,
    fluentFormGlobalPaddingUnits = attributes.fluentFormGlobalPaddingUnits,
    fluentFormGlobalPaddingDesktop = attributes.fluentFormGlobalPaddingDesktop,
    fluentFormGlobalPaddingTablet = attributes.fluentFormGlobalPaddingTablet,
    fluentFormGlobalPaddingMobile = attributes.fluentFormGlobalPaddingMobile,
    fluentFormGlobalPaddingLink = attributes.fluentFormGlobalPaddingLink,
    fluentFormGlobalMarginUnits = attributes.fluentFormGlobalMarginUnits,
    fluentFormGlobalMarginDesktop = attributes.fluentFormGlobalMarginDesktop,
    fluentFormGlobalMarginTablet = attributes.fluentFormGlobalMarginTablet,
    fluentFormGlobalMarginMobile = attributes.fluentFormGlobalMarginMobile,
    fluentFormGlobalMarginLink = attributes.fluentFormGlobalMarginLink,
    fluentFormGlobalBgColorSwitcher = attributes.fluentFormGlobalBgColorSwitcher,
    fluentFormGlobalBgColor = attributes.fluentFormGlobalBgColor,
    fluentFormGlobalBgHoverColor = attributes.fluentFormGlobalBgHoverColor,
    fluentFormGlobalBorder = attributes.fluentFormGlobalBorder,
    fluentFormGlobalBorderColorSwitcher = attributes.fluentFormGlobalBorderColorSwitcher,
    fluentFormGlobalBorderColor = attributes.fluentFormGlobalBorderColor,
    fluentFormGlobalBorderHoverColor = attributes.fluentFormGlobalBorderHoverColor,
    fluentFormGlobalBorderUnits = attributes.fluentFormGlobalBorderUnits,
    fluentFormGlobalBorderDesktop = attributes.fluentFormGlobalBorderDesktop,
    fluentFormGlobalBorderTablet = attributes.fluentFormGlobalBorderTablet,
    fluentFormGlobalBorderMobile = attributes.fluentFormGlobalBorderMobile,
    fluentFormGlobalBorderLink = attributes.fluentFormGlobalBorderLink,
    fluentFormGlobalBorderRadiusUnits = attributes.fluentFormGlobalBorderRadiusUnits,
    fluentFormGlobalBorderRadiusDesktop = attributes.fluentFormGlobalBorderRadiusDesktop,
    fluentFormGlobalBorderRadiusTablet = attributes.fluentFormGlobalBorderRadiusTablet,
    fluentFormGlobalBorderRadiusMobile = attributes.fluentFormGlobalBorderRadiusMobile,
    fluentFormGlobalBorderRadiusLink = attributes.fluentFormGlobalBorderRadiusLink;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (clientId && typeof clientId === 'string') {
      setAttributes({
        blockID: "fb-fluent-form-" + clientId.slice(0, 8)
      });
    }
  }, [clientId]);

  /** Start  padding */
  var handlePaddingUnitChange = function handlePaddingUnitChange(event, position) {
    var value = event.target.value;
    if (fluentFormPaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormPaddingMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormPaddingDesktop: _objectSpread(_objectSpread({}, fluentFormPaddingDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormPaddingTablet: _objectSpread(_objectSpread({}, fluentFormPaddingTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormPaddingMobile: _objectSpread(_objectSpread({}, fluentFormPaddingMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handlePaddingCombineBtn = function handlePaddingCombineBtn() {
    setAttributes({
      fluentFormPaddingLink: !fluentFormPaddingLink
    });
  };
  var handlePaddingUnitsHandler = function handlePaddingUnitsHandler(unit) {
    setAttributes({
      fluentFormPaddingUnits: _objectSpread(_objectSpread({}, fluentFormPaddingUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  /** end  padding */

  /** Default padding for desktop (using desktop_padding) */
  var fluentFormDesktopPadding = "".concat(fluentFormPaddingDesktop.top).concat(fluentFormPaddingUnits.Desktop, " ").concat(fluentFormPaddingDesktop.right).concat(fluentFormPaddingUnits.Desktop, " ").concat(fluentFormPaddingDesktop.bottom).concat(fluentFormPaddingUnits.Desktop, " ").concat(fluentFormPaddingDesktop.left).concat(fluentFormPaddingUnits.Desktop);
  var fluentFormTabletPadding = "".concat(fluentFormPaddingTablet.top).concat(fluentFormPaddingUnits.Tablet, " ").concat(fluentFormPaddingTablet.right).concat(fluentFormPaddingUnits.Tablet, " ").concat(fluentFormPaddingTablet.bottom).concat(fluentFormPaddingUnits.Tablet, " ").concat(fluentFormPaddingTablet.left).concat(fluentFormPaddingUnits.Tablet);
  var fluentFormMobilePadding = "".concat(fluentFormPaddingMobile.top).concat(fluentFormPaddingUnits.Mobile, " ").concat(fluentFormPaddingMobile.right).concat(fluentFormPaddingUnits.Mobile, " ").concat(fluentFormPaddingMobile.bottom).concat(fluentFormPaddingUnits.Mobile, " ").concat(fluentFormPaddingMobile.left).concat(fluentFormPaddingUnits.Mobile);
  /** End Padding */

  /** Start  border */
  var handleBorderUnitChange = function handleBorderUnitChange(event, position) {
    var value = event.target.value;
    if (fluentFormBorderLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormBorderDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormBorderTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormBorderMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormBorderDesktop: _objectSpread(_objectSpread({}, fluentFormBorderDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormBorderTablet: _objectSpread(_objectSpread({}, fluentFormBorderTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormBorderMobile: _objectSpread(_objectSpread({}, fluentFormBorderMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleBorderCombineBtn = function handleBorderCombineBtn() {
    setAttributes({
      fluentFormBorderLink: !fluentFormBorderLink
    });
  };
  var handleBorderUnitsHandler = function handleBorderUnitsHandler(unit) {
    setAttributes({
      fluentFormBorderUnits: _objectSpread(_objectSpread({}, fluentFormBorderUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  /** End  border */
  var fluentFormBorderDesktopWidth = "".concat(fluentFormBorderDesktop.top).concat(fluentFormBorderUnits.Desktop, " ").concat(fluentFormBorderDesktop.right).concat(fluentFormBorderUnits.Desktop, " ").concat(fluentFormBorderDesktop.bottom).concat(fluentFormBorderUnits.Desktop, " ").concat(fluentFormBorderDesktop.left).concat(fluentFormBorderUnits.Desktop);
  var fluentFormBorderTabletWidth = "".concat(fluentFormBorderTablet.top).concat(fluentFormBorderUnits.Tablet, " ").concat(fluentFormBorderTablet.right).concat(fluentFormBorderUnits.Tablet, " ").concat(fluentFormBorderTablet.bottom).concat(fluentFormBorderUnits.Tablet, " ").concat(fluentFormBorderTablet.left).concat(fluentFormBorderUnits.Tablet);
  var fluentFormBorderMobileWidth = "".concat(fluentFormBorderMobile.top).concat(fluentFormBorderUnits.Mobile, " ").concat(fluentFormBorderMobile.right).concat(fluentFormBorderUnits.Mobile, " ").concat(fluentFormBorderMobile.bottom).concat(fluentFormBorderUnits.Mobile, " ").concat(fluentFormBorderMobile.left).concat(fluentFormBorderUnits.Mobile);
  /** End Border */

  /** Start  border radius*/
  var handleBorderRadiusUnitChange = function handleBorderRadiusUnitChange(event, position) {
    var value = event.target.value;
    if (fluentFormBorderRadiusLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormBorderRadiusDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormBorderRadiusTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormBorderRadiusMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormBorderRadiusDesktop: _objectSpread(_objectSpread({}, fluentFormBorderRadiusDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormBorderRadiusTablet: _objectSpread(_objectSpread({}, fluentFormBorderRadiusTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormBorderRadiusMobile: _objectSpread(_objectSpread({}, fluentFormBorderRadiusMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleBorderRadiusCombineBtn = function handleBorderRadiusCombineBtn() {
    setAttributes({
      fluentFormBorderRadiusLink: !fluentFormBorderRadiusLink
    });
  };
  var handleBorderRadiusUnitsHandler = function handleBorderRadiusUnitsHandler(unit) {
    setAttributes({
      fluentFormBorderRadiusUnits: _objectSpread(_objectSpread({}, fluentFormBorderRadiusUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  /** end  border */

  /** End  Border Radius */
  var fluentFormBorderRadiusDesktopWidth = "".concat(fluentFormBorderRadiusDesktop.top).concat(fluentFormBorderRadiusUnits.Desktop, " ").concat(fluentFormBorderRadiusDesktop.right).concat(fluentFormBorderRadiusUnits.Desktop, " ").concat(fluentFormBorderRadiusDesktop.bottom).concat(fluentFormBorderRadiusUnits.Desktop, " ").concat(fluentFormBorderRadiusDesktop.left).concat(fluentFormBorderRadiusUnits.Desktop);
  var fluentFormBorderRadiusTabletWidth = "".concat(fluentFormBorderRadiusTablet.top).concat(fluentFormBorderRadiusUnits.Tablet, " ").concat(fluentFormBorderRadiusTablet.right).concat(fluentFormBorderRadiusUnits.Tablet, " ").concat(fluentFormBorderRadiusTablet.bottom).concat(fluentFormBorderRadiusUnits.Tablet, " ").concat(fluentFormBorderRadiusTablet.left).concat(fluentFormBorderRadiusUnits.Tablet);
  var fluentFormBorderRadiusMobileWidth = "".concat(fluentFormBorderRadiusMobile.top).concat(fluentFormBorderRadiusUnits.Mobile, " ").concat(fluentFormBorderRadiusMobile.right).concat(fluentFormBorderRadiusUnits.Mobile, " ").concat(fluentFormBorderRadiusMobile.bottom).concat(fluentFormBorderRadiusUnits.Mobile, " ").concat(fluentFormBorderRadiusMobile.left).concat(fluentFormBorderRadiusUnits.Mobile);
  /** End Border Radius */

  /** Start Radio border radius*/
  var fluentFormRadioBorderRadiusUnitChange = function fluentFormRadioBorderRadiusUnitChange(event, position) {
    var value = event.target.value;
    if (fluentFormRadioBorderRadiusLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormRadioBorderRadiusDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormRadioBorderRadiusTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormRadioBorderRadiusMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormRadioBorderRadiusDesktop: _objectSpread(_objectSpread({}, fluentFormRadioBorderRadiusDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormRadioBorderRadiusTablet: _objectSpread(_objectSpread({}, fluentFormRadioBorderRadiusTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormRadioBorderRadiusMobile: _objectSpread(_objectSpread({}, fluentFormRadioBorderRadiusMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormRadioBorderRadiusCombineBtn = function fluentFormRadioBorderRadiusCombineBtn() {
    setAttributes({
      fluentFormRadioBorderRadiusLink: !fluentFormRadioBorderRadiusLink
    });
  };
  var fluentFormRadioBorderRadiusUnitsHandler = function fluentFormRadioBorderRadiusUnitsHandler(unit) {
    setAttributes({
      fluentFormRadioBorderRadiusUnits: _objectSpread(_objectSpread({}, fluentFormRadioBorderRadiusUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  /** end Radio border */

  /** End Radio Border Radius */
  var fluentFormRadioBorderRadiusDesktopWidth = "".concat(fluentFormRadioBorderRadiusDesktop.top).concat(fluentFormRadioBorderRadiusUnits.Desktop, " ").concat(fluentFormRadioBorderRadiusDesktop.right).concat(fluentFormRadioBorderRadiusUnits.Desktop, " ").concat(fluentFormRadioBorderRadiusDesktop.bottom).concat(fluentFormRadioBorderRadiusUnits.Desktop, " ").concat(fluentFormRadioBorderRadiusDesktop.left).concat(fluentFormRadioBorderRadiusUnits.Desktop);
  var fluentFormRadioBorderRadiusTabletWidth = "".concat(fluentFormRadioBorderRadiusTablet.top).concat(fluentFormRadioBorderRadiusUnits.Tablet, " ").concat(fluentFormRadioBorderRadiusTablet.right).concat(fluentFormRadioBorderRadiusUnits.Tablet, " ").concat(fluentFormRadioBorderRadiusTablet.bottom).concat(fluentFormRadioBorderRadiusUnits.Tablet, " ").concat(fluentFormRadioBorderRadiusTablet.left).concat(fluentFormRadioBorderRadiusUnits.Tablet);
  var fluentFormRadioBorderRadiusMobileWidth = "".concat(fluentFormRadioBorderRadiusMobile.top).concat(fluentFormRadioBorderRadiusUnits.Mobile, " ").concat(fluentFormRadioBorderRadiusMobile.right).concat(fluentFormRadioBorderRadiusUnits.Mobile, " ").concat(fluentFormRadioBorderRadiusMobile.bottom).concat(fluentFormRadioBorderRadiusUnits.Mobile, " ").concat(fluentFormRadioBorderRadiusMobile.left).concat(fluentFormRadioBorderRadiusUnits.Mobile);
  /** End Radio Border Radius */

  /** Start Radio border radius*/
  var fluentFormCheckBoxBorderRadiusUnitChange = function fluentFormCheckBoxBorderRadiusUnitChange(event, position) {
    var value = event.target.value;
    if (fluentFormCheckBoxBorderRadiusLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormCheckBoxBorderRadiusDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormCheckBoxBorderRadiusTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormCheckBoxBorderRadiusMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormCheckBoxBorderRadiusDesktop: _objectSpread(_objectSpread({}, fluentFormCheckBoxBorderRadiusDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormCheckBoxBorderRadiusTablet: _objectSpread(_objectSpread({}, fluentFormCheckBoxBorderRadiusTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormCheckBoxBorderRadiusMobile: _objectSpread(_objectSpread({}, fluentFormCheckBoxBorderRadiusMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormCheckBoxBorderRadiusCombineBtn = function fluentFormCheckBoxBorderRadiusCombineBtn() {
    setAttributes({
      fluentFormCheckBoxBorderRadiusLink: !fluentFormCheckBoxBorderRadiusLink
    });
  };
  var fluentFormCheckBoxBorderRadiusUnitsHandler = function fluentFormCheckBoxBorderRadiusUnitsHandler(unit) {
    setAttributes({
      fluentFormCheckBoxBorderRadiusUnits: _objectSpread(_objectSpread({}, fluentFormCheckBoxBorderRadiusUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  /** end Radio border */

  /** End Radio Border Radius */
  var fluentFormCheckBoxBorderRadiusDesktopWidth = "".concat(fluentFormCheckBoxBorderRadiusDesktop.top).concat(fluentFormCheckBoxBorderRadiusUnits.Desktop, " ").concat(fluentFormCheckBoxBorderRadiusDesktop.right).concat(fluentFormCheckBoxBorderRadiusUnits.Desktop, " ").concat(fluentFormCheckBoxBorderRadiusDesktop.bottom).concat(fluentFormCheckBoxBorderRadiusUnits.Desktop, " ").concat(fluentFormCheckBoxBorderRadiusDesktop.left).concat(fluentFormCheckBoxBorderRadiusUnits.Desktop);
  var fluentFormCheckBoxBorderRadiusTabletWidth = "".concat(fluentFormCheckBoxBorderRadiusTablet.top).concat(fluentFormCheckBoxBorderRadiusUnits.Tablet, " ").concat(fluentFormCheckBoxBorderRadiusTablet.right).concat(fluentFormCheckBoxBorderRadiusUnits.Tablet, " ").concat(fluentFormCheckBoxBorderRadiusTablet.bottom).concat(fluentFormCheckBoxBorderRadiusUnits.Tablet, " ").concat(fluentFormCheckBoxBorderRadiusTablet.left).concat(fluentFormCheckBoxBorderRadiusUnits.Tablet);
  var fluentFormCheckBoxBorderRadiusMobileWidth = "".concat(fluentFormCheckBoxBorderRadiusMobile.top).concat(fluentFormCheckBoxBorderRadiusUnits.Mobile, " ").concat(fluentFormCheckBoxBorderRadiusMobile.right).concat(fluentFormCheckBoxBorderRadiusUnits.Mobile, " ").concat(fluentFormCheckBoxBorderRadiusMobile.bottom).concat(fluentFormCheckBoxBorderRadiusUnits.Mobile, " ").concat(fluentFormCheckBoxBorderRadiusMobile.left).concat(fluentFormCheckBoxBorderRadiusUnits.Mobile);
  /** End Radio Border Radius */

  /** Start Section Break Title padding */
  var fluentFormSectionBreakTitlePaddingUnitsChange = function fluentFormSectionBreakTitlePaddingUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormSectionBreakTitlePaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSectionBreakTitlePaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSectionBreakTitlePaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSectionBreakTitlePaddingMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSectionBreakTitlePaddingDesktop: _objectSpread(_objectSpread({}, fluentFormSectionBreakTitlePaddingDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSectionBreakTitlePaddingTablet: _objectSpread(_objectSpread({}, fluentFormSectionBreakTitlePaddingTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSectionBreakTitlePaddingMobile: _objectSpread(_objectSpread({}, fluentFormSectionBreakTitlePaddingMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormSectionBreakTitlePaddingLinkBtn = function fluentFormSectionBreakTitlePaddingLinkBtn() {
    setAttributes({
      fluentFormSectionBreakTitlePaddingLink: !fluentFormSectionBreakTitlePaddingLink
    });
  };
  var fluentFormSectionBreakTitlePaddingUnitsHandler = function fluentFormSectionBreakTitlePaddingUnitsHandler(unit) {
    setAttributes({
      fluentFormSectionBreakTitlePaddingUnits: _objectSpread(_objectSpread({}, fluentFormSectionBreakTitlePaddingUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };

  /** Default padding for Section Break Title */
  var fluentFormSectionBreakTitleDesktopPadding = "".concat(fluentFormSectionBreakTitlePaddingDesktop.top).concat(fluentFormSectionBreakTitlePaddingUnits.Desktop, " ").concat(fluentFormSectionBreakTitlePaddingDesktop.right).concat(fluentFormSectionBreakTitlePaddingUnits.Desktop, " ").concat(fluentFormSectionBreakTitlePaddingDesktop.bottom).concat(fluentFormSectionBreakTitlePaddingUnits.Desktop, " ").concat(fluentFormSectionBreakTitlePaddingDesktop.left).concat(fluentFormSectionBreakTitlePaddingUnits.Desktop);
  var fluentFormSectionBreakTitleTabletPadding = "".concat(fluentFormSectionBreakTitlePaddingTablet.top).concat(fluentFormSectionBreakTitlePaddingUnits.Tablet, " ").concat(fluentFormSectionBreakTitlePaddingTablet.right).concat(fluentFormSectionBreakTitlePaddingUnits.Tablet, " ").concat(fluentFormSectionBreakTitlePaddingTablet.bottom).concat(fluentFormSectionBreakTitlePaddingUnits.Tablet, " ").concat(fluentFormSectionBreakTitlePaddingTablet.left).concat(fluentFormSectionBreakTitlePaddingUnits.Tablet);
  var fluentFormSectionBreakTitleMobilePadding = "".concat(fluentFormSectionBreakTitlePaddingMobile.top).concat(fluentFormSectionBreakTitlePaddingUnits.Mobile, " ").concat(fluentFormSectionBreakTitlePaddingMobile.right).concat(fluentFormSectionBreakTitlePaddingUnits.Mobile, " ").concat(fluentFormSectionBreakTitlePaddingMobile.bottom).concat(fluentFormSectionBreakTitlePaddingUnits.Mobile, " ").concat(fluentFormSectionBreakTitlePaddingMobile.left).concat(fluentFormSectionBreakTitlePaddingUnits.Mobile);
  /** End Section Break Title padding */

  /** Start Section Break Title Margin */
  var fluentFormSectionBreakTitleMarginUnitsChange = function fluentFormSectionBreakTitleMarginUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormSectionBreakTitleMarginLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSectionBreakTitleMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSectionBreakTitleMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSectionBreakTitleMarginMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSectionBreakTitleMarginDesktop: _objectSpread(_objectSpread({}, fluentFormSectionBreakTitleMarginDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSectionBreakTitleMarginTablet: _objectSpread(_objectSpread({}, fluentFormSectionBreakTitleMarginTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSectionBreakTitleMarginMobile: _objectSpread(_objectSpread({}, fluentFormSectionBreakTitleMarginMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormSectionBreakTitleMarginLinkBtn = function fluentFormSectionBreakTitleMarginLinkBtn() {
    setAttributes({
      fluentFormSectionBreakTitleMarginLink: !fluentFormSectionBreakTitleMarginLink
    });
  };
  var fluentFormSectionBreakTitleMarginUnitsHandler = function fluentFormSectionBreakTitleMarginUnitsHandler(unit) {
    setAttributes({
      fluentFormSectionBreakTitleMarginUnits: _objectSpread(_objectSpread({}, fluentFormSectionBreakTitleMarginUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  var fluentFormSectionBreakTitleDesktopMargin = "".concat(fluentFormSectionBreakTitleMarginDesktop.top).concat(fluentFormSectionBreakTitleMarginUnits.Desktop, " ").concat(fluentFormSectionBreakTitleMarginDesktop.right).concat(fluentFormSectionBreakTitleMarginUnits.Desktop, " ").concat(fluentFormSectionBreakTitleMarginDesktop.bottom).concat(fluentFormSectionBreakTitleMarginUnits.Desktop, " ").concat(fluentFormSectionBreakTitleMarginDesktop.left).concat(fluentFormSectionBreakTitleMarginUnits.Desktop);
  var fluentFormSectionBreakTitleTabletMargin = "".concat(fluentFormSectionBreakTitleMarginTablet.top).concat(fluentFormSectionBreakTitleMarginUnits.Tablet, " ").concat(fluentFormSectionBreakTitleMarginTablet.right).concat(fluentFormSectionBreakTitleMarginUnits.Tablet, " ").concat(fluentFormSectionBreakTitleMarginTablet.bottom).concat(fluentFormSectionBreakTitleMarginUnits.Tablet, " ").concat(fluentFormSectionBreakTitleMarginTablet.left).concat(fluentFormSectionBreakTitleMarginUnits.Tablet);
  var fluentFormSectionBreakTitleMobileMargin = "".concat(fluentFormSectionBreakTitleMarginMobile.top).concat(fluentFormSectionBreakTitleMarginUnits.Mobile, " ").concat(fluentFormSectionBreakTitleMarginMobile.right).concat(fluentFormSectionBreakTitleMarginUnits.Mobile, " ").concat(fluentFormSectionBreakTitleMarginMobile.bottom).concat(fluentFormSectionBreakTitleMarginUnits.Mobile, " ").concat(fluentFormSectionBreakTitleMarginMobile.left).concat(fluentFormSectionBreakTitleMarginUnits.Mobile);
  /** End Section Break Title Margin */

  /** Start Section Break Description padding */
  var fluentFormSectionBreakDescPaddingUnitsChange = function fluentFormSectionBreakDescPaddingUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormSectionBreakDescPaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSectionBreakDescPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSectionBreakDescPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSectionBreakDescPaddingMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSectionBreakDescPaddingDesktop: _objectSpread(_objectSpread({}, fluentFormSectionBreakDescPaddingDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSectionBreakDescPaddingTablet: _objectSpread(_objectSpread({}, fluentFormSectionBreakDescPaddingTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSectionBreakDescPaddingMobile: _objectSpread(_objectSpread({}, fluentFormSectionBreakDescPaddingMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormSectionBreakDescPaddingLinkBtn = function fluentFormSectionBreakDescPaddingLinkBtn() {
    setAttributes({
      fluentFormSectionBreakDescPaddingLink: !fluentFormSectionBreakDescPaddingLink
    });
  };
  var fluentFormSectionBreakDescPaddingUnitsHandler = function fluentFormSectionBreakDescPaddingUnitsHandler(unit) {
    setAttributes({
      fluentFormSectionBreakDescPaddingUnits: _objectSpread(_objectSpread({}, fluentFormSectionBreakDescPaddingUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };

  /** Default padding for Section Break Description */
  var fluentFormSectionBreakDescDesktopPadding = "".concat(fluentFormSectionBreakDescPaddingDesktop.top).concat(fluentFormSectionBreakDescPaddingUnits.Desktop, " ").concat(fluentFormSectionBreakDescPaddingDesktop.right).concat(fluentFormSectionBreakDescPaddingUnits.Desktop, " ").concat(fluentFormSectionBreakDescPaddingDesktop.bottom).concat(fluentFormSectionBreakDescPaddingUnits.Desktop, " ").concat(fluentFormSectionBreakDescPaddingDesktop.left).concat(fluentFormSectionBreakDescPaddingUnits.Desktop);
  var fluentFormSectionBreakDescTabletPadding = "".concat(fluentFormSectionBreakDescPaddingTablet.top).concat(fluentFormSectionBreakDescPaddingUnits.Tablet, " ").concat(fluentFormSectionBreakDescPaddingTablet.right).concat(fluentFormSectionBreakDescPaddingUnits.Tablet, " ").concat(fluentFormSectionBreakDescPaddingTablet.bottom).concat(fluentFormSectionBreakDescPaddingUnits.Tablet, " ").concat(fluentFormSectionBreakDescPaddingTablet.left).concat(fluentFormSectionBreakDescPaddingUnits.Tablet);
  var fluentFormSectionBreakDescMobilePadding = "".concat(fluentFormSectionBreakDescPaddingMobile.top).concat(fluentFormSectionBreakDescPaddingUnits.Mobile, " ").concat(fluentFormSectionBreakDescPaddingMobile.right).concat(fluentFormSectionBreakDescPaddingUnits.Mobile, " ").concat(fluentFormSectionBreakDescPaddingMobile.bottom).concat(fluentFormSectionBreakDescPaddingUnits.Mobile, " ").concat(fluentFormSectionBreakDescPaddingMobile.left).concat(fluentFormSectionBreakDescPaddingUnits.Mobile);
  /** End Section Break Description padding */

  /** Start Section Break Description Margin */
  var fluentFormSectionBreakDescMarginUnitsChange = function fluentFormSectionBreakDescMarginUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormSectionBreakDescMarginLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSectionBreakDescMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSectionBreakDescMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSectionBreakDescMarginMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSectionBreakDescMarginDesktop: _objectSpread(_objectSpread({}, fluentFormSectionBreakDescMarginDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSectionBreakDescMarginTablet: _objectSpread(_objectSpread({}, fluentFormSectionBreakDescMarginTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSectionBreakDescMarginMobile: _objectSpread(_objectSpread({}, fluentFormSectionBreakDescMarginMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormSectionBreakDescMarginLinkBtn = function fluentFormSectionBreakDescMarginLinkBtn() {
    setAttributes({
      fluentFormSectionBreakDescMarginLink: !fluentFormSectionBreakDescMarginLink
    });
  };
  var fluentFormSectionBreakDescMarginUnitsHandler = function fluentFormSectionBreakDescMarginUnitsHandler(unit) {
    setAttributes({
      fluentFormSectionBreakDescMarginUnits: _objectSpread(_objectSpread({}, fluentFormSectionBreakDescMarginUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  var fluentFormSectionBreakDescDesktopMargin = "".concat(fluentFormSectionBreakDescMarginDesktop.top).concat(fluentFormSectionBreakDescMarginUnits.Desktop, " ").concat(fluentFormSectionBreakDescMarginDesktop.right).concat(fluentFormSectionBreakDescMarginUnits.Desktop, " ").concat(fluentFormSectionBreakDescMarginDesktop.bottom).concat(fluentFormSectionBreakDescMarginUnits.Desktop, " ").concat(fluentFormSectionBreakDescMarginDesktop.left).concat(fluentFormSectionBreakDescMarginUnits.Desktop);
  var fluentFormSectionBreakDescTabletMargin = "".concat(fluentFormSectionBreakDescMarginTablet.top).concat(fluentFormSectionBreakDescMarginUnits.Tablet, " ").concat(fluentFormSectionBreakDescMarginTablet.right).concat(fluentFormSectionBreakDescMarginUnits.Tablet, " ").concat(fluentFormSectionBreakDescMarginTablet.bottom).concat(fluentFormSectionBreakDescMarginUnits.Tablet, " ").concat(fluentFormSectionBreakDescMarginTablet.left).concat(fluentFormSectionBreakDescMarginUnits.Tablet);
  var fluentFormSectionBreakDescMobileMargin = "".concat(fluentFormSectionBreakDescMarginMobile.top).concat(fluentFormSectionBreakDescMarginUnits.Mobile, " ").concat(fluentFormSectionBreakDescMarginMobile.right).concat(fluentFormSectionBreakDescMarginUnits.Mobile, " ").concat(fluentFormSectionBreakDescMarginMobile.bottom).concat(fluentFormSectionBreakDescMarginUnits.Mobile, " ").concat(fluentFormSectionBreakDescMarginMobile.left).concat(fluentFormSectionBreakDescMarginUnits.Mobile);
  /** End Section Break Description Margin */

  /** Start HTML padding */
  var fluentFormHtmlPaddingUnitsChange = function fluentFormHtmlPaddingUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormHtmlPaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormHtmlPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormHtmlPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormHtmlPaddingMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormHtmlPaddingDesktop: _objectSpread(_objectSpread({}, fluentFormHtmlPaddingDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormHtmlPaddingTablet: _objectSpread(_objectSpread({}, fluentFormHtmlPaddingTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormHtmlPaddingMobile: _objectSpread(_objectSpread({}, fluentFormHtmlPaddingMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormHtmlPaddingLinkBtn = function fluentFormHtmlPaddingLinkBtn() {
    setAttributes({
      fluentFormHtmlPaddingLink: !fluentFormHtmlPaddingLink
    });
  };
  var fluentFormHtmlPaddingUnitsHandler = function fluentFormHtmlPaddingUnitsHandler(unit) {
    setAttributes({
      fluentFormHtmlPaddingUnits: _objectSpread(_objectSpread({}, fluentFormHtmlPaddingUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };

  /** Default padding for HTML */
  var fluentFormHtmlDesktopPadding = "".concat(fluentFormHtmlPaddingDesktop.top).concat(fluentFormHtmlPaddingUnits.Desktop, " ").concat(fluentFormHtmlPaddingDesktop.right).concat(fluentFormHtmlPaddingUnits.Desktop, " ").concat(fluentFormHtmlPaddingDesktop.bottom).concat(fluentFormHtmlPaddingUnits.Desktop, " ").concat(fluentFormHtmlPaddingDesktop.left).concat(fluentFormHtmlPaddingUnits.Desktop);
  var fluentFormHtmlTabletPadding = "".concat(fluentFormHtmlPaddingTablet.top).concat(fluentFormHtmlPaddingUnits.Tablet, " ").concat(fluentFormHtmlPaddingTablet.right).concat(fluentFormHtmlPaddingUnits.Tablet, " ").concat(fluentFormHtmlPaddingTablet.bottom).concat(fluentFormHtmlPaddingUnits.Tablet, " ").concat(fluentFormHtmlPaddingTablet.left).concat(fluentFormHtmlPaddingUnits.Tablet);
  var fluentFormHtmlMobilePadding = "".concat(fluentFormHtmlPaddingMobile.top).concat(fluentFormHtmlPaddingUnits.Mobile, " ").concat(fluentFormHtmlPaddingMobile.right).concat(fluentFormHtmlPaddingUnits.Mobile, " ").concat(fluentFormHtmlPaddingMobile.bottom).concat(fluentFormHtmlPaddingUnits.Mobile, " ").concat(fluentFormHtmlPaddingMobile.left).concat(fluentFormHtmlPaddingUnits.Mobile);
  /** End HTML padding */

  /** Start HTML Margin */
  var fluentFormHtmlMarginUnitsChange = function fluentFormHtmlMarginUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormHtmlMarginLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormHtmlMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormHtmlMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormHtmlMarginMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormHtmlMarginDesktop: _objectSpread(_objectSpread({}, fluentFormHtmlMarginDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormHtmlMarginTablet: _objectSpread(_objectSpread({}, fluentFormHtmlMarginTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormHtmlMarginMobile: _objectSpread(_objectSpread({}, fluentFormHtmlMarginMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormHtmlMarginLinkBtn = function fluentFormHtmlMarginLinkBtn() {
    setAttributes({
      fluentFormHtmlMarginLink: !fluentFormHtmlMarginLink
    });
  };
  var fluentFormHtmlMarginUnitsHandler = function fluentFormHtmlMarginUnitsHandler(unit) {
    setAttributes({
      fluentFormHtmlMarginUnits: _objectSpread(_objectSpread({}, fluentFormHtmlMarginUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  var fluentFormHtmlDesktopMargin = "".concat(fluentFormHtmlMarginDesktop.top).concat(fluentFormHtmlMarginUnits.Desktop, " ").concat(fluentFormHtmlMarginDesktop.right).concat(fluentFormHtmlMarginUnits.Desktop, " ").concat(fluentFormHtmlMarginDesktop.bottom).concat(fluentFormHtmlMarginUnits.Desktop, " ").concat(fluentFormHtmlMarginDesktop.left).concat(fluentFormHtmlMarginUnits.Desktop);
  var fluentFormHtmlTabletMargin = "".concat(fluentFormHtmlMarginTablet.top).concat(fluentFormHtmlMarginUnits.Tablet, " ").concat(fluentFormHtmlMarginTablet.right).concat(fluentFormHtmlMarginUnits.Tablet, " ").concat(fluentFormHtmlMarginTablet.bottom).concat(fluentFormHtmlMarginUnits.Tablet, " ").concat(fluentFormHtmlMarginTablet.left).concat(fluentFormHtmlMarginUnits.Tablet);
  var fluentFormHtmlMobileMargin = "".concat(fluentFormHtmlMarginMobile.top).concat(fluentFormHtmlMarginUnits.Mobile, " ").concat(fluentFormHtmlMarginMobile.right).concat(fluentFormHtmlMarginUnits.Mobile, " ").concat(fluentFormHtmlMarginMobile.bottom).concat(fluentFormHtmlMarginUnits.Mobile, " ").concat(fluentFormHtmlMarginMobile.left).concat(fluentFormHtmlMarginUnits.Mobile);
  /** End HTML Margin */

  /** Start Submit Padding */
  var fluentFormSubmitPaddingUnitsChange = function fluentFormSubmitPaddingUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormSubmitPaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSubmitPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSubmitPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSubmitPaddingMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSubmitPaddingDesktop: _objectSpread(_objectSpread({}, fluentFormSubmitPaddingDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSubmitPaddingTablet: _objectSpread(_objectSpread({}, fluentFormSubmitPaddingTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSubmitPaddingMobile: _objectSpread(_objectSpread({}, fluentFormSubmitPaddingMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormSubmitPaddingLinkBtn = function fluentFormSubmitPaddingLinkBtn() {
    setAttributes({
      fluentFormSubmitPaddingLink: !fluentFormSubmitPaddingLink
    });
  };
  var fluentFormSubmitPaddingUnitsHandler = function fluentFormSubmitPaddingUnitsHandler(unit) {
    setAttributes({
      fluentFormSubmitPaddingUnits: _objectSpread(_objectSpread({}, fluentFormSubmitPaddingUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };

  /** Default padding for Submit */
  var fluentFormSubmitDesktopPadding = "".concat(fluentFormSubmitPaddingDesktop.top).concat(fluentFormSubmitPaddingUnits.Desktop, " ").concat(fluentFormSubmitPaddingDesktop.right).concat(fluentFormSubmitPaddingUnits.Desktop, " ").concat(fluentFormSubmitPaddingDesktop.bottom).concat(fluentFormSubmitPaddingUnits.Desktop, " ").concat(fluentFormSubmitPaddingDesktop.left).concat(fluentFormSubmitPaddingUnits.Desktop);
  var fluentFormSubmitTabletPadding = "".concat(fluentFormSubmitPaddingTablet.top).concat(fluentFormSubmitPaddingUnits.Tablet, " ").concat(fluentFormSubmitPaddingTablet.right).concat(fluentFormSubmitPaddingUnits.Tablet, " ").concat(fluentFormSubmitPaddingTablet.bottom).concat(fluentFormSubmitPaddingUnits.Tablet, " ").concat(fluentFormSubmitPaddingTablet.left).concat(fluentFormSubmitPaddingUnits.Tablet);
  var fluentFormSubmitMobilePadding = "".concat(fluentFormSubmitPaddingMobile.top).concat(fluentFormSubmitPaddingUnits.Mobile, " ").concat(fluentFormSubmitPaddingMobile.right).concat(fluentFormSubmitPaddingUnits.Mobile, " ").concat(fluentFormSubmitPaddingMobile.bottom).concat(fluentFormSubmitPaddingUnits.Mobile, " ").concat(fluentFormSubmitPaddingMobile.left).concat(fluentFormSubmitPaddingUnits.Mobile);
  /** End Submit Padding */

  /** Start Margin */
  var fluentFormSubmitMarginUnitsChange = function fluentFormSubmitMarginUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormSubmitMarginLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSubmitMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSubmitMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSubmitMarginMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSubmitMarginDesktop: _objectSpread(_objectSpread({}, fluentFormSubmitMarginDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSubmitMarginTablet: _objectSpread(_objectSpread({}, fluentFormSubmitMarginTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSubmitMarginMobile: _objectSpread(_objectSpread({}, fluentFormSubmitMarginMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormSubmitMarginLinkBtn = function fluentFormSubmitMarginLinkBtn() {
    setAttributes({
      fluentFormSubmitMarginLink: !fluentFormSubmitMarginLink
    });
  };
  var fluentFormSubmitMarginUnitsHandler = function fluentFormSubmitMarginUnitsHandler(unit) {
    setAttributes({
      fluentFormSubmitMarginUnits: _objectSpread(_objectSpread({}, fluentFormSubmitMarginUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  var fluentFormSubmitDesktopMargin = "".concat(fluentFormSubmitMarginDesktop.top).concat(fluentFormSubmitMarginUnits.Desktop, " ").concat(fluentFormSubmitMarginDesktop.right).concat(fluentFormSubmitMarginUnits.Desktop, " ").concat(fluentFormSubmitMarginDesktop.bottom).concat(fluentFormSubmitMarginUnits.Desktop, " ").concat(fluentFormSubmitMarginDesktop.left).concat(fluentFormSubmitMarginUnits.Desktop);
  var fluentFormSubmitTabletMargin = "".concat(fluentFormSubmitMarginTablet.top).concat(fluentFormSubmitMarginUnits.Tablet, " ").concat(fluentFormSubmitMarginTablet.right).concat(fluentFormSubmitMarginUnits.Tablet, " ").concat(fluentFormSubmitMarginTablet.bottom).concat(fluentFormSubmitMarginUnits.Tablet, " ").concat(fluentFormSubmitMarginTablet.left).concat(fluentFormSubmitMarginUnits.Tablet);
  var fluentFormSubmitMobileMargin = "".concat(fluentFormSubmitMarginMobile.top).concat(fluentFormSubmitMarginUnits.Mobile, " ").concat(fluentFormSubmitMarginMobile.right).concat(fluentFormSubmitMarginUnits.Mobile, " ").concat(fluentFormSubmitMarginMobile.bottom).concat(fluentFormSubmitMarginUnits.Mobile, " ").concat(fluentFormSubmitMarginMobile.left).concat(fluentFormSubmitMarginUnits.Mobile);
  /** End Submit Margin */

  /** Start Submit Border */
  var fluentFormSubmitBorderUnitsChange = function fluentFormSubmitBorderUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormSubmitBorderLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSubmitBorderDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSubmitBorderTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSubmitBorderMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSubmitBorderDesktop: _objectSpread(_objectSpread({}, fluentFormSubmitBorderDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSubmitBorderTablet: _objectSpread(_objectSpread({}, fluentFormSubmitBorderTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSubmitBorderMobile: _objectSpread(_objectSpread({}, fluentFormSubmitBorderMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormSubmitBorderLinkBtn = function fluentFormSubmitBorderLinkBtn() {
    setAttributes({
      fluentFormSubmitBorderLink: !fluentFormSubmitBorderLink
    });
  };
  var fluentFormSubmitBorderUnitsHandler = function fluentFormSubmitBorderUnitsHandler(unit) {
    setAttributes({
      fluentFormSubmitBorderUnits: _objectSpread(_objectSpread({}, fluentFormSubmitBorderUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };

  /** Default border for Submit */
  var fluentFormSubmitDesktopBorderWidth = "".concat(fluentFormSubmitBorderDesktop.top).concat(fluentFormSubmitBorderUnits.Desktop, " ").concat(fluentFormSubmitBorderDesktop.right).concat(fluentFormSubmitBorderUnits.Desktop, " ").concat(fluentFormSubmitBorderDesktop.bottom).concat(fluentFormSubmitBorderUnits.Desktop, " ").concat(fluentFormSubmitBorderDesktop.left).concat(fluentFormSubmitBorderUnits.Desktop);
  var fluentFormSubmitTabletBorderWidth = "".concat(fluentFormSubmitBorderTablet.top).concat(fluentFormSubmitBorderUnits.Tablet, " ").concat(fluentFormSubmitBorderTablet.right).concat(fluentFormSubmitBorderUnits.Tablet, " ").concat(fluentFormSubmitBorderTablet.bottom).concat(fluentFormSubmitBorderUnits.Tablet, " ").concat(fluentFormSubmitBorderTablet.left).concat(fluentFormSubmitBorderUnits.Tablet);
  var fluentFormSubmitMobileBorderWidth = "".concat(fluentFormSubmitBorderMobile.top).concat(fluentFormSubmitBorderUnits.Mobile, " ").concat(fluentFormSubmitBorderMobile.right).concat(fluentFormSubmitBorderUnits.Mobile, " ").concat(fluentFormSubmitBorderMobile.bottom).concat(fluentFormSubmitBorderUnits.Mobile, " ").concat(fluentFormSubmitBorderMobile.left).concat(fluentFormSubmitBorderUnits.Mobile);
  /** End Submit Border */

  /** Start Submit Border Radius */
  var fluentFormSubmitBorderRadiusUnitsChange = function fluentFormSubmitBorderRadiusUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormSubmitBorderRadiusLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSubmitBorderRadiusDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSubmitBorderRadiusTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSubmitBorderRadiusMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSubmitBorderRadiusDesktop: _objectSpread(_objectSpread({}, fluentFormSubmitBorderRadiusDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSubmitBorderRadiusTablet: _objectSpread(_objectSpread({}, fluentFormSubmitBorderRadiusTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSubmitBorderRadiusMobile: _objectSpread(_objectSpread({}, fluentFormSubmitBorderRadiusMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormSubmitBorderRadiusLinkBtn = function fluentFormSubmitBorderRadiusLinkBtn() {
    setAttributes({
      fluentFormSubmitBorderRadiusLink: !fluentFormSubmitBorderRadiusLink
    });
  };
  var fluentFormSubmitBorderRadiusUnitsHandler = function fluentFormSubmitBorderRadiusUnitsHandler(unit) {
    setAttributes({
      fluentFormSubmitBorderRadiusUnits: _objectSpread(_objectSpread({}, fluentFormSubmitBorderRadiusUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };

  /** Default border radius for Submit */
  var fluentFormSubmitDesktopBorderRadiusWidth = "".concat(fluentFormSubmitBorderRadiusDesktop.top).concat(fluentFormSubmitBorderRadiusUnits.Desktop, " ").concat(fluentFormSubmitBorderRadiusDesktop.right).concat(fluentFormSubmitBorderRadiusUnits.Desktop, " ").concat(fluentFormSubmitBorderRadiusDesktop.bottom).concat(fluentFormSubmitBorderRadiusUnits.Desktop, " ").concat(fluentFormSubmitBorderRadiusDesktop.left).concat(fluentFormSubmitBorderRadiusUnits.Desktop);
  var fluentFormSubmitTabletBorderRadiusWidth = "".concat(fluentFormSubmitBorderRadiusTablet.top).concat(fluentFormSubmitBorderRadiusUnits.Tablet, " ").concat(fluentFormSubmitBorderRadiusTablet.right).concat(fluentFormSubmitBorderRadiusUnits.Tablet, " ").concat(fluentFormSubmitBorderRadiusTablet.bottom).concat(fluentFormSubmitBorderRadiusUnits.Tablet, " ").concat(fluentFormSubmitBorderRadiusTablet.left).concat(fluentFormSubmitBorderRadiusUnits.Tablet);
  var fluentFormSubmitMobileBorderRadiusWidth = "".concat(fluentFormSubmitBorderRadiusMobile.top).concat(fluentFormSubmitBorderRadiusUnits.Mobile, " ").concat(fluentFormSubmitBorderRadiusUnits.Mobile, " ").concat(fluentFormSubmitBorderRadiusDesktop.bottom).concat(fluentFormSubmitBorderRadiusUnits.Mobile, " ").concat(fluentFormSubmitBorderRadiusDesktop.left).concat(fluentFormSubmitBorderRadiusUnits.Mobile);

  /** End Submit Border Radius */

  /** Start Success Border */
  var fluentFormSuccessBorderUnitsChange = function fluentFormSuccessBorderUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormSuccessBorderLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSuccessBorderDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSuccessBorderTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSuccessBorderMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSuccessBorderDesktop: _objectSpread(_objectSpread({}, fluentFormSuccessBorderDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSuccessBorderTablet: _objectSpread(_objectSpread({}, fluentFormSuccessBorderTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSuccessBorderMobile: _objectSpread(_objectSpread({}, fluentFormSuccessBorderMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormSuccessBorderLinkBtn = function fluentFormSuccessBorderLinkBtn() {
    setAttributes({
      fluentFormSuccessBorderLink: !fluentFormSuccessBorderLink
    });
  };
  var fluentFormSuccessBorderUnitsHandler = function fluentFormSuccessBorderUnitsHandler(unit) {
    setAttributes({
      fluentFormSuccessBorderUnits: _objectSpread(_objectSpread({}, fluentFormSuccessBorderUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };

  /** Default border for Success */
  var fluentFormSuccessDesktopBorderWidth = "".concat(fluentFormSuccessBorderDesktop.top).concat(fluentFormSuccessBorderUnits.Desktop, " ").concat(fluentFormSuccessBorderDesktop.right).concat(fluentFormSuccessBorderUnits.Desktop, " ").concat(fluentFormSuccessBorderDesktop.bottom).concat(fluentFormSuccessBorderUnits.Desktop, " ").concat(fluentFormSuccessBorderDesktop.left).concat(fluentFormSuccessBorderUnits.Desktop);
  var fluentFormSuccessTabletBorderWidth = "".concat(fluentFormSuccessBorderTablet.top).concat(fluentFormSuccessBorderUnits.Tablet, " ").concat(fluentFormSuccessBorderTablet.right).concat(fluentFormSuccessBorderUnits.Tablet, " ").concat(fluentFormSuccessBorderTablet.bottom).concat(fluentFormSuccessBorderUnits.Tablet, " ").concat(fluentFormSuccessBorderTablet.left).concat(fluentFormSuccessBorderUnits.Tablet);
  var fluentFormSuccessMobileBorderWidth = "".concat(fluentFormSuccessBorderMobile.top).concat(fluentFormSuccessBorderUnits.Mobile, " ").concat(fluentFormSuccessBorderMobile.right).concat(fluentFormSuccessBorderUnits.Mobile, " ").concat(fluentFormSuccessBorderMobile.bottom).concat(fluentFormSuccessBorderUnits.Mobile, " ").concat(fluentFormSuccessBorderMobile.left).concat(fluentFormSuccessBorderUnits.Mobile);
  /** End Success Border */

  /** Start Success Border Radius */
  var fluentFormSuccessBorderRadiusUnitsChange = function fluentFormSuccessBorderRadiusUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormSuccessBorderRadiusLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSuccessBorderRadiusDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSuccessBorderRadiusTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSuccessBorderRadiusMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormSuccessBorderRadiusDesktop: _objectSpread(_objectSpread({}, fluentFormSuccessBorderRadiusDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormSuccessBorderRadiusTablet: _objectSpread(_objectSpread({}, fluentFormSuccessBorderRadiusTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormSuccessBorderRadiusMobile: _objectSpread(_objectSpread({}, fluentFormSuccessBorderRadiusMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormSuccessBorderRadiusLinkBtn = function fluentFormSuccessBorderRadiusLinkBtn() {
    setAttributes({
      fluentFormSuccessBorderRadiusLink: !fluentFormSuccessBorderRadiusLink
    });
  };
  var fluentFormSuccessBorderRadiusUnitsHandler = function fluentFormSuccessBorderRadiusUnitsHandler(unit) {
    setAttributes({
      fluentFormSuccessBorderRadiusUnits: _objectSpread(_objectSpread({}, fluentFormSuccessBorderRadiusUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };

  /** Default border radius for Success */
  var fluentFormSuccessDesktopBorderRadiusWidth = "".concat(fluentFormSuccessBorderRadiusDesktop.top).concat(fluentFormSuccessBorderRadiusUnits.Desktop, " ").concat(fluentFormSuccessBorderRadiusDesktop.right).concat(fluentFormSuccessBorderRadiusUnits.Desktop, " ").concat(fluentFormSuccessBorderRadiusDesktop.bottom).concat(fluentFormSuccessBorderRadiusUnits.Desktop, " ").concat(fluentFormSuccessBorderRadiusDesktop.left).concat(fluentFormSuccessBorderRadiusUnits.Desktop);
  var fluentFormSuccessTabletBorderRadiusWidth = "".concat(fluentFormSuccessBorderRadiusTablet.top).concat(fluentFormSuccessBorderRadiusUnits.Tablet, " ").concat(fluentFormSuccessBorderRadiusTablet.right).concat(fluentFormSuccessBorderRadiusUnits.Tablet, " ").concat(fluentFormSuccessBorderRadiusTablet.bottom).concat(fluentFormSuccessBorderRadiusUnits.Tablet, " ").concat(fluentFormSuccessBorderRadiusTablet.left).concat(fluentFormSuccessBorderRadiusUnits.Tablet);
  var fluentFormSuccessMobileBorderRadiusWidth = "".concat(fluentFormSuccessBorderRadiusMobile.top).concat(fluentFormSuccessBorderRadiusUnits.Mobile, " ").concat(fluentFormSuccessBorderRadiusUnits.Mobile, " ").concat(fluentFormSuccessBorderRadiusDesktop.bottom).concat(fluentFormSuccessBorderRadiusUnits.Mobile, " ").concat(fluentFormSuccessBorderRadiusDesktop.left).concat(fluentFormSuccessBorderRadiusUnits.Mobile);
  /** End Success Border Radius */

  /** Start Error Padding */
  var fluentFormErrorPaddingUnitsChange = function fluentFormErrorPaddingUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormErrorPaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormErrorPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormErrorPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormErrorPaddingMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormErrorPaddingDesktop: _objectSpread(_objectSpread({}, fluentFormErrorPaddingDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormErrorPaddingTablet: _objectSpread(_objectSpread({}, fluentFormErrorPaddingTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormErrorPaddingMobile: _objectSpread(_objectSpread({}, fluentFormErrorPaddingMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormErrorPaddingLinkBtn = function fluentFormErrorPaddingLinkBtn() {
    setAttributes({
      fluentFormErrorPaddingLink: !fluentFormErrorPaddingLink
    });
  };
  var fluentFormErrorPaddingUnitsHandler = function fluentFormErrorPaddingUnitsHandler(unit) {
    setAttributes({
      fluentFormErrorPaddingUnits: _objectSpread(_objectSpread({}, fluentFormErrorPaddingUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };

  /** Default padding for Error */
  var fluentFormErrorDesktopPadding = "".concat(fluentFormErrorPaddingDesktop.top).concat(fluentFormErrorPaddingUnits.Desktop, " ").concat(fluentFormErrorPaddingDesktop.right).concat(fluentFormErrorPaddingUnits.Desktop, " ").concat(fluentFormErrorPaddingDesktop.bottom).concat(fluentFormErrorPaddingUnits.Desktop, " ").concat(fluentFormErrorPaddingDesktop.left).concat(fluentFormErrorPaddingUnits.Desktop);
  var fluentFormErrorTabletPadding = "".concat(fluentFormErrorPaddingTablet.top).concat(fluentFormErrorPaddingUnits.Tablet, " ").concat(fluentFormErrorPaddingTablet.right).concat(fluentFormErrorPaddingUnits.Tablet, " ").concat(fluentFormErrorPaddingTablet.bottom).concat(fluentFormErrorPaddingUnits.Tablet, " ").concat(fluentFormErrorPaddingTablet.left).concat(fluentFormErrorPaddingUnits.Tablet);
  var fluentFormErrorMobilePadding = "".concat(fluentFormErrorPaddingMobile.top).concat(fluentFormErrorPaddingUnits.Mobile, " ").concat(fluentFormErrorPaddingMobile.right).concat(fluentFormErrorPaddingUnits.Mobile, " ").concat(fluentFormErrorPaddingMobile.bottom).concat(fluentFormErrorPaddingUnits.Mobile, " ").concat(fluentFormErrorPaddingMobile.left).concat(fluentFormErrorPaddingUnits.Mobile);
  /** End Error Padding */

  /** Start Error Margin */
  var fluentFormErrorMarginUnitsChange = function fluentFormErrorMarginUnitsChange(event, position) {
    var value = event.target.value;
    if (fluentFormErrorMarginLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormErrorMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormErrorMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormErrorMarginMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormErrorMarginDesktop: _objectSpread(_objectSpread({}, fluentFormErrorMarginDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormErrorMarginTablet: _objectSpread(_objectSpread({}, fluentFormErrorMarginTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormErrorMarginMobile: _objectSpread(_objectSpread({}, fluentFormErrorMarginMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var fluentFormErrorMarginLinkBtn = function fluentFormErrorMarginLinkBtn() {
    setAttributes({
      fluentFormErrorMarginLink: !fluentFormErrorMarginLink
    });
  };
  var fluentFormErrorMarginUnitsHandler = function fluentFormErrorMarginUnitsHandler(unit) {
    setAttributes({
      fluentFormErrorMarginUnits: _objectSpread(_objectSpread({}, fluentFormErrorMarginUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };

  /** Default margin for Error */
  var fluentFormErrorDesktopMargin = "".concat(fluentFormErrorMarginDesktop.top).concat(fluentFormErrorMarginUnits.Desktop, " ").concat(fluentFormErrorMarginDesktop.right).concat(fluentFormErrorMarginUnits.Desktop, " ").concat(fluentFormErrorMarginDesktop.bottom).concat(fluentFormErrorMarginUnits.Desktop, " ").concat(fluentFormErrorMarginDesktop.left).concat(fluentFormErrorMarginUnits.Desktop);
  var fluentFormErrorTabletMargin = "".concat(fluentFormErrorMarginTablet.top).concat(fluentFormErrorMarginUnits.Tablet, " ").concat(fluentFormErrorMarginTablet.right).concat(fluentFormErrorMarginUnits.Tablet, " ").concat(fluentFormErrorMarginTablet.bottom).concat(fluentFormErrorMarginUnits.Tablet, " ").concat(fluentFormErrorMarginTablet.left).concat(fluentFormErrorMarginUnits.Tablet);
  var fluentFormErrorMobileMargin = "".concat(fluentFormErrorMarginMobile.top).concat(fluentFormErrorMarginUnits.Mobile, " ").concat(fluentFormErrorMarginMobile.right).concat(fluentFormErrorMarginUnits.Mobile, " ").concat(fluentFormErrorMarginMobile.bottom).concat(fluentFormErrorMarginUnits.Mobile, " ").concat(fluentFormErrorMarginMobile.left).concat(fluentFormErrorMarginUnits.Mobile);
  /** End Error Margin */

  /** Start Global padding */
  var handleGlobalPaddingUnitChange = function handleGlobalPaddingUnitChange(event, position) {
    var value = event.target.value;
    if (fluentFormGlobalPaddingLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormGlobalPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormGlobalPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormGlobalPaddingMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormGlobalPaddingDesktop: _objectSpread(_objectSpread({}, fluentFormGlobalPaddingDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormGlobalPaddingTablet: _objectSpread(_objectSpread({}, fluentFormGlobalPaddingTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormGlobalPaddingMobile: _objectSpread(_objectSpread({}, fluentFormGlobalPaddingMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleGlobalPaddingCombineBtn = function handleGlobalPaddingCombineBtn() {
    setAttributes({
      fluentFormGlobalPaddingLink: !fluentFormGlobalPaddingLink
    });
  };
  var handleGlobalPaddingUnitsHandler = function handleGlobalPaddingUnitsHandler(unit) {
    setAttributes({
      fluentFormGlobalPaddingUnits: _objectSpread(_objectSpread({}, fluentFormGlobalPaddingUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  /** end Global padding */

  /** Default padding for desktop (using desktop_padding) */
  var DesktopPadding = "".concat(fluentFormGlobalPaddingDesktop.top).concat(fluentFormGlobalPaddingUnits.Desktop, " ").concat(fluentFormGlobalPaddingDesktop.right).concat(fluentFormGlobalPaddingUnits.Desktop, " ").concat(fluentFormGlobalPaddingDesktop.bottom).concat(fluentFormGlobalPaddingUnits.Desktop, " ").concat(fluentFormGlobalPaddingDesktop.left).concat(fluentFormGlobalPaddingUnits.Desktop);
  var TabletPadding = "".concat(fluentFormGlobalPaddingTablet.top).concat(fluentFormGlobalPaddingUnits.Tablet, " ").concat(fluentFormGlobalPaddingTablet.right).concat(fluentFormGlobalPaddingUnits.Tablet, " ").concat(fluentFormGlobalPaddingTablet.bottom).concat(fluentFormGlobalPaddingUnits.Tablet, " ").concat(fluentFormGlobalPaddingTablet.left).concat(fluentFormGlobalPaddingUnits.Tablet);
  var MobilePadding = "".concat(fluentFormGlobalPaddingMobile.top).concat(fluentFormGlobalPaddingUnits.Mobile, " ").concat(fluentFormGlobalPaddingMobile.right).concat(fluentFormGlobalPaddingUnits.Mobile, " ").concat(fluentFormGlobalPaddingMobile.bottom).concat(fluentFormGlobalPaddingUnits.Mobile, " ").concat(fluentFormGlobalPaddingMobile.left).concat(fluentFormGlobalPaddingUnits.Mobile);
  /** End Padding */

  /** Start Global margin */
  var handleGlobalMarginUnitChange = function handleGlobalMarginUnitChange(event, position) {
    var value = event.target.value;
    if (fluentFormGlobalMarginLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormGlobalMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormGlobalMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormGlobalMarginMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormGlobalMarginDesktop: _objectSpread(_objectSpread({}, fluentFormGlobalMarginDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormGlobalMarginTablet: _objectSpread(_objectSpread({}, fluentFormGlobalMarginTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormGlobalMarginMobile: _objectSpread(_objectSpread({}, fluentFormGlobalMarginMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleGlobalMarginCombineBtn = function handleGlobalMarginCombineBtn() {
    setAttributes({
      fluentFormGlobalMarginLink: !fluentFormGlobalMarginLink
    });
  };
  var handleGlobalMarginUnitsHandler = function handleGlobalMarginUnitsHandler(unit) {
    setAttributes({
      fluentFormGlobalMarginUnits: _objectSpread(_objectSpread({}, fluentFormGlobalMarginUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  /** end Global margin */

  var DesktopMargin = "".concat(fluentFormGlobalMarginDesktop.top).concat(fluentFormGlobalMarginUnits.Desktop, " ").concat(fluentFormGlobalMarginDesktop.right).concat(fluentFormGlobalMarginUnits.Desktop, " ").concat(fluentFormGlobalMarginDesktop.bottom).concat(fluentFormGlobalMarginUnits.Desktop, " ").concat(fluentFormGlobalMarginDesktop.left).concat(fluentFormGlobalMarginUnits.Desktop);
  var TabletMargin = "".concat(fluentFormGlobalMarginTablet.top).concat(fluentFormGlobalMarginUnits.Tablet, " ").concat(fluentFormGlobalMarginTablet.right).concat(fluentFormGlobalMarginUnits.Tablet, " ").concat(fluentFormGlobalMarginTablet.bottom).concat(fluentFormGlobalMarginUnits.Tablet, " ").concat(fluentFormGlobalMarginTablet.left).concat(fluentFormGlobalMarginUnits.Tablet);
  var MobileMargin = "".concat(fluentFormGlobalMarginMobile.top).concat(fluentFormGlobalMarginUnits.Mobile, " ").concat(fluentFormGlobalMarginMobile.right).concat(fluentFormGlobalMarginUnits.Mobile, " ").concat(fluentFormGlobalMarginMobile.bottom).concat(fluentFormGlobalMarginUnits.Mobile, " ").concat(fluentFormGlobalMarginMobile.left).concat(fluentFormGlobalMarginUnits.Mobile);
  /** End Margin */

  /** Start Global border */
  var handleGlobalBorderUnitChange = function handleGlobalBorderUnitChange(event, position) {
    var value = event.target.value;
    if (fluentFormGlobalBorderLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormGlobalBorderDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormGlobalBorderTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormGlobalBorderMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormGlobalBorderDesktop: _objectSpread(_objectSpread({}, fluentFormGlobalBorderDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormGlobalBorderTablet: _objectSpread(_objectSpread({}, fluentFormGlobalBorderTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormGlobalBorderMobile: _objectSpread(_objectSpread({}, fluentFormGlobalBorderMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleGlobalBorderCombineBtn = function handleGlobalBorderCombineBtn() {
    setAttributes({
      fluentFormGlobalBorderLink: !fluentFormGlobalBorderLink
    });
  };
  var handleGlobalBorderUnitsHandler = function handleGlobalBorderUnitsHandler(unit) {
    setAttributes({
      fluentFormGlobalBorderUnits: _objectSpread(_objectSpread({}, fluentFormGlobalBorderUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  /** End Global border */
  var BorderDesktopWidth = "".concat(fluentFormGlobalBorderDesktop.top).concat(fluentFormGlobalBorderUnits.Desktop, " ").concat(fluentFormGlobalBorderDesktop.right).concat(fluentFormGlobalBorderUnits.Desktop, " ").concat(fluentFormGlobalBorderDesktop.bottom).concat(fluentFormGlobalBorderUnits.Desktop, " ").concat(fluentFormGlobalBorderDesktop.left).concat(fluentFormGlobalBorderUnits.Desktop);
  var BorderTabletWidth = "".concat(fluentFormGlobalBorderTablet.top).concat(fluentFormGlobalBorderUnits.Tablet, " ").concat(fluentFormGlobalBorderTablet.right).concat(fluentFormGlobalBorderUnits.Tablet, " ").concat(fluentFormGlobalBorderTablet.bottom).concat(fluentFormGlobalBorderUnits.Tablet, " ").concat(fluentFormGlobalBorderTablet.left).concat(fluentFormGlobalBorderUnits.Tablet);
  var BorderMobileWidth = "".concat(fluentFormGlobalBorderMobile.top).concat(fluentFormGlobalBorderUnits.Mobile, " ").concat(fluentFormGlobalBorderMobile.right).concat(fluentFormGlobalBorderUnits.Mobile, " ").concat(fluentFormGlobalBorderMobile.bottom).concat(fluentFormGlobalBorderUnits.Mobile, " ").concat(fluentFormGlobalBorderMobile.left).concat(fluentFormGlobalBorderUnits.Mobile);
  /** End Border */

  /** Start Global border radius*/
  var handleGlobalBorderRadiusUnitChange = function handleGlobalBorderRadiusUnitChange(event, position) {
    var value = event.target.value;
    if (fluentFormGlobalBorderRadiusLink) {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormGlobalBorderRadiusDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormGlobalBorderRadiusTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormGlobalBorderRadiusMobile: {
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
    } else {
      switch (deviceType) {
        case 'Desktop':
          setAttributes({
            fluentFormGlobalBorderRadiusDesktop: _objectSpread(_objectSpread({}, fluentFormGlobalBorderRadiusDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            fluentFormGlobalBorderRadiusTablet: _objectSpread(_objectSpread({}, fluentFormGlobalBorderRadiusTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            fluentFormGlobalBorderRadiusMobile: _objectSpread(_objectSpread({}, fluentFormGlobalBorderRadiusMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleGlobalBorderRadiusCombineBtn = function handleGlobalBorderRadiusCombineBtn() {
    setAttributes({
      fluentFormGlobalBorderRadiusLink: !fluentFormGlobalBorderRadiusLink
    });
  };
  var handleGlobalBorderRadiusUnitsHandler = function handleGlobalBorderRadiusUnitsHandler(unit) {
    setAttributes({
      fluentFormGlobalBorderRadiusUnits: _objectSpread(_objectSpread({}, fluentFormGlobalBorderRadiusUnits), {}, _defineProperty({}, deviceType, unit))
    });
  };
  /** end Global border */

  /** End Global Border Radius */
  var BorderRadiusDesktopWidth = "".concat(fluentFormGlobalBorderRadiusDesktop.top).concat(fluentFormGlobalBorderRadiusUnits.Desktop, " ").concat(fluentFormGlobalBorderRadiusDesktop.right).concat(fluentFormGlobalBorderRadiusUnits.Desktop, " ").concat(fluentFormGlobalBorderRadiusDesktop.bottom).concat(fluentFormGlobalBorderRadiusUnits.Desktop, " ").concat(fluentFormGlobalBorderRadiusDesktop.left).concat(fluentFormGlobalBorderRadiusUnits.Desktop);
  var BorderRadiusTabletWidth = "".concat(fluentFormGlobalBorderRadiusTablet.top).concat(fluentFormGlobalBorderRadiusUnits.Tablet, " ").concat(fluentFormGlobalBorderRadiusTablet.right).concat(fluentFormGlobalBorderRadiusUnits.Tablet, " ").concat(fluentFormGlobalBorderRadiusTablet.bottom).concat(fluentFormGlobalBorderRadiusUnits.Tablet, " ").concat(fluentFormGlobalBorderRadiusTablet.left).concat(fluentFormGlobalBorderRadiusUnits.Tablet);
  var BorderRadiusMobileWidth = "".concat(fluentFormGlobalBorderRadiusMobile.top).concat(fluentFormGlobalBorderRadiusUnits.Mobile, " ").concat(fluentFormGlobalBorderRadiusMobile.right).concat(fluentFormGlobalBorderRadiusUnits.Mobile, " ").concat(fluentFormGlobalBorderRadiusMobile.bottom).concat(fluentFormGlobalBorderRadiusUnits.Mobile, " ").concat(fluentFormGlobalBorderRadiusMobile.left).concat(fluentFormGlobalBorderRadiusUnits.Mobile);
  /** End Border Radius */

  /** Start Label Color */
  var handleLabelColorSwitcherChange = function handleLabelColorSwitcherChange(value) {
    setAttributes({
      fluentFormLabelColorSwitcher: value
    });
  };
  var handleLabelColorChange = function handleLabelColorChange(value) {
    setAttributes({
      fluentFormLabelColor: value
    });
  };
  var handleLabelHoverColorChange = function handleLabelHoverColorChange(value) {
    setAttributes({
      fluentFormLabelHoverColor: value
    });
  };
  /** End Label Color */

  /** Start Input & Textarea BgColor */
  var handleInputBgColorChange = function handleInputBgColorChange(value) {
    setAttributes({
      fluentFormInputBgColor: value
    });
  };
  /** End Input & Textarea BgColor */

  /** Start Input & Textarea Color */
  var handleInputColorChange = function handleInputColorChange(value) {
    setAttributes({
      fluentFormInputColor: value
    });
  };
  /** End Input & Textarea Focus Color */
  /** Start Input & Textarea Color */
  var handleInputFocusColorChange = function handleInputFocusColorChange(value) {
    setAttributes({
      fluentFormInputFocusColor: value
    });
  };
  /** End Input & Textarea Focus Color */

  /** Start fluentFormTextIndentSize */
  var fluentFormTextIndentSizeHandler = function fluentFormTextIndentSizeHandler(value) {
    setAttributes({
      fluentFormTextIndentSize: value
    });
  };
  var fluentFormTextIndentSizeUnitsHandler = function fluentFormTextIndentSizeUnitsHandler(value) {
    setAttributes({
      fluentFormTextIndentSizeUnits: value
    });
  };
  /** End fluentFormTextIndentSize */

  /** Start fluentFormInputWidthSize */
  var fluentFormInputWidthSizeHandler = function fluentFormInputWidthSizeHandler(value) {
    setAttributes({
      fluentFormInputWidthSize: value
    });
  };
  var fluentFormInputWidthSizeUnitsHandler = function fluentFormInputWidthSizeUnitsHandler(value) {
    setAttributes({
      fluentFormInputWidthSizeUnits: value
    });
  };
  /** End fluentFormInputWidthSize */

  /** Start fluentFormInputHeightSize */
  var fluentFormInputHeightSizeHandler = function fluentFormInputHeightSizeHandler(value) {
    setAttributes({
      fluentFormInputHeightSize: value
    });
  };
  var fluentFormInputHeightSizeUnitsHandler = function fluentFormInputHeightSizeUnitsHandler(value) {
    setAttributes({
      fluentFormInputHeightSizeUnits: value
    });
  };
  /** End fluentFormInputHeightSize */

  /** Start fluentFormTextareaWidthSize */
  var fluentFormTextareaWidthSizeHandler = function fluentFormTextareaWidthSizeHandler(value) {
    setAttributes({
      fluentFormTextareaWidthSize: value
    });
  };
  var fluentFormTextareaWidthSizeUnitsHandler = function fluentFormTextareaWidthSizeUnitsHandler(value) {
    setAttributes({
      fluentFormTextareaWidthSizeUnits: value
    });
  };
  /** End fluentFormTextareaWidthSize */

  /** Start fluentFormTextareaHeightSize */
  var fluentFormTextareaHeightSizeHandler = function fluentFormTextareaHeightSizeHandler(value) {
    setAttributes({
      fluentFormTextareaHeightSize: value
    });
  };
  var fluentFormTextareaHeightSizeUnitsHandler = function fluentFormTextareaHeightSizeUnitsHandler(value) {
    setAttributes({
      fluentFormTextareaHeightSizeUnits: value
    });
  };
  /** End fluentFormTextareaHeightSize */

  /** Start fluentFormSpacingSize */
  var fluentFormSpacingSizeHandler = function fluentFormSpacingSizeHandler(value) {
    setAttributes({
      fluentFormSpacingSize: value
    });
  };
  var fluentFormSpacingUnitsHandler = function fluentFormSpacingUnitsHandler(value) {
    setAttributes({
      fluentFormSpacingUnits: value
    });
  };
  /** End fluentFormSpacingSize */

  /** StartfluentFormBorderColor */
  var handleBorderColorSwitcherChange = function handleBorderColorSwitcherChange(value) {
    setAttributes({
      fluentFormBorderColorSwitcher: value
    });
  };
  var handleBorderColorChange = function handleBorderColorChange(value) {
    setAttributes({
      fluentFormBorderColor: value
    });
  };
  var handleBorderHoverColorChange = function handleBorderHoverColorChange(value) {
    setAttributes({
      fluentFormBorderHoverColor: value
    });
  };
  /** End fluentFormBorderColor */

  /** Start fluentFormPlaceholderColor */
  var fluentFormPlaceholderColorChange = function fluentFormPlaceholderColorChange(value) {
    setAttributes({
      fluentFormPlaceholderColor: value
    });
  };
  /** End fluentFormPlaceholderColor */

  /** Start fluentFormRadioFontSize */
  var fluentFormRadioFontSizeHandler = function fluentFormRadioFontSizeHandler(value) {
    setAttributes({
      fluentFormRadioFontSize: value
    });
  };
  var fluentFormRadioFontSizeUnitsHandler = function fluentFormRadioFontSizeUnitsHandler(value) {
    setAttributes({
      fluentFormRadioFontSizeUnits: value
    });
  };
  /** End fluentFormRadioFontSize */

  /** Start fluentFormRadioCheckBoxItemSpacing */
  var fluentFormRadioCheckBoxItemSpacingHandler = function fluentFormRadioCheckBoxItemSpacingHandler(value) {
    setAttributes({
      fluentFormRadioCheckBoxItemSpacing: value
    });
  };
  var fluentFormRadioCheckBoxItemSpacingUnitssHandler = function fluentFormRadioCheckBoxItemSpacingUnitssHandler(value) {
    setAttributes({
      fluentFormRadioCheckBoxItemSpacingUnits: value
    });
  };
  /** End fluentFormRadioCheckBoxItemSpacing */

  /** Start Section Break Title Color */
  var fluentFormSectionBreakTitleColorSwitcherChange = function fluentFormSectionBreakTitleColorSwitcherChange(value) {
    setAttributes({
      fluentFormSectionBreakTitleColorSwitcher: value
    });
  };
  var fluentFormSectionBreakTitleColorChange = function fluentFormSectionBreakTitleColorChange(value) {
    setAttributes({
      fluentFormSectionBreakTitleColor: value
    });
  };
  var fluentFormSectionBreakTitleHoverColorChange = function fluentFormSectionBreakTitleHoverColorChange(value) {
    setAttributes({
      fluentFormSectionBreakTitleHoverColor: value
    });
  };
  /** End Section Break Title Color */

  /** Start Section Break Description Color */
  var fluentFormSectionBreakDescColorSwitcherChange = function fluentFormSectionBreakDescColorSwitcherChange(value) {
    setAttributes({
      fluentFormSectionBreakDescColorSwitcher: value
    });
  };
  var fluentFormSectionBreakDescColorChange = function fluentFormSectionBreakDescColorChange(value) {
    setAttributes({
      fluentFormSectionBreakDescColor: value
    });
  };
  var fluentFormSectionBreakDescHoverColorChange = function fluentFormSectionBreakDescHoverColorChange(value) {
    setAttributes({
      fluentFormSectionBreakDescHoverColor: value
    });
  };
  /** End Section Break Description Color */

  /** Start HTML Color */
  var fluentFormHtmlColorSwitcherChange = function fluentFormHtmlColorSwitcherChange(value) {
    setAttributes({
      fluentFormHtmlColorSwitcher: value
    });
  };
  var fluentFormHtmlColorChange = function fluentFormHtmlColorChange(value) {
    setAttributes({
      fluentFormHtmlColor: value
    });
  };
  var fluentFormHtmlHoverColorChange = function fluentFormHtmlHoverColorChange(value) {
    setAttributes({
      fluentFormHtmlHoverColor: value
    });
  };
  /** End HTML Color */

  /** Start fluentFormSubmitHeight */
  var fluentFormSubmitHeightHandler = function fluentFormSubmitHeightHandler(value) {
    setAttributes({
      fluentFormSubmitHeight: value
    });
  };
  var fluentFormSubmitHeightUnitsHandler = function fluentFormSubmitHeightUnitsHandler(value) {
    setAttributes({
      fluentFormSubmitHeightUnits: value
    });
  };
  /** End fluentFormSubmitHeight */

  /** Start fluentFormSubmitWidth */
  var fluentFormSubmitWidthHandler = function fluentFormSubmitWidthHandler(value) {
    setAttributes({
      fluentFormSubmitWidth: value
    });
  };
  var fluentFormSubmitWidthUnitsHandler = function fluentFormSubmitWidthUnitsHandler(value) {
    setAttributes({
      fluentFormSubmitWidthUnits: value
    });
  };
  /** End fluentFormSubmitWidth */

  /** Start fluentFormSubmitColorSwitcher */
  var fluentFormSubmitColorSwitcherChange = function fluentFormSubmitColorSwitcherChange(value) {
    setAttributes({
      fluentFormSubmitColorSwitcher: value
    });
  };
  var fluentFormSubmitColorChange = function fluentFormSubmitColorChange(value) {
    setAttributes({
      fluentFormSubmitColor: value
    });
  };
  var fluentFormSubmitHoverColorChange = function fluentFormSubmitHoverColorChange(value) {
    setAttributes({
      fluentFormSubmitHoverColor: value
    });
  };
  /** End fluentFormSubmitColorSwitcher */

  /** Start fluentFormSubmitBgColorSwitcher */
  var fluentFormSubmitBgColorSwitcherChange = function fluentFormSubmitBgColorSwitcherChange(value) {
    setAttributes({
      fluentFormSubmitBgColorSwitcher: value
    });
  };
  var fluentFormSubmitBgColorChange = function fluentFormSubmitBgColorChange(value) {
    setAttributes({
      fluentFormSubmitBgColor: value
    });
  };
  var fluentFormSubmitBgHoverColorChange = function fluentFormSubmitBgHoverColorChange(value) {
    setAttributes({
      fluentFormSubmitBgHoverColor: value
    });
  };
  /** End fluentFormSubmitBgColorSwitcher */

  /** Start Submit Border Color */
  var fluentFormSubmitBorderColorSwitcherChange = function fluentFormSubmitBorderColorSwitcherChange(value) {
    setAttributes({
      fluentFormSubmitBorderColorSwitcher: value
    });
  };
  var fluentFormSubmitBorderColorChange = function fluentFormSubmitBorderColorChange(value) {
    setAttributes({
      fluentFormSubmitBorderColor: value
    });
  };
  var fluentFormSubmitBorderHoverColorChange = function fluentFormSubmitBorderHoverColorChange(value) {
    setAttributes({
      fluentFormSubmitBorderHoverColor: value
    });
  };
  /** End Submit Border Color */

  /** Start fluentFormSuccessColor */

  var fluentFormSuccessColorChange = function fluentFormSuccessColorChange(value) {
    setAttributes({
      fluentFormSuccessColor: value
    });
  };
  /** End fluentFormSuccessColor */

  /** Start fluentFormSuccessBgColor */
  var fluentFormSuccessBgColorChange = function fluentFormSuccessBgColorChange(value) {
    setAttributes({
      fluentFormSuccessBgColor: value
    });
  };
  /** End fluentFormSuccessBgColor */

  /** Start Success Border Color */
  var fluentFormSuccessBorderColorSwitcherChange = function fluentFormSuccessBorderColorSwitcherChange(value) {
    setAttributes({
      fluentFormSuccessBorderColorSwitcher: value
    });
  };
  var fluentFormSuccessBorderColorChange = function fluentFormSuccessBorderColorChange(value) {
    setAttributes({
      fluentFormSuccessBorderColor: value
    });
  };
  var fluentFormSuccessBorderHoverColorChange = function fluentFormSuccessBorderHoverColorChange(value) {
    setAttributes({
      fluentFormSuccessBorderHoverColor: value
    });
  };
  /** End Success Border Color */

  /** Start Error Color */
  var fluentFormErrorColorChange = function fluentFormErrorColorChange(value) {
    setAttributes({
      fluentFormErrorColor: value
    });
  };
  /** End Error Color */

  /** Start Global Bg Color */
  var handleGlobalBgColorSwitcherChange = function handleGlobalBgColorSwitcherChange(value) {
    setAttributes({
      fluentFormGlobalBgColorSwitcher: value
    });
  };
  var handleGlobalBgColorChange = function handleGlobalBgColorChange(value) {
    setAttributes({
      fluentFormGlobalBgColor: value
    });
  };
  var handleGlobalBgHoverColorChange = function handleGlobalBgHoverColorChange(value) {
    setAttributes({
      fluentFormGlobalBgHoverColor: value
    });
  };
  /** End Global Bg Color */

  /** Start Global Border Color */
  var handleGlobalBorderColorSwitcherChange = function handleGlobalBorderColorSwitcherChange(value) {
    setAttributes({
      fluentFormGlobalBorderColorSwitcher: value
    });
  };
  var handleGlobalBorderColorChange = function handleGlobalBorderColorChange(value) {
    setAttributes({
      fluentFormGlobalBorderColor: value
    });
  };
  var handleGlobalBorderHoverColorChange = function handleGlobalBorderHoverColorChange(value) {
    setAttributes({
      fluentFormGlobalBorderHoverColor: value
    });
  };
  /** End Global Border Color */

  // Helper function to load fonts
  var loadFont = function loadFont(fontFamily) {
    if (fontFamily) {
      var fontUrl = "https://fonts.googleapis.com/css?family=".concat(fontFamily.replace(' ', '+'));
      var linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = fontUrl;
      document.head.appendChild(linkElement);
    }
  };

  // Apply font family styles using useEffect
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadFont(fluentFormLabelFontFamily);
  }, [fluentFormLabelFontFamily]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadFont(fluentFormInputFontFamily);
  }, [fluentFormInputFontFamily]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadFont(fluentFormSectionBreakTitleFontFamily);
  }, [fluentFormSectionBreakTitleFontFamily]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadFont(fluentFormSectionBreakDescFontFamily);
  }, [fluentFormSectionBreakDescFontFamily]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadFont(fluentFormHtmlFontFamily);
  }, [fluentFormHtmlFontFamily]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadFont(fluentFormSubmitFontFamily);
  }, [fluentFormSubmitFontFamily]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadFont(fluentFormSuccessFontFamily);
  }, [fluentFormSuccessFontFamily]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadFont(fluentFormErrorFontFamily);
  }, [fluentFormErrorFontFamily]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "\n                .".concat(blockID, ".fb-fluent-form-wrapper {\n                    ").concat(fluentFormGlobalZIndex !== undefined ? "z-index: ".concat(fluentFormGlobalZIndex, ";") : '', "\n                    position: relative;\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper {\n                    ").concat(fluentFormGlobalBgColor !== undefined ? "background-color: ".concat(fluentFormGlobalBgColor, ";") : '', ";\n                    padding: ").concat(DesktopPadding, ";\n                    margin: ").concat(DesktopMargin, ";\n                    border: ").concat(fluentFormGlobalBorder, ";\n                    border-width: ").concat(BorderDesktopWidth, ";\n                    border-radius: ").concat(BorderRadiusDesktopWidth, " !important;\n                    ").concat(fluentFormGlobalBorderColor !== undefined ? "border-color: ".concat(fluentFormGlobalBorderColor, ";") : '', ";\n                    transition: all .3s ease-in-out;\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper:hover {\n                    ").concat(fluentFormGlobalBgHoverColor !== undefined ? "background-color: ".concat(fluentFormGlobalBgHoverColor, ";") : '', ";\n                    ").concat(fluentFormGlobalBorderHoverColor !== undefined ? "border-color: ".concat(fluentFormGlobalBorderHoverColor, ";") : '', ";\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper.fb-fluent-form-hide-label .fb-fluent-form-rendered .ff-el-group label:not(.ff-el-form-check-label),\n                .").concat(blockID, ".fb-fluent-form-wrapper.fb-fluent-form-hide-label .fb-fluent-form-rendered .ff-el-group .ff-el-input--label,\n                .").concat(blockID, ".fb-fluent-form-wrapper.fb-fluent-form-hide-error-message .fb-fluent-form-rendered .ff-el-group .error.text-danger {\n                    display: none;\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-webkit-input-placeholder,\n                .").concat(blockID, ".fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-webkit-input-placeholder {\n                    opacity: 0;\n                    visibility: hidden;\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-moz-placeholder,\n                .").concat(blockID, ".fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-moz-placeholder {\n                    opacity: 0;\n                    visibility: hidden;\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-ms-input-placeholder,\n                .").concat(blockID, ".fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-ms-input-placeholder {\n                    opacity: 0;\n                    visibility: hidden;\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-moz-placeholder,\n                .").concat(blockID, ".fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-moz-placeholder {\n                    opacity: 0;\n                    visibility: hidden;\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-group {\n                    ").concat(fluentFormSpacingSize ? "margin-bottom: ".concat(fluentFormSpacingSize.Desktop).concat(fluentFormSpacingUnits.Desktop, ";") : "", "\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-group label {\n                    ").concat(fluentFormLabelColor ? "color: ".concat(fluentFormLabelColor, ";") : "", "\n                    ").concat(fluentFormLabelFontFamily ? "font-family: ".concat(fluentFormLabelFontFamily, ";") : "", "\n                    ").concat(fluentFormLabelFontSize ? "font-size: ".concat(fluentFormLabelFontSize).concat(fluentFormLabelFontSizeUnits || "px", ";") : "", "\n                    ").concat(fluentFormLabelFontWeight ? "font-weight: ".concat(fluentFormLabelFontWeight, ";") : "", "\n                    ").concat(fluentFormLabelFontStyle ? "font-style: ".concat(fluentFormLabelFontStyle, ";") : "", "\n                    ").concat(fluentFormLabelTextTransform ? "text-transform: ".concat(fluentFormLabelTextTransform, ";") : "", "\n                    ").concat(fluentFormLabelTextDecoration ? "text-decoration: ".concat(fluentFormLabelTextDecoration, ";") : "", "\n                    ").concat(fluentFormLabelLetterSpacing ? "letter-spacing: ".concat(fluentFormLabelLetterSpacing).concat(fluentFormLabelLetterSpacingUnits || "px", ";") : "", "\n                    ").concat(fluentFormLabelLineHeight ? "line-height: ".concat(fluentFormLabelLineHeight).concat(fluentFormLabelLineHeightUnits || "px", ";") : "", "\n                    transition: all .3s ease-in-out;\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-group label:hover {\n                    ").concat(fluentFormLabelHoverColor ? "color: ".concat(fluentFormLabelHoverColor, ";") : "", "\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), \n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-group textarea, \n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-group select {\n                    ").concat(fluentFormInputBgColor ? "background-color: ".concat(fluentFormInputBgColor, ";") : "", "\n                    ").concat(fluentFormInputColor ? "color: ".concat(fluentFormInputColor, ";") : "", "\n                    ").concat(fluentFormInputFontFamily ? "font-family: ".concat(fluentFormInputFontFamily, ";") : "", "\n                    ").concat(fluentFormInputFontSize ? "font-size: ".concat(fluentFormInputFontSize).concat(fluentFormInputFontSizeUnits, ";") : "", "\n                    ").concat(fluentFormInputFontWeight ? "font-weight: ".concat(fluentFormInputFontWeight, ";") : "", "\n                    ").concat(fluentFormInputFontStyle ? "font-style: ".concat(fluentFormInputFontStyle, ";") : "", "\n                    ").concat(fluentFormInputTextTransform ? "text-transform: ".concat(fluentFormInputTextTransform, ";") : "", "\n                    ").concat(fluentFormInputTextDecoration ? "text-decoration: ".concat(fluentFormInputTextDecoration, ";") : "", "\n                    ").concat(fluentFormInputLetterSpacing ? "letter-spacing: ".concat(fluentFormInputLetterSpacing).concat(fluentFormInputLetterSpacingUnits, ";") : "", "\n                    ").concat(fluentFormInputLineHeight ? "line-height: ".concat(fluentFormInputLineHeight).concat(fluentFormInputLineHeightUnits, ";") : "", "\n                    ").concat(fluentFormTextIndentSize ? "text-indent: ".concat(fluentFormTextIndentSize.Desktop).concat(fluentFormTextIndentSizeUnits.Desktop, ";") : "", "\n                    ").concat(fluentFormInputWidthSize ? "width: ".concat(fluentFormInputWidthSize.Desktop).concat(fluentFormInputWidthSizeUnits.Desktop, ";") : "", "\n                    ").concat(fluentFormInputHeightSize ? "height: ".concat(fluentFormInputHeightSize.Desktop).concat(fluentFormInputHeightSizeUnits.Desktop, ";") : "", "\n                    ").concat(fluentFormDesktopPadding ? "padding: ".concat(fluentFormDesktopPadding, ";") : "", "\n                    ").concat(fluentFormBorder ? "border: ".concat(fluentFormBorder, ";") : "", "\n                    ").concat(fluentFormBorderDesktopWidth ? "border-width: ".concat(fluentFormBorderDesktopWidth, ";") : "", "\n                    ").concat(fluentFormBorderColor ? "border-color: ".concat(fluentFormBorderColor, ";") : "", "\n                    ").concat(fluentFormBorderRadiusDesktopWidth ? "border-radius: ".concat(fluentFormBorderRadiusDesktopWidth, ";") : "", "\n                    transition: all .3s ease-in-out;\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), \n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-group textarea:focus, \n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-group select:focus {\n                    ").concat(fluentFormInputFocusColor ? "border-color: ".concat(fluentFormInputFocusColor, ";") : "", "\n                    box-shadow: 0 0 0 1px ").concat(fluentFormInputFocusColor ? fluentFormInputFocusColor : "", ";\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-group textarea {\n                    ").concat(fluentFormTextareaWidthSize ? "width: ".concat(fluentFormTextareaWidthSize.Desktop).concat(fluentFormTextareaWidthSizeUnits.Desktop, ";") : "", "\n                    ").concat(fluentFormTextareaHeightSize ? "height: ".concat(fluentFormTextareaHeightSize.Desktop).concat(fluentFormTextareaHeightSizeUnits.Desktop, ";") : "", "\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper input::-webkit-input-placeholder,\n                .").concat(blockID, ".fb-fluent-form-wrapper textarea::-webkit-input-placeholder {\n                    ").concat(fluentFormPlaceholderColor ? "color: ".concat(fluentFormPlaceholderColor, ";") : "", "\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper input::-moz-placeholder,\n                .").concat(blockID, ".fb-fluent-form-wrapper textarea::-moz-placeholder {\n                    ").concat(fluentFormPlaceholderColor ? "color: ".concat(fluentFormPlaceholderColor, ";") : "", "\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper input:-ms-input-placeholder,\n                .").concat(blockID, ".fb-fluent-form-wrapper textarea:-ms-input-placeholder {\n                    ").concat(fluentFormPlaceholderColor ? "color: ".concat(fluentFormPlaceholderColor, ";") : "", "\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper input:-moz-placeholder,\n                .").concat(blockID, ".fb-fluent-form-wrapper textarea:-moz-placeholder {\n                    ").concat(fluentFormPlaceholderColor ? "color: ".concat(fluentFormPlaceholderColor, ";") : "", "\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-input--content input[type=\"checkbox\"]{\n                    width: ").concat(fluentFormRadioFontSize.Desktop).concat(fluentFormRadioFontSizeUnits.Desktop, ";\n                    height: ").concat(fluentFormRadioFontSize.Desktop).concat(fluentFormRadioFontSizeUnits.Desktop, ";\n                    ").concat(fluentFormRadioColor ? "background: ".concat(fluentFormRadioColor, ";") : "", "\n                    ").concat(fluentFormRadioBorderColor ? "border-color: ".concat(fluentFormRadioBorderColor, ";") : "", "\n                    ").concat(fluentFormRadioBorderWidth ? "border-width: ".concat(fluentFormRadioBorderWidth.Desktop).concat(fluentFormRadioBorderWidthUnits.Desktop, ";") : "", "\n                    ").concat(fluentFormCheckBoxBorderRadiusDesktopWidth ? "border-radius: ".concat(fluentFormCheckBoxBorderRadiusDesktopWidth, ";") : "", "\n                    position: relative;\n                    appearance: none;\n                    transition: all .3s ease-in-out;   \n                } \n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-input--content input[type=\"radio\"] {\n                    width: ").concat(fluentFormRadioFontSize.Desktop).concat(fluentFormRadioFontSizeUnits.Desktop, ";\n                    height: ").concat(fluentFormRadioFontSize.Desktop).concat(fluentFormRadioFontSizeUnits.Desktop, ";\n                    ").concat(fluentFormRadioColor ? "background: ".concat(fluentFormRadioColor, ";") : "", "\n                    ").concat(fluentFormRadioBorderColor ? "border-color: ".concat(fluentFormRadioBorderColor, ";") : "", "\n                    ").concat(fluentFormRadioBorderWidth ? "border-width: ".concat(fluentFormRadioBorderWidth.Desktop).concat(fluentFormRadioBorderWidthUnits.Desktop, ";") : "", "\n                    ").concat(fluentFormRadioBorderRadiusDesktopWidth ? "border-radius: ".concat(fluentFormRadioBorderRadiusDesktopWidth, ";") : "", "\n                    position: relative;\n                    appearance: none;\n                    transition: all .3s ease-in-out;   \n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper input[type=\"checkbox\"]:checked:before,\n                .").concat(blockID, ".fb-fluent-form-wrapper input[type=\"radio\"]:checked:before {\n                    ").concat(fluentFormRadioCheckedColor ? "background: ".concat(fluentFormRadioCheckedColor, ";") : "", "\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-form-check:not(:last-child) {\n                    ").concat(fluentFormRadioCheckBoxItemSpacing ? "margin-bottom: ".concat(fluentFormRadioCheckBoxItemSpacing.Desktop).concat(fluentFormRadioCheckBoxItemSpacingUnits.Desktop, ";") : "", "\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-section-break,\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-section-break hr {\n                    text-align: ").concat(fluentFormSectionBreakAlignment, ";\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title {\n                    ").concat(fluentFormSectionBreakTitleColor ? "color: ".concat(fluentFormSectionBreakTitleColor, ";") : "", "\n                    ").concat(fluentFormSectionBreakTitleFontFamily ? "font-family: ".concat(fluentFormSectionBreakTitleFontFamily, ";") : "", "\n                    ").concat(fluentFormSectionBreakTitleFontSize ? "font-size: ".concat(fluentFormSectionBreakTitleFontSize).concat(fluentFormSectionBreakTitleFontSizeUnits, ";") : "", "\n                    ").concat(fluentFormSectionBreakTitleFontWeight ? "font-weight: ".concat(fluentFormSectionBreakTitleFontWeight, ";") : "", "\n                    ").concat(fluentFormSectionBreakTitleFontStyle ? "font-style: ".concat(fluentFormSectionBreakTitleFontStyle, ";") : "", "\n                    ").concat(fluentFormSectionBreakTitleTextTransform ? "text-transform: ".concat(fluentFormSectionBreakTitleTextTransform, ";") : "", "\n                    ").concat(fluentFormSectionBreakTitleTextDecoration ? "text-decoration: ".concat(fluentFormSectionBreakTitleTextDecoration, ";") : "", "\n                    ").concat(fluentFormSectionBreakTitleLetterSpacing ? "letter-spacing: ".concat(fluentFormSectionBreakTitleLetterSpacing).concat(fluentFormSectionBreakTitleLetterSpacingUnits, ";") : "", "\n                    ").concat(fluentFormSectionBreakTitleLineHeight ? "line-height: ".concat(fluentFormSectionBreakTitleLineHeight).concat(fluentFormSectionBreakTitleLineHeightUnits, ";") : "", "\n                    ").concat(fluentFormSectionBreakTitleDesktopPadding ? "padding: ".concat(fluentFormSectionBreakTitleDesktopPadding, ";") : "", "\n                    ").concat(fluentFormSectionBreakTitleDesktopMargin ? "margin: ".concat(fluentFormSectionBreakTitleDesktopMargin, ";") : "", "\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title:hover {\n                    ").concat(fluentFormSectionBreakTitleHoverColor ? "color: ".concat(fluentFormSectionBreakTitleHoverColor, ";") : "", "\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk {\n                    ").concat(fluentFormSectionBreakDescColor ? "color: ".concat(fluentFormSectionBreakDescColor, ";") : "", "\n                    ").concat(fluentFormSectionBreakDescFontFamily ? "font-family: ".concat(fluentFormSectionBreakDescFontFamily, ";") : "", "\n                    ").concat(fluentFormSectionBreakDescFontSize ? "font-size: ".concat(fluentFormSectionBreakDescFontSize).concat(fluentFormSectionBreakDescFontSizeUnits, ";") : "", "\n                    ").concat(fluentFormSectionBreakDescFontWeight ? "font-weight: ".concat(fluentFormSectionBreakDescFontWeight, ";") : "", "\n                    ").concat(fluentFormSectionBreakDescFontStyle ? "font-style: ".concat(fluentFormSectionBreakDescFontStyle, ";") : "", "\n                    ").concat(fluentFormSectionBreakDescTextTransform ? "text-transform: ".concat(fluentFormSectionBreakDescTextTransform, ";") : "", "\n                    ").concat(fluentFormSectionBreakDescTextDecoration ? "text-decoration: ".concat(fluentFormSectionBreakDescTextDecoration, ";") : "", "\n                    ").concat(fluentFormSectionBreakDescLetterSpacing ? "letter-spacing: ".concat(fluentFormSectionBreakDescLetterSpacing).concat(fluentFormSectionBreakDescLetterSpacingUnits, ";") : "", "\n                    ").concat(fluentFormSectionBreakDescLineHeight ? "line-height: ".concat(fluentFormSectionBreakDescLineHeight).concat(fluentFormSectionBreakDescLineHeightUnits, ";") : "", "\n                    ").concat(fluentFormSectionBreakDescDesktopPadding ? "padding: ".concat(fluentFormSectionBreakDescDesktopPadding, ";") : "", "\n                    ").concat(fluentFormSectionBreakDescDesktopMargin ? "margin: ".concat(fluentFormSectionBreakDescDesktopMargin, ";") : "", "\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk:hover {\n                    ").concat(fluentFormSectionBreakDescHoverColor ? "color: ".concat(fluentFormSectionBreakDescHoverColor, ";") : "", "\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-custom_html > * {\n                    ").concat(fluentFormHtmlAlignment ? "text-align: ".concat(fluentFormHtmlAlignment, ";") : "", "\n                    ").concat(fluentFormHtmlColor ? "color: ".concat(fluentFormHtmlColor, ";") : "", "\n                    ").concat(fluentFormHtmlFontFamily ? "font-family: ".concat(fluentFormHtmlFontFamily, ";") : "", "\n                    ").concat(fluentFormHtmlFontSize ? "font-size: ".concat(fluentFormHtmlFontSize).concat(fluentFormHtmlFontSizeUnits, ";") : "", "\n                    ").concat(fluentFormHtmlFontWeight ? "font-weight: ".concat(fluentFormHtmlFontWeight, ";") : "", "\n                    ").concat(fluentFormHtmlFontStyle ? "font-style: ".concat(fluentFormHtmlFontStyle, ";") : "", "\n                    ").concat(fluentFormHtmlTextTransform ? "text-transform: ".concat(fluentFormHtmlTextTransform, ";") : "", "\n                    ").concat(fluentFormHtmlTextDecoration ? "text-decoration: ".concat(fluentFormHtmlTextDecoration, ";") : "", "\n                    ").concat(fluentFormHtmlLetterSpacing ? "letter-spacing: ".concat(fluentFormHtmlLetterSpacing).concat(fluentFormHtmlLetterSpacingUnits, ";") : "", "\n                    ").concat(fluentFormHtmlLineHeight ? "line-height: ".concat(fluentFormHtmlLineHeight).concat(fluentFormHtmlLineHeightUnits, ";") : "", "\n                    ").concat(fluentFormHtmlDesktopPadding ? "padding: ".concat(fluentFormHtmlDesktopPadding, ";") : "", "\n                    ").concat(fluentFormHtmlDesktopMargin ? "margin: ".concat(fluentFormHtmlDesktopMargin, ";") : "", "\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-custom_html > *:hover {\n                    ").concat(fluentFormHtmlHoverColor ? "color: ".concat(fluentFormHtmlHoverColor, ";") : "", "\n                }\n                \n                .").concat(blockID, ".fb-fluent-form-wrapper .ff_submit_btn_wrapper {\n                    ").concat(fluentFormSubmitAlignment ? "text-align: ".concat(fluentFormSubmitAlignment, ";") : "", "\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {\n                    ").concat(fluentFormSubmitHeight.Desktop ? "height: ".concat(fluentFormSubmitHeight.Desktop).concat(fluentFormSubmitHeightUnits.Desktop, ";") : "", "\n                    ").concat(fluentFormSubmitColor ? "color: ".concat(fluentFormSubmitColor, ";") : "", "\n                    ").concat(fluentFormSubmitBgColor ? "background: ".concat(fluentFormSubmitBgColor, ";") : "", "\n                    ").concat(fluentFormSubmitFontFamily ? "font-family: ".concat(fluentFormSubmitFontFamily, ";") : "", "\n                    ").concat(fluentFormSubmitFontSize ? "font-size: ".concat(fluentFormSubmitFontSize).concat(fluentFormSubmitFontSizeUnits, ";") : "", "\n                    ").concat(fluentFormSubmitFontWeight ? "font-weight: ".concat(fluentFormSubmitFontWeight, ";") : "", "\n                    ").concat(fluentFormSubmitFontStyle ? "font-style: ".concat(fluentFormSubmitFontStyle, ";") : "", "\n                    ").concat(fluentFormSubmitTextTransform ? "text-transform: ".concat(fluentFormSubmitTextTransform, ";") : "", "\n                    ").concat(fluentFormSubmitTextDecoration ? "text-decoration: ".concat(fluentFormSubmitTextDecoration, ";") : "", "\n                    ").concat(fluentFormSubmitLetterSpacing ? "letter-spacing: ".concat(fluentFormSubmitLetterSpacing).concat(fluentFormSubmitLetterSpacingUnits, ";") : "", "\n                    ").concat(fluentFormSubmitLineHeight ? "line-height: ".concat(fluentFormSubmitLineHeight).concat(fluentFormSubmitLineHeightUnits, ";") : "", "\n                    ").concat(fluentFormSubmitDesktopPadding ? "padding: ".concat(fluentFormSubmitDesktopPadding, ";") : "", "\n                    ").concat(fluentFormSubmitDesktopMargin ? "margin: ".concat(fluentFormSubmitDesktopMargin, ";") : "", "\n\n                    ").concat(fluentFormSubmitBorder ? "border: ".concat(fluentFormSubmitBorder, ";") : "", "\n                    ").concat(fluentFormSubmitDesktopBorderWidth ? "border-width: ".concat(fluentFormSubmitDesktopBorderWidth, ";") : "", "\n                    ").concat(fluentFormSubmitBorderColor ? "border-color: ".concat(fluentFormSubmitBorderColor, ";") : "", "\n                    ").concat(fluentFormSubmitDesktopBorderRadiusWidth ? "border-radius: ".concat(fluentFormSubmitDesktopBorderRadiusWidth, ";") : "", "\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit:hover {\n                    ").concat(fluentFormSubmitHoverColor ? "color: ".concat(fluentFormSubmitHoverColor, ";") : "", "\n                    ").concat(fluentFormSubmitBgHoverColor ? "background: ".concat(fluentFormSubmitBgHoverColor, ";") : "", "\n                    ").concat(fluentFormSubmitBorderHoverColor ? "border-color: ".concat(fluentFormSubmitBorderHoverColor, ";") : "", "\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {\n                    ").concat(fluentFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : '', "\n                    ").concat(fluentFormSubmitWidthSelect === 'custom' && fluentFormSubmitWidth.Desktop ? "width: ".concat(fluentFormSubmitWidth.Desktop).concat(fluentFormSubmitWidthUnits.Desktop, ";") : '', "\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-message-success {\n                    ").concat(fluentFormSuccessColor ? "color: ".concat(fluentFormSuccessColor, ";") : "", "\n                    ").concat(fluentFormSuccessBgColor ? "background: ".concat(fluentFormSuccessBgColor, ";") : "", "\n                    ").concat(fluentFormSuccessFontFamily ? "font-family: ".concat(fluentFormSuccessFontFamily, ";") : "", "\n                    ").concat(fluentFormSuccessFontSize ? "font-size: ".concat(fluentFormSuccessFontSize).concat(fluentFormSuccessFontSizeUnits, ";") : "", "\n                    ").concat(fluentFormSuccessFontWeight ? "font-weight: ".concat(fluentFormSuccessFontWeight, ";") : "", "\n                    ").concat(fluentFormSuccessFontStyle ? "font-style: ".concat(fluentFormSuccessFontStyle, ";") : "", "\n                    ").concat(fluentFormSuccessTextTransform ? "text-transform: ".concat(fluentFormSuccessTextTransform, ";") : "", "\n                    ").concat(fluentFormSuccessTextDecoration ? "text-decoration: ".concat(fluentFormSuccessTextDecoration, ";") : "", "\n                    ").concat(fluentFormSuccessLetterSpacing ? "letter-spacing: ".concat(fluentFormSuccessLetterSpacing).concat(fluentFormSuccessLetterSpacingUnits, ";") : "", "\n                    ").concat(fluentFormSuccessLineHeight ? "line-height: ".concat(fluentFormSuccessLineHeight).concat(fluentFormSuccessLineHeightUnits, ";") : "", "\n                    ").concat(fluentFormSuccessBorder ? "border: ".concat(fluentFormSuccessBorder, ";") : "", "\n                    ").concat(fluentFormSuccessDesktopBorderWidth ? "border-width: ".concat(fluentFormSuccessDesktopBorderWidth, ";") : "", "\n                    ").concat(fluentFormSuccessBorderColor ? "border-color: ".concat(fluentFormSuccessBorderColor, ";") : "", "\n                    ").concat(fluentFormSuccessDesktopBorderRadiusWidth ? "border-radius: ".concat(fluentFormSuccessDesktopBorderRadiusWidth, ";") : "", "\n                }\n                .").concat(blockID, ".fb-fluent-form-wrapper .ff-message-success:hover {\n                    ").concat(fluentFormSuccessBorderHoverColor ? "border-color: ".concat(fluentFormSuccessBorderHoverColor, ";") : "", "\n                }\n\n                .").concat(blockID, ".fb-fluent-form-wrapper .error.text-danger {\n                    ").concat(fluentFormErrorColor ? "color: ".concat(fluentFormErrorColor, ";") : "", "\n                    ").concat(fluentFormErrorFontFamily ? "font-family: ".concat(fluentFormErrorFontFamily, ";") : "", "\n                    ").concat(fluentFormErrorFontSize ? "font-size: ".concat(fluentFormErrorFontSize).concat(fluentFormErrorFontSizeUnits, ";") : "", "\n                    ").concat(fluentFormErrorFontWeight ? "font-weight: ".concat(fluentFormErrorFontWeight, ";") : "", "\n                    ").concat(fluentFormErrorFontStyle ? "font-style: ".concat(fluentFormErrorFontStyle, ";") : "", "\n                    ").concat(fluentFormErrorTextTransform ? "text-transform: ".concat(fluentFormErrorTextTransform, ";") : "", "\n                    ").concat(fluentFormErrorTextDecoration ? "text-decoration: ".concat(fluentFormErrorTextDecoration, ";") : "", "\n                    ").concat(fluentFormErrorLetterSpacing ? "letter-spacing: ".concat(fluentFormErrorLetterSpacing).concat(fluentFormErrorLetterSpacingUnits, ";") : "", "\n                    ").concat(fluentFormErrorLineHeight ? "line-height: ".concat(fluentFormErrorLineHeight).concat(fluentFormErrorLineHeightUnits, ";") : "", " \n                    ").concat(fluentFormErrorDesktopPadding ? "padding: ".concat(fluentFormErrorDesktopPadding, ";") : "", "\n                    ").concat(fluentFormErrorDesktopMargin ? "margin: ".concat(fluentFormErrorDesktopMargin, ";") : "", " \n                }\n\n                           \n\n                @media only screen and (max-width: 1024px) {\n\n                    .").concat(blockID, ".fb-fluent-form-wrapper {\n                        padding: ").concat(TabletPadding, ";\n                        margin: ").concat(TabletMargin, ";\n                        border-width: ").concat(BorderTabletWidth, ";\n                        border-radius: ").concat(BorderRadiusTabletWidth, " !important;\n                    }\n                }\n                    \n                @media only screen and (max-width: 767px) {\n                    .").concat(blockID, ".fb-fluent-form-wrapper {\n                        padding: ").concat(MobilePadding, ";\n                        margin: ").concat(MobileMargin, ";\n                        border-width: ").concat(BorderMobileWidth, ";\n                        border-radius: ").concat(BorderRadiusMobileWidth, " !important;\n                    }\n                }\n\n            ")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-inspector-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
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
      className: "fb-tab advanced"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "fb-tab-controls" + tab.name
    }, tab.name === 'general' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fluent Form", "frontis-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      className: "fb-fluent-from"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Form", "frontis-blocks"),
      value: formId,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.FORM_LISTS,
      onChange: function onChange(newFormId) {
        return setAttributes({
          formId: newFormId
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Labels", "frontis-blocks"),
      checked: showLabels,
      onChange: function onChange(showLabels) {
        return setAttributes({
          showLabels: showLabels
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Placeholder", "frontis-blocks"),
      checked: showPlaceholder,
      onChange: function onChange(showPlaceholder) {
        return setAttributes({
          showPlaceholder: showPlaceholder
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Error Message", "frontis-blocks"),
      checked: showErrorMessage,
      onChange: function onChange(showErrorMessage) {
        return setAttributes({
          showErrorMessage: showErrorMessage
        });
      }
    })))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Label", "frontis-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_Components_color__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "frontis-blocks"),
      globalColorSwitcher: fluentFormLabelColorSwitcher,
      globalColor: fluentFormLabelColor,
      globalHoverColor: fluentFormLabelHoverColor,
      handleColorSwitcherChange: handleLabelColorSwitcherChange,
      handleGlobalColorChange: handleLabelColorChange,
      handleGlobalHoverColorChange: handleLabelHoverColorChange
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-blocks"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-dropdown-icon-wrapper",
      contentClassName: "fb-setting-dropdown-icon-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref2) {
        var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-dropdown-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "edit",
          className: "fb-setting-dropdown-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontfamily-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-blocks"),
          options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.FONT_FAMILYS,
          value: fluentFormLabelFontFamily,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormLabelFontFamily: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-fontsize-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormLabelFontSizeUnits: item.value
              });
            },
            className: "fb-setting-fontsize-units-switcher ".concat(fluentFormLabelFontSizeUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormLabelFontSize,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormLabelFontSize: value
            });
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: undefined
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-blocks"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-blocks"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-blocks"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-blocks"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-blocks"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-blocks"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-blocks"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-blocks"),
            value: "900"
          }],
          value: fluentFormLabelFontWeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormLabelFontWeight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-blocks"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-blocks"),
            value: "oblique"
          }],
          value: fluentFormLabelFontStyle,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormLabelFontStyle: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-blocks"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-blocks"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-blocks"),
            value: "lowercase"
          }],
          value: fluentFormLabelTextTransform,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormLabelTextTransform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-blocks"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-blocks"),
            value: "overline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-blocks"),
            value: "line-through"
          }],
          value: fluentFormLabelTextDecoration,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormLabelTextDecoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-letterspacing-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormLabelLetterSpacingUnits: item.value
              });
            },
            className: "fb-setting-letterspacing-units-switcher ".concat(fluentFormLabelLetterSpacingUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormLabelLetterSpacing,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormLabelLetterSpacing: value === 0 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-lineheight-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormLabelLineHeightUnits: item.value
              });
            },
            className: "fb-setting-lineheight-units-switcher ".concat(fluentFormLabelLineHeightUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormLabelLineHeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormLabelLineHeight: value === 1 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        }))));
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Input & Textarea", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref3) {
        var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
          color: fluentFormInputBgColor,
          onChange: handleInputBgColorChange,
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
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
          value: fluentFormInputBgColor,
          onChange: handleInputBgColorChange
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref4) {
        var isOpen = _ref4.isOpen,
          onToggle = _ref4.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
          color: fluentFormInputColor,
          onChange: handleInputColorChange,
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
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
          value: fluentFormInputColor,
          onChange: handleInputColorChange
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Focus Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref5) {
        var isOpen = _ref5.isOpen,
          onToggle = _ref5.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
          color: fluentFormInputFocusColor,
          onChange: handleInputFocusColorChange,
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
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
          value: fluentFormInputFocusColor,
          onChange: handleInputFocusColorChange
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-blocks"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-dropdown-icon-wrapper",
      contentClassName: "fb-setting-dropdown-icon-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref6) {
        var isOpen = _ref6.isOpen,
          onToggle = _ref6.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-dropdown-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "edit",
          className: "fb-setting-dropdown-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontfamily-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-blocks"),
          options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.FONT_FAMILYS,
          value: fluentFormInputFontFamily,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormInputFontFamily: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-fontsize-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormInputFontSizeUnits: item.value
              });
            },
            className: "fb-setting-fontsize-units-switcher ".concat(fluentFormInputFontSizeUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormInputFontSize,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormInputFontSize: value
            });
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: undefined
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-blocks"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-blocks"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-blocks"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-blocks"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-blocks"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-blocks"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-blocks"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-blocks"),
            value: "900"
          }],
          value: fluentFormInputFontWeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormInputFontWeight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-blocks"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-blocks"),
            value: "oblique"
          }],
          value: fluentFormInputFontStyle,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormInputFontStyle: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-blocks"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-blocks"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-blocks"),
            value: "lowercase"
          }],
          value: fluentFormInputTextTransform,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormInputTextTransform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-blocks"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-blocks"),
            value: "overline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-blocks"),
            value: "line-through"
          }],
          value: fluentFormInputTextDecoration,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormInputTextDecoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-letterspacing-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormInputLetterSpacingUnits: item.value
              });
            },
            className: "fb-setting-letterspacing-units-switcher ".concat(fluentFormInputLetterSpacingUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormInputLetterSpacing,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormInputLetterSpacing: value === 0 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-lineheight-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormInputLineHeightUnits: item.value
              });
            },
            className: "fb-setting-lineheight-units-switcher ".concat(fluentFormInputLineHeightUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormInputLineHeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormInputLineHeight: value === 1 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        }))));
      }
    })), /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 100,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Indent", "frontis-blocks"),
      rangeValue: fluentFormTextIndentSize,
      onChangeHandler: fluentFormTextIndentSizeHandler,
      rangeUnitHandler: fluentFormTextIndentSizeUnitsHandler,
      deviceType: deviceType,
      units: fluentFormTextIndentSizeUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: ""
    }), /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 2000,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Input Width", "frontis-blocks"),
      rangeValue: fluentFormInputWidthSize,
      onChangeHandler: fluentFormInputWidthSizeHandler,
      rangeUnitHandler: fluentFormInputWidthSizeUnitsHandler,
      deviceType: deviceType,
      units: fluentFormInputWidthSizeUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: ""
    }), /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 2000,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Input Height", "frontis-blocks"),
      rangeValue: fluentFormInputHeightSize,
      onChangeHandler: fluentFormInputHeightSizeHandler,
      rangeUnitHandler: fluentFormInputHeightSizeUnitsHandler,
      deviceType: deviceType,
      units: fluentFormInputHeightSizeUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: ""
    }), /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 2000,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Textarea Width", "frontis-blocks"),
      rangeValue: fluentFormTextareaWidthSize,
      onChangeHandler: fluentFormTextareaWidthSizeHandler,
      rangeUnitHandler: fluentFormTextareaWidthSizeUnitsHandler,
      deviceType: deviceType,
      units: fluentFormTextareaWidthSizeUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: ""
    }), /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 2000,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Textarea Height", "frontis-blocks"),
      rangeValue: fluentFormTextareaHeightSize,
      onChangeHandler: fluentFormTextareaHeightSizeHandler,
      rangeUnitHandler: fluentFormTextareaHeightSizeUnitsHandler,
      deviceType: deviceType,
      units: fluentFormTextareaHeightSizeUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: ""
    }), /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 1000,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spacing", "frontis-blocks"),
      rangeValue: fluentFormSpacingSize,
      onChangeHandler: fluentFormSpacingSizeHandler,
      rangeUnitHandler: fluentFormSpacingUnitsHandler,
      deviceType: deviceType,
      units: fluentFormSpacingUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: ""
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: handlePaddingUnitsHandler,
      spacingUnits: fluentFormPaddingUnits,
      spacingDesktop: fluentFormPaddingDesktop,
      spacingTablet: fluentFormPaddingTablet,
      spacingMobile: fluentFormPaddingMobile,
      handleSpacingUnitHandler: handlePaddingUnitChange,
      spacingCombineBtn: fluentFormPaddingLink,
      spacingCombineBtnHandler: handlePaddingCombineBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Style", "frontis-blocks"),
      value: fluentFormBorder,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BORDER_STYLES,
      onChange: function onChange(value) {
        return setAttributes({
          fluentFormBorder: value
        });
      }
    }), /*#__PURE__*/React.createElement(_Components_color__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "frontis-blocks"),
      globalColorSwitcher: fluentFormBorderColorSwitcher,
      globalColor: fluentFormBorderColor,
      globalHoverColor: fluentFormBorderHoverColor,
      handleColorSwitcherChange: handleBorderColorSwitcherChange,
      handleGlobalColorChange: handleBorderColorChange,
      handleGlobalHoverColorChange: handleBorderHoverColorChange
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: handleBorderUnitsHandler,
      spacingUnits: fluentFormBorderUnits,
      spacingDesktop: fluentFormBorderDesktop,
      spacingTablet: fluentFormBorderTablet,
      spacingMobile: fluentFormBorderMobile,
      handleSpacingUnitHandler: handleBorderUnitChange,
      spacingCombineBtn: fluentFormBorderLink,
      spacingCombineBtnHandler: handleBorderCombineBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radius Border", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: handleBorderRadiusUnitsHandler,
      spacingUnits: fluentFormBorderRadiusUnits,
      spacingDesktop: fluentFormBorderRadiusDesktop,
      spacingTablet: fluentFormBorderRadiusTablet,
      spacingMobile: fluentFormBorderRadiusMobile,
      handleSpacingUnitHandler: handleBorderRadiusUnitChange,
      spacingCombineBtn: fluentFormBorderRadiusLink,
      spacingCombineBtnHandler: handleBorderRadiusCombineBtn,
      setAttributes: setAttributes
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Placeholder", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref7) {
        var isOpen = _ref7.isOpen,
          onToggle = _ref7.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
          color: fluentFormPlaceholderColor,
          onChange: fluentFormPlaceholderColorChange,
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
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
          value: fluentFormPlaceholderColor,
          onChange: fluentFormPlaceholderColorChange
        }))));
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radio & Checkbox", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 100,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Size", "frontis-blocks"),
      rangeValue: fluentFormRadioFontSize,
      onChangeHandler: fluentFormRadioFontSizeHandler,
      rangeUnitHandler: fluentFormRadioFontSizeUnitsHandler,
      deviceType: deviceType,
      units: fluentFormRadioFontSizeUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: ''
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref8) {
        var isOpen = _ref8.isOpen,
          onToggle = _ref8.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
          color: fluentFormRadioColor,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormRadioColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
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
          value: fluentFormRadioColor,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormRadioColor: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Checked Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref9) {
        var isOpen = _ref9.isOpen,
          onToggle = _ref9.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
          color: fluentFormRadioCheckedColor,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormRadioCheckedColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
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
          value: fluentFormRadioCheckedColor,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormRadioCheckedColor: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 100,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Width", "frontis-blocks"),
      rangeValue: fluentFormRadioBorderWidth,
      onChangeHandler: function onChangeHandler(value) {
        return setAttributes({
          fluentFormRadioBorderWidth: value
        });
      },
      rangeUnitHandler: function rangeUnitHandler(value) {
        return setAttributes({
          fluentFormRadioBorderWidthUnits: value
        });
      },
      deviceType: deviceType,
      units: fluentFormRadioBorderWidthUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: ''
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref10) {
        var isOpen = _ref10.isOpen,
          onToggle = _ref10.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
          color: fluentFormRadioBorderColor,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormRadioBorderColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
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
          value: fluentFormRadioBorderColor,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormRadioBorderColor: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radio Radius", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormRadioBorderRadiusUnitsHandler,
      spacingUnits: fluentFormRadioBorderRadiusUnits,
      spacingDesktop: fluentFormRadioBorderRadiusDesktop,
      spacingTablet: fluentFormRadioBorderRadiusTablet,
      spacingMobile: fluentFormRadioBorderRadiusMobile,
      handleSpacingUnitHandler: fluentFormRadioBorderRadiusUnitChange,
      spacingCombineBtn: fluentFormGlobalBorderRadiusLink,
      spacingCombineBtnHandler: fluentFormRadioBorderRadiusCombineBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Checkbox Radius", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormCheckBoxBorderRadiusUnitsHandler,
      spacingUnits: fluentFormCheckBoxBorderRadiusUnits,
      spacingDesktop: fluentFormCheckBoxBorderRadiusDesktop,
      spacingTablet: fluentFormCheckBoxBorderRadiusTablet,
      spacingMobile: fluentFormCheckBoxBorderRadiusMobile,
      handleSpacingUnitHandler: fluentFormCheckBoxBorderRadiusUnitChange,
      spacingCombineBtn: fluentFormGlobalBorderRadiusLink,
      spacingCombineBtnHandler: fluentFormCheckBoxBorderRadiusCombineBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 100,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Item Spacing", "frontis-blocks"),
      rangeValue: fluentFormRadioCheckBoxItemSpacing,
      onChangeHandler: fluentFormRadioCheckBoxItemSpacingHandler,
      rangeUnitHandler: fluentFormRadioCheckBoxItemSpacingUnitssHandler,
      deviceType: deviceType,
      units: fluentFormRadioCheckBoxItemSpacingUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: ''
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Section break", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignment", "frontis-blocks"),
      id: "fb-setting-text-alignment",
      className: "fb-setting-text-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      className: "fb-setting-text-alignment-group-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TEXT_ALIGN.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            fluentFormSectionBreakAlignment: item.value
          });
        },
        className: "fb-setting-text-alignment-single-btn ".concat(fluentFormSectionBreakAlignment === item.value ? 'active' : '')
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_Components_color__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "frontis-blocks"),
      globalColorSwitcher: fluentFormSectionBreakTitleColorSwitcher,
      globalColor: fluentFormSectionBreakTitleColor,
      globalHoverColor: fluentFormSectionBreakTitleHoverColor,
      handleColorSwitcherChange: fluentFormSectionBreakTitleColorSwitcherChange,
      handleGlobalColorChange: fluentFormSectionBreakTitleColorChange,
      handleGlobalHoverColorChange: fluentFormSectionBreakTitleHoverColorChange
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-blocks"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-dropdown-icon-wrapper",
      contentClassName: "fb-setting-dropdown-icon-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref11) {
        var isOpen = _ref11.isOpen,
          onToggle = _ref11.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-dropdown-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "edit",
          className: "fb-setting-dropdown-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontfamily-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-blocks"),
          options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.FONT_FAMILYS,
          value: fluentFormSectionBreakTitleFontFamily,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakTitleFontFamily: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-fontsize-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormSectionBreakTitleFontSizeUnits: item.value
              });
            },
            className: "fb-setting-fontsize-units-switcher ".concat(fluentFormSectionBreakTitleFontSizeUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormSectionBreakTitleFontSize,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakTitleFontSize: value
            });
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: undefined
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-blocks"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-blocks"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-blocks"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-blocks"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-blocks"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-blocks"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-blocks"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-blocks"),
            value: "900"
          }],
          value: fluentFormSectionBreakTitleFontWeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakTitleFontWeight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-blocks"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-blocks"),
            value: "oblique"
          }],
          value: fluentFormSectionBreakTitleFontStyle,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakTitleFontStyle: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-blocks"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-blocks"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-blocks"),
            value: "lowercase"
          }],
          value: fluentFormSectionBreakTitleTextTransform,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakTitleTextTransform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-blocks"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-blocks"),
            value: "overline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-blocks"),
            value: "line-through"
          }],
          value: fluentFormSectionBreakTitleTextDecoration,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakTitleTextDecoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-letterspacing-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormSectionBreakTitleLetterSpacingUnits: item.value
              });
            },
            className: "fb-setting-letterspacing-units-switcher ".concat(fluentFormSectionBreakTitleLetterSpacingUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormSectionBreakTitleLetterSpacing,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakTitleLetterSpacing: value === 0 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-lineheight-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormSectionBreakTitleLineHeightUnits: item.value
              });
            },
            className: "fb-setting-lineheight-units-switcher ".concat(fluentFormSectionBreakTitleLineHeightUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormSectionBreakTitleLineHeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakTitleLineHeight: value === 1 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        }))));
      }
    })), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormSectionBreakTitlePaddingUnitsHandler,
      spacingUnits: fluentFormSectionBreakTitlePaddingUnits,
      spacingDesktop: fluentFormSectionBreakTitlePaddingDesktop,
      spacingTablet: fluentFormSectionBreakTitlePaddingTablet,
      spacingMobile: fluentFormSectionBreakTitlePaddingMobile,
      handleSpacingUnitHandler: fluentFormSectionBreakTitlePaddingUnitsChange,
      spacingCombineBtn: fluentFormSectionBreakTitlePaddingLink,
      spacingCombineBtnHandler: fluentFormSectionBreakTitlePaddingLinkBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormSectionBreakTitleMarginUnitsHandler,
      spacingUnits: fluentFormSectionBreakTitleMarginUnits,
      spacingDesktop: fluentFormSectionBreakTitleMarginDesktop,
      spacingTablet: fluentFormSectionBreakTitleMarginTablet,
      spacingMobile: fluentFormSectionBreakTitleMarginMobile,
      handleSpacingUnitHandler: fluentFormSectionBreakTitleMarginUnitsChange,
      spacingCombineBtn: fluentFormSectionBreakTitleMarginLink,
      spacingCombineBtnHandler: fluentFormSectionBreakTitleMarginLinkBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_color__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description", "frontis-blocks"),
      globalColorSwitcher: fluentFormSectionBreakDescColorSwitcher,
      globalColor: fluentFormSectionBreakDescColor,
      globalHoverColor: fluentFormSectionBreakDescHoverColor,
      handleColorSwitcherChange: fluentFormSectionBreakDescColorSwitcherChange,
      handleGlobalColorChange: fluentFormSectionBreakDescColorChange,
      handleGlobalHoverColorChange: fluentFormSectionBreakDescHoverColorChange
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-blocks"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-dropdown-icon-wrapper",
      contentClassName: "fb-setting-dropdown-icon-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref12) {
        var isOpen = _ref12.isOpen,
          onToggle = _ref12.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-dropdown-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "edit",
          className: "fb-setting-dropdown-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontfamily-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-blocks"),
          options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.FONT_FAMILYS,
          value: fluentFormSectionBreakDescFontFamily,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakDescFontFamily: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-fontsize-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormSectionBreakDescFontSizeUnits: item.value
              });
            },
            className: "fb-setting-fontsize-units-switcher ".concat(fluentFormSectionBreakDescFontSizeUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormSectionBreakDescFontSize,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakDescFontSize: value
            });
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: undefined
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-blocks"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-blocks"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-blocks"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-blocks"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-blocks"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-blocks"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-blocks"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-blocks"),
            value: "900"
          }],
          value: fluentFormSectionBreakDescFontWeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakDescFontWeight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-blocks"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-blocks"),
            value: "oblique"
          }],
          value: fluentFormSectionBreakDescFontStyle,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakDescFontStyle: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-blocks"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-blocks"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-blocks"),
            value: "lowercase"
          }],
          value: fluentFormSectionBreakDescTextTransform,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakDescTextTransform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-blocks"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-blocks"),
            value: "overline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-blocks"),
            value: "line-through"
          }],
          value: fluentFormSectionBreakDescTextDecoration,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakDescTextDecoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-letterspacing-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormSectionBreakDescLetterSpacingUnits: item.value
              });
            },
            className: "fb-setting-letterspacing-units-switcher ".concat(fluentFormSectionBreakDescLetterSpacingUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormSectionBreakDescLetterSpacing,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakDescLetterSpacing: value === 0 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-lineheight-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormSectionBreakDescLineHeightUnits: item.value
              });
            },
            className: "fb-setting-lineheight-units-switcher ".concat(fluentFormSectionBreakDescLineHeightUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormSectionBreakDescLineHeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSectionBreakDescLineHeight: value === 1 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        }))));
      }
    })), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormSectionBreakDescPaddingUnitsHandler,
      spacingUnits: fluentFormSectionBreakDescPaddingUnits,
      spacingDesktop: fluentFormSectionBreakDescPaddingDesktop,
      spacingTablet: fluentFormSectionBreakDescPaddingTablet,
      spacingMobile: fluentFormSectionBreakDescPaddingMobile,
      handleSpacingUnitHandler: fluentFormSectionBreakDescPaddingUnitsChange,
      spacingCombineBtn: fluentFormSectionBreakDescPaddingLink,
      spacingCombineBtnHandler: fluentFormSectionBreakDescPaddingLinkBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormSectionBreakDescMarginUnitsHandler,
      spacingUnits: fluentFormSectionBreakDescMarginUnits,
      spacingDesktop: fluentFormSectionBreakDescMarginDesktop,
      spacingTablet: fluentFormSectionBreakDescMarginTablet,
      spacingMobile: fluentFormSectionBreakDescMarginMobile,
      handleSpacingUnitHandler: fluentFormSectionBreakDescMarginUnitsChange,
      spacingCombineBtn: fluentFormSectionBreakDescMarginLink,
      spacingCombineBtnHandler: fluentFormSectionBreakDescMarginLinkBtn,
      setAttributes: setAttributes
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom HTML", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignment", "frontis-blocks"),
      id: "fb-setting-text-alignment",
      className: "fb-setting-text-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      className: "fb-setting-text-alignment-group-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TEXT_ALIGN.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            fluentFormHtmlAlignment: item.value
          });
        },
        className: "fb-setting-text-alignment-single-btn ".concat(fluentFormHtmlAlignment === item.value ? 'active' : '')
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_Components_color__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "frontis-blocks"),
      globalColorSwitcher: fluentFormHtmlColorSwitcher,
      globalColor: fluentFormHtmlColor,
      globalHoverColor: fluentFormHtmlHoverColor,
      handleColorSwitcherChange: fluentFormHtmlColorSwitcherChange,
      handleGlobalColorChange: fluentFormHtmlColorChange,
      handleGlobalHoverColorChange: fluentFormHtmlHoverColorChange
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-blocks"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-dropdown-icon-wrapper",
      contentClassName: "fb-setting-dropdown-icon-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref13) {
        var isOpen = _ref13.isOpen,
          onToggle = _ref13.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-dropdown-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "edit",
          className: "fb-setting-dropdown-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontfamily-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-blocks"),
          options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.FONT_FAMILYS,
          value: fluentFormHtmlFontFamily,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormHtmlFontFamily: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-fontsize-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormHtmlFontSizeUnits: item.value
              });
            },
            className: "fb-setting-fontsize-units-switcher ".concat(fluentFormHtmlFontSizeUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormHtmlFontSize,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormHtmlFontSize: value
            });
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: undefined
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-blocks"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-blocks"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-blocks"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-blocks"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-blocks"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-blocks"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-blocks"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-blocks"),
            value: "900"
          }],
          value: fluentFormHtmlFontWeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormHtmlFontWeight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-blocks"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-blocks"),
            value: "oblique"
          }],
          value: fluentFormHtmlFontStyle,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormHtmlFontStyle: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-blocks"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-blocks"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-blocks"),
            value: "lowercase"
          }],
          value: fluentFormHtmlTextTransform,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormHtmlTextTransform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-blocks"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-blocks"),
            value: "overline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-blocks"),
            value: "line-through"
          }],
          value: fluentFormHtmlTextDecoration,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormHtmlTextDecoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-letterspacing-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormHtmlLetterSpacingUnits: item.value
              });
            },
            className: "fb-setting-letterspacing-units-switcher ".concat(fluentFormHtmlLetterSpacingUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormHtmlLetterSpacing,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormHtmlLetterSpacing: value === 0 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-lineheight-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormHtmlLineHeightUnits: item.value
              });
            },
            className: "fb-setting-lineheight-units-switcher ".concat(fluentFormHtmlLineHeightUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormHtmlLineHeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormHtmlLineHeight: value === 1 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        }))));
      }
    })), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormHtmlPaddingUnitsHandler,
      spacingUnits: fluentFormHtmlPaddingUnits,
      spacingDesktop: fluentFormHtmlPaddingDesktop,
      spacingTablet: fluentFormHtmlPaddingTablet,
      spacingMobile: fluentFormHtmlPaddingMobile,
      handleSpacingUnitHandler: fluentFormHtmlPaddingUnitsChange,
      spacingCombineBtn: fluentFormHtmlPaddingLink,
      spacingCombineBtnHandler: fluentFormHtmlPaddingLinkBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormHtmlMarginUnitsHandler,
      spacingUnits: fluentFormHtmlMarginUnits,
      spacingDesktop: fluentFormHtmlMarginDesktop,
      spacingTablet: fluentFormHtmlMarginTablet,
      spacingMobile: fluentFormHtmlMarginMobile,
      handleSpacingUnitHandler: fluentFormHtmlMarginUnitsChange,
      spacingCombineBtn: fluentFormHtmlMarginLink,
      spacingCombineBtnHandler: fluentFormHtmlMarginLinkBtn,
      setAttributes: setAttributes
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Submit", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignment", "frontis-blocks"),
      id: "fb-setting-text-alignment",
      className: "fb-setting-text-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      className: "fb-setting-text-alignment-group-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TEXT_ALIGN.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            fluentFormSubmitAlignment: item.value
          });
        },
        className: "fb-setting-text-alignment-single-btn ".concat(fluentFormSubmitAlignment === item.value ? 'active' : '')
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 2000,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "frontis-blocks"),
      rangeValue: fluentFormSubmitHeight,
      onChangeHandler: fluentFormSubmitHeightHandler,
      rangeUnitHandler: fluentFormSubmitHeightUnitsHandler,
      deviceType: deviceType,
      units: fluentFormSubmitHeightUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: ''
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "frontis-blocks"),
      value: fluentFormSubmitWidthSelect,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.WIDTH_STYLES,
      onChange: function onChange(value) {
        return setAttributes({
          fluentFormSubmitWidthSelect: value
        });
      }
    }), fluentFormSubmitWidthSelect === 'custom' && /*#__PURE__*/React.createElement(_Components_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
      min: 1,
      max: 2000,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "frontis-blocks"),
      rangeValue: fluentFormSubmitWidth,
      onChangeHandler: fluentFormSubmitWidthHandler,
      rangeUnitHandler: fluentFormSubmitWidthUnitsHandler,
      deviceType: deviceType,
      units: fluentFormSubmitWidthUnits,
      setAttributes: setAttributes,
      rangeStep: 1,
      resetFallbackValue: ''
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-blocks"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-dropdown-icon-wrapper",
      contentClassName: "fb-setting-dropdown-icon-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref14) {
        var isOpen = _ref14.isOpen,
          onToggle = _ref14.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-dropdown-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "edit",
          className: "fb-setting-dropdown-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontfamily-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-blocks"),
          options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.FONT_FAMILYS,
          value: fluentFormSubmitFontFamily,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSubmitFontFamily: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-fontsize-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormSubmitFontSizeUnits: item.value
              });
            },
            className: "fb-setting-fontsize-units-switcher ".concat(fluentFormSubmitFontSizeUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormSubmitFontSize,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSubmitFontSize: value
            });
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: undefined
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-blocks"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-blocks"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-blocks"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-blocks"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-blocks"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-blocks"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-blocks"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-blocks"),
            value: "900"
          }],
          value: fluentFormSubmitFontWeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSubmitFontWeight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-blocks"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-blocks"),
            value: "oblique"
          }],
          value: fluentFormSubmitFontStyle,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSubmitFontStyle: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-blocks"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-blocks"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-blocks"),
            value: "lowercase"
          }],
          value: fluentFormSubmitTextTransform,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSubmitTextTransform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-blocks"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-blocks"),
            value: "overline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-blocks"),
            value: "line-through"
          }],
          value: fluentFormSubmitTextDecoration,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSubmitTextDecoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-letterspacing-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormSubmitLetterSpacingUnits: item.value
              });
            },
            className: "fb-setting-letterspacing-units-switcher ".concat(fluentFormSubmitLetterSpacingUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormSubmitLetterSpacing,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSubmitLetterSpacing: value === 0 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-lineheight-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormSubmitLineHeightUnits: item.value
              });
            },
            className: "fb-setting-lineheight-units-switcher ".concat(fluentFormSubmitLineHeightUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormSubmitLineHeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSubmitLineHeight: value === 1 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        }))));
      }
    })), /*#__PURE__*/React.createElement(_Components_color__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "frontis-blocks"),
      globalColorSwitcher: fluentFormSubmitColorSwitcher,
      globalColor: fluentFormSubmitColor,
      globalHoverColor: fluentFormSubmitHoverColor,
      handleColorSwitcherChange: fluentFormSubmitColorSwitcherChange,
      handleGlobalColorChange: fluentFormSubmitColorChange,
      handleGlobalHoverColorChange: fluentFormSubmitHoverColorChange
    }), /*#__PURE__*/React.createElement(_Components_color__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "frontis-blocks"),
      globalColorSwitcher: fluentFormSubmitBgColorSwitcher,
      globalColor: fluentFormSubmitBgColor,
      globalHoverColor: fluentFormSubmitBgHoverColor,
      handleColorSwitcherChange: fluentFormSubmitBgColorSwitcherChange,
      handleGlobalColorChange: fluentFormSubmitBgColorChange,
      handleGlobalHoverColorChange: fluentFormSubmitBgHoverColorChange
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormSubmitPaddingUnitsHandler,
      spacingUnits: fluentFormSubmitPaddingUnits,
      spacingDesktop: fluentFormSubmitPaddingDesktop,
      spacingTablet: fluentFormSubmitPaddingTablet,
      spacingMobile: fluentFormSubmitPaddingMobile,
      handleSpacingUnitHandler: fluentFormSubmitPaddingUnitsChange,
      spacingCombineBtn: fluentFormSubmitPaddingLink,
      spacingCombineBtnHandler: fluentFormSubmitPaddingLinkBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormSubmitMarginUnitsHandler,
      spacingUnits: fluentFormSubmitMarginUnits,
      spacingDesktop: fluentFormSubmitMarginDesktop,
      spacingTablet: fluentFormSubmitMarginTablet,
      spacingMobile: fluentFormSubmitMarginMobile,
      handleSpacingUnitHandler: fluentFormSubmitMarginUnitsChange,
      spacingCombineBtn: fluentFormSubmitMarginLink,
      spacingCombineBtnHandler: fluentFormSubmitMarginLinkBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Style", "frontis-blocks"),
      value: fluentFormSubmitBorder,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BORDER_STYLES,
      onChange: function onChange(value) {
        return setAttributes({
          fluentFormSubmitBorder: value
        });
      }
    }), /*#__PURE__*/React.createElement(_Components_color__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "frontis-blocks"),
      globalColorSwitcher: fluentFormSubmitBorderColorSwitcher,
      globalColor: fluentFormSubmitBorderColor,
      globalHoverColor: fluentFormSubmitBorderHoverColor,
      handleColorSwitcherChange: fluentFormSubmitBorderColorSwitcherChange,
      handleGlobalColorChange: fluentFormSubmitBorderColorChange,
      handleGlobalHoverColorChange: fluentFormSubmitBorderHoverColorChange
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormSubmitBorderUnitsHandler,
      spacingUnits: fluentFormSubmitBorderUnits,
      spacingDesktop: fluentFormSubmitBorderDesktop,
      spacingTablet: fluentFormSubmitBorderTablet,
      spacingMobile: fluentFormSubmitBorderMobile,
      handleSpacingUnitHandler: fluentFormSubmitBorderUnitsChange,
      spacingCombineBtn: fluentFormSubmitBorderLink,
      spacingCombineBtnHandler: fluentFormSubmitBorderLinkBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormSubmitBorderRadiusUnitsHandler,
      spacingUnits: fluentFormSubmitBorderRadiusUnits,
      spacingDesktop: fluentFormSubmitBorderRadiusDesktop,
      spacingTablet: fluentFormSubmitBorderRadiusTablet,
      spacingMobile: fluentFormSubmitBorderRadiusMobile,
      handleSpacingUnitHandler: fluentFormSubmitBorderRadiusUnitsChange,
      spacingCombineBtn: fluentFormSubmitBorderRadiusLink,
      spacingCombineBtnHandler: fluentFormSubmitBorderRadiusLinkBtn,
      setAttributes: setAttributes
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Success Message", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-blocks"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-dropdown-icon-wrapper",
      contentClassName: "fb-setting-dropdown-icon-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref15) {
        var isOpen = _ref15.isOpen,
          onToggle = _ref15.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-dropdown-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "edit",
          className: "fb-setting-dropdown-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontfamily-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-blocks"),
          options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.FONT_FAMILYS,
          value: fluentFormSuccessFontFamily,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSuccessFontFamily: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-fontsize-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormSuccessFontSizeUnits: item.value
              });
            },
            className: "fb-setting-fontsize-units-switcher ".concat(fluentFormSuccessFontSizeUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormSuccessFontSize,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSuccessFontSize: value
            });
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: undefined
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-blocks"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-blocks"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-blocks"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-blocks"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-blocks"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-blocks"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-blocks"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-blocks"),
            value: "900"
          }],
          value: fluentFormSuccessFontWeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSuccessFontWeight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-blocks"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-blocks"),
            value: "oblique"
          }],
          value: fluentFormSuccessFontStyle,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSuccessFontStyle: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-blocks"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-blocks"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-blocks"),
            value: "lowercase"
          }],
          value: fluentFormSuccessTextTransform,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSuccessTextTransform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-blocks"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-blocks"),
            value: "overline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-blocks"),
            value: "line-through"
          }],
          value: fluentFormSuccessTextDecoration,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSuccessTextDecoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-letterspacing-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormSuccessLetterSpacingUnits: item.value
              });
            },
            className: "fb-setting-letterspacing-units-switcher ".concat(fluentFormSuccessLetterSpacingUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormSuccessLetterSpacing,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSuccessLetterSpacing: value === 0 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-lineheight-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormSuccessLineHeightUnits: item.value
              });
            },
            className: "fb-setting-lineheight-units-switcher ".concat(fluentFormSuccessLineHeightUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormSuccessLineHeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormSuccessLineHeight: value === 1 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref16) {
        var isOpen = _ref16.isOpen,
          onToggle = _ref16.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
          color: fluentFormSuccessColor,
          onChange: fluentFormSuccessColorChange,
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
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
          value: fluentFormSuccessColor,
          onChange: fluentFormSuccessColorChange
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref17) {
        var isOpen = _ref17.isOpen,
          onToggle = _ref17.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
          color: fluentFormSuccessBgColor,
          onChange: fluentFormSuccessBgColorChange,
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
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
          value: fluentFormSuccessBgColor,
          onChange: fluentFormSuccessBgColorChange
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Style", "frontis-blocks"),
      value: fluentFormSuccessBorder,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BORDER_STYLES,
      onChange: function onChange(value) {
        return setAttributes({
          fluentFormSuccessBorder: value
        });
      }
    }), /*#__PURE__*/React.createElement(_Components_color__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "frontis-blocks"),
      globalColorSwitcher: fluentFormSuccessBorderColorSwitcher,
      globalColor: fluentFormSuccessBorderColor,
      globalHoverColor: fluentFormSuccessBorderHoverColor,
      handleColorSwitcherChange: fluentFormSuccessBorderColorSwitcherChange,
      handleGlobalColorChange: fluentFormSuccessBorderColorChange,
      handleGlobalHoverColorChange: fluentFormSuccessBorderHoverColorChange
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormSuccessBorderUnitsHandler,
      spacingUnits: fluentFormSuccessBorderUnits,
      spacingDesktop: fluentFormSuccessBorderDesktop,
      spacingTablet: fluentFormSuccessBorderTablet,
      spacingMobile: fluentFormSuccessBorderMobile,
      handleSpacingUnitHandler: fluentFormSuccessBorderUnitsChange,
      spacingCombineBtn: fluentFormSuccessBorderLink,
      spacingCombineBtnHandler: fluentFormSuccessBorderLinkBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormSuccessBorderRadiusUnitsHandler,
      spacingUnits: fluentFormSuccessBorderRadiusUnits,
      spacingDesktop: fluentFormSuccessBorderRadiusDesktop,
      spacingTablet: fluentFormSuccessBorderRadiusTablet,
      spacingMobile: fluentFormSuccessBorderRadiusMobile,
      handleSpacingUnitHandler: fluentFormSuccessBorderRadiusUnitsChange,
      spacingCombineBtn: fluentFormSuccessBorderRadiusLink,
      spacingCombineBtnHandler: fluentFormSuccessBorderRadiusLinkBtn,
      setAttributes: setAttributes
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Error Message", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-blocks"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-dropdown-icon-wrapper",
      contentClassName: "fb-setting-dropdown-icon-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref18) {
        var isOpen = _ref18.isOpen,
          onToggle = _ref18.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-dropdown-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "edit",
          className: "fb-setting-dropdown-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontfamily-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-blocks"),
          options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.FONT_FAMILYS,
          value: fluentFormErrorFontFamily,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormErrorFontFamily: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-fontsize-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormErrorFontSizeUnits: item.value
              });
            },
            className: "fb-setting-fontsize-units-switcher ".concat(fluentFormErrorFontSizeUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormErrorFontSize,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormErrorFontSize: value
            });
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: undefined
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-blocks"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-blocks"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-blocks"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-blocks"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-blocks"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-blocks"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-blocks"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-blocks"),
            value: "900"
          }],
          value: fluentFormErrorFontWeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormErrorFontWeight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-blocks"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-blocks"),
            value: "oblique"
          }],
          value: fluentFormErrorFontStyle,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormErrorFontStyle: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-blocks"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-blocks"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-blocks"),
            value: "lowercase"
          }],
          value: fluentFormErrorTextTransform,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormErrorTextTransform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-blocks"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-blocks"),
            value: "overline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-blocks"),
            value: "line-through"
          }],
          value: fluentFormErrorTextDecoration,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormErrorTextDecoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-letterspacing-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormErrorLetterSpacingUnits: item.value
              });
            },
            className: "fb-setting-letterspacing-units-switcher ".concat(fluentFormErrorLetterSpacingUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormErrorLetterSpacing,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormErrorLetterSpacing: value === 0 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-label"
        }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-blocks"))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          className: "fb-setting-lineheight-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                fluentFormErrorLineHeightUnits: item.value
              });
            },
            className: "fb-setting-lineheight-units-switcher ".concat(fluentFormErrorLineHeightUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          value: fluentFormErrorLineHeight,
          onChange: function onChange(value) {
            return setAttributes({
              fluentFormErrorLineHeight: value === 1 ? undefined : value
            });
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref19) {
        var isOpen = _ref19.isOpen,
          onToggle = _ref19.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
          color: fluentFormErrorColor,
          onChange: fluentFormErrorColorChange,
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
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
          value: fluentFormErrorColor,
          onChange: fluentFormErrorColorChange
        }))));
      }
    })), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormErrorPaddingUnitsHandler,
      spacingUnits: fluentFormErrorPaddingUnits,
      spacingDesktop: fluentFormErrorPaddingDesktop,
      spacingTablet: fluentFormErrorPaddingTablet,
      spacingMobile: fluentFormErrorPaddingMobile,
      handleSpacingUnitHandler: fluentFormErrorPaddingUnitsChange,
      spacingCombineBtn: fluentFormErrorPaddingLink,
      spacingCombineBtnHandler: fluentFormErrorPaddingLinkBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: fluentFormErrorMarginUnitsHandler,
      spacingUnits: fluentFormErrorMarginUnits,
      spacingDesktop: fluentFormErrorMarginDesktop,
      spacingTablet: fluentFormErrorMarginTablet,
      spacingMobile: fluentFormErrorMarginMobile,
      handleSpacingUnitHandler: fluentFormErrorMarginUnitsChange,
      spacingCombineBtn: fluentFormErrorMarginLink,
      spacingCombineBtnHandler: fluentFormErrorMarginLinkBtn,
      setAttributes: setAttributes
    }))), tab.name === "advanced" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-advanced-tab-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-inner-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Z Index", "frontis-blocks"),
      initialOpen: true,
      className: "fb-setting-z-index-header"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      value: fluentFormGlobalZIndex,
      onChange: function onChange(value) {
        return setAttributes({
          fluentFormGlobalZIndex: value === 0 ? undefined : value
        });
      },
      min: 1,
      max: 10000000,
      step: 1,
      allowReset: true,
      resetFallbackValue: ''
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding and Margin", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: handleGlobalPaddingUnitsHandler,
      spacingUnits: fluentFormGlobalPaddingUnits,
      spacingDesktop: fluentFormGlobalPaddingDesktop,
      spacingTablet: fluentFormGlobalPaddingTablet,
      spacingMobile: fluentFormGlobalPaddingMobile,
      handleSpacingUnitHandler: handleGlobalPaddingUnitChange,
      spacingCombineBtn: fluentFormGlobalPaddingLink,
      spacingCombineBtnHandler: handleGlobalPaddingCombineBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: handleGlobalMarginUnitsHandler,
      spacingUnits: fluentFormGlobalMarginUnits,
      spacingDesktop: fluentFormGlobalMarginDesktop,
      spacingTablet: fluentFormGlobalMarginTablet,
      spacingMobile: fluentFormGlobalMarginMobile,
      handleSpacingUnitHandler: handleGlobalMarginUnitChange,
      spacingCombineBtn: fluentFormGlobalMarginLink,
      spacingCombineBtnHandler: handleGlobalMarginCombineBtn,
      setAttributes: setAttributes
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Background Color",
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_Components_color__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "frontis-blocks"),
      globalColorSwitcher: fluentFormGlobalBgColorSwitcher,
      globalColor: fluentFormGlobalBgColor,
      globalHoverColor: fluentFormGlobalBgHoverColor,
      handleColorSwitcherChange: handleGlobalBgColorSwitcherChange,
      handleGlobalColorChange: handleGlobalBgColorChange,
      handleGlobalHoverColorChange: handleGlobalBgHoverColorChange
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border and Radius", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Style", "frontis-blocks"),
      value: fluentFormGlobalBorder,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.BORDER_STYLES,
      onChange: function onChange(value) {
        return setAttributes({
          fluentFormGlobalBorder: value
        });
      }
    }), /*#__PURE__*/React.createElement(_Components_color__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "frontis-blocks"),
      globalColorSwitcher: fluentFormGlobalBorderColorSwitcher,
      globalColor: fluentFormGlobalBorderColor,
      globalHoverColor: fluentFormGlobalBorderHoverColor,
      handleColorSwitcherChange: handleGlobalBorderColorSwitcherChange,
      handleGlobalColorChange: handleGlobalBorderColorChange,
      handleGlobalHoverColorChange: handleGlobalBorderHoverColorChange
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: handleGlobalBorderUnitsHandler,
      spacingUnits: fluentFormGlobalBorderUnits,
      spacingDesktop: fluentFormGlobalBorderDesktop,
      spacingTablet: fluentFormGlobalBorderTablet,
      spacingMobile: fluentFormGlobalBorderMobile,
      handleSpacingUnitHandler: handleGlobalBorderUnitChange,
      spacingCombineBtn: fluentFormGlobalBorderLink,
      spacingCombineBtnHandler: handleGlobalBorderCombineBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "frontis-blocks"),
      deviceType: deviceType,
      spacingUnitsHandler: handleGlobalBorderRadiusUnitsHandler,
      spacingUnits: fluentFormGlobalBorderRadiusUnits,
      spacingDesktop: fluentFormGlobalBorderRadiusDesktop,
      spacingTablet: fluentFormGlobalBorderRadiusTablet,
      spacingMobile: fluentFormGlobalBorderRadiusMobile,
      handleSpacingUnitHandler: handleGlobalBorderRadiusUnitChange,
      spacingCombineBtn: fluentFormGlobalBorderRadiusLink,
      spacingCombineBtnHandler: handleGlobalBorderRadiusCombineBtn,
      setAttributes: setAttributes
    }))))));
  }))));
}

/***/ }),

/***/ "./src/components/color/index.js":
/*!***************************************!*\
  !*** ./src/components/color/index.js ***!
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
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/color/editor.lazy.scss");



var FB_Color = function FB_Color(_ref) {
  var label = _ref.label,
    globalColorSwitcher = _ref.globalColorSwitcher,
    globalColor = _ref.globalColor,
    globalHoverColor = _ref.globalHoverColor,
    handleColorSwitcherChange = _ref.handleColorSwitcherChange,
    handleGlobalColorChange = _ref.handleGlobalColorChange,
    handleGlobalHoverColorChange = _ref.handleGlobalHoverColorChange;
  var NORMAL_HOVER = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'frontis-blocks'),
    value: 'normal'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'frontis-blocks'),
    value: 'hover'
  }];
  var setHandleColorSwitcherChange = function setHandleColorSwitcherChange(value) {
    handleColorSwitcherChange(value);
  };
  var setHandleGlobalColorChange = function setHandleGlobalColorChange(value) {
    handleGlobalColorChange(value);
  };
  var setHandleGlobalHoverColorChange = function setHandleGlobalHoverColorChange(value) {
    handleGlobalHoverColorChange(value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-color-container"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(label, "frontis-blocks"),
    className: "fb-setting-color-panel-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "fb-setting-color-panel-btn"
  }, NORMAL_HOVER.map(function (item, key) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: key,
      onClick: function onClick() {
        return setHandleColorSwitcherChange(item.value);
      },
      className: "fb-setting-color-panel-btn-switcher ".concat(globalColorSwitcher === item.value ? 'active' : '')
    }, item.label);
  }))), globalColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal Color", "frontis-blocks"),
    className: "fb-setting-color-setting-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: "fb-setting-color-setting-icon-dropdown",
    contentClassName: "fb-setting-color-setting-icon-dropdown-content",
    popoverProps: {
      placement: 'bottom-start'
    },
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "primary",
        onClick: onToggle,
        "aria-expanded": isOpen,
        className: "fb-setting-color-setting-icon-btn"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
        icon: "color-picker",
        className: "fb-setting-color-setting-icon"
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-color-setting-icon-popup"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
        className: "fb-setting-color-setting-icon-popup-inner"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-normal-color"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
        color: globalColor,
        onChange: setHandleGlobalColorChange,
        enableAlpha: true
      }), /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-color-label"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
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
        value: globalColor,
        onChange: setHandleGlobalColorChange
      }))));
    }
  })), globalColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-blocks"),
    className: "fb-setting-color-setting-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: "fb-setting-color-setting-icon-dropdown",
    contentClassName: "fb-setting-color-setting-icon-dropdown-content",
    popoverProps: {
      placement: 'bottom-start'
    },
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
        onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "primary",
        onClick: onToggle,
        "aria-expanded": isOpen,
        className: "fb-setting-color-setting-icon-btn"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
        icon: "color-picker",
        className: "fb-setting-color-setting-icon"
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-color-setting-icon-popup"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
        className: "fb-setting-color-setting-icon-popup-inner"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-hover-color"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
        color: globalHoverColor,
        onChange: setHandleGlobalHoverColorChange,
        enableAlpha: true
      }), /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-hover-color-label"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
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
        value: globalHoverColor,
        onChange: setHandleGlobalHoverColorChange
      }))));
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FB_Color);

/***/ }),

/***/ "./src/components/range/index.js":
/*!***************************************!*\
  !*** ./src/components/range/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_responsive_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/responsive-control */ "./src/components/responsive-control/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// eslint-disable-next-line import/no-unresolved

var FB_Range = function FB_Range(_ref) {
  var min = _ref.min,
    max = _ref.max,
    label = _ref.label,
    rangeValue = _ref.rangeValue,
    onChangeHandler = _ref.onChangeHandler,
    rangeUnitHandler = _ref.rangeUnitHandler,
    deviceType = _ref.deviceType,
    units = _ref.units,
    setAttributes = _ref.setAttributes,
    rangeStep = _ref.rangeStep,
    resetFallbackValue = _ref.resetFallbackValue;
  var UNIT_TYPES = [{
    label: 'px',
    value: 'px'
  }, {
    label: '%',
    value: '%'
  }, {
    label: 'em',
    value: 'em'
  }];

  // Ensure default/fallback value for the current deviceType
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (rangeValue[deviceType] === undefined) {
      var newRangeValue = _objectSpread(_objectSpread({}, rangeValue), {}, _defineProperty({}, deviceType, resetFallbackValue));
      onChangeHandler(newRangeValue);
    }
  }, [deviceType, rangeValue, onChangeHandler, resetFallbackValue]);
  var setRangeValue = function setRangeValue(value) {
    var newRangeValue = _objectSpread(_objectSpread({}, rangeValue), {}, _defineProperty({}, deviceType, value || resetFallbackValue));
    onChangeHandler(newRangeValue);
  };
  var setRangeUnit = function setRangeUnit(unit) {
    var newUnits = _objectSpread(_objectSpread({}, units), {}, _defineProperty({}, deviceType, unit));
    rangeUnitHandler(newUnits);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-spacing-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-spacing-inner-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-spacing-label-container"
  }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(label, 'frontis-blocks'),
    device: deviceType,
    deviceHandler: function deviceHandler(newDevice) {
      return setAttributes({
        deviceType: newDevice
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-units-type"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: "fb-setting-units-type-wrap"
  }, UNIT_TYPES.map(function (item, key) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: key,
      onClick: function onClick() {
        return setRangeUnit(item.value);
      },
      className: "fb-setting-units-type-switcher ".concat(units[deviceType] === item.value ? 'active' : '')
    }, item.label);
  })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    __nextHasNoMarginBottom: true,
    value: rangeValue[deviceType],
    onChange: setRangeValue,
    min: min,
    max: max,
    step: rangeStep,
    allowReset: true,
    resetFallbackValue: resetFallbackValue
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FB_Range);

/***/ }),

/***/ "./src/components/responsive-control/index.js":
/*!****************************************************!*\
  !*** ./src/components/responsive-control/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FB_ResponsiveControl)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);



function FB_ResponsiveControl(_ref) {
  var labelText = _ref.labelText,
    device = _ref.device,
    deviceHandler = _ref.deviceHandler;
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store),
    setDeviceType = _useDispatch.setDeviceType;
  var handleDevice = function handleDevice(deviceName) {
    deviceHandler(deviceName);
    setDeviceType(deviceName);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-label-wrapper"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fb-setting-label-text"
  }, labelText), /*#__PURE__*/React.createElement("div", {
    className: "fb-responsive-device-wrapper"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fb-responsive-desktop-device ".concat(device === 'Desktop' ? 'active' : ''),
    onClick: function onClick() {
      return handleDevice('Desktop');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "7",
    viewBox: "0 0 8 7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "fb-responsive-tablet-device ".concat(device === 'Tablet' ? 'active' : ''),
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
    className: "fb-responsive-mobile-device ".concat(device === 'Mobile' ? 'active' : ''),
    onClick: function onClick() {
      return handleDevice('Mobile');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "4",
    height: "7",
    viewBox: "0 0 4 7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
  }))))));
}

/***/ }),

/***/ "./src/components/spacing/index.js":
/*!*****************************************!*\
  !*** ./src/components/spacing/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FB_Spacing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_responsive_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/responsive-control */ "./src/components/responsive-control/index.js");
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/spacing/editor.lazy.scss");
// eslint-disable-next-line import/no-extraneous-dependencies



// eslint-disable-next-line import/no-unresolved


function FB_Spacing(_ref) {
  var label = _ref.label,
    deviceType = _ref.deviceType,
    spacingUnitsHandler = _ref.spacingUnitsHandler,
    spacingUnits = _ref.spacingUnits,
    spacingDesktop = _ref.spacingDesktop,
    spacingTablet = _ref.spacingTablet,
    spacingMobile = _ref.spacingMobile,
    handleSpacingUnitHandler = _ref.handleSpacingUnitHandler,
    spacingCombineBtn = _ref.spacingCombineBtn,
    spacingCombineBtnHandler = _ref.spacingCombineBtnHandler,
    setAttributes = _ref.setAttributes;
  var handleSpacingUnit = function handleSpacingUnit(event, position) {
    handleSpacingUnitHandler(event, position);
  };
  var handleMarginLinkToggle = function handleMarginLinkToggle() {
    spacingCombineBtnHandler();
  };
  var UNIT_TYPES = [{
    label: 'px',
    value: 'px'
  }, {
    label: '%',
    value: '%'
  }, {
    label: 'em',
    value: 'em'
  }];

  // Get spacing value
  var getSpacingValue = function getSpacingValue(position) {
    if (deviceType === 'Desktop') {
      return spacingDesktop[position];
    } else if (deviceType === 'Tablet') {
      return spacingTablet[position];
    }
    return spacingMobile[position];
  };
  var setSpacingUnit = function setSpacingUnit(unit) {
    spacingUnitsHandler(unit);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-inner-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-label-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(label, 'frontis-blocks'),
    device: deviceType,
    deviceHandler: function deviceHandler(newDevice) {
      return setAttributes({
        deviceType: newDevice
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-units-type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: "fb-setting-units-type-wrap"
  }, UNIT_TYPES.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: key,
      onClick: function onClick() {
        return setSpacingUnit(item.value);
      },
      className: "fb-setting-units-type-switcher ".concat(spacingUnits[deviceType] === item.value ? 'active' : '')
    }, item.label);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "fb-setting-spacing-input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'frontis-blocks')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "top",
    value: getSpacingValue('top'),
    onChange: function onChange(e) {
      return handleSpacingUnit(e, 'top');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "fb-setting-spacing-input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'frontis-blocks')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "right",
    value: getSpacingValue('right'),
    onChange: function onChange(e) {
      return handleSpacingUnit(e, 'right');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "fb-setting-spacing-input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'frontis-blocks')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "bottom",
    value: getSpacingValue('bottom'),
    onChange: function onChange(e) {
      return handleSpacingUnit(e, 'bottom');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "fb-setting-spacing-input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'frontis-blocks')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "left",
    value: getSpacingValue('left'),
    onChange: function onChange(e) {
      return handleSpacingUnit(e, 'left');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "fb-setting-spacing-input-label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "dashicons ".concat(spacingCombineBtn ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(spacingCombineBtn ? 'is-checked' : ''),
    onClick: handleMarginLinkToggle
  })))));
}

/***/ }),

/***/ "./src/blocks/fluent-form/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/fluent-form/editor.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/fluent-form/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/fluent-form/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/color/editor.lazy.scss":
/*!***********************************************!*\
  !*** ./src/components/color/editor.lazy.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/spacing/editor.lazy.scss":
/*!*************************************************!*\
  !*** ./src/components/spacing/editor.lazy.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

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

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/blocks/fluent-form/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/fluent-form/block.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"frontis-blocks/fluent-form","version":"1.0.0","title":"Fluent Form","category":"frontis-blocks","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"anchor":false,"align":["wide","full"],"customClassName":false},"textdomain":"frontis-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","attributes":{"blockID":{"type":"string","default":""},"deviceType":{"type":"string","default":"Desktop"},"fluentFormGlobalZIndex":{"type":"number"},"formId":{"type":"string"},"showLabels":{"type":"boolean","default":true},"showPlaceholder":{"type":"boolean","default":true},"showErrorMessage":{"type":"boolean","default":true}}}');

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
/******/ 			"blocks/fluent-form/index": 0,
/******/ 			"blocks/fluent-form/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/fluent-form/style-index"], () => (__webpack_require__("./src/blocks/fluent-form/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map