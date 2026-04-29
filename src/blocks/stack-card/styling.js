/**
 * Stack Card Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';
import { hasStackCardScalePreset, isPresetFourStackOver } from './preset-four';
import { isPresetThreeStackRight } from './preset-three';
import { isPresetTwoStackLeft } from './preset-two';

const hasValue = (value) => value !== undefined && value !== null && value !== '';

const generateStackCardsStyle = (attributes) => {
    const {
        blockID,
		blockStyle,
        stackCardsPresetStyle,

        stackCardsOffsetTop,
        stackCardsOffsetTopUnits,
        stackCardsItemOffsetTop,
        stackCardsItemOffsetTopSwitcher,
        stackCardsItemScale,

        stackCardsCardItemGap,
        stackCardsCardItemGapUnits,

        stackCardItemBgColorSwitcher,
        stackCardItemBgNormalBackgroundType,
        stackCardItemBgNormalClassicColor,
        stackCardItemBgNormalGradientColor,
        stackCardItemBgNormalCustomGradientSwitcher,
        stackCardItemBgNormalCustomGradientInputValue,
        stackCardItemBgHoverBackgroundType,
        stackCardItemBgHoverClassicColor,
        stackCardItemBgHoverGradientColor,
        stackCardItemBgHoverCustomGradientSwitcher,
        stackCardItemBgHoverCustomGradientInputValue,

        stackCardItemPaddingUnits,
        stackCardItemPaddingDesktop,
        stackCardItemPaddingTablet,
        stackCardItemPaddingMobile,
        stackCardItemPaddingLink,

        stackCardItemBorder,
        stackCardItemBorderColor,
        stackCardItemBorderHoverColor,
        stackCardItemBorderColorSwitcher,

        stackCardItemBorderUnits,
        stackCardItemBorderDesktop,
        stackCardItemBorderTablet,
        stackCardItemBorderMobile,
        stackCardItemBorderLink,

        stackCardItemBorderRadiusUnits,
        stackCardItemBorderRadiusDesktop,
        stackCardItemBorderRadiusTablet,
        stackCardItemBorderRadiusMobile,
        stackCardItemBorderRadiusLink,

        /** Start stackCardsNavigation Button */
        stackCardsNavigationButtonGlobalTypoSwitcher,
		stackCardsNavigationButtonGlobalTypographyData,
		stackCardsNavigationButtonGlobalTypoType,
		stackCardsNavigationButtonGlobalTypoOption,
		stackCardsNavigationButtonFontFamily,
		stackCardsNavigationButtonFontSize,
		stackCardsNavigationButtonFontSizeUnits,
		stackCardsNavigationButtonFontWeight,
		stackCardsNavigationButtonFontStyle,
		stackCardsNavigationButtonTextTransform,
		stackCardsNavigationButtonTextDecoration,
		stackCardsNavigationButtonLetterSpacing,
		stackCardsNavigationButtonLetterSpacingUnits,
		stackCardsNavigationButtonLineHeight,
		stackCardsNavigationButtonLineHeightUnits,

		stackCardsNavigationButtonColorSwitcher,
		stackCardsNavigationButtonColor,
		stackCardsNavigationButtonHoverColor,
		stackCardsNavigationButtonBgHoverColor,

		stackCardsNavigationButtonBackgroundColorSwitcher,
		stackCardsNavigationButtonNormalBackgroundType,
		stackCardsNavigationButtonNormalClassicColor,
		stackCardsNavigationButtonNormalGradientColor,
		stackCardsNavigationButtonNormalCustomGradientSwitcher,
		stackCardsNavigationButtonNormalCustomGradientInputValue,

		stackCardsNavigationButtonHoverBackgroundType,
		stackCardsNavigationButtonHoverClassicColor,
		stackCardsNavigationButtonHoverGradientColor,
		stackCardsNavigationButtonHoverCustomGradientSwitcher,
		stackCardsNavigationButtonHoverCustomGradientInputValue,

		stackCardsNavigationButtonPaddingUnits,
		stackCardsNavigationButtonDesktopPadding,
		stackCardsNavigationButtonTabPadding,
		stackCardsNavigationButtonMobilePadding,
		stackCardsNavigationButtonPaddingLink,

		stackCardsNavigationButtonBorder,
		stackCardsNavigationButtonBorderColorSwitcher,
		stackCardsNavigationButtonBorderColor,
		stackCardsNavigationButtonBorderHoverColor,

		stackCardsNavigationButtonBorderUnits,
		stackCardsNavigationButtonDesktopBorderWidth,
		stackCardsNavigationButtonTabBorderWidth,
		stackCardsNavigationButtonMobileBorderWidth,
		stackCardsNavigationButtonBorderLink,

		stackCardsNavigationButtonBorderRadiusUnits,
		stackCardsNavigationButtonDesktopBorderRadiusWidth,
		stackCardsNavigationButtonTabBorderRadiusWidth,
		stackCardsNavigationButtonMobileBorderRadiusWidth,
		stackCardsNavigationButtonBorderRadiusLink,

		stackCardsNavigationButtonIconColorSwitcher,
		stackCardsNavigationButtonIconColor,
		stackCardsNavigationButtonIconHoverColor,
		stackCardsNavigationButtonIconSize,
		stackCardsNavigationButtonIconSizeUnits,

        stackCardsNavigationButtonIconSpacing,
        stackCardsNavigationButtonIconSpacingUnits,
		/** End stackCardsNavigation Button */

        stackCardsPresetFourCardWidth,
        stackCardsPresetFourCardWidthUnits,
        stackCardsPresetFourActiveBorder,
        stackCardsPresetFourActiveBorderWidth,
        stackCardsPresetFourActiveBorderWidthUnits,
        stackCardsPresetFourActiveBorderColor,
        stackCardsPresetFourShowNavigation,
        stackCardsPresetFourButtonVerticalAlign,
        stackCardsPresetFourButtonVerticalOffset,
        stackCardsPresetFourButtonVerticalOffsetUnits,
        stackCardsPresetFourButtonSideOffset,
        stackCardsPresetFourButtonSideOffsetUnits,
        stackCardsPresetTwoCardWidth,
        stackCardsPresetTwoCardWidthUnits,
        stackCardsPresetTwoLeftOffsetStep,
        stackCardsPresetThreeFrameHeight,
        stackCardsPresetThreeFrameHeightUnits,
        stackCardsPresetThreeFrameWidth,
        stackCardsPresetThreeFrameWidthUnits,
        stackCardsPresetThreeItemWidth,
        stackCardsPresetThreeItemWidthUnits,
        stackCardsPresetThreeOffsetStep,

		stackCardsDesktopSwitcher,
		stackCardsTabletSwitcher,
		stackCardsMobileSwitcher,

		stackCardsCustomCSS,
		stackCardsGlobalWraperID,
		stackCardsGlobalWraperClass,

		stackCardsGlobalZIndex,
        stackCardsOverflow,
        stackCardsGlobalPaddingUnits,
        stackCardsGlobalPaddingDesktop,
        stackCardsGlobalPaddingTablet,
        stackCardsGlobalPaddingMobile,
        stackCardsGlobalPaddingLink,
        stackCardsGlobalMarginUnits,
        stackCardsGlobalMarginDesktop,
        stackCardsGlobalMarginTablet,
        stackCardsGlobalMarginMobile,
        stackCardsGlobalMarginLink,

        stackCardsGlobalBgColorSwitcher,
        stackCardsGlobalBgNormalBackgroundType,
        stackCardsGlobalBgNormalClassicColor,
        stackCardsGlobalBgNormalGradientColor,
        stackCardsGlobalBgNormalCustomGradientSwitcher,
        stackCardsGlobalBgNormalCustomGradientInputValue,
        stackCardsGlobalBgHoverBackgroundType,
        stackCardsGlobalBgHoverClassicColor,
        stackCardsGlobalBgHoverGradientColor,
        stackCardsGlobalBgHoverCustomGradientSwitcher,
        stackCardsGlobalBgHoverCustomGradientInputValue,

        stackCardsGlobalBorder,
        stackCardsGlobalBorderColor,
        stackCardsGlobalBorderHoverColor,
        stackCardsGlobalBorderColorSwitcher,

        stackCardsGlobalBorderUnits,
        stackCardsGlobalBorderDesktop,
        stackCardsGlobalBorderTablet,
        stackCardsGlobalBorderMobile,
        stackCardsGlobalBorderLink,

        stackCardsGlobalBorderRadiusUnits,
        stackCardsGlobalBorderRadiusDesktop,
        stackCardsGlobalBorderRadiusTablet,
        stackCardsGlobalBorderRadiusMobile,
        stackCardsGlobalBorderRadiusLink,

        stackCardsGlobalBoxShadowSwitcher,
        stackCardsGlobalBoxShadowValues,
        stackCardsGlobalBoxShadowCssValue,
        stackCardsGlobalBoxShadowHoverValues,
        stackCardsGlobalBoxShadowHoverCssValue,

        // Position
        stackCardsPositionType,
        stackCardsHZOrientationType,
        stackCardsVROrientationType,
        stackCardsHZLeftOffset,
        stackCardsHZLeftOffsetUnits,
        stackCardsHZRightOffset,
        stackCardsHZRightOffsetUnits,
        stackCardsVRTopOffset,
        stackCardsVRTopOffsetUnits,
        stackCardsVRBottomOffset,
        stackCardsVRBottomOffsetUnits,
    } = attributes;

    /** Start Global Padding */
    const globalDesktopPadding = `${stackCardsGlobalPaddingDesktop?.top}${stackCardsGlobalPaddingUnits?.Desktop} ${stackCardsGlobalPaddingDesktop?.right}${stackCardsGlobalPaddingUnits?.Desktop} ${stackCardsGlobalPaddingDesktop?.bottom}${stackCardsGlobalPaddingUnits?.Desktop} ${stackCardsGlobalPaddingDesktop?.left}${stackCardsGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${stackCardsGlobalPaddingTablet?.top}${stackCardsGlobalPaddingUnits?.Tablet} ${stackCardsGlobalPaddingTablet?.right}${stackCardsGlobalPaddingUnits?.Tablet} ${stackCardsGlobalPaddingTablet?.bottom}${stackCardsGlobalPaddingUnits?.Tablet} ${stackCardsGlobalPaddingTablet?.left}${stackCardsGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${stackCardsGlobalPaddingMobile?.top}${stackCardsGlobalPaddingUnits?.Mobile} ${stackCardsGlobalPaddingMobile?.right}${stackCardsGlobalPaddingUnits?.Mobile} ${stackCardsGlobalPaddingMobile?.bottom}${stackCardsGlobalPaddingUnits?.Mobile} ${stackCardsGlobalPaddingMobile?.left}${stackCardsGlobalPaddingUnits?.Mobile}`;
    /** End Global Padding */

    /** Start stack card item Padding */
    const stackCardItemDesktopPadding = `${stackCardItemPaddingDesktop?.top}${stackCardItemPaddingUnits?.Desktop} ${stackCardItemPaddingDesktop?.right}${stackCardItemPaddingUnits?.Desktop} ${stackCardItemPaddingDesktop?.bottom}${stackCardItemPaddingUnits?.Desktop} ${stackCardItemPaddingDesktop?.left}${stackCardItemPaddingUnits?.Desktop}`;
    const stackCardItemTabletPadding = `${stackCardItemPaddingTablet?.top}${stackCardItemPaddingUnits?.Tablet} ${stackCardItemPaddingTablet?.right}${stackCardItemPaddingUnits?.Tablet} ${stackCardItemPaddingTablet?.bottom}${stackCardItemPaddingUnits?.Tablet} ${stackCardItemPaddingTablet?.left}${stackCardItemPaddingUnits?.Tablet}`;
    const stackCardItemMobilePadding = `${stackCardItemPaddingMobile?.top}${stackCardItemPaddingUnits?.Mobile} ${stackCardItemPaddingMobile?.right}${stackCardItemPaddingUnits?.Mobile} ${stackCardItemPaddingMobile?.bottom}${stackCardItemPaddingUnits?.Mobile} ${stackCardItemPaddingMobile?.left}${stackCardItemPaddingUnits?.Mobile}`;
    /** End stack card item Padding */

    /** Start Global Margin */
    const globalDesktopMargin = `${stackCardsGlobalMarginDesktop?.top}${stackCardsGlobalMarginUnits?.Desktop} ${stackCardsGlobalMarginDesktop?.right}${stackCardsGlobalMarginUnits?.Desktop} ${stackCardsGlobalMarginDesktop?.bottom}${stackCardsGlobalMarginUnits?.Desktop} ${stackCardsGlobalMarginDesktop?.left}${stackCardsGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${stackCardsGlobalMarginTablet?.top}${stackCardsGlobalMarginUnits?.Tablet} ${stackCardsGlobalMarginTablet?.right}${stackCardsGlobalMarginUnits?.Tablet} ${stackCardsGlobalMarginTablet?.bottom}${stackCardsGlobalMarginUnits?.Tablet} ${stackCardsGlobalMarginTablet?.left}${stackCardsGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${stackCardsGlobalMarginMobile?.top}${stackCardsGlobalMarginUnits?.Mobile} ${stackCardsGlobalMarginMobile?.right}${stackCardsGlobalMarginUnits?.Mobile} ${stackCardsGlobalMarginMobile?.bottom}${stackCardsGlobalMarginUnits?.Mobile} ${stackCardsGlobalMarginMobile?.left}${stackCardsGlobalMarginUnits?.Mobile}`;
    /** End Global Margin */

    /** Start Global Border */
    const globalDesktopBorderWidth = `${stackCardsGlobalBorderDesktop?.top}${stackCardsGlobalBorderUnits?.Desktop} ${stackCardsGlobalBorderDesktop?.right}${stackCardsGlobalBorderUnits?.Desktop} ${stackCardsGlobalBorderDesktop?.bottom}${stackCardsGlobalBorderUnits?.Desktop} ${stackCardsGlobalBorderDesktop?.left}${stackCardsGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${stackCardsGlobalBorderTablet?.top}${stackCardsGlobalBorderUnits?.Tablet} ${stackCardsGlobalBorderTablet?.right}${stackCardsGlobalBorderUnits?.Tablet} ${stackCardsGlobalBorderTablet?.bottom}${stackCardsGlobalBorderUnits?.Tablet} ${stackCardsGlobalBorderTablet?.left}${stackCardsGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${stackCardsGlobalBorderMobile?.top}${stackCardsGlobalBorderUnits?.Mobile} ${stackCardsGlobalBorderMobile?.right}${stackCardsGlobalBorderUnits?.Mobile} ${stackCardsGlobalBorderMobile?.bottom}${stackCardsGlobalBorderUnits?.Mobile} ${stackCardsGlobalBorderMobile?.left}${stackCardsGlobalBorderUnits?.Mobile}`;
    /** End Global Border */

    /** Start Global Border Radius */
    const globalDesktopBorderRadiusWidth = `${stackCardsGlobalBorderRadiusDesktop?.top}${stackCardsGlobalBorderRadiusUnits?.Desktop} ${stackCardsGlobalBorderRadiusDesktop?.right}${stackCardsGlobalBorderRadiusUnits?.Desktop} ${stackCardsGlobalBorderRadiusDesktop?.bottom}${stackCardsGlobalBorderRadiusUnits?.Desktop} ${stackCardsGlobalBorderRadiusDesktop?.left}${stackCardsGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${stackCardsGlobalBorderRadiusTablet?.top}${stackCardsGlobalBorderRadiusUnits?.Tablet} ${stackCardsGlobalBorderRadiusTablet?.right}${stackCardsGlobalBorderRadiusUnits?.Tablet} ${stackCardsGlobalBorderRadiusTablet?.bottom}${stackCardsGlobalBorderRadiusUnits?.Tablet} ${stackCardsGlobalBorderRadiusTablet?.left}${stackCardsGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${stackCardsGlobalBorderRadiusMobile?.top}${stackCardsGlobalBorderRadiusUnits?.Mobile} ${stackCardsGlobalBorderRadiusMobile?.right}${stackCardsGlobalBorderRadiusUnits?.Mobile} ${stackCardsGlobalBorderRadiusMobile?.bottom}${stackCardsGlobalBorderRadiusUnits?.Mobile} ${stackCardsGlobalBorderRadiusMobile?.left}${stackCardsGlobalBorderRadiusUnits?.Mobile}`;
    /** End Global Border Radius */

    /** Start stack card item Border */
    const stackCardItemDesktopBorderWidth = `${stackCardItemBorderDesktop?.top}${stackCardItemBorderUnits?.Desktop} ${stackCardItemBorderDesktop?.right}${stackCardItemBorderUnits?.Desktop} ${stackCardItemBorderDesktop?.bottom}${stackCardItemBorderUnits?.Desktop} ${stackCardItemBorderDesktop?.left}${stackCardItemBorderUnits?.Desktop}`;
    const stackCardItemTabletBorderWidth = `${stackCardItemBorderTablet?.top}${stackCardItemBorderUnits?.Tablet} ${stackCardItemBorderTablet?.right}${stackCardItemBorderUnits?.Tablet} ${stackCardItemBorderTablet?.bottom}${stackCardItemBorderUnits?.Tablet} ${stackCardItemBorderTablet?.left}${stackCardItemBorderUnits?.Tablet}`;
    const stackCardItemMobileBorderWidth = `${stackCardItemBorderMobile?.top}${stackCardItemBorderUnits?.Mobile} ${stackCardItemBorderMobile?.right}${stackCardItemBorderUnits?.Mobile} ${stackCardItemBorderMobile?.bottom}${stackCardItemBorderUnits?.Mobile} ${stackCardItemBorderMobile?.left}${stackCardItemBorderUnits?.Mobile}`;
    /** End stack card item Border */

    /** Start stack card item Border Radius */
    const stackCardItemDesktopBorderRadiusWidth = `${stackCardItemBorderRadiusDesktop?.top}${stackCardItemBorderRadiusUnits?.Desktop} ${stackCardItemBorderRadiusDesktop?.right}${stackCardItemBorderRadiusUnits?.Desktop} ${stackCardItemBorderRadiusDesktop?.bottom}${stackCardItemBorderRadiusUnits?.Desktop} ${stackCardItemBorderRadiusDesktop?.left}${stackCardItemBorderRadiusUnits?.Desktop}`;
    const stackCardItemTabletBorderRadiusWidth = `${stackCardItemBorderRadiusTablet?.top}${stackCardItemBorderRadiusUnits?.Tablet} ${stackCardItemBorderRadiusTablet?.right}${stackCardItemBorderRadiusUnits?.Tablet} ${stackCardItemBorderRadiusTablet?.bottom}${stackCardItemBorderRadiusUnits?.Tablet} ${stackCardItemBorderRadiusTablet?.left}${stackCardItemBorderRadiusUnits?.Tablet}`;
    const stackCardItemMobileBorderRadiusWidth = `${stackCardItemBorderRadiusMobile?.top}${stackCardItemBorderRadiusUnits?.Mobile} ${stackCardItemBorderRadiusMobile?.right}${stackCardItemBorderRadiusUnits?.Mobile} ${stackCardItemBorderRadiusMobile?.bottom}${stackCardItemBorderRadiusUnits?.Mobile} ${stackCardItemBorderRadiusMobile?.left}${stackCardItemBorderRadiusUnits?.Mobile}`;
    /** End stacl card item Border Radius */

    /** navigaiton button start */
    const stackCardsNavigationButtonDesktopPaddingValue = `${stackCardsNavigationButtonDesktopPadding?.top}${stackCardsNavigationButtonPaddingUnits?.Desktop} ${stackCardsNavigationButtonDesktopPadding?.right}${stackCardsNavigationButtonPaddingUnits?.Desktop} ${stackCardsNavigationButtonDesktopPadding?.bottom}${stackCardsNavigationButtonPaddingUnits?.Desktop} ${stackCardsNavigationButtonDesktopPadding?.left}${stackCardsNavigationButtonPaddingUnits?.Desktop}`;
	const stackCardsNavigationButtonTabletPaddingValue = `${stackCardsNavigationButtonTabPadding?.top}${stackCardsNavigationButtonPaddingUnits?.Tablet} ${stackCardsNavigationButtonTabPadding?.right}${stackCardsNavigationButtonPaddingUnits?.Tablet} ${stackCardsNavigationButtonTabPadding?.bottom}${stackCardsNavigationButtonPaddingUnits?.Tablet} ${stackCardsNavigationButtonTabPadding?.left}${stackCardsNavigationButtonPaddingUnits?.Tablet}`;
	const stackCardsNavigationButtonMobilePaddingValue = `${stackCardsNavigationButtonMobilePadding?.top}${stackCardsNavigationButtonPaddingUnits?.Mobile} ${stackCardsNavigationButtonMobilePadding?.right}${stackCardsNavigationButtonPaddingUnits?.Mobile} ${stackCardsNavigationButtonMobilePadding?.bottom}${stackCardsNavigationButtonPaddingUnits?.Mobile} ${stackCardsNavigationButtonMobilePadding?.left}${stackCardsNavigationButtonPaddingUnits?.Mobile}`;

    const stackCardsNavigationButtonDesktopBorderWidthValue = `${stackCardsNavigationButtonDesktopBorderWidth?.top}${stackCardsNavigationButtonBorderUnits?.Desktop} ${stackCardsNavigationButtonDesktopBorderWidth?.right}${stackCardsNavigationButtonBorderUnits?.Desktop} ${stackCardsNavigationButtonDesktopBorderWidth?.bottom}${stackCardsNavigationButtonBorderUnits?.Desktop} ${stackCardsNavigationButtonDesktopBorderWidth?.left}${stackCardsNavigationButtonBorderUnits?.Desktop}`;
	const stackCardsNavigationButtonTabletBorderWidthValue = `${stackCardsNavigationButtonTabBorderWidth?.top}${stackCardsNavigationButtonBorderUnits?.Tablet} ${stackCardsNavigationButtonTabBorderWidth?.right}${stackCardsNavigationButtonBorderUnits?.Tablet} ${stackCardsNavigationButtonTabBorderWidth?.bottom}${stackCardsNavigationButtonBorderUnits?.Tablet} ${stackCardsNavigationButtonTabBorderWidth?.left}${stackCardsNavigationButtonBorderUnits?.Tablet}`;
	const stackCardsNavigationButtonMobileBorderWidthValue = `${stackCardsNavigationButtonMobileBorderWidth?.top}${stackCardsNavigationButtonBorderUnits?.Mobile} ${stackCardsNavigationButtonMobileBorderWidth?.right}${stackCardsNavigationButtonBorderUnits?.Mobile} ${stackCardsNavigationButtonMobileBorderWidth?.bottom}${stackCardsNavigationButtonBorderUnits?.Mobile} ${stackCardsNavigationButtonMobileBorderWidth?.left}${stackCardsNavigationButtonBorderUnits?.Mobile}`;

    const stackCardsNavigationButtonDesktopBorderRadiusWidthValue = `${stackCardsNavigationButtonDesktopBorderRadiusWidth?.top}${stackCardsNavigationButtonBorderRadiusUnits?.Desktop} ${stackCardsNavigationButtonDesktopBorderRadiusWidth?.right}${stackCardsNavigationButtonBorderRadiusUnits?.Desktop} ${stackCardsNavigationButtonDesktopBorderRadiusWidth?.bottom}${stackCardsNavigationButtonBorderRadiusUnits?.Desktop} ${stackCardsNavigationButtonDesktopBorderRadiusWidth?.left}${stackCardsNavigationButtonBorderRadiusUnits?.Desktop}`;
	const stackCardsNavigationButtonTabletBorderRadiusWidthValue = `${stackCardsNavigationButtonTabBorderRadiusWidth?.top}${stackCardsNavigationButtonBorderRadiusUnits?.Tablet} ${stackCardsNavigationButtonTabBorderRadiusWidth?.right}${stackCardsNavigationButtonBorderRadiusUnits?.Tablet} ${stackCardsNavigationButtonTabBorderRadiusWidth?.bottom}${stackCardsNavigationButtonBorderRadiusUnits?.Tablet} ${stackCardsNavigationButtonTabBorderRadiusWidth?.left}${stackCardsNavigationButtonBorderRadiusUnits?.Tablet}`;
	const stackCardsNavigationButtonMobileBorderRadiusWidthValue = `${stackCardsNavigationButtonMobileBorderRadiusWidth?.top}${stackCardsNavigationButtonBorderRadiusUnits?.Mobile} ${stackCardsNavigationButtonMobileBorderRadiusWidth?.right}${stackCardsNavigationButtonBorderRadiusUnits?.Mobile} ${stackCardsNavigationButtonMobileBorderRadiusWidth?.bottom}${stackCardsNavigationButtonBorderRadiusUnits?.Mobile} ${stackCardsNavigationButtonMobileBorderRadiusWidth?.left}${stackCardsNavigationButtonBorderRadiusUnits?.Mobile}`;
    /** navigaiton button end */

    const frameSelector = `.${blockID}.fb-stack-cards-main-wrapper .fb-stack-cards-frame`;
    const editorLayoutSelector = `${frameSelector} > .block-editor-inner-blocks > .block-editor-block-list__layout`;
    const frameGapSelector = `${frameSelector}, ${editorLayoutSelector}`;
    const frameItemSelector = `${frameSelector} .fb-stack-card-item`;
    const editorItemSelector = `${editorLayoutSelector} > .fb-stack-card-item`;
    const allItemSelector = `${frameItemSelector}, ${editorItemSelector}`;
    const stackOverFrameSelector = `.${blockID}.fb-stack-cards-main-wrapper .fb-stack-cards-frame--stack-over`;
    const stackOverEditorLayoutSelector = `${stackOverFrameSelector} > .block-editor-inner-blocks > .block-editor-block-list__layout`;
    const stackOverFrameItemSelector = `${stackOverFrameSelector} .fb-stack-card-item`;
    const stackOverEditorItemSelector = `${stackOverEditorLayoutSelector} > .fb-stack-card-item`;
    const stackOverAllItemSelector = `${stackOverFrameItemSelector}, ${stackOverEditorItemSelector}`;
    const stackOverPrevButtonSelector = `${stackOverFrameSelector} .fb-stack-card-prev-btn`;
    const stackOverNextButtonSelector = `${stackOverFrameSelector} .fb-stack-card-next-btn`;
    const stackLeftFrameSelector = `.${blockID}.fb-stack-cards-main-wrapper .fb-stack-cards-frame--stack-left`;
    const stackLeftEditorLayoutSelector = `${stackLeftFrameSelector} > .block-editor-inner-blocks > .block-editor-block-list__layout`;
    const stackLeftAllItemSelector = `${stackLeftFrameSelector} .fb-stack-card-item, ${stackLeftEditorLayoutSelector} > .fb-stack-card-item`;
    const stackRightFrameSelector = `.${blockID}.fb-stack-cards-main-wrapper .fb-stack-cards-frame--stack-right`;
    const stackRightEditorLayoutSelector = `${stackRightFrameSelector} > .block-editor-inner-blocks > .block-editor-block-list__layout`;
    const stackRightAllItemSelector = `${stackRightFrameSelector} .fb-stack-card-item, ${stackRightEditorLayoutSelector} > .fb-stack-card-item`;

    const hasScalePreset = hasStackCardScalePreset(stackCardsPresetStyle);
    const isPresetFour = isPresetFourStackOver(stackCardsPresetStyle);
    const isPresetThree = isPresetThreeStackRight(stackCardsPresetStyle);
    const isPresetTwo = isPresetTwoStackLeft(stackCardsPresetStyle);

    /** Start All Block Style */
    const stackCardsCSS = `
        .${blockID}.fb-stack-cards-main-wrapper {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            ${stackCardsPositionType === 'default' ? `position: relative;` : ''}
            ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' ? `width: 100%;` : ''}
            ${stackCardsPositionType !== 'default' ? `position: ${stackCardsPositionType};` : ''}
            ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsHZOrientationType === 'left' && stackCardsHZLeftOffset?.Desktop !== undefined ? `left: ${stackCardsHZLeftOffset?.Desktop}${stackCardsHZLeftOffsetUnits?.Desktop};` : ''}
            ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsHZOrientationType === 'right' && stackCardsHZRightOffset?.Desktop !== undefined ? `right: ${stackCardsHZRightOffset?.Desktop}${stackCardsHZRightOffsetUnits?.Desktop};` : ''}
            ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsVROrientationType === 'top' && stackCardsVRTopOffset?.Desktop !== undefined ? `top: ${stackCardsVRTopOffset?.Desktop}${stackCardsVRTopOffsetUnits?.Desktop};` : ''}
            ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsVROrientationType === 'bottom' && stackCardsVRBottomOffset?.Desktop !== undefined ? `bottom: ${stackCardsVRBottomOffset?.Desktop}${stackCardsVRBottomOffsetUnits?.Desktop};` : ''}
            ${stackCardsGlobalZIndex?.Desktop ? `z-index: ${stackCardsGlobalZIndex?.Desktop};` : ''}
            ${stackCardsOverflow !== 'default' ? `overflow: ${stackCardsOverflow};` : ''}
        }
        
        ${frameSelector} {
            ${hasValue(stackCardsGlobalPaddingDesktop?.top) ? `padding: ${globalDesktopPadding};` : ''}
            ${hasValue(stackCardsGlobalMarginDesktop?.top) ? `margin: ${globalDesktopMargin};` : ''} 
            ${stackCardsGlobalBorder ? `border: ${stackCardsGlobalBorder};` : ''} 
            ${hasValue(stackCardsGlobalBorderDesktop?.top) ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${hasValue(stackCardsGlobalBorderRadiusDesktop?.top) ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${stackCardsGlobalBorderColor ? `border-color: ${stackCardsGlobalBorderColor};` : ''}
            ${stackCardsGlobalBoxShadowCssValue ? `box-shadow: ${stackCardsGlobalBoxShadowCssValue};` : ''}
            ${stackCardItemBgNormalBackgroundType === 'gradient' ? `--fb-stack-card-item-bg-normal: ${stackCardItemBgNormalCustomGradientSwitcher && stackCardItemBgNormalCustomGradientInputValue
                ? stackCardItemBgNormalCustomGradientInputValue
                : stackCardItemBgNormalGradientColor || stackCardItemBgNormalClassicColor
            };` : `${stackCardItemBgNormalClassicColor ? `--fb-stack-card-item-bg-normal: ${stackCardItemBgNormalClassicColor};` : ''}`}
            ${stackCardItemBgHoverBackgroundType === 'gradient' ? `--fb-stack-card-item-bg-hover: ${stackCardItemBgHoverCustomGradientSwitcher && stackCardItemBgHoverCustomGradientInputValue
                ? stackCardItemBgHoverCustomGradientInputValue
                : stackCardItemBgHoverGradientColor || stackCardItemBgHoverClassicColor || stackCardItemBgNormalGradientColor || stackCardItemBgNormalClassicColor
            };` : `${stackCardItemBgHoverClassicColor ? `--fb-stack-card-item-bg-hover: ${stackCardItemBgHoverClassicColor};` : stackCardItemBgNormalClassicColor ? `--fb-stack-card-item-bg-hover: ${stackCardItemBgNormalClassicColor};` : ''}`}
            ${stackCardItemBorderColor ? `--fb-stack-card-item-border-color: ${stackCardItemBorderColor};` : ''}
            ${stackCardItemBorderHoverColor ? `--fb-stack-card-item-border-hover-color: ${stackCardItemBorderHoverColor};` : stackCardItemBorderColor ? `--fb-stack-card-item-border-hover-color: ${stackCardItemBorderColor};` : ''}
            ${stackCardsGlobalBgNormalBackgroundType === 'gradient' ? `  
                background: ${stackCardsGlobalBgNormalCustomGradientSwitcher && stackCardsGlobalBgNormalCustomGradientInputValue
                ? stackCardsGlobalBgNormalCustomGradientInputValue
                : stackCardsGlobalBgNormalGradientColor || stackCardsGlobalBgNormalClassicColor
            };
            ` : `
                background: ${stackCardsGlobalBgNormalClassicColor};
            `}
            transition: all .3s ease-in-out;
            position: relative;
        }
        ${frameSelector}:hover {
            ${stackCardsGlobalBgHoverBackgroundType === 'gradient' ? `  
                background: ${stackCardsGlobalBgHoverCustomGradientSwitcher && stackCardsGlobalBgHoverCustomGradientInputValue
                ? stackCardsGlobalBgHoverCustomGradientInputValue
                : stackCardsGlobalBgHoverGradientColor || stackCardsGlobalBgHoverClassicColor
            };
            ` : `
                ${stackCardsGlobalBgHoverClassicColor ? `background: ${stackCardsGlobalBgHoverClassicColor};` : ''}
            `} 
            ${stackCardsGlobalBorderHoverColor ? `border-color: ${stackCardsGlobalBorderHoverColor};` : ''}
            ${stackCardsGlobalBoxShadowHoverCssValue ? `box-shadow: ${stackCardsGlobalBoxShadowHoverCssValue};` : ''}
        }

        ${allItemSelector} {
            overflow: hidden;
            background: var(--fb-stack-card-item-bg-normal, transparent);
            ${hasValue(stackCardItemPaddingDesktop?.top) ? `padding: ${stackCardItemDesktopPadding};` : ''}
            ${stackCardItemBorder ? `border: ${stackCardItemBorder};` : ''} 
            ${hasValue(stackCardItemBorderDesktop?.top) ? `border-width: ${stackCardItemDesktopBorderWidth};` : ''}
            ${hasValue(stackCardItemBorderRadiusDesktop?.top) ? `border-radius: ${stackCardItemDesktopBorderRadiusWidth};` : ''}
            border-color: var(--fb-stack-card-item-border-color, ${stackCardItemBorderColor || 'transparent'});
        }
        
        ${allItemSelector}:hover {
            background: var(--fb-stack-card-item-bg-hover, var(--fb-stack-card-item-bg-normal, transparent));
            border-color: var(--fb-stack-card-item-border-hover-color, var(--fb-stack-card-item-border-color, ${stackCardItemBorderHoverColor || stackCardItemBorderColor || 'transparent'}));
        }

        ${isPresetTwo ? `
            ${stackLeftFrameSelector} {
                position: relative;
                display: grid;
                width: 100%;
                max-width: ${stackCardsPresetTwoCardWidth?.Desktop || 620}${stackCardsPresetTwoCardWidthUnits?.Desktop || 'px'};
                overflow: visible;
                touch-action: none;
                align-items: start;
            }

            ${stackLeftEditorLayoutSelector} {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                align-items: start;
            }

            ${stackLeftAllItemSelector} {
                position: relative !important;
                top: auto !important;
                min-height: 0 !important;
                grid-area: 1 / 1;
                max-width: ${stackCardsPresetTwoCardWidth?.Desktop || 620}${stackCardsPresetTwoCardWidthUnits?.Desktop || 'px'};
                cursor: pointer;
                will-change: transform, opacity;
            }

            ${stackLeftAllItemSelector} .fb-stack-card-item__content,
            ${stackLeftAllItemSelector} .fb-stack-card-item__content > .block-editor-inner-blocks,
            ${stackLeftAllItemSelector} .fb-stack-card-item__content > .block-editor-inner-blocks > .block-editor-block-list__layout {
                min-height: 0 !important;
                height: auto !important;
            }
        ` : ''}

        ${isPresetThree ? `
            ${stackRightFrameSelector} {
                position: relative;
                width: ${stackCardsPresetThreeFrameWidth?.Desktop || 400}${stackCardsPresetThreeFrameWidthUnits?.Desktop || 'px'};
                max-width: ${stackCardsPresetThreeFrameWidth?.Desktop || 400}${stackCardsPresetThreeFrameWidthUnits?.Desktop || 'px'};
                height: ${stackCardsPresetThreeFrameHeight?.Desktop || 400}${stackCardsPresetThreeFrameHeightUnits?.Desktop || 'px'};
                min-height: ${stackCardsPresetThreeFrameHeight?.Desktop || 400}${stackCardsPresetThreeFrameHeightUnits?.Desktop || 'px'};
                overflow: hidden;
                touch-action: none;
            }

            ${stackRightEditorLayoutSelector} {
                position: relative;
                min-height: inherit;
                height: 100%;
            }

            ${stackRightAllItemSelector} {
                position: absolute !important;
                left: auto !important;
                top: auto !important;
                right: 0;
                bottom: 0;
                min-height: 0 !important;
                width: ${stackCardsPresetThreeItemWidth?.Desktop || 300}${stackCardsPresetThreeItemWidthUnits?.Desktop || 'px'};
                max-width: ${stackCardsPresetThreeItemWidth?.Desktop || 300}${stackCardsPresetThreeItemWidthUnits?.Desktop || 'px'};
                cursor: pointer;
                will-change: right, bottom, opacity;
            }

            ${stackRightAllItemSelector} .fb-stack-card-item__content,
            ${stackRightAllItemSelector} .fb-stack-card-item__content > .block-editor-inner-blocks,
            ${stackRightAllItemSelector} .fb-stack-card-item__content > .block-editor-inner-blocks > .block-editor-block-list__layout {
                min-height: 0 !important;
                height: auto !important;
            }
        ` : ''}

        ${hasScalePreset ? `
            ${frameGapSelector} {
                ${hasValue(stackCardsCardItemGap?.Desktop) && stackCardsCardItemGapUnits?.Desktop ? `gap: ${stackCardsCardItemGap?.Desktop}${stackCardsCardItemGapUnits?.Desktop};` : ''}
            }

            ${allItemSelector} {
                ${hasValue(stackCardsOffsetTop?.Desktop) && stackCardsOffsetTopUnits?.Desktop ? `top: ${stackCardsOffsetTop?.Desktop}${stackCardsOffsetTopUnits?.Desktop};` : ''}
            }

            ${Object.entries(stackCardsItemOffsetTop?.Desktop || {}).map(([itemNumber, value]) => {
                const normalizedValue = typeof value === 'object' && value !== null ? value?.Desktop : value;
                if (
                    !stackCardsItemOffsetTopSwitcher ||
                    !hasValue(normalizedValue)
                ) {
                    return '';
                }
                return `
                ${frameSelector} .fb-stack-card-item:nth-child(${itemNumber}),
                ${editorLayoutSelector} > .fb-stack-card-item:nth-child(${itemNumber}) { 
                    top: ${normalizedValue}${stackCardsOffsetTopUnits?.Desktop};
                }`;
            }).join(' ')}

            ${Object.entries(stackCardsItemScale?.Desktop || {}).map(([itemNumber, value]) => {
                const normalizedScale = typeof value === 'object' && value !== null ? value?.Desktop : value;
                if (
                    !hasValue(normalizedScale)
                ) {
                    return '';
                }
                return `
                ${frameItemSelector}.fb-card-item${itemNumber},
                ${editorItemSelector}.fb-card-item${itemNumber} {
                    --fb-design-scale: ${normalizedScale};
                }`;
            }).join(' ')}

        ` : ''}

        ${allItemSelector} {
            position: sticky;
            transform-origin: top center;
            ${hasScalePreset ? `transform: scale(var(--fb-active-scale, var(--fb-design-scale, 1)));` : ''}
            transition: transform 0.5s ease,opacity 0.5s ease;
        }

        ${isPresetFour ? `
            ${stackOverFrameSelector} {
                position: relative;
                width: 100%;
                max-width: ${stackCardsPresetFourCardWidth?.Desktop || 620}${stackCardsPresetFourCardWidthUnits?.Desktop || 'px'};
                overflow: hidden;
                touch-action: none;
            }

            ${stackCardsPresetFourActiveBorder ? `
                ${stackOverFrameItemSelector}.active,
                ${stackOverEditorItemSelector}.active {
                    border: ${stackCardsPresetFourActiveBorderWidth?.Desktop || 3}${stackCardsPresetFourActiveBorderWidthUnits?.Desktop || 'px'} solid ${stackCardsPresetFourActiveBorderColor || '#000000'};
                }
            ` : ''}

            ${stackOverAllItemSelector} {
                position: absolute !important;
                cursor: pointer;
                width: 100%;
                max-width: ${stackCardsPresetFourCardWidth?.Desktop || 620}${stackCardsPresetFourCardWidthUnits?.Desktop || 'px'};
                height: auto !important;
                box-sizing: border-box;
            }

            ${stackOverFrameItemSelector} .fb-stack-card-item__content,
            ${stackOverEditorItemSelector} .fb-stack-card-item__content,
            ${stackOverFrameItemSelector} .fb-stack-card-item__content > .block-editor-inner-blocks,
            ${stackOverEditorItemSelector} .fb-stack-card-item__content > .block-editor-inner-blocks,
            ${stackOverFrameItemSelector} .fb-stack-card-item__content > .block-editor-inner-blocks > .block-editor-block-list__layout,
            ${stackOverEditorItemSelector} .fb-stack-card-item__content > .block-editor-inner-blocks > .block-editor-block-list__layout {
                width: 100%;
                height: auto;
                box-sizing: border-box;
            }

            ${stackCardsPresetFourShowNavigation ? `
                ${stackOverPrevButtonSelector},
                ${stackOverNextButtonSelector} {
                    position: absolute;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 99;
                    ${stackCardsPresetFourButtonVerticalAlign === 'top' ? `
                        top: ${stackCardsPresetFourButtonVerticalOffset?.Desktop || 0}${stackCardsPresetFourButtonVerticalOffsetUnits?.Desktop || 'px'};
                    ` : ''}
                    ${stackCardsPresetFourButtonVerticalAlign === 'center' ? `
                        top: ${stackCardsPresetFourButtonVerticalOffset?.Desktop || 50}${stackCardsPresetFourButtonVerticalOffsetUnits?.Desktop || '%'};
                        transform: translateY(-50%);
                    ` : ''}
                    ${stackCardsPresetFourButtonVerticalAlign === 'bottom' ? `
                        bottom: ${stackCardsPresetFourButtonVerticalOffset?.Desktop || 0}${stackCardsPresetFourButtonVerticalOffsetUnits?.Desktop || 'px'};
                    ` : ''}
                }
                
                ${stackOverPrevButtonSelector},
                ${stackOverNextButtonSelector} {
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.fontFamily === true && stackCardsNavigationButtonGlobalTypographyData?.fontFamily ? `font-family: ${stackCardsNavigationButtonGlobalTypographyData?.fontFamily};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.fontSize === true && stackCardsNavigationButtonGlobalTypographyData?.fontSize ? `font-size: ${stackCardsNavigationButtonGlobalTypographyData?.fontSize};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.fontWeight === true && stackCardsNavigationButtonGlobalTypographyData?.fontWeight ? `font-weight: ${stackCardsNavigationButtonGlobalTypographyData?.fontWeight};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.fontStyle === true && stackCardsNavigationButtonGlobalTypographyData?.fontStyle ? `font-style: ${stackCardsNavigationButtonGlobalTypographyData?.fontStyle};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.textTransform === true && stackCardsNavigationButtonGlobalTypographyData?.textTransform ? `text-transform: ${stackCardsNavigationButtonGlobalTypographyData?.textTransform};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.textDecoration === true && stackCardsNavigationButtonGlobalTypographyData?.textDecoration ? `text-decoration: ${stackCardsNavigationButtonGlobalTypographyData?.textDecoration};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.letterSpacing === true && stackCardsNavigationButtonGlobalTypographyData?.letterSpacing ? `letter-spacing: ${stackCardsNavigationButtonGlobalTypographyData?.letterSpacing};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.lineHeight === true && stackCardsNavigationButtonGlobalTypographyData?.lineHeight ? `line-height: ${stackCardsNavigationButtonGlobalTypographyData?.lineHeight};` : ''}

                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.fontFamily === false && stackCardsNavigationButtonFontFamily && stackCardsNavigationButtonFontFamily !== 'Default' ? `font-family: ${stackCardsNavigationButtonFontFamily};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.fontSize === false && stackCardsNavigationButtonFontSize?.Desktop ? `font-size: ${stackCardsNavigationButtonFontSize?.Desktop}${stackCardsNavigationButtonFontSizeUnits?.Desktop};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.fontWeight === false && stackCardsNavigationButtonFontWeight ? `font-weight: ${stackCardsNavigationButtonFontWeight};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.fontStyle === false && stackCardsNavigationButtonFontStyle ? `font-style: ${stackCardsNavigationButtonFontStyle};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.textTransform === false && stackCardsNavigationButtonTextTransform ? `text-transform: ${stackCardsNavigationButtonTextTransform};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.textDecoration === false && stackCardsNavigationButtonTextDecoration ? `text-decoration: ${stackCardsNavigationButtonTextDecoration};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.letterSpacing === false && stackCardsNavigationButtonLetterSpacing?.Desktop ? `letter-spacing: ${stackCardsNavigationButtonLetterSpacing?.Desktop}${stackCardsNavigationButtonLetterSpacingUnits?.Desktop};` : ''}
                    ${stackCardsNavigationButtonGlobalTypoSwitcher?.lineHeight === false && stackCardsNavigationButtonLineHeight?.Desktop ? `line-height: ${stackCardsNavigationButtonLineHeight?.Desktop}${stackCardsNavigationButtonLineHeightUnits?.Desktop};` : ''}
                    
                    ${stackCardsNavigationButtonColor ? `color: ${stackCardsNavigationButtonColor};` : ''}
                    ${stackCardsNavigationButtonDesktopPaddingValue && stackCardsNavigationButtonDesktopPadding?.top? `padding: ${stackCardsNavigationButtonDesktopPaddingValue};` : ''}
                    ${stackCardsNavigationButtonBorder ? `border: ${stackCardsNavigationButtonBorder};` : ''}
                    ${stackCardsNavigationButtonBorderColor ? `border-color: ${stackCardsNavigationButtonBorderColor};` : ''}
                    ${stackCardsNavigationButtonDesktopBorderWidthValue && stackCardsNavigationButtonDesktopBorderWidth?.top ? `border-width: ${stackCardsNavigationButtonDesktopBorderWidthValue};` : ''}
                    ${stackCardsNavigationButtonDesktopBorderRadiusWidthValue && stackCardsNavigationButtonDesktopBorderRadiusWidth?.top? `border-radius: ${stackCardsNavigationButtonDesktopBorderRadiusWidthValue};` : ''}

                    ${stackCardsNavigationButtonNormalBackgroundType === 'gradient' ? `  
                        background: ${stackCardsNavigationButtonNormalCustomGradientSwitcher && stackCardsNavigationButtonNormalCustomGradientInputValue ? stackCardsNavigationButtonNormalCustomGradientInputValue : stackCardsNavigationButtonNormalGradientColor};
                    `: `
                        ${stackCardsNavigationButtonNormalClassicColor ? `background: ${stackCardsNavigationButtonNormalClassicColor};` : ''}
                    `}
                    transition: all .3s ease-in-out;
                }

                ${stackOverPrevButtonSelector}:hover,
                ${stackOverNextButtonSelector}:hover {
                    ${stackCardsNavigationButtonHoverColor ? `color: ${stackCardsNavigationButtonHoverColor};` : ''}
                    ${stackCardsNavigationButtonBorderHoverColor ? `border-color: ${stackCardsNavigationButtonBorderHoverColor};` : ''}
                    ${stackCardsNavigationButtonHoverBackgroundType === 'gradient' ? `  
                        background: ${stackCardsNavigationButtonHoverCustomGradientSwitcher && stackCardsNavigationButtonHoverCustomGradientInputValue ? stackCardsNavigationButtonHoverCustomGradientInputValue : stackCardsNavigationButtonHoverGradientColor};
                    `: `
                        ${stackCardsNavigationButtonHoverClassicColor ? `background: ${stackCardsNavigationButtonHoverClassicColor};` : ''}
                    `}
                }

                ${stackOverPrevButtonSelector} .fb-stack-card-nav-icon {
                    margin-right: ${stackCardsNavigationButtonIconSpacing?.Desktop}${stackCardsNavigationButtonIconSpacingUnits?.Desktop};
                }
                
                ${stackOverNextButtonSelector} .fb-stack-card-nav-icon{
                    margin-left: ${stackCardsNavigationButtonIconSpacing?.Desktop}${stackCardsNavigationButtonIconSpacingUnits?.Desktop};
                }

                ${stackOverPrevButtonSelector} .fb-stack-card-nav-icon svg,
                ${stackOverNextButtonSelector} .fb-stack-card-nav-icon svg{
                    width: ${stackCardsNavigationButtonIconSize?.Desktop}${stackCardsNavigationButtonIconSizeUnits?.Desktop};
                    height: ${stackCardsNavigationButtonIconSize?.Desktop}${stackCardsNavigationButtonIconSizeUnits?.Desktop};
                    fill: ${stackCardsNavigationButtonIconColor};
                    transition: fill 0.3s ease;
                }

                ${stackOverPrevButtonSelector}:hover .fb-stack-card-nav-icon svg,
                ${stackOverNextButtonSelector}:hover .fb-stack-card-nav-icon svg{
                    ${stackCardsNavigationButtonIconHoverColor ? `fill: ${stackCardsNavigationButtonIconHoverColor};` : ''}
                }

                ${stackOverPrevButtonSelector} {
                    left: ${stackCardsPresetFourButtonSideOffset?.Desktop || 0}${stackCardsPresetFourButtonSideOffsetUnits?.Desktop || 'px'};
                }

                ${stackOverNextButtonSelector} {
                    right: ${stackCardsPresetFourButtonSideOffset?.Desktop || 0}${stackCardsPresetFourButtonSideOffsetUnits?.Desktop || 'px'};
                }

                ${stackOverFrameSelector} .fb-stack-card-nav-btn--icon {
                    padding-inline: 10px;
                }

                ${stackOverFrameSelector} .fb-stack-card-nav-btn--none .fb-stack-card-nav-text {
                    display: inline-block;
                }

                ${stackOverFrameSelector} .fb-stack-card-nav-icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 0;
                }

                ${stackOverFrameSelector} .fb-stack-card-nav-text {
                    display: inline-block;
                }
            ` : `
                ${stackOverPrevButtonSelector},
                ${stackOverNextButtonSelector} {
                    display: none;
                }
            `}

        ` : ''}

        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-stack-cards-main-wrapper {
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsHZOrientationType === 'left' && stackCardsHZLeftOffset?.Tablet !== undefined ? `left: ${stackCardsHZLeftOffset?.Tablet}${stackCardsHZLeftOffsetUnits?.Tablet};` : ''}
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsHZOrientationType === 'right' && stackCardsHZRightOffset?.Tablet !== undefined ? `right: ${stackCardsHZRightOffset?.Tablet}${stackCardsHZRightOffsetUnits?.Tablet};` : ''}
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsVROrientationType === 'top' && stackCardsVRTopOffset?.Tablet !== undefined ? `top: ${stackCardsVRTopOffset?.Tablet}${stackCardsVRTopOffsetUnits?.Tablet};` : ''}
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsVROrientationType === 'bottom' && stackCardsVRBottomOffset?.Tablet !== undefined ? `bottom: ${stackCardsVRBottomOffset?.Tablet}${stackCardsVRBottomOffsetUnits?.Tablet};` : ''}
                ${stackCardsGlobalZIndex?.Tablet ? `z-index: ${stackCardsGlobalZIndex?.Tablet};` : ''}
            }

            ${frameSelector} {
                ${hasValue(stackCardsGlobalPaddingTablet?.top) ? `padding: ${globalTabletPadding};` : ''}
                ${hasValue(stackCardsGlobalMarginTablet?.top) ? `margin: ${globalTabletMargin};` : ''} 
                ${hasValue(stackCardsGlobalBorderTablet?.top) ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${hasValue(stackCardsGlobalBorderRadiusTablet?.top) ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }

            ${isPresetFour ? `
                ${stackOverFrameSelector} {
                    max-width: ${stackCardsPresetFourCardWidth?.Tablet || stackCardsPresetFourCardWidth?.Desktop || 620}${stackCardsPresetFourCardWidthUnits?.Tablet || 'px'};
                }

                ${stackOverAllItemSelector} {
                    max-width: ${stackCardsPresetFourCardWidth?.Tablet || stackCardsPresetFourCardWidth?.Desktop || 620}${stackCardsPresetFourCardWidthUnits?.Tablet || 'px'};
                }

                ${stackCardsPresetFourActiveBorder ? `
                    ${stackOverFrameItemSelector}.active,
                    ${stackOverEditorItemSelector}.active {
                        border-width: ${stackCardsPresetFourActiveBorderWidth?.Tablet || stackCardsPresetFourActiveBorderWidth?.Desktop || 3}${stackCardsPresetFourActiveBorderWidthUnits?.Tablet || 'px'};
                    }
                ` : ''}

                ${stackCardsPresetFourShowNavigation ? `
                    ${stackOverPrevButtonSelector},
                    ${stackOverNextButtonSelector} {
                        ${stackCardsPresetFourButtonVerticalAlign === 'top' ? `top: ${stackCardsPresetFourButtonVerticalOffset?.Tablet || stackCardsPresetFourButtonVerticalOffset?.Desktop || 0}${stackCardsPresetFourButtonVerticalOffsetUnits?.Tablet || 'px'};` : ''}
                        ${stackCardsPresetFourButtonVerticalAlign === 'center' ? `top: ${stackCardsPresetFourButtonVerticalOffset?.Tablet || stackCardsPresetFourButtonVerticalOffset?.Desktop || 50}${stackCardsPresetFourButtonVerticalOffsetUnits?.Tablet || '%'};` : ''}
                        ${stackCardsPresetFourButtonVerticalAlign === 'bottom' ? `bottom: ${stackCardsPresetFourButtonVerticalOffset?.Tablet || stackCardsPresetFourButtonVerticalOffset?.Desktop || 0}${stackCardsPresetFourButtonVerticalOffsetUnits?.Tablet || 'px'};` : ''}
                    }

                    ${stackOverPrevButtonSelector} {
                        left: ${stackCardsPresetFourButtonSideOffset?.Tablet || stackCardsPresetFourButtonSideOffset?.Desktop || 0}${stackCardsPresetFourButtonSideOffsetUnits?.Tablet || 'px'};
                    }

                    ${stackOverNextButtonSelector} {
                        right: ${stackCardsPresetFourButtonSideOffset?.Tablet || stackCardsPresetFourButtonSideOffset?.Desktop || 0}${stackCardsPresetFourButtonSideOffsetUnits?.Tablet || 'px'};
                    }
                ` : ''}
            ` : ''}

            ${isPresetTwo ? `
                ${stackLeftFrameSelector} {
                    max-width: ${stackCardsPresetTwoCardWidth?.Tablet || stackCardsPresetTwoCardWidth?.Desktop || 620}${stackCardsPresetTwoCardWidthUnits?.Tablet || 'px'};
                }

                ${stackLeftAllItemSelector} {
                    max-width: ${stackCardsPresetTwoCardWidth?.Tablet || stackCardsPresetTwoCardWidth?.Desktop || 620}${stackCardsPresetTwoCardWidthUnits?.Tablet || 'px'};
                }
            ` : ''}

            ${isPresetThree ? `
                ${stackRightFrameSelector} {
                    width: ${stackCardsPresetThreeFrameWidth?.Tablet || stackCardsPresetThreeFrameWidth?.Desktop || 400}${stackCardsPresetThreeFrameWidthUnits?.Tablet || 'px'};
                    max-width: ${stackCardsPresetThreeFrameWidth?.Tablet || stackCardsPresetThreeFrameWidth?.Desktop || 400}${stackCardsPresetThreeFrameWidthUnits?.Tablet || 'px'};
                    height: ${stackCardsPresetThreeFrameHeight?.Tablet || stackCardsPresetThreeFrameHeight?.Desktop || 400}${stackCardsPresetThreeFrameHeightUnits?.Tablet || 'px'};
                    min-height: ${stackCardsPresetThreeFrameHeight?.Tablet || stackCardsPresetThreeFrameHeight?.Desktop || 400}${stackCardsPresetThreeFrameHeightUnits?.Tablet || 'px'};
                }

                ${stackRightAllItemSelector} {
                    width: ${stackCardsPresetThreeItemWidth?.Tablet || stackCardsPresetThreeItemWidth?.Desktop || 300}${stackCardsPresetThreeItemWidthUnits?.Tablet || 'px'};
                    max-width: ${stackCardsPresetThreeItemWidth?.Tablet || stackCardsPresetThreeItemWidth?.Desktop || 300}${stackCardsPresetThreeItemWidthUnits?.Tablet || 'px'};
                }
            ` : ''}

            ${hasScalePreset ? `
                ${frameGapSelector} {
                    ${hasValue(stackCardsCardItemGap?.Tablet) && stackCardsCardItemGapUnits?.Tablet ? `gap: ${stackCardsCardItemGap?.Tablet}${stackCardsCardItemGapUnits?.Tablet};` : ''}
                }
                
                ${allItemSelector} {
                    ${hasValue(stackCardsOffsetTop?.Tablet) && stackCardsOffsetTopUnits?.Tablet ? `top: ${stackCardsOffsetTop?.Tablet}${stackCardsOffsetTopUnits?.Tablet};` : ''}
                }

                ${Object.entries(stackCardsItemOffsetTop?.Tablet || {}).map(([itemNumber, value]) => {
                    const normalizedValue = typeof value === 'object' && value !== null ? value?.Tablet : value;
                    if (
                        !stackCardsItemOffsetTopSwitcher ||
                        !hasValue(normalizedValue)
                    ) {
                        return '';
                    }
                    return `
                    ${frameSelector} .fb-stack-card-item:nth-child(${itemNumber}),
                    ${editorLayoutSelector} > .fb-stack-card-item:nth-child(${itemNumber}) { top: ${normalizedValue}${stackCardsOffsetTopUnits?.Tablet}; }`;
                }).join(' ')}

                ${Object.entries(stackCardsItemScale?.Tablet || {}).map(([itemNumber, value]) => {
                    const normalizedScale = typeof value === 'object' && value !== null ? value?.Tablet : value;
                    if (
                        !hasValue(normalizedScale)
                    ) {
                        return '';
                    }
                    return `
                    ${frameItemSelector}.fb-card-item${itemNumber},
                    ${editorItemSelector}.fb-card-item${itemNumber} { --fb-design-scale: ${normalizedScale}; }`;
                }).join(' ')}

            ` : ''}
        }

        @media only screen and (max-width: 767px) {
            .${blockID}.fb-stack-cards-main-wrapper {
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsHZOrientationType === 'left' && stackCardsHZLeftOffset?.Mobile !== undefined ? `left: ${stackCardsHZLeftOffset?.Mobile}${stackCardsHZLeftOffsetUnits?.Mobile};` : ''}
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsHZOrientationType === 'right' && stackCardsHZRightOffset?.Mobile !== undefined ? `right: ${stackCardsHZRightOffset?.Mobile}${stackCardsHZRightOffsetUnits?.Mobile};` : ''}
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsVROrientationType === 'top' && stackCardsVRTopOffset?.Mobile !== undefined ? `top: ${stackCardsVRTopOffset?.Mobile}${stackCardsVRTopOffsetUnits?.Mobile};` : ''}
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsVROrientationType === 'bottom' && stackCardsVRBottomOffset?.Mobile !== undefined ? `bottom: ${stackCardsVRBottomOffset?.Mobile}${stackCardsVRBottomOffsetUnits?.Mobile};` : ''}
                ${stackCardsGlobalZIndex?.Mobile ? `z-index: ${stackCardsGlobalZIndex?.Mobile};` : ''}
            }

            ${frameSelector} {
                ${hasValue(stackCardsGlobalPaddingMobile?.top) ? `padding: ${globalMobilePadding};` : ''}
                ${hasValue(stackCardsGlobalMarginMobile?.top) ? `margin: ${globalMobileMargin};` : ''} 
                ${hasValue(stackCardsGlobalBorderMobile?.top) ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${hasValue(stackCardsGlobalBorderRadiusMobile?.top) ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }

            ${isPresetFour ? `
                ${stackOverFrameSelector} {
                    max-width: ${stackCardsPresetFourCardWidth?.Mobile || stackCardsPresetFourCardWidth?.Tablet || stackCardsPresetFourCardWidth?.Desktop || 620}${stackCardsPresetFourCardWidthUnits?.Mobile || 'px'};
                }

                ${stackOverAllItemSelector} {
                    max-width: ${stackCardsPresetFourCardWidth?.Mobile || stackCardsPresetFourCardWidth?.Tablet || stackCardsPresetFourCardWidth?.Desktop || 620}${stackCardsPresetFourCardWidthUnits?.Mobile || 'px'};
                }

                ${stackCardsPresetFourActiveBorder ? `
                    ${stackOverFrameItemSelector}.active,
                    ${stackOverEditorItemSelector}.active {
                        border-width: ${stackCardsPresetFourActiveBorderWidth?.Mobile || stackCardsPresetFourActiveBorderWidth?.Tablet || stackCardsPresetFourActiveBorderWidth?.Desktop || 2}${stackCardsPresetFourActiveBorderWidthUnits?.Mobile || 'px'};
                    }
                ` : ''}

                ${stackCardsPresetFourShowNavigation ? `
                    ${stackOverPrevButtonSelector},
                    ${stackOverNextButtonSelector} {
                        ${stackCardsPresetFourButtonVerticalAlign === 'top' ? `top: ${stackCardsPresetFourButtonVerticalOffset?.Mobile || stackCardsPresetFourButtonVerticalOffset?.Tablet || stackCardsPresetFourButtonVerticalOffset?.Desktop || 0}${stackCardsPresetFourButtonVerticalOffsetUnits?.Mobile || 'px'};` : ''}
                        ${stackCardsPresetFourButtonVerticalAlign === 'center' ? `top: ${stackCardsPresetFourButtonVerticalOffset?.Mobile || stackCardsPresetFourButtonVerticalOffset?.Tablet || stackCardsPresetFourButtonVerticalOffset?.Desktop || 50}${stackCardsPresetFourButtonVerticalOffsetUnits?.Mobile || '%'};` : ''}
                        ${stackCardsPresetFourButtonVerticalAlign === 'bottom' ? `bottom: ${stackCardsPresetFourButtonVerticalOffset?.Mobile || stackCardsPresetFourButtonVerticalOffset?.Tablet || stackCardsPresetFourButtonVerticalOffset?.Desktop || 0}${stackCardsPresetFourButtonVerticalOffsetUnits?.Mobile || 'px'};` : ''}
                    }

                    ${stackOverPrevButtonSelector} {
                        left: ${stackCardsPresetFourButtonSideOffset?.Mobile || stackCardsPresetFourButtonSideOffset?.Tablet || stackCardsPresetFourButtonSideOffset?.Desktop || 0}${stackCardsPresetFourButtonSideOffsetUnits?.Mobile || 'px'};
                    }

                    ${stackOverNextButtonSelector} {
                        right: ${stackCardsPresetFourButtonSideOffset?.Mobile || stackCardsPresetFourButtonSideOffset?.Tablet || stackCardsPresetFourButtonSideOffset?.Desktop || 0}${stackCardsPresetFourButtonSideOffsetUnits?.Mobile || 'px'};
                    }
                ` : ''}
            ` : ''}

            ${isPresetTwo ? `
                ${stackLeftFrameSelector} {
                    max-width: ${stackCardsPresetTwoCardWidth?.Mobile || stackCardsPresetTwoCardWidth?.Tablet || stackCardsPresetTwoCardWidth?.Desktop || 620}${stackCardsPresetTwoCardWidthUnits?.Mobile || 'px'};
                }

                ${stackLeftAllItemSelector} {
                    max-width: ${stackCardsPresetTwoCardWidth?.Mobile || stackCardsPresetTwoCardWidth?.Tablet || stackCardsPresetTwoCardWidth?.Desktop || 620}${stackCardsPresetTwoCardWidthUnits?.Mobile || 'px'};
                }
            ` : ''}

            ${isPresetThree ? `
                ${stackRightFrameSelector} {
                    width: ${stackCardsPresetThreeFrameWidth?.Mobile || stackCardsPresetThreeFrameWidth?.Tablet || stackCardsPresetThreeFrameWidth?.Desktop || 400}${stackCardsPresetThreeFrameWidthUnits?.Mobile || 'px'};
                    max-width: ${stackCardsPresetThreeFrameWidth?.Mobile || stackCardsPresetThreeFrameWidth?.Tablet || stackCardsPresetThreeFrameWidth?.Desktop || 400}${stackCardsPresetThreeFrameWidthUnits?.Mobile || 'px'};
                    height: ${stackCardsPresetThreeFrameHeight?.Mobile || stackCardsPresetThreeFrameHeight?.Tablet || stackCardsPresetThreeFrameHeight?.Desktop || 400}${stackCardsPresetThreeFrameHeightUnits?.Mobile || 'px'};
                    min-height: ${stackCardsPresetThreeFrameHeight?.Mobile || stackCardsPresetThreeFrameHeight?.Tablet || stackCardsPresetThreeFrameHeight?.Desktop || 400}${stackCardsPresetThreeFrameHeightUnits?.Mobile || 'px'};
                }

                ${stackRightAllItemSelector} {
                    width: ${stackCardsPresetThreeItemWidth?.Mobile || stackCardsPresetThreeItemWidth?.Tablet || stackCardsPresetThreeItemWidth?.Desktop || 300}${stackCardsPresetThreeItemWidthUnits?.Mobile || 'px'};
                    max-width: ${stackCardsPresetThreeItemWidth?.Mobile || stackCardsPresetThreeItemWidth?.Tablet || stackCardsPresetThreeItemWidth?.Desktop || 300}${stackCardsPresetThreeItemWidthUnits?.Mobile || 'px'};
                }
            ` : ''}

            ${hasScalePreset ? `
                ${frameGapSelector} {
                    ${hasValue(stackCardsCardItemGap?.Mobile) && stackCardsCardItemGapUnits?.Mobile ? `gap: ${stackCardsCardItemGap?.Mobile}${stackCardsCardItemGapUnits?.Mobile};` : ''}
                }
    
                ${allItemSelector} {
                    ${hasValue(stackCardsOffsetTop?.Mobile) && stackCardsOffsetTopUnits?.Mobile ? `top: ${stackCardsOffsetTop?.Mobile}${stackCardsOffsetTopUnits?.Mobile};` : ''}
                }

                ${Object.entries(stackCardsItemOffsetTop?.Mobile || {}).map(([itemNumber, value]) => {
                    const normalizedValue = typeof value === 'object' && value !== null ? value?.Mobile : value;
                    if (
                        !stackCardsItemOffsetTopSwitcher ||
                        !hasValue(normalizedValue)
                    ) {
                        return '';
                    }
                    return `
                    ${frameSelector} .fb-stack-card-item:nth-child(${itemNumber}),
                    ${editorLayoutSelector} > .fb-stack-card-item:nth-child(${itemNumber}) { top: ${normalizedValue}${stackCardsOffsetTopUnits?.Mobile}; }`;
                }).join(' ')}

                ${Object.entries(stackCardsItemScale?.Mobile || {}).map(([itemNumber, value]) => {
                    const normalizedScale = typeof value === 'object' && value !== null ? value?.Mobile : value;
                    if (
                        !hasValue(normalizedScale)
                    ) {
                        return '';
                    }
                    return `
                    ${frameItemSelector}.fb-card-item${itemNumber},
                    ${editorItemSelector}.fb-card-item${itemNumber} { --fb-design-scale: ${normalizedScale}; }`;
                }).join(' ')}

            ` : ''}
        }
    
    `;
    /** End All Block Style */

    // Custom CSS
    const customCss = getCustomCss(stackCardsCustomCSS, `.${blockID}`);

    return `${stackCardsCSS} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default generateStackCardsStyle;
