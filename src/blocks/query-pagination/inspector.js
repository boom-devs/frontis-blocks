import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { useEffect, useMemo, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import {
    PanelBody,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    RangeControl,
    SelectControl,
    ToggleControl,
    TextControl,
} from '@wordpress/components';

import { 
    BORDER_STYLES,
    POST_SWITCHER,
    ICON_ALIGN, 
    OVERFLOW_OP,
    TAXONOMY_OPTIONS,
    PAGINATION_TYPE,
    PAGINATION_PREV_NEXT_TYPE,
    PREMADE_STYLE,
    READ_MORE_ICON_ALIGN,
    TEXT_ALIGN,
} from '@Constants/fbConstants';

/**
 * External Dependencies
 */
import Select2 from "react-select";
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from '@Components/spacing';
import FB_ColorControl from '@Components/color-control';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_Range from '@Components/range';
import FB_IncludeExcludeSwitcherControl from '@Components/switcher-include-exclude-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ImageControl from '@Components/image-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
        blockId,
        blockStyle,
        paginationAlignment,
        paginationItemGap,
        paginationItemGapUnits,

        paginationWrapperPaddingUnits,
        paginationWrapperDesktopPadding,
        paginationWrapperTabletPadding,
        paginationWrapperMobilePadding,
        paginationWrapperPaddingLink,

        paginationWrapperMarginUnits,
        paginationWrapperDesktopMargin,
        paginationWrapperTabletMargin,
        paginationWrapperMobileMargin,
        paginationWrapperMarginLink,

        /** Start Pagination */
        paginationPrevNextType,
        paginationPrevTxt,
        paginationPrevIcon, 
        paginationNextTxt,
        paginationNextIcon,

        /** Pagination Arrow */
        paginationArrowSize,
        paginationArrowSizeUnits,

        paginationArrowBgColorSwitcher,
        paginationArrowNormalBackgroundType,
        paginationArrowNormalClassicColor,
        paginationArrowNormalGradientColor,
        paginationArrowNormalCustomGradientSwitcher,
        paginationArrowNormalCustomGradientInputValue,
        paginationArrowHoverBackgroundType,
        paginationArrowHoverClassicColor,
        paginationArrowHoverGradientColor,
        paginationArrowHoverCustomGradientSwitcher,
        paginationArrowHoverCustomGradientInputValue,

        paginationArrowBorder,
        paginationArrowBorderColorSwitcher,
        paginationArrowBorderColor,
        paginationArrowBorderHoverColor,

        paginationArrowBorderUnits,
        paginationArrowDesktopBorder,
        paginationArrowTabletBorder,
        paginationArrowMobileBorder,
        paginationArrowBorderLink,

        paginationArrowBorderRadiusUnits,
        paginationArrowDesktopBorderRadius,
        paginationArrowTabletBorderRadius,
        paginationArrowMobileBorderRadius,
        paginationArrowBorderRadiusLink,

        paginationArrowTextGlobalTypoSwitcher,
        paginationArrowTextGlobalTypographyData,
        paginationArrowTextGlobalTypoType,
        paginationArrowTextGlobalTypoOption,
        paginationArrowTextFontFamily,
        paginationArrowTextFontSize,
        paginationArrowTextFontSizeUnits,
        paginationArrowTextFontWeight,
        paginationArrowTextFontStyle,
        paginationArrowTextTransform,
        paginationArrowTextDecoration,
        paginationArrowTextLetterSpacing,
        paginationArrowTextLetterSpacingUnits,
        paginationArrowTextLineHeight,
        paginationArrowTextLineHeightUnits,

        paginationArrowTextColorSwitcher,
        paginationArrowTextColor,
        paginationArrowTextHoverColor,

        paginationPrevNextWidth,
        paginationPrevNextWidthUnits,
        paginationArrowIconColorSwitcher,
        paginationArrowIconColor,
        paginationArrowIconHoverColor,

        /** Pagination Button */
        paginationBtnSize,
        paginationBtnSizeUnits,
        paginationBtnGap,
        paginationBtnGapUnits,

        paginationBtnBgColorSwitcher,
        paginationBtnNormalBackgroundType,
        paginationBtnNormalClassicColor,
        paginationBtnNormalGradientColor,
        paginationBtnNormalCustomGradientSwitcher,
        paginationBtnNormalCustomGradientInputValue,
        paginationBtnHoverBackgroundType,
        paginationBtnHoverClassicColor,
        paginationBtnHoverGradientColor,
        paginationBtnHoverCustomGradientSwitcher,
        paginationBtnHoverCustomGradientInputValue,

        paginationActiveBtnTextColorSwitcher,
        paginationActiveBtnTextColor,
        paginationActiveBtnTextHoverColor,

        paginationActiveBtnBgColorSwitcher,
        paginationActiveBtnNormalBackgroundType,
        paginationActiveBtnNormalClassicColor,
        paginationActiveBtnNormalGradientColor,
        paginationActiveBtnNormalCustomGradientSwitcher,
        paginationActiveBtnNormalCustomGradientInputValue,
        paginationActiveBtnHoverBackgroundType,
        paginationActiveBtnHoverClassicColor,
        paginationActiveBtnHoverGradientColor,
        paginationActiveBtnHoverCustomGradientSwitcher,
        paginationActiveBtnHoverCustomGradientInputValue,

        paginationBtnBorder,
        paginationBtnBorderColorSwitcher,
        paginationBtnBorderColor,
        paginationBtnBorderHoverColor,

        paginationBtnBorderUnits,
        paginationBtnDesktopBorder,
        paginationBtnTabletBorder,
        paginationBtnMobileBorder,
        paginationBtnBorderLink,

        paginationBtnBorderRadiusUnits,
        paginationBtnDesktopBorderRadius,
        paginationBtnTabletBorderRadius,
        paginationBtnMobileBorderRadius,
        paginationBtnBorderRadiusLink,

        paginationBtnTextGlobalTypoSwitcher,
        paginationBtnTextGlobalTypographyData,
        paginationBtnTextGlobalTypoType,
        paginationBtnTextGlobalTypoOption,
        paginationBtnTextFontFamily,
        paginationBtnTextFontSize,
        paginationBtnTextFontSizeUnits,
        paginationBtnTextFontWeight,
        paginationBtnTextFontStyle,
        paginationBtnTextTransform,
        paginationBtnTextDecoration,
        paginationBtnTextLetterSpacing,
        paginationBtnTextLetterSpacingUnits,
        paginationBtnTextLineHeight,
        paginationBtnTextLineHeightUnits,

        paginationBtnTextColorSwitcher,
        paginationBtnTextColor,
        paginationBtnTextHoverColor,

	} = attributes;

    const deviceType= useDeviceType();
    
	useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-query-pagination-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const prevIconHandler = (IconName) => {
		setAttributes({paginationPrevIcon: IconName})
	}

    const nextIconHandler = (IconName) => {
		setAttributes({paginationNextIcon: IconName})
	}

        /** Start Pagination Wrapper Padding */
	const handlePaginationWrapperPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( paginationWrapperPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						paginationWrapperDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						paginationWrapperTabletPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						paginationWrapperMobilePadding: {
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
					setAttributes( {paginationWrapperDesktopPadding: {...paginationWrapperDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {paginationWrapperTabletPadding: {...paginationWrapperTabletPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {paginationWrapperMobilePadding: {...paginationWrapperMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handlePaginationWrapperPaddingCombineBtn = () => {
		setAttributes( {paginationWrapperPaddingLink: !paginationWrapperPaddingLink} ); 
	}

	const handlePaginationWrapperPaddingUnitsHandler = (unit) => {
		setAttributes( {
			paginationWrapperPaddingUnits: {
				...paginationWrapperPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const paginationWrapperDesktopPaddingWidth = `${paginationWrapperDesktopPadding.top}${paginationWrapperPaddingUnits.Desktop} ${paginationWrapperDesktopPadding.right}${paginationWrapperPaddingUnits.Desktop} ${paginationWrapperDesktopPadding.bottom}${paginationWrapperPaddingUnits.Desktop} ${paginationWrapperDesktopPadding.left}${paginationWrapperPaddingUnits.Desktop}`;
	const paginationWrapperTabletPaddingWidth = `${paginationWrapperTabletPadding.top}${paginationWrapperPaddingUnits.Tablet} ${paginationWrapperTabletPadding.right}${paginationWrapperPaddingUnits.Tablet} ${paginationWrapperTabletPadding.bottom}${paginationWrapperPaddingUnits.Tablet} ${paginationWrapperTabletPadding.left}${paginationWrapperPaddingUnits.Tablet}`;
	const paginationWrapperMobilePaddingWidth = `${paginationWrapperMobilePadding.top}${paginationWrapperPaddingUnits.Mobile} ${paginationWrapperMobilePadding.right}${paginationWrapperPaddingUnits.Mobile} ${paginationWrapperMobilePadding.bottom}${paginationWrapperPaddingUnits.Mobile} ${paginationWrapperMobilePadding.left}${paginationWrapperPaddingUnits.Mobile}`;
	/** End Pagination Wrapper Padding */


     /** Start Pagination Wrapper Margin */
	const handlePaginationWrapperMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( paginationWrapperMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						paginationWrapperDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						paginationWrapperTabletMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						paginationWrapperMobileMargin: {
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
					setAttributes( {paginationWrapperDesktopMargin: {...paginationWrapperDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {paginationWrapperTabletMargin: {...paginationWrapperTabletMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {paginationWrapperMobileMargin: {...paginationWrapperMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handlePaginationWrapperMarginCombineBtn = () => {
		setAttributes( {paginationWrapperMarginLink: !paginationWrapperMarginLink} );
	}

	const handlePaginationWrapperMarginUnitsHandler = (unit) => {
		setAttributes( {
			paginationWrapperMarginUnits: {
				...paginationWrapperMarginUnits,
				[deviceType]: unit
			}
		})
	}
	const paginationWrapperDesktopMarginWidth = `${paginationWrapperDesktopMargin.top}${paginationWrapperMarginUnits.Desktop} ${paginationWrapperDesktopMargin.right}${paginationWrapperMarginUnits.Desktop} ${paginationWrapperDesktopMargin.bottom}${paginationWrapperMarginUnits.Desktop} ${paginationWrapperDesktopMargin.left}${paginationWrapperMarginUnits.Desktop}`;
	const paginationWrapperTabletMarginWidth = `${paginationWrapperTabletMargin.top}${paginationWrapperMarginUnits.Tablet} ${paginationWrapperTabletMargin.right}${paginationWrapperMarginUnits.Tablet} ${paginationWrapperTabletMargin.bottom}${paginationWrapperMarginUnits.Tablet} ${paginationWrapperTabletMargin.left}${paginationWrapperMarginUnits.Tablet}`;
	const paginationWrapperMobileMarginWidth = `${paginationWrapperMobileMargin.top}${paginationWrapperMarginUnits.Mobile} ${paginationWrapperMobileMargin.right}${paginationWrapperMarginUnits.Mobile} ${paginationWrapperMobileMargin.bottom}${paginationWrapperMarginUnits.Mobile} ${paginationWrapperMobileMargin.left}${paginationWrapperMarginUnits.Mobile}`;
	/** End Pagination Wrapper Margin */

    /** Start Pagination Arrow Border */
	const handlePaginationArrowBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( paginationArrowBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						paginationArrowDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						paginationArrowTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						paginationArrowMobileBorder: {
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
					setAttributes( {paginationArrowDesktopBorder: {...paginationArrowDesktopBorder, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {paginationArrowTabletBorder: {...paginationArrowTabletBorder, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {paginationArrowMobileBorder: {...paginationArrowMobileBorder, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handlePaginationArrowBorderCombineBtn = () => {
		setAttributes( {paginationArrowBorderLink: !paginationArrowBorderLink} );
	}

	const handlePaginationArrowBorderUnitsHandler = (unit) => {
		setAttributes( {
			paginationArrowBorderUnits: {
				...paginationArrowBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const paginationArrowDesktopBorderWidth = `${paginationArrowDesktopBorder.top}${paginationArrowBorderUnits.Desktop} ${paginationArrowDesktopBorder.right}${paginationArrowBorderUnits.Desktop} ${paginationArrowDesktopBorder.bottom}${paginationArrowBorderUnits.Desktop} ${paginationArrowDesktopBorder.left}${paginationArrowBorderUnits.Desktop}`;
	const paginationArrowTabletBorderWidth = `${paginationArrowTabletBorder.top}${paginationArrowBorderUnits.Tablet} ${paginationArrowTabletBorder.right}${paginationArrowBorderUnits.Tablet} ${paginationArrowTabletBorder.bottom}${paginationArrowBorderUnits.Tablet} ${paginationArrowTabletBorder.left}${paginationArrowBorderUnits.Tablet}`;
	const paginationArrowMobileBorderWidth = `${paginationArrowMobileBorder.top}${paginationArrowBorderUnits.Mobile} ${paginationArrowMobileBorder.right}${paginationArrowBorderUnits.Mobile} ${paginationArrowMobileBorder.bottom}${paginationArrowBorderUnits.Mobile} ${paginationArrowMobileBorder.left}${paginationArrowBorderUnits.Mobile}`;
	/** End Pagination Arrow Border */

    /** Start Pagination Arrow Border */
	const handlePaginationArrowBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( paginationArrowBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						paginationArrowDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						paginationArrowTabletBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						paginationArrowMobileBorderRadius: {
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
					setAttributes( {paginationArrowDesktopBorderRadius: {...paginationArrowDesktopBorderRadius, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {paginationArrowTabletBorderRadius: {...paginationArrowTabletBorderRadius, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {paginationArrowMobileBorderRadius: {...paginationArrowMobileBorderRadius, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handlePaginationArrowBorderRadiusCombineBtn = () => {
		setAttributes( {paginationArrowBorderRadiusLink: !paginationArrowBorderRadiusLink} );
	}

	const handlePaginationArrowBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			paginationArrowBorderRadiusUnits: {
				...paginationArrowBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	const paginationArrowDesktopBorderRadiusWidth = `${paginationArrowDesktopBorderRadius.top}${paginationArrowBorderRadiusUnits.Desktop} ${paginationArrowDesktopBorderRadius.right}${paginationArrowBorderRadiusUnits.Desktop} ${paginationArrowDesktopBorderRadius.bottom}${paginationArrowBorderRadiusUnits.Desktop} ${paginationArrowDesktopBorderRadius.left}${paginationArrowBorderRadiusUnits.Desktop}`;
	const paginationArrowTabletBorderRadiusWidth = `${paginationArrowTabletBorderRadius.top}${paginationArrowBorderRadiusUnits.Tablet} ${paginationArrowTabletBorderRadius.right}${paginationArrowBorderRadiusUnits.Tablet} ${paginationArrowTabletBorderRadius.bottom}${paginationArrowBorderRadiusUnits.Tablet} ${paginationArrowTabletBorderRadius.left}${paginationArrowBorderRadiusUnits.Tablet}`;
	const paginationArrowMobileBorderRadiusWidth = `${paginationArrowMobileBorderRadius.top}${paginationArrowBorderRadiusUnits.Mobile} ${paginationArrowMobileBorderRadius.right}${paginationArrowBorderRadiusUnits.Mobile} ${paginationArrowMobileBorderRadius.bottom}${paginationArrowBorderRadiusUnits.Mobile} ${paginationArrowMobileBorderRadius.left}${paginationArrowBorderRadiusUnits.Mobile}`;
	/** End Pagination Arrow Border */

    /** Start Pagination Button Border */
	const handlePaginationBtnBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( paginationBtnBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						paginationBtnDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						paginationBtnTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						paginationBtnMobileBorder: {
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
					setAttributes( {paginationBtnDesktopBorder: {...paginationBtnDesktopBorder, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {paginationBtnTabletBorder: {...paginationBtnTabletBorder, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {paginationBtnMobileBorder: {...paginationBtnMobileBorder, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handlePaginationBtnBorderCombineBtn = () => {
		setAttributes( {paginationBtnBorderLink: !paginationBtnBorderLink} );
	}

	const handlePaginationBtnBorderUnitsHandler = (unit) => {
		setAttributes( {
			paginationBtnBorderUnits: {
				...paginationBtnBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const paginationBtnDesktopBorderWidth = `${paginationBtnDesktopBorder.top}${paginationBtnBorderUnits.Desktop} ${paginationBtnDesktopBorder.right}${paginationBtnBorderUnits.Desktop} ${paginationBtnDesktopBorder.bottom}${paginationBtnBorderUnits.Desktop} ${paginationBtnDesktopBorder.left}${paginationBtnBorderUnits.Desktop}`;
	const paginationBtnTabletBorderWidth = `${paginationBtnTabletBorder.top}${paginationBtnBorderUnits.Tablet} ${paginationBtnTabletBorder.right}${paginationBtnBorderUnits.Tablet} ${paginationBtnTabletBorder.bottom}${paginationBtnBorderUnits.Tablet} ${paginationBtnTabletBorder.left}${paginationBtnBorderUnits.Tablet}`;
	const paginationBtnMobileBorderWidth = `${paginationBtnMobileBorder.top}${paginationBtnBorderUnits.Mobile} ${paginationBtnMobileBorder.right}${paginationBtnBorderUnits.Mobile} ${paginationBtnMobileBorder.bottom}${paginationBtnBorderUnits.Mobile} ${paginationBtnMobileBorder.left}${paginationBtnBorderUnits.Mobile}`;
	/** End Pagination Button Border */

    /** Start Pagination Button Border Radius */
	const handlePaginationBtnBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( paginationBtnBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						paginationBtnDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						paginationBtnTabletBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						paginationBtnMobileBorderRadius: {
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
					setAttributes( {paginationBtnDesktopBorderRadius: {...paginationBtnDesktopBorderRadius, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {paginationBtnTabletBorderRadius: {...paginationBtnTabletBorderRadius, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {paginationBtnMobileBorderRadius: {...paginationBtnMobileBorderRadius, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handlePaginationBtnBorderRadiusCombineBtn = () => {
		setAttributes( {paginationBtnBorderRadiusLink: !paginationBtnBorderRadiusLink} );
	}

	const handlePaginationBtnBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			paginationBtnBorderRadiusUnits: {
				...paginationBtnBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	const paginationBtnDesktopBorderRadiusWidth = `${paginationBtnDesktopBorderRadius.top}${paginationBtnBorderRadiusUnits.Desktop} ${paginationBtnDesktopBorderRadius.right}${paginationBtnBorderRadiusUnits.Desktop} ${paginationBtnDesktopBorderRadius.bottom}${paginationBtnBorderRadiusUnits.Desktop} ${paginationBtnDesktopBorderRadius.left}${paginationBtnBorderRadiusUnits.Desktop}`;
	const paginationBtnTabletBorderRadiusWidth = `${paginationBtnTabletBorderRadius.top}${paginationBtnBorderRadiusUnits.Tablet} ${paginationBtnTabletBorderRadius.right}${paginationBtnBorderRadiusUnits.Tablet} ${paginationBtnTabletBorderRadius.bottom}${paginationBtnBorderRadiusUnits.Tablet} ${paginationBtnTabletBorderRadius.left}${paginationBtnBorderRadiusUnits.Tablet}`;
	const paginationBtnMobileBorderRadiusWidth = `${paginationBtnMobileBorderRadius.top}${paginationBtnBorderRadiusUnits.Mobile} ${paginationBtnMobileBorderRadius.right}${paginationBtnBorderRadiusUnits.Mobile} ${paginationBtnMobileBorderRadius.bottom}${paginationBtnBorderRadiusUnits.Mobile} ${paginationBtnMobileBorderRadius.left}${paginationBtnBorderRadiusUnits.Mobile}`;
	/** End Pagination Button Border */

    const allBlockStyle = useMemo(() => `
        .${blockId}.fb-query-pagination-wrapper .fb-query-pagination {
            display: flex;
            align-items: center;
            ${paginationAlignment[deviceType] ? `justify-content: ${paginationAlignment[deviceType]};` : ''}
            ${paginationItemGap[deviceType] ? `gap: ${paginationItemGap[deviceType]}${paginationItemGapUnits[deviceType]};` : ''}

            ${paginationWrapperDesktopPaddingWidth && paginationWrapperDesktopPadding?.top ? `padding: ${paginationWrapperDesktopPaddingWidth};` : ''}
            ${paginationWrapperDesktopMarginWidth && paginationWrapperDesktopMargin?.top ? `margin: ${paginationWrapperDesktopMarginWidth};` : ''}
            
        }

        .${blockId} .fb-query-pagination .fb-page-prev,
        .${blockId} .fb-query-pagination .fb-page-next{
            ${paginationPrevNextWidth.Desktop ? `width: ${paginationPrevNextWidth.Desktop}${paginationPrevNextWidthUnits.Desktop};` : ''}
            ${paginationPrevNextWidth.Desktop ? `height: ${paginationPrevNextWidth.Desktop}${paginationPrevNextWidthUnits.Desktop};` : ''}

            ${paginationArrowBorder ? `border: ${paginationArrowBorder};` : ''} 
            ${paginationArrowBorderColor ? `border-color: ${paginationArrowBorderColor};` : ''}
            ${paginationArrowDesktopBorderWidth && paginationArrowDesktopBorder.top ? `border-width: ${paginationArrowDesktopBorderWidth};` : ''}
            ${paginationArrowDesktopBorderRadiusWidth && paginationArrowDesktopBorderRadius.top? `border-radius: ${paginationArrowDesktopBorderRadiusWidth};` : ''}

            ${paginationArrowNormalBackgroundType === 'gradient' ? `   
                ${paginationArrowNormalCustomGradientSwitcher && paginationArrowNormalCustomGradientInputValue ? `background: ${paginationArrowNormalCustomGradientInputValue};` : `background: ${paginationArrowNormalGradientColor};`}
            `: `
                ${paginationArrowNormalClassicColor ? `background: ${paginationArrowNormalClassicColor};` : ''}
            `}
        }

        .${blockId} .fb-query-pagination .fb-page-prev:hover,
        .${blockId} .fb-query-pagination .fb-page-next:hover{
            ${paginationArrowBorderHoverColor ? `border-color: ${paginationArrowBorderHoverColor};` : ''}

            ${paginationArrowHoverBackgroundType === 'gradient' ? `    
                ${paginationArrowHoverCustomGradientSwitcher && paginationArrowHoverCustomGradientInputValue ? `background: ${paginationArrowHoverCustomGradientInputValue};` : `background: ${paginationArrowHoverGradientColor};`}
            `: `
                ${paginationArrowHoverClassicColor ? `background: ${paginationArrowHoverClassicColor};` : ''}
            `}
            
        }

        .${blockId} .fb-query-pagination .fb-page-prev .fb-pagination-text,
        .${blockId} .fb-query-pagination .fb-page-next .fb-pagination-text{
            ${paginationArrowTextGlobalTypoSwitcher.fontFamily === true && paginationArrowTextGlobalTypographyData.fontFamily ? `font-family: ${paginationArrowTextGlobalTypographyData.fontFamily};` : ''}  
            ${paginationArrowTextGlobalTypoSwitcher.fontSize === true && paginationArrowTextGlobalTypographyData.fontSize ? `font-size: ${paginationArrowTextGlobalTypographyData.fontSize};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher.fontWeight === true && paginationArrowTextGlobalTypographyData.fontWeight ? `font-weight: ${paginationArrowTextGlobalTypographyData.fontWeight};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher.fontStyle === true && paginationArrowTextGlobalTypographyData.fontStyle ? `font-style: ${paginationArrowTextGlobalTypographyData.fontStyle};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher.textTransform === true && paginationArrowTextGlobalTypographyData.textTransform ? `text-transform: ${paginationArrowTextGlobalTypographyData.textTransform};` : ''} 
            ${paginationArrowTextGlobalTypoSwitcher.textDecoration === true && paginationArrowTextGlobalTypographyData.textDecoration ? `text-decoration: ${paginationArrowTextGlobalTypographyData.textDecoration};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher.letterSpacing === true && paginationArrowTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${paginationArrowTextGlobalTypographyData.letterSpacing};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher.lineHeight === true && paginationArrowTextGlobalTypographyData.lineHeight ? `line-height: ${paginationArrowTextGlobalTypographyData.lineHeight};` : ''}
            
        	${paginationArrowTextGlobalTypoSwitcher.fontFamily === false && paginationArrowTextFontFamily && paginationArrowTextFontFamily !== 'Default' ? `font-family: ${paginationArrowTextFontFamily};` : ''}
			${paginationArrowTextGlobalTypoSwitcher.fontSize === false && paginationArrowTextFontSize.Desktop ? `font-size: ${paginationArrowTextFontSize.Desktop}${paginationArrowTextFontSizeUnits.Desktop};` : ''} 
			${paginationArrowTextGlobalTypoSwitcher.fontWeight === false && paginationArrowTextFontWeight ? `font-weight: ${paginationArrowTextFontWeight};` : ''}
			${paginationArrowTextGlobalTypoSwitcher.fontStyle === false && paginationArrowTextFontStyle ? `font-style: ${paginationArrowTextFontStyle};` : ''}  
			${paginationArrowTextGlobalTypoSwitcher.textTransform === false && paginationArrowTextTransform ? `text-transform: ${paginationArrowTextTransform};` : ''}
			${paginationArrowTextGlobalTypoSwitcher.textDecoration === false && paginationArrowTextDecoration ? `text-decoration: ${paginationArrowTextDecoration};` : ''} 
			${paginationArrowTextGlobalTypoSwitcher.letterSpacing === false && paginationArrowTextLetterSpacing.Desktop ? `letter-spacing: ${paginationArrowTextLetterSpacing.Desktop}${paginationArrowTextLetterSpacingUnits.Desktop};` : ''}
			${paginationArrowTextGlobalTypoSwitcher.lineHeight === false && paginationArrowTextLineHeight.Desktop ? `line-height: ${paginationArrowTextLineHeight.Desktop}${paginationArrowTextLineHeightUnits.Desktop};` : ''}

            ${paginationArrowTextColor ? `color: ${paginationArrowTextColor};` : ''}
        }
            
        .${blockId} .fb-query-pagination .fb-page-prev:hover .fb-pagination-text,
        .${blockId} .fb-query-pagination .fb-page-next:hover .fb-pagination-text{
            ${paginationArrowTextHoverColor ? `color: ${paginationArrowTextHoverColor};` : ''}
        }

        .${blockId} .fb-query-pagination .fb-page-numbers{
            display: flex;
            align-items: center;
            justify-content: center;
            ${paginationBtnGap.Desktop ? `gap: ${paginationBtnGap.Desktop}${paginationBtnGapUnits.Desktop};` : ''}
        }


        .${blockId} .fb-query-pagination .fb-page-numbers .page-numbers {
            ${paginationBtnSize.Desktop ? `width: ${paginationBtnSize.Desktop}${paginationBtnSizeUnits.Desktop};` : ''}  
            ${paginationBtnSize.Desktop ? `height: ${paginationBtnSize.Desktop}${paginationBtnSizeUnits.Desktop};` : ''}

            ${paginationBtnTextGlobalTypoSwitcher.fontFamily === true && paginationBtnTextGlobalTypographyData.fontFamily ? `font-family: ${paginationBtnTextGlobalTypographyData.fontFamily};` : ''}  
            ${paginationBtnTextGlobalTypoSwitcher.fontSize === true && paginationBtnTextGlobalTypographyData.fontSize ? `font-size: ${paginationBtnTextGlobalTypographyData.fontSize};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher.fontWeight === true && paginationBtnTextGlobalTypographyData.fontWeight ? `font-weight: ${paginationBtnTextGlobalTypographyData.fontWeight};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher.fontStyle === true && paginationBtnTextGlobalTypographyData.fontStyle ? `font-style: ${paginationBtnTextGlobalTypographyData.fontStyle};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher.textTransform === true && paginationBtnTextGlobalTypographyData.textTransform ? `text-transform: ${paginationBtnTextGlobalTypographyData.textTransform};` : ''} 
            ${paginationBtnTextGlobalTypoSwitcher.textDecoration === true && paginationBtnTextGlobalTypographyData.textDecoration ? `text-decoration: ${paginationBtnTextGlobalTypographyData.textDecoration};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher.letterSpacing === true && paginationBtnTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${paginationBtnTextGlobalTypographyData.letterSpacing};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher.lineHeight === true && paginationBtnTextGlobalTypographyData.lineHeight ? `line-height: ${paginationBtnTextGlobalTypographyData.lineHeight};` : ''}
            
        	${paginationBtnTextGlobalTypoSwitcher.fontFamily === false && paginationBtnTextFontFamily && paginationBtnTextFontFamily !== 'Default' ? `font-family: ${paginationBtnTextFontFamily};` : ''}
			${paginationBtnTextGlobalTypoSwitcher.fontSize === false && paginationBtnTextFontSize.Desktop ? `font-size: ${paginationBtnTextFontSize.Desktop}${paginationBtnTextFontSizeUnits.Desktop};` : ''} 
			${paginationBtnTextGlobalTypoSwitcher.fontWeight === false && paginationBtnTextFontWeight ? `font-weight: ${paginationBtnTextFontWeight};` : ''}
			${paginationBtnTextGlobalTypoSwitcher.fontStyle === false && paginationBtnTextFontStyle ? `font-style: ${paginationBtnTextFontStyle};` : ''}  
			${paginationBtnTextGlobalTypoSwitcher.textTransform === false && paginationBtnTextTransform ? `text-transform: ${paginationBtnTextTransform};` : ''}
			${paginationBtnTextGlobalTypoSwitcher.textDecoration === false && paginationBtnTextDecoration ? `text-decoration: ${paginationBtnTextDecoration};` : ''} 
			${paginationBtnTextGlobalTypoSwitcher.letterSpacing === false && paginationBtnTextLetterSpacing.Desktop ? `letter-spacing: ${paginationBtnTextLetterSpacing.Desktop}${paginationBtnTextLetterSpacingUnits.Desktop};` : ''}
			${paginationBtnTextGlobalTypoSwitcher.lineHeight === false && paginationBtnTextLineHeight.Desktop ? `line-height: ${paginationBtnTextLineHeight.Desktop}${paginationBtnTextLineHeightUnits.Desktop};` : ''}

            ${paginationBtnTextColor ? `color: ${paginationBtnTextColor};` : ''}

            ${paginationBtnBorder ? `border: ${paginationBtnBorder};` : ''} 
            ${paginationBtnBorderColor ? `border-color: ${paginationBtnBorderColor};` : ''}
            ${paginationBtnDesktopBorderWidth && paginationBtnDesktopBorder.top ? `border-width: ${paginationBtnDesktopBorderWidth};` : ''}
            ${paginationBtnDesktopBorderRadiusWidth && paginationBtnDesktopBorderRadius.top? `border-radius: ${paginationBtnDesktopBorderRadiusWidth};` : ''}

            ${paginationBtnNormalBackgroundType === 'gradient' ? `   
                ${paginationBtnNormalCustomGradientSwitcher && paginationBtnNormalCustomGradientInputValue ? `background: ${paginationBtnNormalCustomGradientInputValue};` : `background: ${paginationBtnNormalGradientColor};`}
            `: `
                ${paginationBtnNormalClassicColor ? `background: ${paginationBtnNormalClassicColor};` : ''}
            `}
        }

        .${blockId} .fb-query-pagination .fb-page-numbers .page-numbers:hover {
            ${paginationBtnTextHoverColor ? `color: ${paginationBtnTextHoverColor};` : ''}
            ${paginationBtnHoverBackgroundType === 'gradient' ? `    
                ${paginationBtnHoverCustomGradientSwitcher && paginationBtnHoverCustomGradientInputValue ? `background: ${paginationBtnHoverCustomGradientInputValue};` : `background: ${paginationBtnHoverGradientColor};`}
            `: `
                ${paginationBtnHoverClassicColor ? `background: ${paginationBtnHoverClassicColor};` : ''}
            `}
        }

        .${blockId} .fb-query-pagination .fb-page-numbers .page-numbers.current { 
            ${paginationActiveBtnTextColor ? `color: ${paginationActiveBtnTextColor};` : ''} 
            ${paginationActiveBtnNormalBackgroundType === 'gradient' ? `      
                ${paginationActiveBtnNormalCustomGradientSwitcher && paginationActiveBtnNormalCustomGradientInputValue ? `background: ${paginationActiveBtnNormalCustomGradientInputValue};` : `background: ${paginationActiveBtnNormalGradientColor};`}
            `: `
                ${paginationActiveBtnNormalClassicColor ? `background: ${paginationActiveBtnNormalClassicColor};` : ''} 
            `}
        }
        .${blockId} .fb-query-pagination .fb-page-numbers .page-numbers.current:hover { 
            ${paginationActiveBtnTextHoverColor ? `color: ${paginationActiveBtnTextHoverColor};` : ''} 
            ${paginationActiveBtnHoverBackgroundType === 'gradient' ? `    
                ${paginationActiveBtnHoverCustomGradientSwitcher && paginationActiveBtnHoverCustomGradientInputValue ? `background: ${paginationActiveBtnHoverCustomGradientInputValue};` : `background: ${paginationActiveBtnHoverGradientColor};`}
            `: `
                ${paginationActiveBtnHoverClassicColor ? `background: ${paginationActiveBtnHoverClassicColor};` : ''} 
            `}
        }

        .${blockId} .fb-query-pagination .fb-page-prev .fb-pagination-icon,
        .${blockId} .fb-query-pagination .fb-page-next .fb-pagination-icon{
            ${paginationArrowSize.Desktop ? `width: ${paginationArrowSize.Desktop}${paginationArrowSizeUnits.Desktop};` : ''}
            ${paginationArrowSize.Desktop ? `height: ${paginationArrowSize.Desktop}${paginationArrowSizeUnits.Desktop};` : ''}
        }

        .${blockId} .fb-query-pagination .fb-page-prev .fb-pagination-icon svg,
        .${blockId} .fb-query-pagination .fb-page-next .fb-pagination-icon svg{
            ${paginationArrowIconColor ? `fill: ${paginationArrowIconColor};` : ''}
        }

        .${blockId} .fb-query-pagination .fb-page-prev:hover .fb-pagination-icon svg,
        .${blockId} .fb-query-pagination .fb-page-next:hover .fb-pagination-icon svg{
            ${paginationArrowIconHoverColor ? `fill: ${paginationArrowIconHoverColor};` : ''}
        }
        

        @media only screen and (max-width: 1024px) {

        }

        @media only screen and (max-width: 767px) {

        }
    `, [
    blockId,
    deviceType,
    paginationAlignment,
    paginationItemGap,
    paginationItemGapUnits,

    paginationWrapperPaddingUnits,
    paginationWrapperDesktopPadding,
    paginationWrapperTabletPadding,
    paginationWrapperMobilePadding,
    paginationWrapperPaddingLink,
    paginationWrapperDesktopPaddingWidth,
    paginationWrapperTabletPaddingWidth,
    paginationWrapperMobilePaddingWidth,

    paginationWrapperMarginUnits,
    paginationWrapperDesktopMargin,
    paginationWrapperTabletMargin,
    paginationWrapperMobileMargin,
    paginationWrapperMarginLink,
    paginationWrapperDesktopMarginWidth,
    paginationWrapperTabletMarginWidth,
    paginationWrapperMobileMarginWidth,

    /** Start Pagination */
    paginationPrevNextType,
    paginationPrevTxt,
    paginationPrevIcon, 
    paginationNextTxt,
    paginationNextIcon,

    /** Pagination Arrow */
    paginationArrowSize,
    paginationArrowSizeUnits,

    paginationArrowBgColorSwitcher,
    paginationArrowNormalBackgroundType,
    paginationArrowNormalClassicColor,
    paginationArrowNormalGradientColor,
    paginationArrowNormalCustomGradientSwitcher,
    paginationArrowNormalCustomGradientInputValue,
    paginationArrowHoverBackgroundType,
    paginationArrowHoverClassicColor,
    paginationArrowHoverGradientColor,
    paginationArrowHoverCustomGradientSwitcher,
    paginationArrowHoverCustomGradientInputValue,

    paginationArrowBorder,
    paginationArrowBorderColorSwitcher,
    paginationArrowBorderColor,
    paginationArrowBorderHoverColor,

    paginationArrowBorderUnits,
    paginationArrowDesktopBorder,
    paginationArrowTabletBorder,
    paginationArrowMobileBorder,
    paginationArrowBorderLink,
    paginationArrowDesktopBorderWidth,
    paginationArrowTabletBorderWidth,
    paginationArrowMobileBorderWidth,

    paginationArrowBorderRadiusUnits,
    paginationArrowDesktopBorderRadius,
    paginationArrowTabletBorderRadius,
    paginationArrowMobileBorderRadius,
    paginationArrowBorderRadiusLink,
    paginationArrowDesktopBorderRadiusWidth,
    paginationArrowTabletBorderRadiusWidth,
    paginationArrowMobileBorderRadiusWidth,

    paginationArrowTextGlobalTypoSwitcher,
    paginationArrowTextGlobalTypographyData,
    paginationArrowTextGlobalTypoType,
    paginationArrowTextGlobalTypoOption,
    paginationArrowTextFontFamily,
    paginationArrowTextFontSize,
    paginationArrowTextFontSizeUnits,
    paginationArrowTextFontWeight,
    paginationArrowTextFontStyle,
    paginationArrowTextTransform,
    paginationArrowTextDecoration,
    paginationArrowTextLetterSpacing,
    paginationArrowTextLetterSpacingUnits,
    paginationArrowTextLineHeight,
    paginationArrowTextLineHeightUnits,

    paginationArrowTextColorSwitcher,
    paginationArrowTextColor,
    paginationArrowTextHoverColor,

    paginationPrevNextWidth,
    paginationPrevNextWidthUnits,
    paginationArrowIconColorSwitcher,
    paginationArrowIconColor,
    paginationArrowIconHoverColor,

    /** Pagination Button */
    paginationBtnSize,
    paginationBtnSizeUnits,
    paginationBtnGap,
    paginationBtnGapUnits,

    paginationBtnBgColorSwitcher,
    paginationBtnNormalBackgroundType,
    paginationBtnNormalClassicColor,
    paginationBtnNormalGradientColor,
    paginationBtnNormalCustomGradientSwitcher,
    paginationBtnNormalCustomGradientInputValue,
    paginationBtnHoverBackgroundType,
    paginationBtnHoverClassicColor,
    paginationBtnHoverGradientColor,
    paginationBtnHoverCustomGradientSwitcher,
    paginationBtnHoverCustomGradientInputValue,

    paginationActiveBtnTextColorSwitcher,
    paginationActiveBtnTextColor,
    paginationActiveBtnTextHoverColor,

    paginationActiveBtnBgColorSwitcher,
    paginationActiveBtnNormalBackgroundType,
    paginationActiveBtnNormalClassicColor,
    paginationActiveBtnNormalGradientColor,
    paginationActiveBtnNormalCustomGradientSwitcher,
    paginationActiveBtnNormalCustomGradientInputValue,
    paginationActiveBtnHoverBackgroundType,
    paginationActiveBtnHoverClassicColor,
    paginationActiveBtnHoverGradientColor,
    paginationActiveBtnHoverCustomGradientSwitcher,
    paginationActiveBtnHoverCustomGradientInputValue,

    paginationBtnBorder,
    paginationBtnBorderColorSwitcher,
    paginationBtnBorderColor,
    paginationBtnBorderHoverColor,

    paginationBtnBorderUnits,
    paginationBtnDesktopBorder,
    paginationBtnTabletBorder,
    paginationBtnMobileBorder,
    paginationBtnBorderLink,
    paginationBtnDesktopBorderWidth,
    paginationBtnTabletBorderWidth,
    paginationBtnMobileBorderWidth,

    paginationBtnBorderRadiusUnits,
    paginationBtnDesktopBorderRadius,
    paginationBtnTabletBorderRadius,
    paginationBtnMobileBorderRadius,
    paginationBtnBorderRadiusLink,
    paginationBtnDesktopBorderRadiusWidth,
    paginationBtnTabletBorderRadiusWidth,
    paginationBtnMobileBorderRadiusWidth,

    paginationBtnTextGlobalTypoSwitcher,
    paginationBtnTextGlobalTypographyData,
    paginationBtnTextGlobalTypoType,
    paginationBtnTextGlobalTypoOption,
    paginationBtnTextFontFamily,
    paginationBtnTextFontSize,
    paginationBtnTextFontSizeUnits,
    paginationBtnTextFontWeight,
    paginationBtnTextFontStyle,
    paginationBtnTextTransform,
    paginationBtnTextDecoration,
    paginationBtnTextLetterSpacing,
    paginationBtnTextLetterSpacingUnits,
    paginationBtnTextLineHeight,
    paginationBtnTextLineHeightUnits,

    paginationBtnTextColorSwitcher,
    paginationBtnTextColor,
    paginationBtnTextHoverColor,

    ]);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle] );

    const editorStyle = `${allBlockStyle}`.replace(/\s+/g, ' ').trim();

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <PanelBody
                title={__("Pagination", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_ResponsiveAlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={paginationAlignment}
                    setGlobalAlignment={(value) => setAttributes({ paginationAlignment: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                <SelectControl
                    label={__("Type", "frontis-blocks")}
                    value={paginationPrevNextType}
                    options={PAGINATION_PREV_NEXT_TYPE}
                    onChange={(value) => setAttributes({ paginationPrevNextType: value })}
                />

                {paginationPrevNextType === 'text' && (
                    <>
                        <TextControl
                            label={__("Prev Text", "frontis-blocks")}
                            value={paginationPrevTxt}
                            onChange={(value) => setAttributes({ paginationPrevTxt: value })}
                        />
                        <TextControl
                            label={__("Next Text", "frontis-blocks")}
                            value={paginationNextTxt}
                            onChange={(value) => setAttributes({ paginationNextTxt: value })}
                        />
                    </>
                )}

                {paginationPrevNextType === 'icon' && (
                    <>
                        <BaseControl
                            label={__("Prev Icon", "frontis-blocks")}
                        >
                            <FBIconPicker value={paginationPrevIcon} setIconHandler={prevIconHandler} />
                        </BaseControl>

                
                        <BaseControl
                            label={__("Next Icon", "frontis-blocks")}
                        >
                            <FBIconPicker value={paginationNextIcon} setIconHandler={nextIconHandler} />
                        </BaseControl>
                    </>
                )}
            </PanelBody>
        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>

            <PanelBody
                title={__("Pagination Wrapper", "frontis-blocks")} 
                initialOpen={true}
             >

                <FB_Range
                    min={0}
                    max={paginationItemGapUnits[deviceType] === '%' ? 100 : 500}
                    label={__("Item Gap", "frontis-blocks")}
                    rangeValue={paginationItemGap}
                    onChangeHandler={(value) => setAttributes({ paginationItemGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ paginationItemGapUnits: value })}
                    deviceType={deviceType}
                    units={paginationItemGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePaginationWrapperPaddingUnitsHandler}
                    spacingUnits={paginationWrapperPaddingUnits}
                    spacingDesktop={paginationWrapperDesktopPadding}
                    spacingTablet={paginationWrapperTabletPadding}
                    spacingMobile={paginationWrapperMobilePadding}
                    handleSpacingUnitHandler={handlePaginationWrapperPaddingUnitChange}
                    spacingCombineBtn={paginationWrapperPaddingLink}
                    spacingCombineBtnHandler={handlePaginationWrapperPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePaginationWrapperMarginUnitsHandler}
                    spacingUnits={paginationWrapperMarginUnits}
                    spacingDesktop={paginationWrapperDesktopMargin}
                    spacingTablet={paginationWrapperTabletMargin}
                    spacingMobile={paginationWrapperMobileMargin}
                    handleSpacingUnitHandler={handlePaginationWrapperMarginUnitChange}
                    spacingCombineBtn={paginationWrapperMarginLink}
                    spacingCombineBtnHandler={handlePaginationWrapperMarginCombineBtn}
                    setAttributes={setAttributes}
                />

            </PanelBody>


            <PanelBody
                title={__("Pagination Arrows", "frontis-blocks")} 
                initialOpen={true}
             >
            {paginationPrevNextType === 'icon' && (
                <>
                    <FB_Range
                        min={1}
                        max={100}
                        label={__("Arrow Size", "frontis-blocks")}
                        rangeValue={paginationArrowSize}
                        onChangeHandler={(value) => setAttributes({ paginationArrowSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ paginationArrowSizeUnits: value })} 
                        deviceType={deviceType}
                        units={paginationArrowSizeUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                    />

                    <FB_SwitcherControl
                        label={__("Arrow Color", "frontis-blocks")}
                        globalSwitcher={paginationArrowIconColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ paginationArrowIconColorSwitcher: value })}
                    />

                    {paginationArrowIconColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={paginationArrowIconColor} 
                            setGlobalColor={(value) => setAttributes({ paginationArrowIconColor: value })}
                        />
                    )}

                    {paginationArrowIconColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={paginationArrowIconHoverColor}
                            setGlobalColor={(value) => setAttributes({ paginationArrowIconHoverColor: value })}
                        />
                    )}
                </>
            )}

            {paginationPrevNextType === 'text' && (
                <>
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={paginationArrowTextGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ paginationArrowTextGlobalTypographyData: value })}

                        globalTypoType={paginationArrowTextGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                paginationArrowTextGlobalTypoType: value, 
                                paginationArrowTextGlobalTypoSwitcher: value === 'default' ? {...paginationArrowTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...paginationArrowTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={paginationArrowTextGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ paginationArrowTextGlobalTypoOption: value })}

                        fontFamily={paginationArrowTextFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ paginationArrowTextFontFamily: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={paginationArrowTextFontSize}
                        onChangeFontSize={(value) => setAttributes({ paginationArrowTextFontSize: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={paginationArrowTextFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ paginationArrowTextFontSizeUnits: value })}

                        fontWeight={paginationArrowTextFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ paginationArrowTextFontWeight: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={paginationArrowTextFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ paginationArrowTextFontStyle: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={paginationArrowTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ paginationArrowTextTransform: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={paginationArrowTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ paginationArrowTextDecoration: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={paginationArrowTextLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ paginationArrowTextLetterSpacing: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={paginationArrowTextLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ paginationArrowTextLetterSpacingUnits: value })}

                        lineHeight={paginationArrowTextLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ paginationArrowTextLineHeight: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={paginationArrowTextLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ paginationArrowTextLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Text Color", "frontis-blocks")}
                        globalSwitcher={paginationArrowTextColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ paginationArrowTextColorSwitcher: value })}
                    />

                    {paginationArrowTextColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={paginationArrowTextColor} 
                            setGlobalColor={(value) => setAttributes({ paginationArrowTextColor: value })}
                        />
                    )}

                    {paginationArrowTextColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={paginationArrowTextHoverColor}
                            setGlobalColor={(value) => setAttributes({ paginationArrowTextHoverColor: value })}
                        />
                    )}
                </>
            )}

            <FB_BackgroundColorControl
                label={__("Background Color", "frontis-blocks")}
                bgColorSwitcher={paginationArrowBgColorSwitcher}  
                setBgColorSwitcher={(value) => setAttributes({ paginationArrowBgColorSwitcher: value })}
                
                normalBackgroundType={paginationArrowNormalBackgroundType}
                setNormalBackgroundType={(value) => setAttributes({ paginationArrowNormalBackgroundType: value })}
                normalClassicColor={paginationArrowNormalClassicColor}
                setNormalClassicColor={(value) => setAttributes({ paginationArrowNormalClassicColor: value })}
                normalGradientColor={paginationArrowNormalGradientColor}
                setNormalGradientColor={(value) => setAttributes({ paginationArrowNormalGradientColor: value })}
                normalCustomGradientSwitcher={paginationArrowNormalCustomGradientSwitcher}
                setNormalCustomGradientSwitcher={(value) => setAttributes({ paginationArrowNormalCustomGradientSwitcher: value })}
                normalCustomGradientInputValue={paginationArrowNormalCustomGradientInputValue}
                setNormalCustomGradientInputValue={(value) => setAttributes({ paginationArrowNormalCustomGradientInputValue: value })}

                hoverBackgroundType={paginationArrowHoverBackgroundType} 
                setHoverBackgroundType={(value) => setAttributes({ paginationArrowHoverBackgroundType: value })}
                hoverClassicColor={paginationArrowHoverClassicColor}
                setHoverClassicColor={(value) => setAttributes({ paginationArrowHoverClassicColor: value })}
                hoverGradientColor={paginationArrowHoverGradientColor} 
                setHoverGradientColor={(value) => setAttributes({ paginationArrowHoverGradientColor: value })}
                hoverCustomGradientSwitcher={paginationArrowHoverCustomGradientSwitcher}
                setHoverCustomGradientSwitcher={(value) => setAttributes({ paginationArrowHoverCustomGradientSwitcher: value })}
                hoverCustomGradientInputValue={paginationArrowHoverCustomGradientInputValue}
                setHoverCustomGradientInputValue={(value) => setAttributes({ paginationArrowHoverCustomGradientInputValue: value })}

                isBackgroundImage={false}

            />

            <FB_Range
                min={1}
                max={200}
                label={__("Width", "frontis-blocks")}
                rangeValue={paginationPrevNextWidth}
                onChangeHandler={(value) => setAttributes({ paginationPrevNextWidth: value })}
                rangeUnitHandler={(value) => setAttributes({ paginationPrevNextWidthUnits: value })} 
                deviceType={deviceType}
                units={paginationPrevNextWidthUnits}
                setAttributes={setAttributes}
                rangeStep={1}
                resetFallbackValue={"36"}
            />

            <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={paginationArrowBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ paginationArrowBorder: value })}
            />

            <FB_SwitcherControl
                label={__("Border", "frontis-blocks")}
                globalSwitcher={paginationArrowBorderColorSwitcher}
                setGlobalSwitcher={(value) => setAttributes({ paginationArrowBorderColorSwitcher: value })}
            />

            {paginationArrowBorderColorSwitcher === 'normal' && (
                <FB_ColorControl
                    label={__("Normal Color", "frontis-blocks")}
                    globalColor={paginationArrowBorderColor}
                    setGlobalColor={(value) => setAttributes({ paginationArrowBorderColor: value })}
                />
            )}

            {paginationArrowBorderColorSwitcher === 'hover' && (
                <FB_ColorControl
                    label={__("Hover Color", "frontis-blocks")}
                    globalColor={paginationArrowBorderHoverColor}
                    setGlobalColor={(value) => setAttributes({ paginationArrowBorderHoverColor: value })}
                />
            )}

            <FB_Spacing
                label={__("Border", "frontis-blocks")}
                deviceType={deviceType}
                spacingUnitsHandler={handlePaginationArrowBorderUnitsHandler}
                spacingUnits={paginationArrowBorderUnits}
                spacingDesktop={paginationArrowDesktopBorder}
                spacingTablet={paginationArrowTabletBorder}
                spacingMobile={paginationArrowMobileBorder}
                handleSpacingUnitHandler={handlePaginationArrowBorderUnitChange}
                spacingCombineBtn={paginationArrowBorderLink}
                spacingCombineBtnHandler={handlePaginationArrowBorderCombineBtn}
                setAttributes={setAttributes}
            />

            <FB_Spacing
                label={__("Border Radius", "frontis-blocks")}
                deviceType={deviceType}
                spacingUnitsHandler={handlePaginationArrowBorderRadiusUnitsHandler}
                spacingUnits={paginationArrowBorderRadiusUnits}
                spacingDesktop={paginationArrowDesktopBorderRadius}
                spacingTablet={paginationArrowTabletBorderRadius}
                spacingMobile={paginationArrowMobileBorderRadius}
                handleSpacingUnitHandler={handlePaginationArrowBorderRadiusUnitChange}
                spacingCombineBtn={paginationArrowBorderRadiusLink}
                spacingCombineBtnHandler={handlePaginationArrowBorderRadiusCombineBtn}
                setAttributes={setAttributes}
            />

            </PanelBody>

            <PanelBody 
                title={__("Pagination Numbers", "frontis-blocks")}
                initialOpen={false}
             >

                <FB_Range
                    min={1}
                    max={200}
                    label={__("Width", "frontis-blocks")}
                    rangeValue={paginationBtnSize}
                    onChangeHandler={(value) => setAttributes({ paginationBtnSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ paginationBtnSizeUnits: value })} 
                    deviceType={deviceType}
                    units={paginationBtnSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_Range
                    min={1}
                    max={200}
                    label={__("Gap", "frontis-blocks")}
                    rangeValue={paginationBtnGap}
                    onChangeHandler={(value) => setAttributes({ paginationBtnGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ paginationBtnGapUnits: value })} 
                    deviceType={deviceType}
                    units={paginationBtnGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={paginationBtnTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ paginationBtnTextGlobalTypographyData: value })}

                    globalTypoType={paginationBtnTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            paginationBtnTextGlobalTypoType: value, 
                            paginationBtnTextGlobalTypoSwitcher: value === 'default' ? {...paginationBtnTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...paginationBtnTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={paginationBtnTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ paginationBtnTextGlobalTypoOption: value })}

                    fontFamily={paginationBtnTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ paginationBtnTextFontFamily: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={paginationBtnTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ paginationBtnTextFontSize: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={paginationBtnTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ paginationBtnTextFontSizeUnits: value })}

                    fontWeight={paginationBtnTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ paginationBtnTextFontWeight: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={paginationBtnTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ paginationBtnTextFontStyle: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={paginationBtnTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ paginationBtnTextTransform: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={paginationBtnTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ paginationBtnTextDecoration: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={paginationBtnTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ paginationBtnTextLetterSpacing: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={paginationBtnTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ paginationBtnTextLetterSpacingUnits: value })}

                    lineHeight={paginationBtnTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ paginationBtnTextLineHeight: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={paginationBtnTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ paginationBtnTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Text Color", "frontis-blocks")}
                    globalSwitcher={paginationBtnTextColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ paginationBtnTextColorSwitcher: value })}
                />

                {paginationBtnTextColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={paginationBtnTextColor} 
                        setGlobalColor={(value) => setAttributes({ paginationBtnTextColor: value })}
                    />
                )}

                {paginationBtnTextColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={paginationBtnTextHoverColor}
                        setGlobalColor={(value) => setAttributes({ paginationBtnTextHoverColor: value })}
                    />
                )}

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={paginationBtnBgColorSwitcher}  
                    setBgColorSwitcher={(value) => setAttributes({ paginationBtnBgColorSwitcher: value })}
                    
                    normalBackgroundType={paginationBtnNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ paginationBtnNormalBackgroundType: value })}
                    normalClassicColor={paginationBtnNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ paginationBtnNormalClassicColor: value })}
                    normalGradientColor={paginationBtnNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ paginationBtnNormalGradientColor: value })}
                    normalCustomGradientSwitcher={paginationBtnNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ paginationBtnNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={paginationBtnNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ paginationBtnNormalCustomGradientInputValue: value })}

                    hoverBackgroundType={paginationBtnHoverBackgroundType} 
                    setHoverBackgroundType={(value) => setAttributes({ paginationBtnHoverBackgroundType: value })}
                    hoverClassicColor={paginationBtnHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ paginationBtnHoverClassicColor: value })}
                    hoverGradientColor={paginationBtnHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ paginationBtnHoverGradientColor: value })}
                    hoverCustomGradientSwitcher={paginationBtnHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ paginationBtnHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={paginationBtnHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ paginationBtnHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <FB_SwitcherControl
                    label={__("Active Text Color", "frontis-blocks")}
                    globalSwitcher={paginationActiveBtnTextColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ paginationActiveBtnTextColorSwitcher: value })}
                />

                {paginationActiveBtnTextColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={paginationActiveBtnTextColor} 
                        setGlobalColor={(value) => setAttributes({ paginationActiveBtnTextColor: value })}
                    />
                )}

                {paginationActiveBtnTextColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={paginationActiveBtnTextHoverColor}
                        setGlobalColor={(value) => setAttributes({ paginationActiveBtnTextHoverColor: value })}
                    />
                )}

                <FB_BackgroundColorControl
                    label={__("Active Background Color", "frontis-blocks")}
                    bgColorSwitcher={paginationActiveBtnBgColorSwitcher}  
                    setBgColorSwitcher={(value) => setAttributes({ paginationActiveBtnBgColorSwitcher: value })}
                    
                    normalBackgroundType={paginationActiveBtnNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ paginationActiveBtnNormalBackgroundType: value })}
                    normalClassicColor={paginationActiveBtnNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ paginationActiveBtnNormalClassicColor: value })}
                    normalGradientColor={paginationActiveBtnNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ paginationActiveBtnNormalGradientColor: value })}
                    normalCustomGradientSwitcher={paginationActiveBtnNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ paginationActiveBtnNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={paginationActiveBtnNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ paginationActiveBtnNormalCustomGradientInputValue: value })}

                    hoverBackgroundType={paginationActiveBtnHoverBackgroundType} 
                    setHoverBackgroundType={(value) => setAttributes({ paginationActiveBtnHoverBackgroundType: value })}
                    hoverClassicColor={paginationActiveBtnHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ paginationActiveBtnHoverClassicColor: value })}
                    hoverGradientColor={paginationActiveBtnHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ paginationActiveBtnHoverGradientColor: value })}
                    hoverCustomGradientSwitcher={paginationActiveBtnHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ paginationActiveBtnHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={paginationActiveBtnHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ paginationActiveBtnHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={paginationBtnBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ paginationBtnBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border", "frontis-blocks")}
                    globalSwitcher={paginationBtnBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ paginationBtnBorderColorSwitcher: value })}
                />

                {paginationBtnBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={paginationBtnBorderColor}
                        setGlobalColor={(value) => setAttributes({ paginationBtnBorderColor: value })}
                    />
                )}

                {paginationBtnBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={paginationBtnBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ paginationBtnBorderHoverColor: value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePaginationBtnBorderUnitsHandler}
                    spacingUnits={paginationBtnBorderUnits}
                    spacingDesktop={paginationBtnDesktopBorder}
                    spacingTablet={paginationBtnTabletBorder}
                    spacingMobile={paginationBtnMobileBorder}
                    handleSpacingUnitHandler={handlePaginationBtnBorderUnitChange}
                    spacingCombineBtn={paginationBtnBorderLink}
                    spacingCombineBtnHandler={handlePaginationBtnBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePaginationBtnBorderRadiusUnitsHandler}
                    spacingUnits={paginationBtnBorderRadiusUnits}
                    spacingDesktop={paginationBtnDesktopBorderRadius}
                    spacingTablet={paginationBtnTabletBorderRadius}
                    spacingMobile={paginationBtnMobileBorderRadius}
                    handleSpacingUnitHandler={handlePaginationBtnBorderRadiusUnitChange}
                    spacingCombineBtn={paginationBtnBorderRadiusLink}
                    spacingCombineBtnHandler={handlePaginationBtnBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

            </PanelBody>

        </>
	);
		
	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
        <>

        </>
	);

    return (
        <>
            <style>
                {editorStyle}
            </style>

            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}