import { __ } from "@wordpress/i18n";
import { useMemo, memo, useEffect } from "@wordpress/element";
import {
	PanelBody,
	BaseControl,
	ToggleControl,
	SelectControl,
} from "@wordpress/components";
import {
	OVERFLOW_OP,
	BORDER_STYLES,
} from "@Constants/fbConstants";
import getCustomCss from "@Utils/getCustomCss";
import { useDeviceType } from "@Config/displayType";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_InspectorControls from "@Components/InspectorControls";
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

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		showCommentTitle,
		showCommentsCount,
		showCommentForm,
		formTitle,
		cancelReplyText,
		loginText,
		logoutText,
		buttonText,

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

		formInfoBorder,
		formInfoBorderColor,
		formInfoBorderUnits,
		formInfoBorderDesktop,
		formInfoBorderTablet,
		formInfoBorderMobile,
		formInfoBorderLink,

		formInfoBorderRadiusUnits,
		formInfoBorderRadiusDesktop,
		formInfoBorderRadiusTablet,
		formInfoBorderRadiusMobile,
		formInfoBorderRadiusLink,
		/** =============== End Form Info =================== */


		/** =============== Start Form Fields =================== */
		
		/** ============ Start Reply Button */
		formFieldGlobalTypoSwitcher,
		formFieldGlobalTypographyData,
		formFieldGlobalTypoType,
		formFieldGlobalTypoOption,
		formFieldFontFamily,
		formFieldFontSize,
		formFieldFontSizeUnits,
		formFieldFontWeight,
		formFieldFontStyle,
		formFieldTextTransform,
		formFieldTextDecoration,
		formFieldLetterSpacing,
		formFieldLetterSpacingUnits,
		formFieldLineHeight,
		formFieldLineHeightUnits,

		formFieldColor,
		formFieldHoverColor,

		formFieldPlaceholderColor,

		/** Background */
		formFieldBgColorSwitcher,
		formFieldNormalBackgroundType,
		formFieldNormalClassicColor,
		formFieldNormalGradientColor,
		formFieldNormalCustomGradientSwitcher,
		formFieldNormalCustomGradientInputValue,
		formFieldHoverBackgroundType,
		formFieldHoverClassicColor,
		formFieldHoverGradientColor,
		formFieldHoverCustomGradientSwitcher,
		formFieldHoverCustomGradientInputValue,

		formFieldPaddingUnits,
		formFieldPaddingDesktop,
		formFieldPaddingTablet,
		formFieldPaddingMobile,
		formFieldPaddingLink,

		formFieldBorder,
		formFieldBorderColor,
		formFieldBorderHoverColor,
		formFieldBorderUnits,
		formFieldBorderDesktop,
		formFieldBorderTablet,
		formFieldBorderMobile,
		formFieldBorderLink,

		formFieldBorderRadiusUnits,
		formFieldBorderRadiusDesktop,
		formFieldBorderRadiusTablet,
		formFieldBorderRadiusMobile,
		formFieldBorderRadiusLink,
		/** =============== End Form Fields =================== */

		
		/** Start Submit Button */
