import { __ } from '@wordpress/i18n';

import FB_Color from '@Components/color';
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import {BORDER_STYLES} from "@Blocks/countdown/constants/constants";
import {BaseControl, Button, ButtonGroup, SelectControl, ToggleControl} from "@wordpress/components";
import {TEXT_ALIGN} from "@Blocks/advanced-heading/constants/constants";
import {
	SELECT_BG_IMAGE_ATTACHMENT_TYPE,
	SELECT_BG_IMAGE_POSITION_TYPE,
	SELECT_BG_IMAGE_REPEAT_TYPE, SELECT_BG_IMAGE_SIZE_TYPE
} from "@Blocks/flip-box/constants/constants";
import FB_BoxShadowControl from "@Components/box-shadow";
export default function CountDownItemWrapperBorderControl ({ attributes, setAttributes}) {

	const {
		deviceType,


		countDownItemWrapperBorderTypeUnits,
		countDownItemWrapperBorderTypeDesktop,
		countDownItemWrapperBorderTypeTablet,
		countDownItemWrapperBorderTypeMobile,
		countDownItemWrapperBorderTypeLink,
		countDownItemWrapperBorder,
		countDownItemWrapperBorderColorSwitcher,
		countDownItemWrapperBorderColor,
		countDownItemWrapperBorderHoverColor,
		countDownItemWrapperBorderRadiusUnits,
		countDownItemWrapperBorderRadiusDesktop,
		countDownItemWrapperBorderRadiusTablet,
		countDownItemWrapperBorderRadiusMobile,
		countDownItemWrapperBorderRadiusLink,


	} = attributes;

	/** Start Border Type*/
	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( countDownItemWrapperBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownItemWrapperBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownItemWrapperBorderTypeTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownItemWrapperBorderTypeMobile: {
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
					setAttributes( {countDownItemWrapperBorderTypeDesktop: {...countDownItemWrapperBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownItemWrapperBorderTypeTablet: {...countDownItemWrapperBorderTypeTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownItemWrapperBorderTypeMobile: {...countDownItemWrapperBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {countDownItemWrapperBorderTypeLink: !countDownItemWrapperBorderTypeLink} );
	}

	const countDownItemWrapperBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			countDownItemWrapperBorderTypeUnits: {
				...countDownItemWrapperBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}

	/** Start Border Type*/

	/** Start Border Radius*/
	const countDownItemWrapperHandleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( countDownItemWrapperBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownItemWrapperBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownItemWrapperBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownItemWrapperBorderRadiusMobile: {
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
					setAttributes( {countDownItemWrapperBorderRadiusDesktop: {...countDownItemWrapperBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownItemWrapperBorderRadiusTablet: {...countDownItemWrapperBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownItemWrapperBorderRadiusMobile: {...countDownItemWrapperBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownItemWrapperCombineBtnHandlerFn = () => {
		setAttributes( {countDownItemWrapperBorderRadiusLink: !countDownItemWrapperBorderRadiusLink} );
	}

	const countDownItemWrapperBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			countDownItemWrapperBorderRadiusUnits: {
				...countDownItemWrapperBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border Radius*/

	return (
		<>
			<SelectControl
				label={__("Border Style", "frontis-blocks")}
				value={countDownItemWrapperBorder}
				options={BORDER_STYLES}
				onChange={(value) => setAttributes({ countDownItemWrapperBorder: value })}
			/>
			{/** Item Background Control */}
			<FB_SwitcherControl
				label={__("Text Color", "frontis-blocks")}
				globalSwitcher={countDownItemWrapperBorderColorSwitcher}
				setGlobalSwitcher={(value) => setAttributes({ countDownItemWrapperBorderColorSwitcher: value })}
			/>
	
			{countDownItemWrapperBorderColorSwitcher === 'normal' && (
				<FB_ColorControl
					label={__("Normal Color", "frontis-blocks")}
					globalColor={countDownItemWrapperBorderColor}
					setGlobalColor={(value) => setAttributes({ countDownItemWrapperBorderColor: value })}
				/>
			)}
	
			{countDownItemWrapperBorderColorSwitcher === 'hover' && (
				<FB_ColorControl
					label={__("Hover Color", "frontis-blocks")}
					globalColor={countDownItemWrapperBorderHoverColor}
					setGlobalColor={(value) => setAttributes({ countDownItemWrapperBorderHoverColor: value })}
				/>
			)}
			<FB_Spacing
				label={ 'Border Width' }
				deviceType={deviceType}
				spacingUnitsHandler={countDownItemWrapperBorderTypeUnitsHandler}
				spacingUnits={countDownItemWrapperBorderTypeUnits}
				spacingDesktop={countDownItemWrapperBorderTypeDesktop}
				spacingTablet={countDownItemWrapperBorderTypeTablet}
				spacingMobile={countDownItemWrapperBorderTypeMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={countDownItemWrapperBorderTypeLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Border Radius' }
				deviceType={deviceType}
				spacingUnitsHandler={countDownItemWrapperBorderRadiusUnitsHandler}
				spacingUnits={countDownItemWrapperBorderRadiusUnits}
				spacingDesktop={countDownItemWrapperBorderRadiusDesktop}
				spacingTablet={countDownItemWrapperBorderRadiusTablet}
				spacingMobile={countDownItemWrapperBorderRadiusMobile}
				handleSpacingUnitHandler={countDownItemWrapperHandleSpacingUnitHandlerFn}
				spacingCombineBtn={countDownItemWrapperBorderRadiusLink}
				spacingCombineBtnHandler={countDownItemWrapperCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
