import { __ } from '@wordpress/i18n';
import {
	InspectorControls
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	SelectControl,
	BaseControl,
	ButtonGroup,
	Button,
} from '@wordpress/components';
/**
 * Internal depencencies
 */
import {
    BORDER_STYLES,
	ICON_ALIGN,
} from "./constants/constants";
import Select2 from "react-select";
import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_ImageControl from '@Components/image-control';
import FBIconPicker from "../../components/icon-picker";
import {useDeviceType} from "@Config/displayType";
import './editor.scss';

import { useEffect, useMemo } from '@wordpress/element';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		searchButtonWidth,
		searchButtonWidthUnits,
		searchButtonInputFieldWidth,
		searchButtonInputFieldWidthUnits,

		buttonTextGlobalTypographyData,
		buttonTextGlobalTypoSwitcher,
		buttonTextGlobalTypoType,
		buttonTextGlobalTypoOption,
		buttonTextFontFamily,
		buttonTextFontSize,
		buttonTextFontSizeUnits,
		buttonTextFontWeight,
		buttonTextFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonTextLetterSpacing,
		buttonTextLetterSpacingUnits,
		buttonTextLineHeight,
		buttonTextLineHeightUnits,
		
		buttonTextColorSwitcher,
		buttonTextColor,
		buttonTextColorHover,

		buttonBorder,
		buttonBorderColorSwitcher,
		buttonBorderColor,
		buttonBorderColorHover,

		buttonBorderUnits,
		buttonBorderDesktop,
		buttonBorderTablet,
		buttonBorderMobile,
		buttonBorderLink,

		buttonBorderRadiusUnits,
		buttonBorderRadiusDesktop,
		buttonBorderRadiusTablet,
		buttonBorderRadiusMobile,
		buttonBorderRadiusLink,

		buttonPaddingUnits,
		buttonPaddingDesktop,
		buttonPaddingTablet,
		buttonPaddingMobile,
		buttonPaddingLink,

		searchIconAlign,
		searchIcon,
		searchIconImageUrl,
		searchIconImageAlt,
		searchIconImageID,
		searchIconImageWidth,
		searchIconImageWidthUnits,
		searchIconImageHeight,
		searchIconImageHeightUnits,
		searchIconImageDisplay,

		/** Start Icon Styles */
		searchIconSize,
		searchIconSizeUnits,
		searchIconColorSwitcher,
		searchIconColor,
		searchIconHoverColor,
		searchIconBgColorSwitcher,
		searchIconBgColor,
		searchIconBgHoverColor,
		searchIconBorder,
		searchIconBorderColorSwitcher,
		searchIconBorderColor,
		searchIconBorderHoverColor,

		searchIconPaddingUnits,
		searchIconPaddingDesktop,
		searchIconPaddingTablet,
		searchIconPaddingMobile,
		searchIconPaddingLink,

		searchIconBorderUnits,
		searchIconBorderDesktop,
		searchIconBorderTablet,
		searchIconBorderMobile,
		searchIconBorderLink,
		searchIconBorderRadiusUnits,
		searchIconBorderRadiusDesktop,
		searchIconBorderRadiusTablet,
		searchIconBorderRadiusMobile,
		searchIconBorderRadiusLink,
		searchIconRotateSwitcher,
		searchIconRotate,
		searchIconRotateHover,
		searchIconImageRotateSwitcher,
		searchIconImageRotate,
		searchIconImageRotateHover,
		/** End Icon Styles */
		
	} = attributes;

	const deviceType = useDeviceType();

	useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-search-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);
	
	/** Start Button Border */
	const handleButtonBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {buttonBorderDesktop: {...buttonBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonBorderTablet: {...buttonBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonBorderMobile: {...buttonBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleButtonBorderCombineBtn = () => {
		setAttributes( {buttonBorderLink: !buttonBorderLink} );
	}

	const handleButtonBorderUnitsHandler = (unit) => {
		setAttributes( {
			buttonBorderUnits: {
				...buttonBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const buttonBorderDesktopWidth = `${buttonBorderDesktop.top}${buttonBorderUnits.Desktop} ${buttonBorderDesktop.right}${buttonBorderUnits.Desktop} ${buttonBorderDesktop.bottom}${buttonBorderUnits.Desktop} ${buttonBorderDesktop.left}${buttonBorderUnits.Desktop}`;
	const buttonBorderTabletWidth = `${buttonBorderTablet.top}${buttonBorderUnits.Tablet} ${buttonBorderTablet.right}${buttonBorderUnits.Tablet} ${buttonBorderTablet.bottom}${buttonBorderUnits.Tablet} ${buttonBorderTablet.left}${buttonBorderUnits.Tablet}`;
	const buttonBorderMobileWidth = `${buttonBorderMobile.top}${buttonBorderUnits.Mobile} ${buttonBorderMobile.right}${buttonBorderUnits.Mobile} ${buttonBorderMobile.bottom}${buttonBorderUnits.Mobile} ${buttonBorderMobile.left}${buttonBorderUnits.Mobile}`;
	/** End Border */

	/** Start Button Border Radius*/
	const handleButtonBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {buttonBorderRadiusDesktop: {...buttonBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonBorderRadiusTablet: {...buttonBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonBorderRadiusMobile: {...buttonBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleButtonBorderRadiusCombineBtn = () => {
		setAttributes( {buttonBorderRadiusLink: !buttonBorderRadiusLink} );
	}

	const handleButtonBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			buttonBorderRadiusUnits: {
				...buttonBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Button Border Radius */

	/** Start Button Border Radius */
	const buttonBorderRadiusDesktopWidth = `${buttonBorderRadiusDesktop.top}${buttonBorderRadiusUnits.Desktop} ${buttonBorderRadiusDesktop.right}${buttonBorderRadiusUnits.Desktop} ${buttonBorderRadiusDesktop.bottom}${buttonBorderRadiusUnits.Desktop} ${buttonBorderRadiusDesktop.left}${buttonBorderRadiusUnits.Desktop}`;
	const buttonBorderRadiusTabletWidth = `${buttonBorderRadiusTablet.top}${buttonBorderRadiusUnits.Tablet} ${buttonBorderRadiusTablet.right}${buttonBorderRadiusUnits.Tablet} ${buttonBorderRadiusTablet.bottom}${buttonBorderRadiusUnits.Tablet} ${buttonBorderRadiusTablet.left}${buttonBorderRadiusUnits.Tablet}`;
	const buttonBorderRadiusMobileWidth = `${buttonBorderRadiusMobile.top}${buttonBorderRadiusUnits.Mobile} ${buttonBorderRadiusMobile.right}${buttonBorderRadiusUnits.Mobile} ${buttonBorderRadiusMobile.bottom}${buttonBorderRadiusUnits.Mobile} ${buttonBorderRadiusMobile.left}${buttonBorderRadiusUnits.Mobile}`;
	/** End Button Border Radius */

	/** Start Button Padding*/
	const handleButtonPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {buttonPaddingDesktop: {...buttonPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonPaddingTablet: {...buttonPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonPaddingMobile: {...buttonPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleButtonPaddingCombineBtn = () => {
		setAttributes( {buttonPaddingLink: !buttonPaddingLink} );
	}

	const handleButtonPaddingUnitsHandler = (unit) => {
		setAttributes( {
			buttonPaddingUnits: {
				...buttonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Button Padding */

	/** Start Button Padding */
	const buttonPaddingDesktopWidth = `${buttonPaddingDesktop.top}${buttonPaddingUnits.Desktop} ${buttonPaddingDesktop.right}${buttonPaddingUnits.Desktop} ${buttonPaddingDesktop.bottom}${buttonPaddingUnits.Desktop} ${buttonPaddingDesktop.left}${buttonPaddingUnits.Desktop}`;
	const buttonPaddingTabletWidth = `${buttonPaddingTablet.top}${buttonPaddingUnits.Tablet} ${buttonPaddingTablet.right}${buttonPaddingUnits.Tablet} ${buttonPaddingTablet.bottom}${buttonPaddingUnits.Tablet} ${buttonPaddingTablet.left}${buttonPaddingUnits.Tablet}`;
	const buttonPaddingMobileWidth = `${buttonPaddingMobile.top}${buttonPaddingUnits.Mobile} ${buttonPaddingMobile.right}${buttonPaddingUnits.Mobile} ${buttonPaddingMobile.bottom}${buttonPaddingUnits.Mobile} ${buttonPaddingMobile.left}${buttonPaddingUnits.Mobile}`;
	/** End Button Padding */

	/** Start Icon padding */
	const handleSearchIconPaddingUnitChange = ( event, position ) => { 
		const value = event.target.value;
		if ( searchIconPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						searchIconPaddingDesktop: { 
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						searchIconPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						searchIconPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {searchIconPaddingDesktop: {...searchIconPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {searchIconPaddingTablet: {...searchIconPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {searchIconPaddingMobile: {...searchIconPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSearchIconPaddingCombineBtn = () => { 
		setAttributes( {searchIconPaddingLink: !searchIconPaddingLink} );
	}

	const handleSearchIconPaddingUnitsHandler = (unit) => { 
		setAttributes( {
			searchIconPaddingUnits: {
				...searchIconPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Icon padding */
	const searchIconPaddingDesktopWidth = `${searchIconPaddingDesktop.top}${searchIconPaddingUnits.Desktop} ${searchIconPaddingDesktop.right}${searchIconPaddingUnits.Desktop} ${searchIconPaddingDesktop.bottom}${searchIconPaddingUnits.Desktop} ${searchIconPaddingDesktop.left}${searchIconPaddingUnits.Desktop}`;
	const searchIconPaddingTabletWidth = `${searchIconPaddingTablet.top}${searchIconPaddingUnits.Tablet} ${searchIconPaddingTablet.right}${searchIconPaddingUnits.Tablet} ${searchIconPaddingTablet.bottom}${searchIconPaddingUnits.Tablet} ${searchIconPaddingTablet.left}${searchIconPaddingUnits.Tablet}`;
	const searchIconPaddingMobileWidth = `${searchIconPaddingMobile.top}${searchIconPaddingUnits.Mobile} ${searchIconPaddingMobile.right}${searchIconPaddingUnits.Mobile} ${searchIconPaddingMobile.bottom}${searchIconPaddingUnits.Mobile} ${searchIconPaddingMobile.left}${searchIconPaddingUnits.Mobile}`;
	/** End Border */
	
	/** Start Icon border */
	const handleSearchIconBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( searchIconBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						searchIconBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						searchIconBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						searchIconBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {searchIconBorderDesktop: {...searchIconBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {searchIconBorderTablet: {...searchIconBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {searchIconBorderMobile: {...searchIconBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSearchIconBorderCombineBtn = () => {
		setAttributes( {searchIconBorderLink: !searchIconBorderLink} );
	}

	const handleSearchIconBorderUnitsHandler = (unit) => {
		setAttributes( {
			searchIconBorderUnits: {
				...searchIconBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Icon border */
	const searchIconBorderDesktopWidth = `${searchIconBorderDesktop.top}${searchIconBorderUnits.Desktop} ${searchIconBorderDesktop.right}${searchIconBorderUnits.Desktop} ${searchIconBorderDesktop.bottom}${searchIconBorderUnits.Desktop} ${searchIconBorderDesktop.left}${searchIconBorderUnits.Desktop}`;
	const searchIconBorderTabletWidth = `${searchIconBorderTablet.top}${searchIconBorderUnits.Tablet} ${searchIconBorderTablet.right}${searchIconBorderUnits.Tablet} ${searchIconBorderTablet.bottom}${searchIconBorderUnits.Tablet} ${searchIconBorderTablet.left}${searchIconBorderUnits.Tablet}`;
	const searchIconBorderMobileWidth = `${searchIconBorderMobile.top}${searchIconBorderUnits.Mobile} ${searchIconBorderMobile.right}${searchIconBorderUnits.Mobile} ${searchIconBorderMobile.bottom}${searchIconBorderUnits.Mobile} ${searchIconBorderMobile.left}${searchIconBorderUnits.Mobile}`;
	/** End Border */


	/** Start Icon border radius*/
	const handleSearchIconBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( searchIconBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						searchIconBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						searchIconBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						searchIconBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {searchIconBorderRadiusDesktop: {...searchIconBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {searchIconBorderRadiusTablet: {...searchIconBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {searchIconBorderRadiusMobile: {...searchIconBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSearchIconBorderRadiusCombineBtn = () => {
		setAttributes( {searchIconBorderRadiusLink: !searchIconBorderRadiusLink} );
	}

	const handleSearchIconBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			searchIconBorderRadiusUnits: {
				...searchIconBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Icon Border Radius */
	const searchIconBorderRadiusDesktopWidth = `${searchIconBorderRadiusDesktop.top}${searchIconBorderRadiusUnits.Desktop} ${searchIconBorderRadiusDesktop.right}${searchIconBorderRadiusUnits.Desktop} ${searchIconBorderRadiusDesktop.bottom}${searchIconBorderRadiusUnits.Desktop} ${searchIconBorderRadiusDesktop.left}${searchIconBorderRadiusUnits.Desktop}`;
	const searchIconBorderRadiusTabletWidth = `${searchIconBorderRadiusTablet.top}${searchIconBorderRadiusUnits.Tablet} ${searchIconBorderRadiusTablet.right}${searchIconBorderRadiusUnits.Tablet} ${searchIconBorderRadiusTablet.bottom}${searchIconBorderRadiusUnits.Tablet} ${searchIconBorderRadiusTablet.left}${searchIconBorderRadiusUnits.Tablet}`;
	const searchIconBorderRadiusMobileWidth = `${searchIconBorderRadiusMobile.top}${searchIconBorderRadiusUnits.Mobile} ${searchIconBorderRadiusMobile.right}${searchIconBorderRadiusUnits.Mobile} ${searchIconBorderRadiusMobile.bottom}${searchIconBorderRadiusUnits.Mobile} ${searchIconBorderRadiusMobile.left}${searchIconBorderRadiusUnits.Mobile}`;
	/** End Border Radius */


	/** Start Icon Handler */
	const iconHandler = (IconName) => {
		setAttributes({searchIcon: IconName})
	}
	/** End Icon Handler */


    const allBlockStyle = useMemo(() => `
		.${blockId} .fb-search-container .fb-search-button-wrapper {
			${searchButtonWidth.Desktop && searchButtonWidthUnits.Desktop ? `width: ${searchButtonWidth.Desktop}${searchButtonWidthUnits.Desktop};` : ''}
			${buttonBorder ? `border: ${buttonBorder};` : ''}
			${buttonBorderColor ? `border-color: ${buttonBorderColor};` : ''}
			${buttonBorderDesktopWidth && buttonBorderDesktop?.top ? `border-width: ${buttonBorderDesktopWidth};` : ''}
			${buttonBorderRadiusDesktopWidth && buttonBorderRadiusDesktop?.top ? `border-radius: ${buttonBorderRadiusDesktopWidth};` : ''}
			${buttonPaddingDesktopWidth && buttonPaddingDesktop?.top ? `padding: ${buttonPaddingDesktopWidth};` : ''}
			transition: ease-in-out 0.3s;
        }
		.${blockId} .fb-search-container .fb-search-button-wrapper:hover {
			${buttonBorderColorHover ? `border-color: ${buttonBorderColorHover};` : ''}
		}

		.${blockId} .fb-search-container .fb-search-block-wrapper-inner-input-field.active {
			${searchButtonInputFieldWidth.Desktop && searchButtonInputFieldWidthUnits.Desktop ? `width: ${searchButtonInputFieldWidth.Desktop}${searchButtonInputFieldWidthUnits.Desktop};` : ''}
        }

		.${blockId} .fb-search-container .fb-search-button-wrapper span {
            ${buttonTextGlobalTypoSwitcher.fontFamily === true && buttonTextGlobalTypographyData.fontFamily ? `font-family: ${buttonTextGlobalTypographyData.fontFamily};` : ''}
            ${buttonTextGlobalTypoSwitcher.fontSize === true && buttonTextGlobalTypographyData.fontSize ? `font-size: ${buttonTextGlobalTypographyData.fontSize};` : ''}
            ${buttonTextGlobalTypoSwitcher.fontWeight === true && buttonTextGlobalTypographyData.fontWeight ? `font-weight: ${buttonTextGlobalTypographyData.fontWeight};` : ''}
            ${buttonTextGlobalTypoSwitcher.fontStyle === true && buttonTextGlobalTypographyData.fontStyle ? `font-style: ${buttonTextGlobalTypographyData.fontStyle};` : ''}
            ${buttonTextGlobalTypoSwitcher.textTransform === true && buttonTextGlobalTypographyData.textTransform ? `text-transform: ${buttonTextGlobalTypographyData.textTransform};` : ''}
            ${buttonTextGlobalTypoSwitcher.textDecoration === true && buttonTextGlobalTypographyData.textDecoration ? `text-decoration: ${buttonTextGlobalTypographyData.textDecoration};` : ''}
            ${buttonTextGlobalTypoSwitcher.letterSpacing === true && buttonTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${buttonTextGlobalTypographyData.letterSpacing};` : ''}
            ${buttonTextGlobalTypoSwitcher.lineHeight === true && buttonTextGlobalTypographyData.lineHeight ? `line-height: ${buttonTextGlobalTypographyData.lineHeight};` : ''}
                
            ${buttonTextGlobalTypoSwitcher.fontFamily === false && buttonTextFontFamily && buttonTextFontFamily !== 'Default' ? `font-family: ${buttonTextFontFamily};` : ''}
            ${buttonTextGlobalTypoSwitcher.fontSize === false && buttonTextFontSize.Desktop && buttonTextFontSizeUnits.Desktop ? `font-size: ${buttonTextFontSize.Desktop}${buttonTextFontSizeUnits.Desktop};` : ''}
            ${buttonTextGlobalTypoSwitcher.fontWeight === false && buttonTextFontWeight ? `font-weight: ${buttonTextFontWeight};` : ''}
            ${buttonTextGlobalTypoSwitcher.fontStyle === false && buttonTextFontStyle ? `font-style: ${buttonTextFontStyle};` : ''}
            ${buttonTextGlobalTypoSwitcher.textTransform === false && buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ''}
            ${buttonTextGlobalTypoSwitcher.textDecoration === false && buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ''}
            ${buttonTextGlobalTypoSwitcher.letterSpacing === false && buttonTextLetterSpacing.Desktop && buttonTextLetterSpacingUnits.Desktop ? `letter-spacing: ${buttonTextLetterSpacing.Desktop}${buttonTextLetterSpacingUnits.Desktop};` : ''}
            ${buttonTextGlobalTypoSwitcher.lineHeight === false && buttonTextLineHeight.Desktop && buttonTextLineHeightUnits.Desktop ? `line-height: ${buttonTextLineHeight.Desktop}${buttonTextLineHeightUnits.Desktop};` : ''}

			${ buttonTextColor ? `color: ${buttonTextColor};` : ''}
		}
		.${blockId} .fb-search-container .fb-search-button-wrapper:hover span {
			${buttonTextColorHover ? `color: ${buttonTextColorHover};` : ''}
		}

		@media only screen and (max-width: 1024px) {
			.${blockId} .fb-search-container .fb-search-button-wrapper {
				${searchButtonWidth.Tablet && searchButtonWidthUnits.Tablet ? `width: ${searchButtonWidth.Tablet}${searchButtonWidthUnits.Tablet};` : ''}
				${buttonBorderTabletWidth && buttonBorderTablet?.top ? `border-width: ${buttonBorderTabletWidth};` : ''}
				${buttonBorderRadiusTabletWidth && buttonBorderRadiusTablet?.top ? `border-radius: ${buttonBorderRadiusTabletWidth};` : ''}
				${buttonPaddingTabletWidth && buttonPaddingTablet?.top ? `padding: ${buttonPaddingTabletWidth};` : ''}
			}

			.${blockId} .fb-search-container .fb-search-block-wrapper-inner-input-field.active {
				${searchButtonInputFieldWidth.Tablet && searchButtonInputFieldWidthUnits.Tablet ? `width: ${searchButtonInputFieldWidth.Tablet}${searchButtonInputFieldWidthUnits.Tablet};` : ''}
			}

			.${blockId} .fb-search-container .fb-search-button-wrapper span {
                ${buttonTextGlobalTypoSwitcher.fontSize === false && buttonTextFontSize.Tablet && buttonTextFontSizeUnits.Tablet ? `font-size: ${buttonTextFontSize.Tablet}${buttonTextFontSizeUnits.Tablet};` : ''}
                ${buttonTextGlobalTypoSwitcher.letterSpacing === false && buttonTextLetterSpacing.Tablet && buttonTextLetterSpacingUnits.Tablet ? `letter-spacing: ${buttonTextLetterSpacing.Tablet}${buttonTextLetterSpacingUnits.Tablet};` : ''}
                ${buttonTextGlobalTypoSwitcher.lineHeight === false && buttonTextLineHeight.Tablet && buttonTextLineHeightUnits.Tablet ? `line-height: ${buttonTextLineHeight.Tablet}${buttonTextLineHeightUnits.Tablet};` : ''}
			}
		}
		@media only screen and (max-width: 767px) {
			.${blockId} .fb-search-container .fb-search-button-wrapper {
				${searchButtonWidth.Mobile && searchButtonWidthUnits.Mobile ? `width: ${searchButtonWidth.Mobile}${searchButtonWidthUnits.Mobile};` : ''}
				${buttonBorderMobileWidth && buttonBorderMobile?.top ? `border-width: ${buttonBorderMobileWidth};` : ''}
				${buttonBorderRadiusMobileWidth && buttonBorderRadiusMobile?.top ? `border-radius: ${buttonBorderRadiusMobileWidth};` : ''}
				${buttonPaddingMobileWidth && buttonPaddingMobile?.top ? `padding: ${buttonPaddingMobileWidth};` : ''}
			}

			.${blockId} .fb-search-container .fb-search-block-wrapper-inner-input-field.active {
				${searchButtonInputFieldWidth.Mobile && searchButtonInputFieldWidthUnits.Mobile ? `width: ${searchButtonInputFieldWidth.Mobile}${searchButtonInputFieldWidthUnits.Mobile};` : ''}
			}

			.${blockId} .fb-search-container .fb-search-button-wrapper span {
                ${buttonTextGlobalTypoSwitcher.fontSize === false && buttonTextFontSize.Mobile && buttonTextFontSizeUnits.Mobile ? `font-size: ${buttonTextFontSize.Mobile}${buttonTextFontSizeUnits.Mobile};` : ''}
                ${buttonTextGlobalTypoSwitcher.letterSpacing === false && buttonTextLetterSpacing.Mobile && buttonTextLetterSpacingUnits.Mobile ? `letter-spacing: ${buttonTextLetterSpacing.Mobile}${buttonTextLetterSpacingUnits.Mobile};` : ''}
                ${buttonTextGlobalTypoSwitcher.lineHeight === false && buttonTextLineHeight.Mobile && buttonTextLineHeightUnits.Mobile ? `line-height: ${buttonTextLineHeight.Mobile}${buttonTextLineHeightUnits.Mobile};` : ''}
			}
    `, [
		blockId,
		searchButtonWidth,
		searchButtonWidthUnits,
		searchButtonInputFieldWidth,
		searchButtonInputFieldWidthUnits,

		buttonTextGlobalTypographyData,
		buttonTextGlobalTypoSwitcher,
		buttonTextGlobalTypoType,
		buttonTextGlobalTypoOption,
		buttonTextFontFamily,
		buttonTextFontSize,
		buttonTextFontSizeUnits,
		buttonTextFontWeight,
		buttonTextFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonTextLetterSpacing,
		buttonTextLetterSpacingUnits,
		buttonTextLineHeight,
		buttonTextLineHeightUnits,

		buttonTextColorSwitcher,
		buttonTextColor,
		buttonTextColorHover,


		buttonBorder,
		buttonBorderColorSwitcher,
		buttonBorderColor,
		buttonBorderColorHover,

		buttonBorderUnits,
		buttonBorderDesktop,
		buttonBorderTablet,
		buttonBorderMobile,
		buttonBorderLink,
		buttonBorderDesktopWidth,
		buttonBorderTabletWidth,
		buttonBorderMobileWidth,

		buttonBorderRadiusUnits,
		buttonBorderRadiusDesktop,
		buttonBorderRadiusTablet,
		buttonBorderRadiusMobile,
		buttonBorderRadiusLink,
		buttonBorderRadiusDesktopWidth,
		buttonBorderRadiusTabletWidth,
		buttonBorderRadiusMobileWidth,

		buttonPaddingUnits,
		buttonPaddingDesktop,
		buttonPaddingTablet,
		buttonPaddingMobile,
		buttonPaddingLink,
		buttonPaddingDesktopWidth,
		buttonPaddingTabletWidth,
		buttonPaddingMobileWidth,

    ]);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle] );

    const editorStyle = `${allBlockStyle}`.replace(/\s+/g, ' ').trim();

	return (
		<>
			<style>
				{editorStyle}
			</style>
			<InspectorControls key="controls">
				<div className="fb-inspector-control">
					<TabPanel
						className="fb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{
								name: "general",
								title: "General",
								className: "fb-tab general",
							},
							{
								name: "styles",
								title: "Style",
								className: "fb-tab styles",
							},
							{
								name: "advanced",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls " + tab.name}>
								{tab.name === 'general' && (
									<>
										<PanelBody title={__("General Settings", "frontis-blocks")} initialOpen={true}>
											<FB_Range
												min={1}
												max={1000}
												label={__("Button Width", "frontis-blocks")}
												rangeValue={searchButtonWidth}
												onChangeHandler={(value) => setAttributes({ searchButtonWidth: value })}
												rangeUnitHandler={(value) => setAttributes({ searchButtonWidthUnits: value })}
												deviceType={deviceType}
												units={searchButtonWidthUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={"88"}
											/>

											<FB_Range
												min={1}
												max={1500}
												label={__("Search Field Width", "frontis-blocks")}
												rangeValue={searchButtonInputFieldWidth}
												onChangeHandler={(value) => setAttributes({ searchButtonInputFieldWidth: value })}
												rangeUnitHandler={(value) => setAttributes({ searchButtonInputFieldWidthUnits: value })}
												deviceType={deviceType}
												units={searchButtonInputFieldWidthUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={"1080"}
											/>

											<BaseControl
												label={__("Icon", "frontis-blocks")}
													id="fb-setting-text-alignment"
													className="fb-setting-text-alignment"
											>
												<ButtonGroup
													className="fb-setting-text-alignment-group-btn"
												>
													{ICON_ALIGN.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ searchIconAlign: item.value })} 
															className={`fb-setting-text-alignment-single-btn ${searchIconAlign === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
												{(searchIconAlign === 'icon-text') && (
													<FBIconPicker value={searchIcon} setIconHandler={iconHandler} /> 
												)}

												{(searchIconAlign === 'image') && (
													<FB_ImageControl 
														globalImageUrl={searchIconImageUrl}
														setglobalImageUrl={(value) => setAttributes({ searchIconImageUrl: value })}
														globalImageAlt={searchIconImageAlt}
														setglobalImageAlt={(value) => setAttributes({ searchIconImageAlt: value })}
														globalImageID={searchIconImageID}
														setglobalImageID={(value) => setAttributes({ searchIconImageID: value })}
														globalImageSize={searchIconImageDisplay}
														setglobalImageSize={(value) => setAttributes({ searchIconImageDisplay: value })}
													/>
												)}

											</BaseControl>
										</PanelBody>
									</>
								)}
								{tab.name === "styles" && (
									<>
										<PanelBody title={__("Search Button", "frontis-blocks")} initialOpen={true}>
											<FB_TypographyControl
                                                globalTypoControlActive={true}
                                                globalTypoSwitcher={buttonTextGlobalTypoSwitcher}
                                                storeGlobalTypographyData={(value) => setAttributes({ buttonTextGlobalTypographyData: value })}

                                                globalTypoType={buttonTextGlobalTypoType}
                                                onChangeGlobalTypoType={(value) => {
                                                    setAttributes({ 
                                                        buttonTextGlobalTypoType: value, 
                                                        buttonTextGlobalTypoSwitcher: value === 'default' ? {...buttonTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...buttonTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                                                    })
                                                }}

                                                globalTypoOption={buttonTextGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ buttonTextGlobalTypoOption: value })}

                                                fontFamily={buttonTextFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ buttonTextFontFamily: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, fontFamily: value && false} })}

                                                fontSize={buttonTextFontSize}
                                                onChangeFontSize={(value) => setAttributes({ buttonTextFontSize: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, fontSize: value && false} })}

                                                fontSizeUnits={buttonTextFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ buttonTextFontSizeUnits: value })}

                                                fontWeight={buttonTextFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ buttonTextFontWeight: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, fontWeight: value && false} })}

                                                fontStyle={buttonTextFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ buttonTextFontStyle: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, fontStyle: value && false} })}

                                                textTransform={buttonTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ buttonTextTransform: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, textTransform: value && false} })}

                                                textDecoration={buttonTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ buttonTextDecoration: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, textDecoration: value && false} })}

                                                letterSpacing={buttonTextLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ buttonTextLetterSpacing: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                                                letterSpacingUnits={buttonTextLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ buttonTextLetterSpacingUnits: value })}

                                                lineHeight={buttonTextLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ buttonTextLineHeight: value, buttonTextGlobalTypoSwitcher: {...buttonTextGlobalTypoSwitcher, lineHeight: value && false} })}

                                                lineHeightUnits={buttonTextLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ buttonTextLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

											<FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={buttonTextColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ buttonTextColorSwitcher: value })}
                                            />

                                            {buttonTextColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={buttonTextColor}
                                                    setGlobalColor={(value) => setAttributes({ buttonTextColor: value })}
                                                />
                                            )}

                                            {buttonTextColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={buttonTextColorHover}
                                                    setGlobalColor={(value) => setAttributes({ buttonTextColorHover: value })}
                                                />
                                            )}

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={buttonBorder}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({ buttonBorder: value })}
											/>

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={buttonBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ buttonBorderColorSwitcher: value })}
											/>

											{buttonBorderColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={buttonBorderColor}
													setGlobalColor={(value) => setAttributes({ buttonBorderColor: value })}
												/>
											)}

											{buttonBorderColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={buttonBorderColorHover}
													setGlobalColor={(value) => setAttributes({ buttonBorderColorHover: value })}
												/>
											)}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonBorderUnitsHandler}
												spacingUnits={buttonBorderUnits}
												spacingDesktop={buttonBorderDesktop}
												spacingTablet={buttonBorderTablet}
												spacingMobile={buttonBorderMobile}
												handleSpacingUnitHandler={handleButtonBorderUnitChange}
												spacingCombineBtn={buttonBorderLink}
												spacingCombineBtnHandler={handleButtonBorderCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonBorderRadiusUnitsHandler}
												spacingUnits={buttonBorderRadiusUnits}
												spacingDesktop={buttonBorderRadiusDesktop}
												spacingTablet={buttonBorderRadiusTablet}
												spacingMobile={buttonBorderRadiusMobile}
												handleSpacingUnitHandler={handleButtonBorderRadiusUnitChange}  
												spacingCombineBtn={buttonBorderRadiusLink}
												spacingCombineBtnHandler={handleButtonBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonPaddingUnitsHandler}
												spacingUnits={buttonPaddingUnits}
												spacingDesktop={buttonPaddingDesktop}
												spacingTablet={buttonPaddingTablet}
												spacingMobile={buttonPaddingMobile}
												handleSpacingUnitHandler={handleButtonPaddingUnitChange}  
												spacingCombineBtn={buttonPaddingLink}
												spacingCombineBtnHandler={handleButtonPaddingCombineBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>

										{(searchIconAlign === 'icon-text') && (
											<PanelBody
												title={__("Icon Styles", "frontis-blocks")}
												initialOpen={true}
											>
												<FB_Range
													min={1}
													max={200}
													label={__("Icon Size", "frontis-blocks")}
													rangeValue={searchIconSize}
													onChangeHandler={(value) => setAttributes({ searchIconSize: value })}
													rangeUnitHandler={(value) => setAttributes({ searchIconSizeUnits: value })}
													deviceType={deviceType}
													units={searchIconSizeUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={25}
												/>

												<FB_SwitcherControl
													label={__("Icon Color", "frontis-blocks")}
													globalSwitcher={searchIconColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ searchIconColorSwitcher: value })}
												/>

												{searchIconColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchIconColor}
														setGlobalColor={(value) => setAttributes({ searchIconColor: value })}
													/>
												)}

												{searchIconColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchIconHoverColor}
														setGlobalColor={(value) => setAttributes({ searchIconHoverColor: value })}
													/>
												)}

												<FB_SwitcherControl
													label={__("Background Color", "frontis-blocks")}
													globalSwitcher={searchIconBgColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ searchIconBgColorSwitcher: value })}
												/>

												{searchIconBgColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchIconBgColor}
														setGlobalColor={(value) => setAttributes({ searchIconBgColor: value })}
													/>
												)}

												{searchIconBgColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchIconBgHoverColor}
														setGlobalColor={(value) => setAttributes({ searchIconBgHoverColor: value })}
													/>
												)}

												<FB_Spacing 
													label={__("Padding", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleSearchIconPaddingUnitsHandler}
													spacingUnits={searchIconPaddingUnits}
													spacingDesktop={searchIconPaddingDesktop}
													spacingTablet={searchIconPaddingTablet}
													spacingMobile={searchIconPaddingMobile}
													handleSpacingUnitHandler={handleSearchIconPaddingUnitChange}
													spacingCombineBtn={searchIconPaddingLink}
													spacingCombineBtnHandler={handleSearchIconPaddingCombineBtn}
													setAttributes={setAttributes}
												/>

												<SelectControl
													label={__("Border Style", "frontis-blocks")}
													value={searchIconBorder}
													options={BORDER_STYLES}
													onChange={(value) => setAttributes({ searchIconBorder: value })}
												/>

												<FB_SwitcherControl
													label={__("Border Color", "frontis-blocks")}
													globalSwitcher={searchIconBorderColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ searchIconBorderColorSwitcher: value })}
												/>

												{searchIconBorderColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchIconBorderColor}
														setGlobalColor={(value) => setAttributes({ searchIconBorderColor: value })}
													/>
												)}

												{searchIconBorderColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchIconBorderHoverColor}
														setGlobalColor={(value) => setAttributes({ searchIconBorderHoverColor: value })}
													/>
												)}

												<FB_Spacing 
													label={__("Border", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleSearchIconBorderUnitsHandler}
													spacingUnits={searchIconBorderUnits}
													spacingDesktop={searchIconBorderDesktop}
													spacingTablet={searchIconBorderTablet}
													spacingMobile={searchIconBorderMobile}
													handleSpacingUnitHandler={handleSearchIconBorderUnitChange}
													spacingCombineBtn={searchIconBorderLink}
													spacingCombineBtnHandler={handleSearchIconBorderCombineBtn}
													setAttributes={setAttributes}
												/>
												<FB_Spacing 
													label={__("Radius Border", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleSearchIconBorderRadiusUnitsHandler}
													spacingUnits={searchIconBorderRadiusUnits}
													spacingDesktop={searchIconBorderRadiusDesktop}
													spacingTablet={searchIconBorderRadiusTablet}
													spacingMobile={searchIconBorderRadiusMobile}
													handleSpacingUnitHandler={handleSearchIconBorderRadiusUnitChange}
													spacingCombineBtn={searchIconBorderRadiusLink}
													spacingCombineBtnHandler={handleSearchIconBorderRadiusCombineBtn}
													setAttributes={setAttributes}
												/>

												<FB_SwitcherControl
													label={__("Icon Rotation", "frontis-blocks")}
													globalSwitcher={searchIconRotateSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ searchIconRotateSwitcher: value })}
												/>

												{searchIconRotateSwitcher === 'normal' && (
													<FB_Range 
														min={-360}
														max={360}
														label={__("Icon Rotation", "frontis-blocks")}
														rangeValue={searchIconRotate}
														onChangeHandler={(value) => setAttributes({ searchIconRotate: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}

													/>
												)}

												{searchIconRotateSwitcher === 'hover' && (
													<FB_Range
														min={-360}
														max={360}
														label={__("Icon Rotation", "frontis-blocks")}
														rangeValue={searchIconRotateHover}
														onChangeHandler={(value) => setAttributes({ searchIconRotateHover: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}
													/>
												)}

											</PanelBody>
										)}
										{(searchIconAlign === 'image') &&(
											<PanelBody
												title={__("Image Styles", "frontis-blocks")}
												initialOpen={true}
											>
												<FB_Range
													min={1}
													max={200}
													label={__("Image Width", "frontis-blocks")}
													rangeValue={searchIconImageWidth}
													onChangeHandler={(value) => setAttributes({ searchIconImageWidth: value })}
													rangeUnitHandler={(value) => setAttributes({ searchIconImageWidthUnits: value })}
													deviceType={deviceType}
													units={searchIconImageWidthUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={20}
												/>

												<FB_Range
													min={1}
													max={200}
													label={__("Image Height", "frontis-blocks")}
													rangeValue={searchIconImageHeight}
													onChangeHandler={(value) => setAttributes({ searchIconImageHeight: value })}
													rangeUnitHandler={(value) => setAttributes({ searchIconImageHeightUnits: value })}
													deviceType={deviceType}
													units={searchIconImageHeightUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={20}
												/>

												<FB_Spacing 
													label={__("Padding", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleSearchIconPaddingUnitsHandler}
													spacingUnits={searchIconPaddingUnits}
													spacingDesktop={searchIconPaddingDesktop}
													spacingTablet={searchIconPaddingTablet}
													spacingMobile={searchIconPaddingMobile}
													handleSpacingUnitHandler={handleSearchIconPaddingUnitChange}
													spacingCombineBtn={searchIconPaddingLink}
													spacingCombineBtnHandler={handleSearchIconPaddingCombineBtn}
													setAttributes={setAttributes}
												/>

												<SelectControl
													label={__("Border Style", "frontis-blocks")}
													value={searchIconBorder}
													options={BORDER_STYLES}
													onChange={(value) => setAttributes({ searchIconBorder: value })}
												/>

												<FB_SwitcherControl
													label={__("Border Color", "frontis-blocks")}
													globalSwitcher={searchIconBorderColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ searchIconBorderColorSwitcher: value })}
												/>

												{searchIconBorderColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={searchIconBorderColor}
														setGlobalColor={(value) => setAttributes({ searchIconBorderColor: value })}
													/>
												)}

												{searchIconBorderColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={searchIconBorderHoverColor}
														setGlobalColor={(value) => setAttributes({ searchIconBorderHoverColor: value })}
													/>
												)}

												<FB_Spacing 
													label={__("Border", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleSearchIconBorderUnitsHandler}
													spacingUnits={searchIconBorderUnits}
													spacingDesktop={searchIconBorderDesktop}
													spacingTablet={searchIconBorderTablet}
													spacingMobile={searchIconBorderMobile}
													handleSpacingUnitHandler={handleSearchIconBorderUnitChange}
													spacingCombineBtn={searchIconBorderLink}
													spacingCombineBtnHandler={handleSearchIconBorderCombineBtn}
													setAttributes={setAttributes}
												/>
												<FB_Spacing 
													label={__("Radius Border", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleSearchIconBorderRadiusUnitsHandler}
													spacingUnits={searchIconBorderRadiusUnits}
													spacingDesktop={searchIconBorderRadiusDesktop}
													spacingTablet={searchIconBorderRadiusTablet}
													spacingMobile={searchIconBorderRadiusMobile}
													handleSpacingUnitHandler={handleSearchIconBorderRadiusUnitChange}
													spacingCombineBtn={searchIconBorderRadiusLink}
													spacingCombineBtnHandler={handleSearchIconBorderRadiusCombineBtn}
													setAttributes={setAttributes}
												/>

												<FB_SwitcherControl
													label={__("Image Rotation", "frontis-blocks")}
													globalSwitcher={searchIconImageRotateSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ searchIconImageRotateSwitcher: value })}
												/>

												{searchIconImageRotateSwitcher === 'normal' && ( 
													<FB_Range 
														min={-360}
														max={360}
														label={__("Image Rotation", "frontis-blocks")}
														rangeValue={searchIconImageRotate}
														onChangeHandler={(value) => setAttributes({ searchIconImageRotate: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}

													/>
												)}

												{searchIconImageRotateSwitcher === 'hover' && (
													<FB_Range
														min={-360}
														max={360}
														label={__("Image Rotation", "frontis-blocks")}
														rangeValue={searchIconImageRotateHover}
														onChangeHandler={(value) => setAttributes({ searchIconImageRotateHover: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}
													/>
												)}
											</PanelBody>
										)}
									</>
								)}
								{tab.name === "advanced" && (
									<>
										<PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
											{/* Add advanced settings here */}
										</PanelBody>
									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>
		</>
	);
}