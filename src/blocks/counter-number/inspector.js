import { __ } from '@wordpress/i18n';
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	TabPanel,
	PanelBody,
	TextControl,
	ColorPicker,
	BaseControl,
	RangeControl,
	ToggleControl,
	DateTimePicker,
	Dropdown,
	Button,
	Dashicon,
	SelectControl,
	ButtonGroup,
	ResponsiveWrapper, __experimentalHStack as HStack,
} from '@wordpress/components';
import {useEffect, useRef, useState, useMemo} from '@wordpress/element';
import './editor.scss';
import {mediaType, BORDER_STYLES, FONT_FAMILYS, UNIT_TYPES} from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import CounterIconControl from "@Blocks/counter-number/style-control/counter-icon-control";
import CounterItemBgColorControl from "@Blocks/counter-number/style-control/counter-item-bg-color-control";
import CounterItemBorderTypeControl from "@Blocks/counter-number/style-control/counter-item-border-type-control";
import CounterItemBorderRadiusControl from "@Blocks/counter-number/style-control/counter-item-border-radius-control";
import CounterNumberTypographyControl from "@Blocks/counter-number/style-control/counter-number-typograpy-control";
import CounterNumberMarginControl from "@Blocks/counter-number/style-control/counter-number-margin-control";
import CounterNumberTitleTypographyControl from "@Blocks/counter-number/style-control/counter-number-title-typograpy-control";
import CounterNumberTitleMarginControl from "@Blocks/counter-number/style-control/counter-number-title-margin-control";

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		deviceType,
		counterNumber,
		counterPrefix,
		counterSuffix,
		counterTitle,
		showThousandsSeparator,
		icon,
		mediaSwitcher,
		counterMediaUrl,

		counterItemSize,
		counterItemSizeUnits,
		// Border Type
		counterItemBorder,
		counterItemBorderColor,
		counterItemBackgroundColor,

		counterItemBorderTypeUnits,
		counterItemBorderTypeDesktop,
		counterItemBorderTypeTablet,
		counterItemBorderTypeMobile,
		counterItemBorderTypeLink,

		// Border Radius
		counterItemBorderRadiusUnits,
		counterItemBorderRadiusDesktop,
		counterItemBorderRadiusTablet,
		counterItemBorderRadiusMobile,
		counterItemBorderRadiusLink,

		counterItemBgColorSwitcher,
		counterItemBgColor,
		counterItemBgHoverColor,

		counterIconColorSwitcher,
		counterIconColor,
		counterIconHoverColor,
		counterIconSize,
		counterIconSizeUnits,

		counterIconMarginUnits,
		counterIconMarginDesktop,
		counterIconMarginTablet,
		counterIconMarginMobile,
		counterIconMarginLink,


		counterNumberFontColorSwitcher,
		counterNumberFontColor,
		counterNumberFontHoverColor,

		counterNumberFontFamily,
		counterNumberFontSize,
		counterNumberFontSizeUnits,
		counterNumberFontWeight,
		counterNumberFontStyle,
		counterNumberTextTransform,
		counterNumberTextDecoration,
		counterNumberLetterSpacing,
		counterNumberLetterSpacingUnits,
		counterNumberLineHeight,
		counterNumberLineHeightUnits,

		counterNumberMarginUnits,
		counterNumberMarginDesktop,
		counterNumberMarginTablet,
		counterNumberMarginMobile,
		counterNumberMarginLink,


		counterNumberTitleFontColorSwitcher,
		counterNumberTitleFontColor,
		counterNumberTitleFontHoverColor,

		counterNumberTitleFontFamily,
		counterNumberTitleFontSize,
		counterNumberTitleFontSizeUnits,
		counterNumberTitleFontWeight,
		counterNumberTitleFontStyle,
		counterNumberTitleTextTransform,
		counterNumberTitleTextDecoration,
		counterNumberTitleLetterSpacing,
		counterNumberTitleLetterSpacingUnits,
		counterNumberTitleLineHeight,
		counterNumberTitleLineHeightUnits,

		counterNumberTitleMarginUnits,
		counterNumberTitleMarginDesktop,
		counterNumberTitleMarginTablet,
		counterNumberTitleMarginMobile,
		counterNumberTitleMarginLink,
        counterGlobalZIndex,
        counterGlobalPaddingUnits,
        counterGlobalPaddingDesktop,
        counterGlobalPaddingTablet,
        counterGlobalPaddingMobile,
        counterGlobalPaddingLink,
        counterGlobalMarginUnits,
        counterGlobalMarginDesktop,
        counterGlobalMarginTablet,
        counterGlobalMarginMobile,
        counterGlobalMarginLink,
        counterGlobalBgColorSwitcher,
        counterGlobalBgColor,
        counterGlobalBgHoverColor,
        counterGlobalBorder,
        counterGlobalBorderColorSwitcher,
        counterGlobalBorderColor,
        counterGlobalBorderHoverColor,
        counterGlobalBorderUnits,
        counterGlobalBorderDesktop,
        counterGlobalBorderTablet,
        counterGlobalBorderMobile,
        counterGlobalBorderLink,
        counterGlobalBorderRadiusUnits,
        counterGlobalBorderRadiusDesktop,
        counterGlobalBorderRadiusTablet,
        counterGlobalBorderRadiusMobile,
        counterGlobalBorderRadiusLink,
        counterGlobalBoxShadowValues,
        counterGlobalBoxShadowCssValue

	} = attributes;

	const counterRef = useRef(null);
	const observerRef = useRef(null);

	useEffect(() => {
		if (!blockID) {
			setAttributes({
				blockID: "counter-number" + clientId.slice(0, 8),
			});
		}
	}, [blockID, clientId, setAttributes]);


	// Set up Intersection Observer and animation in the editor
	useEffect(() => {
		if (observerRef.current) observerRef.current.disconnect();

		observerRef.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					animateCounter();
				}
			});
		});

		if (counterRef.current) {
			observerRef.current.observe(counterRef.current);
		}

		return () => {
			if (observerRef.current) observerRef.current.disconnect();
		};
	}, [counterNumber, showThousandsSeparator]);

	const animateCounter = () => {
		let start = 0;
		const end = counterNumber;
		const duration = 2000; // Animation duration in milliseconds
		let startTime = null;

		const step = (timestamp) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);
			const current = Math.floor(progress * (end - start) + start);

			counterRef.current.textContent = showThousandsSeparator
				? current.toLocaleString()
				: current;

			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};

		window.requestAnimationFrame(step);

	};


	// Icon media remove handler
	const removeCounterMedia = () => {
		setAttributes({
			counterMediaId: '',
			counterMediaUrl: ''
		});
	}
	const iconHandler = (iconName) => {
		setAttributes({icon: iconName || 'star' })
	}

    const counterItemSizeHandler = (value) => {
		setAttributes({ counterItemSize: value });
	};

	const counterItemSizeUnitsHandler = (value) => {
		setAttributes({ counterItemSizeUnits: value });
	};

	const blockProps = useBlockProps();

    const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( counterItemBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						counterItemBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						counterItemBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						counterItemBorderTypeMobile: {
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
					setAttributes( {counterItemBorderTypeDesktop: {...counterItemBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {counterItemBorderTypeTablet: {...counterItemBorderTypeTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {counterItemBorderTypeMobile: {...counterItemBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {counterItemBorderTypeLink: !counterItemBorderTypeLink} );
	}

	const counterItemBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			counterItemBorderTypeUnits: {
				...counterItemBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}
	

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (counterGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalPaddingMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalPaddingDesktop: {
                            ...counterGlobalPaddingDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalPaddingTablet: {
                            ...counterGlobalPaddingTablet,
                            [position]: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalPaddingMobile: {
                            ...counterGlobalPaddingMobile,
                            [position]: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ counterGlobalPaddingLink: !counterGlobalPaddingLink });
    };

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            counterGlobalPaddingUnits: {
                ...counterGlobalPaddingUnits,
                [deviceType]: unit,
            },
        });
    };

    const globalDesktopPadding = `${counterGlobalPaddingDesktop.top}${counterGlobalPaddingUnits.Desktop} ${counterGlobalPaddingDesktop.right}${counterGlobalPaddingUnits.Desktop} ${counterGlobalPaddingDesktop.bottom}${counterGlobalPaddingUnits.Desktop} ${counterGlobalPaddingDesktop.left}${counterGlobalPaddingUnits.Desktop}`;
    const globalTabletPadding = `${counterGlobalPaddingTablet.top}${counterGlobalPaddingUnits.Tablet} ${counterGlobalPaddingTablet.right}${counterGlobalPaddingUnits.Tablet} ${counterGlobalPaddingTablet.bottom}${counterGlobalPaddingUnits.Tablet} ${counterGlobalPaddingTablet.left}${counterGlobalPaddingUnits.Tablet}`;
    const globalMobilePadding = `${counterGlobalPaddingMobile.top}${counterGlobalPaddingUnits.Mobile} ${counterGlobalPaddingMobile.right}${counterGlobalPaddingUnits.Mobile} ${counterGlobalPaddingMobile.bottom}${counterGlobalPaddingUnits.Mobile} ${counterGlobalPaddingMobile.left}${counterGlobalPaddingUnits.Mobile}`;
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (counterGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalMarginMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalMarginDesktop: {
                            ...counterGlobalMarginDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalMarginTablet: {
                            ...counterGlobalMarginTablet,
                            [position]: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalMarginMobile: {
                            ...counterGlobalMarginMobile,
                            [position]: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ counterGlobalMarginLink: !counterGlobalMarginLink });
    };

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            counterGlobalMarginUnits: {
                ...counterGlobalMarginUnits,
                [deviceType]: unit,
            },
        });
    };

    const globalDesktopMargin = `${counterGlobalMarginDesktop.top}${counterGlobalMarginUnits.Desktop} ${counterGlobalMarginDesktop.right}${counterGlobalMarginUnits.Desktop} ${counterGlobalMarginDesktop.bottom}${counterGlobalMarginUnits.Desktop} ${counterGlobalMarginDesktop.left}${counterGlobalMarginUnits.Desktop}`;
    const globalTabletMargin = `${counterGlobalMarginTablet.top}${counterGlobalMarginUnits.Tablet} ${counterGlobalMarginTablet.right}${counterGlobalMarginUnits.Tablet} ${counterGlobalMarginTablet.bottom}${counterGlobalMarginUnits.Tablet} ${counterGlobalMarginTablet.left}${counterGlobalMarginUnits.Tablet}`;
    const globalMobileMargin = `${counterGlobalMarginMobile.top}${counterGlobalMarginUnits.Mobile} ${counterGlobalMarginMobile.right}${counterGlobalMarginUnits.Mobile} ${counterGlobalMarginMobile.bottom}${counterGlobalMarginUnits.Mobile} ${counterGlobalMarginMobile.left}${counterGlobalMarginUnits.Mobile}`;
    /** End Global Margin */

    const handleGlobalBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( counterGlobalBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        counterGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        counterGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        counterGlobalBorderMobile: {
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
                    setAttributes( {counterGlobalBorderDesktop: {...counterGlobalBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {counterGlobalBorderTablet: {...counterGlobalBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {counterGlobalBorderMobile: {...counterGlobalBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }
    
    const handleGlobalBorderCombineBtn = () => {
        setAttributes( {counterGlobalBorderLink: !counterGlobalBorderLink} );
    }
    
    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes( {
            counterGlobalBorderUnits: {
                ...counterGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    
    const globalDesktopBorderWidth = `${counterGlobalBorderDesktop.top}${counterGlobalBorderUnits.Desktop} ${counterGlobalBorderDesktop.right}${counterGlobalBorderUnits.Desktop} ${counterGlobalBorderDesktop.bottom}${counterGlobalBorderUnits.Desktop} ${counterGlobalBorderDesktop.left}${counterGlobalBorderUnits.Desktop}`;
    const globalTabletBorderWidth = `${counterGlobalBorderTablet.top}${counterGlobalBorderUnits.Tablet} ${counterGlobalBorderTablet.right}${counterGlobalBorderUnits.Tablet} ${counterGlobalBorderTablet.bottom}${counterGlobalBorderUnits.Tablet} ${counterGlobalBorderTablet.left}${counterGlobalBorderUnits.Tablet}`;
    const globalMobileBorderWidth = `${counterGlobalBorderMobile.top}${counterGlobalBorderUnits.Mobile} ${counterGlobalBorderMobile.right}${counterGlobalBorderUnits.Mobile} ${counterGlobalBorderMobile.bottom}${counterGlobalBorderUnits.Mobile} ${counterGlobalBorderMobile.left}${counterGlobalBorderUnits.Mobile}`;
    /** End Border */
    
    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( counterGlobalBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        counterGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        counterGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        counterGlobalBorderRadiusMobile: {
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
                    setAttributes( {counterGlobalBorderRadiusDesktop: {...counterGlobalBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {counterGlobalBorderRadiusTablet: {...counterGlobalBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {counterGlobalBorderRadiusMobile: {...counterGlobalBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }
    
    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes( {counterGlobalBorderRadiusLink: !counterGlobalBorderRadiusLink} );
    }
    
    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            counterGlobalBorderRadiusUnits: {
                ...counterGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */
    
    /** End Global Border Radius */
    const globalDesktopBorderRadiusWidth = `${counterGlobalBorderRadiusDesktop.top}${counterGlobalBorderRadiusUnits.Desktop} ${counterGlobalBorderRadiusDesktop.right}${counterGlobalBorderRadiusUnits.Desktop} ${counterGlobalBorderRadiusDesktop.bottom}${counterGlobalBorderRadiusUnits.Desktop} ${counterGlobalBorderRadiusDesktop.left}${counterGlobalBorderRadiusUnits.Desktop}`;
    const globalTabletBorderRadiusWidth = `${counterGlobalBorderRadiusTablet.top}${counterGlobalBorderRadiusUnits.Tablet} ${counterGlobalBorderRadiusTablet.right}${counterGlobalBorderRadiusUnits.Tablet} ${counterGlobalBorderRadiusTablet.bottom}${counterGlobalBorderRadiusUnits.Tablet} ${counterGlobalBorderRadiusTablet.left}${counterGlobalBorderRadiusUnits.Tablet}`;
    const globalMobileBorderRadiusWidth = `${counterGlobalBorderRadiusMobile.top}${counterGlobalBorderRadiusUnits.Mobile} ${counterGlobalBorderRadiusMobile.right}${counterGlobalBorderRadiusUnits.Mobile} ${counterGlobalBorderRadiusMobile.bottom}${counterGlobalBorderRadiusUnits.Mobile} ${counterGlobalBorderRadiusMobile.left}${counterGlobalBorderRadiusUnits.Mobile}`;
    /** End Border Radius */
    
	


    const counterBlockStyle = useMemo(() => `
    .fb-counter-wrapper.${blockID}{
        ${counterGlobalBgColor ? `background: ${counterGlobalBgColor};` : ''}
        ${globalDesktopPadding ? `padding: ${globalDesktopPadding};` : ""}
        ${globalDesktopMargin ? `margin: ${globalDesktopMargin};` : ""}
        ${counterGlobalBorderColor ? `border: ${counterGlobalBorderColor};` : "" } 
        ${globalDesktopBorderWidth ? `border-width: ${globalDesktopBorderWidth};` : ""}
        ${globalDesktopBorderRadiusWidth ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ""}
        ${counterGlobalBoxShadowCssValue ? `box-shadow: ${counterGlobalBoxShadowCssValue};` : "" }
    }
    .fb-counter-wrapper.${blockID}:hover{
        ${counterGlobalBgHoverColor ? `background: ${counterGlobalBgHoverColor};` : ''}
        ${counterGlobalBorderHoverColor ? `border: ${counterGlobalBorderHoverColor};` : "" }
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item {
        ${counterItemBgColor ? `background: ${counterItemBgColor};` : ''}
        ${counterItemSize[deviceType] ? `width: ${counterItemSize[deviceType]}${counterItemSizeUnits[deviceType]};` : ''}
        ${counterItemSize[deviceType] ? `height: ${counterItemSize[deviceType]}${counterItemSizeUnits[deviceType]};` : ''}
        ${counterItemBorder ? `border: ${counterItemBorder};` : ''}
        ${counterItemBorderColor ? `border-color: ${counterItemBorderColor};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon svg {
        ${counterIconSize[deviceType] ? `width: ${counterIconSize[deviceType]}${counterIconSizeUnits[deviceType]};` : ''}
        ${counterIconColor ? `fill: ${counterIconColor};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-wrapper {
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
        ${counterNumberFontColor ? `color: ${counterNumberFontColor};` : ''}
        ${counterNumberFontFamily ? `font-family: ${counterNumberFontFamily};` : ''}
        ${counterNumberFontSize[deviceType] ? `font-size: ${counterNumberFontSize[deviceType]}${counterNumberFontSizeUnits[deviceType]};` : ''}
        ${counterNumberFontWeight ? `font-weight: ${counterNumberFontWeight};` : ''}
        ${counterNumberFontStyle ? `font-style: ${counterNumberFontStyle};` : ''}
        ${counterNumberTextTransform ? `text-transform: ${counterNumberTextTransform};` : ''}
        ${counterNumberTextDecoration ? `text-decoration: ${counterNumberTextDecoration};` : ''}
        ${counterNumberLetterSpacing[deviceType] ? `letter-spacing: ${counterNumberLetterSpacing[deviceType]}${counterNumberLetterSpacingUnits[deviceType]};` : ''}
        ${counterNumberLineHeight[deviceType] ? `line-height: ${counterNumberLineHeight[deviceType]}${counterNumberLineHeightUnits[deviceType]};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
        ${counterNumberTitleFontColor ? `color: ${counterNumberTitleFontColor};` : ''}
        ${counterNumberTitleFontFamily ? `font-family: ${counterNumberTitleFontFamily};` : ''}
        ${counterNumberTitleFontSize[deviceType] ? `font-size: ${counterNumberTitleFontSize[deviceType]}${counterNumberTitleFontSizeUnits[deviceType]};` : ''}
        ${counterNumberTitleFontWeight ? `font-weight: ${counterNumberTitleFontWeight};` : ''}
        ${counterNumberTitleFontStyle ? `font-style: ${counterNumberTitleFontStyle};` : ''}
        ${counterNumberTitleTextTransform ? `text-transform: ${counterNumberTitleTextTransform};` : ''}
        ${counterNumberTitleTextDecoration ? `text-decoration: ${counterNumberTitleTextDecoration};` : ''}
        ${counterNumberTitleLetterSpacing[deviceType] ? `letter-spacing: ${counterNumberTitleLetterSpacing[deviceType]}${counterNumberTitleLetterSpacingUnits[deviceType]};` : ''}
        ${counterNumberTitleLineHeight[deviceType] ? `line-height: ${counterNumberTitleLineHeight[deviceType]}${counterNumberTitleLineHeightUnits[deviceType]};` : ''}
    }
    @media only screen and (max-width: 1024px) {
        .fb-counter-wrapper.${blockID}{
            ${globalTabletPadding ? `padding: ${globalTabletPadding};` : ""}
            ${globalTabletPadding ? `margin: ${globalTabletPadding};` : ""}
            ${globalTabletBorderWidth ? `border-width: ${globalTabletBorderWidth};` : ""}
            ${globalTabletBorderRadiusWidth ? `border-radius: ${globalTabletBorderRadiusWidth};` : ""}
        }
    }
    @media only screen and (max-width: 767px) {
        .fb-counter-wrapper.${blockID}{
            ${globalMobilePadding ? `padding: ${globalMobilePadding};` : ""}
            ${globalMobilePadding ? `margin: ${globalMobilePadding};` : ""}
            ${globalMobileBorderWidth ? `border-width: ${globalMobileBorderWidth};` : ""}
            ${globalMobileBorderRadiusWidth ? `border-radius: ${globalMobileBorderRadiusWidth};` : ""}
        }
    }
    `, [
        blockID,
        deviceType,
        counterItemBgColor,
        counterItemSize,
        counterItemSizeUnits,
        counterItemBorder,
        counterItemBorderColor,
        counterIconSize,
        counterIconSizeUnits,
        counterIconColor,
        counterNumberFontColor,
        counterNumberFontFamily,
        counterNumberFontSize,
        counterNumberFontSizeUnits,
        counterNumberFontWeight,
        counterNumberFontStyle,
        counterNumberTextTransform,
        counterNumberTextDecoration,
        counterNumberLetterSpacing,
        counterNumberLetterSpacingUnits,
        counterNumberLineHeight,
        counterNumberLineHeightUnits,
        counterNumberTitleFontColor,
        counterNumberTitleFontFamily,
        counterNumberTitleFontSize,
        counterNumberTitleFontSizeUnits,
        counterNumberTitleFontWeight,
        counterNumberTitleFontStyle,
        counterNumberTitleTextTransform,
        counterNumberTitleTextDecoration,
        counterNumberTitleLetterSpacing,
        counterNumberTitleLetterSpacingUnits,
        counterNumberTitleLineHeight,
        counterNumberTitleLineHeightUnits,
        counterGlobalBgColor,
        globalDesktopPadding,
        globalDesktopMargin,
        counterGlobalBorderColor,
        globalDesktopBorderWidth,
        globalDesktopBorderRadiusWidth,
        counterGlobalBgHoverColor,
        counterGlobalBorderHoverColor,
        counterGlobalBoxShadowCssValue
    ]);
 
    useEffect(() => {
    setAttributes({blockStyle: `${counterBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [counterBlockStyle]);


    const editorStyle = counterBlockStyle.replace(/\s+/g, ' ').trim();

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
								name:
									"styles",
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
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === 'general' && (
									<>
									<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
										<RangeControl
											label={__('Counter Number', 'frontis-blocks')}
											value={counterNumber}
											onChange={(value) => setAttributes({ counterNumber: value })}
											min={0}
											max={10000}
										/>
										<TextControl
											label={__('Counter Title', 'frontis-blocks')}
											value={counterTitle}
											onChange={(value) => setAttributes({ counterTitle: value })}
										/>
										<TextControl
											label={__('Counter Prefix', 'frontis-blocks')}
											value={counterPrefix}
											onChange={(value) => setAttributes({ counterPrefix: value })}
										/>
										<TextControl
											label={__('Counter Suffix', 'frontis-blocks')}
											value={counterSuffix}
											onChange={(value) => setAttributes({ counterSuffix: value })}
										/>
										<ToggleControl
											label={__('Show Thousands Separator', 'frontis-blocks')}
											checked={showThousandsSeparator}
											onChange={(value) => setAttributes({ showThousandsSeparator: value })}
										/>

										<BaseControl className="fb-sub-heading-position">
											<SelectControl
												label={__("Counter Icon: Media Type", "frontis-block")}
												value={mediaSwitcher}
												options={mediaType}
												onChange={(value) => setAttributes({mediaSwitcher: value})}
											/>
										</BaseControl>


										<div className='fb-image-upload-field-wrapper'>
											{mediaSwitcher === 'image' && attributes.counterMediaUrl && (
												<BaseControl>
													<MediaUploadCheck>
														<MediaUpload
															onSelect={(media) => {
																setAttributes({
																	counterMediaId: media['id'],
																	counterMediaUrl: media['url'],
																	counterMediaWidth: media['width'],
																	counterMediaHeight: media['height']
																});
															}}
															type="image"
															value={attributes.counterMediaId}
															render={({open}) => {
																return (
																	<Button
																		className={attributes.counterMediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																		onClick={open}
																	>
																		{attributes.counterMediaId == 0 && __('Select Icon Image', 'frontis-blocks')}
																		{attributes.counterMediaId != 0 &&
																			<ResponsiveWrapper
																				naturalWidth={attributes.counterMediaWidth}
																				naturalHeight={attributes.counterMediaHeight}>
																				<img
																					src={attributes.counterMediaUrl}/>
																			</ResponsiveWrapper>
																		}
																	</Button>
																);
															}}
														/>
													</MediaUploadCheck>
													{attributes.counterMediaId != 0 &&
														<HStack className='editor-post-featured-image__actions'>
															<Button
																className='editor-post-featured-image__action'
																onClick={() => removeCounterMedia()}>{__('Remove', 'frontis-block')}</Button>
															<MediaUploadCheck>
																<MediaUpload
																	title={__('Replace image', 'frontis-block')}
																	value={attributes.counterMediaId}
																	onSelect={(media) => {
																		setAttributes({
																			counterMediaId: media['id'],
																			counterMediaUrl: media['url'],
																			counterMediaWidth: media['width'],
																			counterMediaHeight: media['height']
																		});
																	}}
																	type="image"
																	render={({open}) => (
																		<Button
																			className='editor-post-featured-image__action'
																			onClick={open}>{__('Replace', 'frontis-block')}</Button>
																	)}
																/>
															</MediaUploadCheck>
														</HStack>
													}
												</BaseControl>
											)}

											{mediaSwitcher === 'icon' && (
												<BaseControl>
													<FBIconPicker value={icon} setIconHandler={iconHandler}/>
												</BaseControl>
											)}
										</div>
									</PanelBody>
									</>
								)}

								{tab.name === "styles" && (
									<>

										<PanelBody
											title={__("Item", "frontis-blocks")}
											initialOpen={false}
										>
											
                                            <FB_Range
                                                min={1}
                                                max={300}
                                                label={__("Item Size", "frontis-blocks")}
                                                rangeValue={counterItemSize}
                                                onChangeHandler={counterItemSizeHandler}
                                                rangeUnitHandler={counterItemSizeUnitsHandler}
                                                deviceType={deviceType}
                                                units={counterItemSizeUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={25}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={counterItemBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ counterItemBgColorSwitcher: value })}
                                            />

                                            {counterItemBgColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={counterItemBgColor}
                                                    setGlobalColor={(value) => setAttributes({ counterItemBgColor: value })}
                                                />
                                            )}

                                            {counterItemBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={counterItemBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ counterItemBgHoverColor: value })}
                                                />
                                            )}
                                            
                                            <SelectControl
                                                label={__("Border Style", "frontis-blocks")}
                                                value={counterItemBorder}
                                                options={BORDER_STYLES}
                                                onChange={(value) => setAttributes({ counterItemBorder: value })}
                                            />
                                    
                                            <FB_Spacing
                                                label={ 'Border' }
                                                deviceType={deviceType}
                                                spacingUnitsHandler={counterItemBorderTypeUnitsHandler}
                                                spacingUnits={counterItemBorderTypeUnits}
                                                spacingDesktop={counterItemBorderTypeDesktop}
                                                spacingTablet={counterItemBorderTypeTablet}
                                                spacingMobile={counterItemBorderTypeMobile}
                                                handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
                                                spacingCombineBtn={counterItemBorderTypeLink}
                                                spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
                                            />
											<CounterItemBorderRadiusControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>

										</PanelBody>

										<PanelBody
											title={__("Icon", "frontis-blocks")}
											initialOpen={false}
										>
											<CounterIconControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>
										<PanelBody
											title={__("Counter Number", "frontis-blocks")}
											initialOpen={false}
										>
											<CounterNumberTypographyControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CounterNumberMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>
										<PanelBody
											title={__("Counter Title", "frontis-blocks")}
											initialOpen={false}
										>
											<CounterNumberTitleTypographyControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<CounterNumberTitleMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>
									</>
								)}
                                {tab.name === "advanced" && (
                                <>
                                    <div className="fb-setting-advanced-tab-wrapper">
                                        <div className="fb-setting-inner-wrapper">
                                            <PanelBody
                                                title={__("Advanced", "frontis-blocks")}
                                                initialOpen={true}
                                                className='fb-setting-z-index-header'
                                            >
                                            <FB_Range
                                                min={0}
                                                max={10000000}
                                                label={__("Z Index", "frontis-blocks")}
                                                rangeValue={counterGlobalZIndex}
                                                onChangeHandler={(value) => setAttributes({ counterGlobalZIndex: value === 0 ? undefined : value })}
                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={""}
                                                isRangeUnit={false}
                                            />
                                            </PanelBody>

                                            <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                                                <FB_Spacing
                                                    label={__("Padding", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                                                    spacingUnits={counterGlobalPaddingUnits}
                                                    spacingDesktop={counterGlobalPaddingDesktop}
                                                    spacingTablet={counterGlobalPaddingTablet}
                                                    spacingMobile={counterGlobalPaddingMobile}
                                                    handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                                                    spacingCombineBtn={counterGlobalPaddingLink}
                                                    spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                                                    setAttributes={setAttributes}
                                                />
                                                <FB_Spacing
                                                    label={__("Margin", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                                                    spacingUnits={counterGlobalMarginUnits}
                                                    spacingDesktop={counterGlobalMarginDesktop}
                                                    spacingTablet={counterGlobalMarginTablet}
                                                    spacingMobile={counterGlobalMarginMobile}
                                                    handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                                                    spacingCombineBtn={counterGlobalMarginLink}
                                                    spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                                                    setAttributes={setAttributes}
                                                />
                                            </PanelBody>

                                            <PanelBody 
                                                title={__("Background Color", "frontis-blocks")}
                                                initialOpen={false} 
                                            >
                                                <FB_SwitcherControl
                                                    label={__("Background Color", "frontis-blocks")}
                                                    globalSwitcher={counterGlobalBgColorSwitcher}
                                                    setGlobalSwitcher={(value) => setAttributes({ counterGlobalBgColorSwitcher: value })}
                                                />

                                                {counterGlobalBgColorSwitcher === 'normal' && (
                                                    <FB_ColorControl
                                                        label={__("Normal Color", "frontis-blocks")}
                                                        globalColor={counterGlobalBgColor}
                                                        setGlobalColor={(value) => setAttributes({ counterGlobalBgColor: value })}
                                                    />
                                                )}

                                                {counterGlobalBgColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={counterGlobalBgHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ counterGlobalBgHoverColor: value })}
                                                    />
                                                )}
                                            </PanelBody>

                                            <PanelBody
                                                title={__("Border and Shadow", "frontis-blocks")}
                                                initialOpen={false}
                                            >

                                                <SelectControl
                                                    label={__("Border Style", "frontis-blocks")}
                                                    value={counterGlobalBorder}
                                                    options={BORDER_STYLES}
                                                    onChange={(value) => setAttributes({ counterGlobalBorder: value })}
                                                />

                                                <FB_SwitcherControl
                                                    label={__("Border Color", "frontis-blocks")}
                                                    globalSwitcher={counterGlobalBorderColorSwitcher}
                                                    setGlobalSwitcher={(value) => setAttributes({ counterGlobalBorderColorSwitcher: value })}
                                                />

                                                {counterGlobalBorderColorSwitcher === 'normal' && (
                                                    <FB_ColorControl
                                                        label={__("Normal Color", "frontis-blocks")}
                                                        globalColor={counterGlobalBorderColor}
                                                        setGlobalColor={(value) => setAttributes({ counterGlobalBorderColor: value })}
                                                    />
                                                )}

                                                {counterGlobalBorderColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={counterGlobalBorderHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ counterGlobalBorderHoverColor: value })}
                                                    />
                                                )}

                                                <FB_Spacing
                                                    label={__("Border", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                                                    spacingUnits={counterGlobalBorderUnits}
                                                    spacingDesktop={counterGlobalBorderDesktop}
                                                    spacingTablet={counterGlobalBorderTablet}
                                                    spacingMobile={counterGlobalBorderMobile}
                                                    handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                                                    spacingCombineBtn={counterGlobalBorderLink}
                                                    spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                                                    setAttributes={setAttributes}
                                                />

                                                <FB_Spacing
                                                    label={__("Border Radius", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                                                    spacingUnits={counterGlobalBorderRadiusUnits}
                                                    spacingDesktop={counterGlobalBorderRadiusDesktop}
                                                    spacingTablet={counterGlobalBorderRadiusTablet}
                                                    spacingMobile={counterGlobalBorderRadiusMobile}
                                                    handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                                                    spacingCombineBtn={counterGlobalBorderRadiusLink}
                                                    spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                                                    setAttributes={setAttributes}
                                                />
                                                <FB_BoxShadowControl
                                                    onBoxShadowChange={(value) => setAttributes({ counterGlobalBoxShadowValues: value })}
                                                    initialShadowValue={counterGlobalBoxShadowValues}
                                                    onBoxShadowStyleChange={(value) => setAttributes({ counterGlobalBoxShadowCssValue: value })}
                                                />

                                            </PanelBody>
                                        </div>
                                    </div>
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