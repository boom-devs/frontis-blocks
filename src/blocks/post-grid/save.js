import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { 
		blockId,
		postType,
		postPerPage,
		selectedCat,
		placeholders,
		selectedCatSwitcher,
		deSelectedCat,
		selectedTagSwitcher,
		selectedTag,
		deSelectedTag,
		selectedAuthorSwitcher,
		selectedAuthor,
		deSelectedAuthor,
		orderBy,
		sortOrder,
	} = attributes;

	console.log(selectedCat);

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
				data-orderby={orderBy}
				data-sortorder={sortOrder}
			>
				<div className="post-list"></div>
				<div className="loading post">
					{placeholders.map((item) => (
						<div key={item} className="post-card skeleton skeleton-item">
							<div className="skeleton-item-title loading"></div>
							<div className="skeleton-item-location loading"></div>
							<div className="skeleton-item-sport loading"></div>
						</div>
					))}
				</div>
				<section id="pagination" className="pagination"></section>
			</div>
		</>
	);
}
