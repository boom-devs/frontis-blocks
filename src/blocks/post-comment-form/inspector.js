import { __ } from "@wordpress/i18n";
import { useMemo, useEffect } from "@wordpress/element";
import {
	PanelBody,
	BaseControl,
	ToggleControl,
	SelectControl,
} from "@wordpress/components";
import {
	IMAGE_SIZES,
	OVERFLOW_OP,
	BORDER_STYLES,
	IMAGE_AUTO_FIT,
} from "@Constants/fbConstants";
import getCustomCss from "@Utils/getCustomCss";
import { useDeviceType } from "@Config/displayType";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_ResponsiveAlignmentControl from "@Components/responsive-alignment-control";
import FB_InputControl from "@Components/input-control";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_Range from "@Components/range";
import FB_PositionControl from "@Components/position-control";
import FB_Spacing from "@Components/spacing";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_SwitcherControl from "@Components/switcher-control";
import FB_ColorControl from "@Components/color-control";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from "@Components/typography-control";

import "./editor.scss";

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		showCommentTitle,
		showCommentsCount,
		showCommentForm,

		// commentFormWidth,
		// commentGap,
		// avatarSize,

		formTitle,
		cancelReplyText,
		loginText,
		logoutText,
		buttonText,
		blockStyle,

		/** ================== Style Attributes =============== */
		/** ================== Comments Title */
		commentCountTitleGlobalTypoSwitcher,
		commentCountTitleGlobalTypographyData,
		commentCountTitleGlobalTypoType,
		commentCountTitleGlobalTypoOption,
		commentCountTitleFontFamily,
		commentCountTitleFontSize,
		commentCountTitleFontSizeUnits,
		commentCountTitleFontWeight,
		commentCountTitleFontStyle,
		commentCountTitleTextTransform,
		commentCountTitleTextDecoration,
		commentCountTitleLetterSpacing,
		commentCountTitleLetterSpacingUnits,
		commentCountTitleLineHeight,
		commentCountTitleLineHeightUnits,

		commentCountTitleColorSwitcher,
		commentCountTitleColor,
		commentCountTitleHoverColor,

		commentCountTitleSpacing,
		commentCountTitleSpacingUnits,
		/** =============== End Comments Title */

		/** ================ Start Comment Item */
		postCommentPaddingUnits,
		postCommentPaddingDesktop,
		postCommentPaddingTablet,
		postCommentPaddingMobile,
		postCommentPaddingLink,

		nestedIndentation,
		nestedIndentationUnits,

		commentListBottomSpacing,
		commentListBottomSpacingUnits,

		/** Avatar */
		avatarSize,
		avatarSizeUnits,

		avatarPaddingUnits,
		avatarPaddingDesktop,
		avatarPaddingTablet,
		avatarPaddingMobile,
		avatarPaddingLink,

		avatarBorder,
		avatarBorderColor,
		avatarBorderUnits,
		avatarBorderDesktop,
		avatarBorderTablet,
		avatarBorderMobile,
		avatarBorderLink,

		avatarBorderRadiusUnits,
		avatarBorderRadiusDesktop,
		avatarBorderRadiusTablet,
		avatarBorderRadiusMobile,
		avatarBorderRadiusLink,

		avatarBoxShadowValues,
		avatarBoxShadowCssValue,

		/** Author */
		authorGlobalTypoSwitcher,
		authorGlobalTypographyData,
		authorGlobalTypoType,
		authorGlobalTypoOption,
		authorFontFamily,
		authorFontSize,
		authorFontSizeUnits,
		authorFontWeight,
		authorFontStyle,
		authorTextTransform,
		authorTextDecoration,
		authorLetterSpacing,
		authorLetterSpacingUnits,
		authorLineHeight,
		authorLineHeightUnits,

		authorColorSwitcher,
		authorColor,
		authorHoverColor,
		
		/** Meta  */
		commentMetaGlobalTypoSwitcher,
		commentMetaGlobalTypographyData,
		commentMetaGlobalTypoType,
		commentMetaGlobalTypoOption,
		commentMetaFontFamily,
		commentMetaFontSize,
		commentMetaFontSizeUnits,
		commentMetaFontWeight,
		commentMetaFontStyle,
		commentMetaTextTransform,
		commentMetaTextDecoration,
		commentMetaLetterSpacing,
		commentMetaLetterSpacingUnits,
		commentMetaLineHeight,
		commentMetaLineHeightUnits,

		commentMetaColorSwitcher,
		commentMetaColor,
		commentMetaHoverColor,

		/** Message     */
		messageGlobalTypoSwitcher,
		messageGlobalTypographyData,
		messageGlobalTypoType,
		messageGlobalTypoOption,
		messageFontFamily,
		messageFontSize,
		messageFontSizeUnits,
		messageFontWeight,
		messageFontStyle,
		messageTextTransform,
		messageTextDecoration,
		messageLetterSpacing,
		messageLetterSpacingUnits,
		messageLineHeight,
		messageLineHeightUnits,

		messageColorSwitcher,
		messageColor,
		messageHoverColor,

		/** ============ End Comment Item */
		/** ============ End Style Attributes ================= */
		
		/** ============ Start Advanced Attributes ================= */
		wrapperId,
		wrapperClass,

		commentFormDesktopSwitcher,
		commentFormTabletSwitcher,
		commentFormMobileSwitcher,

		commentFormGlobalCustomCSS,

		postGlobalZIndex,
		postGlobalOverflow,
		postGlobalPositionType,
		postGlobalHZOrientationType,
		postGlobalVROrientationType,
		postGlobalHZLeftOffset,
		postGlobalHZLeftOffsetUnits,
		postGlobalHZRightOffset,
		postGlobalHZRightOffsetUnits,
		postGlobalVRTopOffset,
		postGlobalVRTopOffsetUnits,
		postGlobalVRBottomOffset,
		postGlobalVRBottomOffsetUnits,

		postGlobalPaddingUnits,
		postGlobalPaddingDesktop,
		postGlobalPaddingTablet,
		postGlobalPaddingMobile,
		postGlobalPaddingLink,

		postGlobalMarginUnits,
		postGlobalMarginDesktop,
		postGlobalMarginTablet,
		postGlobalMarginMobile,
		postGlobalMarginLink,

		postGlobalBgColorSwitcher,
		postGlobalNormalBackgroundType,
		postGlobalNormalClassicColor,
		postGlobalNormalGradientColor,
		postGlobalNormalCustomGradientSwitcher,
		postGlobalNormalCustomGradientInputValue,

		postGlobalHoverBackgroundType,
		postGlobalHoverClassicColor,
		postGlobalHoverGradientColor,
		postGlobalHoverCustomGradientSwitcher,
		postGlobalHoverCustomGradientInputValue,

		postGlobalBorder,
		postGlobalBorderColorSwitcher,
		postGlobalBorderColor,
		postGlobalBorderHoverColor,

		postGlobalBorderUnits,
		postGlobalBorderDesktop,
		postGlobalBorderTablet,
		postGlobalBorderMobile,
		postGlobalBorderLink,

		postGlobalBorderRadiusUnits,
		postGlobalBorderRadiusDesktop,
		postGlobalBorderRadiusTablet,
		postGlobalBorderRadiusMobile,
		postGlobalBorderRadiusLink,

		postGlobalBoxShadowSwitcher,
		postGlobalBoxShadowValues,
		postGlobalBoxShadowCssValue,
		postGlobalBoxShadowHoverValues,
		postGlobalBoxShadowHoverCssValue,
		/** ============ End Advanced Attributes ================= */
	} = attributes;

	const deviceType = useDeviceType();

	useEffect(() => {
		if (clientId && !blockId) {
			setAttributes({
				blockId: "fb-post-comment-form-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);


	/* ===============Helper Function================== */

	// nested comment item 
	function scalePaddingWithoutLeft(paddingString, scale = 1) {
  const parts = paddingString.split(" "); // e.g. ["20px", "20px", "20px", "20px"]

  // Ensure 4 values (top, right, bottom, left)
  const [top = "0", right = "0", bottom = "0", left = "0"] = parts;

  // Scale top, right, bottom — but skip left
  const scaleValue = v => {
    const num = parseFloat(v);
    const unit = v.replace(num, "");
    return `${num * scale}${unit}`;
  };

  return `${scaleValue(top)} ${scaleValue(right)} ${scaleValue(bottom)} 0`;
}



	/* ======================================= */
	/** Start Post Comment Item Padding */
	const handlePostCommentPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (postCommentPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postCommentPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCommentPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCommentPaddingMobile: {
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
						postCommentPaddingDesktop: {
							...postCommentPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCommentPaddingTablet: {
							...postCommentPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCommentPaddingMobile: {
							...postCommentPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlePostCommentPaddingCombineBtn = () => {
		setAttributes({ postCommentPaddingLink: !postCommentPaddingLink });
	};

	const handlePostCommentPaddingUnitsHandler = (unit) => {
		setAttributes({
			postCommentPaddingUnits: {
				...postCommentPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	const postCommentPaddingDesktopWidth = `${postCommentPaddingDesktop.top}${postCommentPaddingUnits.Desktop} ${postCommentPaddingDesktop.right}${postCommentPaddingUnits.Desktop} ${postCommentPaddingDesktop.bottom}${postCommentPaddingUnits.Desktop} ${postCommentPaddingDesktop.left}${postCommentPaddingUnits.Desktop}`;
	const postCommentPaddingTabletWidth = `${postCommentPaddingTablet.top}${postCommentPaddingUnits.Tablet} ${postCommentPaddingTablet.right}${postCommentPaddingUnits.Tablet} ${postCommentPaddingTablet.bottom}${postCommentPaddingUnits.Tablet} ${postCommentPaddingTablet.left}${postCommentPaddingUnits.Tablet}`;
	const postCommentPaddingMobileWidth = `${postCommentPaddingMobile.top}${postCommentPaddingUnits.Mobile} ${postCommentPaddingMobile.right}${postCommentPaddingUnits.Mobile} ${postCommentPaddingMobile.bottom}${postCommentPaddingUnits.Mobile} ${postCommentPaddingMobile.left}${postCommentPaddingUnits.Mobile}`;

	// Nested Item Dynamic Padding value base of parent Commnet Item 
	const childCommentPaddingDesktopWidth = scalePaddingWithoutLeft(postCommentPaddingDesktopWidth, 0.75);
	const childCommentPaddingTabletWidth = scalePaddingWithoutLeft(postCommentPaddingTabletWidth, 0.75);
	const childCommentPaddingMobileWidth = scalePaddingWithoutLeft(postCommentPaddingMobileWidth, 0.75);
	/** End Post Comment Item Padding */

	/** Post Count */

	/** start Avatar padding */
	const handleAvatarPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (avatarPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						avatarPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						avatarPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						avatarPaddingMobile: {
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
						avatarPaddingDesktop: {
							...avatarPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						avatarPaddingTablet: {
							...avatarPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						avatarPaddingMobile: {
							...avatarPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleAvatarPaddingCombineBtn = () => {
		setAttributes({ avatarPaddingLink: !avatarPaddingLink });
	};

	const handleAvatarPaddingUnitsHandler = (unit) => {
		setAttributes({
			avatarPaddingUnits: {
				...avatarPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const avatarPaddingDesktopWidth = `${avatarPaddingDesktop.top}${avatarPaddingUnits.Desktop} ${avatarPaddingDesktop.right}${avatarPaddingUnits.Desktop} ${avatarPaddingDesktop.bottom}${avatarPaddingUnits.Desktop} ${avatarPaddingDesktop.left}${avatarPaddingUnits.Desktop}`;
	const avatarPaddingTabletWidth = `${avatarPaddingTablet.top}${avatarPaddingUnits.Tablet} ${avatarPaddingTablet.right}${avatarPaddingUnits.Tablet} ${avatarPaddingTablet.bottom}${avatarPaddingUnits.Tablet} ${avatarPaddingTablet.left}${avatarPaddingUnits.Tablet}`;
	const avatarPaddingMobileWidth = `${avatarPaddingMobile.top}${avatarPaddingUnits.Mobile} ${avatarPaddingMobile.right}${avatarPaddingUnits.Mobile} ${avatarPaddingMobile.bottom}${avatarPaddingUnits.Mobile} ${avatarPaddingMobile.left}${avatarPaddingUnits.Mobile}`;
	/** End Avatar padding */

	/** Start Avatar Border */
	const handleAvatarBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (avatarBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						avatarBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						avatarBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						avatarBorderMobile: {
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
						avatarBorderDesktop: {
							...avatarBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						avatarBorderTablet: {
							...avatarBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						avatarBorderMobile: {
							...avatarBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleAvatarBorderCombineBtn = () => {
		setAttributes({ avatarBorderLink: !avatarBorderLink });
	};

	const handleAvatarBorderUnitsHandler = (unit) => {
		setAttributes({
			avatarBorderUnits: {
				...avatarBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const avatarBorderDesktopWidth = `${avatarBorderDesktop.top}${avatarBorderUnits.Desktop} ${avatarBorderDesktop.right}${avatarBorderUnits.Desktop} ${avatarBorderDesktop.bottom}${avatarBorderUnits.Desktop} ${avatarBorderDesktop.left}${avatarBorderUnits.Desktop}`;
	const avatarBorderTabletWidth = `${avatarBorderTablet.top}${avatarBorderUnits.Tablet} ${avatarBorderTablet.right}${avatarBorderUnits.Tablet} ${avatarBorderTablet.bottom}${avatarBorderUnits.Tablet} ${avatarBorderTablet.left}${avatarBorderUnits.Tablet}`;
	const avatarBorderMobileWidth = `${avatarBorderMobile.top}${avatarBorderUnits.Mobile} ${avatarBorderMobile.right}${avatarBorderUnits.Mobile} ${avatarBorderMobile.bottom}${avatarBorderUnits.Mobile} ${avatarBorderMobile.left}${avatarBorderUnits.Mobile}`;
	/** End Avatar Border */

	/** Start Avatar Border Radius */
	const handleAvatarBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (avatarBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						avatarBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						avatarBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						avatarBorderRadiusMobile: {
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
						avatarBorderRadiusDesktop: {
							...avatarBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						avatarBorderRadiusTablet: {
							...avatarBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						avatarBorderRadiusMobile: {
							...avatarBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleAvatarBorderRadiusCombineBtn = () => {
		setAttributes({ avatarBorderRadiusLink: !avatarBorderRadiusLink });
	};

	const handleAvatarBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			avatarBorderRadiusUnits: {
				...avatarBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const avatarBorderRadiusDesktopWidth = `${avatarBorderRadiusDesktop.top}${avatarBorderRadiusUnits.Desktop} ${avatarBorderRadiusDesktop.right}${avatarBorderRadiusUnits.Desktop} ${avatarBorderRadiusDesktop.bottom}${avatarBorderRadiusUnits.Desktop} ${avatarBorderRadiusDesktop.left}${avatarBorderRadiusUnits.Desktop}`;
	const avatarBorderRadiusTabletWidth = `${avatarBorderRadiusTablet.top}${avatarBorderRadiusUnits.Tablet} ${avatarBorderRadiusTablet.right}${avatarBorderRadiusUnits.Tablet} ${avatarBorderRadiusTablet.bottom}${avatarBorderRadiusUnits.Tablet} ${avatarBorderRadiusTablet.left}${avatarBorderRadiusUnits.Tablet}`;
	const avatarBorderRadiusMobileWidth = `${avatarBorderRadiusMobile.top}${avatarBorderRadiusUnits.Mobile} ${avatarBorderRadiusMobile.right}${avatarBorderRadiusUnits.Mobile} ${avatarBorderRadiusMobile.bottom}${avatarBorderRadiusUnits.Mobile} ${avatarBorderRadiusMobile.left}${avatarBorderRadiusUnits.Mobile}`;
	/** End Avatar Border Radius */

	/** Avatar */

	/* ==================================================== */
	/* Start Global Padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (postGlobalPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalPaddingMobile: {
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
						postGlobalPaddingDesktop: {
							...postGlobalPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalPaddingTablet: {
							...postGlobalPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalPaddingMobile: {
							...postGlobalPaddingMobile,
							[position]: value,
						},
					});
				default:
					break;
			}
		}
	};

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({ postGlobalPaddingLink: !postGlobalPaddingLink });
	};

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			postGlobalPaddingUnits: {
				...postGlobalPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const postGlobalDesktopPaddingWidth = `${postGlobalPaddingDesktop.top}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.right}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.bottom}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.left}${postGlobalPaddingUnits.Desktop}`;
	const postGlobalTabletPaddingWidth = `${postGlobalPaddingTablet.top}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.right}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.bottom}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.left}${postGlobalPaddingUnits.Tablet}`;
	const postGlobalMobilePaddingWidth = `${postGlobalPaddingMobile.top}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.right}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.bottom}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.left}${postGlobalPaddingUnits.Mobile}`;
	/* End Global Padding */

	/* Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (postGlobalMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalMarginMobile: {
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
						postGlobalMarginDesktop: {
							...postGlobalMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalMarginTablet: {
							...postGlobalMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalMarginMobile: {
							...postGlobalMarginMobile,
							[position]: value,
						},
					});
				default:
					break;
			}
		}
	};

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ postGlobalMarginLink: !postGlobalMarginLink });
	};

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			postGlobalMarginUnits: {
				...postGlobalMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const postGlobalDesktopMarginWidth = `${postGlobalMarginDesktop.top}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.right}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.bottom}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.left}${postGlobalMarginUnits.Desktop}`;
	const postGlobalTabletMarginWidth = `${postGlobalMarginTablet.top}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.right}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.bottom}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.left}${postGlobalMarginUnits.Tabelet}`;
	const postGlobalMobileMarginWidth = `${postGlobalMarginMobile.top}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.right}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.bottom}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.left}${postGlobalMarginUnits.Mobile}`;
	/* End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (postGlobalBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalBorderMobile: {
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
						postGlobalBorderDesktop: {
							...postGlobalBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalBorderTablet: {
							...postGlobalBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalBorderMobile: {
							...postGlobalBorderMobile,
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
		setAttributes({ postGlobalBorderLink: !postGlobalBorderLink });
	};

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			postGlobalBorderUnits: {
				...postGlobalBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	const postGlobalDesktopBorderWidth = `${postGlobalBorderDesktop.top}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.right}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.bottom}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.left}${postGlobalBorderUnits.Desktop}`;
	const postGlobalTabletBorderWidth = `${postGlobalBorderTablet.top}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.right}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.bottom}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.left}${postGlobalBorderUnits.Tablet}`;
	const postGlobalMobileBorderWidth = `${postGlobalBorderMobile.top}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.right}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.bottom}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.left}${postGlobalBorderUnits.Mobile}`;
	/** End Global Border */

	/** Start Global Border Radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (postGlobalBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalBorderRadiusMobile: {
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
						postGlobalBorderRadiusDesktop: {
							...postGlobalBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalBorderRadiusTablet: {
							...postGlobalBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalBorderRadiusMobile: {
							...postGlobalBorderRadiusMobile,
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
		setAttributes({ postGlobalBorderRadiusLink: !postGlobalBorderRadiusLink });
	};

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			postGlobalBorderRadiusUnits: {
				...postGlobalBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Global Border */

	/** End Global Border Radius */
	const postGlobalDesktopBorderRadiusWidth = `${postGlobalBorderRadiusDesktop.top}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.right}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.bottom}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.left}${postGlobalBorderRadiusUnits.Desktop}`;
	const postGlobalTabletBorderRadiusWidth = `${postGlobalBorderRadiusTablet.top}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.right}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.bottom}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.left}${postGlobalBorderRadiusUnits.Tablet}`;
	const postGlobalMobileBorderRadiusWidth = `${postGlobalBorderRadiusMobile.top}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.right}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.bottom}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.left}${postGlobalBorderRadiusUnits.Mobile}`;
	/** End Global Border Radius */

	// Generate ALL block styles with blockId targeting
	const allBlockStyle = useMemo(
		() => `
            /* Default styles */
            .${blockId} .fb-post-comment-form {
                margin: 0 auto;
                padding: 0;
            }

            /* Comment Count Title */
            .${blockId} .fb-comment-count-title {
                font-size: 20px;
                margin: 0 0 30px 0;
                color: #1e1e1e;
                padding-bottom: 15px;
                border-bottom: 1px solid #e1e1e1;
            }

            /* Comments List */
            .${blockId} .fb-comments-list {
                padding-bottom: 40px;
            }

            /* Comment Items */
            .${blockId} .fb-comment {
                display: flex;
                gap: 15px;
                padding: 20px 0;
                border-bottom: 1px solid #f0f0f0;
            }

						.${blockId} .fb-comment.fb-comment-parent:first-child {
							padding-top: 0;
						}

            .${blockId} .fb-comment:last-child {
                border-bottom: none;
            }

            /* Avatar */
            .${blockId} .fb-comment-avatar {
								width: 64px;
								height: 64px;
                border-radius: 50%;
                flex-shrink: 0;
								object-fit: cover;
            }

            /* Comment Body */
            .${blockId} .fb-comment-body {
                flex: 1;
            }

            .${blockId} .fb-comment-author {
                display: block;
                font-size: 16px;
                font-weight: 600;
                color: #1e1e1e;
                margin-bottom: 5px;
            }

            .${blockId} .fb-comment-meta {
                display: block;
                font-size: 12px;
                color: #666;
                margin-bottom: 10px;
            }

            .${blockId} .fb-comment-meta a {
                color: #2271b1;
                text-decoration: none;
                margin-left: 10px;
            }

            .${blockId} .fb-comment-meta a:hover {
                text-decoration: underline;
            }

            .${blockId} .fb-comment-content {
                margin: 0 0 10px 0;
                color: #444;
                line-height: 1.6;
                font-size: 18px;
            }

            .${blockId} .fb-comment-reply {
                color: #2271b1;
                text-decoration: none;
                font-size: 13px;
                font-weight: 500;
            }

            .${blockId} .fb-comment-reply a {
                text-decoration: none;
            }

            .${blockId} .fb-comment-reply:hover {
                color: #135e96;
            }

            .${blockId} .fb-comment-reply a:hover {
                text-decoration: underline;
            }

            /* Nested Comments */
            .${blockId} .fb-comment-children {
                margin-left: 30px;
                margin-top: 20px;
                padding-left: 20px;
                border-left: 2px solid #f0f0f0;
            }

            .${blockId} .fb-comment-child {
                border-bottom: 1px solid #f8f8f8;
                padding: 15px 0;
            }

            .${blockId} .fb-comment-child:last-child {
                border-bottom: none;
            }

            .${blockId} .fb-comment-child .fb-comment-avatar {
                width: calc(64px * 0.8);
                height: calc(64px * 0.8);
            }

            /* Comment Form */
            .${blockId} .fb-comment-form {
                background: #f9f9f9;
                padding: 25px;
                border-radius: 8px;
                border: 1px solid #e1e1e1;
            }

            .${blockId} .fb-comment-form-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid #e1e1e1;
            }

            .${blockId} .fb-reply-title {
                font-size: 18px;
                font-weight: 600;
                color: #1e1e1e;
                margin: 0;
            }

            .${blockId} .fb-cancel-reply {
                color: #666;
                text-decoration: none;
                font-size: 13px;
            }

            .${blockId} .fb-cancel-reply:hover {
                color: #2271b1;
                text-decoration: underline;
            }

            .${blockId} .fb-logged-in-as{
                margin: 0 0 20px 0;
                padding: 12px 15px;
                background: #e7f3ff;
                border-radius: 4px;
                font-size: 14px;
                border-left: 4px solid #2271b1;
            }

            .${blockId} .fb-logged-in-as a {
                color: #2271b1;
                text-decoration: none;
                font-weight: 500;
            }

            .${blockId} .fb-logged-in-as a:hover {
                text-decoration: underline;
            }

            .${blockId} .fb-comment-form-element .fb-comment-textarea {
                width: 100%;
                padding: 12px 15px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 14px;
                font-family: inherit;
                line-height: 1.4;
                background: #fff;
                resize: vertical;
                min-height: 120px;
                margin-bottom: 15px;
                box-sizing: border-box;
            }

            .${blockId} .fb-comment-form-element div > input{
                width: 100%;
                padding: 12px 15px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 14px;
                font-family: inherit;
                line-height: 1.4;
                background: #fff;
                resize: vertical;
                margin-bottom: 15px;
                box-sizing: border-box;
            }

            .${blockId} .fb-comment-textarea:focus {
                outline: none;
                border-color: #2271b1;
                box-shadow: 0 0 0 1px #2271b1;
            }

            .${blockId} .fb-comment-form-element div > input:focus {
                outline: none;
                border-color: #2271b1;
                box-shadow: 0 0 0 1px #2271b1;
            }

            .${blockId} .fb-post-comment-btn {
                background: #2271b1;
                color: white;
                border: none;
                padding: 12px 30px;
                border-radius: 4px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .${blockId} .fb-post-comment-btn:hover {
                background: #135e96;
            }

                .${blockId} .fb-comment-children {
                    margin-left: 15px;
                    padding-left: 15px;
                }

                .${blockId} .fb-comment-form-header {
                    gap: 10px;
                }

                .${blockId} .fb-comment-form {
                    padding: 20px;
                }
            }

				/*===========================  Desktop Styles ===========================  */

				/** Main Block Style */
				.${blockId} {
					width: 100%;
				}

				.${blockId} .fb-comment-count-title {
            ${commentCountTitleColor ? `color: ${commentCountTitleColor};` : ""}

            ${
							commentCountTitleGlobalTypoSwitcher.fontFamily === true &&
							commentCountTitleGlobalTypographyData.fontFamily
								? `font-family: ${commentCountTitleGlobalTypographyData.fontFamily};`
								: ""
						}
            ${
							commentCountTitleGlobalTypoSwitcher.fontSize === true &&
							commentCountTitleGlobalTypographyData.fontSize
								? `font-size: ${commentCountTitleGlobalTypographyData.fontSize};`
								: ""
						}
            ${
							commentCountTitleGlobalTypoSwitcher.fontWeight === true &&
							commentCountTitleGlobalTypographyData.fontWeight
								? `font-weight: ${commentCountTitleGlobalTypographyData.fontWeight};`
								: ""
						}
            ${
							commentCountTitleGlobalTypoSwitcher.fontStyle === true &&
							commentCountTitleGlobalTypographyData.fontStyle
								? `font-style: ${commentCountTitleGlobalTypographyData.fontStyle};`
								: ""
						}
            ${
							commentCountTitleGlobalTypoSwitcher.textTransform === true &&
							commentCountTitleGlobalTypographyData.textTransform
								? `text-transform: ${commentCountTitleGlobalTypographyData.textTransform};`
								: ""
						}
            ${
							commentCountTitleGlobalTypoSwitcher.textDecoration === true &&
							commentCountTitleGlobalTypographyData.textDecoration
								? `text-decoration: ${commentCountTitleGlobalTypographyData.textDecoration};`
								: ""
						}
            ${
							commentCountTitleGlobalTypoSwitcher.letterSpacing === true &&
							commentCountTitleGlobalTypographyData.letterSpacing
								? `letter-spacing: ${commentCountTitleGlobalTypographyData.letterSpacing};`
								: ""
						}
            ${
							commentCountTitleGlobalTypoSwitcher.lineHeight === true &&
							commentCountTitleGlobalTypographyData.lineHeight
								? `line-height: ${commentCountTitleGlobalTypographyData.lineHeight};`
								: ""
						}

						${
							commentCountTitleGlobalTypoSwitcher.fontFamily === false &&
							commentCountTitleFontFamily
								? `font-family: ${commentCountTitleFontFamily};`
								: ""
						}
						${
							commentCountTitleGlobalTypoSwitcher.fontSize === false &&
							commentCountTitleFontSize.Desktop
								? `font-size: ${commentCountTitleFontSize.Desktop}${commentCountTitleFontSizeUnits.Desktop};`
								: ""
						}
						${
							commentCountTitleGlobalTypoSwitcher.fontWeight === false &&
							commentCountTitleFontWeight
								? `font-weight: ${commentCountTitleFontWeight};`
								: ""
						}
						${
							commentCountTitleGlobalTypoSwitcher.fontStyle === false &&
							commentCountTitleFontStyle
								? `font-style: ${commentCountTitleFontStyle};`
								: ""
						}
						${
							commentCountTitleGlobalTypoSwitcher.textTransform === false &&
							commentCountTitleTextTransform
								? `text-transform: ${commentCountTitleTextTransform};`
								: ""
						}
						${
							commentCountTitleGlobalTypoSwitcher.textDecoration === false &&
							commentCountTitleTextDecoration
								? `text-decoration: ${commentCountTitleTextDecoration};`
								: ""
						}
						${
							commentCountTitleGlobalTypoSwitcher.letterSpacing === false &&
							commentCountTitleLetterSpacing.Desktop
								? `letter-spacing: ${commentCountTitleLetterSpacing.Desktop}${commentCountTitleLetterSpacingUnits.Desktop};`
								: ""
						}
						${
							commentCountTitleGlobalTypoSwitcher.lineHeight === false &&
							commentCountTitleLineHeight.Desktop
								? `line-height: ${commentCountTitleLineHeight.Desktop}${commentCountTitleLineHeightUnits.Desktop};`
								: ""
						}

						${
							commentCountTitleSpacing.Desktop
								? `margin-bottom: ${commentCountTitleSpacing.Desktop}${commentCountTitleSpacingUnits.Desktop};`
								: ""
						}

			}

			

				.${blockId} .fb-comment-count-title:hover {
					${commentCountTitleHoverColor ? `color: ${commentCountTitleHoverColor};` : ""}
				}

				 .${blockId} .fb-comments-list {
						${commentListBottomSpacing.Desktop 
							? `padding-bottom: ${commentListBottomSpacing.Desktop}${commentListBottomSpacingUnits.Desktop};`
							: ""
						}
				 }

				.${blockId} .fb-comments-list .fb-comment.fb-comment-parent{
						${postCommentPaddingDesktopWidth && postCommentPaddingDesktop.top
							? `padding: ${postCommentPaddingDesktopWidth};` 
							: ""
						}
				}

				.${blockId} .fb-comments-list .fb-comment.fb-comment-child{
						${childCommentPaddingDesktopWidth && 
							postCommentPaddingDesktop.top
							? `padding: ${childCommentPaddingDesktopWidth};`
							: ""
						 }

						 ${nestedIndentation.Desktop
							? `padding-left: ${nestedIndentation.Desktop}${nestedIndentationUnits.Desktop};` 
							: ""
						 }
				}

				.${blockId} .fb-comments-list .fb-comment .fb-comment-avatar{
						${avatarPaddingDesktopWidth && avatarPaddingDesktop.top 
							? `padding: ${avatarPaddingDesktopWidth};`
							: ""
						}

						${avatarBorder ? `border: ${avatarBorder};` : ""}
							${
								avatarBorderDesktopWidth && avatarBorderDesktop.top
									? `border-width: ${avatarBorderDesktopWidth};`
									: ""
							}
							${
								avatarBorderRadiusDesktopWidth &&
								avatarBorderRadiusDesktop.top
									? `border-radius: ${avatarBorderRadiusDesktopWidth};`
									: ""
							}
							${avatarBorderColor ? `border-color: ${avatarBorderColor};` : ""}
            	${
								avatarBoxShadowCssValue
									? `box-shadow: ${avatarBoxShadowCssValue};`
									: ""
							}
						
				}

				.${blockId} .fb-comments-list .fb-comment-parent .fb-comment-avatar{
						${avatarSize.Desktop 
							? `width: ${avatarSize.Desktop}${avatarSizeUnits.Desktop};
							height: ${avatarSize.Desktop}${avatarSizeUnits.Desktop};
							`
							: ""
						}
				}

				.${blockId} .fb-comments-list .fb-comment-child .fb-comment-avatar{
						${avatarSize.Desktop
							? `
								width: calc(${avatarSize.Desktop}${avatarSizeUnits.Desktop} * 0.8);
								height: calc(${avatarSize.Desktop}${avatarSizeUnits.Desktop} * 0.8);
							`
							: ""
						}
				}

							.${blockId} .fb-comments-list .fb-comment-body .fb-comment-author{

			
            ${authorColor ? `color: ${authorColor};` : ""}

            ${
							authorGlobalTypoSwitcher.fontFamily === true &&
							authorGlobalTypographyData.fontFamily
								? `font-family: ${authorGlobalTypographyData.fontFamily};`
								: ""
						}
            ${
							authorGlobalTypoSwitcher.fontSize === true &&
							authorGlobalTypographyData.fontSize
								? `font-size: ${authorGlobalTypographyData.fontSize};`
								: ""
						}
            ${
							authorGlobalTypoSwitcher.fontWeight === true &&
							authorGlobalTypographyData.fontWeight
								? `font-weight: ${authorGlobalTypographyData.fontWeight};`
								: ""
						}
            ${
							authorGlobalTypoSwitcher.fontStyle === true &&
							authorGlobalTypographyData.fontStyle
								? `font-style: ${authorGlobalTypographyData.fontStyle};`
								: ""
						}
            ${
							authorGlobalTypoSwitcher.textTransform === true &&
							authorGlobalTypographyData.textTransform
								? `text-transform: ${authorGlobalTypographyData.textTransform};`
								: ""
						}
            ${
							authorGlobalTypoSwitcher.textDecoration === true &&
							authorGlobalTypographyData.textDecoration
								? `text-decoration: ${authorGlobalTypographyData.textDecoration};`
								: ""
						}
            ${
							authorGlobalTypoSwitcher.letterSpacing === true &&
							authorGlobalTypographyData.letterSpacing
								? `letter-spacing: ${authorGlobalTypographyData.letterSpacing};`
								: ""
						}
            ${
							authorGlobalTypoSwitcher.lineHeight === true &&
							authorGlobalTypographyData.lineHeight
								? `line-height: ${authorGlobalTypographyData.lineHeight};`
								: ""
						}

						${
							authorGlobalTypoSwitcher.fontFamily === false &&
							authorFontFamily
								? `font-family: ${authorFontFamily};`
								: ""
						}
						${
							authorGlobalTypoSwitcher.fontSize === false &&
							authorFontSize.Desktop
								? `font-size: ${authorFontSize.Desktop}${authorFontSizeUnits.Desktop};`
								: ""
						}
						${
							authorGlobalTypoSwitcher.fontWeight === false &&
							authorFontWeight
								? `font-weight: ${authorFontWeight};`
								: ""
						}
						${
							authorGlobalTypoSwitcher.fontStyle === false &&
							authorFontStyle
								? `font-style: ${authorFontStyle};`
								: ""
						}
						${
							authorGlobalTypoSwitcher.textTransform === false &&
							authorTextTransform
								? `text-transform: ${authorTextTransform};`
								: ""
						}
						${
							authorGlobalTypoSwitcher.textDecoration === false &&
							authorTextDecoration
								? `text-decoration: ${authorTextDecoration};`
								: ""
						}
						${
							authorGlobalTypoSwitcher.letterSpacing === false &&
							authorLetterSpacing.Desktop
								? `letter-spacing: ${authorLetterSpacing.Desktop}${authorLetterSpacingUnits.Desktop};`
								: ""
						}
						${
							authorGlobalTypoSwitcher.lineHeight === false &&
							authorLineHeight.Desktop
								? `line-height: ${authorLineHeight.Desktop}${authorLineHeightUnits.Desktop};`
								: ""
						}
			}

			

				.${blockId} .fb-comments-list .fb-comment-body .fb-comment-author:hover {
					${authorHoverColor ? `color: ${authorHoverColor};` : ""}
				}


					.${blockId} .fb-comments-list .fb-comment-body .fb-comment-meta {

			
            ${commentMetaColor ? `color: ${commentMetaColor};` : ""}

            ${
							commentMetaGlobalTypoSwitcher.fontFamily === true &&
							commentMetaGlobalTypographyData.fontFamily
								? `font-family: ${commentMetaGlobalTypographyData.fontFamily};`
								: ""
						}
            ${
							commentMetaGlobalTypoSwitcher.fontSize === true &&
							commentMetaGlobalTypographyData.fontSize
								? `font-size: ${commentMetaGlobalTypographyData.fontSize};`
								: ""
						}
            ${
							commentMetaGlobalTypoSwitcher.fontWeight === true &&
							commentMetaGlobalTypographyData.fontWeight
								? `font-weight: ${commentMetaGlobalTypographyData.fontWeight};`
								: ""
						}
            ${
							commentMetaGlobalTypoSwitcher.fontStyle === true &&
							commentMetaGlobalTypographyData.fontStyle
								? `font-style: ${commentMetaGlobalTypographyData.fontStyle};`
								: ""
						}
            ${
							commentMetaGlobalTypoSwitcher.textTransform === true &&
							commentMetaGlobalTypographyData.textTransform
								? `text-transform: ${commentMetaGlobalTypographyData.textTransform};`
								: ""
						}
            ${
							commentMetaGlobalTypoSwitcher.textDecoration === true &&
							commentMetaGlobalTypographyData.textDecoration
								? `text-decoration: ${commentMetaGlobalTypographyData.textDecoration};`
								: ""
						}
            ${
							commentMetaGlobalTypoSwitcher.letterSpacing === true &&
							commentMetaGlobalTypographyData.letterSpacing
								? `letter-spacing: ${commentMetaGlobalTypographyData.letterSpacing};`
								: ""
						}
            ${
							commentMetaGlobalTypoSwitcher.lineHeight === true &&
							commentMetaGlobalTypographyData.lineHeight
								? `line-height: ${commentMetaGlobalTypographyData.lineHeight};`
								: ""
						}

						${
							commentMetaGlobalTypoSwitcher.fontFamily === false &&
							commentMetaFontFamily
								? `font-family: ${commentMetaFontFamily};`
								: ""
						}
						${
							commentMetaGlobalTypoSwitcher.fontSize === false &&
							commentMetaFontSize.Desktop
								? `font-size: ${commentMetaFontSize.Desktop}${commentMetaFontSizeUnits.Desktop};`
								: ""
						}
						${
							commentMetaGlobalTypoSwitcher.fontWeight === false &&
							commentMetaFontWeight
								? `font-weight: ${commentMetaFontWeight};`
								: ""
						}
						${
							commentMetaGlobalTypoSwitcher.fontStyle === false &&
							commentMetaFontStyle
								? `font-style: ${commentMetaFontStyle};`
								: ""
						}
						${
							commentMetaGlobalTypoSwitcher.textTransform === false &&
							commentMetaTextTransform
								? `text-transform: ${commentMetaTextTransform};`
								: ""
						}
						${
							commentMetaGlobalTypoSwitcher.textDecoration === false &&
							commentMetaTextDecoration
								? `text-decoration: ${commentMetaTextDecoration};`
								: ""
						}
						${
							commentMetaGlobalTypoSwitcher.letterSpacing === false &&
							commentMetaLetterSpacing.Desktop
								? `letter-spacing: ${commentMetaLetterSpacing.Desktop}${commentMetaLetterSpacingUnits.Desktop};`
								: ""
						}
						${
							commentMetaGlobalTypoSwitcher.lineHeight === false &&
							commentMetaLineHeight.Desktop
								? `line-height: ${commentMetaLineHeight.Desktop}${commentMetaLineHeightUnits.Desktop};`
								: ""
						}
			}

			

				.${blockId} .fb-comments-list .fb-comment-body .fb-comment-meta:hover {
					${commentMetaHoverColor ? `color: ${commentMetaHoverColor};` : ""}
				}

					.${blockId} .fb-comments-list .fb-comment-body .fb-comment-content {
		
            ${messageColor ? `color: ${messageColor};` : ""}

            ${
							messageGlobalTypoSwitcher.fontFamily === true &&
							messageGlobalTypographyData.fontFamily
								? `font-family: ${messageGlobalTypographyData.fontFamily};`
								: ""
						}
            ${
							messageGlobalTypoSwitcher.fontSize === true &&
							messageGlobalTypographyData.fontSize
								? `font-size: ${messageGlobalTypographyData.fontSize};`
								: ""
						}
            ${
							messageGlobalTypoSwitcher.fontWeight === true &&
							messageGlobalTypographyData.fontWeight
								? `font-weight: ${messageGlobalTypographyData.fontWeight};`
								: ""
						}
            ${
							messageGlobalTypoSwitcher.fontStyle === true &&
							messageGlobalTypographyData.fontStyle
								? `font-style: ${messageGlobalTypographyData.fontStyle};`
								: ""
						}
            ${
							messageGlobalTypoSwitcher.textTransform === true &&
							messageGlobalTypographyData.textTransform
								? `text-transform: ${messageGlobalTypographyData.textTransform};`
								: ""
						}
            ${
							messageGlobalTypoSwitcher.textDecoration === true &&
							messageGlobalTypographyData.textDecoration
								? `text-decoration: ${messageGlobalTypographyData.textDecoration};`
								: ""
						}
            ${
							messageGlobalTypoSwitcher.letterSpacing === true &&
							messageGlobalTypographyData.letterSpacing
								? `letter-spacing: ${messageGlobalTypographyData.letterSpacing};`
								: ""
						}
            ${
							messageGlobalTypoSwitcher.lineHeight === true &&
							messageGlobalTypographyData.lineHeight
								? `line-height: ${messageGlobalTypographyData.lineHeight};`
								: ""
						}

						${
							messageGlobalTypoSwitcher.fontFamily === false &&
							messageFontFamily
								? `font-family: ${messageFontFamily};`
								: ""
						}
						${
							messageGlobalTypoSwitcher.fontSize === false &&
							messageFontSize.Desktop
								? `font-size: ${messageFontSize.Desktop}${messageFontSizeUnits.Desktop};`
								: ""
						}
						${
							messageGlobalTypoSwitcher.fontWeight === false &&
							messageFontWeight
								? `font-weight: ${messageFontWeight};`
								: ""
						}
						${
							messageGlobalTypoSwitcher.fontStyle === false &&
							messageFontStyle
								? `font-style: ${messageFontStyle};`
								: ""
						}
						${
							messageGlobalTypoSwitcher.textTransform === false &&
							messageTextTransform
								? `text-transform: ${messageTextTransform};`
								: ""
						}
						${
							messageGlobalTypoSwitcher.textDecoration === false &&
							messageTextDecoration
								? `text-decoration: ${messageTextDecoration};`
								: ""
						}
						${
							messageGlobalTypoSwitcher.letterSpacing === false &&
							messageLetterSpacing.Desktop
								? `letter-spacing: ${messageLetterSpacing.Desktop}${messageLetterSpacingUnits.Desktop};`
								: ""
						}
						${
							messageGlobalTypoSwitcher.lineHeight === false &&
							messageLineHeight.Desktop
								? `line-height: ${messageLineHeight.Desktop}${messageLineHeightUnits.Desktop};`
								: ""
						}
			}

				/* Advance Control Global Style */
				.${blockId}.fb-post-comment-form-block{
			   ${postGlobalPositionType === "default" ? `position: relative;` : ""}
            ${
							postGlobalPositionType !== "default" &&
							postGlobalPositionType !== "relative"
								? `width: 100%;`
								: ""
						}
            ${
							postGlobalPositionType !== "default"
								? `position: ${postGlobalPositionType};`
								: ""
						}
            ${
							postGlobalPositionType !== "default" &&
							postGlobalPositionType !== "relative" &&
							postGlobalHZOrientationType === "left" &&
							postGlobalHZLeftOffset.Desktop !== undefined
								? `left: ${postGlobalHZLeftOffset.Desktop}${postGlobalHZLeftOffsetUnits.Desktop};`
								: ""
						}
            ${
							postGlobalPositionType !== "default" &&
							postGlobalPositionType !== "relative" &&
							postGlobalHZOrientationType === "right" &&
							postGlobalHZRightOffset.Desktop !== undefined
								? `right: ${postGlobalHZRightOffset.Desktop}${postGlobalHZRightOffsetUnits.Desktop};`
								: ""
						}
            ${
							postGlobalPositionType !== "default" &&
							postGlobalPositionType !== "relative" &&
							postGlobalVROrientationType === "top" &&
							postGlobalVRTopOffset.Desktop !== undefined
								? `top: ${postGlobalVRTopOffset.Desktop}${postGlobalVRTopOffsetUnits.Desktop};`
								: ""
						}
            ${
							postGlobalPositionType !== "default" &&
							postGlobalPositionType !== "relative" &&
							postGlobalVROrientationType === "bottom" &&
							postGlobalVRBottomOffset.Desktop !== undefined
								? `bottom: ${postGlobalVRBottomOffset.Desktop}${postGlobalVRBottomOffsetUnits.Desktop};`
								: ""
						}


					${postGlobalZIndex.Desktop ? `z-index: ${postGlobalZIndex.Desktop};` : ""}
                    ${
											postGlobalOverflow !== "default"
												? `overflow: ${postGlobalOverflow};`
												: ""
										}
										transition: all 0.3s ease-in-out;				
					}



				  .${blockId}.fb-post-comment-form-block .fb-post-comment-form{
                    ${
											postGlobalDesktopPaddingWidth &&
											postGlobalPaddingDesktop.top
												? `padding: ${postGlobalDesktopPaddingWidth};`
												: ""
										}
                                ${
																	postGlobalDesktopMarginWidth &&
																	postGlobalMarginDesktop.top
																		? `margin: ${postGlobalDesktopMarginWidth};`
																		: ""
																}

                    ${
											postGlobalNormalBackgroundType === "gradient"
												? `  
                        ${
													postGlobalNormalCustomGradientSwitcher &&
													postGlobalNormalCustomGradientInputValue
														? `background: ${postGlobalNormalCustomGradientInputValue};`
														: `background: ${postGlobalNormalGradientColor};`
												}
                    `
												: `
                        ${
													postGlobalNormalClassicColor
														? `background: ${postGlobalNormalClassicColor};`
														: ""
												}
                    `
										}

                    ${postGlobalBorder ? `border: ${postGlobalBorder};` : ""} 

                    ${
											postGlobalDesktopBorderWidth &&
											postGlobalBorderDesktop.top
												? `border-width: ${postGlobalDesktopBorderWidth};`
												: ""
										}
                    ${
											postGlobalDesktopBorderRadiusWidth &&
											postGlobalBorderRadiusDesktop.top
												? `border-radius: ${postGlobalDesktopBorderRadiusWidth}!important;`
												: ""
										}
                    ${
											postGlobalBorderColor
												? `border-color: ${postGlobalBorderColor};`
												: ""
										}
                    ${
											postGlobalBoxShadowCssValue
												? `box-shadow: ${postGlobalBoxShadowCssValue} !important;`
												: ""
										}
                                ${
																	postGlobalNormalBackgroundType === "gradient"
																		? `  
                        ${
													postGlobalNormalCustomGradientSwitcher &&
													postGlobalNormalCustomGradientInputValue
														? `background: ${postGlobalNormalCustomGradientInputValue};`
														: `background: ${postGlobalNormalGradientColor};`
												}
                    `
																		: `
                        ${
													postGlobalNormalClassicColor
														? `background: ${postGlobalNormalClassicColor};`
														: ""
												}
                    `
																}

                }

                .${blockId}.fb-post-comment-form-block .fb-post-comment-form:hover {
                     ${
												postGlobalHoverBackgroundType === "gradient"
													? `  
                        ${
													postGlobalHoverCustomGradientSwitcher &&
													postGlobalHoverCustomGradientInputValue
														? `background: ${postGlobalHoverCustomGradientInputValue};`
														: `background: ${postGlobalHoverGradientColor};`
												}
                    `
													: `
                        ${
													postGlobalHoverClassicColor
														? `background: ${postGlobalHoverClassicColor};`
														: ""
												}

                         ${
														postGlobalBorderHoverColor
															? `border-color: ${postGlobalBorderHoverColor};`
															: ""
													}
                        ${
													postGlobalBoxShadowHoverCssValue
														? `box-shadow: ${postGlobalBoxShadowHoverCssValue}!important;`
														: ""
												}
                    
                    `
											}
                }


				/*=======================  Tablet Styles =====================  */
				@media only screen and (max-width: 1024px ) {


							.${blockId} .fb-comment-count-title  {
							  ${
									commentCountTitleGlobalTypoSwitcher.fontSize === false &&
									commentCountTitleFontSize.Tablet
										? `font-size: ${commentCountTitleFontSize.Tablet}${commentCountTitleFontSizeUnits.Tablet};`
										: ""
								}
                ${
									commentCountTitleGlobalTypoSwitcher.letterSpacing === false &&
									commentCountTitleLetterSpacing.Tablet
										? `letter-spacing: ${commentCountTitleLetterSpacing.Tablet}${commentCountTitleLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									commentCountTitleGlobalTypoSwitcher.lineHeight === false &&
									commentCountTitleLineHeight.Tablet
										? `line-height: ${commentCountTitleLineHeight.Tablet}${commentCountTitleLineHeightUnits.Tablet};`
										: ""
								}

									${
										commentCountTitleSpacing.Tablet
											? `margin-bottom: ${commentCountTitleSpacing.Tablet}${commentCountTitleSpacingUnits.Tablet};`
											: ""
									}

						}

										 .${blockId} .fb-comments-list {
						${commentListBottomSpacing.Tablet 
							? `padding-bottom: ${commentListBottomSpacing.Tablet}${commentListBottomSpacingUnits.Tablet};`
							: ""
						}
				 }

						.${blockId} .fb-comments-list .fb-comment{
								${postCommentPaddingTabletWidth && postCommentPaddingTabletWidth.top ?
									`padding : ${postCommentPaddingTabletWidth};`
									: ""
								}
						}

						.${blockId} .fb-comments-list .fb-comment.fb-comment-child{
								${childCommentPaddingTabletWidth && 
									postCommentPaddingTabletWidth.top ?
									`padding : ${childCommentPaddingTabletWidth};`
									: ""
								}

														 ${nestedIndentation.Tablet
							? `padding-left: ${nestedIndentation.Tablet}${nestedIndentationUnits.Tablet}` 
							: ""
						 }
						}	

										.${blockId} .fb-comments-list .fb-comment .fb-comment-avatar{
						${avatarPaddingTabletWidth && avatarPaddingTablet.top 
							? `padding: ${avatarPaddingTabletWidth};`
							: ""
						}
				}

				.${blockId} .fb-comments-list .fb-comment .fb-comment-avatar{
							${
									avatarPaddingTabletWidth && avatarPaddingTablet.top
										? `padding: ${avatarPaddingTabletWidth};`
										: ""
								}
								 ${
										avatarBorderTabletWidth && avatarBorderTablet.top
											? `border-width: ${avatarBorderTabletWidth};`
											: ""
									}
                ${
									avatarBorderRadiusTabletWidth &&
									avatarBorderRadiusTablet.top
										? `border-radius: ${avatarBorderRadiusTabletWidth};`
										: ""
								}
				}

				
				.${blockId} .fb-comments-list .fb-comment-parent .fb-comment-avatar{
						${avatarSize.Tablet 
							? `width: ${avatarSize.Tablet}${avatarSizeUnits.Tablet};
							height: ${avatarSize.Tablet}${avatarSizeUnits.Tablet};
							`
							: ""
						}
				}

				.${blockId} .fb-comments-list .fb-comment-child .fb-comment-avatar{
						${avatarSize.Tablet
							? `
								width: calc(${avatarSize.Tablet}${avatarSizeUnits.Tablet} * 0.8);
								height: calc(${avatarSize.Tablet}${avatarSizeUnits.Tablet} * 0.8);
							`
							: ""
						}
				}

				${blockId} .fb-comments-list .fb-comment-body .fb-comment-author {
							  ${
									authorGlobalTypoSwitcher.fontSize === false &&
									authorFontSize.Tablet
										? `font-size: ${authorFontSize.Tablet}${authorFontSizeUnits.Tablet};`
										: ""
								}
                ${
									authorGlobalTypoSwitcher.letterSpacing === false &&
									authorLetterSpacing.Tablet
										? `letter-spacing: ${authorLetterSpacing.Tablet}${authorLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									authorGlobalTypoSwitcher.lineHeight === false &&
									authorLineHeight.Tablet
										? `line-height: ${authorLineHeight.Tablet}${authorLineHeightUnits.Tablet};`
										: ""
								}
						}

						${blockId} .fb-comments-list .fb-comment-body .fb-comment-meta {
						  ${
									commentMetaGlobalTypoSwitcher.fontSize === false &&
									commentMetaFontSize.Tablet
										? `font-size: ${commentMetaFontSize.Tablet}${commentMetaFontSizeUnits.Tablet};`
										: ""
								}
                ${
									commentMetaGlobalTypoSwitcher.letterSpacing === false &&
									commentMetaLetterSpacing.Tablet
										? `letter-spacing: ${commentMetaLetterSpacing.Tablet}${commentMetaLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									commentMetaGlobalTypoSwitcher.lineHeight === false &&
									commentMetaLineHeight.Tablet
										? `line-height: ${commentMetaLineHeight.Tablet}${commentMetaLineHeightUnits.Tablet};`
										: ""
								}
						}

							.${blockId} .fb-comments-list .fb-comment-body .fb-comment-content {
							  ${
									messageGlobalTypoSwitcher.fontSize === false &&
									messageFontSize.Tablet
										? `font-size: ${messageFontSize.Tablet}${messageFontSizeUnits.Tablet};`
										: ""
								}
                ${
									messageGlobalTypoSwitcher.letterSpacing === false &&
									messageLetterSpacing.Tablet
										? `letter-spacing: ${messageLetterSpacing.Tablet}${messageLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									messageGlobalTypoSwitcher.lineHeight === false &&
									messageLineHeight.Tablet
										? `line-height: ${messageLineHeight.Tablet}${messageLineHeightUnits.Tablet};`
										: ""
								}
						}

							/* Advanced Control Global Style - Tablet */
                .${blockId}.fb-post-comment-form-block {
                    ${
											postGlobalPositionType !== "default" &&
											postGlobalPositionType !== "relative" &&
											postGlobalHZOrientationType === "left" &&
											postGlobalHZLeftOffset.Tablet !== undefined
												? `left: ${postGlobalHZLeftOffset.Tablet}${postGlobalHZLeftOffsetUnits.Tablet};`
												: ""
										}
                    ${
											postGlobalPositionType !== "default" &&
											postGlobalPositionType !== "relative" &&
											postGlobalHZOrientationType === "right" &&
											postGlobalHZRightOffset.Tablet !== undefined
												? `right: ${postGlobalHZRightOffset.Tablet}${postGlobalHZRightOffsetUnits.Tablet};`
												: ""
										}
                    ${
											postGlobalPositionType !== "default" &&
											postGlobalPositionType !== "relative" &&
											postGlobalVROrientationType === "top" &&
											postGlobalVRTopOffset.Tablet !== undefined
												? `top: ${postGlobalVRTopOffset.Tablet}${postGlobalVRTopOffsetUnits.Tablet};`
												: ""
										}
                    ${
											postGlobalPositionType !== "default" &&
											postGlobalPositionType !== "relative" &&
											postGlobalVROrientationType === "bottom" &&
											postGlobalVRBottomOffset.Tablet !== undefined
												? `bottom: ${postGlobalVRBottomOffset.Tablet}${postGlobalVRBottomOffsetUnits.Tablet};`
												: ""
										}
                    ${
											postGlobalZIndex.Tablet
												? `z-index: ${postGlobalZIndex.Tablet}`
												: ""
										}

                }

                .${blockId}.fb-post-comment-form-block .fb-post-comment-form{
                    ${
											postGlobalTabletPaddingWidth &&
											postGlobalPaddingTablet.top
												? `padding: ${postGlobalTabletPaddingWidth};`
												: ""
										}
                                        ${
																					postGlobalTabletMarginWidth &&
																					postGlobalMarginTablet.top
																						? `margin: ${postGlobalTabletMarginWidth};`
																						: ""
																				}

                    
                    ${
											postGlobalTabletBorderWidth && postGlobalBorderTablet.top
												? `border-width: ${postGlobalTabletBorderWidth};`
												: ""
										}
                        ${
													postGlobalTabletBorderRadiusWidth &&
													postGlobalBorderRadiusTablet.top
														? `border-radius: ${postGlobalTabletBorderRadiusWidth}!important;`
														: ""
												}
                }


            }
				}
				
				/*===========================  Mobile Styles ===========================  */
				@media screen and (max-width: 767px) {

					.${blockId} .fb-comment-count-title  {
					  ${
							commentCountTitleGlobalTypoSwitcher.fontSize === false &&
							commentCountTitleFontSize.Mobile
								? `font-size: ${commentCountTitleFontSize.Mobile}${commentCountTitleFontSizeUnits.Mobile};`
								: ""
						}
						${
							commentCountTitleGlobalTypoSwitcher.letterSpacing === false &&
							commentCountTitleLetterSpacing.Mobile
								? `letter-spacing: ${commentCountTitleLetterSpacing.Mobile}${commentCountTitleLetterSpacingUnits.Mobile};`
								: ""
						}
						${
							commentCountTitleGlobalTypoSwitcher.lineHeight === false &&
							commentCountTitleLineHeight.Mobile
								? `line-height: ${commentCountTitleLineHeight.Mobile}${commentCountTitleLineHeightUnits.Mobile};`
								: ""
						}

									${
										commentCountTitleSpacing.Mobile
											? `margin-bottom: ${commentCountTitleSpacing.Mobile}${commentCountTitleSpacingUnits.Mobile};`
											: ""
									}

					}

									 .${blockId} .fb-comments-list {
						${commentListBottomSpacing.Mobile 
							? `padding-bottom: ${commentListBottomSpacing.Mobile}${commentListBottomSpacingUnits.Mobile};`
							: ""
						}
				 }

					.${blockId} .fb-comments-list .fb-comment{
							${postCommentPaddingMobileWidth && postCommentPaddingMobile.top 
								? `padding: ${postCommentPaddingMobileWidth};`
								: ""
							}
					}	

					.${blockId} .fb-comments-list .fb-comment.fb-comment-child{
							
							${childCommentPaddingMobileWidth && 
								postCommentPaddingMobile.top 
								? `padding: ${childCommentPaddingMobileWidth}`	
								: ""
							}

													 ${nestedIndentation.Mobile
							? `padding-left: ${nestedIndentation.Mobile}${nestedIndentationUnits.Mobile}` 
							: ""
						 }

					}

									.${blockId} .fb-comments-list .fb-comment .fb-comment-avatar{
						${avatarPaddingMobileWidth && avatarPaddingMobile.top 
							? `padding: ${avatarPaddingMobileWidth};`
							: ""
						}
				}

				.${blockId} .fb-comments-list .fb-comment .fb-comment-avatar{
					${
								avatarPaddingMobileWidth && avatarPaddingMobile.top
									? `padding: ${avatarPaddingMobileWidth};`
									: ""
							}
							 ${
									avatarBorderMobileWidth && avatarBorderMobile.top
										? `border-width: ${avatarBorderMobileWidth};`
										: ""
								}
                ${
									avatarBorderRadiusMobileWidth &&
									avatarBorderRadiusMobile.top
										? `border-radius: ${avatarBorderRadiusMobileWidth};`
										: ""
								}
				}

				
				.${blockId} .fb-comments-list .fb-comment-parent .fb-comment-avatar{
						${avatarSize.Mobile 
							? `width: ${avatarSize.Mobile}${avatarSizeUnits.Mobile};
							height: ${avatarSize.Mobile}${avatarSizeUnits.Mobile};
							`
							: ""
						}
				}

				.${blockId} .fb-comments-list .fb-comment-child .fb-comment-avatar{
						${avatarSize.Mobile
							? `
								width: calc(${avatarSize.Mobile}${avatarSizeUnits.Mobile} * 0.8);
								height: calc(${avatarSize.Mobile}${avatarSizeUnits.Mobile} * 0.8);
							`
							: ""
						}
				}

					${blockId} .fb-comments-list .fb-comment-body .fb-comment-author {
					 ${
							authorGlobalTypoSwitcher.fontSize === false &&
							authorFontSize.Mobile
								? `font-size: ${authorFontSize.Mobile}${authorFontSizeUnits.Mobile};`
								: ""
						}
						${
							authorGlobalTypoSwitcher.letterSpacing === false &&
							authorLetterSpacing.Mobile
								? `letter-spacing: ${authorLetterSpacing.Mobile}${authorLetterSpacingUnits.Mobile};`
								: ""
						}
						${
							authorGlobalTypoSwitcher.lineHeight === false &&
							authorLineHeight.Mobile
								? `line-height: ${authorLineHeight.Mobile}${authorLineHeightUnits.Mobile};`
								: ""
						}
					}

					${blockId} .fb-comments-list .fb-comment-body .fb-comment-meta {
						${
							commentMetaGlobalTypoSwitcher.fontSize === false &&
							commentMetaFontSize.Mobile
								? `font-size: ${commentMetaFontSize.Mobile}${commentMetaFontSizeUnits.Mobile};`
								: ""
						}
						${
							commentMetaGlobalTypoSwitcher.letterSpacing === false &&
							commentMetaLetterSpacing.Mobile
								? `letter-spacing: ${commentMetaLetterSpacing.Mobile}${commentMetaLetterSpacingUnits.Mobile};`
								: ""
						}
						${
							commentMetaGlobalTypoSwitcher.lineHeight === false &&
							commentMetaLineHeight.Mobile
								? `line-height: ${commentMetaLineHeight.Mobile}${commentMetaLineHeightUnits.Mobile};`
								: ""
						}
					}

					.${blockId} .fb-comments-list .fb-comment-body .fb-comment-content  {
					  ${
							messageGlobalTypoSwitcher.fontSize === false &&
							messageFontSize.Mobile
								? `font-size: ${messageFontSize.Mobile}${messageFontSizeUnits.Mobile};`
								: ""
						}
						${
							messageGlobalTypoSwitcher.letterSpacing === false &&
							messageLetterSpacing.Mobile
								? `letter-spacing: ${messageLetterSpacing.Mobile}${messageLetterSpacingUnits.Mobile};`
								: ""
						}
						${
							messageGlobalTypoSwitcher.lineHeight === false &&
							messageLineHeight.Mobile
								? `line-height: ${messageLineHeight.Mobile}${messageLineHeightUnits.Mobile};`
								: ""
						}
					}
												
							 /* Advance Control Global Style - Mobile */
                .${blockId}.fb-post-comment-form-block {
                        ${
													postGlobalPositionType !== "default" &&
													postGlobalPositionType !== "relative" &&
													postGlobalHZOrientationType === "left" &&
													postGlobalHZLeftOffset.Mobile !== undefined
														? `left: ${postGlobalHZLeftOffset.Mobile}${postGlobalHZLeftOffsetUnits.Mobile};`
														: ""
												}
                        ${
													postGlobalPositionType !== "default" &&
													postGlobalPositionType !== "relative" &&
													postGlobalHZOrientationType === "right" &&
													postGlobalHZRightOffset.Mobile !== undefined
														? `right: ${postGlobalHZRightOffset.Mobile}${postGlobalHZRightOffsetUnits.Mobile};`
														: ""
												}
                        ${
													postGlobalPositionType !== "default" &&
													postGlobalPositionType !== "relative" &&
													postGlobalVROrientationType === "top" &&
													postGlobalVRTopOffset.Mobile !== undefined
														? `top: ${postGlobalVRTopOffset.Mobile}${postGlobalVRTopOffsetUnits.Mobile};`
														: ""
												}
                        ${
													postGlobalPositionType !== "default" &&
													postGlobalPositionType !== "relative" &&
													postGlobalVROrientationType === "bottom" &&
													postGlobalVRBottomOffset.Mobile !== undefined
														? `bottom: ${postGlobalVRBottomOffset.Mobile}${postGlobalVRBottomOffsetUnits.Mobile};`
														: ""
												} 

                        ${
													postGlobalZIndex.Mobile
														? `z-index: ${postGlobalZIndex.Mobile}`
														: ""
												}

                     
                }


                .${blockId}.fb-post-comment-form-block .fb-post-comment-form{
                
                       ${
													postGlobalMobilePaddingWidth &&
													postGlobalPaddingMobile.top
														? `padding: ${postGlobalMobilePaddingWidth}`
														: ""
												}
                                        ${
																					postGlobalMobileMarginWidth &&
																					postGlobalMarginMobile.top
																						? `margin: ${postGlobalMobileMarginWidth}`
																						: ""
																				}

                         ${
														postGlobalMobileBorderWidth &&
														postGlobalBorderMobile.top
															? `border-width: ${postGlobalMobileBorderWidth};`
															: ""
													}
                        ${
													postGlobalMobileBorderRadiusWidth &&
													postGlobalBorderRadiusMobile.top
														? `border-radius: ${postGlobalMobileBorderRadiusWidth}!important;`
														: ""
												}

                }




            }
				
				}


        `,
		[attributes, blockId],
	);

	const customCss = getCustomCss(commentFormGlobalCustomCSS, `.${blockId}`);
	const editorStyle = `${allBlockStyle} ${customCss}`
		.replace(/\s+/g, " ")
		.trim();

	useEffect(() => {
		setAttributes({ blockStyle: editorStyle });
	}, [editorStyle]);

	const generalControls = (
		<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
			<BaseControl
				label={__("Element Visibility", "frontis-blocks")}
				className="fb-setting-show-hide-elements"
			>
				{showCommentTitle && (
					<ToggleControl
						label={__("Show Comment Count", "frontis-blocks")}
						checked={showCommentsCount}
						onChange={(value) => setAttributes({ showCommentsCount: value })}
						help={__(
							"Comments count is only shown when comment title is visible",
							"frontis-blocks",
						)}
					/>
				)}

				<ToggleControl
					label={__("Show Comment Title", "frontis-blocks")}
					checked={showCommentTitle}
					onChange={(value) => setAttributes({ showCommentTitle: value })}
				/>

				<ToggleControl
					label={__("Show Comment Form", "frontis-blocks")}
					checked={showCommentForm}
					onChange={(value) => setAttributes({ showCommentForm: value })}
				/>

				<div className="fb-control-divider"></div>
			</BaseControl>

			{showCommentForm && (
				<BaseControl
					label={__("Form Text Customization", "frontis-blocks")}
					className="fb-setting-form-texts"
				>
					<p style={{ fontSize: "12px", color: "#888" }}>
						{__(
							"Craft a warm and inviting title to welcome users to share their thoughts, e.g., 'Join the Discussion'.",
							"frontis-blocks",
						)}
					</p>

					<div className="fb-control-divider"></div>

					<FB_InputControl
						label={__("Comment Invitation", "frontis-blocks")}
						value={formTitle}
						onChangeValue={(value) => setAttributes({ formTitle: value })}
						placeholder={__("Leave a Reply", "frontis-blocks")}
					/>

					<FB_InputControl
						label={__("Dismiss Reply Option", "frontis-blocks")}
						value={cancelReplyText}
						onChangeValue={(value) => setAttributes({ cancelReplyText: value })}
						placeholder={__("Cancel reply", "frontis-blocks")}
					/>

					<FB_InputControl
						label={__("User Login Status", "frontis-blocks")}
						value={loginText}
						onChangeValue={(value) => setAttributes({ loginText: value })}
						placeholder={__("Logged in as", "frontis-blocks")}
					/>

					<FB_InputControl
						label={__("User Sign Out Link", "frontis-blocks")}
						value={logoutText}
						onChangeValue={(value) => setAttributes({ logoutText: value })}
						placeholder={__("Log out?", "frontis-blocks")}
					/>

					<FB_InputControl
						label={__("Submit Comment Action", "frontis-blocks")}
						value={buttonText}
						onChangeValue={(value) => setAttributes({ buttonText: value })}
						placeholder={__("Post Comment", "frontis-blocks")}
					/>
				</BaseControl>
			)}
		</PanelBody>
	);

	const styleControls = (
		<>

			<PanelBody
				title={__("Comment Item", "frontis-blocks")}
				initialOpen={true}
			>
				<BaseControl
					label={__("Spacing", "frontis-blocks")}
					className="fb-setting-form-texts"
				>

					<p style={{ fontSize: "12px", color: "#888" }}>
						{__("Precisely manage the spatial rhythm of your comment layout — control padding, gaps, and nested indentation with intelligent scaling that adapts automatically to threaded replies.", "frontis-blocks")}
					</p>

					<div className="fb-control-divider"></div>

					<FB_Spacing
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handlePostCommentPaddingUnitsHandler}
						spacingUnits={postCommentPaddingUnits}
						spacingDesktop={postCommentPaddingDesktop}
						spacingTablet={postCommentPaddingTablet}
						spacingMobile={postCommentPaddingMobile}
						handleSpacingUnitHandler={handlePostCommentPaddingUnitChange}
						spacingCombineBtn={postCommentPaddingLink}
						spacingCombineBtnHandler={handlePostCommentPaddingCombineBtn}
						setAttributes={setAttributes}
					/>

					<FB_Range
						min={0}
						max={100}
						label={__("Nested Indent", "frontis-blocks")}
						rangeValue={nestedIndentation}
						onChangeHandler={(value) =>
							setAttributes({ nestedIndentation: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ nestedIndentationUnits: value })
						}
						deviceType={deviceType}
						units={nestedIndentationUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>

					<FB_Range
						min={0}
						max={100}
						label={__("Bottom Spacing", "frontis-blocks")}
						rangeValue={commentListBottomSpacing}
						onChangeHandler={(value) =>
							setAttributes({ commentListBottomSpacing: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ commentListBottomSpacingUnits: value })
						}
						deviceType={deviceType}
						units={commentListBottomSpacingUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
						help={__("Add space below the comment list to separate it from the comment form or other content.", "frontis-blocks")}
					/> 

					{/* <p style={{ fontSize: "12px", color: "#888" }}>
						{__("Add space below the comment list to separate it from the comment form or other content.", "frontis-blocks")}
					</p> */}

					<div className="fb-control-divider"></div>
				</BaseControl>

				<BaseControl
					label={__("Avatar", "frontis-blocks")}
					className="fb-setting-form-texts"
				>

						<p style={{ fontSize: "12px", color: "#888" }}>
						{__("Refine the visual style of user avatars with adjustable size, padding, borders, radius, and soft shadow effects for a polished, consistent appearance.", "frontis-blocks")}
					</p>

					<div className="fb-control-divider"></div>

					<FB_Range
						min={0}
						max={100}
						label={__("Size", "frontis-blocks")}
						rangeValue={avatarSize}
						onChangeHandler={(value) =>
							setAttributes({ avatarSize: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ avatarSizeUnits: value })
						}
						deviceType={deviceType}
						units={avatarSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>


						<FB_Spacing
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleAvatarPaddingUnitsHandler}
						spacingUnits={avatarPaddingUnits}
						spacingDesktop={avatarPaddingDesktop}
						spacingTablet={avatarPaddingTablet}
						spacingMobile={avatarPaddingMobile}
						handleSpacingUnitHandler={handleAvatarPaddingUnitChange}
						spacingCombineBtn={avatarPaddingLink}
						spacingCombineBtnHandler={handleAvatarPaddingCombineBtn}
						setAttributes={setAttributes}
					/>

					<SelectControl
						label={__("Border Style", "frontis-blocks")}
						value={avatarBorder}
						options={BORDER_STYLES}
						onChange={(value) => setAttributes({ avatarBorder: value })}
					/>


						{avatarBorder !== "none" && (
							<>
													{/* <FB_SwitcherControl
						label={__("Border", "frontis-blocks")}
						globalSwitcher={avatarBorderColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ avatarBorderColorSwitcher: value })
						}
					/> */}

					{/* {avatarBorderColorSwitcher === "normal" && ( */}
						<FB_ColorControl
							label={__("Border Color", "frontis-blocks")}
							globalColor={avatarBorderColor}
							setGlobalColor={(value) =>
								setAttributes({
									avatarBorderColor: value === undefined ? "" : value,
								})
							}
						/>
					{/* )} */}

					{/* {avatarBorderColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={avatarBorderHoverColor}
							setGlobalColor={(value) =>
								setAttributes({
									avatarBorderHoverColor: value === undefined ? "" : value,
								})
							}
						/>
					)} */}

					<FB_Spacing
						label={__("Border", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleAvatarBorderUnitsHandler}
						spacingUnits={avatarBorderUnits}
						spacingDesktop={avatarBorderDesktop}
						spacingTablet={avatarBorderTablet}
						spacingMobile={avatarBorderMobile}
						handleSpacingUnitHandler={handleAvatarBorderUnitChange}
						spacingCombineBtn={avatarBorderLink}
						spacingCombineBtnHandler={handleAvatarBorderCombineBtn}
						setAttributes={setAttributes}
					/>

							</>
						)}


					<FB_Spacing
						label={__("Border Radius", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleAvatarBorderRadiusUnitsHandler}
						spacingUnits={avatarBorderRadiusUnits}
						spacingDesktop={avatarBorderRadiusDesktop}
						spacingTablet={avatarBorderRadiusTablet}
						spacingMobile={avatarBorderRadiusMobile}
						handleSpacingUnitHandler={handleAvatarBorderRadiusUnitChange}
						spacingCombineBtn={avatarBorderRadiusLink}
						spacingCombineBtnHandler={handleAvatarBorderRadiusCombineBtn}
						setAttributes={setAttributes}
					/>

					{/* <FB_SwitcherControl
						label={__("Box Shadow", "frontis-blocks")}
						globalSwitcher={avatarBoxShadowSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ avatarBoxShadowSwitcher: value })
						}
					/> */}

					{/* {avatarBoxShadowSwitcher === "normal" && ( */}
						<FB_BoxShadowControl
							label={__("Box Shadow", "frontis-blocks")}
							onBoxShadowChange={(value) =>
								setAttributes({ avatarBoxShadowValues: value })
							}
							initialShadowValue={avatarBoxShadowValues}
							onBoxShadowStyleChange={(value) =>
								setAttributes({ avatarBoxShadowCssValue: value })
							}
						/>
					{/* )} */}

					{/* {avatarBoxShadowSwitcher === "hover" && (
						<FB_BoxShadowControl
							label={__("Hover Shadow", "frontis-blocks")}
							onBoxShadowChange={(value) =>
								setAttributes({ avatarBoxShadowHoverValues: value })
							}
							initialShadowValue={avatarBoxShadowHoverValues}
							onBoxShadowStyleChange={(value) =>
								setAttributes({ avatarBoxShadowHoverCssValue: value })
							}
						/>
					)} */}


				</BaseControl>

				<div className="fb-control-divider"></div>

				<BaseControl
					label={__("Author", "frontis-blocks")}
					className="fb-setting-form-texts"
				>
					<p style={{ fontSize: "12px", color: "#888" }}>
						{__("Define the visual identity of the comment author with refined color and typography controls for a distinctive, readable name style.", "frontis-blocks")}
					</p>

					<div className="fb-control-divider"></div>

				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={authorGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ authorGlobalTypographyData: value })
					}
					globalTypoType={authorGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							authorGlobalTypoType: value,
							authorGlobalTypoSwitcher:
								value === "default"
									? {
											...authorGlobalTypoSwitcher,
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
											...authorGlobalTypoSwitcher,
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
					globalTypoOption={authorGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ authorGlobalTypoOption: value })
					}
					fontFamily={authorFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							authorFontFamily: value,
							authorGlobalTypoSwitcher: {
								...authorGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={authorFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							authorFontSize: value,
							authorGlobalTypoSwitcher: {
								...authorGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={authorFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ authorFontSizeUnits: value })
					}
					fontWeight={authorFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							authorFontWeight: value,
							authorGlobalTypoSwitcher: {
								...authorGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={authorFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							authorFontStyle: value,
							authorGlobalTypoSwitcher: {
								...authorGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={authorTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							authorTextTransform: value,
							authorGlobalTypoSwitcher: {
								...authorGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={authorTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							authorTextDecoration: value,
							authorGlobalTypoSwitcher: {
								...authorGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={authorLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							authorLetterSpacing: value,
							authorGlobalTypoSwitcher: {
								...authorGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={authorLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ authorLetterSpacingUnits: value })
					}
					lineHeight={authorLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							authorLineHeight: value,
							authorGlobalTypoSwitcher: {
								...authorGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={authorLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ authorLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={authorColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ authorColorSwitcher: value })
					}
				/>

				{authorColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={authorColor}
						setGlobalColor={(value) =>
							setAttributes({
								authorColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{authorColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={authorHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								authorHoverColor: value === undefined ? "" : value,
							})
						}
					/>
				)}


				</BaseControl>

				<div className="fb-control-divider"></div>
				
				<BaseControl
					label={__("Meta", "frontis-blocks")}
					className="fb-setting-form-texts"
				>
					<p style={{ fontSize: "12px", color: "#888" }}>
						{__("Style the comment metadata—such as date and time—with harmonious color and typography for subtle emphasis and readability.", "frontis-blocks")}
					</p>

					<div className="fb-control-divider"></div>

						<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={commentMetaGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ commentMetaGlobalTypographyData: value })
					}
					globalTypoType={commentMetaGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							commentMetaGlobalTypoType: value,
							commentMetaGlobalTypoSwitcher:
								value === "default"
									? {
											...commentMetaGlobalTypoSwitcher,
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
											...commentMetaGlobalTypoSwitcher,
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
					globalTypoOption={commentMetaGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ commentMetaGlobalTypoOption: value })
					}
					fontFamily={commentMetaFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							commentMetaFontFamily: value,
							commentMetaGlobalTypoSwitcher: {
								...commentMetaGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={commentMetaFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							commentMetaFontSize: value,
							commentMetaGlobalTypoSwitcher: {
								...commentMetaGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={commentMetaFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ commentMetaFontSizeUnits: value })
					}
					fontWeight={commentMetaFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							commentMetaFontWeight: value,
							commentMetaGlobalTypoSwitcher: {
								...commentMetaGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={commentMetaFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							commentMetaFontStyle: value,
							commentMetaGlobalTypoSwitcher: {
								...commentMetaGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={commentMetaTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							commentMetaTextTransform: value,
							commentMetaGlobalTypoSwitcher: {
								...commentMetaGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={commentMetaTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							commentMetaTextDecoration: value,
							commentMetaGlobalTypoSwitcher: {
								...commentMetaGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={commentMetaLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							commentMetaLetterSpacing: value,
							commentMetaGlobalTypoSwitcher: {
								...commentMetaGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={commentMetaLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ commentMetaLetterSpacingUnits: value })
					}
					lineHeight={commentMetaLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							commentMetaLineHeight: value,
							commentMetaGlobalTypoSwitcher: {
								...commentMetaGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={commentMetaLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ commentMetaLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={commentMetaColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ commentMetaColorSwitcher: value })
					}
				/>

				{commentMetaColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={commentMetaColor}
						setGlobalColor={(value) =>
							setAttributes({
								commentMetaColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{commentMetaColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={commentMetaHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								commentMetaHoverColor: value === undefined ? "" : value,
							})
						}
					/>
				)}
				</BaseControl>

								<div className="fb-control-divider"></div>
				
				<BaseControl
					label={__("Message", "frontis-blocks")}
					className="fb-setting-form-texts"
				>
					<p style={{ fontSize: "12px", color: "#888" }}>
						{__("Control the visual tone of comment content with precise color and typography adjustments for a clear, polished reading experience.", "frontis-blocks")}
					</p>

					<div className="fb-control-divider"></div>

				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={messageGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ messageGlobalTypographyData: value })
					}
					globalTypoType={messageGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							messageGlobalTypoType: value,
							messageGlobalTypoSwitcher:
								value === "default"
									? {
											...messageGlobalTypoSwitcher,
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
											...messageGlobalTypoSwitcher,
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
					globalTypoOption={messageGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ messageGlobalTypoOption: value })
					}
					fontFamily={messageFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							messageFontFamily: value,
							messageGlobalTypoSwitcher: {
								...messageGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={messageFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							messageFontSize: value,
							messageGlobalTypoSwitcher: {
								...messageGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={messageFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ messageFontSizeUnits: value })
					}
					fontWeight={messageFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							messageFontWeight: value,
							messageGlobalTypoSwitcher: {
								...messageGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={messageFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							messageFontStyle: value,
							messageGlobalTypoSwitcher: {
								...messageGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={messageTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							messageTextTransform: value,
							messageGlobalTypoSwitcher: {
								...messageGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={messageTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							messageTextDecoration: value,
							messageGlobalTypoSwitcher: {
								...messageGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={messageLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							messageLetterSpacing: value,
							messageGlobalTypoSwitcher: {
								...messageGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={messageLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ messageLetterSpacingUnits: value })
					}
					lineHeight={messageLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							messageLineHeight: value,
							messageGlobalTypoSwitcher: {
								...messageGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={messageLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ messageLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

					<FB_ColorControl
						label={__("Color", "frontis-blocks")}
						globalColor={messageColor}
						setGlobalColor={(value) =>
							setAttributes({
								messageColor: value === undefined ? "" : value,
							})
						}
					/>

				</BaseControl>

			</PanelBody>

			<PanelBody
				title={__("Comments Title", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={commentCountTitleGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ commentCountTitleGlobalTypographyData: value })
					}
					globalTypoType={commentCountTitleGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							commentCountTitleGlobalTypoType: value,
							commentCountTitleGlobalTypoSwitcher:
								value === "default"
									? {
											...commentCountTitleGlobalTypoSwitcher,
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
											...commentCountTitleGlobalTypoSwitcher,
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
					globalTypoOption={commentCountTitleGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ commentCountTitleGlobalTypoOption: value })
					}
					fontFamily={commentCountTitleFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							commentCountTitleFontFamily: value,
							commentCountTitleGlobalTypoSwitcher: {
								...commentCountTitleGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={commentCountTitleFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							commentCountTitleFontSize: value,
							commentCountTitleGlobalTypoSwitcher: {
								...commentCountTitleGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={commentCountTitleFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ commentCountTitleFontSizeUnits: value })
					}
					fontWeight={commentCountTitleFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							commentCountTitleFontWeight: value,
							commentCountTitleGlobalTypoSwitcher: {
								...commentCountTitleGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={commentCountTitleFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							commentCountTitleFontStyle: value,
							commentCountTitleGlobalTypoSwitcher: {
								...commentCountTitleGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={commentCountTitleTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							commentCountTitleTextTransform: value,
							commentCountTitleGlobalTypoSwitcher: {
								...commentCountTitleGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={commentCountTitleTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							commentCountTitleTextDecoration: value,
							commentCountTitleGlobalTypoSwitcher: {
								...commentCountTitleGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={commentCountTitleLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							commentCountTitleLetterSpacing: value,
							commentCountTitleGlobalTypoSwitcher: {
								...commentCountTitleGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={commentCountTitleLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ commentCountTitleLetterSpacingUnits: value })
					}
					lineHeight={commentCountTitleLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							commentCountTitleLineHeight: value,
							commentCountTitleGlobalTypoSwitcher: {
								...commentCountTitleGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={commentCountTitleLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ commentCountTitleLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={commentCountTitleColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ commentCountTitleColorSwitcher: value })
					}
				/>

				{commentCountTitleColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={commentCountTitleColor}
						setGlobalColor={(value) =>
							setAttributes({
								commentCountTitleColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{commentCountTitleColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={commentCountTitleHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								commentCountTitleHoverColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				<div className="fb-control-divider"></div>

				<FB_Range
					// min={}
					max={100}
					label={__("Spacing", "frontis-blocks")}
					rangeValue={commentCountTitleSpacing}
					onChangeHandler={(value) =>
						setAttributes({ commentCountTitleSpacing: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ commentCountTitleSpacingUnits: value })
					}
					deviceType={deviceType}
					units={commentCountTitleSpacingUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
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
					rangeValue={postGlobalZIndex}
					onChangeHandler={(value) =>
						setAttributes({
							postGlobalZIndex: value === 0 ? undefined : value,
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
					value={postGlobalOverflow}
					options={OVERFLOW_OP}
					onChange={(value) => setAttributes({ postGlobalOverflow: value })}
				/>

				<FB_PositionControl
					deviceType={deviceType}
					positionType={postGlobalPositionType}
					setPositionType={(value) =>
						setAttributes({ postGlobalPositionType: value })
					}
					HZOrientationType={postGlobalHZOrientationType}
					setHZOrientationType={(value) =>
						setAttributes({ postGlobalHZOrientationType: value })
					}
					VROrientationType={postGlobalVROrientationType}
					setVROrientationType={(value) =>
						setAttributes({ postGlobalVROrientationType: value })
					}
					HZLeftOffset={postGlobalHZLeftOffset}
					setHZLeftOffset={(value) =>
						setAttributes({ postGlobalHZLeftOffset: value })
					}
					HZLeftOffsetUnits={postGlobalHZLeftOffsetUnits}
					setHZLeftOffsetUnits={(value) =>
						setAttributes({ postGlobalHZLeftOffsetUnits: value })
					}
					HZRightOffset={postGlobalHZRightOffset}
					setHZRightOffset={(value) =>
						setAttributes({ postGlobalHZRightOffset: value })
					}
					HZRightOffsetUnits={postGlobalHZRightOffsetUnits}
					setHZRightOffsetUnits={(value) =>
						setAttributes({ postGlobalHZRightOffsetUnits: value })
					}
					VRTopOffset={postGlobalVRTopOffset}
					setVRTopOffset={(value) =>
						setAttributes({ postGlobalVRTopOffset: value })
					}
					VRTopOffsetUnits={postGlobalVRTopOffsetUnits}
					setVRTopOffsetUnits={(value) =>
						setAttributes({ postGlobalVRTopOffsetUnits: value })
					}
					VRBottomOffset={postGlobalVRBottomOffset}
					setVRBottomOffset={(value) =>
						setAttributes({ postGlobalVRBottomOffset: value })
					}
					VRBottomOffsetUnits={postGlobalVRBottomOffsetUnits}
					setVRBottomOffsetUnits={(value) =>
						setAttributes({ postGlobalVRBottomOffsetUnits: value })
					}
					setAttributes={setAttributes}
				/>

				<FB_InputControl
					label={__("CSS ID", "frontis-blocks")}
					value={wrapperId}
					onChangeValue={(value) => setAttributes({ wrapperId: value })}
					helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
				/>

				<FB_InputControl
					label={__("CSS Class", "frontis-blocks")}
					value={wrapperClass}
					onChangeValue={(value) => setAttributes({ wrapperClass: value })}
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
					spacingUnits={postGlobalPaddingUnits}
					spacingDesktop={postGlobalPaddingDesktop}
					spacingTablet={postGlobalPaddingTablet}
					spacingMobile={postGlobalPaddingMobile}
					handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
					spacingCombineBtn={postGlobalPaddingLink}
					spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalMarginUnitsHandler}
					spacingUnits={postGlobalMarginUnits}
					spacingDesktop={postGlobalMarginDesktop}
					spacingTablet={postGlobalMarginTablet}
					spacingMobile={postGlobalMarginMobile}
					handleSpacingUnitHandler={handleGlobalMarginUnitChange}
					spacingCombineBtn={postGlobalMarginLink}
					spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody title="Background Color" initialOpen={false}>
				<FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={postGlobalBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ postGlobalBgColorSwitcher: value })
					}
					normalBackgroundType={postGlobalNormalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ postGlobalNormalBackgroundType: value })
					}
					normalClassicColor={postGlobalNormalClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							postGlobalNormalClassicColor: value === undefined ? "" : value,
						})
					}
					normalGradientColor={postGlobalNormalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							postGlobalNormalGradientColor: value === undefined ? "" : value,
						})
					}
					normalCustomGradientSwitcher={postGlobalNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ postGlobalNormalCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={
						postGlobalNormalCustomGradientInputValue
					}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({
							postGlobalNormalCustomGradientInputValue: value,
						})
					}
					hoverBackgroundType={postGlobalHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ postGlobalHoverBackgroundType: value })
					}
					hoverClassicColor={postGlobalHoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							postGlobalHoverClassicColor: value === undefined ? "" : value,
						})
					}
					hoverGradientColor={postGlobalHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							postGlobalHoverGradientColor: value === undefined ? "" : value,
						})
					}
					hoverCustomGradientSwitcher={postGlobalHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ postGlobalHoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={
						postGlobalHoverCustomGradientInputValue
					}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({
							postGlobalHoverCustomGradientInputValue: value,
						})
					}
					isBackgroundImage={false}
				/>
			</PanelBody>

			<PanelBody
				title={__("Border and Shadow", "frontis-blocks")}
				initialOpen={false}
			>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={postGlobalBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ postGlobalBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={postGlobalBorderColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ postGlobalBorderColorSwitcher: value })
					}
				/>

				{postGlobalBorderColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={postGlobalBorderColor}
						setGlobalColor={(value) =>
							setAttributes({
								postGlobalBorderColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{postGlobalBorderColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={postGlobalBorderHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								postGlobalBorderHoverColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalBorderUnitsHandler}
					spacingUnits={postGlobalBorderUnits}
					spacingDesktop={postGlobalBorderDesktop}
					spacingTablet={postGlobalBorderTablet}
					spacingMobile={postGlobalBorderMobile}
					handleSpacingUnitHandler={handleGlobalBorderUnitChange}
					spacingCombineBtn={postGlobalBorderLink}
					spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
					spacingUnits={postGlobalBorderRadiusUnits}
					spacingDesktop={postGlobalBorderRadiusDesktop}
					spacingTablet={postGlobalBorderRadiusTablet}
					spacingMobile={postGlobalBorderRadiusMobile}
					handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
					spacingCombineBtn={postGlobalBorderRadiusLink}
					spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Box Shadow", "frontis-blocks")}
					globalSwitcher={postGlobalBoxShadowSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ postGlobalBoxShadowSwitcher: value })
					}
				/>

				{postGlobalBoxShadowSwitcher === "normal" && (
					<FB_BoxShadowControl
						label={__("Normal Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ postGlobalBoxShadowValues: value })
						}
						initialShadowValue={postGlobalBoxShadowValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({ postGlobalBoxShadowCssValue: value })
						}
					/>
				)}

				{postGlobalBoxShadowSwitcher === "hover" && (
					<FB_BoxShadowControl
						label={__("Hover Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ postGlobalBoxShadowHoverValues: value })
						}
						initialShadowValue={postGlobalBoxShadowHoverValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({ postGlobalBoxShadowHoverCssValue: value })
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
					desktopValue={commentFormDesktopSwitcher}
					setDesktopValue={(value) =>
						setAttributes({
							commentFormDesktopSwitcher: value,
						})
					}
					tabletValue={commentFormTabletSwitcher}
					setTabletValue={(value) =>
						setAttributes({
							commentFormTabletSwitcher: value,
						})
					}
					mobileValue={commentFormMobileSwitcher}
					setMobileValue={(value) =>
						setAttributes({
							commentFormMobileSwitcher: value,
						})
					}
				/>
			</PanelBody>

			<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
				<FB_CustomCSSEditor
					value={commentFormGlobalCustomCSS}
					onChangeValue={(value) =>
						setAttributes({ commentFormGlobalCustomCSS: value })
					}
				/>
			</PanelBody>
		</>
	);

	return (
		<>
			<style>{editorStyle}</style>
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
}
