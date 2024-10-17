import FB_Spacing from '@Components/spacing';

export default function CounterNumberTitleMarginControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		counterNumberTitleMarginUnits,
		counterNumberTitleMarginDesktop,
		counterNumberTitleMarginTablet,
		counterNumberTitleMarginMobile,
		counterNumberTitleMarginLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( counterNumberTitleMarginLink ) {
			switch ( deviceType ) {
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
						counterNumberTitleMarginTablet: {
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
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {counterNumberTitleMarginDesktop: {...counterNumberTitleMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {counterNumberTitleMarginTablet: {...counterNumberTitleMarginTablet, [position]: value}} );
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
				[deviceType]: unit
			}
		})
	}

	return (
		<>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={counterNumberTitleMarginUnitsHandler}
				spacingUnits={counterNumberTitleMarginUnits}
				spacingDesktop={counterNumberTitleMarginDesktop}
				spacingTablet={counterNumberTitleMarginTablet}
				spacingMobile={counterNumberTitleMarginMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={counterNumberTitleMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
