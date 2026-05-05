import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState, useCallback } from '@wordpress/element';
import './editor.scss';
import Inspector from './inspector';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
	const {
		blockID,
		images,
		activeImageIndex,
		layoutType,
		mainImageWidth,
		thumbnailAreaWidth,
		thumbnailLayout,
		thumbnailSize,
		spacing,
		mainImageBorderRadius,
		thumbnailBorderRadius,
		activeThumbBorderWidth,
		activeThumbBorderColor,
		showTitle,
		showDescription,
		titleFontSize,
		titleFontColor,
		titleFontWeight,
		descriptionFontSize,
		descriptionFontColor,
		mainImageBg,
		descriptionBg,
		descriptionBorder,
		descriptionBorderWidth,
	} = attributes;

	const [hoveredThumbnail, setHoveredThumbnail] = useState(null);

	// Generate block ID on mount
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: 'fb-image-accordion',
		isSelected,
		attributes,
		setAttributes,
	});

	const blockProps = useBlockProps({
		className: `fb-image-accordion-editor ${blockID || ''}`,
	});

	const currentImage = images?.[activeImageIndex || 0];

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

	// Determine main image and thumbnails layout
	const getThumbnailStyle = () => {
		const baseStyle = {
			display: 'flex',
			gap: `${spacing}px`,
			maxHeight: `${parseInt(thumbnailSize) * 4 + spacing * 3}px`,
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
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps}>
				<div style={getLayoutStyle()}>
					{/* Main Image Container */}
					{(layoutType === 'horizontal' || layoutType === 'vertical' || layoutType === 'compact') && (
						<div
							style={{
								flex: layoutType === 'horizontal' || layoutType === 'vertical' ? `0 0 ${mainImageWidth}%` : '1',
								minHeight: '300px',
								background: mainImageBg || '#f5f5f5',
								borderRadius: `${mainImageBorderRadius}px`,
								overflow: 'hidden',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{currentImage?.url ? (
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
							) : (
								<div style={{ color: '#999', textAlign: 'center', padding: '20px' }}>
									{__('Select an image from thumbnails', 'frontis-blocks')}
								</div>
							)}
						</div>
					)}

					{/* Thumbnails Container */}
					<div
						style={{
							flex: layoutType === 'horizontal' || layoutType === 'vertical' ? `0 0 ${thumbnailAreaWidth}%` : '1',
							...getThumbnailStyle(),
						}}
					>
						{images?.map((image, index) => (
							<div
								key={image.id || index}
								onClick={() => setAttributes({ activeImageIndex: index })}
								onMouseEnter={() => setHoveredThumbnail(index)}
								onMouseLeave={() => setHoveredThumbnail(null)}
								style={{
									width: `${thumbnailSize}px`,
									height: `${thumbnailSize}px`,
									borderRadius: `${thumbnailBorderRadius}px`,
									overflow: 'hidden',
									cursor: 'pointer',
									border:
										activeImageIndex === index
											? `${activeThumbBorderWidth}px solid ${activeThumbBorderColor}`
											: '2px solid #ddd',
									opacity: hoveredThumbnail === index ? 0.8 : 1,
									transition: 'opacity 0.2s',
									flexShrink: 0,
								}}
							>
								{image.url ? (
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
								) : (
									<div
										style={{
											width: '100%',
											height: '100%',
											background: '#f0f0f0',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											fontSize: '10px',
											color: '#999',
										}}
									>
										{__('No Image', 'frontis-blocks')}
									</div>
								)}
							</div>
						))}
					</div>

					{/* Description */}
					{showTitle && (
						<div
							style={{
								flex: '1 0 100%',
								background: descriptionBg || '#fff',
								border: `${descriptionBorderWidth}px solid ${descriptionBorder}`,
								borderRadius: '4px',
								padding: '15px',
								marginTop: '10px',
							}}
						>
							<h3
								style={{
									fontSize: `${titleFontSize?.Desktop || 24}px`,
									color: titleFontColor || '#000',
									fontWeight: titleFontWeight || '600',
									margin: '0 0 10px 0',
								}}
							>
								{currentImage?.title || __('Untitled', 'frontis-blocks')}
							</h3>
							{showDescription && (
								<p
									style={{
										fontSize: `${descriptionFontSize?.Desktop || 14}px`,
										color: descriptionFontColor || '#666',
										margin: '0',
										lineHeight: '1.6',
									}}
								>
									{currentImage?.description || __('No description', 'frontis-blocks')}
								</p>
							)}
						</div>
					)}
				</div>
			</div>
		</>
	);
}
