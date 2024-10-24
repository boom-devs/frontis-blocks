import { __ } from '@wordpress/i18n';

import {BaseControl, Button, ButtonGroup, Dashicon, Dropdown, RangeControl, SelectControl} from "@wordpress/components";
import {FONT_FAMILYS, UNIT_TYPES} from "@Blocks/advanced-heading/constants/constants";
import FB_Color from "@Components/color";
import FB_Range from '@Components/range';
import FB_TypographyControl from '@Components/typography-control';

export default function CountDownSeparatorControl ({ attributes, setAttributes}) {

	const {
		deviceType,

		countDownSeparatorFontColorSwitcher,
		countDownSeparatorFontColor,
		countDownSeparatorFontHoverColor,

		countDownSeparatorFontFamily,
		countDownSeparatorFontSize,
		countDownSeparatorFontSizeUnits,
		countDownSeparatorFontWeight,
		countDownSeparatorFontStyle,
		countDownSeparatorTextTransform,
		countDownSeparatorTextDecoration,
		countDownSeparatorLetterSpacing,
		countDownSeparatorLetterSpacingUnits,
		countDownSeparatorLineHeight,
		countDownSeparatorLineHeightUnits,

		countDownSeparatorHorizontalGap,
		countDownSeparatorHorizontalGapUnits,
		countDownSeparatorVerticalGap,
		countDownSeparatorVerticalGapUnits

	} = attributes;


	const handleColorSwitcherChange = (value) => {
		setAttributes({ countDownSeparatorFontColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ countDownSeparatorFontColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ countDownSeparatorFontHoverColor: value });
	};


	return (
		<>

			<FB_Color
				label={__(" Color", "frontis-blocks")}
				globalColorSwitcher={countDownSeparatorFontColorSwitcher}
				globalColor={countDownSeparatorFontColor}
				globalHoverColor={countDownSeparatorFontHoverColor}
				handleColorSwitcherChange={handleColorSwitcherChange}
				handleGlobalColorChange={handleGlobalColorChange}
				handleGlobalHoverColorChange={handleGlobalHoverColorChange}
			/>

			<FB_TypographyControl
				fontFamily={countDownSeparatorFontFamily}
				onChangeFontFamily={(value) => setAttributes({ countDownSeparatorFontFamily: value })}

				fontSize={countDownSeparatorFontSize}
				onChangeFontSize={(value) => setAttributes({ countDownSeparatorFontSize: value })}

				fontSizeUnits={countDownSeparatorFontSizeUnits}
				onChangeFontSizeUnit={(value) => setAttributes({ countDownSeparatorFontSizeUnits: value })}

				fontWeight={countDownSeparatorFontWeight}
				onChangeFontWeight={(value) => setAttributes({ countDownSeparatorFontWeight: value })}

				fontStyle={countDownSeparatorFontStyle}
				onChangeFontStyle={(value) => setAttributes({ countDownSeparatorFontStyle: value })}

				textTransform={countDownSeparatorTextTransform}
				onChangeTextTransform={(value) => setAttributes({ countDownSeparatorTextTransform: value })}

				textDecoration={countDownSeparatorTextDecoration}
				onChangeTextDecoration={(value) => setAttributes({ countDownSeparatorTextDecoration: value })}

				letterSpacing={countDownSeparatorLetterSpacing}
				onChangeLetterSpacing={(value) => setAttributes({ countDownSeparatorLetterSpacing: value })}

				letterSpacingUnits={countDownSeparatorLetterSpacingUnits}
				onChangeLetterSpacingUnit={(value) => setAttributes({ countDownSeparatorLetterSpacingUnits: value })}

				lineHeight={countDownSeparatorLineHeight}
				onChangeLineHeight={(value) => setAttributes({ countDownSeparatorLineHeight: value })}

				lineHeightUnits={countDownSeparatorLineHeightUnits}
				onChangeLineHeightUnit={(value) => setAttributes({ countDownSeparatorLineHeightUnits: value })}

				deviceType={deviceType}
				setAttributes={setAttributes}
			/>

			<FB_Range
				min={1}
				max={100}
				label={__("Horizontal Spacing", "frontis-blocks")}
				rangeValue={countDownSeparatorHorizontalGap}
				onChangeHandler={(value) => setAttributes({ countDownSeparatorHorizontalGap: value })}
				rangeUnitHandler={(value) => setAttributes({ countDownSeparatorHorizontalGapUnits: value })}
				deviceType={deviceType}
				units={countDownSeparatorHorizontalGapUnits}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={70}
			/>

			<FB_Range
				min={1}
				max={100}
				label={__("Vertical Spacing", "frontis-blocks")}
				rangeValue={countDownSeparatorVerticalGap}
				onChangeHandler={(value) => setAttributes({ countDownSeparatorVerticalGap: value })}
				rangeUnitHandler={(value) => setAttributes({ countDownSeparatorVerticalGapUnits: value })}
				deviceType={deviceType}
				units={countDownSeparatorVerticalGapUnits}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={20}
			/>
		</>
	);
};
