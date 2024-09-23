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

    TestimonialImageRadiusUnits : {
        type: "string",
        default: "%"
    },
    TestimonialImageDesktopRadiusWidth: {
        type: "object",
        default: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50,
        },
    },
    TestimonialImagelTabRadiusWidth: {
        type: "object", 
        default: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50,
        },
    },
    TestimonialImageMobileRadiusWidth: {
        type: "object",
        default: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50,
        },
    },
    TestimonialImageRadiusLink : {
        type : "boolean",
        default: true
    },

    TestimonialQuoteIconSizeDesktop: {
        type: "number",
        default: 100
    },
    TestimonialQuoteIconSizeTablet: {
        type: "number",
        default: 100
    },
    TestimonialQuoteIconSizeMobile: {
        type: "number",
        default: 100
    },
    TestimonialQuoteIconSizeUnits: {
        type: "string",
        default: "px"
    },

    TestimonialQuoteIconColorSwitcher : {
        type: "string",
        default: "normal"
    },
    TestimonialQuoteIconColor : {
        type: "string",
        default: "#FFB400"
    },
    TestimonialQuoteIconHoverColor: {
        type: 'string',
        default: "#FFB400"
    },


    TestimonialDescFontFamily: {
        type: "string",
        default: "inherit",
    },
    TestimonialDescFontSizeDesktop: {
        type: "number",
        default: 18
    },
    TestimonialDescFontSizeTablet: {
        type: "number",
        default: 18
    },
    TestimonialDescFontSizeMobile: {
        type: "number",
        default: 18
    },
    TestimonialDescFontSizeUnits: {
        type: "string",
        default: "px"
    },
    TestimonialDescFontWeight : {
        type: "string",
        default: "400"
    },
    TestimonialDescFontStyle : {
        type: "string",
        default: "normal"
    },
    TestimonialDescTextTransform : {
        type: "string",
        default: "none"
    },
    TestimonialDescTextDecoration : {
        type: "string",
        default: "none"
    },
    TestimonialDescLetterSpacingDesktop: {
        type: "number",
        default: 0
    },
    TestimonialDescLetterSpacingTablet: {
        type: "number",
        default: 0
    },
    TestimonialDescLetterSpacingMobile: {
        type: "number",
        default: 0
    },
    TestimonialDescLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    TestimonialDescLineHeightDesktop: {
        type: "number",
        default: "inherit",
    },
    TestimonialDescLineHeightTablet: {
        type: "number",
        default: "inherit",
    },
    TestimonialDescLineHeightMobile: {
        type: "number",
        default: "inherit",
    },
    TestimonialDescLineHeightUnits : {
        type: "string",
        default: "px"
    },

    TestimonialDescColorSwitcher : {
        type: "string",
        default: "normal"
    },
    TestimonialDescColor : {
        type: "string",
        default: "#000"
    },
    TestimonialDescHoverColor: {
        type: 'string',
        default: "#000"
    },


    TestimonialAuthorFontFamily: {
        type: "string",
        default: "inherit",
    },
    TestimonialAuthorFontSizeDesktop: {
        type: "number",
        default: 20
    },
    TestimonialAuthorFontSizeTablet: {
        type: "number",
        default: 20
    },
    TestimonialAuthorFontSizeMobile: {
        type: "number",
        default: 20
    },
    TestimonialAuthorFontSizeUnits: {
        type: "string",
        default: "px"
    },
    TestimonialAuthorFontWeight : {
        type: "string",
        default: "700"
    },
    TestimonialAuthorFontStyle : {
        type: "string",
        default: "normal"
    },
    TestimonialAuthorTextTransform : {
        type: "string",
        default: "none"
    },
    TestimonialAuthorTextDecoration : {
        type: "string",
        default: "none"
    },
    TestimonialAuthorLetterSpacingDesktop: {
        type: "number",
        default: 0
    },
    TestimonialAuthorLetterSpacingTablet: {
        type: "number",
        default: 0
    },
    TestimonialAuthorLetterSpacingMobile: {
        type: "number",
        default: 0
    },
    TestimonialAuthorLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    TestimonialAuthorLineHeightDesktop: {
        type: "number",
        default: "inherit",
    },
    TestimonialAuthorLineHeightTablet: {
        type: "number",
        default: "inherit",
    },
    TestimonialAuthorLineHeightMobile: {
        type: "number",
        default: "inherit",
    },
    TestimonialAuthorLineHeightUnits : {
        type: "string",
        default: "px"
    },

    TestimonialAuthorColorSwitcher : {
        type: "string",
        default: "normal"
    },
    TestimonialAuthorColor : {
        type: "string",
        default: "#000"
    },
    TestimonialAuthorHoverColor: {
        type: 'string',
        default: "#000"
    },


    TestimonialDesignationFontFamily: {
        type: "string",
        default: "inherit",
    },
    TestimonialDesignationFontSizeDesktop: {
        type: "number",
        default: 16
    },
    TestimonialDesignationFontSizeTablet: {
        type: "number",
        default: 16
    },
    TestimonialDesignationFontSizeMobile: {
        type: "number",
        default: 16
    },
    TestimonialDesignationFontSizeUnits: {
        type: "string",
        default: "px"
    },
    TestimonialDesignationFontWeight : {
        type: "string",
        default: "400"
    },
    TestimonialDesignationFontStyle : {
        type: "string",
        default: "normal"
    },
    TestimonialDesignationTextTransform : {
        type: "string",
        default: "none"
    },
    TestimonialDesignationTextDecoration : {
        type: "string",
        default: "none"
    },
    TestimonialDesignationLetterSpacingDesktop: {
        type: "number",
        default: 0
    },
    TestimonialDesignationLetterSpacingTablet: {
        type: "number",
        default: 0
    },
    TestimonialDesignationLetterSpacingMobile: {
        type: "number",
        default: 0
    },
    TestimonialDesignationLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    TestimonialDesignationLineHeightDesktop: {
        type: "number",
        default: "inherit",
    },
    TestimonialDesignationLineHeightTablet: {
        type: "number",
        default: "inherit",
    },
    TestimonialDesignationLineHeightMobile: {
        type: "number",
        default: "inherit",
    },
    TestimonialDesignationLineHeightUnits : {
        type: "string",
        default: "px"
    },

    TestimonialDesignationColorSwitcher : {
        type: "string",
        default: "normal"
    },
    TestimonialDesignationColor : {
        type: "string",
        default: "#777"
    },
    TestimonialDesignationHoverColor: {
        type: 'string',
        default: "#777"
    },


    TestimonialRatingIconSizeDesktop: {
        type: "number",
        default: 20
    },
    TestimonialRatingIconSizeTablet: {
        type: "number",
        default: 20
    },
    TestimonialRatingIconSizeMobile: {
        type: "number",
        default: 20
    },
    TestimonialRatingIconSizeUnits: {
        type: "string",
        default: "px"
    },

    TestimonialRatingIconColorSwitcher : {
        type: "string",
        default: "normal"
    },
    TestimonialRatingIconColor : {
        type: "string",
        default: "#FFB400"
    },
    TestimonialRatingIconHoverColor: {
        type: 'string',
        default: "#FFB400"
    },
    
};

export default attributes;
