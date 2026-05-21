import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useEffect, useMemo, memo } from "@wordpress/element";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { select, dispatch } from "@wordpress/data";

import {
	PanelBody,
	BaseControl,
	TabPanel,
	Button,
	ButtonGroup,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";

import {
	BORDER_STYLES,
	TITLE_ALIGNMENT,
	ICON_POSITIONS,
	ICON_SWITCHER,
	OVERFLOW_OP,
} from "@Constants/fbConstants";

import FB_Spacing from "@Components/spacing";
import FB_Range from "@Components/range";

import "./editor.scss";
import FBIconPicker from "../../components/icon-picker";
import FB_TypographyControl from "../../components/typography-control";
import FB_BackgroundColorControl from "../../components/background-color-control";
import FB_BoxShadowControl from "../../components/box-shadow";
import FB_BackgroundImageControl from "../../components/background-image-control";
import FB_HtmlTagControl from "../../components/html-tag-control";
import FB_ColorControl from "../../components/color-control";
import FB_SwitcherControl from "../../components/switcher-control";
import FB_InputControl from "@Components/input-control";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import getCustomCss from "@Utils/getCustomCss";
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from "@Components/position-control";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_Presets from "@Components/presets";
import { imageAccordionPresets } from "./presets";

const Inspector = ({ attributes, setAttributes, clientId }) => {
	const {
		blockID,
		imageAccordionPresetStyle,
		imageAccordionAlignment,
		imageAccordionIconZIndex,
		imageAccordionItems,

		imageAccordionIconSize,
		imageAccordionIconSizeUnits,

		imageAccordionIconColorSwitcher,
		imageAccordionIconColor,
		imageAccordionIconHoverColor,

		imageAccordionIconBorder,
		imageAccordionIconBorderColorSwitcher,
		imageAccordionIconBorderColor,
		imageAccordionIconBorderHoverColor,

		imageAccordionIconBorderUnits,
		imageAccordionIconBorderDesktop,
		imageAccordionIconBorderTablet,
		imageAccordionIconBorderMobile,
		imageAccordionIconBorderLink,

		imageAccordionIconBorderRadiusUnits,
		imageAccordionIconBorderRadiusDesktop,
		imageAccordionIconBorderRadiusTablet,
		imageAccordionIconBorderRadiusMobile,
		imageAccordionIconBorderRadiusLink,

		imageAccordionIconGapSize,
		imageAccordionIconGapUnits,

		imageAccordionIconPaddingUnits,
		imageAccordionIconPaddingDesktop,
		imageAccordionIconPaddingTablet,
		imageAccordionIconPaddingMobile,
		imageAccordionIconPaddingLink,

		titleGlobalTypoSwitcher,
		titleGlobalTypographyData,
		titleGlobalTypoType,
		titleGlobalTypoOption,
		titleFontFamily,
		titleFontSize,
		titleFontSizeUnits,
		titleFontWeight,
		titleFontStyle,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacing,
		titleLetterSpacingUnits,
		titleLineHeight,
		titleLineHeightUnits,

		imageAccordionType,
		displayIcon,
		transitionDuration,
		tabIconSwitcher,
		tabIcon,
		tabImageUrl,
		tabImageAlt,
		tabImageID,
		tabImagePosition,
		tabImageAttachment,
		tabImageRepeat,
		tabImageSize,

		expandedIconSwitcher,
		expandedIcon,
		expandedImageUrl,
		expandedImageAlt,
		expandedImageID,
		expandedImagePosition,
		expandedImageAttachment,
		expandedImageRepeat,
		expandedImageSize,
		contentAlign,
		contentColor,
		iconColor,
		iconPosition,
		titleAlignment,
		tagName,
		faqSchema,

		titleColorSwitcher,
		titleColor,
		titleHoverColor,

		imageAccordionItemGap,
		imageAccordionItemGapUnits,

		titleSpacing,
		titleSpacingUnits,

		prefixSuffixSpacing,
		prefixSuffixSpacingUnits,

		titleIconSize,
		titleIconSizeUnits,

		titlePrefixIconSize,
		titlePrefixIconSizeUnits,

		titleSuffixIconSize,
		titleSuffixIconSizeUnits,

		titleBGColorSwitcher,
		titleBGColor,
		titleBGHoverColor,
		titleIconColorSwitcher,
		titleIconColor,
		titleIconHoverColor,

		// imageAccordion Items
		imageAccordionItemsPaddingUnits,
		imageAccordionItemsDesktopPadding,
		imageAccordionItemsTabPadding,
		imageAccordionItemsMobilePadding,
		imageAccordionItemsPaddingLink,

		imageAccordionItemsBorder,
		imageAccordionItemsBorderColor,
		imageAccordionItemsBorderHoverColor,
		imageAccordionItemsBorderColorSwitcher,
		imageAccordionItemsBorderUnits,
		imageAccordionItemsDesktopBorderWidth,
		imageAccordionItemsTabBorderWidth,
		imageAccordionItemsMobileBorderWidth,
		imageAccordionItemsBorderLink,
		imageAccordionItemsBorderRadiusUnits,
		imageAccordionItemsDesktopBorderRadiusWidth,
		imageAccordionItemsTabBorderRadiusWidth,
		imageAccordionItemsMobileBorderRadiusWidth,
		imageAccordionItemsBorderRadiusLink,

		// imageAccordion Advance
		imageAccordionZIndex,
		imageAccordionOverflow,
		imageAccordionPaddingUnits,
		imageAccordionDesktopPadding,
		imageAccordionTabPadding,
		imageAccordionMobilePadding,
		imageAccordionPaddingLink,
		imageAccordionMarginUnits,
		imageAccordionDesktopMargin,
		imageAccordionTabMargin,
		imageAccordionMobileMargin,
		imageAccordionMarginLink,
		imageAccordionBorder,
		imageAccordionBorderColor,
		imageAccordionBorderHoverColor,
		imageAccordionBorderColorSwitcher,
		imageAccordionBorderUnits,
		imageAccordionDesktopBorderWidth,
		imageAccordionTabBorderWidth,
		imageAccordionMobileBorderWidth,
		imageAccordionBorderLink,
		imageAccordionBorderRadiusUnits,
		imageAccordionDesktopBorderRadiusWidth,
		imageAccordionTabBorderRadiusWidth,
		imageAccordionMobileBorderRadiusWidth,
		imageAccordionBorderRadiusLink,
		imageAccordionDesktopSwitcher,
		imageAccordionTabletSwitcher,
		imageAccordionMobileSwitcher,

		// Boxshadow
		imageAccordionGlobalBoxShadowSwitcher,
		imageAccordionGlobalBoxShadowValues,
		imageAccordionGlobalBoxShadowCssValue,
		imageAccordionGlobalHoverBoxShadowValues,
		imageAccordionGlobalHoverBoxShadowCssValue,

		// Backgorund
		imageAccordionBgColorSwitcher,
		imageAccordionBgType,
		imageAccordionBgClassicColor,
		imageAccordionBgGradientColor,
		imageAccordionBgCustomGradientSwitcher,
		imageAccordionBgCustomGradientInputValue,
		imageAccordionBgImageUrl,
		imageAccordionBgImageAlt,
		imageAccordionBgImageID,
		imageAccordionBgImagePosition,
		imageAccordionBgImageAttachment,
		imageAccordionBgImageRepeat,
		imageAccordionBgImageSize,
		imageAccordionBgHoverType,
		imageAccordionBgHoverClassicColor,
		imageAccordionBgHoverGradientColor,
		imageAccordionBgHoverCustomGradientSwitcher,
		imageAccordionBgHoverCustomGradientInputValue,
		imageAccordionBgHoverImageUrl,
		imageAccordionBgHoverImageAlt,
		imageAccordionBgHoverImageID,
		imageAccordionBgHoverImagePosition,
		imageAccordionBgHoverImageAttachment,
		imageAccordionBgHoverImageRepeat,
		imageAccordionBgHoverImageSize,

		// Item Box Shadow
		imageAccordionItemBoxShadowSwitcher,
		imageAccordionItemBoxShadowValues,
		imageAccordionItemBoxShadowCssValue,
		imageAccordionItemHoverBoxShadowValues,
		imageAccordionItemHoverBoxShadowCssValue,

		// Item Backgorund
		titleBgColorSwitcher,
		titleBgType,
		titleBgClassicColor,
		titleBgGradientColor,
		titleBgCustomGradientSwitcher,
		titleBgCustomGradientInputValue,
		titleBgImageUrl,
		titleBgImageAlt,
		titleBgImageID,
		titleBgImagePosition,
		titleBgImageAttachment,
		titleBgImageRepeat,
		titleBgImageSize,
		titleBgHoverType,
		titleBgHoverClassicColor,
		titleBgHoverGradientColor,
		titleBgHoverCustomGradientSwitcher,
		titleBgHoverCustomGradientInputValue,
		titleBgHoverImageUrl,
		titleBgHoverImageAlt,
		titleBgHoverImageID,
		titleBgHoverImagePosition,
		titleBgHoverImageAttachment,
		titleBgHoverImageRepeat,
		titleBgHoverImageSize,

		// imageAccordion Item Content
		contentBorder,
		contentBorderColor,
		contentBorderHoverColor,
		contentBorderColorSwitcher,
		contentBorderUnits,
		contentDesktopBorderWidth,
		contentTabBorderWidth,
		contentMobileBorderWidth,
		contentBorderLink,
		contentBorderRadiusUnits,
		contentDesktopBorderRadiusWidth,
		contentTabBorderRadiusWidth,
		contentMobileBorderRadiusWidth,
		contentBorderRadiusLink,
		contentDesktopSwitcher,
		contentTabletSwitcher,
		contentMobileSwitcher,

		// Item Box Shadow
		contentBoxShadowSwitcher,
		contentBoxShadowValues,
		contentBoxShadowCssValue,
		contentHoverBoxShadowValues,
		contentHoverBoxShadowCssValue,

		// Item Backgorund
		contentBgColorSwitcher,
		contentBgType,
		contentBgClassicColor,
		contentBgGradientColor,
		contentBgCustomGradientSwitcher,
		contentBgCustomGradientInputValue,
		contentBgImageUrl,
		contentBgImageAlt,
		contentBgImageID,
		contentBgImagePosition,
		contentBgImageAttachment,
		contentBgImageRepeat,
		contentBgImageSize,
		contentBgHoverType,
		contentBgHoverClassicColor,
		contentBgHoverGradientColor,
		contentBgHoverCustomGradientSwitcher,
		contentBgHoverCustomGradientInputValue,
		contentBgHoverImageUrl,
		contentBgHoverImageAlt,
		contentBgHoverImageID,
		contentBgHoverImagePosition,
		contentBgHoverImageAttachment,
		contentBgHoverImageRepeat,
		contentBgHoverImageSize,

		imageAccordionCustomCSS,
		imageAccordionGlobalWraperID,
		imageAccordionGlobalWraperClass,

		// Position
		imageAccordionPositionType,
		imageAccordionHZOrientationType,
		imageAccordionVROrientationType,
		imageAccordionHZLeftOffset,
		imageAccordionHZLeftOffsetUnits,
		imageAccordionHZRightOffset,
		imageAccordionHZRightOffsetUnits,
		imageAccordionVRTopOffset,
		imageAccordionVRTopOffsetUnits,
		imageAccordionVRBottomOffset,
		imageAccordionVRBottomOffsetUnits,
	} = attributes;

	const deviceType = useDeviceType();

	/** Start imageAccordions Gap */
	const imageAccordionItemGapHandler = (value) => {
		setAttributes({ imageAccordionItemGap: value });
	};

	const imageAccordionItemGapUnitsHandler = (value) => {
		setAttributes({ imageAccordionItemGapUnits: value });
	};

	/** Start Title Spacing */
	const titleSpacingHandler = (value) => {
		setAttributes({ titleSpacing: value });
	};

	const titleSpacingUnitsHandler = (value) => {
		setAttributes({ titleSpacingUnits: value });
	};

	/** Start Prefix Suffix Spacing */
	const prefixSuffixSpacingHandler = (value) => {
		setAttributes({ prefixSuffixSpacing: value });
	};

	const prefixSuffixSpacingUnitsHandler = (value) => {
		setAttributes({ prefixSuffixSpacingUnits: value });
	};

	/** Start Title Suffix Icon Size */
	const titleSuffixIconSizeHandler = (value) => {
		setAttributes({ titleSuffixIconSize: value });
	};

	const titleSuffixIconSizeUnitsHandler = (value) => {
		setAttributes({ titleSuffixIconSizeUnits: value });
	};

	/** Start Title Suffix Icon Size */
	const titleIconSizeHandler = (value) => {
		setAttributes({ titleIconSize: value });
	};

	const titleIconSizeUnitsHandler = (value) => {
		setAttributes({ titleIconSizeUnits: value });
	};

	/** Start Title Suffix Icon Size */
	const titlePrefixIconSizeHandler = (value) => {
		setAttributes({ titlePrefixIconSize: value });
	};

	const titlePrefixIconSizeUnitsHandler = (value) => {
		setAttributes({ titlePrefixIconSizeUnits: value });
	};

	// FB_Icon function
	const titleTabIconHandler = (value) => {
		setAttributes({ tabIcon: value });
	};
	const titleExpandedIconHandler = (value) => {
		setAttributes({ expandedIcon: value });
	};

	// imageAccordionItems Padding Functionb
	const handleimageAccordionItemsPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageAccordionItemsPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionItemsDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionItemsTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionItemsMobilePadding: {
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
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionItemsDesktopPadding: {
							...imageAccordionItemsDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionItemsTabPadding: {
							...imageAccordionItemsTabPadding,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionItemsMobilePadding: {
							...imageAccordionItemsMobilePadding,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleimageAccordionItemsPaddingCombineBtn = () => {
		setAttributes({
			imageAccordionItemsPaddingLink: !imageAccordionItemsPaddingLink,
		});
	};

	const handleimageAccordionItemsPaddingUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionItemsPaddingUnits: {
				...imageAccordionItemsPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	// imageAccordionItems BorderWidth Function
	const handleimageAccordionItemsBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageAccordionItemsBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionItemsDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionItemsTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionItemsMobileBorderWidth: {
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
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionItemsDesktopBorderWidth: {
							...imageAccordionItemsDesktopBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionItemsTabBorderWidth: {
							...imageAccordionItemsTabBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionItemsMobileBorderWidth: {
							...imageAccordionItemsMobileBorderWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleimageAccordionItemsBorderCombineBtn = () => {
		setAttributes({
			imageAccordionItemsBorderLink: !imageAccordionItemsBorderLink,
		});
	};

	const handleimageAccordionItemsBorderUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionItemsBorderUnits: {
				...imageAccordionItemsBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	// imageAccordionItems BorderRadiusWidth Function
	const handleimageAccordionItemsBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageAccordionItemsBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionItemsDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionItemsTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionItemsMobileBorderRadiusWidth: {
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
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionItemsDesktopBorderRadiusWidth: {
							...imageAccordionItemsDesktopBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionItemsTabBorderRadiusWidth: {
							...imageAccordionItemsTabBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionItemsMobileBorderRadiusWidth: {
							...imageAccordionItemsMobileBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleimageAccordionItemsBorderRadiusCombineBtn = () => {
		setAttributes({
			imageAccordionItemsBorderRadiusLink: !imageAccordionItemsBorderRadiusLink,
		});
	};

	const handleimageAccordionItemsBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionItemsBorderRadiusUnits: {
				...imageAccordionItemsBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	// imageAccordion content margin
	const handleimageAccordionMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageAccordionMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionMobileMargin: {
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
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionDesktopMargin: {
							...imageAccordionDesktopMargin,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionTabMargin: {
							...imageAccordionTabMargin,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionMobileMargin: {
							...imageAccordionMobileMargin,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleimageAccordionMarginCombineBtn = () => {
		setAttributes({ imageAccordionMarginLink: !imageAccordionMarginLink });
	};

	const handleimageAccordionMarginUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionMarginUnits: {
				...imageAccordionMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	// imageAccordion Padding Functionb
	const handleimageAccordionPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageAccordionPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionMobilePadding: {
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
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionDesktopPadding: {
							...imageAccordionDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionTabPadding: {
							...imageAccordionTabPadding,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionMobilePadding: {
							...imageAccordionMobilePadding,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleimageAccordionPaddingCombineBtn = () => {
		setAttributes({ imageAccordionPaddingLink: !imageAccordionPaddingLink });
	};

	const handleimageAccordionPaddingUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionPaddingUnits: {
				...imageAccordionPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	// imageAccordion BorderWidth Function
	const handleimageAccordionBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageAccordionBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionMobileBorderWidth: {
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
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionDesktopBorderWidth: {
							...imageAccordionDesktopBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionTabBorderWidth: {
							...imageAccordionTabBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionMobileBorderWidth: {
							...imageAccordionMobileBorderWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleimageAccordionBorderCombineBtn = () => {
		setAttributes({ imageAccordionBorderLink: !imageAccordionBorderLink });
	};

	const handleimageAccordionBorderUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionBorderUnits: {
				...imageAccordionBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	// imageAccordion BorderRadiusWidth Function
	const handleimageAccordionBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageAccordionBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionMobileBorderRadiusWidth: {
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
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionDesktopBorderRadiusWidth: {
							...imageAccordionDesktopBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionTabBorderRadiusWidth: {
							...imageAccordionTabBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionMobileBorderRadiusWidth: {
							...imageAccordionMobileBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleimageAccordionBorderRadiusCombineBtn = () => {
		setAttributes({
			imageAccordionBorderRadiusLink: !imageAccordionBorderRadiusLink,
		});
	};

	const handleimageAccordionBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionBorderRadiusUnits: {
				...imageAccordionBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	// content BorderWidth Function
	const handleContentBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (contentBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contentDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contentTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contentMobileBorderWidth: {
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
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contentDesktopBorderWidth: {
							...contentDesktopBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contentTabBorderWidth: {
							...contentTabBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contentMobileBorderWidth: {
							...contentMobileBorderWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleContentBorderCombineBtn = () => {
		setAttributes({ contentBorderLink: !contentBorderLink });
	};

	const handleContentBorderUnitsHandler = (unit) => {
		setAttributes({
			contentBorderUnits: {
				...contentBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	// content BorderRadiusWidth Function
	const handleContentBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (contentBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contentDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contentTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contentMobileBorderRadiusWidth: {
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
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						contentDesktopBorderRadiusWidth: {
							...contentDesktopBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						contentTabBorderRadiusWidth: {
							...contentTabBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						contentMobileBorderRadiusWidth: {
							...contentMobileBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleContentBorderRadiusCombineBtn = () => {
		setAttributes({ contentBorderRadiusLink: !contentBorderRadiusLink });
	};

	const handleContentBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			contentBorderRadiusUnits: {
				...contentBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<div className="fb-presets-wrapper">
				<PanelBody title={__("Presets", "frontis-blocks")} initialOpen={true}>
					<FB_Presets
						className="fb-imageAccordion-presets"
						label={__("Select Preset", "frontis-blocks")}
						presets={imageAccordionPresets}
						value={imageAccordionPresetStyle}
						onChangeValue="imageAccordionPresetStyle"
						defaultPresetValue="preset-1"
						setAttributes={setAttributes}
					/>
				</PanelBody>
			</div>

			<PanelBody initialOpen={true}>
				<FB_HtmlTagControl
					label={__("imageAccordion Items Title Tag", "frontis-blocks")}
					globalHtmlTag={tagName}
					setGlobalHtmlTag={(value) => setAttributes({ tagName: value })}
				/>

				<FB_Range
					min={1}
					max={100}
					label={__("imageAccordion Gap", "frontis-blocks")}
					rangeValue={imageAccordionItemGap}
					onChangeHandler={imageAccordionItemGapHandler}
					rangeUnitHandler={imageAccordionItemGapUnitsHandler}
					deviceType={deviceType}
					units={imageAccordionItemGapUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={20}
				/>
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody title={__("Items Icon", "frontis-blocks")} initialOpen={true}>
				<ToggleControl
					label={__("Display Icon", "frontis-blocks")}
					checked={displayIcon}
					onChange={() =>
						setAttributes({
							displayIcon: !displayIcon,
						})
					}
				/>
				{displayIcon && (
					<>
						<BaseControl label={__("Tab Icon", "frontis-blocks")}>
							<div className="fb-setting-switcher-container">
								<BaseControl className="fb-setting-switcher-panel-wrapper">
									<ButtonGroup className="fb-setting-switcher-panel-btn">
										{ICON_SWITCHER.map((item, key) => (
											<Button
												key={key}
												onClick={() =>
													setAttributes({ tabIconSwitcher: item.value })
												}
												className={`fb-setting-switcher-panel-btn-switcher ${
													tabIconSwitcher === item.value ? "active" : ""
												}`}
											>
												{item.label}
											</Button>
										))}
									</ButtonGroup>
								</BaseControl>
							</div>
							{tabIconSwitcher === "icon" && (
								<FBIconPicker
									value={tabIcon}
									setIconHandler={titleTabIconHandler}
								/>
							)}
							{tabIconSwitcher === "image" && (
								<FB_BackgroundImageControl
									globalBackgroundImageUrl={tabImageUrl}
									setGlobalBackgroundImageUrl={(value) =>
										setAttributes({ tabImageUrl: value })
									}
									globalBackgroundImageAlt={tabImageAlt}
									setGlobalBackgroundImageAlt={(value) =>
										setAttributes({ tabImageAlt: value })
									}
									globalBackgroundImageID={tabImageID}
									setGlobalBackgroundImageID={(value) =>
										setAttributes({ tabImageID: value })
									}
									globalBackgroundImagePosition={tabImagePosition}
									setGlobalBackgroundImagePosition={(value) =>
										setAttributes({ tabImagePosition: value })
									}
									globalBackgroundImageAttachment={tabImageAttachment}
									setGlobalBackgroundImageAttachment={(value) =>
										setAttributes({ tabImageAttachment: value })
									}
									globalBackgroundImageRepeat={tabImageRepeat}
									setGlobalBackgroundImageRepeat={(value) =>
										setAttributes({ tabImageRepeat: value })
									}
									globalBackgroundImageSize={tabImageSize}
									setGlobalBackgroundImageSize={(value) =>
										setAttributes({ tabImageSize: value })
									}
								/>
							)}
						</BaseControl>

						<BaseControl label={__("Expanded Icon", "frontis-blocks")}>
							<div className="fb-setting-switcher-container">
								<BaseControl className="fb-setting-switcher-panel-wrapper">
									<ButtonGroup className="fb-setting-switcher-panel-btn">
										{ICON_SWITCHER.map((item, key) => (
											<Button
												key={key}
												onClick={() =>
													setAttributes({ expandedIconSwitcher: item.value })
												}
												className={`fb-setting-switcher-panel-btn-switcher ${
													expandedIconSwitcher === item.value ? "active" : ""
												}`}
											>
												{item.label}
											</Button>
										))}
									</ButtonGroup>
								</BaseControl>
							</div>
							{expandedIconSwitcher === "icon" && (
								<FBIconPicker
									value={expandedIcon}
									setIconHandler={titleExpandedIconHandler}
								/>
							)}
							{expandedIconSwitcher === "image" && (
								<FB_BackgroundImageControl
									globalBackgroundImageUrl={expandedImageUrl}
									setGlobalBackgroundImageUrl={(value) =>
										setAttributes({ expandedImageUrl: value })
									}
									globalBackgroundImageAlt={expandedImageAlt}
									setGlobalBackgroundImageAlt={(value) =>
										setAttributes({ expandedImageAlt: value })
									}
									globalBackgroundImageID={expandedImageID}
									setGlobalBackgroundImageID={(value) =>
										setAttributes({ expandedImageID: value })
									}
									globalBackgroundImagePosition={expandedImagePosition}
									setGlobalBackgroundImagePosition={(value) =>
										setAttributes({ expandedImagePosition: value })
									}
									globalBackgroundImageAttachment={expandedImageAttachment}
									setGlobalBackgroundImageAttachment={(value) =>
										setAttributes({ expandedImageAttachment: value })
									}
									globalBackgroundImageRepeat={expandedImageRepeat}
									setGlobalBackgroundImageRepeat={(value) =>
										setAttributes({ expandedImageRepeat: value })
									}
									globalBackgroundImageSize={expandedImageSize}
									setGlobalBackgroundImageSize={(value) =>
										setAttributes({ expandedImageSize: value })
									}
								/>
							)}
						</BaseControl>

						<FB_Range
							min={1}
							max={100}
							label={__("Icon Size", "frontis-blocks")}
							rangeValue={titleIconSize}
							onChangeHandler={titleIconSizeHandler}
							rangeUnitHandler={titleIconSizeUnitsHandler}
							deviceType={deviceType}
							units={titleIconSizeUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={22}
						/>

						<BaseControl
							label={__("Icon Position", "frontis-blocks")}
							id="fb-setting-text-alignment"
							className="fb-setting-text-alignment"
						>
							<ButtonGroup className="fb-setting-text-alignment-group-btn">
								{ICON_POSITIONS.map((item) => (
									<Button
										key={item.value}
										onClick={() => setAttributes({ iconPosition: item.value })}
										className={`fb-setting-text-alignment-single-btn ${
											iconPosition === item.value ? "active" : ""
										}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>

						<FB_SwitcherControl
							label={__("Icon Color", "frontis-blocks")}
							globalSwitcher={titleIconColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ titleIconColorSwitcher: value })
							}
						/>

						{titleIconColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={titleIconColor}
								setGlobalColor={(value) =>
									setAttributes({
										titleIconColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

						{titleIconColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={titleIconHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										titleIconHoverColor: value === undefined ? "" : value,
									})
								}
							/>
						)}
					</>
				)}
			</PanelBody>

			<PanelBody
				title={__("Items Title", "frontis-blocks")}
				initialOpen={false}
			>
				<BaseControl
					label={__("Title Align ", "frontis-blocks")}
					id="fb-setting-text-alignment"
					className="fb-setting-text-alignment"
				>
					<ButtonGroup className="fb-setting-text-alignment-group-btn">
						{TITLE_ALIGNMENT.map((item) => (
							<Button
								key={item.value}
								onClick={() => setAttributes({ titleAlignment: item.value })}
								className={`fb-setting-text-alignment-single-btn ${
									titleAlignment === item.value ? "active" : ""
								}`}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>
				</BaseControl>

				{titleAlignment !== "between" && (
					<FB_Range
						min={1}
						max={100}
						label={__("Spacing", "frontis-blocks")}
						rangeValue={titleSpacing}
						onChangeHandler={titleSpacingHandler}
						rangeUnitHandler={titleSpacingUnitsHandler}
						deviceType={deviceType}
						units={titleSpacingUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={20}
					/>
				)}

				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={titleGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ titleGlobalTypographyData: value })
					}
					globalTypoType={titleGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							titleGlobalTypoType: value,
							titleGlobalTypoSwitcher:
								value === "default"
									? {
											...titleGlobalTypoSwitcher,
											fontFamily: false,
											fontSize: false,
											fontWeight: false,
											fontStyle: false,
											textTransform: false,
											textDecoration: false,
											letterSpacing: false,
											lineHeight: false,
									  }
									: {
											...titleGlobalTypoSwitcher,
											fontFamily: true,
											fontSize: true,
											fontWeight: true,
											fontStyle: true,
											textTransform: true,
											textDecoration: true,
											letterSpacing: true,
											lineHeight: true,
									  },
						});
					}}
					globalTypoOption={titleGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ titleGlobalTypoOption: value })
					}
					fontFamily={titleFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							titleFontFamily: value,
							titleGlobalTypoSwitcher: {
								...titleGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={titleFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							titleFontSize: value,
							titleGlobalTypoSwitcher: {
								...titleGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={titleFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ titleFontSizeUnits: value })
					}
					fontWeight={titleFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							titleFontWeight: value,
							titleGlobalTypoSwitcher: {
								...titleGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={titleFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							titleFontStyle: value,
							titleGlobalTypoSwitcher: {
								...titleGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={titleTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							titleTextTransform: value,
							titleGlobalTypoSwitcher: {
								...titleGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={titleTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							titleTextDecoration: value,
							titleGlobalTypoSwitcher: {
								...titleGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={titleLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							titleLetterSpacing: value,
							titleGlobalTypoSwitcher: {
								...titleGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={titleLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ titleLetterSpacingUnits: value })
					}
					lineHeight={titleLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							titleLineHeight: value,
							titleGlobalTypoSwitcher: {
								...titleGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={titleLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ titleLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={titleColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ titleColorSwitcher: value })
					}
				/>

				{titleColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={titleColor}
						setGlobalColor={(value) =>
							setAttributes({ titleColor: value === undefined ? "" : value })
						}
					/>
				)}

				{titleColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={titleHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								titleHoverColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				<FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={titleBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ titleBgColorSwitcher: value })
					}
					normalBackgroundType={titleBgType}
					setNormalBackgroundType={(value) =>
						setAttributes({ titleBgType: value })
					}
					normalClassicColor={titleBgClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							titleBgClassicColor: value === undefined ? "" : value,
						})
					}
					normalGradientColor={titleBgGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							titleBgGradientColor: value === undefined ? null : value,
						})
					}
					normalCustomGradientSwitcher={titleBgCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({
							titleBgCustomGradientSwitcher: value,
						})
					}
					normalCustomGradientInputValue={titleBgCustomGradientInputValue}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({
							titleBgCustomGradientInputValue: value,
						})
					}
					normalBackgroundImageUrl={titleBgImageUrl}
					setNormalBackgroundImageUrl={(value) =>
						setAttributes({ titleBgImageUrl: value })
					}
					normalBackgroundImageAlt={titleBgImageAlt}
					setNormalBackgroundImageAlt={(value) =>
						setAttributes({ titleBgImageAlt: value })
					}
					normalBackgroundImageID={titleBgImageID}
					setNormalBackgroundImageID={(value) =>
						setAttributes({ titleBgImageID: value })
					}
					normalBackgroundImagePosition={titleBgImagePosition}
					setNormalBackgroundImagePosition={(value) =>
						setAttributes({
							titleBgImagePosition: value,
						})
					}
					normalBackgroundImageAttachment={titleBgImageAttachment}
					setNormalBackgroundImageAttachment={(value) =>
						setAttributes({
							titleBgImageAttachment: value,
						})
					}
					normalBackgroundImageRepeat={titleBgImageRepeat}
					setNormalBackgroundImageRepeat={(value) =>
						setAttributes({
							titleBgImageRepeat: value,
						})
					}
					normalBackgroundImageSize={titleBgImageSize}
					setNormalBackgroundImageSize={(value) =>
						setAttributes({ titleBgImageSize: value })
					}
					hoverBackgroundType={titleBgHoverType}
					setHoverBackgroundType={(value) =>
						setAttributes({ titleBgHoverType: value })
					}
					hoverClassicColor={titleBgHoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							titleBgHoverClassicColor: value === undefined ? "" : value,
						})
					}
					hoverGradientColor={titleBgHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							titleBgHoverGradientColor: value === undefined ? null : value,
						})
					}
					hoverCustomGradientSwitcher={titleBgHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({
							titleBgHoverCustomGradientSwitcher: value,
						})
					}
					hoverCustomGradientInputValue={titleBgHoverCustomGradientInputValue}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({
							titleBgHoverCustomGradientInputValue: value,
						})
					}
					hoverBackgroundImageUrl={titleBgHoverImageUrl}
					setBgHoverImageUrl={(value) =>
						setAttributes({ titleBgHoverImageUrl: value })
					}
					hoverBackgroundImageAlt={titleBgHoverImageAlt}
					setBgHoverImageAlt={(value) =>
						setAttributes({ titleBgHoverImageAlt: value })
					}
					hoverBackgroundImageID={titleBgHoverImageID}
					setBgHoverImageID={(value) =>
						setAttributes({ titleBgHoverImageID: value })
					}
					hoverBackgroundImagePosition={titleBgHoverImagePosition}
					setBgHoverImagePosition={(value) =>
						setAttributes({
							titleBgHoverImagePosition: value,
						})
					}
					hoverBackgroundImageAttachment={titleBgHoverImageAttachment}
					setBgHoverImageAttachment={(value) =>
						setAttributes({
							titleBgHoverImageAttachment: value,
						})
					}
					hoverBackgroundImageRepeat={titleBgHoverImageRepeat}
					setBgHoverImageRepeat={(value) =>
						setAttributes({
							titleBgHoverImageRepeat: value,
						})
					}
					hoverBackgroundImageSize={titleBgHoverImageSize}
					setBgHoverImageSize={(value) =>
						setAttributes({ titleBgHoverImageSize: value })
					}
				/>

				<FB_Range
					min={1}
					max={100}
					label={__("Spacing", "frontis-blocks")}
					rangeValue={prefixSuffixSpacing}
					onChangeHandler={prefixSuffixSpacingHandler}
					rangeUnitHandler={prefixSuffixSpacingUnitsHandler}
					deviceType={deviceType}
					units={prefixSuffixSpacingUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={20}
				/>

				<PanelBody
					title={__("Title Prefix", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_Range
						min={1}
						max={100}
						label={__("Icon Size", "frontis-blocks")}
						rangeValue={titlePrefixIconSize}
						onChangeHandler={titlePrefixIconSizeHandler}
						rangeUnitHandler={titlePrefixIconSizeUnitsHandler}
						deviceType={deviceType}
						units={titlePrefixIconSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={20}
					/>
				</PanelBody>

				<PanelBody
					title={__("Title Suffix", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_Range
						min={1}
						max={100}
						label={__("Icon Size", "frontis-blocks")}
						rangeValue={titleSuffixIconSize}
						onChangeHandler={titleSuffixIconSizeHandler}
						rangeUnitHandler={titleSuffixIconSizeUnitsHandler}
						deviceType={deviceType}
						units={titleSuffixIconSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={20}
					/>
				</PanelBody>
			</PanelBody>

			<PanelBody
				title={__("Items Title Spacing", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleimageAccordionItemsPaddingUnitsHandler}
					spacingUnits={imageAccordionItemsPaddingUnits}
					spacingDesktop={imageAccordionItemsDesktopPadding}
					spacingTablet={imageAccordionItemsTabPadding}
					spacingMobile={imageAccordionItemsMobilePadding}
					handleSpacingUnitHandler={handleimageAccordionItemsPaddingUnitChange}
					spacingCombineBtn={imageAccordionItemsPaddingLink}
					spacingCombineBtnHandler={handleimageAccordionItemsPaddingCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody
				title={__("Titles Border & Radius", "frontis-blocks")}
				initialOpen={false}
			>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={imageAccordionItemsBorder}
					options={BORDER_STYLES}
					onChange={(value) =>
						setAttributes({ imageAccordionItemsBorder: value })
					}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={imageAccordionItemsBorderColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ imageAccordionItemsBorderColorSwitcher: value })
					}
				/>

				{imageAccordionItemsBorderColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={imageAccordionItemsBorderColor}
						setGlobalColor={(value) =>
							setAttributes({
								imageAccordionItemsBorderColor:
									value === undefined ? "" : value,
							})
						}
					/>
				)}

				{imageAccordionItemsBorderColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={imageAccordionItemsBorderHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								imageAccordionItemsBorderHoverColor:
									value === undefined ? "" : value,
							})
						}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleimageAccordionItemsBorderUnitsHandler}
					spacingUnits={imageAccordionItemsBorderUnits}
					spacingDesktop={imageAccordionItemsDesktopBorderWidth}
					spacingTablet={imageAccordionItemsTabBorderWidth}
					spacingMobile={imageAccordionItemsMobileBorderWidth}
					handleSpacingUnitHandler={handleimageAccordionItemsBorderUnitChange}
					spacingCombineBtn={imageAccordionItemsBorderLink}
					spacingCombineBtnHandler={handleimageAccordionItemsBorderCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={
						handleimageAccordionItemsBorderRadiusUnitsHandler
					}
					spacingUnits={imageAccordionItemsBorderRadiusUnits}
					spacingDesktop={imageAccordionItemsDesktopBorderRadiusWidth}
					spacingTablet={imageAccordionItemsTabBorderRadiusWidth}
					spacingMobile={imageAccordionItemsMobileBorderRadiusWidth}
					handleSpacingUnitHandler={
						handleimageAccordionItemsBorderRadiusUnitChange
					}
					spacingCombineBtn={imageAccordionItemsBorderRadiusLink}
					spacingCombineBtnHandler={
						handleimageAccordionItemsBorderRadiusCombineBtn
					}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Box Shadow", "frontis-blocks")}
					globalSwitcher={imageAccordionItemBoxShadowSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ imageAccordionItemBoxShadowSwitcher: value })
					}
				/>

				{imageAccordionItemBoxShadowSwitcher === "normal" && (
					<FB_BoxShadowControl
						label={__("Normal Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ imageAccordionItemBoxShadowValues: value })
						}
						initialShadowValue={imageAccordionItemBoxShadowValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({
								imageAccordionItemBoxShadowCssValue: value,
							})
						}
					/>
				)}

				{imageAccordionItemBoxShadowSwitcher === "hover" && (
					<FB_BoxShadowControl
						label={__("Hover Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ imageAccordionItemHoverBoxShadowValues: value })
						}
						initialShadowValue={imageAccordionItemHoverBoxShadowValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({
								imageAccordionItemHoverBoxShadowCssValue: value,
							})
						}
					/>
				)}
			</PanelBody>

			<PanelBody title="Item Content" initialOpen={false}>
				<FB_BackgroundColorControl
					bgColorSwitcher={contentBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ contentBgColorSwitcher: value })
					}
					normalBackgroundType={contentBgType}
					setNormalBackgroundType={(value) =>
						setAttributes({ contentBgType: value })
					}
					normalClassicColor={contentBgClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							contentBgClassicColor: value === undefined ? "" : value,
						})
					}
					normalGradientColor={contentBgGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							contentBgGradientColor: value === undefined ? null : value,
						})
					}
					normalCustomGradientSwitcher={contentBgCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({
							contentBgCustomGradientSwitcher: value,
						})
					}
					normalCustomGradientInputValue={contentBgCustomGradientInputValue}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({
							contentBgCustomGradientInputValue: value,
						})
					}
					normalBackgroundImageUrl={contentBgImageUrl}
					setNormalBackgroundImageUrl={(value) =>
						setAttributes({ contentBgImageUrl: value })
					}
					normalBackgroundImageAlt={contentBgImageAlt}
					setNormalBackgroundImageAlt={(value) =>
						setAttributes({ contentBgImageAlt: value })
					}
					normalBackgroundImageID={contentBgImageID}
					setNormalBackgroundImageID={(value) =>
						setAttributes({ contentBgImageID: value })
					}
					normalBackgroundImagePosition={contentBgImagePosition}
					setNormalBackgroundImagePosition={(value) =>
						setAttributes({
							contentBgImagePosition: value,
						})
					}
					normalBackgroundImageAttachment={contentBgImageAttachment}
					setNormalBackgroundImageAttachment={(value) =>
						setAttributes({
							contentBgImageAttachment: value,
						})
					}
					normalBackgroundImageRepeat={contentBgImageRepeat}
					setNormalBackgroundImageRepeat={(value) =>
						setAttributes({
							contentBgImageRepeat: value,
						})
					}
					normalBackgroundImageSize={contentBgImageSize}
					setNormalBackgroundImageSize={(value) =>
						setAttributes({ contentBgImageSize: value })
					}
					hoverBackgroundType={contentBgHoverType}
					setHoverBackgroundType={(value) =>
						setAttributes({ contentBgHoverType: value })
					}
					hoverClassicColor={contentBgHoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							contentBgHoverClassicColor: value === undefined ? "" : value,
						})
					}
					hoverGradientColor={contentBgHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							contentBgHoverGradientColor: value === undefined ? null : value,
						})
					}
					hoverCustomGradientSwitcher={contentBgHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({
							contentBgHoverCustomGradientSwitcher: value,
						})
					}
					hoverCustomGradientInputValue={contentBgHoverCustomGradientInputValue}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({
							contentBgHoverCustomGradientInputValue: value,
						})
					}
					hoverBackgroundImageUrl={contentBgHoverImageUrl}
					setBgHoverImageUrl={(value) =>
						setAttributes({ contentBgHoverImageUrl: value })
					}
					hoverBackgroundImageAlt={contentBgHoverImageAlt}
					setBgHoverImageAlt={(value) =>
						setAttributes({ contentBgHoverImageAlt: value })
					}
					hoverBackgroundImageID={contentBgHoverImageID}
					setBgHoverImageID={(value) =>
						setAttributes({ contentBgHoverImageID: value })
					}
					hoverBackgroundImagePosition={contentBgHoverImagePosition}
					setBgHoverImagePosition={(value) =>
						setAttributes({
							contentBgHoverImagePosition: value,
						})
					}
					hoverBackgroundImageAttachment={contentBgHoverImageAttachment}
					setBgHoverImageAttachment={(value) =>
						setAttributes({
							contentBgHoverImageAttachment: value,
						})
					}
					hoverBackgroundImageRepeat={contentBgHoverImageRepeat}
					setBgHoverImageRepeat={(value) =>
						setAttributes({
							contentBgHoverImageRepeat: value,
						})
					}
					hoverBackgroundImageSize={contentBgHoverImageSize}
					setBgHoverImageSize={(value) =>
						setAttributes({ contentBgHoverImageSize: value })
					}
				/>

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={contentBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ contentBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={contentBorderColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ contentBorderColorSwitcher: value })
					}
				/>

				{contentBorderColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={contentBorderColor}
						setGlobalColor={(value) =>
							setAttributes({
								contentBorderColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{contentBorderColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={contentBorderHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								contentBorderHoverColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleContentBorderUnitsHandler}
					spacingUnits={contentBorderUnits}
					spacingDesktop={contentDesktopBorderWidth}
					spacingTablet={contentTabBorderWidth}
					spacingMobile={contentMobileBorderWidth}
					handleSpacingUnitHandler={handleContentBorderUnitChange}
					spacingCombineBtn={contentBorderLink}
					spacingCombineBtnHandler={handleContentBorderCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleContentBorderRadiusUnitsHandler}
					spacingUnits={contentBorderRadiusUnits}
					spacingDesktop={contentDesktopBorderRadiusWidth}
					spacingTablet={contentTabBorderRadiusWidth}
					spacingMobile={contentMobileBorderRadiusWidth}
					handleSpacingUnitHandler={handleContentBorderRadiusUnitChange}
					spacingCombineBtn={contentBorderRadiusLink}
					spacingCombineBtnHandler={handleContentBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Box Shadow", "frontis-blocks")}
					globalSwitcher={contentBoxShadowSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ contentBoxShadowSwitcher: value })
					}
				/>

				{contentBoxShadowSwitcher === "normal" && (
					<FB_BoxShadowControl
						label={__("Normal Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ contentBoxShadowValues: value })
						}
						initialShadowValue={contentBoxShadowValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({
								contentBoxShadowCssValue: value,
							})
						}
					/>
				)}

				{contentBoxShadowSwitcher === "hover" && (
					<FB_BoxShadowControl
						label={__("Hover Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ contentHoverBoxShadowValues: value })
						}
						initialShadowValue={contentHoverBoxShadowValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({
								contentHoverBoxShadowCssValue: value,
							})
						}
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
						className="fb-setting-layout-header"
					>
						<FB_Range
							min={0}
							max={10000000}
							label={__("Z Index", "frontis-blocks")}
							rangeValue={imageAccordionZIndex}
							onChangeHandler={(value) =>
								setAttributes({
									imageAccordionZIndex: value === 0 ? undefined : value,
								})
							}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}
						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={imageAccordionOverflow}
							options={OVERFLOW_OP}
							onChange={(value) =>
								setAttributes({ imageAccordionOverflow: value })
							}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={imageAccordionPositionType}
							setPositionType={(value) =>
								setAttributes({ imageAccordionPositionType: value })
							}
							HZOrientationType={imageAccordionHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ imageAccordionHZOrientationType: value })
							}
							VROrientationType={imageAccordionVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ imageAccordionVROrientationType: value })
							}
							HZLeftOffset={imageAccordionHZLeftOffset}
							setHZLeftOffset={(value) =>
								setAttributes({ imageAccordionHZLeftOffset: value })
							}
							HZLeftOffsetUnits={imageAccordionHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) =>
								setAttributes({ imageAccordionHZLeftOffsetUnits: value })
							}
							HZRightOffset={imageAccordionHZRightOffset}
							setHZRightOffset={(value) =>
								setAttributes({ imageAccordionHZRightOffset: value })
							}
							HZRightOffsetUnits={imageAccordionHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) =>
								setAttributes({ imageAccordionHZRightOffsetUnits: value })
							}
							VRTopOffset={imageAccordionVRTopOffset}
							setVRTopOffset={(value) =>
								setAttributes({ imageAccordionVRTopOffset: value })
							}
							VRTopOffsetUnits={imageAccordionVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) =>
								setAttributes({ imageAccordionVRTopOffsetUnits: value })
							}
							VRBottomOffset={imageAccordionVRBottomOffset}
							setVRBottomOffset={(value) =>
								setAttributes({ imageAccordionVRBottomOffset: value })
							}
							VRBottomOffsetUnits={imageAccordionVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) =>
								setAttributes({ imageAccordionVRBottomOffsetUnits: value })
							}
							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={imageAccordionGlobalWraperID}
							onChangeValue={(value) =>
								setAttributes({ imageAccordionGlobalWraperID: value })
							}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={imageAccordionGlobalWraperClass}
							onChangeValue={(value) =>
								setAttributes({ imageAccordionGlobalWraperClass: value })
							}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
					</PanelBody>

					<PanelBody
						title={__("Padding & Margin", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleimageAccordionMarginUnitsHandler}
							spacingUnits={imageAccordionMarginUnits}
							spacingDesktop={imageAccordionDesktopMargin}
							spacingTablet={imageAccordionTabMargin}
							spacingMobile={imageAccordionMobileMargin}
							handleSpacingUnitHandler={handleimageAccordionMarginUnitChange}
							spacingCombineBtn={imageAccordionMarginLink}
							spacingCombineBtnHandler={handleimageAccordionMarginCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleimageAccordionPaddingUnitsHandler}
							spacingUnits={imageAccordionPaddingUnits}
							spacingDesktop={imageAccordionDesktopPadding}
							spacingTablet={imageAccordionTabPadding}
							spacingMobile={imageAccordionMobilePadding}
							handleSpacingUnitHandler={handleimageAccordionPaddingUnitChange}
							spacingCombineBtn={imageAccordionPaddingLink}
							spacingCombineBtnHandler={handleimageAccordionPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody title="Background Color" initialOpen={false}>
						<FB_BackgroundColorControl
							bgColorSwitcher={imageAccordionBgColorSwitcher}
							setBgColorSwitcher={(value) =>
								setAttributes({ imageAccordionBgColorSwitcher: value })
							}
							normalBackgroundType={imageAccordionBgType}
							setNormalBackgroundType={(value) =>
								setAttributes({ imageAccordionBgType: value })
							}
							normalClassicColor={imageAccordionBgClassicColor}
							setNormalClassicColor={(value) =>
								setAttributes({
									imageAccordionBgClassicColor:
										value === undefined ? "" : value,
								})
							}
							normalGradientColor={imageAccordionBgGradientColor}
							setNormalGradientColor={(value) =>
								setAttributes({
									imageAccordionBgGradientColor:
										value === undefined ? null : value,
								})
							}
							normalCustomGradientSwitcher={
								imageAccordionBgCustomGradientSwitcher
							}
							setNormalCustomGradientSwitcher={(value) =>
								setAttributes({
									imageAccordionBgCustomGradientSwitcher: value,
								})
							}
							normalCustomGradientInputValue={
								imageAccordionBgCustomGradientInputValue
							}
							setNormalCustomGradientInputValue={(value) =>
								setAttributes({
									imageAccordionBgCustomGradientInputValue: value,
								})
							}
							normalBackgroundImageUrl={imageAccordionBgImageUrl}
							setNormalBackgroundImageUrl={(value) =>
								setAttributes({ imageAccordionBgImageUrl: value })
							}
							normalBackgroundImageAlt={imageAccordionBgImageAlt}
							setNormalBackgroundImageAlt={(value) =>
								setAttributes({ imageAccordionBgImageAlt: value })
							}
							normalBackgroundImageID={imageAccordionBgImageID}
							setNormalBackgroundImageID={(value) =>
								setAttributes({ imageAccordionBgImageID: value })
							}
							normalBackgroundImagePosition={imageAccordionBgImagePosition}
							setNormalBackgroundImagePosition={(value) =>
								setAttributes({
									imageAccordionBgImagePosition: value,
								})
							}
							normalBackgroundImageAttachment={imageAccordionBgImageAttachment}
							setNormalBackgroundImageAttachment={(value) =>
								setAttributes({
									imageAccordionBgImageAttachment: value,
								})
							}
							normalBackgroundImageRepeat={imageAccordionBgImageRepeat}
							setNormalBackgroundImageRepeat={(value) =>
								setAttributes({
									imageAccordionBgImageRepeat: value,
								})
							}
							normalBackgroundImageSize={imageAccordionBgImageSize}
							setNormalBackgroundImageSize={(value) =>
								setAttributes({ imageAccordionBgImageSize: value })
							}
							hoverBackgroundType={imageAccordionBgHoverType}
							setHoverBackgroundType={(value) =>
								setAttributes({ imageAccordionBgHoverType: value })
							}
							hoverClassicColor={imageAccordionBgHoverClassicColor}
							setHoverClassicColor={(value) =>
								setAttributes({
									imageAccordionBgHoverClassicColor:
										value === undefined ? "" : value,
								})
							}
							hoverGradientColor={imageAccordionBgHoverGradientColor}
							setHoverGradientColor={(value) =>
								setAttributes({
									imageAccordionBgHoverGradientColor:
										value === undefined ? null : value,
								})
							}
							hoverCustomGradientSwitcher={
								imageAccordionBgHoverCustomGradientSwitcher
							}
							setHoverCustomGradientSwitcher={(value) =>
								setAttributes({
									imageAccordionBgHoverCustomGradientSwitcher: value,
								})
							}
							hoverCustomGradientInputValue={
								imageAccordionBgHoverCustomGradientInputValue
							}
							setHoverCustomGradientInputValue={(value) =>
								setAttributes({
									imageAccordionBgHoverCustomGradientInputValue: value,
								})
							}
							hoverBackgroundImageUrl={imageAccordionBgHoverImageUrl}
							setBgHoverImageUrl={(value) =>
								setAttributes({ imageAccordionBgHoverImageUrl: value })
							}
							hoverBackgroundImageAlt={imageAccordionBgHoverImageAlt}
							setBgHoverImageAlt={(value) =>
								setAttributes({ imageAccordionBgHoverImageAlt: value })
							}
							hoverBackgroundImageID={imageAccordionBgHoverImageID}
							setBgHoverImageID={(value) =>
								setAttributes({ imageAccordionBgHoverImageID: value })
							}
							hoverBackgroundImagePosition={imageAccordionBgHoverImagePosition}
							setBgHoverImagePosition={(value) =>
								setAttributes({
									imageAccordionBgHoverImagePosition: value,
								})
							}
							hoverBackgroundImageAttachment={
								imageAccordionBgHoverImageAttachment
							}
							setBgHoverImageAttachment={(value) =>
								setAttributes({
									imageAccordionBgHoverImageAttachment: value,
								})
							}
							hoverBackgroundImageRepeat={imageAccordionBgHoverImageRepeat}
							setBgHoverImageRepeat={(value) =>
								setAttributes({
									imageAccordionBgHoverImageRepeat: value,
								})
							}
							hoverBackgroundImageSize={imageAccordionBgHoverImageSize}
							setBgHoverImageSize={(value) =>
								setAttributes({ imageAccordionBgHoverImageSize: value })
							}
						/>
					</PanelBody>

					<PanelBody
						title={__("Border & Border Radius", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-border-setting-wrapper"
					>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={imageAccordionBorder}
							options={BORDER_STYLES}
							onChange={(value) =>
								setAttributes({ imageAccordionBorder: value })
							}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={imageAccordionBorderColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ imageAccordionBorderColorSwitcher: value })
							}
						/>

						{imageAccordionBorderColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={imageAccordionBorderColor}
								setGlobalColor={(value) =>
									setAttributes({
										imageAccordionBorderColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

						{imageAccordionBorderColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={imageAccordionBorderHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										imageAccordionBorderHoverColor:
											value === undefined ? "" : value,
									})
								}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleimageAccordionBorderUnitsHandler}
							spacingUnits={imageAccordionBorderUnits}
							spacingDesktop={imageAccordionDesktopBorderWidth}
							spacingTablet={imageAccordionTabBorderWidth}
							spacingMobile={imageAccordionMobileBorderWidth}
							handleSpacingUnitHandler={handleimageAccordionBorderUnitChange}
							spacingCombineBtn={imageAccordionBorderLink}
							spacingCombineBtnHandler={handleimageAccordionBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleimageAccordionBorderRadiusUnitsHandler}
							spacingUnits={imageAccordionBorderRadiusUnits}
							spacingDesktop={imageAccordionDesktopBorderRadiusWidth}
							spacingTablet={imageAccordionTabBorderRadiusWidth}
							spacingMobile={imageAccordionMobileBorderRadiusWidth}
							handleSpacingUnitHandler={
								handleimageAccordionBorderRadiusUnitChange
							}
							spacingCombineBtn={imageAccordionBorderRadiusLink}
							spacingCombineBtnHandler={
								handleimageAccordionBorderRadiusCombineBtn
							}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={imageAccordionGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ imageAccordionGlobalBoxShadowSwitcher: value })
							}
						/>

						{imageAccordionGlobalBoxShadowSwitcher === "normal" && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ imageAccordionGlobalBoxShadowValues: value })
								}
								initialShadowValue={imageAccordionGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({
										imageAccordionGlobalBoxShadowCssValue: value,
									})
								}
							/>
						)}

						{imageAccordionGlobalBoxShadowSwitcher === "hover" && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({
										imageAccordionGlobalHoverBoxShadowValues: value,
									})
								}
								initialShadowValue={imageAccordionGlobalHoverBoxShadowValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({
										imageAccordionGlobalHoverBoxShadowCssValue: value,
									})
								}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={imageAccordionDesktopSwitcher}
							setDesktopValue={(value) =>
								setAttributes({ imageAccordionDesktopSwitcher: value })
							}
							tabletValue={imageAccordionTabletSwitcher}
							setTabletValue={(value) =>
								setAttributes({ imageAccordionTabletSwitcher: value })
							}
							mobileValue={imageAccordionMobileSwitcher}
							setMobileValue={(value) =>
								setAttributes({ imageAccordionMobileSwitcher: value })
							}
						/>
					</PanelBody>

					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={imageAccordionCustomCSS}
							onChangeValue={(value) =>
								setAttributes({ imageAccordionCustomCSS: value })
							}
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
};
export default memo(Inspector);
