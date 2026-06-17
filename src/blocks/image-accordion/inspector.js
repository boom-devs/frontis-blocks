import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	Button,
} from "@wordpress/components";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

import { useState, memo } from "@wordpress/element";
import { useDeviceType } from "@Config/displayType";

import FB_Spacing from "@Components/spacing";
import FB_Range from "@Components/range";
import FB_ColorControl from "@Components/color-control";
import FB_SwitcherControl from "@Components/switcher-control";
import FB_InputControl from "@Components/input-control";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_PositionControl from "@Components/position-control";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_TypographyControl from "@Components/typography-control";
import FB_Presets from "@Components/presets";
import SortableItem from "./sortableItem";
import { BORDER_STYLES } from "@Constants/fbConstants";

import { imageAccordionPresets } from "./presets";
import "./editor.scss";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		imageAccordionPreset,
		imageAccordionTrigger,
		imageAccordionItems,

		imageAccordionWidth,
		imageAccordionWidthUnits,
		imageAccordionHeight,
		imageAccordionHeightUnits,

		imageAccordionGap,
		imageAccordionGapUnits,

		imageAccordionShowTitle,
		imageAccordionShowSubtitle,
		imageAccordionShowIcon,
		imageAccordionShowButton,
		imageAccordionItemBorderRadiusUnits,
		imageAccordionItemBorderRadiusDesktop,
		imageAccordionItemBorderRadiusTablet,
		imageAccordionItemBorderRadiusMobile,
		imageAccordionItemBorderRadiusLink,

		imageAccordionOverlayColor,
		imageAccordionOverlayHoverColor,

		imageAccordionShowDots,
		imageAccordionDotColor,
		imageAccordionDotSize,
		imageAccordionDotSizeUnits,

		imageAccordionShowNumber,
		imageAccordionNumberColor,
		imageAccordionNumberHoverColor,
		imageAccordionNumberFontSize,
		imageAccordionNumberFontSizeUnits,
		imageAccordionNumberFontWeight,

		imageAccordionIconColor,
		imageAccordionIconHoverColor,
		imageAccordionIconSize,
		imageAccordionIconSizeUnits,
		imageAccordionIconCircleBgColor,
		imageAccordionIconCircleSize,
		imageAccordionIconCircleSizeUnits,

		imageAccordionTitleColor,
		imageAccordionTitleHoverColor,
		imageAccordionTitleFontSize,
		imageAccordionTitleFontSizeUnits,
		imageAccordionTitleFontWeight,
		imageAccordionTitleLineHeight,
		imageAccordionTitleLineHeightUnits,

		imageAccordionTitleFontFamily,
		imageAccordionTitleFontStyle,
		imageAccordionTitleTransform,
		imageAccordionTitleDecoration,
		imageAccordionTitleLetterSpacing,
		imageAccordionTitleLetterSpacingUnits,
		imageAccordionTitleGlobalTypographyData,
		imageAccordionTitleTypoType,
		imageAccordionTitleTypoOption,

		imageAccordionSubtitleColor,
		imageAccordionSubtitleHoverColor,
		imageAccordionSubtitleFontSize,
		imageAccordionSubtitleFontSizeUnits,
		imageAccordionSubtitleFontWeight,
		imageAccordionSubtitleLineHeight,
		imageAccordionSubtitleLineHeightUnits,

		imageAccordionSubtitleFontFamily,
		imageAccordionSubtitleFontStyle,
		imageAccordionSubtitleTransform,
		imageAccordionSubtitleDecoration,
		imageAccordionSubtitleLetterSpacing,
		imageAccordionSubtitleLetterSpacingUnits,
		imageAccordionSubtitleGlobalTypographyData,
		imageAccordionSubtitleTypoType,
		imageAccordionSubtitleTypoOption,

		imageAccordionBtnTextColor,
		imageAccordionBtnHoverTextColor,
		imageAccordionBtnBgColor,
		imageAccordionBtnHoverBgColor,
		imageAccordionBtnBorderColor,
		imageAccordionBtnBorder,
		imageAccordionBtnBorderRadiusUnits,
		// btn units
		imageAccordionBtnBorderRadiusDesktop,
		imageAccordionBtnBorderRadiusTablet,
		imageAccordionBtnBorderRadiusMobile,
		imageAccordionBtnBorderRadiusLink,
		imageAccordionBtnPaddingUnits,
		imageAccordionBtnPaddingDesktop,
		imageAccordionBtnPaddingTablet,
		imageAccordionBtnPaddingMobile,
		imageAccordionBtnPaddingLink,
		imageAccordionBtnFontSize,
		imageAccordionBtnFontSizeUnits,
		imageAccordionBtnFontWeight,
		imageAccordionBtnLineHeight,
		imageAccordionBtnLineHeightUnits,

		imageAccordionBtnFontFamily,
		imageAccordionBtnFontStyle,
		imageAccordionBtnTransform,
		imageAccordionBtnDecoration,
		imageAccordionBtnLetterSpacing,
		imageAccordionBtnLetterSpacingUnits,
		imageAccordionBtnGlobalTypographyData,
		imageAccordionBtnTypoType,
		imageAccordionBtnTypoOption,

		imageAccordionPaddingUnits,
		imageAccordionPaddingDesktop,
		imageAccordionPaddingTablet,
		imageAccordionPaddingMobile,
		imageAccordionPaddingLink,

		imageAccordionItemPaddingUnits,
		imageAccordionItemPaddingDesktop,
		imageAccordionItemPaddingTablet,
		imageAccordionItemPaddingMobile,
		imageAccordionItemPaddingLink,

		imageAccordionMarginUnits,
		imageAccordionMarginDesktop,
		imageAccordionMarginTablet,
		imageAccordionMarginMobile,
		imageAccordionMarginLink,

		imageAccordionItemMarginUnits,
		imageAccordionItemMarginDesktop,
		imageAccordionItemMarginTablet,
		imageAccordionItemMarginMobile,
		imageAccordionItemMarginLink,

		imageAccordionBgColorSwitcher,
		imageAccordionBackgroundType,
		imageAccordionClassicColor,
		imageAccordionGradientColor,
		imageAccordionCustomGradientSwitcher,
		imageAccordionCustomGradientInputValue,
		imageAccordionBackgroundImageUrl,
		imageAccordionBackgroundImageAlt,
		imageAccordionBackgroundImageID,
		imageAccordionBackgroundImagePosition,
		imageAccordionBackgroundImageAttachment,
		imageAccordionBackgroundImageRepeat,
		imageAccordionBackgroundImageSize,
		imageAccordionHoverBackgroundType,
		imageAccordionHoverClassicColor,
		imageAccordionHoverGradientColor,
		imageAccordionHoverCustomGradientSwitcher,
		imageAccordionHoverCustomGradientInputValue,
		imageAccordionHoverBackgroundImageUrl,
		imageAccordionHoverBackgroundImageAlt,
		imageAccordionHoverBackgroundImageID,
		imageAccordionHoverBackgroundImagePosition,
		imageAccordionHoverBackgroundImageAttachment,
		imageAccordionHoverBackgroundImageRepeat,
		imageAccordionHoverBackgroundImageSize,

		imageAccordionWrapperBorder,
		imageAccordionOverlayColorSwitcher,
		imageAccordionTitleColorSwitcher,
		imageAccordionIconColorSwitcher,
		imageAccordionNumberColorSwitcher,
		imageAccordionBtnColorSwitcher,
		imageAccordionWrapperBorderColorSwitcher,
		imageAccordionWrapperBorderColor,
		imageAccordionWrapperBorderHoverColor,
		imageAccordionWrapperBorderTypeUnits,
		imageAccordionWrapperBorderTypeDesktop,
		imageAccordionWrapperBorderTypeTablet,
		imageAccordionWrapperBorderTypeMobile,
		imageAccordionWrapperBorderTypeLink,
		imageAccordionWrapperBorderRadiusUnits,
		imageAccordionWrapperBorderRadiusDesktop,
		imageAccordionWrapperBorderRadiusTablet,
		imageAccordionWrapperBorderRadiusMobile,
		imageAccordionWrapperBorderRadiusLink,

		imageAccordionGlobalZIndex,
		imageAccordionCustomCSS,
		imageAccordionWraperID,
		imageAccordionWraperClass,

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
		imageAccordionOverflow,

		imageAccordionDesktopSwitcher,
		imageAccordionTabletSwitcher,
		imageAccordionMobileSwitcher,
	} = attributes;

	const deviceType = useDeviceType();
	const [openItemIndex, setOpenItemIndex] = useState(null);

	/** Item handlers */
	const updateItem = (id, keyOrUpdates, value) => {
		const latestAttributes = wp.data
			.select("core/block-editor")
			.getBlockAttributes(clientId);
		const latestItems =
			latestAttributes?.imageAccordionItems || imageAccordionItems;

		const newItems = latestItems.map((item) => {
			if (item.id === id) {
				if (typeof keyOrUpdates === "object") {
					return { ...item, ...keyOrUpdates };
				}
				const key = keyOrUpdates;
				const updatedValue =
					typeof value === "object" && !Array.isArray(value) && item[key]
						? { ...item[key], ...value }
						: value;
				return { ...item, [key]: updatedValue };
			}
			return item;
		});
		setAttributes({ imageAccordionItems: newItems });
	};

	const duplicateItem = (id) => {
		const itemToDuplicate = imageAccordionItems.find((i) => i.id === id);
		if (!itemToDuplicate) return;
		const newItem = { ...itemToDuplicate, id: "item-" + Date.now() };
		const newItems = [...imageAccordionItems, newItem];
		setAttributes({ imageAccordionItems: newItems });
	};

	const addItem = () => {
		const newItem = {
			id: "item-" + Date.now(),
			image: {
				url: `${pluginURL}assets/images/preset-bg.jpg`,
				id: "",
				alt: "",
				position: "center center",
				attachment: "scroll",
				repeat: "no-repeat",
				size: "cover",
			},
			title: "New Item",
			subTitle: "",
			mediaType: "icon",
			selectedIcon: "star",
			selectedImage: { url: "", id: "" },
			buttonText: "Read More",
			buttonUrl: "#",
			buttonTarget: false,
			buttonNofollow: false,
		};
		setAttributes({ imageAccordionItems: [...imageAccordionItems, newItem] });
	};

	const removeItem = (id) => {
		const newItems = imageAccordionItems.filter((i) => i.id !== id);
		setAttributes({ imageAccordionItems: newItems });
	};

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = imageAccordionItems.findIndex((i) => i.id === active.id);
			const newIndex = imageAccordionItems.findIndex((i) => i.id === over.id);
			setAttributes({
				imageAccordionItems: arrayMove(imageAccordionItems, oldIndex, newIndex),
			});
		}
	};

	/** Item Padding handlers */
	const imageAccordionItemPaddingHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (imageAccordionItemPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionItemPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionItemPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionItemPaddingMobile: {
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
						imageAccordionItemPaddingDesktop: {
							...imageAccordionItemPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionItemPaddingTablet: {
							...imageAccordionItemPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionItemPaddingMobile: {
							...imageAccordionItemPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const imageAccordionItemPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes({
			imageAccordionItemPaddingLink: !imageAccordionItemPaddingLink,
		});
	};

	const imageAccordionItemPaddingSpacingUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionItemPaddingUnits: {
				...imageAccordionItemPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Item Margin handlers */
	const imageAccordionItemMarginHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (imageAccordionItemMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionItemMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionItemMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionItemMarginMobile: {
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
						imageAccordionItemMarginDesktop: {
							...imageAccordionItemMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionItemMarginTablet: {
							...imageAccordionItemMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionItemMarginMobile: {
							...imageAccordionItemMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const imageAccordionItemMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes({
			imageAccordionItemMarginLink: !imageAccordionItemMarginLink,
		});
	};

	const imageAccordionItemMarginSpacingUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionItemMarginUnits: {
				...imageAccordionItemMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Wrapper Padding handlers */
	const imageAccordionPaddingHandleSpacingUnitHandler = (event, position) => {
		const value = event.target.value;
		if (imageAccordionPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionPaddingMobile: {
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
						imageAccordionPaddingDesktop: {
							...imageAccordionPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionPaddingTablet: {
							...imageAccordionPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionPaddingMobile: {
							...imageAccordionPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const imageAccordionPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes({ imageAccordionPaddingLink: !imageAccordionPaddingLink });
	};

	const imageAccordionPaddingSpacingUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionPaddingUnits: {
				...imageAccordionPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Wrapper Margin handlers */
	const imageAccordionMarginHandleSpacingUnitHandler = (event, position) => {
		const value = event.target.value;
		if (imageAccordionMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionMarginMobile: {
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
						imageAccordionMarginDesktop: {
							...imageAccordionMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionMarginTablet: {
							...imageAccordionMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionMarginMobile: {
							...imageAccordionMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const imageAccordionMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes({ imageAccordionMarginLink: !imageAccordionMarginLink });
	};

	const imageAccordionMarginSpacingUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionMarginUnits: {
				...imageAccordionMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Border Radius handlers */
	const imageAccordionItemBorderRadiusHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (imageAccordionItemBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionItemBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionItemBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionItemBorderRadiusMobile: {
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
						imageAccordionItemBorderRadiusDesktop: {
							...imageAccordionItemBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionItemBorderRadiusTablet: {
							...imageAccordionItemBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionItemBorderRadiusMobile: {
							...imageAccordionItemBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const imageAccordionItemBorderRadiusCombineBtnHandlerFn = () => {
		setAttributes({
			imageAccordionItemBorderRadiusLink: !imageAccordionItemBorderRadiusLink,
		});
	};

	const imageAccordionItemBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionItemBorderRadiusUnits: {
				...imageAccordionItemBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Wrapper Border Type handlers */
	const imageAccordionWrapperBorderTypeHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (imageAccordionWrapperBorderTypeLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionWrapperBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionWrapperBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionWrapperBorderTypeMobile: {
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
						imageAccordionWrapperBorderTypeDesktop: {
							...imageAccordionWrapperBorderTypeDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionWrapperBorderTypeTablet: {
							...imageAccordionWrapperBorderTypeTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionWrapperBorderTypeMobile: {
							...imageAccordionWrapperBorderTypeMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const imageAccordionWrapperBorderTypeCombineBtnHandlerFn = () => {
		setAttributes({
			imageAccordionWrapperBorderTypeLink: !imageAccordionWrapperBorderTypeLink,
		});
	};

	const imageAccordionWrapperBorderTypeUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionWrapperBorderTypeUnits: {
				...imageAccordionWrapperBorderTypeUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Wrapper Border Radius handlers */
	const imageAccordionWrapperBorderRadiusHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (imageAccordionWrapperBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionWrapperBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionWrapperBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionWrapperBorderRadiusMobile: {
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
						imageAccordionWrapperBorderRadiusDesktop: {
							...imageAccordionWrapperBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionWrapperBorderRadiusTablet: {
							...imageAccordionWrapperBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionWrapperBorderRadiusMobile: {
							...imageAccordionWrapperBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const imageAccordionWrapperBorderRadiusCombineBtnHandlerFn = () => {
		setAttributes({
			imageAccordionWrapperBorderRadiusLink:
				!imageAccordionWrapperBorderRadiusLink,
		});
	};

	const imageAccordionWrapperBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionWrapperBorderRadiusUnits: {
				...imageAccordionWrapperBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	/**Button Border Radius handlers */
	const imageAccordionBtnBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionBtnBorderRadiusUnits: {
				...imageAccordionBtnBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	const imageAccordionButtonBorderRadiusHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (imageAccordionBtnBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionBtnBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionBtnBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionBtnBorderRadiusMobile: {
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
						imageAccordionBtnBorderRadiusDesktop: {
							...imageAccordionBtnBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionBtnBorderRadiusTablet: {
							...imageAccordionBtnBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionBtnBorderRadiusMobile: {
							...imageAccordionBtnBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};
	const imageAccordionBtnBorderRadiusCombineBtnHandlerFn = () => {
		setAttributes({
			imageAccordionBtnBorderRadiusLink: !imageAccordionBtnBorderRadiusLink,
		});
	};

	/** Button Padding Handlers */
	const imageAccordionBtnPaddingSpacingUnitsHandler = (unit) => {
		setAttributes({
			imageAccordionBtnPaddingUnits: {
				...imageAccordionBtnPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	const imageAccordionBtnPaddingHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (imageAccordionBtnPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageAccordionBtnPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionBtnPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionBtnPaddingMobile: {
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
						imageAccordionBtnPaddingDesktop: {
							...imageAccordionBtnPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageAccordionBtnPaddingTablet: {
							...imageAccordionBtnPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageAccordionBtnPaddingMobile: {
							...imageAccordionBtnPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};
	const imageAccordionBtnPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes({
			imageAccordionBtnPaddingLink: !imageAccordionBtnPaddingLink,
		});
	};

	const generalControls = (
		<>
			<PanelBody
				title={__("Preset Style", "frontis-blocks")}
				initialOpen={true}
			>
				<FB_Presets
					className="fb-image-accordion-presets"
					label={__("Select Preset", "frontis-blocks")}
					presets={imageAccordionPresets}
					value={imageAccordionPreset}
					onChangeValue="imageAccordionPreset"
					defaultPresetValue="preset-1"
					setAttributes={setAttributes}
				/>
				<ToggleControl
					label={__("Show Title", "frontis-blocks")}
					checked={imageAccordionShowTitle}
					onChange={(value) => setAttributes({ imageAccordionShowTitle: value })}
				/>
				<ToggleControl
					label={__("Show Subtitle", "frontis-blocks")}
					checked={imageAccordionShowSubtitle}
					onChange={(value) => setAttributes({ imageAccordionShowSubtitle: value })}
				/>
				{imageAccordionPreset === "preset-3" && (
					<ToggleControl
						label={__("Show Button", "frontis-blocks")}
						checked={imageAccordionShowButton}
						onChange={(value) => setAttributes({ imageAccordionShowButton: value })}
					/>
				)}
				{imageAccordionPreset === "preset-1" && (
					<ToggleControl
						label={__("Show Icon", "frontis-blocks")}
						checked={imageAccordionShowIcon}
						onChange={(value) => setAttributes({ imageAccordionShowIcon: value })}
					/>
				)}
				{imageAccordionPreset === "preset-2" && (
					<ToggleControl
						label={__("Show Dots", "frontis-blocks")}
						checked={imageAccordionShowDots}
						onChange={(value) => setAttributes({ imageAccordionShowDots: value })}
					/>
				)}
				{(imageAccordionPreset === "preset-2" ||
					imageAccordionPreset === "preset-4") && (
					<ToggleControl
						label={__("Show Number", "frontis-blocks")}
						checked={imageAccordionShowNumber}
						onChange={(value) => setAttributes({ imageAccordionShowNumber: value })}
					/>
				)}
			</PanelBody>

			<PanelBody title={__("Settings", "frontis-blocks")} initialOpen={true}>
				<SelectControl
					label={__("Trigger On", "frontis-blocks")}
					value={imageAccordionTrigger}
					options={[
						{ label: __("Hover", "frontis-blocks"), value: "hover" },
						{ label: __("Click", "frontis-blocks"), value: "click" },
					]}
					onChange={(value) => setAttributes({ imageAccordionTrigger: value })}
				/>
			</PanelBody>

			{/* Accordion Items */}
			<PanelBody
				title={__("Accordion Items", "frontis-blocks")}
				initialOpen={true}
			>
				<div className="fb-feature-wrapper">
					<DndContext
						collisionDetection={closestCenter}
						onDragEnd={handleDragEnd}
					>
						<SortableContext items={imageAccordionItems.map((i) => i.id)}>
							<ul className="dnd-items-wrapper">
								{imageAccordionItems.map((item, index) => (
									<SortableItem
										key={item.id}
										id={item.id}
										item={item}
										index={index}
										imageAccordionPreset={imageAccordionPreset}
										updateItem={updateItem}
										removeItem={removeItem}
										duplicateItem={duplicateItem}
									/>
								))}
							</ul>
						</SortableContext>
					</DndContext>
				</div>
				<Button
					variant="secondary"
					onClick={addItem}
					className="fb-add-item-btn"
					icon="plus"
				>
					{__("Add Item", "frontis-blocks")}
				</Button>
			</PanelBody>
		</>
	);

	// ========================
	// STYLE TAB
	// ========================
	const styleControls = (
		<>
			{/* General */}
			<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					label={__("Width", "frontis-blocks")}
					min={0}
					max={imageAccordionWidthUnits[deviceType] === "%" ? 100 : 1600}
					rangeValue={imageAccordionWidth}
					onChangeHandler={(value) => setAttributes({ imageAccordionWidth: value })}
					rangeUnitHandler={(value) => setAttributes({ imageAccordionWidthUnits: value })}
					deviceType={deviceType}
					units={imageAccordionWidthUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_Range
					label={__("Height", "frontis-blocks")}
					min={0}
					max={imageAccordionHeightUnits[deviceType] === "%" ? 100 : 1200}
					rangeValue={imageAccordionHeight}
					onChangeHandler={(value) => setAttributes({ imageAccordionHeight: value })}
					rangeUnitHandler={(value) => setAttributes({ imageAccordionHeightUnits: value })}
					deviceType={deviceType}
					units={imageAccordionHeightUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				{/* Gap hide for preset-2 (seamless) */}
				{imageAccordionPreset !== "preset-2" &&
					imageAccordionPreset !== "preset-4" && (
						<FB_Range
							label={__("Gap", "frontis-blocks")}
							min={0}
							max={100}
							rangeValue={imageAccordionGap}
							onChangeHandler={(value) => setAttributes({ imageAccordionGap: value })}
							rangeUnitHandler={(value) => setAttributes({ imageAccordionGapUnits: value })}
							deviceType={deviceType}
							units={imageAccordionGapUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
						/>
					)}

				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={imageAccordionItemPaddingSpacingUnitsHandler}
					spacingUnits={imageAccordionItemPaddingUnits}
					spacingDesktop={imageAccordionItemPaddingDesktop}
					spacingTablet={imageAccordionItemPaddingTablet}
					spacingMobile={imageAccordionItemPaddingMobile}
					handleSpacingUnitHandler={imageAccordionItemPaddingHandleSpacingUnitHandler}
					spacingCombineBtn={imageAccordionItemPaddingLink}
					spacingCombineBtnHandler={imageAccordionItemPaddingSpacingCombineBtnHandlerFn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={imageAccordionItemMarginSpacingUnitsHandler}
					spacingUnits={imageAccordionItemMarginUnits}
					spacingDesktop={imageAccordionItemMarginDesktop}
					spacingTablet={imageAccordionItemMarginTablet}
					spacingMobile={imageAccordionItemMarginMobile}
					handleSpacingUnitHandler={imageAccordionItemMarginHandleSpacingUnitHandler}
					spacingCombineBtn={imageAccordionItemMarginLink}
					spacingCombineBtnHandler={imageAccordionItemMarginSpacingCombineBtnHandlerFn}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			{/* Item Style */}
			<PanelBody title={__("Item", "frontis-blocks")} initialOpen={false}>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={imageAccordionItemBorderRadiusUnitsHandler}
					spacingUnits={imageAccordionItemBorderRadiusUnits}
					spacingDesktop={imageAccordionItemBorderRadiusDesktop}
					spacingTablet={imageAccordionItemBorderRadiusTablet}
					spacingMobile={imageAccordionItemBorderRadiusMobile}
					handleSpacingUnitHandler={imageAccordionItemBorderRadiusHandleSpacingUnitHandler}
					spacingCombineBtn={imageAccordionItemBorderRadiusLink}
					spacingCombineBtnHandler={imageAccordionItemBorderRadiusCombineBtnHandlerFn}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			{/* Overlay */}
			<PanelBody title={__("Overlay", "frontis-blocks")} initialOpen={false}>
				<FB_SwitcherControl
					label={__("Overlay Color", "frontis-blocks")}
					globalSwitcher={imageAccordionOverlayColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ imageAccordionOverlayColorSwitcher: value })}
				/>
				{imageAccordionOverlayColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={imageAccordionOverlayColor}
						setGlobalColor={(value) => setAttributes({ imageAccordionOverlayColor: value ?? "" })}
					/>
				)}
				{imageAccordionOverlayColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={imageAccordionOverlayHoverColor}
						setGlobalColor={(value) => setAttributes({ imageAccordionOverlayHoverColor: value ?? "" })}
					/>
				)}
			</PanelBody>
			{/* Title */}
			{imageAccordionShowTitle && (
				<PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>
					<FB_TypographyControl
						label={__("Typography", "frontis-blocks")}
						globalTypoControlActive={true}
						storeGlobalTypographyData={(value) => setAttributes({ imageAccordionTitleGlobalTypographyData: value })}
						globalTypoType={imageAccordionTitleTypoType}
						onChangeGlobalTypoType={(value) => setAttributes({ imageAccordionTitleTypoType: value })}
						globalTypoOption={imageAccordionTitleTypoOption}
						onChangeGlobalTypoOption={(value) => setAttributes({ imageAccordionTitleTypoOption: value })}
						fontFamily={imageAccordionTitleFontFamily}
						onChangeFontFamily={(value) => setAttributes({ imageAccordionTitleFontFamily: value })}
						fontSize={imageAccordionTitleFontSize}
						onChangeFontSize={(value) => setAttributes({ imageAccordionTitleFontSize: value })}
						fontSizeUnits={imageAccordionTitleFontSizeUnits}
						onChangeFontSizeUnit={(value) => setAttributes({ imageAccordionTitleFontSizeUnits: value })}
						fontWeight={imageAccordionTitleFontWeight}
						onChangeFontWeight={(value) => setAttributes({ imageAccordionTitleFontWeight: value })}
						fontStyle={imageAccordionTitleFontStyle}
						onChangeFontStyle={(value) => setAttributes({ imageAccordionTitleFontStyle: value })}
						textTransform={imageAccordionTitleTransform}
						onChangeTextTransform={(value) => setAttributes({ imageAccordionTitleTransform: value })}
						textDecoration={imageAccordionTitleDecoration}
						onChangeTextDecoration={(value) => setAttributes({ imageAccordionTitleDecoration: value })}
						letterSpacing={imageAccordionTitleLetterSpacing}
						onChangeLetterSpacing={(value) => setAttributes({ imageAccordionTitleLetterSpacing: value })}
						letterSpacingUnits={imageAccordionTitleLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) => setAttributes({ imageAccordionTitleLetterSpacingUnits: value })}
						lineHeight={imageAccordionTitleLineHeight}
						onChangeLineHeight={(value) => setAttributes({ imageAccordionTitleLineHeight: value })}
						lineHeightUnits={imageAccordionTitleLineHeightUnits}
						onChangeLineHeightUnit={(value) => setAttributes({ imageAccordionTitleLineHeightUnits: value })}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={imageAccordionTitleColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ imageAccordionTitleColorSwitcher: value })}
					/>
					{imageAccordionTitleColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={imageAccordionTitleColor}
							setGlobalColor={(value) => setAttributes({ imageAccordionTitleColor: value ?? "" })}
						/>
					)}
					{imageAccordionTitleColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={imageAccordionTitleHoverColor}
							setGlobalColor={(value) => setAttributes({ imageAccordionTitleHoverColor: value ?? "" })}
						/>
					)}
				</PanelBody>
			)}
			{/* Subtitle */}
			<PanelBody title={__("Subtitle", "frontis-blocks")} initialOpen={false}>
				<FB_TypographyControl
					label={__("Typography", "frontis-blocks")}
					globalTypoControlActive={true}
					storeGlobalTypographyData={(value) => setAttributes({ imageAccordionSubtitleGlobalTypographyData: value })}
					globalTypoType={imageAccordionSubtitleTypoType}
					onChangeGlobalTypoType={(value) => setAttributes({ imageAccordionSubtitleTypoType: value })}
					globalTypoOption={imageAccordionSubtitleTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ imageAccordionSubtitleTypoOption: value })}
					fontFamily={imageAccordionSubtitleFontFamily}
					onChangeFontFamily={(value) => setAttributes({ imageAccordionSubtitleFontFamily: value })}
					fontSize={imageAccordionSubtitleFontSize}
					onChangeFontSize={(value) => setAttributes({ imageAccordionSubtitleFontSize: value })}
					fontSizeUnits={imageAccordionSubtitleFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ imageAccordionSubtitleFontSizeUnits: value })}
					fontWeight={imageAccordionSubtitleFontWeight}
					onChangeFontWeight={(value) => setAttributes({ imageAccordionSubtitleFontWeight: value })}
					fontStyle={imageAccordionSubtitleFontStyle}
					onChangeFontStyle={(value) => setAttributes({ imageAccordionSubtitleFontStyle: value })}
					textTransform={imageAccordionSubtitleTransform}
					onChangeTextTransform={(value) => setAttributes({ imageAccordionSubtitleTransform: value })}
					textDecoration={imageAccordionSubtitleDecoration}
					onChangeTextDecoration={(value) => setAttributes({ imageAccordionSubtitleDecoration: value })}
					letterSpacing={imageAccordionSubtitleLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ imageAccordionSubtitleLetterSpacing: value })}
					letterSpacingUnits={imageAccordionSubtitleLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ imageAccordionSubtitleLetterSpacingUnits: value })}
					lineHeight={imageAccordionSubtitleLineHeight}
					onChangeLineHeight={(value) => setAttributes({ imageAccordionSubtitleLineHeight: value })}
					lineHeightUnits={imageAccordionSubtitleLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ imageAccordionSubtitleLineHeightUnits: value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>
				<FB_ColorControl
					label={__("Subtitle Color", "frontis-blocks")}
					globalColor={imageAccordionSubtitleColor}
					setGlobalColor={(value) => setAttributes({ imageAccordionSubtitleColor: value ?? "" })}
				/>
			</PanelBody>

			{/* Icon — Preset 1 only */}
			{imageAccordionPreset === "preset-1" && (
				<PanelBody title={__("Icon", "frontis-blocks")} initialOpen={false}>
					<FB_ColorControl
						label={__("Circle Background", "frontis-blocks")}
						globalColor={imageAccordionIconCircleBgColor}
						setGlobalColor={(value) => setAttributes({ imageAccordionIconCircleBgColor: value ?? "" })}
					/>
					<FB_Range
						label={__("Circle Size", "frontis-blocks")}
						min={20}
						max={120}
						rangeValue={imageAccordionIconCircleSize}
						onChangeHandler={(value) => setAttributes({ imageAccordionIconCircleSize: value })}
						rangeUnitHandler={(value) => setAttributes({ imageAccordionIconCircleSizeUnits: value })}
						deviceType={deviceType}
						units={imageAccordionIconCircleSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>
					<FB_SwitcherControl
						label={__("Icon Color", "frontis-blocks")}
						globalSwitcher={imageAccordionIconColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ imageAccordionIconColorSwitcher: value })}
					/>
					{imageAccordionIconColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Color", "frontis-blocks")}
							globalColor={imageAccordionIconColor}
							setGlobalColor={(value) => setAttributes({ imageAccordionIconColor: value ?? "" })}
						/>
					)}
					{imageAccordionIconColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={imageAccordionIconHoverColor}
							setGlobalColor={(value) => setAttributes({ imageAccordionIconHoverColor: value ?? "" })}
						/>
					)}
					<FB_Range
						label={__("Icon Size", "frontis-blocks")}
						min={10}
						max={100}
						rangeValue={imageAccordionIconSize}
						onChangeHandler={(value) => setAttributes({ imageAccordionIconSize: value })}
						rangeUnitHandler={(value) => setAttributes({ imageAccordionIconSizeUnits: value })}
						deviceType={deviceType}
						units={imageAccordionIconSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>
				</PanelBody>
			)}
			{/* Dots — Preset 2 only */}
			{imageAccordionPreset === "preset-2" && (
				<PanelBody
					title={__("Overlay Dots", "frontis-blocks")}
					initialOpen={false}
				>
					{imageAccordionShowDots && (
						<>
							<FB_ColorControl
								label={__("Dot Color", "frontis-blocks")}
								globalColor={imageAccordionDotColor}
								setGlobalColor={(value) => setAttributes({ imageAccordionDotColor: value ?? "" })}
							/>
							<FB_Range
								label={__("Dot Size", "frontis-blocks")}
								min={4}
								max={50}
								rangeValue={imageAccordionDotSize}
								onChangeHandler={(value) => setAttributes({ imageAccordionDotSize: value })}
								rangeUnitHandler={(value) => setAttributes({ imageAccordionDotSizeUnits: value })}
								deviceType={deviceType}
								units={imageAccordionDotSizeUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
							/>
						</>
					)}
				</PanelBody>
			)}
			{/* Number — Preset 2 & 4 */}
			{(imageAccordionPreset === "preset-2" ||
				imageAccordionPreset === "preset-4") && (
				<PanelBody
					title={__("Item Number", "frontis-blocks")}
					initialOpen={false}
				>
					{imageAccordionShowNumber && (
						<>
							<FB_Range
								label={__("Font Size", "frontis-blocks")}
								min={8}
								max={72}
								rangeValue={imageAccordionNumberFontSize}
								onChangeHandler={(value) => setAttributes({ imageAccordionNumberFontSize: value })}
								rangeUnitHandler={(value) => setAttributes({ imageAccordionNumberFontSizeUnits: value })}
								deviceType={deviceType}
								units={imageAccordionNumberFontSizeUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
							/>
							<SelectControl
								label={__("Font Weight", "frontis-blocks")}
								value={imageAccordionNumberFontWeight}
								options={[
									{ label: "Default", value: "" },
									{ label: "400", value: "400" },
									{ label: "500", value: "500" },
									{ label: "600", value: "600" },
									{ label: "700", value: "700" },
								]}
								onChange={(value) =>
									setAttributes({ imageAccordionNumberFontWeight: value })
								}
							/>
							<FB_SwitcherControl
								label={__("Number Color", "frontis-blocks")}
								globalSwitcher={imageAccordionNumberColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ imageAccordionNumberColorSwitcher: value })}
							/>
							{imageAccordionNumberColorSwitcher === "normal" && (
								<FB_ColorControl
									label={__("Color", "frontis-blocks")}
									globalColor={imageAccordionNumberColor}
									setGlobalColor={(value) => setAttributes({ imageAccordionNumberColor: value ?? "" })}
								/>
							)}
							{imageAccordionNumberColorSwitcher === "hover" && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={imageAccordionNumberHoverColor}
									setGlobalColor={(value) => setAttributes({ imageAccordionNumberHoverColor: value ?? "" })}
								/>
							)}
						</>
					)}
				</PanelBody>
			)}
			{/* Button — Preset 3 only */}
			{imageAccordionPreset === "preset-3" && (
				<PanelBody title={__("Button", "frontis-blocks")} initialOpen={false}>
					<FB_TypographyControl
						label={__("Button Typography", "frontis-blocks")}
						globalTypoControlActive={true}
						storeGlobalTypographyData={(value) => setAttributes({ imageAccordionBtnGlobalTypographyData: value })}
						globalTypoType={imageAccordionBtnTypoType}
						onChangeGlobalTypoType={(value) => setAttributes({ imageAccordionBtnTypoType: value })}
						globalTypoOption={imageAccordionBtnTypoOption}
						onChangeGlobalTypoOption={(value) => setAttributes({ imageAccordionBtnTypoOption: value })}
						fontFamily={imageAccordionBtnFontFamily}
						onChangeFontFamily={(value) => setAttributes({ imageAccordionBtnFontFamily: value })}
						fontSize={imageAccordionBtnFontSize}
						onChangeFontSize={(value) => setAttributes({ imageAccordionBtnFontSize: value })}
						fontSizeUnits={imageAccordionBtnFontSizeUnits}
						onChangeFontSizeUnit={(value) => setAttributes({ imageAccordionBtnFontSizeUnits: value })}
						fontWeight={imageAccordionBtnFontWeight}
						onChangeFontWeight={(value) => setAttributes({ imageAccordionBtnFontWeight: value })}
						fontStyle={imageAccordionBtnFontStyle}
						onChangeFontStyle={(value) => setAttributes({ imageAccordionBtnFontStyle: value })}
						textTransform={imageAccordionBtnTransform}
						onChangeTextTransform={(value) => setAttributes({ imageAccordionBtnTransform: value })}
						textDecoration={imageAccordionBtnDecoration}
						onChangeTextDecoration={(value) => setAttributes({ imageAccordionBtnDecoration: value })}
						letterSpacing={imageAccordionBtnLetterSpacing}
						onChangeLetterSpacing={(value) => setAttributes({ imageAccordionBtnLetterSpacing: value })}
						letterSpacingUnits={imageAccordionBtnLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) => setAttributes({ imageAccordionBtnLetterSpacingUnits: value })}
						lineHeight={imageAccordionBtnLineHeight}
						onChangeLineHeight={(value) => setAttributes({ imageAccordionBtnLineHeight: value })}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
					<FB_SwitcherControl
						label={__("Button Color", "frontis-blocks")}
						globalSwitcher={imageAccordionBtnColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ imageAccordionBtnColorSwitcher: value })}
					/>
					{imageAccordionBtnColorSwitcher === "normal" && (
						<>
							<FB_ColorControl
								label={__("Text Color", "frontis-blocks")}
								globalColor={imageAccordionBtnTextColor}
								setGlobalColor={(value) => setAttributes({ imageAccordionBtnTextColor: value ?? "" })}
							/>
							<FB_ColorControl
								label={__("Background Color", "frontis-blocks")}
								globalColor={imageAccordionBtnBgColor}
								setGlobalColor={(value) => setAttributes({ imageAccordionBtnBgColor: value ?? "" })}
							/>
						</>
					)}
					{imageAccordionBtnColorSwitcher === "hover" && (
						<>
							<FB_ColorControl
								label={__("Text Hover Color", "frontis-blocks")}
								globalColor={imageAccordionBtnHoverTextColor}
								setGlobalColor={(value) => setAttributes({ imageAccordionBtnHoverTextColor: value ?? "" })}
							/>
							<FB_ColorControl
								label={__("Background Hover Color", "frontis-blocks")}
								globalColor={imageAccordionBtnHoverBgColor}
								setGlobalColor={(value) => setAttributes({ imageAccordionBtnHoverBgColor: value ?? "" })}
							/>
						</>
					)}
					<SelectControl
						label={__("Border Style", "frontis-blocks")}
						value={imageAccordionBtnBorder}
						options={BORDER_STYLES}
						onChange={(value) =>
							setAttributes({ imageAccordionBtnBorder: value })
						}
					/>
					{imageAccordionBtnBorder !== "none" && (
						<FB_ColorControl
							label={__("Border Color", "frontis-blocks")}
							globalColor={imageAccordionBtnBorderColor}
							setGlobalColor={(value) => setAttributes({ imageAccordionBtnBorderColor: value ?? "" })}
						/>
					)}
					<FB_Spacing
						label={__("Border Radius", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={imageAccordionBtnBorderRadiusUnitsHandler}
						spacingUnits={imageAccordionBtnBorderRadiusUnits}
						spacingDesktop={imageAccordionBtnBorderRadiusDesktop}
						spacingTablet={imageAccordionBtnBorderRadiusTablet}
						spacingMobile={imageAccordionBtnBorderRadiusMobile}
						handleSpacingUnitHandler={imageAccordionButtonBorderRadiusHandleSpacingUnitHandler}
						spacingCombineBtn={imageAccordionBtnBorderRadiusLink}
						spacingCombineBtnHandler={imageAccordionBtnBorderRadiusCombineBtnHandlerFn}
						setAttributes={setAttributes}
					/>
					<FB_Spacing
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={imageAccordionBtnPaddingSpacingUnitsHandler}
						spacingUnits={imageAccordionBtnPaddingUnits}
						spacingDesktop={imageAccordionBtnPaddingDesktop}
						spacingTablet={imageAccordionBtnPaddingTablet}
						spacingMobile={imageAccordionBtnPaddingMobile}
						handleSpacingUnitHandler={imageAccordionBtnPaddingHandleSpacingUnitHandler}
						spacingCombineBtn={imageAccordionBtnPaddingLink}
						spacingCombineBtnHandler={imageAccordionBtnPaddingSpacingCombineBtnHandlerFn}
						setAttributes={setAttributes}
					/>
				</PanelBody>
			)}
		</>
	);

	// ========================
	// ADVANCED TAB
	// ========================
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
							rangeValue={imageAccordionGlobalZIndex}
							onChangeHandler={(value) => setAttributes({ imageAccordionGlobalZIndex: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={imageAccordionPositionType}
							setPositionType={(value) => setAttributes({ imageAccordionPositionType: value })}
							HZOrientationType={imageAccordionHZOrientationType}
							setHZOrientationType={(value) => setAttributes({ imageAccordionHZOrientationType: value })}
							VROrientationType={imageAccordionVROrientationType}
							setVROrientationType={(value) => setAttributes({ imageAccordionVROrientationType: value })}
							HZLeftOffset={imageAccordionHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ imageAccordionHZLeftOffset: value })}
							HZLeftOffsetUnits={imageAccordionHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ imageAccordionHZLeftOffsetUnits: value })}
							HZRightOffset={imageAccordionHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ imageAccordionHZRightOffset: value })}
							HZRightOffsetUnits={imageAccordionHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ imageAccordionHZRightOffsetUnits: value })}
							VRTopOffset={imageAccordionVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ imageAccordionVRTopOffset: value })}
							VRTopOffsetUnits={imageAccordionVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ imageAccordionVRTopOffsetUnits: value })}
							VRBottomOffset={imageAccordionVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ imageAccordionVRBottomOffset: value })}
							VRBottomOffsetUnits={imageAccordionVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ imageAccordionVRBottomOffsetUnits: value })}
							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={imageAccordionWraperID}
							onChangeValue={(value) =>setAttributes({ imageAccordionWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={imageAccordionWraperClass}
							onChangeValue={(value) => setAttributes({ imageAccordionWraperClass: value })}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
					</PanelBody>
					<PanelBody
						title={__("Background", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_BackgroundColorControl
							bgColorSwitcher={imageAccordionBgColorSwitcher}
							setBgColorSwitcher={(value) => setAttributes({ imageAccordionBgColorSwitcher: value })}
							normalBackgroundType={imageAccordionBackgroundType}
							setNormalBackgroundType={(value) => setAttributes({ imageAccordionBackgroundType: value })}
							normalClassicColor={imageAccordionClassicColor}
							setNormalClassicColor={(value) => setAttributes({ imageAccordionClassicColor: value === undefined ? "" : value })}
							normalGradientColor={imageAccordionGradientColor}
							setNormalGradientColor={(value) => setAttributes({ imageAccordionGradientColor: value === undefined ? null : value })}
							normalCustomGradientSwitcher={imageAccordionCustomGradientSwitcher}
							setNormalCustomGradientSwitcher={(value) => setAttributes({ imageAccordionCustomGradientSwitcher: value })}
							normalCustomGradientInputValue={imageAccordionCustomGradientInputValue}
							setNormalCustomGradientInputValue={(value) => setAttributes({ imageAccordionCustomGradientInputValue: value })}
							normalBackgroundImageUrl={imageAccordionBackgroundImageUrl}
							setNormalBackgroundImageUrl={(value) => setAttributes({ imageAccordionBackgroundImageUrl: value })}
							normalBackgroundImageAlt={imageAccordionBackgroundImageAlt}
							setNormalBackgroundImageAlt={(value) => setAttributes({ imageAccordionBackgroundImageAlt: value })}
							normalBackgroundImageID={imageAccordionBackgroundImageID}
							setNormalBackgroundImageID={(value) => setAttributes({ imageAccordionBackgroundImageID: value })}
							normalBackgroundImagePosition={imageAccordionBackgroundImagePosition}
							setNormalBackgroundImagePosition={(value) => setAttributes({ imageAccordionBackgroundImagePosition: value })}
							normalBackgroundImageAttachment={imageAccordionBackgroundImageAttachment}
							setNormalBackgroundImageAttachment={(value) => setAttributes({ imageAccordionBackgroundImageAttachment: value })}
							normalBackgroundImageRepeat={imageAccordionBackgroundImageRepeat}
							setNormalBackgroundImageRepeat={(value) => setAttributes({ imageAccordionBackgroundImageRepeat: value })}
							normalBackgroundImageSize={imageAccordionBackgroundImageSize}
							setNormalBackgroundImageSize={(value) => setAttributes({ imageAccordionBackgroundImageSize: value })}
							hoverBackgroundType={imageAccordionHoverBackgroundType}
							setHoverBackgroundType={(value) => setAttributes({ imageAccordionHoverBackgroundType: value })}
							hoverClassicColor={imageAccordionHoverClassicColor}
							setHoverClassicColor={(value) => setAttributes({ imageAccordionHoverClassicColor: value === undefined ? "" : value })}
							hoverGradientColor={imageAccordionHoverGradientColor}
							setHoverGradientColor={(value) => setAttributes({ imageAccordionHoverGradientColor: value === undefined ? null : value })}
							hoverCustomGradientSwitcher={imageAccordionHoverCustomGradientSwitcher}
							setHoverCustomGradientSwitcher={(value) => setAttributes({ imageAccordionHoverCustomGradientSwitcher: value })}
							hoverCustomGradientInputValue={imageAccordionHoverCustomGradientInputValue}
							setHoverCustomGradientInputValue={(value) => setAttributes({ imageAccordionHoverCustomGradientInputValue: value })}
							hoverBackgroundImageUrl={imageAccordionHoverBackgroundImageUrl}
							setHoverBackgroundImageUrl={(value) => setAttributes({ imageAccordionHoverBackgroundImageUrl: value })}
							hoverBackgroundImageAlt={imageAccordionHoverBackgroundImageAlt}
							setHoverBackgroundImageAlt={(value) => setAttributes({ imageAccordionHoverBackgroundImageAlt: value })}
							hoverBackgroundImageID={imageAccordionHoverBackgroundImageID}
							setHoverBackgroundImageID={(value) => setAttributes({ imageAccordionHoverBackgroundImageID: value })}
							hoverBackgroundImagePosition={imageAccordionHoverBackgroundImagePosition}
							setHoverBackgroundImagePosition={(value) => setAttributes({ imageAccordionHoverBackgroundImagePosition: value })}
							hoverBackgroundImageAttachment={imageAccordionHoverBackgroundImageAttachment}
							setHoverBackgroundImageAttachment={(value) => setAttributes({ imageAccordionHoverBackgroundImageAttachment: value })}
							hoverBackgroundImageRepeat={imageAccordionHoverBackgroundImageRepeat}
							setHoverBackgroundImageRepeat={(value) => setAttributes({ imageAccordionHoverBackgroundImageRepeat: value })}
							hoverBackgroundImageSize={imageAccordionHoverBackgroundImageSize}
							setHoverBackgroundImageSize={(value) => setAttributes({ imageAccordionHoverBackgroundImageSize: value })}
						/>
					</PanelBody>
					<PanelBody title={__("Border", "frontis-blocks")} initialOpen={false}>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={imageAccordionWrapperBorder}
							options={BORDER_STYLES}
							onChange={(value) =>
								setAttributes({ imageAccordionWrapperBorder: value })
							}
						/>
						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={imageAccordionWrapperBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ imageAccordionWrapperBorderColorSwitcher: value })}
						/>

						{imageAccordionWrapperBorderColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={imageAccordionWrapperBorderColor}
								setGlobalColor={(value) => setAttributes({ imageAccordionWrapperBorderColor: value === undefined ? "" : value })}
							/>
						)}

						{imageAccordionWrapperBorderColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={imageAccordionWrapperBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ imageAccordionWrapperBorderHoverColor: value === undefined ? "" : value })}
							/>
						)}
						<FB_Spacing
							label={"Border Width"}
							deviceType={deviceType}
							spacingUnitsHandler={imageAccordionWrapperBorderTypeUnitsHandler}
							spacingUnits={imageAccordionWrapperBorderTypeUnits}
							spacingDesktop={imageAccordionWrapperBorderTypeDesktop}
							spacingTablet={imageAccordionWrapperBorderTypeTablet}
							spacingMobile={imageAccordionWrapperBorderTypeMobile}
							handleSpacingUnitHandler={imageAccordionWrapperBorderTypeHandleSpacingUnitHandler}
							spacingCombineBtn={imageAccordionWrapperBorderTypeLink}
							spacingCombineBtnHandler={imageAccordionWrapperBorderTypeCombineBtnHandlerFn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={"Border Radius"}
							deviceType={deviceType}
							spacingUnitsHandler={imageAccordionWrapperBorderRadiusUnitsHandler}
							spacingUnits={imageAccordionWrapperBorderRadiusUnits}
							spacingDesktop={imageAccordionWrapperBorderRadiusDesktop}
							spacingTablet={imageAccordionWrapperBorderRadiusTablet}
							spacingMobile={imageAccordionWrapperBorderRadiusMobile}
							handleSpacingUnitHandler={imageAccordionWrapperBorderRadiusHandleSpacingUnitHandler}
							spacingCombineBtn={imageAccordionWrapperBorderRadiusLink}
							spacingCombineBtnHandler={imageAccordionWrapperBorderRadiusCombineBtnHandlerFn}
							setAttributes={setAttributes}
						/>
					</PanelBody>
					<PanelBody
						title={__("Padding/Margin", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_Spacing
							label={"Padding"}
							deviceType={deviceType}
							spacingUnitsHandler={imageAccordionPaddingSpacingUnitsHandler}
							spacingUnits={imageAccordionPaddingUnits}
							spacingDesktop={imageAccordionPaddingDesktop}
							spacingTablet={imageAccordionPaddingTablet}
							spacingMobile={imageAccordionPaddingMobile}
							handleSpacingUnitHandler={imageAccordionPaddingHandleSpacingUnitHandler}
							spacingCombineBtn={imageAccordionPaddingLink}
							spacingCombineBtnHandler={imageAccordionPaddingSpacingCombineBtnHandlerFn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={"Margin"}
							deviceType={deviceType}
							spacingUnitsHandler={imageAccordionMarginSpacingUnitsHandler}
							spacingUnits={imageAccordionMarginUnits}
							spacingDesktop={imageAccordionMarginDesktop}
							spacingTablet={imageAccordionMarginTablet}
							spacingMobile={imageAccordionMarginMobile}
							handleSpacingUnitHandler={imageAccordionMarginHandleSpacingUnitHandler}
							spacingCombineBtn={imageAccordionMarginLink}
							spacingCombineBtnHandler={imageAccordionMarginSpacingCombineBtnHandlerFn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={imageAccordionDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ imageAccordionDesktopSwitcher: value })}
							tabletValue={imageAccordionTabletSwitcher}
							setTabletValue={(value) => setAttributes({ imageAccordionTabletSwitcher: value })}
							mobileValue={imageAccordionMobileSwitcher}
							setMobileValue={(value) => setAttributes({ imageAccordionMobileSwitcher: value })}
						/>
					</PanelBody>

					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={imageAccordionCustomCSS}
							onChangeValue={(value) => setAttributes({ imageAccordionCustomCSS: value })}
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
