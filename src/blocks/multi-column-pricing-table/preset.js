import { __ } from '@wordpress/i18n';

let defaultImageUrl = '';
if (typeof FrontisBlocksData !== 'undefined') {
    defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
}

/**
* Preset Styles Data Object
*/
export const presetStyles = {
    basic: {
        pricingTableColumns: 3,
        pricingTableColumnGap: {
            Desktop: '20',
            Tablet: '15',
            Mobile: '10',
        },
        pricingTopSectionNormalClassicColor: '#399CFF',
        pricingTopSectionTextColor: '#FFFFFF',
        pricingTitle: 'Basic Plan',
        pricingSubTitle: 'Best for Business Owners',
        normalPrice: '49.00',
        priceCurrency: '$',
        pricePeriod: 'month',
        priceButtonText: 'Select Plan',
        priceButtonBgColor: '#399CFF',
        priceButtonTextColor: '#FFFFFF',
        // priceFeatureItems: [
        //     { id: 'item-1', Title: '10 Projects', FeatureIcon: 'check' },
        //     { id: 'item-2', Title: '50GB Storage', FeatureIcon: 'check' },
        //     { id: 'item-3', Title: '24/7 Support', FeatureIcon: 'check' },
        // ],
    },
    professional: {
        pricingTableColumns: 3,
        pricingTableColumnGap: {
            Desktop: '20',
            Tablet: '15',
            Mobile: '10',
        },
        pricingTopSectionNormalClassicColor: '#2C3E50',
        pricingTopSectionTextColor: '#FFFFFF',
        pricingTitle: 'Professional',
        pricingSubTitle: 'Perfect for growing teams',
        normalPrice: '99.00',
        priceCurrency: '$',
        pricePeriod: 'month',
        priceButtonText: 'Get Started',
        priceButtonBgColor: '#2C3E50',
        priceButtonTextColor: '#FFFFFF',
        // priceFeatureItems: [
        //     { id: 'item-1', Title: 'Unlimited Projects', FeatureIcon: 'check' },
        //     { id: 'item-2', Title: '100GB Storage', FeatureIcon: 'check' },
        //     { id: 'item-3', Title: 'Priority Support', FeatureIcon: 'check' },
        //     { id: 'item-4', Title: 'Advanced Analytics', FeatureIcon: 'check' },
        // ],
    },
    enterprise: {
        pricingTableColumns: 4,
        pricingTableColumnGap: {
            Desktop: '20',
            Tablet: '15',
            Mobile: '10',
        },
        pricingTopSectionNormalClassicColor: '#8E44AD',
        pricingTopSectionTextColor: '#FFFFFF',
        pricingTitle: 'Enterprise',
        pricingSubTitle: 'For large organizations',
        normalPrice: '299.00',
        priceCurrency: '$',
        pricePeriod: 'month',
        priceButtonText: 'Contact Us',
        priceButtonBgColor: '#8E44AD',
        priceButtonTextColor: '#FFFFFF',
        // priceFeatureItems: [
        //     { id: 'item-1', Title: 'Unlimited Everything', FeatureIcon: 'check' },
        //     { id: 'item-2', Title: '1TB Storage', FeatureIcon: 'check' },
        //     { id: 'item-3', Title: 'Dedicated Support', FeatureIcon: 'check' },
        //     { id: 'item-4', Title: 'Custom Integrations', FeatureIcon: 'check' },
        //     { id: 'item-5', Title: 'SLA Guarantee', FeatureIcon: 'check' },
        // ],
    },
};

export const imageGalleryPresets = [
    {
        id: 'basic-pricing',
        name: __('Basic Pricing', 'frontis-blocks'),
        thumbnail: defaultImageUrl,
        presetData: presetStyles.basic,
    },
    {
        id: 'professional-pricing',
        name: __('Professional Pricing', 'frontis-blocks'),
        thumbnail: defaultImageUrl,
        presetData: presetStyles.professional,
    },
    {
        id: 'enterprise-pricing',
        name: __('Enterprise Pricing', 'frontis-blocks'),
        thumbnail: defaultImageUrl,
        presetData: presetStyles.enterprise,
    },
];
