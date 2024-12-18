import { __ } from '@wordpress/i18n';

import FB_Range from "@Components/range";
import FB_Color from "@Components/color";
export default function CounterItemBgColorControl ({ attributes, setAttributes}) {

	const {
		counterItemBgColorSwitcher,
		counterItemBgColor,
		counterItemBgHoverColor,
	} = attributes;


	const handleColorSwitcherChange = (value) => {
		setAttributes({ counterItemBgColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ counterItemBgColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ counterItemBgHoverColor: value });
	};

	return (
	<>
		<FB_Color
			label={__("Background Color", "frontis-blocks")}
			globalColorSwitcher={counterItemBgColorSwitcher}
			globalColor={counterItemBgColor}
			globalHoverColor={counterItemBgHoverColor}
			handleColorSwitcherChange={handleColorSwitcherChange}
			handleGlobalColorChange={handleGlobalColorChange}
			handleGlobalHoverColorChange={handleGlobalHoverColorChange}
		/>
	</>
	);
};
