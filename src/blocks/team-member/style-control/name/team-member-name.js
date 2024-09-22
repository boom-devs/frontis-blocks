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

export default function TeamMemberNameControl ({ attributes, setAttributes}) {

	const {
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

	} = attributes;


	/* set default values for the style attributes */
	useEffect(() => {
		if (teamMemberNameFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${teamMemberNameFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [teamMemberNameFontFamily]);

	return (
	<>
		<BaseControl
			label={__("Typography", "frontis-blocks")}
			className="fb-setting-typography"
		>
			<Dropdown
				className="fb-setting-typography-icon-dropdown"
				contentClassName="fb-setting-typography-dropdown-content"
				popoverProps={{ placement: 'bottom-start' }}
				renderToggle={({ isOpen, onToggle }) => (
					<Button
						variant="primary"
						onClick={onToggle}
						aria-expanded={isOpen}
						aria-label={__("Toggle Typography Settings", "frontis-blocks")}
						className="fb-setting-typography-icon-btn"
					>
						<Dashicon icon="edit" className="fb-setting-typography-icon" />
					</Button>
				)}
				renderContent={() => (
					<div className="fb-setting-typography-popup">
						<BaseControl className="fb-setting-typography-popup-inner" >
							<div className="fb-setting-fontfamily-wrapper">
								<SelectControl
									label={__("Font Family", "frontis-blocks")}
									options={FONT_FAMILYS}
									value={teamMemberNameFontFamily}
									onChange={(value) => setAttributes({ teamMemberNameFontFamily: value })}
								/>
							</div>
							<div className="fb-setting-fontsize-wrapper">
								<div className="fb-setting-fontsize-header">
									<div className="fb-setting-fontsize-label">
										<span>{__("Font Size", "frontis-blocks")}</span>
									</div>
									<div className="fb-setting-fontsize-units">
										<ButtonGroup className="fb-setting-fontsize-units-wrap">
											{UNIT_TYPES.map((item, key) => (
												<Button
													key={key}
													onClick={() => setAttributes({ teamMemberNameFontSizeUnits: item.value })}
													className={`fb-setting-fontsize-units-switcher ${ teamMemberNameFontSizeUnits === item.value ? 'active' : ''}`}
												>
													{item.label}
												</Button>
											))}
										</ButtonGroup>
									</div>
								</div>
								<div className="fb-setting-fontsize-rangecontrol">
									<RangeControl
										value={teamMemberNameFontSize}
										onChange={(value) => setAttributes({ teamMemberNameFontSize: value })}
										min={1}
										max={200}
										allowReset
										resetFallbackValue={undefined}
									/>
								</div>
							</div>
							<div className="fb-setting-fontweight-wrapper">
								<SelectControl
									label={__("Font Weight", "frontis-blocks")}
									options={[
										{ label: __("Default", "frontis-blocks"), value: "700" },
										{ label: __("100", "frontis-blocks"), value: "100" },
										{ label: __("200", "frontis-blocks"), value: "200" },
										{ label: __("300", "frontis-blocks"), value: "300" },
										{ label: __("400", "frontis-blocks"), value: "400" },
										{ label: __("500", "frontis-blocks"), value: "500" },
										{ label: __("600", "frontis-blocks"), value: "600" },
										{ label: __("700", "frontis-blocks"), value: "700" },
										{ label: __("800", "frontis-blocks"), value: "800" },
										{ label: __("900", "frontis-blocks"), value: "900" },
									]}
									value={teamMemberNameFontWeight}
									onChange={(value) => setAttributes({ teamMemberNameFontWeight: value })}
								/>
							</div>
							<div className="fb-setting-fontstyle-wrapper">
								<SelectControl
									label={__("Font Style", "frontis-blocks")}
									options={[
										{ label: __("Default", "frontis-blocks"), value: "normal" },
										{ label: __("Normal", "frontis-blocks"), value: "normal" },
										{ label: __("Italic", "frontis-blocks"), value: "italic" },
										{ label: __("Oblique", "frontis-blocks"), value: "oblique" },
									]}
									value={teamMemberNameFontStyle}
									onChange={(value) => setAttributes({ teamMemberNameFontStyle: value })}
								/>
							</div>
							<div className="fb-setting-texttransform-wrapper">
								<SelectControl
									label={__("Text Transform", "frontis-blocks")}
									options={[
										{ label: __("Default", "frontis-blocks"), value: "none" },
										{ label: __("None", "frontis-blocks"), value: "none" },
										{ label: __("Capitalize", "frontis-blocks"), value: "capitalize" },
										{ label: __("Uppercase", "frontis-blocks"), value: "uppercase" },
										{ label: __("Lowercase", "frontis-blocks"), value: "lowercase" },
									]}
									value={teamMemberNameTextTransform}
									onChange={(value) => setAttributes({ teamMemberNameTextTransform: value })}
								/>
							</div>
							<div className="fb-setting-textdecoration-wrapper">
								<SelectControl
									label={__("Text Decoration", "frontis-blocks")}
									options={[
										{ label: __("Default", "frontis-blocks"), value: "none" },
										{ label: __("None", "frontis-blocks"), value: "none" },
										{ label: __("Underline", "frontis-blocks"), value: "underline" },
										{ label: __("Overline", "frontis-blocks"), value: "overline" },
										{ label: __("Line Through", "frontis-blocks"), value: "line-through" },
									]}
									value={teamMemberNameTextDecoration}
									onChange={(value) => setAttributes({ teamMemberNameTextDecoration: value })}
								/>
							</div>
							<div className="fb-setting-letterspacing-wrapper">
								<div className="fb-setting-letterspacing-header">
									<div className="fb-setting-letterspacing-label">
										<span>{__("Letter Spacing", "frontis-blocks")}</span>
									</div>
									<div className="fb-setting-letterspacing-units">
										<ButtonGroup className="fb-setting-letterspacing-units-wrap">
											{UNIT_TYPES.map((item, key) => (
												<Button
													key={key}
													onClick={() => setAttributes({ teamMemberNameLetterSpacingUnits: item.value })}
													className={`fb-setting-letterspacing-units-switcher ${ teamMemberNameLetterSpacingUnits === item.value ? 'active' : ''}`}
												>
													{item.label}
												</Button>
											))}
										</ButtonGroup>
									</div>
								</div>
								<RangeControl
									value={teamMemberNameLetterSpacing}
									onChange={(value) => setAttributes({ teamMemberNameLetterSpacing: value === 0 ? undefined : value })}
									min={1}
									max={100}
									step={1}
									allowReset
									resetFallbackValue={undefined}
								/>
							</div>
							<div className="fb-setting-lineheight-wrapper">
								<div className="fb-setting-lineheight-header">
									<div className="fb-setting-lineheight-label">
										<span>{__("Line Height", "frontis-blocks")}</span>
									</div>
									<div className="fb-setting-lineheight-units">
										<ButtonGroup className="fb-setting-lineheight-units-wrap">
											{UNIT_TYPES.map((item, key) => (
												<Button
													key={key}
													onClick={() => setAttributes({ teamMemberNameLineHeightUnits: item.value })}
													className={`fb-setting-lineheight-units-switcher ${ teamMemberNameLineHeightUnits === item.value ? 'active' : ''}`}
												>
													{item.label}
												</Button>
											))}
										</ButtonGroup>
									</div>
								</div>
								<RangeControl
									value={teamMemberNameLineHeight}
									onChange={(value) => setAttributes({ teamMemberNameLineHeight: value === 1 ? undefined : value })}
									min={1}
									max={100}
									step={1}
									allowReset
									resetFallbackValue={undefined}
								/>
							</div>
						</BaseControl>
					</div>
				)}
			/>
		</BaseControl>

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
