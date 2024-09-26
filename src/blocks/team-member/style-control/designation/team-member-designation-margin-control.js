import FB_Spacing from '@Components/spacing';

export default function TeamMemberDesignationMarginControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		teamMemberDesignationMarginUnits,
		teamMemberDesignationDesktopMargin,
		teamMemberDesignationTabMargin,
		teamMemberDesignationMobileMargin,
		teamMemberDesignationMarginLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberDesignationMarginLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberDesignationDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberDesignationTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberDesignationMobileMargin: {
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
					setAttributes( {teamMemberDesignationDesktopMargin: {...teamMemberDesignationDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberDesignationTabMargin: {...teamMemberDesignationTabMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberDesignationMobileMargin: {...teamMemberDesignationMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberDesignationMarginLink: !teamMemberDesignationMarginLink} );
	}

	return (
		<>
			<FB_Spacing
				label={ 'Margin' } DeviceType={DeviceType} spacingUnits={teamMemberDesignationMarginUnits}
				spacingDesktop={teamMemberDesignationDesktopMargin}
				spacingTablet={teamMemberDesignationTabMargin} spacingMobile={teamMemberDesignationMobileMargin}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={teamMemberDesignationMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>

		</>
	);
};
