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

function styling( attributes, clientId, name, deviceType, gbsSelector = false ) {
	const blockName = name.replace( 'frotins-blocks/', '' );
	const previewType = deviceType.toLowerCase();
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
		backgroundVideoColor,
		backgroundVideo,

		textColor,
		linkColor,
		linkHoverColor,
		innerContentCustomWidthTablet,
		innerContentCustomWidthMobile,
		innerContentCustomWidthTypeMobile,
		innerContentCustomWidthTypeTablet,

		overflow,
		isBlockRootParent,

		widthTypeTablet,
		widthTypeMobile,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
		// Extracted Border Width Attributes.
		backgroundVideoFallbackImage,
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
		globalFullWidthContentBoxedWidth,
		fullWidthContentBoxedWidth,
		fullWidthContentBoxedWidthUnits,
		fullWidthContentBoxedWidthHasEdited,
		customWidth,
		minHeight,
		minHeightUnits,
		containerType,
		containerCustomWidth,
		containerCustomWidthUnits,
		containerWrap,
		containerTypeFull,
		globalColumnGap,
		globalRowGap,
		columnGap,
		rowGap,
		columnGapUnits,
		rowGapUnits,
		containerGlobalPadding,
		containerPaddingUnits,
		containerDesktopPadding,
		containerTabletPadding,
		containerMobilePadding,
		containerMarginUnits,
		containerDesktopMargin,
		containerTabletMargin,
		containerMobileMargin,

		// display type
		containerHtmlTag,
		containerLayout,
		containerEqualHeight,
		containerChildrenWidth,
		containerDirection,
		containerJustify,
		containerAlignItems,
		containerColumnsItemList,
		containerRowsItemList,
		containerGridAlignItems,
		containerGridJustifyItems,

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
		containerBorderUnits,
		containerDesktopBorderWidth,
		containerTabBorderWidth,
		containerMobileBorderWidth,
		containerBorderRadiusUnits,
		containerDesktopBorderRadiusWidth,
		containerTabBorderRadiusWidth,
		containerMobileBorderRadiusWidth,

		containerGlobalBoxShadowCssValue,
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

		customWidthUnits,

		containerGlobalCustomCSSValue,
		containerGlobalCustomCSSClass,

	} = attributes;

	// Background Image CSS is now added here as well so that we can generate CSS for the psuedo-element.
	const getContainerBGStyle = backgroundCss( attributes, deviceType, clientId, { 'hasPseudo': true, 'forStyleSheet': true } );

	const isLayoutGrid = 'grid' === layout;

	const innerContentCustomWidthDesktopFallback = getFallbackNumber(
		fullWidthContentBoxedWidth[deviceType] === '' ? globalFullWidthContentBoxedWidth[deviceType] : fullWidthContentBoxedWidth[deviceType],
		'innerContentCustomWidthDesktop',
		blockName
	);
	const widthDesktopFallback = getFallbackNumber( customWidth['Desktop'], 'customWidth', blockName );
	const widthTabletFallback = getFallbackNumber( customWidth['Tablet'], 'customWidth', blockName );
	const widthMobileFallback = getFallbackNumber( customWidth['Mobile'], 'customWidth', blockName );

	const rowGapDesktopFallback = getFallbackNumber((rowGap['Desktop'] === '' && rowGap['Tablet'] === '' && rowGap['Mobile'] === '') ? globalRowGap['Desktop'] : rowGap['Desktop'], 'rowGapDesktop', blockName );
	const columnGapDesktopFallback = getFallbackNumber((columnGap['Desktop'] === '' && columnGap['Tablet'] === '' && columnGap['Mobile'] === '') ? globalColumnGap['Desktop'] : columnGap['Desktop'], 'columnGapDesktop', blockName );
	const rowGapTabletFallback = getFallbackNumber((rowGap['Desktop'] === '' && rowGap['Tablet'] === '' && rowGap['Mobile'] === '') ? globalRowGap['Tablet'] : rowGap['Tablet'], 'rowGapTablet', blockName );
	const columnGapTabletFallback = getFallbackNumber((columnGap['Desktop'] === '' && columnGap['Tablet'] === '' && columnGap['Mobile'] === '') ? globalColumnGap['Tablet'] : columnGap['Tablet'], 'columnGapTablet', blockName );
	const rowGapMobileFallback = getFallbackNumber((rowGap['Desktop'] === '' && rowGap['Tablet'] === '' && rowGap['Mobile'] === '') ? globalRowGap['Mobile'] : rowGap['Mobile'], 'rowGapMobile', blockName );
	const columnGapMobileFallback = getFallbackNumber((columnGap['Desktop'] === '' && columnGap['Tablet'] === '' && columnGap['Mobile'] === '') ? globalColumnGap['Mobile'] : columnGap['Mobile'], 'columnGapMobile', blockName );


	const borderCSS = generateBorderCSS( attributes, 'container' );
	const borderCSSTablet = generateBorderCSS( attributes, 'container', 'tablet' );
	const borderCSSMobile = generateBorderCSS( attributes, 'container', 'mobile' );

	// If there's no border-color, set it to inherit.
	if ( ! borderCSS['border-color'] ) {
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

	if( 'alignfull' === contentWidth || 'alignwide' === contentWidth ){
		leftMarginDesktop = rightMarginDesktop = leftMarginTablet = rightMarginTablet = leftMarginMobile = rightMarginMobile  = '';
	}

	const containerFullWidth = '100vw';


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

	const videoBackgroundCSS = generateBackgroundCSS( videoBackgroundAttributes );

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
			'height': generateCSSUnit( topHeight, 'px' ),
		},
		' > .frontis-blocks-container__shape-top .frontis-blocks-container__shape-fill': {
			'fill': topColor,
		},
		' > .frontis-blocks-container__shape-bottom svg': {
			'width': 'calc( ' + bottomWidth + '% + 1.3px )',
			'height': generateCSSUnit( bottomHeight, 'px' ),
		},
		' > .frontis-blocks-container__shape-bottom .frontis-blocks-container__shape-fill': {
			'fill': bottomColor,
		},
	};

	if ( backgroundVideoFallbackImage?.url ){
		selectors[ ' .frontis-blocks-container__video-wrap video'].background = `url(${backgroundVideoFallbackImage.url}) 50% 50%;`;
		selectors[' .frontis-blocks-container__video-wrap video']['background-size'] = 'cover';
	}

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	let boxShadowPositionCSSHover = boxShadowPositionHover;

	if ( 'outset' === boxShadowPositionHover ) {
		boxShadowPositionCSSHover = '';
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
		parseInt(containerDesktopBorderWidth.top) !== '' ||
		parseInt(containerDesktopBorderWidth.right) !== '' ||
		parseInt(containerDesktopBorderWidth.bottom) !== '' ||
		parseInt(containerDesktopBorderWidth.left) !== '')) {

		containerBorderDesktopWidthCSS['border-width'] =
			`${generateCSSUnit(containerDesktopBorderWidth.top, containerBorderUnits.Desktop)} ` +
			`${generateCSSUnit(containerDesktopBorderWidth.right, containerBorderUnits.Desktop)} ` +
			`${generateCSSUnit(containerDesktopBorderWidth.bottom, containerBorderUnits.Desktop)} ` +
			`${generateCSSUnit(containerDesktopBorderWidth.left, containerBorderUnits.Desktop)}`;
	}

	// Handle Tablet Border Width
	if (containerTabBorderWidth && (
		parseInt(containerTabBorderWidth.top) !== '' ||
		parseInt(containerTabBorderWidth.right) !== '' ||
		parseInt(containerTabBorderWidth.bottom) !== '' ||
		parseInt(containerTabBorderWidth.left) !== '')) {

		containerBorderTabletWidthCSS['border-width'] =
			`${generateCSSUnit(containerTabBorderWidth.top, containerBorderUnits.Tablet)} ` +
			`${generateCSSUnit(containerTabBorderWidth.right, containerBorderUnits.Tablet)} ` +
			`${generateCSSUnit(containerTabBorderWidth.bottom, containerBorderUnits.Tablet)} ` +
			`${generateCSSUnit(containerTabBorderWidth.left, containerBorderUnits.Tablet)}`;
	}

	// Handle Mobile Border Width
	if (containerMobileBorderWidth && (
		parseInt(containerMobileBorderWidth.top) !== '' ||
		parseInt(containerMobileBorderWidth.right) !== '' ||
		parseInt(containerMobileBorderWidth.bottom) !== '' ||
		parseInt(containerMobileBorderWidth.left) !== '')) {

		containerBorderMobileWidthCSS['border-width'] =
			`${generateCSSUnit(containerMobileBorderWidth.top, containerBorderUnits.Mobile)} ` +
			`${generateCSSUnit(containerMobileBorderWidth.right, containerBorderUnits.Mobile)} ` +
			`${generateCSSUnit(containerMobileBorderWidth.bottom, containerBorderUnits.Mobile)} ` +
			`${generateCSSUnit(containerMobileBorderWidth.left, containerBorderUnits.Mobile)}`;
	}

	// Handle Desktop Border Radius - only set values if they are not 0
	if (containerDesktopBorderRadiusWidth && (
		parseInt(containerDesktopBorderRadiusWidth.top) !== '' ||
		parseInt(containerDesktopBorderRadiusWidth.right) !== '' ||
		parseInt(containerDesktopBorderRadiusWidth.bottom) !== '' ||
		parseInt(containerDesktopBorderRadiusWidth.left) !== '')) {

		containerBorderRadiusDesktopWidthCSS['border-radius'] =
			`${generateCSSUnit(containerDesktopBorderRadiusWidth.top, containerBorderRadiusUnits.Desktop)} ` +
			`${generateCSSUnit(containerDesktopBorderRadiusWidth.right, containerBorderRadiusUnits.Desktop)} ` +
			`${generateCSSUnit(containerDesktopBorderRadiusWidth.bottom, containerBorderRadiusUnits.Desktop)} ` +
			`${generateCSSUnit(containerDesktopBorderRadiusWidth.left, containerBorderRadiusUnits.Desktop)}`;
	}

	// Handle Tablet Border Radius
	if (containerTabBorderRadiusWidth && (
		parseInt(containerTabBorderRadiusWidth.top) !== '' ||
		parseInt(containerTabBorderRadiusWidth.right) !== '' ||
		parseInt(containerTabBorderRadiusWidth.bottom) !== '' ||
		parseInt(containerTabBorderRadiusWidth.left) !== '')) {

		containerBorderRadiusTabletWidthCSS['border-radius'] =
			`${generateCSSUnit(containerTabBorderRadiusWidth.top, containerBorderRadiusUnits.Tablet)} ` +
			`${generateCSSUnit(containerTabBorderRadiusWidth.right, containerBorderRadiusUnits.Tablet)} ` +
			`${generateCSSUnit(containerTabBorderRadiusWidth.bottom, containerBorderRadiusUnits.Tablet)} ` +
			`${generateCSSUnit(containerTabBorderRadiusWidth.left, containerBorderRadiusUnits.Tablet)}`;
	}

	// Handle Mobile Border Radius
	if (containerMobileBorderRadiusWidth && (
		parseInt(containerMobileBorderRadiusWidth.top) !== '' ||
		parseInt(containerMobileBorderRadiusWidth.right) !== '' ||
		parseInt(containerMobileBorderRadiusWidth.bottom) !== '' ||
		parseInt(containerMobileBorderRadiusWidth.left) !== '')) {

		containerBorderRadiusMobileWidthCSS['border-radius'] =
			`${generateCSSUnit(containerMobileBorderRadiusWidth.top, containerBorderRadiusUnits.Mobile)} ` +
			`${generateCSSUnit(containerMobileBorderRadiusWidth.right, containerBorderRadiusUnits.Mobile)} ` +
			`${generateCSSUnit(containerMobileBorderRadiusWidth.bottom, containerBorderRadiusUnits.Mobile)} ` +
			`${generateCSSUnit(containerMobileBorderRadiusWidth.left, containerBorderRadiusUnits.Mobile)}`;
	}

	const isAllPaddingEmpty = () => {
		const directions = ['top', 'bottom', 'left', 'right'];
		return directions.every(direction => 
			containerDesktopPadding[direction] === '' &&
			containerTabletPadding[direction] === '' &&
			containerMobilePadding[direction] === ''
		);
	};
	
	// Handle Desktop Padding
	let desktopContainerPadding = {};
	if (isAllPaddingEmpty()) {
		desktopContainerPadding = {
			'padding': generateCSSUnit(containerGlobalPadding.Desktop, containerPaddingUnits['Desktop']),
		}
	} else {
		desktopContainerPadding = {
			'padding-top': generateCSSUnit(containerDesktopPadding.top, containerPaddingUnits['Desktop']),
			'padding-bottom': generateCSSUnit(containerDesktopPadding.bottom, containerPaddingUnits['Desktop']),
			'padding-left': generateCSSUnit(containerDesktopPadding.left, containerPaddingUnits['Desktop']),
			'padding-right': generateCSSUnit(containerDesktopPadding.right, containerPaddingUnits['Desktop']),
		}
	}
	let desktopChildContainerPadding = {
		'padding-top': generateCSSUnit(containerDesktopPadding.top, containerPaddingUnits['Desktop']),
		'padding-bottom': generateCSSUnit(containerDesktopPadding.bottom, containerPaddingUnits['Desktop']),
		'padding-left': generateCSSUnit(containerDesktopPadding.left, containerPaddingUnits['Desktop']),
		'padding-right': generateCSSUnit(containerDesktopPadding.right, containerPaddingUnits['Desktop']),
	}
	
	// Handle Tablet Padding
	let tabletContainerPadding = {};
	if (isAllPaddingEmpty()) {
		tabletContainerPadding = {
			'padding': generateCSSUnit(containerGlobalPadding.Tablet, containerPaddingUnits['Tablet']),
		}
	} else {
		tabletContainerPadding = {
			'padding-top': generateCSSUnit(containerTabletPadding.top, containerPaddingUnits['Tablet']),
			'padding-bottom': generateCSSUnit(containerTabletPadding.bottom, containerPaddingUnits['Tablet']),
			'padding-left': generateCSSUnit(containerTabletPadding.left, containerPaddingUnits['Tablet']),
			'padding-right': generateCSSUnit(containerTabletPadding.right, containerPaddingUnits['Tablet']),
		}
	}
	let tabletChildContainerPadding = {
		'padding-top': generateCSSUnit(containerTabletPadding.top, containerPaddingUnits['Tablet']),
		'padding-bottom': generateCSSUnit(containerTabletPadding.bottom, containerPaddingUnits['Tablet']),
		'padding-left': generateCSSUnit(containerTabletPadding.left, containerPaddingUnits['Tablet']),
		'padding-right': generateCSSUnit(containerTabletPadding.right, containerPaddingUnits['Tablet']),
	}
	
	// Handle Mobile Padding
	let mobileContainerPadding = {};
	if (isAllPaddingEmpty()) {
		mobileContainerPadding = {
			'padding': generateCSSUnit(containerGlobalPadding.Mobile, containerPaddingUnits['Mobile']),
		}
	} else {
		mobileContainerPadding = {
			'padding-top': generateCSSUnit(containerMobilePadding.top, containerPaddingUnits['Mobile']),
			'padding-bottom': generateCSSUnit(containerMobilePadding.bottom, containerPaddingUnits['Mobile']),
			'padding-left': generateCSSUnit(containerMobilePadding.left, containerPaddingUnits['Mobile']),
			'padding-right': generateCSSUnit(containerMobilePadding.right, containerPaddingUnits['Mobile']),
		}
	}
	let mobileChildContainerPadding = {
		'padding-top': generateCSSUnit(containerMobilePadding.top, containerPaddingUnits['Mobile']),
		'padding-bottom': generateCSSUnit(containerMobilePadding.bottom, containerPaddingUnits['Mobile']),
		'padding-left': generateCSSUnit(containerMobilePadding.left, containerPaddingUnits['Mobile']),
		'padding-right': generateCSSUnit(containerMobilePadding.right, containerPaddingUnits['Mobile']),
	}
	

	/**start margin */
	let containerMarginCSS = {};

	if (parseInt(containerDesktopMargin.top) !== '') {
		containerMarginCSS['margin-top'] = generateCSSUnit(containerDesktopMargin.top, containerMarginUnits['Desktop']);
	}

	if (parseInt(containerDesktopMargin.bottom) !== '') {
		containerMarginCSS['margin-bottom'] = generateCSSUnit(containerDesktopMargin.bottom, containerMarginUnits['Desktop']);
	}

	if (parseInt(containerDesktopMargin.left) !== '') {
		containerMarginCSS['margin-left'] = generateCSSUnit(containerDesktopMargin.left, containerMarginUnits['Desktop']);
	}

	if (parseInt(containerDesktopMargin.right) !== '') {
		containerMarginCSS['margin-right'] = generateCSSUnit(containerDesktopMargin.right, containerMarginUnits['Desktop']);
	}

	let containerTabletMarginCSS = {};
	if (parseInt(containerTabletMargin.top) !== '') {
		containerTabletMarginCSS['margin-top'] = generateCSSUnit(containerTabletMargin.top, containerMarginUnits['Tablet']);
	}

	if (parseInt(containerTabletMargin.bottom) !== '') {
		containerTabletMarginCSS['margin-bottom'] = generateCSSUnit(containerTabletMargin.bottom, containerMarginUnits['Tablet']);
	}

	if (parseInt(containerTabletMargin.left) !== '') {
		containerTabletMarginCSS['margin-left'] = generateCSSUnit(containerTabletMargin.left, containerMarginUnits['Tablet']);
	}

	if (parseInt(containerTabletMargin.right) !== '') {
		containerTabletMarginCSS['margin-right'] = generateCSSUnit(containerTabletMargin.right, containerMarginUnits['Tablet']);
	}

	let containerMobileMarginCSS = {};
	if (parseInt(containerMobileMargin.top) !== '') {
		containerMobileMarginCSS['margin-top'] = generateCSSUnit(containerMobileMargin.top, containerMarginUnits['Mobile']);
	}

	if (parseInt(containerMobileMargin.bottom) !== '') {
		containerMobileMarginCSS['margin-bottom'] = generateCSSUnit(containerMobileMargin.bottom, containerMarginUnits['Mobile']);
	}

	if (parseInt(containerMobileMargin.left) !== '') {
		containerMobileMarginCSS['margin-left'] = generateCSSUnit(containerMobileMargin.left, containerMarginUnits['Mobile']);
	}

	if (parseInt(containerMobileMargin.right) !== '') {
		containerMobileMarginCSS['margin-right'] = generateCSSUnit(containerMobileMargin.right, containerMarginUnits['Mobile']);
	}
	/**end margin */


	// Get container styles for desktop for FB Container
	const getContainerStylesDesktop  = {
		...desktopContainerPadding,
		...containerMarginCSS,
		'min-height': generateCSSUnit( minHeight['Desktop'], minHeightUnits['Desktop'] ),

		// Position related properties
		'position': containerPositionType === 'default' ? 'relative' : containerPositionType,
		'width': containerPositionType !== 'default' && containerPositionType !== 'relative' ? '100%' : undefined,

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
		'box-shadow': containerGlobalBoxShadowCssValue ? containerGlobalBoxShadowCssValue : undefined,
		'order': 'custom' === orderDesktop ? customOrderDesktop : orderDesktop,

		...getBackgroundNormalStyles( 'Desktop' ),

	};
	const getChildContainerStylesDesktop  = {
		...desktopChildContainerPadding,
		...containerMarginCSS,
		'min-height': generateCSSUnit( minHeight['Desktop'], minHeightUnits['Desktop'] ),

		// Position related properties
		'position': containerPositionType === 'default' ? 'relative' : containerPositionType,
		'width': containerPositionType !== 'default' && containerPositionType !== 'relative' ? '100%' : undefined,

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
		'box-shadow': containerGlobalBoxShadowCssValue ? containerGlobalBoxShadowCssValue : undefined,
		'order': 'custom' === orderDesktop ? customOrderDesktop : orderDesktop,

		...getBackgroundNormalStyles( 'Desktop' ),
	};

	// Get container styles for tablet for FB Container
	const getContainerStylesTablet = {
		...tabletContainerPadding,
		...containerTabletMarginCSS,
		'min-height': generateCSSUnit( minHeight['Tablet'], minHeightUnits['Tablet'] ),
		'order': 'custom' === orderTablet ? customOrderTablet : orderTablet,

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

		// Border
		...containerBorderTabletWidthCSS,
		...containerBorderRadiusTabletWidthCSS,
	};
	const getChildContainerStylesTablet = {
		...tabletChildContainerPadding,
		...containerTabletMarginCSS,
		'min-height': generateCSSUnit( minHeight['Tablet'], minHeightUnits['Tablet'] ),
		'order': 'custom' === orderTablet ? customOrderTablet : orderTablet,

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

		// Border
		...containerBorderTabletWidthCSS,
		...containerBorderRadiusTabletWidthCSS,
	};

	// Get container styles for mobile for FB Container
	const getContainerStylesMobile = {
		...mobileContainerPadding,
		...containerMobileMarginCSS,
		'min-height': generateCSSUnit( minHeight['Mobile'], minHeightUnits['Mobile'] ),
		...borderCSS,
		'order': 'custom' === orderMobile ? customOrderMobile : orderMobile,

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

		// Border
		...containerBorderMobileWidthCSS,
		...containerBorderRadiusMobileWidthCSS,
	};
	const getChildContainerStylesMobile = {
		...mobileChildContainerPadding,
		...containerMobileMarginCSS,
		'min-height': generateCSSUnit( minHeight['Mobile'], minHeightUnits['Mobile'] ),
		...borderCSS,
		'order': 'custom' === orderMobile ? customOrderMobile : orderMobile,

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

		// Border
		...containerBorderMobileWidthCSS,
		...containerBorderRadiusMobileWidthCSS,
	};

	boxShadowColorHover = boxShadowColorHover ? boxShadowColorHover : '';

	let containerFlexSelector =
		'.wp-block-frontis-blocks-container > .frontis-blocks-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout';
	if ( ! isBlockRootParent) {
		containerFlexSelector =
			'.wp-block-frontis-blocks-container > .block-editor-inner-blocks > .block-editor-block-list__layout';
	}

	const gbsWidthSelector = gbsSelector ? gbsSelector : `#block-${ clientId }`;
	const widthSelectorsDesktop = {};
	const widthSelectorsTablet = {};
	const widthSelectorsMobile = {};

	selectors[ containerFlexSelector ] = {
		'min-height': generateCSSUnit( minHeight['Desktop'], minHeightUnits['Desktop'] ),
	}

	selectors[ '.block-editor-block-list__block' ] = {
		'min-height': generateCSSUnit( minHeight['Desktop'], minHeightUnits['Desktop'] ),
	}

	if( containerLayout === 'flex' ){
		selectors[ containerFlexSelector ] = {
			'display': 'flex',
			'flex-direction': containerDirection['Desktop'],
			'align-items': containerAlignItems['Desktop'],
			'justify-content': containerJustify['Desktop'],
			'flex-wrap': containerWrap['Desktop'],
			'align-content': alignContentDesktop,
			'row-gap': generateCSSUnit( rowGapDesktopFallback, rowGapUnits['Desktop'] ),
			'column-gap': generateCSSUnit( columnGapDesktopFallback, columnGapUnits['Desktop'] ),
			...selectors[ containerFlexSelector ],
		};
		widthSelectorsDesktop[`.wp-block-frontis-blocks-container.frontis-blocks-block-block-${clientId} .frontis-blocks-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > div`] = {
			'width': containerChildrenWidth === 'full' ? '100%' : containerChildrenWidth === 'auto' ? 'auto !important' : '',
			'height': containerEqualHeight === true ? '100%' : '',
		}
		widthSelectorsDesktop[`.wp-block-frontis-blocks-container.child.frontis-blocks-block-block-${clientId} > .block-editor-inner-blocks > .block-editor-block-list__layout > div`] = {
			'width': containerChildrenWidth === 'full' ? '100%' : containerChildrenWidth === 'auto' ? 'auto !important' : '',
			'height': containerEqualHeight === true ? '100%' : '',
		}
	}
	if( containerLayout === 'grid' ){
		selectors[ containerFlexSelector ] = {
			'display': 'grid',
			'grid-template-columns': containerColumnsItemList['Desktop'].map(item => `${item.type === 'auto' ? 'auto' : item.type === 'min-max' ? `minmax(${item.min}${item.minUnits}, ${item.max}${item.maxUnits})` : item.type === 'custom' ? `minmax(1px, ${item.width}${item.widthUnits})` : ''}`).join(' '),
			'grid-template-rows': containerRowsItemList['Desktop'].map(item => `${item.type === 'auto' ? 'auto' : item.type === 'min-max' ? `minmax(${item.min}${item.minUnits}, ${item.max}${item.maxUnits})` : item.type === 'custom' ? `minmax(1px, ${item.width}${item.widthUnits})` : ''}`).join(' '),
			'align-items': containerGridAlignItems['Desktop'],
			'justify-items': containerGridJustifyItems['Desktop'],
			'row-gap': generateCSSUnit( rowGapDesktopFallback, rowGapUnits['Desktop'] ),
			'column-gap': generateCSSUnit( columnGapDesktopFallback, columnGapUnits['Desktop'] ),
			...selectors[ containerFlexSelector ],
		};
		widthSelectorsDesktop[`.wp-block-frontis-blocks-container.frontis-blocks-block-block-${clientId} .frontis-blocks-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > div`] = {
			'max-width': 'unset !important',
			'height': containerEqualHeight === true ? '100%' : '',
		}
		widthSelectorsDesktop[`.wp-block-frontis-blocks-container.child.frontis-blocks-block-block-${clientId} > .block-editor-inner-blocks > .block-editor-block-list__layout > div`] = {
			'max-width': 'unset !important',
			'height': containerEqualHeight === true ? '100%' : '',
		}
	}

	widthSelectorsDesktop[ `.is-root-container > .block-editor-block-list__block .block-editor-block-list__block${ gbsWidthSelector } ` ] = {
		'max-width': generateCSSUnit( widthDesktopFallback, customWidthUnits['Desktop'] ),
		'width': '100%',
	};

	widthSelectorsTablet[ `.is-root-container > .block-editor-block-list__block .block-editor-block-list__block${ gbsWidthSelector } ` ] = {
		'max-width': generateCSSUnit( widthTabletFallback, customWidthUnits['Tablet'] ),
		'width': '100%',
	};

	widthSelectorsMobile[ `.is-root-container > .block-editor-block-list__block .block-editor-block-list__block${ gbsWidthSelector } ` ] = {
		'max-width': generateCSSUnit( widthMobileFallback, customWidthUnits['Mobile'] ),
		'width': '100%',
	};


	if ( (containerType === 'boxed' || containerTypeFull === 'boxed') && containerType !== 'custom' ) {
		widthSelectorsDesktop[
			`.block-editor-block-list__block.wp-block-frontis-blocks-container${ gbsWidthSelector } > .frontis-blocks-container-inner-blocks-wrap`
			] = {
			'--inner-content-custom-width': `min(${ containerFullWidth },${ innerContentCustomWidthDesktopFallback }${ fullWidthContentBoxedWidthUnits[deviceType] })`,
			'max-width': 'var(--inner-content-custom-width)',
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto',
		};

		widthSelectorsTablet[`.block-editor-block-list__block.frontis-blocks-editor-preview-mode-tablet.wp-block-frontis-blocks-container${ gbsWidthSelector } > .frontis-blocks-container-inner-blocks-wrap`] = {
			'--inner-content-custom-width' : `min(${ containerFullWidth },${ innerContentCustomWidthTablet || innerContentCustomWidthDesktopFallback }${ innerContentCustomWidthTypeTablet })`,
			'max-width' : 'var(--inner-content-custom-width)',
			'width' :'100%',
			'margin-left': 'auto',
			'margin-right': 'auto'
		};

		widthSelectorsMobile[
			`.block-editor-block-list__block.frontis-blocks-editor-preview-mode-mobile.wp-block-frontis-blocks-container${ gbsWidthSelector } > .frontis-blocks-container-inner-blocks-wrap`
			] = {
			'--inner-content-custom-width': `min(${ containerFullWidth },${
				innerContentCustomWidthMobile || innerContentCustomWidthTablet || innerContentCustomWidthDesktopFallback
			}${ innerContentCustomWidthTypeMobile })`,
			'max-width': 'var(--inner-content-custom-width)',
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto',
		};
	}

	const tablet_selectors = {
		[ containerFlexSelector ]: {
			'flex-direction': containerDirection['Tablet'],
			'align-items': containerAlignItems['Tablet'],
			'justify-content': containerJustify['Tablet'],
			'flex-wrap': containerWrap['Tablet'],
			'align-content': alignContentTablet,
			'row-gap': generateCSSUnit( rowGapTabletFallback, rowGapUnits['Tablet'] ),
			'column-gap': generateCSSUnit( columnGapTabletFallback, columnGapUnits['Tablet'] ),
			'min-height': generateCSSUnit( minHeight['Tablet'], minHeightUnits['Tablet'] ),
		},
		'.block-editor-block-list__block': {
			'min-height': generateCSSUnit( minHeight['Tablet'], minHeightUnits['Tablet'] ),
			'flex-direction': containerDirection['Tablet'],
			'align-items': containerAlignItems['Tablet'],
			'justify-content': containerJustify['Tablet'],
			'flex-wrap': containerWrap['Tablet'],
			'align-content': alignContentTablet,
		},
		' > .frontis-blocks-container__shape-top svg': {
			'height': generateCSSUnit( topHeightTablet, 'px' ),
		},
		' > .frontis-blocks-container__shape-bottom svg': {
			'height': generateCSSUnit( bottomHeightTablet, 'px' ),
		},
	};

	const mobile_selectors = {
		// Handeling Edge case for mobile.
		'.wp-block-frontis-blocks-container .block-editor-inner-blocks .block-editor-block-list__layout .wp-block[data-type="core/quote"]' : {
			'margin-inline-start': '0px',
			'margin-inline-end': '0px',
		},
		[ containerFlexSelector ]: {
			'flex-direction': containerDirection['Mobile'],
			'align-items': containerAlignItems['Mobile'],
			'justify-content': containerJustify['Mobile'],
			'flex-wrap': containerWrap['Mobile'],
			'align-content': alignContentMobile,
			'row-gap': generateCSSUnit( rowGapMobileFallback, rowGapUnits['Mobile'] ),
			'column-gap': generateCSSUnit( columnGapMobileFallback, columnGapUnits['Mobile'] ),
			'min-height': generateCSSUnit( minHeight['Mobile'], minHeightUnits['Mobile'] ),
		},
		'.block-editor-block-list__block': {
			'min-height': generateCSSUnit( minHeight['Mobile'], minHeightUnits['Mobile'] ),
			'flex-direction': containerDirection['Mobile'],
			'align-items': containerAlignItems['Mobile'],
			'justify-content': containerJustify['Mobile'],
			'flex-wrap': containerWrap['Mobile'],
			'align-content': alignContentMobile,
		},
		' > .frontis-blocks-container__shape-top svg': {
			'height': generateCSSUnit( topHeightMobile, 'px' ),
		},
		' > .frontis-blocks-container__shape-bottom svg': {
			'height': generateCSSUnit( bottomHeightMobile, 'px' ),
		},
	};

	if( containerLayout === 'flex' ){
		tablet_selectors[ containerFlexSelector ] = {
			'flex-direction': containerDirection['Tablet'],
			'align-items': containerAlignItems['Tablet'],
			'justify-content': containerJustify['Tablet'],
			'flex-wrap': containerWrap['Tablet'],
			'align-content': alignContentTablet,
			'row-gap': generateCSSUnit( rowGapTabletFallback, rowGapUnits['Tablet'] ),
			'column-gap': generateCSSUnit( columnGapTabletFallback, columnGapUnits['Tablet'] ),
			...tablet_selectors[ containerFlexSelector ],
		};
		widthSelectorsTablet[`.wp-block-frontis-blocks-container.frontis-blocks-block-block-${clientId} .frontis-blocks-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > div`] = {
			'height': containerEqualHeight === true ? '100%' : '',
		}
		widthSelectorsTablet[`.wp-block-frontis-blocks-container.child.frontis-blocks-block-block-${clientId} > .block-editor-inner-blocks > .block-editor-block-list__layout > div`] = {
			'height': containerEqualHeight === true ? '100%' : '',
		}
	}
	if( containerLayout === 'grid' ){
		tablet_selectors[ containerFlexSelector ] = {
			'grid-template-columns': containerColumnsItemList['Tablet'].map(item => `${item.type === 'auto' ? 'auto' : item.type === 'min-max' ? `minmax(${item.min}${item.minUnits}, ${item.max}${item.maxUnits})` : item.type === 'custom' ? `minmax(1px, ${item.width}${item.widthUnits})` : ''}`).join(' '),
			'grid-template-rows': containerRowsItemList['Tablet'].map(item => `${item.type === 'auto' ? 'auto' : item.type === 'min-max' ? `minmax(${item.min}${item.minUnits}, ${item.max}${item.maxUnits})` : item.type === 'custom' ? `minmax(1px, ${item.width}${item.widthUnits})` : ''}`).join(' '),
			'align-items': containerGridAlignItems['Tablet'],
			'justify-items': containerGridJustifyItems['Tablet'],
			'row-gap': generateCSSUnit( rowGapTabletFallback, rowGapUnits['Tablet'] ),
			'column-gap': generateCSSUnit( columnGapTabletFallback, columnGapUnits['Tablet'] ),
			...tablet_selectors[ containerFlexSelector ],
		};
		widthSelectorsTablet[`.wp-block-frontis-blocks-container.frontis-blocks-block-block-${clientId} .frontis-blocks-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > div`] = {
			'height': containerEqualHeight === true ? '100%' : '',
		}
		widthSelectorsTablet[`.wp-block-frontis-blocks-container.child.frontis-blocks-block-block-${clientId} > .block-editor-inner-blocks > .block-editor-block-list__layout > div`] = {
			'height': containerEqualHeight === true ? '100%' : '',
		}
	}

	if( containerLayout === 'flex' ){
		mobile_selectors[ containerFlexSelector ] = {
			'flex-direction': containerDirection['Mobile'],
			'align-items': containerAlignItems['Mobile'],
			'justify-content': containerJustify['Mobile'],
			'flex-wrap': containerWrap['Mobile'],
			'align-content': alignContentMobile,
			'row-gap': generateCSSUnit( rowGapMobileFallback, rowGapUnits['Mobile'] ),
			'column-gap': generateCSSUnit( columnGapMobileFallback, columnGapUnits['Mobile'] ),
			...mobile_selectors[ containerFlexSelector ],
		};
		widthSelectorsMobile[`.wp-block-frontis-blocks-container.frontis-blocks-block-block-${clientId} .frontis-blocks-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > div`] = {
			'height': containerEqualHeight === true ? '100%' : '',
		}
		widthSelectorsMobile[`.wp-block-frontis-blocks-container.child.frontis-blocks-block-block-${clientId} > .block-editor-inner-blocks > .block-editor-block-list__layout > div`] = {
			'height': containerEqualHeight === true ? '100%' : '',
		}
	}
	if( containerLayout === 'grid' ){
		mobile_selectors[ containerFlexSelector ] = {
			'grid-template-columns': containerColumnsItemList['Mobile'].map(item => `${item.type === 'auto' ? 'auto' : item.type === 'min-max' ? `minmax(${item.min}${item.minUnits}, ${item.max}${item.maxUnits})` : item.type === 'custom' ? `minmax(1px, ${item.width}${item.widthUnits})` : ''}`).join(' '),
			'grid-template-rows': containerRowsItemList['Mobile'].map(item => `${item.type === 'auto' ? 'auto' : item.type === 'min-max' ? `minmax(${item.min}${item.minUnits}, ${item.max}${item.maxUnits})` : item.type === 'custom' ? `minmax(1px, ${item.width}${item.widthUnits})` : ''}`).join(' '),
			'align-items': containerGridAlignItems['Mobile'],
			'justify-items': containerGridJustifyItems['Mobile'],
			'row-gap': generateCSSUnit( rowGapMobileFallback, rowGapUnits['Mobile'] ),
			'column-gap': generateCSSUnit( columnGapMobileFallback, columnGapUnits['Mobile'] ),
			...mobile_selectors[ containerFlexSelector ],
		};
		widthSelectorsMobile[`.wp-block-frontis-blocks-container.frontis-blocks-block-block-${clientId} .frontis-blocks-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > div`] = {
			'height': containerEqualHeight === true ? '100%' : '',
		}
		widthSelectorsMobile[`.wp-block-frontis-blocks-container.child.frontis-blocks-block-block-${clientId} > .block-editor-inner-blocks > .block-editor-block-list__layout > div`] = {
			'height': containerEqualHeight === true ? '100%' : '',
		}
	}

	// Display grid css.
	if ( isLayoutGrid ) {
		// Grid style settings for desktop.
		const gridStyles = {};

		// Set column and row gap css. for gap we will use existing rowGap and columnGap attributes.
		gridStyles['grid-column-gap'] = generateCSSUnit( columnGapDesktopFallback, columnGapType );
		gridStyles['grid-row-gap'] = generateCSSUnit( rowGapDesktopFallback, rowGapType );

		selectors[ containerFlexSelector ] = { ...gridStyles, ...gridCssObject( attributes, 'Desktop' ) };

		// Grid style settings for tablet.
		const gridStylesTablet = {};

		// Set column and row gap css. for gap we will use existing rowGap and columnGap attributes.
		gridStylesTablet['grid-column-gap'] = generateCSSUnit( columnGapTablet, columnGapTypeTablet );
		gridStylesTablet['grid-row-gap'] = generateCSSUnit( rowGapTablet, rowGapTypeTablet );

		tablet_selectors[ containerFlexSelector ] = { ...gridStylesTablet, ...gridCssObject( attributes, 'Tablet' ) };

		// Grid style settings for mobile.
		const gridStylesMobile = {};

		// Set column and row gap css. for gap we will use existing rowGap and columnGap attributes.
		gridStylesMobile['grid-column-gap'] = generateCSSUnit( columnGapMobile, columnGapTypeMobile );
		gridStylesMobile['grid-row-gap'] = generateCSSUnit( rowGapMobile, rowGapTypeMobile );

		mobile_selectors[ containerFlexSelector ] = { ...gridStylesMobile, ...gridCssObject( attributes, 'Mobile' ) };
	}


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


	if ( 'video' === backgroundType ) {
		// selectors[ ' .frontis-blocks-container__video-wrap' ] = {
		// 	...videoBackgroundCSS,
		// 	...borderCSS,
		// };
		// tablet_selectors[ ' .frontis-blocks-container__video-wrap' ] = {
		// 	...borderCSSTablet,
		// };
		// mobile_selectors[ ' .frontis-blocks-container__video-wrap' ] = {
		// 	...borderCSSMobile,
		// };
		// selectors[ '.wp-block-frontis-blocks-container' ] = {
		// 	...desktopContainerPadding,
		// 	'margin-top': generateCSSUnit( containerDesktopMargin.top, containerMarginUnits['Desktop'], true ),
		// 	'margin-bottom': generateCSSUnit( containerDesktopMargin.bottom, containerMarginUnits['Desktop'], true ),
		// 	'margin-left': generateCSSUnit( containerDesktopMargin.left, containerMarginUnits['Desktop'], true ),
		// 	'margin-right': generateCSSUnit( containerDesktopMargin.right, containerMarginUnits['Desktop'], true ),
		// 	'box-shadow':
		// 		generateCSSUnit( boxShadowHOffset, 'px' ) +
		// 		' ' +
		// 		generateCSSUnit( boxShadowVOffset, 'px' ) +
		// 		' ' +
		// 		generateCSSUnit( boxShadowBlur, 'px' ) +
		// 		' ' +
		// 		generateCSSUnit( boxShadowSpread, 'px' ) +
		// 		' ' +
		// 		boxShadowColor +
		// 		' ' +
		// 		boxShadowPositionCSS,
		// 	'min-height': generateCSSUnit(  minHeight['Desktop'], minHeightUnits['Desktop']  ),
		// 	'overflow': overflow,
		// };
		// tablet_selectors[ '.wp-block-frontis-blocks-container' ] = {
		// 	...tabletContainerPadding,
		// 	'margin-top': generateCSSUnit( containerTabletMargin.top, containerMarginUnits['Tablet'], true ),
		// 	'margin-bottom': generateCSSUnit( containerTabletMargin.bottom, containerMarginUnits['Tablet'], true ),
		// 	'min-height': generateCSSUnit( minHeight['Tablet'], minHeightUnits['Tablet'] ),
		// };
		// mobile_selectors[ '.wp-block-frontis-blocks-container' ] = {
		// 	...mobileContainerPadding,
		// 	'margin-top': generateCSSUnit( containerMobileMargin.top, containerMarginUnits['Mobile'], true ),
		// 	'margin-bottom': generateCSSUnit( containerMobileMargin.bottom, containerMarginUnits['Mobile'], true ),
		// 	'min-height': generateCSSUnit( minHeight['Mobile'], minHeightUnits['Mobile'] ),
		// };
		// selectors[ '.wp-block-frontis-blocks-container:hover .frontis-blocks-container__video-wrap' ] = {
		// 	'border-color': containerBorderHColor,
		// 	'box-shadow': '',
		// };
	} else {
		if(isBlockRootParent) {
			selectors[ '.wp-block-frontis-blocks-container' ] = getContainerStylesDesktop;
			tablet_selectors[ '.wp-block-frontis-blocks-container' ] = getContainerStylesTablet;
			mobile_selectors[ '.wp-block-frontis-blocks-container' ] = getContainerStylesMobile;
		} else {
			selectors[ '.wp-block-frontis-blocks-container' ] = getChildContainerStylesDesktop;
			tablet_selectors[ '.wp-block-frontis-blocks-container' ] = getChildContainerStylesTablet;
			mobile_selectors[ '.wp-block-frontis-blocks-container' ] = getChildContainerStylesMobile;
		}
		
		selectors[ '.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container)'] = {
			'margin-left': generateCSSUnit( containerDesktopMargin.left, containerMarginUnits['Desktop'] ) + ' !important',
			'margin-right': generateCSSUnit( containerDesktopMargin.right, containerMarginUnits['Desktop'] ) + ' !important',
		}

		selectors[ '.wp-block-frontis-blocks-container:hover' ] = {
			...getBackgroundHoverStyles('Desktop'),
		};

		tablet_selectors[ '.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container)'] = {
			'margin-left': generateCSSUnit( containerTabletMargin.left, containerMarginUnits['Tablet'] ) + ' !important',
			'margin-right': generateCSSUnit( containerTabletMargin.right, containerMarginUnits['Tablet'] ) + ' !important',
		}
		tablet_selectors[ '.wp-block-frontis-blocks-container:hover' ] = {
			...getBackgroundHoverStyles('Tablet'),
		};

		mobile_selectors[ '.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container)'] = {
			'margin-left': generateCSSUnit( containerMobileMargin.left, containerMarginUnits['Mobile'] ) + ' !important',
			'margin-right': generateCSSUnit( containerMobileMargin.right, containerMarginUnits['Mobile'] ) + ' !important',
		}
		mobile_selectors[ '.wp-block-frontis-blocks-container:hover' ] = {
			...getBackgroundHoverStyles('Mobile'),
		};

		selectors[ '.wp-block-frontis-blocks-container:after' ] = {
			...containerBgOverlayDesktop,
		};

		selectors[ '.wp-block-frontis-blocks-container:hover:after' ] = {
			...containerBgOverlayDesktopHover,
		};

		tablet_selectors[ '.wp-block-frontis-blocks-container:after' ] = {
			...containerBgOverlayTablet,
		};

		tablet_selectors[ '.wp-block-frontis-blocks-container:hover:after' ] = {
			...containerBgOverlayTabletHover,
		};

		mobile_selectors[ '.wp-block-frontis-blocks-container:after' ] = {
			...containerBgOverlayMobile,
		};
		mobile_selectors[ '.wp-block-frontis-blocks-container:hover:after' ] = {
			...containerBgOverlayMobileHover,
		};

	}

	if ( 'custom' === containerType ) {
		selectors[ '.block-editor-block-list__block' ][ 'max-width' ] = generateCSSUnit(
			containerCustomWidth['Desktop'],
			containerCustomWidthUnits['Desktop']
		);

		tablet_selectors[ '.block-editor-block-list__block' ][ 'max-width' ] = generateCSSUnit(
			containerCustomWidth['Tablet'],
			containerCustomWidthUnits['Tablet']
		);

		mobile_selectors[ '.block-editor-block-list__block' ][ 'max-width' ] = generateCSSUnit(
			containerCustomWidth['Mobile'],
			containerCustomWidthUnits['Mobile']
		);
	}

	const autoWidth = { 'width': 'auto' };
	const setWidth = { 'width': '100%' };
	const containerSelector = '.wp-block-frontis-blocks-container > .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block';
	const containerSelector2 = '.wp-block-frontis-blocks-container > .frontis-blocks-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block';

	// Add auto width to the inner blocks in desktop.
	if( directionDesktop ){
		if( 'auto' === childrenWidthDesktop ) {
			selectors[ containerSelector ] = autoWidth;
			selectors[ containerSelector2 ] = autoWidth;
		}
	}

	// Add auto width to the inner blocks in tablet.
	if( directionTablet ){
		if( 'auto' === childrenWidthTablet ) {
			tablet_selectors[ containerSelector ] = autoWidth;
			tablet_selectors[ containerSelector2 ] = autoWidth;
		}else{
			tablet_selectors[ containerSelector ] = setWidth;
			tablet_selectors[ containerSelector2 ] = setWidth;
		}
	}

	// Add auto width to the inner blocks in mobile.
	if( directionMobile ){
		if( 'auto' === childrenWidthMobile ) {
			mobile_selectors[ containerSelector ] = autoWidth;
			mobile_selectors[ containerSelector2 ] = autoWidth;
		} else{
			mobile_selectors[ containerSelector ] = setWidth;
			mobile_selectors[ containerSelector2 ] = setWidth;
		}
	}

	// Add css grid children settings.
	if( isGridCssInParent ){
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

		if( 'advance' === gridSettingType ){
			// For desktop.
			if( gridColumnStart && gridColumnEnd ){
				gridChildrenCSS['grid-column'] = `${gridColumnStart} / ${gridColumnEnd}`;
			}

			if( gridRowStart && gridRowEnd ){
				gridChildrenCSS['grid-row'] = `${gridRowStart} / ${gridRowEnd}`;
			}

			// For tablet.
			if( gridColumnStartTablet && gridColumnEndTablet ){
				gridChildrenCSSTablet['grid-column'] = `${gridColumnStartTablet} / ${gridColumnEndTablet}`;
			}

			if( gridRowStartTablet && gridRowEndTablet ){
				gridChildrenCSSTablet['grid-row'] = `${gridRowStartTablet} / ${gridRowEndTablet}`;
			}

			// For mobile.
			if( gridColumnStartMobile && gridColumnEndMobile ){
				gridChildrenCSSMobile['grid-column'] = `${gridColumnStartMobile} / ${gridColumnEndMobile}`;
			}

			if( gridRowStartMobile && gridRowEndMobile ){
				gridChildrenCSSMobile['grid-row'] = `${gridRowStartMobile} / ${gridRowEndMobile}`;
			}
		}else{
			// For desktop.
			if( gridColumnSpan ){
				gridChildrenCSS['grid-column'] = `span ${gridColumnSpan}`;
			}

			if( gridRowSpan ){
				gridChildrenCSS['grid-row'] = `span ${gridRowSpan}`;
			}

			// For tablet.
			if( gridColumnSpanTablet ){
				gridChildrenCSSTablet['grid-column'] = `span ${gridColumnSpanTablet}`;
			}

			if( gridRowSpanTablet ){
				gridChildrenCSSTablet['grid-row'] = `span ${gridRowSpanTablet}`;
			}

			// For mobile.
			if( gridColumnSpanMobile ){
				gridChildrenCSSMobile['grid-column'] = `span ${gridColumnSpanMobile}`;
			}

			if( gridRowSpanMobile ){
				gridChildrenCSSMobile['grid-row'] = `span ${gridRowSpanMobile}`;
			}
		}



		// For desktop.
		if( gridAlignItems ){
			gridChildrenCSS['align-self'] = gridAlignItems;
		}

		if( gridJustifyItems ){
			gridChildrenCSS['justify-self'] = gridJustifyItems;
		}

		// For tablet.
		if( gridAlignItemsTablet ){
			gridChildrenCSSTablet['align-self'] = gridAlignItemsTablet;
		}

		if( gridJustifyItemsTablet ){
			gridChildrenCSSTablet['justify-self'] = gridJustifyItemsTablet;
		}

		// For mobile.
		if( gridAlignItemsMobile ){
			gridChildrenCSSMobile['align-self'] = gridAlignItemsMobile;
		}

		if( gridJustifyItemsMobile ){
			gridChildrenCSSMobile['justify-self'] = gridJustifyItemsMobile;
		}

		widthSelectorsDesktop[ '.block-editor-block-list__layout > #block-' + clientId ] = gridChildrenCSS;

		widthSelectorsTablet[ '.block-editor-block-list__layout > #block-' + clientId ] = gridChildrenCSSTablet;

		widthSelectorsMobile[ '.block-editor-block-list__layout > #block-' + clientId ] = gridChildrenCSSMobile;
	}



	const base_selector = gbsSelector ? '.editor-styles-wrapper ' + gbsSelector : `.editor-styles-wrapper #block-${ clientId }`;

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS( widthSelectorsDesktop, '.editor-styles-wrapper ' );

	if( 'tablet' === previewType || 'mobile' === previewType || gbsSelector ) {
		styling_css += generateCSS(
			tablet_selectors,
			`${ base_selector }`,
			true,
			'tablet',
			fullWidthContentBoxedWidthHasEdited,
			fullWidthContentBoxedWidth.Tablet
		);

		styling_css += generateCSS( widthSelectorsTablet, '.editor-styles-wrapper ', true, 'tablet', fullWidthContentBoxedWidthHasEdited, fullWidthContentBoxedWidth.Tablet );

		if( 'mobile' === previewType || gbsSelector ){
			styling_css += generateCSS(
				mobile_selectors,
				`${ base_selector }`,
				true,
				'mobile',
				fullWidthContentBoxedWidthHasEdited,
				fullWidthContentBoxedWidth.Mobile
			);

			styling_css += generateCSS( widthSelectorsMobile, '.editor-styles-wrapper ', true, 'mobile', fullWidthContentBoxedWidthHasEdited, fullWidthContentBoxedWidth.Mobile );

		}
	}
	styling_css += containerGlobalCustomCSSValue;

	return styling_css;
}

export default styling;

