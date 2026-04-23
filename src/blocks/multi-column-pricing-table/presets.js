import { __ } from '@wordpress/i18n';

/**
 * Pricing Table Preset Styles Data Object
 */
export const pricingPresetStyles = {
    "default": {
        pricingTopSectionTextFontSize: { Desktop: '16', Tablet: '', Mobile: '' },
        pricingTopSectionTextFontWeight: '500',
        pricingTopSectionTextLineHeight: { Desktop: '21', Tablet: '', Mobile: '' },
        pricingTitleFontSize: { Desktop: '18', Tablet: '16', Mobile: '' },
        pricingTitleLineHeight: { Desktop: '18', Tablet: '19', Mobile: '' },
        normalPricingFontSize: { Desktop: '32', Tablet: '', Mobile: '' },
        normalPricingLineHeight: { Desktop: '32', Tablet: '', Mobile: '' },
        pricingHeaderDesktopPadding: {top: '32', bottom: '32', left: '32', right: '32'},
        pricingHeaderTabletPadding: {top: '0', bottom: '0', left: '0', right: '0'},
        priceAfterTextPaddingDesktop: { top: '32', bottom: '10', left: '0', right: '0' },
        headerAlignment: 'center',
        activationContentAlignment: 'center',
        pricingHeaderBorderDesktop: {top: '0', bottom: '1', left: '0', right: '0'},
        pricingHeaderBorderTablet: {top: '0', bottom: '1', left: '0', right: '0'},
        pricingHeaderBorderColor: '#E1E3E8',
        pricingHeaderBorder: 'solid',
        priceColumnDesktopMargin: {top: '0', bottom: '0', left: '0', right: '0'},
        pricingGridDesktopPadding: {top: '58', bottom: '0', left: '0', right: '0'},
        priceColumnMobileBorderRadiusWidth: { top: '16', bottom: '16', left: '16', right: '16' },
        pricingGridMobilePadding: { top: '0', bottom: '0', left: '0', right: '0' },
        priceButtonWidth: { Desktop: '', Tablet: '', Mobile: '' },
        priceButtonDesktopMargin: { top: '16', bottom: '16', left: '0', right: '0' },
        priceButtonDesktopBorderRadiusWidth: { top: '36', bottom: '36', left: '36', right: '36' },
        priceButtonDesktopBorderWidth: { top: '0', bottom: '0', left: '0', right: '0' },
        priceButtonBorder: 'none',
        priceButtonNormalClassicColor: '#0B0C0E',
        priceColumnNormalBackgroundType: 'classic',
        priceColumnNormalClassicColor: '#F7F7F7',
        pricingGridBorderRadiusDesktop: { top: '16', bottom: '16', left: '16', right: '16' },
        priceColumnBorder: 'none',
        priceButtonFontSize: { Desktop: '14', Tablet: '12', Mobile: '' },
        priceButtonLineHeight: { Desktop: '16', Tablet: '14', Mobile: '' },
        priceButtonColor: '#ffffff',
        priceButtonHoverColor: '#ffffff',
        priceGridNormalClassicColor: '',
        pricingHeaderBgColor: '',
        priceFeatureItemDesktopBorder: { top: '0', bottom: '0', left: '0', right: '0' },
        priceFeatureItemTabBorder: { top: '0', bottom: '0', left: '0', right: '0' },
        priceFeatureItemMobileBorder: { top: '0', bottom: '0', left: '0', right: '0' },
        priceFeatureDesktopPadding: { top: '24', bottom: '32', left: '32', right: '32' },
        priceFeatureItemDesktopPadding: { top: '0', bottom: '0', left: '0', right: '0' },
        priceFeatureItemTabPadding: { top: '0', bottom: '0', left: '0', right: '0' },
        priceFeatureItemBorder: 'none',
        FeatureListGap: { Desktop: '24', Tablet: '', Mobile: '' },
        priceFeatureIconColor: '#0B0C0E',
        priceFeatureAlignment: 'center',
        priceFeatureAreaNormalClassicColor: '',
        priceFeatureDesktopMargin: { top: '0', bottom: '0', left: '0', right: '0' },
        pricingTopSectionNormalClassicColor: '#0B0C0E',
        pricingTopSectionDesktopPadding: { top: '16', bottom: '16', left: '16', right: '16' },
        pricingTopSectionTextColor: '#FFFFFF',
        pricingTopSectionBorderRadiusDesktop: { top: '16', bottom: '0', left: '0', right: '16' },
        priceAfterTextFontSize: { Desktop: '16', Tablet: '14', Mobile: '' },
        priceAfterTextLineHeight: { Desktop: '21', Tablet: '16', Mobile: '' },
        priceAfterTextFontWeight: '700',
        priceAfterTextColor: '#0B0C0E',

        columns: [
            {
                id: 'column-1',
                pricingSectionTopSwitcher: false,
                pricingSectionTopText: 'Personal Package',
                pricingTitleTag: 'h2',
                pricingTitle: 'Personal Package',
                pricingSubTitleSwitcher: true,
                pricingSubTitleTag: 'span',
                pricingSubTitle: 'Personal Package',
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '49',
                salePriceSwitcher: false,
                salePrice: '45',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: 'month',
                pricePeriodSeparator: '/',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: true,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Support 1 year', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: '25% Renewal Discount', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-7', Title: 'Google Reviews', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: true },
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Get Started',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceAfterTextSwitcher: true,
                priceAfterText: 'Activation on 1 Site',
                priceColumnDesktopBorderRadiusWidth: { top: '16', right: '0', bottom: '0', left: '16' },
                priceColumnMobileBorderRadiusWidth: { top: '16', bottom: '16', left: '16', right: '16' },
                priceColumnNormalBackgroundType: 'classic',
                priceColumnNormalClassicColor: '#F7F7F7',
                priceColumnBorder: 'none',
                priceButtonColor: '#ffffff',
                priceButtonHoverColor: '#ffffff',
                pricingTopSectionNormalClassicColor: '#0B0C0E',
            },
            {
                id: 'column-2',
                pricingSectionTopSwitcher: true,
                pricingSectionTopText: 'Most Popular Package',
                pricingTitleTag: 'h2',
                pricingTitle: 'Agency Package',
                pricingSubTitleSwitcher: true,
                pricingSubTitleTag: 'span',
                pricingSubTitle: 'Agency Package',
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '49',
                salePriceSwitcher: false,
                salePrice: '39',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: 'month',
                pricePeriodSeparator: '/',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: true,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Support 1 year', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: '25% Renewal Discount', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-7', Title: 'Google Reviews', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: true },
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Get Started',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceAfterTextSwitcher: true,
                priceAfterText: 'Activation on 2 Site',
                priceColumnDesktopBorderRadiusWidth: { top: '0', right: '0', bottom: '0', left: '0' },
                priceColumnNormalBackgroundType: 'gradient',
                priceColumnNormalGradientColor: 'linear-gradient(180deg, #D0D0D0 0%, #F7F7F7 100%)',
                priceColumnNormalCustomGradientSwitcher: true,
                priceColumnNormalCustomGradientInputValue: 'linear-gradient(180deg, #D0D0D0 0%, #F7F7F7 100%)',
                priceColumnMobileBorderRadiusWidth: { top: '16', bottom: '16', left: '16', right: '16' },
                priceColumnBorder: 'none',
                priceButtonColor: '#ffffff',
                priceButtonHoverColor: '#ffffff',
                pricingTopSectionNormalClassicColor: '#0B0C0E',
            },
            {
                id: 'column-3',
                pricingSectionTopSwitcher: false,
                pricingSectionTopText: 'Lifetime Package',
                pricingTitleTag: 'h2',
                pricingTitle: 'Lifetime Package',
                pricingSubTitleSwitcher: true,
                pricingSubTitleTag: 'span',
                pricingSubTitle: 'Best for Business Owners.',
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '159',
                salePriceSwitcher: false,
                salePrice: '149',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: 'month',
                pricePeriodSeparator: '/',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: true,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Support 1 year', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: '25% Renewal Discount', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-7', Title: 'Google Reviews', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Get Started',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceAfterTextSwitcher: true,
                priceAfterText: 'Activation on 3 Site', 
                priceColumnDesktopBorderRadiusWidth: { top: '0', right: '16', bottom: '16', left: '0' },
                priceColumnMobileBorderRadiusWidth: { top: '16', bottom: '16', left: '16', right: '16' },
                priceColumnNormalBackgroundType: 'classic',
                priceColumnNormalClassicColor: '#F7F7F7',
                priceColumnBorder: 'none',
                priceButtonColor: '#ffffff',
                priceButtonHoverColor: '#ffffff',
                pricingTopSectionNormalClassicColor: '#0B0C0E',
            },
        ],
    },

    "preset-1": {
        pricingTopSectionTextFontSize: { Desktop: '14', Tablet: '12', Mobile: '' },
        pricingTopSectionTextFontWeight: '600',
        pricingTopSectionTextLineHeight: { Desktop: '16', Tablet: '14', Mobile: '' },
        pricingTitleFontSize: { Desktop: '24', Tablet: '18', Mobile: '' },
        pricingTitleLineHeight: { Desktop: '32', Tablet: '26', Mobile: '' },
        normalPricingFontSize: { Desktop: '16', Tablet: '', Mobile: '' },
        normalPricingLineHeight: { Desktop: '21', Tablet: '', Mobile: '' },
        normalPricingFontWeight: '400',
        normalPricingColor: '#6A758E',
        priceCurrencyFontSize: { Desktop: '42', Tablet: '32', Mobile: '' },
        priceCurrencyLineHeight: { Desktop: '55', Tablet: '44', Mobile: '' },
        salePricingFontSize: { Desktop: '42', Tablet: '32', Mobile: '' },
        salePricingLineHeight: { Desktop: '55', Tablet: '44', Mobile: '' },
        salePricingFontWeight: '700',
        salePricingColor: '#0B0C0E',
        pricingHeaderDesktopPadding: {top: '42', bottom: '42', left: '42', right: '42'},
        pricingHeaderTabletPadding: {top: '42', bottom: '42', left: '32', right: '32'},
        priceColumnDesktopMargin: {top: '0', bottom: '0', left: '0', right: '0'},
        headerAlignment: 'left',
        activationContentAlignment: 'left',
        pricingHeaderBorderRadiusDesktop: {top: '0', bottom: '0', left: '0', right: '0'},
        pricingHeaderBorderDesktop: {top: '0', bottom: '1', left: '0', right: '1'},
        pricingHeaderBorderTablet: {top: '0', bottom: '1', left: '0', right: '1'},
        pricingHeaderBorderColor: '#C3C8D2',
        pricingHeaderBorder: 'dashed',
        priceGridNormalClassicColor: '#ffffff',
        pricingGridDesktopPadding: { top: '0', bottom: '0', left: '0', right: '0' },
        priceAfterTextPaddingDesktop: { top: '0', bottom: '0', left: '0', right: '0' },
        priceButtonDesktopMargin: { top: '24', bottom: '0', left: '0', right: '0' },
        priceButtonDesktopBorderRadiusWidth: { top: '8', bottom: '8', left: '8', right: '8' },
        priceButtonDesktopBorderWidth: { top: '1', bottom: '1', left: '1', right: '1' },
        priceButtonBorderColor: '#E1E3E8',
        priceButtonBorder: 'solid',
        priceButtonNormalClassicColor: '#F7F7F7',
        priceButtonHoverClassicColor: '#399CFF',
        priceColumnNormalClassicColor: '',
        pricingGridBorderRadiusDesktop: { top: '0', bottom: '0', left: '0', right: '0' },
        priceColumnBorder: 'none',
        priceColumnDesktopBorderRadiusWidth: { top: '0', right: '0', bottom: '0', left: '0' },
        priceButtonTabPadding: { top: '16', bottom: '16', left: '24', right: '24' },
        priceButtonFontSize: { Desktop: '18', Tablet: '16', Mobile: '' },
        priceButtonLineHeight: { Desktop: '24', Tablet: '20', Mobile: '' },
        priceButtonColor: '#0B0C0E',
        priceButtonHoverColor: '#ffffff',
        pricingHeaderBgColor: '#f7f7f7',
        priceFeatureDesktopPadding: { top: '116', bottom: '42', left: '0', right: '0' },
        priceFeatureMobilePadding: { top: '24', bottom: '24', left: '24', right: '24' },
        priceFeatureItemDesktopPadding: { top: '14', bottom: '14', left: '20', right: '20' },
        priceFeatureItemTabPadding: { top: '12', bottom: '12', left: '8', right: '8' },
        priceFeatureItemBorder: 'dashed',
        priceFeatureItemBorderBottom: true,
        priceFeatureItemDesktopBorder: { top: '0', bottom: '1', left: '0', right: '0' },
        priceFeatureItemTabBorder: { top: '0', bottom: '1', left: '0', right: '0' },
        priceFeatureItemMobileBorder: { top: '0', bottom: '1', left: '0', right: '0' },
        priceFeatureItemBorderColor: '#C3C8D2',
        FeatureListGap: { Desktop: '0', Tablet: '', Mobile: '' },
        priceFeatureIconColor: '#399CFF',
        priceFeatureAlignment: 'left',
        priceButtonWidth: { Desktop: '100', Tablet: '100', Mobile: '100' },
        priceButtonWidthUnits: { Desktop: '%', Tablet: '%', Mobile: '%' },
        priceFeatureAreaNormalClassicColor: '#F7F7F7',
        priceFeatureDesktopMargin: { top: '10', bottom: '0', left: '0', right: '0' },
        pricingTopSectionNormalClassicColor: '#DBEFDC',
        pricingTopSectionDesktopPadding: { top: '6', bottom: '6', left: '8', right: '8' },
        pricingTopSectionTextColor: '#4CAF50',
        pricingTopSectionBorderRadiusDesktop: { top: '6', bottom: '6', left: '6', right: '6' },
        priceAfterTextFontSize: { Desktop: '18', Tablet: '14', Mobile: '' },
        priceAfterTextLineHeight: { Desktop: '32', Tablet: '20', Mobile: '' },
        priceAfterTextFontWeight: '500',
        priceAfterTextColor: '#2A2F39',

        columns: [
            {
                id: 'column-1',
                pricingSectionTopSwitcher: true,
                pricingSectionTopText: '-10% SAVINGS',
                pricingTitle: 'Personal',
                pricingTitleTag: 'h2',
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '89',
                salePriceSwitcher: true,
                salePrice: '80.1',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: '',
                pricePeriodSeparator: '',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: true,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Support 1 year', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: '25% Renewal Discount', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-6', Title: 'Zapier Integrations', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Purchase Now',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceAfterTextSwitcher: true,
                priceAfterText: '1 Site <br />Lifetime Update & Support',
                priceColumnBorder: 'none',
                priceColumnDesktopBorderRadiusWidth: { top: '0', right: '0', bottom: '0', left: '0' },
                priceButtonColor: '#0B0C0E',
                priceButtonHoverColor: '#ffffff',
                priceButtonNormalClassicColor: '#F7F7F7',
                priceButtonHoverClassicColor: '#399CFF',
                pricingTopSectionNormalClassicColor: '#DBEFDC',
            },
            {
                id: 'column-2',
                pricingSectionTopSwitcher: true,
                pricingSectionTopText: '-15% SAVINGS',
                pricingTitleTag: 'h2',
                pricingTitle: 'Professional',
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '170',
                salePriceSwitcher: true,
                salePrice: '160.7',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: '',
                pricePeriodSeparator: '',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: true,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Support 1 year', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: '25% Renewal Discount', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-6', Title: 'Zapier Integration', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Purchase Now',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceAfterTextSwitcher: true,
                priceAfterText: '5 Site <br />Lifetime Update & Support',
                priceColumnBorder: 'none',
                priceColumnDesktopBorderRadiusWidth: { top: '0', right: '0', bottom: '0', left: '0' },
                priceButtonColor: '#0B0C0E',
                priceButtonHoverColor: '#ffffff',
                priceButtonNormalClassicColor: '#F7F7F7',
                priceButtonHoverClassicColor: '#399CFF',
                pricingTopSectionNormalClassicColor: '#DBEFDC',
            },
            {
                id: 'column-3',
                pricingSectionTopSwitcher: true,
                pricingSectionTopText: '-20% SAVINGS',
                pricingTitleTag: 'h2',
                pricingTitle: 'Agency',
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '320',
                salePriceSwitcher: true,
                salePrice: '291.8',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: '',
                pricePeriodSeparator: '',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: true,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Landing Page', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: 'HTML + CSS Design', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-6', Title: 'WordPress Themes', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false},
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Purchase Now',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceAfterTextSwitcher: true,
                priceAfterText: 'Unlimited Site <br />Lifetime Update & Support',
                priceColumnBorder: 'none',
                priceColumnDesktopBorderRadiusWidth: { top: '0', right: '0', bottom: '0', left: '0' },
                priceButtonColor: '#0B0C0E',
                priceButtonHoverColor: '#ffffff',
                priceButtonNormalClassicColor: '#F7F7F7',
                priceButtonHoverClassicColor: '#399CFF',
                pricingTopSectionNormalClassicColor: '#DBEFDC',
            },
        ],
    },

    "preset-2": {
        priceFeatureMobilePadding: {top: '0', bottom: '0', left: '0', right: '0'},
        pricingTopSectionTextFontSize: { Desktop: '16', Tablet: '', Mobile: '' },
        pricingTopSectionTextFontWeight: '500',
        pricingTopSectionTextLineHeight: { Desktop: '21', Tablet: '', Mobile: '' },
        pricingTitleFontSize: { Desktop: '18', Tablet: '16', Mobile: '' },
        pricingTitleLineHeight: { Desktop: '18', Tablet: '19', Mobile: '' },
        normalPricingFontSize: { Desktop: '32', Tablet: '', Mobile: '' },
        normalPricingLineHeight: { Desktop: '32', Tablet: '', Mobile: '' },
        normalPricingColor: '#0B0C0E',
        priceCurrencyColor: '#0B0C0E',
        normalPricingFontWeight: '600',
        priceCurrencyFontWeight: '600',
        priceCurrencyFontSize: { Desktop: '32', Tablet: '', Mobile: '' },
        priceCurrencyLineHeight: { Desktop: '32', Tablet: '', Mobile: '' },
        pricingHeaderDesktopPadding: {top: '32', bottom: '32', left: '32', right: '32'},
        pricingHeaderTabletPadding: {top: '32', bottom: '32', left: '32', right: '32'},
        pricingHeaderMobilePadding: {top: '24', bottom: '24', left: '24', right: '24'},
        pricingTitleMobileMargin: { top: '0', bottom: '6', left: '0', right: '0' },
        pricingTitleTabletMargin: { top: '0', bottom: '6', left: '0', right: '0' },
        pricingTitleDesktopMargin: { top: '0', bottom: '6', left: '0', right: '0' },
        priceAfterTextPaddingDesktop: { top: '32', bottom: '10', left: '0', right: '0' },
        headerAlignment: 'left',
        activationContentAlignment: 'left',
        pricingHeaderBorder: 'none',
        priceColumnDesktopMargin: {top: '0', bottom: '0', left: '0', right: '0'},
        pricingGridDesktopPadding: {top: '0', bottom: '0', left: '0', right: '0'},
        priceColumnMobileBorderRadiusWidth: { top: '16', bottom: '16', left: '16', right: '16' },
        pricingGridMobilePadding: { top: '0', bottom: '0', left: '0', right: '0' },
        priceButtonWidth: { Desktop: '100', Tablet: '100', Mobile: '100' },
        priceButtonWidthUnits: { Desktop: '%', Tablet: '%', Mobile: '%' },
        priceButtonDesktopMargin: { top: '24', bottom: '0', left: '0', right: '0' },
        priceButtonDesktopBorderRadiusWidth: { top: '36', bottom: '36', left: '36', right: '36' },
        priceButtonDesktopBorderWidth: { top: '0', bottom: '0', left: '0', right: '0' },
        priceButtonBorder: 'none',
        priceButtonNormalClassicColor: '#0B0C0E',
        priceColumnNormalBackgroundType: 'classic',
        priceColumnNormalClassicColor: '#F7F7F7',
        pricingGridBorderRadiusDesktop: { top: '16', bottom: '16', left: '16', right: '16' },
        priceColumnBorder: 'none',
        priceButtonFontSize: { Desktop: '18', Tablet: '16', Mobile: '' },
        priceButtonLineHeight: { Desktop: '18', Tablet: '16', Mobile: '' },
        priceButtonColor: '#ffffff',
        priceButtonHoverColor: '#ffffff',
        priceGridNormalClassicColor: '',
        pricingHeaderBgColor: '',
        pricingfeatureTitleFontSize: { Desktop: '16', Tablet: '16', Mobile: '16' },
        pricingfeatureTitleLineHeight: { Desktop: '16', Tablet: '16', Mobile: '16' },
        priceFeatureItemDesktopBorder: { top: '0', bottom: '0', left: '0', right: '0' },
        priceFeatureItemTabBorder: { top: '0', bottom: '0', left: '0', right: '0' },
        priceFeatureItemMobileBorder: { top: '0', bottom: '0', left: '0', right: '0' },
        priceFeatureDesktopPadding: { top: '0', bottom: '0', left: '0', right: '0' },
        priceFeatureItemDesktopPadding: { top: '16', bottom: '16', left: '32', right: '16' },
        priceFeatureItemTabPadding: { top: '16', bottom: '16', left: '32', right: '16' },
        priceFeatureItemMobilePadding: { top: '16', bottom: '16', left: '24', right: '16' },
        priceFeatureItemBorder: 'solid',
        priceFeatureItemBorderBottom: true,
        priceFeatureItemDesktopBorder: { top: '0', bottom: '1', left: '0', right: '0' },
        priceFeatureItemTabBorder: { top: '0', bottom: '1', left: '0', right: '0' },
        priceFeatureItemMobileBorder: { top: '0', bottom: '1', left: '0', right: '0' },
        priceFeatureItemBorderColor: '#E1E3E8',
        FeatureListGap: { Desktop: '0', Tablet: '0', Mobile: '0' },
        priceFeatureIconColor: '#0B0C0E',
        priceFeatureAlignment: 'left',
        priceFeatureAreaNormalClassicColor: '',
        priceFeatureDesktopMargin: { top: '0', bottom: '0', left: '0', right: '0' },
        priceFeatureTabletMargin: { top: '0', bottom: '0', left: '0', right: '0' },
        priceFeatureMobileMargin: { top: '0', bottom: '0', left: '0', right: '0' },
        pricingTopSectionNormalClassicColor: '#0B0C0E',
        pricingTopSectionDesktopPadding: { top: '16', bottom: '16', left: '16', right: '16' },
        pricingTopSectionTextColor: '#FFFFFF',
        pricingTopSectionBorderRadiusDesktop: { top: '16', bottom: '0', left: '0', right: '16' },
        priceAfterTextFontSize: { Desktop: '16', Tablet: '14', Mobile: '' },
        priceAfterTextLineHeight: { Desktop: '21', Tablet: '16', Mobile: '' },
        priceAfterTextFontWeight: '700',
        priceAfterTextColor: '#0B0C0E',
        pricePeriodColor: '#2A2F39',

        columns: [
            {
                id: 'column-1',
                pricingTitleTag: 'h2',
                pricingTitle: 'Free',
                pricingSubTitleSwitcher: true,
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '0',
                salePriceSwitcher: false,
                salePrice: '0',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: 'Forever',
                pricePeriodSeparator: '/',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: false,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Landing Page', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: 'HTML + CSS Design', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-6', Title: 'WordPress Themes', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false},
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Download',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceColumnDesktopBorderRadiusWidth: { top: '16', right: '0', bottom: '0', left: '16' },
                priceColumnMobileBorderRadiusWidth: { top: '16', bottom: '16', left: '16', right: '16' },
                priceColumnNormalBackgroundType: 'classic',
                priceColumnNormalClassicColor: '#F7F7F7',
                priceColumnBorder: 'none',
                priceButtonColor: '#ffffff',
                priceButtonHoverColor: '#ffffff',
                pricingTopSectionNormalClassicColor: '#0B0C0E',
                pricingTitleColor: '#4CAF50',
                priceButtonNormalClassicColor: '#4CAF50',
            },
            {
                id: 'column-2',
                pricingTitleTag: 'h2',
                pricingTitle: 'Basic',
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '49',
                salePriceSwitcher: false,
                salePrice: '39',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: 'years',
                pricePeriodSeparator: '/',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: false,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Landing Page', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: 'HTML + CSS Design', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-6', Title: 'WordPress Themes', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false},
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Buy Now',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceColumnDesktopBorderRadiusWidth: { top: '0', right: '0', bottom: '0', left: '0' },
                priceColumnNormalBackgroundType: 'classic',
                priceColumnNormalClassicColor: '#F7F7F7',
                priceColumnMobileBorderRadiusWidth: { top: '16', bottom: '16', left: '16', right: '16' },
                priceColumnBorder: 'none',
                priceButtonColor: '#ffffff',
                priceButtonHoverColor: '#ffffff',
                pricingTopSectionNormalClassicColor: '#0B0C0E',
                pricingTitleColor: '#4CAF50',
                priceButtonNormalClassicColor: '#0B0C0E',
            },
            {
                id: 'column-3',
                pricingTitleTag: 'h2',
                pricingTitle: 'Business',
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '399',
                salePriceSwitcher: false,
                salePrice: '299',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: 'years',
                pricePeriodSeparator: '/',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: false,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Landing Page', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: 'HTML + CSS Design', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-6', Title: 'WordPress Themes', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false},
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Buy Now',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceColumnDesktopBorderRadiusWidth: { top: '0', right: '0', bottom: '0', left: '0' },
                priceColumnMobileBorderRadiusWidth: { top: '16', bottom: '16', left: '16', right: '16' },
                priceColumnNormalBackgroundType: 'classic',
                priceColumnNormalClassicColor: '#FFF6F7',
                priceColumnBorder: 'none',
                priceButtonColor: '#ffffff',
                priceButtonHoverColor: '#ffffff',
                pricingTopSectionNormalClassicColor: '#0B0C0E',
                pricingTitleColor: '#E43242',
                priceButtonNormalClassicColor: '#E43242',
            },
            {
                id: 'column-4',
                pricingTitleTag: 'h2',
                pricingTitle: 'Premium',
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '999',
                salePriceSwitcher: false,
                salePrice: '899',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: 'Lifetime',
                pricePeriodSeparator: '/',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: false,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Landing Page', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: 'HTML + CSS Design', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-6', Title: 'WordPress Themes', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false},
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Buy Now',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceColumnDesktopBorderRadiusWidth: { top: '0', right: '16', bottom: '16', left: '0' },
                priceColumnMobileBorderRadiusWidth: { top: '16', bottom: '16', left: '16', right: '16' },
                priceColumnNormalBackgroundType: 'classic',
                priceColumnNormalClassicColor: '#F7F7F7',
                priceColumnBorder: 'none',
                priceButtonColor: '#ffffff',
                priceButtonHoverColor: '#ffffff',
                pricingTopSectionNormalClassicColor: '#0B0C0E',
                pricingTitleColor: '#399CFF',
                priceButtonNormalClassicColor: '#399CFF',
            },
        ],
    },
    
    "preset-3": {
        priceFeatureMobilePadding: {top: '0', bottom: '0', left: '0', right: '0'},
        pricingTopSectionTextFontSize: { Desktop: '16', Tablet: '', Mobile: '' },
        pricingTopSectionTextFontWeight: '500',
        pricingTopSectionTextLineHeight: { Desktop: '21', Tablet: '', Mobile: '' },
        pricingTitleFontSize: { Desktop: '24', Tablet: '18', Mobile: '' },
        pricingTitleLineHeight: { Desktop: '32', Tablet: '24', Mobile: '' },
        normalPricingFontSize: { Desktop: '48', Tablet: '', Mobile: '' },
        normalPricingLineHeight: { Desktop: '56', Tablet: '', Mobile: '' },
        normalPricingFontWeight: '500',
        priceCurrencyFontSize: { Desktop: '48', Tablet: '', Mobile: '' },
        priceCurrencyLineHeight: { Desktop: '56', Tablet: '', Mobile: '' },
        priceCurrencyFontWeight: '500',
        pricingHeaderDesktopPadding: {top: '24', bottom: '24', left: '24', right: '24'},
        pricingHeaderTabletPadding: {top: '24', bottom: '24', left: '24', right: '24'},
        pricingHeaderMobilePadding: {top: '24', bottom: '24', left: '24', right: '24'},
        headerAlignment: 'left',
        activationContentAlignment: 'left',
        pricingHeaderBorderDesktop: {top: '0', bottom: '0', left: '0', right: '0'},
        pricingHeaderBorderTablet: {top: '0', bottom: '0', left: '0', right: '0'},
        pricingHeaderBorderColor: '#E1E3E8',
        pricingHeaderBorder: 'none',
        pricingHeaderBorderRadiusDesktop: {top: '16', bottom: '16', left: '16', right: '16'},
        priceColumnDesktopMargin: {top: '0', bottom: '0', left: '0', right: '0'},
        pricingGridDesktopPadding: {top: '46', bottom: '0', left: '0', right: '0'},
        priceColumnMobileBorderRadiusWidth: { top: '0', bottom: '0', left: '0', right: '0' },
        pricingGridMobilePadding: { top: '0', bottom: '0', left: '0', right: '0' },
        priceButtonWidth: { Desktop: '100', Tablet: '100', Mobile: '100' }, 
        priceButtonWidthUnits: { Desktop: '%', Tablet: '%', Mobile: '%' },
        priceButtonDesktopMargin: { top: '16', bottom: '0', left: '0', right: '0' },
        priceButtonDesktopBorderRadiusWidth: { top: '8', bottom: '8', left: '8', right: '8' },
        priceButtonDesktopBorderWidth: { top: '0', bottom: '0', left: '0', right: '0' },
        priceButtonBorder: 'none',
        priceButtonNormalClassicColor: '#0B0C0E',
        priceColumnNormalBackgroundType: 'classic',
        priceColumnNormalClassicColor: '#ffffff',
        pricingGridBorderRadiusDesktop: { top: '0', bottom: '0', left: '0', right: '0' },
        priceColumnBorder: 'none',
        priceButtonFontSize: { Desktop: '18', Tablet: '16', Mobile: '' },
        priceButtonLineHeight: { Desktop: '24', Tablet: '19', Mobile: '' },
        priceButtonColor: '#ffffff',
        priceButtonHoverColor: '#ffffff',
        priceGridNormalClassicColor: '',
        pricingHeaderBgColor: '#F7F7F7',
        priceFeatureItemDesktopBorder: { top: '0', bottom: '1', left: '0', right: '0' },
        priceFeatureItemTabBorder: { top: '0', bottom: '1', left: '0', right: '0' },
        priceFeatureItemMobileBorder: { top: '0', bottom: '1', left: '0', right: '0' },
        priceFeatureDesktopPadding: { top: '0', bottom: '0', left: '0', right: '0' },
        priceFeatureItemDesktopPadding: { top: '14', bottom: '14', left: '10', right: '10' },
        priceFeatureItemTabPadding: { top: '14', bottom: '14', left: '10', right: '10' },
        priceFeatureItemMobilePadding: { top: '14', bottom: '14', left: '10', right: '10' },
        priceFeatureItemBorder: 'solid',
        priceFeatureItemBorderBottom: false,
        priceFeatureItemBorderColor: '#E1E3E8',
        FeatureListGap: { Desktop: '0', Tablet: '', Mobile: '' },
        priceFeatureIconColor: '#399CFF',
        priceFeatureAlignment: 'left',
        priceFeatureAreaNormalClassicColor: '#ffffff',
        priceFeatureDesktopMargin: { top: '32', bottom: '0', left: '0', right: '0' },
        priceFeatureMobileMargin: { top: '24', bottom: '0', left: '0', right: '0' },
        pricingTopSectionNormalClassicColor: '#399CFF',
        pricingTopSectionDesktopPadding: { top: '12', bottom: '4', left: '4', right: '4' },
        pricingTopSectionTextColor: '#FFFFFF',
        pricingTopSectionBorderRadiusDesktop: { top: '20', bottom: '20', left: '20', right: '20' },
        gridColumnGap: { Desktop: '0', Tablet: '0', Mobile: '0' },
        gridRowGap: { Desktop: '30', Tablet: '30', Mobile: '30' },
        pricingSubtitleColor: '#404655',
        pricingSubtitleDesktopMargin: { top: '8', bottom: '0', left: '0', right: '0' },
        pricingSubtitleTabletMargin: { top: '8', bottom: '0', left: '0', right: '0' },
        pricingSubtitleMobileMargin: { top: '8', bottom: '0', left: '0', right: '0' },
        priceFeatureAfterTextSwitcher: true,
        priceFeatureAfterText: 'Billed every year Popular amongst entrepeneurs $497 per year',
        pricingTitleDesktopMargin: { top: '0', bottom: '0', left: '0', right: '0' },

        columns: [
            {
                id: 'column-1',
                pricingSectionTopSwitcher: false,
                pricingSectionTopText: 'Personal Package',
                pricingTitleTag: 'h2',
                pricingTitle: 'Basic Plan',
                pricingSubTitleSwitcher: true,
                pricingSubTitleTag: 'span',
                pricingSubTitle: 'Best for Business Owners.',
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '49',
                salePriceSwitcher: false,
                salePrice: '45',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: 'month',
                pricePeriodSeparator: '/',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: true,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Support 1 year', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: '25% Renewal Discount', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-7', Title: 'Google Reviews', FeatureIcon: 'circle-xmark', FeatureIconAlign: 'icon', Disabled: false },
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Select Plan',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceAfterText: 'Activation on 1 Site',
                priceColumnDesktopBorderRadiusWidth: { top: '0', right: '0', bottom: '0', left: '0' },
                priceColumnMobileBorderRadiusWidth: { top: '0', bottom: '0', left: '0', right: '0' },
                priceColumnNormalBackgroundType: 'classic',
                priceColumnNormalClassicColor: '#ffffff',
                priceColumnBorder: 'none',
                priceButtonColor: '#ffffff',
                priceButtonHoverColor: '#ffffff',
                priceButtonNormalClassicColor: '#15171C',
                priceFeatureAfterTextSwitcher: true,
                priceFeatureAfterText: 'Billed every year Popular amongst entrepeneurs $497 per year',
            },
            {
                id: 'column-2',
                pricingSectionTopSwitcher: true,
                pricingSectionTopText: 'Most Popular',
                pricingTitleTag: 'h2',
                pricingTitle: 'Enterprise',
                pricingSubTitleSwitcher: true,
                pricingSubTitleTag: 'span',
                pricingSubTitle: 'Best for Business Owners.',
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '449',
                salePriceSwitcher: false,
                salePrice: '39',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: 'month',
                pricePeriodSeparator: '/',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: true,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Support 1 year', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: '25% Renewal Discount', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-7', Title: 'Google Reviews', FeatureIcon: 'circle-xmark', FeatureIconAlign: 'icon', Disabled: false },
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Select Plan',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceAfterTextSwitcher: true,
                priceAfterText: 'Activation on 2 Site',
                priceColumnDesktopBorderRadiusWidth: { top: '0', right: '0', bottom: '0', left: '0' },
                priceColumnNormalBackgroundType: 'classic',
                priceColumnNormalClassicColor: '#ffffff',
                priceColumnMobileBorderRadiusWidth: { top: '0', bottom: '0', left: '0', right: '0' },
                priceColumnBorder: 'none',
                priceButtonColor: '#ffffff',
                priceButtonHoverColor: '#ffffff',
                pricingTopSectionNormalClassicColor: '#399CFF',
                priceButtonNormalClassicColor: '#399CFF',
                priceFeatureAfterTextSwitcher: true,
                priceFeatureAfterText: 'Billed every year Popular amongst entrepeneurs $497 per year',
            },
            {
                id: 'column-3',
                pricingSectionTopSwitcher: false,
                pricingSectionTopText: 'Lifetime Package',
                pricingTitleTag: 'h2',
                pricingTitle: 'Pro Plan',
                pricingSubTitleSwitcher: true,
                pricingSubTitleTag: 'span',
                pricingSubTitle: 'Best for Business Owners.',
                pricingIconAlign: 'none',
                pricingIcon: 'bookmark',
                normalPrice: '999',
                salePriceSwitcher: false,
                salePrice: '149',
                priceCurrency: '$',
                priceCurrencyPosition: 'left',
                pricePeriod: 'month',
                pricePeriodSeparator: '/',
                priceHideFeaturesSwitcher: true,
                priceFeatureIconSwitcher: true,
                priceFeatureItems: [
                    { id: 'item-1', Title: 'Support 1 year', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-2', Title: '25% Renewal Discount', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                    { id: 'item-7', Title: 'Google Reviews', FeatureIcon: 'circle-check', FeatureIconAlign: 'icon', Disabled: false },
                ],
                priceButtonSwitcher: true,
                priceButtonText: 'Select Plan',
                priceButtonUrl: '',
                priceButtonTargetUrl: false,
                priceButtonIconAlign: 'none',
                priceButtonIcon: 'arrow-right',
                priceButtonIconPosition: 'right',
                priceButtonIconSpacing: { Desktop: '10', Tablet: '', Mobile: '' },
                priceButtonIconSpacingUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
                priceAfterTextSwitcher: true,
                priceAfterText: 'Activation on 3 Site', 
                priceColumnDesktopBorderRadiusWidth: { top: '0', right: '0', bottom: '0', left: '0' },
                priceColumnMobileBorderRadiusWidth: { top: '0', bottom: '0', left: '0', right: '0' },
                priceColumnNormalBackgroundType: 'classic',
                priceColumnNormalClassicColor: '#ffffff',
                priceColumnBorder: 'none',
                priceButtonColor: '#ffffff',
                priceButtonHoverColor: '#ffffff',
                pricingTopSectionNormalClassicColor: '',
                priceButtonNormalClassicColor: '#15171C',
                priceFeatureAfterTextSwitcher: true,
                priceFeatureAfterText: 'Billed every year Popular amongst entrepeneurs $497 per year',
            },
        ],
    },
};

