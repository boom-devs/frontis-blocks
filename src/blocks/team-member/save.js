import {RichText, useBlockProps} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {

	const {
		blockID,

		// Photo
		teamMemberImageUrl,
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
		teamMemberSocialProfileSeparator,
		teamMemberSocialItems,
		teamMemberSocialType,
		socialIconBtnSwitcher,
		socialIconBtnIcon,
		teamMemberSocialProfileSeparatorPosition,

		teamMemberDesktopSwitcher,
		teamMemberTabletSwitcher,
		teamMemberMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps.save({
        className: `fb-team-member-main-wrapper ${blockID} ${teamMemberDesktopSwitcher && 'fb-desktop-responsive'} ${teamMemberTabletSwitcher && 'fb-tablet-responsive'} ${teamMemberMobileSwitcher && 'fb-mobile-responsive'}`,
    });


	return (
		<>
			
			<div {...blockProps} id={blockID}>
			<div className={`fb-parent-wrapper fb-team-member-wrapper ${blockID}`}>
					<div className={`fb-team-member-item`}>
						<div className={`fb-team-member-image-wrapper`}>
							<div className={`fb-team-member-image`}>
								{teamMemberImageOverlaySwitcher === true && <div className={`fb-team-member-image-overlay`}></div>}
								{teamMemberImageUrl && (
									<img src={teamMemberImageUrl}/>
								)}
								
								{teamMemberSocialProfileSwitcher === true && 
									<>
										{teamMemberSocialType === 'image' && <div className="fb-team-member-social-profile-wrapper">
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
										</div>}
									</>
								}
							</div>
						</div>
						<div className="fb-team-member-content-wrapper">
							<div className={`fb-team-member-content`}>
								<RichText.Content
									tagName={teamMemberNameHeadingTag}
									value={teamMemberName}
									onChange={(value) => setAttributes({teamMemberName: value})}
									placeholder={__('Enter Team Member Name', 'frontis-block')}
									className="fb-team-member-name"
								/>

								<RichText.Content
									tagName={'span'}
									value={teamMemberDesignation}
									onChange={(value) => setAttributes({teamMemberDesignation: value})}
									className="fb-team-member-designation"
								/>

								{ teamMemberDescSwitcher === true && <RichText.Content
									tagName={'p'}
									value={teamMemberDesc}
									onChange={(value) => setAttributes({teamMemberDesc: value})}
									className="fb-team-member-desc"
								/> }

							</div>
							{teamMemberSocialProfileSwitcher === true && 
								<>
									{teamMemberSocialType === 'content' && <>
										{teamMemberSocialProfileSeparatorPosition === 'top' && teamMemberSocialProfileSeparator === true && <div className="fb-team-member-social-profile-separator"><hr/></div>}

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

										{teamMemberSocialProfileSeparatorPosition === 'bottom' && teamMemberSocialProfileSeparator === true && <div className="fb-team-member-social-profile-separator"><hr/></div>}
									</>}
								</>
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
