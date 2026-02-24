/**
 * Countdown Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateCountdownStyle = (attributes) => {
    const {
		blockID,
		countDownPresetStyle,

		countDownLabelDay,
		countDownLabelHour,
		countDownLabelMinute,
		countDownLabelSecond,

		targetDate,
		showDays,
		showHours,
		showMinutes,
		showSeconds,

		// Countdown Separator
		countDownSeparatorEnabled,
		countDownSeparatorType,
		countDownSeparatorCustom,

		countDownSeparatorFontColorSwitcher,
		countDownSeparatorFontColor,
		countDownSeparatorFontHoverColor,

		countDownSeparatorGlobalTypoSwitcher,
		countDownSeparatorGlobalTypographyData,
		countDownSeparatorGlobalTypoType,
		countDownSeparatorGlobalTypoOption,
		countDownSeparatorFontFamily,
		countDownSeparatorFontSize,
		countDownSeparatorFontSizeUnits,
		countDownSeparatorFontWeight,
		countDownSeparatorFontStyle,
		countDownSeparatorTextTransform,
		countDownSeparatorTextDecoration,
		countDownSeparatorLetterSpacing,
		countDownSeparatorLetterSpacingUnits,
		countDownSeparatorLineHeight,
		countDownSeparatorLineHeightUnits,

		countDownSeparatorHorizontalGap,
		countDownSeparatorHorizontalGapUnits,
		countDownSeparatorVerticalGap,
		countDownSeparatorVerticalGapUnits,

		// Countdown item
		countDownItemSize,
		countDownItemSizeUnits,
		countDownItemSizeHeight,

		countDownLayoutType,
		countDownFlexWrap,
		countDownLayoutAlignment,
		countDownGrid,
		countDownItemGap,
		countDownItemGapUnits,

		/** Background Image */
		countDownItemBgImageEnabled,
		countDownItemBgImageUrl,
		countDownItemBgImageAlt,
		countDownItemBgImageID,

		countDownItemBgImagePositionType,
		countDownItemBgImageAttachmentType,
		countDownItemBgImageRepeatType,
		countDownItemBgImageSizeType,
		countDownItemBgColorSwitcher,
		countDownItemBgColor,
		countDownItemBgHoverColor,

		/** Background Image */
		// Border Type
		countDownItemBorder,
		countDownItemBorderColor,
		countDownItemBackgroundColor,

		countDownItemBorderTypeUnits,
		countDownItemBorderTypeDesktop,
		countDownItemBorderTypeTablet,
		countDownItemBorderTypeMobile,
		countDownItemBorderTypeLink,
		countDownItemBorderColorSwitcher,
		countDownItemBorderHoverColor,

		// Border Radius
		countDownItemBorderRadiusUnits,
		countDownItemBorderRadiusDesktop,
		countDownItemBorderRadiusTablet,
		countDownItemBorderRadiusMobile,
		countDownItemBorderRadiusLink,

		digitFontColor,
		digitFontHoverColor,
		digitGlobalTypoSwitcher,
		digitGlobalTypographyData,
		digitGlobalTypoType,
		digitGlobalTypoOption,
		digitFontFamily,
		digitFontSize,
		digitFontSizeUnits,
		digitFontWeight,
		digitFontStyle,
		digitTextTransform,
		digitTextDecoration,
		digitLetterSpacing,
		digitLetterSpacingUnits,
		digitLineHeight,
		digitLineHeightUnits,
		digitFontColorSwitcher,

		labelFontColorSwitcher,
		labelFontColor,
		labelFontHoverColor,
		labelBgColorSwitcher,
		labelBgColor,
		labelBgHoverColor,
		labelGlobalTypoSwitcher,
		labelGlobalTypographyData,
		labelGlobalTypoType,
		labelGlobalTypoOption,
		labelFontFamily,
		labelFontSize,
		labelFontSizeUnits,
		labelFontWeight,
		labelFontStyle,
		labelTextTransform,
		labelTextDecoration,
		labelLetterSpacing,
		labelLetterSpacingUnits,
		labelLineHeight,
		labelLineHeightUnits,

		/** Start Item Wrapper */
		countDownItemWrapperBgFontHoverColor,

		countDownItemWrapperBoxShadowValues,
		countDownItemWrapperBoxShadowCssValue,

		/** Start Background Image */
		countDownItemWrapperBackgroundImageEnabled,
		countDownItemWrapperBackgroundImageUrl,
		countDownItemWrapperBackgroundImageAlt,
		countDownItemWrapperBackgroundImageID,

		countDownItemWrapperBgImagePositionType,
		countDownItemWrapperBgImageAttachmentType,
		countDownItemWrapperBgImageRepeatType,
		countDownItemWrapperBgImageSizeType,
		/** End Background Image */


		countDownItemWrapperBorderTypeUnits,
		countDownItemWrapperBorderTypeDesktop,
		countDownItemWrapperBorderTypeTablet,
		countDownItemWrapperBorderTypeMobile,
		countDownItemWrapperBorderTypeLink,
		countDownItemWrapperBorder,
		countDownItemWrapperBorderColorSwitcher,
		countDownItemWrapperBorderColor,
		countDownItemWrapperBorderHoverColor,
		countDownItemWrapperBorderRadiusUnits,
		countDownItemWrapperBorderRadiusDesktop,
		countDownItemWrapperBorderRadiusTablet,
		countDownItemWrapperBorderRadiusMobile,
		countDownItemWrapperBorderRadiusLink,

		countDownItemWrapperPaddingUnits,
		countDownItemWrapperPaddingDesktop,
		countDownItemWrapperPaddingTablet,
		countDownItemWrapperPaddingMobile,
		countDownItemWrapperPaddingLink,

		countDownItemWrapperMarginUnits,
		countDownItemWrapperMarginDesktop,
		countDownItemWrapperMarginTablet,
		countDownItemWrapperMarginMobile,
		countDownItemWrapperMarginLink,
		/** End Item Wrapper */
		globalBgColorSwitcher,
		globalBackgroundType,
		globalClassicColor,
		globalGradientColor,
		globalCustomGradientSwitcher,
		globalCustomGradientInputValue,
		globalBackgroundColorStyle,
		globalBackgroundImageUrl,
		globalBackgroundImageAlt,
		globalBackgroundImageID,
		globalBackgroundImagePosition,
		globalBackgroundImageAttachment,
		globalBackgroundImageSize,
		globalBackgroundImageRepeat,
		hoverBackgroundType,
		hoverClassicColor,
		hoverGradientColor,
		hoverCustomGradientSwitcher,
		hoverCustomGradientInputValue,
		hoverBackgroundImageUrl,
		hoverBackgroundImageAlt,
		hoverBackgroundImageID,
		hoverBackgroundImagePosition,
		hoverBackgroundImageAttachment,
		hoverBackgroundImageSize,
		hoverBackgroundImageRepeat,

		// Label
		countDownLabelBorderTypeUnits,
		countDownLabelBorderTypeDesktop,
		countDownLabelBorderTypeTablet,
		countDownLabelBorderTypeMobile,
		countDownLabelBorderTypeLink,
		countDownLabelBorder,
		countDownLabelBorderColorSwitcher,
		countDownLabelBorderColor,
		countDownLabelBorderHoverColor,
		countDownLabelBorderRadiusUnits,
		countDownLabelBorderRadiusDesktop,
		countDownLabelBorderRadiusTablet,
		countDownLabelBorderRadiusMobile,
		countDownLabelBorderRadiusLink,
		countDownLabelMarginUnits,
		countDownLabelMarginDesktop,
		countDownLabelMarginTablet,
		countDownLabelMarginMobile,
		countDownLabelMarginLink,
		countDownLabelWidth,
		countDownLabelWidthUnits,
		countDownLabelHeight,
		countDownLabelHeightUnits,
		countDownLabelAlignmentHz,
		countDownLabelAlignmentVr,

		// Digit
		countDownDigitBgColorSwitcher,
		countDownDigitBgColor,
		countDownDigitBgHoverColor,
		countDownDigitBorderTypeUnits,
		countDownDigitBorderTypeDesktop,
		countDownDigitBorderTypeTablet,
		countDownDigitBorderTypeMobile,
		countDownDigitBorderTypeLink,
		countDownDigitBorder,
		countDownDigitBorderColorSwitcher,
		countDownDigitBorderColor,
		countDownDigitBorderHoverColor,
		countDownDigitBorderRadiusUnits,
		countDownDigitBorderRadiusDesktop,
		countDownDigitBorderRadiusTablet,
		countDownDigitBorderRadiusMobile,
		countDownDigitBorderRadiusLink,
		countDownDigitMarginUnits,
		countDownDigitMarginDesktop,
		countDownDigitMarginTablet,
		countDownDigitMarginMobile,
		countDownDigitMarginLink,
		countDownDigitWidth,
		countDownDigitWidthUnits,
		countDownDigitHeight,
		countDownDigitHeightUnits,
		countDownDigitAlignmentHz,
		countDownDigitAlignmentVr,

		// single digit color
		singleDigitFontColorSwitcher,
		daysDigitFontColorSwitcher,
		daysDigitFontColor,
		daysDigitFontHoverColor,
		hoursDigitFontColorSwitcher,
		hoursDigitFontColor,
		hoursDigitFontHoverColor,
		minutesDigitFontColorSwitcher,
		minutesDigitFontColor,
		minutesDigitFontHoverColor,
		secondsDigitFontColorSwitcher,
		secondsDigitFontColor,
		secondsDigitFontHoverColor,

		countDownDesktopSwitcher,
		countDownTabletSwitcher,
		countDownMobileSwitcher,

		countDownGlobalWraperCustomCSS,
		countDownGlobalWraperID,
		countDownGlobalWraperClass,

		// Position
		countDownZIndex,
		countDownOverflow,
		countDownPositionType,
		countDownHZOrientationType,
		countDownVROrientationType,
		countDownHZLeftOffset,
		countDownHZLeftOffsetUnits,
		countDownHZRightOffset,
		countDownHZRightOffsetUnits,
		countDownVRTopOffset,
		countDownVRTopOffsetUnits,
		countDownVRBottomOffset,
		countDownVRBottomOffsetUnits,
	} = attributes;

    {/* Countdown Item Wrapper Control */}
	const countDownItemWrapperBorderTypeGetDesktop = `${countDownItemWrapperBorderTypeDesktop?.top}${countDownItemWrapperBorderTypeUnits?.Desktop} ${countDownItemWrapperBorderTypeDesktop?.right}${countDownItemWrapperBorderTypeUnits?.Desktop} ${countDownItemWrapperBorderTypeDesktop?.bottom}${countDownItemWrapperBorderTypeUnits?.Desktop} ${countDownItemWrapperBorderTypeDesktop?.left}${countDownItemWrapperBorderTypeUnits?.Desktop}`;
	const countDownItemWrapperBorderTypeGetTablet = `${countDownItemWrapperBorderTypeTablet?.top}${countDownItemWrapperBorderTypeUnits?.Tablet} ${countDownItemWrapperBorderTypeTablet?.right}${countDownItemWrapperBorderTypeUnits?.Tablet} ${countDownItemWrapperBorderTypeTablet?.bottom}${countDownItemWrapperBorderTypeUnits?.Tablet} ${countDownItemWrapperBorderTypeTablet?.left}${countDownItemWrapperBorderTypeUnits?.Tablet}`;
	const countDownItemWrapperBorderTypeGetMobile = `${countDownItemWrapperBorderTypeMobile?.top}${countDownItemWrapperBorderTypeUnits?.Mobile} ${countDownItemWrapperBorderTypeMobile?.right}${countDownItemWrapperBorderTypeUnits?.Mobile} ${countDownItemWrapperBorderTypeMobile?.bottom}${countDownItemWrapperBorderTypeUnits?.Mobile} ${countDownItemWrapperBorderTypeMobile?.left}${countDownItemWrapperBorderTypeUnits?.Mobile}`;

	const countDownItemWrapperBorderRadiusGetDesktop = `${countDownItemWrapperBorderRadiusDesktop?.top}${countDownItemWrapperBorderRadiusUnits?.Desktop} ${countDownItemWrapperBorderRadiusDesktop?.right}${countDownItemWrapperBorderRadiusUnits?.Desktop} ${countDownItemWrapperBorderRadiusDesktop?.bottom}${countDownItemWrapperBorderRadiusUnits?.Desktop} ${countDownItemWrapperBorderRadiusDesktop?.left}${countDownItemWrapperBorderRadiusUnits?.Desktop}`;
	const countDownItemWrapperBorderRadiusGetTablet = `${countDownItemWrapperBorderRadiusTablet?.top}${countDownItemWrapperBorderRadiusUnits?.Tablet} ${countDownItemWrapperBorderRadiusTablet?.right}${countDownItemWrapperBorderRadiusUnits?.Tablet} ${countDownItemWrapperBorderRadiusTablet?.bottom}${countDownItemWrapperBorderRadiusUnits?.Tablet} ${countDownItemWrapperBorderRadiusTablet?.left}${countDownItemWrapperBorderRadiusUnits?.Tablet}`;
	const countDownItemWrapperBorderRadiusGetMobile = `${countDownItemWrapperBorderRadiusMobile?.top}${countDownItemWrapperBorderRadiusUnits?.Mobile} ${countDownItemWrapperBorderRadiusMobile?.right}${countDownItemWrapperBorderRadiusUnits?.Mobile} ${countDownItemWrapperBorderRadiusMobile?.bottom}${countDownItemWrapperBorderRadiusUnits?.Mobile} ${countDownItemWrapperBorderRadiusMobile?.left}${countDownItemWrapperBorderRadiusUnits?.Mobile}`;

	const countDownItemWrapperPaddingGetDesktop = `${countDownItemWrapperPaddingDesktop?.top}${countDownItemWrapperPaddingUnits?.Desktop} ${countDownItemWrapperPaddingDesktop?.right}${countDownItemWrapperPaddingUnits?.Desktop} ${countDownItemWrapperPaddingDesktop?.bottom}${countDownItemWrapperPaddingUnits?.Desktop} ${countDownItemWrapperPaddingDesktop?.left}${countDownItemWrapperPaddingUnits?.Desktop}`;
	const countDownItemWrapperPaddingGetTablet = `${countDownItemWrapperPaddingTablet?.top}${countDownItemWrapperPaddingUnits?.Tablet} ${countDownItemWrapperPaddingTablet?.right}${countDownItemWrapperPaddingUnits?.Tablet} ${countDownItemWrapperPaddingTablet?.bottom}${countDownItemWrapperPaddingUnits?.Tablet} ${countDownItemWrapperPaddingTablet?.left}${countDownItemWrapperPaddingUnits?.Tablet}`;
	const countDownItemWrapperPaddingGetMobile = `${countDownItemWrapperPaddingMobile?.top}${countDownItemWrapperPaddingUnits?.Mobile} ${countDownItemWrapperPaddingMobile?.right}${countDownItemWrapperPaddingUnits?.Mobile} ${countDownItemWrapperPaddingMobile?.bottom}${countDownItemWrapperPaddingUnits?.Mobile} ${countDownItemWrapperPaddingMobile?.left}${countDownItemWrapperPaddingUnits?.Mobile}`;

	const countDownItemWrapperMarginGetDesktop = `${countDownItemWrapperMarginDesktop?.top}${countDownItemWrapperMarginUnits?.Desktop} ${countDownItemWrapperMarginDesktop?.right}${countDownItemWrapperMarginUnits?.Desktop} ${countDownItemWrapperMarginDesktop?.bottom}${countDownItemWrapperMarginUnits?.Desktop} ${countDownItemWrapperMarginDesktop?.left}${countDownItemWrapperMarginUnits?.Desktop}`;
	const countDownItemWrapperMarginGetTablet = `${countDownItemWrapperMarginTablet?.top}${countDownItemWrapperMarginUnits?.Tablet} ${countDownItemWrapperMarginTablet?.right}${countDownItemWrapperMarginUnits?.Tablet} ${countDownItemWrapperMarginTablet?.bottom}${countDownItemWrapperMarginUnits?.Tablet} ${countDownItemWrapperMarginTablet?.left}${countDownItemWrapperMarginUnits?.Tablet}`;
	const countDownItemWrapperMarginGetMobile = `${countDownItemWrapperMarginMobile?.top}${countDownItemWrapperMarginUnits?.Mobile} ${countDownItemWrapperMarginMobile?.right}${countDownItemWrapperMarginUnits?.Mobile} ${countDownItemWrapperMarginMobile?.bottom}${countDownItemWrapperMarginUnits?.Mobile} ${countDownItemWrapperMarginMobile?.left}${countDownItemWrapperMarginUnits?.Mobile}`;

	{/* Countdown Item Control */}
	const countDownItemBorderTypeGetDesktop = `${countDownItemBorderTypeDesktop?.top}${countDownItemBorderTypeUnits?.Desktop} ${countDownItemBorderTypeDesktop?.right}${countDownItemBorderTypeUnits?.Desktop} ${countDownItemBorderTypeDesktop?.bottom}${countDownItemBorderTypeUnits?.Desktop} ${countDownItemBorderTypeDesktop?.left}${countDownItemBorderTypeUnits?.Desktop}`;
	const countDownItemBorderTypeGetTablet = `${countDownItemBorderTypeTablet?.top}${countDownItemBorderTypeUnits?.Tablet} ${countDownItemBorderTypeTablet?.right}${countDownItemBorderTypeUnits?.Tablet} ${countDownItemBorderTypeTablet?.bottom}${countDownItemBorderTypeUnits?.Tablet} ${countDownItemBorderTypeTablet?.left}${countDownItemBorderTypeUnits?.Tablet}`;
	const countDownItemBorderTypeGetMobile = `${countDownItemBorderTypeMobile?.top}${countDownItemBorderTypeUnits?.Mobile} ${countDownItemBorderTypeMobile?.right}${countDownItemBorderTypeUnits?.Mobile} ${countDownItemBorderTypeMobile?.bottom}${countDownItemBorderTypeUnits?.Mobile} ${countDownItemBorderTypeMobile?.left}${countDownItemBorderTypeUnits?.Mobile}`;

	const countDownItemBorderRadiusGetDesktop = `${countDownItemBorderRadiusDesktop?.top}${countDownItemBorderRadiusUnits?.Desktop} ${countDownItemBorderRadiusDesktop?.right}${countDownItemBorderRadiusUnits?.Desktop} ${countDownItemBorderRadiusDesktop?.bottom}${countDownItemBorderRadiusUnits?.Desktop} ${countDownItemBorderRadiusDesktop?.left}${countDownItemBorderRadiusUnits?.Desktop}`;
	const countDownItemBorderRadiusGetTablet = `${countDownItemBorderRadiusTablet?.top}${countDownItemBorderRadiusUnits?.Tablet} ${countDownItemBorderRadiusTablet?.right}${countDownItemBorderRadiusUnits?.Tablet} ${countDownItemBorderRadiusTablet?.bottom}${countDownItemBorderRadiusUnits?.Tablet} ${countDownItemBorderRadiusTablet?.left}${countDownItemBorderRadiusUnits?.Tablet}`;
	const countDownItemBorderRadiusGetMobile = `${countDownItemBorderRadiusMobile?.top}${countDownItemBorderRadiusUnits?.Mobile} ${countDownItemBorderRadiusMobile?.right}${countDownItemBorderRadiusUnits?.Mobile} ${countDownItemBorderRadiusMobile?.bottom}${countDownItemBorderRadiusUnits?.Mobile} ${countDownItemBorderRadiusMobile?.left}${countDownItemBorderRadiusUnits?.Mobile}`;

    {/* Countdown Item Label Control */}
	const countDownLabelBorderTypeGetDesktop = `${countDownLabelBorderTypeDesktop?.top}${countDownLabelBorderTypeUnits?.Desktop} ${countDownLabelBorderTypeDesktop?.right}${countDownLabelBorderTypeUnits?.Desktop} ${countDownLabelBorderTypeDesktop?.bottom}${countDownLabelBorderTypeUnits?.Desktop} ${countDownLabelBorderTypeDesktop?.left}${countDownLabelBorderTypeUnits?.Desktop}`;
	const countDownLabelBorderTypeGetTablet = `${countDownLabelBorderTypeTablet?.top}${countDownLabelBorderTypeUnits?.Tablet} ${countDownLabelBorderTypeTablet?.right}${countDownLabelBorderTypeUnits?.Tablet} ${countDownLabelBorderTypeTablet?.bottom}${countDownLabelBorderTypeUnits?.Tablet} ${countDownLabelBorderTypeTablet?.left}${countDownLabelBorderTypeUnits?.Tablet}`;
	const countDownLabelBorderTypeGetMobile = `${countDownLabelBorderTypeMobile?.top}${countDownLabelBorderTypeUnits?.Mobile} ${countDownLabelBorderTypeMobile?.right}${countDownLabelBorderTypeUnits?.Mobile} ${countDownLabelBorderTypeMobile?.bottom}${countDownLabelBorderTypeUnits?.Mobile} ${countDownLabelBorderTypeMobile?.left}${countDownLabelBorderTypeUnits?.Mobile}`;

	const countDownLabelBorderRadiusGetDesktop = `${countDownLabelBorderRadiusDesktop?.top}${countDownLabelBorderRadiusUnits?.Desktop} ${countDownLabelBorderRadiusDesktop?.right}${countDownLabelBorderRadiusUnits?.Desktop} ${countDownLabelBorderRadiusDesktop?.bottom}${countDownLabelBorderRadiusUnits?.Desktop} ${countDownLabelBorderRadiusDesktop?.left}${countDownLabelBorderRadiusUnits?.Desktop}`;
	const countDownLabelBorderRadiusGetTablet = `${countDownLabelBorderRadiusTablet?.top}${countDownLabelBorderRadiusUnits?.Tablet} ${countDownLabelBorderRadiusTablet?.right}${countDownLabelBorderRadiusUnits?.Tablet} ${countDownLabelBorderRadiusTablet?.bottom}${countDownLabelBorderRadiusUnits?.Tablet} ${countDownLabelBorderRadiusTablet?.left}${countDownLabelBorderRadiusUnits?.Tablet}`;
	const countDownLabelBorderRadiusGetMobile = `${countDownLabelBorderRadiusMobile?.top}${countDownLabelBorderRadiusUnits?.Mobile} ${countDownLabelBorderRadiusMobile?.right}${countDownLabelBorderRadiusUnits?.Mobile} ${countDownLabelBorderRadiusMobile?.bottom}${countDownLabelBorderRadiusUnits?.Mobile} ${countDownLabelBorderRadiusMobile?.left}${countDownLabelBorderRadiusUnits?.Mobile}`;

	const countDownLabelMarginGetDesktop = `${countDownLabelMarginDesktop?.top}${countDownLabelMarginUnits?.Desktop} ${countDownLabelMarginDesktop?.right}${countDownLabelMarginUnits?.Desktop} ${countDownLabelMarginDesktop?.bottom}${countDownLabelMarginUnits?.Desktop} ${countDownLabelMarginDesktop?.left}${countDownLabelMarginUnits?.Desktop}`;
	const countDownLabelMarginGetTablet = `${countDownLabelMarginTablet?.top}${countDownLabelMarginUnits?.Tablet} ${countDownLabelMarginTablet?.right}${countDownLabelMarginUnits?.Tablet} ${countDownLabelMarginTablet?.bottom}${countDownLabelMarginUnits?.Tablet} ${countDownLabelMarginTablet?.left}${countDownLabelMarginUnits?.Tablet}`;
	const countDownLabelMarginGetMobile = `${countDownLabelMarginMobile?.top}${countDownLabelMarginUnits?.Mobile} ${countDownLabelMarginMobile?.right}${countDownLabelMarginUnits?.Mobile} ${countDownLabelMarginMobile?.bottom}${countDownLabelMarginUnits?.Mobile} ${countDownLabelMarginMobile?.left}${countDownLabelMarginUnits?.Mobile}`;

    {/* Countdown Item Digit Control */}
	const countDownDigitBorderTypeGetDesktop = `${countDownDigitBorderTypeDesktop?.top}${countDownDigitBorderTypeUnits?.Desktop} ${countDownDigitBorderTypeDesktop?.right}${countDownDigitBorderTypeUnits?.Desktop} ${countDownDigitBorderTypeDesktop?.bottom}${countDownDigitBorderTypeUnits?.Desktop} ${countDownDigitBorderTypeDesktop?.left}${countDownDigitBorderTypeUnits?.Desktop}`;
	const countDownDigitBorderTypeGetTablet = `${countDownDigitBorderTypeTablet?.top}${countDownDigitBorderTypeUnits?.Tablet} ${countDownDigitBorderTypeTablet?.right}${countDownDigitBorderTypeUnits?.Tablet} ${countDownDigitBorderTypeTablet?.bottom}${countDownDigitBorderTypeUnits?.Tablet} ${countDownDigitBorderTypeTablet?.left}${countDownDigitBorderTypeUnits?.Tablet}`;
	const countDownDigitBorderTypeGetMobile = `${countDownDigitBorderTypeMobile?.top}${countDownDigitBorderTypeUnits?.Mobile} ${countDownDigitBorderTypeMobile?.right}${countDownDigitBorderTypeUnits?.Mobile} ${countDownDigitBorderTypeMobile?.bottom}${countDownDigitBorderTypeUnits?.Mobile} ${countDownDigitBorderTypeMobile?.left}${countDownDigitBorderTypeUnits?.Mobile}`;

	const countDownDigitBorderRadiusGetDesktop = `${countDownDigitBorderRadiusDesktop?.top}${countDownDigitBorderRadiusUnits?.Desktop} ${countDownDigitBorderRadiusDesktop?.right}${countDownDigitBorderRadiusUnits?.Desktop} ${countDownDigitBorderRadiusDesktop?.bottom}${countDownDigitBorderRadiusUnits?.Desktop} ${countDownDigitBorderRadiusDesktop?.left}${countDownDigitBorderRadiusUnits?.Desktop}`;
	const countDownDigitBorderRadiusGetTablet = `${countDownDigitBorderRadiusTablet?.top}${countDownDigitBorderRadiusUnits?.Tablet} ${countDownDigitBorderRadiusTablet?.right}${countDownDigitBorderRadiusUnits?.Tablet} ${countDownDigitBorderRadiusTablet?.bottom}${countDownDigitBorderRadiusUnits?.Tablet} ${countDownDigitBorderRadiusTablet?.left}${countDownDigitBorderRadiusUnits?.Tablet}`;
	const countDownDigitBorderRadiusGetMobile = `${countDownDigitBorderRadiusMobile?.top}${countDownDigitBorderRadiusUnits?.Mobile} ${countDownDigitBorderRadiusMobile?.right}${countDownDigitBorderRadiusUnits?.Mobile} ${countDownDigitBorderRadiusMobile?.bottom}${countDownDigitBorderRadiusUnits?.Mobile} ${countDownDigitBorderRadiusMobile?.left}${countDownDigitBorderRadiusUnits?.Mobile}`;

	const countDownDigitMarginGetDesktop = `${countDownDigitMarginDesktop?.top}${countDownDigitMarginUnits?.Desktop} ${countDownDigitMarginDesktop?.right}${countDownDigitMarginUnits?.Desktop} ${countDownDigitMarginDesktop?.bottom}${countDownDigitMarginUnits?.Desktop} ${countDownDigitMarginDesktop?.left}${countDownDigitMarginUnits?.Desktop}`;
	const countDownDigitMarginGetTablet = `${countDownDigitMarginTablet?.top}${countDownDigitMarginUnits?.Tablet} ${countDownDigitMarginTablet?.right}${countDownDigitMarginUnits?.Tablet} ${countDownDigitMarginTablet?.bottom}${countDownDigitMarginUnits?.Tablet} ${countDownDigitMarginTablet?.left}${countDownDigitMarginUnits?.Tablet}`;
	const countDownDigitMarginGetMobile = `${countDownDigitMarginMobile?.top}${countDownDigitMarginUnits?.Mobile} ${countDownDigitMarginMobile?.right}${countDownDigitMarginUnits?.Mobile} ${countDownDigitMarginMobile?.bottom}${countDownDigitMarginUnits?.Mobile} ${countDownDigitMarginMobile?.left}${countDownDigitMarginUnits?.Mobile}`;

    const countDownStyle = `
        .fb-count-down-main-wrapper.${blockID} {
            ${countDownPositionType === 'default' ? `position: relative;` : ''}
            ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' ? `width: 100%;` : ''}
            ${countDownPositionType !== 'default' ? `position: ${countDownPositionType};` : ''}
            ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'left' && countDownHZLeftOffset?.Desktop ? `left: ${countDownHZLeftOffset?.Desktop}${countDownHZLeftOffsetUnits?.Desktop};` : ''}
            ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'right' && countDownHZRightOffset?.Desktop ? `right: ${countDownHZRightOffset?.Desktop}${countDownHZRightOffsetUnits?.Desktop};` : ''}
            ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'top' && countDownVRTopOffset?.Desktop ? `top: ${countDownVRTopOffset?.Desktop}${countDownVRTopOffsetUnits?.Desktop};` : ''}
            ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'bottom' && countDownVRBottomOffset?.Desktop ? `bottom: ${countDownVRBottomOffset?.Desktop}${countDownVRBottomOffsetUnits?.Desktop};` : ''}
            ${countDownZIndex?.Desktop ? `z-index: ${countDownZIndex?.Desktop};` : ''}
            ${countDownOverflow !== 'default' ? `overflow: ${countDownOverflow};` : ''}
        }
        .fb-count-down-wrapper.${blockID} {
            ${countDownLayoutType === 'flex' ? `display: flex;` : ''}
            ${countDownLayoutType === 'flex' && countDownFlexWrap === true ? `flex-wrap: wrap;` : ''}
            ${countDownLayoutType === 'grid' ? `display: grid;` : ''}
            ${countDownLayoutType === 'grid' ? `grid-template-columns: repeat(${countDownGrid?.Desktop}, 1fr);` : ''}
            ${countDownItemGap?.Desktop ? `gap: ${countDownItemGap?.Desktop}${countDownItemGapUnits?.Desktop};` : ''}
            ${countDownLayoutAlignment ? `justify-content: ${countDownLayoutAlignment};` : ''}
            ${countDownItemWrapperBorder ? `border: ${countDownItemWrapperBorder};` : ''}
            ${countDownItemWrapperBorderTypeGetDesktop && countDownItemWrapperBorderTypeDesktop?.top ? `border-width: ${countDownItemWrapperBorderTypeGetDesktop};` : ''}
            ${countDownItemWrapperBorderRadiusGetDesktop && countDownItemWrapperBorderRadiusDesktop?.top ? `border-radius: ${countDownItemWrapperBorderRadiusGetDesktop};` : ''}
            ${countDownItemWrapperBorderColor ? `border-color: ${countDownItemWrapperBorderColor};` : ''}
            
            ${globalBackgroundType === "gradient" 
                ? (globalCustomGradientSwitcher && globalCustomGradientInputValue 
                    ? `background: ${globalCustomGradientInputValue};` 
                    : (globalGradientColor 
                        ? `background: ${globalGradientColor};` 
                        : `background: ${globalClassicColor};`))
                : (globalBackgroundImageUrl && globalBackgroundImageUrl !== "null" 
                    ? `
                        ${globalBackgroundImageUrl ? `background-image: url(${globalBackgroundImageUrl});` : "" }
                        ${globalBackgroundImagePosition ? `background-position: ${globalBackgroundImagePosition};` : "" }
                        ${globalBackgroundImageAttachment ? `background-attachment: ${globalBackgroundImageAttachment};` : "" }
                        ${globalBackgroundImageRepeat ? `background-repeat: ${globalBackgroundImageRepeat};` : "" }
                        ${globalBackgroundImageSize ? `background-size: ${globalBackgroundImageSize};` : "" } 
                    `
                    : globalClassicColor ? `background: ${globalClassicColor};` : '')
            }
            ${countDownItemWrapperPaddingGetDesktop && countDownItemWrapperPaddingDesktop?.top ? `padding: ${countDownItemWrapperPaddingGetDesktop};` : ''}
            ${countDownItemWrapperMarginGetDesktop && countDownItemWrapperMarginDesktop?.top ? `margin: ${countDownItemWrapperMarginGetDesktop};` : ''}
            transition: all .3s ease-in-out;
        }

        .fb-count-down-wrapper.${blockID}:hover{
            ${hoverBackgroundType === "gradient" 
                ? (hoverCustomGradientSwitcher && hoverCustomGradientInputValue 
                    ? `background: ${hoverCustomGradientInputValue};` 
                    : (hoverGradientColor 
                        ? `background: ${hoverGradientColor};` 
                        : `background: ${hoverClassicColor};`))
                : (hoverBackgroundImageUrl && hoverBackgroundImageUrl !== "null" 
                    ? `
                        ${hoverBackgroundImageUrl ? `background-image: url(${hoverBackgroundImageUrl});` : "" }
                        ${hoverBackgroundImagePosition ? `background-position: ${hoverBackgroundImagePosition};` : "" }
                        ${hoverBackgroundImageAttachment ? `background-attachment: ${hoverBackgroundImageAttachment};` : "" }
                        ${hoverBackgroundImageRepeat ? `background-repeat: ${hoverBackgroundImageRepeat};` : "" }
                        ${hoverBackgroundImageSize ? `background-size: ${hoverBackgroundImageSize};` : "" } 
                    `
                    : hoverClassicColor ? `background: ${hoverClassicColor};` : '')
            }
            ${countDownItemWrapperBorderHoverColor ? `border-color: ${countDownItemWrapperBorderHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-count-down-wrapper.${blockID} .fb-count-down-item {
            ${countDownItemBgColor ? `background: ${countDownItemBgColor};` : ''}
            ${countDownItemSize?.Desktop ? `width: ${countDownItemSize?.Desktop}${countDownItemSizeUnits?.Desktop};` : ''}
            ${countDownItemSizeHeight === true && countDownItemSize?.Desktop ? `height: ${countDownItemSize?.Desktop}${countDownItemSizeUnits?.Desktop};` : ''}
            ${countDownItemBorder ? `border-style: ${countDownItemBorder};` : ''}
            ${countDownItemBorderTypeGetDesktop && countDownItemBorderTypeDesktop?.top ? `border-width: ${countDownItemBorderTypeGetDesktop};` : ''}
            ${countDownItemBorderColor ? `border-color: ${countDownItemBorderColor};` : ''}
            ${countDownItemBorderRadiusGetDesktop && countDownItemBorderRadiusDesktop?.top ? `border-radius: ${countDownItemBorderRadiusGetDesktop};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-count-down-wrapper.${blockID} .fb-count-down-item:hover {
            ${countDownItemBgHoverColor ? `background: ${countDownItemBgHoverColor};` : ''}
            ${countDownItemBorderHoverColor ? `border-color: ${countDownItemBorderHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-count-down-wrapper.${blockID} .fb-count-down-item::before {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            ${ countDownSeparatorEnabled ? `
                ${countDownSeparatorType === 'colon' ? `content: ':';` : ''}
                ${countDownSeparatorType === 'line' ? `content: '|';` : ''}
                ${countDownSeparatorType === 'slash' ? `content: '/';` : ''}
                ${countDownSeparatorType === 'custom' ? `content: '${countDownSeparatorCustom}';` : ''}
                ${countDownSeparatorVerticalGap?.Desktop ? `top: ${countDownSeparatorVerticalGap?.Desktop}${countDownSeparatorVerticalGapUnits?.Desktop};` : ''}
                ${countDownSeparatorHorizontalGap?.Desktop ? `right: -${countDownSeparatorHorizontalGap?.Desktop}${countDownSeparatorHorizontalGapUnits?.Desktop};` : ''}
                ${countDownSeparatorFontColor ? `color: ${countDownSeparatorFontColor};` : ''}

                ${countDownSeparatorGlobalTypoSwitcher?.fontFamily === true && countDownSeparatorGlobalTypographyData?.fontFamily ? `font-family: ${countDownSeparatorGlobalTypographyData?.fontFamily};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.fontSize === true && countDownSeparatorGlobalTypographyData?.fontSize ? `font-size: ${countDownSeparatorGlobalTypographyData?.fontSize};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.fontWeight === true && countDownSeparatorGlobalTypographyData?.fontWeight ? `font-weight: ${countDownSeparatorGlobalTypographyData?.fontWeight};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.fontStyle === true && countDownSeparatorGlobalTypographyData?.fontStyle ? `font-style: ${countDownSeparatorGlobalTypographyData?.fontStyle};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.textTransform === true && countDownSeparatorGlobalTypographyData?.textTransform ? `text-transform: ${countDownSeparatorGlobalTypographyData?.textTransform};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.textDecoration === true && countDownSeparatorGlobalTypographyData?.textDecoration ? `text-decoration: ${countDownSeparatorGlobalTypographyData?.textDecoration};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.letterSpacing === true && countDownSeparatorGlobalTypographyData?.letterSpacing ? `letter-spacing: ${countDownSeparatorGlobalTypographyData?.letterSpacing};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.lineHeight === true && countDownSeparatorGlobalTypographyData?.lineHeight ? `line-height: ${countDownSeparatorGlobalTypographyData?.lineHeight};` : ''}

                ${countDownSeparatorGlobalTypoSwitcher?.fontFamily === false && countDownSeparatorFontFamily ? `font-family: ${countDownSeparatorFontFamily};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.fontSize === false && countDownSeparatorFontSize?.Desktop ? `font-size: ${countDownSeparatorFontSize?.Desktop}${countDownSeparatorFontSizeUnits?.Desktop};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.fontWeight === false && countDownSeparatorFontWeight ? `font-weight: ${countDownSeparatorFontWeight};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.fontStyle === false && countDownSeparatorFontStyle ? `font-style: ${countDownSeparatorFontStyle};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.textTransform === false && countDownSeparatorTextTransform ? `text-transform: ${countDownSeparatorTextTransform};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.textDecoration === false && countDownSeparatorTextDecoration ? `text-decoration: ${countDownSeparatorTextDecoration};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.letterSpacing === false && countDownSeparatorLetterSpacing?.Desktop ? `letter-spacing: ${countDownSeparatorLetterSpacing?.Desktop}${countDownSeparatorLetterSpacingUnits?.Desktop};` : ''}
                ${countDownSeparatorGlobalTypoSwitcher?.lineHeight === false && countDownSeparatorLineHeight?.Desktop ? `line-height: ${countDownSeparatorLineHeight?.Desktop}${countDownSeparatorLineHeightUnits?.Desktop};` : ''}
                ` 
                : ''
            }
            transition: all .3s ease-in-out;
        }
        .fb-count-down-wrapper.${blockID} .fb-count-down-item:hover::before {
            ${countDownSeparatorFontHoverColor ? `color: ${countDownSeparatorFontHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
            display: flex;
            justify-content: center;
            align-items: center;
            ${countDownDigitAlignmentHz === 'left' ? `justify-content: start;` : ""}
            ${countDownDigitAlignmentHz === 'center' ? `justify-content: center;` : ""}
            ${countDownDigitAlignmentHz === 'right' ? `justify-content: end;` : ""}
            ${countDownDigitAlignmentVr === 'left' ? `align-items: start;` : ""}
            ${countDownDigitAlignmentVr === 'center' ? `align-items: center;` : ""}
            ${countDownDigitAlignmentVr === 'right' ? `align-items: end;` : ""}
            ${countDownDigitBgColor ? `background-color: ${countDownDigitBgColor};` : ""}
            ${digitFontColor ? `color: ${digitFontColor};` : ""}

            ${digitGlobalTypoSwitcher?.fontFamily === true && digitGlobalTypographyData?.fontFamily ? `font-family: ${digitGlobalTypographyData?.fontFamily};` : ''}
            ${digitGlobalTypoSwitcher?.fontSize === true && digitGlobalTypographyData?.fontSize ? `font-size: ${digitGlobalTypographyData?.fontSize};` : ''}
            ${digitGlobalTypoSwitcher?.fontWeight === true && digitGlobalTypographyData?.fontWeight ? `font-weight: ${digitGlobalTypographyData?.fontWeight};` : ''}
            ${digitGlobalTypoSwitcher?.fontStyle === true && digitGlobalTypographyData?.fontStyle ? `font-style: ${digitGlobalTypographyData?.fontStyle};` : ''}
            ${digitGlobalTypoSwitcher?.textTransform === true && digitGlobalTypographyData?.textTransform ? `text-transform: ${digitGlobalTypographyData?.textTransform};` : ''}
            ${digitGlobalTypoSwitcher?.textDecoration === true && digitGlobalTypographyData?.textDecoration ? `text-decoration: ${digitGlobalTypographyData?.textDecoration};` : ''}
            ${digitGlobalTypoSwitcher?.letterSpacing === true && digitGlobalTypographyData?.letterSpacing ? `letter-spacing: ${digitGlobalTypographyData?.letterSpacing};` : ''}
            ${digitGlobalTypoSwitcher?.lineHeight === true && digitGlobalTypographyData?.lineHeight ? `line-height: ${digitGlobalTypographyData?.lineHeight};` : ''}

            ${digitGlobalTypoSwitcher?.fontFamily === false && digitFontFamily ? `font-family: ${digitFontFamily};` : ""}
            ${digitGlobalTypoSwitcher?.fontSize === false && digitFontSize?.Desktop ? `font-size: ${digitFontSize?.Desktop}${digitFontSizeUnits?.Desktop};` : ""}
            ${digitGlobalTypoSwitcher?.fontWeight === false && digitFontWeight ? `font-weight: ${digitFontWeight};` : ""}
            ${digitGlobalTypoSwitcher?.fontStyle === false && digitFontStyle ? `font-style: ${digitFontStyle};` : ""}
            ${digitGlobalTypoSwitcher?.textTransform === false && digitTextTransform ? `text-transform: ${digitTextTransform};` : ""}
            ${digitGlobalTypoSwitcher?.textDecoration === false && digitTextDecoration ? `text-decoration: ${digitTextDecoration};` : ""}
            ${digitGlobalTypoSwitcher?.letterSpacing === false && digitLetterSpacing?.Desktop ? `letter-spacing: ${digitLetterSpacing?.Desktop}${digitLetterSpacingUnits?.Desktop};` : ""}
            ${digitGlobalTypoSwitcher?.lineHeight === false && digitLineHeight?.Desktop ? `line-height: ${digitLineHeight?.Desktop}${digitLineHeightUnits?.Desktop};` : ""}
            ${countDownDigitBorder ? `border-style: ${countDownDigitBorder};` : ''}
            ${countDownDigitMarginGetDesktop && countDownDigitMarginDesktop?.top ? `margin: ${countDownDigitMarginGetDesktop};` : ''}
            ${countDownDigitBorderTypeGetDesktop && countDownDigitBorderTypeDesktop?.top ? `border-width: ${countDownDigitBorderTypeGetDesktop};` : ''}
            ${countDownDigitBorderColor ? `border-color: ${countDownDigitBorderColor};` : ''}
            ${countDownDigitBorderRadiusGetDesktop && countDownDigitBorderRadiusDesktop?.top ? `border-radius: ${countDownDigitBorderRadiusGetDesktop};` : ''}
            ${countDownDigitWidth?.Desktop ? `width: ${countDownDigitWidth?.Desktop}${countDownDigitWidthUnits?.Desktop};` : ''}
            ${countDownDigitHeight?.Desktop ? `height: ${countDownDigitHeight?.Desktop}${countDownDigitHeightUnits?.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time:hover {
            ${countDownDigitBgHoverColor ? `background-color: ${countDownDigitBgHoverColor};` : ""}
            ${digitFontHoverColor ? `color: ${digitFontHoverColor};` : ""}
            ${countDownDigitBorderHoverColor ? `border-color: ${countDownDigitBorderHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
            display: flex;
            ${countDownLabelAlignmentHz === 'left' ? `justify-content: start;` : ""}
            ${countDownLabelAlignmentHz === 'center' ? `justify-content: center;` : ""}
            ${countDownLabelAlignmentHz === 'right' ? `justify-content: end;` : ""}
            ${countDownLabelAlignmentVr === 'left' ? `align-items: start;` : ""}
            ${countDownLabelAlignmentVr === 'center' ? `align-items: center;` : ""}
            ${countDownLabelAlignmentVr === 'right' ? `align-items: end;` : ""}
            ${labelBgColor ? `background-color: ${labelBgColor};` : ""}
            ${labelFontColor ? `color: ${labelFontColor};` : ""}

            ${labelGlobalTypoSwitcher?.fontFamily === true && labelGlobalTypographyData?.fontFamily ? `font-family: ${labelGlobalTypographyData?.fontFamily};` : ''}
            ${labelGlobalTypoSwitcher?.fontSize === true && labelGlobalTypographyData?.fontSize ? `font-size: ${labelGlobalTypographyData?.fontSize};` : ''}
            ${labelGlobalTypoSwitcher?.fontWeight === true && labelGlobalTypographyData?.fontWeight ? `font-weight: ${labelGlobalTypographyData?.fontWeight};` : ''}
            ${labelGlobalTypoSwitcher?.fontStyle === true && labelGlobalTypographyData?.fontStyle ? `font-style: ${labelGlobalTypographyData?.fontStyle};` : ''}
            ${labelGlobalTypoSwitcher?.textTransform === true && labelGlobalTypographyData?.textTransform ? `text-transform: ${labelGlobalTypographyData?.textTransform};` : ''}
            ${labelGlobalTypoSwitcher?.textDecoration === true && labelGlobalTypographyData?.textDecoration ? `text-decoration: ${labelGlobalTypographyData?.textDecoration};` : ''}
            ${labelGlobalTypoSwitcher?.letterSpacing === true && labelGlobalTypographyData?.letterSpacing ? `letter-spacing: ${labelGlobalTypographyData?.letterSpacing};` : ''}
            ${labelGlobalTypoSwitcher?.lineHeight === true && labelGlobalTypographyData?.lineHeight ? `line-height: ${labelGlobalTypographyData?.lineHeight};` : ''}

            ${labelGlobalTypoSwitcher?.fontFamily === false && labelFontFamily && labelFontFamily !== 'Default' ? `font-family: ${labelFontFamily};` : ""}
            ${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Desktop ? `font-size: ${labelFontSize?.Desktop}${labelFontSizeUnits?.Desktop};` : ""}
            ${labelGlobalTypoSwitcher?.fontWeight === false && labelFontWeight ? `font-weight: ${labelFontWeight};` : ""}
            ${labelGlobalTypoSwitcher?.fontStyle === false && labelFontStyle ? `font-style: ${labelFontStyle};` : ""}
            ${labelGlobalTypoSwitcher?.textTransform === false && labelTextTransform ? `text-transform: ${labelTextTransform};` : ""}
            ${labelGlobalTypoSwitcher?.textDecoration === false && labelTextDecoration ? `text-decoration: ${labelTextDecoration};` : ""}
            ${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Desktop ? `letter-spacing: ${labelLetterSpacing?.Desktop}${labelLetterSpacingUnits?.Desktop};` : ""}
            ${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Desktop ? `line-height: ${labelLineHeight?.Desktop}${labelLineHeightUnits?.Desktop};` : ""}
            ${countDownLabelBorder ? `border-style: ${countDownLabelBorder};` : ''}
            ${countDownLabelBorderTypeGetDesktop && countDownLabelBorderTypeDesktop?.top ? `border-width: ${countDownLabelBorderTypeGetDesktop};` : ''}
            ${countDownLabelBorderColor ? `border-color: ${countDownLabelBorderColor};` : ''}
            ${countDownLabelBorderRadiusGetDesktop && countDownLabelBorderRadiusDesktop?.top ? `border-radius: ${countDownLabelBorderRadiusGetDesktop};` : ''}
            ${countDownLabelMarginGetDesktop && countDownLabelMarginDesktop?.top ? `margin: ${countDownLabelMarginGetDesktop};` : ''}
            ${countDownLabelWidth?.Desktop ? `width: ${countDownLabelWidth?.Desktop}${countDownLabelWidthUnits?.Desktop};` : ''}
            ${countDownLabelHeight?.Desktop ? `height: ${countDownLabelHeight?.Desktop}${countDownLabelHeightUnits?.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label:hover{
            ${labelBgHoverColor ? `background-color: ${labelBgHoverColor};` : ""}
            ${labelFontHoverColor ? `color: ${labelFontHoverColor};` : ""}
            ${countDownLabelBorderHoverColor ? `border-color: ${countDownLabelBorderHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }

        ${ singleDigitFontColorSwitcher === true ? `
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.days {
                ${daysDigitFontColor ? `color: ${daysDigitFontColor};` : ""}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.days:hover {
                ${daysDigitFontHoverColor ? `color: ${daysDigitFontHoverColor};` : ""}
            }

            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.hours {
                ${hoursDigitFontColor ? `color: ${hoursDigitFontColor};` : ""}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.hours:hover {
                ${hoursDigitFontHoverColor ? `color: ${hoursDigitFontHoverColor};` : ""}
            }

            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.minutes {
                ${minutesDigitFontColor ? `color: ${minutesDigitFontColor};` : ""}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.minutes:hover {
                ${minutesDigitFontHoverColor ? `color: ${minutesDigitFontHoverColor};` : ""}
            }

            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.seconds {
                ${secondsDigitFontColor ? `color: ${secondsDigitFontColor};` : ""}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time.seconds:hover {
                ${secondsDigitFontHoverColor ? `color: ${secondsDigitFontHoverColor};` : ""}
            }
        ` : ''}

        @media only screen and (max-width: 1024px) {
            .fb-count-down-main-wrapper.${blockID} {
                ${countDownPositionType !== 'default' ? `position: ${countDownPositionType};` : ''}
                ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'left' && countDownHZLeftOffset?.Tablet ? `left: ${countDownHZLeftOffset?.Tablet}${countDownHZLeftOffsetUnits?.Tablet};` : ''}
                ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'right' && countDownHZRightOffset?.Tablet ? `right: ${countDownHZRightOffset?.Tablet}${countDownHZRightOffsetUnits?.Tablet};` : ''}
                ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'top' && countDownVRTopOffset?.Tablet ? `top: ${countDownVRTopOffset?.Tablet}${countDownVRTopOffsetUnits?.Tablet};` : ''}
                ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'bottom' && countDownVRBottomOffset?.Tablet ? `bottom: ${countDownVRBottomOffset?.Tablet}${countDownVRBottomOffsetUnits?.Tablet};` : ''}
                ${countDownZIndex?.Tablet ? `z-index: ${countDownZIndex?.Tablet};` : ''}
            }
            .fb-count-down-wrapper.${blockID} {
                ${countDownLayoutType === 'grid' ? `grid-template-columns: repeat(${countDownGrid?.Tablet}, 1fr);` : ''}
                ${countDownItemGap?.Tablet ? `gap: ${countDownItemGap?.Tablet}${countDownItemGapUnits?.Tablet};` : ""}
                ${countDownItemWrapperBorderTypeGetTablet && countDownItemWrapperBorderTypeTablet?.top ? `border-width: ${countDownItemWrapperBorderTypeGetTablet};` : ""}
                ${countDownItemWrapperBorderRadiusGetTablet && countDownItemWrapperBorderRadiusTablet?.top ? `border-radius: ${countDownItemWrapperBorderRadiusGetTablet};` : ""}
                ${countDownItemWrapperPaddingGetTablet && countDownItemWrapperPaddingTablet?.top ? `padding: ${countDownItemWrapperPaddingGetTablet};` : ""}
                ${countDownItemWrapperMarginGetTablet && countDownItemWrapperMarginTablet?.top ? `margin: ${countDownItemWrapperMarginGetTablet};` : ""}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item {
                ${countDownItemSize?.Tablet ? `width: ${countDownItemSize?.Tablet}${countDownItemSizeUnits?.Tablet};` : ""}
                ${countDownItemSizeHeight === true && countDownItemSize?.Tablet ? `height: ${countDownItemSize?.Tablet}${countDownItemSizeUnits?.Tablet};` : ""}
                ${countDownItemBorderTypeGetTablet && countDownItemBorderTypeTablet?.top ? `border-width: ${countDownItemBorderTypeGetTablet};` : ""}
                ${countDownItemBorderRadiusGetTablet && countDownItemBorderRadiusTablet?.top ? `border-radius: ${countDownItemBorderRadiusGetTablet};` : ""}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
                ${
                    countDownSeparatorEnabled && countDownSeparatorType && countDownSeparatorType !== "null"
                        ? `
                            ${countDownSeparatorVerticalGap?.Tablet ? `top: ${countDownSeparatorVerticalGap?.Tablet}${countDownSeparatorVerticalGapUnits?.Tablet};` : ""}
                            ${countDownSeparatorHorizontalGap?.Tablet ? `right: -${countDownSeparatorHorizontalGap?.Tablet}${countDownSeparatorHorizontalGapUnits?.Tablet};` : ""}
                            ${countDownSeparatorGlobalTypoSwitcher?.fontSize === false && countDownSeparatorFontSize?.Tablet ? `font-size: ${countDownSeparatorFontSize?.Tablet}${countDownSeparatorFontSizeUnits?.Tablet};` : ""}
                            ${countDownSeparatorGlobalTypoSwitcher?.letterSpacing === false && countDownSeparatorLetterSpacing?.Tablet ? `letter-spacing: ${countDownSeparatorLetterSpacing?.Tablet}${countDownSeparatorLetterSpacingUnits?.Tablet};` : ""}
                            ${countDownSeparatorGlobalTypoSwitcher?.lineHeight === false && countDownSeparatorLineHeight?.Tablet ? `line-height: ${countDownSeparatorLineHeight?.Tablet}${countDownSeparatorLineHeightUnits?.Tablet};` : ""}
                        `
                        : ""
                }
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
                ${digitGlobalTypoSwitcher?.fontSize === false && digitFontSize?.Tablet ? `font-size: ${digitFontSize?.Tablet}${digitFontSizeUnits?.Tablet};` : ""}
                ${digitGlobalTypoSwitcher?.letterSpacing === false && digitLetterSpacing?.Tablet ? `letter-spacing: ${digitLetterSpacing?.Tablet}${digitLetterSpacingUnits?.Tablet};` : ""}
                ${digitGlobalTypoSwitcher?.lineHeight === false && digitLineHeight?.Tablet ? `line-height: ${digitLineHeight?.Tablet}${digitLineHeightUnits?.Tablet};` : ""}
                ${countDownDigitMarginGetTablet && countDownDigitMarginTablet?.top ? `margin: ${countDownDigitMarginGetTablet};` : ''}
                ${countDownDigitBorderTypeGetTablet && countDownDigitBorderTypeTablet?.top ? `border-width: ${countDownDigitBorderTypeGetTablet};` : ''}
                ${countDownDigitBorderRadiusGetTablet && countDownDigitBorderRadiusTablet?.top ? `border-radius: ${countDownDigitBorderRadiusGetTablet};` : ''}
                ${countDownDigitWidth?.Tablet ? `width: ${countDownDigitWidth?.Tablet}${countDownDigitWidthUnits?.Tablet};` : ''}
                ${countDownDigitHeight?.Tablet ? `height: ${countDownDigitHeight?.Tablet}${countDownDigitHeightUnits?.Tablet};` : ''}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
                ${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Tablet ? `font-size: ${labelFontSize?.Tablet}${labelFontSizeUnits?.Tablet};` : ""}
                ${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Tablet ? `letter-spacing: ${labelLetterSpacing?.Tablet}${labelLetterSpacingUnits?.Tablet};` : ""}
                ${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Tablet ? `line-height: ${labelLineHeight?.Tablet}${labelLineHeightUnits?.Tablet};` : ""}
                ${countDownLabelBorderTypeGetTablet && countDownLabelBorderTypeTablet?.top ? `border-width: ${countDownLabelBorderTypeGetTablet};` : ''}
                ${countDownLabelBorderRadiusGetTablet && countDownLabelBorderRadiusTablet?.top ? `border-radius: ${countDownLabelBorderRadiusGetTablet};` : ''}
                ${countDownLabelMarginGetTablet && countDownLabelMarginTablet?.top ? `margin: ${countDownLabelMarginGetTablet};` : ''}
                ${countDownLabelWidth?.Tablet ? `width: ${countDownLabelWidth?.Tablet}${countDownLabelWidthUnits?.Tablet};` : ''}
                ${countDownLabelHeight?.Tablet ? `height: ${countDownLabelHeight?.Tablet}${countDownLabelHeightUnits?.Tablet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
                .fb-count-down-main-wrapper.${blockID} {
                    ${countDownPositionType !== 'default' ? `position: ${countDownPositionType};` : ''}
                    ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'left' && countDownHZLeftOffset?.Mobile ? `left: ${countDownHZLeftOffset?.Mobile}${countDownHZLeftOffsetUnits?.Mobile};` : ''}
                    ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownHZOrientationType === 'right' && countDownHZRightOffset?.Mobile ? `right: ${countDownHZRightOffset?.Mobile}${countDownHZRightOffsetUnits?.Mobile};` : ''}
                    ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'top' && countDownVRTopOffset?.Mobile ? `top: ${countDownVRTopOffset?.Mobile}${countDownVRTopOffsetUnits?.Mobile};` : ''}
                    ${countDownPositionType !== 'default' && countDownPositionType !== 'relative' && countDownVROrientationType === 'bottom' && countDownVRBottomOffset?.Mobile ? `bottom: ${countDownVRBottomOffset?.Mobile}${countDownVRBottomOffsetUnits?.Mobile};` : ''}
                    ${countDownZIndex?.Mobile ? `z-index: ${countDownZIndex?.Mobile};` : ''}
                }
            .fb-count-down-wrapper.${blockID} {
                ${countDownLayoutType === 'grid' ? `grid-template-columns: repeat(${countDownGrid?.Mobile}, 1fr);` : ''}
                ${countDownItemGap?.Mobile ? `gap: ${countDownItemGap?.Mobile}${countDownItemGapUnits?.Mobile};` : ""}
                ${countDownItemWrapperBorderTypeGetMobile && countDownItemWrapperBorderTypeMobile?.top ? `border-width: ${countDownItemWrapperBorderTypeGetMobile};` : ""}
                ${countDownItemWrapperBorderRadiusGetMobile && countDownItemWrapperBorderRadiusMobile?.top ? `border-radius: ${countDownItemWrapperBorderRadiusGetMobile};` : ""}
                ${countDownItemWrapperPaddingGetMobile && countDownItemWrapperPaddingMobile?.top ? `padding: ${countDownItemWrapperPaddingGetMobile};` : ""}
                ${countDownItemWrapperMarginGetMobile && countDownItemWrapperMarginMobile?.top ? `margin: ${countDownItemWrapperMarginGetMobile};` : ""}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item {
                ${countDownItemSize?.Mobile ? `width: ${countDownItemSize?.Mobile}${countDownItemSizeUnits?.Mobile};` : ""}
                ${countDownItemSizeHeight === true && countDownItemSize?.Mobile ? `height: ${countDownItemSize?.Mobile}${countDownItemSizeUnits?.Mobile};` : ""}
                ${countDownItemBorderTypeGetMobile && countDownItemBorderTypeMobile?.top ? `border-width: ${countDownItemBorderTypeGetMobile};` : ""}
                ${countDownItemBorderRadiusGetMobile && countDownItemBorderRadiusMobile?.top ? `border-radius: ${countDownItemBorderRadiusGetMobile};` : ""}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item:before {
                ${
                    countDownSeparatorEnabled && countDownSeparatorType && countDownSeparatorType !== "null"
                        ? `
                            ${countDownSeparatorVerticalGap?.Mobile ? `top: ${countDownSeparatorVerticalGap?.Mobile}${countDownSeparatorVerticalGapUnits?.Mobile};` : ""}
                            ${countDownSeparatorHorizontalGap?.Mobile ? `right: -${countDownSeparatorHorizontalGap?.Mobile}${countDownSeparatorHorizontalGapUnits?.Mobile};` : ""}
                            ${countDownSeparatorGlobalTypoSwitcher?.fontSize === false && countDownSeparatorFontSize?.Mobile ? `font-size: ${countDownSeparatorFontSize?.Mobile}${countDownSeparatorFontSizeUnits?.Mobile};` : ""}
                            ${countDownSeparatorGlobalTypoSwitcher?.letterSpacing === false && countDownSeparatorLetterSpacing?.Mobile ? `letter-spacing: ${countDownSeparatorLetterSpacing?.Mobile}${countDownSeparatorLetterSpacingUnits?.Mobile};` : ""}
                            ${countDownSeparatorGlobalTypoSwitcher?.lineHeight === false && countDownSeparatorLineHeight?.Mobile ? `line-height: ${countDownSeparatorLineHeight?.Mobile}${countDownSeparatorLineHeightUnits?.Mobile};` : ""}
                        `
                        : ""
                }
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-time {
                ${digitGlobalTypoSwitcher?.fontSize === false && digitFontSize?.Mobile ? `font-size: ${digitFontSize?.Mobile}${digitFontSizeUnits?.Mobile};` : ""}
                ${digitGlobalTypoSwitcher?.letterSpacing === false && digitLetterSpacing?.Mobile ? `letter-spacing: ${digitLetterSpacing?.Mobile}${digitLetterSpacingUnits?.Mobile};` : ""}
                ${digitGlobalTypoSwitcher?.lineHeight === false && digitLineHeight?.Mobile ? `line-height: ${digitLineHeight?.Mobile}${digitLineHeightUnits?.Mobile};` : ""}
                ${countDownDigitMarginGetMobile && countDownDigitMarginMobile?.top ? `margin: ${countDownDigitMarginGetMobile};` : ''}
                ${countDownDigitBorderTypeGetMobile && countDownDigitBorderTypeMobile?.top ? `border-width: ${countDownDigitBorderTypeGetMobile};` : ''}
                ${countDownDigitBorderRadiusGetMobile && countDownDigitBorderRadiusMobile?.top ? `border-radius: ${countDownDigitBorderRadiusGetMobile};` : ''}
                ${countDownDigitWidth?.Mobile ? `width: ${countDownDigitWidth?.Mobile}${countDownDigitWidthUnits?.Mobile};` : ''}
                ${countDownDigitHeight?.Mobile ? `height: ${countDownDigitHeight?.Mobile}${countDownDigitHeightUnits?.Mobile};` : ''}
            }
            .fb-count-down-wrapper.${blockID} .fb-count-down-item .fb-count-down-label {
                ${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Mobile ? `font-size: ${labelFontSize?.Mobile}${labelFontSizeUnits?.Mobile};` : ""}
                ${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Mobile ? `letter-spacing: ${labelLetterSpacing?.Mobile}${labelLetterSpacingUnits?.Mobile};` : ""}
                ${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Mobile ? `line-height: ${labelLineHeight?.Mobile}${labelLineHeightUnits?.Mobile};` : ""}
                ${countDownLabelBorderTypeGetMobile && countDownLabelBorderTypeMobile?.top ? `border-width: ${countDownLabelBorderTypeGetMobile};` : ''}
                ${countDownLabelBorderRadiusGetMobile && countDownLabelBorderRadiusMobile?.top ? `border-radius: ${countDownLabelBorderRadiusGetMobile};` : ''}
                ${countDownLabelMarginGetMobile && countDownLabelMarginMobile?.top ? `margin: ${countDownLabelMarginGetMobile};` : ''}
                ${countDownLabelWidth?.Mobile ? `width: ${countDownLabelWidth?.Mobile}${countDownLabelWidthUnits?.Mobile};` : ''}
                ${countDownLabelHeight?.Mobile ? `height: ${countDownLabelHeight?.Mobile}${countDownLabelHeightUnits?.Mobile};` : ''}
            }
        }

    `;

    const customCss = getCustomCss(countDownGlobalWraperCustomCSS, `.${blockID}`);
    return `${countDownStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateCountdownStyle