/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    ToggleControl,
    Button,
    BaseControl,
    ButtonGroup,
    TextControl,
    PanelBody,
    TabPanel,
    ResponsiveWrapper,
    __experimentalHStack as HStack,
    RangeControl,
    SelectControl,
    TextareaControl,
} from "@wordpress/components";
import { BORDER_STYLES, FORM_FIELD_TYPES, OVERFLOW_OP } from "@Constants/fbConstants";
import FBIconPicker from "../../components/icon-picker";
import { DndContext, closestCenter } from '@dnd-kit/core';
import FrontisForms_Spacing from "../../components/spacing";
import { useEffect, useMemo } from "@wordpress/element";
import FrontisForms_Range from "../../components/range";
import FrontisForms_SwitcherControl from "../../components/switcher-control";
import FrontisForms_ColorControl from "../../components/color-control";
import FrontisForms_InputControl from "@Components/input-control";
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FrontisForms_InspectorControls from '@Components/InspectorControls';
import FrontisForms_TypographyControl from '../../components/typography-control';
import FrontisForms_BackgroundColorControl from '../../components/background-color-control';
import FrontisForms_BoxShadowControl from '../../components/box-shadow';
import loadGoogleFont from '@Utils/loadGoogleFont';
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./optionSortableItem";


const Inspector = ({ attributes, setAttributes, clientId }) => {
    const {
        blockID,
        parentBlockID,
        // deviceType,

        // general
        fieldOptions,
        fieldType,
        fieldLabelSwitcher,
        fieldLabel,
        fieldIconSwitcher,
        fieldIcon,
        fieldPlaceholderSwitcher,
        fieldPlaceholder,
        fieldRequiredSwitcher,
        fieldRequiredSymbolSwitcher,
        fieldRequiredText,
        fieldDefaultValue,
        fieldCustomNameAttribute,

        inheritedFieldIconSwitcher,
        inheritedFieldLabelSwitcher,
        inheritedFieldRequiredSwitcher,
        inheritedFieldRequiredSymbolSwitcher,

        inputFieldMaxWidth,
        inputFieldMaxWidthUnits,
        inputFieldHeight,
        inputFieldHeightUnits,

        labelGlobalTypoSwitcher,
        labelGlobalTypographyData,
        labelGlobalTypoType,
        labelGlobalTypoOption,
        labelFontFamily,
        labelFontSize,
        labelFontSizeUnits,
        labelFontWeight,
        labelFontStyle,
        labelTextTransform,
        labelTextDecoration,
        labelLetterSpacing,
        labelLetterSpacingUnits,
        labelLineHeight,
        labelLineHeightUnits,

        inputFieldGlobalTypoSwitcher,
        inputFieldGlobalTypographyData,
        inputFieldGlobalTypoType,
        inputFieldGlobalTypoOption,
        inputFieldFontFamily,
        inputFieldFontSize,
        inputFieldFontSizeUnits,
        inputFieldFontWeight,
        inputFieldFontStyle,
        inputFieldTextTransform,
        inputFieldTextDecoration,
        inputFieldLetterSpacing,
        inputFieldLetterSpacingUnits,
        inputFieldLineHeight,
        inputFieldLineHeightUnits,

        labelColor,
        labelRequiredColor,

        inputFieldColor,
        inputFieldFocusColor,
        inputFieldPlaceholderColor,
        inputFieldPlaceholderFocusColor,

        inputFieldColorSwitcher,
        inputFieldPlaceholderColorSwitcher,

        labelMarginUnits,
        labelMarginDesktop,
        labelMarginTablet,
        labelMarginMobile,
        labelMarginLink,

        inputFieldMarginUnits,
        inputFieldMarginDesktop,
        inputFieldMarginTablet,
        inputFieldMarginMobile,
        inputFieldMarginLink,

        inputFieldPaddingUnits,
        inputFieldPaddingDesktop,
        inputFieldPaddingTablet,
        inputFieldPaddingMobile,
        inputFieldPaddingLink,

        inputFieldBgColorSwitcher,
        inputFieldBgType,
        inputFieldBgClassicColor,
        inputFieldBgGradientColor,
        inputFieldBgCustomGradientSwitcher,
        inputFieldBgCustomGradientInputValue,
        inputFieldBgImageUrl,
        inputFieldBgImageAlt,
        inputFieldBgImageID,
        inputFieldBgImagePosition,
        inputFieldBgImageAttachment,
        inputFieldBgImageRepeat,
        inputFieldBgImageSize,
        inputFieldBgHoverType,
        inputFieldBgHoverClassicColor,
        inputFieldBgHoverGradientColor,
        inputFieldBgHoverCustomGradientSwitcher,
        inputFieldBgHoverCustomGradientInputValue,
        inputFieldBgHoverImageUrl,
        inputFieldBgHoverImageAlt,
        inputFieldBgHoverImageID,
        inputFieldBgHoverImagePosition,
        inputFieldBgHoverImageAttachment,
        inputFieldBgHoverImageRepeat,
        inputFieldBgHoverImageSize,

        inputFieldBorder,
        inputFieldBorderColor,
        inputFieldBorderFocusColor,
        inputFieldBorderColorSwitcher,
        inputFieldBorderUnits,
        inputFieldBorderDesktop,
        inputFieldBorderTablet,
        inputFieldBorderMobile,
        inputFieldBorderLink,
        inputFieldBorderRadiusUnits,
        inputFieldBorderRadiusDesktop,
        inputFieldBorderRadiusTablet,
        inputFieldBorderRadiusMobile,
        inputFieldBorderRadiusLink,

        inputFieldBoxShadowSwitcher,
        inputFieldBoxShadowValues,
        inputFieldBoxShadowCssValue,
        inputFieldBoxShadowFocusValues,
        inputFieldBoxShadowFocusCssValue,

        inputFieldIconSize,
        inputFieldIconSizeUnits,
        inputFieldIconGap,
        inputFieldIconGapUnits,

        fieldCustomCSS,
        fieldGlobalWraperID,
        fieldGlobalWraperClass,

        // form Advance
        fieldZIndex,
        fieldOverflow,
        fieldPaddingUnits,
        fieldPaddingDesktop,
        fieldPaddingTablet,
        fieldPaddingMobile,
        fieldPaddingLink,

        fieldMarginUnits,
        fieldMarginDesktop,
        fieldMarginTablet,
        fieldMarginMobile,
        fieldMarginLink,

        fieldBorder,
        fieldBorderColor,
        fieldBorderHoverColor,
        fieldBorderColorSwitcher,
        fieldBorderUnits,
        fieldBorderDesktop,
        fieldBorderTablet,
        fieldBorderMobile,
        fieldBorderLink,

        fieldBorderRadiusUnits,
        fieldBorderRadiusDesktop,
        fieldBorderRadiusTablet,
        fieldBorderRadiusMobile,
        fieldBorderRadiusLink,

        fieldDesktopSwitcher,
        fieldTabletSwitcher,
        fieldMobileSwitcher,

        fieldBgColorSwitcher,
        fieldBgType,
        fieldBgClassicColor,
        fieldBgGradientColor,
        fieldBgCustomGradientSwitcher,
        fieldBgCustomGradientInputValue,
        fieldBgImageUrl,
        fieldBgImageAlt,
        fieldBgImageID,
        fieldBgImagePosition,
        fieldBgImageAttachment,
        fieldBgImageRepeat,
        fieldBgImageSize,
        fieldBgHoverType,
        fieldBgHoverClassicColor,
        fieldBgHoverGradientColor,
        fieldBgHoverCustomGradientSwitcher,
        fieldBgHoverCustomGradientInputValue,
        fieldBgHoverImageUrl,
        fieldBgHoverImageAlt,
        fieldBgHoverImageID,
        fieldBgHoverImagePosition,
        fieldBgHoverImageAttachment,
        fieldBgHoverImageRepeat,
        fieldBgHoverImageSize,

        fieldGlobalBoxShadowSwitcher,
        fieldGlobalBoxShadowValues,
        fieldGlobalHoverBoxShadowValues,
    } = attributes;

    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-field-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    /** Start load font */
    useEffect(() => {
        loadGoogleFont(
            labelFontFamily,
            inputFieldFontFamily,
        );
    }, [
        labelFontFamily,
        inputFieldFontFamily,
    ]);
    /** End load font */


    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = fieldOptions.findIndex(item => item.id === active.id);
            const newIndex = fieldOptions.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(fieldOptions, oldIndex, newIndex);
            setAttributes({ fieldOptions: updatedItems });
        }
    };

    const handleAddItem = () => {
        const uniqueId = `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newItem = {
            id: uniqueId,
            Title: `Option ${fieldOptions.length + 1}`
        };
        setAttributes({ fieldOptions: [...fieldOptions, newItem] });
    };

    const handleChangeItem = (id, key, value) => {
        const updatedItems = fieldOptions.map(item => {
            if (item.id === id) {
                return { ...item, [key]: value };
            }
            return item;
        });

        setAttributes({ fieldOptions: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems = fieldOptions.filter(item => item.id !== id);
        setAttributes({ fieldOptions: updatedItems });
    };

    const handleDuplicateItem = (id) => {
        const itemToDuplicate = fieldOptions.find(item => item.id === id);
        if (itemToDuplicate) {
            const uniqueId = `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            const newItem = { ...itemToDuplicate, id: uniqueId };
            setAttributes({ fieldOptions: [...fieldOptions, newItem] });
        }
    };


    // Label Margin Function
    const handleLabelMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (labelMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        labelMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        labelMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        labelMarginMobile: {
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
                    setAttributes({ labelMarginDesktop: { ...labelMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ labelMarginTablet: { ...labelMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ labelMarginMobile: { ...labelMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleLabelMarginCombineBtn = () => {
        setAttributes({ labelMarginLink: !labelMarginLink });
    }

    const handleLabelMarginUnitsHandler = (unit) => {
        setAttributes({
            labelMarginUnits: {
                ...labelMarginUnits,
                [deviceType]: unit
            }
        })
    }

    // Input Field Margin Function
    const handleInputFieldMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (inputFieldMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        inputFieldMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        inputFieldMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        inputFieldMarginMobile: {
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
                    setAttributes({ inputFieldMarginDesktop: { ...inputFieldMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ inputFieldMarginTablet: { ...inputFieldMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ inputFieldMarginMobile: { ...inputFieldMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }


    const handleInputFieldMarginCombineBtn = () => {
        setAttributes({ inputFieldMarginLink: !inputFieldMarginLink });
    }

    const handleInputFieldMarginUnitsHandler = (unit) => {
        setAttributes({
            inputFieldMarginUnits: {
                ...inputFieldMarginUnits,
                [deviceType]: unit
            }
        })
    }

    // Input Field Padding Function
    const handleInputFieldPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (inputFieldPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        inputFieldPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        inputFieldPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        inputFieldPaddingMobile: {
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
                    setAttributes({ inputFieldPaddingDesktop: { ...inputFieldPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ inputFieldPaddingTablet: { ...inputFieldPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ inputFieldPaddingMobile: { ...inputFieldPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleInputFieldPaddingCombineBtn = () => {
        setAttributes({ inputFieldPaddingLink: !inputFieldPaddingLink });
    }

    const handleInputFieldPaddingUnitsHandler = (unit) => {
        setAttributes({
            inputFieldPaddingUnits: {
                ...inputFieldPaddingUnits,
                [deviceType]: unit
            }
        })
    }


    // form content margin
    const handleFieldMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (fieldMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fieldMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fieldMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fieldMarginMobile: {
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
                    setAttributes({ fieldMarginDesktop: { ...fieldMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ fieldMarginTablet: { ...fieldMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ fieldMarginMobile: { ...fieldMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleFieldMarginCombineBtn = () => {
        setAttributes({ fieldMarginLink: !fieldMarginLink });
    }

    const handleFieldMarginUnitsHandler = (unit) => {
        setAttributes({
            fieldMarginUnits: {
                ...fieldMarginUnits,
                [deviceType]: unit
            }
        })
    }

    // form Padding Functionb
    const handleFieldPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (fieldPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fieldPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fieldPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fieldPaddingMobile: {
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
                    setAttributes({ fieldPaddingDesktop: { ...fieldPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ fieldPaddingTablet: { ...fieldPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ fieldPaddingMobile: { ...fieldPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleFieldPaddingCombineBtn = () => {
        setAttributes({ fieldPaddingLink: !fieldPaddingLink });
    }

    const handleFieldPaddingUnitsHandler = (unit) => {
        setAttributes({
            fieldPaddingUnits: {
                ...fieldPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    // form BorderWidth Function
    const handleFieldBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (fieldBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fieldBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fieldBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fieldBorderMobile: {
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
                    setAttributes({ fieldBorderDesktop: { ...fieldBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ fieldBorderTablet: { ...fieldBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ fieldBorderMobile: { ...fieldBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleFieldBorderCombineBtn = () => {
        setAttributes({ fieldBorderLink: !fieldBorderLink });
    }

    const handleFieldBorderUnitsHandler = (unit) => {
        setAttributes({
            fieldBorderUnits: {
                ...fieldBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // form BorderRadiusWidth Function
    const handleFieldBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (fieldBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fieldBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fieldBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fieldBorderRadiusMobile: {
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
                    setAttributes({ fieldBorderRadiusDesktop: { ...fieldBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ fieldBorderRadiusTablet: { ...fieldBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ fieldBorderRadiusMobile: { ...fieldBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleFieldBorderRadiusCombineBtn = () => {
        setAttributes({ fieldBorderRadiusLink: !fieldBorderRadiusLink });
    }

    const handleFieldBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            fieldBorderRadiusUnits: {
                ...fieldBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    // content BorderWidth Function
    const handleInputFieldBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (inputFieldBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        inputFieldBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        inputFieldBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        inputFieldBorderMobile: {
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
                    setAttributes({ inputFieldBorderDesktop: { ...inputFieldBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ inputFieldBorderTablet: { ...inputFieldBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ inputFieldBorderMobile: { ...inputFieldBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleInputFieldBorderCombineBtn = () => {
        setAttributes({ inputFieldBorderLink: !inputFieldBorderLink });
    }

    const handleInputFieldBorderUnitsHandler = (unit) => {
        setAttributes({
            inputFieldBorderUnits: {
                ...inputFieldBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // content BorderRadiusWidth Function
    const handleInputFieldBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (inputFieldBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        inputFieldBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        inputFieldBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        inputFieldBorderRadiusMobile: {
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
                    setAttributes({ inputFieldBorderRadiusDesktop: { ...inputFieldBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ inputFieldBorderRadiusTablet: { ...inputFieldBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ inputFieldBorderRadiusMobile: { ...inputFieldBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleInputFieldBorderRadiusCombineBtn = () => {
        setAttributes({ inputFieldBorderRadiusLink: !inputFieldBorderRadiusLink });
    }

    const handleInputFieldBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            inputFieldBorderRadiusUnits: {
                ...inputFieldBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }


    const mergeFieldLabelSwitcher = fieldLabelSwitcher !== null ? fieldLabelSwitcher : inheritedFieldLabelSwitcher;
    const mergeFieldIconSwitcher = fieldIconSwitcher !== null ? fieldIconSwitcher : inheritedFieldIconSwitcher;
    const mergeFieldRequiredSwitcher = fieldRequiredSwitcher !== null ? fieldRequiredSwitcher : inheritedFieldRequiredSwitcher;
    const mergeFieldRequiredSymbolSwitcher = fieldRequiredSymbolSwitcher !== null ? fieldRequiredSymbolSwitcher : inheritedFieldRequiredSymbolSwitcher;
    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody title={__("General", "frontis-forms")} initialOpen={true}>
                <ToggleControl
                    label={__("Show Label", "frontis-forms")}
                    checked={mergeFieldLabelSwitcher}
                    onChange={(value) => setAttributes({ fieldLabelSwitcher: value })}
                />
                <ToggleControl
                    label={__("Is It Required Field?", "frontis-forms")}
                    checked={mergeFieldRequiredSwitcher}
                    onChange={(value) => setAttributes({ fieldRequiredSwitcher: value })}
                />
                {mergeFieldRequiredSwitcher && (
                    <ToggleControl
                        label={__("Show Required Symbol", "frontis-forms")}
                        checked={mergeFieldRequiredSymbolSwitcher}
                        onChange={(value) => setAttributes({ fieldRequiredSymbolSwitcher: value })}
                    />
                )}
                {/* <ToggleControl
                    label={__("Show icon", "frontis-forms")}
                    checked={mergeFieldIconSwitcher}
                    onChange={(value) => setAttributes({ fieldIconSwitcher: value })}
                /> */}
            </PanelBody>

            <PanelBody
                title={__("Layout", "frontis-forms")}
                initialOpen={false}
            >
                <FrontisForms_Range
                    min={1}
                    max={inputFieldMaxWidthUnits[deviceType] !== 'px' ? 100 : 2000}
                    label={__("Max Width", "frontis-forms")}
                    rangeValue={inputFieldMaxWidth}
                    onChangeHandler={(value) => setAttributes({ inputFieldMaxWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ inputFieldMaxWidthUnits: value })}
                    deviceType={deviceType}
                    units={inputFieldMaxWidthUnits}
                    rangeStep={1}
                    resetFallbackValue={'100'}
                />

                <FrontisForms_Range
                    min={1}
                    max={inputFieldHeightUnits[deviceType] !== 'px' ? 100 : 2000}
                    label={__("Height", "frontis-forms")}
                    rangeValue={inputFieldHeight}
                    onChangeHandler={(value) => setAttributes({ inputFieldHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ inputFieldHeightUnits: value })}
                    deviceType={deviceType}
                    units={inputFieldHeightUnits}
                    rangeStep={1}
                    resetFallbackValue={'100'}
                />
            </PanelBody>

            <PanelBody title={__("Options", "frontis-forms")} initialOpen={false}>
                <div className="fb-feature-wrapper">
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext items={fieldOptions.map(item => item.id)}>
                            <ul className='dnd-items-wrapper'>
                                {fieldOptions.map((item, index) => (
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
                        <Button isPrimary onClick={handleAddItem}>
                            {__("Add Feature", "frontis-blocks")}
                        </Button>
                    </DndContext>
                </div>
            </PanelBody>
            <PanelBody title={__("Content", "frontis-forms")} initialOpen={false}>
                {mergeFieldLabelSwitcher && (
                    <TextControl
                        label={__('Field Label', 'frontis-forms')}
                        value={fieldLabel}
                        onChange={(value) => setAttributes({ fieldLabel: value })}
                    />
                )}
                {mergeFieldRequiredSwitcher && (
                    <TextareaControl
                        label={__('Required Message', 'frontis-forms')}
                        value={fieldRequiredText}
                        onChange={(value) => setAttributes({ fieldRequiredText: value })}
                        help={__('This message will be shown when the field is required', 'frontis-forms')}
                    />
                )}
                <TextControl
                    label={__('Default Value', 'frontis-forms')}
                    value={fieldDefaultValue}
                    onChange={(value) => setAttributes({ fieldDefaultValue: value })}
                    help={__('Leave empty if no default value is needed.', 'frontis-block')}
                />
                <TextControl
                    label={__('Custom Name Attribute', 'frontis-forms')}
                    value={fieldCustomNameAttribute}
                    onChange={(value) => setAttributes({ fieldCustomNameAttribute: value })}
                    help={__('Each name attribute must be unique to submit form data correctly. Leave the field blank if no custom name attribute is necessary.', 'frontis-block')}
                />
                {mergeFieldIconSwitcher && (
                    <BaseControl
                        label={__("Field Icon", "frontis-forms")}
                    >
                        <FBIconPicker
                            value={fieldIcon}
                            setIconHandler={(value) => setAttributes({ fieldIcon: value })}
                        />
                    </BaseControl>
                )}
            </PanelBody>
        </>
    );

    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>
            <PanelBody
                title={__("Labels", "frontis-forms")}
                initialOpen={false}
            >
                <FrontisForms_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={labelGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ labelGlobalTypographyData: value })}

                    globalTypoType={labelGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            labelGlobalTypoType: value,
                            labelGlobalTypoSwitcher: value === 'default' ? { ...labelGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...labelGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                        })
                    }}

                    globalTypoOption={labelGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ labelGlobalTypoOption: value })}

                    fontFamily={labelFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ labelFontFamily: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, fontFamily: value && false } })}

                    fontSize={labelFontSize}
                    onChangeFontSize={(value) => setAttributes({ labelFontSize: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, fontSize: value && false } })}

                    fontSizeUnits={labelFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ labelFontSizeUnits: value })}

                    fontWeight={labelFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ labelFontWeight: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, fontWeight: value && false } })}

                    fontStyle={labelFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ labelFontStyle: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, fontStyle: value && false } })}

                    textTransform={labelTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ labelTextTransform: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, textTransform: value && false } })}

                    textDecoration={labelTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ labelTextDecoration: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, textDecoration: value && false } })}

                    letterSpacing={labelLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ labelLetterSpacing: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, letterSpacing: value && false } })}

                    letterSpacingUnits={labelLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ labelLetterSpacingUnits: value })}

                    lineHeight={labelLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ labelLineHeight: value, labelGlobalTypoSwitcher: { ...labelGlobalTypoSwitcher, lineHeight: value && false } })}

                    lineHeightUnits={labelLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ labelLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FrontisForms_ColorControl
                    label={__("Color", "frontis-forms")}
                    globalColor={labelColor}
                    setGlobalColor={(value) => setAttributes({ labelColor: value === undefined ? '' : value })}
                />

                <FrontisForms_ColorControl
                    label={__("Required Color", "frontis-forms")}
                    globalColor={labelRequiredColor}
                    setGlobalColor={(value) => setAttributes({ labelRequiredColor: value === undefined ? '' : value })}
                />

                <FrontisForms_Spacing
                    label={__("Margin", "frontis-forms")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleLabelMarginUnitsHandler}
                    spacingUnits={labelMarginUnits}
                    spacingDesktop={labelMarginDesktop}
                    spacingTablet={labelMarginTablet}
                    spacingMobile={labelMarginMobile}
                    handleSpacingUnitHandler={handleLabelMarginUnitChange}
                    spacingCombineBtn={labelMarginLink}
                    spacingCombineBtnHandler={handleLabelMarginCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody
                title={__("Input Fields", "frontis-forms")}
                initialOpen={false}
            >
                <FrontisForms_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={inputFieldGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ inputFieldGlobalTypographyData: value })}

                    globalTypoType={inputFieldGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            inputFieldGlobalTypoType: value,
                            inputFieldGlobalTypoSwitcher: value === 'default' ? { ...inputFieldGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...inputFieldGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                        })
                    }}

                    globalTypoOption={inputFieldGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ inputFieldGlobalTypoOption: value })}

                    fontFamily={inputFieldFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ inputFieldFontFamily: value, inputFieldGlobalTypoSwitcher: { ...inputFieldGlobalTypoSwitcher, fontFamily: value && false } })}

                    fontSize={inputFieldFontSize}
                    onChangeFontSize={(value) => setAttributes({ inputFieldFontSize: value, inputFieldGlobalTypoSwitcher: { ...inputFieldGlobalTypoSwitcher, fontSize: value && false } })}

                    fontSizeUnits={inputFieldFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ inputFieldFontSizeUnits: value })}

                    fontWeight={inputFieldFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ inputFieldFontWeight: value, inputFieldGlobalTypoSwitcher: { ...inputFieldGlobalTypoSwitcher, fontWeight: value && false } })}

                    fontStyle={inputFieldFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ inputFieldFontStyle: value, inputFieldGlobalTypoSwitcher: { ...inputFieldGlobalTypoSwitcher, fontStyle: value && false } })}

                    textTransform={inputFieldTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ inputFieldTextTransform: value, inputFieldGlobalTypoSwitcher: { ...inputFieldGlobalTypoSwitcher, textTransform: value && false } })}

                    textDecoration={inputFieldTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ inputFieldTextDecoration: value, inputFieldGlobalTypoSwitcher: { ...inputFieldGlobalTypoSwitcher, textDecoration: value && false } })}

                    letterSpacing={inputFieldLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ inputFieldLetterSpacing: value, inputFieldGlobalTypoSwitcher: { ...inputFieldGlobalTypoSwitcher, letterSpacing: value && false } })}

                    letterSpacingUnits={inputFieldLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ inputFieldLetterSpacingUnits: value })}

                    lineHeight={inputFieldLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ inputFieldLineHeight: value, inputFieldGlobalTypoSwitcher: { ...inputFieldGlobalTypoSwitcher, lineHeight: value && false } })}

                    lineHeightUnits={inputFieldLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ inputFieldLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FrontisForms_SwitcherControl
                    label={__("Color", "frontis-forms")}
                    globalSwitcher={inputFieldColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ inputFieldColorSwitcher: value })}
                    options={[
                        { label: __('Normal', 'frontis-forms'), value: 'normal' },
                        { label: __('Focus', 'frontis-forms'), value: 'focus' },
                    ]}
                />

                {inputFieldColorSwitcher === 'normal' && (
                    <FrontisForms_ColorControl
                        label={__("Normal Color", "frontis-forms")}
                        globalColor={inputFieldColor}
                        setGlobalColor={(value) => setAttributes({ inputFieldColor: value === undefined ? '' : value })}
                    />
                )}

                {inputFieldColorSwitcher === 'focus' && (
                    <FrontisForms_ColorControl
                        label={__("Focus Color", "frontis-forms")}
                        globalColor={inputFieldFocusColor}
                        setGlobalColor={(value) => setAttributes({ inputFieldFocusColor: value === undefined ? '' : value })}
                    />
                )}

                <FrontisForms_SwitcherControl
                    label={__("Placeholder Color", "frontis-forms")}
                    globalSwitcher={inputFieldPlaceholderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ inputFieldPlaceholderColorSwitcher: value })}
                    options={[
                        { label: __('Normal', 'frontis-forms'), value: 'normal' },
                        { label: __('Focus', 'frontis-forms'), value: 'focus' },
                    ]}
                />

                {inputFieldPlaceholderColorSwitcher === 'normal' && (
                    <FrontisForms_ColorControl
                        label={__("Normal Color", "frontis-forms")}
                        globalColor={inputFieldPlaceholderColor}
                        setGlobalColor={(value) => setAttributes({ inputFieldPlaceholderColor: value === undefined ? '' : value })}
                    />
                )}

                {inputFieldPlaceholderColorSwitcher === 'focus' && (
                    <FrontisForms_ColorControl
                        label={__("Focus Color", "frontis-forms")}
                        globalColor={inputFieldPlaceholderFocusColor}
                        setGlobalColor={(value) => setAttributes({ inputFieldPlaceholderFocusColor: value === undefined ? '' : value })}
                    />
                )}

                <FrontisForms_BackgroundColorControl
                    label={__("Background Color", "frontis-forms")}
                    bgColorSwitcher={inputFieldBgColorSwitcher}
                    setBgColorSwitcher={(value) =>
                        setAttributes({ inputFieldBgColorSwitcher: value })
                    }
                    normalBackgroundType={inputFieldBgType}
                    setNormalBackgroundType={(value) =>
                        setAttributes({ inputFieldBgType: value })
                    }
                    normalClassicColor={inputFieldBgClassicColor}
                    setNormalClassicColor={(value) =>
                        setAttributes({ inputFieldBgClassicColor: value === undefined ? '' : value })
                    }
                    normalGradientColor={inputFieldBgGradientColor}
                    setNormalGradientColor={(value) =>
                        setAttributes({ inputFieldBgGradientColor: value === undefined ? null : value })
                    }
                    normalCustomGradientSwitcher={
                        inputFieldBgCustomGradientSwitcher
                    }
                    setNormalCustomGradientSwitcher={(value) =>
                        setAttributes({
                            inputFieldBgCustomGradientSwitcher: value,
                        })
                    }
                    normalCustomGradientInputValue={
                        inputFieldBgCustomGradientInputValue
                    }
                    setNormalCustomGradientInputValue={(value) =>
                        setAttributes({
                            inputFieldBgCustomGradientInputValue: value,
                        })
                    }
                    normalBackgroundImageUrl={inputFieldBgImageUrl}
                    setNormalBackgroundImageUrl={(value) =>
                        setAttributes({ inputFieldBgImageUrl: value })
                    }
                    normalBackgroundImageAlt={inputFieldBgImageAlt}
                    setNormalBackgroundImageAlt={(value) =>
                        setAttributes({ inputFieldBgImageAlt: value })
                    }
                    normalBackgroundImageID={inputFieldBgImageID}
                    setNormalBackgroundImageID={(value) =>
                        setAttributes({ inputFieldBgImageID: value })
                    }
                    normalBackgroundImagePosition={
                        inputFieldBgImagePosition
                    }
                    setNormalBackgroundImagePosition={(value) =>
                        setAttributes({
                            inputFieldBgImagePosition: value,
                        })
                    }
                    normalBackgroundImageAttachment={
                        inputFieldBgImageAttachment
                    }
                    setNormalBackgroundImageAttachment={(value) =>
                        setAttributes({
                            inputFieldBgImageAttachment: value,
                        })
                    }
                    normalBackgroundImageRepeat={
                        inputFieldBgImageRepeat
                    }
                    setNormalBackgroundImageRepeat={(value) =>
                        setAttributes({
                            inputFieldBgImageRepeat: value,
                        })
                    }
                    normalBackgroundImageSize={inputFieldBgImageSize}
                    setNormalBackgroundImageSize={(value) =>
                        setAttributes({ inputFieldBgImageSize: value })
                    }
                    hoverBackgroundType={inputFieldBgHoverType}
                    setHoverBackgroundType={(value) =>
                        setAttributes({ inputFieldBgHoverType: value })
                    }
                    hoverClassicColor={inputFieldBgHoverClassicColor}
                    setHoverClassicColor={(value) =>
                        setAttributes({ inputFieldBgHoverClassicColor: value === undefined ? '' : value })
                    }
                    hoverGradientColor={inputFieldBgHoverGradientColor}
                    setHoverGradientColor={(value) =>
                        setAttributes({ inputFieldBgHoverGradientColor: value === undefined ? null : value })
                    }
                    hoverCustomGradientSwitcher={
                        inputFieldBgHoverCustomGradientSwitcher
                    }
                    setHoverCustomGradientSwitcher={(value) =>
                        setAttributes({
                            inputFieldBgHoverCustomGradientSwitcher: value,
                        })
                    }
                    hoverCustomGradientInputValue={
                        inputFieldBgHoverCustomGradientInputValue
                    }
                    setHoverCustomGradientInputValue={(value) =>
                        setAttributes({
                            inputFieldBgHoverCustomGradientInputValue: value,
                        })
                    }
                    hoverBackgroundImageUrl={inputFieldBgHoverImageUrl}
                    setBgHoverImageUrl={(value) =>
                        setAttributes({ inputFieldBgHoverImageUrl: value })
                    }
                    hoverBackgroundImageAlt={inputFieldBgHoverImageAlt}
                    setBgHoverImageAlt={(value) =>
                        setAttributes({ inputFieldBgHoverImageAlt: value })
                    }
                    hoverBackgroundImageID={inputFieldBgHoverImageID}
                    setBgHoverImageID={(value) =>
                        setAttributes({ inputFieldBgHoverImageID: value })
                    }
                    hoverBackgroundImagePosition={
                        inputFieldBgHoverImagePosition
                    }
                    setBgHoverImagePosition={(value) =>
                        setAttributes({
                            inputFieldBgHoverImagePosition: value,
                        })
                    }
                    hoverBackgroundImageAttachment={
                        inputFieldBgHoverImageAttachment
                    }
                    setBgHoverImageAttachment={(value) =>
                        setAttributes({
                            inputFieldBgHoverImageAttachment: value,
                        })
                    }
                    hoverBackgroundImageRepeat={
                        inputFieldBgHoverImageRepeat
                    }
                    setBgHoverImageRepeat={(value) =>
                        setAttributes({
                            inputFieldBgHoverImageRepeat: value,
                        })
                    }
                    hoverBackgroundImageSize={inputFieldBgHoverImageSize}
                    setBgHoverImageSize={(value) =>
                        setAttributes({ inputFieldBgHoverImageSize: value })
                    }

                    options={[
                        { label: __('Normal', 'frontis-forms'), value: 'normal' },
                        { label: __('Focus', 'frontis-forms'), value: 'focus' },
                    ]}
                />

                <FrontisForms_SwitcherControl
                    label={__("Icon Color", "frontis-forms")}
                    globalSwitcher={inputFieldIconColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ inputFieldIconColorSwitcher: value })}
                    options={[
                        { label: __('Normal', 'frontis-forms'), value: 'normal' },
                        { label: __('Focus', 'frontis-forms'), value: 'focus' },
                    ]}
                />

                {inputFieldIconColorSwitcher === 'normal' && (
                    <FrontisForms_ColorControl
                        label={__("Normal Color", "frontis-forms")}
                        globalColor={inputFieldIconColor}
                        setGlobalColor={(value) => setAttributes({ inputFieldIconColor: value === undefined ? '' : value })}
                    />
                )}

                {inputFieldIconColorSwitcher === 'focus' && (
                    <FrontisForms_ColorControl
                        label={__("Focus Color", "frontis-forms")}
                        globalColor={inputFieldIconFocusColor}
                        setGlobalColor={(value) => setAttributes({ inputFieldIconFocusColor: value === undefined ? '' : value })}
                    />
                )}

                <FrontisForms_Spacing
                    label={__("Margin", "frontis-forms")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleInputFieldMarginUnitsHandler}
                    spacingUnits={inputFieldMarginUnits}
                    spacingDesktop={inputFieldMarginDesktop}
                    spacingTablet={inputFieldMarginTablet}
                    spacingMobile={inputFieldMarginMobile}
                    handleSpacingUnitHandler={handleInputFieldMarginUnitChange}
                    spacingCombineBtn={inputFieldMarginLink}
                    spacingCombineBtnHandler={handleInputFieldMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <FrontisForms_Spacing
                    label={__("Padding", "frontis-forms")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleInputFieldPaddingUnitsHandler}
                    spacingUnits={inputFieldPaddingUnits}
                    spacingDesktop={inputFieldPaddingDesktop}
                    spacingTablet={inputFieldPaddingTablet}
                    spacingMobile={inputFieldPaddingMobile}
                    handleSpacingUnitHandler={handleInputFieldPaddingUnitChange}
                    spacingCombineBtn={inputFieldPaddingLink}
                    spacingCombineBtnHandler={handleInputFieldPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                    label={__("Border Style", "frontis-forms")}
                    value={inputFieldBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ inputFieldBorder: value })}
                />

                <FrontisForms_SwitcherControl
                    label={__("Border Color", "frontis-forms")}
                    globalSwitcher={inputFieldBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ inputFieldBorderColorSwitcher: value })}
                    options={[
                        { label: __('Normal', 'frontis-forms'), value: 'normal' },
                        { label: __('Focus', 'frontis-forms'), value: 'focus' },
                    ]}
                />

                {inputFieldBorderColorSwitcher === 'normal' && (
                    <FrontisForms_ColorControl
                        label={__("Normal Color", "frontis-forms")}
                        globalColor={inputFieldBorderColor}
                        setGlobalColor={(value) => setAttributes({ inputFieldBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {inputFieldBorderColorSwitcher === 'focus' && (
                    <FrontisForms_ColorControl
                        label={__("Focus Color", "frontis-forms")}
                        globalColor={inputFieldBorderFocusColor}
                        setGlobalColor={(value) => setAttributes({ inputFieldBorderFocusColor: value === undefined ? '' : value })}
                    />
                )}

                <FrontisForms_Spacing
                    label={__("Border", "frontis-forms")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleInputFieldBorderUnitsHandler}
                    spacingUnits={inputFieldBorderUnits}
                    spacingDesktop={inputFieldBorderDesktop}
                    spacingTablet={inputFieldBorderTablet}
                    spacingMobile={inputFieldBorderMobile}
                    handleSpacingUnitHandler={handleInputFieldBorderUnitChange}
                    spacingCombineBtn={inputFieldBorderLink}
                    spacingCombineBtnHandler={handleInputFieldBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FrontisForms_Spacing
                    label={__("Border Radius", "frontis-forms")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleInputFieldBorderRadiusUnitsHandler}
                    spacingUnits={inputFieldBorderRadiusUnits}
                    spacingDesktop={inputFieldBorderRadiusDesktop}
                    spacingTablet={inputFieldBorderRadiusTablet}
                    spacingMobile={inputFieldBorderRadiusMobile}
                    handleSpacingUnitHandler={handleInputFieldBorderRadiusUnitChange}
                    spacingCombineBtn={inputFieldBorderRadiusLink}
                    spacingCombineBtnHandler={handleInputFieldBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FrontisForms_SwitcherControl
                    label={__("Box Shadow", "frontis-forms")}
                    globalSwitcher={inputFieldBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ inputFieldBoxShadowSwitcher: value })}
                    options={[
                        { label: __('Normal', 'frontis-forms'), value: 'normal' },
                        { label: __('Focus', 'frontis-forms'), value: 'focus' },
                    ]}
                />

                {inputFieldBoxShadowSwitcher === 'normal' && (
                    <FrontisForms_BoxShadowControl
                        label={__("Normal Shadow", "frontis-forms")}
                        onBoxShadowChange={(value) =>
                            setAttributes({ inputFieldBoxShadowValues: value })
                        }
                        initialShadowValue={inputFieldBoxShadowValues}
                        onBoxShadowStyleChange={(value) =>
                            setAttributes({
                                inputFieldBoxShadowCssValue: value,
                            })
                        }
                    />
                )}

                {inputFieldBoxShadowSwitcher === 'focus' && (
                    <FrontisForms_BoxShadowControl
                        label={__("Focus Shadow", "frontis-forms")}
                        onBoxShadowChange={(value) =>
                            setAttributes({ inputFieldBoxShadowFocusValues: value })
                        }
                        initialShadowValue={inputFieldBoxShadowFocusValues}
                        onBoxShadowStyleChange={(value) =>
                            setAttributes({
                                inputFieldBoxShadowFocusCssValue: value,
                            })
                        }
                    />
                )}
            </PanelBody>

            {mergeFieldIconSwitcher && (
                <PanelBody
                    title={__("Field Icons", "frontis-forms")}
                    initialOpen={false}
                >
                    <FrontisForms_Range
                        min={1}
                        max={inputFieldIconSizeUnits[deviceType] !== 'px' ? 100 : 100}
                        label={__("Icon Size", "frontis-forms")}
                        rangeValue={inputFieldIconSize}
                        onChangeHandler={(value) => setAttributes({ inputFieldIconSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ inputFieldIconSizeUnits: value })}
                        deviceType={deviceType}
                        units={inputFieldIconSizeUnits}
                        rangeStep={1}
                        resetFallbackValue={'24'}
                    />

                    <FrontisForms_Range
                        min={1}
                        max={inputFieldIconGapUnits[deviceType] !== 'px' ? 100 : 200}
                        label={__("Icon Gap", "frontis-forms")}
                        rangeValue={inputFieldIconGap}
                        onChangeHandler={(value) => setAttributes({ inputFieldIconGap: value })}
                        rangeUnitHandler={(value) => setAttributes({ inputFieldIconGapUnits: value })}
                        deviceType={deviceType}
                        units={inputFieldIconGapUnits}
                        rangeStep={1}
                        resetFallbackValue={''}
                    />
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
                        title={__("Layout", "frontis-forms")}
                        initialOpen={true}
                        className='fb-setting-layout-header'
                    >
                        <FrontisForms_Range
                            min={0}
                            max={10000000}
                            label={__("Z Index", "frontis-forms")}
                            rangeValue={fieldZIndex}
                            onChangeHandler={(value) => setAttributes({ fieldZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-forms")}
                            value={fieldOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ fieldOverflow: value })}
                        />

                        <FrontisForms_InputControl
                            label={__("CSS ID", "frontis-forms")}
                            value={fieldGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ fieldGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-forms")}
                        />

                        <FrontisForms_InputControl
                            label={__("CSS Class", "frontis-forms")}
                            value={fieldGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ fieldGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-forms")}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Padding & Margin", "frontis-forms")}
                        initialOpen={false}
                    >
                        <FrontisForms_Spacing
                            label={__("Margin", "frontis-forms")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleFieldMarginUnitsHandler}
                            spacingUnits={fieldMarginUnits}
                            spacingDesktop={fieldMarginDesktop}
                            spacingTablet={fieldMarginTablet}
                            spacingMobile={fieldMarginMobile}
                            handleSpacingUnitHandler={handleFieldMarginUnitChange}
                            spacingCombineBtn={fieldMarginLink}
                            spacingCombineBtnHandler={handleFieldMarginCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FrontisForms_Spacing
                            label={__("Padding", "frontis-forms")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleFieldPaddingUnitsHandler}
                            spacingUnits={fieldPaddingUnits}
                            spacingDesktop={fieldPaddingDesktop}
                            spacingTablet={fieldPaddingTablet}
                            spacingMobile={fieldPaddingMobile}
                            handleSpacingUnitHandler={handleFieldPaddingUnitChange}
                            spacingCombineBtn={fieldPaddingLink}
                            spacingCombineBtnHandler={handleFieldPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody
                        title="Background Color"
                        initialOpen={false}
                    >
                        <FrontisForms_BackgroundColorControl
                            bgColorSwitcher={fieldBgColorSwitcher}
                            setBgColorSwitcher={(value) =>
                                setAttributes({ fieldBgColorSwitcher: value })
                            }
                            normalBackgroundType={fieldBgType}
                            setNormalBackgroundType={(value) =>
                                setAttributes({ fieldBgType: value })
                            }
                            normalClassicColor={fieldBgClassicColor}
                            setNormalClassicColor={(value) =>
                                setAttributes({ fieldBgClassicColor: value === undefined ? '' : value })
                            }
                            normalGradientColor={fieldBgGradientColor}
                            setNormalGradientColor={(value) =>
                                setAttributes({ fieldBgGradientColor: value === undefined ? null : value })
                            }
                            normalCustomGradientSwitcher={fieldBgCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    fieldBgCustomGradientSwitcher: value,
                                })
                            }
                            normalCustomGradientInputValue={fieldBgCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) =>
                                setAttributes({
                                    fieldBgCustomGradientInputValue: value,
                                })
                            }
                            normalBackgroundImageUrl={fieldBgImageUrl}
                            setNormalBackgroundImageUrl={(value) =>
                                setAttributes({ fieldBgImageUrl: value })
                            }
                            normalBackgroundImageAlt={fieldBgImageAlt}
                            setNormalBackgroundImageAlt={(value) =>
                                setAttributes({ fieldBgImageAlt: value })
                            }
                            normalBackgroundImageID={fieldBgImageID}
                            setNormalBackgroundImageID={(value) =>
                                setAttributes({ fieldBgImageID: value })
                            }
                            normalBackgroundImagePosition={fieldBgImagePosition}
                            setNormalBackgroundImagePosition={(value) =>
                                setAttributes({
                                    fieldBgImagePosition: value,
                                })
                            }
                            normalBackgroundImageAttachment={fieldBgImageAttachment}
                            setNormalBackgroundImageAttachment={(value) =>
                                setAttributes({
                                    fieldBgImageAttachment: value,
                                })
                            }
                            normalBackgroundImageRepeat={fieldBgImageRepeat}
                            setNormalBackgroundImageRepeat={(value) =>
                                setAttributes({
                                    fieldBgImageRepeat: value,
                                })
                            }
                            normalBackgroundImageSize={fieldBgImageSize}
                            setNormalBackgroundImageSize={(value) =>
                                setAttributes({ fieldBgImageSize: value })
                            }
                            hoverBackgroundType={fieldBgHoverType}
                            setHoverBackgroundType={(value) =>
                                setAttributes({ fieldBgHoverType: value })
                            }
                            hoverClassicColor={fieldBgHoverClassicColor}
                            setHoverClassicColor={(value) =>
                                setAttributes({ fieldBgHoverClassicColor: value === undefined ? '' : value })
                            }
                            hoverGradientColor={fieldBgHoverGradientColor}
                            setHoverGradientColor={(value) =>
                                setAttributes({ fieldBgHoverGradientColor: value === undefined ? null : value })
                            }
                            hoverCustomGradientSwitcher={fieldBgHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    fieldBgHoverCustomGradientSwitcher: value,
                                })
                            }
                            hoverCustomGradientInputValue={fieldBgHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) =>
                                setAttributes({
                                    fieldBgHoverCustomGradientInputValue: value,
                                })
                            }
                            hoverBackgroundImageUrl={fieldBgHoverImageUrl}
                            setBgHoverImageUrl={(value) =>
                                setAttributes({ fieldBgHoverImageUrl: value })
                            }
                            hoverBackgroundImageAlt={fieldBgHoverImageAlt}
                            setBgHoverImageAlt={(value) =>
                                setAttributes({ fieldBgHoverImageAlt: value })
                            }
                            hoverBackgroundImageID={fieldBgHoverImageID}
                            setBgHoverImageID={(value) =>
                                setAttributes({ fieldBgHoverImageID: value })
                            }
                            hoverBackgroundImagePosition={fieldBgHoverImagePosition}
                            setBgHoverImagePosition={(value) =>
                                setAttributes({
                                    fieldBgHoverImagePosition: value,
                                })
                            }
                            hoverBackgroundImageAttachment={fieldBgHoverImageAttachment}
                            setBgHoverImageAttachment={(value) =>
                                setAttributes({
                                    fieldBgHoverImageAttachment: value,
                                })
                            }
                            hoverBackgroundImageRepeat={fieldBgHoverImageRepeat}
                            setBgHoverImageRepeat={(value) =>
                                setAttributes({
                                    fieldBgHoverImageRepeat: value,
                                })
                            }
                            hoverBackgroundImageSize={fieldBgHoverImageSize}
                            setBgHoverImageSize={(value) =>
                                setAttributes({ fieldBgHoverImageSize: value })
                            }
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Border & Border Radius", "frontis-forms")}
                        initialOpen={false}
                        className="fb-setting-border-setting-wrapper"
                    >
                        <SelectControl
                            label={__("Border Style", "frontis-forms")}
                            value={fieldBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ fieldBorder: value })}
                        />

                        <FrontisForms_SwitcherControl
                            label={__("Border Color", "frontis-forms")}
                            globalSwitcher={fieldBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ fieldBorderColorSwitcher: value })}
                        />

                        {fieldBorderColorSwitcher === 'normal' && (
                            <FrontisForms_ColorControl
                                label={__("Normal Color", "frontis-forms")}
                                globalColor={fieldBorderColor}
                                setGlobalColor={(value) => setAttributes({ fieldBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {fieldBorderColorSwitcher === 'hover' && (
                            <FrontisForms_ColorControl
                                label={__("Hover Color", "frontis-forms")}
                                globalColor={fieldBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ fieldBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FrontisForms_Spacing
                            label={__("Border", "frontis-forms")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleFieldBorderUnitsHandler}
                            spacingUnits={fieldBorderUnits}
                            spacingDesktop={fieldBorderDesktop}
                            spacingTablet={fieldBorderTablet}
                            spacingMobile={fieldBorderMobile}
                            handleSpacingUnitHandler={handleFieldBorderUnitChange}
                            spacingCombineBtn={fieldBorderLink}
                            spacingCombineBtnHandler={handleFieldBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FrontisForms_Spacing
                            label={__("Border Radius", "frontis-forms")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleFieldBorderRadiusUnitsHandler}
                            spacingUnits={fieldBorderRadiusUnits}
                            spacingDesktop={fieldBorderRadiusDesktop}
                            spacingTablet={fieldBorderRadiusTablet}
                            spacingMobile={fieldBorderRadiusMobile}
                            handleSpacingUnitHandler={handleFieldBorderRadiusUnitChange}
                            spacingCombineBtn={fieldBorderRadiusLink}
                            spacingCombineBtnHandler={handleFieldBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FrontisForms_SwitcherControl
                            label={__("Box Shadow", "frontis-forms")}
                            globalSwitcher={fieldGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ fieldGlobalBoxShadowSwitcher: value })}
                        />

                        {fieldGlobalBoxShadowSwitcher === 'normal' && (
                            <FrontisForms_BoxShadowControl
                                label={__("Normal Shadow", "frontis-forms")}
                                onBoxShadowChange={(value) =>
                                    setAttributes({ fieldGlobalBoxShadowValues: value })
                                }
                                initialShadowValue={fieldGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) =>
                                    setAttributes({
                                        fieldGlobalBoxShadowCssValue: value,
                                    })
                                }
                            />
                        )}

                        {fieldGlobalBoxShadowSwitcher === 'hover' && (
                            <FrontisForms_BoxShadowControl
                                label={__("Hover Shadow", "frontis-forms")}
                                onBoxShadowChange={(value) =>
                                    setAttributes({ fieldGlobalHoverBoxShadowValues: value })
                                }
                                initialShadowValue={fieldGlobalHoverBoxShadowValues}
                                onBoxShadowStyleChange={(value) =>
                                    setAttributes({
                                        fieldGlobalHoverBoxShadowCssValue: value,
                                    })
                                }
                            />
                        )}
                    </PanelBody>
                </div>
            </div>
        </>
    );

    return (
        <>
            <FrontisForms_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
};

export default Inspector;
