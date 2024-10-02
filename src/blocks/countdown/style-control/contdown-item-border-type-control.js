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


export default function ContdownItemBorderTypeControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		countDownItemBorderTypeUnits,
		countDownItemBorderTypeDesktop,
		countDownItemBorderTypeTab,
		countDownItemBorderTypeMobile,
		countDownItemBorderTypeLink,

		countDownItemBorder,
		countDownItemBorderColor,
	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( countDownItemBorderTypeLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownItemBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownItemBorderTypeTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownItemBorderTypeMobile: {
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
					setAttributes( {countDownItemBorderTypeDesktop: {...countDownItemBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownItemBorderTypeTab: {...countDownItemBorderTypeTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownItemBorderTypeMobile: {...countDownItemBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {countDownItemBorderTypeLink: !countDownItemBorderTypeLink} );
	}

	const countDownItemBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			countDownItemBorderTypeUnits: {
				...countDownItemBorderTypeUnits,
				[DeviceType]: unit
			}
		})
	}


	return (
	<>


		<SelectControl
			label={__("Border Style", "frontis-blocks")}
			value={countDownItemBorder}
			options={BORDER_STYLES}
			onChange={(value) => setAttributes({ countDownItemBorder: value })}
		/>

		<FB_Spacing
			label={ 'Border' }
			DeviceType={DeviceType}
			spacingUnitsHandler={countDownItemBorderTypeUnitsHandler}
			spacingUnits={countDownItemBorderTypeUnits}
			spacingDesktop={countDownItemBorderTypeDesktop}
			spacingTablet={countDownItemBorderTypeTab}
			spacingMobile={countDownItemBorderTypeMobile}
			handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
			spacingCombineBtn={countDownItemBorderTypeLink}
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
									color={countDownItemBorderColor}
									onChange={(value) => setAttributes({ countDownItemBorderColor: value })}
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
									value={countDownItemBorderColor}
									onChange={(value) => setAttributes({ countDownItemBorderColor: value })}
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
