import { __ } from '@wordpress/i18n';

import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';

export default function CountDownDigitTypographyControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		digitFontColorSwitcher,
		digitFontColor,
		digitFontHoverColor,

		digitFontFamily,
		digitFontSize,
		digitFontSizeUnits,
		digitFontWeight,
		digitFontStyle,
		digitTextTransform,
		digitTextDecoration,
		digitLetterSpacing,
		digitLetterSpacingUnits,
		digitLineHeight,
		digitLineHeightUnits,
	} = attributes;


	return (
		<>

			<FB_TypographyControl
				fontFamily={digitFontFamily}
				onChangeFontFamily={(value) => setAttributes({ digitFontFamily: value })}

				fontSize={digitFontSize}
				onChangeFontSize={(value) => setAttributes({ digitFontSize: value })}

				fontSizeUnits={digitFontSizeUnits}
				onChangeFontSizeUnit={(value) => setAttributes({ digitFontSizeUnits: value })}

				fontWeight={digitFontWeight}
				onChangeFontWeight={(value) => setAttributes({ digitFontWeight: value })}

				fontStyle={digitFontStyle}
				onChangeFontStyle={(value) => setAttributes({ digitFontStyle: value })}

				textTransform={digitTextTransform}
				onChangeTextTransform={(value) => setAttributes({ digitTextTransform: value })}

				textDecoration={digitTextDecoration}
				onChangeTextDecoration={(value) => setAttributes({ digitTextDecoration: value })}

				letterSpacing={digitLetterSpacing}
				onChangeLetterSpacing={(value) => setAttributes({ digitLetterSpacing: value })}

				letterSpacingUnits={digitLetterSpacingUnits}
				onChangeLetterSpacingUnit={(value) => setAttributes({ digitLetterSpacingUnits: value })}

				lineHeight={digitLineHeight}
				onChangeLineHeight={(value) => setAttributes({ digitLineHeight: value })}

				lineHeightUnits={digitLineHeightUnits}
				onChangeLineHeightUnit={(value) => setAttributes({ digitLineHeightUnits: value })}

				deviceType={deviceType}
				setAttributes={setAttributes}
			/>

			<FB_SwitcherControl
				label={__("Color", "frontis-blocks")}
				globalSwitcher={digitFontColorSwitcher}
				setGlobalSwitcher={(value) => setAttributes({ digitFontColorSwitcher: value })}
			/>

			{digitFontColorSwitcher === 'normal' && (
				<FB_ColorControl
					label={__("Normal Color", "frontis-blocks")}
					globalColor={digitFontColor}
					setGlobalColor={(value) => setAttributes({ digitFontColor: value })}
				/>
			)}

			{digitFontColorSwitcher === 'hover' && (
				<FB_ColorControl
					label={__("Hover Color", "frontis-blocks")}
					globalColor={digitFontHoverColor}
					setGlobalColor={(value) => setAttributes({ digitFontHoverColor: value })}
				/>
			)}
		</>
	);
};
