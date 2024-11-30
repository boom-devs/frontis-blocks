import { __ } from '@wordpress/i18n';

import {BaseControl, Button, ButtonGroup, Dashicon, Dropdown, RangeControl, SelectControl} from "@wordpress/components";
import {FONT_FAMILYS, UNIT_TYPES} from "@Blocks/advanced-heading/constants/constants";
import FB_Color from "@Components/color";
import FB_Range from '@Components/range';
import FB_TypographyControl from "@Components/typography-control";

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


	const handleColorSwitcherChange = (value) => {
		setAttributes({ labelFontColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ labelFontColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ labelFontHoverColor: value });
	};



	return (
		<>

			<FB_Color
				label={__(" Color", "frontis-blocks")}
				globalColorSwitcher={labelFontColorSwitcher}
				globalColor={labelFontColor}
				globalHoverColor={labelFontHoverColor}
				handleColorSwitcherChange={handleColorSwitcherChange}
				handleGlobalColorChange={handleGlobalColorChange}
				handleGlobalHoverColorChange={handleGlobalHoverColorChange}
			/>

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
