import getCustomCss from "@Utils/getCustomCss";

const generateCountdownStyle = (attributes) => {
	const {
		blockID,
		advancedCountdownPresetStyle,

		// Basic
		advancedCountdownUntilText,
		advancedCountdownShowSunIcon,
		advancedCountdownSunIcon,
		advancedCountdownStartDate,
		advancedCountdownTargetDate,

		// Container & Sizing
		advancedCountdownContainerSize,
		advancedCountdownSvgProgressSize,
		advancedCountdownStyle2ProgressBarSize,
		advancedCountdownContainerSizeStyle3,
		advancedCountdownContainerSizeStyle3Inner,
		advancedCountdownContainerSizeStyle5,
		advancedCountdownLayoutAlignment,

		// Background
		advancedCountdownGlobalBackgroundType,
		advancedCountdownGlobalClassicColor,
		advancedCountdownGlobalGradientColor,
		advancedCountdownGlobalCustomGradientSwitcher,
		advancedCountdownGlobalCustomGradientInputValue,
		advancedCountdownGlobalBackgroundImageUrl,
		advancedCountdownGlobalBackgroundImagePosition,
		advancedCountdownGlobalBackgroundImageAttachment,
		advancedCountdownGlobalBackgroundImageSize,
		advancedCountdownGlobalBackgroundImageRepeat,

		advancedCountdownHoverBackgroundType,
		advancedCountdownHoverClassicColor,
		advancedCountdownHoverGradientColor,
		advancedCountdownHoverCustomGradientSwitcher,
		advancedCountdownHoverCustomGradientInputValue,
		advancedCountdownHoverBackgroundImageUrl,
		advancedCountdownHoverBackgroundImagePosition,
		advancedCountdownHoverBackgroundImageAttachment,
		advancedCountdownHoverBackgroundImageSize,
		advancedCountdownHoverBackgroundImageRepeat,

		// Border & Transition
		advancedCountdownItemWrapperBorder,
		advancedCountdownItemWrapperBorderColor,
		advancedCountdownItemWrapperBorderHoverColor,
		advancedCountdownItemWrapperBorderTypeUnits,
		advancedCountdownItemWrapperBorderTypeDesktop,
		advancedCountdownItemWrapperBorderTypeTablet,
		advancedCountdownItemWrapperBorderTypeMobile,
		advancedCountdownItemWrapperBorderRadiusUnits,
		advancedCountdownItemWrapperBorderRadiusDesktop,
		advancedCountdownItemWrapperBorderRadiusTablet,
		advancedCountdownItemWrapperBorderRadiusMobile,
		advancedCountdownItemWrapperPaddingUnits,
		advancedCountdownItemWrapperPaddingDesktop,
		advancedCountdownItemWrapperPaddingTablet,
		advancedCountdownItemWrapperPaddingMobile,
		advancedCountdownItemWrapperMarginUnits,
		advancedCountdownItemWrapperMarginDesktop,
		advancedCountdownItemWrapperMarginTablet,
		advancedCountdownItemWrapperMarginMobile,

		advancedCountdownContainerHoverTransition,
		advancedCountdownBorderHoverColor,
		advancedCountdownBorderHoverTransition,

		// Style Specific
		advancedCountdownStyle2ProgressBarColor,
		advancedCountdownStyle2DashCount,
		advancedCountdownStyle3ContainerBg,
		advancedCountdownStyle3TimeboxBg,
		advancedCountdownStyle3IndicatorColor,
		advancedCountdownStyle3IndicatorTextColor,
		advancedCountdownStyle3TimeGap,
		advancedCountdownStyle3DashHighlight,
		advancedCountdownStyle4DashGap,
		advancedCountdownStyle4DashColor,
		advancedCountdownStyle4DashSize,
		advancedCountdownStyle4LabelAlignment,

		// Style 5 Dots
		advancedCountdownStyle4DaysTotalDots,
		advancedCountdownStyle4HoursTotalDots,
		advancedCountdownStyle4MinutesTotalDots,
		advancedCountdownStyle4ActiveDotColor,
		advancedCountdownStyle4InactiveDotColor,
		advancedCountdownStyle4DotsThickness,
		advancedCountdownStyle4DotsGap,
		advancedCountdownStyle4DotsGlowEffect,
		advancedCountdownStyle4GlowIntensity,
		advancedCountdownStyle4GlowColor,

		// Typography & Colors
		advancedCountdownStyle5LabelColorMultiple,
		advancedCountdownStyle5TimeValLabelColor,

		advancedCountdownStyle5CountdownTypoGlobalTypoSwitcher,
		advancedCountdownStyle5CountdownTypoGlobalTypographyData,
		advancedCountdownStyle5CountdownTypoFontFamily,
		advancedCountdownStyle5CountdownTypoFontSize,
		advancedCountdownStyle5CountdownTypoFontSizeUnits,
		advancedCountdownStyle5CountdownTypoFontWeight,
		advancedCountdownStyle5CountdownTypoFontStyle,
		advancedCountdownStyle5CountdownTypoTextTransform,
		advancedCountdownStyle5CountdownTypoTextDecoration,
		advancedCountdownStyle5CountdownTypoLetterSpacing,
		advancedCountdownStyle5CountdownTypoLetterSpacingUnits,
		advancedCountdownStyle5CountdownTypoLineHeight,
		advancedCountdownStyle5CountdownTypoLineHeightUnits,

		advancedCountdownStyle5TimeValTypoGlobalTypoSwitcher,
		advancedCountdownStyle5TimeValTypoGlobalTypographyData,
		advancedCountdownStyle5TimeValTypoFontFamily,
		advancedCountdownStyle5TimeValTypoFontSize,
		advancedCountdownStyle5TimeValTypoFontSizeUnits,
		advancedCountdownStyle5TimeValTypoFontWeight,
		advancedCountdownStyle5TimeValTypoFontStyle,
		advancedCountdownStyle5TimeValTypoTextTransform,
		advancedCountdownStyle5TimeValTypoTextDecoration,
		advancedCountdownStyle5TimeValTypoLetterSpacing,
		advancedCountdownStyle5TimeValTypoLetterSpacingUnits,
		advancedCountdownStyle5TimeValTypoLineHeight,
		advancedCountdownStyle5TimeValTypoLineHeightUnits,

		advancedCountdownSeparatorTypoGlobalTypoSwitcher,
		advancedCountdownSeparatorTypoGlobalTypographyData,
		advancedCountdownSeparatorTypoFontFamily,
		advancedCountdownSeparatorTypoFontSize,
		advancedCountdownSeparatorTypoFontSizeUnits,
		advancedCountdownSeparatorTypoFontWeight,
		advancedCountdownSeparatorTypoFontStyle,
		advancedCountdownSeparatorTypoTextTransform,
		advancedCountdownSeparatorTypoTextDecoration,
		advancedCountdownSeparatorTypoLetterSpacing,
		advancedCountdownSeparatorTypoLetterSpacingUnits,
		advancedCountdownSeparatorTypoLineHeight,
		advancedCountdownSeparatorTypoLineHeightUnits,
		advancedCountdownSeparatorColor,
		advancedCountdownSeparatorHoverColor,
		advancedCountdownSeparatorSpacing,

		// Style 1
		advancedCountdownStyle1SvgBgOverlayColor,
		advancedCountdownStyle1SvgBgOverlayOpacity,
		advancedCountdownStyle1ProgressCircleActiveColor,
		advancedCountdownStyle1ProgressCircleInactiveColor,
		advancedCountdownStyle1SvgStrokeWidth,

		// Style 2
		advancedCountdownStyle2ProgressColor,
		advancedCountdownStyle2SvgStrokeWidth,
		advancedCountdownStyle2TextColor,

		// Style 3
		advancedCountdownStyle3TextColor,

		// Icon
		advancedCountdownIconSize,
		advancedCountdownIconColorNormal,
		advancedCountdownIconBgColorNormal,
		advancedCountdownIconColorHover,
		advancedCountdownIconBgColorHover,

		// Footer
		advancedCountdownFooterTypoGlobalTypoSwitcher,
		advancedCountdownFooterTypoGlobalTypographyData,
		advancedCountdownFooterTypoFontFamily,
		advancedCountdownFooterTypoFontSize,
		advancedCountdownFooterTypoFontSizeUnits,
		advancedCountdownFooterTypoFontWeight,
		advancedCountdownFooterTypoFontStyle,
		advancedCountdownFooterTypoTextTransform,
		advancedCountdownFooterTypoTextDecoration,
		advancedCountdownFooterTypoLetterSpacing,
		advancedCountdownFooterTypoLetterSpacingUnits,
		advancedCountdownFooterTypoLineHeight,
		advancedCountdownFooterTypoLineHeightUnits,
		advancedCountdownFooterTextColor,
		advancedCountdownFooterBgColor,
		advancedCountdownFooterTextColorHover,
		advancedCountdownFooterBgColorHover,
		advancedCountdownFooterBgCustomStyle2,
		advancedCountdownFooterPadding,
		advancedCountdownFooterMargin,

		// Advanced
		advancedCountdownCustomCSS,
		advancedCountdownZIndex,
		advancedCountdownOverflow,
		advancedCountdownPositionType,
		advancedCountdownHZOrientationType,
		advancedCountdownVROrientationType,
		advancedCountdownHZLeftOffset,
		advancedCountdownHZLeftOffsetUnits,
		advancedCountdownHZRightOffset,
		advancedCountdownHZRightOffsetUnits,
		advancedCountdownVRTopOffset,
		advancedCountdownVRTopOffsetUnits,
		advancedCountdownVRBottomOffset,
		advancedCountdownVRBottomOffsetUnits,
	} = attributes;

	/* Item Wrapper Spacing */
	const advancedCountdownItemWrapperBorderTypeGetDesktop = `${advancedCountdownItemWrapperBorderTypeDesktop?.top}${advancedCountdownItemWrapperBorderTypeUnits?.Desktop} ${advancedCountdownItemWrapperBorderTypeDesktop?.right}${advancedCountdownItemWrapperBorderTypeUnits?.Desktop} ${advancedCountdownItemWrapperBorderTypeDesktop?.bottom}${advancedCountdownItemWrapperBorderTypeUnits?.Desktop} ${advancedCountdownItemWrapperBorderTypeDesktop?.left}${advancedCountdownItemWrapperBorderTypeUnits?.Desktop}`;
	const advancedCountdownItemWrapperBorderTypeGetTablet = `${advancedCountdownItemWrapperBorderTypeTablet?.top}${advancedCountdownItemWrapperBorderTypeUnits?.Tablet} ${advancedCountdownItemWrapperBorderTypeTablet?.right}${advancedCountdownItemWrapperBorderTypeUnits?.Tablet} ${advancedCountdownItemWrapperBorderTypeTablet?.bottom}${advancedCountdownItemWrapperBorderTypeUnits?.Tablet} ${advancedCountdownItemWrapperBorderTypeTablet?.left}${advancedCountdownItemWrapperBorderTypeUnits?.Tablet}`;
	const advancedCountdownItemWrapperBorderTypeGetMobile = `${advancedCountdownItemWrapperBorderTypeMobile?.top}${advancedCountdownItemWrapperBorderTypeUnits?.Mobile} ${advancedCountdownItemWrapperBorderTypeMobile?.right}${advancedCountdownItemWrapperBorderTypeUnits?.Mobile} ${advancedCountdownItemWrapperBorderTypeMobile?.bottom}${advancedCountdownItemWrapperBorderTypeUnits?.Mobile} ${advancedCountdownItemWrapperBorderTypeMobile?.left}${advancedCountdownItemWrapperBorderTypeUnits?.Mobile}`;

	const advancedCountdownItemWrapperBorderRadiusGetDesktop = `${advancedCountdownItemWrapperBorderRadiusDesktop?.top}${advancedCountdownItemWrapperBorderRadiusUnits?.Desktop} ${advancedCountdownItemWrapperBorderRadiusDesktop?.right}${advancedCountdownItemWrapperBorderRadiusUnits?.Desktop} ${advancedCountdownItemWrapperBorderRadiusDesktop?.bottom}${advancedCountdownItemWrapperBorderRadiusUnits?.Desktop} ${advancedCountdownItemWrapperBorderRadiusDesktop?.left}${advancedCountdownItemWrapperBorderRadiusUnits?.Desktop}`;
	const advancedCountdownItemWrapperBorderRadiusGetTablet = `${advancedCountdownItemWrapperBorderRadiusTablet?.top}${advancedCountdownItemWrapperBorderRadiusUnits?.Tablet} ${advancedCountdownItemWrapperBorderRadiusTablet?.right}${advancedCountdownItemWrapperBorderRadiusUnits?.Tablet} ${advancedCountdownItemWrapperBorderRadiusTablet?.bottom}${advancedCountdownItemWrapperBorderRadiusUnits?.Tablet} ${advancedCountdownItemWrapperBorderRadiusTablet?.left}${advancedCountdownItemWrapperBorderRadiusUnits?.Tablet}`;
	const advancedCountdownItemWrapperBorderRadiusGetMobile = `${advancedCountdownItemWrapperBorderRadiusMobile?.top}${advancedCountdownItemWrapperBorderRadiusUnits?.Mobile} ${advancedCountdownItemWrapperBorderRadiusMobile?.right}${advancedCountdownItemWrapperBorderRadiusUnits?.Mobile} ${advancedCountdownItemWrapperBorderRadiusMobile?.bottom}${advancedCountdownItemWrapperBorderRadiusUnits?.Mobile} ${advancedCountdownItemWrapperBorderRadiusMobile?.left}${advancedCountdownItemWrapperBorderRadiusUnits?.Mobile}`;

	const advancedCountdownItemWrapperPaddingGetDesktop = `${advancedCountdownItemWrapperPaddingDesktop?.top}${advancedCountdownItemWrapperPaddingUnits?.Desktop} ${advancedCountdownItemWrapperPaddingDesktop?.right}${advancedCountdownItemWrapperPaddingUnits?.Desktop} ${advancedCountdownItemWrapperPaddingDesktop?.bottom}${advancedCountdownItemWrapperPaddingUnits?.Desktop} ${advancedCountdownItemWrapperPaddingDesktop?.left}${advancedCountdownItemWrapperPaddingUnits?.Desktop}`;
	const advancedCountdownItemWrapperPaddingGetTablet = `${advancedCountdownItemWrapperPaddingTablet?.top}${advancedCountdownItemWrapperPaddingUnits?.Tablet} ${advancedCountdownItemWrapperPaddingTablet?.right}${advancedCountdownItemWrapperPaddingUnits?.Tablet} ${advancedCountdownItemWrapperPaddingTablet?.bottom}${advancedCountdownItemWrapperPaddingUnits?.Tablet} ${advancedCountdownItemWrapperPaddingTablet?.left}${advancedCountdownItemWrapperPaddingUnits?.Tablet}`;
	const advancedCountdownItemWrapperPaddingGetMobile = `${advancedCountdownItemWrapperPaddingMobile?.top}${advancedCountdownItemWrapperPaddingUnits?.Mobile} ${advancedCountdownItemWrapperPaddingMobile?.right}${advancedCountdownItemWrapperPaddingUnits?.Mobile} ${advancedCountdownItemWrapperPaddingMobile?.bottom}${advancedCountdownItemWrapperPaddingUnits?.Mobile} ${advancedCountdownItemWrapperPaddingMobile?.left}${advancedCountdownItemWrapperPaddingUnits?.Mobile}`;

	const advancedCountdownItemWrapperMarginGetDesktop = `${advancedCountdownItemWrapperMarginDesktop?.top}${advancedCountdownItemWrapperMarginUnits?.Desktop} ${advancedCountdownItemWrapperMarginDesktop?.right}${advancedCountdownItemWrapperMarginUnits?.Desktop} ${advancedCountdownItemWrapperMarginDesktop?.bottom}${advancedCountdownItemWrapperMarginUnits?.Desktop} ${advancedCountdownItemWrapperMarginDesktop?.left}${advancedCountdownItemWrapperMarginUnits?.Desktop}`;
	const advancedCountdownItemWrapperMarginGetTablet = `${advancedCountdownItemWrapperMarginTablet?.top}${advancedCountdownItemWrapperMarginUnits?.Tablet} ${advancedCountdownItemWrapperMarginTablet?.right}${advancedCountdownItemWrapperMarginUnits?.Tablet} ${advancedCountdownItemWrapperMarginTablet?.bottom}${advancedCountdownItemWrapperMarginUnits?.Tablet} ${advancedCountdownItemWrapperMarginTablet?.left}${advancedCountdownItemWrapperMarginUnits?.Tablet}`;
	const advancedCountdownItemWrapperMarginGetMobile = `${advancedCountdownItemWrapperMarginMobile?.top}${advancedCountdownItemWrapperMarginUnits?.Mobile} ${advancedCountdownItemWrapperMarginMobile?.right}${advancedCountdownItemWrapperMarginUnits?.Mobile} ${advancedCountdownItemWrapperMarginMobile?.bottom}${advancedCountdownItemWrapperMarginUnits?.Mobile} ${advancedCountdownItemWrapperMarginMobile?.left}${advancedCountdownItemWrapperMarginUnits?.Mobile}`;

	const countDownStyle = `
		.fb-advanced-countdown-main-wrapper.${blockID} {
			${advancedCountdownPositionType === "default" ? `position: relative;` : ''}
			${advancedCountdownPositionType !== "default" && advancedCountdownPositionType !== "relative" ? `width: 100%;` : ''}
			${advancedCountdownPositionType !== "default" ? `position: ${advancedCountdownPositionType};` : ''}
			${advancedCountdownPositionType !== "default" && advancedCountdownPositionType !== "relative" && advancedCountdownHZOrientationType === "left" && advancedCountdownHZLeftOffset?.Desktop ? `left: ${advancedCountdownHZLeftOffset?.Desktop}${advancedCountdownHZLeftOffsetUnits?.Desktop};` : ''}
			${advancedCountdownPositionType !== "default" && advancedCountdownPositionType !== "relative" && advancedCountdownHZOrientationType === "right" && advancedCountdownHZRightOffset?.Desktop ? `right: ${advancedCountdownHZRightOffset?.Desktop}${advancedCountdownHZRightOffsetUnits?.Desktop};` : ''}
			${advancedCountdownPositionType !== "default" && advancedCountdownPositionType !== "relative" && advancedCountdownVROrientationType === "top" && advancedCountdownVRTopOffset?.Desktop ? `top: ${advancedCountdownVRTopOffset?.Desktop}${advancedCountdownVRTopOffsetUnits?.Desktop};` : ''}
			${advancedCountdownPositionType !== "default" && advancedCountdownPositionType !== "relative" && advancedCountdownVROrientationType === "bottom" && advancedCountdownVRBottomOffset?.Desktop ? `bottom: ${advancedCountdownVRBottomOffset?.Desktop}${advancedCountdownVRBottomOffsetUnits?.Desktop};` : ''}
			${advancedCountdownZIndex?.Desktop ? `z-index: ${advancedCountdownZIndex?.Desktop};` : ''}
			${advancedCountdownOverflow !== "default" ? `overflow: ${advancedCountdownOverflow};` : ''}
		}

		.fb-advanced-countdown-wrapper.${blockID} {
			${advancedCountdownLayoutAlignment ? `justify-content: ${advancedCountdownLayoutAlignment};` : ''}
			${(advancedCountdownPresetStyle === "style-1" || advancedCountdownPresetStyle === "style-2" || advancedCountdownPresetStyle === "style-4") && advancedCountdownContainerSize?.Desktop ? `width: ${advancedCountdownContainerSize?.Desktop}${advancedCountdownContainerSize?.unit};` : ''}
			${advancedCountdownPresetStyle === "style-3" && advancedCountdownContainerSizeStyle3?.Desktop ? `width: ${advancedCountdownContainerSizeStyle3?.Desktop}${advancedCountdownContainerSizeStyle3?.unit}; height: ${advancedCountdownContainerSizeStyle3?.Desktop}${advancedCountdownContainerSizeStyle3?.unit};` : ''}
			${advancedCountdownPresetStyle === "style-5" && advancedCountdownContainerSizeStyle5?.Desktop ? `width: ${advancedCountdownContainerSizeStyle5?.Desktop}${advancedCountdownContainerSizeStyle5?.unit}; height: ${advancedCountdownContainerSizeStyle5?.Desktop}${advancedCountdownContainerSizeStyle5?.unit} !important;` : ''}
			${advancedCountdownItemWrapperBorder ? `border: ${advancedCountdownItemWrapperBorder};` : ''}
			${advancedCountdownItemWrapperBorderTypeGetDesktop && advancedCountdownItemWrapperBorderTypeDesktop?.top ? `border-width: ${advancedCountdownItemWrapperBorderTypeGetDesktop};` : ''}
			${advancedCountdownItemWrapperBorderRadiusGetDesktop && advancedCountdownItemWrapperBorderRadiusDesktop?.top ? `border-radius: ${advancedCountdownItemWrapperBorderRadiusGetDesktop};` : ''}
			${advancedCountdownItemWrapperBorderColor ? `border-color: ${advancedCountdownItemWrapperBorderColor};` : ''}
			${advancedCountdownItemWrapperPaddingGetDesktop && advancedCountdownItemWrapperPaddingDesktop?.top ? `padding: ${advancedCountdownItemWrapperPaddingGetDesktop};` : ''}
			${advancedCountdownItemWrapperMarginGetDesktop && advancedCountdownItemWrapperMarginDesktop?.top ? `margin: ${advancedCountdownItemWrapperMarginGetDesktop};` : ''}
			transition: all ${advancedCountdownContainerHoverTransition?.Desktop || 0.4}s ease-in-out;
		}

		.fb-advanced-countdown-wrapper.${blockID}:hover {
			${advancedCountdownBorderHoverColor ? `border-color: ${advancedCountdownBorderHoverColor} !important;` : ''}
			transition: all ${advancedCountdownBorderHoverTransition?.Desktop || 0.35}s ease-in-out;
		}

		/* Background */
		.fb-advanced-countdown-wrapper.${blockID} {
			${advancedCountdownGlobalBackgroundType === "gradient" 
				? advancedCountdownGlobalCustomGradientSwitcher && advancedCountdownGlobalCustomGradientInputValue 
					? `background: ${advancedCountdownGlobalCustomGradientInputValue};` 
					: `background: ${advancedCountdownGlobalGradientColor || advancedCountdownGlobalClassicColor};`
				: advancedCountdownGlobalBackgroundImageUrl 
					? `background-image: url(${advancedCountdownGlobalBackgroundImageUrl}); background-position: ${advancedCountdownGlobalBackgroundImagePosition}; background-attachment: ${advancedCountdownGlobalBackgroundImageAttachment}; background-size: ${advancedCountdownGlobalBackgroundImageSize}; background-repeat: ${advancedCountdownGlobalBackgroundImageRepeat};`
					: `background: ${advancedCountdownGlobalClassicColor};`
			}
		}

		/* More specific styles can be added here as needed */

		@media only screen and (max-width: 1024px) {
			.fb-advanced-countdown-wrapper.${blockID} {
				${advancedCountdownContainerSize?.Tablet ? `width: ${advancedCountdownContainerSize?.Tablet}${advancedCountdownContainerSize?.unit};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-advanced-countdown-wrapper.${blockID} {
				${advancedCountdownContainerSize?.Mobile ? `width: ${advancedCountdownContainerSize?.Mobile}${advancedCountdownContainerSize?.unit};` : ''}
			}
		}
	`;

	const customCss = getCustomCss(advancedCountdownCustomCSS, `.${blockID}`);
	return `${countDownStyle} ${customCss}`.replace(/\s+/g, " ").trim();
};

export default generateCountdownStyle;