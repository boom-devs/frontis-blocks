/**
* Tabs Block Style Generation
* Returns Dynamic Generated CSS
*/

import getCustomCss from '@Utils/getCustomCss';

/**
* Generate block styles from attributes
* @param {Object} attributes-Block attributes
* @returns {string} CSS string
*/
const generateTabsStyle = (attributes) => {
    const { 
        blockID,
        blockStyle,
        tabLayoutSwitcher,
        tabsItems,
        tabTitleTag,
        tabDescriptionTag,
        tabListAlignment,

        showIcon,
        showTitle,
        showDescription,
        fillTitlesWrapper,

        /** Tab Wrapper */
        tabWrapperBgColorTypeSwitcher,
        tabWrapperBgColorType,
        tabWrapperBgHoverColorType,
        tabWrapperBgColor, 
        tabWrapperBgHoverColor,
        tabWrapperBgGradientColor,
        tabWrapperBgHoverGradientColor,
        tabWrapperBgCustomGradientColorSwitcher,
        tabWrapperBgCustomGradientColor,
        tabWrapperBgHoverCustomGradientColorSwitcher,
        tabWrapperBgHoverCustomGradientColor,

        tabWrapperPaddingUnits,
        tabWrapperPaddingDesktop,
        tabWrapperPaddingTablet,
        tabWrapperPaddingMobile,
        tabWrapperPaddingLink,

        tabWrapperMarginUnits,
        tabWrapperMarginDesktop,
        tabWrapperMarginTablet,
        tabWrapperMarginMobile,
        tabWrapperMarginLink,

        tabWrapperBorder,
        tabWrapperBorderColorSwitcher,
        tabWrapperBorderColor,
        tabWrapperBorderHoverColor,

        tabWrapperBorderUnits, 
        tabWrapperBorderDesktop,
        tabWrapperBorderTablet,
        tabWrapperBorderMobile,
        tabWrapperBorderLink,

        tabWrapperBorderRadiusUnits,
        tabWrapperBorderRadiusDesktop,
        tabWrapperBorderRadiusTablet,
        tabWrapperBorderRadiusMobile,
        tabWrapperBorderRadiusLink,
        /** End Tab Wrapper */

        /** Tab List */
        tabListMinWidth,
        tabListMinWidthUnits,
        tabListItemGap,
        tabListItemGapUnits,
        tabWrapperGap,
        tabWrapperGapUnits,

        tabListBgColorTypeSwitcher,
        tabListBgColorType,
        tabListBgHoverColorType,
        tabListBgColor, 
        tabListBgHoverColor,
        tabListBgGradientColor,
        tabListBgHoverGradientColor,
        tabListBgCustomGradientColorSwitcher,
        tabListBgCustomGradientColor,
        tabListBgHoverCustomGradientColorSwitcher,
        tabListBgHoverCustomGradientColor,

        tabListActiveBgColorTypeSwitcher,
        tabListActiveBgColorType,
        tabListActiveBgHoverColorType,
        tabListActiveBgColor, 
        tabListActiveBgHoverColor,
        tabListActiveBgGradientColor,
        tabListActiveBgHoverGradientColor,
        tabListActiveBgCustomGradientColorSwitcher,
        tabListActiveBgCustomGradientColor,
        tabListActiveBgHoverCustomGradientColorSwitcher,
        tabListActiveBgHoverCustomGradientColor,

        tabListPaddingUnits,
        tabListPaddingDesktop,
        tabListPaddingTablet,
        tabListPaddingMobile,
        tabListPaddingLink,

        tabListMarginUnits,
        tabListMarginDesktop,
        tabListMarginTablet,
        tabListMarginMobile,
        tabListMarginLink,

        tabListBorder,
        tabListBorderColorSwitcher,
        tabListBorderColor,
        tabListActiveBorderColor,
        tabListBorderHoverColor,

        tabListBorderUnits,
        tabListBorderDesktop,
        tabListBorderTablet,
        tabListBorderMobile,
        tabListBorderLink,

        tabListBorderRadiusUnits,
        tabListBorderRadiusDesktop,
        tabListBorderRadiusTablet,
        tabListBorderRadiusMobile,
        tabListBorderRadiusLink,
        /** End Tab list Wrapper */

        /** Tab Title Styles */
        tabTitleGlobalTypographyData,
        tabTitleGlobalTypoSwitcher,
        tabTitleGlobalTypoType,
        tabTitleGlobalTypoOption,
        tabTitleFontFamily,
        tabTitleFontSize,
        tabTitleFontSizeUnits,
        tabTitleFontWeight,
        tabTitleFontStyle,
        tabTitleTextTransform,
        tabTitleTextDecoration,
        tabTitleLetterSpacing,
        tabTitleLetterSpacingUnits,
        tabTitleLineHeight,
        tabTitleLineHeightUnits,

        tabTitleColorSwitcher,
        tabTitleColor,
        tabTitleActiveColor,
        tabTitleHoverColor,

        tabTitlePaddingUnits,
        tabTitlePaddingDesktop,
        tabTitlePaddingTablet,
        tabTitlePaddingMobile,
        tabTitlePaddingLink,

        tabTitleMarginUnits,
        tabTitleMarginDesktop,
        tabTitleMarginTablet,
        tabTitleMarginMobile,
        tabTitleMarginLink,

        tabTitleBorder,
        tabTitleBorderColorSwitcher,
        tabTitleBorderColor,
        tabTitleBorderHoverColor,

        tabTitleBorderUnits,
        tabTitleBorderDesktop,
        tabTitleBorderTablet,
        tabTitleBorderMobile,
        tabTitleBorderLink,

        tabTitleBorderRadiusUnits,
        tabTitleBorderRadiusDesktop,
        tabTitleBorderRadiusTablet,
        tabTitleBorderRadiusMobile,
        tabTitleBorderRadiusLink,
        /** End Title Style */

        /** Tab Description Styles */
        tabDescriptionGlobalTypographyData,
        tabDescriptionGlobalTypoSwitcher,
        tabDescriptionGlobalTypoType,
        tabDescriptionGlobalTypoOption,
        tabDescriptionFontFamily,
        tabDescriptionFontSize,
        tabDescriptionFontSizeUnits,
        tabDescriptionFontWeight,
        tabDescriptionFontStyle,
        tabDescriptionTextTransform,
        tabDescriptionTextDecoration,
        tabDescriptionLetterSpacing,
        tabDescriptionLetterSpacingUnits,
        tabDescriptionLineHeight,
        tabDescriptionLineHeightUnits,

        tabDescriptionColorSwitcher,
        tabDescriptionColor,
        tabDescriptionActiveColor,
        tabDescriptionHoverColor,

        tabDescriptionPaddingUnits,
        tabDescriptionPaddingDesktop,
        tabDescriptionPaddingTablet,
        tabDescriptionPaddingMobile,
        tabDescriptionPaddingLink,

        tabDescriptionMarginUnits,
        tabDescriptionMarginDesktop,
        tabDescriptionMarginTablet,
        tabDescriptionMarginMobile,
        tabDescriptionMarginLink,

        tabDescriptionBorder,
        tabDescriptionBorderColorSwitcher,
        tabDescriptionBorderColor,
        tabDescriptionBorderHoverColor,

        tabDescriptionBorderUnits,
        tabDescriptionBorderDesktop,
        tabDescriptionBorderTablet,
        tabDescriptionBorderMobile,
        tabDescriptionBorderLink,

        tabDescriptionBorderRadiusUnits,
        tabDescriptionBorderRadiusDesktop,
        tabDescriptionBorderRadiusTablet,
        tabDescriptionBorderRadiusMobile,
        tabDescriptionBorderRadiusLink,
        /** End Description Style */

        /** Tab Icon Styles */
        tabIconPosition,
        tabIconSize,
        tabIconSizeUnits,
        tabIconColorSwitcher,
        tabIconColor,
        tabIconActiveColor,
        tabIconHoverColor,

        /** Start Background */
        tabIconBgColorSwitcher,
        tabIconNormalBackgroundType,
        tabIconBgColor,
        tabIconNormalGradientColor,
        tabIconNormalCustomGradientSwitcher,
        tabIconNormalCustomGradientInputValue,

        tabIconHoverBackgroundType,
        tabIconBgHoverColor,
        tabIconHoverGradientColor,
        tabIconHoverCustomGradientSwitcher,
        tabIconHoverCustomGradientInputValue,
        
        //Active BG
        tabIconBgActiveColorSwitcher,
        tabIconActiveNormalBackgroundType,
        tabIconBgActiveColor,
        tabIconActiveNormalGradientColor,
        tabIconActiveNormalCustomGradientSwitcher,
        tabIconActiveNormalCustomGradientInputValue,

        tabIconActiveHoverBackgroundType,
        tabIconBgActiveHoverColor,
        tabIconActiveHoverGradientColor,
        tabIconActiveHoverCustomGradientSwitcher,
        tabIconActiveHoverCustomGradientInputValue,
        /** End Background */

        tabIconBorder,
        tabIconBorderColorSwitcher,
        tabIconBorderColor,
        tabIconBorderHoverColor,
        tabIconBorderUnits,
        tabIconBorderDesktop,
        tabIconBorderTablet,
        tabIconBorderMobile,
        tabIconBorderLink,
        tabIconBorderRadiusUnits,
        tabIconBorderRadiusDesktop,
        tabIconBorderRadiusTablet,
        tabIconBorderRadiusMobile,
        tabIconBorderRadiusLink,

        /** Start Icon Padding */
        tabIconPaddingUnits,
        tabIconPaddingDesktop,
        tabIconPaddingTablet,
        tabIconPaddingMobile,
        tabIconPaddingLink,
        /** End Icon Padding */

        tabIconRotateSwitcher,
        tabIconRotate,
        tabIconRotateHover,

        tabIconImageWidth,
        tabIconImageWidthUnits,
        tabIconImageHeight,
        tabIconImageHeightUnits,
        tabIconImageRotateSwitcher,
        tabIconImageRotate,
        tabIconImageRotateHover,
        /** End Icon Styles */

        /** Tab Content Styles */
        tabContentBgColorTypeSwitcher,
        tabContentBgColorType,
        tabContentBgHoverColorType,
        tabContentBgColor, 
        tabContentBgHoverColor,
        tabContentBgGradientColor,
        tabContentBgHoverGradientColor,
        tabContentBgCustomGradientColorSwitcher,
        tabContentBgCustomGradientColor,
        tabContentBgHoverCustomGradientColorSwitcher,
        tabContentBgHoverCustomGradientColor,

        tabContentPaddingUnits,
        tabContentPaddingDesktop,
        tabContentPaddingTablet,
        tabContentPaddingMobile,
        tabContentPaddingLink,

        tabContentMarginUnits,
        tabContentMarginDesktop,
        tabContentMarginTablet,
        tabContentMarginMobile,
        tabContentMarginLink,

        tabContentBorder,
        tabContentBorderColorSwitcher,
        tabContentBorderColor,
        tabContentBorderHoverColor,

        tabContentBorderUnits, 
        tabContentBorderDesktop,
        tabContentBorderTablet,
        tabContentBorderMobile,
        tabContentBorderLink,

        tabContentBorderRadiusUnits,
        tabContentBorderRadiusDesktop,
        tabContentBorderRadiusTablet,
        tabContentBorderRadiusMobile,
        tabContentBorderRadiusLink,
        /** End Tab Content */

        tabGlobalZIndex,
        tabGlobalWraperID,
        tabGlobalWraperClass,
    
        /** Padding */
        tabGlobalPaddingUnits,
        tabGlobalPaddingDesktop,
        tabGlobalPaddingTablet,
        tabGlobalPaddingMobile,
        tabGlobalPaddingLink,
    
        /** Margin */
        tabGlobalMarginUnits,
        tabGlobalMarginDesktop,
        tabGlobalMarginTablet,
        tabGlobalMarginMobile,
        tabGlobalMarginLink,
    
        /** Background */
        tabGlobalBgColorTypeSwitcher,
        tabGlobalBgColorType,
        tabGlobalBgHoverColorType,
        tabGlobalBgColor,
        tabGlobalBgHoverColor,
        tabGlobalBgGradientColor,
        tabGlobalBgHoverGradientColor,
        tabGlobalBgCustomGradientColorSwitcher,
        tabGlobalBgCustomGradientColor,
        tabGlobalBgHoverCustomGradientColorSwitcher,
        tabGlobalBgHoverCustomGradientColor,
    
        /** Border */
        tabGlobalBorder,
        tabGlobalBorderColorSwitcher,
        tabGlobalBorderColor,
        tabGlobalBorderHoverColor,
        tabGlobalBorderUnits,
        tabGlobalBorderDesktop,
        tabGlobalBorderTablet,
        tabGlobalBorderMobile,
        tabGlobalBorderLink,
    
        /** Border Radius */
        tabGlobalBorderRadiusUnits,
        tabGlobalBorderRadiusDesktop,
        tabGlobalBorderRadiusTablet,
        tabGlobalBorderRadiusMobile,
        tabGlobalBorderRadiusLink,
    
        /** Box Shadow */
        tabGlobalBoxShadowSwitcher,
        tabGlobalBoxShadowValues,
        tabGlobalBoxShadowCssValue,
        tabGlobalBoxShadowHoverValues,
        tabGlobalBoxShadowHoverCssValue,
    
        /** Custom CSS */
        tabGlobalCustomCSS,

        tabTitlesAlignment

    } = attributes;

    const tabWrapperPaddingDesktopWidth = `${tabWrapperPaddingDesktop?.top}${tabWrapperPaddingUnits?.Desktop} ${tabWrapperPaddingDesktop?.right}${tabWrapperPaddingUnits?.Desktop} ${tabWrapperPaddingDesktop?.bottom}${tabWrapperPaddingUnits?.Desktop} ${tabWrapperPaddingDesktop?.left}${tabWrapperPaddingUnits?.Desktop}`;
    const tabWrapperPaddingTabletWidth = `${tabWrapperPaddingTablet?.top}${tabWrapperPaddingUnits?.Tablet} ${tabWrapperPaddingTablet?.right}${tabWrapperPaddingUnits?.Tablet} ${tabWrapperPaddingTablet?.bottom}${tabWrapperPaddingUnits?.Tablet} ${tabWrapperPaddingTablet?.left}${tabWrapperPaddingUnits?.Tablet}`;
    const tabWrapperPaddingMobileWidth = `${tabWrapperPaddingMobile?.top}${tabWrapperPaddingUnits?.Mobile} ${tabWrapperPaddingMobile?.right}${tabWrapperPaddingUnits?.Mobile} ${tabWrapperPaddingMobile?.bottom}${tabWrapperPaddingUnits?.Mobile} ${tabWrapperPaddingMobile?.left}${tabWrapperPaddingUnits?.Mobile}`;

    const tabWrapperMarginDesktopWidth = `${tabWrapperMarginDesktop?.top}${tabWrapperMarginUnits?.Desktop} ${tabWrapperMarginDesktop?.right}${tabWrapperMarginUnits?.Desktop} ${tabWrapperMarginDesktop?.bottom}${tabWrapperMarginUnits?.Desktop} ${tabWrapperMarginDesktop?.left}${tabWrapperMarginUnits?.Desktop}`;
    const tabWrapperMarginTabletWidth = `${tabWrapperMarginTablet?.top}${tabWrapperMarginUnits?.Tablet} ${tabWrapperMarginTablet?.right}${tabWrapperMarginUnits?.Tablet} ${tabWrapperMarginTablet?.bottom}${tabWrapperMarginUnits?.Tablet} ${tabWrapperMarginTablet?.left}${tabWrapperMarginUnits?.Tablet}`;
    const tabWrapperMarginMobileWidth = `${tabWrapperMarginMobile?.top}${tabWrapperMarginUnits?.Mobile} ${tabWrapperMarginMobile?.right}${tabWrapperMarginUnits?.Mobile} ${tabWrapperMarginMobile?.bottom}${tabWrapperMarginUnits?.Mobile} ${tabWrapperMarginMobile?.left}${tabWrapperMarginUnits?.Mobile}`;
    
    const tabWrapperBorderDesktopWidth = `${tabWrapperBorderDesktop?.top}${tabWrapperBorderUnits?.Desktop} ${tabWrapperBorderDesktop?.right}${tabWrapperBorderUnits?.Desktop} ${tabWrapperBorderDesktop?.bottom}${tabWrapperBorderUnits?.Desktop} ${tabWrapperBorderDesktop?.left}${tabWrapperBorderUnits?.Desktop}`;
    const tabWrapperBorderTabletWidth = `${tabWrapperBorderTablet?.top}${tabWrapperBorderUnits?.Tablet} ${tabWrapperBorderTablet?.right}${tabWrapperBorderUnits?.Tablet} ${tabWrapperBorderTablet?.bottom}${tabWrapperBorderUnits?.Tablet} ${tabWrapperBorderTablet?.left}${tabWrapperBorderUnits?.Tablet}`;
    const tabWrapperBorderMobileWidth = `${tabWrapperBorderMobile?.top}${tabWrapperBorderUnits?.Mobile} ${tabWrapperBorderMobile?.right}${tabWrapperBorderUnits?.Mobile} ${tabWrapperBorderMobile?.bottom}${tabWrapperBorderUnits?.Mobile} ${tabWrapperBorderMobile?.left}${tabWrapperBorderUnits?.Mobile}`;

    const tabWrapperBorderRadiusDesktopWidth = `${tabWrapperBorderRadiusDesktop?.top}${tabWrapperBorderRadiusUnits?.Desktop} ${tabWrapperBorderRadiusDesktop?.right}${tabWrapperBorderRadiusUnits?.Desktop} ${tabWrapperBorderRadiusDesktop?.bottom}${tabWrapperBorderRadiusUnits?.Desktop} ${tabWrapperBorderRadiusDesktop?.left}${tabWrapperBorderRadiusUnits?.Desktop}`;
    const tabWrapperBorderRadiusTabletWidth = `${tabWrapperBorderRadiusTablet?.top}${tabWrapperBorderRadiusUnits?.Tablet} ${tabWrapperBorderRadiusTablet?.right}${tabWrapperBorderRadiusUnits?.Tablet} ${tabWrapperBorderRadiusTablet?.bottom}${tabWrapperBorderRadiusUnits?.Tablet} ${tabWrapperBorderRadiusTablet?.left}${tabWrapperBorderRadiusUnits?.Tablet}`;
    const tabWrapperBorderRadiusMobileWidth = `${tabWrapperBorderRadiusMobile?.top}${tabWrapperBorderRadiusUnits?.Mobile} ${tabWrapperBorderRadiusMobile?.right}${tabWrapperBorderRadiusUnits?.Mobile} ${tabWrapperBorderRadiusMobile?.bottom}${tabWrapperBorderRadiusUnits?.Mobile} ${tabWrapperBorderRadiusMobile?.left}${tabWrapperBorderRadiusUnits?.Mobile}`;

    const tabListPaddingDesktopWidth = `${tabListPaddingDesktop?.top}${tabListPaddingUnits?.Desktop} ${tabListPaddingDesktop?.right}${tabListPaddingUnits?.Desktop} ${tabListPaddingDesktop?.bottom}${tabListPaddingUnits?.Desktop} ${tabListPaddingDesktop?.left}${tabListPaddingUnits?.Desktop}`;
    const tabListPaddingTabletWidth = `${tabListPaddingTablet?.top}${tabListPaddingUnits?.Tablet} ${tabListPaddingTablet?.right}${tabListPaddingUnits?.Tablet} ${tabListPaddingTablet?.bottom}${tabListPaddingUnits?.Tablet} ${tabListPaddingTablet?.left}${tabListPaddingUnits?.Tablet}`;
    const tabListPaddingMobileWidth = `${tabListPaddingMobile?.top}${tabListPaddingUnits?.Mobile} ${tabListPaddingMobile?.right}${tabListPaddingUnits?.Mobile} ${tabListPaddingMobile?.bottom}${tabListPaddingUnits?.Mobile} ${tabListPaddingMobile?.left}${tabListPaddingUnits?.Mobile}`;

    const tabListMarginDesktopWidth = `${tabListMarginDesktop?.top}${tabListMarginUnits?.Desktop} ${tabListMarginDesktop?.right}${tabListMarginUnits?.Desktop} ${tabListMarginDesktop?.bottom}${tabListMarginUnits?.Desktop} ${tabListMarginDesktop?.left}${tabListMarginUnits?.Desktop}`;
    const tabListMarginTabletWidth = `${tabListMarginTablet?.top}${tabListMarginUnits?.Tablet} ${tabListMarginTablet?.right}${tabListMarginUnits?.Tablet} ${tabListMarginTablet?.bottom}${tabListMarginUnits?.Tablet} ${tabListMarginTablet?.left}${tabListMarginUnits?.Tablet}`;
    const tabListMarginMobileWidth = `${tabListMarginMobile?.top}${tabListMarginUnits?.Mobile} ${tabListMarginMobile?.right}${tabListMarginUnits?.Mobile} ${tabListMarginMobile?.bottom}${tabListMarginUnits?.Mobile} ${tabListMarginMobile?.left}${tabListMarginUnits?.Mobile}`;

    const tabListBorderDesktopWidth = `${tabListBorderDesktop?.top}${tabListBorderUnits?.Desktop} ${tabListBorderDesktop?.right}${tabListBorderUnits?.Desktop} ${tabListBorderDesktop?.bottom}${tabListBorderUnits?.Desktop} ${tabListBorderDesktop?.left}${tabListBorderUnits?.Desktop}`;
    const tabListBorderTabletWidth = `${tabListBorderTablet?.top}${tabListBorderUnits?.Tablet} ${tabListBorderTablet?.right}${tabListBorderUnits?.Tablet} ${tabListBorderTablet?.bottom}${tabListBorderUnits?.Tablet} ${tabListBorderTablet?.left}${tabListBorderUnits?.Tablet}`;
    const tabListBorderMobileWidth = `${tabListBorderMobile?.top}${tabListBorderUnits?.Mobile} ${tabListBorderMobile?.right}${tabListBorderUnits?.Mobile} ${tabListBorderMobile?.bottom}${tabListBorderUnits?.Mobile} ${tabListBorderMobile?.left}${tabListBorderUnits?.Mobile}`;

    const tabListBorderRadiusDesktopWidth = `${tabListBorderRadiusDesktop?.top}${tabListBorderRadiusUnits?.Desktop} ${tabListBorderRadiusDesktop?.right}${tabListBorderRadiusUnits?.Desktop} ${tabListBorderRadiusDesktop?.bottom}${tabListBorderRadiusUnits?.Desktop} ${tabListBorderRadiusDesktop?.left}${tabListBorderRadiusUnits?.Desktop}`;
    const tabListBorderRadiusTabletWidth = `${tabListBorderRadiusTablet?.top}${tabListBorderRadiusUnits?.Tablet} ${tabListBorderRadiusTablet?.right}${tabListBorderRadiusUnits?.Tablet} ${tabListBorderRadiusTablet?.bottom}${tabListBorderRadiusUnits?.Tablet} ${tabListBorderRadiusTablet?.left}${tabListBorderRadiusUnits?.Tablet}`;
    const tabListBorderRadiusMobileWidth = `${tabListBorderRadiusMobile?.top}${tabListBorderRadiusUnits?.Mobile} ${tabListBorderRadiusMobile?.right}${tabListBorderRadiusUnits?.Mobile} ${tabListBorderRadiusMobile?.bottom}${tabListBorderRadiusUnits?.Mobile} ${tabListBorderRadiusMobile?.left}${tabListBorderRadiusUnits?.Mobile}`;

    const tabTitlePaddingDesktopWidth = `${tabTitlePaddingDesktop?.top}${tabTitlePaddingUnits?.Desktop} ${tabTitlePaddingDesktop?.right}${tabTitlePaddingUnits?.Desktop} ${tabTitlePaddingDesktop?.bottom}${tabTitlePaddingUnits?.Desktop} ${tabTitlePaddingDesktop?.left}${tabTitlePaddingUnits?.Desktop}`;
    const tabTitlePaddingTabletWidth = `${tabTitlePaddingTablet?.top}${tabTitlePaddingUnits?.Tablet} ${tabTitlePaddingTablet?.right}${tabTitlePaddingUnits?.Tablet} ${tabTitlePaddingTablet?.bottom}${tabTitlePaddingUnits?.Tablet} ${tabTitlePaddingTablet?.left}${tabTitlePaddingUnits?.Tablet}`;
    const tabTitlePaddingMobileWidth = `${tabTitlePaddingMobile?.top}${tabTitlePaddingUnits?.Mobile} ${tabTitlePaddingMobile?.right}${tabTitlePaddingUnits?.Mobile} ${tabTitlePaddingMobile?.bottom}${tabTitlePaddingUnits?.Mobile} ${tabTitlePaddingMobile?.left}${tabTitlePaddingUnits?.Mobile}`;

    const tabTitleMarginDesktopWidth = `${tabTitleMarginDesktop?.top}${tabTitleMarginUnits?.Desktop} ${tabTitleMarginDesktop?.right}${tabTitleMarginUnits?.Desktop} ${tabTitleMarginDesktop?.bottom}${tabTitleMarginUnits?.Desktop} ${tabTitleMarginDesktop?.left}${tabTitleMarginUnits?.Desktop}`;
    const tabTitleMarginTabletWidth = `${tabTitleMarginTablet?.top}${tabTitleMarginUnits?.Tablet} ${tabTitleMarginTablet?.right}${tabTitleMarginUnits?.Tablet} ${tabTitleMarginTablet?.bottom}${tabTitleMarginUnits?.Tablet} ${tabTitleMarginTablet?.left}${tabTitleMarginUnits?.Tablet}`;
    const tabTitleMarginMobileWidth = `${tabTitleMarginMobile?.top}${tabTitleMarginUnits?.Mobile} ${tabTitleMarginMobile?.right}${tabTitleMarginUnits?.Mobile} ${tabTitleMarginMobile?.bottom}${tabTitleMarginUnits?.Mobile} ${tabTitleMarginMobile?.left}${tabTitleMarginUnits?.Mobile}`;

    const tabTitleBorderDesktopWidth = `${tabTitleBorderDesktop?.top}${tabTitleBorderUnits?.Desktop} ${tabTitleBorderDesktop?.right}${tabTitleBorderUnits?.Desktop} ${tabTitleBorderDesktop?.bottom}${tabTitleBorderUnits?.Desktop} ${tabTitleBorderDesktop?.left}${tabTitleBorderUnits?.Desktop}`;
    const tabTitleBorderTabletWidth = `${tabTitleBorderTablet?.top}${tabTitleBorderUnits?.Tablet} ${tabTitleBorderTablet?.right}${tabTitleBorderUnits?.Tablet} ${tabTitleBorderTablet?.bottom}${tabTitleBorderUnits?.Tablet} ${tabTitleBorderTablet?.left}${tabTitleBorderUnits?.Tablet}`;
    const tabTitleBorderMobileWidth = `${tabTitleBorderMobile?.top}${tabTitleBorderUnits?.Mobile} ${tabTitleBorderMobile?.right}${tabTitleBorderUnits?.Mobile} ${tabTitleBorderMobile?.bottom}${tabTitleBorderUnits?.Mobile} ${tabTitleBorderMobile?.left}${tabTitleBorderUnits?.Mobile}`;

    const tabTitleBorderRadiusDesktopWidth = `${tabTitleBorderRadiusDesktop?.top}${tabTitleBorderRadiusUnits?.Desktop} ${tabTitleBorderRadiusDesktop?.right}${tabTitleBorderRadiusUnits?.Desktop} ${tabTitleBorderRadiusDesktop?.bottom}${tabTitleBorderRadiusUnits?.Desktop} ${tabTitleBorderRadiusDesktop?.left}${tabTitleBorderRadiusUnits?.Desktop}`;
    const tabTitleBorderRadiusTabletWidth = `${tabTitleBorderRadiusTablet?.top}${tabTitleBorderRadiusUnits?.Tablet} ${tabTitleBorderRadiusTablet?.right}${tabTitleBorderRadiusUnits?.Tablet} ${tabTitleBorderRadiusTablet?.bottom}${tabTitleBorderRadiusUnits?.Tablet} ${tabTitleBorderRadiusTablet?.left}${tabTitleBorderRadiusUnits?.Tablet}`;
    const tabTitleBorderRadiusMobileWidth = `${tabTitleBorderRadiusMobile?.top}${tabTitleBorderRadiusUnits?.Mobile} ${tabTitleBorderRadiusMobile?.right}${tabTitleBorderRadiusUnits?.Mobile} ${tabTitleBorderRadiusMobile?.bottom}${tabTitleBorderRadiusUnits?.Mobile} ${tabTitleBorderRadiusMobile?.left}${tabTitleBorderRadiusUnits?.Mobile}`;

    const tabDescriptionPaddingDesktopWidth = `${tabDescriptionPaddingDesktop?.top}${tabDescriptionPaddingUnits?.Desktop} ${tabDescriptionPaddingDesktop?.right}${tabDescriptionPaddingUnits?.Desktop} ${tabDescriptionPaddingDesktop?.bottom}${tabDescriptionPaddingUnits?.Desktop} ${tabDescriptionPaddingDesktop?.left}${tabDescriptionPaddingUnits?.Desktop}`;
    const tabDescriptionPaddingTabletWidth = `${tabDescriptionPaddingTablet?.top}${tabDescriptionPaddingUnits?.Tablet} ${tabDescriptionPaddingTablet?.right}${tabDescriptionPaddingUnits?.Tablet} ${tabDescriptionPaddingTablet?.bottom}${tabDescriptionPaddingUnits?.Tablet} ${tabDescriptionPaddingTablet?.left}${tabDescriptionPaddingUnits?.Tablet}`;
    const tabDescriptionPaddingMobileWidth = `${tabDescriptionPaddingMobile?.top}${tabDescriptionPaddingUnits?.Mobile} ${tabDescriptionPaddingMobile?.right}${tabDescriptionPaddingUnits?.Mobile} ${tabDescriptionPaddingMobile?.bottom}${tabDescriptionPaddingUnits?.Mobile} ${tabDescriptionPaddingMobile?.left}${tabDescriptionPaddingUnits?.Mobile}`;

    const tabDescriptionMarginDesktopWidth = `${tabDescriptionMarginDesktop?.top}${tabDescriptionMarginUnits?.Desktop} ${tabDescriptionMarginDesktop?.right}${tabDescriptionMarginUnits?.Desktop} ${tabDescriptionMarginDesktop?.bottom}${tabDescriptionMarginUnits?.Desktop} ${tabDescriptionMarginDesktop?.left}${tabDescriptionMarginUnits?.Desktop}`;
    const tabDescriptionMarginTabletWidth = `${tabDescriptionMarginTablet?.top}${tabDescriptionMarginUnits?.Tablet} ${tabDescriptionMarginTablet?.right}${tabDescriptionMarginUnits?.Tablet} ${tabDescriptionMarginTablet?.bottom}${tabDescriptionMarginUnits?.Tablet} ${tabDescriptionMarginTablet?.left}${tabDescriptionMarginUnits?.Tablet}`;
    const tabDescriptionMarginMobileWidth = `${tabDescriptionMarginMobile?.top}${tabDescriptionMarginUnits?.Mobile} ${tabDescriptionMarginMobile?.right}${tabDescriptionMarginUnits?.Mobile} ${tabDescriptionMarginMobile?.bottom}${tabDescriptionMarginUnits?.Mobile} ${tabDescriptionMarginMobile?.left}${tabDescriptionMarginUnits?.Mobile}`;

    const tabDescriptionBorderDesktopWidth = `${tabDescriptionBorderDesktop?.top}${tabDescriptionBorderUnits?.Desktop} ${tabDescriptionBorderDesktop?.right}${tabDescriptionBorderUnits?.Desktop} ${tabDescriptionBorderDesktop?.bottom}${tabDescriptionBorderUnits?.Desktop} ${tabDescriptionBorderDesktop?.left}${tabDescriptionBorderUnits?.Desktop}`;
    const tabDescriptionBorderTabletWidth = `${tabDescriptionBorderTablet?.top}${tabDescriptionBorderUnits?.Tablet} ${tabDescriptionBorderTablet?.right}${tabDescriptionBorderUnits?.Tablet} ${tabDescriptionBorderTablet?.bottom}${tabDescriptionBorderUnits?.Tablet} ${tabDescriptionBorderTablet?.left}${tabDescriptionBorderUnits?.Tablet}`;
    const tabDescriptionBorderMobileWidth = `${tabDescriptionBorderMobile?.top}${tabDescriptionBorderUnits?.Mobile} ${tabDescriptionBorderMobile?.right}${tabDescriptionBorderUnits?.Mobile} ${tabDescriptionBorderMobile?.bottom}${tabDescriptionBorderUnits?.Mobile} ${tabDescriptionBorderMobile?.left}${tabDescriptionBorderUnits?.Mobile}`;

    const tabDescriptionBorderRadiusDesktopWidth = `${tabDescriptionBorderRadiusDesktop?.top}${tabDescriptionBorderRadiusUnits?.Desktop} ${tabDescriptionBorderRadiusDesktop?.right}${tabDescriptionBorderRadiusUnits?.Desktop} ${tabDescriptionBorderRadiusDesktop?.bottom}${tabDescriptionBorderRadiusUnits?.Desktop} ${tabDescriptionBorderRadiusDesktop?.left}${tabDescriptionBorderRadiusUnits?.Desktop}`;
    const tabDescriptionBorderRadiusTabletWidth = `${tabDescriptionBorderRadiusTablet?.top}${tabDescriptionBorderRadiusUnits?.Tablet} ${tabDescriptionBorderRadiusTablet?.right}${tabDescriptionBorderRadiusUnits?.Tablet} ${tabDescriptionBorderRadiusTablet?.bottom}${tabDescriptionBorderRadiusUnits?.Tablet} ${tabDescriptionBorderRadiusTablet?.left}${tabDescriptionBorderRadiusUnits?.Tablet}`;
    const tabDescriptionBorderRadiusMobileWidth = `${tabDescriptionBorderRadiusMobile?.top}${tabDescriptionBorderRadiusUnits?.Mobile} ${tabDescriptionBorderRadiusMobile?.right}${tabDescriptionBorderRadiusUnits?.Mobile} ${tabDescriptionBorderRadiusMobile?.bottom}${tabDescriptionBorderRadiusUnits?.Mobile} ${tabDescriptionBorderRadiusMobile?.left}${tabDescriptionBorderRadiusUnits?.Mobile}`;

    const tabIconBorderDesktopWidth = `${tabIconBorderDesktop?.top}${tabIconBorderUnits?.Desktop} ${tabIconBorderDesktop?.right}${tabIconBorderUnits?.Desktop} ${tabIconBorderDesktop?.bottom}${tabIconBorderUnits?.Desktop} ${tabIconBorderDesktop?.left}${tabIconBorderUnits?.Desktop}`;
    const tabIconBorderTabletWidth = `${tabIconBorderTablet?.top}${tabIconBorderUnits?.Tablet} ${tabIconBorderTablet?.right}${tabIconBorderUnits?.Tablet} ${tabIconBorderTablet?.bottom}${tabIconBorderUnits?.Tablet} ${tabIconBorderTablet?.left}${tabIconBorderUnits?.Tablet}`;
    const tabIconBorderMobileWidth = `${tabIconBorderMobile?.top}${tabIconBorderUnits?.Mobile} ${tabIconBorderMobile?.right}${tabIconBorderUnits?.Mobile} ${tabIconBorderMobile?.bottom}${tabIconBorderUnits?.Mobile} ${tabIconBorderMobile?.left}${tabIconBorderUnits?.Mobile}`;

    const tabIconBorderRadiusDesktopWidth = `${tabIconBorderRadiusDesktop?.top}${tabIconBorderRadiusUnits?.Desktop} ${tabIconBorderRadiusDesktop?.right}${tabIconBorderRadiusUnits?.Desktop} ${tabIconBorderRadiusDesktop?.bottom}${tabIconBorderRadiusUnits?.Desktop} ${tabIconBorderRadiusDesktop?.left}${tabIconBorderRadiusUnits?.Desktop}`;
    const tabIconBorderRadiusTabletWidth = `${tabIconBorderRadiusTablet?.top}${tabIconBorderRadiusUnits?.Tablet} ${tabIconBorderRadiusTablet?.right}${tabIconBorderRadiusUnits?.Tablet} ${tabIconBorderRadiusTablet?.bottom}${tabIconBorderRadiusUnits?.Tablet} ${tabIconBorderRadiusTablet?.left}${tabIconBorderRadiusUnits?.Tablet}`;
    const tabIconBorderRadiusMobileWidth = `${tabIconBorderRadiusMobile?.top}${tabIconBorderRadiusUnits?.Mobile} ${tabIconBorderRadiusMobile?.right}${tabIconBorderRadiusUnits?.Mobile} ${tabIconBorderRadiusMobile?.bottom}${tabIconBorderRadiusUnits?.Mobile} ${tabIconBorderRadiusMobile?.left}${tabIconBorderRadiusUnits?.Mobile}`;

    const tabIconPaddingDesktopWidth = `${tabIconPaddingDesktop?.top}${tabIconPaddingUnits?.Desktop} ${tabIconPaddingDesktop?.right}${tabIconPaddingUnits?.Desktop} ${tabIconPaddingDesktop?.bottom}${tabIconPaddingUnits?.Desktop} ${tabIconPaddingDesktop?.left}${tabIconPaddingUnits?.Desktop}`;
    const tabIconPaddingTabletWidth = `${tabIconPaddingTablet?.top}${tabIconPaddingUnits?.Tablet} ${tabIconPaddingTablet?.right}${tabIconPaddingUnits?.Tablet} ${tabIconPaddingTablet?.bottom}${tabIconPaddingUnits?.Tablet} ${tabIconPaddingTablet?.left}${tabIconPaddingUnits?.Tablet}`;
    const tabIconPaddingMobileWidth = `${tabIconPaddingMobile?.top}${tabIconPaddingUnits?.Mobile} ${tabIconPaddingMobile?.right}${tabIconPaddingUnits?.Mobile} ${tabIconPaddingMobile?.bottom}${tabIconPaddingUnits?.Mobile} ${tabIconPaddingMobile?.left}${tabIconPaddingUnits?.Mobile}`;

    const tabContentPaddingDesktopWidth = `${tabContentPaddingDesktop?.top}${tabContentPaddingUnits?.Desktop} ${tabContentPaddingDesktop?.right}${tabContentPaddingUnits?.Desktop} ${tabContentPaddingDesktop?.bottom}${tabContentPaddingUnits?.Desktop} ${tabContentPaddingDesktop?.left}${tabContentPaddingUnits?.Desktop}`;
    const tabContentPaddingTabletWidth = `${tabContentPaddingTablet?.top}${tabContentPaddingUnits?.Tablet} ${tabContentPaddingTablet?.right}${tabContentPaddingUnits?.Tablet} ${tabContentPaddingTablet?.bottom}${tabContentPaddingUnits?.Tablet} ${tabContentPaddingTablet?.left}${tabContentPaddingUnits?.Tablet}`;
    const tabContentPaddingMobileWidth = `${tabContentPaddingMobile?.top}${tabContentPaddingUnits?.Mobile} ${tabContentPaddingMobile?.right}${tabContentPaddingUnits?.Mobile} ${tabContentPaddingMobile?.bottom}${tabContentPaddingUnits?.Mobile} ${tabContentPaddingMobile?.left}${tabContentPaddingUnits?.Mobile}`;

    const tabContentMarginDesktopWidth = `${tabContentMarginDesktop?.top}${tabContentMarginUnits?.Desktop} ${tabContentMarginDesktop?.right}${tabContentMarginUnits?.Desktop} ${tabContentMarginDesktop?.bottom}${tabContentMarginUnits?.Desktop} ${tabContentMarginDesktop?.left}${tabContentMarginUnits?.Desktop}`;
    const tabContentMarginTabletWidth = `${tabContentMarginTablet?.top}${tabContentMarginUnits?.Tablet} ${tabContentMarginTablet?.right}${tabContentMarginUnits?.Tablet} ${tabContentMarginTablet?.bottom}${tabContentMarginUnits?.Tablet} ${tabContentMarginTablet?.left}${tabContentMarginUnits?.Tablet}`;
    const tabContentMarginMobileWidth = `${tabContentMarginMobile?.top}${tabContentMarginUnits?.Mobile} ${tabContentMarginMobile?.right}${tabContentMarginUnits?.Mobile} ${tabContentMarginMobile?.bottom}${tabContentMarginUnits?.Mobile} ${tabContentMarginMobile?.left}${tabContentMarginUnits?.Mobile}`;

    const tabContentBorderDesktopWidth = `${tabContentBorderDesktop?.top}${tabContentBorderUnits?.Desktop} ${tabContentBorderDesktop?.right}${tabContentBorderUnits?.Desktop} ${tabContentBorderDesktop?.bottom}${tabContentBorderUnits?.Desktop} ${tabContentBorderDesktop?.left}${tabContentBorderUnits?.Desktop}`;
    const tabContentBorderTabletWidth = `${tabContentBorderTablet?.top}${tabContentBorderUnits?.Tablet} ${tabContentBorderTablet?.right}${tabContentBorderUnits?.Tablet} ${tabContentBorderTablet?.bottom}${tabContentBorderUnits?.Tablet} ${tabContentBorderTablet?.left}${tabContentBorderUnits?.Tablet}`;
    const tabContentBorderMobileWidth = `${tabContentBorderMobile?.top}${tabContentBorderUnits?.Mobile} ${tabContentBorderMobile?.right}${tabContentBorderUnits?.Mobile} ${tabContentBorderMobile?.bottom}${tabContentBorderUnits?.Mobile} ${tabContentBorderMobile?.left}${tabContentBorderUnits?.Mobile}`;

    const tabContentBorderRadiusDesktopWidth = `${tabContentBorderRadiusDesktop?.top}${tabContentBorderRadiusUnits?.Desktop} ${tabContentBorderRadiusDesktop?.right}${tabContentBorderRadiusUnits?.Desktop} ${tabContentBorderRadiusDesktop?.bottom}${tabContentBorderRadiusUnits?.Desktop} ${tabContentBorderRadiusDesktop?.left}${tabContentBorderRadiusUnits?.Desktop}`;
    const tabContentBorderRadiusTabletWidth = `${tabContentBorderRadiusTablet?.top}${tabContentBorderRadiusUnits?.Tablet} ${tabContentBorderRadiusTablet?.right}${tabContentBorderRadiusUnits?.Tablet} ${tabContentBorderRadiusTablet?.bottom}${tabContentBorderRadiusUnits?.Tablet} ${tabContentBorderRadiusTablet?.left}${tabContentBorderRadiusUnits?.Tablet}`;
    const tabContentBorderRadiusMobileWidth = `${tabContentBorderRadiusMobile?.top}${tabContentBorderRadiusUnits?.Mobile} ${tabContentBorderRadiusMobile?.right}${tabContentBorderRadiusUnits?.Mobile} ${tabContentBorderRadiusMobile?.bottom}${tabContentBorderRadiusUnits?.Mobile} ${tabContentBorderRadiusMobile?.left}${tabContentBorderRadiusUnits?.Mobile}`;

    const tabGlobalPaddingDesktopWidth = `${tabGlobalPaddingDesktop?.top}${tabGlobalPaddingUnits?.Desktop} ${tabGlobalPaddingDesktop?.right}${tabGlobalPaddingUnits?.Desktop} ${tabGlobalPaddingDesktop?.bottom}${tabGlobalPaddingUnits?.Desktop} ${tabGlobalPaddingDesktop?.left}${tabGlobalPaddingUnits?.Desktop}`;
    const tabGlobalPaddingTabletWidth = `${tabGlobalPaddingTablet?.top}${tabGlobalPaddingUnits?.Tablet} ${tabGlobalPaddingTablet?.right}${tabGlobalPaddingUnits?.Tablet} ${tabGlobalPaddingTablet?.bottom}${tabGlobalPaddingUnits?.Tablet} ${tabGlobalPaddingTablet?.left}${tabGlobalPaddingUnits?.Tablet}`;
    const tabGlobalPaddingMobileWidth = `${tabGlobalPaddingMobile?.top}${tabGlobalPaddingUnits?.Mobile} ${tabGlobalPaddingMobile?.right}${tabGlobalPaddingUnits?.Mobile} ${tabGlobalPaddingMobile?.bottom}${tabGlobalPaddingUnits?.Mobile} ${tabGlobalPaddingMobile?.left}${tabGlobalPaddingUnits?.Mobile}`;

    const tabGlobalMarginDesktopWidth = `${tabGlobalMarginDesktop?.top}${tabGlobalMarginUnits?.Desktop} ${tabGlobalMarginDesktop?.right}${tabGlobalMarginUnits?.Desktop} ${tabGlobalMarginDesktop?.bottom}${tabGlobalMarginUnits?.Desktop} ${tabGlobalMarginDesktop?.left}${tabGlobalMarginUnits?.Desktop}`;
    const tabGlobalMarginTabletWidth = `${tabGlobalMarginTablet?.top}${tabGlobalMarginUnits?.Tablet} ${tabGlobalMarginTablet?.right}${tabGlobalMarginUnits?.Tablet} ${tabGlobalMarginTablet?.bottom}${tabGlobalMarginUnits?.Tablet} ${tabGlobalMarginTablet?.left}${tabGlobalMarginUnits?.Tablet}`;
    const tabGlobalMarginMobileWidth = `${tabGlobalMarginMobile?.top}${tabGlobalMarginUnits?.Mobile} ${tabGlobalMarginMobile?.right}${tabGlobalMarginUnits?.Mobile} ${tabGlobalMarginMobile?.bottom}${tabGlobalMarginUnits?.Mobile} ${tabGlobalMarginMobile?.left}${tabGlobalMarginUnits?.Mobile}`;

    const tabGlobalBorderDesktopWidth = `${tabGlobalBorderDesktop?.top}${tabGlobalBorderUnits?.Desktop} ${tabGlobalBorderDesktop?.right}${tabGlobalBorderUnits?.Desktop} ${tabGlobalBorderDesktop?.bottom}${tabGlobalBorderUnits?.Desktop} ${tabGlobalBorderDesktop?.left}${tabGlobalBorderUnits?.Desktop}`;
    const tabGlobalBorderTabletWidth = `${tabGlobalBorderTablet?.top}${tabGlobalBorderUnits?.Tablet} ${tabGlobalBorderTablet?.right}${tabGlobalBorderUnits?.Tablet} ${tabGlobalBorderTablet?.bottom}${tabGlobalBorderUnits?.Tablet} ${tabGlobalBorderTablet?.left}${tabGlobalBorderUnits?.Tablet}`;
    const tabGlobalBorderMobileWidth = `${tabGlobalBorderMobile?.top}${tabGlobalBorderUnits?.Mobile} ${tabGlobalBorderMobile?.right}${tabGlobalBorderUnits?.Mobile} ${tabGlobalBorderMobile?.bottom}${tabGlobalBorderUnits?.Mobile} ${tabGlobalBorderMobile?.left}${tabGlobalBorderUnits?.Mobile}`;

    const tabGlobalBorderRadiusDesktopWidth = `${tabGlobalBorderRadiusDesktop?.top}${tabGlobalBorderRadiusUnits?.Desktop} ${tabGlobalBorderRadiusDesktop?.right}${tabGlobalBorderRadiusUnits?.Desktop} ${tabGlobalBorderRadiusDesktop?.bottom}${tabGlobalBorderRadiusUnits?.Desktop} ${tabGlobalBorderRadiusDesktop?.left}${tabGlobalBorderRadiusUnits?.Desktop}`;
    const tabGlobalBorderRadiusTabletWidth = `${tabGlobalBorderRadiusTablet?.top}${tabGlobalBorderRadiusUnits?.Tablet} ${tabGlobalBorderRadiusTablet?.right}${tabGlobalBorderRadiusUnits?.Tablet} ${tabGlobalBorderRadiusTablet?.bottom}${tabGlobalBorderRadiusUnits?.Tablet} ${tabGlobalBorderRadiusTablet?.left}${tabGlobalBorderRadiusUnits?.Tablet}`;
    const tabGlobalBorderRadiusMobileWidth = `${tabGlobalBorderRadiusMobile?.top}${tabGlobalBorderRadiusUnits?.Mobile} ${tabGlobalBorderRadiusMobile?.right}${tabGlobalBorderRadiusUnits?.Mobile} ${tabGlobalBorderRadiusMobile?.bottom}${tabGlobalBorderRadiusUnits?.Mobile} ${tabGlobalBorderRadiusMobile?.left}${tabGlobalBorderRadiusUnits?.Mobile}`;

    // Mapping for tab title alignment
    const tabTitlesAlignmentMap = {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end'
    };

    const tabsBlockStyle = `
    
        .${blockID}.fb-tabs-wrapper {
            ${tabGlobalPaddingDesktopWidth && tabGlobalPaddingDesktop?.top ? `padding: ${tabGlobalPaddingDesktopWidth};` : ''}  
            ${tabGlobalMarginDesktopWidth && tabGlobalMarginDesktop?.top ? `margin: ${tabGlobalMarginDesktopWidth};` : ''}
            ${tabGlobalBorder ? `border: ${tabGlobalBorder};` : ''}
            ${tabGlobalBorderColor ? `border-color: ${tabGlobalBorderColor};` : ''}
            ${tabGlobalBorderDesktopWidth && tabGlobalBorderDesktop?.top ? `border-width: ${tabGlobalBorderDesktopWidth};` : ''}
            ${tabGlobalBorderRadiusDesktopWidth && tabGlobalBorderRadiusDesktop?.top ? `border-radius: ${tabGlobalBorderRadiusDesktopWidth};` : ''} 
            ${tabGlobalBoxShadowCssValue ? `box-shadow: ${tabGlobalBoxShadowCssValue};` : ''}
            ${tabGlobalZIndex?.Desktop ? `z-index: ${tabGlobalZIndex?.Desktop};` : ''}
            ${tabGlobalBgColorType === "gradient"
                    ? `background: ${
                        tabGlobalBgCustomGradientColorSwitcher && tabGlobalBgCustomGradientColor
                        ? tabGlobalBgCustomGradientColor
                        : tabGlobalBgGradientColor
                    };`
                    : tabGlobalBgColor ? `background: ${tabGlobalBgColor};` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-tabs-wrapper:hover {
            ${tabGlobalBorderHoverColor ? `border-color: ${tabGlobalBorderHoverColor};` : ''}
            ${tabGlobalBoxShadowHoverCssValue ? `box-shadow: ${tabGlobalBoxShadowHoverCssValue};` : ''}
            ${tabGlobalBgHoverColorType === "gradient"
                ? `background: ${
                    tabGlobalBgHoverCustomGradientColorSwitcher && tabGlobalBgHoverCustomGradientColor
                        ? tabGlobalBgHoverCustomGradientColor
                        : tabGlobalBgHoverGradientColor
                    };`
                : tabGlobalBgHoverColor ? `background: ${tabGlobalBgHoverColor};` : ''
            }
        }

        .${blockID} .fb-tabs-wrap {
            display: flex;
            flex-direction: ${tabLayoutSwitcher === 'horizontal' ? 'column' : 'row'};
            max-width: 100%;
        }
        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel {
            ${tabTitlesAlignment?.Desktop ? `justify-content: ${tabTitlesAlignmentMap[tabTitlesAlignment?.Desktop] || 'flex-start'};` : ''}
            ${tabWrapperPaddingDesktopWidth && tabWrapperPaddingDesktop?.top ? `padding: ${tabWrapperPaddingDesktopWidth};` : ''} 
            ${tabWrapperMarginDesktopWidth && tabWrapperMarginDesktop?.top ? `margin: ${tabWrapperMarginDesktopWidth};` : ''}
            ${tabWrapperGap?.Desktop && tabWrapperGapUnits?.Desktop ? `gap: ${tabWrapperGap?.Desktop}${tabWrapperGapUnits?.Desktop};` : ''}
            ${tabWrapperBorder ? `border: ${tabWrapperBorder};` : ''}
            ${tabWrapperBorderColor ? `border-color: ${tabWrapperBorderColor};` : ''}
            ${tabWrapperBorderDesktopWidth && tabWrapperBorderDesktop?.top ? `border-width: ${tabWrapperBorderDesktopWidth};` : ''}
            ${tabWrapperBorderRadiusDesktopWidth && tabWrapperBorderRadiusDesktop?.top ? `border-radius: ${tabWrapperBorderRadiusDesktopWidth};` : ''} 

            ${tabWrapperBgColorType === "gradient"
                    ? `background: ${
                        tabWrapperBgCustomGradientColorSwitcher && tabWrapperBgCustomGradientColor
                        ? tabWrapperBgCustomGradientColor
                        : tabWrapperBgGradientColor
                    };`
                    : tabWrapperBgColor ? `background: ${tabWrapperBgColor};` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel:hover {
            ${tabWrapperBorderHoverColor ? `border-color: ${tabWrapperBorderHoverColor};` : ''}
            ${tabWrapperBgHoverColorType === "gradient"
                    ? `background: ${
                        tabWrapperBgHoverCustomGradientColorSwitcher && tabWrapperBgHoverCustomGradientColor
                        ? tabWrapperBgHoverCustomGradientColor
                        : tabWrapperBgHoverGradientColor
                    };`
                    : tabWrapperBgHoverColor ? `background: ${tabWrapperBgHoverColor};` : ''
            }
        }
        .${blockID} .fb-tabs-wrap.horizontal ul.fb-tabs-panel {
            flex-direction: row;
        }

        .${blockID} .fb-tabs-wrap.vertical ul.fb-tabs-panel {
            flex-direction: column;
        }

        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li {
            display: flex;
            align-items: center;
            ${tabListAlignment === 'left' ? `justify-content: flex-start;` : ''}
            ${tabListAlignment === 'center' ? `justify-content: center;` : ''}
            ${tabListAlignment === 'right' ? `justify-content: flex-end;` : ''}
            ${tabListPaddingDesktopWidth && tabListPaddingDesktop?.top ? `padding: ${tabListPaddingDesktopWidth} !important;` : ''}
            ${tabListMarginDesktopWidth && tabListMarginDesktop?.top ? `margin: ${tabListMarginDesktopWidth};` : ''}
            ${tabListMinWidth?.Desktop && tabListMinWidthUnits?.Desktop ? `min-width: ${tabListMinWidth?.Desktop}${tabListMinWidthUnits?.Desktop};` : ''}
            ${tabLayoutSwitcher === 'vertical' ? 'width: 100px;' : ''}
            ${tabListItemGap?.Desktop && tabListItemGapUnits?.Desktop ? `gap: ${tabListItemGap?.Desktop}${tabListItemGapUnits?.Desktop};` : ''}
            ${tabListBorder ? `border: ${tabListBorder} !important;` : ''}
            ${tabListBorderColor ? `border-color: ${tabListBorderColor} !important;` : ''}
            ${tabListBorderDesktopWidth && tabListBorderDesktop?.top ? `border-width: ${tabListBorderDesktopWidth} !important;` : ''}
            ${tabListBorderRadiusDesktopWidth && tabListBorderRadiusDesktop?.top ? `border-radius: ${tabListBorderRadiusDesktopWidth};` : ''} 

            ${tabListBgColorType === "gradient"
                    ? `background: ${
                        tabListBgCustomGradientColorSwitcher && tabListBgCustomGradientColor
                        ? tabListBgCustomGradientColor
                        : tabListBgGradientColor
                    };`
                    : tabListBgColor ? `background: ${tabListBgColor};` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li:hover {
            ${tabListBorderHoverColor ? `border-color: ${tabListBorderHoverColor};` : ''}
            ${tabListBgHoverColorType === "gradient"
                    ? `background: ${
                        tabListBgHoverCustomGradientColorSwitcher && tabListBgHoverCustomGradientColor
                        ? tabListBgHoverCustomGradientColor
                        : tabListBgHoverGradientColor
                    };`
                    : tabListBgHoverColor ? `background: ${tabListBgHoverColor};` : ''
            }
        }

        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li.left ,
        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li.right {
            flex-direction: row;
        }

        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li.top ,
        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li.bottom {
            ${showIcon ? 'flex-direction: column;' : ''}
            ${tabListAlignment === 'left' ? `align-items: flex-start;` : ''}
            ${tabListAlignment === 'center' ? `align-items: center;` : ''}
            ${tabListAlignment === 'right' ? `align-items: flex-end;` : ''}
            ${tabListAlignment ? `text-align: ${tabListAlignment};` : ''}
        }

        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active {
            ${tabListActiveBgColorType === "gradient"
                ? `background: ${
                    tabListActiveBgCustomGradientColorSwitcher && tabListActiveBgCustomGradientColor
                    ? tabListActiveBgCustomGradientColor
                    : tabListActiveBgGradientColor
                };`
                : tabListActiveBgColor ? `background: ${tabListActiveBgColor};` : ''
            }

            ${tabListActiveBorderColor ? `border-color: ${tabListActiveBorderColor} !important;` : ''}
        }
        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active:hover {
            ${tabListActiveBgHoverColorType === "gradient"
                ? `background: ${
                    tabListActiveBgHoverCustomGradientColorSwitcher && tabListActiveBgHoverCustomGradientColor
                    ? tabListActiveBgHoverCustomGradientColor
                    : tabListActiveBgHoverGradientColor
                };`
                : tabListActiveBgHoverColor ? `background: ${tabListActiveBgHoverColor};` : ''
            }
        }

        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active .fb-tab-icon svg{
            ${tabIconActiveColor ? `fill: ${tabIconActiveColor};` : ''}
        }
        
        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active .fb-tab-icon {
            ${tabIconActiveNormalBackgroundType === 'gradient' ? `   	
                ${tabIconActiveNormalCustomGradientSwitcher && tabIconActiveNormalCustomGradientInputValue ? `background: ${tabIconActiveNormalCustomGradientInputValue};` : `background: ${tabIconActiveNormalGradientColor};`}
            `: `
                ${tabIconBgActiveColor ? `background: ${tabIconBgActiveColor};` : ''}
            `}
        }
        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active .fb-tab-icon:hover,
        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active:hover .fb-tab-icon {
            ${tabIconActiveHoverBackgroundType === 'gradient' ? `   	
                ${tabIconActiveHoverCustomGradientSwitcher && tabIconActiveHoverCustomGradientInputValue ? `background: ${tabIconActiveHoverCustomGradientInputValue};` : `background: ${tabIconActiveHoverGradientColor};`}
            `: `
                ${tabIconBgActiveHoverColor ? `background: ${tabIconBgActiveHoverColor};` : ''}
            `}
        }
        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active .fb-tab-title{
            ${tabTitleActiveColor ? `color: ${tabTitleActiveColor};` : ''}
        }
        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active .fb-tab-description{
            ${tabDescriptionActiveColor ? `color: ${tabDescriptionActiveColor};` : ''}
        }
            
        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li .fb-tab-title {
            ${tabTitleGlobalTypoSwitcher?.fontFamily === true && tabTitleGlobalTypographyData?.fontFamily ? `font-family: ${tabTitleGlobalTypographyData?.fontFamily};` : ''}
            ${tabTitleGlobalTypoSwitcher?.fontSize === true && tabTitleGlobalTypographyData?.fontSize ? `font-size: ${tabTitleGlobalTypographyData?.fontSize};` : ''}
            ${tabTitleGlobalTypoSwitcher?.fontWeight === true && tabTitleGlobalTypographyData?.fontWeight ? `font-weight: ${tabTitleGlobalTypographyData?.fontWeight};` : ''}
            ${tabTitleGlobalTypoSwitcher?.fontStyle === true && tabTitleGlobalTypographyData?.fontStyle ? `font-style: ${tabTitleGlobalTypographyData?.fontStyle};` : ''}
            ${tabTitleGlobalTypoSwitcher?.textTransform === true && tabTitleGlobalTypographyData?.textTransform ? `text-transform: ${tabTitleGlobalTypographyData?.textTransform};` : ''}
            ${tabTitleGlobalTypoSwitcher?.textDecoration === true && tabTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${tabTitleGlobalTypographyData?.textDecoration};` : ''}
            ${tabTitleGlobalTypoSwitcher?.letterSpacing === true && tabTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${tabTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${tabTitleGlobalTypoSwitcher?.lineHeight === true && tabTitleGlobalTypographyData?.lineHeight ? `line-height: ${tabTitleGlobalTypographyData?.lineHeight};` : ''}

            ${tabTitleGlobalTypoSwitcher?.fontFamily === false && tabTitleFontFamily && tabTitleFontFamily !== 'Default' ? `font-family: ${tabTitleFontFamily};` : ''}
            ${tabTitleGlobalTypoSwitcher?.fontSize === false && tabTitleFontSize?.Desktop && tabTitleFontSizeUnits?.Desktop ? `font-size: ${tabTitleFontSize?.Desktop}${tabTitleFontSizeUnits?.Desktop};` : ''}
            ${tabTitleGlobalTypoSwitcher?.fontWeight === false && tabTitleFontWeight ? `font-weight: ${tabTitleFontWeight};` : ''}
            ${tabTitleGlobalTypoSwitcher?.fontStyle === false && tabTitleFontStyle ? `font-style: ${tabTitleFontStyle};` : ''}
            ${tabTitleGlobalTypoSwitcher?.textTransform === false && tabTitleTextTransform ? `text-transform: ${tabTitleTextTransform};` : ''}
            ${tabTitleGlobalTypoSwitcher?.textDecoration === false && tabTitleTextDecoration ? `text-decoration: ${tabTitleTextDecoration};` : ''}
            ${tabTitleGlobalTypoSwitcher?.letterSpacing === false && tabTitleLetterSpacing?.Desktop && tabTitleLetterSpacingUnits?.Desktop ? `letter-spacing: ${tabTitleLetterSpacing?.Desktop}${tabTitleLetterSpacingUnits?.Desktop};` : ''}
            ${tabTitleGlobalTypoSwitcher?.lineHeight === false && tabTitleLineHeight?.Desktop && tabTitleLineHeightUnits?.Desktop ? `line-height: ${tabTitleLineHeight?.Desktop}${tabTitleLineHeightUnits?.Desktop};` : ''}
            
            ${tabTitleColor ? `color: ${tabTitleColor};` : ''}
            ${tabTitlePaddingDesktopWidth && tabTitlePaddingDesktop?.top ? `padding: ${tabTitlePaddingDesktopWidth};` : ''}     
            ${tabTitleMarginDesktopWidth && tabTitleMarginDesktop?.top ? `margin: ${tabTitleMarginDesktopWidth};` : ''}
            ${tabTitleBorder ? `border: ${tabTitleBorder};` : ''} 
            ${tabTitleBorderColor ? `border-color: ${tabTitleBorderColor};` : ''}
            ${tabTitleBorderDesktopWidth && tabTitleBorderDesktop?.top ? `border-width: ${tabTitleBorderDesktopWidth};` : ''}
            ${tabTitleBorderRadiusDesktopWidth && tabTitleBorderRadiusDesktop?.top ? `border-radius: ${tabTitleBorderRadiusDesktopWidth};` : ''} 

            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li .fb-tab-description {
            ${tabDescriptionGlobalTypoSwitcher?.fontFamily === true && tabDescriptionGlobalTypographyData?.fontFamily ? `font-family: ${tabDescriptionGlobalTypographyData?.fontFamily};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.fontSize === true && tabDescriptionGlobalTypographyData?.fontSize ? `font-size: ${tabDescriptionGlobalTypographyData?.fontSize};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.fontWeight === true && tabDescriptionGlobalTypographyData?.fontWeight ? `font-weight: ${tabDescriptionGlobalTypographyData?.fontWeight};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.fontStyle === true && tabDescriptionGlobalTypographyData?.fontStyle ? `font-style: ${tabDescriptionGlobalTypographyData?.fontStyle};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.textTransform === true && tabDescriptionGlobalTypographyData?.textTransform ? `text-transform: ${tabDescriptionGlobalTypographyData?.textTransform};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.textDecoration === true && tabDescriptionGlobalTypographyData?.textDecoration ? `text-decoration: ${tabDescriptionGlobalTypographyData?.textDecoration};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.letterSpacing === true && tabDescriptionGlobalTypographyData?.letterSpacing ? `letter-spacing: ${tabDescriptionGlobalTypographyData?.letterSpacing};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.lineHeight === true && tabDescriptionGlobalTypographyData?.lineHeight ? `line-height: ${tabDescriptionGlobalTypographyData?.lineHeight};` : ''}

            ${tabDescriptionGlobalTypoSwitcher?.fontFamily === false && tabDescriptionFontFamily && tabDescriptionFontFamily !== 'Default' ? `font-family: ${tabDescriptionFontFamily};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.fontSize === false && tabDescriptionFontSize?.Desktop && tabDescriptionFontSizeUnits?.Desktop ? `font-size: ${tabDescriptionFontSize?.Desktop}${tabDescriptionFontSizeUnits?.Desktop};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.fontWeight === false && tabDescriptionFontWeight ? `font-weight: ${tabDescriptionFontWeight};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.fontStyle === false && tabDescriptionFontStyle ? `font-style: ${tabDescriptionFontStyle};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.textTransform === false && tabDescriptionTextTransform ? `text-transform: ${tabDescriptionTextTransform};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.textDecoration === false && tabDescriptionTextDecoration ? `text-decoration: ${tabDescriptionTextDecoration};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.letterSpacing === false && tabDescriptionLetterSpacing?.Desktop && tabDescriptionLetterSpacingUnits?.Desktop ? `letter-spacing: ${tabDescriptionLetterSpacing?.Desktop}${tabDescriptionLetterSpacingUnits?.Desktop};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.lineHeight === false && tabDescriptionLineHeight?.Desktop && tabDescriptionLineHeightUnits?.Desktop ? `line-height: ${tabDescriptionLineHeight?.Desktop}${tabDescriptionLineHeightUnits?.Desktop};` : ''}
            
            ${tabDescriptionColor ? `color: ${tabDescriptionColor};` : ''}
            ${tabDescriptionPaddingDesktopWidth && tabDescriptionPaddingDesktop?.top ? `padding: ${tabDescriptionPaddingDesktopWidth};` : ''}     
            ${tabDescriptionMarginDesktopWidth && tabDescriptionMarginDesktop?.top ? `margin: ${tabDescriptionMarginDesktopWidth};` : ''}
            ${tabDescriptionBorder ? `border: ${tabDescriptionBorder};` : ''} 
            ${tabDescriptionBorderColor ? `border-color: ${tabDescriptionBorderColor};` : ''}
            ${tabDescriptionBorderDesktopWidth && tabDescriptionBorderDesktop?.top ? `border-width: ${tabDescriptionBorderDesktopWidth};` : ''}
            ${tabDescriptionBorderRadiusDesktopWidth && tabDescriptionBorderRadiusDesktop?.top ? `border-radius: ${tabDescriptionBorderRadiusDesktopWidth};` : ''} 

            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li:hover .fb-tab-title {
            ${tabTitleHoverColor ? `color: ${tabTitleHoverColor};` : ''}
            ${tabTitleBorderHoverColor ? `border-color: ${tabTitleBorderHoverColor};` : ''} 
        }

        .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li:hover .fb-tab-description {
            ${tabDescriptionHoverColor ? `color: ${tabDescriptionHoverColor};` : ''}
            ${tabDescriptionBorderHoverColor ? `border-color: ${tabDescriptionBorderHoverColor};` : ''} 
        }

        .${blockID} .fb-tab-icon-image-box .fb-tab-icon {
            ${tabIconNormalBackgroundType === 'gradient' ? `   	
                ${tabIconNormalCustomGradientSwitcher && tabIconNormalCustomGradientInputValue ? `background: ${tabIconNormalCustomGradientInputValue};` : `background: ${tabIconNormalGradientColor};`}
            `: `
                ${tabIconBgColor ? `background: ${tabIconBgColor};` : ''}
            `}
            ${tabIconPaddingDesktopWidth && tabIconPaddingDesktop?.top ? `padding: ${tabIconPaddingDesktopWidth};` : ''}

            ${tabIconBorder ? `border: ${tabIconBorder};` : ''}
            ${tabIconBorderColor ? `border-color: ${tabIconBorderColor};` : ''}
            ${tabIconBorderDesktopWidth && tabIconBorderDesktop?.top ? `border-width: ${tabIconBorderDesktopWidth};` : ''}
            ${tabIconBorderRadiusDesktopWidth && tabIconBorderRadiusDesktop?.top ? `border-radius: ${tabIconBorderRadiusDesktopWidth};` : ''} 
        }
        .${blockID} .fb-tab-icon-image-box .fb-tab-icon:hover {
            ${tabIconHoverBackgroundType === 'gradient' ? `   	
                ${tabIconHoverCustomGradientSwitcher && tabIconHoverCustomGradientInputValue ? `background: ${tabIconHoverCustomGradientInputValue};` : `background: ${tabIconHoverGradientColor};`}
            `: `
                ${ tabIconBgHoverColor ? `background: ${ tabIconBgHoverColor};` : ''}
            `}

            ${tabIconBorderHoverColor ? `border-color: ${tabIconBorderHoverColor};` : ''}
        }

        .${blockID} .fb-tab-icon-image-box .fb-tab-icon svg {
            ${tabIconSize?.Desktop && tabIconSizeUnits?.Desktop ? `width: ${tabIconSize?.Desktop}${tabIconSizeUnits?.Desktop};` : ''}
            ${tabIconSize?.Desktop && tabIconSizeUnits?.Desktop ? `height: ${tabIconSize?.Desktop}${tabIconSizeUnits?.Desktop};` : ''}
            ${tabIconColor ? `fill: ${tabIconColor};` : ''}
            transform: rotate(${tabIconRotate?.Desktop}deg);
            transition: all .3s ease-in-out;
            
        }

        .${blockID} .fb-tab-icon-image-box .fb-tab-icon:hover svg {
            ${tabIconHoverColor ? `fill: ${tabIconHoverColor};` : ''}
            transform: rotate(${tabIconRotateHover?.Desktop}deg); 
        }

        .${blockID} .fb-tab-icon-image-box .fb-tab-icon-image {
            ${tabIconImageWidth ? `width: ${tabIconImageWidth?.Desktop}${tabIconImageWidthUnits?.Desktop};` : ''}
            ${tabIconImageHeight ? `height: ${tabIconImageHeight?.Desktop}${tabIconImageHeightUnits?.Desktop};` : ''}
            transform: rotate(${tabIconImageRotate?.Desktop}deg);
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-tab-icon-image-box:hover .fb-tab-icon-image {
            transform: rotate(${tabIconImageRotateHover?.Desktop}deg);
        }


        .${blockID} .fb-tabs-wrap .fb-tabs-body-wrap {
            padding: 10px 15px;
            border: 1px solid #EEEDF0;
        }
        .${blockID} .fb-tabs-wrap .fb-tabs-body-wrap {
            ${tabContentPaddingDesktopWidth && tabContentPaddingDesktop?.top ? `padding: ${tabContentPaddingDesktopWidth};` : ''} 
            ${tabContentMarginDesktopWidth && tabContentMarginDesktop?.top ? `margin: ${tabContentMarginDesktopWidth};` : ''}
            ${tabContentBorder ? `border: ${tabContentBorder};` : ''}
            ${tabContentBorderColor ? `border-color: ${tabContentBorderColor};` : ''}
            ${tabContentBorderDesktopWidth && tabContentBorderDesktop?.top ? `border-width: ${tabContentBorderDesktopWidth};` : ''}
            ${tabContentBorderRadiusDesktopWidth && tabContentBorderRadiusDesktop?.top ? `border-radius: ${tabContentBorderRadiusDesktopWidth};` : ''} 

            ${tabContentBgColorType === "gradient"
                    ? `background: ${
                        tabContentBgCustomGradientColorSwitcher && tabContentBgCustomGradientColor
                        ? tabContentBgCustomGradientColor
                        : tabContentBgGradientColor
                    };`
                    : tabContentBgColor ? `background: ${tabContentBgColor};` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-tabs-wrap .fb-tabs-body-wrap:hover {
            ${tabContentBorderHoverColor ? `border-color: ${tabContentBorderHoverColor};` : ''} 
            ${tabContentBgHoverColorType === "gradient"
                    ? `background: ${
                        tabContentBgHoverCustomGradientColorSwitcher && tabContentBgHoverCustomGradientColor
                        ? tabContentBgHoverCustomGradientColor
                        : tabContentBgHoverGradientColor
                    };`
                    : tabContentBgHoverColor ? `background: ${tabContentBgHoverColor};` : ''
            }
        }

        ${fillTitlesWrapper && tabLayoutSwitcher === 'horizontal' && `
            .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li {
                flex: 1;
            }
        `}

        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-tabs-wrapper {
                ${tabGlobalPaddingTabletWidth && tabGlobalPaddingTablet?.top ? `padding: ${tabGlobalPaddingTabletWidth};` : ''}   
                ${tabGlobalMarginTabletWidth && tabGlobalMarginTablet?.top ? `margin: ${tabGlobalMarginTabletWidth};` : ''}
                ${tabGlobalBorderTabletWidth && tabGlobalBorderTablet?.top ? `border-width: ${tabGlobalBorderTabletWidth};` : ''}
                ${tabGlobalBorderRadiusTabletWidth && tabGlobalBorderRadiusTablet?.top ? `border-radius: ${tabGlobalBorderRadiusTabletWidth};` : ''} 
                ${tabGlobalZIndex?.Tablet ? `z-index: ${tabGlobalZIndex?.Tablet};` : ''}
            }

            .${blockID} .fb-tabs-wrap ul.fb-tabs-panel {
                ${tabTitlesAlignment?.Tablet ? `justify-content: ${tabTitlesAlignmentMap[tabTitlesAlignment?.Tablet]};` : ''}
                ${tabWrapperPaddingTabletWidth && tabWrapperPaddingTablet?.top ? `padding: ${tabWrapperPaddingTabletWidth};` : ''} 
                ${tabWrapperMarginTabletWidth && tabWrapperMarginTablet?.top ? `margin: ${tabWrapperMarginTabletWidth};` : ''}
                ${tabWrapperGap?.Tablet && tabWrapperGapUnits?.Tablet ? `gap: ${tabWrapperGap?.Tablet}${tabWrapperGapUnits?.Tablet};` : ''}
                ${tabWrapperBorderTabletWidth && tabWrapperBorderTablet?.top ? `border-width: ${tabWrapperBorderTabletWidth};` : ''}
                ${tabWrapperBorderRadiusTabletWidth && tabWrapperBorderRadiusTablet?.top ? `border-radius: ${tabWrapperBorderRadiusTabletWidth};` : ''} 
            }

            .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li {
                ${tabListPaddingTabletWidth && tabListPaddingTablet?.top ? `padding: ${tabListPaddingTabletWidth};` : ''}
                ${tabListMarginTabletWidth && tabListMarginTablet?.top ? `margin: ${tabListMarginTabletWidth};` : ''}
                ${tabListMinWidth?.Tablet && tabListMinWidthUnits?.Tablet ? `min-width: ${tabListMinWidth?.Tablet}${tabListMinWidthUnits?.Tablet};` : ''}
                ${tabListItemGap?.Tablet && tabListItemGapUnits?.Tablet ? `gap: ${tabListItemGap?.Tablet}${tabListItemGapUnits?.Tablet};` : ''}
                ${tabListBorderTabletWidth && tabListBorderTablet?.top ? `border-width: ${tabListBorderTabletWidth} !important;` : ''}
                ${tabListBorderRadiusTabletWidth && tabListBorderRadiusTablet?.top ? `border-radius: ${tabListBorderRadiusTabletWidth};` : ''} 
            }

            .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li .fb-tab-title {
                ${tabTitleGlobalTypoSwitcher?.fontSize === false && tabTitleFontSize?.Tablet && tabTitleFontSizeUnits?.Tablet ? `font-size: ${tabTitleFontSize?.Tablet}${tabTitleFontSizeUnits?.Tablet};` : ''}
                ${tabTitleGlobalTypoSwitcher?.letterSpacing === false && tabTitleLetterSpacing?.Tablet && tabTitleLetterSpacingUnits?.Tablet ? `letter-spacing: ${tabTitleLetterSpacing?.Tablet}${tabTitleLetterSpacingUnits?.Tablet};` : ''}
                ${tabTitleGlobalTypoSwitcher?.lineHeight === false && tabTitleLineHeight?.Tablet && tabTitleLineHeightUnits?.Tablet ? `line-height: ${tabTitleLineHeight?.Tablet}${tabTitleLineHeightUnits?.Tablet};` : ''}
                
                ${tabTitlePaddingTabletWidth && tabTitlePaddingTablet?.top ? `padding: ${tabTitlePaddingTabletWidth};` : ''}      
                ${tabTitleMarginTabletWidth && tabTitleMarginTablet?.top ? `margin: ${tabTitleMarginTabletWidth};` : ''}
                ${tabTitleBorderTabletWidth && tabTitleBorderTablet?.top ? `border-width: ${tabTitleBorderTabletWidth};` : ''}
                ${tabTitleBorderRadiusTabletWidth && tabTitleBorderRadiusTablet?.top ? `border-radius: ${tabTitleBorderRadiusTabletWidth};` : ''} 
            }

            .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li .fb-tab-description {
                ${tabDescriptionGlobalTypoSwitcher?.fontSize === false && tabDescriptionFontSize?.Tablet && tabDescriptionFontSizeUnits?.Tablet ? `font-size: ${tabDescriptionFontSize?.Tablet}${tabDescriptionFontSizeUnits?.Tablet};` : ''}
                ${tabDescriptionGlobalTypoSwitcher?.letterSpacing === false && tabDescriptionLetterSpacing?.Tablet && tabDescriptionLetterSpacingUnits?.Tablet ? `letter-spacing: ${tabDescriptionLetterSpacing?.Tablet}${tabDescriptionLetterSpacingUnits?.Tablet};` : ''}
                ${tabDescriptionGlobalTypoSwitcher?.lineHeight === false && tabDescriptionLineHeight?.Tablet && tabDescriptionLineHeightUnits?.Tablet ? `line-height: ${tabDescriptionLineHeight?.Tablet}${tabDescriptionLineHeightUnits?.Tablet};` : ''}
                
                ${tabDescriptionPaddingTabletWidth && tabDescriptionPaddingTablet?.top ? `padding: ${tabDescriptionPaddingTabletWidth};` : ''}     
                ${tabDescriptionMarginTabletWidth && tabDescriptionMarginTablet?.top ? `margin: ${tabDescriptionMarginTabletWidth};` : ''}
                ${tabDescriptionBorderTabletWidth && tabDescriptionBorderTablet?.top ? `border-width: ${tabDescriptionBorderTabletWidth};` : ''}
                ${tabDescriptionBorderRadiusTabletWidth && tabDescriptionBorderRadiusTablet?.top ? `border-radius: ${tabDescriptionBorderRadiusTabletWidth};` : ''} 
            }

            .${blockID} .fb-tab-icon-image-box .fb-tab-icon {
                ${tabIconBorderTabletWidth && tabIconBorderTablet?.top ? `border-width: ${tabIconBorderTabletWidth};` : ''}
                ${tabIconBorderRadiusTabletWidth && tabIconBorderRadiusTablet?.top ? `border-radius: ${tabIconBorderRadiusTabletWidth};` : ''} 
            }
            .${blockID} .fb-tab-icon-image-box .fb-tab-icon svg {
                ${tabIconSize?.Tablet && tabIconSizeUnits?.Tablet ? `width: ${tabIconSize?.Tablet}${tabIconSizeUnits?.Tablet};` : ''}
                ${tabIconSize?.Tablet && tabIconSizeUnits?.Tablet ? `height: ${tabIconSize?.Tablet}${tabIconSizeUnits?.Tablet};` : ''}
                transform: rotate(${tabIconRotate?.Tablet}deg);
            }

            .${blockID} .fb-tab-icon-image-box .fb-tab-icon:hover svg {
                transform: rotate(${tabIconRotateHover?.Tablet}deg); 
            }

            .${blockID} .fb-tab-icon-image-box .fb-tab-icon-image {
                ${tabIconImageWidth ? `width: ${tabIconImageWidth?.Tablet}${tabIconImageWidthUnits?.Tablet};` : ''}
                ${tabIconImageHeight ? `height: ${tabIconImageHeight?.Tablet}${tabIconImageHeightUnits?.Tablet};` : ''}
                transform: rotate(${tabIconImageRotate?.Tablet}deg);
            }

            .${blockID} .fb-tab-icon-image-box:hover .fb-tab-icon-image {
                transform: rotate(${tabIconImageRotateHover?.Tablet}deg);
            }

            .${blockID} .fb-tabs-wrap .fb-tabs-body-wrap {
                ${tabContentPaddingTabletWidth && tabContentPaddingTablet?.top ? `padding: ${tabContentPaddingTabletWidth};` : ''} 
                ${tabContentMarginTabletWidth && tabContentMarginTablet?.top ? `margin: ${tabContentMarginTabletWidth};` : ''}
                ${tabContentBorderTabletWidth && tabContentBorderTablet?.top ? `border-width: ${tabContentBorderTabletWidth};` : ''}
                ${tabContentBorderRadiusTabletWidth && tabContentBorderRadiusTablet?.top ? `border-radius: ${tabContentBorderRadiusTabletWidth};` : ''} 
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockID}.fb-tabs-wrapper {
                ${tabGlobalPaddingMobileWidth && tabGlobalPaddingMobile?.top ? `padding: ${tabGlobalPaddingMobileWidth};` : ''}   
                ${tabGlobalMarginMobileWidth && tabGlobalMarginMobile?.top ? `margin: ${tabGlobalMarginMobileWidth};` : ''}
                ${tabGlobalBorderMobileWidth && tabGlobalBorderMobile?.top ? `border-width: ${tabGlobalBorderMobileWidth};` : ''}
                ${tabGlobalBorderRadiusMobileWidth && tabGlobalBorderRadiusMobile?.top ? `border-radius: ${tabGlobalBorderRadiusMobileWidth};` : ''} 
                ${tabGlobalZIndex?.Mobile ? `z-index: ${tabGlobalZIndex?.Mobile};` : ''}
            }

            .${blockID} .fb-tabs-wrap ul.fb-tabs-panel {
                ${tabTitlesAlignment?.Mobile ? `justify-content: ${tabTitlesAlignmentMap[tabTitlesAlignment?.Mobile]};` : ''}
                ${tabWrapperPaddingMobileWidth && tabWrapperPaddingMobile?.top ? `padding: ${tabWrapperPaddingMobileWidth};` : ''} 
                ${tabWrapperMarginMobileWidth && tabWrapperMarginMobile?.top ? `margin: ${tabWrapperMarginMobileWidth};` : ''}
                ${tabWrapperGap?.Mobile && tabWrapperGapUnits?.Mobile ? `gap: ${tabWrapperGap?.Mobile}${tabWrapperGapUnits?.Mobile};` : ''}
                ${tabWrapperBorderMobileWidth && tabWrapperBorderMobile?.top ? `border-width: ${tabWrapperBorderMobileWidth};` : ''}
                ${tabWrapperBorderRadiusMobileWidth && tabWrapperBorderRadiusMobile?.top ? `border-radius: ${tabWrapperBorderRadiusMobileWidth};` : ''} 
            }

            .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li {
                ${tabListPaddingMobileWidth && tabListPaddingMobile?.top ? `padding: ${tabListPaddingMobileWidth};` : ''}
                ${tabListMarginMobileWidth && tabListMarginMobile?.top ? `margin: ${tabListMarginMobileWidth};` : ''}
                ${tabListMinWidth?.Mobile && tabListMinWidthUnits?.Mobile ? `min-width: ${tabListMinWidth?.Mobile}${tabListMinWidthUnits?.Mobile};` : ''}
                ${tabListItemGap?.Mobile && tabListItemGapUnits?.Mobile ? `gap: ${tabListItemGap?.Mobile}${tabListItemGapUnits?.Mobile};` : ''}
                ${tabListBorderMobileWidth && tabListBorderMobile?.top ? `border-width: ${tabListBorderMobileWidth} !important;` : ''}
                ${tabListBorderRadiusMobileWidth && tabListBorderRadiusMobile?.top ? `border-radius: ${tabListBorderRadiusMobileWidth};` : ''} 
            }

            .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li .fb-tab-title {
                ${tabTitleGlobalTypoSwitcher?.fontSize === false && tabTitleFontSize?.Mobile && tabTitleFontSizeUnits?.Mobile ? `font-size: ${tabTitleFontSize?.Mobile}${tabTitleFontSizeUnits?.Mobile};` : ''}
                ${tabTitleGlobalTypoSwitcher?.letterSpacing === false && tabTitleLetterSpacing?.Mobile && tabTitleLetterSpacingUnits?.Mobile ? `letter-spacing: ${tabTitleLetterSpacing?.Mobile}${tabTitleLetterSpacingUnits?.Mobile};` : ''}
                ${tabTitleGlobalTypoSwitcher?.lineHeight === false && tabTitleLineHeight?.Mobile && tabTitleLineHeightUnits?.Mobile ? `line-height: ${tabTitleLineHeight?.Mobile}${tabTitleLineHeightUnits?.Mobile};` : ''}
                
                ${tabTitlePaddingMobileWidth && tabTitlePaddingMobile?.top ? `padding: ${tabTitlePaddingMobileWidth};` : ''}      
                ${tabTitleMarginMobileWidth && tabTitleMarginMobile?.top ? `margin: ${tabTitleMarginMobileWidth};` : ''}
                ${tabTitleBorderMobileWidth && tabTitleBorderMobile?.top ? `border-width: ${tabTitleBorderMobileWidth};` : ''}
                ${tabTitleBorderRadiusMobileWidth && tabTitleBorderRadiusMobile?.top ? `border-radius: ${tabTitleBorderRadiusMobileWidth};` : ''} 
            }

            .${blockID} .fb-tabs-wrap ul.fb-tabs-panel li .fb-tab-description {
                ${tabDescriptionGlobalTypoSwitcher?.fontSize === false && tabDescriptionFontSize?.Mobile && tabDescriptionFontSizeUnits?.Mobile ? `font-size: ${tabDescriptionFontSize?.Mobile}${tabDescriptionFontSizeUnits?.Mobile};` : ''} 
                ${tabDescriptionGlobalTypoSwitcher?.letterSpacing === false && tabDescriptionLetterSpacing?.Mobile && tabDescriptionLetterSpacingUnits?.Mobile ? `letter-spacing: ${tabDescriptionLetterSpacing?.Mobile}${tabDescriptionLetterSpacingUnits?.Mobile};` : ''}
                ${tabDescriptionGlobalTypoSwitcher?.lineHeight === false && tabDescriptionLineHeight?.Mobile && tabDescriptionLineHeightUnits?.Mobile ? `line-height: ${tabDescriptionLineHeight?.Mobile}${tabDescriptionLineHeightUnits?.Mobile};` : ''}
                
                ${tabDescriptionPaddingMobileWidth && tabDescriptionPaddingMobile?.top ? `padding: ${tabDescriptionPaddingMobileWidth};` : ''}     
                ${tabDescriptionMarginMobileWidth && tabDescriptionMarginMobile?.top ? `margin: ${tabDescriptionMarginMobileWidth};` : ''}
                ${tabDescriptionBorderMobileWidth && tabDescriptionBorderMobile?.top ? `border-width: ${tabDescriptionBorderMobileWidth};` : ''}
                ${tabDescriptionBorderRadiusMobileWidth && tabDescriptionBorderRadiusMobile?.top ? `border-radius: ${tabDescriptionBorderRadiusMobileWidth};` : ''} 
            }

            .${blockID} .fb-tab-icon-image-box .fb-tab-icon {
                ${tabIconBorderMobileWidth && tabIconBorderMobile?.top ? `border-width: ${tabIconBorderMobileWidth};` : ''}
                ${tabIconBorderRadiusMobileWidth && tabIconBorderRadiusMobile?.top ? `border-radius: ${tabIconBorderRadiusMobileWidth};` : ''} 
            }
            .${blockID} .fb-tab-icon-image-box .fb-tab-icon svg {
                ${tabIconSize?.Mobile && tabIconSizeUnits?.Mobile ? `width: ${tabIconSize?.Mobile}${tabIconSizeUnits?.Mobile};` : ''}
                ${tabIconSize?.Mobile && tabIconSizeUnits?.Mobile ? `height: ${tabIconSize?.Mobile}${tabIconSizeUnits?.Mobile};` : ''}
                transform: rotate(${tabIconRotate?.Mobile}deg);
            }

            .${blockID} .fb-tab-icon-image-box .fb-tab-icon:hover svg {
                transform: rotate(${tabIconRotateHover?.Mobile}deg); 
            }

            .${blockID} .fb-tab-icon-image-box .fb-tab-icon-image {
                ${tabIconImageWidth ? `width: ${tabIconImageWidth?.Mobile}${tabIconImageWidthUnits?.Mobile};` : ''}
                ${tabIconImageHeight ? `height: ${tabIconImageHeight?.Mobile}${tabIconImageHeightUnits?.Mobile};` : ''}
                transform: rotate(${tabIconImageRotate?.Mobile}deg);
            }

            .${blockID} .fb-tab-icon-image-box:hover .fb-tab-icon-image {
                transform: rotate(${tabIconImageRotateHover?.Mobile}deg);
            }

            .${blockID} .fb-tabs-wrap .fb-tabs-body-wrap {
                ${tabContentPaddingMobileWidth && tabContentPaddingMobile?.top ? `padding: ${tabContentPaddingMobileWidth};` : ''} 
                ${tabContentMarginMobileWidth && tabContentMarginMobile?.top ? `margin: ${tabContentMarginMobileWidth};` : ''}
                ${tabContentBorderMobileWidth && tabContentBorderMobile?.top ? `border-width: ${tabContentBorderMobileWidth};` : ''}
                ${tabContentBorderRadiusMobileWidth && tabContentBorderRadiusMobile?.top ? `border-radius: ${tabContentBorderRadiusMobileWidth};` : ''} 
            }
        }
    `;

    const customCss = getCustomCss(tabGlobalCustomCSS, `.${blockID} `);
    return `${tabsBlockStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generateTabsStyle;