import FB_Spacing from '@Components/spacing';
import {__} from "@wordpress/i18n";
import FB_Color from "@Components/color";
import FB_Range from "@Components/range";

export default function CounterIconControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		counterIconColorSwitcher,
		counterIconColor,
		counterIconHoverColor,
		counterIconSize,
		counterIconSizeUnits,

		counterIconMarginUnits,
		counterIconMarginDesktop,
		counterIconMarginTablet,
		counterIconMarginMobile,
		counterIconMarginLink,

	} = attributes;


	const handleColorSwitcherChange = (value) => {
		setAttributes({ counterIconColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ counterIconColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ counterIconHoverColor: value });
	};


	const counterIconSizeHandler = (value) => {
		setAttributes({ counterIconSize: value });
	};

	const counterIconSizeUnitsHandler = (value) => {
		setAttributes({ counterIconSizeUnits: value });
	};


	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( counterIconMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						counterIconMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						counterIconMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						counterIconMarginMobile: {
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
					setAttributes( {counterIconMarginDesktop: {...counterIconMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {counterIconMarginTablet: {...counterIconMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {counterIconMarginMobile: {...counterIconMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {counterIconMarginLink: !counterIconMarginLink} );
	}

	const counterIconMarginUnitsHandler = (unit) => {
		setAttributes( {
			counterIconMarginUnits: {
				...counterIconMarginUnits,
				[deviceType]: unit
			}
		})
	}

	return (
		<>
			<FB_Color
				label={__(" Color", "frontis-blocks")}
				globalColorSwitcher={counterIconColorSwitcher}
				globalColor={counterIconColor}
				globalHoverColor={counterIconHoverColor}
				handleColorSwitcherChange={handleColorSwitcherChange}
				handleGlobalColorChange={handleGlobalColorChange}
				handleGlobalHoverColorChange={handleGlobalHoverColorChange}
			/>
			<FB_Range
				min={1}
				max={300}
				label={__("Icon Size", "frontis-blocks")}
				rangeValue={counterIconSize}
				onChangeHandler={counterIconSizeHandler}
				rangeUnitHandler={counterIconSizeUnitsHandler}
				deviceType={deviceType}
				units={counterIconSizeUnits}
				setAttributes={setAttributes}
				rangeStep={1}
				resetFallbackValue={25}
			/>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={counterIconMarginUnitsHandler}
				spacingUnits={counterIconMarginUnits}
				spacingDesktop={counterIconMarginDesktop}
				spacingTablet={counterIconMarginTablet}
				spacingMobile={counterIconMarginMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={counterIconMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
