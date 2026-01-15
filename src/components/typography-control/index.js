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
	FONT_WEIGHT,
    FONT_STYLE,
    TEXT_TRANSFORM,
    TEXT_DECORATION,
    GOOGLE_FONTS,
} from '@Constants/fbConstants';

import FB_Range from '@Components/range';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_GBSelectControl from '@Components/gb-select-control';


const FB_TypographyControl = ({
    label = __("Typography", "frontis-blocks"),

    globalTypoControlActive = false,
    storeGlobalTypographyData,
    globalTypoSwitcher = {'fontFamily': 'false', 'fontSize': 'false', 'fontWeight': 'false', 'fontStyle': 'false', 'textTransform': 'false', 'textDecoration': 'false', 'letterSpacing': 'false', 'lineHeight': 'false' },
    globalTypoType = 'default',
    onChangeGlobalTypoType,
    globalTypoOption = {label: 'Default', value: 'default'},
    onChangeGlobalTypoOption,

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

    const [fontOptions, setFontOptions] = useState([]);
    const [selectedFontFamilyOption, setSelectedFontFamilyOption] = useState(null);
    const [availableFontWeights, setAvailableFontWeights] = useState([]);
    

    useEffect(() => {
        GOOGLE_FONTS().then((fetchedFonts) => {
            setFontOptions(fetchedFonts);
    
            const current = fetchedFonts.find(f => f.value === fontFamily);
    
            if (current) {
                setSelectedFontFamilyOption(current);
                setAvailableFontWeights(current.weights || []);
            } else {
                setSelectedFontFamilyOption({ label: 'Default', value: 'Default' });
                setAvailableFontWeights([]);
            }
        });
    }, []);


    // useEffect(() => {
	// 	if (fontFamily !== 'Default') {
	// 		loadGoogleFont(fontFamily);
	// 	}
	// }, [fontFamily]);

    const handleFontFamilyChange = (selectedOption) => {
        setSelectedFontFamilyOption(selectedOption);
    
        const newFontFamily = selectedOption?.value || 'Default';
        onChangeFontFamily(newFontFamily);
    
        // Update font weight list
        setAvailableFontWeights(selectedOption?.weights || []);
    
        // if (newFontFamily !== 'Default') {
        //     loadGoogleFont(newFontFamily);
        // }
    };

    const handleGlobalTypoTypeChange = (selectedOption) => {
        onChangeGlobalTypoOption(selectedOption);
        const newGlobalTypoType = selectedOption?.value || 'default';
        onChangeGlobalTypoType(newGlobalTypoType);
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

    
        const globalTypoData = FrontisBlocksData.global_typography;
        const GB_TYPO = [{ label: 'Default', value: 'default' }];

        const storedData = localStorage.getItem("fb_custom_typography");
        const customTypoData = storedData ? JSON.parse(storedData) : {};

        // Convert object to array
        const customTypoArray = Object.keys(customTypoData).map(key => ({
            id: key,
            name: customTypoData[key].name
        }));

        const GB_TYPO_DATA = {};

        Object.entries(globalTypoData).forEach(([label, properties]) => {

                let newLabel =
                    label === 'body' ? 'Body' :
                    label === 'captions' ? 'Captions' :
                    label === 'button' ? 'Button' :
                    label === 'link' ? 'Link' :
                    label === 'h1' ? 'Heading One' :
                    label === 'h2' ? 'Heading Two' :
                    label === 'h3' ? 'Heading Three' :
                    label === 'h4' ? 'Heading Four' :
                    label === 'h5' ? 'Heading Five' :
                    label === 'h6' ? 'Heading Six' :
                    label;

                GB_TYPO.push({ label: newLabel, value: label });

                if (globalTypoType === label) {
                    Object.entries(properties).forEach(([itemLabel, itemProperties]) => {
                        GB_TYPO_DATA[itemLabel] = `var(${itemProperties.variable})`;
                    });
                } 
        });


        GB_TYPO.forEach(item => {
            const matchedTypo = customTypoArray.find(typo => typo.id === item.label);
            if (matchedTypo) {
                item.label = matchedTypo.name;
            }
        });

    if(globalTypoControlActive === true) {
        // store global typography data
        useEffect(() => {
            storeGlobalTypographyData(GB_TYPO_DATA);
        }, [globalTypoType])
    }


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
                            {globalTypoControlActive === true && 
                            <BaseControl 
                                label={__("Presets", "frontis-blocks")}
                                className='fb-typo-spacing'
                                >
                                <Select2 
                                    options={GB_TYPO}
                                    value={globalTypoOption}
                                    onChange={handleGlobalTypoTypeChange}
                                    className="fb-select2-control"
                                    styles={{
                                        menu: (base) => ({
                                            ...base,
                                            zIndex: 999,
                                        }),
                                    }}
                                />
                            </BaseControl>}

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

                            <BaseControl
                                className={`fb-typo-spacing ${globalTypoSwitcher.fontSize === true && 'fb-global-typo-active'}`}
                            >
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
                                globalReset={globalTypoSwitcher.fontSize}
                            />
                            </BaseControl>

                            <BaseControl
                                className={`fb-typo-spacing ${globalTypoSwitcher.fontWeight === true && 'fb-global-typo-active'}`}
                            >

                            <FB_GBSelectControl
                                label={__("Font Weight", "frontis-blocks")}
                                controlOptions={[
                                    { label: __("Default", "frontis-blocks"), value: 'inherit' },
                                    ...(availableFontWeights.length > 0
                                        ? availableFontWeights.map(weight => ({ label: weight, value: weight }))
                                        : FONT_WEIGHT.filter(item => item.value !== 'inherit'))
                                ]}
                                selectValue={fontWeight}
                                setSelectValue={handleFontWeightChange}
                            />

                            </BaseControl>

                            <BaseControl
                                className={`fb-typo-spacing ${globalTypoSwitcher.fontStyle === true && 'fb-global-typo-active'}`}
                            >
                            <FB_GBSelectControl
                                label={__("Font Style", "frontis-blocks")}
                                controlOptions={FONT_STYLE}
                                selectValue={fontStyle}
                                setSelectValue={handleFontStyleChange}
                            />
                            </BaseControl>
                            
                            <BaseControl
                                className={`fb-typo-spacing ${globalTypoSwitcher.textDecoration === true && 'fb-global-typo-active'}`}
                            >
                            <FB_GBSelectControl
                                label={__("Text Decoration", "frontis-blocks")}
                                controlOptions={TEXT_DECORATION}
                                selectValue={textDecoration}
                                setSelectValue={handleTextDecorationChange}
                            />
                            </BaseControl>

                            <BaseControl
                                className={`fb-typo-spacing ${globalTypoSwitcher.textTransform === true && 'fb-global-typo-active'}`}
                            >
                            {/* <FB_GBSelectControl
                                label={__("Letter Case", "frontis-blocks")}
                                controlOptions={TEXT_TRANSFORM}
                                selectValue={textTransform}
                                setSelectValue={handleTextTransformChange}
                            /> */}

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

                            </BaseControl>
                            
                            <BaseControl
                                className={`fb-typo-spacing ${globalTypoSwitcher.letterSpacing === true && 'fb-global-typo-active'}`}
                            >
                            <FB_Range
                                min={-20}
                                max={20}
                                label={__("Letter Spacing", "frontis-blocks")}
                                rangeValue={letterSpacing}
                                onChangeHandler={handleLetterSpacingChange}
                                rangeUnitHandler={handleLetterSpacingUnitChange}
                                deviceType={deviceType}
                                units={letterSpacingUnits}
                                setAttributes={setAttributes}
                                rangeStep={0.1}
                                resetFallbackValue={''}
                            />
                            </BaseControl>

                            <BaseControl
                                className={`fb-typo-spacing ${globalTypoSwitcher.lineHeight === true && 'fb-global-typo-active'}`}
                            >
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
                        </BaseControl>
                    </div>
                )}
            />
        </BaseControl>
    );
};

export default FB_TypographyControl;
