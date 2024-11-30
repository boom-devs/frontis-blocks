import { __ } from '@wordpress/i18n';

import {BaseControl, Button, ButtonGroup, Dashicon, Dropdown, RangeControl, SelectControl} from "@wordpress/components";
import {FONT_FAMILYS, UNIT_TYPES} from "@Blocks/advanced-heading/constants/constants";
import FB_Color from "@Components/color";
import FB_Range from '@Components/range';
import FB_TypographyControl from '@Components/typography-control';

export default function CounterNumberTitleTypographyControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		counterNumberTitleFontColorSwitcher,
		counterNumberTitleFontColor,
		counterNumberTitleFontHoverColor,

		counterNumberTitleFontFamily,
		counterNumberTitleFontSize,
		counterNumberTitleFontSizeUnits,
		counterNumberTitleFontWeight,
		counterNumberTitleFontStyle,
		counterNumberTitleTextTransform,
		counterNumberTitleTextDecoration,
		counterNumberTitleLetterSpacing,
		counterNumberTitleLetterSpacingUnits,
		counterNumberTitleLineHeight,
		counterNumberTitleLineHeightUnits,


	} = attributes;


	const handleColorSwitcherChange = (value) => {
		setAttributes({ counterNumberTitleFontColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ counterNumberTitleFontColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ counterNumberTitleFontHoverColor: value });
	};


	return (
		<>

			<FB_Color
				label={__(" Color", "frontis-blocks")}
				globalColorSwitcher={counterNumberTitleFontColorSwitcher}
				globalColor={counterNumberTitleFontColor}
				globalHoverColor={counterNumberTitleFontHoverColor}
				handleColorSwitcherChange={handleColorSwitcherChange}
				handleGlobalColorChange={handleGlobalColorChange}
				handleGlobalHoverColorChange={handleGlobalHoverColorChange}
			/>

			<FB_TypographyControl
				fontFamily={counterNumberTitleFontFamily}
				onChangeFontFamily={(value) => setAttributes({ counterNumberTitleFontFamily: value })}

				fontSize={counterNumberTitleFontSize}
				onChangeFontSize={(value) => setAttributes({ counterNumberTitleFontSize: value })}

				fontSizeUnits={counterNumberTitleFontSizeUnits}
				onChangeFontSizeUnit={(value) => setAttributes({ counterNumberTitleFontSizeUnits: value })}

				fontWeight={counterNumberTitleFontWeight}
				onChangeFontWeight={(value) => setAttributes({ counterNumberTitleFontWeight: value })}

				fontStyle={counterNumberTitleFontStyle}
				onChangeFontStyle={(value) => setAttributes({ counterNumberTitleFontStyle: value })}

				textTransform={counterNumberTitleTextTransform}
				onChangeTextTransform={(value) => setAttributes({ counterNumberTitleTextTransform: value })}

				textDecoration={counterNumberTitleTextDecoration}
				onChangeTextDecoration={(value) => setAttributes({ counterNumberTitleTextDecoration: value })}

				letterSpacing={counterNumberTitleLetterSpacing}
				onChangeLetterSpacing={(value) => setAttributes({ counterNumberTitleLetterSpacing: value })}

				letterSpacingUnits={counterNumberTitleLetterSpacingUnits}
				onChangeLetterSpacingUnit={(value) => setAttributes({ counterNumberTitleLetterSpacingUnits: value })}

				lineHeight={counterNumberTitleLineHeight}
				onChangeLineHeight={(value) => setAttributes({ counterNumberTitleLineHeight: value })}

				lineHeightUnits={counterNumberTitleLineHeightUnits}
				onChangeLineHeightUnit={(value) => setAttributes({ counterNumberTitleLineHeightUnits: value })}

				deviceType={deviceType}
				setAttributes={setAttributes}
			/>
		</>
	);
};
