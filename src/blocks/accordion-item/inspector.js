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
import FB_Color from "../../components/color";
import FB_Spacing from "../../components/spacing";
import { SelectControl } from "@wordpress/components";
import { useEffect, useMemo } from "@wordpress/element";
import FB_BoxShadowControl from "../../components/box-shadow";
import FB_BackgroundColorControl from "../../components/background-color-control";


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
        titlePrefixImgId,
        titlePrefixImgWidth,
        titlePrefixImgHeight,

        titleSuffixType,
        titleSuffixIcon,
        titleSuffixImgUrl,
        titleSuffixImgId,
        titleSuffixImgWidth,
        titleSuffixImgHeight,

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

    // FB_Color for Title prefix
    const titlePfColorSwitcherChange = (value) => {
        setAttributes({ titlePrefixColorSwitcher: value });
    };
    const titlePfColorChange = (value) => {
        setAttributes({ titlePrefixColor: value });
    };
    const titlePfHoverColorChange = (value) => {
        setAttributes({ titlePrefixHoverColor: value });
    };

    // FB_Color for Title Suffix
    const titleSfColorSwitcherChange = (value) => {
        setAttributes({ titleSuffixColorSwitcher: value });
    };
    const titleSfColorChange = (value) => {
        setAttributes({ titleSuffixColor: value });
    };
    const titleSfHoverColorChange = (value) => {
        setAttributes({ titleSuffixHoverColor: value });
    };

    
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
		
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
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
	  
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-title-inner .fb-accordion-title-prefix {
			${titlePrefixColor !== undefined ? `fill: ${titlePrefixColor};` : ''}
		  }
	  
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-title-inner .fb-accordion-title-suffix {
			${titleSuffixColor !== undefined ? `fill: ${titleSuffixColor};` : ''}
		  }
	  
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-title-wrapper:hover .fb-accordion-title-prefix {
			${titlePrefixHoverColor !== undefined ? `fill: ${titlePrefixHoverColor};` : ''}
		  }
	  
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-title-wrapper:hover .fb-accordion-title-suffix {
			${titleSuffixHoverColor !== undefined ? `fill: ${titleSuffixHoverColor};` : ''}
		  }
	  
		  @media only screen and (max-width: 1024px) {
			.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
			  ${accordionItemPaddingTabletWidth !== undefined ? `padding: ${accordionItemPaddingTabletWidth};` : ''}
			  ${accordionItemMarginTabletWidth !== undefined ? `margin: ${accordionItemMarginTabletWidth};` : ''}
			}
		  }
	  
		  @media only screen and (max-width: 767px) {
			.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
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
			${accordionItemZIndex !== undefined ? `z-index: ${accordionItemZIndex};` : ''}
		}

		.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
			margin: 0;
			padding: 0;
			transform-origin: top;
			transform: scaleY(0);
			height: 0;
			visibility: hidden;
			opacity: 0;
			transition: all 0.3s ease-in-out;
		}

		.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper.active {
			${accordionItemPaddingDesktopWidth !== undefined ? `padding: ${accordionItemPaddingDesktopWidth};` : ''}
			${accordionItemMarginDesktopWidth !== undefined ? `margin: ${accordionItemMarginDesktopWidth};` : ''}
			height: unset;
			visibility: visible;
			transform: scaleY(1);
			opacity: 1;
		}

		.${parentBlockID}.fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper.active .fb-accordion-tab-icon,
		.${parentBlockID}.fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon {
			display: none;
		}

		.${parentBlockID}.fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-tab-icon,
		.${parentBlockID}.fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper.active .fb-accordion-expanded-icon {
			display: block;
		}

		.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
			${titlePrefixColor ? `fill: ${titlePrefixColor};` : ''}
		}

		.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
			${titlePrefixHoverColor ? `fill: ${titlePrefixHoverColor};` : ''}
		}

		.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-prefix {
			${titleSuffixColor ? `fill: ${titleSuffixColor};` : ''}
		}

		.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-suffix {
			${titleSuffixHoverColor ? `fill: ${titleSuffixHoverColor};` : ''}
		}

		@media only screen and (max-width: 1024px) {
			.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper.active {
				${accordionItemPaddingTabletWidth !== undefined ? `padding: ${accordionItemPaddingTabletWidth};` : ''}
				${accordionItemMarginTabletWidth !== undefined ? `margin: ${accordionItemMarginTabletWidth};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper.active {
				${accordionItemPaddingMobileWidth !== undefined ? `padding: ${accordionItemPaddingMobileWidth};` : ''}
				${accordionItemMarginMobileWidth !== undefined ? `margin: ${accordionItemMarginMobileWidth};` : ''}
			}
		}
		`, [
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
                        name: "style",
                        title: "Style",
                        className: "fb-tab style",
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
                                                        <FB_Color
                                                            label={__("Color", "frontis-blocks")}
                                                            globalColorSwitcher={titlePrefixColorSwitcher}
                                                            globalColor={titlePrefixColor}
                                                            globalHoverColor={titlePrefixHoverColor}
                                                            handleColorSwitcherChange={titlePfColorSwitcherChange}
                                                            handleGlobalColorChange={titlePfColorChange}
                                                            handleGlobalHoverColorChange={titlePfHoverColorChange}
                                                        />
                                                    </>
                                                )}

                                            {titlePrefixType === "image" && (
                                                    <BaseControl className="fb-accordion-item-image-upload-wrapper">
															<MediaUploadCheck>
																<MediaUpload
                                                                    onSelect={(media) =>
                                                                        setAttributes({
                                                                            titlePrefixImgUrl: media.url,
                                                                            titlePrefixImgId: media.id,
                                                                            titlePrefixImgAlt: media.alt,
                                                                        })
                                                                    }
																	type="image"
																	value={titlePrefixImgId}
																	render={({open}) => {
																		return (
																			<Button
																				className={titlePrefixImgId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																				onClick={open}
																			>
																				{titlePrefixImgId == 0 && __('Select Image', 'frontis-block')}
																				{titlePrefixImgId != 0 &&
																					<ResponsiveWrapper
																						naturalWidth={titlePrefixImgWidth}
																						naturalHeight={titlePrefixImgHeight}>
																						<img
																							src={titlePrefixImgUrl}/>
																					</ResponsiveWrapper>
																				}
																			</Button>
																		);
																	}}
																/>
															</MediaUploadCheck>
															{titlePrefixImgId != 0 &&
																<HStack className='editor-post-featured-image__actions'>
																	<Button
																		className='editor-post-featured-image__action'
                                                                        onSelect={() =>
                                                                            setAttributes({
                                                                                titlePrefixImgUrl: '',
                                                                                titlePrefixImgId: 0,
                                                                                titlePrefixImgAlt: '',
                                                                            })
                                                                        }
                                                                    >
                                                                        {__('Remove', 'frontis-block')}
                                                                    </Button>
																	<MediaUploadCheck>
																		<MediaUpload
																			title={__('Replace image', 'frontis-block')}
																			value={titlePrefixImgId}
                                                                            onSelect={(media) =>
                                                                                setAttributes({
                                                                                    titlePrefixImgUrl: media.url,
                                                                                    titlePrefixImgId: media.id,
                                                                                    titlePrefixImgAlt: media.alt,
                                                                                })
                                                                            }
																			type="image"
																			render={({open}) => (
																				<Button
																					className='editor-post-featured-image__action'
																					onClick={open}>{__('Replace', 'frontis-block')}</Button>
																			)}
																		/>
																	</MediaUploadCheck>
																</HStack>
															}
														</BaseControl>
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
                                                        <FB_Color
                                                            label={__("Color", "frontis-blocks")}
                                                            globalColorSwitcher={titleSuffixColorSwitcher}
                                                            globalColor={titleSuffixColor}
                                                            globalHoverColor={titleSuffixHoverColor}
                                                            handleColorSwitcherChange={titleSfColorSwitcherChange}
                                                            handleGlobalColorChange={titleSfColorChange}
                                                            handleGlobalHoverColorChange={titleSfHoverColorChange}
                                                        />
                                                    </>
                                                )}

                                            {titleSuffixType === "image" && (
                                                        <BaseControl className="fb-accordion-item-image-upload-wrapper">
															<MediaUploadCheck>
																<MediaUpload
                                                                    onSelect={(media) =>
                                                                        setAttributes({
                                                                            titleSuffixImgUrl: media.url,
                                                                            titleSuffixImgId: media.id,
                                                                            titleSuffixImgAlt: media.alt,
                                                                        })
                                                                    }
																	type="image"
																	value={titleSuffixImgId}
																	render={({open}) => {
																		return (
																			<Button
																				className={titleSuffixImgId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																				onClick={open}
																			>
																				{titleSuffixImgId == 0 && __('Select Image', 'frontis-block')}
																				{titleSuffixImgId != 0 &&
																					<ResponsiveWrapper
																						naturalWidth={titleSuffixImgWidth}
																						naturalHeight={titleSuffixImgHeight}>
																						<img
																							src={titleSuffixImgUrl}/>
																					</ResponsiveWrapper>
																				}
																			</Button>
																		);
																	}}
																/>
															</MediaUploadCheck>
															{titleSuffixImgId != 0 &&
																<HStack className='editor-post-featured-image__actions'>
																	<Button
																		className='editor-post-featured-image__action'
                                                                        onSelect={() =>
                                                                            setAttributes({
                                                                                titleSuffixImgUrl: '',
                                                                                titleSuffixImgId: 0,
                                                                                titleSuffixImgAlt: '',
                                                                            })
                                                                        }
                                                                    >
                                                                        {__('Remove', 'frontis-block')}
                                                                    </Button>
																	<MediaUploadCheck>
																		<MediaUpload
																			title={__('Replace image', 'frontis-block')}
																			value={titleSuffixImgId}
                                                                            onSelect={(media) =>
                                                                                setAttributes({
                                                                                    titleSuffixImgUrl: media.url,
                                                                                    titleSuffixImgId: media.id,
                                                                                    titleSuffixImgAlt: media.alt,
                                                                                })
                                                                            }
																			type="image"
																			render={({open}) => (
																				<Button
																					className='editor-post-featured-image__action'
																					onClick={open}>{__('Replace', 'frontis-block')}</Button>
																			)}
																		/>
																	</MediaUploadCheck>
																</HStack>
															}
														</BaseControl>
                                                )}
                                        </>
                                    )}
                                </PanelBody>

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
                                            <RangeControl
                                                value={accordionItemZIndex}
                                                onChange={(value) => setAttributes({ accordionItemZIndex: value === 0 ? undefined : value })}
                                                min={1}
                                                max={100}
                                                step={1}
                                                allowReset
                                                resetFallbackValue={undefined}
                                            />
                                        </PanelBody>

                                        <PanelBody
                                        title={__("Padding & Margin", "frontis-blocks")}
                                        initialOpen={false}
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
