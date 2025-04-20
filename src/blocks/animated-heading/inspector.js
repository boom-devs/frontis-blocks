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
        animatedHeadingAlignment,
        animatedHeadingMainTag,
        animatedHeadingGap,
        animatedHeadingGapUnits,
        animatedHeadingPrefix,
        animatedHeadingItems,
        animatedHeadingCursorSwitch,
        animatedHeadingCursor,
        animatedHeadingSuffix,

        // Normal Typing Text Style
        animatedHeadingNormalTextGlobalTypographyData,
        animatedHeadingNormalTextGlobalTypoSwitcher,
        animatedHeadingNormalTextGlobalTypoType,
        animatedHeadingNormalTextGlobalTypoOption,
        animatedHeadingNormalTextFontFamily,
        animatedHeadingNormalTextFontSize,
        animatedHeadingNormalTextFontSizeUnits,
        animatedHeadingNormalTextFontWeight,
        animatedHeadingNormalTextFontStyle,
        animatedHeadingNormalTextTextTransform,
        animatedHeadingNormalTextTextDecoration,
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

        // Typing Text Style
        animatedHeadingGlobalTypographyData,
        animatedHeadingGlobalTypoSwitcher,
        animatedHeadingGlobalTypoType,
        animatedHeadingGlobalTypoOption,
        animatedHeadingFontFamily,
        animatedHeadingFontSize,
        animatedHeadingFontSizeUnits,
        animatedHeadingFontWeight,
        animatedHeadingFontStyle,
        animatedHeadingTextTransform,
        animatedHeadingTextDecoration,
        animatedHeadingLetterSpacing,
        animatedHeadingLetterSpacingUnits,
        animatedHeadingLineHeight,
        animatedHeadingLineHeightUnits,

        animatedHeadingColorSwitcher,
        animatedHeadingColor,
        animatedHeadingHoverColor,
        animatedHeadingBgColorSwitcher,
        animatedHeadingBgColor,
        animatedHeadingBgColorHover,

        // Padding Attributes
        textPaddingUnits,
        textDesktopPadding,
        textTabletPadding,
        textMobilePadding,
        textPaddingLink,

        // Margin Attributes
        textMarginUnits,
        textDesktopMargin,
        textTabletMargin,
        textMobileMargin,
        textMarginLink,

        // Background Color Attributes
        animatedHeadingGlobalBgColorSwitcher,
        animatedHeadingGlobalBgColor,
        animatedHeadingGlobalBgColorHover,

        // Typing Text Border
        textBorder,
        textBorderColorSwitcher,
        textBorderColor,
        textBorderHoverColor,
        textBorderUnits,
        textDesktopBorder,
        textTabletBorder,
        textMobileBorder,
        textBorderLink,
        textBorderRadiusUnits,
        textDesktopBorderRadius,
        textTabletBorderRadius,
        textMobileBorderRadius,
        textBorderRadiusLink,

        // Typing Text Global Z-Index
        animatedHeadingGlobalZIndex,
        animatedHeadingGlobalWraperID,
        animatedHeadingGlobalWraperClass,
        animatedHeadingCustomCSS,

    } = attributes;
	
    const deviceType= useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-animated-Heading-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

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
			animatedHeadingTitle: 'Typing Text ' + (animatedHeadingItems.length + 1),
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

    /** Start Typing Text Padding */
    const textPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (textPaddingLink) { 
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        textDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        textTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        textMobilePadding: {
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
                    setAttributes({ textDesktopPadding: { ...textDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ textTabletPadding: { ...textTabletPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ textMobilePadding: { ...textMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const textPaddingLinkBtn = () => {
        setAttributes({
            textPaddingLink: !textPaddingLink
        });
    };

    const textPaddingUnitsHandler = (unit) => {
        setAttributes({
            textPaddingUnits: {
                ...textPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default padding for Typing Text */
    const textDesktopPaddingWidth = `${textDesktopPadding.top}${textPaddingUnits.Desktop} ${textDesktopPadding.right}${textPaddingUnits.Desktop} ${textDesktopPadding.bottom}${textPaddingUnits.Desktop} ${textDesktopPadding.left}${textPaddingUnits.Desktop}`;
    const textTabletPaddingWidth = `${textTabletPadding.top}${textPaddingUnits.Tablet} ${textTabletPadding.right}${textPaddingUnits.Tablet} ${textTabletPadding.bottom}${textPaddingUnits.Tablet} ${textTabletPadding.left}${textPaddingUnits.Tablet}`;
    const textMobilePaddingWidth = `${textMobilePadding.top}${textPaddingUnits.Mobile} ${textMobilePadding.right}${textPaddingUnits.Mobile} ${textMobilePadding.bottom}${textPaddingUnits.Mobile} ${textMobilePadding.left}${textPaddingUnits.Mobile}`;
    /** End Typing Text Padding */

    /** Start Typing Text Margin */
    const textMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (textMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        textDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        textTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        textMobileMargin: {
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
                    setAttributes({ textDesktopMargin: { ...textDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ textTabletMargin: { ...textTabletMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ textMobileMargin: { ...textMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const textMarginLinkBtn = () => {
        setAttributes({
            textMarginLink: !textMarginLink
        });
    };
    
    const textMarginUnitsHandler = (unit) => {
        setAttributes({
            textMarginUnits: {
                ...textMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default margin for Typing Text */
    const textDesktopMarginWidth = `${textDesktopMargin.top}${textMarginUnits.Desktop} ${textDesktopMargin.right}${textMarginUnits.Desktop} ${textDesktopMargin.bottom}${textMarginUnits.Desktop} ${textDesktopMargin.left}${textMarginUnits.Desktop}`;
    const textTabletMarginWidth = `${textTabletMargin.top}${textMarginUnits.Tablet} ${textTabletMargin.right}${textMarginUnits.Tablet} ${textTabletMargin.bottom}${textMarginUnits.Tablet} ${textTabletMargin.left}${textMarginUnits.Tablet}`;
    const textMobileMarginWidth = `${textMobileMargin.top}${textMarginUnits.Mobile} ${textMobileMargin.right}${textMarginUnits.Mobile} ${textMobileMargin.bottom}${textMarginUnits.Mobile} ${textMobileMargin.left}${textMarginUnits.Mobile}`;
    /** End Typing Text Margin */

    /** Start Typing Text Border */
    const textBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (textBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        textDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        textTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        textMobileBorder: {
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
                    setAttributes({ textDesktopBorder: { ...textDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ textTabletBorder: { ...textTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ textMobileBorder: { ...textMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const textBorderLinkBtn = () => {
        setAttributes({
            textBorderLink: !textBorderLink
        });
    };

    const textBorderUnitsHandler = (unit) => {
        setAttributes({
            textBorderUnits: {
                ...textBorderUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border radius for Heading */
    const textDesktopBorderWidth = `${textDesktopBorder.top}${textBorderUnits.Desktop} ${textDesktopBorder.right}${textBorderUnits.Desktop} ${textDesktopBorder.bottom}${textBorderUnits.Desktop} ${textDesktopBorder.left}${textBorderUnits.Desktop}`;
    const textTabletBorderWidth = `${textTabletBorder.top}${textBorderUnits.Tablet} ${textTabletBorder.right}${textBorderUnits.Tablet} ${textTabletBorder.bottom}${textBorderUnits.Tablet} ${textTabletBorder.left}${textBorderUnits.Tablet}`;
    const textMobileBorderWidth = `${textMobileBorder.top}${textBorderUnits.Mobile} ${textMobileBorder.right}${textBorderUnits.Mobile} ${textMobileBorder.bottom}${textBorderUnits.Mobile} ${textMobileBorder.left}${textBorderUnits.Mobile}`;
    /** End Typing Text Border */

    /** Start Typing Text Border Radius */
    const textBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (textBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        textDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        textTabletBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        textMobileBorderRadius: {
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
                    setAttributes({ textDesktopBorderRadius: { ...textDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ textTabletBorderRadius: { ...textTabletBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ textMobileBorderRadius: { ...textMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const textBorderRadiusLinkBtn = () => {
        setAttributes({
            textBorderRadiusLink: !textBorderRadiusLink
        });
    };

    const textBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            textBorderRadiusUnits: {
                ...textBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border radius for Typing Text */
    const textDesktopBorderRadiusWidth = `${textDesktopBorderRadius.top}${textBorderRadiusUnits.Desktop} ${textDesktopBorderRadius.right}${textBorderRadiusUnits.Desktop} ${textDesktopBorderRadius.bottom}${textBorderRadiusUnits.Desktop} ${textDesktopBorderRadius.left}${textBorderRadiusUnits.Desktop}`;
    const textTabletBorderRadiusWidth = `${textTabletBorderRadius.top}${textBorderRadiusUnits.Tablet} ${textTabletBorderRadius.right}${textBorderRadiusUnits.Tablet} ${textTabletBorderRadius.bottom}${textBorderRadiusUnits.Tablet} ${textTabletBorderRadius.left}${textBorderRadiusUnits.Tablet}`;
    const textMobileBorderRadiusWidth = `${textMobileBorderRadius.top}${textBorderRadiusUnits.Mobile} ${textMobileBorderRadius.right}${textBorderRadiusUnits.Mobile} ${textMobileBorderRadius.bottom}${textBorderRadiusUnits.Mobile} ${textMobileBorderRadius.left}${textBorderRadiusUnits.Mobile}`;
    /** End Typing Text Border Radius */


    useEffect(() => {
        if (animatedHeadingNormalTextFontFamily !== 'Default') { 
            loadGoogleFont(animatedHeadingNormalTextFontFamily);
        }
        if (animatedHeadingFontFamily !== 'Default') {
            loadGoogleFont(animatedHeadingFontFamily);
        }
    }, [animatedHeadingNormalTextFontFamily, animatedHeadingFontFamily]);

    const allBlockStyle = useMemo(() => `

        .${blockId}.fb-animated-Heading-main-wrapper {
            position: relative;
            ${animatedHeadingGlobalZIndex.Desktop ? `z-index: ${animatedHeadingGlobalZIndex.Desktop};` : ''}
        }

        .${blockId} .fb-animated-Heading-wrapper {
            display: flex;
            align-items: center;
            ${animatedHeadingGap.Desktop && animatedHeadingGapUnits.Desktop ? `gap: ${animatedHeadingGap.Desktop}${animatedHeadingGapUnits.Desktop};` : ''}
            ${animatedHeadingAlignment.Desktop ? `justify-content: ${animatedHeadingAlignment.Desktop};` : ''}
            ${animatedHeadingGlobalBgColor ? `background-color: ${animatedHeadingGlobalBgColor};` : ''}
            ${textDesktopPaddingWidth && textDesktopPadding?.top ? `padding: ${textDesktopPaddingWidth};` : ''}
            ${textDesktopMarginWidth && textDesktopMargin?.top ? `margin: ${textDesktopMarginWidth};` : ''}
            ${textBorder ? `border: ${textBorder};` : ''}
            ${textDesktopBorderWidth && textDesktopBorder?.top ? `border-width: ${textDesktopBorderWidth};` : ''}
            ${textDesktopBorderRadiusWidth && textDesktopBorderRadius?.top ? `border-radius: ${textDesktopBorderRadiusWidth};` : ''}
            ${textBorderColor ? `border-color: ${textBorderColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockId} .fb-animated-Heading-wrapper:hover {
            ${animatedHeadingGlobalBgColorHover ? `background-color: ${animatedHeadingGlobalBgColorHover};` : ''}
        }

        .${blockId} .fb-animated-Heading-wrapper .fb-animatedHeading-texts:empty {
            display: none;
        }

        .${blockId} .fb-animated-Heading-wrapper:hover {
            ${textBorderHoverColor ? `border-color: ${textBorderHoverColor};` : ''}
        }

        .${blockId} .fb-animated-Heading-wrapper .fb-animated-Heading-prefix,
        .${blockId} .fb-animated-Heading-wrapper .fb-animated-Heading-suffix {
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
            ${animatedHeadingNormalTextGlobalTypoSwitcher.textTransform === false && animatedHeadingNormalTextTextTransform ? `text-transform: ${animatedHeadingNormalTextTextTransform};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.textDecoration === false && animatedHeadingNormalTextTextDecoration ? `text-decoration: ${animatedHeadingNormalTextTextDecoration};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.letterSpacing === false && animatedHeadingNormalTextLetterSpacing.Desktop && animatedHeadingNormalTextLetterSpacingUnits.Desktop ? `letter-spacing: ${animatedHeadingNormalTextLetterSpacing.Desktop}${animatedHeadingNormalTextLetterSpacingUnits.Desktop};` : ''}
            ${animatedHeadingNormalTextGlobalTypoSwitcher.lineHeight === false && animatedHeadingNormalTextLineHeight.Desktop && animatedHeadingNormalTextLineHeightUnits.Desktop ? `line-height: ${animatedHeadingNormalTextLineHeight.Desktop}${animatedHeadingNormalTextLineHeightUnits.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockId} .fb-animated-Heading-wrapper .fb-animated-Heading-prefix:hover,
        .${blockId} .fb-animated-Heading-wrapper .fb-animated-Heading-suffix:hover {
            ${animatedHeadingNormalTextHoverColor ? `color: ${animatedHeadingNormalTextHoverColor};` : ''}
            ${animatedHeadingNormalTextBgColorHover ? `background-color: ${animatedHeadingNormalTextBgColorHover};` : ''}
        }

        .${blockId} .fb-animated-Heading-wrapper .fb-animatedHeading-texts,
        .${blockId} .fb-animated-Heading-wrapper .fb-animated-Heading-cursor {
            ${animatedHeadingColor ? `color: ${animatedHeadingColor};` : ''}
            ${animatedHeadingBgColor ? `background-color: ${animatedHeadingBgColor};` : ''} 

            ${animatedHeadingGlobalTypoSwitcher.fontFamily === true && animatedHeadingGlobalTypographyData.fontFamily ? `font-family: ${animatedHeadingGlobalTypographyData.fontFamily};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.fontSize === true && animatedHeadingGlobalTypographyData.fontSize ? `font-size: ${animatedHeadingGlobalTypographyData.fontSize};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.fontWeight === true && animatedHeadingGlobalTypographyData.fontWeight ? `font-weight: ${animatedHeadingGlobalTypographyData.fontWeight};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.fontStyle === true && animatedHeadingGlobalTypographyData.fontStyle ? `font-style: ${animatedHeadingGlobalTypographyData.fontStyle};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.textTransform === true && animatedHeadingGlobalTypographyData.textTransform ? `text-transform: ${animatedHeadingGlobalTypographyData.textTransform};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.textDecoration === true && animatedHeadingGlobalTypographyData.textDecoration ? `text-decoration: ${animatedHeadingGlobalTypographyData.textDecoration};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.letterSpacing === true && animatedHeadingGlobalTypographyData.letterSpacing ? `letter-spacing: ${animatedHeadingGlobalTypographyData.letterSpacing};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.lineHeight === true && animatedHeadingGlobalTypographyData.lineHeight ? `line-height: ${animatedHeadingGlobalTypographyData.lineHeight};` : ''}
                
            ${animatedHeadingGlobalTypoSwitcher.fontFamily === false && animatedHeadingFontFamily && animatedHeadingFontFamily !== 'Default' ? `font-family: ${animatedHeadingFontFamily};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.fontSize === false && animatedHeadingFontSize.Desktop && animatedHeadingFontSizeUnits.Desktop ? `font-size: ${animatedHeadingFontSize.Desktop}${animatedHeadingFontSizeUnits.Desktop};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.fontWeight === false && animatedHeadingFontWeight ? `font-weight: ${animatedHeadingFontWeight};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.fontStyle === false && animatedHeadingFontStyle ? `font-style: ${animatedHeadingFontStyle};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.textTransform === false && animatedHeadingTextTransform ? `text-transform: ${animatedHeadingTextTransform};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.textDecoration === false && animatedHeadingTextDecoration ? `text-decoration: ${animatedHeadingTextDecoration};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.letterSpacing === false && animatedHeadingLetterSpacing.Desktop && animatedHeadingLetterSpacingUnits.Desktop ? `letter-spacing: ${animatedHeadingLetterSpacing.Desktop}${animatedHeadingLetterSpacingUnits.Desktop};` : ''}
            ${animatedHeadingGlobalTypoSwitcher.lineHeight === false && animatedHeadingLineHeight.Desktop && animatedHeadingLineHeightUnits.Desktop ? `line-height: ${animatedHeadingLineHeight.Desktop}${animatedHeadingLineHeightUnits.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockId} .fb-animated-Heading-wrapper .fb-animatedHeading-texts:hover,
        .${blockId} .fb-animated-Heading-wrapper .fb-animated-Heading-cursor:hover {
            ${animatedHeadingHoverColor ? `color: ${animatedHeadingHoverColor};` : ''}
            ${animatedHeadingBgColorHover ? `background-color: ${animatedHeadingBgColorHover};` : ''}
        }

        @media only screen and (max-width: 1024px) {

            .${blockId}.fb-animated-Heading-main-wrapper {
                ${animatedHeadingGlobalZIndex.Tablet ? `z-index: ${animatedHeadingGlobalZIndex.Tablet};` : ''}
            }

            .${blockId} .fb-animated-Heading-wrapper {
                ${animatedHeadingGap.Tablet && animatedHeadingGapUnits.Tablet ? `gap: ${animatedHeadingGap.Tablet}${animatedHeadingGapUnits.Tablet};` : ''}
                ${animatedHeadingAlignment.Tablet ? `text-align: ${animatedHeadingAlignment.Tablet};` : ''}
                ${textTabletPaddingWidth && textTabletPadding?.top ? `padding: ${textTabletPaddingWidth};` : ''}
                ${textTabletMarginWidth && textTabletMargin?.top ? `margin: ${textTabletMarginWidth};` : ''}
                ${textTabletBorderWidth && textTabletBorder?.top ? `border-width: ${textTabletBorderWidth};` : ''}
                ${textTabletBorderRadiusWidth && textTabletBorderRadius?.top ? `border-radius: ${textTabletBorderRadiusWidth};` : ''}
            }

            .${blockId} .fb-animated-Heading-wrapper .fb-animated-Heading-prefix,
            .${blockId} .fb-animated-Heading-wrapper .fb-animated-Heading-suffix {
                ${animatedHeadingNormalTextGlobalTypoSwitcher.fontSize === false && animatedHeadingNormalTextFontSize.Tablet && animatedHeadingNormalTextFontSizeUnits.Tablet ? `font-size: ${animatedHeadingNormalTextFontSize.Tablet}${animatedHeadingNormalTextFontSizeUnits.Tablet};` : ''}
                ${animatedHeadingNormalTextGlobalTypoSwitcher.letterSpacing === false && animatedHeadingNormalTextLetterSpacing.Tablet && animatedHeadingNormalTextLetterSpacingUnits.Tablet ? `letter-spacing: ${animatedHeadingNormalTextLetterSpacing.Tablet}${animatedHeadingNormalTextLetterSpacingUnits.Tablet};` : ''}
                ${animatedHeadingNormalTextGlobalTypoSwitcher.lineHeight === false && animatedHeadingNormalTextLineHeight.Tablet && animatedHeadingNormalTextLineHeightUnits.Tablet ? `line-height: ${animatedHeadingNormalTextLineHeight.Tablet}${animatedHeadingNormalTextLineHeightUnits.Tablet};` : ''}
            }

            .${blockId} .fb-animated-Heading-wrapper .fb-animatedHeading-texts,
            .${blockId} .fb-animated-Heading-wrapper .fb-animated-Heading-cursor {  
                ${animatedHeadingGlobalTypoSwitcher.fontSize === false && animatedHeadingFontSize.Tablet && animatedHeadingFontSizeUnits.Tablet ? `font-size: ${animatedHeadingFontSize.Tablet}${animatedHeadingFontSizeUnits.Tablet};` : ''}
                ${animatedHeadingGlobalTypoSwitcher.letterSpacing === false && animatedHeadingLetterSpacing.Tablet && animatedHeadingLetterSpacingUnits.Tablet ? `letter-spacing: ${animatedHeadingLetterSpacing.Tablet}${animatedHeadingLetterSpacingUnits.Tablet};` : ''}
                ${animatedHeadingGlobalTypoSwitcher.lineHeight === false && animatedHeadingLineHeight.Tablet && animatedHeadingLineHeightUnits.Tablet ? `line-height: ${animatedHeadingLineHeight.Tablet}${animatedHeadingLineHeightUnits.Tablet};` : ''}
            }

        }

        @media only screen and (max-width: 767px) {

            .${blockId}.fb-animated-Heading-main-wrapper {
                ${animatedHeadingGlobalZIndex.Mobile ? `z-index: ${animatedHeadingGlobalZIndex.Mobile};` : ''}
            }

            .${blockId} .fb-animated-Heading-wrapper {
                ${animatedHeadingGap.Mobile && animatedHeadingGapUnits.Mobile ? `gap: ${animatedHeadingGap.Mobile}${animatedHeadingGapUnits.Mobile};` : ''}
                ${animatedHeadingAlignment.Mobile ? `text-align: ${animatedHeadingAlignment.Mobile};` : ''}
                ${textMobilePaddingWidth && textMobilePadding?.top ? `padding: ${textMobilePaddingWidth};` : ''}
                ${textMobileMarginWidth && textMobileMargin?.top ? `margin: ${textMobileMarginWidth};` : ''}
                ${textMobileBorderWidth && textMobileBorder?.top ? `border-width: ${textMobileBorderWidth};` : ''}
                ${textMobileBorderRadiusWidth && textMobileBorderRadius?.top ? `border-radius: ${textMobileBorderRadiusWidth};` : ''}
            }

            .${blockId} .fb-animated-Heading-wrapper .fb-animated-Heading-prefix,
            .${blockId} .fb-animated-Heading-wrapper .fb-animated-Heading-suffix {
                ${animatedHeadingNormalTextGlobalTypoSwitcher.fontSize === false && animatedHeadingNormalTextFontSize.Mobile && animatedHeadingNormalTextFontSizeUnits.Mobile ? `font-size: ${animatedHeadingNormalTextFontSize.Mobile}${animatedHeadingNormalTextFontSizeUnits.Mobile};` : ''}
                ${animatedHeadingNormalTextGlobalTypoSwitcher.letterSpacing === false && animatedHeadingNormalTextLetterSpacing.Mobile && animatedHeadingNormalTextLetterSpacingUnits.Mobile ? `letter-spacing: ${animatedHeadingNormalTextLetterSpacing.Mobile}${animatedHeadingNormalTextLetterSpacingUnits.Mobile};` : ''}
                ${animatedHeadingNormalTextGlobalTypoSwitcher.lineHeight === false && animatedHeadingNormalTextLineHeight.Mobile && animatedHeadingNormalTextLineHeightUnits.Mobile ? `line-height: ${animatedHeadingNormalTextLineHeight.Mobile}${animatedHeadingNormalTextLineHeightUnits.Mobile};` : ''}
            }

            .${blockId} .fb-animated-Heading-wrapper .fb-animatedHeading-texts,
            .${blockId} .fb-animated-Heading-wrapper .fb-animated-Heading-cursor {  
                ${animatedHeadingGlobalTypoSwitcher.fontSize === false && animatedHeadingFontSize.Mobile && animatedHeadingFontSizeUnits.Mobile ? `font-size: ${animatedHeadingFontSize.Mobile}${animatedHeadingFontSizeUnits.Mobile};` : ''}
                ${animatedHeadingGlobalTypoSwitcher.letterSpacing === false && animatedHeadingLetterSpacing.Mobile && animatedHeadingLetterSpacingUnits.Mobile ? `letter-spacing: ${animatedHeadingLetterSpacing.Mobile}${animatedHeadingLetterSpacingUnits.Mobile};` : ''}
                ${animatedHeadingGlobalTypoSwitcher.lineHeight === false && animatedHeadingLineHeight.Mobile && animatedHeadingLineHeightUnits.Mobile ? `line-height: ${animatedHeadingLineHeight.Mobile}${animatedHeadingLineHeightUnits.Mobile};` : ''}
            }
        }
    `, [
    blockId,
    deviceType,
    blockStyle,
    animatedHeadingAlignment,
    animatedHeadingGap,
    animatedHeadingGapUnits,
    animatedHeadingPrefix,
    animatedHeadingItems,
    animatedHeadingCursorSwitch,
    animatedHeadingCursor,
    animatedHeadingSuffix,

    // Normal Typing Text Style
    animatedHeadingNormalTextGlobalTypographyData,
    animatedHeadingNormalTextGlobalTypoSwitcher,
    animatedHeadingNormalTextGlobalTypoType,
    animatedHeadingNormalTextGlobalTypoOption,
    animatedHeadingNormalTextFontFamily,
    animatedHeadingNormalTextFontSize,
    animatedHeadingNormalTextFontSizeUnits,
    animatedHeadingNormalTextFontWeight,
    animatedHeadingNormalTextFontStyle,
    animatedHeadingNormalTextTextTransform,
    animatedHeadingNormalTextTextDecoration,
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

    // Typing Text Style
    animatedHeadingGlobalTypographyData,
    animatedHeadingGlobalTypoSwitcher,
    animatedHeadingGlobalTypoType,
    animatedHeadingGlobalTypoOption,
    animatedHeadingFontFamily,
    animatedHeadingFontSize,
    animatedHeadingFontSizeUnits,
    animatedHeadingFontWeight,
    animatedHeadingFontStyle,
    animatedHeadingTextTransform,
    animatedHeadingTextDecoration,
    animatedHeadingLetterSpacing,
    animatedHeadingLetterSpacingUnits,
    animatedHeadingLineHeight,
    animatedHeadingLineHeightUnits,

    animatedHeadingColorSwitcher,
    animatedHeadingColor,
    animatedHeadingHoverColor,
    animatedHeadingBgColorSwitcher,
    animatedHeadingBgColor,
    animatedHeadingBgColorHover,

    // Padding Attributes
    textPaddingUnits,
    textDesktopPadding,
    textTabletPadding,
    textMobilePadding,
    textPaddingLink,
    textDesktopPaddingWidth,
    textTabletPaddingWidth,
    textMobilePaddingWidth,

    // Margin Attributes
    textMarginUnits,
    textDesktopMargin,
    textTabletMargin,
    textMobileMargin,
    textMarginLink,
    textDesktopMarginWidth,
    textTabletMarginWidth,
    textMobileMarginWidth,

    // Background Color Attributes
    animatedHeadingGlobalBgColorSwitcher,
    animatedHeadingGlobalBgColor,
    animatedHeadingGlobalBgColorHover,

    // Typing Text Border
    textBorder,
    textBorderColorSwitcher,
    textBorderColor,
    textBorderHoverColor,

    textBorderUnits,
    textDesktopBorder,
    textTabletBorder,
    textMobileBorder,
    textBorderLink,
    textDesktopBorderWidth,
    textTabletBorderWidth,
    textMobileBorderWidth,

    // Typing Text Border Radius
    textBorderRadiusUnits,
    textDesktopBorderRadius,
    textTabletBorderRadius,
    textMobileBorderRadius,
    textBorderRadiusLink,
    textDesktopBorderRadiusWidth,
    textTabletBorderRadiusWidth,
    textMobileBorderRadiusWidth,

    // Typing Text Global Z-Index
    animatedHeadingGlobalZIndex,


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
												className="fb-animated-Heading-prefix" 
                                                help={__("Keep empty to hide.", "frontis-blocks")}
											/>

                                            <BaseControl
                                                label={__("Text Items", "frontis-blocks")}
                                            >
                                                <div className="fb-animated-Heading-items-wrapper">
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
                                                onChange={(value) => setAttributes({ animatedHeadingCursorSwitch: value })}
                                            />

                                            {animatedHeadingCursorSwitch && (
                                                <TextControl
                                                    label={__("Cursor", "frontis-blocks")}
                                                    value={animatedHeadingCursor}
                                                    onChange={(value) => setAttributes({ animatedHeadingCursor: value })}
                                                    className="fb-animated-Heading-cursor" 
                                                    help={__("Keep empty to hide.", "frontis-blocks")}
                                                />
                                            )}

											<TextControl
												label={__("Suffix Text", "frontis-blocks")}
												value={animatedHeadingSuffix}
												onChange={(value) => setAttributes({ animatedHeadingSuffix: value })}
												className="fb-animated-Heading-suffix" 
                                                help={__("Keep empty to hide.", "frontis-blocks")}
											/>

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

                                                textTransform={animatedHeadingNormalTextTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ animatedHeadingNormalTextTextTransform: value, animatedHeadingNormalTextGlobalTypoSwitcher: {...animatedHeadingNormalTextGlobalTypoSwitcher, textTransform: value && false} })}

                                                textDecoration={animatedHeadingNormalTextTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ animatedHeadingNormalTextTextDecoration: value, animatedHeadingNormalTextGlobalTypoSwitcher: {...animatedHeadingNormalTextGlobalTypoSwitcher, textDecoration: value && false} })}

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
                                        <PanelBody title={__("Typing Text Style", "frontis-blocks")} initialOpen={false}>

                                            <FB_TypographyControl
                                                globalTypoControlActive={true}
                                                globalTypoSwitcher={animatedHeadingGlobalTypoSwitcher} 
                                                storeGlobalTypographyData={(value) => setAttributes({ animatedHeadingGlobalTypographyData: value })}

                                                globalTypoType={animatedHeadingGlobalTypoType}
                                                onChangeGlobalTypoType={(value) => {
                                                    setAttributes({ 
                                                        animatedHeadingGlobalTypoType: value, 
                                                        animatedHeadingGlobalTypoSwitcher: value === 'default' ? {...animatedHeadingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...animatedHeadingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                                                    })
                                                }}

                                                globalTypoOption={animatedHeadingGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ animatedHeadingGlobalTypoOption: value })}

                                                fontFamily={animatedHeadingFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ animatedHeadingFontFamily: value, animatedHeadingGlobalTypoSwitcher: {...animatedHeadingGlobalTypoSwitcher, fontFamily: value && false} })}

                                                fontSize={animatedHeadingFontSize}
                                                onChangeFontSize={(value) => setAttributes({ animatedHeadingFontSize: value, animatedHeadingGlobalTypoSwitcher: {...animatedHeadingGlobalTypoSwitcher, fontSize: value && false} })}

                                                fontSizeUnits={animatedHeadingFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ animatedHeadingFontSizeUnits: value })}

                                                fontWeight={animatedHeadingFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ animatedHeadingFontWeight: value, animatedHeadingGlobalTypoSwitcher: {...animatedHeadingGlobalTypoSwitcher, fontWeight: value && false} })}

                                                fontStyle={animatedHeadingFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ animatedHeadingFontStyle: value, animatedHeadingGlobalTypoSwitcher: {...animatedHeadingGlobalTypoSwitcher, fontStyle: value && false} })}

                                                textTransform={animatedHeadingTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ animatedHeadingTextTransform: value, animatedHeadingGlobalTypoSwitcher: {...animatedHeadingGlobalTypoSwitcher, textTransform: value && false} })}

                                                textDecoration={animatedHeadingTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ animatedHeadingTextDecoration: value, animatedHeadingGlobalTypoSwitcher: {...animatedHeadingGlobalTypoSwitcher, textDecoration: value && false} })}

                                                letterSpacing={animatedHeadingLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ animatedHeadingLetterSpacing: value, animatedHeadingGlobalTypoSwitcher: {...animatedHeadingGlobalTypoSwitcher, letterSpacing: value && false} })}

                                                letterSpacingUnits={animatedHeadingLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ animatedHeadingLetterSpacingUnits: value })}

                                                lineHeight={animatedHeadingLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ animatedHeadingLineHeight: value, animatedHeadingGlobalTypoSwitcher: {...animatedHeadingGlobalTypoSwitcher, lineHeight: value && false} })}

                                                lineHeightUnits={animatedHeadingLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ animatedHeadingLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={animatedHeadingColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ animatedHeadingColorSwitcher: value })}
                                            />

                                            {animatedHeadingColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={animatedHeadingColor}
                                                    setGlobalColor={(value) => setAttributes({ animatedHeadingColor: value })}
                                                />
                                            )}

                                            {animatedHeadingColorSwitcher === 'hover' && ( 
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={animatedHeadingHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ animatedHeadingHoverColor: value })}
                                                />
                                            )}


                                            <FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={animatedHeadingBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ animatedHeadingBgColorSwitcher: value })}
                                            />

                                            {animatedHeadingBgColorSwitcher === 'normal' && ( 
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={animatedHeadingBgColor}
                                                    setGlobalColor={(value) => setAttributes({ animatedHeadingBgColor: value })}
                                                />
                                            )}

                                            {animatedHeadingBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={animatedHeadingBgColorHover}
                                                    setGlobalColor={(value) => setAttributes({ animatedHeadingBgColorHover: value })}
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
                                                        value={textBorder}
                                                        options={BORDER_STYLES}
                                                        onChange={(value) => setAttributes({ textBorder: value })}
                                                    />

                                                    <FB_SwitcherControl
                                                        label={__("Border Color", "frontis-blocks")}
                                                        globalSwitcher={textBorderColorSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ textBorderColorSwitcher: value })}
                                                    />

                                                    {textBorderColorSwitcher === 'normal' && (
                                                        <FB_ColorControl
                                                            label={__("Normal Color", "frontis-blocks")}
                                                            globalColor={textBorderColor}
                                                            setGlobalColor={(value) => setAttributes({ textBorderColor: value })}
                                                        />
                                                    )}

                                                    {textBorderColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={textBorderHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ textBorderHoverColor: value })}
                                                        />
                                                    )}

                                                    <FB_Spacing
                                                        label={__("Border", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={textBorderUnitsHandler}
                                                        spacingUnits={textBorderUnits}
                                                        spacingDesktop={textDesktopBorder}
                                                        spacingTablet={textTabletBorder}
                                                        spacingMobile={textMobileBorder}
                                                        handleSpacingUnitHandler={textBorderUnitsChange}
                                                        spacingCombineBtn={textBorderLink}
                                                        spacingCombineBtnHandler={textBorderLinkBtn}
                                                        setAttributes={setAttributes}
                                                    />
                                                    <FB_Spacing
                                                        label={__("Border Radius", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={textBorderRadiusUnitsHandler}
                                                        spacingUnits={textBorderRadiusUnits}
                                                        spacingDesktop={textDesktopBorderRadius}
                                                        spacingTablet={textTabletBorderRadius}
                                                        spacingMobile={textMobileBorderRadius}
                                                        handleSpacingUnitHandler={textBorderRadiusUnitsChange}
                                                        spacingCombineBtn={textBorderRadiusLink}
                                                        spacingCombineBtnHandler={textBorderRadiusLinkBtn}
                                                        setAttributes={setAttributes}
                                                    />
                                                </PanelBody>
                                                <PanelBody title={__("Padding & Margin", "frontis-blocks")} initialOpen={false}>
                                                    <FB_Spacing
                                                        label={__("Padding", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={textPaddingUnitsHandler}
                                                        spacingUnits={textPaddingUnits}
                                                        spacingDesktop={textDesktopPadding}
                                                        spacingTablet={textTabletPadding}
                                                        spacingMobile={textMobilePadding}
                                                        handleSpacingUnitHandler={textPaddingUnitsChange}
                                                        spacingCombineBtn={textPaddingLink}
                                                        spacingCombineBtnHandler={textPaddingLinkBtn}
                                                        setAttributes={setAttributes}
                                                    />
                                                    <FB_Spacing
                                                        label={__("Margin", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={textMarginUnitsHandler}
                                                        spacingUnits={textMarginUnits}
                                                        spacingDesktop={textDesktopMargin}
                                                        spacingTablet={textTabletMargin}
                                                        spacingMobile={textMobileMargin}
                                                        handleSpacingUnitHandler={textMarginUnitsChange}
                                                        spacingCombineBtn={textMarginLink}
                                                        spacingCombineBtnHandler={textMarginLinkBtn}
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
                                )}
                            </div>
                        )}
                    </TabPanel>
                </div>
            </InspectorControls>
        </>
    );
}