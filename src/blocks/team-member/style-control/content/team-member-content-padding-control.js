import FB_Spacing from '@Components/spacing';

export default function TeamMemberContentPaddingControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		teamMemberContentPaddingUnits,
		teamMemberContentPaddingDesktop,
		teamMemberContentPaddingTab,
		teamMemberContentPaddingMobile,
		teamMemberContentPaddingLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberContentPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberContentPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberContentPaddingTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberContentPaddingMobile: {
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
					setAttributes( {teamMemberContentPaddingDesktop: {...teamMemberContentPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberContentPaddingTab: {...teamMemberContentPaddingTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberContentPaddingMobile: {...teamMemberContentPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberContentPaddingLink: !teamMemberContentPaddingLink} );
	}

	const teamMemberContentPaddingUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberContentPaddingUnits: {
				...teamMemberContentPaddingUnits,
				[deviceType]: unit
			}
		})
	}

	return (
		<>
			<FB_Spacing
				label={ 'Padding' }
				deviceType={deviceType}
				spacingUnitsHandler={teamMemberContentPaddingUnitsHandler}
				spacingUnits={teamMemberContentPaddingUnits}
				spacingDesktop={teamMemberContentPaddingDesktop}
				spacingTablet={teamMemberContentPaddingTab}
				spacingMobile={teamMemberContentPaddingMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={teamMemberContentPaddingLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} 
				setAttributes={setAttributes}
			/>
		</>
	);
};
