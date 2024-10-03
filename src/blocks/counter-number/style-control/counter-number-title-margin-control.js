import FB_Spacing from '@Components/spacing';

export default function CounterNumberTitleMarginControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		counterNumberTitleMarginUnits,
		counterNumberTitleMarginDesktop,
		counterNumberTitleMarginTab,
		counterNumberTitleMarginMobile,
		counterNumberTitleMarginLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( counterNumberTitleMarginLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						counterNumberTitleMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						counterNumberTitleMarginTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						counterNumberTitleMarginMobile: {
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
					setAttributes( {counterNumberTitleMarginDesktop: {...counterNumberTitleMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {counterNumberTitleMarginTab: {...counterNumberTitleMarginTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {counterNumberTitleMarginMobile: {...counterNumberTitleMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {counterNumberTitleMarginLink: !counterNumberTitleMarginLink} );
	}

	const counterNumberTitleMarginUnitsHandler = (unit) => {
		setAttributes( {
			counterNumberTitleMarginUnits: {
				...counterNumberTitleMarginUnits,
				[DeviceType]: unit
			}
		})
	}

	return (
		<>
			<FB_Spacing
				label={ 'Margin' }
				DeviceType={DeviceType}
				spacingUnitsHandler={counterNumberTitleMarginUnitsHandler}
				spacingUnits={counterNumberTitleMarginUnits}
				spacingDesktop={counterNumberTitleMarginDesktop}
				spacingTablet={counterNumberTitleMarginTab}
				spacingMobile={counterNumberTitleMarginMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={counterNumberTitleMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
