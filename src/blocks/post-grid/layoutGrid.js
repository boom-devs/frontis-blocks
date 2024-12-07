import React from 'react';

export default function LayoutGrid({ data, index, postTitleTag, postDescriptionTag, postDescriptionExcerptLength, showAuthorSwitcher, showCategorySwitcher, showTagSwitcher, postAuthorPrefixSwitcher, postAuthorPrefix, showDateSwitcher, postAuthorAvatarSwitcher, postImageSize }) {
    const src = data.fb_featured_image_src[postImageSize][0];
    const author = data.fb_author_info;
    const title = data.title.rendered;
    const categories = data.fb_category_info;
    const tags = data.fb_post_tag_info;
    const excerpt = trimWords(data.fb_post_excerpt, postDescriptionExcerptLength || 10);
    
    return (
        <div className="fb_post_grid_wrapper">
            <div className="fb_post_grid_image_wrapper">
                <div className="fb_post_grid_image">
                    {src ? (
                        <img src={src} alt="" />
                    ) : (
                        <img src="https://placehold.co/600x400/000000/FFFFFF/png" alt="Placeholder" />
                    )}
                </div>
            </div>

            <div className="fb_post_grid_content_wrapper">
                {showAuthorSwitcher && (
                    <div className="fb_post_grid_author">
                        {postAuthorAvatarSwitcher && (
                            <div className="fb_post_grid_author_avatar">
                                <a className="fb_post_grid_author_avatar_url" href={author.archive_url}>
                                    <img src={author.avatar} alt={author.name} />
                            </a>
                            </div>
                        )}
                        <div className="fb_post_grid_author_info">
                            <div className="fb_post_grid_author_info_name">
                                {postAuthorPrefixSwitcher && (
                                    <span className="fb_post_grid_author_posted_by">{postAuthorPrefix}</span>
                                )}
                                <div className="fb_post_grid_author_name">
                                    <a className="fb_post_grid_author_name_url" href={author.archive_url}>{author.name}</a>
                                </div>
                            </div>
                            {showDateSwitcher && (
                                <div className="fb_post_grid_date">{author.latest_post_date}</div>
                            )}
                        </div>
                    </div>
                )}

                {showCategorySwitcher && (
                    <div className="fb_post_grid_categories">
                        {categories.map((category, index) => (
                            <div className="fb_post_grid_category" key={index}>
                                <a className="fb_post_grid_category_url" href={category.url}>{category.name}</a>
                            </div>
                        ))}
                    </div>
                )}

                {showTagSwitcher && (
                    <div className="fb_post_grid_tags">
                        {tags.map((tag, index) => (
                            <div className="fb_post_grid_tag" key={index}>
                                <a className="fb_post_grid_tag_url" href={tag.url}>{tag.name}</a>
                            </div>
                        ))}
                    </div>
                )}

                <div className="fb_post_grid_content">
                    <a href="#" className="fb_post_link">{React.createElement(postTitleTag || 'h3', { className: 'fb_post_title' }, title)}</a>
                    {React.createElement(postDescriptionTag || 'p', { className: 'fb_post_desc' }, excerpt)}
                </div>
            </div>
        </div>
    );
}

// Utility function
function trimWords(text, wordLimit) {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
}
