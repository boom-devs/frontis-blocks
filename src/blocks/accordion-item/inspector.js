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
} from "@wordpress/components";
import { InspectorControls } from '@wordpress/block-editor';
import { BORDER_STYLES, MEDIA_TYPES } from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from "../../components/spacing";
import { useEffect, useMemo } from "@wordpress/element";
import FB_Range from "../../components/range";
import FB_ImageControl from "../../components/image-control";
import FB_SwitcherControl from "../../components/switcher-control";
import FB_ColorControl from "../../components/color-control";


const Inspector = ({ attributes, setAttributes, clientId }) => {
    const { 
        blockID,
		parentBlockID,
        deviceType,
        clickable,

        title,
        titlePrefixType,
        titlePrefixIcon,
        titlePrefixImgUrl,
        titlePrefixImgAlt,
        titlePrefixImgID,
        titlePrefixImgPosition,
        titlePrefixImgAttachment,
        titlePrefixImgRepeat,
        titlePrefixImgSize,

        titleSuffixType,
        titleSuffixIcon,
        titleSuffixImgUrl,
        titleSuffixImgAlt,
        titleSuffixImgID,
        titleSuffixImgPosition,
        titleSuffixImgAttachment,
        titleSuffixImgRepeat,
        titleSuffixImgSize,

        titlePrefixColorSwitcher,
        titlePrefixColor,
        titlePrefixHoverColor,

        titleSuffixColorSwitcher,
        titleSuffixColor,
        titleSuffixHoverColor,

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
        accordionItemMobileSwitcher
    } = attributes;


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
	
	const accordionItemMarginDesktopWidth = `${accordionItemDesktopMargin.top}${accordionItemMarginUnits[deviceType]} ${accordionItemDesktopMargin.right}${accordionItemMarginUnits[deviceType]} ${accordionItemDesktopMargin.bottom}${accordionItemMarginUnits[deviceType]} ${accordionItemDesktopMargin.left}${accordionItemMarginUnits[deviceType]}`;
	const accordionItemMarginTabletWidth = `${accordionItemTabMargin.top}${accordionItemMarginUnits[deviceType]} ${accordionItemTabMargin.right}${accordionItemMarginUnits[deviceType]} ${accordionItemTabMargin.bottom}${accordionItemMarginUnits[deviceType]} ${accordionItemTabMargin.left}${accordionItemMarginUnits[deviceType]}`;
	const accordionItemMarginMobileWidth = `${accordionItemMobileMargin.top}${accordionItemMarginUnits[deviceType]} ${accordionItemMobileMargin.right}${accordionItemMarginUnits[deviceType]} ${accordionItemMobileMargin.bottom}${accordionItemMarginUnits[deviceType]} ${accordionItemMobileMargin.left}${accordionItemMarginUnits[deviceType]}`;
	
	
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
	
	const accordionItemPaddingDesktopWidth = `${accordionItemDesktopPadding.top}${accordionItemPaddingUnits[deviceType]} ${accordionItemDesktopPadding.right}${accordionItemPaddingUnits[deviceType]} ${accordionItemDesktopPadding.bottom}${accordionItemPaddingUnits[deviceType]} ${accordionItemDesktopPadding.left}${accordionItemPaddingUnits[deviceType]}`;
	const accordionItemPaddingTabletWidth = `${accordionItemTabPadding.top}${accordionItemPaddingUnits[deviceType]} ${accordionItemTabPadding.right}${accordionItemPaddingUnits[deviceType]} ${accordionItemTabPadding.bottom}${accordionItemPaddingUnits[deviceType]} ${accordionItemTabPadding.left}${accordionItemPaddingUnits[deviceType]}`;
	const accordionItemPaddingMobileWidth = `${accordionItemMobilePadding.top}${accordionItemPaddingUnits[deviceType]} ${accordionItemMobilePadding.right}${accordionItemPaddingUnits[deviceType]} ${accordionItemMobilePadding.bottom}${accordionItemPaddingUnits[deviceType]} ${accordionItemMobilePadding.left}${accordionItemPaddingUnits[deviceType]}`;
	
	
	const fbAccordionItemStyle = useMemo(
		() => `
		.fb-accordion-item-main-wrapper.${blockID} {
			position: relative;
			${accordionItemZIndex !== undefined ? `z-index: ${accordionItemZIndex};` : ''}
		}
		
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
			${accordionItemPaddingDesktopWidth !== undefined ? `padding: ${accordionItemPaddingDesktopWidth};` : ''}
			${accordionItemMarginDesktopWidth !== undefined ? `margin: ${accordionItemMarginDesktopWidth};` : ''}
			transition: all 0.3s ease-in-out;
		  }
	  
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .block-editor-block-list__layout {
			display: block;
		  }
	  
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .block-editor-block-list__layout p {
			margin: 0;
		  }
	  
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
			${titlePrefixColor !== undefined ? `fill: ${titlePrefixColor};` : ''}
		  }
	  
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
			${titleSuffixColor !== undefined ? `fill: ${titleSuffixColor};` : ''}
		  }
	  
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-prefix {
			${titlePrefixHoverColor !== undefined ? `fill: ${titlePrefixHoverColor};` : ''}
		  }
	  
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-suffix {
			${titleSuffixHoverColor !== undefined ? `fill: ${titleSuffixHoverColor};` : ''}
		  }
	  
		  @media only screen and (max-width: 1024px) {
			.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
			  ${accordionItemPaddingTabletWidth !== undefined ? `padding: ${accordionItemPaddingTabletWidth};` : ''}
			  ${accordionItemMarginTabletWidth !== undefined ? `margin: ${accordionItemMarginTabletWidth};` : ''}
			}
		  }
	  
		  @media only screen and (max-width: 767px) {
			.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
			  ${accordionItemPaddingMobileWidth !== undefined ? `padding: ${accordionItemPaddingMobileWidth};` : ''}
			  ${accordionItemMarginMobileWidth !== undefined ? `margin: ${accordionItemMarginMobileWidth};` : ''}
			}
		  }
		`,
		[
            blockID,
            deviceType,
    
            titlePrefixColorSwitcher,
            titlePrefixColor,
            titlePrefixHoverColor,
    
            titleSuffixColorSwitcher,
            titleSuffixColor,
            titleSuffixHoverColor,
    
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
	  
	  useEffect(() => {
		setAttributes({
		  blockStyle: fbAccordionItemStyle.replace(/\s+/g, ' ').trim(),
		});
	  }, [fbAccordionItemStyle]);

	  const editorStyle = fbAccordionItemStyle.replace(/\s+/g, ' ').trim();

	  const fbAccordionItemStyleTwo = useMemo(() => `
		.fb-accordion-item-main-wrapper.${blockID} {
			position: relative;
			display: block;
			overflow: hidden;
			${accordionItemZIndex.Desktop !== undefined ? `z-index: ${accordionItemZIndex.Desktop};` : ''}
		}

		.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
			margin: 0;
			padding: 0;
			transform-origin: top;
			transform: scaleY(0);
			height: 0;
			visibility: hidden;
			opacity: 0;
            font-size: 0;
			transition: all 0.3s ease-in-out;
		}
		.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper.active {
			height: unset;
			visibility: visible;
			transform: scaleY(1);
			opacity: 1;
            font-size: unset;
            transition: all 0.3s ease-in-out;
		}
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
            ${accordionItemPaddingDesktopWidth !== undefined ? `padding: ${accordionItemPaddingDesktopWidth};` : ''}
			${accordionItemMarginDesktopWidth !== undefined ? `margin: ${accordionItemMarginDesktopWidth};` : ''}
		}

		

		.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
			${titlePrefixColor ? `fill: ${titlePrefixColor};` : ''}
		}

		.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-prefix {
			${titlePrefixHoverColor ? `fill: ${titlePrefixHoverColor};` : ''}
		}

		.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
			${titleSuffixColor ? `fill: ${titleSuffixColor};` : ''}
		}

		.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-suffix {
			${titleSuffixHoverColor ? `fill: ${titleSuffixHoverColor};` : ''}
		}

		@media only screen and (max-width: 1024px) {
            .fb-accordion-item-main-wrapper.${blockID} {
                ${accordionItemZIndex.Tablet !== undefined ? `z-index: ${accordionItemZIndex.Tablet};` : ''}
            }
			.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
				${accordionItemPaddingTabletWidth !== undefined ? `padding: ${accordionItemPaddingTabletWidth};` : ''}
				${accordionItemMarginTabletWidth !== undefined ? `margin: ${accordionItemMarginTabletWidth};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
            .fb-accordion-item-main-wrapper.${blockID} {
                ${accordionItemZIndex.Mobile !== undefined ? `z-index: ${accordionItemZIndex.Mobile};` : ''}
            }
			.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
				${accordionItemPaddingMobileWidth !== undefined ? `padding: ${accordionItemPaddingMobileWidth};` : ''}
				${accordionItemMarginMobileWidth !== undefined ? `margin: ${accordionItemMarginMobileWidth};` : ''}
			}
		}
		`, [
			blockID,
            deviceType,
    
            titlePrefixColor,
            titlePrefixHoverColor,
    
            titleSuffixColor,
            titleSuffixHoverColor,
    
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
			blockStyleTwo: fbAccordionItemStyleTwo.replace(/\s+/g, ' ').trim(),
		});
		}, [fbAccordionItemStyleTwo]);



    return (
        <>
        <style>
			{`
            	${editorStyle}
			`}
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
                        title: "Styles",
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
                            <PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
                                <ToggleControl
                                    label={__("Default Open?", "frontis-blocks")}
                                    checked={clickable}
                                    onChange={(value) => setAttributes({ clickable: value })}
                                />
                                <TextControl
                                    label="Title Text"
                                    value={title}
                                    onChange={(text) => setAttributes({ title: text })}
                                />
                            </PanelBody>

                            <PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>
                                <PanelBody title={__("Title Prefix", "frontis-blocks")}>
                                    <div className="fb-setting-switcher-container">
                                        <BaseControl
                                            className="fb-setting-switcher-panel-wrapper"
                                        >
                                            <ButtonGroup className="fb-setting-switcher-panel-btn">
                                                {MEDIA_TYPES.map((item, key) => (
                                                    <Button
                                                        key={key}
                                                        onClick={() => setAttributes({ titlePrefixType: item.value })} 
                                                        className={`fb-setting-switcher-panel-btn-switcher ${titlePrefixType === item.value ? 'active' : ''}`}
                                                    >
                                                        {item.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>
                                    </div>

                                    {titlePrefixType !== "none" && (
                                        <>
                                            {titlePrefixType === "icon" && (
                                                <BaseControl label={__("Icon", "frontis-blocks")}>
                                                    <FBIconPicker 
                                                        value={titlePrefixIcon} 
                                                        setIconHandler={titlePfIconHandler} 
                                                    />
                                                </BaseControl>
                                            )}

                                            {(titlePrefixType === "icon") && (
                                                    <>
                                                        <FB_SwitcherControl
                                                            label={__("Color", "frontis-blocks")}
                                                            globalSwitcher={titlePrefixColorSwitcher}
                                                            setGlobalSwitcher={(value) => setAttributes({ titlePrefixColorSwitcher: value })}
                                                        />
                                                        
                                                        {titlePrefixColorSwitcher === 'normal' && (
                                                            <FB_ColorControl
                                                                label={__("Normal Color", "frontis-blocks")}
                                                                globalColor={titlePrefixColor}
                                                                setGlobalColor={(value) => setAttributes({ titlePrefixColor: value })}
                                                            />
                                                        )}
                                                        
                                                        {titlePrefixColorSwitcher === 'hover' && (
                                                            <FB_ColorControl
                                                                label={__("Hover Color", "frontis-blocks")}
                                                                globalColor={titlePrefixHoverColor}
                                                                setGlobalColor={(value) => setAttributes({ titlePrefixHoverColor: value })}
                                                            />
                                                        )}
                                                    </>
                                                )}

                                            {titlePrefixType === "image" && (
                                                <FB_ImageControl
                                                    globalBackgroundImageUrl={titlePrefixImgUrl}
                                                    setGlobalBackgroundImageUrl={(value) => setAttributes({ titlePrefixImgUrl: value })}
                                                    globalBackgroundImageAlt={titlePrefixImgAlt}
                                                    setGlobalBackgroundImageAlt={(value) => setAttributes({ titlePrefixImgAlt: value })}
                                                    globalBackgroundImageID={titlePrefixImgID}
                                                    setGlobalBackgroundImageID={(value) => setAttributes({ titlePrefixImgID: value })}
                                                    globalBackgroundImagePosition={titlePrefixImgPosition}
                                                    setGlobalBackgroundImagePosition={(value) => setAttributes({ titlePrefixImgPosition: value })}
                                                    globalBackgroundImageAttachment={titlePrefixImgAttachment} 
                                                    setGlobalBackgroundImageAttachment={(value) => setAttributes({ titlePrefixImgAttachment: value })}
                                                    globalBackgroundImageRepeat={titlePrefixImgRepeat}
                                                    setGlobalBackgroundImageRepeat={(value) => setAttributes({ titlePrefixImgRepeat: value })}
                                                    globalBackgroundImageSize={titlePrefixImgSize}
                                                    setGlobalBackgroundImageSize={(value) => setAttributes({ titlePrefixImgSize: value })}
                                                />
                                                    
                                            )}
                                        </>
                                    )}
                                </PanelBody>

                                <PanelBody title={__("Title Suffix", "frontis-blocks")}>
                                    <div className="fb-setting-switcher-container">
                                        <BaseControl
                                            className="fb-setting-switcher-panel-wrapper"
                                        >
                                            <ButtonGroup className="fb-setting-switcher-panel-btn">
                                                {MEDIA_TYPES.map((item, key) => (
                                                    <Button
                                                        key={key}
                                                        onClick={() => setAttributes({ titleSuffixType: item.value })} 
                                                        className={`fb-setting-switcher-panel-btn-switcher ${titleSuffixType === item.value ? 'active' : ''}`}
                                                    >
                                                        {item.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>
                                    </div>

                                    {titleSuffixType !== "none" && (
                                        <>


                                            {titleSuffixType === "icon" && (
                                                <BaseControl label={__("Icon", "frontis-blocks")}>
                                                    <FBIconPicker
                                                        value={titleSuffixIcon} 
                                                        setIconHandler={titleSfIconHandler} 
                                                    />
                                                </BaseControl>
                                            )}

                                            {(titleSuffixType === "icon") && (
                                                    <>
                                                        <FB_SwitcherControl
                                                            label={__("Color", "frontis-blocks")}
                                                            globalSwitcher={titleSuffixColorSwitcher}
                                                            setGlobalSwitcher={(value) => setAttributes({ titleSuffixColorSwitcher: value })}
                                                        />
                                                        
                                                        {titleSuffixColorSwitcher === 'normal' && (
                                                            <FB_ColorControl
                                                                label={__("Normal Color", "frontis-blocks")}
                                                                globalColor={titleSuffixColor}
                                                                setGlobalColor={(value) => setAttributes({ titleSuffixColor: value })}
                                                            />
                                                        )}
                                                        
                                                        {titleSuffixColorSwitcher === 'hover' && (
                                                            <FB_ColorControl
                                                                label={__("Hover Color", "frontis-blocks")}
                                                                globalColor={titleSuffixHoverColor}
                                                                setGlobalColor={(value) => setAttributes({ titleSuffixHoverColor: value })}
                                                            />
                                                        )}
                                                    </>
                                                )}

                                            {titleSuffixType === "image" && (
                                                <FB_ImageControl 
                                                    globalBackgroundImageUrl={titleSuffixImgUrl}
                                                    setGlobalBackgroundImageUrl={(value) => setAttributes({ titleSuffixImgUrl: value })}
                                                    globalBackgroundImageAlt={titleSuffixImgAlt}
                                                    setGlobalBackgroundImageAlt={(value) => setAttributes({ titleSuffixImgAlt: value })}
                                                    globalBackgroundImageID={titleSuffixImgID}
                                                    setGlobalBackgroundImageID={(value) => setAttributes({ titleSuffixImgID: value })}
                                                    globalBackgroundImagePosition={titleSuffixImgPosition}
                                                    setGlobalBackgroundImagePosition={(value) => setAttributes({ titleSuffixImgPosition: value })}
                                                    globalBackgroundImageAttachment={titleSuffixImgAttachment} 
                                                    setGlobalBackgroundImageAttachment={(value) => setAttributes({ titleSuffixImgAttachment: value })}
                                                    globalBackgroundImageRepeat={titleSuffixImgRepeat}
                                                    setGlobalBackgroundImageRepeat={(value) => setAttributes({ titleSuffixImgRepeat: value })}
                                                    globalBackgroundImageSize={titleSuffixImgSize}
                                                    setGlobalBackgroundImageSize={(value) => setAttributes({ titleSuffixImgSize: value })}
                                                />
                                            )}
                                        </>
                                    )}
                                </PanelBody>

                            </PanelBody>
                            </>
                        )}

                        {tab.name === 'styles' && (
                            <>
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
                            </>
                        )}

                        {tab.name === 'advanced' && (
                            <>
                                <div className="fb-setting-advanced-tab-wrapper">
                                    <div className="fb-setting-inner-wrapper">
                                        <PanelBody
                                            title={__("Z Index", "frontis-blocks")}
                                            initialOpen={true}
                                            className='fb-setting-z-index-header'
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
                                        </PanelBody>

                                        {/* <PanelBody
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
                                        </PanelBody> */}

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
};

export default Inspector;
