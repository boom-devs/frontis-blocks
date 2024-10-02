import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
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
    FORM_LISTS,
    NORMAL_HOVER,
    UNIT_TYPES,
    ICON_ALIGN,
    TEXT_ALIGN,
    BORDER_STYLES,
} from "./constants/constants";

import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_Color from '@Components/color';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        DeviceType,
        fluentFormGlobalZIndex,
        formId,
        showLabels,
        showPlaceholder,
        showErrorMessage,


    } = attributes;
    

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-fluent-form-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    return (
        <>
            <style>
            {`
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-label .fb-fluent-form-rendered .ff-el-group label:not(.ff-el-form-check-label),
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-label .fb-fluent-form-rendered .ff-el-group .ff-el-input--label,
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-error-message .fb-fluent-form-rendered .ff-el-group .error.text-danger {
                    display: none;
                }

                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-webkit-input-placeholder,
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-webkit-input-placeholder {
                    opacity: 0;
                    visibility: hidden;
                }

                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-moz-placeholder,
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-moz-placeholder {
                    opacity: 0;
                    visibility: hidden;
                }

                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-ms-input-placeholder,
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-ms-input-placeholder {
                    opacity: 0;
                    visibility: hidden;
                }

                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-moz-placeholder,
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-moz-placeholder {
                    opacity: 0;
                    visibility: hidden;
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
                                        <PanelBody title={__("Fluent Form", "frontis-blocks")} initialOpen={true}>
                                            <BaseControl className="fb-fluent-from" >
                                                <SelectControl
                                                    label={__("Select Form", "frontis-blocks")}
                                                    value={formId}
                                                    options={FORM_LISTS}
                                                    onChange={(newFormId) =>
                                                        setAttributes({ formId: newFormId })
                                                    }
                                                />

                                                <ToggleControl
                                                    label={__("Show Labels", "frontis-blocks")}
                                                    checked={showLabels}
                                                    onChange={(showLabels) =>
                                                        setAttributes({ showLabels })
                                                    }
                                                />
                                                <ToggleControl
                                                    label={__("Show Placeholder", "frontis-blocks")}
                                                    checked={showPlaceholder}
                                                    onChange={(showPlaceholder) =>
                                                        setAttributes({
                                                            showPlaceholder,
                                                        })
                                                    }
                                                />
                                                <ToggleControl
                                                    label={__("Show Error Message", "frontis-blocks")}
                                                    checked={showErrorMessage}
                                                    onChange={(showErrorMessage) =>
                                                        setAttributes({
                                                            showErrorMessage,
                                                        })
                                                    }
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
                                                        value={fluentFormGlobalZIndex}
                                                        onChange={(value) => setAttributes({ fluentFormGlobalZIndex: value === 0 ? undefined : value })}
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