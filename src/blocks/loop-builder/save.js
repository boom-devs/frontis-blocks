import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        postType,
        postsPerPage,
        order,
        orderBy,
        includedCategories,
        includedTags,
        offset,
        showFeaturedImage,
        showTitle,
        showExcerpt,
        excerptLength,
        showReadMore,
        readMoreText,
        columns,
        gap
    } = attributes;
    
    const blockProps = useBlockProps.save({
        className: `fb-loop-builder-block ${blockID}`,
    });
    
    const innerBlocksProps = useInnerBlocksProps.save({
        className: 'fb-loop-builder-template',
    });
    
    // We'll save the attributes as data attributes for the server-side rendering
    return (
        <div 
            {...blockProps}
            data-post-type={postType}
            data-posts-per-page={postsPerPage}
            data-order={order}
            data-order-by={orderBy}
            data-offset={offset}
            data-show-featured-image={showFeaturedImage ? 'true' : 'false'}
            data-show-title={showTitle ? 'true' : 'false'}
            data-show-excerpt={showExcerpt ? 'true' : 'false'}
            data-excerpt-length={excerptLength}
            data-show-read-more={showReadMore ? 'true' : 'false'}
            data-read-more-text={readMoreText}
            data-columns={columns}
            data-gap={gap}
            data-categories={includedCategories ? includedCategories.join(',') : ''}
            data-tags={includedTags ? includedTags.join(',') : ''}
        >
            <div {...innerBlocksProps} />
        </div>
    );
}