import { useBlockProps } from '@wordpress/block-editor';

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
		deviceType,
		selectedCatSwitcher,
		selectedTagSwitcher,
		selectedAuthorSwitcher,
		columnsPerSection,
		gapUnits,
		rowGap,
		columnGap,
		postTitleTag,
		postDescriptionTag,
		postDescriptionExcerptLength,
	} = attributes;

	const blockProps = useBlockProps.save();

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
			>
				<div className={`fb_post_grid_container ${blockId}`}></div>
				<div className="loading post">
					{placeholders.map((item) => (
						<div key={item} className={`post-card skeleton skeleton-item ${blockId}`}>
							<div className="skeleton-item-title loading"></div>
							<div className="skeleton-item-location loading"></div>
							<div className="skeleton-item-sport loading"></div>
							<div className="skeleton-item-date loading"></div>
							<div className="skeleton-item-readmore loading"></div>
							<div className="skeleton-item-author loading"></div>
							<div className="skeleton-item-readmore loading"></div>
							<div className="skeleton-item-author loading"></div>
							<div className="skeleton-item-readmore loading"></div>
							<div className="skeleton-item-author loading"></div>
							<div className="skeleton-item-readmore loading"></div>
							<div className="skeleton-item-author loading"></div>
						</div>
					))}
				</div>
				<section id="pagination" className="pagination"></section>
			</div>
		</>
	);
}
