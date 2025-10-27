import { __ } from "@wordpress/i18n";
import { useMemo, useEffect } from "@wordpress/element";
import {
    PanelBody,
    BaseControl,
    ToggleControl,
    TextareaControl,
} from "@wordpress/components";
import getCustomCss from "@Utils/getCustomCss";
import { useDeviceType } from "@Config/displayType";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_VisibilityControl from "@Components/visibility-control";
// import FB_DimensionControl from "@Components/dimension-control";
import FB_InputControl from "@Components/input-control";

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        showCommentTitle,
        showCommentsCount,
        showCommentForm,
        commentFormWidth,
        commentGap,
        avatarSize,

        formTitle,
        cancelReplyText,
        loginText,
        logoutText,
        buttonText,
        
        commentFormDesktopSwitcher,
        commentFormTabletSwitcher,
        commentFormMobileSwitcher,

        wrapperId,
        wrapperClass,
        commentFormGlobalCustomCSS,
        blockStyle,
    } = attributes;

    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId && !blockId) {
            setAttributes({ blockId: "fb-post-comment-form-" + clientId.slice(0, 8) });
        }
    }, [clientId]);

    // Generate ALL block styles with blockId targeting
    const allBlockStyle = useMemo(
        () => `
            /* Main block styles */
            .${blockId} .fb-post-comment-form {
                margin: 0 auto;
                padding: 0;
                ${commentFormWidth.Desktop ? `max-width: ${commentFormWidth.Desktop};` : ""}
            }

            /* Comment Count Title */
            .${blockId} .fb-comment-count-title {
                font-size: 20px;
                font-weight: 600;
                margin: 0 0 30px 0;
                color: #1e1e1e;
                padding-bottom: 15px;
                border-bottom: 1px solid #e1e1e1;
            }

            /* Comments List */
            .${blockId} .fb-comments-list {
                margin-bottom: 40px;
                ${commentGap.Desktop ? `gap: ${commentGap.Desktop};` : ""}
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
                width: ${avatarSize.Desktop};
                height: ${avatarSize.Desktop};
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

            .${blockId} .fb-comment-reply:hover {
                color: #135e96;
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
                width: calc(${avatarSize.Desktop} * 0.8);
                height: calc(${avatarSize.Desktop} * 0.8);
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

            .${blockId} .fb-logged-in-as {
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

            .${blockId} .fb-comment-textarea {
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

            .${blockId} .fb-comment-textarea:focus {
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

            /* Responsive styles for tablet */
            @media only screen and (max-width: 1024px) {
                .${blockId} .fb-post-comment-form {
                    ${commentFormWidth.Tablet ? `max-width: ${commentFormWidth.Tablet};` : ""}
                }

                .${blockId} .fb-comments-list {
                    ${commentGap.Tablet ? `gap: ${commentGap.Tablet};` : ""}
                }

                .${blockId} .fb-comment-avatar {
                    width: ${avatarSize.Tablet || avatarSize.Desktop};
                    height: ${avatarSize.Tablet || avatarSize.Desktop};
                }

                .${blockId} .fb-comment-child .fb-comment-avatar {
                    width: calc(${avatarSize.Tablet || avatarSize.Desktop} * 0.8);
                    height: calc(${avatarSize.Tablet || avatarSize.Desktop} * 0.8);
                }
            }

            /* Responsive styles for mobile */
            @media (max-width: 767px) {
                .${blockId} .fb-post-comment-form {
                    ${commentFormWidth.Mobile ? `max-width: ${commentFormWidth.Mobile};` : ""}
                }

                .${blockId} .fb-comments-list {
                    ${commentGap.Mobile ? `gap: ${commentGap.Mobile};` : ""}
                }

                .${blockId} .fb-comment {
                    flex-direction: column;
                    gap: 10px;
                }

                .${blockId} .fb-comment-avatar {
                    width: ${avatarSize.Mobile || avatarSize.Tablet || avatarSize.Desktop};
                    height: ${avatarSize.Mobile || avatarSize.Tablet || avatarSize.Desktop};
                }

                .${blockId} .fb-comment-child .fb-comment-avatar {
                    width: calc(${avatarSize.Mobile || avatarSize.Tablet || avatarSize.Desktop} * 0.8);
                    height: calc(${avatarSize.Mobile || avatarSize.Tablet || avatarSize.Desktop} * 0.8);
                }

                .${blockId} .fb-comment-children {
                    margin-left: 15px;
                    padding-left: 15px;
                }

                .${blockId} .fb-comment-form-header {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 10px;
                }

                .${blockId} .fb-comment-form {
                    padding: 20px;
                }
            }
        `,
        [ attributes ]
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

                {showCommentTitle && 
                        <ToggleControl
                            label={__("Show Comment Count", "frontis-blocks")}
                            checked={showCommentsCount}
                            onChange={ value => setAttributes({showCommentsCount: value}) }
                            help= {__(
                                "Comments count is only shown when comment title is visible",
                                "frontis-blocks",
                            )}
                        />
               
                }


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

            {/* ADDED: Form Text Customization controls */}
            <BaseControl
                label={__("Form Text Customization", "frontis-blocks")}
                className="fb-setting-form-texts"
            >
                <FB_InputControl
                    label={__("Form Title", "frontis-blocks")}
                    value={formTitle}
                    onChangeValue={(value) => setAttributes({ formTitle: value })}
                    placeholder={__("Leave a Reply", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("Cancel Reply Text", "frontis-blocks")}
                    value={cancelReplyText}
                    onChangeValue={(value) => setAttributes({ cancelReplyText: value })}
                    placeholder={__("Cancel reply", "frontis-blocks")}
                /> 

                <FB_InputControl
                    label={__("Login Text", "frontis-blocks")}
                    value={loginText}
                    onChangeValue={(value) => setAttributes({ loginText: value })}
                    placeholder={__("Logged in as", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("Logout Text", "frontis-blocks")}
                    value={logoutText}
                    onChangeValue={(value) => setAttributes({ logoutText: value })}
                    placeholder={__("Log out?", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("Button Text", "frontis-blocks")}
                    value={buttonText}
                    onChangeValue={(value) => setAttributes({ buttonText: value })}
                    placeholder={__("Post Comment", "frontis-blocks")}
                />
            </BaseControl>


        </PanelBody>
    );

    const styleControls = (
        <PanelBody title={__("Layout", "frontis-blocks")} initialOpen={false}>
            {/* <FB_DimensionControl
                label={__("Form Width", "frontis-blocks")}
                values={commentFormWidth}
                onChange={(value) => setAttributes({ commentFormWidth: value })}
                deviceType={deviceType}
                units={["px", "%", "em", "rem"]}
            />

            <FB_DimensionControl
                label={__("Comment Gap", "frontis-blocks")}
                values={commentGap}
                onChange={(value) => setAttributes({ commentGap: value })}
                deviceType={deviceType}
                units={["px", "em", "rem"]}
            />

            <FB_DimensionControl
                label={__("Avatar Size", "frontis-blocks")}
                values={avatarSize}
                onChange={(value) => setAttributes({ avatarSize: value })}
                deviceType={deviceType}
                units={["px", "em", "rem"]}
            /> */}
        </PanelBody>
    );

    const advancedControls = (
        <>
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

            <PanelBody title={__("Advanced", "frontis-blocks")} initialOpen={false}>
                <FB_InputControl
                    label={__("CSS ID", "frontis-blocks")}
                    value={wrapperId}
                    onChange={(value) => setAttributes({ wrapperId: value })}
                    help={__("Add a custom ID for the wrapper element", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("CSS Classes", "frontis-blocks")}
                    value={wrapperClass}
                    onChange={(value) => setAttributes({ wrapperClass: value })}
                    help={__("Add custom CSS classes separated by spaces", "frontis-blocks")}
                />

                <FB_CustomCSSEditor
                    value={commentFormGlobalCustomCSS}
                    onChange={(value) => setAttributes({ commentFormGlobalCustomCSS: value })}
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