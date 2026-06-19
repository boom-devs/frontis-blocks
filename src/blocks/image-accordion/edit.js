import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect, useState, useRef } from "@wordpress/element";
import { applyFilters } from "@wordpress/hooks";
import UpgradeToProPopup from "@Utils/upgradeToProPopup";
import getProActive from "@Utils/getProActive";

import "./editor.scss";
import Inspector from "./inspector";
import SwitchToBlockSettings from "@Utils/SwitchToBlockSettings";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generateImageAccordionStyle from "./styling";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) {
	const {
		blockID,
		blockStyle,
		imageAccordionTrigger,
		imageAccordionItems,
		imageAccordionPreset,
		imageAccordionWraperID,
		imageAccordionWraperClass,
		imageAccordionDesktopSwitcher,
		imageAccordionTabletSwitcher,
		imageAccordionMobileSwitcher,
	} = attributes;

	/** Manages tab button settings and switches to block settings on click */
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	// State to track active item in the editor for interactive preview
	const [activeIndex, setActiveIndex] = useState(0);

	// Reset active index to 0 when trigger mode is hover and mouse leaves the container
	const handleMouseLeave = () => {
		if (imageAccordionTrigger === "hover") setActiveIndex(0);
	};

	// Handle block ID generation
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-image-accordion",
		isSelected,
		attributes,
		setAttributes,
	});

	// Generate block style
	useEffect(() => {
		if (!blockID) return;
		const css = generateImageAccordionStyle(attributes);
		if (css !== blockStyle) {
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);

	// Generate unique block ID if not set
	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-image-accordion-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const blockProps = useBlockProps({
		className: `fb-image-accordion-main-wrapper ${blockID} ${
			imageAccordionDesktopSwitcher && "fb-desktop-responsive"
		} ${imageAccordionTabletSwitcher && "fb-tablet-responsive"} ${
			imageAccordionMobileSwitcher && "fb-mobile-responsive"
		}`,
	});

	const renderItem = (item, index) => {
		const numLabel = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
		const isActive = activeIndex === index;
		const target = item.buttonTarget ? "_blank" : "_self";
		const rel = item.buttonNofollow ? "nofollow" : undefined;

		const handleItemInteraction = () => {
			if (imageAccordionTrigger === "click") {
				setActiveIndex(index);
			}
		};

		const handleItemHover = () => {
			if (imageAccordionTrigger === "hover") {
				setActiveIndex(index);
			}
		};

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
				onMouseEnter={handleItemHover}
				onClick={handleItemInteraction}
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

				{imageAccordionPreset === "preset-2" &&
					attributes.imageAccordionShowDots && (
						<div className="fb-image-accordion-dot-wrapper">
							<span className="fb-image-accordion-dot" />
						</div>
					)}

				<div className="fb-image-accordion-content-wrapper">
					{imageAccordionPreset === "preset-1" && (
						<>
							{attributes.imageAccordionShowIcon && (
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
							)}
							<div className="fb-image-accordion-text-group">
								{attributes.imageAccordionShowTitle && (
									<h3 className="fb-image-accordion-title">{item.title}</h3>
								)}
								{attributes.imageAccordionShowSubtitle && item.subTitle && (
									<p className="fb-image-accordion-desc">{item.subTitle}</p>
								)}
							</div>
						</>
					)}

					{imageAccordionPreset === "preset-2" && (
						<div className="fb-image-accordion-preset2-content">
							<div className="fb-image-accordion-bottom-content">
								{attributes.imageAccordionShowNumber && (
									<span className="fb-image-accordion-number">{numLabel}</span>
								)}
								{attributes.imageAccordionShowTitle && (
									<h3 className="fb-image-accordion-title">{item.title}</h3>
								)}
								{attributes.imageAccordionShowSubtitle && item.subTitle && (
									<p className="fb-sub-title">{item.subTitle}</p>
								)}
							</div>
						</div>
					)}

					{imageAccordionPreset === "preset-3" && (
						<div className="fb-image-accordion-preset3-content">
							<div className="fb-image-accordion-left-content">
								{attributes.imageAccordionShowTitle && (
									<h3 className="fb-image-accordion-title">{item.title}</h3>
								)}
								{attributes.imageAccordionShowSubtitle && item.subTitle && (
									<p className="fb-sub-title">{item.subTitle}</p>
								)}
							</div>
							{attributes.imageAccordionShowButton && (
								<a
									href={item.buttonUrl || "#"}
									target={target}
									rel={rel}
									className="fb-image-accordion-btn"
									onClick={(e) => e.preventDefault()}
								>
									{item.buttonText || __("Read More", "frontis-blocks")}
								</a>
							)}
						</div>
					)}

					{imageAccordionPreset === "preset-4" && (
						<>
							{attributes.imageAccordionShowTitle && (
								<h3 className="fb-image-accordion-title">{item.title}</h3>
							)}
							{attributes.imageAccordionShowNumber && (
								<span className="fb-image-accordion-number">{numLabel}</span>
							)}
							{attributes.imageAccordionShowSubtitle && item.subTitle && (
								<p className="fb-image-accordion-desc">{item.subTitle}</p>
							)}
						</>
					)}
				</div>
			</div>
		);
	};

	const isProActive = getProActive();
	const imageAccordionAvailable = applyFilters("frontisblocks-image-accordion-available", false);

	if (!imageAccordionAvailable || !isProActive) {
		return <UpgradeToProPopup />;
	}

	return (
		<>
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
					clientId={clientId}
				/>
			)}

			<div {...blockProps}>
				<div
					className={`fb-parent-wrapper fb-image-accordion-wrapper ${blockID} ${imageAccordionPreset} fb-trigger-${imageAccordionTrigger} ${imageAccordionWraperClass}`}
					id={imageAccordionWraperID}
					data-trigger={imageAccordionTrigger}
					ref={panelRef}
					onMouseLeave={handleMouseLeave}
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
