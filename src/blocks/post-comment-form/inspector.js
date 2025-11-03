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
import loadGoogleFont from "@Utils/loadGoogleFont";
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
		avatarGap,
		avatarGapUnits,

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

		messageColor,
		/** ============ End Comment Item */

		/** ============ Start Reply Button */
		replyButtonGlobalTypoSwitcher,
		replyButtonGlobalTypographyData,
		replyButtonGlobalTypoType,
		replyButtonGlobalTypoOption,
		replyButtonFontFamily,
		replyButtonFontSize,
		replyButtonFontSizeUnits,
		replyButtonFontWeight,
		replyButtonFontStyle,
		replyButtonTextTransform,
		replyButtonTextDecoration,
		replyButtonLetterSpacing,
		replyButtonLetterSpacingUnits,
		replyButtonLineHeight,
		replyButtonLineHeightUnits,

		replyButtonColorSwitcher,
		replyButtonColor,
		replyButtonHoverColor,

		/** Background */
		replyButtonBgColorSwitcher,
		replyButtonNormalBackgroundType,
		replyButtonNormalClassicColor,
		replyButtonNormalGradientColor,
		replyButtonNormalCustomGradientSwitcher,
		replyButtonNormalCustomGradientInputValue,
		replyButtonHoverBackgroundType,
		replyButtonHoverClassicColor,
		replyButtonHoverGradientColor,
		replyButtonHoverCustomGradientSwitcher,
		replyButtonHoverCustomGradientInputValue,

		replyButtonPaddingUnits,
		replyButtonPaddingDesktop,
		replyButtonPaddingTablet,
		replyButtonPaddingMobile,
		replyButtonPaddingLink,

		replyButtonBorder,
		replyButtonBorderColorSwitcher,
		replyButtonBorderColor,
		replyButtonBorderHoverColor,
		replyButtonBorderUnits,
		replyButtonBorderDesktop,
		replyButtonBorderTablet,
		replyButtonBorderMobile,
		replyButtonBorderLink,

		replyButtonBorderRadiusUnits,
		replyButtonBorderRadiusDesktop,
		replyButtonBorderRadiusTablet,
		replyButtonBorderRadiusMobile,
		replyButtonBorderRadiusLink,

		replyButtonBoxShadowSwitcher,
		replyButtonBoxShadowValues,
		replyButtonBoxShadowCssValue,
		replyButtonBoxShadowHoverValues,
		replyButtonBoxShadowHoverCssValue,
		/** ============ End Reply Button */

		/** ============ Comment Form ==================== */
		commentFormBgColorSwitcher,
		commentFormNormalBackgroundType,
		commentFormNormalClassicColor,
		commentFormNormalGradientColor,
		commentFormNormalCustomGradientSwitcher,
		commentFormNormalCustomGradientInputValue,
		commentFormHoverBackgroundType,
		commentFormHoverClassicColor,
		commentFormHoverGradientColor,
		commentFormHoverCustomGradientSwitcher,
		commentFormHoverCustomGradientInputValue,

		commentFormPaddingUnits,
		commentFormPaddingDesktop,
		commentFormPaddingTablet,
		commentFormPaddingMobile,
		commentFormPaddingLink,

		commentFormBorder,
		commentFormBorderColor,
		commentFormBorderUnits,
		commentFormBorderDesktop,
		commentFormBorderTablet,
		commentFormBorderMobile,
		commentFormBorderLink,

		commentFormBorderRadiusUnits,
		commentFormBorderRadiusDesktop,
		commentFormBorderRadiusTablet,
		commentFormBorderRadiusMobile,
		commentFormBorderRadiusLink,

		commentFormBoxShadowValues,
		commentFormBoxShadowCssValue,
		/** ============ End Comment Form ==================== */

		/** ============ Form Header ==================== */

		/** Title */
		formTitleGlobalTypoSwitcher,
		formTitleGlobalTypographyData,
		formTitleGlobalTypoType,
		formTitleGlobalTypoOption,
		formTitleFontFamily,
		formTitleFontSize,
		formTitleFontSizeUnits,
		formTitleFontWeight,
		formTitleFontStyle,
		formTitleTextTransform,
		formTitleTextDecoration,
		formTitleLetterSpacing,
		formTitleLetterSpacingUnits,
		formTitleLineHeight,
		formTitleLineHeightUnits,

		formTitleColor,

		formTitleSpacing,
		formTitleSpacingUnits,

		/** Cancel Reply Link */
		cancelReplyGlobalTypoSwitcher,
		cancelReplyGlobalTypographyData,
		cancelReplyGlobalTypoType,
		cancelReplyGlobalTypoOption,
		cancelReplyFontFamily,
		cancelReplyFontSize,
		cancelReplyFontSizeUnits,
		cancelReplyFontWeight,
		cancelReplyFontStyle,
		cancelReplyTextTransform,
		cancelReplyTextDecoration,
		cancelReplyLetterSpacing,
		cancelReplyLetterSpacingUnits,
		cancelReplyLineHeight,
		cancelReplyLineHeightUnits,

		cancelReplyColorSwitcher,
		cancelReplyColor,
		cancelReplyHoverColor,

				/** =============== Start Form info =================== */
		loggedInTextGlobalTypoSwitcher,
		loggedInTextGlobalTypographyData, 
		loggedInTextGlobalTypoType,
		loggedInTextGlobalTypoOption,
		loggedInTextFontFamily,
		loggedInTextFontSize,
		loggedInTextFontSizeUnits,
		loggedInTextFontWeight,
		loggedInTextFontStyle,
		loggedInTextTextTransform,
		loggedInTextTextDecoration,
		loggedInTextLetterSpacing,
		loggedInTextLetterSpacingUnits,
		loggedInTextLineHeight,
		loggedInTextLineHeightUnits,
		
		loggedInTextColor,
		loggedInTextHoverColor,

		loggedInLinkColorSwitcher,
		loggedInLinkColor,
		loggedInLinkHoverColor, 

		formInfoSpacing,
		formInfoSpacingUnits,  

		formInfoBgColorSwitcher,
		formInfoNormalBackgroundType,
		formInfoNormalClassicColor,
		formInfoNormalGradientColor,
		formInfoNormalCustomGradientSwitcher,
		formInfoNormalCustomGradientInputValue,
		formInfoHoverBackgroundType,
		formInfoHoverClassicColor,
		formInfoHoverGradientColor,
		formInfoHoverCustomGradientSwitcher,
		formInfoHoverCustomGradientInputValue,

		formInfoPaddingUnits,
		formInfoPaddingDesktop,
		formInfoPaddingTablet,
		formInfoPaddingMobile,
		formInfoPaddingLink,
		/** =============== End Form Info =================== */

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
		const scaleValue = (v) => {
			const num = parseFloat(v);
			const unit = v.replace(num, "");
			return `${num * scale}${unit}`;
		};

		return `${scaleValue(top)} ${scaleValue(right)} ${scaleValue(bottom)} 0`;
	}

	/** Start Load Google Font */
	useEffect(() => {

		if(commentCountTitleFontFamily !== "Default") {
			loadGoogleFont(commentCountTitleFontFamily);
		}

		if(authorFontFamily !== "Default") {
			loadGoogleFont(authorFontFamily);
		}

		if(commentMetaFontFamily !== "Default") {
			loadGoogleFont(commentMetaFontFamily);
		}

		if(messageFontFamily !== "Default") {
			loadGoogleFont(messageFontFamily);
		} 

		if(replyButtonFontFamily !== "Default") {
			loadGoogleFont(replyButtonFontFamily);
		}

		if(formTitleFontFamily !== "Default") {
			loadGoogleFont(formTitleFontFamily);
		}


		if (cancelReplyFontFamily !== "Default") {
			loadGoogleFont(cancelReplyFontFamily);
		}
		
	}, [
		commentCountTitleFontFamily,
		authorFontFamily,
		messageFontFamily,
		commentMetaFontFamily,
		replyButtonFontFamily,
		formTitleFontFamily,
		cancelReplyFontFamily,
	]);
	/** End Load Google Font */

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
	const childCommentPaddingDesktopWidth = scalePaddingWithoutLeft(
		postCommentPaddingDesktopWidth,
		0.75,
	);
	const childCommentPaddingTabletWidth = scalePaddingWithoutLeft(
		postCommentPaddingTabletWidth,
		0.75,
	);
	const childCommentPaddingMobileWidth = scalePaddingWithoutLeft(
		postCommentPaddingMobileWidth,
		0.75,
	);
	/** End Post Comment Item Padding */

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

	/** Reply Button */
	/** padding */
	const handleReplyButtonPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (replyButtonPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						replyButtonPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						replyButtonPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						replyButtonPaddingMobile: {
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
						replyButtonPaddingDesktop: {
							...replyButtonPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						replyButtonPaddingTablet: {
							...replyButtonPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						replyButtonPaddingMobile: {
							...replyButtonPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleReplyButtonPaddingCombineBtn = () => {
		setAttributes({ replyButtonPaddingLink: !replyButtonPaddingLink });
	};

	const handleReplyButtonPaddingUnitsHandler = (unit) => {
		setAttributes({
			replyButtonPaddingUnits: {
				...replyButtonPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const replyButtonPaddingDesktopWidth = `${replyButtonPaddingDesktop.top}${replyButtonPaddingUnits.Desktop} ${replyButtonPaddingDesktop.right}${replyButtonPaddingUnits.Desktop} ${replyButtonPaddingDesktop.bottom}${replyButtonPaddingUnits.Desktop} ${replyButtonPaddingDesktop.left}${replyButtonPaddingUnits.Desktop}`;
	const replyButtonPaddingTabletWidth = `${replyButtonPaddingTablet.top}${replyButtonPaddingUnits.Tablet} ${replyButtonPaddingTablet.right}${replyButtonPaddingUnits.Tablet} ${replyButtonPaddingTablet.bottom}${replyButtonPaddingUnits.Tablet} ${replyButtonPaddingTablet.left}${replyButtonPaddingUnits.Tablet}`;
	const replyButtonPaddingMobileWidth = `${replyButtonPaddingMobile.top}${replyButtonPaddingUnits.Mobile} ${replyButtonPaddingMobile.right}${replyButtonPaddingUnits.Mobile} ${replyButtonPaddingMobile.bottom}${replyButtonPaddingUnits.Mobile} ${replyButtonPaddingMobile.left}${replyButtonPaddingUnits.Mobile}`;
	/** End padding */

	/** Start Border */
	const handleReplyButtonBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (replyButtonBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						replyButtonBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						replyButtonBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						replyButtonBorderMobile: {
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
						replyButtonBorderDesktop: {
							...replyButtonBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						replyButtonBorderTablet: {
							...replyButtonBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						replyButtonBorderMobile: {
							...replyButtonBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleReplyButtonBorderCombineBtn = () => {
		setAttributes({ replyButtonBorderLink: !replyButtonBorderLink });
	};

	const handleReplyButtonBorderUnitsHandler = (unit) => {
		setAttributes({
			replyButtonBorderUnits: {
				...replyButtonBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const replyButtonBorderDesktopWidth = `${replyButtonBorderDesktop.top}${replyButtonBorderUnits.Desktop} ${replyButtonBorderDesktop.right}${replyButtonBorderUnits.Desktop} ${replyButtonBorderDesktop.bottom}${replyButtonBorderUnits.Desktop} ${replyButtonBorderDesktop.left}${replyButtonBorderUnits.Desktop}`;
	const replyButtonBorderTabletWidth = `${replyButtonBorderTablet.top}${replyButtonBorderUnits.Tablet} ${replyButtonBorderTablet.right}${replyButtonBorderUnits.Tablet} ${replyButtonBorderTablet.bottom}${replyButtonBorderUnits.Tablet} ${replyButtonBorderTablet.left}${replyButtonBorderUnits.Tablet}`;
	const replyButtonBorderMobileWidth = `${replyButtonBorderMobile.top}${replyButtonBorderUnits.Mobile} ${replyButtonBorderMobile.right}${replyButtonBorderUnits.Mobile} ${replyButtonBorderMobile.bottom}${replyButtonBorderUnits.Mobile} ${replyButtonBorderMobile.left}${replyButtonBorderUnits.Mobile}`;
	/** End Border */

	/** Border Radius */
	const handleReplyButtonBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (replyButtonBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						replyButtonBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						replyButtonBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						replyButtonBorderRadiusMobile: {
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
						replyButtonBorderRadiusDesktop: {
							...replyButtonBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						replyButtonBorderRadiusTablet: {
							...replyButtonBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						replyButtonBorderRadiusMobile: {
							...replyButtonBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleReplyButtonBorderRadiusCombineBtn = () => {
		setAttributes({
			replyButtonBorderRadiusLink: !replyButtonBorderRadiusLink,
		});
	};

	const handleReplyButtonBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			replyButtonBorderRadiusUnits: {
				...replyButtonBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const replyButtonBorderRadiusDesktopWidth = `${replyButtonBorderRadiusDesktop.top}${replyButtonBorderRadiusUnits.Desktop} ${replyButtonBorderRadiusDesktop.right}${replyButtonBorderRadiusUnits.Desktop} ${replyButtonBorderRadiusDesktop.bottom}${replyButtonBorderRadiusUnits.Desktop} ${replyButtonBorderRadiusDesktop.left}${replyButtonBorderRadiusUnits.Desktop}`;
	const replyButtonBorderRadiusTabletWidth = `${replyButtonBorderRadiusTablet.top}${replyButtonBorderRadiusUnits.Tablet} ${replyButtonBorderRadiusTablet.right}${replyButtonBorderRadiusUnits.Tablet} ${replyButtonBorderRadiusTablet.bottom}${replyButtonBorderRadiusUnits.Tablet} ${replyButtonBorderRadiusTablet.left}${replyButtonBorderRadiusUnits.Tablet}`;
	const replyButtonBorderRadiusMobileWidth = `${replyButtonBorderRadiusMobile.top}${replyButtonBorderRadiusUnits.Mobile} ${replyButtonBorderRadiusMobile.right}${replyButtonBorderRadiusUnits.Mobile} ${replyButtonBorderRadiusMobile.bottom}${replyButtonBorderRadiusUnits.Mobile} ${replyButtonBorderRadiusMobile.left}${replyButtonBorderRadiusUnits.Mobile}`;
	/** End Border Radius */
	/**  ============== End Reply Button ================== */

	/** Comment Form */
	/** padding */
	const handleCommentFormPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (commentFormPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						commentFormPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						commentFormPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						commentFormPaddingMobile: {
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
						commentFormPaddingDesktop: {
							...commentFormPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						commentFormPaddingTablet: {
							...commentFormPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						commentFormPaddingMobile: {
							...commentFormPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleCommentFormPaddingCombineBtn = () => {
		setAttributes({ commentFormPaddingLink: !commentFormPaddingLink });
	};

	const handleCommentFormPaddingUnitsHandler = (unit) => {
		setAttributes({
			commentFormPaddingUnits: {
				...commentFormPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const commentFormPaddingDesktopWidth = `${commentFormPaddingDesktop.top}${commentFormPaddingUnits.Desktop} ${commentFormPaddingDesktop.right}${commentFormPaddingUnits.Desktop} ${commentFormPaddingDesktop.bottom}${commentFormPaddingUnits.Desktop} ${commentFormPaddingDesktop.left}${commentFormPaddingUnits.Desktop}`;
	const commentFormPaddingTabletWidth = `${commentFormPaddingTablet.top}${commentFormPaddingUnits.Tablet} ${commentFormPaddingTablet.right}${commentFormPaddingUnits.Tablet} ${commentFormPaddingTablet.bottom}${commentFormPaddingUnits.Tablet} ${commentFormPaddingTablet.left}${commentFormPaddingUnits.Tablet}`;
	const commentFormPaddingMobileWidth = `${commentFormPaddingMobile.top}${commentFormPaddingUnits.Mobile} ${commentFormPaddingMobile.right}${commentFormPaddingUnits.Mobile} ${commentFormPaddingMobile.bottom}${commentFormPaddingUnits.Mobile} ${commentFormPaddingMobile.left}${commentFormPaddingUnits.Mobile}`;
	/** End padding */

	/** Start Border */
	const handleCommentFormBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (commentFormBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						commentFormBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						commentFormBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						commentFormBorderMobile: {
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
						commentFormBorderDesktop: {
							...commentFormBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						commentFormBorderTablet: {
							...commentFormBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						commentFormBorderMobile: {
							...commentFormBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleCommentFormBorderCombineBtn = () => {
		setAttributes({ commentFormBorderLink: !commentFormBorderLink });
	};

	const handleCommentFormBorderUnitsHandler = (unit) => {
		setAttributes({
			commentFormBorderUnits: {
				...commentFormBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const commentFormBorderDesktopWidth = `${commentFormBorderDesktop.top}${commentFormBorderUnits.Desktop} ${commentFormBorderDesktop.right}${commentFormBorderUnits.Desktop} ${commentFormBorderDesktop.bottom}${commentFormBorderUnits.Desktop} ${commentFormBorderDesktop.left}${commentFormBorderUnits.Desktop}`;
	const commentFormBorderTabletWidth = `${commentFormBorderTablet.top}${commentFormBorderUnits.Tablet} ${commentFormBorderTablet.right}${commentFormBorderUnits.Tablet} ${commentFormBorderTablet.bottom}${commentFormBorderUnits.Tablet} ${commentFormBorderTablet.left}${commentFormBorderUnits.Tablet}`;
	const commentFormBorderMobileWidth = `${commentFormBorderMobile.top}${commentFormBorderUnits.Mobile} ${commentFormBorderMobile.right}${commentFormBorderUnits.Mobile} ${commentFormBorderMobile.bottom}${commentFormBorderUnits.Mobile} ${commentFormBorderMobile.left}${commentFormBorderUnits.Mobile}`;
	/** End Border */

	/** Border Radius */
	const handleCommentFormBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (commentFormBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						commentFormBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						commentFormBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						commentFormBorderRadiusMobile: {
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
						commentFormBorderRadiusDesktop: {
							...commentFormBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						commentFormBorderRadiusTablet: {
							...commentFormBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						commentFormBorderRadiusMobile: {
							...commentFormBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleCommentFormBorderRadiusCombineBtn = () => {
		setAttributes({
			commentFormBorderRadiusLink: !commentFormBorderRadiusLink,
		});
	};

	const handleCommentFormBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			commentFormBorderRadiusUnits: {
				...commentFormBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const commentFormBorderRadiusDesktopWidth = `${commentFormBorderRadiusDesktop.top}${commentFormBorderRadiusUnits.Desktop} ${commentFormBorderRadiusDesktop.right}${commentFormBorderRadiusUnits.Desktop} ${commentFormBorderRadiusDesktop.bottom}${commentFormBorderRadiusUnits.Desktop} ${commentFormBorderRadiusDesktop.left}${commentFormBorderRadiusUnits.Desktop}`;
	const commentFormBorderRadiusTabletWidth = `${commentFormBorderRadiusTablet.top}${commentFormBorderRadiusUnits.Tablet} ${commentFormBorderRadiusTablet.right}${commentFormBorderRadiusUnits.Tablet} ${commentFormBorderRadiusTablet.bottom}${commentFormBorderRadiusUnits.Tablet} ${commentFormBorderRadiusTablet.left}${commentFormBorderRadiusUnits.Tablet}`;
	const commentFormBorderRadiusMobileWidth = `${commentFormBorderRadiusMobile.top}${commentFormBorderRadiusUnits.Mobile} ${commentFormBorderRadiusMobile.right}${commentFormBorderRadiusUnits.Mobile} ${commentFormBorderRadiusMobile.bottom}${commentFormBorderRadiusUnits.Mobile} ${commentFormBorderRadiusMobile.left}${commentFormBorderRadiusUnits.Mobile}`;
	/** End Border Radius */
	/**  ============== End Comment Form ================== */


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
						${showCommentForm ? `
							.${blockId} .fb-comments-list {
                padding-bottom: 40px;
							}
							`
							: ""
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
								display: inline;
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
									color: #1e1e1e;
                font-size: 18px;
                font-weight: 600;
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

				${
					showCommentTitle 
					? `
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

				`
					: ""
				}


				 .${blockId} .fb-comments-list {
						${
							commentListBottomSpacing.Desktop
								? `padding-bottom: ${commentListBottomSpacing.Desktop}${commentListBottomSpacingUnits.Desktop};`
								: ""
						}
				 }

				 .${blockId} .fb-comments-list .fb-comment {
						${
							avatarGap.Desktop 
							? `gap: ${avatarGap.Desktop}${avatarGapUnits.Desktop};`
							: ""
						}
				 }

				.${blockId} .fb-comments-list .fb-comment.fb-comment-parent{
						${
							postCommentPaddingDesktopWidth && postCommentPaddingDesktop.top
								? `padding: ${postCommentPaddingDesktopWidth};`
								: ""
						}
				}

				.${blockId} .fb-comments-list .fb-comment.fb-comment-child{
						${
							childCommentPaddingDesktopWidth && postCommentPaddingDesktop.top
								? `padding: ${childCommentPaddingDesktopWidth};`
								: ""
						}

						 ${
								nestedIndentation.Desktop
									? `padding-left: ${nestedIndentation.Desktop}${nestedIndentationUnits.Desktop};`
									: ""
							}
				}

				.${blockId} .fb-comments-list .fb-comment .fb-comment-avatar{
						${
							avatarPaddingDesktopWidth && avatarPaddingDesktop.top
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
								avatarBorderRadiusDesktopWidth && avatarBorderRadiusDesktop.top
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
						${
							avatarSize.Desktop
								? `width: ${avatarSize.Desktop}${avatarSizeUnits.Desktop};
							height: ${avatarSize.Desktop}${avatarSizeUnits.Desktop};
							`
								: ""
						}
				}

				.${blockId} .fb-comments-list .fb-comment-child .fb-comment-avatar{
						${
							avatarSize.Desktop
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
							authorGlobalTypoSwitcher.fontFamily === false && authorFontFamily
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
							authorGlobalTypoSwitcher.fontWeight === false && authorFontWeight
								? `font-weight: ${authorFontWeight};`
								: ""
						}
						${
							authorGlobalTypoSwitcher.fontStyle === false && authorFontStyle
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
							messageGlobalTypoSwitcher.fontStyle === false && messageFontStyle
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

			
			.${blockId} .fb-comments-list .fb-comment-body .fb-comment-reply	{

			
            ${replyButtonColor ? `color: ${replyButtonColor};` : ""}


            ${
							replyButtonGlobalTypoSwitcher.fontFamily === true &&
							replyButtonGlobalTypographyData.fontFamily
								? `font-family: ${replyButtonGlobalTypographyData.fontFamily};`
								: ""
						}
            ${
							replyButtonGlobalTypoSwitcher.fontSize === true &&
							replyButtonGlobalTypographyData.fontSize
								? `font-size: ${replyButtonGlobalTypographyData.fontSize};`
								: ""
						}
            ${
							replyButtonGlobalTypoSwitcher.fontWeight === true &&
							replyButtonGlobalTypographyData.fontWeight
								? `font-weight: ${replyButtonGlobalTypographyData.fontWeight};`
								: ""
						}
            ${
							replyButtonGlobalTypoSwitcher.fontStyle === true &&
							replyButtonGlobalTypographyData.fontStyle
								? `font-style: ${replyButtonGlobalTypographyData.fontStyle};`
								: ""
						}
            ${
							replyButtonGlobalTypoSwitcher.textTransform === true &&
							replyButtonGlobalTypographyData.textTransform
								? `text-transform: ${replyButtonGlobalTypographyData.textTransform};`
								: ""
						}
            ${
							replyButtonGlobalTypoSwitcher.textDecoration === true &&
							replyButtonGlobalTypographyData.textDecoration
								? `text-decoration: ${replyButtonGlobalTypographyData.textDecoration};`
								: ""
						}
            ${
							replyButtonGlobalTypoSwitcher.letterSpacing === true &&
							replyButtonGlobalTypographyData.letterSpacing
								? `letter-spacing: ${replyButtonGlobalTypographyData.letterSpacing};`
								: ""
						}
            ${
							replyButtonGlobalTypoSwitcher.lineHeight === true &&
							replyButtonGlobalTypographyData.lineHeight
								? `line-height: ${replyButtonGlobalTypographyData.lineHeight};`
								: ""
						}

						${
							replyButtonGlobalTypoSwitcher.fontFamily === false &&
							replyButtonFontFamily
								? `font-family: ${replyButtonFontFamily};`
								: ""
						}
						${
							replyButtonGlobalTypoSwitcher.fontSize === false &&
							replyButtonFontSize.Desktop
								? `font-size: ${replyButtonFontSize.Desktop}${replyButtonFontSizeUnits.Desktop};`
								: ""
						}
						${
							replyButtonGlobalTypoSwitcher.fontWeight === false &&
							replyButtonFontWeight
								? `font-weight: ${replyButtonFontWeight};`
								: ""
						}
						${
							replyButtonGlobalTypoSwitcher.fontStyle === false &&
							replyButtonFontStyle
								? `font-style: ${replyButtonFontStyle};`
								: ""
						}
						${
							replyButtonGlobalTypoSwitcher.textTransform === false &&
							replyButtonTextTransform
								? `text-transform: ${replyButtonTextTransform};`
								: ""
						}
						${
							replyButtonGlobalTypoSwitcher.textDecoration === false &&
							replyButtonTextDecoration
								? `text-decoration: ${replyButtonTextDecoration};`
								: ""
						}
						${
							replyButtonGlobalTypoSwitcher.letterSpacing === false &&
							replyButtonLetterSpacing.Desktop
								? `letter-spacing: ${replyButtonLetterSpacing.Desktop}${replyButtonLetterSpacingUnits.Desktop};`
								: ""
						}

						${
							replyButtonGlobalTypoSwitcher.lineHeight === false &&
							replyButtonLineHeight.Desktop
								? `line-height: ${replyButtonLineHeight.Desktop}${replyButtonLineHeightUnits.Desktop};`
								: ""
						}

										${
											replyButtonNormalBackgroundType === "gradient"
												? `
									${
										replyButtonNormalCustomGradientSwitcher &&
										replyButtonNormalCustomGradientInputValue
											? `background: ${replyButtonNormalCustomGradientInputValue};`
											: `background: ${replyButtonNormalGradientColor};`
									}
								`
												: `
									${
										replyButtonNormalClassicColor
											? `background: ${replyButtonNormalClassicColor};`
											: ""
									}
							`
										}

								
											${
												replyButtonPaddingDesktopWidth &&
												replyButtonPaddingDesktop.top
													? `padding: ${replyButtonPaddingDesktopWidth};`
													: ""
											}

							${replyButtonBorder ? `border: ${replyButtonBorder};` : ""}
							${
								replyButtonBorderDesktopWidth && replyButtonBorderDesktop.top
									? `border-width: ${replyButtonBorderDesktopWidth};`
									: ""
							}
							${
								replyButtonBorderRadiusDesktopWidth &&
								replyButtonBorderRadiusDesktop.top
									? `border-radius: ${replyButtonBorderRadiusDesktopWidth};`
									: ""
							}
							${replyButtonBorderColor ? `border-color: ${replyButtonBorderColor};` : ""}
            	${
								replyButtonBoxShadowCssValue
									? `box-shadow: ${replyButtonBoxShadowCssValue};`
									: ""
							}

			}
			

				.${blockId} .fb-comments-list .fb-comment-body .fb-comment-reply:hover {
								${replyButtonHoverColor ? `color: ${replyButtonHoverColor};` : ""}
							${
								replyButtonHoverBackgroundType === "gradient"
									? `  
							${
								replyButtonHoverCustomGradientSwitcher &&
								replyButtonHoverCustomGradientInputValue
									? `background: ${replyButtonHoverCustomGradientInputValue};`
									: `background: ${replyButtonHoverGradientColor};`
							}
							`
									: `
									${
										replyButtonHoverClassicColor
											? `background: ${replyButtonHoverClassicColor};`
											: ""
									}
							`
							}
							${
								replyButtonBorderHoverColor
									? `border-color: ${replyButtonBorderHoverColor};`
									: ""
							}
            	${
								replyButtonBoxShadowHoverCssValue
									? `box-shadow: ${replyButtonBoxShadowHoverCssValue};`
									: ""
							}
				}

				/** comment form */ 
								${showCommentForm
					? `

					.${blockId} .fb-comment-form	{

										${
											commentFormNormalBackgroundType === "gradient"
												? `
									${
										commentFormNormalCustomGradientSwitcher &&
										commentFormNormalCustomGradientInputValue
											? `background: ${commentFormNormalCustomGradientInputValue};`
											: `background: ${commentFormNormalGradientColor};`
									}
								`
												: `
									${
										commentFormNormalClassicColor
											? `background: ${commentFormNormalClassicColor};`
											: ""
									}
							`
										}

								
											${
												commentFormPaddingDesktopWidth &&
												commentFormPaddingDesktop.top
													? `padding: ${commentFormPaddingDesktopWidth};`
													: ""
											}

							${commentFormBorder ? `border: ${commentFormBorder};` : ""}
							${
								commentFormBorderDesktopWidth && commentFormBorderDesktop.top
									? `border-width: ${commentFormBorderDesktopWidth};`
									: ""
							}
							${
								commentFormBorderRadiusDesktopWidth &&
								commentFormBorderRadiusDesktop.top
									? `border-radius: ${commentFormBorderRadiusDesktopWidth};`
									: ""
							}
							${commentFormBorderColor ? `border-color: ${commentFormBorderColor};` : ""}
            	${
								commentFormBoxShadowCssValue
									? `box-shadow: ${commentFormBoxShadowCssValue};`
									: ""
							}

			}
			

				.${blockId} .fb-comment-form:hover {
							${
								commentFormHoverBackgroundType === "gradient"
									? `  
							${
								commentFormHoverCustomGradientSwitcher &&
								commentFormHoverCustomGradientInputValue
									? `background: ${commentFormHoverCustomGradientInputValue};`
									: `background: ${commentFormHoverGradientColor};`
							}
							`
									: `
									${
										commentFormHoverClassicColor
											? `background: ${commentFormHoverClassicColor};`
											: ""
									}
							`
							}
						
				}

					
					.${blockId} .fb-comment-form .fb-comment-form-header {
										${
							formTitleSpacing.Desktop
								? `margin-bottom: ${formTitleSpacing.Desktop}${formTitleSpacingUnits.Desktop};`
								: ""
						}
					}

										.${blockId} .fb-comment-form .fb-comment-form-header .fb-reply-title {
            ${formTitleColor ? `color: ${formTitleColor};` : ""}


            ${
							formTitleGlobalTypoSwitcher.fontFamily === true &&
							formTitleGlobalTypographyData.fontFamily
								? `font-family: ${formTitleGlobalTypographyData.fontFamily};`
								: ""
						}
            ${
							formTitleGlobalTypoSwitcher.fontSize === true &&
							formTitleGlobalTypographyData.fontSize
								? `font-size: ${formTitleGlobalTypographyData.fontSize};`
								: ""
						}
            ${
							formTitleGlobalTypoSwitcher.fontWeight === true &&
							formTitleGlobalTypographyData.fontWeight
								? `font-weight: ${formTitleGlobalTypographyData.fontWeight};`
								: ""
						}
            ${
							formTitleGlobalTypoSwitcher.fontStyle === true &&
							formTitleGlobalTypographyData.fontStyle
								? `font-style: ${formTitleGlobalTypographyData.fontStyle};`
								: ""
						}
            ${
							formTitleGlobalTypoSwitcher.textTransform === true &&
							formTitleGlobalTypographyData.textTransform
								? `text-transform: ${formTitleGlobalTypographyData.textTransform};`
								: ""
						}
            ${
							formTitleGlobalTypoSwitcher.textDecoration === true &&
							formTitleGlobalTypographyData.textDecoration
								? `text-decoration: ${formTitleGlobalTypographyData.textDecoration};`
								: ""
						}
            ${
							formTitleGlobalTypoSwitcher.letterSpacing === true &&
							formTitleGlobalTypographyData.letterSpacing
								? `letter-spacing: ${formTitleGlobalTypographyData.letterSpacing};`
								: ""
						}
            ${
							formTitleGlobalTypoSwitcher.lineHeight === true &&
							formTitleGlobalTypographyData.lineHeight
								? `line-height: ${formTitleGlobalTypographyData.lineHeight};`
								: ""
						}

						${
							formTitleGlobalTypoSwitcher.fontFamily === false &&
							formTitleFontFamily
								? `font-family: ${formTitleFontFamily};`
								: ""
						}
						${
							formTitleGlobalTypoSwitcher.fontSize === false &&
							formTitleFontSize.Desktop
								? `font-size: ${formTitleFontSize.Desktop}${formTitleFontSizeUnits.Desktop};`
								: ""
						}
						${
							formTitleGlobalTypoSwitcher.fontWeight === false &&
							formTitleFontWeight
								? `font-weight: ${formTitleFontWeight};`
								: ""
						}
						${
							formTitleGlobalTypoSwitcher.fontStyle === false &&
							formTitleFontStyle
								? `font-style: ${formTitleFontStyle};`
								: ""
						}
						${
							formTitleGlobalTypoSwitcher.textTransform === false &&
							formTitleTextTransform
								? `text-transform: ${formTitleTextTransform};`
								: ""
						}
						${
							formTitleGlobalTypoSwitcher.textDecoration === false &&
							formTitleTextDecoration
								? `text-decoration: ${formTitleTextDecoration};`
								: ""
						}
						${
							formTitleGlobalTypoSwitcher.letterSpacing === false &&
							formTitleLetterSpacing.Desktop
								? `letter-spacing: ${formTitleLetterSpacing.Desktop}${formTitleLetterSpacingUnits.Desktop};`
								: ""
						}
						${
							formTitleGlobalTypoSwitcher.lineHeight === false &&
							formTitleLineHeight.Desktop
								? `line-height: ${formTitleLineHeight.Desktop}${formTitleLineHeightUnits.Desktop};`
								: ""
						}

			}

							.${blockId} .fb-comment-form .fb-comment-form-header .fb-cancel-reply {
            ${cancelReplyColor ? `color: ${cancelReplyColor};` : ""}


            ${
							cancelReplyGlobalTypoSwitcher.fontFamily === true &&
							cancelReplyGlobalTypographyData.fontFamily
								? `font-family: ${cancelReplyGlobalTypographyData.fontFamily};`
								: ""
						}
            ${
							cancelReplyGlobalTypoSwitcher.fontSize === true &&
							cancelReplyGlobalTypographyData.fontSize
								? `font-size: ${cancelReplyGlobalTypographyData.fontSize};`
								: ""
						}
            ${
							cancelReplyGlobalTypoSwitcher.fontWeight === true &&
							cancelReplyGlobalTypographyData.fontWeight
								? `font-weight: ${cancelReplyGlobalTypographyData.fontWeight};`
								: ""
						}
            ${
							cancelReplyGlobalTypoSwitcher.fontStyle === true &&
							cancelReplyGlobalTypographyData.fontStyle
								? `font-style: ${cancelReplyGlobalTypographyData.fontStyle};`
								: ""
						}
            ${
							cancelReplyGlobalTypoSwitcher.textTransform === true &&
							cancelReplyGlobalTypographyData.textTransform
								? `text-transform: ${cancelReplyGlobalTypographyData.textTransform};`
								: ""
						}
            ${
							cancelReplyGlobalTypoSwitcher.textDecoration === true &&
							cancelReplyGlobalTypographyData.textDecoration
								? `text-decoration: ${cancelReplyGlobalTypographyData.textDecoration};`
								: ""
						}
            ${
							cancelReplyGlobalTypoSwitcher.letterSpacing === true &&
							cancelReplyGlobalTypographyData.letterSpacing
								? `letter-spacing: ${cancelReplyGlobalTypographyData.letterSpacing};`
								: ""
						}
            ${
							cancelReplyGlobalTypoSwitcher.lineHeight === true &&
							cancelReplyGlobalTypographyData.lineHeight
								? `line-height: ${cancelReplyGlobalTypographyData.lineHeight};`
								: ""
						}

						${
							cancelReplyGlobalTypoSwitcher.fontFamily === false &&
							cancelReplyFontFamily
								? `font-family: ${cancelReplyFontFamily};`
								: ""
						}
						${
							cancelReplyGlobalTypoSwitcher.fontSize === false &&
							cancelReplyFontSize.Desktop
								? `font-size: ${cancelReplyFontSize.Desktop}${cancelReplyFontSizeUnits.Desktop};`
								: ""
						}
						${
							cancelReplyGlobalTypoSwitcher.fontWeight === false &&
							cancelReplyFontWeight
								? `font-weight: ${cancelReplyFontWeight};`
								: ""
						}
						${
							cancelReplyGlobalTypoSwitcher.fontStyle === false &&
							cancelReplyFontStyle
								? `font-style: ${cancelReplyFontStyle};`
								: ""
						}
						${
							cancelReplyGlobalTypoSwitcher.textTransform === false &&
							cancelReplyTextTransform
								? `text-transform: ${cancelReplyTextTransform};`
								: ""
						}
						${
							cancelReplyGlobalTypoSwitcher.textDecoration === false &&
							cancelReplyTextDecoration
								? `text-decoration: ${cancelReplyTextDecoration};`
								: ""
						}
						${
							cancelReplyGlobalTypoSwitcher.letterSpacing === false &&
							cancelReplyLetterSpacing.Desktop
								? `letter-spacing: ${cancelReplyLetterSpacing.Desktop}${cancelReplyLetterSpacingUnits.Desktop};`
								: ""
						}
						${
							cancelReplyGlobalTypoSwitcher.lineHeight === false &&
							cancelReplyLineHeight.Desktop
								? `line-height: ${cancelReplyLineHeight.Desktop}${cancelReplyLineHeightUnits.Desktop};`
								: ""
						}

			}

				.${blockId} .fb-comment-form .fb-comment-form-header .fb-cancel-reply:hover{
							${cancelReplyHoverColor ? `color: ${cancelReplyHoverColor};` : ""}
				}

					
					`
					: ""
				}

								${
					showCommentForm
					? `
				.${blockId} .fb-comment-form .fb-logged-in-as {
            ${loggedInTextColor ? `color: ${loggedInTextColor};` : ""}

            ${
							loggedInTextGlobalTypoSwitcher.fontFamily === true &&
							loggedInTextGlobalTypographyData.fontFamily
								? `font-family: ${loggedInTextGlobalTypographyData.fontFamily};`
								: ""
						}
            ${
							loggedInTextGlobalTypoSwitcher.fontSize === true &&
							loggedInTextGlobalTypographyData.fontSize
								? `font-size: ${loggedInTextGlobalTypographyData.fontSize};`
								: ""
						}
            ${
							loggedInTextGlobalTypoSwitcher.fontWeight === true &&
							loggedInTextGlobalTypographyData.fontWeight
								? `font-weight: ${loggedInTextGlobalTypographyData.fontWeight};`
								: ""
						}
            ${
							loggedInTextGlobalTypoSwitcher.fontStyle === true &&
							loggedInTextGlobalTypographyData.fontStyle
								? `font-style: ${loggedInTextGlobalTypographyData.fontStyle};`
								: ""
						}
            ${
							loggedInTextGlobalTypoSwitcher.textTransform === true &&
							loggedInTextGlobalTypographyData.textTransform
								? `text-transform: ${loggedInTextGlobalTypographyData.textTransform};`
								: ""
						}
            ${
							loggedInTextGlobalTypoSwitcher.textDecoration === true &&
							loggedInTextGlobalTypographyData.textDecoration
								? `text-decoration: ${loggedInTextGlobalTypographyData.textDecoration};`
								: ""
						}
            ${
							loggedInTextGlobalTypoSwitcher.letterSpacing === true &&
							loggedInTextGlobalTypographyData.letterSpacing
								? `letter-spacing: ${loggedInTextGlobalTypographyData.letterSpacing};`
								: ""
						}
            ${
							loggedInTextGlobalTypoSwitcher.lineHeight === true &&
							loggedInTextGlobalTypographyData.lineHeight
								? `line-height: ${loggedInTextGlobalTypographyData.lineHeight};`
								: ""
						}

						${
							loggedInTextGlobalTypoSwitcher.fontFamily === false &&
							loggedInTextFontFamily
								? `font-family: ${loggedInTextFontFamily};`
								: ""
						}
						${
							loggedInTextGlobalTypoSwitcher.fontSize === false &&
							loggedInTextFontSize.Desktop
								? `font-size: ${loggedInTextFontSize.Desktop}${loggedInTextFontSizeUnits.Desktop};`
								: ""
						}
						${
							loggedInTextGlobalTypoSwitcher.fontWeight === false &&
							loggedInTextFontWeight
								? `font-weight: ${loggedInTextFontWeight};`
								: ""
						}
						${
							loggedInTextGlobalTypoSwitcher.fontStyle === false &&
							loggedInTextFontStyle
								? `font-style: ${loggedInTextFontStyle};`
								: ""
						}
						${
							loggedInTextGlobalTypoSwitcher.textTransform === false &&
							loggedInTextTextDecoration
								? `text-transform: ${loggedInTextTextTransform};`
								: ""
						}
						${
							loggedInTextGlobalTypoSwitcher.textDecoration === false &&
							loggedInTextTextDecoration
								? `text-decoration: ${loggedInTextTextDecoration};`
								: ""
						}
						${
							loggedInTextGlobalTypoSwitcher.letterSpacing === false &&
							loggedInTextLetterSpacing.Desktop
								? `letter-spacing: ${loggedInTextLetterSpacing.Desktop}${loggedInTextLetterSpacingUnits.Desktop};`
								: ""
						}
						${
							loggedInTextGlobalTypoSwitcher.lineHeight === false &&
							loggedInTextLineHeight.Desktop
								? `line-height: ${loggedInTextLineHeight.Desktop}${loggedInTextLineHeightUnits.Desktop};`
								: ""
						}

						${
							formInfoSpacing.Desktop
								? `margin-bottom: ${formInfoSpacing.Desktop}${formInfoSpacingUnits.Desktop};`
								: ""
						}


																${
											formInfoNormalBackgroundType === "gradient"
												? `
									${
										formInfoNormalCustomGradientSwitcher &&
										formInfoNormalCustomGradientInputValue
											? `background: ${formInfoNormalCustomGradientInputValue};`
											: `background: ${formInfoNormalGradientColor};`
									}
								`
												: `
									${
										formInfoNormalClassicColor
											? `background: ${formInfoNormalClassicColor};`
											: ""
									}
							`
										}

								

						

			}

			

				.${blockId} .fb-comment-form  .fb-logged-in-as:hover {
					${loggedInTextHoverColor ? `color: ${loggedInTextHoverColor};` : ""}

												${
								formInfoHoverBackgroundType === "gradient"
									? `  
							${
								formInfoHoverCustomGradientSwitcher &&
								formInfoHoverCustomGradientInputValue
									? `background: ${formInfoHoverCustomGradientInputValue};`
									: `background: ${formInfoHoverGradientColor};`
							}
							`
									: `
									${
										formInfoHoverClassicColor
											? `background: ${formInfoHoverClassicColor};`
											: ""
									}
							`
							}
				}

				.${blockId} .fb-comment-form .fb-logged-is-as a:hover {
						${loggedInLinkHoverColor ? `color : ${loggedInLinkHoverColor};` : ""}
				}
				`
					: ""
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

					${
					showCommentTitle 
					? `
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
									`
					: ""
				}

										 .${blockId} .fb-comments-list {
						${
							commentListBottomSpacing.Tablet
								? `padding-bottom: ${commentListBottomSpacing.Tablet}${commentListBottomSpacingUnits.Tablet};`
								: ""
						}
				 }

						.${blockId} .fb-comments-list .fb-comment{
								${
									postCommentPaddingTabletWidth &&
									postCommentPaddingTabletWidth.top
										? `padding : ${postCommentPaddingTabletWidth};`
										: ""
								}

								${avatarGap.Tablet
									? `gap: ${avatarGap.Tablet}${avatarGapUnits.Tablet};`
									: ""
								}
						}

						.${blockId} .fb-comments-list .fb-comment.fb-comment-child{
								${
									childCommentPaddingTabletWidth &&
									postCommentPaddingTabletWidth.top
										? `padding : ${childCommentPaddingTabletWidth};`
										: ""
								}

														 ${
																nestedIndentation.Tablet
																	? `padding-left: ${nestedIndentation.Tablet}${nestedIndentationUnits.Tablet}`
																	: ""
															}
						}	

										.${blockId} .fb-comments-list .fb-comment .fb-comment-avatar{
						${
							avatarPaddingTabletWidth && avatarPaddingTablet.top
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
									avatarBorderRadiusTabletWidth && avatarBorderRadiusTablet.top
										? `border-radius: ${avatarBorderRadiusTabletWidth};`
										: ""
								}
				}

				
				.${blockId} .fb-comments-list .fb-comment-parent .fb-comment-avatar{
						${
							avatarSize.Tablet
								? `width: ${avatarSize.Tablet}${avatarSizeUnits.Tablet};
							height: ${avatarSize.Tablet}${avatarSizeUnits.Tablet};
							`
								: ""
						}
				}

				.${blockId} .fb-comments-list .fb-comment-child .fb-comment-avatar{
						${
							avatarSize.Tablet
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

							.${blockId} .fb-comments-list .fb-comment-body .fb-comment-reply {
							  ${
									replyButtonGlobalTypoSwitcher.fontSize === false &&
									replyButtonFontSize.Tablet
										? `font-size: ${replyButtonFontSize.Tablet}${replyButtonFontSizeUnits.Tablet};`
										: ""
								}
                ${
									replyButtonGlobalTypoSwitcher.letterSpacing === false &&
									replyButtonLetterSpacing.Tablet
										? `letter-spacing: ${replyButtonLetterSpacing.Tablet}${replyButtonLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									replyButtonGlobalTypoSwitcher.lineHeight === false &&
									replyButtonLineHeight.Tablet
										? `line-height: ${replyButtonLineHeight.Tablet}${replyButtonLineHeightUnits.Tablet};`
										: ""
								}

									${
										replyButtonPaddingTabletWidth &&
										replyButtonPaddingTablet.top
											? `padding: ${replyButtonPaddingTabletWidth};`
											: ""
									}
								 ${
										replyButtonBorderTabletWidth && replyButtonBorderTablet.top
											? `border-width: ${replyButtonBorderTabletWidth};`
											: ""
									}
                ${
									replyButtonBorderRadiusTabletWidth &&
									replyButtonBorderRadiusTablet.top
										? `border-radius: ${replyButtonBorderRadiusTabletWidth};`
										: ""
								}

						}


						${showCommentForm 
							? `
							
								.${blockId} .fb-comment-form {
									${
										commentFormPaddingTabletWidth &&
										commentFormPaddingTablet.top
											? `padding: ${commentFormPaddingTabletWidth};`
											: ""
									}
								 ${
										commentFormBorderTabletWidth && commentFormBorderTablet.top
											? `border-width: ${commentFormBorderTabletWidth};`
											: ""
									}
                ${
									commentFormBorderRadiusTabletWidth &&
									commentFormBorderRadiusTablet.top
										? `border-radius: ${commentFormBorderRadiusTabletWidth};`
										: ""
								}

						}

							.${blockId} .fb-comment-form .fb-comment-form-header {
							
																${
										formTitleSpacing.Tablet
											? `margin-bottom: ${formTitleSpacing.Tablet}${formTitleSpacingUnits.Tablet};`
											: ""
									}

							}

								.${blockId} .fb-comment-form .fb-comment-form-header .fb-reply-title {
							  ${
									formTitleGlobalTypoSwitcher.fontSize === false &&
									formTitleFontSize.Tablet
										? `font-size: ${formTitleFontSize.Tablet}${formTitleFontSizeUnits.Tablet};`
										: ""
								}
                ${
									formTitleGlobalTypoSwitcher.letterSpacing === false &&
									formTitleLetterSpacing.Tablet
										? `letter-spacing: ${formTitleLetterSpacing.Tablet}${formTitleLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									formTitleGlobalTypoSwitcher.lineHeight === false &&
									formTitleLineHeight.Tablet
										? `line-height: ${formTitleLineHeight.Tablet}${formTitleLineHeightUnits.Tablet};`
										: ""
								}

						}
								.${blockId} .fb-comment-form .fb-comment-form-header .fb-cancel-reply {
							  ${
									cancelReplyGlobalTypoSwitcher.fontSize === false &&
									cancelReplyFontSize.Tablet
										? `font-size: ${cancelReplyFontSize.Tablet}${cancelReplyFontSizeUnits.Tablet};`
										: ""
								}
                ${
									cancelReplyGlobalTypoSwitcher.letterSpacing === false &&
									cancelReplyLetterSpacing.Tablet
										? `letter-spacing: ${cancelReplyLetterSpacing.Tablet}${cancelReplyLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									cancelReplyGlobalTypoSwitcher.lineHeight === false &&
									cancelReplyLineHeight.Tablet
										? `line-height: ${cancelReplyLineHeight.Tablet}${cancelReplyLineHeightUnits.Tablet};`
										: ""
								}

						}

						.${blockId} .fb-comment-form .fb-logged-in-as  {
							  ${
									loggedInTextGlobalTypoSwitcher.fontSize === false &&
									loggedInTextFontSize.Tablet
										? `font-size: ${loggedInTextFontSize.Tablet}${loggedInTextFontSizeUnits.Tablet};`
										: ""
								}
                ${
									loggedInTextGlobalTypoSwitcher.letterSpacing === false &&
									loggedInTextLetterSpacing.Tablet
										? `letter-spacing: ${loggedInTextLetterSpacing.Tablet}${loggedInTextLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									loggedInTextGlobalTypoSwitcher.lineHeight === false &&
									loggedInTextLineHeight.Tablet
										? `line-height: ${loggedInTextLineHeight.Tablet}${loggedInTextLineHeightUnits.Tablet};`
										: ""
								}

									${
										formInfoSpacing.Tablet
											? `margin-bottom: ${formInfoSpacing.Tablet}${formInfoSpacingUnits.Tablet};`
											: ""
									}

						}

							`
							: ""
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
				
				/*===========================  Mobile Styles ===========================  */
				@media only screen and (max-width: 767px) {

				${
					showCommentTitle 
					? `
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

							`
					: ""
				}

									 .${blockId} .fb-comments-list {
						${
							commentListBottomSpacing.Mobile
								? `padding-bottom: ${commentListBottomSpacing.Mobile}${commentListBottomSpacingUnits.Mobile};`
								: ""
						}
				 }

					.${blockId} .fb-comments-list .fb-comment{
							${
								postCommentPaddingMobileWidth && postCommentPaddingMobile.top
									? `padding: ${postCommentPaddingMobileWidth};`
									: ""
							}

							${avatarGap.Mobile
								? `gap: ${avatarGap.Mobile}${avatarGapUnits.Mobile};`
								: ""
							}
					}	

					.${blockId} .fb-comments-list .fb-comment.fb-comment-child{
							
							${
								childCommentPaddingMobileWidth && postCommentPaddingMobile.top
									? `padding: ${childCommentPaddingMobileWidth}`
									: ""
							}

													 ${
															nestedIndentation.Mobile
																? `padding-left: ${nestedIndentation.Mobile}${nestedIndentationUnits.Mobile}`
																: ""
														}

					}

									.${blockId} .fb-comments-list .fb-comment .fb-comment-avatar{
						${
							avatarPaddingMobileWidth && avatarPaddingMobile.top
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
									avatarBorderRadiusMobileWidth && avatarBorderRadiusMobile.top
										? `border-radius: ${avatarBorderRadiusMobileWidth};`
										: ""
								}
				}

				
				.${blockId} .fb-comments-list .fb-comment-parent .fb-comment-avatar{
						${
							avatarSize.Mobile
								? `width: ${avatarSize.Mobile}${avatarSizeUnits.Mobile};
							height: ${avatarSize.Mobile}${avatarSizeUnits.Mobile};
							`
								: ""
						}
				}

				.${blockId} .fb-comments-list .fb-comment-child .fb-comment-avatar{
						${
							avatarSize.Mobile
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

										.${blockId} .fb-comments-list .fb-comment-body .fb-comment-reply {

					  ${
							replyButtonGlobalTypoSwitcher.fontSize === false &&
							replyButtonFontSize.Mobile
								? `font-size: ${replyButtonFontSize.Mobile}${replyButtonFontSizeUnits.Mobile};`
								: ""
						}
						${
							replyButtonGlobalTypoSwitcher.letterSpacing === false &&
							replyButtonLetterSpacing.Mobile
								? `letter-spacing: ${replyButtonLetterSpacing.Mobile}${replyButtonLetterSpacingUnits.Mobile};`
								: ""
						}
						${
							replyButtonGlobalTypoSwitcher.lineHeight === false &&
							replyButtonLineHeight.Mobile
								? `line-height: ${replyButtonLineHeight.Mobile}${replyButtonLineHeightUnits.Mobile};`
								: ""
						}

										${
											replyButtonPaddingMobileWidth &&
											replyButtonPaddingMobile.top
												? `padding: ${replyButtonPaddingMobileWidth};`
												: ""
										}
							 ${
									replyButtonBorderMobileWidth && replyButtonBorderMobile.top
										? `border-width: ${replyButtonBorderMobileWidth};`
										: ""
								}
                ${
									replyButtonBorderRadiusMobileWidth &&
									replyButtonBorderRadiusMobile.top
										? `border-radius: ${replyButtonBorderRadiusMobileWidth};`
										: ""
								}

					}


					${showCommentForm 
						? `


							.${blockId} .fb-comment-form {

				

										${
											commentFormPaddingMobileWidth &&
											commentFormPaddingMobile.top
												? `padding: ${commentFormPaddingMobileWidth};`
												: ""
										}
							 ${
									commentFormBorderMobileWidth && commentFormBorderMobile.top
										? `border-width: ${commentFormBorderMobileWidth};`
										: ""
								}
                ${
									commentFormBorderRadiusMobileWidth &&
									commentFormBorderRadiusMobile.top
										? `border-radius: ${commentFormBorderRadiusMobileWidth};`
										: ""
								}

					}

						.${blockId} .fb-comment-form .fb-comment-form-header {
						
															${
										formTitleSpacing.Mobile
											? `margin-bottom: ${formTitleSpacing.Mobile}${formTitleSpacingUnits.Mobile};`
											: ""
									}

						}

							.${blockId} .fb-comment-form .fb-comment-form-header .fb-reply-title {
								${
									formTitleGlobalTypoSwitcher.fontSize === false &&
									formTitleFontSize.Mobile
										? `font-size: ${formTitleFontSize.Mobile}${formTitleFontSizeUnits.Mobile};`
										: ""
								}
								${
									formTitleGlobalTypoSwitcher.letterSpacing === false &&
									formTitleLetterSpacing.Mobile
										? `letter-spacing: ${formTitleLetterSpacing.Mobile}${formTitleLetterSpacingUnits.Mobile};`
										: ""
								}
								${
									formTitleGlobalTypoSwitcher.lineHeight === false &&
									formTitleLineHeight.Mobile
										? `line-height: ${formTitleLineHeight.Mobile}${formTitleLineHeightUnits.Mobile};`
										: ""
								}

							}

							.${blockId} .fb-comment-form .fb-comment-form-header .fb-cancel-reply {
								${
									cancelReplyGlobalTypoSwitcher.fontSize === false &&
									cancelReplyFontSize.Mobile
										? `font-size: ${cancelReplyFontSize.Mobile}${cancelReplyFontSizeUnits.Mobile};`
										: ""
								}
								${
									cancelReplyGlobalTypoSwitcher.letterSpacing === false &&
									cancelReplyLetterSpacing.Mobile
										? `letter-spacing: ${cancelReplyLetterSpacing.Mobile}${cancelReplyLetterSpacingUnits.Mobile};`
										: ""
								}
								${
									cancelReplyGlobalTypoSwitcher.lineHeight === false &&
									cancelReplyLineHeight.Mobile
										? `line-height: ${cancelReplyLineHeight.Mobile}${cancelReplyLineHeightUnits.Mobile};`
										: ""
								}

							}


							




.${blockId} .fb-comment-form .fb-logged-in-as{
					  ${
							loggedInTextGlobalTypoSwitcher.fontSize === false &&
							loggedInTextFontSize.Mobile
								? `font-size: ${loggedInTextFontSize.Mobile}${loggedInTextFontSizeUnits.Mobile};`
								: ""
						}
						${
							loggedInTextGlobalTypoSwitcher.letterSpacing === false &&
							loggedInTextLetterSpacing.Mobile
								? `letter-spacing: ${loggedInTextLetterSpacing.Mobile}${loggedInTextLetterSpacingUnits.Mobile};`
								: ""
						}
						${
							loggedInTextGlobalTypoSwitcher.lineHeight === false &&
							loggedInTextLineHeight.Mobile
								? `line-height: ${loggedInTextLineHeight.Mobile}${loggedInTextLineHeightUnits.Mobile};`
								: ""
						}

									${
										formInfoSpacing.Mobile
											? `margin-bottom: ${formInfoSpacing.Mobile}${formInfoSpacingUnits.Mobile};`
											: ""
									}

					}









					

						`
						: ""
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

		{showCommentTitle && 
			<PanelBody
				title={__("Comments Header", "frontis-blocks")}
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

			}

			<PanelBody
				title={__("Comment Item", "frontis-blocks")}
				initialOpen={false}
			>
				<BaseControl
					label={__("Spacing", "frontis-blocks")}
					className="fb-setting-form-texts"
				>
					<p style={{ fontSize: "12px", color: "#888" }}>
						{__(
							"Precisely manage the spatial rhythm of your comment layout — control padding, gaps, and nested indentation with intelligent scaling that adapts automatically to threaded replies.",
							"frontis-blocks",
						)}
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
						label={__("Avatar Gap", "frontis-blocks")}
						rangeValue={avatarGap}
						onChangeHandler={(value) =>
							setAttributes({ avatarGap: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ avatarGapUnits: value })
						}
						deviceType={deviceType}
						units={avatarGapUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
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

					<p style={{ fontSize: "12px", color: "#888" }}>
						{__("Define indentation level for nested replies.", "frontis-blocks")}
					</p>

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
						helpText={__(
							"Add space below the comment list to separate it from the comment form or other content.",
							"frontis-blocks",
						)}
					/>

					<div className="fb-control-divider"></div>
				</BaseControl>

				<BaseControl
					label={__("Avatar", "frontis-blocks")}
					className="fb-setting-form-texts"
				>
					<p style={{ fontSize: "12px", color: "#888" }}>
						{__(
							"Refine the visual style of user avatars with adjustable size, padding, borders, radius, and soft shadow effects for a polished, consistent appearance.",
							"frontis-blocks",
						)}
					</p>

					<div className="fb-control-divider"></div>

					<FB_Range
						min={0}
						max={100}
						label={__("Size", "frontis-blocks")}
						rangeValue={avatarSize}
						onChangeHandler={(value) => setAttributes({ avatarSize: value })}
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
						{__(
							"Define the visual identity of the comment author with refined color and typography controls for a distinctive, readable name style.",
							"frontis-blocks",
						)}
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
						{__(
							"Style the comment metadata—such as date and time—with harmonious color and typography for subtle emphasis and readability.",
							"frontis-blocks",
						)}
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
						{__(
							"Control the visual tone of comment content with precise color and typography adjustments for a clear, polished reading experience.",
							"frontis-blocks",
						)}
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
				title={__("Reply Button", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={replyButtonGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ replyButtonGlobalTypographyData: value })
					}
					globalTypoType={replyButtonGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							replyButtonGlobalTypoType: value,
							replyButtonGlobalTypoSwitcher:
								value === "default"
									? {
											...replyButtonGlobalTypoSwitcher,
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
											...replyButtonGlobalTypoSwitcher,
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
					globalTypoOption={replyButtonGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ replyButtonGlobalTypoOption: value })
					}
					fontFamily={replyButtonFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							replyButtonFontFamily: value,
							replyButtonGlobalTypoSwitcher: {
								...replyButtonGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={replyButtonFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							replyButtonFontSize: value,
							replyButtonGlobalTypoSwitcher: {
								...replyButtonGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={replyButtonFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ replyButtonFontSizeUnits: value })
					}
					fontWeight={replyButtonFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							replyButtonFontWeight: value,
							replyButtonGlobalTypoSwitcher: {
								...replyButtonGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={replyButtonFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							replyButtonFontStyle: value,
							replyButtonGlobalTypoSwitcher: {
								...replyButtonGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={replyButtonTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							replyButtonTextTransform: value,
							replyButtonGlobalTypoSwitcher: {
								...replyButtonGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={replyButtonTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							replyButtonTextDecoration: value,
							replyButtonGlobalTypoSwitcher: {
								...replyButtonGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={replyButtonLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							replyButtonLetterSpacing: value,
							replyButtonGlobalTypoSwitcher: {
								...replyButtonGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={replyButtonLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ replyButtonLetterSpacingUnits: value })
					}
					lineHeight={replyButtonLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							replyButtonLineHeight: value,
							replyButtonGlobalTypoSwitcher: {
								...replyButtonGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={replyButtonLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ replyButtonLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={replyButtonColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ replyButtonColorSwitcher: value })
					}
				/>

				{replyButtonColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={replyButtonColor}
						setGlobalColor={(value) =>
							setAttributes({
								replyButtonColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{replyButtonColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={replyButtonHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								replyButtonHoverColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				<FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={replyButtonBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ replyButtonBgColorSwitcher: value })
					}
					normalBackgroundType={replyButtonNormalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ replyButtonNormalBackgroundType: value })
					}
					normalClassicColor={replyButtonNormalClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							replyButtonNormalClassicColor: value === undefined ? "" : value,
						})
					}
					normalGradientColor={replyButtonNormalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							replyButtonNormalGradientColor: value === undefined ? "" : value,
						})
					}
					normalCustomGradientSwitcher={replyButtonNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ replyButtonNormalCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={
						replyButtonNormalCustomGradientInputValue
					}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({ replyButtonNormalCustomGradientInputValue: value })
					}
					hoverBackgroundType={replyButtonHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ replyButtonHoverBackgroundType: value })
					}
					hoverClassicColor={replyButtonHoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							replyButtonHoverClassicColor: value === undefined ? "" : value,
						})
					}
					hoverGradientColor={replyButtonHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							replyButtonHoverGradientColor: value === undefined ? "" : value,
						})
					}
					hoverCustomGradientSwitcher={replyButtonHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ replyButtonHoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={
						replyButtonHoverCustomGradientInputValue
					}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({ replyButtonHoverCustomGradientInputValue: value })
					}
					isBackgroundImage={false}
				/>

				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleReplyButtonPaddingUnitsHandler}
					spacingUnits={replyButtonPaddingUnits}
					spacingDesktop={replyButtonPaddingDesktop}
					spacingTablet={replyButtonPaddingTablet}
					spacingMobile={replyButtonPaddingMobile}
					handleSpacingUnitHandler={handleReplyButtonPaddingUnitChange}
					spacingCombineBtn={replyButtonPaddingLink}
					spacingCombineBtnHandler={handleReplyButtonPaddingCombineBtn}
					setAttributes={setAttributes}
				/>

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={replyButtonBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ replyButtonBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Border", "frontis-blocks")}
					globalSwitcher={replyButtonBorderColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ replyButtonBorderColorSwitcher: value })
					}
				/>

				{replyButtonBorderColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={replyButtonBorderColor}
						setGlobalColor={(value) =>
							setAttributes({
								replyButtonBorderColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{replyButtonBorderColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={replyButtonBorderHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								replyButtonBorderHoverColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleReplyButtonBorderUnitsHandler}
					spacingUnits={replyButtonBorderUnits}
					spacingDesktop={replyButtonBorderDesktop}
					spacingTablet={replyButtonBorderTablet}
					spacingMobile={replyButtonBorderMobile}
					handleSpacingUnitHandler={handleReplyButtonBorderUnitChange}
					spacingCombineBtn={replyButtonBorderLink}
					spacingCombineBtnHandler={handleReplyButtonBorderCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleReplyButtonBorderRadiusUnitsHandler}
					spacingUnits={replyButtonBorderRadiusUnits}
					spacingDesktop={replyButtonBorderRadiusDesktop}
					spacingTablet={replyButtonBorderRadiusTablet}
					spacingMobile={replyButtonBorderRadiusMobile}
					handleSpacingUnitHandler={handleReplyButtonBorderRadiusUnitChange}
					spacingCombineBtn={replyButtonBorderRadiusLink}
					spacingCombineBtnHandler={handleReplyButtonBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Box Shadow", "frontis-blocks")}
					globalSwitcher={replyButtonBoxShadowSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ replyButtonBoxShadowSwitcher: value })
					}
				/>

				{replyButtonBoxShadowSwitcher === "normal" && (
					<FB_BoxShadowControl
						label={__("Normal Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ replyButtonBoxShadowValues: value })
						}
						initialShadowValue={replyButtonBoxShadowValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({ replyButtonBoxShadowCssValue: value })
						}
					/>
				)}

				{replyButtonBoxShadowSwitcher === "hover" && (
					<FB_BoxShadowControl
						label={__("Hover Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ replyButtonBoxShadowHoverValues: value })
						}
						initialShadowValue={replyButtonBoxShadowHoverValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({ replyButtonBoxShadowHoverCssValue: value })
						}
					/>
				)}
			</PanelBody>

			{showCommentForm &&

				<>
				
							<PanelBody
				title={__("Comment Form", "frontis-blocks")}
				initialOpen={false}
			>

				<FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={commentFormBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ commentFormBgColorSwitcher: value })
					}
					normalBackgroundType={commentFormNormalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ commentFormNormalBackgroundType: value })
					}
					normalClassicColor={commentFormNormalClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							commentFormNormalClassicColor: value === undefined ? "" : value,
						})
					}
					normalGradientColor={commentFormNormalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							commentFormNormalGradientColor: value === undefined ? "" : value,
						})
					}
					normalCustomGradientSwitcher={commentFormNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ commentFormNormalCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={
						commentFormNormalCustomGradientInputValue
					}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({ commentFormNormalCustomGradientInputValue: value })
					}
					hoverBackgroundType={commentFormHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ commentFormHoverBackgroundType: value })
					}
					hoverClassicColor={commentFormHoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							commentFormHoverClassicColor: value === undefined ? "" : value,
						})
					}
					hoverGradientColor={commentFormHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							commentFormHoverGradientColor: value === undefined ? "" : value,
						})
					}
					hoverCustomGradientSwitcher={commentFormHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ commentFormHoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={
						commentFormHoverCustomGradientInputValue
					}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({ commentFormHoverCustomGradientInputValue: value })
					}
					isBackgroundImage={false}
				/>
	
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleCommentFormPaddingUnitsHandler}
					spacingUnits={commentFormPaddingUnits}
					spacingDesktop={commentFormPaddingDesktop}
					spacingTablet={commentFormPaddingTablet}
					spacingMobile={commentFormPaddingMobile}
					handleSpacingUnitHandler={handleCommentFormPaddingUnitChange}
					spacingCombineBtn={commentFormPaddingLink}
					spacingCombineBtnHandler={handleCommentFormPaddingCombineBtn}
					setAttributes={setAttributes}
				/>

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={commentFormBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ commentFormBorder: value })}
				/>

				{commentFormBorder !== "none" && (
					<>
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={commentFormBorderColor}
						setGlobalColor={(value) =>
							setAttributes({
								commentFormBorderColor: value === undefined ? "" : value,
							})
						}
					/>

					<FB_Spacing
						label={__("Border", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleCommentFormBorderUnitsHandler}
						spacingUnits={commentFormBorderUnits}
						spacingDesktop={commentFormBorderDesktop}
						spacingTablet={commentFormBorderTablet}
						spacingMobile={commentFormBorderMobile}
						handleSpacingUnitHandler={handleCommentFormBorderUnitChange}
						spacingCombineBtn={commentFormBorderLink}
						spacingCombineBtnHandler={handleCommentFormBorderCombineBtn}
						setAttributes={setAttributes}
					/>
					</>
				)}

				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleCommentFormBorderRadiusUnitsHandler}
					spacingUnits={commentFormBorderRadiusUnits}
					spacingDesktop={commentFormBorderRadiusDesktop}
					spacingTablet={commentFormBorderRadiusTablet}
					spacingMobile={commentFormBorderRadiusMobile}
					handleSpacingUnitHandler={handleCommentFormBorderRadiusUnitChange}
					spacingCombineBtn={commentFormBorderRadiusLink}
					spacingCombineBtnHandler={handleCommentFormBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>


					<FB_BoxShadowControl
						label={__("Box Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ commentFormBoxShadowValues: value })
						}
						initialShadowValue={commentFormBoxShadowValues}
						onBoxShadowStyleChange={(value) =>
							setAttributes({ commentFormBoxShadowCssValue: value })
						}
					/>

			</PanelBody>

						<PanelBody
				title={__("Form Header", "frontis-blocks")}
				initialOpen={false}
			>

								<BaseControl
					label={__("Header Title", "frontis-blocks")}
					className="fb-setting-form-texts"
				>
					<p style={{ fontSize: "12px", color: "#888" }}>
						{__(
							"Style the form’s header title with elegant color and typography controls for a clear and welcoming visual tone.",
							"frontis-blocks",
						)}
					</p>

				<div className="fb-control-divider"></div>

				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={formTitleGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ formTitleGlobalTypographyData: value })
					}
					globalTypoType={formTitleGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							formTitleGlobalTypoType: value,
							formTitleGlobalTypoSwitcher:
								value === "default"
									? {
											...formTitleGlobalTypoSwitcher,
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
											...formTitleGlobalTypoSwitcher,
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
					globalTypoOption={formTitleGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ formTitleGlobalTypoOption: value })
					}
					fontFamily={formTitleFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							formTitleFontFamily: value,
							formTitleGlobalTypoSwitcher: {
								...formTitleGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={formTitleFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							formTitleFontSize: value,
							formTitleGlobalTypoSwitcher: {
								...formTitleGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={formTitleFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ formTitleFontSizeUnits: value })
					}
					fontWeight={formTitleFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							formTitleFontWeight: value,
							formTitleGlobalTypoSwitcher: {
								...formTitleGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={formTitleFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							formTitleFontStyle: value,
							formTitleGlobalTypoSwitcher: {
								...formTitleGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={formTitleTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							formTitleTextTransform: value,
							formTitleGlobalTypoSwitcher: {
								...formTitleGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={formTitleTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							formTitleTextDecoration: value,
							formTitleGlobalTypoSwitcher: {
								...formTitleGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={formTitleLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							formTitleLetterSpacing: value,
							formTitleGlobalTypoSwitcher: {
								...formTitleGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={formTitleLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ formTitleLetterSpacingUnits: value })
					}
					lineHeight={formTitleLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							formTitleLineHeight: value,
							formTitleGlobalTypoSwitcher: {
								...formTitleGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={formTitleLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ formTitleLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

					<FB_ColorControl
						label={__("Color", "frontis-blocks")}
						globalColor={formTitleColor}
						setGlobalColor={(value) =>
							setAttributes({
								formTitleColor: value === undefined ? "" : value,
							})
						}
					/>

					</BaseControl>

				<div className="fb-control-divider"></div>

						<BaseControl
					label={__("Cancel Reply Action", "frontis-blocks")}
					className="fb-setting-form-texts"
				>
					<p style={{ fontSize: "12px", color: "#888" }}>
						{__(
							"Customize the cancel reply link with refined color and typography to ensure smooth, intuitive interaction feedback.",
							"frontis-blocks",
						)}
					</p>
					<div className="fb-control-divider"></div>

								<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={cancelReplyGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ cancelReplyGlobalTypographyData: value })
					}
					globalTypoType={cancelReplyGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							cancelReplyGlobalTypoType: value,
							cancelReplyGlobalTypoSwitcher:
								value === "default"
									? {
											...cancelReplyGlobalTypoSwitcher,
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
											...cancelReplyGlobalTypoSwitcher,
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
					globalTypoOption={cancelReplyGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ cancelReplyGlobalTypoOption: value })
					}
					fontFamily={cancelReplyFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							cancelReplyFontFamily: value,
							cancelReplyGlobalTypoSwitcher: {
								...cancelReplyGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={cancelReplyFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							cancelReplyFontSize: value,
							cancelReplyGlobalTypoSwitcher: {
								...cancelReplyGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={cancelReplyFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ cancelReplyFontSizeUnits: value })
					}
					fontWeight={cancelReplyFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							cancelReplyFontWeight: value,
							cancelReplyGlobalTypoSwitcher: {
								...cancelReplyGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={cancelReplyFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							cancelReplyFontStyle: value,
							cancelReplyGlobalTypoSwitcher: {
								...cancelReplyGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={cancelReplyTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							cancelReplyTextTransform: value,
							cancelReplyGlobalTypoSwitcher: {
								...cancelReplyGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={cancelReplyTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							cancelReplyTextDecoration: value,
							cancelReplyGlobalTypoSwitcher: {
								...cancelReplyGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={cancelReplyLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							cancelReplyLetterSpacing: value,
							cancelReplyGlobalTypoSwitcher: {
								...cancelReplyGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={cancelReplyLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ cancelReplyLetterSpacingUnits: value })
					}
					lineHeight={cancelReplyLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							cancelReplyLineHeight: value,
							cancelReplyGlobalTypoSwitcher: {
								...cancelReplyGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={cancelReplyLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ cancelReplyLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={cancelReplyColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ cancelReplyColorSwitcher: value })
					}
				/>

				{cancelReplyColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={cancelReplyColor}
						setGlobalColor={(value) =>
							setAttributes({
								cancelReplyColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{cancelReplyColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={cancelReplyHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								cancelReplyHoverColor: value === undefined ? "" : value,
							})
						}
					/>
				)}
					

					</BaseControl>



				<div className="fb-control-divider"></div>

				<FB_Range
					// min={}
					max={100}
					label={__("Header Offset", "frontis-blocks")}
					rangeValue={formTitleSpacing}
					onChangeHandler={(value) =>
						setAttributes({ formTitleSpacing: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ formTitleSpacingUnits: value })
					}
					deviceType={deviceType}
					units={formTitleSpacingUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>

					<p style={{ fontSize: "12px", color: "#888" }}>
						{__(
							"Adjust bottom spacing to maintain balanced separation between the form header and its content area.",
							"frontis-blocks",
						)}
					</p>
					

			</PanelBody>

			<PanelBody
				title={__("Form Info", "frontis-blocks")}
				initialOpen={true}
			>

					{/* <p style={{ fontSize: "12px", color: "#888" }}>
						{__(
							"Style the login information text — “Logged in as” and “Log out?” — with refined color, typography, and spacing controls for a polished, integrated look.",
							"frontis-blocks",
						)}
					</p> */}

					{/* <div className="fb-control-divider"></div> */}


				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={loggedInTextGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ loggedInTextGlobalTypographyData: value })
					}
					globalTypoType={loggedInTextGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							loggedInTextGlobalTypoType: value,
							loggedInTextGlobalTypoSwitcher:
								value === "default"
									? {
											...loggedInTextGlobalTypoSwitcher,
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
											...loggedInTextGlobalTypoSwitcher,
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
					globalTypoOption={loggedInTextGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ loggedInTextGlobalTypoOption: value })
					}
					fontFamily={loggedInTextFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							loggedInTextFontFamily: value,
							loggedInTextGlobalTypoSwitcher: {
								...loggedInTextGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={loggedInTextFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							loggedInTextFontSize: value,
							loggedInTextGlobalTypoSwitcher: {
								...loggedInTextGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={loggedInTextFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ loggedInTextFontSizeUnits: value })
					}
					fontWeight={loggedInTextFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							loggedInTextFontWeight: value,
							loggedInTextGlobalTypoSwitcher: {
								...loggedInTextGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={loggedInTextFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							loggedInTextFontStyle: value,
							loggedInTextGlobalTypoSwitcher: {
								...loggedInTextGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={loggedInTextTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							loggedInTextTextTransform: value,
							loggedInTextGlobalTypoSwitcher: {
								...loggedInTextGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={loggedInTextTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							loggedInTextTextDecoration: value,
							loggedInTextGlobalTypoSwitcher: {
								...loggedInTextGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={loggedInTextLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							loggedInTextLetterSpacing: value,
							loggedInTextGlobalTypoSwitcher: {
								...loggedInTextGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={loggedInTextLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ loggedInTextLetterSpacingUnits: value })
					}
					lineHeight={loggedInTextLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							loggedInTextLineHeight: value,
							loggedInTextGlobalTypoSwitcher: {
								...loggedInTextGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={loggedInTextLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ loggedInTextLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

					<div className="fb-divider-control"></div>
				
					<BaseControl
						label={__("Text", "frontis-blocks")}
						className="fb-setting-form-texts"
					>

							<p style={{ fontSize: "12px", color: "#888" }}>
						{__(
							"Adjust the informational text color to maintain visual harmony and readability within the form header.sss",
							"frontis-blocks",
						)}
					</p>

					<div className="fb-control-divider"></div>

					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={loggedInTextColor}
						setGlobalColor={(value) =>
							setAttributes({
								loggedInTextColor: value === undefined ? "" : value,
							})
						}
					/>
					</BaseControl>


					<div className="fb-control-divider"></div>

					<BaseControl
						label={__("Link", "frontis-blocks")}
						className="fb-setting-form-texts"
					>

							<p style={{ fontSize: "12px", color: "#888" }}>
						{__(
							"Define the link’s normal and hover colors to create a subtle yet engaging interactive experience.",
							"frontis-blocks",
						)}
					</p>

					<div className="fb-control-divider"></div>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={loggedInLinkColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ loggedInLinkColorSwitcher: value })
					}
				/>

				{loggedInLinkColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={loggedInLinkColor}
						setGlobalColor={(value) =>
							setAttributes({
								loggedInLinkColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{loggedInLinkColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={loggedInLinkHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								loggedInLinkHoverColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

					</BaseControl>

				<div className="fb-control-divider"></div>

				<FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={formInfoBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ formInfoBgColorSwitcher: value })
					}
					normalBackgroundType={formInfoNormalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ formInfoNormalBackgroundType: value })
					}
					normalClassicColor={formInfoNormalClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							formInfoNormalClassicColor: value === undefined ? "" : value,
						})
					}
					normalGradientColor={formInfoNormalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							formInfoNormalGradientColor: value === undefined ? "" : value,
						})
					}
					normalCustomGradientSwitcher={formInfoNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ formInfoNormalCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={
						formInfoNormalCustomGradientInputValue
					}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({ formInfoNormalCustomGradientInputValue: value })
					}
					hoverBackgroundType={formInfoHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ formInfoHoverBackgroundType: value })
					}
					hoverClassicColor={formInfoHoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							formInfoHoverClassicColor: value === undefined ? "" : value,
						})
					}
					hoverGradientColor={formInfoHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							formInfoHoverGradientColor: value === undefined ? "" : value,
						})
					}
					hoverCustomGradientSwitcher={formInfoHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ formInfoHoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={
						formInfoHoverCustomGradientInputValue
					}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({ formInfoHoverCustomGradientInputValue: value })
					}
					isBackgroundImage={false}
				/>

{/* 	
				<FB_Spacingssss
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleCommentFormPaddingUnitsHandler}
					spacingUnits={commentFormPaddingUnits}
					spacingDesktop={commentFormPaddingDesktop}
					spacingTablet={commentFormPaddingTablet}
					spacingMobile={commentFormPaddingMobile}
					handleSpacingUnitHandler={handleCommentFormPaddingUnitChange}
					spacingCombineBtn={commentFormPaddingLink}
					spacingCombineBtnHandler={handleCommentFormPaddingCombineBtn}
					setAttributes={setAttributes}
				/> */}


				<div className="fb-control-divider"></div>

				<FB_Range
					// min={}
					max={100}
					label={__("Spacing", "frontis-blocks")}
					rangeValue={formInfoSpacing}
					onChangeHandler={(value) =>
						setAttributes({ formInfoSpacing: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ formInfoSpacingUnits: value })
					}
					deviceType={deviceType}
					units={formInfoSpacingUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>


			</PanelBody>
						</>

				}


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
