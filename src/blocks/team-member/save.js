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
		teamMemberSocialPosition,
		teamMemberSocialProfileSwitcher,
		teamMemberSocialProfileSeparator,
		teamMemberSocialItems,
		teamMemberSocialType,
		socialIconBtnSwitcher,
		socialIconBtnIcon,
		wrapperButtonIconRotate,
		teamMemberSocialProfileSeparatorPosition,

		teamMemberDesktopSwitcher,
		teamMemberTabletSwitcher,
		teamMemberMobileSwitcher,

		teamMemberGlobalWraperID,
		teamMemberGlobalWraperClass,

		teamMemberBadgeSwitcher,
		teamMemberBadgePosition,
		teamMemberBadge,
	} = attributes;

	const blockProps = useBlockProps.save({
        className: `fb-team-member-main-wrapper ${blockID} ${teamMemberDesktopSwitcher && 'fb-desktop-responsive'} ${teamMemberTabletSwitcher && 'fb-tablet-responsive'} ${teamMemberMobileSwitcher && 'fb-mobile-responsive'}`,
    });


	return (
		<>
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-team-member-wrapper ${blockID} ${teamMemberGlobalWraperClass}`} id={teamMemberGlobalWraperID}>
					<div className={`fb-team-member-item`}>
						{teamMemberBadgeSwitcher === true && <>
							{teamMemberBadgePosition === 'content' &&
								<div className="fb-team-member-badge-wrapper">
									<RichText.Content
										tagName={'span'}
										value={teamMemberBadge}
										className="fb-team-member-badge"
									/>
								</div>
							}
						</>}
						<div className={`fb-team-member-image-wrapper`}>
							{teamMemberBadgeSwitcher === true && <>
								{teamMemberBadgePosition === 'image' &&
									<div className="fb-team-member-badge-wrapper">
										<RichText.Content
											tagName={'span'}
											value={teamMemberBadge}
											className="fb-team-member-badge"
										/>
									</div>
								}
							</>}
							<div className={`fb-team-member-image`}>
								{teamMemberImageOverlaySwitcher === true && <div className={`fb-team-member-image-overlay`}></div>}
								{teamMemberImageUrl && (
									<img src={teamMemberImageUrl} alt={teamMemberImageAlt} aria-hidden="true"/>
								)}
								
								{teamMemberSocialProfileSwitcher === true && 
									<>
										{teamMemberSocialType === 'image' && <div className="fb-team-member-social-profile-wrapper">
											{socialIconBtnSwitcher === true && 
												<button 
													className="fb-team-member-social-icon-wrapper-btn" 
													aria-label={__("Social Icon", "frontis-blocks")}
													style={{ transform: `rotate(${wrapperButtonIconRotate}deg)` }}
												>
													{socialIconBtnIcon ? renderSVG(socialIconBtnIcon) : ''}
												</button>
											}
											<div className={`fb-team-member-social-profile`}>
												{teamMemberSocialItems.map(item => (
													<a href={item.link} key={item.id} className="fb-team-member-social-icon" aria-label={__("Social Icon", "frontis-blocks")}>
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
									className="fb-team-member-name"
								/>

								<RichText.Content
									tagName={'span'}
									value={teamMemberDesignation}
									className="fb-team-member-designation"
								/>

								{ teamMemberDescSwitcher === true && <RichText.Content
									tagName={'p'}
									value={teamMemberDesc}
									className="fb-team-member-desc"
								/> }

							</div>
							{teamMemberSocialProfileSwitcher === true && 
								<>
									{teamMemberSocialType === 'content' && <>
										{(teamMemberSocialPosition === 'top' || teamMemberSocialPosition === 'bottom') && (teamMemberSocialProfileSeparatorPosition === 'top' && teamMemberSocialProfileSeparator === true) && <div className="fb-team-member-social-profile-separator"><hr/></div>}

										<div className="fb-team-member-social-profile-wrapper">
											{socialIconBtnSwitcher === true && 
												<button 
													className="fb-team-member-social-icon-wrapper-btn" 
													aria-label={__("Social Icon", "frontis-blocks")}
													style={{ transform: `rotate(${wrapperButtonIconRotate}deg)` }}
												>
													{socialIconBtnIcon ? renderSVG(socialIconBtnIcon) : ''}
												</button>
											}
											<div className={`fb-team-member-social-profile`}>
												{teamMemberSocialItems.map(item => (
													<a href={item.link} key={item.id} className="fb-team-member-social-icon" aria-label={__("Social Icon", "frontis-blocks")}>
														{item.teamMemberSocialIcon ? renderSVG(item.teamMemberSocialIcon) : ''}
													</a>
												))}
											</div> 
										</div>

										{(teamMemberSocialPosition === 'top' || teamMemberSocialPosition === 'bottom') &&(teamMemberSocialProfileSeparatorPosition === 'bottom' && teamMemberSocialProfileSeparator === true) && <div className="fb-team-member-social-profile-separator"><hr/></div>}
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
