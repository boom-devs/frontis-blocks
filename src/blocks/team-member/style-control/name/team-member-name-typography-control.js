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
import {useEffect, useState} from "@wordpress/element";
import {BORDER_STYLES, UNIT_TYPES, FONT_FAMILYS} from "../../constants/constants";
import ResponsiveControl from "../../../../components/responsivecontrol";
import TypographyControl from "@Components/typography";

export default function TeamMemberNameTypographyControl ({ attributes, setAttributes}) {

	const {
		teamMemberNameColor,
		teamMemberNameLoadGoogleFonts,
		teamMemberNameFontFamily,
		teamMemberNameFontWeight,
		teamMemberNameFontStyle,
		teamMemberNameFontSizeType,
		teamMemberNameFontSizeTypeMobile,
		teamMemberNameFontSizeTypeTablet,
		teamMemberNameFontSize,
		teamMemberNameFontSizeMobile,
		teamMemberNameFontSizeTablet,
		teamMemberNameLineHeightType,
		teamMemberNameLineHeight,
		teamMemberNameLineHeightMobile,
		teamMemberNameLineHeightTablet,
		teamMemberNameLetterSpacing,
		teamMemberNameLetterSpacingTablet,
		teamMemberNameLetterSpacingMobile,
		teamMemberNameLetterSpacingType,
		teamMemberNameTextTransform,
		teamMemberNameTextDecoration,

	} = attributes;


	/* set default values for the style attributes */
	return (
	<>


		<TypographyControl
			label={ __( 'Typography', 'text-domain' ) }
			attributes={ attributes }
			setAttributes={ setAttributes }
			loadGoogleFonts={ {
				value: teamMemberNameLoadGoogleFonts,
				label: 'teamMemberNameLoadGoogleFonts',
			} }
			fontFamily={ {
				value: teamMemberNameFontFamily,
				label: 'teamMemberNameFontFamily',
			} }
			fontWeight={ {
				value: teamMemberNameFontWeight,
				label: 'teamMemberNameFontWeight',
			} }
			fontStyle={ {
				value: teamMemberNameFontStyle,
				label: 'teamMemberNameFontStyle',
			} }
			transform={ {
				value: teamMemberNameTextTransform,
				label: 'teamMemberNameTransform',
			} }
			decoration={ {
				value: teamMemberNameTextDecoration,
				label: 'teamMemberNameTextDecoration',
			} }
			fontSizeType={ {
				value: teamMemberNameFontSizeType,
				label: 'teamMemberNameFontSizeType',
			} }
			fontSizeTypeMobile={ {
				value: teamMemberNameFontSizeTypeMobile,
				label: 'teamMemberNameFontSizeTypeMobile',
			} }
			fontSizeTypeTablet={ {
				value: teamMemberNameFontSizeTypeTablet,
				label: 'teamMemberNameFontSizeTypeTablet',
			} }
			fontSize={ {
				value: teamMemberNameFontSize,
				label: 'teamMemberNameFontSize',
			} }
			fontSizeMobile={ {
				value: teamMemberNameFontSizeMobile,
				label: 'teamMemberNameFontSizeMobile',
			} }
			fontSizeTablet={ {
				value: teamMemberNameFontSizeTablet,
				label: 'teamMemberNameFontSizeTablet',
			} }
			lineHeightType={ {
				value: teamMemberNameLineHeightType,
				label: 'teamMemberNameLineHeightType',
			} }
			lineHeight={ {
				value: teamMemberNameLineHeight,
				label: 'teamMemberNameLineHeight',
			} }
			lineHeightMobile={ {
				value: teamMemberNameLineHeightMobile,
				label: 'teamMemberNameLineHeightMobile',
			} }
			lineHeightTablet={ {
				value: teamMemberNameLineHeightTablet,
				label: 'teamMemberNameLineHeightTablet',
			} }
			letterSpacing={ {
				value: teamMemberNameLetterSpacing,
				label: 'teamMemberNameLetterSpacing',
			} }
			letterSpacingTablet={ {
				value: teamMemberNameLetterSpacingTablet,
				label: 'teamMemberNameLetterSpacingTablet',
			} }
			letterSpacingMobile={ {
				value: teamMemberNameLetterSpacingMobile,
				label: 'teamMemberNameLetterSpacingMobile',
			} }
			letterSpacingType={ {
				value: teamMemberNameLetterSpacingType,
				label: 'teamMemberNameLetterSpacingType',
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
									color={teamMemberNameColor}
									onChange={(value) => setAttributes({ teamMemberNameColor: value })}
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
									value={teamMemberNameColor}
									onChange={(value) => setAttributes({ teamMemberNameColor: value })}
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
