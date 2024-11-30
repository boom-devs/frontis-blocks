import { __ } from "@wordpress/i18n";

import FB_ResponsiveControl from "../../../../components/responsive-control";
import { Button, ButtonGroup, RangeControl } from "@wordpress/components";
import { separator_UNIT_TYPES } from "../../constants/constants";
import FB_Range from "../../../../components/range";


export default function TeamMemberImageSizeControl({
	attributes,
	setAttributes,
}) {

	const { 

		deviceType,

		teamMemberImageWidthUnits,
		teamMemberImageWidth,
		teamMemberImageHeightUnits,
		teamMemberImageHeight,

	 } = attributes;

	/** width */
	const teamMemberImageWidthHandler = (value) => {
        setAttributes({ teamMemberImageWidth: value });
    };

    const teamMemberImageWidthUnitsHandler = (value) => {
        setAttributes({ teamMemberImageWidthUnits: value });
    };

	/** height */
	const teamMemberImageHeightHandler = (value) => {
        setAttributes({ teamMemberImageHeight: value });
    };

    const teamMemberImageHeightUnitsHandler = (value) => {
        setAttributes({ teamMemberImageHeightUnits: value });
    };

	return (
		<>
			<FB_Range
            	min={1}
            	max={teamMemberImageWidthUnits[deviceType] === '%' ? 100 : 1000}
            	label={__("Width", "frontis-blocks")}
            	rangeValue={teamMemberImageWidth}
            	onChangeHandler={teamMemberImageWidthHandler}
            	rangeUnitHandler={teamMemberImageWidthUnitsHandler}
            	deviceType={deviceType}
            	units={teamMemberImageWidthUnits}
            	setAttributes={setAttributes}
            	rangeStep={1}
            	resetFallbackValue={100}
        	/>

			<FB_Range
            	min={1}
            	max={teamMemberImageHeightUnits[deviceType] === '%' ? 100 : 1000}
            	label={__("Height", "frontis-blocks")}
            	rangeValue={teamMemberImageHeight}
            	onChangeHandler={teamMemberImageHeightHandler}
            	rangeUnitHandler={teamMemberImageHeightUnitsHandler}
            	deviceType={deviceType}
            	units={teamMemberImageHeightUnits}
            	setAttributes={setAttributes}
            	rangeStep={1}
            	resetFallbackValue={100}
        	/>
		</>
	);
}
