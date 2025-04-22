import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
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
    NORMAL_HOVER,
    UNIT_TYPES,
    ICON_ALIGN,
    TEXT_ALIGN,
    BORDER_STYLES,
	PRESETS,
	OVERFLOW_OP,
    ANIMATION_TYPE,
} from "./constants/constants";
import SortableItem from './sortableItem';
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_TypographyControl from '@Components/typography-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockId,
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
	
    const deviceType= useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-animated-heading-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex =animatedHeadingItems.findIndex(item => item.id === active.id);
            const newIndex =animatedHeadingItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(typingTextItems, oldIndex, newIndex);
            setAttributes({animatedHeadingItems: updatedItems });
        }
    };

	const handleAddItem = () => {
		const newItem = {
			id: `item-${typingTextItems.length + 1}`,
			animatedHeadingTitle: 'Text ' + (typingTextItems.length + 1),
		};
	
		setAttributes({animatedHeadingItems: [...typingTextItems, newItem] });
	};

    const handleChangeItem = (id, key, value) => {
        const updatedItems =animatedHeadingItems.map(item => 
            item.id === id ? { ...item, [key]: value } : item
        );
        setAttributes({animatedHeadingItems: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems =animatedHeadingItems.filter(item => item.id !== id);
        setAttributes({animatedHeadingItems: updatedItems });
    };

    const handleDuplicateItem = (id) => {
        const itemToDuplicate =animatedHeadingItems.find(item => item.id === id);
        if (itemToDuplicate) {
            const newItem = { ...itemToDuplicate, id: `item-${typingTextItems.length + 1}` };
            setAttributes({animatedHeadingItems: [...typingTextItems, newItem] });
        }
    };

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

    /** Default padding for Typing Text */
    const animatedHeadingGlobalDesktopPaddingWidth = `${animatedHeadingGlobalDesktopPadding.top}${animatedHeadingGlobalPaddingUnits.Desktop} ${animatedHeadingGlobalDesktopPadding.right}${animatedHeadingGlobalPaddingUnits.Desktop} ${animatedHeadingGlobalDesktopPadding.bottom}${animatedHeadingGlobalPaddingUnits.Desktop} ${animatedHeadingGlobalDesktopPadding.left}${animatedHeadingGlobalPaddingUnits.Desktop}`;
    const animatedHeadingGlobalTabletPaddingWidth = `${animatedHeadingGlobalTabletPadding.top}${animatedHeadingGlobalPaddingUnits.Tablet} ${animatedHeadingGlobalTabletPadding.right}${animatedHeadingGlobalPaddingUnits.Tablet} ${animatedHeadingGlobalTabletPadding.bottom}${animatedHeadingGlobalPaddingUnits.Tablet} ${animatedHeadingGlobalTabletPadding.left}${animatedHeadingGlobalPaddingUnits.Tablet}`;
    const animatedHeadingGlobalMobilePaddingWidth = `${animatedHeadingGlobalMobilePadding.top}${animatedHeadingGlobalPaddingUnits.Mobile} ${animatedHeadingGlobalMobilePadding.right}${animatedHeadingGlobalPaddingUnits.Mobile} ${animatedHeadingGlobalMobilePadding.bottom}${animatedHeadingGlobalPaddingUnits.Mobile} ${animatedHeadingGlobalMobilePadding.left}${animatedHeadingGlobalPaddingUnits.Mobile}`;
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

    /** Default margin for Global */
    const animatedHeadingGlobalDesktopMarginWidth = `${animatedHeadingGlobalDesktopMargin.top}${animatedHeadingGlobalMarginUnits.Desktop} ${animatedHeadingGlobalDesktopMargin.right}${animatedHeadingGlobalMarginUnits.Desktop} ${animatedHeadingGlobalDesktopMargin.bottom}${animatedHeadingGlobalMarginUnits.Desktop} ${animatedHeadingGlobalDesktopMargin.left}${animatedHeadingGlobalMarginUnits.Desktop}`;
    const animatedHeadingGlobalTabletMarginWidth = `${animatedHeadingGlobalTabletMargin.top}${animatedHeadingGlobalMarginUnits.Tablet} ${animatedHeadingGlobalTabletMargin.right}${animatedHeadingGlobalMarginUnits.Tablet} ${animatedHeadingGlobalTabletMargin.bottom}${animatedHeadingGlobalMarginUnits.Tablet} ${animatedHeadingGlobalTabletMargin.left}${animatedHeadingGlobalMarginUnits.Tablet}`;
    const animatedHeadingGlobalMobileMarginWidth = `${animatedHeadingGlobalMobileMargin.top}${animatedHeadingGlobalMarginUnits.Mobile} ${animatedHeadingGlobalMobileMargin.right}${animatedHeadingGlobalMarginUnits.Mobile} ${animatedHeadingGlobalMobileMargin.bottom}${animatedHeadingGlobalMarginUnits.Mobile} ${animatedHeadingGlobalMobileMargin.left}${animatedHeadingGlobalMarginUnits.Mobile}`;
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

    /** Default border for Global */
    const animatedHeadingGlobalDesktopBorderWidth = `${animatedHeadingGlobalDesktopBorder.top}${animatedHeadingGlobalBorderUnits.Desktop} ${animatedHeadingGlobalDesktopBorder.right}${animatedHeadingGlobalBorderUnits.Desktop} ${animatedHeadingGlobalDesktopBorder.bottom}${animatedHeadingGlobalBorderUnits.Desktop} ${animatedHeadingGlobalDesktopBorder.left}${animatedHeadingGlobalBorderUnits.Desktop}`;
    const animatedHeadingGlobalTabletBorderWidth = `${animatedHeadingGlobalTabletBorder.top}${animatedHeadingGlobalBorderUnits.Tablet} ${animatedHeadingGlobalTabletBorder.right}${animatedHeadingGlobalBorderUnits.Tablet} ${animatedHeadingGlobalTabletBorder.bottom}${animatedHeadingGlobalBorderUnits.Tablet} ${animatedHeadingGlobalTabletBorder.left}${animatedHeadingGlobalBorderUnits.Tablet}`;
    const animatedHeadingGlobalMobileBorderWidth = `${animatedHeadingGlobalMobileBorder.top}${animatedHeadingGlobalBorderUnits.Mobile} ${animatedHeadingGlobalMobileBorder.right}${animatedHeadingGlobalBorderUnits.Mobile} ${animatedHeadingGlobalMobileBorder.bottom}${animatedHeadingGlobalBorderUnits.Mobile} ${animatedHeadingGlobalMobileBorder.left}${animatedHeadingGlobalBorderUnits.Mobile}`;
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

    /** Default border radius for Global */
    const animatedHeadingGlobalDesktopBorderRadiusWidth = `${animatedHeadingGlobalDesktopBorderRadius.top}${animatedHeadingGlobalBorderRadiusUnits.Desktop} ${animatedHeadingGlobalDesktopBorderRadius.right}${animatedHeadingGlobalBorderRadiusUnits.Desktop} ${animatedHeadingGlobalDesktopBorderRadius.bottom}${animatedHeadingGlobalBorderRadiusUnits.Desktop} ${animatedHeadingGlobalDesktopBorderRadius.left}${animatedHeadingGlobalBorderRadiusUnits.Desktop}`;
    const animatedHeadingGlobalTabletBorderRadiusWidth = `${animatedHeadingGlobalTabletBorderRadius.top}${animatedHeadingGlobalBorderRadiusUnits.Tablet} ${animatedHeadingGlobalTabletBorderRadius.right}${animatedHeadingGlobalBorderRadiusUnits.Tablet} ${animatedHeadingGlobalTabletBorderRadius.bottom}${animatedHeadingGlobalBorderRadiusUnits.Tablet} ${animatedHeadingGlobalTabletBorderRadius.left}${animatedHeadingGlobalBorderRadiusUnits.Tablet}`;
    const animatedHeadingGlobalMobileBorderRadiusWidth = `${animatedHeadingGlobalMobileBorderRadius.top}${animatedHeadingGlobalBorderRadiusUnits.Mobile} ${animatedHeadingGlobalMobileBorderRadius.right}${animatedHeadingGlobalBorderRadiusUnits.Mobile} ${animatedHeadingGlobalMobileBorderRadius.bottom}${animatedHeadingGlobalBorderRadiusUnits.Mobile} ${animatedHeadingGlobalMobileBorderRadius.left}${animatedHeadingGlobalBorderRadiusUnits.Mobile}`;
    /** End Global Border Radius */


    useEffect(() => {
        if (animatedHeadingNormalTextFontFamily !== 'Default') { 
            loadGoogleFont(animatedHeadingNormalTextFontFamily);
        }
        if (animatedHeadingAnimationTextFontFamily !== 'Default') {
            loadGoogleFont(animatedHeadingAnimationTextFontFamily);
        }
    }, [animatedHeadingNormalTextFontFamily,animatedHeadingAnimationTextFontFamily]);

    const allBlockStyle = useMemo(() => `

        .${blockId}.fb-animated-heading-main-wrapper {
            position: relative;
            ${animatedHeadingGlobalZIndex.Desktop ? `z-index: ${animatedHeadingGlobalZIndex.Desktop};` : ''}
        }

        .${blockId} .fb-animated-heading-wrapper {
            display: flex;
            align-items: center;
            ${animatedHeadingGap.Desktop &&animatedHeadingGapUnits.Desktop ? `gap: ${animatedHeadingGap.Desktop}${animatedHeadingGapUnits.Desktop};` : ''}
            ${animatedHeadingAlignment.Desktop ? `justify-content: ${animatedHeadingAlignment.Desktop};` : ''}
            ${animatedHeadingGlobalBgColor ? `background-color: ${animatedHeadingGlobalBgColor};` : ''}
            ${animatedHeadingGlobalDesktopPaddingWidth && animatedHeadingGlobalDesktopPadding?.top ? `padding: ${animatedHeadingGlobalDesktopPaddingWidth};` : ''}
            ${animatedHeadingGlobalDesktopMarginWidth && animatedHeadingGlobalDesktopMargin?.top ? `margin: ${animatedHeadingGlobalDesktopMarginWidth};` : ''}
            ${animatedHeadingGlobalBorder ? `border: ${animatedHeadingGlobalBorder};` : ''}
            ${animatedHeadingGlobalDesktopBorderWidth && animatedHeadingGlobalDesktopBorder?.top ? `border-width: ${animatedHeadingGlobalDesktopBorderWidth};` : ''}
            ${animatedHeadingGlobalDesktopBorderRadiusWidth && animatedHeadingGlobalDesktopBorderRadius?.top ? `border-radius: ${animatedHeadingGlobalDesktopBorderRadiusWidth};` : ''}
            ${animatedHeadingGlobalBorderColor ? `border-color: ${animatedHeadingGlobalBorderColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockId} .fb-animated-heading-wrapper:hover {
            ${animatedHeadingGlobalBgColorHover ? `background-color: ${animatedHeadingGlobalBgColorHover};` : ''}
        }

        .${blockId} .fb-animated-heading-wrapper .fb-animated-headings:empty {
            display: none;
        }

        .${blockId} .fb-animated-heading-wrapper:hover {
            ${animatedHeadingGlobalBorderHoverColor ? `border-color: ${animatedHeadingGlobalBorderHoverColor};` : ''}
        }

        .${blockId} .fb-animated-heading-wrapper .fb-animated-heading-prefix,
        .${blockId} .fb-animated-heading-wrapper .fb-animated-heading-suffix {
            ${animatedHeadingNormalTextColor ? `color: ${animatedHeadingNormalTextColor};` : ''}
            ${animatedHeadingNormalTextBgColor ? `background-color: ${animatedHeadingNormalTextBgColor};` : ''}

            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontFamily === true && animatedHeadingNormalTextGlobalTypographyData.fontFamily ? `font-family: ${animatedHeadingNormalTextGlobalTypographyData.fontFamily};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontSize === true && animatedHeadingNormalTextGlobalTypographyData.fontSize ? `font-size: ${animatedHeadingNormalTextGlobalTypographyData.fontSize};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontWeight === true && animatedHeadingNormalTextGlobalTypographyData.fontWeight ? `font-weight: ${animatedHeadingNormalTextGlobalTypographyData.fontWeight};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontStyle === true && animatedHeadingNormalTextGlobalTypographyData.fontStyle ? `font-style: ${animatedHeadingNormalTextGlobalTypographyData.fontStyle};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.textTransform === true && animatedHeadingNormalTextGlobalTypographyData.textTransform ? `text-transform: ${animatedHeadingNormalTextGlobalTypographyData.textTransform};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.textDecoration === true && animatedHeadingNormalTextGlobalTypographyData.textDecoration ? `text-decoration: ${animatedHeadingNormalTextGlobalTypographyData.textDecoration};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.letterSpacing === true && animatedHeadingNormalTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${animatedHeadingNormalTextGlobalTypographyData.letterSpacing};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.lineHeight === true && animatedHeadingNormalTextGlobalTypographyData.lineHeight ? `line-height: ${animatedHeadingNormalTextGlobalTypographyData.lineHeight};` : ''}
                
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontFamily === false && animatedHeadingNormalTextFontFamily && animatedHeadingNormalTextFontFamily !== 'Default' ? `font-family: ${animatedHeadingNormalTextFontFamily};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontSize === false && animatedHeadingNormalTextFontSize.Desktop && animatedHeadingNormalTextFontSizeUnits.Desktop ? `font-size: ${animatedHeadingNormalTextFontSize.Desktop}${animatedHeadingNormalTextFontSizeUnits.Desktop};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontWeight === false && animatedHeadingNormalTextFontWeight ? `font-weight: ${animatedHeadingNormalTextFontWeight};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.fontStyle === false && animatedHeadingNormalTextFontStyle ? `font-style: ${animatedHeadingNormalTextFontStyle};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.textTransform === false && animatedHeadingNormalTextTransform ? `text-transform: ${animatedHeadingNormalTextTransform};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.textDecoration === false && animatedHeadingNormalTextDecoration ? `text-decoration: ${animatedHeadingNormalTextDecoration};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.letterSpacing === false && animatedHeadingNormalTextLetterSpacing.Desktop && animatedHeadingNormalTextLetterSpacingUnits.Desktop ? `letter-spacing: ${animatedHeadingNormalTextLetterSpacing.Desktop}${animatedHeadingNormalTextLetterSpacingUnits.Desktop};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.lineHeight === false && animatedHeadingNormalTextLineHeight.Desktop && animatedHeadingNormalTextLineHeightUnits.Desktop ? `line-height: ${animatedHeadingNormalTextLineHeight.Desktop}${animatedHeadingNormalTextLineHeightUnits.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockId} .fb-animated-heading-wrapper .fb-animated-heading-prefix:hover,
        .${blockId} .fb-animated-heading-wrapper .fb-animated-heading-suffix:hover {
            ${animatedHeadingNormalTextHoverColor ? `color: ${animatedHeadingNormalTextHoverColor};` : ''}
            ${animatedHeadingNormalTextBgColorHover ? `background-color: ${animatedHeadingNormalTextBgColorHover};` : ''}
        }

        .${blockId} .fb-animated-heading-wrapper .fb-animated-headings,
        .${blockId} .fb-animated-heading-wrapper .fb-animated-heading-cursor {
            ${animatedHeadingAnimationTextColor ? `color: ${animatedHeadingAnimationTextColor};` : ''}
            ${animatedHeadingAnimationTextBgColor ? `background-color: ${animatedHeadingAnimationTextBgColor};` : ''} 

            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontFamily === true &&animatedHeadingGlobalTypographyData.fontFamily ? `font-family: ${animatedHeadingGlobalTypographyData.fontFamily};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontSize === true &&animatedHeadingGlobalTypographyData.fontSize ? `font-size: ${animatedHeadingGlobalTypographyData.fontSize};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontWeight === true &&animatedHeadingGlobalTypographyData.fontWeight ? `font-weight: ${animatedHeadingGlobalTypographyData.fontWeight};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontStyle === true &&animatedHeadingGlobalTypographyData.fontStyle ? `font-style: ${animatedHeadingGlobalTypographyData.fontStyle};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.textTransform === true &&animatedHeadingGlobalTypographyData.textTransform ? `text-transform: ${animatedHeadingGlobalTypographyData.textTransform};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.textDecoration === true &&animatedHeadingGlobalTypographyData.textDecoration ? `text-decoration: ${animatedHeadingGlobalTypographyData.textDecoration};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.letterSpacing === true &&animatedHeadingGlobalTypographyData.letterSpacing ? `letter-spacing: ${animatedHeadingGlobalTypographyData.letterSpacing};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.lineHeight === true &&animatedHeadingGlobalTypographyData.lineHeight ? `line-height: ${animatedHeadingGlobalTypographyData.lineHeight};` : ''}
                
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontFamily === false &&animatedHeadingAnimationTextFontFamily &&animatedHeadingAnimationTextFontFamily !== 'Default' ? `font-family: ${animatedHeadingAnimationTextFontFamily};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontSize === false &&animatedHeadingAnimationTextFontSize.Desktop &&animatedHeadingAnimationTextFontSizeUnits.Desktop ? `font-size: ${animatedHeadingAnimationTextFontSize.Desktop}${animatedHeadingAnimationTextFontSizeUnits.Desktop};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontWeight === false &&animatedHeadingAnimationTextFontWeight ? `font-weight: ${animatedHeadingAnimationTextFontWeight};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontStyle === false &&animatedHeadingAnimationTextFontStyle ? `font-style: ${animatedHeadingAnimationTextFontStyle};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.textTransform === false &&animatedHeadingAnimationTextTransform ? `text-transform: ${animatedHeadingAnimationTextTransform};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.textDecoration === false &&animatedHeadingAnimationTextDecoration ? `text-decoration: ${animatedHeadingAnimationTextDecoration};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.letterSpacing === false &&animatedHeadingAnimationTextLetterSpacing.Desktop &&animatedHeadingAnimationTextLetterSpacingUnits.Desktop ? `letter-spacing: ${animatedHeadingAnimationTextLetterSpacing.Desktop}${animatedHeadingAnimationTextLetterSpacingUnits.Desktop};` : ''}
            ${animatedHeadingAnimationTextGlobalTypoSwitcher.lineHeight === false &&animatedHeadingAnimationTextLineHeight.Desktop &&animatedHeadingAnimationTextLineHeightUnits.Desktop ? `line-height: ${animatedHeadingAnimationTextLineHeight.Desktop}${animatedHeadingAnimationTextLineHeightUnits.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockId} .fb-animated-heading-wrapper .fb-animated-headings:hover,
        .${blockId} .fb-animated-heading-wrapper .fb-animated-heading-cursor:hover {
            ${animatedHeadingAnimationTextHoverColor ? `color: ${animatedHeadingAnimationTextHoverColor};` : ''}
            ${animatedHeadingAnimationTextBgColorHover ? `background-color: ${animatedHeadingAnimationTextBgColorHover};` : ''}
        }

        @media only screen and (max-width: 1024px) {

            .${blockId}.fb-animated-heading-main-wrapper {
                ${animatedHeadingGlobalZIndex.Tablet ? `z-index: ${animatedHeadingGlobalZIndex.Tablet};` : ''}
            }

            .${blockId} .fb-animated-heading-wrapper {
                ${animatedHeadingGap.Tablet &&animatedHeadingGapUnits.Tablet ? `gap: ${animatedHeadingGap.Tablet}${animatedHeadingGapUnits.Tablet};` : ''}
                ${animatedHeadingAlignment.Tablet ? `text-align: ${animatedHeadingAlignment.Tablet};` : ''}
                ${animatedHeadingGlobalTabletPaddingWidth && animatedHeadingGlobalTabletPadding?.top ? `padding: ${animatedHeadingGlobalTabletPaddingWidth};` : ''}
                ${animatedHeadingGlobalTabletMarginWidth && animatedHeadingGlobalTabletMargin?.top ? `margin: ${animatedHeadingGlobalTabletMarginWidth};` : ''}
                ${animatedHeadingGlobalTabletBorderWidth && animatedHeadingGlobalTabletBorder?.top ? `border-width: ${animatedHeadingGlobalTabletBorderWidth};` : ''}
                ${animatedHeadingGlobalTabletBorderRadiusWidth && animatedHeadingGlobalTabletBorderRadius?.top ? `border-radius: ${animatedHeadingGlobalTabletBorderRadiusWidth};` : ''}
            }

            .${blockId} .fb-animated-heading-wrapper .fb-animated-heading-prefix,
            .${blockId} .fb-animated-heading-wrapper .fb-animated-heading-suffix {
                ${animatedHeadingNormalTextGlobalTypoSwitcher.fontSize === false && animatedHeadingNormalTextFontSize.Tablet && animatedHeadingNormalTextFontSizeUnits.Tablet ? `font-size: ${animatedHeadingNormalTextFontSize.Tablet}${animatedHeadingNormalTextFontSizeUnits.Tablet};` : ''}
                ${animatedHeadingNormalTextGlobalTypoSwitcher.letterSpacing === false && animatedHeadingNormalTextLetterSpacing.Tablet && animatedHeadingNormalTextLetterSpacingUnits.Tablet ? `letter-spacing: ${animatedHeadingNormalTextLetterSpacing.Tablet}${animatedHeadingNormalTextLetterSpacingUnits.Tablet};` : ''}
                ${animatedHeadingNormalTextGlobalTypoSwitcher.lineHeight === false && animatedHeadingNormalTextLineHeight.Tablet && animatedHeadingNormalTextLineHeightUnits.Tablet ? `line-height: ${animatedHeadingNormalTextLineHeight.Tablet}${animatedHeadingNormalTextLineHeightUnits.Tablet};` : ''}
            }

            .${blockId} .fb-animated-heading-wrapper .fb-animated-headings,
            .${blockId} .fb-animated-heading-wrapper .fb-animated-heading-cursor {  
                ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontSize === false &&animatedHeadingAnimationTextFontSize.Tablet &&animatedHeadingAnimationTextFontSizeUnits.Tablet ? `font-size: ${animatedHeadingAnimationTextFontSize.Tablet}${animatedHeadingAnimationTextFontSizeUnits.Tablet};` : ''}
                ${animatedHeadingAnimationTextGlobalTypoSwitcher.letterSpacing === false &&animatedHeadingAnimationTextLetterSpacing.Tablet &&animatedHeadingAnimationTextLetterSpacingUnits.Tablet ? `letter-spacing: ${animatedHeadingAnimationTextLetterSpacing.Tablet}${animatedHeadingAnimationTextLetterSpacingUnits.Tablet};` : ''}
                ${animatedHeadingAnimationTextGlobalTypoSwitcher.lineHeight === false &&animatedHeadingAnimationTextLineHeight.Tablet &&animatedHeadingAnimationTextLineHeightUnits.Tablet ? `line-height: ${animatedHeadingAnimationTextLineHeight.Tablet}${animatedHeadingAnimationTextLineHeightUnits.Tablet};` : ''}
            }

        }

        @media only screen and (max-width: 767px) {

            .${blockId}.fb-animated-heading-main-wrapper {
                ${animatedHeadingGlobalZIndex.Mobile ? `z-index: ${animatedHeadingGlobalZIndex.Mobile};` : ''}
            }

            .${blockId} .fb-animated-heading-wrapper {
                ${animatedHeadingGap.Mobile &&animatedHeadingGapUnits.Mobile ? `gap: ${animatedHeadingGap.Mobile}${animatedHeadingGapUnits.Mobile};` : ''}
                ${animatedHeadingAlignment.Mobile ? `text-align: ${animatedHeadingAlignment.Mobile};` : ''}
                ${animatedHeadingGlobalMobilePaddingWidth && animatedHeadingGlobalMobilePadding?.top ? `padding: ${animatedHeadingGlobalMobilePaddingWidth};` : ''}
                ${animatedHeadingGlobalMobileMarginWidth && animatedHeadingGlobalMobileMargin?.top ? `margin: ${animatedHeadingGlobalMobileMarginWidth};` : ''}
                ${animatedHeadingGlobalMobileBorderWidth && animatedHeadingGlobalMobileBorder?.top ? `border-width: ${animatedHeadingGlobalMobileBorderWidth};` : ''}
                ${animatedHeadingGlobalMobileBorderRadiusWidth && animatedHeadingGlobalMobileBorderRadius?.top ? `border-radius: ${animatedHeadingGlobalMobileBorderRadiusWidth};` : ''}
            }

            .${blockId} .fb-animated-heading-wrapper .fb-animated-heading-prefix,
            .${blockId} .fb-animated-heading-wrapper .fb-animated-heading-suffix {
                ${animatedHeadingNormalTextGlobalTypoSwitcher.fontSize === false && animatedHeadingNormalTextFontSize.Mobile && animatedHeadingNormalTextFontSizeUnits.Mobile ? `font-size: ${animatedHeadingNormalTextFontSize.Mobile}${animatedHeadingNormalTextFontSizeUnits.Mobile};` : ''}
                ${animatedHeadingNormalTextGlobalTypoSwitcher.letterSpacing === false && animatedHeadingNormalTextLetterSpacing.Mobile && animatedHeadingNormalTextLetterSpacingUnits.Mobile ? `letter-spacing: ${animatedHeadingNormalTextLetterSpacing.Mobile}${animatedHeadingNormalTextLetterSpacingUnits.Mobile};` : ''}
                ${animatedHeadingNormalTextGlobalTypoSwitcher.lineHeight === false && animatedHeadingNormalTextLineHeight.Mobile && animatedHeadingNormalTextLineHeightUnits.Mobile ? `line-height: ${animatedHeadingNormalTextLineHeight.Mobile}${animatedHeadingNormalTextLineHeightUnits.Mobile};` : ''}
            }

            .${blockId} .fb-animated-heading-wrapper .fb-animated-headings,
            .${blockId} .fb-animated-heading-wrapper .fb-animated-heading-cursor {  
                ${animatedHeadingAnimationTextGlobalTypoSwitcher.fontSize === false &&animatedHeadingAnimationTextFontSize.Mobile &&animatedHeadingAnimationTextFontSizeUnits.Mobile ? `font-size: ${animatedHeadingAnimationTextFontSize.Mobile}${animatedHeadingAnimationTextFontSizeUnits.Mobile};` : ''}
                ${animatedHeadingAnimationTextGlobalTypoSwitcher.letterSpacing === false &&animatedHeadingAnimationTextLetterSpacing.Mobile &&animatedHeadingAnimationTextLetterSpacingUnits.Mobile ? `letter-spacing: ${animatedHeadingAnimationTextLetterSpacing.Mobile}${animatedHeadingAnimationTextLetterSpacingUnits.Mobile};` : ''}
                ${animatedHeadingAnimationTextGlobalTypoSwitcher.lineHeight === false &&animatedHeadingAnimationTextLineHeight.Mobile &&animatedHeadingAnimationTextLineHeightUnits.Mobile ? `line-height: ${animatedHeadingAnimationTextLineHeight.Mobile}${animatedHeadingAnimationTextLineHeightUnits.Mobile};` : ''}
            }
        }
    `, [
    blockId,
    deviceType,
    blockStyle,
    animationType,
    animatedHeadingAlignment,
    animatedHeadingGap,
    animatedHeadingGapUnits,
    animatedHeadingPrefix,
    animatedHeadingItems,
    animatedHeadingCursorSwitch,
    animatedHeadingCursor,
    animatedHeadingSuffix,

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

    // Animation Text Style
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

    // Global Z-Index Attributes
    animatedHeadingGlobalZIndex,

    // Global Padding Attributes
    animatedHeadingGlobalPaddingUnits,
    animatedHeadingGlobalDesktopPadding,
    animatedHeadingGlobalTabletPadding,
    animatedHeadingGlobalMobilePadding,
    animatedHeadingGlobalPaddingLink,
    animatedHeadingGlobalDesktopPaddingWidth,
    animatedHeadingGlobalTabletPaddingWidth,
    animatedHeadingGlobalMobilePaddingWidth,

    // Global Margin Attributes
    animatedHeadingGlobalMarginUnits,
    animatedHeadingGlobalDesktopMargin,
    animatedHeadingGlobalTabletMargin,
    animatedHeadingGlobalMobileMargin,
    animatedHeadingGlobalMarginLink,
    animatedHeadingGlobalDesktopMarginWidth,
    animatedHeadingGlobalTabletMarginWidth,
    animatedHeadingGlobalMobileMarginWidth,

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
    animatedHeadingGlobalDesktopBorderWidth,
    animatedHeadingGlobalTabletBorderWidth,
    animatedHeadingGlobalMobileBorderWidth,

    // Global Border Radius Attributes
    animatedHeadingGlobalBorderRadiusUnits,
    animatedHeadingGlobalDesktopBorderRadius,
    animatedHeadingGlobalTabletBorderRadius,
    animatedHeadingGlobalMobileBorderRadius,
    animatedHeadingGlobalBorderRadiusLink,
    animatedHeadingGlobalDesktopBorderRadiusWidth,
    animatedHeadingGlobalTabletBorderRadiusWidth,
    animatedHeadingGlobalMobileBorderRadiusWidth,


    ]);

    const customCss = getCustomCss(animatedHeadingCustomCSS, `.${blockId}`);


    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()}); 
    }, [allBlockStyle, customCss] );

    const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
    

    return (
        <>

            <style>
                {editorStyle}
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
                                                setGlobalAlignment={(value) => setAttributes({animatedHeadingAlignment: value })}
                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_HtmlTagControl
                                                label={__("Html Tag", "frontis-blocks")}
                                                globalHtmlTag={animatedHeadingMainTag}
                                                setGlobalHtmlTag={(value) => setAttributes({animatedHeadingMainTag: value })}
                                            />

											<TextControl
												label={__("Prefix Text", "frontis-blocks")}
												value={animatedHeadingPrefix}
												onChange={(value) => setAttributes({animatedHeadingPrefix: value })}
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

                                            <ToggleControl
                                                label={__("Cursor Switch", "frontis-blocks")}
                                                checked={animatedHeadingCursorSwitch}
                                                onChange={(value) => setAttributes({animatedHeadingCursorSwitch: value })}
                                            />

                                            {animatedHeadingCursorSwitch && (
                                                <TextControl
                                                    label={__("Cursor", "frontis-blocks")}
                                                    value={animatedHeadingCursor}
                                                    onChange={(value) => setAttributes({animatedHeadingCursor: value })}
                                                    className="fb-animated-heading-cursor" 
                                                    help={__("Keep empty to hide.", "frontis-blocks")}
                                                />
                                            )}

											<TextControl
												label={__("Suffix Text", "frontis-blocks")}
												value={animatedHeadingSuffix}
												onChange={(value) => setAttributes({animatedHeadingSuffix: value })}
												className="fb-animated-heading-suffix" 
                                                help={__("Keep empty to hide.", "frontis-blocks")}
											/>

                                            <FB_Range
                                                min={0}
                                                max={100}
                                                label={__("Text Gap", "frontis-blocks")}
                                                rangeValue={animatedHeadingGap}
                                                onChangeHandler={(value) => setAttributes({animatedHeadingGap: value })}
                                                rangeUnitHandler={(value) => setAttributes({animatedHeadingGapUnits: value })}
                                                deviceType={deviceType}
                                                units={animatedHeadingGapUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={"8"}
                                            />
                                        </PanelBody>

                                    </>
                                )}

                                {tab.name === "styles" && (
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
                                                        animatedHeadingNormalTextGlobalTypoSwitcher: value === 'default' ? {...animatedHeadingNormalTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...animatedHeadingNormalTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                                                    })
                                                }}

                                                globalTypoOption={animatedHeadingNormalTextGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ animatedHeadingNormalTextGlobalTypoOption: value })}

                                                fontFamily={animatedHeadingNormalTextFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ animatedHeadingNormalTextFontFamily: value, animatedHeadingNormalTextGlobalTypoSwitcher: {...animatedHeadingNormalTextGlobalTypoSwitcher, fontFamily: value && false} })}

                                                fontSize={animatedHeadingNormalTextFontSize}
                                                onChangeFontSize={(value) => setAttributes({ animatedHeadingNormalTextFontSize: value, animatedHeadingNormalTextGlobalTypoSwitcher: {...animatedHeadingNormalTextGlobalTypoSwitcher, fontSize: value && false} })}

                                                fontSizeUnits={animatedHeadingNormalTextFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ animatedHeadingNormalTextFontSizeUnits: value })}

                                                fontWeight={animatedHeadingNormalTextFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ animatedHeadingNormalTextFontWeight: value, animatedHeadingNormalTextGlobalTypoSwitcher: {...animatedHeadingNormalTextGlobalTypoSwitcher, fontWeight: value && false} })}

                                                fontStyle={animatedHeadingNormalTextFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ animatedHeadingNormalTextFontStyle: value, animatedHeadingNormalTextGlobalTypoSwitcher: {...animatedHeadingNormalTextGlobalTypoSwitcher, fontStyle: value && false} })}

                                                textTransform={animatedHeadingNormalTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ animatedHeadingNormalTextTransform: value, animatedHeadingNormalTextGlobalTypoSwitcher: {...animatedHeadingNormalTextGlobalTypoSwitcher, textTransform: value && false} })}

                                                textDecoration={animatedHeadingNormalTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ animatedHeadingNormalTextDecoration: value, animatedHeadingNormalTextGlobalTypoSwitcher: {...animatedHeadingNormalTextGlobalTypoSwitcher, textDecoration: value && false} })}

                                                letterSpacing={animatedHeadingNormalTextLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ animatedHeadingNormalTextLetterSpacing: value, animatedHeadingNormalTextGlobalTypoSwitcher: {...animatedHeadingNormalTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                                                letterSpacingUnits={animatedHeadingNormalTextLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ animatedHeadingNormalTextLetterSpacingUnits: value })}

                                                lineHeight={animatedHeadingNormalTextLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ animatedHeadingNormalTextLineHeight: value, animatedHeadingNormalTextGlobalTypoSwitcher: {...animatedHeadingNormalTextGlobalTypoSwitcher, lineHeight: value && false} })}

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
                                                    setGlobalColor={(value) => setAttributes({ animatedHeadingNormalTextColor: value })}
                                                />
                                            )}

                                            {animatedHeadingNormalTextColorSwitcher === 'hover' && ( 
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={animatedHeadingNormalTextHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ animatedHeadingNormalTextHoverColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ animatedHeadingNormalTextBgColor: value })}
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
                                                storeGlobalTypographyData={(value) => setAttributes({animatedHeadingAnimationTextGlobalTypographyData: value })}

                                                globalTypoType={animatedHeadingAnimationTextGlobalTypoType}
                                                onChangeGlobalTypoType={(value) => {
                                                    setAttributes({ 
                                                       animatedHeadingAnimationTextGlobalTypoType: value, 
                                                       animatedHeadingAnimationTextGlobalTypoSwitcher: value === 'default' ? {...animatedHeadingAnimationTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...animatedHeadingAnimationTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                                                    })
                                                }}

                                                globalTypoOption={animatedHeadingAnimationTextGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({animatedHeadingAnimationTextGlobalTypoOption: value })}

                                                fontFamily={animatedHeadingAnimationTextFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({animatedHeadingAnimationTextFontFamily: value,animatedHeadingAnimationTextGlobalTypoSwitcher: {...animatedHeadingAnimationTextGlobalTypoSwitcher, fontFamily: value && false} })}

                                                fontSize={animatedHeadingAnimationTextFontSize}
                                                onChangeFontSize={(value) => setAttributes({animatedHeadingAnimationTextFontSize: value,animatedHeadingAnimationTextGlobalTypoSwitcher: {...animatedHeadingAnimationTextGlobalTypoSwitcher, fontSize: value && false} })}

                                                fontSizeUnits={animatedHeadingAnimationTextFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({animatedHeadingAnimationTextFontSizeUnits: value })}

                                                fontWeight={animatedHeadingAnimationTextFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({animatedHeadingAnimationTextFontWeight: value,animatedHeadingAnimationTextGlobalTypoSwitcher: {...animatedHeadingAnimationTextGlobalTypoSwitcher, fontWeight: value && false} })}

                                                fontStyle={animatedHeadingAnimationTextFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({animatedHeadingAnimationTextFontStyle: value,animatedHeadingAnimationTextGlobalTypoSwitcher: {...animatedHeadingAnimationTextGlobalTypoSwitcher, fontStyle: value && false} })}

                                                textTransform={animatedHeadingAnimationTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({animatedHeadingAnimationTextTransform: value,animatedHeadingAnimationTextGlobalTypoSwitcher: {...animatedHeadingAnimationTextGlobalTypoSwitcher, textTransform: value && false} })}

                                                textDecoration={animatedHeadingAnimationTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({animatedHeadingAnimationTextDecoration: value,animatedHeadingAnimationTextGlobalTypoSwitcher: {...animatedHeadingAnimationTextGlobalTypoSwitcher, textDecoration: value && false} })}

                                                letterSpacing={animatedHeadingAnimationTextLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({animatedHeadingAnimationTextLetterSpacing: value,animatedHeadingAnimationTextGlobalTypoSwitcher: {...animatedHeadingAnimationTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                                                letterSpacingUnits={animatedHeadingAnimationTextLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({animatedHeadingAnimationTextLetterSpacingUnits: value })}

                                                lineHeight={animatedHeadingAnimationTextLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({animatedHeadingAnimationTextLineHeight: value,animatedHeadingAnimationTextGlobalTypoSwitcher: {...animatedHeadingAnimationTextGlobalTypoSwitcher, lineHeight: value && false} })}

                                                lineHeightUnits={animatedHeadingAnimationTextLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({animatedHeadingAnimationTextLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={animatedHeadingAnimationTextColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({animatedHeadingAnimationTextColorSwitcher: value })}
                                            />

                                            {animatedHeadingAnimationTextColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={animatedHeadingAnimationTextColor}
                                                    setGlobalColor={(value) => setAttributes({animatedHeadingAnimationTextColor: value })}
                                                />
                                            )}

                                            {animatedHeadingAnimationTextColorSwitcher === 'hover' && ( 
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={animatedHeadingAnimationTextHoverColor}
                                                    setGlobalColor={(value) => setAttributes({animatedHeadingAnimationTextHoverColor: value })}
                                                />
                                            )}


                                            <FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={animatedHeadingAnimationTextBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({animatedHeadingAnimationTextBgColorSwitcher: value })}
                                            />

                                            {animatedHeadingAnimationTextBgColorSwitcher === 'normal' && ( 
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={animatedHeadingAnimationTextBgColor}
                                                    setGlobalColor={(value) => setAttributes({animatedHeadingAnimationTextBgColor: value })}
                                                />
                                            )}

                                            {animatedHeadingAnimationTextBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={animatedHeadingAnimationTextBgColorHover}
                                                    setGlobalColor={(value) => setAttributes({animatedHeadingAnimationTextBgColorHover: value })}
                                                />
                                            )}
                                                            
                                        </PanelBody>

                                    </>
                                )}

                                {tab.name === "advanced" && (
                                    <>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-inner-wrapper">
												<PanelBody
													title={__("Advanced", "frontis-blocks")}
													initialOpen={true}
													className='fb-setting-z-index-header'
												>

                                                    <FB_Range
                                                        min={0}
                                                        max={10000000}
                                                        label={__("Z Index", "frontis-blocks")}
                                                        rangeValue={animatedHeadingGlobalZIndex}
                                                        onChangeHandler={(value) => setAttributes({animatedHeadingGlobalZIndex: value === 0 ? undefined : value })}
                                                        deviceType={deviceType}
                                                        setAttributes={setAttributes}
                                                        rangeStep={1}
                                                        resetFallbackValue={""}
                                                        isRangeUnit={false}

                                                    />

                                                    <FB_InputControl
														label={__("CSS ID", "frontis-blocks")}
														value={animatedHeadingGlobalWraperID}
														onChangeValue={(value) => setAttributes({animatedHeadingGlobalWraperID: value })}
														helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
													/>

													<FB_InputControl
														label={__("CSS Class", "frontis-blocks")}
														value={animatedHeadingGlobalWraperClass}
														onChangeValue={(value) => setAttributes({animatedHeadingGlobalWraperClass: value })}
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
                                                            setGlobalColor={(value) => setAttributes({ animatedHeadingGlobalBgColor: value })}
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
                                                            setGlobalColor={(value) => setAttributes({ animatedHeadingGlobalBorderColor: value })}
                                                        />
                                                    )}

                                                    {animatedHeadingGlobalBorderColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={animatedHeadingGlobalBorderHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ animatedHeadingGlobalBorderHoverColor: value })}
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
                                                        onChangeValue={(value) => setAttributes({animatedHeadingCustomCSS: value })}
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