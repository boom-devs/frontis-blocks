/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
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
import { InspectorControls } from '@wordpress/block-editor';
import { BORDER_STYLES, FIELD_TYPES, MEDIA_TYPES } from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from "../../components/spacing";
import { useEffect, useMemo } from "@wordpress/element";
import FB_Range from "../../components/range";
import FB_BackgroundImageControl from "../../components/background-image-control";
import FB_SwitcherControl from "../../components/switcher-control";
import FB_ColorControl from "../../components/color-control";
import FB_InputControl from "@Components/input-control";
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_InspectorControls from '@Components/InspectorControls';


const Inspector = ({ attributes, setAttributes, clientId }) => {
    const { 
        blockID,
        parentBlockID,
        // deviceType,

        // general
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

        // layout
        fieldWidth,
        fieldMinHeight,


        inheritedFieldType,
        inheritedFieldIconSwitcher,
        inheritedFieldLabelSwitcher,
        inheritedFieldLabel,
        inheritedFieldPlaceholderSwitcher,
        inheritedFieldPlaceholder,
        inheritedFieldRequiredSwitcher,
        inheritedFieldRequiredSymbolSwitcher,
        inheritedFieldRequiredText,


        // Accordion Item Advance
        accordionItemZIndex,
        accordionItemPaddingUnits,
        accordionItemDesktopPadding,
        accordionItemTabPadding,
        accordionItemMobilePadding,
        accordionItemPaddingLink,
        accordionItemMarginUnits,
        accordionItemDesktopMargin,
        accordionItemTabMargin,
        accordionItemMobileMargin,
        accordionItemMarginLink,

        accordionItemDesktopSwitcher,
        accordionItemTabletSwitcher,
        accordionItemMobileSwitcher,

        accordionItemCustomCSS,
        accordionItemGlobalWraperID,
        accordionItemGlobalWraperClass,
    } = attributes;

    const deviceType= useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-accordion-item-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const titlePfIconHandler = (IconName) => {
        setAttributes({titlePrefixIcon: IconName})
    }
    const titleSfIconHandler = (IconName) => {
        setAttributes({titleSuffixIcon: IconName})
    }
    
    // accordionItem content margin
    const handleAccordionItemMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( accordionItemMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        accordionItemDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        accordionItemTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        accordionItemMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {accordionItemDesktopMargin: {...accordionItemDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {accordionItemTabMargin: {...accordionItemTabMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {accordionItemMobileMargin: {...accordionItemMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    
    }
    
    const handleAccordionItemMarginCombineBtn = () => {
        setAttributes( {accordionItemMarginLink: !accordionItemMarginLink} );
    }
    
    const handleAccordionItemMarginUnitsHandler = (unit) => {
        setAttributes( {
            accordionItemMarginUnits: {
                ...accordionItemMarginUnits,
                [deviceType]: unit
            }
        })
    }
    
    const accordionItemMarginDesktopWidth = `${accordionItemDesktopMargin?.top}${accordionItemMarginUnits[deviceType]} ${accordionItemDesktopMargin?.right}${accordionItemMarginUnits[deviceType]} ${accordionItemDesktopMargin?.bottom}${accordionItemMarginUnits[deviceType]} ${accordionItemDesktopMargin?.left}${accordionItemMarginUnits[deviceType]}`;
    const accordionItemMarginTabletWidth = `${accordionItemTabMargin?.top}${accordionItemMarginUnits[deviceType]} ${accordionItemTabMargin?.right}${accordionItemMarginUnits[deviceType]} ${accordionItemTabMargin?.bottom}${accordionItemMarginUnits[deviceType]} ${accordionItemTabMargin?.left}${accordionItemMarginUnits[deviceType]}`;
    const accordionItemMarginMobileWidth = `${accordionItemMobileMargin?.top}${accordionItemMarginUnits[deviceType]} ${accordionItemMobileMargin?.right}${accordionItemMarginUnits[deviceType]} ${accordionItemMobileMargin?.bottom}${accordionItemMarginUnits[deviceType]} ${accordionItemMobileMargin?.left}${accordionItemMarginUnits[deviceType]}`;
    
    // accordionItem Padding Functionb
    const handleAccordionItemPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( accordionItemPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        accordionItemDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        accordionItemTabPadding: {
                            top: value,
                            right: value,	
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        accordionItemMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {accordionItemDesktopPadding: {...accordionItemDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {accordionItemTabPadding: {...accordionItemTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {accordionItemMobilePadding: {...accordionItemMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    
    }
    
    const handleAccordionItemPaddingCombineBtn = () => {
        setAttributes( {accordionItemPaddingLink: !accordionItemPaddingLink} );
    }
    
    const handleAccordionItemPaddingUnitsHandler = (unit) => {
        setAttributes( {
            accordionItemPaddingUnits: {
                ...accordionItemPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    
    const accordionItemPaddingDesktopWidth = `${accordionItemDesktopPadding?.top}${accordionItemPaddingUnits[deviceType]} ${accordionItemDesktopPadding?.right}${accordionItemPaddingUnits[deviceType]} ${accordionItemDesktopPadding?.bottom}${accordionItemPaddingUnits[deviceType]} ${accordionItemDesktopPadding?.left}${accordionItemPaddingUnits[deviceType]}`;
    const accordionItemPaddingTabletWidth = `${accordionItemTabPadding?.top}${accordionItemPaddingUnits[deviceType]} ${accordionItemTabPadding?.right}${accordionItemPaddingUnits[deviceType]} ${accordionItemTabPadding?.bottom}${accordionItemPaddingUnits[deviceType]} ${accordionItemTabPadding?.left}${accordionItemPaddingUnits[deviceType]}`;
    const accordionItemPaddingMobileWidth = `${accordionItemMobilePadding?.top}${accordionItemPaddingUnits[deviceType]} ${accordionItemMobilePadding?.right}${accordionItemPaddingUnits[deviceType]} ${accordionItemMobilePadding?.bottom}${accordionItemPaddingUnits[deviceType]} ${accordionItemMobilePadding?.left}${accordionItemPaddingUnits[deviceType]}`;

    const fbAccordionItemStyle = useMemo(
        () => `
        .fb-accordion-item-main-wrapper.${blockID} {
            position: relative;
            ${accordionItemZIndex?.Desktop ? `z-index: ${accordionItemZIndex?.Desktop};` : ''}
            transition: all 0.3s ease-in-out;
        }
        
          .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
            ${accordionItemPaddingDesktopWidth && accordionItemDesktopPadding?.top ? `padding: ${accordionItemPaddingDesktopWidth};` : ''}
            ${accordionItemMarginDesktopWidth && accordionItemDesktopMargin?.top ? `margin: ${accordionItemMarginDesktopWidth};` : ''}
            transition: all 0.3s ease-in-out;
          }
      
          .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .block-editor-block-list__layout {
            display: block;
          }
      
          .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .block-editor-block-list__layout p {
            margin: 0;
          }
      
          @media only screen and (max-width: 1024px) {
            .fb-accordion-item-main-wrapper.${blockID} {
                ${accordionItemZIndex?.Tablet ? `z-index: ${accordionItemZIndex?.Tablet};` : ''}
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
              ${accordionItemPaddingTabletWidth && accordionItemTabPadding?.top ? `padding: ${accordionItemPaddingTabletWidth};` : ''}
              ${accordionItemMarginTabletWidth && accordionItemTabMargin?.top ? `margin: ${accordionItemMarginTabletWidth};` : ''}
            }
          }
      
          @media only screen and (max-width: 767px) {
            .fb-accordion-item-main-wrapper.${blockID} {
                ${accordionItemZIndex?.Mobile ? `z-index: ${accordionItemZIndex?.Mobile};` : ''}
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
              ${accordionItemPaddingMobileWidth && accordionItemMobilePadding?.top ? `padding: ${accordionItemPaddingMobileWidth};` : ''}
              ${accordionItemMarginMobileWidth && accordionItemMobileMargin?.top ? `margin: ${accordionItemMarginMobileWidth};` : ''}
            }
          }
        `,
        [
            blockID,
            deviceType,
    
            // Accordion Item Advance
            accordionItemZIndex,
            accordionItemPaddingUnits,
            accordionItemDesktopPadding,
            accordionItemTabPadding,
            accordionItemMobilePadding,
            accordionItemMarginUnits,
            accordionItemDesktopMargin,
            accordionItemTabMargin,
            accordionItemMobileMargin,
        ]
      );
      
      const customCss = getCustomCss(accordionItemCustomCSS, `.${blockID}`);

      useEffect(() => {
        setAttributes({
          blockStyle: `${fbAccordionItemStyle} ${customCss}`.replace(/\s+/g, ' ').trim(),
        });
      }, [fbAccordionItemStyle, customCss]);

      const editorStyle = `${fbAccordionItemStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

      const fbAccordionItemStyleTwo = useMemo(() => `
        .fb-accordion-item-main-wrapper.${blockID} {
            position: relative;
            display: block;
            overflow: hidden;
            ${accordionItemZIndex?.Desktop ? `z-index: ${accordionItemZIndex?.Desktop};` : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
            display: none;
            margin: 0;
            padding: 0;
            height: 0;
            position: absolute;
            visibility: hidden;
            transition: all 0.3s ease-in-out;
        }
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper.active {
            display: block;
            height: auto;
            position: static;
            visibility: visible;
            transition: all 0.3s ease-in-out;
        }
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
            ${accordionItemPaddingDesktopWidth !== 'px px px px' ? `padding: ${accordionItemPaddingDesktopWidth};` : ''}
            ${accordionItemMarginDesktopWidth !== 'px px px px' ? `margin: ${accordionItemMarginDesktopWidth};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content p {
            margin: 0;
            transition: all 0.3s ease-in-out;
        }


        @media only screen and (max-width: 1024px) {
            .fb-accordion-item-main-wrapper.${blockID} {
                ${accordionItemZIndex?.Tablet ? `z-index: ${accordionItemZIndex?.Tablet};` : ''}
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
                ${accordionItemPaddingTabletWidth !== 'px px px px' ? `padding: ${accordionItemPaddingTabletWidth};` : ''}
                ${accordionItemMarginTabletWidth !== 'px px px px' ? `margin: ${accordionItemMarginTabletWidth};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-accordion-item-main-wrapper.${blockID} {
                ${accordionItemZIndex?.Mobile ? `z-index: ${accordionItemZIndex?.Mobile};` : ''}
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
                ${accordionItemPaddingMobileWidth !== 'px px px px' ? `padding: ${accordionItemPaddingMobileWidth};` : ''}
                ${accordionItemMarginMobileWidth !== 'px px px px' ? `margin: ${accordionItemMarginMobileWidth};` : ''}
            }
        }
        `, [
            blockID,
            deviceType,
    
            // Accordion Item Advance
            accordionItemZIndex,
            accordionItemPaddingUnits,
            accordionItemDesktopPadding,
            accordionItemTabPadding,
            accordionItemMobilePadding,
            accordionItemMarginUnits,
            accordionItemDesktopMargin,
            accordionItemTabMargin,
            accordionItemMobileMargin,
        ]);

        useEffect(() => {
            setAttributes({
                blockStyleTwo: `${fbAccordionItemStyleTwo} ${customCss}`.replace(/\s+/g, ' ').trim(),
            });
        }, [fbAccordionItemStyleTwo, customCss]);

    const mergeFieldLabelSwitcher = fieldLabelSwitcher ? fieldLabelSwitcher : inheritedFieldLabelSwitcher;
    const mergeFieldLabel = fieldLabel ? fieldLabel : inheritedFieldLabel;
    const mergeFieldPlaceholderSwitcher = fieldPlaceholderSwitcher ? fieldPlaceholderSwitcher : inheritedFieldPlaceholderSwitcher;
    const mergeFieldPlaceholder = fieldPlaceholder ? fieldPlaceholder : inheritedFieldPlaceholder;
    const mergeFieldIconSwitcher = fieldIconSwitcher ? fieldIconSwitcher : inheritedFieldIconSwitcher;
    const mergeFieldRequiredSwitcher = fieldRequiredSwitcher ? fieldRequiredSwitcher : inheritedFieldRequiredSwitcher;
    const mergeFieldRequiredSymbolSwitcher = fieldRequiredSymbolSwitcher ? fieldRequiredSymbolSwitcher : inheritedFieldRequiredSymbolSwitcher;
    const mergeFieldRequiredText = fieldRequiredText ? fieldRequiredText : inheritedFieldRequiredText;
    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
                <SelectControl
                    label={__("Field Type", "frontis-blocks")}
                    value={fieldType}
                    options={FIELD_TYPES}
                    onChange={(value) => setAttributes({ fieldType: value })}
                />
                <ToggleControl
                    label={__("Show Label", "frontis-blocks")}
                    checked={mergeFieldLabelSwitcher}
                    onChange={(value) => setAttributes({ fieldLabelSwitcher: value })}
                />
                <ToggleControl
                    label={__("Is It Required Field?", "frontis-blocks")}
                    checked={mergeFieldRequiredSwitcher}
                    onChange={(value) => setAttributes({ fieldRequiredSwitcher: value })}
                />
                {mergeFieldRequiredSwitcher && (
                    <ToggleControl
                        label={__("Show Required Symbol", "frontis-blocks")}
                        checked={mergeFieldRequiredSymbolSwitcher}
                        onChange={(value) => setAttributes({ fieldRequiredSymbolSwitcher: value })}
                    />
                )}
                <ToggleControl
                    label={__("Show icon", "frontis-blocks")}
                    checked={mergeFieldIconSwitcher}
                    onChange={(value) => setAttributes({ fieldIconSwitcher: value })}
                />
            </PanelBody>

            <PanelBody title={__("Content", "frontis-blocks")} initialOpen={false}>
                <TextControl
                    label={__('Field Label', 'frontis-blocks')}
                    value={mergeFieldLabel}
                    onChange={(value) => setAttributes({ fieldLabel: value })}
                />
                <TextControl
                    label={__('Placeholder', 'frontis-blocks')}
                    value={mergeFieldPlaceholder}
                    onChange={(value) => setAttributes({ fieldPlaceholder: value })}
                />
                <TextareaControl
                    label={__('Required Message', 'frontis-blocks')}
                    value={mergeFieldRequiredText}
                    onChange={(value) => setAttributes({ fieldRequiredText: value })}
                    help={__('This message will be shown when the field is required', 'frontis-blocks')}
                />
                <TextControl
                    label={__('Default Value', 'frontis-blocks')}
                    value={fieldDefaultValue}
                    onChange={(value) => setAttributes({ fieldDefaultValue: value })}
                    help={__('Leave empty if no default value is needed.', 'frontis-block')}
                />
                <TextControl
                    label={__('Custom Name Attribute', 'frontis-blocks')}
                    value={fieldCustomNameAttribute}
                    onChange={(value) => setAttributes({ fieldCustomNameAttribute: value })}
                    help={__('Each name attribute must be unique to submit form data correctly. Leave the field blank if no custom name attribute is necessary.', 'frontis-block')}
                />
                {fieldIconSwitcher || inheritedFieldIconSwitcher ? (
                    <BaseControl
                        label={__("Field Icon", "frontis-blocks")}
                    >
                        <FBIconPicker
                            value={fieldIcon} 
                            setIconHandler={(value) => setAttributes({ fieldIcon: value })} 
                        />
                    </BaseControl>
                ) : null}
            </PanelBody>
        </>
    );

    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>
            
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
                            rangeValue={accordionItemZIndex}
                            onChangeHandler={(value) => setAttributes({ accordionItemZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={accordionItemGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ accordionItemGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={accordionItemGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ accordionItemGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Padding & Margin", "frontis-blocks")}
                        initialOpen={true}
                    >
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleAccordionItemMarginUnitsHandler}
                            spacingUnits={accordionItemMarginUnits}
                            spacingDesktop={accordionItemDesktopMargin}
                            spacingTablet={accordionItemTabMargin}
                            spacingMobile={accordionItemMobileMargin}
                            handleSpacingUnitHandler={handleAccordionItemMarginUnitChange}
                            spacingCombineBtn={accordionItemMarginLink}
                            spacingCombineBtnHandler={handleAccordionItemMarginCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing 
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleAccordionItemPaddingUnitsHandler}
                            spacingUnits={accordionItemPaddingUnits}
                            spacingDesktop={accordionItemDesktopPadding}
                            spacingTablet={accordionItemTabPadding}
                            spacingMobile={accordionItemMobilePadding}
                            handleSpacingUnitHandler={handleAccordionItemPaddingUnitChange}
                            spacingCombineBtn={accordionItemPaddingLink}
                            spacingCombineBtnHandler={handleAccordionItemPaddingCombineBtn}
                            setAttributes={setAttributes}
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
                            checked={accordionItemDesktopSwitcher}
                            onChange={(value) => setAttributes({ accordionItemDesktopSwitcher: value })}
                        />
                        <ToggleControl
                            label={__("Hide on Tablet", "frontis-blocks")}
                            className="fb-setting-responsive-control"
                            checked={accordionItemTabletSwitcher}
                            onChange={(value) => setAttributes({ accordionItemTabletSwitcher: value })}
                        />
                        <ToggleControl
                            label={__("Hide on Mobile", "frontis-blocks")}
                            className="fb-setting-responsive-control"
                            checked={accordionItemMobileSwitcher}
                            onChange={(value) => setAttributes({ accordionItemMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor  
                            value={accordionItemCustomCSS} 
                            onChangeValue={(value) => setAttributes({ accordionItemCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
        </>
    );

    return (
        <>
        <style>
            {`
                ${editorStyle}
            `}
        </style>

        <FB_InspectorControls
            generalControls={generalControls}
            styleControls={styleControls}
            advancedControls={advancedControls}
        />
        </>
    );
};

export default Inspector;
