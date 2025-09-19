import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import Inspector from "./inspector";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { blockID, postMetaterms, singleItemColorStyle, blockStyle, alignment } = attributes;

    const blockProps = useBlockProps({
        className: `fb-post-meta-main-wrapper ${blockID} ${blockStyle} align-${alignment}`,
    });

    const postId = 1; // test with static ID

    // 🔹 Fetch the post
    const post = useSelect(
        (select) => postId ? select('core').getEntityRecord('postType', 'post', postId) : null,
        [postId]
    );

    // 🔹 Fetch author (user)
    const author = useSelect(
        (select) => post?.author ? select('core').getEntityRecord('root', 'user', post.author) : null,
        [post?.author]
    );

    // 🔹 Fetch categories
    const categories = useSelect(
        (select) =>
            post?.categories?.length
                ? post.categories.map((catId) => select('core').getEntityRecord('taxonomy', 'category', catId))
                : [],
        [post?.categories]
    );

    // 🔹 Post Comment
    const postComments = useSelect(
        ( select ) => {
            if ( ! postId ) return 0;
            const comments = select('core').getEntityRecords('postType', 'comment', { post: postId, per_page: -1 });
            return comments?.length || 0;
        },
        [ postId ]
    );

    const getMetaValue = (item) => {
        if (!post) return '';
        switch (item.metaType) {
            case 'author':
                return author?.name || '';
            case 'authorImage':
                return author ? `<img src="${author?.avatar_urls?.['48']}" alt="${author?.name}" />` : '';
            case 'date':
                return new Date(post.date).toLocaleDateString();
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
                <ul className="fb-post-meta-list">
                    {postMetaterms.map((item) => {
                        const value = getMetaValue(item);
                        return (
                            <li
                                key={item.id}
                                className={`fb-post-meta-item single-item-${item.id}`}
                                style={{ color: singleItemColorStyle || undefined }}
                                dangerouslySetInnerHTML={{ __html: value }} // for avatar img
                            />
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
