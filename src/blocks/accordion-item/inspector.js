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
import { useEffect } from "@wordpress/element";


const Inspector = ({ attributes, setAttributes, clientId }) => {
    const { 
        blockID,
        DeviceType,
        clickable,

        titleColorSwitcher,
        titleColor,
        titleHoverColor,

        accordionItemColorSwitcher,
        accordionItemColor,
        accordionItemHoverColor,

        iconColorSwitcher,
        iconColor,
        iconHoverColor,

        title,
        titlePrefixType,
        titlePrefixIcon,
        titlePrefixText,
        titlePrefixIconColor,
        titlePrefixImgUrl,
        titlePrefixImgId,
        titlePrefixImgAlt,
        titlePrefixImgWidth,
        titlePrefixImgHeight,

        titleSuffixType,
        titleSuffixIcon,
        titleSuffixText,
        titleSuffixIconColor,
        titleSuffixImgUrl,
        titleSuffixImgId,
        titleSuffixImgAlt,
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
        accordionItemBgColorSwitcher,
        accordionItemBgColor,
        accordionItemBgHoverColor,
        accordionItemBorder,
        accordionItemBorderColor,
        accordionItemBorderHoverColor,
        accordionItemBorderColorSwitcher,
        accordionItemBorderUnits,
        accordionItemDesktopBorderWidth,
        accordionItemTabBorderWidth,
        accordionItemMobileBorderWidth,
        accordionItemBorderLink,
        accordionItemBorderRadiusUnits,
        accordionItemDesktopBorderRadiusWidth,
        accordionItemTabBorderRadiusWidth,
        accordionItemMobileBorderRadiusWidth,
        accordionItemBorderRadiusLink,
        accordionItemDesktopSwitcher,
        accordionItemTabletSwitcher,
        accordionItemMobileSwitcher,	
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
    
    // FB_Color for accordionItem BG
    const accordionItemColorSwitcherChange = (value) => {
        setAttributes({ accordionItemColorSwitcher: value });
    };
    const accordionItemColorChange = (value) => {
        setAttributes({ accordionItemColor: value });
    };
    const accordionItemHoverColorChange = (value) => {
        setAttributes({ accordionItemHoverColor: value });
    };

    // FB_Color for Title
    const titleColorSwitcherChange = (value) => {
        setAttributes({ titleColorSwitcher: value });
    };
    const titleColorChange = (value) => {
        setAttributes({ titleColor: value });
    };
    const titleHoverColorChange = (value) => {
        setAttributes({ titleHoverColor: value });
    };

    // FB_Color for Icon
    const iconColorSwitcherChange = (value) => {
        setAttributes({ iconColorSwitcher: value });
    };
    const iconColorChange = (value) => {
        setAttributes({ iconColor: value });
    };
    const iconHoverColorChange = (value) => {
        setAttributes({ iconHoverColor: value });
    };

    // FB_Color for accordionItem content BG
    const accordionItemBGColorSwitcherChange = (value) => {
        setAttributes({ accordionItemBgColorSwitcher: value });
    };
    const accordionItemBGColorChange = (value) => {
        setAttributes({ accordionItemBgColor: value });
    };
    const accordionItemBGHoverColorChange = (value) => {
        setAttributes({ accordionItemBgHoverColor: value });
    };

    // FB_Color for accordionItem Border
    const accordionItemBorderColorSwitcherChange = (value) => {
        setAttributes({ accordionItemBorderColorSwitcher: value });
    };
    const accordionItemBorderColorChange = (value) => {
        setAttributes({ accordionItemBorderColor: value });
    };
    const accordionItemBorderHoverColorChange = (value) => {
        setAttributes({ accordionItemBorderHoverColor: value });
    };

    
    // accordionItem content margin
    const handleAccordionItemMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( accordionItemMarginLink ) {
			switch ( DeviceType ) {
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
			switch ( DeviceType ) {
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
				[DeviceType]: unit
			}
		})
	}
	
	const accordionItemMarginDesktopWidth = `${accordionItemDesktopMargin.top}${accordionItemMarginUnits[DeviceType]} ${accordionItemDesktopMargin.right}${accordionItemMarginUnits[DeviceType]} ${accordionItemDesktopMargin.bottom}${accordionItemMarginUnits[DeviceType]} ${accordionItemDesktopMargin.left}${accordionItemMarginUnits[DeviceType]}`;
	const accordionItemMarginTabletWidth = `${accordionItemTabMargin.top}${accordionItemMarginUnits[DeviceType]} ${accordionItemTabMargin.right}${accordionItemMarginUnits[DeviceType]} ${accordionItemTabMargin.bottom}${accordionItemMarginUnits[DeviceType]} ${accordionItemTabMargin.left}${accordionItemMarginUnits[DeviceType]}`;
	const accordionItemMarginMobileWidth = `${accordionItemMobileMargin.top}${accordionItemMarginUnits[DeviceType]} ${accordionItemMobileMargin.right}${accordionItemMarginUnits[DeviceType]} ${accordionItemMobileMargin.bottom}${accordionItemMarginUnits[DeviceType]} ${accordionItemMobileMargin.left}${accordionItemMarginUnits[DeviceType]}`;
	
	
	// accordionItem Padding Functionb
	const handleAccordionItemPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( accordionItemPaddingLink ) {
			switch ( DeviceType ) {
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
			switch ( DeviceType ) {
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
				[DeviceType]: unit
			}
		})
	}
	
	const accordionItemPaddingDesktopWidth = `${accordionItemDesktopPadding.top}${accordionItemPaddingUnits[DeviceType]} ${accordionItemDesktopPadding.right}${accordionItemPaddingUnits[DeviceType]} ${accordionItemDesktopPadding.bottom}${accordionItemPaddingUnits[DeviceType]} ${accordionItemDesktopPadding.left}${accordionItemPaddingUnits[DeviceType]}`;
	const accordionItemPaddingTabletWidth = `${accordionItemTabPadding.top}${accordionItemPaddingUnits[DeviceType]} ${accordionItemTabPadding.right}${accordionItemPaddingUnits[DeviceType]} ${accordionItemTabPadding.bottom}${accordionItemPaddingUnits[DeviceType]} ${accordionItemTabPadding.left}${accordionItemPaddingUnits[DeviceType]}`;
	const accordionItemPaddingMobileWidth = `${accordionItemMobilePadding.top}${accordionItemPaddingUnits[DeviceType]} ${accordionItemMobilePadding.right}${accordionItemPaddingUnits[DeviceType]} ${accordionItemMobilePadding.bottom}${accordionItemPaddingUnits[DeviceType]} ${accordionItemMobilePadding.left}${accordionItemPaddingUnits[DeviceType]}`;
	
	
	// accordionItem BorderWidth Function
	const handleAccordionItemBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( accordionItemBorderLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						accordionItemDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						accordionItemTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						accordionItemMobileBorderWidth: {
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
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {accordionItemDesktopBorderWidth: {...accordionItemDesktopBorderWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {accordionItemTabBorderWidth: {...accordionItemTabBorderWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {accordionItemMobileBorderWidth: {...accordionItemMobileBorderWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}
	
	}
	
	const handleAccordionItemBorderCombineBtn = () => {
		setAttributes( {accordionItemBorderLink: !accordionItemBorderLink} );
	}
	
	const handleAccordionItemBorderUnitsHandler = (unit) => {
		setAttributes( {
			accordionItemBorderUnits: {
				...accordionItemBorderUnits,
				[DeviceType]: unit
			}
		})
	}
	
	const accordionItemBorderDesktopWidth = `${accordionItemDesktopBorderWidth.top}${accordionItemBorderUnits[DeviceType]} ${accordionItemDesktopBorderWidth.right}${accordionItemBorderUnits[DeviceType]} ${accordionItemDesktopBorderWidth.bottom}${accordionItemBorderUnits[DeviceType]} ${accordionItemDesktopBorderWidth.left}${accordionItemBorderUnits[DeviceType]}`;
	const accordionItemBorderTabletWidth = `${accordionItemTabBorderWidth.top}${accordionItemBorderUnits[DeviceType]} ${accordionItemTabBorderWidth.right}${accordionItemBorderUnits[DeviceType]} ${accordionItemTabBorderWidth.bottom}${accordionItemBorderUnits[DeviceType]} ${accordionItemTabBorderWidth.left}${accordionItemBorderUnits[DeviceType]}`;
	const accordionItemBorderMobileWidth = `${accordionItemMobileBorderWidth.top}${accordionItemBorderUnits[DeviceType]} ${accordionItemMobileBorderWidth.right}${accordionItemBorderUnits[DeviceType]} ${accordionItemMobileBorderWidth.bottom}${accordionItemBorderUnits[DeviceType]} ${accordionItemMobileBorderWidth.left}${accordionItemBorderUnits[DeviceType]}`;
	
	
	// accordionItem BorderRadiusWidth Function
	const handleAccordionItemBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( accordionItemBorderRadiusLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						accordionItemDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						accordionItemTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						accordionItemMobileBorderRadiusWidth: {
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
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {accordionItemDesktopBorderRadiusWidth: {...accordionItemDesktopBorderRadiusWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {accordionItemTabBorderRadiusWidth: {...accordionItemTabBorderRadiusWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {accordionItemMobileBorderRadiusWidth: {...accordionItemMobileBorderRadiusWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}
	
	}
	
	const handleAccordionItemBorderRadiusCombineBtn = () => {
		setAttributes( {accordionItemBorderRadiusLink: !accordionItemBorderRadiusLink} );
	}
	
	const handleAccordionItemBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			accordionItemBorderRadiusUnits: {
				...accordionItemBorderRadiusUnits,
				[DeviceType]: unit
			}
		})
	}
	
	const accordionItemBorderRadiusDesktopWidth = `${accordionItemDesktopBorderRadiusWidth.top}${accordionItemBorderRadiusUnits[DeviceType]} ${accordionItemDesktopBorderRadiusWidth.right}${accordionItemBorderRadiusUnits[DeviceType]} ${accordionItemDesktopBorderRadiusWidth.bottom}${accordionItemBorderRadiusUnits[DeviceType]} ${accordionItemDesktopBorderRadiusWidth.left}${accordionItemBorderRadiusUnits[DeviceType]}`;
	const accordionItemBorderRadiusTabletWidth = `${accordionItemTabBorderRadiusWidth.top}${accordionItemBorderRadiusUnits[DeviceType]} ${accordionItemTabBorderRadiusWidth.right}${accordionItemBorderRadiusUnits[DeviceType]} ${accordionItemTabBorderRadiusWidth.bottom}${accordionItemBorderRadiusUnits[DeviceType]} ${accordionItemTabBorderRadiusWidth.left}${accordionItemBorderRadiusUnits[DeviceType]}`;
	const accordionItemBorderRadiusMobileWidth = `${accordionItemMobileBorderRadiusWidth.top}${accordionItemBorderRadiusUnits[DeviceType]} ${accordionItemMobileBorderRadiusWidth.right}${accordionItemBorderRadiusUnits[DeviceType]} ${accordionItemMobileBorderRadiusWidth.bottom}${accordionItemBorderRadiusUnits[DeviceType]} ${accordionItemMobileBorderRadiusWidth.left}${accordionItemBorderRadiusUnits[DeviceType]}`;
	


    return (
        <>
        <style>
            {`
                
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
                                    <BaseControl id="fb-accordionItem-image-icon">
                                        <ButtonGroup id="fb-accordionItem-image-icon">
                                            {MEDIA_TYPES.map(
                                                (
                                                    { label, value },
                                                    index
                                                ) => (
                                                    <Button
                                                        key={index}
                                                        isSecondary={
                                                            titlePrefixType !== value
                                                        }
                                                        isPrimary={
                                                            titlePrefixType === value
                                                        }
                                                        onClick={() =>
                                                            setAttributes({
                                                                titlePrefixType: value,
                                                            })
                                                        }
                                                    >
                                                        {label}
                                                    </Button>
                                                )
                                            )}
                                        </ButtonGroup>
                                    </BaseControl>

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
                                    <BaseControl id="fb-accordionItem-image-icon">
                                        <ButtonGroup id="fb-accordionItem-image-icon">
                                            {MEDIA_TYPES.map(
                                                (
                                                    { label, value },
                                                    index
                                                ) => (
                                                    <Button
                                                        key={index}
                                                        isSecondary={
                                                            titleSuffixType !== value
                                                        }
                                                        isPrimary={
                                                            titleSuffixType === value
                                                        }
                                                        onClick={() =>
                                                            setAttributes({
                                                                titleSuffixType: value,
                                                            })
                                                        }
                                                    >
                                                        {label}
                                                    </Button>
                                                )
                                            )}
                                        </ButtonGroup>
                                    </BaseControl>

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
                                                DeviceType={DeviceType}
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
                                                DeviceType={DeviceType}
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

                                        <PanelBody title="Background Color" initialOpen={false} >
                                            <FB_Color
                                                globalColorSwitcher={accordionItemBgColorSwitcher}
                                                globalColor={accordionItemBgColor}
                                                globalHoverColor={accordionItemBgHoverColor}
                                                handleColorSwitcherChange={accordionItemBGColorSwitcherChange}
                                                handleGlobalColorChange={accordionItemBGColorChange}
                                                handleGlobalHoverColorChange={accordionItemBGHoverColorChange}
                                            />
                                        </PanelBody>

                                        <PanelBody
                                            title={__("Border & Border radius", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-border-setting-wrapper"
                                            >
                                                <SelectControl
                                                    label={__("Border Style", "frontis-blocks")}
                                                    value={accordionItemBorder}
                                                    options={BORDER_STYLES}
                                                    onChange={(value) => setAttributes({ accordionItemBorder: value })}
                                                />

                                            <FB_Color
                                                label={__("Border Color", "frontis-blocks")}
                                                globalColorSwitcher={accordionItemBorderColorSwitcher}
                                                globalColor={accordionItemBorderColor}
                                                globalHoverColor={accordionItemBorderHoverColor}
                                                handleColorSwitcherChange={accordionItemBorderColorSwitcherChange}
                                                handleGlobalColorChange={accordionItemBorderColorChange}
                                                handleGlobalHoverColorChange={accordionItemBorderHoverColorChange}
                                            />

                                            <FB_Spacing 
                                                label={__("Border Width", "frontis-blocks")}
                                                DeviceType={DeviceType}
                                                spacingUnitsHandler={handleAccordionItemBorderUnitsHandler}
                                                spacingUnits={accordionItemBorderUnits}
                                                spacingDesktop={accordionItemDesktopBorderWidth}
                                                spacingTablet={accordionItemTabBorderWidth}
                                                spacingMobile={accordionItemMobileBorderWidth}
                                                handleSpacingUnitHandler={handleAccordionItemBorderUnitChange}
                                                spacingCombineBtn={accordionItemBorderLink}
                                                spacingCombineBtnHandler={handleAccordionItemBorderCombineBtn}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_Spacing 
                                                label={__("Border Radius Width", "frontis-blocks")}
                                                DeviceType={DeviceType}
                                                spacingUnitsHandler={handleAccordionItemBorderRadiusUnitsHandler}
                                                spacingUnits={accordionItemBorderRadiusUnits}
                                                spacingDesktop={accordionItemDesktopBorderRadiusWidth}
                                                spacingTablet={accordionItemTabBorderRadiusWidth}
                                                spacingMobile={accordionItemMobileBorderRadiusWidth}
                                                handleSpacingUnitHandler={handleAccordionItemBorderRadiusUnitChange}
                                                spacingCombineBtn={accordionItemBorderRadiusLink}
                                                spacingCombineBtnHandler={handleAccordionItemBorderRadiusCombineBtn}
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
