import FB_Spacing from '@Components/spacing';
import {__} from "@wordpress/i18n";
import FB_Color from "@Components/color";
import FB_Range from "@Components/range";
import FB_TypographyControl from "@Components/typography-control";

export default function FlipBoxFrontContentControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		flipBoxFrontContentFontColorSwitcher,
		flipBoxFrontContentFontColor,
		flipBoxFrontContentFontHoverColor,

		flipBoxFrontContentMarginUnits,
		flipBoxFrontContentMarginDesktop,
		flipBoxFrontContentMarginTablet,
		flipBoxFrontContentMarginMobile,
		flipBoxFrontContentMarginLink,

		flipBoxFrontContentFontFamily,
		flipBoxFrontContentFontSize,
		flipBoxFrontContentFontSizeUnits,
		flipBoxFrontContentFontWeight,
		flipBoxFrontContentFontStyle,
		flipBoxFrontContentTextTransform,
		flipBoxFrontContentTextDecoration,
		flipBoxFrontContentLetterSpacing,
		flipBoxFrontContentLetterSpacingUnits,
		flipBoxFrontContentLineHeight,
		flipBoxFrontContentLineHeightUnits,

	} = attributes;

	/** Start Front Title Color */
	const handleColorSwitcherChange = (value) => {
		setAttributes({ flipBoxFrontContentFontColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ flipBoxFrontContentFontColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ flipBoxFrontContentFontHoverColor: value });
	};
	/** End Front Title Color */

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxFrontContentMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxFrontContentMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxFrontContentMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxFrontContentMarginMobile: {
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
					setAttributes( {flipBoxFrontContentMarginDesktop: {...flipBoxFrontContentMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxFrontContentMarginTablet: {...flipBoxFrontContentMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxFrontContentMarginMobile: {...flipBoxFrontContentMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxFrontContentMarginLink: !flipBoxFrontContentMarginLink} );
	}

	const flipBoxFrontContentMarginUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxFrontContentMarginUnits: {
				...flipBoxFrontContentMarginUnits,
				[deviceType]: unit
			}
		})
	}

	return (
		<>
			<FB_Color
				label={__(" Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxFrontContentFontColorSwitcher}
				globalColor={flipBoxFrontContentFontColor}
				globalHoverColor={flipBoxFrontContentFontHoverColor}
				handleColorSwitcherChange={handleColorSwitcherChange}
				handleGlobalColorChange={handleGlobalColorChange}
				handleGlobalHoverColorChange={handleGlobalHoverColorChange}
			/>
			<FB_TypographyControl
				fontFamily={flipBoxFrontContentFontFamily}
				onChangeFontFamily={(value) => setAttributes({ flipBoxFrontContentFontFamily: value })}

				fontSize={flipBoxFrontContentFontSize}
				onChangeFontSize={(value) => setAttributes({ flipBoxFrontContentFontSize: value })}

				fontSizeUnits={flipBoxFrontContentFontSizeUnits}
				onChangeFontSizeUnit={(value) => setAttributes({ flipBoxFrontContentFontSizeUnits: value })}

				fontWeight={flipBoxFrontContentFontWeight}
				onChangeFontWeight={(value) => setAttributes({ flipBoxFrontContentFontWeight: value })}

				fontStyle={flipBoxFrontContentFontStyle}
				onChangeFontStyle={(value) => setAttributes({ flipBoxFrontContentFontStyle: value })}

				textTransform={flipBoxFrontContentTextTransform}
				onChangeTextTransform={(value) => setAttributes({ flipBoxFrontContentTextTransform: value })}

				textDecoration={flipBoxFrontContentTextDecoration}
				onChangeTextDecoration={(value) => setAttributes({ flipBoxFrontContentTextDecoration: value })}

				letterSpacing={flipBoxFrontContentLetterSpacing}
				onChangeLetterSpacing={(value) => setAttributes({ flipBoxFrontContentLetterSpacing: value })}

				letterSpacingUnits={flipBoxFrontContentLetterSpacingUnits}
				onChangeLetterSpacingUnit={(value) => setAttributes({ flipBoxFrontContentLetterSpacingUnits: value })}

				lineHeight={flipBoxFrontContentLineHeight}
				onChangeLineHeight={(value) => setAttributes({ flipBoxFrontContentLineHeight: value })}

				lineHeightUnits={flipBoxFrontContentLineHeightUnits}
				onChangeLineHeightUnit={(value) => setAttributes({ flipBoxFrontContentLineHeightUnits: value })}

				deviceType={deviceType}
				setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxFrontContentMarginUnitsHandler}
				spacingUnits={flipBoxFrontContentMarginUnits}
				spacingDesktop={flipBoxFrontContentMarginDesktop}
				spacingTablet={flipBoxFrontContentMarginTablet}
				spacingMobile={flipBoxFrontContentMarginMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxFrontContentMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
