import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect, useState } from "@wordpress/element";

import "./editor.scss";
import Inspector from "./inspector";
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
		imageAccordionWidth,
		imageAccordionWidthUnits,
		imageAccordionHeight,
		imageAccordionHeightUnits,
		imageAccordionGap,
		imageAccordionGapUnits,
		imageAccordionItemBorderRadiusUnits,
		imageAccordionItemBorderRadiusDesktop,
		imageAccordionItemBorderRadiusTablet,
		imageAccordionItemBorderRadiusMobile,
		imageAccordionOverlayColor,
		imageAccordionOverlayHoverColor,
		imageAccordionDotColor,
		imageAccordionDotSize,
		imageAccordionDotSizeUnits,
		imageAccordionNumberColor,
		imageAccordionNumberHoverColor,
		imageAccordionNumberFontSize,
		imageAccordionNumberFontSizeUnits,
		imageAccordionNumberFontWeight,
		imageAccordionIconColor,
		imageAccordionIconHoverColor,
		imageAccordionIconSize,
		imageAccordionIconSizeUnits,
		imageAccordionIconCircleBgColor,
		imageAccordionIconCircleSize,
		imageAccordionIconCircleSizeUnits,
		imageAccordionTitleColor,
		imageAccordionTitleHoverColor,
		imageAccordionTitleFontSize,
		imageAccordionTitleFontSizeUnits,
		imageAccordionTitleFontWeight,
		imageAccordionTitleLineHeight,
		imageAccordionTitleLineHeightUnits,
		imageAccordionTitleFontFamily,
		imageAccordionTitleFontStyle,
		imageAccordionTitleTransform,
		imageAccordionTitleDecoration,
		imageAccordionTitleLetterSpacing,
		imageAccordionTitleLetterSpacingUnits,
		imageAccordionTitleTypoType,
		imageAccordionTitleTypoOption,
		imageAccordionSubtitleColor,
		imageAccordionSubtitleHoverColor,
		imageAccordionSubtitleFontSize,
		imageAccordionSubtitleFontSizeUnits,
		imageAccordionSubtitleFontWeight,
		imageAccordionSubtitleLineHeight,
		imageAccordionSubtitleLineHeightUnits,
		imageAccordionSubtitleFontFamily,
		imageAccordionSubtitleFontStyle,
		imageAccordionSubtitleTransform,
		imageAccordionSubtitleDecoration,
		imageAccordionSubtitleLetterSpacing,
		imageAccordionSubtitleLetterSpacingUnits,
		imageAccordionSubtitleTypoType,
		imageAccordionSubtitleTypoOption,
		imageAccordionBtnTextColor,
		imageAccordionBtnHoverTextColor,
		imageAccordionBtnBgColor,
		imageAccordionBtnHoverBgColor,
		imageAccordionBtnBorderColor,
		imageAccordionBtnBorder,
		imageAccordionBtnLineHeight,
		imageAccordionBtnLineHeightUnits,
		imageAccordionBtnFontFamily,
		imageAccordionBtnFontStyle,
		imageAccordionBtnTransform,
		imageAccordionBtnDecoration,
		imageAccordionBtnLetterSpacing,
		imageAccordionBtnLetterSpacingUnits,
		imageAccordionBtnTypoType,
		imageAccordionBtnTypoOption,
		imageAccordionBtnBorderRadiusUnits,
		imageAccordionBtnBorderRadiusDesktop,
		imageAccordionBtnPaddingUnits,
		imageAccordionBtnPaddingDesktop,
		imageAccordionBtnFontSize,
		imageAccordionBtnFontSizeUnits,
		imageAccordionBtnFontWeight,
		imageAccordionPaddingUnits,
		imageAccordionPaddingDesktop,
		imageAccordionPaddingTablet,
		imageAccordionPaddingMobile,
		imageAccordionMarginUnits,
		imageAccordionMarginDesktop,
		imageAccordionMarginTablet,
		imageAccordionMarginMobile,
		imageAccordionGlobalZIndex,
		imageAccordionCustomCSS,
	} = attributes;

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
	}, [
		imageAccordionPreset,
		imageAccordionWidth,
		imageAccordionWidthUnits,
		imageAccordionHeight,
		imageAccordionHeightUnits,
		imageAccordionGap,
		imageAccordionGapUnits,
		imageAccordionItemBorderRadiusUnits,
		imageAccordionItemBorderRadiusDesktop,
		imageAccordionItemBorderRadiusTablet,
		imageAccordionItemBorderRadiusMobile,
		imageAccordionOverlayColor,
		imageAccordionOverlayHoverColor,
		imageAccordionShowDots,
		imageAccordionDotColor,
		imageAccordionDotSize,
		imageAccordionDotSizeUnits,
		imageAccordionShowNumber,
		imageAccordionNumberColor,
		imageAccordionNumberHoverColor,
		imageAccordionNumberFontSize,
		imageAccordionNumberFontSizeUnits,
		imageAccordionNumberFontWeight,
		imageAccordionIconColor,
		imageAccordionIconHoverColor,
		imageAccordionIconSize,
		imageAccordionIconSizeUnits,
		imageAccordionIconCircleBgColor,
		imageAccordionIconCircleSize,
		imageAccordionIconCircleSizeUnits,
		imageAccordionTitleColor,
		imageAccordionTitleHoverColor,
		imageAccordionTitleFontSize,
		imageAccordionTitleFontSizeUnits,
		imageAccordionTitleFontWeight,
		imageAccordionTitleLineHeight,
		imageAccordionTitleLineHeightUnits,
		imageAccordionTitleFontFamily,
		imageAccordionTitleFontStyle,
		imageAccordionTitleTransform,
		imageAccordionTitleDecoration,
		imageAccordionTitleLetterSpacing,
		imageAccordionTitleLetterSpacingUnits,
		imageAccordionTitleTypoType,
		imageAccordionTitleTypoOption,
		imageAccordionSubtitleColor,
		imageAccordionSubtitleHoverColor,
		imageAccordionSubtitleFontSize,
		imageAccordionSubtitleFontSizeUnits,
		imageAccordionSubtitleFontWeight,
		imageAccordionSubtitleLineHeight,
		imageAccordionSubtitleLineHeightUnits,
		imageAccordionSubtitleFontFamily,
		imageAccordionSubtitleFontStyle,
		imageAccordionSubtitleTransform,
		imageAccordionSubtitleDecoration,
		imageAccordionSubtitleLetterSpacing,
		imageAccordionSubtitleLetterSpacingUnits,
		imageAccordionSubtitleTypoType,
		imageAccordionSubtitleTypoOption,
		imageAccordionBtnTextColor,
		imageAccordionBtnHoverTextColor,
		imageAccordionBtnBgColor,
		imageAccordionBtnHoverBgColor,
		imageAccordionBtnBorderColor,
		imageAccordionBtnBorder,
		imageAccordionBtnLineHeight,
		imageAccordionBtnLineHeightUnits,
		imageAccordionBtnFontFamily,
		imageAccordionBtnFontStyle,
		imageAccordionBtnTransform,
		imageAccordionBtnDecoration,
		imageAccordionBtnLetterSpacing,
		imageAccordionBtnLetterSpacingUnits,
		imageAccordionBtnTypoType,
		imageAccordionBtnTypoOption,
		imageAccordionBtnBorderRadiusUnits,
		imageAccordionBtnBorderRadiusDesktop,
		imageAccordionBtnPaddingUnits,
		imageAccordionBtnPaddingDesktop,
		imageAccordionBtnFontSize,
		imageAccordionBtnFontSizeUnits,
		imageAccordionBtnFontWeight,
		imageAccordionPaddingUnits,
		imageAccordionPaddingDesktop,
		imageAccordionPaddingTablet,
		imageAccordionPaddingMobile,
		imageAccordionMarginUnits,
		imageAccordionMarginDesktop,
		imageAccordionMarginTablet,
		imageAccordionMarginMobile,
		imageAccordionGlobalZIndex,
		imageAccordionCustomCSS,
		blockID,
	]);

	const blockProps = useBlockProps({
		className: `fb-image-accordion-main-wrapper ${blockID} ${
			imageAccordionDesktopSwitcher ? "fb-desktop-responsive" : ""
		} ${imageAccordionTabletSwitcher ? "fb-tablet-responsive" : ""} ${
			imageAccordionMobileSwitcher ? "fb-mobile-responsive" : ""
		}`.trim(),
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
				onMouseEnter={handleItemHover}
				onClick={handleItemInteraction}
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
								<h3 className="fb-image-accordion-title">{item.title}</h3>
								{item.subTitle && (
									<p className="fb-image-accordion-desc">{item.subTitle}</p>
								)}
							</div>
						</>
					)}

					{imageAccordionPreset === "preset-2" && (
						<div className="fb-image-accordion-preset2-content">
							<div className="fb-image-accordion-bottom-content">
								{imageAccordionShowNumber && (
									<span className="fb-image-accordion-number">{numLabel}</span>
								)}
								<h3 className="fb-image-accordion-title">{item.title}</h3>
								{item.subTitle && (
									<p className="fb-sub-title">{item.subTitle}</p>
								)}
							</div>
						</div>
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
								onClick={(e) => e.preventDefault()}
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
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
					clientId={clientId}
				/>
			)}

			<div {...blockProps}>
				<div
					className={`fb-image-accordion-wrapper ${imageAccordionPreset} fb-trigger-${imageAccordionTrigger} ${imageAccordionWraperClass}`}
					id={imageAccordionWraperID}
					data-trigger={imageAccordionTrigger}
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
