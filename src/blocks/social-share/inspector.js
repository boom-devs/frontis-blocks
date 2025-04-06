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
import { useEffect, useState } from '@wordpress/element';
import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        shareNetworks,
        displayStyle,
        alignment
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

    return (
        <>
            
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
                                            
                                            <RadioControl
                                                label={__("Alignment")}
                                                selected={alignment}
                                                options={[
                                                    { label: 'Left', value: 'left' },
                                                    { label: 'Center', value: 'center' },
                                                    { label: 'Right', value: 'right' },
                                                ]}
                                                onChange={(value) => setAttributes({ alignment: value })}
                                            />
                                        </PanelBody>
                                    </>
                                )}
                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Icon Styling", "frontis-blocks")} initialOpen={true}>
                                            
                                        </PanelBody>
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