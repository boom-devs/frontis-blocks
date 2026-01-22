import { __ } from "@wordpress/i18n";
import {
	SelectControl,
	PanelBody,
	BaseControl,
	ToggleControl,
	__experimentalInputControl as InputControl,
	TextareaControl,
} from "@wordpress/components";

/**
 * Internal depencencies
 */
import { BORDER_STYLES, OVERFLOW_OP } from "@Constants/fbConstants";
import { useEffect, useMemo, memo } from "@wordpress/element";
import FB_Spacing from "@Components/spacing";
import FB_TypographyControl from "@Components/typography-control";
import FB_Range from "@Components/range";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_SwitcherControl from "@Components/switcher-control";
import FB_ColorControl from "@Components/color-control";
import loadGoogleFont from "@Utils/loadGoogleFont";
import FB_InputControl from "@Components/input-control";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import getCustomCss from "@Utils/getCustomCss";
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from "@Components/position-control";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_ResponsiveAlignmentControl from "@Components/responsive-alignment-control";
import FB_InspectorControls from "@Components/InspectorControls";

import "./editor.scss";

const Inspector = ({ attributes, setAttributes, clientId }) => {
	const {
		blockId,
		paragraphText,
		paragraphAlignment,
		dropCap,
		paragraphColumnCount,
		paragraphColumnGap,
		paragraphColumnGapUnits,

		/** Start Paragraph Style */
		paragraphGlobalTypoSwitcher,
		paragraphGlobalTypographyData,
		paragraphGlobalTypoType,
		paragraphGlobalTypoOption,
		paragraphFontFamily,
		paragraphFontSize,
		paragraphFontSizeUnits,
		paragraphFontWeight,
		paragraphFontStyle,
		paragraphTextTransform,
		paragraphTextDecoration,
		paragraphLetterSpacing,
		paragraphLineHeight,
		paragraphLetterSpacingUnits,
		paragraphLineHeightUnits,

		paragraphTextShadowValues,
		paragraphTextShadowCssValue,
		paragraphTextStroke,
		paragraphTextStrokeColorSwitcher,
		paragraphTextStrokeColor,
		paragraphTextStrokeHoverColor,

		// start link styling
		linkGlobalTypoSwitcher,
		linkGlobalTypographyData,
		linkGlobalTypoType,
		linkGlobalTypoOption,

		linkFontFamily,
		linkFontSize,
		linkFontSizeUnits,
		linkFontWeight,
		linkFontStyle,
		linkTextTransform,
		linkTextDecoration,
		linkLetterSpacing,
		linkLineHeight,
		linkLetterSpacingUnits,
		linkLineHeightUnits,

		linkColorSwitcher,
		linkColor,
		linkHoverColor,

		linkBgColorSwitcher,
		linkBgColor,
		linkBgColorHover,

		linkPaddingUnits,
		linkDesktopPadding,
		linkTabPadding,
		linkMobilePadding,
		linkPaddingLink,

		linkBorder,
		linkBorderColorSwitcher,
		linkBorderColor,
		linkBorderHoverColor,

		linkBorderUnits,
		linkDesktopBorder,
		linkTabletBorder,
		linkMobileBorder,
		linkBorderLink,

		linkBorderRadiusUnits,
		linkDesktopBorderRadius,
		linkTabBorderRadius,
		linkMobileBorderRadius,
		linkBorderRadiusLink,

		linkBoxShadowValues,
		linkBoxShadowCssValue,

		// start dropcap styling
		dropCapGlobalTypoSwitcher,
		dropCapGlobalTypographyData,
		dropCapGlobalTypoType,
		dropCapGlobalTypoOption,

		dropCapFontFamily,
		dropCapFontSize,
		dropCapFontSizeUnits,
		dropCapFontWeight,
		dropCapFontStyle,
		dropCapTextTransform,
		dropCapTextDecoration,
		dropCapLetterSpacing,
		dropCapLineHeight,
		dropCapLetterSpacingUnits,
		dropCapLineHeightUnits,

		dropCapTextShadowValues,
		dropCapTextShadowCssValue,

		dropCapColorSwitcher,
		dropCapColor,
		dropCapHoverColor,

		dropCapBgColorSwitcher,
		dropCapBgColor,
		dropCapBgColorHover,

		dropCapPaddingUnits,
		dropCapDesktopPadding,
		dropCapTabPadding,
		dropCapMobilePadding,
		dropCapPaddingLink,

		dropCapMarginUnits,
		dropCapDesktopMargin,
		dropCapTabMargin,
		dropCapMobileMargin,
		dropCapMarginLink,

		dropCapBorder,
		dropCapBorderColorSwitcher,
		dropCapBorderColor,
		dropCapBorderHoverColor,

		dropCapBorderUnits,
		dropCapDesktopBorder,
		dropCapTabletBorder,
		dropCapMobileBorder,
		dropCapBorderLink,

		dropCapBorderRadiusUnits,
		dropCapDesktopBorderRadius,
		dropCapTabBorderRadius,
		dropCapMobileBorderRadius,
		dropCapBorderRadiusLink,

		// end dropcap style

		paragraphColorSwitcher,
		paragraphColor,
		paragraphHoverColor,

		/** Start Global Setting */
		paragraphGlobalZIndex,
		advancedParagraphOverflow,
		paragraphGlobalWraperID,
		paragraphGlobalWraperClass,

		paragraphGlobalPaddingUnits,
		paragraphGlobalPaddingDesktop,
		paragraphGlobalPaddingTablet,
		paragraphGlobalPaddingMobile,
		paragraphGlobalPaddingLink,
		paragraphGlobalMarginUnits,

		paragraphGlobalMarginDesktop,
		paragraphGlobalMarginTablet,
		paragraphGlobalMarginMobile,
		paragraphGlobalMarginLink,

		paragraphGlobalBgColorSwitcher,
		paragraphGlobalBgColor,
		paragraphGlobalBgHoverColor,

		paragraphGlobalBorder,
		paragraphGlobalBorderColorSwitcher,
		paragraphGlobalBorderColor,
		paragraphGlobalBorderHoverColor,
		paragraphGlobalBorderUnits,
		paragraphGlobalBorderDesktop,
		paragraphGlobalBorderTablet,
		paragraphGlobalBorderMobile,
		paragraphGlobalBorderLink,

		paragraphGlobalBorderRadiusUnits,
		paragraphGlobalBorderRadiusDesktop,
		paragraphGlobalBorderRadiusTablet,
		paragraphGlobalBorderRadiusMobile,
		paragraphGlobalBorderRadiusLink,

		paragraphGlobalBoxShadowSwitcher,
		paragraphGlobalBoxShadowValues,
		paragraphGlobalBoxShadowCssValue,
		paragraphGlobalBoxShadowHoverValues,
		paragraphGlobalBoxShadowHoverCssValue,

		/** End Global Style */

		advancedParagraphDesktopSwitcher,
		advancedParagraphTabletSwitcher,
		advancedParagraphMobileSwitcher,

		blockStyle,
		advancedParagraphCustomCSS,

		// Position
		advancedParagraphPositionType,
		advancedParagraphHZOrientationType,
		advancedParagraphVROrientationType,
		advancedParagraphHZLeftOffset,
		advancedParagraphHZLeftOffsetUnits,
		advancedParagraphHZRightOffset,
		advancedParagraphHZRightOffsetUnits,
		advancedParagraphVRTopOffset,
		advancedParagraphVRTopOffsetUnits,
		advancedParagraphVRBottomOffset,
		advancedParagraphVRBottomOffsetUnits,
	} = attributes;

	const deviceType = useDeviceType();

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockId: "fb-advanced-paragraphs-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const paragraphColumnGapFn = (value) => {
		setAttributes({ paragraphColumnGap: value });
	};

	const paragraphColumnGapUnitsFn = (units) => {
		setAttributes({ paragraphColumnGapUnits: units });
	};

	// start Drop Cap Padding
	const dropCapPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (dropCapPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						dropCapDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dropCapTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dropCapMobilePadding: {
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
						dropCapDesktopPadding: {
							...dropCapDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dropCapTabPadding: { ...dropCapTabPadding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						dropCapMobilePadding: {
							...dropCapMobilePadding,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const dropCapPaddingLinkBtn = () => {
		setAttributes({
			dropCapPaddingLink: !dropCapPaddingLink,
		});
	};

	const dropCapPaddingUnitsHandler = (unit) => {
		setAttributes({
			dropCapPaddingUnits: {
				...dropCapPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default padding for DropCap */
	const dropCapDesktopPaddingWidth = `${dropCapDesktopPadding.top}${dropCapPaddingUnits.Desktop} ${dropCapDesktopPadding.right}${dropCapPaddingUnits.Desktop} ${dropCapDesktopPadding.bottom}${dropCapPaddingUnits.Desktop} ${dropCapDesktopPadding.left}${dropCapPaddingUnits.Desktop}`;
	const dropCapTabletPaddingWidth = `${dropCapTabPadding.top}${dropCapPaddingUnits.Tablet} ${dropCapTabPadding.right}${dropCapPaddingUnits.Tablet} ${dropCapTabPadding.bottom}${dropCapPaddingUnits.Tablet} ${dropCapTabPadding.left}${dropCapPaddingUnits.Tablet}`;
	const dropCapMobilePaddingWidth = `${dropCapMobilePadding.top}${dropCapPaddingUnits.Mobile} ${dropCapMobilePadding.right}${dropCapPaddingUnits.Mobile} ${dropCapMobilePadding.bottom}${dropCapPaddingUnits.Mobile} ${dropCapMobilePadding.left}${dropCapPaddingUnits.Mobile}`;
	/** End dropcap Padding */

	// Start drop cap margin
	const dropCapMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (dropCapMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						dropCapDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dropCapTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dropCapMobileMargin: {
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
						dropCapDesktopMargin: {
							...dropCapDesktopMargin,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dropCapTabMargin: {
							...dropCapTabMargin,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dropCapMobileMargin: {
							...dropCapMobileMargin,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const dropCapMarginLinkBtn = () => {
		setAttributes({
			dropCapMarginLink: !dropCapMarginLink,
		});
	};

	const dropCapMarginUnitsHandler = (unit) => {
		setAttributes({
			dropCapMarginUnits: {
				...dropCapMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	// default margin for dropcap
	const dropCapDesktopMarginWidth = `${dropCapDesktopMargin.top}${dropCapMarginUnits.Desktop} ${dropCapDesktopMargin.right}${dropCapMarginUnits.Desktop} ${dropCapDesktopMargin.bottom}${dropCapMarginUnits.Desktop} ${dropCapDesktopMargin.left}${dropCapMarginUnits.Desktop}`;

	const dropCapTabletMarginWidth = `${dropCapTabMargin.top}${dropCapMarginUnits.Tablet} ${dropCapTabMargin.right}${dropCapMarginUnits.Tablet} ${dropCapTabMargin.bottom}${dropCapMarginUnits.Tablet} ${dropCapTabMargin.left}${dropCapMarginUnits.Tablet}`;

	const dropCapMobileMarginWidth = `${dropCapMobileMargin.top}${dropCapMarginUnits.Mobile}${dropCapMobileMargin.right}${dropCapMarginUnits.Mobile}${dropCapMobileMargin.bottom}${dropCapMarginUnits.Mobile}${dropCapMobileMargin.left}${dropCapMarginUnits.Mobile}`;
	// end dropCap margin

	// start dropcap border
	const dropCapBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (dropCapBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						dropCapDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dropCapTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dropCapMobileBorder: {
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
						dropCapDesktopBorder: {
							...dropCapDesktopBorder,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dropCapTabletBorder: {
							...dropCapTabletBorder,
							[position]: value,
						},
					});
					break;

				case "Mobile":
					setAttributes({
						dropCapMobileBorder: {
							...dropCapMobileBorder,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const dropCapBorderLinkBtn = () => {
		setAttributes({
			dropCapBorderLink: !dropCapBorderLink,
		});
	};

	const dropCapBorderUnitsHandler = (unit) => {
		setAttributes({
			dropCapBorderUnits: {
				...dropCapBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	// default borer for dropcap
	const dropCapDesktopBorderWidth = `${dropCapDesktopBorder.top}${dropCapBorderUnits.Desktop} ${dropCapDesktopBorder.right}${dropCapBorderUnits.Desktop} ${dropCapDesktopBorder.bottom}${dropCapBorderUnits.Desktop} ${dropCapDesktopBorder.left}${dropCapBorderUnits.Desktop}`;

	const dropCapTabletBorderWidth = `${dropCapTabletBorder.top}${dropCapBorderUnits.Tablet} ${dropCapTabletBorder.right}${dropCapBorderUnits.Tablet} ${dropCapTabletBorder.bottom}${dropCapBorderUnits.Tablet} ${dropCapTabletBorder.left}${dropCapBorderUnits.Tablet}`;

	const dropCapMobileBorderWidth = `${dropCapMobileBorder.top}${dropCapBorderUnits.Mobile} ${dropCapMobileBorder.right}${dropCapBorderUnits.Mobile} ${dropCapMobileBorder.bottom}${dropCapBorderUnits.Mobile} ${dropCapMobileBorder.left}${dropCapBorderUnits.Mobile}`;

	// end dropcap border

	// start dropcap border radius
	const dropCapBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (dropCapBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						dropCapDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dropCapTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dropCapMobileBorderRadius: {
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
						dropCapDesktopBorderRadius: {
							...dropCapDesktopBorderRadius,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dropCapTabBorderRadius: {
							...dropCapTabBorderRadius,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dropCapMobileBorderRadius: {
							...dropCapMobileBorderRadius,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const dropCapBorderRadiusLinkBtn = () => {
		setAttributes({
			dropCapBorderRadiusLink: !dropCapBorderRadiusLink,
		});
	};

	const dropCapBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			dropCapBorderRadiusUnits: {
				...dropCapBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	// default border radius for drop cap
	const dropCapDesktopBorderRadiusWidth = `${dropCapDesktopBorderRadius.top}${dropCapBorderRadiusUnits.Desktop} ${dropCapDesktopBorderRadius.right}${dropCapBorderRadiusUnits.Desktop} ${dropCapDesktopBorderRadius.bottom}${dropCapBorderRadiusUnits.Desktop} ${dropCapDesktopBorderRadius.left}${dropCapBorderRadiusUnits.Desktop}`;

	const dropCapTabletBorderRadiusWidth = `${dropCapTabBorderRadius.top}${dropCapBorderRadiusUnits.Tablet} ${dropCapTabBorderRadius.right}${dropCapBorderRadiusUnits.Tablet} ${dropCapTabBorderRadius.bottom}${dropCapBorderRadiusUnits.Tablet} ${dropCapTabBorderRadius.left}${dropCapBorderRadiusUnits.Tablet}`;

	const dropCapMobileBorderRadiusWidth = `${dropCapMobileBorderRadius.top}${dropCapBorderRadiusUnits.Mobile} ${dropCapMobileBorderRadius.right}${dropCapBorderRadiusUnits.Mobile} ${dropCapMobileBorderRadius.bottom}${dropCapBorderRadiusUnits.Mobile} ${dropCapMobileBorderRadius.left}${dropCapBorderRadiusUnits.Mobile}`;

	// end drocap border radius

	// start link Padding
	const linkPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (linkPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						linkDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						linkTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						linkMobilePadding: {
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
						linkDesktopPadding: {
							...linkDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						linkTabPadding: { ...linkTabPadding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						linkMobilePadding: {
							...linkMobilePadding,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const linkPaddingLinkBtn = () => {
		setAttributes({
			linkPaddingLink: !linkPaddingLink,
		});
	};

	const linkPaddingUnitsHandler = (unit) => {
		setAttributes({
			linkPaddingUnits: {
				...linkPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	// default padding for link
	const linkDesktopPaddingWidth = `${linkDesktopPadding.top}${linkPaddingUnits.Desktop} ${linkDesktopPadding.right}${linkPaddingUnits.Desktop} ${linkDesktopPadding.bottom}${linkPaddingUnits.Desktop} ${linkDesktopPadding.left}${linkPaddingUnits.Desktop}`;

	const linkTabletPaddingWidth = `${linkTabPadding.top}${linkPaddingUnits.Tablet} ${linkTabPadding.right}${linkPaddingUnits.Tablet} ${linkTabPadding.bottom}${linkPaddingUnits.Tablet} ${linkTabPadding.left}${linkPaddingUnits.Tablet}`;

	const linkMobilePaddingWidth = `${linkMobilePadding.top}${linkPaddingUnits.Mobile} ${linkMobilePadding.right}${linkPaddingUnits.Mobile} ${linkMobilePadding.bottom}${linkPaddingUnits.Mobile} ${linkMobilePadding.left}${linkPaddingUnits.Mobile}`;

	// start link padding
	const linkBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (linkBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						linkDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						linkTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						linkMobileBorder: {
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
						linkDesktopBorder: {
							...linkDesktopBorder,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						linkTabletBorder: {
							...linkTabletBorder,
							[position]: value,
						},
					});
					break;

				case "Mobile":
					setAttributes({
						linkMobileBorder: {
							...linkMobileBorder,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const linkBorderLinkBtn = () => {
		setAttributes({
			linkBorderLink: !linkBorderLink,
		});
	};

	const linkBorderUnitsHandler = (unit) => {
		setAttributes({
			linkBorderUnits: {
				...linkBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	// default Border for desktop
	const linkDesktopBorderWidth = `${linkDesktopBorder.top}${linkBorderUnits.Desktop} ${linkDesktopBorder.right}${linkBorderUnits.Desktop} ${linkDesktopBorder.bottom}${linkBorderUnits.Desktop} ${linkDesktopBorder.left}${linkBorderUnits.Desktop}`;

	const linkTabletBorderWidth = `${linkTabletBorder.top}${linkBorderUnits.Tablet} ${linkTabletBorder.right}${linkBorderUnits.Tablet} ${linkTabletBorder.bottom}${linkBorderUnits.Tablet} ${linkTabletBorder.left}${linkBorderUnits.Tablet}`;

	const linkMobileBorderWidth = `${linkMobileBorder.top}${linkBorderUnits.Mobile} ${linkMobileBorder.right}${linkBorderUnits.Mobile} ${linkMobileBorder.bottom}${linkBorderUnits.Mobile} ${linkMobileBorder.left}${linkBorderUnits.Mobile}`;

	// start link border radius
	const linkBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (linkBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						linkDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						linkTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						linkMobileBorderRadius: {
							top: value,
							right: value,
							botom: value,
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
						linkDesktopBorderRadius: {
							...linkDesktopBorderRadius,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						linkTabBorderRadius: {
							...linkTabBorderRadius,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						linkMobileBorderRadius: {
							...linkMobileBorderRadius,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const linkBorderRadiusLinkBtn = () => {
		setAttributes({
			linkBorderRadiusLink: !linkBorderRadiusLink,
		});
	};

	const linkBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			linkBorderRadiusUnits: {
				...linkBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	// default border radius for link
	const linkDesktopBorderRadiusWidth = `${linkDesktopBorderRadius.top}${linkBorderRadiusUnits.Desktop} ${linkDesktopBorderRadius.right}${linkBorderRadiusUnits.Desktop} ${linkDesktopBorderRadius.bottom}${linkBorderRadiusUnits.Desktop} ${linkDesktopBorderRadius.left}${linkBorderRadiusUnits.Desktop}`;
	const linkTabletBorderRadiusWidth = `${linkTabBorderRadius.top}${linkBorderRadiusUnits.Tablet} ${linkTabBorderRadius.right}${linkBorderRadiusUnits.Tablet} ${linkTabBorderRadius.bottom}${linkBorderRadiusUnits.Tablet} ${linkTabBorderRadius.left}${linkBorderRadiusUnits.Tablet}`;
	const linkMobileBorderRadiusWidth = `${linkMobileBorderRadius.top}${linkBorderRadiusUnits.Mobile} ${linkMobileBorderRadius.right}${linkBorderRadiusUnits.Mobile} ${linkMobileBorderRadius.bottom}${linkBorderRadiusUnits.Mobile} ${linkMobileBorderRadius.left}${linkBorderRadiusUnits.Mobile}`;
	// end link border radius

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (paragraphGlobalPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						paragraphGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						paragraphGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						paragraphGlobalPaddingMobile: {
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
						paragraphGlobalPaddingDesktop: {
							...paragraphGlobalPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						paragraphGlobalPaddingTablet: {
							...paragraphGlobalPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						paragraphGlobalPaddingMobile: {
							...paragraphGlobalPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({ paragraphGlobalPaddingLink: !paragraphGlobalPaddingLink });
	};

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			paragraphGlobalPaddingUnits: {
				...paragraphGlobalPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	const globalDesktopPadding = `${paragraphGlobalPaddingDesktop.top}${paragraphGlobalPaddingUnits.Desktop} ${paragraphGlobalPaddingDesktop.right}${paragraphGlobalPaddingUnits.Desktop} ${paragraphGlobalPaddingDesktop.bottom}${paragraphGlobalPaddingUnits.Desktop} ${paragraphGlobalPaddingDesktop.left}${paragraphGlobalPaddingUnits.Desktop}`;

	const globalTabletPadding = `${paragraphGlobalPaddingTablet.top}${paragraphGlobalPaddingUnits.Tablet} ${paragraphGlobalPaddingTablet.right}${paragraphGlobalPaddingUnits.Tablet} ${paragraphGlobalPaddingTablet.bottom}${paragraphGlobalPaddingUnits.Tablet} ${paragraphGlobalPaddingTablet.left}${paragraphGlobalPaddingUnits.Tablet}`;

	const globalMobilePadding = `${paragraphGlobalPaddingMobile.top}${paragraphGlobalPaddingUnits.Mobile} ${paragraphGlobalPaddingMobile.right}${paragraphGlobalPaddingUnits.Mobile} ${paragraphGlobalPaddingMobile.bottom}${paragraphGlobalPaddingUnits.Mobile} ${paragraphGlobalPaddingMobile.left}${paragraphGlobalPaddingUnits.Mobile}`;
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (paragraphGlobalMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						paragraphGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						paragraphGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						paragraphGlobalMarginMobile: {
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
						paragraphGlobalMarginDesktop: {
							...paragraphGlobalMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						paragraphGlobalMarginTablet: {
							...paragraphGlobalMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						paragraphGlobalMarginMobile: {
							...paragraphGlobalMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ paragraphGlobalMarginLink: !paragraphGlobalMarginLink });
	};

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			paragraphGlobalMarginUnits: {
				...paragraphGlobalMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const globalDesktopMargin = `${paragraphGlobalMarginDesktop.top}${paragraphGlobalMarginUnits.Desktop} ${paragraphGlobalMarginDesktop.right}${paragraphGlobalMarginUnits.Desktop} ${paragraphGlobalMarginDesktop.bottom}${paragraphGlobalMarginUnits.Desktop} ${paragraphGlobalMarginDesktop.left}${paragraphGlobalMarginUnits.Desktop}`;
	const globalTabletMargin = `${paragraphGlobalMarginTablet.top}${paragraphGlobalMarginUnits.Tablet} ${paragraphGlobalMarginTablet.right}${paragraphGlobalMarginUnits.Tablet} ${paragraphGlobalMarginTablet.bottom}${paragraphGlobalMarginUnits.Tablet} ${paragraphGlobalMarginTablet.left}${paragraphGlobalMarginUnits.Tablet}`;
	const globalMobileMargin = `${paragraphGlobalMarginMobile.top}${paragraphGlobalMarginUnits.Mobile} ${paragraphGlobalMarginMobile.right}${paragraphGlobalMarginUnits.Mobile} ${paragraphGlobalMarginMobile.bottom}${paragraphGlobalMarginUnits.Mobile} ${paragraphGlobalMarginMobile.left}${paragraphGlobalMarginUnits.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (paragraphGlobalBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						paragraphGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						paragraphGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						paragraphGlobalBorderMobile: {
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
						paragraphGlobalBorderDesktop: {
							...paragraphGlobalBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						paragraphGlobalBorderTablet: {
							...paragraphGlobalBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						paragraphGlobalBorderMobile: {
							...paragraphGlobalBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ paragraphGlobalBorderLink: !paragraphGlobalBorderLink });
	};

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			paragraphGlobalBorderUnits: {
				...paragraphGlobalBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	const globalDesktopBorderWidth = `${paragraphGlobalBorderDesktop.top}${paragraphGlobalBorderUnits.Desktop} ${paragraphGlobalBorderDesktop.right}${paragraphGlobalBorderUnits.Desktop} ${paragraphGlobalBorderDesktop.bottom}${paragraphGlobalBorderUnits.Desktop} ${paragraphGlobalBorderDesktop.left}${paragraphGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${paragraphGlobalBorderTablet.top}${paragraphGlobalBorderUnits.Tablet} ${paragraphGlobalBorderTablet.right}${paragraphGlobalBorderUnits.Tablet} ${paragraphGlobalBorderTablet.bottom}${paragraphGlobalBorderUnits.Tablet} ${paragraphGlobalBorderTablet.left}${paragraphGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${paragraphGlobalBorderMobile.top}${paragraphGlobalBorderUnits.Mobile} ${paragraphGlobalBorderMobile.right}${paragraphGlobalBorderUnits.Mobile} ${paragraphGlobalBorderMobile.bottom}${paragraphGlobalBorderUnits.Mobile} ${paragraphGlobalBorderMobile.left}${paragraphGlobalBorderUnits.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (paragraphGlobalBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						paragraphGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						paragraphGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						paragraphGlobalBorderRadiusMobile: {
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
						paragraphGlobalBorderRadiusDesktop: {
							...paragraphGlobalBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						paragraphGlobalBorderRadiusTablet: {
							...paragraphGlobalBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						paragraphGlobalBorderRadiusMobile: {
							...paragraphGlobalBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes({
			paragraphGlobalBorderRadiusLink: !paragraphGlobalBorderRadiusLink,
		});
	};

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			paragraphGlobalBorderRadiusUnits: {
				...paragraphGlobalBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${paragraphGlobalBorderRadiusDesktop.top}${paragraphGlobalBorderRadiusUnits.Desktop} ${paragraphGlobalBorderRadiusDesktop.right}${paragraphGlobalBorderRadiusUnits.Desktop} ${paragraphGlobalBorderRadiusDesktop.bottom}${paragraphGlobalBorderRadiusUnits.Desktop} ${paragraphGlobalBorderRadiusDesktop.left}${paragraphGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${paragraphGlobalBorderRadiusTablet.top}${paragraphGlobalBorderRadiusUnits.Tablet} ${paragraphGlobalBorderRadiusTablet.right}${paragraphGlobalBorderRadiusUnits.Tablet} ${paragraphGlobalBorderRadiusTablet.bottom}${paragraphGlobalBorderRadiusUnits.Tablet} ${paragraphGlobalBorderRadiusTablet.left}${paragraphGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${paragraphGlobalBorderRadiusMobile.top}${paragraphGlobalBorderRadiusUnits.Mobile} ${paragraphGlobalBorderRadiusMobile.right}${paragraphGlobalBorderRadiusUnits.Mobile} ${paragraphGlobalBorderRadiusMobile.bottom}${paragraphGlobalBorderRadiusUnits.Mobile} ${paragraphGlobalBorderRadiusMobile.left}${paragraphGlobalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */

	useEffect(() => {
		if (paragraphFontFamily !== "Default") {
			loadGoogleFont(paragraphFontFamily);
		}
	}, [paragraphFontFamily]);

	// detect <a> tags inside the RichText
	const hasLinkInParagraph = useMemo(() => {
		const htmlContent = paragraphText;

		if (!htmlContent) return false;

		const parser = new DOMParser();
		const doc = parser.parseFromString(htmlContent, "text/html");
		const aTags = doc.querySelectorAll("a");

		return aTags.length > 0;
	}, [paragraphText]);

	const allBlockStyle = useMemo(
		() => `
        .${blockId}.fb-advanced-paragraph-main-wrapper {
            ${
							advancedParagraphPositionType === "default"
								? `position: relative !important;`
								: ""
						}
            ${
							advancedParagraphPositionType !== "default" &&
							advancedParagraphPositionType !== "relative"
								? `width: 100%;`
								: ""
						}
            ${
							advancedParagraphPositionType !== "default"
								? `position: ${advancedParagraphPositionType} !important;`
								: ""
						}
            ${
							advancedParagraphPositionType !== "default" &&
							advancedParagraphPositionType !== "relative" &&
							advancedParagraphHZOrientationType === "left" &&
							advancedParagraphHZLeftOffset.Desktop
								? `left: ${advancedParagraphHZLeftOffset.Desktop}${advancedParagraphHZLeftOffsetUnits.Desktop};`
								: ""
						}
            ${
							advancedParagraphPositionType !== "default" &&
							advancedParagraphPositionType !== "relative" &&
							advancedParagraphHZOrientationType === "right" &&
							advancedParagraphHZRightOffset.Desktop
								? `right: ${advancedParagraphHZRightOffset.Desktop}${advancedParagraphHZRightOffsetUnits.Desktop};`
								: ""
						}
            ${
							advancedParagraphPositionType !== "default" &&
							advancedParagraphPositionType !== "relative" &&
							advancedParagraphVROrientationType === "top" &&
							advancedParagraphVRTopOffset.Desktop
								? `top: ${advancedParagraphVRTopOffset.Desktop}${advancedParagraphVRTopOffsetUnits.Desktop};`
								: ""
						}
            ${
							advancedParagraphPositionType !== "default" &&
							advancedParagraphPositionType !== "relative" &&
							advancedParagraphVROrientationType === "bottom" &&
							advancedParagraphVRBottomOffset.Desktop
								? `bottom: ${advancedParagraphVRBottomOffset.Desktop}${advancedParagraphVRBottomOffsetUnits.Desktop};`
								: ""
						}
            ${
							paragraphGlobalZIndex.Desktop
								? `z-index: ${paragraphGlobalZIndex.Desktop};`
								: ""
						}
            ${
							advancedParagraphOverflow !== "default"
								? `overflow: ${advancedParagraphOverflow};`
								: ""
						}
        }


        .${blockId} .fb-advanced-wrapper {
            ${
							paragraphGlobalBgColor
								? `background-color: ${paragraphGlobalBgColor};`
								: ""
						}
            ${
							globalDesktopPadding && paragraphGlobalPaddingDesktop?.top
								? `padding: ${globalDesktopPadding};`
								: ""
						}
            ${
							globalDesktopMargin && paragraphGlobalMarginDesktop?.top
								? `margin: ${globalDesktopMargin};`
								: ""
						}
            ${paragraphGlobalBorder ? `border: ${paragraphGlobalBorder};` : ""}
            ${
							globalDesktopBorderWidth && paragraphGlobalBorderDesktop?.top
								? `border-width: ${globalDesktopBorderWidth};`
								: ""
						}
            ${
							globalDesktopBorderRadiusWidth &&
							paragraphGlobalBorderRadiusDesktop?.top
								? `border-radius: ${globalDesktopBorderRadiusWidth};`
								: ""
						}
            ${
							paragraphGlobalBorderColor
								? `border-color: ${paragraphGlobalBorderColor};`
								: ""
						}
            ${
							paragraphGlobalBoxShadowCssValue
								? `box-shadow: ${paragraphGlobalBoxShadowCssValue};`
								: ""
						}

            ${
							paragraphAlignment.Desktop
								? `text-align: ${paragraphAlignment.Desktop};`
								: ""
						}
            transition: all .1s ease-in-out;
            position: relative;
        }

        .${blockId} .fb-advanced-wrapper:hover {
            ${
							paragraphGlobalBgHoverColor
								? `background-color: ${paragraphGlobalBgHoverColor};`
								: ""
						}
            ${
							paragraphGlobalBorderHoverColor
								? `border-color: ${paragraphGlobalBorderHoverColor};`
								: ""
						}
            ${
							paragraphGlobalBoxShadowHoverCssValue
								? `box-shadow: ${paragraphGlobalBoxShadowHoverCssValue};`
								: ""
						}
        }


        .${blockId} .fb-advanced-wrapper .fb-advanced-paragraph {
						margin-block-start: 0;
						margin-block-end: 0;

            ${paragraphColor ? `color: ${paragraphColor};` : ""}

						${
							paragraphColumnCount.Desktop
								? `column-count: ${paragraphColumnCount.Desktop};`
								: ""
						}
						${
							paragraphColumnGap.Desktop
								? `column-gap: ${paragraphColumnGap.Desktop}${paragraphColumnGapUnits.Desktop};`
								: ""
						}
						

            ${
							paragraphGlobalTypoSwitcher.fontFamily === true &&
							paragraphGlobalTypographyData.fontFamily
								? `font-family: ${paragraphGlobalTypographyData.fontFamily};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.fontSize === true &&
							paragraphGlobalTypographyData.fontSize
								? `font-size: ${paragraphGlobalTypographyData.fontSize};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.fontWeight === true &&
							paragraphGlobalTypographyData.fontWeight
								? `font-weight: ${paragraphGlobalTypographyData.fontWeight};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.fontStyle === true &&
							paragraphGlobalTypographyData.fontStyle
								? `font-style: ${paragraphGlobalTypographyData.fontStyle};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.textTransform === true &&
							paragraphGlobalTypographyData.textTransform
								? `text-transform: ${paragraphGlobalTypographyData.textTransform};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.textDecoration === true &&
							paragraphGlobalTypographyData.textDecoration
								? `text-decoration: ${paragraphGlobalTypographyData.textDecoration};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.letterSpacing === true &&
							paragraphGlobalTypographyData.letterSpacing
								? `letter-spacing: ${paragraphGlobalTypographyData.letterSpacing};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.lineHeight === true &&
							paragraphGlobalTypographyData.lineHeight
								? `line-height: ${paragraphGlobalTypographyData.lineHeight};`
								: ""
						}
                
            ${
							paragraphGlobalTypoSwitcher.fontFamily === false &&
							paragraphFontFamily &&
							paragraphFontFamily !== "Default"
								? `font-family: ${paragraphFontFamily};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.fontSize === false &&
							paragraphFontSize.Desktop &&
							paragraphFontSizeUnits.Desktop
								? `font-size: ${paragraphFontSize.Desktop}${paragraphFontSizeUnits.Desktop};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.fontWeight === false &&
							paragraphFontWeight
								? `font-weight: ${paragraphFontWeight};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.fontStyle === false &&
							paragraphFontStyle
								? `font-style: ${paragraphFontStyle};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.textTransform === false &&
							paragraphTextTransform
								? `text-transform: ${paragraphTextTransform};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.textDecoration === false &&
							paragraphTextDecoration
								? `text-decoration: ${paragraphTextDecoration};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.letterSpacing === false &&
							paragraphLetterSpacing.Desktop &&
							paragraphLetterSpacingUnits.Desktop
								? `letter-spacing: ${paragraphLetterSpacing.Desktop}${paragraphLetterSpacingUnits.Desktop};`
								: ""
						}
            ${
							paragraphGlobalTypoSwitcher.lineHeight === false &&
							paragraphLineHeight.Desktop &&
							paragraphLineHeightUnits.Desktop
								? `line-height: ${paragraphLineHeight.Desktop}${paragraphLineHeightUnits.Desktop};`
								: ""
						}
            

            ${
							paragraphTextShadowCssValue
								? `text-shadow: ${paragraphTextShadowCssValue};`
								: ""
						}

            ${
							paragraphTextStroke
								? `
                ${
									paragraphTextStroke.Desktop
										? `-webkit-text-stroke: ${paragraphTextStroke.Desktop}px ${paragraphTextStrokeColor};`
										: ""
								}
                ${
									paragraphTextStroke.Desktop
										? `text-stroke: ${paragraphTextStroke.Desktop}px ${paragraphTextStrokeColor};`
										: ""
								}
            `
								: ""
						}


            transition: all .3s ease-in-out;
        }



        .${blockId} .fb-advanced-wrapper .fb-advanced-paragraph:hover {
            ${paragraphHoverColor ? `color: ${paragraphHoverColor};` : ""}

            ${
							paragraphTextStrokeHoverColor
								? `
                ${
									paragraphTextStroke.Desktop
										? `-webkit-text-stroke: ${paragraphTextStroke.Desktop}px ${paragraphTextStrokeHoverColor};`
										: ""
								}
                ${
									paragraphTextStroke.Desktop
										? `text-stroke: ${paragraphTextStroke.Desktop}px ${paragraphTextStrokeHoverColor};`
										: ""
								}
            `
								: ""
						}

						transition: all .3s ease-in-out;
        }


				${
					hasLinkInParagraph
						? `
					.${blockId} .fb-advanced-paragraph-wrapper p a:hover{
						text-decoration: none;
						${linkHoverColor ? `color: ${linkHoverColor};` : ""}

						${linkBgColorHover ? `background-color: ${linkBgColorHover};` : ""}

					}

				.${blockId} .fb-advanced-paragraph-wrapper p a{
						text-decoration: underline;

						${linkColor ? `color: ${linkColor};` : ""}

						${linkBgColor ? `background-color: ${linkBgColor};` : ""}
						

						${
							linkGlobalTypoSwitcher.fontFamily === true &&
							linkGlobalTypographyData.fontFamily
								? `font-family: ${linkGlobalTypographyData.fontFamily};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.fontSize === true &&
							linkGlobalTypographyData.fontSize
								? `font-size: ${linkGlobalTypographyData.fontSize};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.fontWeight === true &&
							linkGlobalTypographyData.fontStyle
								? `font-style: ${linkGlobalTypographyData.fontStyle};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.textTransform === true &&
							linkGlobalTypoSwitcher.textTransform
								? `text-transform: ${linkGlobalTypographyData.textTransform};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.textDecoration === true &&
							linkGlobalTypoSwitcher.textDecoration
								? `text-decoration: ${linkGlobalTypographyData.textDecoration};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.letterSpacing === true &&
							linkGlobalTypoSwitcher.letterSpacing
								? `letter-spacing: ${linkGlobalTypographyData.letterSpacing};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.lineHeight === true &&
							linkGlobalTypoSwitcher.lineHeight
								? `line-height: ${linkGlobalTypographyData.lineHeight};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.fontFamily === false &&
							linkFontFamily &&
							linkFontFamily !== "Default"
								? `font-family: ${linkFontFamily};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.fontSize === false &&
							linkFontSize.Desktop &&
							linkFontSizeUnits.Desktop
								? `font-size: ${linkFontSize.Desktop}${linkFontSizeUnits.Desktop};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.fontWeight === false && linkFontWeight
								? `font-weight: ${linkFontWeight};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.fontStyle === false && linkFontStyle
								? `font-style: ${linkFontStyle}`
								: ""
						}

						${
							linkGlobalTypoSwitcher.textTransform === false &&
							linkTextTransform
								? `text-transform: ${linkTextTransform};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.textDecoration === false &&
							linkTextDecoration
								? `text-decoration: ${linkTextDecoration};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.letterSpacing === false &&
							linkLetterSpacing.Desktop &&
							linkLetterSpacingUnits.Desktop
								? `letter-spacing: ${linkLetterSpacing.Desktop}${linkLetterSpacingUnits.Desktop};`
								: ""
						}

						${
							linkGlobalTypoSwitcher.lineHeight === false &&
							linkLineHeight.Desktop &&
							linkLineHeightUnits.Desktop
								? `line-height: ${linkLineHeight.Desktop}${linkLineHeightUnits.Desktop}`
								: ""
						}

						${
							linkDesktopPaddingWidth && linkDesktopPadding?.top
								? `padding: ${linkDesktopPaddingWidth};`
								: ""
						}


						${linkBorder ? `border: ${linkBorder};` : ""}


						${
							linkDesktopBorderWidth && linkDesktopBorder?.top
								? `border-width: ${linkDesktopBorderWidth};`
								: ""
						}

						${linkBorderColor ? `border-color: ${linkBorderColor};` : ""}

								${
									linkDesktopBorderRadiusWidth && linkDesktopBorderRadius?.top
										? `border-radius: ${linkDesktopBorderRadiusWidth};`
										: ""
								}


								 ${linkBoxShadowCssValue ? `box-shadow: ${linkBoxShadowCssValue};` : ""}

transition: all .3s ease-in-out;
				}
						`
						: ""
				}
			
				

				${
					dropCap
						? ` 
				.${blockId} .fb-advanced-paragraph-wrapper .fb-advanced-paragraph::first-letter {
						vertical-align: top;
						font-size: 2em;
            line-height: 1;
						margin-right: 0.1em;
						font-weight: bold;
						float: left;

						${dropCapColor ? `color: ${dropCapColor};` : ""}
						${dropCapBgColor ? `background-color: ${dropCapBgColor};` : ""}


						${
							dropCapGlobalTypoSwitcher.fontFamily === true &&
							dropCapGlobalTypographyData.fontFamily
								? `font-family: ${dropCapGlobalTypographyData.fontFamily}; `
								: ""
						}


						${
							dropCapGlobalTypoSwitcher.fontSize === true &&
							dropCapGlobalTypographyData.fontSize
								? `font-size: ${dropCapGlobalTypographyData.fontSize}; `
								: ""
						}

						${
							dropCapGlobalTypoSwitcher.fontWeight === true &&
							dropCapGlobalTypographyData.fontStyle
								? `font-style: ${dropCapGlobalTypographyData.fontStyle};`
								: ""
						}

						${
							dropCapGlobalTypoSwitcher.textTransform === true &&
							dropCapGlobalTypoSwitcher.textTransform
								? `text-transform: ${dropCapGlobalTypographyData.textTransform};`
								: ""
						}

						${
							dropCapGlobalTypoSwitcher.textDecoration === true &&
							dropCapGlobalTypoSwitcher.textDecoration
								? `text-decoration: ${dropCapGlobalTypographyData.textDecoration};`
								: ""
						}


						${
							dropCapGlobalTypoSwitcher.letterSpacing === true &&
							dropCapGlobalTypoSwitcher.letterSpacing
								? `letter-spacing: ${dropCapGlobalTypographyData.letterSpacing};`
								: ""
						}

						${
							dropCapGlobalTypoSwitcher.lineHeight === true &&
							dropCapGlobalTypoSwitcher.lineHeight
								? `line-height: ${dropCapGlobalTypographyData.lineHeight};`
								: ""
						}

						${
							dropCapGlobalTypoSwitcher.fontFamily === false &&
							dropCapFontFamily &&
							dropCapFontFamily !== "Default"
								? `font-family: ${dropCapFontFamily};`
								: ""
						}

						${
							dropCapGlobalTypoSwitcher.fontSize === false &&
							dropCapFontSize.Desktop &&
							dropCapFontSizeUnits.Desktop
								? `font-size: ${dropCapFontSize.Desktop}${dropCapFontSizeUnits.Desktop};`
								: ""
						}

						${
							dropCapGlobalTypoSwitcher.fontWeight === false &&
							dropCapFontWeight
								? `font-weight: ${dropCapFontWeight};`
								: ""
						}

						${
							dropCapGlobalTypoSwitcher.fontStyle === false && dropCapFontStyle
								? `font-style: ${dropCapFontStyle}`
								: ""
						}

						${
							dropCapGlobalTypoSwitcher.textTransform === false &&
							dropCapTextTransform
								? `text-transform: ${dropCapTextTransform};`
								: ""
						}


						${
							dropCapGlobalTypoSwitcher.textDecoration === false &&
							dropCapTextDecoration
								? `text-decoration : ${dropCapTextDecoration};`
								: ""
						}

						${
							dropCapGlobalTypoSwitcher.letterSpacing === false &&
							dropCapLetterSpacing.Desktop &&
							dropCapLetterSpacingUnits.Desktop
								? `letter-spacing: ${dropCapLetterSpacing.Desktop}${dropCapLetterSpacingUnits.Desktop};`
								: ""
						}

						${
							dropCapGlobalTypoSwitcher.lineHeight === false &&
							dropCapLineHeight.Desktop &&
							dropCapLineHeightUnits.Desktop
								? `line-height: ${dropCapLineHeight.Desktop}${dropCapLineHeightUnits.Desktop}`
								: ""
						}

			${dropCapTextShadowCssValue ? `text-shadow: ${dropCapTextShadowCssValue};` : ""}


			${
				dropCapDesktopPaddingWidth && dropCapDesktopPadding?.top
					? `padding: ${dropCapDesktopPaddingWidth};`
					: ""
			}

			${
				dropCapDesktopMarginWidth && dropCapDesktopMargin?.top
					? `margin: ${dropCapDesktopMarginWidth};`
					: ""
			}

			${dropCapBorder ? `border: ${dropCapBorder};` : ""}

			${
				dropCapDesktopBorderWidth && dropCapDesktopBorder?.top
					? `border-width: ${dropCapDesktopBorderWidth};`
					: ""
			}

			${dropCapBorderColor ? `border-color: ${dropCapBorderColor};` : ""}

			${
				dropCapDesktopBorderRadiusWidth && dropCapDesktopBorderRadius?.top
					? `border-radius: ${dropCapDesktopBorderRadiusWidth};`
					: ""
			}

			 transition: all .3s ease-in-out;

				}

			`
						: ""
				}


@media only screen and (min-width: 768px) and (max-width: 1024px) {

				${
					dropCap
						? `
					.${blockId} .fb-advanced-paragraph-wrapper .fb-advanced-paragraph::first-letter{
					

												${
													dropCapTabletPaddingWidth && dropCapTabPadding.top
														? `padding: ${dropCapTabletPaddingWidth};`
														: ""
												}

												${
													dropCapTabletMarginWidth && dropCapTabMargin.top
														? `margin: ${dropCapTabletMarginWidth};`
														: ""
												}

												${
													dropCapTabletBorderWidth && dropCapTabletBorder.top
														? `border-width: ${dropCapTabletBorderWidth};`
														: ""
												}

												${
													dropCapTabletBorderRadiusWidth &&
													dropCapTabBorderRadius.top
														? `border-radius: ${dropCapTabletBorderRadiusWidth};`
														: ""
												}

					}
					`
						: ""
				}



            .${blockId}.fb-advanced-paragraph-main-wrapper {
                ${
									advancedParagraphPositionType !== "default"
										? `position: ${advancedParagraphPositionType};`
										: ""
								}
                ${
									advancedParagraphPositionType !== "default" &&
									advancedParagraphPositionType !== "relative" &&
									advancedParagraphHZOrientationType === "left" &&
									advancedParagraphHZLeftOffset.Tablet
										? `left: ${advancedParagraphHZLeftOffset.Tablet}${advancedParagraphHZLeftOffsetUnits.Tablet};`
										: ""
								}
                ${
									advancedParagraphPositionType !== "default" &&
									advancedParagraphPositionType !== "relative" &&
									advancedParagraphHZOrientationType === "right" &&
									advancedParagraphHZRightOffset.Tablet
										? `right: ${advancedParagraphHZRightOffset.Tablet}${advancedParagraphHZRightOffsetUnits.Tablet};`
										: ""
								}
                ${
									advancedParagraphPositionType !== "default" &&
									advancedParagraphPositionType !== "relative" &&
									advancedParagraphVROrientationType === "top" &&
									advancedParagraphVRTopOffset.Tablet
										? `top: ${advancedParagraphVRTopOffset.Tablet}${advancedParagraphVRTopOffsetUnits.Tablet};`
										: ""
								}
                ${
									advancedParagraphPositionType !== "default" &&
									advancedParagraphPositionType !== "relative" &&
									advancedParagraphVROrientationType === "bottom" &&
									advancedParagraphVRBottomOffset.Tablet
										? `bottom: ${advancedParagraphVRBottomOffset.Tablet}${advancedParagraphVRBottomOffsetUnits.Tablet};`
										: ""
								}
                ${
									paragraphGlobalZIndex.Tablet
										? `z-index: ${paragraphGlobalZIndex.Tablet};`
										: ""
								}
            }

            .${blockId} .fb-advanced-wrapper {
                ${
									globalTabletPadding && paragraphGlobalPaddingTablet?.top
										? `padding: ${globalTabletPadding};`
										: ""
								}
                ${
									globalTabletMargin && paragraphGlobalMarginTablet?.top
										? `margin: ${globalTabletMargin};`
										: ""
								}
                ${
									globalTabletBorderWidth && paragraphGlobalBorderTablet?.top
										? `border-width: ${globalTabletBorderWidth};`
										: ""
								}
                ${
									globalTabletBorderRadiusWidth &&
									paragraphGlobalBorderRadiusTablet?.top
										? `border-radius: ${globalTabletBorderRadiusWidth};`
										: ""
								}
                ${
									paragraphAlignment.Tablet
										? `text-align: ${paragraphAlignment.Tablet};`
										: ""
								}
            }

						
            .${blockId} .fb-advanced-wrapper .fb-advanced-paragraph {

								${
									paragraphColumnCount.Tablet
										? `column-count: ${paragraphColumnCount.Tablet};`
										: ""
								}
								${
									paragraphColumnGap.Tablet
										? `column-gap: ${paragraphColumnGap.Tablet}${paragraphColumnGapUnits.Tablet};`
										: ""
								}


                ${
									paragraphGlobalTypoSwitcher.fontSize === false &&
									paragraphFontSize.Tablet &&
									paragraphFontSizeUnits.Tablet
										? `font-size: ${paragraphFontSize.Tablet}${paragraphFontSizeUnits.Tablet};`
										: ""
								}
                ${
									paragraphGlobalTypoSwitcher.letterSpacing === false &&
									paragraphLetterSpacing.Tablet &&
									paragraphLetterSpacingUnits.Tablet
										? `letter-spacing: ${paragraphLetterSpacing.Tablet}${paragraphLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									paragraphGlobalTypoSwitcher.lineHeight === false &&
									paragraphLineHeight.Tablet &&
									paragraphLineHeightUnits.Tablet
										? `line-height: ${paragraphLineHeight.Tablet}${paragraphLineHeightUnits.Tablet};`
										: ""
								}
                ${
									paragraphTextStroke
										? `
                    ${
											paragraphTextStroke.Tablet
												? `-webkit-text-stroke: ${paragraphTextStroke.Tablet}px ${paragraphTextStrokeColor};`
												: ""
										}
                    ${
											paragraphTextStroke.Tablet
												? `text-stroke: ${paragraphTextStroke.Tablet}px ${paragraphTextStrokeColor};`
												: ""
										}
                `
										: ""
								}
            }

            .${blockId} .fb-advanced-wrapper .fb-advanced-paragraph:hover {
                ${
									paragraphTextStrokeHoverColor
										? `
                    ${
											paragraphTextStroke.Tablet
												? `-webkit-text-stroke: ${paragraphTextStroke.Tablet}px ${paragraphTextStrokeHoverColor};`
												: ""
										}
                    ${
											paragraphTextStroke.Tablet
												? `text-stroke: ${paragraphTextStroke.Tablet}px ${paragraphTextStrokeHoverColor};`
												: ""
										}
                `
										: ""
								}
            }

							.${blockId} .fb-advanced-paragraph-wrapper .fb-advanced-paragraph a{

								${
									linkGlobalTypoSwitcher.fontSize === false &&
									linkFontSize.Tablet &&
									linkFontSizeUnits.Tablet
										? `font-size: ${linkFontSize.Tablet}${linkFontSizeUnits.Tablet};`
										: ""
								}

								${
									linkGlobalTypoSwitcher.letterSpacing === false &&
									linkLetterSpacing.Tablet &&
									linkLetterSpacingUnits.Tablet
										? `letter-spacing: ${linkLetterSpacing.Tablet}${linkLetterSpacingUnits.Tablet};`
										: ""
								}

								${
									linkGlobalTypoSwitcher.lineHeight === false &&
									linkLineHeight.Tablet &&
									linkLineHeightUnits.Tablet
										? `line-height: ${linkLineHeight.Tablet}${linkLineHeightUnits.Tablet};`
										: ""
								}
							
							}


											${
												hasLinkInParagraph
													? `
					
							.${blockId} .fb-advanced-paragraph-wrapper .fb-advanced-paragraph a{

								${
									linkTabletPaddingWidth && linkTabPadding.top
										? `padding: ${linkTabletPaddingWidth};`
										: ""
								}

								${
									linkTabletBorderWidth && linkTabletBorder.top
										? `border-width: ${linkTabletBorderWidth};`
										: ""
								}

													${
														linkTabletBorderRadiusWidth &&
														linkTabBorderRadius?.top
															? `border-radius: ${linkTabletBorderRadiusWidth};`
															: ""
													}

							}

					`
													: ""
											}


        }

        @media only screen and (max-width: 767px) {


										${
											hasLinkInParagraph
												? `
								.${blockId} .fb-advanced-paragraph-wrapper .fb-advanced-paragraph a{
									${
										linkMobilePaddingWidth && linkMobilePadding.top
											? `padding: ${linkMobilePaddingWidth};`
											: ""
									}

									${
										linkMobileBorderWidth && linkMobileBorder.top
											? `border-width: ${linkMobileBorderWidth};`
											: ""
									}

									${
										linkMobileBorderRadiusWidth && linkMobileBorderRadius.top
											? `border-radius: ${linkMobileBorderRadiusWidth};`
											: ""
									}

								}
					`
												: ""
										}


				${
					dropCap
						? `
					
						.${blockId} .fb-advanced-paragraph-wrapper .fb-advanced-paragraph::first-letter{
							${
								dropCapMobilePaddingWidth && dropCapMobilePadding.top
									? `padding: ${dropCapMobilePaddingWidth};`
									: ""
							}

							${
								dropCapMobileMarginWidth && dropCapMobileMargin.top
									? `margin: ${dropCapMobileMarginWidth};`
									: ""
							}

							${
								dropCapMobileBorderWidth && dropCapMobileBorder.top
									? `border-width: ${dropCapMobileBorderWidth};`
									: ""
							}

							${
								dropCapMobileBorderRadiusWidth && dropCapMobileBorderRadius.top
									? `border-radius: ${dropCapMobileBorderRadiusWidth};`
									: ""
							}
						
						}
					
				`
						: ""
				}



            .${blockId} .fb-advanced-wrapper .fb-advanced-paragraph {

							${
								paragraphColumnCount.Mobile
									? `column-count: ${paragraphColumnCount.Mobile};`
									: ""
							}
							${
								paragraphColumnGap.Mobile
									? `column-gap: ${paragraphColumnGap.Mobile}${paragraphColumnGapUnits.Mobile};`
									: ""
							}


                ${
									paragraphGlobalTypoSwitcher.fontSize === false &&
									paragraphFontSize.Mobile &&
									paragraphFontSizeUnits.Mobile
										? `font-size: ${paragraphFontSize.Mobile}${paragraphFontSizeUnits.Mobile};`
										: ""
								}
                ${
									paragraphGlobalTypoSwitcher.letterSpacing === false &&
									paragraphLetterSpacing.Mobile &&
									paragraphLetterSpacingUnits.Mobile
										? `letter-spacing: ${paragraphLetterSpacing.Mobile}${paragraphLetterSpacingUnits.Mobile};`
										: ""
								}
                ${
									paragraphGlobalTypoSwitcher.lineHeight === false &&
									paragraphLineHeight.Mobile &&
									paragraphLineHeightUnits.Mobile
										? `line-height: ${paragraphLineHeight.Mobile}${paragraphLineHeightUnits.Mobile};`
										: ""
								}

                ${
									paragraphTextStroke
										? `
                    ${
											paragraphTextStroke.Mobile
												? `-webkit-text-stroke: ${paragraphTextStroke.Mobile}px ${paragraphTextStrokeColor};`
												: ""
										}
                    ${
											paragraphTextStroke.Mobile
												? `text-stroke: ${paragraphTextStroke.Mobile}px ${paragraphTextStrokeColor};`
												: ""
										}
                `
										: ""
								}
            }

            .${blockId} .fb-advanced-wrapper .fb-advanced-paragraph:hover {
                ${
									paragraphTextStrokeHoverColor
										? `
                    ${
											paragraphTextStroke.Mobile
												? `-webkit-text-stroke: ${paragraphTextStroke.Mobile}px ${paragraphTextStrokeHoverColor};`
												: ""
										}
                    ${
											paragraphTextStroke.Mobile
												? `text-stroke: ${paragraphTextStroke.Mobile}px ${paragraphTextStrokeHoverColor};`
												: ""
										}
                `
										: ""
								}
            }

          

            .${blockId}.fb-advanced-paragraph-main-wrapper {
                ${
									advancedParagraphPositionType !== "default"
										? `position: ${advancedParagraphPositionType};`
										: ""
								}
                ${
									advancedParagraphPositionType !== "default" &&
									advancedParagraphPositionType !== "relative" &&
									advancedParagraphHZOrientationType === "left" &&
									advancedParagraphHZLeftOffset.Mobile
										? `left: ${advancedParagraphHZLeftOffset.Mobile}${advancedParagraphHZLeftOffsetUnits.Mobile};`
										: ""
								}
                ${
									advancedParagraphPositionType !== "default" &&
									advancedParagraphPositionType !== "relative" &&
									advancedParagraphHZOrientationType === "right" &&
									advancedParagraphHZRightOffset.Mobile
										? `right: ${advancedParagraphHZRightOffset.Mobile}${advancedParagraphHZRightOffsetUnits.Mobile};`
										: ""
								}
                ${
									advancedParagraphPositionType !== "default" &&
									advancedParagraphPositionType !== "relative" &&
									advancedParagraphVROrientationType === "top" &&
									advancedParagraphVRTopOffset.Mobile
										? `top: ${advancedParagraphVRTopOffset.Mobile}${advancedParagraphVRTopOffsetUnits.Mobile};`
										: ""
								}
                ${
									advancedParagraphPositionType !== "default" &&
									advancedParagraphPositionType !== "relative" &&
									advancedParagraphVROrientationType === "bottom" &&
									advancedParagraphVRBottomOffset.Mobile
										? `bottom: ${advancedParagraphVRBottomOffset.Mobile}${advancedParagraphVRBottomOffsetUnits.Mobile};`
										: ""
								}
                ${
									paragraphGlobalZIndex.Mobile
										? `z-index: ${paragraphGlobalZIndex.Mobile};`
										: ""
								}
            }
            .${blockId} .fb-advanced-wrapper {
                ${
									globalMobilePadding && paragraphGlobalPaddingMobile?.top
										? `padding: ${globalMobilePadding};`
										: ""
								}
                ${
									globalMobileMargin && paragraphGlobalMarginMobile?.top
										? `margin: ${globalMobileMargin};`
										: ""
								}
                ${
									globalMobileBorderWidth && paragraphGlobalBorderMobile?.top
										? `border-width: ${globalMobileBorderWidth};`
										: ""
								}
                ${
									globalMobileBorderRadiusWidth &&
									paragraphGlobalBorderRadiusMobile?.top
										? `border-radius: ${globalMobileBorderRadiusWidth};`
										: ""
								}
                ${
									paragraphAlignment.Mobile
										? `text-align: ${paragraphAlignment.Mobile};`
										: ""
								}
            }

						

        }
    `,
		[attributes],
	);

	const customCss = getCustomCss(advancedParagraphCustomCSS, `.${blockId}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [allBlockStyle, customCss]);

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<div className="fb-advanced-wrapper">
				<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
					<BaseControl
						label={__("Element Visibility", "frontis-blocks")}
						className="fb-setting-show-hide-elements"
						help={__(
							"Make the first letter of the paragraph larger.",
							"frontis-blocks",
						)}
						__nextHasNoMarginBottom={true}
					>
						<ToggleControl
							label={__("Drop Cap", "frontis-blocks")}
							checked={dropCap}
							onChange={(value) => {
								if (value) {
									setAttributes({
										dropCap: true,
										paragraphAlignment: {
											Desktop: "left",
											Tablet: "left",
											Mobile: "left",
										},
									});
								} else {
									setAttributes({ dropCap: false });
								}
							}}
							__nextHasNoMarginBottom={true}
						/>
					</BaseControl>

					<div className="fb-control-divider"></div>

					<FB_Range
						min={1}
						max={6}
						label={__("Columns", "frontis-blocks")}
						rangeValue={paragraphColumnCount}
						onChangeHandler={(value) =>
							setAttributes({
								paragraphColumnCount: value === 1 ? undefined : value,
							})
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={"1"}
						isRangeUnit={false}
						__next40pxDefaultSize={true}
					/>

					<p 	className="fb-control-help">
						{__(
							"Split your paragraph into multiple columns for a modern, magazine-style look.",
							"frontis-blocks",
						)}
					</p>

					{parseInt(paragraphColumnCount?.[deviceType]) > 1 && (
						<>
							<FB_Range
								min={0}
								max={200}
								label={__("Gap", "frontis-blocks")}
								rangeValue={paragraphColumnGap}
								onChangeHandler={paragraphColumnGapFn}
								rangeUnitHandler={paragraphColumnGapUnitsFn}
								deviceType={deviceType}
								units={paragraphColumnGapUnits}
								rangeStep={1}
								resetFallbackValue={""}
								units_types_arr={[
									{ label: "px", value: "px" },
									{ label: "%", value: "%" },
									{ label: "em", value: "em" },
								]}
							/>

							<p
								className="fb-control-help"
								style={{
									marginBottom: "2em",
									marginTop: "-14px",
								}}
							>
								{__("Adjust the spacing between text columns")}
							</p>
						</>
					)}

					<div className="fb-control-divider"></div>

					<FB_ResponsiveAlignmentControl
						label={__("Alignment", "frontis-blocks")}
						globalAlignment={paragraphAlignment}
						setGlobalAlignment={(value) =>
							setAttributes({ paragraphAlignment: value })
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
						disabled={dropCap}
					/>

					{dropCap && (
						<p
							className="fb-control-help"
							style={{
								marginTop: "-14px",
								marginBottom: "20px",
							}}
						>
							{__(
								"Alignment is disabled while Drop Cap is active.",
								"frontis-blocks",
							)}
						</p>
					)}

					<div className="advanced-paragraph-block">
						<div className="paragraph-input-wrapper">
							<TextareaControl
								label={__("Text", "frontis-blocks")}
								value={paragraphText}
								onChange={(value) => {
									setAttributes({ paragraphText: value });
								}}
								className="fb-advanced-text"
								__nextHasNoMarginBottom={true}
							/>
						</div>
					</div>
				</PanelBody>
			</div>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			{/* Paragraphy Styling  */}
			<PanelBody
				title={__("Text", "frontis-blocks")}
				initialOpen={true}
			>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={paragraphGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({
							paragraphGlobalTypographyData: value,
						})
					}
					globalTypoType={paragraphGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							paragraphGlobalTypoType: value,
							paragraphGlobalTypoSwitcher:
								value === "default"
									? {
											...paragraphGlobalTypoSwitcher,
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
											...paragraphGlobalTypoSwitcher,
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
					globalTypoOption={paragraphGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ paragraphGlobalTypoOption: value })
					}
					fontFamily={paragraphFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							paragraphFontFamily: value,
							paragraphGlobalTypoSwitcher: {
								...paragraphGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={paragraphFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							paragraphFontSize: value,
							paragraphGlobalTypoSwitcher: {
								...paragraphGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={paragraphFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ paragraphFontSizeUnits: value })
					}
					fontWeight={paragraphFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							paragraphFontWeight: value,
							paragraphGlobalTypoSwitcher: {
								...paragraphGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={paragraphFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							paragraphFontStyle: value,
							paragraphGlobalTypoSwitcher: {
								...paragraphGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={paragraphTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							paragraphTextTransform: value,
							paragraphGlobalTypoSwitcher: {
								...paragraphGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={paragraphTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							paragraphTextDecoration: value,
							paragraphGlobalTypoSwitcher: {
								...paragraphGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={paragraphLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							paragraphLetterSpacing: value,
							paragraphGlobalTypoSwitcher: {
								...paragraphGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={paragraphLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ paragraphLetterSpacingUnits: value })
					}
					lineHeight={paragraphLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							paragraphLineHeight: value,
							paragraphGlobalTypoSwitcher: {
								...paragraphGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={paragraphLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ paragraphLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_BoxShadowControl
					label={__("Text Shadow", "frontis-blocks")}
					onBoxShadowChange={(value) =>
						setAttributes({ paragraphTextShadowValues: value })
					}
					initialShadowValue={paragraphTextShadowValues}
					onBoxShadowStyleChange={(value) =>
						setAttributes({ paragraphTextShadowCssValue: value })
					}
					isBoxShadow={false}
				/>

				<FB_Range
					min={0}
					max={10}
					label={__("Text Stroke", "frontis-blocks")}
					rangeValue={paragraphTextStroke}
					onChangeHandler={(value) =>
						setAttributes({
							paragraphTextStroke: value === 0 ? undefined : value,
						})
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
					isRangeUnit={false}
					__next40pxDefaultSize={true}
				/>

				<FB_SwitcherControl
					label={__("Text Stroke Color", "frontis-blocks")}
					globalSwitcher={paragraphTextStrokeColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({
							paragraphTextStrokeColorSwitcher: value,
						})
					}
				/>

				{paragraphTextStrokeColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={paragraphTextStrokeColor}
						setGlobalColor={(value) =>
							setAttributes({ paragraphTextStrokeColor: value })
						}
					/>
				)}

				{paragraphTextStrokeColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={paragraphTextStrokeHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								paragraphTextStrokeHoverColor: value,
							})
						}
					/>
				)}

				<FB_SwitcherControl
					label={__("Text Color", "frontis-blocks")}
					globalSwitcher={paragraphColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ paragraphColorSwitcher: value })
					}
				/>

				{paragraphColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={paragraphColor}
						setGlobalColor={(value) => setAttributes({ paragraphColor: value })}
					/>
				)}

				{paragraphColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={paragraphHoverColor}
						setGlobalColor={(value) =>
							setAttributes({ paragraphHoverColor: value })
						}
					/>
				)}
			</PanelBody>

			{hasLinkInParagraph && (
				<PanelBody
					title={__("Link", "frontis-blocks")}
					initialOpen={false}
				>
					{/* start link typography  */}
					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={linkGlobalTypoSwitcher}
						storeGlobalTypographyData={(value) =>
							setAttributes({
								linkGlobalTypographyData: value,
							})
						}
						globalTypoType={linkGlobalTypoType}
						onChangeGlobalTypoType={(value) => {
							setAttributes({
								linkGlobalTypoType: value,
								linkGlobalTypoSwitcher:
									value === "default"
										? {
												...linkGlobalTypoSwitcher,
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
												...linkGlobalTypoSwitcher,
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
						globalTypoOption={linkGlobalTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({ linkGlobalTypoOption: value })
						}
						fontFamily={linkFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({
								linkFontFamily: value,
								linkGlobalTypoSwitcher: {
									...linkGlobalTypoSwitcher,
									fontFamily: value && false,
								},
							})
						}
						fontSize={linkFontSize}
						onChangeFontSize={(value) =>
							setAttributes({
								linkFontSize: value,
								linkGlobalTypoSwitcher: {
									...linkGlobalTypoSwitcher,
									fontSize: value && false,
								},
							})
						}
						fontSizeUnits={linkFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({ linkFontSizeUnits: value })
						}
						fontWeight={linkFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({
								linkFontWeight: value,
								linkGlobalTypoSwitcher: {
									...linkGlobalTypoSwitcher,
									fontWeight: value && false,
								},
							})
						}
						fontStyle={linkFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({
								linkFontStyle: value,
								linkGlobalTypoSwitcher: {
									...linkGlobalTypoSwitcher,
									fontStyle: value && false,
								},
							})
						}
						textTransform={linkTextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({
								linkTextTransform: value,
								linkGlobalTypoSwitcher: {
									...linkGlobalTypoSwitcher,
									textTransform: value && false,
								},
							})
						}
						textDecoration={linkTextDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({
								linkTextDecoration: value,
								linkGlobalTypoSwitcher: {
									...linkGlobalTypoSwitcher,
									textDecoration: value && false,
								},
							})
						}
						letterSpacing={linkLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({
								linkLetterSpacing: value,
								linkGlobalTypoSwitcher: {
									...linkGlobalTypoSwitcher,
									letterSpacing: value && false,
								},
							})
						}
						letterSpacingUnits={linkLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({ linkLetterSpacingUnits: value })
						}
						lineHeight={linkLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({
								linkLineHeight: value,
								linkGlobalTypoSwitcher: {
									...linkGlobalTypoSwitcher,
									lineHeight: value && false,
								},
							})
						}
						lineHeightUnits={linkLineHeightUnits}
						onChangeLineHeightUnit={(value) =>
							setAttributes({ linkLineHeightUnits: value })
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
					{/* end link typography  */}

					{/* link color  */}
					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={linkColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ linkColorSwitcher: value })
						}
					/>

					{linkColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={linkColor}
							setGlobalColor={(value) => setAttributes({ linkColor: value })}
						/>
					)}

					{linkColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={linkHoverColor}
							setGlobalColor={(value) =>
								setAttributes({ linkHoverColor: value })
							}
						/>
					)}

					{/* link BG  */}
					<FB_SwitcherControl
						label={__("Background Color", "frontis-blocks")}
						globalSwitcher={linkBgColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ linkBgColorSwitcher: value })
						}
					/>

					{linkBgColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={linkBgColor}
							setGlobalColor={(value) => setAttributes({ linkBgColor: value })}
						/>
					)}

					{linkBgColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={linkBgColorHover}
							setGlobalColor={(value) =>
								setAttributes({ linkBgColorHover: value })
							}
						/>
					)}

					<div className="fb-control-divider"></div>

					{/* link padding */}
					<FB_Spacing
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={linkPaddingUnitsHandler}
						spacingUnits={linkPaddingUnits}
						spacingDesktop={linkDesktopPadding}
						spacingTablet={linkTabPadding}
						spacingMobile={linkMobilePadding}
						handleSpacingUnitHandler={linkPaddingUnitsChange}
						spacingCombineBtn={linkPaddingLink}
						spacingCombineBtnHandler={linkPaddingLinkBtn}
						setAttributes={setAttributes}
					/>

					<div className="fb-control-divider"></div>

					{/* BORDER  */}
					<SelectControl
						label={__("Border Style", "frontis-blocks")}
						value={linkBorder}
						options={BORDER_STYLES}
						onChange={(value) => setAttributes({ linkBorder: value })}
					/>

					<FB_SwitcherControl
						label={__("Border Color", "frontis-blocks")}
						globalSwitcher={linkBorderColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ linkBorderColorSwitcher: value })
						}
					/>

					{linkBorderColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={linkBorderColor}
							setGlobalColor={(value) =>
								setAttributes({ linkBorderColor: value })
							}
						/>
					)}

					{linkBorderColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={linkBorderHoverColor}
							setGlobalColor={(value) =>
								setAttributes({ linkBorderHoverColor: value })
							}
						/>
					)}

					<FB_Spacing
						label={__("Border", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={linkBorderUnitsHandler}
						spacingUnits={linkBorderUnits}
						spacingDesktop={linkDesktopBorder}
						spacingTablet={linkTabletBorder}
						spacingMobile={linkMobileBorder}
						handleSpacingUnitHandler={linkBorderUnitsChange}
						spacingCombineBtn={linkBorderLink}
						spacingCombineBtnHandler={linkBorderLinkBtn}
						setAttributes={setAttributes}
					/>

					{/* BORDER RADIUS  */}

					<FB_Spacing
						label={__("Border Radius", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={linkBorderRadiusUnitsHandler}
						spacingUnits={linkBorderRadiusUnits}
						spacingDesktop={linkDesktopBorderRadius}
						spacingTablet={linkTabBorderRadius}
						spacingMobile={linkMobileBorderRadius}
						handleSpacingUnitHandler={linkBorderRadiusUnitsChange}
						spacingCombineBtn={linkBorderRadiusLink}
						spacingCombineBtnHandler={linkBorderRadiusLinkBtn}
						setAttributes={setAttributes}
					/>

					{/* BOX SHADOW  */}
					<FB_BoxShadowControl
						label={__("Box Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ linkBoxShadowValues: value })
						}
						initialShadowValue={linkBoxShadowValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({
								linkBoxShadowCssValue: value,
							})
						}
					/>
				</PanelBody>
			)}

			{/* Drop Cap Settings  */}
			{dropCap && (
				<PanelBody
					title={__("Drop Cap Settings", "frontis-blocks")}
					initialOpen={false}
				>
					{/* dropcap typography  */}
					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={dropCapGlobalTypoSwitcher}
						storeGlobalTypographyData={(value) =>
							setAttributes({
								dropCapGlobalTypographyData: value,
							})
						}
						globalTypoType={dropCapGlobalTypoType}
						onChangeGlobalTypoType={(value) => {
							setAttributes({
								dropCapGlobalTypoType: value,
								dropCapGlobalTypoSwitcher:
									value === "default"
										? {
												...dropCapGlobalTypoSwitcher,
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
												...dropCapGlobalTypoSwitcher,
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
						globalTypoOption={dropCapGlobalTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({ dropCapGlobalTypoOption: value })
						}
						fontFamily={dropCapFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({
								dropCapFontFamily: value,
								dropCapGlobalTypoSwitcher: {
									...dropCapGlobalTypoSwitcher,
									fontFamily: value && false,
								},
							})
						}
						fontSize={dropCapFontSize}
						onChangeFontSize={(value) =>
							setAttributes({
								dropCapFontSize: value,
								dropCapGlobalTypoSwitcher: {
									...dropCapGlobalTypoSwitcher,
									fontSize: value && false,
								},
							})
						}
						fontSizeUnits={dropCapFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({ dropCapFontSizeUnits: value })
						}
						fontWeight={dropCapFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({
								dropCapFontWeight: value,
								dropCapGlobalTypoSwitcher: {
									...dropCapGlobalTypoSwitcher,
									fontWeight: value && false,
								},
							})
						}
						fontStyle={dropCapFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({
								dropCapFontStyle: value,
								dropCapGlobalTypoSwitcher: {
									...dropCapGlobalTypoSwitcher,
									fontStyle: value && false,
								},
							})
						}
						textTransform={dropCapTextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({
								dropCapTextTransform: value,
								dropCapGlobalTypoSwitcher: {
									...dropCapGlobalTypoSwitcher,
									textTransform: value && false,
								},
							})
						}
						textDecoration={dropCapTextDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({
								dropCapTextDecoration: value,
								dropCapGlobalTypoSwitcher: {
									...dropCapGlobalTypoSwitcher,
									textDecoration: value && false,
								},
							})
						}
						letterSpacing={dropCapLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({
								dropCapLetterSpacing: value,
								dropCapGlobalTypoSwitcher: {
									...dropCapGlobalTypoSwitcher,
									letterSpacing: value && false,
								},
							})
						}
						letterSpacingUnits={dropCapLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({ dropCapLetterSpacingUnits: value })
						}
						lineHeight={dropCapLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({
								dropCapLineHeight: value,
								dropCapGlobalTypoSwitcher: {
									...dropCapGlobalTypoSwitcher,
									lineHeight: value && false,
								},
							})
						}
						lineHeightUnits={dropCapLineHeightUnits}
						onChangeLineHeightUnit={(value) =>
							setAttributes({ dropCapLineHeightUnits: value })
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>

					{/* dropCap text shadow  */}
					<FB_BoxShadowControl
						label={__("Text Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ dropCapTextShadowValues: value })
						}
						initialShadowValue={dropCapTextShadowValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({ dropCapTextShadowCssValue: value })
						}
						isBoxShadow={false}
					/>

					{/* dropcap color  */}
					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={dropCapColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ dropCapColorSwitcher: value })
						}
					/>

					{dropCapColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={dropCapColor}
							setGlobalColor={(value) => setAttributes({ dropCapColor: value })}
						/>
					)}

					{dropCapColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={dropCapHoverColor}
							setGlobalColor={(value) =>
								setAttributes({ dropCapHoverColor: value })
							}
						/>
					)}

					{/* drop cap bg color  */}
					<FB_SwitcherControl
						label={__("Background Color", "frontis-blocks")}
						globalSwitcher={dropCapBgColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ dropCapBgColorSwitcher: value })
						}
					/>

					{dropCapBgColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={dropCapBgColor}
							setGlobalColor={(value) =>
								setAttributes({ dropCapBgColor: value })
							}
						/>
					)}

					{dropCapBgColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={dropCapBgColorHover}
							setGlobalColor={(value) =>
								setAttributes({ dropCapBgColorHover: value })
							}
						/>
					)}

					<FB_Spacing
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={dropCapPaddingUnitsHandler}
						spacingUnits={dropCapPaddingUnits}
						spacingDesktop={dropCapDesktopPadding}
						spacingTablet={dropCapTabPadding}
						spacingMobile={dropCapMobilePadding}
						handleSpacingUnitHandler={dropCapPaddingUnitsChange}
						spacingCombineBtn={dropCapPaddingLink}
						spacingCombineBtnHandler={dropCapPaddingLinkBtn}
						setAttributes={setAttributes}
					/>
					<FB_Spacing
						label={__("Margin", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={dropCapMarginUnitsHandler}
						spacingUnits={dropCapMarginUnits}
						spacingDesktop={dropCapDesktopMargin}
						spacingTablet={dropCapTabMargin}
						spacingMobile={dropCapMobileMargin}
						handleSpacingUnitHandler={dropCapMarginUnitsChange}
						spacingCombineBtn={dropCapMarginLink}
						spacingCombineBtnHandler={dropCapMarginLinkBtn}
						setAttributes={setAttributes}
					/>

					{/* border  */}

					<SelectControl
						label={__("Border Style", "frontis-blocks")}
						value={dropCapBorder}
						options={BORDER_STYLES}
						onChange={(value) => setAttributes({ dropCapBorder: value })}
					/>

					<FB_SwitcherControl
						label={__("Border Color", "frontis-blocks")}
						globalSwitcher={dropCapBorderColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ dropCapBorderColorSwitcher: value })
						}
					/>

					{dropCapBorderColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={dropCapBorderColor}
							setGlobalColor={(value) =>
								setAttributes({ dropCapBorderColor: value })
							}
						/>
					)}

					{dropCapBorderColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={dropCapBorderHoverColor}
							setGlobalColor={(value) =>
								setAttributes({ dropCapBorderHoverColor: value })
							}
						/>
					)}

					<FB_Spacing
						label={__("Border", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={dropCapBorderUnitsHandler}
						spacingUnits={dropCapBorderUnits}
						spacingDesktop={dropCapDesktopBorder}
						spacingTablet={dropCapTabletBorder}
						spacingMobile={dropCapMobileBorder}
						handleSpacingUnitHandler={dropCapBorderUnitsChange}
						spacingCombineBtn={dropCapBorderLink}
						spacingCombineBtnHandler={dropCapBorderLinkBtn}
						setAttributes={setAttributes}
					/>

					{/* end border  */}

					{/* border radius  */}

					<FB_Spacing
						label={__("Border Radius", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={dropCapBorderRadiusUnitsHandler}
						spacingUnits={dropCapBorderRadiusUnits}
						spacingDesktop={dropCapDesktopBorderRadius}
						spacingTablet={dropCapTabBorderRadius}
						spacingMobile={dropCapMobileBorderRadius}
						handleSpacingUnitHandler={dropCapBorderRadiusUnitsChange}
						spacingCombineBtn={dropCapBorderRadiusLink}
						spacingCombineBtnHandler={dropCapBorderRadiusLinkBtn}
						setAttributes={setAttributes}
					/>

					{/* end border radius  */}
				</PanelBody>
			)}
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
							rangeValue={paragraphGlobalZIndex}
							onChangeHandler={(value) =>
								setAttributes({
									paragraphGlobalZIndex: value === 0 ? undefined : value,
								})
							}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}
							__next40pxDefaultSize={true}
						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={advancedParagraphOverflow}
							options={OVERFLOW_OP}
							onChange={(value) =>
								setAttributes({
									advancedParagraphOverflow: value,
								})
							}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={advancedParagraphPositionType}
							setPositionType={(value) =>
								setAttributes({
									advancedParagraphPositionType: value,
								})
							}
							HZOrientationType={advancedParagraphHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({
									advancedParagraphHZOrientationType: value,
								})
							}
							VROrientationType={advancedParagraphVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({
									advancedParagraphVROrientationType: value,
								})
							}
							HZLeftOffset={advancedParagraphHZLeftOffset}
							setHZLeftOffset={(value) =>
								setAttributes({
									advancedParagraphHZLeftOffset: value,
								})
							}
							HZLeftOffsetUnits={advancedParagraphHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) =>
								setAttributes({
									advancedParagraphHZLeftOffsetUnits: value,
								})
							}
							HZRightOffset={advancedParagraphHZRightOffset}
							setHZRightOffset={(value) =>
								setAttributes({
									advancedParagraphHZRightOffset: value,
								})
							}
							HZRightOffsetUnits={advancedParagraphHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) =>
								setAttributes({
									advancedParagraphHZRightOffsetUnits: value,
								})
							}
							VRTopOffset={advancedParagraphVRTopOffset}
							setVRTopOffset={(value) =>
								setAttributes({
									advancedParagraphVRTopOffset: value,
								})
							}
							VRTopOffsetUnits={advancedParagraphVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) =>
								setAttributes({
									advancedParagraphVRTopOffsetUnits: value,
								})
							}
							VRBottomOffset={advancedParagraphVRBottomOffset}
							setVRBottomOffset={(value) =>
								setAttributes({
									advancedParagraphVRBottomOffset: value,
								})
							}
							VRBottomOffsetUnits={advancedParagraphVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) =>
								setAttributes({
									advancedParagraphVRBottomOffsetUnits: value,
								})
							}
							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={paragraphGlobalWraperID}
							onChangeValue={(value) =>
								setAttributes({ paragraphGlobalWraperID: value })
							}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={paragraphGlobalWraperClass}
							onChangeValue={(value) =>
								setAttributes({
									paragraphGlobalWraperClass: value,
								})
							}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
					</PanelBody>

					<PanelBody
						title={__("Padding and Margin", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
							spacingUnits={paragraphGlobalPaddingUnits}
							spacingDesktop={paragraphGlobalPaddingDesktop}
							spacingTablet={paragraphGlobalPaddingTablet}
							spacingMobile={paragraphGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={paragraphGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalMarginUnitsHandler}
							spacingUnits={paragraphGlobalMarginUnits}
							spacingDesktop={paragraphGlobalMarginDesktop}
							spacingTablet={paragraphGlobalMarginTablet}
							spacingMobile={paragraphGlobalMarginMobile}
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={paragraphGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody
						title={__("Background Color", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_SwitcherControl
							label={__("Background Color", "frontis-blocks")}
							globalSwitcher={paragraphGlobalBgColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({
									paragraphGlobalBgColorSwitcher: value,
								})
							}
						/>

						{paragraphGlobalBgColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={paragraphGlobalBgColor}
								setGlobalColor={(value) =>
									setAttributes({ paragraphGlobalBgColor: value })
								}
							/>
						)}

						{paragraphGlobalBgColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={paragraphGlobalBgHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										paragraphGlobalBgHoverColor: value,
									})
								}
							/>
						)}
					</PanelBody>
					<PanelBody
						title={__("Border and Shadow", "frontis-blocks")}
						initialOpen={false}
					>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={paragraphGlobalBorder}
							options={BORDER_STYLES}
							onChange={(value) =>
								setAttributes({ paragraphGlobalBorder: value })
							}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={paragraphGlobalBorderColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({
									paragraphGlobalBorderColorSwitcher: value,
								})
							}
						/>

						{paragraphGlobalBorderColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={paragraphGlobalBorderColor}
								setGlobalColor={(value) =>
									setAttributes({
										paragraphGlobalBorderColor: value,
									})
								}
							/>
						)}

						{paragraphGlobalBorderColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={paragraphGlobalBorderHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										paragraphGlobalBorderHoverColor: value,
									})
								}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderUnitsHandler}
							spacingUnits={paragraphGlobalBorderUnits}
							spacingDesktop={paragraphGlobalBorderDesktop}
							spacingTablet={paragraphGlobalBorderTablet}
							spacingMobile={paragraphGlobalBorderMobile}
							handleSpacingUnitHandler={handleGlobalBorderUnitChange}
							spacingCombineBtn={paragraphGlobalBorderLink}
							spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
							spacingUnits={paragraphGlobalBorderRadiusUnits}
							spacingDesktop={paragraphGlobalBorderRadiusDesktop}
							spacingTablet={paragraphGlobalBorderRadiusTablet}
							spacingMobile={paragraphGlobalBorderRadiusMobile}
							handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
							spacingCombineBtn={paragraphGlobalBorderRadiusLink}
							spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={paragraphGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({
									paragraphGlobalBoxShadowSwitcher: value,
								})
							}
						/>

						{paragraphGlobalBoxShadowSwitcher === "normal" && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({
										paragraphGlobalBoxShadowValues: value,
									})
								}
								initialShadowValue={paragraphGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({
										paragraphGlobalBoxShadowCssValue: value,
									})
								}
							/>
						)}

						{paragraphGlobalBoxShadowSwitcher === "hover" && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({
										paragraphGlobalBoxShadowHoverValues: value,
									})
								}
								initialShadowValue={paragraphGlobalBoxShadowHoverValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({
										paragraphGlobalBoxShadowHoverCssValue: value,
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
							desktopValue={advancedParagraphDesktopSwitcher}
							setDesktopValue={(value) =>
								setAttributes({
									advancedParagraphDesktopSwitcher: value,
								})
							}
							tabletValue={advancedParagraphTabletSwitcher}
							setTabletValue={(value) =>
								setAttributes({
									advancedParagraphTabletSwitcher: value,
								})
							}
							mobileValue={advancedParagraphMobileSwitcher}
							setMobileValue={(value) =>
								setAttributes({
									advancedParagraphMobileSwitcher: value,
								})
							}
						/>
					</PanelBody>
					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={advancedParagraphCustomCSS}
							onChangeValue={(value) =>
								setAttributes({
									advancedParagraphCustomCSS: value,
								})
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
}
export default memo(Inspector);