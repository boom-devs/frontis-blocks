import { __ } from "@wordpress/i18n";
import FB_ResponsiveControl from "../../../../components/responsive-control";
import { CONTENT_ALIGN, NORMAL_HOVER, separator_UNIT_TYPES } from "../../constants/constants";
import { BaseControl, Button, ButtonGroup, ColorPalette, ColorPicker, Dashicon, Dropdown, PanelBody, RangeControl } from "@wordpress/components";
import FB_Color from "../../../../components/color";
import FB_Range from "../../../../components/range";

const SocialIcons = ({attributes, setAttributes}) => {

    const {
		deviceType,

        teamMemberIconsSize,
        teamMemberIconsSizeUnits,
        teamMemberIconsSpacing,
        teamMemberIconsSpacingUnits,

		teamMemberIconsColorSwitcher,
		teamMemberIconsColor,
		teamMemberIconsHoverColor,
	} = attributes;

	/** size */
	const teamMemberIconsSizeHandler = (value) => {
        setAttributes({ teamMemberIconsSize: value });
    };

    const teamMemberIconsSizeUnitsHandler = (value) => {
        setAttributes({ teamMemberIconsSizeUnits: value });
    };

	/** gap */
	const teamMemberIconsSpacingHandler = (value) => {
        setAttributes({ teamMemberIconsSpacing: value });
    };

    const teamMemberIconsSpacingUnitsHandler = (value) => {
        setAttributes({ teamMemberIconsSpacingUnits: value });
    };

	/** Icon Color */
    const handleTeamMemberIconsColorSwitcherChange = (value) => {
        setAttributes({ teamMemberIconsColorSwitcher: value });
    };
    const handleTeamMemberIconsColorChange = (value) => {
        setAttributes({ teamMemberIconsColor: value });
    };
    const handleTeamMemberIconsHoverColorChange = (value) => {
        setAttributes({ teamMemberIconsHoverColor: value });
    };

	return (
		<PanelBody
			title={__("Social Icon", "frontis-blocks")}
			initialOpen={false}
			className="fb-setting-gallery-button-wrapper"
		>
			<FB_Range
            	min={1}
            	max={100}
            	label={__("Icon Size", "frontis-blocks")}
            	rangeValue={teamMemberIconsSize}
            	onChangeHandler={teamMemberIconsSizeHandler}
            	rangeUnitHandler={teamMemberIconsSizeUnitsHandler}
            	deviceType={deviceType}
            	units={teamMemberIconsSizeUnits}
            	setAttributes={setAttributes}
            	rangeStep={1}
            	resetFallbackValue={22}
        	/>

			<FB_Range
            	min={1}
            	max={100}
            	label={__("Icon Spacing", "frontis-blocks")}
            	rangeValue={teamMemberIconsSpacing}
            	onChangeHandler={teamMemberIconsSpacingHandler}
            	rangeUnitHandler={teamMemberIconsSpacingUnitsHandler}
            	deviceType={deviceType}
            	units={teamMemberIconsSpacingUnits}
            	setAttributes={setAttributes}
            	rangeStep={1}
            	resetFallbackValue={16}
        	/>

			<FB_Color
                label={__("Color", "frontis-blocks")}
                globalColorSwitcher={teamMemberIconsColorSwitcher}
                globalColor={teamMemberIconsColor}
                globalHoverColor={teamMemberIconsHoverColor}
                handleColorSwitcherChange={handleTeamMemberIconsColorSwitcherChange}
                handleGlobalColorChange={handleTeamMemberIconsColorChange}
                handleGlobalHoverColorChange={handleTeamMemberIconsHoverColorChange}
            />
		</PanelBody>
	);
};

export default SocialIcons;
