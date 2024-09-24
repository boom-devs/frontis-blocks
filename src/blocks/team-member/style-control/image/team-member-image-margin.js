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

		FeatureMarginLink,
		spacingUnits,
		TestimonialDesktopPadding,
		TestimonialTabPadding,
		TestimonialMobilePadding,

	} = attributes;


	/** Start Margin */
	const [previousMargin, setPreviousMargin] = useState(teamMemberImageDesktopMargin);
	/** Function to update all margin values */
	const updateAllMargin = (value, device) => {
		switch(device) {
			case 'Desktop':
				setAttributes({
					teamMemberImageDesktopMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Tablet':
				setAttributes({
					teamMemberImageTabMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'Mobile':
				setAttributes({
					teamMemberImageMobileMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};


	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureMarginLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						TestimonialDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						TestimonialTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						TestimonialMobilePadding: {
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
					setAttributes( {TestimonialDesktopPadding: {...TestimonialDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {TestimonialTabPadding: {...TestimonialTabPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {TestimonialMobilePadding: {...TestimonialMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {FeatureMarginLink: !FeatureMarginLink} );
	}


	/** Function to handle input change */
	const handleMarginInputChange = (e, direction) => {
		const value = e.target.value;
		switch(DeviceType) {
			case 'Desktop':
				setAttributes({ teamMemberImageDesktopMargin: { ...teamMemberImageDesktopMargin, [direction]: value } });
				break;
			case 'Tablet':
				setAttributes({ teamMemberImageTabMargin: { ...teamMemberImageTabMargin, [direction]: value } });
				break;
			case 'Mobile':
				setAttributes({ teamMemberImageMobileMargin: { ...teamMemberImageMobileMargin, [direction]: value } });
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (teamMemberImageMarginLink) {
			updateAllMargin(value, DeviceType);
		}
	};

	/** Function to handle marginLink toggle */
	const handleMarginLinkToggle = () => {
		if (!teamMemberImageMarginLink) {
			setAttributes({ teamMemberImageDesktopMargin: previousMargin });
		}
		/** setmarginLink(!marginLink) */
		setAttributes({teamMemberImageMarginLink: !teamMemberImageMarginLink})
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setPreviousMargin(teamMemberImageDesktopMargin);
	}, [teamMemberImageDesktopMargin]);

	/** Function to handle device click for margin */
	const handleMarginDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default margin for desktop (using desktop_margin) */
	const teamMemberImageMargin = `${teamMemberImageDesktopMargin.top}${teamMemberImageMarginUnits} ${teamMemberImageDesktopMargin.right}${teamMemberImageMarginUnits} ${teamMemberImageDesktopMargin.bottom}${teamMemberImageMarginUnits} ${teamMemberImageDesktopMargin.left}${teamMemberImageMarginUnits}`;
	/** End Margin */


	return (
		<>
			{/*DeviceType, spacingUnits, spacingDesktop, spacingTablet, spacingMobile, handleSpacingUnitHandler, spacingCombineBtn, spacingCombineBtnHandler, setAttributes*/}

			{/*DeviceType, spacingUnits, spacingDesktop, spacingTablet, spacingMobile, handleSpacingUnitHandler, spacingCombineBtn, spacingCombineBtnHandler, setAttributes*/}
			<FB_Spacing label={ 'Margin' } DeviceType={DeviceType} spacingUnits={spacingUnits}
						spacingDesktop={TestimonialDesktopPadding}
						spacingTablet={TestimonialTabPadding} spacingMobile={TestimonialMobilePadding}
						handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
						spacingCombineBtn={FeatureMarginLink}
						spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}/>

		</>
	);
};