buttonWidth,
		buttonWidthUnits,

		buttonGlobalTypoSwitcher,
		buttonGlobalTypographyData,
		buttonGlobalTypoType,
		buttonGlobalTypoOption,
		buttonFontFamily,
		buttonFontSize,
		buttonFontSizeUnits,
		buttonFontWeight,
		buttonFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonLetterSpacing,
		buttonLetterSpacingUnits,
		buttonLineHeight,
		buttonLineHeightUnits,

		buttonColorSwitcher,
		buttonColor,
		buttonHoverColor,
		buttonBgColorSwitcher,
		buttonBgColor,
		buttonBgHoverColor,
		buttonBorder,
		buttonBorderColorSwitcher,
		buttonBorderColor,
		buttonBorderHoverColor,

		buttonBorderUnits,
		buttonDesktopBorderWidth,
		buttonTabBorderWidth,
		buttonMobileBorderWidth,
		buttonBorderLink,

		buttonBorderRadiusUnits,
		buttonDesktopBorderRadiusWidth,
		buttonTabBorderRadiusWidth,
		buttonMobileBorderRadiusWidth,
		buttonBorderRadiusLink,

		buttonBoxShadowSwitcher,
		buttonBoxShadowValues,
		buttonBoxShadowCssValue,
		buttonBoxShadowHoverValues,
		buttonBoxShadowHoverCssValue,

		buttonPaddingUnits,
		buttonDesktopPadding,
		buttonTabPadding,
		buttonMobilePadding,
		buttonPaddingLink,

		buttonMarginUnits,
		buttonDesktopMargin,
		buttonTabMargin,
		buttonMobileMargin,
		buttonMarginLink,
		/** Submit Button */

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
	/** End Border Radius */

	/** Comment Form */
	/** padding */
	const handleFormInfoPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (formInfoPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						formInfoPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						formInfoPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						formInfoPaddingMobile: {
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
						formInfoPaddingDesktop: {
							...formInfoPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						formInfoPaddingTablet: {
							...formInfoPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						formInfoPaddingMobile: {
							...formInfoPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFormInfoPaddingCombineBtn = () => {
		setAttributes({ formInfoPaddingLink: !formInfoPaddingLink });
	};

	const handleFormInfoPaddingUnitsHandler = (unit) => {
		setAttributes({
			formInfoPaddingUnits: {
				...formInfoPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End padding */

	
	/** Start Border */
	const handleFormInfoBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (formInfoBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						formInfoBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						formInfoBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						formInfoBorderMobile: {
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
						formInfoBorderDesktop: {
							...formInfoBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						formInfoBorderTablet: {
							...formInfoBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						formInfoBorderMobile: {
							...formInfoBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFormInfoBorderCombineBtn = () => {
		setAttributes({ formInfoBorderLink: !formInfoBorderLink });
	};

	const handleFormInfoBorderUnitsHandler = (unit) => {
		setAttributes({
			formInfoBorderUnits: {
				...formInfoBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Border */


	/** Border Radius */
	const handleFormInfoBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (formInfoBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						formInfoBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						formInfoBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						formInfoBorderRadiusMobile: {
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
						formInfoBorderRadiusDesktop: {
							...formInfoBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						formInfoBorderRadiusTablet: {
							...formInfoBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						formInfoBorderRadiusMobile: {
							...formInfoBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFormInfoBorderRadiusCombineBtn = () => {
		setAttributes({
			formInfoBorderRadiusLink: !formInfoBorderRadiusLink,
		});
	};

	const handleFormInfoBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			formInfoBorderRadiusUnits: {
				...formInfoBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Border Radius */

	/**  ============== End Form Info ================== */

		/** Form Fields */
	/** padding */
	const handleFormFieldPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (formFieldPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						formFieldPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						formFieldPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						formFieldPaddingMobile: {
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
						formFieldPaddingDesktop: {
							...formFieldPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						formFieldPaddingTablet: {
							...formFieldPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						formFieldPaddingMobile: {
							...formFieldPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFormFieldPaddingCombineBtn = () => {
		setAttributes({ formFieldPaddingLink: !formFieldPaddingLink });
	};

	const handleFormFieldPaddingUnitsHandler = (unit) => {
		setAttributes({
			formFieldPaddingUnits: {
				...formFieldPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End padding */

	/** Start Border */
	const handleFormFieldBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (formFieldBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						formFieldBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						formFieldBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						formFieldBorderMobile: {
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
						formFieldBorderDesktop: {
							...formFieldBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						formFieldBorderTablet: {
							...formFieldBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						formFieldBorderMobile: {
							...formFieldBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFormFieldBorderCombineBtn = () => {
		setAttributes({ formFieldBorderLink: !formFieldBorderLink });
	};

	const handleFormFieldBorderUnitsHandler = (unit) => {
		setAttributes({
			formFieldBorderUnits: {
				...formFieldBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Border */

	/** Border Radius */
	const handleFormFieldBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (formFieldBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						formFieldBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						formFieldBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						formFieldBorderRadiusMobile: {
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
						formFieldBorderRadiusDesktop: {
							...formFieldBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						formFieldBorderRadiusTablet: {
							...formFieldBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						formFieldBorderRadiusMobile: {
							...formFieldBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFormFieldBorderRadiusCombineBtn = () => {
		setAttributes({
			formFieldBorderRadiusLink: !formFieldBorderRadiusLink,
		});
	};

	const handleFormFieldBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			formFieldBorderRadiusUnits: {
				...formFieldBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Border Radius */
	/**  ============== End Form Fields ================== */


	/**  ============== Start Submit Button ================== */
	/** start border width */
	const handleBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (buttonBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						buttonDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobileBorderWidth: {
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
						buttonDesktopBorderWidth: {
							...buttonDesktopBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabBorderWidth: {
							...buttonTabBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobileBorderWidth: {
							...buttonMobileBorderWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleBorderLinkToggle = () => {
		setAttributes({ buttonBorderLink: !buttonBorderLink });
	};

	const handleBorderUnitsChange = (unit) => {
		setAttributes({
			buttonBorderUnits: {
				...buttonBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End border width */

	/** Start border radius */
	const handleBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (buttonBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						buttonDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobileBorderRadiusWidth: {
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
						buttonDesktopBorderRadiusWidth: {
							...buttonDesktopBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabBorderRadiusWidth: {
							...buttonTabBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobileBorderRadiusWidth: {
							...buttonMobileBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleBorderRadiusLinkToggle = () => {
		setAttributes({ buttonBorderRadiusLink: !buttonBorderRadiusLink });
	};

	const handleBorderRadiusUnitsChange = (unit) => {
		setAttributes({
			buttonBorderRadiusUnits: {
				...buttonBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Border Radius */

	/** Start padding */
	const handlePaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						buttonDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobilePadding: {
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
						buttonDesktopPadding: {
							...buttonDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabPadding: { ...buttonTabPadding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobilePadding: { ...buttonMobilePadding, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handlePaddingCombineBtn = () => {
		setAttributes({ buttonPaddingLink: !buttonPaddingLink });
	};

	const handlePaddingUnitsHandler = (unit) => {
		setAttributes({
			buttonPaddingUnits: {
				...buttonPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Padding */

	/** Start Margin */
	const handleMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						buttonDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobileMargin: {
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
						buttonDesktopMargin: { ...buttonDesktopMargin, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabMargin: { ...buttonTabMargin, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobileMargin: { ...buttonMobileMargin, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleMarginCombineBtn = () => {
		setAttributes({ buttonMarginLink: !buttonMarginLink });
	};

	const handleMarginUnitsHandler = (unit) => {
		setAttributes({
			buttonMarginUnits: {
				...buttonMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Submit Button ----------------------------------------------------*/

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

	//* Start General Controls */
	const generalControls = (
		<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
			<BaseControl
				label={__("Element Visibility", "frontis-blocks")}
				className="fb-setting-show-hide-elements"
			>

				<ToggleControl
					label={__("Show Title", "frontis-blocks")}
					checked={showCommentTitle}
					onChange={(value) => setAttributes({ showCommentTitle: value })}
				/>

				{showCommentTitle && (
					<ToggleControl
						label={__("Show Count", "frontis-blocks")}
						checked={showCommentsCount}
						onChange={(value) => setAttributes({ showCommentsCount: value })}
					/>
				)}

				<ToggleControl
					label={__("Show Form", "frontis-blocks")}
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
					<p className="fb-control-help">
						{__(
							"Craft a warm and inviting title to welcome users to share their thoughts, e.g., 'Join the Discussion'.",
							"frontis-blocks",
						)}
					</p>

					<div className="fb-control-divider"></div>

					<FB_InputControl
						label={__("Invitation", "frontis-blocks")}
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
						label={__("Submit Action", "frontis-blocks")}
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
			{showCommentTitle && (
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
			)}

			<PanelBody
				title={__("Comment Item", "frontis-blocks")}
				initialOpen={true}
			>
				<BaseControl
					label={__("Spacing", "frontis-blocks")}
					className="fb-setting-form-texts"
				>
					<p className="fb-control-help">
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
						onChangeHandler={(value) => setAttributes({ avatarGap: value })}
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

					<p className="fb-control-help">
						{__(
							"Define indentation level for nested replies.",
							"frontis-blocks",
						)}
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

				</BaseControl>


				<div className="fb-control-divider"></div>

				<BaseControl
					label={__("Author", "frontis-blocks")}
					className="fb-setting-form-texts"
				>
					<p className="fb-control-help">
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
					<p className="fb-control-help">
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
					<p className="fb-control-help">
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
				title={__("Avatar", "frontis-blocks")}
				initialOpen={false}
			>
				<p className="fb-control-help">
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
						<FB_ColorControl
							label={__("Border Color", "frontis-blocks")}
							globalColor={avatarBorderColor}
							setGlobalColor={(value) =>
								setAttributes({
									avatarBorderColor: value === undefined ? "" : value,
								})
							}
						/>

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

				{replyButtonBorder !== "none" && (

					<>
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

					</>

				)}

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

			{showCommentForm && (
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
									commentFormNormalClassicColor:
										value === undefined ? "" : value,
								})
							}
							normalGradientColor={commentFormNormalGradientColor}
							setNormalGradientColor={(value) =>
								setAttributes({
									commentFormNormalGradientColor:
										value === undefined ? "" : value,
								})
							}
							normalCustomGradientSwitcher={
								commentFormNormalCustomGradientSwitcher
							}
							setNormalCustomGradientSwitcher={(value) =>
								setAttributes({
									commentFormNormalCustomGradientSwitcher: value,
								})
							}
							normalCustomGradientInputValue={
								commentFormNormalCustomGradientInputValue
							}
							setNormalCustomGradientInputValue={(value) =>
								setAttributes({
									commentFormNormalCustomGradientInputValue: value,
								})
							}
							hoverBackgroundType={commentFormHoverBackgroundType}
							setHoverBackgroundType={(value) =>
								setAttributes({ commentFormHoverBackgroundType: value })
							}
							hoverClassicColor={commentFormHoverClassicColor}
							setHoverClassicColor={(value) =>
								setAttributes({
									commentFormHoverClassicColor:
										value === undefined ? "" : value,
								})
							}
							hoverGradientColor={commentFormHoverGradientColor}
							setHoverGradientColor={(value) =>
								setAttributes({
									commentFormHoverGradientColor:
										value === undefined ? "" : value,
								})
							}
							hoverCustomGradientSwitcher={
								commentFormHoverCustomGradientSwitcher
							}
							setHoverCustomGradientSwitcher={(value) =>
								setAttributes({ commentFormHoverCustomGradientSwitcher: value })
							}
							hoverCustomGradientInputValue={
								commentFormHoverCustomGradientInputValue
							}
							setHoverCustomGradientInputValue={(value) =>
								setAttributes({
									commentFormHoverCustomGradientInputValue: value,
								})
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
							<p className="fb-control-help">
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
							<p className="fb-control-help">
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

						<p className="fb-control-help">
							{__(
								"Adjust bottom spacing to maintain balanced separation between the form header and its content area.",
								"frontis-blocks",
							)}
						</p>
					</PanelBody>

					<PanelBody
						title={__("Form Info", "frontis-blocks")}
						initialOpen={false}
					>

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
							<p className="fb-control-help">
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
							<p className="fb-control-help">
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
							normalCustomGradientSwitcher={
								formInfoNormalCustomGradientSwitcher
							}
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

						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleFormInfoPaddingUnitsHandler}
							spacingUnits={formInfoPaddingUnits}
							spacingDesktop={formInfoPaddingDesktop}
							spacingTablet={formInfoPaddingTablet}
							spacingMobile={formInfoPaddingMobile}
							handleSpacingUnitHandler={handleFormInfoPaddingUnitChange}
							spacingCombineBtn={formInfoPaddingLink}
							spacingCombineBtnHandler={handleFormInfoPaddingCombineBtn}
							setAttributes={setAttributes}
						/>

						<div className="fb-control-divider"></div>

								<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={formInfoBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ formInfoBorder: value })}
						/>

						{formInfoBorder !== "none" && (
							<>
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={formInfoBorderColor}
									setGlobalColor={(value) =>
										setAttributes({
											formInfoBorderColor: value === undefined ? "" : value,
										})
									}
								/>

								<FB_Spacing
									label={__("Border", "frontis-blocks")}
									deviceType={deviceType}
									spacingUnitsHandler={handleFormInfoBorderUnitsHandler}
									spacingUnits={formInfoBorderUnits}
									spacingDesktop={formInfoBorderDesktop}
									spacingTablet={formInfoBorderTablet}
									spacingMobile={formInfoBorderMobile}
									handleSpacingUnitHandler={handleFormInfoBorderUnitChange}
									spacingCombineBtn={formInfoBorderLink}
									spacingCombineBtnHandler={handleFormInfoBorderCombineBtn}
									setAttributes={setAttributes}
								/>
							</>
						)}


						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleFormInfoBorderRadiusUnitsHandler}
							spacingUnits={formInfoBorderRadiusUnits}
							spacingDesktop={formInfoBorderRadiusDesktop}
							spacingTablet={formInfoBorderRadiusTablet}
							spacingMobile={formInfoBorderRadiusMobile}
							handleSpacingUnitHandler={handleFormInfoBorderRadiusUnitChange}
							spacingCombineBtn={formInfoBorderRadiusLink}
							spacingCombineBtnHandler={handleFormInfoBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>


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


			<PanelBody
				title={__("Input Fields", "frontis-blocks")}
				initialOpen={false}
			>

					<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={formFieldGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ formFieldGlobalTypographyData: value })
					}
					globalTypoType={formFieldGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							formFieldGlobalTypoType: value,
							formFieldGlobalTypoSwitcher:
								value === "default"
									? {
											...formFieldGlobalTypoSwitcher,
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
											...formFieldGlobalTypoSwitcher,
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
					globalTypoOption={formFieldGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ formFieldGlobalTypoOption: value })
					}
					fontFamily={formFieldFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							formFieldFontFamily: value,
							formFieldGlobalTypoSwitcher: {
								...formFieldGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={formFieldFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							formFieldFontSize: value,
							formFieldGlobalTypoSwitcher: {
								...formFieldGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={formFieldFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ formFieldFontSizeUnits: value })
					}
					fontWeight={formFieldFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							formFieldFontWeight: value,
							formFieldGlobalTypoSwitcher: {
								...formFieldGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={formFieldFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							formFieldFontStyle: value,
							formFieldGlobalTypoSwitcher: {
								...formFieldGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={formFieldTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							formFieldTextTransform: value,
							formFieldGlobalTypoSwitcher: {
								...formFieldGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={formFieldTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							formFieldTextDecoration: value,
							formFieldGlobalTypoSwitcher: {
								...formFieldGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={formFieldLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							formFieldLetterSpacing: value,
							formFieldGlobalTypoSwitcher: {
								...formFieldGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={formFieldLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ formFieldLetterSpacingUnits: value })
					}
					lineHeight={formFieldLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							formFieldLineHeight: value,
							formFieldGlobalTypoSwitcher: {
								...formFieldGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={formFieldLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ formFieldLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

	<FB_ColorControl
						label={__("Placeholder Color", "frontis-blocks")}
						globalColor={formFieldPlaceholderColor}
						setGlobalColor={(value) =>
							setAttributes({
								formFieldPlaceholderColor: value === undefined ? "" : value,
							})
						}
					/>

<div className="fb-control-divider"></div>
					<FB_ColorControl
						label={__("Color", "frontis-blocks")}
						globalColor={formFieldColor}
						setGlobalColor={(value) =>
							setAttributes({
								formFieldColor: value === undefined ? "" : value,
							})
						}
					/>

				<FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={formFieldBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ formFieldBgColorSwitcher: value })
					}
					normalBackgroundType={formFieldNormalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ formFieldNormalBackgroundType: value })
					}
					normalClassicColor={formFieldNormalClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							formFieldNormalClassicColor: value === undefined ? "" : value,
						})
					}
					normalGradientColor={formFieldNormalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							formFieldNormalGradientColor: value === undefined ? "" : value,
						})
					}
					normalCustomGradientSwitcher={formFieldNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ formFieldNormalCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={
						formFieldNormalCustomGradientInputValue
					}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({ formFieldNormalCustomGradientInputValue: value })
					}
					hoverBackgroundType={formFieldHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ formFieldHoverBackgroundType: value })
					}
					hoverClassicColor={formFieldHoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							formFieldHoverClassicColor: value === undefined ? "" : value,
						})
					}
					hoverGradientColor={formFieldHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							formFieldHoverGradientColor: value === undefined ? "" : value,
						})
					}
					hoverCustomGradientSwitcher={formFieldHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ formFieldHoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={
						formFieldHoverCustomGradientInputValue
					}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({ formFieldHoverCustomGradientInputValue: value })
					}
					isBackgroundImage={false}
				/>

				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleFormFieldPaddingUnitsHandler}
					spacingUnits={formFieldPaddingUnits}
					spacingDesktop={formFieldPaddingDesktop}
					spacingTablet={formFieldPaddingTablet}
					spacingMobile={formFieldPaddingMobile}
					handleSpacingUnitHandler={handleFormFieldPaddingUnitChange}
					spacingCombineBtn={formFieldPaddingLink}
					spacingCombineBtnHandler={handleFormFieldPaddingCombineBtn}
					setAttributes={setAttributes}
				/>

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={formFieldBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ formFieldBorder: value })}
				/>

				{formFieldBorder !== "none" && (
					<>					
						<FB_ColorControl
							label={__("Border Color", "frontis-blocks")}
							globalColor={formFieldBorderColor}
							setGlobalColor={(value) =>
								setAttributes({
									formFieldBorderColor: value === undefined ? "" : value,
								})
							}
						/>

					<FB_Spacing
						label={__("Border", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleFormFieldBorderUnitsHandler}
						spacingUnits={formFieldBorderUnits}
						spacingDesktop={formFieldBorderDesktop}
						spacingTablet={formFieldBorderTablet}
						spacingMobile={formFieldBorderMobile}
						handleSpacingUnitHandler={handleFormFieldBorderUnitChange}
						spacingCombineBtn={formFieldBorderLink}
						spacingCombineBtnHandler={handleFormFieldBorderCombineBtn}
						setAttributes={setAttributes}
					/>	
					</>

				)}

				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleFormFieldBorderRadiusUnitsHandler}
					spacingUnits={formFieldBorderRadiusUnits}
					spacingDesktop={formFieldBorderRadiusDesktop}
					spacingTablet={formFieldBorderRadiusTablet}
					spacingMobile={formFieldBorderRadiusMobile}
					handleSpacingUnitHandler={handleFormFieldBorderRadiusUnitChange}
					spacingCombineBtn={formFieldBorderRadiusLink}
					spacingCombineBtnHandler={handleFormFieldBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>


			
			</PanelBody>

							<PanelBody
					title={__("Submit Button", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_Range
						min={1}
						max={100}
						label={__("Width", "frontis-blocks")}
						rangeValue={buttonWidth}
						onChangeHandler={(value) => setAttributes({ buttonWidth: value })}
						rangeUnitHandler={(value) =>
							setAttributes({ buttonWidthUnits: value })
						}
						deviceType={deviceType}
						units={buttonWidthUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>

					{buttonColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={buttonColor}
								setGlobalColor={(value) =>
									setAttributes({
										buttonColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

					{buttonColorSwitcher === "hover" &&(
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={buttonHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										buttonHoverColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

					<FB_SwitcherControl
						label={__("Background Color", "frontis-blocks")}
						globalSwitcher={buttonBgColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ buttonBgColorSwitcher: value })
						}
					/>

					{buttonBgColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={buttonBgColor}
							setGlobalColor={(value) =>
								setAttributes({
									buttonBgColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					{buttonBgColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={buttonBgHoverColor}
							setGlobalColor={(value) =>
								setAttributes({
									buttonBgHoverColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					<SelectControl
						label={__("Border Style", "frontis-blocks")}
						value={buttonBorder}
						options={BORDER_STYLES}
						onChange={(value) => setAttributes({ buttonBorder: value })}
					/>

					{buttonBorder !== "none" && (
						<>
						<FB_SwitcherControl
									label={__("Border Color", "frontis-blocks")}
									globalSwitcher={buttonBorderColorSwitcher}
									setGlobalSwitcher={(value) =>
										setAttributes({ buttonBorderColorSwitcher: value })
									}
								/>

								{buttonBorderColorSwitcher === "normal" && (
									<FB_ColorControl
										label={__("Normal Color", "frontis-blocks")}
										globalColor={buttonBorderColor}
										setGlobalColor={(value) =>
											setAttributes({
												buttonBorderColor: value === undefined ? "" : value,
											})
										}
									/>
								)}

								{buttonBorderColorSwitcher === "hover" && (
									<FB_ColorControl
										label={__("Hover Color", "frontis-blocks")}
										globalColor={buttonBorderHoverColor}
										setGlobalColor={(value) =>
											setAttributes({
												buttonBorderHoverColor: value === undefined ? "" : value,
											})
										}
									/>
								)}

								<FB_Spacing
									label={__("Border", "frontis-blocks")}
									deviceType={deviceType}
									spacingUnitsHandler={handleBorderUnitsChange}
									spacingUnits={buttonBorderUnits}
									spacingDesktop={buttonDesktopBorderWidth}
									spacingTablet={buttonTabBorderWidth}
									spacingMobile={buttonMobileBorderWidth}
									handleSpacingUnitHandler={handleBorderWidthChange}
									spacingCombineBtn={buttonBorderLink}
									spacingCombineBtnHandler={handleBorderLinkToggle}
									setAttributes={setAttributes}
								/>					
						</>
					)}

					<FB_Spacing
						label={__("Border Radius", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleBorderRadiusUnitsChange}
						spacingUnits={buttonBorderRadiusUnits}
						spacingDesktop={buttonDesktopBorderRadiusWidth}
						spacingTablet={buttonTabBorderRadiusWidth}
						spacingMobile={buttonMobileBorderRadiusWidth}
						handleSpacingUnitHandler={handleBorderRadiusChange}
						spacingCombineBtn={buttonBorderRadiusLink}
						spacingCombineBtnHandler={handleBorderRadiusLinkToggle}
						setAttributes={setAttributes}
					/>

					<FB_SwitcherControl
						label={__("Box Shadow", "frontis-blocks")}
						globalSwitcher={buttonBoxShadowSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ buttonBoxShadowSwitcher: value })
						}
					/>

					{buttonBoxShadowSwitcher === "normal" && (
						<FB_BoxShadowControl
							label={__("Normal Shadow", "frontis-blocks")}
							onBoxShadowChange={(value) =>
								setAttributes({ buttonBoxShadowValues: value })
							}
							initialShadowValue={buttonBoxShadowValues}
							onBoxShadowStyleChange={(value) =>
								setAttributes({ buttonBoxShadowCssValue: value })
							}
						/>
					)}

					{buttonBoxShadowSwitcher === "hover" && (
						<FB_BoxShadowControl
							label={__("Hover Shadow", "frontis-blocks")}
							onBoxShadowChange={(value) =>
								setAttributes({ buttonBoxShadowHoverValues: value })
							}
							initialShadowValue={buttonBoxShadowHoverValues}
							onBoxShadowStyleChange={(value) =>
								setAttributes({ buttonBoxShadowHoverCssValue: value })
							}
						/>
					)}

					<FB_Spacing
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handlePaddingUnitsHandler}
						spacingUnits={buttonPaddingUnits}
						spacingDesktop={buttonDesktopPadding}
						spacingTablet={buttonTabPadding}
						spacingMobile={buttonMobilePadding}
						handleSpacingUnitHandler={handlePaddingUnitChange}
						spacingCombineBtn={buttonPaddingLink}
						spacingCombineBtnHandler={handlePaddingCombineBtn}
						setAttributes={setAttributes}
					/>
					<FB_Spacing
						label={__("Margin", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleMarginUnitsHandler}
						spacingUnits={buttonMarginUnits}
						spacingDesktop={buttonDesktopMargin}
						spacingTablet={buttonTabMargin}
						spacingMobile={buttonMobileMargin}
						handleSpacingUnitHandler={handleMarginUnitChange}
						spacingCombineBtn={buttonMarginLink}
						spacingCombineBtnHandler={handleMarginCombineBtn}
						setAttributes={setAttributes}
					/>
				</PanelBody>

				</>
			)}
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
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
}
export default memo(Inspector);