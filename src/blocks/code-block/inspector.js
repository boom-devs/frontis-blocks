import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TabPanel,
    SelectControl,
    ToggleControl,
    RangeControl,
    ColorPalette,
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { store as editorStore } from '@wordpress/editor';
import {
    ANIMATION,
    CODE_LANGUAGES,
    CODE_THEMES
} from "./constants/constants";
import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        language,
        showLineNumbers,
        theme,
        fontSize,
        lineHeight,
        customBackgroundColor,
        customTextColor,
    } = attributes;
    
    const deviceType = useDeviceType();
   
    // Generate unique block ID if not set
    useEffect(() => {
        if (clientId && typeof clientId === 'string' && !blockID) {
            setAttributes({
                blockID: "fb-code-block-" + clientId.slice(0, 8),
            });
        }
    }, [clientId, blockID, setAttributes]);
    
    // Create theme options from CODE_THEMES
    const themeOptions = Object.keys(CODE_THEMES).map(key => {
        return { value: key, label: key.charAt(0).toUpperCase() + key.slice(1) };
    });
    
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
                                        <PanelBody title={__("Code Settings", "frontis-blocks")} initialOpen={true}>
                                            <SelectControl
                                                label={__("Language", "frontis-blocks")}
                                                value={language || 'javascript'}
                                                options={CODE_LANGUAGES}
                                                onChange={(value) => setAttributes({ language: value })}
                                            />
                                            <ToggleControl
                                                label={__("Show Line Numbers", "frontis-blocks")}
                                                checked={showLineNumbers || false}
                                                onChange={(value) => setAttributes({ showLineNumbers: value })}
                                            />
                                            <SelectControl
                                                label={__("Theme", "frontis-blocks")}
                                                value={theme || 'default'}
                                                options={themeOptions}
                                                onChange={(value) => setAttributes({ theme: value })}
                                            />
                                        </PanelBody>
                                    </>
                                )}
                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Typography", "frontis-blocks")} initialOpen={true}>
                                            <RangeControl
                                                label={__("Font Size", "frontis-blocks")}
                                                value={fontSize || 14}
                                                onChange={(value) => setAttributes({ fontSize: value })}
                                                min={10}
                                                max={24}
                                                step={1}
                                            />
                                            <RangeControl
                                                label={__("Line Height", "frontis-blocks")}
                                                value={lineHeight || 1.5}
                                                onChange={(value) => setAttributes({ lineHeight: value })}
                                                min={1}
                                                max={2.5}
                                                step={0.1}
                                            />
                                        </PanelBody>
                                        <PanelBody title={__("Custom Colors", "frontis-blocks")} initialOpen={true}>
                                            <p>{__("Custom Background Color", "frontis-blocks")}</p>
                                            <p>{__("(Overrides theme background)", "frontis-blocks")}</p>
                                            <ColorPalette
                                                value={customBackgroundColor}
                                                onChange={(value) => setAttributes({ customBackgroundColor: value === undefined ? '' : value })}
                                            />
                                            <p>{__("Custom Text Color", "frontis-blocks")}</p>
                                            <p>{__("(Overrides theme text color)", "frontis-blocks")}</p>
                                            <ColorPalette
                                                value={customTextColor}
                                                onChange={(value) => setAttributes({ customTextColor: value === undefined ? '' : value })}
                                            />
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