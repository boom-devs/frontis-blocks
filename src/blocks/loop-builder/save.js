// import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';
// import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

// export default function save({ attributes }) {
// 	const {
// 		blockId,
// 		premadeStyle,
// 		postType,
// 		postPerPage,
// 		selectedCat,
// 		placeholders,
// 		deSelectedCat,
// 		selectedTag,
// 		deSelectedTag,
// 		selectedAuthor,
// 		deSelectedAuthor,
// 		orderBy,
// 		sortOrder,
// 		blockStyle,
// 		selectedCatSwitcher,
// 		selectedTagSwitcher,
// 		selectedAuthorSwitcher,
// 		gridColumnsPerSection,
// 		gapUnits,
// 		gridRowGap,
// 		gridColumnGap,
// 		postTitleTag,
// 		postDescriptionTag,
// 		postDescriptionExcerptLength,
// 		showExcerptSwitcher,
// 		showAuthorSwitcher,
// 		showCategorySwitcher,
// 		showTagSwitcher,
// 		postAuthorPrefixSwitcher,
// 		postAuthorPrefix,
// 		showDateSwitcher,
// 		postAuthorAvatarSwitcher,
// 		postSwitcher,
// 		postImageSize,
// 		loadMoreSwitcher,
// 		loadMoreText,
// 		loadMoreIcon,
// 		loadMoreIconAlign,
// 		loadMoreType,
// 		paginationPrevNextType,
// 		paginationPrevTxt,
// 		paginationPrevIcon,
// 		paginationNextTxt,
// 		paginationNextIcon,

// 		postGridGlobalWraperID,
//         postGridGlobalWraperClass,

// 		postGridDesktopSwitcher,
// 		postGridTabletSwitcher,
// 		postGridMobileSwitcher,

// 		showFilterByTaxonomy,
//         filterSelectedTaxonomy,
//         filterSelectedCat,
//         filterSelectedCatLabel,
// 		filterSelectedCatCount,
//         filterSelectedTag,
//         filterSelectedTagLabel,
//         filterSelectedTagCount,
// 		filterAllPostsCount,
//         filerselectedCountSwitcher,

// 		readMoreSwitcher,
// 		readMoreText,
// 		readMoreIconAlign,
// 		readMoreIcon,
// 		readMoreIconImageUrl,
// 		readMoreIconImageAlt,

// 		customPermalinkSwitcher,
// 		customPermalink,

// 		thumbnailLinkSwitcher,
// 		categoryLinkSwitcher,
// 		tagLinkSwitcher,
// 		authorLinkSwitcher,
// 		titleLinkSwitcher,

// 	} = attributes;


// 	const filterSelectedCatString = filterSelectedCat.toString();
// 	const filterSelectedTagString = filterSelectedTag.toString();


// 	const blockProps = useBlockProps.save({
// 		className: `fb-post-grid-area ${blockId} ${postGridDesktopSwitcher && 'fb-desktop-responsive'} ${postGridTabletSwitcher && 'fb-tablet-responsive'} ${postGridMobileSwitcher && 'fb-mobile-responsive'}`,
// 	});

// 	let defaultImageUrl = '';
// 	if (typeof FrontisBlocksData !== 'undefined') {
// 		defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
// 	}

// 	return (
// 		<>

// 			<div
// 				{...blockProps}
// 				id={blockId}
// 				data-premade-style={premadeStyle}
// 				data-post-type={postType}
// 				data-block-id={blockId}
// 				data-perpage={postPerPage}
// 				data-cat={selectedCat ? selectedCat.join(',') : ''}
// 				data-decat={deSelectedCat ? deSelectedCat.join(',') : ''}
// 				data-tag={selectedTag ? selectedTag.join(',') : ''}
// 				data-detag={deSelectedTag ? deSelectedTag.join(',') : ''}
// 				data-author={selectedAuthor ? selectedAuthor.join(',') : ''}
// 				data-deauthor={deSelectedAuthor ? deSelectedAuthor.join(',') : ''}
// 				data-orderby={orderBy}
// 				data-sortorder={sortOrder}
// 				data-post-title-tag={postTitleTag}
// 				data-post-description-tag={postDescriptionTag}
// 				data-post-description-excerpt-length={postDescriptionExcerptLength}
// 				data-show-excerpt-switcher={showExcerptSwitcher}
// 				data-show-author-switcher={showAuthorSwitcher}
// 				data-show-category-switcher={showCategorySwitcher}
// 				data-show-tag-switcher={showTagSwitcher}
// 				data-post-author-prefix-switcher={postAuthorPrefixSwitcher}
// 				data-post-author-prefix={postAuthorPrefix}
// 				data-show-date-switcher={showDateSwitcher}
// 				data-post-author-avatar-switcher={postAuthorAvatarSwitcher}
// 				data-post-image-size={postImageSize}
// 				data-show-load-more-switcher={loadMoreSwitcher}
// 				data-load-more-text={loadMoreText}
// 				data-load-more-icon={loadMoreIcon}
// 				data-load-more-icon-align={loadMoreIconAlign}
// 				data-load-more-type={loadMoreType}

// 				data-pagination-prev-next-type={paginationPrevNextType}
// 				data-pagination-prev-text={paginationPrevTxt}
// 				data-pagination-prev-icon={paginationPrevIcon}
// 				data-pagination-next-text={paginationNextTxt}
// 				data-pagination-next-icon={paginationNextIcon}
// 				data-default-image-url={defaultImageUrl}

// 				data-show-filter-by-taxonomy={showFilterByTaxonomy}
// 				data-filter-selected-taxonomy={filterSelectedTaxonomy}
// 				// data-filter-all-posts-count={filterAllPostsCount}
// 				data-filerselected-count-switcher={filerselectedCountSwitcher}

// 				data-filter-selected-cat={filterSelectedCatString}
// 				data-filter-selected-tag={filterSelectedTagString}

// 				data-read-more-switcher={readMoreSwitcher}
// 				data-read-more-text={readMoreText}
// 				data-read-more-icon-align={readMoreIconAlign}
// 				data-read-more-icon={readMoreIcon}
// 				data-read-more-icon-image-url={readMoreIconImageUrl}
// 				data-read-more-icon-image-alt={readMoreIconImageAlt}

// 				data-custom-permalink-switcher={customPermalinkSwitcher}
// 				data-custom-permalink={customPermalink}

// 				data-thumbnail-link-switcher={thumbnailLinkSwitcher}
// 				data-category-link-switcher={categoryLinkSwitcher}
// 				data-tag-link-switcher={tagLinkSwitcher}
// 				data-author-link-switcher={authorLinkSwitcher}
// 				data-title-link-switcher={titleLinkSwitcher}

// 			>

// 				<InnerBlocks.Content />
// 			</div>
// 		</>
// 	);
// }


import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { blockId } = attributes;

	const blockProps = useBlockProps.save({
		className: `frontis-loop-builder fb-post-grid-area ${blockId || ''}`,
	});

	return (
		<div {...blockProps}>
			<div className="swiper-wrapper fb-swiper-wrapper">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
