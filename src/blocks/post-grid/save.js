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

		postGridGlobalWraperID,
        postGridGlobalWraperClass,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: postGridGlobalWraperClass,
	});

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
			>
				<div className={`fb-parent-wrapper fb_post_grid_container ${blockId} ${postSwitcher === 'list' ? 'list-layout' : 'grid-layout'}`} id={postGridGlobalWraperID}>
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
