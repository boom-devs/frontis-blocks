import FB_Spacing from '@Components/spacing';

export default function TeamMemberContentMarginControl ({ attributes, setAttributes}) {

	const {
		deviceType,
		teamMemberContentMarginUnits,
		teamMemberContentMarginDesktop,
		teamMemberContentMarginTab,
		teamMemberContentMarginMobile,
		teamMemberContentMarginLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberContentMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberContentMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberContentMarginTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberContentMarginMobile: {
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
					setAttributes( {teamMemberContentMarginDesktop: {...teamMemberContentMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberContentMarginTab: {...teamMemberContentMarginTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberContentMarginMobile: {...teamMemberContentMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberContentMarginLink: !teamMemberContentMarginLink} );
	}

	const teamMemberContentMarginUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberContentMarginUnits: {
				...teamMemberContentMarginUnits,
				[deviceType]: unit
			}
		})
	}

	return (
		<>
			<FB_Spacing
				label={ 'Margin' }
				deviceType={deviceType}
				spacingUnitsHandler={teamMemberContentMarginUnitsHandler}
				spacingUnits={teamMemberContentMarginUnits}
				spacingDesktop={teamMemberContentMarginDesktop}
				spacingTablet={teamMemberContentMarginTab}
				spacingMobile={teamMemberContentMarginMobile}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={teamMemberContentMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>
		</>
	);
};
