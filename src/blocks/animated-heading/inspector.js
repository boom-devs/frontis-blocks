import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo, memo } from '@wordpress/element';
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
    ToggleControl,
    TextControl,
    TextareaControl,
} from '@wordpress/components';

import {
    BORDER_STYLES,
    ANIMATION_TYPE,
    REVEAL_DIRECTION,
} from "@Constants/fbConstants";
import FB_BackgroundColorControl from '@Components/background-color-control';
import SortableItem from './sortableItem';
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_TypographyControl from '@Components/typography-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_InspectorControls from '@Components/InspectorControls';

import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        blockID,
        blockStyle,
        animationType,
        animatedHeadingAlignment,
        animatedHeadingMainTag,
        animatedHeadingGap,
        animatedHeadingGapUnits,
        animatedHeadingPrefix,
        animatedHeadingItems,
        animatedHeadingCursorSwitch,
        animatedHeadingCursor,
        animatedHeadingSuffix,

        animatedHeadingProgressBarWidth,
        animatedHeadingProgressBarWidthUnits,
        animatedHeadingProgressBarHeight,
        animatedHeadingProgressBarHeightUnits,

        animatedHeadingProgressBarBorderRadiusUnits,
        animatedHeadingProgressBarDesktopBorderRadius,
        animatedHeadingProgressBarTabletBorderRadius,
        animatedHeadingProgressBarMobileBorderRadius,
        animatedHeadingProgressBarBorderRadiusLink,

        animatedHeadingProgressBgColorType,
        animatedHeadingProgressBgHoverColorType,
        animatedHeadingProgressBgColorTypeSwitcher,
        animatedHeadingProgressBgColor,
        animatedHeadingProgressBgHoverColor,
        animatedHeadingProgressBgGradientColor,
        animatedHeadingProgressBgHoverGradientColor,
        animatedHeadingProgressBgCustomGradientColorSwitcher,
        animatedHeadingProgressBgCustomGradientColor,
        animatedHeadingProgressBgHoverCustomGradientColorSwitcher,
        animatedHeadingProgressBgHoverCustomGradientColor,

        animatedHeadingProgressBgFillColorType,
        animatedHeadingProgressBgFillHoverColorType,
        animatedHeadingProgressBgFillColorTypeSwitcher,
        animatedHeadingProgressBgFillColor,
        animatedHeadingProgressBgFillHoverColor,
        animatedHeadingProgressBgFillGradientColor,
        animatedHeadingProgressBgFillHoverGradientColor,
        animatedHeadingProgressBgFillCustomGradientColorSwitcher,
        animatedHeadingProgressBgFillCustomGradientColor,
        animatedHeadingProgressBgFillHoverCustomGradientColorSwitcher,
        animatedHeadingProgressBgFillHoverCustomGradientColor,


        // Normal Text Style
        animatedHeadingNormalTextGlobalTypographyData,
        animatedHeadingNormalTextGlobalTypoSwitcher,
        animatedHeadingNormalTextGlobalTypoType,
        animatedHeadingNormalTextGlobalTypoOption,
        animatedHeadingNormalTextFontFamily,
        animatedHeadingNormalTextFontSize,
        animatedHeadingNormalTextFontSizeUnits,
        animatedHeadingNormalTextFontWeight,
        animatedHeadingNormalTextFontStyle,
        animatedHeadingNormalTextTransform,
        animatedHeadingNormalTextDecoration,
        animatedHeadingNormalTextLetterSpacing,
        animatedHeadingNormalTextLetterSpacingUnits,
        animatedHeadingNormalTextLineHeight,
        animatedHeadingNormalTextLineHeightUnits,

        animatedHeadingNormalTextColorSwitcher,
        animatedHeadingNormalTextColor,
        animatedHeadingNormalTextHoverColor,
        animatedHeadingNormalTextBgColorSwitcher,
        animatedHeadingNormalTextBgColor,
        animatedHeadingNormalTextBgColorHover,

        // Animated Text Style
        animatedHeadingAnimationTextGlobalTypographyData,
        animatedHeadingAnimationTextGlobalTypoSwitcher,
        animatedHeadingAnimationTextGlobalTypoType,
        animatedHeadingAnimationTextGlobalTypoOption,
        animatedHeadingAnimationTextFontFamily,
        animatedHeadingAnimationTextFontSize,
        animatedHeadingAnimationTextFontSizeUnits,
        animatedHeadingAnimationTextFontWeight,
        animatedHeadingAnimationTextFontStyle,
        animatedHeadingAnimationTextTransform,
        animatedHeadingAnimationTextDecoration,
        animatedHeadingAnimationTextLetterSpacing,
        animatedHeadingAnimationTextLetterSpacingUnits,
        animatedHeadingAnimationTextLineHeight,
        animatedHeadingAnimationTextLineHeightUnits,

        animatedHeadingAnimationTextColorSwitcher,
        animatedHeadingAnimationTextColor,
        animatedHeadingAnimationTextHoverColor,
        animatedHeadingAnimationTextBgColorSwitcher,
        animatedHeadingAnimationTextBgColor,
        animatedHeadingAnimationTextBgColorHover,

        animatedHeadingAnimatedTextPaddingUnits,
        animatedHeadingAnimatedTextDesktopPadding,
        animatedHeadingAnimatedTextTabletPadding,
        animatedHeadingAnimatedTextMobilePadding,
        animatedHeadingAnimatedTextPaddingLink,

        animatedHeadingAnimatedTextMarginUnits,
        animatedHeadingAnimatedTextDesktopMargin,
        animatedHeadingAnimatedTextTabletMargin,
        animatedHeadingAnimatedTextMobileMargin,
        animatedHeadingAnimatedTextMarginLink,

        animatedHeadingAnimatedTextBorder,
        animatedHeadingAnimatedTextBorderColorSwitcher,
        animatedHeadingAnimatedTextBorderColor,
        animatedHeadingAnimatedTextBorderHoverColor,
        animatedHeadingAnimatedTextBorderUnits,
        animatedHeadingAnimatedTextDesktopBorder,
        animatedHeadingAnimatedTextTabletBorder,
        animatedHeadingAnimatedTextMobileBorder,
        animatedHeadingAnimatedTextBorderLink,
        animatedHeadingAnimatedTextBorderRadiusUnits,
        animatedHeadingAnimatedTextDesktopBorderRadius,
        animatedHeadingAnimatedTextTabletBorderRadius,
        animatedHeadingAnimatedTextMobileBorderRadius,
        animatedHeadingAnimatedTextBorderRadiusLink,

        //reaval animation
        animatedHeadingAnimationDuration,
        animatedHeadingRevealCharDelay,
        animatedHeadingRevealAppearDuration,
        animatedHeadingRevealHideDuration,
        animatedHeadingRevealVisibleHold,
        animatedHeadingRevealResetDelay,
        animatedHeadingRevealDirection,

        // Global Z-Index Attributes
        animatedHeadingGlobalZIndex,

        // Global Class & ID Attributes
        animatedHeadingGlobalWraperID,
        animatedHeadingGlobalWraperClass,
        animatedHeadingCustomCSS,

        // Global Padding Attributes
        animatedHeadingGlobalPaddingUnits,
        animatedHeadingGlobalDesktopPadding,
        animatedHeadingGlobalTabletPadding,
        animatedHeadingGlobalMobilePadding,
        animatedHeadingGlobalPaddingLink,

        // Global Margin Attributes
        animatedHeadingGlobalMarginUnits,
        animatedHeadingGlobalDesktopMargin,
        animatedHeadingGlobalTabletMargin,
        animatedHeadingGlobalMobileMargin,
        animatedHeadingGlobalMarginLink,

        // Global Background Color Attributes
        animatedHeadingGlobalBgColorSwitcher,
        animatedHeadingGlobalBgColor,
        animatedHeadingGlobalBgColorHover,

        // Global Border Attributes
        animatedHeadingGlobalBorder,
        animatedHeadingGlobalBorderColorSwitcher,
        animatedHeadingGlobalBorderColor,
        animatedHeadingGlobalBorderHoverColor,
        animatedHeadingGlobalBorderUnits,
        animatedHeadingGlobalDesktopBorder,
        animatedHeadingGlobalTabletBorder,
        animatedHeadingGlobalMobileBorder,
        animatedHeadingGlobalBorderLink,
        animatedHeadingGlobalBorderRadiusUnits,
        animatedHeadingGlobalDesktopBorderRadius,
        animatedHeadingGlobalTabletBorderRadius,
        animatedHeadingGlobalMobileBorderRadius,
        animatedHeadingGlobalBorderRadiusLink,

    } = attributes;

    const deviceType = useDeviceType();

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = animatedHeadingItems.findIndex(item => item.id === active.id);
            const newIndex = animatedHeadingItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(animatedHeadingItems, oldIndex, newIndex);
            setAttributes({ animatedHeadingItems: updatedItems });
        }
    };

    const handleAddItem = () => {
        const newItem = {
            id: `item-${animatedHeadingItems.length + 1}`,
            animatedHeadingTitle: 'Text ' + (animatedHeadingItems.length + 1),
        };

        setAttributes({ animatedHeadingItems: [...animatedHeadingItems, newItem] });
    };

    const handleChangeItem = (id, key, value) => {
        const updatedItems = animatedHeadingItems.map(item =>
            item.id === id ? { ...item, [key]: value } : item
        );
        setAttributes({ animatedHeadingItems: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems = animatedHeadingItems.filter(item => item.id !== id);
        setAttributes({ animatedHeadingItems: updatedItems });
    };

    const handleDuplicateItem = (id) => {
        const itemToDuplicate = animatedHeadingItems.find(item => item.id === id);
        if (itemToDuplicate) {
            const newItem = { ...itemToDuplicate, id: `item-${animatedHeadingItems.length + 1}` };
            setAttributes({ animatedHeadingItems: [...animatedHeadingItems, newItem] });
        }
    };

    /** Start AnimatedText Border */
    const animatedHeadingAnimatedTextBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (animatedHeadingAnimatedTextBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        animatedHeadingAnimatedTextDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        animatedHeadingAnimatedTextTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        animatedHeadingAnimatedTextMobileBorder: {
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
                    setAttributes({ animatedHeadingAnimatedTextDesktopBorder: { ...animatedHeadingAnimatedTextDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ animatedHeadingAnimatedTextTabletBorder: { ...animatedHeadingAnimatedTextTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ animatedHeadingAnimatedTextMobileBorder: { ...animatedHeadingAnimatedTextMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const animatedHeadingAnimatedTextBorderLinkBtn = () => {
        setAttributes({
            animatedHeadingAnimatedTextBorderLink: !animatedHeadingAnimatedTextBorderLink
        });
    };

    const animatedHeadingAnimatedTextBorderUnitsHandler = (unit) => {
        setAttributes({
            animatedHeadingAnimatedTextBorderUnits: {
                ...animatedHeadingAnimatedTextBorderUnits,
                [deviceType]: unit
            }
        });
    };
    /** End AnimatedText Border */

    /** Start AnimatedText Border Radius */
    const animatedHeadingProgressBarBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (animatedHeadingAnimatedTextBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        animatedHeadingProgressBarDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        animatedHeadingProgressBarTabletBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        animatedHeadingProgressBarMobileBorderRadius: {
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
                    setAttributes({ animatedHeadingProgressBarDesktopBorderRadius: { ...animatedHeadingProgressBarDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ animatedHeadingProgressBarTabletBorderRadius: { ...animatedHeadingProgressBarTabletBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ animatedHeadingProgressBarMobileBorderRadius: { ...animatedHeadingProgressBarMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const animatedHeadingProgressBarBorderRadiusLinkBtn = () => {
        setAttributes({
            animatedHeadingProgressBarBorderRadiusLink: !animatedHeadingProgressBarBorderRadiusLink
        });
    };

    const animatedHeadingProgressBarBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            animatedHeadingProgressBarBorderRadiusUnits: {
                ...animatedHeadingProgressBarBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Animated Text Border Radius */

    /** Start Animated progress bar Border Radius */
    const animatedHeadingAnimatedTextBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (animatedHeadingAnimatedTextBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        animatedHeadingAnimatedTextDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        animatedHeadingAnimatedTextTabletBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        animatedHeadingAnimatedTextMobileBorderRadius: {
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
                    setAttributes({ animatedHeadingAnimatedTextDesktopBorderRadius: { ...animatedHeadingAnimatedTextDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ animatedHeadingAnimatedTextTabletBorderRadius: { ...animatedHeadingAnimatedTextTabletBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ animatedHeadingAnimatedTextMobileBorderRadius: { ...animatedHeadingAnimatedTextMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const animatedHeadingAnimatedTextBorderRadiusLinkBtn = () => {
        setAttributes({
            animatedHeadingAnimatedTextBorderRadiusLink: !animatedHeadingAnimatedTextBorderRadiusLink
        });
    };

    const animatedHeadingAnimatedTextBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            animatedHeadingAnimatedTextBorderRadiusUnits: {
                ...animatedHeadingAnimatedTextBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Animated progress bar Border Radius */

    /** Start AnimatedText Padding */
    const animatedHeadingAnimatedTextPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (animatedHeadingAnimatedTextPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        animatedHeadingAnimatedTextDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        animatedHeadingAnimatedTextTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        animatedHeadingAnimatedTextMobilePadding: {
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
                    setAttributes({ animatedHeadingAnimatedTextDesktopPadding: { ...animatedHeadingAnimatedTextDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ animatedHeadingAnimatedTextTabletPadding: { ...animatedHeadingAnimatedTextTabletPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ animatedHeadingAnimatedTextMobilePadding: { ...animatedHeadingAnimatedTextMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const animatedHeadingAnimatedTextPaddingLinkBtn = () => {
        setAttributes({
            animatedHeadingAnimatedTextPaddingLink: !animatedHeadingAnimatedTextPaddingLink
        });
    };

    const animatedHeadingAnimatedTextPaddingUnitsHandler = (unit) => {
        setAttributes({
            animatedHeadingAnimatedTextPaddingUnits: {
                ...animatedHeadingAnimatedTextPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End AnimatedText Padding */

    /** Start AnimatedText Margin */
    const animatedHeadingAnimatedTextMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (animatedHeadingAnimatedTextMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        animatedHeadingAnimatedTextDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        animatedHeadingAnimatedTextTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        animatedHeadingAnimatedTextMobileMargin: {
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
                    setAttributes({ animatedHeadingAnimatedTextDesktopMargin: { ...animatedHeadingAnimatedTextDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ animatedHeadingAnimatedTextTabletMargin: { ...animatedHeadingAnimatedTextTabletMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ animatedHeadingAnimatedTextMobileMargin: { ...animatedHeadingAnimatedTextMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const animatedHeadingAnimatedTextMarginLinkBtn = () => {
        setAttributes({
            animatedHeadingAnimatedTextMarginLink: !animatedHeadingAnimatedTextMarginLink
        });
    };

    const animatedHeadingAnimatedTextMarginUnitsHandler = (unit) => {
        setAttributes({
            animatedHeadingAnimatedTextMarginUnits: {
                ...animatedHeadingAnimatedTextMarginUnits,
                [deviceType]: unit
            }
        });
    };
    /** End AnimatedText Margin */

    /** Start Global Padding */
    const animatedHeadingGlobalPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (animatedHeadingGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        animatedHeadingGlobalDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        animatedHeadingGlobalTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        animatedHeadingGlobalMobilePadding: {
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
                    setAttributes({ animatedHeadingGlobalDesktopPadding: { ...animatedHeadingGlobalDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ animatedHeadingGlobalTabletPadding: { ...animatedHeadingGlobalTabletPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ animatedHeadingGlobalMobilePadding: { ...animatedHeadingGlobalMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const animatedHeadingGlobalPaddingLinkBtn = () => {
        setAttributes({
            animatedHeadingGlobalPaddingLink: !animatedHeadingGlobalPaddingLink
        });
    };

    const animatedHeadingGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            animatedHeadingGlobalPaddingUnits: {
                ...animatedHeadingGlobalPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Global Padding */

    /** Start Global Margin */
    const animatedHeadingGlobalMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (animatedHeadingGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        animatedHeadingGlobalDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        animatedHeadingGlobalTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        animatedHeadingGlobalMobileMargin: {
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
                    setAttributes({ animatedHeadingGlobalDesktopMargin: { ...animatedHeadingGlobalDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ animatedHeadingGlobalTabletMargin: { ...animatedHeadingGlobalTabletMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ animatedHeadingGlobalMobileMargin: { ...animatedHeadingGlobalMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const animatedHeadingGlobalMarginLinkBtn = () => {
        setAttributes({
            animatedHeadingGlobalMarginLink: !animatedHeadingGlobalMarginLink
        });
    };

    const animatedHeadingGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            animatedHeadingGlobalMarginUnits: {
                ...animatedHeadingGlobalMarginUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Global Margin */

    /** Start Global Border */
    const animatedHeadingGlobalBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (animatedHeadingGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        animatedHeadingGlobalDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        animatedHeadingGlobalTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        animatedHeadingGlobalMobileBorder: {
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
                    setAttributes({ animatedHeadingGlobalDesktopBorder: { ...animatedHeadingGlobalDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ animatedHeadingGlobalTabletBorder: { ...animatedHeadingGlobalTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ animatedHeadingGlobalMobileBorder: { ...animatedHeadingGlobalMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const animatedHeadingGlobalBorderLinkBtn = () => {
        setAttributes({
            animatedHeadingGlobalBorderLink: !animatedHeadingGlobalBorderLink
        });
    };

    const animatedHeadingGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            animatedHeadingGlobalBorderUnits: {
                ...animatedHeadingGlobalBorderUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Global Border */

    /** Start Global Border Radius */
    const animatedHeadingGlobalBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (animatedHeadingGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        animatedHeadingGlobalDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        animatedHeadingGlobalTabletBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        animatedHeadingGlobalMobileBorderRadius: {
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
                    setAttributes({ animatedHeadingGlobalDesktopBorderRadius: { ...animatedHeadingGlobalDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ animatedHeadingGlobalTabletBorderRadius: { ...animatedHeadingGlobalTabletBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ animatedHeadingGlobalMobileBorderRadius: { ...animatedHeadingGlobalMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const animatedHeadingGlobalBorderRadiusLinkBtn = () => {
        setAttributes({
            animatedHeadingGlobalBorderRadiusLink: !animatedHeadingGlobalBorderRadiusLink
        });
    };

    const animatedHeadingGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            animatedHeadingGlobalBorderRadiusUnits: {
                ...animatedHeadingGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Global Border Radius */

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody title={__("General Info", "frontis-blocks")} initialOpen={true}>

                <SelectControl
                    label={__("Animation Type", "frontis-blocks")}
                    value={animationType}
                    options={ANIMATION_TYPE}
                    onChange={(value) => setAttributes({ animationType: value })}
                />

                <FB_ResponsiveAlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={animatedHeadingAlignment}
                    setGlobalAlignment={(value) => setAttributes({ animatedHeadingAlignment: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_HtmlTagControl
                    label={__("Html Tag", "frontis-blocks")}
                    globalHtmlTag={animatedHeadingMainTag}
                    setGlobalHtmlTag={(value) => setAttributes({ animatedHeadingMainTag: value })}
                />

                <TextControl
                    label={__("Prefix Text", "frontis-blocks")}
                    value={animatedHeadingPrefix}
                    onChange={(value) => setAttributes({ animatedHeadingPrefix: value })}
                    className="fb-animated-heading-prefix"
                    help={__("Keep empty to hide.", "frontis-blocks")}
                />

                <BaseControl
                    label={__("Text Items", "frontis-blocks")}
                >
                    <div className="fb-animated-heading-items-wrapper">
                        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                            <SortableContext items={animatedHeadingItems.map(item => item.id)}>
                                <ul className='dnd-items-wrapper'>
                                    {animatedHeadingItems.map((item, index) => (
                                        <SortableItem
                                            key={item.id}
                                            id={item.id}
                                            item={item}
                                            handleChangeItem={handleChangeItem}
                                            handleDeleteItem={handleDeleteItem}
                                            handleDuplicateItem={handleDuplicateItem}
                                            index={index}
                                        />
                                    ))}
                                </ul>
                            </SortableContext>
                        </DndContext>
                        <Button isPrimary onClick={handleAddItem}>
                            {__("Add Item", "frontis-blocks")}
                        </Button>
                    </div>
                </BaseControl>

                {animationType === "typing" && (
                    <>
                        <ToggleControl
                            label={__("Cursor Switch", "frontis-blocks")}
                            checked={animatedHeadingCursorSwitch}
                            onChange={(value) => setAttributes({ animatedHeadingCursorSwitch: value })}
                        />

                        {animatedHeadingCursorSwitch && (
                            <TextControl
                                label={__("Cursor", "frontis-blocks")}
                                value={animatedHeadingCursor}
                                onChange={(value) => setAttributes({ animatedHeadingCursor: value })}
                                className="fb-animated-heading-cursor"
                                help={__("Keep empty to hide.", "frontis-blocks")}
                            />
                        )}
                    </>
                )}

                <TextControl
                    label={__("Suffix Text", "frontis-blocks")}
                    value={animatedHeadingSuffix}
                    onChange={(value) => setAttributes({ animatedHeadingSuffix: value })}
                    className="fb-animated-heading-suffix"
                    help={__("Keep empty to hide.", "frontis-blocks")}
                />

                {(animationType === "typing" || animationType === "reveal" || animationType === "progress") && (
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Text Gap", "frontis-blocks")}
                        rangeValue={animatedHeadingGap}
                        onChangeHandler={(value) => setAttributes({ animatedHeadingGap: value })}
                        rangeUnitHandler={(value) => setAttributes({ animatedHeadingGapUnits: value })}
                        deviceType={deviceType}
                        units={animatedHeadingGapUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"8"}
                    />
                )}

                {animationType !== "reveal" && (
                    <RangeControl
                        label={__('Animation Duration(ms)', 'frontis-blocks')}
                        value={animatedHeadingAnimationDuration}
                        onChange={(value) => setAttributes({ animatedHeadingAnimationDuration: Number(value) })}
                        min={100}
                        max={10000}
                        step={100}
                    />
                )}

                {animationType === "reveal" && (
                    <>
                        <SelectControl
                            label={__('Reveal Direction', 'frontis-blocks')}
                            value={animatedHeadingRevealDirection}
                            options={REVEAL_DIRECTION}
                            onChange={(value) => setAttributes({ animatedHeadingRevealDirection: value })}
                        />

                        <RangeControl
                            label={__('Character Delay(ms)', 'frontis-blocks')}
                            value={animatedHeadingRevealCharDelay}
                            onChange={(value) => setAttributes({ animatedHeadingRevealCharDelay: Number(value) })}
                            min={50}
                            max={500}
                            step={10}
                        />

                        <RangeControl
                            label={__('Appear Duration(ms)', 'frontis-blocks')}
                            value={animatedHeadingRevealAppearDuration}
                            onChange={(value) => setAttributes({ animatedHeadingRevealAppearDuration: Number(value) })}
                            min={200}
                            max={2000}
                            step={50}
                        />

                        <RangeControl
                            label={__('Hide Duration(ms)', 'frontis-blocks')}
                            value={animatedHeadingRevealHideDuration}
                            onChange={(value) => setAttributes({ animatedHeadingRevealHideDuration: Number(value) })}
                            min={200}
                            max={2000}
                            step={50}
                        />

                        <RangeControl
                            label={__('Visible Hold Time(ms)', 'frontis-blocks')}
                            value={animatedHeadingRevealVisibleHold}
                            onChange={(value) => setAttributes({ animatedHeadingRevealVisibleHold: Number(value) })}
                            min={500}
                            max={5000}
                            step={100}
                        />

                        <RangeControl
                            label={__('Reset Delay(ms)', 'frontis-blocks')}
                            value={animatedHeadingRevealResetDelay}
                            onChange={(value) => setAttributes({ animatedHeadingRevealResetDelay: Number(value) })}
                            min={0}
                            max={1000}
                            step={50}
                        />
                    </>
                )}
            </PanelBody>
        </>
    );

    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>
            <PanelBody title={__("Normal Text Style", "frontis-blocks")} initialOpen={true}>

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={animatedHeadingNormalTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ animatedHeadingNormalTextGlobalTypographyData: value })}

                    globalTypoType={animatedHeadingNormalTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            animatedHeadingNormalTextGlobalTypoType: value,
                            animatedHeadingNormalTextGlobalTypoSwitcher: value === 'default' ? { ...animatedHeadingNormalTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...animatedHeadingNormalTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                        })
                    }}

                    globalTypoOption={animatedHeadingNormalTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ animatedHeadingNormalTextGlobalTypoOption: value })}

                    fontFamily={animatedHeadingNormalTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ animatedHeadingNormalTextFontFamily: value, animatedHeadingNormalTextGlobalTypoSwitcher: { ...animatedHeadingNormalTextGlobalTypoSwitcher, fontFamily: value && false } })}

                    fontSize={animatedHeadingNormalTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ animatedHeadingNormalTextFontSize: value, animatedHeadingNormalTextGlobalTypoSwitcher: { ...animatedHeadingNormalTextGlobalTypoSwitcher, fontSize: value && false } })}

                    fontSizeUnits={animatedHeadingNormalTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ animatedHeadingNormalTextFontSizeUnits: value })}

                    fontWeight={animatedHeadingNormalTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ animatedHeadingNormalTextFontWeight: value, animatedHeadingNormalTextGlobalTypoSwitcher: { ...animatedHeadingNormalTextGlobalTypoSwitcher, fontWeight: value && false } })}

                    fontStyle={animatedHeadingNormalTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ animatedHeadingNormalTextFontStyle: value, animatedHeadingNormalTextGlobalTypoSwitcher: { ...animatedHeadingNormalTextGlobalTypoSwitcher, fontStyle: value && false } })}

                    textTransform={animatedHeadingNormalTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ animatedHeadingNormalTextTransform: value, animatedHeadingNormalTextGlobalTypoSwitcher: { ...animatedHeadingNormalTextGlobalTypoSwitcher, textTransform: value && false } })}

                    textDecoration={animatedHeadingNormalTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ animatedHeadingNormalTextDecoration: value, animatedHeadingNormalTextGlobalTypoSwitcher: { ...animatedHeadingNormalTextGlobalTypoSwitcher, textDecoration: value && false } })}

                    letterSpacing={animatedHeadingNormalTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ animatedHeadingNormalTextLetterSpacing: value, animatedHeadingNormalTextGlobalTypoSwitcher: { ...animatedHeadingNormalTextGlobalTypoSwitcher, letterSpacing: value && false } })}

                    letterSpacingUnits={animatedHeadingNormalTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ animatedHeadingNormalTextLetterSpacingUnits: value })}

                    lineHeight={animatedHeadingNormalTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ animatedHeadingNormalTextLineHeight: value, animatedHeadingNormalTextGlobalTypoSwitcher: { ...animatedHeadingNormalTextGlobalTypoSwitcher, lineHeight: value && false } })}

                    lineHeightUnits={animatedHeadingNormalTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ animatedHeadingNormalTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Text Color", "frontis-blocks")}
                    globalSwitcher={animatedHeadingNormalTextColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ animatedHeadingNormalTextColorSwitcher: value })}
                />

                {animatedHeadingNormalTextColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={animatedHeadingNormalTextColor}
                        setGlobalColor={(value) => setAttributes({ animatedHeadingNormalTextColor: value === undefined ? '' : value })}
                    />
                )}

                {animatedHeadingNormalTextColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={animatedHeadingNormalTextHoverColor}
                        setGlobalColor={(value) => setAttributes({ animatedHeadingNormalTextHoverColor: value === undefined ? '' : value })}
                    />
                )}


                <FB_SwitcherControl
                    label={__("Background Color", "frontis-blocks")}
                    globalSwitcher={animatedHeadingNormalTextBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ animatedHeadingNormalTextBgColorSwitcher: value })}
                />

                {animatedHeadingNormalTextBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={animatedHeadingNormalTextBgColor}
                        setGlobalColor={(value) => setAttributes({ animatedHeadingNormalTextBgColor: value === undefined ? '' : value })}
                    />
                )}

                {animatedHeadingNormalTextBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={animatedHeadingNormalTextBgColorHover}
                        setGlobalColor={(value) => setAttributes({ animatedHeadingNormalTextBgColorHover: value })}
                    />
                )}

            </PanelBody>
            <PanelBody title={__("Animation Text Style", "frontis-blocks")} initialOpen={false}>

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={animatedHeadingAnimationTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ animatedHeadingAnimationTextGlobalTypographyData: value })}

                    globalTypoType={animatedHeadingAnimationTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            animatedHeadingAnimationTextGlobalTypoType: value,
                            animatedHeadingAnimationTextGlobalTypoSwitcher: value === 'default' ? { ...animatedHeadingAnimationTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...animatedHeadingAnimationTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                        })
                    }}

                    globalTypoOption={animatedHeadingAnimationTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ animatedHeadingAnimationTextGlobalTypoOption: value })}

                    fontFamily={animatedHeadingAnimationTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ animatedHeadingAnimationTextFontFamily: value, animatedHeadingAnimationTextGlobalTypoSwitcher: { ...animatedHeadingAnimationTextGlobalTypoSwitcher, fontFamily: value && false } })}

                    fontSize={animatedHeadingAnimationTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ animatedHeadingAnimationTextFontSize: value, animatedHeadingAnimationTextGlobalTypoSwitcher: { ...animatedHeadingAnimationTextGlobalTypoSwitcher, fontSize: value && false } })}

                    fontSizeUnits={animatedHeadingAnimationTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ animatedHeadingAnimationTextFontSizeUnits: value })}

                    fontWeight={animatedHeadingAnimationTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ animatedHeadingAnimationTextFontWeight: value, animatedHeadingAnimationTextGlobalTypoSwitcher: { ...animatedHeadingAnimationTextGlobalTypoSwitcher, fontWeight: value && false } })}

                    fontStyle={animatedHeadingAnimationTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ animatedHeadingAnimationTextFontStyle: value, animatedHeadingAnimationTextGlobalTypoSwitcher: { ...animatedHeadingAnimationTextGlobalTypoSwitcher, fontStyle: value && false } })}

                    textTransform={animatedHeadingAnimationTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ animatedHeadingAnimationTextTransform: value, animatedHeadingAnimationTextGlobalTypoSwitcher: { ...animatedHeadingAnimationTextGlobalTypoSwitcher, textTransform: value && false } })}

                    textDecoration={animatedHeadingAnimationTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ animatedHeadingAnimationTextDecoration: value, animatedHeadingAnimationTextGlobalTypoSwitcher: { ...animatedHeadingAnimationTextGlobalTypoSwitcher, textDecoration: value && false } })}

                    letterSpacing={animatedHeadingAnimationTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ animatedHeadingAnimationTextLetterSpacing: value, animatedHeadingAnimationTextGlobalTypoSwitcher: { ...animatedHeadingAnimationTextGlobalTypoSwitcher, letterSpacing: value && false } })}

                    letterSpacingUnits={animatedHeadingAnimationTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ animatedHeadingAnimationTextLetterSpacingUnits: value })}

                    lineHeight={animatedHeadingAnimationTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ animatedHeadingAnimationTextLineHeight: value, animatedHeadingAnimationTextGlobalTypoSwitcher: { ...animatedHeadingAnimationTextGlobalTypoSwitcher, lineHeight: value && false } })}

                    lineHeightUnits={animatedHeadingAnimationTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ animatedHeadingAnimationTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Text Color", "frontis-blocks")}
                    globalSwitcher={animatedHeadingAnimationTextColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ animatedHeadingAnimationTextColorSwitcher: value })}
                />

                {animatedHeadingAnimationTextColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={animatedHeadingAnimationTextColor}
                        setGlobalColor={(value) => setAttributes({ animatedHeadingAnimationTextColor: value === undefined ? '' : value })}
                    />
                )}

                {animatedHeadingAnimationTextColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={animatedHeadingAnimationTextHoverColor}
                        setGlobalColor={(value) => setAttributes({ animatedHeadingAnimationTextHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_SwitcherControl
                    label={__("Background Color", "frontis-blocks")}
                    globalSwitcher={animatedHeadingAnimationTextBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ animatedHeadingAnimationTextBgColorSwitcher: value })}
                />

                {animatedHeadingAnimationTextBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={animatedHeadingAnimationTextBgColor}
                        setGlobalColor={(value) => setAttributes({ animatedHeadingAnimationTextBgColor: value === undefined ? '' : value })}
                    />
                )}

                {animatedHeadingAnimationTextBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={animatedHeadingAnimationTextBgColorHover}
                        setGlobalColor={(value) => setAttributes({ animatedHeadingAnimationTextBgColorHover: value })}
                    />
                )}

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={animatedHeadingAnimatedTextBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ animatedHeadingAnimatedTextBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={animatedHeadingAnimatedTextBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ animatedHeadingAnimatedTextBorderColorSwitcher: value })}
                />

                {animatedHeadingAnimatedTextBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={animatedHeadingAnimatedTextBorderColor}
                        setGlobalColor={(value) => setAttributes({ animatedHeadingAnimatedTextBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {animatedHeadingAnimatedTextBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={animatedHeadingAnimatedTextBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ animatedHeadingAnimatedTextBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={animatedHeadingAnimatedTextBorderUnitsHandler}
                    spacingUnits={animatedHeadingAnimatedTextBorderUnits}
                    spacingDesktop={animatedHeadingAnimatedTextDesktopBorder}
                    spacingTablet={animatedHeadingAnimatedTextTabletBorder}
                    spacingMobile={animatedHeadingAnimatedTextMobileBorder}
                    handleSpacingUnitHandler={animatedHeadingAnimatedTextBorderUnitsChange}
                    spacingCombineBtn={animatedHeadingAnimatedTextBorderLink}
                    spacingCombineBtnHandler={animatedHeadingAnimatedTextBorderLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={animatedHeadingAnimatedTextBorderRadiusUnitsHandler}
                    spacingUnits={animatedHeadingAnimatedTextBorderRadiusUnits}
                    spacingDesktop={animatedHeadingAnimatedTextDesktopBorderRadius}
                    spacingTablet={animatedHeadingAnimatedTextTabletBorderRadius}
                    spacingMobile={animatedHeadingAnimatedTextMobileBorderRadius}
                    handleSpacingUnitHandler={animatedHeadingAnimatedTextBorderRadiusUnitsChange}
                    spacingCombineBtn={animatedHeadingAnimatedTextBorderRadiusLink}
                    spacingCombineBtnHandler={animatedHeadingAnimatedTextBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={animatedHeadingAnimatedTextPaddingUnitsHandler}
                    spacingUnits={animatedHeadingAnimatedTextPaddingUnits}
                    spacingDesktop={animatedHeadingAnimatedTextDesktopPadding}
                    spacingTablet={animatedHeadingAnimatedTextTabletPadding}
                    spacingMobile={animatedHeadingAnimatedTextMobilePadding}
                    handleSpacingUnitHandler={animatedHeadingAnimatedTextPaddingUnitsChange}
                    spacingCombineBtn={animatedHeadingAnimatedTextPaddingLink}
                    spacingCombineBtnHandler={animatedHeadingAnimatedTextPaddingLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={animatedHeadingAnimatedTextMarginUnitsHandler}
                    spacingUnits={animatedHeadingAnimatedTextMarginUnits}
                    spacingDesktop={animatedHeadingAnimatedTextDesktopMargin}
                    spacingTablet={animatedHeadingAnimatedTextTabletMargin}
                    spacingMobile={animatedHeadingAnimatedTextMobileMargin}
                    handleSpacingUnitHandler={animatedHeadingAnimatedTextMarginUnitsChange}
                    spacingCombineBtn={animatedHeadingAnimatedTextMarginLink}
                    spacingCombineBtnHandler={animatedHeadingAnimatedTextMarginLinkBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            {animationType === "progress" && (
                <PanelBody title={__("Progress Bar", "frontis-blocks")} initialOpen={false}>
                    <>
                        <FB_Range
                            label={__("Width", "frontis-blocks")}
                            rangeValue={animatedHeadingProgressBarWidth}
                            onChangeHandler={(value) => setAttributes({ animatedHeadingProgressBarWidth: value })}
                            rangeUnitHandler={(value) => setAttributes({ animatedHeadingProgressBarWidthUnits: value })}
                            deviceType={deviceType}
                            units={animatedHeadingProgressBarWidthUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={"2"}
                        />

                        <FB_Range
                            label={__("Height", "frontis-blocks")}
                            rangeValue={animatedHeadingProgressBarHeight}
                            onChangeHandler={(value) => setAttributes({ animatedHeadingProgressBarHeight: value })}
                            rangeUnitHandler={(value) => setAttributes({ animatedHeadingProgressBarHeightUnits: value })}
                            deviceType={deviceType}
                            units={animatedHeadingProgressBarHeightUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={"2"}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={animatedHeadingProgressBarBorderRadiusUnitsHandler}
                            spacingUnits={animatedHeadingProgressBarBorderRadiusUnits}
                            spacingDesktop={animatedHeadingProgressBarDesktopBorderRadius}
                            spacingTablet={animatedHeadingProgressBarTabletBorderRadius}
                            spacingMobile={animatedHeadingProgressBarMobileBorderRadius}
                            handleSpacingUnitHandler={animatedHeadingProgressBarBorderRadiusUnitsChange}
                            spacingCombineBtn={animatedHeadingProgressBarBorderRadiusLink}
                            spacingCombineBtnHandler={animatedHeadingProgressBarBorderRadiusLinkBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_BackgroundColorControl
                            label={__("Progress Track Color", "frontis-blocks")}
                            bgColorSwitcher={animatedHeadingProgressBgColorTypeSwitcher}
                            setBgColorSwitcher={(value) => setAttributes({ animatedHeadingProgressBgColorTypeSwitcher: value })}

                            normalLabel={__("Background Color Type", "frontis-blocks")}
                            normalBackgroundType={animatedHeadingProgressBgColorType}
                            setNormalBackgroundType={(value) => setAttributes({ animatedHeadingProgressBgColorType: value })}
                            normalClassicColor={animatedHeadingProgressBgColor}
                            setNormalClassicColor={(value) => setAttributes({ animatedHeadingProgressBgColor: value === undefined ? '' : value })}
                            normalGradientColor={animatedHeadingProgressBgGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ animatedHeadingProgressBgGradientColor: value === undefined ? null : value })}
                            normalCustomGradientSwitcher={animatedHeadingProgressBgCustomGradientColorSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ animatedHeadingProgressBgCustomGradientColorSwitcher: value })}
                            normalCustomGradientInputValue={animatedHeadingProgressBgCustomGradientColor}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ animatedHeadingProgressBgCustomGradientColor: value === undefined ? null : value })}

                            hoverLabel={__("Background Color Type", "frontis-blocks")}
                            hoverBackgroundType={animatedHeadingProgressBgHoverColorType}
                            setHoverBackgroundType={(value) => setAttributes({ animatedHeadingProgressBgHoverColorType: value })}
                            hoverClassicColor={animatedHeadingProgressBgHoverColor}
                            setHoverClassicColor={(value) => setAttributes({ animatedHeadingProgressBgHoverColor: value === undefined ? '' : value })}
                            hoverGradientColor={animatedHeadingProgressBgHoverGradientColor}
                            setHoverGradientColor={(value) => setAttributes({ animatedHeadingProgressBgHoverGradientColor: value === undefined ? null : value })}
                            hoverCustomGradientSwitcher={animatedHeadingProgressBgHoverCustomGradientColorSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ animatedHeadingProgressBgHoverCustomGradientColorSwitcher: value })}
                            hoverCustomGradientInputValue={animatedHeadingProgressBgHoverCustomGradientColor}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ animatedHeadingProgressBgHoverCustomGradientColor: value === undefined ? null : value })}

                            isBackgroundImage={false}
                        />

                        <FB_BackgroundColorControl
                            label={__("Progress Fill Color", "frontis-blocks")}
                            bgColorSwitcher={animatedHeadingProgressBgFillColorTypeSwitcher}
                            setBgColorSwitcher={(value) => setAttributes({ animatedHeadingProgressBgFillColorTypeSwitcher: value })}

                            normalLabel={__("Background Color Type", "frontis-blocks")}
                            normalBackgroundType={animatedHeadingProgressBgFillColorType}
                            setNormalBackgroundType={(value) => setAttributes({ animatedHeadingProgressBgFillColorType: value })}
                            normalClassicColor={animatedHeadingProgressBgFillColor}
                            setNormalClassicColor={(value) => setAttributes({ animatedHeadingProgressBgFillColor: value === undefined ? '' : value })}
                            normalGradientColor={animatedHeadingProgressBgFillGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ animatedHeadingProgressBgFillGradientColor: value === undefined ? null : value })}
                            normalCustomGradientSwitcher={animatedHeadingProgressBgFillCustomGradientColorSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ animatedHeadingProgressBgFillCustomGradientColorSwitcher: value })}
                            normalCustomGradientInputValue={animatedHeadingProgressBgFillCustomGradientColor}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ animatedHeadingProgressBgFillCustomGradientColor: value === undefined ? null : value })}

                            hoverLabel={__("Background Color Type", "frontis-blocks")}
                            hoverBackgroundType={animatedHeadingProgressBgFillHoverColorType}
                            setHoverBackgroundType={(value) => setAttributes({ animatedHeadingProgressBgFillHoverColorType: value })}
                            hoverClassicColor={animatedHeadingProgressBgFillHoverColor}
                            setHoverClassicColor={(value) => setAttributes({ animatedHeadingProgressBgFillHoverColor: value === undefined ? '' : value })}
                            hoverGradientColor={animatedHeadingProgressBgFillHoverGradientColor}
                            setHoverGradientColor={(value) => setAttributes({ animatedHeadingProgressBgFillHoverGradientColor: value === undefined ? null : value })}
                            hoverCustomGradientSwitcher={animatedHeadingProgressBgFillHoverCustomGradientColorSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ animatedHeadingProgressBgFillHoverCustomGradientColorSwitcher: value })}
                            hoverCustomGradientInputValue={animatedHeadingProgressBgFillHoverCustomGradientColor}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ animatedHeadingProgressBgFillHoverCustomGradientColor: value === undefined ? null : value })}

                            isBackgroundImage={false}
                        />
                    </>
                </PanelBody>
            )}
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
                            rangeValue={animatedHeadingGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ animatedHeadingGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={animatedHeadingGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ animatedHeadingGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={animatedHeadingGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ animatedHeadingGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />

                    </PanelBody>

                    <PanelBody
                        title={__("Background Color", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_SwitcherControl
                            label={__("Background Color", "frontis-blocks")}
                            globalSwitcher={animatedHeadingGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ animatedHeadingGlobalBgColorSwitcher: value })}
                        />

                        {animatedHeadingGlobalBgColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={animatedHeadingGlobalBgColor}
                                setGlobalColor={(value) => setAttributes({ animatedHeadingGlobalBgColor: value === undefined ? '' : value })}
                            />
                        )}

                        {animatedHeadingGlobalBgColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={animatedHeadingGlobalBgColorHover}
                                setGlobalColor={(value) => setAttributes({ animatedHeadingGlobalBgColorHover: value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody title={__("Border & Border Radius", "frontis-blocks")} initialOpen={false}>
                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={animatedHeadingGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ animatedHeadingGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={animatedHeadingGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ animatedHeadingGlobalBorderColorSwitcher: value })}
                        />

                        {animatedHeadingGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={animatedHeadingGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ animatedHeadingGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {animatedHeadingGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={animatedHeadingGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ animatedHeadingGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={animatedHeadingGlobalBorderUnitsHandler}
                            spacingUnits={animatedHeadingGlobalBorderUnits}
                            spacingDesktop={animatedHeadingGlobalDesktopBorder}
                            spacingTablet={animatedHeadingGlobalTabletBorder}
                            spacingMobile={animatedHeadingGlobalMobileBorder}
                            handleSpacingUnitHandler={animatedHeadingGlobalBorderUnitsChange}
                            spacingCombineBtn={animatedHeadingGlobalBorderLink}
                            spacingCombineBtnHandler={animatedHeadingGlobalBorderLinkBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={animatedHeadingGlobalBorderRadiusUnitsHandler}
                            spacingUnits={animatedHeadingGlobalBorderRadiusUnits}
                            spacingDesktop={animatedHeadingGlobalDesktopBorderRadius}
                            spacingTablet={animatedHeadingGlobalTabletBorderRadius}
                            spacingMobile={animatedHeadingGlobalMobileBorderRadius}
                            handleSpacingUnitHandler={animatedHeadingGlobalBorderRadiusUnitsChange}
                            spacingCombineBtn={animatedHeadingGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={animatedHeadingGlobalBorderRadiusLinkBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>
                    <PanelBody title={__("Padding & Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={animatedHeadingGlobalPaddingUnitsHandler}
                            spacingUnits={animatedHeadingGlobalPaddingUnits}
                            spacingDesktop={animatedHeadingGlobalDesktopPadding}
                            spacingTablet={animatedHeadingGlobalTabletPadding}
                            spacingMobile={animatedHeadingGlobalMobilePadding}
                            handleSpacingUnitHandler={animatedHeadingGlobalPaddingUnitsChange}
                            spacingCombineBtn={animatedHeadingGlobalPaddingLink}
                            spacingCombineBtnHandler={animatedHeadingGlobalPaddingLinkBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={animatedHeadingGlobalMarginUnitsHandler}
                            spacingUnits={animatedHeadingGlobalMarginUnits}
                            spacingDesktop={animatedHeadingGlobalDesktopMargin}
                            spacingTablet={animatedHeadingGlobalTabletMargin}
                            spacingMobile={animatedHeadingGlobalMobileMargin}
                            handleSpacingUnitHandler={animatedHeadingGlobalMarginUnitsChange}
                            spacingCombineBtn={animatedHeadingGlobalMarginLink}
                            spacingCombineBtnHandler={animatedHeadingGlobalMarginLinkBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={animatedHeadingCustomCSS}
                            onChangeValue={(value) => setAttributes({ animatedHeadingCustomCSS: value })}
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