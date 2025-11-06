import { __ } from "@wordpress/i18n";
import { useMemo, useEffect } from "@wordpress/element";
import {
    PanelBody,
    BaseControl,
    RangeControl,
    SelectControl,
    ToggleControl,
} from "@wordpress/components";
import { OVERFLOW_OP, BORDER_STYLES } from "@Constants/fbConstants";
import loadGoogleFont from "@Utils/loadGoogleFont";
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

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockId,
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

    useEffect(() => {
        if (clientId && !blockId) {
            setAttributes({ blockId: "fb-post-title-" + clientId.slice(0, 8) });
        }
    }, [clientId]);

    /** Start Load Google Font */
    useEffect(() => {
        if (postTitleFontFamily !== "Default") {
            loadGoogleFont(postTitleFontFamily);
        }
    }, [postTitleFontFamily]);
    /** End Load Google Font */

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

    const postGlobalDesktopPaddingWidth = `${postGlobalPaddingDesktop.top}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.right}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.bottom}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.left}${postGlobalPaddingUnits.Desktop}`;
    const postGlobalTabletPaddingWidth = `${postGlobalPaddingTablet.top}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.right}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.bottom}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.left}${postGlobalPaddingUnits.Tablet}`;
    const postGlobalMobilePaddingWidth = `${postGlobalPaddingMobile.top}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.right}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.bottom}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.left}${postGlobalPaddingUnits.Mobile}`;
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

    const postGlobalDesktopMarginWidth = `${postGlobalMarginDesktop.top}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.right}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.bottom}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.left}${postGlobalMarginUnits.Desktop}`;
    const postGlobalTabletMarginWidth = `${postGlobalMarginTablet.top}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.right}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.bottom}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.left}${postGlobalMarginUnits.Tabelet}`;
    const postGlobalMobileMarginWidth = `${postGlobalMarginMobile.top}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.right}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.bottom}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.left}${postGlobalMarginUnits.Mobile}`;
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
    const postGlobalDesktopBorderWidth = `${postGlobalBorderDesktop.top}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.right}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.bottom}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.left}${postGlobalBorderUnits.Desktop}`;
    const postGlobalTabletBorderWidth = `${postGlobalBorderTablet.top}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.right}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.bottom}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.left}${postGlobalBorderUnits.Tablet}`;
    const postGlobalMobileBorderWidth = `${postGlobalBorderMobile.top}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.right}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.bottom}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.left}${postGlobalBorderUnits.Mobile}`;
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

    /** End Global Border Radius */
    const postGlobalDesktopBorderRadiusWidth = `${postGlobalBorderRadiusDesktop.top}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.right}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.bottom}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.left}${postGlobalBorderRadiusUnits.Desktop}`;
    const postGlobalTabletBorderRadiusWidth = `${postGlobalBorderRadiusTablet.top}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.right}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.bottom}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.left}${postGlobalBorderRadiusUnits.Tablet}`;
    const postGlobalMobileBorderRadiusWidth = `${postGlobalBorderRadiusMobile.top}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.right}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.bottom}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.left}${postGlobalBorderRadiusUnits.Mobile}`;
    /** End Global Border Radius */

    const allBlockStyle = useMemo(
    () => `
        .${blockId}.fb-post-title-block{
            display: flex;
            ${titleAlignment.Desktop
                ? `justify-content: ${titleAlignment.Desktop};`
                : ""
            }
        }

        .${blockId} .fb-post-title {
            margin-block-start: 0;
            margin-block-end: 0;
        }

        ${isLink ? 
            `.${blockId} .fb-post-title .fb-post-title-link:focus{
                color: inherit;
                box-shadow: none;
                outline: inherit;
            }`
            : ""
        }

        .${blockId} .fb-post-title,
        .${blockId} .fb-post-title .fb-post-title-link{
            ${postTitleColor ? `color: ${postTitleColor};` : ""}
            ${postTitleGlobalTypoSwitcher.fontFamily === true &&
                postTitleGlobalTypographyData.fontFamily
                ? `font-family: ${postTitleGlobalTypographyData.fontFamily};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.fontSize === true &&
                postTitleGlobalTypographyData.fontSize
                ? `font-size: ${postTitleGlobalTypographyData.fontSize};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.fontWeight === true &&
                postTitleGlobalTypographyData.fontWeight
                ? `font-weight: ${postTitleGlobalTypographyData.fontWeight};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.fontStyle === true &&
                postTitleGlobalTypographyData.fontStyle
                ? `font-style: ${postTitleGlobalTypographyData.fontStyle};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.textTransform === true &&
                postTitleGlobalTypographyData.textTransform
                ? `text-transform: ${postTitleGlobalTypographyData.textTransform};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.textDecoration === true &&
                postTitleGlobalTypographyData.textDecoration
                ? `text-decoration: ${postTitleGlobalTypographyData.textDecoration};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.letterSpacing === true &&
                postTitleGlobalTypographyData.letterSpacing
                ? `letter-spacing: ${postTitleGlobalTypographyData.letterSpacing};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.lineHeight === true &&
                postTitleGlobalTypographyData.lineHeight
                ? `line-height: ${postTitleGlobalTypographyData.lineHeight};`
                : ""
            }

            ${postTitleGlobalTypoSwitcher.fontFamily === false &&
                postTitleFontFamily
                ? `font-family: ${postTitleFontFamily};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.fontSize === false &&
                postTitleFontSize.Desktop
                ? `font-size: ${postTitleFontSize.Desktop}${postTitleFontSizeUnits.Desktop};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.fontWeight === false &&
                postTitleFontWeight
                ? `font-weight: ${postTitleFontWeight};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.fontStyle === false &&
                postTitleFontStyle
                ? `font-style: ${postTitleFontStyle};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.textTransform === false &&
                postTitleTextTransform
                ? `text-transform: ${postTitleTextTransform};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.textDecoration === false &&
                postTitleTextDecoration
                ? `text-decoration: ${postTitleTextDecoration};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.letterSpacing === false &&
                postTitleLetterSpacing.Desktop
                ? `letter-spacing: ${postTitleLetterSpacing.Desktop}${postTitleLetterSpacingUnits.Desktop};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.lineHeight === false &&
                postTitleLineHeight.Desktop
                ? `line-height: ${postTitleLineHeight.Desktop}${postTitleLineHeightUnits.Desktop};`
                : ""
            }
            ${titleTextShadowCssValue
                ? `text-shadow: ${titleTextShadowCssValue};`
                : ""
            }
            ${titleTextStroke
                ? `
                ${titleTextStroke.Desktop
                    ? `-webkit-text-stroke: ${titleTextStroke.Desktop}px ${titleTextStrokeColor};`
                    : ""
                }
                ${titleTextStroke.Desktop
                    ? `text-stroke: ${titleTextStroke.Desktop}px ${titleTextStrokeColor};` : ""
                } 
                ` : ""
            }
            transition: all .3s ease;
        }

        .${blockId} .fb-post-title:hover,
        .${blockId} .fb-post-title .fb-post-title-link:hover{
            ${postTitleHoverColor
                ? `color: ${postTitleHoverColor};`
                : "color: inherit;"
            }

            ${titleTextStrokeHoverColor
                ? `
                ${titleTextStroke.Desktop
                    ? `-webkit-text-stroke: ${titleTextStroke.Desktop}px ${titleTextStrokeHoverColor};`
                    : ""
                }
                ${titleTextStroke.Desktop
                    ? `text-stroke: ${titleTextStroke.Desktop}px ${titleTextStrokeHoverColor};`
                    : ""
                }
                ` : ""
            }
        }

        /** Advance Control Global Style - Desktop */
        .${blockId}.fb-post-title-block{
            margin-block-start: 0;

            ${postTitlePositionType === "default"
                ? `position: relative;`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative"
                ? `width: 100%;`
                : ""
            }
            ${postTitlePositionType !== "default"
                ? `position: ${postTitlePositionType};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleHZOrientationType === "left" &&
                postTitleHZLeftOffset.Desktop !== undefined
                ? `left: ${postTitleHZLeftOffset.Desktop}${postTitleHZLeftOffsetUnits.Desktop};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleHZOrientationType === "right" &&
                postTitleHZRightOffset.Desktop !== undefined
                ? `right: ${postTitleHZRightOffset.Desktop}${postTitleHZRightOffsetUnits.Desktop};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleVROrientationType === "top" &&
                postTitleVRTopOffset.Desktop !== undefined
                ? `top: ${postTitleVRTopOffset.Desktop}${postTitleVRTopOffsetUnits.Desktop};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleVROrientationType === "bottom" &&
                postTitleVRBottomOffset.Desktop !== undefined
                ? `bottom: ${postTitleVRBottomOffset.Desktop}${postTitleVRBottomOffsetUnits.Desktop};`
                : ""
            }
            ${postTitleGlobalZIndex.Desktop
                ? `z-index: ${postTitleGlobalZIndex.Desktop};`
                : ""
            }
            ${postTitleOverflow !== "default"
                ? `overflow: ${postTitleOverflow};`
                : ""
            }
            transition: all 0.3s ease;
        }

        .${blockId}.fb-post-title-block{
            ${postGlobalDesktopPaddingWidth && postGlobalPaddingDesktop.top
                ? `padding: ${postGlobalDesktopPaddingWidth};`
                : ""
            }
            ${postGlobalDesktopMarginWidth && postGlobalMarginDesktop.top
                ? `margin: ${postGlobalDesktopMarginWidth};`
                : ""
            }

                ${postGlobalBorder ? `border: ${postGlobalBorder};` : ""} 
            ${postGlobalDesktopBorderWidth && postGlobalBorderDesktop.top
                ? `border-width: ${postGlobalDesktopBorderWidth};`
                : ""
            }
            ${postGlobalDesktopBorderRadiusWidth &&
                postGlobalBorderRadiusDesktop.top
                ? `border-radius: ${postGlobalDesktopBorderRadiusWidth}!important;`
                : ""
            }
            ${postGlobalBorderColor
                ? `border-color: ${postGlobalBorderColor};`
                : ""
            }
            ${postGlobalBoxShadowCssValue
                ? `box-shadow: ${postGlobalBoxShadowCssValue} !important;`
                : ""
            }
            ${postGlobalNormalBackgroundType === "gradient"
                ? 
                `${postGlobalNormalCustomGradientSwitcher &&
                        postGlobalNormalCustomGradientInputValue
                        ? `background: ${postGlobalNormalCustomGradientInputValue};`
                        : `background: ${postGlobalNormalGradientColor};`
                }`
                : 
                `${postGlobalNormalClassicColor
                    ? `background: ${postGlobalNormalClassicColor};`
                    : ""
                }`
            }
        }

        .${blockId}.fb-post-title-block:hover {
            ${postGlobalHoverBackgroundType === "gradient"
                ? 
                `${postGlobalHoverCustomGradientSwitcher &&
                    postGlobalHoverCustomGradientInputValue
                    ? `background: ${postGlobalHoverCustomGradientInputValue};`
                    : `background: ${postGlobalHoverGradientColor};`
                }`
                : 
                `${postGlobalHoverClassicColor
                    ? `background: ${postGlobalHoverClassicColor};`
                    : ""
                }
                ${postGlobalBorderHoverColor
                    ? `border-color: ${postGlobalBorderHoverColor};`
                    : ""
                }
                ${postGlobalBoxShadowHoverCssValue
                    ? `box-shadow: ${postGlobalBoxShadowHoverCssValue}!important;`
                    : ""
                }`
            }
        }

    /* Responsive styles for tablet ====================================== */
    @media only screen and (max-width: 1024px) {
        .${blockId}.fb-post-title-block {
            ${titleAlignment.Tablet
                ? `justify-content: ${titleAlignment.Tablet};`
                : ""
            }
        }

        .${blockId} .fb-post-title {
            ${postTitleGlobalTypoSwitcher.fontSize ===
                false &&
                postTitleFontSize.Tablet
                ? `font-size: ${postTitleFontSize.Tablet}${postTitleFontSizeUnits.Tablet};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.letterSpacing === false &&
                postTitleLetterSpacing.Tablet
                ? `letter-spacing: ${postTitleLetterSpacing.Tablet}${postTitleLetterSpacingUnits.Tablet};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.lineHeight === false &&
                postTitleLineHeight.Tablet
                ? `line-height: ${postTitleLineHeight.Tablet}${postTitleLineHeightUnits.Tablet};`
                : ""
            }
            ${titleTextStroke
                ? 
                `${titleTextStroke.Tablet
                    ? `-webkit-text-stroke: ${titleTextStroke.Tablet}px ${titleTextStrokeColor};`
                    : ""
                }
                ${titleTextStroke.Tablet
                    ? `text-stroke: ${titleTextStroke.Tablet}px ${titleTextStrokeColor};`
                    : ""
                }`
                : ""
            }
        }

        .${blockId} .fb-post-title:hover{
            ${titleTextStrokeHoverColor
                ? 
                `${titleTextStroke.Tablet
                    ? `-webkit-text-stroke: ${titleTextStroke.Tablet}px ${titleTextStrokeHoverColor};`
                    : ""
                }
                ${titleTextStroke.Tablet
                    ? `text-stroke: ${titleTextStroke.Tablet}px ${titleTextStrokeHoverColor};`
                    : ""
                }`
                : ""
            }
        }

        /** Advance Control Global Style - Tablet */
        .${blockId}.fb-post-title-block{
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleHZOrientationType === "left" &&
                postTitleHZLeftOffset.Tablet !== undefined
                ? `left: ${postTitleHZLeftOffset.Tablet}${postTitleHZLeftOffsetUnits.Tablet};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleHZOrientationType === "right" &&
                postTitleHZRightOffset.Tablet !== undefined
                ? `right: ${postTitleHZRightOffset.Tablet}${postTitleHZRightOffsetUnits.Tablet};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleVROrientationType === "top" &&
                postTitleVRTopOffset.Tablet !== undefined
                ? `top: ${postTitleVRTopOffset.Tablet}${postTitleVRTopOffsetUnits.Tablet};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleVROrientationType === "bottom" &&
                postTitleVRBottomOffset.Tablet !== undefined
                ? `bottom: ${postTitleVRBottomOffset.Tablet}${postTitleVRBottomOffsetUnits.Tablet};`
                : ""
            }
            ${postTitleGlobalZIndex.Tablet
                ? `z-index: ${postTitleGlobalZIndex.Tablet};`
                : ""
            }

        }

        .${blockId}.fb-post-title-block {
            ${postGlobalTabletPaddingWidth && postGlobalPaddingTablet.top
                ? `padding: ${postGlobalTabletPaddingWidth};`
                : ""
            }
            ${postGlobalTabletMarginWidth && postGlobalMarginTablet.top
                ? `margin: ${postGlobalTabletMarginWidth};`
                : ""
            }
            ${postGlobalTabletBorderWidth && postGlobalBorderTablet.top
                ? `border-width: ${postGlobalTabletBorderWidth};`
                : ""
            }
            ${postGlobalTabletBorderRadiusWidth &&
                postGlobalBorderRadiusTablet.top
                ? `border-radius: ${postGlobalTabletBorderRadiusWidth}!important;`
                : ""
            }
        }

    } /* End Responsive Style For Tablet */

    /* Responsive styles for mobile ====================================== */
    @media (max-width: 767px) {
        .${blockId}.fb-post-title-block{
            ${titleAlignment.Mobile
                ? `justify-content: ${titleAlignment.Mobile};`
                : ""
            }            
        }

        .${blockId} .fb-post-title,
        .${blockId} .fb-post-title .fb-post-title-link {
            ${postTitleGlobalTypoSwitcher.fontSize ===
                false && postTitleFontSize.Mobile
                ? `font-size: ${postTitleFontSize.Mobile}${postTitleFontSizeUnits.Mobile};`
                : ""
            }
			${postTitleGlobalTypoSwitcher.letterSpacing === false &&
                postTitleLetterSpacing.Mobile
                ? `letter-spacing: ${postTitleLetterSpacing.Mobile}${postTitleLetterSpacingUnits.Mobile};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.lineHeight === false &&
                postTitleLineHeight.Mobile
                ? `line-height: ${postTitleLineHeight.Mobile}${postTitleLineHeightUnits.Mobile};`
                : ""
            }
            ${titleTextStroke
                ? 
                `${titleTextStroke.Mobile
                    ? `-webkit-text-stroke: ${titleTextStroke.Mobile}px ${titleTextStrokeColor};`
                    : ""
                }
                ${titleTextStroke.Mobile
                    ? `text-stroke: ${titleTextStroke.Mobile}px ${titleTextStrokeColor};`
                    : ""
                }`
                : ""
            }
        }

        .${blockId} .fb-post-title:hover,
        .${blockId} .fb-post-title .fb-post-title-link:hover{
            ${titleTextStrokeHoverColor
                ? 
                `${titleTextStroke.Mobile
                    ? `-webkit-text-stroke: ${titleTextStroke.Mobile}px ${titleTextStrokeHoverColor};`
                    : ""
                }
                ${titleTextStroke.Mobile
                    ? `text-stroke: ${titleTextStroke.Mobile}px ${titleTextStrokeHoverColor};`
                    : ""
                }`
                : ""
            }
        }

        /** Advance Control Global Style - Mobile */
        .${blockId}.fb-post-title-block{
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleHZOrientationType === "left" &&
                postTitleHZLeftOffset.Mobile !== undefined
                ? `left: ${postTitleHZLeftOffset.Mobile}${postTitleHZLeftOffsetUnits.Mobile};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleHZOrientationType === "right" &&
                postTitleHZRightOffset.Mobile !== undefined
                ? `right: ${postTitleHZRightOffset.Mobile}${postTitleHZRightOffsetUnits.Mobile};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleVROrientationType === "top" &&
                postTitleVRTopOffset.Mobile !== undefined
                ? `top: ${postTitleVRTopOffset.Mobile}${postTitleVRTopOffsetUnits.Mobile};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleVROrientationType === "bottom" &&
                postTitleVRBottomOffset.Mobile !== undefined
                ? `bottom: ${postTitleVRBottomOffset.Mobile}${postTitleVRBottomOffsetUnits.Mobile};`
                : ""
            } 
            ${postTitleGlobalZIndex.Mobile
                ? `z-index: ${postTitleGlobalZIndex.Mobile};`
                : ""
            }

        }

        .${blockId}.fb-post-title-block {    
            ${postGlobalMobilePaddingWidth && postGlobalPaddingMobile.top
                ? `padding: ${postGlobalMobilePaddingWidth}`
                : ""
            }
            ${postGlobalMobileMarginWidth && postGlobalMarginMobile.top
                ? `margin: ${postGlobalMobileMarginWidth}`
                : ""
            }
            ${postGlobalMobileBorderWidth && postGlobalBorderMobile.top
                ? `border-width: ${postGlobalMobileBorderWidth};`
                : ""
            }
            ${postGlobalMobileBorderRadiusWidth &&
                postGlobalBorderRadiusMobile.top
                ? `border-radius: ${postGlobalMobileBorderRadiusWidth}!important;`
                : ""
            }
        }
    } /* End Responsive Style For Mobile */
`,
    [attributes],
    );

    const customCss = getCustomCss(postTitleGlobalCustomCSS, `.${blockId}`);
    // const customCss = getCustomCss(postTitleGlobalCustomCSS, `.${blockId}.fb-post-title, #${wrapperId}.fb-post-title`);
    const editorStyle = `${allBlockStyle} ${customCss}`
        .replace(/\s+/g, " ")
        .trim();

    useEffect(() => {
        setAttributes({ blockStyle: editorStyle });
    }, [editorStyle]);

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

                        <p style={{ fontSize: "12px", color: "#888" }}>
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

            <p style={{ fontSize: "12px", color: "#888" }}>
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
            <style>{editorStyle}</style>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}
