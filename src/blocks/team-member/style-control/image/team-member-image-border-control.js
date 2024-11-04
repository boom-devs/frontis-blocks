import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	Button,
	ButtonGroup,
	HStack,
	TextControl,
	TextareaControl,
	ResponsiveWrapper,
	MediaUpload,
	MediaUploadCheck,
	PanelBody, SelectControl, Dropdown, Dashicon, ColorPicker, ColorPalette,
} from '@wordpress/components';
import {BORDER_STYLES, UNIT_TYPES} from "../../constants/constants";

import FB_Spacing from "@Components/spacing";
import FB_Color from '../../../../components/color';


export default function TeamMemberImageBorderControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		teamMemberImageBorderUnits,
		teamMemberImageBorderDesktop,
		teamMemberImageBorderTab,
		teamMemberImageBorderMobile,
		teamMemberImageBorderLink,

		teamMemberImageBorder,
		teamMemberImageBorderColorSwitcher,
		teamMemberImageBorderColor,
		teamMemberImageBorderHoverColor,
		teamMemberImageBGColorSwitcher,
		teamMemberImageBGColor,
		teamMemberImageBGHoverColor


	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberImageBorderLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberImageBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberImageBorderTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberImageBorderMobile: {
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
					setAttributes( {teamMemberImageBorderDesktop: {...teamMemberImageBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberImageBorderTab: {...teamMemberImageBorderTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberImageBorderMobile: {...teamMemberImageBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberImageBorderLink: !teamMemberImageBorderLink} );
	}

	const teamMemberImageBorderUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberImageBorderUnits: {
				...teamMemberImageBorderUnits,
				[DeviceType]: unit
			}
		})
	}

	/** Image border Color */
    const handleTeamMemberImageBorderColorSwitcherChange = (value) => {
        setAttributes({ teamMemberImageBorderColorSwitcher: value });
    };
    const handleTeamMemberImageBorderColorChange = (value) => {
        setAttributes({ teamMemberImageBorderColor: value });
    };
    const handleTeamMemberImageBorderHoverColorChange = (value) => {
        setAttributes({ teamMemberImageBorderHoverColor: value });
    };

	/** Image border Color */
    const handleTeamMemberImageBGColorSwitcherChange = (value) => {
        setAttributes({ teamMemberImageBGColorSwitcher: value });
    };
    const handleTeamMemberImageBGColorChange = (value) => {
        setAttributes({ teamMemberImageBGColor: value });
    };
    const handleTeamMemberImageBGHoverColorChange = (value) => {
        setAttributes({ teamMemberImageBGHoverColor: value });
    };

	return (
	<>


		<SelectControl
			label={__("Border Style", "frontis-blocks")}
			value={teamMemberImageBorder}
			options={BORDER_STYLES}
			onChange={(value) => setAttributes({ teamMemberImageBorder: value })}
		/>

		<FB_Spacing
			label={ 'Border' }
			DeviceType={DeviceType}
			spacingUnitsHandler={teamMemberImageBorderUnitsHandler}
			spacingUnits={teamMemberImageBorderUnits}
			spacingDesktop={teamMemberImageBorderDesktop}
			spacingTablet={teamMemberImageBorderTab}
			spacingMobile={teamMemberImageBorderMobile}
			handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
			spacingCombineBtn={teamMemberImageBorderLink}
			spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
		/>

			<FB_Color
                label={__("Border Color", "frontis-blocks")}
                globalColorSwitcher={teamMemberImageBorderColorSwitcher}
                globalColor={teamMemberImageBorderColor}
                globalHoverColor={teamMemberImageBorderHoverColor}
                handleColorSwitcherChange={handleTeamMemberImageBorderColorSwitcherChange}
                handleGlobalColorChange={handleTeamMemberImageBorderColorChange}
                handleGlobalHoverColorChange={handleTeamMemberImageBorderHoverColorChange}
            />

			<FB_Color
                label={__("Overlay Color", "frontis-blocks")}
                globalColorSwitcher={teamMemberImageBGColorSwitcher}
                globalColor={teamMemberImageBGColor}
                globalHoverColor={teamMemberImageBGHoverColor}
                handleColorSwitcherChange={handleTeamMemberImageBGColorSwitcherChange}
                handleGlobalColorChange={handleTeamMemberImageBGColorChange}
                handleGlobalHoverColorChange={handleTeamMemberImageBGHoverColorChange}
            />

	</>
	);
};
