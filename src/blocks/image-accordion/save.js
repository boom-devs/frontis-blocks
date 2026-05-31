import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		blockStyle,
		imageAccordionPreset,
		imageAccordionTrigger,
		imageAccordionItems,
		imageAccordionShowDots,
		imageAccordionShowNumber,
		imageAccordionWraperID,
		imageAccordionWraperClass,
		imageAccordionDesktopSwitcher,
		imageAccordionTabletSwitcher,
		imageAccordionMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-image-accordion-main-wrapper ${blockID} ${
			imageAccordionDesktopSwitcher ? "fb-desktop-responsive" : ""
		} ${imageAccordionTabletSwitcher ? "fb-tablet-responsive" : ""} ${
			imageAccordionMobileSwitcher ? "fb-mobile-responsive" : ""
		}`.trim(),
	});

	const renderItem = (item, index) => {
		const numLabel = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
		const isActive = index === 0; // Default first item as active
		const target = item.buttonTarget ? "_blank" : "_self";
		const rel = item.buttonNofollow ? "nofollow" : undefined;

		return (
			<div
				key={item.id || index}
				className={`pea-image-accordion-item ${isActive ? "is-active" : ""}`}
				role="button"
				tabIndex="0"
				aria-expanded={isActive ? "true" : "false"}
				aria-label={item.title || ""}
				style={
					imageAccordionPreset !== "preset-4" && item.image?.url
						? { backgroundImage: `url('${item.image.url}')` }
						: {}
				}
			>
				{imageAccordionPreset === "preset-4" && item.image?.url && (
					<div
						className="pea-skew-bg"
						style={{ backgroundImage: `url('${item.image.url}')` }}
					/>
				)}

				<div className="pea-image-accordion-overlay" />

				{imageAccordionPreset === "preset-2" && imageAccordionShowDots && (
					<div className="pea-image-accordion-dot-wrapper">
						<span className="pea-image-accordion-dot" />
					</div>
				)}

				<div className="pea-image-accordion-content-wrapper">
					{imageAccordionPreset === "preset-1" && (
						<>
							<div className="pea-image-accordion-icon-circle">
								{item.mediaType === "image" && item.selectedImage?.url ? (
									<img
										src={item.selectedImage.url}
										alt={item.title || ""}
										loading="lazy"
									/>
								) : item.selectedIcon ? (
									renderSVG(item.selectedIcon)
								) : (
									renderSVG("star")
								)}
							</div>
							<div className="pea-image-accordion-text-group">
								<h3 className="pea-image-accordion-title">{item.title}</h3>
								{item.subTitle && (
									<p className="pea-image-accordion-desc">{item.subTitle}</p>
								)}
							</div>
						</>
					)}

					{imageAccordionPreset === "preset-2" && (
						<>
							{imageAccordionShowDots && (
								<div className="pea-image-accordion-dot-wrapper">
									<span className="pea-image-accordion-dot" />
								</div>
							)}
							<div className="pea-image-accordion-preset2-content">
								<div className="pea-image-accordion-bottom-content">
									{imageAccordionShowNumber && (
										<span className="pea-image-accordion-number">
											{numLabel}
										</span>
									)}
									<h3 className="pea-image-accordion-title">{item.title}</h3>
									{item.subTitle && (
										<p className="pea-sub-title">{item.subTitle}</p>
									)}
								</div>
							</div>
						</>
					)}

					{imageAccordionPreset === "preset-3" && (
						<div className="pea-image-accordion-preset3-content">
							<div className="pea-image-accordion-left-content">
								<h3 className="pea-image-accordion-title">{item.title}</h3>
								{item.subTitle && (
									<p className="pea-sub-title">{item.subTitle}</p>
								)}
							</div>
							<a
								href={item.buttonUrl || "#"}
								target={target}
								rel={rel}
								className="pea-image-accordion-btn"
							>
								{item.buttonText || __("Read More", "frontis-blocks")}
							</a>
						</div>
					)}

					{imageAccordionPreset === "preset-4" && (
						<>
							<h3 className="pea-image-accordion-title">{item.title}</h3>
							{imageAccordionShowNumber && (
								<span className="pea-image-accordion-number">{numLabel}</span>
							)}
							{item.subTitle && (
								<p className="pea-image-accordion-desc">{item.subTitle}</p>
							)}
						</>
					)}
				</div>
			</div>
		);
	};

	return (
		<>
			<div {...blockProps}>
				<div
					className={`fb-image-accordion-wrapper ${imageAccordionPreset} pea-trigger-${imageAccordionTrigger} ${imageAccordionWraperClass}`}
					id={imageAccordionWraperID}
					data-trigger={imageAccordionTrigger}
				>
					<div className="pea-image-accordion-container">
						{imageAccordionItems &&
							imageAccordionItems.map((item, index) => renderItem(item, index))}
					</div>
				</div>
			</div>
			{blockStyle && <style>{blockStyle}</style>}
		</>
	);
}
