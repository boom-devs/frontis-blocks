import { __ } from '@wordpress/i18n';

import FB_Range from "@Components/range";
import FB_Color from "@Components/color";
export default function CountDownItemBgColorControl ({ attributes, setAttributes}) {

	const {
		countDownItemBgColorSwitcher,
		countDownItemBgColor,
		countDownItemBgHoverColor,

	} = attributes;


	const handleColorSwitcherChange = (value) => {
		setAttributes({ countDownItemBgColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ countDownItemBgColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ countDownItemBgHoverColor: value });
	};

	return (
	<>
		<FB_Color
			label={__("Background Color", "frontis-blocks")}
			globalColorSwitcher={countDownItemBgColorSwitcher}
			globalColor={countDownItemBgColor}
			globalHoverColor={countDownItemBgHoverColor}
			handleColorSwitcherChange={handleColorSwitcherChange}
			handleGlobalColorChange={handleGlobalColorChange}
			handleGlobalHoverColorChange={handleGlobalHoverColorChange}
		/>
	</>
	);
};
