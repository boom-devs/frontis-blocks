import FB_Spacing from '@Components/spacing';
import {__} from "@wordpress/i18n";
import FB_Color from "@Components/color";
import FB_Range from "@Components/range";
import FB_TypographyControl from "@Components/typography-control";

export default function FlipBoxBackTitleControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		flipBoxBackTitleFontColorSwitcher,
		flipBoxBackTitleFontColor,
		flipBoxBackTitleFontHoverColor,

		flipBoxBackTitleMarginUnits,
		flipBoxBackTitleMarginDesktop,
		flipBoxBackTitleMarginTablet,
		flipBoxBackTitleMarginMobile,
		flipBoxBackTitleMarginLink,

		flipBoxBackTitleFontFamily,
		flipBoxBackTitleFontSize,
		flipBoxBackTitleFontSizeUnits,
		flipBoxBackTitleFontWeight,
		flipBoxBackTitleFontStyle,
		flipBoxBackTitleTextTransform,
		flipBoxBackTitleTextDecoration,
		flipBoxBackTitleLetterSpacing,
		flipBoxBackTitleLetterSpacingUnits,
		flipBoxBackTitleLineHeight,
		flipBoxBackTitleLineHeightUnits,

	} = attributes;

	/** Start Front Title Color */
	const handleColorSwitcherChange = (value) => {
		setAttributes({ flipBoxBackTitleFontColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ flipBoxBackTitleFontColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ flipBoxBackTitleFontHoverColor: value });
	};
	/** End Front Title Color */

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxBackTitleMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxBackTitleMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxBackTitleMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxBackTitleMarginMobile: {
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
					setAttributes( {flipBoxBackTitleMarginDesktop: {...flipBoxBackTitleMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxBackTitleMarginTablet: {...flipBoxBackTitleMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxBackTitleMarginMobile: {...flipBoxBackTitleMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxBackTitleMarginLink: !flipBoxBackTitleMarginLink} );
	}

	const flipBoxBackTitleMarginUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxBackTitleMarginUnits: {
				...flipBoxBackTitleMarginUnits,
				[deviceType]: unit
			}
		})
	}

	return (
		<>
			<FB_Color
				label={__(" Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxBackTitleFontColorSwitcher}
				globalColor={flipBoxBackTitleFontColor}
				globalHoverColor={flipBoxBackTitleFontHoverColor}
				handleColorSwitcherChange={handleColorSwitcherChange}
				handleGlobalColorChange={handleGlobalColorChange}
				handleGlobalHoverColorChange={handleGlobalHoverColorChange}
			/>
			<FB_TypographyControl
				fontFamily={flipBoxBackTitleFontFamily}
				onChangeFontFamily={(value) => setAttributes({ flipBoxBackTitleFontFamily: value })}

				fontSize={flipBoxBackTitleFontSize}
				onChangeFontSize={(value) => setAttributes({ flipBoxBackTitleFontSize: value })}

				fontSizeUnits={flipBoxBackTitleFontSizeUnits}
				onChangeFontSizeUnit={(value) => setAttributes({ flipBoxBackTitleFontSizeUnits: value })}

				fontWeight={flipBoxBackTitleFontWeight}
				onChangeFontWeight={(value) => setAttributes({ flipBoxBackTitleFontWeight: value })}

				fontStyle={flipBoxBackTitleFontStyle}
				onChangeFontStyle={(value) => setAttributes({ flipBoxBackTitleFontStyle: value })}

				textTransform={flipBoxBackTitleTextTransform}
				onChangeTextTransform={(value) => setAttributes({ flipBoxBackTitleTextTransform: value })}

				textDecoration={flipBoxBackTitleTextDecoration}
				onChangeTextDecoration={(value) => setAttributes({ flipBoxBackTitleTextDecoration: value })}

				letterSpacing={flipBoxBackTitleLetterSpacing}
				onChangeLetterSpacing={(value) => setAttributes({ flipBoxBackTitleLetterSpacing: value })}

				letterSpacingUnits={flipBoxBackTitleLetterSpacingUnits}
				onChangeLetterSpacingUnit={(value) => setAttributes({ flipBoxBackTitleLetterSpacingUnits: value })}

				lineHeight={flipBoxBackTitleLineHeight}
				onChangeLineHeight={(value) => setAttributes({ flipBoxBackTitleLineHeight: value })}

				lineHeightUnits={flipBoxBackTitleLineHeightUnits}
				onChangeLineHeightUnit={(value) => setAttributes({ flipBoxBackTitleLineHeightUnits: value })}

				deviceType={deviceType}
				setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxBackTitleMarginUnitsHandler}
				spacingUnits={flipBoxBackTitleMarginUnits}
				spacingDesktop={flipBoxBackTitleMarginDesktop}
				spacingTablet={flipBoxBackTitleMarginTablet}
				spacingMobile={flipBoxBackTitleMarginMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxBackTitleMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
