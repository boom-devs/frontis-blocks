import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	 RichText,
} from '@wordpress/block-editor';

import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from './inspector';
import { useRef } from '@wordpress/element';
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';


export default function Edit({ attributes, setAttributes, clientId }) {
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
		teamMemberBadge,
		teamMemberBadgePosition,
	} = attributes;

	const blockProps = useBlockProps({
        className: `fb-team-member-main-wrapper ${blockID} ${teamMemberDesktopSwitcher && 'fb-desktop-responsive'} ${teamMemberTabletSwitcher && 'fb-tablet-responsive'} ${teamMemberMobileSwitcher && 'fb-mobile-responsive'}`,
    });

	/**
	* Manages tab button settings and switches to block settings on click
	*/
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	return (
		<>
			<Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-team-member-wrapper ${blockID} ${teamMemberGlobalWraperClass}`} id={teamMemberGlobalWraperID} ref={panelRef}>
					<div className={`fb-team-member-item`}>
						{teamMemberBadgeSwitcher === true && <>
							{teamMemberBadgePosition === 'content' &&
								<div className="fb-team-member-badge-wrapper">
									<RichText
										tagName={'span'}
										value={teamMemberBadge}
										onChange={(value) => setAttributes({teamMemberBadge: value})}
										className="fb-team-member-badge"
									/>
								</div>
							}
						</>}
						<div className={`fb-team-member-image-wrapper`}>
							{teamMemberBadgeSwitcher === true && <>
								{teamMemberBadgePosition === 'image' &&
									<div className="fb-team-member-badge-wrapper">
										<RichText
											tagName={'span'}
											value={teamMemberBadge}
											onChange={(value) => setAttributes({teamMemberBadge: value})}
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
												<button className="
													fb-team-member-social-icon-wrapper-btn" 
													aria-label={__("Social Icon", "frontis-blocks")}
													// style={{transform: `rotate(${wrapperButtonIconRotate}deg)`}}
												>
													<span style={{ transform: `rotate(${wrapperButtonIconRotate}deg)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
														{socialIconBtnIcon ? renderSVG(socialIconBtnIcon) : ''}
													</span>
													{/* {socialIconBtnIcon ? renderSVG(socialIconBtnIcon) : ''} */}
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
								<RichText
									tagName={teamMemberNameHeadingTag}
									value={teamMemberName}
									onChange={(value) => setAttributes({teamMemberName: value})}
									placeholder={__('Enter Team Member Name', 'frontis-block')}
									className="fb-team-member-name"
								/>

								<RichText
									tagName={'span'}
									value={teamMemberDesignation}
									onChange={(value) => setAttributes({teamMemberDesignation: value})}
									className="fb-team-member-designation"
								/>

								{ teamMemberDescSwitcher === true && <RichText
									tagName={'p'}
									value={teamMemberDesc}
									onChange={(value) => setAttributes({teamMemberDesc: value})}
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
													// style={{ transform: `rotate(${wrapperButtonIconRotate}deg)` }}
												>
													<span style={{ transform: `rotate(${wrapperButtonIconRotate}deg)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
														{socialIconBtnIcon ? renderSVG(socialIconBtnIcon) : ''}
													</span>
													{/* {socialIconBtnIcon ? renderSVG(socialIconBtnIcon) : ''} */}
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