export const pricingTablePresets = [
    {
        value: 'default',
        label: __('Default', 'frontis-blocks'),
        attributes: Object.entries(pricingPresetStyles['default']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g filter="url(#filter0_d_16980_14429)">
                    <rect x="69" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14429)">
                    <rect x="141" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14429)">
                    <rect x="213" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter3_i_16980_14429)">
                    <path d="M171.393 199.01C171.304 198.626 171.325 198.224 171.452 197.85C171.58 197.477 171.809 197.146 172.113 196.895C172.418 196.645 172.786 196.483 173.177 196.43C173.568 196.377 173.967 196.434 174.327 196.594L193.742 205.232C195.606 206.06 195.341 208.789 193.353 209.245L185.177 211.117C184.86 211.19 184.563 211.334 184.31 211.54C184.058 211.745 183.856 212.006 183.72 212.302L180.137 220.131C179.293 221.977 176.588 221.7 176.134 219.72L171.393 199.01Z" fill="#404655"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14429" x="68" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14429" x="140" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14429" x="212" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter3_i_16980_14429" x="171.339" y="196.41" width="23.6631" height="25.2443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="0.283333"/>
                    <feGaussianBlur stdDeviation="0.708333"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_16980_14429"/>
                    </filter>
                    </defs>
                </svg>`,
    },
    {
        value: 'preset-1',
        label: __('Preset 1', 'frontis-blocks'),
        attributes: Object.entries(pricingPresetStyles['preset-1']).map(([label, value]) => ({ label, value })), // Using default as base
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g filter="url(#filter0_d_16980_14429)">
                    <rect x="69" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14429)">
                    <rect x="141" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14429)">
                    <rect x="213" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter3_i_16980_14429)">
                    <path d="M171.393 199.01C171.304 198.626 171.325 198.224 171.452 197.85C171.58 197.477 171.809 197.146 172.113 196.895C172.418 196.645 172.786 196.483 173.177 196.43C173.568 196.377 173.967 196.434 174.327 196.594L193.742 205.232C195.606 206.06 195.341 208.789 193.353 209.245L185.177 211.117C184.86 211.19 184.563 211.334 184.31 211.54C184.058 211.745 183.856 212.006 183.72 212.302L180.137 220.131C179.293 221.977 176.588 221.7 176.134 219.72L171.393 199.01Z" fill="#404655"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14429" x="68" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14429" x="140" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14429" x="212" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter3_i_16980_14429" x="171.339" y="196.41" width="23.6631" height="25.2443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="0.283333"/>
                    <feGaussianBlur stdDeviation="0.708333"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_16980_14429"/>
                    </filter>
                    </defs>
                </svg>`,
    },
    {
        value: 'preset-2',
        label: __('Preset 2', 'frontis-blocks'),
        attributes: Object.entries(pricingPresetStyles['preset-2']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g filter="url(#filter0_d_16980_14429)">
                    <rect x="69" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14429)">
                    <rect x="141" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14429)">
                    <rect x="213" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter3_i_16980_14429)">
                    <path d="M171.393 199.01C171.304 198.626 171.325 198.224 171.452 197.85C171.58 197.477 171.809 197.146 172.113 196.895C172.418 196.645 172.786 196.483 173.177 196.43C173.568 196.377 173.967 196.434 174.327 196.594L193.742 205.232C195.606 206.06 195.341 208.789 193.353 209.245L185.177 211.117C184.86 211.19 184.563 211.334 184.31 211.54C184.058 211.745 183.856 212.006 183.72 212.302L180.137 220.131C179.293 221.977 176.588 221.7 176.134 219.72L171.393 199.01Z" fill="#404655"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14429" x="68" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14429" x="140" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14429" x="212" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter3_i_16980_14429" x="171.339" y="196.41" width="23.6631" height="25.2443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="0.283333"/>
                    <feGaussianBlur stdDeviation="0.708333"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_16980_14429"/>
                    </filter>
                    </defs>
                </svg>`,
    },
    {
        value: 'preset-3',
        label: __('Preset 3', 'frontis-blocks'),
        attributes: Object.entries(pricingPresetStyles['preset-3']).map(([label, value]) => ({ label, value })),
        icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                    <g filter="url(#filter0_d_16980_14429)">
                    <rect x="69" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter1_d_16980_14429)">
                    <rect x="141" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter2_d_16980_14429)">
                    <rect x="213" y="94" width="66" height="88" fill="white"/>
                    </g>
                    <g filter="url(#filter3_i_16980_14429)">
                    <path d="M171.393 199.01C171.304 198.626 171.325 198.224 171.452 197.85C171.58 197.477 171.809 197.146 172.113 196.895C172.418 196.645 172.786 196.483 173.177 196.43C173.568 196.377 173.967 196.434 174.327 196.594L193.742 205.232C195.606 206.06 195.341 208.789 193.353 209.245L185.177 211.117C184.86 211.19 184.563 211.334 184.31 211.54C184.058 211.745 183.856 212.006 183.72 212.302L180.137 220.131C179.293 221.977 176.588 221.7 176.134 219.72L171.393 199.01Z" fill="#404655"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_16980_14429" x="68" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter1_d_16980_14429" x="140" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter2_d_16980_14429" x="212" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                    </filter>
                    <filter id="filter3_i_16980_14429" x="171.339" y="196.41" width="23.6631" height="25.2443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="0.283333"/>
                    <feGaussianBlur stdDeviation="0.708333"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_16980_14429"/>
                    </filter>
                    </defs>
                </svg>`,
    },
   
];