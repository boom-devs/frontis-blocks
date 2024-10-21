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
		deviceType,
		flipBoxFrontTitle,
		flipBoxFrontTitleHeadingTag,
		flipBoxBackTitle,
		flipBoxBackTitleHeadingTag,



		/** Start Flip Box Front Icon Attribute */
		flipBoxFrontIconSize,
		flipBoxFrontIconSizeUnits,
		flipBoxFrontIconFontColorSwitcher,
		flipBoxFrontIconFontColor,
		flipBoxFrontIconFontHoverColor,
		flipBoxFrontIconBgFontColorSwitcher,
		flipBoxFrontIconBgFontColor,
		flipBoxFrontIconBgFontHoverColor,

		flipBoxFrontIconMarginUnits,
		flipBoxFrontIconMarginDesktop,
		flipBoxFrontIconMarginTablet,
		flipBoxFrontIconMarginMobile,
		flipBoxFrontIconMarginLink,

		flipBoxFrontIconPaddingUnits,
		flipBoxFrontIconPaddingDesktop,
		flipBoxFrontIconPaddingTablet,
		flipBoxFrontIconPaddingMobile,
		flipBoxFrontIconPaddingLink,


		flipBoxFrontIconBorderTypeUnits,
		flipBoxFrontIconBorderTypeDesktop,
		flipBoxFrontIconBorderTypeTablet,
		flipBoxFrontIconBorderTypeMobile,
		flipBoxFrontIconBorderTypeLink,
		flipBoxFrontIconBorder,
		flipBoxFrontIconBorderColorSwitcher,
		flipBoxFrontIconBorderColor,
		flipBoxFrontIconBorderHoverColor,
		flipBoxFrontIconBorderRadiusUnits,
		flipBoxFrontIconBorderRadiusDesktop,
		flipBoxFrontIconBorderRadiusTablet,
		flipBoxFrontIconBorderRadiusMobile,
		flipBoxFrontIconBorderRadiusLink,
		/** End Flip Box Front Icon Attribute */

		/** Start Flip Box Back Icon Attribute */
		flipBoxBackIconSize,
		flipBoxBackIconSizeUnits,
		flipBoxBackIconFontColorSwitcher,
		flipBoxBackIconFontColor,
		flipBoxBackIconFontHoverColor,
		flipBoxBackIconBgFontColorSwitcher,
		flipBoxBackIconBgFontColor,
		flipBoxBackIconBgFontHoverColor,

		flipBoxBackIconMarginUnits,
		flipBoxBackIconMarginDesktop,
		flipBoxBackIconMarginTablet,
		flipBoxBackIconMarginMobile,
		flipBoxBackIconMarginLink,

		flipBoxBackIconPaddingUnits,
		flipBoxBackIconPaddingDesktop,
		flipBoxBackIconPaddingTablet,
		flipBoxBackIconPaddingMobile,
		flipBoxBackIconPaddingLink,


		flipBoxBackIconBorderTypeUnits,
		flipBoxBackIconBorderTypeDesktop,
		flipBoxBackIconBorderTypeTablet,
		flipBoxBackIconBorderTypeMobile,
		flipBoxBackIconBorderTypeLink,
		flipBoxBackIconBorder,
		flipBoxBackIconBorderColorSwitcher,
		flipBoxBackIconBorderColor,
		flipBoxBackIconBorderHoverColor,
		flipBoxBackIconBorderRadiusUnits,
		flipBoxBackIconBorderRadiusDesktop,
		flipBoxBackIconBorderRadiusTablet,
		flipBoxBackIconBorderRadiusMobile,
		flipBoxBackIconBorderRadiusLink,
		/** End Flip Box Back Icon Attribute */

		/** Start Flip Box Back Button Attribute */
		flipBoxBackButtonText,
		flipBoxBackButtonUrl,
		flipBoxBackButtonTargetUrl,

		flipBoxBackButtonFontColorSwitcher,
		flipBoxBackButtonFontColor,
		flipBoxBackButtonFontHoverColor,

		flipBoxBackButtonBgFontColorSwitcher,
		flipBoxBackButtonBgFontColor,
		flipBoxBackButtonBgFontHoverColor,

		flipBoxBackButtonMarginUnits,
		flipBoxBackButtonMarginDesktop,
		flipBoxBackButtonMarginTablet,
		flipBoxBackButtonMarginMobile,
		flipBoxBackButtonMarginLink,

		flipBoxBackButtonPaddingUnits,
		flipBoxBackButtonPaddingDesktop,
		flipBoxBackButtonPaddingTablet,
		flipBoxBackButtonPaddingMobile,
		flipBoxBackButtonPaddingLink,

		flipBoxBackButtonFontFamily,
		flipBoxBackButtonFontSize,
		flipBoxBackButtonFontSizeUnits,
		flipBoxBackButtonFontWeight,
		flipBoxBackButtonFontStyle,
		flipBoxBackButtonTextTransform,
		flipBoxBackButtonTextDecoration,
		flipBoxBackButtonLetterSpacing,
		flipBoxBackButtonLetterSpacingUnits,
		flipBoxBackButtonLineHeight,
		flipBoxBackButtonLineHeightUnits,

		flipBoxBackButtonBorderTypeUnits,
		flipBoxBackButtonBorderTypeDesktop,
		flipBoxBackButtonBorderTypeTablet,
		flipBoxBackButtonBorderTypeMobile,
		flipBoxBackButtonBorderTypeLink,
		flipBoxBackButtonBorder,
		flipBoxBackButtonBorderColorSwitcher,
		flipBoxBackButtonBorderColor,
		flipBoxBackButtonBorderHoverColor,
		flipBoxBackButtonBorderRadiusUnits,
		flipBoxBackButtonBorderRadiusDesktop,
		flipBoxBackButtonBorderRadiusTablet,
		flipBoxBackButtonBorderRadiusMobile,
		flipBoxBackButtonBorderRadiusLink,
		/** End Flip Box Back Button Attribute */


		/** Start Flip Box Item Front Attribute */
		flipBoxItemFrontBgFontColorSwitcher,
		flipBoxItemFrontBgFontColor,
		flipBoxItemFrontBgFontHoverColor,

		flipBoxItemFrontSize,
		flipBoxItemFrontSizeUnits,
		flipBoxItemFrontBorderTypeUnits,
		flipBoxItemFrontBorderTypeDesktop,
		flipBoxItemFrontBorderTypeTablet,
		flipBoxItemFrontBorderTypeMobile,
		flipBoxItemFrontBorderTypeLink,
		flipBoxItemFrontBorder,
		flipBoxItemFrontBorderColorSwitcher,
		flipBoxItemFrontBorderColor,
		flipBoxItemFrontBorderHoverColor,
		flipBoxItemFrontBorderRadiusUnits,
		flipBoxItemFrontBorderRadiusDesktop,
		flipBoxItemFrontBorderRadiusTablet,
		flipBoxItemFrontBorderRadiusMobile,
		flipBoxItemFrontBorderRadiusLink,
		/** End Flip Box Item Front Attribute */


		/** Start Flip Box Item Back Attribute */
		flipBoxItemBackBgFontColorSwitcher,
		flipBoxItemBackBgFontColor,
		flipBoxItemBackBgFontHoverColor,

		flipBoxItemBackSize,
		flipBoxItemBackSizeUnits,
		flipBoxItemBackBorderTypeUnits,
		flipBoxItemBackBorderTypeDesktop,
		flipBoxItemBackBorderTypeTablet,
		flipBoxItemBackBorderTypeMobile,
		flipBoxItemBackBorderTypeLink,
		flipBoxItemBackBorder,
		flipBoxItemBackBorderColorSwitcher,
		flipBoxItemBackBorderColor,
		flipBoxItemBackBorderHoverColor,
		flipBoxItemBackBorderRadiusUnits,
		flipBoxItemBackBorderRadiusDesktop,
		flipBoxItemBackBorderRadiusTablet,
		flipBoxItemBackBorderRadiusMobile,
		flipBoxItemBackBorderRadiusLink,
		/** End Flip Box Item Back Attribute */

		/** Start Flip Box Front Title Attribute */
		flipBoxFrontTitleFontColorSwitcher,
		flipBoxFrontTitleFontColor,
		flipBoxFrontTitleFontHoverColor,

		flipBoxFrontTitleMarginUnits,
		flipBoxFrontTitleMarginDesktop,
		flipBoxFrontTitleMarginTablet,
		flipBoxFrontTitleMarginMobile,
		flipBoxFrontTitleMarginLink,

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
		/** End Flip Box Front Title Attribute */

		/** Start Flip Box Back Title Attribute */
		flipBoxBackTitleFontColorSwitcher,
		flipBoxBackTitleFontColor,
		flipBoxBackTitleFontHoverColor,

		flipBoxBackTitleMarginUnits,
		flipBoxBackTitleMarginDesktop,
		flipBoxBackTitleMarginTablet,
		flipBoxBackTitleMarginMobile,
		flipBoxBackTitleMarginLink,

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
		/** End Flip Box Back Title Attribute */


		/** Start Flip Box Front Content Attribute */
		flipBoxFrontContent,
		flipBoxFrontContentFontColorSwitcher,
		flipBoxFrontContentFontColor,
		flipBoxFrontContentFontHoverColor,

		flipBoxFrontContentMarginUnits,
		flipBoxFrontContentMarginDesktop,
		flipBoxFrontContentMarginTablet,
		flipBoxFrontContentMarginMobile,
		flipBoxFrontContentMarginLink,

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
		/** End Flip Box Front Content Attribute */


		/** Start Flip Box Back Content Attribute */
		flipBoxBackContent,
		flipBoxBackContentFontColorSwitcher,
		flipBoxBackContentFontColor,
		flipBoxBackContentFontHoverColor,

		flipBoxBackContentMarginUnits,
		flipBoxBackContentMarginDesktop,
		flipBoxBackContentMarginTablet,
		flipBoxBackContentMarginMobile,
		flipBoxBackContentMarginLink,

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
		/** End Flip Box Back Content Attribute */

		flipBoxBackMediaSwitcher,
		flipBoxBackIconMediaUrl,
		flipBoxBackIcon,
		flipBoxBackIconColor,

	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps} id={blockID}>
			<div className={`fb-flip-box-wrapper ${blockID}`}>
				<div className={`fb-flip-box-item`}>
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
