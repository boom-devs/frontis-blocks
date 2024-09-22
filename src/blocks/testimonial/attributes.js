const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
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
