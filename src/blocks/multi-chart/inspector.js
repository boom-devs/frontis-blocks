import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	Button,
	Panel,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { memo, useState } from "@wordpress/element";
import { useDeviceType } from "@Config/displayType";

import FB_Spacing from "@Components/spacing";
import FB_Range from "@Components/range";
import FB_ColorControl from "@Components/color-control";
import FB_Color from "@Components/color";
import FB_InputControl from "@Components/input-control";
import FB_IconPicker from "@Components/icon-picker";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_PositionControl from "@Components/position-control";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_ResponsiveAlignmentControl from "@Components/responsive-alignment-control";
import FB_TypographyControl from "@Components/typography-control";
import FB_SwitcherControl from "@Components/switcher-control";

import SortableItem from "./sortableItem";
import { BORDER_STYLES, OVERFLOW_OP } from "@Constants/fbConstants";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		chartType,
		barVariant,
		chartTitle,
		chartDescription,
		chartHeight,
		chartHeightUnits,
		filterList,
		chartDatasets,
		chartLabels,

		canvasWidth,
		canvasWidthUnits,
		canvasHeight,
		canvasHeightUnits,
		canvasPaddingUnits,
		canvasPaddingDesktop,
		canvasPaddingTablet,
		canvasPaddingMobile,
		canvasPaddingLink,
		canvasMarginUnits,
		canvasMarginDesktop,
		canvasMarginTablet,
		canvasMarginMobile,
		canvasMarginLink,
		canvasBgColorSwitcher,
		canvasNormalBackgroundType,
		canvasNormalColor,
		canvasNormalGradientColor,
		canvasNormalCustomGradientSwitcher,
		canvasNormalCustomGradientInputValue,
		canvasHoverBackgroundType,
		canvasHoverColor,
		canvasHoverGradientColor,
		canvasHoverCustomGradientSwitcher,
		canvasHoverCustomGradientInputValue,
		canvasBorderHoverColor,
		canvasBorderRadiusUnits,
		canvasBorderRadiusDesktop,
		canvasBorderRadiusTablet,
		canvasBorderRadiusMobile,
		canvasBorderRadiusLink,

		chartBodyWidth,
		chartBodyWidthUnits,
		chartBodyHeight,
		chartBodyHeightUnits,
		chartBodyBgColorSwitcher,
		chartBodyNormalBackgroundType,
		chartBodyNormalColor,
		chartBodyNormalGradientColor,
		chartBodyNormalCustomGradientSwitcher,
		chartBodyNormalCustomGradientInputValue,
		chartBodyHoverBackgroundType,
		chartBodyHoverColor,
		chartBodyHoverGradientColor,
		chartBodyHoverCustomGradientSwitcher,
		chartBodyHoverCustomGradientInputValue,
		chartBodyBorderRadiusUnits,
		chartBodyBorderRadiusDesktop,
		chartBodyBorderRadiusTablet,
		chartBodyBorderRadiusMobile,
		chartBodyBorderRadiusLink,
		chartBodyPaddingUnits,
		chartBodyPaddingDesktop,
		chartBodyPaddingTablet,
		chartBodyPaddingMobile,
		chartBodyPaddingLink,
		chartBodyMarginUnits,
		chartBodyMarginDesktop,
		chartBodyMarginTablet,
		chartBodyMarginMobile,
		chartBodyMarginLink,

		chartTitleColor,
		chartTitleHoverColor,
		chartHeaderPaddingUnits,
		chartHeaderPaddingDesktop,
		chartHeaderPaddingTablet,
		chartHeaderPaddingMobile,
		chartHeaderPaddingLink,

		toggleBtnColor,
		toggleBtnBgColor,
		toggleBtnHoverColor,
		toggleBtnHoverBgColor,
		toggleBtnPaddingUnits,
		toggleBtnPaddingDesktop,
		toggleBtnPaddingTablet,
		toggleBtnPaddingMobile,
		toggleBtnPaddingLink,
		toggleBtnBorderRadiusUnits,
		toggleBtnBorderRadiusDesktop,
		toggleBtnBorderRadiusTablet,
		toggleBtnBorderRadiusMobile,
		toggleBtnBorderRadiusLink,

		filterIcon,
		filterIconSize,
		filterIconSizeUnits,
		filterIconColor,
		filterIconHoverColor,

		showChartHeader,
		showChartFilters,
		showChartLegend,
		showChartFooter,
		showGrid,
		gridColor,
		gridLineWidth,
		xAxisNormalColor,
		yAxisNormalColor,
		tooltipBg,
		tooltipColor,
		xAxisTypography,
		yAxisTypography,

		legendTextAlignment,
		legendGap,
		legendDotSize,
		legendDotSizeUnits,
		legendDotRadius,
		legendTextColor,

		footerTextAlignment,
		footerTitleNormalColor,
		footerTitleColorSwitcher,
		footerTitleHoverColor,
		footerTitleGlobalTypoSwitcher,
		footerTitleGlobalTypographyData,
		footerTitleGlobalTypoType,
		footerTitleGlobalTypoOption,
		footerTitleFontFamily,
		footerTitleFontSize,
		footerTitleFontSizeUnits,
		footerTitleFontWeight,
		footerTitleFontStyle,
		footerTitleTextTransform,
		footerTitleTextDecoration,
		footerTitleLetterSpacing,
		footerTitleLetterSpacingUnits,
		footerTitleLineHeight,
		footerTitleLineHeightUnits,
		footerDescNormalColor,
		footerDescColorSwitcher,
		footerDescHoverColor,
		footerDescGlobalTypoSwitcher,
		footerDescGlobalTypographyData,
		footerDescGlobalTypoType,
		footerDescGlobalTypoOption,
		footerDescFontFamily,
		footerDescFontSize,
		footerDescFontSizeUnits,
		footerDescFontWeight,
		footerDescFontStyle,
		footerDescTextTransform,
		footerDescTextDecoration,
		footerDescLetterSpacing,
		footerDescLetterSpacingUnits,
		footerDescLineHeight,
		footerDescLineHeightUnits,
		footerPaddingUnits,
		footerPaddingDesktop,
		footerPaddingTablet,
		footerPaddingMobile,
		footerPaddingLink,
		footerMarginUnits,
		footerMarginDesktop,
		footerMarginTablet,
		footerMarginMobile,
		footerMarginLink,

		multiChartBgColorSwitcher,
		multiChartBackgroundType,
		multiChartClassicColor,
		multiChartGradientColor,
		multiChartCustomGradientSwitcher,
		multiChartCustomGradientInputValue,
		multiChartBackgroundImageUrl,
		multiChartBackgroundImageAlt,
		multiChartBackgroundImageID,
		multiChartBackgroundImagePosition,
		multiChartBackgroundImageAttachment,
		multiChartBackgroundImageRepeat,
		multiChartBackgroundImageSize,
		multiChartHoverBackgroundType,
		multiChartHoverClassicColor,
		multiChartHoverGradientColor,
		multiChartHoverCustomGradientSwitcher,
		multiChartHoverCustomGradientInputValue,
		multiChartHoverBackgroundImageUrl,
		multiChartHoverBackgroundImageAlt,
		multiChartHoverBackgroundImageID,
		multiChartHoverBackgroundImagePosition,
		multiChartHoverBackgroundImageAttachment,
		multiChartHoverBackgroundImageRepeat,
		multiChartHoverBackgroundImageSize,

		multiChartWrapperBorder,
		multiChartWrapperBorderColorSwitcher,
		multiChartWrapperBorderColor,
		multiChartWrapperBorderHoverColor,
		multiChartWrapperBorderTypeUnits,
		multiChartWrapperBorderTypeDesktop,
		multiChartWrapperBorderTypeTablet,
		multiChartWrapperBorderTypeMobile,
		multiChartWrapperBorderTypeLink,
		multiChartWrapperBorderRadiusUnits,
		multiChartWrapperBorderRadiusDesktop,
		multiChartWrapperBorderRadiusTablet,
		multiChartWrapperBorderRadiusMobile,
		multiChartWrapperBorderRadiusLink,

		multiChartPaddingUnits,
		multiChartPaddingDesktop,
		multiChartPaddingTablet,
		multiChartPaddingMobile,
		multiChartPaddingLink,
		multiChartMarginUnits,
		multiChartMarginDesktop,
		multiChartMarginTablet,
		multiChartMarginMobile,
		multiChartMarginLink,

		multiChartGlobalZIndex,
		multiChartCustomCSS,
		multiChartWrapperID,
		multiChartWrapperClass,
		multiChartDesktopSwitcher,
		multiChartTabletSwitcher,
		multiChartMobileSwitcher,

		multiChartPositionType,
		multiChartHZOrientationType,
		multiChartVROrientationType,
		multiChartHZLeftOffset,
		multiChartHZLeftOffsetUnits,
		multiChartHZRightOffset,
		multiChartHZRightOffsetUnits,
		multiChartVRTopOffset,
		multiChartVRTopOffsetUnits,
		multiChartVRBottomOffset,
		multiChartVRBottomOffsetUnits,
		multiChartOverflow,
	} = attributes;

	const deviceType = useDeviceType();

	// canvas padding

	const multiChartItemWrapperPaddingHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (canvasPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						canvasPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						canvasPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						canvasPaddingMobile: {
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
						canvasPaddingDesktop: {
							...canvasPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						canvasPaddingTablet: { ...canvasPaddingTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						canvasPaddingMobile: { ...canvasPaddingMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const multiChartItemWrapperPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes({ canvasPaddingLink: !canvasPaddingLink });
	};

	const multiChartItemWrapperPaddingSpacingUnitsHandler = (unit) => {
		setAttributes({
			canvasPaddingUnits: {
				...canvasPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	// canvas Margin

	const multiChartItemWrapperMarginHandleSpacingUnitHandler = (
		event,
		position,
	) => {
		const value = event.target.value;
		if (canvasMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						canvasMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						canvasMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						canvasMarginMobile: {
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
						canvasMarginDesktop: { ...canvasMarginDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						canvasMarginTablet: { ...canvasMarginTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						canvasMarginMobile: { ...canvasMarginMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const multiChartItemWrapperMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes({ canvasMarginLink: !canvasMarginLink });
	};

	const multiChartItemWrapperMarginSpacingUnitsHandler = (unit) => {
		setAttributes({
			canvasMarginUnits: {
				...canvasMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Start MultiChart Wrapper Border Width */
	const handleMultiChartWrapperBorderUnitHandlerFn = (event, position) => {
		const value = event.target.value;
		if (multiChartWrapperBorderTypeLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						multiChartWrapperBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						multiChartWrapperBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						multiChartWrapperBorderTypeMobile: {
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
						multiChartWrapperBorderTypeDesktop: {
							...multiChartWrapperBorderTypeDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						multiChartWrapperBorderTypeTablet: {
							...multiChartWrapperBorderTypeTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						multiChartWrapperBorderTypeMobile: {
							...multiChartWrapperBorderTypeMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const multiChartWrapperBorderTypeUnitsHandler = (unit) => {
		setAttributes({
			multiChartWrapperBorderTypeUnits: {
				...multiChartWrapperBorderTypeUnits,
				[deviceType]: unit,
			},
		});
	};

	const multiChartWrapperBorderCombineBtnHandlerFn = () => {
		setAttributes({
			multiChartWrapperBorderTypeLink: !multiChartWrapperBorderTypeLink,
		});
	};
	/** End MultiChart Wrapper Border Width */

	/** Start MultiChart Wrapper Border Radius */
	const multiChartWrapperHandleSpacingUnitHandlerFn = (event, position) => {
		const value = event.target.value;
		if (multiChartWrapperBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						multiChartWrapperBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						multiChartWrapperBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						multiChartWrapperBorderRadiusMobile: {
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
						multiChartWrapperBorderRadiusDesktop: {
							...multiChartWrapperBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						multiChartWrapperBorderRadiusTablet: {
							...multiChartWrapperBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						multiChartWrapperBorderRadiusMobile: {
							...multiChartWrapperBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const multiChartWrapperBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			multiChartWrapperBorderRadiusUnits: {
				...multiChartWrapperBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const multiChartWrapperCombineBtnHandlerFn = () => {
		setAttributes({
			multiChartWrapperBorderRadiusLink: !multiChartWrapperBorderRadiusLink,
		});
	};
	/** End MultiChart Wrapper Border Radius */

	/** Start MultiChart Padding */
	const multiChartPaddingHandleSpacingUnitHandler = (event, position) => {
		const value = event.target.value;
		if (multiChartPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						multiChartPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						multiChartPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						multiChartPaddingMobile: {
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
						multiChartPaddingDesktop: {
							...multiChartPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						multiChartPaddingTablet: {
							...multiChartPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						multiChartPaddingMobile: {
							...multiChartPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const multiChartPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes({ multiChartPaddingLink: !multiChartPaddingLink });
	};

	const multiChartPaddingSpacingUnitsHandler = (unit) => {
		setAttributes({
			multiChartPaddingUnits: {
				...multiChartPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End MultiChart Padding */

	/** Start MultiChart Margin */
	const handleMultiChartMarginValue = (event, position) => {
		const value = event.target.value;
		if (multiChartMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						multiChartMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						multiChartMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						multiChartMarginMobile: {
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
						multiChartMarginDesktop: {
							...multiChartMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						multiChartMarginTablet: {
							...multiChartMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						multiChartMarginMobile: {
							...multiChartMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleMultiChartMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes({ multiChartMarginLink: !multiChartMarginLink });
	};

	const handleMultiChartMarginUnits = (unit) => {
		setAttributes({
			multiChartMarginUnits: {
				...multiChartMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End MultiChart Margin */

	/** Start Chart Body Padding */
	const chartBodyPaddingHandleSpacingUnitHandler = (event, position) => {
		const value = event.target.value;
		if (chartBodyPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						chartBodyPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						chartBodyPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						chartBodyPaddingMobile: {
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
						chartBodyPaddingDesktop: {
							...chartBodyPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						chartBodyPaddingTablet: {
							...chartBodyPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						chartBodyPaddingMobile: {
							...chartBodyPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const chartBodyPaddingSpacingUnitsHandler = (unit) => {
		setAttributes({
			chartBodyPaddingUnits: {
				...chartBodyPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const chartBodyPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes({ chartBodyPaddingLink: !chartBodyPaddingLink });
	};
	/** End Chart Body Padding */

	/** Start Chart Body Margin */
	const chartBodyMarginHandleSpacingUnitHandler = (event, position) => {
		const value = event.target.value;
		if (chartBodyMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						chartBodyMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						chartBodyMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						chartBodyMarginMobile: {
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
						chartBodyMarginDesktop: {
							...chartBodyMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						chartBodyMarginTablet: {
							...chartBodyMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						chartBodyMarginMobile: {
							...chartBodyMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const chartBodyMarginSpacingUnitsHandler = (unit) => {
		setAttributes({
			chartBodyMarginUnits: {
				...chartBodyMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const chartBodyMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes({ chartBodyMarginLink: !chartBodyMarginLink });
	};
	/** End Chart Body Margin */

	/** Start Chart Body Border Radius */
	const chartBodyBorderRadiusHandleSpacingUnitHandler = (event, position) => {
		const value = event.target.value;
		if (chartBodyBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						chartBodyBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						chartBodyBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						chartBodyBorderRadiusMobile: {
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
						chartBodyBorderRadiusDesktop: {
							...chartBodyBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						chartBodyBorderRadiusTablet: {
							...chartBodyBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						chartBodyBorderRadiusMobile: {
							...chartBodyBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const chartBodyBorderRadiusSpacingUnitsHandler = (unit) => {
		setAttributes({
			chartBodyBorderRadiusUnits: {
				...chartBodyBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const chartBodyBorderRadiusCombineBtnHandlerFn = () => {
		setAttributes({
			chartBodyBorderRadiusLink: !chartBodyBorderRadiusLink,
		});
	};
	/** End Chart Body Border Radius */

	/** Start Toggle Button Padding */
	const toggleBtnPaddingHandleSpacingUnitHandler = (event, position) => {
		const value = event.target.value;
		if (toggleBtnPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						toggleBtnPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						toggleBtnPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						toggleBtnPaddingMobile: {
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
						toggleBtnPaddingDesktop: {
							...toggleBtnPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						toggleBtnPaddingTablet: {
							...toggleBtnPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						toggleBtnPaddingMobile: {
							...toggleBtnPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const toggleBtnPaddingSpacingUnitsHandler = (unit) => {
		setAttributes({
			toggleBtnPaddingUnits: {
				...toggleBtnPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const toggleBtnPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes({ toggleBtnPaddingLink: !toggleBtnPaddingLink });
	};
	/** End Toggle Button Padding */

	/** Start Toggle Button Border Radius */
	const toggleBtnBorderRadiusHandleSpacingUnitHandler = (event, position) => {
		const value = event.target.value;
		if (toggleBtnBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						toggleBtnBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						toggleBtnBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						toggleBtnBorderRadiusMobile: {
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
						toggleBtnBorderRadiusDesktop: {
							...toggleBtnBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						toggleBtnBorderRadiusTablet: {
							...toggleBtnBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						toggleBtnBorderRadiusMobile: {
							...toggleBtnBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const toggleBtnBorderRadiusSpacingUnitsHandler = (unit) => {
		setAttributes({
			toggleBtnBorderRadiusUnits: {
				...toggleBtnBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const toggleBtnBorderRadiusSpacingCombineBtnHandlerFn = () => {
		setAttributes({ toggleBtnBorderRadiusLink: !toggleBtnBorderRadiusLink });
	};
	/** End Toggle Button Border Radius */

	/* =================
       REPEATER HANDLERS
    ================= */
	const updateFilter = (id, key, value) => {
		const newList = filterList.map((item, index) =>
			(item.id || index) === id ? { ...item, [key]: value } : item,
		);
		setAttributes({ filterList: newList });
	};

	const updateDataset = (id, key, value) => {
		const newList = chartDatasets.map((item, index) =>
			(item.id || index) === id ? { ...item, [key]: value } : item,
		);
		setAttributes({ chartDatasets: newList });
	};

	const handleFilterDragEnd = (event) => {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = filterList.findIndex(
				(i, index) => (i.id || index) === active.id,
			);
			const newIndex = filterList.findIndex(
				(i, index) => (i.id || index) === over.id,
			);
			setAttributes({ filterList: arrayMove(filterList, oldIndex, newIndex) });
		}
	};

	const handleDatasetDragEnd = (event) => {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = chartDatasets.findIndex(
				(i, index) => (i.id || index) === active.id,
			);
			const newIndex = chartDatasets.findIndex(
				(i, index) => (i.id || index) === over.id,
			);
			setAttributes({
				chartDatasets: arrayMove(chartDatasets, oldIndex, newIndex),
			});
		}
	};

	const addFilter = () => {
		const newItem = {
			id: "filter-" + Date.now(),
			filter_label: __("New Filter", "frontis-blocks"),
			filter_icon: "fas fa-calendar",
		};
		setAttributes({ filterList: [...filterList, newItem] });
	};

	const addDataset = () => {
		const newItem = {
			id: "ds-" + Date.now(),
			series_name: __("Series Name", "frontis-blocks"),
			values: "10,20,30",
			color: "#3b82f6",
		};
		setAttributes({ chartDatasets: [...chartDatasets, newItem] });
	};

	const removeFilter = (id) => {
		const newList = filterList.filter(
			(item, index) => (item.id || index) !== id,
		);
		setAttributes({ filterList: newList });
	};

	const removeDataset = (id) => {
		const newList = chartDatasets.filter(
			(item, index) => (item.id || index) !== id,
		);
		setAttributes({ chartDatasets: newList });
	};

	const duplicateItem = (listName, id) => {
		const list = attributes[listName];
		const itemToDuplicate = list.find(
			(item, index) => (item.id || index) === id,
		);
		if (!itemToDuplicate) return;
		const newItem = {
			...itemToDuplicate,
			id: (listName === "filterList" ? "filter-" : "ds-") + Date.now(),
		};
		setAttributes({ [listName]: [...list, newItem] });
	};

	const generalControls = (
		<>
			<PanelBody title={__("Chart Type", "frontis-blocks")} initialOpen={true}>
				<SelectControl
					label={__("Chart Type", "frontis-blocks")}
					value={chartType}
					options={[
						{ label: __("Line Chart", "frontis-blocks"), value: "line" },
						{ label: __("Bar Chart", "frontis-blocks"), value: "bar" },
						{
							label: __("Horizontal Bar", "frontis-blocks"),
							value: "horizontalBar",
						},
						{ label: __("Area Chart", "frontis-blocks"), value: "areaChart" },
						{ label: __("Pie", "frontis-blocks"), value: "pie" },
						{ label: __("Doughnut", "frontis-blocks"), value: "doughnut" },
						{ label: __("Radar", "frontis-blocks"), value: "radar" },
						{ label: __("Polar Area", "frontis-blocks"), value: "polarArea" },
					]}
					onChange={(value) => {
						setAttributes({ chartType: value });
					}}
				/>
				{chartType === "bar" && (
					<SelectControl
						label={__("Bar Variant", "frontis-blocks")}
						value={barVariant}
						options={[
							{ label: __("Default", "frontis-blocks"), value: "default" },
							{ label: __("Stacked", "frontis-blocks"), value: "stacked" },
						]}
						onChange={(value) => setAttributes({ barVariant: value })}
					/>
				)}
				<FB_InputControl
					label={__("Chart Labels", "frontis-blocks")}
					value={chartLabels}
					onChangeValue={(value) => setAttributes({ chartLabels: value })}
					helpText={__(
						"Comma-separated labels (e.g., Jan, Feb, Mar)",
						"frontis-blocks",
					)}
				/>
				<FB_Range
					label={__("Chart Height", "frontis-blocks")}
					min={0}
					max={2000}
					rangeValue={chartHeight}
					units={chartHeightUnits}
					deviceType={deviceType}
					onChangeHandler={(v) => setAttributes({ chartHeight: v })}
					rangeUnitHandler={(v) => setAttributes({ chartHeightUnits: v })}
					setAttributes={setAttributes}
					isRangeUnit={true}
					resetFallbackValue={270}
				/>
				<ToggleControl
					label={__("Show Header", "frontis-blocks")}
					checked={showChartHeader}
					onChange={(v) => setAttributes({ showChartHeader: v })}
				/>
				{showChartHeader && (
					<ToggleControl
						label={__("Show Filters", "frontis-blocks")}
						checked={showChartFilters}
						onChange={(v) => setAttributes({ showChartFilters: v })}
					/>
				)}
				<ToggleControl
					label={__("Show Legend", "frontis-blocks")}
					checked={showChartLegend}
					onChange={(v) => setAttributes({ showChartLegend: v })}
				/>
				<ToggleControl
					label={__("Show Footer", "frontis-blocks")}
					checked={showChartFooter}
					onChange={(v) => setAttributes({ showChartFooter: v })}
				/>
			</PanelBody>

			<PanelBody
				title={__("Label Dropdown", "frontis-blocks")}
				initialOpen={false}
			>
				<div className="fb-feature-wrapper">
					<DndContext
						collisionDetection={closestCenter}
						onDragEnd={handleFilterDragEnd}
					>
						<SortableContext
							items={filterList.map((item, index) => item.id || index)}
						>
							<ul className="dnd-items-wrapper">
								{filterList.map((item, index) => (
									<SortableItem
										key={item.id || index}
										id={item.id || index}
										item={item}
										index={index}
										type="filter"
										updateItem={updateFilter}
										removeItem={removeFilter}
										duplicateItem={(id) => duplicateItem("filterList", id)}
									/>
								))}
							</ul>
						</SortableContext>
					</DndContext>
				</div>
				<Button
					variant="secondary"
					onClick={addFilter}
					className="fb-add-item-btn"
					icon="plus"
				>
					{__("Add Filter Option", "frontis-blocks")}
				</Button>
			</PanelBody>

			<PanelBody
				title={__("Chart Series Data", "frontis-blocks")}
				initialOpen={true}
			>
				<div className="fb-feature-wrapper">
					<DndContext
						collisionDetection={closestCenter}
						onDragEnd={handleDatasetDragEnd}
					>
						<SortableContext
							items={chartDatasets.map((item, index) => item.id || index)}
						>
							<ul className="dnd-items-wrapper">
								{chartDatasets.map((item, index) => (
									<SortableItem
										key={item.id || index}
										id={item.id || index}
										item={item}
										index={index}
										type="dataset"
										updateItem={updateDataset}
										removeItem={removeDataset}
										duplicateItem={(id) => duplicateItem("chartDatasets", id)}
									/>
								))}
							</ul>
						</SortableContext>
					</DndContext>
				</div>
				<Button
					variant="secondary"
					onClick={addDataset}
					className="fb-add-item-btn"
					icon="plus"
				>
					{__("Add Data Series", "frontis-blocks")}
				</Button>
			</PanelBody>

			<PanelBody
				title={__("Footer Text", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_InputControl
					label={__("Title", "frontis-blocks")}
					value={chartTitle}
					onChangeValue={(v) => setAttributes({ chartTitle: v })}
				/>
				<FB_InputControl
					label={__("Description", "frontis-blocks")}
					value={chartDescription}
					onChangeValue={(v) => setAttributes({ chartDescription: v })}
				/>
				<FB_ResponsiveAlignmentControl
					label={__("Alignment", "frontis-blocks")}
					globalAlignment={footerTextAlignment}
					setGlobalAlignment={(v) => setAttributes({ footerTextAlignment: v })}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>
			</PanelBody>
		</>
	);

	const styleControls = (
		<>
			<PanelBody
				title={__("Container Canvas", "frontis-blocks")}
				initialOpen={true}
			>
				<FB_Range
					label={__("Width", "frontis-blocks")}
					rangeValue={canvasWidth}
					units={canvasWidthUnits}
					deviceType={deviceType}
					onChangeHandler={(value) => setAttributes({ canvasWidth: value })}
					rangeUnitHandler={(value) =>
						setAttributes({ canvasWidthUnits: value })
					}
					setAttributes={setAttributes}
					min={0}
					max={2000}
					resetFallbackValue=""
				/>
				{showChartLegend && (
					<FB_Range
						label={__("Height", "frontis-blocks")}
						rangeValue={canvasHeight}
						units={canvasHeightUnits}
						deviceType={deviceType}
						onChangeHandler={(value) => setAttributes({ canvasHeight: value })}
						rangeUnitHandler={(value) =>
							setAttributes({ canvasHeightUnits: value })
						}
						setAttributes={setAttributes}
						min={0}
						max={2000}
						resetFallbackValue=""
					/>
				)}
				<FB_BackgroundColorControl
					label={__("Background", "frontis-blocks")}
					bgColorSwitcher={canvasBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ canvasBgColorSwitcher: value })
					}
					normalBackgroundType={canvasNormalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ canvasNormalBackgroundType: value })
					}
					normalClassicColor={canvasNormalColor}
					setNormalClassicColor={(value) =>
						setAttributes({ canvasNormalColor: value })
					}
					normalGradientColor={canvasNormalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({ canvasNormalGradientColor: value })
					}
					normalCustomGradientSwitcher={canvasNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ canvasNormalCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={canvasNormalCustomGradientInputValue}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({ canvasNormalCustomGradientInputValue: value })
					}
					hoverBackgroundType={canvasHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ canvasHoverBackgroundType: value })
					}
					hoverClassicColor={canvasHoverColor}
					setHoverClassicColor={(value) =>
						setAttributes({ canvasHoverColor: value })
					}
					hoverGradientColor={canvasHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({ canvasHoverGradientColor: value })
					}
					hoverCustomGradientSwitcher={canvasHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ canvasHoverCustomGradientSwitcher: value })
					}
					isBackgroundImage={false}
				/>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={multiChartItemWrapperPaddingSpacingUnitsHandler}
					spacingUnits={canvasPaddingUnits}
					spacingDesktop={canvasPaddingDesktop}
					spacingTablet={canvasPaddingTablet}
					spacingMobile={canvasPaddingMobile}
					handleSpacingUnitHandler={
						multiChartItemWrapperPaddingHandleSpacingUnitHandler
					}
					spacingCombineBtn={canvasPaddingLink}
					spacingCombineBtnHandler={
						multiChartItemWrapperPaddingSpacingCombineBtnHandlerFn
					}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={multiChartItemWrapperMarginSpacingUnitsHandler}
					spacingUnits={canvasMarginUnits}
					spacingDesktop={canvasMarginDesktop}
					spacingTablet={canvasMarginTablet}
					spacingMobile={canvasMarginMobile}
					handleSpacingUnitHandler={
						multiChartItemWrapperMarginHandleSpacingUnitHandler
					}
					spacingCombineBtn={canvasMarginLink}
					spacingCombineBtnHandler={
						multiChartItemWrapperMarginSpacingCombineBtnHandlerFn
					}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			<PanelBody title={__("Chart Body", "frontis-blocks")} initialOpen={false}>
				<FB_BackgroundColorControl
					label={__("Background", "frontis-blocks")}
					bgColorSwitcher={chartBodyBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ chartBodyBgColorSwitcher: value })
					}
					normalBackgroundType={chartBodyNormalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ chartBodyNormalBackgroundType: value })
					}
					normalClassicColor={chartBodyNormalColor}
					setNormalClassicColor={(value) =>
						setAttributes({ chartBodyNormalColor: value })
					}
					normalGradientColor={chartBodyNormalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({ chartBodyNormalGradientColor: value })
					}
					normalCustomGradientSwitcher={chartBodyNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ chartBodyNormalCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={
						chartBodyNormalCustomGradientInputValue
					}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({ chartBodyNormalCustomGradientInputValue: value })
					}
					hoverBackgroundType={chartBodyHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ chartBodyHoverBackgroundType: value })
					}
					hoverClassicColor={chartBodyHoverColor}
					setHoverClassicColor={(value) =>
						setAttributes({ chartBodyHoverColor: value })
					}
					hoverGradientColor={chartBodyHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({ chartBodyHoverGradientColor: value })
					}
					hoverCustomGradientSwitcher={chartBodyHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ chartBodyHoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={chartBodyHoverCustomGradientInputValue}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({ chartBodyHoverCustomGradientInputValue: value })
					}
					isBackgroundImage={false}
				/>

				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={chartBodyBorderRadiusSpacingUnitsHandler}
					spacingUnits={chartBodyBorderRadiusUnits}
					spacingDesktop={chartBodyBorderRadiusDesktop}
					spacingTablet={chartBodyBorderRadiusTablet}
					spacingMobile={chartBodyBorderRadiusMobile}
					handleSpacingUnitHandler={
						chartBodyBorderRadiusHandleSpacingUnitHandler
					}
					spacingCombineBtn={chartBodyBorderRadiusLink}
					spacingCombineBtnHandler={chartBodyBorderRadiusCombineBtnHandlerFn}
					setAttributes={setAttributes}
				/>

				{/* padding and margin controls */}
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={chartBodyPaddingSpacingUnitsHandler}
					spacingUnits={chartBodyPaddingUnits}
					spacingDesktop={chartBodyPaddingDesktop}
					spacingTablet={chartBodyPaddingTablet}
					spacingMobile={chartBodyPaddingMobile}
					handleSpacingUnitHandler={chartBodyPaddingHandleSpacingUnitHandler}
					spacingCombineBtn={chartBodyPaddingLink}
					spacingCombineBtnHandler={chartBodyPaddingSpacingCombineBtnHandlerFn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={chartBodyMarginSpacingUnitsHandler}
					spacingUnits={chartBodyMarginUnits}
					spacingDesktop={chartBodyMarginDesktop}
					spacingTablet={chartBodyMarginTablet}
					spacingMobile={chartBodyMarginMobile}
					handleSpacingUnitHandler={chartBodyMarginHandleSpacingUnitHandler}
					spacingCombineBtn={chartBodyMarginLink}
					spacingCombineBtnHandler={chartBodyMarginSpacingCombineBtnHandlerFn}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			<PanelBody
				title={__("Filter Toggle Button", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_ColorControl
					label={__("Text Color", "frontis-blocks")}
					globalColor={toggleBtnColor}
					setGlobalColor={(value) => setAttributes({ toggleBtnColor: value })}
				/>
				<FB_ColorControl
					label={__("BG Color", "frontis-blocks")}
					globalColor={toggleBtnBgColor}
					setGlobalColor={(value) => setAttributes({ toggleBtnBgColor: value })}
				/>
				<FB_ColorControl
					label={__("Hover Text Color", "frontis-blocks")}
					globalColor={toggleBtnHoverColor}
					setGlobalColor={(value) =>
						setAttributes({ toggleBtnHoverColor: value })
					}
				/>
				<FB_ColorControl
					label={__("Hover BG Color", "frontis-blocks")}
					globalColor={toggleBtnHoverBgColor}
					setGlobalColor={(value) =>
						setAttributes({ toggleBtnHoverBgColor: value })
					}
				/>
				<FB_IconPicker
					value={filterIcon.value}
					setIconHandler={(value) =>
						setAttributes({ filterIcon: { ...filterIcon, value: value } })
					}
				/>
				<FB_Range
					label={__("Icon Size", "frontis-blocks")}
					min={1}
					max={100}
					rangeValue={filterIconSize}
					onChangeHandler={(value) => setAttributes({ filterIconSize: value })}
					rangeUnitHandler={(value) =>
						setAttributes({ filterIconSizeUnits: value })
					}
					deviceType={deviceType}
					units={filterIconSizeUnits}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={toggleBtnPaddingSpacingUnitsHandler}
					spacingUnits={toggleBtnPaddingUnits}
					spacingDesktop={toggleBtnPaddingDesktop}
					spacingTablet={toggleBtnPaddingTablet}
					spacingMobile={toggleBtnPaddingMobile}
					handleSpacingUnitHandler={toggleBtnPaddingHandleSpacingUnitHandler}
					spacingCombineBtn={toggleBtnPaddingLink}
					spacingCombineBtnHandler={toggleBtnPaddingSpacingCombineBtnHandlerFn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={toggleBtnBorderRadiusSpacingUnitsHandler}
					spacingUnits={toggleBtnBorderRadiusUnits}
					spacingDesktop={toggleBtnBorderRadiusDesktop}
					spacingTablet={toggleBtnBorderRadiusTablet}
					spacingMobile={toggleBtnBorderRadiusMobile}
					handleSpacingUnitHandler={
						toggleBtnBorderRadiusHandleSpacingUnitHandler
					}
					spacingCombineBtn={toggleBtnBorderRadiusLink}
					spacingCombineBtnHandler={
						toggleBtnBorderRadiusSpacingCombineBtnHandlerFn
					}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			<PanelBody
				title={__("Grid & Axis Style", "frontis-blocks")}
				initialOpen={false}
			>
				<ToggleControl
					label={__("Show Grid Lines", "frontis-blocks")}
					checked={showGrid}
					onChange={(v) => setAttributes({ showGrid: v })}
				/>
				{showGrid && (
					<FB_ColorControl
						label={__("Grid Color", "frontis-blocks")}
						globalColor={gridColor}
						setGlobalColor={(value) => setAttributes({ gridColor: value })}
					/>
				)}
				<FB_ColorControl
					label={__("X-Axis Color", "frontis-blocks")}
					globalColor={xAxisNormalColor}
					setGlobalColor={(value) => setAttributes({ xAxisNormalColor: value })}
				/>
				<FB_ColorControl
					label={__("Y-Axis Color", "frontis-blocks")}
					globalColor={yAxisNormalColor}
					setGlobalColor={(value) => setAttributes({ yAxisNormalColor: value })}
				/>
				<FB_ColorControl
					label={__("Tooltip Background", "frontis-blocks")}
					globalColor={tooltipBg}
					setGlobalColor={(value) => setAttributes({ tooltipBg: value })}
				/>
			</PanelBody>
			<PanelBody
				title={__("Legend Style", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_ResponsiveAlignmentControl
					label={__("Alignment", "frontis-blocks")}
					deviceType={deviceType}
					setAttributes={setAttributes}
					globalAlignment={legendTextAlignment}
					setGlobalAlignment={(value) =>
						setAttributes({ legendTextAlignment: value })
					}
				/>
				<FB_Range
					label={__("Dot Size", "frontis-blocks")}
					rangeValue={legendDotSize}
					units={legendDotSizeUnits}
					rangeUnitHandler={(value) =>
						setAttributes({ legendDotSizeUnits: value })
					}
					deviceType={deviceType}
					onChangeHandler={(value) => setAttributes({ legendDotSize: value })}
					setAttributes={setAttributes}
				/>
				<FB_ColorControl
					label={__("Text Color", "frontis-blocks")}
					globalColor={legendTextColor}
					setGlobalColor={(value) => setAttributes({ legendTextColor: value })}
				/>
			</PanelBody>

			<PanelBody title={__("Title", "frontis-blocks")} initialOpen={true}>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={footerTitleGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ footerTitleGlobalTypographyData: value })
					}
					globalTypoType={footerTitleGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							footerTitleGlobalTypoType: value,
							footerTitleGlobalTypoSwitcher:
								value === "default"
									? {
											...footerTitleGlobalTypoSwitcher,
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
											...footerTitleGlobalTypoSwitcher,
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
					globalTypoOption={footerTitleGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ footerTitleGlobalTypoOption: value })
					}
					fontFamily={footerTitleFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							footerTitleFontFamily: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={footerTitleFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							footerTitleFontSize: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={footerTitleFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ footerTitleFontSizeUnits: value })
					}
					fontWeight={footerTitleFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							footerTitleFontWeight: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={footerTitleFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							footerTitleFontStyle: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={footerTitleTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							footerTitleTextTransform: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={footerTitleTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							footerTitleTextDecoration: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={footerTitleLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							footerTitleLetterSpacing: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={footerTitleLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ footerTitleLetterSpacingUnits: value })
					}
					lineHeight={footerTitleLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							footerTitleLineHeight: value,
							footerTitleGlobalTypoSwitcher: {
								...footerTitleGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={footerTitleLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ footerTitleLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>
				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={footerTitleColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ footerTitleColorSwitcher: value })
					}
				/>
				{footerTitleColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={footerTitleNormalColor}
						setGlobalColor={(value) =>
							setAttributes({ footerTitleNormalColor: value })
						}
					/>
				)}
				{footerTitleColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={footerTitleHoverColor}
						setGlobalColor={(value) =>
							setAttributes({ footerTitleHoverColor: value })
						}
					/>
				)}
			</PanelBody>

			<PanelBody title={__("Description", "frontis-blocks")} initialOpen={true}>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={footerDescGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ footerDescGlobalTypographyData: value })
					}
					globalTypoType={footerDescGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							footerDescGlobalTypoType: value,
							footerDescGlobalTypoSwitcher:
								value === "default"
									? {
											...footerDescGlobalTypoSwitcher,
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
											...footerDescGlobalTypoSwitcher,
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
					globalTypoOption={footerDescGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ footerDescGlobalTypoOption: value })
					}
					fontFamily={footerDescFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							footerDescFontFamily: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={footerDescFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							footerDescFontSize: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={footerDescFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ footerDescFontSizeUnits: value })
					}
					fontWeight={footerDescFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							footerDescFontWeight: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={footerDescFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							footerDescFontStyle: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={footerDescTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							footerDescTextTransform: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={footerDescTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							footerDescTextDecoration: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={footerDescLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							footerDescLetterSpacing: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={footerDescLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ footerDescLetterSpacingUnits: value })
					}
					lineHeight={footerDescLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							footerDescLineHeight: value,
							footerDescGlobalTypoSwitcher: {
								...footerDescGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={footerDescLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ footerDescLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>
				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={footerDescColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ footerDescColorSwitcher: value })
					}
				/>
				{footerDescColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={footerDescNormalColor}
						setGlobalColor={(value) =>
							setAttributes({ footerDescNormalColor: value })
						}
					/>
				)}
				{footerDescColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={footerDescHoverColor}
						setGlobalColor={(value) =>
							setAttributes({ footerDescHoverColor: value })
						}
					/>
				)}
			</PanelBody>
		</>
	);

	const advancedControls = (
		<>
			<PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					min={0}
					max={10000000}
					label={__("Z Index", "frontis-blocks")}
					rangeValue={multiChartGlobalZIndex}
					onChangeHandler={(value) =>
						setAttributes({
							multiChartGlobalZIndex: value === 0 ? undefined : value,
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
					value={multiChartOverflow}
					options={OVERFLOW_OP}
					onChange={(value) => setAttributes({ multiChartOverflow: value })}
				/>
				<FB_PositionControl
					deviceType={deviceType}
					positionType={multiChartPositionType}
					setPositionType={(value) =>
						setAttributes({ multiChartPositionType: value })
					}
					HZOrientationType={multiChartHZOrientationType}
					setHZOrientationType={(value) =>
						setAttributes({ multiChartHZOrientationType: value })
					}
					VROrientationType={multiChartVROrientationType}
					setVROrientationType={(value) =>
						setAttributes({ multiChartVROrientationType: value })
					}
					HZLeftOffset={multiChartHZLeftOffset}
					setHZLeftOffset={(value) =>
						setAttributes({ multiChartHZLeftOffset: value })
					}
					HZLeftOffsetUnits={multiChartHZLeftOffsetUnits}
					setHZLeftOffsetUnits={(value) =>
						setAttributes({ multiChartHZLeftOffsetUnits: value })
					}
					HZRightOffset={multiChartHZRightOffset}
					setHZRightOffset={(value) =>
						setAttributes({ multiChartHZRightOffset: value })
					}
					HZRightOffsetUnits={multiChartHZRightOffsetUnits}
					setHZRightOffsetUnits={(value) =>
						setAttributes({ multiChartHZRightOffsetUnits: value })
					}
					VRTopOffset={multiChartVRTopOffset}
					setVRTopOffset={(value) =>
						setAttributes({ multiChartVRTopOffset: value })
					}
					VRTopOffsetUnits={multiChartVRTopOffsetUnits}
					setVRTopOffsetUnits={(value) =>
						setAttributes({ multiChartVRTopOffsetUnits: value })
					}
					VRBottomOffset={multiChartVRBottomOffset}
					setVRBottomOffset={(value) =>
						setAttributes({ multiChartVRBottomOffset: value })
					}
					VRBottomOffsetUnits={multiChartVRBottomOffsetUnits}
					setVRBottomOffsetUnits={(value) =>
						setAttributes({ multiChartVRBottomOffsetUnits: value })
					}
					setAttributes={setAttributes}
				/>
				<FB_InputControl
					label={__("CSS ID", "frontis-blocks")}
					value={multiChartWrapperID}
					onChangeValue={(value) =>
						setAttributes({ multiChartWrapperID: value })
					}
					helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
				/>
				<FB_InputControl
					label={__("CSS Class", "frontis-blocks")}
					value={multiChartWrapperClass}
					onChangeValue={(value) =>
						setAttributes({ multiChartWrapperClass: value })
					}
					helpText={__("Separate with spaces key.", "frontis-blocks")}
				/>
			</PanelBody>

			<PanelBody title={__("Background", "frontis-blocks")} initialOpen={false}>
				<FB_BackgroundColorControl
					bgColorSwitcher={multiChartBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ multiChartBgColorSwitcher: value })
					}
					normalBackgroundType={multiChartBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ multiChartBackgroundType: value })
					}
					normalClassicColor={multiChartClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							multiChartClassicColor: value === undefined ? "" : value,
						})
					}
					normalGradientColor={multiChartGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							multiChartGradientColor: value === undefined ? null : value,
						})
					}
					normalCustomGradientSwitcher={multiChartCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ multiChartCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={multiChartCustomGradientInputValue}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({ multiChartCustomGradientInputValue: value })
					}
					normalBackgroundImageUrl={multiChartBackgroundImageUrl}
					setNormalBackgroundImageUrl={(value) =>
						setAttributes({ multiChartBackgroundImageUrl: value })
					}
					normalBackgroundImageAlt={multiChartBackgroundImageAlt}
					setNormalBackgroundImageAlt={(value) =>
						setAttributes({ multiChartBackgroundImageAlt: value })
					}
					normalBackgroundImageID={multiChartBackgroundImageID}
					setNormalBackgroundImageID={(value) =>
						setAttributes({ multiChartBackgroundImageID: value })
					}
					normalBackgroundImagePosition={multiChartBackgroundImagePosition}
					setNormalBackgroundImagePosition={(value) =>
						setAttributes({ multiChartBackgroundImagePosition: value })
					}
					normalBackgroundImageAttachment={multiChartBackgroundImageAttachment}
					setNormalBackgroundImageAttachment={(value) =>
						setAttributes({ multiChartBackgroundImageAttachment: value })
					}
					normalBackgroundImageRepeat={multiChartBackgroundImageRepeat}
					setNormalBackgroundImageRepeat={(value) =>
						setAttributes({ multiChartBackgroundImageRepeat: value })
					}
					normalBackgroundImageSize={multiChartBackgroundImageSize}
					setNormalBackgroundImageSize={(value) =>
						setAttributes({ multiChartBackgroundImageSize: value })
					}
					hoverBackgroundType={multiChartHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ multiChartHoverBackgroundType: value })
					}
					hoverClassicColor={multiChartHoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							multiChartHoverClassicColor: value === undefined ? "" : value,
						})
					}
					hoverGradientColor={multiChartHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							multiChartHoverGradientColor: value === undefined ? null : value,
						})
					}
					hoverCustomGradientSwitcher={multiChartHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ multiChartHoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={
						multiChartHoverCustomGradientInputValue
					}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({ multiChartHoverCustomGradientInputValue: value })
					}
					hoverBackgroundImageUrl={multiChartHoverBackgroundImageUrl}
					setHoverBackgroundImageUrl={(value) =>
						setAttributes({ multiChartHoverBackgroundImageUrl: value })
					}
					hoverBackgroundImageAlt={multiChartHoverBackgroundImageAlt}
					setHoverBackgroundImageAlt={(value) =>
						setAttributes({ multiChartHoverBackgroundImageAlt: value })
					}
					hoverBackgroundImageID={multiChartHoverBackgroundImageID}
					setHoverBackgroundImageID={(value) =>
						setAttributes({ multiChartHoverBackgroundImageID: value })
					}
					hoverBackgroundImagePosition={multiChartHoverBackgroundImagePosition}
					setHoverBackgroundImagePosition={(value) =>
						setAttributes({ multiChartHoverBackgroundImagePosition: value })
					}
					hoverBackgroundImageAttachment={
						multiChartHoverBackgroundImageAttachment
					}
					setHoverBackgroundImageAttachment={(value) =>
						setAttributes({ multiChartHoverBackgroundImageAttachment: value })
					}
					hoverBackgroundImageRepeat={multiChartHoverBackgroundImageRepeat}
					setHoverBackgroundImageRepeat={(value) =>
						setAttributes({ multiChartHoverBackgroundImageRepeat: value })
					}
					hoverBackgroundImageSize={multiChartHoverBackgroundImageSize}
					setHoverBackgroundImageSize={(value) =>
						setAttributes({ multiChartHoverBackgroundImageSize: value })
					}
				/>
			</PanelBody>

			<PanelBody title={__("Border", "frontis-blocks")} initialOpen={false}>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={multiChartWrapperBorder}
					options={BORDER_STYLES}
					onChange={(value) =>
						setAttributes({ multiChartWrapperBorder: value })
					}
				/>
				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={multiChartWrapperBorderColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ multiChartWrapperBorderColorSwitcher: value })
					}
				/>
				{multiChartWrapperBorderColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={multiChartWrapperBorderColor}
						setGlobalColor={(value) =>
							setAttributes({
								multiChartWrapperBorderColor: value === undefined ? "" : value,
							})
						}
					/>
				)}
				{multiChartWrapperBorderColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={multiChartWrapperBorderHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								multiChartWrapperBorderHoverColor:
									value === undefined ? "" : value,
							})
						}
					/>
				)}
				<FB_Spacing
					label={__("Border Width", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={multiChartWrapperBorderTypeUnitsHandler}
					spacingUnits={multiChartWrapperBorderTypeUnits}
					spacingDesktop={multiChartWrapperBorderTypeDesktop}
					spacingTablet={multiChartWrapperBorderTypeTablet}
					spacingMobile={multiChartWrapperBorderTypeMobile}
					handleSpacingUnitHandler={handleMultiChartWrapperBorderUnitHandlerFn}
					spacingCombineBtn={multiChartWrapperBorderTypeLink}
					spacingCombineBtnHandler={multiChartWrapperBorderCombineBtnHandlerFn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={multiChartWrapperBorderRadiusUnitsHandler}
					spacingUnits={multiChartWrapperBorderRadiusUnits}
					spacingDesktop={multiChartWrapperBorderRadiusDesktop}
					spacingTablet={multiChartWrapperBorderRadiusTablet}
					spacingMobile={multiChartWrapperBorderRadiusMobile}
					handleSpacingUnitHandler={multiChartWrapperHandleSpacingUnitHandlerFn}
					spacingCombineBtn={multiChartWrapperBorderRadiusLink}
					spacingCombineBtnHandler={multiChartWrapperCombineBtnHandlerFn}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody
				title={__("Padding/Margin", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={multiChartPaddingSpacingUnitsHandler}
					spacingUnits={multiChartPaddingUnits}
					spacingDesktop={multiChartPaddingDesktop}
					spacingTablet={multiChartPaddingTablet}
					spacingMobile={multiChartPaddingMobile}
					handleSpacingUnitHandler={multiChartPaddingHandleSpacingUnitHandler}
					spacingCombineBtn={multiChartPaddingLink}
					spacingCombineBtnHandler={multiChartPaddingSpacingCombineBtnHandlerFn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={multiChartItemWrapperMarginSpacingUnitsHandler}
					spacingUnits={multiChartMarginUnits}
					spacingDesktop={multiChartMarginDesktop}
					spacingTablet={multiChartMarginTablet}
					spacingMobile={multiChartMarginMobile}
					handleSpacingUnitHandler={
						multiChartItemWrapperMarginHandleSpacingUnitHandler
					}
					spacingCombineBtn={multiChartMarginLink}
					spacingCombineBtnHandler={
						multiChartItemWrapperMarginSpacingCombineBtnHandlerFn
					}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody
				title={__("Responsive Control", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-responsive-control-wrapper"
			>
				<FB_VisibilityControl
					desktopValue={multiChartDesktopSwitcher}
					setDesktopValue={(value) =>
						setAttributes({ multiChartDesktopSwitcher: value })
					}
					tabletValue={multiChartTabletSwitcher}
					setTabletValue={(value) =>
						setAttributes({ multiChartTabletSwitcher: value })
					}
					mobileValue={multiChartMobileSwitcher}
					setMobileValue={(value) =>
						setAttributes({ multiChartMobileSwitcher: value })
					}
				/>
			</PanelBody>

			<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
				<FB_CustomCSSEditor
					value={multiChartCustomCSS}
					onChangeValue={(value) =>
						setAttributes({ multiChartCustomCSS: value })
					}
				/>
			</PanelBody>
		</>
	);

	return (
		<FB_InspectorControls
			generalControls={generalControls}
			styleControls={styleControls}
			advancedControls={advancedControls}
		/>
	);
};

export default memo(Inspector);
