import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	Button,
	SelectControl, Dropdown, Dashicon, ColorPicker, ColorPalette,
} from '@wordpress/components';
import {BORDER_STYLES, UNIT_TYPES} from "../../constants/constants";

import FB_Spacing from "@Components/spacing";
import FB_Color from '../../../../components/color';


export default function TeamMemberContentBorderControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		teamMemberContentBorderUnits,
		teamMemberContentBorderDesktop,
		teamMemberContentBorderTab,
		teamMemberContentBorderMobile,
		teamMemberContentBorderLink,

		teamMemberContentBorder,
		teamMemberContentBorderColorSwitcher,
		teamMemberContentBorderColor,
		teamMemberContentBorderHoverColor,

		teamMemberContentBGColorSwitcher,
		teamMemberContentBGColor,
		teamMemberContentBGHoverColor,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberContentBorderLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberContentBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberContentBorderTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberContentBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {teamMemberContentBorderDesktop: {...teamMemberContentBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberContentBorderTab: {...teamMemberContentBorderTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberContentBorderMobile: {...teamMemberContentBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberContentBorderLink: !teamMemberContentBorderLink} );
	}

	const teamMemberContentBorderUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberContentBorderUnits: {
				...teamMemberContentBorderUnits,
				[DeviceType]: unit
			}
		})
	}

	/** Content border Color */
    const handleTeamMemberContentBorderColorSwitcherChange = (value) => {
        setAttributes({ teamMemberContentBorderColorSwitcher: value });
    };
    const handleTeamMemberContentBorderColorChange = (value) => {
        setAttributes({ teamMemberContentBorderColor: value });
    };
    const handleTeamMemberContentBorderHoverColorChange = (value) => {
        setAttributes({ teamMemberContentBorderHoverColor: value });
    };

	/** Content border Color */
    const handleTeamMemberContentBGColorSwitcherChange = (value) => {
        setAttributes({ teamMemberContentBGColorSwitcher: value });
    };
    const handleTeamMemberContentBGColorChange = (value) => {
        setAttributes({ teamMemberContentBGColor: value });
    };
    const handleTeamMemberContentBGHoverColorChange = (value) => {
        setAttributes({ teamMemberContentBGHoverColor: value });
    };


	return (
		<>

			<SelectControl
				label={__("Border Style", "frontis-blocks")}
				value={teamMemberContentBorder}
				options={BORDER_STYLES}
				onChange={(value) => setAttributes({ teamMemberContentBorder: value })}
			/>

			<FB_Spacing
				label={ 'Border' }
				DeviceType={DeviceType}
				spacingUnitsHandler={teamMemberContentBorderUnitsHandler}
				spacingUnits={teamMemberContentBorderUnits}
				spacingDesktop={teamMemberContentBorderDesktop}
				spacingTablet={teamMemberContentBorderTab}
				spacingMobile={teamMemberContentBorderMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={teamMemberContentBorderLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>

			<FB_Color
                label={__("Border Color", "frontis-blocks")}
                globalColorSwitcher={teamMemberContentBorderColorSwitcher}
                globalColor={teamMemberContentBorderColor}
                globalHoverColor={teamMemberContentBorderHoverColor}
                handleColorSwitcherChange={handleTeamMemberContentBorderColorSwitcherChange}
                handleGlobalColorChange={handleTeamMemberContentBorderColorChange}
                handleGlobalHoverColorChange={handleTeamMemberContentBorderHoverColorChange}
            />

			<FB_Color
                label={__("Background Color", "frontis-blocks")}
                globalColorSwitcher={teamMemberContentBGColorSwitcher}
                globalColor={teamMemberContentBGColor}
                globalHoverColor={teamMemberContentBGHoverColor}
                handleColorSwitcherChange={handleTeamMemberContentBGColorSwitcherChange}
                handleGlobalColorChange={handleTeamMemberContentBGColorChange}
                handleGlobalHoverColorChange={handleTeamMemberContentBGHoverColorChange}
            />

		</>
	);
};
