import { __ } from '@wordpress/i18n';
import { useEffect } from "@wordpress/element";
import { useBlockProps } from '@wordpress/block-editor';
import loadGoogleFont from "@Utils/loadGoogleFont";

import Inspector from './inspector';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generatePostCommentFormStyle from "./styling";

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
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

        commentFormDesktopSwitcher,
        commentFormTabletSwitcher,
        commentFormMobileSwitcher,

        wrapperId,
        wrapperClass,
        blockStyle,

        commentCountTitleFontFamily,
		authorFontFamily,
		messageFontFamily,
		commentMetaFontFamily,
		replyButtonFontFamily,
		formTitleFontFamily,
		cancelReplyFontFamily,
    } = attributes;

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-post-comment-form',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start Load Google Font */
    useEffect(() => {
        if (commentCountTitleFontFamily && !loadedFonts.has(commentCountTitleFontFamily)) {
            loadGoogleFont(commentCountTitleFontFamily);
            loadedFonts.add(commentCountTitleFontFamily);
        }
    }, [commentCountTitleFontFamily]);

    useEffect(() => {
        if (authorFontFamily && !loadedFonts.has(authorFontFamily)) {
            loadGoogleFont(authorFontFamily);
            loadedFonts.add(authorFontFamily);
        }
    }, [authorFontFamily]);

    useEffect(() => {
        if (messageFontFamily && !loadedFonts.has(messageFontFamily)) {
            loadGoogleFont(messageFontFamily);
            loadedFonts.add(messageFontFamily);
        }
    }, [messageFontFamily]);

    useEffect(() => {
        if (commentMetaFontFamily && !loadedFonts.has(commentMetaFontFamily)) {
            loadGoogleFont(commentMetaFontFamily);
            loadedFonts.add(commentMetaFontFamily);
        }
    }, [commentMetaFontFamily]);

    useEffect(() => {
        if (replyButtonFontFamily && !loadedFonts.has(replyButtonFontFamily)) {
            loadGoogleFont(replyButtonFontFamily);
            loadedFonts.add(replyButtonFontFamily);
        }
    }, [replyButtonFontFamily]);

    useEffect(() => {
        if (formTitleFontFamily && !loadedFonts.has(formTitleFontFamily)) {
            loadGoogleFont(formTitleFontFamily);
            loadedFonts.add(formTitleFontFamily);
        }
    }, [formTitleFontFamily]);

    useEffect(() => {
        if (cancelReplyFontFamily && !loadedFonts.has(cancelReplyFontFamily)) {
            loadGoogleFont(cancelReplyFontFamily);
            loadedFonts.add(cancelReplyFontFamily);
        }
    }, [cancelReplyFontFamily]);
    /** End Load Google Font */

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = generatePostCommentFormStyle(attributes);
            setAttributes({ blockStyle: css });
        }
    }, [attributes, blockID]);
    /** End Generate Block Style */

    const blockProps = useBlockProps({
        className: `fb-post-comment-form-block ${blockID} ${commentFormDesktopSwitcher && "fb-desktop-responsive"} ${commentFormTabletSwitcher && "fb-tablet-responsive"} ${commentFormMobileSwitcher && "fb-mobile-responsive"}`,
    });

    useEffect(() => {
        if (clientId && !blockID) {
            setAttributes({ blockID: "fb-post-comment-form-" + clientId.slice(0, 8) });
        }
    }, [clientId]);

    // Combine classes for wrapper
    const wrapperClasses = `fb-post-comment-form ${wrapperClass}`.trim();

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />

            )}
            
            {/* Output block styles for editor */}
            {blockStyle && <style>{blockStyle}</style>}

            <div {...blockProps}>
                <div
                    className={wrapperClasses}
                    id={wrapperId || undefined}
                >
                    {/* Comment Count */}
                    {showCommentTitle && (
                        <h3 className="fb-comment-count-title">  {showCommentsCount && <span>2</span>} Comments</h3>
                    )}

                    {/* Comments List with Proper Nested Structure */}
                    <div className="fb-comments-list">
                        {/* Parent Comment 1 with Nested Reply */}
                        <div id="comment-1" className="fb-comment fb-comment-parent depth-1">
                            <img
                                src={FrontisBlocksData?.pluginUrl + 'assets/images/preset-bg.jpg'}
                                alt=""
                                className="fb-comment-avatar"
                            />
                            <div className="fb-comment-body">
                                <strong className="fb-comment-author">admin</strong>
                                <span className="fb-comment-meta">
                                    October 23, 2025 at 10:53 am
                                </span>
                                <div className="fb-comment-content">
                                    <p>test comment</p>
                                </div>
                                <div className="fb-comment-reply">
                                    <a
                                        href="#comment-1"
                                        className="comment-reply-link"
                                        data-commentid="1"
                                        data-postid="1"
                                        data-belowelement="comment-1"
                                        data-respondelement="respond"
                                        aria-label="Reply to admin"
                                    >
                                        Reply
                                    </a>
                                </div>

                                {/* Nested Reply Comment */}
                                <div className="fb-comment-children">
                                    <div id="comment-2" className="fb-comment fb-comment-child depth-2">
                                        <img
                                            src={FrontisBlocksData?.pluginUrl + 'assets/images/preset-bg.jpg'}
                                            alt=""
                                            className="fb-comment-avatar"
                                        />
                                        <div className="fb-comment-body">
                                            <strong className="fb-comment-author">user</strong>
                                            <span className="fb-comment-meta">
                                                October 30, 2025 at 11:00 am
                                            </span>
                                            <div className="fb-comment-content">
                                                <p>This is a nested reply comment to show the structure.</p>
                                            </div>
                                            <div className="fb-comment-reply">
                                                <a
                                                    href="#comment-2"
                                                    className="comment-reply-link"
                                                    data-commentid="2"
                                                    data-postid="1"
                                                    data-belowelement="comment-2"
                                                    data-respondelement="respond"
                                                    aria-label="Reply to user"
                                                >
                                                    Reply
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="comment-1" className="fb-comment fb-comment-parent depth-1">
                            <img
                                src={FrontisBlocksData?.pluginUrl + 'assets/images/preset-bg.jpg'}
                                alt=""
                                className="fb-comment-avatar"
                            />
                            <div className="fb-comment-body">
                                <strong className="fb-comment-author">admin</strong>
                                <span className="fb-comment-meta">
                                    October 23, 2025 at 10:53 am
                                </span>
                                <div className="fb-comment-content">
                                    <p>test comment</p>
                                </div>
                                <div className="fb-comment-reply">
                                    <a
                                        href="#comment-1"
                                        className="comment-reply-link"
                                        data-commentid="1"
                                        data-postid="1"
                                        data-belowelement="comment-1"
                                        data-respondelement="respond"
                                        aria-label="Reply to admin"
                                    >
                                        Reply
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* Comment Form */}
                    {showCommentForm && (
                        <div id="respond" className="fb-comment-form">
                            <div className="fb-comment-form-header">
                                <strong className="fb-reply-title"> {formTitle || __('Leave a Reply', 'frontis-blocks')} </strong>
                                <a href="#respond" className="fb-cancel-reply">
                                    {cancelReplyText || __('Cancel reply', 'frontis-blocks')}
                                </a>
                            </div>

                            <p className="fb-logged-in-as">
                                {loginText || __('Logged in as', 'frontis-blocks')} <a href='#'>Admin</a>.{' '}
                                <a href="#">{logoutText || __('Log out?', 'frontis-blocks')}</a>
                            </p>

                            <form className="fb-comment-form-element" id="fb_commentform">
                                <div className="fb-comment-form-comment">
                                    <textarea
                                        id="comment"
                                        className='fb-comment-textarea'
                                        name="comment"
                                        placeholder="Comment *"
                                        rows="8"
                                    ></textarea>
                                </div>
                                <input type="hidden" id="comment_parent" name="comment_parent" value="0" />

                                <div className="form-submit">
                                    <button type="submit" className="fb-post-comment-btn" disabled>
                                        {buttonText || __('Post Comment', 'frontis-blocks')}
                                    </button>

                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}