import React from 'react';

export default function LayoutGrid({ data, index, postTitleTag, postDescriptionTag, postDescriptionExcerptLength }) {
    const src = data.fb_featured_image_src.medium[0];
    const title = data.title.rendered;
    const excerpt = trimWords(data.fb_post_excerpt, postDescriptionExcerptLength || 10);

    return (
        <div className="fb_post_grid_wrapper">
            <div className="fb_post_grid_image">
                {src ? (
                    <img src={src} alt="" />
                ) : (
                    <img src="https://placehold.co/600x400/000000/FFFFFF/png" alt="Placeholder" />
                )}
            </div>
            <div className="fb_post_grid_content">
                {React.createElement(postTitleTag || 'h3', { className: 'fb_post_title' }, title)}
                {React.createElement(postDescriptionTag || 'p', { className: 'fb_post_desc' }, excerpt)}
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
