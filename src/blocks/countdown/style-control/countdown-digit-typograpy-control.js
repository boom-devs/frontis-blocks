import { __ } from '@wordpress/i18n';

import {BaseControl, Button, ButtonGroup, Dashicon, Dropdown, RangeControl, SelectControl} from "@wordpress/components";
import {FONT_FAMILYS, UNIT_TYPES} from "@Blocks/advanced-heading/constants/constants";
import FB_Color from "@Components/color";
import FB_Range from '@Components/range';
import FB_TypographyControl from '@Components/typography-control';

export default function CountDownDigitTypographyControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
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


	const handleColorSwitcherChange = (value) => {
		setAttributes({ digitFontColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ digitFontColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ digitFontHoverColor: value });
	};


	return (
		<>

			<FB_Color
				label={__(" Color", "frontis-blocks")}
				globalColorSwitcher={digitFontColorSwitcher}
				globalColor={digitFontColor}
				globalHoverColor={digitFontHoverColor}
				handleColorSwitcherChange={handleColorSwitcherChange}
				handleGlobalColorChange={handleGlobalColorChange}
				handleGlobalHoverColorChange={handleGlobalHoverColorChange}
			/>

			{/*<FB_TypographyControl*/}
			{/*	fontFamily={digitFontFamily}*/}
			{/*	onChangeFontFamily={(value) => setAttributes({ digitFontFamily: value })}*/}

			{/*	fontSize={digitFontSize}*/}
			{/*	onChangeFontSize={(value) => setAttributes({ digitFontSize: value })}*/}

			{/*	fontSizeUnits={digitFontSizeUnits}*/}
			{/*	onChangeFontSizeUnit={(value) => setAttributes({ digitFontSizeUnits: value })}*/}

			{/*	fontWeight={digitFontWeight}*/}
			{/*	onChangeFontWeight={(value) => setAttributes({ digitFontWeight: value })}*/}

			{/*	fontStyle={digitFontStyle}*/}
			{/*	onChangeFontStyle={(value) => setAttributes({ digitFontStyle: value })}*/}

			{/*	textTransform={digitTextTransform}*/}
			{/*	onChangeTextTransform={(value) => setAttributes({ digitTextTransform: value })}*/}

			{/*	textDecoration={digitTextDecoration}*/}
			{/*	onChangeTextDecoration={(value) => setAttributes({ digitTextDecoration: value })}*/}

			{/*	letterSpacing={digitLetterSpacing}*/}
			{/*	onChangeLetterSpacing={(value) => setAttributes({ digitLetterSpacing: value })}*/}

			{/*	letterSpacingUnits={digitLetterSpacingUnits}*/}
			{/*	onChangeLetterSpacingUnit={(value) => setAttributes({ digitLetterSpacingUnits: value })}*/}

			{/*	lineHeight={digitLineHeight}*/}
			{/*	onChangeLineHeight={(value) => setAttributes({ digitLineHeight: value })}*/}

			{/*	lineHeightUnits={digitLineHeightUnits}*/}
			{/*	onChangeLineHeightUnit={(value) => setAttributes({ digitLineHeightUnits: value })}*/}

			{/*	deviceType={DeviceType}*/}
			{/*	setAttributes={setAttributes}*/}
			{/*/>*/}
		</>
	);
};
