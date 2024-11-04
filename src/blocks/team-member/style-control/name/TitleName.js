import { __ } from "@wordpress/i18n";

import {
	BaseControl,
	PanelBody,
	Dropdown,
	SelectControl,
	ButtonGroup,
	Button,
	RangeControl,
	Dashicon,
	ColorPicker,
	ColorPalette,
} from "@wordpress/components";

import React from "react";
import FB_Spacing from "../../../../components/spacing";
import FB_ResponsiveControl from "../../../../components/responsive-control";
import { FONT_FAMILYS, NORMAL_HOVER, UNIT_TYPES } from "../../constants/constants";
import FB_TypographyControl from "../../../../components/typography-control";
import FB_Color from "../../../../components/color";

const TitleName = ({ attributes, setAttributes }) => {
	const {
		DeviceType,

		teamMemberNameColorSwitcher,
		teamMemberNameColor,
		teamMemberNameHoverColor,

		teamMemberNameFontFamily,
        teamMemberNameFontSize,
        teamMemberNameFontSizeUnits,
        teamMemberNameFontWeight,
        teamMemberNameFontStyle,
        teamMemberNameTextTransform,
        teamMemberNameTextDecoration,
        teamMemberNameLetterSpacing,
        teamMemberNameLetterSpacingUnits,
        teamMemberNameLineHeight,
        teamMemberNameLineHeightUnits,
		teamMemberNameLoadGoogleFonts,

		teamMemberNameMarginUnits,
		teamMemberNameMarginDesktop,
		teamMemberNameMarginTab,
		teamMemberNameMarginMobile,
		teamMemberNameMarginLink,
	} = attributes;

	// Button Margin Functionb
	const handleNameMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (teamMemberNameMarginLink) {
			switch (DeviceType) {
				case "Desktop":
					setAttributes({
						teamMemberNameMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						teamMemberNameMarginTab: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						teamMemberNameMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (DeviceType) {
				case "Desktop":
					setAttributes({
						teamMemberNameMarginDesktop: {
							...teamMemberNameMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						teamMemberNameMarginTab: {
							...teamMemberNameMarginTab,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						teamMemberNameMarginMobile: {
							...teamMemberNameMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleNameMarginCombineBtn = () => {
		setAttributes({ teamMemberNameMarginLink: !teamMemberNameMarginLink });
	};

	const handleNmeMarginUnitsHandler = (unit) => {
		setAttributes({
			teamMemberNameMarginUnits: {
				...teamMemberNameMarginUnits,
				[DeviceType]: unit,
			},
		});
	};

	/** Name Color */
    const handleTeamMemberNameColorSwitcherChange = (value) => {
        setAttributes({ teamMemberNameColorSwitcher: value });
    };
    const handleTeamMemberNameColorChange = (value) => {
        setAttributes({ teamMemberNameColor: value });
    };
    const handleTeamMemberNameHoverColorChange = (value) => {
        setAttributes({ teamMemberNameHoverColor: value });
    };


	return (
		<PanelBody
			title={__("Name", "frontis-blocks")}
			initialOpen={false}
			className="fb-setting-gallery-button-wrapper"
		>
			<FB_TypographyControl
                fontFamily={teamMemberNameFontFamily}
                onChangeFontFamily={(value) => setAttributes({ teamMemberNameFontFamily: value })}
                                                    
                fontSize={teamMemberNameFontSize}
                onChangeFontSize={(value) => setAttributes({ teamMemberNameFontSize: value })}
                                                    
                fontSizeUnits={teamMemberNameFontSizeUnits}
                onChangeFontSizeUnit={(value) => setAttributes({ teamMemberNameFontSizeUnits: value })}
                                                    
                fontWeight={teamMemberNameFontWeight}
                onChangeFontWeight={(value) => setAttributes({ teamMemberNameFontWeight: value })}
                                                    
                fontStyle={teamMemberNameFontStyle}
                onChangeFontStyle={(value) => setAttributes({ teamMemberNameFontStyle: value })}
                                                    
                textTransform={teamMemberNameTextTransform}
                onChangeTextTransform={(value) => setAttributes({ teamMemberNameTextTransform: value })}
                                                    
                textDecoration={teamMemberNameTextDecoration}
                onChangeTextDecoration={(value) => setAttributes({ teamMemberNameTextDecoration: value })}
                                                    
                letterSpacing={teamMemberNameLetterSpacing}
                onChangeLetterSpacing={(value) => setAttributes({ teamMemberNameLetterSpacing: value })}
                                                    
                letterSpacingUnits={teamMemberNameLetterSpacingUnits}
                onChangeLetterSpacingUnit={(value) => setAttributes({ teamMemberNameLetterSpacingUnits: value })}
                                                    
                lineHeight={teamMemberNameLineHeight}
                onChangeLineHeight={(value) => setAttributes({ teamMemberNameLineHeight: value })}
                                                    
                lineHeightUnits={teamMemberNameLineHeightUnits}
                onChangeLineHeightUnit={(value) => setAttributes({ teamMemberNameLineHeightUnits: value })}
                                                    
                DeviceType={DeviceType}
                setAttributes={setAttributes}
            />

			<FB_Color
                label={__("Color", "frontis-blocks")}
                globalColorSwitcher={teamMemberNameColorSwitcher}
                globalColor={teamMemberNameColor}
                globalHoverColor={teamMemberNameHoverColor}
                handleColorSwitcherChange={handleTeamMemberNameColorSwitcherChange}
                handleGlobalColorChange={handleTeamMemberNameColorChange}
                handleGlobalHoverColorChange={handleTeamMemberNameHoverColorChange}
            />

			<FB_Spacing
				label={__("Margin", "frontis-blocks")}
				DeviceType={DeviceType}
				spacingUnitsHandler={handleNmeMarginUnitsHandler}
				spacingUnits={teamMemberNameMarginUnits}
				spacingDesktop={teamMemberNameMarginDesktop}
				spacingTablet={teamMemberNameMarginTab}
				spacingMobile={teamMemberNameMarginMobile}
				handleSpacingUnitHandler={handleNameMarginUnitChange}
				spacingCombineBtn={teamMemberNameMarginLink}
				spacingCombineBtnHandler={handleNameMarginCombineBtn}
				setAttributes={setAttributes}
			/>
		</PanelBody>
	);
};

export default TitleName;
