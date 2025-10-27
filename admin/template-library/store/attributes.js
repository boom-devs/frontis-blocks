// attributes.js
const attributes = {
    siteName: {
      type: "string",
      default: ""
    },
    siteTagline: {
      type: "string",
      default: ""
    },
    siteLogo: {
      type: "object",
      default: {
        id: "",
        url: "",
        alt: ""
      }
    },
  };
  
  export default attributes;