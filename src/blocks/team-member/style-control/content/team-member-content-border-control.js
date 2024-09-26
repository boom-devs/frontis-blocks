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


export default function TeamMemberContentBorderControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		teamMemberContentBorderTypeUnits,
		teamMemberContentBorderTypeDesktop,
		teamMemberContentBorderTypeTab,
		teamMemberContentBorderTypeMobile,
		teamMemberContentBorderTypeLink,

		teamMemberContentBorder,
		teamMemberContentBorderColor,
		teamMemberContentBackgroundColor


	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberContentBorderTypeLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberContentBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberContentBorderTypeTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberContentBorderTypeMobile: {
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
					setAttributes( {teamMemberContentBorderTypeDesktop: {...teamMemberContentBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberContentBorderTypeTab: {...teamMemberContentBorderTypeTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberContentBorderTypeMobile: {...teamMemberContentBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberContentBorderTypeLink: !teamMemberContentBorderTypeLink} );
	}

	const teamMemberContentBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberContentBorderTypeUnits: {
				...teamMemberContentBorderTypeUnits,
				[DeviceType]: unit
			}
		})
	}


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
				spacingUnitsHandler={teamMemberContentBorderTypeUnitsHandler}
				spacingUnits={teamMemberContentBorderTypeUnits}
				spacingDesktop={teamMemberContentBorderTypeDesktop}
				spacingTablet={teamMemberContentBorderTypeTab}
				spacingMobile={teamMemberContentBorderTypeMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={teamMemberContentBorderTypeLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>


			<BaseControl
				label={__("Border Color", "frontis-blocks")}
				className="fb-setting-color-setting-wrapper"
			>
				<Dropdown
					className="fb-setting-color-setting-icon-dropdown"
					contentClassName="fb-setting-color-setting-icon-dropdown-content"
					popoverProps={{ placement: 'bottom-start' }}
					renderToggle={({ isOpen, onToggle }) => (
						<Button
							variant="primary"
							onClick={onToggle}
							aria-expanded={isOpen}
							aria-label={__("Toggle Typography Settings", "frontis-blocks")}
							className="fb-setting-color-setting-icon-btn"
						>
							<Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
						</Button>
					)}
					renderContent={() => (
						<div className="fb-setting-color-setting-icon-popup">
							<BaseControl className="fb-setting-color-setting-icon-popup-inner">
								<div className="fb-setting-normal-color">
									<ColorPicker
										color={teamMemberContentBorderColor}
										onChange={(value) => setAttributes({ teamMemberContentBorderColor: value })}
										enableAlpha={true}
									/>
									<div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
									<ColorPalette
										colors={[
											{ color: '#F72585' },
											{ color: '#7209B7' },
											{ color: '#3A0CA3' },
											{ color: '#4361EE' },
											{ color: '#4CC9F0' },
										]}
										disableCustomColors={true}
										value={teamMemberContentBorderColor}
										onChange={(value) => setAttributes({ teamMemberContentBorderColor: value })}
									/>
								</div>
							</BaseControl>
						</div>
					)}
				/>
			</BaseControl>

			<BaseControl
				label={__("Background Color", "frontis-blocks")}
				className="fb-setting-color-setting-wrapper"
			>
				<Dropdown
					className="fb-setting-color-setting-icon-dropdown"
					contentClassName="fb-setting-color-setting-icon-dropdown-content"
					popoverProps={{ placement: 'bottom-start' }}
					renderToggle={({ isOpen, onToggle }) => (
						<Button
							variant="primary"
							onClick={onToggle}
							aria-expanded={isOpen}
							aria-label={__("Toggle Typography Settings", "frontis-blocks")}
							className="fb-setting-color-setting-icon-btn"
						>
							<Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
						</Button>
					)}
					renderContent={() => (
						<div className="fb-setting-color-setting-icon-popup">
							<BaseControl className="fb-setting-color-setting-icon-popup-inner">
								<div className="fb-setting-normal-color">
									<ColorPicker
										color={teamMemberContentBorderColor}
										onChange={(value) => setAttributes({ teamMemberContentBackgroundColor: value })}
										enableAlpha={true}
									/>
									<div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
									<ColorPalette
										colors={[
											{ color: '#F72585' },
											{ color: '#7209B7' },
											{ color: '#3A0CA3' },
											{ color: '#4361EE' },
											{ color: '#4CC9F0' },
										]}
										disableCustomColors={true}
										value={teamMemberContentBorderColor}
										onChange={(value) => setAttributes({ teamMemberContentBackgroundColor: value })}
									/>
								</div>
							</BaseControl>
						</div>
					)}
				/>
			</BaseControl>

		</>
	);
};
