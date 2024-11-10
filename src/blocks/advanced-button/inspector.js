import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
} from '@wordpress/block-editor';

import {
	SelectControl,
	PanelBody,
	TabPanel,
	BaseControl,
	Button,
	ButtonGroup,
	ToggleControl,
	TextControl,
	TextareaControl,
	Dropdown,
	Dashicon,
	RangeControl,
} from '@wordpress/components';

/**
 * Internal depencencies
 */
import {
	TEXT_ALIGN,
	ICON_ALIGN,
	BORDER_STYLES,
	ICON_POSITION,
} from "./constants/constants";

import { useState, useEffect, useMemo } from "@wordpress/element";
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from '@Components/spacing';
import FB_Color from '@Components/color';
import FB_TypographyControl from '@Components/typography-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_Range from '@Components/range';
import FB_UrlControl from '@Components/url-control';

import './editor.scss';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
	const {
		blockId,
		deviceType,
		buttonAlignment,
		buttonText,
		buttonUrl,
		buttonTargetUrl,
		buttonWidth,
		buttonWidthUnits,

		buttonFontFamily,
		buttonFontSize,
		buttonFontSizeUnits,
		buttonFontWeight,
		buttonFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonLetterSpacing,
		buttonLetterSpacingUnits,
		buttonLineHeight,
		buttonLineHeightUnits,

		buttonColorSwitcher,
		buttonColor,
		buttonHoverColor,
		buttonBgColorSwitcher,
		buttonBgColor,
		buttonBgHoverColor,
		buttonBorder,
		buttonBorderColorSwitcher,
		buttonBorderColor,
		buttonBorderHoverColor,

		buttonBorderUnits,
		buttonDesktopBorderWidth,
		buttonTabBorderWidth,
		buttonMobileBorderWidth,
		buttonBorderLink,

		buttonBorderRadiusUnits,
		buttonDesktopBorderRadiusWidth,
		buttonTabBorderRadiusWidth,
		buttonMobileBorderRadiusWidth,
		buttonBorderRadiusLink,

		buttonBoxShadowValues,
		buttonBoxShadowCssValue,

		buttonPaddingUnits,
		buttonDesktopPadding,
		buttonTabPadding,
		buttonMobilePadding,
		buttonPaddingLink,

		buttonMarginUnits,
		buttonDesktopMargin,
		buttonTabMargin,
		buttonMobileMargin,
		buttonMarginLink,

        buttonIconAlign,
        buttonIcon,
        buttonIconPosition,

        buttonIconSize,
        buttonIconSizeUnits,
        buttonIconColorSwitcher,
        buttonIconColor,
        buttonIconHoverColor,
		buttonIconBgColorSwitcher,
        buttonIconBgColor,
        buttonIconBgHoverColor,
        buttonIconBorder,
        buttonIconBorderColorSwitcher,
        buttonIconBorderColor,
        buttonIconBorderHoverColor,
        buttonIconBorderUnits,
        buttonIconBorderDesktop,
        buttonIconBorderTablet,
        buttonIconBorderMobile,
        buttonIconBorderLink,
        buttonIconBorderRadiusUnits,
        buttonIconBorderRadiusDesktop,
        buttonIconBorderRadiusTablet,
        buttonIconBorderRadiusMobile,
        buttonIconBorderRadiusLink,
        buttonIconGapSize,
        buttonIconGapUnits,

        /** Start Global Setting */
        buttonGlobalZIndex,
        buttonGlobalPaddingUnits,
        buttonGlobalPaddingDesktop,
        buttonGlobalPaddingTablet,
        buttonGlobalPaddingMobile,
        buttonGlobalPaddingLink,

        buttonGlobalMarginUnits,
        buttonGlobalMarginDesktop,
        buttonGlobalMarginTablet,
        buttonGlobalMarginMobile,
        buttonGlobalMarginLink,

        buttonGlobalBgColorSwitcher,
        buttonGlobalBgColor,
        buttonGlobalBgHoverColor,
        buttonGlobalBorder,
        buttonGlobalBorderColorSwitcher,
        buttonGlobalBorderColor,
        buttonGlobalBorderHoverColor,

        buttonGlobalBorderUnits,
        buttonGlobalBorderDesktop,
        buttonGlobalBorderTablet,
        buttonGlobalBorderMobile,
        buttonGlobalBorderLink,

        buttonGlobalBorderRadiusUnits,
        buttonGlobalBorderRadiusDesktop,
        buttonGlobalBorderRadiusTablet,
        buttonGlobalBorderRadiusMobile,
        buttonGlobalBorderRadiusLink,

        buttonGlobalBoxShadowValues,
        buttonGlobalBoxShadowCssValue,
        /** End Global Setting */
		blockStyle,

    } = attributes;    
    
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-advanced-button-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


    /** Start Icon border */
    const handlebuttonIconBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( buttonIconBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        buttonIconBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        buttonIconBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        buttonIconBorderMobile: {
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
                    setAttributes( {buttonIconBorderDesktop: {...buttonIconBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {buttonIconBorderTablet: {...buttonIconBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {buttonIconBorderMobile: {...buttonIconBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlebuttonIconBorderCombineBtn = () => {
        setAttributes( {buttonIconBorderLink: !buttonIconBorderLink} );
    }

    const handlebuttonIconBorderUnitsHandler = (unit) => {
        setAttributes( {
            buttonIconBorderUnits: {
                ...buttonIconBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Icon border */
    const buttonIconBorderDesktopWidth = `${buttonIconBorderDesktop.top}${buttonIconBorderUnits.Desktop} ${buttonIconBorderDesktop.right}${buttonIconBorderUnits.Desktop} ${buttonIconBorderDesktop.bottom}${buttonIconBorderUnits.Desktop} ${buttonIconBorderDesktop.left}${buttonIconBorderUnits.Desktop}`;
    const buttonIconBorderTabletWidth = `${buttonIconBorderTablet.top}${buttonIconBorderUnits.Tablet} ${buttonIconBorderTablet.right}${buttonIconBorderUnits.Tablet} ${buttonIconBorderTablet.bottom}${buttonIconBorderUnits.Tablet} ${buttonIconBorderTablet.left}${buttonIconBorderUnits.Tablet}`;
    const buttonIconBorderMobileWidth = `${buttonIconBorderMobile.top}${buttonIconBorderUnits.Mobile} ${buttonIconBorderMobile.right}${buttonIconBorderUnits.Mobile} ${buttonIconBorderMobile.bottom}${buttonIconBorderUnits.Mobile} ${buttonIconBorderMobile.left}${buttonIconBorderUnits.Mobile}`;
    /** End Border */


    /** Start Icon border radius*/
    const handlebuttonIconBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( buttonIconBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        buttonIconBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        buttonIconBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        buttonIconBorderRadiusMobile: {
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
                    setAttributes( {buttonIconBorderRadiusDesktop: {...buttonIconBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {buttonIconBorderRadiusTablet: {...buttonIconBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {buttonIconBorderRadiusMobile: {...buttonIconBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlebuttonIconBorderRadiusCombineBtn = () => {
        setAttributes( {buttonIconBorderRadiusLink: !buttonIconBorderRadiusLink} );
    }

    const handlebuttonIconBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            buttonIconBorderRadiusUnits: {
                ...buttonIconBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Icon Border Radius */
    const buttonIconBorderRadiusDesktopWidth = `${buttonIconBorderRadiusDesktop.top}${buttonIconBorderRadiusUnits.Desktop} ${buttonIconBorderRadiusDesktop.right}${buttonIconBorderRadiusUnits.Desktop} ${buttonIconBorderRadiusDesktop.bottom}${buttonIconBorderRadiusUnits.Desktop} ${buttonIconBorderRadiusDesktop.left}${buttonIconBorderRadiusUnits.Desktop}`;
    const buttonIconBorderRadiusTabletWidth = `${buttonIconBorderRadiusTablet.top}${buttonIconBorderRadiusUnits.Tablet} ${buttonIconBorderRadiusTablet.right}${buttonIconBorderRadiusUnits.Tablet} ${buttonIconBorderRadiusTablet.bottom}${buttonIconBorderRadiusUnits.Tablet} ${buttonIconBorderRadiusTablet.left}${buttonIconBorderRadiusUnits.Tablet}`;
    const buttonIconBorderRadiusMobileWidth = `${buttonIconBorderRadiusMobile.top}${buttonIconBorderRadiusUnits.Mobile} ${buttonIconBorderRadiusMobile.right}${buttonIconBorderRadiusUnits.Mobile} ${buttonIconBorderRadiusMobile.bottom}${buttonIconBorderRadiusUnits.Mobile} ${buttonIconBorderRadiusMobile.left}${buttonIconBorderRadiusUnits.Mobile}`;
    /** End Border Radius */


    /** Start padding */
    const handlePaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( buttonPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        buttonDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        buttonTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        buttonMobilePadding: {
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
                    setAttributes( {buttonDesktopPadding: {...buttonDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {buttonTabPadding: {...buttonTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {buttonMobilePadding: {...buttonMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

	const handlePaddingCombineBtn = () => {
		setAttributes( {buttonPaddingLink: !buttonPaddingLink} );
	}

	const handlePaddingUnitsHandler = (unit) => {
		setAttributes( {
			buttonPaddingUnits: {
				...buttonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** end padding */


	/** Default padding for each device */
	const buttonDesktopPaddingStr = `${buttonDesktopPadding.top}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.right}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.bottom}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.left}${buttonPaddingUnits.Desktop}`;
	const buttonTabletPaddingStr = `${buttonTabPadding.top}${buttonPaddingUnits.Tablet} ${buttonTabPadding.right}${buttonPaddingUnits.Tablet} ${buttonTabPadding.bottom}${buttonPaddingUnits.Tablet} ${buttonTabPadding.left}${buttonPaddingUnits.Tablet}`;
	const buttonMobilePaddingStr = `${buttonMobilePadding.top}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.right}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.bottom}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.left}${buttonPaddingUnits.Mobile}`;
	/** End Padding */

	/** Start Margin */
	const handleMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ buttonDesktopMargin: { ...buttonDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonTabMargin: { ...buttonTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonMobileMargin: { ...buttonMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handleMarginCombineBtn = () => {
		setAttributes({ buttonMarginLink: !buttonMarginLink });
	}

	const handleMarginUnitsHandler = (unit) => {
		setAttributes({
			buttonMarginUnits: {
				...buttonMarginUnits,
				[deviceType]: unit
			}
		});
	}

	/** Default margin for each device */
	const buttonDesktopMarginStr = `${buttonDesktopMargin.top}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.right}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.bottom}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.left}${buttonMarginUnits.Desktop}`;
	const buttonTabletMarginStr = `${buttonTabMargin.top}${buttonMarginUnits.Tablet} ${buttonTabMargin.right}${buttonMarginUnits.Tablet} ${buttonTabMargin.bottom}${buttonMarginUnits.Tablet} ${buttonTabMargin.left}${buttonMarginUnits.Tablet}`;
	const buttonMobileMarginStr = `${buttonMobileMargin.top}${buttonMarginUnits.Mobile} ${buttonMobileMargin.right}${buttonMarginUnits.Mobile} ${buttonMobileMargin.bottom}${buttonMarginUnits.Mobile} ${buttonMobileMargin.left}${buttonMarginUnits.Mobile}`;
	/** End margin */

	/** Start border width */
	const handleBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (buttonBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopBorderWidth: {
							...buttonDesktopBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabBorderWidth: {
							...buttonTabBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileBorderWidth: {
							...buttonMobileBorderWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleBorderLinkToggle = () => {
		setAttributes({ buttonBorderLink: !buttonBorderLink });
	};

	const handleBorderUnitsChange = (unit) => {
		setAttributes({
			buttonBorderUnits: {
				...buttonBorderUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border width */

	/** Default border width for different devices */
	const buttonDesktopBorderWidthStr = `${buttonDesktopBorderWidth.top}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.right}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.bottom}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.left}${buttonBorderUnits.Desktop}`;
	const buttonTabletBorderWidthStr = `${buttonTabBorderWidth.top}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.right}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.bottom}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.left}${buttonBorderUnits.Tablet}`;
	const buttonMobileBorderWidthStr = `${buttonMobileBorderWidth.top}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.right}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.bottom}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.left}${buttonBorderUnits.Mobile}`;
	/** End border width */

	/** Start border radius */
	const handleBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (buttonBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopBorderRadiusWidth: {
							...buttonDesktopBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabBorderRadiusWidth: {
							...buttonTabBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileBorderRadiusWidth: {
							...buttonMobileBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleBorderRadiusLinkToggle = () => {
		setAttributes({ buttonBorderRadiusLink: !buttonBorderRadiusLink });
	};

	const handleBorderRadiusUnitsChange = (unit) => {
		setAttributes({
			buttonBorderRadiusUnits: {
				...buttonBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border radius */

	/** Default border radius for different devices */
	const buttonDesktopBorderRadiusStr = `${buttonDesktopBorderRadiusWidth.top}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.right}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.left}${buttonBorderRadiusUnits.Desktop}`;
	const buttonTabletBorderRadiusStr = `${buttonTabBorderRadiusWidth.top}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.right}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.left}${buttonBorderRadiusUnits.Tablet}`;
	const buttonMobileBorderRadiusStr = `${buttonMobileBorderRadiusWidth.top}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.right}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.left}${buttonBorderRadiusUnits.Mobile}`;
	/** End Border Radius */


	/** Start Global padding */
	const handleGlobalPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonGlobalPaddingMobile: {
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
					setAttributes( {buttonGlobalPaddingDesktop: {...buttonGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonGlobalPaddingTablet: {...buttonGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonGlobalPaddingMobile: {...buttonGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes( {buttonGlobalPaddingLink: !buttonGlobalPaddingLink} );
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			buttonGlobalPaddingUnits: {
				...buttonGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPadding    = `${buttonGlobalPaddingDesktop.top}${buttonGlobalPaddingUnits.Desktop} ${buttonGlobalPaddingDesktop.right}${buttonGlobalPaddingUnits.Desktop} ${buttonGlobalPaddingDesktop.bottom}${buttonGlobalPaddingUnits.Desktop} ${buttonGlobalPaddingDesktop.left}${buttonGlobalPaddingUnits.Desktop}`;
	const globalTabletPadding     = `${buttonGlobalPaddingTablet.top}${buttonGlobalPaddingUnits.Tablet} ${buttonGlobalPaddingTablet.right}${buttonGlobalPaddingUnits.Tablet} ${buttonGlobalPaddingTablet.bottom}${buttonGlobalPaddingUnits.Tablet} ${buttonGlobalPaddingTablet.left}${buttonGlobalPaddingUnits.Tablet}`;
	const globalMobilePadding     = `${buttonGlobalPaddingMobile.top}${buttonGlobalPaddingUnits.Mobile} ${buttonGlobalPaddingMobile.right}${buttonGlobalPaddingUnits.Mobile} ${buttonGlobalPaddingMobile.bottom}${buttonGlobalPaddingUnits.Mobile} ${buttonGlobalPaddingMobile.left}${buttonGlobalPaddingUnits.Mobile}`;
	/** End Global Padding */
	
	/** Start Global Margin */
	const handleGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonGlobalMarginMobile: {
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
					setAttributes( {buttonGlobalMarginDesktop: {...buttonGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonGlobalMarginTablet: {...buttonGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonGlobalMarginMobile: {...buttonGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes( {buttonGlobalMarginLink: !buttonGlobalMarginLink} );
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
			buttonGlobalMarginUnits: {
				...buttonGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const globalDesktopMargin = `${buttonGlobalMarginDesktop.top}${buttonGlobalMarginUnits.Desktop} ${buttonGlobalMarginDesktop.right}${buttonGlobalMarginUnits.Desktop} ${buttonGlobalMarginDesktop.bottom}${buttonGlobalMarginUnits.Desktop} ${buttonGlobalMarginDesktop.left}${buttonGlobalMarginUnits.Desktop}`;
	const globalTabletMargin = `${buttonGlobalMarginTablet.top}${buttonGlobalMarginUnits.Tablet} ${buttonGlobalMarginTablet.right}${buttonGlobalMarginUnits.Tablet} ${buttonGlobalMarginTablet.bottom}${buttonGlobalMarginUnits.Tablet} ${buttonGlobalMarginTablet.left}${buttonGlobalMarginUnits.Tablet}`;
	const globalMobileMargin = `${buttonGlobalMarginMobile.top}${buttonGlobalMarginUnits.Mobile} ${buttonGlobalMarginMobile.right}${buttonGlobalMarginUnits.Mobile} ${buttonGlobalMarginMobile.bottom}${buttonGlobalMarginUnits.Mobile} ${buttonGlobalMarginMobile.left}${buttonGlobalMarginUnits.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonGlobalBorderMobile: {
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
					setAttributes( {buttonGlobalBorderDesktop: {...buttonGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonGlobalBorderTablet: {...buttonGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonGlobalBorderMobile: {...buttonGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {buttonGlobalBorderLink: !buttonGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			buttonGlobalBorderUnits: {
				...buttonGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${buttonGlobalBorderDesktop.top}${buttonGlobalBorderUnits.Desktop} ${buttonGlobalBorderDesktop.right}${buttonGlobalBorderUnits.Desktop} ${buttonGlobalBorderDesktop.bottom}${buttonGlobalBorderUnits.Desktop} ${buttonGlobalBorderDesktop.left}${buttonGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${buttonGlobalBorderTablet.top}${buttonGlobalBorderUnits.Tablet} ${buttonGlobalBorderTablet.right}${buttonGlobalBorderUnits.Tablet} ${buttonGlobalBorderTablet.bottom}${buttonGlobalBorderUnits.Tablet} ${buttonGlobalBorderTablet.left}${buttonGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${buttonGlobalBorderMobile.top}${buttonGlobalBorderUnits.Mobile} ${buttonGlobalBorderMobile.right}${buttonGlobalBorderUnits.Mobile} ${buttonGlobalBorderMobile.bottom}${buttonGlobalBorderUnits.Mobile} ${buttonGlobalBorderMobile.left}${buttonGlobalBorderUnits.Mobile}`;
	/** End Border */


	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonGlobalBorderRadiusMobile: {
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
					setAttributes( {buttonGlobalBorderRadiusDesktop: {...buttonGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonGlobalBorderRadiusTablet: {...buttonGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonGlobalBorderRadiusMobile: {...buttonGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {buttonGlobalBorderRadiusLink: !buttonGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			buttonGlobalBorderRadiusUnits: {
				...buttonGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${buttonGlobalBorderRadiusDesktop.top}${buttonGlobalBorderRadiusUnits.Desktop} ${buttonGlobalBorderRadiusDesktop.right}${buttonGlobalBorderRadiusUnits.Desktop} ${buttonGlobalBorderRadiusDesktop.bottom}${buttonGlobalBorderRadiusUnits.Desktop} ${buttonGlobalBorderRadiusDesktop.left}${buttonGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${buttonGlobalBorderRadiusTablet.top}${buttonGlobalBorderRadiusUnits.Tablet} ${buttonGlobalBorderRadiusTablet.right}${buttonGlobalBorderRadiusUnits.Tablet} ${buttonGlobalBorderRadiusTablet.bottom}${buttonGlobalBorderRadiusUnits.Tablet} ${buttonGlobalBorderRadiusTablet.left}${buttonGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${buttonGlobalBorderRadiusMobile.top}${buttonGlobalBorderRadiusUnits.Mobile} ${buttonGlobalBorderRadiusMobile.right}${buttonGlobalBorderRadiusUnits.Mobile} ${buttonGlobalBorderRadiusMobile.bottom}${buttonGlobalBorderRadiusUnits.Mobile} ${buttonGlobalBorderRadiusMobile.left}${buttonGlobalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */    



	/* set default values for the style attributes */
	useEffect(() => {
		if (buttonFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${buttonFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [buttonFontFamily]);

	const iconHandler = (IconName) => {
		setAttributes({buttonIcon: IconName})

	}



	const allBlockStyle = useMemo(() => `
				.${blockId}.fb-advanced-button-wrapper {
                    ${buttonGlobalZIndex ? `z-index: ${buttonGlobalZIndex};` : ''}
                    ${buttonGlobalBgColor ? `background-color: ${buttonGlobalBgColor};` : ''} 
                    ${globalDesktopPadding ? `padding: ${globalDesktopPadding};` : ''}
                    ${globalDesktopMargin ? `margin: ${globalDesktopMargin};` : ''} 
                    ${buttonGlobalBorder ? `border: ${buttonGlobalBorder};` : ''} 
                    ${globalDesktopBorderWidth ? `border-width: ${globalDesktopBorderWidth};` : ''}
                    ${globalDesktopBorderRadiusWidth ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
                    ${buttonGlobalBorderColor ? `border-color: ${buttonGlobalBorderColor};` : ''}
                    ${buttonGlobalBoxShadowCssValue ? `box-shadow: ${buttonGlobalBoxShadowCssValue};` : ''}
                    transition: all .3s ease-in-out;
                    position: relative;
                }
                .${blockId}.fb-advanced-button-wrapper:hover {
                    ${buttonGlobalBgHoverColor ? `background-color: ${buttonGlobalBgHoverColor};` : ''}
                    ${buttonGlobalBorderHoverColor ? `border-color: ${buttonGlobalBorderHoverColor};` : ''}
                }
                .${blockId}.fb-advanced-button-wrapper .fb-advanced-button {
                    ${buttonBgColor ? `background-color: ${buttonBgColor};` : ''}
                    ${buttonFontFamily ? `font-family: ${buttonFontFamily};` : ''}
                    ${buttonFontSize.Desktop && buttonFontSizeUnits.Desktop ? `font-size: ${buttonFontSize.Desktop}${buttonFontSizeUnits.Desktop};` : ''}
                    ${buttonFontWeight ? `font-weight: ${buttonFontWeight};` : ''}
                    ${buttonFontStyle ? `font-style: ${buttonFontStyle};` : ''}
                    ${buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ''}
                    ${buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ''}
                    ${buttonLetterSpacing.Desktop && buttonLetterSpacingUnits.Desktop ? `letter-spacing: ${buttonLetterSpacing.Desktop}${buttonLetterSpacingUnits.Desktop};` : ''}
                    ${buttonLineHeight.Desktop && buttonLineHeightUnits.Desktop ? `line-height: ${buttonLineHeight.Desktop}${buttonLineHeightUnits.Desktop};` : ''}
                    ${buttonDesktopPaddingStr ? `padding: ${buttonDesktopPaddingStr};` : ''}
                    ${buttonDesktopMarginStr ? `margin: ${buttonDesktopMarginStr};` : ''}
                    ${buttonBorder ? `border: ${buttonBorder};` : ''}
                    ${buttonDesktopBorderWidthStr ? `border-width: ${buttonDesktopBorderWidthStr};` : ''}
                    ${buttonDesktopBorderRadiusStr ? `border-radius: ${buttonDesktopBorderRadiusStr};` : ''}
                    ${buttonBorderColor ? `border-color: ${buttonBorderColor};` : ''}
                    ${buttonBoxShadowCssValue ? `box-shadow: ${buttonBoxShadowCssValue};` : ''} 
                    ${buttonWidth.Desktop && buttonWidthUnits.Desktop ? `width: ${buttonWidth.Desktop}${buttonWidthUnits.Desktop};` : ''}
                    display: ${buttonAlignment === 'justify' ? 'flex' : 'inline-flex'};
                    transition: all 0.3s ease;
                }

                .${blockId}.fb-advanced-button-wrapper .fb-advanced-button:hover {
                    ${buttonBorderHoverColor ? `border-color: ${buttonBorderHoverColor};` : ''}
                    ${buttonBgHoverColor !== undefined ? `background-color: ${buttonBgHoverColor};` : ''}
                }

                .${blockId}.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-text {
                    ${buttonColor !== undefined ? `color: ${buttonColor};` : ''}
                }
                .${blockId}.fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-text {
                    ${buttonHoverColor !== undefined ? `color: ${buttonHoverColor};` : ''}
                }
				
				.${blockId}.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper {
					${buttonIconPosition === 'left' ? `margin-right: ${buttonIconGapSize.Desktop}${buttonIconGapUnits.Desktop};` : ''}
					${buttonIconPosition === 'right' ? `margin-left: ${buttonIconGapSize.Desktop}${buttonIconGapUnits.Desktop};` : ''}
					${buttonIconBgColor ? `background-color: ${buttonIconBgColor};` : ''}
					${buttonIconBorder ? `border: ${buttonIconBorder};` : ''}
					${buttonIconBorderColor ? `border-color: ${buttonIconBorderColor};` : ''}
					${buttonIconBorderDesktopWidth ? `border-width: ${buttonIconBorderDesktopWidth};` : ''}
					${buttonIconBorderRadiusDesktopWidth ? `border-radius: ${buttonIconBorderRadiusDesktopWidth};` : ''}
				}
				.${blockId}.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper:hover {
					${buttonIconBgHoverColor ? `background-color: ${buttonIconBgHoverColor};` : ''}
					${buttonIconBorderHoverColor ? `border-color: ${buttonIconBorderHoverColor};` : ''}
				}
				.${blockId}.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper svg {
					${buttonIconSize.Desktop && buttonIconSizeUnits.Desktop ? `width: ${buttonIconSize.Desktop}${buttonIconSizeUnits.Desktop};` : ''}
					${buttonIconSize.Desktop && buttonIconSizeUnits.Desktop ? `height: ${buttonIconSize.Desktop}${buttonIconSizeUnits.Desktop};` : ''}
					${buttonIconColor ? `fill: ${buttonIconColor};` : ''}
				}

                @media only screen and (max-width: 1024px) {
                    .${blockId}.fb-advanced-button-wrapper {
                        ${globalTabletPadding ? `padding: ${globalTabletPadding};` : ''}
                        ${globalTabletMargin ? `margin: ${globalTabletMargin};` : ''}
                        ${globalTabletBorderWidth ? `border-width: ${globalTabletBorderWidth};` : ''}
                        ${globalTabletBorderRadiusWidth ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
                    }
                    .${blockId}.fb-advanced-button-wrapper .fb-advanced-button {
                        ${buttonTabletPaddingStr ? `padding: ${buttonTabletPaddingStr};` : ''}
                        ${buttonTabletMarginStr ? `margin: ${buttonTabletMarginStr};` : ''}
                        ${buttonBorder ? `border: ${buttonBorder};` : ''}
                        ${buttonTabletBorderWidthStr ? `border-width: ${buttonTabletBorderWidthStr};` : ''}
                        ${buttonTabletBorderRadiusStr ? `border-radius: ${buttonTabletBorderRadiusStr};` : ''}
                        ${buttonWidth.Tablet && buttonWidthUnits.Tablet ? `width: ${buttonWidth.Tablet}${buttonWidthUnits.Tablet};` : ''}
                        ${buttonFontSize.Tablet && buttonFontSizeUnits.Tablet ? `font-size: ${buttonFontSize.Tablet}${buttonFontSizeUnits.Tablet};` : ''}
                        ${buttonLetterSpacing.Tablet && buttonLetterSpacingUnits.Tablet ? `letter-spacing: ${buttonLetterSpacing.Tablet}${buttonLetterSpacingUnits.Tablet};` : ''}
                        ${buttonLineHeight.Tablet && buttonLineHeightUnits.Tablet ? `line-height: ${buttonLineHeight.Tablet}${buttonLineHeightUnits.Tablet};` : ''}
                    }
                    .${blockId}.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper {
                        ${buttonIconPosition === 'left' ? `margin-right: ${buttonIconGapSize.Tablet}${buttonIconGapUnits.Tablet};` : ''}
                        ${buttonIconPosition === 'right' ? `margin-left: ${buttonIconGapSize.Tablet}${buttonIconGapUnits.Tablet};` : ''}
                        ${buttonIconBorderTabletWidth ? `border-width: ${buttonIconBorderTabletWidth};` : ''}
                        ${buttonIconBorderRadiusTabletWidth ? `border-radius: ${buttonIconBorderRadiusTabletWidth};` : ''}
                    }
                    .${blockId}.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper svg {
                        ${buttonIconSize.Tablet && buttonIconSizeUnits.Tablet ? `width: ${buttonIconSize.Tablet}${buttonIconSizeUnits.Tablet};` : ''}
                        ${buttonIconSize.Tablet && buttonIconSizeUnits.Tablet ? `height: ${buttonIconSize.Tablet}${buttonIconSizeUnits.Tablet};` : ''}
                    }
                }

                @media only screen and (max-width: 767px) {
                    .${blockId}.fb-advanced-button-wrapper {
                        ${globalMobilePadding ? `padding: ${globalMobilePadding};` : ''}
                        ${globalMobileMargin ? `margin: ${globalMobileMargin};` : ''}
                        ${globalMobileBorderWidth ? `border-width: ${globalMobileBorderWidth};` : ''}
                        ${globalMobileBorderRadiusWidth ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
                    }
                    .${blockId}.fb-advanced-button-wrapper .fb-advanced-button {
                        ${buttonMobilePaddingStr ? `padding: ${buttonMobilePaddingStr};` : ''}
                        ${buttonMobileMarginStr ? `margin: ${buttonMobileMarginStr};` : ''}
                        ${buttonBorder ? `border: ${buttonBorder};` : ''}
                        ${buttonMobileBorderWidthStr ? `border-width: ${buttonMobileBorderWidthStr};` : ''}
                        ${buttonMobileBorderRadiusStr ? `border-radius: ${buttonMobileBorderRadiusStr};` : ''}
                        ${buttonWidth.Mobile && buttonWidthUnits.Mobile ? `width: ${buttonWidth.Mobile}${buttonWidthUnits.Mobile};` : ''}
                        ${buttonFontSize.Mobile && buttonFontSizeUnits.Mobile ? `font-size: ${buttonFontSize.Mobile}${buttonFontSizeUnits.Mobile};` : ''}
                        ${buttonLetterSpacing.Mobile && buttonLetterSpacingUnits.Mobile ? `letter-spacing: ${buttonLetterSpacing.Mobile}${buttonLetterSpacingUnits.Mobile};` : ''}
                        ${buttonLineHeight.Mobile && buttonLineHeightUnits.Mobile ? `line-height: ${buttonLineHeight.Mobile}${buttonLineHeightUnits.Mobile};` : ''}
                    }
                    .${blockId}.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper {
                        ${buttonIconPosition === 'left' ? `margin-right: ${buttonIconGapSize.Mobile}${buttonIconGapUnits.Mobile};` : ''}
                        ${buttonIconPosition === 'right' ? `margin-left: ${buttonIconGapSize.Mobile}${buttonIconGapUnits.Mobile};` : ''}
                        ${buttonIconBorderMobileWidth ? `border-width: ${buttonIconBorderMobileWidth};` : ''}
                        ${buttonIconBorderRadiusMobileWidth ? `border-radius: ${buttonIconBorderRadiusMobileWidth};` : ''}
                    }
                    .${blockId}.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper svg {
                        ${buttonIconSize.Mobile && buttonIconSizeUnits.Mobile ? `width: ${buttonIconSize.Mobile}${buttonIconSizeUnits.Mobile};` : ''}
                        ${buttonIconSize.Mobile && buttonIconSizeUnits.Mobile ? `height: ${buttonIconSize.Mobile}${buttonIconSizeUnits.Mobile};` : ''}
                    }
                }
	`, [
		blockId,
		buttonGlobalZIndex,
		buttonGlobalBgColor,
		globalDesktopPadding,
		globalDesktopMargin,
		buttonGlobalBorder,
		globalDesktopBorderWidth,
		globalDesktopBorderRadiusWidth,
		buttonGlobalBorderColor,
		buttonGlobalBoxShadowCssValue,
		buttonGlobalBgHoverColor,
		buttonGlobalBorderHoverColor,
		buttonBgColor,
		buttonFontFamily,
		buttonFontSize,
		buttonFontSizeUnits,
		buttonFontWeight,
		buttonFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonLetterSpacing,
		buttonLetterSpacingUnits,
		buttonLineHeight,
		buttonLineHeightUnits,
		buttonDesktopPaddingStr,
		buttonDesktopMarginStr,
		buttonBorder,
		buttonDesktopBorderWidthStr,
		buttonDesktopBorderRadiusStr,
		buttonBorderColor,
		buttonBoxShadowCssValue,
		buttonWidth,
		buttonWidthUnits,
		buttonAlignment,
		buttonHoverColor,
		buttonIconPosition,
		buttonIconGapSize,
		buttonIconGapUnits,
		buttonIconBgColor,
		buttonIconBorder,
		buttonIconBorderColor,
		buttonIconBorderDesktopWidth,
		buttonIconBorderRadiusDesktopWidth,
		buttonIconBgHoverColor,
		buttonIconBorderHoverColor,
		buttonIconSize,
		buttonIconSizeUnits,
		buttonIconColor,
		globalTabletPadding,
		globalTabletMargin,
		globalTabletBorderWidth,
		globalTabletBorderRadiusWidth,
		buttonTabletPaddingStr,
		buttonTabletMarginStr,
		buttonTabletBorderWidthStr,
		buttonTabletBorderRadiusStr,
		buttonIconBorderTabletWidth,
		buttonIconBorderRadiusTabletWidth,
		globalMobilePadding,
		globalMobileMargin,
		globalMobileBorderWidth,
		globalMobileBorderRadiusWidth,
		buttonMobilePaddingStr,
		buttonMobileMarginStr,
		buttonMobileBorderWidthStr,
		buttonMobileBorderRadiusStr,
		buttonIconBorderMobileWidth,
		buttonIconBorderRadiusMobileWidth,
	]);

	useEffect(() => {
		setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
	}, [allBlockStyle]);

	return (
		<>
			<style>
				{blockStyle}
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
								className: "fb-tab advanced",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === 'general' && (
									<>
										<div className="fb-advanced-button-wrapper">
											<PanelBody
												title={__("Button", "frontis-blocks")}
												initialOpen={true}
											>
												<BaseControl
													label={__("Alignment", "frontis-blocks")}
													id="fb-setting-text-alignment"
													className="fb-setting-text-alignment"
												>
													<ButtonGroup
														className="fb-setting-text-alignment-group-btn"
													>
														{TEXT_ALIGN.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({ buttonAlignment: item.value })}
																className={`fb-setting-text-alignment-single-btn ${buttonAlignment === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>

                                                <TextControl
                                                    label={__("Text", "frontis-blocks")}
                                                    value={buttonText}
                                                    onChange={(value) => setAttributes({ buttonText: value })}
                                                    className="fb-advanced-button-text"
                                                />
                                                <div className='fb-advanced-btn-icon-wrapper'>
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
                                                                    onClick={() => setAttributes({ buttonIconAlign: item.value })}
                                                                    className={`fb-setting-text-alignment-single-btn ${buttonIconAlign === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                        {(buttonIconAlign === 'icon-text' || buttonIconAlign === 'icon-only') && (
                                                            <FBIconPicker value={buttonIcon} setIconHandler={iconHandler} /> 
                                                        )}
                                                    </BaseControl>
                                                </div>
                                                <FB_UrlControl
                                                    url={buttonUrl}
                                                    onChangeUrl={(value) => setAttributes({ buttonUrl: value })}
                                                    openInNewTab={buttonTargetUrl}
                                                    onChangeOpenInNewTab={(value) => setAttributes({ buttonTargetUrl: value })}
                                                />
                                            </PanelBody>
                                        </div>
                                    </>
                                )}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Text Styles", "frontis-blocks")}
											initialOpen={true}
										>
											<FB_Range
												min={1}
												max={100}
												label={__("Width", "frontis-blocks")}
												rangeValue={buttonWidth}
												onChangeHandler={(value) => setAttributes({ buttonWidth: value })}
												rangeUnitHandler={(value) => setAttributes({ buttonWidthUnits: value })}
												deviceType={deviceType}
												units={buttonWidthUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
											/>

											<FB_TypographyControl
												fontFamily={buttonFontFamily}
												onChangeFontFamily={(value) => setAttributes({ buttonFontFamily: value })}

												fontSize={buttonFontSize}
												onChangeFontSize={(value) => setAttributes({ buttonFontSize: value })}

												fontSizeUnits={buttonFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ buttonFontSizeUnits: value })}

												fontWeight={buttonFontWeight}
												onChangeFontWeight={(value) => setAttributes({ buttonFontWeight: value })}

												fontStyle={buttonFontStyle}
												onChangeFontStyle={(value) => setAttributes({ buttonFontStyle: value })}

												textTransform={buttonTextTransform}
												onChangeTextTransform={(value) => setAttributes({ buttonTextTransform: value })}

												textDecoration={buttonTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ buttonTextDecoration: value })}

												letterSpacing={buttonLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ buttonLetterSpacing: value })}

												letterSpacingUnits={buttonLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ buttonLetterSpacingUnits: value })}

												lineHeight={buttonLineHeight}
												onChangeLineHeight={(value) => setAttributes({ buttonLineHeight: value })}

												lineHeightUnits={buttonLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ buttonLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											<FB_Color
												label={__("Color", "frontis-blocks")}
												globalColorSwitcher={buttonColorSwitcher}
												globalColor={buttonColor}
												globalHoverColor={buttonHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ buttonColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ buttonColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ buttonHoverColor: value })}
											/>

											<FB_Color
												label={__("Background Color", "frontis-blocks")}
												globalColorSwitcher={buttonBgColorSwitcher}
												globalColor={buttonBgColor}
												globalHoverColor={buttonBgHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ buttonBgColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ buttonBgColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ buttonBgHoverColor: value })}
											/>

                                        </PanelBody>
                                        <PanelBody title="Padding and Margin" initialOpen={false}>
                                            <FB_Spacing
                                                label={__("Padding", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handlePaddingUnitsHandler}
                                                spacingUnits={buttonPaddingUnits}
                                                spacingDesktop={buttonDesktopPadding}
                                                spacingTablet={buttonTabPadding}
                                                spacingMobile={buttonMobilePadding}
                                                handleSpacingUnitHandler={handlePaddingUnitChange}
                                                spacingCombineBtn={buttonPaddingLink}
                                                spacingCombineBtnHandler={handlePaddingCombineBtn}
                                                setAttributes={setAttributes}
                                            />
                                            <FB_Spacing
                                                label={__("Margin", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleMarginUnitsHandler}
                                                spacingUnits={buttonMarginUnits}
                                                spacingDesktop={buttonDesktopMargin}
                                                spacingTablet={buttonTabMargin}
                                                spacingMobile={buttonMobileMargin}
                                                handleSpacingUnitHandler={handleMarginUnitChange}
                                                spacingCombineBtn={buttonMarginLink}
                                                spacingCombineBtnHandler={handleMarginCombineBtn}
                                                setAttributes={setAttributes}
                                            />
                                        </PanelBody>
                                        <PanelBody
                                            title={__("Border and Shadow", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-border-setting-wrapper"
                                            >
                                                <SelectControl
                                                    label={__("Border Style", "frontis-blocks")}
                                                    value={buttonBorder}
                                                    options={BORDER_STYLES}
                                                    onChange={(value) => setAttributes({ buttonBorder: value })}
                                                />

                                                <FB_Color
                                                    label={__("Border Color", "frontis-blocks")}
                                                    globalColorSwitcher={buttonBorderColorSwitcher}
                                                    globalColor={buttonBorderColor}
                                                    globalHoverColor={buttonBorderHoverColor}
                                                    handleColorSwitcherChange={(value) => setAttributes({ buttonBorderColorSwitcher: value })}
                                                    handleGlobalColorChange={(value) => setAttributes({ buttonBorderColor: value })}
                                                    handleGlobalHoverColorChange={(value) => setAttributes({ buttonBorderHoverColor: value })}
                                                />
                                                <FB_Spacing
                                                    label={__("Border", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleBorderUnitsChange}
                                                    spacingUnits={buttonBorderUnits}
                                                    spacingDesktop={buttonDesktopBorderWidth}
                                                    spacingTablet={buttonTabBorderWidth}
                                                    spacingMobile={buttonMobileBorderWidth}
                                                    handleSpacingUnitHandler={handleBorderWidthChange}
                                                    spacingCombineBtn={buttonBorderLink}
                                                    spacingCombineBtnHandler={handleBorderLinkToggle}
                                                    setAttributes={setAttributes}
                                                />
                                                <FB_Spacing
                                                    label={__("Border Radius", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleBorderRadiusUnitsChange}
                                                    spacingUnits={buttonBorderRadiusUnits}
                                                    spacingDesktop={buttonDesktopBorderRadiusWidth}
                                                    spacingTablet={buttonTabBorderRadiusWidth}
                                                    spacingMobile={buttonMobileBorderRadiusWidth}
                                                    handleSpacingUnitHandler={handleBorderRadiusChange}
                                                    spacingCombineBtn={buttonBorderRadiusLink}
                                                    spacingCombineBtnHandler={handleBorderRadiusLinkToggle}
                                                    setAttributes={setAttributes}
                                                />
                                                <FB_BoxShadowControl
                                                    onBoxShadowChange={(value) => setAttributes({ buttonBoxShadowValues: value })}
                                                    initialShadowValue={buttonBoxShadowValues}
                                                    onBoxShadowStyleChange={(value) => setAttributes({ buttonBoxShadowCssValue: value })}
                                                />
                                        </PanelBody>

										{buttonIconAlign !== 'none' && (
											<PanelBody
												title={__("Icon Styles", "frontis-blocks")}
												initialOpen={false}
											>
												<SelectControl
													label={__("Icon Position", "frontis-blocks")}
													value={buttonIconPosition}
													options={ICON_POSITION}
													onChange={(value) => setAttributes({ buttonIconPosition: value })}
												/>
												<FB_Range
													min={1}
													max={100}
													label={__("Icon Size", "frontis-blocks")}
													rangeValue={buttonIconSize}
													onChangeHandler={(value) => setAttributes({ buttonIconSize: value })}
													rangeUnitHandler={(value) => setAttributes({ buttonIconSizeUnits: value })}
													deviceType={deviceType}
													units={buttonIconSizeUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={25}
												/>

												<FB_Color
													label={__("Icon Color", "frontis-blocks")}
													globalColorSwitcher={buttonIconColorSwitcher}
													globalColor={buttonIconColor}
													globalHoverColor={buttonIconHoverColor}
													handleColorSwitcherChange={(value) => setAttributes({ buttonIconColorSwitcher: value })}
													handleGlobalColorChange={(value) => setAttributes({ buttonIconColor: value })}
													handleGlobalHoverColorChange={(value) => setAttributes({ buttonIconHoverColor: value })}
												/>

												<FB_Color
													label={__("Background Color", "frontis-blocks")}
													globalColorSwitcher={buttonIconBgColorSwitcher}
													globalColor={buttonIconBgColor}
													globalHoverColor={buttonIconBgHoverColor}
													handleColorSwitcherChange={(value) => setAttributes({ buttonIconBgColorSwitcher: value })}
													handleGlobalColorChange={(value) => setAttributes({ buttonIconBgColor: value })}
													handleGlobalHoverColorChange={(value) => setAttributes({ buttonIconBgHoverColor: value })}
												/>
												<SelectControl
													label={__("Border Style", "frontis-blocks")}
													value={buttonIconBorder}
													options={BORDER_STYLES}
													onChange={(value) => setAttributes({ buttonIconBorder: value })}
												/>

												<FB_Color
													label={__("Border Color", "frontis-blocks")}
													globalColorSwitcher={buttonIconBorderColorSwitcher}
													globalColor={buttonIconBorderColor}
													globalHoverColor={buttonIconBorderHoverColor}
													handleColorSwitcherChange={(value) => setAttributes({ buttonIconBorderColorSwitcher: value })}
													handleGlobalColorChange={(value) => setAttributes({ buttonIconBorderColor: value })}
													handleGlobalHoverColorChange={(value) => setAttributes({ buttonIconBorderHoverColor: value })}
												/>

												<FB_Spacing 
													label={__("Border", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handlebuttonIconBorderUnitsHandler}
													spacingUnits={buttonIconBorderUnits}
													spacingDesktop={buttonIconBorderDesktop}
													spacingTablet={buttonIconBorderTablet}
													spacingMobile={buttonIconBorderMobile}
													handleSpacingUnitHandler={handlebuttonIconBorderUnitChange}
													spacingCombineBtn={buttonIconBorderLink}
													spacingCombineBtnHandler={handlebuttonIconBorderCombineBtn}
													setAttributes={setAttributes}
												/>
												<FB_Spacing 
													label={__("Radius Border", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handlebuttonIconBorderRadiusUnitsHandler}
													spacingUnits={buttonIconBorderRadiusUnits}
													spacingDesktop={buttonIconBorderRadiusDesktop}
													spacingTablet={buttonIconBorderRadiusTablet}
													spacingMobile={buttonIconBorderRadiusMobile}
													handleSpacingUnitHandler={handlebuttonIconBorderRadiusUnitChange}
													spacingCombineBtn={buttonIconBorderRadiusLink}
													spacingCombineBtnHandler={handlebuttonIconBorderRadiusCombineBtn}
													setAttributes={setAttributes}
												/>
												<FB_Range
													min={0}
													max={100}
													label={__("Icon Gap", "frontis-blocks")}
													rangeValue={buttonIconGapSize}
													onChangeHandler={(value) => setAttributes({ buttonIconGapSize: value })}
													rangeUnitHandler={(value) => setAttributes({ buttonIconGapUnits: value })}
													deviceType={deviceType}
													units={buttonIconGapUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={''}
												/>
											</PanelBody>
										)}
                                    </>
                                )}
                            {tab.name === "advanced" && (
                                    <>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-inner-wrapper">
												<PanelBody
													title={__("Z Index", "frontis-blocks")}
													initialOpen={true}
													className='fb-setting-z-index-header'
												>
													<RangeControl
														value={buttonGlobalZIndex}
														onChange={(value) => setAttributes({ buttonGlobalZIndex: value === 0 ? undefined : value })}
														min={0}
														max={10000000}
														step={1}
														allowReset
														resetFallbackValue={''}
													/>
												</PanelBody>

												<PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
													<FB_Spacing 
														label={__("Padding", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
														spacingUnits={buttonGlobalPaddingUnits}
														spacingDesktop={buttonGlobalPaddingDesktop}
														spacingTablet={buttonGlobalPaddingTablet}
														spacingMobile={buttonGlobalPaddingMobile}
														handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
														spacingCombineBtn={buttonGlobalPaddingLink}
														spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
														setAttributes={setAttributes}
													/>
													<FB_Spacing 
														label={__("Margin", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalMarginUnitsHandler}
														spacingUnits={buttonGlobalMarginUnits}
														spacingDesktop={buttonGlobalMarginDesktop}
														spacingTablet={buttonGlobalMarginTablet}
														spacingMobile={buttonGlobalMarginMobile}
														handleSpacingUnitHandler={handleGlobalMarginUnitChange}
														spacingCombineBtn={buttonGlobalMarginLink}
														spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
														setAttributes={setAttributes}
													/>
												</PanelBody>

												<PanelBody title="Background Color" initialOpen={false} >
													<FB_Color
														label={__("Background Color", "frontis-blocks")}
														globalColorSwitcher={buttonGlobalBgColorSwitcher}
														globalColor={buttonGlobalBgColor}
														globalHoverColor={buttonGlobalBgHoverColor}
														handleColorSwitcherChange={(value) => setAttributes({ buttonGlobalBgColorSwitcher: value })}
														handleGlobalColorChange={(value) => setAttributes({ buttonGlobalBgColor: value })}
														handleGlobalHoverColorChange={(value) => setAttributes({ buttonGlobalBgHoverColor: value })}
													/>
												</PanelBody>
												<PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

													<SelectControl
															label={__("Border Style", "frontis-blocks")}
															value={buttonGlobalBorder}
															options={BORDER_STYLES}
															onChange={(value) => setAttributes({ buttonGlobalBorder: value })}
													/>

													<FB_Color
														label={__("Border Color", "frontis-blocks")}
														globalColorSwitcher={buttonGlobalBorderColorSwitcher}
														globalColor={buttonGlobalBorderColor}
														globalHoverColor={buttonGlobalBorderHoverColor}
														handleColorSwitcherChange={(value) => setAttributes({ buttonGlobalBorderColorSwitcher: value })}
														handleGlobalColorChange={(value) => setAttributes({ buttonGlobalBorderColor: value })}
														handleGlobalHoverColorChange={(value) => setAttributes({ buttonGlobalBorderHoverColor: value })}
													/>

													<FB_Spacing 
														label={__("Border", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalBorderUnitsHandler}
														spacingUnits={buttonGlobalBorderUnits}
														spacingDesktop={buttonGlobalBorderDesktop}
														spacingTablet={buttonGlobalBorderTablet}
														spacingMobile={buttonGlobalBorderMobile}
														handleSpacingUnitHandler={handleGlobalBorderUnitChange}
														spacingCombineBtn={buttonGlobalBorderLink}
														spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
														setAttributes={setAttributes}
													/>

													<FB_Spacing 
														label={__("Border Radius", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
														spacingUnits={buttonGlobalBorderRadiusUnits}
														spacingDesktop={buttonGlobalBorderRadiusDesktop}
														spacingTablet={buttonGlobalBorderRadiusTablet}
														spacingMobile={buttonGlobalBorderRadiusMobile}
														handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
														spacingCombineBtn={buttonGlobalBorderRadiusLink}
														spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
														setAttributes={setAttributes}
													/>
													<FB_BoxShadowControl
														onBoxShadowChange={(value) => setAttributes({ buttonGlobalBoxShadowValues: value })}
														initialShadowValue={buttonGlobalBoxShadowValues}
														onBoxShadowStyleChange={(value) => setAttributes({ buttonGlobalBoxShadowCssValue: value })}
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
