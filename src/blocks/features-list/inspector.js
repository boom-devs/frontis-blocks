import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo, memo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_Range from '@Components/range';
import FB_ColorControl from '@Components/color-control';
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ResponsiveControl from '@Components/responsive-control';
import "./editor.scss";

import { 
    SelectControl,
    PanelBody,
    BaseControl,
    Button,
    ButtonGroup,
} from '@wordpress/components';

import {
    FEATURE_LIST_ICON_VERTICAL_ALIGN,
    TEXT_ALIGN,
    BORDER_STYLES,
    OVERFLOW_OP,
    FEATURE_LIST_DIRECTION_ICON,
    FEATURE_LIST_WRAP_ICON,
} from '@Constants/fbConstants';

import SortableItem from './sortableItem';

import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {
    const { 
        blockID,
        blockStyle,
        FeatureItems,
        FeatureTag,
        FeatureAlignment,
        FeatureIconAlignment,
        FeatureIconShape,
        FeatureListDirection,
        FeatureListDirectionWrap,
        FeatureListGap,
        FeatureListGapUnits,

        /** Icon Style */
        FeatureIconColorSwitcher,
        FeatureIconColor,
        FeatureIconHoverColor,

        FeatureIconBgColorSwitcher,

        FeatureIconNormalBackgroundType,
        FeatureIconNormalClassicColor,
        FeatureIconNormalGradientColor,
        FeatureIconNormalCustomGradientSwitcher,
        FeatureIconNormalCustomGradientInputValue,

        FeatureIconHoverBackgroundType,
        FeatureIconHoverClassicColor,
        FeatureIconHoverGradientColor,
        FeatureIconHoverCustomGradientSwitcher,
        FeatureIconHoverCustomGradientInputValue,

        FeatureIconPaddingUnits,
        FeatureIconPaddingDesktop,
        FeatureIconPaddingTablet,
        FeatureIconPaddingMobile,
        FeatureIconPaddingLink,

        FeatureIconMarginUnits,
        FeatureIconMarginDesktop,
        FeatureIconMarginTablet,
        FeatureIconMarginMobile,
        FeatureIconMarginLink,

        FeatureIconBorder,
        FeatureIconBorderColorSwitcher,
        FeatureIconBorderColor,
        FeatureIconBorderHoverColor,
        FeatureIconBorderUnits,
        FeatureIconBorderDesktop,
        FeatureIconBorderTablet,
        FeatureIconBorderMobile,
        FeatureIconBorderLink,

        FeatureIconBorderRadiusUnits,
        FeatureIconBorderRadiusDesktop,
        FeatureIconBorderRadiusTablet,
        FeatureIconBorderRadiusMobile,
        FeatureIconBorderRadiusLink,

        FeatureIconBoxShadowSwitcher,
        FeatureIconBoxShadowValues,
        FeatureIconBoxShadowCssValue,
        FeatureIconBoxShadowHoverValues,
        FeatureIconBoxShadowHoverCssValue,

        FeatureIconSize,
        FeatureIconSizeUnits,
        /** End Icon Style */

        /** Title Style */

        FeatureTitleGlobalTypoSwitcher,
        FeatureTitleGlobalTypographyData,
        FeatureTitleGlobalTypoType,
        FeatureTitleGlobalTypoOption,
        FeatureTitleFontFamily,
        FeatureTitleFontSize,
        FeatureTitleFontSizeUnits,
        FeatureTitleFontWeight,
        FeatureTitleFontStyle,
        FeatureTitleTextTransform,
        FeatureTitleTextDecoration,
        FeatureTitleLetterSpacing,
        FeatureTitleLetterSpacingUnits,
        FeatureTitleLineHeight,
        FeatureTitleLineHeightUnits,

        FeatureTitleColorSwitcher,
        FeatureTitleColor,
        FeatureTitleHoverColor,
        FeatureTitleMarginUnits,
        FeatureTitleMarginDesktop,
        FeatureTitleMarginTablet,
        FeatureTitleMarginMobile,
        FeatureTitleMarginLink,
        /** End Title Style */

        /** Description Style */
        FeatureDescGlobalTypoSwitcher,
        FeatureDescGlobalTypographyData,
        FeatureDescGlobalTypoType,
        FeatureDescGlobalTypoOption,
        FeatureDescFontFamily,
        FeatureDescFontSize,
        FeatureDescFontSizeUnits,
        FeatureDescFontWeight,
        FeatureDescFontStyle,
        FeatureDescTextTransform,
        FeatureDescTextDecoration,
        FeatureDescLetterSpacing,
        FeatureDescLetterSpacingUnits,
        FeatureDescLineHeight,
        FeatureDescLineHeightUnits,

        FeatureDescColorSwitcher,
        FeatureDescColor,
        FeatureDescHoverColor,
        FeatureDescMarginUnits,
        FeatureDescMarginDesktop,
        FeatureDescMarginTablet,
        FeatureDescMarginMobile,
        FeatureDescMarginLink,
        /** End Description Style */

        /** Single Item */
        FeatureSingleItemBgColorSwitcher,
        FeatureSingleItemNormalBackgroundType,
        FeatureSingleItemNormalClassicColor,
        FeatureSingleItemNormalGradientColor,
        FeatureSingleItemNormalCustomGradientSwitcher,
        FeatureSingleItemNormalCustomGradientInputValue,
        FeatureSingleItemHoverBackgroundType,
        FeatureSingleItemHoverClassicColor,
        FeatureSingleItemHoverGradientColor,
        FeatureSingleItemHoverCustomGradientSwitcher,
        FeatureSingleItemHoverCustomGradientInputValue, 

        FeatureSingleItemPaddingUnits,
        FeatureSingleItemPaddingDesktop,
        FeatureSingleItemPaddingTablet,
        FeatureSingleItemPaddingMobile,
        FeatureSingleItemPaddingLink,

        FeatureSingleItemBorder,
        FeatureSingleItemBorderColorSwitcher,
        FeatureSingleItemBorderColor,
        FeatureSingleItemBorderHoverColor,

        FeatureSingleItemBorderUnits,
        FeatureSingleItemBorderDesktop,
        FeatureSingleItemBorderTablet,
        FeatureSingleItemBorderMobile,
        FeatureSingleItemBorderLink,
        
        FeatureSingleItemBorderRadiusUnits,
        FeatureSingleItemBorderRadiusDesktop,
        FeatureSingleItemBorderRadiusTablet,
        FeatureSingleItemBorderRadiusMobile,
        FeatureSingleItemBorderRadiusLink,

        FeatureSingleItemBoxShadowSwitcher,
        FeatureSingleItemBoxShadowValues,
        FeatureSingleItemBoxShadowCssValue,
        FeatureSingleItemBoxShadowHoverValues,
        FeatureSingleItemBoxShadowHoverCssValue,
        /** End Single Item */

        /** Global Style */
        FeatureGlobalZIndex,
        featuresListOverflow,
        FeatureGlobalPaddingUnits,
        FeatureGlobalPaddingDesktop,
        FeatureGlobalPaddingTablet,
        FeatureGlobalPaddingMobile,
        FeatureGlobalPaddingLink,

        FeatureGlobalMarginUnits,
        FeatureGlobalMarginDesktop,
        FeatureGlobalMarginTablet,
        FeatureGlobalMarginMobile,
        FeatureGlobalMarginLink,

        /** Start Global Background Color */
        FeatureGlobalBgColorSwitcher,

        FeatureGlobalNormalBackgroundType,
        FeatureGlobalNormalClassicColor,
        FeatureGlobalNormalGradientColor,
        FeatureGlobalNormalCustomGradientSwitcher,
        FeatureGlobalNormalCustomGradientInputValue,

        FeatureGlobalNormalBackgroundImageUrl,
        FeatureGlobalNormalBackgroundImageAlt,
        FeatureGlobalNormalBackgroundImageID,
        FeatureGlobalNormalBackgroundImagePosition,
        FeatureGlobalNormalBackgroundImageAttachment,
        FeatureGlobalNormalBackgroundImageRepeat,
        FeatureGlobalNormalBackgroundImageSize,

        FeatureGlobalHoverBackgroundType,
        FeatureGlobalHoverClassicColor,
        FeatureGlobalHoverGradientColor,
        FeatureGlobalHoverCustomGradientSwitcher,
        FeatureGlobalHoverCustomGradientInputValue,

        FeatureGlobalHoverBackgroundImageUrl,
        FeatureGlobalHoverBackgroundImageAlt,
        FeatureGlobalHoverBackgroundImageID,
        FeatureGlobalHoverBackgroundImagePosition,
        FeatureGlobalHoverBackgroundImageAttachment,
        FeatureGlobalHoverBackgroundImageRepeat,
        FeatureGlobalHoverBackgroundImageSize,
        /** End Global Background Color */

        FeatureGlobalBorder,
        FeatureGlobalBorderColorSwitcher,
        FeatureGlobalBorderColor,
        FeatureGlobalBorderHoverColor,

        FeatureGlobalBorderUnits,
        FeatureGlobalBorderDesktop,
        FeatureGlobalBorderTablet,
        FeatureGlobalBorderMobile,
        FeatureGlobalBorderLink,

        FeatureGlobalBorderRadiusUnits,
        FeatureGlobalBorderRadiusDesktop,
        FeatureGlobalBorderRadiusTablet,
        FeatureGlobalBorderRadiusMobile,
        FeatureGlobalBorderRadiusLink,

        FeatureGlobalBoxShadowSwitcher,
        FeatureGlobalBoxShadowValues,
        FeatureGlobalBoxShadowCssValue,
        FeatureGlobalBoxShadowHoverValues,
        FeatureGlobalBoxShadowHoverCssValue,
        /** End Global Style */

        /** FeatureIconImage */

        FeatureIconImageUnits,
        FeatureIconImageWidth,
        FeatureIconImageHeight,

        FeatureIconImageBorder,
        FeatureIconImageBorderColorSwitcher,
        FeatureIconImageBorderColor,
        FeatureIconImageBorderHoverColor,

        FeatureIconImageBorderUnits,
        FeatureIconImageBorderDesktop,
        FeatureIconImageBorderTablet,
        FeatureIconImageBorderMobile,
        FeatureIconImageBorderLink,

        FeatureIconImageBorderRadiusUnits,
        FeatureIconImageBorderRadiusDesktop,
        FeatureIconImageBorderRadiusTablet,
        FeatureIconImageBorderRadiusMobile,
        FeatureIconImageBorderRadiusLink,
        /** FeatureIconImage */

        featuresListDesktopSwitcher,
		featuresListTabletSwitcher,
		featuresListMobileSwitcher,

        featuresListGlobalWraperCustomCSS,
		featuresListGlobalWraperID,
		featuresListGlobalWraperClass,
        
        // Position
        featuresListPositionType,
        featuresListHZOrientationType,
        featuresListVROrientationType,
        featuresListHZLeftOffset,
        featuresListHZLeftOffsetUnits,
        featuresListHZRightOffset,
        featuresListHZRightOffsetUnits,
        featuresListVRTopOffset,
        featuresListVRTopOffsetUnits,
        featuresListVRBottomOffset,
        featuresListVRBottomOffsetUnits,
    } = attributes;
    
	const deviceType= useDeviceType();

    const [FeatureItemList, setFeatureItemList] = useState(FeatureItems);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = FeatureItemList.findIndex(item => item.id === active.id);
            const newIndex = FeatureItemList.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(FeatureItemList, oldIndex, newIndex);
            setAttributes({ FeatureItems: updatedItems });
            setFeatureItemList(updatedItems);
        }
    };

    const handleAddItem = () => {
        const newItem = {
            id: `item-${FeatureItemList.length + 1}`, 
            Title: `Feature Item ${FeatureItemList.length + 1}`, 
            Description: 'Corrupti maiores atque repellendus ratione omnis possimus. Eaque laudantium tenetur.', 
            FeatureIcon: 'check' ,
            FeatureIconImageUrl: '',
            FeatureIconImageAlt: '',
            FeatureIconImageID: '',

            FeatureSingleItemIconColorSwitcher: "normal",
            FeatureSingleItemIconColor: "",
            FeatureSingleItemIconHoverColor: "",

            FeatureSingleItemIconBgColorSwitcher: "normal", 
            FeatureSingleItemIconNormalBackgroundType: "classic",
            FeatureSingleItemIconNormalClassicColor: "",
            FeatureSingleItemIconNormalGradientColor: null,
            FeatureSingleItemIconNormalCustomGradientSwitcher: false,
            FeatureSingleItemIconNormalCustomGradientInputValue: "",

            FeatureSingleItemIconHoverBackgroundType: "classic",
            FeatureSingleItemIconHoverClassicColor: "",
            FeatureSingleItemIconHoverGradientColor: null,
            FeatureSingleItemIconHoverCustomGradientSwitcher: false,
            FeatureSingleItemIconHoverCustomGradientInputValue: "",

            FeatureSingleItemTextColorSwitcher: "normal",
            FeatureSingleItemTextColor: "",
            FeatureSingleItemTextHoverColor: "",

            /** Start Single Item Background Color */
            FeatureItemBgColorSwitcher: "normal",
            FeatureItemNormalBackgroundType: "classic",
            FeatureItemNormalClassicColor: "",
            FeatureItemNormalGradientColor: null,       
            FeatureItemNormalCustomGradientSwitcher: false,
            FeatureItemNormalCustomGradientInputValue: "",

            FeatureItemHoverBackgroundType: "classic",
            FeatureItemHoverClassicColor: "",
            FeatureItemHoverGradientColor: null,
            FeatureItemHoverCustomGradientSwitcher: false,
            FeatureItemHoverCustomGradientInputValue: "",
            /** End Single Item Background Color */
        };
        setAttributes({ FeatureItems: [...FeatureItems, newItem] });
        setFeatureItemList([...FeatureItemList, newItem]);
    };

    const handleChangeItem = (id, key, value) => {
        const updatedItems = FeatureItemList.map(item => {
            if (item.id === id) {
                if (key === 'FeatureIconImageID') {
                    // Get the full image data from WordPress media library
                    const image = wp.media.attachment(value).toJSON();
                    return {
                        ...item,
                        [key]: value,
                        'FeatureIconImageUrl': image.url,
                        'FeatureIconImageAlt': image.alt || ''
                    };
                }
                return { ...item, [key]: value };
            }
            return item;
        });
        
        setFeatureItemList(updatedItems);
        setAttributes({ FeatureItems: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems = FeatureItemList.filter(item => item.id !== id);
        setAttributes({ FeatureItems: updatedItems });
        setFeatureItemList(updatedItems);

    };

    const handleDuplicateItem = (id) => {
        const itemToDuplicate = FeatureItemList.find(item => item.id === id);
        if (itemToDuplicate) {
            const newItem = { ...itemToDuplicate, id: `item-${FeatureItemList.length + 1}` };
            setAttributes({FeatureItems: [...FeatureItems, newItem] });
            setFeatureItemList([...FeatureItemList, newItem]);
        }
    };

    //Sync FeatureItemList with attributes.FeatureItems
    useEffect(() => {
        setAttributes({ FeatureItems: FeatureItemList });
    }, [FeatureItemList, setAttributes]);

    /** Start Global padding */
	const handleFeatureIconPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureIconPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureIconPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureIconPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureIconPaddingMobile: {
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
					setAttributes( {FeatureIconPaddingDesktop: {...FeatureIconPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureIconPaddingTablet: {...FeatureIconPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureIconPaddingMobile: {...FeatureIconPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleFeatureIconPaddingCombineBtn = () => {
		setAttributes( {FeatureIconPaddingLink: !FeatureIconPaddingLink} );
	}

	const handleFeatureIconPaddingUnitsHandler = (unit) => {
		setAttributes( {
			FeatureIconPaddingUnits: {
				...FeatureIconPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Global Padding */
	
	/** Start Global Margin */
	const handleFeatureIconMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureIconMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureIconMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureIconMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureIconMarginMobile: {
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
					setAttributes( {FeatureIconMarginDesktop: {...FeatureIconMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureIconMarginTablet: {...FeatureIconMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureIconMarginMobile: {...FeatureIconMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleFeatureIconMarginCombineBtn = () => {
		setAttributes( {FeatureIconMarginLink: !FeatureIconMarginLink} );
	}

	const handleFeatureIconMarginUnitsHandler = (unit) => {
		setAttributes( {
			FeatureIconMarginUnits: {
				...FeatureIconMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Global Margin */

	/** Start Global border */
	const handleFeatureIconBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureIconBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureIconBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureIconBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureIconBorderMobile: {
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
					setAttributes( {FeatureIconBorderDesktop: {...FeatureIconBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureIconBorderTablet: {...FeatureIconBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureIconBorderMobile: {...FeatureIconBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleFeatureIconBorderCombineBtn = () => {
		setAttributes( {FeatureIconBorderLink: !FeatureIconBorderLink} );
	}

	const handleFeatureIconBorderUnitsHandler = (unit) => {
		setAttributes( {
			FeatureIconBorderUnits: {
				...FeatureIconBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border */

	/** Start Global border radius*/
	const handleFeatureIconBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureIconBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureIconBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureIconBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureIconBorderRadiusMobile: {
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
					setAttributes( {FeatureIconBorderRadiusDesktop: {...FeatureIconBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureIconBorderRadiusTablet: {...FeatureIconBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureIconBorderRadiusMobile: {...FeatureIconBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleFeatureIconBorderRadiusCombineBtn = () => {
		setAttributes( {FeatureIconBorderRadiusLink: !FeatureIconBorderRadiusLink} );
	}

	const handleFeatureIconBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			FeatureIconBorderRadiusUnits: {
				...FeatureIconBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */
	/** End Global Border Radius */
	/** End Border Radius */

    /** Start Single Item Padding */
	const handleSingleItemPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureSingleItemPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureSingleItemPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureSingleItemPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureSingleItemPaddingMobile: {
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
					setAttributes( {FeatureSingleItemPaddingDesktop: {...FeatureSingleItemPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureSingleItemPaddingTablet: {...FeatureSingleItemPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureSingleItemPaddingMobile: {...FeatureSingleItemPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleSingleItemPaddingCombineBtn = () => {
		setAttributes( {FeatureSingleItemPaddingLink: !FeatureSingleItemPaddingLink} );
	}

	const handleSingleItemPaddingUnitsHandler = (unit) => {
		setAttributes( {
			FeatureSingleItemPaddingUnits: {
				...FeatureSingleItemPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Single Item Padding */

	/** Start Single Item Border */
	const handleSingleItemBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureSingleItemBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureSingleItemBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureSingleItemBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureSingleItemBorderMobile: {
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
					setAttributes( {FeatureSingleItemBorderDesktop: {...FeatureSingleItemBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureSingleItemBorderTablet: {...FeatureSingleItemBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureSingleItemBorderMobile: {...FeatureSingleItemBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSingleItemBorderCombineBtn = () => {
		setAttributes( {FeatureSingleItemBorderLink: !FeatureSingleItemBorderLink} );
	}

	const handleSingleItemBorderUnitsHandler = (unit) => {
		setAttributes( {
			FeatureSingleItemBorderUnits: {
				...FeatureSingleItemBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border */

	/** Start Single Item Border Radius*/
	const handleSingleItemBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureSingleItemBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureSingleItemBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureSingleItemBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureSingleItemBorderRadiusMobile: {
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
					setAttributes( {FeatureSingleItemBorderRadiusDesktop: {...FeatureSingleItemBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureSingleItemBorderRadiusTablet: {...FeatureSingleItemBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureSingleItemBorderRadiusMobile: {...FeatureSingleItemBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSingleItemBorderRadiusCombineBtn = () => {
		setAttributes( {FeatureSingleItemBorderRadiusLink: !FeatureSingleItemBorderRadiusLink} );
	}

	const handleSingleItemBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			FeatureSingleItemBorderRadiusUnits: {
				...FeatureSingleItemBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Single Item Border */
	/** End Global Border Radius */
	/** End Single Item Border Radius */ 

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureGlobalPaddingMobile: {
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
					setAttributes( {FeatureGlobalPaddingDesktop: {...FeatureGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureGlobalPaddingTablet: {...FeatureGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureGlobalPaddingMobile: {...FeatureGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes( {FeatureGlobalPaddingLink: !FeatureGlobalPaddingLink} );
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			FeatureGlobalPaddingUnits: {
				...FeatureGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Global Padding */
	
	/** Start Global Margin */
	const handleGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureGlobalMarginMobile: {
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
					setAttributes( {FeatureGlobalMarginDesktop: {...FeatureGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureGlobalMarginTablet: {...FeatureGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureGlobalMarginMobile: {...FeatureGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes( {FeatureGlobalMarginLink: !FeatureGlobalMarginLink} );
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
			FeatureGlobalMarginUnits: {
				...FeatureGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureGlobalBorderMobile: {
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
					setAttributes( {FeatureGlobalBorderDesktop: {...FeatureGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureGlobalBorderTablet: {...FeatureGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureGlobalBorderMobile: {...FeatureGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {FeatureGlobalBorderLink: !FeatureGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			FeatureGlobalBorderUnits: {
				...FeatureGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureGlobalBorderRadiusMobile: {
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
					setAttributes( {FeatureGlobalBorderRadiusDesktop: {...FeatureGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureGlobalBorderRadiusTablet: {...FeatureGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureGlobalBorderRadiusMobile: {...FeatureGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {FeatureGlobalBorderRadiusLink: !FeatureGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			FeatureGlobalBorderRadiusUnits: {
				...FeatureGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */
	/** End Global Border Radius */
	/** End Border Radius */   

    /** Start Image border */
	const handleFeatureIconImageBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureIconImageBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureIconImageBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureIconImageBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureIconImageBorderMobile: {
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
					setAttributes( {FeatureIconImageBorderDesktop: {...FeatureIconImageBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureIconImageBorderTablet: {...FeatureIconImageBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureIconImageBorderMobile: {...FeatureIconImageBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleFeatureIconImageBorderCombineBtn = () => {
		setAttributes( {FeatureIconImageBorderLink: !FeatureIconImageBorderLink} );
	}

	const handleFeatureIconImageBorderUnitsHandler = (unit) => {
		setAttributes( {
			FeatureIconImageBorderUnits: {
				...FeatureIconImageBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border */

    /** Start Image Border Radius */
    const handleFeatureIconImageBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (FeatureIconImageBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        FeatureIconImageBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        FeatureIconImageBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        FeatureIconImageBorderRadiusMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {FeatureIconImageBorderRadiusDesktop: {...FeatureIconImageBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureIconImageBorderRadiusTablet: {...FeatureIconImageBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureIconImageBorderRadiusMobile: {...FeatureIconImageBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
    };

    const handleFeatureIconImageBorderRadiusCombineBtn = () => {
        setAttributes({
            FeatureIconImageBorderRadiusLink: !FeatureIconImageBorderRadiusLink,
        });
    };

    const handleFeatureIconImageBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            FeatureIconImageBorderRadiusUnits: {
                ...FeatureIconImageBorderRadiusUnits,
                [deviceType]: unit,
            },
        });
    };
    /** End Global Border Radius */
    /** End Border Radius */

    /** Start Feature Item Color Style */
	const featureSingleItemStyle = useMemo(() => {
        let style = '';
        FeatureItems.forEach(item => {

            /** Start Single Item Icon Color */
            const singleIconColorStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-icon svg {
                ${item.FeatureSingleItemIconColor ? `fill: ${item.FeatureSingleItemIconColor};` : ''}
            }`;
            style += singleIconColorStyle;

            const singleIconHoverColorStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-icon:hover svg {
                ${item.FeatureSingleItemIconHoverColor ? `fill: ${item.FeatureSingleItemIconHoverColor};` : ''}
            }`;
            style += singleIconHoverColorStyle;
            /** End Single Item Icon Color */

            /** Start Single Item Icon Background Color */
            const singleIconNormalBackgroundType = item.FeatureSingleItemIconNormalBackgroundType;
			if (singleIconNormalBackgroundType === 'gradient') {
				const gradientStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-icon-inner {
                    ${item.FeatureSingleItemIconNormalCustomGradientSwitcher ? `background: ${item.FeatureSingleItemIconNormalCustomGradientInputValue};` : `background: ${item.FeatureSingleItemIconNormalGradientColor};`}
				}`;
				style += gradientStyle;

			} else {
				const singleIconNormalClassicStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-icon-inner {
					${item.FeatureSingleItemIconNormalClassicColor ? `background: ${item.FeatureSingleItemIconNormalClassicColor};` : ''}
				}`;
				style += singleIconNormalClassicStyle;
			}

			const singleIconHoverBackgroundType = item.FeatureSingleItemIconHoverBackgroundType; 
			if (singleIconHoverBackgroundType === 'gradient') {
				const singleIconHoverGradientStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id}:hover .fb-feature-list-icon-inner {
					${item.FeatureSingleItemIconHoverCustomGradientSwitcher ? `background: ${item.FeatureSingleItemIconHoverCustomGradientInputValue};` : `background: ${item.FeatureSingleItemIconHoverGradientColor};`}
				}`;
				style += singleIconHoverGradientStyle;

			} else {
				const hoverClassicStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id}:hover {
					${item.FeatureSingleItemIconHoverClassicColor ? `background: ${item.FeatureSingleItemIconHoverClassicColor};` : ''}
				}`;
				style += hoverClassicStyle;
			}
            /** End Single Item Icon Background Color */

            /** Start Single Item Title Color */
            const singleItemTitleColorStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-title, .${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-text {
                ${item.FeatureSingleItemTextColor ? `color: ${item.FeatureSingleItemTextColor};` : ''}
            }`;
            style += singleItemTitleColorStyle;

            const singleItemTitleHoverColorStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id}:hover .fb-feature-list-title, .${blockID} .fb-feature-list-item.single-item-${item.id}:hover .fb-feature-list-text {
                ${item.FeatureSingleItemTextHoverColor ? `color: ${item.FeatureSingleItemTextHoverColor};` : ''}
            }`;
            style += singleItemTitleHoverColorStyle;
            /** End Single Item Title Color */

            /** Start Single Item Background Color */
			const normalItemBackgroundType = item.FeatureItemNormalBackgroundType;
			if (normalItemBackgroundType === 'gradient') {
				const gradientStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} {
					${item.FeatureItemNormalCustomGradientSwitcher && item.FeatureItemNormalCustomGradientInputValue ? `background: ${item.FeatureItemNormalCustomGradientInputValue};` : `background: ${item.FeatureItemNormalGradientColor};`}
				}`;
				style += gradientStyle;

			} else {
				const classicStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} {
                    ${item.FeatureItemNormalClassicColor ? `background: ${item.FeatureItemNormalClassicColor} !important;` : ''}
				}`;
				style += classicStyle;
			}

			const hoverItemBackgroundType = item.FeatureItemHoverBackgroundType;
			if (hoverItemBackgroundType === 'gradient') {
				const hoverGradientStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id}:hover {
					${item.FeatureItemHoverCustomGradientSwitcher && item.FeatureItemHoverCustomGradientInputValue ? `background: ${item.FeatureItemHoverCustomGradientInputValue};` : `background: ${item.FeatureItemHoverGradientColor};`}
				}`;
				style += hoverGradientStyle;

			} else {
				const hoverClassicStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id}:hover {
					${item.FeatureItemHoverClassicColor ? `background: ${item.FeatureItemHoverClassicColor} !important;` : ''}
				}`;
				style += hoverClassicStyle;
			}
            /** End Single Item Background Color */

        });
        return style;
    }, [FeatureItems, blockID]);

    /** Start Feature Title Margin */
	const handleFeatureTitleMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureTitleMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureTitleMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureTitleMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureTitleMarginMobile: {
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
					setAttributes( {FeatureTitleMarginDesktop: {...FeatureTitleMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureTitleMarginTablet: {...FeatureTitleMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureTitleMarginMobile: {...FeatureTitleMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleFeatureTitleMarginCombineBtn = () => {
		setAttributes( {FeatureTitleMarginLink: !FeatureTitleMarginLink} );
	}

	const handleFeatureTitleMarginUnitsHandler = (unit) => {
		setAttributes( {
			FeatureTitleMarginUnits: {
				...FeatureTitleMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Feature Title Margin */

    /** Start Feature Description Margin */
	const handleFeatureDescMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureDescMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureDescMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureDescMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureDescMarginMobile: {
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
					setAttributes( {FeatureDescMarginDesktop: {...FeatureDescMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureDescMarginTablet: {...FeatureDescMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureDescMarginMobile: {...FeatureDescMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleFeatureDescMarginCombineBtn = () => {
		setAttributes( {FeatureDescMarginLink: !FeatureDescMarginLink} );
	}

	const handleFeatureDescMarginUnitsHandler = (unit) => {
		setAttributes( {
			FeatureDescMarginUnits: {
				...FeatureDescMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Feature Description Margin */

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <PanelBody
                title={__("Feature", "frontis-blocks")}
                initialOpen={true}
            >
                <div className="fb-feature-wrapper">
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext items={FeatureItemList.map(item => item.id)}>
                            <ul className='dnd-items-wrapper'>
                                {FeatureItemList.map((item, index) => (
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

                <FB_HtmlTagControl
                    label={__("Title Tag", "frontis-blocks")}
                    globalHtmlTag={FeatureTag}
                    setGlobalHtmlTag={(value) => setAttributes({ FeatureTag: value })}
                />

                <BaseControl
                    label={__("Icon Shape", "frontis-blocks")}
                    className="fb-setting-icon-shape-wrapper"
                >
                    <SelectControl
                        value={attributes.FeatureIconShape}
                        options={[
                            { label: __("None", "frontis-blocks"), value: "none" },
                            { label: __("Circle", "frontis-blocks"), value: "circle" },
                            { label: __("Square", "frontis-blocks"), value: "square" },
                            { label: __("Rhombus", "frontis-blocks"), value: "rhombus" },
                        ]}
                        onChange={(value) => setAttributes({ FeatureIconShape: value })}
                    />
                </BaseControl>
                <BaseControl
                    label={__("Icon Position", "frontis-blocks")}
                    id="fb-setting-text-alignment"
                    className="fb-setting-text-alignment"
                >
                    <ButtonGroup
                        className="fb-setting-text-alignment-group-btn"
                    >
                        {TEXT_ALIGN.map((item, key) => (
                            <Button
                                key={key}
                                onClick={() => setAttributes({ FeatureIconAlignment: item.value })}
                                className={`fb-setting-text-alignment-single-btn ${FeatureIconAlignment === item.value ? 'active' : ''}`}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </ButtonGroup>
                </BaseControl>
                {FeatureIconAlignment !=='center' && (
                    <BaseControl
                        label={__("Icon Alignment", "frontis-blocks")}
                        id="fb-setting-text-alignment"
                        className="fb-setting-text-alignment"
                    >
                        <ButtonGroup
                            className="fb-setting-text-alignment-group-btn"
                        >
                            {FEATURE_LIST_ICON_VERTICAL_ALIGN.map((item, key) => (
                                <Button
                                    key={key}
                                    onClick={() => setAttributes({ FeatureAlignment: item.value })}
                                    className={`fb-setting-text-alignment-single-btn ${FeatureAlignment === item.value ? 'active' : ''}`}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>
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
                title={__("Feature List", "frontis-blocks")}
                initialOpen={true}
                className="fb-setting-feature-list-wrapper"
            >

                <BaseControl
                    id="fb-setting-alignment"
                    className="fb-advanced-alignment list"
                >
                    <FB_ResponsiveControl
                        labelText={__('List Direction', 'frontis-blocks')}
                        device={deviceType}
                    />
                    <br />
                    <ButtonGroup className="fb-advanced-alignment-group-btn">
                        {FEATURE_LIST_DIRECTION_ICON.map((item, key) => (
                            <Button
                                key={key}
                                onClick={() =>
                                    setAttributes({
                                        FeatureListDirection: {
                                            ...FeatureListDirection,
                                            [deviceType]: item.value,
                                        },
                                    })
                                }
                                title={item.title}
                                className={`fb-advanced-alignment-single-btn ${FeatureListDirection[deviceType] === item.value ? 'active' : ''}`}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </ButtonGroup>
                </BaseControl>

                <BaseControl
                    id="fb-setting-alignment"
                    className="fb-advanced-alignment list"
                >
                    <FB_ResponsiveControl
                        labelText={__('List Wrap', 'frontis-blocks')}
                        device={deviceType}
                    />
                    <br />
                    <ButtonGroup className="fb-advanced-alignment-group-btn">
                        {FEATURE_LIST_WRAP_ICON.map((item, key) => (
                            <Button
                                key={key}
                                onClick={() =>
                                    setAttributes({
                                        FeatureListDirectionWrap: {
                                            ...FeatureListDirectionWrap,
                                            [deviceType]: item.value,
                                        },
                                    })
                                }
                                title={item.title}
                                className={`fb-advanced-alignment-single-btn ${FeatureListDirectionWrap[deviceType] === item.value ? 'active' : ''}`}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </ButtonGroup>
                </BaseControl>

                <FB_Range
                    min={0}
                    max={FeatureListGapUnits === '%' ? 100 : 200}
                    label={__("List Gap", "frontis-blocks")}
                    rangeValue={FeatureListGap}
                    onChangeHandler={(value) => setAttributes({ FeatureListGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ FeatureListGapUnits: value })}
                    deviceType={deviceType}
                    units={FeatureListGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />
            </PanelBody>

            <PanelBody
                title={__("Icon Style", "frontis-blocks")}
                initialOpen={false}
                className="fb-setting-feature-icon-wrapper"
            >
                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={FeatureIconBgColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ FeatureIconBgColorSwitcher: value })}
                    
                    normalBackgroundType={FeatureIconNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ FeatureIconNormalBackgroundType: value })}
                    normalClassicColor={FeatureIconNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ FeatureIconNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={FeatureIconNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ FeatureIconNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={FeatureIconNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ FeatureIconNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={FeatureIconNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ FeatureGlobalNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={FeatureIconHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ FeatureIconHoverBackgroundType: value })}
                    hoverClassicColor={FeatureIconHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ FeatureIconHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={FeatureIconHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ FeatureIconHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={FeatureIconHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ FeatureGlobalHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={FeatureIconHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ FeatureIconHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureIconPaddingUnitsHandler}
                    spacingUnits={FeatureIconPaddingUnits}
                    spacingDesktop={FeatureIconPaddingDesktop}
                    spacingTablet={FeatureIconPaddingTablet}
                    spacingMobile={FeatureIconPaddingMobile}
                    handleSpacingUnitHandler={handleFeatureIconPaddingUnitChange}
                    spacingCombineBtn={FeatureIconPaddingLink}
                    spacingCombineBtnHandler={handleFeatureIconPaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureIconMarginUnitsHandler}
                    spacingUnits={FeatureIconMarginUnits}
                    spacingDesktop={FeatureIconMarginDesktop}
                    spacingTablet={FeatureIconMarginTablet}
                    spacingMobile={FeatureIconMarginMobile}
                    handleSpacingUnitHandler={handleFeatureIconMarginUnitChange}
                    spacingCombineBtn={FeatureIconMarginLink}
                    spacingCombineBtnHandler={handleFeatureIconMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={FeatureIconBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ FeatureIconBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={FeatureIconBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ FeatureIconBorderColorSwitcher: value })}
                />

                {FeatureIconBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Color", "frontis-blocks")}
                        globalColor={FeatureIconBorderColor}
                        setGlobalColor={(value) => setAttributes({ FeatureIconBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {FeatureIconBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={FeatureIconBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ FeatureIconBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureIconBorderUnitsHandler}
                    spacingUnits={FeatureIconBorderUnits}
                    spacingDesktop={FeatureIconBorderDesktop}
                    spacingTablet={FeatureIconBorderTablet}
                    spacingMobile={FeatureIconBorderMobile}
                    handleSpacingUnitHandler={handleFeatureIconBorderUnitChange}
                    spacingCombineBtn={FeatureIconBorderLink}
                    spacingCombineBtnHandler={handleFeatureIconBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureIconBorderRadiusUnitsHandler}
                    spacingUnits={FeatureIconBorderRadiusUnits}
                    spacingDesktop={FeatureIconBorderRadiusDesktop}
                    spacingTablet={FeatureIconBorderRadiusTablet}
                    spacingMobile={FeatureIconBorderRadiusMobile}
                    handleSpacingUnitHandler={handleFeatureIconBorderRadiusUnitChange}
                    spacingCombineBtn={FeatureIconBorderRadiusLink}
                    spacingCombineBtnHandler={handleFeatureIconBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={FeatureIconBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ FeatureIconBoxShadowSwitcher: value })}
                />

                {FeatureIconBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ FeatureIconBoxShadowValues: value })}
                        initialShadowValue={FeatureIconBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ FeatureIconBoxShadowCssValue: value })}
                    />
                )}

                {FeatureIconBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ FeatureIconBoxShadowHoverValues: value })}
                        initialShadowValue={FeatureIconBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ FeatureIconBoxShadowHoverCssValue: value })}
                    />
                )}
            </PanelBody>
            <PanelBody
                title={__("Icon Size & Color", "frontis-blocks")}
                initialOpen={false}
                className="fb-setting-feature-icon-wrapper"
            >

                <FB_SwitcherControl
                    label={__("Icon Color", "frontis-blocks")}
                    globalSwitcher={FeatureIconColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ FeatureIconColorSwitcher: value })}
                />

                {FeatureIconColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Color", "frontis-blocks")}
                        globalColor={FeatureIconColor}
                        setGlobalColor={(value) => setAttributes({ FeatureIconColor: value === undefined ? '' : value })}
                    />
                )}

                {FeatureIconColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={FeatureIconHoverColor}
                        setGlobalColor={(value) => setAttributes({ FeatureIconHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Range
                    min={1}
                    max={150}
                    label={__("Icon Size", "frontis-blocks")}
                    rangeValue={FeatureIconSize}
                    onChangeHandler={(value) => setAttributes({ FeatureIconSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ FeatureIconSizeUnits: value })}
                    deviceType={deviceType}
                    units={FeatureIconSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"25"}
                />

            </PanelBody>

            <PanelBody
                title={__("Image Size", "frontis-blocks")}
                initialOpen={false}
                className="fb-setting-feature-icon-image-wrapper"
            >

                <FB_Range
                    min={1}
                    max={200}
                    label={__("Width", "frontis-blocks")}
                    rangeValue={FeatureIconImageWidth}
                    onChangeHandler={(value) => setAttributes({ FeatureIconImageWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ FeatureIconImageUnits: value })}
                    deviceType={deviceType}
                    units={FeatureIconImageUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"60"}
                />

                <FB_Range
                    min={1}
                    max={200}
                    label={__("Height", "frontis-blocks")}
                    rangeValue={FeatureIconImageHeight}
                    onChangeHandler={(value) => setAttributes({ FeatureIconImageHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ FeatureIconImageUnits: value })}
                    deviceType={deviceType}
                    units={FeatureIconImageUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"60"}
                />


                {/* <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={FeatureIconImageBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ FeatureIconImageBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={FeatureIconImageBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ FeatureIconImageBorderColorSwitcher: value })}
                />

                {FeatureIconImageBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Color", "frontis-blocks")}
                        globalColor={FeatureIconImageBorderColor}
                        setGlobalColor={(value) => setAttributes({ FeatureIconImageBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {FeatureIconImageBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={FeatureIconImageBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ FeatureIconImageBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureIconImageBorderUnitsHandler}
                    spacingUnits={FeatureIconImageBorderUnits}
                    spacingDesktop={FeatureIconImageBorderDesktop}
                    spacingTablet={FeatureIconImageBorderTablet}
                    spacingMobile={FeatureIconImageBorderMobile}
                    handleSpacingUnitHandler={handleFeatureIconImageBorderUnitChange}
                    spacingCombineBtn={FeatureIconImageBorderLink}
                    spacingCombineBtnHandler={handleFeatureIconImageBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureIconImageBorderRadiusUnitsHandler}
                    spacingUnits={FeatureIconImageBorderRadiusUnits}
                    spacingDesktop={FeatureIconImageBorderRadiusDesktop}
                    spacingTablet={FeatureIconImageBorderRadiusTablet}
                    spacingMobile={FeatureIconImageBorderRadiusMobile}
                    handleSpacingUnitHandler={handleFeatureIconImageBorderRadiusUnitChange}
                    spacingCombineBtn={FeatureIconImageBorderRadiusLink}
                    spacingCombineBtnHandler={handleFeatureIconImageBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                /> */}
            </PanelBody>
            <PanelBody
                title={__("Title", "frontis-blocks")}
                initialOpen={false}
                className="fb-setting-feature-title-wrapper"
            >
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={FeatureTitleGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ FeatureTitleGlobalTypographyData: value })}

                    globalTypoType={FeatureTitleGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            FeatureTitleGlobalTypoType: value, 
                            FeatureTitleGlobalTypoSwitcher: value === 'default' ? {...FeatureTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...FeatureTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={FeatureTitleGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ FeatureTitleGlobalTypoOption: value })}

                    fontFamily={FeatureTitleFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ FeatureTitleFontFamily: value, FeatureTitleGlobalTypoSwitcher: {...FeatureTitleGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={FeatureTitleFontSize}
                    onChangeFontSize={(value) => setAttributes({ FeatureTitleFontSize: value, FeatureTitleGlobalTypoSwitcher: {...FeatureTitleGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={FeatureTitleFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ FeatureTitleFontSizeUnits: value })}

                    fontWeight={FeatureTitleFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ FeatureTitleFontWeight: value, FeatureTitleGlobalTypoSwitcher: {...FeatureTitleGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={FeatureTitleFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ FeatureTitleFontStyle: value, FeatureTitleGlobalTypoSwitcher: {...FeatureTitleGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={FeatureTitleTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ FeatureTitleTextTransform: value, FeatureTitleGlobalTypoSwitcher: {...FeatureTitleGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={FeatureTitleTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ FeatureTitleTextDecoration: value, FeatureTitleGlobalTypoSwitcher: {...FeatureTitleGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={FeatureTitleLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ FeatureTitleLetterSpacing: value, FeatureTitleGlobalTypoSwitcher: {...FeatureTitleGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={FeatureTitleLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ FeatureTitleLetterSpacingUnits: value })}

                    lineHeight={FeatureTitleLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ FeatureTitleLineHeight: value, FeatureTitleGlobalTypoSwitcher: {...FeatureTitleGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={FeatureTitleLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ FeatureTitleLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={FeatureTitleColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ FeatureTitleColorSwitcher: value })}
                />

                {FeatureTitleColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Color", "frontis-blocks")}
                        globalColor={FeatureTitleColor}
                        setGlobalColor={(value) => setAttributes({ FeatureTitleColor: value === undefined ? '' : value })}
                    />
                )}

                {FeatureTitleColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={FeatureTitleHoverColor}
                        setGlobalColor={(value) => setAttributes({ FeatureTitleHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureTitleMarginUnitsHandler}
                    spacingUnits={FeatureTitleMarginUnits}
                    spacingDesktop={FeatureTitleMarginDesktop}
                    spacingTablet={FeatureTitleMarginTablet}
                    spacingMobile={FeatureTitleMarginMobile}
                    handleSpacingUnitHandler={handleFeatureTitleMarginUnitChange} 
                    spacingCombineBtn={FeatureTitleMarginLink}
                    spacingCombineBtnHandler={handleFeatureTitleMarginCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>
            <PanelBody
                title={__("Description", "frontis-blocks")}
                initialOpen={false}
                className="fb-setting-feature-description-wrapper"
            >

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={FeatureDescGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ FeatureDescGlobalTypographyData: value })}

                    globalTypoType={FeatureDescGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            FeatureDescGlobalTypoType: value, 
                            FeatureDescGlobalTypoSwitcher: value === 'default' ? {...FeatureDescGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...FeatureDescGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={FeatureDescGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ FeatureDescGlobalTypoOption: value })}

                    fontFamily={FeatureDescFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ FeatureDescFontFamily: value, FeatureDescGlobalTypoSwitcher: {...FeatureDescGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={FeatureDescFontSize}
                    onChangeFontSize={(value) => setAttributes({ FeatureDescFontSize: value, FeatureDescGlobalTypoSwitcher: {...FeatureDescGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={FeatureDescFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ FeatureDescFontSizeUnits: value })}

                    fontWeight={FeatureDescFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ FeatureDescFontWeight: value, FeatureDescGlobalTypoSwitcher: {...FeatureDescGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={FeatureDescFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ FeatureDescFontStyle: value, FeatureDescGlobalTypoSwitcher: {...FeatureDescGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={FeatureDescTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ FeatureDescTextTransform: value, FeatureDescGlobalTypoSwitcher: {...FeatureDescGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={FeatureDescTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ FeatureDescTextDecoration: value, FeatureDescGlobalTypoSwitcher: {...FeatureDescGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={FeatureDescLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ FeatureDescLetterSpacing: value, FeatureDescGlobalTypoSwitcher: {...FeatureDescGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={FeatureDescLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ FeatureDescLetterSpacingUnits: value })}

                    lineHeight={FeatureDescLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ FeatureDescLineHeight: value, FeatureDescGlobalTypoSwitcher: {...FeatureDescGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={FeatureDescLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ FeatureDescLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={FeatureDescColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ FeatureDescColorSwitcher: value })}
                />

                {FeatureDescColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Color", "frontis-blocks")}
                        globalColor={FeatureDescColor}
                        setGlobalColor={(value) => setAttributes({ FeatureDescColor: value === undefined ? '' : value })}
                    />
                )}

                {FeatureDescColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={FeatureDescHoverColor}
                        setGlobalColor={(value) => setAttributes({ FeatureDescHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureDescMarginUnitsHandler}
                    spacingUnits={FeatureDescMarginUnits}
                    spacingDesktop={FeatureDescMarginDesktop}
                    spacingTablet={FeatureDescMarginTablet}
                    spacingMobile={FeatureDescMarginMobile}
                    handleSpacingUnitHandler={handleFeatureDescMarginUnitChange} 
                    spacingCombineBtn={FeatureDescMarginLink}
                    spacingCombineBtnHandler={handleFeatureDescMarginCombineBtn}
                    setAttributes={setAttributes}
                />

            </PanelBody>

            <PanelBody
                title={__("Background Color", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_BackgroundColorControl
                    label={__("BackgroundColor", "frontis-blocks")}
                    bgColorSwitcher={FeatureSingleItemBgColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ FeatureSingleItemBgColorSwitcher: value })}
                    
                    normalBackgroundType={FeatureSingleItemNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ FeatureSingleItemNormalBackgroundType: value })}
                    normalClassicColor={FeatureSingleItemNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ FeatureSingleItemNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={FeatureSingleItemNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ FeatureSingleItemNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={FeatureSingleItemNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ FeatureSingleItemNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={FeatureSingleItemNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ FeatureSingleItemNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={FeatureSingleItemHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ FeatureSingleItemHoverBackgroundType: value })}
                    hoverClassicColor={FeatureSingleItemHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ FeatureSingleItemHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={FeatureSingleItemHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ FeatureSingleItemHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={FeatureSingleItemHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ FeatureSingleItemHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={FeatureSingleItemHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ FeatureSingleItemHoverCustomGradientInputValue: value })}
                    isBackgroundImage={false}

                />
            </PanelBody>
            <PanelBody
                    title={__("Padding", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_Spacing 
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleSingleItemPaddingUnitsHandler}
                        spacingUnits={FeatureSingleItemPaddingUnits}
                        spacingDesktop={FeatureSingleItemPaddingDesktop}
                        spacingTablet={FeatureSingleItemPaddingTablet}
                        spacingMobile={FeatureSingleItemPaddingMobile}
                        handleSpacingUnitHandler={handleSingleItemPaddingUnitChange} 
                        spacingCombineBtn={FeatureSingleItemPaddingLink}
                        spacingCombineBtnHandler={handleSingleItemPaddingCombineBtn}
                        setAttributes={setAttributes}
                    />
                    
                </PanelBody>

                <PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

                    <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={FeatureSingleItemBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ FeatureSingleItemBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={FeatureSingleItemBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ FeatureSingleItemBorderColorSwitcher: value })}
                    />

                    {FeatureSingleItemBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Color", "frontis-blocks")}
                            globalColor={FeatureSingleItemBorderColor}
                            setGlobalColor={(value) => setAttributes({ FeatureSingleItemBorderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {FeatureSingleItemBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={FeatureSingleItemBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ FeatureSingleItemBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleSingleItemBorderUnitsHandler}
                        spacingUnits={FeatureSingleItemBorderUnits}
                        spacingDesktop={FeatureSingleItemBorderDesktop}
                        spacingTablet={FeatureSingleItemBorderTablet}
                        spacingMobile={FeatureSingleItemBorderMobile}
                        handleSpacingUnitHandler={handleSingleItemBorderUnitChange}
                        spacingCombineBtn={FeatureSingleItemBorderLink}
                        spacingCombineBtnHandler={handleSingleItemBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleSingleItemBorderRadiusUnitsHandler}
                        spacingUnits={FeatureSingleItemBorderRadiusUnits}
                        spacingDesktop={FeatureSingleItemBorderRadiusDesktop}
                        spacingTablet={FeatureSingleItemBorderRadiusTablet}
                        spacingMobile={FeatureSingleItemBorderRadiusMobile}
                        handleSpacingUnitHandler={handleSingleItemBorderRadiusUnitChange}
                        spacingCombineBtn={FeatureSingleItemBorderRadiusLink}
                        spacingCombineBtnHandler={handleSingleItemBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Box Shadow", "frontis-blocks")}
                        globalSwitcher={FeatureSingleItemBoxShadowSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ FeatureSingleItemBoxShadowSwitcher: value })}
                    />

                    {FeatureSingleItemBoxShadowSwitcher === 'normal' && (
                        <FB_BoxShadowControl
                            label={__("Normal Shadow", "frontis-blocks")}
                            onBoxShadowChange={(value) => setAttributes({ FeatureSingleItemBoxShadowValues: value })}
                            initialShadowValue={FeatureSingleItemBoxShadowValues}
                            onBoxShadowStyleChange={(value) => setAttributes({ FeatureSingleItemBoxShadowCssValue: value })}
                        />
                    )}

                    {FeatureSingleItemBoxShadowSwitcher === 'hover' && (
                        <FB_BoxShadowControl
                            label={__("Hover Shadow", "frontis-blocks")}
                            onBoxShadowChange={(value) => setAttributes({ FeatureSingleItemBoxShadowHoverValues: value })}
                            initialShadowValue={FeatureSingleItemBoxShadowHoverValues}
                            onBoxShadowStyleChange={(value) => setAttributes({ FeatureSingleItemBoxShadowHoverCssValue: value })}
                        />
                    )}
                </PanelBody>   

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
                            rangeValue={FeatureGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ FeatureGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={featuresListOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ featuresListOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={featuresListPositionType}
                            setPositionType={(value) => setAttributes({ featuresListPositionType: value })}
                                                                            
                            HZOrientationType={featuresListHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ featuresListHZOrientationType: value })
                            }
                            VROrientationType={featuresListVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ featuresListVROrientationType: value })
                            }
                                                                                
                            HZLeftOffset={featuresListHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ featuresListHZLeftOffset: value })}
                            HZLeftOffsetUnits={featuresListHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ featuresListHZLeftOffsetUnits: value })}
                            HZRightOffset={featuresListHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ featuresListHZRightOffset: value })}
                            HZRightOffsetUnits={featuresListHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ featuresListHZRightOffsetUnits: value })}
                                                                            
                            VRTopOffset={featuresListVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ featuresListVRTopOffset: value })}
                            VRTopOffsetUnits={featuresListVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ featuresListVRTopOffsetUnits: value })}
                            VRBottomOffset={featuresListVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ featuresListVRBottomOffset: value })}
                            VRBottomOffsetUnits={featuresListVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ featuresListVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={featuresListGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ featuresListGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={featuresListGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ featuresListGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                        
                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing 
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={FeatureGlobalPaddingUnits}
                            spacingDesktop={FeatureGlobalPaddingDesktop}
                            spacingTablet={FeatureGlobalPaddingTablet}
                            spacingMobile={FeatureGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={FeatureGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing 
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={FeatureGlobalMarginUnits}
                            spacingDesktop={FeatureGlobalMarginDesktop}
                            spacingTablet={FeatureGlobalMarginTablet}
                            spacingMobile={FeatureGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={FeatureGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Background Color", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_BackgroundColorControl
                            bgColorSwitcher={FeatureGlobalBgColorSwitcher}
                            setBgColorSwitcher={(value) => setAttributes({ FeatureGlobalBgColorSwitcher: value })}
                            
                            normalBackgroundType={FeatureGlobalNormalBackgroundType}
                            setNormalBackgroundType={(value) => setAttributes({ FeatureGlobalNormalBackgroundType: value })}
                            normalClassicColor={FeatureGlobalNormalClassicColor}
                            setNormalClassicColor={(value) => setAttributes({ FeatureGlobalNormalClassicColor: value === undefined ? '' : value })}
                            normalGradientColor={FeatureGlobalNormalGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ FeatureGlobalNormalGradientColor: value === undefined ? null : value })}
                            normalCustomGradientSwitcher={FeatureGlobalNormalCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ FeatureGlobalNormalCustomGradientSwitcher: value })}
                            normalCustomGradientInputValue={FeatureGlobalNormalCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ FeatureGlobalNormalCustomGradientInputValue: value })}
                            normalBackgroundImageUrl={FeatureGlobalNormalBackgroundImageUrl}
                            setNormalBackgroundImageUrl={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageUrl: value })}
                            normalBackgroundImageAlt={FeatureGlobalNormalBackgroundImageAlt}
                            setNormalBackgroundImageAlt={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageAlt: value })}
                            normalBackgroundImageID={FeatureGlobalNormalBackgroundImageID}
                            setNormalBackgroundImageID={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageID: value })}
                            normalBackgroundImagePosition={FeatureGlobalNormalBackgroundImagePosition}
                            setNormalBackgroundImagePosition={(value) => setAttributes({ FeatureGlobalNormalBackgroundImagePosition: value })}
                            normalBackgroundImageAttachment={FeatureGlobalNormalBackgroundImageAttachment}
                            setNormalBackgroundImageAttachment={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageAttachment: value })}
                            normalBackgroundImageRepeat={FeatureGlobalNormalBackgroundImageRepeat}
                            setNormalBackgroundImageRepeat={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageRepeat: value })}
                            normalBackgroundImageSize={FeatureGlobalNormalBackgroundImageSize}
                            setNormalBackgroundImageSize={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageSize: value })}
                            
                            hoverBackgroundType={FeatureGlobalHoverBackgroundType}
                            setHoverBackgroundType={(value) => setAttributes({ FeatureGlobalHoverBackgroundType: value })}
                            hoverClassicColor={FeatureGlobalHoverClassicColor}
                            setHoverClassicColor={(value) => setAttributes({ FeatureGlobalHoverClassicColor: value === undefined ? '' : value })}
                            hoverGradientColor={FeatureGlobalHoverGradientColor} 
                            setHoverGradientColor={(value) => setAttributes({ FeatureGlobalHoverGradientColor: value === undefined ? null : value })}
                            hoverCustomGradientSwitcher={FeatureGlobalHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ FeatureGlobalHoverCustomGradientSwitcher: value })}
                            hoverCustomGradientInputValue={FeatureGlobalHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ FeatureGlobalHoverCustomGradientInputValue: value })}
                            hoverBackgroundImageUrl={FeatureGlobalHoverBackgroundImageUrl}
                            setHoverBackgroundImageUrl={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageUrl: value })}
                            hoverBackgroundImageAlt={FeatureGlobalHoverBackgroundImageAlt}
                            setHoverBackgroundImageAlt={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageAlt: value })}
                            hoverBackgroundImageID={FeatureGlobalHoverBackgroundImageID}
                            setHoverBackgroundImageID={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageID: value })}
                            hoverBackgroundImagePosition={FeatureGlobalHoverBackgroundImagePosition}
                            setHoverBackgroundImagePosition={(value) => setAttributes({ FeatureGlobalHoverBackgroundImagePosition: value })}
                            hoverBackgroundImageAttachment={FeatureGlobalHoverBackgroundImageAttachment}
                            setHoverBackgroundImageAttachment={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageAttachment: value })}
                            hoverBackgroundImageRepeat={FeatureGlobalHoverBackgroundImageRepeat}
                            setHoverBackgroundImageRepeat={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageRepeat: value })}
                            hoverBackgroundImageSize={FeatureGlobalHoverBackgroundImageSize}
                            setHoverBackgroundImageSize={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageSize: value })}
                        />
                    </PanelBody>  
                    <PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

                        <SelectControl
                                label={__("Border Style", "frontis-blocks")}
                                value={FeatureGlobalBorder}
                                options={BORDER_STYLES}
                                onChange={(value) => setAttributes({ FeatureGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={FeatureGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ FeatureGlobalBorderColorSwitcher: value })}
                        />

                        {FeatureGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Color", "frontis-blocks")}
                                globalColor={FeatureGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ FeatureGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {FeatureGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={FeatureGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ FeatureGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing 
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={FeatureGlobalBorderUnits}
                            spacingDesktop={FeatureGlobalBorderDesktop}
                            spacingTablet={FeatureGlobalBorderTablet}
                            spacingMobile={FeatureGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={FeatureGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing 
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={FeatureGlobalBorderRadiusUnits}
                            spacingDesktop={FeatureGlobalBorderRadiusDesktop}
                            spacingTablet={FeatureGlobalBorderRadiusTablet}
                            spacingMobile={FeatureGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={FeatureGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={FeatureGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ FeatureGlobalBoxShadowSwitcher: value })}
                        />

                        {FeatureGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ FeatureGlobalBoxShadowValues: value })}
                                initialShadowValue={FeatureGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ FeatureGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {FeatureGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ FeatureGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={FeatureGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ FeatureGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={featuresListDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ featuresListDesktopSwitcher: value })}

                            tabletValue={featuresListTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ featuresListTabletSwitcher: value })}

                            mobileValue={featuresListMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ featuresListMobileSwitcher: value })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor  
                            value={featuresListGlobalWraperCustomCSS}
                            onChangeValue={(value) => setAttributes({ featuresListGlobalWraperCustomCSS: value })}
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