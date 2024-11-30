import FB_Spacing from '@Components/spacing';
import {__} from "@wordpress/i18n";
import FB_Color from "@Components/color";
import FB_Range from "@Components/range";
import FB_TypographyControl from "@Components/typography-control";

export default function FlipBoxBackContentControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		flipBoxBackContentFontColorSwitcher,
		flipBoxBackContentFontColor,
		flipBoxBackContentFontHoverColor,

		flipBoxBackContentMarginUnits,
		flipBoxBackContentMarginDesktop,
		flipBoxBackContentMarginTablet,
		flipBoxBackContentMarginMobile,
		flipBoxBackContentMarginLink,

		flipBoxBackContentFontFamily,
		flipBoxBackContentFontSize,
		flipBoxBackContentFontSizeUnits,
		flipBoxBackContentFontWeight,
		flipBoxBackContentFontStyle,
		flipBoxBackContentTextTransform,
		flipBoxBackContentTextDecoration,
		flipBoxBackContentLetterSpacing,
		flipBoxBackContentLetterSpacingUnits,
		flipBoxBackContentLineHeight,
		flipBoxBackContentLineHeightUnits,

	} = attributes;

	/** Start Front Title Color */
	const handleColorSwitcherChange = (value) => {
		setAttributes({ flipBoxBackContentFontColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ flipBoxBackContentFontColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ flipBoxBackContentFontHoverColor: value });
	};
	/** End Front Title Color */

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxBackContentMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxBackContentMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxBackContentMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxBackContentMarginMobile: {
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
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {flipBoxBackContentMarginDesktop: {...flipBoxBackContentMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxBackContentMarginTablet: {...flipBoxBackContentMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxBackContentMarginMobile: {...flipBoxBackContentMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxBackContentMarginLink: !flipBoxBackContentMarginLink} );
	}

	const flipBoxBackContentMarginUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxBackContentMarginUnits: {
				...flipBoxBackContentMarginUnits,
				[deviceType]: unit
			}
		})
	}

	return (
		<>
			<FB_Color
				label={__(" Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxBackContentFontColorSwitcher}
				globalColor={flipBoxBackContentFontColor}
				globalHoverColor={flipBoxBackContentFontHoverColor}
				handleColorSwitcherChange={handleColorSwitcherChange}
				handleGlobalColorChange={handleGlobalColorChange}
				handleGlobalHoverColorChange={handleGlobalHoverColorChange}
			/>
			<FB_TypographyControl
				fontFamily={flipBoxBackContentFontFamily}
				onChangeFontFamily={(value) => setAttributes({ flipBoxBackContentFontFamily: value })}

				fontSize={flipBoxBackContentFontSize}
				onChangeFontSize={(value) => setAttributes({ flipBoxBackContentFontSize: value })}

				fontSizeUnits={flipBoxBackContentFontSizeUnits}
				onChangeFontSizeUnit={(value) => setAttributes({ flipBoxBackContentFontSizeUnits: value })}

				fontWeight={flipBoxBackContentFontWeight}
				onChangeFontWeight={(value) => setAttributes({ flipBoxBackContentFontWeight: value })}

				fontStyle={flipBoxBackContentFontStyle}
				onChangeFontStyle={(value) => setAttributes({ flipBoxBackContentFontStyle: value })}

				textTransform={flipBoxBackContentTextTransform}
				onChangeTextTransform={(value) => setAttributes({ flipBoxBackContentTextTransform: value })}

				textDecoration={flipBoxBackContentTextDecoration}
				onChangeTextDecoration={(value) => setAttributes({ flipBoxBackContentTextDecoration: value })}

				letterSpacing={flipBoxBackContentLetterSpacing}
				onChangeLetterSpacing={(value) => setAttributes({ flipBoxBackContentLetterSpacing: value })}

				letterSpacingUnits={flipBoxBackContentLetterSpacingUnits}
				onChangeLetterSpacingUnit={(value) => setAttributes({ flipBoxBackContentLetterSpacingUnits: value })}

				lineHeight={flipBoxBackContentLineHeight}
				onChangeLineHeight={(value) => setAttributes({ flipBoxBackContentLineHeight: value })}

				lineHeightUnits={flipBoxBackContentLineHeightUnits}
				onChangeLineHeightUnit={(value) => setAttributes({ flipBoxBackContentLineHeightUnits: value })}

				deviceType={deviceType}
				setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxBackContentMarginUnitsHandler}
				spacingUnits={flipBoxBackContentMarginUnits}
				spacingDesktop={flipBoxBackContentMarginDesktop}
				spacingTablet={flipBoxBackContentMarginTablet}
				spacingMobile={flipBoxBackContentMarginMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxBackContentMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
