import { __ } from "@wordpress/i18n";
import { useMemo, useEffect } from "@wordpress/element";
import {
    PanelBody,
    BaseControl,
    ToggleControl,
    SelectControl,
} from "@wordpress/components";
import { IMAGE_OBJECT_FIT, IMAGE_SIZES, OVERFLOW_OP } from "./constants/constants";
import getCustomCss from "@Utils/getCustomCss";
import { useDeviceType } from "@Config/displayType";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_ResponsiveAlignmentControl from "@Components/responsive-alignment-control";
import FB_InputControl from "@Components/input-control";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_Range from "@Components/range";
import FB_PositionControl from "@Components/position-control";

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockId,    
        isLink,
        rel,
        linkTarget,
        useFirstImage,
        
        imageSize,
        imageAlignment,
        
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

        /** End Advanced Attributes */

        blockStyle,
    } = attributes;

    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId && !blockId) {
            setAttributes({ blockId: "fb-post-featured-image-" + clientId.slice(0, 8) });
        }
    }, [clientId]);

    // Generate ALL block styles with blockId targeting the HTML tag
    const allBlockStyle = useMemo(
        () => `

            
            .${blockId} {
                width: 100%;
            }


            /* Target the image wrapper */
            .${blockId} .fb-post-featured-image {
                display: flex;
                width: 100%;
                margin-block-start: 0;
                margin-block-end: 0;
                transition: all .3s ease;
            }

            /* Target the image */
            .${blockId} .fb-post-featured-image-img {
                display: block;
                max-width: 100%;
                height: auto;
                transition: all .3s ease;
            }

            /* Target the link */
            .${blockId} .fb-post-featured-image-link {
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
                ${imageAlignment.Desktop ? `justify-content: ${imageAlignment.Desktop};` : ""}
            }

            /* Advance Control Global Style */
				.${blockId}.fb-post-featured-image-block {
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


             /*===========================  Tablet Styles ===========================  */
            @media only screen and (max-width: 1024px) {
                .${blockId} .fb-post-featured-image {
                    ${imageAlignment.Tablet ? `justify-content: ${imageAlignment.Tablet};` : ""}
                }

                /* Advanced Control Global Style - Tablet */
                .${blockId}.fb-post-featured-image-block {
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
                    ${postGlobalZIndex.Tablet ? `z-index: ${postGlobalZIndex.Tablet}` : ""}
                }

            }

            /* ===========================  Mobile Styles ===========================  */
            @media (max-width: 767px) {
                .${blockId} .fb-post-featured-image {
                    ${imageAlignment.Mobile ? `justify-content: ${imageAlignment.Mobile};` : ""}
                }

                /* Advance Control Global Style - Mobile */
                .${blockId}.fb-post-featured-image-block {
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

                                ${postGlobalZIndex.Mobile ? `z-index: ${postGlobalZIndex.Mobile}` : ""}
                }





            }


        `,
        [
            blockId,
            isLink,
            imageAlignment,

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
            
            /** End Advanced Attributes */
        ],
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
                    label={__("Make image linkable", "frontis-blocks")}
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
                            onChange={(value) => setAttributes({ rel: value })}
                        />

                        <p style={{ fontSize: "12px", color: "#888" }}>
                            {__("For example: nofollow, noreferrer, etc.", "frontis-blocks")}
                        </p>
                    </>
                )}

                <div className="fb-control-divider"></div>

                <ToggleControl
                    label={__("Use first image from post content", "frontis-blocks")}
                    checked={useFirstImage}
                    onChange={(value) => setAttributes({ useFirstImage: value })}
                    help={__("Display first image from post content if no featured image is set", "frontis-blocks")}
                />


            </BaseControl>

            <div className="fb-control-divider"></div>

            <SelectControl
                label={__("Image Size", "frontis-blocks")}
                value={imageSize}
                options={IMAGE_SIZES}
                onChange={(value) => setAttributes({ imageSize: value })}
            />

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
        <PanelBody title={__("Image Style", "frontis-blocks")} initialOpen={false}>

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
            <style>{editorStyle}</style>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}