import { __ } from '@wordpress/i18n';

import { 
    InspectorControls, 
} from '@wordpress/block-editor';

import { 
    SelectControl,
    PanelBody,
    TabPanel,
    BaseControl,
    Button,
    ButtonGroup,
    ToggleControl,
    TextControl,
    TextareaControl,
    Dropdown,
    Dashicon,
    RangeControl,
    ColorPicker,
    ColorPalette,
} from '@wordpress/components';

/**
 * Internal depencencies
 */
import {
    separator_POSITION,
    subheading_POSITION,
    NORMAL_HOVER,
    UNIT_TYPES,
    TEXT_ALIGN,
    HEADING,
    SEPERATOR_STYLES,
    FONT_FAMILYS,
    BORDER_STYLES,
} from "./constants/constants";

import { useState, useEffect } from "@wordpress/element";
import ResponsiveControl from '../../components/responsivecontrol';
import './editor.scss';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
    const { 
        blockID,
        DeviceType,
        ButtonAlignment,
        ButtonText,
        ButtonUrl,
        ButtonTargetUrl,
        ButtonWidth,
        ButtonZIndex

    } = attributes;
    
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-advanced-button-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);
    
    return (
        <>
            <style>
            {`
                .fb-advanced-button-wrapper .fb-advanced-button {
                    align-items: center;
                    display: inline-flex;
                    justify-content: center;
                    outline: none;
                    text-align: center;
                    text-decoration: none;
                    padding: 12px 30px;
                    background-color: #3f8efc;
                    border-radius: 0px;
                    box-sizing: border-box;
                    cursor: pointer;
                    position: relative;
                    transition: .2s ease-in;
                    white-space: nowrap;
                    width: ${ButtonWidth !== undefined ? `${ButtonWidth}%` : ''};
                }

                .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-text {
                    color: #ffffff;
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
                                        <div className="fb-advanced-button-wrapper">
                                            <PanelBody
                                                title={__("Button", "frontis-blocks")}
                                                initialOpen={true}
                                            >
                                                <BaseControl
                                                    label={__("Alignment", "frontis-blocks")}
                                                    id="fb-advanced-button-alignment"
                                                    className="fb-advanced-button-alignment"
                                                >
                                                    <ButtonGroup
                                                        className="fb-advanced-button-alignment-group-btn"
                                                    >
                                                        {TEXT_ALIGN.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ ButtonAlignment: item.value })}
                                                                className={`fb-advanced-alignment-single-btn ${ButtonAlignment === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                <TextControl
                                                    label={__("Text", "frontis-blocks")}
                                                    value={ButtonText}
                                                    onChange={(value) => setAttributes({ ButtonText: value })}
                                                    className="fb-advanced-button-text"
                                                />
                                                <div className="fb-link-control-wrapper">
                                                    <BaseControl 
                                                        label={__("URL", "frontis-blocks")}
                                                    >
                                                        <div className="fb-link-control-inner-wrapper">
                                                            <TextControl
                                                                value={ButtonUrl}
                                                                onChange={(value) => setAttributes({ ButtonUrl: value })}
                                                                className="fb-advanced-button-url"
                                                                placeholder={__('https://', 'frontis-blocks')}
                                                            />
                                                            <Dropdown
                                                                className="fb-advanced-button-icon-dropdown"
                                                                contentClassName="fb-advanced-button-icon-dropdown-content"
                                                                popoverProps={{ placement: 'bottom-start' }}
                                                                renderToggle={({ isOpen, onToggle }) => (
                                                                    <Button
                                                                        variant="primary"
                                                                        onClick={onToggle}
                                                                        aria-expanded={isOpen}
                                                                        aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                        className="fb-advanced-button-icon-btn"
                                                                    >
                                                                        <Dashicon icon="color-picker" className="fb-advanced-button-icon" />
                                                                    </Button>
                                                                )}
                                                                renderContent={() => (
                                                                    <div className="fb-advanced-button-icon-popup">
                                                                        <BaseControl className="fb-advanced-button-icon-popup-inner">
                                                                            <ToggleControl
                                                                                label={__("Open in new tab", "frontis-blocks")}
                                                                                checked={ButtonTargetUrl}
                                                                                onChange={(value) => setAttributes({ ButtonTargetUrl: value })}
                                                                            />
                                                                        </BaseControl>
                                                                    </div>
                                                                )}
                                                            />
                                                        </div>
                                                    </BaseControl>
                                                </div>
                                            </PanelBody>
                                        </div>
                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody
                                            title={__("Styles", "frontis-blocks")}
                                            initialOpen={true}
                                        >
                                            <BaseControl 
                                                label={__("Width", "frontis-blocks")}
                                                className="fb-advanced-button-width"
                                            >
                                                <RangeControl
                                                    value={ButtonWidth}
                                                    onChange={(value) => setAttributes({ ButtonWidth: value === 0 ? undefined : value })}
                                                    min={1}
                                                    max={100}
                                                    step={1}
                                                    allowReset
                                                    resetFallbackValue={undefined}
                                                />
                                            </BaseControl>
                                            <BaseControl 
                                                label={__("Typography", "frontis-blocks")}
                                                className="fb-setting-typography"
                                            >

                                            </BaseControl>
                                        </PanelBody>
                                    </>
                                )}
                            {tab.name === "advanced" && (
                                    <>
                                        <div className="fb-setting-advanced-tab-wrapper">
                                            <div className="fb-setting-z-index-wrapper">
                                                <PanelBody
                                                    title={__("Z Index", "frontis-blocks")}
                                                    initialOpen={true}
                                                    className='fb-setting-z-index-header'
                                                >
                                                    <RangeControl
                                                        value={ButtonZIndex}
                                                        onChange={(value) => setAttributes({ ButtonZIndex: value === 0 ? undefined : value })}
                                                        min={1}
                                                        max={100}
                                                        step={1}
                                                        allowReset
                                                        resetFallbackValue={undefined}
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