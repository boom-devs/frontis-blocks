import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TabPanel,
    SelectControl,
    RangeControl
} from '@wordpress/components';
import {
    BORDER_STYLES
} from "./constants/constants";
import { useEffect, useState, useMemo } from '@wordpress/element';
import { useDeviceType } from "@Config/displayType";
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_Spacing from '@Components/spacing';
import FBIconPicker from "../../components/icon-picker";

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        socialMediaType,
        icon,
        displayStyle,
        socialItemColorSwitcher,
        socialItemColor,
        socialItemHoverColor,
        socialItemBgColorSwitcher,
        socialItemBgColor,
        socialItemBgColorHover,
        socialIconPaddingUnits,
        socialIconPaddingDesktop,
        socialIconPaddingTablet,
        socialIconPaddingMobile,
        socialIconPaddingLink,

        socialIconMarginUnits,
        socialIconMarginDesktop,
        socialIconMarginTablet,
        socialIconMarginMobile,
        socialIconMarginLink,

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
        socialIconBorderRadiusLink
    } = attributes;

    const deviceType = useDeviceType();
    
    // Generate unique block ID
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-social-share-child-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    // Available social media types
    const socialMediaTypes = [
        { value: 'facebook', label: 'Facebook' },
        { value: 'twitter', label: 'Twitter' },
        { value: 'linkedin', label: 'LinkedIn' },
        { value: 'pinterest', label: 'Pinterest' },
        { value: 'reddit', label: 'Reddit' },
        { value: 'whatsapp', label: 'WhatsApp' }
    ];

    /** Start Social Icon Padding */
    const socialIconPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (socialIconPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialIconPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialIconPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialIconPaddingMobile: {
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
                    setAttributes({ socialIconPaddingDesktop: { ...socialIconPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialIconPaddingTablet: { ...socialIconPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialIconPaddingMobile: { ...socialIconPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const socialIconPaddingLinkBtn = () => {
        setAttributes({
            socialIconPaddingLink: !socialIconPaddingLink
        });
    };

    const socialIconPaddingUnitsHandler = (unit) => {
        setAttributes({
            socialIconPaddingUnits: {
                ...socialIconPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default padding for Social Icon */
    const socialIconPaddingDesktopWidth = `${socialIconPaddingDesktop.top}${socialIconPaddingUnits.Desktop} ${socialIconPaddingDesktop.right}${socialIconPaddingUnits.Desktop} ${socialIconPaddingDesktop.bottom}${socialIconPaddingUnits.Desktop} ${socialIconPaddingDesktop.left}${socialIconPaddingUnits.Desktop}`;
    const socialIconTabletPaddingWidth = `${socialIconPaddingTablet.top}${socialIconPaddingUnits.Tablet} ${socialIconPaddingTablet.right}${socialIconPaddingUnits.Tablet} ${socialIconPaddingTablet.bottom}${socialIconPaddingUnits.Tablet} ${socialIconPaddingTablet.left}${socialIconPaddingUnits.Tablet}`;
    const socialIconPaddingMobileWidth = `${socialIconPaddingMobile.top}${socialIconPaddingUnits.Mobile} ${socialIconPaddingMobile.right}${socialIconPaddingUnits.Mobile} ${socialIconPaddingMobile.bottom}${socialIconPaddingUnits.Mobile} ${socialIconPaddingMobile.left}${socialIconPaddingUnits.Mobile}`;
    /** End Social Icon Padding */

    /** Start Social Icon Margin */
    const socialIconMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (socialIconMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialIconMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialIconMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialIconMarginMobile: {
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
                    setAttributes({ socialIconMarginDesktop: { ...socialIconMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialIconMarginTablet: { ...socialIconMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialIconMarginMobile: { ...socialIconMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const socialIconMarginLinkBtn = () => {
        setAttributes({
            socialIconMarginLink: !socialIconMarginLink
        });
    };

    const socialIconMarginUnitsHandler = (unit) => {
        setAttributes({
            socialIconMarginUnits: {
                ...socialIconMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default margin for Social Icon */
    const socialIconMarginDesktopWidth = `${socialIconMarginDesktop.top}${socialIconMarginUnits.Desktop} ${socialIconMarginDesktop.right}${socialIconMarginUnits.Desktop} ${socialIconMarginDesktop.bottom}${socialIconMarginUnits.Desktop} ${socialIconMarginDesktop.left}${socialIconMarginUnits.Desktop}`;
    const socialIconTabletMarginWidth = `${socialIconMarginTablet.top}${socialIconMarginUnits.Tablet} ${socialIconMarginTablet.right}${socialIconMarginUnits.Tablet} ${socialIconMarginTablet.bottom}${socialIconMarginUnits.Tablet} ${socialIconMarginTablet.left}${socialIconMarginUnits.Tablet}`;
    const socialIconMarginMobileWidth = `${socialIconMarginMobile.top}${socialIconMarginUnits.Mobile} ${socialIconMarginMobile.right}${socialIconMarginUnits.Mobile} ${socialIconMarginMobile.bottom}${socialIconMarginUnits.Mobile} ${socialIconMarginMobile.left}${socialIconMarginUnits.Mobile}`;
    /** End Social Icon Margin */

    /** Start Social Icon Border */
    const socialIconBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (socialIconBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialIconBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialIconBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialIconBorderMobile: {
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
                    setAttributes({ socialIconBorderDesktop: { ...socialIconBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialIconBorderTablet: { ...socialIconBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialIconBorderMobile: { ...socialIconBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const socialIconBorderLinkBtn = () => {
        setAttributes({
            socialIconBorderLink: !socialIconBorderLink
        });
    };

    const socialIconBorderUnitsHandler = (unit) => {
        setAttributes({
            socialIconBorderUnits: {
                ...socialIconBorderUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border for Social Icon */
    const socialIconBorderDesktopWidth = `${socialIconBorderDesktop.top}${socialIconBorderUnits.Desktop} ${socialIconBorderDesktop.right}${socialIconBorderUnits.Desktop} ${socialIconBorderDesktop.bottom}${socialIconBorderUnits.Desktop} ${socialIconBorderDesktop.left}${socialIconBorderUnits.Desktop}`;
    const socialIconTabletBorderWidth = `${socialIconBorderTablet.top}${socialIconBorderUnits.Tablet} ${socialIconBorderTablet.right}${socialIconBorderUnits.Tablet} ${socialIconBorderTablet.bottom}${socialIconBorderUnits.Tablet} ${socialIconBorderTablet.left}${socialIconBorderUnits.Tablet}`;
    const socialIconBorderMobileWidth = `${socialIconBorderMobile.top}${socialIconBorderUnits.Mobile} ${socialIconBorderMobile.right}${socialIconBorderUnits.Mobile} ${socialIconBorderMobile.bottom}${socialIconBorderUnits.Mobile} ${socialIconBorderMobile.left}${socialIconBorderUnits.Mobile}`;
    /** End Social Icon Border */

    /** Start Social Icon Border Radius */
    const socialIconBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (socialIconBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialIconBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialIconBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialIconBorderRadiusMobile: {
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
                    setAttributes({ socialIconBorderRadiusDesktop: { ...socialIconBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialIconBorderRadiusTablet: { ...socialIconBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialIconBorderRadiusMobile: { ...socialIconBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const socialIconBorderRadiusLinkBtn = () => {
        setAttributes({
            socialIconBorderRadiusLink: !socialIconBorderRadiusLink
        });
    };

    const socialIconBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            socialIconBorderRadiusUnits: {
                ...socialIconBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border radius for Social Icon */
    const socialIconBorderRadiusDesktopWidth = `${socialIconBorderRadiusDesktop.top}${socialIconBorderRadiusUnits.Desktop} ${socialIconBorderRadiusDesktop.right}${socialIconBorderRadiusUnits.Desktop} ${socialIconBorderRadiusDesktop.bottom}${socialIconBorderRadiusUnits.Desktop} ${socialIconBorderRadiusDesktop.left}${socialIconBorderRadiusUnits.Desktop}`;
    const socialIconTabletBorderRadiusWidth = `${socialIconBorderRadiusTablet.top}${socialIconBorderRadiusUnits.Tablet} ${socialIconBorderRadiusTablet.right}${socialIconBorderRadiusUnits.Tablet} ${socialIconBorderRadiusTablet.bottom}${socialIconBorderRadiusUnits.Tablet} ${socialIconBorderRadiusTablet.left}${socialIconBorderRadiusUnits.Tablet}`;
    const socialIconBorderRadiusMobileWidth = `${socialIconBorderRadiusMobile.top}${socialIconBorderRadiusUnits.Mobile} ${socialIconBorderRadiusMobile.right}${socialIconBorderRadiusUnits.Mobile} ${socialIconBorderRadiusMobile.bottom}${socialIconBorderRadiusUnits.Mobile} ${socialIconBorderRadiusMobile.left}${socialIconBorderRadiusUnits.Mobile}`;
    /** End Social Icon Border Radius */

    // Handle displayStyle change
    const handleDisplayStyleChange = (value) => {
        setAttributes({ displayStyle: value });
    };

    const iconHandler = (iconName) => {
		setAttributes({ icon: iconName });
	};
    const fbSocialShareStyle = useMemo(
        () => `
        .${blockID} .social-share-child-container .social-share-icon .custom-icon {
            ${socialItemBgColor ? `background-color: ${socialItemBgColor};` : ''}
            ${socialIconPaddingDesktopWidth && socialIconPaddingDesktop?.top ? `padding: ${socialIconPaddingDesktopWidth};` : ''}
            ${socialIconMarginDesktopWidth && socialIconMarginDesktop?.top ? `margin: ${socialIconMarginDesktopWidth};` : ''}
            ${socialIconBorder ? `border: ${socialIconBorder};` : ''}
            ${socialIconBorderColor ? `border-color: ${socialIconBorderColor};` : ''}
            ${socialIconBorderDesktopWidth && socialIconBorderDesktop?.top ? `border-width: ${socialIconBorderDesktopWidth};` : ''}
            ${socialIconBorderRadiusDesktopWidth && socialIconBorderRadiusDesktop?.top ? `border-radius: ${socialIconBorderRadiusDesktopWidth};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-icon .custom-icon:hover {
            ${socialItemBgColorHover ? `background-color: ${socialItemBgColorHover};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-icon .custom-icon svg path{
            ${socialItemColor ? `fill: ${socialItemColor};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-icon .custom-icon:hover svg path{
            ${socialItemHoverColor ? `fill: ${socialItemHoverColor};` : ''}
        }
        
        @media all and (max-width: 1024px){
            ${socialIconTabletPaddingWidth && socialIconPaddingTablet?.top ? `padding: ${socialIconTabletPaddingWidth};` : ''}
            ${socialIconTabletMarginWidth && socialIconMarginTablet?.top ? `margin: ${socialIconTabletMarginWidth};` : ''}
            ${socialIconTabletBorderWidth && socialIconBorderTablet?.top ? `border-width: ${socialIconTabletBorderWidth};` : ''}
            ${socialIconTabletBorderRadiusWidth && socialIconBorderRadiusTablet?.top ? `border-radius: ${socialIconTabletBorderRadiusWidth};` : ''}
        }
        @media all and (max-width: 767px){
            ${socialIconPaddingMobileWidth && socialIconPaddingMobile?.top ? `padding: ${socialIconPaddingMobileWidth};` : ''}
            ${socialIconMarginMobileWidth && socialIconMarginMobile?.top ? `margin: ${socialIconMarginMobileWidth};` : ''}
            ${socialIconBorderMobileWidth && socialIconBorderMobile?.top ? `border-width: ${socialIconBorderMobileWidth};` : ''}
            ${socialIconBorderRadiusMobileWidth && socialIconBorderRadiusMobile?.top ? `border-radius: ${socialIconBorderRadiusMobileWidth};` : ''}
        }
        `,
        [
        blockID,
        socialItemColorSwitcher,
        socialItemColor,
        socialItemHoverColor,
        socialItemBgColorSwitcher,
        socialItemBgColor,
        socialItemBgColorHover,
        socialIconPaddingDesktopWidth,
        socialIconMarginDesktopWidth,
        socialIconBorderDesktopWidth,
        socialIconBorderRadiusDesktopWidth,
        socialIconBorderColor,
        socialIconTabletPaddingWidth,
        socialIconTabletMarginWidth,
        socialIconTabletBorderWidth,
        socialIconTabletBorderRadiusWidth,
        socialIconPaddingMobileWidth,
        socialIconMarginMobileWidth,
        socialIconBorderMobileWidth,
        socialIconBorderRadiusMobileWidth
        ],
    );
    
    useEffect(() => {
        setAttributes({
            blockStyle: `${fbSocialShareStyle}`.replace(/\s+/g, ' ').trim(),
        });
    }, [fbSocialShareStyle, setAttributes]);

    const editorStyle = `${fbSocialShareStyle}`.replace(/\s+/g, ' ').trim();

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
                                        <PanelBody title={__("Icon", "frontis-blocks")} initialOpen={true}>
                                            <SelectControl
                                                label={__("Social Media Type", "frontis-blocks")}
                                                value={socialMediaType}
                                                options={[
                                                    { value: '', label: __("Select a type", "frontis-blocks") },
                                                    ...socialMediaTypes
                                                ]}
                                                onChange={(value) => setAttributes({ socialMediaType: value })}
                                            />

                                            <SelectControl
                                                label={__("Display Style", "frontis-blocks")}
                                                value={displayStyle}
                                                options={[
                                                    { value: 'icon', label: __("Icon Only", "frontis-blocks") },
                                                    { value: 'text', label: __("Text Only", "frontis-blocks") },
                                                    { value: 'icon-text', label: __("Icon & Text", "frontis-blocks") },
                                                ]}
                                                onChange={handleDisplayStyleChange}
                                            />

                                            <FBIconPicker
                                                value={icon}
                                                setIconHandler={iconHandler}
                                            />
                                        </PanelBody>
                                    </>
                                )}
                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Icon", "frontis-blocks")} initialOpen={true}>
                                            <FB_SwitcherControl
                                                label={__("Icon Color", "frontis-blocks")}
                                                globalSwitcher={socialItemColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ socialItemColorSwitcher: value })}
                                            />

                                            {socialItemColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={socialItemColor}
                                                    setGlobalColor={(value) => setAttributes({ socialItemColor: value })}
                                                />
                                            )}

                                            {socialItemColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={socialItemHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ socialItemHoverColor: value })}
                                                />
                                            )}

                                            <FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={socialItemBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ socialItemBgColorSwitcher: value })}
                                            />

                                            {socialItemBgColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={socialItemBgColor}
                                                    setGlobalColor={(value) => setAttributes({ socialItemBgColor: value })}
                                                />
                                            )}

                                            {socialItemBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={socialItemBgColorHover}
                                                    setGlobalColor={(value) => setAttributes({ socialItemBgColorHover: value })}
                                                />
                                            )}
                                        </PanelBody>

                                        <PanelBody title={__("Spacing", "frontis-blocks")} initialOpen={false}>
                                            <FB_Spacing
                                                label={__("Padding", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={socialIconPaddingUnitsHandler}
                                                spacingUnits={socialIconPaddingUnits}
                                                spacingDesktop={socialIconPaddingDesktop}
                                                spacingTablet={socialIconPaddingTablet}
                                                spacingMobile={socialIconPaddingMobile}
                                                handleSpacingUnitHandler={socialIconPaddingUnitsChange}
                                                spacingCombineBtn={socialIconPaddingLink}
                                                spacingCombineBtnHandler={socialIconPaddingLinkBtn}
                                                setAttributes={setAttributes}
                                            />
                                            <FB_Spacing
                                                label={__("Margin", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={socialIconMarginUnitsHandler}
                                                spacingUnits={socialIconMarginUnits}
                                                spacingDesktop={socialIconMarginDesktop}
                                                spacingTablet={socialIconMarginTablet}
                                                spacingMobile={socialIconMarginMobile}
                                                handleSpacingUnitHandler={socialIconMarginUnitsChange}
                                                spacingCombineBtn={socialIconMarginLink}
                                                spacingCombineBtnHandler={socialIconMarginLinkBtn}
                                                setAttributes={setAttributes}
                                            />
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
                                                spacingUnitsHandler={socialIconBorderUnitsHandler}
                                                spacingUnits={socialIconBorderUnits}
                                                spacingDesktop={socialIconBorderDesktop}
                                                spacingTablet={socialIconBorderTablet}
                                                spacingMobile={socialIconBorderMobile}
                                                handleSpacingUnitHandler={socialIconBorderUnitsChange}
                                                spacingCombineBtn={socialIconBorderLink}
                                                spacingCombineBtnHandler={socialIconBorderLinkBtn}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_Spacing
                                                label={__("Border Radius", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={socialIconBorderRadiusUnitsHandler}
                                                spacingUnits={socialIconBorderRadiusUnits}
                                                spacingDesktop={socialIconBorderRadiusDesktop}
                                                spacingTablet={socialIconBorderRadiusTablet}
                                                spacingMobile={socialIconBorderRadiusMobile}
                                                handleSpacingUnitHandler={socialIconBorderRadiusUnitsChange}
                                                spacingCombineBtn={socialIconBorderRadiusLink}
                                                spacingCombineBtnHandler={socialIconBorderRadiusLinkBtn}
                                                setAttributes={setAttributes}
                                            />
                                        </PanelBody>
                                    </>
                                )}
                                {tab.name === "advanced" && (
                                    <>
                                        <PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
                                            
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