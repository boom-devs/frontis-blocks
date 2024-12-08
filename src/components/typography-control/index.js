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
} from "./constants/constants";

import FB_Range from '@Components/range';
import './editor.lazy.scss';

const FB_TypographyControl = ({
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
        <BaseControl
            label={label}
            className="fb-setting-typography"
        >
            <Dropdown
                className="fb-setting-dropdown-icon-wrapper"
                contentClassName="fb-setting-dropdown-icon-content"
                popoverProps={{ placement: 'bottom-start' }}
                renderToggle={({ isOpen, onToggle }) => (
                    <Button
                        variant="primary"
                        onClick={onToggle}
                        aria-expanded={isOpen}
                        aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                        className="fb-setting-dropdown-icon-btn"
                    >
                        <Dashicon icon="edit" className="fb-setting-dropdown-icon" />
                    </Button>
                )}
                renderContent={() => (
                    <div className="fb-setting-typography-popup">
                        <BaseControl className="fb-setting-typography-popup-inner">
                            <SelectControl
                                label={__("Font Family", "frontis-blocks")}
                                options={FONT_FAMILYS}
                                value={fontFamily}
                                onChange={handleFontFamilyChange}
                            />
							<FB_Range
								min={0}
								max={200}
								label={__("Font Size", "frontis-blocks")}
								rangeValue={fontSize}
								onChangeHandler={handleFontSizeChange}
								rangeUnitHandler={handleFontSizeUnitChange}
								deviceType={deviceType}
								units={fontSizeUnits}
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
                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Letter Spacing", "frontis-blocks")}
                                rangeValue={letterSpacing}
                                onChangeHandler={handleLetterSpacingChange}
                                rangeUnitHandler={handleLetterSpacingUnitChange}
                                deviceType={deviceType}
                                units={letterSpacingUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={''}
                            />
                            <FB_Range
                                min={0}
                                max={200}
                                label={__("Line Height", "frontis-blocks")}
                                rangeValue={lineHeight}
                                onChangeHandler={handleLineHeightChange}
                                rangeUnitHandler={handleLineHeightUnitChange}
                                deviceType={deviceType}
                                units={lineHeightUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={''}
                            />
                        </BaseControl>
                    </div>
                )}
            />
        </BaseControl>
    );
};

export default FB_TypographyControl;
