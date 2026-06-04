/**
 * Google Map Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateVerticalTimelineItemStyle = (attributes) => {
    const {
        blockID,
        /** Start General Settings */
        verticalTimelineItemSectionLabel,
        showPhaseTitleSwitcher,
        verticalTimelineItemPhaseTitle,
        verticalTimelineItemIcon,
        /** End General Settings */

        /** Start Content Box Background */
        vertcalTimelineContentBoxGlobalBgColorSwitcher,
        vertcalTimelineContentBoxGlobalNormalBackgroundType,
        vertcalTimelineContentBoxGlobalNormalClassicColor,
        vertcalTimelineContentBoxGlobalNormalGradientColor,
        vertcalTimelineContentBoxGlobalNormalCustomGradientSwitcher,
        vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue,

        vertcalTimelineContentBoxGlobalHoverBackgroundType,
        vertcalTimelineContentBoxGlobalHoverClassicColor,
        vertcalTimelineContentBoxGlobalHoverGradientColor,
        vertcalTimelineContentBoxGlobalHoverCustomGradientSwitcher,
        vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue,
        /** End Content Box  Background */

        /** Start Phase Title Background */
        vertcalTimelinePhaseTitleNormalBgColorSwitcher,
        vertcalTimelinePhaseTitleNormalBackgroundType,
        vertcalTimelinePhaseTitleNormalClassicColor,
        vertcalTimelinePhaseTitleNormalGradientColor,
        vertcalTimelinePhaseTitleNormalCustomGradientSwitcher,
        vertcalTimelinePhaseTitleNormalCustomGradientInputValue,

        vertcalTimelinePhaseTitleHoverBackgroundType,
        vertcalTimelinePhaseTitleHoverClassicColor,
        vertcalTimelinePhaseTitleHoverGradientColor,
        vertcalTimelinePhaseTitleHoverCustomGradientSwitcher,
        vertcalTimelinePhaseTitleHoverCustomGradientInputValue,
        /** End Phase Title Background */

        /** Start Content Box Border */
        vertcalTimelineContentBoxGlobalBorder,
        vertcalTimelineContentBoxGlobalBorderColorSwitcher,
        vertcalTimelineContentBoxGlobalBorderColor,
        vertcalTimelineContentBoxGlobalBorderHoverColor,
        vertcalTimelineContentBoxGlobalBorderUnits,
        vertcalTimelineContentBoxGlobalBorderDesktop,
        vertcalTimelineContentBoxGlobalBorderTablet,
        vertcalTimelineContentBoxGlobalBorderMobile,
        vertcalTimelineContentBoxGlobalBorderLink,
        /** End Content Box Border */

        /** Start Phase Title Border */
        vertcalTimelinePhaseTitleNormalBorder,
        vertcalTimelinePhaseTitleNormalBorderColorSwitcher,
        vertcalTimelinePhaseTitleNormalBorderColor,
        vertcalTimelinePhaseTitleNormalBorderHoverColor,
        vertcalTimelinePhaseTitleNormalBorderUnits,
        vertcalTimelinePhaseTitleNormalBorderDesktop,
        vertcalTimelinePhaseTitleNormalBorderTablet,
        vertcalTimelinePhaseTitleNormalBorderMobile,
        vertcalTimelinePhaseTitleNormalBorderLink,
        /** End Phase Title Border */

        /** Start Content Box Border Radius */
        vertcalTimelineContentBoxGlobalBorderRadiusUnits,
        vertcalTimelineContentBoxGlobalBorderRadiusDesktop,
        vertcalTimelineContentBoxGlobalBorderRadiusTablet,
        vertcalTimelineContentBoxGlobalBorderRadiusMobile,
        vertcalTimelineContentBoxGlobalBorderRadiusLink,
        /** End Content Box Border Radius */

        /** Start Phase Title Border Radius */
        vertcalTimelinePhaseTitleNormalBorderRadiusUnits,
        vertcalTimelinePhaseTitleNormalBorderRadiusDesktop,
        vertcalTimelinePhaseTitleNormalBorderRadiusTablet,
        vertcalTimelinePhaseTitleNormalBorderRadiusMobile,
        vertcalTimelinePhaseTitleNormalBorderRadiusLink,
        /** End Phase Title Border Radius */

        /** Start Content Box Padding */
        vertcalTimelineContentBoxPaddingUnits,
        vertcalTimelineContentBoxPaddingDesktop,
        vertcalTimelineContentBoxPaddingTablet,
        vertcalTimelineContentBoxPaddingMobile,
        vertcalTimelineContentBoxPaddingLink,
        /** End Content Box Padding */

        /** Start Phase Title Padding */
        vertcalTimelinePhaseTitlePaddingUnits,
        vertcalTimelinePhaseTitlePaddingDesktop,
        vertcalTimelinePhaseTitlePaddingTablet,
        vertcalTimelinePhaseTitlePaddingMobile,
        vertcalTimelinePhaseTitlePaddingLink,
        /** End Phase Title Padding */

        /** Start Content Box Margin */
        vertcalTimelineContentBoxMarginUnits,
        vertcalTimelineContentBoxMarginDesktop,
        vertcalTimelineContentBoxMarginTablet,
        vertcalTimelineContentBoxMarginMobile,
        vertcalTimelineContentBoxMarginLink,
        /** End Content Box Margin */

        /** Start Phase Title Margin */
        vertcalTimelinePhaseTitleMarginUnits,
        vertcalTimelinePhaseTitleMarginDesktop,
        vertcalTimelinePhaseTitleMarginTablet,
        vertcalTimelinePhaseTitleMarginMobile,
        vertcalTimelinePhaseTitleMarginLink,
        /** End Phase Title Margin */

        /** Start Content Box Box Shadow */
        vertcalTimelineContentBoxBoxShadowSwitcher,
        vertcalTimelineContentBoxBoxShadowValues,
        vertcalTimelineContentBoxBoxShadowCssValue,
        vertcalTimelineContentBoxBoxShadowHoverValues,
        vertcalTimelineContentBoxBoxShadowHoverCssValue,
        /** End Content Box Box Shadow */

        /** Start Phase Title Box Shadow */
        vertcalTimelinePhaseTitleBoxShadowSwitcher,
        vertcalTimelinePhaseTitleBoxShadowValues,
        vertcalTimelinePhaseTitleBoxShadowCssValue,
        vertcalTimelinePhaseTitleBoxShadowHoverValues,
        vertcalTimelinePhaseTitleBoxShadowHoverCssValue,
        /** End Phase Title Box Shadow */

        /** Start Phase Title Alignment */
        vertcalTimelinePhaseTitleAlignment,
        /** End Phase Title Alignment */

        /** Start Phase Title Typography */
        phaseTitleTypoSwitcher,
        phaseTitleTypoType,
        phaseTitleTypoOption,
        phaseTitleFontFamily,
        phaseTitleFontSize,
        phaseTitleFontSizeUnits,
        phaseTitleFontWeight,
        phaseTitleFontStyle,
        phaseTitleTextTransform,
        phaseTitleTextDecoration,
        phaseTitleLetterSpacing,
        phaseTitleLineHeight,
        phaseTitleLetterSpacingUnits,
        phaseTitleLineHeightUnits,
        /** End Phase Title Typography */

        /** Start Phase Title Color */
        vertcalTimelinePhaseTitleColorSwitcher,
        vertcalTimelinePhaseTitleColor,
        vertcalTimelinePhaseTitleHoverColor,
        /** End Phase Title Color */

        /** Start Section Lebel Typography */
        sectionLebelTypoSwitcher,
        sectionLebelTypographyData,
        sectionLebelFontFamily,
        sectionLebelFontSize,
        sectionLebelFontSizeUnits,
        sectionLebelFontWeight,
        sectionLebelFontStyle,
        sectionLebelTextTransform,
        sectionLebelTextDecoration,
        sectionLebelLetterSpacing,
        sectionLebelLineHeight,
        sectionLebelLetterSpacingUnits,
        sectionLebelLineHeightUnits,
        /** End Section Lebel Typography */

        /** Start Section Lebel Colors */
        sectionLebelBtnTextColorSwitcher,
        sectionLebelBtnTextColor,
        sectionLebelBtnTextHoverColor,
        /** End Section Lebel Colors */

        /** Start Icon Padding */
        verticalTimelineItemIconPaddingUnits,
        verticalTimelineItemIconPaddingDesktop,
        verticalTimelineItemIconPaddingTablet,
        verticalTimelineItemIconPaddingMobile,
        verticalTimelineItemIconPaddingLink,
        /** End Icon Padding */

        /** Start Icon Background Color */
        verticalTimelineItemIconBgColorSwitcher,
        verticalTimelineItemIconNormalBackgroundType,
        verticalTimelineItemIconNormalClassicColor,
        verticalTimelineItemIconNormalGradientColor,
        verticalTimelineItemIconNormalCustomGradientSwitcher,
        verticalTimelineItemIconNormalCustomGradientInputValue,
        verticalTimelineItemIconHoverBackgroundType,
        verticalTimelineItemIconHoverClassicColor,
        verticalTimelineItemIconHoverGradientColor,
        verticalTimelineItemIconHoverCustomGradientSwitcher,
        verticalTimelineItemIconHoverCustomGradientInputValue,
        /** End Icon Background Color */

        /** Start Icon Colors */
        verticalTimelineItemIconColorSwitcher,
        verticalTimelineItemIconColor,
        verticalTimelineItemIconHoverColor,
        /** End Icon Colors */

        /** Start Icon Border */
        verticalTimelineItemIconBorderUnits,
        verticalTimelineItemIconBorderDesktop,
        verticalTimelineItemIconBorderTablet,
        verticalTimelineItemIconBorderMobile,
        verticalTimelineItemIconBorderLink,
        /** End Icon Border */

        /** Start Icon Border Radius */
        verticalTimelineItemIconBorderRadiusUnits,
        verticalTimelineItemIconBorderRadiusDesktop,
        verticalTimelineItemIconBorderRadiusTablet,
        verticalTimelineItemIconBorderRadiusMobile,
        verticalTimelineItemIconBorderRadiusLink,
        /** End Icon Border Radius */

        /** Start Icon Box Shadow */
        verticalTimelineItemIconBoxShadowSwitcher,
        verticalTimelineItemIconBoxShadowValues,
        verticalTimelineItemIconBoxShadowCssValue,
        verticalTimelineItemIconBoxShadowHoverValues,
        verticalTimelineItemIconBoxShadowHoverCssValue,
        /** End Icon Box Shadow */

        /** Start Icon Border */
        verticalTimelineItemIconBorder,
        verticalTimelineItemIconBorderColorSwitcher,
        verticalTimelineItemIconBorderColor,
        verticalTimelineItemIconBorderHoverColor,
        /** End Icon Border */

        /** Start Icon Size */
        verticalTimelineIconSize,
        verticalTimelineIconSizeUnits,
        /** End Icon Size */

        /** Start Class & ID Setting */
        verticalTimelineItemGlobalZIndex,
        verticalTimelineItemCustomCSS,
        verticalTimelineItemWraperID,
        verticalTimelineItemWraperClass,
        /** End Class & ID Setting */
    } = attributes;

    /** Default padding for Vertical Timeline Item Content Box */
    const vertcalTimelineContentBoxPaddingDesktopWidth = `${vertcalTimelineContentBoxPaddingDesktop?.top}${vertcalTimelineContentBoxPaddingUnits?.Desktop} ${vertcalTimelineContentBoxPaddingDesktop?.right}${vertcalTimelineContentBoxPaddingUnits?.Desktop} ${vertcalTimelineContentBoxPaddingDesktop?.bottom}${vertcalTimelineContentBoxPaddingUnits?.Desktop} ${vertcalTimelineContentBoxPaddingDesktop?.left}${vertcalTimelineContentBoxPaddingUnits?.Desktop}`;
    const vertcalTimelineContentBoxPaddingTabletWidth = `${vertcalTimelineContentBoxPaddingTablet?.top}${vertcalTimelineContentBoxPaddingUnits?.Tablet} ${vertcalTimelineContentBoxPaddingTablet?.right}${vertcalTimelineContentBoxPaddingUnits?.Tablet} ${vertcalTimelineContentBoxPaddingTablet?.bottom}${vertcalTimelineContentBoxPaddingUnits?.Tablet} ${vertcalTimelineContentBoxPaddingTablet?.left}${vertcalTimelineContentBoxPaddingUnits?.Tablet}`;
    const vertcalTimelineContentBoxPaddingMobileWidth = `${vertcalTimelineContentBoxPaddingMobile?.top}${vertcalTimelineContentBoxPaddingUnits?.Mobile} ${vertcalTimelineContentBoxPaddingMobile?.right}${vertcalTimelineContentBoxPaddingUnits?.Mobile} ${vertcalTimelineContentBoxPaddingMobile?.bottom}${vertcalTimelineContentBoxPaddingUnits?.Mobile} ${vertcalTimelineContentBoxPaddingMobile?.left}${vertcalTimelineContentBoxPaddingUnits?.Mobile}`;

    /** Default margin for Vertical Timeline Item Content Box */
    const vertcalTimelineContentBoxMarginDesktopWidth = `${vertcalTimelineContentBoxMarginDesktop?.top}${vertcalTimelineContentBoxMarginUnits?.Desktop} ${vertcalTimelineContentBoxMarginDesktop?.right}${vertcalTimelineContentBoxMarginUnits?.Desktop} ${vertcalTimelineContentBoxMarginDesktop?.bottom}${vertcalTimelineContentBoxMarginUnits?.Desktop} ${vertcalTimelineContentBoxMarginDesktop?.left}${vertcalTimelineContentBoxMarginUnits?.Desktop}`;
    const vertcalTimelineContentBoxMarginTabletWidth = `${vertcalTimelineContentBoxMarginTablet?.top}${vertcalTimelineContentBoxMarginUnits?.Tablet} ${vertcalTimelineContentBoxMarginTablet?.right}${vertcalTimelineContentBoxMarginUnits?.Tablet} ${vertcalTimelineContentBoxMarginTablet?.bottom}${vertcalTimelineContentBoxMarginUnits?.Tablet} ${vertcalTimelineContentBoxMarginTablet?.left}${vertcalTimelineContentBoxMarginUnits?.Tablet}`;
    const vertcalTimelineContentBoxMarginMobileWidth = `${vertcalTimelineContentBoxMarginMobile?.top}${vertcalTimelineContentBoxMarginUnits?.Mobile} ${vertcalTimelineContentBoxMarginMobile?.right}${vertcalTimelineContentBoxMarginUnits?.Mobile} ${vertcalTimelineContentBoxMarginMobile?.bottom}${vertcalTimelineContentBoxMarginUnits?.Mobile} ${vertcalTimelineContentBoxMarginMobile?.left}${vertcalTimelineContentBoxMarginUnits?.Mobile}`;

    /** Default border for Vertical Timeline Item Content Box */
    const vertcalTimelineContentBoxGlobalBorderDesktopWidth = `${vertcalTimelineContentBoxGlobalBorderDesktop?.top}${vertcalTimelineContentBoxGlobalBorderUnits?.Desktop} ${vertcalTimelineContentBoxGlobalBorderDesktop?.right}${vertcalTimelineContentBoxGlobalBorderUnits?.Desktop} ${vertcalTimelineContentBoxGlobalBorderDesktop?.bottom}${vertcalTimelineContentBoxGlobalBorderUnits?.Desktop} ${vertcalTimelineContentBoxGlobalBorderDesktop?.left}${vertcalTimelineContentBoxGlobalBorderUnits?.Desktop}`;
    const vertcalTimelineContentBoxGlobalBorderTabletWidth = `${vertcalTimelineContentBoxGlobalBorderTablet?.top}${vertcalTimelineContentBoxGlobalBorderUnits?.Tablet} ${vertcalTimelineContentBoxGlobalBorderTablet?.right}${vertcalTimelineContentBoxGlobalBorderUnits?.Tablet} ${vertcalTimelineContentBoxGlobalBorderTablet?.bottom}${vertcalTimelineContentBoxGlobalBorderUnits?.Tablet} ${vertcalTimelineContentBoxGlobalBorderTablet?.left}${vertcalTimelineContentBoxGlobalBorderUnits?.Tablet}`;
    const vertcalTimelineContentBoxGlobalBorderMobileWidth = `${vertcalTimelineContentBoxGlobalBorderMobile?.top}${vertcalTimelineContentBoxGlobalBorderUnits?.Mobile} ${vertcalTimelineContentBoxGlobalBorderMobile?.right}${vertcalTimelineContentBoxGlobalBorderUnits?.Mobile} ${vertcalTimelineContentBoxGlobalBorderMobile?.bottom}${vertcalTimelineContentBoxGlobalBorderUnits?.Mobile} ${vertcalTimelineContentBoxGlobalBorderMobile?.left}${vertcalTimelineContentBoxGlobalBorderUnits?.Mobile}`;

    /** Default border radius for Vertical Timeline Item Content Box */
    const vertcalTimelineContentBoxGlobalBorderRadiusDesktopWidth = `${vertcalTimelineContentBoxGlobalBorderRadiusDesktop?.top}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Desktop} ${vertcalTimelineContentBoxGlobalBorderRadiusDesktop?.right}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Desktop} ${vertcalTimelineContentBoxGlobalBorderRadiusDesktop?.bottom}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Desktop} ${vertcalTimelineContentBoxGlobalBorderRadiusDesktop?.left}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Desktop}`;
    const vertcalTimelineContentBoxGlobalBorderRadiusTabletWidth = `${vertcalTimelineContentBoxGlobalBorderRadiusTablet?.top}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Tablet} ${vertcalTimelineContentBoxGlobalBorderRadiusTablet?.right}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Tablet} ${vertcalTimelineContentBoxGlobalBorderRadiusTablet?.bottom}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Tablet} ${vertcalTimelineContentBoxGlobalBorderRadiusTablet?.left}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Tablet}`;
    const vertcalTimelineContentBoxGlobalBorderRadiusMobileWidth = `${vertcalTimelineContentBoxGlobalBorderRadiusMobile?.top}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Mobile} ${vertcalTimelineContentBoxGlobalBorderRadiusMobile?.right}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Mobile} ${vertcalTimelineContentBoxGlobalBorderRadiusMobile?.bottom}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Mobile} ${vertcalTimelineContentBoxGlobalBorderRadiusMobile?.left}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Mobile}`;

    /** Default padding for Vertical Timeline Item Phase Title */
    const vertcalTimelinePhaseTitlePaddingDesktopWidth = `${vertcalTimelinePhaseTitlePaddingDesktop?.top}${vertcalTimelinePhaseTitlePaddingUnits?.Desktop} ${vertcalTimelinePhaseTitlePaddingDesktop?.right}${vertcalTimelinePhaseTitlePaddingUnits?.Desktop} ${vertcalTimelinePhaseTitlePaddingDesktop?.bottom}${vertcalTimelinePhaseTitlePaddingUnits?.Desktop} ${vertcalTimelinePhaseTitlePaddingDesktop?.left}${vertcalTimelinePhaseTitlePaddingUnits?.Desktop}`;
    const vertcalTimelinePhaseTitlePaddingTabletWidth = `${vertcalTimelinePhaseTitlePaddingTablet?.top}${vertcalTimelinePhaseTitlePaddingUnits?.Tablet} ${vertcalTimelinePhaseTitlePaddingTablet?.right}${vertcalTimelinePhaseTitlePaddingUnits?.Tablet} ${vertcalTimelinePhaseTitlePaddingTablet?.bottom}${vertcalTimelinePhaseTitlePaddingUnits?.Tablet} ${vertcalTimelinePhaseTitlePaddingTablet?.left}${vertcalTimelinePhaseTitlePaddingUnits?.Tablet}`;
    const vertcalTimelinePhaseTitlePaddingMobileWidth = `${vertcalTimelinePhaseTitlePaddingMobile?.top}${vertcalTimelinePhaseTitlePaddingUnits?.Mobile} ${vertcalTimelinePhaseTitlePaddingMobile?.right}${vertcalTimelinePhaseTitlePaddingUnits?.Mobile} ${vertcalTimelinePhaseTitlePaddingMobile?.bottom}${vertcalTimelinePhaseTitlePaddingUnits?.Mobile} ${vertcalTimelinePhaseTitlePaddingMobile?.left}${vertcalTimelinePhaseTitlePaddingUnits?.Mobile}`;

    /** Default margin for Vertical Timeline Item Phase Title */
    const vertcalTimelinePhaseTitleMarginDesktopWidth = `${vertcalTimelinePhaseTitleMarginDesktop?.top}${vertcalTimelinePhaseTitleMarginUnits?.Desktop} ${vertcalTimelinePhaseTitleMarginDesktop?.right}${vertcalTimelinePhaseTitleMarginUnits?.Desktop} ${vertcalTimelinePhaseTitleMarginDesktop?.bottom}${vertcalTimelinePhaseTitleMarginUnits?.Desktop} ${vertcalTimelinePhaseTitleMarginDesktop?.left}${vertcalTimelinePhaseTitleMarginUnits?.Desktop}`;
    const vertcalTimelinePhaseTitleMarginTabletWidth = `${vertcalTimelinePhaseTitleMarginTablet?.top}${vertcalTimelinePhaseTitleMarginUnits?.Tablet} ${vertcalTimelinePhaseTitleMarginTablet?.right}${vertcalTimelinePhaseTitleMarginUnits?.Tablet} ${vertcalTimelinePhaseTitleMarginTablet?.bottom}${vertcalTimelinePhaseTitleMarginUnits?.Tablet} ${vertcalTimelinePhaseTitleMarginTablet?.left}${vertcalTimelinePhaseTitleMarginUnits?.Tablet}`;
    const vertcalTimelinePhaseTitleMarginMobileWidth = `${vertcalTimelinePhaseTitleMarginMobile?.top}${vertcalTimelinePhaseTitleMarginUnits?.Mobile} ${vertcalTimelinePhaseTitleMarginMobile?.right}${vertcalTimelinePhaseTitleMarginUnits?.Mobile} ${vertcalTimelinePhaseTitleMarginMobile?.bottom}${vertcalTimelinePhaseTitleMarginUnits?.Mobile} ${vertcalTimelinePhaseTitleMarginMobile?.left}${vertcalTimelinePhaseTitleMarginUnits?.Mobile}`;

    /** Default border for Vertical Timeline Item Phase Title */
    const vertcalTimelinePhaseTitleBorderDesktopWidth = `${vertcalTimelinePhaseTitleNormalBorderDesktop?.top}${vertcalTimelinePhaseTitleNormalBorderUnits?.Desktop} ${vertcalTimelinePhaseTitleNormalBorderDesktop?.right}${vertcalTimelinePhaseTitleNormalBorderUnits?.Desktop} ${vertcalTimelinePhaseTitleNormalBorderDesktop?.bottom}${vertcalTimelinePhaseTitleNormalBorderUnits?.Desktop} ${vertcalTimelinePhaseTitleNormalBorderDesktop?.left}${vertcalTimelinePhaseTitleNormalBorderUnits?.Desktop}`;
    const vertcalTimelinePhaseTitleBorderTabletWidth = `${vertcalTimelinePhaseTitleNormalBorderTablet?.top}${vertcalTimelinePhaseTitleNormalBorderUnits?.Tablet} ${vertcalTimelinePhaseTitleNormalBorderTablet?.right}${vertcalTimelinePhaseTitleNormalBorderUnits?.Tablet} ${vertcalTimelinePhaseTitleNormalBorderTablet?.bottom}${vertcalTimelinePhaseTitleNormalBorderUnits?.Tablet} ${vertcalTimelinePhaseTitleNormalBorderTablet?.left}${vertcalTimelinePhaseTitleNormalBorderUnits?.Tablet}`;
    const vertcalTimelinePhaseTitleBorderMobileWidth = `${vertcalTimelinePhaseTitleNormalBorderMobile?.top}${vertcalTimelinePhaseTitleNormalBorderUnits?.Mobile} ${vertcalTimelinePhaseTitleNormalBorderMobile?.right}${vertcalTimelinePhaseTitleNormalBorderUnits?.Mobile} ${vertcalTimelinePhaseTitleNormalBorderMobile?.bottom}${vertcalTimelinePhaseTitleNormalBorderUnits?.Mobile} ${vertcalTimelinePhaseTitleNormalBorderMobile?.left}${vertcalTimelinePhaseTitleNormalBorderUnits?.Mobile}`;

    /** Default border radius for Vertical Timeline Item Phase Title */
    const vertcalTimelinePhaseTitleBorderRadiusDesktopWidth = `${vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.top}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Desktop} ${vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.right}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Desktop} ${vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.bottom}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Desktop} ${vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.left}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Desktop}`;
    const vertcalTimelinePhaseTitleBorderRadiusTabletWidth = `${vertcalTimelinePhaseTitleNormalBorderRadiusTablet?.top}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Tablet} ${vertcalTimelinePhaseTitleNormalBorderRadiusTablet?.right}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Tablet} ${vertcalTimelinePhaseTitleNormalBorderRadiusTablet?.bottom}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Tablet} ${vertcalTimelinePhaseTitleNormalBorderRadiusTablet?.left}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Tablet}`;
    const vertcalTimelinePhaseTitleBorderRadiusMobileWidth = `${vertcalTimelinePhaseTitleNormalBorderRadiusMobile?.top}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Mobile} ${vertcalTimelinePhaseTitleNormalBorderRadiusMobile?.right}${vertcalTimelinePhaseTitleNormalBorderRadiusMobile?.right} ${vertcalTimelinePhaseTitleNormalBorderRadiusMobile?.bottom}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Mobile} ${vertcalTimelinePhaseTitleNormalBorderRadiusMobile?.left}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Mobile}`;

    /** Default padding for Vertical Timeline Item Icon */
    const verticalTimelineItemIconPaddingDesktopWidth = `${verticalTimelineItemIconPaddingDesktop?.top}${verticalTimelineItemIconPaddingUnits?.Desktop} ${verticalTimelineItemIconPaddingDesktop?.right}${verticalTimelineItemIconPaddingUnits?.Desktop} ${verticalTimelineItemIconPaddingDesktop?.bottom}${verticalTimelineItemIconPaddingUnits?.Desktop} ${verticalTimelineItemIconPaddingDesktop?.left}${verticalTimelineItemIconPaddingUnits?.Desktop}`;
    const verticalTimelineItemIconPaddingTabletWidth = `${verticalTimelineItemIconPaddingTablet?.top}${verticalTimelineItemIconPaddingUnits?.Tablet} ${verticalTimelineItemIconPaddingTablet?.right}${verticalTimelineItemIconPaddingUnits?.Tablet} ${verticalTimelineItemIconPaddingTablet?.bottom}${verticalTimelineItemIconPaddingUnits?.Tablet} ${verticalTimelineItemIconPaddingTablet?.left}${verticalTimelineItemIconPaddingUnits?.Tablet}`;
    const verticalTimelineItemIconPaddingMobileWidth = `${verticalTimelineItemIconPaddingMobile?.top}${verticalTimelineItemIconPaddingUnits?.Mobile} ${verticalTimelineItemIconPaddingMobile?.right}${verticalTimelineItemIconPaddingUnits?.Mobile} ${verticalTimelineItemIconPaddingMobile?.bottom}${verticalTimelineItemIconPaddingUnits?.Mobile} ${verticalTimelineItemIconPaddingMobile?.left}${verticalTimelineItemIconPaddingUnits?.Mobile}`;

    /** Default border for Vertical Timeline Item Icon */
    const verticalTimelineItemIconBorderDesktopWidth = `${verticalTimelineItemIconBorderDesktop?.top}${verticalTimelineItemIconBorderUnits?.Desktop} ${verticalTimelineItemIconBorderDesktop?.right}${verticalTimelineItemIconBorderUnits?.Desktop} ${verticalTimelineItemIconBorderDesktop?.bottom}${verticalTimelineItemIconBorderUnits?.Desktop} ${verticalTimelineItemIconBorderDesktop?.left}${verticalTimelineItemIconBorderUnits?.Desktop}`;
    const verticalTimelineItemIconBorderTabletWidth = `${verticalTimelineItemIconBorderTablet?.top}${verticalTimelineItemIconBorderUnits?.Tablet} ${verticalTimelineItemIconBorderTablet?.right}${verticalTimelineItemIconBorderUnits?.Tablet} ${verticalTimelineItemIconBorderTablet?.bottom}${verticalTimelineItemIconBorderUnits?.Tablet} ${verticalTimelineItemIconBorderTablet?.left}${verticalTimelineItemIconBorderUnits?.Tablet}`;
    const verticalTimelineItemIconBorderMobileWidth = `${verticalTimelineItemIconBorderMobile?.top}${verticalTimelineItemIconBorderUnits?.Mobile} ${verticalTimelineItemIconBorderMobile?.right}${verticalTimelineItemIconBorderUnits?.Mobile} ${verticalTimelineItemIconBorderMobile?.bottom}${verticalTimelineItemIconBorderUnits?.Mobile} ${verticalTimelineItemIconBorderMobile?.left}${verticalTimelineItemIconBorderUnits?.Mobile}`;

    /** Default border radius for Vertical Timeline Item Icon */
    const verticalTimelineItemIconBorderRadiusDesktopWidth = `${verticalTimelineItemIconBorderRadiusDesktop?.top}${verticalTimelineItemIconBorderRadiusUnits?.Desktop} ${verticalTimelineItemIconBorderRadiusDesktop?.right}${verticalTimelineItemIconBorderRadiusUnits?.Desktop} ${verticalTimelineItemIconBorderRadiusDesktop?.bottom}${verticalTimelineItemIconBorderRadiusUnits?.Desktop} ${verticalTimelineItemIconBorderRadiusDesktop?.left}${verticalTimelineItemIconBorderRadiusUnits?.Desktop}`;
    const verticalTimelineItemIconBorderRadiusTabletWidth = `${verticalTimelineItemIconBorderRadiusTablet?.top}${verticalTimelineItemIconBorderRadiusUnits?.Tablet} ${verticalTimelineItemIconBorderRadiusTablet?.right}${verticalTimelineItemIconBorderRadiusUnits?.Tablet} ${verticalTimelineItemIconBorderRadiusTablet?.bottom}${verticalTimelineItemIconBorderRadiusUnits?.Tablet} ${verticalTimelineItemIconBorderRadiusTablet?.left}${verticalTimelineItemIconBorderRadiusUnits?.Tablet}`;
    const verticalTimelineItemIconBorderRadiusMobileWidth = `${verticalTimelineItemIconBorderRadiusMobile?.top}${verticalTimelineItemIconBorderRadiusUnits?.Mobile} ${verticalTimelineItemIconBorderRadiusMobile?.right}${verticalTimelineItemIconBorderRadiusUnits?.Mobile} ${verticalTimelineItemIconBorderRadiusMobile?.bottom}${verticalTimelineItemIconBorderRadiusUnits?.Mobile} ${verticalTimelineItemIconBorderRadiusMobile?.left}${verticalTimelineItemIconBorderRadiusUnits?.Mobile}`;


    const fbTimelineItemStyle = `

    .${blockID} .fb-vertical-timeline-item-wrapper {
            ${verticalTimelineItemGlobalZIndex?.Desktop ? `z-index: ${verticalTimelineItemGlobalZIndex?.Desktop};` : ''}
            box-sizing: border-box;
            transition: all .3s ease-in-out;
            position: relative;
        }

       .${blockID} .fb-vertical-timeline-item-inner-wrapper {
           ${vertcalTimelineContentBoxPaddingDesktopWidth && vertcalTimelineContentBoxPaddingDesktop?.top ? `padding: ${vertcalTimelineContentBoxPaddingDesktopWidth};` : ''}
           ${vertcalTimelineContentBoxMarginDesktopWidth && vertcalTimelineContentBoxMarginDesktop?.top ? `margin: ${vertcalTimelineContentBoxMarginDesktopWidth};` : ''} 
           ${vertcalTimelineContentBoxGlobalBorder ? `border-style: ${vertcalTimelineContentBoxGlobalBorder};` : ''} 
           ${vertcalTimelineContentBoxGlobalBorderColor ? `border-color: ${vertcalTimelineContentBoxGlobalBorderColor};` : ''}
           ${vertcalTimelineContentBoxGlobalBorderDesktopWidth && vertcalTimelineContentBoxGlobalBorderDesktop?.top ? `border-width: ${vertcalTimelineContentBoxGlobalBorderDesktopWidth};` : ''}
           ${vertcalTimelineContentBoxGlobalBorderRadiusDesktopWidth && vertcalTimelineContentBoxGlobalBorderRadiusDesktop?.top ? `border-radius: ${vertcalTimelineContentBoxGlobalBorderRadiusDesktopWidth};` : ''}
           ${vertcalTimelineContentBoxGlobalNormalBackgroundType === 'gradient' ? `  
                ${vertcalTimelineContentBoxGlobalNormalCustomGradientSwitcher && vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue ? `background: ${vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue};` : `background: ${vertcalTimelineContentBoxGlobalNormalGradientColor};`}
            `: `
                ${vertcalTimelineContentBoxGlobalNormalClassicColor ? `background: ${vertcalTimelineContentBoxGlobalNormalClassicColor};` : ''}
            `}
           ${vertcalTimelineContentBoxBoxShadowCssValue ? `box-shadow: ${vertcalTimelineContentBoxBoxShadowCssValue};` : ''}
        } 

        .${blockID} .fb-vertical-timeline-item-inner-wrapper:hover {
            ${vertcalTimelineContentBoxGlobalHoverBackgroundType === 'gradient' ? `  
                ${vertcalTimelineContentBoxGlobalHoverCustomGradientSwitcher && vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue ? `background: ${vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue};` : `background: ${vertcalTimelineContentBoxGlobalHoverGradientColor};`}
            `: `
                ${vertcalTimelineContentBoxGlobalHoverClassicColor ? `background: ${vertcalTimelineContentBoxGlobalHoverClassicColor};` : ''}
            `}
            ${vertcalTimelineContentBoxGlobalBorderHoverColor ? `border-color: ${vertcalTimelineContentBoxGlobalBorderHoverColor};` : ''}
            ${vertcalTimelineContentBoxBoxShadowHoverCssValue ? `box-shadow: ${vertcalTimelineContentBoxBoxShadowHoverCssValue};` : ''}
        }

        .${blockID} .fb-vertical-timeline-item-phase-title {
            display: flex;
            ${vertcalTimelinePhaseTitleAlignment?.Desktop ? `justify-content: ${vertcalTimelinePhaseTitleAlignment?.Desktop};` : ''}    
        }

       .${blockID} .fb-vertical-timeline-item-phase-title p {
            ${vertcalTimelinePhaseTitlePaddingDesktopWidth && vertcalTimelinePhaseTitlePaddingDesktop?.top ? `padding: ${vertcalTimelinePhaseTitlePaddingDesktopWidth};` : ''}
            ${vertcalTimelinePhaseTitleMarginDesktopWidth && vertcalTimelinePhaseTitleMarginDesktop?.top ? `margin: ${vertcalTimelinePhaseTitleMarginDesktopWidth};` : ''} 
            ${vertcalTimelinePhaseTitleNormalBorder ? `border-style: ${vertcalTimelinePhaseTitleNormalBorder};` : ''} 
            ${vertcalTimelinePhaseTitleNormalBorderColor ? `border-color: ${vertcalTimelinePhaseTitleNormalBorderColor};` : ''}
            ${vertcalTimelinePhaseTitleBorderDesktopWidth && vertcalTimelinePhaseTitleNormalBorderDesktop?.top ? `border-width: ${vertcalTimelinePhaseTitleBorderDesktopWidth};` : ''}
            ${vertcalTimelinePhaseTitleBorderRadiusDesktopWidth && vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.top ? `border-radius: ${vertcalTimelinePhaseTitleBorderRadiusDesktopWidth};` : ''}
            ${vertcalTimelinePhaseTitleNormalBackgroundType === 'gradient' ? `  
                ${vertcalTimelinePhaseTitleNormalCustomGradientSwitcher && vertcalTimelinePhaseTitleNormalCustomGradientInputValue ? `background: ${vertcalTimelinePhaseTitleNormalCustomGradientInputValue};` : `background: ${vertcalTimelinePhaseTitleNormalGradientColor};`}
            `: `
                ${vertcalTimelinePhaseTitleNormalClassicColor ? `background: ${vertcalTimelinePhaseTitleNormalClassicColor};` : ''}
            `}
           ${vertcalTimelinePhaseTitleBoxShadowCssValue ? `box-shadow: ${vertcalTimelinePhaseTitleBoxShadowCssValue};` : ''}
           ${vertcalTimelinePhaseTitleColorSwitcher && vertcalTimelinePhaseTitleColor ? `color: ${vertcalTimelinePhaseTitleColor};` : ''}
        } 

        .${blockID} .fb-vertical-timeline-item-inner-wrapper:hover .fb-vertical-timeline-item-phase-title p {
            ${vertcalTimelinePhaseTitleHoverBackgroundType === 'gradient' ? `  
                ${vertcalTimelinePhaseTitleHoverCustomGradientSwitcher && vertcalTimelinePhaseTitleHoverCustomGradientInputValue ? `background: ${vertcalTimelinePhaseTitleHoverCustomGradientInputValue};` : `background: ${vertcalTimelinePhaseTitleHoverGradientColor};`}
            `: `
                ${vertcalTimelinePhaseTitleHoverClassicColor ? `background: ${vertcalTimelinePhaseTitleHoverClassicColor};` : ''}
            `}
            ${vertcalTimelinePhaseTitleBoxShadowHoverCssValue ? `box-shadow: ${vertcalTimelinePhaseTitleBoxShadowHoverCssValue};` : ''}
            ${vertcalTimelinePhaseTitleNormalBorderHoverColor ? `border-color: ${vertcalTimelinePhaseTitleNormalBorderHoverColor};` : ''}
            ${vertcalTimelinePhaseTitleColorSwitcher && vertcalTimelinePhaseTitleHoverColor ? `color: ${vertcalTimelinePhaseTitleHoverColor};` : ''}
        } 

        .${blockID} .fb-vertical-timeline-label {
            ${sectionLebelBtnTextColorSwitcher && sectionLebelBtnTextColor ? `color: ${sectionLebelBtnTextColor};` : ""}
            ${sectionLebelTypoSwitcher.fontFamily === true &&sectionLebelTypographyData.fontFamily? `font-family: ${sectionLebelTypographyData.fontFamily};`: ""}
            ${sectionLebelTypoSwitcher.fontSize === true &&sectionLebelTypographyData.fontSize? `font-size: ${sectionLebelTypographyData.fontSize};`: ""}
            ${sectionLebelTypoSwitcher.fontWeight === true &&sectionLebelTypographyData.fontWeight? `font-weight: ${sectionLebelTypographyData.fontWeight};`: ""}
            ${sectionLebelTypoSwitcher.fontStyle === true &&sectionLebelTypographyData.fontStyle? `font-style: ${sectionLebelTypographyData.fontStyle};`: ""}
            ${sectionLebelTypoSwitcher.textTransform === true &&sectionLebelTypographyData.textTransform? `text-transform: ${sectionLebelTypographyData.textTransform};`: ""}
            ${sectionLebelTypoSwitcher.textDecoration === true &&sectionLebelTypographyData.textDecoration? `text-decoration: ${sectionLebelTypographyData.textDecoration};`: ""}
            ${sectionLebelTypoSwitcher.letterSpacing === true &&sectionLebelTypographyData.letterSpacing? `letter-spacing: ${sectionLebelTypographyData.letterSpacing};`: ""}
            ${sectionLebelTypoSwitcher.lineHeight === true &&sectionLebelTypographyData.lineHeight? `line-height: ${sectionLebelTypographyData.lineHeight};`: ""}
        }

        .${blockID} .fb-vertical-timeline-label p {
           ${sectionLebelTypoSwitcher.fontFamily === false && sectionLebelFontFamily &&sectionLebelFontFamily !== "Default"? `font-family: ${sectionLebelFontFamily};`: ""}
           ${sectionLebelTypoSwitcher.fontSize === false && sectionLebelFontSize.Desktop &&sectionLebelFontSizeUnits.Desktop? `font-size: ${sectionLebelFontSize.Desktop}${sectionLebelFontSizeUnits.Desktop};`: ""}
           ${sectionLebelTypoSwitcher.fontWeight === false &&sectionLebelFontWeight ? `font-weight: ${sectionLebelFontWeight};`: ""}
           ${sectionLebelTypoSwitcher.fontStyle === false && sectionLebelFontStyle ? `font-style: ${sectionLebelFontStyle};`: ""}
           ${sectionLebelTypoSwitcher.textTransform === false && sectionLebelTextTransform ? `text-transform: ${sectionLebelTextTransform};`: ""}
           ${sectionLebelTypoSwitcher.textDecoration === false && sectionLebelTextDecoration ? `text-decoration: ${sectionLebelTextDecoration};` : ""}
           ${sectionLebelTypoSwitcher.letterSpacing === false && sectionLebelLetterSpacing.Desktop && sectionLebelLetterSpacingUnits.Desktop ? `letter-spacing: ${sectionLebelLetterSpacing.Desktop}${sectionLebelLetterSpacingUnits.Desktop};`: ""}
           ${sectionLebelTypoSwitcher.lineHeight === false && sectionLebelLineHeight.Desktop && sectionLebelLineHeightUnits.Desktop ? `line-height: ${sectionLebelLineHeight.Desktop}${sectionLebelLineHeightUnits.Desktop};`: ""} 
        }

        .${blockID} .fb-vertical-timeline-label:hover {
             ${sectionLebelBtnTextColorSwitcher && sectionLebelBtnTextHoverColor ? `color: ${sectionLebelBtnTextHoverColor};` : ""}   
        }

        .${blockID} .fb-vertical-timeline-icon svg{
              ${verticalTimelineIconSize?.Desktop && verticalTimelineIconSizeUnits?.Desktop ? `width: ${verticalTimelineIconSize.Desktop}${verticalTimelineIconSizeUnits.Desktop};` : ""}
              ${verticalTimelineIconSize?.Desktop && verticalTimelineIconSizeUnits?.Desktop ? `height: ${verticalTimelineIconSize.Desktop}${verticalTimelineIconSizeUnits.Desktop};` : ""}
        }

        .${blockID} .fb-vertical-timeline-icon {
            ${verticalTimelineItemIconBorderRadiusDesktopWidth && verticalTimelineItemIconBorderRadiusDesktop?.top ? `border-radius: ${verticalTimelineItemIconBorderRadiusDesktopWidth};` : ''}
            ${verticalTimelineItemIconBorder ? `border-style: ${verticalTimelineItemIconBorder};` : ''}
            ${verticalTimelineItemIconBorderColor ? `border-color: ${verticalTimelineItemIconBorderColor};` : ''}
            ${verticalTimelineItemIconBorderDesktopWidth && verticalTimelineItemIconBorderDesktop?.top ? `border-width: ${verticalTimelineItemIconBorderDesktopWidth};` : ''}
            ${verticalTimelineItemIconPaddingDesktopWidth && verticalTimelineItemIconPaddingDesktop?.top ? `padding: ${verticalTimelineItemIconPaddingDesktopWidth};` : ''}
            ${verticalTimelineItemIconNormalBackgroundType === 'gradient' ? `  
                ${verticalTimelineItemIconNormalCustomGradientSwitcher && verticalTimelineItemIconNormalCustomGradientInputValue ? `background: ${verticalTimelineItemIconNormalCustomGradientInputValue};` : `background: ${verticalTimelineItemIconNormalGradientColor};`}
            `: `
                ${verticalTimelineItemIconNormalClassicColor ? `background: ${verticalTimelineItemIconNormalClassicColor};` : ''}
            `}
            ${verticalTimelineItemIconColor ? `color: ${verticalTimelineItemIconColor};` : ''}
            ${verticalTimelineItemIconBoxShadowCssValue ? `box-shadow: ${verticalTimelineItemIconBoxShadowCssValue};` : ''}
        }
            
        .${blockID} .fb-vertical-timeline-item-wrapper:hover .fb-vertical-timeline-icon {
            ${verticalTimelineItemIconBorderHoverColor ? `border-color: ${verticalTimelineItemIconBorderHoverColor};` : ''}
            ${verticalTimelineItemIconHoverBackgroundType === 'gradient' ? `  
                ${verticalTimelineItemIconHoverCustomGradientSwitcher && verticalTimelineItemIconHoverCustomGradientInputValue ? `background: ${verticalTimelineItemIconHoverCustomGradientInputValue};` : `background: ${verticalTimelineItemIconHoverGradientColor};`}
            `: `
                ${verticalTimelineItemIconHoverClassicColor ? `background: ${verticalTimelineItemIconHoverClassicColor};` : ''}
            `}
            ${verticalTimelineItemIconHoverColor ? `color: ${verticalTimelineItemIconHoverColor};` : ''}
            ${verticalTimelineItemIconBoxShadowHoverCssValue ? `box-shadow: ${verticalTimelineItemIconBoxShadowHoverCssValue};` : ''}
        }
            

       @media only screen and (max-width: 1024px) {
           .${blockID} .fb-vertical-timeline-item-inner-wrapper {
               ${vertcalTimelineContentBoxPaddingTabletWidth && vertcalTimelineContentBoxPaddingTablet?.top ? `padding: ${vertcalTimelineContentBoxPaddingTabletWidth};` : ''}
               ${vertcalTimelineContentBoxMarginTabletWidth && vertcalTimelineContentBoxMarginTablet?.top ? `margin: ${vertcalTimelineContentBoxMarginTabletWidth};` : ''} 
               ${vertcalTimelineContentBoxGlobalBorderTabletWidth && vertcalTimelineContentBoxGlobalBorderTablet?.top ? `border-width: ${vertcalTimelineContentBoxGlobalBorderTabletWidth};` : ''}
               ${vertcalTimelineContentBoxGlobalBorderRadiusTabletWidth && vertcalTimelineContentBoxGlobalBorderRadiusTablet?.top ? `border-radius: ${vertcalTimelineContentBoxGlobalBorderRadiusTabletWidth};` : ''}
           } 

          .${blockID} .fb-vertical-timeline-icon {
            ${verticalTimelineItemIconBorderTabletWidth && verticalTimelineItemIconBorderTablet?.top ? `border-width: ${verticalTimelineItemIconBorderTabletWidth};` : ''}
            ${verticalTimelineItemIconPaddingTabletWidth && verticalTimelineItemIconPaddingTablet?.top ? `padding: ${verticalTimelineItemIconPaddingTabletWidth};` : ''}
            ${verticalTimelineItemIconBorderRadiusTabletWidth && verticalTimelineItemIconBorderRadiusTablet?.top ? `border-radius: ${verticalTimelineItemIconBorderRadiusTabletWidth};` : ''}
          }

        .${blockID} .fb-vertical-timeline-icon svg{
              ${verticalTimelineIconSize?.Tablet && verticalTimelineIconSizeUnits?.Tablet ? `width: ${verticalTimelineIconSize.Tablet}${verticalTimelineIconSizeUnits.Tablet};` : ""}
              ${verticalTimelineIconSize?.Tablet && verticalTimelineIconSizeUnits?.Tablet ? `height: ${verticalTimelineIconSize.Tablet}${verticalTimelineIconSizeUnits.Tablet};` : ""}
         }

          .${blockID} .fb-vertical-timeline-item-phase-title p {
             ${phaseTitleTypoSwitcher.fontFamily === true && phaseTitleTypographyData.fontFamily? `font-family: ${phaseTitleTypographyData.fontFamily};`: ""}
            ${phaseTitleTypoSwitcher.fontSize === true && phaseTitleTypographyData.fontSize ? `font-size: ${phaseTitleTypographyData.fontSize};`: ""}
            ${phaseTitleTypoSwitcher.fontWeight === true && phaseTitleTypographyData.fontWeight ? `font-weight: ${phaseTitleTypographyData.fontWeight};`: ""}
            ${phaseTitleTypoSwitcher.fontStyle === true && phaseTitleTypographyData.fontStyle? `font-style: ${phaseTitleTypographyData.fontStyle};`: ""}
            ${phaseTitleTypoSwitcher.textTransform === true && phaseTitleTypographyData.textTransform? `text-transform: ${phaseTitleTypographyData.textTransform};`: ""}
            ${phaseTitleTypoSwitcher.textDecoration === true && phaseTitleTypographyData.textDecoration? `text-decoration: ${phaseTitleTypographyData.textDecoration};`: ""}
            ${phaseTitleTypoSwitcher.letterSpacing === true && phaseTitleTypographyData.letterSpacing ? `letter-spacing: ${phaseTitleTypographyData.letterSpacing};`: ""}
            ${phaseTitleTypoSwitcher.lineHeight === true && phaseTitleTypographyData.lineHeight ? `line-height: ${phaseTitleTypographyData.lineHeight};`: ""}

           ${phaseTitleTypoSwitcher.fontFamily === false && phaseTitleFontFamily && phaseTitleFontFamily !== "Default" ? `font-family: ${phaseTitleFontFamily};`: ""}
           ${phaseTitleTypoSwitcher.fontSize === false && phaseTitleFontSize.Desktop && phaseTitleFontSizeUnits.Desktop ? `font-size: ${phaseTitleFontSize.Desktop}${phaseTitleFontSizeUnits.Desktop};`: ""}
           ${phaseTitleTypoSwitcher.fontWeight === false && phaseTitleFontWeight? `font-weight: ${phaseTitleFontWeight};`: ""}
           ${phaseTitleTypoSwitcher.fontStyle === false && phaseTitleFontStyle? `font-style: ${phaseTitleFontStyle};`: ""}
           ${phaseTitleTypoSwitcher.textTransform === false && phaseTitleTextTransform ? `text-transform: ${phaseTitleTextTransform};`: ""}
           ${phaseTitleTypoSwitcher.textDecoration === false && phaseTitleTextDecoration? `text-decoration: ${phaseTitleTextDecoration};`: ""}
           ${phaseTitleTypoSwitcher.letterSpacing === false && phaseTitleLetterSpacing.Desktop && phaseTitleLetterSpacingUnits.Desktop ? `letter-spacing: ${phaseTitleLetterSpacing.Desktop}${phaseTitleLetterSpacingUnits.Desktop};`: ""}
           ${phaseTitleTypoSwitcher.lineHeight === false && phaseTitleLineHeight.Desktop && phaseTitleLineHeightUnits.Desktop ? `line-height: ${phaseTitleLineHeight.Desktop}${phaseTitleLineHeightUnits.Desktop};`: ""}
        }

       @media only screen and (max-width: 767px) {
          .${blockID} .fb-vertical-timeline-item-inner-wrapper {
             ${vertcalTimelineContentBoxPaddingMobileWidth && vertcalTimelineContentBoxPaddingMobile?.top ? `padding: ${vertcalTimelineContentBoxPaddingMobileWidth};` : ''}
             ${vertcalTimelineContentBoxMarginMobileWidth && vertcalTimelineContentBoxMarginMobile?.top ? `margin: ${vertcalTimelineContentBoxMarginMobileWidth};` : ''} 
             ${vertcalTimelineContentBoxGlobalBorderMobileWidth && vertcalTimelineContentBoxGlobalBorderMobile?.top ? `border-width: ${vertcalTimelineContentBoxGlobalBorderMobileWidth};` : ''}
             ${vertcalTimelineContentBoxGlobalBorderRadiusMobileWidth && vertcalTimelineContentBoxGlobalBorderRadiusMobile?.top ? `border-radius: ${vertcalTimelineContentBoxGlobalBorderRadiusMobileWidth};` : ''}
          } 
          
          .${blockID} .fb-vertical-timeline-item-phase-title p {
              ${vertcalTimelinePhaseTitlePaddingMobileWidth && vertcalTimelinePhaseTitlePaddingDesktop?.top ? `padding: ${vertcalTimelinePhaseTitlePaddingDesktopWidth};` : ''}
              ${vertcalTimelinePhaseTitleMarginMobileWidth && vertcalTimelinePhaseTitleMarginDesktop?.top ? `margin: ${vertcalTimelinePhaseTitleMarginDesktopWidth};` : ''} 
              ${vertcalTimelinePhaseTitleBorderMobileWidth && vertcalTimelinePhaseTitleNormalBorderDesktop?.top ? `border-width: ${vertcalTimelinePhaseTitleBorderDesktopWidth};` : ''}
              ${vertcalTimelinePhaseTitleBorderRadiusMobileWidth && vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.top ? `border-radius: ${vertcalTimelinePhaseTitleBorderRadiusDesktopWidth};` : ''}
          }

          .${blockID} .fb-vertical-timeline-icon {
            ${verticalTimelineItemIconBorderMobileWidth && verticalTimelineItemIconBorderMobile?.top ? `border-width: ${verticalTimelineItemIconBorderMobileWidth};` : ''}
            ${verticalTimelineItemIconPaddingMobileWidth && verticalTimelineItemIconPaddingMobile?.top ? `padding: ${verticalTimelineItemIconPaddingMobileWidth};` : ''}
            ${verticalTimelineItemIconBorderRadiusMobileWidth && verticalTimelineItemIconBorderRadiusMobile?.top ? `border-radius: ${verticalTimelineItemIconBorderRadiusMobileWidth};` : ''}
        }

        .${blockID} .fb-vertical-timeline-icon svg{
              ${verticalTimelineIconSize?.Mobile && verticalTimelineIconSizeUnits?.Mobile ? `width: ${verticalTimelineIconSize.Mobile}${verticalTimelineIconSizeUnits.Mobile};` : ""}
              ${verticalTimelineIconSize?.Mobile && verticalTimelineIconSizeUnits?.Mobile ? `height: ${verticalTimelineIconSize.Mobile}${verticalTimelineIconSizeUnits.Mobile};` : ""}
        }
       }
    `;

    const customCss = getCustomCss(verticalTimelineItemCustomCSS, `.${blockID}`);
    return `${fbTimelineItemStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default generateVerticalTimelineItemStyle;
