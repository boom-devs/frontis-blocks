/**
 * Returns Dynamic Generated CSS
 */

import generateBackgroundCSS from '@Config/generateBackgroundCSS';
import generateBorderCSS from '@Config/generateBorderCSS';
import generateCSS from '@Config/generateCSS';
import generateCSSUnit from '@Config/generateCSSUnit';
import { getFallbackNumber } from '@Config/getAttributeFallback';
import gridCssObject from '@Config/gridCssCreator';
import backgroundCss from './backgroundCss';

function frontEndStyle(attributes, clientId, name, deviceType, gbsSelector = false) {
	const blockName = name.replace('frotins-blocks/', '');
	let {
		directionDesktop,
		directionTablet,
		directionMobile,
		alignContentDesktop,
		alignContentTablet,
		alignContentMobile,
		backgroundType,
		backgroundImageDesktop,
		backgroundColor,
		backgroundPositionDesktop,
		backgroundAttachmentDesktop,
		backgroundRepeatDesktop,
		backgroundSizeDesktop,
		gradientValue,
		containerBorderHColor,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		boxShadowColorHover,
		boxShadowHOffsetHover,
		boxShadowVOffsetHover,
		boxShadowBlurHover,
		boxShadowSpreadHover,
		boxShadowPositionHover,

		topPaddingDesktop,
		bottomPaddingDesktop,
		leftPaddingDesktop,
		rightPaddingDesktop,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		topMarginDesktop,
		bottomMarginDesktop,
		leftMarginDesktop,
		rightMarginDesktop,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		rowGapTablet,
		rowGapMobile,
		rowGapType,
		rowGapTypeTablet,
		rowGapTypeMobile,
		columnGapTablet,
		columnGapMobile,
		columnGapType,
		columnGapTypeTablet,
		columnGapTypeMobile,
		contentWidth,
		bottomColor,
		bottomHeight,
		bottomHeightTablet,
		bottomHeightMobile,
		bottomWidth,
		topColor,
		topHeight,
		topHeightTablet,
		topHeightMobile,
		topWidth,
		backgroundCustomSizeDesktop,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		overlayOpacity,
		backgroundVideoColor,
		backgroundVideo,

		textColor,
		linkColor,
		linkHoverColor,

		overflow,
		isBlockRootParent,

		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,

		// Extracted Border Width Attributes.
		containerBorderTopWidth,
		containerBorderRightWidth,
		containerBorderBottomWidth,
		containerBorderLeftWidth,
		containerBorderTopWidthTablet,
		containerBorderRightWidthTablet,
		containerBorderBottomWidthTablet,
		containerBorderLeftWidthTablet,
		containerBorderTopWidthMobile,
		containerBorderRightWidthMobile,
		containerBorderBottomWidthMobile,
		containerBorderLeftWidthMobile,
		backgroundVideoFallbackImage,
		globalBlockStyleId,
		childrenWidthDesktop,
		childrenWidthTablet,
		childrenWidthMobile,
		// Layout grid related attributes.
		layout,
		isGridCssInParent,
		gridColumnStart,
		gridColumnEnd,
		gridRowStart,
		gridRowEnd,
		gridAlignItems,
		gridJustifyItems,
		gridColumnSpan,
		gridRowSpan,
		gridSettingType,
		gridColumnStartTablet,
		gridColumnEndTablet,
		gridRowStartTablet,
		gridRowEndTablet,
		gridColumnStartMobile,
		gridColumnEndMobile,
		gridRowStartMobile,
		gridRowEndMobile,
		gridColumnSpanTablet,
		gridRowSpanTablet,
		gridColumnSpanMobile,
		gridRowSpanMobile,
		gridAlignItemsTablet,
		gridJustifyItemsTablet,
		gridAlignItemsMobile,
		gridJustifyItemsMobile,
		orderDesktop,
		orderTablet,
		orderMobile,
		customOrderDesktop,
		customOrderTablet,
		customOrderMobile,

		// Custom attributes from fb
		fullWidthContentBoxedWidth,
		fullWidthContentBoxedWidthUnits,
		customWidth,
		minHeight,
		minHeightUnits,
		containerType,
		containerCustomWidth,
		containerCustomWidthUnits,
		containerWrap,
		containerTypeFull,
		columnGap,
		rowGap,
		columnGapUnits,
		rowGapUnits,
		containerPaddingUnits,
		containerDesktopPadding,
		containerTabletPadding,
		containerMobilePadding,
		containerMarginUnits,
		containerDesktopMargin,
		containerTabletMargin,
		containerMobileMargin,
		customWidthUnits,
		containerAlignItems,
		containerDirection,
		containerJustify,
		// Position
		containerZIndex,
		containerOverflow,
		containerPositionType,
		containerHZOrientationType,
		containerVROrientationType,
		containerHZLeftOffset,
		containerHZLeftOffsetUnits,
		containerHZRightOffset,
		containerHZRightOffsetUnits,
		containerVRTopOffset,
		containerVRTopOffsetUnits,
		containerVRBottomOffset,
		containerVRBottomOffsetUnits,

		containerBorder,
		containerBorderColor,
		containerBorderHoverColor,
		containerBorderColorSwitcher,
		containerBorderUnits,
		containerDesktopBorderWidth,
		containerTabBorderWidth,
		containerMobileBorderWidth,
		containerBorderLink,
		containerBorderRadiusUnits,
		containerDesktopBorderRadiusWidth,
		containerTabBorderRadiusWidth,
		containerMobileBorderRadiusWidth,
		containerBorderRadiusLink,

		containerGlobalBoxShadowSwitcher,
		containerGlobalBoxShadowValues,
		containerGlobalBoxShadowCssValue,
		containerGlobalHoverBoxShadowValues,
		containerGlobalHoverBoxShadowCssValue,

		/** Normal Bg */
		containerBgColorSwitcher,
		containerBgNormalBackgroundType,
		containerBgNormalClassicColor,
		containerBgNormalGradientColor,
		containerBgNormalCustomGradientSwitcher,
		containerBgNormalCustomGradientInputValue,
		containerBgNormalBackgroundImageUrl,
		containerBgNormalBackgroundImagePosition,
		containerBgNormalBackgroundImageAttachment,
		containerBgNormalBackgroundImageRepeat,
		containerBgNormalBackgroundImageSize,

		/** Hover Bg */
		containerBgHoverBackgroundType,
		containerBgHoverClassicColor,
		containerBgHoverGradientColor,
		containerBgHoverCustomGradientSwitcher,
		containerBgHoverCustomGradientInputValue,
		containerBgHoverBackgroundImageUrl,
		containerBgHoverBackgroundImagePosition,
		containerBgHoverBackgroundImageAttachment,
		containerBgHoverBackgroundImageRepeat,
		containerBgHoverBackgroundImageSize,

		/** Overlay for fb container */
		containerBgOverlaySwitcher,
		containerBgOverlayOpacity,

		/** Normal Bg Overlay for fb container */
		containerBgOverlayColorSwitcher,
		containerBgOverlayNormalBackgroundType,
		containerBgOverlayNormalClassicColor,
		containerBgOverlayNormalGradientColor,
		containerBgOverlayNormalCustomGradientSwitcher,
		containerBgOverlayNormalCustomGradientInputValue,
		containerBgOverlayNormalBackgroundImageUrl,
		containerBgOverlayNormalBackgroundImagePosition,
		containerBgOverlayNormalBackgroundImageAttachment,
		containerBgOverlayNormalBackgroundImageRepeat,
		containerBgOverlayNormalBackgroundImageSize,

		/** Hover Bg overaly for fb container */
		containerBgOverlayHoverBackgroundType,
		containerBgOverlayHoverClassicColor,
		containerBgOverlayHoverGradientColor,
		containerBgOverlayHoverCustomGradientSwitcher,
		containerBgOverlayHoverCustomGradientInputValue,
		containerBgOverlayHoverBackgroundImageUrl,
		containerBgOverlayHoverBackgroundImagePosition,
		containerBgOverlayHoverBackgroundImageAttachment,
		containerBgOverlayHoverBackgroundImageRepeat,
		containerBgOverlayHoverBackgroundImageSize,

		containerGlobalCustomCSSValue,

	} = attributes;

	// Background Image CSS is now added here as well so that we can generate CSS for the psuedo-element.
	const getContainerBGStyle = backgroundCss(attributes, deviceType, clientId, { 'hasPseudo': true, 'forStyleSheet': true });

	const isLayoutGrid = 'grid' === layout;

	const innerContentCustomWidthDesktopFallback = getFallbackNumber(
		fullWidthContentBoxedWidth['Desktop'],
		'innerContentCustomWidthDesktop',
		blockName
	);

	const innerContentCustomWidthTabletFallback = getFallbackNumber(
		fullWidthContentBoxedWidth['Tablet'],
		'innerContentCustomWidthTablet',
		blockName
	);

	const innerContentCustomWidthMobileFallback = getFallbackNumber(
		fullWidthContentBoxedWidth['Mobile'],
		'innerContentCustomWidthMobile',
		blockName
	);

	const widthDesktopFallback = getFallbackNumber(customWidth['Desktop'], 'customWidth', blockName);
	const widthTabletFallback = getFallbackNumber(customWidth['Tablet'], 'customWidth', blockName);
	const widthMobileFallback = getFallbackNumber(customWidth['Mobile'], 'customWidth', blockName);

	const rowGapDesktopFallback = getFallbackNumber(rowGap['Desktop'], 'rowGapDesktop', blockName);
	const columnGapDesktopFallback = getFallbackNumber(columnGap['Desktop'], 'columnGapDesktop', blockName);
	const rowGapTabletFallback = getFallbackNumber(rowGap['Tablet'], 'rowGapTablet', blockName);
	const columnGapTabletFallback = getFallbackNumber(columnGap['Tablet'], 'columnGapTablet', blockName);
	const rowGapMobileFallback = getFallbackNumber(rowGap['Mobile'], 'rowGapMobile', blockName);
	const columnGapMobileFallback = getFallbackNumber(columnGap['Mobile'], 'columnGapMobile', blockName);

	const borderCSS = generateBorderCSS(attributes, 'container');
	const borderCSSTablet = generateBorderCSS(attributes, 'container', 'tablet');
	const borderCSSMobile = generateBorderCSS(attributes, 'container', 'mobile');

	// If there's no border-color, set it to inherit.
	if (!borderCSS['border-color']) {
		borderCSS['border-color'] = 'inherit';
	}

	topPaddingTablet = 'undefined' !== typeof topPaddingTablet ? topPaddingTablet : topPaddingDesktop;
	topPaddingMobile = 'undefined' !== typeof topPaddingMobile ? topPaddingMobile : topPaddingTablet;

	bottomPaddingTablet = 'undefined' !== typeof bottomPaddingTablet ? bottomPaddingTablet : bottomPaddingDesktop;
	bottomPaddingMobile = 'undefined' !== typeof bottomPaddingMobile ? bottomPaddingMobile : bottomPaddingTablet;

	leftPaddingTablet = 'undefined' !== typeof leftPaddingTablet ? leftPaddingTablet : leftPaddingDesktop;
	leftPaddingMobile = 'undefined' !== typeof leftPaddingMobile ? leftPaddingMobile : leftPaddingTablet;

	rightPaddingTablet = 'undefined' !== typeof rightPaddingTablet ? rightPaddingTablet : rightPaddingDesktop;
	rightPaddingMobile = 'undefined' !== typeof rightPaddingMobile ? rightPaddingMobile : rightPaddingTablet;

	topMarginTablet = 'undefined' !== typeof topMarginTablet ? topMarginTablet : topMarginDesktop;
	topMarginMobile = 'undefined' !== typeof topMarginMobile ? topMarginMobile : topMarginTablet;

	bottomMarginTablet = 'undefined' !== typeof bottomMarginTablet ? bottomMarginTablet : bottomMarginDesktop;
	bottomMarginMobile = 'undefined' !== typeof bottomMarginMobile ? bottomMarginMobile : bottomMarginTablet;

	leftMarginTablet = 'undefined' !== typeof leftMarginTablet ? leftMarginTablet : leftMarginDesktop;
	leftMarginMobile = 'undefined' !== typeof leftMarginMobile ? leftMarginMobile : leftMarginTablet;

	rightMarginTablet = 'undefined' !== typeof rightMarginTablet ? rightMarginTablet : rightMarginDesktop;
	rightMarginMobile = 'undefined' !== typeof rightMarginMobile ? rightMarginMobile : rightMarginTablet;

	orderTablet = 'initial' !== orderTablet ? orderTablet : orderDesktop;
	orderMobile = 'initial' !== orderMobile ? orderMobile : orderTablet;

	customOrderTablet = 'undefined' !== typeof customOrderTablet ? customOrderTablet : customOrderDesktop;
	customOrderMobile = 'undefined' !== typeof customOrderMobile ? customOrderMobile : customOrderTablet;

	const innerLeftMarginDesktop = leftMarginDesktop;
	const innerRightMarginDesktop = rightMarginDesktop;
	const innerLeftMarginTablet = leftMarginTablet;
	const innerRightMarginTablet = rightMarginTablet;
	const innerLeftMarginMobile = leftMarginMobile;
	const innerRightMarginMobile = rightMarginMobile;

	if ('alignfull' === contentWidth || 'alignwide' === contentWidth) {
		leftMarginDesktop = rightMarginDesktop = leftMarginTablet = rightMarginTablet = leftMarginMobile = rightMarginMobile = '';
	}

	const containerFullWidth = '100vw';

	const backgroundVideoOpacityValue =
		'number' === typeof overlayOpacity &&
			'none' !== overlayType &&
			(('color' === overlayType && backgroundVideoColor) || ('gradient' === overlayType && gradientValue))
			? 1 - overlayOpacity
			: 1;

	const videoBackgroundAttributes = {
		'backgroundType': backgroundType,
		'backgroundImage': backgroundImageDesktop,
		'backgroundColor': backgroundColor,
		'gradientValue': gradientValue,
		'gradientColor1': gradientColor1,
		'gradientColor2': gradientColor2,
		'gradientLocation1': gradientLocation1,
		'gradientLocation2': gradientLocation2,
		'gradientType': gradientType,
		'gradientAngle': gradientAngle,
		'selectGradient': selectGradient,
		'backgroundRepeat': backgroundRepeatDesktop,
		'backgroundPosition': backgroundPositionDesktop,
		'backgroundSize': backgroundSizeDesktop,
		'backgroundAttachment': backgroundAttachmentDesktop,
		'backgroundCustomSize': backgroundCustomSizeDesktop,
		'backgroundCustomSizeType': backgroundCustomSizeType,
		'backgroundImageColor': backgroundImageColor,
		'overlayType': overlayType,
		'backgroundVideo': backgroundVideo,
		'backgroundVideoColor': backgroundVideoColor,
	};

	const videoBackgroundCSS = generateBackgroundCSS(videoBackgroundAttributes);

	const selectors = {
		'.wp-block-frontis-blocks-container .block-editor-block-list__block': {
			'color': textColor,
		},
		'.wp-block-frontis-blocks-container *': {
			'color': textColor,
		},
		'.wp-block-frontis-blocks-container .block-editor-block-list__block a': {
			'color': linkColor,
		},
		'.wp-block-frontis-blocks-container .block-editor-block-list__block a:hover': {
			'color': linkHoverColor,
		},
		' > .frontis-blocks-container__shape-top svg': {
			'width': 'calc( ' + topWidth + '% + 1.3px )',
			'height': generateCSSUnit(topHeight, 'px'),
		},
		' > .frontis-blocks-container__shape-top .frontis-blocks-container__shape-fill': {
			'fill': topColor,
		},
		' > .frontis-blocks-container__shape-bottom svg': {
			'width': 'calc( ' + bottomWidth + '% + 1.3px )',
			'height': generateCSSUnit(bottomHeight, 'px'),
		},
		' > .frontis-blocks-container__shape-bottom .frontis-blocks-container__shape-fill': {
			'fill': bottomColor,
		},
		' .frontis-blocks-container__video-wrap video': {
			'opacity': backgroundVideoOpacityValue,
		},
	};

	if (backgroundVideoFallbackImage?.url) {
		selectors[' .frontis-blocks-container__video-wrap video'].background = `url(${backgroundVideoFallbackImage.url}) 50% 50%;`;
		selectors[' .frontis-blocks-container__video-wrap video']['background-size'] = 'cover';
	}

	let boxShadowPositionCSS = boxShadowPosition;

	if ('outset' === boxShadowPosition) {
		boxShadowPositionCSS = '';
	}

	let boxShadowPositionCSSHover = boxShadowPositionHover;

	if ('outset' === boxShadowPositionHover) {
		boxShadowPositionCSSHover = '';
	}

	let containerFlexSelector =
		'.wp-block-frontis-blocks-container > .frontis-blocks-container-inner-blocks-wrap';

	// if ( ! isBlockRootParent) {
	// 	containerFlexSelector =
	// 		'.wp-block-frontis-blocks-container';
	// }

	const widthSelectorsDesktop = {};
	const widthSelectorsTablet = {};
	const widthSelectorsMobile = {};

	selectors[containerFlexSelector] = {
		'min-height': generateCSSUnit(minHeight['Desktop'], minHeightUnits['Desktop']),
	}

	selectors['.block-editor-block-list__block'] = {
		'min-height': generateCSSUnit(minHeight['Desktop'], minHeightUnits['Desktop']),
	}

	if (!isLayoutGrid) {
		selectors[containerFlexSelector] = {
			'flex-direction': containerDirection['Desktop'],
			'align-items': containerAlignItems['Desktop'],
			'justify-content': containerJustify['Desktop'],
			'flex-wrap': containerWrap['Desktop'],
			'align-content': alignContentDesktop,
			'row-gap': generateCSSUnit(rowGapDesktopFallback, rowGapUnits['Desktop']),
			'column-gap': generateCSSUnit(columnGapDesktopFallback, columnGapUnits['Desktop']),
			...selectors[containerFlexSelector],
		};
		selectors['.block-editor-block-list__block'] = {
			'flex-direction': containerDirection['Desktop'],
			'align-items': containerAlignItems['Desktop'],
			'justify-content': containerJustify['Desktop'],
			'flex-wrap': containerWrap['Desktop'],
			'align-content': alignContentDesktop,
			...selectors['.block-editor-block-list__block'],
		};

		widthSelectorsDesktop[`.frontis-blocks-container-inner-blocks-wrap .wp-block-frontis-blocks-container.frontis-blocks-block-${clientId}`] = {
			'flex-direction': containerDirection['Desktop'],
			'align-items': containerAlignItems['Desktop'],
			'justify-content': containerJustify['Desktop'],
			'flex-wrap': containerWrap['Desktop'],
			'align-content': alignContentDesktop,
			'row-gap': generateCSSUnit(rowGapDesktopFallback, rowGapUnits['Desktop']),
			'column-gap': generateCSSUnit(columnGapDesktopFallback, columnGapUnits['Desktop']),
			...widthSelectorsDesktop[`.frontis-blocks-container-inner-blocks-wrap .wp-block-frontis-blocks-container.frontis-blocks-block-${clientId}`],
		};
		widthSelectorsTablet[`.frontis-blocks-container-inner-blocks-wrap .wp-block-frontis-blocks-container.frontis-blocks-block-${clientId}`] = {
			'flex-direction': containerDirection['Tablet'],
			'align-items': containerAlignItems['Tablet'],
			'justify-content': containerJustify['Tablet'],
			'flex-wrap': containerWrap['Tablet'],
			'align-content': alignContentTablet,
			'row-gap': generateCSSUnit(rowGapTabletFallback, rowGapUnits['Tablet']),
			'column-gap': generateCSSUnit(columnGapTabletFallback, columnGapUnits['Tablet']),
			...widthSelectorsTablet[`.frontis-blocks-container-inner-blocks-wrap .wp-block-frontis-blocks-container.frontis-blocks-block-${clientId}`],
		};
		widthSelectorsMobile[`.frontis-blocks-container-inner-blocks-wrap .wp-block-frontis-blocks-container.frontis-blocks-block-${clientId}`] = {
			'flex-direction': containerDirection['Mobile'],
			'align-items': containerAlignItems['Mobile'],
			'justify-content': containerJustify['Mobile'],
			'flex-wrap': containerWrap['Mobile'],
			'align-content': alignContentMobile,
			'row-gap': generateCSSUnit(rowGapMobileFallback, rowGapUnits['Mobile']),
			'column-gap': generateCSSUnit(columnGapMobileFallback, columnGapUnits['Mobile']),
			...widthSelectorsMobile[`.frontis-blocks-container-inner-blocks-wrap .wp-block-frontis-blocks-container.frontis-blocks-block-${clientId}`],
		};
	}

	let desktopContainerPadding = {
		'padding-top': generateCSSUnit(containerDesktopPadding.top, containerPaddingUnits['Desktop']),
		'padding-bottom': generateCSSUnit(containerDesktopPadding.bottom, containerPaddingUnits['Desktop']),
		'padding-left': generateCSSUnit(containerDesktopPadding.left, containerPaddingUnits['Desktop']),
		'padding-right': generateCSSUnit(containerDesktopPadding.right, containerPaddingUnits['Desktop']),
	}

	let tabletContainerPadding = {
		'padding-top': generateCSSUnit(containerTabletPadding.top, containerPaddingUnits['Tablet']),
		'padding-bottom': generateCSSUnit(containerTabletPadding.bottom, containerPaddingUnits['Tablet']),
		'padding-left': generateCSSUnit(containerTabletPadding.left, containerPaddingUnits['Tablet']),
		'padding-right': generateCSSUnit(containerTabletPadding.right, containerPaddingUnits['Tablet']),
	}

	let mobileContainerPadding = {
		'padding-top': generateCSSUnit(containerMobilePadding.top, containerPaddingUnits['Mobile']),
		'padding-bottom': generateCSSUnit(containerMobilePadding.bottom, containerPaddingUnits['Mobile']),
		'padding-left': generateCSSUnit(containerMobilePadding.left, containerPaddingUnits['Mobile']),
		'padding-right': generateCSSUnit(containerMobilePadding.right, containerPaddingUnits['Mobile']),
	}
	// check margin value not 0
	// Check margin values and add only if they are not zero
	let containerMarginCSS = {};

	if (parseInt(containerDesktopMargin.top) !== 0) {
		containerMarginCSS['margin-top'] = generateCSSUnit(containerDesktopMargin.top, containerMarginUnits['Desktop']);
	}

	if (parseInt(containerDesktopMargin.bottom) !== 0) {
		containerMarginCSS['margin-bottom'] = generateCSSUnit(containerDesktopMargin.bottom, containerMarginUnits['Desktop']);
	}

	if (parseInt(containerDesktopMargin.left) !== 0) {
		containerMarginCSS['margin-left'] = generateCSSUnit(containerDesktopMargin.left, containerMarginUnits['Desktop']);
	}

	if (parseInt(containerDesktopMargin.right) !== 0) {
		containerMarginCSS['margin-right'] = generateCSSUnit(containerDesktopMargin.right, containerMarginUnits['Desktop']);
	}

	let containerTabletMarginCSS = {};
	if (parseInt(containerTabletMargin.top) !== 0) {
		containerTabletMarginCSS['margin-top'] = generateCSSUnit(containerTabletMargin.top, containerMarginUnits['Tablet']);
	}

	if (parseInt(containerTabletMargin.bottom) !== 0) {
		containerTabletMarginCSS['margin-bottom'] = generateCSSUnit(containerTabletMargin.bottom, containerMarginUnits['Tablet']);
	}

	if (parseInt(containerTabletMargin.left) !== 0) {
		containerTabletMarginCSS['margin-left'] = generateCSSUnit(containerTabletMargin.left, containerMarginUnits['Tablet']);
	}

	if (parseInt(containerTabletMargin.right) !== 0) {
		containerTabletMarginCSS['margin-right'] = generateCSSUnit(containerTabletMargin.right, containerMarginUnits['Tablet']);
	}

	let containerMobileMarginCSS = {};
	if (parseInt(containerMobileMargin.top) !== 0) {
		containerMobileMarginCSS['margin-top'] = generateCSSUnit(containerMobileMargin.top, containerMarginUnits['Mobile']);
	}

	if (parseInt(containerMobileMargin.bottom) !== 0) {
		containerMobileMarginCSS['margin-bottom'] = generateCSSUnit(containerMobileMargin.bottom, containerMarginUnits['Mobile']);
	}

	if (parseInt(containerMobileMargin.left) !== 0) {
		containerMobileMarginCSS['margin-left'] = generateCSSUnit(containerMobileMargin.left, containerMarginUnits['Mobile']);
	}

	if (parseInt(containerMobileMargin.right) !== 0) {
		containerMobileMarginCSS['margin-right'] = generateCSSUnit(containerMobileMargin.right, containerMarginUnits['Mobile']);
	}

	// Initialize empty objects for border widths
	let containerBorderDesktopWidthCSS = {};
	let containerBorderTabletWidthCSS = {};
	let containerBorderMobileWidthCSS = {};

	// Initialize empty objects for border radius
	let containerBorderRadiusDesktopWidthCSS = {};
	let containerBorderRadiusTabletWidthCSS = {};
	let containerBorderRadiusMobileWidthCSS = {};

	// Handle Desktop Border Width - only set values if they are not 0
	if (containerDesktopBorderWidth && (
		parseInt(containerDesktopBorderWidth.top) !== 0 || 
		parseInt(containerDesktopBorderWidth.right) !== 0 || 
		parseInt(containerDesktopBorderWidth.bottom) !== 0 || 
		parseInt(containerDesktopBorderWidth.left) !== 0)) {
		
		containerBorderDesktopWidthCSS['border-width'] = 
			`${generateCSSUnit(containerDesktopBorderWidth.top, containerBorderUnits.Desktop)} ` +
			`${generateCSSUnit(containerDesktopBorderWidth.right, containerBorderUnits.Desktop)} ` +
			`${generateCSSUnit(containerDesktopBorderWidth.bottom, containerBorderUnits.Desktop)} ` +
			`${generateCSSUnit(containerDesktopBorderWidth.left, containerBorderUnits.Desktop)}`;
	} else {
		containerBorderDesktopWidthCSS['border-width'] = "0px";
	}

	// Handle Tablet Border Width
	if (containerTabBorderWidth && (
		parseInt(containerTabBorderWidth.top) !== 0 || 
		parseInt(containerTabBorderWidth.right) !== 0 || 
		parseInt(containerTabBorderWidth.bottom) !== 0 || 
		parseInt(containerTabBorderWidth.left) !== 0)) {
		
		containerBorderTabletWidthCSS['border-width'] = 
			`${generateCSSUnit(containerTabBorderWidth.top, containerBorderUnits.Tablet)} ` +
			`${generateCSSUnit(containerTabBorderWidth.right, containerBorderUnits.Tablet)} ` +
			`${generateCSSUnit(containerTabBorderWidth.bottom, containerBorderUnits.Tablet)} ` +
			`${generateCSSUnit(containerTabBorderWidth.left, containerBorderUnits.Tablet)}`;
	} else {
		containerBorderTabletWidthCSS['border-width'] = "0px";
	}

	// Handle Mobile Border Width
	if (containerMobileBorderWidth && (
		parseInt(containerMobileBorderWidth.top) !== 0 || 
		parseInt(containerMobileBorderWidth.right) !== 0 || 
		parseInt(containerMobileBorderWidth.bottom) !== 0 || 
		parseInt(containerMobileBorderWidth.left) !== 0)) {
		
		containerBorderMobileWidthCSS['border-width'] = 
			`${generateCSSUnit(containerMobileBorderWidth.top, containerBorderUnits.Mobile)} ` +
			`${generateCSSUnit(containerMobileBorderWidth.right, containerBorderUnits.Mobile)} ` +
			`${generateCSSUnit(containerMobileBorderWidth.bottom, containerBorderUnits.Mobile)} ` +
			`${generateCSSUnit(containerMobileBorderWidth.left, containerBorderUnits.Mobile)}`;
	} else {
		containerBorderMobileWidthCSS['border-width'] = "0px";
	}

	// Handle Desktop Border Radius - only set values if they are not 0
	if (containerDesktopBorderRadiusWidth && (
		parseInt(containerDesktopBorderRadiusWidth.top) !== 0 || 
		parseInt(containerDesktopBorderRadiusWidth.right) !== 0 || 
		parseInt(containerDesktopBorderRadiusWidth.bottom) !== 0 || 
		parseInt(containerDesktopBorderRadiusWidth.left) !== 0)) {
		
		containerBorderRadiusDesktopWidthCSS['border-radius'] = 
			`${generateCSSUnit(containerDesktopBorderRadiusWidth.top, containerBorderRadiusUnits.Desktop)} ` +
			`${generateCSSUnit(containerDesktopBorderRadiusWidth.right, containerBorderRadiusUnits.Desktop)} ` +
			`${generateCSSUnit(containerDesktopBorderRadiusWidth.bottom, containerBorderRadiusUnits.Desktop)} ` +
			`${generateCSSUnit(containerDesktopBorderRadiusWidth.left, containerBorderRadiusUnits.Desktop)}`;
	}

	// Handle Tablet Border Radius
	if (containerTabBorderRadiusWidth && (
		parseInt(containerTabBorderRadiusWidth.top) !== 0 || 
		parseInt(containerTabBorderRadiusWidth.right) !== 0 || 
		parseInt(containerTabBorderRadiusWidth.bottom) !== 0 || 
		parseInt(containerTabBorderRadiusWidth.left) !== 0)) {
		
		containerBorderRadiusTabletWidthCSS['border-radius'] = 
			`${generateCSSUnit(containerTabBorderRadiusWidth.top, containerBorderRadiusUnits.Tablet)} ` +
			`${generateCSSUnit(containerTabBorderRadiusWidth.right, containerBorderRadiusUnits.Tablet)} ` +
			`${generateCSSUnit(containerTabBorderRadiusWidth.bottom, containerBorderRadiusUnits.Tablet)} ` +
			`${generateCSSUnit(containerTabBorderRadiusWidth.left, containerBorderRadiusUnits.Tablet)}`;
	}

	// Handle Mobile Border Radius
	if (containerMobileBorderRadiusWidth && (
		parseInt(containerMobileBorderRadiusWidth.top) !== 0 || 
		parseInt(containerMobileBorderRadiusWidth.right) !== 0 || 
		parseInt(containerMobileBorderRadiusWidth.bottom) !== 0 || 
		parseInt(containerMobileBorderRadiusWidth.left) !== 0)) {
		
		containerBorderRadiusMobileWidthCSS['border-radius'] = 
			`${generateCSSUnit(containerMobileBorderRadiusWidth.top, containerBorderRadiusUnits.Mobile)} ` +
			`${generateCSSUnit(containerMobileBorderRadiusWidth.right, containerBorderRadiusUnits.Mobile)} ` +
			`${generateCSSUnit(containerMobileBorderRadiusWidth.bottom, containerBorderRadiusUnits.Mobile)} ` +
			`${generateCSSUnit(containerMobileBorderRadiusWidth.left, containerBorderRadiusUnits.Mobile)}`;
	}

	// Function to get background styles based on device type for FB Container
	const getBackgroundNormalStyles = (device) => {
		const bgType = containerBgNormalBackgroundType;
		const bgColor = containerBgNormalClassicColor;
		const bgGradient = containerBgNormalGradientColor;
		const customGradient = containerBgNormalCustomGradientInputValue;
		const customGradientEnabled = containerBgNormalCustomGradientSwitcher;

		const bgImageUrl = containerBgNormalBackgroundImageUrl?.[device];
		const bgImagePosition = containerBgNormalBackgroundImagePosition?.[device];
		const bgAttachment = containerBgNormalBackgroundImageAttachment?.[device];
		const bgRepeat = containerBgNormalBackgroundImageRepeat?.[device];
		const bgSize = containerBgNormalBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition 
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	// Function to get background styles based on device type for FB Container
	const getBackgroundHoverStyles = (device) => {
		const bgType = containerBgHoverBackgroundType;
		const bgColor = containerBgHoverClassicColor;
		const bgGradient = containerBgHoverGradientColor;
		const customGradient = containerBgHoverCustomGradientInputValue;
		const customGradientEnabled = containerBgHoverCustomGradientSwitcher;

		const bgImageUrl = containerBgHoverBackgroundImageUrl?.[device];
		const bgImagePosition = containerBgHoverBackgroundImagePosition?.[device];
		const bgAttachment = containerBgHoverBackgroundImageAttachment?.[device];
		const bgRepeat = containerBgHoverBackgroundImageRepeat?.[device];
		const bgSize = containerBgHoverBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition 
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};



	// Function to get background overlay styles based on device type for FB Container
	const getBackgroundOverlayNormalStyles = (device) => {
		const bgType = containerBgOverlayNormalBackgroundType;
		const bgColor = containerBgOverlayNormalClassicColor;
		const bgGradient = containerBgOverlayNormalGradientColor;
		const customGradient = containerBgOverlayNormalCustomGradientInputValue;
		const customGradientEnabled = containerBgOverlayNormalCustomGradientSwitcher;

		const bgImageUrl = containerBgOverlayNormalBackgroundImageUrl?.[device];
		const bgImagePosition = containerBgOverlayNormalBackgroundImagePosition?.[device];
		const bgAttachment = containerBgOverlayNormalBackgroundImageAttachment?.[device];
		const bgRepeat = containerBgOverlayNormalBackgroundImageRepeat?.[device];
		const bgSize = containerBgOverlayNormalBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition 
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	// Function to get background overlay hover styles based on device type for FB Container
	const getBackgroundOverlayHoverStyles = (device) => {
		const bgType = containerBgOverlayHoverBackgroundType;
		const bgColor = containerBgOverlayHoverClassicColor;
		const bgGradient = containerBgOverlayHoverGradientColor;
		const customGradient = containerBgOverlayHoverCustomGradientInputValue;
		const customGradientEnabled = containerBgOverlayHoverCustomGradientSwitcher;

		const bgImageUrl = containerBgOverlayHoverBackgroundImageUrl?.[device];
		const bgImagePosition = containerBgOverlayHoverBackgroundImagePosition?.[device];
		const bgAttachment = containerBgOverlayHoverBackgroundImageAttachment?.[device];
		const bgRepeat = containerBgOverlayHoverBackgroundImageRepeat?.[device];
		const bgSize = containerBgOverlayHoverBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition 
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};


	// Start Handle overlay styles.
	const overlayStyles = (device) => ({
		'content': '""',
		'position': 'absolute',
		'top': '0',
		'left': '0',
		'right': '0',
		'bottom': '0',
		'width': '100%',
		'height': '100%',
		'opacity': containerBgOverlayOpacity[device],
		...getBackgroundOverlayNormalStyles(device),
	});

	const overlayHoverStyles = (device) => ({
		...getBackgroundOverlayHoverStyles(device),
	});
	let containerBgOverlayDesktop = {};
	let containerBgOverlayTablet = {};
	let containerBgOverlayMobile = {};
	let containerBgOverlayDesktopHover = {};
	let containerBgOverlayTabletHover = {};
	let containerBgOverlayMobileHover = {};

	if (containerBgOverlaySwitcher) {
		containerBgOverlayDesktop = overlayStyles('Desktop');
		containerBgOverlayTablet = overlayStyles('Tablet');
		containerBgOverlayMobile = overlayStyles('Mobile');
		containerBgOverlayDesktopHover = overlayHoverStyles('Desktop');
		containerBgOverlayTabletHover = overlayHoverStyles('Tablet');
		containerBgOverlayMobileHover = overlayHoverStyles('Mobile');
	}
	// End Handle overlay styles.

  
	widthSelectorsDesktop[`.frontis-blocks-block-${clientId}`] = {
		'max-width': generateCSSUnit(widthDesktopFallback, customWidthUnits['Desktop']),
		'width': '100%',
		...desktopContainerPadding,
		...containerMarginCSS,
		...getBackgroundNormalStyles( 'Desktop' ),

		// Position related properties
		'position': containerPositionType === 'default' ? 'relative' : containerPositionType,
				
		// Horizontal positioning
		'left': containerPositionType !== 'default' && containerPositionType !== 'relative' && 
				containerHZOrientationType === 'left' && containerHZLeftOffset.Desktop ? 
				generateCSSUnit(containerHZLeftOffset.Desktop, containerHZLeftOffsetUnits.Desktop) : undefined,
				
		'right': containerPositionType !== 'default' && containerPositionType !== 'relative' && 
				containerHZOrientationType === 'right' && containerHZRightOffset.Desktop ? 
				generateCSSUnit(containerHZRightOffset.Desktop, containerHZRightOffsetUnits.Desktop) : undefined,
				
		// Vertical positioning
		'top': containerPositionType !== 'default' && containerPositionType !== 'relative' && 
				containerVROrientationType === 'top' && containerVRTopOffset.Desktop ? 
				generateCSSUnit(containerVRTopOffset.Desktop, containerVRTopOffsetUnits.Desktop) : undefined,
				
		'bottom': containerPositionType !== 'default' && containerPositionType !== 'relative' && 
					containerVROrientationType === 'bottom' && containerVRBottomOffset.Desktop ? 
					generateCSSUnit(containerVRBottomOffset.Desktop, containerVRBottomOffsetUnits.Desktop) : undefined,
				
		'z-index': containerZIndex.Desktop ? containerZIndex.Desktop : undefined,
		'overflow': containerOverflow !== 'default' ? containerOverflow : undefined,

		// Border style
		'border-style': containerBorder !== 'none' ? containerBorder : undefined,
		'border-color': containerBorderColor ? containerBorderColor : undefined,
		...containerBorderDesktopWidthCSS,
		...containerBorderRadiusDesktopWidthCSS,

		// Box shadow
		'box-shadow': containerGlobalBoxShadowCssValue ? containerGlobalBoxShadowCssValue : undefined
	};

	widthSelectorsDesktop[`.frontis-blocks-block-${clientId}:hover`] = {
		...getBackgroundHoverStyles('Desktop'),
	};
	
	widthSelectorsDesktop[`.frontis-blocks-block-${clientId}:after`] = {
		...containerBgOverlayDesktop,
	};
	widthSelectorsDesktop[`.frontis-blocks-block-${clientId}:hover:after`] = {
		...containerBgOverlayDesktopHover,
	};

	widthSelectorsTablet[`.frontis-blocks-block-${clientId} `] = {
		'max-width': generateCSSUnit(widthTabletFallback, customWidthUnits['Tablet']),
		'width': '100%',
		...tabletContainerPadding,
		...containerTabletMarginCSS,
		...getBackgroundNormalStyles( 'Tablet' ),
		
		// Horizontal positioning
		'left': containerPositionType !== 'default' && containerPositionType !== 'relative' && 
				containerHZOrientationType === 'left' && containerHZLeftOffset.Tablet ? 
				generateCSSUnit(containerHZLeftOffset.Tablet, containerHZLeftOffsetUnits.Tablet) : undefined,
				
		'right': containerPositionType !== 'default' && containerPositionType !== 'relative' && 
				containerHZOrientationType === 'right' && containerHZRightOffset.Tablet ? 
				generateCSSUnit(containerHZRightOffset.Tablet, containerHZRightOffsetUnits.Tablet) : undefined,
				
		// Vertical positioning
		'top': containerPositionType !== 'default' && containerPositionType !== 'relative' && 
				containerVROrientationType === 'top' && containerVRTopOffset.Tablet ? 
				generateCSSUnit(containerVRTopOffset.Tablet, containerVRTopOffsetUnits.Tablet) : undefined,
				
		'bottom': containerPositionType !== 'default' && containerPositionType !== 'relative' && 
					containerVROrientationType === 'bottom' && containerVRBottomOffset.Tablet ? 
					generateCSSUnit(containerVRBottomOffset.Tablet, containerVRBottomOffsetUnits.Tablet) : undefined,
				
		'z-index': containerZIndex.Tablet ? containerZIndex.Tablet : undefined,

		// Border style
		...containerBorderTabletWidthCSS,
		...containerBorderRadiusTabletWidthCSS,
	};
	widthSelectorsTablet[`.frontis-blocks-block-${clientId}:hover`] = {
		...getBackgroundHoverStyles('Tablet'),
	};
	widthSelectorsTablet[`.frontis-blocks-block-${clientId}:after`] = {
		...containerBgOverlayTablet,
	};
	widthSelectorsTablet[`.frontis-blocks-block-${clientId}:hover:after`] = {
		...containerBgOverlayTabletHover,
	};


	widthSelectorsMobile[`.frontis-blocks-block-${clientId} `] = {
		'max-width': generateCSSUnit(widthMobileFallback, customWidthUnits['Mobile']),
		'width': '100%',
		...mobileContainerPadding,
		...containerMobileMarginCSS,
		...getBackgroundNormalStyles( 'Mobile' ),

		// Horizontal positioning
		'left': containerPositionType !== 'default' && containerPositionType !== 'relative' && 
				containerHZOrientationType === 'left' && containerHZLeftOffset.Mobile ? 
				generateCSSUnit(containerHZLeftOffset.Mobile, containerHZLeftOffsetUnits.Mobile) : undefined,
				
		'right': containerPositionType !== 'default' && containerPositionType !== 'relative' && 
				containerHZOrientationType === 'right' && containerHZRightOffset.Mobile ? 
				generateCSSUnit(containerHZRightOffset.Mobile, containerHZRightOffsetUnits.Mobile) : undefined,
				
		// Vertical positioning
		'top': containerPositionType !== 'default' && containerPositionType !== 'relative' && 
				containerVROrientationType === 'top' && containerVRTopOffset.Mobile ? 
				generateCSSUnit(containerVRTopOffset.Mobile, containerVRTopOffsetUnits.Mobile) : undefined,
				
		'bottom': containerPositionType !== 'default' && containerPositionType !== 'relative' && 
					containerVROrientationType === 'bottom' && containerVRBottomOffset.Mobile ? 
					generateCSSUnit(containerVRBottomOffset.Mobile, containerVRBottomOffsetUnits.Mobile) : undefined,
				
		'z-index': containerZIndex.Mobile ? containerZIndex.Mobile : undefined,

		// Border style
		...containerBorderMobileWidthCSS,
		...containerBorderRadiusMobileWidthCSS,
		
	};
	widthSelectorsMobile[`.frontis-blocks-block-${clientId}:hover`] = {
		...getBackgroundHoverStyles('Mobile'),
	};
	widthSelectorsMobile[`.frontis-blocks-block-${clientId}:after`] = {
		...containerBgOverlayMobile,
	};
	widthSelectorsMobile[`.frontis-blocks-block-${clientId}:hover:after`] = {
		...containerBgOverlayMobileHover,
	};


	if ((containerType === 'boxed' || containerTypeFull === 'boxed') && containerType !== 'custom') {
		widthSelectorsDesktop[
			`${isBlockRootParent && '#block-' + clientId}.wp-block-frontis-blocks-container > .frontis-blocks-container-inner-blocks-wrap`
		] = {
			'--inner-content-custom-width': `min(${containerFullWidth},${innerContentCustomWidthDesktopFallback}${fullWidthContentBoxedWidthUnits['Desktop']})`,
			'max-width': 'var(--inner-content-custom-width)',
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto',
		};

		widthSelectorsTablet[`${isBlockRootParent && '#block-' + clientId}.wp-block-frontis-blocks-container > .frontis-blocks-container-inner-blocks-wrap`] = {
			'--inner-content-custom-width': `min(${containerFullWidth},${innerContentCustomWidthTabletFallback || innerContentCustomWidthTabletFallback}${fullWidthContentBoxedWidthUnits['Tablet']})`,
			'max-width': 'var(--inner-content-custom-width)',
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto'
		};

		widthSelectorsMobile[
			`${isBlockRootParent && '#block-' + clientId}.wp-block-frontis-blocks-container > .frontis-blocks-container-inner-blocks-wrap`
		] = {
			'--inner-content-custom-width': `min(${containerFullWidth},${innerContentCustomWidthMobileFallback || innerContentCustomWidthMobileFallback || innerContentCustomWidthMobileFallback
				}${fullWidthContentBoxedWidthUnits['Mobile']})`,
			'max-width': 'var(--inner-content-custom-width)',
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto',
		};
	} else {
		widthSelectorsDesktop[
			`${isBlockRootParent && '#block-' + clientId}.wp-block-frontis-blocks-container > .frontis-blocks-container-inner-blocks-wrap`
		] = {
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto',
		};

		widthSelectorsTablet[`${isBlockRootParent && '#block-' + clientId}.wp-block-frontis-blocks-container > .frontis-blocks-container-inner-blocks-wrap`] = {
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto'
		};

		widthSelectorsMobile[
			`${isBlockRootParent && '#block-' + clientId}.wp-block-frontis-blocks-container > .frontis-blocks-container-inner-blocks-wrap`
		] = {
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto',
		};
	}

	const tablet_selectors = {
		[containerFlexSelector]: {
			'flex-direction': containerDirection['Tablet'],
			'align-items': containerAlignItems['Tablet'],
			'justify-content': containerJustify['Tablet'],
			'flex-wrap': containerWrap['Tablet'],
			'align-content': alignContentTablet,
			'row-gap': generateCSSUnit(rowGapTabletFallback, rowGapUnits['Tablet']),
			'column-gap': generateCSSUnit(columnGapTabletFallback, columnGapUnits['Tablet']),
			'min-height': generateCSSUnit(minHeight['Tablet'], minHeightUnits['Tablet']),
		},
		'.block-editor-block-list__block': {
			'min-height': generateCSSUnit(minHeight['Tablet'], minHeightUnits['Tablet']),
			'flex-direction': containerDirection['Tablet'],
			'align-items': containerAlignItems['Tablet'],
			'justify-content': containerJustify['Tablet'],
			'flex-wrap': containerWrap['Tablet'],
			'align-content': alignContentTablet,
		},
		' > .frontis-blocks-container__shape-top svg': {
			'height': generateCSSUnit(topHeightTablet, 'px'),
		},
		' > .frontis-blocks-container__shape-bottom svg': {
			'height': generateCSSUnit(bottomHeightTablet, 'px'),
		},
	};

	const mobile_selectors = {
		// Handeling Edge case for mobile.
		'.wp-block-frontis-blocks-container .block-editor-inner-blocks .block-editor-block-list__layout .wp-block[data-type="core/quote"]': {
			'margin-inline-start': '0px',
			'margin-inline-end': '0px',
		},
		[containerFlexSelector]: {
			'flex-direction': containerDirection['Mobile'],
			'align-items': containerAlignItems['Mobile'],
			'justify-content': containerJustify['Mobile'],
			'flex-wrap': containerWrap['Mobile'],
			'align-content': alignContentMobile,
			'row-gap': generateCSSUnit(rowGapMobileFallback, rowGapUnits['Mobile']),
			'column-gap': generateCSSUnit(columnGapMobileFallback, columnGapUnits['Mobile']),
			'min-height': generateCSSUnit(minHeight['Mobile'], minHeightUnits['Mobile']),
		},
		'.block-editor-block-list__block': {
			'min-height': generateCSSUnit(minHeight['Mobile'], minHeightUnits['Mobile']),
			'flex-direction': containerDirection['Mobile'],
			'align-items': containerAlignItems['Mobile'],
			'justify-content': containerJustify['Mobile'],
			'flex-wrap': containerWrap['Mobile'],
			'align-content': alignContentMobile,
		},
		' > .frontis-blocks-container__shape-top svg': {
			'height': generateCSSUnit(topHeightMobile, 'px'),
		},
		' > .frontis-blocks-container__shape-bottom svg': {
			'height': generateCSSUnit(bottomHeightMobile, 'px'),
		},
	};

	// Display grid css.
	if (isLayoutGrid) {
		// Grid style settings for desktop.
		const gridStyles = {};

		// Set column and row gap css. for gap we will use existing rowGap and columnGap attributes.
		gridStyles['grid-column-gap'] = generateCSSUnit(columnGapDesktopFallback, columnGapType);
		gridStyles['grid-row-gap'] = generateCSSUnit(rowGapDesktopFallback, rowGapType);

		selectors[containerFlexSelector] = { ...gridStyles, ...gridCssObject(attributes, 'Desktop') };

		// Grid style settings for tablet.
		const gridStylesTablet = {};

		// Set column and row gap css. for gap we will use existing rowGap and columnGap attributes.
		gridStylesTablet['grid-column-gap'] = generateCSSUnit(columnGapTablet, columnGapTypeTablet);
		gridStylesTablet['grid-row-gap'] = generateCSSUnit(rowGapTablet, rowGapTypeTablet);

		tablet_selectors[containerFlexSelector] = { ...gridStylesTablet, ...gridCssObject(attributes, 'Tablet') };

		// Grid style settings for mobile.
		const gridStylesMobile = {};

		// Set column and row gap css. for gap we will use existing rowGap and columnGap attributes.
		gridStylesMobile['grid-column-gap'] = generateCSSUnit(columnGapMobile, columnGapTypeMobile);
		gridStylesMobile['grid-row-gap'] = generateCSSUnit(rowGapMobile, rowGapTypeMobile);

		mobile_selectors[containerFlexSelector] = { ...gridStylesMobile, ...gridCssObject(attributes, 'Mobile') };
	}

	if ('video' === backgroundType) {
		selectors[' .frontis-blocks-container__video-wrap'] = {
			...videoBackgroundCSS,
			...borderCSS,
		};
		tablet_selectors[' .frontis-blocks-container__video-wrap'] = {
			...borderCSSTablet,
		};
		mobile_selectors[' .frontis-blocks-container__video-wrap'] = {
			...borderCSSMobile,
		};
		selectors['.wp-block-frontis-blocks-container'] = {
			'box-shadow':
				generateCSSUnit(boxShadowHOffset, 'px') +
				' ' +
				generateCSSUnit(boxShadowVOffset, 'px') +
				' ' +
				generateCSSUnit(boxShadowBlur, 'px') +
				' ' +
				generateCSSUnit(boxShadowSpread, 'px') +
				' ' +
				boxShadowColor +
				' ' +
				boxShadowPositionCSS,
			'min-height': generateCSSUnit(minHeight['Desktop'], minHeightUnits['Desktop']),
			'overflow': overflow,
		};
		tablet_selectors['.wp-block-frontis-blocks-container'] = {
			'padding-top': generateCSSUnit(containerTabletPadding.top, containerPaddingUnits['Tablet']),
			'padding-bottom': generateCSSUnit(containerTabletPadding.bottom, containerPaddingUnits['Tablet']),
			'padding-left': generateCSSUnit(containerTabletPadding.left, containerPaddingUnits['Tablet']),
			'padding-right': generateCSSUnit(containerTabletPadding.right, containerPaddingUnits['Tablet']),
			'margin-top': generateCSSUnit(containerTabletMargin.top, containerMarginUnits['Tablet']),
			'margin-bottom': generateCSSUnit(containerTabletMargin.bottom, containerMarginUnits['Tablet']),
			'min-height': generateCSSUnit(minHeight['Tablet'], minHeightUnits['Tablet']),
		};
		mobile_selectors['.wp-block-frontis-blocks-container'] = {
			'padding-top': generateCSSUnit(containerMobilePadding.top, containerPaddingUnits['Mobile']),
			'padding-bottom': generateCSSUnit(containerMobilePadding.bottom, containerPaddingUnits['Mobile']),
			'padding-left': generateCSSUnit(containerMobilePadding.left, containerPaddingUnits['Mobile']),
			'padding-right': generateCSSUnit(containerMobilePadding.right, containerPaddingUnits['Mobile']),
			'margin-top': generateCSSUnit(containerMobileMargin.top, containerMarginUnits['Mobile']),
			'margin-bottom': generateCSSUnit(containerMobileMargin.bottom, containerMarginUnits['Mobile']),
			'min-height': generateCSSUnit(minHeight['Mobile'], minHeightUnits['Mobile']),
		};
		selectors['.wp-block-frontis-blocks-container:hover .frontis-blocks-container__video-wrap'] = {
			'border-color': containerBorderHColor,
			'box-shadow': '',
		};

		
	} else {
		// selectors[`.frontis-blocks-block-${clientId}`] = containerCSS;
		selectors['.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container)'] = {
			'margin-left': generateCSSUnit(containerDesktopMargin.left, containerMarginUnits['Desktop']),
			'margin-right': generateCSSUnit(containerDesktopMargin.right, containerMarginUnits['Desktop']),
		}
		tablet_selectors[`.frontis-blocks-block-${clientId}`] = {
			'min-height': generateCSSUnit(minHeight['Tablet'], minHeightUnits['Tablet']),
			...borderCSSTablet,
			'order': 'custom' === orderTablet ? customOrderTablet : orderTablet,
		};
		tablet_selectors['.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container)'] = {
			'margin-left': generateCSSUnit(containerTabletMargin.left, containerMarginUnits['Tablet']),
			'margin-right': generateCSSUnit(containerTabletMargin.right, containerMarginUnits['Tablet']),
		}
		mobile_selectors[`.frontis-blocks-block-${clientId}`] = {
			'min-height': generateCSSUnit(minHeight['Mobile'], minHeightUnits['Mobile']),
			...borderCSSMobile,
			'order': 'custom' === orderMobile ? customOrderMobile : orderMobile,
		};
		mobile_selectors['.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container)'] = {
			'margin-left': generateCSSUnit(containerMobileMargin.left, containerMarginUnits['Mobile']),
			'margin-right': generateCSSUnit(containerMobileMargin.right, containerMarginUnits['Mobile']),
		}
		selectors['.wp-block-frontis-blocks-container:hover'] = {
			'border-color': containerBorderHColor,
			'box-shadow': '',

			'border-color': containerBorderHoverColor ? containerBorderHoverColor : undefined,
  			'box-shadow': containerGlobalHoverBoxShadowCssValue ? containerGlobalHoverBoxShadowCssValue : undefined
		};
	}

	if ('custom' === containerType) {
		selectors['.block-editor-block-list__block']['max-width'] = generateCSSUnit(
			containerCustomWidth['Desktop'],
			containerCustomWidthUnits['Desktop']
		);

		tablet_selectors['.block-editor-block-list__block']['max-width'] = generateCSSUnit(
			containerCustomWidth['Tablet'],
			containerCustomWidthUnits['Tablet']
		);

		mobile_selectors['.block-editor-block-list__block']['max-width'] = generateCSSUnit(
			containerCustomWidth['Mobile'],
			containerCustomWidthUnits['Mobile']
		);
	}

	// Add the Overlay CSS if needed.
	if (overlayType && 'none' !== overlayType && Object.keys(getContainerBGStyle).length) {
		const desktopBorderWidth = {
			'top': containerBorderTopWidth || 0,
			'right': containerBorderRightWidth || 0,
			'bottom': containerBorderBottomWidth || 0,
			'left': containerBorderLeftWidth || 0,
		};
		const tabletBorderWidth = {
			'top': containerBorderTopWidthTablet || desktopBorderWidth.top,
			'right': containerBorderRightWidthTablet || desktopBorderWidth.right,
			'bottom': containerBorderBottomWidthTablet || desktopBorderWidth.bottom,
			'left': containerBorderLeftWidthTablet || desktopBorderWidth.left,
		};
		const mobileBorderWidth = {
			'top': containerBorderTopWidthMobile || tabletBorderWidth.top,
			'right': containerBorderRightWidthMobile || tabletBorderWidth.right,
			'bottom': containerBorderBottomWidthMobile || tabletBorderWidth.bottom,
			'left': containerBorderLeftWidthMobile || tabletBorderWidth.left,
		}
		selectors['.wp-block-frontis-blocks-container::before'] = {
			'content': '""',
			'top': `-${generateCSSUnit(desktopBorderWidth.top, 'px')}`,
			'left': `-${generateCSSUnit(desktopBorderWidth.left, 'px')}`,
			'width': `calc(100% + ${generateCSSUnit(desktopBorderWidth.left, 'px')} + ${generateCSSUnit(desktopBorderWidth.right, 'px')})`,
			'height': `calc(100% + ${generateCSSUnit(desktopBorderWidth.top, 'px')} + ${generateCSSUnit(desktopBorderWidth.bottom, 'px')})`,
			...borderCSS,
			...getContainerBGStyle,
		};
		selectors['.wp-block-frontis-blocks-container:hover::before'] = {
			'border-color': containerBorderHColor,
		};
		tablet_selectors['.wp-block-frontis-blocks-container::before'] = {
			'top': `-${generateCSSUnit(tabletBorderWidth.top, 'px')}`,
			'left': `-${generateCSSUnit(tabletBorderWidth.left, 'px')}`,
			// In the Editor Responsive, 100% seems to take the required witdh and height including offset...
			'width': '100%',
			'height': '100%',
			...borderCSSTablet,
		};
		mobile_selectors['.wp-block-frontis-blocks-container::before'] = {
			'top': `-${generateCSSUnit(mobileBorderWidth.top, 'px')}`,
			'left': `-${generateCSSUnit(mobileBorderWidth.left, 'px')}`,
			// In the Editor Responsive, 100% seems to take the required witdh and height including offset...
			'width': '100%',
			'height': '100%',
			...borderCSSMobile,
		};
	}

	const autoWidth = { 'width': 'auto' };
	const setWidth = { 'width': '100%' };
	const containerSelector = '.wp-block-frontis-blocks-container > .block-editor-inner-blocks > .wp-block';
	const containerSelector2 = '.wp-block-frontis-blocks-container > .frontis-blocks-container-inner-blocks-wrap > .block-editor-inner-blocks > .wp-block';

	// Add auto width to the inner blocks in desktop.
	if (directionDesktop) {
		if ('auto' === childrenWidthDesktop) {
			selectors[containerSelector] = autoWidth;
			selectors[containerSelector2] = autoWidth;
		}
	}

	// Add auto width to the inner blocks in tablet.
	if (directionTablet) {
		if ('auto' === childrenWidthTablet) {
			tablet_selectors[containerSelector] = autoWidth;
			tablet_selectors[containerSelector2] = autoWidth;
		} else {
			tablet_selectors[containerSelector] = setWidth;
			tablet_selectors[containerSelector2] = setWidth;
		}
	}

	// Add auto width to the inner blocks in mobile.
	if (directionMobile) {
		if ('auto' === childrenWidthMobile) {
			mobile_selectors[containerSelector] = autoWidth;
			mobile_selectors[containerSelector2] = autoWidth;
		} else {
			mobile_selectors[containerSelector] = setWidth;
			mobile_selectors[containerSelector2] = setWidth;
		}
	}

	// Add css grid children settings.
	if (isGridCssInParent) {
		const gridChildrenCSS = {};
		const gridChildrenCSSTablet = {
			// Add default css for the Tablet.
			'grid-column': 'span 1',
			'grid-row': 'span 1',
		};

		const gridChildrenCSSMobile = {
			// Add default css for the Mobile.
			'grid-column': 'span 1',
			'grid-row': 'span 1',
		};

		if ('advance' === gridSettingType) {
			// For desktop.
			if (gridColumnStart && gridColumnEnd) {
				gridChildrenCSS['grid-column'] = `${gridColumnStart} / ${gridColumnEnd}`;
			}

			if (gridRowStart && gridRowEnd) {
				gridChildrenCSS['grid-row'] = `${gridRowStart} / ${gridRowEnd}`;
			}

			// For tablet.
			if (gridColumnStartTablet && gridColumnEndTablet) {
				gridChildrenCSSTablet['grid-column'] = `${gridColumnStartTablet} / ${gridColumnEndTablet}`;
			}

			if (gridRowStartTablet && gridRowEndTablet) {
				gridChildrenCSSTablet['grid-row'] = `${gridRowStartTablet} / ${gridRowEndTablet}`;
			}

			// For mobile.
			if (gridColumnStartMobile && gridColumnEndMobile) {
				gridChildrenCSSMobile['grid-column'] = `${gridColumnStartMobile} / ${gridColumnEndMobile}`;
			}

			if (gridRowStartMobile && gridRowEndMobile) {
				gridChildrenCSSMobile['grid-row'] = `${gridRowStartMobile} / ${gridRowEndMobile}`;
			}
		} else {
			// For desktop.
			if (gridColumnSpan) {
				gridChildrenCSS['grid-column'] = `span ${gridColumnSpan}`;
			}

			if (gridRowSpan) {
				gridChildrenCSS['grid-row'] = `span ${gridRowSpan}`;
			}

			// For tablet.
			if (gridColumnSpanTablet) {
				gridChildrenCSSTablet['grid-column'] = `span ${gridColumnSpanTablet}`;
			}

			if (gridRowSpanTablet) {
				gridChildrenCSSTablet['grid-row'] = `span ${gridRowSpanTablet}`;
			}

			// For mobile.
			if (gridColumnSpanMobile) {
				gridChildrenCSSMobile['grid-column'] = `span ${gridColumnSpanMobile}`;
			}

			if (gridRowSpanMobile) {
				gridChildrenCSSMobile['grid-row'] = `span ${gridRowSpanMobile}`;
			}
		}


		// For desktop.
		if (gridAlignItems) {
			gridChildrenCSS['align-self'] = gridAlignItems;
		}

		if (gridJustifyItems) {
			gridChildrenCSS['justify-self'] = gridJustifyItems;
		}

		// For tablet.
		if (gridAlignItemsTablet) {
			gridChildrenCSSTablet['align-self'] = gridAlignItemsTablet;
		}

		if (gridJustifyItemsTablet) {
			gridChildrenCSSTablet['justify-self'] = gridJustifyItemsTablet;
		}

		// For mobile.
		if (gridAlignItemsMobile) {
			gridChildrenCSSMobile['align-self'] = gridAlignItemsMobile;
		}

		if (gridJustifyItemsMobile) {
			gridChildrenCSSMobile['justify-self'] = gridJustifyItemsMobile;
		}

		widthSelectorsDesktop['#block-' + clientId] = gridChildrenCSS;

		widthSelectorsTablet['#block-' + clientId] = gridChildrenCSSTablet;

		widthSelectorsMobile['#block-' + clientId] = gridChildrenCSSMobile;
	}

	const base_selector = gbsSelector ? gbsSelector : ` #block-${clientId}`;

	let styling_css = generateCSS(selectors, base_selector);

	styling_css += generateCSS(widthSelectorsDesktop, ' ');
	styling_css += generateCSS(
		tablet_selectors,
		`${base_selector}`,
		true,
		'tablet'
	);

	styling_css += generateCSS(widthSelectorsTablet, ' ', true, 'tablet');
	styling_css += generateCSS(
		mobile_selectors,
		`${base_selector}`,
		true,
		'mobile'
	);

	styling_css += generateCSS(widthSelectorsMobile, ' ', true, 'mobile');

	styling_css += containerGlobalCustomCSSValue;

	return styling_css;
}

export default frontEndStyle;

