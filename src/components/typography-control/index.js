import { __ } from '@wordpress/i18n';
import { 
	BaseControl,
	Button,
	SelectControl,
	Dropdown,
	Dashicon,
} from '@wordpress/components';

import { useState, useEffect } from '@wordpress/element';
import Select2 from "react-select";

import {
    FONT_FAMILYS,
	FONT_WEIGHT,
    FONT_STYLE,
    TEXT_TRANSFORM,
    TEXT_DECORATION,
} from "./constants/constants";

import FB_Range from '@Components/range';
import loadGoogleFont from '@Utils/loadGoogleFont';
import './editor.lazy.scss';
import FB_GBSelectControl from '@Components/gb-select-control';

const FB_TypographyControl = ({
    label = __("Typography", "frontis-blocks"),
    fontFamily,
	onChangeFontFamily,
    globalFontFamily = '',
	onChangeGlobalFontFamily = '',

	fontSize,
	onChangeFontSize,
	fontSizeUnits,
	onChangeFontSizeUnit,
	globalFontSize = '',
	onChangeGlobalFontSize = '',

    fontWeight,
    onChangeFontWeight,
    globalFontWeight = '',
	onChangeGlobalFontWeight = '',

    fontStyle,
    onChangeFontStyle,
    globalFontStyle = '',
	onChangeGlobalFontStyle = '',

    textTransform,
    onChangeTextTransform,
    globalTextTransform = '',
	onChangeGlobalTextTransform = '',

    textDecoration,
    onChangeTextDecoration,
    globalTextDecoration = '',
	onChangeGlobalTextDecoration = '',

    letterSpacing,
	onChangeLetterSpacing,
    globalLetterSpacing = '',
	onChangeGlobalLetterSpacing = '',
	letterSpacingUnits,
	onChangeLetterSpacingUnit,

    lineHeight,
	onChangeLineHeight,
    globalLineHeight = '',
	onChangeGlobalLineHeight = '',
	lineHeightUnits,
	onChangeLineHeightUnit,

    deviceType,
    setAttributes,
}) => {

    const [selectedFontFamilyOption, setSelectedFontFamilyOption] = useState(
        FONT_FAMILYS.find(option => option.value === fontFamily)
    );

    useEffect(() => {
		if (fontFamily !== 'Default') {
			loadGoogleFont(fontFamily);
		}
	}, [fontFamily]);

    const handleFontFamilyChange = (selectedOption) => {
        setSelectedFontFamilyOption(selectedOption);
        const newFontFamily = selectedOption?.value || 'Default';
        onChangeFontFamily(newFontFamily);

        if (newFontFamily !== 'Default') {
            loadGoogleFont(newFontFamily);
        }
    };

	// const handleFontFamilyChange = (newFontFamily) => {
	// 	onChangeFontFamily(newFontFamily);

    //     if (newFontFamily !== 'Default') {
    //         loadGoogleFont(newFontFamily);
    //     }
	// };

	const handleGlobalFontFamilyChange = (newFontSize) => {
		onChangeGlobalFontFamily(newFontSize);
	};

	const handleFontSizeChange = (newFontSize) => {
		onChangeFontSize(newFontSize);
	};
	const handleGlobalFontSizeChange = (globalFontSize) => {
		onChangeGlobalFontSize(globalFontSize);
	};

	const handleFontSizeUnitChange = (newFontSizeUnit) => {
		onChangeFontSizeUnit(newFontSizeUnit);
	};

	const handleFontWeightChange = (newFontWeight) => {
		onChangeFontWeight(newFontWeight);
	};

	const handleGlobalFontWeightChange = (globalFontWeight) => {
		onChangeGlobalFontWeight(globalFontWeight);
	};

    const handleFontStyleChange = (newFontStyle) => {
		onChangeFontStyle(newFontStyle);
	};

    const handleGlobalFontStyleChange = (globalFontStyle) => {
		onChangeGlobalFontStyle(globalFontStyle);
	};

    const handleTextTransformChange = (newTextTransform) => {
		onChangeTextTransform(newTextTransform);
	};

    const handleGlobalTextTransformChange = (globalTextTransform) => {
		onChangeGlobalTextTransform(globalTextTransform);
	};

    const handleTextDecorationChange = (newTextDecoration) => {
		onChangeTextDecoration(newTextDecoration);
	};

    const handleGlobalTextDecorationChange = (globalTextDecoration) => {
		onChangeGlobalTextDecoration(globalTextDecoration);
	};

    const handleLetterSpacingChange = (newLetterSpacing) => {
        onChangeLetterSpacing(newLetterSpacing);
    };

    const handleGlobalLetterSpacingChange = (globalLetterSpacing) => {
        onChangeGlobalLetterSpacing(globalLetterSpacing);
    };

    const handleLetterSpacingUnitChange = (newLetterSpacingUnit) => {
        onChangeLetterSpacingUnit(newLetterSpacingUnit);
    };
    
    const handleLineHeightChange = (newLineHeight) => {
        onChangeLineHeight(newLineHeight);
    };

    const handleGlobalLineHeightChange = (globalLineHeight) => {
        onChangeGlobalLineHeight(globalLineHeight);
    };

    const handleLineHeightUnitChange = (newLineHeightUnit) => {
        onChangeLineHeightUnit(newLineHeightUnit);
    };

    const globalTypo = FrontisBlocksData.global_typography;
    // console.log(globalTypo)

    Object.entries(globalTypo).forEach(([label, properties]) => {
        // console.log(label);
    });

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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2.66699 14.666H13.3337" stroke="#1C274C"/>
                        <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"/>
                        </svg>
                    </Button>
                )}
                renderContent={() => (
                    <div className="fb-setting-typography-popup">
                        <BaseControl className="fb-setting-typography-popup-inner">
                            {/* <SelectControl
                                label={__("Font Family", "frontis-blocks")}
                                options={FONT_FAMILYS}
                                value={fontFamily}
                                onChange={handleFontFamilyChange}
                            /> */}
                            <Select2 
                                options={FONT_FAMILYS}
                                value={selectedFontFamilyOption}
                                onChange={handleFontFamilyChange}
                                className="fb-select2-control"
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
                                globalIcon={true}
                                globalTypographyType={'fontSize'}
                                globalTypographyValue={globalFontSize}
                                setGlobalTypographyValue={handleGlobalFontSizeChange}
							/>

                            <FB_GBSelectControl
                                label={__("Font Weight", "frontis-blocks")}
                                controlOptions={FONT_WEIGHT}
                                selectValue={fontWeight}
                                setSelectValue={handleFontWeightChange}
                                globalIcon={true}
                                globalTypographyType={'fontWeight'}
                                globalTypographyValue={globalFontWeight}
                                setGlobalTypographyValue={handleGlobalFontWeightChange}
                            />

                            <FB_GBSelectControl
                                label={__("Font Style", "frontis-blocks")}
                                controlOptions={FONT_STYLE}
                                selectValue={fontStyle}
                                setSelectValue={handleFontStyleChange}
                                globalIcon={true}
                                globalTypographyType={'fontStyle'}
                                globalTypographyValue={globalFontStyle}
                                setGlobalTypographyValue={handleGlobalFontStyleChange}
                            />

                            <FB_GBSelectControl
                                label={__("Text Transform", "frontis-blocks")}
                                controlOptions={TEXT_TRANSFORM}
                                selectValue={textTransform}
                                setSelectValue={handleTextTransformChange}
                                globalIcon={true}
                                globalTypographyType={'textTransform'}
                                globalTypographyValue={globalTextTransform}
                                setGlobalTypographyValue={handleGlobalTextTransformChange}
                            />
                            
                            <FB_GBSelectControl
                                label={__("Text Decoration", "frontis-blocks")}
                                controlOptions={TEXT_DECORATION}
                                selectValue={textDecoration}
                                setSelectValue={handleTextDecorationChange}
                                globalIcon={true}
                                globalTypographyType={'textDecoration'}
                                globalTypographyValue={globalTextDecoration}
                                setGlobalTypographyValue={handleGlobalTextDecorationChange}
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
                                globalIcon={true}
                                globalTypographyType={'letterSpacing'}
                                globalTypographyValue={globalLetterSpacing}
                                setGlobalTypographyValue={handleGlobalLetterSpacingChange}
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
                                globalIcon={true}
                                globalTypographyType={'lineHeight'}
                                globalTypographyValue={globalLineHeight}
                                setGlobalTypographyValue={handleGlobalLineHeightChange}
                            />
                        </BaseControl>
                    </div>
                )}
            />
        </BaseControl>
    );
};

export default FB_TypographyControl;
