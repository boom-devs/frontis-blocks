import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

import Inspector from "./inspector";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generateImageAccordionStyle from "./styling";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) {
	const {
		blockID,
		blockStyle,
		accordionPresetStyle,
		accordionTrigger,
		accordionItems,
		accordionActiveIndex,
		accordionShowTitle,
		accordionShowSubtitle,
		accordionShowNumber,
		accordionShowButton,
		accordionShowIcon,
		accordionShowOverlay,
		accordionDesktopSwitcher,
		accordionTabletSwitcher,
		accordionMobileSwitcher,
		accordionWraperID,
		accordionWraperClass,
	} = attributes;

	const [activeIndex, setActiveIndex] = useState(accordionActiveIndex || 0);

	// Handle block ID generation
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-image-accordion",
		isSelected,
		attributes,
		setAttributes,
	});

	// Generate dynamic CSS on attribute change
	useEffect(() => {
		if (blockID) {
			const css = generateImageAccordionStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);

	const blockProps = useBlockProps({
		className: `fb-image-accordion-main-wrapper ${blockID} ${
			accordionDesktopSwitcher ? "fb-desktop-responsive" : ""
		} ${accordionTabletSwitcher ? "fb-tablet-responsive" : ""} ${
			accordionMobileSwitcher ? "fb-mobile-responsive" : ""
		}`.trim(),
	});

	const handleItemInteraction = (index) => {
		setActiveIndex(index);
	};

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}

			<div {...blockProps}>
				<div
					className={`fb-image-accordion-wrapper ${accordionPresetStyle} ${accordionWraperClass}`}
					id={accordionWraperID}
					data-trigger={accordionTrigger}
				>
					{accordionItems.map((item, index) => {
						const isActive = activeIndex === index;
						return (
							<div
								key={item.id || index}
								className={`fb-accordion-item ${
									isActive ? "fb-accordion-active" : ""
								}`}
								onMouseEnter={() =>
									accordionTrigger === "hover" && handleItemInteraction(index)
								}
								onClick={() =>
									accordionTrigger === "click" && handleItemInteraction(index)
								}
								style={{
									backgroundImage: item.imageUrl
										? `url(${item.imageUrl})`
										: undefined,
								}}
							>
								{/* Overlay */}
								{accordionShowOverlay && (
									<div className="fb-accordion-overlay"></div>
								)}

								{/* Icon (shown when collapsed in style-1) */}
								{accordionShowIcon && item.icon && (
									<div className="fb-accordion-icon-wrapper">
										{renderSVG(item.icon)}
									</div>
								)}

								{/* Content */}
								<div className="fb-accordion-content">
									{accordionShowNumber && (
										<span className="fb-accordion-number">{item.number}</span>
									)}
									{accordionShowTitle && (
										<h3 className="fb-accordion-title">{item.title}</h3>
									)}
									{accordionShowSubtitle && (
										<p className="fb-accordion-subtitle">{item.subtitle}</p>
									)}
									{accordionShowButton && item.buttonText && (
										<div className="fb-accordion-btn-wrapper">
											<a
												className="fb-accordion-btn"
												href={item.buttonUrl || "#"}
												target={item.buttonTarget ? "_blank" : undefined}
												rel={
													item.buttonTarget ? "noopener noreferrer" : undefined
												}
												onClick={(e) => e.preventDefault()}
											>
												{item.buttonText}
											</a>
										</div>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<style>{blockStyle}</style>
		</>
	);
}
