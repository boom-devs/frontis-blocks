import FB_Spacing from '@Components/spacing';

export default function TeamMemberNameMarginControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		teamMemberNameMarginUnits,
		teamMemberNameMarginDesktop,
		teamMemberNameMarginTab,
		teamMemberNameMarginMobile,
		teamMemberNameMarginLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberNameMarginLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberNameMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberNameMarginTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberNameMarginMobile: {
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
					setAttributes( {teamMemberNameMarginDesktop: {...teamMemberNameMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberNameMarginTab: {...teamMemberNameMarginTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberNameMarginMobile: {...teamMemberNameMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberNameMarginLink: !teamMemberNameMarginLink} );
	}

	const teamMemberNameMarginUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberNameMarginUnits: {
				...teamMemberNameMarginUnits,
				[DeviceType]: unit
			}
		})
	}

	return (
		<>
			<FB_Spacing
				label={ 'Margin' }
				DeviceType={DeviceType}
				spacingUnitsHandler={teamMemberNameMarginUnitsHandler}
				spacingUnits={teamMemberNameMarginUnits}
				spacingDesktop={teamMemberNameMarginDesktop}
				spacingTablet={teamMemberNameMarginTab}
				spacingMobile={teamMemberNameMarginMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={teamMemberNameMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
