const attributes = {
	blockId: {
		type: "string",
		default: ""
	},
	/** Start Header */
	pricingTitle: {
		type: "string",
		default: "Startup"
	},
	pricingSubTitleSwitcher: {
		type: "boolean",
		default: false
	},
	pricingSubTitle: {
		type: "string",
		default: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
	},
	pricingIconAlign: {
        type: "string",
        default: "icon",
    },
    pricingIcon: {
		type: 'string',
		default: 'circle-check',
	},
	/** End Header */

	/** Start Pricing */
	normalPrice :{
		type: "string",
		default: "99"
	},
	salePriceSwitcher :{
		type: "boolean",
		default: false
	},
	salePrice :{
		type: "string",
		default: "90"
	},
	priceCurrency :{
		type: "string",
		default: "$"
	},
	priceCurrencyPosition :{
		type: "string",
		default: "left"
	},
	pricePeriod :{
		type: "string",
		default: "month"
	},
	pricePeriodSeparator :{
		type: "string",
		default: "/"
	},
	/** End Pricing */

	/** Start Price list Features */
	priceHideFeaturesSwitcher: {
		type: "boolean",
		default: false
	},
	priceFeatureShowLineSwitcher: {
		type: "boolean",
		default: true
	},
	priceFeatureIconSwitcher: {
		type: "boolean",
		default: true
	},
	priceFeatureItems: {
        type: "array",
        default: [
            // You can define some default items if needed
            { id: 'item-1', Title: 'Feature Item 1', FeatureIcon: 'check', },
            { id: 'item-2', Title: 'Feature Item 2', FeatureIcon: 'check', },
            { id: 'item-3', Title: 'Feature Item 3', FeatureIcon: 'check', },
        ],
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    default: ""
                },
                Title: {
                    type: "string",
                    default: ""
                },
                FeatureIcon: {
                    type: 'string',
                    default: 'check',
                },
                FeatureIconAlign: {
                    type: "string",
                    default: "icon",
                },
            }
        }
    },
	/** End Price list Features */

	/** Start Button */
	priceButtonSwitcher: {
		type: "boolean",
		default: true
	},
    priceButtonText: {
        type: "string",
        default: "Choose Plan",
    },
    priceButtonUrl: {
        type: "string",
        default: "",
    },
    priceButtonTargetUrl: {
        type: "boolean",
    },
	priceButtonIconAlign: {
        type: "string",
        default: "no-icon",
    },
    priceButtonIcon: {
		type: 'string',
		default: 'circle-check',
	},
	priceButtonIconPosition :{
		type: "string",
		default: "left"
	},
	priceButtonIconSpacing: {
		type: "number",
		default: 10
	},
	/** End Button */
	/** Start Ribbon */	
	priceRibbonSwitcher: {
		type: "boolean",
		default: false
	},
	priceRibbonText: {
		type: "string",
		default: "Featured"
	},
	priceRibbonPosition: {
		type: "string",
		default: "right"
	},
	/** End Ribbon */
}

export default attributes;
