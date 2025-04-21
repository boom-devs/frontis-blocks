import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TabPanel,
    ToggleControl,
    RangeControl,
    SelectControl,
    ColorPicker,
    ColorPalette,
    RadioControl
} from '@wordpress/components';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { useDeviceType } from "@Config/displayType";
import FBIconPicker from "../../components/icon-picker";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        shareNetworks,
        displayStyle,
        alignment,
        socialIcon,
        blockStyle
    } = attributes;

    const deviceType = useDeviceType();
    
    // Generate unique block ID
    useEffect(() => {
        if (clientId && typeof clientId === 'string' && !blockID) {
            setAttributes({
                blockID: "fb-social-share" + clientId.slice(0, 8),
            });
        }
    }, [clientId, blockID, setAttributes]);

    const updateNetworkStatus = (networkId, enabled) => {
        const updatedNetworks = shareNetworks.map(network => {
            if (network.id === networkId) {
                return { ...network, enabled };
            }
            return network;
        });
        
        setAttributes({ shareNetworks: updatedNetworks });
    };

    const socialIconHandler = (iconName) => {
		setAttributes({ socialIcon: iconName });
	};

    const fbSocialShareStyle = useMemo(
		() => `
        .fb-icon-box-main-wrapper.${blockID} {

        }
        `,
		[

        ],
	);
    useEffect(() => {
		setAttributes({
			blockStyle: `${fbSocialShareStyle}`.replace(/\s+/g, ' ').trim(),
		});
	}, [fbSocialShareStyle, customCss]);

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
                                        <PanelBody title={__("Social Networks", "frontis-blocks")} initialOpen={true}>
                                            {shareNetworks.map(network => (
                                                <ToggleControl
                                                    key={network.id}
                                                    label={network.label}
                                                    checked={network.enabled}
                                                    onChange={(enabled) => updateNetworkStatus(network.id, enabled)}
                                                />
                                            ))}
                                        </PanelBody>
                                        
                                        <PanelBody title={__("Display Settings", "frontis-blocks")} initialOpen={true}>
                                            <SelectControl
                                                label={__("Display Style")}
                                                value={displayStyle}
                                                options={[
                                                    { label: 'Icon Only', value: 'icon' },
                                                    { label: 'Text Only', value: 'text' },
                                                    { label: 'Icon & Text', value: 'icon-text' },
                                                ]}
                                                onChange={(value) => setAttributes({ displayStyle: value })}
                                            />
                                            
                                        </PanelBody>

                                        <PanelBody title={__("Icons", "frontis-blocks")} initialOpen={true}>
                                            
                                            <FBIconPicker
                                                value={socialIcon}
                                                setIconHandler={socialIconHandler}
                                            />
                                        </PanelBody>
                                    </>
                                )}
                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Icon", "frontis-blocks")} initialOpen={true}>
                                            
                                  Styling       </PanelBody>
                                    </>
                                )}
                                {tab.name === "advanced" && (
                                    <>
                                        <PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
                                            {/* Add advanced settings here if needed */}
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