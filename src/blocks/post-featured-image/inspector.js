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

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		/** Start General Settings */
		isLink,
		rel,
		linkTarget,
		useFirstImage,
		imageSize,
		imageAlignment,

		/** Start Style Settings */
		mediaHeight,
		mediaSize,
		mediaSizeUnits,
		mediaHeightUnits,
		autoHeightSwitch,
		autoFitSwitch,
		imageFit,
		imageBorder,
		imageBorderColorSwitcher,
		imageBorderColor,
		imageBorderHoverColor,
		imageBorderUnits,
		imageBorderDesktop,
		imageBorderTablet,
		imageBorderMobile,
		imageBorderLink,
		imageBorderRadiusUnits,
		imageBorderRadiusDesktop,
		imageBorderRadiusTablet,
		imageBorderRadiusMobile,
		imageBorderRadiusLink,
		imageBoxShadowValues,
		imageBoxShadowCssValue,
		/** End Style Settings */

		/** Start Advanced Attributes */
		wrapperId,
		wrapperClass,

		featuredImageDesktopSwitcher,
		featuredImageTabletSwitcher,
		featuredImageMobileSwitcher,

		featuredImageGlobalCustomCSS,

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
				blockId: "fb-post-featured-image-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	/** Start Image Border */
	const handleImageBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageBorderMobile: {
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
						imageBorderDesktop: { ...imageBorderDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						imageBorderTablet: { ...imageBorderTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						imageBorderMobile: { ...imageBorderMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleImageBorderCombineBtn = () => {
		setAttributes({ imageBorderLink: !imageBorderLink });
	};

	const handleImageBorderUnitsHandler = (unit) => {
		setAttributes({
			imageBorderUnits: {
				...imageBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const imageDesktopBorder = `${imageBorderDesktop.top}${imageBorderUnits.Desktop} ${imageBorderDesktop.right}${imageBorderUnits.Desktop} ${imageBorderDesktop.bottom}${imageBorderUnits.Desktop} ${imageBorderDesktop.left}${imageBorderUnits.Desktop}`;
	const imageTabletBorder = `${imageBorderTablet.top}${imageBorderUnits.Tablet} ${imageBorderTablet.right}${imageBorderUnits.Tablet} ${imageBorderTablet.bottom}${imageBorderUnits.Tablet} ${imageBorderTablet.left}${imageBorderUnits.Tablet}`;
	const imageMobileBorder = `${imageBorderMobile.top}${imageBorderUnits.Mobile} ${imageBorderMobile.right}${imageBorderUnits.Mobile} ${imageBorderMobile.bottom}${imageBorderUnits.Mobile} ${imageBorderMobile.left}${imageBorderUnits.Mobile}`;
	/** End Image Border */

	/** Start Image Border Radius */
	const handleImageBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageBorderRadiusMobile: {
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
						imageBorderRadiusDesktop: {
							...imageBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageBorderRadiusTablet: {
							...imageBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageBorderRadiusMobile: {
							...imageBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleImageBorderRadiusCombineBtn = () => {
		setAttributes({ imageBorderRadiusLink: !imageBorderRadiusLink });
	};

	const handleImageBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			imageBorderRadiusUnits: {
				...imageBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const imageDesktopBorderRadius = `${imageBorderRadiusDesktop.top}${imageBorderRadiusUnits.Desktop} ${imageBorderRadiusDesktop.right}${imageBorderRadiusUnits.Desktop} ${imageBorderRadiusDesktop.bottom}${imageBorderRadiusUnits.Desktop} ${imageBorderRadiusDesktop.left}${imageBorderRadiusUnits.Desktop}`;
	const imageTabletBorderRadius = `${imageBorderRadiusTablet.top}${imageBorderRadiusUnits.Tablet} ${imageBorderRadiusTablet.right}${imageBorderRadiusUnits.Tablet} ${imageBorderRadiusTablet.bottom}${imageBorderRadiusUnits.Tablet} ${imageBorderRadiusTablet.left}${imageBorderRadiusUnits.Tablet}`;
	const imageMobileBorderRadius = `${imageBorderRadiusMobile.top}${imageBorderRadiusUnits.Mobile} ${imageBorderRadiusMobile.right}${imageBorderRadiusUnits.Mobile} ${imageBorderRadiusMobile.bottom}${imageBorderRadiusUnits.Mobile} ${imageBorderRadiusMobile.left}${imageBorderRadiusUnits.Mobile}`;
	/** End Image Border Radius */

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

	// Generate ALL block styles with blockId targeting the HTML tag
	const allBlockStyle = useMemo(
		() => `

            
            /* Target the image wrapper */
            .${blockId} .fb-post-featured-image {
                display: flex !important;
                margin-block-start: 0;
                margin-block-end: 0;
                transition: all .3s ease;
            }

            .${blockId} .fb-post-featured-image .fb-post-featured-image-inner {
                // width: 100%;
								width: auto;
            }

            /* Target the image */
            .${blockId}.fb-post-featured-image-block .fb-post-featured-image  img.fb-post-featured-image-img{
                // max-width: 100%;
                width: 100%;
								// width: auto;
                height: 100%;
                transition: all .3s ease;
            }

            /* Target the link */
            .${blockId} .fb-post-featured-image-link {
                width: 100%;
                height: 100%;
                display: block;
                text-decoration: none;
                transition: all .3s ease;
            }

            /* Placeholder styling */
            .${blockId} .fb-post-featured-image-placeholder {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f8f9fa;
                border: 2px dashed #dee2e6;
                color: #6c757d;
                padding: 40px 20px;
                text-align: center;
                min-height: 200px;
            }

            /*===========================  Desktop Styles ===========================  */
            .${blockId} .fb-post-featured-image {
                ${imageAlignment.Desktop
									? `justify-content: ${imageAlignment.Desktop};`
									: ""
								}
            }

            .${blockId}.fb-post-featured-image-block .fb-post-featured-image  .fb-post-featured-image-inner{
                ${mediaSize.Desktop
									? `width: ${mediaSize.Desktop}${mediaSizeUnits.Desktop};`
									: ""
								}
													${!autoHeightSwitch && mediaHeight.Desktop
									? `height: ${mediaHeight.Desktop}${mediaHeightUnits.Desktop};`
									: `height: auto;`
								}
									${imageBorder ? `border: ${imageBorder};` : ""}
													${imageDesktopBorder && imageBorderDesktop.top
									? `border-width: ${imageDesktopBorder};`
									: ""
								}
													${imageDesktopBorderRadius && imageBorderRadiusDesktop.top
									? `border-radius: ${imageDesktopBorderRadius};`
									: ""
								}
													${imageBorderColor ? `border-color: ${imageBorderColor};` : ""}
													${imageBoxShadowCssValue
									? `box-shadow: ${imageBoxShadowCssValue};`
									: ""
								}
                overflow: hidden;
                transition: all 0.3s ease-in-out;
            }

            .${blockId}.fb-post-featured-image-block .fb-post-featured-image .fb-post-featured-image-inner  img.fb-post-featured-image-img{

                ${autoFitSwitch ? `object-fit : ${imageFit};` : ""}

            }

            .${blockId}.fb-post-featured-image-block .fb-post-featured-image  .fb-post-featured-image-inner:hover {
                ${imageBorderHoverColor
				? `border-color: ${imageBorderHoverColor};`
				: ""
			}
            }



            /* Advance Control Global Style */
				.${blockId}.fb-post-featured-image-block {
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

                .${blockId}.fb-post-featured-image-block .fb-post-featured-image{
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

                .${blockId}.fb-post-featured-image-block .fb-post-featured-image:hover {
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


             /*===========================  Tablet Styles ===========================  */
            @media only screen and (max-width: 1024px) {
                .${blockId} .fb-post-featured-image {
                    ${imageAlignment.Tablet
				? `justify-content: ${imageAlignment.Tablet};`
				: ""
			}
                }


                .${blockId}.fb-post-featured-image-block .fb-post-featured-image  .fb-post-featured-image-inner{
                    ${mediaSize.Tablet
				? `width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};`
				: ""
			}
                    ${!autoHeightSwitch && mediaHeight.Tablet
				? `height: ${mediaHeight.Tablet}${mediaHeightUnits.Tablet};`
				: `height: auto;`
			}

                    ${imageTabletBorder
				? `border-width: ${imageTabletBorder};`
				: ""
			}
                    ${imageTabletBorderRadius
				? `border-radius: ${imageTabletBorderRadius};`
				: ""
			}
                }

                /* Advanced Control Global Style - Tablet */
                .${blockId}.fb-post-featured-image-block {
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

                .${blockId}.fb-post-featured-image-block .fb-post-featured-image{
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


            /* ===========================  Mobile Styles ===========================  */
            @media (max-width: 767px) {
                .${blockId} .fb-post-featured-image {
                    ${imageAlignment.Mobile
				? `justify-content: ${imageAlignment.Mobile};`
				: ""
			}
                }

                .${blockId}.fb-post-featured-image-block .fb-post-featured-image  .fb-post-featured-image-inner{
                    ${mediaSize.Mobile
				? `width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};`
				: ""
			}
                    ${!autoHeightSwitch && mediaHeight.Mobile
				? `height: ${mediaHeight.Mobile}${mediaHeightUnits.Mobile};`
				: `height: auto;`
			}
                    ${imageMobileBorder && imageBorderMobile.top
				? `border-width: ${imageMobileBorder};`
				: ""
			}
                    ${imageMobileBorderRadius && imageBorderRadiusMobile.top
				? `border-radius: ${imageMobileBorderRadius};`
				: ""
			}
                }

                /* Advance Control Global Style - Mobile */
                .${blockId}.fb-post-featured-image-block {
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


                .${blockId}.fb-post-featured-image-block .fb-post-featured-image{
                
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


        `,
		[attributes],
	);

	const customCss = getCustomCss(featuredImageGlobalCustomCSS, `.${blockId}`);
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
				<ToggleControl
					label={__("Enable Link", "frontis-blocks")}
					checked={isLink}
					onChange={(value) => setAttributes({ isLink: value })}
				/>

				{isLink && (
					<>
						<ToggleControl
							label={__("Open in new tab", "frontis-blocks")}
							checked={linkTarget === "_blank"}
							onChange={(value) =>
								setAttributes({
									linkTarget: value ? "_blank" : "_self",
								})
							}
						/>

						<FB_InputControl
							label={__("Link Rel", "frontis-blocks")}
							value={rel}
							onChangeValue={(value) => setAttributes({ rel: value })}
						/>

						<p className="fb-control-help">
							{__("For example: nofollow, noreferrer, etc.", "frontis-blocks")}
						</p>

						<div className="fb-control-divider"></div>
					</>
				)}

				<ToggleControl
					label={__("Image from post content", "frontis-blocks")}
					checked={useFirstImage}
					onChange={(value) => setAttributes({ useFirstImage: value })}
				/>

				<p
					className="fb-control-help"
					style={{
						marginTop: "8px",
						marginBottom: "20px",
					}}
				>
					{__(
						"Use the first image from post content when no featured image is available.",
						"frontis-blocks",
					)}
				</p>
			</BaseControl>

			<div className="fb-control-divider"></div>

			{
				<SelectControl
					label={__("Image Dimensions", "frontis-blocks")}
					value={imageSize}
					options={IMAGE_SIZES}
					onChange={(value) => setAttributes({ imageSize: value })}
				/>

				
			}
				<p className="fb-control-help"
					style={{
						marginTop: "8px",
						marginBottom: "20px",
					}}
				>
					{__(
						"Only effective if a featured image is assigned to the post.",
						"frontis-blocks",
					)}
				</p>


			<FB_ResponsiveAlignmentControl
				label={__("Image Alignment", "frontis-blocks")}
				globalAlignment={imageAlignment}
				setGlobalAlignment={(value) => setAttributes({ imageAlignment: value })}
				deviceType={deviceType}
				setAttributes={setAttributes}
			/>
		</PanelBody>
	);

	const styleControls = (
		<PanelBody title={__("Image Style", "frontis-blocks")} initialOpen={true}>
			<FB_Range
				min={1}
				max={mediaSizeUnits[deviceType] === "%" ? 100 : 1400}
				label={__("Width", "frontis-blocks")}
				rangeValue={mediaSize}
				onChangeHandler={(value) => setAttributes({ mediaSize: value })}
				rangeUnitHandler={(value) => setAttributes({ mediaSizeUnits: value })}
				deviceType={deviceType}
				units={mediaSizeUnits}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={""}
			/>
			<FB_Range
				min={1}
				max={mediaHeightUnits[deviceType] === "%" ? 100 : 1400}
				label={__("Height", "frontis-block")}
				rangeValue={mediaHeight}
				onChangeHandler={(value) => setAttributes({ mediaHeight: value })}
				rangeUnitHandler={(value) => setAttributes({ mediaHeightUnits: value })}
				deviceType={deviceType}
				units={mediaHeightUnits}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={""}
				disabled={autoHeightSwitch}
			/>

			{autoHeightSwitch && (
				<p className="fb-control-help"
					style={{
						marginTop: "-14px",
						marginBottom: "20px",
					}}
				>
					{__(
						"Disabling custom height adjustments while Auto Height is enabled.",
						"frontis-blocks",
					)}
				</p>
			)}

			{/* Auto Height */}
			<ToggleControl
				__nextHasNoMarginBottom
				label={__("Auto Height", "frontis-block")}
				checked={autoHeightSwitch}
				onChange={(newValue) => {
					setAttributes({ autoHeightSwitch: newValue });
				}}
			/>

			{/* Auto Fit Image */}
			{!autoHeightSwitch && (
				<ToggleControl
					__nextHasNoMarginBottom
					label={__("Auto Fit Image?", "frontis-block")}
					checked={autoFitSwitch}
					onChange={(newValue) => {
						setAttributes({ autoFitSwitch: newValue });
					}}
				/>
			)}

			{/* Image Fit Options */}
			{!autoHeightSwitch && autoFitSwitch && (
				<SelectControl
					label={__("Image Fit Options", "frontis-blocks")}
					value={imageFit || "cover"}
					options={IMAGE_AUTO_FIT}
					onChange={(size) => setAttributes({ imageFit: size })}
					__nextHasNoMarginBottom
				/>
			)}

			<SelectControl
				label={__("Border Style", "frontis-blocks")}
				value={imageBorder}
				options={BORDER_STYLES}
				onChange={(value) => setAttributes({ imageBorder: value })}
			/>

			<FB_SwitcherControl
				label={__("Border Color", "frontis-blocks")}
				globalSwitcher={imageBorderColorSwitcher}
				setGlobalSwitcher={(value) =>
					setAttributes({ imageBorderColorSwitcher: value })
				}
			/>

			{imageBorderColorSwitcher === "normal" && (
				<FB_ColorControl
					label={__("Normal Color", "frontis-blocks")}
					globalColor={imageBorderColor}
					setGlobalColor={(value) =>
						setAttributes({
							imageBorderColor: value === undefined ? "" : value,
						})
					}
				/>
			)}

			{imageBorderColorSwitcher === "hover" && (
				<FB_ColorControl
					label={__("Hover Color", "frontis-blocks")}
					globalColor={imageBorderHoverColor}
					setGlobalColor={(value) =>
						setAttributes({
							imageBorderHoverColor: value === undefined ? "" : value,
						})
					}
				/>
			)}

			<FB_Spacing
				label={__("Border Width", "frontis-blocks")}
				deviceType={deviceType}
				spacingUnitsHandler={handleImageBorderUnitsHandler}
				spacingUnits={imageBorderUnits}
				spacingDesktop={imageBorderDesktop}
				spacingTablet={imageBorderTablet}
				spacingMobile={imageBorderMobile}
				handleSpacingUnitHandler={handleImageBorderUnitChange}
				spacingCombineBtn={imageBorderLink}
				spacingCombineBtnHandler={handleImageBorderCombineBtn}
				setAttributes={setAttributes}
			/>

			<FB_Spacing
				label={__("Border Radius", "frontis-blocks")}
				deviceType={deviceType}
				spacingUnitsHandler={handleImageBorderRadiusUnitsHandler}
				spacingUnits={imageBorderRadiusUnits}
				spacingDesktop={imageBorderRadiusDesktop}
				spacingTablet={imageBorderRadiusTablet}
				spacingMobile={imageBorderRadiusMobile}
				handleSpacingUnitHandler={handleImageBorderRadiusUnitChange}
				spacingCombineBtn={imageBorderRadiusLink}
				spacingCombineBtnHandler={handleImageBorderRadiusCombineBtn}
				setAttributes={setAttributes}
			/>

			<FB_BoxShadowControl
				onBoxShadowChange={(value) =>
					setAttributes({ imageBoxShadowValues: value })
				}
				initialShadowValue={imageBoxShadowValues}
				onBoxShadowStyleChange={(value) =>
					setAttributes({ imageBoxShadowCssValue: value })
				}
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
					desktopValue={featuredImageDesktopSwitcher}
					setDesktopValue={(value) =>
						setAttributes({
							featuredImageDesktopSwitcher: value,
						})
					}
					tabletValue={featuredImageTabletSwitcher}
					setTabletValue={(value) =>
						setAttributes({
							featuredImageTabletSwitcher: value,
						})
					}
					mobileValue={featuredImageMobileSwitcher}
					setMobileValue={(value) =>
						setAttributes({
							featuredImageMobileSwitcher: value,
						})
					}
				/>
			</PanelBody>

			<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
				<FB_CustomCSSEditor
					value={featuredImageGlobalCustomCSS}
					onChangeValue={(value) =>
						setAttributes({ featuredImageGlobalCustomCSS: value })
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
