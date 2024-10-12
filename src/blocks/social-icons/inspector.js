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

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        deviceType,
        socialAlignment,
        socialIconZIndex,
        socialItems,

        socialIconSize,
        socialIconSizeUnits,

        socialIconColorSwitcher,
        socialIconColor,
        socialIconHoverColor,

        socialBgColorSwitcher,
        socialBgColor,
        socialBgHoverColor,

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

        socialIconGapSize,
        socialIconGapUnits,

        socialIconPaddingUnits,
        socialIconPaddingDesktop,
        socialIconPaddingTablet,
        socialIconPaddingMobile,
        socialIconPaddingLink,


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

        socialGlobalBgColorSwitcher,
        socialGlobalBgColor,
        socialGlobalBgHoverColor,

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
            Title: `Social Item ${socialItems.length + 1}`, 
            socialIconUrl: '', 
            socialIcon: 'behance'
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

    /** Start socialIconSize */
    const socialIconSizeHandler = (value) => {
		setAttributes({ socialIconSize: value });
	};

	const socialIconSizeUnitsHandler = (value) => {
		setAttributes({ socialIconSizeUnits: value });
	};
    /** End socialIconSize */

    /** Start socialIconGapSize */
    const socialIconGapSizeHandler = (value) => {
        setAttributes({ socialIconGapSize: value });
    };

    const socialIconGapUnitsHandler = (value) => {
        setAttributes({ socialIconGapUnits: value });
    };
    /** End socialIconGapSize */

    /** Start Icon Color */
    const handleColorSwitcherChange = (value) => {
        setAttributes({ socialIconColorSwitcher: value });
    };
    const handleGlobalColorChange = (value) => {
        setAttributes({ socialIconColor: value });
    };
    const handleGlobalHoverColorChange = (value) => {
        setAttributes({ socialIconHoverColor: value });
    };
    /** End Icon Color */

    /** Start Icon BG Color */
    const handleBgColorSwitcherChange = (value) => {
        setAttributes({ socialBgColorSwitcher: value });
    };
    const handleBgColorChange = (value) => {
        setAttributes({ socialBgColor: value });
    };
    const handleBgHoverColorChange = (value) => {
        setAttributes({ socialBgHoverColor: value });
    };
    /** End Icon BG Color */

    /** Start Icon Border Color */
    const handleBorderColorSwitcherChange = (value) => {
        setAttributes({ socialIconBorderColorSwitcher: value });
    };
    const handleBorderColorChange = (value) => {
        setAttributes({ socialIconBorderColor: value });
    };
    const handleBorderHoverColorChange = (value) => {
        setAttributes({ socialIconBorderHoverColor: value });
    };
    /** End Icon Border Color */


    /** Start Global Bg Color */
    const handleGlobalBgColorSwitcherChange = (value) => {
        setAttributes({ socialGlobalBgColorSwitcher: value });
    };
    const handleGlobalBgColorChange = (value) => {
        setAttributes({ socialGlobalBgColor: value });
    };
    const handleGlobalBgHoverColorChange = (value) => {
        setAttributes({ socialGlobalBgHoverColor: value });
    };
    /** End Global Bg Color */


    /** Start Global Border Color */
    const handleGlobalBorderColorSwitcherChange = (value) => {
        setAttributes({ socialBorderColorSwitcher: value });
    };
    const handleGlobalBorderColorChange = (value) => {
        setAttributes({ socialBorderColor: value });
    };
    const handleGlobalBorderHoverColorChange = (value) => {
        setAttributes({ socialBorderHoverColor: value });
    };
    /** End Global Border Color */


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

    /** Start Global padding */
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
    /** end Global padding */


    const DesktopPadding = `${socialPaddingDesktop.top}${socialPaddingUnits.Desktop} ${socialPaddingDesktop.right}${socialPaddingUnits.Desktop} ${socialPaddingDesktop.bottom}${socialPaddingUnits.Desktop} ${socialPaddingDesktop.left}${socialPaddingUnits.Desktop}`;
    const TabletPadding = `${socialPaddingTablet.top}${socialPaddingUnits.Tablet} ${socialPaddingTablet.right}${socialPaddingUnits.Tablet} ${socialPaddingTablet.bottom}${socialPaddingUnits.Tablet} ${socialPaddingTablet.left}${socialPaddingUnits.Tablet}`;
    const MobilePadding = `${socialPaddingMobile.top}${socialPaddingUnits.Mobile} ${socialPaddingMobile.right}${socialPaddingUnits.Mobile} ${socialPaddingMobile.bottom}${socialPaddingUnits.Mobile} ${socialPaddingMobile.left}${socialPaddingUnits.Mobile}`;
    /** End Padding */

    /** Start Global margin */
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
    /** end Global margin */

    const DesktopMargin = `${socialMarginDesktop.top}${socialMarginUnits.Desktop} ${socialMarginDesktop.right}${socialMarginUnits.Desktop} ${socialMarginDesktop.bottom}${socialMarginUnits.Desktop} ${socialMarginDesktop.left}${socialMarginUnits.Desktop}`;
    const TabletMargin = `${socialMarginTablet.top}${socialMarginUnits.Tablet} ${socialMarginTablet.right}${socialMarginUnits.Tablet} ${socialMarginTablet.bottom}${socialMarginUnits.Tablet} ${socialMarginTablet.left}${socialMarginUnits.Tablet}`;
    const MobileMargin = `${socialMarginMobile.top}${socialMarginUnits.Mobile} ${socialMarginMobile.right}${socialMarginUnits.Mobile} ${socialMarginMobile.bottom}${socialMarginUnits.Mobile} ${socialMarginMobile.left}${socialMarginUnits.Mobile}`;
    /** End Margin */


    /** Start Global border */
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
    /** end Global border */
    const BorderDesktopWidth = `${socialBorderDesktop.top}${socialBorderUnits.Desktop} ${socialBorderDesktop.right}${socialBorderUnits.Desktop} ${socialBorderDesktop.bottom}${socialBorderUnits.Desktop} ${socialBorderDesktop.left}${socialBorderUnits.Desktop}`;
    const BorderTabletWidth = `${socialBorderTablet.top}${socialBorderUnits.Tablet} ${socialBorderTablet.right}${socialBorderUnits.Tablet} ${socialBorderTablet.bottom}${socialBorderUnits.Tablet} ${socialBorderTablet.left}${socialBorderUnits.Tablet}`;
    const BorderMobileWidth = `${socialBorderMobile.top}${socialBorderUnits.Mobile} ${socialBorderMobile.right}${socialBorderUnits.Mobile} ${socialBorderMobile.bottom}${socialBorderUnits.Mobile} ${socialBorderMobile.left}${socialBorderUnits.Mobile}`;
    /** End Border */


    /** Start Global border radius*/
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
    /** end Global border */

    const BorderRadiusDesktopWidth = `${socialBorderRadiusDesktop.top}${socialBorderRadiusUnits.Desktop} ${socialBorderRadiusDesktop.right}${socialBorderRadiusUnits.Desktop} ${socialBorderRadiusDesktop.bottom}${socialBorderRadiusUnits.Desktop} ${socialBorderRadiusDesktop.left}${socialBorderRadiusUnits.Desktop}`;
    const BorderRadiusTabletWidth = `${socialBorderRadiusTablet.top}${socialBorderRadiusUnits.Tablet} ${socialBorderRadiusTablet.right}${socialBorderRadiusUnits.Tablet} ${socialBorderRadiusTablet.bottom}${socialBorderRadiusUnits.Tablet} ${socialBorderRadiusTablet.left}${socialBorderRadiusUnits.Tablet}`;
    const BorderRadiusMobileWidth = `${socialBorderRadiusMobile.top}${socialBorderRadiusUnits.Mobile} ${socialBorderRadiusMobile.right}${socialBorderRadiusUnits.Mobile} ${socialBorderRadiusMobile.bottom}${socialBorderRadiusUnits.Mobile} ${socialBorderRadiusMobile.left}${socialBorderRadiusUnits.Mobile}`;
    /** End Border Radius */

    

    return (
        <>

            <style>
            {`
                .fb-social-main-wrapper.${blockID} {
                    z-index: ${socialIconZIndex !== undefined ? socialIconZIndex : ''};
                }
                .fb-social-wrapper {
                    ${socialGlobalBgColor !== undefined ? `background-color: ${socialGlobalBgColor};` : ''};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${socialBorder};
                    border-width: ${BorderDesktopWidth};
                    border-radius: ${BorderRadiusDesktopWidth} !important;
                    ${socialBorderColor !== undefined ? `border-color: ${socialBorderColor};` : ''};
                    transition: all .3s ease-in-out;
                }
                .fb-social-wrapper:hover {
                    ${socialGlobalBgHoverColor !== undefined ? `background-color: ${socialGlobalBgHoverColor};` : ''};
                    ${socialBorderHoverColor !== undefined ? `border-color: ${socialBorderHoverColor};` : ''};
                }
                .fb-socials {
                    column-gap: ${socialIconGapSize.Desktop}${socialIconGapUnits.Desktop};
                    justify-content: ${socialAlignment};
                }
                .fb-social-list-item a {
                    width: ${socialIconSize.Desktop}${socialIconSizeUnits.Desktop};
                    height: ${socialIconSize.Desktop}${socialIconSizeUnits.Desktop};
                    padding: ${IconPaddingDesktop};
                    background-color: ${socialBgColor};
                    border: ${socialIconBorder};
                    border-width: ${IconBorderDesktopWidth};
                    border-radius: ${IconBorderRadiusDesktopWidth} !important;
                    ${socialIconBorderColor !== undefined ? `border-color: ${socialIconBorderColor};` : ''};
                }
                .fb-social-list-item a:hover {
                    background-color: ${socialBgHoverColor};
                    ${socialIconBorderHoverColor !== undefined ? `border-color: ${socialIconBorderHoverColor};` : ''};
                }
                .fb-social-list-item a svg{
                    fill: ${socialIconColor};
                }
                .fb-social-list-item a:hover svg{
                    fill: ${socialIconHoverColor};
                }

                @media only screen and (max-width: 1024px) {

                    .fb-social-wrapper {
                        padding: ${TabletPadding};
                        margin: ${TabletMargin};
                        border-width: ${BorderTabletWidth};
                        border-radius: ${BorderRadiusTabletWidth} !important;
                    }
                    .fb-socials {
                        column-gap: ${socialIconGapSize.Tablet}${socialIconGapUnits.Tablet};
                    }
                    .fb-social-list-item a {
                        width: ${socialIconSize.Tablet}${socialIconSizeUnits.Tablet};
                        height: ${socialIconSize.Tablet}${socialIconSizeUnits.Tablet};
                        padding: ${IconPaddingTablet};
                        border-width: ${IconBorderTabletWidth};
                        border-radius: ${IconBorderRadiusTabletWidth} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-social-wrapper {
                        padding: ${MobilePadding};
                        margin: ${MobileMargin};
                        border-width: ${BorderMobileWidth};
                        border-radius: ${BorderRadiusMobileWidth} !important;
                    }
                    .fb-socials {
                        column-gap: ${socialIconGapSize.Mobile}${socialIconGapUnits.Mobile};
                    }
                    .fb-social-list-item a {
                        width: ${socialIconSize.Mobile}${socialIconSizeUnits.Mobile};
                        height: ${socialIconSize.Mobile}${socialIconSizeUnits.Mobile};
                        padding: ${IconPaddingMobile};
                        border-width: ${IconBorderMobileWidth};
                        border-radius: ${IconBorderRadiusMobileWidth} !important;
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
                                                onChangeHandler={socialIconSizeHandler}
                                                rangeUnitHandler={socialIconSizeUnitsHandler}
                                                deviceType={deviceType}
                                                units={socialIconSizeUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={25}
                                            />

                                            <FB_Color
                                                label={__("Icon Color", "frontis-blocks")}
                                                globalColorSwitcher={socialIconColorSwitcher}
                                                globalColor={socialIconColor}
                                                globalHoverColor={socialIconHoverColor}
                                                handleColorSwitcherChange={handleColorSwitcherChange}
                                                handleGlobalColorChange={handleGlobalColorChange}
                                                handleGlobalHoverColorChange={handleGlobalHoverColorChange}
                                            />

                                            <FB_Color
                                                label={__("Background Color", "frontis-blocks")}
                                                globalColorSwitcher={socialBgColorSwitcher}
                                                globalColor={socialBgColor}
                                                globalHoverColor={socialBgHoverColor}
                                                handleColorSwitcherChange={handleBgColorSwitcherChange}
                                                handleGlobalColorChange={handleBgColorChange}
                                                handleGlobalHoverColorChange={handleBgHoverColorChange}
                                            />
                                        </PanelBody>
                                        <PanelBody title={__("Border and Radius", "frontis-blocks")} initialOpen={false}>
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
                                                handleColorSwitcherChange={handleBorderColorSwitcherChange}
                                                handleGlobalColorChange={handleBorderColorChange}
                                                handleGlobalHoverColorChange={handleBorderHoverColorChange}
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
                                        </PanelBody>
                                        <PanelBody title={__("Spacing", "frontis-blocks")} initialOpen={false}>
                                            <FB_Range
                                                min={1}
                                                max={100}
                                                label={__("Icon Gap", "frontis-blocks")}
                                                rangeValue={socialIconGapSize}
                                                onChangeHandler={socialIconGapSizeHandler}
                                                rangeUnitHandler={socialIconGapUnitsHandler}
                                                deviceType={deviceType}
                                                units={socialIconGapUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={20}
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
                                                        value={socialIconZIndex}
                                                        onChange={(value) => setAttributes({ socialIconZIndex: value === 0 ? undefined : value })}
                                                        min={1}
                                                        max={10000}
                                                        step={1}
                                                        allowReset
                                                        resetFallbackValue={100}
                                                    />

                                                    <FB_Range
                                                        min={1}
                                                        max={100}
                                                        label={__("Icon Gap", "frontis-blocks")}
                                                        rangeValue={socialIconGapSize}
                                                        onChangeHandler={socialIconGapSizeHandler}
                                                        rangeUnitHandler={socialIconGapUnitsHandler}
                                                        deviceType={deviceType}
                                                        units={socialIconGapUnits}
                                                        setAttributes={setAttributes}
                                                        rangeStep={1}
                                                        resetFallbackValue={20}
                                                    />
                                                </PanelBody>
                                                <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
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

                                                <PanelBody title="Background Color" initialOpen={false} >
                                                    <FB_Color
                                                        label={__("Background Color", "frontis-blocks")}
                                                        globalColorSwitcher={socialGlobalBgColorSwitcher}
                                                        globalColor={socialGlobalBgColor}
                                                        globalHoverColor={socialGlobalBgHoverColor}
                                                        handleColorSwitcherChange={handleGlobalBgColorSwitcherChange}
                                                        handleGlobalColorChange={handleGlobalBgColorChange}
                                                        handleGlobalHoverColorChange={handleGlobalBgHoverColorChange}
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
                                                        handleColorSwitcherChange={handleGlobalBorderColorSwitcherChange}
                                                        handleGlobalColorChange={handleGlobalBorderColorChange}
                                                        handleGlobalHoverColorChange={handleGlobalBorderHoverColorChange}
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