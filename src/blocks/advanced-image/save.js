import { useBlockProps } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		blockID,
		imageUrl,
		imageAlt,
		linkSwitch,
		linkTargetUrl,
		linkUrl,
		imageCaption,
		displayCaption,
		imageStyle,
		imageSize,
		mediaSize,
		mediaHeight,
		mediaSizeUnits,
		mediaHeightUnits,
		captionAlignment,
		imageHover,
		autoHeightSwitch,
		imageFit,
		titleText,
		titleTag,
		displayTitle,
		titlePosition,
		HeadingColor,
		HeadingBackgroundColor,
		HeadingFontFamily,
		HeadingFontSize,
		HeadingFontSizeUnits,
		HeadingFontWeight,
		HeadingFontStyle,
		HeadingTextTransform,
		HeadingTextDecoration,
		HeadingLetterSpacing,
		HeadingLetterSpacingUnits,
		HeadingLineHeight,
		HeadingLineHeightUnits,
		padding,
		margin,
		HeadingBorder,
		borderWidth,
		borderRadiusWidth,
		HeadingBorderColor,

		advancedImageGlobalWraperID,
		advancedImageGlobalWraperClass,
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<>
			
			<div {...blockProps} id={blockID} className={advancedImageGlobalWraperClass}>
				<div className={`fb-parent-wrapper fb-advanced-image-wrapper ${blockID}`} id={advancedImageGlobalWraperID}>
					<div
						className={`fb-advanced-image ${imageStyle} ${imageSize} ${imageHover} ${imageFit} ${titlePosition}`}>
						<div className="fb-advanced-image-inner">
							{imageUrl ? (
								linkSwitch ? (
									<a
										href={linkUrl}
										target={linkTargetUrl ? '_blank' : undefined}
										rel={linkTargetUrl ? 'noopener noreferrer' : undefined}
									>
										<img src={imageUrl} alt={imageAlt}/>
									</a>
								) : (
									<img src={imageUrl} alt={imageAlt}/>
								)
							) : null}
						</div>
						{displayTitle && titleText && (
							<div className="fb-advanced-image-title">
								<div className="fb-advanced-image-title-inner">
								<RichText.Content
									tagName={titleTag}
									value={titleText}
									className="fb-advanced-title"
								/>
								</div>
							</div>
						)}
						{displayCaption && imageCaption && (
							<div className="fb-advanced-image-caption">
								<RichText.Content
									tagName="figcaption"
									value={imageCaption}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
