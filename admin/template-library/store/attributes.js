// attributes.js
const attributes = {
  siteName: {
    type: "string",
    default: "",
  },
  siteTagline: {
    type: "string",
    default: "",
  },
  siteLogo: {
    type: "object",
    default: {
      id: "",
      url: "",
      alt: "",
    },
  },
  importSuccess: {
    type: "boolean",
    default: null,
  },
  sitePreviewLoading: {
    type: "boolean",
    default: true,
  },
  showFullSiteImportModal: {
    type: "boolean",
    default: false,
  },
  pageTemplates: {
    type: "array",
    default: [],
  },
  pageTemplatesLoading: {
    type: "boolean",
    default: false,
  },
  pageTemplatesError: {
    type: "string",
    default: null,
  },
  templateParts: {
    type: "array",
    default: [],
  },
  templatePartsLoading: {
    type: "boolean",
    default: false,
  },
  templatePartsError: {
    type: "string",
    default: null,
  },
  bgImportActive: {
    type: "boolean",
    default: false,
  },
  bgImportProgress: {
    type: "number",
    default: 0,
  },
  bgImportStep: {
    type: "string",
    default: "",
  },
  bgImportSteps: {
    type: "array",
    default: [],
  },
  bgImportFailed: {
    type: "boolean",
    default: false,
  },
  bgImportSuccess: {
    type: "boolean",
    default: false,
  },
  showBgProgressBar: {
    type: "boolean",
    default: false,
  },
};

export default attributes;
