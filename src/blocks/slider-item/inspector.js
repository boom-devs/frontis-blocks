import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import { PanelBody, TabPanel, Button } from '@wordpress/components';
import FB_InputControl from '@Components/input-control';
import { useDeviceType } from '@Config/displayType';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { 
        blockId,
        sliderItems,
        blockStyle,
    } = attributes;
    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === "string") {
            setAttributes({ blockId: `fb-slider-item-${clientId.slice(0, 8)}` });
        }
    }, [clientId]);
    
    return (

        <>
            <InspectorControls>
                <div className="fb-inspector-control">
                    <TabPanel
                        className="fb-parent-tab-panel"
                        activeClass="active-tab"
                        tabs={[
                            { name: "general", title: __("General", "frontis-blocks"), className: "fb-tab general" },
                            { name: "styles", title: __("Style", "frontis-blocks"), className: "fb-tab styles" },
                            { name: "advanced", title: __("Advanced", "frontis-blocks"), className: "fb-tab advanced" },
                        ]}
                    >
                        {(tab) => (
                            <div className={`fb-tab-controls ${tab.name}`}>
                                {tab.name === "general" && (
                                    <PanelBody title={__("Slider", "frontis-blocks")} initialOpen>

                                    </PanelBody>
                                )}

                                {tab.name === "styles" && (
                                    <PanelBody title={__("Style", "frontis-blocks")} initialOpen>
                                        {/* Add style settings here */}
                                    </PanelBody>
                                )}

                                {tab.name === "advanced" && (
                                    <PanelBody title={__("Layout", "frontis-blocks")} initialOpen>
                                        {/* Add advanced settings here */}
                                    </PanelBody>
                                )}
                            </div>
                        )}
                    </TabPanel>
                </div>
            </InspectorControls>
        </>
    );
}
