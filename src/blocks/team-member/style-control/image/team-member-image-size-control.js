import { __ } from '@wordpress/i18n';

import FB_Spacing from "@Components/spacing";
import Range from "@Components/range/Range";
export default function TeamMemberImageSizeControl ({ attributes, setAttributes}) {

	const {
		DeviceType,


	} = attributes;


	const handleBorderRadiusChange = () => {
		console.log("hello wolr")
	}


	return (
	<>

		<Range
			label={__("Width", "frontis-blocks")}
			value={30}
			onChange={handleBorderRadiusChange}
			min={0}
			max={100}
			step={1}
			displayUnit={false}
			unit={'px'}
			withInputField={false}
			allowReset={false}
			responsive={true}
			responsiveUnit={true}
			responsiveHandler={handleBorderRadiusChange}
			DeviceType={DeviceType}
		/>

		<Range
			label={__("Height", "frontis-blocks")}
			value={30}
			onChange={handleBorderRadiusChange}
			min={0}
			max={100}
			step={1}
			displayUnit={false}
			unit={'px'}
			withInputField={false}
			allowReset={false}
			responsive={true}
			responsiveUnit={true}
			responsiveHandler={handleBorderRadiusChange}
			DeviceType={DeviceType}
		/>
	</>
	);
};
