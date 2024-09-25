import FB_Spacing from '@Components/spacing';

export default function TeamMemberImageMarginControl ({ attributes, setAttributes}) {

	const {
		DeviceType,
		teamMemberImageMarginUnits,
		teamMemberImageDesktopMargin,
		teamMemberImageTabMargin,
		teamMemberImageMobileMargin,
		teamMemberImageMarginLink,

	} = attributes;

	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberImageMarginLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberImageDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberImageTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberImageMobileMargin: {
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
					setAttributes( {teamMemberImageDesktopMargin: {...teamMemberImageDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberImageTabMargin: {...teamMemberImageTabMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberImageMobileMargin: {...teamMemberImageMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {teamMemberImageMarginLink: !teamMemberImageMarginLink} );
	}

	return (
		<>
			<FB_Spacing
				label={ 'Margin' } DeviceType={DeviceType} spacingUnits={teamMemberImageMarginUnits}
				spacingDesktop={teamMemberImageDesktopMargin}
				spacingTablet={teamMemberImageTabMargin} spacingMobile={teamMemberImageMobileMargin}
				handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
				spacingCombineBtn={teamMemberImageMarginLink}
				spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}
			/>

		</>
	);
};
