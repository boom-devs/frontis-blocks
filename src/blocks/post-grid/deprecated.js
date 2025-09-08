// deprecations.js (or wherever you export your deprecations)
import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import attributes from './attributes.js';

const v1_0_3 = {
  attributes,

  supports: {
    html: false,
    className: false,
  },

  save({ attributes }) {
    const {
      // core
      blockId,
      premadeStyle,
      postType,
      postPerPage,
      selectedCat,
      placeholders,
      categoryKey,
      tagKey,
      deSelectedCat,
      selectedTag,
      deSelectedTag,
      selectedAuthor,
      deSelectedAuthor,
      orderBy,
      sortOrder,
      blockStyle,
      selectedCatSwitcher,
      selectedTagSwitcher,
      selectedAuthorSwitcher,
      gridColumnsPerSection,
      gapUnits,
      gridRowGap,
      gridColumnGap,
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
      postSwitcher,
      postImageSize,

      // load more / pagination
      loadMoreSwitcher,
      loadMoreText,
      loadMoreIcon,
      loadMoreIconAlign,
      loadMoreType,
      paginationPrevNextType,
      paginationPrevTxt,
      paginationPrevIcon,
      paginationNextTxt,
      paginationNextIcon,

      // wrappers / responsive
      postGridGlobalWraperID,
      postGridGlobalWraperClass,
      postGridDesktopSwitcher,
      postGridTabletSwitcher,
      postGridMobileSwitcher,

      // taxonomy filters
      showFilterByTaxonomy,
      filterSelectedTaxonomy,
      filterSelectedCat,
      filterSelectedCatLabel,
      filterSelectedCatCount,
      filterSelectedTag,
      filterSelectedTagLabel,
      filterSelectedTagCount,
      filterAllPostsCount,
      filerselectedCountSwitcher,

      // read more
      readMoreSwitcher,
      readMoreText,
      readMoreIconAlign,
      readMoreIcon,
      readMoreIconImageUrl,
      readMoreIconImageAlt,

      // links/permalink
      customPermalinkSwitcher,
      customPermalink,
      thumbnailLinkSwitcher,
      categoryLinkSwitcher,
      tagLinkSwitcher,
      authorLinkSwitcher,
      titleLinkSwitcher,
    } = attributes;

    const filterSelectedCatString = (filterSelectedCat || []).toString();
    const filterSelectedTagString = (filterSelectedTag || []).toString();

    const blockProps = useBlockProps.save({
      className: `fb-post-grid-area ${blockId} ${postGridDesktopSwitcher && 'fb-desktop-responsive'} ${postGridTabletSwitcher && 'fb-tablet-responsive'} ${postGridMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    let defaultImageUrl = '';
    if (typeof FrontisBlocksData !== 'undefined') {
      defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
    }

    return (
      <>
        <div
          {...blockProps}
          id={blockId}
          data-premade-style={premadeStyle}
          data-post-type={postType}
          data-block-id={blockId}
          data-perpage={postPerPage}
          data-category-key={categoryKey}
          data-tag-key={tagKey}
          data-cat={selectedCat ? selectedCat.join(',') : ''}
          data-decat={deSelectedCat ? deSelectedCat.join(',') : ''}
          data-tag={selectedTag ? selectedTag.join(',') : ''}
          data-detag={deSelectedTag ? deSelectedTag.join(',') : ''}
          data-author={selectedAuthor ? selectedAuthor.join(',') : ''}
          data-deauthor={deSelectedAuthor ? deSelectedAuthor.join(',') : ''}
          data-orderby={orderBy}
          data-sortorder={sortOrder}
          data-post-title-tag={postTitleTag}
          data-post-description-tag={postDescriptionTag}
          data-post-description-excerpt-length={postDescriptionExcerptLength}
          data-show-excerpt-switcher={showExcerptSwitcher}
          data-show-author-switcher={showAuthorSwitcher}
          data-show-category-switcher={showCategorySwitcher}
          data-show-tag-switcher={showTagSwitcher}
          data-post-author-prefix-switcher={postAuthorPrefixSwitcher}
          data-post-author-prefix={postAuthorPrefix}
          data-show-date-switcher={showDateSwitcher}
          data-post-author-avatar-switcher={postAuthorAvatarSwitcher}
          data-post-image-size={postImageSize}

          data-show-load-more-switcher={loadMoreSwitcher}
          data-load-more-text={loadMoreText}
          data-load-more-icon={loadMoreIcon}
          data-load-more-icon-align={loadMoreIconAlign}
          data-load-more-type={loadMoreType}

          data-pagination-prev-next-type={paginationPrevNextType}
          data-pagination-prev-text={paginationPrevTxt}
          data-pagination-prev-icon={paginationPrevIcon}
          data-pagination-next-text={paginationNextTxt}
          data-pagination-next-icon={paginationNextIcon}

          data-default-image-url={defaultImageUrl}

          data-show-filter-by-taxonomy={showFilterByTaxonomy}
          data-filter-selected-taxonomy={filterSelectedTaxonomy}
          data-filerselected-count-switcher={filerselectedCountSwitcher}
          data-filter-selected-cat={filterSelectedCatString}
          data-filter-selected-tag={filterSelectedTagString}

          data-read-more-switcher={readMoreSwitcher}
          data-read-more-text={readMoreText}
          data-read-more-icon-align={readMoreIconAlign}
          data-read-more-icon={readMoreIcon}
          data-read-more-icon-image-url={readMoreIconImageUrl}
          data-read-more-icon-image-alt={readMoreIconImageAlt}

          data-custom-permalink-switcher={customPermalinkSwitcher}
          data-custom-permalink={customPermalink}

          data-thumbnail-link-switcher={thumbnailLinkSwitcher}
          data-category-link-switcher={categoryLinkSwitcher}
          data-tag-link-switcher={tagLinkSwitcher}
          data-author-link-switcher={authorLinkSwitcher}
          data-title-link-switcher={titleLinkSwitcher}
        >

          {/* Category Filter Render */}
          {showFilterByTaxonomy && filterSelectedTaxonomy === 'category' && (filterSelectedCatLabel || []).length > 0 && (
            <div className="fb_post_grid_filter_categories">
              {filterSelectedCatLabel.map((category, idx) => (
                <div
                  key={`${category?.value ?? 'cat'}-${idx}`}
                  className="fb_post_grid_filter_category"
                  data-category-id={category.value}
                >
                  <span className="fb-post-grid-filter-category-label">{category.label}</span>
                  {filerselectedCountSwitcher ? (
                    <span className="fb-post-grid-filter-category-count">
                      {' '}
                      {category.value === 0
                        ? (filterAllPostsCount || 0)
                        : ((filterSelectedCatCount && filterSelectedCatCount[category.value]) || 0)}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          )}

          {/* Tag Filter Render */}
          {showFilterByTaxonomy && filterSelectedTaxonomy === 'tag' && (filterSelectedTagLabel || []).length > 0 && (
            <div className="fb_post_grid_filter_categories">
              {filterSelectedTagLabel.map((tag, idx) => (
                <div
                  key={`${tag?.value ?? 'tag'}-${idx}`}
                  className="fb_post_grid_filter_category"
                  data-tag-id={tag.value}
                >
                  <span className="fb-post-grid-filter-tag-label">{tag.label}</span>
                  {filerselectedCountSwitcher ? (
                    <span className="fb-post-grid-filter-tag-count">
                      {' '}
                      {tag.value === 0
                        ? (filterAllPostsCount || 0)
                        : ((filterSelectedTagCount && filterSelectedTagCount[tag.value]) || 0)}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          )}

          <div
            className={`fb-parent-wrapper fb_post_grid_container ${blockId} ${postGridGlobalWraperClass} ${postSwitcher === 'list' ? 'list-layout' : 'grid-layout'}`}
            id={postGridGlobalWraperID}
          >
            <div className="load_more_button_icon">
              {renderSVG(loadMoreIcon)}
            </div>
            <div className="fb_pagination_previous_icon">
              {renderSVG(paginationPrevIcon)}
            </div>
            <div className="fb_pagination_next_icon">
              {renderSVG(paginationNextIcon)}
            </div>

            {readMoreIconAlign !== 'image' && (
              <div className="fb_post_grid_read_more_icon">
                {renderSVG(readMoreIcon)}
              </div>
            )}
          </div>

          <div className="loading post">
            {(placeholders || []).map((item, i) => (
              <div key={`${item}-${i}`} className={`post-card skeleton skeleton-item ${blockId}`}>
                <div className="skeleton-item-title loading"></div>
                <div className="skeleton-item-location loading"></div>
                <div className="skeleton-item-sport loading"></div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  },
};

export default [v1_0_3];
