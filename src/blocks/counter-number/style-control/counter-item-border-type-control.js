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
import {BORDER_STYLES} from "../constants/constants";

import FB_Spacing from "@Components/spacing";


export default function CounterItemBorderTypeControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		counterItemBorderTypeUnits,
		counterItemBorderTypeDesktop,
		counterItemBorderTypeTab,
		counterItemBorderTypeMobile,
		counterItemBorderTypeLink,

		counterItemBorder,
		counterItemBorderColor,
	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( counterItemBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						counterItemBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						counterItemBorderTypeTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						counterItemBorderTypeMobile: {
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
					setAttributes( {counterItemBorderTypeDesktop: {...counterItemBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {counterItemBorderTypeTab: {...counterItemBorderTypeTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {counterItemBorderTypeMobile: {...counterItemBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {counterItemBorderTypeLink: !counterItemBorderTypeLink} );
	}

	const counterItemBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			counterItemBorderTypeUnits: {
				...counterItemBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}


	return (
	<>


		<SelectControl
			label={__("Border Style", "frontis-blocks")}
			value={counterItemBorder}
			options={BORDER_STYLES}
			onChange={(value) => setAttributes({ counterItemBorder: value })}
		/>

		<FB_Spacing
			label={ 'Border' }
			deviceType={deviceType}
			spacingUnitsHandler={counterItemBorderTypeUnitsHandler}
			spacingUnits={counterItemBorderTypeUnits}
			spacingDesktop={counterItemBorderTypeDesktop}
			spacingTablet={counterItemBorderTypeTab}
			spacingMobile={counterItemBorderTypeMobile}
			handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
			spacingCombineBtn={counterItemBorderTypeLink}
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
									color={counterItemBorderColor}
									onChange={(value) => setAttributes({ counterItemBorderColor: value })}
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
									value={counterItemBorderColor}
									onChange={(value) => setAttributes({ counterItemBorderColor: value })}
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
