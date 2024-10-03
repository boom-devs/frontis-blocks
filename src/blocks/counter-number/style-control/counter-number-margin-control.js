import FB_Spacing from '@Components/spacing';

export default function CounterNumberMarginControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		counterNumberMarginUnits,
		counterNumberMarginDesktop,
		counterNumberMarginTab,
		counterNumberMarginMobile,
		counterNumberMarginLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( counterNumberMarginLink ) {
			switch ( DeviceType ) {
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
						counterNumberMarginTab: {
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
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {counterNumberMarginDesktop: {...counterNumberMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {counterNumberMarginTab: {...counterNumberMarginTab, [position]: value}} );
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
				[DeviceType]: unit
			}
		})
	}

	return (
		<>
			<FB_Spacing
				label={ 'Margin' }
				DeviceType={DeviceType}
				spacingUnitsHandler={counterNumberMarginUnitsHandler}
				spacingUnits={counterNumberMarginUnits}
				spacingDesktop={counterNumberMarginDesktop}
				spacingTablet={counterNumberMarginTab}
				spacingMobile={counterNumberMarginMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={counterNumberMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
