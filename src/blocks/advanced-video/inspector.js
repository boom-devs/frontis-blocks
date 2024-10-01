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
    TextControl,
    TextareaControl,
    ToggleControl,
} from '@wordpress/components';

import {
    NORMAL_HOVER,
    UNIT_TYPES,
    ICON_ALIGN,
    TEXT_ALIGN,
    BORDER_STYLES,
} from "./constants/constants";

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        DeviceType,
        videoZIndex,
        videoURL,
        autoPlaySwitcher,
        muteSwitcher,
        loopSwitcher,
        showControlsSwitcher,

    } = attributes;

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-advanced-video-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

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
                                className: "fb-tab advanced",
                            },
                        ]}
                    >
                        {(tab) => (
                            <div className={"fb-tab-controls" + tab.name}>
                                {tab.name === 'general' && (
                                    <>
                                        <PanelBody title={__("General Info", "frontis-blocks")} initialOpen={true}>
                                            <TextareaControl
                                                label={__("Video URL", "frontis-blocks")}
                                                value={videoURL}
                                                onChange={(videoURL) => setAttributes({ videoURL })}
                                            />

                                            <BaseControl 
                                                label={__("Video Options", "frontis-blocks")}
                                                className="fb-video-options-setting"
                                            >
                                                <ToggleControl
                                                    label={__("Autoplay", "frontis-blocks")}
                                                    checked={autoPlaySwitcher}
                                                    onChange={(value) => setAttributes({ autoPlaySwitcher: value })}
                                                />
                                                <ToggleControl
                                                    label={__("Mute", "frontis-blocks")}
                                                    checked={muteSwitcher}
                                                    onChange={(value) => setAttributes({ muteSwitcher: value })}
                                                />
                                                <ToggleControl
                                                    label={__("Loop", "frontis-blocks")}
                                                    checked={loopSwitcher}
                                                    onChange={(value) => setAttributes({ loopSwitcher: value })}
                                                />
                                                <ToggleControl
                                                    label={__("Show Controls", "frontis-blocks")}
                                                    checked={showControlsSwitcher}
                                                    onChange={(value) => setAttributes({ showControlsSwitcher: value })}
                                                />
                                            </BaseControl>

                                        </PanelBody>

                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Style", "frontis-blocks")} initialOpen={true}>

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
                                                        value={videoZIndex}
                                                        onChange={(value) => setAttributes({ videoZIndex: value === 0 ? undefined : value })}
                                                        min={1}
                                                        max={10000}
                                                        step={1}
                                                        allowReset
                                                        resetFallbackValue={100}
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