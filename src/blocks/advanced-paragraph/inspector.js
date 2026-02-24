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
import FB_InputControl from "@Components/input-control";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import getCustomCss from "@Utils/getCustomCss";
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from "@Components/position-control";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_ResponsiveAlignmentControl from "@Components/responsive-alignment-control";
import FB_InspectorControls from "@Components/InspectorControls";

import "./editor.scss";
import hasLinkInRichText from "@Utils/hasLinkInRichText";



const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
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
	/** End Border Radius */

	// detect <a> tags inside the RichText
	const hasLinkInParagraph = useMemo(() => hasLinkInRichText(paragraphText), [paragraphText]);


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

					<p className="fb-control-help">
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