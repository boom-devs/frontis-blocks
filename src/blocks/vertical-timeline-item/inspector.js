import { __ } from '@wordpress/i18n';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
    SelectControl,
    PanelBody,
    TabPanel,
    BaseControl,
    vertcalTimelineContentBox,
    vertcalTimelineContentBoxGroup,
    ToggleControl,
    TextControl,
    __experimentalInputControl as InputControl,
    TextareaControl,
    Dropdown,
    Dashicon,
    RangeControl,
    ColorPicker,
    ColorPalette,
    MediaUpload,
    MediaUploadCheck,
    Placeholder,
    PanelRow,
    Popover,
    MenuGroup,
    MenuItem
} from '@wordpress/components';

/**
 * Internal depencencies
 */
import {
    BORDER_STYLES,
} from '@Constants/fbConstants';

import { useState, useEffect, useMemo, memo } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import FBIconPicker from "../../components/icon-picker";
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_BackgroundColorControl from '@Components/background-color-control';

import './editor.scss';;

const Inspector = ({ attributes, setAttributes }) => {

    const {

        /** Start General Settings */
        inheritedShowSectionLabelSwitcher,
        verticalTimelineItemSectionLabel,
        showPhaseTitleSwitcher,
        verticalTimelineItemPhaseTitle,
        verticalTimelineItemIcon,
        /** End General Settings */

        /** Start Content Box Background */
        vertcalTimelineContentBoxGlobalBgColorSwitcher,
        vertcalTimelineContentBoxGlobalNormalBackgroundType,
        vertcalTimelineContentBoxGlobalNormalClassicColor,
        vertcalTimelineContentBoxGlobalNormalGradientColor,
        vertcalTimelineContentBoxGlobalNormalCustomGradientSwitcher,
        vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue,

        vertcalTimelineContentBoxGlobalHoverBackgroundType,
        vertcalTimelineContentBoxGlobalHoverClassicColor,
        vertcalTimelineContentBoxGlobalHoverGradientColor,
        vertcalTimelineContentBoxGlobalHoverCustomGradientSwitcher,
        vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue,
        /** End Content Box  Background */

        /** Start Phase Title Background */
        vertcalTimelinePhaseTitleNormalBgColorSwitcher,
        vertcalTimelinePhaseTitleNormalBackgroundType,
        vertcalTimelinePhaseTitleNormalClassicColor,
        vertcalTimelinePhaseTitleNormalGradientColor,
        vertcalTimelinePhaseTitleNormalCustomGradientSwitcher,
        vertcalTimelinePhaseTitleNormalCustomGradientInputValue,

        vertcalTimelinePhaseTitleHoverBackgroundType,
        vertcalTimelinePhaseTitleHoverClassicColor,
        vertcalTimelinePhaseTitleHoverGradientColor,
        vertcalTimelinePhaseTitleHoverCustomGradientSwitcher,
        vertcalTimelinePhaseTitleHoverCustomGradientInputValue,
        /** End Phase Title Background */

        /** Start Content Box Border */
        vertcalTimelineContentBoxGlobalBorder,
        vertcalTimelineContentBoxGlobalBorderColorSwitcher,
        vertcalTimelineContentBoxGlobalBorderColor,
        vertcalTimelineContentBoxGlobalBorderHoverColor,
        vertcalTimelineContentBoxGlobalBorderUnits,
        vertcalTimelineContentBoxGlobalBorderDesktop,
        vertcalTimelineContentBoxGlobalBorderTablet,
        vertcalTimelineContentBoxGlobalBorderMobile,
        vertcalTimelineContentBoxGlobalBorderLink,
        /** End Content Box Border */

        /** Start Phase Title Border */
        vertcalTimelinePhaseTitleNormalBorder,
        vertcalTimelinePhaseTitleNormalBorderColorSwitcher,
        vertcalTimelinePhaseTitleNormalBorderColor,
        vertcalTimelinePhaseTitleNormalBorderHoverColor,
        vertcalTimelinePhaseTitleNormalBorderUnits,
        vertcalTimelinePhaseTitleNormalBorderDesktop,
        vertcalTimelinePhaseTitleNormalBorderTablet,
        vertcalTimelinePhaseTitleNormalBorderMobile,
        vertcalTimelinePhaseTitleNormalBorderLink,
        /** End Phase Title Border */

        /** Start Content Box Border Radius */
        vertcalTimelineContentBoxGlobalBorderRadiusUnits,
        vertcalTimelineContentBoxGlobalBorderRadiusDesktop,
        vertcalTimelineContentBoxGlobalBorderRadiusTablet,
        vertcalTimelineContentBoxGlobalBorderRadiusMobile,
        vertcalTimelineContentBoxGlobalBorderRadiusLink,
        /** End Content Box Border Radius */

        /** Start Phase Title Border Radius */
        vertcalTimelinePhaseTitleNormalBorderRadiusUnits,
        vertcalTimelinePhaseTitleNormalBorderRadiusDesktop,
        vertcalTimelinePhaseTitleNormalBorderRadiusTablet,
        vertcalTimelinePhaseTitleNormalBorderRadiusMobile,
        vertcalTimelinePhaseTitleNormalBorderRadiusLink,
        /** End Phase Title Border Radius */

        /** Start Content Box Padding */
        vertcalTimelineContentBoxPaddingUnits,
        vertcalTimelineContentBoxPaddingDesktop,
        vertcalTimelineContentBoxPaddingTablet,
        vertcalTimelineContentBoxPaddingMobile,
        vertcalTimelineContentBoxPaddingLink,
        /** End Content Box Padding */

        /** Start Content Box Margin */
        vertcalTimelineContentBoxMarginUnits,
        vertcalTimelineContentBoxMarginDesktop,
        vertcalTimelineContentBoxMarginTablet,
        vertcalTimelineContentBoxMarginMobile,
        vertcalTimelineContentBoxMarginLink,
        /** End Content Box Margin */

        /** Start Phase Title Padding */
        vertcalTimelinePhaseTitlePaddingUnits,
        vertcalTimelinePhaseTitlePaddingDesktop,
        vertcalTimelinePhaseTitlePaddingTablet,
        vertcalTimelinePhaseTitlePaddingMobile,
        vertcalTimelinePhaseTitlePaddingLink,
        /** End Phase Title Padding */

        /** Start Phase Title Margin */
        vertcalTimelinePhaseTitleMarginUnits,
        vertcalTimelinePhaseTitleMarginDesktop,
        vertcalTimelinePhaseTitleMarginTablet,
        vertcalTimelinePhaseTitleMarginMobile,
        vertcalTimelinePhaseTitleMarginLink,
        /** End Phase Title Margin */

        /** Start Phase Content Box Shadow */
        vertcalTimelineContentBoxBoxShadowSwitcher,
        vertcalTimelineContentBoxBoxShadowValues,
        vertcalTimelineContentBoxBoxShadowHoverValues,
        /** End Phase Content Box Shadow */

        /** Start Phase Title Box Shadow */
        vertcalTimelinePhaseTitleBoxShadowSwitcher,
        vertcalTimelinePhaseTitleBoxShadowValues,
        vertcalTimelinePhaseTitleBoxShadowHoverValues,
        /** End Phase Title Box Shadow */

        /** Start Phase Title Alignment */
        vertcalTimelinePhaseTitleAlignment,
        /** End Phase Title Alignment */

        /** Start Phase Title Typography */
        phaseTitleTypoSwitcher,
        phaseTitleTypoType,
        phaseTitleTypoOption,
        phaseTitleFontFamily,
        phaseTitleFontSize,
        phaseTitleFontSizeUnits,
        phaseTitleFontWeight,
        phaseTitleFontStyle,
        phaseTitleTextTransform,
        phaseTitleTextDecoration,
        phaseTitleLetterSpacing,
        phaseTitleLineHeight,
        phaseTitleLetterSpacingUnits,
        phaseTitleLineHeightUnits,
        /** End Phase Title Typography */

        /** Start Phase Title Colors */
        vertcalTimelinePhaseTitleColorSwitcher,
        vertcalTimelinePhaseTitleColor,
        vertcalTimelinePhaseTitleHoverColor,
        /** End Phase Title Colors */

        /** Start Section Lebel Typography */
        sectionLebelTypoSwitcher,
        sectionLebelTypoType,
        sectionLebelTypoOption,
        sectionLebelFontFamily,
        sectionLebelFontSize,
        sectionLebelFontSizeUnits,
        sectionLebelFontWeight,
        sectionLebelFontStyle,
        sectionLebelTextTransform,
        sectionLebelTextDecoration,
        sectionLebelLetterSpacing,
        sectionLebelLineHeight,
        sectionLebelLetterSpacingUnits,
        sectionLebelLineHeightUnits,
        /** End Section Lebel Typography */

        /** Start Section Lebel Colors */
        sectionLebelBtnTextColorSwitcher,
        sectionLebelBtnTextColor,
        sectionLebelBtnTextHoverColor,
        /** End Section Lebel Colors */

        /** Start Icon Padding */
        verticalTimelineItemIconPaddingUnits,
        verticalTimelineItemIconPaddingDesktop,
        verticalTimelineItemIconPaddingTablet,
        verticalTimelineItemIconPaddingMobile,
        verticalTimelineItemIconPaddingLink,
        /** End Icon Padding */

        /** Start Icon Background Color */
        verticalTimelineItemIconBgColorSwitcher,
        verticalTimelineItemIconNormalBackgroundType,
        verticalTimelineItemIconNormalClassicColor,
        verticalTimelineItemIconNormalGradientColor,
        verticalTimelineItemIconNormalCustomGradientSwitcher,
        verticalTimelineItemIconNormalCustomGradientInputValue,
        verticalTimelineItemIconHoverBackgroundType,
        verticalTimelineItemIconHoverClassicColor,
        verticalTimelineItemIconHoverGradientColor,
        verticalTimelineItemIconHoverCustomGradientSwitcher,
        verticalTimelineItemIconHoverCustomGradientInputValue,
        /** End Icon Background Color */

        /** Start Icon Colors */
        verticalTimelineItemIconColorSwitcher,
        verticalTimelineItemIconColor,
        verticalTimelineItemIconHoverColor,
        /** End Icon Colors */

        /** Start Icon Border */
        verticalTimelineItemIconBorderUnits,
        verticalTimelineItemIconBorderDesktop,
        verticalTimelineItemIconBorderTablet,
        verticalTimelineItemIconBorderMobile,
        verticalTimelineItemIconBorderLink,
        /** End Icon Border */

        /** Start Icon Border Radius */
        verticalTimelineItemIconBorderRadiusUnits,
        verticalTimelineItemIconBorderRadiusDesktop,
        verticalTimelineItemIconBorderRadiusTablet,
        verticalTimelineItemIconBorderRadiusMobile,
        verticalTimelineItemIconBorderRadiusLink,
        /** End Icon Border Radius */

        /** Start Icon Box Shadow */
        verticalTimelineItemIconBoxShadowSwitcher,
        verticalTimelineItemIconBoxShadowValues,
        verticalTimelineItemIconBoxShadowHoverValues,
        /** End Icon Box Shadow */

        /** Start Icon Border */
        verticalTimelineItemIconBorder,
        verticalTimelineItemIconBorderColorSwitcher,
        verticalTimelineItemIconBorderColor,
        verticalTimelineItemIconBorderHoverColor,
        /** End Icon Border */

        /** Start Icon Size */
        verticalTimelineIconSize,
        verticalTimelineIconSizeUnits,
        /** End Icon Size */

        /** Start Responsive Controls */
        verticalTimelineItemDesktopSwitcher,
        verticalTimelineItemTabletSwitcher,
        verticalTimelineItemMobileSwitcher,
        /** End Responsive Controls */

        /** Start Class & ID Setting */
        verticalTimelineItemGlobalZIndex,
        verticalTimelineItemCustomCSS,
        verticalTimelineItemWraperID,
        verticalTimelineItemWraperClass,
        /** End Class & ID Setting */
    } = attributes;
    const deviceType = useDeviceType();

    /** Start Content Box Padding */
    const vertcalTimelineContentBoxPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (vertcalTimelineContentBoxPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ vertcalTimelineContentBoxPaddingDesktop: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelineContentBoxPaddingTablet: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelineContentBoxPaddingMobile: { top: value, right: value, bottom: value, left: value } });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ vertcalTimelineContentBoxPaddingDesktop: { ...vertcalTimelineContentBoxPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelineContentBoxPaddingTablet: { ...vertcalTimelineContentBoxPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelineContentBoxPaddingMobile: { ...vertcalTimelineContentBoxPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const vertcalTimelineContentBoxPaddingLinkBtn = () => {
        setAttributes({
            vertcalTimelineContentBoxPaddingLink: !vertcalTimelineContentBoxPaddingLink
        });
    };

    const vertcalTimelineContentBoxPaddingUnitsHandler = (unit) => {
        setAttributes({
            vertcalTimelineContentBoxPaddingUnits: {
                ...vertcalTimelineContentBoxPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Content Box Padding */

    /** Start Content Box Margin */
    const vertcalTimelineContentBoxMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (vertcalTimelineContentBoxMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        vertcalTimelineContentBoxMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        vertcalTimelineContentBoxMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        vertcalTimelineContentBoxMarginMobile: {
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
                    setAttributes({ vertcalTimelineContentBoxMarginDesktop: { ...vertcalTimelineContentBoxMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelineContentBoxMarginTablet: { ...vertcalTimelineContentBoxMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelineContentBoxMarginMobile: { ...vertcalTimelineContentBoxMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const vertcalTimelineContentBoxMarginLinkBtn = () => {
        setAttributes({
            vertcalTimelineContentBoxMarginLink: !vertcalTimelineContentBoxMarginLink
        });
    };

    const vertcalTimelineContentBoxMarginUnitsHandler = (unit) => {
        setAttributes({
            vertcalTimelineContentBoxMarginUnits: {
                ...vertcalTimelineContentBoxMarginUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Content Box Margin */

    /** Start Phase Title Padding */
    const vertcalTimelinePhaseTitlePaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (vertcalTimelinePhaseTitlePaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ vertcalTimelinePhaseTitlePaddingDesktop: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelinePhaseTitlePaddingTablet: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelinePhaseTitlePaddingMobile: { top: value, right: value, bottom: value, left: value } });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ vertcalTimelinePhaseTitlePaddingDesktop: { ...vertcalTimelinePhaseTitlePaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelinePhaseTitlePaddingTablet: { ...vertcalTimelinePhaseTitlePaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelineContentBoxPaddingMobile: { ...vertcalTimelineContentBoxPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const vertcalTimelinePhaseTitlePaddingLinkBtn = () => {
        setAttributes({
            vertcalTimelinePhaseTitlePaddingLink: !vertcalTimelinePhaseTitlePaddingLink
        });
    };

    const vertcalTimelinePhaseTitlePaddingUnitsHandler = (unit) => {
        setAttributes({
            vertcalTimelinePhaseTitlePaddingUnits: {
                ...vertcalTimelinePhaseTitlePaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Phase Title Padding */

    /** Start Phase Title Margin */
    const vertcalTimelinePhaseTitleMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (vertcalTimelinePhaseTitleMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        vertcalTimelinePhaseTitleMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        vertcalTimelinePhaseTitleMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        vertcalTimelinePhaseTitleMarginMobile: {
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
                    setAttributes({ vertcalTimelinePhaseTitleMarginDesktop: { ...vertcalTimelinePhaseTitleMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelinePhaseTitleMarginTablet: { ...vertcalTimelinePhaseTitleMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelinePhaseTitleMarginMobile: { ...vertcalTimelinePhaseTitleMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const vertcalTimelinePhaseTitleMarginLinkBtn = () => {
        setAttributes({
            vertcalTimelinePhaseTitleMarginLink: !vertcalTimelinePhaseTitleMarginLink
        });
    };

    const vertcalTimelinePhaseTitleMarginUnitsHandler = (unit) => {
        setAttributes({
            vertcalTimelinePhaseTitleMarginUnits: {
                ...vertcalTimelinePhaseTitleMarginUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Phase Title Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (vertcalTimelineContentBoxGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        vertcalTimelineContentBoxGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        vertcalTimelineContentBoxGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        vertcalTimelineContentBoxGlobalBorderMobile: {
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
                    setAttributes({ vertcalTimelineContentBoxGlobalBorderDesktop: { ...vertcalTimelineContentBoxGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelineContentBoxGlobalBorderTablet: { ...vertcalTimelineContentBoxGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelineContentBoxGlobalBorderMobile: { ...vertcalTimelineContentBoxGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ vertcalTimelineContentBoxGlobalBorderLink: !vertcalTimelineContentBoxGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            vertcalTimelineContentBoxGlobalBorderUnits: {
                ...vertcalTimelineContentBoxGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (vertcalTimelineContentBoxGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        vertcalTimelineContentBoxGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        vertcalTimelineContentBoxGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        vertcalTimelineContentBoxGlobalBorderRadiusMobile: {
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
                    setAttributes({ vertcalTimelineContentBoxGlobalBorderRadiusDesktop: { ...vertcalTimelineContentBoxGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelineContentBoxGlobalBorderRadiusTablet: { ...vertcalTimelineContentBoxGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelineContentBoxGlobalBorderRadiusMobile: { ...vertcalTimelineContentBoxGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ vertcalTimelineContentBoxGlobalBorderRadiusLink: !vertcalTimelineContentBoxGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            vertcalTimelineContentBoxGlobalBorderRadiusUnits: {
                ...vertcalTimelineContentBoxGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */
    /** End Global Border Radius */
    /** End Border Radius */


    /** Start Phase Title border */
    const handlePhaseTitleBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (vertcalTimelinePhaseTitleNormalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        vertcalTimelinePhaseTitleNormalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        vertcalTimelinePhaseTitleNormalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        vertcalTimelinePhaseTitleNormalBorderMobile: {
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
                    setAttributes({ vertcalTimelinePhaseTitleNormalBorderDesktop: { ...vertcalTimelinePhaseTitleNormalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelinePhaseTitleNormalBorderTablet: { ...vertcalTimelinePhaseTitleNormalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelinePhaseTitleNormalBorderMobile: { ...vertcalTimelinePhaseTitleNormalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handlePhaseTitleBorderCombineBtn = () => {
        setAttributes({ vertcalTimelinePhaseTitleNormalBorderLink: !vertcalTimelinePhaseTitleNormalBorderLink });
    }

    const handlePhaseTitleBorderUnitsHandler = (unit) => {
        setAttributes({
            vertcalTimelinePhaseTitleNormalBorderUnits: {
                ...vertcalTimelinePhaseTitleNormalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Global border radius*/
    const handlePhaseTitleNormalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (vertcalTimelinePhaseTitleNormalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        vertcalTimelinePhaseTitleNormalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        vertcalTimelinePhaseTitleNormalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        vertcalTimelinePhaseTitleNormalBorderRadiusMobile: {
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
                    setAttributes({ vertcalTimelinePhaseTitleNormalBorderRadiusDesktop: { ...vertcalTimelinePhaseTitleNormalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelinePhaseTitleNormalBorderRadiusTablet: { ...vertcalTimelinePhaseTitleNormalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelinePhaseTitleNormalBorderRadiusMobile: { ...vertcalTimelinePhaseTitleNormalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handlePhaseTitleNormalBorderRadiusCombineBtn = () => {
        setAttributes({ vertcalTimelinePhaseTitleNormalBorderLink: !vertcalTimelinePhaseTitleNormalBorderLink });
    }

    const handlePhaseTitleNormalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            vertcalTimelinePhaseTitleNormalBorderUnits: {
                ...vertcalTimelineContentBoxGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /** Start Icon Padding */
    const verticalTimelineItemIconPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (verticalTimelineItemIconPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ verticalTimelineItemIconPaddingDesktop: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Tablet':
                    setAttributes({ verticalTimelineItemIconPaddingTablet: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Mobile':
                    setAttributes({ verticalTimelineItemIconPaddingMobile: { top: value, right: value, bottom: value, left: value } });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ verticalTimelineItemIconPaddingDesktop: { ...verticalTimelineItemIconPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ verticalTimelineItemIconPaddingTablet: { ...verticalTimelineItemIconPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ verticalTimelineItemIconPaddingMobile: { ...verticalTimelineItemIconPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const verticalTimelineItemIconPaddingLinkBtn = () => {
        setAttributes({
            verticalTimelineItemIconPaddingLink: !verticalTimelineItemIconPaddingLink
        });
    };

    const verticalTimelineItemIconPaddingUnitsHandler = (unit) => {
        setAttributes({
            verticalTimelineItemIconPaddingUnits: {
                ...verticalTimelineItemIconPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Icon Padding */

    /** Start Icon Border Controls */
    const verticalTimelineItemIconBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (verticalTimelineItemIconBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ verticalTimelineItemIconBorderDesktop: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Tablet':
                    setAttributes({ verticalTimelineItemIconBorderTablet: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Mobile':
                    setAttributes({ verticalTimelineItemIconBorderMobile: { top: value, right: value, bottom: value, left: value } });
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ verticalTimelineItemIconBorderDesktop: { ...verticalTimelineItemIconBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ verticalTimelineItemIconBorderTablet: { ...verticalTimelineItemIconBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ verticalTimelineItemIconBorderMobile: { ...verticalTimelineItemIconBorderMobile, [position]: value } });
                    break;
            }
        }
    };

    const verticalTimelineItemIconBorderLinkBtn = () => {
        setAttributes({ verticalTimelineItemIconBorderLink: !verticalTimelineItemIconBorderLink });
    };

    const verticalTimelineItemIconBorderUnitsHandler = (unit) => {
        setAttributes({
            verticalTimelineItemIconBorderUnits: {
                ...verticalTimelineItemIconBorderUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Icon Border Controls */

    /** Start Icon Border Radius Controls */
    const verticalTimelineItemIconBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (verticalTimelineItemIconBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ verticalTimelineItemIconBorderRadiusDesktop: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Tablet':
                    setAttributes({ verticalTimelineItemIconBorderRadiusTablet: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Mobile':
                    setAttributes({ verticalTimelineItemIconBorderRadiusMobile: { top: value, right: value, bottom: value, left: value } });
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ verticalTimelineItemIconBorderRadiusDesktop: { ...verticalTimelineItemIconBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet': setAttributes({ verticalTimelineItemIconBorderRadiusTablet: { ...verticalTimelineItemIconBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ verticalTimelineItemIconBorderRadiusMobile: { ...verticalTimelineItemIconBorderRadiusMobile, [position]: value } });
                    break;
            }
        }
    };

    const verticalTimelineItemIconBorderRadiusLinkBtn = () => {
        setAttributes({ verticalTimelineItemIconBorderRadiusLink: !verticalTimelineItemIconBorderRadiusLink });
    };

    const verticalTimelineItemIconBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            verticalTimelineItemIconBorderRadiusUnits: {
                ...verticalTimelineItemIconBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Icon Border Radius Controls */

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody
                title={__("General", "frontis-blocks")}
                initialOpen={true}
            >
                {inheritedShowSectionLabelSwitcher && (
                    <FB_InputControl
                        label={__("Section Label", "frontis-blocks")}
                        value={verticalTimelineItemSectionLabel}
                        onChangeValue={(value) => setAttributes({ verticalTimelineItemSectionLabel: value })}
                    />
                )}

                <ToggleControl
                    label={__("Show Phase Title", "frontis-blocks")}
                    checked={showPhaseTitleSwitcher}
                    onChange={(value) => setAttributes({ showPhaseTitleSwitcher: value })}
                />

                {showPhaseTitleSwitcher && (
                    <FB_InputControl
                        label={__("Phase Title", "frontis-blocks")}
                        value={verticalTimelineItemPhaseTitle}
                        onChangeValue={(value) => setAttributes({ verticalTimelineItemPhaseTitle: value })}
                    />
                )}

                <FBIconPicker
                    value={verticalTimelineItemIcon}
                    setIconHandler={(value) => setAttributes({ verticalTimelineItemIcon: value })}
                />


            </PanelBody>

        </>
    );

    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>
            <PanelBody
                title={__("Content Box", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={vertcalTimelineContentBoxPaddingUnitsHandler}
                    spacingUnits={vertcalTimelineContentBoxPaddingUnits}
                    spacingDesktop={vertcalTimelineContentBoxPaddingDesktop}
                    spacingTablet={vertcalTimelineContentBoxPaddingTablet}
                    spacingMobile={vertcalTimelineContentBoxPaddingMobile}
                    handleSpacingUnitHandler={vertcalTimelineContentBoxPaddingUnitsChange}
                    spacingCombineBtn={vertcalTimelineContentBoxPaddingLink}
                    spacingCombineBtnHandler={vertcalTimelineContentBoxPaddingLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={vertcalTimelineContentBoxMarginUnitsHandler}
                    spacingUnits={vertcalTimelineContentBoxMarginUnits}
                    spacingDesktop={vertcalTimelineContentBoxMarginDesktop}
                    spacingTablet={vertcalTimelineContentBoxMarginTablet}
                    spacingMobile={vertcalTimelineContentBoxMarginMobile}
                    handleSpacingUnitHandler={vertcalTimelineContentBoxMarginUnitsChange}
                    spacingCombineBtn={vertcalTimelineContentBoxMarginLink}
                    spacingCombineBtnHandler={vertcalTimelineContentBoxMarginLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={vertcalTimelineContentBoxGlobalBgColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ vertcalTimelineContentBoxGlobalBgColorSwitcher: value })}

                    normalBackgroundType={vertcalTimelineContentBoxGlobalNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ vertcalTimelineContentBoxGlobalNormalBackgroundType: value })}
                    normalClassicColor={vertcalTimelineContentBoxGlobalNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ vertcalTimelineContentBoxGlobalNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={vertcalTimelineContentBoxGlobalNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ vertcalTimelineContentBoxGlobalNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={vertcalTimelineContentBoxGlobalNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ vertcalTimelineContentBoxGlobalNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue: value })}

                    hoverBackgroundType={vertcalTimelineContentBoxGlobalHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ vertcalTimelineContentBoxGlobalHoverBackgroundType: value })}
                    hoverClassicColor={vertcalTimelineContentBoxGlobalHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ vertcalTimelineContentBoxGlobalHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={vertcalTimelineContentBoxGlobalHoverGradientColor}
                    setHoverGradientColor={(value) => setAttributes({ vertcalTimelineContentBoxGlobalHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={vertcalTimelineContentBoxGlobalHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ vertcalTimelineContentBoxGlobalHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={vertcalTimelineContentBoxGlobalBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ vertcalTimelineContentBoxGlobalBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={vertcalTimelineContentBoxGlobalBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ vertcalTimelineContentBoxGlobalBorderColorSwitcher: value })}
                />

                {vertcalTimelineContentBoxGlobalBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={vertcalTimelineContentBoxGlobalBorderColor}
                        setGlobalColor={(value) => setAttributes({ vertcalTimelineContentBoxGlobalBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {vertcalTimelineContentBoxGlobalBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={vertcalTimelineContentBoxGlobalBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ vertcalTimelineContentBoxGlobalBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                    spacingUnits={vertcalTimelineContentBoxGlobalBorderUnits}
                    spacingDesktop={vertcalTimelineContentBoxGlobalBorderDesktop}
                    spacingTablet={vertcalTimelineContentBoxGlobalBorderTablet}
                    spacingMobile={vertcalTimelineContentBoxGlobalBorderMobile}
                    handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                    spacingCombineBtn={vertcalTimelineContentBoxGlobalBorderLink}
                    spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                    spacingUnits={vertcalTimelineContentBoxGlobalBorderRadiusUnits}
                    spacingDesktop={vertcalTimelineContentBoxGlobalBorderRadiusDesktop}
                    spacingTablet={vertcalTimelineContentBoxGlobalBorderRadiusTablet}
                    spacingMobile={vertcalTimelineContentBoxGlobalBorderRadiusMobile}
                    handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                    spacingCombineBtn={vertcalTimelineContentBoxGlobalBorderRadiusLink}
                    spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={vertcalTimelineContentBoxBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ vertcalTimelineContentBoxBoxShadowSwitcher: value })}
                />

                {vertcalTimelineContentBoxBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ vertcalTimelineContentBoxBoxShadowValues: value })}
                        initialShadowValue={vertcalTimelineContentBoxBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ vertcalTimelineContentBoxBoxShadowCssValue: value })}
                    />
                )}

                {vertcalTimelineContentBoxBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ vertcalTimelineContentBoxBoxShadowHoverValues: value })}
                        initialShadowValue={vertcalTimelineContentBoxBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ vertcalTimelineContentBoxBoxShadowHoverCssValue: value })}
                    />
                )}

            </PanelBody>

            <PanelBody
                title={__("Phase Title", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={vertcalTimelinePhaseTitlePaddingUnitsHandler}
                    spacingUnits={vertcalTimelinePhaseTitlePaddingUnits}
                    spacingDesktop={vertcalTimelinePhaseTitlePaddingDesktop}
                    spacingTablet={vertcalTimelinePhaseTitlePaddingTablet}
                    spacingMobile={vertcalTimelinePhaseTitlePaddingMobile}
                    handleSpacingUnitHandler={vertcalTimelinePhaseTitlePaddingUnitsChange}
                    spacingCombineBtn={vertcalTimelinePhaseTitlePaddingLink}
                    spacingCombineBtnHandler={vertcalTimelinePhaseTitlePaddingLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={vertcalTimelinePhaseTitleMarginUnitsHandler}
                    spacingUnits={vertcalTimelinePhaseTitleMarginUnits}
                    spacingDesktop={vertcalTimelinePhaseTitleMarginDesktop}
                    spacingTablet={vertcalTimelinePhaseTitleMarginTablet}
                    spacingMobile={vertcalTimelinePhaseTitleMarginMobile}
                    handleSpacingUnitHandler={vertcalTimelinePhaseTitleMarginUnitsChange}
                    spacingCombineBtn={vertcalTimelinePhaseTitleMarginLink}
                    spacingCombineBtnHandler={vertcalTimelinePhaseTitleMarginLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_ResponsiveAlignmentControl
                    label={__("Text Align", "frontis-blocks")}
                    globalAlignment={vertcalTimelinePhaseTitleAlignment}
                    setGlobalAlignment={(value) => setAttributes({ vertcalTimelinePhaseTitleAlignment: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={phaseTitleTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ phaseTitleTypographyData: value })}
                    globalTypoType={phaseTitleTypoType}
                    onChangeGlobalTypoType={(value) => { setAttributes({ phaseTitleTypoType: value, phaseTitleTypoSwitcher: value === "default" ? { ...phaseTitleTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...phaseTitleTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, } }); }}
                    globalTypoOption={phaseTitleTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ phaseTitleTypoOption: value })}
                    fontFamily={phaseTitleFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ phaseTitleFontFamily: value, phaseTitleTypoSwitcher: { ...phaseTitleTypoSwitcher, fontFamily: value && false, } })}
                    fontSize={phaseTitleFontSize}
                    onChangeFontSize={(value) => setAttributes({ phaseTitleFontSize: value, phaseTitleTypoSwitcher: { ...phaseTitleTypoSwitcher, fontSize: value && false, } })}
                    fontSizeUnits={phaseTitleFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ phaseTitleFontSizeUnits: value })}
                    fontWeight={phaseTitleFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ phaseTitleFontWeight: value, phaseTitleTypoSwitcher: { ...phaseTitleTypoSwitcher, fontWeight: value && false, } })}
                    fontStyle={phaseTitleFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ phaseTitleFontStyle: value, phaseTitleTypoSwitcher: { ...phaseTitleTypoSwitcher, fontStyle: value && false, } })}
                    textTransform={phaseTitleTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ phaseTitleTextTransform: value, phaseTitleTypoSwitcher: { ...phaseTitleTypoSwitcher, textTransform: value && false, } })}
                    textDecoration={phaseTitleTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ phaseTitleTextDecoration: value, phaseTitleTypoSwitcher: { ...phaseTitleTypoSwitcher, textDecoration: value && false, } })}
                    letterSpacing={phaseTitleLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ phaseTitleLetterSpacing: value, phaseTitleTypoSwitcher: { ...phaseTitleTypoSwitcher, letterSpacing: value && false, } })}
                    letterSpacingUnits={phaseTitleLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ phaseTitleLetterSpacingUnits: value })}
                    lineHeight={phaseTitleLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ phaseTitleLineHeight: value, phaseTitleTypoSwitcher: { ...phaseTitleTypoSwitcher, lineHeight: value && false, } })}
                    lineHeightUnits={phaseTitleLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ phaseTitleLineHeightUnits: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Text Color", "frontis-blocks")}
                    globalSwitcher={vertcalTimelinePhaseTitleColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ vertcalTimelinePhaseTitleColorSwitcher: value })}
                />

                {vertcalTimelinePhaseTitleColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={vertcalTimelinePhaseTitleColor}
                        setGlobalColor={(value) => setAttributes({ vertcalTimelinePhaseTitleColor: value === undefined ? '' : value })}
                    />
                )}

                {vertcalTimelinePhaseTitleColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={vertcalTimelinePhaseTitleHoverColor}
                        setGlobalColor={(value) => setAttributes({ vertcalTimelinePhaseTitleHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={vertcalTimelinePhaseTitleNormalBgColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ vertcalTimelinePhaseTitleNormalBgColorSwitcher: value })}

                    normalBackgroundType={vertcalTimelinePhaseTitleNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ vertcalTimelinePhaseTitleNormalBackgroundType: value })}
                    normalClassicColor={vertcalTimelinePhaseTitleNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ vertcalTimelinePhaseTitleNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={vertcalTimelinePhaseTitleNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ vertcalTimelinePhaseTitleNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={vertcalTimelinePhaseTitleNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ vertcalTimelinePhaseTitleNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={vertcalTimelinePhaseTitleNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ vertcalTimelinePhaseTitleNormalCustomGradientInputValue: value })}

                    hoverBackgroundType={vertcalTimelinePhaseTitleHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ vertcalTimelinePhaseTitleHoverBackgroundType: value })}
                    hoverClassicColor={vertcalTimelinePhaseTitleHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ vertcalTimelinePhaseTitleHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={vertcalTimelinePhaseTitleHoverGradientColor}
                    setHoverGradientColor={(value) => setAttributes({ vertcalTimelinePhaseTitleHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={vertcalTimelinePhaseTitleHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ vertcalTimelinePhaseTitleHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={vertcalTimelinePhaseTitleHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ vertcalTimelinePhaseTitleHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}
                />

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={vertcalTimelinePhaseTitleNormalBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ vertcalTimelinePhaseTitleNormalBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={vertcalTimelinePhaseTitleNormalBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ vertcalTimelinePhaseTitleNormalBorderColorSwitcher: value })}
                />

                {vertcalTimelinePhaseTitleNormalBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={vertcalTimelinePhaseTitleNormalBorderColor}
                        setGlobalColor={(value) => setAttributes({ vertcalTimelinePhaseTitleNormalBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {vertcalTimelinePhaseTitleNormalBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={vertcalTimelinePhaseTitleNormalBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ vertcalTimelinePhaseTitleNormalBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePhaseTitleBorderUnitsHandler}
                    spacingUnits={vertcalTimelinePhaseTitleNormalBorderUnits}
                    spacingDesktop={vertcalTimelinePhaseTitleNormalBorderDesktop}
                    spacingTablet={vertcalTimelinePhaseTitleNormalBorderTablet}
                    spacingMobile={vertcalTimelinePhaseTitleNormalBorderMobile}
                    handleSpacingUnitHandler={handlePhaseTitleBorderUnitChange}
                    spacingCombineBtn={vertcalTimelinePhaseTitleNormalBorderLink}
                    spacingCombineBtnHandler={handlePhaseTitleBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePhaseTitleNormalBorderRadiusUnitsHandler}
                    spacingUnits={vertcalTimelinePhaseTitleNormalBorderRadiusUnits}
                    spacingDesktop={vertcalTimelinePhaseTitleNormalBorderRadiusDesktop}
                    spacingTablet={vertcalTimelinePhaseTitleNormalBorderRadiusTablet}
                    spacingMobile={vertcalTimelinePhaseTitleNormalBorderRadiusMobile}
                    handleSpacingUnitHandler={handlePhaseTitleNormalBorderRadiusUnitChange}
                    spacingCombineBtn={vertcalTimelinePhaseTitleNormalBorderRadiusLink}
                    spacingCombineBtnHandler={handlePhaseTitleNormalBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={vertcalTimelinePhaseTitleBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ vertcalTimelinePhaseTitleBoxShadowSwitcher: value })}
                />

                {vertcalTimelinePhaseTitleBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ vertcalTimelinePhaseTitleBoxShadowValues: value })}
                        initialShadowValue={vertcalTimelinePhaseTitleBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ vertcalTimelinePhaseTitleBoxShadowCssValue: value })}
                    />
                )}

                {vertcalTimelinePhaseTitleBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ vertcalTimelinePhaseTitleBoxShadowHoverValues: value })}
                        initialShadowValue={vertcalTimelinePhaseTitleBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ vertcalTimelinePhaseTitleBoxShadowHoverCssValue: value })}
                    />
                )}
            </PanelBody>

            {inheritedShowSectionLabelSwitcher && (
                <PanelBody
                    title={__("Section Label", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={sectionLebelTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ sectionLebelTypographyData: value })}
                        globalTypoType={sectionLebelTypoType}
                        onChangeGlobalTypoType={(value) => { setAttributes({ sectionLebelTypoType: value, sectionLebelTypoSwitcher: value === "default" ? { ...sectionLebelTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...sectionLebelTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, } }); }}
                        globalTypoOption={sectionLebelTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ sectionLebelTypoOption: value })}
                        fontFamily={sectionLebelFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ sectionLebelFontFamily: value, sectionLebelTypoSwitcher: { ...sectionLebelTypoSwitcher, fontFamily: value && false, } })}
                        fontSize={sectionLebelFontSize}
                        onChangeFontSize={(value) => setAttributes({ sectionLebelFontSize: value, sectionLebelTypoSwitcher: { ...sectionLebelTypoSwitcher, fontSize: value && false, } })}
                        fontSizeUnits={sectionLebelFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ sectionLebelFontSizeUnits: value })}
                        fontWeight={sectionLebelFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ sectionLebelFontWeight: value, sectionLebelTypoSwitcher: { ...sectionLebelTypoSwitcher, fontWeight: value && false, } })}
                        fontStyle={sectionLebelFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ sectionLebelFontStyle: value, sectionLebelTypoSwitcher: { ...sectionLebelTypoSwitcher, fontStyle: value && false, } })}
                        textTransform={sectionLebelTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ sectionLebelTextTransform: value, sectionLebelTypoSwitcher: { ...sectionLebelTypoSwitcher, textTransform: value && false, } })}
                        textDecoration={sectionLebelTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ sectionLebelTextDecoration: value, sectionLebelTypoSwitcher: { ...sectionLebelTypoSwitcher, textDecoration: value && false, } })}
                        letterSpacing={sectionLebelLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ sectionLebelLetterSpacing: value, sectionLebelTypoSwitcher: { ...sectionLebelTypoSwitcher, letterSpacing: value && false, } })}
                        letterSpacingUnits={sectionLebelLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ sectionLebelLetterSpacingUnits: value })}
                        lineHeight={sectionLebelLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ sectionLebelLineHeight: value, sectionLebelTypoSwitcher: { ...sectionLebelTypoSwitcher, lineHeight: value && false, } })}
                        lineHeightUnits={sectionLebelLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ sectionLebelLineHeightUnits: value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Text Color", "frontis-blocks")}
                        globalSwitcher={sectionLebelBtnTextColorSwitcher}
                        setGlobalSwitcher={(value) =>
                            setAttributes({ sectionLebelBtnTextColorSwitcher: value })
                        }
                    />


                    {sectionLebelBtnTextColorSwitcher === "normal" && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={sectionLebelBtnTextColor}
                            setGlobalColor={(value) => setAttributes({ sectionLebelBtnTextColor: value })}
                        />
                    )}

                    {sectionLebelBtnTextColorSwitcher === "hover" && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={sectionLebelBtnTextHoverColor}
                            setGlobalColor={(value) =>
                                setAttributes({ sectionLebelBtnTextHoverColor: value })
                            }
                        />
                    )}

                </PanelBody>
            )}

            <PanelBody
                title={__("Icon", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_Range
                    min={0}
                    max={100}
                    label={__("Size", "frontis-blocks")}
                    rangeValue={verticalTimelineIconSize}
                    onChangeHandler={(value) => setAttributes({ verticalTimelineIconSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ verticalTimelineIconSizeUnits: value })}
                    deviceType={deviceType}
                    units={verticalTimelineIconSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={verticalTimelineItemIconPaddingUnitsHandler}
                    spacingUnits={verticalTimelineItemIconPaddingUnits}
                    spacingDesktop={verticalTimelineItemIconPaddingDesktop}
                    spacingTablet={verticalTimelineItemIconPaddingTablet}
                    spacingMobile={verticalTimelineItemIconPaddingMobile}
                    handleSpacingUnitHandler={verticalTimelineItemIconPaddingUnitsChange}
                    spacingCombineBtn={verticalTimelineItemIconPaddingLink}
                    spacingCombineBtnHandler={verticalTimelineItemIconPaddingLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={verticalTimelineItemIconBgColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ verticalTimelineItemIconBgColorSwitcher: value })}

                    normalBackgroundType={verticalTimelineItemIconNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ verticalTimelineItemIconNormalBackgroundType: value })}
                    normalClassicColor={verticalTimelineItemIconNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ verticalTimelineItemIconNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={verticalTimelineItemIconNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ verticalTimelineItemIconNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={verticalTimelineItemIconNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ verticalTimelineItemIconNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={verticalTimelineItemIconNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ verticalTimelineItemIconNormalCustomGradientInputValue: value })}

                    hoverBackgroundType={verticalTimelineItemIconHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ verticalTimelineItemIconHoverBackgroundType: value })}
                    hoverClassicColor={verticalTimelineItemIconHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ verticalTimelineItemIconHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={verticalTimelineItemIconHoverGradientColor}
                    setHoverGradientColor={(value) => setAttributes({ verticalTimelineItemIconHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={verticalTimelineItemIconHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ verticalTimelineItemIconHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={verticalTimelineItemIconHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ verticalTimelineItemIconHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}
                />

                <FB_SwitcherControl
                    label={__("Icon color", "frontis-blocks")}
                    globalSwitcher={verticalTimelineItemIconColorSwitcher}
                    setGlobalSwitcher={(value) =>
                        setAttributes({ verticalTimelineItemIconColorSwitcher: value })
                    }
                />

                {verticalTimelineItemIconColorSwitcher === "normal" && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={verticalTimelineItemIconColor}
                        setGlobalColor={(value) => setAttributes({ verticalTimelineItemIconColor: value })}
                    />
                )}

                {verticalTimelineItemIconColorSwitcher === "hover" && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={verticalTimelineItemIconHoverColor}
                        setGlobalColor={(value) =>
                            setAttributes({ verticalTimelineItemIconHoverColor: value })
                        }
                    />
                )}

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={verticalTimelineItemIconBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ verticalTimelineItemIconBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    options={[
                        { label: __('Normal', 'frontis-blocks'), value: 'normal' },
                        { label: __('Hover', 'frontis-blocks'), value: 'hover' },
                    ]}
                    globalSwitcher={verticalTimelineItemIconBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ verticalTimelineItemIconBorderColorSwitcher: value })}
                />

                {verticalTimelineItemIconBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={verticalTimelineItemIconBorderColor}
                        setGlobalColor={(value) => setAttributes({ verticalTimelineItemIconBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {verticalTimelineItemIconBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={verticalTimelineItemIconBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ verticalTimelineItemIconBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={verticalTimelineItemIconBorderUnitsHandler}
                    spacingUnits={verticalTimelineItemIconBorderUnits}
                    spacingDesktop={verticalTimelineItemIconBorderDesktop}
                    spacingTablet={verticalTimelineItemIconBorderTablet}
                    spacingMobile={verticalTimelineItemIconBorderMobile}
                    handleSpacingUnitHandler={verticalTimelineItemIconBorderUnitsChange}
                    spacingCombineBtn={verticalTimelineItemIconBorderLink}
                    spacingCombineBtnHandler={verticalTimelineItemIconBorderLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={verticalTimelineItemIconBorderRadiusUnitsHandler}
                    spacingUnits={verticalTimelineItemIconBorderRadiusUnits}
                    spacingDesktop={verticalTimelineItemIconBorderRadiusDesktop}
                    spacingTablet={verticalTimelineItemIconBorderRadiusTablet}
                    spacingMobile={verticalTimelineItemIconBorderRadiusMobile}
                    handleSpacingUnitHandler={verticalTimelineItemIconBorderRadiusUnitsChange}
                    spacingCombineBtn={verticalTimelineItemIconBorderRadiusLink}
                    spacingCombineBtnHandler={verticalTimelineItemIconBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={verticalTimelineItemIconBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ verticalTimelineItemIconBoxShadowSwitcher: value })}
                />

                {verticalTimelineItemIconBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ verticalTimelineItemIconBoxShadowValues: value })}
                        initialShadowValue={verticalTimelineItemIconBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ verticalTimelineItemIconBoxShadowCssValue: value })}
                    />
                )}

                {verticalTimelineItemIconBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ verticalTimelineItemIconBoxShadowHoverValues: value })}
                        initialShadowValue={verticalTimelineItemIconBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ verticalTimelineItemIconBoxShadowHoverCssValue: value })}
                    />
                )}

            </PanelBody>
        </>
    );

    /**
     * Inspector Advanced Controls
     */
    const advancedControls = (
        <>
            <PanelBody
                title={__("Layout", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_Range
                    min={0}
                    max={10000000}
                    label={__("Z Index", "frontis-blocks")}
                    rangeValue={verticalTimelineItemGlobalZIndex}
                    onChangeHandler={(value) => setAttributes({ verticalTimelineItemGlobalZIndex: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />

                <FB_InputControl
                    label={__("CSS ID", "frontis-blocks")}
                    value={verticalTimelineItemWraperID}
                    onChangeValue={(value) => setAttributes({ verticalTimelineItemWraperID: value })}
                    helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={verticalTimelineItemWraperClass}
                    onChangeValue={(value) => setAttributes({ verticalTimelineItemWraperClass: value })}
                    helpText={__("Separate with spaces key.", "frontis-blocks")}
                />
            </PanelBody>

            <PanelBody
                title={__("Responsive Control", "frontis-blocks")}
                initialOpen={false}
                className="fb-setting-responsive-control-wrapper"
            >
                <ToggleControl
                    label={__("Hide on Desktop", "frontis-blocks")}
                    className="fb-setting-responsive-control"
                    checked={verticalTimelineItemDesktopSwitcher}
                    onChange={(value) => setAttributes({ verticalTimelineItemDesktopSwitcher: value })}
                />
                <ToggleControl
                    label={__("Hide on Tablet", "frontis-blocks")}
                    className="fb-setting-responsive-control"
                    checked={verticalTimelineItemTabletSwitcher}
                    onChange={(value) => setAttributes({ verticalTimelineItemTabletSwitcher: value })}
                />
                <ToggleControl
                    label={__("Hide on Mobile", "frontis-blocks")}
                    className="fb-setting-responsive-control"
                    checked={verticalTimelineItemMobileSwitcher}
                    onChange={(value) => setAttributes({ verticalTimelineItemMobileSwitcher: value })}
                />
            </PanelBody>

            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor
                    value={verticalTimelineItemCustomCSS}
                    onChangeValue={(value) => setAttributes({ verticalTimelineItemCustomCSS: value })}
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

export default Inspector;
