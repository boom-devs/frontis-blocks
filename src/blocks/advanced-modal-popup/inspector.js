import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TabPanel,
    SelectControl,
    BaseControl,
    Button,
    ButtonGroup,
    ToggleControl,
    TextControl,
    TextareaControl,
    Dropdown
} from '@wordpress/components';
import Select2 from "react-select";
import { useEffect, useState, useMemo, memo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { store as editorStore } from '@wordpress/editor';
import {
    ANIMATION,
    MENU_TYPE,
    BORDER_STYLES,
    BACKGROUND_TYPES,
    OVERFLOW_OP,
    CONTENT_TYPES,
    TOGGLE_TYPES,
    ICON_POSITION,
    TOGGLE_BUTTON_ICON_ALIGN,
    TEXT_ALIGN_JUSTIFY,
} from "@Constants/fbConstants";
import FBIconPicker from "../../components/icon-picker";
import "./editor.scss";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_UrlControl from '@Components/url-control';
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_ImageControl from '@Components/image-control';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        selectedTemplate,
        position,
        toggleImageUrl,
        toggleImageAlt,
        toggleImageId,
        toggleButtonAlignment,
        toggleButtonWidth,
        toggleButtonWidthUnits,
        toggleButtonText,
        toggleButtonUrl,
        toggleButtonTargetUrl,
        toggleButtonIconAlign,
        toggleButtonIcon,
        toggleButtonIconPosition,
        toggleButtonTextSwitcher,

        toggleImageSize,
        toggleImageHeight,
        toggleImageSizeUnits,
        toggleImageHeightUnits,

        toggleButtonGlobalTypographyData,
        toggleButtonGlobalTypoSwitcher,
        toggleButtonGlobalTypoType,
        toggleButtonGlobalTypoOption,
        toggleButtonFontFamily,
        toggleButtonFontSize,
        toggleButtonFontSizeUnits,
        toggleButtonFontWeight,
        toggleButtonFontStyle,
        toggleButtonTextTransform,
        toggleButtonTextDecoration,
        toggleButtonLetterSpacing,
        toggleButtonLetterSpacingUnits,
        toggleButtonLineHeight,
        toggleButtonLineHeightUnits,

        toggleButtonColorSwitcher,
        toggleButtonColor,
        toggleButtonHoverColor,

        toggleButtonIconSize,
        toggleButtonIconSizeUnits,

        toggleButtonIconColorSwitcher,
        toggleButtonIconColor,
        toggleButtonIconHoverColor,
        
        modalCloseIconColorSwitcher,
        modalCloseIconColor,
        modalCloseIconHoverColor,

        toggleButtonIconGapSize,
        toggleButtonIconGapUnits,

        toggleButtonIconRotateSwitcher,
        toggleButtonIconRotate,
        toggleButtonIconRotateHover,
        toggleButtonImageRotateSwitcher,
        toggleButtonImageRotate,
        toggleButtonImageRotateHover,

        toggleButtonBgColorSwitcher,
        toggleButtonNormalBackgroundType,
        toggleButtonBgColor,
        toggleButtonNormalGradientColor,
        toggleButtonNormalCustomGradientSwitcher,
        toggleButtonNormalCustomGradientInputValue,
        toggleButtonHoverBackgroundType,
        toggleButtonBgHoverColor,
        toggleButtonHoverGradientColor,
        toggleButtonHoverCustomGradientSwitcher,
        toggleButtonHoverCustomGradientInputValue,

        toggleButtonDesktopPadding,
        toggleButtonPaddingUnits,
        toggleButtonTabPadding,
        toggleButtonMobilePadding,
        toggleButtonPaddingLink,

        toggleButtonDesktopMargin,
        toggleButtonMarginUnits,
        toggleButtonTabMargin,
        toggleButtonMobileMargin,
        toggleButtonMarginLink,

        toggleButtonBorder,
        toggleButtonBorderColorSwitcher,
        toggleButtonBorderColor,
        toggleButtonBorderHoverColor,
        toggleButtonBorderUnits,
        toggleButtonDesktopBorderWidth,
        toggleButtonTabBorderWidth,
        toggleButtonMobileBorderWidth,
        toggleButtonBorderLink,
        toggleButtonBorderRadiusUnits,
        toggleButtonDesktopBorderRadiusWidth,
        toggleButtonTabBorderRadiusWidth,
        toggleButtonMobileBorderRadiusWidth,
        toggleButtonBorderRadiusLink,

        toggleType,
        contentType,
        modalPopupPanelWidth,
        modalPopupPanelWidthUnits,
        modalPopupPanelHeight,
        modalPopupPanelHeightUnits,
        modalPopupCustomCSS,
        modalPopupPanelPaddingUnits,
        modalPopupPanelDesktopPadding,
        modalPopupPanelTabPadding,
        modalPopupPanelMobilePadding,
        modalPopupPanelPaddingLink,
        modalPopupPanelMarginUnits,
        modalPopupPanelDesktopMargin,
        modalPopupPanelTabMargin,
        modalPopupPanelMobileMargin,
        modalPopupPanelMarginLink,
        modalPopupPanelBorder,
        modalPopupPanelBorderColorSwitcher,
        modalPopupPanelBorderColor,
        modalPopupPanelBorderHoverColor,
        modalPopupPanelBorderUnits,
        modalPopupPanelDesktopBorderWidth,
        modalPopupPanelTabBorderWidth,
        modalPopupPanelMobileBorderWidth,
        modalPopupPanelBorderLink,
        modalPopupPanelBorderRadiusUnits,
        modalPopupPanelDesktopBorderRadiusWidth,
        modalPopupPanelTabBorderRadiusWidth,
        modalPopupPanelMobileBorderRadiusWidth,
        modalPopupPanelBorderRadiusLink,
        modalPopupPanelBoxShadowSwitcher,
        modalPopupPanelBoxShadowValues,
        modalPopupPanelBoxShadowCssValue,
        modalPopupPanelBoxShadowHoverValues,
        modalPopupPanelBoxShadowHoverCssValue,
        modalPopupPanelBgColorSwitcher,
        modalPopupPanelBgNormalBackgroundType,
        modalPopupPanelBgNormalClassicColor,
        modalPopupPanelBgNormalGradientColor,
        modalPopupPanelBgNormalCustomGradientSwitcher,
        modalPopupPanelBgNormalCustomGradientInputValue,
        modalPopupPanelBgNormalBackgroundImageUrl,
        modalPopupPanelBgNormalBackgroundImagePosition,
        modalPopupPanelBgNormalBackgroundImageAttachment,
        modalPopupPanelBgNormalBackgroundImageRepeat,
        modalPopupPanelBgNormalBackgroundImageSize,

        modalPopupPanelBgHoverBackgroundType,
        modalPopupPanelBgHoverClassicColor,
        modalPopupPanelBgHoverGradientColor,
        modalPopupPanelBgHoverCustomGradientSwitcher,
        modalPopupPanelBgHoverCustomGradientInputValue,
        modalPopupPanelBgHoverBackgroundImageUrl,
        modalPopupPanelBgHoverBackgroundImagePosition,
        modalPopupPanelBgHoverBackgroundImageAttachment,
        modalPopupPanelBgHoverBackgroundImageRepeat,
        modalPopupPanelBgHoverBackgroundImageSize,

        modalPopupGlobalZIndex,
        modalPopupOverflow,
        modalPopupPositionType,
        modalPopupHZOrientationType,
        modalPopupVROrientationType,
        modalPopupHZLeftOffset,
        modalPopupHZLeftOffsetUnits,
        modalPopupHZRightOffset,
        modalPopupHZRightOffsetUnits,
        modalPopupVRTopOffset,
        modalPopupVRTopOffsetUnits,
        modalPopupVRBottomOffset,
        modalPopupVRBottomOffsetUnits,

        modalPopupGlobalWraperID,
        modalPopupGlobalWraperClass,

        modalPopupGlobalPaddingUnits,
        modalPopupGlobalPaddingDesktop,
        modalPopupGlobalPaddingTablet,
        modalPopupGlobalPaddingMobile,
        modalPopupGlobalPaddingLink,

        modalPopupGlobalMarginUnits,
        modalPopupGlobalMarginDesktop,
        modalPopupGlobalMarginTablet,
        modalPopupGlobalMarginMobile,
        modalPopupGlobalMarginLink,

        modalPopupGlobalBgColorSwitcher,
        modalPopupGlobalBgNormalBackgroundType,
        modalPopupGlobalBgNormalClassicColor,
        modalPopupGlobalBgNormalGradientColor,
        modalPopupGlobalBgNormalCustomGradientSwitcher,
        modalPopupGlobalBgNormalCustomGradientInputValue,

        modalPopupGlobalBgNormalBackgroundImageUrl,
        modalPopupGlobalBgNormalBackgroundImageAlt,
        modalPopupGlobalBgNormalBackgroundImageID,
        modalPopupGlobalBgNormalBackgroundImagePosition,
        modalPopupGlobalBgNormalBackgroundImageAttachment,
        modalPopupGlobalBgNormalBackgroundImageRepeat,
        modalPopupGlobalBgNormalBackgroundImageSize,

        modalPopupGlobalBgHoverBackgroundType,
        modalPopupGlobalBgHoverClassicColor,
        modalPopupGlobalBgHoverGradientColor,
        modalPopupGlobalBgHoverCustomGradientSwitcher,
        modalPopupGlobalBgHoverCustomGradientInputValue,

        modalPopupGlobalBgHoverBackgroundImageUrl,
        modalPopupGlobalBgHoverBackgroundImagePosition,
        modalPopupGlobalBgHoverBackgroundImageAttachment,
        modalPopupGlobalBgHoverBackgroundImageRepeat,
        modalPopupGlobalBgHoverBackgroundImageSize,

        modalPopupGlobalBorder,
        modalPopupGlobalBorderColorSwitcher,
        modalPopupGlobalBorderColor,
        modalPopupGlobalBorderHoverColor,
        modalPopupGlobalBorderUnits,
        modalPopupGlobalBorderDesktop,
        modalPopupGlobalBorderTablet,
        modalPopupGlobalBorderMobile,
        modalPopupGlobalBorderLink,

        modalPopupGlobalBorderRadiusUnits,
        modalPopupGlobalBorderRadiusDesktop,
        modalPopupGlobalBorderRadiusTablet,
        modalPopupGlobalBorderRadiusMobile,
        modalPopupGlobalBorderRadiusLink,

        modalPopupGlobalBoxShadowSwitcher,
        modalPopupGlobalBoxShadowValues,
        modalPopupGlobalBoxShadowCssValue,
        modalPopupGlobalBoxShadowHoverValues,
        modalPopupGlobalBoxShadowHoverCssValue,

        modalPopupDesktopSwitcher,
        modalPopupTabletSwitcher,
        modalPopupMobileSwitcher,

        modalPopupOverlayBackgroundColorSwitcher,
        modalPopupOverlayBackgroundColor,
        modalPopupOverlayBackgroundHoverColor,
        modalPopupOverlayBackgroundGradientColor,
        modalPopupOverlayBackgroundHoverGradientColor,
        modalPopupOverlayBackgroundCustomGradientColorSwitcher,
        modalPopupOverlayBackgroundCustomGradientColor,
        modalPopupOverlayBackgroundHoverCustomGradientColorSwitcher,
        modalPopupOverlayBackgroundHoverCustomGradientColor,
        modalPopupOverlayBgColorType,
        modalPopupOverlayBgHoverColorType,
        modalPopupOverlayOpacity,
        modalPopupOverlayOpacityUnits,
        modalPopupOverlaySwitcher,
        modalCloseIconWidth,
        modalCloseIconWidthUnits,
        modalCloseIconHeight,
        modalCloseIconHeightUnits,
        modalCloseIconPositionTop,
        modalCloseIconPositionTopUnits,
        modalCloseIconPositionRight,
        modalCloseIconPositionRightUnits,
        pageLoadDelay,
        pageLoadCookieEnable,
        pageLoadCookieExpiry,
    } = attributes;

    const deviceType = useDeviceType();

    const [patterns, setPatterns] = useState([]);

    const patternData = useSelect(select => {
        const allPatterns = select(coreStore) ? select(coreStore).getBlockPatterns() || [] : [];

        let userPatterns = [];
        try {
            if (select('core')) {
                userPatterns = select('core').getEntityRecords('postType', 'wp_block') || [];
            }
        } catch (error) {
            console.log('Error getting user patterns:', error);
        }

        return { allPatterns, userPatterns };
    }, []);

    useEffect(() => {
        const patternOptions = [
            { value: '', label: __('Select a pattern', 'frontis-blocks') }
        ];
    
        if (patternData.allPatterns && patternData.allPatterns.length > 0) {
            patternOptions.push(
                { value: 'core-separator', label: __('--- Theme Patterns ---', 'frontis-blocks'), isDisabled: true },
                ...patternData.allPatterns.map(pattern => ({
                    value: pattern.name,
                    label: pattern.title
                }))
            );
        }
    
        if (patternData.userPatterns && patternData.userPatterns.length > 0) {
            patternOptions.push(
                { value: 'user-separator', label: __('--- User Patterns ---', 'frontis-blocks'), isDisabled: true },
                ...patternData.userPatterns.map(pattern => ({
                    value: 'user-' + pattern.id,
                    label: pattern.title && pattern.title.raw ? pattern.title.raw : `Pattern ${pattern.id}`
                }))
            );
        }
    
        setPatterns(patternOptions);
    }, [patternData]);

    const handlePatternChange = (selectedOption) => {
        const value = selectedOption?.value || '';
    
        // separator / empty select handle
        if (!value || value === 'core-separator' || value === 'user-separator') {
            setAttributes({
                selectedTemplate: '',
                patternContent: ''
            });
            return;
        }
    
        const content = getSelectedPatternContent(value);
    
        setAttributes({
            selectedTemplate: value,
            patternContent: content
        });
    };

    // Handle pattern selection
    const getSelectedPatternContent = (patternId) => {
        if (!patternId) return '';

        try {
            // Check if it's a user pattern
            if (patternId.startsWith('user-')) {
                const id = parseInt(patternId.replace('user-', ''), 10);
                const userPattern = patternData.userPatterns.find(p => p.id === id);
                if (!userPattern) {
                    console.warn(`User pattern with ID ${id} not found`);
                    return '';
                }
                return userPattern?.content?.raw || '';
            } else {
                // Core pattern
                const corePattern = patternData.allPatterns.find(p => p.name === patternId);
                if (!corePattern) {
                    console.warn(`Core pattern with name ${patternId} not found`);
                    return '';
                }
                return corePattern?.content || '';
            }
        } catch (error) {
            console.error('Error retrieving pattern content:', error);
            return '';
        }
    };

    const toggleButtonIconHandler = (IconName) => {
		setAttributes({toggleButtonIcon: IconName})
	}

    /** Start padding */
    const handleModalPopupPanelPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (modalPopupPanelPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        modalPopupPanelDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        modalPopupPanelTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        modalPopupPanelMobilePadding: {
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
                    setAttributes({ modalPopupPanelDesktopPadding: { ...modalPopupPanelDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ modalPopupPanelTabPadding: { ...modalPopupPanelTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ modalPopupPanelMobilePadding: { ...modalPopupPanelMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleModalPopupPanelPaddingCombineBtn = () => {
        setAttributes({ modalPopupPanelPaddingLink: !modalPopupPanelPaddingLink });
    }

    const handleModalPopupPanelPaddingUnitsHandler = (unit) => {
        setAttributes({
            modalPopupPanelPaddingUnits: {
                ...modalPopupPanelPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** end padding */

    /** Start Margin */
    const handleModalPopupPanelMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (modalPopupPanelMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        modalPopupPanelDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        modalPopupPanelTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        modalPopupPanelMobileMargin: {
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
                    setAttributes({ modalPopupPanelDesktopMargin: { ...modalPopupPanelDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ modalPopupPanelTabMargin: { ...modalPopupPanelTabMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ modalPopupPanelMobileMargin: { ...modalPopupPanelMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleModalPopupPanelMarginCombineBtn = () => {
        setAttributes({ modalPopupPanelMarginLink: !modalPopupPanelMarginLink });
    }

    const handleModalPopupPanelMarginUnitsHandler = (unit) => {
        setAttributes({
            modalPopupPanelMarginUnits: {
                ...modalPopupPanelMarginUnits,
                [deviceType]: unit
            } 
        });
    }
    /** End margin */

    /** Start border width */
    const handleModalPopupPanelBorderWidthChange = (event, position) => {
        const value = event.target.value;
        if (modalPopupPanelBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        modalPopupPanelDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        modalPopupPanelTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        modalPopupPanelMobileBorderWidth: {
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
                        modalPopupPanelDesktopBorderWidth: {
                            ...modalPopupPanelDesktopBorderWidth,
                            [position]: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        modalPopupPanelTabBorderWidth: {
                            ...modalPopupPanelTabBorderWidth,
                            [position]: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        modalPopupPanelMobileBorderWidth: {
                            ...modalPopupPanelMobileBorderWidth,
                            [position]: value
                        }
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleModalPopupPanelBorderLinkToggle = () => {
        setAttributes({ modalPopupPanelBorderLink: !modalPopupPanelBorderLink });
    };

    const handleModalPopupPanelBorderUnitsChange = (unit) => {
        setAttributes({
            modalPopupPanelBorderUnits: {
                ...modalPopupPanelBorderUnits,
                [deviceType]: unit
            }
        });
    };
    /** End border width */

    /** Start border radius */
    const handleModalPopupPanelBorderRadiusChange = (event, position) => {
        const value = event.target.value;
        if (modalPopupPanelBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        modalPopupPanelDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        modalPopupPanelTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        modalPopupPanelMobileBorderRadiusWidth: {
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
                        modalPopupPanelDesktopBorderRadiusWidth: {
                            ...modalPopupPanelDesktopBorderRadiusWidth,
                            [position]: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        modalPopupPanelTabBorderRadiusWidth: {
                            ...modalPopupPanelTabBorderRadiusWidth,
                            [position]: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        modalPopupPanelMobileBorderRadiusWidth: {
                            ...modalPopupPanelMobileBorderRadiusWidth,
                            [position]: value
                        }
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleModalPopupPanelBorderRadiusLinkToggle = () => {
        setAttributes({ modalPopupPanelBorderRadiusLink: !modalPopupPanelBorderRadiusLink });
    };

    const handleModalPopupPanelBorderRadiusUnitsChange = (unit) => {
        setAttributes({
            modalPopupPanelBorderRadiusUnits: {
                ...modalPopupPanelBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };
    /** End border radius */

    /** Start Toggle Button Padding */
	const handleToggleBtnPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (toggleButtonPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						toggleButtonDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						toggleButtonTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						toggleButtonMobilePadding: {
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
					setAttributes({ toggleButtonDesktopPadding: { ...toggleButtonDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ toggleButtonTabPadding: { ...toggleButtonTabPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ toggleButtonMobilePadding: { ...toggleButtonMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handleToggleBtnPaddingCombineBtn = () => {
		setAttributes({ toggleButtonPaddingLink: !toggleButtonPaddingLink });
	}

	const handleToggleBtnPaddingUnitsHandler = (unit) => {
		setAttributes({
			toggleButtonPaddingUnits: {
				...toggleButtonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Toggle Button padding */

    /** Start Toggle Button Margin */
	const handleToggleBtnMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (toggleButtonMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						toggleButtonDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						toggleButtonTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						toggleButtonMobileMargin: {
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
					setAttributes({ toggleButtonDesktopMargin: { ...toggleButtonDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ toggleButtonTabMargin: { ...toggleButtonTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ toggleButtonMobileMargin: { ...toggleButtonMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handleToggleBtnMarginCombineBtn = () => {
		setAttributes({ toggleButtonMarginLink: !toggleButtonMarginLink });
	}

	const handleToggleBtnMarginUnitsHandler = (unit) => {
		setAttributes({
			toggleButtonMarginUnits: {
				...toggleButtonMarginUnits,
				[deviceType]: unit
			}
		});
	}
    /** End Toggle Button Margin */

    /** Start Toggle Button border width */
	const handleToggleBtnBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (toggleButtonBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						toggleButtonDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						toggleButtonTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						toggleButtonMobileBorderWidth: {
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
						toggleButtonDesktopBorderWidth: {
							...toggleButtonDesktopBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						toggleButtonTabBorderWidth: {
							...toggleButtonTabBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						toggleButtonMobileBorderWidth: {
							...toggleButtonMobileBorderWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleToggleBtnBorderLinkToggle = () => {
		setAttributes({ toggleButtonBorderLink: !toggleButtonBorderLink });
	};

	const handleToggleBtnBorderUnitsChange = (unit) => {
		setAttributes({ 
			toggleButtonBorderUnits: {
				...toggleButtonBorderUnits,
				[deviceType]: unit
			}
		});
	};
	/** End Toggle Button border width */

	/** Start Toggle Button border radius */
	const handleToggleBtnBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (toggleButtonBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						toggleButtonDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						toggleButtonTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						toggleButtonMobileBorderRadiusWidth: {
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
						toggleButtonDesktopBorderRadiusWidth: {
							...toggleButtonDesktopBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						toggleButtonTabBorderRadiusWidth: {
							...toggleButtonTabBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						toggleButtonMobileBorderRadiusWidth: {
							...toggleButtonMobileBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleToggleBtnBorderRadiusLinkToggle = () => {
		setAttributes({ toggleButtonBorderRadiusLink: !toggleButtonBorderRadiusLink });
	};

	const handleToggleBtnBorderRadiusUnitsChange = (unit) => {
		setAttributes({
			toggleButtonBorderRadiusUnits: {
				...toggleButtonBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border radius */

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (modalPopupGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        modalPopupGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        modalPopupGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        modalPopupGlobalPaddingMobile: {
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
                    setAttributes({ modalPopupGlobalPaddingDesktop: { ...modalPopupGlobalPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ modalPopupGlobalPaddingTablet: { ...modalPopupGlobalPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ modalPopupGlobalPaddingMobile: { ...modalPopupGlobalPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ modalPopupGlobalPaddingLink: !modalPopupGlobalPaddingLink });
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            modalPopupGlobalPaddingUnits: {
                ...modalPopupGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (modalPopupGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        modalPopupGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        modalPopupGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        modalPopupGlobalMarginMobile: {
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
                    setAttributes({ modalPopupGlobalMarginDesktop: { ...modalPopupGlobalMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ modalPopupGlobalMarginTablet: { ...modalPopupGlobalMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ modalPopupGlobalMarginMobile: { ...modalPopupGlobalMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ modalPopupGlobalMarginLink: !modalPopupGlobalMarginLink });
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            modalPopupGlobalMarginUnits: {
                ...modalPopupGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (modalPopupGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        modalPopupGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        modalPopupGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        modalPopupGlobalBorderMobile: {
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
                    setAttributes({ modalPopupGlobalBorderDesktop: { ...modalPopupGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ modalPopupGlobalBorderTablet: { ...modalPopupGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ modalPopupGlobalBorderMobile: { ...modalPopupGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ modalPopupGlobalBorderLink: !modalPopupGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            modalPopupGlobalBorderUnits: {
                ...modalPopupGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (modalPopupGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        modalPopupGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        modalPopupGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        modalPopupGlobalBorderRadiusMobile: {
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
                    setAttributes({ modalPopupGlobalBorderRadiusDesktop: { ...modalPopupGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ modalPopupGlobalBorderRadiusTablet: { ...modalPopupGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ modalPopupGlobalBorderRadiusMobile: { ...modalPopupGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ modalPopupGlobalBorderRadiusLink: !modalPopupGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            modalPopupGlobalBorderRadiusUnits: {
                ...modalPopupGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    const generalControls = (
        <>
            <PanelBody title={__("Modal Opener", "frontis-blocks")} initialOpen={false}>
                <SelectControl
                    label={__("Toggle Type", "frontis-blocks")}
                    value={toggleType}
                    options={TOGGLE_TYPES}
                    onChange={(value) => setAttributes({ toggleType: value })}
                />
                
                {toggleType === 'page-load' && (
                    <>
                        <FB_Range
                            min={0}
                            max={60}
                            label={__('Delay (seconds)', 'frontis-blocks')}
                            rangeValue={{ Desktop: pageLoadDelay, Tablet: pageLoadDelay, Mobile: pageLoadDelay }}
                            onChangeHandler={(val) => setAttributes({ pageLoadDelay: Number(val?.Desktop ?? val) })}
                            deviceType={deviceType}
                            units={{ Desktop: 's', Tablet: 's', Mobile: 's' }}
                            setAttributes={setAttributes}
                            rangeStep={0.5}
                            resetFallbackValue={3}
                            hideUnits={true}
                        />
                        <ToggleControl
                            label={__('Enable Cookie (hide after shown)', 'frontis-blocks')}
                            help={pageLoadCookieEnable
                                ? __('Popup will not show again until cookie expires.', 'frontis-blocks')
                                : __('Popup will show on every page load.', 'frontis-blocks')
                            }
                            checked={pageLoadCookieEnable}
                            onChange={(val) => setAttributes({ pageLoadCookieEnable: val })}
                        />
                        {pageLoadCookieEnable && (
                            <FB_Range
                                min={1}
                                max={365}
                                label={__('Cookie Expiry (days)', 'frontis-blocks')}
                                rangeValue={{ Desktop: pageLoadCookieExpiry, Tablet: pageLoadCookieExpiry, Mobile: pageLoadCookieExpiry }}
                                onChangeHandler={(val) => setAttributes({ pageLoadCookieExpiry: Number(val?.Desktop ?? val) })}
                                deviceType={deviceType}
                                units={{ Desktop: 'd', Tablet: 'd', Mobile: 'd' }}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={1}
                                hideUnits={true}
                            />
                        )}
                    </>
                )}

                {toggleType === 'scroll' && (
                    <BaseControl>
                        <p style={{ margin: 0, color: '#757575', fontSize: '12px' }}>
                            {__('The popup will appear automatically when the user starts scrolling the page. No trigger button is needed.', 'frontis-blocks')}
                        </p>
                    </BaseControl>
                )}

                {toggleType === 'image' && (
                    <FB_ImageControl
                        globalImageUrl={toggleImageUrl}
                        setglobalImageUrl={(value) => setAttributes({ toggleImageUrl: value })}
                        globalImageAlt={toggleImageAlt}
                        setglobalImageAlt={(value) => setAttributes({ toggleImageAlt: value })}
                        globalImageID={toggleImageId}
                        setglobalImageID={(value) => setAttributes({ toggleImageId: value })}
                        isImageSize={false}
                    />
                )}  
                 
                {toggleType == 'button' && ( 
                    <>
                        {toggleButtonTextSwitcher && (
                            <TextControl 
                                label={__("Button Text", "frontis-blocks")}
                                value={toggleButtonText}
                                onChange={(value) => setAttributes({ toggleButtonText: value })}
                            /> 
                        )}
                        
                        <BaseControl
                            label={__("Icon", "frontis-blocks")}
                            id="fb-setting-text-alignment"
                            className="fb-setting-text-alignment"
                        >
                            <ButtonGroup 
                                className="fb-setting-text-alignment-group-btn"
                            >
                                {TOGGLE_BUTTON_ICON_ALIGN.map((item, key) => (
                                        <Button
                                            key={key}
                                            onClick={() => setAttributes({ toggleButtonIconAlign: item.value })}
                                            className={`fb-setting-text-alignment-single-btn ${toggleButtonIconAlign === item.value ? 'active' : ''}`}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                                {toggleButtonIconAlign === 'icon' && (
                                    <>
                                        <FBIconPicker value={toggleButtonIcon} setIconHandler={toggleButtonIconHandler} />
                                        <SelectControl
                                            label={__("Icon Position", "frontis-blocks")}
                                            value={toggleButtonIconPosition}
                                            options={ICON_POSITION}
                                            onChange={(value) => setAttributes({ toggleButtonIconPosition: value })}
                                        />
                                    </> 
                                )}
                        </BaseControl>
                        <BaseControl
                            label={__("Alignment", "frontis-blocks")}
                            id="fb-setting-text-alignment"
                            className="fb-setting-text-alignment"
                        >
                            <ButtonGroup
                                className="fb-setting-text-alignment-group-btn"
                            >
                                {TEXT_ALIGN_JUSTIFY.map((item, key) => (
                                    <Button
                                        key={key}
                                        onClick={() => setAttributes({ toggleButtonAlignment: item.value })}
                                        className={`fb-setting-text-alignment-single-btn ${toggleButtonAlignment === item.value ? 'active' : ''}`}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
					    </BaseControl>
                    </>

                )}

            </PanelBody>

            <PanelBody title={__("Modal Content", "frontis-blocks")} initialOpen={true}>
                <SelectControl
                    label={__("Content Type", "frontis-blocks")}
                    value={contentType}
                    options={CONTENT_TYPES}
                    onChange={(value) => setAttributes({ contentType: value })}
                />

                {contentType === 'pattern' && (
                    <BaseControl
                        label={__("Select Pattern", "frontis-blocks")}
                        help={__("Choose a block pattern to use as the content of modal popup", "frontis-blocks")}
                    >
                        <Select2
                            className="fb-select2-control"
                            options={patterns}
                            value={patterns.find(option => option.value === selectedTemplate) || null}
                            onChange={handlePatternChange}
                            isOptionDisabled={(option) => option.isDisabled}
                            placeholder={__("Select a pattern", "frontis-blocks")}
                            styles={{
                                menu: (base) => ({
                                    ...base,
                                    zIndex: 9999,
                                }),
                            }}
                        />
                    </BaseControl>
                )}

                {contentType === 'custom' && (
                    <BaseControl>
                        <p>{__("You can now insert any blocks directly inside for modal popup", "frontis-blocks")}</p>
                    </BaseControl>
                )} 



                <BaseControl label={__("Animation", "frontis-blocks")}>
                    <Select2
                        className="fb-select2-control"
                        options={ANIMATION}
                        value={ANIMATION.find(opt => opt.value === position) || null}
                        onChange={(opt) => setAttributes({ position: opt?.value || '' })}
                        styles={{
                            menu: (base) => ({
                                ...base,
                                zIndex: 9999,
                            }),
                        }}
                    />
                </BaseControl>
            </PanelBody>
            
        </>
    );
 
    const styleControls = (
        <>
            <PanelBody title={__("Modal", "frontis-blocks")} initialOpen={false}>
                <FB_Range
                    min={1}
                    max={modalPopupPanelWidthUnits === '%' ? 100 : 2000}
                    label={__("Panel Width", "frontis-blocks")}
                    rangeValue={modalPopupPanelWidth}
                    onChangeHandler={(value) => setAttributes({ modalPopupPanelWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ modalPopupPanelWidthUnits: value })}
                    deviceType={deviceType}
                    units={modalPopupPanelWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Range
                    min={1}
                    max={modalPopupPanelHeightUnits === '%' ? 100 : 2000}
                    label={__("Panel Height", "frontis-blocks")}
                    rangeValue={modalPopupPanelHeight}
                    onChangeHandler={(value) => setAttributes({ modalPopupPanelHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ modalPopupPanelHeightUnits: value })}
                    deviceType={deviceType}
                    units={modalPopupPanelHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_SwitcherControl
                    label={__("Background Type", "frontis-blocks")}
                    globalSwitcher={modalPopupPanelBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ modalPopupPanelBgColorSwitcher: value })}
                />

                {modalPopupPanelBgColorSwitcher === 'normal' && (
                    <BaseControl
                        className="fb-setting-background-color-setting-wrapper"
                        label={__("Normal Background Type", "frontis-blocks")}
                    >
                        <Dropdown
                            className="fb-setting-background-color-setting-icon-dropdown"
                            contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                            popoverProps={{ placement: 'bottom-start' }}
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button
                                    variant="primary"
                                    onClick={onToggle}
                                    aria-expanded={isOpen}
                                    className="fb-setting-background-color-setting-icon-btn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
                                        <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
                                    </svg>
                                </Button>
                            )}
                            renderContent={() => (
                                <div className="fb-setting-background-color-popup-wrapper">
                                    <BaseControl
                                        className="fb-setting-background-color-popup-inner-wrapper"
                                    >
                                        <ButtonGroup className="fb-setting-background-color-panel-btn">
                                            {BACKGROUND_TYPES.map((item) => (
                                                <Button
                                                    key={item.value}
                                                    onClick={() => setAttributes({ modalPopupPanelBgNormalBackgroundType: item.value })}
                                                    className={`fb-setting-background-color-panel-btn-switcher ${modalPopupPanelBgNormalBackgroundType === item.value ? 'active' : ''}`}
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </BaseControl>

                                    {modalPopupPanelBgNormalBackgroundType === 'classic' && (

                                        <>
                                            <FB_ColorControl
                                                label={__("Color", "frontis-blocks")}
                                                globalColor={modalPopupPanelBgNormalClassicColor}
                                                setGlobalColor={(value) => setAttributes({ modalPopupPanelBgNormalClassicColor: value === undefined ? '' : value })}
                                            />

                                            <FB_ResponsiveBackgroundImageControl
                                                deviceType={deviceType}
                                                globalBackgroundImageUrl={modalPopupPanelBgNormalBackgroundImageUrl}
                                                setGlobalBackgroundImageUrl={(value) => setAttributes({ modalPopupPanelBgNormalBackgroundImageUrl: value })}
                                                globalBackgroundImagePosition={modalPopupPanelBgNormalBackgroundImagePosition}
                                                setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ modalPopupPanelBgNormalBackgroundImagePosition: newPosition })}
                                                globalBackgroundImageAttachment={modalPopupPanelBgNormalBackgroundImageAttachment}
                                                setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ modalPopupPanelBgNormalBackgroundImageAttachment: newAttachment })}
                                                globalBackgroundImageRepeat={modalPopupPanelBgNormalBackgroundImageRepeat}
                                                setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ modalPopupPanelBgNormalBackgroundImageRepeat: newRepeat })}
                                                globalBackgroundImageSize={modalPopupPanelBgNormalBackgroundImageSize}
                                                setGlobalBackgroundImageSize={(newSize) => setAttributes({ modalPopupPanelBgNormalBackgroundImageSize: newSize })}
                                                setAttributes={setAttributes}
                                            />

                                        </>
                                    )}

                                    {modalPopupPanelBgNormalBackgroundType === 'gradient' && (
                                        <FB_GradientColorControl
                                            globalCustomGradientSwitcher={modalPopupPanelBgNormalCustomGradientSwitcher}
                                            setGlobalCustomGradientSwitcher={(value) => setAttributes({ modalPopupPanelBgNormalCustomGradientSwitcher: value })}
                                            globalCustomGradientInputValue={modalPopupPanelBgNormalCustomGradientInputValue}
                                            setGlobalCustomGradientInputValue={(value) => setAttributes({ modalPopupPanelBgNormalCustomGradientInputValue: value })}
                                            globalGradientColor={modalPopupPanelBgNormalGradientColor}
                                            setGlobalGradientColor={(value) => setAttributes({ modalPopupPanelBgNormalGradientColor: value === undefined ? null : value })}
                                        />
                                    )}
                                </div>
                            )}
                        />
                    </BaseControl>

                )}

                {modalPopupPanelBgColorSwitcher === 'hover' && (
                    <BaseControl
                        className="fb-setting-background-color-setting-wrapper"
                        label={__("Hover Background Type", "frontis-blocks")}
                    >
                        <Dropdown
                            className="fb-setting-background-color-setting-icon-dropdown"
                            contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                            popoverProps={{ placement: 'bottom-start' }}
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button
                                    variant="primary"
                                    onClick={onToggle}
                                    aria-expanded={isOpen}
                                    className="fb-setting-background-color-setting-icon-btn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
                                        <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
                                    </svg>
                                </Button>
                            )}
                            renderContent={() => (
                                <div className="fb-setting-background-color-popup-wrapper">
                                    <BaseControl
                                        className="fb-setting-background-color-popup-inner-wrapper"
                                    >
                                        <ButtonGroup className="fb-setting-background-color-panel-btn">
                                            {BACKGROUND_TYPES.map((item) => (
                                                <Button
                                                    key={item.value}
                                                    onClick={() => setAttributes({ modalPopupPanelBgHoverBackgroundType: item.value })}
                                                    className={`fb-setting-background-color-panel-btn-switcher ${modalPopupPanelBgHoverBackgroundType === item.value ? 'active' : ''}`}
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </BaseControl>

                                    {modalPopupPanelBgHoverBackgroundType === 'classic' && (

                                        <>
                                            <FB_ColorControl
                                                label={__("Color", "frontis-blocks")}
                                                globalColor={modalPopupPanelBgHoverClassicColor}
                                                setGlobalColor={(value) => setAttributes({ modalPopupPanelBgHoverClassicColor: value === undefined ? '' : value })}
                                            />

                                            <FB_ResponsiveBackgroundImageControl
                                                deviceType={deviceType}
                                                globalBackgroundImageUrl={modalPopupPanelBgHoverBackgroundImageUrl}
                                                setGlobalBackgroundImageUrl={(value) => setAttributes({ modalPopupPanelBgHoverBackgroundImageUrl: value })}
                                                globalBackgroundImagePosition={modalPopupPanelBgHoverBackgroundImagePosition}
                                                setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ modalPopupPanelBgHoverBackgroundImagePosition: newPosition })}
                                                globalBackgroundImageAttachment={modalPopupPanelBgHoverBackgroundImageAttachment}
                                                setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ modalPopupPanelBgHoverBackgroundImageAttachment: newAttachment })}
                                                globalBackgroundImageRepeat={modalPopupPanelBgHoverBackgroundImageRepeat}
                                                setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ modalPopupPanelBgHoverBackgroundImageRepeat: newRepeat })}
                                                globalBackgroundImageSize={modalPopupPanelBgHoverBackgroundImageSize}
                                                setGlobalBackgroundImageSize={(newSize) => setAttributes({ modalPopupPanelBgHoverBackgroundImageSize: newSize })}
                                                setAttributes={setAttributes}
                                            />

                                        </>
                                    )}

                                    {modalPopupPanelBgHoverBackgroundType === 'gradient' && (
                                        <FB_GradientColorControl
                                            globalCustomGradientSwitcher={modalPopupPanelBgHoverCustomGradientSwitcher}
                                            setGlobalCustomGradientSwitcher={(value) => setAttributes({ modalPopupPanelBgHoverCustomGradientSwitcher: value })}
                                            globalCustomGradientInputValue={modalPopupPanelBgHoverCustomGradientInputValue}
                                            setGlobalCustomGradientInputValue={(value) => setAttributes({ modalPopupPanelBgHoverCustomGradientInputValue: value })}
                                            globalGradientColor={modalPopupPanelBgHoverGradientColor}
                                            setGlobalGradientColor={(value) => setAttributes({ modalPopupPanelBgHoverGradientColor: value === undefined ? null : value })}
                                        />
                                    )}
                                </div>
                            )}
                        />
                    </BaseControl>
                )}
                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleModalPopupPanelPaddingUnitsHandler}
                    spacingUnits={modalPopupPanelPaddingUnits}
                    spacingDesktop={modalPopupPanelDesktopPadding}
                    spacingTablet={modalPopupPanelTabPadding}
                    spacingMobile={modalPopupPanelMobilePadding}
                    handleSpacingUnitHandler={handleModalPopupPanelPaddingUnitChange}
                    spacingCombineBtn={modalPopupPanelPaddingLink}
                    spacingCombineBtnHandler={handleModalPopupPanelPaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleModalPopupPanelMarginUnitsHandler}
                    spacingUnits={modalPopupPanelMarginUnits}
                    spacingDesktop={modalPopupPanelDesktopMargin}
                    spacingTablet={modalPopupPanelTabMargin}
                    spacingMobile={modalPopupPanelMobileMargin}
                    handleSpacingUnitHandler={handleModalPopupPanelMarginUnitChange}
                    spacingCombineBtn={modalPopupPanelMarginLink}
                    spacingCombineBtnHandler={handleModalPopupPanelMarginCombineBtn}
                    setAttributes={setAttributes}
                />
                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={modalPopupPanelBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ modalPopupPanelBorder: value })}
                />


                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={modalPopupPanelBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ modalPopupPanelBorderColorSwitcher: value })}
                />

                {modalPopupPanelBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={modalPopupPanelBorderColor}
                        setGlobalColor={(value) => setAttributes({ modalPopupPanelBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {modalPopupPanelBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={modalPopupPanelBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ modalPopupPanelBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleModalPopupPanelBorderUnitsChange}
                    spacingUnits={modalPopupPanelBorderUnits}
                    spacingDesktop={modalPopupPanelDesktopBorderWidth}
                    spacingTablet={modalPopupPanelTabBorderWidth}
                    spacingMobile={modalPopupPanelMobileBorderWidth}
                    handleSpacingUnitHandler={handleModalPopupPanelBorderWidthChange}
                    spacingCombineBtn={modalPopupPanelBorderLink}
                    spacingCombineBtnHandler={handleModalPopupPanelBorderLinkToggle}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleModalPopupPanelBorderRadiusUnitsChange}
                    spacingUnits={modalPopupPanelBorderRadiusUnits}
                    spacingDesktop={modalPopupPanelDesktopBorderRadiusWidth}
                    spacingTablet={modalPopupPanelTabBorderRadiusWidth}
                    spacingMobile={modalPopupPanelMobileBorderRadiusWidth}
                    handleSpacingUnitHandler={handleModalPopupPanelBorderRadiusChange}
                    spacingCombineBtn={modalPopupPanelBorderRadiusLink}
                    spacingCombineBtnHandler={handleModalPopupPanelBorderRadiusLinkToggle}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={modalPopupPanelBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ modalPopupPanelBoxShadowSwitcher: value })}
                />

                {modalPopupPanelBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ modalPopupPanelBoxShadowValues: value })}
                        initialShadowValue={modalPopupPanelBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ modalPopupPanelBoxShadowCssValue: value })}
                    />
                )}

                {modalPopupPanelBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ modalPopupPanelBoxShadowHoverValues: value })}
                        initialShadowValue={modalPopupPanelBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ modalPopupPanelBoxShadowHoverCssValue: value })}
                    />
                )}
            </PanelBody>

            <PanelBody title={__("Close Icon", "frontis-blocks")} initialOpen={false}>
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Width", "frontis-blocks")}
                    rangeValue={modalCloseIconWidth}
                    onChangeHandler={(value) => setAttributes({ modalCloseIconWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ modalCloseIconWidthUnits: value })}
                    deviceType={deviceType}
                    units={modalCloseIconWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Height", "frontis-blocks")}
                    rangeValue={modalCloseIconHeight}
                    onChangeHandler={(value) => setAttributes({ modalCloseIconHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ modalCloseIconHeightUnits: value })}
                    deviceType={deviceType}
                    units={modalCloseIconHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_SwitcherControl
                    label={__("Icon Color", "frontis-blocks")}
                    globalSwitcher={modalCloseIconColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ modalCloseIconColorSwitcher: value })}
                />

                {modalCloseIconColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={modalCloseIconColor}
                        setGlobalColor={(value) => setAttributes({ modalCloseIconColor: value === undefined ? '' : value })}
                    />
                )}

                {modalCloseIconColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={modalCloseIconHoverColor}
                        setGlobalColor={(value) => setAttributes({ modalCloseIconHoverColor: value === undefined ? '' : value })}
                    />
                )}
                <FB_Range
                    min={-100}
                    max={100}
                    label={__("Position Top", "frontis-blocks")}
                    rangeValue={modalCloseIconPositionTop}
                    onChangeHandler={(value) => setAttributes({ modalCloseIconPositionTop: value })}
                    rangeUnitHandler={(value) => setAttributes({ modalCloseIconPositionTopUnits: value })}
                    deviceType={deviceType}
                    units={modalCloseIconPositionTopUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Range
                    min={-100}
                    max={100}
                    label={__("Position Right", "frontis-blocks")}
                    rangeValue={modalCloseIconPositionRight}
                    onChangeHandler={(value) => setAttributes({ modalCloseIconPositionRight: value })}
                    rangeUnitHandler={(value) => setAttributes({ modalCloseIconPositionRightUnits: value })}
                    deviceType={deviceType}
                    units={modalCloseIconPositionRightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
            </PanelBody>

            <PanelBody title={__("Overlay", "frontis-blocks")} initialOpen={false}>
                <ToggleControl
                    label={__("Enable Overlay", "frontis-blocks")}
                    checked={modalPopupOverlaySwitcher}
                    onChange={(value) => setAttributes({ modalPopupOverlaySwitcher: value })}
                />
                
                {modalPopupOverlaySwitcher && (
                    <>
                        <FB_BackgroundColorControl
                            label={__("Background Color", "frontis-blocks")}
                            bgColorSwitcher={modalPopupOverlayBackgroundColorSwitcher}
                            setBgColorSwitcher={(value) => setAttributes({ modalPopupOverlayBackgroundColorSwitcher: value })}

                            normalLabel={__("Background Color Type", "frontis-blocks")}
                            normalBackgroundType={modalPopupOverlayBgColorType}
                            setNormalBackgroundType={(value) => setAttributes({ modalPopupOverlayBgColorType: value })}
                            normalClassicColor={modalPopupOverlayBackgroundColor}
                            setNormalClassicColor={(value) => setAttributes({ modalPopupOverlayBackgroundColor: value === undefined ? '' : value })}
                            normalGradientColor={modalPopupOverlayBackgroundGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ modalPopupOverlayBackgroundGradientColor: value === undefined ? null : value })}
                            normalCustomGradientSwitcher={modalPopupOverlayBackgroundCustomGradientColorSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ modalPopupOverlayBackgroundCustomGradientColorSwitcher: value })}
                            normalCustomGradientInputValue={modalPopupOverlayBackgroundCustomGradientColor}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ modalPopupOverlayBackgroundCustomGradientColor: value === undefined ? null : value })}

                            hoverLabel={__("Background Color Type", "frontis-blocks")}
                            hoverBackgroundType={modalPopupOverlayBgHoverColorType}
                            setHoverBackgroundType={(value) => setAttributes({ modalPopupOverlayBgHoverColorType: value })}
                            hoverClassicColor={modalPopupOverlayBackgroundHoverColor}
                            setHoverClassicColor={(value) => setAttributes({ modalPopupOverlayBackgroundHoverColor: value === undefined ? '' : value })}
                            hoverGradientColor={modalPopupOverlayBackgroundHoverGradientColor}
                            setHoverGradientColor={(value) => setAttributes({ modalPopupOverlayBackgroundHoverGradientColor: value === undefined ? null : value })}
                            hoverCustomGradientSwitcher={modalPopupOverlayBackgroundHoverCustomGradientColorSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ modalPopupOverlayBackgroundHoverCustomGradientColorSwitcher: value })}
                            hoverCustomGradientInputValue={modalPopupOverlayBackgroundHoverCustomGradientColor}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ modalPopupOverlayBackgroundHoverCustomGradientColor: value === undefined ? null : value })}

                            isBackgroundImage={false}
                        />
                        <FB_Range
                            min={1}
                            max={modalPopupOverlayOpacityUnits === '%' ? 100 : 100}
                            label={__("Opacity", "frontis-blocks")}
                            rangeValue={modalPopupOverlayOpacity}
                            onChangeHandler={(value) => setAttributes({ modalPopupOverlayOpacity: value })}
                            rangeUnitHandler={(value) => setAttributes({ modalPopupOverlayOpacityUnits: value })}
                            deviceType={deviceType}
                            units={modalPopupOverlayOpacityUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />
                    </>
                )}
            </PanelBody>

            {toggleType === 'button' && (
                 <PanelBody
                    title={__("Toggle Button", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_Range
                        min={1}
                        max={toggleButtonWidthUnits === '%' ? 100 : 1000}
                        label={__("Width", "frontis-blocks")} 
                        rangeValue={toggleButtonWidth} 
                        onChangeHandler={(value) => setAttributes({ toggleButtonWidth: value })}
                        rangeUnitHandler={(value) => setAttributes({ toggleButtonWidthUnits: value })}
                        deviceType={deviceType}
                        units={toggleButtonWidthUnits}
                        setAttributes={setAttributes} 
                        rangeStep={1}
                        resetFallbackValue={""}
                    />

                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={toggleButtonGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ toggleButtonGlobalTypographyData: value })}

                        globalTypoType={toggleButtonGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({
                                toggleButtonGlobalTypoType: value,
                                toggleButtonGlobalTypoSwitcher: value === 'default' ? { ...toggleButtonGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...toggleButtonGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                            })
                        }}

                        globalTypoOption={toggleButtonGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ toggleButtonGlobalTypoOption: value })}

                        fontFamily={toggleButtonFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ toggleButtonFontFamily: value, toggleButtonGlobalTypoSwitcher: { ...toggleButtonGlobalTypoSwitcher, fontFamily: value && false } })}

                        fontSize={toggleButtonFontSize}
                        onChangeFontSize={(value) => setAttributes({ toggleButtonFontSize: value, toggleButtonGlobalTypoSwitcher: { ...toggleButtonGlobalTypoSwitcher, fontSize: value && false } })}

                        fontSizeUnits={toggleButtonFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ toggleButtonFontSizeUnits: value })}

                        fontWeight={toggleButtonFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ toggleButtonFontWeight: value, toggleButtonGlobalTypoSwitcher: { ...toggleButtonGlobalTypoSwitcher, fontWeight: value && false } })}

                        fontStyle={toggleButtonFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ toggleButtonFontStyle: value, toggleButtonGlobalTypoSwitcher: { ...toggleButtonGlobalTypoSwitcher, fontStyle: value && false } })}

                        textTransform={toggleButtonTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ toggleButtonTextTransform: value, toggleButtonGlobalTypoSwitcher: { ...toggleButtonGlobalTypoSwitcher, textTransform: value && false } })}

                        textDecoration={toggleButtonTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ toggleButtonTextDecoration: value, toggleButtonGlobalTypoSwitcher: { ...toggleButtonGlobalTypoSwitcher, textDecoration: value && false } })}

                        letterSpacing={toggleButtonLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ toggleButtonLetterSpacing: value, toggleButtonGlobalTypoSwitcher: { ...toggleButtonGlobalTypoSwitcher, letterSpacing: value && false } })}

                        letterSpacingUnits={toggleButtonLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ toggleButtonLetterSpacingUnits: value })}

                        lineHeight={toggleButtonLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ toggleButtonLineHeight: value, toggleButtonGlobalTypoSwitcher: { ...toggleButtonGlobalTypoSwitcher, lineHeight: value && false } })}

                        lineHeightUnits={toggleButtonLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ toggleButtonLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Text Color", "frontis-blocks")}
                        globalSwitcher={toggleButtonColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ toggleButtonColorSwitcher: value })}
                    />

                    {toggleButtonColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={toggleButtonColor}
                            setGlobalColor={(value) => setAttributes({ toggleButtonColor: value === undefined ? '' : value })}
                        />
                    )}

                    {toggleButtonColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={toggleButtonHoverColor}
                            setGlobalColor={(value) => setAttributes({ toggleButtonHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Range
                        min={1}
                        max={100}
                        label={__("Icon Size", "frontis-blocks")}
                        rangeValue={toggleButtonIconSize}
                        onChangeHandler={(value) => setAttributes({ toggleButtonIconSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ toggleButtonIconSizeUnits: value })}
                        deviceType={deviceType}
                        units={toggleButtonIconSizeUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={25}
                    />

                    <FB_SwitcherControl
                        label={__("Icon Color", "frontis-blocks")}
                        globalSwitcher={toggleButtonIconColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ toggleButtonIconColorSwitcher: value })}
                    />

                    {toggleButtonIconColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={toggleButtonIconColor}
                            setGlobalColor={(value) => setAttributes({ toggleButtonIconColor: value === undefined ? '' : value })}
                        />
                    )}

                    {toggleButtonIconColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={toggleButtonIconHoverColor}
                            setGlobalColor={(value) => setAttributes({ toggleButtonIconHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Icon Gap", "frontis-blocks")}
                        rangeValue={toggleButtonIconGapSize}
                        onChangeHandler={(value) => setAttributes({ toggleButtonIconGapSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ toggleButtonIconGapUnits: value })}
                        deviceType={deviceType}
                        units={toggleButtonIconGapUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={''}
                    />

                    <FB_SwitcherControl
                        label={__("Icon Rotation", "frontis-blocks")}
                        globalSwitcher={toggleButtonIconRotateSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ toggleButtonIconRotateSwitcher: value })}
                    />

                    {toggleButtonIconRotateSwitcher === 'normal' && (
                        <FB_Range
                            min={-360}
                            max={360}
                            label={__("Icon Rotation", "frontis-blocks")}
                            rangeValue={toggleButtonIconRotate}
                            onChangeHandler={(value) => setAttributes({ toggleButtonIconRotate: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />
                    )}

                    {toggleButtonIconRotateSwitcher === 'hover' && (
                        <FB_Range
                            min={-360}
                            max={360}
                            label={__("Icon Rotation", "frontis-blocks")}
                            rangeValue={toggleButtonIconRotateHover}
                            onChangeHandler={(value) => setAttributes({ toggleButtonIconRotateHover: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}
                        />
                    )}

                    <FB_BackgroundColorControl
                        label={__("Background Color", "frontis-blocks")}
                        bgColorSwitcher={toggleButtonBgColorSwitcher}
                        setBgColorSwitcher={(value) => setAttributes({ toggleButtonBgColorSwitcher: value })}

                        normalBackgroundType={toggleButtonNormalBackgroundType}
                        setNormalBackgroundType={(value) => setAttributes({ toggleButtonNormalBackgroundType: value })}
                        normalClassicColor={toggleButtonBgColor}
                        setNormalClassicColor={(value) => setAttributes({ toggleButtonBgColor: value === undefined ? '' : value })}
                        normalGradientColor={toggleButtonNormalGradientColor}
                        setNormalGradientColor={(value) => setAttributes({ toggleButtonNormalGradientColor: value === undefined ? null : value })}
                        normalCustomGradientSwitcher={toggleButtonNormalCustomGradientSwitcher}
                        setNormalCustomGradientSwitcher={(value) => setAttributes({ toggleButtonNormalCustomGradientSwitcher: value })}
                        normalCustomGradientInputValue={toggleButtonNormalCustomGradientInputValue}
                        setNormalCustomGradientInputValue={(value) => setAttributes({ toggleButtonNormalCustomGradientInputValue: value })}

                        hoverBackgroundType={toggleButtonHoverBackgroundType}
                        setHoverBackgroundType={(value) => setAttributes({ toggleButtonHoverBackgroundType: value })}
                        hoverClassicColor={toggleButtonBgHoverColor}
                        setHoverClassicColor={(value) => setAttributes({ toggleButtonBgHoverColor: value === undefined ? '' : value })}
                        hoverGradientColor={toggleButtonHoverGradientColor}
                        setHoverGradientColor={(value) => setAttributes({ toggleButtonHoverGradientColor: value === undefined ? null : value })}
                        hoverCustomGradientSwitcher={toggleButtonHoverCustomGradientSwitcher}
                        setHoverCustomGradientSwitcher={(value) => setAttributes({ toggleButtonHoverCustomGradientSwitcher: value })}
                        hoverCustomGradientInputValue={toggleButtonHoverCustomGradientInputValue}
                        setHoverCustomGradientInputValue={(value) => setAttributes({ toggleButtonHoverCustomGradientInputValue: value })}

                        isBackgroundImage={false}

                    />

                    <FB_Spacing
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleToggleBtnPaddingUnitsHandler}
                        spacingUnits={toggleButtonPaddingUnits}
                        spacingDesktop={toggleButtonDesktopPadding}
                        spacingTablet={toggleButtonTabPadding}
                        spacingMobile={toggleButtonMobilePadding}
                        handleSpacingUnitHandler={handleToggleBtnPaddingUnitChange}
                        spacingCombineBtn={toggleButtonPaddingLink}
                        spacingCombineBtnHandler={handleToggleBtnPaddingCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleToggleBtnMarginUnitsHandler}
                        spacingUnits={toggleButtonMarginUnits}
                        spacingDesktop={toggleButtonDesktopMargin}
                        spacingTablet={toggleButtonTabMargin}
                        spacingMobile={toggleButtonMobileMargin}
                        handleSpacingUnitHandler={handleToggleBtnMarginUnitChange}
                        spacingCombineBtn={toggleButtonMarginLink}
                        spacingCombineBtnHandler={handleToggleBtnMarginCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={toggleButtonBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ toggleButtonBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={toggleButtonBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ toggleButtonBorderColorSwitcher: value })}
                    />

                    {toggleButtonBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={toggleButtonBorderColor}
                            setGlobalColor={(value) => setAttributes({ toggleButtonBorderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {toggleButtonBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={toggleButtonBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ toggleButtonBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleToggleBtnBorderUnitsChange}
                        spacingUnits={toggleButtonBorderUnits}
                        spacingDesktop={toggleButtonDesktopBorderWidth}
                        spacingTablet={toggleButtonTabBorderWidth}
                        spacingMobile={toggleButtonMobileBorderWidth}
                        handleSpacingUnitHandler={handleToggleBtnBorderWidthChange}
                        spacingCombineBtn={toggleButtonBorderLink}
                        spacingCombineBtnHandler={handleToggleBtnBorderLinkToggle}
                        setAttributes={setAttributes}
                    />
                    <FB_Spacing
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleToggleBtnBorderRadiusUnitsChange}
                        spacingUnits={toggleButtonBorderRadiusUnits}
                        spacingDesktop={toggleButtonDesktopBorderRadiusWidth}
                        spacingTablet={toggleButtonTabBorderRadiusWidth}
                        spacingMobile={toggleButtonMobileBorderRadiusWidth}
                        handleSpacingUnitHandler={handleToggleBtnBorderRadiusChange}
                        spacingCombineBtn={toggleButtonBorderRadiusLink}
                        spacingCombineBtnHandler={handleToggleBtnBorderRadiusLinkToggle}
                        setAttributes={setAttributes}
                    />
                </PanelBody>
            )}

            {toggleType === 'image' && (
                <PanelBody
                    title={__("Toggle Image", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_Range
                        min={1}
                        max={toggleImageSizeUnits === '%' ? 100 : 1400}
                        label={__("Width", "frontis-blocks")}
                        rangeValue={toggleImageSize}
                        onChangeHandler={(value) => setAttributes({ toggleImageSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ toggleImageSizeUnits: value })}
                        deviceType={deviceType}
                        units={toggleImageSizeUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"100"}
                    />
                    <FB_Range
                        min={1}
                        max={toggleImageHeightUnits === '%' ? 100 : 1400}
                        label={__("Height", "frontis-blocks")}
                        rangeValue={toggleImageHeight}
                        onChangeHandler={(value) => setAttributes({ toggleImageHeight: value })}
                        rangeUnitHandler={(value) => setAttributes({ toggleImageHeightUnits: value })}
                        deviceType={deviceType}
                        units={toggleImageHeightUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"100"}
                    />

                </PanelBody>
            )}
           
        </>
    );
    const advancedControls = (
        <>
            <PanelBody
                title={__("Layout", "frontis-blocks")}
                initialOpen={true}
                className='fb-setting-layout-header'
            >
                <FB_Range
                    min={0}
                    max={10000000}
                    label={__("Z Index", "frontis-blocks")}
                    rangeValue={modalPopupGlobalZIndex}
                    onChangeHandler={(value) => setAttributes({ modalPopupGlobalZIndex: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />

                <SelectControl
                    label={__("Overflow", "frontis-blocks")}
                    value={modalPopupOverflow}
                    options={OVERFLOW_OP}
                    onChange={(value) => setAttributes({ modalPopupOverflow: value })}
                />

                <FB_PositionControl
                    deviceType={deviceType}
                    positionType={modalPopupPositionType}
                    setPositionType={(value) => setAttributes({ modalPopupPositionType: value })}

                    HZOrientationType={modalPopupHZOrientationType}
                    setHZOrientationType={(value) =>
                        setAttributes({ modalPopupHZOrientationType: value })
                    }
                    VROrientationType={modalPopupVROrientationType}
                    setVROrientationType={(value) =>
                        setAttributes({ modalPopupVROrientationType: value })
                    }

                    HZLeftOffset={modalPopupHZLeftOffset}
                    setHZLeftOffset={(value) => setAttributes({ modalPopupHZLeftOffset: value })}
                    HZLeftOffsetUnits={modalPopupHZLeftOffsetUnits}
                    setHZLeftOffsetUnits={(value) => setAttributes({ modalPopupHZLeftOffsetUnits: value })}
                    HZRightOffset={modalPopupHZRightOffset}
                    setHZRightOffset={(value) => setAttributes({ modalPopupHZRightOffset: value })}
                    HZRightOffsetUnits={modalPopupHZRightOffsetUnits}
                    setHZRightOffsetUnits={(value) => setAttributes({ modalPopupHZRightOffsetUnits: value })}

                    VRTopOffset={modalPopupVRTopOffset}
                    setVRTopOffset={(value) => setAttributes({ modalPopupVRTopOffset: value })}
                    VRTopOffsetUnits={modalPopupVRTopOffsetUnits}
                    setVRTopOffsetUnits={(value) => setAttributes({ modalPopupVRTopOffsetUnits: value })}
                    VRBottomOffset={modalPopupVRBottomOffset}
                    setVRBottomOffset={(value) => setAttributes({ modalPopupVRBottomOffset: value })}
                    VRBottomOffsetUnits={modalPopupVRBottomOffsetUnits}
                    setVRBottomOffsetUnits={(value) => setAttributes({ modalPopupVRBottomOffsetUnits: value })}

                    setAttributes={setAttributes}
                />

                <FB_InputControl
                    label={__("CSS ID", "frontis-blocks")}
                    value={modalPopupGlobalWraperID}
                    onChangeValue={(value) => setAttributes({ modalPopupGlobalWraperID: value })}
                    helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={modalPopupGlobalWraperClass}
                    onChangeValue={(value) => setAttributes({ modalPopupGlobalWraperClass: value })}
                    helpText={__("Separate with spaces key.", "frontis-blocks")}
                />

            </PanelBody>

            <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                    spacingUnits={modalPopupGlobalPaddingUnits}
                    spacingDesktop={modalPopupGlobalPaddingDesktop}
                    spacingTablet={modalPopupGlobalPaddingTablet}
                    spacingMobile={modalPopupGlobalPaddingMobile}
                    handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                    spacingCombineBtn={modalPopupGlobalPaddingLink}
                    spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                    spacingUnits={modalPopupGlobalMarginUnits}
                    spacingDesktop={modalPopupGlobalMarginDesktop}
                    spacingTablet={modalPopupGlobalMarginTablet}
                    spacingMobile={modalPopupGlobalMarginMobile}
                    handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                    spacingCombineBtn={modalPopupGlobalMarginLink}
                    spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody
                title={__("Background", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_SwitcherControl
                    label={__("Background Type", "frontis-blocks")}
                    globalSwitcher={modalPopupGlobalBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ modalPopupGlobalBgColorSwitcher: value })}
                />

                {modalPopupGlobalBgColorSwitcher === 'normal' && (
                    <BaseControl
                        className="fb-setting-background-color-setting-wrapper"
                        label={__("Normal Background Type", "frontis-blocks")}
                    >
                        <Dropdown
                            className="fb-setting-background-color-setting-icon-dropdown"
                            contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                            popoverProps={{ placement: 'bottom-start' }}
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button
                                    variant="primary"
                                    onClick={onToggle}
                                    aria-expanded={isOpen}
                                    className="fb-setting-background-color-setting-icon-btn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
                                        <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
                                    </svg>
                                </Button>
                            )}
                            renderContent={() => (
                                <div className="fb-setting-background-color-popup-wrapper">
                                    <BaseControl
                                        className="fb-setting-background-color-popup-inner-wrapper"
                                    >
                                        <ButtonGroup className="fb-setting-background-color-panel-btn">
                                            {BACKGROUND_TYPES.map((item) => (
                                                <Button
                                                    key={item.value}
                                                    onClick={() => setAttributes({ modalPopupGlobalBgNormalBackgroundType: item.value })}
                                                    className={`fb-setting-background-color-panel-btn-switcher ${modalPopupGlobalBgNormalBackgroundType === item.value ? 'active' : ''}`}
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </BaseControl>

                                    {modalPopupGlobalBgNormalBackgroundType === 'classic' && (

                                        <>
                                            <FB_ColorControl
                                                label={__("Color", "frontis-blocks")}
                                                globalColor={modalPopupGlobalBgNormalClassicColor}
                                                setGlobalColor={(value) => setAttributes({ modalPopupGlobalBgNormalClassicColor: value === undefined ? '' : value })}
                                            />

                                            <FB_ResponsiveBackgroundImageControl
                                                deviceType={deviceType}
                                                globalBackgroundImageUrl={modalPopupGlobalBgNormalBackgroundImageUrl}
                                                setGlobalBackgroundImageUrl={(value) => setAttributes({ modalPopupGlobalBgNormalBackgroundImageUrl: value })}
                                                globalBackgroundImageAlt={modalPopupGlobalBgNormalBackgroundImageAlt}
                                                setGlobalBackgroundImageAlt={(value) => setAttributes({ modalPopupGlobalBgNormalBackgroundImageAlt: value })}
                                                globalBackgroundImageID={modalPopupGlobalBgNormalBackgroundImageID}
                                                setGlobalBackgroundImageID={(value) => setAttributes({ modalPopupGlobalBgNormalBackgroundImageID: value })}
                                                globalBackgroundImagePosition={modalPopupGlobalBgNormalBackgroundImagePosition}
                                                setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ modalPopupGlobalBgNormalBackgroundImagePosition: newPosition })}
                                                globalBackgroundImageAttachment={modalPopupGlobalBgNormalBackgroundImageAttachment}
                                                setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ modalPopupGlobalBgNormalBackgroundImageAttachment: newAttachment })}
                                                globalBackgroundImageRepeat={modalPopupGlobalBgNormalBackgroundImageRepeat}
                                                setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ modalPopupGlobalBgNormalBackgroundImageRepeat: newRepeat })}
                                                globalBackgroundImageSize={modalPopupGlobalBgNormalBackgroundImageSize}
                                                setGlobalBackgroundImageSize={(newSize) => setAttributes({ modalPopupGlobalBgNormalBackgroundImageSize: newSize })}
                                                setAttributes={setAttributes}
                                            />

                                        </>
                                    )}

                                    {modalPopupGlobalBgNormalBackgroundType === 'gradient' && (
                                        <FB_GradientColorControl
                                            globalCustomGradientSwitcher={modalPopupGlobalBgNormalCustomGradientSwitcher}
                                            setGlobalCustomGradientSwitcher={(value) => setAttributes({ modalPopupGlobalBgNormalCustomGradientSwitcher: value })}
                                            globalCustomGradientInputValue={modalPopupGlobalBgNormalCustomGradientInputValue}
                                            setGlobalCustomGradientInputValue={(value) => setAttributes({ modalPopupGlobalBgNormalCustomGradientInputValue: value })}
                                            globalGradientColor={modalPopupGlobalBgNormalGradientColor}
                                            setGlobalGradientColor={(value) => setAttributes({ modalPopupGlobalBgNormalGradientColor: value === undefined ? null : value })}
                                        />
                                    )}
                                </div>
                            )}
                        />
                    </BaseControl>

                )}

                {modalPopupGlobalBgColorSwitcher === 'hover' && (
                    <BaseControl
                        className="fb-setting-background-color-setting-wrapper"
                        label={__("Hover Background Type", "frontis-blocks")}
                    >
                        <Dropdown
                            className="fb-setting-background-color-setting-icon-dropdown"
                            contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                            popoverProps={{ placement: 'bottom-start' }}
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button
                                    variant="primary"
                                    onClick={onToggle}
                                    aria-expanded={isOpen}
                                    className="fb-setting-background-color-setting-icon-btn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
                                        <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
                                    </svg>
                                </Button>
                            )}
                            renderContent={() => (
                                <div className="fb-setting-background-color-popup-wrapper">
                                    <BaseControl
                                        className="fb-setting-background-color-popup-inner-wrapper"
                                    >
                                        <ButtonGroup className="fb-setting-background-color-panel-btn">
                                            {BACKGROUND_TYPES.map((item) => (
                                                <Button
                                                    key={item.value}
                                                    onClick={() => setAttributes({ modalPopupGlobalBgHoverBackgroundType: item.value })}
                                                    className={`fb-setting-background-color-panel-btn-switcher ${modalPopupGlobalBgHoverBackgroundType === item.value ? 'active' : ''}`}
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </BaseControl>

                                    {modalPopupGlobalBgHoverBackgroundType === 'classic' && (

                                        <>
                                            <FB_ColorControl
                                                label={__("Color", "frontis-blocks")}
                                                globalColor={modalPopupGlobalBgHoverClassicColor}
                                                setGlobalColor={(value) => setAttributes({ modalPopupGlobalBgHoverClassicColor: value === undefined ? '' : value })}
                                            />

                                            <FB_ResponsiveBackgroundImageControl
                                                deviceType={deviceType}
                                                globalBackgroundImageUrl={modalPopupGlobalBgHoverBackgroundImageUrl}
                                                setGlobalBackgroundImageUrl={(value) => setAttributes({ modalPopupGlobalBgHoverBackgroundImageUrl: value })}
                                                globalBackgroundImageAlt={modalPopupGlobalBgNormalBackgroundImageAlt}
                                                setGlobalBackgroundImageAlt={(value) => setAttributes({ modalPopupGlobalBgNormalBackgroundImageAlt: value })}
                                                globalBackgroundImageID={modalPopupGlobalBgNormalBackgroundImageID}
                                                setGlobalBackgroundImageID={(value) => setAttributes({ modalPopupGlobalBgNormalBackgroundImageID: value })}
                                                globalBackgroundImagePosition={modalPopupGlobalBgHoverBackgroundImagePosition}
                                                setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ modalPopupGlobalBgHoverBackgroundImagePosition: newPosition })}
                                                globalBackgroundImageAttachment={modalPopupGlobalBgHoverBackgroundImageAttachment}
                                                setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ modalPopupGlobalBgHoverBackgroundImageAttachment: newAttachment })}
                                                globalBackgroundImageRepeat={modalPopupGlobalBgHoverBackgroundImageRepeat}
                                                setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ modalPopupGlobalBgHoverBackgroundImageRepeat: newRepeat })}
                                                globalBackgroundImageSize={modalPopupGlobalBgHoverBackgroundImageSize}
                                                setGlobalBackgroundImageSize={(newSize) => setAttributes({ modalPopupGlobalBgHoverBackgroundImageSize: newSize })}
                                                setAttributes={setAttributes}
                                            />

                                        </>
                                    )}

                                    {modalPopupGlobalBgHoverBackgroundType === 'gradient' && (
                                        <FB_GradientColorControl
                                            globalCustomGradientSwitcher={modalPopupGlobalBgHoverCustomGradientSwitcher}
                                            setGlobalCustomGradientSwitcher={(value) => setAttributes({ modalPopupGlobalBgHoverCustomGradientSwitcher: value })}
                                            globalCustomGradientInputValue={modalPopupGlobalBgHoverCustomGradientInputValue}
                                            setGlobalCustomGradientInputValue={(value) => setAttributes({ modalPopupGlobalBgHoverCustomGradientInputValue: value })}
                                            globalGradientColor={modalPopupGlobalBgHoverGradientColor}
                                            setGlobalGradientColor={(value) => setAttributes({ modalPopupGlobalBgHoverGradientColor: value === undefined ? null : value })}
                                        />
                                    )}
                                </div>
                            )}
                        />
                    </BaseControl>
                )}
            </PanelBody>

            <PanelBody
                title={__("Border and Shadow", "frontis-blocks")}
                initialOpen={false}
            >

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={modalPopupGlobalBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ modalPopupGlobalBorder: value })}
                />


                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={modalPopupGlobalBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ modalPopupGlobalBorderColorSwitcher: value })}
                />

                {modalPopupGlobalBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={modalPopupGlobalBorderColor}
                        setGlobalColor={(value) => setAttributes({ modalPopupGlobalBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {modalPopupGlobalBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={modalPopupGlobalBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ modalPopupGlobalBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                    spacingUnits={modalPopupGlobalBorderUnits}
                    spacingDesktop={modalPopupGlobalBorderDesktop}
                    spacingTablet={modalPopupGlobalBorderTablet}
                    spacingMobile={modalPopupGlobalBorderMobile}
                    handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                    spacingCombineBtn={modalPopupGlobalBorderLink}
                    spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                    spacingUnits={modalPopupGlobalBorderRadiusUnits}
                    spacingDesktop={modalPopupGlobalBorderRadiusDesktop}
                    spacingTablet={modalPopupGlobalBorderRadiusTablet}
                    spacingMobile={modalPopupGlobalBorderRadiusMobile}
                    handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                    spacingCombineBtn={modalPopupGlobalBorderRadiusLink}
                    spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={modalPopupGlobalBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ modalPopupGlobalBoxShadowSwitcher: value })}
                />

                {modalPopupGlobalBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ modalPopupGlobalBoxShadowValues: value })}
                        initialShadowValue={modalPopupGlobalBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ modalPopupGlobalBoxShadowCssValue: value })}
                    />
                )}

                {modalPopupGlobalBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ modalPopupGlobalBoxShadowHoverValues: value })}
                        initialShadowValue={modalPopupGlobalBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ modalPopupGlobalBoxShadowHoverCssValue: value })}
                    />
                )}
            </PanelBody>

            <PanelBody
                title={__("Responsive Control", "frontis-blocks")}
                initialOpen={false}
                className="fb-setting-responsive-control-wrapper"
            >
                <FB_VisibilityControl
                    desktopValue={modalPopupDesktopSwitcher}
                    setDesktopValue={(value) => setAttributes({ modalPopupDesktopSwitcher: value })}

                    tabletValue={modalPopupTabletSwitcher}
                    setTabletValue={(value) => setAttributes({ modalPopupTabletSwitcher: value })}

                    mobileValue={modalPopupMobileSwitcher}
                    setMobileValue={(value) => setAttributes({ modalPopupMobileSwitcher: value })}
                />
            </PanelBody>
            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor
                    value={modalPopupCustomCSS}
                    onChangeValue={(value) => setAttributes({ modalPopupCustomCSS: value })}
                />
            </PanelBody>
        </>
    );

    return (
        <>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}
export default memo(Inspector);