import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';

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

import {
    NORMAL_HOVER,
    UNIT_TYPES,
    TEXT_ALIGN,
    ICON_ALIGN,
    HEADING,
    FONT_FAMILYS,
    BORDER_STYLES,
} from "./constants/constants";

import ResponsiveControl from '../../components/responsivecontrol';
import FBIconPicker from "../../components/icon-picker";

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        DeviceType,

        TestimonialImageWidthDesktop,
        TestimonialImageWidthTablet,
        TestimonialImageWidthMobile,
        TestimonialImageWidthUnits,

        TestimonialBorderRadiusUnits,
        TestimonialDesktopBorderRadiusWidth,
        TestimonialTabBorderRadiusWidth,
        TestimonialMobileBorderRadiusWidth,
        TestimonialBorderRadiusLink,

        TestimonialZIndex,
        TestimonialAlignment,
        TestimonialDesc,
        TestimonialAuthor,
        TestimonialDesignation,
        TestimonialRatingNumber,
        TestimonialRatingicon,
        TestimonialRatinIconAlign,
        TestimonialQuoteIcon,
        TestimonialQuoteIconAlign,

    } = attributes;

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-testimonial-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const quoteIconHandler = (IconName) => {
		setAttributes({TestimonialQuoteIcon: IconName})

	}
    const ratingIconHandler = (IconName) => {
		setAttributes({TestimonialRatingicon: IconName})

	}

    

    return (
        <>
            <style>
                {`
                    .fb-testimonial-section.${blockID} {
                        z-index: ${TestimonialZIndex !== undefined ? TestimonialZIndex : 1};
                    }
                    .fb-testimonial-image img {
                        width: ${TestimonialImageWidthDesktop}${TestimonialImageWidthUnits};
                        height: ${TestimonialImageWidthDesktop}${TestimonialImageWidthUnits};
                    }

                    @media only screen and (max-width: 1024px) {
                        .fb-testimonial-image img {
                            width: ${TestimonialImageWidthTablet}${TestimonialImageWidthUnits};
                            height: ${TestimonialImageWidthTablet}${TestimonialImageWidthUnits};
                        }
                    }

                    @media only screen and (max-width: 767px) {
                        .fb-testimonial-image img {
                            width: ${TestimonialImageWidthMobile}${TestimonialImageWidthUnits};
                            height: ${TestimonialImageWidthMobile}${TestimonialImageWidthUnits};
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
                                        <PanelBody
                                            title={__("Testimonial Info", "frontis-blocks")}
                                            initialOpen={true}
                                        >

                                                <BaseControl
                                                    label={__("Alignment", "frontis-blocks")}
                                                    id="fb-setting-text-alignment"
                                                    className="fb-setting-text-alignment"
                                                >
                                                    <ButtonGroup
                                                        className="fb-setting-text-alignment-group-btn"
                                                    >
                                                        {TEXT_ALIGN.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ TestimonialAlignment: item.value })}
                                                                className={`fb-setting-text-alignment-single-btn ${TestimonialAlignment === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>
                                                <TextareaControl
                                                    label={__("Description", "frontis-blocks")}
                                                    value={TestimonialDesc}
                                                    onChange={(value) => setAttributes({ TestimonialDesc: value })}
                                                    className="fb-testimonial-desc"
                                                />
                                                <TextareaControl
                                                    label={__("Author", "frontis-blocks")}
                                                    value={TestimonialAuthor}
                                                    onChange={(value) => setAttributes({ TestimonialAuthor: value })}
                                                    className="fb-testimonial-author"
                                                />
                                                <TextareaControl
                                                    label={__("Designation", "frontis-blocks")}
                                                    value={TestimonialDesignation}
                                                    onChange={(value) => setAttributes({ TestimonialDesignation: value })}
                                                    className="fb-testimonial-desi"
                                                />

                                                <div className='fb-setting-icon-wrapper'>
                                                    <BaseControl
                                                        label={__("Quote Icon", "frontis-blocks")}
                                                            id="fb-setting-text-alignment"
                                                            className="fb-setting-text-alignment"
                                                    >
                                                        <ButtonGroup
                                                            className="fb-setting-text-alignment-group-btn"
                                                        >
                                                            {ICON_ALIGN.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ TestimonialQuoteIconAlign: item.value })}
                                                                    className={`fb-setting-text-alignment-single-btn ${TestimonialQuoteIconAlign === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                        {TestimonialQuoteIconAlign === 'icon' && (
                                                            <FBIconPicker value={TestimonialQuoteIcon} setIconHandler={quoteIconHandler} /> 
                                                        )}
                                                    </BaseControl>
                                                </div>

                                                <div className='fb-setting-icon-wrapper'>
                                                    <BaseControl
                                                        label={__("Rating Icon", "frontis-blocks")}
                                                            id="fb-setting-text-alignment"
                                                            className="fb-setting-text-alignment"
                                                    >
                                                        <ButtonGroup
                                                            className="fb-setting-text-alignment-group-btn"
                                                        >
                                                            {ICON_ALIGN.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ TestimonialRatinIconAlign: item.value })}
                                                                    className={`fb-setting-text-alignment-single-btn ${TestimonialRatinIconAlign === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                        {TestimonialRatinIconAlign === 'icon' && (
                                                            <FBIconPicker value={TestimonialRatingicon} setIconHandler={ratingIconHandler} /> 
                                                        )}
                                                    </BaseControl>
                                                </div>
                                                {TestimonialRatinIconAlign === 'icon' && (
                                                    <div className="fb-setting-rating-rangecontrol">
                                                        <RangeControl
                                                            label={__("Rating Number", "frontis-blocks")}
                                                            value={TestimonialRatingNumber}
                                                            onChange={(value) => setAttributes({ TestimonialRatingNumber: value })}
                                                            min={1}
                                                            max={5}
                                                            allowReset
                                                            resetFallbackValue={5}
                                                        />
                                                    </div>
                                                )}

                                        </PanelBody>

                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody
                                            title={__("Image", "frontis-blocks")}
                                            initialOpen={true}
                                            className="fb-setting-testimonial-list-wrapper"
                                        >
                                            <div className="fb-setting-fontsize-wrapper">
                                                <div className="fb-setting-fontsize-header">
                                                    <ResponsiveControl
                                                        labelText={__("Image Width", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                    />
                                                    <div className="fb-setting-fontsize-units">
                                                        <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                            {UNIT_TYPES.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ TestimonialImageWidthUnits: item.value })}
                                                                    className={`fb-setting-fontsize-units-switcher ${TestimonialImageWidthUnits === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                                <div className="fb-setting-fontsize-rangecontrol">
                                                    <RangeControl
                                                        value={DeviceType === "Desktop" ? TestimonialImageWidthDesktop : DeviceType === "Tablet" ? TestimonialImageWidthTablet : TestimonialImageWidthMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ TestimonialImageWidthDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ TestimonialImageWidthTablet: value });
                                                            } else if (DeviceType === "Mobile") {
                                                                setAttributes({ TestimonialImageWidthMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={500}
                                                        allowReset
                                                        resetFallbackValue={100}
                                                    />
                                                </div>
                                            </div>

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
                                                    value={TestimonialZIndex}
                                                    onChange={(value) => setAttributes({ TestimonialZIndex: value === 0 ? undefined : value })}
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
