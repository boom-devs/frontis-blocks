import FB_Spacing from '@Components/spacing';

export default function TeamMemberNameMarginControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		teamMemberNameMarginUnits,
		teamMemberNameDesktopMargin,
		teamMemberNameTabMargin,
		teamMemberNameMobileMargin,
		teamMemberNameMarginLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberNameMarginLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberNameDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberNameTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberNameMobileMargin: {
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
					setAttributes( {teamMemberNameDesktopMargin: {...teamMemberNameDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberNameTabMargin: {...teamMemberNameTabMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberNameMobileMargin: {...teamMemberNameMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberNameMarginLink: !teamMemberNameMarginLink} );
	}

	return (
		<>
			<FB_Spacing
				label={ 'Margin' } DeviceType={DeviceType} spacingUnits={teamMemberNameMarginUnits}
				spacingDesktop={teamMemberNameDesktopMargin}
				spacingTablet={teamMemberNameTabMargin} spacingMobile={teamMemberNameMobileMargin}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={teamMemberNameMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>

		</>
	);
};
