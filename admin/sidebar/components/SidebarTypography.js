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
import { useEffect } from 'react';

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
								  setAttributes,
							  }) => {
	const handleFontFamilyChange = (newFontFamily) => {
		onChangeFontFamily(newFontFamily);
	};

	const handleFontSizeChange = (newFontSize) => {
		// Ensure proper device type handling
		const updatedFontSize = {
			...fontSize,
			[deviceType]: parseInt(newFontSize[deviceType] || newFontSize)
		};
		onChangeFontSize(updatedFontSize);
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
		// Ensure proper device type handling
		const updatedLetterSpacing = {
			...letterSpacing,
			[deviceType]: parseFloat(newLetterSpacing[deviceType] || newLetterSpacing)
		};
		onChangeLetterSpacing(updatedLetterSpacing);
	};

	const handleLetterSpacingUnitChange = (newLetterSpacingUnit) => {
		onChangeLetterSpacingUnit(newLetterSpacingUnit);
	};

	const handleLineHeightChange = (newLineHeight) => {
		// Ensure proper device type handling
		const updatedLineHeight = {
			...lineHeight,
			[deviceType]: parseFloat(newLineHeight[deviceType] || newLineHeight)
		};
		onChangeLineHeight(updatedLineHeight);
	};

	const handleLineHeightUnitChange = (newLineHeightUnit) => {
		onChangeLineHeightUnit(newLineHeightUnit);
	};

	// Initialize default values for responsive controls if they don't exist
	useEffect(() => {
		if (fontSize && !fontSize[deviceType]) {
			const defaultFontSize = { ...fontSize, [deviceType]: '' };
			onChangeFontSize(defaultFontSize);
		}
		if (letterSpacing && !letterSpacing[deviceType]) {
			const defaultLetterSpacing = { ...letterSpacing, [deviceType]: '' };
			onChangeLetterSpacing(defaultLetterSpacing);
		}
		if (lineHeight && !lineHeight[deviceType]) {
			const defaultLineHeight = { ...lineHeight, [deviceType]: '' };
			onChangeLineHeight(defaultLineHeight);
		}
	}, [deviceType]);

	console.log("Checking device type:", deviceType)


	return (
		<>
			<SelectControl
				label={__("Font Family", "frontis-blocks")}
				options={FONT_FAMILYS}
				value={fontFamily}
				onChange={handleFontFamilyChange}
			/>
			<FB_Range
				min={1}
				max={200}
				label={__("Font Size", "frontis-blocks")}
				rangeValue={fontSize || { [deviceType]: '' }}
				onChangeHandler={handleFontSizeChange}
				rangeUnitHandler={handleFontSizeUnitChange}
				deviceType={deviceType}
				units={fontSizeUnits || { [deviceType]: 'px' }}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={''}
			/>
			<SelectControl
				label={__("Font Weight", "frontis-blocks")}
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
			{letterSpacingUnits &&
				<FB_Range
					min={1}
					max={100}
					label={__("Letter Spacing", "frontis-blocks")}
					rangeValue={letterSpacing || { [deviceType]: '' }}
					onChangeHandler={handleLetterSpacingChange}
					rangeUnitHandler={handleLetterSpacingUnitChange}
					deviceType={deviceType}
					units={letterSpacingUnits || { [deviceType]: 'px' }}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={''}
				/>
			}
			{lineHeightUnits &&
				<FB_Range
					min={1}
					max={200}
					label={__("Line Height", "frontis-blocks")}
					rangeValue={lineHeight || { [deviceType]: '' }}
					onChangeHandler={handleLineHeightChange}
					rangeUnitHandler={handleLineHeightUnitChange}
					deviceType={deviceType}
					units={lineHeightUnits || { [deviceType]: 'px' }}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={''}
				/>
			}
		</>
	);
};

export default FB_SidebarTypography;
