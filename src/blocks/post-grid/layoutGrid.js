import React from 'react';

import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function LayoutGrid({ 
    data, 
    index,
    postTitleTag, 
    postDescriptionTag, 
    postDescriptionExcerptLength, 
    showExcerptSwitcher,
    showAuthorSwitcher, 
    showCategorySwitcher, 
    showTagSwitcher, 
    postAuthorPrefixSwitcher,
    postAuthorPrefix,
    showDateSwitcher, 
    postAuthorAvatarSwitcher,
    postImageSize,
    defaultImageUrl,
    premadeStyle,

    readMoreSwitcher,
    readMoreText,
    readMoreIconAlign,
    readMoreIcon,
    readMoreIconImageUrl,
    readMoreIconImageAlt,

    thumbnailLinkSwitcher,
    categoryLinkSwitcher,
    tagLinkSwitcher,
    authorLinkSwitcher,
    titleLinkSwitcher,
    }) {
    const src = data.fb_featured_image_src?.[postImageSize]?.[0] || defaultImageUrl;
    const author = data.fb_author_info;
    const title = data.title.rendered;
    const categories = data.fb_category_info;
    const tags = data.fb_post_tag_info;
    const excerpt = showExcerptSwitcher ? trimWords(data.fb_post_excerpt, postDescriptionExcerptLength || 10) : '';

    return (
        <>


        {premadeStyle === 'style-1' && (
            <div className={`fb_post_grid_wrapper fb_post_grid_${premadeStyle}`}>
                <div className="fb_post_grid_image_wrapper">
                    <div className="fb_post_grid_image">
                        {thumbnailLinkSwitcher && (
                            <a href={data.link}>
                                <img src={src} alt={title || "Post image"} />
                            </a>
                        )}
                        {!thumbnailLinkSwitcher && (
                            <img src={src} alt={title || "Post image"} />
                        )}
                    </div>
                </div>

                <div className="fb_post_grid_content_wrapper">
                    {showAuthorSwitcher && (
                        <div className="fb_post_grid_author">
                            {postAuthorAvatarSwitcher && (
                                <div className="fb_post_grid_author_avatar">
                                    {authorLinkSwitcher && (
                                        <a className="fb_post_grid_author_avatar_url" href={author.archive_url}>
                                            <img src={author.avatar} alt={author.name} />
                                        </a>
                                    )}
                                    {!authorLinkSwitcher && (
                                        <img src={author.avatar} alt={author.name} />
                                    )}
                                </div>
                            )}
                            <div className="fb_post_grid_author_info">
                                <div className="fb_post_grid_author_info_name">
                                    {postAuthorPrefixSwitcher && (
                                        <span className="fb_post_grid_author_posted_by">{postAuthorPrefix}</span>
                                    )}
                                    <div className="fb_post_grid_author_name">
                                        {authorLinkSwitcher && (
                                            <a className="fb_post_grid_author_name_url" href={author.archive_url}>{author.name}</a>
                                        )}
                                        {!authorLinkSwitcher && (
                                            author.name
                                        )}
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
                                    {categoryLinkSwitcher && (
                                        <a className="fb_post_grid_category_url" href={category.url}>{category.name}</a>
                                    )}
                                    {!categoryLinkSwitcher && (
                                        <span className="fb_post_grid_category_name">{category.name}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {showTagSwitcher && (
                        <div className="fb_post_grid_tags">
                            {tags.map((tag, index) => (
                                <div className="fb_post_grid_tag" key={index}>
                                    {tagLinkSwitcher && (
                                        <a className="fb_post_grid_tag_url" href={tag.url}>{tag.name}</a>
                                    )}
                                    {!tagLinkSwitcher && (
                                        <span className="fb_post_grid_tag_name">{tag.name}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="fb_post_grid_content">
                        <a href="#" className="fb_post_link">{React.createElement(postTitleTag || 'h3', { className: 'fb_post_title' }, title)}</a>
                        {React.createElement(postDescriptionTag || 'p', { className: 'fb_post_desc' }, excerpt)}
                    </div>

                    {readMoreSwitcher && (
                        <a href="#" className="fb_post_grid_read_more_button">

                            {readMoreIconAlign !== 'icon-only' && (
                                <span className="fb_post_grid_read_more_text">{readMoreText}</span>
                            )}

                            {readMoreIconAlign === 'icon-text' && (
                                <div className={`fb_post_grid_read_more_icon_wrapper`}> 
                                    <div className="fb_post_grid_read_more_icon">{renderSVG(readMoreIcon)}</div>
                                </div>
                            )}

                            {readMoreIconAlign === 'image' && readMoreIconImageUrl && (
                                <div className={`fb_post_grid_read_more_icon_wrapper`}>
                                    <div className="fb_post_grid_read_more_icon_image">
                                        <img src={readMoreIconImageUrl} alt={readMoreIconImageAlt} />
                                    </div>
                                </div>
                            )}

                            {readMoreIconAlign === 'icon-only' && (
                                <div className={`fb_post_grid_read_more_icon_wrapper`}> 
                                    <div className="fb_post_grid_read_more_icon">{renderSVG(readMoreIcon)}</div>
                                </div>
                            )}
                        </a>
                    )}
                </div>
            </div>
        )}

        {premadeStyle === 'style-2' && (
            <div className={`fb_post_grid_wrapper fb_post_grid_${premadeStyle}`}>
                <div className="fb_post_grid_image_wrapper">
                    <div className="fb_post_grid_image">
                        {thumbnailLinkSwitcher && (
                            <a href={data.link}>
                                <img src={src} alt={title || "Post image"} />
                            </a>
                        )}
                        {!thumbnailLinkSwitcher && (
                            <img src={src} alt={title || "Post image"} />
                        )}

                        {showCategorySwitcher && (
                            <div className="fb_post_grid_categories">
                                {categories.map((category, index) => (
                                    <div className="fb_post_grid_category" key={index}>
                                        {categoryLinkSwitcher && (
                                            <a className="post_category" href={category.url}>{category.name}</a>
                                        )}
                                        {!categoryLinkSwitcher && (
                                            <span className="fb_post_grid_category_name">{category.name}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {showTagSwitcher && (
                            <div className="fb_post_grid_tags">
                                {tags.map((tag, index) => (
                                    <div className="fb_post_grid_tag" key={index}>
                                        {tagLinkSwitcher && (
                                            <a className="fb_post_grid_tag_url" href={tag.url}>{tag.name}</a>
                                        )}
                                        {!tagLinkSwitcher && (
                                            <span className="fb_post_grid_tag_name">{tag.name}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </div>

                <div className="fb_post_grid_content_wrapper">
                    {showAuthorSwitcher && (
                        <div className="fb_post_grid_author">
                            {postAuthorAvatarSwitcher && (
                                <div className="fb_post_grid_author_avatar">
                                    {authorLinkSwitcher && (
                                        <a className="fb_post_grid_author_avatar_url" href={author.archive_url}>
                                            <img src={author.avatar} alt={author.name} />
                                        </a>
                                    )}
                                    {!authorLinkSwitcher && (
                                        <img src={author.avatar} alt={author.name} />
                                    )}
                                </div>
                            )}
                            <div className="fb_post_grid_author_info">
                                <div className="fb_post_grid_author_info_name">
                                    {postAuthorPrefixSwitcher && (
                                        <span className="fb_post_grid_author_posted_by">{postAuthorPrefix}</span>
                                    )}
                                    <div className="fb_post_grid_author_name">
                                        {authorLinkSwitcher && (
                                            <a className="fb_post_grid_author_name_url" href={author.archive_url}>{author.name}</a>
                                        )}
                                        {!authorLinkSwitcher && (
                                            author.name
                                        )}
                                    </div>
                                </div>
                                {showDateSwitcher && (
                                    <div className="fb_post_grid_date">{author.latest_post_date}</div>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="fb_post_grid_content">
                        <a href="#" className="fb_post_link">{React.createElement(postTitleTag || 'h3', { className: 'fb_post_title' }, title)}</a>
                        {React.createElement(postDescriptionTag || 'p', { className: 'fb_post_desc' }, excerpt)}
                    </div>
                    {readMoreSwitcher && (
                        <a href="#" className="fb_post_grid_read_more_button">

                            {readMoreIconAlign !== 'icon-only' && (
                                <span className="fb_post_grid_read_more_text">{readMoreText}</span>
                            )}

                            {readMoreIconAlign === 'icon-text' && (
                                <div className={`fb_post_grid_read_more_icon_wrapper`}> 
                                    <div className="fb_post_grid_read_more_icon">{renderSVG(readMoreIcon)}</div>
                                </div>
                            )}

                            {readMoreIconAlign === 'image' && readMoreIconImageUrl && (
                                <div className={`fb_post_grid_read_more_icon_wrapper`}>
                                    <div className="fb_post_grid_read_more_icon_image">
                                        <img src={readMoreIconImageUrl} alt={readMoreIconImageAlt} />
                                    </div>
                                </div>
                            )}

                            {readMoreIconAlign === 'icon-only' && (
                                <div className={`fb_post_grid_read_more_icon_wrapper`}> 
                                    <div className="fb_post_grid_read_more_icon">{renderSVG(readMoreIcon)}</div>
                                </div>
                            )}
                        </a>
                    )}
                </div>
            </div>
        )}

        </>
    );
}

// Utility function
function trimWords(text, wordLimit) {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
}
