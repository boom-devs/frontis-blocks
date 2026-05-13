import { __, sprintf } from '@wordpress/i18n';
import { useState, useEffect, memo, useCallback, useMemo } from '@wordpress/element';
import { createBlock, cloneBlock } from '@wordpress/blocks';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useDispatch, useSelect, select, dispatch } from '@wordpress/data';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import FB_Presets from '@Components/presets';

import {
    SelectControl,
    PanelBody,
    TabPanel,
    BaseControl,
    Button,
    ButtonGroup,
    ToggleControl,
    TextControl,
    TextareaControl,
    Dropdown,
    Dashicon,
    RangeControl,
    ColorPicker,
    ColorPalette,
} from '@wordpress/components';

import {
    TEXT_ALIGN,
    ICON_IMAGE_ALIGN,
    FLEX_ALIGN,
    BORDER_STYLES,
    OVERFLOW_OP,
    IMAGE_OBJECT_FIT,
    STACKED_CARD_PRESETS,
    ICON_POSITION,
} from '@Constants/fbConstants';

import FB_TypographyControl from '@Components/typography-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FBIconPicker from '@Components/icon-picker';
import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import getProActive from '@Utils/getProActive';
import './editor.scss';
import { hasStackCardScalePreset, isPresetFourStackOver } from './preset-four';
import { isPresetThreeStackRight } from './preset-three';
import { isPresetTwoStackLeft } from './preset-two';
import StackCardInspectorSortableItem from './stack-card-inspector-sortable-item';
import { stackedCardPresets } from './presets';
import { createDefaultCardItemBlock } from './default-card-item';

const CARD_ITEM_BLOCK = 'frontis-blocks/stack-card-item';
const MIN_CARD_ITEMS = 2;

