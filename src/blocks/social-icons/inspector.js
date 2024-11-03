import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
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
    ColorPalette,
    ToggleControl,
} from '@wordpress/components';

import {
    NORMAL_HOVER,
    UNIT_TYPES,
    ICON_ALIGN,
    TEXT_ALIGN,
    BORDER_STYLES,
} from "./constants/constants";
import SortableItem from './sortableItem';
import FB_ResponsiveControl from '@Components/responsive-control';
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_Color from '@Components/color';
import FB_BoxShadowControl from '@Components/box-shadow';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        deviceType,
        socialAlignment,
        socialItems,
        socialTitleSwitcher,

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

		singleIconColorStyle,


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

    const handleAddItem = () => {
        const newItem = { 
            id: `item-${socialItems.length + 1}`, 
            socialIconTitle: `Title ${socialItems.length + 1}`,
            socialIconUrl: '', 
            socialIcon: 'facebook-f',
            socialIconTargetUrl: false,
            socialIconColor: '',
            socialIconBgColor: '',
        };
        setAttributes({ socialItems: [...socialItems, newItem] });
    };

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

    useEffect(() => {
        let singleIconColorStyle = '';
        socialItems.forEach(item => {
            if (item.socialIconColor) {
                const colorStyle = `.${blockID} .fb-social-list-item.single-item-${item.id} .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon svg {
                    fill: ${item.socialIconColor};
                }`;
                singleIconColorStyle += colorStyle;
            }
            if (item.socialIconBgColor) {
                const bgColorStyle = `.${blockID} .fb-social-list-item.single-item-${item.id} .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon {
                    background-color: ${item.socialIconBgColor};
                }`;
                singleIconColorStyle += bgColorStyle;
            }
        });
        setAttributes({ singleIconColorStyle: singleIconColorStyle });
    }, [socialItems, blockID]);

	console.log(singleIconColorStyle);

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

    

    return (
        <>

            <style>
            {`

				${singleIconColorStyle}
                .${blockID}.fb-social-wrapper {
                    ${socialGlobalZIndex ? `z-index: ${socialGlobalZIndex};` : ''}
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
                    column-gap: ${socialGapSize.Desktop}${socialGapUnits.Desktop};
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

                @media only screen and (max-width: 1024px) {

                    .${blockID}.fb-social-wrapper {
                        ${globalTabletPadding ? `padding: ${globalTabletPadding};` : ''}
                        ${globalTabletMargin ? `margin: ${globalTabletMargin};` : ''} 
                        ${globalTabletBorderWidth ? `border-width: ${globalTabletBorderWidth};` : ''}
                        ${globalTabletBorderRadiusWidth ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
                    }
                    .${blockID} .fb-socials {
                        column-gap: ${socialGapSize.Tablet}${socialGapUnits.Tablet}; 
                    }
                    .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon {
                        ${IconPaddingTablet ? `padding: ${IconPaddingTablet};` : ''}
                        ${IconBorderTabletWidth ? `border-width: ${IconBorderTabletWidth};` : ''}
                        ${IconBorderRadiusTabletWidth ? `border-radius: ${IconBorderRadiusTabletWidth};` : ''}
                    }
                }

                @media only screen and (max-width: 767px) {
                    .${blockID}.fb-social-wrapper {
                        ${globalMobilePadding ? `padding: ${globalMobilePadding};` : ''}
                        ${globalMobileMargin ? `margin: ${globalMobileMargin};` : ''} 
                        ${globalMobileBorderWidth ? `border-width: ${globalMobileBorderWidth};` : ''}
                        ${globalMobileBorderRadiusWidth ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
                    }
                    .${blockID} .fb-socials {
                        column-gap: ${socialGapSize.Mobile}${socialGapUnits.Mobile};
                    }
                    .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon {
                        ${IconPaddingMobile ? `padding: ${IconPaddingMobile};` : ''}
                        ${IconBorderMobileWidth ? `border-width: ${IconBorderMobileWidth};` : ''}
                        ${IconBorderRadiusMobileWidth ? `border-radius: ${IconBorderRadiusMobileWidth};` : ''}
                    }
                }

            `}
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

                                            <FB_Color
                                                label={__("Icon Color", "frontis-blocks")}
                                                globalColorSwitcher={socialIconGlobalColorSwitcher}
                                                globalColor={socialIconGlobalColor}
                                                globalHoverColor={socialIconGlobalHoverColor}
                                                handleColorSwitcherChange={(value) => setAttributes({ socialIconGlobalColorSwitcher: value })} 
                                                handleGlobalColorChange={(value) => setAttributes({ socialIconGlobalColor: value })}
                                                handleGlobalHoverColorChange={(value) => setAttributes({ socialIconGlobalHoverColor: value })}
                                            />

                                            <FB_Color
                                                label={__("Background Color", "frontis-blocks")}
                                                globalColorSwitcher={socialIconBgGlobalColorSwitcher}	
                                                globalColor={socialIconBgGlobalColor}
                                                globalHoverColor={socialIconBgGlobalHoverColor}
                                                handleColorSwitcherChange={(value) => setAttributes({ socialIconBgGlobalColorSwitcher: value })}
                                                handleGlobalColorChange={(value) => setAttributes({ socialIconBgGlobalColor: value })}
                                                handleGlobalHoverColorChange={(value) => setAttributes({ socialIconBgGlobalHoverColor: value })}
                                            />
                                            <SelectControl
                                                label={__("Border Style", "frontis-blocks")}
                                                value={socialIconBorder}
                                                options={BORDER_STYLES}
                                                onChange={(value) => setAttributes({ socialIconBorder: value })}
                                            />

                                            <FB_Color
                                                label={__("Border Color", "frontis-blocks")}
                                                globalColorSwitcher={socialIconBorderColorSwitcher}
                                                globalColor={socialIconBorderColor}
                                                globalHoverColor={socialIconBorderHoverColor}
                                                handleColorSwitcherChange={(value) => setAttributes({ socialIconBorderColorSwitcher: value })}
                                                handleGlobalColorChange={(value) => setAttributes({ socialIconBorderColor: value })}
                                                handleGlobalHoverColorChange={(value) => setAttributes({ socialIconBorderHoverColor: value })}
                                            />

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
                                        </PanelBody>

                                        <PanelBody title={__("Background", "frontis-blocks")} initialOpen={false}>
                                            <FB_Color
                                                label={__("Background Color", "frontis-blocks")}
                                                globalColorSwitcher={socialBgColorSwitcher}
                                                globalColor={socialBgColor}
                                                globalHoverColor={socialBgHoverColor}
                                                handleColorSwitcherChange={(value) => setAttributes({ socialBgColorSwitcher: value })}
                                                handleGlobalColorChange={(value) => setAttributes({ socialBgColor: value })}
                                                handleGlobalHoverColorChange={(value) => setAttributes({ socialBgHoverColor: value })}
                                            />
                                        </PanelBody>
                                        <PanelBody title={__("Border and Radius", "frontis-blocks")} initialOpen={false}>
                                            <SelectControl
                                                label={__("Border Style", "frontis-blocks")}
                                                value={socialBorder}
                                                options={BORDER_STYLES}
                                                onChange={(value) => setAttributes({ socialBorder: value })}
                                            />

                                            <FB_Color
                                                label={__("Border Color", "frontis-blocks")}
                                                globalColorSwitcher={socialBorderColorSwitcher}
                                                globalColor={socialBorderColor}
                                                globalHoverColor={socialBorderHoverColor}
                                                handleColorSwitcherChange={(value) => setAttributes({ socialBorderColorSwitcher: value })}
                                                handleGlobalColorChange={(value) => setAttributes({ socialBorderColor: value })}
                                                handleGlobalHoverColorChange={(value) => setAttributes({ socialBorderHoverColor: value })}
                                            />

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
                                                resetFallbackValue={20}
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
													title={__("Z Index", "frontis-blocks")}
													initialOpen={true}
													className='fb-setting-z-index-header'
												>
													<RangeControl
														value={socialGlobalZIndex}
														onChange={(value) => setAttributes({ socialGlobalZIndex: value === 0 ? undefined : value })}
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

												<PanelBody title="Background Color" initialOpen={false} >
													<FB_Color
														label={__("Background Color", "frontis-blocks")}
														globalColorSwitcher={socialGlobalBgColorSwitcher}
														globalColor={socialGlobalBgColor}
														globalHoverColor={socialGlobalBgHoverColor}
														handleColorSwitcherChange={(value) => setAttributes({ socialGlobalBgColorSwitcher: value })}
														handleGlobalColorChange={(value) => setAttributes({ socialGlobalBgColor: value })}
														handleGlobalHoverColorChange={(value) => setAttributes({ socialGlobalBgHoverColor: value })}
													/>
												</PanelBody>
												<PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

													<SelectControl
															label={__("Border Style", "frontis-blocks")}
															value={socialGlobalBorder}
															options={BORDER_STYLES}
															onChange={(value) => setAttributes({ socialGlobalBorder: value })}
													/>

													<FB_Color
														label={__("Border Color", "frontis-blocks")}
														globalColorSwitcher={socialGlobalBorderColorSwitcher}
														globalColor={socialGlobalBorderColor}
														globalHoverColor={socialGlobalBorderHoverColor}
														handleColorSwitcherChange={(value) => setAttributes({ socialGlobalBorderColorSwitcher: value })}
														handleGlobalColorChange={(value) => setAttributes({ socialGlobalBorderColor: value })}
														handleGlobalHoverColorChange={(value) => setAttributes({ socialGlobalBorderHoverColor: value })}
													/>

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