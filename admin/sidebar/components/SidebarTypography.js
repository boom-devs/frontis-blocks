import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	Button,
	SelectControl,
	Dropdown,
	Dashicon,
} from '@wordpress/components';

import {
	FONT_FAMILYS,
	FONT_WEIGHT,
	FONT_STYLE,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
} from "../../../src/fbConstants/fbConstants";

import FB_Range from '@Components/range';


const FB_SidebarTypography = ({
								  label = __("Typography", "frontis-blocks"),
								  fontFamily,
								  onChangeFontFamily,
								  fontSize,
								  onChangeFontSize,
								  fontSizeUnits,
								  onChangeFontSizeUnit,
								  fontWeight,
								  onChangeFontWeight,
								  fontStyle,
								  onChangeFontStyle,
								  textTransform,
								  onChangeTextTransform,
								  textDecoration,
								  onChangeTextDecoration,
								  letterSpacing,
								  onChangeLetterSpacing,
								  letterSpacingUnits,
								  onChangeLetterSpacingUnit,
								  lineHeight,
								  onChangeLineHeight,
								  lineHeightUnits,
								  onChangeLineHeightUnit,
								  deviceType,
								  heading
							  }) => {
	const handleFontFamilyChange = (newFontFamily) => {
		onChangeFontFamily(newFontFamily);
	};

	const handleFontSizeChange = (newFontSize) => {
		onChangeFontSize(newFontSize);
	};

	const handleFontSizeUnitChange = (newFontSizeUnit) => {
		onChangeFontSizeUnit(newFontSizeUnit);
	};

	const handleFontWeightChange = (newFontWeight) => {
		onChangeFontWeight(newFontWeight);
	};

	const handleFontStyleChange = (newFontStyle) => {
		onChangeFontStyle(newFontStyle);
	};

	const handleTextTransformChange = (newTextTransform) => {
		onChangeTextTransform(newTextTransform);
	};

	const handleTextDecorationChange = (newTextDecoration) => {
		onChangeTextDecoration(newTextDecoration);
	};

	const handleLetterSpacingChange = (newLetterSpacing) => {
		onChangeLetterSpacing(newLetterSpacing);
	};

	const handleLetterSpacingUnitChange = (newLetterSpacingUnit) => {
		onChangeLetterSpacingUnit(newLetterSpacingUnit);
	};

	const handleLineHeightChange = (newLineHeight) => {
		onChangeLineHeight(newLineHeight);
	};

	const handleLineHeightUnitChange = (newLineHeightUnit) => {
		onChangeLineHeightUnit(newLineHeightUnit);
	};

	return (
		<>
			<SelectControl
				label={__("Font Family", "frontis-blocks")}
				options={FONT_FAMILYS}
				value={fontFamily}
				onChange={handleFontFamilyChange}
			/>
			{heading !== 'all' &&
				<FB_Range
					min={1}
					max={200}
					label={__("Font Size", "frontis-blocks")}
					rangeValue={fontSize}
					onChangeHandler={handleFontSizeChange}
					rangeUnitHandler={handleFontSizeUnitChange}
					deviceType={deviceType}
					units={fontSizeUnits}
					rangeStep={1}
					resetFallbackValue={''}
				/>
			}
			<div className='fb_global_typo_wrap'>
				<SelectControl
					label={__("Appearance", "frontis-blocks")}
					options={FONT_WEIGHT}
					value={fontWeight}
					onChange={handleFontWeightChange}
				/>
				<SelectControl
					label={__("Font Style", "frontis-blocks")}
					options={FONT_STYLE}
					value={fontStyle}
					onChange={handleFontStyleChange}
				/>
			</div>
			<div className='fb_global_typo_wrap'>
				<SelectControl
					label={__("Text Transform", "frontis-blocks")}
					options={TEXT_TRANSFORM}
					value={textTransform}
					onChange={handleTextTransformChange}
				/>
				<SelectControl
					label={__("Text Decoration", "frontis-blocks")}
					options={TEXT_DECORATION}
					value={textDecoration}
					onChange={handleTextDecorationChange}
				/>
			</div>
			
			<div className='fb_global_typo_wrap'>
				{letterSpacingUnits &&
					<FB_Range
						min={1}
						max={100}
						label={__("Letter Spacing", "frontis-blocks")}
						rangeValue={letterSpacing}
						onChangeHandler={handleLetterSpacingChange}
						rangeUnitHandler={handleLetterSpacingUnitChange}
						deviceType={deviceType}
						units={letterSpacingUnits}
						rangeStep={1}
						resetFallbackValue={''}
					/>
				}
				{lineHeightUnits &&
					<FB_Range
						min={1}
						max={200}
						label={__("Line Height", "frontis-blocks")}
						rangeValue={lineHeight}
						onChangeHandler={handleLineHeightChange}
						rangeUnitHandler={handleLineHeightUnitChange}
						deviceType={deviceType}
						units={lineHeightUnits}
						rangeStep={1}
						resetFallbackValue={''}
					/>
				}
			</div>
		</>
	);
};

export default FB_SidebarTypography;
