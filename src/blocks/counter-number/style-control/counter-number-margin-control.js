import FB_Spacing from '@Components/spacing';

export default function CounterNumberMarginControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		counterNumberMarginUnits,
		counterNumberMarginDesktop,
		counterNumberMarginTablet,
		counterNumberMarginMobile,
		counterNumberMarginLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( counterNumberMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						counterNumberMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						counterNumberMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						counterNumberMarginMobile: {
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
					setAttributes( {counterNumberMarginDesktop: {...counterNumberMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {counterNumberMarginTablet: {...counterNumberMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {counterNumberMarginMobile: {...counterNumberMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {counterNumberMarginLink: !counterNumberMarginLink} );
	}

	const counterNumberMarginUnitsHandler = (unit) => {
		setAttributes( {
			counterNumberMarginUnits: {
				...counterNumberMarginUnits,
				[deviceType]: unit
			}
		})
	}

	return (
		<>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={counterNumberMarginUnitsHandler}
				spacingUnits={counterNumberMarginUnits}
				spacingDesktop={counterNumberMarginDesktop}
				spacingTablet={counterNumberMarginTablet}
				spacingMobile={counterNumberMarginMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={counterNumberMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
