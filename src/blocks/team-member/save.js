import {RichText, useBlockProps} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {useRef} from "@wordpress/element";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		teamMemberImage,
		teamMemberImageMediaUrl,
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


		teamMemberName,
		teamMemberNameHeadingTag,
		teamMemberNameFontFamily,
		teamMemberNameFontSize,
		teamMemberNameFontSizeUnits,
		teamMemberNameFontWeight,
		teamMemberNameFontStyle,
		teamMemberNameTextTransform,
		teamMemberNameTextDecoration,
		teamMemberNameLetterSpacing,
		teamMemberNameLetterSpacingUnits,
		teamMemberNameLineHeight,
		teamMemberNameLineHeightUnits,
		teamMemberNameColor,

		teamMemberDesignation,
		teamMemberDesignationHeadingTag,
		teamMemberDesignationFontFamily,
		teamMemberDesignationFontSize,
		teamMemberDesignationFontSizeUnits,
		teamMemberDesignationFontWeight,
		teamMemberDesignationFontStyle,
		teamMemberDesignationTextTransform,
		teamMemberDesignationTextDecoration,
		teamMemberDesignationLetterSpacing,
		teamMemberDesignationLetterSpacingUnits,
		teamMemberDesignationLineHeight,
		teamMemberDesignationLineHeightUnits,
		teamMemberDesignationColor,

		teamMemberContent,
		teamMemberContentHeadingTag,
		teamMemberContentFontFamily,
		teamMemberContentFontSize,
		teamMemberContentFontSizeUnits,
		teamMemberContentFontWeight,
		teamMemberContentFontStyle,
		teamMemberContentTextTransform,
		teamMemberContentTextDecoration,
		teamMemberContentLetterSpacing,
		teamMemberContentLetterSpacingUnits,
		teamMemberContentLineHeight,
		teamMemberContentLineHeightUnits,
		teamMemberContentColor

	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps} id={blockID}>
			<div className={`fb-team-member-wrapper ${blockID}`}>
				<div className={`fb-team-member-item`}>
					<div className={`fb-team-member-image-wrapper`}>
						{attributes.teamMemberImageMediaUrl && (
							<img src={attributes.teamMemberImageMediaUrl}/>
						)}
					</div>
					<div className={`fb-team-member-content`}>
						{teamMemberName}
						<div className={`fb-team-member-designation`}>{teamMemberDesignation}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
