import { __ } from "@wordpress/i18n";
import { useMemo, memo, useEffect } from "@wordpress/element";
import {
    PanelBody,
    BaseControl,
    RangeControl,
    SelectControl,
    ToggleControl,
} from "@wordpress/components";
import { OVERFLOW_OP, BORDER_STYLES } from "@Constants/fbConstants";
import getCustomCss from "@Utils/getCustomCss";
import { useDeviceType } from "@Config/displayType";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_HtmlTagControl from "@Components/html-tag-control";
import FB_ResponsiveAlignmentControl from "@Components/responsive-alignment-control";
import FB_Range from "@Components/range";
import FB_PositionControl from "@Components/position-control";
import FB_Spacing from "@Components/spacing";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_SwitcherControl from "@Components/switcher-control";
import FB_ColorControl from "@Components/color-control";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_InputControl from "@Components/input-control";
import FB_TypographyControl from "@Components/typography-control";
import FB_VisibilityControl from "@Components/visibility-control";

import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        blockID,
        isLink,
        rel,
        linkTarget,

        /** General */
        postTitleTag,
        titleAlignment,
        titleExcerptLength,

        /** Style Attributes */
        postTitleGlobalTypoSwitcher,
        postTitleGlobalTypographyData,
        postTitleGlobalTypoType,
        postTitleGlobalTypoOption,
        postTitleFontFamily,
        postTitleFontSize,
        postTitleFontSizeUnits,
        postTitleFontWeight,
        postTitleFontStyle,
        postTitleTextTransform,
        postTitleTextDecoration,
        postTitleLetterSpacing,
        postTitleLetterSpacingUnits,
        postTitleLineHeight,
        postTitleLineHeightUnits,

        postTitleColorSwitcher,
        postTitleColor,
        postTitleHoverColor,

        titleTextShadowValues,
        titleTextShadowCssValue,
        titleTextStroke,
        titleTextStrokeColorSwitcher,
        titleTextStrokeColor,
        titleTextStrokeHoverColor,

        /** Start Global Setting */
        postTitleGlobalZIndex,
        postTitleOverflow,

        postTitleDesktopSwitcher,
        postTitleTabletSwitcher,
        postTitleMobileSwitcher,

        wrapperId,
        wrapperClass,
        postTitleGlobalCustomCSS,

        /** Position */
        postTitlePositionType,
        postTitleHZOrientationType,
        postTitleVROrientationType,
        postTitleHZLeftOffset,
        postTitleHZLeftOffsetUnits,
        postTitleHZRightOffset,
        postTitleHZRightOffsetUnits,
        postTitleVRTopOffset,
        postTitleVRTopOffsetUnits,
        postTitleVRBottomOffset,
        postTitleVRBottomOffsetUnits,

        postGlobalPaddingUnits,
        postGlobalPaddingDesktop,
        postGlobalPaddingTablet,
        postGlobalPaddingMobile,
        postGlobalPaddingLink,

        postGlobalMarginUnits,
        postGlobalMarginDesktop,
        postGlobalMarginTablet,
        postGlobalMarginMobile,
        postGlobalMarginLink,

        postGlobalBgColorSwitcher,
        postGlobalNormalBackgroundType,
        postGlobalNormalClassicColor,
        postGlobalNormalGradientColor,
        postGlobalNormalCustomGradientSwitcher,
        postGlobalNormalCustomGradientInputValue,

        postGlobalHoverBackgroundType,
        postGlobalHoverClassicColor,
        postGlobalHoverGradientColor,
        postGlobalHoverCustomGradientSwitcher,
        postGlobalHoverCustomGradientInputValue,

        postGlobalBorder,
        postGlobalBorderColorSwitcher,
        postGlobalBorderColor,
        postGlobalBorderHoverColor,

        postGlobalBorderUnits,
        postGlobalBorderDesktop,
        postGlobalBorderTablet,
        postGlobalBorderMobile,
        postGlobalBorderLink,

        postGlobalBorderRadiusUnits,
        postGlobalBorderRadiusDesktop,
        postGlobalBorderRadiusTablet,
        postGlobalBorderRadiusMobile,
        postGlobalBorderRadiusLink,

        postGlobalBoxShadowSwitcher,
        postGlobalBoxShadowValues,
        postGlobalBoxShadowCssValue,
        postGlobalBoxShadowHoverValues,
        postGlobalBoxShadowHoverCssValue,

        /** End Global Setting */
    } = attributes;

    const deviceType = useDeviceType();

    /* Start Global Padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (postGlobalPaddingLink) {
            switch (deviceType) {
                case "Desktop":
                    setAttributes({
                        postGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case "Tablet":
                    setAttributes({
                        postGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case "Mobile":
                    setAttributes({
                        postGlobalPaddingMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case "Desktop":
                    setAttributes({
                        postGlobalPaddingDesktop: {
                            ...postGlobalPaddingDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case "Tablet":
                    setAttributes({
                        postGlobalPaddingTablet: {
                            ...postGlobalPaddingTablet,
                            [position]: value,
                        },
                    });
                    break;
                case "Mobile":
                    setAttributes({
                        postGlobalPaddingMobile: {
                            ...postGlobalPaddingMobile,
                            [position]: value,
                        },
                    });
                default:
                    break;
            }
        }
    };

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ postGlobalPaddingLink: !postGlobalPaddingLink });
    };

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            postGlobalPaddingUnits: {
                ...postGlobalPaddingUnits,
                [deviceType]: unit,
            },
        });
    };
    /* End Global Padding */

    /* Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (postGlobalMarginLink) {
            switch (deviceType) {
                case "Desktop":
                    setAttributes({
                        postGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case "Tablet":
                    setAttributes({
                        postGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case "Mobile":
                    setAttributes({
                        postGlobalMarginMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case "Desktop":
                    setAttributes({
                        postGlobalMarginDesktop: {
                            ...postGlobalMarginDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case "Tablet":
                    setAttributes({
                        postGlobalMarginTablet: {
                            ...postGlobalMarginTablet,
                            [position]: value,
                        },
                    });
                    break;
                case "Mobile":
                    setAttributes({
                        postGlobalMarginMobile: {
                            ...postGlobalMarginMobile,
                            [position]: value,
                        },
                    });
                default:
                    break;
            }
        }
    };

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ postGlobalMarginLink: !postGlobalMarginLink });
    };

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            postGlobalMarginUnits: {
                ...postGlobalMarginUnits,
                [deviceType]: unit,
            },
        });
    };
    /* End Global Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (postGlobalBorderLink) {
            switch (deviceType) {
                case "Desktop":
                    setAttributes({
                        postGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case "Tablet":
                    setAttributes({
                        postGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case "Mobile":
                    setAttributes({
                        postGlobalBorderMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case "Desktop":
                    setAttributes({
                        postGlobalBorderDesktop: {
                            ...postGlobalBorderDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case "Tablet":
                    setAttributes({
                        postGlobalBorderTablet: {
                            ...postGlobalBorderTablet,
                            [position]: value,
                        },
                    });
                    break;
                case "Mobile":
                    setAttributes({
                        postGlobalBorderMobile: {
                            ...postGlobalBorderMobile,
                            [position]: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ postGlobalBorderLink: !postGlobalBorderLink });
    };

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            postGlobalBorderUnits: {
                ...postGlobalBorderUnits,
                [deviceType]: unit,
            },
        });
    };
    /** End Global Border */

    /** Start Global Border Radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (postGlobalBorderRadiusLink) {
            switch (deviceType) {
                case "Desktop":
                    setAttributes({
                        postGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case "Tablet":
                    setAttributes({
                        postGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case "Mobile":
                    setAttributes({
                        postGlobalBorderRadiusMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case "Desktop":
                    setAttributes({
                        postGlobalBorderRadiusDesktop: {
                            ...postGlobalBorderRadiusDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case "Tablet":
                    setAttributes({
                        postGlobalBorderRadiusTablet: {
                            ...postGlobalBorderRadiusTablet,
                            [position]: value,
                        },
                    });
                    break;
                case "Mobile":
                    setAttributes({
                        postGlobalBorderRadiusMobile: {
                            ...postGlobalBorderRadiusMobile,
                            [position]: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ postGlobalBorderRadiusLink: !postGlobalBorderRadiusLink });
    };

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            postGlobalBorderRadiusUnits: {
                ...postGlobalBorderRadiusUnits,
                [deviceType]: unit,
            },
        });
    };
    /** End Global Border */

    /// Start General
    const generalControls = (
        <PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
            <BaseControl
                label={__("Element Visibility", "frontis-blocks")}
                className="fb-setting-show-hide-elements"
            >
                <ToggleControl
                    label={__("Enable Link", "frontis-blocks")}
                    checked={isLink}
                    onChange={(value) => setAttributes({ isLink: value })}
                />

                {isLink && (
                    <>
                        <ToggleControl
                            label={__("Open in new tab", "frontis-blocks")}
                            checked={linkTarget === "_blank"}
                            onChange={(value) =>
                                setAttributes({
                                    linkTarget: value ? "_blank" : "_self",
                                })
                            }
                        />

                        <FB_InputControl
                            label={__("Link Rel", "frontis-blocks")}
                            value={rel}
                            onChangeValue={(value) => setAttributes({ rel: value })}
                        />

                        <p className="fb-control-help">
                            {__("For example: nofollow, noreferrer, etc.", "frontis-blocks")}
                        </p>
                    </>
                )}

                <div className="fb-control-divider"></div>
            </BaseControl>

            <FB_HtmlTagControl
                label={__("Tag", "frontis-blocks")}
                globalHtmlTag={postTitleTag}
                setGlobalHtmlTag={(value) => setAttributes({ postTitleTag: value })}
            />

            <RangeControl
                label={__("Word Limit", "frontis-blocks")}
                value={titleExcerptLength}
                onChange={(value) =>
                    setAttributes({
                        titleExcerptLength: value === 0 ? undefined : value,
                    })
                }
                min={0}
                max={100}
                step={1}
                resetFallbackValue={""}
            />

            <p className="fb-control-help">
                {__(
                    "Polish your title by limiting words. Set 0 to show the full text.",
                    "frontis-blocks",
                )}
            </p>

            <div className="fb-control-divider"></div>

            <FB_ResponsiveAlignmentControl
                label={__("Alignment", "frontis-blocks")}
                globalAlignment={titleAlignment}
                setGlobalAlignment={(value) => setAttributes({ titleAlignment: value })}
                deviceType={deviceType}
                setAttributes={setAttributes}
            />
        </PanelBody>
    );

    const styleControls = (
        <>
            <PanelBody title={__("Title", "frontis-blocks")} initialOpen={true}>
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={postTitleGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) =>
                        setAttributes({ postTitleGlobalTypographyData: value })
                    }
                    globalTypoType={postTitleGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            postTitleGlobalTypoType: value,
                            postTitleGlobalTypoSwitcher:
                                value === "default"
                                    ? {
                                        ...postTitleGlobalTypoSwitcher,
                                        fontFamily: false,
                                        fontSize: false,
                                        fontWeight: false,
                                        fontStyle: false,
                                        textTransform: false,
                                        textDecoration: false,
                                        letterSpacing: false,
                                        lineHeight: false,
                                    }
                                    : {
                                        ...postTitleGlobalTypoSwitcher,
                                        fontFamily: true,
                                        fontSize: true,
                                        fontWeight: true,
                                        fontStyle: true,
                                        textTransform: true,
                                        textDecoration: true,
                                        letterSpacing: true,
                                        lineHeight: true,
                                    },
                        });
                    }}
                    globalTypoOption={postTitleGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) =>
                        setAttributes({ postTitleGlobalTypoOption: value })
                    }
                    fontFamily={postTitleFontFamily}
                    onChangeFontFamily={(value) =>
                        setAttributes({
                            postTitleFontFamily: value,
                            postTitleGlobalTypoSwitcher: {
                                ...postTitleGlobalTypoSwitcher,
                                fontFamily: value && false,
                            },
                        })
                    }
                    fontSize={postTitleFontSize}
                    onChangeFontSize={(value) =>
                        setAttributes({
                            postTitleFontSize: value,
                            postTitleGlobalTypoSwitcher: {
                                ...postTitleGlobalTypoSwitcher,
                                fontSize: value && false,
                            },
                        })
                    }
                    fontSizeUnits={postTitleFontSizeUnits}
                    onChangeFontSizeUnit={(value) =>
                        setAttributes({ postTitleFontSizeUnits: value })
                    }
                    fontWeight={postTitleFontWeight}
                    onChangeFontWeight={(value) =>
                        setAttributes({
                            postTitleFontWeight: value,
                            postTitleGlobalTypoSwitcher: {
                                ...postTitleGlobalTypoSwitcher,
                                fontWeight: value && false,
                            },
                        })
                    }
                    fontStyle={postTitleFontStyle}
                    onChangeFontStyle={(value) =>
                        setAttributes({
                            postTitleFontStyle: value,
                            postTitleGlobalTypoSwitcher: {
                                ...postTitleGlobalTypoSwitcher,
                                fontStyle: value && false,
                            },
                        })
                    }
                    textTransform={postTitleTextTransform}
                    onChangeTextTransform={(value) =>
                        setAttributes({
                            postTitleTextTransform: value,
                            postTitleGlobalTypoSwitcher: {
                                ...postTitleGlobalTypoSwitcher,
                                textTransform: value && false,
                            },
                        })
                    }
                    textDecoration={postTitleTextDecoration}
                    onChangeTextDecoration={(value) =>
                        setAttributes({
                            postTitleTextDecoration: value,
                            postTitleGlobalTypoSwitcher: {
                                ...postTitleGlobalTypoSwitcher,
                                textDecoration: value && false,
                            },
                        })
                    }
                    letterSpacing={postTitleLetterSpacing}
                    onChangeLetterSpacing={(value) =>
                        setAttributes({
                            postTitleLetterSpacing: value,
                            postTitleGlobalTypoSwitcher: {
                                ...postTitleGlobalTypoSwitcher,
                                letterSpacing: value && false,
                            },
                        })
                    }
                    letterSpacingUnits={postTitleLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) =>
                        setAttributes({ postTitleLetterSpacingUnits: value })
                    }
                    lineHeight={postTitleLineHeight}
                    onChangeLineHeight={(value) =>
                        setAttributes({
                            postTitleLineHeight: value,
                            postTitleGlobalTypoSwitcher: {
                                ...postTitleGlobalTypoSwitcher,
                                lineHeight: value && false,
                            },
                        })
                    }
                    lineHeightUnits={postTitleLineHeightUnits}
                    onChangeLineHeightUnit={(value) =>
                        setAttributes({ postTitleLineHeightUnits: value })
                    }
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={postTitleColorSwitcher}
                    setGlobalSwitcher={(value) =>
                        setAttributes({ postTitleColorSwitcher: value })
                    }
                />

                {postTitleColorSwitcher === "normal" && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postTitleColor}
                        setGlobalColor={(value) =>
                            setAttributes({
                                postTitleColor: value === undefined ? "" : value,
                            })
                        }
                    />
                )}

                {postTitleColorSwitcher === "hover" && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postTitleHoverColor}
                        setGlobalColor={(value) =>
                            setAttributes({
                                postTitleHoverColor: value === undefined ? "" : value,
                            })
                        }
                    />
                )}

                <div className="fb-control-divider"></div>

                <FB_BoxShadowControl
                    label={__("Text Shadow", "frontis-blocks")}
                    onBoxShadowChange={(value) =>
                        setAttributes({ titleTextShadowValues: value })
                    }
                    initialShadowValue={titleTextShadowValues}
                    onBoxShadowStyleChange={(value) =>
                        setAttributes({ titleTextShadowCssValue: value })
                    }
                    isBoxShadow={false}
                />

                <FB_Range
                    min={0}
                    max={10}
                    label={__("Text Stroke", "frontis-blocks")}
                    rangeValue={titleTextStroke}
                    onChangeHandler={(value) =>
                        setAttributes({
                            titleTextStroke: value === 0 ? undefined : value,
                        })
                    }
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                    __next40pxDefaultSize={true}
                />

                <FB_SwitcherControl
                    label={__("Text Stroke Color", "frontis-blocks")}
                    globalSwitcher={titleTextStrokeColorSwitcher}
                    setGlobalSwitcher={(value) =>
                        setAttributes({
                            titleTextStrokeColorSwitcher: value,
                        })
                    }
                />

                {titleTextStrokeColorSwitcher === "normal" && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={titleTextStrokeColor}
                        setGlobalColor={(value) =>
                            setAttributes({ titleTextStrokeColor: value })
                        }
                    />
                )}

                {titleTextStrokeColorSwitcher === "hover" && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={titleTextStrokeHoverColor}
                        setGlobalColor={(value) =>
                            setAttributes({
                                titleTextStrokeHoverColor: value,
                            })
                        }
                    />
                )}
            </PanelBody>
        </>
    );

    const advancedControls = (
        <>
            <PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
                <FB_Range
                    min={0}
                    max={10000000}
                    label={__("Z Index", "frontis-blocks")}
                    rangeValue={postTitleGlobalZIndex}
                    onChangeHandler={(value) =>
                        setAttributes({
                            postTitleGlobalZIndex: value === 0 ? undefined : value,
                        })
                    }
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />

                <SelectControl
                    label={__("Overflow", "frontis-blocks")}
                    value={postTitleOverflow}
                    options={OVERFLOW_OP}
                    onChange={(value) => setAttributes({ postTitleOverflow: value })}
                />

                <FB_PositionControl
                    deviceType={deviceType}
                    positionType={postTitlePositionType}
                    setPositionType={(value) =>
                        setAttributes({ postTitlePositionType: value })
                    }
                    HZOrientationType={postTitleHZOrientationType}
                    setHZOrientationType={(value) =>
                        setAttributes({ postTitleHZOrientationType: value })
                    }
                    VROrientationType={postTitleVROrientationType}
                    setVROrientationType={(value) =>
                        setAttributes({ postTitleVROrientationType: value })
                    }
                    HZLeftOffset={postTitleHZLeftOffset}
                    setHZLeftOffset={(value) =>
                        setAttributes({ postTitleHZLeftOffset: value })
                    }
                    HZLeftOffsetUnits={postTitleHZLeftOffsetUnits}
                    setHZLeftOffsetUnits={(value) =>
                        setAttributes({ postTitleHZLeftOffsetUnits: value })
                    }
                    HZRightOffset={postTitleHZRightOffset}
                    setHZRightOffset={(value) =>
                        setAttributes({ postTitleHZRightOffset: value })
                    }
                    HZRightOffsetUnits={postTitleHZRightOffsetUnits}
                    setHZRightOffsetUnits={(value) =>
                        setAttributes({ postTitleHZRightOffsetUnits: value })
                    }
                    VRTopOffset={postTitleVRTopOffset}
                    setVRTopOffset={(value) =>
                        setAttributes({ postTitleVRTopOffset: value })
                    }
                    VRTopOffsetUnits={postTitleVRTopOffsetUnits}
                    setVRTopOffsetUnits={(value) =>
                        setAttributes({ postTitleVRTopOffsetUnits: value })
                    }
                    VRBottomOffset={postTitleVRBottomOffset}
                    setVRBottomOffset={(value) =>
                        setAttributes({ postTitleVRBottomOffset: value })
                    }
                    VRBottomOffsetUnits={postTitleVRBottomOffsetUnits}
                    setVRBottomOffsetUnits={(value) =>
                        setAttributes({ postTitleVRBottomOffsetUnits: value })
                    }
                    setAttributes={setAttributes}
                />

                <FB_InputControl
                    label={__("CSS ID", "frontis-blocks")}
                    value={wrapperId}
                    onChangeValue={(value) => setAttributes({ wrapperId: value })}
                    helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={wrapperClass}
                    onChangeValue={(value) => setAttributes({ wrapperClass: value })}
                    helpText={__("Separate with spaces key.", "frontis-blocks")}
                />
            </PanelBody>

            <PanelBody
                title={__("Padding and Margin", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                    spacingUnits={postGlobalPaddingUnits}
                    spacingDesktop={postGlobalPaddingDesktop}
                    spacingTablet={postGlobalPaddingTablet}
                    spacingMobile={postGlobalPaddingMobile}
                    handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                    spacingCombineBtn={postGlobalPaddingLink}
                    spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                    spacingUnits={postGlobalMarginUnits}
                    spacingDesktop={postGlobalMarginDesktop}
                    spacingTablet={postGlobalMarginTablet}
                    spacingMobile={postGlobalMarginMobile}
                    handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                    spacingCombineBtn={postGlobalMarginLink}
                    spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title="Background Color" initialOpen={false}>
                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={postGlobalBgColorSwitcher}
                    setBgColorSwitcher={(value) =>
                        setAttributes({ postGlobalBgColorSwitcher: value })
                    }
                    normalBackgroundType={postGlobalNormalBackgroundType}
                    setNormalBackgroundType={(value) =>
                        setAttributes({ postGlobalNormalBackgroundType: value })
                    }
                    normalClassicColor={postGlobalNormalClassicColor}
                    setNormalClassicColor={(value) =>
                        setAttributes({
                            postGlobalNormalClassicColor: value === undefined ? "" : value,
                        })
                    }
                    normalGradientColor={postGlobalNormalGradientColor}
                    setNormalGradientColor={(value) =>
                        setAttributes({
                            postGlobalNormalGradientColor: value === undefined ? "" : value,
                        })
                    }
                    normalCustomGradientSwitcher={postGlobalNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) =>
                        setAttributes({ postGlobalNormalCustomGradientSwitcher: value })
                    }
                    normalCustomGradientInputValue={
                        postGlobalNormalCustomGradientInputValue
                    }
                    setNormalCustomGradientInputValue={(value) =>
                        setAttributes({
                            postGlobalNormalCustomGradientInputValue: value,
                        })
                    }
                    hoverBackgroundType={postGlobalHoverBackgroundType}
                    setHoverBackgroundType={(value) =>
                        setAttributes({ postGlobalHoverBackgroundType: value })
                    }
                    hoverClassicColor={postGlobalHoverClassicColor}
                    setHoverClassicColor={(value) =>
                        setAttributes({
                            postGlobalHoverClassicColor: value === undefined ? "" : value,
                        })
                    }
                    hoverGradientColor={postGlobalHoverGradientColor}
                    setHoverGradientColor={(value) =>
                        setAttributes({
                            postGlobalHoverGradientColor: value === undefined ? "" : value,
                        })
                    }
                    hoverCustomGradientSwitcher={postGlobalHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) =>
                        setAttributes({ postGlobalHoverCustomGradientSwitcher: value })
                    }
                    hoverCustomGradientInputValue={
                        postGlobalHoverCustomGradientInputValue
                    }
                    setHoverCustomGradientInputValue={(value) =>
                        setAttributes({
                            postGlobalHoverCustomGradientInputValue: value,
                        })
                    }
                    isBackgroundImage={false}
                />
            </PanelBody>

            <PanelBody
                title={__("Border and Shadow", "frontis-blocks")}
                initialOpen={false}
            >
                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={postGlobalBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ postGlobalBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={postGlobalBorderColorSwitcher}
                    setGlobalSwitcher={(value) =>
                        setAttributes({ postGlobalBorderColorSwitcher: value })
                    }
                />

                {postGlobalBorderColorSwitcher === "normal" && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postGlobalBorderColor}
                        setGlobalColor={(value) =>
                            setAttributes({
                                postGlobalBorderColor: value === undefined ? "" : value,
                            })
                        }
                    />
                )}

                {postGlobalBorderColorSwitcher === "hover" && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postGlobalBorderHoverColor}
                        setGlobalColor={(value) =>
                            setAttributes({
                                postGlobalBorderHoverColor: value === undefined ? "" : value,
                            })
                        }
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                    spacingUnits={postGlobalBorderUnits}
                    spacingDesktop={postGlobalBorderDesktop}
                    spacingTablet={postGlobalBorderTablet}
                    spacingMobile={postGlobalBorderMobile}
                    handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                    spacingCombineBtn={postGlobalBorderLink}
                    spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                    spacingUnits={postGlobalBorderRadiusUnits}
                    spacingDesktop={postGlobalBorderRadiusDesktop}
                    spacingTablet={postGlobalBorderRadiusTablet}
                    spacingMobile={postGlobalBorderRadiusMobile}
                    handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                    spacingCombineBtn={postGlobalBorderRadiusLink}
                    spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={postGlobalBoxShadowSwitcher}
                    setGlobalSwitcher={(value) =>
                        setAttributes({ postGlobalBoxShadowSwitcher: value })
                    }
                />

                {postGlobalBoxShadowSwitcher === "normal" && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) =>
                            setAttributes({ postGlobalBoxShadowValues: value })
                        }
                        initialShadowValue={postGlobalBoxShadowValues}
                        onBoxShadowStyleChange={(value) =>
                            setAttributes({ postGlobalBoxShadowCssValue: value })
                        }
                    />
                )}

                {postGlobalBoxShadowSwitcher === "hover" && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) =>
                            setAttributes({ postGlobalBoxShadowHoverValues: value })
                        }
                        initialShadowValue={postGlobalBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) =>
                            setAttributes({ postGlobalBoxShadowHoverCssValue: value })
                        }
                    />
                )}
            </PanelBody>

            <PanelBody
                title={__("Responsive Control", "frontis-blocks")}
                initialOpen={false}
                className="fb-setting-responsive-control-wrapper"
            >
                <FB_VisibilityControl
                    desktopValue={postTitleDesktopSwitcher}
                    setDesktopValue={(value) =>
                        setAttributes({
                            postTitleDesktopSwitcher: value,
                        })
                    }
                    tabletValue={postTitleTabletSwitcher}
                    setTabletValue={(value) =>
                        setAttributes({
                            postTitleTabletSwitcher: value,
                        })
                    }
                    mobileValue={postTitleMobileSwitcher}
                    setMobileValue={(value) =>
                        setAttributes({
                            postTitleMobileSwitcher: value,
                        })
                    }
                />
            </PanelBody>

            <PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
                <FB_CustomCSSEditor
                    value={postTitleGlobalCustomCSS}
                    onChangeValue={(value) =>
                        setAttributes({ postTitleGlobalCustomCSS: value })
                    }
                />
            </PanelBody>
        </>
    );

    return (
        <>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}
export default memo(Inspector);