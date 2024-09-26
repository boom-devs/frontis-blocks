import FB_Spacing from '@Components/spacing';

export default function TeamMemberDesignationMarginControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		teamMemberDesignationMarginUnits,
		teamMemberDesignationMarginDesktop,
		teamMemberDesignationMarginTab,
		teamMemberDesignationMarginMobile,
		teamMemberDesignationMarginLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberDesignationMarginLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberDesignationMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberDesignationMarginTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberDesignationMarginMobile: {
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
					setAttributes( {teamMemberDesignationMarginDesktop: {...teamMemberDesignationMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberDesignationMarginTab: {...teamMemberDesignationMarginTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberDesignationMarginMobile: {...teamMemberDesignationMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberDesignationMarginLink: !teamMemberDesignationMarginLink} );
	}
	const teamMemberDesignationMarginUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberDesignationMarginUnits: {
				...teamMemberDesignationMarginUnits,
				[DeviceType]: unit
			}
		})
	}

	return (
		<>

			<FB_Spacing
				label={ 'Margin' }
				DeviceType={DeviceType}
				spacingUnitsHandler={teamMemberDesignationMarginUnitsHandler}
				spacingUnits={teamMemberDesignationMarginUnits}
				spacingDesktop={teamMemberDesignationMarginDesktop}
				spacingTablet={teamMemberDesignationMarginTab}
				spacingMobile={teamMemberDesignationMarginMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={teamMemberDesignationMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>

		</>
	);
};
