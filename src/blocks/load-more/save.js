import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const {
    blockID,
    postType,
    postsPerPage,
    loadMoreCount,
    orderBy,
    order,
    showLoadMoreButton,
    showFeaturedImage,
    showTitle,
    showContent,
    showCategories,
    alternateLayout
  } = attributes;
  
  const blockProps = useBlockProps.save({
    className: `fb-load-more-block ${blockID}`,
  });
  
  // These data attributes will be used by the frontend JavaScript
  const dataAttributes = {
    'data-post-type': postType,
    'data-posts-per-page': postsPerPage,
    'data-load-more-count': loadMoreCount,
    'data-order-by': orderBy,
    'data-order': order,
    'data-show-featured-image': showFeaturedImage ? '1' : '0',
    'data-show-title': showTitle ? '1' : '0',
    'data-show-content': showContent ? '1' : '0',
    'data-show-categories': showCategories ? '1' : '0',
    'data-alternate-layout': alternateLayout ? '1' : '0'
  };
  
  return (
    <div {...blockProps} {...dataAttributes}>
      <div className="portfolios-wrapper">
        <div id={`portfolio-items-${blockID}`} className="portfolio-items">
          {/* The content will be populated by PHP */}
        </div>
        {showLoadMoreButton && (
          <div className="load-more">
            <a href="#" id={`load-more-${blockID}`} className="load-more-button" data-page="1" data-block-id={blockID}>
              {__('Load More', 'frontis-blocks')}
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 3.11 16.94 3.11 16.94M3.11 16.94H7.63M3.11 16.94V21.94M2 12.5C2 6.98 6.44 2.5 12 2.5C18.67 2.5 22 8.06 22 8.06M22 8.06V3.06M22 8.06H17.56" stroke="#00010B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}