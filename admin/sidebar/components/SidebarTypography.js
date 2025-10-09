import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	Button,
	SelectControl,

} from '@wordpress/components';

import { useState, useEffect } from '@wordpress/element';
import Select2 from 'react-select';

import {
	FONT_STYLE,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
	FONT_WEIGHT
} from '@Constants/fbConstants';

import FB_Range from '@Components/range';
import loadGoogleFont from '@Utils/loadGoogleFont';

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

	const [fontOptions, setFontOptions] = useState(frontisBlocksAdmin?.google_fonts);
	const [selectedFontFamilyOption, setSelectedFontFamilyOption] = useState();
	const [availableFontWeights, setAvailableFontWeights] = useState([]);

	console.log(fontOptions);

	useEffect(() => {
		if (fontFamily !== 'Default') {
			loadGoogleFont(fontFamily);
		}
	}, [fontFamily]);

	const handleFontFamilyChange = (selectedOption) => {
		setSelectedFontFamilyOption(selectedOption);
		const newFontFamily = selectedOption?.value || 'Default';

		onChangeFontFamily(newFontFamily);

		if(selectedOption?.weights.length > 0) {
			let weights = [
				{'label': 'Default', 'value': 'default'}
			];
			selectedOption?.weights.map((item, index) => {
				weights.push({
					'label': item,
					'value': item
				})
			})

			setAvailableFontWeights(weights);
		}

		if (newFontFamily !== 'Default') {
			loadGoogleFont(newFontFamily);
		}
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

	useEffect(() => {
		const  selectedFont= fontOptions.find(font => font.label === fontFamily);
		handleFontFamilyChange(selectedFont)
	}, []);

	return (
		<>
			<BaseControl
				label={__("Font Family", "frontis-blocks")}
				className='fb-typo-spacing'
			>
				<Select2
					options={fontOptions}
					value={selectedFontFamilyOption}
					onChange={handleFontFamilyChange}
					className="fb-select2-control"
					styles={{
						menu: (base) => ({
							...base,
							zIndex: 999,
						  }),
					}}
				/>
			</BaseControl>
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
					resetFallbackValue={'16'}
				/>
			}
			<div className='fb_global_typo_wrap'>
				<SelectControl
					label={__("Font Weight", "frontis-blocks")}
					options={availableFontWeights.length > 0 ? availableFontWeights : FONT_WEIGHT}
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
					label={__("Text Decoration", "frontis-blocks")}
					options={TEXT_DECORATION}
					value={textDecoration}
					onChange={handleTextDecorationChange}
				/>
				<div className="fb-letter-case-control">
					<label className="fb-control-label">{__("Letter Case", "frontis-blocks")}</label>
					<div className="fb-case-button-group">
						{TEXT_TRANSFORM.map((option) => (
							<Button
								key={option.value}
								onClick={() => handleTextTransformChange(option.value)}
								className={`fb-case-button ${
									textTransform === option.value ? "active" : ""
								}`}
								title={option.label}
							>
								{option.icon}
							</Button>
						))}
					</div>
				</div>
			</div>

			<div className='fb_global_typo_wrap'>
				{letterSpacingUnits &&
					<FB_Range
						min={-20}
						max={20}
						label={__("Letter Spacing", "frontis-blocks")}
						rangeValue={letterSpacing}
						onChangeHandler={handleLetterSpacingChange}
						rangeUnitHandler={handleLetterSpacingUnitChange}
						deviceType={deviceType}
						units={letterSpacingUnits}
						rangeStep={0.1}
						resetFallbackValue={''}
					/>
				}
				{lineHeightUnits &&
					<FB_Range
						min={-200}
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
