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
import FB_RangeControl from '@Components/range-control';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        DeviceType,
        socialIconZIndex,
        socialItems,
        socialIconSizeUnits,
        socialIconSizeDesktop,
        socialIconSizeTablet,
        socialIconSizeMobile,
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


    /** Start Icon padding */
	const handleSocialIconPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialIconPaddingLink ) {
			switch ( DeviceType ) {
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
			switch ( DeviceType ) {
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
                [DeviceType]: unit
            }
        })
    }
    /** Default padding for desktop (using desktop_padding) */
    const IconPaddingDesktop    = `${socialIconPaddingDesktop.top}${socialIconPaddingUnits} ${socialIconPaddingDesktop.right}${socialIconPaddingUnits} ${socialIconPaddingDesktop.bottom}${socialIconPaddingUnits} ${socialIconPaddingDesktop.left}${socialIconPaddingUnits}`;
    const IconPaddingTablet        = `${socialIconPaddingTablet.top}${socialIconPaddingUnits} ${socialIconPaddingTablet.right}${socialIconPaddingUnits} ${socialIconPaddingTablet.bottom}${socialIconPaddingUnits} ${socialIconPaddingTablet.left}${socialIconPaddingUnits}`;
    const IconPaddingMobile     = `${socialIconPaddingMobile.top}${socialIconPaddingUnits} ${socialIconPaddingMobile.right}${socialIconPaddingUnits} ${socialIconPaddingMobile.bottom}${socialIconPaddingUnits} ${socialIconPaddingMobile.left}${socialIconPaddingUnits}`;
    /** End Padding */

    /** Start Global padding */
    const handleSocialPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialPaddingLink ) {
			switch ( DeviceType ) {
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
			switch ( DeviceType ) {
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
                [DeviceType]: unit
            }
        })
    }
    /** end Global padding */


    /** Default padding for desktop (using desktop_padding) */
    const DesktopPadding    = `${socialPaddingDesktop.top}${socialPaddingUnits} ${socialPaddingDesktop.right}${socialPaddingUnits} ${socialPaddingDesktop.bottom}${socialPaddingUnits} ${socialPaddingDesktop.left}${socialPaddingUnits}`;
    const TabletPadding     = `${socialPaddingTablet.top}${socialPaddingUnits} ${socialPaddingTablet.right}${socialPaddingUnits} ${socialPaddingTablet.bottom}${socialPaddingUnits} ${socialPaddingTablet.left}${socialPaddingUnits}`;
    const MobilePadding     = `${socialPaddingMobile.top}${socialPaddingUnits} ${socialPaddingMobile.right}${socialPaddingUnits} ${socialPaddingMobile.bottom}${socialPaddingUnits} ${socialPaddingMobile.left}${socialPaddingUnits}`;
    /** End Padding */

    /** Start Global margin */
    const handleSocialMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( socialMarginLink ) {
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {socialMarginDesktop: {...socialMargingDesktop, [position]: value}} );
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
                [DeviceType]: unit
            }
        })
    }
    /** end Global margin */

    /** Default margin for desktop */
    const DesktopMargin    = `${socialMarginDesktop.top}${socialMarginUnits} ${socialMarginDesktop.right}${socialMarginUnits} ${socialMarginDesktop.bottom}${socialMarginUnits} ${socialMarginDesktop.left}${socialMarginUnits}`;
    const TabletMargin     = `${socialMarginTablet.top}${socialMarginUnits} ${socialMarginTablet.right}${socialMarginUnits} ${socialMarginTablet.bottom}${socialMarginUnits} ${socialMarginTablet.left}${socialMarginUnits}`;
    const MobileMargin     = `${socialMarginMobile.top}${socialMarginUnits} ${socialMarginMobile.right}${socialMarginUnits} ${socialMarginMobile.bottom}${socialMarginUnits} ${socialMarginMobile.left}${socialMarginUnits}`;
    /** End Margin */

    /** Start Global border */
    const handleSocialBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( socialBorderLink ) {
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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
                [DeviceType]: unit
            }
        })
    }
    /** end Global border */
    /** Default Border for desktop */
    const BorderDesktopWidth     = `${socialBorderDesktop.top}${socialBorderUnits} ${socialBorderDesktop.right}${socialBorderUnits} ${socialBorderDesktop.bottom}${socialBorderUnits} ${socialBorderDesktop.left}${socialBorderUnits}`;
    const BorderTabletWidth      = `${socialBorderTablet.top}${socialBorderUnits} ${socialBorderTablet.right}${socialBorderUnits} ${socialBorderTablet.bottom}${socialBorderUnits} ${socialBorderTablet.left}${socialBorderUnits}`;
    const BorderMobileWidth      = `${socialBorderMobile.top}${socialBorderUnits} ${socialBorderMobile.right}${socialBorderUnits} ${socialBorderMobile.bottom}${socialBorderUnits} ${socialBorderMobile.left}${socialBorderUnits}`;
    /** End Border */

    /** Start Global border radius*/
    const handleSocialBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( socialBorderRadiusLink ) {
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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
                [DeviceType]: unit
            }
        })
    }
    /** end Global border */

    /** Default Border Radius for desktop */
    const BorderRadiusDesktopWidth    = `${socialBorderRadiusDesktop.top}${socialBorderRadiusUnits} ${socialBorderRadiusDesktop.right}${socialBorderRadiusUnits} ${socialBorderRadiusDesktop.bottom}${socialBorderRadiusUnits} ${socialBorderRadiusDesktop.left}${socialBorderRadiusUnits}`;
    const BorderRadiusTabletWidth      = `${socialBorderRadiusTablet.top}${socialBorderRadiusUnits} ${socialBorderRadiusTablet.right}${socialBorderRadiusUnits} ${socialBorderRadiusTablet.bottom}${socialBorderRadiusUnits} ${socialBorderRadiusTablet.left}${socialBorderRadiusUnits}`;
    const BorderRadiusMobileWidth      = `${socialBorderRadiusMobile.top}${socialBorderRadiusUnits} ${socialBorderRadiusMobile.right}${socialBorderRadiusUnits} ${socialBorderRadiusMobile.bottom}${socialBorderRadiusUnits} ${socialBorderRadiusMobile.left}${socialBorderRadiusUnits}`;
    /** End Border Radius */

    return (
        <>

            <style>
            {`
                .fb-social-main-wrapper.${blockID} {
                    z-index: ${socialIconZIndex !== undefined ? socialIconZIndex : ''};
                }
                .fb-social-wrapper {
                    ${socialBgColor !== undefined ? `background-color: ${socialBgColor};` : ''};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${socialBorder};
                    border-width: ${BorderDesktopWidth};
                    border-radius: ${BorderRadiusDesktopWidth} !important;
                    ${socialBorderColor !== undefined ? `border-color: ${socialBorderColor};` : ''};
                    transition: all .3s ease-in-out;
                }
                .fb-social-wrapper:hover {
                    ${socialBgHoverColor !== undefined ? `background-color: ${socialBgHoverColor};` : ''};
                    ${socialBorderHoverColor !== undefined ? `border-color: ${socialBorderHoverColor};` : ''};
                }

                @media only screen and (max-width: 1024px) {

                    .fb-social-wrapper {
                        padding: ${TabletPadding};
                        margin: ${TabletMargin};
                        border-width: ${BorderTabletWidth};
                        border-radius: ${BorderRadiusTabletWidth} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-social-wrapper {
                        padding: ${MobilePadding};
                        margin: ${MobileMargin};
                        border-width: ${BorderMobileWidth};
                        border-radius: ${BorderRadiusMobileWidth} !important;
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
                                        <PanelBody title={__("Social Items", "frontis-blocks")} initialOpen={true}>
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
                                        </PanelBody>
                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Icon", "frontis-blocks")} initialOpen={true}>


                                            <div className="fb-setting-fontsize-wrapper">
                                                <div className="fb-setting-fontsize-header">
                                                    <FB_ResponsiveControl
                                                        labelText={__("Icon Size", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                    />
                                                    <div className="fb-setting-fontsize-units">
                                                        <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                            {UNIT_TYPES.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ socialIconSizeUnits: item.value })}
                                                                    className={`fb-setting-fontsize-units-switcher ${socialIconSizeUnits === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                                <div className="fb-setting-fontsize-rangecontrol">
                                                    <RangeControl
                                                        value={DeviceType === "Desktop" ? socialIconSizeDesktop : DeviceType === "Tablet" ? socialIconSizeTablet : socialIconSizeMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ socialIconSizeDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ socialIconSizeTablet: value });
                                                            } else if (DeviceType === "Mobile") {
                                                                setAttributes({ socialIconSizeMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={100}
                                                        allowReset
                                                        resetFallbackValue={20}
                                                    />
                                                </div>
                                            </div>
                                        </PanelBody>
                                        <PanelBody title={__("Spacing", "frontis-blocks")} initialOpen={true}>
                                            <FB_Spacing 
                                                label={__("Padding", "frontis-blocks")}
                                                DeviceType={DeviceType}
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
                                                </PanelBody>
                                                <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                                                    <FB_Spacing 
                                                        label={__("Padding", "frontis-blocks")}
                                                        DeviceType={DeviceType}
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
                                                        DeviceType={DeviceType}
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
                                                    <BaseControl
                                                        className="fb-setting-color-panel-wrapper"
                                                    >
                                                        <ButtonGroup className="fb-setting-color-panel-btn">
                                                            {NORMAL_HOVER.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ socialBgColorSwitcher: item.value })}
                                                                    className={`fb-setting-color-panel-btn-switchr ${socialBgColorSwitcher === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </BaseControl>

                                                    {socialBgColorSwitcher === 'normal' && (
                                                        <BaseControl 
                                                            label={__("Nomal Color", "frontis-blocks")}
                                                            className="fb-setting-color-setting-wrapper"
                                                        >
                                                            <Dropdown
                                                                className="fb-setting-color-setting-icon-dropdown"
                                                                contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                                popoverProps={{ placement: 'bottom-start' }}
                                                                renderToggle={({ isOpen, onToggle }) => (
                                                                    <Button
                                                                        variant="primary"
                                                                        onClick={onToggle}
                                                                        aria-expanded={isOpen}
                                                                        className="fb-setting-color-setting-icon-btn"
                                                                    >
                                                                        <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                                    </Button>
                                                                )}
                                                                renderContent={() => (
                                                                    <div className="fb-setting-color-setting-icon-popup">
                                                                        <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                            <div className="fb-setting-normal-color">
                                                                                <ColorPicker
                                                                                    color={socialBgColor}
                                                                                    onChange={(value) => setAttributes({ socialBgColor: value })}
                                                                                    enableAlpha={true}
                                                                                />
                                                                                <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                                <ColorPalette
                                                                                    colors={[
                                                                                        { color: '#F72585' },
                                                                                        { color: '#7209B7' },
                                                                                        { color: '#3A0CA3' },
                                                                                        { color: '#4361EE' },
                                                                                        { color: '#4CC9F0' },
                                                                                    ]}
                                                                                    disableCustomColors={true}
                                                                                    value={socialBgColor}
                                                                                    onChange={(value) => setAttributes({ socialBgColor: value })}
                                                                                />
                                                                            </div>
                                                                        </BaseControl>
                                                                    </div>
                                                                )}
                                                            />
                                                        </BaseControl>
                                                    )}

                                                    {socialBgColorSwitcher === 'hover' && (
                                                        <BaseControl 
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            className="fb-setting-color-setting-wrapper"
                                                        >
                                                            <Dropdown
                                                                className="fb-setting-color-setting-icon-dropdown"
                                                                contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                                popoverProps={{ placement: 'bottom-start' }}
                                                                renderToggle={({ isOpen, onToggle }) => (
                                                                    <Button
                                                                        variant="primary"
                                                                        onClick={onToggle}
                                                                        aria-expanded={isOpen}
                                                                        className="fb-setting-color-setting-icon-btn"
                                                                    >
                                                                        <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                                    </Button>
                                                                )}
                                                                renderContent={() => (
                                                                    <div className="fb-setting-color-setting-icon-popup">
                                                                        <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                            <div className="fb-setting-hover-color">
                                                                                <ColorPicker
                                                                                    color={socialBgHoverColor}
                                                                                    onChange={(value) => setAttributes({ socialBgHoverColor: value })}
                                                                                    enableAlpha={true}
                                                                                />
                                                                                <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                                <ColorPalette
                                                                                    colors={[
                                                                                        { color: '#F72585' },
                                                                                        { color: '#7209B7' },
                                                                                        { color: '#3A0CA3' },
                                                                                        { color: '#4361EE' },
                                                                                        { color: '#4CC9F0' },
                                                                                    ]}
                                                                                    disableCustomColors={true}
                                                                                    value={socialBgHoverColor}
                                                                                    onChange={(value) => setAttributes({ socialBgHoverColor: value })}
                                                                                />
                                                                            </div>
                                                                        </BaseControl>
                                                                    </div>
                                                                )}
                                                            />
                                                        </BaseControl>
                                                    )}
                                                </PanelBody>
                                                <PanelBody title={__("Border and Radius", "frontis-blocks")} initialOpen={false}>


                                                    <SelectControl
                                                            label={__("Border Style", "frontis-blocks")}
                                                            value={socialBorder}
                                                            options={BORDER_STYLES}
                                                            onChange={(value) => setAttributes({ socialBorder: value })}
                                                        />

                                                    <BaseControl
                                                        label={__("Border Color", "frontis-blocks")}
                                                        className="fb-setting-color-panel-wrapper"
                                                    >
                                                        <ButtonGroup className="fb-setting-color-panel-btn">
                                                            {NORMAL_HOVER.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ socialBorderColorSwitcher: item.value })}
                                                                    className={`fb-setting-color-panel-btn-switchr ${socialBorderColorSwitcher === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </BaseControl>

                                                    {socialBorderColorSwitcher === 'normal' && (
                                                        <BaseControl 
                                                            label={__("Nomal Color", "frontis-blocks")}
                                                            className="fb-setting-color-setting-wrapper"
                                                        >
                                                            <Dropdown
                                                                className="fb-setting-color-setting-icon-dropdown"
                                                                contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                                popoverProps={{ placement: 'bottom-start' }}
                                                                renderToggle={({ isOpen, onToggle }) => (
                                                                    <Button
                                                                        variant="primary"
                                                                        onClick={onToggle}
                                                                        aria-expanded={isOpen}
                                                                        aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                        className="fb-setting-color-setting-icon-btn"
                                                                    >
                                                                        <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                                    </Button>
                                                                )}
                                                                renderContent={() => (
                                                                    <div className="fb-setting-color-setting-icon-popup">
                                                                        <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                            <div className="fb-setting-normal-color">
                                                                                <ColorPicker
                                                                                    color={socialBorderColor}
                                                                                    onChange={(value) => setAttributes({ socialBorderColor: value })}
                                                                                    enableAlpha={true}
                                                                                />
                                                                                <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                                <ColorPalette
                                                                                    colors={[
                                                                                        { color: '#F72585' },
                                                                                        { color: '#7209B7' },
                                                                                        { color: '#3A0CA3' },
                                                                                        { color: '#4361EE' },
                                                                                        { color: '#4CC9F0' },
                                                                                    ]}
                                                                                    disableCustomColors={true}
                                                                                    value={socialBorderColor}
                                                                                    onChange={(value) => setAttributes({ socialBorderColor: value })}
                                                                                />
                                                                            </div>
                                                                        </BaseControl>
                                                                    </div>
                                                                )}
                                                            />
                                                        </BaseControl>
                                                    )}

                                                    {socialBorderColorSwitcher === 'hover' && (
                                                        <BaseControl 
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            className="fb-setting-color-setting-wrapper"
                                                        >
                                                            <Dropdown
                                                                className="fb-setting-color-setting-icon-dropdown"
                                                                contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                                popoverProps={{ placement: 'bottom-start' }}
                                                                renderToggle={({ isOpen, onToggle }) => (
                                                                    <Button
                                                                        variant="primary"
                                                                        onClick={onToggle}
                                                                        aria-expanded={isOpen}
                                                                        aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                        className="fb-setting-color-setting-icon-btn"
                                                                    >
                                                                        <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                                    </Button>
                                                                )}
                                                                renderContent={() => (
                                                                    <div className="fb-setting-color-setting-icon-popup">
                                                                        <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                            <div className="fb-setting-hover-color">
                                                                                <ColorPicker
                                                                                    color={socialBorderHoverColor}
                                                                                    onChange={(value) => setAttributes({ socialBorderHoverColor: value })}
                                                                                    enableAlpha={true}
                                                                                />
                                                                                <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                                <ColorPalette
                                                                                    colors={[
                                                                                        { color: '#F72585' },
                                                                                        { color: '#7209B7' },
                                                                                        { color: '#3A0CA3' },
                                                                                        { color: '#4361EE' },
                                                                                        { color: '#4CC9F0' },
                                                                                    ]}
                                                                                    disableCustomColors={true}
                                                                                    value={socialBorderHoverColor}
                                                                                    onChange={(value) => setAttributes({ socialBorderHoverColor: value })}
                                                                                />
                                                                            </div>
                                                                        </BaseControl>
                                                                    </div>
                                                                )}
                                                            />
                                                        </BaseControl>
                                                    )}
                                                    <FB_Spacing 
                                                        label={__("Border", "frontis-blocks")}
                                                        DeviceType={DeviceType}
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
                                                        DeviceType={DeviceType}
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