const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
    },
    TestimonialZIndex : {
        type: "number",
    },
    TestimonialAlignment: {
        type: "string",
        default: "center",
    },

    TestimonialImageUrl : {
        type: "string",
    },
    TestimonialImageAlt : {
        type: "string",
    },
    TestimonialImageID : {
        type: "number",
    },


    TestimonialImageWidthDesktop: {
        type: "number",
        default: 100
    },
    TestimonialImageWidthTablet: {
        type: "number",
        default: 100
    },
    TestimonialImageWidthMobile: {
        type: "number",
        default: 100
    },
    TestimonialImageWidthUnits : {
        type: "string",
        default: "px"
    },

    TestimonialBorderRadiusUnits : {
        type: "string",
        default: "px"
    },
    TestimonialDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    TestimonialTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    TestimonialMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    TestimonialBorderRadiusLink : {
        type : "boolean",
        default: true
    },


    TestimonialDesc: {
        type : "string",
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    TestimonialAuthor: {
        type : "string",
        default: "John Doe"
    },
    TestimonialDesignation: {
        type : "string",
        default: "CEO, Company Name"
    },
    TestimonialRatingNumber: {
        type : "number",
        default: 5,
    },
    TestimonialRatingicon: {
        type: 'string',
        default: 'star',
    },
    TestimonialRatinIconAlign: {
        type: "string",
        default: "icon",
    },
    TestimonialQuoteIcon: {
        type: 'string',
        default: 'quote-left',
    },
    TestimonialQuoteIconAlign: {
        type: "string",
        default: "icon",
    },
    
};

export default attributes;
