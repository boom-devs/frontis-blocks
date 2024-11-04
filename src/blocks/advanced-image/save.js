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
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<>
			<style>
				{`
				.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner {
                    width: ${mediaSize.Desktop}${mediaSizeUnits.Desktop};
                    ${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Desktop}${mediaHeightUnits.Desktop}`};
                }
                @media all and (max-width: 1024px){
                .fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner {
                    width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
                    ${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Tablet}${mediaHeightUnits.Tablet}`};
                }
                }
                @media all and (max-width: 767px){
                .fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner {
                    width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
                    ${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Mobile}${mediaHeightUnits.Mobile}`};
                }
                }
                .fb-advanced-image-wrapper.${blockID} .fb-advanced-image-caption figcaption {
                    text-align: ${captionAlignment};
                }
                .fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-title .fb-advanced-title{
                    ${HeadingColor !== undefined ? `color: ${HeadingColor};` : ''}
                    ${HeadingBackgroundColor !== undefined ? `background-color: ${HeadingBackgroundColor};` : ''}
                    font-family: ${HeadingFontFamily !== 'default' ? HeadingFontFamily : HeadingFontFamily};
                    font-size: ${HeadingFontSize !== undefined ? `${HeadingFontSize}${HeadingFontSizeUnits}` : ''};
                    font-weight: ${HeadingFontWeight};
                    font-style: ${HeadingFontStyle};
                    text-transform: ${HeadingTextTransform};
                    text-decoration: ${HeadingTextDecoration};
                    ${HeadingLetterSpacing !== undefined ? `letter-spacing: ${HeadingLetterSpacing}${HeadingLetterSpacingUnits};` : ''}
                    ${HeadingLineHeight !== undefined ? `line-height: ${HeadingLineHeight}${HeadingLineHeightUnits};` : ''}
                    transition: all .3s ease-in-out;
                    padding: ${padding};
                    margin: ${margin};
                    border: ${HeadingBorder};
                    border-width: ${borderWidth};
                    border-radius: ${borderRadiusWidth};
                    ${HeadingBorderColor !== undefined ? `border-color: ${HeadingBorderColor};` : ''}
                }
                @media all and (max-width: 1024px){
                .fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-title .fb-advanced-title{
                    width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
                    ${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Tablet}${mediaHeightUnits.Tablet}`};
                }
                }
                @media all and (max-width: 767px){
                .fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-title .fb-advanced-title{
                    width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
                    ${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Mobile}${mediaHeightUnits.Mobile}`};
                }
                }
            `}
			</style>
			<div {...blockProps} id={blockID}>
				<div className={`fb-advanced-image-wrapper ${blockID}`}>
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
