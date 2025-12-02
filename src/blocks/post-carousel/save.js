import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const { 
		blockId,
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

		readMoreSwitcher,
		readMoreText,
		readMoreIconAlign,
		readMoreIcon,
		readMoreIconImageUrl,
		readMoreIconImageAlt,

		customPermalinkSwitcher,
		customPermalink,

		thumbnailLinkSwitcher,
		categoryLinkSwitcher,
		tagLinkSwitcher,
		authorLinkSwitcher,
		titleLinkSwitcher,

		postWrapperLinkSwitcher,

		// Carousel attributes
		carouselEnabled,
		speed,
		autoplay,
		autoplayDelay,
		loop,
		slidesPerView,
		spaceBetween,
		spaceBetweenUnits,
		navigation,
		pagination,
		paginationType,
		arrowsUniqueId,
		sliderGlobalWraperID,
		sliderGlobalWraperClass,

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
				data-category-key={categoryKey}
				data-tag-key={tagKey || undefined}
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
				data-default-image-url={defaultImageUrl}

				data-show-filter-by-taxonomy={showFilterByTaxonomy}
				data-filter-selected-taxonomy={filterSelectedTaxonomy}
				// data-filter-all-posts-count={filterAllPostsCount}
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

				data-post-wrapper-link-switcher={postWrapperLinkSwitcher}
				data-carousel-enabled={carouselEnabled}
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
				{(() => {
		// Build Swiper settings for frontend
		const navSelectors = navigation ? (
			arrowsUniqueId
				? {
					nextEl: `.${arrowsUniqueId} .fb-news-ticker-next`,
					prevEl: `.${arrowsUniqueId} .fb-news-ticker-prev`,
					hideOnClick: false,
				}
				: {
					nextEl: `.${blockId} .fb-post-carousel-next`,
					prevEl: `.${blockId} .fb-post-carousel-prev`,
					hideOnClick: false,
				}
		) : false;

		const swiperSettings = {
			spaceBetween: Number(spaceBetween?.Desktop) || 20,
			slidesPerView: Number(slidesPerView?.Desktop) || 3,
			speed: speed || 3000,
			autoplay: autoplay ? {
				delay: autoplayDelay || 3000,
				disableOnInteraction: false,
			} : false,
			loop: loop !== false,
							navigation: navSelectors,
							pagination: pagination ? {
								clickable: true,
								type: paginationType || 'bullets',
							} : false,
			breakpoints: {
			320: {
				slidesPerView: Number(slidesPerView?.Mobile) || 1,
				spaceBetween: Number(spaceBetween?.Mobile) || 10,
			},
			768: {
				slidesPerView: Number(slidesPerView?.Tablet) || 2,
				spaceBetween: Number(spaceBetween?.Tablet) || 15,
			},
			1024: {
				slidesPerView: Number(slidesPerView?.Desktop) || 3,
				spaceBetween: Number(spaceBetween?.Desktop) || 20,
			},
		},
	};
					return (
						<div
							className={`fb-post-carousel-container ${blockId}`}
							data-block-id={blockId}
							data-swiper-settings={JSON.stringify(swiperSettings)}
						>
							<div
								className={`fb-post-carousel-swiper swiper ${sliderGlobalWraperClass || postGridGlobalWraperClass}`}
								id={sliderGlobalWraperID || postGridGlobalWraperID}
							>
									<div className="swiper-wrapper fb_post_grid_container">
										{/* Posts will be loaded here via view.js */}
									</div>
									{pagination && (
										<div className="swiper-pagination"></div>
									)}
									{navigation && !arrowsUniqueId && (
										<>
											<button
												className="fb-post-carousel-nav fb-post-carousel-prev"
												aria-label="Previous slide"
											>
												‹
											</button>
											<button
												className="fb-post-carousel-nav fb-post-carousel-next"
												aria-label="Next slide"
											>
												›
											</button>
										</>
									)}
								</div>
							</div>
						);
					})()}
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
