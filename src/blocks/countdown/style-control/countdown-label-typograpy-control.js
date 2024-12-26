import { __ } from '@wordpress/i18n';

import FB_TypographyControl from "@Components/typography-control";
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';

export default function CountDownLabelTypographyControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		labelFontColorSwitcher,
		labelFontColor,
		labelFontHoverColor,

		labelFontFamily,
		labelFontSize,
		labelFontSizeUnits,
		labelFontWeight,
		labelFontStyle,
		labelTextTransform,
		labelTextDecoration,
		labelLetterSpacing,
		labelLetterSpacingUnits,
		labelLineHeight,
		labelLineHeightUnits,

	} = attributes;



	return (
		<>

			<FB_SwitcherControl
				label={__("Color", "frontis-blocks")}
				globalSwitcher={labelFontColorSwitcher}
				setGlobalSwitcher={(value) => setAttributes({ labelFontColorSwitcher: value })}
			/>

			{labelFontColorSwitcher === 'normal' && (
				<FB_ColorControl
					label={__("Normal Color", "frontis-blocks")}
					globalColor={labelFontColor}
					setGlobalColor={(value) => setAttributes({ labelFontColor: value })}
				/>
			)}

			{labelFontColorSwitcher === 'hover' && (
				<FB_ColorControl
					label={__("Hover Color", "frontis-blocks")}
					globalColor={labelFontHoverColor}
					setGlobalColor={(value) => setAttributes({ labelFontHoverColor: value })}
				/>
			)}
			
			<FB_TypographyControl
				fontFamily={labelFontFamily}
				onChangeFontFamily={(value) => setAttributes({ labelFontFamily: value })}

				fontSize={labelFontSize}
				onChangeFontSize={(value) => setAttributes({ labelFontSize: value })}

				fontSizeUnits={labelFontSizeUnits}
				onChangeFontSizeUnit={(value) => setAttributes({ labelFontSizeUnits: value })}

				fontWeight={labelFontWeight}
				onChangeFontWeight={(value) => setAttributes({ labelFontWeight: value })}

				fontStyle={labelFontStyle}
				onChangeFontStyle={(value) => setAttributes({ labelFontStyle: value })}

				textTransform={labelTextTransform}
				onChangeTextTransform={(value) => setAttributes({ labelTextTransform: value })}

				textDecoration={labelTextDecoration}
				onChangeTextDecoration={(value) => setAttributes({ labelTextDecoration: value })}

				letterSpacing={labelLetterSpacing}
				onChangeLetterSpacing={(value) => setAttributes({ labelLetterSpacing: value })}

				letterSpacingUnits={labelLetterSpacingUnits}
				onChangeLetterSpacingUnit={(value) => setAttributes({ labelLetterSpacingUnits: value })}

				lineHeight={labelLineHeight}
				onChangeLineHeight={(value) => setAttributes({ labelLineHeight: value })}

				lineHeightUnits={labelLineHeightUnits}
				onChangeLineHeightUnit={(value) => setAttributes({ labelLineHeightUnits: value })}

				deviceType={deviceType}
				setAttributes={setAttributes}
			/>
		</>
	);
};
