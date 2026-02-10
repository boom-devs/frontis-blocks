import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';

import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import { useRef, useEffect } from '@wordpress/element';
import loadGoogleFont from '@Utils/loadGoogleFont';
import Inspector from './inspector';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import DynamicTextValue from '@Components/dynamic-text-value';

import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generateTeamMemberStyle from './styling';

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId, context, isSelected }) {
	const {
		blockID,
		blockStyle,

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
		teamMemberSocialProfileSeparatorPosition,

		teamMemberDesktopSwitcher,
		teamMemberTabletSwitcher,
		teamMemberMobileSwitcher,

		teamMemberGlobalWraperID,
		teamMemberGlobalWraperClass,

		teamMemberBadgeSwitcher,
		teamMemberBadge,
		teamMemberBadgePosition,

		/** Start Dynamic Description Text */
		dynamicDescriptionEnabled,
		dynamicDescriptionSource,
		dynamicDescriptionPostId,
		dynamicDescriptionPostType,
		dynamicDescriptionPostLabel,
		dynamicDescriptionField,
		dynamicDescriptionFeaturedImageField,

		dynamicDescriptionDateType,
		dynamicDescriptionDateFormat,

		dynamicDescriptionTimeType,
		dynamicDescriptionTimeFormat,

		dynamicDescriptionCommentsZeroText,
		dynamicDescriptionCommentsOneText,
		dynamicDescriptionCommentsManyText,

		dynamicDescriptionTermsTaxonomy,
		dynamicDescriptionTermsSeparator,
		dynamicDescriptionEnableLink,
		dynamicDescriptionLinkSource,
		/** End Dynamic Description Text */

		/** Start Dynamic Team Member Name Text */
		dynamicTeamMemberNameEnabled,
		dynamicTeamMemberNameSource,
		dynamicTeamMemberNamePostId,
		dynamicTeamMemberNamePostType,
		dynamicTeamMemberNamePostLabel,
		dynamicTeamMemberNameField,
		dynamicTeamMemberNameFeaturedImageField,

		dynamicTeamMemberNameDateType,
		dynamicTeamMemberNameDateFormat,

		dynamicTeamMemberNameTimeType,
		dynamicTeamMemberNameTimeFormat,

		dynamicTeamMemberNameCommentsZeroText,
		dynamicTeamMemberNameCommentsOneText,
		dynamicTeamMemberNameCommentsManyText,

		dynamicTeamMemberNameTermsTaxonomy,
		dynamicTeamMemberNameTermsSeparator,
		dynamicTeamMemberNameEnableLink,
		dynamicTeamMemberNameLinkSource,
		/** End Dynamic Team Member Name Text */

		/** Start Dynamic Team Member Designation Text */
		dynamicTeamMemberDesignationEnabled,
		dynamicTeamMemberDesignationSource,
		dynamicTeamMemberDesignationPostId,
		dynamicTeamMemberDesignationPostType,
		dynamicTeamMemberDesignationPostLabel,
		dynamicTeamMemberDesignationField,
		dynamicTeamMemberDesignationFeaturedImageField,

		dynamicTeamMemberDesignationDateType,
		dynamicTeamMemberDesignationDateFormat,

		dynamicTeamMemberDesignationTimeType,
		dynamicTeamMemberDesignationTimeFormat,

		dynamicTeamMemberDesignationCommentsZeroText,
		dynamicTeamMemberDesignationCommentsOneText,
		dynamicTeamMemberDesignationCommentsManyText,

		dynamicTeamMemberDesignationTermsTaxonomy,
		dynamicTeamMemberDesignationTermsSeparator,
		dynamicTeamMemberDesignationEnableLink,
		dynamicTeamMemberDesignationLinkSource,

		teamMemberDesignationFontFamily, 
		teamMemberNameFontFamily, 
		teamMemberDescFontFamily,
		teamMemberBadgeFontFamily,
		/** End Dynamic Team Member Designation Text */

	} = attributes;

	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: 'fb-team-member',
		isSelected,
		attributes,
		setAttributes,
	});

	/** Start Load Google Font */
	useEffect(() => {
	if (teamMemberDesignationFontFamily && !loadedFonts.has(teamMemberDesignationFontFamily)) {
		loadGoogleFont(teamMemberDesignationFontFamily);
		loadedFonts.add(teamMemberDesignationFontFamily);
	}
	}, [teamMemberDesignationFontFamily]);

	useEffect(() => {
	if (teamMemberNameFontFamily && !loadedFonts.has(teamMemberNameFontFamily)) {
		loadGoogleFont(teamMemberNameFontFamily);
		loadedFonts.add(teamMemberNameFontFamily);
	}
	}, [teamMemberNameFontFamily]);
	
	useEffect(() => {
	if (teamMemberDescFontFamily && !loadedFonts.has(teamMemberDescFontFamily)) {
		loadGoogleFont(teamMemberDescFontFamily);
		loadedFonts.add(teamMemberDescFontFamily);
	}
	}, [teamMemberDescFontFamily]);

	useEffect(() => {
	if (teamMemberBadgeFontFamily && !loadedFonts.has(teamMemberBadgeFontFamily)) {
		loadGoogleFont(teamMemberBadgeFontFamily);
		loadedFonts.add(teamMemberBadgeFontFamily);
	}
	}, [teamMemberBadgeFontFamily]);
	/** End Load Google Font */

	 /** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generateTeamMemberStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	const blockProps = useBlockProps({
		className: `fb-team-member-main-wrapper ${blockID} ${teamMemberDesktopSwitcher && 'fb-desktop-responsive'} ${teamMemberTabletSwitcher && 'fb-tablet-responsive'} ${teamMemberMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	/**
	* Manages tab button settings and switches to block settings on click
	*/
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	/**
	 * Dynamic Text Value for Description
	 */
	const { dynamicDisplayValue: dynamicDescriptionValue, dynamicDisplayLink: dynamicDescriptionLink } = DynamicTextValue({
		textEnabled:            dynamicDescriptionEnabled,
		textSource:             dynamicDescriptionSource,
		textField:              dynamicDescriptionField,

		textPostId:             dynamicDescriptionPostId,
		textPostType:           dynamicDescriptionPostType,
		textPostLabel:          dynamicDescriptionPostLabel,

		textFeaturedImageField: dynamicDescriptionFeaturedImageField,

		textDateType:           dynamicDescriptionDateType,
		textDateFormat:         dynamicDescriptionDateFormat,
		textTimeType:           dynamicDescriptionTimeType, 
		textTimeFormat:         dynamicDescriptionTimeFormat,

		textCommentsZeroText:   dynamicDescriptionCommentsZeroText,
		textCommentsOneText:    dynamicDescriptionCommentsOneText,
		textCommentsManyText:   dynamicDescriptionCommentsManyText,

		textTermsTaxonomy:      dynamicDescriptionTermsTaxonomy,
		textTermsSeparator:     dynamicDescriptionTermsSeparator,

		textLinkEnabled:        dynamicDescriptionEnableLink,
		textLinkSource:         dynamicDescriptionLinkSource,

		context,
	});

	/**
	 * Dynamic Text Value for Team Member Name
	 */
	const { dynamicDisplayValue: dynamicTeamMemberNameValue, dynamicDisplayLink: dynamicTeamMemberNameLink } = DynamicTextValue({
		textEnabled:            dynamicTeamMemberNameEnabled,
		textSource:             dynamicTeamMemberNameSource,
		textField:              dynamicTeamMemberNameField,

		textPostId:             dynamicTeamMemberNamePostId,
		textPostType:           dynamicTeamMemberNamePostType,
		textPostLabel:          dynamicTeamMemberNamePostLabel,

		textFeaturedImageField: dynamicTeamMemberNameFeaturedImageField,

		textDateType:           dynamicTeamMemberNameDateType,
		textDateFormat:         dynamicTeamMemberNameDateFormat,
		textTimeType:           dynamicTeamMemberNameTimeType, 
		textTimeFormat:         dynamicTeamMemberNameTimeFormat,

		textCommentsZeroText:   dynamicTeamMemberNameCommentsZeroText,
		textCommentsOneText:    dynamicTeamMemberNameCommentsOneText,
		textCommentsManyText:   dynamicTeamMemberNameCommentsManyText,

		textTermsTaxonomy:      dynamicTeamMemberNameTermsTaxonomy,
		textTermsSeparator:     dynamicTeamMemberNameTermsSeparator,

		textLinkEnabled:        dynamicTeamMemberNameEnableLink,
		textLinkSource:         dynamicTeamMemberNameLinkSource,

		context,
	});

	/**
	 * Dynamic Text Value for Team Member Designation
	 */
	const { dynamicDisplayValue: dynamicTeamMemberDesignationValue, dynamicDisplayLink: dynamicTeamMemberDesignationLink } = DynamicTextValue({
		textEnabled:            dynamicTeamMemberDesignationEnabled,
		textSource:             dynamicTeamMemberDesignationSource,
		textField:              dynamicTeamMemberDesignationField,

		textPostId:             dynamicTeamMemberDesignationPostId,
		textPostType:           dynamicTeamMemberDesignationPostType,
		textPostLabel:          dynamicTeamMemberDesignationPostLabel,

		textFeaturedImageField: dynamicTeamMemberDesignationFeaturedImageField,

		textDateType:           dynamicTeamMemberDesignationDateType,
		textDateFormat:         dynamicTeamMemberDesignationDateFormat,
		textTimeType:           dynamicTeamMemberDesignationTimeType, 
		textTimeFormat:         dynamicTeamMemberDesignationTimeFormat,

		textCommentsZeroText:   dynamicTeamMemberDesignationCommentsZeroText,
		textCommentsOneText:    dynamicTeamMemberDesignationCommentsOneText,
		textCommentsManyText:   dynamicTeamMemberDesignationCommentsManyText,

		textTermsTaxonomy:      dynamicTeamMemberDesignationTermsTaxonomy,
		textTermsSeparator:     dynamicTeamMemberDesignationTermsSeparator,

		textLinkEnabled:        dynamicTeamMemberDesignationEnableLink,
		textLinkSource:         dynamicTeamMemberDesignationLinkSource,

		context,
	});

	return (
		<>
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}

			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-team-member-wrapper ${blockID} ${teamMemberGlobalWraperClass}`} id={teamMemberGlobalWraperID} ref={panelRef}>
					<div className={`fb-team-member-item`}>
						{teamMemberBadgeSwitcher === true && <>
							{teamMemberBadgePosition === 'content' &&
								<div className="fb-team-member-badge-wrapper">
									<RichText
										tagName={'span'}
										value={teamMemberBadge}
										onChange={(value) => setAttributes({ teamMemberBadge: value })}
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
											onChange={(value) => setAttributes({ teamMemberBadge: value })}
											className="fb-team-member-badge"
										/>
									</div>
								}
							</>}
							<div className={`fb-team-member-image`}>
								{teamMemberImageOverlaySwitcher === true && <div className={`fb-team-member-image-overlay`}></div>}
								{teamMemberImageUrl && (
									<img src={teamMemberImageUrl} alt={teamMemberImageAlt} aria-hidden="true" />
								)}

								{teamMemberSocialProfileSwitcher === true &&
									<>
										{teamMemberSocialType === 'image' && <div className="fb-team-member-social-profile-wrapper">
											{socialIconBtnSwitcher === true &&
												<button className="fb-team-member-social-icon-wrapper-btn" aria-label={__("Social Icon", "frontis-blocks")}>
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
								<RichText
									tagName={teamMemberNameHeadingTag}
									value={dynamicTeamMemberNameEnabled ? dynamicTeamMemberNameValue : teamMemberName}
									onChange={(value) => {
										if (!dynamicTeamMemberNameEnabled) setAttributes({ teamMemberName: value });
									}}
									placeholder={__('Enter Team Member Name', 'frontis-block')}
									className="fb-team-member-name"
								/>

								<RichText
									tagName={'span'}
									value={dynamicTeamMemberDesignationEnabled ? dynamicTeamMemberDesignationValue : teamMemberDesignation}
									onChange={(value) => {
										if (!dynamicTeamMemberDesignationEnabled) setAttributes({ teamMemberDesignation: value });
									}}
									className="fb-team-member-designation"
								/>

								{teamMemberDescSwitcher === true && <RichText
									tagName={'p'}
									value={dynamicDescriptionEnabled ? dynamicDescriptionValue : teamMemberDesc}
									onChange={(value) => {
										if (!dynamicDescriptionEnabled) setAttributes({ teamMemberDesc: value });
									}}
									className="fb-team-member-desc"
								/>}

							</div>
							{teamMemberSocialProfileSwitcher === true &&
								<>
									{teamMemberSocialType === 'content' && <>
										{(teamMemberSocialPosition === 'top' || teamMemberSocialPosition === 'bottom') && (teamMemberSocialProfileSeparatorPosition === 'top' && teamMemberSocialProfileSeparator === true) && <div className="fb-team-member-social-profile-separator"><hr /></div>}

										<div className="fb-team-member-social-profile-wrapper">
											{socialIconBtnSwitcher === true &&
												<button className="fb-team-member-social-icon-wrapper-btn" aria-label={__("Social Icon", "frontis-blocks")}>
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

										{(teamMemberSocialPosition === 'top' || teamMemberSocialPosition === 'bottom') && (teamMemberSocialProfileSeparatorPosition === 'bottom' && teamMemberSocialProfileSeparator === true) && <div className="fb-team-member-social-profile-separator"><hr /></div>}
									</>}
								</>
							}
						</div>
					</div>
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}