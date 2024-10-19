import FB_Spacing from "@Components/spacing";
export default function TeamMemberContentBorderRadiusControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		teamMemberContentBorderRadiusUnits,
		teamMemberContentBorderRadiusDesktop,
		teamMemberContentBorderRadiusTab,
		teamMemberContentBorderRadiusMobile,
		teamMemberContentBorderRadiusLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberContentBorderRadiusLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberContentBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberContentBorderRadiusTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberContentBorderRadiusMobile: {
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
					setAttributes( {teamMemberContentBorderRadiusDesktop: {...teamMemberContentBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberContentBorderRadiusTab: {...teamMemberContentBorderRadiusTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberContentBorderRadiusMobile: {...teamMemberContentBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberContentBorderRadiusLink: !teamMemberContentBorderRadiusLink} );
	}

	const teamMemberContentBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberContentBorderRadiusUnits: {
				...teamMemberContentBorderRadiusUnits,
				[DeviceType]: unit
			}
		})
	}


	return (
	<>
		<FB_Spacing
			label={ 'Border Radius' }
			DeviceType={DeviceType}
			spacingUnitsHandler={teamMemberContentBorderRadiusUnitsHandler}
			spacingUnits={teamMemberContentBorderRadiusUnits}
			spacingDesktop={teamMemberContentBorderRadiusDesktop}
			spacingTablet={teamMemberContentBorderRadiusTab}
			spacingMobile={teamMemberContentBorderRadiusMobile}
			handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
			spacingCombineBtn={teamMemberContentBorderRadiusLink}
			spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
		/>

	</>
	);
};
