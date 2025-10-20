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
};

export default attributes;
