import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { 
		blockId,
		postType,
		postPerPage,
		selectedCat,
		placeholders
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
				data-cat={selectedCat || ''}
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
