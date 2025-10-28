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

		/** Style Attributes */
		/** Heading */
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
		/** End Heading */

		/** Start Advanced Attributes */
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
		/** End Global Setting */

		/** End Advanced Attributes */
	} = attributes;

	const deviceType = useDeviceType();

	useEffect(() => {
		if (clientId && !blockId) {
			setAttributes({
				blockId: "fb-post-comment-form-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	/* ======================================================================= */

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
                margin-bottom: 0 0 30px 0;
                color: #1e1e1e;
                padding-bottom: 15px;
                border-bottom: 1px solid #e1e1e1;
            }

            /* Comments List */
            .${blockId} .fb-comments-list {
                margin-bottom: 40px;
            }

            /* Comment Items */
            .${blockId} .fb-comment {
                display: flex;
                gap: 15px;
                padding: 20px 0;
                border-bottom: 1px solid #f0f0f0;
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

            ${commentCountTitleGlobalTypoSwitcher.fontFamily === true &&
				commentCountTitleGlobalTypographyData.fontFamily
				? `font-family: ${commentCountTitleGlobalTypographyData.fontFamily};`
				: ""
			}
            ${commentCountTitleGlobalTypoSwitcher.fontSize === true &&
				commentCountTitleGlobalTypographyData.fontSize
				? `font-size: ${commentCountTitleGlobalTypographyData.fontSize};`
				: ""
			}
            ${commentCountTitleGlobalTypoSwitcher.fontWeight === true &&
				commentCountTitleGlobalTypographyData.fontWeight
				? `font-weight: ${commentCountTitleGlobalTypographyData.fontWeight};`
				: ""
			}
            ${commentCountTitleGlobalTypoSwitcher.fontStyle === true &&
				commentCountTitleGlobalTypographyData.fontStyle
				? `font-style: ${commentCountTitleGlobalTypographyData.fontStyle};`
				: ""
			}
            ${commentCountTitleGlobalTypoSwitcher.textTransform === true &&
				commentCountTitleGlobalTypographyData.textTransform
				? `text-transform: ${commentCountTitleGlobalTypographyData.textTransform};`
				: ""
			}
            ${commentCountTitleGlobalTypoSwitcher.textDecoration === true &&
				commentCountTitleGlobalTypographyData.textDecoration
				? `text-decoration: ${commentCountTitleGlobalTypographyData.textDecoration};`
				: ""
			}
            ${commentCountTitleGlobalTypoSwitcher.letterSpacing === true &&
				commentCountTitleGlobalTypographyData.letterSpacing
				? `letter-spacing: ${commentCountTitleGlobalTypographyData.letterSpacing};`
				: ""
			}
            ${commentCountTitleGlobalTypoSwitcher.lineHeight === true &&
				commentCountTitleGlobalTypographyData.lineHeight
				? `line-height: ${commentCountTitleGlobalTypographyData.lineHeight};`
				: ""
			}

						${commentCountTitleGlobalTypoSwitcher.fontFamily === false &&
				commentCountTitleFontFamily
				? `font-family: ${commentCountTitleFontFamily};`
				: ""
			}
						${commentCountTitleGlobalTypoSwitcher.fontSize === false &&
				commentCountTitleFontSize.Desktop
				? `font-size: ${commentCountTitleFontSize.Desktop}${commentCountTitleFontSizeUnits.Desktop};`
				: ""
			}
						${commentCountTitleGlobalTypoSwitcher.fontWeight === false &&
				commentCountTitleFontWeight
				? `font-weight: ${commentCountTitleFontWeight};`
				: ""
			}
						${commentCountTitleGlobalTypoSwitcher.fontStyle === false &&
				commentCountTitleFontStyle
				? `font-style: ${commentCountTitleFontStyle};`
				: ""
			}
						${commentCountTitleGlobalTypoSwitcher.textTransform === false &&
				commentCountTitleTextTransform
				? `text-transform: ${commentCountTitleTextTransform};`
				: ""
			}
						${commentCountTitleGlobalTypoSwitcher.textDecoration === false &&
				commentCountTitleTextDecoration
				? `text-decoration: ${commentCountTitleTextDecoration};`
				: ""
			}
						${commentCountTitleGlobalTypoSwitcher.letterSpacing === false &&
				commentCountTitleLetterSpacing.Desktop
				? `letter-spacing: ${commentCountTitleLetterSpacing.Desktop}${commentCountTitleLetterSpacingUnits.Desktop};`
				: ""
			}
						${commentCountTitleGlobalTypoSwitcher.lineHeight === false &&
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


				/* Advance Control Global Style */
				.${blockId}.fb-post-comment-form-block{
			   ${postGlobalPositionType === "default" ? `position: relative;` : ""}
            ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative"
				? `width: 100%;`
				: ""
			}
            ${postGlobalPositionType !== "default"
				? `position: ${postGlobalPositionType};`
				: ""
			}
            ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative" &&
				postGlobalHZOrientationType === "left" &&
				postGlobalHZLeftOffset.Desktop !== undefined
				? `left: ${postGlobalHZLeftOffset.Desktop}${postGlobalHZLeftOffsetUnits.Desktop};`
				: ""
			}
            ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative" &&
				postGlobalHZOrientationType === "right" &&
				postGlobalHZRightOffset.Desktop !== undefined
				? `right: ${postGlobalHZRightOffset.Desktop}${postGlobalHZRightOffsetUnits.Desktop};`
				: ""
			}
            ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative" &&
				postGlobalVROrientationType === "top" &&
				postGlobalVRTopOffset.Desktop !== undefined
				? `top: ${postGlobalVRTopOffset.Desktop}${postGlobalVRTopOffsetUnits.Desktop};`
				: ""
			}
            ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative" &&
				postGlobalVROrientationType === "bottom" &&
				postGlobalVRBottomOffset.Desktop !== undefined
				? `bottom: ${postGlobalVRBottomOffset.Desktop}${postGlobalVRBottomOffsetUnits.Desktop};`
				: ""
			}


					${postGlobalZIndex.Desktop ? `z-index: ${postGlobalZIndex.Desktop};` : ""}
                    ${postGlobalOverflow !== "default"
				? `overflow: ${postGlobalOverflow};`
				: ""
			}
										transition: all 0.3s ease-in-out;				
					}



				  .${blockId}.fb-post-comment-form-block .fb-post-comment-form{
                    ${postGlobalDesktopPaddingWidth &&
				postGlobalPaddingDesktop.top
				? `padding: ${postGlobalDesktopPaddingWidth};`
				: ""
			}
                                ${postGlobalDesktopMarginWidth &&
				postGlobalMarginDesktop.top
				? `margin: ${postGlobalDesktopMarginWidth};`
				: ""
			}

                    ${postGlobalNormalBackgroundType === "gradient"
				? `  
                        ${postGlobalNormalCustomGradientSwitcher &&
					postGlobalNormalCustomGradientInputValue
					? `background: ${postGlobalNormalCustomGradientInputValue};`
					: `background: ${postGlobalNormalGradientColor};`
				}
                    `
				: `
                        ${postGlobalNormalClassicColor
					? `background: ${postGlobalNormalClassicColor};`
					: ""
				}
                    `
			}

                    ${postGlobalBorder ? `border: ${postGlobalBorder};` : ""} 

                    ${postGlobalDesktopBorderWidth &&
				postGlobalBorderDesktop.top
				? `border-width: ${postGlobalDesktopBorderWidth};`
				: ""
			}
                    ${postGlobalDesktopBorderRadiusWidth &&
				postGlobalBorderRadiusDesktop.top
				? `border-radius: ${postGlobalDesktopBorderRadiusWidth}!important;`
				: ""
			}
                    ${postGlobalBorderColor
				? `border-color: ${postGlobalBorderColor};`
				: ""
			}
                    ${postGlobalBoxShadowCssValue
				? `box-shadow: ${postGlobalBoxShadowCssValue} !important;`
				: ""
			}
                                ${postGlobalNormalBackgroundType === "gradient"
				? `  
                        ${postGlobalNormalCustomGradientSwitcher &&
					postGlobalNormalCustomGradientInputValue
					? `background: ${postGlobalNormalCustomGradientInputValue};`
					: `background: ${postGlobalNormalGradientColor};`
				}
                    `
				: `
                        ${postGlobalNormalClassicColor
					? `background: ${postGlobalNormalClassicColor};`
					: ""
				}
                    `
			}

                }

                .${blockId}.fb-post-comment-form-block .fb-post-comment-form:hover {
                     ${postGlobalHoverBackgroundType === "gradient"
				? `  
                        ${postGlobalHoverCustomGradientSwitcher &&
					postGlobalHoverCustomGradientInputValue
					? `background: ${postGlobalHoverCustomGradientInputValue};`
					: `background: ${postGlobalHoverGradientColor};`
				}
                    `
				: `
                        ${postGlobalHoverClassicColor
					? `background: ${postGlobalHoverClassicColor};`
					: ""
				}

                         ${postGlobalBorderHoverColor
					? `border-color: ${postGlobalBorderHoverColor};`
					: ""
				}
                        ${postGlobalBoxShadowHoverCssValue
					? `box-shadow: ${postGlobalBoxShadowHoverCssValue}!important;`
					: ""
				}
                    
                    `
			}
                }


				/*=======================  Tablet Styles =====================  */
				@media only screen and (max-width: 1024px ) {


							.${blockId} .fb-comment-count-title  {
							  ${commentCountTitleGlobalTypoSwitcher.fontSize === false &&
				commentCountTitleFontSize.Tablet
				? `font-size: ${commentCountTitleFontSize.Tablet}${commentCountTitleFontSizeUnits.Tablet};`
				: ""
			}
                ${commentCountTitleGlobalTypoSwitcher.letterSpacing === false &&
				commentCountTitleLetterSpacing.Tablet
				? `letter-spacing: ${commentCountTitleLetterSpacing.Tablet}${commentCountTitleLetterSpacingUnits.Tablet};`
				: ""
			}
                ${commentCountTitleGlobalTypoSwitcher.lineHeight === false &&
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


							/* Advanced Control Global Style - Tablet */
                .${blockId}.fb-post-comment-form-block {
                    ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative" &&
				postGlobalHZOrientationType === "left" &&
				postGlobalHZLeftOffset.Tablet !== undefined
				? `left: ${postGlobalHZLeftOffset.Tablet}${postGlobalHZLeftOffsetUnits.Tablet};`
				: ""
			}
                    ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative" &&
				postGlobalHZOrientationType === "right" &&
				postGlobalHZRightOffset.Tablet !== undefined
				? `right: ${postGlobalHZRightOffset.Tablet}${postGlobalHZRightOffsetUnits.Tablet};`
				: ""
			}
                    ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative" &&
				postGlobalVROrientationType === "top" &&
				postGlobalVRTopOffset.Tablet !== undefined
				? `top: ${postGlobalVRTopOffset.Tablet}${postGlobalVRTopOffsetUnits.Tablet};`
				: ""
			}
                    ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative" &&
				postGlobalVROrientationType === "bottom" &&
				postGlobalVRBottomOffset.Tablet !== undefined
				? `bottom: ${postGlobalVRBottomOffset.Tablet}${postGlobalVRBottomOffsetUnits.Tablet};`
				: ""
			}
                    ${postGlobalZIndex.Tablet
				? `z-index: ${postGlobalZIndex.Tablet}`
				: ""
			}

                }

                .${blockId}.fb-post-comment-form-block .fb-post-comment-form{
                    ${postGlobalTabletPaddingWidth &&
				postGlobalPaddingTablet.top
				? `padding: ${postGlobalTabletPaddingWidth};`
				: ""
			}
                                        ${postGlobalTabletMarginWidth &&
				postGlobalMarginTablet.top
				? `margin: ${postGlobalTabletMarginWidth};`
				: ""
			}

                    
                    ${postGlobalTabletBorderWidth && postGlobalBorderTablet.top
				? `border-width: ${postGlobalTabletBorderWidth};`
				: ""
			}
                        ${postGlobalTabletBorderRadiusWidth &&
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
					  ${commentCountTitleGlobalTypoSwitcher.fontSize === false &&
				commentCountTitleFontSize.Mobile
				? `font-size: ${commentCountTitleFontSize.Mobile}${commentCountTitleFontSizeUnits.Mobile};`
				: ""
			}
						${commentCountTitleGlobalTypoSwitcher.letterSpacing === false &&
				commentCountTitleLetterSpacing.Mobile
				? `letter-spacing: ${commentCountTitleLetterSpacing.Mobile}${commentCountTitleLetterSpacingUnits.Mobile};`
				: ""
			}
						${commentCountTitleGlobalTypoSwitcher.lineHeight === false &&
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
												
							 /* Advance Control Global Style - Mobile */
                .${blockId}.fb-post-comment-form-block {
                        ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative" &&
				postGlobalHZOrientationType === "left" &&
				postGlobalHZLeftOffset.Mobile !== undefined
				? `left: ${postGlobalHZLeftOffset.Mobile}${postGlobalHZLeftOffsetUnits.Mobile};`
				: ""
			}
                        ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative" &&
				postGlobalHZOrientationType === "right" &&
				postGlobalHZRightOffset.Mobile !== undefined
				? `right: ${postGlobalHZRightOffset.Mobile}${postGlobalHZRightOffsetUnits.Mobile};`
				: ""
			}
                        ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative" &&
				postGlobalVROrientationType === "top" &&
				postGlobalVRTopOffset.Mobile !== undefined
				? `top: ${postGlobalVRTopOffset.Mobile}${postGlobalVRTopOffsetUnits.Mobile};`
				: ""
			}
                        ${postGlobalPositionType !== "default" &&
				postGlobalPositionType !== "relative" &&
				postGlobalVROrientationType === "bottom" &&
				postGlobalVRBottomOffset.Mobile !== undefined
				? `bottom: ${postGlobalVRBottomOffset.Mobile}${postGlobalVRBottomOffsetUnits.Mobile};`
				: ""
			} 

                        ${postGlobalZIndex.Mobile
				? `z-index: ${postGlobalZIndex.Mobile}`
				: ""
			}

                     
                }


                .${blockId}.fb-post-comment-form-block .fb-post-comment-form{
                
                       ${postGlobalMobilePaddingWidth &&
				postGlobalPaddingMobile.top
				? `padding: ${postGlobalMobilePaddingWidth}`
				: ""
			}
                                        ${postGlobalMobileMarginWidth &&
				postGlobalMarginMobile.top
				? `margin: ${postGlobalMobileMarginWidth}`
				: ""
			}

                         ${postGlobalMobileBorderWidth &&
				postGlobalBorderMobile.top
				? `border-width: ${postGlobalMobileBorderWidth};`
				: ""
			}
                        ${postGlobalMobileBorderRadiusWidth &&
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
		<PanelBody title={__("Heading", "frontis-blocks")} initialOpen={true}>
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
