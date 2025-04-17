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
        typingTextAlignment,
        typingTextPrefix,
        typingTextPrefixTag,
        typingTextItems,
        typingTextCursorSwitch,
        typingTextCursor,
        typingTextSuffix,
        typingTextSuffixTag,

        // Normal Typing Text Style
        typingNormalTextGlobalTypographyData,
        typingNormalTextGlobalTypoSwitcher,
        typingNormalTextGlobalTypoType,
        typingNormalTextGlobalTypoOption,
        typingNormalTextFontFamily,
        typingNormalTextFontSize,
        typingNormalTextFontSizeUnits,
        typingNormalTextFontWeight,
        typingNormalTextFontStyle,
        typingNormalTextTextTransform,
        typingNormalTextTextDecoration,
        typingNormalTextLetterSpacing,
        typingNormalTextLetterSpacingUnits,
        typingNormalTextLineHeight,
        typingNormalTextLineHeightUnits,

        typingNormalTextColorSwitcher,
        typingNormalTextColor,
        typingNormalTextHoverColor,
        typingNormalTextBgColorSwitcher,
        typingNormalTextBgColor,
        typingNormalTextBgColorHover,

        // Typing Text Style
        typingTextGlobalTypographyData,
        typingTextGlobalTypoSwitcher,
        typingTextGlobalTypoType,
        typingTextGlobalTypoOption,
        typingTextFontFamily,
        typingTextFontSize,
        typingTextFontSizeUnits,
        typingTextFontWeight,
        typingTextFontStyle,
        typingTextTextTransform,
        typingTextTextDecoration,
        typingTextLetterSpacing,
        typingTextLetterSpacingUnits,
        typingTextLineHeight,
        typingTextLineHeightUnits,

        typingTextColorSwitcher,
        typingTextColor,
        typingTextHoverColor,
        typingTextBgColorSwitcher,
        typingTextBgColor,
        typingTextBgColorHover,

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
        typingTextGlobalZIndex,

    } = attributes;
	
    const deviceType= useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-typing-text-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = typingTextItems.findIndex(item => item.id === active.id);
            const newIndex = typingTextItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(typingTextItems, oldIndex, newIndex);
            setAttributes({ typingTextItems: updatedItems });
        }
    };

	const handleAddItem = () => {
		const newItem = {
			id: `item-${typingTextItems.length + 1}`,
			typingTextTitle: 'Typing Text ' + (typingTextItems.length + 1),
		};
	
		setAttributes({ typingTextItems: [...typingTextItems, newItem] });
	};

    const handleChangeItem = (id, key, value) => {
        const updatedItems = typingTextItems.map(item => 
            item.id === id ? { ...item, [key]: value } : item
        );
        setAttributes({ typingTextItems: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems = typingTextItems.filter(item => item.id !== id);
        setAttributes({ typingTextItems: updatedItems });
    };

    const handleDuplicateItem = (id) => {
        const itemToDuplicate = typingTextItems.find(item => item.id === id);
        if (itemToDuplicate) {
            const newItem = { ...itemToDuplicate, id: `item-${typingTextItems.length + 1}` };
            setAttributes({ typingTextItems: [...typingTextItems, newItem] });
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
        if (typingNormalTextFontFamily !== 'Default') { 
            loadGoogleFont(typingNormalTextFontFamily);
        }
        if (typingTextFontFamily !== 'Default') {
            loadGoogleFont(typingTextFontFamily);
        }
    }, [typingNormalTextFontFamily, typingTextFontFamily]);

    const allBlockStyle = useMemo(() => `

        .${blockId}.fb-typing-text-main-wrapper {
            position: relative;
            ${typingTextGlobalZIndex.Desktop ? `z-index: ${typingTextGlobalZIndex.Desktop};` : ''}
        }

        .${blockId} .fb-typing-text-wrapper {
            display: flex;
            align-items: center;
            ${typingTextAlignment.Desktop ? `justify-content: ${typingTextAlignment.Desktop};` : ''}
            ${textDesktopPaddingWidth && textDesktopPadding?.top ? `padding: ${textDesktopPaddingWidth};` : ''}
            ${textDesktopMarginWidth && textDesktopMargin?.top ? `margin: ${textDesktopMarginWidth};` : ''}
            ${textBorder ? `border: ${textBorder};` : ''}
            ${textDesktopBorderWidth && textDesktopBorder?.top ? `border-width: ${textDesktopBorderWidth};` : ''}
            ${textDesktopBorderRadiusWidth && textDesktopBorderRadius?.top ? `border-radius: ${textDesktopBorderRadiusWidth};` : ''}
            ${textBorderColor ? `border-color: ${textBorderColor};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockId} .fb-typing-text-wrapper:hover {
            ${textBorderHoverColor ? `border-color: ${textBorderHoverColor};` : ''}
        }

        .${blockId} .fb-typing-text-wrapper .fb-typing-text-prefix,
        .${blockId} .fb-typing-text-wrapper .fb-typing-text-suffix {
            ${typingNormalTextColor ? `color: ${typingNormalTextColor};` : ''}
            ${typingNormalTextBgColor ? `background-color: ${typingNormalTextBgColor};` : ''}

            ${typingNormalTextGlobalTypoSwitcher.fontFamily === true && typingNormalTextGlobalTypographyData.fontFamily ? `font-family: ${typingNormalTextGlobalTypographyData.fontFamily};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.fontSize === true && typingNormalTextGlobalTypographyData.fontSize ? `font-size: ${typingNormalTextGlobalTypographyData.fontSize};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.fontWeight === true && typingNormalTextGlobalTypographyData.fontWeight ? `font-weight: ${typingNormalTextGlobalTypographyData.fontWeight};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.fontStyle === true && typingNormalTextGlobalTypographyData.fontStyle ? `font-style: ${typingNormalTextGlobalTypographyData.fontStyle};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.textTransform === true && typingNormalTextGlobalTypographyData.textTransform ? `text-transform: ${typingNormalTextGlobalTypographyData.textTransform};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.textDecoration === true && typingNormalTextGlobalTypographyData.textDecoration ? `text-decoration: ${typingNormalTextGlobalTypographyData.textDecoration};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.letterSpacing === true && typingNormalTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${typingNormalTextGlobalTypographyData.letterSpacing};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.lineHeight === true && typingNormalTextGlobalTypographyData.lineHeight ? `line-height: ${typingNormalTextGlobalTypographyData.lineHeight};` : ''}
                
            ${typingNormalTextGlobalTypoSwitcher.fontFamily === false && typingNormalTextFontFamily && typingNormalTextFontFamily !== 'Default' ? `font-family: ${typingNormalTextFontFamily};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.fontSize === false && typingNormalTextFontSize.Desktop && typingNormalTextFontSizeUnits.Desktop ? `font-size: ${typingNormalTextFontSize.Desktop}${typingNormalTextFontSizeUnits.Desktop};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.fontWeight === false && typingNormalTextFontWeight ? `font-weight: ${typingNormalTextFontWeight};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.fontStyle === false && typingNormalTextFontStyle ? `font-style: ${typingNormalTextFontStyle};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.textTransform === false && typingNormalTextTextTransform ? `text-transform: ${typingNormalTextTextTransform};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.textDecoration === false && typingNormalTextTextDecoration ? `text-decoration: ${typingNormalTextTextDecoration};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.letterSpacing === false && typingNormalTextLetterSpacing.Desktop && typingNormalTextLetterSpacingUnits.Desktop ? `letter-spacing: ${typingNormalTextLetterSpacing.Desktop}${typingNormalTextLetterSpacingUnits.Desktop};` : ''}
            ${typingNormalTextGlobalTypoSwitcher.lineHeight === false && typingNormalTextLineHeight.Desktop && typingNormalTextLineHeightUnits.Desktop ? `line-height: ${typingNormalTextLineHeight.Desktop}${typingNormalTextLineHeightUnits.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockId} .fb-typing-text-wrapper .fb-typing-text-prefix:hover,
        .${blockId} .fb-typing-text-wrapper .fb-typing-text-suffix:hover {
            ${typingNormalTextHoverColor ? `color: ${typingNormalTextHoverColor};` : ''}
            ${typingNormalTextBgColorHover ? `background-color: ${typingNormalTextBgColorHover};` : ''}
        }

        .${blockId} .fb-typing-text-wrapper .fb-typing-texts,
        .${blockId} .fb-typing-text-wrapper .fb-typing-text-cursor {
            ${typingTextColor ? `color: ${typingTextColor};` : ''}
            ${typingTextBgColor ? `background-color: ${typingTextBgColor};` : ''} 

            ${typingTextGlobalTypoSwitcher.fontFamily === true && typingTextGlobalTypographyData.fontFamily ? `font-family: ${typingTextGlobalTypographyData.fontFamily};` : ''}
            ${typingTextGlobalTypoSwitcher.fontSize === true && typingTextGlobalTypographyData.fontSize ? `font-size: ${typingTextGlobalTypographyData.fontSize};` : ''}
            ${typingTextGlobalTypoSwitcher.fontWeight === true && typingTextGlobalTypographyData.fontWeight ? `font-weight: ${typingTextGlobalTypographyData.fontWeight};` : ''}
            ${typingTextGlobalTypoSwitcher.fontStyle === true && typingTextGlobalTypographyData.fontStyle ? `font-style: ${typingTextGlobalTypographyData.fontStyle};` : ''}
            ${typingTextGlobalTypoSwitcher.textTransform === true && typingTextGlobalTypographyData.textTransform ? `text-transform: ${typingTextGlobalTypographyData.textTransform};` : ''}
            ${typingTextGlobalTypoSwitcher.textDecoration === true && typingTextGlobalTypographyData.textDecoration ? `text-decoration: ${typingTextGlobalTypographyData.textDecoration};` : ''}
            ${typingTextGlobalTypoSwitcher.letterSpacing === true && typingTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${typingTextGlobalTypographyData.letterSpacing};` : ''}
            ${typingTextGlobalTypoSwitcher.lineHeight === true && typingTextGlobalTypographyData.lineHeight ? `line-height: ${typingTextGlobalTypographyData.lineHeight};` : ''}
                
            ${typingTextGlobalTypoSwitcher.fontFamily === false && typingTextFontFamily && typingTextFontFamily !== 'Default' ? `font-family: ${typingTextFontFamily};` : ''}
            ${typingTextGlobalTypoSwitcher.fontSize === false && typingTextFontSize.Desktop && typingTextFontSizeUnits.Desktop ? `font-size: ${typingTextFontSize.Desktop}${typingTextFontSizeUnits.Desktop};` : ''}
            ${typingTextGlobalTypoSwitcher.fontWeight === false && typingTextFontWeight ? `font-weight: ${typingTextFontWeight};` : ''}
            ${typingTextGlobalTypoSwitcher.fontStyle === false && typingTextFontStyle ? `font-style: ${typingTextFontStyle};` : ''}
            ${typingTextGlobalTypoSwitcher.textTransform === false && typingTextTextTransform ? `text-transform: ${typingTextTextTransform};` : ''}
            ${typingTextGlobalTypoSwitcher.textDecoration === false && typingTextTextDecoration ? `text-decoration: ${typingTextTextDecoration};` : ''}
            ${typingTextGlobalTypoSwitcher.letterSpacing === false && typingTextLetterSpacing.Desktop && typingTextLetterSpacingUnits.Desktop ? `letter-spacing: ${typingTextLetterSpacing.Desktop}${typingTextLetterSpacingUnits.Desktop};` : ''}
            ${typingTextGlobalTypoSwitcher.lineHeight === false && typingTextLineHeight.Desktop && typingTextLineHeightUnits.Desktop ? `line-height: ${typingTextLineHeight.Desktop}${typingTextLineHeightUnits.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockId} .fb-typing-text-wrapper .fb-typing-texts:hover,
        .${blockId} .fb-typing-text-wrapper .fb-typing-text-cursor:hover {
            ${typingTextHoverColor ? `color: ${typingTextHoverColor};` : ''}
            ${typingTextBgColorHover ? `background-color: ${typingTextBgColorHover};` : ''}
        }

        @media only screen and (max-width: 1024px) {

            .${blockId}.fb-typing-text-main-wrapper {
                ${typingTextGlobalZIndex.Tablet ? `z-index: ${typingTextGlobalZIndex.Tablet};` : ''}
            }

            .${blockId} .fb-typing-text-wrapper {
                ${typingTextAlignment.Tablet ? `text-align: ${typingTextAlignment.Tablet};` : ''}
                ${textTabletPaddingWidth && textTabletPadding?.top ? `padding: ${textTabletPaddingWidth};` : ''}
                ${textTabletMarginWidth && textTabletMargin?.top ? `margin: ${textTabletMarginWidth};` : ''}
                ${textTabletBorderWidth && textTabletBorder?.top ? `border-width: ${textTabletBorderWidth};` : ''}
                ${textTabletBorderRadiusWidth && textTabletBorderRadius?.top ? `border-radius: ${textTabletBorderRadiusWidth};` : ''}
            }

            .${blockId} .fb-typing-text-wrapper .fb-typing-text-prefix,
            .${blockId} .fb-typing-text-wrapper .fb-typing-text-suffix {
                ${typingNormalTextGlobalTypoSwitcher.fontSize === false && typingNormalTextFontSize.Tablet && typingNormalTextFontSizeUnits.Tablet ? `font-size: ${typingNormalTextFontSize.Tablet}${typingNormalTextFontSizeUnits.Tablet};` : ''}
                ${typingNormalTextGlobalTypoSwitcher.letterSpacing === false && typingNormalTextLetterSpacing.Tablet && typingNormalTextLetterSpacingUnits.Tablet ? `letter-spacing: ${typingNormalTextLetterSpacing.Tablet}${typingNormalTextLetterSpacingUnits.Tablet};` : ''}
                ${typingNormalTextGlobalTypoSwitcher.lineHeight === false && typingNormalTextLineHeight.Tablet && typingNormalTextLineHeightUnits.Tablet ? `line-height: ${typingNormalTextLineHeight.Tablet}${typingNormalTextLineHeightUnits.Tablet};` : ''}
            }

            .${blockId} .fb-typing-text-wrapper .fb-typing-texts {  
                ${typingTextGlobalTypoSwitcher.fontSize === false && typingTextFontSize.Tablet && typingTextFontSizeUnits.Tablet ? `font-size: ${typingTextFontSize.Tablet}${typingTextFontSizeUnits.Tablet};` : ''}
                ${typingTextGlobalTypoSwitcher.letterSpacing === false && typingTextLetterSpacing.Tablet && typingTextLetterSpacingUnits.Tablet ? `letter-spacing: ${typingTextLetterSpacing.Tablet}${typingTextLetterSpacingUnits.Tablet};` : ''}
                ${typingTextGlobalTypoSwitcher.lineHeight === false && typingTextLineHeight.Tablet && typingTextLineHeightUnits.Tablet ? `line-height: ${typingTextLineHeight.Tablet}${typingTextLineHeightUnits.Tablet};` : ''}
            }

        }

        @media only screen and (max-width: 767px) {

            .${blockId}.fb-typing-text-main-wrapper {
                ${typingTextGlobalZIndex.Mobile ? `z-index: ${typingTextGlobalZIndex.Mobile};` : ''}
            }

            .${blockId} .fb-typing-text-wrapper {
                ${typingTextAlignment.Mobile ? `text-align: ${typingTextAlignment.Mobile};` : ''}
                ${textMobilePaddingWidth && textMobilePadding?.top ? `padding: ${textMobilePaddingWidth};` : ''}
                ${textMobileMarginWidth && textMobileMargin?.top ? `margin: ${textMobileMarginWidth};` : ''}
                ${textMobileBorderWidth && textMobileBorder?.top ? `border-width: ${textMobileBorderWidth};` : ''}
                ${textMobileBorderRadiusWidth && textMobileBorderRadius?.top ? `border-radius: ${textMobileBorderRadiusWidth};` : ''}
            }

            .${blockId} .fb-typing-text-wrapper .fb-typing-text-prefix,
            .${blockId} .fb-typing-text-wrapper .fb-typing-text-suffix {
                ${typingNormalTextGlobalTypoSwitcher.fontSize === false && typingNormalTextFontSize.Mobile && typingNormalTextFontSizeUnits.Mobile ? `font-size: ${typingNormalTextFontSize.Mobile}${typingNormalTextFontSizeUnits.Mobile};` : ''}
                ${typingNormalTextGlobalTypoSwitcher.letterSpacing === false && typingNormalTextLetterSpacing.Mobile && typingNormalTextLetterSpacingUnits.Mobile ? `letter-spacing: ${typingNormalTextLetterSpacing.Mobile}${typingNormalTextLetterSpacingUnits.Mobile};` : ''}
                ${typingNormalTextGlobalTypoSwitcher.lineHeight === false && typingNormalTextLineHeight.Mobile && typingNormalTextLineHeightUnits.Mobile ? `line-height: ${typingNormalTextLineHeight.Mobile}${typingNormalTextLineHeightUnits.Mobile};` : ''}
            }

            .${blockId} .fb-typing-text-wrapper .fb-typing-texts {  
                ${typingTextGlobalTypoSwitcher.fontSize === false && typingTextFontSize.Mobile && typingTextFontSizeUnits.Mobile ? `font-size: ${typingTextFontSize.Mobile}${typingTextFontSizeUnits.Mobile};` : ''}
                ${typingTextGlobalTypoSwitcher.letterSpacing === false && typingTextLetterSpacing.Mobile && typingTextLetterSpacingUnits.Mobile ? `letter-spacing: ${typingTextLetterSpacing.Mobile}${typingTextLetterSpacingUnits.Mobile};` : ''}
                ${typingTextGlobalTypoSwitcher.lineHeight === false && typingTextLineHeight.Mobile && typingTextLineHeightUnits.Mobile ? `line-height: ${typingTextLineHeight.Mobile}${typingTextLineHeightUnits.Mobile};` : ''}
            }
        }
    `, [
    blockId,
    deviceType,
    blockStyle,
    typingTextAlignment,
    typingTextPrefix,
    typingTextPrefixTag,
    typingTextItems,
    typingTextCursorSwitch,
    typingTextCursor,
    typingTextSuffix,
    typingTextSuffixTag,

    // Normal Typing Text Style
    typingNormalTextGlobalTypographyData,
    typingNormalTextGlobalTypoSwitcher,
    typingNormalTextGlobalTypoType,
    typingNormalTextGlobalTypoOption,
    typingNormalTextFontFamily,
    typingNormalTextFontSize,
    typingNormalTextFontSizeUnits,
    typingNormalTextFontWeight,
    typingNormalTextFontStyle,
    typingNormalTextTextTransform,
    typingNormalTextTextDecoration,
    typingNormalTextLetterSpacing,
    typingNormalTextLetterSpacingUnits,
    typingNormalTextLineHeight,
    typingNormalTextLineHeightUnits,

    typingNormalTextColorSwitcher,
    typingNormalTextColor,
    typingNormalTextHoverColor,
    typingNormalTextBgColorSwitcher,
    typingNormalTextBgColor,
    typingNormalTextBgColorHover,

    // Typing Text Style
    typingTextGlobalTypographyData,
    typingTextGlobalTypoSwitcher,
    typingTextGlobalTypoType,
    typingTextGlobalTypoOption,
    typingTextFontFamily,
    typingTextFontSize,
    typingTextFontSizeUnits,
    typingTextFontWeight,
    typingTextFontStyle,
    typingTextTextTransform,
    typingTextTextDecoration,
    typingTextLetterSpacing,
    typingTextLetterSpacingUnits,
    typingTextLineHeight,
    typingTextLineHeightUnits,

    typingTextColorSwitcher,
    typingTextColor,
    typingTextHoverColor,
    typingTextBgColorSwitcher,
    typingTextBgColor,
    typingTextBgColorHover,

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
    typingTextGlobalZIndex,


    ]);


    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()}); 
    }, [allBlockStyle] );

    const editorStyle = `${allBlockStyle}`.replace(/\s+/g, ' ').trim();
    

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
                                                globalAlignment={typingTextAlignment}
                                                setGlobalAlignment={(value) => setAttributes({ typingTextAlignment: value })}
                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

											<TextControl
												label={__("Prefix Text", "frontis-blocks")}
												value={typingTextPrefix}
												onChange={(value) => setAttributes({ typingTextPrefix: value })}
												className="fb-typing-text-prefix" 
                                                help={__("Keep empty to hide.", "frontis-blocks")}
											/>
                                            <FB_HtmlTagControl
                                                label={__("Prefix Tag", "frontis-blocks")}
                                                globalHtmlTag={typingTextPrefixTag}
                                                setGlobalHtmlTag={(value) => setAttributes({ typingTextPrefixTag: value })}
                                            />

                                            <BaseControl
                                                label={__("Text Items", "frontis-blocks")}
                                            >
                                                <div className="fb-typing-text-items-wrapper">
                                                    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                                                        <SortableContext items={typingTextItems.map(item => item.id)}>
                                                            <ul className='dnd-items-wrapper'>
                                                                {typingTextItems.map((item, index) => (
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
                                                        {__("Add Typing Text Item", "frontis-blocks")}
                                                    </Button>
                                                </div>
                                            </BaseControl>

                                            <ToggleControl
                                                label={__("Cursor Switch", "frontis-blocks")}
                                                checked={typingTextCursorSwitch}
                                                onChange={(value) => setAttributes({ typingTextCursorSwitch: value })}
                                            />

                                            {typingTextCursorSwitch && (
                                                <TextControl
                                                    label={__("Cursor", "frontis-blocks")}
                                                    value={typingTextCursor}
                                                    onChange={(value) => setAttributes({ typingTextCursor: value })}
                                                    className="fb-typing-text-cursor" 
                                                    help={__("Keep empty to hide.", "frontis-blocks")}
                                                />
                                            )}

											<TextControl
												label={__("Suffix Text", "frontis-blocks")}
												value={typingTextSuffix}
												onChange={(value) => setAttributes({ typingTextSuffix: value })}
												className="fb-typing-text-suffix" 
                                                help={__("Keep empty to hide.", "frontis-blocks")}
											/>
                                            <FB_HtmlTagControl
                                                label={__("Suffix Tag", "frontis-blocks")}
                                                globalHtmlTag={typingTextSuffixTag}
                                                setGlobalHtmlTag={(value) => setAttributes({ typingTextSuffixTag: value })}
                                            />
                                        </PanelBody>

                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
										<PanelBody title={__("Normal Text Style", "frontis-blocks")} initialOpen={true}>

                                            <FB_TypographyControl
                                                globalTypoControlActive={true}
                                                globalTypoSwitcher={typingNormalTextGlobalTypoSwitcher} 
                                                storeGlobalTypographyData={(value) => setAttributes({ typingNormalTextGlobalTypographyData: value })}

                                                globalTypoType={typingNormalTextGlobalTypoType}
                                                onChangeGlobalTypoType={(value) => {
                                                    setAttributes({ 
                                                        typingNormalTextGlobalTypoType: value, 
                                                        typingNormalTextGlobalTypoSwitcher: value === 'default' ? {...typingNormalTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...typingNormalTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                                                    })
                                                }}

                                                globalTypoOption={typingNormalTextGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ typingNormalTextGlobalTypoOption: value })}

                                                fontFamily={typingNormalTextFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ typingNormalTextFontFamily: value, typingNormalTextGlobalTypoSwitcher: {...typingNormalTextGlobalTypoSwitcher, fontFamily: value && false} })}

                                                fontSize={typingNormalTextFontSize}
                                                onChangeFontSize={(value) => setAttributes({ typingNormalTextFontSize: value, typingNormalTextGlobalTypoSwitcher: {...typingNormalTextGlobalTypoSwitcher, fontSize: value && false} })}

                                                fontSizeUnits={typingNormalTextFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ typingNormalTextFontSizeUnits: value })}

                                                fontWeight={typingNormalTextFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ typingNormalTextFontWeight: value, typingNormalTextGlobalTypoSwitcher: {...typingNormalTextGlobalTypoSwitcher, fontWeight: value && false} })}

                                                fontStyle={typingNormalTextFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ typingNormalTextFontStyle: value, typingNormalTextGlobalTypoSwitcher: {...typingNormalTextGlobalTypoSwitcher, fontStyle: value && false} })}

                                                textTransform={typingNormalTextTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ typingNormalTextTextTransform: value, typingNormalTextGlobalTypoSwitcher: {...typingNormalTextGlobalTypoSwitcher, textTransform: value && false} })}

                                                textDecoration={typingNormalTextTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ typingNormalTextTextDecoration: value, typingNormalTextGlobalTypoSwitcher: {...typingNormalTextGlobalTypoSwitcher, textDecoration: value && false} })}

                                                letterSpacing={typingNormalTextLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ typingNormalTextLetterSpacing: value, typingNormalTextGlobalTypoSwitcher: {...typingNormalTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                                                letterSpacingUnits={typingNormalTextLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ typingNormalTextLetterSpacingUnits: value })}

                                                lineHeight={typingNormalTextLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ typingNormalTextLineHeight: value, typingNormalTextGlobalTypoSwitcher: {...typingNormalTextGlobalTypoSwitcher, lineHeight: value && false} })}

                                                lineHeightUnits={typingNormalTextLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ typingNormalTextLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={typingNormalTextColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ typingNormalTextColorSwitcher: value })}
                                            />

                                            {typingNormalTextColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={typingNormalTextColor}
                                                    setGlobalColor={(value) => setAttributes({ typingNormalTextColor: value })}
                                                />
                                            )}

                                            {typingNormalTextColorSwitcher === 'hover' && ( 
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={typingNormalTextHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ typingNormalTextHoverColor: value })}
                                                />
                                            )}


                                            <FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={typingNormalTextBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ typingNormalTextBgColorSwitcher: value })}
                                            />

                                            {typingNormalTextBgColorSwitcher === 'normal' && ( 
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={typingNormalTextBgColor}
                                                    setGlobalColor={(value) => setAttributes({ typingNormalTextBgColor: value })}
                                                />
                                            )}

                                            {typingNormalTextBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={typingNormalTextBgColorHover}
                                                    setGlobalColor={(value) => setAttributes({ typingNormalTextBgColorHover: value })}
                                                />
                                            )}

										</PanelBody>
                                        <PanelBody title={__("Typing Text Style", "frontis-blocks")} initialOpen={false}>

                                            <FB_TypographyControl
                                                globalTypoControlActive={true}
                                                globalTypoSwitcher={typingTextGlobalTypoSwitcher} 
                                                storeGlobalTypographyData={(value) => setAttributes({ typingTextGlobalTypographyData: value })}

                                                globalTypoType={typingTextGlobalTypoType}
                                                onChangeGlobalTypoType={(value) => {
                                                    setAttributes({ 
                                                        typingTextGlobalTypoType: value, 
                                                        typingTextGlobalTypoSwitcher: value === 'default' ? {...typingTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...typingTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                                                    })
                                                }}

                                                globalTypoOption={typingTextGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ typingTextGlobalTypoOption: value })}

                                                fontFamily={typingTextFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ typingTextFontFamily: value, typingTextGlobalTypoSwitcher: {...typingTextGlobalTypoSwitcher, fontFamily: value && false} })}

                                                fontSize={typingTextFontSize}
                                                onChangeFontSize={(value) => setAttributes({ typingTextFontSize: value, typingTextGlobalTypoSwitcher: {...typingTextGlobalTypoSwitcher, fontSize: value && false} })}

                                                fontSizeUnits={typingTextFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ typingTextFontSizeUnits: value })}

                                                fontWeight={typingTextFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ typingTextFontWeight: value, typingTextGlobalTypoSwitcher: {...typingTextGlobalTypoSwitcher, fontWeight: value && false} })}

                                                fontStyle={typingTextFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ typingTextFontStyle: value, typingTextGlobalTypoSwitcher: {...typingTextGlobalTypoSwitcher, fontStyle: value && false} })}

                                                textTransform={typingTextTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ typingTextTextTransform: value, typingTextGlobalTypoSwitcher: {...typingTextGlobalTypoSwitcher, textTransform: value && false} })}

                                                textDecoration={typingTextTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ typingTextTextDecoration: value, typingTextGlobalTypoSwitcher: {...typingTextGlobalTypoSwitcher, textDecoration: value && false} })}

                                                letterSpacing={typingTextLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ typingTextLetterSpacing: value, typingTextGlobalTypoSwitcher: {...typingTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                                                letterSpacingUnits={typingTextLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ typingTextLetterSpacingUnits: value })}

                                                lineHeight={typingTextLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ typingTextLineHeight: value, typingTextGlobalTypoSwitcher: {...typingTextGlobalTypoSwitcher, lineHeight: value && false} })}

                                                lineHeightUnits={typingTextLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ typingTextLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={typingTextColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ typingTextColorSwitcher: value })}
                                            />

                                            {typingTextColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={typingTextColor}
                                                    setGlobalColor={(value) => setAttributes({ typingTextColor: value })}
                                                />
                                            )}

                                            {typingTextColorSwitcher === 'hover' && ( 
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={typingTextHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ typingTextHoverColor: value })}
                                                />
                                            )}


                                            <FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={typingTextBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ typingTextBgColorSwitcher: value })}
                                            />

                                            {typingTextBgColorSwitcher === 'normal' && ( 
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={typingTextBgColor}
                                                    setGlobalColor={(value) => setAttributes({ typingTextBgColor: value })}
                                                />
                                            )}

                                            {typingTextBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={typingTextBgColorHover}
                                                    setGlobalColor={(value) => setAttributes({ typingTextBgColorHover: value })}
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
                                                        rangeValue={typingTextGlobalZIndex}
                                                        onChangeHandler={(value) => setAttributes({ typingTextGlobalZIndex: value === 0 ? undefined : value })}
                                                        deviceType={deviceType}
                                                        setAttributes={setAttributes}
                                                        rangeStep={1}
                                                        resetFallbackValue={""}
                                                        isRangeUnit={false}

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