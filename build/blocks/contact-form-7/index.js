/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/contact-form-7/attributes.js":
/*!*************************************************!*\
  !*** ./src/blocks/contact-form-7/attributes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attributes: () => (/* binding */ attributes)
/* harmony export */ });
var attributes = {
  DeviceType: {
    type: 'string',
    "default": 'Desktop'
  },
  formId: {
    type: 'string'
  },
  spacingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'em',
      Mobile: 'px'
    }
  },
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
      Desktop: "100",
      Tablet: "100",
      Mobile: "100"
    }
  },
  fluentFormInputWidthSizeUnits: {
    type: 'object',
    "default": {
      Desktop: '%',
      Tablet: '%',
      Mobile: '%'
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
};

/***/ }),

/***/ "./src/blocks/contact-form-7/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/contact-form-7/edit.js ***!
  \*******************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/@wordpress/scripts/node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/src/blocks/contact-form-7/edit.js: Legacy octal literals are not allowed in strict mode. (12:0)\n\n\u001b[0m \u001b[90m 10 |\u001b[39m \t\u001b[36mconst\u001b[39m [wpCf7Form\u001b[33m,\u001b[39m setWpCf7Forms] \u001b[33m=\u001b[39m useState(\u001b[33mFrontisBlocksData\u001b[39m\u001b[33m.\u001b[39mcontact_form7_html)\u001b[33m;\u001b[39m\n \u001b[90m 11 |\u001b[39m \t\u001b[36mconst\u001b[39m [selectedForm\u001b[33m,\u001b[39m setSelectedForm] \u001b[33m=\u001b[39m useState()\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 12 |\u001b[39m \u001b[35m01791\u001b[39m\n \u001b[90m    |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 13 |\u001b[39m \t\u001b[36mconst\u001b[39m {\n \u001b[90m 14 |\u001b[39m \t\tformId\u001b[33m,\u001b[39m\n \u001b[90m 15 |\u001b[39m \t\tblockID\u001b[33m,\u001b[39m\u001b[0m\n    at constructor (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:362:19)\n    at JSXParserMixin.raise (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:3260:19)\n    at JSXParserMixin.recordStrictModeErrors (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:3197:12)\n    at JSXParserMixin.readNumber (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:3087:12)\n    at JSXParserMixin.getTokenFromCode (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:2915:14)\n    at JSXParserMixin.getTokenFromCode (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:6848:11)\n    at JSXParserMixin.nextToken (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:2443:10)\n    at JSXParserMixin.next (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:2356:10)\n    at JSXParserMixin.eat (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:2360:12)\n    at JSXParserMixin.isLineTerminator (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:3582:17)\n    at JSXParserMixin.semicolon (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:3585:25)\n    at JSXParserMixin.parseVarStatement (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12707:10)\n    at JSXParserMixin.parseStatementContent (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12322:23)\n    at JSXParserMixin.parseStatementLike (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12239:17)\n    at JSXParserMixin.parseStatementListItem (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12219:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12792:61)\n    at JSXParserMixin.parseBlockBody (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12785:10)\n    at JSXParserMixin.parseBlock (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12773:10)\n    at JSXParserMixin.parseFunctionBody (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:11618:24)\n    at JSXParserMixin.parseArrowExpression (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:11593:10)\n    at JSXParserMixin.parseParenAndDistinguishExpression (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:11207:12)\n    at JSXParserMixin.parseExprAtom (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:10851:23)\n    at JSXParserMixin.parseExprAtom (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:6815:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:10584:23)\n    at JSXParserMixin.parseUpdate (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:10569:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:10549:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:10403:61)\n    at JSXParserMixin.parseExprOps (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:10408:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:10385:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:10348:21)\n    at /Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:10318:39\n    at JSXParserMixin.allowInAnd (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:11928:16)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:10318:17)\n    at JSXParserMixin.parseVar (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12860:91)\n    at JSXParserMixin.parseVarStatement (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12706:10)\n    at JSXParserMixin.parseStatementContent (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12322:23)\n    at JSXParserMixin.parseStatementLike (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12239:17)\n    at JSXParserMixin.parseModuleItem (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12216:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12792:36)\n    at JSXParserMixin.parseBlockBody (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12785:10)\n    at JSXParserMixin.parseProgram (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12113:10)\n    at JSXParserMixin.parseTopLevel (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:12103:25)\n    at JSXParserMixin.parse (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:13915:10)\n    at parse (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/parser/lib/index.js:13949:38)\n    at parser (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/core/lib/transformation/normalize-file.js:64:37)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/kamal/Sites/block/wp-content/plugins/frontis-blocks/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)");

/***/ }),

/***/ "./src/blocks/contact-form-7/index.js":
/*!********************************************!*\
  !*** ./src/blocks/contact-form-7/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/contact-form-7/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/contact-form-7/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/contact-form-7/block.json");
/* harmony import */ var _Blocks_contact_form_7_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Blocks/contact-form-7/attributes */ "./src/blocks/contact-form-7/attributes.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  attributes: _Blocks_contact_form_7_attributes__WEBPACK_IMPORTED_MODULE_4__.attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/contact-form-7/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/contact-form-7/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "./src/blocks/contact-form-7/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/contact-form-7/block.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"frontis-blocks/contact-form-7","version":"0.1.0","title":"Contact Form 7","category":"frontis-blocks","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"frontis-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/******/ 			"blocks/contact-form-7/index": 0,
/******/ 			"blocks/contact-form-7/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/contact-form-7/style-index"], () => (__webpack_require__("./src/blocks/contact-form-7/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map