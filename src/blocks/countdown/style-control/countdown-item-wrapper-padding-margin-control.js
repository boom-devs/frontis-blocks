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
export default function CountDownItemWrapperPaddingMarginControl ({ attributes, setAttributes}) {

	const {
		deviceType,

		countDownItemWrapperPaddingUnits,
		countDownItemWrapperPaddingDesktop,
		countDownItemWrapperPaddingTablet,
		countDownItemWrapperPaddingMobile,
		countDownItemWrapperPaddingLink,

		countDownItemWrapperMarginUnits,
		countDownItemWrapperMarginDesktop,
		countDownItemWrapperMarginTablet,
		countDownItemWrapperMarginMobile,
		countDownItemWrapperMarginLink,

	} = attributes;

	/** Start Padding */
	const countDownItemWrapperPaddingHandleSpacingUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( countDownItemWrapperPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownItemWrapperPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownItemWrapperPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownItemWrapperPaddingMobile: {
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
					setAttributes( {countDownItemWrapperPaddingDesktop: {...countDownItemWrapperPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownItemWrapperPaddingTablet: {...countDownItemWrapperPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownItemWrapperPaddingMobile: {...countDownItemWrapperPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownItemWrapperPaddingSpacingCombineBtnHandlerFn = () => {
		setAttributes( {countDownItemWrapperPaddingLink: !countDownItemWrapperPaddingLink} );
	}

	const countDownItemWrapperPaddingSpacingUnitsHandler = (unit) => {
		setAttributes( {
			countDownItemWrapperPaddingUnits: {
				...countDownItemWrapperPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Padding */

	/** Start Margin */
	const countDownItemWrapperMarginHandleSpacingUnitHandler = ( event, position ) => {
		const value = event.target.value;
		if ( countDownItemWrapperMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						countDownItemWrapperMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						countDownItemWrapperMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						countDownItemWrapperMarginMobile: {
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
					setAttributes( {countDownItemWrapperMarginDesktop: {...countDownItemWrapperMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {countDownItemWrapperMarginTablet: {...countDownItemWrapperMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {countDownItemWrapperMarginMobile: {...countDownItemWrapperMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const countDownItemWrapperMarginSpacingCombineBtnHandlerFn = () => {
		setAttributes( {countDownItemWrapperMarginLink: !countDownItemWrapperMarginLink} );
	}

	const countDownItemWrapperMarginSpacingUnitsHandler = (unit) => {
		setAttributes( {
			countDownItemWrapperMarginUnits: {
				...countDownItemWrapperMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Margin */

	return (
		<>
			<FB_Spacing
				label={ 'Padding' }
				deviceType={deviceType}
				spacingUnitsHandler={countDownItemWrapperPaddingSpacingUnitsHandler}
				spacingUnits={countDownItemWrapperPaddingUnits}
				spacingDesktop={countDownItemWrapperPaddingDesktop}
				spacingTablet={countDownItemWrapperPaddingTablet}
				spacingMobile={countDownItemWrapperPaddingMobile}
				handleSpacingUnitHandler={countDownItemWrapperPaddingHandleSpacingUnitHandler}
				spacingCombineBtn={countDownItemWrapperPaddingLink}
				spacingCombineBtnHandler={countDownItemWrapperPaddingSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={countDownItemWrapperMarginSpacingUnitsHandler}
				spacingUnits={countDownItemWrapperMarginUnits}
				spacingDesktop={countDownItemWrapperMarginDesktop}
				spacingTablet={countDownItemWrapperMarginTablet}
				spacingMobile={countDownItemWrapperMarginMobile}
				handleSpacingUnitHandler={countDownItemWrapperMarginHandleSpacingUnitHandler}
				spacingCombineBtn={countDownItemWrapperMarginLink}
				spacingCombineBtnHandler={countDownItemWrapperMarginSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
