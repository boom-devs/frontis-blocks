import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const { 
		blockId,
		postType,
		postPerPage,
		selectedCat,
		placeholders,
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

		postGridGlobalWraperID,
        postGridGlobalWraperClass,

		postGridDesktopSwitcher,
		postGridTabletSwitcher,
		postGridMobileSwitcher,


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

	} = attributes;


	const filterSelectedCatString = filterSelectedCat.toString();
	const filterSelectedTagString = filterSelectedTag.toString();


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
				data-post-type={postType}
				data-block-id={blockId}
				data-perpage={postPerPage}
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
				data-filter-all-posts-count={filterAllPostsCount}
				data-filerselected-count-switcher={filerselectedCountSwitcher}

				data-filter-selected-cat={filterSelectedCatString}
				data-filter-selected-tag={filterSelectedTagString}

			>

				{/* Category Filter Render */}
				{showFilterByTaxonomy && filterSelectedTaxonomy === 'category' && filterSelectedCatLabel.length > 0 && (
					<div className="fb_post_grid_filter_categories">
						{filterSelectedCatLabel.map((category, idx) => (
							<div
								key={idx}
								className="fb_post_grid_filter_category"
								data-category-id={category.value}
							>
								<span className="fb-post-grid-filter-category-label">{category.label}</span>
								{filerselectedCountSwitcher ? (
									<span className="fb-post-grid-filter-category-count">
										{' '}{category.value === 0
											? (filterAllPostsCount || 0)
											: (filterSelectedCatCount?.[category.value] || 0)}
									</span>
								) : null}
							</div>
						))}
					</div>
				)}

				{/* Tag Filter Render */}
				{showFilterByTaxonomy && filterSelectedTaxonomy === 'tag' && filterSelectedTagLabel.length > 0 && (
					<div className="fb_post_grid_filter_categories">
						{filterSelectedTagLabel.map((tag, idx) => (
							<div
								key={idx}
								className="fb_post_grid_filter_category"
								data-tag-id={tag.value}
							>
								<span className="fb-post-grid-filter-tag-label">{tag.label}</span>
								{filerselectedCountSwitcher ? (
									<span className="fb-post-grid-filter-tag-count">
										{' '}{tag.value === 0
											? (filterAllPostsCount || 0)
											: (filterSelectedTagCount?.[tag.value] || 0)}
									</span>
								) : null}
							</div>
						))}
					</div>
				)}
				<div className={`fb-parent-wrapper fb_post_grid_container ${blockId} ${postGridGlobalWraperClass} ${postSwitcher === 'list' ? 'list-layout' : 'grid-layout'}`} id={postGridGlobalWraperID}>
					<div className="load_more_button_icon">
						{renderSVG(loadMoreIcon)}
					</div>
				</div>
				<div className="loading post">
					{placeholders.map((item) => (
						<div key={item} className={`post-card skeleton skeleton-item ${blockId}`}>
							<div className="skeleton-item-title loading"></div>
							<div className="skeleton-item-location loading"></div>
							<div className="skeleton-item-sport loading"></div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
