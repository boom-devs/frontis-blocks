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

        TestimonialImageWidthDesktop,
        TestimonialImageWidthTablet,
        TestimonialImageWidthMobile,
        TestimonialImageWidthUnits,

        TestimonialImageRadiusUnits,
        TestimonialImageDesktopRadiusWidth,
        TestimonialImagelTabRadiusWidth,
        TestimonialImageMobileRadiusWidth,
        TestimonialImageRadiusLink,

        TestimonialQuoteIconSizeDesktop,
        TestimonialQuoteIconSizeTablet,
        TestimonialQuoteIconSizeMobile,
        TestimonialQuoteIconSizeUnits,
        TestimonialQuoteIconColorSwitcher,
        TestimonialQuoteIconColor,
        TestimonialQuoteIconHoverColor,

        TestimonialDescFontFamily,
        TestimonialDescFontSizeDesktop,
        TestimonialDescFontSizeTablet,
        TestimonialDescFontSizeMobile,
        TestimonialDescFontSizeUnits,
        TestimonialDescFontWeight,
        TestimonialDescFontStyle,
        TestimonialDescTextTransform,
        TestimonialDescTextDecoration,
        TestimonialDescLetterSpacingDesktop,
        TestimonialDescLetterSpacingTablet,
        TestimonialDescLetterSpacingMobile,
        TestimonialDescLetterSpacingUnits,
        TestimonialDescLineHeightDesktop,
        TestimonialDescLineHeightTablet,
        TestimonialDescLineHeightMobile,
        TestimonialDescLineHeightUnits,
        TestimonialDescColorSwitcher,
        TestimonialDescColor,
        TestimonialDescHoverColor,

        TestimonialAuthorFontFamily,
        TestimonialAuthorFontSizeDesktop,
        TestimonialAuthorFontSizeTablet,
        TestimonialAuthorFontSizeMobile,
        TestimonialAuthorFontSizeUnits,
        TestimonialAuthorFontWeight,
        TestimonialAuthorFontStyle,
        TestimonialAuthorTextTransform,
        TestimonialAuthorTextDecoration,
        TestimonialAuthorLetterSpacingDesktop,
        TestimonialAuthorLetterSpacingTablet,
        TestimonialAuthorLetterSpacingMobile,
        TestimonialAuthorLetterSpacingUnits,
        TestimonialAuthorLineHeightDesktop,
        TestimonialAuthorLineHeightTablet,
        TestimonialAuthorLineHeightMobile,
        TestimonialAuthorLineHeightUnits,
        TestimonialAuthorColorSwitcher,
        TestimonialAuthorColor,
        TestimonialAuthorHoverColor,

        TestimonialDesignationFontFamily,
        TestimonialDesignationFontSizeDesktop,
        TestimonialDesignationFontSizeTablet,
        TestimonialDesignationFontSizeMobile,
        TestimonialDesignationFontSizeUnits,
        TestimonialDesignationFontWeight,
        TestimonialDesignationFontStyle,
        TestimonialDesignationTextTransform,
        TestimonialDesignationTextDecoration,
        TestimonialDesignationLetterSpacingDesktop,
        TestimonialDesignationLetterSpacingTablet,
        TestimonialDesignationLetterSpacingMobile,
        TestimonialDesignationLetterSpacingUnits,
        TestimonialDesignationLineHeightDesktop,
        TestimonialDesignationLineHeightTablet,
        TestimonialDesignationLineHeightMobile,
        TestimonialDesignationLineHeightUnits,
        TestimonialDesignationColorSwitcher,
        TestimonialDesignationColor,
        TestimonialDesignationHoverColor,


        TestimonialRatingIconSizeDesktop,
        TestimonialRatingIconSizeTablet,
        TestimonialRatingIconSizeMobile,
        TestimonialRatingIconSizeUnits,
        TestimonialRatingIconColorSwitcher,
        TestimonialRatingIconColor,
        TestimonialRatingIconHoverColor,

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

    /** Start Image Border Radius Width */
    const [previousImageBorderRadiusWidth, setPreviousImageBorderRadiusWidth] = useState(TestimonialImageDesktopRadiusWidth);
    /** Function to update all Border Width values */
    const updateAllImageBorderRadiusWidth = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    TestimonialImageDesktopRadiusWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    TestimonialImagelTabRadiusWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    TestimonialImageMobileRadiusWidth: {
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
    };

    /** Function to handle input change */
    const handleImageBorderRadiusWidthInputChange = (e, direction) => {
        const value = e.target.value;
        switch(DeviceType) {
            case 'Desktop':
                setAttributes({ TestimonialImageDesktopRadiusWidth: { ...TestimonialImageDesktopRadiusWidth, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ TestimonialImagelTabRadiusWidth: { ...TestimonialImagelTabRadiusWidth, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ TestimonialImageMobileRadiusWidth: { ...TestimonialImageMobileRadiusWidth, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if TestimonialImageRadiusLink is true */
        if (TestimonialImageRadiusLink) {
            updateAllImageBorderRadiusWidth(value, DeviceType);
        }
    };

    /** Function to handle TestimonialImageRadiusLink toggle */
    const handleImageBorderRadiusWidthLinkToggle = () => {
        if (!TestimonialImageRadiusLink) {
            setAttributes({ TestimonialImageDesktopRadiusWidth: previousImageBorderRadiusWidth });
        }
        /** setTestimonialImageRadiusLinkLink(!TestimonialImageRadiusLink) */
        setAttributes({TestimonialImageRadiusLink: !TestimonialImageRadiusLink})
    };

    /** Update previousImageBorderRadiusWidth state when Border Width changes */
    useEffect(() => {
        setPreviousImageBorderRadiusWidth(TestimonialImageDesktopRadiusWidth);
    }, [TestimonialImageDesktopRadiusWidth]);

    /** Function to handle device click for Border Width */
    const handleBorderRadiusWidthDeviceClick = (device) => {
        setAttributes({ DeviceType: device });
    };

    /** Default Border Width for desktop (using HeadingDesktopBorderWidth) */
    const ImageDesktopBorderRadiusWidth = `${TestimonialImageDesktopRadiusWidth.top}${TestimonialImageRadiusUnits} ${TestimonialImageDesktopRadiusWidth.right}${TestimonialImageRadiusUnits} ${TestimonialImageDesktopRadiusWidth.bottom}${TestimonialImageRadiusUnits} ${TestimonialImageDesktopRadiusWidth.left}${TestimonialImageRadiusUnits}`;
    const ImageTabBorderRadiusWidth     = `${TestimonialImagelTabRadiusWidth.top}${TestimonialImageRadiusUnits} ${TestimonialImagelTabRadiusWidth.right}${TestimonialImageRadiusUnits} ${TestimonialImagelTabRadiusWidth.bottom}${TestimonialImageRadiusUnits} ${TestimonialImagelTabRadiusWidth.left}${TestimonialImageRadiusUnits}`;
    const ImageMobileBorderRadiusWidth  = `${TestimonialImageMobileRadiusWidth.top}${TestimonialImageRadiusUnits} ${TestimonialImageMobileRadiusWidth.right}${TestimonialImageRadiusUnits} ${TestimonialImageMobileRadiusWidth.bottom}${TestimonialImageRadiusUnits} ${TestimonialImageMobileRadiusWidth.left}${TestimonialImageRadiusUnits}`;
    /** End Border Radius Width */ 
    

    

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
                        border-radius: ${ImageDesktopBorderRadiusWidth};
                    }
                    .fb-testimonial-quote-icon svg {
                        width: ${TestimonialQuoteIconSizeDesktop}${TestimonialQuoteIconSizeUnits};
                        height: ${TestimonialQuoteIconSizeDesktop}${TestimonialQuoteIconSizeUnits};
                        fill: ${TestimonialQuoteIconColor};
                    }
                    .fb-testimonial-quote-icon:hover svg {
                        fill: ${TestimonialQuoteIconHoverColor};
                    }
                    .fb-testimonial-userdesc-container .fb-user-desc {
                        font-family: ${TestimonialDescFontFamily};
                        font-size: ${TestimonialDescFontSizeDesktop}${TestimonialDescFontSizeUnits};
                        font-weight: ${TestimonialDescFontWeight};
                        font-style: ${TestimonialDescFontStyle};
                        text-transform: ${TestimonialDescTextTransform};
                        text-decoration: ${TestimonialDescTextDecoration};
                        letter-spacing: ${TestimonialDescLetterSpacingDesktop}${TestimonialDescLetterSpacingUnits};
                        line-height: ${TestimonialDescLineHeightDesktop}${TestimonialDescLineHeightUnits};
                        color: ${TestimonialDescColor};
                    }
                    .fb-testimonial-userdesc-container .fb-user-desc:hover {
                        color: ${TestimonialDescHoverColor};
                    }

                    .fb-testimonial-userinfo-container .fb-user {
                        font-family: ${TestimonialAuthorFontFamily};
                        font-size: ${TestimonialAuthorFontSizeDesktop}${TestimonialAuthorFontSizeUnits};
                        font-weight: ${TestimonialAuthorFontWeight};
                        font-style: ${TestimonialAuthorFontStyle};
                        text-transform: ${TestimonialAuthorTextTransform};
                        text-decoration: ${TestimonialAuthorTextDecoration};
                        letter-spacing: ${TestimonialAuthorLetterSpacingDesktop}${TestimonialAuthorLetterSpacingUnits};
                        line-height: ${TestimonialAuthorLineHeightDesktop}${TestimonialAuthorLineHeightUnits};
                        color: ${TestimonialAuthorColor};
                    }
                    .fb-testimonial-userinfo-container .fb-user:hover {
                        color: ${TestimonialAuthorHoverColor};
                    }

                    .fb-testimonial-userinfo-container .fb-user-designation {
                        font-family: ${TestimonialDesignationFontFamily};
                        font-size: ${TestimonialDesignationFontSizeDesktop}${TestimonialDesignationFontSizeUnits};
                        font-weight: ${TestimonialDesignationFontWeight};
                        font-style: ${TestimonialDesignationFontStyle};
                        text-transform: ${TestimonialDesignationTextTransform};
                        text-decoration: ${TestimonialDesignationTextDecoration};
                        letter-spacing: ${TestimonialDesignationLetterSpacingDesktop}${TestimonialDesignationLetterSpacingUnits};
                        line-height: ${TestimonialDesignationLineHeightDesktop}${TestimonialDesignationLineHeightUnits};
                        color: ${TestimonialDesignationColor};
                    }
                    .fb-testimonial-userinfo-container .fb-user-designation:hover {
                        color: ${TestimonialDesignationHoverColor};
                    }

                    .fb-testimonial-rating-icon svg {
                        width: ${TestimonialRatingIconSizeDesktop}${TestimonialRatingIconSizeUnits};
                        height: ${TestimonialRatingIconSizeDesktop}${TestimonialRatingIconSizeUnits};
                        fill: ${TestimonialRatingIconColor};
                    }
                    .fb-testimonial-rating-icon:hover svg {
                        fill: ${TestimonialRatingIconHoverColor};
                    }

                    @media only screen and (max-width: 1024px) {
                        .fb-testimonial-image img {
                            width: ${TestimonialImageWidthTablet}${TestimonialImageWidthUnits};
                            height: ${TestimonialImageWidthTablet}${TestimonialImageWidthUnits};
                            border-radius: ${ImageTabBorderRadiusWidth};
                        }
                        .fb-testimonial-quote-icon svg {
                            width: ${TestimonialQuoteIconSizeTablet}${TestimonialQuoteIconSizeUnits};
                            height: ${TestimonialQuoteIconSizeTablet}${TestimonialQuoteIconSizeUnits};
                        }
                        .fb-testimonial-userdesc-container .fb-user-desc {
                            font-size: ${TestimonialDescFontSizeTablet}${TestimonialDescFontSizeUnits};
                            letter-spacing: ${TestimonialDescLetterSpacingTablet}${TestimonialDescLetterSpacingUnits};
                            line-height: ${TestimonialDescLineHeightTablet}${TestimonialDescLineHeightUnits};
                        }
                        .fb-testimonial-userinfo-container .fb-user {
                            font-size: ${TestimonialAuthorFontSizeTablet}${TestimonialDescFontSizeUnits};
                            letter-spacing: ${TestimonialAuthorLetterSpacingTablet}${TestimonialDescLetterSpacingUnits};
                            line-height: ${TestimonialAuthorLineHeightTablet}${TestimonialDescLineHeightUnits};
                        }
                        .fb-testimonial-userinfo-container .fb-user-designation {
                            font-size: ${TestimonialDesignationFontSizeTablet}${TestimonialDescFontSizeUnits};
                            letter-spacing: ${TestimonialDesignationLetterSpacingTablet}${TestimonialDescLetterSpacingUnits};
                            line-height: ${TestimonialDesignationLineHeightTablet}${TestimonialDescLineHeightUnits};
                        }
                        .fb-testimonial-rating-icon svg {
                            width: ${TestimonialRatingIconSizeTablet}${TestimonialRatingIconSizeUnits};
                            height: ${TestimonialRatingIconSizeTablet}${TestimonialRatingIconSizeUnits};
                        }
                    }

                    @media only screen and (max-width: 767px) {
                        .fb-testimonial-image img {
                            width: ${TestimonialImageWidthMobile}${TestimonialImageWidthUnits};
                            height: ${TestimonialImageWidthMobile}${TestimonialImageWidthUnits};
                            border-radius: ${ImageMobileBorderRadiusWidth};
                        }
                        .fb-testimonial-quote-icon svg {
                            width: ${TestimonialQuoteIconSizeMobile}${TestimonialQuoteIconSizeUnits};
                            height: ${TestimonialQuoteIconSizeMobile}${TestimonialQuoteIconSizeUnits};
                        }
                        .fb-testimonial-userdesc-container .fb-user-desc {
                            font-size: ${TestimonialDescFontSizeMobile}${TestimonialDescFontSizeUnits};
                            letter-spacing: ${TestimonialDescLetterSpacingMobile}${TestimonialDescLetterSpacingUnits};
                            line-height: ${TestimonialDescLineHeightMobile}${TestimonialDescLineHeightUnits};
                        }
                        .fb-testimonial-userinfo-container .fb-user {
                            font-size: ${TestimonialAuthorFontSizeMobile}${TestimonialDescFontSizeUnits};
                            letter-spacing: ${TestimonialAuthorLetterSpacingMobile}${TestimonialDescLetterSpacingUnits};
                            line-height: ${TestimonialAuthorLineHeightMobile}${TestimonialDescLineHeightUnits};
                        }
                        .fb-testimonial-userinfo-container .fb-user-designation {
                            font-size: ${TestimonialDesignationFontSizeMobile}${TestimonialDescFontSizeUnits};
                            letter-spacing: ${TestimonialDesignationLetterSpacingMobile}${TestimonialDescLetterSpacingUnits};
                            line-height: ${TestimonialDesignationLineHeightMobile}${TestimonialDescLineHeightUnits};
                        }
                        .fb-testimonial-rating-icon svg {
                            width: ${TestimonialRatingIconSizeMobile}${TestimonialRatingIconSizeUnits};
                            height: ${TestimonialRatingIconSizeMobile}${TestimonialRatingIconSizeUnits};
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
                                            initialOpen={false}
                                            className="fb-setting-testimonial-image-wrapper"
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

                                            <div className="fb-setting-spacing-container">
                                                <div className="fb-setting-spacing-inner-container">
                                                    {/* Border radius Width */}
                                                    <div className="fb-setting-spacing-label-container">
                                                        <ResponsiveControl labelText={__('Border Radius', 'frontis-block')} device={DeviceType} deviceHandler={handleBorderRadiusWidthDeviceClick}/>
                                                        <div className="fb-setting-units-type">
                                                            <ButtonGroup className="fb-setting-units-type-wrap">
                                                                {UNIT_TYPES.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ TestimonialImageRadiusUnits: item.value })}
                                                                        className={`fb-setting-units-type-switcher ${ TestimonialImageRadiusUnits === item.value ? 'active' : ''}`}
                                                                    >
                                                                        {item.label}
                                                                    </Button>
                                                                ))}
                                                            </ButtonGroup>
                                                        </div>
                                                    </div>
                                                    <div className="fb-setting-spacing-input-container">
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="top"
                                                                value={DeviceType === 'Desktop' ? TestimonialImageDesktopRadiusWidth.top : DeviceType === 'Tablet' ? TestimonialImagelTabRadiusWidth.top : TestimonialImageMobileRadiusWidth.top}
                                                                onChange={(e) => handleImageBorderRadiusWidthInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={DeviceType === 'Desktop' ? TestimonialImageDesktopRadiusWidth.right : DeviceType === 'Tablet' ? TestimonialImagelTabRadiusWidth.right : TestimonialImageMobileRadiusWidth.right}
                                                                onChange={(e) => handleImageBorderRadiusWidthInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={DeviceType === 'Desktop' ? TestimonialImageDesktopRadiusWidth.bottom : DeviceType === 'Tablet' ? TestimonialImagelTabRadiusWidth.bottom : TestimonialImageMobileRadiusWidth.bottom}
                                                                onChange={(e) => handleImageBorderRadiusWidthInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={DeviceType === 'Desktop' ? TestimonialImageDesktopRadiusWidth.left : DeviceType === 'Tablet' ? TestimonialImagelTabRadiusWidth.left : TestimonialImageMobileRadiusWidth.left}
                                                                onChange={(e) => handleImageBorderRadiusWidthInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label"></label>
                                                            <span
                                                                className={`dashicons ${TestimonialImageRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${TestimonialImageRadiusLink ? 'is-checked' : ''}`}
                                                                onClick={handleImageBorderRadiusWidthLinkToggle}
                                                            >
                                                            </span>
                                                        </div>
                                                    </div>                          
                                                </div>
                                            </div>
                                        </PanelBody>
                                        <PanelBody
                                            title={__("Quote Icon", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-feature-icon-wrapper"
                                        >

                                            <div className="fb-setting-fontsize-wrapper">
                                                <div className="fb-setting-fontsize-header">
                                                    <ResponsiveControl
                                                        labelText={__("Icon Size", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                    />
                                                    <div className="fb-setting-fontsize-units">
                                                        <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                            {UNIT_TYPES.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ TestimonialQuoteIconSizeUnits: item.value })}
                                                                    className={`fb-setting-fontsize-units-switcher ${TestimonialQuoteIconSizeUnits === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                                <div className="fb-setting-fontsize-rangecontrol">
                                                    <RangeControl
                                                        value={DeviceType === "Desktop" ? TestimonialQuoteIconSizeDesktop : DeviceType === "Tablet" ? TestimonialQuoteIconSizeTablet : TestimonialQuoteIconSizeMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ TestimonialQuoteIconSizeDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ TestimonialQuoteIconSizeTablet: value });
                                                            } else if (DeviceType === "Mobile") {
                                                                setAttributes({ TestimonialQuoteIconSizeMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={300}
                                                        allowReset
                                                        resetFallbackValue={100}
                                                    />
                                                </div>
                                            </div>

                                            <BaseControl
                                                label={__("Icon Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ TestimonialQuoteIconColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${TestimonialQuoteIconColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {TestimonialQuoteIconColorSwitcher === 'normal' && (
                                                <BaseControl 
                                                    label={__("Nomal Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-normal-color">
                                                                        <ColorPicker
                                                                            color={TestimonialQuoteIconColor}
                                                                            onChange={(value) => setAttributes({ TestimonialQuoteIconColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={TestimonialQuoteIconColor}
                                                                            onChange={(value) => setAttributes({ TestimonialQuoteIconColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {TestimonialQuoteIconColorSwitcher === 'hover' && (
                                                <BaseControl 
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-hover-color">
                                                                        <ColorPicker
                                                                            color={TestimonialQuoteIconHoverColor}
                                                                            onChange={(value) => setAttributes({ TestimonialQuoteIconHoverColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={TestimonialQuoteIconHoverColor}
                                                                            onChange={(value) => setAttributes({ TestimonialQuoteIconHoverColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                        </PanelBody>
                                        <PanelBody
                                            title={__("Description", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-testimonial-description-wrapper"
                                        >

                                            <BaseControl 
                                                label={__("Typography", "frontis-blocks")}
                                                className="fb-setting-typography"
                                            >
                                                <Dropdown
                                                    className="fb-setting-dropdown-icon-wrapper"
                                                    contentClassName="fb-setting-dropdown-icon-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                            className="fb-setting-dropdown-icon-btn"
                                                        >
                                                            <Dashicon icon="edit" className="fb-setting-dropdown-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-setting-typography-popup">
                                                            <BaseControl className="fb-setting-typography-popup-inner" >
                                                                <div className="fb-setting-fontfamily-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Family", "frontis-blocks")}
                                                                        options={FONT_FAMILYS}
                                                                        value={TestimonialDescFontFamily}
                                                                        onChange={(value) => setAttributes({ TestimonialDescFontFamily: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontsize-wrapper">
                                                                    <div className="fb-setting-fontsize-header">
                                                                        <ResponsiveControl
                                                                            labelText={__("Font Size", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-fontsize-units">
                                                                            <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ TestimonialDescFontSizeUnits: item.value })}
                                                                                        className={`fb-setting-fontsize-units-switcher ${TestimonialDescFontSizeUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fb-setting-fontsize-rangecontrol">
                                                                        <RangeControl
                                                                            value={DeviceType === "Desktop" ? TestimonialDescFontSizeDesktop : DeviceType === "Tablet" ? TestimonialDescFontSizeTablet : TestimonialDescFontSizeMobile}
                                                                            onChange={(value) => {
                                                                                if (DeviceType === "Desktop") {
                                                                                    setAttributes({ TestimonialDescFontSizeDesktop: value });
                                                                                } else if (DeviceType === "Tablet") {
                                                                                    setAttributes({ TestimonialDescFontSizeTablet: value });
                                                                                } else if (DeviceType === "Mobile") {
                                                                                    setAttributes({ TestimonialDescFontSizeMobile: value });
                                                                                }
                                                                            }}
                                                                            min={1}
                                                                            max={100}
                                                                            allowReset
                                                                            resetFallbackValue={18}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="fb-setting-fontweight-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Weight", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "700" },
                                                                            { label: __("100", "frontis-blocks"), value: "100" },
                                                                            { label: __("200", "frontis-blocks"), value: "200" },
                                                                            { label: __("300", "frontis-blocks"), value: "300" },
                                                                            { label: __("400", "frontis-blocks"), value: "400" },
                                                                            { label: __("500", "frontis-blocks"), value: "500" },
                                                                            { label: __("600", "frontis-blocks"), value: "600" },
                                                                            { label: __("700", "frontis-blocks"), value: "700" },
                                                                            { label: __("800", "frontis-blocks"), value: "800" },
                                                                            { label: __("900", "frontis-blocks"), value: "900" },
                                                                        ]}
                                                                        value={TestimonialDescFontWeight}
                                                                        onChange={(value) => setAttributes({ TestimonialDescFontWeight: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontstyle-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Style", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Normal", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Italic", "frontis-blocks"), value: "italic" },
                                                                            { label: __("Oblique", "frontis-blocks"), value: "oblique" },
                                                                        ]}
                                                                        value={TestimonialDescFontStyle}
                                                                        onChange={(value) => setAttributes({ TestimonialDescFontStyle: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-texttransform-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Transform", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Capitalize", "frontis-blocks"), value: "capitalize" },
                                                                            { label: __("Uppercase", "frontis-blocks"), value: "uppercase" },
                                                                            { label: __("Lowercase", "frontis-blocks"), value: "lowercase" },
                                                                        ]}
                                                                        value={TestimonialDescTextTransform}
                                                                        onChange={(value) => setAttributes({ TestimonialDescTextTransform: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-textdecoration-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Decoration", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Underline", "frontis-blocks"), value: "underline" },
                                                                            { label: __("Overline", "frontis-blocks"), value: "overline" },
                                                                            { label: __("Line Through", "frontis-blocks"), value: "line-through" },
                                                                        ]}
                                                                        value={TestimonialDescTextDecoration}
                                                                        onChange={(value) => setAttributes({ TestimonialDescTextDecoration: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-letterspacing-wrapper">
                                                                    <div className="fb-setting-letterspacing-header">
                                                                        <ResponsiveControl
                                                                            labelText={__("Letter Spacing", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-letterspacing-units">
                                                                            <ButtonGroup className="fb-setting-letterspacing-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ TestimonialDescLetterSpacingUnits: item.value })}
                                                                                        className={`fb-setting-letterspacing-units-switcher ${TestimonialDescLetterSpacingUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={DeviceType === "Desktop" ? TestimonialDescLetterSpacingDesktop : DeviceType === "Tablet" ? TestimonialDescLetterSpacingTablet : TestimonialDescLetterSpacingMobile}
                                                                        onChange={(value) => {
                                                                            if (DeviceType === "Desktop") {
                                                                                setAttributes({ TestimonialDescLetterSpacingDesktop: value });
                                                                            } else if (DeviceType === "Tablet") {
                                                                                setAttributes({ TestimonialDescLetterSpacingTablet: value });
                                                                            } else if (DeviceType === "Mobile") {
                                                                                setAttributes({ TestimonialDescLetterSpacingMobile: value });
                                                                            }
                                                                        }}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={0}
                                                                    />
                                                                </div>

                                                                <div className="fb-setting-lineheight-wrapper">
                                                                    <div className="fb-setting-lineheight-header">
                                                                        <ResponsiveControl
                                                                            labelText={__("Line Height", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-lineheight-units">
                                                                            <ButtonGroup className="fb-setting-lineheight-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ TestimonialDescLineHeightUnits: item.value })}
                                                                                        className={`fb-setting-lineheight-units-switcher ${TestimonialDescLineHeightUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={DeviceType === "Desktop" ? TestimonialDescLineHeightDesktop : DeviceType === "Tablet" ? TestimonialDescLineHeightTablet : TestimonialDescLineHeightMobile}
                                                                        onChange={(value) => {
                                                                            if (DeviceType === "Desktop") {
                                                                                setAttributes({ TestimonialDescLineHeightDesktop: value });
                                                                            } else if (DeviceType === "Tablet") {
                                                                                setAttributes({ TestimonialDescLineHeightTablet: value });
                                                                            } else if (DeviceType === "Mobile") {
                                                                                setAttributes({ TestimonialDescLineHeightMobile: value });
                                                                            }
                                                                        }}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={1}
                                                                    />
                                                                </div>

                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                            </BaseControl>
                                            <BaseControl
                                                label={__("Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ TestimonialDescColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${TestimonialDescColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {TestimonialDescColorSwitcher === 'normal' && (
                                                <BaseControl 
                                                    label={__("Nomal Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-normal-color">
                                                                        <ColorPicker
                                                                            color={TestimonialDescColor}
                                                                            onChange={(value) => setAttributes({ TestimonialDescColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={TestimonialDescColor}
                                                                            onChange={(value) => setAttributes({ TestimonialDescColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {TestimonialDescColorSwitcher === 'hover' && (
                                                <BaseControl 
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-hover-color">
                                                                        <ColorPicker
                                                                            color={TestimonialDescHoverColor}
                                                                            onChange={(value) => setAttributes({ TestimonialDescHoverColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={TestimonialDescHoverColor}
                                                                            onChange={(value) => setAttributes({ TestimonialDescHoverColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}
                                        </PanelBody>
                                        <PanelBody
                                            title={__("Author", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-testimonial-author-wrapper"
                                        >

                                            <BaseControl 
                                                label={__("Typography", "frontis-blocks")}
                                                className="fb-setting-typography"
                                            >
                                                <Dropdown
                                                    className="fb-setting-dropdown-icon-wrapper"
                                                    contentClassName="fb-setting-dropdown-icon-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                            className="fb-setting-dropdown-icon-btn"
                                                        >
                                                            <Dashicon icon="edit" className="fb-setting-dropdown-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-setting-typography-popup">
                                                            <BaseControl className="fb-setting-typography-popup-inner" >
                                                                <div className="fb-setting-fontfamily-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Family", "frontis-blocks")}
                                                                        options={FONT_FAMILYS}
                                                                        value={TestimonialAuthorFontFamily}
                                                                        onChange={(value) => setAttributes({ TestimonialAuthorFontFamily: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontsize-wrapper">
                                                                    <div className="fb-setting-fontsize-header">
                                                                        <ResponsiveControl
                                                                            labelText={__("Font Size", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-fontsize-units">
                                                                            <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ TestimonialAuthorFontSizeUnits: item.value })}
                                                                                        className={`fb-setting-fontsize-units-switcher ${TestimonialAuthorFontSizeUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fb-setting-fontsize-rangecontrol">
                                                                        <RangeControl
                                                                            value={DeviceType === "Desktop" ? TestimonialAuthorFontSizeDesktop : DeviceType === "Tablet" ? TestimonialAuthorFontSizeTablet : TestimonialAuthorFontSizeMobile}
                                                                            onChange={(value) => {
                                                                                if (DeviceType === "Desktop") {
                                                                                    setAttributes({ TestimonialAuthorFontSizeDesktop: value });
                                                                                } else if (DeviceType === "Tablet") {
                                                                                    setAttributes({ TestimonialAuthorFontSizeTablet: value });
                                                                                } else if (DeviceType === "Mobile") {
                                                                                    setAttributes({ TestimonialAuthorFontSizeMobile: value });
                                                                                }
                                                                            }}
                                                                            min={1}
                                                                            max={100}
                                                                            allowReset
                                                                            resetFallbackValue={18}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="fb-setting-fontweight-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Weight", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "700" },
                                                                            { label: __("100", "frontis-blocks"), value: "100" },
                                                                            { label: __("200", "frontis-blocks"), value: "200" },
                                                                            { label: __("300", "frontis-blocks"), value: "300" },
                                                                            { label: __("400", "frontis-blocks"), value: "400" },
                                                                            { label: __("500", "frontis-blocks"), value: "500" },
                                                                            { label: __("600", "frontis-blocks"), value: "600" },
                                                                            { label: __("700", "frontis-blocks"), value: "700" },
                                                                            { label: __("800", "frontis-blocks"), value: "800" },
                                                                            { label: __("900", "frontis-blocks"), value: "900" },
                                                                        ]}
                                                                        value={TestimonialAuthorFontWeight}
                                                                        onChange={(value) => setAttributes({ TestimonialAuthorFontWeight: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontstyle-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Style", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Normal", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Italic", "frontis-blocks"), value: "italic" },
                                                                            { label: __("Oblique", "frontis-blocks"), value: "oblique" },
                                                                        ]}
                                                                        value={TestimonialAuthorFontStyle}
                                                                        onChange={(value) => setAttributes({ TestimonialAuthorFontStyle: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-texttransform-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Transform", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Capitalize", "frontis-blocks"), value: "capitalize" },
                                                                            { label: __("Uppercase", "frontis-blocks"), value: "uppercase" },
                                                                            { label: __("Lowercase", "frontis-blocks"), value: "lowercase" },
                                                                        ]}
                                                                        value={TestimonialAuthorTextTransform}
                                                                        onChange={(value) => setAttributes({ TestimonialAuthorTextTransform: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-textdecoration-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Decoration", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Underline", "frontis-blocks"), value: "underline" },
                                                                            { label: __("Overline", "frontis-blocks"), value: "overline" },
                                                                            { label: __("Line Through", "frontis-blocks"), value: "line-through" },
                                                                        ]}
                                                                        value={TestimonialAuthorTextDecoration}
                                                                        onChange={(value) => setAttributes({ TestimonialAuthorTextDecoration: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-letterspacing-wrapper">
                                                                    <div className="fb-setting-letterspacing-header">
                                                                        <ResponsiveControl
                                                                            labelText={__("Letter Spacing", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-letterspacing-units">
                                                                            <ButtonGroup className="fb-setting-letterspacing-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ TestimonialAuthorLetterSpacingUnits: item.value })}
                                                                                        className={`fb-setting-letterspacing-units-switcher ${TestimonialAuthorLetterSpacingUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={DeviceType === "Desktop" ? TestimonialAuthorLetterSpacingDesktop : DeviceType === "Tablet" ? TestimonialAuthorLetterSpacingTablet : TestimonialAuthorLetterSpacingMobile}
                                                                        onChange={(value) => {
                                                                            if (DeviceType === "Desktop") {
                                                                                setAttributes({ TestimonialAuthorLetterSpacingDesktop: value });
                                                                            } else if (DeviceType === "Tablet") {
                                                                                setAttributes({ TestimonialAuthorLetterSpacingTablet: value });
                                                                            } else if (DeviceType === "Mobile") {
                                                                                setAttributes({ TestimonialAuthorLetterSpacingMobile: value });
                                                                            }
                                                                        }}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={0}
                                                                    />
                                                                </div>

                                                                <div className="fb-setting-lineheight-wrapper">
                                                                    <div className="fb-setting-lineheight-header">
                                                                        <ResponsiveControl
                                                                            labelText={__("Line Height", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-lineheight-units">
                                                                            <ButtonGroup className="fb-setting-lineheight-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ TestimonialAuthorLineHeightUnits: item.value })}
                                                                                        className={`fb-setting-lineheight-units-switcher ${TestimonialAuthorLineHeightUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={DeviceType === "Desktop" ? TestimonialAuthorLineHeightDesktop : DeviceType === "Tablet" ? TestimonialAuthorLineHeightTablet : TestimonialAuthorLineHeightMobile}
                                                                        onChange={(value) => {
                                                                            if (DeviceType === "Desktop") {
                                                                                setAttributes({ TestimonialAuthorLineHeightDesktop: value });
                                                                            } else if (DeviceType === "Tablet") {
                                                                                setAttributes({ TestimonialAuthorLineHeightTablet: value });
                                                                            } else if (DeviceType === "Mobile") {
                                                                                setAttributes({ TestimonialAuthorLineHeightMobile: value });
                                                                            }
                                                                        }}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={1}
                                                                    />
                                                                </div>

                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                            </BaseControl>
                                            <BaseControl
                                                label={__("Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ TestimonialAuthorColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${TestimonialAuthorColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {TestimonialAuthorColorSwitcher === 'normal' && (
                                                <BaseControl 
                                                    label={__("Nomal Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-normal-color">
                                                                        <ColorPicker
                                                                            color={TestimonialAuthorColor}
                                                                            onChange={(value) => setAttributes({ TestimonialAuthorColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={TestimonialAuthorColor}
                                                                            onChange={(value) => setAttributes({ TestimonialAuthorColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {TestimonialAuthorColorSwitcher === 'hover' && (
                                                <BaseControl 
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-hover-color">
                                                                        <ColorPicker
                                                                            color={TestimonialAuthorHoverColor}
                                                                            onChange={(value) => setAttributes({ TestimonialAuthorHoverColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={TestimonialAuthorHoverColor}
                                                                            onChange={(value) => setAttributes({ TestimonialAuthorHoverColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}
                                        </PanelBody>
                                        <PanelBody
                                            title={__("Designation", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-testimonial-designation-wrapper"
                                        >

                                            <BaseControl 
                                                label={__("Typography", "frontis-blocks")}
                                                className="fb-setting-typography"
                                            >
                                                <Dropdown
                                                    className="fb-setting-dropdown-icon-wrapper"
                                                    contentClassName="fb-setting-dropdown-icon-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                            className="fb-setting-dropdown-icon-btn"
                                                        >
                                                            <Dashicon icon="edit" className="fb-setting-dropdown-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-setting-typography-popup">
                                                            <BaseControl className="fb-setting-typography-popup-inner" >
                                                                <div className="fb-setting-fontfamily-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Family", "frontis-blocks")}
                                                                        options={FONT_FAMILYS}
                                                                        value={TestimonialDesignationFontFamily}
                                                                        onChange={(value) => setAttributes({ TestimonialDesignationFontFamily: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontsize-wrapper">
                                                                    <div className="fb-setting-fontsize-header">
                                                                        <ResponsiveControl
                                                                            labelText={__("Font Size", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-fontsize-units">
                                                                            <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ TestimonialDesignationFontSizeUnits: item.value })}
                                                                                        className={`fb-setting-fontsize-units-switcher ${TestimonialDesignationFontSizeUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fb-setting-fontsize-rangecontrol">
                                                                        <RangeControl
                                                                            value={DeviceType === "Desktop" ? TestimonialDesignationFontSizeDesktop : DeviceType === "Tablet" ? TestimonialDesignationFontSizeTablet : TestimonialDesignationFontSizeMobile}
                                                                            onChange={(value) => {
                                                                                if (DeviceType === "Desktop") {
                                                                                    setAttributes({ TestimonialDesignationFontSizeDesktop: value });
                                                                                } else if (DeviceType === "Tablet") {
                                                                                    setAttributes({ TestimonialDesignationFontSizeTablet: value });
                                                                                } else if (DeviceType === "Mobile") {
                                                                                    setAttributes({ TestimonialDesignationFontSizeMobile: value });
                                                                                }
                                                                            }}
                                                                            min={1}
                                                                            max={100}
                                                                            allowReset
                                                                            resetFallbackValue={16}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="fb-setting-fontweight-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Weight", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "700" },
                                                                            { label: __("100", "frontis-blocks"), value: "100" },
                                                                            { label: __("200", "frontis-blocks"), value: "200" },
                                                                            { label: __("300", "frontis-blocks"), value: "300" },
                                                                            { label: __("400", "frontis-blocks"), value: "400" },
                                                                            { label: __("500", "frontis-blocks"), value: "500" },
                                                                            { label: __("600", "frontis-blocks"), value: "600" },
                                                                            { label: __("700", "frontis-blocks"), value: "700" },
                                                                            { label: __("800", "frontis-blocks"), value: "800" },
                                                                            { label: __("900", "frontis-blocks"), value: "900" },
                                                                        ]}
                                                                        value={TestimonialDesignationFontWeight}
                                                                        onChange={(value) => setAttributes({ TestimonialDesignationFontWeight: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontstyle-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Style", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Normal", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Italic", "frontis-blocks"), value: "italic" },
                                                                            { label: __("Oblique", "frontis-blocks"), value: "oblique" },
                                                                        ]}
                                                                        value={TestimonialDesignationFontStyle}
                                                                        onChange={(value) => setAttributes({ TestimonialDesignationFontStyle: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-texttransform-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Transform", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Capitalize", "frontis-blocks"), value: "capitalize" },
                                                                            { label: __("Uppercase", "frontis-blocks"), value: "uppercase" },
                                                                            { label: __("Lowercase", "frontis-blocks"), value: "lowercase" },
                                                                        ]}
                                                                        value={TestimonialDesignationTextTransform}
                                                                        onChange={(value) => setAttributes({ TestimonialDesignationTextTransform: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-textdecoration-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Decoration", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Underline", "frontis-blocks"), value: "underline" },
                                                                            { label: __("Overline", "frontis-blocks"), value: "overline" },
                                                                            { label: __("Line Through", "frontis-blocks"), value: "line-through" },
                                                                        ]}
                                                                        value={TestimonialDesignationTextDecoration}
                                                                        onChange={(value) => setAttributes({ TestimonialDesignationTextDecoration: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-letterspacing-wrapper">
                                                                    <div className="fb-setting-letterspacing-header">
                                                                        <ResponsiveControl
                                                                            labelText={__("Letter Spacing", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-letterspacing-units">
                                                                            <ButtonGroup className="fb-setting-letterspacing-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ TestimonialDesignationLetterSpacingUnits: item.value })}
                                                                                        className={`fb-setting-letterspacing-units-switcher ${TestimonialDesignationLetterSpacingUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={DeviceType === "Desktop" ? TestimonialDesignationLetterSpacingDesktop : DeviceType === "Tablet" ? TestimonialDesignationLetterSpacingTablet : TestimonialDesignationLetterSpacingMobile}
                                                                        onChange={(value) => {
                                                                            if (DeviceType === "Desktop") {
                                                                                setAttributes({ TestimonialDesignationLetterSpacingDesktop: value });
                                                                            } else if (DeviceType === "Tablet") {
                                                                                setAttributes({ TestimonialDesignationLetterSpacingTablet: value });
                                                                            } else if (DeviceType === "Mobile") {
                                                                                setAttributes({ TestimonialDesignationLetterSpacingMobile: value });
                                                                            }
                                                                        }}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={0}
                                                                    />
                                                                </div>

                                                                <div className="fb-setting-lineheight-wrapper">
                                                                    <div className="fb-setting-lineheight-header">
                                                                        <ResponsiveControl
                                                                            labelText={__("Line Height", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-lineheight-units">
                                                                            <ButtonGroup className="fb-setting-lineheight-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ TestimonialDesignationLineHeightUnits: item.value })}
                                                                                        className={`fb-setting-lineheight-units-switcher ${TestimonialDesignationLineHeightUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={DeviceType === "Desktop" ? TestimonialDesignationLineHeightDesktop : DeviceType === "Tablet" ? TestimonialDesignationLineHeightTablet : TestimonialDesignationLineHeightMobile}
                                                                        onChange={(value) => {
                                                                            if (DeviceType === "Desktop") {
                                                                                setAttributes({ TestimonialDesignationLineHeightDesktop: value });
                                                                            } else if (DeviceType === "Tablet") {
                                                                                setAttributes({ TestimonialDesignationLineHeightTablet: value });
                                                                            } else if (DeviceType === "Mobile") {
                                                                                setAttributes({ TestimonialDesignationLineHeightMobile: value });
                                                                            }
                                                                        }}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={1}
                                                                    />
                                                                </div>

                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                            </BaseControl>
                                            <BaseControl
                                                label={__("Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ TestimonialDesignationColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${TestimonialDesignationColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {TestimonialDesignationColorSwitcher === 'normal' && (
                                                <BaseControl 
                                                    label={__("Nomal Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-normal-color">
                                                                        <ColorPicker
                                                                            color={TestimonialDesignationColor}
                                                                            onChange={(value) => setAttributes({ TestimonialDesignationColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={TestimonialDesignationColor}
                                                                            onChange={(value) => setAttributes({ TestimonialDesignationColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {TestimonialDesignationColorSwitcher === 'hover' && (
                                                <BaseControl 
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-hover-color">
                                                                        <ColorPicker
                                                                            color={TestimonialDesignationHoverColor}
                                                                            onChange={(value) => setAttributes({ TestimonialDesignationHoverColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={TestimonialDesignationHoverColor}
                                                                            onChange={(value) => setAttributes({ TestimonialDesignationHoverColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}
                                        </PanelBody>
                                        <PanelBody
                                            title={__("Rating Icon", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-feature-icon-wrapper"
                                        >

                                            <div className="fb-setting-fontsize-wrapper">
                                                <div className="fb-setting-fontsize-header">
                                                    <ResponsiveControl
                                                        labelText={__("Icon Size", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                    />
                                                    <div className="fb-setting-fontsize-units">
                                                        <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                            {UNIT_TYPES.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ TestimonialRatingIconSizeUnits: item.value })}
                                                                    className={`fb-setting-fontsize-units-switcher ${TestimonialRatingIconSizeUnits === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                                <div className="fb-setting-fontsize-rangecontrol">
                                                    <RangeControl
                                                        value={DeviceType === "Desktop" ? TestimonialRatingIconSizeDesktop : DeviceType === "Tablet" ? TestimonialRatingIconSizeTablet : TestimonialRatingIconSizeMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ TestimonialRatingIconSizeDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ TestimonialRatingIconSizeTablet: value });
                                                            } else if (DeviceType === "Mobile") {
                                                                setAttributes({ TestimonialRatingIconSizeMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={100}
                                                        allowReset
                                                        resetFallbackValue={20}
                                                    />
                                                </div>
                                            </div>

                                            <BaseControl
                                                label={__("Rating Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ TestimonialRatingIconColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${TestimonialRatingIconColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {TestimonialRatingIconColorSwitcher === 'normal' && (
                                                <BaseControl 
                                                    label={__("Nomal Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-normal-color">
                                                                        <ColorPicker
                                                                            color={TestimonialRatingIconColor}
                                                                            onChange={(value) => setAttributes({ TestimonialRatingIconColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={TestimonialRatingIconColor}
                                                                            onChange={(value) => setAttributes({ TestimonialRatingIconColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {TestimonialRatingIconColorSwitcher === 'hover' && (
                                                <BaseControl 
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-hover-color">
                                                                        <ColorPicker
                                                                            color={TestimonialRatingIconHoverColor}
                                                                            onChange={(value) => setAttributes({ TestimonialRatingIconHoverColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={TestimonialRatingIconHoverColor}
                                                                            onChange={(value) => setAttributes({ TestimonialRatingIconHoverColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

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
