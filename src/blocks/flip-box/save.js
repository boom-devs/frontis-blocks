import {RichText, useBlockProps} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {useRef} from "@wordpress/element";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		flipBoxTypeSwitcher,
		flipBoxFrontIcon,
		mediaSwitcher,
		flipBoxFrontIconMediaUrl,

		DeviceType,

		flipBoxBackMediaSwitcher,
		flipBoxBackIconMediaUrl,
		flipBoxBackIcon,
		flipBoxBackIconColor,

		BoxBorder,
		BoxBorderColor,
		BoxBorderUnits,
		BoxDesktopBorderWidth,
		BoxTabBorderWidth,
		BoxMobileBorderWidth,
		BoxBorderLink,
		BoxBorderRadiusUnits,
		BoxDesktopBorderRadiusWidth,
		BoxTabBorderRadiusWidth,
		BoxMobileBorderRadiusWidth,
		BoxBorderRadiusLink,

		flipBoxFrontTitle,
		flipBoxFrontTitleFontFamily,
		flipBoxFrontTitleFontSize,
		flipBoxFrontTitleFontSizeUnits,
		flipBoxFrontTitleFontWeight,
		flipBoxFrontTitleFontStyle,
		flipBoxFrontTitleTextTransform,
		flipBoxFrontTitleTextDecoration,
		flipBoxFrontTitleLetterSpacing,
		flipBoxFrontTitleLetterSpacingUnits,
		flipBoxFrontTitleLineHeight,
		flipBoxFrontTitleLineHeightUnits,
		flipBoxFrontTitleColor,

		flipBoxBackTitle,
		flipBoxBackTitleFontFamily,
		flipBoxBackTitleFontSize,
		flipBoxBackTitleFontSizeUnits,
		flipBoxBackTitleFontWeight,
		flipBoxBackTitleFontStyle,
		flipBoxBackTitleTextTransform,
		flipBoxBackTitleTextDecoration,
		flipBoxBackTitleLetterSpacing,
		flipBoxBackTitleLetterSpacingUnits,
		flipBoxBackTitleLineHeight,
		flipBoxBackTitleLineHeightUnits,
		flipBoxBackTitleColor,

		flipBoxFrontContent,
		flipBoxFrontContentFontFamily,
		flipBoxFrontContentFontSize,
		flipBoxFrontContentFontSizeUnits,
		flipBoxFrontContentFontWeight,
		flipBoxFrontContentFontStyle,
		flipBoxFrontContentTextTransform,
		flipBoxFrontContentTextDecoration,
		flipBoxFrontContentLetterSpacing,
		flipBoxFrontContentLetterSpacingUnits,
		flipBoxFrontContentLineHeight,
		flipBoxFrontContentLineHeightUnits,
		flipBoxFrontContentColor,

		flipBoxBackContent,
		flipBoxBackContentFontFamily,
		flipBoxBackContentFontSize,
		flipBoxBackContentFontSizeUnits,
		flipBoxBackContentFontWeight,
		flipBoxBackContentFontStyle,
		flipBoxBackContentTextTransform,
		flipBoxBackContentTextDecoration,
		flipBoxBackContentLetterSpacing,
		flipBoxBackContentLetterSpacingUnits,
		flipBoxBackContentLineHeight,
		flipBoxBackContentLineHeightUnits,
		flipBoxBackContentColor

	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps} id={blockID}>
			<div className={`fb-flip-box-wrapper ${blockID}`}>
				<div className={`fb-flip-box-item ${flipBoxTypeSwitcher === 'back' ? 'active' : ''}`}>
					<div className="fb-flip-box-front">
						<div className="fb-flip-box-content">
							<div className="fb-flip-box-content-inner">
								<div className={`fb-flip-box-icon-wrapper`}>
									{mediaSwitcher === 'image' && attributes.flipBoxFrontIconMediaUrl && (
										<img src={attributes.flipBoxFrontIconMediaUrl}/>
									)}
									{mediaSwitcher === 'icon' && (
										<div className="fb-flip-box-icon">{renderSVG(flipBoxFrontIcon)}</div>
									)}
								</div>
								<RichText.Content
									tagName={flipBoxFrontTitleHeadingTag}
									value={flipBoxFrontTitle}
									className="fb-flip-box-title"
								/>
								<RichText.Content
									tagName={'p'}
									value={flipBoxFrontContent}
									className="fb-flip-box-front-content"
								/>
							</div>
						</div>
					</div>
					<div className="fb-flip-box-back">
						<div className="fb-flip-box-content">
							<div className="fb-flip-box-content-inner">
								<div className={`fb-flip-box-icon-wrapper`}>
									{flipBoxBackMediaSwitcher === 'image' && attributes.flipBoxBackIconMediaUrl && (
										<img src={attributes.flipBoxBackIconMediaUrl}/>
									)}
									{flipBoxBackMediaSwitcher === 'icon' && (
										<div className="fb-flip-box-icon">{renderSVG(flipBoxBackIcon)}</div>
									)}
								</div>
								<RichText.Content
									tagName={flipBoxBackTitleHeadingTag}
									value={flipBoxBackTitle}
									className="fb-flip-box-title"
								/>
								<RichText.Content
									tagName={'p'}
									value={flipBoxBackContent}
									className="fb-flip-box-back-content"
								/>
								<a
									className="fb-flip-box-back-button"
									href={flipBoxBackButtonUrl}
									target={flipBoxBackButtonTargetUrl ? '_blank' : undefined}
									rel={flipBoxBackButtonTargetUrl ? 'noopener noreferrer' : undefined}
								>
									<RichText.Content
										tagName="span"
										value={flipBoxBackButtonText}
										className="fb-flip-box-back-button-text"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
