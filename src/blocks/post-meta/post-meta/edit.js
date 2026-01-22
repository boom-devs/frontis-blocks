import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { dateI18n, __experimentalGetSettings } from '@wordpress/date';
import Inspector from "./inspector";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { blockID, postMetaterms, singleItemColorStyle, blockStyle, alignment } = attributes;

    // Set blockID based on clientId
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({ blockID: "fb-post-meta-" + clientId.slice(0, 8) });
        }
    }, [clientId]);

    const blockProps = useBlockProps({
        className: `fb-post-meta-main-wrapper ${blockID} ${blockStyle} align-${alignment}`,
    });

    const postId = 1; // replace with dynamic ID if needed
    const post = useSelect(
        (select) => postId ? select('core').getEntityRecord('postType', 'post', postId) : null,
        [postId]
    );

    const author = useSelect(
        (select) => post?.author ? select('core').getEntityRecord('root', 'user', post.author) : null,
        [post?.author]
    );

    const categories = useSelect(
        (select) =>
            post?.categories?.length
                ? post.categories.map((catId) => select('core').getEntityRecord('taxonomy', 'category', catId))
                : [],
        [post?.categories]
    );

    const postComments = useSelect(
        (select) => {
            if (!postId) return 0;
            const comments = select('core').getEntityRecords('postType', 'comment', { post: postId, per_page: -1 });
            return comments?.length || 0;
        },
        [postId]
    );

    const getMetaValue = (item) => {
        if (!post) return '';

        switch (item.metaType) {
            case 'author':
                return author?.name || '';

            case 'authorImage':
                return author ? `<img src="${author?.avatar_urls?.['48']}" alt="${author?.name}" />` : '';

            case 'date': {
                const settings = __experimentalGetSettings();
                const siteDefault = settings.formats.date || 'F j, Y';

                const format =
                    item.dateFormat === 'custom'
                        ? item.customDateFormat || siteDefault
                        : item.dateFormat === 'default'
                        ? siteDefault
                        : item.dateFormat || siteDefault;

                return dateI18n(format, post.date);
            }

            case 'category':
                return categories.map((cat) => cat?.name).filter(Boolean).join(', ');

            case 'comments':
                return postComments ?? 0;

            case 'custom':
                return item.metaLabel || '';

            default:
                return '';
        }
    };

    return (
        <>
            <Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />

            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-post-meta-wrapper`}>
                    <div className="fb-post-meta-links-wrapper">
                        <div className="fb-post-meta-list" aria-label={__("Post Meta Items", "frontis-blocks")}>
                            {postMetaterms.map(item => {
                                const value = getMetaValue(item);
                                return (
                                    <div
                                        key={item.id}
                                        className={`fb-post-meta-item single-item-${item.id}`}
                                        style={{ color: singleItemColorStyle || undefined }}
                                    >
                                        {item.metaIcon && (
                                            <span className="fb-post-meta-icon" aria-hidden="true">
                                                {renderSVG(item.metaIcon)}
                                            </span>
                                        )}
                                        <span
                                            className="fb-meta-value"
                                            dangerouslySetInnerHTML={{ __html: value }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
