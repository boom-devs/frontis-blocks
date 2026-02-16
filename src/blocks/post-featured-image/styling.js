/**
 * Post Featured Image Block-Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes-Block attributes
 * @returns {string} CSS string
 */
const generatePostFeaturedImageStyle = (attributes) => {
    const {
        blockID,
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

    const imageDesktopBorder = `${imageBorderDesktop.top}${imageBorderUnits.Desktop} ${imageBorderDesktop.right}${imageBorderUnits.Desktop} ${imageBorderDesktop.bottom}${imageBorderUnits.Desktop} ${imageBorderDesktop.left}${imageBorderUnits.Desktop}`;
	const imageTabletBorder = `${imageBorderTablet.top}${imageBorderUnits.Tablet} ${imageBorderTablet.right}${imageBorderUnits.Tablet} ${imageBorderTablet.bottom}${imageBorderUnits.Tablet} ${imageBorderTablet.left}${imageBorderUnits.Tablet}`;
	const imageMobileBorder = `${imageBorderMobile.top}${imageBorderUnits.Mobile} ${imageBorderMobile.right}${imageBorderUnits.Mobile} ${imageBorderMobile.bottom}${imageBorderUnits.Mobile} ${imageBorderMobile.left}${imageBorderUnits.Mobile}`;

    const imageDesktopBorderRadius = `${imageBorderRadiusDesktop.top}${imageBorderRadiusUnits.Desktop} ${imageBorderRadiusDesktop.right}${imageBorderRadiusUnits.Desktop} ${imageBorderRadiusDesktop.bottom}${imageBorderRadiusUnits.Desktop} ${imageBorderRadiusDesktop.left}${imageBorderRadiusUnits.Desktop}`;
	const imageTabletBorderRadius = `${imageBorderRadiusTablet.top}${imageBorderRadiusUnits.Tablet} ${imageBorderRadiusTablet.right}${imageBorderRadiusUnits.Tablet} ${imageBorderRadiusTablet.bottom}${imageBorderRadiusUnits.Tablet} ${imageBorderRadiusTablet.left}${imageBorderRadiusUnits.Tablet}`;
	const imageMobileBorderRadius = `${imageBorderRadiusMobile.top}${imageBorderRadiusUnits.Mobile} ${imageBorderRadiusMobile.right}${imageBorderRadiusUnits.Mobile} ${imageBorderRadiusMobile.bottom}${imageBorderRadiusUnits.Mobile} ${imageBorderRadiusMobile.left}${imageBorderRadiusUnits.Mobile}`;

    const postGlobalDesktopPaddingWidth = `${postGlobalPaddingDesktop.top}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.right}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.bottom}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.left}${postGlobalPaddingUnits.Desktop}`;
	const postGlobalTabletPaddingWidth = `${postGlobalPaddingTablet.top}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.right}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.bottom}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.left}${postGlobalPaddingUnits.Tablet}`;
	const postGlobalMobilePaddingWidth = `${postGlobalPaddingMobile.top}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.right}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.bottom}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.left}${postGlobalPaddingUnits.Mobile}`;

    const postGlobalDesktopMarginWidth = `${postGlobalMarginDesktop.top}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.right}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.bottom}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.left}${postGlobalMarginUnits.Desktop}`;
	const postGlobalTabletMarginWidth = `${postGlobalMarginTablet.top}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.right}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.bottom}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.left}${postGlobalMarginUnits.Tabelet}`;
	const postGlobalMobileMarginWidth = `${postGlobalMarginMobile.top}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.right}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.bottom}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.left}${postGlobalMarginUnits.Mobile}`;

    const postGlobalDesktopBorderWidth = `${postGlobalBorderDesktop.top}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.right}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.bottom}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.left}${postGlobalBorderUnits.Desktop}`;
	const postGlobalTabletBorderWidth = `${postGlobalBorderTablet.top}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.right}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.bottom}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.left}${postGlobalBorderUnits.Tablet}`;
	const postGlobalMobileBorderWidth = `${postGlobalBorderMobile.top}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.right}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.bottom}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.left}${postGlobalBorderUnits.Mobile}`;

    const postGlobalDesktopBorderRadiusWidth = `${postGlobalBorderRadiusDesktop.top}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.right}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.bottom}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.left}${postGlobalBorderRadiusUnits.Desktop}`;
    const postGlobalTabletBorderRadiusWidth = `${postGlobalBorderRadiusTablet.top}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.right}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.bottom}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.left}${postGlobalBorderRadiusUnits.Tablet}`;
    const postGlobalMobileBorderRadiusWidth = `${postGlobalBorderRadiusMobile.top}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.right}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.bottom}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.left}${postGlobalBorderRadiusUnits.Mobile}`;

    // Generate ALL block styles with blockID targeting the HTML tag
    const postFeaturedImageBlockStyle = `
        .${blockID} .fb-post-featured-image {
            display: flex !important;
            margin-block-start: 0;
            margin-block-end: 0;
            transition: all .3s ease;
        }

        .${blockID} .fb-post-featured-image .fb-post-featured-image-inner {
            // width: 100%;
                            width: auto;
        }

        /* Target the image */
        .${blockID}.fb-post-featured-image-block .fb-post-featured-image  img.fb-post-featured-image-img{
            // max-width: 100%;
            width: 100%;
                            // width: auto;
            height: 100%;
            transition: all .3s ease;
        }

        /* Target the link */
        .${blockID} .fb-post-featured-image-link {
            width: 100%;
            height: 100%;
            display: block;
            text-decoration: none;
            transition: all .3s ease;
        }

        /* Placeholder styling */
        .${blockID} .fb-post-featured-image-placeholder {
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
        .${blockID} .fb-post-featured-image {
            ${imageAlignment.Desktop
                                ? `justify-content: ${imageAlignment.Desktop};`
                                : ""
                            }
        }

        .${blockID}.fb-post-featured-image-block .fb-post-featured-image  .fb-post-featured-image-inner{
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

        .${blockID}.fb-post-featured-image-block .fb-post-featured-image .fb-post-featured-image-inner  img.fb-post-featured-image-img{

            ${autoFitSwitch ? `object-fit : ${imageFit};` : ""}

        }

        .${blockID}.fb-post-featured-image-block .fb-post-featured-image  .fb-post-featured-image-inner:hover {
            ${imageBorderHoverColor
            ? `border-color: ${imageBorderHoverColor};`
            : ""
        }
        }



        /* Advance Control Global Style */
            .${blockID}.fb-post-featured-image-block {
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

            .${blockID}.fb-post-featured-image-block .fb-post-featured-image{
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

            .${blockID}.fb-post-featured-image-block .fb-post-featured-image:hover {
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
            .${blockID} .fb-post-featured-image {
                ${imageAlignment.Tablet
            ? `justify-content: ${imageAlignment.Tablet};`
            : ""
        }
            }


            .${blockID}.fb-post-featured-image-block .fb-post-featured-image  .fb-post-featured-image-inner{
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
            .${blockID}.fb-post-featured-image-block {
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

            .${blockID}.fb-post-featured-image-block .fb-post-featured-image{
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
            .${blockID} .fb-post-featured-image {
                ${imageAlignment.Mobile
            ? `justify-content: ${imageAlignment.Mobile};`
            : ""
        }
            }

            .${blockID}.fb-post-featured-image-block .fb-post-featured-image  .fb-post-featured-image-inner{
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
            .${blockID}.fb-post-featured-image-block {
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


            .${blockID}.fb-post-featured-image-block .fb-post-featured-image{
            
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


    `;

    const customCss = getCustomCss(featuredImageGlobalCustomCSS, `.${blockID} `);
    return `${postFeaturedImageBlockStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generatePostFeaturedImageStyle;