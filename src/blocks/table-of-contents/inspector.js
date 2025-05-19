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
    TextControl,
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        smoothScroll,
        collapsible,
        initialCollapsed,
        enableDesktopSticky,
        enableMobileCollapsible,
        tocTitle,
        maxHeadingLevel,
        minHeadingLevel,
        listStyle,
        stickyOffset,
        maxHeight,
    } = attributes;

    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-table-of-contents-" + clientId.slice(0, 8),
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
                                className: "fb-tab advance",
                            },
                        ]}
                    >
                        {(tab) => (
                            <div className={"fb-tab-controls " + tab.name}>
                                {tab.name === 'general' && (
                                    <>
                                        <PanelBody title={__("TOC Settings", "frontis-blocks")} initialOpen={true}>
                                            <TextControl
                                                label={__("Title", "frontis-blocks")}
                                                value={tocTitle || __("Table of Contents", "frontis-blocks")}
                                                onChange={(value) => setAttributes({ tocTitle: value })}
                                            />
                                            
                                            <RangeControl
                                                label={__("Minimum Heading Level", "frontis-blocks")}
                                                value={minHeadingLevel || 2}
                                                onChange={(value) => setAttributes({ minHeadingLevel: value })}
                                                min={1}
                                                max={6}
                                            />
                                            
                                            <RangeControl
                                                label={__("Maximum Heading Level", "frontis-blocks")}
                                                value={maxHeadingLevel || 4}
                                                onChange={(value) => setAttributes({ maxHeadingLevel: value })}
                                                min={1}
                                                max={6}
                                            />
                                            
                                            <SelectControl
                                                label={__("List Style", "frontis-blocks")}
                                                value={listStyle || "disc"}
                                                options={[
                                                    { label: __("Disc", "frontis-blocks"), value: "disc" },
                                                    { label: __("Circle", "frontis-blocks"), value: "circle" },
                                                    { label: __("Square", "frontis-blocks"), value: "square" },
                                                    { label: __("None", "frontis-blocks"), value: "none" },
                                                    { label: __("Decimal", "frontis-blocks"), value: "decimal" },
                                                ]}
                                                onChange={(value) => setAttributes({ listStyle: value })}
                                            />
                                            
                                            <ToggleControl
                                                label={__("Smooth Scrolling", "frontis-blocks")}
                                                checked={smoothScroll || false}
                                                onChange={(value) => setAttributes({ smoothScroll: value })}
                                            />
                                        </PanelBody>
                                        
                                        <PanelBody title={__("Display Options", "frontis-blocks")} initialOpen={true}>
                                            <ToggleControl
                                                label={__("Collapsible TOC", "frontis-blocks")}
                                                checked={collapsible || false}
                                                onChange={(value) => setAttributes({ collapsible: value })}
                                            />
                                            
                                            {collapsible && (
                                                <ToggleControl
                                                    label={__("Initially Collapsed", "frontis-blocks")}
                                                    checked={initialCollapsed || false}
                                                    onChange={(value) => setAttributes({ initialCollapsed: value })}
                                                />
                                            )}
                                            
                                            <ToggleControl
                                                label={__("Sticky on Desktop", "frontis-blocks")}
                                                checked={enableDesktopSticky || false}
                                                onChange={(value) => setAttributes({ enableDesktopSticky: value })}
                                            />
                                            
                                            {enableDesktopSticky && (
                                                <RangeControl
                                                    label={__("Sticky Offset (px)", "frontis-blocks")}
                                                    value={stickyOffset || 20}
                                                    onChange={(value) => setAttributes({ stickyOffset: value })}
                                                    min={0}
                                                    max={200}
                                                />
                                            )}
                                            
                                            <ToggleControl
                                                label={__("Collapsible on Mobile", "frontis-blocks")}
                                                checked={enableMobileCollapsible || false}
                                                onChange={(value) => setAttributes({ enableMobileCollapsible: value })}
                                            />
                                            
                                            <RangeControl
                                                label={__("Maximum Height (px)", "frontis-blocks")}
                                                value={maxHeight || 300}
                                                onChange={(value) => setAttributes({ maxHeight: value })}
                                                min={100}
                                                max={800}
                                                help={__("Content will scroll if it exceeds this height", "frontis-blocks")}
                                            />
                                        </PanelBody>
                                    </>
                                )}
                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("TOC Styling", "frontis-blocks")} initialOpen={true}>
                                            {/* Add styling controls here */}
                                        </PanelBody>
                                    </>
                                )}
                                {tab.name === "advanced" && (
                                    <>
                                        <PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
                                            <TextControl
                                                label={__("Custom CSS Class", "frontis-blocks")}
                                                value={attributes.customClass || ''}
                                                onChange={(value) => setAttributes({ customClass: value })}
                                                help={__("Add custom CSS class(es) for additional styling", "frontis-blocks")}
                                            />
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