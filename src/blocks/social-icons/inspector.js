import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import {
    PanelBody,
    BaseControl,
    Button,
    ButtonGroup,
    SelectControl,
    ToggleControl,
} from '@wordpress/components';

import {
    TEXT_ALIGN,
    BORDER_STYLES,
	SOCIAL_ICONS_PRESETS,
	OVERFLOW_OP,
} from '@Constants/fbConstants';
import SortableItem from './sortableItem';
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_TypographyControl from '@Components/typography-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import {changeSocialIconsPreset, handleAddItem, handleChangeItem, handleDeleteItem, handleDuplicateItem} from './preset';
import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        blockID,
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
		socialTitleGlobalTypoSwitcher,
		socialTitleGlobalTypographyData,
		socialTitleGlobalTypoType,
		socialTitleGlobalTypoOption,
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
		socialIconsOverflow,

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

		socialGlobalBoxShadowSwitcher,
        socialGlobalBoxShadowValues,
        socialGlobalBoxShadowCssValue,
		socialGlobalBoxShadowHoverValues,
		socialGlobalBoxShadowHoverCssValue,


		socialIconsPresetStyle,
		// singleItemColorStyle,
		blockStyle,

		socialIconsDesktopSwitcher,
		socialIconsTabletSwitcher,
		socialIconsMobileSwitcher,

		socialGlobalCustomCSS,
		socialGlobalWraperID,
		socialGlobalWraperClass,

		// Position
        socialIconsPositionType,
        socialIconsHZOrientationType,
        socialIconsVROrientationType,
        socialIconsHZLeftOffset,
        socialIconsHZLeftOffsetUnits,
        socialIconsHZRightOffset,
        socialIconsHZRightOffsetUnits,
        socialIconsVRTopOffset,
        socialIconsVRTopOffsetUnits,
        socialIconsVRBottomOffset,
        socialIconsVRBottomOffsetUnits,
    } = attributes;
	
    const deviceType= useDeviceType();

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = socialItems.findIndex(item => item.id === active.id);
            const newIndex = socialItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(socialItems, oldIndex, newIndex);
            setAttributes({ socialItems: updatedItems });
        }
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

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
				<SelectControl
					label={__("Preset Style", "frontis-blocks")}
					value={socialIconsPresetStyle}
					options={SOCIAL_ICONS_PRESETS}
					onChange={(selected) => changeSocialIconsPreset(selected, socialItems, setAttributes)}
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
											handleDuplicateItem={handleDuplicateItem}
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
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
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
						setGlobalColor={(value) => setAttributes({ socialIconGlobalColor: value === undefined ? '' : value })}
					/>
				)}

				{socialIconGlobalColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={socialIconGlobalHoverColor}
						setGlobalColor={(value) => setAttributes({ socialIconGlobalHoverColor: value === undefined ? '' : value })}
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
						setGlobalColor={(value) => setAttributes({ socialIconBgGlobalColor: value === undefined ? '' : value })}
					/>
				)}

				{socialIconBgGlobalColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={socialIconBgGlobalHoverColor}
						setGlobalColor={(value) => setAttributes({ socialIconBgGlobalHoverColor: value === undefined ? '' : value })}
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
						setGlobalColor={(value) => setAttributes({ socialIconBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{socialIconBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={socialIconBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ socialIconBorderHoverColor: value === undefined ? '' : value })}
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
							globalTypoControlActive={true}
							globalTypoSwitcher={socialTitleGlobalTypoSwitcher}
							storeGlobalTypographyData={(value) => setAttributes({ socialTitleGlobalTypographyData: value })}

							globalTypoType={socialTitleGlobalTypoType}
							onChangeGlobalTypoType={(value) => {
								setAttributes({ 
									socialTitleGlobalTypoType: value, 
									socialTitleGlobalTypoSwitcher: value === 'default' ? {...socialTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...socialTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
								})
							}}

							globalTypoOption={socialTitleGlobalTypoOption}
							onChangeGlobalTypoOption={(value) => setAttributes({ socialTitleGlobalTypoOption: value })}

							fontFamily={socialTitleFontFamily}
							onChangeFontFamily={(value) => setAttributes({ socialTitleFontFamily: value, socialTitleGlobalTypoSwitcher: {...socialTitleGlobalTypoSwitcher, fontFamily: value && false} })}

							fontSize={socialTitleFontSize}
							onChangeFontSize={(value) => setAttributes({ socialTitleFontSize: value, socialTitleGlobalTypoSwitcher: {...socialTitleGlobalTypoSwitcher, fontSize: value && false} })}

							fontSizeUnits={socialTitleFontSizeUnits}
							onChangeFontSizeUnit={(value) => setAttributes({ socialTitleFontSizeUnits: value })}

							fontWeight={socialTitleFontWeight}
							onChangeFontWeight={(value) => setAttributes({ socialTitleFontWeight: value, socialTitleGlobalTypoSwitcher: {...socialTitleGlobalTypoSwitcher, fontWeight: value && false} })}

							fontStyle={socialTitleFontStyle}
							onChangeFontStyle={(value) => setAttributes({ socialTitleFontStyle: value, socialTitleGlobalTypoSwitcher: {...socialTitleGlobalTypoSwitcher, fontStyle: value && false} })}

							textTransform={socialTitleTextTransform}
							onChangeTextTransform={(value) => setAttributes({ socialTitleTextTransform: value, socialTitleGlobalTypoSwitcher: {...socialTitleGlobalTypoSwitcher, textTransform: value && false} })}

							textDecoration={socialTitleTextDecoration}
							onChangeTextDecoration={(value) => setAttributes({ socialTitleTextDecoration: value, socialTitleGlobalTypoSwitcher: {...socialTitleGlobalTypoSwitcher, textDecoration: value && false} })}

							letterSpacing={socialTitleLetterSpacing}
							onChangeLetterSpacing={(value) => setAttributes({ socialTitleLetterSpacing: value, socialTitleGlobalTypoSwitcher: {...socialTitleGlobalTypoSwitcher, letterSpacing: value && false} })}

							letterSpacingUnits={socialTitleLetterSpacingUnits}
							onChangeLetterSpacingUnit={(value) => setAttributes({ socialTitleLetterSpacingUnits: value })}

							lineHeight={socialTitleLineHeight}
							onChangeLineHeight={(value) => setAttributes({ socialTitleLineHeight: value, socialTitleGlobalTypoSwitcher: {...socialTitleGlobalTypoSwitcher, lineHeight: value && false} })}

							lineHeightUnits={socialTitleLineHeightUnits}
							onChangeLineHeightUnit={(value) => setAttributes({ socialTitleLineHeightUnits: value })}

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
								setGlobalColor={(value) => setAttributes({ socialTitleColor: value === undefined ? '' : value })}
							/>
						)}

						{socialTitleColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={socialTitleHoverColor}
								setGlobalColor={(value) => setAttributes({ socialTitleHoverColor: value === undefined ? '' : value })}
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
						setGlobalColor={(value) => setAttributes({ socialBgColor: value === undefined ? '' : value })}
					/>
				)}

				{socialBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={socialBgHoverColor}
						setGlobalColor={(value) => setAttributes({ socialBgHoverColor: value === undefined ? '' : value })}
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
						setGlobalColor={(value) => setAttributes({ socialBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{socialBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={socialBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ socialBorderHoverColor: value === undefined ? '' : value })}
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
	);
		
	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>
			<div className="fb-setting-advanced-tab-wrapper">
				<div className="fb-setting-inner-wrapper">
					<PanelBody
						title={__("Layout", "frontis-blocks")}
						initialOpen={true}
						className='fb-setting-layout-header' 
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

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={socialIconsOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ socialIconsOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={socialIconsPositionType}
							setPositionType={(value) => setAttributes({ socialIconsPositionType: value })}
																			
							HZOrientationType={socialIconsHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ socialIconsHZOrientationType: value })
							}
							VROrientationType={socialIconsVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ socialIconsVROrientationType: value })
							}
																				
							HZLeftOffset={socialIconsHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ socialIconsHZLeftOffset: value })}
							HZLeftOffsetUnits={socialIconsHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ socialIconsHZLeftOffsetUnits: value })}
							HZRightOffset={socialIconsHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ socialIconsHZRightOffset: value })}
							HZRightOffsetUnits={socialIconsHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ socialIconsHZRightOffsetUnits: value })}
																			
							VRTopOffset={socialIconsVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ socialIconsVRTopOffset: value })}
							VRTopOffsetUnits={socialIconsVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ socialIconsVRTopOffsetUnits: value })}
							VRBottomOffset={socialIconsVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ socialIconsVRBottomOffset: value })}
							VRBottomOffsetUnits={socialIconsVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ socialIconsVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={socialGlobalWraperID}
							onChangeValue={(value) => setAttributes({ socialGlobalWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={socialGlobalWraperClass}
							onChangeValue={(value) => setAttributes({ socialGlobalWraperClass: value })}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
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
								setGlobalColor={(value) => setAttributes({ socialGlobalBgColor: value === undefined ? '' : value })}
							/>
						)}

						{socialGlobalBgColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={socialGlobalBgHoverColor}
								setGlobalColor={(value) => setAttributes({ socialGlobalBgHoverColor: value === undefined ? '' : value })}
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
								setGlobalColor={(value) => setAttributes({ socialGlobalBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{socialGlobalBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={socialGlobalBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ socialGlobalBorderHoverColor: value === undefined ? '' : value })}
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
						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={socialGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ socialGlobalBoxShadowSwitcher: value })}
						/>

						{socialGlobalBoxShadowSwitcher === 'normal' && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ socialGlobalBoxShadowValues: value })}
								initialShadowValue={socialGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) => setAttributes({ socialGlobalBoxShadowCssValue: value })}
							/>
						)}

						{socialGlobalBoxShadowSwitcher === 'hover' && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ socialGlobalBoxShadowHoverValues: value })}
								initialShadowValue={socialGlobalBoxShadowHoverValues}
								onBoxShadowStyleChange={(value) => setAttributes({ socialGlobalBoxShadowHoverCssValue: value })}
							/>
						)}

					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={socialIconsDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ socialIconsDesktopSwitcher: value })}

							tabletValue={socialIconsTabletSwitcher}
							setTabletValue={(value) => setAttributes({ socialIconsTabletSwitcher: value })}

							mobileValue={socialIconsMobileSwitcher}
							setMobileValue={(value) => setAttributes({ socialIconsMobileSwitcher: value })}
						/>
					</PanelBody>

					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor  
							value={socialGlobalCustomCSS} 
							onChangeValue={(value) => setAttributes({ socialGlobalCustomCSS: value })}
						/>
					</PanelBody>
				</div>
			</div>
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