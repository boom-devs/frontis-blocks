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
};

export default attributes;
