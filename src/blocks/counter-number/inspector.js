import { __ } from '@wordpress/i18n';
import {
    MediaUpload,
    MediaUploadCheck,
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';

import {
    TabPanel,
    PanelBody,
    TextControl,
    ColorPicker,
    BaseControl,
    RangeControl,
    ToggleControl,
    DateTimePicker,
    Dropdown,
    Button,
    Dashicon,
    SelectControl,
    ButtonGroup,
    ResponsiveWrapper, __experimentalHStack as HStack,
} from '@wordpress/components';

import {
    PRESETS
} from "./constants/constants";

import { useEffect, useRef, useState, useMemo, memo } from '@wordpress/element';
import './editor.scss';
import { mediaType, BORDER_STYLES, UNIT_TYPES, OVERFLOW_OP, separatorType, CARD_WRAP_HZ_ALIGNMENT, CARD_WRAP_VR_ALIGNMENT, ICON_POSITION, TITLE_POSITION } from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from '@Components/typography-control';
import { useDeviceType } from "@Config/displayType";
import FB_ImageControl from '@Components/image-control';
import FB_PositionControl from '@Components/position-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_BackgroundImageControl from '../../components/background-image-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_Presets from '@Components/presets';
import {counterNumberPresets} from "./presets";

const Inspector = ({ attributes, setAttributes }) => {
    const {
        blockID,
        counterAlignment,
        // deviceType,
        counterNumberStart,
        counterNumberEnd,
        counterDuration,
        counterPrefix,
        counterPrefixSwitch,
        counterSuffix,
        counterSuffixSwitch,
        counterTitle,
        counterTitleSwitch,
        counterTitleTag,
        showThousandsSeparator,
        showThousandsSeparatorType,
        icon,
        iconPosition,
        titlePosition,
        counterCardAlignment,
        mediaSwitcher,
        counterMediaId,
        counterMediaUrl,
        counterMediaAlt,
        counterMediaImagedisplay,

        counterItemSize,
        counterItemSizeUnits,
        counterItemRatio,
        counterItemHeight,
        counterItemHeightUnits,

        // Item Border Type
        counterItemBorder,
        counterItemBorderColorSwitcher,
        counterItemBorderColor,
        counterItemBorderHoverColor,

        counterItemBorderTypeUnits,
        counterItemBorderTypeDesktop,
        counterItemBorderTypeTablet,
        counterItemBorderTypeMobile,
        counterItemBorderTypeLink,

        // Item Border Radius
        counterItemBorderRadiusUnits,
        counterItemBorderRadiusDesktop,
        counterItemBorderRadiusTablet,
        counterItemBorderRadiusMobile,
        counterItemBorderRadiusLink,

        // Item Background attributes
        counterItemBgColorSwitcher,
        counterItemBgColor,
        counterItemBgHoverColor,

        // Item Padding
        counterItemPaddingUnits,
        counterItemPaddingDesktop,
        counterItemPaddingTablet,
        counterItemPaddingMobile,
        counterItemPaddingLink,

        // Item Margin
        counterItemMarginUnits,
        counterItemMarginDesktop,
        counterItemMarginTablet,
        counterItemMarginMobile,
        counterItemMarginLink,

        //Counter Icon attributes
        counterIconMarginUnits,
        counterIconMarginDesktop,
        counterIconMarginTablet,
        counterIconMarginMobile,
        counterIconMarginLink,
        counterIconColorSwitcher,
        counterIconColor,
        counterIconHoverColor,
        counterIconSize,
        counterIconSizeUnits,
        counterIconSizeRatio,

        // Gap between icon and content
        counterItemGap,
        counterItemGapUnits,

        //Counter Number attributes
        counterNumberFontColorSwitcher,
        counterNumberFontColor,
        counterNumberFontHoverColor,
        counterNumberGlobalTypoSwitcher,
        counterNumberGlobalTypographyData,
        counterNumberGlobalTypoType,
        counterNumberGlobalTypoOption,
        counterNumberFontFamily,
        counterNumberFontSize,
        counterNumberFontSizeUnits,
        counterNumberFontWeight,
        counterNumberFontStyle,
        counterNumberTextTransform,
        counterNumberTextDecoration,
        counterNumberLetterSpacing,
        counterNumberLetterSpacingUnits,
        counterNumberLineHeight,
        counterNumberLineHeightUnits,

        counterNumberMarginUnits,
        counterNumberMarginDesktop,
        counterNumberMarginTablet,
        counterNumberMarginMobile,
        counterNumberMarginLink,

        //Counter Number Title attributes
        counterNumberTitleGlobalTypoSwitcher,
        counterNumberTitleGlobalTypographyData,
        counterNumberTitleGlobalTypoType,
        counterNumberTitleGlobalTypoOption,
        counterNumberTitleFontFamily,
        counterNumberTitleFontSize,
        counterNumberTitleFontSizeUnits,
        counterNumberTitleFontWeight,
        counterNumberTitleFontStyle,
        counterNumberTitleTextTransform,
        counterNumberTitleTextDecoration,
        counterNumberTitleLetterSpacing,
        counterNumberTitleLetterSpacingUnits,
        counterNumberTitleLineHeight,
        counterNumberTitleLineHeightUnits,
        counterNumberTitleFontColorSwitcher,
        counterNumberTitleFontColor,
        counterNumberTitleFontHoverColor,

        counterNumberTitleMarginUnits,
        counterNumberTitleMarginDesktop,
        counterNumberTitleMarginTablet,
        counterNumberTitleMarginMobile,
        counterNumberTitleMarginLink,

        //Global attributes
        counterGlobalZIndex,
        counterOverflow,
        counterGlobalPaddingUnits,
        counterGlobalPaddingDesktop,
        counterGlobalPaddingTablet,
        counterGlobalPaddingMobile,
        counterGlobalPaddingLink,
        counterGlobalMarginUnits,
        counterGlobalMarginDesktop,
        counterGlobalMarginTablet,
        counterGlobalMarginMobile,
        counterGlobalMarginLink,
        counterGlobalBgColorSwitcher,
        counterGlobalBgColor,
        counterGlobalBgHoverColor,
        counterGlobalBorder,
        counterGlobalBorderColorSwitcher,
        counterGlobalBorderColor,
        counterGlobalBorderHoverColor,
        counterGlobalBorderUnits,
        counterGlobalBorderDesktop,
        counterGlobalBorderTablet,
        counterGlobalBorderMobile,
        counterGlobalBorderLink,
        counterGlobalBorderRadiusUnits,
        counterGlobalBorderRadiusDesktop,
        counterGlobalBorderRadiusTablet,
        counterGlobalBorderRadiusMobile,
        counterGlobalBorderRadiusLink,
        counterGlobalBoxShadowValues,
        counterGlobalBoxShadowCssValue,

        counterDesktopSwitcher,
        counterTabletSwitcher,
        counterMobileSwitcher,

        // Position
        counterPositionType,
        counterHZOrientationType,
        counterVROrientationType,
        counterHZLeftOffset,
        counterHZLeftOffsetUnits,
        counterHZRightOffset,
        counterHZRightOffsetUnits,
        counterVRTopOffset,
        counterVRTopOffsetUnits,
        counterVRBottomOffset,
        counterVRBottomOffsetUnits,

        counterGlobalWraperCustomCSS,
        counterGlobalWraperID,
        counterGlobalWraperClass,
        counterPresetStyle
    } = attributes;

    const counterRef = useRef(null);
    const observerRef = useRef(null);

    const deviceType = useDeviceType();

    let defaultImageUrl = '';
    if (typeof FrontisBlocksData !== 'undefined') {
        defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/users-group.svg';
    }

    // Set default value for counterMediaUrl
    useEffect(() => {
        if (!counterMediaUrl) {
            setAttributes({ counterMediaUrl: defaultImageUrl });
        }
    }, []);

    // Icon media remove handler
    const removeCounterMedia = () => {
        setAttributes({
            counterMediaId: '',
            counterMediaUrl: ''
        });
    }
    const iconHandler = (iconName) => {
        setAttributes({ icon: iconName || 'star' })
    }

    const counterItemSizeHandler = (value) => {
        setAttributes({ counterItemSize: value });
    };

    const counterItemSizeUnitsHandler = (value) => {
        setAttributes({ counterItemSizeUnits: value });
    };

    const blockProps = useBlockProps();

    /** Counter Item Border **/
    const handleCounterItemBorderUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterItemBorderTypeLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterItemBorderTypeDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterItemBorderTypeTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterItemBorderTypeMobile: {
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
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ counterItemBorderTypeDesktop: { ...counterItemBorderTypeDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterItemBorderTypeTablet: { ...counterItemBorderTypeTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterItemBorderTypeMobile: { ...counterItemBorderTypeMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }
    const counterItemBorderCombineBtnHandler = () => {
        setAttributes({ counterItemBorderTypeLink: !counterItemBorderTypeLink });
    }

    const counterItemBorderTypeUnitsHandler = (unit) => {
        setAttributes({
            counterItemBorderTypeUnits: {
                ...counterItemBorderTypeUnits,
                [deviceType]: unit
            }
        })
    }

    /** Counter Item Border Radius **/
    const handleItemBorderRadiusUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterItemBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterItemBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterItemBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterItemBorderRadiusMobile: {
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
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ counterItemBorderRadiusDesktop: { ...counterItemBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterItemBorderRadiusTablet: { ...counterItemBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterItemBorderRadiusMobile: { ...counterItemBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const counterItemBorderRadiusCombineBtnHandler = () => {
        setAttributes({ counterItemBorderRadiusLink: !counterItemBorderRadiusLink });
    }

    const counterItemBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            counterItemBorderRadiusUnits: {
                ...counterItemBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    /** Counter Item Padding **/
    const handleCounterItemPaddingUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterItemPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterItemPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterItemPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterItemPaddingMobile: {
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
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ counterItemPaddingDesktop: { ...counterItemPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterItemPaddingTablet: { ...counterItemPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterItemPaddingMobile: { ...counterItemPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const counterItemPaddingCombineBtnHandler = () => {
        setAttributes({ counterItemPaddingLink: !counterItemPaddingLink });
    };

    const counterItemPaddingUnitsHandler = (unit) => {
        setAttributes({
            counterItemPaddingUnits: {
                ...counterItemPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Counter Item Margin **/
    const handleCounterItemMarginUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterItemMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterItemMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterItemMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterItemMarginMobile: {
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
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ counterItemMarginDesktop: { ...counterItemMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterItemMarginTablet: { ...counterItemMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterItemMarginMobile: { ...counterItemMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const counterItemMarginCombineBtnHandler = () => {
        setAttributes({ counterItemMarginLink: !counterItemMarginLink });
    };

    const counterItemMarginUnitsHandler = (unit) => {
        setAttributes({
            counterItemMarginUnits: {
                ...counterItemMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Counter Icon Margin **/
    const handleCounterIconMarginUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterIconMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterIconMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterIconMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterIconMarginMobile: {
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
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ counterIconMarginDesktop: { ...counterIconMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterIconMarginTablet: { ...counterIconMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterIconMarginMobile: { ...counterIconMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const counterIconMarginCombineBtnHandler = () => {
        setAttributes({ counterIconMarginLink: !counterIconMarginLink });
    }

    const counterIconMarginUnitsHandler = (unit) => {
        setAttributes({
            counterIconMarginUnits: {
                ...counterIconMarginUnits,
                [deviceType]: unit
            }
        })
    }

    /** Counter Number Margin**/
    const handleCounterNumberMarginUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterNumberMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterNumberMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterNumberMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterNumberMarginMobile: {
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
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ counterNumberMarginDesktop: { ...counterNumberMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterNumberMarginTablet: { ...counterNumberMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterNumberMarginMobile: { ...counterNumberMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }
    const counterNumberMarginCombineBtnHandler = () => {
        setAttributes({ counterNumberMarginLink: !counterNumberMarginLink });
    }

    const counterNumberMarginUnitsHandler = (unit) => {
        setAttributes({
            counterNumberMarginUnits: {
                ...counterNumberMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const handleCounterNumberTitleMarginUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterNumberTitleMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterNumberTitleMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterNumberTitleMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterNumberTitleMarginMobile: {
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
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ counterNumberTitleMarginDesktop: { ...counterNumberTitleMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterNumberTitleMarginTablet: { ...counterNumberTitleMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterNumberTitleMarginMobile: { ...counterNumberTitleMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }
    const counterNumberTitleMarginCombineBtnHandler = () => {
        setAttributes({ counterNumberTitleMarginLink: !counterNumberTitleMarginLink });
    }

    const counterNumberTitleMarginUnitsHandler = (unit) => {
        setAttributes({
            counterNumberTitleMarginUnits: {
                ...counterNumberTitleMarginUnits,
                [deviceType]: unit
            }
        })
    }

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (counterGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalPaddingMobile: {
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
                case 'Desktop':
                    setAttributes({
                        counterGlobalPaddingDesktop: {
                            ...counterGlobalPaddingDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalPaddingTablet: {
                            ...counterGlobalPaddingTablet,
                            [position]: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalPaddingMobile: {
                            ...counterGlobalPaddingMobile,
                            [position]: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ counterGlobalPaddingLink: !counterGlobalPaddingLink });
    };

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            counterGlobalPaddingUnits: {
                ...counterGlobalPaddingUnits,
                [deviceType]: unit,
            },
        });
    };
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (counterGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalMarginMobile: {
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
                case 'Desktop':
                    setAttributes({
                        counterGlobalMarginDesktop: {
                            ...counterGlobalMarginDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalMarginTablet: {
                            ...counterGlobalMarginTablet,
                            [position]: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalMarginMobile: {
                            ...counterGlobalMarginMobile,
                            [position]: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ counterGlobalMarginLink: !counterGlobalMarginLink });
    };

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            counterGlobalMarginUnits: {
                ...counterGlobalMarginUnits,
                [deviceType]: unit,
            },
        });
    };
    /** End Global Margin */

    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (counterGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalBorderMobile: {
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
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ counterGlobalBorderDesktop: { ...counterGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterGlobalBorderTablet: { ...counterGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterGlobalBorderMobile: { ...counterGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ counterGlobalBorderLink: !counterGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            counterGlobalBorderUnits: {
                ...counterGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (counterGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalBorderRadiusMobile: {
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
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ counterGlobalBorderRadiusDesktop: { ...counterGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterGlobalBorderRadiusTablet: { ...counterGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterGlobalBorderRadiusMobile: { ...counterGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ counterGlobalBorderRadiusLink: !counterGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            counterGlobalBorderRadiusUnits: {
                ...counterGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border Radius */

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody title={__("Counter Settings", "frontis-blocks")} initialOpen={true}>
                <FB_Presets
                    className="fb-counter-number-presets"
                    label={__('Select Preset', 'frontis-blocks')}
                    presets={counterNumberPresets}
                    value = {counterPresetStyle}
                    onChangeValue = 'counterPresetStyle'
                    defaultPresetValue="preset-1"
                    setAttributes={setAttributes}
                />

                <FB_ResponsiveAlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={counterAlignment}
                    setGlobalAlignment={(value) => setAttributes({ counterAlignment: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                <RangeControl
                    label={__('Starting Number', 'frontis-blocks')}
                    value={counterNumberStart}
                    onChange={(value) => setAttributes({ counterNumberStart: value })}
                    min={0}
                    max={100000}
                />

                <RangeControl
                    label={__('End Number', 'frontis-blocks')}
                    value={counterNumberEnd}
                    onChange={(value) => setAttributes({ counterNumberEnd: value })}
                    min={0}
                    step={0.1}
                    max={100000}
                />

                <RangeControl
                    label={__('Duration', 'frontis-blocks')}
                    value={counterDuration}
                    onChange={(value) => setAttributes({ counterDuration: value })}
                    min={0}
                    max={10000}
                />

                <ToggleControl
                    label={__('Counter Prefix', 'frontis-blocks')}
                    checked={counterPrefixSwitch}
                    onChange={(value) => setAttributes({ counterPrefixSwitch: value })}
                />
                {counterPrefixSwitch === true && <TextControl
                    value={counterPrefix}
                    onChange={(value) => setAttributes({ counterPrefix: value })}
                />}

                <ToggleControl
                    label={__('Counter Suffix', 'frontis-blocks')}
                    checked={counterSuffixSwitch}
                    onChange={(value) => setAttributes({ counterSuffixSwitch: value })}
                />
                {counterSuffixSwitch === true && <TextControl
                    value={counterSuffix}
                    onChange={(value) => setAttributes({ counterSuffix: value })}
                />}

                <ToggleControl
                    label={__('Show Thousands Separator', 'frontis-blocks')}
                    checked={showThousandsSeparator}
                    onChange={(value) => setAttributes({ showThousandsSeparator: value })}
                />
                {showThousandsSeparator === true && <SelectControl
                    label={__('Separator Type', 'frontis-blocks')}
                    options={separatorType}
                    value={showThousandsSeparatorType}
                    onChange={(value) => setAttributes({ showThousandsSeparatorType: value })}
                />}
            </PanelBody>
            <PanelBody title={__("Icon", "frontis-blocks")} initialOpen={false}>
                <BaseControl className="fb-sub-heading-position">
                    <SelectControl
                        label={__("Counter Icon", "frontis-block")}
                        value={mediaSwitcher}
                        options={mediaType}
                        onChange={(value) => setAttributes({ mediaSwitcher: value })}
                    />
                </BaseControl>

                {mediaSwitcher === 'image' && (<FB_ImageControl
                    globalImageUrl={counterMediaUrl}
                    setglobalImageUrl={(value) => setAttributes({ counterMediaUrl: value })}
                    globalImageAlt={counterMediaAlt}
                    setglobalImageAlt={(value) => setAttributes({ counterMediaAlt: value })}
                    globalImageID={counterMediaId}
                    setglobalImageID={(value) => setAttributes({ counterMediaId: value })}
                    globalImageSize={counterMediaImagedisplay}
                    setglobalImageSize={(value) => setAttributes({ counterMediaImagedisplay: value })}
                />)}

                {mediaSwitcher === 'icon' && (
                    <BaseControl>
                        <FBIconPicker value={icon} setIconHandler={iconHandler} />
                    </BaseControl>
                )}
            </PanelBody>

            <PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>
                <ToggleControl
                    label={__('Counter Title', 'frontis-blocks')}
                    checked={counterTitleSwitch}
                    onChange={(value) => setAttributes({ counterTitleSwitch: value })}
                />
                {counterTitleSwitch === true && <TextControl
                    label={__("Title Text", "frontis-blocks")}
                    value={counterTitle}
                    onChange={(value) => setAttributes({ counterTitle: value })}
                />}

                {counterTitleSwitch === true && (<FB_HtmlTagControl
                    label={__("Title Tag", "frontis-blocks")}
                    globalHtmlTag={counterTitleTag}
                    setGlobalHtmlTag={(value) => setAttributes({ counterTitleTag: value })}
                />)}
            </PanelBody>
        </>
    );

    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>
            <PanelBody
                title={__("Item", "frontis-blocks")}
                initialOpen={false}
            >
                <SelectControl
                    label={__("Icon Position", "frontis-blocks")}
                    value={iconPosition}
                    options={ICON_POSITION}
                    onChange={(value) => setAttributes({ iconPosition: value })}
                />

                <FB_ResponsiveAlignmentControl
                    label={__("Card Alignment", "frontis-blocks")}
                    globalAlignment={counterCardAlignment}
                    setGlobalAlignment={(value) => setAttributes({ counterCardAlignment: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_Range
                    min={1}
                    max={counterItemSizeUnits.Desktop === '%' ? 100 : 800}
                    label={__("Width", "frontis-blocks")}
                    rangeValue={counterItemSize}
                    onChangeHandler={counterItemSizeHandler}
                    rangeUnitHandler={counterItemSizeUnitsHandler}
                    deviceType={deviceType}
                    units={counterItemSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />

                <FB_Range
                    min={0}
                    max={counterItemHeightUnits.Desktop === '%' ? 100 : 800}
                    label={__("Height", "frontis-blocks")}
                    rangeValue={counterItemHeight}
                    onChangeHandler={(value) => setAttributes({ counterItemHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ counterItemHeightUnits: value })}
                    deviceType={deviceType}
                    units={counterItemHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />

                <ToggleControl
                    label={__('Square Ratio', 'frontis-blocks')}
                    checked={counterItemRatio}
                    onChange={(value) => setAttributes({ counterItemRatio: value })}
                />

                <FB_SwitcherControl
                    label={__("Background Color", "frontis-blocks")}
                    globalSwitcher={counterItemBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ counterItemBgColorSwitcher: value })}
                />

                {counterItemBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={counterItemBgColor}
                        setGlobalColor={(value) => setAttributes({ counterItemBgColor: value === undefined ? '' : value })}
                    />
                )}

                {counterItemBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={counterItemBgHoverColor}
                        setGlobalColor={(value) => setAttributes({ counterItemBgHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={counterItemBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ counterItemBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={counterItemBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ counterItemBorderColorSwitcher: value })}
                />

                {counterItemBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={counterItemBorderColor}
                        setGlobalColor={(value) => setAttributes({ counterItemBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {counterItemBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={counterItemBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ counterItemBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={'Border'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterItemBorderTypeUnitsHandler}
                    spacingUnits={counterItemBorderTypeUnits}
                    spacingDesktop={counterItemBorderTypeDesktop}
                    spacingTablet={counterItemBorderTypeTablet}
                    spacingMobile={counterItemBorderTypeMobile}
                    handleSpacingUnitHandler={handleCounterItemBorderUnitHandler}
                    spacingCombineBtn={counterItemBorderTypeLink}
                    spacingCombineBtnHandler={counterItemBorderCombineBtnHandler}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={'Border Radius'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterItemBorderRadiusUnitsHandler}
                    spacingUnits={counterItemBorderRadiusUnits}
                    spacingDesktop={counterItemBorderRadiusDesktop}
                    spacingTablet={counterItemBorderRadiusTablet}
                    spacingMobile={counterItemBorderRadiusMobile}
                    handleSpacingUnitHandler={handleItemBorderRadiusUnitHandler}
                    spacingCombineBtn={counterItemBorderRadiusLink}
                    spacingCombineBtnHandler={counterItemBorderRadiusCombineBtnHandler}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={'Padding'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterItemPaddingUnitsHandler}
                    spacingUnits={counterItemPaddingUnits}
                    spacingDesktop={counterItemPaddingDesktop}
                    spacingTablet={counterItemPaddingTablet}
                    spacingMobile={counterItemPaddingMobile}
                    handleSpacingUnitHandler={handleCounterItemPaddingUnitHandler}
                    spacingCombineBtn={counterItemPaddingLink}
                    spacingCombineBtnHandler={counterItemPaddingCombineBtnHandler}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={'Margin'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterItemMarginUnitsHandler}
                    spacingUnits={counterItemMarginUnits}
                    spacingDesktop={counterItemMarginDesktop}
                    spacingTablet={counterItemMarginTablet}
                    spacingMobile={counterItemMarginMobile}
                    handleSpacingUnitHandler={handleCounterItemMarginUnitHandler}
                    spacingCombineBtn={counterItemMarginLink}
                    spacingCombineBtnHandler={counterItemMarginCombineBtnHandler}
                    setAttributes={setAttributes}
                />

            </PanelBody>

            {mediaSwitcher !== 'none' && <PanelBody
                title={__("Icon", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={counterIconColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ counterIconColorSwitcher: value })}
                />

                {counterIconColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={counterIconColor}
                        setGlobalColor={(value) => setAttributes({ counterIconColor: value === undefined ? '' : value })}
                    />
                )}

                {counterIconColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={counterIconHoverColor}
                        setGlobalColor={(value) => setAttributes({ counterIconHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Range
                    min={0}
                    max={100}
                    label={__("Icon Size", "frontis-blocks")}
                    rangeValue={counterIconSize}
                    onChangeHandler={(value) => setAttributes({ counterIconSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ counterIconSizeUnits: value })}
                    deviceType={deviceType}
                    units={counterIconSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"25"}
                />

                <FB_Range
                    min={0}
                    max={100}
                    label={__("Gap", "frontis-blocks")}
                    rangeValue={counterItemGap}
                    onChangeHandler={(value) => setAttributes({ counterItemGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ counterItemGapUnits: value })}
                    deviceType={deviceType}
                    units={counterItemGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"10"}
                />

                <ToggleControl
                    label={__("Icon Square Ratio", "frontis-blocks")}
                    checked={counterIconSizeRatio}
                    onChange={(value) => setAttributes({ counterIconSizeRatio: value })}
                />

                <FB_Spacing
                    label={'Margin'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterIconMarginUnitsHandler}
                    spacingUnits={counterIconMarginUnits}
                    spacingDesktop={counterIconMarginDesktop}
                    spacingTablet={counterIconMarginTablet}
                    spacingMobile={counterIconMarginMobile}
                    handleSpacingUnitHandler={handleCounterIconMarginUnitHandler}
                    spacingCombineBtn={counterIconMarginLink}
                    spacingCombineBtnHandler={counterIconMarginCombineBtnHandler}
                    setAttributes={setAttributes}
                />
            </PanelBody>}

            <PanelBody
                title={__("Counter Number", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={counterNumberFontColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ counterNumberFontColorSwitcher: value })}
                />

                {counterNumberFontColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={counterNumberFontColor}
                        setGlobalColor={(value) => setAttributes({ counterNumberFontColor: value === undefined ? '' : value })}
                    />
                )}

                {counterNumberFontColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={counterNumberFontHoverColor}
                        setGlobalColor={(value) => setAttributes({ counterNumberFontHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={counterNumberGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ counterNumberGlobalTypographyData: value })}

                    globalTypoType={counterNumberGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            counterNumberGlobalTypoType: value,
                            counterNumberGlobalTypoSwitcher: value === 'default' ? { ...counterNumberGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...counterNumberGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                        })
                    }}

                    globalTypoOption={counterNumberGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ counterNumberGlobalTypoOption: value })}

                    fontFamily={counterNumberFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ counterNumberFontFamily: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, fontFamily: value && false } })}

                    fontSize={counterNumberFontSize}
                    onChangeFontSize={(value) => setAttributes({ counterNumberFontSize: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, fontSize: value && false } })}

                    fontSizeUnits={counterNumberFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ counterNumberFontSizeUnits: value })}

                    fontWeight={counterNumberFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ counterNumberFontWeight: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, fontWeight: value && false } })}

                    fontStyle={counterNumberFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ counterNumberFontStyle: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, fontStyle: value && false } })}

                    textTransform={counterNumberTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ counterNumberTextTransform: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, textTransform: value && false } })}

                    textDecoration={counterNumberTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ counterNumberTextDecoration: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, textDecoration: value && false } })}

                    letterSpacing={counterNumberLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ counterNumberLetterSpacing: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, letterSpacing: value && false } })}

                    letterSpacingUnits={counterNumberLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ counterNumberLetterSpacingUnits: value })}

                    lineHeight={counterNumberLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ counterNumberLineHeight: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, lineHeight: value && false } })}

                    lineHeightUnits={counterNumberLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ counterNumberLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={'Margin'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterNumberMarginUnitsHandler}
                    spacingUnits={counterNumberMarginUnits}
                    spacingDesktop={counterNumberMarginDesktop}
                    spacingTablet={counterNumberMarginTablet}
                    spacingMobile={counterNumberMarginMobile}
                    handleSpacingUnitHandler={handleCounterNumberMarginUnitHandler}
                    spacingCombineBtn={counterNumberMarginLink}
                    spacingCombineBtnHandler={counterNumberMarginCombineBtnHandler}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            {counterTitleSwitch && <PanelBody
                title={__("Counter Title", "frontis-blocks")}
                initialOpen={false}
            >
                <SelectControl
                    label={__("Title Position", "frontis-blocks")}
                    value={titlePosition}
                    options={TITLE_POSITION}
                    onChange={(value) => setAttributes({ titlePosition: value })}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={counterNumberTitleFontColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ counterNumberTitleFontColorSwitcher: value })}
                />

                {counterNumberTitleFontColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={counterNumberTitleFontColor}
                        setGlobalColor={(value) => setAttributes({ counterNumberTitleFontColor: value === undefined ? '' : value })}
                    />
                )}

                {counterNumberTitleFontColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={counterNumberTitleFontHoverColor}
                        setGlobalColor={(value) => setAttributes({ counterNumberTitleFontHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={counterNumberTitleGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ counterNumberTitleGlobalTypographyData: value })}

                    globalTypoType={counterNumberTitleGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            counterNumberTitleGlobalTypoType: value,
                            counterNumberTitleGlobalTypoSwitcher: value === 'default' ? { ...counterNumberTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...counterNumberTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                        })
                    }}

                    globalTypoOption={counterNumberTitleGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ counterNumberTitleGlobalTypoOption: value })}

                    fontFamily={counterNumberTitleFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ counterNumberTitleFontFamily: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, fontFamily: value && false } })}

                    fontSize={counterNumberTitleFontSize}
                    onChangeFontSize={(value) => setAttributes({ counterNumberTitleFontSize: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, fontSize: value && false } })}

                    fontSizeUnits={counterNumberTitleFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ counterNumberTitleFontSizeUnits: value })}

                    fontWeight={counterNumberTitleFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ counterNumberTitleFontWeight: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, fontWeight: value && false } })}

                    fontStyle={counterNumberTitleFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ counterNumberTitleFontStyle: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, fontStyle: value && false } })}

                    textTransform={counterNumberTitleTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ counterNumberTitleTextTransform: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, textTransform: value && false } })}

                    textDecoration={counterNumberTitleTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ counterNumberTitleTextDecoration: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, textDecoration: value && false } })}

                    letterSpacing={counterNumberTitleLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ counterNumberTitleLetterSpacing: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, letterSpacing: value && false } })}

                    letterSpacingUnits={counterNumberTitleLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ counterNumberTitleLetterSpacingUnits: value })}

                    lineHeight={counterNumberTitleLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ counterNumberTitleLineHeight: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, lineHeight: value && false } })}

                    lineHeightUnits={counterNumberTitleLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ counterNumberTitleLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={'Margin'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterNumberTitleMarginUnitsHandler}
                    spacingUnits={counterNumberTitleMarginUnits}
                    spacingDesktop={counterNumberTitleMarginDesktop}
                    spacingTablet={counterNumberTitleMarginTablet}
                    spacingMobile={counterNumberTitleMarginMobile}
                    handleSpacingUnitHandler={handleCounterNumberTitleMarginUnitHandler}
                    spacingCombineBtn={counterNumberTitleMarginLink}
                    spacingCombineBtnHandler={counterNumberTitleMarginCombineBtnHandler}
                    setAttributes={setAttributes}
                />
            </PanelBody>}
        </>
    );

    /**
     * Inspector Advanced Controls
     */
    const advancedControls = (
        <>
            <div className="fb-setting-advanced-tab-wrapper">
                <div className="fb-setting-inner-wrapper">
                    <PanelBody
                        title={__("Layout", "frontis-blocks")}
                        initialOpen={true}
                        className='fb-setting-layout-header'
                    >
                        <FB_Range
                            min={0}
                            max={10000000}
                            label={__("Z Index", "frontis-blocks")}
                            rangeValue={counterGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ counterGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}
                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={counterOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ counterOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={counterPositionType}
                            setPositionType={(value) => setAttributes({ counterPositionType: value })}

                            HZOrientationType={counterHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ counterHZOrientationType: value })
                            }
                            VROrientationType={counterVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ counterVROrientationType: value })
                            }

                            HZLeftOffset={counterHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ counterHZLeftOffset: value })}
                            HZLeftOffsetUnits={counterHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ counterHZLeftOffsetUnits: value })}
                            HZRightOffset={counterHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ counterHZRightOffset: value })}
                            HZRightOffsetUnits={counterHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ counterHZRightOffsetUnits: value })}

                            VRTopOffset={counterVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ counterVRTopOffset: value })}
                            VRTopOffsetUnits={counterVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ counterVRTopOffsetUnits: value })}
                            VRBottomOffset={counterVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ counterVRBottomOffset: value })}
                            VRBottomOffsetUnits={counterVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ counterVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={counterGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ counterGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={counterGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ counterGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={counterGlobalPaddingUnits}
                            spacingDesktop={counterGlobalPaddingDesktop}
                            spacingTablet={counterGlobalPaddingTablet}
                            spacingMobile={counterGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={counterGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={counterGlobalMarginUnits}
                            spacingDesktop={counterGlobalMarginDesktop}
                            spacingTablet={counterGlobalMarginTablet}
                            spacingMobile={counterGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={counterGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Background Color", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_SwitcherControl
                            label={__("Background Color", "frontis-blocks")}
                            globalSwitcher={counterGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ counterGlobalBgColorSwitcher: value })}
                        />

                        {counterGlobalBgColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={counterGlobalBgColor}
                                setGlobalColor={(value) => setAttributes({ counterGlobalBgColor: value === undefined ? '' : value })}
                            />
                        )}

                        {counterGlobalBgColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={counterGlobalBgHoverColor}
                                setGlobalColor={(value) => setAttributes({ counterGlobalBgHoverColor: value === undefined ? '' : value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Border and Shadow", "frontis-blocks")}
                        initialOpen={false}
                    >

                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={counterGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ counterGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={counterGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ counterGlobalBorderColorSwitcher: value })}
                        />

                        {counterGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={counterGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ counterGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {counterGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={counterGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ counterGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={counterGlobalBorderUnits}
                            spacingDesktop={counterGlobalBorderDesktop}
                            spacingTablet={counterGlobalBorderTablet}
                            spacingMobile={counterGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={counterGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={counterGlobalBorderRadiusUnits}
                            spacingDesktop={counterGlobalBorderRadiusDesktop}
                            spacingTablet={counterGlobalBorderRadiusTablet}
                            spacingMobile={counterGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={counterGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_BoxShadowControl
                            onBoxShadowChange={(value) => setAttributes({ counterGlobalBoxShadowValues: value })}
                            initialShadowValue={counterGlobalBoxShadowValues}
                            onBoxShadowStyleChange={(value) => setAttributes({ counterGlobalBoxShadowCssValue: value })}
                        />

                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={counterDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ counterDesktopSwitcher: value })}

                            tabletValue={counterTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ counterTabletSwitcher: value })}

                            mobileValue={counterMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ counterMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={counterGlobalWraperCustomCSS}
                            onChangeValue={(value) => setAttributes({ counterGlobalWraperCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
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