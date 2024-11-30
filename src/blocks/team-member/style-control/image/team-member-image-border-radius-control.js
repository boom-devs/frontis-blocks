import FB_Spacing from "@Components/spacing";
export default function TeamMemberImageBorderRadiusControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		teamMemberImageBorderRadiusUnits,
		teamMemberImageBorderRadiusDesktop,
		teamMemberImageBorderRadiusTab,
		teamMemberImageBorderRadiusMobile,
		teamMemberImageBorderRadiusLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberImageBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberImageBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberImageBorderRadiusTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberImageBorderRadiusMobile: {
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
					setAttributes( {teamMemberImageBorderRadiusDesktop: {...teamMemberImageBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberImageBorderRadiusTab: {...teamMemberImageBorderRadiusTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberImageBorderRadiusMobile: {...teamMemberImageBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberImageBorderRadiusLink: !teamMemberImageBorderRadiusLink} );
	}

	const teamMemberImageBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberImageBorderRadiusUnits: {
				...teamMemberImageBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}


	return (
	<>
		<FB_Spacing
			label={ 'Border Radius' }
			deviceType={deviceType}
			spacingUnitsHandler={teamMemberImageBorderRadiusUnitsHandler}
			spacingUnits={teamMemberImageBorderRadiusUnits}
			spacingDesktop={teamMemberImageBorderRadiusDesktop}
			spacingTablet={teamMemberImageBorderRadiusTab}
			spacingMobile={teamMemberImageBorderRadiusMobile}
			handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
			spacingCombineBtn={teamMemberImageBorderRadiusLink}
			spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
		/>

	</>
	);
};
