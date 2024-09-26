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
	PanelBody, SelectControl, Dropdown, Dashicon, ColorPicker, ColorPalette, RangeControl,
} from '@wordpress/components';

import TypographyControl from "@Components/typography";

export default function TeamMemberDesignationTypographyControl ({ attributes, setAttributes}) {

	const {
		teamMemberDesignationColor,
		teamMemberDesignationLoadGoogleFonts,
		teamMemberDesignationFontFamily,
		teamMemberDesignationFontWeight,
		teamMemberDesignationFontStyle,
		teamMemberDesignationFontSizeType,
		teamMemberDesignationFontSizeTypeMobile,
		teamMemberDesignationFontSizeTypeTablet,
		teamMemberDesignationFontSize,
		teamMemberDesignationFontSizeMobile,
		teamMemberDesignationFontSizeTablet,
		teamMemberDesignationLineHeightType,
		teamMemberDesignationLineHeight,
		teamMemberDesignationLineHeightMobile,
		teamMemberDesignationLineHeightTablet,
		teamMemberDesignationLetterSpacing,
		teamMemberDesignationLetterSpacingTablet,
		teamMemberDesignationLetterSpacingMobile,
		teamMemberDesignationLetterSpacingType,
		teamMemberDesignationTextTransform,
		teamMemberDesignationTextDecoration,

	} = attributes;


	/* set default values for the style attributes */
	return (
	<>


		<TypographyControl
			label={ __( 'Typography', 'text-domain' ) }
			attributes={ attributes }
			setAttributes={ setAttributes }
			loadGoogleFonts={ {
				value: teamMemberDesignationLoadGoogleFonts,
				label: 'teamMemberDesignationLoadGoogleFonts',
			} }
			fontFamily={ {
				value: teamMemberDesignationFontFamily,
				label: 'teamMemberDesignationFontFamily',
			} }
			fontWeight={ {
				value: teamMemberDesignationFontWeight,
				label: 'teamMemberDesignationFontWeight',
			} }
			fontStyle={ {
				value: teamMemberDesignationFontStyle,
				label: 'teamMemberDesignationFontStyle',
			} }
			transform={ {
				value: teamMemberDesignationTextTransform,
				label: 'teamMemberDesignationTransform',
			} }
			decoration={ {
				value: teamMemberDesignationTextDecoration,
				label: 'teamMemberDesignationTextDecoration',
			} }
			fontSizeType={ {
				value: teamMemberDesignationFontSizeType,
				label: 'teamMemberDesignationFontSizeType',
			} }
			fontSizeTypeMobile={ {
				value: teamMemberDesignationFontSizeTypeMobile,
				label: 'teamMemberDesignationFontSizeTypeMobile',
			} }
			fontSizeTypeTablet={ {
				value: teamMemberDesignationFontSizeTypeTablet,
				label: 'teamMemberDesignationFontSizeTypeTablet',
			} }
			fontSize={ {
				value: teamMemberDesignationFontSize,
				label: 'teamMemberDesignationFontSize',
			} }
			fontSizeMobile={ {
				value: teamMemberDesignationFontSizeMobile,
				label: 'teamMemberDesignationFontSizeMobile',
			} }
			fontSizeTablet={ {
				value: teamMemberDesignationFontSizeTablet,
				label: 'teamMemberDesignationFontSizeTablet',
			} }
			lineHeightType={ {
				value: teamMemberDesignationLineHeightType,
				label: 'teamMemberDesignationLineHeightType',
			} }
			lineHeight={ {
				value: teamMemberDesignationLineHeight,
				label: 'teamMemberDesignationLineHeight',
			} }
			lineHeightMobile={ {
				value: teamMemberDesignationLineHeightMobile,
				label: 'teamMemberDesignationLineHeightMobile',
			} }
			lineHeightTablet={ {
				value: teamMemberDesignationLineHeightTablet,
				label: 'teamMemberDesignationLineHeightTablet',
			} }
			letterSpacing={ {
				value: teamMemberDesignationLetterSpacing,
				label: 'teamMemberDesignationLetterSpacing',
			} }
			letterSpacingTablet={ {
				value: teamMemberDesignationLetterSpacingTablet,
				label: 'teamMemberDesignationLetterSpacingTablet',
			} }
			letterSpacingMobile={ {
				value: teamMemberDesignationLetterSpacingMobile,
				label: 'teamMemberDesignationLetterSpacingMobile',
			} }
			letterSpacingType={ {
				value: teamMemberDesignationLetterSpacingType,
				label: 'teamMemberDesignationLetterSpacingType',
			} }
		/>

		<BaseControl
			label={__("Color", "frontis-blocks")}
			className="fb-setting-color-setting-wrapper"
		>
			<Dropdown
				className="fb-setting-color-setting-icon-dropdown"
				contentClassName="fb-setting-color-setting-icon-dropdown-content"
				popoverProps={{ placement: 'bottom-start' }}
				renderToggle={({ isOpen, onToggle }) => (
					<Button
						variant="primary"
						onClick={onToggle}
						aria-expanded={isOpen}
						aria-label={__("Toggle Typography Settings", "frontis-blocks")}
						className="fb-setting-color-setting-icon-btn"
					>
						<Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
					</Button>
				)}
				renderContent={() => (
					<div className="fb-setting-color-setting-icon-popup">
						<BaseControl className="fb-setting-color-setting-icon-popup-inner">
							<div className="fb-setting-normal-color">
								<ColorPicker
									color={teamMemberDesignationColor}
									onChange={(value) => setAttributes({ teamMemberDesignationColor: value })}
									enableAlpha={true}
								/>
								<div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
								<ColorPalette
									colors={[
										{ color: '#F72585' },
										{ color: '#7209B7' },
										{ color: '#3A0CA3' },
										{ color: '#4361EE' },
										{ color: '#4CC9F0' },
									]}
									disableCustomColors={true}
									value={teamMemberDesignationColor}
									onChange={(value) => setAttributes({ teamMemberDesignationColor: value })}
								/>
							</div>
						</BaseControl>
					</div>
				)}
			/>
		</BaseControl>

	</>
	);
};
