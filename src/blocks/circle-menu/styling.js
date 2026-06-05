/**
 * Circle Menu Block - Style Generation
 * Returns Dynamic Generated CSS
 */
import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateCircleMenuStyle = ( attributes ) => {
	const {
		blockID,
		offsetH,
		offsetV,
		activeOffsetH,
		activeOffsetV,
		mainMenuSize,
		mainMenuBgColor,
		mainMenuBgHoverColor,
		mainMenuTextColor,
		mainMenuTextHoverColor,
		mainMenuIconSize,
		submenuSize,
		submenuBgColor,
		submenuBgHoverColor,
		submenuIconSize,
		submenuIconColor,
		submenuIconHoverColor,
		submenuSpace,
		submenuHorizontalSpace,
		submenuHorizontalAlign,
		menuPosition,
		menuItems,
		menuPreset,
		mainMenuImageSize,
		mainMenuCloseImageSize,

		/** Main Menu Border Radius */
		mainMenuBorderRadiusUnits,
		mainMenuBorderRadiusDesktop,
		mainMenuBorderRadiusTablet,
		mainMenuBorderRadiusMobile,

		/** Main Menu Border Width */
		mainMenuBorder,
		mainMenuBorderColor,
		mainMenuBorderHoverColor,
		mainMenuBorderUnits,
		mainMenuBorderDesktop,
		mainMenuBorderTablet,
		mainMenuBorderMobile,

		/** Sub Menu Border Radius */
		submenuBorderRadiusUnits,
		submenuBorderRadiusDesktop,
		submenuBorderRadiusTablet,
		submenuBorderRadiusMobile,

		/** Sub Menu Border Width */
		submenuBorder,
		submenuBorderColor,
		submenuBorderHoverColor,
		submenuBorderUnits,
		submenuBorderDesktop,
		submenuBorderTablet,
		submenuBorderMobile,
		submenuShowTitleOnHover,

		/** Box Shadow */
		mainMenuBoxShadowCssValue,
		mainMenuBoxShadowHoverCssValue,
		submenuBoxShadowCssValue,
		submenuBoxShadowHoverCssValue,

		/** Typography - Main Menu */
		mainMenuTextFontFamily,
		mainMenuTextFontSize,
		mainMenuTextFontSizeUnits,
		mainMenuTextFontWeight,
		mainMenuTextFontStyle,
		mainMenuTextTransform,
		mainMenuTextDecoration,
		mainMenuTextLetterSpacing,
		mainMenuTextLetterSpacingUnits,
		mainMenuTextLineHeight,
		mainMenuTextLineHeightUnits,

		/** Typography - Sub Menu */
		submenuTextFontFamily,
		submenuTextFontSize,
		submenuTextFontSizeUnits,
		submenuTextFontWeight,
		submenuTextFontStyle,
		submenuTextTransform,
		submenuTextDecoration,
		submenuTextLetterSpacing,
		submenuTextLetterSpacingUnits,
		submenuTextLineHeight,
		submenuTextLineHeightUnits,

		/** Submenu Title */
		submenuTitleColor,
		submenuTitleBgColor,
		submenuTitleBgGradientColor,
		submenuTitleBgColorType,
		submenuTitleBgCustomGradientSwitcher,
		submenuTitleBgCustomGradientInputValue,
		submenuTitlePosition,
		submenuTitleOffsetH,
		submenuTitleOffsetHUnits,
		submenuTitleOffsetV,
		submenuTitleOffsetVUnits,

		/** Background Types */
		mainMenuNormalBackgroundType,
		mainMenuNormalGradientColor,
		mainMenuNormalCustomGradientSwitcher,
		mainMenuNormalCustomGradientInputValue,
		mainMenuHoverBackgroundType,
		mainMenuHoverGradientColor,
		mainMenuHoverCustomGradientSwitcher,
		mainMenuHoverCustomGradientInputValue,
		submenuNormalBackgroundType,
		submenuNormalGradientColor,
		submenuNormalCustomGradientSwitcher,
		submenuNormalCustomGradientInputValue,
		submenuHoverBackgroundType,
		submenuHoverGradientColor,
		submenuHoverCustomGradientSwitcher,
		submenuHoverCustomGradientInputValue,

		/** Global Settings */
		circleMenuGlobalZIndex,
		circleMenuOverflow,
		circleMenuPositionType,
		circleMenuHZOrientationType,
		circleMenuVROrientationType,
		circleMenuHZLeftOffset,
		circleMenuHZLeftOffsetUnits,
		circleMenuHZRightOffset,
		circleMenuHZRightOffsetUnits,
		circleMenuVRTopOffset,
		circleMenuVRTopOffsetUnits,
		circleMenuVRBottomOffset,
		circleMenuVRBottomOffsetUnits,
		circleMenuGlobalPaddingUnits,
		circleMenuGlobalPaddingDesktop,
		circleMenuGlobalPaddingTablet,
		circleMenuGlobalPaddingMobile,
		circleMenuGlobalMarginUnits,
		circleMenuGlobalMarginDesktop,
		circleMenuGlobalMarginTablet,
		circleMenuGlobalMarginMobile,
		circleMenuGlobalBorder,
		circleMenuGlobalBorderColor,
		circleMenuGlobalBorderHoverColor,
		circleMenuGlobalBorderUnits,
		circleMenuGlobalBorderDesktop,
		circleMenuGlobalBorderTablet,
		circleMenuGlobalBorderMobile,
		circleMenuGlobalBorderRadiusUnits,
		circleMenuGlobalBorderRadiusDesktop,
		circleMenuGlobalBorderRadiusTablet,
		circleMenuGlobalBorderRadiusMobile,
		circleMenuGlobalBoxShadowCssValue,
		circleMenuGlobalBoxShadowHoverCssValue,
		circleMenuGlobalCustomCSS,

		/** Background Image */
		circleMenuGlobalBgImageUrl,
		circleMenuGlobalBgImagePosition,
		circleMenuGlobalBgImageAttachment,
		circleMenuGlobalBgImageRepeat,
		circleMenuGlobalBgImageSize,
		circleMenuGlobalBgHoverImageUrl,
		circleMenuGlobalBgHoverImagePosition,
		circleMenuGlobalBgHoverImageAttachment,
		circleMenuGlobalBgHoverImageRepeat,
		circleMenuGlobalBgHoverImageSize,
		circleMenuGlobalNormalBackgroundType,
		circleMenuGlobalBgColor,
		circleMenuGlobalNormalGradientColor,
		circleMenuGlobalNormalCustomGradientSwitcher,
		circleMenuGlobalNormalCustomGradientInputValue,
		circleMenuGlobalHoverBackgroundType,
		circleMenuGlobalHoverGradientColor,
		circleMenuGlobalHoverCustomGradientSwitcher,
		circleMenuGlobalHoverCustomGradientInputValue,
		circleMenuGlobalWraperID,
		circleMenuGlobalWraperClass,
		circleMenuGlobalBgHoverColor,
	} = attributes;

	/** Shorthand CSS Calculations */

	/** Main Menu Border Width */
	const mainMenuBorderDesktopWidth = `${ mainMenuBorderDesktop?.top }${ mainMenuBorderUnits?.Desktop } ${ mainMenuBorderDesktop?.right }${ mainMenuBorderUnits?.Desktop } ${ mainMenuBorderDesktop?.bottom }${ mainMenuBorderUnits?.Desktop } ${ mainMenuBorderDesktop?.left }${ mainMenuBorderUnits?.Desktop }`;
	const mainMenuBorderTabletWidth = `${ mainMenuBorderTablet?.top }${ mainMenuBorderUnits?.Tablet } ${ mainMenuBorderTablet?.right }${ mainMenuBorderUnits?.Tablet } ${ mainMenuBorderTablet?.bottom }${ mainMenuBorderUnits?.Tablet } ${ mainMenuBorderTablet?.left }${ mainMenuBorderUnits?.Tablet }`;
	const mainMenuBorderMobileWidth = `${ mainMenuBorderMobile?.top }${ mainMenuBorderUnits?.Mobile } ${ mainMenuBorderMobile?.right }${ mainMenuBorderUnits?.Mobile } ${ mainMenuBorderMobile?.bottom }${ mainMenuBorderUnits?.Mobile } ${ mainMenuBorderMobile?.left }${ mainMenuBorderUnits?.Mobile }`;

	/** Main Menu Border Radius */
	const mainMenuBorderRadiusDesktopWidth = `${ mainMenuBorderRadiusDesktop?.top }${ mainMenuBorderRadiusUnits?.Desktop } ${ mainMenuBorderRadiusDesktop?.right }${ mainMenuBorderRadiusUnits?.Desktop } ${ mainMenuBorderRadiusDesktop?.bottom }${ mainMenuBorderRadiusUnits?.Desktop } ${ mainMenuBorderRadiusDesktop?.left }${ mainMenuBorderRadiusUnits?.Desktop }`;
	const mainMenuBorderRadiusTabletWidth = `${ mainMenuBorderRadiusTablet?.top }${ mainMenuBorderRadiusUnits?.Tablet } ${ mainMenuBorderRadiusTablet?.right }${ mainMenuBorderRadiusUnits?.Tablet } ${ mainMenuBorderRadiusTablet?.bottom }${ mainMenuBorderRadiusUnits?.Tablet } ${ mainMenuBorderRadiusTablet?.left }${ mainMenuBorderRadiusUnits?.Tablet }`;
	const mainMenuBorderRadiusMobileWidth = `${ mainMenuBorderRadiusMobile?.top }${ mainMenuBorderRadiusUnits?.Mobile } ${ mainMenuBorderRadiusMobile?.right }${ mainMenuBorderRadiusUnits?.Mobile } ${ mainMenuBorderRadiusMobile?.bottom }${ mainMenuBorderRadiusUnits?.Mobile } ${ mainMenuBorderRadiusMobile?.left }${ mainMenuBorderRadiusUnits?.Mobile }`;

	/** Sub Menu Border Width */
	const submenuBorderDesktopWidth = `${ submenuBorderDesktop?.top }${ submenuBorderUnits?.Desktop } ${ submenuBorderDesktop?.right }${ submenuBorderUnits?.Desktop } ${ submenuBorderDesktop?.bottom }${ submenuBorderUnits?.Desktop } ${ submenuBorderDesktop?.left }${ submenuBorderUnits?.Desktop }`;
	const submenuBorderTabletWidth = `${ submenuBorderTablet?.top }${ submenuBorderUnits?.Tablet } ${ submenuBorderTablet?.right }${ submenuBorderUnits?.Tablet } ${ submenuBorderTablet?.bottom }${ submenuBorderUnits?.Tablet } ${ submenuBorderTablet?.left }${ submenuBorderUnits?.Tablet }`;
	const submenuBorderMobileWidth = `${ submenuBorderMobile?.top }${ submenuBorderUnits?.Mobile } ${ submenuBorderMobile?.right }${ submenuBorderUnits?.Mobile } ${ submenuBorderMobile?.bottom }${ submenuBorderUnits?.Mobile } ${ submenuBorderMobile?.left }${ submenuBorderUnits?.Mobile }`;

	/** Sub Menu Border Radius */
	const submenuBorderRadiusDesktopWidth = `${ submenuBorderRadiusDesktop?.top }${ submenuBorderRadiusUnits?.Desktop } ${ submenuBorderRadiusDesktop?.right }${ submenuBorderRadiusUnits?.Desktop } ${ submenuBorderRadiusDesktop?.bottom }${ submenuBorderRadiusUnits?.Desktop } ${ submenuBorderRadiusDesktop?.left }${ submenuBorderRadiusUnits?.Desktop }`;
	const submenuBorderRadiusTabletWidth = `${ submenuBorderRadiusTablet?.top }${ submenuBorderRadiusUnits?.Tablet } ${ submenuBorderRadiusTablet?.right }${ submenuBorderRadiusUnits?.Tablet } ${ submenuBorderRadiusTablet?.bottom }${ submenuBorderRadiusUnits?.Tablet } ${ submenuBorderRadiusTablet?.left }${ submenuBorderRadiusUnits?.Tablet }`;
	const submenuBorderRadiusMobileWidth = `${ submenuBorderRadiusMobile?.top }${ submenuBorderRadiusUnits?.Mobile } ${ submenuBorderRadiusMobile?.right }${ submenuBorderRadiusUnits?.Mobile } ${ submenuBorderRadiusMobile?.bottom }${ submenuBorderRadiusUnits?.Mobile } ${ submenuBorderRadiusMobile?.left }${ submenuBorderRadiusUnits?.Mobile }`;

	/** Global Padding */
	const globalDesktopPadding = `${ circleMenuGlobalPaddingDesktop?.top }${ circleMenuGlobalPaddingUnits?.Desktop } ${ circleMenuGlobalPaddingDesktop?.right }${ circleMenuGlobalPaddingUnits?.Desktop } ${ circleMenuGlobalPaddingDesktop?.bottom }${ circleMenuGlobalPaddingUnits?.Desktop } ${ circleMenuGlobalPaddingDesktop?.left }${ circleMenuGlobalPaddingUnits?.Desktop }`;
	const globalTabletPadding = `${ circleMenuGlobalPaddingTablet?.top }${ circleMenuGlobalPaddingUnits?.Tablet } ${ circleMenuGlobalPaddingTablet?.right }${ circleMenuGlobalPaddingUnits?.Tablet } ${ circleMenuGlobalPaddingTablet?.bottom }${ circleMenuGlobalPaddingUnits?.Tablet } ${ circleMenuGlobalPaddingTablet?.left }${ circleMenuGlobalPaddingUnits?.Tablet }`;
	const globalMobilePadding = `${ circleMenuGlobalPaddingMobile?.top }${ circleMenuGlobalPaddingUnits?.Mobile } ${ circleMenuGlobalPaddingMobile?.right }${ circleMenuGlobalPaddingUnits?.Mobile } ${ circleMenuGlobalPaddingMobile?.bottom }${ circleMenuGlobalPaddingUnits?.Mobile } ${ circleMenuGlobalPaddingMobile?.left }${ circleMenuGlobalPaddingUnits?.Mobile }`;

	/** Global Margin */
	const globalDesktopMargin = `${ circleMenuGlobalMarginDesktop?.top }${ circleMenuGlobalMarginUnits?.Desktop } ${ circleMenuGlobalMarginDesktop?.right }${ circleMenuGlobalMarginUnits?.Desktop } ${ circleMenuGlobalMarginDesktop?.bottom }${ circleMenuGlobalMarginUnits?.Desktop } ${ circleMenuGlobalMarginDesktop?.left }${ circleMenuGlobalMarginUnits?.Desktop }`;
	const globalTabletMargin = `${ circleMenuGlobalMarginTablet?.top }${ circleMenuGlobalMarginUnits?.Tablet } ${ circleMenuGlobalMarginTablet?.right }${ circleMenuGlobalMarginUnits?.Tablet } ${ circleMenuGlobalMarginTablet?.bottom }${ circleMenuGlobalMarginUnits?.Tablet } ${ circleMenuGlobalMarginTablet?.left }${ circleMenuGlobalMarginUnits?.Tablet }`;
	const globalMobileMargin = `${ circleMenuGlobalMarginMobile?.top }${ circleMenuGlobalMarginUnits?.Mobile } ${ circleMenuGlobalMarginMobile?.right }${ circleMenuGlobalMarginUnits?.Mobile } ${ circleMenuGlobalMarginMobile?.bottom }${ circleMenuGlobalMarginUnits?.Mobile } ${ circleMenuGlobalMarginMobile?.left }${ circleMenuGlobalMarginUnits?.Mobile }`;

	/** Global Border Width */
	const globalDesktopBorderWidth = `${ circleMenuGlobalBorderDesktop?.top }${ circleMenuGlobalBorderUnits?.Desktop } ${ circleMenuGlobalBorderDesktop?.right }${ circleMenuGlobalBorderUnits?.Desktop } ${ circleMenuGlobalBorderDesktop?.bottom }${ circleMenuGlobalBorderUnits?.Desktop } ${ circleMenuGlobalBorderDesktop?.left }${ circleMenuGlobalBorderUnits?.Desktop }`;
	const globalTabletBorderWidth = `${ circleMenuGlobalBorderTablet?.top }${ circleMenuGlobalBorderUnits?.Tablet } ${ circleMenuGlobalBorderTablet?.right }${ circleMenuGlobalBorderUnits?.Tablet } ${ circleMenuGlobalBorderTablet?.bottom }${ circleMenuGlobalBorderUnits?.Tablet } ${ circleMenuGlobalBorderTablet?.left }${ circleMenuGlobalBorderUnits?.Tablet }`;
	const globalMobileBorderWidth = `${ circleMenuGlobalBorderMobile?.top }${ circleMenuGlobalBorderUnits?.Mobile } ${ circleMenuGlobalBorderMobile?.right }${ circleMenuGlobalBorderUnits?.Mobile } ${ circleMenuGlobalBorderMobile?.bottom }${ circleMenuGlobalBorderUnits?.Mobile } ${ circleMenuGlobalBorderMobile?.left }${ circleMenuGlobalBorderUnits?.Mobile }`;

	/** Global Border Radius Width */
	const globalDesktopBorderRadiusWidth = `${ circleMenuGlobalBorderRadiusDesktop?.top }${ circleMenuGlobalBorderRadiusUnits?.Desktop } ${ circleMenuGlobalBorderRadiusDesktop?.right }${ circleMenuGlobalBorderRadiusUnits?.Desktop } ${ circleMenuGlobalBorderRadiusDesktop?.bottom }${ circleMenuGlobalBorderRadiusUnits?.Desktop } ${ circleMenuGlobalBorderRadiusDesktop?.left }${ circleMenuGlobalBorderRadiusUnits?.Desktop }`;
	const globalTabletBorderRadiusWidth = `${ circleMenuGlobalBorderRadiusTablet?.top }${ circleMenuGlobalBorderRadiusUnits?.Tablet } ${ circleMenuGlobalBorderRadiusTablet?.right }${ circleMenuGlobalBorderRadiusUnits?.Tablet } ${ circleMenuGlobalBorderRadiusTablet?.bottom }${ circleMenuGlobalBorderRadiusUnits?.Tablet } ${ circleMenuGlobalBorderRadiusTablet?.left }${ circleMenuGlobalBorderRadiusUnits?.Tablet }`;
	const globalMobileBorderRadiusWidth = `${ circleMenuGlobalBorderRadiusMobile?.top }${ circleMenuGlobalBorderRadiusUnits?.Mobile } ${ circleMenuGlobalBorderRadiusMobile?.right }${ circleMenuGlobalBorderRadiusMobile?.right } ${ circleMenuGlobalBorderRadiusMobile?.bottom }${ circleMenuGlobalBorderRadiusUnits?.Mobile } ${ circleMenuGlobalBorderRadiusMobile?.left }${ circleMenuGlobalBorderRadiusUnits?.Mobile }`;

	/** Background Image */

	const getBackgroundStyle = (
		type,
		color,
		gradient,
		customSwitcher,
		customValue,
		imageUrl,
		imagePosition,
		imageAttachment,
		imageRepeat,
		imageSize,
		otherType = 'classic'
	) => {
		const finalColor = color || 'transparent';
		if ( type === 'classic' ) {
			let style = '';
			if ( otherType === 'gradient' ) {
				if ( color ) {
					style = `background-image: linear-gradient(${ finalColor }, ${ finalColor });`;
				}
			} else {
				if ( color ) {
					style = `background-color: ${ color };`;
					if ( ! imageUrl ) style += ' background-image: none;';
				}
			}

			if ( imageUrl ) {
				style += ` background-image: ${
					otherType === 'gradient'
						? `linear-gradient(${ finalColor }, ${ finalColor }), `
						: ''
				}url(${ imageUrl });`;
				if ( imagePosition )
					style += ` background-position: ${ imagePosition };`;
				if ( imageAttachment )
					style += ` background-attachment: ${ imageAttachment };`;
				if ( imageRepeat )
					style += ` background-repeat: ${ imageRepeat };`;
				if ( imageSize ) style += ` background-size: ${ imageSize };`;
			}

			/** Custom CSS & Return */
			return style;
		} else {
			const gradientVal = customSwitcher ? customValue : gradient;
			if ( ! gradientVal && ! color ) return '';
			return gradientVal
				? `background: ${ gradientVal };`
				: `background: ${ finalColor };`;
		}
	};

	const getLastColorFromGradient = ( gradientVal, fallback ) => {
		if ( ! gradientVal || ! gradientVal.includes( 'gradient' ) )
			return fallback;
		const colors = gradientVal.match( /(rgba?\(.*?\)|#[0-9a-fA-F]{3,8})/g );
		if ( colors && colors.length > 0 ) {
			return colors[ colors.length - 1 ];
		}
		return fallback;
	};

	const getArrowColor = () => {
		const currentGradient = submenuTitleBgCustomGradientSwitcher ? submenuTitleBgCustomGradientInputValue : submenuTitleBgGradientColor;
		return submenuTitleBgColorType === 'classic' ? submenuTitleBgColor || '#15171C': getLastColorFromGradient(currentGradient, submenuTitleBgColor || '#15171C');
	};

	/** Menu Item Position Calculation Logic */

	const generateItemStyles = ( device ) => {
		let styles = '';
		const total = menuItems.length;
		const subSize = parseInt( submenuSize?.[ device ], 10 ) || ( device === 'Desktop' ? 62 : device === 'Tablet' ? 62 : 62 );
		const radius = 100 + ( parseInt( submenuSpace?.[ device ], 10 ) || 0 );
		const horizontalGap = parseInt( submenuHorizontalSpace?.[ device ], 10 ) || 10;

		menuItems.forEach( ( item, index ) => {
			let x = 0,
				y = 0;
			if ( menuPreset === 'circular-menu' ) {
				const angle = -90 + ( 360 / total ) * index;
				const rad = angle * ( Math.PI / 180 );
				x = Math.cos( rad ) * radius;
				y = Math.sin( rad ) * radius;
			} else if ( menuPreset === 'horizontal-menu' ) {
				const align = submenuHorizontalAlign || 'horizontal';
				const gap = subSize + horizontalGap;
				if ( align === 'horizontal' ) {
					x = ( index + 1 ) * gap;
					if ( menuPosition.includes( 'right' ) ) x = -x;
				} else {
					y = ( index + 1 ) * gap;
					if ( menuPosition.includes( 'bottom' ) ) y = -y;
				}
			} else {
				let startAngle = 180;
				let spreadAngle = 90;
				if ( menuPosition === 'bottom-left' ) {
					startAngle = 270;
					spreadAngle = 90;
				} else if ( menuPosition === 'top-right' ) {
					startAngle = 90;
					spreadAngle = 90;
				} else if ( menuPosition === 'top-left' ) {
					startAngle = 0;
					spreadAngle = 90;
				} else if ( menuPosition === 'top-center' ) {
					startAngle = 0;
					spreadAngle = 180;
				} else if ( menuPosition === 'bottom-center' ) {
					startAngle = 180;
					spreadAngle = 180;
				} else if ( menuPosition === 'center-right' ) {
					startAngle = 90;
					spreadAngle = 180;
				} else if ( menuPosition === 'center-left' ) {
					startAngle = 270;
					spreadAngle = 180;
				}

				const angle = total === 1 ? startAngle + spreadAngle / 2 : startAngle + ( spreadAngle / ( total - 1 ) ) * index;
				const rad = angle * ( Math.PI / 180 );
				x = Math.cos( rad ) * radius;
				y = Math.sin( rad ) * radius;
			}

			const openDelay = index * 0.1;
			const closeDelay = ( total - 1 - index ) * 0.05;

			styles += `
                .${ blockID } .fb-circle-menu-item:nth-child(${ index + 1 }) {
                    transition-delay: ${ closeDelay }s;
                }
                .${ blockID }.is-active .fb-circle-menu-item:nth-child(${
					index + 1
				}),
                .${ blockID } .fb-parent-wrapper.is-active .fb-circle-menu-item:nth-child(${
					index + 1
				}),
                .${ blockID } .fb-circle-menu.is-active .fb-circle-menu-item:nth-child(${
					index + 1
				}) {
                    transition-delay: ${ openDelay }s;
                    transform: translate(calc(-50% + ${ x }px), calc(-50% + ${ y }px)) scale(1);
                    opacity: 1;
                }
            `;
		} );
		return styles;
	};

	/** Final CSS Template Assemblage */

	const arrowColor = getArrowColor();

	/** Device-specific Size Calculations for Wrapper */
	const getWrapperSize = ( device ) => {
		const mSize = parseFloat( mainMenuSize?.[ device ] || 72 );
		const sSize = parseFloat( submenuSize?.[ device ] || 62 );
		const rGap = parseInt( submenuSpace?.[ device ] || 0, 10 );
		const hGap = parseInt( submenuHorizontalSpace?.[ device ] || 10, 10 );
		const radius = 100 + rGap;

		if ( menuPreset === 'horizontal-menu' ) {
			const align = submenuHorizontalAlign || 'horizontal';
			if ( align === 'vertical' ) {
				return Math.max( mSize + 40, ( sSize + hGap ) * 4 );
			}
			return mSize + 40;
		}
		return ( radius + sSize / 2 ) * 2 + 20;
	};

	const circleMenuBlockStyle = `
        /* Desktop Styling */
        .${ blockID }.fb-circle-menu-main-wrapper {
            --fb-cm-offset-h: ${ offsetH?.Desktop}px;
            --fb-cm-offset-v: ${ offsetV?.Desktop}px;
            --fb-cm-wrapper-size: ${ getWrapperSize( 'Desktop' ) }px;
            ${circleMenuGlobalZIndex?.Desktop ? `z-index: ${ circleMenuGlobalZIndex.Desktop };` : ''}
            ${circleMenuPositionType !== 'default' ? `position: ${ circleMenuPositionType };` : ''}
            ${circleMenuOverflow !== 'default' ? `overflow: ${ circleMenuOverflow };` : ''}
            ${circleMenuHZOrientationType === 'left' && circleMenuHZLeftOffset?.Desktop !== undefined ? `left: ${ circleMenuHZLeftOffset.Desktop }${ circleMenuHZLeftOffsetUnits?.Desktop || 'px' };` : ''}
            ${circleMenuHZOrientationType === 'right' && circleMenuHZRightOffset?.Desktop !== undefined ? `right: ${ circleMenuHZRightOffset.Desktop }${ circleMenuHZRightOffsetUnits?.Desktop || 'px' };` : ''}
            ${circleMenuVROrientationType === 'top' && circleMenuVRTopOffset?.Desktop !== undefined ? `top: ${ circleMenuVRTopOffset.Desktop }${ circleMenuVRTopOffsetUnits?.Desktop || 'px' };` : ''}
            ${circleMenuVROrientationType === 'bottom' && circleMenuVRBottomOffset?.Desktop !== undefined ? `bottom: ${ circleMenuVRBottomOffset.Desktop }${ circleMenuVRBottomOffsetUnits?.Desktop || 'px' };` : ''}
            padding: ${ globalDesktopPadding };
            margin: ${ globalDesktopMargin };
            border-width: ${ globalDesktopBorderWidth };
            border-radius: ${ globalDesktopBorderRadiusWidth };
            border-style: ${ circleMenuGlobalBorder !== 'none' ? circleMenuGlobalBorder : 'none' };
            border-color: ${ circleMenuGlobalBorderColor || 'transparent' };
            ${ getBackgroundStyle(
				circleMenuGlobalNormalBackgroundType,
				circleMenuGlobalBgColor,
				circleMenuGlobalNormalGradientColor,
				circleMenuGlobalNormalCustomGradientSwitcher,
				circleMenuGlobalNormalCustomGradientInputValue,
				circleMenuGlobalBgImageUrl,
				circleMenuGlobalBgImagePosition,
				circleMenuGlobalBgImageAttachment,
				circleMenuGlobalBgImageRepeat,
				circleMenuGlobalBgImageSize,
				circleMenuGlobalHoverBackgroundType
			) }
            box-shadow: ${ circleMenuGlobalBoxShadowCssValue || 'none' };
            
            --fb-cm-global-bg: ${ 
				circleMenuGlobalNormalBackgroundType === 'classic'
					? circleMenuGlobalHoverBackgroundType === 'gradient'
					? `linear-gradient(${ circleMenuGlobalBgColor || 'transparent' }, ${ circleMenuGlobalBgColor || 'transparent' })`
					: circleMenuGlobalBgColor || 'transparent'
					: ( circleMenuGlobalNormalCustomGradientSwitcher ? circleMenuGlobalNormalCustomGradientInputValue : circleMenuGlobalNormalGradientColor ) || circleMenuGlobalBgColor || 'transparent'
			};
            --fb-cm-global-bg-hover: ${
				circleMenuGlobalHoverBackgroundType === 'classic'
					? circleMenuGlobalNormalBackgroundType === 'gradient' ? circleMenuGlobalBgHoverColor ? `linear-gradient(${ circleMenuGlobalBgHoverColor }, ${ circleMenuGlobalBgHoverColor })`
					: ( circleMenuGlobalNormalCustomGradientSwitcher ? circleMenuGlobalNormalCustomGradientInputValue : circleMenuGlobalNormalGradientColor ) || 'transparent'
					: circleMenuGlobalBgHoverColor || circleMenuGlobalBgColor || 'transparent'
					: ( circleMenuGlobalHoverCustomGradientSwitcher	? circleMenuGlobalHoverCustomGradientInputValue	: circleMenuGlobalHoverGradientColor ) || ( circleMenuGlobalNormalCustomGradientSwitcher
					? circleMenuGlobalNormalCustomGradientInputValue : circleMenuGlobalNormalGradientColor ) || circleMenuGlobalBgHoverColor || circleMenuGlobalBgColor || 'transparent'
			};
        }

        .${ blockID }.fb-circle-menu-main-wrapper:hover {
            ${ getBackgroundStyle(
				circleMenuGlobalHoverBackgroundType,
				circleMenuGlobalBgHoverColor,
				circleMenuGlobalHoverGradientColor,
				circleMenuGlobalHoverCustomGradientSwitcher,
				circleMenuGlobalHoverCustomGradientInputValue,
				circleMenuGlobalBgHoverImageUrl,
				circleMenuGlobalBgHoverImagePosition,
				circleMenuGlobalBgHoverImageAttachment,
				circleMenuGlobalBgHoverImageRepeat,
				circleMenuGlobalBgHoverImageSize,
				circleMenuGlobalNormalBackgroundType
			) }
            border-color: ${ circleMenuGlobalBorderHoverColor || circleMenuGlobalBorderColor || 'transparent'};
            box-shadow: ${ circleMenuGlobalBoxShadowHoverCssValue || circleMenuGlobalBoxShadowCssValue || 'none'};
        }

        .${ blockID }.fb-circle-menu-main-wrapper.is-active {
            --fb-cm-offset-h: ${ activeOffsetH?.Desktop || offsetH?.Desktop}px;
            --fb-cm-offset-v: ${ activeOffsetV?.Desktop || offsetV?.Desktop}px;
        }

        .${ blockID } .fb-circle-menu {
            --fb-cm-main-size: ${ mainMenuSize?.Desktop}px;
            --fb-cm-sub-size: ${ submenuSize?.Desktop}px;
            --fb-cm-main-radius: ${ mainMenuBorderRadiusDesktopWidth};
            --fb-cm-sub-radius: ${ submenuBorderRadiusDesktopWidth};
            --fb-cm-main-border-width: ${ mainMenuBorderDesktopWidth};
            --fb-cm-sub-border-width: ${ submenuBorderDesktopWidth};            
            --fb-cm-main-bg: ${mainMenuNormalBackgroundType === 'classic' ? mainMenuHoverBackgroundType === 'gradient' ? `linear-gradient(${mainMenuBgColor}, ${ mainMenuBgColor})` : mainMenuBgColor : ( mainMenuNormalCustomGradientSwitcher	? mainMenuNormalCustomGradientInputValue : mainMenuNormalGradientColor ) || mainMenuBgColor};
            --fb-cm-main-bg-hover: ${mainMenuHoverBackgroundType === 'classic' ? mainMenuNormalBackgroundType === 'gradient' ? mainMenuBgHoverColor ? `linear-gradient(${ mainMenuBgHoverColor }, ${ mainMenuBgHoverColor })` : ( mainMenuNormalCustomGradientSwitcher ? mainMenuNormalCustomGradientInputValue	: mainMenuNormalGradientColor )	: mainMenuBgHoverColor || mainMenuBgColor : ( mainMenuHoverCustomGradientSwitcher ? mainMenuHoverCustomGradientInputValue : mainMenuHoverGradientColor ) || ( mainMenuNormalCustomGradientSwitcher ? mainMenuNormalCustomGradientInputValue	: mainMenuNormalGradientColor ) || mainMenuBgHoverColor || mainMenuBgColor	};
            --fb-cm-main-color: ${ mainMenuTextColor };
            --fb-cm-main-color-hover: ${ mainMenuTextHoverColor };
            --fb-cm-sub-bg: ${ submenuNormalBackgroundType === 'classic' ? submenuHoverBackgroundType === 'gradient' ? `linear-gradient(${ submenuBgColor}, ${submenuBgColor})` : submenuBgColor: ( submenuNormalCustomGradientSwitcher ? submenuNormalCustomGradientInputValue : submenuNormalGradientColor ) || submenuBgColor};
            --fb-cm-sub-bg-hover: ${submenuHoverBackgroundType === 'classic' ? submenuNormalBackgroundType === 'gradient' ? submenuBgHoverColor ? `linear-gradient(${ submenuBgHoverColor }, ${ submenuBgHoverColor })` : ( submenuNormalCustomGradientSwitcher ? submenuNormalCustomGradientInputValue : submenuNormalGradientColor ): submenuBgHoverColor || submenuBgColor : ( submenuHoverCustomGradientSwitcher ? submenuHoverCustomGradientInputValue : submenuHoverGradientColor ) || ( submenuNormalCustomGradientSwitcher ? submenuNormalCustomGradientInputValue : submenuNormalGradientColor ) || submenuBgHoverColor || submenuBgColor};
            --fb-cm-sub-color: ${ submenuIconColor};
            --fb-cm-sub-color-hover: ${submenuIconHoverColor || submenuIconColor};    
            --fb-cm-main-border-style: ${ mainMenuBorder || 'none' };
            --fb-cm-main-border-color: ${mainMenuBorderColor || 'transparent'};
            --fb-cm-main-border-hover-color: ${mainMenuBorderHoverColor || mainMenuBorderColor || 'transparent'};
            --fb-cm-sub-border-style: ${ submenuBorder || 'none' };
            --fb-cm-sub-border-color: ${ submenuBorderColor || 'transparent' };
            --fb-cm-sub-border-hover-color: ${submenuBorderHoverColor || submenuBorderColor || 'transparent'};
        }

        .${ blockID }.fb-circle-menu-main-wrapper {
            ${ getBackgroundStyle(
				circleMenuGlobalNormalBackgroundType,
				circleMenuGlobalBgColor,
				circleMenuGlobalNormalGradientColor,
				circleMenuGlobalNormalCustomGradientSwitcher,
				circleMenuGlobalNormalCustomGradientInputValue,
				circleMenuGlobalBgImageUrl,
				circleMenuGlobalBgImagePosition,
				circleMenuGlobalBgImageAttachment,
				circleMenuGlobalBgImageRepeat,
				circleMenuGlobalBgImageSize,
				circleMenuGlobalHoverBackgroundType
			) }
        }

        .${ blockID } .fb-circle-menu-toggle svg,
        .${ blockID } .fb-circle-menu-toggle i,
        .${ blockID } .fb-circle-menu-toggle img {
            font-size: ${ mainMenuIconSize?.Desktop}px;
            width: ${ mainMenuIconSize?.Desktop}px;
            height: ${ mainMenuIconSize?.Desktop}px;
        }

        .${ blockID } .fb-circle-menu-icon svg,
        .${ blockID } .fb-circle-menu-icon i,
        .${ blockID } .fb-circle-menu-icon img {
            font-size: ${ submenuIconSize?.Desktop}px;
            width: ${ submenuIconSize?.Desktop}px;
            height: ${ submenuIconSize?.Desktop}px;
        }

        .${ blockID } .fb-circle-menu-text {
            font-size: ${ mainMenuTextFontSize?.Desktop || 16 }${ mainMenuTextFontSizeUnits?.Desktop || 'px' };
            ${ mainMenuTextFontFamily && mainMenuTextFontFamily !== 'Default' ? `font-family: '${ mainMenuTextFontFamily }', sans-serif;` : ''}
            font-weight: ${ mainMenuTextFontWeight || '400' };
            font-style: ${ mainMenuTextFontStyle || 'normal' };
            text-transform: ${ mainMenuTextTransform || 'none' };
            text-decoration: ${ mainMenuTextDecoration || 'none' };
            ${ mainMenuTextLetterSpacing?.Desktop !== '' ? `letter-spacing: ${ mainMenuTextLetterSpacing.Desktop }${ mainMenuTextLetterSpacingUnits?.Desktop || 'px' };` : '' }
            ${ mainMenuTextLineHeight?.Desktop !== '' ? `line-height: ${ mainMenuTextLineHeight.Desktop }${ mainMenuTextLineHeightUnits?.Desktop || 'px' };` : ''}
        }

        .${ blockID } .fb-circle-menu-tooltip {
            --fb-cmt-offset-v: ${ submenuTitleOffsetV?.Desktop || 0 }px;
            --fb-cmt-offset-h: ${ submenuTitleOffsetH?.Desktop || 0 }px;
            font-size: ${ submenuTextFontSize?.Desktop || 14 }${submenuTextFontSizeUnits?.Desktop || 'px'};
            ${ getBackgroundStyle(
				submenuTitleBgColorType,
				submenuTitleBgColor,
				submenuTitleBgGradientColor,
				submenuTitleBgCustomGradientSwitcher,
				submenuTitleBgCustomGradientInputValue
			) }
            color: ${ submenuTitleColor};
            ${submenuTextFontFamily && submenuTextFontFamily !== 'Default' ? `font-family: '${ submenuTextFontFamily }', sans-serif;` : ''}
            font-weight: ${ submenuTextFontWeight};
            font-style: ${ submenuTextFontStyle};
            text-transform: ${ submenuTextTransform};
            text-decoration: ${ submenuTextDecoration};
            ${submenuTextLetterSpacing?.Desktop !== '' ? `letter-spacing: ${ submenuTextLetterSpacing.Desktop }${ submenuTextLetterSpacingUnits?.Desktop || 'px'};` : ''}
            ${submenuTextLineHeight?.Desktop !== '' ? `line-height: ${ submenuTextLineHeight.Desktop }${ submenuTextLineHeightUnits?.Desktop || 'px'};` : ''}
            ${submenuShowTitleOnHover ? `opacity: 0; visibility: hidden;`: ''}

            /* Positioning Overrides */
            ${ ( () => {
				if ( submenuTitlePosition === 'top' ) {
					return `
                        bottom: calc(100% + var(--fb-cmt-offset-v));
                        left: calc(50% + var(--fb-cmt-offset-h));
                        transform: translateX(-50%) translateY(0) scale(0.8);
                        margin: 0 0 10px 0;
                        top: auto;
                        right: auto;
                    `;
				}
				if ( submenuTitlePosition === 'bottom' ) {
					return `
                        top: calc(100% + var(--fb-cmt-offset-v));
                        left: calc(50% + var(--fb-cmt-offset-h));
                        transform: translateX(-50%) translateY(0) scale(0.8);
                        margin: 10px 0 0 0;
                        bottom: auto;
                        right: auto;
                    `;
				}
				if ( submenuTitlePosition === 'left' ) {
					return `
                        right: calc(100% + var(--fb-cmt-offset-h));
                        top: calc(50% + var(--fb-cmt-offset-v));
                        transform: translateY(-50%) translateX(0) scale(0.8);
                        margin: 0 10px 0 0;
                        left: auto;
                        bottom: auto;
                    `;
				}
				if ( submenuTitlePosition === 'right' ) {
					return `
                        left: calc(100% + var(--fb-cmt-offset-h));
                        top: calc(50% + var(--fb-cmt-offset-v));
                        transform: translateY(-50%) translateX(0) scale(0.8);
                        margin: 0 0 0 10px;
                        right: auto;
                        bottom: auto;
                    `;
				}
				return '';
			} )() }
        }

        .${ blockID } .fb-circle-menu-item:hover .fb-circle-menu-tooltip {
            opacity: 1;
            visibility: visible;
            ${ ( () => {
				if ( submenuTitlePosition === 'top' ) {
					return `transform: translateX(-50%) translateY(-5px) scale(1);`;
				}
				if ( submenuTitlePosition === 'bottom' ) {
					return `transform: translateX(-50%) translateY(5px) scale(1);`;
				}
				if ( submenuTitlePosition === 'left' ) {
					return `transform: translateY(-50%) translateX(-5px) scale(1);`;
				}
				if ( submenuTitlePosition === 'right' ) {
					return `transform: translateY(-50%) translateX(5px) scale(1);`;
				}
				return `transform: translateX(-50%) translateY(-5px) scale(1);`;
			} )() }
        }

        .${ blockID } .fb-circle-menu-center {
            background: var(--fb-cm-main-bg);
            border-style: var(--fb-cm-main-border-style);
            border-color: var(--fb-cm-main-border-color);
            border-width: ${ mainMenuBorderDesktopWidth };
            border-radius: ${ mainMenuBorderRadiusDesktopWidth };
            box-shadow: ${ mainMenuBoxShadowCssValue || 'none' };
        }
        
        .${ blockID } .fb-circle-menu-center .fb-circle-menu-toggle svg,
        .${ blockID } .fb-circle-menu-center .fb-circle-menu-toggle i,
        .${ blockID } .fb-circle-menu-center .fb-circle-menu-toggle p,
        .${ blockID } .fb-circle-menu-center .fb-circle-menu-toggle .fb-circle-menu-text {
            color: var(--fb-cm-main-color);
            fill: var(--fb-cm-main-color);
        }

        .${ blockID } .fb-circle-menu:hover .fb-circle-menu-center,
        .${ blockID } .fb-circle-menu-center.is-active {
            background: var(--fb-cm-main-bg-hover);
            border-color: var(--fb-cm-main-border-hover-color);
            box-shadow: ${ mainMenuBoxShadowHoverCssValue || mainMenuBoxShadowCssValue || 'none'};
        }
        
        .${ blockID } .fb-circle-menu:hover .fb-circle-menu-center .fb-circle-menu-toggle svg,
        .${ blockID } .fb-circle-menu:hover .fb-circle-menu-center .fb-circle-menu-toggle i,
        .${ blockID } .fb-circle-menu:hover .fb-circle-menu-center .fb-circle-menu-toggle p,
        .${ blockID } .fb-circle-menu:hover .fb-circle-menu-center .fb-circle-menu-toggle .fb-circle-menu-text,
        .${ blockID } .fb-circle-menu-center.is-active .fb-circle-menu-toggle svg,
        .${ blockID } .fb-circle-menu-center.is-active .fb-circle-menu-toggle i,
        .${ blockID } .fb-circle-menu-center.is-active .fb-circle-menu-toggle p,
        .${ blockID } .fb-circle-menu-center.is-active .fb-circle-menu-toggle .fb-circle-menu-text {
            color: var(--fb-cm-main-color-hover);
            fill: var(--fb-cm-main-color-hover);
        }

        .${ blockID } .fb-circle-menu-item {
            background: var(--fb-cm-sub-bg);
            border-style: var(--fb-cm-sub-border-style);
            border-color: var(--fb-cm-sub-border-color);
            border-width: ${ submenuBorderDesktopWidth };
            border-radius: ${ submenuBorderRadiusDesktopWidth };
            box-shadow: ${ submenuBoxShadowCssValue || 'none' };
        }
        
        .${ blockID } .fb-circle-menu-item .fb-circle-menu-icon svg,
        .${ blockID } .fb-circle-menu-item .fb-circle-menu-icon i,
        .${ blockID } .fb-circle-menu-item .fb-circle-menu-icon p {
            color: var(--fb-cm-sub-color);
            fill: var(--fb-cm-sub-color);
        }

        .${ blockID } .fb-circle-menu-item:hover {
            background: var(--fb-cm-sub-bg-hover);
            border-color: var(--fb-cm-sub-border-hover-color);
            box-shadow: ${ submenuBoxShadowHoverCssValue || submenuBoxShadowCssValue || 'none'};
        }
        
        .${ blockID } .fb-circle-menu-item:hover .fb-circle-menu-icon svg,
        .${ blockID } .fb-circle-menu-item:hover .fb-circle-menu-icon i,
        .${ blockID } .fb-circle-menu-item:hover .fb-circle-menu-icon p {
            color: var(--fb-cm-sub-color-hover);
            fill: var(--fb-cm-sub-color-hover);
        }

        .${ blockID } .fb-circle-menu-tooltip::after {
            ${ ( () => {
				if ( submenuTitlePosition === 'top' ) {
					return `
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border-color: ${ arrowColor } transparent transparent transparent;
                    bottom: auto;
                    right: auto;
                `;
				}
				if ( submenuTitlePosition === 'bottom' ) {
					return `
                    bottom: 100%;
                    left: 50%;
                    top: auto;
                    right: auto;
                    transform: translateX(-50%);
                    border-color: transparent transparent ${ arrowColor } transparent;
                    right: auto;
                `;
				}
				if ( submenuTitlePosition === 'left' ) {
					return `
                    left: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    border-color: transparent transparent transparent ${ arrowColor };
                    bottom: auto;
                    right: auto;
                `;
				}
				if ( submenuTitlePosition === 'right' ) {
					return `
                    right: 100%;
                    left: auto;
                    top: 50%;
                    transform: translateY(-50%);
                    border-color: transparent ${ arrowColor } transparent transparent;
                    bottom: auto;
                `;
				}
				return '';
			} )() }
        }

        ${ generateItemStyles( 'Desktop' ) }

        /* Tablet Media Query */
        @media only screen and (max-width: 1024px) {
            .${ blockID }.fb-circle-menu-main-wrapper {
                --fb-cm-offset-h: ${ offsetH?.Tablet}px;
                --fb-cm-offset-v: ${ offsetV?.Tablet}px;
                ${ circleMenuGlobalZIndex?.Tablet ? `z-index: ${ circleMenuGlobalZIndex.Tablet };` : ''}
                ${ circleMenuHZOrientationType === 'left' && circleMenuHZLeftOffset?.Tablet !== undefined ? `left: ${ circleMenuHZLeftOffset.Tablet }${ circleMenuHZLeftOffsetUnits?.Tablet || 'px' };` : ''}
                ${ circleMenuHZOrientationType === 'right' && circleMenuHZRightOffset?.Tablet !== undefined ? `right: ${ circleMenuHZRightOffset.Tablet }${ circleMenuHZRightOffsetUnits?.Tablet || 'px' };` : ''}
                ${ circleMenuVROrientationType === 'top' && circleMenuVRTopOffset?.Tablet !== undefined ? `top: ${ circleMenuVRTopOffset.Tablet }${ circleMenuVRTopOffsetUnits?.Tablet || 'px' };` : ''}
                ${ circleMenuVROrientationType === 'bottom' && circleMenuVRBottomOffset?.Tablet !== undefined ? `bottom: ${ circleMenuVRBottomOffset.Tablet }${ circleMenuVRBottomOffsetUnits?.Tablet || 'px' };` : ''}
                padding: ${ globalTabletPadding };
                margin: ${ globalTabletMargin };
                border-width: ${ globalTabletBorderWidth };
                border-radius: ${ globalTabletBorderRadiusWidth };
                --fb-cm-wrapper-size: ${ getWrapperSize( 'Tablet' ) }px;
            }

            .${ blockID }.fb-circle-menu-main-wrapper.is-active {
                --fb-cm-offset-h: ${ activeOffsetH?.Tablet || offsetH?.Tablet}px;
                --fb-cm-offset-v: ${ activeOffsetV?.Tablet || offsetV?.Tablet}px;
            }

            .${ blockID } .fb-circle-menu {
                --fb-cm-main-size: ${ mainMenuSize?.Tablet}px;
                --fb-cm-sub-size: ${ submenuSize?.Tablet}px;
                --fb-cm-main-radius: ${mainMenuBorderRadiusTabletWidth};
                --fb-cm-sub-radius: ${submenuBorderRadiusTabletWidth};
                --fb-cm-main-border-width: ${mainMenuBorderTabletWidth};
                --fb-cm-sub-border-width: ${submenuBorderTabletWidth};
            }

            .${ blockID } .fb-circle-menu-toggle svg,
            .${ blockID } .fb-circle-menu-toggle i,
            .${ blockID } .fb-circle-menu-toggle img {
                font-size: ${ mainMenuIconSize?.Tablet}px;
                width: ${ mainMenuIconSize?.Tablet}px;
                height: ${ mainMenuIconSize?.Tablet}px;
            }

            .${ blockID } .fb-circle-menu-icon svg,
            .${ blockID } .fb-circle-menu-icon i,
            .${ blockID } .fb-circle-menu-icon img {
                font-size: ${ submenuIconSize?.Tablet}px;
                width: ${ submenuIconSize?.Tablet}px;
                height: ${ submenuIconSize?.Tablet}px;
            }

            .${ blockID } .fb-circle-menu-text {
                font-size: ${ mainMenuTextFontSize?.Tablet || 16 }${ mainMenuTextFontSizeUnits?.Tablet || 'px' };
                ${ mainMenuTextLetterSpacing?.Tablet !== '' ? `letter-spacing: ${ mainMenuTextLetterSpacing.Tablet }${ mainMenuTextLetterSpacingUnits?.Tablet || 'px' };` : ''}
                ${ mainMenuTextLineHeight?.Tablet !== '' ? `line-height: ${ mainMenuTextLineHeight.Tablet }${ mainMenuTextLineHeightUnits?.Tablet || 'px' };` : ''}
            }

            .${ blockID } .fb-circle-menu-tooltip {
                --fb-cmt-offset-v: ${ submenuTitleOffsetV?.Tablet || submenuTitleOffsetV?.Desktop || 0 }px;
                --fb-cmt-offset-h: ${ submenuTitleOffsetH?.Tablet || submenuTitleOffsetH?.Desktop || 0 }px;
                font-size: ${ submenuTextFontSize?.Tablet || 14 }${ submenuTextFontSizeUnits?.Tablet || 'px'};
                ${submenuTextLetterSpacing?.Tablet !== '' ? `letter-spacing: ${ submenuTextLetterSpacing.Tablet }${ submenuTextLetterSpacingUnits?.Tablet || 'px' };` : ''}
                ${ submenuTextLineHeight?.Tablet !== '' ? `line-height: ${ submenuTextLineHeight.Tablet }${ submenuTextLineHeightUnits?.Tablet || 'px' };` : ''}
            }

            .${ blockID } .fb-circle-menu-center {
                border-width: ${ mainMenuBorderTabletWidth };
                border-radius: ${ mainMenuBorderRadiusTabletWidth };
            }

            .${ blockID } .fb-circle-menu-item {
                border-width: ${ submenuBorderTabletWidth };
                border-radius: ${ submenuBorderRadiusTabletWidth };
            }

            ${ generateItemStyles( 'Tablet' ) }
        }

        /* Mobile Media Query */
        @media only screen and (max-width: 767px) {
            .${ blockID }.fb-circle-menu-main-wrapper {
                --fb-cm-offset-h: ${ offsetH?.Mobile}px;
                --fb-cm-offset-v: ${ offsetV?.Mobile}px;
                ${circleMenuGlobalZIndex?.Mobile ? `z-index: ${ circleMenuGlobalZIndex.Mobile };` : ''}
                ${circleMenuHZOrientationType === 'left' && circleMenuHZLeftOffset?.Mobile !== undefined ? `left: ${ circleMenuHZLeftOffset.Mobile }${ circleMenuHZLeftOffsetUnits?.Mobile || 'px' };` : ''}
                ${circleMenuHZOrientationType === 'right' && circleMenuHZRightOffset?.Mobile !== undefined ? `right: ${ circleMenuHZRightOffset.Mobile }${ circleMenuHZRightOffsetUnits?.Mobile || 'px' };`	: ''}
                ${circleMenuVROrientationType === 'top' && circleMenuVRTopOffset?.Mobile !== undefined ? `top: ${ circleMenuVRTopOffset.Mobile }${ circleMenuVRTopOffsetUnits?.Mobile || 'px' };` : ''}
                ${circleMenuVROrientationType === 'bottom' && circleMenuVRBottomOffset?.Mobile !== undefined ? `bottom: ${ circleMenuVRBottomOffset.Mobile }${ circleMenuVRBottomOffsetUnits?.Mobile || 'px' };` : ''}
                padding: ${ globalMobilePadding };
                margin: ${ globalMobileMargin };
                border-width: ${ globalMobileBorderWidth };
                border-radius: ${ globalMobileBorderRadiusWidth };
                --fb-cm-wrapper-size: ${ getWrapperSize( 'Mobile' ) }px;
            }

            .${ blockID }.fb-circle-menu-main-wrapper.is-active {
                --fb-cm-offset-h: ${ activeOffsetH?.Mobile || offsetH?.Mobile}px;
                --fb-cm-offset-v: ${activeOffsetV?.Mobile || offsetV?.Mobile}px;
            }

            .${ blockID } .fb-circle-menu {
                --fb-cm-main-size: ${ mainMenuSize?.Mobile}px;
                --fb-cm-sub-size: ${ submenuSize?.Mobile}px;
                --fb-cm-main-radius: ${mainMenuBorderRadiusMobileWidth};
                --fb-cm-sub-radius: ${ submenuBorderRadiusMobileWidth};
                --fb-cm-main-border-width: ${mainMenuBorderMobileWidth};
                --fb-cm-sub-border-width: ${submenuBorderMobileWidth};
            }

            .${ blockID } .fb-circle-menu-toggle svg,
            .${ blockID } .fb-circle-menu-toggle i,
            .${ blockID } .fb-circle-menu-toggle img {
                font-size: ${ mainMenuIconSize?.Mobile || 32 }px;
                width: ${ mainMenuIconSize?.Mobile || 32 }px;
                height: ${ mainMenuIconSize?.Mobile || 32 }px;
            }

            .${ blockID } .fb-circle-menu-icon svg,
            .${ blockID } .fb-circle-menu-icon i,
            .${ blockID } .fb-circle-menu-icon img {
                font-size: ${ submenuIconSize?.Mobile || 24 }px;
                width: ${ submenuIconSize?.Mobile || 24 }px;
                height: ${ submenuIconSize?.Mobile || 24 }px;
            }

            .${ blockID } .fb-circle-menu-text {
                font-size: ${ mainMenuTextFontSize?.Mobile || 16 }${ mainMenuTextFontSizeUnits?.Mobile || 'px' };
                ${ mainMenuTextLetterSpacing?.Mobile !== '' ? `letter-spacing: ${ mainMenuTextLetterSpacing.Mobile }${ mainMenuTextLetterSpacingUnits?.Mobile || 'px' };` : '' }
                ${ mainMenuTextLineHeight?.Mobile !== '' ? `line-height: ${ mainMenuTextLineHeight.Mobile }${ mainMenuTextLineHeightUnits?.Mobile || 'px' };` : '' }
            }

            .${ blockID } .fb-circle-menu-tooltip {
                --fb-cmt-offset-v: ${ submenuTitleOffsetV?.Mobile || submenuTitleOffsetV?.Tablet || submenuTitleOffsetV?.Desktop || 0 }px;
                --fb-cmt-offset-h: ${ submenuTitleOffsetH?.Mobile || submenuTitleOffsetH?.Tablet || submenuTitleOffsetH?.Desktop || 0 }px;
                font-size: ${ submenuTextFontSize?.Mobile || 14 }${ submenuTextFontSizeUnits?.Mobile || 'px' };
                ${ submenuTextLetterSpacing?.Mobile !== ''	? `letter-spacing: ${submenuTextLetterSpacing.Mobile}${submenuTextLetterSpacingUnits?.Mobile || 'px' };` : ''}
                ${ submenuTextLineHeight?.Mobile !== '' ? `line-height: ${ submenuTextLineHeight.Mobile }${ submenuTextLineHeightUnits?.Mobile || 'px' };`	: '' }
            }

            .${ blockID } .fb-circle-menu-center {
                border-width: ${ mainMenuBorderMobileWidth };
                border-radius: ${ mainMenuBorderRadiusMobileWidth };
            }

            .${ blockID } .fb-circle-menu-item {
                border-width: ${ submenuBorderMobileWidth };
                border-radius: ${ submenuBorderRadiusMobileWidth };
            }

            ${ generateItemStyles( 'Mobile' ) }
        }
    `;

	const selfClasses = [ 'fb-circle-menu-main-wrapper' ];
	if ( circleMenuGlobalWraperClass ) {
		selfClasses.push( circleMenuGlobalWraperClass );
	}

	let customCss = getCustomCss(
		circleMenuGlobalCustomCSS,
		`.${ blockID }`,
		' ',
		selfClasses
	);

	/**
	 * Post-process custom CSS to handle ID and Tag selectors correctly for the root element.
	 * This ensures selectors like 'div#ID' become 'div.blockID#ID' instead of '.blockID div#ID'.
	 */
	if ( customCss ) {
		/** Fix ID selector: .blockID #ID -> .blockID#ID */
		if ( circleMenuGlobalWraperID ) {
			const idPattern = circleMenuGlobalWraperID.replace(
				/[.*+?^${}()|[\]\\]/g,
				'\\$&'
			);
			const idRegex = new RegExp(
				`\\.${ blockID }\\s+(div)?#${ idPattern }(?![\\w-])`,
				'g'
			);
			customCss = customCss.replace( idRegex, ( match, div ) => {
				return div
					? `div.${ blockID }#${ circleMenuGlobalWraperID }`
					: `.${ blockID }#${ circleMenuGlobalWraperID }`;
			} );
		}

		/** Fix Tag+Class selector: .blockID div.wrapperClass -> div.blockID.wrapperClass */
		selfClasses.forEach( ( cls ) => {
			const clsPattern = cls.replace( /[.*+?^${}()|[\]\\]/g, '\\$&' );
			const tagClassRegex = new RegExp(
				`\\.${ blockID }\\s+div\\.${ clsPattern }(?![\\w-])`,
				'g'
			);
			customCss = customCss.replace(
				tagClassRegex,
				`div.${ blockID }.${ cls }`
			);
		} );
	}

	return `${ circleMenuBlockStyle } ${ customCss }`
		.replace( /\s+/g, ' ' )
		.trim();
};

export default generateCircleMenuStyle;
