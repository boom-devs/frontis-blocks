import FB_Spacing from '@Components/spacing';
import {__} from "@wordpress/i18n";
import FB_Color from "@Components/color";
import FB_Range from "@Components/range";
import FB_TypographyControl from "@Components/typography-control";

export default function FlipBoxFrontTitleControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		flipBoxFrontTitleFontColorSwitcher,
		flipBoxFrontTitleFontColor,
		flipBoxFrontTitleFontHoverColor,

		flipBoxFrontTitleMarginUnits,
		flipBoxFrontTitleMarginDesktop,
		flipBoxFrontTitleMarginTablet,
		flipBoxFrontTitleMarginMobile,
		flipBoxFrontTitleMarginLink,

		flipBoxFrontTitleFontFamily,
		flipBoxFrontTitleFontSize,
		flipBoxFrontTitleFontSizeUnits,
		flipBoxFrontTitleFontWeight,
		flipBoxFrontTitleFontStyle,
		flipBoxFrontTitleTextTransform,
		flipBoxFrontTitleTextDecoration,
		flipBoxFrontTitleLetterSpacing,
		flipBoxFrontTitleLetterSpacingUnits,
		flipBoxFrontTitleLineHeight,
		flipBoxFrontTitleLineHeightUnits,

	} = attributes;

	/** Start Front Title Color */
	const handleColorSwitcherChange = (value) => {
		setAttributes({ flipBoxFrontTitleFontColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ flipBoxFrontTitleFontColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ flipBoxFrontTitleFontHoverColor: value });
	};
	/** End Front Title Color */

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxFrontTitleMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxFrontTitleMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxFrontTitleMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxFrontTitleMarginMobile: {
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
					setAttributes( {flipBoxFrontTitleMarginDesktop: {...flipBoxFrontTitleMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxFrontTitleMarginTablet: {...flipBoxFrontTitleMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxFrontTitleMarginMobile: {...flipBoxFrontTitleMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxFrontTitleMarginLink: !flipBoxFrontTitleMarginLink} );
	}

	const flipBoxFrontTitleMarginUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxFrontTitleMarginUnits: {
				...flipBoxFrontTitleMarginUnits,
				[deviceType]: unit
			}
		})
	}

	return (
		<>
			<FB_Color
				label={__(" Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxFrontTitleFontColorSwitcher}
				globalColor={flipBoxFrontTitleFontColor}
				globalHoverColor={flipBoxFrontTitleFontHoverColor}
				handleColorSwitcherChange={handleColorSwitcherChange}
				handleGlobalColorChange={handleGlobalColorChange}
				handleGlobalHoverColorChange={handleGlobalHoverColorChange}
			/>
			<FB_TypographyControl
				fontFamily={flipBoxFrontTitleFontFamily}
				onChangeFontFamily={(value) => setAttributes({ flipBoxFrontTitleFontFamily: value })}

				fontSize={flipBoxFrontTitleFontSize}
				onChangeFontSize={(value) => setAttributes({ flipBoxFrontTitleFontSize: value })}

				fontSizeUnits={flipBoxFrontTitleFontSizeUnits}
				onChangeFontSizeUnit={(value) => setAttributes({ flipBoxFrontTitleFontSizeUnits: value })}

				fontWeight={flipBoxFrontTitleFontWeight}
				onChangeFontWeight={(value) => setAttributes({ flipBoxFrontTitleFontWeight: value })}

				fontStyle={flipBoxFrontTitleFontStyle}
				onChangeFontStyle={(value) => setAttributes({ flipBoxFrontTitleFontStyle: value })}

				textTransform={flipBoxFrontTitleTextTransform}
				onChangeTextTransform={(value) => setAttributes({ flipBoxFrontTitleTextTransform: value })}

				textDecoration={flipBoxFrontTitleTextDecoration}
				onChangeTextDecoration={(value) => setAttributes({ flipBoxFrontTitleTextDecoration: value })}

				letterSpacing={flipBoxFrontTitleLetterSpacing}
				onChangeLetterSpacing={(value) => setAttributes({ flipBoxFrontTitleLetterSpacing: value })}

				letterSpacingUnits={flipBoxFrontTitleLetterSpacingUnits}
				onChangeLetterSpacingUnit={(value) => setAttributes({ flipBoxFrontTitleLetterSpacingUnits: value })}

				lineHeight={flipBoxFrontTitleLineHeight}
				onChangeLineHeight={(value) => setAttributes({ flipBoxFrontTitleLineHeight: value })}

				lineHeightUnits={flipBoxFrontTitleLineHeightUnits}
				onChangeLineHeightUnit={(value) => setAttributes({ flipBoxFrontTitleLineHeightUnits: value })}

				deviceType={deviceType}
				setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxFrontTitleMarginUnitsHandler}
				spacingUnits={flipBoxFrontTitleMarginUnits}
				spacingDesktop={flipBoxFrontTitleMarginDesktop}
				spacingTablet={flipBoxFrontTitleMarginTablet}
				spacingMobile={flipBoxFrontTitleMarginMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxFrontTitleMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
