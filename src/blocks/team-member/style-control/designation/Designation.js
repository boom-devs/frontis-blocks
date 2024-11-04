import { __ } from '@wordpress/i18n';

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
	ColorPalette
} from "@wordpress/components";

import React from "react";
import FB_Spacing from "../../../../components/spacing";
import FB_ResponsiveControl from "../../../../components/responsive-control";
import { FONT_FAMILYS, UNIT_TYPES } from '../../constants/constants';
import FB_TypographyControl from '../../../../components/typography-control';

const Designation = ({ attributes, setAttributes }) => {

    const {
        deviceType,
        
        teamMemberDesignationColor,
        teamMemberDesignationFontFamily,
        teamMemberDesignationFontSize,
        teamMemberDesignationFontSizeUnits,
        teamMemberDesignationFontWeight,
        teamMemberDesignationFontStyle,
        teamMemberDesignationTextTransform,
        teamMemberDesignationTextDecoration,
        teamMemberDesignationLetterSpacing,
        teamMemberDesignationLetterSpacingUnits,
        teamMemberDesignationLineHeight,
        teamMemberDesignationLineHeightUnits,
        teamMemberDesignationLoadGoogleFonts,

        teamMemberDesignationMarginUnits,
        teamMemberDesignationMarginDesktop,
        teamMemberDesignationMarginTab,
        teamMemberDesignationMarginMobile,
        teamMemberDesignationMarginLink,
    } = attributes;

    // Button Margin Functionb
    const handleDesiMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( teamMemberDesignationMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        teamMemberDesignationMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        teamMemberDesignationMarginTab: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        teamMemberDesignationMarginMobile: {
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
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {teamMemberDesignationMarginDesktop: {...teamMemberDesignationMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {teamMemberDesignationMarginTab: {...teamMemberDesignationMarginTab, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {teamMemberDesignationMarginMobile: {...teamMemberDesignationMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleDesiMarginCombineBtn = () => {
        setAttributes( {teamMemberDesignationMarginLink: !teamMemberDesignationMarginLink} );
    }

    const handleDesiMarginUnitsHandler = (unit) => {
        setAttributes( {
            teamMemberDesignationMarginUnits: {
                ...teamMemberDesignationMarginUnits,
                [deviceType]: unit
            }
        })
    }

	return (
		<PanelBody
			title={__("Designation", "frontis-blocks")}
			initialOpen={false}
			className="fb-setting-gallery-button-wrapper"
		>
			<FB_TypographyControl
                fontFamily={teamMemberDesignationFontFamily}
                onChangeFontFamily={(value) => setAttributes({ teamMemberDesignationFontFamily: value })}
                                                    
                fontSize={teamMemberDesignationFontSize}
                onChangeFontSize={(value) => setAttributes({ teamMemberDesignationFontSize: value })}
                                                    
                fontSizeUnits={teamMemberDesignationFontSizeUnits}
                onChangeFontSizeUnit={(value) => setAttributes({ teamMemberDesignationFontSizeUnits: value })}
                                                    
                fontWeight={teamMemberDesignationFontWeight}
                onChangeFontWeight={(value) => setAttributes({ teamMemberDesignationFontWeight: value })}
                                                    
                fontStyle={teamMemberDesignationFontStyle}
                onChangeFontStyle={(value) => setAttributes({ teamMemberDesignationFontStyle: value })}
                                                    
                textTransform={teamMemberDesignationTextTransform}
                onChangeTextTransform={(value) => setAttributes({ teamMemberDesignationTextTransform: value })}
                                                    
                textDecoration={teamMemberDesignationTextDecoration}
                onChangeTextDecoration={(value) => setAttributes({ teamMemberDesignationTextDecoration: value })}
                                                    
                letterSpacing={teamMemberDesignationLetterSpacing}
                onChangeLetterSpacing={(value) => setAttributes({ teamMemberDesignationLetterSpacing: value })}
                                                    
                letterSpacingUnits={teamMemberDesignationLetterSpacingUnits}
                onChangeLetterSpacingUnit={(value) => setAttributes({ teamMemberDesignationLetterSpacingUnits: value })}
                                                    
                lineHeight={teamMemberDesignationLineHeight}
                onChangeLineHeight={(value) => setAttributes({ teamMemberDesignationLineHeight: value })}
                                                    
                lineHeightUnits={teamMemberDesignationLineHeightUnits}
                onChangeLineHeightUnit={(value) => setAttributes({ teamMemberDesignationLineHeightUnits: value })}
                                                    
                deviceType={deviceType}
                setAttributes={setAttributes}
            />
			
				<BaseControl
					label={__("Color", "frontis-blocks")}
					className="fb-setting-color-setting-wrapper"
				>
					<Dropdown
						className="fb-setting-color-setting-icon-dropdown"
						contentClassName="fb-setting-color-setting-icon-dropdown-content"
						popoverProps={{ placement: "bottom-start" }}
						renderToggle={({ isOpen, onToggle }) => (
							<Button
								variant="primary"
								onClick={onToggle}
								aria-expanded={isOpen}
								aria-label={__("Toggle Typography Settings", "frontis-blocks")}
								className="fb-setting-color-setting-icon-btn"
							>
								<Dashicon
									icon="color-picker"
									className="fb-setting-color-setting-icon"
								/>
							</Button>
						)}
						renderContent={() => (
							<div className="fb-setting-color-setting-icon-popup">
								<BaseControl className="fb-setting-color-setting-icon-popup-inner">
									<div className="fb-setting-normal-color">
										<ColorPicker
											color={teamMemberDesignationColor}
											onChange={(value) =>
												setAttributes({ teamMemberDesignationColor: value })
											}
											enableAlpha={true}
										/>
										<div className="fb-setting-color-label">
											{__("Default Colors", "frontis-blocks")}
										</div>
										<ColorPalette
											colors={[
												{ color: "#F72585" },
												{ color: "#7209B7" },
												{ color: "#3A0CA3" },
												{ color: "#4361EE" },
												{ color: "#4CC9F0" },
											]}
											disableCustomColors={true}
											value={teamMemberDesignationColor}
											onChange={(value) =>
												setAttributes({ teamMemberDesignationColor: value })
											}
										/>
									</div>
								</BaseControl>
							</div>
						)}
					/>
				</BaseControl>


			<FB_Spacing
				label={__("Margin", "frontis-blocks")}
				deviceType={deviceType}
				spacingUnitsHandler={handleDesiMarginUnitsHandler}
				spacingUnits={teamMemberDesignationMarginUnits}
				spacingDesktop={teamMemberDesignationMarginDesktop}
				spacingTablet={teamMemberDesignationMarginTab}
				spacingMobile={teamMemberDesignationMarginMobile}
				handleSpacingUnitHandler={handleDesiMarginUnitChange}
				spacingCombineBtn={teamMemberDesignationMarginLink}
				spacingCombineBtnHandler={handleDesiMarginCombineBtn}
				setAttributes={setAttributes}
			/>
		</PanelBody>
	);
};

export default Designation;
