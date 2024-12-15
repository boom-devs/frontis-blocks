import FB_Spacing from "@Components/spacing";
export default function CounterItemBorderRadiusControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		counterItemBorderRadiusUnits,
		counterItemBorderRadiusDesktop,
		counterItemBorderRadiusTab,
		counterItemBorderRadiusMobile,
		counterItemBorderRadiusLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( counterItemBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						counterItemBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						counterItemBorderRadiusTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						counterItemBorderRadiusMobile: {
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
					setAttributes( {counterItemBorderRadiusDesktop: {...counterItemBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {counterItemBorderRadiusTab: {...counterItemBorderRadiusTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {counterItemBorderRadiusMobile: {...counterItemBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {counterItemBorderRadiusLink: !counterItemBorderRadiusLink} );
	}

	const counterItemBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			counterItemBorderRadiusUnits: {
				...counterItemBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}


	return (
	<>
		<FB_Spacing
			label={ 'Border Radius'}
			deviceType={deviceType}
			spacingUnitsHandler={counterItemBorderRadiusUnitsHandler}
			spacingUnits={counterItemBorderRadiusUnits}
			spacingDesktop={counterItemBorderRadiusDesktop}
			spacingTablet={counterItemBorderRadiusTab}
			spacingMobile={counterItemBorderRadiusMobile}
			handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
			spacingCombineBtn={counterItemBorderRadiusLink}
			spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
		/>
	</>
	);
};
