import { __ } from '@wordpress/i18n';
import {RichText, useBlockProps} from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {

	const {
		blockID,

		// Photo
		teamMemberImageUrl,
		teamMemberImageAlt,
		teamMemberImageOverlaySwitcher,

		// Team Name
		teamMemberName,
		teamMemberNameHeadingTag,

		// Team Designation Typography
		teamMemberDesignation,

		teamMemberDescSwitcher,
		teamMemberDesc,

		// Social Profile
		teamMemberSocialProfileSwitcher,
		teamMemberSocialItems,
		socialIconBtnSwitcher,
		socialIconBtnIcon,

		teamMemberDesktopSwitcher,
		teamMemberTabletSwitcher,
		teamMemberMobileSwitcher,

		teamMemberGlobalWraperID,
		teamMemberGlobalWraperClass,

	} = attributes;

	const blockProps = useBlockProps.save({
        className: `fb-team-member-main-wrapper ${blockID} ${teamMemberDesktopSwitcher && 'fb-desktop-responsive'} ${teamMemberTabletSwitcher && 'fb-tablet-responsive'} ${teamMemberMobileSwitcher && 'fb-mobile-responsive'}`,
    });


	return (
		<>
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-team-member-wrapper ${blockID} ${teamMemberGlobalWraperClass}`} id={teamMemberGlobalWraperID}>
					<div className={`fb-team-member-item`}>
						<div className={`fb-team-member-image-wrapper`}>
							
							<div className={`fb-team-member-image fb-team-member-flip-card`}>
								<div className="fb-team-member-flip-front">
									{teamMemberImageOverlaySwitcher === true && <div className={`fb-team-member-image-overlay`}></div>}
									{teamMemberImageUrl && (
										<img src={teamMemberImageUrl} alt={teamMemberImageAlt}/>
									)}
								</div>
								<div className="fb-team-member-flip-back">
									<div className="fb-team-member-flip-back-content">
										{ teamMemberDescSwitcher === true && <RichText.Content
											tagName={'p'}
											value={teamMemberDesc}
											className="fb-team-member-desc"
										/> }
										{teamMemberSocialProfileSwitcher && <>

											<div className="fb-team-member-social-profile-wrapper">
												{socialIconBtnSwitcher === true && 
													<button className="fb-team-member-social-icon-wrapper-btn">
														{socialIconBtnIcon ? renderSVG(socialIconBtnIcon) : ''}
													</button>
												}
												<div className={`fb-team-member-social-profile`}>
													{teamMemberSocialItems.map(item => (
														<a href={item.link} key={item.id} className="fb-team-member-social-icon">
															{item.teamMemberSocialIcon ? renderSVG(item.teamMemberSocialIcon) : ''}
														</a>
													))}
												</div> 
											</div>

										</>}
									</div>
								</div>
							</div>
						</div>
						<div className="fb-team-member-content-wrapper">
							<div className={`fb-team-member-content`}>
								<RichText.Content
									tagName={teamMemberNameHeadingTag}
									value={teamMemberName}
									className="fb-team-member-name"
								/>

								<RichText.Content
									tagName={'span'}
									value={teamMemberDesignation}
									className="fb-team-member-designation"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
