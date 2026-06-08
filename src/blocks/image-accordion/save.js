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
		imageAccordionShowTitle,
		imageAccordionShowSubtitle,
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
		const isActive = index === 0;
		const target = item.buttonTarget ? "_blank" : "_self";
		const rel = item.buttonNofollow ? "nofollow" : undefined;

		return (
			<div
				key={item.id || index}
				className={`fb-image-accordion-item ${isActive ? "is-active" : ""}`}
				role="button"
				tabIndex="0"
				aria-expanded={isActive ? "true" : "false"}
				aria-label={item.title || ""}
				style={
					imageAccordionPreset !== "preset-4" && item.image?.url
						? {
								backgroundImage: `url('${item.image.url}')`,
								backgroundPosition: item.image?.position,
								backgroundAttachment: item.image?.attachment,
								backgroundRepeat: item.image?.repeat,
								backgroundSize: item.image?.size,
						  }
						: {}
				}
			>
				{imageAccordionPreset === "preset-4" && item.image?.url && (
					<div
						className="fb-skew-bg"
						style={{
							backgroundImage: `url('${item.image.url}')`,
							backgroundPosition: item.image?.position,
							backgroundSize: item.image?.size,
						}}
					/>
				)}

				<div className="fb-image-accordion-overlay" />

				{imageAccordionPreset === "preset-2" && imageAccordionShowDots && (
					<div className="fb-image-accordion-dot-wrapper">
						<span className="fb-image-accordion-dot" />
					</div>
				)}

				<div className="fb-image-accordion-content-wrapper">
					{imageAccordionPreset === "preset-1" && (
						<>
							<div className="fb-image-accordion-icon-circle">
								{item.mediaType === "image" && item.selectedImage?.url ? (
									<img
										src={item.selectedImage.url}
										alt={item.title || ""}
										loading="lazy"
									/>
								) : item.selectedIcon ? (
									renderSVG(item.selectedIcon)
								) : (
									renderSVG("heart")
								)}
							</div>
							<div className="fb-image-accordion-text-group">
								{imageAccordionShowTitle && (
									<h3 className="fb-image-accordion-title">{item.title}</h3>
								)}
								{imageAccordionShowSubtitle && item.subTitle && (
									<p className="fb-image-accordion-desc">{item.subTitle}</p>
								)}
							</div>
						</>
					)}

					{imageAccordionPreset === "preset-2" && (
						<>
							{imageAccordionShowDots && (
								<div className="fb-image-accordion-dot-wrapper">
									<span className="fb-image-accordion-dot" />
								</div>
							)}
							<div className="fb-image-accordion-preset2-content">
								<div className="fb-image-accordion-bottom-content">
									{imageAccordionShowNumber && (
										<span className="fb-image-accordion-number">
											{numLabel}
										</span>
									)}
									<h3 className="fb-image-accordion-title">{item.title}</h3>
									{item.subTitle && (
										<p className="fb-sub-title">{item.subTitle}</p>
									)}
								</div>
							</div>
						</>
					)}

					{imageAccordionPreset === "preset-3" && (
						<div className="fb-image-accordion-preset3-content">
							<div className="fb-image-accordion-left-content">
								<h3 className="fb-image-accordion-title">{item.title}</h3>
								{item.subTitle && (
									<p className="fb-sub-title">{item.subTitle}</p>
								)}
							</div>
							<a
								href={item.buttonUrl || "#"}
								target={target}
								rel={rel}
								className="fb-image-accordion-btn"
							>
								{item.buttonText || __("Read More", "frontis-blocks")}
							</a>
						</div>
					)}

					{imageAccordionPreset === "preset-4" && (
						<>
							<h3 className="fb-image-accordion-title">{item.title}</h3>
							{imageAccordionShowNumber && (
								<span className="fb-image-accordion-number">{numLabel}</span>
							)}
							{item.subTitle && (
								<p className="fb-image-accordion-desc">{item.subTitle}</p>
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
					className={`fb-image-accordion-wrapper ${imageAccordionPreset} fb-trigger-${imageAccordionTrigger} ${imageAccordionWraperClass}`}
					id={imageAccordionWraperID}
					data-trigger={imageAccordionTrigger}
				>
					<div className="fb-image-accordion-container">
						{imageAccordionItems &&
							imageAccordionItems.map((item, index) => renderItem(item, index))}
					</div>
				</div>
			</div>
			{blockStyle && <style>{blockStyle}</style>}
		</>
	);
}
