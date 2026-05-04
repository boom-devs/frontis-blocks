import { useBlockProps } from "@wordpress/block-editor";
import "./style.scss";

const save = ({ attributes }) => {
	const {
		blockID,
		images,
		activeImageIndex,
		layoutType,
		thumbnailSize,
		thumbnailGap,
		mainImageMarginBottom,
		thumbnailBorderRadius,
		mainImageBorderRadius,
		activeThumbBorderColor,
		activeThumbBorderWidth,
		showThumbnailsDesktop,
		showThumbnailsTablet,
		showThumbnailsMobile,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-image-accordion-carousel ${blockID}`,
	});

	const mainImage = images.length > 0 ? images[activeImageIndex] : null;

	return (
		<div {...blockProps}>
			<div
				className="fb-image-accordion-container"
				data-block-id={blockID}
				data-default-index={activeImageIndex}
			>
				{/* Main Image Section */}
				<div className="fb-image-accordion-main-section">
					{mainImage ? (
						<img
							src={mainImage.url}
							alt={mainImage.alt}
							className="fb-image-accordion-main-image"
							style={{
								borderRadius: `${mainImageBorderRadius}px`,
								marginBottom: `${mainImageMarginBottom}px`,
							}}
							data-image-id={mainImage.id}
						/>
					) : null}
				</div>

				{/* Thumbnails Section */}
				{images.length > 0 && (
					<div
						className={`fb-image-accordion-thumbnails-section fb-layout-${layoutType}`}
						style={{
							gap: `${thumbnailGap}px`,
							display:
								(layoutType === "horizontal" && !showThumbnailsDesktop) ||
								(layoutType === "vertical" && !showThumbnailsDesktop)
									? "none"
									: "flex",
						}}
					>
						{images.map((image, index) => (
							<div
								key={index}
								className={`fb-image-accordion-thumbnail-wrapper ${
									activeImageIndex === index ? "active" : ""
								}`}
								data-image-index={index}
								style={{
									borderRadius: `${thumbnailBorderRadius}px`,
									borderWidth:
										activeImageIndex === index
											? `${activeThumbBorderWidth}px`
											: "0px",
									borderStyle: "solid",
									borderColor:
										activeImageIndex === index
											? activeThumbBorderColor
											: "transparent",
									cursor: "pointer",
								}}
								role="button"
								tabIndex={0}
								aria-pressed={activeImageIndex === index}
								aria-label={`Select image ${index + 1}`}
							>
								<img
									src={image.url}
									alt={image.alt}
									className="fb-image-accordion-thumbnail"
									style={{
										width: `${thumbnailSize.width}px`,
										height: `${thumbnailSize.height}px`,
										borderRadius: `${thumbnailBorderRadius}px`,
										objectFit: "cover",
									}}
									data-image-id={image.id}
								/>
							</div>
						))}
					</div>
				)}

				{/* Description */}
				{mainImage && (
					<div className="fb-image-accordion-description">
						<p>{mainImage.title || ""}</p>
					</div>
				)}
			</div>

			<script
				dangerouslySetInnerHTML={{
					__html: `
					(function() {
						const container = document.querySelector('[data-block-id="${blockID}"]');
						if (!container) return;

						const mainImage = container.querySelector('.fb-image-accordion-main-image');
						const thumbnails = container.querySelectorAll('.fb-image-accordion-thumbnail-wrapper');
						const description = container.querySelector('.fb-image-accordion-description p');
						const imagesList = ${JSON.stringify(images)};

						thumbnails.forEach((thumb, index) => {
							thumb.addEventListener('click', () => {
								updateCarousel(index);
							});
							thumb.addEventListener('keydown', (e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									updateCarousel(index);
								}
							});
						});

						function updateCarousel(index) {
							const image = imagesList[index];
							if (!image) return;

							mainImage.src = image.url;
							mainImage.alt = image.alt;

							thumbnails.forEach((thumb, i) => {
								if (i === index) {
									thumb.classList.add('active');
									thumb.setAttribute('aria-pressed', 'true');
								} else {
									thumb.classList.remove('active');
									thumb.setAttribute('aria-pressed', 'false');
								}
							});

							if (description) {
								description.textContent = image.title || '';
							}
						}
					})();
					`,
				}}
			/>
		</div>
	);
};

export default save;
