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


export default function TeamMemberImageBorderControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		teamMemberImageBorderTypeUnits,
		teamMemberImageBorderTypeDesktop,
		teamMemberImageBorderTypeTab,
		teamMemberImageBorderTypeMobile,
		teamMemberImageBorderTypeLink,

		teamMemberImageBorder,
		teamMemberImageBorderColor,
		teamMemberImageBackgroundColor


	} = attributes;


	console.log(teamMemberImageBorderTypeUnits);
	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberImageBorderTypeLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberImageBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberImageBorderTypeTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberImageBorderTypeMobile: {
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
					setAttributes( {teamMemberImageBorderTypeDesktop: {...teamMemberImageBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberImageBorderTypeTab: {...teamMemberImageBorderTypeTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberImageBorderTypeMobile: {...teamMemberImageBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberImageBorderTypeLink: !teamMemberImageBorderTypeLink} );
	}

	const teamMemberImgBorderTypeUnits = (unit) => {
		setAttributes(
			{
				...teamMemberImageBorderTypeUnits, // Spread the existing spacingUnits object
				[DeviceType]: unit // Dynamically update the specific DeviceType
			}
		)
	}

	const teamMemberImageBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberImageBorderTypeUnits: {
				...teamMemberImageBorderTypeUnits,
				[DeviceType]: unit
			}
		})
	}


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
			spacingUnitsHandler={teamMemberImageBorderTypeUnitsHandler}
			spacingUnits={teamMemberImageBorderTypeUnits}
			spacingDesktop={teamMemberImageBorderTypeDesktop}
			spacingTablet={teamMemberImageBorderTypeTab}
			spacingMobile={teamMemberImageBorderTypeMobile}
			handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
			spacingCombineBtn={teamMemberImageBorderTypeLink}
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
									color={teamMemberImageBorderColor}
									onChange={(value) => setAttributes({ teamMemberImageBorderColor: value })}
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
									value={teamMemberImageBorderColor}
									onChange={(value) => setAttributes({ teamMemberImageBorderColor: value })}
								/>
							</div>
						</BaseControl>
					</div>
				)}
			/>
		</BaseControl>

		<BaseControl
			label={__("Overlay Color", "frontis-blocks")}
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
									color={teamMemberImageBorderColor}
									onChange={(value) => setAttributes({ teamMemberImageBackgroundColor: value })}
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
									value={teamMemberImageBorderColor}
									onChange={(value) => setAttributes({ teamMemberImageBackgroundColor: value })}
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
