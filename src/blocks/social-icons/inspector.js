import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import {
    PanelBody,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    Dropdown,
    RangeControl,
    SelectControl,
    Dashicon,
    ColorPicker,
    ToggleControl,
} from '@wordpress/components';

import {
    NORMAL_HOVER,
    UNIT_TYPES,
    ICON_ALIGN,
    TEXT_ALIGN,
    BORDER_STYLES,
	PRESETS,
} from "./constants/constants";
import SortableItem from './sortableItem';
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_TypographyControl from '@Components/typography-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        deviceType,
        socialAlignment,
        socialItems,

        /** Icon Styles */
        socialIconSize,
        socialIconSizeUnits,
        socialIconGlobalColorSwitcher,
        socialIconGlobalColor,
        socialIconGlobalHoverColor,

        socialIconBgGlobalColorSwitcher,
        socialIconBgGlobalColor,
        socialIconBgGlobalHoverColor,

        socialIconBorder,
        socialIconBorderColorSwitcher,
        socialIconBorderColor,
        socialIconBorderHoverColor,

        socialIconBorderUnits,
        socialIconBorderDesktop,
        socialIconBorderTablet,
        socialIconBorderMobile,
        socialIconBorderLink,

        socialIconBorderRadiusUnits,
        socialIconBorderRadiusDesktop,
        socialIconBorderRadiusTablet,
        socialIconBorderRadiusMobile,
        socialIconBorderRadiusLink,

        socialIconPaddingUnits,
        socialIconPaddingDesktop,
        socialIconPaddingTablet,
        socialIconPaddingMobile,
        socialIconPaddingLink,
		/** End Icon Padding */

		/** Title Styles */
		socialTitleSwitcher,
        socialTitleFontFamily,
        socialTitleFontSize,
        socialTitleFontSizeUnits,
        socialTitleFontWeight,
        socialTitleFontStyle,
        socialTitleTextTransform,
        socialTitleTextDecoration,
        socialTitleLetterSpacing,
        socialTitleLetterSpacingUnits,
        socialTitleLineHeight,
        socialTitleLineHeightUnits,
		socialTitleColorSwitcher,
        socialTitleColor,
        socialTitleHoverColor,

		socialTitlePaddingUnits,
		socialTitlePaddingDesktop,
		socialTitlePaddingTablet,
		socialTitlePaddingMobile,
		socialTitlePaddingLink,
		
		/** End Title Styles */

        /** Social Padding */

        socialGapSize,
        socialGapUnits,

        socialPaddingUnits,
        socialPaddingDesktop,
        socialPaddingTablet,
        socialPaddingMobile,
        socialPaddingLink,

        socialMarginUnits,
        socialMarginDesktop,
        socialMarginTablet,
        socialMarginMobile,
        socialMarginLink,

        socialBgColorSwitcher,
        socialBgColor,
        socialBgHoverColor,

        socialBorder,
        socialBorderColorSwitcher,
        socialBorderColor,
        socialBorderHoverColor,

        socialBorderUnits,
        socialBorderDesktop,
        socialBorderTablet,
        socialBorderMobile,
        socialBorderLink,

        socialBorderRadiusUnits,
        socialBorderRadiusDesktop,
        socialBorderRadiusTablet,
        socialBorderRadiusMobile,
        socialBorderRadiusLink,


        /** Global Styles */
        socialGlobalZIndex,

        socialGlobalPaddingLink,
        socialGlobalPaddingUnits,
        socialGlobalPaddingDesktop,
        socialGlobalPaddingTablet,
        socialGlobalPaddingMobile,

        socialGlobalMarginUnits,
        socialGlobalMarginDesktop,
        socialGlobalMarginTablet,
        socialGlobalMarginMobile,
        socialGlobalMarginLink,

        socialGlobalBgColorSwitcher,
        socialGlobalBgColor,
        socialGlobalBgHoverColor,
        
        socialGlobalBorder,
        socialGlobalBorderColorSwitcher,
        socialGlobalBorderColor,
        socialGlobalBorderHoverColor,
        socialGlobalBorderUnits,
        socialGlobalBorderDesktop,
        socialGlobalBorderTablet,
        socialGlobalBorderMobile,
        socialGlobalBorderLink,
        
        socialGlobalBorderRadiusUnits,
        socialGlobalBorderRadiusDesktop,
        socialGlobalBorderRadiusTablet,
        socialGlobalBorderRadiusMobile,
        socialGlobalBorderRadiusLink,

        socialGlobalBoxShadowValues,
        socialGlobalBoxShadowCssValue,


		socialIconsPresetStyle,
		// singleItemColorStyle,
		blockStyle,


    } = attributes;
	


    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-Social-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = socialItems.findIndex(item => item.id === active.id);
            const newIndex = socialItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(socialItems, oldIndex, newIndex);
            setAttributes({ socialItems: updatedItems });
        }
    };

	const getPresetColors = (preset) => {
		switch (preset) {
			case 'preset-1':
				return {
					socialIconColor: '#1877F2',
					socialIconHoverColor: '#1877F2',
					socialIconBgColor: "#ffffff",
					socialIconHoverBgColor: "#ffffff",
					normalItemClassicColor: "#ffffff",
				};
			case 'preset-2':
				return {
					socialIconColor: "#ffffff",
					socialIconHoverColor: "#ffffff",
					socialIconBgColor: "#1877F2",
					socialIconHoverBgColor: "#1877F2",
					normalItemClassicColor: "#1877F2",
				};
			case 'preset-3':
				return {
					socialIconColor: "#FFFFFF",
					socialIconHoverColor: "#FFFFFF",
					socialIconBgColor: "",
					socialIconHoverBgColor: "",
					normalItemClassicColor: "#1877F2",
				};
			case 'preset-4':
				return {
					socialIconColor: "#FFFFFF",
					socialIconHoverColor: "#FFFFFF",
					socialIconBgColor: "#1877F2",
					socialIconHoverBgColor: "#1877F2",
					normalItemClassicColor: "#1877F2",
				};
			case 'preset-5':
				return {
					socialIconColor: "#1877F2",
					socialIconHoverColor: "#1877F2",
					socialIconBgColor: "#FFFFFF",
					socialIconHoverBgColor: "#FFFFFF",
					normalItemClassicColor: "#ffffff",
				};
			case 'preset-6':
				return {
					socialIconColor: "#FFFFFF",
					socialIconHoverColor: "#FFFFFF",
					socialIconBgColor: "#15171C",
					socialIconHoverBgColor: "#15171C",
					normalItemClassicColor: "#15171C",
				};
			default:
				console.warn(`Preset "${preset}" not found. Default colors will not be set.`);
				return {};
		}
	};

	const handleAddItem = () => {
		const presetColors = getPresetColors(socialIconsPresetStyle);
	
		const newItem = {
			id: `item-${socialItems.length + 1}`,
			socialIconTitle: 'Facebook',
			socialIconUrl: '',
			socialIcon: 'facebook-f',
	
			socialIconTargetUrl: false,
			socialIconColorSwitcher: 'normal',
	
			// Apply preset colors as default values
			socialIconColor: presetColors.socialIconColor || '',
			socialIconHoverColor: presetColors.socialIconHoverColor || '',
			socialIconBgColor: presetColors.socialIconBgColor || '',
			socialIconHoverBgColor: presetColors.socialIconHoverBgColor || '',

			socialItemBgColorSwitcher: 'normal',
	
			normalItemBackgroundType: 'classic',
			normalItemClassicColor: presetColors.normalItemClassicColor || '',
			normalItemGradientColor: '',
			normalItemCustomGradientSwitcher: false,
			normalItemCustomGradientInputValue: '',
	
			hoverItemBackgroundType: 'classic',
			hoverItemClassicColor: '',
			hoverItemGradientColor: '',
			hoverItemCustomGradientSwitcher: false,
			hoverItemCustomGradientInputValue: '',
		};
	
		setAttributes({ socialItems: [...socialItems, newItem] });
	};

	useEffect(() => {
		if (socialItems.length > 4) {
			const updatedItems = socialItems.map((item, index) => {
				if (index >= 4) {
					const presetColors = getPresetColors(socialIconsPresetStyle);
					return {
						...item,
						socialIconColor: presetColors.socialIconColor || item.socialIconColor,
						socialIconHoverColor: presetColors.socialIconHoverColor || item.socialIconHoverColor,
						socialIconBgColor: presetColors.socialIconBgColor || item.socialIconBgColor,
						socialIconHoverBgColor: presetColors.socialIconHoverBgColor || item.socialIconHoverBgColor,
					};
				}
				return item;
			});
			setAttributes({ socialItems: updatedItems });
		}
	}, [socialIconsPresetStyle]);

    const handleChangeItem = (id, key, value) => {
        const updatedItems = socialItems.map(item => 
            item.id === id ? { ...item, [key]: value } : item
        );
        setAttributes({ socialItems: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems = socialItems.filter(item => item.id !== id);
        setAttributes({ socialItems: updatedItems });
    };

    /** Start Icon border */
    const handleSocialIconBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( socialIconBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        socialIconBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        socialIconBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        socialIconBorderMobile: {
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
                    setAttributes( {socialIconBorderDesktop: {...socialIconBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {socialIconBorderTablet: {...socialIconBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {socialIconBorderMobile: {...socialIconBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleSocialIconBorderCombineBtn = () => {
        setAttributes( {socialIconBorderLink: !socialIconBorderLink} );
    }

    const handleSocialIconBorderUnitsHandler = (unit) => {
        setAttributes( {
            socialIconBorderUnits: {
                ...socialIconBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Icon border */
    const IconBorderDesktopWidth = `${socialIconBorderDesktop.top}${socialIconBorderUnits.Desktop} ${socialIconBorderDesktop.right}${socialIconBorderUnits.Desktop} ${socialIconBorderDesktop.bottom}${socialIconBorderUnits.Desktop} ${socialIconBorderDesktop.left}${socialIconBorderUnits.Desktop}`;
    const IconBorderTabletWidth = `${socialIconBorderTablet.top}${socialIconBorderUnits.Tablet} ${socialIconBorderTablet.right}${socialIconBorderUnits.Tablet} ${socialIconBorderTablet.bottom}${socialIconBorderUnits.Tablet} ${socialIconBorderTablet.left}${socialIconBorderUnits.Tablet}`;
    const IconBorderMobileWidth = `${socialIconBorderMobile.top}${socialIconBorderUnits.Mobile} ${socialIconBorderMobile.right}${socialIconBorderUnits.Mobile} ${socialIconBorderMobile.bottom}${socialIconBorderUnits.Mobile} ${socialIconBorderMobile.left}${socialIconBorderUnits.Mobile}`;
    /** End Border */


    /** Start Icon border radius*/
    const handleSocialIconBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( socialIconBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        socialIconBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        socialIconBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        socialIconBorderRadiusMobile: {
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
                    setAttributes( {socialIconBorderRadiusDesktop: {...socialIconBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {socialIconBorderRadiusTablet: {...socialIconBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {socialIconBorderRadiusMobile: {...socialIconBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleSocialIconBorderRadiusCombineBtn = () => {
        setAttributes( {socialIconBorderRadiusLink: !socialIconBorderRadiusLink} );
    }

    const handleSocialIconBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            socialIconBorderRadiusUnits: {
                ...socialIconBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Icon Border Radius */
    const IconBorderRadiusDesktopWidth = `${socialIconBorderRadiusDesktop.top}${socialIconBorderRadiusUnits.Desktop} ${socialIconBorderRadiusDesktop.right}${socialIconBorderRadiusUnits.Desktop} ${socialIconBorderRadiusDesktop.bottom}${socialIconBorderRadiusUnits.Desktop} ${socialIconBorderRadiusDesktop.left}${socialIconBorderRadiusUnits.Desktop}`;
    const IconBorderRadiusTabletWidth = `${socialIconBorderRadiusTablet.top}${socialIconBorderRadiusUnits.Tablet} ${socialIconBorderRadiusTablet.right}${socialIconBorderRadiusUnits.Tablet} ${socialIconBorderRadiusTablet.bottom}${socialIconBorderRadiusUnits.Tablet} ${socialIconBorderRadiusTablet.left}${socialIconBorderRadiusUnits.Tablet}`;
    const IconBorderRadiusMobileWidth = `${socialIconBorderRadiusMobile.top}${socialIconBorderRadiusUnits.Mobile} ${socialIconBorderRadiusMobile.right}${socialIconBorderRadiusUnits.Mobile} ${socialIconBorderRadiusMobile.bottom}${socialIconBorderRadiusUnits.Mobile} ${socialIconBorderRadiusMobile.left}${socialIconBorderRadiusUnits.Mobile}`;
    /** End Border Radius */


    /** Start Icon padding */
	const handleSocialIconPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialIconPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialIconPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialIconPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialIconPaddingMobile: {
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
					setAttributes( {socialIconPaddingDesktop: {...socialIconPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialIconPaddingTablet: {...socialIconPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialIconPaddingMobile: {...socialIconPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSocialIconPaddingCombineBtn = () => {
		setAttributes( {socialIconPaddingLink: !socialIconPaddingLink} );
	}

    const socialIconspacingUnitsHandler = (unit) => {
        setAttributes( {
            socialIconPaddingUnits: {
                ...socialIconPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    const IconPaddingDesktop = `${socialIconPaddingDesktop.top}${socialIconPaddingUnits.Desktop} ${socialIconPaddingDesktop.right}${socialIconPaddingUnits.Desktop} ${socialIconPaddingDesktop.bottom}${socialIconPaddingUnits.Desktop} ${socialIconPaddingDesktop.left}${socialIconPaddingUnits.Desktop}`;
    const IconPaddingTablet = `${socialIconPaddingTablet.top}${socialIconPaddingUnits.Tablet} ${socialIconPaddingTablet.right}${socialIconPaddingUnits.Tablet} ${socialIconPaddingTablet.bottom}${socialIconPaddingUnits.Tablet} ${socialIconPaddingTablet.left}${socialIconPaddingUnits.Tablet}`;
    const IconPaddingMobile = `${socialIconPaddingMobile.top}${socialIconPaddingUnits.Mobile} ${socialIconPaddingMobile.right}${socialIconPaddingUnits.Mobile} ${socialIconPaddingMobile.bottom}${socialIconPaddingUnits.Mobile} ${socialIconPaddingMobile.left}${socialIconPaddingUnits.Mobile}`;
    /** End Padding */



	/** Start Title Padding */
	const handleSocialTitlePaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialTitlePaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialTitlePaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialTitlePaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialTitlePaddingMobile: {
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
					setAttributes( {socialTitlePaddingDesktop: {...socialTitlePaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialTitlePaddingTablet: {...socialTitlePaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialTitlePaddingMobile: {...socialTitlePaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSocialTitlePaddingCombineBtn = () => {
		setAttributes( {socialTitlePaddingLink: !socialTitlePaddingLink} );
	}

	const socialTitlePaddingUnitsHandler = (unit) => {
		setAttributes( {
			socialTitlePaddingUnits: {
				...socialTitlePaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const SocialTitlePaddingDesktopWidth = `${socialTitlePaddingDesktop.top}${socialTitlePaddingUnits.Desktop} ${socialTitlePaddingDesktop.right}${socialTitlePaddingUnits.Desktop} ${socialTitlePaddingDesktop.bottom}${socialTitlePaddingUnits.Desktop} ${socialTitlePaddingDesktop.left}${socialTitlePaddingUnits.Desktop}`;
	const SocialTitlePaddingTabletWidth = `${socialTitlePaddingTablet.top}${socialTitlePaddingUnits.Tablet} ${socialTitlePaddingTablet.right}${socialTitlePaddingUnits.Tablet} ${socialTitlePaddingTablet.bottom}${socialTitlePaddingUnits.Tablet} ${socialTitlePaddingTablet.left}${socialTitlePaddingUnits.Tablet}`;
	const SocialTitlePaddingMobileWidth = `${socialTitlePaddingMobile.top}${socialTitlePaddingUnits.Mobile} ${socialTitlePaddingMobile.right}${socialTitlePaddingUnits.Mobile} ${socialTitlePaddingMobile.bottom}${socialTitlePaddingUnits.Mobile} ${socialTitlePaddingMobile.left}${socialTitlePaddingUnits.Mobile}`;
	/** End Title Padding */



	/** Start Social padding */
	const handleSocialPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialPaddingLink ) { 
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialPaddingMobile: {
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
					setAttributes( {socialPaddingDesktop: {...socialPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialPaddingTablet: {...socialPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialPaddingMobile: {...socialPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSocialPaddingCombineBtn = () => {
		setAttributes( {socialPaddingLink: !socialPaddingLink} ); 
	}

	const handleSocialPaddingUnitsHandler = (unit) => {
		setAttributes( {
			socialPaddingUnits: {
				...socialPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const socialDesktopPadding    = `${socialPaddingDesktop.top}${socialPaddingUnits.Desktop} ${socialPaddingDesktop.right}${socialPaddingUnits.Desktop} ${socialPaddingDesktop.bottom}${socialPaddingUnits.Desktop} ${socialPaddingDesktop.left}${socialPaddingUnits.Desktop}`;
	const socialTabletPadding     = `${socialPaddingTablet.top}${socialPaddingUnits.Tablet} ${socialPaddingTablet.right}${socialPaddingUnits.Tablet} ${socialPaddingTablet.bottom}${socialPaddingUnits.Tablet} ${socialPaddingTablet.left}${socialPaddingUnits.Tablet}`;
	const socialMobilePadding     = `${socialPaddingMobile.top}${socialPaddingUnits.Mobile} ${socialPaddingMobile.right}${socialPaddingUnits.Mobile} ${socialPaddingMobile.bottom}${socialPaddingUnits.Mobile} ${socialPaddingMobile.left}${socialPaddingUnits.Mobile}`;
	/** End Social Padding */
	
	/** Start Social Margin */
	const handleSocialMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialMarginMobile: {
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
					setAttributes( {socialMarginDesktop: {...socialMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialMarginTablet: {...socialMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialMarginMobile: {...socialMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSocialMarginCombineBtn = () => {
		setAttributes( {socialMarginLink: !socialMarginLink} );
	}

	const handleSocialMarginUnitsHandler = (unit) => {
		setAttributes( {
			socialMarginUnits: {
				...socialMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const socialDesktopMargin    = `${socialMarginDesktop.top}${socialMarginUnits.Desktop} ${socialMarginDesktop.right}${socialMarginUnits.Desktop} ${socialMarginDesktop.bottom}${socialMarginUnits.Desktop} ${socialMarginDesktop.left}${socialMarginUnits.Desktop}`;
	const socialTabletMargin     = `${socialMarginTablet.top}${socialMarginUnits.Tablet} ${socialMarginTablet.right}${socialMarginUnits.Tablet} ${socialMarginTablet.bottom}${socialMarginUnits.Tablet} ${socialMarginTablet.left}${socialMarginUnits.Tablet}`;
	const socialMobileMargin     = `${socialMarginMobile.top}${socialMarginUnits.Mobile} ${socialMarginMobile.right}${socialMarginUnits.Mobile} ${socialMarginMobile.bottom}${socialMarginUnits.Mobile} ${socialMarginMobile.left}${socialMarginUnits.Mobile}`;
	/** End Social Margin */

	/** Start Social Border */
	const handleSocialBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialBorderMobile: {
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
					setAttributes( {socialBorderDesktop: {...socialBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialBorderTablet: {...socialBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialBorderMobile: {...socialBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSocialBorderCombineBtn = () => {
		setAttributes( {socialBorderLink: !socialBorderLink} );
	}

	const handleSocialBorderUnitsHandler = (unit) => {
		setAttributes( {
			socialBorderUnits: {
				...socialBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const socialDesktopBorderWidth = `${socialBorderDesktop.top}${socialBorderUnits.Desktop} ${socialBorderDesktop.right}${socialBorderUnits.Desktop} ${socialBorderDesktop.bottom}${socialBorderUnits.Desktop} ${socialBorderDesktop.left}${socialBorderUnits.Desktop}`;
	const socialTabletBorderWidth = `${socialBorderTablet.top}${socialBorderUnits.Tablet} ${socialBorderTablet.right}${socialBorderUnits.Tablet} ${socialBorderTablet.bottom}${socialBorderUnits.Tablet} ${socialBorderTablet.left}${socialBorderUnits.Tablet}`;
	const socialMobileBorderWidth = `${socialBorderMobile.top}${socialBorderUnits.Mobile} ${socialBorderMobile.right}${socialBorderUnits.Mobile} ${socialBorderMobile.bottom}${socialBorderUnits.Mobile} ${socialBorderMobile.left}${socialBorderUnits.Mobile}`;
	/** End Border */


	/** Start Social Border Radius*/
	const handleSocialBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialBorderRadiusMobile: {
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
					setAttributes( {socialBorderRadiusDesktop: {...socialBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialBorderRadiusTablet: {...socialBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialBorderRadiusMobile: {...socialBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSocialBorderRadiusCombineBtn = () => {
		setAttributes( {socialBorderRadiusLink: !socialBorderRadiusLink} );
	}

	const handleSocialBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			socialBorderRadiusUnits: {
				...socialBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Social Border */

	/** End Social Border Radius */
	const socialDesktopBorderRadiusWidth = `${socialBorderRadiusDesktop.top}${socialBorderRadiusUnits.Desktop} ${socialBorderRadiusDesktop.right}${socialBorderRadiusUnits.Desktop} ${socialBorderRadiusDesktop.bottom}${socialBorderRadiusUnits.Desktop} ${socialBorderRadiusDesktop.left}${socialBorderRadiusUnits.Desktop}`;
	const socialTabletBorderRadiusWidth = `${socialBorderRadiusTablet.top}${socialBorderRadiusUnits.Tablet} ${socialBorderRadiusTablet.right}${socialBorderRadiusUnits.Tablet} ${socialBorderRadiusTablet.bottom}${socialBorderRadiusUnits.Tablet} ${socialBorderRadiusTablet.left}${socialBorderRadiusUnits.Tablet}`;
	const socialMobileBorderRadiusWidth = `${socialBorderRadiusMobile.top}${socialBorderRadiusUnits.Mobile} ${socialBorderRadiusMobile.right}${socialBorderRadiusUnits.Mobile} ${socialBorderRadiusMobile.bottom}${socialBorderRadiusUnits.Mobile} ${socialBorderRadiusMobile.left}${socialBorderRadiusUnits.Mobile}`;
	/** End Border Radius */    

	/** Start Social Global padding */
	const handleGlobalPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialGlobalPaddingMobile: {
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
					setAttributes( {socialGlobalPaddingDesktop: {...socialGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialGlobalPaddingTablet: {...socialGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialGlobalPaddingMobile: {...socialGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes( {socialGlobalPaddingLink: !socialGlobalPaddingLink} );
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			socialGlobalPaddingUnits: {
				...socialGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPadding    = `${socialGlobalPaddingDesktop.top}${socialGlobalPaddingUnits.Desktop} ${socialGlobalPaddingDesktop.right}${socialGlobalPaddingUnits.Desktop} ${socialGlobalPaddingDesktop.bottom}${socialGlobalPaddingUnits.Desktop} ${socialGlobalPaddingDesktop.left}${socialGlobalPaddingUnits.Desktop}`;
	const globalTabletPadding     = `${socialGlobalPaddingTablet.top}${socialGlobalPaddingUnits.Tablet} ${socialGlobalPaddingTablet.right}${socialGlobalPaddingUnits.Tablet} ${socialGlobalPaddingTablet.bottom}${socialGlobalPaddingUnits.Tablet} ${socialGlobalPaddingTablet.left}${socialGlobalPaddingUnits.Tablet}`;
	const globalMobilePadding     = `${socialGlobalPaddingMobile.top}${socialGlobalPaddingUnits.Mobile} ${socialGlobalPaddingMobile.right}${socialGlobalPaddingUnits.Mobile} ${socialGlobalPaddingMobile.bottom}${socialGlobalPaddingUnits.Mobile} ${socialGlobalPaddingMobile.left}${socialGlobalPaddingUnits.Mobile}`;
	/** End Global Padding */
	
	/** Start Global Margin */
	const handleGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialGlobalMarginMobile: {
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
					setAttributes( {socialGlobalMarginDesktop: {...socialGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialGlobalMarginTablet: {...socialGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialGlobalMarginMobile: {...socialGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes( {socialGlobalMarginLink: !socialGlobalMarginLink} );
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
			socialGlobalMarginUnits: {
				...socialGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const globalDesktopMargin = `${socialGlobalMarginDesktop.top}${socialGlobalMarginUnits.Desktop} ${socialGlobalMarginDesktop.right}${socialGlobalMarginUnits.Desktop} ${socialGlobalMarginDesktop.bottom}${socialGlobalMarginUnits.Desktop} ${socialGlobalMarginDesktop.left}${socialGlobalMarginUnits.Desktop}`;
	const globalTabletMargin = `${socialGlobalMarginTablet.top}${socialGlobalMarginUnits.Tablet} ${socialGlobalMarginTablet.right}${socialGlobalMarginUnits.Tablet} ${socialGlobalMarginTablet.bottom}${socialGlobalMarginUnits.Tablet} ${socialGlobalMarginTablet.left}${socialGlobalMarginUnits.Tablet}`;
	const globalMobileMargin = `${socialGlobalMarginMobile.top}${socialGlobalMarginUnits.Mobile} ${socialGlobalMarginMobile.right}${socialGlobalMarginUnits.Mobile} ${socialGlobalMarginMobile.bottom}${socialGlobalMarginUnits.Mobile} ${socialGlobalMarginMobile.left}${socialGlobalMarginUnits.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialGlobalBorderMobile: {
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
					setAttributes( {socialGlobalBorderDesktop: {...socialGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialGlobalBorderTablet: {...socialGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialGlobalBorderMobile: {...socialGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {socialGlobalBorderLink: !socialGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			socialGlobalBorderUnits: {
				...socialGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${socialGlobalBorderDesktop.top}${socialGlobalBorderUnits.Desktop} ${socialGlobalBorderDesktop.right}${socialGlobalBorderUnits.Desktop} ${socialGlobalBorderDesktop.bottom}${socialGlobalBorderUnits.Desktop} ${socialGlobalBorderDesktop.left}${socialGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${socialGlobalBorderTablet.top}${socialGlobalBorderUnits.Tablet} ${socialGlobalBorderTablet.right}${socialGlobalBorderUnits.Tablet} ${socialGlobalBorderTablet.bottom}${socialGlobalBorderUnits.Tablet} ${socialGlobalBorderTablet.left}${socialGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${socialGlobalBorderMobile.top}${socialGlobalBorderUnits.Mobile} ${socialGlobalBorderMobile.right}${socialGlobalBorderUnits.Mobile} ${socialGlobalBorderMobile.bottom}${socialGlobalBorderUnits.Mobile} ${socialGlobalBorderMobile.left}${socialGlobalBorderUnits.Mobile}`;
	/** End Border */


	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialGlobalBorderRadiusMobile: {
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
					setAttributes( {socialGlobalBorderRadiusDesktop: {...socialGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialGlobalBorderRadiusTablet: {...socialGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialGlobalBorderRadiusMobile: {...socialGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {socialGlobalBorderRadiusLink: !socialGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			socialGlobalBorderRadiusUnits: {
				...socialGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${socialGlobalBorderRadiusDesktop.top}${socialGlobalBorderRadiusUnits.Desktop} ${socialGlobalBorderRadiusDesktop.right}${socialGlobalBorderRadiusUnits.Desktop} ${socialGlobalBorderRadiusDesktop.bottom}${socialGlobalBorderRadiusUnits.Desktop} ${socialGlobalBorderRadiusDesktop.left}${socialGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${socialGlobalBorderRadiusTablet.top}${socialGlobalBorderRadiusUnits.Tablet} ${socialGlobalBorderRadiusTablet.right}${socialGlobalBorderRadiusUnits.Tablet} ${socialGlobalBorderRadiusTablet.bottom}${socialGlobalBorderRadiusUnits.Tablet} ${socialGlobalBorderRadiusTablet.left}${socialGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${socialGlobalBorderRadiusMobile.top}${socialGlobalBorderRadiusUnits.Mobile} ${socialGlobalBorderRadiusMobile.right}${socialGlobalBorderRadiusUnits.Mobile} ${socialGlobalBorderRadiusMobile.bottom}${socialGlobalBorderRadiusUnits.Mobile} ${socialGlobalBorderRadiusMobile.left}${socialGlobalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */


	/** Start Social Item Color Style */
	const socialItemColorStyle = useMemo(() => {
        let style = '';
        socialItems.forEach(item => {

            if (item.socialIconColor) {
                const colorStyle = `.${blockID} .fb-social-list-item.single-item-${item.id} .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon svg {
                    fill: ${item.socialIconColor};
                }`;
                style += colorStyle;
            }
            if (item.socialIconHoverColor) {
                const hoverColorStyle = `.${blockID} .fb-social-list-item.single-item-${item.id} .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon:hover svg {
                    fill: ${item.socialIconHoverColor};
                }`;
                style += hoverColorStyle;
            }

            if (item.socialIconBgColor) {
                const bgColorStyle = `.${blockID} .fb-social-list-item.single-item-${item.id} .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon {
                    background-color: ${item.socialIconBgColor};
                }`;
                style += bgColorStyle;
            }
            if (item.socialIconHoverBgColor) {
                const hoverBgColorStyle = `.${blockID} .fb-social-list-item.single-item-${item.id} .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon:hover {
                    background-color: ${item.socialIconHoverBgColor};
                }`;
                style += hoverBgColorStyle;
            }

			/** Start Border only for preset-4 Color */
			if (socialIconsPresetStyle === 'preset-4' && item.socialIconBgColor) {
                const borderColorStyle = `.${blockID} .fb-social-list-item.single-item-${item.id} .fb-social-icon-link {
                    border-color: ${item.socialIconBgColor};
                }`;
                style += borderColorStyle;
            }
			/** End Border only for preset-4 Color */


			const normalItemBackgroundType = item.normalItemBackgroundType;
			if (normalItemBackgroundType === 'gradient') {
				const gradientStyle = `.${blockID} .fb-social-list-item.single-item-${item.id} .fb-social-icon-link {
					background: ${item.normalItemCustomGradientSwitcher && item.normalItemCustomGradientInputValue ? item.normalItemCustomGradientInputValue : item.normalItemGradientColor};
				}`;
				style += gradientStyle;

			} else {
				const classicStyle = `.${blockID} .fb-social-list-item.single-item-${item.id} .fb-social-icon-link {
					background: ${item.normalItemClassicColor};
				}`;
				style += classicStyle;
			}

			const hoverItemBackgroundType = item.hoverItemBackgroundType;
			if (hoverItemBackgroundType === 'gradient') {
				const hoverGradientStyle = `.${blockID} .fb-social-list-item.single-item-${item.id} .fb-social-icon-link:hover {
					background: ${item.hoverItemCustomGradientSwitcher && item.hoverItemCustomGradientInputValue ? item.hoverItemCustomGradientInputValue : item.hoverItemGradientColor};
				}`;
				style += hoverGradientStyle;

			} else {
				const hoverClassicStyle = `.${blockID} .fb-social-list-item.single-item-${item.id} .fb-social-icon-link:hover {
					background: ${item.hoverItemClassicColor};
				}`;
				style += hoverClassicStyle;
			}


        });
        return style;
    }, [socialItems, blockID]);


	/** Start Preset Style */
	const changeSocialIconsPreset = (selectedPreset) => {
		const presetConfigurations = {
			"preset-1": {
				socialItems: socialItems.map((item, index) => {
					switch (index) {
						case 0:
							return {
								...item,
								socialIconColor: "#1877F2",
								socialIconHoverColor: "#1877F2",
								socialIconBgColor: "#ffffff",
								socialIconHoverBgColor: "#ffffff",
								normalItemClassicColor: "",
							};
						case 1:
							return {
								...item,
								socialIconColor: "#1DA1F2",
								socialIconHoverColor: "#1DA1F2",
								socialIconBgColor: "#ffffff",
								socialIconHoverBgColor: "#ffffff",
								normalItemClassicColor: "",
							};
						case 2:
							return {
								...item,
								socialIconColor: "#E53935",
								socialIconHoverColor: "#E53935",
								socialIconBgColor: "#ffffff",
								socialIconHoverBgColor: "#ffffff",
								normalItemClassicColor: "",
							};
						case 3:
							return {
								...item,
								socialIconColor: "#1769FF",
								socialIconHoverColor: "#1769FF",
								socialIconBgColor: "#ffffff",
								socialIconHoverBgColor: "#ffffff",
								normalItemClassicColor: "",
							};
						default:
							return item;
					}
				}),

				socialIconBorderColor: "#E1E3E8",
				socialIconBorder: "solid",
				socialGapSize: {
					Desktop: 10,
					Tablet: 10,
					Mobile: 10
				},
				socialIconPaddingDesktop: {
					top: 20,
					bottom: 20,
					left: 20,
					right: 20
				},
				socialIconPaddingTablet: {
					top: 15,
					bottom: 15,
					left: 15,
					right: 15
				},
				socialIconPaddingMobile: {
					top: 10,
					bottom: 10,
					left: 10,
					right: 10
				},
				socialIconBorderDesktop: {
					top: 1,
					bottom: 1,
					left: 1,
					right: 1,
				},
				socialIconBorderTablet: {
					top: 1,
					bottom: 1,
					left: 1,
					right: 1,
				},
				socialIconBorderMobile: {
					top: 1,
					bottom: 1,
					left: 1,
					right: 1,
				},
				socialIconBorderRadiusDesktop: {
					top: 50,
					bottom: 50,
					left: 50,
					right: 50
				},
				socialIconBorderRadiusTablet: {
					top: 50,
					bottom: 50,
					left: 50,
					right: 50
				},
				socialIconBorderRadiusMobile: {
					top: 50,
					bottom: 50,
					left: 50,
					right: 50
				},
				socialTitleSwitcher: false,
				socialBorder: "none	",
				socialBorderDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialBorderRadiusDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialBorderRadiusTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialBorderRadiusMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitleColor : "#15171C",
				socialTitleFontWeight : "500",
				socialTitleFontSize : {
					Desktop: "18",
					Tablet: "18",
					Mobile: "16"
				},
				socialTitleLineHeight : {
					Desktop: "25",
					Tablet: "25",
					Mobile: "25"
				},
				socialTitlePaddingDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitlePaddingTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitlePaddingMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
			},
			"preset-2": {
				socialItems: socialItems.map((item, index) => {
					switch (index) {
						case 0:
							return {
								...item,
								socialIconColor: "#ffffff",
								socialIconHoverColor: "#ffffff",
								socialIconBgColor: "#1877F2",
								socialIconHoverBgColor: "#1877F2",
								normalItemClassicColor: "",
							};
						case 1:
							return {
								...item,
								socialIconColor: "#ffffff",
								socialIconHoverColor: "#ffffff",
								socialIconBgColor: "#1DA1F2",
								socialIconHoverBgColor: "#1DA1F2",
								normalItemClassicColor: "",
							};
						case 2:
							return {
								...item,
								socialIconColor: "#ffffff",
								socialIconHoverColor: "#ffffff",
								socialIconBgColor: "#E53935",
								socialIconHoverBgColor: "#E53935",
								normalItemClassicColor: "",
							};
						case 3:
							return {
								...item,
								socialIconColor: "#ffffff",
								socialIconHoverColor: "#ffffff",
								socialIconBgColor: "#1769FF",
								socialIconHoverBgColor: "#1769FF",
								normalItemClassicColor: "",
							};
						default:
							return item;
					}
				}),
				socialIconBorderColor: "",
				socialIconBorder: "none",
				socialGapSize: {
					Desktop: 10,
					Tablet: 10,
					Mobile: 10
				},
				socialIconPaddingDesktop: {
					top: 20,
					bottom: 20,
					left: 20,
					right: 20
				},
				socialIconPaddingTablet: {
					top: 15,
					bottom: 15,
					left: 15,
					right: 15
				},
				socialIconPaddingMobile: {
					top: 10,
					bottom: 10,
					left: 10,
					right: 10
				},
				socialIconBorderDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderRadiusDesktop: {
					top: 50,
					bottom: 50,
					left: 50,
					right: 50
				},
				socialIconBorderRadiusTablet: {
					top: 50,
					bottom: 50,
					left: 50,
					right: 50
				},
				socialIconBorderRadiusMobile: {
					top: 50,
					bottom: 50,
					left: 50,
					right: 50
				},
				socialTitleSwitcher: false,
				socialBorder: "none	",
				socialBorderDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialBorderRadiusDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialBorderRadiusTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialBorderRadiusMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitleColor : "#15171C",
				socialTitleFontWeight : "500",
				socialTitleFontSize : {
					Desktop: "18",
					Tablet: "18",
					Mobile: "16"
				},
				socialTitleLineHeight : {
					Desktop: "25",
					Tablet: "25",
					Mobile: "25"
				},
				socialTitlePaddingDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitlePaddingTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitlePaddingMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
			},
			"preset-3": {
				socialItems: socialItems.map((item, index) => {
					switch (index) {
						case 0:
							return {
								...item,
								socialIconColor: "#FFFFFF",
								socialIconHoverColor: "#FFFFFF",
								socialIconBgColor: "",
								socialIconHoverBgColor: "",
								normalItemClassicColor: "#1877F2",
							};
						case 1:
							return {
								...item,
								socialIconColor: "#FFFFFF",
								socialIconHoverColor: "#FFFFFF",
								socialIconBgColor: "",
								socialIconHoverBgColor: "",
								normalItemClassicColor: "#1DA1F2",
							};
						case 2:
							return {
								...item,
								socialIconColor: "#FFFFFF",
								socialIconHoverColor: "#FFFFFF",
								socialIconBgColor: "",
								socialIconHoverBgColor: "",
								normalItemClassicColor: "#E53935",
							};
						case 3:
							return {
								...item,
								socialIconColor: "#FFFFFF",
								socialIconHoverColor: "#FFFFFF",
								socialIconBgColor: "",
								socialIconHoverBgColor: "",
								normalItemClassicColor: "#1769FF",
							};
						default:
							return item;
					}
				}),
				socialIconBorderColor: "",
				socialIconBorder: "none",
				socialGapSize: {
					Desktop: 10,
					Tablet: 10,
					Mobile: 10
				},
				socialIconPaddingDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 10
				},
				socialIconPaddingTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 10
				},
				socialIconPaddingMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 10
				},
				socialIconBorderDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderRadiusDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialIconBorderRadiusTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialIconBorderRadiusMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitleSwitcher: true,
				socialBorder: "none	",
				socialBorderDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialBorderRadiusDesktop: {
					top: 4,
					bottom: 4,
					left: 4,
					right: 4
				},
				socialBorderRadiusTablet: {
					top: 4,
					bottom: 4,
					left: 4,
					right: 4
				},
				socialBorderRadiusMobile: {
					top: 4,
					bottom: 4,
					left: 4,
					right: 4
				},
				socialPaddingDesktop: {
					top: 12,
					bottom: 12,
					left: 14,
					right: 14
				},
				socialPaddingTablet: {
					top: 12,
					bottom: 12,
					left: 14,
					right: 14
				},
				socialPaddingMobile: {
					top: 10,
					bottom: 10,
					left: 12,
					right: 12
				},
				socialTitleColor : "#FFFFFF",
				socialTitleFontWeight : "500",
				socialTitleFontSize : {
					Desktop: "18",
					Tablet: "16",
					Mobile: "14"
				},
				socialTitleLineHeight : {
					Desktop: "25",
					Tablet: "25",
					Mobile: "20"
				},
				socialTitlePaddingDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitlePaddingTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitlePaddingMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
			},
			"preset-4": {
				socialItems: socialItems.map((item, index) => {
					switch (index) {
						case 0:
							return {
								...item,
								socialIconColor: "#FFFFFF",
								socialIconHoverColor: "#FFFFFF",
								socialIconBgColor: "#1877F2",
								socialIconHoverBgColor: "#1877F2",
								normalItemClassicColor: "",
							};
						case 1:
							return {
								...item,
								socialIconColor: "#FFFFFF",
								socialIconHoverColor: "#FFFFFF",
								socialIconBgColor: "#1DA1F2",
								socialIconHoverBgColor: "#1DA1F2",
								normalItemClassicColor: "",
							};
						case 2:
							return {
								...item,
								socialIconColor: "#FFFFFF",
								socialIconHoverColor: "#FFFFFF",
								socialIconBgColor: "#E53935",
								socialIconHoverBgColor: "#E53935",
								normalItemClassicColor: "",
							};
						case 3:
							return {
								...item,
								socialIconColor: "#FFFFFF",
								socialIconHoverColor: "#FFFFFF",
								socialIconBgColor: "#1769FF",
								socialIconHoverBgColor: "#1769FF",
								normalItemClassicColor: "",
							};
						default:
							return item;
					}
				}),
				socialIconBorderColor: "",
				socialIconBorder: "none",
				socialGapSize: {
					Desktop: 10,
					Tablet: 10,
					Mobile: 10
				},
				socialIconPaddingDesktop: {
					top: 15,
					bottom: 15,
					left: 15,
					right: 15
				},
				socialIconPaddingTablet: {
					top: 10,
					bottom: 10,
					left: 10,
					right: 10
				},
				socialIconPaddingMobile: {
					top: 10,
					bottom: 10,
					left: 10,
					right: 10
				},
				socialIconBorderDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderRadiusDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialIconBorderRadiusTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialIconBorderRadiusMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitleSwitcher: true,
				socialBorder: "solid",
				socialBorderDesktop: {
					top: 1,
					bottom: 1,
					left: 1,
					right: 1,
				},
				socialBorderRadiusDesktop: {
					top: 4,
					bottom: 4,
					left: 4,
					right: 4
				},
				socialBorderRadiusTablet: {
					top: 4,
					bottom: 4,
					left: 4,
					right: 4
				},
				socialBorderRadiusMobile: {
					top: 4,
					bottom: 4,
					left: 4,
					right: 4
				},
				socialPaddingDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitleColor : "#15171C",
				socialTitleFontWeight : "500",
				socialTitleFontSize : {
					Desktop: "18",
					Tablet: "14",
					Mobile: "14"
				},
				socialTitleLineHeight : {
					Desktop: "25",
					Tablet: "25",
					Mobile: "20"
				},
				socialTitlePaddingDesktop: {
					top: 12,
					bottom: 12,
					left: 8,
					right: 15
				},
				socialTitlePaddingTablet: {
					top: 7,
					bottom: 7,
					left: 7,
					right: 10
				},
				socialTitlePaddingMobile: {
					top: 7,
					bottom: 7,
					left: 7,
					right: 10
				},
			},
			"preset-5": {
				socialItems: socialItems.map((item, index) => {
					switch (index) {
						case 0:
							return {
								...item,
								socialIconColor: "#1877F2",
								socialIconHoverColor: "#1877F2",
								socialIconBgColor: "",
								socialIconHoverBgColor: "",
								normalItemClassicColor: "",
							};
						case 1:
							return {
								...item,
								socialIconColor: "#1DA1F2",
								socialIconHoverColor: "#1DA1F2",
								socialIconBgColor: "",
								socialIconHoverBgColor: "",
								normalItemClassicColor: "",
							};
						case 2:
							return {
								...item,
								socialIconColor: "#E53935",
								socialIconHoverColor: "#E53935",
								socialIconBgColor: "",
								socialIconHoverBgColor: "",
								normalItemClassicColor: "",
							};
						case 3:
							return {
								...item,
								socialIconColor: "#1769FF",
								socialIconHoverColor: "#1769FF",
								socialIconBgColor: "",
								socialIconHoverBgColor: "",
								normalItemClassicColor: "",
							};
						default:
							return item;
					}
				}),
				socialIconBorderColor: "",
				socialIconBorder: "none",
				socialGapSize: {
					Desktop: 40,
					Tablet: 30,
					Mobile: 20
				},
				socialIconPaddingDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 10
				},
				socialIconPaddingTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 10
				},
				socialIconPaddingMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 10
				},
				socialIconBorderDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderRadiusDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialIconBorderRadiusTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialIconBorderRadiusMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitleSwitcher: true,
				socialBorder: "none	",
				socialBorderDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialBorderRadiusDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialBorderRadiusTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialBorderRadiusMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitleColor : "#15171C",
				socialTitleColor : "#15171C",
				socialTitleFontWeight : "500",
				socialTitleFontSize : {
					Desktop: "18",
					Tablet: "16",
					Mobile: "14"
				},
				socialTitleLineHeight : {
					Desktop: "25",
					Tablet: "25",
					Mobile: "20"
				},
				socialTitlePaddingDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitlePaddingTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitlePaddingMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
			},
			"preset-6": {
				socialItems: socialItems.map((item, index) => {
					switch (index) {
						case 0:
							return {
								...item,
								socialIconColor: "#FFFFFF",
								socialIconHoverColor: "#FFFFFF",
								socialIconBgColor: "#15171C",
								socialIconHoverBgColor: "#15171C",
								normalItemClassicColor: "",
							};
						case 1:
							return {
								...item,
								socialIconColor: "#FFFFFF",
								socialIconHoverColor: "#FFFFFF",
								socialIconBgColor: "#15171C",
								socialIconHoverBgColor: "#15171C",
								normalItemClassicColor: "",
							};
						case 2:
							return {
								...item,
								socialIconColor: "#FFFFFF", 
								socialIconHoverColor: "#FFFFFF",
								socialIconBgColor: "#15171C",
								socialIconHoverBgColor: "#15171C",
								normalItemClassicColor: "",
							};
						case 3:
							return {
								...item,
								socialIconColor: "#FFFFFF",
								socialIconHoverColor: "#FFFFFF",
								socialIconBgColor: "#15171C",
								socialIconHoverBgColor: "#15171C",
								normalItemClassicColor: "",
							};
						default:
							return item;
					}
				}),
				socialIconBorder: "none",
				socialIconBorderColor: "",
				socialGapSize: {
					Desktop: 10,
					Tablet: 10,
					Mobile: 10
				},
				socialIconPaddingDesktop: {
					top: 20,
					bottom: 20,
					left: 30,
					right: 30
				},
				socialIconPaddingTablet: {
					top: 15,
					bottom: 15,
					left: 25,
					right: 25
				},
				socialIconPaddingMobile: {
					top: 10,
					bottom: 10,
					left: 15,
					right: 15
				},
				socialIconBorderDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialIconBorderRadiusDesktop: {
					top: 5,
					bottom: 5,
					left: 5,
					right: 5
				},
				socialIconBorderRadiusTablet: {
					top: 5,
					bottom: 5,
					left: 5,
					right: 5
				},
				socialIconBorderRadiusMobile: {
					top: 5,
					bottom: 5,
					left: 5,
					right: 5
				},
				socialTitleSwitcher: false,
				socialBorder: "none	",
				socialBorderDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
				socialBorderRadiusDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialBorderRadiusTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialBorderRadiusMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialPaddingMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitleColor : "#15171C",
				socialTitleColor : "#15171C",
				socialTitleFontWeight : "500",
				socialTitleFontSize : {
					Desktop: "18",
					Tablet: "18",
					Mobile: "16"
				},
				socialTitleLineHeight : {
					Desktop: "25",
					Tablet: "25",
					Mobile: "25"
				},
				socialTitlePaddingDesktop: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitlePaddingTablet: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				socialTitlePaddingMobile: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
			},
		};

		const selectedPresetConfig = presetConfigurations[selectedPreset];

		if (selectedPresetConfig) {
			setAttributes({
				socialIconsPresetStyle: selectedPreset,
				...selectedPresetConfig,
			});
		} else {
			console.warn(`Social Icons: Preset "${selectedPreset}" not found.`);
		}
	};
	/** End Preset Style */


	/** Start load font */
	useEffect(() => {
		loadGoogleFont(socialTitleFontFamily);
	}, [socialTitleFontFamily]);
	/** End load font */


		const allBlockStyle = useMemo(() => `
			.${blockID}.fb-social-wrapper {
				${socialGlobalZIndex.Desktop ? `z-index: ${socialGlobalZIndex.Desktop};` : ''}
				${socialGlobalBgColor ? `background-color: ${socialGlobalBgColor};` : ''} 
				${globalDesktopPadding ? `padding: ${globalDesktopPadding};` : ''}
				${globalDesktopMargin ? `margin: ${globalDesktopMargin};` : ''} 
				${socialGlobalBorder ? `border: ${socialGlobalBorder};` : ''} 
				${globalDesktopBorderWidth ? `border-width: ${globalDesktopBorderWidth};` : ''}
				${globalDesktopBorderRadiusWidth ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
				${socialGlobalBorderColor ? `border-color: ${socialGlobalBorderColor};` : ''}
				${socialGlobalBoxShadowCssValue ? `box-shadow: ${socialGlobalBoxShadowCssValue};` : ''}
				transition: all .3s ease-in-out;
				position: relative;
			}
			.${blockID}.fb-social-wrapper:hover {
				${socialGlobalBgHoverColor ? `background-color: ${socialGlobalBgHoverColor};` : ''}
				${socialGlobalBorderHoverColor ? `border-color: ${socialGlobalBorderHoverColor};` : ''}
			}
			.${blockID} .fb-socials {
				grid-gap: ${socialGapSize.Desktop}${socialGapUnits.Desktop};
				justify-content: ${socialAlignment};
			}
			.${blockID} .fb-social-list-item .fb-social-icon-link{
				${socialBgColor ? `background-color: ${socialBgColor};` : ''} 
				${socialDesktopPadding ? `padding: ${socialDesktopPadding};` : ''}
				${socialDesktopMargin ? `margin: ${socialDesktopMargin};` : ''}
				${socialBorder ? `border: ${socialBorder};` : ''}  
				${socialDesktopBorderWidth ? `border-width: ${socialDesktopBorderWidth};` : ''}
				${socialDesktopBorderRadiusWidth ? `border-radius: ${socialDesktopBorderRadiusWidth};` : ''}
				${socialBorderColor ? `border-color: ${socialBorderColor};` : ''}
				transition: all .3s ease-in-out;
			}
			.${blockID} .fb-social-list-item .fb-social-icon-link:hover {
				${socialBgHoverColor ? `background-color: ${socialBgHoverColor};` : ''}
				${socialBorderHoverColor ? `border-color: ${socialBorderHoverColor};` : ''}
			}
			.${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon {
				${socialIconBgGlobalColor ? `background-color: ${socialIconBgGlobalColor};` : ''} 
				${IconPaddingDesktop ? `padding: ${IconPaddingDesktop};` : ''}
				${socialIconBorder ? `border: ${socialIconBorder};` : ''} 
				${IconBorderDesktopWidth ? `border-width: ${IconBorderDesktopWidth};` : ''}
				${IconBorderRadiusDesktopWidth ? `border-radius: ${IconBorderRadiusDesktopWidth};` : ''}
				${socialIconBorderColor ? `border-color: ${socialIconBorderColor};` : ''}
			}
			.${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon:hover {
				background-color: ${socialIconBgGlobalHoverColor};
				${socialIconBorderHoverColor ? `border-color: ${socialIconBorderHoverColor};` : ''}
			}
			.${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon svg{
				width: ${socialIconSize.Desktop}${socialIconSizeUnits.Desktop};
				height: ${socialIconSize.Desktop}${socialIconSizeUnits.Desktop};
			}
			.${blockID} .fb-social-list-item .fb-social-icon-link svg{
				fill: ${socialIconGlobalColor};
			}
			.${blockID} .fb-social-list-item .fb-social-icon-link:hover svg{
				fill: ${socialIconGlobalHoverColor};
			}
			.${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-title {
				${socialTitleFontFamily ? `font-family: ${socialTitleFontFamily};` : ''}
				${socialTitleFontSize.Desktop && socialTitleFontSizeUnits.Desktop ? `font-size: ${socialTitleFontSize.Desktop}${socialTitleFontSizeUnits.Desktop};` : ''}
				${socialTitleFontWeight ? `font-weight: ${socialTitleFontWeight};` : ''}
				${socialTitleFontStyle ? `font-style: ${socialTitleFontStyle};` : ''}
				${socialTitleTextTransform ? `text-transform: ${socialTitleTextTransform};` : ''}
				${socialTitleTextDecoration ? `text-decoration: ${socialTitleTextDecoration};` : ''}
				${socialTitleLetterSpacing.Desktop && socialTitleLetterSpacingUnits.Desktop ? `letter-spacing: ${socialTitleLetterSpacing.Desktop}${socialTitleLetterSpacingUnits.Desktop};` : ''}
				${socialTitleLineHeight.Desktop && socialTitleLineHeightUnits.Desktop ? `line-height: ${socialTitleLineHeight.Desktop}${socialTitleLineHeightUnits.Desktop};` : ''}
				${socialTitleColor ? `color: ${socialTitleColor};` : ''}
				${SocialTitlePaddingDesktopWidth ? `padding: ${SocialTitlePaddingDesktopWidth};` : ''}
			}
			.${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-title:hover {
				color: ${socialTitleHoverColor};
			}
			@media only screen and (max-width: 1024px) {
				.${blockID}.fb-social-wrapper {
					${socialGlobalZIndex.Tablet ? `z-index: ${socialGlobalZIndex.Tablet};` : ''}
					${globalTabletPadding ? `padding: ${globalTabletPadding};` : ''}
					${globalTabletMargin ? `margin: ${globalTabletMargin};` : ''} 
					${globalTabletBorderWidth ? `border-width: ${globalTabletBorderWidth};` : ''}
					${globalTabletBorderRadiusWidth ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
				}
				.${blockID} .fb-socials {
					grid-gap: ${socialGapSize.Tablet}${socialGapUnits.Tablet}; 
				}

				.${blockID} .fb-social-list-item .fb-social-icon-link{
					${socialTabletPadding ? `padding: ${socialTabletPadding};` : ''}
					${socialTabletMargin ? `margin: ${socialTabletMargin};` : ''}
					${socialTabletBorderWidth ? `border-width: ${socialTabletBorderWidth};` : ''}
					${socialTabletBorderRadiusWidth ? `border-radius: ${socialTabletBorderRadiusWidth};` : ''}
				}

				.${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon {
					${IconPaddingTablet ? `padding: ${IconPaddingTablet};` : ''}
					${IconBorderTabletWidth ? `border-width: ${IconBorderTabletWidth};` : ''}
					${IconBorderRadiusTabletWidth ? `border-radius: ${IconBorderRadiusTabletWidth};` : ''}
				}

				.${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon svg{
					width: ${socialIconSize.Tablet}${socialIconSizeUnits.Tablet}; 
					height: ${socialIconSize.Tablet}${socialIconSizeUnits.Tablet};
				}

				.${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-title {
					${socialTitleFontSize.Tablet && socialTitleFontSizeUnits.Tablet ? `font-size: ${socialTitleFontSize.Tablet}${socialTitleFontSizeUnits.Tablet};` : ''}
					${socialTitleLineHeight.Tablet && socialTitleLineHeightUnits.Tablet ? `line-height: ${socialTitleLineHeight.Tablet}${socialTitleLineHeightUnits.Tablet};` : ''}
					${socialTitleLetterSpacing.Tablet && socialTitleLetterSpacingUnits.Tablet ? `letter-spacing: ${socialTitleLetterSpacing.Tablet}${socialTitleLetterSpacingUnits.Tablet};` : ''}
					${SocialTitlePaddingTabletWidth ? `padding: ${SocialTitlePaddingTabletWidth};` : ''}
				}	
			}
			@media only screen and (max-width: 767px) {
				.${blockID}.fb-social-wrapper {
					${socialGlobalZIndex.Mobile ? `z-index: ${socialGlobalZIndex.Mobile};` : ''}
					${globalMobilePadding ? `padding: ${globalMobilePadding};` : ''}
					${globalMobileMargin ? `margin: ${globalMobileMargin};` : ''} 
					${globalMobileBorderWidth ? `border-width: ${globalMobileBorderWidth};` : ''}
					${globalMobileBorderRadiusWidth ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
				}
				.${blockID} .fb-socials {
					grid-gap: ${socialGapSize.Mobile}${socialGapUnits.Mobile};
				}
				.${blockID} .fb-social-list-item .fb-social-icon-link{
					${socialMobilePadding ? `padding: ${socialMobilePadding};` : ''}
					${socialMobileMargin ? `margin: ${socialMobileMargin};` : ''}
					${socialMobileBorderWidth ? `border-width: ${socialMobileBorderWidth};` : ''}
					${socialMobileBorderRadiusWidth ? `border-radius: ${socialMobileBorderRadiusWidth};` : ''}
				}
				.${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon {
					${IconPaddingMobile ? `padding: ${IconPaddingMobile};` : ''}
					${IconBorderMobileWidth ? `border-width: ${IconBorderMobileWidth};` : ''}
					${IconBorderRadiusMobileWidth ? `border-radius: ${IconBorderRadiusMobileWidth};` : ''}
				}
				.${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon svg{
					width: ${socialIconSize.Mobile}${socialIconSizeUnits.Mobile}; 
					height: ${socialIconSize.Mobile}${socialIconSizeUnits.Mobile};
				}
				.${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-title {
					${socialTitleFontSize.Mobile && socialTitleFontSizeUnits.Mobile ? `font-size: ${socialTitleFontSize.Mobile}${socialTitleFontSizeUnits.Mobile};` : ''}
					${socialTitleLineHeight.Mobile && socialTitleLineHeightUnits.Mobile ? `line-height: ${socialTitleLineHeight.Mobile}${socialTitleLineHeightUnits.Mobile};` : ''}
					${socialTitleLetterSpacing.Mobile && socialTitleLetterSpacingUnits.Mobile ? `letter-spacing: ${socialTitleLetterSpacing.Mobile}${socialTitleLetterSpacingUnits.Mobile};` : ''}
					${SocialTitlePaddingMobileWidth ? `padding: ${SocialTitlePaddingMobileWidth};` : ''}
				}
			}
		`, [
			blockID,
			socialGlobalZIndex,
			socialGlobalBgColor,
			globalDesktopPadding,
			globalDesktopMargin,
			socialGlobalBorder,
			globalDesktopBorderWidth,
			globalDesktopBorderRadiusWidth,
			socialGlobalBorderColor,
			socialGlobalBoxShadowCssValue,
			socialGlobalBgHoverColor,
			socialGlobalBorderHoverColor,
			socialGapSize,
			socialGapUnits,
			socialAlignment,
			socialBgColor,
			socialDesktopPadding,
			socialTabletPadding,
			socialMobilePadding,
			socialDesktopMargin,
			socialTabletMargin,
			socialMobileMargin,
			socialBorder,
			socialDesktopBorderWidth,
			socialDesktopBorderRadiusWidth,
			socialBorderColor,
			socialBgHoverColor,
			socialBorderHoverColor,
			socialIconBgGlobalColor,
			IconPaddingDesktop,
			socialIconBorder,
			IconBorderDesktopWidth,
			IconBorderRadiusDesktopWidth,
			socialIconBorderColor,
			socialIconBgGlobalHoverColor,
			socialIconBorderHoverColor,
			socialIconSize,
			socialIconSizeUnits,
			socialIconGlobalColor,
			socialIconGlobalHoverColor,
			socialTitleFontFamily,
			socialTitleFontSize,
			socialTitleFontSizeUnits,
			socialTitleFontWeight,
			socialTitleFontStyle,
			socialTitleTextTransform,
			socialTitleTextDecoration,
			socialTitleLetterSpacing,
			socialTitleLetterSpacingUnits,
			socialTitleLineHeight,
			socialTitleLineHeightUnits,
			socialTitleColor,
			socialTitleHoverColor,
			globalTabletPadding,
			globalTabletMargin,
			globalTabletBorderWidth,
			globalTabletBorderRadiusWidth,
			IconPaddingTablet,
			IconBorderTabletWidth,
			IconBorderRadiusTabletWidth,
			globalMobilePadding,
			globalMobileMargin,
			globalMobileBorderWidth,
			globalMobileBorderRadiusWidth,
			IconPaddingMobile,
			IconBorderMobileWidth,
			IconBorderRadiusMobileWidth,
			SocialTitlePaddingDesktopWidth,
			SocialTitlePaddingTabletWidth,
			SocialTitlePaddingMobileWidth,
			socialIconsPresetStyle,
			socialItems
		]);

		useEffect(() => {
			setAttributes({blockStyle: `${socialItemColorStyle}${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
		}, [socialItemColorStyle, allBlockStyle]);

		const editorStyle = socialItemColorStyle + allBlockStyle.replace(/\s+/g, ' ').trim();
    

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
                                className: "fb-tab advanced",
                            },
                        ]}
                    >
                        {(tab) => (
                            <div className={"fb-tab-controls" + tab.name}>
                                {tab.name === 'general' && (
                                    <>
                                        <PanelBody title={__("General Info", "frontis-blocks")} initialOpen={true}>
											<SelectControl
                                                label={__("Preset Style", "frontis-blocks")}
                                                value={socialIconsPresetStyle}
                                                options={PRESETS}
                                                onChange={(selected) => changeSocialIconsPreset(selected)}
                                            />
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
                                                            onClick={() => setAttributes({ socialAlignment: item.value })}
                                                            className={`fb-setting-text-alignment-single-btn ${socialAlignment === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            <BaseControl
                                                label={__("Social Items", "frontis-blocks")}
                                            >
                                                <div className="fb-Social-wrapper">
                                                    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                                                        <SortableContext items={socialItems.map(item => item.id)}>
                                                            <ul className='dnd-items-wrapper'>
                                                                {socialItems.map((item, index) => (
                                                                    <SortableItem
                                                                        key={item.id}
                                                                        id={item.id}
                                                                        item={item}
                                                                        handleChangeItem={handleChangeItem}
                                                                        handleDeleteItem={handleDeleteItem}
                                                                        index={index}
                                                                    />
                                                                ))}
                                                            </ul>
                                                        </SortableContext>
                                                    </DndContext>
                                                    <Button isPrimary onClick={handleAddItem}>
                                                        {__("Add Social Item", "frontis-blocks")}
                                                    </Button>
                                                </div>
                                            </BaseControl>
                                        </PanelBody>

                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Icon", "frontis-blocks")} initialOpen={true}>
                                            <FB_Range
                                                min={1}
                                                max={300}
                                                label={__("Icon Size", "frontis-blocks")}
                                                rangeValue={socialIconSize}
                                                onChangeHandler={(value) => setAttributes({ socialIconSize: value })}
                                                rangeUnitHandler={(value) => setAttributes({ socialIconSizeUnits: value })}
                                                deviceType={deviceType}
                                                units={socialIconSizeUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={25}
                                            />

											<FB_SwitcherControl
													label={__("Icon Color", "frontis-blocks")}
													globalSwitcher={socialIconGlobalColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ socialIconGlobalColorSwitcher: value })}
											/>

											{socialIconGlobalColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={socialIconGlobalColor}
													setGlobalColor={(value) => setAttributes({ socialIconGlobalColor: value })}
												/>
											)}

											{socialIconGlobalColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={socialIconGlobalHoverColor}
													setGlobalColor={(value) => setAttributes({ socialIconGlobalHoverColor: value })}
												/>
											)}

											<FB_SwitcherControl
													label={__("Background Color", "frontis-blocks")}
													globalSwitcher={socialIconBgGlobalColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ socialIconBgGlobalColorSwitcher: value })}
											/>

											{socialIconBgGlobalColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={socialIconBgGlobalColor}
													setGlobalColor={(value) => setAttributes({ socialIconBgGlobalColor: value })}
												/>
											)}

											{socialIconBgGlobalColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={socialIconBgGlobalHoverColor}
													setGlobalColor={(value) => setAttributes({ socialIconBgGlobalHoverColor: value })}
												/>
											)}

                                            <SelectControl
                                                label={__("Border Style", "frontis-blocks")}
                                                value={socialIconBorder}
                                                options={BORDER_STYLES}
                                                onChange={(value) => setAttributes({ socialIconBorder: value })}
                                            />

											<FB_SwitcherControl
													label={__("Border Color", "frontis-blocks")}
													globalSwitcher={socialIconBorderColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ socialIconBorderColorSwitcher: value })}
											/>

											{socialIconBorderColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={socialIconBorderColor}
													setGlobalColor={(value) => setAttributes({ socialIconBorderColor: value })}
												/>
											)}

											{socialIconBorderColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={socialIconBorderHoverColor}
													setGlobalColor={(value) => setAttributes({ socialIconBorderHoverColor: value })}
												/>
											)}

                                            <FB_Spacing 
                                                label={__("Border", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleSocialIconBorderUnitsHandler}
                                                spacingUnits={socialIconBorderUnits}
                                                spacingDesktop={socialIconBorderDesktop}
                                                spacingTablet={socialIconBorderTablet}
                                                spacingMobile={socialIconBorderMobile}
                                                handleSpacingUnitHandler={handleSocialIconBorderUnitChange}
                                                spacingCombineBtn={socialIconBorderLink}
                                                spacingCombineBtnHandler={handleSocialIconBorderCombineBtn}
                                                setAttributes={setAttributes}
                                            />
                                            <FB_Spacing 
                                                label={__("Radius Border", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleSocialIconBorderRadiusUnitsHandler}
                                                spacingUnits={socialIconBorderRadiusUnits}
                                                spacingDesktop={socialIconBorderRadiusDesktop}
                                                spacingTablet={socialIconBorderRadiusTablet}
                                                spacingMobile={socialIconBorderRadiusMobile}
                                                handleSpacingUnitHandler={handleSocialIconBorderRadiusUnitChange}
                                                spacingCombineBtn={socialIconBorderRadiusLink}
                                                spacingCombineBtnHandler={handleSocialIconBorderRadiusCombineBtn}
                                                setAttributes={setAttributes}
                                            />
											<FB_Spacing 
                                                label={__("Padding", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={socialIconspacingUnitsHandler}
                                                spacingUnits={socialIconPaddingUnits}
                                                spacingDesktop={socialIconPaddingDesktop}
                                                spacingTablet={socialIconPaddingTablet}
                                                spacingMobile={socialIconPaddingMobile}
                                                handleSpacingUnitHandler={handleSocialIconPaddingUnitChange}
                                                spacingCombineBtn={socialIconPaddingLink}
                                                spacingCombineBtnHandler={handleSocialIconPaddingCombineBtn}
                                                setAttributes={setAttributes}
                                            />
                                        </PanelBody>
                                        <PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>
                                            <ToggleControl
                                                label={__("Title Switcher", "frontis-blocks")}
                                                checked={socialTitleSwitcher}
                                                onChange={(value) => setAttributes({ socialTitleSwitcher: value })}
                                            />

											{socialTitleSwitcher && (
												<>
													<FB_TypographyControl
														fontFamily={socialTitleFontFamily}
														onChangeFontFamily={(value) => setAttributes({ socialTitleFontFamily: value })}

														fontSize={socialTitleFontSize}
														onChangeFontSize={(value) => setAttributes({ socialTitleFontSize: value })}

														fontSizeUnits={socialTitleFontSizeUnits}
														onChangeFontSizeUnit={(value) => setAttributes({ socialTitleFontSizeUnits: value })}

														fontWeight={socialTitleFontWeight}
														onChangeFontWeight={(value) => setAttributes({ socialTitleFontWeight: value })}

														fontStyle={socialTitleFontStyle}
														onChangeFontStyle={(value) => setAttributes({ socialTitleFontStyle: value })}

														textTransform={socialTitleTextTransform}
														onChangeTextTransform={(value) => setAttributes({ socialTitleTextTransform: value })}

														textDecoration={socialTitleTextDecoration}
														onChangeTextDecoration={(value) => setAttributes({ socialTitleTextDecoration: value })}

														letterSpacing={socialTitleLetterSpacing}
														onChangeLetterSpacing={(value) => setAttributes({ socialTitleLetterSpacing: value })}

														letterSpacingUnits={socialTitleLetterSpacingUnits}
														onChangeLetterSpacingUnit={(value) => setAttributes({ socialTitleLetterSpacingUnits: value })}

														lineHeight={socialTitleLineHeight}
														onChangeLineHeight={(value) => setAttributes({ socialTitleLineHeight: value })}

														lineHeightUnits={socialTitleLineHeightUnits}
														onChangeLineHeightUnit={(value) => setAttributes({ headingLineHeightUnits: value })}

														deviceType={deviceType}
														setAttributes={setAttributes}
													/>

													<FB_SwitcherControl
															label={__("Title Color", "frontis-blocks")}
															globalSwitcher={socialTitleColorSwitcher}
															setGlobalSwitcher={(value) => setAttributes({ socialTitleColorSwitcher: value })}
													/>

													{socialTitleColorSwitcher === 'normal' && (
														<FB_ColorControl
															label={__("Normal Color", "frontis-blocks")}
															globalColor={socialTitleColor}
															setGlobalColor={(value) => setAttributes({ socialTitleColor: value })}
														/>
													)}

													{socialTitleColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={socialTitleHoverColor}
															setGlobalColor={(value) => setAttributes({ socialTitleHoverColor: value })}
														/>
													)}

													<FB_Spacing 
														label={__("Padding", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={socialTitlePaddingUnitsHandler}
														spacingUnits={socialTitlePaddingUnits}
														spacingDesktop={socialTitlePaddingDesktop}
														spacingTablet={socialTitlePaddingTablet}
														spacingMobile={socialTitlePaddingMobile}
														handleSpacingUnitHandler={handleSocialTitlePaddingUnitChange}
														spacingCombineBtn={socialTitlePaddingLink}
														spacingCombineBtnHandler={handleSocialTitlePaddingCombineBtn}
														setAttributes={setAttributes}
													/>
												</>
											)}

                                        </PanelBody>

                                        <PanelBody 
											title={__("Background", "frontis-blocks")}
											initialOpen={false}
										>

											<FB_SwitcherControl
												label={__("Background Color", "frontis-blocks")}
												globalSwitcher={socialBgColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ socialBgColorSwitcher: value })}
											/>

											{socialBgColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={socialBgColor}
													setGlobalColor={(value) => setAttributes({ socialBgColor: value })}
												/>
											)}

											{socialBgColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={socialBgHoverColor}
													setGlobalColor={(value) => setAttributes({ socialBgHoverColor: value })}
												/>
											)}

                                        </PanelBody>
                                        <PanelBody title={__("Border and Radius", "frontis-blocks")} initialOpen={false}>
                                            <SelectControl
                                                label={__("Border Style", "frontis-blocks")}
                                                value={socialBorder}
                                                options={BORDER_STYLES}
                                                onChange={(value) => setAttributes({ socialBorder: value })}
                                            />

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={socialBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ socialBorderColorSwitcher: value })}
											/>

											{socialBorderColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={socialBorderColor}
													setGlobalColor={(value) => setAttributes({ socialBorderColor: value })}
												/>
											)}

											{socialBorderColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={socialBorderHoverColor}
													setGlobalColor={(value) => setAttributes({ socialBorderHoverColor: value })}
												/>
											)}

                                            <FB_Spacing 
                                                label={__("Border", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleSocialBorderUnitsHandler}
                                                spacingUnits={socialBorderUnits}
                                                spacingDesktop={socialBorderDesktop}
                                                spacingTablet={socialBorderTablet}
                                                spacingMobile={socialBorderMobile}
                                                handleSpacingUnitHandler={handleSocialBorderUnitChange}
                                                spacingCombineBtn={socialBorderLink}
                                                spacingCombineBtnHandler={handleSocialBorderCombineBtn}
                                                setAttributes={setAttributes}
                                            />
                                            <FB_Spacing 
                                                label={__("Radius Border", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleSocialBorderRadiusUnitsHandler}
                                                spacingUnits={socialBorderRadiusUnits}
                                                spacingDesktop={socialBorderRadiusDesktop}
                                                spacingTablet={socialBorderRadiusTablet}
                                                spacingMobile={socialBorderRadiusMobile}
                                                handleSpacingUnitHandler={handleSocialBorderRadiusUnitChange}
                                                spacingCombineBtn={socialBorderRadiusLink}
                                                spacingCombineBtnHandler={handleSocialBorderRadiusCombineBtn}
                                                setAttributes={setAttributes}
                                            />
                                        </PanelBody>
                                        <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                                            <FB_Range
                                                min={1}
                                                max={100}
                                                label={__("Column Gap", "frontis-blocks")}
                                                rangeValue={socialGapSize}
                                                onChangeHandler={(value) => setAttributes({ socialGapSize: value })}
                                                rangeUnitHandler={(value) => setAttributes({ socialGapUnits: value })}
                                                deviceType={deviceType}
                                                units={socialGapUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={10}
                                            />
                                            <FB_Spacing 
                                                label={__("Padding", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleSocialPaddingUnitsHandler} 
                                                spacingUnits={socialPaddingUnits}
                                                spacingDesktop={socialPaddingDesktop}
                                                spacingTablet={socialPaddingTablet}
                                                spacingMobile={socialPaddingMobile}
                                                handleSpacingUnitHandler={handleSocialPaddingUnitChange}
                                                spacingCombineBtn={socialPaddingLink}
                                                spacingCombineBtnHandler={handleSocialPaddingCombineBtn}
                                                setAttributes={setAttributes}
                                            />
                                            <FB_Spacing 
                                                label={__("Margin", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleSocialMarginUnitsHandler}
                                                spacingUnits={socialMarginUnits}
                                                spacingDesktop={socialMarginDesktop}
                                                spacingTablet={socialMarginTablet}
                                                spacingMobile={socialMarginMobile}
                                                handleSpacingUnitHandler={handleSocialMarginUnitChange}
                                                spacingCombineBtn={socialMarginLink}
                                                spacingCombineBtnHandler={handleSocialMarginCombineBtn}
                                                setAttributes={setAttributes}
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
                                                        rangeValue={socialGlobalZIndex}
                                                        onChangeHandler={(value) => setAttributes({ socialGlobalZIndex: value === 0 ? undefined : value })}
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
														spacingUnits={socialGlobalPaddingUnits}
														spacingDesktop={socialGlobalPaddingDesktop}
														spacingTablet={socialGlobalPaddingTablet}
														spacingMobile={socialGlobalPaddingMobile}
														handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
														spacingCombineBtn={socialGlobalPaddingLink}
														spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
														setAttributes={setAttributes}
													/>
													<FB_Spacing 
														label={__("Margin", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalMarginUnitsHandler}
														spacingUnits={socialGlobalMarginUnits}
														spacingDesktop={socialGlobalMarginDesktop}
														spacingTablet={socialGlobalMarginTablet}
														spacingMobile={socialGlobalMarginMobile}
														handleSpacingUnitHandler={handleGlobalMarginUnitChange}
														spacingCombineBtn={socialGlobalMarginLink}
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
														globalSwitcher={socialGlobalBgColorSwitcher}
														setGlobalSwitcher={(value) => setAttributes({ socialGlobalBgColorSwitcher: value })}
													/>

													{socialGlobalBgColorSwitcher === 'normal' && (
														<FB_ColorControl
															label={__("Normal Color", "frontis-blocks")}
															globalColor={socialGlobalBgColor}
															setGlobalColor={(value) => setAttributes({ socialGlobalBgColor: value })}
														/>
													)}

													{socialGlobalBgColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={socialGlobalBgHoverColor}
															setGlobalColor={(value) => setAttributes({ socialGlobalBgHoverColor: value })}
														/>
													)}
												</PanelBody>
												<PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

													<SelectControl
															label={__("Border Style", "frontis-blocks")}
															value={socialGlobalBorder}
															options={BORDER_STYLES}
															onChange={(value) => setAttributes({ socialGlobalBorder: value })}
													/>

													<FB_SwitcherControl
														label={__("Border Color", "frontis-blocks")}
														globalSwitcher={socialGlobalBorderColorSwitcher}
														setGlobalSwitcher={(value) => setAttributes({ socialGlobalBorderColorSwitcher: value })}
													/>

													{socialGlobalBorderColorSwitcher === 'normal' && (
														<FB_ColorControl
															label={__("Normal Color", "frontis-blocks")}
															globalColor={socialGlobalBorderColor}
															setGlobalColor={(value) => setAttributes({ socialGlobalBorderColor: value })}
														/>
													)}

													{socialGlobalBorderColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={socialGlobalBorderHoverColor}
															setGlobalColor={(value) => setAttributes({ socialGlobalBorderHoverColor: value })}
														/>
													)}

													<FB_Spacing 
														label={__("Border", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalBorderUnitsHandler}
														spacingUnits={socialGlobalBorderUnits}
														spacingDesktop={socialGlobalBorderDesktop}
														spacingTablet={socialGlobalBorderTablet}
														spacingMobile={socialGlobalBorderMobile}
														handleSpacingUnitHandler={handleGlobalBorderUnitChange}
														spacingCombineBtn={socialGlobalBorderLink}
														spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
														setAttributes={setAttributes}
													/>

													<FB_Spacing 
														label={__("Border Radius", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
														spacingUnits={socialGlobalBorderRadiusUnits}
														spacingDesktop={socialGlobalBorderRadiusDesktop}
														spacingTablet={socialGlobalBorderRadiusTablet}
														spacingMobile={socialGlobalBorderRadiusMobile}
														handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
														spacingCombineBtn={socialGlobalBorderRadiusLink}
														spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
														setAttributes={setAttributes}
													/>
													<FB_BoxShadowControl
														onBoxShadowChange={(value) => setAttributes({ socialGlobalBoxShadowValues: value })}
														initialShadowValue={socialGlobalBoxShadowValues}
														onBoxShadowStyleChange={(value) => setAttributes({ socialGlobalBoxShadowCssValue: value })}
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