const Inspector = ( { attributes, setAttributes, clientId } ) => {

	const {
		blockID,
		blockStyle,
        stackCardsPresetStyle,

        stackCardsOffsetTop,
        stackCardsOffsetTopUnits,
        stackCardsItemOffsetTop,
        stackCardsItemOffsetTopSwitcher,
        stackCardsItemScale,

        stackCardsCardItemGap,
        stackCardsCardItemGapUnits,

        stackCardsPresetFourCardWidth,
        stackCardsPresetFourCardWidthUnits,
        stackCardsPresetFourOutDistance,
        stackCardsPresetFourMinScale,
        stackCardsPresetFourScaleStep,
        stackCardsPresetFourScaleYStep,
        stackCardsPresetFourOpacityStep,
        stackCardsPresetFourVisibleLayers,
        stackCardsPresetFourAutoPlay,
        stackCardsPresetFourAutoPlayDelay,
        stackCardsPresetFourAnimationSpeed,
        stackCardsPresetFourActiveBorder,
        stackCardsPresetFourActiveBorderWidth,
        stackCardsPresetFourActiveBorderWidthUnits,
        stackCardsPresetFourActiveBorderColor,
        stackCardsPresetFourShowNavigation,
        stackCardsPresetFourButtonVerticalAlign,
        stackCardsPresetFourButtonVerticalOffset,
        stackCardsPresetFourButtonVerticalOffsetUnits,
        stackCardsPresetFourButtonSideOffset,
        stackCardsPresetFourButtonSideOffsetUnits,
        stackCardsPresetTwoCardWidth,
        stackCardsPresetTwoCardWidthUnits,
        stackCardsPresetTwoLeftOffsetStep,
        stackCardsPresetTwoOutDistance,
        stackCardsPresetTwoMinScale,
        stackCardsPresetTwoScaleStep,
        stackCardsPresetTwoScaleYStep,
        stackCardsPresetTwoOpacityStep,
        stackCardsPresetTwoVisibleLayers,
        stackCardsPresetTwoAutoPlay,
        stackCardsPresetTwoAutoPlayDelay,
        stackCardsPresetTwoAnimationSpeed,
        stackCardsPresetTwoKeyboardNavigation,
        stackCardsPresetTwoCardClickToActive,
        stackCardsPresetTwoShowAllLayers,
        stackCardsPresetThreeFrameHeight,
        stackCardsPresetThreeFrameHeightUnits,
        stackCardsPresetThreeFrameWidth,
        stackCardsPresetThreeFrameWidthUnits,
        stackCardsPresetThreeItemWidth,
        stackCardsPresetThreeItemWidthUnits,
        stackCardsPresetThreeOffsetStep,
        stackCardsPresetThreeVisibleLayers,
        stackCardsPresetThreeAutoPlay,
        stackCardsPresetThreeAutoPlayDelay,
        stackCardsPresetThreeAnimationSpeed,
        stackCardsPresetThreeKeyboardNavigation,
        stackCardsPresetThreeCardClickToActive,
        stackCardsPresetThreeShowAllLayers,
        previousButtonText,
        nextButtonText,
        previousButtonIconAlign,
        nextButtonIconAlign,
        previousButtonIcon,
        nextButtonIcon,
        previousButtonIconPosition,
        nextButtonIconPosition,
        stackCardsPresetFourKeyboardNavigation,
        stackCardsPresetFourCardClickToActive,
        stackCardsPresetFourShowAllLayers,

        stackCardItemBgColorSwitcher,
        stackCardItemBgNormalBackgroundType,
        stackCardItemBgNormalClassicColor,
        stackCardItemBgNormalGradientColor,
        stackCardItemBgNormalCustomGradientSwitcher,
        stackCardItemBgNormalCustomGradientInputValue,
        stackCardItemBgHoverBackgroundType,
        stackCardItemBgHoverClassicColor,
        stackCardItemBgHoverGradientColor,
        stackCardItemBgHoverCustomGradientSwitcher,
        stackCardItemBgHoverCustomGradientInputValue,

        stackCardItemPaddingUnits,
        stackCardItemPaddingDesktop,
        stackCardItemPaddingTablet,
        stackCardItemPaddingMobile,
        stackCardItemPaddingLink,

        stackCardItemBorder,
        stackCardItemBorderColor,
        stackCardItemBorderHoverColor,
        stackCardItemBorderColorSwitcher,

        stackCardItemBorderUnits,
        stackCardItemBorderDesktop,
        stackCardItemBorderTablet,
        stackCardItemBorderMobile,
        stackCardItemBorderLink,

        stackCardItemBorderRadiusUnits,
        stackCardItemBorderRadiusDesktop,
        stackCardItemBorderRadiusTablet,
        stackCardItemBorderRadiusMobile,
        stackCardItemBorderRadiusLink,

        /** Start stackCardsNavigation Button */
        stackCardsNavigationButtonGlobalTypoSwitcher,
		stackCardsNavigationButtonGlobalTypographyData,
		stackCardsNavigationButtonGlobalTypoType,
		stackCardsNavigationButtonGlobalTypoOption,
		stackCardsNavigationButtonFontFamily,
		stackCardsNavigationButtonFontSize,
		stackCardsNavigationButtonFontSizeUnits,
		stackCardsNavigationButtonFontWeight,
		stackCardsNavigationButtonFontStyle,
		stackCardsNavigationButtonTextTransform,
		stackCardsNavigationButtonTextDecoration,
		stackCardsNavigationButtonLetterSpacing,
		stackCardsNavigationButtonLetterSpacingUnits,
		stackCardsNavigationButtonLineHeight,
		stackCardsNavigationButtonLineHeightUnits,

		stackCardsNavigationButtonColorSwitcher,
		stackCardsNavigationButtonColor,
		stackCardsNavigationButtonHoverColor,
		stackCardsNavigationButtonBgHoverColor,

		stackCardsNavigationButtonBackgroundColorSwitcher,
		stackCardsNavigationButtonNormalBackgroundType,
		stackCardsNavigationButtonNormalClassicColor,
		stackCardsNavigationButtonNormalGradientColor,
		stackCardsNavigationButtonNormalCustomGradientSwitcher,
		stackCardsNavigationButtonNormalCustomGradientInputValue,

		stackCardsNavigationButtonHoverBackgroundType,
		stackCardsNavigationButtonHoverClassicColor,
		stackCardsNavigationButtonHoverGradientColor,
		stackCardsNavigationButtonHoverCustomGradientSwitcher,
		stackCardsNavigationButtonHoverCustomGradientInputValue,

		stackCardsNavigationButtonPaddingUnits,
		stackCardsNavigationButtonDesktopPadding,
		stackCardsNavigationButtonTabPadding,
		stackCardsNavigationButtonMobilePadding,
		stackCardsNavigationButtonPaddingLink,

		stackCardsNavigationButtonBorder,
		stackCardsNavigationButtonBorderColorSwitcher,
		stackCardsNavigationButtonBorderColor,
		stackCardsNavigationButtonBorderHoverColor,

		stackCardsNavigationButtonBorderUnits,
		stackCardsNavigationButtonDesktopBorderWidth,
		stackCardsNavigationButtonTabBorderWidth,
		stackCardsNavigationButtonMobileBorderWidth,
		stackCardsNavigationButtonBorderLink,

		stackCardsNavigationButtonBorderRadiusUnits,
		stackCardsNavigationButtonDesktopBorderRadiusWidth,
		stackCardsNavigationButtonTabBorderRadiusWidth,
		stackCardsNavigationButtonMobileBorderRadiusWidth,
		stackCardsNavigationButtonBorderRadiusLink,

		stackCardsNavigationButtonIconColorSwitcher,
		stackCardsNavigationButtonIconColor,
		stackCardsNavigationButtonIconHoverColor,
		stackCardsNavigationButtonIconSize,
		stackCardsNavigationButtonIconSizeUnits,

        stackCardsNavigationButtonIconSpacing,
        stackCardsNavigationButtonIconSpacingUnits,
		/** End stackCardsNavigation Button */

		stackCardsDesktopSwitcher,
		stackCardsTabletSwitcher,
		stackCardsMobileSwitcher,

		stackCardsCustomCSS,
		stackCardsGlobalWraperID,
		stackCardsGlobalWraperClass,

		stackCardsGlobalZIndex,
        stackCardsOverflow,

        stackCardsGlobalPaddingUnits,
        stackCardsGlobalPaddingDesktop,
        stackCardsGlobalPaddingTablet,
        stackCardsGlobalPaddingMobile,
        stackCardsGlobalPaddingLink,

        stackCardsGlobalMarginUnits,
        stackCardsGlobalMarginDesktop,
        stackCardsGlobalMarginTablet,
        stackCardsGlobalMarginMobile,
        stackCardsGlobalMarginLink,

        stackCardsGlobalBgColorSwitcher,
        stackCardsGlobalBgNormalBackgroundType,
        stackCardsGlobalBgNormalClassicColor,
        stackCardsGlobalBgNormalGradientColor,
        stackCardsGlobalBgNormalCustomGradientSwitcher,
        stackCardsGlobalBgNormalCustomGradientInputValue,
        stackCardsGlobalBgHoverBackgroundType,
        stackCardsGlobalBgHoverClassicColor,
        stackCardsGlobalBgHoverGradientColor,
        stackCardsGlobalBgHoverCustomGradientSwitcher,
        stackCardsGlobalBgHoverCustomGradientInputValue,

        stackCardsGlobalBorder,
        stackCardsGlobalBorderColor,
        stackCardsGlobalBorderHoverColor,
        stackCardsGlobalBorderColorSwitcher,

        stackCardsGlobalBorderUnits,
        stackCardsGlobalBorderDesktop,
        stackCardsGlobalBorderTablet,
        stackCardsGlobalBorderMobile,
        stackCardsGlobalBorderLink,

        stackCardsGlobalBorderRadiusUnits,
        stackCardsGlobalBorderRadiusDesktop,
        stackCardsGlobalBorderRadiusTablet,
        stackCardsGlobalBorderRadiusMobile,
        stackCardsGlobalBorderRadiusLink,

        stackCardsGlobalBoxShadowSwitcher,
        stackCardsGlobalBoxShadowValues,
        stackCardsGlobalBoxShadowCssValue,
        stackCardsGlobalBoxShadowHoverValues,
        stackCardsGlobalBoxShadowHoverCssValue,

        // Position
        stackCardsPositionType,
        stackCardsHZOrientationType,
        stackCardsVROrientationType,
        stackCardsHZLeftOffset,
        stackCardsHZLeftOffsetUnits,
        stackCardsHZRightOffset,
        stackCardsHZRightOffsetUnits,
        stackCardsVRTopOffset,
        stackCardsVRTopOffsetUnits,
        stackCardsVRBottomOffset,
        stackCardsVRBottomOffsetUnits,

	} = attributes;

    const deviceType = useDeviceType();
    const isPresetTwo = isPresetTwoStackLeft(stackCardsPresetStyle);
    const isPresetThree = isPresetThreeStackRight(stackCardsPresetStyle);
    const isPresetFour = isPresetFourStackOver(stackCardsPresetStyle);
	const [expandedCardClientId, setExpandedCardClientId] = useState(null);

    const childBlocks = useSelect(
		( sel ) => sel( blockEditorStore ).getBlocks( clientId ) || [],
		[ clientId ]
	);

	const {
		insertBlock,
		moveBlocksToPosition,
		removeBlock,
		selectBlock,
		updateBlockAttributes,
	} = useDispatch( blockEditorStore );

	const cardItems = useMemo(
		() =>
			childBlocks.map( ( b, index ) => ( {
				clientId: b.clientId,
				itemNumber: b.attributes?.itemNumber ?? index + 1,
			} ) ),
		[ childBlocks ]
	);

	const cardItemCount = cardItems.length;
	const canDeleteCard = cardItemCount > MIN_CARD_ITEMS;

	const handleAddCardItem = useCallback( () => {
		insertBlock(
			createDefaultCardItemBlock( childBlocks.length + 1 ),
			childBlocks.length,
			clientId,
			false
		);
	}, [ childBlocks.length, clientId, insertBlock ] );

	const handleDeleteCardItem = useCallback(
		( targetClientId ) => {
			if ( childBlocks.length <= MIN_CARD_ITEMS ) {
				return;
			}
			removeBlock( targetClientId, false );
			requestAnimationFrame( () => {
				selectBlock( clientId );
			} );
		},
		[ childBlocks, clientId, removeBlock, selectBlock ]
	);

	const handleDuplicateCardItem = useCallback(
		( targetClientId ) => {
			const beSelect = select( blockEditorStore );
			const beDispatch = dispatch( blockEditorStore );
			const targetBlock = beSelect.getBlock( targetClientId );
			if ( ! targetBlock ) {
				return;
			}
			const order = beSelect.getBlockOrder( clientId );
			const index = order.indexOf( targetClientId );
			if ( index === -1 ) {
				return;
			}
			const cloned = cloneBlock( targetBlock );
			beDispatch.insertBlock( cloned, index + 1, clientId, false );
		},
		[ clientId ]
	);

	const handleCardItemsDragEnd = useCallback(
		( event ) => {
			const { active, over } = event;
			if ( ! active || ! over || active.id === over.id ) {
				return;
			}
			const order = childBlocks.map( ( b ) => b.clientId );
			const oldIndex = order.indexOf( active.id );
			const newIndex = order.indexOf( over.id );
			if ( oldIndex === -1 || newIndex === -1 ) {
				return;
			}
			moveBlocksToPosition( [ active.id ], clientId, clientId, newIndex );
		},
		[ childBlocks, clientId, moveBlocksToPosition ]
	);

	const handleToggleCardItem = useCallback((targetClientId) => {
		setExpandedCardClientId((prev) => (prev === targetClientId ? null : targetClientId));
	}, []);

	const handleSingleCardOffsetTop = (itemNumber, value) => {
		const normalizedValue =
			typeof value === 'object' && value !== null
				? (value[deviceType] ?? '')
				: value;

		setAttributes({
			stackCardsItemOffsetTop: {
				...stackCardsItemOffsetTop,
				[deviceType]: {
					...(stackCardsItemOffsetTop?.[deviceType] || {}),
					[itemNumber]: normalizedValue,
				},
			},
		});
	};

	const handleSingleCardOffsetToggle = (isEnabled) => {
		setAttributes({ stackCardsItemOffsetTopSwitcher: isEnabled });
	};

	const handleSingleCardScale = (itemNumber, value) => {
		const normalizedValue =
			typeof value === 'object' && value !== null
				? (value[deviceType] ?? '')
				: value;

		setAttributes({
			stackCardsItemScale: {
				...stackCardsItemScale,
				[deviceType]: {
					...(stackCardsItemScale?.[deviceType] || {}),
					[itemNumber]: normalizedValue,
				},
			},
		});
	};

	const handleStackCardItemAttributes = useCallback((targetClientId, nextAttributes) => {
		updateBlockAttributes(targetClientId, nextAttributes);
	}, [updateBlockAttributes]);

    const previousButtonIconHandler = (IconName) => {
        setAttributes({ previousButtonIcon: IconName });
    };

    const nextButtonIconHandler = (IconName) => {
        setAttributes({ nextButtonIcon: IconName });
    };


	/** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (stackCardsGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        stackCardsGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        stackCardsGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        stackCardsGlobalPaddingMobile: {
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
                    setAttributes({ stackCardsGlobalPaddingDesktop: { ...stackCardsGlobalPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ stackCardsGlobalPaddingTablet: { ...stackCardsGlobalPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ stackCardsGlobalPaddingMobile: { ...stackCardsGlobalPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ stackCardsGlobalPaddingLink: !stackCardsGlobalPaddingLink });
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            stackCardsGlobalPaddingUnits: {
                ...stackCardsGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Padding */

	/** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (stackCardsGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        stackCardsGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        stackCardsGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        stackCardsGlobalMarginMobile: {
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
                    setAttributes({ stackCardsGlobalMarginDesktop: { ...stackCardsGlobalMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ stackCardsGlobalMarginTablet: { ...stackCardsGlobalMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ stackCardsGlobalMarginMobile: { ...stackCardsGlobalMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ stackCardsGlobalMarginLink: !stackCardsGlobalMarginLink });
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            stackCardsGlobalMarginUnits: {
                ...stackCardsGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (stackCardsGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        stackCardsGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        stackCardsGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        stackCardsGlobalBorderMobile: {
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
                    setAttributes({ stackCardsGlobalBorderDesktop: { ...stackCardsGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ stackCardsGlobalBorderTablet: { ...stackCardsGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ stackCardsGlobalBorderMobile: { ...stackCardsGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ stackCardsGlobalBorderLink: !stackCardsGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            stackCardsGlobalBorderUnits: {
                ...stackCardsGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (stackCardsGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        stackCardsGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        stackCardsGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        stackCardsGlobalBorderRadiusMobile: {
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
                    setAttributes({ stackCardsGlobalBorderRadiusDesktop: { ...stackCardsGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ stackCardsGlobalBorderRadiusTablet: { ...stackCardsGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ stackCardsGlobalBorderRadiusMobile: { ...stackCardsGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ stackCardsGlobalBorderRadiusLink: !stackCardsGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            stackCardsGlobalBorderRadiusUnits: {
                ...stackCardsGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border radius*/

    /** Start Global padding */
    const handleStackCardItemPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (stackCardItemPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        stackCardItemPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        stackCardItemPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        stackCardItemPaddingMobile: {
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
                    setAttributes({ stackCardItemPaddingDesktop: { ...stackCardItemPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ stackCardsGlobalPaddingTablet: { ...stackCardItemPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ stackCardItemPaddingMobile: { ...stackCardItemPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleStackCardItemPaddingCombineBtn = () => {
        setAttributes({ stackCardItemPaddingLink: !stackCardItemPaddingLink });
    }

    const handleStackCardItemPaddingUnitsHandler = (unit) => {
        setAttributes({
            stackCardItemPaddingUnits: {
                ...stackCardItemGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Padding */

    /** Start Stack card item border */
    const handleStackCardItemBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (stackCardItemBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        stackCardItemBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        stackCardItemBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        stackCardItemBorderMobile: {
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
                    setAttributes({ stackCardItemBorderDesktop: { ...stackCardItemBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ stackCardItemBorderTablet: { ...stackCardItemBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ stackCardItemBorderMobile: { ...stackCardItemBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleStackCardItemBorderCombineBtn = () => {
        setAttributes({ stackCardItemBorderLink: !stackCardItemBorderLink });
    }

    const handleStackCardItemBorderUnitsHandler = (unit) => {
        setAttributes({
            stackCardItemBorderUnits: {
                ...stackCardItemBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Stack Card item border */

    /** Start Stack Card item border radius*/
    const handleStackCardItemBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (stackCardItemBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        stackCardItemBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        stackCardItemBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        stackCardItemBorderRadiusMobile: {
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
                    setAttributes({ stackCardItemBorderRadiusDesktop: { ...stackCardItemBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ stackCardItemBorderRadiusTablet: { ...stackCardItemBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ stackCardItemBorderRadiusMobile: { ...stackCardItemBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleStackCardItemBorderRadiusCombineBtn = () => {
        setAttributes({ stackCardItemBorderRadiusLink: !stackCardItemBorderRadiusLink });
    }

    const handleStackCardItemBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            stackCardItemBorderRadiusUnits: {
                ...stackCardItemBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end stack card item border radius*/

    /** Start stack card Button padding */
	const handlestackCardsNavigationButtonPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( stackCardsNavigationButtonPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						stackCardsNavigationButtonDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						stackCardsNavigationButtonTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						stackCardsNavigationButtonMobilePadding: {
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
					setAttributes( {stackCardsNavigationButtonDesktopPadding: {...stackCardsNavigationButtonDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {stackCardsNavigationButtonTabPadding: {...stackCardsNavigationButtonTabPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {stackCardsNavigationButtonMobilePadding: {...stackCardsNavigationButtonMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handlestackCardsNavigationButtonPaddingCombineBtn = () => {
		setAttributes( {stackCardsNavigationButtonPaddingLink: !stackCardsNavigationButtonPaddingLink} );
	}

	const handlestackCardsNavigationButtonPaddingUnitsHandler = (unit) => {
		setAttributes( {
			stackCardsNavigationButtonPaddingUnits: {
				...stackCardsNavigationButtonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End stack card Button Padding */

    /** Start stack card Button border */
	const handlestackCardsNavigationButtonBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( stackCardsNavigationButtonBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						stackCardsNavigationButtonDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						stackCardsNavigationButtonTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						stackCardsNavigationButtonMobileBorderWidth: {
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
					setAttributes( {stackCardsNavigationButtonDesktopBorderWidth: {...stackCardsNavigationButtonDesktopBorderWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {stackCardsNavigationButtonTabBorderWidth: {...stackCardsNavigationButtonTabBorderWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {stackCardsNavigationButtonMobileBorderWidth: {...stackCardsNavigationButtonMobileBorderWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handlestackCardsNavigationButtonBorderCombineBtn = () => {
		setAttributes( {stackCardsNavigationButtonBorderLink: !stackCardsNavigationButtonBorderLink} );
	}

	const handlestackCardsNavigationButtonBorderUnitsHandler = (unit) => {
		setAttributes( {
			stackCardsNavigationButtonBorderUnits: {
				...stackCardsNavigationButtonBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End stack card Button Border */

	/** Start stack card Button border radius*/
	const handlestackCardsNavigationButtonBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( stackCardsNavigationButtonBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						stackCardsNavigationButtonDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						stackCardsNavigationButtonTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						stackCardsNavigationButtonMobileBorderRadiusWidth: {
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
					setAttributes( {stackCardsNavigationButtonDesktopBorderRadiusWidth: {...stackCardsNavigationButtonDesktopBorderRadiusWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {stackCardsNavigationButtonTabBorderRadiusWidth: {...stackCardsNavigationButtonTabBorderRadiusWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {stackCardsNavigationButtonMobileBorderRadiusWidth: {...stackCardsNavigationButtonMobileBorderRadiusWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handlestackCardsNavigationButtonBorderRadiusCombineBtn = () => {
		setAttributes( {stackCardsNavigationButtonBorderRadiusLink: !stackCardsNavigationButtonBorderRadiusLink} );
	}

	const handlestackCardsNavigationButtonBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			stackCardsNavigationButtonBorderRadiusUnits: {
				...stackCardsNavigationButtonBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end stack card Button border */

	/**
     * Inspector General Controls
     */
	const generalControls = (
		<>
			<div className="fb-setting-general-tab-wrapper">
				<div className="fb-setting-inner-wrapper">
					<PanelBody
						title={__('Stacked Card', 'frontis-blocks')}
						initialOpen={true}
					>
                        <BaseControl>
                            <FB_Presets
                                className="fb-stack-cards-presets"
                                presets={stackedCardPresets}
                                value={stackCardsPresetStyle}
                                onChangeValue='stackCardsPresetStyle'
                                defaultPresetValue="stack-top"
                                setAttributes={setAttributes}
                            />
                        </BaseControl>
                        {hasStackCardScalePreset(stackCardsPresetStyle) && (
                            <ToggleControl
                                label={__('Offset Top For Each Item', 'frontis-blocks')}
                                checked={!!stackCardsItemOffsetTopSwitcher}
                                onChange={handleSingleCardOffsetToggle}
                            />
                        )}

						<BaseControl label={__("Card Items", "frontis-blocks")}>
                            <div className="fb-stack-card-inspector-items">
                                <DndContext collisionDetection={closestCenter} onDragEnd={handleCardItemsDragEnd}>
                                    <SortableContext
                                        items={cardItems.map((row) => row.clientId)}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        <ul className="dnd-items-wrapper">
                                            {cardItems.map((item, index) => {
                                                const currentChildBlock = childBlocks.find((block) => block.clientId === item.clientId);
                                                const itemAttributes = currentChildBlock?.attributes || {};
                                                return (
                                                    <StackCardInspectorSortableItem
                                                        key={item.clientId}
                                                        id={item.clientId}
                                                        item={item}
                                                        index={index}
                                                        handleDeleteItem={handleDeleteCardItem}
                                                        handleDuplicateItem={handleDuplicateCardItem}
                                                        onToggleItem={handleToggleCardItem}
                                                        isExpanded={expandedCardClientId === item.clientId}
                                                        canDelete={canDeleteCard}
                                                    >
                                                        <div className="sortable-item-content">
                                                            {hasStackCardScalePreset(stackCardsPresetStyle) && (
                                                                <>
                                                                    {!!stackCardsItemOffsetTopSwitcher && (
                                                                        <FB_Range
                                                                            min={0}
                                                                            max={stackCardsOffsetTopUnits?.[deviceType] === '%' ? 100 : 200}
                                                                            label={sprintf(__('Offset Top', 'frontis-blocks'), item.itemNumber ?? index + 1)}
                                                                            rangeValue={{
                                                                                ...stackCardsOffsetTop,
                                                                                [deviceType]:
                                                                                    stackCardsItemOffsetTop?.[deviceType]?.[item.itemNumber ?? index + 1] ?? '',
                                                                            }}
                                                                            onChangeHandler={(value) => handleSingleCardOffsetTop(item.itemNumber ?? index + 1, value)}
                                                                            rangeUnitHandler={(value) => setAttributes({ stackCardsOffsetTopUnits: value })}
                                                                            deviceType={deviceType}
                                                                            units={stackCardsOffsetTopUnits}
                                                                            setAttributes={setAttributes}
                                                                            rangeStep={1}
                                                                            resetFallbackValue={""}
                                                                        />
                                                                    )}

                                                                    <FB_Range
                                                                        min={0}
                                                                        max={2}
                                                                        label={__('Scale Value', 'frontis-blocks')}
                                                                        rangeValue={{
                                                                            Desktop: '',
                                                                            Tablet: '',
                                                                            Mobile: '',
                                                                            ...stackCardsItemScale,
                                                                            [deviceType]:
                                                                                stackCardsItemScale?.[deviceType]?.[item.itemNumber ?? index + 1] ?? '',
                                                                        }}
                                                                        onChangeHandler={(value) => handleSingleCardScale(item.itemNumber ?? index + 1, value)}
                                                                        deviceType={deviceType}
                                                                        setAttributes={setAttributes}
                                                                        rangeStep={0.001}
                                                                        resetFallbackValue={""}
                                                                        isRangeUnit={false}
                                                                    />
                                                                </>
                                                            )}

                                                            <FB_BackgroundColorControl
                                                                label={__("Item Background Color", "frontis-blocks")}
                                                                bgColorSwitcher={itemAttributes.stackCardItemBgColorSwitcher}
                                                                setBgColorSwitcher={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBgColorSwitcher: value })}
                                                                normalBackgroundType={itemAttributes.stackCardItemBgNormalBackgroundType}
                                                                setNormalBackgroundType={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBgNormalBackgroundType: value })}
                                                                normalClassicColor={itemAttributes.stackCardItemBgNormalClassicColor}
                                                                setNormalClassicColor={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBgNormalClassicColor: value === undefined ? '' : value })}
                                                                normalGradientColor={itemAttributes.stackCardItemBgNormalGradientColor}
                                                                setNormalGradientColor={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBgNormalGradientColor: value === undefined ? '' : value })}
                                                                normalCustomGradientSwitcher={itemAttributes.stackCardItemBgNormalCustomGradientSwitcher}
                                                                setNormalCustomGradientSwitcher={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBgNormalCustomGradientSwitcher: value })}
                                                                normalCustomGradientInputValue={itemAttributes.stackCardItemBgNormalCustomGradientInputValue}
                                                                setNormalCustomGradientInputValue={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBgNormalCustomGradientInputValue: value })}
                                                                hoverBackgroundType={itemAttributes.stackCardItemBgHoverBackgroundType}
                                                                setHoverBackgroundType={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBgHoverBackgroundType: value })}
                                                                hoverClassicColor={itemAttributes.stackCardItemBgHoverClassicColor}
                                                                setHoverClassicColor={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBgHoverClassicColor: value === undefined ? '' : value })}
                                                                hoverGradientColor={itemAttributes.stackCardItemBgHoverGradientColor}
                                                                setHoverGradientColor={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBgHoverGradientColor: value === undefined ? '' : value })}
                                                                hoverCustomGradientSwitcher={itemAttributes.stackCardItemBgHoverCustomGradientSwitcher}
                                                                setHoverCustomGradientSwitcher={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBgHoverCustomGradientSwitcher: value })}
                                                                hoverCustomGradientInputValue={itemAttributes.stackCardItemBgHoverCustomGradientInputValue}
                                                                setHoverCustomGradientInputValue={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBgHoverCustomGradientInputValue: value })}
                                                                isBackgroundImage={false}
                                                            />

                                                            <FB_SwitcherControl
                                                                label={__("Item Border Color", "frontis-blocks")}
                                                                globalSwitcher={itemAttributes.stackCardItemBorderColorSwitcher || 'normal'}
                                                                setGlobalSwitcher={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBorderColorSwitcher: value })}
                                                            />

                                                            {(itemAttributes.stackCardItemBorderColorSwitcher || 'normal') === 'normal' && (
                                                                <FB_ColorControl
                                                                    label={__("Normal Color", "frontis-blocks")}
                                                                    globalColor={itemAttributes.stackCardItemBorderColor}
                                                                    setGlobalColor={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBorderColor: value === undefined ? '' : value })}
                                                                />
                                                            )}

                                                            {(itemAttributes.stackCardItemBorderColorSwitcher || 'normal') === 'hover' && (
                                                                <FB_ColorControl
                                                                    label={__("Hover Color", "frontis-blocks")}
                                                                    globalColor={itemAttributes.stackCardItemBorderHoverColor}
                                                                    setGlobalColor={(value) => handleStackCardItemAttributes(item.clientId, { stackCardItemBorderHoverColor: value === undefined ? '' : value })}
                                                                />
                                                            )}
                                                        </div>
                                                    </StackCardInspectorSortableItem>
                                                );
                                            })}
                                        </ul>
                                    </SortableContext>
                                    <Button
                                        variant="primary"
                                        className="fb-stack-cards-add-item-button"
                                        onClick={handleAddCardItem}
                                    >
                                        {__('Add New Card Item', 'frontis-blocks')}
                                    </Button>
                                </DndContext>
                            </div>
                        </BaseControl>
                        {hasStackCardScalePreset(stackCardsPresetStyle) && (
                            <>  
                                <FB_Range
                                    min={0}
                                    max={stackCardsOffsetTopUnits?.[deviceType] === '%' ? 100 : 200}
                                    label={__("Offset Top", "frontis-blocks")}
                                    rangeValue={stackCardsOffsetTop} 
                                    onChangeHandler={(value) => setAttributes({ stackCardsOffsetTop: value })}
                                    rangeUnitHandler={(value) => setAttributes({ stackCardsOffsetTopUnits: value })}
                                    deviceType={deviceType}
                                    units={stackCardsOffsetTopUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={""}
                                />

                                <FB_Range
                                    label={__("Card Item Gap", "frontis-blocks")}
                                    rangeValue={stackCardsCardItemGap} 
                                    onChangeHandler={(value) => setAttributes({ stackCardsCardItemGap: value })}
                                    rangeUnitHandler={(value) => setAttributes({ stackCardsCardItemGapUnits: value })}
                                    deviceType={deviceType}
                                    units={stackCardsCardItemGapUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={""}   
                                />

                            </>
                        )}
                        {(isPresetFour || isPresetTwo || isPresetThree) && (
                            <>
                                {isPresetThree && (
                                    <>
                                        <ToggleControl
                                            label={__('Auto Play', 'frontis-blocks')}
                                            checked={!!stackCardsPresetThreeAutoPlay}
                                            onChange={(value) => setAttributes({ stackCardsPresetThreeAutoPlay: value })}
                                        />

                                        {stackCardsPresetThreeAutoPlay === true && (
                                            <FB_Range
                                                min={500}
                                                max={10000}
                                                label={__('Delay', 'frontis-blocks')}
                                                rangeValue={stackCardsPresetThreeAutoPlayDelay}
                                                onChangeHandler={(value) => setAttributes({ stackCardsPresetThreeAutoPlayDelay: value })}
                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                                rangeStep={100}
                                                resetFallbackValue={""}
                                                isRangeUnit={false}
                                            />
                                        )}

                                        <FB_Range
                                            min={0.1}
                                            max={2}
                                            label={__('Animation Speed', 'frontis-blocks')}
                                            rangeValue={stackCardsPresetThreeAnimationSpeed}
                                            onChangeHandler={(value) => setAttributes({ stackCardsPresetThreeAnimationSpeed: value })}
                                            deviceType={deviceType}
                                            setAttributes={setAttributes}
                                            rangeStep={0.01}
                                            resetFallbackValue={""}
                                            isRangeUnit={false}
                                        />
                                    </>
                                )}

                                {!isPresetThree && (
                                    <>
                                        <ToggleControl
                                            label={__('Auto Play', 'frontis-blocks')}
                                            checked={isPresetTwo ? !!stackCardsPresetTwoAutoPlay : !!stackCardsPresetFourAutoPlay}
                                            onChange={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoAutoPlay: value } : { stackCardsPresetFourAutoPlay: value })}
                                        />

                                        {(isPresetTwo ? stackCardsPresetTwoAutoPlay : stackCardsPresetFourAutoPlay) === true && (
                                            <FB_Range
                                                min={500}
                                                max={10000}
                                                label={__('Delay', 'frontis-blocks')}
                                                rangeValue={isPresetTwo ? stackCardsPresetTwoAutoPlayDelay : stackCardsPresetFourAutoPlayDelay}
                                                onChangeHandler={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoAutoPlayDelay: value } : { stackCardsPresetFourAutoPlayDelay: value })}
                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                                rangeStep={100}
                                                resetFallbackValue={""}
                                                isRangeUnit={false}
                                            />
                                        )}

                                        <FB_Range
                                            min={0.1}
                                            max={2}
                                            label={__('Animation Speed', 'frontis-blocks')}
                                            rangeValue={isPresetTwo ? stackCardsPresetTwoAnimationSpeed : stackCardsPresetFourAnimationSpeed}
                                            onChangeHandler={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoAnimationSpeed: value } : { stackCardsPresetFourAnimationSpeed: value })}
                                            deviceType={deviceType}
                                            setAttributes={setAttributes}
                                            rangeStep={0.01}
                                            resetFallbackValue={""}
                                            isRangeUnit={false}
                                        />

                                        <FB_Range
                                            min={0}
                                            max={300}
                                            label={__('Item Move Distance', 'frontis-blocks')}
                                            rangeValue={isPresetTwo ? stackCardsPresetTwoOutDistance : stackCardsPresetFourOutDistance}
                                            onChangeHandler={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoOutDistance: value } : { stackCardsPresetFourOutDistance: value })}
                                            deviceType={deviceType}
                                            setAttributes={setAttributes}
                                            rangeStep={1}
                                            resetFallbackValue={""}
                                            isRangeUnit={false}
                                        />

                                        <FB_Range
                                            min={0}
                                            max={1}
                                            label={__('Min Scale', 'frontis-blocks')}
                                            rangeValue={isPresetTwo ? stackCardsPresetTwoMinScale : stackCardsPresetFourMinScale}
                                            onChangeHandler={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoMinScale: value } : { stackCardsPresetFourMinScale: value })}
                                            deviceType={deviceType}
                                            setAttributes={setAttributes}
                                            rangeStep={0.01}
                                            resetFallbackValue={""}
                                            isRangeUnit={false}
                                        />

                                        <FB_Range
                                            min={0}
                                            max={0.5}
                                            label={__('Scale(Horizontal)', 'frontis-blocks')}
                                            rangeValue={isPresetTwo ? stackCardsPresetTwoScaleStep : stackCardsPresetFourScaleStep}
                                            onChangeHandler={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoScaleStep: value } : { stackCardsPresetFourScaleStep: value })}
                                            deviceType={deviceType}
                                            setAttributes={setAttributes}
                                            rangeStep={0.01}
                                            resetFallbackValue={""}
                                            isRangeUnit={false}
                                        />

                                        <FB_Range
                                            min={0}
                                            max={0.5}
                                            label={__('Scale(Vertical)', 'frontis-blocks')}
                                            rangeValue={isPresetTwo ? stackCardsPresetTwoScaleYStep : stackCardsPresetFourScaleYStep}
                                            onChangeHandler={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoScaleYStep: value } : { stackCardsPresetFourScaleYStep: value })}
                                            deviceType={deviceType}
                                            setAttributes={setAttributes}
                                            rangeStep={0.01}
                                            resetFallbackValue={""}
                                            isRangeUnit={false}
                                        />

                                        <FB_Range
                                            min={0}
                                            max={0.5}
                                            label={__('Opacity Step', 'frontis-blocks')}
                                            rangeValue={isPresetTwo ? stackCardsPresetTwoOpacityStep : stackCardsPresetFourOpacityStep}
                                            onChangeHandler={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoOpacityStep: value } : { stackCardsPresetFourOpacityStep: value })}
                                            deviceType={deviceType}
                                            setAttributes={setAttributes}
                                            rangeStep={0.01}
                                            resetFallbackValue={""}
                                            isRangeUnit={false}
                                        />
                                    </>
                                )}

                                <ToggleControl
                                    label={__('Show All Layers', 'frontis-blocks')}
                                    checked={isPresetTwo ? !!stackCardsPresetTwoShowAllLayers : isPresetThree ? !!stackCardsPresetThreeShowAllLayers : !!stackCardsPresetFourShowAllLayers}
                                    onChange={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoShowAllLayers: value } : isPresetThree ? { stackCardsPresetThreeShowAllLayers: value } : { stackCardsPresetFourShowAllLayers: value })}
                                />

                                {!(isPresetTwo ? stackCardsPresetTwoShowAllLayers : isPresetThree ? stackCardsPresetThreeShowAllLayers : stackCardsPresetFourShowAllLayers) && (
                                    <FB_Range
                                        min={1}
                                        max={12}
                                        label={__('Visible Layers', 'frontis-blocks')}
                                        rangeValue={isPresetTwo ? stackCardsPresetTwoVisibleLayers : isPresetThree ? stackCardsPresetThreeVisibleLayers : stackCardsPresetFourVisibleLayers}
                                        onChangeHandler={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoVisibleLayers: value } : isPresetThree ? { stackCardsPresetThreeVisibleLayers: value } : { stackCardsPresetFourVisibleLayers: value })}
                                        deviceType={deviceType}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={""}
                                        isRangeUnit={false}
                                    />
                                )}

                                <ToggleControl
                                    label={__('Keyboard Navigation', 'frontis-blocks')}
                                    checked={isPresetTwo ? !!stackCardsPresetTwoKeyboardNavigation : isPresetThree ? !!stackCardsPresetThreeKeyboardNavigation : !!stackCardsPresetFourKeyboardNavigation}
                                    onChange={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoKeyboardNavigation: value } : isPresetThree ? { stackCardsPresetThreeKeyboardNavigation: value } : { stackCardsPresetFourKeyboardNavigation: value })}
                                />

                                <ToggleControl
                                    label={__('Card Click To Active', 'frontis-blocks')}
                                    checked={isPresetTwo ? !!stackCardsPresetTwoCardClickToActive : isPresetThree ? !!stackCardsPresetThreeCardClickToActive : !!stackCardsPresetFourCardClickToActive}
                                    onChange={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoCardClickToActive: value } : isPresetThree ? { stackCardsPresetThreeCardClickToActive: value } : { stackCardsPresetFourCardClickToActive: value })}
                                />

                                {isPresetFour && (
                                    <>
                                        <ToggleControl
                                            label={__('Show Navigation', 'frontis-blocks')}
                                            checked={!!stackCardsPresetFourShowNavigation}
                                            onChange={(value) => setAttributes({ stackCardsPresetFourShowNavigation: value })}
                                        />

                                        {stackCardsPresetFourShowNavigation && (
                                            <>
                                                <TextControl
                                                    label={__("Previous", "frontis-blocks")}
                                                    value={previousButtonText}
                                                    onChange={(value) => setAttributes({ previousButtonText: value })}
                                                />
                                                <TextControl
                                                    label={__("Next", "frontis-blocks")}
                                                    value={nextButtonText}
                                                    onChange={(value) => setAttributes({ nextButtonText: value })}
                                                />
                                                <BaseControl
                                                    label={__("Previous Icon", "frontis-blocks")}
                                                    id="fb-setting-text-alignment"
                                                    className="fb-setting-text-alignment"
                                                >
                                                    <ButtonGroup
                                                        className="fb-setting-text-alignment-group-btn"
                                                    >
                                                        {[
                                                            { label: __('Text', 'frontis-blocks'), value: 'none' },
                                                            { label: __('Icon', 'frontis-blocks'), value: 'icon' },
                                                            { label: __('Text+Icon', 'frontis-blocks'), value: 'icon-text' },
                                                        ].map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ previousButtonIconAlign: item.value })}
                                                                className={`fb-setting-text-alignment-single-btn ${previousButtonIconAlign === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                    {(previousButtonIconAlign === 'icon' || previousButtonIconAlign === 'icon-text') && (
                                                        <>
                                                            <FBIconPicker value={previousButtonIcon} setIconHandler={previousButtonIconHandler} />
                                                            <SelectControl
                                                                label={__("Icon Position", "frontis-blocks")}
                                                                value={previousButtonIconPosition}
                                                                options={ICON_POSITION}
                                                                onChange={(value) => setAttributes({ previousButtonIconPosition: value })}
                                                            />
                                                        </>
                                                    )}
                                                </BaseControl>

                                                <BaseControl
                                                    label={__("Next Icon", "frontis-blocks")}
                                                    id="fb-setting-next-icon-alignment"
                                                    className="fb-setting-text-alignment"
                                                >
                                                    <ButtonGroup className="fb-setting-text-alignment-group-btn">
                                                        {[
                                                            { label: __('Text', 'frontis-blocks'), value: 'none' },
                                                            { label: __('Icon', 'frontis-blocks'), value: 'icon' },
                                                            { label: __('Text+Icon', 'frontis-blocks'), value: 'icon-text' },
                                                        ].map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ nextButtonIconAlign: item.value })}
                                                                className={`fb-setting-text-alignment-single-btn ${nextButtonIconAlign === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                    {(nextButtonIconAlign === 'icon' || nextButtonIconAlign === 'icon-text') && (
                                                        <>
                                                            <FBIconPicker value={nextButtonIcon} setIconHandler={nextButtonIconHandler} />
                                                            <SelectControl
                                                                label={__("Icon Position", "frontis-blocks")}
                                                                value={nextButtonIconPosition}
                                                                options={ICON_POSITION}
                                                                onChange={(value) => setAttributes({ nextButtonIconPosition: value })}
                                                            />
                                                        </>
                                                    )}
                                                </BaseControl>
                                            </>
                                        )}
                                    </>
                                )}
                            </>
                        )}
					</PanelBody>
                    
				</div>
			</div>
		</>
	);

	/**
     * Inspector Style Controls
     */
	const styleControls = (
		<>

            {(isPresetFour || isPresetTwo || isPresetThree) && (
                <div className="fb-setting-style-tab-wrapper">
                    <div className="fb-setting-inner-wrapper">
                        
                        <PanelBody
                            title={isPresetTwo ? __('Stack Left', 'frontis-blocks') : isPresetThree ? __('Stack Right', 'frontis-blocks') : __('Stack Over', 'frontis-blocks')}
                            initialOpen={true}
                        >
                            <FB_Range
                                min={100}
                                max={2000}
                                label={isPresetThree ? __('Item Width', 'frontis-blocks') : __('Width', 'frontis-blocks')}
                                rangeValue={isPresetTwo ? stackCardsPresetTwoCardWidth : isPresetThree ? stackCardsPresetThreeItemWidth : stackCardsPresetFourCardWidth}
                                onChangeHandler={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoCardWidth: value } : isPresetThree ? { stackCardsPresetThreeItemWidth: value } : { stackCardsPresetFourCardWidth: value })}
                                rangeUnitHandler={(value) => setAttributes(isPresetTwo ? { stackCardsPresetTwoCardWidthUnits: value } : isPresetThree ? { stackCardsPresetThreeItemWidthUnits: value } : { stackCardsPresetFourCardWidthUnits: value })}
                                deviceType={deviceType}
                                units={isPresetTwo ? stackCardsPresetTwoCardWidthUnits : isPresetThree ? stackCardsPresetThreeItemWidthUnits : stackCardsPresetFourCardWidthUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                            />

                            {isPresetTwo && (
                                <FB_Range
                                    min={0}
                                    max={200}
                                    label={__('Left Offset Step', 'frontis-blocks')}
                                    rangeValue={stackCardsPresetTwoLeftOffsetStep}
                                    onChangeHandler={(value) => setAttributes({ stackCardsPresetTwoLeftOffsetStep: value })}
                                    deviceType={deviceType}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={""}
                                    isRangeUnit={false}
                                />
                            )}

                            {isPresetThree && (
                                <>
                                    <FB_Range
                                        min={100}
                                        max={2000}
                                        label={__('Frame Width', 'frontis-blocks')}
                                        rangeValue={stackCardsPresetThreeFrameWidth}
                                        onChangeHandler={(value) => setAttributes({ stackCardsPresetThreeFrameWidth: value })}
                                        rangeUnitHandler={(value) => setAttributes({ stackCardsPresetThreeFrameWidthUnits: value })}
                                        deviceType={deviceType}
                                        units={stackCardsPresetThreeFrameWidthUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={""}
                                    />

                                    <FB_Range
                                        min={100}
                                        max={2000}
                                        label={__('Frame Height', 'frontis-blocks')}
                                        rangeValue={stackCardsPresetThreeFrameHeight}
                                        onChangeHandler={(value) => setAttributes({ stackCardsPresetThreeFrameHeight: value })}
                                        rangeUnitHandler={(value) => setAttributes({ stackCardsPresetThreeFrameHeightUnits: value })}
                                        deviceType={deviceType}
                                        units={stackCardsPresetThreeFrameHeightUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={""}
                                    />

                                    <FB_Range
                                        min={0}
                                        max={200}
                                        label={__('Right Bottom Gap', 'frontis-blocks')}
                                        rangeValue={stackCardsPresetThreeOffsetStep}
                                        onChangeHandler={(value) => setAttributes({ stackCardsPresetThreeOffsetStep: value })}
                                        deviceType={deviceType}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={""}
                                        isRangeUnit={false}
                                    />
                                </>
                            )}

                            {isPresetFour && (
                                <>
                                    <ToggleControl
                                        label={__('Active Border', 'frontis-blocks')}
                                        checked={!!stackCardsPresetFourActiveBorder}
                                        onChange={(value) => setAttributes({ stackCardsPresetFourActiveBorder: value })}
                                    />

                                    {stackCardsPresetFourActiveBorder && (
                                        <>
                                            <FB_Range
                                                min={0}
                                                max={20}
                                                label={__('Border Width', 'frontis-blocks')}
                                                rangeValue={stackCardsPresetFourActiveBorderWidth}
                                                onChangeHandler={(value) => setAttributes({ stackCardsPresetFourActiveBorderWidth: value })}
                                                rangeUnitHandler={(value) => setAttributes({ stackCardsPresetFourActiveBorderWidthUnits: value })}
                                                deviceType={deviceType}
                                                units={stackCardsPresetFourActiveBorderWidthUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={""}
                                            />

                                            <FB_ColorControl
                                                label={__('Border Color', 'frontis-blocks')}
                                                globalColor={stackCardsPresetFourActiveBorderColor}
                                                setGlobalColor={(value) => setAttributes({ stackCardsPresetFourActiveBorderColor: value === undefined ? '' : value })}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </PanelBody>

                        {isPresetFour && (
                        <PanelBody title={__('Navigation', 'frontis-blocks')} initialOpen={false}>
                            
                            <SelectControl
                                label={__('Button Position', 'frontis-blocks')}
                                value={stackCardsPresetFourButtonVerticalAlign}
                                options={[
                                    { label: __('Center', 'frontis-blocks'), value: 'center' },
                                    { label: __('Top', 'frontis-blocks'), value: 'top' },
                                    { label: __('Bottom', 'frontis-blocks'), value: 'bottom' },
                                ]}
                                onChange={(value) => setAttributes({ stackCardsPresetFourButtonVerticalAlign: value })}
                            />

                            <FB_Range
                                min={0}
                                max={100}
                                label={__('Vertical Offset', 'frontis-blocks')}
                                rangeValue={stackCardsPresetFourButtonVerticalOffset}
                                onChangeHandler={(value) => setAttributes({ stackCardsPresetFourButtonVerticalOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ stackCardsPresetFourButtonVerticalOffsetUnits: value })}
                                deviceType={deviceType}
                                units={stackCardsPresetFourButtonVerticalOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                            />

                            <FB_Range
                                min={0}
                                max={200}
                                label={__('Side Offset', 'frontis-blocks')}
                                rangeValue={stackCardsPresetFourButtonSideOffset}
                                onChangeHandler={(value) => setAttributes({ stackCardsPresetFourButtonSideOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ stackCardsPresetFourButtonSideOffsetUnits: value })}
                                deviceType={deviceType}
                                units={stackCardsPresetFourButtonSideOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                            />
                            <FB_TypographyControl
                                globalTypoControlActive={true}
                                globalTypoSwitcher={stackCardsNavigationButtonGlobalTypoSwitcher}
                                storeGlobalTypographyData={(value) => setAttributes({ stackCardsNavigationButtonGlobalTypographyData: value })}

                                globalTypoType={stackCardsNavigationButtonGlobalTypoType}
                                onChangeGlobalTypoType={(value) => {
                                    setAttributes({ 
                                        stackCardsNavigationButtonGlobalTypoType: value, 
                                        stackCardsNavigationButtonGlobalTypoSwitcher: value === 'default' ? {...stackCardsNavigationButtonGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...stackCardsNavigationButtonGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                                    })
                                }}

                                globalTypoOption={stackCardsNavigationButtonGlobalTypoOption}
                                onChangeGlobalTypoOption={(value) => setAttributes({ stackCardsNavigationButtonGlobalTypoOption: value })}

                                fontFamily={stackCardsNavigationButtonFontFamily}
                                onChangeFontFamily={(value) => setAttributes({ stackCardsNavigationButtonFontFamily: value, stackCardsNavigationButtonGlobalTypoSwitcher: {...stackCardsNavigationButtonGlobalTypoSwitcher, fontFamily: value && false} })}

                                fontSize={stackCardsNavigationButtonFontSize}
                                onChangeFontSize={(value) => setAttributes({ stackCardsNavigationButtonFontSize: value, stackCardsNavigationButtonGlobalTypoSwitcher: {...stackCardsNavigationButtonGlobalTypoSwitcher, fontSize: value && false} })}

                                fontSizeUnits={stackCardsNavigationButtonFontSizeUnits}
                                onChangeFontSizeUnit={(value) => setAttributes({ stackCardsNavigationButtonFontSizeUnits: value })}

                                fontWeight={stackCardsNavigationButtonFontWeight}
                                onChangeFontWeight={(value) => setAttributes({ stackCardsNavigationButtonFontWeight: value, stackCardsNavigationButtonGlobalTypoSwitcher: {...stackCardsNavigationButtonGlobalTypoSwitcher, fontWeight: value && false} })}

                                fontStyle={stackCardsNavigationButtonFontStyle}
                                onChangeFontStyle={(value) => setAttributes({ stackCardsNavigationButtonFontStyle: value, stackCardsNavigationButtonGlobalTypoSwitcher: {...stackCardsNavigationButtonGlobalTypoSwitcher, fontStyle: value && false} })}

                                textTransform={stackCardsNavigationButtonTextTransform}
                                onChangeTextTransform={(value) => setAttributes({ stackCardsNavigationButtonTextTransform: value, stackCardsNavigationButtonGlobalTypoSwitcher: {...stackCardsNavigationButtonGlobalTypoSwitcher, textTransform: value && false} })}

                                textDecoration={stackCardsNavigationButtonTextDecoration}
                                onChangeTextDecoration={(value) => setAttributes({ stackCardsNavigationButtonTextDecoration: value, stackCardsNavigationButtonGlobalTypoSwitcher: {...stackCardsNavigationButtonGlobalTypoSwitcher, textDecoration: value && false} })}

                                letterSpacing={stackCardsNavigationButtonLetterSpacing}
                                onChangeLetterSpacing={(value) => setAttributes({ stackCardsNavigationButtonLetterSpacing: value, stackCardsNavigationButtonGlobalTypoSwitcher: {...stackCardsNavigationButtonGlobalTypoSwitcher, letterSpacing: value && false} })}

                                letterSpacingUnits={stackCardsNavigationButtonLetterSpacingUnits}
                                onChangeLetterSpacingUnit={(value) => setAttributes({ stackCardsNavigationButtonLetterSpacingUnits: value })}

                                lineHeight={stackCardsNavigationButtonLineHeight}
                                onChangeLineHeight={(value) => setAttributes({ stackCardsNavigationButtonLineHeight: value, stackCardsNavigationButtonGlobalTypoSwitcher: {...stackCardsNavigationButtonGlobalTypoSwitcher, lineHeight: value && false} })}

                                lineHeightUnits={stackCardsNavigationButtonLineHeightUnits}
                                onChangeLineHeightUnit={(value) => setAttributes({ stackCardsNavigationButtonLineHeightUnits: value })}

                                deviceType={deviceType}
                                setAttributes={setAttributes}
                            />

                            <FB_SwitcherControl
                                label={__("Text Color", "frontis-blocks")}
                                globalSwitcher={stackCardsNavigationButtonColorSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ stackCardsNavigationButtonColorSwitcher: value })}
                            />

                            {stackCardsNavigationButtonColorSwitcher === 'normal' && (
                                <FB_ColorControl
                                    label={__("Nomal Color", "frontis-blocks")}
                                    globalColor={stackCardsNavigationButtonColor}
                                    setGlobalColor={(value) => setAttributes({ stackCardsNavigationButtonColor: value === undefined ? '' : value })}
                                />
                            )}

                            {stackCardsNavigationButtonColorSwitcher === 'hover' && (
                                <FB_ColorControl
                                    label={__("Hover Color", "frontis-blocks")}
                                    globalColor={stackCardsNavigationButtonHoverColor}
                                    setGlobalColor={(value) => setAttributes({ stackCardsNavigationButtonHoverColor: value === undefined ? '' : value })}
                                />
                            )}

                            <FB_BackgroundColorControl
                                label={__("Background Color", "frontis-blocks")}
                                bgColorSwitcher={stackCardsNavigationButtonBackgroundColorSwitcher}
                                setBgColorSwitcher={(value) => setAttributes({ stackCardsNavigationButtonBackgroundColorSwitcher: value })}
                                
                                normalBackgroundType={stackCardsNavigationButtonNormalBackgroundType}
                                setNormalBackgroundType={(value) => setAttributes({ stackCardsNavigationButtonNormalBackgroundType: value })}
                                normalClassicColor={stackCardsNavigationButtonNormalClassicColor}
                                setNormalClassicColor={(value) => setAttributes({ stackCardsNavigationButtonNormalClassicColor: value === undefined ? '' : value })}
                                normalGradientColor={stackCardsNavigationButtonNormalGradientColor}
                                setNormalGradientColor={(value) => setAttributes({ stackCardsNavigationButtonNormalGradientColor: value === undefined ? null : value })}
                                normalCustomGradientSwitcher={stackCardsNavigationButtonNormalCustomGradientSwitcher}
                                setNormalCustomGradientSwitcher={(value) => setAttributes({ stackCardsNavigationButtonNormalCustomGradientSwitcher: value })}
                                normalCustomGradientInputValue={stackCardsNavigationButtonNormalCustomGradientInputValue}
                                setNormalCustomGradientInputValue={(value) => setAttributes({ stackCardsNavigationButtonNormalCustomGradientInputValue: value })}
                                
                                hoverBackgroundType={stackCardsNavigationButtonHoverBackgroundType}
                                setHoverBackgroundType={(value) => setAttributes({ stackCardsNavigationButtonHoverBackgroundType: value })}
                                hoverClassicColor={stackCardsNavigationButtonHoverClassicColor}
                                setHoverClassicColor={(value) => setAttributes({ stackCardsNavigationButtonHoverClassicColor: value === undefined ? '' : value })}
                                hoverGradientColor={stackCardsNavigationButtonHoverGradientColor} 
                                setHoverGradientColor={(value) => setAttributes({ stackCardsNavigationButtonHoverGradientColor: value === undefined ? null : value })}
                                hoverCustomGradientSwitcher={stackCardsNavigationButtonHoverCustomGradientSwitcher}
                                setHoverCustomGradientSwitcher={(value) => setAttributes({ stackCardsNavigationButtonHoverCustomGradientSwitcher: value })}
                                hoverCustomGradientInputValue={stackCardsNavigationButtonHoverCustomGradientInputValue}
                                setHoverCustomGradientInputValue={(value) => setAttributes({ stackCardsNavigationButtonHoverCustomGradientInputValue: value })}

                                isBackgroundImage={false}

                            />

                            <FB_Spacing 
                                label={__("Padding", "frontis-blocks")}
                                deviceType={deviceType}
                                spacingUnitsHandler={handlestackCardsNavigationButtonPaddingUnitsHandler}
                                spacingUnits={stackCardsNavigationButtonPaddingUnits}
                                spacingDesktop={stackCardsNavigationButtonDesktopPadding}
                                spacingTablet={stackCardsNavigationButtonTabPadding}
                                spacingMobile={stackCardsNavigationButtonMobilePadding}
                                handleSpacingUnitHandler={handlestackCardsNavigationButtonPaddingUnitChange}
                                spacingCombineBtn={stackCardsNavigationButtonPaddingLink}
                                spacingCombineBtnHandler={handlestackCardsNavigationButtonPaddingCombineBtn}
                                setAttributes={setAttributes}
                            />

                            <SelectControl
                                label={__("Border Style", "frontis-blocks")}
                                value={stackCardsNavigationButtonBorder}
                                options={BORDER_STYLES}
                                onChange={(value) => setAttributes({ stackCardsNavigationButtonBorder: value })}
                            />

                            <FB_SwitcherControl
                                label={__("Border Color", "frontis-blocks")}
                                globalSwitcher={stackCardsNavigationButtonBorderColorSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ stackCardsNavigationButtonBorderColorSwitcher: value })}
                            />

                            {stackCardsNavigationButtonBorderColorSwitcher === 'normal' && (
                                <FB_ColorControl
                                    label={__("Nomal Color", "frontis-blocks")}
                                    globalColor={stackCardsNavigationButtonBorderColor}
                                    setGlobalColor={(value) => setAttributes({ stackCardsNavigationButtonBorderColor: value === undefined ? '' : value })}
                                />
                            )}

                            {stackCardsNavigationButtonBorderColorSwitcher === 'hover' && (
                                <FB_ColorControl
                                    label={__("Hover Color", "frontis-blocks")}
                                    globalColor={stackCardsNavigationButtonBorderHoverColor}
                                    setGlobalColor={(value) => setAttributes({ stackCardsNavigationButtonBorderHoverColor: value === undefined ? '' : value })}
                                />
                            )}

                            <FB_Spacing 
                                label={__("Border", "frontis-blocks")}
                                deviceType={deviceType}
                                spacingUnitsHandler={handlestackCardsNavigationButtonBorderUnitsHandler}
                                spacingUnits={stackCardsNavigationButtonBorderUnits}
                                spacingDesktop={stackCardsNavigationButtonDesktopBorderWidth}
                                spacingTablet={stackCardsNavigationButtonTabBorderWidth}
                                spacingMobile={stackCardsNavigationButtonMobileBorderWidth}
                                handleSpacingUnitHandler={handlestackCardsNavigationButtonBorderUnitChange}
                                spacingCombineBtn={stackCardsNavigationButtonBorderLink}
                                spacingCombineBtnHandler={handlestackCardsNavigationButtonBorderCombineBtn}
                                setAttributes={setAttributes}
                            />

                            <FB_Spacing 
                                label={__("Border Radius", "frontis-blocks")}
                                deviceType={deviceType}
                                spacingUnitsHandler={handlestackCardsNavigationButtonBorderRadiusUnitsHandler}
                                spacingUnits={stackCardsNavigationButtonBorderRadiusUnits}
                                spacingDesktop={stackCardsNavigationButtonDesktopBorderRadiusWidth}
                                spacingTablet={stackCardsNavigationButtonTabBorderRadiusWidth}
                                spacingMobile={stackCardsNavigationButtonMobileBorderRadiusWidth}
                                handleSpacingUnitHandler={handlestackCardsNavigationButtonBorderRadiusUnitChange}
                                spacingCombineBtn={stackCardsNavigationButtonBorderRadiusLink}
                                spacingCombineBtnHandler={handlestackCardsNavigationButtonBorderRadiusCombineBtn}
                                setAttributes={setAttributes}
                            />

                            <FB_SwitcherControl
                                label={__("Icon Color", "frontis-blocks")}
                                globalSwitcher={stackCardsNavigationButtonIconColorSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ stackCardsNavigationButtonIconColorSwitcher: value })}
                            />

                            {stackCardsNavigationButtonIconColorSwitcher === 'normal' && (
                                <FB_ColorControl
                                    label={__("Nomal Color", "frontis-blocks")}
                                    globalColor={stackCardsNavigationButtonIconColor}
                                    setGlobalColor={(value) => setAttributes({ stackCardsNavigationButtonIconColor: value === undefined ? '' : value })}
                                />
                            )}

                            {stackCardsNavigationButtonIconColorSwitcher === 'hover' && (
                                <FB_ColorControl
                                    label={__("Hover Color", "frontis-blocks")}
                                    globalColor={stackCardsNavigationButtonIconHoverColor}
                                    setGlobalColor={(value) => setAttributes({ stackCardsNavigationButtonIconHoverColor: value === undefined ? '' : value })}
                                />
                            )}

                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Icon Size", "frontis-blocks")}
                                rangeValue={stackCardsNavigationButtonIconSize}
                                onChangeHandler={(value) => setAttributes({ stackCardsNavigationButtonIconSize: value })}
                                rangeUnitHandler={(value) => setAttributes({ stackCardsNavigationButtonIconSizeUnits: value })}
                                deviceType={deviceType}
                                units={stackCardsNavigationButtonIconSizeUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"20"}
                            />
                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Icon Spacing", "frontis-blocks")}
                                rangeValue={stackCardsNavigationButtonIconSpacing}
                                onChangeHandler={(value) => setAttributes({ stackCardsNavigationButtonIconSpacing: value })}
                                rangeUnitHandler={(value) => setAttributes({ stackCardsNavigationButtonIconSpacingUnits: value })}
                                deviceType={deviceType}
                                units={stackCardsNavigationButtonIconSpacingUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"10"}
                            />
                        </PanelBody>
                        )}
                    </div>
                </div>
            )}
            <PanelBody
                title={__("Stacked Item", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={stackCardItemBgColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ stackCardItemBgColorSwitcher: value })}

                    normalBackgroundType={stackCardItemBgNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ stackCardItemBgNormalBackgroundType: value })}
                    normalClassicColor={stackCardItemBgNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ stackCardItemBgNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={stackCardItemBgNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ stackCardItemBgNormalGradientColor: value === undefined ? '' : value })}
                    normalCustomGradientSwitcher={stackCardItemBgNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ stackCardItemBgNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={stackCardItemBgNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ stackCardItemBgNormalCustomGradientInputValue: value })}

                    hoverBackgroundType={stackCardItemBgHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ stackCardItemBgHoverBackgroundType: value })}
                    hoverClassicColor={stackCardItemBgHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ stackCardItemBgHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={stackCardItemBgHoverGradientColor}
                    setHoverGradientColor={(value) => setAttributes({ stackCardItemBgHoverGradientColor: value === undefined ? '' : value })}
                    hoverCustomGradientSwitcher={stackCardItemBgHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ stackCardItemBgHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={stackCardItemBgHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ stackCardItemBgHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}
                />

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleStackCardItemPaddingUnitsHandler}
                    spacingUnits={stackCardItemPaddingUnits}
                    spacingDesktop={stackCardItemPaddingDesktop}
                    spacingTablet={stackCardItemPaddingTablet}
                    spacingMobile={stackCardItemPaddingMobile}
                    handleSpacingUnitHandler={handleStackCardItemPaddingUnitChange}
                    spacingCombineBtn={stackCardItemPaddingLink}
                    spacingCombineBtnHandler={handleStackCardItemPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={stackCardItemBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ stackCardItemBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={stackCardItemBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ stackCardItemBorderColorSwitcher: value })}
                />

                {stackCardItemBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={stackCardItemBorderColor}
                        setGlobalColor={(value) => setAttributes({ stackCardItemBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {stackCardItemBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={stackCardItemBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ stackCardItemBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleStackCardItemBorderUnitsHandler}
                    spacingUnits={stackCardItemBorderUnits}
                    spacingDesktop={stackCardItemBorderDesktop}
                    spacingTablet={stackCardItemBorderTablet}
                    spacingMobile={stackCardItemBorderMobile}
                    handleSpacingUnitHandler={handleStackCardItemBorderUnitChange}
                    spacingCombineBtn={stackCardItemBorderLink}
                    spacingCombineBtnHandler={handleStackCardItemBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleStackCardItemBorderRadiusUnitsHandler}
                    spacingUnits={stackCardItemBorderRadiusUnits}
                    spacingDesktop={stackCardItemBorderRadiusDesktop}
                    spacingTablet={stackCardItemBorderRadiusTablet}
                    spacingMobile={stackCardItemBorderRadiusMobile}
                    handleSpacingUnitHandler={handleStackCardItemBorderRadiusUnitChange}
                    spacingCombineBtn={stackCardItemBorderRadiusLink}
                    spacingCombineBtnHandler={handleStackCardItemBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

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
                            rangeValue={stackCardsGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ stackCardsGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}
                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={stackCardsOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ stackCardsOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={stackCardsPositionType}
                            setPositionType={(value) => setAttributes({ stackCardsPositionType: value })}

                            HZOrientationType={stackCardsHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ stackCardsHZOrientationType: value })
                            }
                            VROrientationType={stackCardsVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ stackCardsVROrientationType: value })
                            }

                            HZLeftOffset={stackCardsHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ stackCardsHZLeftOffset: value })}
                            HZLeftOffsetUnits={stackCardsHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ stackCardsHZLeftOffsetUnits: value })}
                            HZRightOffset={stackCardsHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ stackCardsHZRightOffset: value })}
                            HZRightOffsetUnits={stackCardsHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ stackCardsHZRightOffsetUnits: value })}

                            VRTopOffset={stackCardsVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ stackCardsVRTopOffset: value })}
                            VRTopOffsetUnits={stackCardsVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ stackCardsVRTopOffsetUnits: value })}
                            VRBottomOffset={stackCardsVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ stackCardsVRBottomOffset: value })}
                            VRBottomOffsetUnits={stackCardsVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ stackCardsVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={stackCardsGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ stackCardsGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={stackCardsGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ stackCardsGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Background Color", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_BackgroundColorControl
                            label={__("Background Color", "frontis-blocks")}
                            bgColorSwitcher={stackCardsGlobalBgColorSwitcher}
                            setBgColorSwitcher={(value) => setAttributes({ stackCardsGlobalBgColorSwitcher: value })}

                            normalBackgroundType={stackCardsGlobalBgNormalBackgroundType}
                            setNormalBackgroundType={(value) => setAttributes({ stackCardsGlobalBgNormalBackgroundType: value })}
                            normalClassicColor={stackCardsGlobalBgNormalClassicColor}
                            setNormalClassicColor={(value) => setAttributes({ stackCardsGlobalBgNormalClassicColor: value === undefined ? '' : value })}
                            normalGradientColor={stackCardsGlobalBgNormalGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ stackCardsGlobalBgNormalGradientColor: value === undefined ? '' : value })}
                            normalCustomGradientSwitcher={stackCardsGlobalBgNormalCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ stackCardsGlobalBgNormalCustomGradientSwitcher: value })}
                            normalCustomGradientInputValue={stackCardsGlobalBgNormalCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ stackCardsGlobalBgNormalCustomGradientInputValue: value })}

                            hoverBackgroundType={stackCardsGlobalBgHoverBackgroundType}
                            setHoverBackgroundType={(value) => setAttributes({ stackCardsGlobalBgHoverBackgroundType: value })}
                            hoverClassicColor={stackCardsGlobalBgHoverClassicColor}
                            setHoverClassicColor={(value) => setAttributes({ stackCardsGlobalBgHoverClassicColor: value === undefined ? '' : value })}
                            hoverGradientColor={stackCardsGlobalBgHoverGradientColor}
                            setHoverGradientColor={(value) => setAttributes({ stackCardsGlobalBgHoverGradientColor: value === undefined ? '' : value })}
                            hoverCustomGradientSwitcher={stackCardsGlobalBgHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ stackCardsGlobalBgHoverCustomGradientSwitcher: value })}
                            hoverCustomGradientInputValue={stackCardsGlobalBgHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ stackCardsGlobalBgHoverCustomGradientInputValue: value })}

                            isBackgroundImage={false}
                        />
                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={stackCardsGlobalMarginUnits}
                            spacingDesktop={stackCardsGlobalMarginDesktop}
                            spacingTablet={stackCardsGlobalMarginTablet}
                            spacingMobile={stackCardsGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={stackCardsGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Border and Shadow", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={stackCardsGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ stackCardsGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={stackCardsGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ stackCardsGlobalBorderColorSwitcher: value })}
                        />

                        {stackCardsGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={stackCardsGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ stackCardsGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {stackCardsGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={stackCardsGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ stackCardsGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={stackCardsGlobalBorderUnits}
                            spacingDesktop={stackCardsGlobalBorderDesktop}
                            spacingTablet={stackCardsGlobalBorderTablet}
                            spacingMobile={stackCardsGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={stackCardsGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={stackCardsGlobalBorderRadiusUnits}
                            spacingDesktop={stackCardsGlobalBorderRadiusDesktop}
                            spacingTablet={stackCardsGlobalBorderRadiusTablet}
                            spacingMobile={stackCardsGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={stackCardsGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={stackCardsGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ stackCardsGlobalBoxShadowSwitcher: value })}
                        />

                        {stackCardsGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ stackCardsGlobalBoxShadowValues: value })}
                                initialShadowValue={stackCardsGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ stackCardsGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {stackCardsGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ stackCardsGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={stackCardsGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ stackCardsGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}

                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={stackCardsDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ stackCardsDesktopSwitcher: value })}

                            tabletValue={stackCardsTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ stackCardsTabletSwitcher: value })}

                            mobileValue={stackCardsMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ stackCardsMobileSwitcher: value })}
                        />

                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={stackCardsCustomCSS}
                            onChangeValue={(value) => setAttributes({ stackCardsCustomCSS: value })}
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