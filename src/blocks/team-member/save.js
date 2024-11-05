import {RichText, useBlockProps} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {

	const {
		blockID,
		deviceType,

		// Team Name
		teamMemberName,
		teamMemberNameHeadingTag,

		// Team Designation Typography
		teamMemberDesignation,

		// Social Profile
		teamMemberSocialItems,
		

	} = attributes;

	const blockProps = useBlockProps.save({
        className: `fb-team-member-main-wrapper ${blockID}`,
    });


	return (
		<>
			
			<div {...blockProps} id={blockID}>
				<div className={`fb-team-member-wrapper ${blockID}`}>
					<div className={`fb-team-member-item`}>
						<div className={`fb-team-member-image-wrapper`}>
							<div className={`fb-team-member-image-overlay`}></div>
							{attributes.teamMemberImageMediaUrl && (
								<img src={attributes.teamMemberImageMediaUrl}/>
							)}
						</div>
						<div className={`fb-team-member-content-wrapper`}>
							<div className={`fb-team-member-content`}>
								<RichText.Content
									tagName={teamMemberNameHeadingTag}
									value={teamMemberName}
									onChange={(value) => setAttributes({teamMemberName: value})}
									placeholder={__('Enter Team Member Name', 'frontis-block')}
									className="fb-team-member-name"
								/>

								<RichText.Content
									tagName={'div'}
									value={teamMemberDesignation}
									onChange={(value) => setAttributes({teamMemberDesignation: value})}
									className="fb-team-member-designation"
								/>

								<div className={`fb-team-member-social-profile-wrapper`}>
									<div className={`fb-team-member-social-profile`}>
										{teamMemberSocialItems.map(item => (
											<a href={item.link} key={item.id} className="fb-team-member-social-icon">
												{item.teamMemberSocialIcon ? renderSVG(item.teamMemberSocialIcon) : ''}
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
