import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {useRef} from "@wordpress/element";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		flipBoxFrontTitle,
		icon,
		mediaSwitcher,
		flipBoxFrontIconMediaUrl,

		DeviceType,

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

	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps} id={blockID}>
			<div className={`fb-flip-box-wrapper`}>
				<div className="fb-flip-box-item">
					<div className="fb-flip-box-front">
						<div className="fb-flip-box-content">
							<div className={`fb-flip-box-icon-wrapper`}>
								{mediaSwitcher === 'image' && attributes.flipBoxFrontIconMediaUrl && (
									<img src={attributes.flipBoxFrontIconMediaUrl}/>
								)}
								{mediaSwitcher === 'icon' && (
									<div className="fb-flip-box-icon">{renderSVG(icon)}</div>
								)}
							</div>
							<h3 className="fb-flip-box-title">{flipBoxFrontTitle}</h3>
						</div>
					</div>
					<div className="fb-flip-box-back">
						<div className="fb-flip-box-content">
							<div className={`fb-flip-box-icon-wrapper`}>
								{mediaSwitcher === 'image' && attributes.flipBoxFrontIconMediaUrl && (
									<img src={attributes.flipBoxFrontIconMediaUrl}/>
								)}
								{mediaSwitcher === 'icon' && (
									<div className="fb-flip-box-icon">{renderSVG(icon)}</div>
								)}
							</div>
							<h3 className="fb-flip-box-title">{flipBoxFrontTitle}</h3>
							<p>{flipBoxFrontTitle}</p>
							<a href={`#`} className="fb-flip-box-button">Read More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
