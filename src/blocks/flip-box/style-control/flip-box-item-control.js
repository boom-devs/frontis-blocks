import { __ } from '@wordpress/i18n';

import FB_Color from '@Components/color';
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import {BORDER_STYLES} from "@Blocks/countdown/constants/constants";
import {SelectControl} from "@wordpress/components";
export default function FlipBoxItemControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		flipBoxItemSize,
		flipBoxItemSizeUnits,
		flipBoxItemBorderTypeUnits,
		flipBoxItemBorderTypeDesktop,
		flipBoxItemBorderTypeTab,
		flipBoxItemBorderTypeMobile,
		flipBoxItemBorderTypeLink,
		flipBoxItemBorder,
		flipBoxItemBorderColorSwitcher,
		flipBoxItemBorderColor,
		flipBoxItemBorderHoverColor,
		flipBoxItemBorderRadiusUnits,
		flipBoxItemBorderRadiusDesktop,
		flipBoxItemBorderRadiusTab,
		flipBoxItemBorderRadiusMobile,
		flipBoxItemBorderRadiusLink,

	} = attributes;


	const flipBoxItemSizeHandler = (value) => {
		setAttributes({ flipBoxItemSize: value });
	};

	const flipBoxItemSizeUnitsHandler = (value) => {
		setAttributes({ flipBoxItemSizeUnits: value });
	};

	/** Start Border Type*/
	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxItemBorderTypeLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxItemBorderTypeDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxItemBorderTypeTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxItemBorderTypeMobile: {
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
					setAttributes( {flipBoxItemBorderTypeDesktop: {...flipBoxItemBorderTypeDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxItemBorderTypeTab: {...flipBoxItemBorderTypeTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxItemBorderTypeMobile: {...flipBoxItemBorderTypeMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxItemBorderTypeLink: !flipBoxItemBorderTypeLink} );
	}

	const flipBoxItemBorderTypeUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxItemBorderTypeUnits: {
				...flipBoxItemBorderTypeUnits,
				[deviceType]: unit
			}
		})
	}

	/** Start Border Type*/

	/** Start Border Radius*/
	const flipBoxItemHandleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( flipBoxItemBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						flipBoxItemBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						flipBoxItemBorderRadiusTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						flipBoxItemBorderRadiusMobile: {
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
					setAttributes( {flipBoxItemBorderRadiusDesktop: {...flipBoxItemBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {flipBoxItemBorderRadiusTab: {...flipBoxItemBorderRadiusTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {flipBoxItemBorderRadiusMobile: {...flipBoxItemBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const flipBoxSpacingCombineBtnHandlerFn = () => {
		setAttributes( {flipBoxItemBorderRadiusLink: !flipBoxItemBorderRadiusLink} );
	}

	const flipBoxItemBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			flipBoxItemBorderRadiusUnits: {
				...flipBoxItemBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border Radius*/



	return (
		<>
			<FB_Range
				min={1}
				max={300}
				label={__("Item Size", "frontis-blocks")}
				rangeValue={flipBoxItemSize}
				onChangeHandler={flipBoxItemSizeHandler}
				rangeUnitHandler={flipBoxItemSizeUnitsHandler}
				deviceType={deviceType}
				units={flipBoxItemSizeUnits}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={25}
			/>
			<SelectControl
				label={__("Border Style", "frontis-blocks")}
				value={flipBoxItemBorder}
				options={BORDER_STYLES}
				onChange={(value) => setAttributes({ flipBoxItemBorder: value })}
			/>
			<FB_Spacing
				label={ 'Border' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxItemBorderTypeUnitsHandler}
				spacingUnits={flipBoxItemBorderTypeUnits}
				spacingDesktop={flipBoxItemBorderTypeDesktop}
				spacingTablet={flipBoxItemBorderTypeTab}
				spacingMobile={flipBoxItemBorderTypeMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxItemBorderTypeLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Spacing
				label={ 'Border Radius' }
				deviceType={deviceType}
				spacingUnitsHandler={flipBoxItemBorderRadiusUnitsHandler}
				spacingUnits={flipBoxItemBorderRadiusUnits}
				spacingDesktop={flipBoxItemBorderRadiusDesktop}
				spacingTablet={flipBoxItemBorderRadiusTab}
				spacingMobile={flipBoxItemBorderRadiusMobile}
				handleSpacingUnitHandler={flipBoxItemHandleSpacingUnitHandlerFn}
				spacingCombineBtn={flipBoxItemBorderRadiusLink}
				spacingCombineBtnHandler={flipBoxSpacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
			<FB_Color
				label={__("Border Color", "frontis-blocks")}
				globalColorSwitcher={flipBoxItemBorderColorSwitcher}
				globalColor={flipBoxItemBorderColor}
				globalHoverColor={flipBoxItemBorderHoverColor}
				handleColorSwitcherChange={(value) => setAttributes({ flipBoxItemBorderColorSwitcher: value })}
				handleGlobalColorChange={(value) => setAttributes({ flipBoxItemBorderColor: value })}
				handleGlobalHoverColorChange={(value) => setAttributes({ flipBoxItemBorderHoverColor: value })}
			/>
		</>
	);
};
