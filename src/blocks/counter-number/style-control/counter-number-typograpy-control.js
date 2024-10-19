import { __ } from '@wordpress/i18n';

import {BaseControl, Button, ButtonGroup, Dashicon, Dropdown, RangeControl, SelectControl} from "@wordpress/components";
import {FONT_FAMILYS, UNIT_TYPES} from "@Blocks/advanced-heading/constants/constants";
import FB_Color from "@Components/color";
import FB_Range from '@Components/range';
import FB_TypographyControl from '@Components/typography-control';

export default function CounterNumberTypographyControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		counterNumberFontColorSwitcher,
		counterNumberFontColor,
		counterNumberFontHoverColor,

		counterNumberFontFamily,
		counterNumberFontSize,
		counterNumberFontSizeUnits,
		counterNumberFontWeight,
		counterNumberFontStyle,
		counterNumberTextTransform,
		counterNumberTextDecoration,
		counterNumberLetterSpacing,
		counterNumberLetterSpacingUnits,
		counterNumberLineHeight,
		counterNumberLineHeightUnits,


	} = attributes;


	const handleColorSwitcherChange = (value) => {
		setAttributes({ counterNumberFontColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ counterNumberFontColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ counterNumberFontHoverColor: value });
	};


	return (
		<>

			<FB_Color
				label={__(" Color", "frontis-blocks")}
				globalColorSwitcher={counterNumberFontColorSwitcher}
				globalColor={counterNumberFontColor}
				globalHoverColor={counterNumberFontHoverColor}
				handleColorSwitcherChange={handleColorSwitcherChange}
				handleGlobalColorChange={handleGlobalColorChange}
				handleGlobalHoverColorChange={handleGlobalHoverColorChange}
			/>

			<FB_TypographyControl
				fontFamily={counterNumberFontFamily}
				onChangeFontFamily={(value) => setAttributes({ counterNumberFontFamily: value })}

				fontSize={counterNumberFontSize}
				onChangeFontSize={(value) => setAttributes({ counterNumberFontSize: value })}

				fontSizeUnits={counterNumberFontSizeUnits}
				onChangeFontSizeUnit={(value) => setAttributes({ counterNumberFontSizeUnits: value })}

				fontWeight={counterNumberFontWeight}
				onChangeFontWeight={(value) => setAttributes({ counterNumberFontWeight: value })}

				fontStyle={counterNumberFontStyle}
				onChangeFontStyle={(value) => setAttributes({ counterNumberFontStyle: value })}

				textTransform={counterNumberTextTransform}
				onChangeTextTransform={(value) => setAttributes({ counterNumberTextTransform: value })}

				textDecoration={counterNumberTextDecoration}
				onChangeTextDecoration={(value) => setAttributes({ counterNumberTextDecoration: value })}

				letterSpacing={counterNumberLetterSpacing}
				onChangeLetterSpacing={(value) => setAttributes({ counterNumberLetterSpacing: value })}

				letterSpacingUnits={counterNumberLetterSpacingUnits}
				onChangeLetterSpacingUnit={(value) => setAttributes({ counterNumberLetterSpacingUnits: value })}

				lineHeight={counterNumberLineHeight}
				onChangeLineHeight={(value) => setAttributes({ counterNumberLineHeight: value })}

				lineHeightUnits={counterNumberLineHeightUnits}
				onChangeLineHeightUnit={(value) => setAttributes({ counterNumberLineHeightUnits: value })}

				deviceType={deviceType}
				setAttributes={setAttributes}
			/>
		</>
	);
};
