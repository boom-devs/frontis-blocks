import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		blockID,
		images = [],
		activeImageIndex = 0,
		layoutType = 'horizontal',
		mainImageWidth = '60',
		thumbnailAreaWidth = '40',
		thumbnailLayout = 'vertical',
		thumbnailSize = '80',
		spacing = '20',
		mainImageBorderRadius = '12',
		thumbnailBorderRadius = '8',
		activeThumbBorderWidth = '3',
		activeThumbBorderColor = '#007cba',
		showTitle = true,
		showDescription = true,
		titleFontSize = { Desktop: '24' },
		titleFontColor = '#000000',
		titleFontWeight = '600',
		descriptionFontSize = { Desktop: '14' },
		descriptionFontColor = '#666666',
		mainImageBg = '#f5f5f5',
		descriptionBg = 'rgba(0, 124, 186, 0.1)',
		descriptionBorder = '#007cba',
		descriptionBorderWidth = '3',
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-image-accordion-wrapper ${blockID || ''}`,
	});

	const currentImage = images?.[activeImageIndex];

	// Determine layout styling
	const getLayoutStyle = () => {
		switch (layoutType) {
			case 'vertical':
				return {
					display: 'flex',
					flexDirection: 'column',
					gap: `${spacing}px`,
				};
			case 'grid':
				return {
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
					gap: `${spacing}px`,
				};
			case 'compact':
				return {
					display: 'flex',
					flexDirection: 'row',
					gap: `${spacing}px`,
					alignItems: 'flex-start',
				};
			case 'horizontal':
			default:
				return {
					display: 'flex',
					flexDirection: 'row',
					gap: `${spacing}px`,
				};
		}
	};

	// Determine thumbnail layout
	const getThumbnailStyle = () => {
		const baseStyle = {
			display: 'flex',
			gap: `${spacing}px`,
			maxHeight: `${parseInt(thumbnailSize) * 4 + parseInt(spacing) * 3}px`,
			overflow: thumbnailLayout === 'horizontal-scroll' ? 'auto' : 'visible',
		};

		switch (thumbnailLayout) {
			case 'vertical':
				return { ...baseStyle, flexDirection: 'column' };
			case 'grid':
				return { ...baseStyle, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' };
			case 'horizontal':
			case 'horizontal-scroll':
			default:
				return { ...baseStyle, flexDirection: 'row' };
		}
	};

	return (
		<div {...blockProps}>
			<div style={getLayoutStyle()}>
				{/* Main Image Container */}
				{(layoutType === 'horizontal' || layoutType === 'vertical' || layoutType === 'compact') && (
					<div
						className="fb-image-accordion-main"
						style={{
							flex: layoutType === 'horizontal' || layoutType === 'vertical' ? `0 0 ${mainImageWidth}%` : '1',
							minHeight: '300px',
							background: mainImageBg,
							borderRadius: `${mainImageBorderRadius}px`,
							overflow: 'hidden',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{currentImage?.url && (
							<img
								src={currentImage.url}
								alt={currentImage.alt || 'Main image'}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									display: 'block',
								}}
							/>
						)}
					</div>
				)}

				{/* Thumbnails Container */}
				<div
					className="fb-image-accordion-thumbnails"
					style={{
						flex: layoutType === 'horizontal' || layoutType === 'vertical' ? `0 0 ${thumbnailAreaWidth}%` : '1',
						...getThumbnailStyle(),
					}}
				>
					{images.map((image, index) => (
						<button
							key={image.id || index}
							className={`fb-image-accordion-thumbnail ${activeImageIndex === index ? 'active' : ''}`}
							style={{
								width: `${thumbnailSize}px`,
								height: `${thumbnailSize}px`,
								borderRadius: `${thumbnailBorderRadius}px`,
								overflow: 'hidden',
								border:
									activeImageIndex === index
										? `${activeThumbBorderWidth}px solid ${activeThumbBorderColor}`
										: '2px solid #ddd',
								cursor: 'pointer',
								padding: 0,
								background: 'none',
								flexShrink: 0,
							}}
						>
							{image.url && (
								<img
									src={image.url}
									alt={image.title || 'Thumbnail'}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										display: 'block',
									}}
								/>
							)}
						</button>
					))}
				</div>

				{/* Description */}
				{showTitle && (
					<div
						className="fb-image-accordion-description"
						style={{
							flex: '1 0 100%',
							background: descriptionBg,
							border: `${descriptionBorderWidth}px solid ${descriptionBorder}`,
							borderRadius: '4px',
							padding: '15px',
							marginTop: '10px',
						}}
					>
						<h3
							style={{
								fontSize: `${titleFontSize?.Desktop || 24}px`,
								color: titleFontColor,
								fontWeight: titleFontWeight,
								margin: '0 0 10px 0',
							}}
						>
							{currentImage?.title || ''}
						</h3>
						{showDescription && (
							<p
								style={{
									fontSize: `${descriptionFontSize?.Desktop || 14}px`,
									color: descriptionFontColor,
									margin: '0',
									lineHeight: '1.6',
								}}
							>
								{currentImage?.description || ''}
							</p>
						)}
					</div>
				)}
			</div>

			<script
				type="module"
				dangerouslySetInnerHTML={{
					__html: `
					(() => {
						const wrapper = document.querySelector('.${blockID}');
						if (!wrapper) return;
						
						const thumbnails = wrapper.querySelectorAll('.fb-image-accordion-thumbnail');
						const mainImage = wrapper.querySelector('.fb-image-accordion-main img');
						const titleEl = wrapper.querySelector('.fb-image-accordion-description h3');
						const descEl = wrapper.querySelector('.fb-image-accordion-description p');
						
						thumbnails.forEach((thumb, index) => {
							thumb.addEventListener('click', () => {
								// Update active state
								thumbnails.forEach((t) => t.classList.remove('active'));
								thumb.classList.add('active');
								
								// Get the image data
								const imageUrl = thumb.querySelector('img')?.src;
								const imageAlt = thumb.querySelector('img')?.alt;
								
								// This would need to be set dynamically from PHP or data attribute
								// For now, just show visual feedback
							});
						});
					})();
					`,
				}}
			/>
		</div>
	);
}
