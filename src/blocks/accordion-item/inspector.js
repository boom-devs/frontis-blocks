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
		blockStyle,
        deviceType,
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

        // Item Box Shadow
        accordionItemBoxShadowValues,
        accordionItemBoxShadowCssValue,

        // Item Backgorund
        accordionItemBgColorSwitcher,
        accordionItemBgType,
        accordionItemBgClassicColor,
        accordionItemBgGradientColor,
        accordionItemBgCustomGradientSwitcher,
        accordionItemBgCustomGradientInputValue,
        accordionItemBgImageUrl,
        accordionItemBgImageAlt,
        accordionItemBgImageID,
        accordionItemBgImagePosition,
        accordionItemBgImageAttachment,
        accordionItemBgImageRepeat,
        accordionItemBgImageSize,
        accordionItemBgHoverType,
        accordionItemBgHoverClassicColor,
        accordionItemBgHoverGradientColor,
        accordionItemBgHoverCustomGradientSwitcher,
        accordionItemBgHoverCustomGradientInputValue,
        accordionItemBgHoverImageUrl,
        accordionItemBgHoverImageAlt,
        accordionItemBgHoverImageID,
        accordionItemBgHoverImagePosition,
        accordionItemBgHoverImageAttachment,
        accordionItemBgHoverImageRepeat,
        accordionItemBgHoverImageSize,
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
	
	
	// accordionItem BorderWidth Function
	const handleAccordionItemBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( accordionItemBorderLink ) {
			switch ( deviceType ) {
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
			switch ( deviceType ) {
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
				[deviceType]: unit
			}
		})
	}
	
	const accordionItemBorderDesktopWidth = `${accordionItemDesktopBorderWidth.top}${accordionItemBorderUnits[deviceType]} ${accordionItemDesktopBorderWidth.right}${accordionItemBorderUnits[deviceType]} ${accordionItemDesktopBorderWidth.bottom}${accordionItemBorderUnits[deviceType]} ${accordionItemDesktopBorderWidth.left}${accordionItemBorderUnits[deviceType]}`;
	const accordionItemBorderTabletWidth = `${accordionItemTabBorderWidth.top}${accordionItemBorderUnits[deviceType]} ${accordionItemTabBorderWidth.right}${accordionItemBorderUnits[deviceType]} ${accordionItemTabBorderWidth.bottom}${accordionItemBorderUnits[deviceType]} ${accordionItemTabBorderWidth.left}${accordionItemBorderUnits[deviceType]}`;
	const accordionItemBorderMobileWidth = `${accordionItemMobileBorderWidth.top}${accordionItemBorderUnits[deviceType]} ${accordionItemMobileBorderWidth.right}${accordionItemBorderUnits[deviceType]} ${accordionItemMobileBorderWidth.bottom}${accordionItemBorderUnits[deviceType]} ${accordionItemMobileBorderWidth.left}${accordionItemBorderUnits[deviceType]}`;
	
	
	// accordionItem BorderRadiusWidth Function
	const handleAccordionItemBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( accordionItemBorderRadiusLink ) {
			switch ( deviceType ) {
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
			switch ( deviceType ) {
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
				[deviceType]: unit
			}
		})
	}
	
	const accordionItemBorderRadiusDesktopWidth = `${accordionItemDesktopBorderRadiusWidth.top}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemDesktopBorderRadiusWidth.right}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemDesktopBorderRadiusWidth.bottom}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemDesktopBorderRadiusWidth.left}${accordionItemBorderRadiusUnits[deviceType]}`;
	const accordionItemBorderRadiusTabletWidth = `${accordionItemTabBorderRadiusWidth.top}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemTabBorderRadiusWidth.right}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemTabBorderRadiusWidth.bottom}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemTabBorderRadiusWidth.left}${accordionItemBorderRadiusUnits[deviceType]}`;
	const accordionItemBorderRadiusMobileWidth = `${accordionItemMobileBorderRadiusWidth.top}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemMobileBorderRadiusWidth.right}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemMobileBorderRadiusWidth.bottom}${accordionItemBorderRadiusUnits[deviceType]} ${accordionItemMobileBorderRadiusWidth.left}${accordionItemBorderRadiusUnits[deviceType]}`;
	
	
	const fbAccordionItemStyle = useMemo(
		() => `
		  .fb-accordion-item-main-wrapper.${blockID} {
			position: relative;
			${accordionItemZIndex !== undefined ? `z-index: ${accordionItemZIndex};` : ''}
		  }
	  
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
			${
			  accordionItemBgType === "gradient"
				? `background: ${
					accordionItemBgCustomGradientSwitcher && accordionItemBgCustomGradientInputValue
					  ? accordionItemBgCustomGradientInputValue
					  : accordionItemBgGradientColor
				  };`
				: accordionItemBgImageUrl !== undefined && accordionItemBgImageUrl !== null && accordionItemBgImageUrl !== ""
				? `
				  ${accordionItemBgImageUrl !== undefined ? `background-image: url(${accordionItemBgImageUrl});` : ''}
				  ${accordionItemBgImagePosition !== undefined ? `background-position: ${accordionItemBgImagePosition};` : ''}
				  ${accordionItemBgImageAttachment !== undefined ? `background-attachment: ${accordionItemBgImageAttachment};` : ''}
				  ${accordionItemBgImageRepeat !== undefined ? `background-repeat: ${accordionItemBgImageRepeat};` : ''}
				  ${accordionItemBgImageSize !== undefined ? `background-size: ${accordionItemBgImageSize};` : ''}
				`
				: `background: ${accordionItemBgClassicColor};`
			}
			${accordionItemBoxShadowCssValue ? `box-shadow: ${accordionItemBoxShadowCssValue};` : ''}
			${accordionItemPaddingDesktopWidth !== undefined ? `padding: ${accordionItemPaddingDesktopWidth};` : ''}
			${accordionItemMarginDesktopWidth !== undefined ? `margin: ${accordionItemMarginDesktopWidth};` : ''}
			${accordionItemBorder !== undefined ? `border-style: ${accordionItemBorder};` : ''}
			${accordionItemBorderDesktopWidth !== undefined ? `border-width: ${accordionItemBorderDesktopWidth};` : ''}
			${accordionItemBorderColor !== undefined ? `border-color: ${accordionItemBorderColor};` : ''}
			${accordionItemBorderRadiusDesktopWidth !== undefined ? `border-radius: ${accordionItemBorderRadiusDesktopWidth};` : ''}
			transition: all 0.3s ease-in-out;
		  }
	  
		  .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper:hover {
			${
				accordionItemBgHoverType === "gradient"
				  ? `background: ${
					  accordionItemBgHoverCustomGradientSwitcher && accordionItemBgHoverCustomGradientInputValue
						? accordionItemBgHoverCustomGradientInputValue
						: accordionItemBgHoverGradientColor
					};`
				  : accordionItemBgHoverImageUrl !== undefined && accordionItemBgHoverImageUrl !== null && accordionItemBgHoverImageUrl !== ""
				  ? `
					${accordionItemBgHoverImageUrl !== undefined ? `background-image: url(${accordionItemBgHoverImageUrl});` : ''}
					${accordionItemBgHoverImagePosition !== undefined ? `background-position: ${accordionItemBgHoverImagePosition};` : ''}
					${accordionItemBgHoverImageAttachment !== undefined ? `background-attachment: ${accordionItemBgHoverImageAttachment};` : ''}
					${accordionItemBgHoverImageRepeat !== undefined ? `background-repeat: ${accordionItemBgHoverImageRepeat};` : ''}
					${accordionItemBgHoverImageSize !== undefined ? `background-size: ${accordionItemBgHoverImageSize};` : ''}
				  `
				  : `background: ${accordionItemBgHoverClassicColor};`
			}
			${accordionItemBorderHoverColor !== undefined ? `border-color: ${accordionItemBorderHoverColor};` : ''}
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
			  ${accordionItemBorderRadiusTabletWidth !== undefined ? `border-radius: ${accordionItemBorderRadiusTabletWidth};` : ''}
			}
		  }
	  
		  @media only screen and (max-width: 767px) {
			.fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
			  ${accordionItemPaddingMobileWidth !== undefined ? `padding: ${accordionItemPaddingMobileWidth};` : ''}
			  ${accordionItemMarginMobileWidth !== undefined ? `margin: ${accordionItemMarginMobileWidth};` : ''}
			  ${accordionItemBorderRadiusMobileWidth !== undefined ? `border-radius: ${accordionItemBorderRadiusMobileWidth};` : ''}
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
            accordionItemBorder,
            accordionItemBorderColor,
            accordionItemBorderHoverColor,
            accordionItemBorderColorSwitcher,
            accordionItemBorderUnits,
            accordionItemDesktopBorderWidth,
            accordionItemTabBorderWidth,
            accordionItemMobileBorderWidth,
            accordionItemBorderRadiusUnits,
            accordionItemDesktopBorderRadiusWidth,
            accordionItemTabBorderRadiusWidth,
            accordionItemMobileBorderRadiusWidth,
            accordionItemDesktopSwitcher,
            accordionItemTabletSwitcher,
            accordionItemMobileSwitcher,
    
            // Item Box Shadow
            accordionItemBoxShadowValues,
            accordionItemBoxShadowCssValue,
    
            // Item Backgorund
            accordionItemBgColorSwitcher,
            accordionItemBgType,
            accordionItemBgClassicColor,
            accordionItemBgGradientColor,
            accordionItemBgCustomGradientSwitcher,
            accordionItemBgCustomGradientInputValue,
            accordionItemBgImageUrl,
            accordionItemBgImagePosition,
            accordionItemBgImageAttachment,
            accordionItemBgImageRepeat,
            accordionItemBgImageSize,
            accordionItemBgHoverType,
            accordionItemBgHoverClassicColor,
            accordionItemBgHoverGradientColor,
            accordionItemBgHoverCustomGradientSwitcher,
            accordionItemBgHoverCustomGradientInputValue,
            accordionItemBgHoverImageUrl,
            accordionItemBgHoverImageAlt,
            accordionItemBgHoverImageID,
            accordionItemBgHoverImagePosition,
            accordionItemBgHoverImageAttachment,
            accordionItemBgHoverImageRepeat,
            accordionItemBgHoverImageSize,
		]
	  );
	  
	  useEffect(() => {
		setAttributes({
		  blockStyle: fbAccordionItemStyle.replace(/\s+/g, ' ').trim(),
		});
	  }, [fbAccordionItemStyle]);


    return (
        <>
        <style>
			{`
            	${blockStyle}
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

                                        <PanelBody title="Background Color" initialOpen={false} >
                                            <FB_BackgroundColorControl
														bgColorSwitcher={accordionItemBgColorSwitcher}
														setBgColorSwitcher={(value) =>
															setAttributes({ accordionItemBgColorSwitcher: value })
														}
														normalBackgroundType={accordionItemBgType}
														setNormalBackgroundType={(value) =>
															setAttributes({ accordionItemBgType: value })
														}
														normalClassicColor={accordionItemBgClassicColor}
														setNormalClassicColor={(value) =>
															setAttributes({ accordionItemBgClassicColor: value })
														}
														normalGradientColor={accordionItemBgGradientColor}
														setNormalGradientColor={(value) =>
															setAttributes({ accordionItemBgGradientColor: value })
														}
														normalCustomGradientSwitcher={
															accordionItemBgCustomGradientSwitcher
														}
														setNormalCustomGradientSwitcher={(value) =>
															setAttributes({
																accordionItemBgCustomGradientSwitcher: value,
															})
														}
														normalCustomGradientInputValue={
															accordionItemBgCustomGradientInputValue
														}
														setNormalCustomGradientInputValue={(value) =>
															setAttributes({
																accordionItemBgCustomGradientInputValue: value,
															})
														}
														normalBackgroundImageUrl={accordionItemBgImageUrl}
														setNormalBackgroundImageUrl={(value) =>
															setAttributes({ accordionItemBgImageUrl: value })
														}
														normalBackgroundImageAlt={accordionItemBgImageAlt}
														setNormalBackgroundImageAlt={(value) =>
															setAttributes({ accordionItemBgImageAlt: value })
														}
														normalBackgroundImageID={accordionItemBgImageID}
														setNormalBackgroundImageID={(value) =>
															setAttributes({ accordionItemBgImageID: value })
														}
														normalBackgroundImagePosition={
															accordionItemBgImagePosition
														}
														setNormalBackgroundImagePosition={(value) =>
															setAttributes({
																accordionItemBgImagePosition: value,
															})
														}
														normalBackgroundImageAttachment={
															accordionItemBgImageAttachment
														}
														setNormalBackgroundImageAttachment={(value) =>
															setAttributes({
																accordionItemBgImageAttachment: value,
															})
														}
														normalBackgroundImageRepeat={
															accordionItemBgImageRepeat
														}
														setNormalBackgroundImageRepeat={(value) =>
															setAttributes({
																accordionItemBgImageRepeat: value,
															})
														}
														normalBackgroundImageSize={accordionItemBgImageSize}
														setNormalBackgroundImageSize={(value) =>
															setAttributes({ accordionItemBgImageSize: value })
														}
														hoverBackgroundType={accordionItemBgHoverType}
														setBgHoverType={(value) =>
															setAttributes({ accordionItemBgHoverType: value })
														}
														hoverClassicColor={accordionItemBgHoverClassicColor}
														setHoverClassicColor={(value) =>
															setAttributes({ accordionItemBgHoverClassicColor: value })
														}
														hoverGradientColor={accordionItemBgHoverGradientColor}
														setHoverGradientColor={(value) =>
															setAttributes({ accordionItemBgHoverGradientColor: value })
														}
														hoverCustomGradientSwitcher={
															accordionItemBgHoverCustomGradientSwitcher
														}
														setHoverCustomGradientSwitcher={(value) =>
															setAttributes({
																accordionItemBgHoverCustomGradientSwitcher: value,
															})
														}
														hoverCustomGradientInputValue={
															accordionItemBgHoverCustomGradientInputValue
														}
														setHoverCustomGradientInputValue={(value) =>
															setAttributes({
																accordionItemBgHoverCustomGradientInputValue: value,
															})
														}
														hoverBackgroundImageUrl={accordionItemBgHoverImageUrl}
														setBgHoverImageUrl={(value) =>
															setAttributes({ accordionItemBgHoverImageUrl: value })
														}
														hoverBackgroundImageAlt={accordionItemBgHoverImageAlt}
														setBgHoverImageAlt={(value) =>
															setAttributes({ accordionItemBgHoverImageAlt: value })
														}
														hoverBackgroundImageID={accordionItemBgHoverImageID}
														setBgHoverImageID={(value) =>
															setAttributes({ accordionItemBgHoverImageID: value })
														}
														hoverBackgroundImagePosition={
															accordionItemBgHoverImagePosition
														}
														setBgHoverImagePosition={(value) =>
															setAttributes({
																accordionItemBgHoverImagePosition: value,
															})
														}
														hoverBackgroundImageAttachment={
															accordionItemBgHoverImageAttachment
														}
														setBgHoverImageAttachment={(value) =>
															setAttributes({
																accordionItemBgHoverImageAttachment: value,
															})
														}
														hoverBackgroundImageRepeat={
															accordionItemBgHoverImageRepeat
														}
														setBgHoverImageRepeat={(value) =>
															setAttributes({
																accordionItemBgHoverImageRepeat: value,
															})
														}
														hoverBackgroundImageSize={accordionItemBgHoverImageSize}
														setBgHoverImageSize={(value) =>
															setAttributes({ accordionItemBgHoverImageSize: value })
														}
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
                                                deviceType={deviceType}
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
                                                deviceType={deviceType}
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

                                            <FB_BoxShadowControl
												onBoxShadowChange={(value) =>
													setAttributes({ accordionItemBoxShadowValues: value })
												}
												initialShadowValue={accordionItemBoxShadowValues}
												onBoxShadowStyleChange={(value) =>
													setAttributes({
														accordionItemBoxShadowCssValue: value,
													})
												}
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
