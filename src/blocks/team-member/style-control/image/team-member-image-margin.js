import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	Button,
	ButtonGroup,
	HStack,
	TextControl,
	TextareaControl,
	ResponsiveWrapper,
	MediaUpload,
	MediaUploadCheck,
	PanelBody, SelectControl, Dropdown, Dashicon, ColorPicker, ColorPalette,
} from '@wordpress/components';
import {useEffect, useState} from "@wordpress/element";
import {BORDER_STYLES, UNIT_TYPES} from "../../constants/constants";
import FB_Spacing from '@Components/spacing';

export default function TeamMemberImageMarginControl ({ attributes, setAttributes}) {

	const {
		blockID,
		teamMemberImageMediaUrl,
		teamMemberImagePaddingUnits,
		desktopteamMemberImagePadding,
		teamMemberImageDesktopPadding,
		teamMemberImageTabPadding,
		teamMemberImageMobilePadding,
		teamMemberImagePaddingLink,

		teamMemberImageMarginUnits,
		desktopteamMemberImageMargin,
		teamMemberImageDesktopMargin,
		teamMemberImageTabMargin,
		teamMemberImageMobileMargin,
		teamMemberImageMarginLink,

		teamMemberImageBorder,
		teamMemberImageBorderColor,
		teamMemberImageBorderUnits,
		teamMemberImageDesktopBorderWidth,
		teamMemberImageTabBorderWidth,
		teamMemberImageMobileBorderWidth,
		teamMemberImageActiveBorderDevice,
		teamMemberImageBorderLink,
		teamMemberImageBorderRadiusUnits,
		teamMemberImageDesktopBorderRadiusWidth,
		teamMemberImageTabBorderRadiusWidth,
		teamMemberImageMobileBorderRadiusWidth,
		teamMemberImageActiveBorderRadiusDevice,
		teamMemberImageBorderRadiusLink,
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
		teamMemberNameteamMemberImageTag,
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
		teamMemberDesignationteamMemberImageTag,
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
		teamMemberContentteamMemberImageTag,
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
		teamMemberContentColor,


	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberImageMarginLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberImageDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberImageTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberImageMobileMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {teamMemberImageDesktopMargin: {...teamMemberImageDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberImageTabMargin: {...teamMemberImageTabMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberImageMobileMargin: {...teamMemberImageMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberImageMarginLink: !teamMemberImageMarginLink} );
	}

	return (
		<>
			<FB_Spacing
				label={ 'Margin' } DeviceType={DeviceType} spacingUnits={teamMemberImageMarginUnits}
				spacingDesktop={teamMemberImageDesktopMargin}
				spacingTablet={teamMemberImageTabMargin} spacingMobile={teamMemberImageMobileMargin}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={teamMemberImageMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>

		</>
	);
};
